/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /dingpos/privacy, and
 * rewrite each copy's canonical/og:url to its own route URL (not the
 * app root) so search engines don't see duplicate-content canonicals.
 *
 * FAQ article routes are derived from the FAQ data modules, so adding
 * an article automatically ships its static route. The zh-Hant and en
 * packs must agree on slugs and related links — validated here so a
 * drift fails the build instead of 404ing in production.
 */

import process from "node:process";
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { setSelfCanonical } from "../../scripts/rewrite-seo-tags.mjs";
import * as zhHant from "../src/data/faq/articles.zh-Hant.js";
import * as en from "../src/data/faq/articles.en.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");

const BASE_URL = "https://alu-studio.com/dingpos";

// ── FAQ data consistency guard ──────────────────────────────
function validateFaqPacks() {
  const zhSlugs = zhHant.articles.map((a) => a.slug);
  const enSlugs = en.articles.map((a) => a.slug);
  const zhSet = new Set(zhSlugs);
  const enSet = new Set(enSlugs);
  const errors = [];

  if (zhSlugs.length !== zhSet.size) errors.push("duplicate slugs in zh-Hant pack");
  if (enSlugs.length !== enSet.size) errors.push("duplicate slugs in en pack");
  for (const slug of zhSet) if (!enSet.has(slug)) errors.push(`slug "${slug}" missing from en pack`);
  for (const slug of enSet) if (!zhSet.has(slug)) errors.push(`slug "${slug}" missing from zh-Hant pack`);

  for (const pack of [zhHant, en]) {
    const catKeys = new Set(pack.categories.map((c) => c.key));
    for (const article of pack.articles) {
      if (!catKeys.has(article.category)) {
        errors.push(`article "${article.slug}" references unknown category "${article.category}"`);
      }
      for (const related of article.related) {
        if (!zhSet.has(related)) {
          errors.push(`article "${article.slug}" has dangling related link "${related}"`);
        }
      }
    }
  }

  if (errors.length) {
    console.error("FAQ data validation failed:");
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  return zhSlugs;
}

const faqSlugs = validateFaqPacks();

const routes = [
  "privacy",
  "terms",
  "support",
  ...faqSlugs.map((slug) => `support/${slug}`),
];

for (const route of routes) {
  const dest = join(dist, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);

  const routeUrl = `${BASE_URL}/${route}/`;
  const html = setSelfCanonical(readFileSync(dest, "utf8"), routeUrl);
  writeFileSync(dest, html);

  console.log(`  ✓ ${route}/index.html (canonical: ${routeUrl})`);
}
