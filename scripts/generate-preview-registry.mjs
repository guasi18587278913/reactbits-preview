import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const index = JSON.parse(
  readFileSync(path.join(root, "src/data/reactbits-index.json"), "utf8"),
);
const outDir = path.join(root, "src/generated");
mkdirSync(outDir, { recursive: true });

function fileFor(item) {
  if (item.source === "pro") return path.join(root, "src/components/blocks", `${item.name}.tsx`);
  if (item.source === "starter") return path.join(root, "src/components/react-bits", `${item.name}.tsx`);
  return null;
}

function modulePathFor(item) {
  if (item.source === "pro") return `@/components/blocks/${item.name}`;
  if (item.source === "starter") return `@/components/react-bits/${item.name}`;
  return "";
}

function exportNameFor(item) {
  const file = fileFor(item);
  if (!file) return null;
  const source = readFileSync(file, "utf8");
  if (/export\s+default\s+/.test(source)) return "default";
  const functionMatch = source.match(/export\s+function\s+([A-Za-z_$][\w$]*)/);
  if (functionMatch) return functionMatch[1];
  const constMatch = source.match(/export\s+const\s+([A-Za-z_$][\w$]*)/);
  if (constMatch) return constMatch[1];
  throw new Error(`No export found for ${item.name}`);
}

const componentItems = index.items.filter((item) => item.source !== "template");

const imports = [
  `"use client";`,
  ``,
  `import dynamic from "next/dynamic";`,
  `import type { ComponentType } from "react";`,
  `import { StarterPreviewFrame } from "@/components/preview/starter-preview-frame";`,
  ``,
  `export type PreviewComponent = ComponentType<Record<string, never>>;`,
  `export type PreviewMeta = {`,
  `  id: string;`,
  `  source: "pro" | "starter";`,
  `  name: string;`,
  `  title: string;`,
  `  category: string;`,
  `  installName: string;`,
  `  command: string;`,
  `  Component: PreviewComponent;`,
  `};`,
  ``,
  `const fallback = <div className="flex min-h-[360px] items-center justify-center text-sm text-zinc-500">正在加载预览...</div>;`,
  ``,
];

const entries = [];

for (const item of componentItems) {
  const exportName = exportNameFor(item);
  const modulePath = modulePathFor(item);
  const varName = `Preview_${item.source}_${item.name.replace(/[^A-Za-z0-9_$]/g, "_")}`;
  if (item.source === "pro") {
    const resolver =
      exportName === "default"
        ? `mod.default`
        : `mod.${exportName}`;
    imports.push(
      `const ${varName} = dynamic(() => import("${modulePath}").then((mod) => ${resolver}), { loading: () => fallback });`,
    );
  } else {
    const resolver =
      exportName === "default"
        ? `mod.default`
        : `mod.${exportName}`;
    imports.push(
      `const ${varName}Inner = dynamic(() => import("${modulePath}").then((mod) => ${resolver}), { ssr: false, loading: () => fallback });`,
      `const ${varName}: PreviewComponent = () => <StarterPreviewFrame name="${item.name}" Component={${varName}Inner as unknown as ComponentType<Record<string, unknown>>} />;`,
    );
  }

  entries.push(`  {
    id: ${JSON.stringify(item.id)},
    source: ${JSON.stringify(item.source)},
    name: ${JSON.stringify(item.name)},
    title: ${JSON.stringify(item.title)},
    category: ${JSON.stringify(item.category)},
    installName: ${JSON.stringify(item.installName)},
    command: ${JSON.stringify(item.command)},
    Component: ${varName} as unknown as PreviewComponent,
  }`);
}

const output = `${imports.join("\n")}

export const previewRegistry: PreviewMeta[] = [
${entries.join(",\n")}
];
`;

writeFileSync(path.join(outDir, "preview-registry.tsx"), output);
console.log(`Generated ${componentItems.length} preview components.`);
