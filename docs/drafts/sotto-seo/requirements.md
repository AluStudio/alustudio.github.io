# Sotto 官網 SEO — Requirements

## Summary

讓 `alu-studio.com/sotto/` 的 12 種語言各有可索引的 URL、FAQ 全語系完整，首頁 on-page 帶入各市場已驗證的 SWEET 詞，並上線第一批 4 篇獲客文章（12 語系）。來源：Linear OH-88（2026-10-17 診斷與決策）。

使用者決定（2026-10-17，requirements 階段）：
- 文章題目：記住重要的人的小細節、送禮前不露痕跡問到尺寸（衣服／鞋／戒圍總覽）、偷偷量到對方的戒圍、gift log（記錄送過的禮物、不重複送）。
- 文章語系：12 語系全開。

產品事實（2026-10-17 從 sotto-ios / sotto-android 程式碼核對）：App Lock 用系統螢幕鎖（iOS `.deviceOwnerAuthentication` 含 passcode；Android `BIOMETRIC_STRONG or DEVICE_CREDENTIAL` 含 PIN／圖形／密碼）；備份為手動，iOS 有 iCloud／Google Drive／Dropbox，Android 有 Google Drive／Dropbox；主題 8 個；預設欄位 130 個，其中身體量測 10 個、尺寸 13 個（鞋、內衣、帽、10 指戒圍）；戒圍換算 US/EU/UK/JP/CN/HK/CH，鞋碼 US/EU/UK/JP/CM；日期欄位可開提醒，前 7 天 09:00；免費版 5 人、每人 10 欄位、每人 5 則筆記，一次買斷解鎖；提問題庫 323 題。

## US-001 每種語言都有可被索引的獨立 URL (P1)

### Rules

- REQ-001: The site SHALL serve every Sotto page (home, FAQ, privacy, terms, guides index, each guide) once per language at `/sotto/<prefix>/<path>/`, where en has no prefix and the other 11 languages use `zh-hant`, `zh-hans`, `ja`, `ko`, `de`, `es`, `fr`, `it`, `pt-br`, `ru`, `ar`.
- REQ-002: The URL SHALL be the only language signal; the app SHALL NOT read navigator language, storage, or cookies to pick a language.
- REQ-003: Every page version SHALL ship self-canonical, `<html lang>` (and `dir="rtl"` for ar), `og:locale` + `og:locale:alternate`, and a hreflang set listing all 12 languages plus `x-default` (= en), identical across the set.
- REQ-004: The language switcher SHALL navigate to the same page in the chosen language.
- REQ-005: No two Sotto pages SHALL share a title or a description, across languages included; the build SHALL fail otherwise.
- REQ-006: Root `sitemap.xml` SHALL list exactly the Sotto pages the build produces, in every language; the build SHALL fail on any difference.
- REQ-007: The client SHALL hydrate the prerendered DOM in place, and render SHALL NOT read the clock, viewport, or storage.

### Acceptance

- AC-001: Given a built + prerendered `_site`, When `scripts/prerender.mjs` runs, Then every `/sotto/` route passes the route audit (one h1, hreflang reciprocal, `<html lang>` matches self hreflang, unique title/description) and the hydration check.
- AC-002: Given `/sotto/ja/faq/`, When fetched without JS, Then `<html lang="ja">`, canonical `https://alu-studio.com/sotto/ja/faq/`, Japanese FAQ text, and 13 hreflang links are present. (provenance: Google hreflang docs via seo-aeo.md §多語系 URL)
- AC-003: Given `/sotto/ar/`, When fetched, Then `<html lang="ar" dir="rtl">`.
- AC-004: Given a browser with `navigator.language = "ja"` and an old `i18nextLng` in localStorage, When it opens `/sotto/`, Then the page stays English.
- AC-005: Given `/sotto/de/faq/`, When the visitor picks 日本語, Then the browser lands on `/sotto/ja/faq/`.
- AC-006: Given a sitemap missing one Sotto URL or a duplicated title, When `npm run build` runs in `sotto/`, Then it exits non-zero naming the URL. (provenance: seo-aeo.md §Sitemap / §多語系 URL)

## US-002 12 種語言的內容完整、不退回英文 (P1)

### Rules

- REQ-008: Every language's UI strings SHALL have exactly the key set of en; the build SHALL fail on a missing or extra key.
- REQ-009: zh-Hans SHALL be generated from zh-Hant by `scripts/gen-zh-hans.mjs` (UI strings and guides), and `npm test` SHALL fail when the generated files are stale.

### Acceptance

- AC-007: Given each of the 12 locales, When the FAQ page renders, Then every FAQ question and answer (9, including a new reminders question) is in that language.
- AC-008: Given a locale missing `faq.items.is_sotto_free.answer`, When `npm run build` runs, Then it fails naming the locale and key.
- AC-009: Given a hand edit to `sotto/src/locales/zh-Hans/translation.json`, When `npm test` runs, Then it fails as stale.

## US-003 首頁 on-page 與產品 claim 正確 (P1)

### Rules

- REQ-010: Each language's home `<title>` SHALL follow「Sotto — 類別描述」and contain that language's SWEET term from `aso-keywords.md`; the description SHALL carry it too.
- REQ-011: The home `<h1>` SHALL contain both the brand and the language's SWEET term (「Sotto」never stands alone as the h1).
- REQ-012: The `MobileApplication` JSON-LD SHALL carry `sameAs` with the App Store and Google Play listing URLs.
- REQ-013: Site copy SHALL make only claims the product repos support: App Lock uses the phone's screen lock (Face ID / Touch ID / passcode, fingerprint / PIN / pattern); data stays on device except an optional, manual backup to the user's own cloud; 8 themes; measurement and size counts as in Summary.
- REQ-014: Pages SHALL pass Lighthouse `button-name`, `select-name`, `color-contrast`, and `landmark-one-main`.

### Acceptance

- AC-010: Given the prerendered `/sotto/`, `/sotto/zh-hant/`, `/sotto/ja/`, `/sotto/ko/`, `/sotto/de/`, When their `<title>` and `<h1>` are read, Then they contain `people notes`, `人脈管理`, `人脈メモ`, `인맥 관리`, `persönliches CRM` respectively, and the brand.
- AC-011: Given any Sotto page, When its JSON-LD is parsed, Then `sameAs` lists ≥ 2 URLs including `apps.apple.com/…/id6763928854` and `play.google.com/…id=com.alustudio.sotto`.
- AC-012: Given the en features and FAQ copy, When searched for "Face ID / Touch ID lock", "No uploads", "7 color themes", "27+", Then none remain.
- AC-013: Given production after deploy, When `npx lighthouse https://alu-studio.com/sotto/ --form-factor=mobile` runs 3×, Then median SEO = 100, Accessibility ≥ 90, LCP ≤ 2.5 s. (provenance: OH-88 Expected; performance.md §量測)

## US-004 第一批獲客文章 (P2)

### Rules

- REQ-015: The site SHALL publish 4 guides at `/sotto/guides/<slug>/` (slugs shared by all languages) plus a guides index at `/sotto/guides/`, in all 12 languages.
- REQ-016: Each guide SHALL open with a 2–3 sentence direct answer, use semantic H2 sections, end with a section that points back to the app, and use that language's search wording (not a literal translation) for its title.
- REQ-017: Each guide page SHALL ship a `BreadcrumbList` (Sotto → Guides → guide) in its static `<head>`, and its description SHALL be its own (derived from the opening answer).
- REQ-018: Every guide claim about Sotto SHALL match the product facts in Summary; ring-size conversion data SHALL come from the app's own lookup table.
- REQ-019: Every language's guide pack SHALL list the same slugs as en; related links SHALL resolve; the build SHALL fail otherwise.

### Acceptance

- AC-014: Given the build, When pages are listed, Then 12 × 5 guide routes exist (index + 4) and are in the sitemap.
- AC-015: Given the prerendered `/sotto/fr/guides/find-ring-size-secretly/`, When read without JS, Then it has one h1 in French, a BreadcrumbList whose items are French-labelled `fr` URLs, and the opening answer appears before the first h2.
- AC-016: Given the home page in any language, When rendered, Then it links to the guides index and each guide (internal links).

## NFR

- NFR-001: The `/sotto/` home in every language keeps the current LCP element budget: no new above-the-fold image or webfont; ja / ko / zh-Hans text does not download the TC CJK font. (provenance: performance.md §字型)
