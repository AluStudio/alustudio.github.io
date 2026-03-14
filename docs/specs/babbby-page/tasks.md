---
summary: Phased implementation checklist for the Babbby support page
read_when: Tracking build progress or picking up remaining work on babbby/
---

# Tasks: Babbby Support Page

## Phase 1: Project Scaffold

- [ ] 1.1 Create `babbby/package.json` with dependencies: react, react-dom, react-router-dom, bootstrap, bootstrap-icons, i18next, react-i18next, i18next-browser-languagedetector, sass; devDeps: vite, @vitejs/plugin-react, eslint
  - _Requirements: Story 5 (CI/CD)_
- [ ] 1.2 Create `babbby/vite.config.js` with `base: '/babbby/'`
  - _Requirements: Story 5_
- [ ] 1.3 Create `babbby/index.html` with SPA redirect script (adapted from pikgeon)
  - _Requirements: Story 5_
- [ ] 1.4 Create `babbby/public/404.html` for GitHub Pages SPA fallback
  - _Requirements: Story 5_
- [ ] 1.5 Create `babbby/eslint.config.js` (copy from pikgeon)
  - _Requirements: Story 5_
- [ ] 1.6 Run `npm install` to generate `package-lock.json`
  - _Requirements: Story 5_

## Phase 2: Styling Foundation

- [ ] 2.1 Create `babbby/src/assets/scss/_variables.scss` — Babbby palette: $primary: #FF6B4A, $body-bg: #FFF8F2, $body-color: #3F4345
  - _Requirements: NFR Branding_
- [ ] 2.2 Create `babbby/src/assets/scss/all.scss` — Bootstrap import with custom variables
  - _Requirements: NFR Branding_
- [ ] 2.3 Create `babbby/src/assets/scss/navbar.scss` — coral-themed navbar (no dark mode toggle)
  - _Requirements: NFR Branding, Story 4_
- [ ] 2.4 Create `babbby/src/assets/scss/footer.scss` — coral gradient footer
  - _Requirements: NFR Branding_
- [ ] 2.5 Create `babbby/src/assets/scss/home.scss` — landing page hero styles
  - _Requirements: Story 4_
- [ ] 2.6 Create `babbby/src/pages/legal.scss` — legal page typography (adapted from pikgeon, coral accent)
  - _Requirements: Story 1, Story 2_
- [ ] 2.7 Create `babbby/src/index.css` — minimal global resets
  - _Requirements: NFR Responsiveness_

## Phase 3: i18n & Translation Content

- [ ] 3.1 Create `babbby/src/i18n.js` — i18next config with en + zh-Hant, fallbackLng: "zh-Hant"
  - _Requirements: Story 3_
- [ ] 3.2 Create `babbby/src/locales/en/translation.json` — full English content for landing, privacy policy, terms, nav, footer
  - Privacy: info collection, Firebase third-party, IAP (Apple handles payment), local storage (GRDB on-device), activity disclaimer, children's privacy, GDPR/CCPA rights, security, changes, contact
  - Terms: license, restrictions, activity disclaimer (5 points: inspiration only / parental supervision / age guidelines general / not professional replacement / no liability), Firebase third-party, device security, connectivity, updates, disclaimer, liability, changes, contact
  - _Requirements: Story 1, Story 1b, Story 2, Story 3_
- [ ] 3.3 Create `babbby/src/locales/zh-Hant/translation.json` — Traditional Chinese translations (same structure as en)
  - _Requirements: Story 1, Story 1b, Story 2, Story 3_

## Phase 4: React Components & Pages

- [ ] 4.1 Create `babbby/src/main.jsx` — React entry with BrowserRouter basename="/babbby", bootstrap JS import
  - _Requirements: Story 5_
- [ ] 4.2 Create `babbby/src/App.jsx` — Routes: `/` → HomePage, `/privacy` → PrivacyPage, `/terms` → TermsPage
  - _Requirements: Story 1, Story 2, Story 4_
- [ ] 4.3 Create `babbby/src/components/Navbar.jsx` — app logo/name, lang switcher (en/zh-Hant), no dark mode toggle
  - _Requirements: Story 3, Story 4_
- [ ] 4.4 Create `babbby/src/components/Footer.jsx` — legal links, copyright, contact email
  - _Requirements: Story 1, Story 2_
- [ ] 4.5 Create `babbby/src/pages/HomePage.jsx` — hero: app name, subtitle, links to /privacy and /terms
  - _Requirements: Story 4_
- [ ] 4.6 Create `babbby/src/pages/PrivacyPage.jsx` — structured privacy policy with all sections from translation
  - _Requirements: Story 1, Story 1b_
- [ ] 4.7 Create `babbby/src/pages/TermsPage.jsx` — structured terms of use with activity disclaimer and all sections
  - _Requirements: Story 2_

## Phase 5: CI/CD & Cross-Project

- [ ] 5.1 Update `.github/workflows/deploy.yml` — add babbby build job, assemble `_site/babbby/` from dist
  - _Requirements: Story 5_
- [ ] 5.2 Update `babbby-ios/Babbby/Babbby/App/AppConfig.swift` — change URLs from `alustudio.com` to `alustudio.github.io`
  - _Requirements: Story 1 (URL stability)_

## Phase 6: Verification

- [ ] 6.1 Run `cd babbby && npm run build` — verify clean build
- [ ] 6.2 Run `cd babbby && npm run dev` — verify all 3 routes render correctly
- [ ] 6.3 Verify language detection: zh browser → 繁中 content; en browser → English content
- [ ] 6.4 Verify privacy page: no AdMob section, has Firebase third-party, IAP disclosure, local storage disclosure, activity disclaimer
- [ ] 6.5 Verify terms page: activity disclaimer with 5 points, Firebase-only third-party
- [ ] 6.6 Commit and push — verify GitHub Actions builds both pikgeon + babbby successfully
