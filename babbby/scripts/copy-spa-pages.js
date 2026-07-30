/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /babbby/privacy, and
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

const BASE_URL = "https://alu-studio.com/babbby";

const routes = [
  {
    route: "privacy",
    title: "Privacy Policy — Babbby",
    description:
      "How Babbby handles your data: what is collected, how it is stored, and your choices.",
  },
  {
    route: "terms",
    title: "Terms of Use — Babbby",
    description:
      "Terms of use for Babbby, the daily baby activities app by Alu Studio.",
  },
  {
    route: "faq",
    title: "Babbby FAQ — Daily Baby Activities App",
    description:
      "Answers to common questions about Babbby: supported ages, pricing, activity ideas, milestone tracking, and privacy.",
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
