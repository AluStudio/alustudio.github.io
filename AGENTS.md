# AGENTS.md — alustudio.github.io

Static site hosting three Vite + React sub-apps on GitHub Pages.

## Structure

```
/
├── pikgeon/          # Pikgeon support site — Vite + React + Bootstrap
├── babbby/           # Babbby support site  — same stack
├── sotto/            # Sotto support site   — same stack
├── app-ads.txt       # Root-level static file
├── Makefile           # Dev shortcuts
└── .github/workflows/ # CI: build all → assemble _site/ → deploy Pages
```

## Local Dev

```bash
make pk   # → http://localhost:5173/pikgeon/
make bb   # → http://localhost:5173/babbby/
make st   # → http://localhost:5173/sotto/
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

Push to `main` → GitHub Actions builds all apps, assembles `_site/`, deploys to Pages.  
No manual deploy. No preview script needed — `make pk` / `make bb` covers dev workflow.

## Sub-app Notes

- Each uses `base: '/<app-name>/'` in `vite.config.js` — paths are sub-directory scoped.
- Each has its own `package.json` / `package-lock.json` — no shared root deps.
- Runtime: Node 22, npm.

## Conventions

- Commits: Conventional Commits (`feat|fix|refactor|build|ci|chore|docs|style|perf|test`).
- Docs live in `docs/specs/<app>/` per SDD pattern.
