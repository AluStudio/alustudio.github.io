# Sotto 官網 SEO — Plan

## Technical approach

- 照搬 DingPOS 多語系 URL：`sotto/src/i18n.js` 由 URL 前綴決定語言、`routerBasename`、`localizedUrl`；`copy-spa-pages.js` 改 `LOCALES` 驅動，產生每語系每頁的 self-canonical HTML 並驗證 key 集合、guide pack、title/description 唯一、sitemap 成員。
- `main.jsx` 改 `hydrateRoot`，`prerender.mjs` 的 `HYDRATED_PREFIXES` 與唯一性 audit 擴到 `/sotto/`。
- 新增 guides data pack（每語系一個 JS module）與 `GuidesPage` / `GuidePage`，結構比照 DingPOS support（pack + per-route + BreadcrumbList）。
- `scripts/gen-zh-hans.mjs` 從 DingPOS 專用改成 per-app 設定，sotto 的 UI 與 guides 一起由 zh-Hant 產生。
- On-page：各語系 title/H1/description 帶 SWEET 詞、JSON-LD `sameAs`、a11y 四項、產品 claim 修正。

## Decisions

### DEC-001 語系前綴與 hreflang 代碼
- Choice: hreflang / `lang` 用 `en`、`zh-Hant`、`zh-Hans`、`ja`、`ko`、`de`、`es`、`fr`、`it`、`pt-BR`、`ru`、`ar`；路徑前綴是它的小寫（en 無前綴＝`x-default`）。`og:locale`：`en_US`、`zh_TW`、`zh_CN`、`ja_JP`、`ko_KR`、`de_DE`、`es_ES`、`fr_FR`、`it_IT`、`pt_BR`、`ru_RU`、`ar_AR`。
- Alternatives: 區域碼（`ja-JP`）——網站不分區域，只分語言，加區域會把其他區域的同語使用者排除在 hreflang 之外。
- Rationale: 與現有 locale 資料夾與 DingPOS 一致；`<html lang>` 等於 hreflang 自指那筆，audit 才成立。
- Satisfies: REQ-001, REQ-003

### DEC-002 zh-Hans 改由 zh-Hant 產生
- Choice: `gen-zh-hans.mjs` 改成 `APPS` registry（dingpos、sotto 各自的路徑、glossary、overrides、row/column 條目、text fields）；`--check` 與 packet 對所有 app 執行，`npm run zh-hans` 一次產生全部。sotto 沒有 app 端的簡中 generator 可鏡像，`APP_GLOSSARY` 改放「與 sotto app 簡中畫面用詞一致」的條目（例如 欄位→字段），來源是 sotto-ios `zh-Hans.lproj`。
- Alternatives: 繼續手動維護 sotto 簡中——正是 FAQ 落後的原因（seo-aeo.md），而且這輪多出 4 篇長文，手動維護的量翻倍。另寫一支 sotto 專用 script——兩份轉換管線遲早分岔。
- Rationale: 唯一能保證簡中不落後的機制已經存在且有測試；一般化的成本是設定抽出，不是重寫。
- Satisfies: REQ-009

### DEC-003 FAQ 留單頁、文章另立 guides pack
- Choice: FAQ 維持 `translation.json` 的 `faq.items` 單頁（9 題 < 10 題門檻，seo-aeo.md §內容）。文章放 `sotto/src/data/guides/guides.<code>.js`，匯出 `articles`（`slug`、`title`、`summary`、`content` blocks、`related`）；blocks：`p`、`h2`、`list`、`steps`、`note`、`table`（`head`、`rows`）。
- Alternatives: 把文章塞進 translation.json——長文 JSON 難審、也無法表達 table。
- Rationale: 與 DingPOS FAQ pack 同形狀，gen-zh-hans 與驗證邏輯可共用。
- Satisfies: REQ-015, REQ-016, REQ-019

### DEC-004 slugs
- Choice: `remember-details-about-people`、`find-gift-sizes-without-asking`、`find-ring-size-secretly`、`gift-log`；index 是 `guides/`。
- Rationale: 英文 slug 各語系共用（DingPOS 前例）；slug 本身帶 en 的查詢詞。
- Satisfies: REQ-015

### DEC-005 首頁 H1 結構
- Choice: `<h1>` 包住品牌與 tagline 兩個 span，中間夾 `visually-hidden` 的「 — 」；視覺維持現在的大字 Sotto + 副標。tagline 文案改成帶 SWEET 詞。
- Alternatives: 把 tagline 改成 h1、品牌降成 `<p>`——視覺不變，但 h1 少了品牌，違反「品牌消歧」的目的。
- Rationale: h1 文字＝「Sotto — <SWEET 詞句>」，品牌不單獨出現，版面零改動。
- Satisfies: REQ-011

### DEC-006 各語系的 SWEET 詞
- Choice（title／H1 與首頁 description 都含主要詞，REQ-010；次要詞放 description 或文章）：en `people notes`（次 `remember details about people`、`gift log`）；zh-Hant `人脈管理`；zh-Hans 由產生得 `人脉管理`；ja `人脈メモ`（次 `大切な人`）；ko `인맥 관리`（次 `선물 기록`）；de `persönliches CRM`；fr `CRM personnel`（次 `carnet cadeaux`）；es `CRM personal`（次 `registro de regalos`）；it `CRM personale`（次 `registro regali`）；pt-BR `CRM pessoal`；ru `личный CRM`；ar `سجل الهدايا`。
- Rationale: 逐字取自 aso-keywords.md 的 SWEET 判定，網站與商店用同一組詞。
- Satisfies: REQ-010, REQ-016

### DEC-007 CJK 字型依語言
- Choice: CJK family 走 CSS 變數，預設 Noto Sans TC（en、zh-Hant）；`ja`、`ko`、`zh-Hans` 頁改用系統字型堆疊。
- Alternatives: 另外自託管 Noto Sans JP / KR / SC——每語系多一份 CSS 與數百 KB slice，換來的只是和系統字型相近的外觀。
- Rationale: 用 TC 字型顯示日文／簡中會出現錯的字形；系統字型零下載，LCP 不變或更好。
- Satisfies: NFR-001

### DEC-008 `setHtmlLang` 加 `dir`
- Choice: `setHtmlLang(html, lang, dir)`，`dir` 省略時不寫，DingPOS 輸出不變。
- Satisfies: REQ-003

### DEC-009 隱私權政策與條款不改文字
- Choice: 這輪只修行銷文案與 FAQ 的 claim；privacy / terms 內文（Biometric 段只寫 Face ID / Touch ID、terms 只提 iCloud 備份）列為 follow-up。
- Rationale: 法律文件的修改有生效日期與告知義務，超出票的範圍；現有敘述是不完整，不是對使用者不利的錯誤。
- Satisfies: REQ-013（範圍界定）

### DEC-010 翻譯產出
- Choice: en 與 zh-Hant 由主 session 撰寫；ar、de、es、fr、it、ja、ko、pt-BR、ru 各派一個 subagent，依 en 原文、zh-Hant 對照與 DEC-006 詞表在地化（不是逐字翻），寫回該語系的 `translation.json` 與 guide pack；結構正確性由 build 驗證把關。
- Rationale: 9 份獨立、可平行、需要新鮮 context 的工作。

### DEC-011 正式站量測時機
- Choice: Lighthouse 正式站量測（AC-013）在合併 main 部署後才做；合併前以本機 build 跑 Lighthouse 驗 a11y / SEO audit（這兩項不受 brotli 影響），LCP 標為未驗證。
- Rationale: 使用者未同意前不合併 main，也不另外上傳 Worker version 到正式帳號。

## Change Map

| File | Action | REQ |
|---|---|---|
| `sotto/src/i18n.js` | URL 驅動語言、`routerBasename`、`localizedUrl` | 001, 002 |
| `sotto/src/main.jsx` | `hydrateRoot`、basename | 007 |
| `sotto/vite.config.js` | `BUILD_YEAR` | 007 |
| `sotto/src/components/{Navbar,Footer}.jsx` | 切換器導頁、a11y、guides 連結、build 年份 | 004, 007, 014 |
| `sotto/src/components/{ScrollToTop,GuideBlocks}.jsx` | 新增 | 015 |
| `sotto/src/pages/{HomePage,GuidesPage,GuidePage}.jsx` | H1、main landmark、guides 區塊；新頁 | 011, 014, 015 |
| `sotto/src/data/guides/*` | 12 語系 guide packs | 015–019 |
| `sotto/src/locales/*/translation.json` | 補 faq、新 meta / guides keys、claim 修正 | 008, 010, 013 |
| `sotto/scripts/copy-spa-pages.js` | `LOCALES` 驅動＋驗證 | 003, 005, 006, 008, 017, 019 |
| `sotto/index.html` | `sameAs`、預設 meta | 010, 012 |
| `sotto/src/assets/scss/*` | 字型變數、對比、h1 結構 | 014, NFR-001 |
| `sotto/package.json` | 移除 `i18next-browser-languagedetector` | 002 |
| `scripts/rewrite-seo-tags.mjs` (+test) | `dir` | 003 |
| `scripts/prerender.mjs` (+test) | hydrate + 唯一性 prefixes 加 `/sotto/` | 001, 005, 007 |
| `scripts/gen-zh-hans.mjs` (+test) | per-app registry | 009 |
| `scripts/generate-sitemap.mjs` (+test) | sotto 每語系 lastmod 規則 | 006 |
| `sitemap.xml` | 108 個 sotto URL | 006 |
| `.pi/agents/zh-hans-reviewer.md` | 涵蓋 sotto packet | 009 |
| `docs/specs/{seo-aeo,performance}.md`, `AGENTS.md` | 規則更新 | — |

## Verification

- Unit：`npm test`（repo root）——rewrite-seo-tags、prerender audit、gen-zh-hans、generate-sitemap。
- Build：`cd sotto && npm run lint && npm run build`（copy-spa 驗證）；其他 4 個 app 也 build。
- Integration：assemble `_site`（同 deploy.yml）→ `node scripts/generate-sitemap.mjs --out _site/sitemap.xml` → `node scripts/prerender.mjs`（route audit＋hydration check）。
- 抽查：`curl` / grep prerendered HTML 的 lang、dir、hreflang、canonical、JSON-LD、h1。
- 本機 Lighthouse a11y / SEO（`vite preview`）；正式站 mobile Lighthouse 合併後量。
