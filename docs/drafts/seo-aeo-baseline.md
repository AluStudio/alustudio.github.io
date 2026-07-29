---
summary: T0 baseline recording sheet — must be filled in before the aeo-seo branch is merged
read_when:
  - Recording the pre-deploy baseline for the SEO/AEO work
  - Comparing 30-day results after merge
---

# T0 基線記錄表

**在 merge `aeo-seo` 之前填完。** merge 後網站立刻改變，屆時再記的數字已經是「後」，永久失去對照組。

填法：把每個「填」欄換成實際數字或截圖路徑，記下當天日期。不確定或查不到就寫 `n/a` 並註明原因——空著會讓 30 天後無法判斷是「沒變」還是「沒記」。

記錄日期：________　執行人：________

實作與決策脈絡見 [seo-aeo-optimization.md](./seo-aeo-optimization.md)。

---

## A. 帳號類設定（需要登入，無法自動化）

| 項目 | 動作 | 狀態 |
|------|------|------|
| Bing Webmaster Tools | 驗證 `alu-studio.com` 網域 | 填 |
| Bing WMT | 提交 `https://alu-studio.com/sitemap.xml` | 填 |
| Google Search Console | 完成 A2 帳號移轉，確認網域已驗證 | 填 |
| GSC | 提交同一份 sitemap | 填 |
| Cloudflare AI Crawl Control | 截圖目前設定（截圖路徑） | 填 |

兩邊都請用**同一個長期帳號**（見 A2），別再分岔。

Bing 特別重要：ChatGPT 的三條無 JS 取得路徑中，有一條就是 Bing 索引。

---

## A2. GSC 帳號歸屬（已完成，2026-07-27）

**結果：所有驗證憑證都屬於 Alu Studio 帳號，個人帳號已移除。**

決定性證據：在 Alu Studio 帳號下重新下載驗證檔，得到的檔名與內容與 repo 既有那兩個 **byte-identical**。HTML 驗證權杖綁的是**帳號**（同一帳號跨資源共用同一檔名——這也是為何根目錄與 `sotto/public/` 用的是同一個檔），因此檔名相同即證明歸屬相同。

背景，值得記住：GSC 驗證**不是排他性的**，多個帳號可以同時驗證同一個資源，官方明言「每項資源的已驗證擁有者沒有上限」，也完全不影響 SEO。所以這類事不是「搞砸了要補救」，只是順序問題：先加後減。

### 後續追蹤（兩項）

1. 官方警告：已驗證擁有者若權杖仍在，移除後會重新取得存取權。既知憑證全數屬 Alu Studio，理論上無憑證可供個人帳號回復，但幾天後回「使用者和權限」確認一次它沒有重新出現。
2. Domain property 目前顯示「驗證方法：未知」。到「設定 → 擁有權驗證」新增一個明確的 DNS 方法（Google 對話框本身也這麼建議）。做完這步，repo 裡那兩個 HTML 檔就可以安心移除。

### 舊 property：已刪除

`https://alustudio.github.io/sotto/` 是 2026-04-29 GitHub Pages 時代建的（驗證檔 commit `6e7d0af`），遷移（2026-07-25）後該網址全面 301，GSC 判定驗證失效。**未重新驗證，直接在 GSC 刪除。**

不重驗的理由：該網址已無內容，全數 301 到新網域；Domain property 已涵蓋全站（含 `/sotto/`）；而且 `alustudio.github.io` 是 `github.io` 的子網域，無 DNS 控制權，只能靠 HTML 檔驗證，等於永遠依賴 Google 願意跟隨 301——持續的脆弱點換零價值。

相關：Change of Address 已於遷移時評估並放棄，見 [cloudflare-migration.md](./cloudflare-migration.md)。舊站 301 永不拆除是排名波動的主要保障。

### 現有驗證憑證（已查證，全數屬 Alu Studio 帳號）

| 憑證 | 位置 | 驗證範圍 |
|------|------|----------|
| HTML 檔 `google9c954b37d1869b6e.html` | repo 根目錄 | `https://alu-studio.com/` |
| 同一個 HTML 檔 | `sotto/public/` | `https://alu-studio.com/sotto/` |
| DNS TXT `google-site-verification=1ihDEQ...` | Cloudflare DNS | 整個網域（Domain property）|

### 結果：不需要搬遷

原本寫了一套「先加後減」的搬遷流程（先把 Alu Studio 加為擁有者 → 確認可存取 → 自行驗證 → 才移除舊帳號）。實際查證後發現**根本不必**：所有憑證本來就屬 Alu Studio 帳號，個人帳號並未持有任何權杖。

若未來真的需要換帳號，流程仍是那四步，重點只有一個：**絕對不要先刪舊帳號的憑證**，先確保新帳號已獨立驗證成功。

### 網域資源驗證的一個重要性質

**Domain property 一次涵蓋** http/https、apex 與所有子網域、所有路徑（含 `/sotto/`），這是它比網址前置字元資源好用的原因。

官方重點：**DNS 是驗證網域資源的唯一方法**，HTML 檔與 HTML 標記「不得用於網域資源」。另外「如果你針對網址前置字元資源使用這個方法，系統也會自動驗證網域資源」。

**實際結果**：Alu Studio 帳號建網域資源時直接跳「已自動驗證擁有權 / 驗證方法：未知」，**沒有**發新 TXT，DNS 也沒新增筆數。來源就是既有的 `1ihDEQ...`。

由此可推定憑證歸屬：

| 憑證 | 屬於 | 驗證的資源 |
|------|------|--------------|
| DNS TXT `1ihDEQ...` | Alu Studio 帳號 | 網域資源（全站）|
| 根目錄 `google9c954b37d1869b6e.html` | 個人帳號 | 網址前置 `https://alu-studio.com/` |
| `sotto/public/` 同名檔 | 個人帳號 | 網址前置 `https://alu-studio.com/sotto/` |

### 第 3b 步：把「未知」換成你掌握的方法（先做這個）

「驗證方法：未知」代表 Google 沒有指向一把你可辨識的權杖，對話框也直接建議你新增方法。在確定歸屬前不要刪任何東西。

1. Alu Studio 帳號 → 設定 → **擁有權驗證**
2. 看這頁列出的現行驗證方法——這是判斷 `1ihDEQ...` 到底屬誰的**決定性證據**
3. 新增一個 DNS 驗證方法，Google 會發一組新 TXT 值
4. Cloudflare DNS 新增那筆 TXT，**舊那筆先留著**。同名多筆 `google-site-verification` TXT 可並存，Google 只比對自己那一值
5. 驗證通過後，該頁應顯示一個明確的 DNS 方法，而非「未知」
6. 提交 sitemap

### 移除已驗證擁有者的坑（本次未觸發，但記起來）

官方：「如要新增或移除**已驗證擁有者**，你必須新增或移除該擁有者在網站上的權杖。」

只從「使用者和權限」把人刪掉對已驗證擁有者**無效**——只要權杖還在，介面會跳警告說該使用者可能重新取得存取權，而且真的會。本次未觸發這個坑，因為個人帳號並未持有任何權杖。

### repo 裡的兩個 HTML 驗證檔：可清理

| 檔案 | 驗證的資源 | 現況 |
|------|--------------|------|
| 根目錄 `google9c954b37d1869b6e.html` | 網址前置 `https://alu-studio.com/` | 被 Domain property 完全涵蓋 |
| `sotto/public/google9c954b37d1869b6e.html` | 網址前置 `https://alu-studio.com/sotto/` | 同上 |

兩個都屬 Alu Studio 帳號，且因為 Domain property 已涵蓋 http/https、所有子網域與所有路徑，這兩個網址前置資源已經多餘。HTML 檔永遠無法驗證網域資源，所以刪掉它們**不會**影響 Domain property。

清理順序：先完成上方第 3b 步（讓 Domain property 顯示明確的 DNS 方法而非「未知」）→ 在 GSC 刪掉那兩個網址前置資源 → 告訴我，我移除 repo 裡的檔案。不急，放著也無害。

### 後路

DNS 在你手上，任何一步出錯都能重新驗證，不存在永久失去存取的情況。

---

## B. 索引與流量基線

| 指標 | 來源 | 數值 |
|------|------|------|
| GSC 已索引頁數 | GSC → 建立索引 | 0 |
| GSC 近 28 天曝光 | GSC → 成效 | 1 |
| GSC 近 28 天點擊 | GSC → 成效 | 0 |
| Bing 已索引頁數 | Bing WMT | 填 |
| Bing 近 28 天曝光 | Bing WMT | 填 |

Cloudflare 流量見下方 C 段，已由腳本擷取。

---

## C. Cloudflare 流量與爬蟲抓取量（已擷取，2026-07-29）

由 `node scripts/cf-baseline.mjs` 產生。**30 天後請重跑同一支腳本**取得可比數字——手動讀儀表板兩次，很容易讀到兩種定義不同的「請求數」。

### 兩個 Free 方案的限制（實測撞到）

1. **拿不到 30 天**。zone 資料從 2026-07-21 才開始（網域剛上 Cloudflare），所以基線就是這 9 天，不是 30 天。原本表格要求「近 30 天」是做不到的。
2. **UA 分佈查詢上限 1 天**。只有 `httpRequestsAdaptiveGroups` 有 `userAgent` 維度，而它在 Free 方案拒絕任何超過 1 天的區間（錯誤訊息：`cannot request a time range wider than 1d`）。所以各爬蟲請求數只能是 24 小時快照，永遠不會是 30 天累計。比較時請比 24h 對 24h。

### 擷取結果

### Cloudflare 流量（`alu-studio.com`，Free Website）

擷取時間：2026-07-29T01:24:45Z　產生方式：`node scripts/cf-baseline.mjs`

資料涵蓋 **2026-07-21 ~ 2026-07-29**（9 天，非完整 30 天——zone 建立時間所限）

- 總請求數：**12,204**
- 不重複訪客合計：**1,093**

| 日期 | 請求數 | 不重複訪客 |
|------|--------|------------|
| 2026-07-21 | 3 | 1 |
| 2026-07-22 | 821 | 120 |
| 2026-07-23 | 1,035 | 60 |
| 2026-07-24 | 416 | 31 |
| 2026-07-25 | 2,523 | 227 |
| 2026-07-26 | 2,251 | 242 |
| 2026-07-27 | 3,631 | 196 |
| 2026-07-28 | 1,362 | 193 |
| 2026-07-29 | 162 | 23 |

### 爬蟲請求數（近 24 小時，Free 方案的 userAgent 查詢上限）

| Crawler | 近 24h 請求數 |
|---------|---------------|
| GPTBot | 3 |
| OAI-SearchBot | 3 |
| ChatGPT-User | 0（未出現） |
| ClaudeBot | 48 |
| Claude-User / Claude-SearchBot | 0（未出現） |
| PerplexityBot | 0（未出現） |
| CCBot | 0（未出現） |
| Google-Extended | 0（未出現） |
| Bytespider | 0（未出現） |
| Applebot | 8 |
| Amazonbot | 0（未出現） |
| meta-externalagent | 1 |
| Googlebot | 44 |
| Googlebot-Image | 4 |
| bingbot | 3 |
| YandexBot | 5 |
| Google-adstxt | 8 |
| facebookexternalhit | 19 |

近 24h 全部請求 1,703，其中已辨識爬蟲 146（8.6%），其餘為一般流量與未分類自動請求。

### 這份數據直接回答了 T1

原本 T1 要人工到 Cloudflare 儀表板確認 AI 爬蟲沒有被擋（研究指出 Cloudflare 對新 zone 預設封鎖 AI bots）。**實測顯示沒有被擋**：GPTBot、OAI-SearchBot、ClaudeBot、bingbot 都有成功請求記錄。仍建議你到儀表板眼睛確認一次並截圖，但經驗證據已經站在「通行無阻」這邊。

### 這份數據也說明了本案的價值

ClaudeBot 近 24h 抓了 48 次、Googlebot 44 次、GPTBot 與 OAI-SearchBot 各 3 次——**而它們現在拿到的全是空殼**（`/pikgeon/` 線上仍是 1,010 bytes 的空 HTML）。這就是最好的「前」對照組：爬蟲已經在來，只是無功而返。

---

## D. AI 查詢基線

同一組查詢在 merge 前跑一次、30 天後再跑一次。**逐字用下面的句子**，換句話問結果會不同，就失去對照意義。

每題記三件事：有沒有提到該 app、有沒有附上 `alu-studio.com` 連結、答案內容是否正確。

平台：ChatGPT（開啟搜尋）、Perplexity、Google AI Overview。同一題三個平台都跑。

### 品牌查詢（應該要贏）

1. `What is Pikgeon?`
2. `What is Alu Studio?`
3. `Sotto app by Alu Studio`
4. `DingPOS iPad point of sale`

### 非品牌查詢（真正的成長來源）

5. `Is there an app to track Pikmin Bloom postcards?`
6. `How do I organize the postcards I get in Pikmin Bloom?`
7. `App for daily activity ideas for toddlers`
8. `App to remember details about friends and family, stored locally`
9. `Offline point of sale app for iPad without a subscription to a cloud service`
10. `Baby activity app that works with materials I already have at home`

### 記錄格式

| # | 平台 | 有提到？ | 有連結？ | 內容正確？ | 備註 |
|---|------|----------|----------|------------|------|
| 1 | ChatGPT | 填 | 填 | 填 | |
| 1 | Perplexity | 填 | 填 | 填 | |
| 1 | Google AI | 填 | 填 | 填 | |

（其餘題目照抄此三列。）

---

## E. 現況快照（已量測，供對照）

merge 前的本機預渲染結果，供 30 天後對照線上實況：

| 路由 | 渲染文字長度 |
|------|--------------|
| `/home/` | 1,564 |
| `/pikgeon/` | 2,301 |
| `/babbby/` | 337 |
| `/sotto/` | 1,594 |
| `/dingpos/` | 2,941 |

`/pikgeon/` 部署前的線上實況是 1,010 bytes 空殼（HTML 位元組，非文字長度）。

`/babbby/` 是目前最薄的 landing 頁，若 30 天後它仍無起色，優先補內容。

---

## F. merge 後由我執行

不需要你的帳號，但只能在部署後跑（`deploy.yml` 只在 push to main 觸發）：

- 線上 curl 斷言：每條路由的預渲染內容、meta、JSON-LD
- Google Rich Results Test / Schema Markup Validator
- 社群連結預覽（og:image 實際顯示）
- `robots.txt` 與 `sitemap.xml` 線上可及性

## Related

- [seo-aeo-optimization.md](./seo-aeo-optimization.md) — 實作計劃、決策、交接
- [seo-aeo-copy-review.md](./seo-aeo-copy-review.md) — 待審文案彙整
