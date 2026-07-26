/**
 * Assemble _site/ from the repo's root static files plus each sub-app's dist/.
 *
 * Previously this lived as inline shell in .github/workflows/deploy.yml, which
 * meant the layout CI deploys could not be reproduced locally — and prerender
 * (scripts/prerender.mjs) needs exactly that layout to walk. Keeping it here
 * gives local and CI a single implementation.
 *
 * Usage: node scripts/assemble-site.mjs
 * Assumes every app has already been built (`npm run build` in each app dir).
 */

import { cp, mkdir, rm, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { APPS, ROOT_STATIC_FILES } from "./site-config.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(repoRoot, "_site");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await rm(siteDir, { recursive: true, force: true });
  await mkdir(siteDir, { recursive: true });

  for (const file of ROOT_STATIC_FILES) {
    const src = join(repoRoot, file);
    if (!(await exists(src))) {
      console.warn(`  skip (missing): ${file}`);
      continue;
    }
    await cp(src, join(siteDir, file));
  }
  console.log(`root static files -> _site/`);

  const missing = [];
  for (const { name } of APPS) {
    const dist = join(repoRoot, name, "dist");
    if (!(await exists(dist))) {
      missing.push(name);
      continue;
    }
    await cp(dist, join(siteDir, name), { recursive: true });
    console.log(`${name}/dist -> _site/${name}/`);
  }

  if (missing.length > 0) {
    console.error(
      `\nMissing build output for: ${missing.join(", ")}\n` +
        `Run "npm run build" in each app directory first (or "make build-site").`
    );
    process.exit(1);
  }

  console.log("\n_site/ assembled.");
}

await main();
