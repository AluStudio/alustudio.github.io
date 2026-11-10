---
summary: Page-speed rules for alu-studio.com — self-hosted fonts, image format and sizing, how to measure Lighthouse and read lab numbers, and the current baseline
read_when:
  - Adding or changing a webfont, an in-page image, or a hero entrance animation
  - Running Lighthouse or judging whether a page is fast enough
  - Comparing a new measurement against the recorded baseline
---

# 效能

## 字型

- Webfont 一律透過 `@fontsource` / `@fontsource-variable` 自託管，在各 app 的 `main.jsx` import。variable package 的 family 名稱是 `"<Font> Variable"`。原因：`fonts.googleapis.com` 的 CSS 是 render-blocking 的第三方請求，光 Noto Sans TC 那份就佔掉約 2.7s 的模擬 FCP。
- CJK package 依 unicode-range 切成上百個 slice，瀏覽器只下載頁面用到的字所在的 slice。英文頁上只要出現幾個中文字，就會多抓幾百 KB。所以語言 `<select>`（選項是「繁體中文」這類原生名稱）用 system font stack；英文頁上的中文字不要落在 Noto Sans TC 這個 family。
- sotto 的正文 family 由 `--sotto-font-text`（`sotto/src/index.css`）依頁面語言決定：zh-Hant 用自託管的 Noto Sans TC；ja、ko、zh-Hans 頁改用系統字型（Hiragino / Apple SD Gothic Neo / PingFang 等），因為 Noto Sans TC 會用繁中字形畫日文與簡中，系統字型又不必下載任何 slice。
- sotto 的 en 與其他拉丁、西里爾、阿拉伯文頁面用 `"Sotto Text"`：Noto Sans TC 自己的 latin、latin-ext、cyrillic、vietnamese 四支檔案，但 `unicode-range` 扣掉它畫成全形的標點（`§ ± ¶ · × ÷ ‘ ’ “ ” • … ↑ ↓ ∕ ˉ †`），以及德文的下引號 `‚ „`，這些字交給 system-ui。下引號本身是比例寬度，但留在 Noto 的話，德文的 `„…“` 會一半 Noto、一半 system-ui，同一對引號造型不同。原因：Noto Sans TC 的彎引號與 `·` 寬 1em，英文頁的 “Clear app data” 曾被畫成全形；換掉整個字型堆疊會改變全站拉丁字母的字形。`src` 引用的是 `@fontsource-variable/noto-sans-tc/files/` 裡的同一支檔案，Vite 產出的 URL 跟 fontsource 自己的 `@font-face` 相同，不會多下載。這些頁面也完全不經過 Noto Sans TC 的 CJK slice：它的 `unicode-range` 宣稱涵蓋部分阿拉伯字母，實際卻沒有字形，ar 頁面曾因此白白多下載三支 slice。
  - 升級 fontsource 時，四個 `@font-face` 的 `unicode-range` 要跟 package `index.css` 的 named subset 一起更新（扣掉全形字的方法：比對各檔案 `hmtx` 寬度等於 1000 的字）。檔名改了的話，`sotto/vite.config.js` 的 `failOnUnresolvedFontUrl` 會讓 build 失敗，因為 Vite 對解析不到的 CSS `url()` 只會警告。
- dingpos 的 CJK family 由 `--dp-font-cjk`（`dingpos/src/index.css`）依頁面語言決定：英文、繁中與非 CJK 語言的頁面用 Noto Sans TC，簡中頁用 Noto Sans SC，日文與韓文頁用系統字型（同 sotto 的 stack）。原因：同一個漢字在繁中與簡中字型的字形不同，Noto Sans TC 也會用繁中字形畫日文。SC 的 `@font-face` CSS 只在 `lang="zh-Hans"` 的頁面由 `main.jsx` 用 dynamic import 載入；prerender 會把它注入的 `<link>` 寫進 HTML，瀏覽器解析時就會抓，不必等 JS。全域 import 會讓每一頁多一份約 110 KB（未壓縮）的 render-blocking CSS。
- home 只自託管 Geist（`@fontsource-variable/geist`，涵蓋拉丁、西里爾與越南文）；中日韓文字一律交給系統字型（PingFang、Hiragino、Apple SD Gothic Neo 等），不載 CJK webfont。app 示意畫面裡的 serif 與等寬字也用系統字型（`ui-serif`、`ui-monospace`），不另外下載。
- 圖示用 inline SVG（home、dingpos 與 babbby 用 `@phosphor-icons/react`），不用 icon font。bootstrap-icons 的 woff2 一支約 131 KB，不管頁面用了幾個圖示都要整支下載；home 改用 SVG 後，字型傳輸量從 180 KB 降到 29 KB。pikgeon、sotto 仍載 bootstrap-icons。
- babbby 只自託管 Manrope（`@fontsource-variable/manrope`，涵蓋拉丁、西里爾、希臘與越南文）；中日韓文字交給系統字型，由 `--bb-font-cjk`（`babbby/src/index.css`）依頁面語言挑繁中、簡中、日文或韓文的字型，不載 CJK webfont。app 示意畫面用 app 自己的系統字型（`ui-serif` 的 New York 標題、`system-ui` 內文），不另外下載。
- dingpos 的翻譯語言不加 webfont：拉丁、西里爾、希臘與越南文由 Manrope 涵蓋；泰、高棉、寮、喬治亞、孟加拉與印地文交給系統字型（iOS、Android、Windows、macOS 都內建），不下載任何字型。只有在實機截圖出現豆腐字時，才改成自託管那一種文字的 Noto。

## 圖片

- 頁面上的圖片用 WebP，尺寸約為最大渲染尺寸的 3 倍（原圖比這個小就用原尺寸）。QR code 用 lossless WebP。PNG 只留給平台規定的用途：favicon、apple-touch-icon、og-image。
- 同一張圖在手機與桌機的渲染寬度差很多時（例如 dingpos 截圖：手機約 350px、桌機約 1100px），用 `srcset` 加 `sizes` 另外提供手機版，寬度約為手機渲染寬度的 3 倍（dingpos 用 1080w），讓手機不必下載桌機尺寸。`sizes` 要跟 CSS 版面一起改，算錯時瀏覽器會選到過大或過小的檔案。
- 每個 `<img>` 帶 `width` / `height` 屬性，讓瀏覽器在圖片到達前先保留空間。只有在 CSS 至少決定一個維度時，屬性推導出的 aspect-ratio 才有作用；寬高都是 `auto` 時（例如 `max-height` 加 `width: auto`），盒子高度仍是 0，圖片晚到就會推動版面。

## 量測

- 量正式站，不量本機 `wrangler dev`。本機沒有 Cloudflare edge 的 brotli 壓縮，同一個 app 的分數會差 10–20 分。
- 用 `npx lighthouse https://alu-studio.com/<app>/ --form-factor=mobile`，每個 app 跑 3 次取中位數，同時看每一次的 CLS：layout shift 只在部分 run 出現時，中位數會把它藏起來。
- 每次量測都同時量一個這次沒改動的 app 當對照組，交錯執行。量測機器的背景負載（模擬器、瀏覽器）會讓 Lighthouse 量到「資源都到了，卻晚一秒以上才 first paint」，連帶墊高模擬出的 FCP / LCP，所有 app 一起變慢。對照組也變慢時，數字反映的是環境，不寫進基準表。判斷某次改動有沒有 regression，用 A/B：同一個本機靜態 server、同一時段，交錯量改動前後的 build；本機沒有壓縮，只看前後差，不看絕對值。
- Lab data 用本機 Lighthouse 量，才能照上面的方法交錯量對照組、和 §目前基準比較。PSI 只適合抽查：免 key 的配額通常已經耗盡，有 key 的機器見 AGENTS.md §SEO skills。真實使用者的數字看 Cloudflare dashboard → Web Analytics → Core Web Vitals：每頁都已自動注入 beacon。

## 解讀

- Lighthouse mobile 模擬的是 Slow 4G（150ms RTT、1.6Mbps）加 4x CPU 降速，大約是 4G 連線最差的 25%。在這個條件下，FCP / LCP 顯示 2–4 秒是常態，不代表一般使用者要等這麼久。
- Core Web Vitals 的「LCP ≤ 2.5s」是真實使用者第 75 百分位數的門檻，不是 lab 門檻。Lighthouse mobile 的 LCP 評分曲線是 2.5s = 90 分、4.0s = 50 分。
- Opacity 從 0 開始的進場動畫，會把 LCP 延後到元素在可見狀態下重新 paint 的時候，在真實使用者身上也一樣。home、dingpos 與 babbby 的 hero 目前就是這樣，各多約 1s。
- `createRoot` 會把 prerendered DOM 整棵換掉。新節點比原本的 LCP 元素大時，Chrome 會記一個新的 LCP，整包 JS 的下載與執行就被算進 LCP。dingpos 與 sotto 已改用 `hydrateRoot` 原地保留節點；home、pikgeon 仍是 `createRoot`，目前它們的 lab LCP 沒有被重繪拖到，但訪客語言跟 prerender 的英文不同時，換成另一種語言的新節點仍可能記下新的 LCP（見 [seo-aeo §Prerender](./seo-aeo.md#prerender)）。

## 目前基準

正式站，Lighthouse 13.6 mobile simulated throttling，五個 app 交錯量 3 輪，每個指標取 3 次的中位數，2026-11-10（babbby 改版上線後）量測。重新量測時直接更新這張表。

| app | perf | FCP | LCP | CLS | LCP 元素 | desktop perf |
|---|---|---|---|---|---|---|
| home | 98 | 1.06s | 1.22s | 0 | `h2.section__title` | 100 |
| pikgeon | 93 | 1.25s | 3.20s | 0 | `img.img-fluid` | 99 |
| babbby | 98 | 1.09s | 2.28s | 0 | `p.hero__eyebrow` | 99 |
| sotto | 99 | 1.55s | 1.55s | 0 | `p.hero__desc` | 99 |
| dingpos | 95 | 1.43s | 2.13s | 0.007 | `img`（iPad 結帳截圖） | 99 |

- 五個 app 的 FCP 一起比 2026-10-14 的上一版基準（Lighthouse 13.5）快約 0.8s，連沒有改動 FCP 路徑的 app 也一樣，所以這是量測版本或環境的差異，不是網站變快。拿新數字比較時，只跟這張表比，不跟更早的紀錄比。
- LCP 在 run 之間會差到 1s 以上，原因是 LCP 元素會換：pikgeon 與 dingpos 在 hero 文字和截圖之間換，home 只有 1 次 run 記到元素。單次 run 的 LCP 不能當 regression 的證據，要看 3 次的中位數。
- pikgeon 改用固定高度的 hero 圖片後，3 次 run 的 CLS 都是 0，上一版的 0.411 已經消失。
- babbby 的 hero 截圖換成重繪的 app 畫面後，LCP 元素從 `img.hero-screenshot` 變成 hero 文字。文字進場的 appear 動畫從 opacity 0 開始（見 §解讀），所以 LCP 比 FCP 晚約 1.2s；perf 和改版前一樣是 98。

## Related

- [seo-aeo.md](./seo-aeo.md#每月回訪) ← 每月回訪清單包含效能量測
- `docs/research/lcp-investigation.md` ← 2026-10 LCP 調查報告：量測拆解、四個延遲機制、改善項目的效益與成本排序
