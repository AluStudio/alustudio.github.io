---
summary: SEO and AEO rules for alu-studio.com — prerendered self-canonical HTML, sitemap lastmod, JSON-LD and social meta, AI crawler policy, answer-first content, and the monthly check
read_when:
  - Adding or renaming a route, or changing titles, descriptions, canonical, or og/twitter meta
  - Changing the prerender, sitemap, or copy-spa-pages build steps
  - Editing robots.txt, llms.txt, JSON-LD, or Cloudflare AI Crawl Control
  - Writing FAQ or landing copy meant to be cited by search or AI engines
  - Weighing SEO skill advice against this site's decisions
---

# SEO + AEO

目標：品牌與類別查詢在 Google / Bing 搜得到；使用者問 ChatGPT、Perplexity、Google AI Overviews 時，內容能被引用。這份文件的規則優先於 SEO skill 的通用建議。

## 前提事實

規則都建立在這些事實上。事實改變時，回頭檢查依賴它的規則。

- 主要 AI crawler 抓 HTML 但不執行 JS：GPTBot、OAI-SearchBot、ChatGPT-User、ClaudeBot、PerplexityBot、CCBot 等。只有 Googlebot / Gemini 與 Applebot 會完整 render。來源：[Vercel + MERJ](https://vercel.com/blog/the-rise-of-the-ai-crawler)。
- ChatGPT 的網路搜尋大多走 Bing index，而 Bingbot 的 JS rendering 有限，所以 initial HTML 與 Bing Webmaster Tools 直接影響 AI 可見度。
- Google 已全面移除 FAQ rich results（[SEJ](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)）。FAQ 內容本身仍是 AEO 高價值格式，`FAQPage` schema 則沒有 SERP 紅利。
- llms.txt 沒有實證效果，Google 也不使用（[SE Ranking](https://seranking.com/blog/llms-txt/)）。
- Structured data 必須在 initial HTML 內，client-side 注入不可靠。
- Google 只在 `lastmod` 持續準確時採信；Bing 表示 AI 搜尋近即時地參考內容變化（[Bing](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)）。`changefreq` / `priority` 基本被忽略。

## HTML 與 URL

- 每個合法 route 都有實體、self-canonical 的 `index.html`：各 app 的 `scripts/copy-spa-pages.js` 複製 app root HTML 時，透過 `scripts/rewrite-seo-tags.mjs` 改寫該 route 自己的 canonical、og:url、title、description。子頁沿用 app 首頁的 canonical 會被當成重複內容。
- App 首頁的 `<title>` 格式為「品牌 — 類別描述」，例如 `Pikgeon — Postcard Tracker App with On-Device OCR`。只放品牌名會讓非品牌查詢失去最強的 on-page 訊號。類別用詞取自既有 meta / JSON-LD / llms.txt 已驗證的說法。
- 每個子頁要有自己的 description，不沿用首頁。
- `<html lang>` 必須和 prerender 出來的正文語言一致：各 app 的 `i18n.js` 解析語系後同步 `document.documentElement.lang`。DingPOS 另外由 copy script 在靜態 HTML 寫好 `lang`。
- 元件層的 render 限制（收合內容留在 DOM、不用 JS-gated scroll reveal）見 AGENTS.md §Sub-app Notes 與 §Project Skills。

## 多語系 URL

只有獨立 URL 的語言才能被索引。同一個 URL 在 client 端切換語言，crawler 只看得到一種語言：Googlebot 從美國發出、不帶 `Accept-Language`（[Google](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)）。

- 目前只有 DingPOS 有多語系 URL：英文不加前綴（`/dingpos/...`，同時是 `x-default`），繁中在 `/dingpos/zh-hant/...`，兩邊的子路徑一一對應。其他 app 仍只有 prerender 語言可被索引。
- URL 是唯一的語言訊號：不看 navigator、不讀 localStorage，也不依使用者語系自動導向。Google 明確建議避免這種導向，因為會讓使用者和 crawler 看不到其他語言版本。語言切換器直接導到同一頁另一個語言的 URL。
- 每一頁的每個語言版本都要有：self-canonical、`<html lang>`、`og:locale` 加上 `og:locale:alternate`，以及完整的 hreflang（`en`、`zh-Hant`、`x-default`，自己也要列）。Google 只採信雙向互指的 hreflang。
- hreflang 只寫在 HTML `<head>`，sitemap 不重複寫。Google 認為兩種方式等價，同時維護兩份只會增加出錯的機會。
- 語系前綴的單一來源：`dingpos/src/i18n.js` 的 `supportedLanguages` 和 `dingpos/scripts/copy-spa-pages.js` 的 `LOCALES`，兩邊必須一致。

## Prerender

- CI 在 assemble `_site/` 之後執行 `scripts/prerender.mjs`：用 headless Chrome render sitemap 裡的每個 route，再把 rendered DOM 寫回該 route 的 `index.html`。Route 清單只來自 sitemap。
- 任何 route render 出空殼，build 就失敗，不允許默默部署空頁。
- render 完再跑 route audit（`auditRoutes`）：每個 route 剛好一個 `<h1>`、所有 JSON-LD 都能 parse、`/dingpos/` 底下每個 route 的 title 與 description 都不重複。品牌名放在 footer 這類重複區塊時用 `<p class="h1">`，不用 heading。違規一樣讓 build 失敗。
- 選 post-build prerender 而不是 vite-react-ssg：後者要改五個 app 的進入點與路由，前者 app 程式碼零改動。
- 接受的代價：client 端 `createRoot` 會整棵重繪 prerendered DOM，造成一次閃替。改用 `hydrateRoot` 可以消除，但屬於獨立任務。

## Sitemap

- repo 根目錄的 `sitemap.xml` 手動維護，是 URL 成員的唯一來源。dingpos build 會驗證 sitemap 裡的 `/dingpos/` URL 跟它產出的頁面（兩種語言）完全一致，多一個少一個都會讓 build 失敗。
- 部署時由 `scripts/generate-sitemap.mjs` 輸出 `_site/sitemap.xml`，每個 URL 的 `lastmod` 取自產生該 route 的檔案的最後一次 git commit。這個 `lastmod` 不手填、不批次更新。CI checkout 必須用 `fetch-depth: 0`，shallow clone 會讓所有日期塌成同一天。
- IndexNow 不接：小站靠一般 crawling 就夠。只有 Bing 收錄明顯遲緩時才啟用（Bing WMT 有入口）。

## Structured data 與 social meta

- JSON-LD 靜態寫在各 app 的 `index.html`：home 放 `Organization` + `WebSite`；各 app 放 `MobileApplication`，含 `Offer` / `AggregateOffer`。
- DingPOS 的每篇 support 文章另有 `BreadcrumbList`（DingPOS → Support → 文章），由 `copy-spa-pages.js` 在 build 時寫進該 route 的 `<head>`（`addJsonLd` / `breadcrumbList`）。
- `aggregateRating` 只在 App Store 有足夠的真實評分時加入，並定期同步。目前五站都沒有：評分太少的 app 標上去，比不標更像造假。
- 每個 app 有 1200x630 的 `og:image`，以及 `og:type=website`、`og:site_name=Alu Studio`、`twitter:card=summary_large_image`。

## AI crawler 政策

- `robots.txt` 明列並全部 allow 兩類 AI bot。搜尋 / 引用類：OAI-SearchBot、ChatGPT-User、PerplexityBot、Claude-SearchBot 等。訓練類：GPTBot、ClaudeBot、CCBot、Google-Extended 等。訓練類也開放是 Ohlulu 的內容授權決策：support 與行銷內容本來就希望擴散，品牌能帶進未來的模型。
- `Google-adstxt` 永遠不得 block。
- Cloudflare AI Crawl Control 所有 crawler 都設為 allow；managed robots.txt 保持關閉，因為 robots.txt 自己管。Cloudflare 用 IP / 簽章辨識真 bot，偽裝 UA 用 curl 測不出 edge 封鎖，要在 dashboard 確認。
- `llms.txt` 保留（零成本），但不再加碼投資。

## 內容

- FAQ 用問句式標題，用使用者真實會打的查詢語言，例如 `Does Pikgeon work offline?`。標題下先用 2–3 句直接回答，再展開細節，heading 階層要是語意化 HTML。
- 首頁與特色文案寫成可以單獨被引用的具體句子，用事實和數字，不用空泛形容詞。
- 產品 claim 以產品 repo 為準（見 AGENTS.md §Product Repos）。
- FAQ 題數少時用單頁 `/faq/`（pikgeon、babbby、sotto）。題數成長到十題以上時，改用 dingpos `/support/` 的模式：索引頁加每篇一條 route，內容來自雙語 data pack。

## 每月回訪

每月一次：

- GSC 與 Bing Webmaster Tools 的曝光、點擊、索引頁數。Bing 索引頁數應至少是 sitemap URL 數的八成。
- Cloudflare AI Crawl Control 各 bot 的請求數變化。
- 在 ChatGPT、Perplexity、Google AI 手動查「Pikgeon」「Babbby」「Sotto」「DingPOS」，記錄回答與引用。
- 抽查 sitemap `lastmod` 是否和 git 歷史一致。
- 效能用本機 `npx lighthouse` 量 lab data。免 key 的 PSI 配額通常已經耗盡。

## Related

- [hosting.md](./hosting.md) ← canonical origin、redirect、404 行為
