# alu-studio.com LCP / 效能調查報告

調查日期：2026-10-14 ｜ 量測對象：正式站 `https://alu-studio.com/<app>/`（commit `e21fd48`，OH-78 已上線）｜ 工具：Lighthouse 13.5.0 + Chrome for Testing 151.0.7922.47（headless）、puppeteer 25.4 自寫診斷腳本 ｜ 原始資料：當時存於 `/tmp/lcp-research/`，未保留；附錄的腳本用法供重現參考

---

## 結論（先講）

**「好幾秒」大部分是 Lighthouse mobile 的模擬條件造成的，不代表使用者真的等那麼久；但裡面藏了三個真的問題，其中一個是 bug。**

1. **數字本身正常。** Lighthouse mobile 模擬的是「Slow 4G（150ms RTT、1.6Mbps）+ 中階手機（4x CPU）」，官方說明這大約是 4G 連線最差的那 25%。這種條件下，任何有外部 CSS 的網站，光是 DNS + TCP + TLS + HTML + CSS 的 round trip 加傳輸，FCP 下限就在 1.5–2s 左右。正式站 mobile 分數其實比你本機量到的好：home 95、babbby 98、sotto 97，已經是綠燈；desktop 五個 app 都是 95–99；不節流（`provided`，從台灣實連）LCP 是 1.1–1.5s。
2. **pikgeon 有一個真的 CLS bug（0.411）**，3 次裡出現 2 次，分數會從 98 掉到 71。原因是 `.ios-view-image` 的 CSS 讓 OH-78 加上的 `width`/`height` 屬性失效，網路快的時候文字先 paint、圖片晚到，整個 hero 往下推 240px。真實使用者也會遇到。修法是改一兩行 CSS，**最值得先做**。
3. **home 和 dingpos 的 LCP 被 hero 的 opacity 進場動畫延後約 0.8–1s。** Chrome 不會把 opacity 0 的元素算進 LCP，要等它在可見狀態下重新 paint 才算。關掉動畫後，home 的 LCP 直接等於 FCP（1852ms vs 2844ms）。這個效果在 field data 也一樣存在。
4. **dingpos 另外被 `createRoot` 重繪多拖約 1s（lab）。** React 把 prerendered DOM 整棵換掉，新的 `p.hero-desc` 在 Manrope 載入後面積變大，被記成新的 LCP candidate，於是 Lighthouse 把整包 JS 的下載與執行都算進 LCP。這是 dingpos 唯一還在 85 分的主因。
5. **台灣 HiNet 使用者其實被 Cloudflare 路由到美國（DFW/SJC）**，同一條線連 `www.cloudflare.com` 走 TPE、RTT 31ms，連 alu-studio.com 是 RTT 135ms、TTFB 0.44–0.61s。這對台灣真實使用者的影響，可能比上面所有 lab 項目都大，但 Lighthouse 模擬看不出來。

**建議做的順序：** pikgeon CLS 修正 → LCP 元素拿掉 opacity 進場 → dingpos 改 `hydrateRoot`（或至少處理重繪）→ 語系 JSON lazy-load 與 dingpos 截圖 `srcset`。Critical CSS inline、PurgeCSS 這類「為了把 lab 分數從 95 推到 99」的項目，邊際效益低、風險不低，**不建議做**。

---

## 1. 這些數字代表什麼？

### 1.1 Lighthouse mobile 的模擬條件（官方來源）

- Network：「Latency: 150ms」「Throughput: 1.6Mbps down / 750 Kbps up」，並說明「They represent roughly the bottom 25% of 4G connections and top 25% of 3G connections (in Lighthouse this configuration is currently called "Slow 4G" but used to be labeled as "Fast 3G")」。—— [Lighthouse docs/throttling.md](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md)
- CPU：「a constant 4x CPU multiplier which moves a typical run in the high-end desktop bracket somewhere into the mid-tier mobile bracket」。—— 同上
- 預設的 simulated throttling 是「先用全速載一次，再用 Lantern 模型推算慢速網路下的時間」，官方自己承認「there is inherent inaccuracy」。—— 同上

### 1.2 「好」的門檻：LCP 2.5s 是 field p75，不是 lab

- Core Web Vitals：「sites should strive to have Largest Contentful Paint of 2.5 seconds or less … a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices」。—— [web.dev/articles/lcp](https://web.dev/articles/lcp)（Last updated 2025-09-04）、[web.dev/articles/vitals](https://web.dev/articles/vitals)
- 也就是說，**2.5s 是真實使用者（CrUX / RUM）第 75 百分位數的門檻**。Lighthouse 只是剛好把同一個數字拿來當 lab 評分曲線的 p10 控制點。
- Lighthouse 13 評分曲線（原始碼 `core/audits/metrics/*.js`）：

| 指標 | mobile p10（=90 分） | mobile median（=50 分） | desktop p10 | desktop median |
|---|---|---|---|---|
| LCP | 2500ms | 4000ms | 1200ms | 2400ms |
| FCP | 1800ms | 3000ms | 934ms | 1600ms |

  原始碼註解寫明 mobile LCP 這兩個點是「25th and 13th percentiles HTTPArchive」（2020 年資料）。換句話說，**mobile lab LCP 2.5s 大約等於 HTTP Archive 前 13% 的網頁**。—— [largest-contentful-paint.js](https://github.com/GoogleChrome/lighthouse/blob/main/core/audits/metrics/largest-contentful-paint.js)、[first-contentful-paint.js](https://github.com/GoogleChrome/lighthouse/blob/main/core/audits/metrics/first-contentful-paint.js)
- 分數區間：90–100 Good、50–89 Needs Improvement；「A "perfect" score of 100 is extremely challenging to achieve and not expected」。權重：TBT 30%、LCP 25%、CLS 25%、FCP 10%、SI 10%。—— [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)

### 1.3 Lab 與 field 的差距

- web.dev 的說法：lab 是冷快取、單一裝置、單一網路、單一地點；「Sites with well-optimized cache configurations and lots of repeat visitors may discover that their real-world LCP is much faster than their lab data indicates」；文中範例是 field p75 1.8s、lab 3.0s。—— [Why lab and field data can be different](https://web.dev/articles/lab-and-field-data-differences)
- 整體 web 現況：Web Almanac 2025 指出 mobile 有 62% 網站 LCP good、desktop 74%；mobile 的 LCP 元素有 76% 是圖片、23.7% 是文字。—— [Web Almanac 2025 Performance](https://almanac.httparchive.org/en/2025/performance)（published 2026-01-15）
- **本站 field data：拿不到。** PSI API 的共用配額已耗盡（觀察到：`Quota exceeded … Queries per day`），CrUX API 需要 key。推論：這個流量規模的站多半進不了 CrUX。**但站上已經自動注入 Cloudflare Web Analytics beacon**（觀察到：每頁都有 `beacon.min.js` 與 `/cdn-cgi/rum` 請求），Cloudflare dashboard → Web Analytics → Core Web Vitals 應該已經有真實使用者的 LCP/INP/CLS p75。這才是判斷「使用者實際體驗」的依據，建議去看。

### 1.4 同類型站的典型分數

沒找到「靜態行銷站 lab 分數分布」的官方統計，以下是推論：依上面的評分曲線，mobile 90+ 等於 LCP 約 2.5s 以內、TBT 低、CLS 近 0，已經在 HTTP Archive 前段班。Bootstrap + React SPA 架構、不做 SSR hydration 的行銷站，mobile 落在 80–95 是常態；要穩定 98+ 通常要零 JS 或極小 JS（Astro / 純靜態）。

---

## 2. 實際量測拆解

### 2.1 正式站分數總表（觀察到的）

**Mobile，simulated throttling（預設），3 次中位數**

| app | perf | FCP | LCP | SI | TBT | CLS | observed FCP / LCP（未節流） | LCP 元素 |
|---|---|---|---|---|---|---|---|---|
| home | 95 | 2.21s | 2.44s | 2.47s | 0 | 0 | 1090 / 1606ms | `h1.intro__title` |
| pikgeon | **71** | 1.90s | 3.44s | 2.55s | 0 | **0.411** | 1189 / 1189ms | `img.ios-view-image` |
| babbby | 98 | 1.88s | 2.08s | 2.12s | 0 | 0 | 960 / 960ms | `img.hero-screenshot` |
| sotto | 97 | 2.09s | 2.09s | 2.65s | 0 | 0.022 | 1187 / 1187ms | `p.hero-desc` |
| dingpos | 85 | 2.08s | **4.10s** | 2.38s | 0 | 0.001 | 985 / 1508ms | `p.hero-desc` |

pikgeon 逐次：71 / 98 / 71（CLS 0.411 / 0 / 0.411）。另外用 `--save-assets` 加跑 4 次：CLS 0.411 出現 3 次。

**對照條件（各 1 次）**

| app | desktop preset（perf / FCP / LCP） | mobile devtools throttling（perf / FCP / LCP） | mobile provided＝不節流（perf / FCP / LCP） |
|---|---|---|---|
| home | 98 / 0.82 / 0.87s | 94 / 1.91 / 2.93s | 100 / 0.82 / 1.40s |
| pikgeon | 98 / 0.79 / 0.97s | 89 / 2.99 / 2.99s | 100 / 1.11 / 1.11s |
| babbby | 98 / 0.80 / 1.03s | 95 / 2.42 / 2.42s | 100 / 1.24 / 1.32s |
| sotto | 99 / 0.80 / 0.80s | 90 / 2.92 / 2.92s | 100 / 1.20 / 1.23s |
| dingpos | 95 / 0.95 / 1.24s | 73 / 3.43 / **5.26s** | 100 / 0.90 / 1.46s |

`provided` 是從台灣經 HiNet 實連 Cloudflare 美國 colo、M 系列 Mac 不降速 CPU，可以視為「好網路 + 好手機」的上界。

**跟你本機 wrangler dev 數字的差異**：正式站 home 95 vs 本機 88、sotto 97 vs 76、babbby 98 vs 84。推論（未驗證）：本機 wrangler dev 沒有 Cloudflare edge 的 brotli 壓縮，sotto 的 CSS 原始 447KB、壓縮後 93KB，在 1.6Mbps 下差了將近 2 秒的傳輸量。之後量效能請一律量正式站。

### 2.2 資源組成（觀察到的，`curl` 正式站）

| app | HTML（br 後） | JS raw → br | CSS raw → br | 備註 |
|---|---|---|---|---|
| home | 8KB | 265KB → 87KB | 95KB → 19KB | |
| pikgeon | 16KB | 725KB → 213KB | 364KB → 51KB | JS 內含 16 個語系 JSON（raw 282KB，br 約 60KB；只留 en 約 4KB） |
| babbby | 7KB | 406KB → 131KB | 362KB → 49KB | |
| sotto | 8KB | 582KB → 182KB | 447KB → 93KB | JS 內含 12 個語系（br 約 34KB）；CSS 內含 Noto Sans TC 115 個 `@font-face`（br 約 28KB） |
| dingpos | 14KB | 635KB → 200KB | 472KB → 100KB | JS 內含兩語 FAQ（各約 17KB br）；CSS 同樣含 Noto Sans TC（br 約 28KB） |

共通組成：完整 Bootstrap CSS（br 約 23KB）、bootstrap-icons CSS 規則（raw 76KB、br 約 10.5KB）、`bootstrap.bundle.min.js`（br 約 21KB）、bootstrap-icons woff2 **134KB**（`font-display: block`，每個 app 實際只用 6–29 個 icon）。

Cloudflare 設定沒問題：hashed asset `max-age=31536000, immutable`、HTML `no-cache`、`content-encoding: br`、HTTP/2、TLS 1.3、`cf-cache-status: HIT`。

### 2.3 Lighthouse insights 摘要（mobile run 1，觀察到的）

| app | render-blocking | unused CSS | unused JS | main-thread | font-display insight |
|---|---|---|---|---|---|
| home | 1 CSS（21KB），估 FCP −100ms | 19KB | 40KB | 0.6s | bootstrap-icons，估 FCP −600ms |
| pikgeon | 1 CSS（55KB），估 0ms | 49KB | 82KB | 0.8s | 同上，−500ms |
| babbby | 1 CSS（52KB），估 0ms | 48KB | 68KB | 0.5s | 同上，−550ms |
| sotto | 1 CSS（99KB），估 FCP −200ms | 93KB | 87KB | 0.6s | 同上，−550ms |
| dingpos | 1 CSS（106KB），估 FCP −200ms | 99KB | 91KB | 0.8s | 同上，−700ms |

TBT 全部是 0。JS 執行（bootup）每個 app 都只有約 0.1s。**CPU 不是瓶頸，瓶頸在網路與 LCP 的記錄時機。**

font-display insight 的 500–700ms 是 Lighthouse 對 `font-display: block` 的理論估算。實際用 `--blocked-url-patterns='*bootstrap-icons*'` 擋掉這個字型重跑，FCP/LCP 沒有穩定改善（單次結果在雜訊範圍內）。所以我不把它當成大項。

### 2.4 LCP 花在哪裡：四個機制

LCP breakdown（Lighthouse 13 的 `lcp-breakdown-insight` 取自未節流的 trace）：

| app | TTFB | load delay | load duration | render delay |
|---|---|---|---|---|
| home | 569ms | — | — | **1037ms**（文字） |
| pikgeon | 663ms | 4ms | 735ms | 83ms |
| dingpos | 489ms | — | — | **1019ms**（文字） |
| sotto（desktop） | 498ms | — | — | 648ms |

TTFB 約 0.5–0.66s 大部分是跨太平洋的 RTT（見 §2.4.4）。render delay 的來源，我用 puppeteer 在 Lighthouse 同等節流下（562.5ms latency、1.44Mbps、4x CPU、412×823 viewport）用 `PerformanceObserver` 記錄每個 LCP candidate、layout-shift 來源，並用 `MutationObserver` 抓 React 清空 `#root` 的時間點，逐一分離出下面四個機制。腳本在 `/tmp/lcp-research/diag.mjs`。

#### 2.4.1 pikgeon：hero 圖片沒有保留空間 → CLS 0.411（bug）

觀察到（不節流、mobile UA，3 次中 2 次重現）：

```
t=1156  FCP / LCP = P.lead (文字)
t=1231  CLS 0.411  DIV.container y218 h410 → y173 h650；SECTION.feature-flow 被推出視窗
t=1346  React 清空 #root
t=1404  LCP = IMG.ios-view-image
```

根因：`pikgeon/src/assets/scss/HeroBanner.scss:92` 的 `.ios-view-image { max-height: 500px; width: auto; }`，加上 `.img-fluid` 的 `height: auto`，寬高都是 `auto`。`width="347" height="718"` 屬性推導出的 aspect-ratio 只有在至少一個維度已知時才有用，所以圖片載入前盒子高度是 0。

為什麼只有部分時候出現：只有「文字先 paint、圖片晚到」才會觸發。慢網路下 CSS 比 22KB 的圖片晚到，第一次 paint 時圖片已經在了，所以節流 run 不會出現。Lighthouse simulated 模式的 observed pass 是全速載入，所以會隨機踩到。真實使用者在好網路下也會踩到。

#### 2.4.2 home、dingpos：opacity 進場動畫延後 LCP

觀察到（節流，擋掉 JS 以排除 React 影響）：

| 條件 | home LCP（FCP） | dingpos LCP（FCP） |
|---|---|---|
| 正常 | 2844ms（1844） | 3740ms（2972） |
| 注入 `*{animation:none!important}` | **1852ms（1852）** | **2884ms（2884）** |
| `prefers-reduced-motion: reduce` | 2940ms（home 在 reduced-motion 下仍是 `fade 0.3s`） | 2876ms（dingpos 在 reduced-motion 下是 `animation: none`） |

home 的 `.intro__title` 用 `animation: rise 0.9s … 0.05s both`（從 `opacity: 0` 開始）；dingpos `.hero-copy > *` 用 `rise-in 0.6s` 加上逐個 delay，`p.hero-desc` 是第 4 個子元素，delay 165ms。

機制：Chrome 不會把 opacity 0 時的 paint 記成 LCP。opacity 動畫跑在 compositor，不會觸發 main-thread repaint，所以要等下一次 repaint 才補記。DebugBear 的實測：「Even after an element is faded in it still doesn't become an LCP candidate unless it is repainted.」—— [DebugBear: How CSS Opacity Animations Can Delay The LCP](https://www.debugbear.com/blog/opacity-animation-poor-lcp)；Chrome 的規則見 [LCP changes in M86](https://chromium.googlesource.com/chromium/src/+/master/docs/speed/metrics_changelog/2020_08_lcp.md)。這個行為在 CrUX / RUM 一樣成立，所以不只是 lab 假象。

#### 2.4.3 dingpos（以及 zh-TW 瀏覽器的 pikgeon）：`createRoot` 重繪產生新的 LCP candidate

觀察到（節流，注入 `animation:none`，JS 開啟）：

```
t=3564  FCP / LCP = P.hero-desc  size 40768
t=4506  React 清空 #root（createRoot 重繪）
t=4548  LCP = P.hero-desc  size 48672   ← 新節點，Manrope 已載入，文字框變大
```

擋掉 JS 時，同一頁在 Manrope swap 之後**沒有**產生新的 LCP entry，因為 Chrome 不會因為同一個元素換字型而重報。只有 React 換上新節點、而且新節點面積比目前的 LCP 大，才會重報。dingpos 剛好兩個條件都成立，Lighthouse（Lantern）就把 200KB JS 的下載與執行都算進 LCP 的依賴圖。

Lighthouse 對照（擋掉全部 JS，代表 hydrateRoot + 縮 JS 的效益上限）：dingpos LCP 4.10s → 3.01s、分數 85 → 93；剩下的 FCP 2.03s → LCP 3.01s 正好是 §2.4.2 的動畫。其他 app：home 2.44 → 1.79s；pikgeon、babbby、sotto 的 LCP 本來就約等於 FCP，沒有明顯變化。

**zh-TW 瀏覽器的特殊情況（觀察到）**：home、pikgeon、babbby、sotto 用 `i18next-browser-languagedetector`（localStorage → navigator），prerender 出來的是英文。模擬 `navigator.language = zh-TW` 時，pikgeon 先顯示英文 hero，JS 跑完才換中文，LCP 從 2956ms 被推到 4140ms（新的 IMG candidate 面積 143560 > 131920）。這群使用者就算改成 `hydrateRoot` 也會 hydration mismatch，React 會整棵退回 client render，等於沒有改善。

#### 2.4.4 台灣 HiNet 使用者被路由到美國 colo（真實使用者的固定成本）

觀察到（本機網路 AS3462 HiNet）：

| 目標 | colo | ping RTT | TCP | TTFB |
|---|---|---|---|---|
| `alu-studio.com` | **DFW / SJC**（`loc=TW`） | 133–140ms | 134–187ms | **436–610ms** |
| `www.cloudflare.com`、`speed.cloudflare.com` | **TPE** | 30–34ms | 33–35ms | 113–121ms |

Cloudflare Community 與 Reddit 有多篇回報：HiNet 使用者連 Free plan 網站時，常被導到 SJC / HKG / SIN，而不是 TPE，原因是 Free plan 的流量走成本較低的路徑。—— [Taiwan HiNet traffic is routed to SJC](https://community.cloudflare.com/t/taiwan-hinet-traffic-is-routed-to-sjc-causing-7-17-second-latency/952409)、[Free plan routing to the cheapest location（r/CloudFlare）](https://www.reddit.com/r/CloudFlare/comments/1kmaa76/do_cloudflare_limits_the_no_of_datacenters_in/)、[Cloudflare Proxy Free-tier is not usable in Taiwan?（r/CloudFlare）](https://www.reddit.com/r/CloudFlare/comments/1otl89w/cloudflare_proxy_freetier_is_not_usable_in_taiwan/)。

推論：本站很可能是 Free plan（沒有查 dashboard 確認）。這對台灣 HiNet 使用者每次冷連線多約 0.35–0.5s 的 TTFB，而且每個新連線都要付一次。Lighthouse simulated 模式用固定 150ms RTT 重算，所以看不出這件事。也有社群回報升級 Pro plan 仍然沒被導到 TPE，**升級不保證有效**。

### 2.5 其他觀察

- dingpos `shot-cashier.webp` 是 2240×1471、151KB，`fetchpriority="high"`。在 mobile 上它不是 LCP，卻跟 CSS / JS 搶頻寬；Lighthouse `image-delivery-insight` 估 mobile 可省 257KB。`logo.png`（16KB）是 navbar 與 hero 共用的 PNG。
- pikgeon prerendered HTML 的語言 `<select>` 在 JS 執行前顯示「繁體中文」（觀察到：Lighthouse filmstrip）。推論：React 透過 `.value` property 設定選中項目，不會序列化成 `selected` 屬性，所以 prerender 出來是第一個 option。影響小，列為 follow-up。
- sotto 在 zh-TW 下，Noto Sans TC 約 8s 才 swap 完（觀察到，CLS ≈ 0），不影響 LCP。

---

## 3. 改善空間（依 效益 / 成本 / 風險 排序）

| # | 項目 | 預估效益 | 成本 | 風險 | 動到的檔案 | 跟 repo 規則的關係 |
|---|---|---|---|---|---|---|
| 1 | **pikgeon hero 圖片保留空間** | CLS 0.411 → 0；mobile 分數不再隨機掉到 71（穩定約 98）；真實使用者不再看到 hero 跳動 | 極低（1–2 行 CSS） | 低 | `pikgeon/src/assets/scss/HeroBanner.scss` | 無衝突 |
| 2 | **LCP 元素不做 opacity 進場** | home LCP 觀察值 −~1.0s（2844 → 1852ms），lab 約 2.44 → 2.2s；dingpos 約 −0.77s。field LCP 同步改善 | 低 | 低（設計取捨：少一點動態） | `home/src/index.scss`（`.intro__title`）、`dingpos/src/assets/scss/home.scss`（`.hero-copy > *`） | 仍是純 CSS 動畫，符合「No JS-gated reveals」 |
| 3 | **dingpos 改 `hydrateRoot`**（其他 app 一起改） | dingpos lab LCP 約 −1.1s（4.10 → ~3.0s；加上 #2 後約 2.1s，分數約 85 → 95+）；英文使用者不再看到重繪閃一下 | 中 | 中 | 5 個 `main.jsx`；排除 hydration mismatch 來源 | `seo-aeo.md` §Prerender 已預留這個任務；FAQ 用 `hidden` 屬性留在 DOM，hydration 會保留 |
| 4 | **語系資料 lazy-load** | pikgeon JS br 213 → ~158KB、sotto 182 → ~152KB、dingpos −17KB；slow 4G 下透過頻寬競爭，FCP/LCP 約 −0.1～0.3s（推論） | 中 | 低～中 | `pikgeon/src/i18n.js`、`sotto/src/i18n.js`、`dingpos/src/data/faq/index.js` | prerender 要等語系載入完再 snapshot（現有的空殼檢查會擋） |
| 5 | **dingpos 截圖 `srcset` / `sizes`、logo 改 WebP** | mobile 少下載約 250KB；desktop LCP 圖約 −0.1～0.2s（推論） | 低～中 | 低 | `dingpos/scripts/build-screenshots.sh`、hero 元件、`public/` | 符合「WebP、約 3× 渲染尺寸」規則（mobile 用較小那張） |
| 6 | **Noto Sans TC `@font-face` 移出英文頁的 render-blocking CSS** | sotto / dingpos 英文頁 critical CSS 少約 28KB br（佔 28–30%），FCP 約 −0.1～0.15s | 中 | 中 | `sotto/src/main.jsx`、`dingpos/src/main.jsx`；dingpos zh-hant 的 HTML 注入 | 延續 OH-78「CJK 不進英文頁」的方向 |
| 7 | **bootstrap-icons 字型改 inline SVG 或子集化** | 每次冷載入少 134KB woff2 + 10.5KB br CSS；lab 對照沒有穩定改善 | 中～高（6–29 個 icon × 5 app） | 低 | 各 app 用到 `bi-*` 的元件 | 無衝突 |
| 8 | Bootstrap 只 import 需要的 SCSS partial / PurgeCSS | CSS 少約 15–40KB br，FCP 約 −0.1s | 中 | **中～高**（Bootstrap JS 動態加的 class 需要 safelist，漏了會壞樣式） | 各 app `all.scss`、vite config | 無直接衝突，但要逐頁驗證 |
| 9 | Critical CSS inline（beasties 跑在 prerender 之後） | slow 4G FCP 約 −0.2～0.4s | 中～高 | **中～高**（漏樣式 → FOUC / CLS；跟 createRoot 重繪互相干擾） | `scripts/prerender.mjs` 或 CI | 要跟 prerender 寫回 DOM 的流程整合 |
| 10 | Cloudflare 路由（HiNet → 美國） | 台灣 HiNet 使用者 TTFB 可能 −0.3～0.5s（不保證） | 金錢成本（Pro plan） | 結果不確定 | 無程式碼 | — |

### 各項細節

**#1 pikgeon CLS**：讓其中一個維度變成已知，aspect-ratio 才會生效。例如維持 `width: auto`、改成固定 `height: min(500px, …)`，或拿掉 `width: auto` 讓寬度取自屬性。修完要在不節流、mobile viewport 下驗證：layout-shift 不再出現 `DIV.container [218,410 → 173,650]`。

**#2 進場動畫**：只對 LCP 元素（home 的 `.intro__title`，dingpos 的 `.hero-title`、`.hero-desc`）拿掉 opacity，保留 `transform` 位移；其他元素可以繼續 fade。不建議用「從 `opacity: 0.01` 開始」這種讓 Chrome 提早記錄的技巧——那是在優化指標，不是在優化體驗，DebugBear 把它歸類為 "optimizing Web Vitals without improving performance"。

**#3 hydrateRoot**：
- 效益集中在 dingpos（語言由 URL 決定，prerender 與 client 一定一致）。英文使用者的 home / babbby / sotto / pikgeon 會少一次重繪閃動，但這幾個 app 的 lab LCP 本來就沒被重繪拖到。
- zh-TW 等非英文瀏覽器、或 localStorage 存了別的語言 / 主題（pikgeon `THEME_KEY`）的使用者會 mismatch。React 19 會退回 client render，行為等於現狀，只是 console 多一個 recoverable error。
- 要檢查的 mismatch 來源：`new Date().getFullYear()`（跨年時）、i18n 偵測、pikgeon dark theme、`<select>` value。要在 CI 加一個「hydration 時沒有 recoverable error」的檢查，才算真的落地。
- 治本的做法是把 home / pikgeon / babbby / sotto 也改成 dingpos 那種 URL 決定語言（`/zh-hant/`）。這是 SEO / 架構層級的大改，屬於另一個任務。

**#4 語系 lazy-load**：`i18n.init` 之前用 dynamic import 只載入偵測到的語言，`await` 完再 render。代價是語系檔多一個請求（同一條 HTTP/2 連線，約 1 RTT）。dingpos FAQ 依 `routerBasename` 只載入當前語言。

**#6 Noto Sans TC**：dingpos 語言由 URL 決定，可以只在 zh-hant 頁面載入 Noto 的 CSS。sotto 用 navigator 偵測語言，只能在偵測到中文後動態載入，否則英文頁會缺字型（fallback 到系統 CJK 字型，可接受）。

---

## 4. 結論：哪些值得做、哪些不值得

**值得做**
- **#1 pikgeon CLS**：真 bug，影響真實使用者，修改成本極低。最優先。
- **#2 LCP 元素拿掉 opacity 進場**：成本低，對 field LCP 也有效（home 約 −1s）。
- **#3 dingpos 的重繪問題**：dingpos 是唯一還沒到 90 的 app（排除 pikgeon 的 bug 之後）。`hydrateRoot` 是治本做法，而且 spec 已經把它列成獨立任務。建議先只改 dingpos、加上 hydration error 檢查，驗證沒問題再推到其他 app。
- **#5 dingpos 截圖 `srcset`**：低風險，mobile 省約 250KB，符合現有圖片規則的精神。
- **去看 Cloudflare Web Analytics 的 Core Web Vitals**：beacon 已經在收資料，那才是「使用者實際體驗」的答案。

**可以做，但效益普通**
- #4 語系 lazy-load、#6 Noto 拆分：各自約 0.1–0.3s，主要改善慢網路下的頻寬競爭。適合跟其他 i18n 工作一起做。

**不建議（邊際效益低）**
- #7 bootstrap-icons 換 SVG：lab 對照看不到穩定改善，工程量大。
- #8 PurgeCSS、#9 critical CSS inline：目標是把 95 推到 99，但有漏樣式、FOUC 的風險。desktop 已經 95–99，mobile 修完 #1–#3 後應該全部 ≥ 90（推論）。
- #10 為了台灣路由升級 Pro plan：社群回報升級後仍不保證走 TPE。先用 Web Analytics 確認台灣使用者的 field LCP 是否真的超標，再決定。

**剩下的不確定**
- 沒有 field data（PSI 配額耗盡、CrUX 需要 key），真實使用者的 p75 未知。
- 修完 #2 / #3 後的分數是依「擋掉 JS / 注入 `animation:none`」的對照實驗推估，實際改完還要重量。
- 本機 wrangler dev 數字偏差的原因（沒有 brotli）是推論，沒有驗證。

---

## 附錄：資料檔與重現方式

`/tmp/lcp-research/`：
- `m-<app>-{1,2,3}.json`：mobile simulated；`d-*`：desktop；`dt-*`：mobile devtools throttling；`p-*`：mobile provided
- `xi-*`：擋 bootstrap-icons 字型；`xj-*`：擋全部 JS
- `pk-trace-{1..4}.json` + `pk-trace-1-0.trace.json`：pikgeon CLS trace
- `summarize.py`：產生上面的中位數表（`python3 summarize.py m d dt p xi xj`）
- `diag.mjs`：LCP candidate / layout-shift / `#root` 重繪時間軸。用法：`node diag.mjs <app> throttle|none [blockRegex]`；環境變數 `NOANIM=1`、`RM=1`、`UA=1`、`ZH=1`
- `lang.mjs`：zh-TW 語言切換驗證；`*.html` / `*.css` / `*.js`：正式站抓下來的檔案
