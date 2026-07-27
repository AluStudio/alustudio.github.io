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
| Google Search Console | 確認網域已驗證 | 填 |
| GSC | 提交同一份 sitemap | 填 |
| Cloudflare AI Crawl Control | 截圖目前設定（截圖路徑） | 填 |

Bing 特別重要：ChatGPT 的三條無 JS 取得路徑中，有一條就是 Bing 索引。

---

## B. 索引與流量基線

| 指標 | 來源 | 數值 |
|------|------|------|
| GSC 已索引頁數 | GSC → 建立索引 | 填 |
| GSC 近 28 天曝光 | GSC → 成效 | 填 |
| GSC 近 28 天點擊 | GSC → 成效 | 填 |
| Bing 已索引頁數 | Bing WMT | 填 |
| Bing 近 28 天曝光 | Bing WMT | 填 |
| Cloudflare 總請求數（近 30 天） | CF → Analytics | 填 |

---

## C. AI 爬蟲抓取量（本案最直接的成效指標）

Cloudflare → AI Crawl Control 或 Analytics 的 bot 分類。記下近 30 天各 UA 的請求數。

| Crawler | 目前是否 Allow | 近 30 天請求數 |
|---------|----------------|----------------|
| GPTBot | 填 | 填 |
| OAI-SearchBot | 填 | 填 |
| ChatGPT-User | 填 | 填 |
| ClaudeBot | 填 | 填 |
| PerplexityBot | 填 | 填 |
| CCBot | 填 | 填 |
| Google-Extended | 填 | 填 |
| Bytespider | 填 | 填 |
| Googlebot | 填 | 填 |
| Bingbot | 填 | 填 |

依 §5 決議，全部應為 Allow（含訓練類）。若有 Block，記下來——那就是 30 天後數字沒動的原因。

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
