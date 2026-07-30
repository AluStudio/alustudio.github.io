/**
 * Deploy-time sitemap generation: take the hand-maintained sitemap.xml
 * (still the single source of truth for URL membership — dingpos's build
 * validates its routes against it) and emit a copy with per-URL <lastmod>
 * derived from git history.
 *
 * lastmod accuracy matters: Google honors it only when "consistently and
 * verifiably accurate", and Bing states AI-powered search uses content
 * change signals near-real-time. Dates therefore come from the last commit
 * touching the files that produce each route — never hand-written, never
 * bulk-bumped (docs/drafts/seo-aeo-optimization.md §2f).
 *
 * Requires full git history (fetch-depth: 0 in CI); with a shallow clone
 * every date collapses to the clone commit and the signal becomes noise.
 *
 * Usage: node scripts/generate-sitemap.mjs --out _site/sitemap.xml
 */

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import process from "node:process";

/**
 * Route → source paths that define the route's content.
 * Longest-prefix match wins. Coarser buckets (app root ← whole src/) are
 * deliberate: a shared component or locale edit does change what the page
 * shows, so bumping the app root is honest. Legal/FAQ pages map to their
 * page component + locales so unrelated app work doesn't bump them.
 */
export const LASTMOD_SOURCES = [
  ["/home/", ["home/src", "home/index.html"]],

  ["/pikgeon/privacy/", ["pikgeon/src/pages/PrivacyPage.jsx", "pikgeon/src/locales"]],
  ["/pikgeon/terms/", ["pikgeon/src/pages/TermsPage.jsx", "pikgeon/src/locales"]],
  ["/pikgeon/faq/", ["pikgeon/src/pages/FaqPage.jsx", "pikgeon/src/locales"]],
  ["/pikgeon/", ["pikgeon/src", "pikgeon/index.html"]],

  ["/babbby/privacy/", ["babbby/src/pages/PrivacyPage.jsx", "babbby/src/locales"]],
  ["/babbby/terms/", ["babbby/src/pages/TermsPage.jsx", "babbby/src/locales"]],
  ["/babbby/faq/", ["babbby/src/pages/FaqPage.jsx", "babbby/src/locales"]],
  ["/babbby/", ["babbby/src", "babbby/index.html"]],

  ["/sotto/privacy/", ["sotto/src/pages/PrivacyPage.jsx", "sotto/src/locales"]],
  ["/sotto/terms/", ["sotto/src/pages/TermsPage.jsx", "sotto/src/locales"]],
  ["/sotto/faq/", ["sotto/src/pages/FaqPage.jsx", "sotto/src/locales"]],
  ["/sotto/", ["sotto/src", "sotto/index.html"]],

  // Every support article's copy lives in the shared bilingual packs, so
  // the pack's last commit is the honest per-article date.
  ["/dingpos/support/", ["dingpos/src/data/faq"]],
  ["/dingpos/privacy/", ["dingpos/src/pages/PrivacyPage.jsx", "dingpos/src/locales"]],
  ["/dingpos/terms/", ["dingpos/src/pages/TermsPage.jsx", "dingpos/src/locales"]],
  ["/dingpos/", ["dingpos/src", "dingpos/index.html"]],
];

/** Pick the source paths for a route via longest-prefix match. */
export function sourcesForRoute(route, rules = LASTMOD_SOURCES) {
  let best = null;
  for (const [prefix, paths] of rules) {
    if (route.startsWith(prefix) && (!best || prefix.length > best[0].length)) {
      best = [prefix, paths];
    }
  }
  return best ? best[1] : null;
}

/** Inject <lastmod> after each <loc> using the provided route→date map. */
export function injectLastmod(xml, dateForRoute) {
  return xml.replace(
    /<url><loc>\s*([^<]+?)\s*<\/loc>(.*?)<\/url>/g,
    (full, loc, rest) => {
      const route = new URL(loc).pathname;
      const date = dateForRoute(route);
      if (!date) return full;
      // drop any pre-existing lastmod in rest, then add the fresh one
      const cleaned = rest.replace(/<lastmod>[^<]*<\/lastmod>/g, "");
      return `<url><loc>${loc}</loc><lastmod>${date}</lastmod>${cleaned}</url>`;
    }
  );
}

function gitLastCommitDate(paths) {
  const out = execFileSync(
    "git",
    ["log", "-1", "--format=%cs", "--", ...paths],
    { encoding: "utf8" }
  ).trim();
  return out || null;
}

function main() {
  const args = process.argv.slice(2);
  const outIdx = args.indexOf("--out");
  const outPath = outIdx === -1 ? "_site/sitemap.xml" : args[outIdx + 1];

  const xml = readFileSync("sitemap.xml", "utf8");
  const cache = new Map();
  let missing = 0;

  const result = injectLastmod(xml, (route) => {
    const sources = sourcesForRoute(route);
    if (!sources) {
      console.error(`  ! no lastmod rule for ${route} — shipped without lastmod`);
      missing += 1;
      return null;
    }
    const key = sources.join("|");
    if (!cache.has(key)) cache.set(key, gitLastCommitDate(sources));
    return cache.get(key);
  });

  writeFileSync(outPath, result);
  const total = (result.match(/<lastmod>/g) ?? []).length;
  console.log(`sitemap written to ${outPath} — ${total} lastmod entries, ${missing} route(s) without a rule`);
  if (missing > 0) process.exit(1);
}

if (process.argv[1] && process.argv[1].endsWith("generate-sitemap.mjs")) {
  main();
}
