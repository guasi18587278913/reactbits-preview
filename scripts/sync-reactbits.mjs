import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const outDir = path.join(root, "src", "data");
mkdirSync(outDir, { recursive: true });

const proCategories = [
  "404",
  "about",
  "auth",
  "blog",
  "comparison",
  "contact",
  "cta",
  "download",
  "ecommerce",
  "faq",
  "features",
  "footer",
  "hero",
  "how-it-works",
  "navigation",
  "pricing",
  "profile",
  "showcase",
  "social-proof",
  "stats",
  "waitlist",
];

const templateCategories = [
  "8-bit",
  "agency",
  "ai-app",
  "ai-saas",
  "finance",
  "minimal",
  "saas",
  "security",
  "shader",
  "wireframe",
];

function gh(pathname) {
  const raw = execFileSync(
    "gh",
    ["api", `repos/rhywonfeong/${pathname}`, "--paginate"],
    { encoding: "utf8" },
  );
  return JSON.parse(raw);
}

function listContents(repo, repoPath = "") {
  return gh(`${repo}/contents/${repoPath}`);
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const proItems = [];
for (const category of proCategories) {
  const files = listContents("reactbits-pro", category)
    .filter((entry) => entry.type === "file" && entry.name.endsWith(".tsx"))
    .map((entry) => entry.name.replace(/\.tsx$/, ""))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  for (const name of files) {
    proItems.push({
      id: `pro:${name}`,
      source: "pro",
      namespace: "@reactbits-pro",
      name,
      title: titleFromSlug(name),
      category,
      installName: `@reactbits-pro/${name}`,
      importPath: `@/components/blocks/${name}`,
      componentName: name
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(""),
      command: `npx shadcn@latest add @reactbits-pro/${name}`,
    });
  }
}

const starterTwFiles = listContents("reactbits-starter", "tw")
  .filter((entry) => entry.type === "file" && entry.name.endsWith(".tsx"))
  .map((entry) => entry.name.replace(/\.tsx$/, ""))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const starterItems = starterTwFiles.map((name) => ({
  id: `starter:${name}`,
  source: "starter",
  namespace: "@reactbits-starter",
  name,
  title: titleFromSlug(name),
  category: "tw",
  installName: `@reactbits-starter/${name}-tw`,
  importPath: `@/components/react-bits/${name}`,
  componentName: name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(""),
  command: `npx shadcn@latest add @reactbits-starter/${name}-tw`,
}));

const templates = templateCategories.map((name) => ({
  id: `template:${name}`,
  source: "template",
  name,
  title: titleFromSlug(name),
  category: "template",
  repoPath: `rhywonfeong/reactbits-templates/${name}`,
  localPath: `templates/${name}`,
  command: `npm run template:dev -- ${name}`,
}));

const index = {
  generatedAt: new Date().toISOString(),
  counts: {
    pro: proItems.length,
    starter: starterItems.length,
    templates: templates.length,
  },
  proCategories: proCategories.map((name) => ({
    name,
    title: titleFromSlug(name),
    count: proItems.filter((item) => item.category === name).length,
  })),
  starterCategories: [{ name: "tw", title: "Tailwind", count: starterItems.length }],
  templateCategories: templates.map((item) => ({
    name: item.name,
    title: item.title,
    count: 1,
  })),
  items: [...proItems, ...starterItems, ...templates],
};

writeFileSync(
  path.join(outDir, "reactbits-index.json"),
  `${JSON.stringify(index, null, 2)}\n`,
);

console.log(
  `Indexed ${index.counts.pro} pro blocks, ${index.counts.starter} starter components, ${index.counts.templates} templates.`,
);

if (process.argv.includes("--install")) {
  if (!process.env.REACTBITS_LICENSE_KEY) {
    console.error("REACTBITS_LICENSE_KEY is required for installing private registry components.");
    process.exit(1);
  }

  const installNames = [...proItems, ...starterItems].map((item) => item.installName);
  const chunkSize = 20;
  for (let i = 0; i < installNames.length; i += chunkSize) {
    const chunk = installNames.slice(i, i + chunkSize);
    console.log(`Installing ${i + 1}-${Math.min(i + chunk.length, installNames.length)} of ${installNames.length}`);
    const result = spawnSync(
      "npx",
      ["shadcn@latest", "add", ...chunk, "--yes"],
      {
        cwd: root,
        stdio: "inherit",
        env: {
          ...process.env,
        },
      },
    );
    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  }
}
