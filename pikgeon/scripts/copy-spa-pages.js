/**
 * Post-build: copy index.html into sub-route directories so GitHub Pages
 * serves HTTP 200 (not 404) for SPA routes like /pikgeon/privacy.
 *
 * Bots (Google Play, App Store review) don't execute JavaScript,
 * so the 404.html → query-string redirect trick won't work for them.
 * Placing a real index.html at each route path fixes this.
 */

import { copyFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");

const routes = ["privacy", "terms", "faq"];

for (const route of routes) {
  const dest = join(dist, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  console.log(`  ✓ ${route}/index.html`);
}
