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

## 圖片

- 頁面上的圖片用 WebP，尺寸約為最大渲染尺寸的 3 倍（原圖比這個小就用原尺寸）。QR code 用 lossless WebP。PNG 只留給平台規定的用途：favicon、apple-touch-icon、og-image。
- 每個 `<img>` 帶 `width` / `height` 屬性，讓瀏覽器在圖片到達前先保留空間。只有在 CSS 至少決定一個維度時，屬性推導出的 aspect-ratio 才有作用；寬高都是 `auto` 時（例如 `max-height` 加 `width: auto`），盒子高度仍是 0，圖片晚到就會推動版面。

## 量測

- 量正式站，不量本機 `wrangler dev`。本機沒有 Cloudflare edge 的 brotli 壓縮，同一個 app 的分數會差 10–20 分。
- 用 `npx lighthouse https://alu-studio.com/<app>/ --form-factor=mobile`，每個 app 跑 3 次取中位數，同時看每一次的 CLS：layout shift 只在部分 run 出現時，中位數會把它藏起來。
- 免 key 的 PSI 配額通常已經耗盡，所以用本機 Lighthouse 量 lab data。真實使用者的數字看 Cloudflare dashboard → Web Analytics → Core Web Vitals：每頁都已自動注入 beacon。

## 解讀

- Lighthouse mobile 模擬的是 Slow 4G（150ms RTT、1.6Mbps）加 4x CPU 降速，大約是 4G 連線最差的 25%。在這個條件下，FCP / LCP 顯示 2–4 秒是常態，不代表一般使用者要等這麼久。
- Core Web Vitals 的「LCP ≤ 2.5s」是真實使用者第 75 百分位數的門檻，不是 lab 門檻。Lighthouse mobile 的 LCP 評分曲線是 2.5s = 90 分、4.0s = 50 分。
- Opacity 從 0 開始的進場動畫，會把 LCP 延後到元素在可見狀態下重新 paint 的時候，在真實使用者身上也一樣。home 與 dingpos 的 hero 目前就是這樣，各多約 1s。
- `createRoot` 會把 prerendered DOM 整棵換掉。新節點比原本的 LCP 元素大時，Chrome 會記一個新的 LCP，整包 JS 的下載與執行就被算進 LCP（見 [seo-aeo §Prerender](./seo-aeo.md#prerender)）。

## 目前基準

正式站，Lighthouse 13.5 mobile simulated throttling，3 次中位數，2026-10-14（OH-78 上線後）量測。重新量測時直接更新這張表。

| app | perf | FCP | LCP | CLS | LCP 元素 | desktop perf |
|---|---|---|---|---|---|---|
| home | 95 | 2.21s | 2.44s | 0 | `h1.intro__title` | 98 |
| pikgeon | 71 | 1.90s | 3.44s | 0.411 | `img.ios-view-image` | 98 |
| babbby | 98 | 1.88s | 2.08s | 0 | `img.hero-screenshot` | 98 |
| sotto | 97 | 2.09s | 2.09s | 0.022 | `p.hero-desc` | 99 |
| dingpos | 85 | 2.08s | 4.10s | 0.001 | `p.hero-desc` | 95 |

- pikgeon 的 CLS 0.411 是 hero 圖片沒有保留空間（見 §圖片），3 次 run 中出現 2 次，不出現時分數是 98。已改成固定 `height: 500px` 修正。
- dingpos 的 LCP 被 hero 進場動畫和 `createRoot` 重繪各拖約 1s（見 §解讀）。

## Related

- [seo-aeo.md](./seo-aeo.md#每月回訪) ← 每月回訪清單包含效能量測
- `docs/research/lcp-investigation.md` ← 2026-10 LCP 調查報告：量測拆解、四個延遲機制、改善項目的效益與成本排序
