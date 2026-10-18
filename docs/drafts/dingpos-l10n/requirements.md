# Requirements: DingPOS 官網 29 種翻譯語言

## Summary

DingPOS app 有 32 種介面語言（en、zh-Hant、zh-Hans 加 29 種由英文翻譯的語言），官網目前只有 en、zh-Hant、zh-Hans。這個 feature 讓官網的每一頁都有 app 的 29 種翻譯語言版本，各自可被搜尋引擎索引，並且英文改了之後各語言不會悄悄過期。

App 端已經為這 29 種語言做好的用詞決策（每種語言的 glossary、介面字串、owner 裁決）直接沿用，不在網站重做一次；網站只翻 app 沒有的內容（行銷文案、FAQ、SEO title 與 description）。

語言清單以 app repo `~/Developer/alustudio/DingPOS/l10n/languages.json` 裡 `kind: translated` 的條目為準：ja、th、ko、vi、id、es-419、fr、de、pt-BR、it、nl、ms、tr、sv、da、nb、fi、et、el、hu、bg、sq、ka、mn、uz、km、lo、hi、bn。

## US-001: 日文商家讀得到完整的日文官網 (P1)

作為用日文搜尋 POS app 的商家，我要在搜尋結果找到日文的 DingPOS 官網，從首頁、價格、support 到每一篇 FAQ 都是日文，以便判斷 DingPOS 適不適合我的店。

這個 story 先用一種語言（ja）把整條路走通：URL、hreflang、語言切換、字型、只載入當頁語言、和 app 的用詞一致。驗收方式是部署後在 `/dingpos/ja/` 底下逐頁讀到日文，並且 prerender audit 通過。

### REQ-001: 每種語言有自己的 URL

The system SHALL serve every route in every shipped language at its own URL `/dingpos/<prefix>/<route>/`, where `<prefix>` is the language code in lowercase and en stays unprefixed.

- AC-001: GIVEN ja 已上線 WHEN 爬蟲請求 `/dingpos/ja/support/how-to-set-up/` THEN 回應的 HTML 正文是日文、`<html lang="ja">`、canonical 指向這個 URL 本身
- AC-002: GIVEN ja 已上線 WHEN 爬蟲請求 `/dingpos/ja/support/how-to-set-up/` THEN 文章 slug 和 en 版相同（`how-to-set-up`）— 來源：`dingpos/scripts/copy-spa-pages.js` 現行規則，各語言 FAQ pack 的 slug 必須和 en 一致

### REQ-002: 內容完整，不退回英文

IF a shipped language lacks or adds a UI key relative to en, or its FAQ pack's slugs differ from en's, THEN the build SHALL fail.

- AC-003: GIVEN ja 的 UI 字串少了 en 有的 `pricing.doc_title` WHEN 執行 build THEN build 失敗並指出 ja 缺的 key — 來源：`sotto/scripts/copy-spa-pages.js` 現行行為、`docs/specs/seo-aeo.md` §多語系 URL
- AC-004: GIVEN ja 的 FAQ pack 少了 en 有的一篇文章 WHEN 執行 build THEN build 失敗並指出缺的 slug — 來源：`dingpos/scripts/copy-spa-pages.js` `validateFaqPacks`

### REQ-003: hreflang 與 locale meta 完整互指

The system SHALL give every page in every language a hreflang set listing every shipped language plus `x-default`, identical across all alternates, together with `og:locale` and `og:locale:alternate`.

- AC-005: GIVEN en、zh-Hant、zh-Hans、ja 已上線 WHEN 讀 `/dingpos/ja/pricing/` 的 `<head>` THEN hreflang 有 4 種語言加 `x-default`，且 `/dingpos/pricing/` 列出的是完全相同的一組 — 來源：`scripts/prerender.mjs` `auditRoutes` 現行規則
- AC-006: GIVEN es-419 已上線 WHEN 讀它的 hreflang THEN 值是 Google 接受的語言代碼格式 — 來源：Google hreflang 文件（語言用 ISO 639-1，地區只接受 ISO 3166-1 alpha-2）

### REQ-004: title 與 description 跨語言不重複

The system SHALL keep every page's title and description distinct from every other DingPOS page, across all languages.

- AC-007: GIVEN 兩個語言的某頁 title 相同 WHEN 執行 build THEN build 失敗 — 來源：`docs/specs/seo-aeo.md` §多語系 URL

### REQ-005: 語言切換器列出所有語言

WHEN a visitor picks a language in the switcher, the system SHALL navigate to the same page in that language; the switcher SHALL list every shipped language by its own name.

- AC-008: GIVEN 訪客在 `/dingpos/support/how-to-set-up/` WHEN 選「日本語」THEN 進到 `/dingpos/ja/support/how-to-set-up/`
- AC-009: GIVEN 32 種語言都已上線 WHEN 在手機寬度打開切換器 THEN 32 個語言名稱都看得到也選得到

### REQ-006: 每頁只載入自己的語言

The system SHALL load only the current page's language strings and FAQ content; adding a language SHALL NOT grow the JavaScript any single page downloads.

- AC-010: GIVEN 訪客打開 `/dingpos/ja/` WHEN 頁面載入完成 THEN 沒有下載其他語言的 UI 字串或 FAQ 內容 — 來源：`sotto/src/i18n.js` 現行行為

### REQ-007: 每種文字都用涵蓋它的字型顯示

The system SHALL render each language's text in a font that covers its script, without linking `fonts.googleapis.com`.

- AC-011: GIVEN th 已上線 WHEN 用預設設定的 iOS Safari 與 Android Chrome 打開 `/dingpos/th/` THEN 泰文正常顯示，沒有豆腐字 — 來源：`docs/specs/performance.md` 字型規則

### REQ-008: 官網用詞和 app 一致

WHERE site text names an app screen, control, or domain concept, the system SHALL use the wording the app shows in that language.

- AC-012: GIVEN app 的 ja 介面把 Settings 畫面叫「設定」 WHEN ja FAQ 文章寫到這個畫面 THEN 用的是「設定」 — 來源：AGENTS.md §Product Repos、zh-Hans 鏡像 app glossary 的既有做法（`docs/specs/seo-aeo.md` §簡中由繁中產生）
- AC-013: GIVEN app 的 ja glossary 把 Pre-order 定為某個詞 WHEN ja FAQ 寫到預購 THEN 用同一個詞，不用 glossary 列為 Avoid 的詞
- AC-021: GIVEN 網站 `pricing.compare.rows.preorder.name` 的 en「Pre-orders」和 app 某個 key 的 en 相同、指的也是同一個功能 WHEN 產生 ja THEN 直接用 app 那個 key 的 ja 值，不另外翻 — 來源：user 指定

### REQ-009: 只從英文翻譯

The system SHALL translate the 29 languages from en only; zh-Hant stays owner-written and zh-Hans stays generated from zh-Hant.

- AC-014: GIVEN en 與 zh-Hant 對某篇 FAQ 的說法不同 WHEN 翻譯 ja THEN ja 跟著 en，差異記成給 owner 的 en finding — 來源：app `docs/codemap/localization.md` §Translated languages

## US-002: 英文改了，翻譯不會悄悄過期 (P1)

作為維護官網的 owner，我改了一篇英文 FAQ 或一個英文 UI 字串之後，要清楚知道哪些語言的哪些條目需要重翻，並且在補完之前沒辦法部署，以便 29 種語言不會一直說著舊的功能。

### REQ-010: 英文改動標記翻譯為過期

WHEN the en value of a UI key or an FAQ article changes, the system SHALL mark every translation made from the previous en as stale, and the repo test command SHALL fail until each stale item is re-translated.

- AC-015: GIVEN ja 的某篇文章是從舊版 en 翻的 WHEN owner 修改那篇 en 文章 THEN `npm test` 失敗並列出 ja 的那篇文章

### REQ-011: 列出並補齊待翻條目

WHEN the owner asks for pending work, the system SHALL list, per language, every missing or stale item, and SHALL accept translated output back only when it was made from the current en.

- AC-017: GIVEN en 新增一篇文章 WHEN owner 執行同步指令 THEN 29 種語言各得到一份包含那篇文章的待翻清單
- AC-018: GIVEN 某份翻譯輸出是從已經被改過的 en 翻的 WHEN 套用輸出 THEN 該條被拒絕並說明原因 — 來源：app `make l10n-apply` 現行行為

## US-003: 其餘 28 種語言上線 (P2)

作為用其他 28 種語言搜尋的商家，我要讀到我的語言的完整官網，以便和 US-001 的日文商家得到一樣的資訊。

### REQ-012: 每種語言審過即上線

WHEN a language's translation passes review and the full gate, the system SHALL publish that language on its own, without waiting for the other languages.

- AC-019: GIVEN th 審查通過、ko 還在翻 WHEN th 合併 THEN 部署後 `/dingpos/th/` 上線，hreflang 包含 th 不包含 ko — 來源：user 指定「翻完就上線」

### REQ-013: 審查不收斂時交給 owner

IF a language still has open review findings after two fix rounds, THEN the system SHALL stop that language unpublished and hand the open findings to the owner.

- AC-020: GIVEN hi 兩輪修正後仍有 3 個 finding WHEN 第二輪重審結束 THEN hi 不上線，報告列出每個 finding 的現值、歷次寫法和 reviewer 建議 — 來源：app `.pi/prompts/l10n-worker.md` §5

## Non-Functional Requirements

| Category | Requirement | Strength |
|----------|-------------|----------|
| Performance | 單頁下載的 JS 不隨語言數量增加（REQ-006）；Lighthouse 量測照 `docs/specs/performance.md` §量測，ja 上線後與目前基準比較 | MUST |
| Build | 部署 workflow 在 32 種語言（約 2,048 個 DingPOS URL）下仍能在 CI 完成 prerender 與 hydration 檢查 | MUST |
| Hosting | 部署檔案數在 Cloudflare Workers static assets 的上限內 | MUST |
