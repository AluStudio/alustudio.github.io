---
summary: SEO + AEO optimization plan — close the JS rendering gap (prerender), verify Cloudflare AI crawler access, add structured data, restructure content for AI citation
read_when:
  - Executing or reviewing any SEO/AEO work on alu-studio.com
  - Changing build pipeline (prerender step), robots.txt, sitemap, or meta/JSON-LD tags
---

# SEO + AEO Optimization Plan

**Status**: In-flight draft（critic 審查後 rev 2）
**Scope**: alu-studio.com 全站（home + pikgeon + babbby + sotto + dingpos）

**搭配文件**：[seo-aeo-copy-review.md](./seo-aeo-copy-review.md)（待審文案彙整）、
[seo-aeo-baseline.md](./seo-aeo-baseline.md)（T0 基線記錄表，**merge 前**必填）。

## 1. 背景與目標

四個 app support 網站 + 一個 studio profile 站，皆為 Vite + React CSR SPA。目標：

1. **SEO**：品牌查詢（"Pikgeon app"、"postcard tracking app" 等）能穩定排上、support 頁面可被搜到。
2. **AEO**（Answer Engine Optimization）：使用者問 ChatGPT / Perplexity / Google AI Overviews「Pikgeon 是什麼」「有沒有明信片追蹤 app」時，內容能被引用。

## 2. 研究結論（2026-07 調查）

### 2a. AI crawlers 不執行 JavaScript — 本站對 AI 引擎不可見（關鍵發現）

Vercel + MERJ 以 5 億+ 次真實 crawler 請求分析（[The rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler)）：**所有主要 AI crawlers 都不 render JS** — OpenAI（GPTBot、OAI-SearchBot、ChatGPT-User）、Anthropic（ClaudeBot）、Perplexity（PerplexityBot）、Meta、ByteDance、CCBot。GPTBot 會抓 JS 檔（11.5% 請求）但從不執行。只有 Googlebot/Gemini 與 AppleBot 有完整 rendering。多篇 2025-2026 追蹤文章一致（[SearchOptimo](https://searchoptimo.com/blog/do-ai-crawlers-render-javascript)、[Lantern](https://www.asklantern.com/blogs/ai-crawlers-do-not-render-javascript) 等）。

**實測本站**：`https://alu-studio.com/pikgeon/` 回應總共 1,010 bytes，body 可見文字為空、無 JSON-LD、無 og:image。AI crawler 只看得到 `<title>` 和 meta description，其餘全部不可見。

### 2b. ChatGPT 的內容取得路徑都不執行 JS

ChatGPT search 有多條獨立取得路徑：Bing index、OpenAI 自有搜尋爬蟲 OAI-SearchBot（官方明言直接供 ChatGPT search results 使用）、即時抓頁的 ChatGPT-User — 三條路徑都不執行 JS，Bingbot 本身 JS rendering 能力也有限。→ Bing Webmaster Tools 與 OAI-SearchBot 可及性是兩條獨立的分發渠道，initial HTML 完整性同時決定三條路徑的成敗。

### 2c. Cloudflare 預設封鎖 AI crawlers（本站託管於 Cloudflare）

Cloudflare 對新 zone 預設「Block AI bots on all pages」；另有 AI Crawl Control 可逐一 allow/block，與 managed robots.txt（會在 robots.txt 前置 Content Signals：`search=yes, ai-train=no`）（[官方文件](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/)）。**實測**：線上 robots.txt 未被加料（managed robots.txt 未開），偽裝 GPTBot/ClaudeBot UA 得到 HTTP 200 — 但 Cloudflare 是以 IP/簽章驗證真 bot，curl 偽裝測不出真實封鎖狀態，必須進 dashboard 確認。

### 2d. llms.txt 無實證效果

SE Ranking 30 萬網域研究：無任何統計相關性（XGBoost 模型移除 llms.txt 變數後預測準確度反而提升）；Google 明言不使用；無主要 LLM 廠商正式採用（[SE Ranking](https://seranking.com/blog/llms-txt/)、[OtterlyAI 實驗](https://otterly.ai/blog/the-llms-txt-experiment/)）。→ 既有檔案留著（零成本），不再加碼投資。

### 2e. FAQ rich results 已死，FAQ 內容仍活著

Google 於 2026-05-07 全面移除 FAQ rich results（2023-08 起已限縮至政府/健康網站）（[Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)）。FAQPage schema 仍是合法 schema.org 型別、無懲罰但無 SERP 紅利。**FAQ 內容本身**（問句標題 + 直接回答）仍是 AEO 引用的高價值格式。

### 2f. 其他已確認事實

- Structured data：Google 可以處理 render 後 DOM 的 JSON-LD，但 AI crawlers 不執行 JS — **本站策略選擇 JSON-LD 進 initial HTML**，同時覆蓋兩者（這是本站取捨，非通則）。
- `SoftwareApplication`/`MobileApplication` schema 要出 Google rich result 需 `aggregateRating`（或 review）+ `offers`；沒有評分資料時 markup 仍是有效的 entity 訊號，但不具 rich-result 資格。
- sitemap `lastmod` 要準確（內容真的變才更新）；Google 與 Bing 都明確重視，Bing 指出 AI 搜尋依內容變化近即時調整（[Bing 官方部落格](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)）。`changefreq`/`priority` 基本被忽略。
- AEO 內容模式：問句式標題（"What is X?" 優於 "X Overview"）、答案先行（標題下 2-3 句直接回答）、可獨立引用的具體句子（含數據/事實優於模糊形容）。
- robots.txt AI 政策：搜尋/引用類 bot（OAI-SearchBot、ChatGPT-User、PerplexityBot、Claude-SearchBot）與訓練類 bot（GPTBot、ClaudeBot、Google-Extended、CCBot）應分開決策。本站 robots.txt 已是 `User-agent: * Allow: /`，顯式列 bot 是政策文件化而非行為修復；真正改變行為的是訓練類 Disallow 與 Cloudflare edge 設定。
- IndexNow 對小型靜態站效益有限（官方生態文件：傳統 crawling 已足夠），可後補。

## 3. 現況缺口

| # | 缺口 | 影響 |
|---|------|------|
| 1 | CSR 空殼 HTML（body 無內容） | AI 引擎完全看不到內容；Bing 部分看不到 |
| 2 | Cloudflare AI crawler 設定未確認 | 可能在 edge 層直接擋掉真 AI bot，robots.txt 再開放也沒用 |
| 3 | 所有子路由共用 app root 的 title/description（rewrite-seo-tags.mjs 只改 canonical/og:url） | privacy/terms/faq 無法以自身主題被搜到 |
| 4 | 語言由 client-side 偵測（i18next localStorage/navigator），每路由單一 URL；babbby `<html lang="zh-Hant">` 但 meta 全英文 | prerender 會固化隨機語言；語言訊號自相矛盾 |
| 5 | 無 JSON-LD（Organization / MobileApplication / WebSite） | 搜尋引擎與 AI 缺乏 entity 資訊 |
| 6 | 無 og:image / twitter:card / og:type / og:site_name | 社群與 AI 答案卡片無視覺呈現 |
| 7 | sitemap 無 `lastmod` | 重爬優先序差，AI 搜尋 freshness 訊號缺失 |
| 8 | FAQ 答案只在展開時 render（`isOpen &&`）；babbby/sotto/dingpos 無 FAQ 頁 | prerender 也抓不到答案；缺可引用問答內容 |
| 9 | babbby 頁面 App Store 連結是死的（`id6744145981` 回 404；正確為 `id6760455078`，經 iTunes lookup 驗證） | 使用者點擊直接失敗；entity 訊號錯誤 |
| 10 | Bing Webmaster Tools 未確認提交；無任何成效基線 | ChatGPT 引用鏈路上游缺口；改動後無法量化 lift |

## 4. 實作計劃

### 驗收框架：Release gate vs KPI

每任務的「驗收」都是**部署時可確定驗證的 release gate**（HTTP 回應、HTML 內容斷言、validator、dashboard 設定截圖）。crawler 是否來訪、是否被引用、索引率——這些是**不可控的長期結果**，一律歸入 T11 的 30/60/90 天 KPI 監測，不作為任務完成門檻。

### P0 — 基線與可見性

**T0. 成效基線（改動前必做，否則永久失去對照組）**
- Bing Webmaster Tools 驗證網域 + 提交 sitemap（可從 GSC 匯入）。
- 記錄基線快照（存 `docs/drafts/seo-aeo-baseline.md` 或表格）：GSC 曝光/點擊 by page、Bing WMT 索引數、Cloudflare AI Crawl Control 各 crawler 請求數、固定查詢集（"Pikgeon"、"Pikgeon app"、"postcard tracking app"、各 app 品牌詞）在 ChatGPT/Perplexity/Google AI 的回答記錄（含日期）。
- Gate：基線文件存在、查詢集固定、日期標記。

**T1. 確認 Cloudflare AI 存取設定**（人工，10 分鐘）
- Dashboard → alu-studio.com zone → AI Crawl Control → Crawlers：AI search/assistant 類（OAI-SearchBot、ChatGPT-User、PerplexityBot、Claude 系列）設為 Allow；訓練類依 T2 決策。
- 確認 Bot Fight Mode / Block AI Bots 未誤傷；managed robots.txt 維持關閉（自管 robots.txt）。
- Gate：dashboard 設定截圖記錄於本 draft 或 baseline 文件。（crawler 實際來訪量 → T11 KPI。）

**T2. robots.txt AI 政策文件化 + 訓練類 bot 決策**（15 分鐘）
- 決策（已定，見 §5）：訓練類 bot 全部 allow。
- 依決策寫入 robots.txt；搜尋類顯式 Allow 為政策文件化（現行 `*` Allow 已覆蓋，無行為變化）。
- Gate：`curl https://alu-studio.com/robots.txt` 與決策一致。

**T3. FAQ 答案常駐 DOM**（pikgeon，prerender 前置條件）
- `FaqPage.jsx` 改為答案永遠在 DOM（`<details>`/CSS collapse 皆可，保留摺疊 UX），移除 `isOpen &&` 條件 render。
- Gate：關閉狀態下 `document.querySelectorAll('.faq-card__answer')` 數量 = 題數（headless 驗證）。

**T4. Post-build prerender — 每路由輸出完整 HTML**（核心工程項）
- 新增共用 `scripts/prerender.mjs`：以 HTTP serve 組好的 `_site/`（絕不用 `file://`，保持 `/app/` base path 正確）→ puppeteer 逐 sitemap 路由 render → snapshot 寫回各路由 `index.html`。銜接點：現有 copy-spa-pages 之後、deploy 之前。
- **CI/工具鏈配套（明確納入範圍）**：
  - 根目錄 `package.json` 加 `puppeteer` devDependency + lockfile；deploy.yml 加 root `npm ci`。
  - `_site/` 組裝從 workflow inline shell 抽成共用腳本（`scripts/assemble-site.mjs` 或 make target），本機與 CI 共用；prerender 接在 assemble 後。
  - Makefile 加對應 target 供本機驗證。
- **語言固定**：每 app 的 canonical 語言已定（見 §5）：babbby zh-Hant（含 meta/title 同步），其餘 en。Prerender 以乾淨 profile（無 localStorage/cookie）+ 明確 Chrome locale + `Accept-Language` 執行；斷言 rendered DOM 語言與該 app `<html lang>` 一致。
- 訪客體驗：使用者曾手選其他語言時，首屏為 canonical 語言、hydration 後切換 — 可接受；不做 per-locale URL（見 §5 未來項）。
- React `createRoot` 對 prerendered DOM 整棵重繪（一次閃替）可接受；後續可改 `hydrateRoot`（獨立任務，非阻塞）。
- Pilot：pikgeon 先行 → 驗證後套用其餘四個 app。
- Gate（逐 sitemap URL 斷言，寫成可重跑腳本）：
  - HTTP 200 且 body 含該路由**完整可見文字**（FAQ 頁逐題比對答案文字，非只數 heading）。
  - DOM lang 一致性斷言通過。
  - 無 browser console error / page error。
  - `npm test`（worker regression）綠燈。

### P1 — Metadata 與 structured data

**T5. 每路由獨立 metadata manifest**
- 建立 route metadata 清單（每 app 一份，含 title、description、og:title、og:description）；擴充 `rewrite-seo-tags.mjs` 於 copy/prerender 時逐路由套用（canonical/og:url 機制已存在，補齊其餘欄位）。
- 例：`/pikgeon/privacy/` → title "Privacy Policy — Pikgeon"、description 描述隱私重點，而非 app 行銷句。
- Gate：逐 sitemap URL 斷言 title 唯一、description 非 root 複本。

**T6. JSON-LD（以 app manifest 為單一事實來源）**
- 建立 `scripts/app-manifest.mjs`（或 JSON）：每 app 的正式名稱、平台（pikgeon/sotto 有 iOS+Android；babbby iOS；dingpos 未上架不寫商店 URL）、**經 iTunes/Play lookup 驗證的商店 URL**、類別、價格。修正 babbby 死連結（`id6744145981` → `id6760455078`，含 babbby 頁面本身的按鈕連結）。
- 注入規則：`MobileApplication` 只出現在各 app landing route；privacy/terms/faq 的複本**剝除** app schema（在 copy/prerender 階段處理）。home 注入 `Organization` + `WebSite`。
- `aggregateRating` 僅在商店有真實評分時加入並定期同步；否則省略。
- Gate 拆分：全部頁面通過 [Schema Markup Validator](https://validator.schema.org/)（無錯誤、內容與頁面一致）；**僅**含真實 rating 的 app 要求 [Rich Results Test](https://search.google.com/test/rich-results) eligible。禁止捏造評分。

**T7. og:image / twitter:card / og:type / og:site_name**（每 app）
- 每 app 產 1200x630 og:image（app icon + 標語）；補 `twitter:card=summary_large_image`、`og:type=website`、`og:site_name=Alu Studio`。
- Gate：opengraph.xyz 或 Slack/Discord 貼連結預覽正確。

**T8. sitemap lastmod 自動化**（CI，路由級精準 — critic round 2 後改版）
- 方法：**輸出比對，stateless** — prerender 完成後，逐 sitemap 路由把新產出的 `_site/<route>/index.html` 與線上版（上一次 deploy 的事實狀態）比對：
  - 內容有差 → 該路由 `lastmod` = 今天。
  - 內容相同 → 沿用線上 sitemap.xml 中該路由的既有 `lastmod`；線上也沒有 → **省略**該路由的 lastmod（無訊號優於錯訊號）。
  - 比對前正規化：去除 Vite content-hash 檔名段（`/assets/*-<hash>.<ext>`），避免純程式碼 refactor（無可見內容變化）灌水 lastmod；空白差異忽略。
  - 線上抓取失敗（網路/新路由）→ 新路由記今天，其餘 fail-safe 沿用既有值。
- 不用 git 日期（免 `fetch-depth: 0`、免 per-URL dependency graph）：比對的是「實際 served 內容是否改變」，比任何 source-file 代理訊號都準。
- Gate：只改 A app 某頁 → 僅該路由 lastmod 更新，sibling 路由與 B app 全不動；重跑 build（無內容變更）→ 全部 lastmod 不變；docs/ commit → 不觸發任何變更。

### P2 — AEO 內容重構

**T9. FAQ 補齊 + 答案導向重寫**
- babbby / sotto / dingpos 新增 FAQ；**每個新路由必須同步四層**（缺一層即 404 或漏索引，worker 無 SPA fallback）：
  1. React router route（App.jsx）
  2. copy-spa-pages.js 路由清單
  3. sitemap 產生清單
  4. 站內導覽連結
- CI gate：sitemap 每 URL 在 `_site/` 有對應 `index.html` 且線上回 200（納入 T4 斷言腳本）。
- 內容格式：問句式 H2（使用者真實查詢語言）+ 2-3 句直接回答 + 細節；語意化 HTML；答案常駐 DOM（同 T3 結構）。
- 各 app 首頁文案改為可獨立引用的具體句子（例："Pikgeon tracks postcards with on-device OCR — no account required"）。
- Gate：prerendered HTML 含每題完整問答文字（逐題斷言）。

**T10. home entity 強化**
- 明確陳述 studio 名稱、定位、四 app 各一句事實描述 + 連結（與 llms.txt、JSON-LD 一致）。
- Gate：home prerendered HTML 含上述內容。

### P3 — 持續監測

**T11. 30/60/90 天 KPI 監測**（對照 T0 基線）
- GSC + Bing WMT 曝光/點擊/索引數；Cloudflare AI Crawl Control 各 crawler 請求趨勢；固定查詢集在 ChatGPT/Perplexity/Google AI 的引用變化。
- 每月記錄一次；90 天後總結 lift 並決定下一輪（如 blog/content marketing、hreflang 多語 URL）。

**T12.（可選）IndexNow**：deploy workflow 加 ping。僅在 Bing 收錄遲緩時做。

## 5. Decisions（已決議，2026-07-27 Ohlulu）

| # | 問題 | 決議 |
|---|------|------|
| 1 | 每 app 的 canonical 索引語言 | **babbby 用 zh-Hant（meta/title/description 同步改 zh-Hant）；home/pikgeon/sotto/dingpos 用 en**。多語 hreflang URL 留待 90 天 KPI 後評估 |
| 2 | 訓練類 bot（GPTBot、ClaudeBot、CCBot、Google-Extended、Bytespider） | **全部 allow**（曝光極大化）；T2 依此寫入 robots.txt |

## 6. 風險

| 風險 | 緩解 |
|------|------|
| Prerender 改變 build 產物 | pikgeon pilot；`npm test`；T4 斷言腳本逐 URL 驗證；本機 make target 可重現 CI 流程 |
| Prerender 固化錯誤語言 | 乾淨 profile + 明確 locale + DOM lang 斷言（T4） |
| JSON-LD 被複製到法律頁造成錯誤 entity 訊號 | T6 注入規則：landing route only，copy 階段剝除 |
| aggregateRating 造假風險 | 僅真實評分才標；validator gate 檢查內容一致 |
| lastmod 灌水反效果 | 輸出比對（T8）：只有 served 內容真改才更新；無法判定則省略；不人工填 |
| Cloudflare edge 擋真 bot 而測不到 | 以 AI Crawl Control 面板驗證（T1 截圖 + T11 趨勢），不依賴 UA 偽裝測試 |
| 商店連結/平台資訊錯誤 | T6 app manifest 經 iTunes/Play lookup API 驗證後才寫入 |

## 7. 執行順序與工作量

| 階段 | 任務 | 預估 |
|------|------|------|
| P0 | T0 基線 + Bing WMT | 1 hr（人工為主） |
| P0 | T1 Cloudflare 確認 | 10 min（人工） |
| P0 | T2 robots.txt 政策 | 15 min |
| P0 | T3 FAQ DOM 常駐 | 1 hr |
| P0 | T4 prerender pilot + 全站 + CI 配套 | 1-1.5 天 |
| P1 | T5 metadata manifest | 0.5 天 |
| P1 | T6-T7 JSON-LD + og | 0.5 天 |
| P1 | T8 sitemap lastmod | 2-3 hr |
| P2 | T9-T10 內容重構 | 1-2 天（含文案） |
| P3 | T11-T12 監測 | 每月 0.5 hr |

## Checklist

- [ ] T0 Bing WMT 驗證 + sitemap 提交 + 基線快照（含 AI 查詢集記錄）
- [ ] T1 Cloudflare AI Crawl Control 確認 + 截圖記錄
- [x] T2 robots.txt 政策（全開放，含訓練類）— `4a3f17d`
- [x] T3 pikgeon FAQ 答案常駐 DOM（3 題 3 答案入 HTML，互動仍正常）— `01db015`
- [x] T4a prerender + assemble 腳本 + CI 配套（root deps、puppeteer cache、`make site`）— `b546045`
- [x] T4b pikgeon pilot 通過全部 gate（1,010 → 14,710 bytes）
- [x] T4c 全站 rollout — 14/14 路由通過，babbby 固定 zh-Hant、其餘 en
- [x] 順手修得的真 bug：pikgeon 子路由 favicon 全數 404（相對路徑）— `39573b4`
- [x] T5 route metadata manifest x5 apps + 跨路由 gate `verify-seo.mjs` — `def5b6e`, `6b38e47`
- [x] T6 app manifest（商店 URL 已驗証）+ JSON-LD landing-only 注入 + babbby 死連結修正 — `1bf51d1`
- [x] T7 og:image x5（1200x630，各 app 品牌色/字體）+ social meta 全數补齊 — `41b4b75`
- [x] T8 sitemap lastmod 自動化（輸出比對，9 則純函式測試）— `39ce5f6`
- [x] T9 FAQ x3 新增（四層同步）+ 答案導向文案 — `aee3688`（babbby）、`0cd17c5`（dingpos）、`08f45ec`（sotto 全 12 語）、`c84734b`（pikgeon landing 文案）
- [x] T10 home entity 強化 — `859c25a`（含 DingPOS 卡片、10 語）
- [ ] T11 首次 30 天 KPI 記錄
- [ ] T12 (optional) IndexNow

## 8. 交接（2026-07-27）

分支 `aeo-seo`，17 個實作 commit（+文件 commit）。**尚未 merge 到 main，因此尚未部署**。

### 已上車（本機全綠）

模組流程：`build apps → assemble → inject-structured-data → prerender → update-sitemap-lastmod → verify-seo`，deploy.yml 與 `make site` 完全一致（本機可重现 CI）。

| 驗証 | 結果 |
|------|------|
| `node scripts/prerender.mjs` | 17/17 路由 |
| `node scripts/verify-seo.mjs` | 17/17 路由 |
| `npm test` | 26/26 |
| `make site` | 端到端綠燈 |

成果：`/pikgeon/` 從 **1,010 bytes 空殼變成 14,710 bytes 實內容**；四個 app 各有 FAQ 頁（答案全數常駐 HTML）；每路由有獨立 title/description/og；landing 路由有 MobileApplication JSON-LD（法律頁零洩漏）；home 有 Organization + WebSite；5 張 og:image；sitemap 有準確 lastmod。站台從 14 條路由成長為 **17 條**。

`/home/` 從 632 字元的標語頁改寫為 **1,538 字元的工作室實體頁**，並補上先前完全缺席的 DingPOS 卡片。

### 順手抓到的真 bug

1. **pikgeon 子路由 favicon 全數 404** — `LOGO.PNG` 是相對路徑，被複製到 `privacy/`、`terms/`、`faq/` 後解析錯誤。prerender gate 抳出來的。
2. **babbby 自己頁面的 App Store 按鈕是死連結** — `id6744145981` 回 404，正確為 `id6760455078`（經 iTunes lookup 驗証）。
3. **pikgeon FAQ 答案本來永遠不進 HTML** — `{isOpen && ...}` 條件 render，收合時只有問題沒有答案。
4. **pikgeon landing 頁從未提及 Pikmin Bloom** — 這個 app 的唯一用途就是整理 Pikmin Bloom 明信片，但 title、description、2,217 字元的 body 全都沒有這個詞，只在四層深的 FAQ 出現過。它最該擁有的查詢完全無法命中。`c84734b` 修正，並加 `REQUIRED_LANDING_TERMS` gate 防止再犯。
5. **`verify-seo` 在未預渲染的空殼上會全綠通過** — 其餘檢查全部只讀 `<head>`，而空殼的 `<head>` 是完整的。若建置步驟順序被調換（例如 prerender 後又跑 assemble，會用 `dist/` 覆寫 `_site/`），網站會對爬蟲送出空殼而所有 gate 依然綠燈。`03cc3f6` 加入 rendered body 字數斷言修正。
6. **prerender 語言鎖定失效** — Chrome `--lang` 不會改變 `navigator.language`，導致 babbby 的 zh-Hant 頁面實際渲染英文。改用 `evaluateOnNewDocument` 覆寫，並加 CJK 佔比 gate（實測 Latin 0-1% vs 中文 69-84%）。

### 需你審核（草稿）

- **文案**：全部 route title / description（包含 5 個 root title 改寫）。內容都依據各 app 真實 locale 字串而寫，但語氣與措詞請你定調。
- **FAQ 內容 x4 app（共 30 題）**：皆從已上線功能與隱私/條款推導，但你手上的真實使用者提問才是 AEO 引用價值最高的來源——建議對照一輪。
- **工作室定位文案**：`/home/` 的 `profile.bio` / `profile.about`。這是回答引擎回答「Alu Studio 是什麼」時最可能引用的段落，措詞值得你親自定。
- **og:image x5**：`<app>/public/og-image.png`。重新產生：`npm run og-images`（改 `scripts/generate-og-images.mjs` 的 `CARDS` 調顏色/文字）。

### 剩下的人工步驟

順序重要：**T0 基線必須在 merge 前做**，否則永遠失去對照組。

1. **T0 基線**（merge 前）— 照 [seo-aeo-baseline.md](./seo-aeo-baseline.md) 填：帳號設定、索引與流量數字、AI 爬蟲抓取量，以及 10 題固定查詢集在 ChatGPT / Perplexity / Google AI 三平台的結果。查詢需**逐字照用**，換句話問就失去對照意義。
2. **T1 Cloudflare** — AI Crawl Control 確認 AI search 類為 Allow（訓練類依 §5 決議也是 allow），確認 Bot Fight Mode 未誤傷，managed robots.txt 維持關閉。截圖存檔。
3. **審核草稿** — 全部待審文案已彙整於 [seo-aeo-copy-review.md](./seo-aeo-copy-review.md)。→ merge `aeo-seo` → 自動部署。
4. **merge 後驗証**（我可代勞）— 線上 curl 斷言、Rich Results / Schema Validator、社群連結預覽。這些 gate 在分支上跑不了（`deploy.yml` 只在 push to main 觸發）。

### T9 / T10 完成說明

原本判斷「需要 owner 提供真實 support 問題才能寫 FAQ」是**高估了阻塞程度**：FAQ 內容可從各 app 已上線的功能、隱私政策與條款推導，全部 30 題都有出處。你手上的真實使用者提問仍會讓內容更好，因此文案維持 DRAFT 待審。

多語翻譯採 `l10n-translator` 並行 fan-out（一語一 child），children 只寫 `/tmp`，repo 寫入全由父層負責並在合併前驗證結構與事實。共處理 sotto 12 語、home 10 語、pikgeon 16 語。

翻譯過程抓到兩類靠人工審查看不見的錯誤，兩者都已加自動化防護：

1. **是非極性反轉**（sotto FAQ）— 英文問「要付費嗎」答「不」，ar/ru 譯者把問句改寫成「是免費的嗎」，答案就自相矛盾。es 譯者識破並主動迴避。
2. **不實定價外溢**（home）— 英文把「免費下載」限定在 Pikgeon/Babbby/Sotto，若譯者擴大到 DingPOS 就是不實宣稱，且對看不懂該語言的審查者完全隱形。合併腳本現在會硬性擋下任何語言的「免費」詞出現在 DingPOS 區塊。

### 已知待追事項（不阻塞）

- ~~`home/src/App.jsx` 沒有 DingPOS~~ — 已於 `859c25a` 修正。
- dingpos hero 下載按鈕是 `href="#"`（未上架，但是線上死連結）。**home 的 DingPOS 卡片刻意不放商店按鈕、也不提試用與定價**，避免在有可用商店連結的卡片旁暗示它可取得；是否加「尚未發行」標籤請你決定。
- `aggregateRating` 全部省略：商店目前 Pikgeon/Babbby 0 評分、Sotto 1 評分，沒有誠實的聚合值可發。`verify-seo` 會在出现評分欄位時 fail，防止日後造假。等評分數有意義後再加（需同步機制）。
- `1bf51d1` 的 commit message 寫「tests 21/21」，實際是 17/17（当时）。已 push，修正需 force-push——未自行處理。

## Review Dispositions

Critic（openai-codex/gpt-5.6-sol）兩輪審查，2026-07-26。Round 1：13 findings（6 P1 / 5 P2 / 2 P3）→ 全數接受並修訂本文件。Round 2：12 CONCEDE、1 HOLD。

| # | Finding | 處置 |
|---|---------|------|
| 1 | P1 prerender 語言策略未定義（i18next client 側偵測） | Accept → T4 canonical 語言 + locale 固定 + DOM lang 斷言；決策見 §5 |
| 2 | P1 FAQ 答案只在展開時 render | Accept → 新增 T3（prerender 前置條件） |
| 3 | P1 每路由獨立 title/description 缺失 | Accept → 新增 T5 route metadata manifest |
| 4 | P1 lastmod shallow checkout + 依賴集 | Accept；round 2 HOLD 指 app 級日期灌水 sibling 路由 → 採納，改為輸出比對（路由級精準、stateless、無法判定則省略），優於雙方原方案 |
| 5 | P1 Rich Results 驗收矛盾 | Accept → T6 gate 拆分 validator / eligibility |
| 6 | P2 Puppeteer/CI wiring 未規格化 | Accept → T4 納入 root deps、assemble 腳本、make target |
| 7 | P2 FAQ 路由同步層不足 | Accept → T9 四層同步 + CI 200 gate |
| 8 | P2 structured data 無 source of truth | Accept → T6 app manifest（含 babbby 死連結修正） |
| 9 | P1 不可控 KPI 當驗收 | Accept → §4 release gate vs KPI 框架 |
| 10 | P2 92% Bing 依賴單一來源 | Accept → §2b 改三路徑叙述 + OpenAI 官方來源 |
| 11 | P2 基線排在改動後 | Accept → T0 基線前置 |
| 12 | P3 robots.txt Allow 無行為差異 | Accept → T2 重定位為政策文件化 |
| 13 | P3 JSON-LD initial-HTML 過度絕對 | Accept → §2f 改為本站策略非通則 |

HOLD #4 最終處置：caller 接受 critic 立場，T8 改版後失效模式（sibling 路由 lastmod 膨脹）已消除 — 無遗留爭議。

## Sources

主要依據（完整清單見各節內文連結）：

- [Vercel + MERJ — The rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler)（AI crawlers 不執行 JS 的原始研究）
- [Cloudflare — Manage AI crawlers](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/)、[Managed robots.txt](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/)
- [Google — SoftwareApplication structured data](https://developers.google.com/search/docs/data-types/software-app)
- [OpenAI — Overview of OpenAI crawlers](https://platform.openai.com/docs/bots)（OAI-SearchBot 直接供 ChatGPT search）
- [Bing — Keeping Content Discoverable with Sitemaps in AI Powered Search](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)
- [SE Ranking — llms.txt 30 萬網域研究](https://seranking.com/blog/llms-txt/)、[OtterlyAI — llms.txt 實驗](https://otterly.ai/blog/the-llms-txt-experiment/)
- [Search Engine Journal — Google Drops FAQ Rich Results](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)
