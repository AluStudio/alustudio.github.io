# Plan: Babbby Support Page

## Technical Approach

Create a standalone Vite + React SPA under `babbby/` in the same repository, mirroring the `pikgeon/` project structure. The site uses Bootstrap 5 with custom SCSS variables for Babbby's peach/coral palette, i18next for en/zh-Hant bilingual support, and React Router for client-side routing. The GitHub Actions workflow is updated to build both projects and deploy them under their respective paths. No dark mode — Babbby's warm palette is intentionally light-only.

## Architecture Decisions

### Decision: Separate Vite Project (not shared monorepo)

**Choice**: Create `babbby/` as an independent Vite + React project with its own `package.json`
**Alternatives**: Monorepo with shared components; single project with multi-tenant routing
**Rationale**: Pikgeon and Babbby are completely different apps with different branding, legal content, and languages. Sharing components adds coupling with no real reuse benefit. Independent projects are simpler to maintain, build, and deploy.

### Decision: Light-Only Theme

**Choice**: No dark mode toggle; single warm peach/coral theme
**Alternatives**: Add dark/light toggle like pikgeon
**Rationale**: Babbby's brand identity is built around warm peach (#FFF8F2) and coral (#FF6B4A). A dark variant would dilute this identity and add complexity for pages that are primarily legal text. Pikgeon needs dark mode because it's a general-purpose tool; Babbby is a branded experience.

### Decision: Minimal Landing Page

**Choice**: Simple hero section with app name, one-line description, and links to legal pages
**Alternatives**: Full marketing page with features/screenshots like pikgeon
**Rationale**: The user explicitly requested privacy + terms pages. A minimal landing page serves as a navigation hub. A full marketing page can be added later if needed.

### Decision: 2 Languages Only (en + zh-Hant)

**Choice**: Support only English and Traditional Chinese, matching the iOS app
**Alternatives**: Support all 16 pikgeon languages
**Rationale**: Babbby only ships en + zh-Hant. Legal documents must match the app's supported languages. Default fallback is zh-Hant (matching `AppLanguage.defaultLanguage`).

### Decision: Bootstrap 5 + Custom SCSS Variables

**Choice**: Use Bootstrap 5 with Babbby-specific SCSS variables for colors
**Alternatives**: Tailwind CSS; plain CSS; copy pikgeon variables
**Rationale**: Matches pikgeon's tech stack (team familiarity), Bootstrap provides responsive grid and basic components out of the box, and SCSS variables make brand customization clean.

## Data Flow

```
Browser navigates to /babbby/privacy
    │
    ├── GitHub Pages serves index.html (or 404.html → SPA redirect)
    │
    ├── React Router matches /privacy route
    │
    ├── i18next detects browser language
    │   ├── zh / zh-Hant / zh-TW → zh-Hant
    │   ├── en                   → en
    │   └── other                → zh-Hant (fallback)
    │
    └── PrivacyPage renders with localized content
```

## Interfaces / Contracts

### i18n Translation Structure

```json
{
  "nav": { "privacy": "...", "terms": "..." },
  "landing": { "title": "...", "subtitle": "...", "privacy_link": "...", "terms_link": "..." },
  "privacy_policy": {
    "title": "...",
    "effective_date": "...",
    "intro": "...",
    "info_collection": { "title": "...", "desc": "...", "items": [...] },
    "third_party": { "title": "...", "desc": "..." },
    "iap": { "title": "...", "desc": "..." },
    "local_storage": { "title": "...", "desc": "..." },
    "activity_disclaimer": { "title": "...", "desc": "..." },
    "children": { "title": "...", "desc": "..." },
    "rights": { ... },
    "security": { ... },
    "changes": { ... },
    "contact": { ... }
  },
  "terms": {
    "title": "...",
    "effective_date": "...",
    "intro": "...",
    "license": { ... },
    "restrictions": { ... },
    "activity_disclaimer": { "title": "...", "desc": "...", "items": [...] },
    "third_party": { ... },
    "device_security": { ... },
    "connectivity": { ... },
    "updates": { ... },
    "disclaimer": { ... },
    "liability": { ... },
    "changes": { ... },
    "contact": { ... }
  },
  "footer": { ... }
}
```

### SCSS Variables (Babbby palette)

```scss
// Babbby brand tokens (from AppColor.swift)
$babbby-peach:     #FFF8F2;  // background
$babbby-coral:     #FF6B4A;  // primary accent
$babbby-coral-700: #F17B54;  // active state
$babbby-ink-800:   #3F4345;  // text primary
$babbby-ink-400:   #71717A;  // text secondary

// Bootstrap overrides
$primary: $babbby-coral;
$body-bg: $babbby-peach;
$body-color: $babbby-ink-800;
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `babbby/package.json` | Create | Project config: react, vite, bootstrap, i18next, react-router-dom, sass |
| `babbby/vite.config.js` | Create | Vite config with `base: '/babbby/'` |
| `babbby/index.html` | Create | HTML shell with SPA redirect script |
| `babbby/src/main.jsx` | Create | React entry with BrowserRouter basename="/babbby" |
| `babbby/src/App.jsx` | Create | Routes: `/`, `/privacy`, `/terms` |
| `babbby/src/i18n.js` | Create | i18next config with en + zh-Hant, fallback zh-Hant |
| `babbby/src/locales/en/translation.json` | Create | English translations |
| `babbby/src/locales/zh-Hant/translation.json` | Create | Traditional Chinese translations |
| `babbby/src/pages/HomePage.jsx` | Create | Minimal landing page |
| `babbby/src/pages/PrivacyPage.jsx` | Create | Privacy Policy page |
| `babbby/src/pages/TermsPage.jsx` | Create | Terms of Use page |
| `babbby/src/pages/legal.scss` | Create | Legal page styles (adapted from pikgeon) |
| `babbby/src/components/Navbar.jsx` | Create | Simple navbar with lang switcher (no dark mode) |
| `babbby/src/components/Footer.jsx` | Create | Footer with legal links + copyright |
| `babbby/src/assets/scss/_variables.scss` | Create | Babbby palette overrides for Bootstrap |
| `babbby/src/assets/scss/all.scss` | Create | Bootstrap import with custom variables |
| `babbby/src/assets/scss/navbar.scss` | Create | Navbar styles (coral theme) |
| `babbby/src/assets/scss/footer.scss` | Create | Footer styles |
| `babbby/src/assets/scss/home.scss` | Create | Landing page styles |
| `babbby/src/index.css` | Create | Minimal global resets |
| `babbby/public/404.html` | Create | SPA redirect for GitHub Pages |
| `babbby/eslint.config.js` | Create | ESLint config (copy from pikgeon) |
| `.github/workflows/deploy.yml` | Modify | Add babbby build step + assemble under `_site/babbby/` |
| `~/Developer/alustudio/babbby-ios/Babbby/Babbby/App/AppConfig.swift` | Modify | Update privacy/terms URLs from `alustudio.com` to `alustudio.github.io` |

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Manual | Pages render correctly, links work, language switching | Local `npm run dev` + browser |
| Build | Vite builds without errors | `npm run build` in CI |
| Deploy | Both pikgeon and babbby accessible after deploy | Manual verification post-deploy |

No automated tests — this is a static content site with no business logic.

## Migration / Rollout

No migration required. New project added alongside existing pikgeon.

Update `AppConfig.swift` in babbby-ios to point to `https://alustudio.github.io/babbby/privacy` and `https://alustudio.github.io/babbby/terms` (currently pointing to `alustudio.com` which has no DNS configured).

## Open Questions

_None._
