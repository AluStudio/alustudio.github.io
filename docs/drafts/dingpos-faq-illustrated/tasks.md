# Tasks: DingPOS FAQ illustrated (reports pilot)

Read `requirements.md` and `plan.md` in this folder first. DEC ids below refer to `plan.md`.

## Phase 1: Foundation

- [x] T001 [REQ-011] Create branch `faq-reports` from `main` (DEC-009); every later commit lands there. Verify: `git branch --show-current` → `faq-reports`
- [x] T002 [REQ-003] Add `dingpos/src/data/faq/shots.js` (`FAQ_SHOT_SIZES` empty for now, `faqShotPath(code, name, phone)`) and extract `GuideImage` from `dingpos/src/components/GuideBlocks.jsx` into `dingpos/src/components/Figure.jsx`; GuideBlocks renders through it (DEC-001, DEC-002). Verify: `cd dingpos && npm run build` → passes; a guide page's `<img>` markup in `dist` is byte-identical to before
- [x] T003 [REQ-003, REQ-006] `dingpos/src/components/FaqBlocks.jsx`: render `shot` through `Figure` with the page language's file, and `h2` as `<h2>`; pass the language code from `SupportArticlePage.jsx` if FaqBlocks cannot read it (DEC-002, DEC-003). Verify: `cd dingpos && npm run build` → passes
- [x] T004 [REQ-006] `scripts/meta-description.mjs` `contentUnits` skips `h2`, with a test next to its existing tests. Verify: `npm test` → GREEN
- [x] T005 [REQ-004] `dingpos/scripts/copy-spa-pages.js`: for every shipped language and every `shot` block, fail on an unregistered name, a missing / non-WebP file, a size different from `FAQ_SHOT_SIZES`, a missing or wrong 1080w phone file, or an empty alt (reuse `webpSize`, `PHONE_IMAGE_WIDTH` from `scripts/guide-images.mjs`). Verify: temporarily add a shot block to an en article with no files → `npm run build` fails naming language + shot; revert → passes
- [ ] T006 [REQ-008] Export the block parser from `scripts/guide-md.mjs` and add `scripts/faq-md.mjs` (frontmatter + blocks per DEC-007; replace by slug, else insert after the category's last article) with `scripts/faq-md.test.mjs` covering replace, insert position, shot line with and without caption, and rejection of unknown markup. Verify: `npm test` → GREEN; `guide-md` tests still pass
- [ ] T007 [REQ-007] Add `.pi/agents/faq-writer.md` (`google/gemini-4-neon`, thinking high, tools read/write, no inherited context) and contract `.pi/faq/dingpos.md`: readers (shop owners following steps on their iPad), answer-first, `h2` sections, on-screen names verbatim from the brief, only brief facts, one shot per step where the brief offers one, no hype, en = plain international English and translation source, zh-Hant = Taiwan usage, the restricted Markdown of DEC-007, one-line reply (DEC-006). Model it on `.pi/agents/guide-writer.md` and `.pi/guides/writer.md`. Verify: `subagent { action: "list" }` shows `faq-writer` with model `google/gemini-4-neon`
- [ ] T008 [REQ-008] `.pi/agents/guide-cleaner.md`: accept FAQ drafts under `.logs/faq/` (format reference `.pi/faq/dingpos.md` §Output format; the shot line and frontmatter are locked frame; alt and caption are text). Verify: file diff reviewed; `subagent { action: "list" }` still shows `guide-cleaner`

Checkpoint: build and `npm test` green; pipeline tools exist. Commit.

## Phase 2: US-001 + US-003 briefs (P1)

Independent Test: ten briefs exist and the shot list in `plan.md` DEC-004 matches what they reference.

- [ ] T009 [REQ-001, REQ-009] Write briefs for the four new v3.6 articles in `.logs/faq/dingpos/briefs/` (slugs proposed: `tax-report`, `filing-boxes`, `input-tax`, `export-tax-report`; check en wording against existing slugs' style). Facts from DingPOS `docs/specs/dashboard/tax-report.md`, purchasing / settings specs and CHANGELOG §[3.6]; on-screen names copied from `~/Developer/alustudio/DingPOS` `en.lproj` and `zh-Hant.lproj` `Localizable.strings`. Verify: every fact line cites a spec § or CHANGELOG entry; every quoted UI name greps in the app's strings
- [ ] T010 [REQ-009] Write briefs for the six existing reports articles (`revenue-vs-cash`, `report-periods`, `advanced-reports`, `profit-not-tracked`, `profit-loss`, `record-expenses`), keeping their slugs, `since` and every still-true fact from the current en / zh-Hant text, re-checked against `docs/specs/dashboard/*` and `docs/specs/profit-loss/requirements.md`. Verify: same as T009
- [ ] T011 [REQ-005] Pin the final shot list: update the DEC-004 table in `plan.md` to exactly the shots the ten briefs reference (append a DEC if a fixture choice changes). Verify: `grep -o 'shot:[a-z-]*' .logs/faq/dingpos/briefs/*.md | sort -u` equals the table's names

Checkpoint: briefs and shot list fixed. Commit `plan.md`.

## Phase 3: US-002 screenshots (P1)

Independent Test: `dingpos/public/faq/<code>/` holds every pinned shot for all 32 languages and `npm run build` passes with a test article referencing them.

- [ ] T012 [REQ-005] Build the DingPOS Debug app from `~/Developer/alustudio/DingPOS`, install on "iPad Pro 11-inch (M5)", enable app accessibility (`make sim-ax-enable AX_SIM=<udid>`), rotate landscape-right (sim-use skill). Verify: `sim-use ios ui --json` returns the app's sidebar entries
- [ ] T013 [REQ-005] Write `dingpos/scripts/capture-faq-shots.sh` per DEC-005 and run it for `en` and `zh-Hant`. Verify: every pinned shot PNG exists for both, no `!` line; evidence: `evidence/T013-en-<name>.png` copies
- [ ] T014 [REQ-005] Write `dingpos/scripts/build-faq-shots.sh` with one fixed crop box per shot; fill `FAQ_SHOT_SIZES`. Verify: `public/faq/{en,zh-Hant}/*.webp` exist; read each crop image and confirm it frames the intended UI region (agent-driven, evidence in `evidence/T014-*`)
- [ ] T015 [REQ-005] Run capture + build for the remaining 30 languages (codes from `dingpos/l10n/languages.json`). Verify: `ls dingpos/public/faq/*/ | grep -c webp` equals 32 × (shots + phone files); no `!` lines; spot-read ja, th, de crops (evidence `evidence/T015-*`)

Checkpoint: screenshots complete and committed (`chore(dingpos): add FAQ screenshots`).

## Phase 4: US-001 + US-003 en / zh-Hant content (P1)

Independent Test: `npm run build` passes with the ten articles in en and zh-Hant; `npm test` fails only on l10n stale/missing units and zh-Hans staleness, which Phase 5 resolves.

- [ ] T016 [REQ-007] Run `faq-writer` for the ten briefs × en and zh-Hant (20 runs, parallel subagents), drafts at `.logs/faq/dingpos/<slug>.<code>.draft.md`. Verify: 20 drafts exist; each converts with `node scripts/faq-md.mjs <draft> --dry-run` (or equivalent) without error
- [ ] T017 [REQ-008] Copy each to `.clean.md` and run `guide-cleaner` on all 20 (parallel). Verify: `git diff --no-index --word-diff` per pair reviewed; no fact, number or UI name changed
- [ ] T018 [REQ-008, REQ-009] Fact-check each clean draft against its brief and the app strings, fix in the `.clean.md`, then `node scripts/faq-md.mjs` into `articles.en.js` / `articles.zh-Hant.js`. Verify: AC-007 holds for all ten; each article opens with a paragraph and has ≥ 1 shot block; `cd dingpos && npm run build` → passes
- [ ] T019 [REQ-002] Read DingPOS `CHANGELOG.md` §[3.6] entry by entry against all FAQ articles (every category) and fix outdated en + zh-Hant text directly (DEC-008); record each entry → article decision in `## Notes` of the ralph task file. Verify: AC-002; `npm run build` → passes
- [ ] T020 [REQ-001, REQ-002] Set `VERIFIED_APP_VERSION = "3.6"` and `since: "3.6"` on the four new articles in both packs. Verify: `curl -s 'https://itunes.apple.com/lookup?id=6788988943&country=tw' | jq -r '.results[0].version'` → `3.6`; `npm run build` → passes
- [ ] T021 [REQ-003] Agent-driven page check: `vite preview` the build, open `/dingpos/support/tax-report/`, `/dingpos/zh-hant/support/tax-report/` with agent-browser; assert `<img>` src is the page language's file with width/height/srcset/alt, one `<h1>`, `<h2>` sections. Verify: DOM assertions pass; evidence `evidence/T021-*.png`

Checkpoint: en + zh-Hant content complete. Commit.

## Phase 5: US-004 all languages and docs (P2)

Independent Test: `npm test`, `npm run l10n -- check`, `cd dingpos && npm run build` and local prerender all pass.

- [ ] T022 [REQ-010] `npm run zh-hans`; send `.logs/zh-hans-review-dingpos.json` to `zh-hans-reviewer`; fix per layer; regenerate (seo-aeo.md §簡中由繁中產生). Verify: zh-Hans part of `npm test` passes
- [ ] T023 [REQ-010] For the first 10 translated languages in registry order: `npm run l10n -- dingpos sync <code>`, `l10n-translator` per packet (parallel), `apply` until `rejected 0`. Verify: `npm run l10n -- check` reports nothing for these codes
- [ ] T024 [REQ-010] Same for the next 10 translated languages. Verify: same
- [ ] T025 [REQ-010] Same for the remaining translated languages. Verify: `npm run l10n -- check` → clean for all
- [ ] T026 [REQ-010] Review round: `sync --mode review --since <commit before T018>` per language, `l10n-reviewer` per segment, translator fixes, at most two rounds (seo-aeo.md §翻譯語言); unresolved `translation`/`glossary` findings go to `## Notes` for the owner. Verify: `npm run l10n -- check` → clean
- [ ] T027 [REQ-011] `node dingpos/scripts/copy-spa-pages.js --write-sitemap`. Verify: `cd dingpos && npm run build` → passes (sitemap check)
- [ ] T028 [REQ-012] Document: `docs/specs/seo-aeo.md` (FAQ `shot` / `h2` blocks, per-language screenshots and the build check, the `faq-writer` pipeline next to the guide one), `docs/specs/performance.md` §圖片 if FAQ adds a rule, AGENTS.md DingPOS note (capture/build scripts, never hand-edit `public/faq`). Verify: `rg -n "faq-writer|capture-faq-shots" docs/specs AGENTS.md` → hits in each
- [ ] T029 [REQ-011] Full gate: `npm test`; `cd dingpos && npm run lint && npm run build`; run the deploy workflow's assemble + `scripts/prerender.mjs` steps locally. Verify: all exit 0; route audit and hydration check pass

Checkpoint: branch complete and green; ready for owner review and merge.

## Human Acceptance

- [ ] H001 [AC-010] Owner reads the ten reports articles in en and zh-Hant (tone, accuracy, screenshot choice). Ready: branch `faq-reports`, `vite preview` URLs listed in the ralph task file's final checkpoint. After approval the main session merges with `mpd_run` and verifies the deploy (AC-009).
