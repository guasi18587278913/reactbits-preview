import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const template = process.argv[2];
const allowed = new Set([
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
]);

if (!template || !allowed.has(template)) {
  console.error(`Usage: npm run template:dev -- <${Array.from(allowed).join("|")}>`);
  process.exit(1);
}

const root = process.cwd();
const workspace = path.join(root, "templates");
const target = path.join(workspace, template);
mkdirSync(workspace, { recursive: true });

if (!existsSync(target)) {
  console.log(`Cloning reactbits-templates into ${workspace}`);
  const tmp = path.join(workspace, ".reactbits-templates-tmp");
  if (!existsSync(tmp)) {
    execFileSync("gh", ["repo", "clone", "rhywonfeong/reactbits-templates", tmp, "--", "--depth", "1"], {
      stdio: "inherit",
    });
  }
  execFileSync("cp", ["-R", path.join(tmp, template), target], { stdio: "inherit" });
}

if (!existsSync(path.join(target, "node_modules"))) {
  console.log(`Installing dependencies for ${template}`);
  execFileSync("npm", ["install"], { cwd: target, stdio: "inherit" });
}

const basePort = 4100;
const port = basePort + Array.from(allowed).indexOf(template);
console.log(`Starting ${template} on http://localhost:${port}`);

const result = spawnSync("npm", ["run", "dev", "--", "--port", String(port)], {
  cwd: target,
  stdio: "inherit",
});

process.exit(result.status ?? 0);
