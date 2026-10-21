---
summary: SEO and AEO rules for alu-studio.com — prerendered self-canonical HTML, sitemap lastmod, JSON-LD and social meta, AI crawler policy, answer-first content, and the monthly check
read_when:
  - Adding or renaming a route, or changing titles, descriptions, canonical, or og/twitter meta
  - Changing the prerender, sitemap, or copy-spa-pages build steps
  - Editing robots.txt, llms.txt, JSON-LD, or Cloudflare AI Crawl Control
  - Writing FAQ or landing copy meant to be cited by search or AI engines
  - Weighing SEO skill advice against this site's decisions
  - Changing DingPOS or Sotto en / zh-Hant copy, or anything about the generated zh-Hans
  - Adding, shipping, or re-translating a DingPOS translated language (ja, th, …)
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
- 站內連結直接指向 route 的 trailing-slash URL（`/dingpos/pricing/`），不寫 `/dingpos/pricing`：少了斜線，edge 會回 307 再導過去，crawler 在每一頁的每一條連結都多走一次 redirect，而且 307 是暫時性的，傳遞的訊號比直接連到 canonical 弱。DingPOS 的 router basename 帶結尾斜線（`/dingpos/ja/`），`<Link to="/">` 才會是首頁的 URL；其餘 `to` 一律寫成 `/pricing/`、`/support/<slug>/`。prerender 的 route audit 會擋下 `DIRECT_LINK_PREFIXES`（目前只有 `/dingpos/`）底下指向非 sitemap route 的站內連結。
- `<html lang>` 必須和 prerender 出來的正文語言一致：各 app 的 `i18n.js` 解析語系後同步 `document.documentElement.lang`。DingPOS 與 Sotto 另外由 copy script 在靜態 HTML 寫好 `lang`（Sotto 的阿拉伯文另加 `dir="rtl"`）。
- 元件層的 render 限制（收合內容留在 DOM、不用 JS-gated scroll reveal）見 AGENTS.md §Sub-app Notes 與 §Project Skills。

## 多語系 URL

只有獨立 URL 的語言才能被索引。同一個 URL 在 client 端切換語言，crawler 只看得到一種語言：Googlebot 從美國發出、不帶 `Accept-Language`（[Google](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)）。

- DingPOS 與 Sotto 有多語系 URL，英文都不加前綴（同時是 `x-default`），各語言的子路徑一一對應，前綴是 hreflang 代碼的小寫。DingPOS 的語言清單是 `dingpos/l10n/languages.json`：鏡像 app 的 `l10n/languages.json`（同樣的 code、kind 與順序），共 32 種，只有 `shipped: true` 的語言有 URL、hreflang 與 sitemap 條目；哪些語言已上線，以 registry 為準。Sotto 有十二種：`zh-hant`、`zh-hans`、`ja`、`ko`、`de`、`es`、`fr`、`it`、`pt-br`、`ru`、`ar`。home、pikgeon、babbby 仍只有 prerender 語言可被索引。
- hreflang 只標語言、不標地區（`ja`，不是 `ja-JP`）：網站不分地區內容，加上地區會把其他地區的同語使用者排除在外。地區碼只在 Google 接受時才保留（ISO 3166-1 alpha-2，例如 `pt-BR`）：Google 不接受 `es-419`，所以 DingPOS 的 es-419 以 `es` 上線，hreflang、`<html lang>` 都是 `es`，前綴是 `es/`；檔名與 app 對照仍用 `es-419`。
- URL 是唯一的語言訊號：不看 navigator、不讀 localStorage，也不依使用者語系自動導向。Google 明確建議避免這種導向，因為會讓使用者和 crawler 看不到其他語言版本。語言切換器直接導到同一頁另一個語言的 URL，而且是 `<a href>` 連結（各帶 `hreflang` 與 `lang`），不是 `<select>`：crawler 只會沿著連結找頁面，`<select>` 的選項對它不存在，非英文頁就只剩 sitemap 一個入口。Google 也建議各語言版本互相連結。href 只用 pathname，prerender 與訪客才會 render 出同樣的值；一般點擊時才把 query 與 hash 帶過去。
- 每一頁的每個語言版本都要有：self-canonical、`<html lang>`、`og:locale` 加上 `og:locale:alternate`，以及完整的 hreflang（該 app 的每種語言加 `x-default`，自己也要列）。Google 只採信雙向互指的 hreflang。`og:locale` 對應：`en_US`、`zh_TW`、`zh_CN`、`ja_JP`、`ko_KR`、`de_DE`、`es_ES`、`fr_FR`、`it_IT`、`pt_BR`、`ru_RU`、`ar_AR`；DingPOS 每種語言的值寫在 registry 的 `ogLocale`。
- hreflang 只寫在 HTML `<head>`，sitemap 不重複寫。Google 認為兩種方式等價，同時維護兩份只會增加出錯的機會。
- 語系前綴的單一來源：DingPOS 的 `src/i18n.js` 與 `scripts/copy-spa-pages.js` 都讀 `dingpos/l10n/languages.json`。Sotto 是 `src/i18n.js` 的 `supportedLanguages` 和 `scripts/copy-spa-pages.js` 的 `LOCALE_DEFS`，兩邊必須一致。
- 每種語言的內容都要完整，不退回英文：DingPOS 與 Sotto 的 `copy-spa-pages.js` 在任一語言的 UI 字串少了或多了 en 的 key，或 FAQ／guide pack 的 slug 與 en 不同時讓 build 失敗。兩者都沒有 fallback 語言，缺 key 會直接顯示 key 名稱。Sotto 另外拒絕任何空字串。DingPOS 另外擋 en 是陣列、其他語言卻不是陣列的 key（頁面會把它當成空清單，整段默默消失）；空字串只允許在 key 名稱以 `_before`／`_after` 結尾的句子片段，它們夾住行內的價格，語序可能讓其中一邊是空的。
- DingPOS 與 Sotto 每次只載入當頁語言的字串與 FAQ／guides（`import.meta.glob` 動態載入，載完才 hydrate），加一種語言不會讓任何一頁下載更多 JS。
- 任兩頁的 title 與 description 都不可相同，跨語系也算：兩個 URL 用同一句話介紹自己，就是重複內容的訊號。`copy-spa-pages.js` 在 build 時檢查，違規即失敗。

### 簡中由繁中產生

- DingPOS 與 Sotto 的簡中由 `scripts/gen-zh-hans.mjs` 從繁中產生，不手改：DingPOS 是 `dingpos/src/locales/zh-Hans/translation.json` 與 `dingpos/src/data/faq/articles.zh-Hans.js`，Sotto 是 `sotto/src/locales/zh-Hans/translation.json` 與 `sotto/src/data/guides/guides.zh-Hans.js`。原因：手動維護的簡中會落後繁中，Sotto 網站的簡中就曾少了整段 FAQ。`npm test` 在檔案和重新產生的結果不同時失敗，手改也會被擋。
- 每個 app 的設定（路徑、`appGlossary`、`siteGlossary`、`rowColumnEntries`、`overrides`、允許轉換的 `textFields`）集中在 script 的 `APPS`；新增 app 就是加一筆。
- 轉換用 opencc-js，不用 OpenCC CLI：版本由 lockfile 鎖住，本機與 CI 轉出一樣的結果，`npm test` 的過期檢查才成立。
- 轉換順序：opencc-js `twp → cn`、app glossary、site glossary、「」→“”、`rowColumnEntries` 的 列/行 對調（台灣的「列」是 row，大陸的「列」是 column）、overrides。轉換改到 `{{…}}` placeholder，或改到 slug、`related`、路徑、`since` 這類非文字欄位時，整次失敗、不寫檔。
- 用詞跟 app 的簡中一致，網站寫的畫面與欄位名稱才會和使用者在 app 看到的一樣。DingPOS 的 `DINGPOS_APP_GLOSSARY` 逐字鏡像 app repo `scripts/gen-zh-hans.py` 的 `GLOSSARY`，兩邊一起改，鏡像區塊不單獨改。Sotto app 的簡中是手寫的、沒有 generator 可鏡像，`SOTTO_APP_GLOSSARY` 收的是 sotto-ios `zh-Hans.lproj` 和轉換結果不同的用詞（例如 自订→自定义、钉选→置顶），app 改用詞時一起改。網站專用的修正放 site glossary 或 overrides。
- 每筆 override 記著它是對哪一句繁中寫的；繁中改了，override 就失效並讓產生失敗，要重寫。繁中 title 裡沒有任何繁簡不同的字時，轉出來和繁中一模一樣，會撞上 title 不重複的規則，這時用 override 給一個大陸用語版本。

改 en 或繁中文案的流程：

1. 改 en 與 zh-Hant。
2. `npm run zh-hans`：重新產生所有 app 的簡中，並把和 `origin/main` 相比有變動的條目寫到每個 app 一份的 `.logs/zh-hans-review-<app>.json`（`npm run zh-hans -- --base <ref>` 換比較基準）。UI 以 key 為單位，FAQ／guide 以整篇文章為單位。
3. 筆數不為 0 的 packet，交給 project agent `zh-hans-reviewer` 審：`subagent { agent: "zh-hans-reviewer", task: "Review the packet at <absolute path>" }`。它會連來源一起審，因為來源錯了，每種語言都會跟著錯。
4. 依每個 finding 標的 layer 修：`zh-hant` 或 `en` 改來源；`site-glossary` 加進該 app 的 site glossary（先看它列出的撞詞）；`override` 加進該 app 的 overrides；`app` 先改 app 的用詞，再同步 app glossary。不採納的 finding 不用記錄。
5. 再跑一次 `npm run zh-hans`，然後 `npm test`，把產生的檔案一起 commit。

### 翻譯語言

DingPOS registry 裡 `kind: translated` 的 29 種語言（ja、th、ko…）由 agent 從 en 翻譯，不從中文翻：zh-Hant 是 owner 寫的、zh-Hans 由它產生，兩者都不是翻譯來源。en 與 zh-Hant 說法不同時，翻譯跟著 en，差異記成給 owner 的 en finding。工具是 `scripts/l10n.mjs`（`npm run l10n -- …`），agent 是 project agent `l10n-translator` 與 `l10n-reviewer`。

- 翻譯單位：一個 UI 字串（`ui:<key>`）、一整篇 FAQ（`faq:<slug>`）、一個 FAQ 分類（`cat:<key>`）。只有文字欄位會翻譯；slug、related、since、icon 這類結構欄位永遠從 en 複製。
- 翻譯語言的 `dingpos/src/locales/<code>/translation.json` 與 `dingpos/src/data/faq/articles.<code>.js` 由 `npm run l10n -- apply <code>` 產生，不手改：手改的 slug 或 related 會在多種語言裡各自漂移。`apply` 拒絕 `{{…}}` placeholder 和 en 不同、空值（`_before`／`_after` 除外）、形狀和 en 不同（步驟數、區塊數）的值，以及從舊版 en 翻出來的值。
- 每種語言一份 `dingpos/l10n/manifest/<code>.json`，記錄每個單位翻譯時的 en hash（只算文字欄位）。en 文字改了，該單位就過期，要重翻。
- 用詞跟 app 一致：`sync` 從本機的 app repo（`~/Developer/alustudio/DingPOS`，`--app-repo` 可改）讀該語言的 glossary 與字串，把和網站 en 逐字相同的 app 字串的譯文（`appMatch`），以及 FAQ 裡逐字出現的 app 按鈕、畫面、分頁名稱（`appTerms`）放進 packet。translator 預設採用 app 的譯文，語境不同才改並說明理由。網站才有的詞記在 `dingpos/l10n/glossary/<code>.md`。app repo 只有 `sync` 會讀，CI 與 `npm test` 不依賴它。
- 審查：第一輪 `l10n-reviewer` 完整審過每個 segment；之後每輪只重審上一輪修改的單位（`sync --mode review --since <ref>`，加上 `--ids` 帶入 translator 保留不改的 finding），最多兩輪修正。重審只看上一輪指名或修改的欄位，查意思、app 用詞、glossary；語感與搜尋詞偏好只能記成不擋關的 `note`（寫進報告的 review notes），translator 對 reviewer 的建議整句照套或整句保留並說明理由，不取一半。這是因為兩輪重審曾讓 reviewer 重挑自己上一輪寫的字（et、hu、ms）。還有 `translation` 或 `glossary` finding 沒收斂就不上線，交給 owner 裁決。
- 上線：語言審查通過後，把 registry 的 `shipped` 改成 true，執行 `node dingpos/scripts/copy-spa-pages.js --write-sitemap` 改寫 `sitemap.xml` 的 DingPOS 區塊，再跑 build 與 prerender。每種語言各自上線，不等其他語言。
- Privacy 與 Terms 照常翻譯，不加「以英文版為準」：Sotto 的翻譯語言也沒有這類聲明。
- `npm test` 對每種已上線的翻譯語言執行 `npm run l10n -- check`：缺少或多出的單位、過期的單位，以及和 `apply` 重新產生的結果不同的檔案（手改過，或 en 的 related、since 改了還沒套用），都會讓它失敗，所以英文改了、翻譯還沒補上時無法部署。

改 en 文案的流程（在上面的簡中流程之後做）：

1. 改 en 與 zh-Hant，跑完簡中的流程。`npm test` 會列出每種已上線翻譯語言過期或缺少的單位。
2. 每種被列出的語言：`npm run l10n -- sync <code>`，只把過期與缺少的單位寫成 `.logs/l10n/<code>/packets/<segment>.json`；過期的單位帶著現在的譯文與翻譯時的 en（`previousEn`，從 git 歷史找回）。需要本機的 app repo。
3. 每個 packet 交給 translator：`subagent { agent: "l10n-translator", task: "Translate .logs/l10n/<code>/packets/<segment>.json for <code>." }`，它會先用 `apply --dry-run` 驗證自己的輸出。
4. `npm run l10n -- apply <code>`，直到 `rejected 0`。一篇新文章或一整段新文案要再審：`npm run l10n -- sync <code> --mode review --since <改之前的 commit>`，交給 `l10n-reviewer`；幾個短字串可以不審。
5. 只改了 related、since 這類結構欄位時不用重翻，`npm run l10n -- apply <code>` 就會把它寫進該語言的 pack。
6. `npm test`，把產生的檔案、manifest 跟 en 的修改一起 commit。

## Prerender

- CI 在 assemble `_site/` 之後執行 `scripts/prerender.mjs`：用 headless Chrome render sitemap 裡的每個 route，再把 rendered DOM 寫回該 route 的 `index.html`。Route 清單只來自 sitemap。
- 任何 route render 出空殼，build 就失敗，不允許默默部署空頁。
- render 完再跑 route audit（`auditRoutes`）：每個 route 剛好一個 `<h1>`、所有 JSON-LD 都能 parse、`UNIQUE_META_PREFIXES`（`/dingpos/`、`/sotto/`）各自底下每個 route 的 title 與 description 都不重複；有 hreflang 的頁面必須列出自己、被每個 alternate 回指完全相同的一組，且 `<html lang>` 等於指向自己的那個 hreflang；`DIRECT_LINK_PREFIXES` 底下每一個站內 `<a href>` 都必須剛好是 sitemap route（見 §HTML 與 URL）。品牌名放在 footer 這類重複區塊時用 `<p class="h1">`，不用 heading。違規一樣讓 build 失敗。
- 選 post-build prerender 而不是 vite-react-ssg：後者要改五個 app 的進入點與路由，前者 app 程式碼零改動。
- 序列化前，把 DOM 修成 React server renderer 會輸出的樣子，因為 hydration 是逐個節點對照 HTML：表單狀態（radio 的 checked、選中的 `<option>`）存在 DOM property，`outerHTML` 不會寫出來，所以改寫成屬性——hydrate `<select>` 時 React 不會重新套用 value；相鄰的 text node 在 HTML 被 parse 時會合併，所以中間插入空註解 `<!-- -->`。
- dingpos 與 sotto 用 `hydrateRoot` 接手 prerendered DOM，畫好的節點原地保留。prerender 寫完檔案後，會用手機 viewport 重新載入它們的每個 route（每種語言）：出現 React error，或 React 換掉了 prerendered 節點，build 就失敗。要 hydrate 的 app 列在 `scripts/prerender.mjs` 的 `HYDRATED_PREFIXES`。
- prerender 等待 React 的 `waitForFunction` 不能用預設的 requestAnimationFrame 輪詢：多個分頁並行時，只有一個是前景，背景分頁的 rAF 永遠不觸發。等 mount 用 `polling: "mutation"`，等 hydrate 用固定間隔。曾經的症狀：sotto 要等語言 chunk 載完才 mount（晚於 `load`），完整 build 裡隨機一兩個 route timeout，單獨重跑又全部通過。
- home、pikgeon、babbby 仍用 `createRoot`，會整棵重繪 prerendered DOM，造成一次閃替。原因是它們的語言由瀏覽器偵測（navigator / localStorage），prerender 出來的是英文；其他語言的訪客一定 mismatch，React 會退回整棵重繪，hydrate 沒有效益。要改成 hydrate，得先改成像 dingpos、sotto 一樣由 URL 決定語言。
- 在 render 期間讀到 prerender 與訪客瀏覽器可能不同的值（時間、viewport、storage），會讓 hydrate 的 app mismatch。dingpos 與 sotto footer 的版權年份因此取 build 年份（`import.meta.env.BUILD_YEAR`），不讀訪客的時鐘。

## Sitemap

- repo 根目錄的 `sitemap.xml` 是 URL 成員的唯一來源。dingpos 與 sotto 的 build 會驗證 sitemap 裡自己的 URL 跟產出的頁面（每種語言）完全一致，多一個少一個都會讓 build 失敗。Sotto 的區塊手動維護；DingPOS 的區塊由 `node dingpos/scripts/copy-spa-pages.js --write-sitemap` 從頁面清單改寫（32 種語言、每種 64 頁，手寫一定會漏）。
- DingPOS 每種語言的子頁 `lastmod` 只看該語言自己的字串與 FAQ pack；語言首頁看整個 `dingpos/src`，但用 git pathspec `:(exclude)` 排除其他語言的 `locales/<code>` 與 `articles.<code>.js`（`scripts/generate-sitemap.mjs` `dingposRules`）。所以共用元件改了，每種語言的首頁都會更新日期，但翻譯或上線一種語言，不會改到其他語言任何一頁的日期。首頁曾經直接看整個 `dingpos/src`，結果連續上線約 30 種語言時，每個語言首頁的日期被推了約 30 次，內容卻沒變。
- 部署時由 `scripts/generate-sitemap.mjs` 輸出 `_site/sitemap.xml`，每個 URL 的 `lastmod` 取自產生該 route 的檔案的最後一次 git commit。這個 `lastmod` 不手填、不批次更新。CI checkout 必須用 `fetch-depth: 0`，shallow clone 會讓所有日期塌成同一天。
- IndexNow 不接：小站靠一般 crawling 就夠。只有 Bing 收錄明顯遲緩時才啟用（Bing WMT 有入口）。

## Structured data 與 social meta

- JSON-LD 靜態寫在各 app 的 `index.html`：home 放 `Organization` + `WebSite`；各 app 放 `MobileApplication`，含 `Offer` / `AggregateOffer`。
- DingPOS 的每篇 support 文章另有 `BreadcrumbList`（DingPOS → Support → 文章），Sotto 的每篇 guide 也有（Sotto → Guides → 文章，名稱與 URL 都是該語言的），由 `copy-spa-pages.js` 在 build 時寫進該 route 的 `<head>`（`addJsonLd` / `breadcrumbList`）。
- `MobileApplication` 的 `sameAs` 列出 app 的商店頁（Sotto：App Store 與 Google Play；DingPOS：App Store），讓搜尋引擎把同名的不同產品分開。官方社群帳號或 launch 平台頁（DingPOS：Product Hunt）也列進去，但只放未登入就看得到的公開頁：審核中的頁面（例如 AlternativeTo 的待審 app）等通過後再加。
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
- FAQ 題數少時用單頁 `/faq/`（pikgeon、babbby、sotto）。題數成長到十題以上時，改用 dingpos `/support/` 的模式：索引頁加每篇一條 route，內容來自各語系的 data pack。
- 獲客文章（Sotto `/sotto/guides/<slug>/`）瞄準產品 ASO 已驗證的關鍵字背後的真實問題（`~/Developer/alustudio/sotto/docs/marketing/aso-keywords.md`），網站與商店用同一組詞。每篇開頭 2–3 句直接回答標題，之後用 H2 分段，最後一段導回 app；標題用該語言實際的搜尋說法，不逐字翻譯。內容來自各語系的 guide pack（`sotto/src/data/guides/guides.<code>.js`，schema 寫在 `guides.en.js` 開頭），`summary` 同時是索引卡片文字與該頁的 description（160 字元內）。build 檢查每篇以段落開頭、至少一個 H2、related 都存在。
- 首頁 h1 不只寫品牌名：同名產品很多時，單獨的「Sotto」無法消歧。Sotto 首頁的 h1 是品牌加上含該語言 SWEET 詞的 tagline，視覺上仍是大字品牌加副標。

## 每月回訪

每月一次：

- GSC 與 Bing Webmaster Tools 的曝光、點擊、索引頁數。Bing 索引頁數應至少是 sitemap URL 數的八成。
- Cloudflare AI Crawl Control 各 bot 的請求數變化。
- 在 ChatGPT、Perplexity、Google AI 手動查「Pikgeon」「Babbby」「Sotto」「DingPOS」，記錄回答與引用。
- 抽查 sitemap `lastmod` 是否和 git 歷史一致。
- 效能照 [performance §量測](./performance.md#量測) 量正式站，並更新 §目前基準。

## Related

- [hosting.md](./hosting.md) ← canonical origin、redirect、404 行為
- [performance.md](./performance.md) ← 字型、圖片、Lighthouse 量測與基準
