---
summary: SEO + AEO optimization plan — close the JS rendering gap (prerender), verify Cloudflare AI crawler access, add structured data, restructure content for AI citation
read_when:
  - Executing or reviewing any SEO/AEO work on alu-studio.com
  - Changing build pipeline (prerender step), robots.txt, sitemap, or meta/JSON-LD tags
---

# SEO + AEO Optimization Plan

**Status**: P0–P2 shipped 2026-07-30（工程項 + 內容項全數完成）；待 T1/T9 dashboard 確認、T10 監測基線
**Scope**: alu-studio.com 全站（home + pikgeon + babbby + sotto + dingpos）

## 1. 背景與目標

四個 app support 網站 + 一個 studio profile 站，皆為 Vite + React CSR SPA。目標：

1. **SEO**：品牌查詢（"Pikgeon app"、"postcard tracking app" 等）能穩定排上、support 頁面可被搜到。
2. **AEO**（Answer Engine Optimization）：使用者問 ChatGPT / Perplexity / Google AI Overviews「Pikgeon 是什麼」「有沒有明信片追蹤 app」時，內容能被引用。

## 2. 研究結論（2026-07 調查）

### 2a. AI crawlers 不執行 JavaScript — 本站對 AI 引擎不可見（關鍵發現）

Vercel + MERJ 以 5 億+ 次真實 crawler 請求分析（[The rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler)）：**所有主要 AI crawlers 都不 render JS** — OpenAI（GPTBot、OAI-SearchBot、ChatGPT-User）、Anthropic（ClaudeBot）、Perplexity（PerplexityBot）、Meta、ByteDance、CCBot。GPTBot 會抓 JS 檔（11.5% 請求）但從不執行。只有 Googlebot/Gemini 與 AppleBot 有完整 rendering。多篇 2025-2026 追蹤文章一致（[SearchOptimo](https://searchoptimo.com/blog/do-ai-crawlers-render-javascript)、[Lantern](https://www.asklantern.com/blogs/ai-crawlers-do-not-render-javascript) 等）。

**實測本站**：`https://alu-studio.com/pikgeon/` 回應總共 1,010 bytes，body 可見文字為空、無 JSON-LD、無 og:image。AI crawler 只看得到 `<title>` 和 meta description，其餘全部不可見。

### 2b. ChatGPT 高度依賴 Bing index

約 92% 的 ChatGPT 網路搜尋回答來自 Bing index（多來源；ChatGPT browsing 打 Bing API 再由 ChatGPT-User 即時抓頁面，同樣不執行 JS）。Bingbot 的 JS rendering 能力有限。→ Bing Webmaster Tools 與 initial HTML 內容對 AI 可見度至關重要。

### 2c. Cloudflare 預設封鎖 AI crawlers（本站託管於 Cloudflare）

Cloudflare 對新 zone 預設「Block AI bots on all pages」；另有 AI Crawl Control 可逐一 allow/block，與 managed robots.txt（會在 robots.txt 前置 Content Signals：`search=yes, ai-train=no`）（[官方文件](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/)）。**實測**：線上 robots.txt 未被加料（managed robots.txt 未開），偽裝 GPTBot/ClaudeBot UA 得到 HTTP 200 — 但 Cloudflare 是以 IP/簽章驗證真 bot，curl 偽裝測不出真實封鎖狀態，必須進 dashboard 確認。

### 2d. llms.txt 無實證效果

SE Ranking 30 萬網域研究：無任何統計相關性（XGBoost 模型移除 llms.txt 變數後預測準確度反而提升）；Google 明言不使用；無主要 LLM 廠商正式採用（[SE Ranking](https://seranking.com/blog/llms-txt/)、[OtterlyAI 實驗](https://otterly.ai/blog/the-llms-txt-experiment/)）。→ 既有檔案留著（零成本），不再加碼投資。

### 2e. FAQ rich results 已死，FAQ 內容仍活著

Google 於 2026-05-07 全面移除 FAQ rich results（2023-08 起已限縮至政府/健康網站）（[Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)）。FAQPage schema 仍是合法 schema.org 型別、無懲罰但無 SERP 紅利。**FAQ 內容本身**（問句標題 + 直接回答）仍是 AEO 引用的高價值格式。

### 2f. 其他已確認事實

- JSON-LD 必須在 initial HTML 內，client-side 注入的 structured data 不可靠。
- `SoftwareApplication`/`MobileApplication` schema 要出 Google rich result 需 `aggregateRating`（或 review）+ `offers`；沒有評分資料時 schema 本身仍有效（entity 理解用）。
- sitemap `lastmod` 要準確（內容真的變才更新）；Google 與 Bing 都明確重視，Bing 指出 AI 搜尋依內容變化近即時調整（[Bing 官方部落格](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)）。`changefreq`/`priority` 基本被忽略。
- AEO 內容模式：問句式標題（"What is X?" 優於 "X Overview"）、答案先行（標題下 2-3 句直接回答）、可獨立引用的具體句子（含數據/事實優於模糊形容）。
- robots.txt AI 政策：搜尋/引用類 bot（OAI-SearchBot、ChatGPT-User、PerplexityBot、Claude-SearchBot）與訓練類 bot（GPTBot、ClaudeBot、Google-Extended、CCBot）應分開決策 — 要 AI 可見度就 allow 搜尋類；訓練類是獨立的授權選擇。
- IndexNow 對小型靜態站效益有限（官方生態文件：傳統 crawling 已足夠），可後補。

## 3. 現況缺口

| # | 缺口 | 影響 |
|---|------|------|
| 1 | CSR 空殼 HTML（body 無內容） | AI 引擎完全看不到內容；Bing 部分看不到 | 
| 2 | Cloudflare AI crawler 設定未確認 | 可能在 edge 層直接擋掉真 AI bot，robots.txt 再開放也沒用 |
| 3 | 無 JSON-LD（Organization / MobileApplication / WebSite） | 搜尋引擎與 AI 缺乏 entity 資訊 |
| 4 | 無 og:image / twitter:card / og:type / og:site_name | 社群與 AI 答案卡片無視覺呈現 |
| 5 | sitemap 無 `lastmod` | 重爬優先序差，AI 搜尋 freshness 訊號缺失 |
| 6 | 內容非答案導向；babbby / sotto 無 FAQ 頁（dingpos 已於 `/support/` 補齊，41 篇） | 缺乏可被 AI 引用的問答格式內容 |
| 7 | Bing Webmaster Tools 未確認提交 | ChatGPT 引用鏈路的上游缺口 |

## 4. 實作計劃

### P0 — 讓內容可被看見（最高影響）

**T1. 確認 Cloudflare AI 存取設定**（人工，10 分鐘）
- Dashboard → alu-studio.com zone → AI Crawl Control → Crawlers：確認 AI search/assistant 類（OAI-SearchBot、ChatGPT-User、PerplexityBot、Claude 系列）為 Allow。
- 確認 Bot Fight Mode / Block AI Bots 未誤傷；managed robots.txt 維持關閉（自管 robots.txt）。
- 驗收：AI Crawl Control 顯示 allowed requests > 0（部署後數週觀察）。

**T2. Post-build prerender — 每個路由輸出完整 HTML**（核心工程項）
- 方案：新增共用 `scripts/prerender.mjs` — CI build 後以 headless Chrome（puppeteer）serve `_site/` → render 每個 sitemap 路由 → 將 rendered DOM 寫回各路由的 `index.html`。現有 `copy-spa-pages.js` + `rewrite-seo-tags.mjs` 流程不變，prerender 接在其後。
- 不採 vite-react-ssg：需改造 5 個 app 的進入點與路由結構，改動面大；post-build prerender 零 app 程式碼變更，一支腳本全站受益。
- React `createRoot` 對 prerendered DOM 會整棵重繪（一次閃替），對靜態內容站可接受；若要消除可後續改 `hydrateRoot`（獨立任務，非阻塞）。
- Pilot：pikgeon 先行 → 驗證後套用其餘四個 app。
- 驗收：`curl https://alu-studio.com/pikgeon/ | grep -c "<h1\|<h2"` > 0；每路由 HTML 含完整可見文字；`npm test`（worker regression）綠燈。

**T3. robots.txt 明示 AI bot 政策**（15 分鐘）
- 加入 AI 搜尋類 bot 的顯式 `Allow: /`（OAI-SearchBot、ChatGPT-User、PerplexityBot、Claude-SearchBot、Google-Extended 依授權意願決定）。訓練類（GPTBot、ClaudeBot、CCBot）由 Ohlulu 決策後寫入。
- 驗收：`curl https://alu-studio.com/robots.txt` 內容符合決策。

### P1 — Structured data 與 meta 補全

**T4. JSON-LD 注入 initial HTML**（每 app 的 `index.html`，build-time 靜態）
- home：`Organization`（Alu Studio）+ `WebSite`。
- 各 app root：`MobileApplication` — name、operatingSystem（iOS）、applicationCategory、offers（price 0 或實際價格）、App Store URL；`aggregateRating` 僅在 App Store 有真實評分數時加入，並定期同步。
- 驗收：[Rich Results Test](https://search.google.com/test/rich-results) 全數通過、無錯誤。

**T5. og:image / twitter:card / og:type / og:site_name**（每 app）
- 每 app 產一張 1200x630 og:image（app icon + 標語）；補 `twitter:card=summary_large_image`、`og:type=website`、`og:site_name=Alu Studio`。
- 驗收：opengraph.xyz 或 Slack/Discord 貼連結預覽正確。

**T6. sitemap lastmod 自動化**（CI）
- `scripts/` 新增 sitemap 產生腳本：以各路由來源檔的最後 git commit 日期為 `lastmod`，CI assemble `_site/` 時生成，取代手維護的 sitemap.xml。
- 驗收：sitemap 每 URL 有 `lastmod` 且與 git 歷史一致；只有真變更的路由日期會動。

### P2 — AEO 內容重構

**T7. FAQ 頁補齊 + 答案導向重寫**
- babbby / sotto 新增 `/faq/` 路由（比照 pikgeon）；每頁 5-8 題。
- dingpos 已完成，但規模超出原規劃：改採 `/support/` 支援中心（索引頁 + 41 篇獨立文章路由，分 FAQ／教學指南／未來功能三群），內容來自 `src/data/faq/articles.{zh-Hant,en}.js` 雙語 pack，路由與 meta 由 `scripts/copy-spa-pages.js` 於 build 時衍生並驗證（雙語 slug 一致性 + sitemap 覆蓋率）。babbby / sotto 若題數成長到十題以上，沿用這個模式而非單頁 `/faq/`。
- 格式：問句式 H2（使用者真實查詢語言，如 "Does Pikgeon work offline?"）+ 標題下 2-3 句直接回答 + 細節展開。語意化 HTML（真 heading 階層，不是 div 樣式）。
- 各 app 首頁文案改為可獨立引用的具體句子（例："Pikgeon tracks postcards with on-device OCR — no account, no cloud upload"），特性用事實與數字，不用空泛形容詞。
- 驗收：prerendered HTML 中每個 FAQ 問答完整可見；人工抽測 ChatGPT/Perplexity 問 app 相關問題觀察引用。

**T8. home 站 entity 強化**
- 明確陳述：studio 名稱、做什麼、四個 app 各一句事實描述 + 連結（與 llms.txt 內容一致）。
- 驗收：home prerendered HTML 含上述內容。

### P3 — 分發與監測

**T9. Bing Webmaster Tools**：驗證網域、提交 sitemap（可從 GSC 匯入）。驗收：Bing 索引頁數 >= sitemap URL 數的 8 成。
**T10. 監測節奏**（每月）：GSC + Bing WMT 曝光/點擊；Cloudflare AI Crawl Control 的 crawler 請求數；手測 ChatGPT/Perplexity/Google AI 對 "Pikgeon"、"Babbby" 等品牌詞的回答與引用。
**T11.（可選）IndexNow**：deploy workflow 加 ping。小站效益低，僅在 Bing 收錄遲緩時再做。

## 5. 風險

| 風險 | 緩解 |
|------|------|
| Prerender 改變 build 產物 | pikgeon pilot 先行；`npm test` worker regression；部署後 curl 抽驗全路由 |
| aggregateRating 造假風險（無評分卻標） | 僅在 App Store 有真實評分時加入；否則省略該欄位 |
| lastmod 灌水反效果 | 以 git commit 日期為源，不人工填 |
| Cloudflare edge 擋真 bot 而測不到 | 以 AI Crawl Control 分析面板驗證，不依賴 UA 偽裝測試 |
| 訓練類 bot 授權屬內容授權決策 | T3 前由 Ohlulu 明確決定 allow/block 清單 |

## 6. 執行順序與工作量

| 階段 | 任務 | 預估 |
|------|------|------|
| P0 | T1 Cloudflare 確認 | 10 min（人工） |
| P0 | T2 prerender pilot + 全站 | 0.5-1 天 |
| P0 | T3 robots.txt | 15 min |
| P1 | T4-T6 schema / og / sitemap | 0.5 天 |
| P2 | T7-T8 內容重構 | 1-2 天（含文案） |
| P3 | T9-T11 分發監測 | 1-2 hr |

## Checklist

- [ ] T1 Cloudflare AI Crawl Control 確認並截圖記錄
- [x] T2a prerender 腳本 + pikgeon pilot（scripts/prerender.mjs，e58c116）
- [x] T2b 全站 rollout — 58 routes，CI 接在 assemble 之後，render 空殼會 fail build
- [x] T3 robots.txt AI 政策（2c26fe0；Ohlulu 決策：搜尋類 + 訓練類全部 allow）
- [x] T4 JSON-LD x5 apps（651f4de；aggregateRating 刻意略過 — sotto 僅 1 評分太薄14，dingpos 未上架無 installUrl/offers）
- [x] T5 og:image x5 + 完整 social meta（00f4c5a；nano-banana 生圖，逐張人工檢查文字 artifacts，三張重生）
- [x] T6 sitemap lastmod 自動化（82f6bc3；deploy 時生成，git 日期來源，repo 檔維持手維護當 URL 清單）
- [x] T7 FAQ 新增 + 答案導向（d2153dc；abbby/sotto 各 8 題 en+zh-Hant；pikgeon per-route title 補齊 2f1044d）
- [x] T8 home entity 強化（548d92e；補上缺席的 DingPOS 卡片 x10 語系，meta/llms.txt 同步四個 app）
- [ ] T9 Bing Webmaster Tools
- [ ] T10 監測節奏建立（首次基線記錄）
- [ ] T11 (optional) IndexNow

### 執行中的額外發現（2026-07-30）

- **pikgeon FAQ accordion 反模式**：`{isOpen && ...}` 條件渲染讓收合答案完全不在 DOM，prerender 也救不回來。改為永遠渲染 + `hidden` 屬性（378cd85）。babbby/sotto 的新 FaqPage 從一開始就用這個 pattern。
- **babbby 官網 App Store 死連結**：首頁指向已下架的 id6744145981，修為 id6760455078（814028e）。
- **sotto 事實確認**（Ohlulu）：有 lifetime 買斷 IAP（解除 person/note/field 數量上限）；Google Drive/Dropbox 備份功能確實存在（非模板殘留）；Android 版已上架（Play 實測 200）。FAQ 與 JSON-LD 均依此更新。
- **babbby 事實確認**（Ohlulu）：無帳號機制，FAQ 寫成事實。
- **sotto/babbby fallbackLng 是 zh-Hant**：FAQ 只出 en + zh-Hant，其餘語系 per-key 退回 zh-Hant；prerender 產出英文版（headless en-US）。

## Sources

主要依據（完整清單見各節內文連結）：

- [Vercel + MERJ — The rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler)（AI crawlers 不執行 JS 的原始研究）
- [Cloudflare — Manage AI crawlers](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/)、[Managed robots.txt](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/)
- [Google — SoftwareApplication structured data](https://developers.google.com/search/docs/data-types/software-app)
- [Bing — Keeping Content Discoverable with Sitemaps in AI Powered Search](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)
- [SE Ranking — llms.txt 30 萬網域研究](https://seranking.com/blog/llms-txt/)、[OtterlyAI — llms.txt 實驗](https://otterly.ai/blog/the-llms-txt-experiment/)
- [Search Engine Journal — Google Drops FAQ Rich Results](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)
