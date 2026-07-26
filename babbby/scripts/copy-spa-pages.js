/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /babbby/privacy, and
 * rewrite each copy's head tags to describe that route instead of the app
 * homepage (canonical, og:url, title, description, og:title, og:description).
 *
 * Bots (Google Play, App Store review) don't execute JavaScript, so a
 * client-side redirect trick won't work for them — a real index.html at
 * each route path is required.
 */

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { setRouteMetadata } from "../../scripts/rewrite-seo-tags.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");

const BASE_URL = "https://alu-studio.com/babbby";

// Per-route metadata. Descriptions describe what is actually on each page, so
// they must be updated when the page's content changes. This app is indexed in
// zh-Hant — see scripts/site-config.mjs.
const ROUTE_META = {
  privacy: {
    title: "隱私權政策 — Babbby",
    description:
      "Babbby 如何處理你的資料：孩子檔案、活動紀錄、完成記錄與統計全部以本地資料庫儲存在你的裝置上，不會傳輸至 Alu Studio 似服器或第三方。",
  },
  terms: {
    title: "使用條款 — Babbby",
    description:
      "下載或使用 Babbby（Alu Studio 開發的免費 iOS 應用程式）時適用的使用條款。",
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
