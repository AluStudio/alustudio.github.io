# Plan: DingPOS FAQ 圖文版（報表類試點）

## Technical approach

- 新的 `shot` content block 只帶 `name`（結構欄位，翻譯時從 en 複製），檔案路徑在 render 時依頁面語言決定；尺寸登記在一份 data module，build 對每種已上線語言逐一檢查檔案。
- 截圖沿用首頁的模擬器流程：新 capture script 依語言切換 app 語言與 fixture，用 accessibility id 導航、印出驗證行；新 build script 裁切、縮放成 WebP。
- 文案沿用 guide 的產線：主 session 寫 brief → `faq-writer`（Gemini 4 Neon）→ `guide-cleaner` → 主 session 對 app 查核 → `scripts/faq-md.mjs` 寫進 pack。
- en / zh-Hant 定稿後照既有流程：`npm run zh-hans` + `zh-hans-reviewer`，29 種翻譯語言走 `npm run l10n -- dingpos`。
- 全部在 `faq-reports` branch 完成，32 種語言齊全、owner 讀過才合併到 `main`（合併即部署）。

## Decisions

### DEC-001 `shot` block 只帶 name
- Choice: `{ type: "shot", name, alt, caption? }`。`name` 對應 `dingpos/src/data/faq/shots.js` 的 `FAQ_SHOT_SIZES[name] = [width, height]`，同一個 shot 在每種語言的裁切框相同，所以尺寸只有一組。檔案是 `dingpos/public/faq/<code>/<name>.webp`，寬度超過 1080 時另有 `<name>-1080w.webp`。
- Alternatives: 沿用 guide 的 `image` block 寫死 `src`（`src` 是結構欄位，從 en 複製，30 種語言都會拿到英文截圖）；在 `src` 放 `{code}` placeholder（l10n 的 placeholder 檢查只看 `{{…}}`，而且 zh-Hans 產生器也得懂它）。
- Rationale: 結構欄位一份就夠，l10n `apply`、`gen-zh-hans` 都不用改；`alt`、`caption` 已在 `PACK_TEXT_FIELDS.dingpos` 裡會被翻譯。
- Satisfies: REQ-003, REQ-004

### DEC-002 Render 與圖檔規格沿用 guide 圖片
- Choice: 把 `GuideBlocks.jsx` 的 `GuideImage` 抽成共用的 `dingpos/src/components/Figure.jsx`（同樣的 `.figure` class、`sizes`、`srcSet`、`width`/`height`、`loading="lazy"`），`FaqBlocks.jsx` 的 `shot` 和 guide 的 `image` 都用它。FAQ 頁的語言碼取自 `src/i18n.js` 已解析的語言（和載入 pack 用的同一個值）。圖是畫面上相關區塊的裁切，不是整個 iPad 畫面：顯示寬度最多 480px，桌機檔寬 min(原圖, 1440)，超過 1080 另附 1080w。build 檢查重用 `scripts/guide-images.mjs` 的 `webpSize` 與 `PHONE_IMAGE_WIDTH`。
- Alternatives: FAQ 自己的 `.media` 樣式（沒有 `width`/`height`，會造成 CLS，也沒有手機檔）。
- Rationale: `performance.md` §圖片 的規則已經在 guide 落實並有 build 檢查，FAQ 直接沿用。
- Satisfies: REQ-003, REQ-004

### DEC-003 FAQ 加 `h2` block
- Choice: `{ type: "h2", text }`，`FaqBlocks` render 成 `<h2>`（文章頁的 `<h1>` 是 question）；`scripts/meta-description.mjs` 的 `contentUnits` 跳過 `h2`，description 照舊取答案開頭。
- Satisfies: REQ-006

### DEC-004 Shot 清單與 fixture 對應
- Choice: 以下 11 張是 T011 依十份 brief 定案的清單（`grep -o 'shot:[a-z-]*' .logs/faq/dingpos/briefs/*.md | sort -u`），之後增減記成新的 DEC。zh-Hant 與 zh-Hans 用台灣店的 fixture，其他語言用英國店；申報對照只有 AU/NZ/SG/GB 的店有，所以每種語言都用 `taxReportGB`。每次 launch 都帶 `-uitest-reset -DisableDevTweakBall -DingSubscriptionTier pro`。

  | name | 畫面 | zh-Hant / zh-Hans | 其他語言 |
  |---|---|---|---|
  | `dashboard-tiles` | 報表頁上方兩列 KPI 磚（營收、實收、稅額與「稅務報表 ›」） | `taxReport` | `taxReportGB` |
  | `report-periods` | 期間選單展開（今日…自選區間） | `taxReport` | `taxReportGB` |
  | `advanced-reports` | 銷售比較選「上個月」後的磚與趨勢圖 | `screenshots-zh` | `screenshots-en` |
  | `profit-not-tracked` | 「缺成本的商品」清單 | `dashboardRanking` | `dashboardRanking` |
  | `profit-loss-month` | 損益已結束月份的月份頁 | `profitLoss` | `profitLoss` |
  | `expense-form` | 新增固定支出表單 | `profitLoss` | `profitLoss` |
  | `tax-report` | 稅務報表的「依稅率的銷售與稅額」與「合計」 | `taxReport` | `taxReportGB` |
  | `return-boxes` | 英國店的「申報對照」卡（VAT Return） | `taxReportGB` | `taxReportGB` |
  | `tax-export` | 匯出格式選單 | `taxReport` | `taxReportGB` |
  | `input-tax-toggle` | 商店資訊稅務卡片，「扣抵進項稅」打開與說明 | `inputTax` | `taxReportGB` |
  | `input-tax-po` | 進貨單的進項稅區塊與合計 | `inputTax` | `taxReportGB` |

- Rationale: `taxReport` / `inputTax` 的稅名是「營業稅」，放進英文或日文截圖會變成中文店家資料；英國店的 VAT 在非中文語言比較自然，而且它的 fixture 已經含進貨單與進項稅。
- Satisfies: REQ-005

### DEC-005 Capture 與 build script
- Choice: `dingpos/scripts/capture-faq-shots.sh <out-root> [code ...]` 照 `capture-screenshots.sh` 的寫法（同樣的模擬器、launch 參數、`sim-use` 加 `axe`、用 accessibility id 導航、每張印驗證行、`!` 表示要人看），每種語言寫出 `<out-root>/<code>/<name>.png`（整個畫面）。`dingpos/scripts/build-faq-shots.sh <out-root>` 用寫在 script 裡、每張 shot 一組的固定裁切框裁切，再照 `build-guide-shots.sh` 的規則編碼到 `public/faq/<code>/`。兩支都是本機工具，輸出 commit，CI 不跑。缺 accessibility id 的畫面，照現有 script 的作法，從 AX tree 的 frame 算出位置來點，不改 DingPOS repo；真的到不了的畫面記成 BLOCKED，交給 owner。
- Satisfies: REQ-005, AC-005

### DEC-006 `faq-writer` agent 與合約
- Choice: `.pi/agents/faq-writer.md`（`model: google/gemini-4-neon`、`thinking: high`、`tools: read, write`、不繼承 project/global context），合約是 `.pi/faq/dingpos.md`（讀者、文章規則、受限 Markdown 輸出格式、shot 語法、可用 block）。清稿沿用 `guide-cleaner`：把它的 description 與格式說明改成也接受 `.logs/faq/` 底下的 FAQ 草稿（格式指向 `.pi/faq/dingpos.md` §Output format）。
- Alternatives: 沿用 `guide-writer`（owner 已否決：guide 的寫作規則和 FAQ 操作說明不同）。
- Satisfies: REQ-007, REQ-008

### DEC-007 Brief、草稿與轉檔
- Choice: brief 由主 session 寫在 `.logs/faq/dingpos/briefs/<slug>.md`，內容包括問題方向、事實與出處（DingPOS `docs/specs/...` §、CHANGELOG）、逐字的畫面名稱（en 與 zh-Hant，取自 app 的 `Localizable.strings`）、可用的 shot（name 與畫面內容）、related slug、長度。草稿放 `.logs/faq/dingpos/<slug>.<code>.draft.md`，複製成 `.clean.md` 交給 `guide-cleaner`。`scripts/faq-md.mjs <clean.md> <pack.js>` 把它轉成 FAQ article：slug 已存在就原地取代，不存在就插在同分類最後一篇後面。Frontmatter：`slug`、`category`、`question`、`keywords`（逗號分隔）、`since`（選填）、`related`。Block：段落、`## `、`- `、`1. `、`> `，以及 `![alt](shot:<name>)`（可選 `"caption"`）。block parser 從 `scripts/guide-md.mjs` export 出來共用，不另寫一份。
- Satisfies: REQ-008

### DEC-008 v3.6 查核範圍
- Choice: 把 `VERIFIED_APP_VERSION` 改成 3.6 之前，逐條讀 CHANGELOG §[3.6] 對照全部 FAQ。報表類以外需要改的文章由主 session 直接改文字（不經 `faq-writer`、不加圖），已設的 `since` 不動。
- Satisfies: REQ-002

### DEC-009 Branch 與合併
- Choice: 所有 commit 在 `faq-reports` branch（從 `main` 開）。en/zh-Hant 改了但翻譯還沒補時 `npm test` 會失敗，所以中途不合併；machine 任務做完、owner 驗收（H001）後才用 `mpd_run` 合併。
- Satisfies: REQ-011

## Change Map

| File | Action | REQ |
|---|---|---|
| `dingpos/src/data/faq/shots.js` | new — `FAQ_SHOT_SIZES`, path helpers | REQ-003 |
| `dingpos/src/components/Figure.jsx` | new — extracted from `GuideImage` | REQ-003 |
| `dingpos/src/components/GuideBlocks.jsx` | use `Figure` | REQ-003 |
| `dingpos/src/components/FaqBlocks.jsx` | `shot`, `h2` blocks | REQ-003, REQ-006 |
| `dingpos/src/pages/SupportArticlePage.jsx` | pass language code to `FaqBlocks` if needed | REQ-003 |
| `scripts/meta-description.mjs` (+ test) | `contentUnits` skips `h2` | REQ-006 |
| `dingpos/scripts/copy-spa-pages.js` | validate `shot` blocks per shipped language | REQ-004 |
| `dingpos/scripts/capture-faq-shots.sh`, `build-faq-shots.sh` | new | REQ-005 |
| `dingpos/public/faq/<code>/*.webp` | new (generated, committed) | REQ-005 |
| `scripts/guide-md.mjs`, `scripts/faq-md.mjs` (+ test) | export parser; new converter | REQ-008 |
| `.pi/agents/faq-writer.md`, `.pi/faq/dingpos.md` | new | REQ-007 |
| `.pi/agents/guide-cleaner.md` | accept FAQ drafts | REQ-008 |
| `dingpos/src/data/faq/articles.{en,zh-Hant}.js` | 4 new + 6 rewritten + v3.6 fixes | REQ-001, REQ-002, REQ-009 |
| `dingpos/src/data/faq/version.js` | `VERIFIED_APP_VERSION = "3.6"` | REQ-002 |
| `dingpos/src/data/faq/articles.<code>.js`, `dingpos/l10n/manifest/*` | regenerated | REQ-010 |
| `sitemap.xml` | `--write-sitemap` | REQ-011 |
| `docs/specs/seo-aeo.md`, `docs/specs/performance.md`, `AGENTS.md` | FAQ screenshot + writing pipeline rules | REQ-012 |

## Verification

- Unit: `npm test`（root；含 `faq-md` / `meta-description` 測試、zh-Hans 過期檢查、`l10n -- check`）。
- Build: `cd dingpos && npm run build`（`copy-spa-pages.js` 的 shot、slug、description 檢查）。
- Prerender: `.github/workflows/` 部署流程裡的 assemble + `scripts/prerender.mjs` 步驟，在本機照跑。
- Agent-driven: `vite preview` 加 agent-browser 打開 en、zh-Hant、ja 的文章頁，檢查 `<img>` 的 src/srcset/width/alt；截圖存證據。

### DEC-010 申報對照的 slug 與 shot 名稱
- Choice: 申報對照的文章 slug 用 `tax-return-boxes`，shot 用 `return-boxes`，不用 T009 暫定的 `filing-boxes`。App 的卡片名稱是「申報對照」／"Return boxes"，en 讀者搜的是 "VAT return boxes"、"BAS boxes"；`tax-` 前綴讓它和 `tax-report`、`export-tax-report` 在 URL 上排在一起。
- Alternatives: `filing-boxes`（"filing" 不是 App 用的字，也不是四國申報表的說法）。
- Satisfies: REQ-001, REQ-005

### DEC-011 截圖實作與 DEC-004 / DEC-005 的差異
- Choice（T012–T014 實際做法，取代 DEC-004 / DEC-005 的對應部分）：
  - App 從 DingPOS 的 `v3.6` tag clone 到 `/tmp/dingpos-v36` build，不在工作中的 repo build：那邊的 branch 帶著未發布的改動，截進去就會畫出 App Store 上還沒有的畫面。
  - 報表頁的期間用「本月」：fixture 的資料落在建資料當天前後幾天，「今日」的磚太空。
  - 裁切框不寫死在 build script，而是 capture script 從 AX tree 的 frame 算出、每張寫一個 `<name>.crop`（pt），build script 照它裁。文字較長的語言會換行，框跟著長，所以尺寸是每種語言各一份，寫在產生的 `dingpos/src/data/faq/shot-sizes.js`，不是單一的 `FAQ_SHOT_SIZES`。
  - 顯示寬度是圖在 iPad 上的 pt 寬（檔寬的一半），不是一律 480px：字和 App 裡一樣大；版面欄寬仍是上限。
  - `advanced-reports`：本週比上週（`screenshots-*` 只有近兩週的資料，比上個月會是空的）；只截比較說明與第一列磚，不含圖表。
  - `report-periods`：期間列是一排分段按鈕，不是選單；截「自選區間」選中、開始／結束日彈窗打開的樣子。
  - `profit-not-tracked`：用各語言的稅務 fixture（`taxReport` / `taxReportGB`），不是 `dashboardRanking`：它也有六個缺成本的商品，又省一次重開。
  - `profit-loss-month`：本月的月份頁（「本月進行中」），不是已結束的月份：`profitLoss` 只有本月有銷售，過去月份的營收是 0。
  - `expense-form`：編輯 Rent 的固定支出表單，不是空白的新增表單：有金額與起訖月份才看得出欄位。
- 已知限制：`profitLoss` 是台灣店，`profit-loss-month` 與 `expense-form` 在每種語言都是 NT$；fixture 的商品名稱在中文截圖裡也是英文。都是 fixture 的資料，不能在這個 repo 改，交給 owner 在 H001 判斷。
- Satisfies: REQ-005, AC-005

### DEC-012 Phase 4 的 build 驗收
- Choice: Phase 4（T018–T021）的 `npm run build` 只接受一種失敗：`slug "<new>" missing from <code> pack`，`<code>` 是翻譯語言。build 要求每個 pack 的 slug 一致，四篇新文章要到 Phase 5 的 `npm run l10n -- dingpos apply`（T023–T025）和 `npm run zh-hans`（T022）才會進到其他語言，所以 tasks.md 寫的「Phase 4 build 就會過」做不到。T018–T020 用 `npm run build 2>&1 | grep ✗ | grep -v "missing from"` 為空來驗；T021 的頁面檢查用 `vite dev`（SPA 路由，不需要 copy-spa-pages 寫出每個路由），完整的 build 與 prerender 留給 T029。
- Alternatives: 先在翻譯 pack 放 en 內容佔位（違反「翻譯檔只由 `apply` 產生」）；把四篇新文章延到 Phase 5 才寫入 pack（en / zh-Hant 的事實查核就無法在網頁上看）。
- Satisfies: REQ-008, REQ-011

### DEC-013 Phase 5 進行中的 gate 例外
- Choice: DEC-012 的例外延伸到 Phase 5 完成前：build 另外允許 `shot-sizes.js does not record for <code>`（該語言的截圖等 T015 build 完才有），`npm test` 允許 #56「every shipped translated language … is current with en」（en 已改、翻譯語言要到 T023–T025 的 `l10n sync/apply` 才追上）。T022 只看 zh-Hans 的測試（過期檢查）通過。T029 的 full gate 不留任何例外。
- Alternatives: 先做完 T015 與 l10n 才跑 zh-Hans（截圖要再跑約 3 小時，zh-Hans 審查卻與截圖無關）。
- Satisfies: REQ-010
