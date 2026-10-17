# Sotto 官網 SEO — Tasks

## Phase 1: Foundation (shared scripts)

- [ ] T001 [REQ-003] `setHtmlLang` accepts optional `dir`; test. Verify: `npm test` → pass
- [ ] T002 [REQ-005, REQ-007] prerender: `HYDRATED_PREFIXES` + unique-meta prefixes include `/sotto/`; tests. Verify: `npm test` → pass
- [ ] T003 [REQ-009] gen-zh-hans per-app registry (dingpos unchanged output, sotto added); tests. Verify: `npm test` and `node scripts/gen-zh-hans.mjs --check` → dingpos current
- [ ] T004 [REQ-006] generate-sitemap sotto per-locale rules; tests. Verify: `npm test` → pass

Checkpoint: `npm test` green, dingpos build output byte-identical except none.

## Phase 2: US-001 URL-driven languages

- [ ] T005 [REQ-001, REQ-002] i18n.js URL-driven, drop language detector dependency. Verify: `npm run build` in sotto → ok
- [ ] T006 [REQ-004, REQ-007] main.jsx hydrateRoot, BUILD_YEAR footer, ScrollToTop, Navbar switcher navigates. Verify: lint → 0 errors
- [ ] T007 [REQ-003, REQ-005, REQ-006, REQ-008] copy-spa-pages LOCALES-driven with validations. Verify: build → all pages written
- [ ] T008 [REQ-006] sitemap.xml lists every sotto URL. Verify: build sitemap validation → pass

## Phase 3: US-003 on-page + claims (en, zh-Hant)

- [ ] T009 [REQ-010, REQ-011, REQ-013] en + zh-Hant copy: meta keys, H1 tagline, claims, FAQ fixes + reminders item. Verify: grep AC-012 strings → none
- [ ] T010 [REQ-012] JSON-LD sameAs. Verify: JSON parse of built index.html → sameAs length 2
- [ ] T011 [REQ-014, NFR-001] a11y fixes, H1 structure, font variable per lang. Verify: local Lighthouse a11y audits pass

## Phase 4: US-004 guides (en, zh-Hant)

- [ ] T012 [REQ-015..REQ-018] guide pack schema, GuideBlocks, GuidesPage, GuidePage, routes, home guides section, nav/footer links. Verify: build → guide pages written
- [ ] T013 [REQ-016, REQ-018] write en + zh-Hant guides (ring table from app lookup). Verify: build validation → pass

## Phase 5: US-002 all locales

- [ ] T014 [REQ-008, REQ-019] 9 locales via subagents (UI + FAQ + guides). Verify: build key-set + slug validation → pass
- [ ] T015 [REQ-009] `npm run zh-hans`, review packet. Verify: `npm test` → zh-Hans current

## Phase 6: Integration

- [ ] T016 [AC-001] assemble _site, sitemap, prerender with audit + hydration. Verify: `node scripts/prerender.mjs` → route audit passed, hydration check passed
- [ ] T017 [AC-002..AC-005, AC-015] spot-check prerendered HTML + switcher in browser. Verify: grep / agent-browser
- [ ] T018 docs: seo-aeo.md, performance.md, AGENTS.md. Verify: read-through

## Human Acceptance

- [ ] H001 [AC-013] After merge + deploy: production mobile Lighthouse 3× median SEO 100, A11y ≥ 90, LCP ≤ 2.5 s.
