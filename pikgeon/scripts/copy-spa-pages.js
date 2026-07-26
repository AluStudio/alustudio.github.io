/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /pikgeon/privacy, and
 * rewrite each copy's head tags to describe that route instead of the app
 * homepage (canonical, og:url, title, description, og:title, og:description).
 *
 * Bots (Google Play, App Store review) don't execute JavaScript,
 * so a client-side redirect trick won't work for them.
 * Placing a real index.html at each route path fixes this.
 */

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { setRouteMetadata } from "../../scripts/rewrite-seo-tags.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");

const BASE_URL = "https://alu-studio.com/pikgeon";

// Per-route metadata. Descriptions describe what is actually on each page, so
// they must be updated when the page's content changes. Language matches this
// app's canonical index locale (en) — see scripts/site-config.mjs.
const ROUTE_META = {
  privacy: {
    title: "Privacy & Data Security — Pikgeon",
    description:
      "How Pikgeon handles your data: postcard records stay in local storage on your device, OCR runs offline, and the app does no tracking.",
  },
  terms: {
    title: "Terms of Use — Pikgeon",
    description:
      "The terms that apply when you download or use Pikgeon, the free postcard tracking app from Alu Studio.",
  },
  faq: {
    title: "FAQ — Pikgeon",
    description:
      "Common Pikgeon questions answered: quick import using an iPhone Shortcut with Back Tap, where to find Merge Friends, and why postcard recognition sometimes fails.",
  },
};

const routes = Object.keys(ROUTE_META);

for (const route of routes) {
  const dest = join(dist, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);

  const routeUrl = `${BASE_URL}/${route}/`;
  const html = setRouteMetadata(readFileSync(dest, "utf8"), {
    url: routeUrl,
    ...ROUTE_META[route],
  });
  writeFileSync(dest, html);

  console.log(`  \u2713 ${route}/index.html \u2014 ${ROUTE_META[route].title}`);
}
