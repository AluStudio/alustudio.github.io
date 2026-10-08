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
import { VERIFIED_APP_VERSION } from "../src/data/faq/version.js";

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

const STATIC_ROUTES = [
  { path: "pricing", title: ui.pricing.doc_title, description: ui.pricing.meta_description },
  { path: "privacy", title: ui.nav.privacy },
  { path: "terms", title: ui.nav.terms },
  { path: "support", title: ui.support.doc_title, description: ui.support.subtitle },
];

// ── FAQ data consistency guard ──────────────────────────────
const VERSION_PATTERN = /^\d+\.\d+(\.\d+)?$/;

/** Numeric comparison of App Store marketing versions ("2.10" > "2.9"). */
function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

/** Rules in src/data/faq/version.js; this checks the mechanical half. */
function validateFaqVersions(errors) {
  if (!VERSION_PATTERN.test(VERIFIED_APP_VERSION)) {
    errors.push(`VERIFIED_APP_VERSION "${VERIFIED_APP_VERSION}" is not a marketing version`);
    return;
  }
  const enSince = new Map(en.articles.map((a) => [a.slug, a.since]));
  for (const article of zhHant.articles) {
    const { slug, since } = article;
    if (enSince.has(slug) && enSince.get(slug) !== since) {
      errors.push(`article "${slug}" has since "${since}" in zh-Hant but "${enSince.get(slug)}" in en`);
    }
    if (since === undefined) continue;
    if (!VERSION_PATTERN.test(since)) {
      errors.push(`article "${slug}" has since "${since}", not a marketing version`);
    } else if (compareVersions(since, VERIFIED_APP_VERSION) > 0) {
      errors.push(
        `article "${slug}" is since ${since}, newer than VERIFIED_APP_VERSION ${VERIFIED_APP_VERSION} — unreleased features stay off main`,
      );
    }
  }
}

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
  for (const { path } of STATIC_ROUTES) {
    if (!sitemap.includes(`${BASE_URL}/${path}/</loc>`)) {
      errors.push(`sitemap.xml is missing /dingpos/${path}/`);
    }
  }

  validateFaqVersions(errors);

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
  ...STATIC_ROUTES,
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
