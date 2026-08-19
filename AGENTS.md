# AGENTS.md — alustudio.github.io

Static site hosting Alu Studio's four support/profile sites, deployed as a Cloudflare Worker (static assets) under `alu-studio.com`.

## ⚠️ Repo Guardrails

**This repo must never be renamed, deleted, or archived.** It is simultaneously:
1. The source repo for `alu-studio.com` (Cloudflare Worker + all sub-apps).
2. GitHub's permanent `alustudio.github.io` 301 redirect anchor for `alu-studio.com` — this is undocumented-but-relied-upon GitHub Pages behavior (see `docs/drafts/cloudflare-migration.md` Phase 3), and it only exists as long as this exact repo exists at this exact name with GitHub Pages custom-domain still configured.

Deleting/renaming/archiving this repo silently breaks the old-domain 301 and leaks accumulated SEO authority with no way to recover it. If a restructure ever seems warranted, read the Decision Record in `docs/drafts/cloudflare-migration.md` first — a single-repo-vs-split-repo tradeoff was already debated and decided against splitting (`argue` debate, unanimous).

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
- FAQ/accordion content must stay in the DOM when collapsed (`hidden` attr, not conditional render) — crawlers only see initial HTML; prerender can't capture unmounted nodes. SEO/AEO ground rules: `docs/drafts/seo-aeo-optimization.md`.
- Product screenshots ship as pure screen captures; the device bezel is drawn in CSS. `dingpos/scripts/build-screenshots.sh <raw-dir>` crops the iOS status bar and the dev-tweak-ball corner, resizes, and writes `public/shot-*.webp`. Local authoring tool — outputs are committed, so CI never runs it. Re-capture recipe for DingPOS: `~/Developer/alustudio/DingPOS/scripts/screenshots/README.md` (use the `screenshots-zh` fixture, not the tweak menu's fake-data generator — that one randomizes prices into nonsense).
- Every app mounts `<BrowserRouter>`, not `createBrowserRouter`. React Router's data-router features are therefore unavailable, and the ones that are props fail *silently* rather than erroring — `<Link viewTransition>` is accepted and never calls `startViewTransition`. `dingpos/src/components/TransitionLink.jsx` drives it by hand instead; verify any such prop actually fires before believing it works.
- Route changes scroll to top from one place (`dingpos/src/components/ScrollToTop.jsx`), not per page: it has to run in `useLayoutEffect` with `behavior: "instant"`, because an effect scrolls after paint and `html { scroll-behavior: smooth }` turns the correction into a visible slide. POP is left to the browser so Back keeps the reader's place.
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
- Docs live in `docs/specs/<app>/` per SDD pattern.

## Project Skills

Nine UI/animation skills from [emilkowalski/skills](https://github.com/emilkowalski/skills) load via `.pi/settings.json`: the package is installed globally (`~/.pi/agent/git/github.com/emilkowalski/skills`) with every skill disabled by default, and this repo re-enables the web subset — the project entry wins on same-source dedupe, and pi auto-installs a project-scoped clone under `.pi/git/` (gitignored) on first trusted startup. Manage with the global `/ui-skills` prompt template; update with `pi update`. `animate-expo` (React Native) and `ask-sonner` (not a dependency) stay off.

`review-animations`, `pick-ui-library`, and `prototype` carry `disable-model-invocation: true` — they stay out of the system prompt and only run via `/skill:<name>`.

**Repo rules override skill advice.** These skills assume a conventional React app; three constraints here do not match that assumption:
- Collapsed FAQ/accordion content stays in the DOM (see Sub-app Notes) — no mount/unmount exit animations on that content, or prerender loses it.
- No animation library is installed (Bootstrap 5 + Sass only). Advice naming Motion/Framer Motion means adding a dependency to all five apps — confirm before doing that.
- **No JS-gated scroll reveals.** `scripts/prerender.mjs` writes the rendered DOM back to each `index.html`, so an IntersectionObserver pattern that starts at `opacity: 0` ships that hidden state as the served HTML — the page then renders blank until React remounts, and stays blank forever without JS. Entrance motion must be a pure-CSS `animation` (it plays with no JS and leaves nothing hidden). `dingpos/src/assets/scss/home.scss` is the worked example.

## Linear

Tickets for this repo: label `fe` on team `OH`. Narrow to one sub-site by adding its product label (`--label pikgeon` / `babbby` / `sotto`; repeated `--label` is ANDed).

```bash
LINEAR_API_KEY="$(cat ~/.config/linear/api_key)" linear issue query --team OH --label fe
```
