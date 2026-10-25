# AGENTS.md — alustudio.github.io

Static site hosting Alu Studio's four support/profile sites, deployed as a Cloudflare Worker (static assets) under `alu-studio.com`.

## ⚠️ Repo Guardrails

**This repo must never be renamed, deleted, or archived.** It is simultaneously:
1. The source repo for `alu-studio.com` (Cloudflare Worker + all sub-apps).
2. GitHub's permanent `alustudio.github.io` 301 redirect anchor for `alu-studio.com` — this is undocumented-but-relied-upon GitHub Pages behavior (see `docs/specs/hosting.md` §舊網域 301), and it only exists as long as this exact repo exists at this exact name with GitHub Pages custom-domain still configured.

Deleting/renaming/archiving this repo silently breaks the old-domain 301 and leaks accumulated SEO authority with no way to recover it. If a restructure ever seems warranted, read `docs/specs/hosting.md` §為什麼是單一 repo first — a single-repo-vs-split-repo tradeoff was already debated and decided against splitting.

## Structure

```
/
├── home/               # Alu Studio profile — Vite + React (link-in-bio)
├── pikgeon/            # Pikgeon support site — Vite + React + Bootstrap
├── babbby/             # Babbby support site  — same stack
├── sotto/              # Sotto support site   — same stack
├── dingpos/            # DingPOS support site  — same stack
├── src/worker.js       # Cloudflare Worker: host/path redirects, asset serving, 404
├── wrangler.jsonc      # Worker + static-assets config (routes, bindings)
├── scripts/            # Shared build-time helpers (e.g. rewrite-seo-tags.mjs)
├── robots.txt, sitemap.xml, llms.txt, index.html, 404.html   # Root-level static files
├── app-ads.txt         # Root-level static file
├── Makefile            # Dev shortcuts
└── .github/workflows/  # CI: test → build all apps → assemble _site/ → wrangler deploy
```

## Local Dev

```bash
make hm   # → http://localhost:5173/home/
make pk   # → http://localhost:5173/pikgeon/
make bb   # → http://localhost:5173/babbby/
make st   # → http://localhost:5173/sotto/
make dp   # → http://localhost:5173/dingpos/
```

Auto-installs `node_modules` if missing.

### Background Dev Server (for browser-tools / screenshots)

`make pk` etc. are foreground — they die when the shell exits.  
When you need a server that survives across tool calls (e.g. for `browser-screenshot.js`):

```bash
cd <app> && nohup npx vite preview --port 4173 --host > /dev/null 2>&1 &
disown
```

Without `nohup` + `disown`, background processes receive SIGHUP when the `Bash` tool's shell session ends.

Stop it:

```bash
kill $(lsof -t -i :4173)
```

## Deploy

Push to `main` → GitHub Actions builds all apps, assembles `_site/`, generates `_site/sitemap.xml` with git-derived `lastmod` (`scripts/generate-sitemap.mjs`), prerenders every sitemap route with headless Chrome (`scripts/prerender.mjs` — AI crawlers don't execute JS; an empty render fails the build), and runs `wrangler deploy` (Cloudflare Worker with static assets) under `alu-studio.com`.
No manual deploy. No preview script needed — `make pk` / `make bb` / etc. covers dev workflow.

Root-level Worker logic (`src/worker.js`) owns all redirect/header behavior — no `_redirects`/`_headers` files. Run its regression tests with `npm test` (repo root).

## Sub-app Notes

- Each uses `base: '/<app-name>/'` in `vite.config.js` — paths are sub-directory scoped.
- Each has its own `package.json` / `package-lock.json` — no shared root deps.
- Each app's `scripts/copy-spa-pages.js` rewrites per-route `canonical`/`og:url` and sets per-route `title`/`description` on copy (via the shared `scripts/rewrite-seo-tags.mjs` helper) — every route ships a real, self-canonical HTML file, no client-side SPA fallback.
- FAQ/accordion content must stay in the DOM when collapsed (`hidden` attr, not conditional render) — crawlers only see initial HTML; prerender can't capture unmounted nodes. SEO/AEO ground rules: `docs/specs/seo-aeo.md`.
- DingPOS FAQ is versioned against the App Store: an article for a post-1.0 feature carries `since` (the version that first shipped it), and the support page shows `VERIFIED_APP_VERSION` (the release the whole FAQ was last checked against). Rules and the per-release routine live in `dingpos/src/data/faq/version.js`; the build rejects a `since` newer than `VERIFIED_APP_VERSION`, so articles for an unreleased version wait on a `faq-<version>` branch until the App Store serves it. Retiring an indexed article slug needs a 301 in `MOVED_PATHS` (`src/worker.js`).
- DingPOS prices and the plan feature matrix live in `dingpos/src/data/plans.js`, mirrored from the product repo's `docs/specs/subscription/tiers.md` — change both together. Every price renders in TWD and USD; an inline script in `dingpos/index.html` sets `<html data-currency>` before first paint (saved choice → time zone → language) and CSS hides the other currency, so prerendered HTML never flashes the wrong price.
- Product screenshots ship as pure screen captures; the device bezel is drawn in CSS. `dingpos/scripts/build-screenshots.sh <raw-dir>` crops the iOS status bar and the dev-tweak-ball corner, resizes, and writes `public/shot-*.webp`. Local authoring tool — outputs are committed, so CI never runs it. Re-capture recipe for DingPOS: `~/Developer/alustudio/DingPOS/scripts/screenshots/README.md` (use the `screenshots-zh` fixture, not the tweak menu's fake-data generator — that one randomizes prices into nonsense).
- DingPOS language is URL-driven: English at `/dingpos/...`, every other language at `/dingpos/<prefix>/...` (`zh-hant`, `zh-hans`, `ja`, …). The 32 languages, their prefixes and which are `shipped` live in `dingpos/l10n/languages.json`, which mirrors the app's `l10n/languages.json`; `dingpos/src/i18n.js` and `copy-spa-pages.js` both read it, and a page loads only its own language's strings and FAQ pack. `i18n.js` reads the prefix once and sets the router `basename`, so in-app `<Link to="/pricing/">` stays in the current language (the basename ends in `/`, and every `to` is the trailing-slash form so links never cost a 307); the language switcher is a list of real `<a href>` links to the other URLs, so crawlers can follow it. There is no browser-language detection, by design. After adding a route or shipping a language, run `node dingpos/scripts/copy-spa-pages.js --write-sitemap` — the build fails while the root `sitemap.xml` disagrees with the pages. Rules: `docs/specs/seo-aeo.md` §多語系 URL.
- DingPOS translated languages (ja, th, ko, … — registry `kind: translated`) are translated from en only by the `l10n-translator` / `l10n-reviewer` project agents through `npm run l10n` (`scripts/l10n.mjs`), reusing the app repo's glossary and strings. Their `translation.json` and `articles.<code>.js` are generated by `npm run l10n -- apply <code>` — never edit them by hand. Procedure: `docs/specs/seo-aeo.md` §翻譯語言.
- DingPOS zh-Hans is generated from zh-Hant by `scripts/gen-zh-hans.mjs` — never edit `zh-Hans/translation.json` or `articles.zh-Hans.js` by hand; edit en / zh-Hant, run `npm run zh-hans`, and review the changed entries with the `zh-hans-reviewer` project agent. `npm test` fails when the generated files are stale. Its `APP_GLOSSARY` mirrors the DingPOS app's `scripts/gen-zh-hans.py` `GLOSSARY` so the site names screens the way the app does — change both together. Procedure: `docs/specs/seo-aeo.md` §簡中由繁中產生.
- Sotto language is URL-driven the same way, in 12 languages: English at `/sotto/...`, the others under `/sotto/<prefix>/...` (`zh-hant`, `zh-hans`, `ja`, `ko`, `de`, `es`, `fr`, `it`, `pt-br`, `ru`, `ar`; Arabic is `dir="rtl"`). Prefixes live in `sotto/src/i18n.js` and `sotto/scripts/copy-spa-pages.js` — change both together, and add every new route or locale to the root `sitemap.xml`. The build fails when any locale is missing or adds an en key (there is no fallback language), when a guide pack drifts from en's slugs, or when two pages share a title or description. Sotto loads only the page's own language at runtime and hydrates (`hydrateRoot`), with the same render-purity rules as DingPOS.
- DingPOS guides (`/dingpos/<prefix>/guides/<slug>/`) are acquisition articles written per market, not translated: fees, laws and payment brands differ by country, and a language is not a market (zh-Hant is Taiwan and Hong Kong). Only a language with `dingpos/src/data/guides/guides.<code>.js` has a guides section, its strings live in the pack's `ui` (not `translation.json`), its pages carry no hreflang, and zh-Hans is never generated from it. Every rate or rule cites a source and a `checked` date. Rules: `docs/specs/seo-aeo.md` §獲客文章.
- Sotto guides (`/sotto/guides/<slug>/`) come from one pack per language, `sotto/src/data/guides/guides.<code>.js`; the schema lives at the top of `guides.en.js`, and the ring-size table every pack shares (mirroring the iOS app's `UnitConversionService`) is `ring-sizes.js`. Sotto's zh-Hans (UI strings and guides) is generated from zh-Hant by `npm run zh-hans`, like DingPOS's — never edit it by hand. Rules: `docs/specs/seo-aeo.md` §獲客文章 and §簡中由繁中產生.
- Webfonts, in-page images, and Lighthouse measurement follow `docs/specs/performance.md` — never link `fonts.googleapis.com`, and measure the live site, not `wrangler dev`.
- DingPOS and Sotto hydrate their prerendered DOM (`hydrateRoot`); the other three apps still re-render it with `createRoot`. A DingPOS or Sotto component must render the same output in the prerender's headless Chrome and on the visitor's device, so never read the clock, viewport, or storage during render (the footer year is the build year for this reason). `scripts/prerender.mjs` reloads every `/dingpos/` and `/sotto/` route after writing it and fails the build on a React hydration error or a replaced DOM. Rules: `docs/specs/seo-aeo.md` §Prerender.
- Every app mounts `<BrowserRouter>`, not `createBrowserRouter`. React Router's data-router features are therefore unavailable, and the ones that are props fail *silently* rather than erroring — `<Link viewTransition>` is accepted and never calls `startViewTransition`. `dingpos/src/components/TransitionLink.jsx` drives it by hand instead; verify any such prop actually fires before believing it works.
- Route changes scroll to top from one place (`dingpos/src/components/ScrollToTop.jsx`, and its copy in `sotto/`), not per page: it has to run in `useLayoutEffect` with `behavior: "instant"`, because an effect scrolls after paint and `html { scroll-behavior: smooth }` turns the correction into a visible slide. POP is left to the browser so Back keeps the reader's place.
- Runtime: Node 22, npm.

## Product Repos

Site content (features, FAQ) makes claims about app behavior — the app's source repo is the source of truth. Verify there before adding or removing a claim.

| Site | Product repo(s) |
|------|-----------------|
| `pikgeon/` | `~/Developer/alustudio/pikgeon-ios`, `~/Developer/alustudio/pikgeon-android` |
| `babbby/` | `~/Developer/alustudio/babbby-ios` |
| `sotto/` | `~/Developer/alustudio/sotto` (monorepo: `sotto-ios` + `sotto-android`) |
| `dingpos/` | `~/Developer/alustudio/DingPOS` |
| `home/` | — studio profile, no product repo |

## Conventions

- Commits: Conventional Commits (`feat|fix|refactor|build|ci|chore|docs|style|perf|test`).
- Docs: current rules live in `docs/specs/`; in-flight work lives in `docs/drafts/` and is deleted once its rules land in a spec (doc-system skill). Backlog lives in Linear, not in docs.

## Project Skills

Eleven UI/animation skills from [emilkowalski/skills](https://github.com/emilkowalski/skills) load via `.pi/settings.json`: the repo is a plain clone at `~/Developer/emilkowalski/skills` (from `make -C ~ install-skill-packs` — a target in the home-directory Makefile, not this repo's — outside pi's auto-discovery), and this repo declares it as a local-path package with the web subset. Manage with the global `/ui-skills` prompt template; update by re-running `make -C ~ install-skill-packs` — `pi update` never touches a local-path package. `animate-expo` (React Native), `ask-sonner` (not a dependency), and `write-swift` (Swift language guidance) stay off.

`ui-design-principles` (typography, color, spacing, interaction states, UX writing, AI-slop checklist) is enabled by listing `~/.pi/agent/skill-library/ui-design-principles` in the `skills` array of `.pi/settings.json`; `skill-library/` is never auto-discovered, so that entry is the only thing that turns it on. Both `~/` paths are the `/ui-skills` opt-in idiom, not a leak: pi expands `~` per machine and skips a missing path silently, so the entries are inert where the sources are absent. Do not "fix" them away.

`review-animations`, `pick-ui-library`, and `prototype` carry `disable-model-invocation: true` upstream — they stay out of the system prompt and only run via `/skill:<name>`.

**Repo rules override skill advice.** These skills assume a conventional React app; three constraints here do not match that assumption:
- Collapsed FAQ/accordion content stays in the DOM (see Sub-app Notes) — no mount/unmount exit animations on that content, or prerender loses it.
- No animation library is installed (Bootstrap 5 + Sass only). Advice naming Motion/Framer Motion means adding a dependency to all five apps — confirm before doing that.
- **No JS-gated scroll reveals.** `scripts/prerender.mjs` writes the rendered DOM back to each `index.html`, so an IntersectionObserver pattern that starts at `opacity: 0` ships that hidden state as the served HTML — the page then renders blank until React remounts, and stays blank forever without JS. Entrance motion must be a pure-CSS `animation` (it plays with no JS and leaves nothing hidden). `dingpos/src/assets/scss/home.scss` is the worked example.

### SEO skills (claude-seo)

[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) v2.3.1 is installed machine-locally: 23 `seo*` skills in `.pi/skills/` and 18 `seo-*` agents in `.pi/agents/`, all gitignored (the Python + Chromium runtime is ~1 GB), so another machine has none of it until installed there. Run bundled scripts from the repo root as `.pi/skills/seo/scripts/claude-seo run <script.py>` — the skill paths are cwd-relative; `claude-seo doctor --json` checks the runtime.
- The `seo-*` agents declare Claude Code tool names (`Glob`, `WebFetch`) and bare model names, so they may not run under pi-subagents; audits here run the bundled scripts plus Lighthouse directly instead.
- Google credentials are machine-local too, in `~/.config/claude-seo/` (GCP project `alu-studio-seo`, owned by the studio Google account that owns the GSC property): service account `claude-seo@alu-studio-seo.iam.gserviceaccount.com` with Full permission on GSC `sc-domain:alu-studio.com`, plus an API key restricted to PageSpeed Insights + CrUX. `google_auth.py --check --json` reports the tier. A machine without these files runs PSI on the shared, usually exhausted quota — use `npx lighthouse` there.
- GA4 is intentionally unconfigured: the site ships no GA4 tag, and adding one (consent, privacy policy, a third-party script on five apps) was declined on 2026-10-25. Organic search numbers come from GSC; real-user metrics from Cloudflare Web Analytics.
- `docs/specs/seo-aeo.md` owns this site's SEO decisions — skill advice that contradicts it (llms.txt investment, FAQ rich results) loses.

## Linear

Tickets for this repo: label `fe` on team `OH`. Narrow to one sub-site by adding its product label (`--label pikgeon` / `babbby` / `sotto`; repeated `--label` is ANDed).

```bash
LINEAR_API_KEY="$(cat ~/.config/linear/api_key)" linear issue query --team OH --label fe
```
