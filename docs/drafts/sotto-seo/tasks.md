# Sotto 官網 SEO — Tasks

## Phase 1: Foundation (shared scripts)

- [x] T001 [REQ-003] `setHtmlLang` accepts optional `dir`; test. Verify: `npm test` → pass
- [x] T002 [REQ-005, REQ-007] prerender: `HYDRATED_PREFIXES` + unique-meta prefixes include `/sotto/`; tests. Verify: `npm test` → pass
- [x] T003 [REQ-009] gen-zh-hans per-app registry (dingpos unchanged output, sotto added); tests. Verify: `npm test` and `node scripts/gen-zh-hans.mjs --check` → dingpos current
- [x] T004 [REQ-006] generate-sitemap sotto per-locale rules; tests. Verify: `npm test` → pass

Checkpoint: `npm test` green; dingpos zh-Hans output unchanged by the generator refactor.

## Phase 2: US-001 URL-driven languages

- [x] T005 [REQ-001, REQ-002] i18n.js URL-driven, drop language detector dependency. Verify: `npm run build` in sotto → ok
- [x] T006 [REQ-004, REQ-007] main.jsx hydrateRoot, BUILD_YEAR footer, ScrollToTop, Navbar switcher navigates. Verify: lint → 0 errors
- [x] T007 [REQ-003, REQ-005, REQ-006, REQ-008] copy-spa-pages LOCALES-driven with validations. Verify: build → all pages written
- [x] T008 [REQ-006] sitemap.xml lists every sotto URL. Verify: build sitemap validation → pass

## Phase 3: US-003 on-page + claims (en, zh-Hant)

- [x] T009 [REQ-010, REQ-011, REQ-013] en + zh-Hant copy: meta keys, H1 tagline, claims, FAQ fixes + reminders item. Verify: grep AC-012 strings → none
- [x] T010 [REQ-012] JSON-LD sameAs. Verify: JSON parse of built index.html → sameAs length 2
- [x] T011 [REQ-014, NFR-001] a11y fixes, H1 structure, font variable per lang. Verify: local Lighthouse a11y audits pass

## Phase 4: US-004 guides (en, zh-Hant)

- [x] T012 [REQ-015..REQ-018] guide pack schema, GuideBlocks, GuidesPage, GuidePage, routes, home guides section, nav/footer links. Verify: build → guide pages written
- [x] T013 [REQ-016, REQ-018] write en + zh-Hant guides (ring table from app lookup). Verify: build validation → pass

## Phase 5: US-002 all locales

- [x] T014 [REQ-008, REQ-019] 9 locales via subagents (UI + FAQ + guides). Verify: build key-set + slug validation → pass
- [x] T015 [REQ-009] `npm run zh-hans`, review packet. Verify: `npm test` → zh-Hans current

- [x] T019 [REQ-009] Generalize `.pi/agents/zh-hans-reviewer.md` to cover the Sotto packet (`.logs/zh-hans-review-sotto.json`, ids `ui:` and `guide:<slug>:<path>`, layers incl. Sotto `SOTTO_SITE_GLOSSARY` / `SOTTO_OVERRIDES` / `SOTTO_APP_GLOSSARY` in scripts/gen-zh-hans.mjs; Sotto is a people-notes app, readers are mainland users). Then dispatch it on the sotto packet and apply findings. Verify: `npm test` → zh-Hans current

## Phase 6: Integration

- [x] T016 [AC-001] assemble _site, sitemap, prerender with audit + hydration. Verify: `node scripts/prerender.mjs` → route audit passed, hydration check passed
- [x] T017 [AC-002..AC-005, AC-015] spot-check prerendered HTML + switcher in browser. Verify: grep / agent-browser
- [x] T018 docs: seo-aeo.md (§多語系 URL: sotto too, 12 langs, prefixes; §簡中由繁中產生: per-app APPS registry, packet path `.logs/zh-hans-review-<app>.json`; §Prerender: sotto hydrates, unique-meta prefixes; §Structured data: sotto BreadcrumbList + sameAs; §內容: sotto guides), performance.md (sotto hydrateRoot; per-language CJK font via `--sotto-font-cjk`; sotto loads only its language's strings/guides), AGENTS.md Sub-app Notes (sotto URL languages, zh-Hans generated, guides pack, copy-spa validations). Verify: read-through
- [x] T020 Gate: repo root `npm test`; `cd <app> && npm run lint && npm run build` for sotto (and dingpos, since shared scripts changed); local Lighthouse a11y/SEO on `vite preview` of the assembled site for /sotto/ and /sotto/ar/. Push branch `feat/oh-88-sotto-seo` (never merge main). Run review_plan (baseBranch main) → subagent workflow → review_report; fix findings.
- [x] T021 Linear OH-88 comment: progress + results + what remains (H001 after merge); `LINEAR_API_KEY="$(cat ~/.config/linear/api_key)" linear issue comment add OH-88 --body-file <file>` (check `linear issue comment --help`).
- [ ] T022 SDD Gate 2 handoff to user: verification report, consolidation mapping (requirements → seo-aeo.md etc.), dispositions; then delete docs/drafts/sotto-seo after approval.

## Human Acceptance

- [ ] H001 [AC-013] After merge + deploy: production mobile Lighthouse 3× median SEO 100, A11y ≥ 90, LCP ≤ 2.5 s.

## Handoff notes (read first in a fresh context)

- Branch `feat/oh-88-sotto-seo`. Push to main deploys production: never merge or push main.
- Done commits: shared scripts refactor (gen-zh-hans per-app `APPS`, prerender `UNIQUE_META_PREFIXES`/`HYDRATED_PREFIXES` incl. /sotto/, setHtmlLang dir), sotto URL-driven i18n + guides + en/zh-Hant copy, fonts/contrast/lastmod.
- Sotto loads only the current language: `src/i18n.js` exports `i18nReady` (import.meta.glob of locales) and `src/data/guides/index.js` `loadGuides`; `main.jsx` hydrates after both resolve.
- Guide pack schema is documented at the top of `sotto/src/data/guides/guides.en.js`; `RING_SIZE_ROWS` is defined there and imported by other packs.
- T014 translations: a parallel workflow of 9 `worker` subagents (async run id `36034140`) writes `/tmp/oh88/<code>/translation.json` and `/tmp/oh88/<code>/guides.<code>.js` for ja ko de es fr it pt-BR ru ar, per `/tmp/oh88/BRIEF.md`. Check with `subagent({action:"status", id:"36034140"})`. For each code: `node .logs/check-sotto-locale.mjs <code> /tmp/oh88/<code>` must PASS, then copy into `sotto/src/locales/<code>/translation.json` and `sotto/src/data/guides/guides.<code>.js`; spot-check SWEET term in hero.meta_title/tagline (DEC-006) and facts. If a worker failed, redo that language (dispatch one worker with the same brief).
- After T014: `npm run zh-hans` (regenerates sotto zh-Hans), `cd sotto && npm run lint && npm run build`. Build validates locale key sets, guides, unique meta, sitemap.
- Integration (T016) = deploy.yml "Assemble site" steps locally: build all 5 apps, `mkdir -p _site/{home,pikgeon,babbby,sotto,dingpos}`, copy root files + each `dist/*`, `node scripts/generate-sitemap.mjs --out _site/sitemap.xml`, `node scripts/prerender.mjs --site-dir _site`. `_site` is gitignored (verify).
- Decisions already made (record in summary): zh-Hans generated (DEC-002); privacy/terms text NOT changed (DEC-009, follow-up: biometric section omits passcode/Android; terms mention only iCloud backup; Android has no Crashlytics); production Lighthouse only after merge (DEC-011).
- requirements.md tweaks to apply: REQ-017 description = the guide's `summary`; FAQ now has 9 items (new `does_sotto_send_reminders`).
- Scratch helpers live in `.logs/` (gitignored): `check-sotto-locale.mjs`, `cmp.mjs`.
- T019 result: reviewer found 28 issues; 27 applied as `SOTTO_SITE_GLOSSARY` rules + en tagline restored "Gentle". Declined: 戒围 → 戒指尺寸 (the Sotto app's zh-Hans says 戒围; site follows the app). 则→条 narrowed to note contexts so 规则/否则 stay.
- Register: fr and ru home copy switched from tu/ты to vous/вы so the whole site (FAQ, guides, store listing) uses one form. de/es/it/pt-BR keep the informal form already used across their sites.
- zh-Hans privacy/terms are now generated from zh-Hant (previously hand-written); wording changed, meaning follows zh-Hant. Not a DEC-009 content change.
- T016: full prerender timed out on 1–2 random /sotto/ routes per run (4 of 6 runs). Root cause: waitForFunction defaulted to rAF polling, which never fires in the hidden concurrent tabs; sotto mounts after `load`. Fixed with mutation / interval polling; 3/3 full runs then 309/309 + audit + hydration (300). Recorded in seo-aeo.md §Prerender. Assemble helper: `.logs/assemble.sh`.
- T017 evidence (`.logs/spot.mjs`, `.logs/switch.mjs` on `python3 -m http.server` of `_site`): en/ar/ja guide/zh-Hans faq/de guides each have lang+dir (ar rtl), self-canonical, 13 hreflang, og:locale + 11 alternates, one h1 (home h1 = brand + SWEET tagline), MobileApplication sameAs 2, BreadcrumbList on guides, <main>, localized select aria-label. Switcher ja→de→en and ar guide→ko keep the route; fr home guide links stay under /sotto/fr/; no console errors.
- Follow-ups (pre-existing, all apps, not this ticket): in-app `<Link>` hrefs lack the trailing slash every route is served at (one redirect hop for crawlers; DingPOS same); Navbar writes a measured `--navbar-height` onto `<html>` in an effect, which prerender bakes into the HTML.
- T011 evidence: local Lighthouse (prerendered `_site`, mobile default) a11y 100 / SEO 100 on /sotto/, /sotto/ar/, /sotto/ko/, /sotto/guides/, /sotto/ja/guides/find-ring-size-secretly/, /sotto/de/faq/, /sotto/zh-hans/faq/. FAQ contact link was 3.88:1 because `.faq-contact` had `opacity: 0.85` diluting $gold-dark; removed.
- T020 progress: gate green — root `npm test` 73/73; lint ok for home, pikgeon, babbby, sotto, dingpos; all five apps build; full prerender 309/309 + audit + hydration (300) ×3. Review pipeline dispatched (workflow `1b62a014`); on completion read `review_report`, fix findings, then tick T020.
- T020 review (`1b62a014`, 6 lenses): NEEDS-FIX → all fixed. P1 `npm run zh-hans` would crash after merge: `sourcesAt` flattened past-ref packs into one temp file, so a pack's sibling import could not resolve — now stages each pack's directory at its repo path (+ `type: module`), regression test against HEAD (old code reproduced ERR_MODULE_NOT_FOUND). P2 every non-en pack pulled in the en articles for `RING_SIZE_ROWS` → moved to `ring-sizes.js`. P2 unknown guide block types rendered nothing → build rejects them, renderer throws. P2 zh-Hant/ru home description lacked the SWEET term → added (REQ-010 wins; DEC-006 wording aligned). P3 AC-015 URL fixed. After fixes: test 74/74, zh-Hans current, sotto lint/build, prerender 309/309 + audit + hydration.
- T021: comment posted (OH-88 #comment-31f0228d).
