# AGENTS.md — alustudio.github.io

Static site hosting two Vite + React sub-apps on GitHub Pages.

## Structure

```
/
├── pikgeon/          # Pikgeon support site — Vite + React + Bootstrap
├── babbby/           # Babbby support site  — same stack
├── app-ads.txt       # Root-level static file
├── Makefile           # Dev shortcuts
└── .github/workflows/ # CI: build both → assemble _site/ → deploy Pages
```

## Local Dev

```bash
make pk   # → http://localhost:5173/pikgeon/
make bb   # → http://localhost:5173/babbby/
```

Auto-installs `node_modules` if missing.

## Deploy

Push to `main` → GitHub Actions builds both apps, assembles `_site/`, deploys to Pages.  
No manual deploy. No preview script needed — `make pk` / `make bb` covers dev workflow.

## Sub-app Notes

- Both use `base: '/<app-name>/'` in `vite.config.ts` — paths are sub-directory scoped.
- Each has its own `package.json` / `package-lock.json` — no shared root deps.
- Runtime: Node 22, npm.

## Conventions

- Commits: Conventional Commits (`feat|fix|refactor|build|ci|chore|docs|style|perf|test`).
- Docs live in `docs/specs/<app>/` per SDD pattern.
