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
 * bulk-bumped (docs/specs/seo-aeo.md §Sitemap).
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
/**
 * Sources that shape a sub-route's final HTML beyond its page component:
 * the head template (JSON-LD, og/social meta) and the per-route
 * title/description rewrites applied by copy-spa-pages at build time.
 */
const appShell = (app) => [`${app}/index.html`, `${app}/scripts/copy-spa-pages.js`];

/** Rule for a page-component-backed sub-route. */
const page = (app, component) => [
  `${app}/src/pages/${component}`,
  `${app}/src/locales`,
  ...appShell(app),
];

/**
 * DingPOS rules for one language root. Both languages render from the same
 * sources (bilingual locales and FAQ packs), so they share dates; the
 * zh-hant root must still be its own prefix, or longest-prefix match would
 * drop every zh-hant page into the coarse app-root bucket.
 */
function dingposRules(root) {
  return [
    // Every support article's copy lives in the shared bilingual packs, so
    // the pack's last commit is the honest per-article date. Accepted
    // tradeoff: editing one article bumps all support URLs — the pack IS the
    // common source; revisit only if the article set outgrows the two packs.
    [`${root}support/`, ["dingpos/src/data/faq", ...appShell("dingpos")]],
    // Prices and the feature matrix live in data/plans.js; Price.jsx carries
    // the currency switch the page renders around them.
    [
      `${root}pricing/`,
      [
        ...page("dingpos", "PricingPage.jsx"),
        "dingpos/src/pages/pricing.scss",
        "dingpos/src/data/plans.js",
        "dingpos/src/components/Price.jsx",
      ],
    ],
    [`${root}privacy/`, page("dingpos", "PrivacyPage.jsx")],
    [`${root}terms/`, page("dingpos", "TermsPage.jsx")],
    // Root meta and hreflang are written by copy-spa-pages too, not only index.html.
    [root, ["dingpos/src", ...appShell("dingpos")]],
  ];
}

export const LASTMOD_SOURCES = [
  ["/home/", ["home/src", "home/index.html"]],

  ["/pikgeon/privacy/", page("pikgeon", "PrivacyPage.jsx")],
  ["/pikgeon/terms/", page("pikgeon", "TermsPage.jsx")],
  ["/pikgeon/faq/", page("pikgeon", "FaqPage.jsx")],
  ["/pikgeon/", ["pikgeon/src", "pikgeon/index.html"]],

  ["/babbby/privacy/", page("babbby", "PrivacyPage.jsx")],
  ["/babbby/terms/", page("babbby", "TermsPage.jsx")],
  ["/babbby/faq/", page("babbby", "FaqPage.jsx")],
  ["/babbby/", ["babbby/src", "babbby/index.html"]],

  ["/sotto/privacy/", page("sotto", "PrivacyPage.jsx")],
  ["/sotto/terms/", page("sotto", "TermsPage.jsx")],
  ["/sotto/faq/", page("sotto", "FaqPage.jsx")],
  ["/sotto/", ["sotto/src", "sotto/index.html"]],

  ...dingposRules("/dingpos/"),
  ...dingposRules("/dingpos/zh-hant/"),
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
    const date = cache.get(key);
    if (!date) {
      // A renamed/deleted/mistyped source path yields no git history —
      // fail loudly instead of silently shipping the URL without lastmod.
      console.error(`  ! no git history for ${route} sources: ${sources.join(", ")}`);
      missing += 1;
      return null;
    }
    return date;
  });

  writeFileSync(outPath, result);
  const total = (result.match(/<lastmod>/g) ?? []).length;
  console.log(`sitemap written to ${outPath} — ${total} lastmod entries, ${missing} problem route(s)`);
  if (missing > 0) process.exit(1);
}

if (process.argv[1] && process.argv[1].endsWith("generate-sitemap.mjs")) {
  main();
}
