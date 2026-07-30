/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /pikgeon/privacy, and
 * rewrite each copy's canonical/og:url to its own route URL (not the
 * app root) so search engines don't see duplicate-content canonicals.
 * Each route also gets its own title/description — otherwise every
 * route introduces itself as the app root (duplicate content signal).
 *
 * Bots (Google Play, App Store review) don't execute JavaScript, so a
 * client-side redirect trick won't work for them — a real index.html at
 * each route path is required.
 */

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { setSelfCanonical, setPageMeta } from "../../scripts/rewrite-seo-tags.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");

const BASE_URL = "https://alu-studio.com/pikgeon";

const routes = [
  {
    route: "privacy",
    title: "Privacy Policy — Pikgeon",
    description:
      "How Pikgeon handles your data: on-device OCR, what is collected, and your choices.",
  },
  {
    route: "terms",
    title: "Terms of Use — Pikgeon",
    description:
      "Terms of use for Pikgeon, the postcard tracking app by Alu Studio.",
  },
  {
    route: "faq",
    title: "Pikgeon FAQ — Postcard Tracking App",
    description:
      "Answers to common questions about Pikgeon: importing postcards, OCR recognition, iPhone shortcuts, and privacy.",
  },
];

for (const { route, title, description } of routes) {
  const dest = join(dist, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);

  const routeUrl = `${BASE_URL}/${route}/`;
  let html = setSelfCanonical(readFileSync(dest, "utf8"), routeUrl);
  html = setPageMeta(html, { title, description });
  writeFileSync(dest, html);

  console.log(`  ✓ ${route}/index.html (canonical: ${routeUrl})`);
}
