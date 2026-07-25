/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /dingpos/privacy, and
 * rewrite each copy's canonical/og:url to its own route URL (not the
 * app root) so search engines don't see duplicate-content canonicals.
 */

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { setSelfCanonical } from "../../scripts/rewrite-seo-tags.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");

const BASE_URL = "https://alu-studio.com/dingpos";
const routes = ["privacy", "terms"];

for (const route of routes) {
  const dest = join(dist, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);

  const routeUrl = `${BASE_URL}/${route}/`;
  const html = setSelfCanonical(readFileSync(dest, "utf8"), routeUrl);
  writeFileSync(dest, html);

  console.log(`  ✓ ${route}/index.html (canonical: ${routeUrl})`);
}
