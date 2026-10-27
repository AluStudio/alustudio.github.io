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
- sotto 的 CJK family 由 `--sotto-font-cjk`（`sotto/src/index.css`）依頁面語言決定：en、zh-Hant 與其他拉丁、西里爾、阿拉伯文頁面用自託管的 Noto Sans TC；ja、ko、zh-Hans 頁改用系統字型（Hiragino / Apple SD Gothic Neo / PingFang 等）。原因：Noto Sans TC 會用繁中字形畫日文與簡中，系統字型又不必下載任何 slice。
- dingpos 的 CJK family 由 `--dp-font-cjk`（`dingpos/src/index.css`）依頁面語言決定：英文、繁中與非 CJK 語言的頁面用 Noto Sans TC，簡中頁用 Noto Sans SC，日文與韓文頁用系統字型（同 sotto 的 stack）。原因：同一個漢字在繁中與簡中字型的字形不同，Noto Sans TC 也會用繁中字形畫日文。SC 的 `@font-face` CSS 只在 `lang="zh-Hans"` 的頁面由 `main.jsx` 用 dynamic import 載入；prerender 會把它注入的 `<link>` 寫進 HTML，瀏覽器解析時就會抓，不必等 JS。全域 import 會讓每一頁多一份約 110 KB（未壓縮）的 render-blocking CSS。
- home 只自託管 Geist（`@fontsource-variable/geist`，涵蓋拉丁、西里爾與越南文）；中日韓文字一律交給系統字型（PingFang、Hiragino、Apple SD Gothic Neo 等），不載 CJK webfont。app 示意畫面裡的 serif 與等寬字也用系統字型（`ui-serif`、`ui-monospace`），不另外下載。
- 圖示用 inline SVG（home 用 `@phosphor-icons/react`），不用 icon font。bootstrap-icons 的 woff2 一支約 131 KB，不管頁面用了幾個圖示都要整支下載；home 改用 SVG 後，字型傳輸量從 180 KB 降到 29 KB。pikgeon、babbby、sotto、dingpos 仍載 bootstrap-icons。
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
- Opacity 從 0 開始的進場動畫，會把 LCP 延後到元素在可見狀態下重新 paint 的時候，在真實使用者身上也一樣。home 與 dingpos 的 hero 目前就是這樣，各多約 1s。
- `createRoot` 會把 prerendered DOM 整棵換掉。新節點比原本的 LCP 元素大時，Chrome 會記一個新的 LCP，整包 JS 的下載與執行就被算進 LCP。dingpos 與 sotto 已改用 `hydrateRoot` 原地保留節點；home、pikgeon、babbby 仍是 `createRoot`，目前它們的 lab LCP 沒有被重繪拖到，但訪客語言跟 prerender 的英文不同時，換成另一種語言的新節點仍可能記下新的 LCP（見 [seo-aeo §Prerender](./seo-aeo.md#prerender)）。

## 目前基準

正式站，Lighthouse 13.5 mobile simulated throttling，3 次中位數，2026-10-14（OH-78 上線後）量測。重新量測時直接更新這張表。pikgeon hero 保留空間、dingpos 改 `hydrateRoot` 與手機版截圖、home 改版之後，這張表已經過時，部署後需重量。

| app | perf | FCP | LCP | CLS | LCP 元素 | desktop perf |
|---|---|---|---|---|---|---|
| home | 95 | 2.21s | 2.44s | 0 | `h1.intro__title` | 98 |
| pikgeon | 71 | 1.90s | 3.44s | 0.411 | `img.ios-view-image` | 98 |
| babbby | 98 | 1.88s | 2.08s | 0 | `img.hero-screenshot` | 98 |
| sotto | 97 | 2.09s | 2.09s | 0.022 | `p.hero-desc` | 99 |
| dingpos | 85 | 2.08s | 4.10s | 0.001 | `p.hero-desc` | 95 |

- sotto 2026-10-17（OH-88 前）另量到 perf 89、LCP 2.9s、Accessibility 69。OH-88 上線後正式站 Accessibility 100、SEO 100（6 次皆同）；perf 只量到受背景負載污染的數字（對照組 dingpos、babbby 同時一起變慢），表中 sotto 一列待乾淨環境重量。本機 A/B（OH-88 前 vs 後）：LCP 7.73s → 7.4s、JS 569KB → 483KB，沒有 regression。

- pikgeon 的 CLS 0.411 是 hero 圖片沒有保留空間（見 §圖片），3 次 run 中出現 2 次，不出現時分數是 98。已改成固定 `height: 500px` 修正。
- dingpos 的 LCP 被 hero 進場動畫和 `createRoot` 重繪各拖約 1s（見 §解讀）。重繪的部分已改 `hydrateRoot` 消除，進場動畫保留。
- home 改版（Geist、SVG 圖示、app 示意畫面）上線前的本機 A/B：同一個 `python3 -m http.server`、Lighthouse 13.5 mobile，改版前後與對照組 babbby 各 3 次交錯量測，對照組 3 次數值相同。中位數 perf 77 → 84、FCP 3.90s → 3.30s、LCP 4.14s → 3.47s，CLS 前後皆為 0；傳輸量 557 KB → 489 KB（字型 180 → 29 KB、CSS 93 → 30 KB，JS 259 → 372 KB、HTML 8 → 40 KB）。本機 LCP 元素從 `h1.intro__title` 變成 `h2.section__title`。本機沒有壓縮，只看前後差。2026-10-27 部署後正式站 3 次中位數：home mobile perf 91、FCP 2.46s、LCP 2.59s（`h2.section__title`），CLS 3 次皆 0，desktop 99；但同時段對照組 babbby 從表中的 98 掉到 83（LCP 3.60s），數字反映的是環境，依 §量測 不寫進表，home 一列待乾淨環境重量。

## Related

- [seo-aeo.md](./seo-aeo.md#每月回訪) ← 每月回訪清單包含效能量測
- `docs/research/lcp-investigation.md` ← 2026-10 LCP 調查報告：量測拆解、四個延遲機制、改善項目的效益與成本排序
