/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /dingpos/privacy, and
 * rewrite each copy's canonical/og:url to its own route URL (not the
 * app root) so search engines don't see duplicate-content canonicals.
 *
 * Each copy also gets its own <title>/description: a self-canonical route
 * that still carries the app root's title and snippet is only half-fixed —
 * 40+ sitemap URLs introducing themselves identically is the same
 * duplicate-content signal in a different field.
 *
 * FAQ article routes are derived from the FAQ data modules, so adding
 * an article automatically ships its static route. The zh-Hant and en
 * packs must agree on slugs and related links, and sitemap.xml must cover
 * every article — validated here so a drift fails the build instead of
 * 404ing (or going unindexed) in production.
 */

import process from "node:process";
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { setSelfCanonical, setPageMeta } from "../../scripts/rewrite-seo-tags.mjs";
import * as zhHant from "../src/data/faq/articles.zh-Hant.js";
import * as en from "../src/data/faq/articles.en.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");
const sitemapPath = join(__dirname, "..", "..", "sitemap.xml");

const BASE_URL = "https://alu-studio.com/dingpos";
const SITE_NAME = "DingPOS";
const DESCRIPTION_MAX = 155;

// Prerendered HTML is language-neutral and i18n falls back to English, so the
// static meta tags are authored from the en pack.
const ui = JSON.parse(
  readFileSync(join(__dirname, "..", "src", "locales", "en", "translation.json"), "utf8"),
);

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

  for (const [name, pack, slugSet] of [
    ["zh-Hant", zhHant, zhSet],
    ["en", en, enSet],
  ]) {
    const catKeys = new Set(pack.categories.map((c) => c.key));
    for (const article of pack.articles) {
      if (!catKeys.has(article.category)) {
        errors.push(`[${name}] article "${article.slug}" references unknown category "${article.category}"`);
      }
      for (const related of article.related) {
        if (!slugSet.has(related)) {
          errors.push(`[${name}] article "${article.slug}" has dangling related link "${related}"`);
        }
      }
    }
  }

  // Routes are derived from the data, but sitemap.xml is hand-maintained —
  // without this check a new article ships a live page that is never submitted
  // for indexing, and nothing fails.
  const sitemap = readFileSync(sitemapPath, "utf8");
  const listed = new Set(
    [...sitemap.matchAll(/https:\/\/alu-studio\.com\/dingpos\/support\/([^/<]+)\//g)].map(
      (m) => m[1],
    ),
  );
  for (const slug of zhSlugs) {
    if (!listed.has(slug)) errors.push(`sitemap.xml is missing /dingpos/support/${slug}/`);
  }
  for (const slug of listed) {
    if (!zhSet.has(slug)) errors.push(`sitemap.xml lists /dingpos/support/${slug}/ with no article`);
  }
  if (!sitemap.includes(`${BASE_URL}/support/</loc>`)) {
    errors.push("sitemap.xml is missing /dingpos/support/");
  }

  if (errors.length) {
    console.error("FAQ data validation failed:");
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
}

validateFaqPacks();

/** First paragraph of an article, trimmed to a snippet-sized description. */
function articleDescription(article) {
  const firstParagraph = article.content.find((b) => b.type === "p");
  const text = (firstParagraph?.text || article.question).trim();
  if (text.length <= DESCRIPTION_MAX) return text;
  return `${text.slice(0, DESCRIPTION_MAX - 1).trimEnd()}…`;
}

const routes = [
  { path: "privacy", title: ui.nav.privacy },
  { path: "terms", title: ui.nav.terms },
  { path: "support", title: ui.support.doc_title, description: ui.support.subtitle },
  ...en.articles.map((article) => ({
    path: `support/${article.slug}`,
    title: article.question,
    description: articleDescription(article),
  })),
];

for (const { path, title, description } of routes) {
  const dest = join(dist, path, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);

  const routeUrl = `${BASE_URL}/${path}/`;
  let html = setSelfCanonical(readFileSync(dest, "utf8"), routeUrl);
  html = setPageMeta(html, { title: `${title} — ${SITE_NAME}`, description });
  writeFileSync(dest, html);

  console.log(`  ✓ ${path}/index.html (canonical: ${routeUrl})`);
}
