/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /dingpos/privacy, and
 * rewrite each copy's head tags to describe that route instead of the app
 * homepage (canonical, og:url, title, description, og:title, og:description).
 */

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { setRouteMetadata } from "../../scripts/rewrite-seo-tags.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");

const BASE_URL = "https://alu-studio.com/dingpos";

// Per-route metadata. Descriptions describe what is actually on each page, so
// they must be updated when the page's content changes. Language matches this
// app's canonical index locale (en) — see scripts/site-config.mjs.
const ROUTE_META = {
  privacy: {
    title: "Privacy Policy — DingPOS",
    description:
      "How DingPOS handles your business data: sales records stay in local storage on your iPad with optional cloud backup, and Alu Studio collects no business data.",
  },
  terms: {
    title: "Terms of Use — DingPOS",
    description:
      "The terms that apply when you download, install, or use DingPOS, including its subscription terms.",
  },
  faq: {
    title: "FAQ — DingPOS",
    description:
      "Common DingPOS questions: checkout works fully offline, a 30-day free trial then NT$299 per month, business data stored on your own iPad, and optional backup to your own iCloud, Google Drive or Dropbox.",
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
