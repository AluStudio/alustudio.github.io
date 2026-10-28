---
summary: SEO and AEO rules for alu-studio.com — prerendered self-canonical HTML, sitemap lastmod, JSON-LD and social meta, AI crawler policy, answer-first content, and the monthly check
read_when:
  - Adding or renaming a route, or changing titles, descriptions, canonical, or og/twitter meta
  - Changing the prerender, sitemap, or copy-spa-pages build steps
  - Editing robots.txt, llms.txt, JSON-LD, or Cloudflare AI Crawl Control
  - Writing FAQ or landing copy meant to be cited by search or AI engines
  - Writing or adding an acquisition article (Sotto or DingPOS guides), or a guide for a new market
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
- description 上限 160 字元（code point），這是 Bing 的上限，Sotto guide 的 `summary` 也用同一個數字（`scripts/meta-description.mjs` 的 `DESCRIPTION_MAX`）。DingPOS 的 FAQ 文章沒有手寫摘要，description 由 `fitDescription()` 從答案開頭推導：段落與每個清單項目各算一個單位，依閱讀順序整個塞進上限，塞不下就停；以冒號結尾的引言一定接上下一個單位的開頭，所以不會只剩「折扣分兩層：」這種沒有答案的半句。單位本身超過上限時，依序在句尾、子句、字詞邊界切（切在後半段，避免只剩「Yes.」），非句尾才補 `…`。DingPOS 的靜態頁（首頁、pricing、privacy、terms、support）也經過同一個函式，翻譯語言的 `meta_description` 超長時在這裡收斂，不手改產生的翻譯檔。Sotto 的 description 全是手寫，超過上限時 build 失敗，回頭改文案。
- description 不設下限。Google 不看長度，只會換掉寫得差的 description；中日韓文用 Bing 的字數標準只能靠灌水達成。Bing WMT 的「title 太短」「description 太短」只在被點名的頁面確實缺資訊時才改，不為了消警告批次加長。
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
- 每種語言的內容都要完整，不退回英文（唯一例外是 DingPOS 的獲客文章，見 [§獲客文章](#獲客文章)）：DingPOS 與 Sotto 的 `copy-spa-pages.js` 在任一語言的 UI 字串少了或多了 en 的 key，或 FAQ／guide pack 的 slug 與 en 不同時讓 build 失敗。兩者都沒有 fallback 語言，缺 key 會直接顯示 key 名稱。Sotto 另外拒絕任何空字串。DingPOS 另外擋 en 是陣列、其他語言卻不是陣列的 key（頁面會把它當成空清單，整段默默消失）；空字串只允許在 key 名稱以 `_before`／`_after` 結尾的句子片段，它們夾住行內的價格，語序可能讓其中一邊是空的。
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

DingPOS registry 裡 `kind: translated` 的 29 種語言（ja、th、ko…）由 agent 從 en 翻譯，不從中文翻：zh-Hant 是 owner 寫的、zh-Hans 由它產生，兩者都不是翻譯來源。en 與 zh-Hant 說法不同時，翻譯跟著 en，差異記成給 owner 的 en finding。工具是 `scripts/l10n.mjs`（`npm run l10n -- …`），translator 是全域 agent `l10n-translator`，它讀本 repo 的合約 `.pi/l10n/translator.md`；reviewer 是 project agent `l10n-reviewer`。

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
- prerender 以 `prefers-reduced-motion: reduce` 擷取每一頁。用 `useStory` 演出的畫面（home 的 app 卡片、sotto 首頁的手機與功能卡）在這個條件下停在 step 0 的完成畫面，也就是第一次 render 的結果；否則 snapshot 會存到演到一半的狀態。曾經的症狀：sotto 首頁 hero 的打字 story 被存成「Cámara anal」，hydrate 時與完整文字對不上，en、es、pt-br、ar 四個首頁 hydration check 失敗（哪幾個語言中招取決於 snapshot 時機）。新的動畫元件要遵守同一條：reduced motion 下停在 render 的初始狀態。

## Sitemap

- repo 根目錄的 `sitemap.xml` 是 URL 成員的唯一來源。dingpos 與 sotto 的 build 會驗證 sitemap 裡自己的 URL 跟產出的頁面（每種語言）完全一致，多一個少一個都會讓 build 失敗。Sotto 的區塊手動維護；DingPOS 的區塊由 `node dingpos/scripts/copy-spa-pages.js --write-sitemap` 從頁面清單改寫（32 種語言、每種 64 頁，手寫一定會漏）。
- DingPOS 每種語言的子頁 `lastmod` 只看該語言自己的字串與 FAQ pack；語言首頁看整個 `dingpos/src`，但用 git pathspec `:(exclude)` 排除其他語言的 `locales/<code>` 與 `articles.<code>.js`（`scripts/generate-sitemap.mjs` `dingposRules`）。所以共用元件改了，每種語言的首頁都會更新日期，但翻譯或上線一種語言，不會改到其他語言任何一頁的日期。首頁曾經直接看整個 `dingpos/src`，結果連續上線約 30 種語言時，每個語言首頁的日期被推了約 30 次，內容卻沒變。
- 部署時由 `scripts/generate-sitemap.mjs` 輸出 `_site/sitemap.xml`，每個 URL 的 `lastmod` 取自產生該 route 的檔案的最後一次 git commit。這個 `lastmod` 不手填、不批次更新。CI checkout 必須用 `fetch-depth: 0`，shallow clone 會讓所有日期塌成同一天。
- Google：sitemap 在 GSC 提交一次就夠，之後 Google 依自己的頻率回頭讀，新頁面靠準確的 `lastmod` 被發現。網址沒變時重新提交沒有加速效果，Google 也在 2023 年停用了 sitemap ping，所以上線新頁不重新提交。例外：Google 還不常來抓的期間，每上線一篇獲客文章，就在 GSC 的 URL 檢查對它「要求建立索引」（有每日配額，一個月幾篇用不到上限）。停止的條件：Sitemap 報表的「上次讀取」固定每隔幾天更新，而且新文章幾天內就被收錄。原因：2026-07-25 提交的舊版 sitemap 之後再也沒被讀過，Google 實際知道的 DingPOS URL 不到 10 個（OH-87）。
- IndexNow 暫不接：Google 不支援，而它只解決「Bing 還沒發現或排程到」，解決不了「Bing 抓了但不收」。「Bing 收錄明顯遲緩」的判定：在 Bing WMT 的 URL 檢查抽查約 10 個 sitemap URL（各 app、新舊語言都有），已編製索引的不到八成，**且**未索引的多數是「已發現，但未編目」且發現已超過四週。兩者都成立才啟用；多數是「已編目但未索引」時，該查的是內容厚度，不是 IndexNow。不用 Site Explorer 的「已建立索引」數字判定：2026-10-24 它顯示 30／約 2.2K，同一天 URL 檢查抽查 11 個卻有 8 個已索引（包括 10-17 至 10-20 才上線的 bn、km），3 個「已發現，但未編目」（`/pikgeon/faq/` 9-26 發現、`/sotto/ko/guides/` 10-18、一篇 fi FAQ 10-19）。下次判定 2026-11-18；届時 `/pikgeon/faq/` 若仍未編目，先在 URL 檢查按「要求編製索引」。
- 啟用時用 CI 在 `wrangler deploy` 成功後提交這次有變動的 URL；key 是公開驗證檔（根目錄 `<key>.txt`），不是 secret；提交失敗不讓部署變紅。不用 Cloudflare Crawler Hints：它對 Worker static assets 會不會觸發沒有文件保證，也沒有觀測點。不靠 WMT 手動提交：新站配額對 2K 以上的 URL 沒有意義。

## Structured data 與 social meta

- JSON-LD 靜態寫在各 app 的 `index.html`：home 放 `Organization` + `WebSite`；各 app 放 `MobileApplication`，含 `Offer` / `AggregateOffer`。
- DingPOS 的每篇 support 文章與 guide 另有 `BreadcrumbList`（DingPOS → Support 或 Guides → 文章），Sotto 的每篇 guide 也有（Sotto → Guides → 文章，名稱與 URL 都是該語言的），由 `copy-spa-pages.js` 在 build 時寫進該 route 的 `<head>`（`addJsonLd` / `breadcrumbList`）。
- DingPOS 的每篇 guide 另有 `Article`（`guideArticle`）：`headline`、`description` 取 title 與 summary，`dateModified` 取 `checked`，因為 Google 要求標記的日期和頁面上顯示的「最後查核」一致；guide 沒有記錄首次發佈日，所以不寫 `datePublished`。`author` 與 `publisher` 是 Alu Studio，`@id` 和 home 的 `Organization` 相同；`image` 列出文中的產品截圖。
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
- 首頁 h1 不只寫品牌名：同名產品很多時，單獨的「Sotto」無法消歧。Sotto 首頁的 h1 是品牌加上含該語言 SWEET 詞的 tagline，視覺上仍是大字品牌加副標。

### 獲客文章

寫給還不認識產品的人，回答他們選工具之前就會搜的問題，不是操作說明（操作說明是 support／FAQ）。

- 每篇開頭 2–3 句直接回答標題，之後用 H2 分段，最後一段導回 app；標題用該語言實際的搜尋說法，不逐字翻譯。`summary` 同時是索引卡片文字與該頁的 description（160 字元內）。build 檢查每篇以段落開頭、至少一個 H2、related 都存在。
- Sotto（`/sotto/guides/<slug>/`）的題目是各國通用的人際問題，所以每種語言有同一組文章（同 slug、同順序），由 en 翻譯；題目瞄準產品 ASO 已驗證的關鍵字背後的真實問題（`~/Developer/alustudio/sotto/docs/marketing/aso-keywords.md`），網站與商店用同一組詞。內容來自 `sotto/src/data/guides/guides.<code>.js`，schema 寫在 `guides.en.js` 開頭。
- DingPOS（`/dingpos/<prefix>/guides/<slug>/`）的題目是經營成本與法規，費率、稅、支付品牌和規定每個國家都不同，所以文章以市場為單位寫，不翻譯：每篇標一個 `market`（例如 `TW`），只發在那個市場讀的語言底下。語言不等於市場：zh-Hant 同時是台灣與香港，en 是澳洲、美國、英國，一個市場的文章不能翻成另一個市場的版本。
  - 只有存在 `dingpos/src/data/guides/guides.<code>.js` 的語言有 guides 區（索引頁、文章、導覽列與 footer 的連結）；這是「每種語言的內容都要完整」的唯一例外。區塊的 UI 字串放在 pack 的 `ui`，不放 `translation.json`，因為後者每個 key 都要 32 種語言齊全。schema 寫在 `guides.zh-Hant.js` 開頭。
  - guide 頁不輸出 hreflang 與 `og:locale:alternate`：沒有其他語言有同一頁，不同市場的同主題文章也不是彼此的翻譯。語言切換器在 guide 頁連到該語言的 guides 索引，沒有 guides 的語言連到首頁。
  - zh-Hans 不由 zh-Hant 的 guides 產生（`gen-zh-hans.mjs` 不讀 guides），也不走 `npm run l10n`；大陸市場要寫，就寫一份 zh-Hans 的 pack。
  - 法律要求一般小店使用認證稅控收銀機（或登記過的 POS、稅控設備）的市場，目前不寫 guide（owner 2026-10-25）；在這之前已上線的（法、義、韓、巴、越、中、泰）結尾寫明 DingPOS 不是當地認證的收銀機，受規範時不要拿它記錄銷售。德國的 guide 已下架、URL 301 到 `/dingpos/de/`，DingPOS 也從德國 App Store 移除（owner 2026-10-26），因為 § 146a Abs. 1 Satz 5 AO 禁止在德國宣傳或流通不符 TSE 的記錄軟體。
  - support 文章會連回引用它的 guide：support 文章頁列出同語言裡內文連到它的 guide（區塊標題沿用 pack 的 `ui.related_title`），依據是 guide 內文的 `[label](/support/<slug>/)` 連結，不另設欄位。guide 只是外部進站的入口，從 support 文章這種已收錄、主題相關的頁面連過去，才能把站內權重導進來；所以每篇 guide 至少連到一篇說明相關功能的 support 文章，沒有的話 build 失敗。
  - 文中的費率、法規每篇都附 `sources`（連到原始來源）與 `checked`（查核日），頁面顯示「最後查核」；找不到官方來源的數字寫成「依合約」或區間，不寫成定價。文字裡的 `[label](/route/)` 是站內連結，build 檢查目標是該語言存在的頁面。
  - 文中的產品截圖（`image` block）必須是 DingPOS 的實機截圖，不用生成或手繪的 UI。檔案放在 `dingpos/public/guides/`，照 [performance §圖片](./performance.md#圖片) 做成 WebP：畫面上最寬渲染 480px（`GuideBlocks.jsx` 的 `sizes` 與 `guides.scss` 的 `.guide-figure` 要一起改），桌機檔寬約 1440px（原圖較小就用原尺寸），寬度超過 1080px 時另附同比例的 1080w `phone` 檔；block 寫明 `src` 的 `width` / `height`。
  - build 檢查 `image` block：檔案存在且是 WebP、`width` / `height` 是正整數且等於檔案實際尺寸、`phone` 檔是 1080px 寬且比例相同、`alt` 不為空、`caption` 不含連結。

## 每月回訪

每月一次：

- GSC Sitemap 報表的「上次讀取」日期與已發現網址數，判斷新文章是否還要手動要求建立索引（見 §Sitemap）。
- GSC 與 Bing Webmaster Tools 的曝光、點擊、索引頁數。Bing 的收錄率用 URL 檢查抽查估（Site Explorer 的數字嚴重落後），應至少八成；不到時照 §Sitemap 的 IndexNow 判定。
- Bing WMT 的 Recommendations 要點進去看「發生此錯誤的網頁」：首頁卡片寫「many pages」，實際可能只有一兩頁，而且常是改版前的舊掃描。改完的頁面在 URL 檢查按「要求編製索引」。
- Cloudflare AI Crawl Control 各 bot 的請求數變化。
- 在 ChatGPT、Perplexity、Google AI 手動查「Pikgeon」「Babbby」「Sotto」「DingPOS」，記錄回答與引用。
- 抽查 sitemap `lastmod` 是否和 git 歷史一致。
- 效能照 [performance §量測](./performance.md#量測) 量正式站，並更新 §目前基準。

## Related

- [hosting.md](./hosting.md) ← canonical origin、redirect、404 行為
- [performance.md](./performance.md) ← 字型、圖片、Lighthouse 量測與基準
