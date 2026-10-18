# Tasks: DingPOS site translated languages

Branch for Phases 1–3: `l10n` (single checkout, no worktree). Phase 4 runs through the commander, one `dingpos-l10n/<code>` branch per language.

## Phase 1: Foundation

- [ ] T001 [REQ-001, REQ-003] Create `dingpos/l10n/languages.json` with all 32 languages (`code`, `kind`, `label`, `pathPrefix`, `hreflang`, `ogLocale`) per plan DEC-001/DEC-002; `kind`, order and `code` copied from the app's `l10n/languages.json`, `label` from the app's settings language list. Add `shipped: true` only for en, zh-Hant, zh-Hans. Verify: `node -e` load + assert 32 entries, unique prefixes, es-419 → hreflang `es` → exit 0
- [ ] T002 [REQ-010] Extract the pack traversal (text-field walk, unit ids) from `scripts/gen-zh-hans.mjs` into `scripts/pack-fields.mjs`; gen-zh-hans imports it. Verify: `npm test` → GREEN and `npm run zh-hans` → no diff in generated files

## Phase 2: US-001 Japanese site end to end (P1)

Independent Test: `cd dingpos && npm run build` then `node scripts/prerender.mjs --site-dir _site --only /dingpos/` → every `/dingpos/ja/` route passes the audit and hydrates; `/dingpos/ja/support/how-to-set-up/` body is Japanese.

- [ ] T003 [REQ-001, REQ-005] `dingpos/src/i18n.js`: derive `supportedLanguages` from shipped registry entries; load only the page's `translation.json` via `import.meta.glob`; export `i18nReady`, `currentLanguage` (mirror `sotto/src/i18n.js`). Verify: `cd dingpos && npm run build` → clean
- [ ] T004 [REQ-006] `dingpos/src/data/faq/index.js`: `loadFaq(code)` / `getFaq()`; update `SupportPage.jsx`, `SupportArticlePage.jsx`; `main.jsx` awaits `i18nReady` and `loadFaq` before hydrate. Verify: `cd dingpos && npm run build` → clean, and `grep -c articles.zh-Hant dist/assets/index-*.js` → 0
- [ ] T005 [REQ-001, REQ-002, REQ-003, REQ-004] `dingpos/scripts/copy-spa-pages.js`: `LOCALES` from shipped registry entries (hreflang from registry), port Sotto's `validateLocales`. Verify: `cd dingpos && npm run build` → 192 pages written, same output as before for en/zh-Hant/zh-Hans (`git diff --stat` on a saved dist copy → only asset hashes)
- [ ] T006 [REQ-001] Add `--write-sitemap` to `copy-spa-pages.js`: rewrite the DingPOS `<url>` block of root `sitemap.xml` from the page list. Verify: run it on the current languages → `git diff sitemap.xml` empty
- [ ] T007 [REQ-001] `scripts/generate-sitemap.mjs`: generate `dingposRules` for every shipped registry prefix, each language's pack in its sources. Verify: `npm test` (`generate-sitemap.test.mjs`) → GREEN with a case for a non-zh prefix
- [ ] T008 [REQ-007] `dingpos/src/index.css`: `:root:lang(ja)` and `:root:lang(ko)` set `--dp-font-cjk` to the system stacks used in `sotto/src/index.css`. Verify: `cd dingpos && npm run build` → clean
- [ ] T009 [REQ-011, REQ-008, REQ-009] `scripts/l10n.mjs` `new` and `sync`: registry lookup, segments per plan §Interfaces, `appMatch` from exact en matches against the app's `en.lproj`, `appTerms` filtered by note role, glossary paths; `dingpos/l10n/glossary/_template.md`; `l10n` script in `package.json`. Tests in `scripts/l10n.test.mjs` with a fixture app repo. Verify: `npm test` → GREEN; `npm run l10n -- sync ja` → packets for every segment, 33 `appMatch` units in total
- [ ] T010 [REQ-002, REQ-011] `scripts/l10n.mjs` `apply`: write packs (non-text fields from en, generated-file header), update manifest, reject placeholder mismatch / empty / stale enHash. Tests for each rejection and for non-text fields copied from en. Verify: `npm test` → GREEN
- [ ] T011 [REQ-012, REQ-013] `scripts/l10n.mjs` `progress show|get|set` storing JSON at `~/.local/state/alustudio-site-l10n/progress.json`. Verify: `npm test` → GREEN
- [ ] T012 [REQ-008, REQ-009, REQ-013] Create `.pi/agents/l10n-translator.md` and `.pi/agents/l10n-reviewer.md` from the app's agents, adapted to the site packet format and site rules (plan DEC-010). Verify: `subagent { action: "list" }` → both listed as project agents
- [ ] T013 [REQ-008] Translate ja: `npm run l10n -- new ja`, translator fills `dingpos/l10n/glossary/ja.md` (site-only terms), `sync ja`, one parallel translator call per segment, `apply ja` until `rejected 0`. Depends: T009, T010, T012. Verify: `npm run l10n -- apply ja` → `rejected 0`
- [ ] T014 [REQ-013] Review ja: full review round, at most two fix rounds re-reviewing only changed units; en findings collected in `.logs/l10n/ja/report.md`. Verify: every segment reply ends `VERDICT: CLEAN`
- [ ] T015 [REQ-001, REQ-012] Mark ja `shipped: true`, run `copy-spa-pages.js --write-sitemap`. Verify: `cd dingpos && npm run build` → 256 pages; `grep -c '/dingpos/ja/' sitemap.xml` → 64
- [ ] T016 [REQ-003, REQ-006] Assemble `_site` like `deploy.yml` and prerender DingPOS; time it and count files. Verify: `node scripts/prerender.mjs --site-dir _site --only /dingpos/` → pass; record duration and `find _site -type f | wc -l` (< 20,000) in the report
- [ ] T017 [REQ-006] Check AC-010 on a preview server: `/dingpos/ja/` loads no other language's strings or pack. Verify: agent-browser network log on `vite preview` → only `ja` locale chunks requested
- [ ] T018 Docs: `docs/specs/seo-aeo.md` §多語系 URL (DingPOS languages point to the registry, es hreflang rule, translated languages section), `docs/specs/performance.md` §字型 (DingPOS ja/ko and system-font scripts), `AGENTS.md` DingPOS language note. Verify: `grep -n 'languages.json' docs/specs/seo-aeo.md AGENTS.md` → both hit

Checkpoint: `npm test` and the DingPOS build green; merge `l10n` into main with `mpd_run` → ja is live.

## Phase 3: US-002 Translations never go silently stale (P1)

Independent Test: change one en FAQ article on a scratch branch → `npm test` fails naming `ja` and that slug; `npm run l10n -- sync ja` → a packet with only that article.

- [ ] T019 [REQ-010] `scripts/l10n.mjs` `check`: missing / extra / stale units for every shipped translated language; repo-state test in `scripts/l10n.test.mjs`. Verify: `npm test` → GREEN on main; fixture test with a changed en article → fails naming the slug
- [ ] T020 [REQ-011] `sync --mode review --since <ref>` packs only units changed since `<ref>`. Verify: `npm test` → GREEN
- [ ] T021 [REQ-010, REQ-011] Docs: the en-change procedure (edit en → sync → translate → apply → test) in `docs/specs/seo-aeo.md` beside §簡中由繁中產生. Verify: `grep -n 'npm run l10n' docs/specs/seo-aeo.md` → hit

Checkpoint: `npm test` green; merged to main.

## Phase 4: US-003 Remaining 28 languages (P2)

Independent Test: after one worker run, `git log origin/main` shows the merge of `dingpos-l10n/<code>` and the deployed `/dingpos/<prefix>/` serves that language.

- [ ] T022 [REQ-012, REQ-013] Create `.pi/prompts/l10n-commander.md` and `.pi/prompts/l10n-worker.md` from the app's prompts per plan DEC-009 (single checkout, branch only, serial, clean-tree check before each language, BLOCKED commits WIP then returns to main). Verify: `/l10n-worker` and `/l10n-commander` appear in pi's prompt list
- [ ] T023 [REQ-012] Run the commander inside Herdr for th, ko, vi, id, es-419, fr, de, pt-BR, it, nl, ms, tr, sv, da, nb, fi, et, el, hu, bg, sq, ka, mn, uz, km, lo, hi, bn. Verify: `npm run l10n -- progress show` → every language `done` or `blocked` with a reason

Checkpoint: every `done` language deployed; blocked languages listed with their open findings.

## Human Acceptance

- [ ] H001 [AC-011] th, km, lo, ka, bn, hi pages show no missing glyphs on iOS Safari and Android Chrome.
- [ ] H002 [AC-009] On a phone, the language switcher shows and selects all 32 languages.
- [ ] H003 [AC-020] Rule on the open findings of every blocked language.
