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
- Runtime: Node 22, npm.

## Conventions

- Commits: Conventional Commits (`feat|fix|refactor|build|ci|chore|docs|style|perf|test`).
- Docs live in `docs/specs/<app>/` per SDD pattern.

## Linear

Tickets for this repo: label `fe` on team `OH`. Narrow to one sub-site by adding its product label (`--label pikgeon` / `babbby` / `sotto`; repeated `--label` is ANDed).

```bash
LINEAR_API_KEY="$(cat ~/.config/linear/api_key)" linear issue query --team OH --label fe
```
