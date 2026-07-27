---
summary: Migration plan — move hosting from GitHub Pages to Cloudflare Workers static assets under alu-studio.com, preserving SEO via 301 redirects
read_when:
  - Executing or reviewing the Cloudflare migration
  - Debugging domain / redirect / SEO issues after migration
---

# GitHub Pages → Cloudflare Workers 遷移計劃

**Status**: ✅ **已上線（2026-07-25）**。Phase 1+2 全數完成並 merge 進 `main`；Phase 3 hard gate **通過**（舊網域 301 保留 path+query），301 監控已武裝；GSC 新 property 已驗證並提交 sitemap。剩餘僅 **ASC Marketing URL** 與 **Play Console Developer website**（皆為 AdMob `app-ads.txt` 爬取來源，非 SEO；兩域目前都正常供應且內容一致，故不阻塞）。GSC Change of Address **已評估後放棄**，理由見 Decision Record — critic 2 rounds 完成，8 findings 全數採納（見 Review Dispositions）
**目標網域**: `alu-studio.com`（apex 為 canonical，`www` 301 到 apex）
**目的**: 自有網域 + SEO/AEO 基礎建設 + 未來擴展能力（redirect/headers/動態端點）

## Locked Decisions

- 託管搬到 Cloudflare **Workers static assets**（非 Cloudflare Pages——CF 官方建議新專案走 Workers）
- Build 流程留在 GitHub Actions，只換最後的 deploy 步驟
- Canonical host = `https://alu-studio.com`（apex，非 www）
- 舊網址 `alustudio.github.io/*` 需 301 導向新網域，轉移 SEO 權重（可行性見 Phase 3 hard gate）
- **單一 repo**：程式碼 + Cloudflare CI + 301 錨點同住 `alustudio.github.io`，不拆新 repo（argue 辩論全票共識，見 Decision Record）

## 現況盤點

| 項目 | 現況 |
|---|---|
| 部署 | GH Actions：build job 產出 `_site/` → `upload-pages-artifact` → 獨立 deploy job 跑 `deploy-pages` |
| Routes | home：單頁。pikgeon：`/ privacy terms faq`。babbby / sotto / dingpos：`/ privacy terms` |
| SPA 靜態化 | pikgeon / sotto / dingpos 有 `copy-spa-pages.js`（每個 route 複製 index.html，bot 可拿到 200）；**babbby 沒有**，deep link 依賴 404 hack |
| 404 fallback | `404.html` query-string hack；pikgeon / babbby index.html 內有 `?/` 還原 script |
| 根路徑 | `index.html` meta-refresh 到 `/home/`，canonical 寫死舊網域 |
| SEO 資產 | 無 robots.txt、無 sitemap.xml、sub-app 無 canonical/og:url；copy script 複製出的子頁 HTML 與 app 首頁完全相同 |
| 其他 | `app-ads.txt`（AdMob 依各商店 listing 的 developer website hostname 爬取）、`google9c954b37d1869b6e.html`（舊 GSC 驗證）、Sotto 有 Google Play listing |

## 核心設計：不需要 runtime SPA fallback

補齊 babbby 的 copy script 後，**全站每個合法 route 都有實體 `index.html`**。因此：

- Worker 不做「404 時 rewrite 到 app index」——不存在的路徑一律回真 404（避免空白 200 汙染索引）
- `404.html` hack 與 `?/` 還原 script 全部移除
- Worker 職責只剩：host/path redirect + 資產服務 + 真 404

## Phase 1 — Cloudflare 部署基礎（我做）

- [x] `wrangler.jsonc`：
  - `main`（Worker entry）、`assets.directory = "_site"`、`assets.binding = "ASSETS"`、`assets.run_worker_first = true`
  - `routes`：`alu-studio.com` + `www.alu-studio.com`，`custom_domain: true`（網域在同帳號，Cloudflare 自動建 DNS）
- [x] Worker fetch handler，依序：
  1. host 為 `www` → 301 到 apex（保留 path + query）
  2. path 為 `/` → 301 到 `/home/`
  3. `env.ASSETS.fetch()` 回應資產（含 CF 的 auto-trailing-slash 行為）
  4. asset 404 → 回傳新版 `404.html` body（無任何 redirect script）+ 404 status
  5. 回應統一補 headers：hashed assets `immutable` cache、HTML `no-cache`、基本安全 headers
  - **不使用 `_redirects` / `_headers` 檔**：`_redirects` 不支援 domain-level redirect，headers 一併在 Worker 內處理，單一事實來源
- [x] 改 `.github/workflows/deploy.yml`：**wrangler deploy 併入 build job 最後一步**（`_site` 在同一 runner），移除 `upload-pages-artifact` 與獨立 deploy job

## Phase 2 — SEO/AEO 資產（我做）

- [x] babbby 補 `copy-spa-pages.js`（routes：privacy、terms）+ 掛進 build script，與其他 app 對齊
- [x] 各 app `index.html` 補 self-referencing `<link rel="canonical">`、`og:url`、`og:title`、`og:description`（`https://alu-studio.com/<app>/`）
- [x] **copy script 升級**：複製時改寫每個子頁的 canonical / og:url 為該 route 自身（trailing-slash 形式，如 `https://alu-studio.com/pikgeon/privacy/`），不得沿用 app 首頁 canonical
- [x] 根 `index.html`：meta-refresh 移除（Worker 已 301），僅留 canonical → `https://alu-studio.com/home/`
- [x] 新版 `404.html`：純靜態、無 redirect script
- [x] 移除 pikgeon / babbby 的 `?/` 還原 script
- [x] `robots.txt`（含 Sitemap 行；不得 block `Google-adstxt`）+ 靜態 `sitemap.xml`：僅列「有實體 HTML 且 self canonical」的 14 個 URL（home 1 + pikgeon 4 + babbby 3 + sotto 3 + dingpos 3，均為 trailing-slash 形式）
- [x] `llms.txt`（AEO：站台結構與各 app 一句話描述）
- [x] `app-ads.txt`、`google9c954b37d1869b6e.html` 保留於 assemble 輸出

## Phase 3 — 舊網域 301（hard gate）

GitHub 官方僅保證「DNS 正確指向 GitHub」時的 custom-domain redirect；DNS 指向 Cloudflare 後 `github.io → custom domain` 的 301 屬**未文件化行為**，不可假設永久有效。

- [x] 切換前：以 `gh api`（或 Settings → Pages）設定 custom domain = `alu-studio.com` — 以 `gh api -X PUT repos/.../pages -f cname='alu-studio.com'` 完成
- [x] 切換後立即驗證（gate）：`curl -IL https://alustudio.github.io/pikgeon/privacy?x=1` 等代表路徑，須為 **path/query-preserving 301** 到新網域 — ✅ **GATE 通過**：`301` 且 `?x=1` 完整保留（詳見「上線後實測結果」）
- [x] **順序約束**：Gate 通過前不得移除 GH Pages 部署能力（Phase 1 的 workflow 改造保留可 `git revert` 的單一 commit，作為 Pages fallback 回復路徑）；Pages custom-domain 設定與最後一次 Pages 部署為**永久保護不變量**，任何時候都不得移除 — 已遵守：gate 通過前 `deploy.yml` 改造維持為單一可 revert commit `9646c21`，Pages 最後一次部署未被移除（現仍在服務 `app-ads.txt`，見下）
- [x] ~~Gate 通過 → 進行 GSC Change of Address~~ — **評估後決定不做**（2026-07-25，見下方 Decision Record）。舊網域已全面 301，重建驗證的成本遠大於效益
  - **更正（2026-07-27）**：原文寫「舊 property 從未建立」不實。`https://alustudio.github.io/sotto/` 這個網址前置資源實際存在，驗證檔 `sotto/public/google9c954b37d1869b6e.html` 於 2026-04-29（commit `6e7d0af`）加入，早於遷移三個月。遷移後該網址全面 301，GSC 判定驗證失效。結論不變（不做 Change of Address），但理由是「舊 property 已無內容可監測且 Domain property 已涵蓋全站」，而非「不存在」。該 property 已於 2026-07-27 在 GSC 刪除
- [x] **301 例行監控**：新增 monthly cron workflow，打 2-3 個代表舊網址斷言 path-preserving 301（301 屬未文件化行為，gate 通過一次不等於永久有效；失敗時發 alert 而非無聲 SEO 洩漏）
- [x] **Repo guardrails**：repo description + AGENTS.md + README 明文「本 repo 同時是 alu-studio.com 的程式碼與永久 301 錪點，禁止改名 / 刪除 / archive」— repo 本無 README.md，改用 AGENTS.md（本 repo 實際的文件入口）承載；description 已透過 `gh repo edit` 設定
- [x] **Gate 失敗 → 停止並回報**：meta-refresh 不是 301，不符鎖定需求。屆時以 `ask_me` 提選項（如：舊網域改部署 canonical-only stub、接受較弱的 canonical 訊號、或重新評估託管架構），不得擅自宣稱 fallback 等效。重設計對象是 redirect 機制，不是 repo 佈局 — **未觸發**：gate 一次通過，無需啟動此升級路徑

## 上線後實測結果（2026-07-25）

### 驗證總結：30/30 通過

5 app 全 14 routes、SEO 資產 4 項、redirect 正規化 4 種入口、舊網域 301 6 條、404 2 條 — 全數落在 **https 200**。

### 四個只有上線才驗證得到的發現

**1. GitHub Pages 的 301 Location 是 `http://`，不是 `https://`**

GitHub 無法為「DNS 不在它手上」的網域簽發憑證，因此只能發明文 Location。影響：訪客會停在 http，而頁面 canonical 寫的是 https — 自相矛盾的 SEO 訊號。

對策：**Worker 加上 http → https**，且與 www → apex 合併為單一 redirect（`http://www...` 一跳直達 `https://` apex）。Cloudflare zone 層的 「Always Use HTTPS」也能解，但部署 token 無 Zone Settings 權限，且放 Worker 裡更符合「所有 redirect 邏輯單一事實來源」的原則。

**2. `app-ads.txt` 是唯一不被 301 的路徑**

舊網域其他路徑全部 301，只有 `/app-ads.txt` 仍回 **200**（GitHub Pages 對廣告驗證檔的特殊處理）。

- 好處：AdMob 爬舊網域仍拿得到內容，廣告收益不中斷
- ⚙️ **Gotcha**：舊網域的 `app-ads.txt` 凍結在 GitHub Pages 最後一次部署的版本，**不會跟著新版更新**。未來修改 `app-ads.txt` 時，舊網域那份會長期停留舊內容——若廣告平台仍按舊 hostname 爬取，需確認兩邊一致性（目前實測 byte-identical）

**3. `wrangler-action@v3` 的預設 wrangler 是 3.90.0，讀不到 `wrangler.jsonc`**

CI 首次部署失敗（`Missing entry-point`）。根因：action 的 `main` branch README 寫「defaults to Wrangler v4」，但 pin `@v3` tag 的實際預設仍是 3.90.0，而 3.90.0 早於 `wrangler.jsonc` 支援。**教訓：讀 main branch 文件却 pin release tag 不是有效驗證。** 對策：明確 `wranglerVersion: "4"`。

**4. 301 監控 workflow 的原斷言會永遠誤報**

原本斷言 Location 精確等於 `https://alu-studio.com/...`，但實際是 `http://`（見發現 1）。已改為雙重斷言：（1）首跳為 301 且 host+path+query 保留（SEO 權重），（2）**最終落點為 https + 200**（無明文死路）。

### 現行架構

```
https://alustudio.github.io/x  --301(GitHub, 發 http)-->
http://alu-studio.com/x       --301(Worker, 升級)------>
https://alu-studio.com/x      --200
```

`http://www.alu-studio.com/x` 則由 Worker 單一 redirect 直接到 `https://alu-studio.com/x`。

## 需要 Ohlulu 處理

| # | 事項 | 說明 |
|---|---|---|
| 1 | Cloudflare API token | Workers Scripts:Edit + DNS:Edit 權限。給我 token，我用 `gh secret set` 塞 `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` |
| 2 | Google Search Console | ✅ 已建 `alu-studio.com` Domain property（DNS TXT 驗證完成）+ 提交 sitemap。~~Change of Address~~ 已評估後放棄，見 Decision Record |
| 3 | App Store Connect | 各 iOS app 的 **Marketing URL** 改為 `https://alu-studio.com/<app>/`（AdMob 依此 hostname 爬 app-ads.txt） |
| 4 | Google Play Console | Sotto（及其他 Android app）Store listing → contact details → **Developer website** 改為 `https://alu-studio.com/<app>/` |
| 5 | AdMob | 商店網址更新後，重新檢查各 app 的 app-ads.txt 狀態 |
| 6 | GitHub repo Settings（fallback） | 若 `gh api` 設定 custom domain 權限不足，手動到 Settings → Pages 填 |

## 驗證清單（全部通過才算完成）

以 `curl -IL`（跟隨 redirect，驗最終狀態）逐項執行：

```
# Redirect 行為
/                                  → 301 → /home/ → 200
https://www.alu-studio.com/pikgeon/privacy/   → 301 保留 path → 200
https://alustudio.github.io/pikgeon/privacy?x=1 → 301 保留 path+query（Phase 3 gate）

# 5 個 app × 全部 routes（最終 200；/privacy 允許經 307/308 trailing-slash 跳轉）
/home/  /pikgeon/{,privacy/,terms/,faq/}  /babbby/{,privacy/,terms/}
/sotto/{,privacy/,terms/}  /dingpos/{,privacy/,terms/}

# 每個 app 首頁引用的 JS/CSS 資產：200 + 正確 MIME + immutable cache header
# 每個子頁 HTML：canonical 為 self（非 app 首頁）

# SEO 資產
/robots.txt      → 200，含 Sitemap 行
/sitemap.xml     → 200，有效 XML，14 URL
/app-ads.txt     → 新舊兩域最終皆 200 且內容 byte-identical
/llms.txt        → 200

# 404
/nonexistent、/pikgeon/nonexistent → 404 status，body 無 redirect script
```

## 風險與對策

| 風險 | 對策 |
|---|---|
| GH Pages 301 屬未文件化行為 | Phase 3 hard gate + 失敗即停 + 例行複驗 |
| Workers static assets 行為假設有誤（run_worker_first、trailing slash） | 實作時對照官方文件；redirect/headers 全在 Worker code，不依賴 `_redirects`/`_headers` |
| 子頁 canonical 錯指首頁 → 法律頁被視為重複內容 | copy script 改寫 per-route canonical；sitemap 只列 self-canonical URL |
| app-ads.txt 爬取中斷影響廣告收益 | 新舊兩域持續供應；ASC + Play Console 網址都要更新；robots.txt 放行 `Google-adstxt` |
| 搬遷期間排名波動 | 301 + canonical 雙保險；舊站 redirect 永不拆除（此為主要保障——Change of Address 已放棄，見 Decision Record） |

## Rollback（依序執行，缺一不可）

1. Revert workflow commit，重新跑 GH Actions 讓完整 `_site` 部署回 GitHub Pages
2. 移除 Worker 的 custom domain routes（`alu-studio.com` / `www` 的 DNS 記錄隨之釋放）
3. 二選一，明確擇定分支：
   - **分支 A — 保留新網域**：`alu-studio.com` DNS 指回 GitHub Pages（4 筆 A records + `www` CNAME），repo Settings 的 Pages custom domain **保留** `alu-studio.com`，等 GitHub TLS 重簽。此分支下 `alustudio.github.io` 持續 301 到 apex 是**預期行為**。
   - **分支 B — 放棄新網域**：**清除** repo Settings 的 Pages custom domain 設定，讓 `alustudio.github.io` 恢復直接服務內容；`alu-studio.com` DNS 停用或另作他用。
4. 依所選分支驗證：分支 A → `curl -IL https://alu-studio.com/pikgeon/` 最終 200；分支 B → `curl -I https://alustudio.github.io/pikgeon/` 直接 200（無 301）
5. ~~確認 GSC 未執行或撤回 Change of Address~~ — **現為 no-op**：Change of Address 從未執行（已放棄）。若未來曾補做，rollback 時需回到此步撤回

## Review Dispositions

Critic：`openai-codex/gpt-5.6-sol`，2 rounds。Round 1 verdict：NEEDS-REVISION（3 P1 + 5 P2）。

| # | Finding | Disposition |
|---|---|---|
| 1 | P1 舊網域 301 fallback 不符鎖定需求（meta-refresh ≠ 301） | Accept → Phase 3 改 hard gate，失敗即停 + ask_me 升級。Round 2: CONCEDE |
| 2 | P1 `_redirects` 無法做 domain-level redirect；缺 `main`/`binding`/`run_worker_first` | Accept → 全部 redirect/headers 移入 Worker code，wrangler.jsonc 補齊設定。Round 2: CONCEDE |
| 3 | P1 copy script 子頁 canonical 錯指 app 首頁 | Accept → copy script 改寫 per-route self-canonical；sitemap 僅列 self-canonical URL。Round 2: CONCEDE |
| 4 | P2 wrangler deploy 放獨立 job 拿不到 `_site` | Accept → deploy 併入 build job。Round 2: CONCEDE |
| 5 | P2 盲目 SPA rewrite 產生空白 200；404.html 含 redirect script；盤點錯誤 | Accept → babbby 補 copy script 後全站實體 HTML，Worker 不做 SPA rewrite；新版純靜態 404。Round 2: CONCEDE |
| 6 | P2 漏 Google Play Console / ASC Marketing URL / Google-adstxt | Accept → 分工表與驗證清單全數納入。Round 2: CONCEDE |
| 7 | P2 驗證清單漏 app、trailing-slash 307 誤判 | Accept → `curl -IL` 驗最終 200，涵蓋 5 app 全部 routes。Round 2: CONCEDE |
| 8 | P2 Rollback 過度簡化 | Accept → 5 步有序 rollback。Round 2: HOLD（分支間 custom domain 設定與驗證目標矛盾）→ **接受 HOLD，已修正**：Rollback §3/§4 拆為分支 A/B，各自定義 custom domain 設定歸屬與對應驗證。 |

Final：8 findings 全數採納並落實於本文，無未解爭議。

## Decision Record

### 單一 repo vs 拆分 301 stub（argue 辩論，2026-07-25）

問題：程式碼留在 `alustudio.github.io`（A），或拆新 repo + 現有 repo 只留 301（B）？

結果：**全票共識選 A**（claude-fable-5 + codex gpt-5.5，3 rounds + final vote，7 claims 全數 2/2 accept）。

核心理由：
- 301 依賴的是「user-site repo 永久存在 + Pages 設定完整」——**B 並沒有移除這個脆弱依賴，只是把它藏進一個看起來可丟的空殼 stub**，反而更容易被未來的清理動作（人或 AI agent）誤刪
- 拆分成本真實（新 repo、secrets/CI/remote 重設、舊 commit 連結斷鏈）但功能增益為零
- 命名語意問題用文件 guardrail 解決，比拆 repo 便宜且安全
- A → B 可逆：未來真有動態功能 / 團隊需求再拆，成本不變（YAGNI）

辩論產出的新執行項（已併入 Phase 3）：monthly 301 監控 cron、repo guardrail 文件、gate 通過前保留 Pages fallback 回復路徑。

完整報告：`argue view argue_1784947897383_285744`

### 放棄 GSC Change of Address（2026-07-25）

問題：上線後發現 GSC 帳號（`z30262226@gmail.com`）下**根本沒有 `alustudio.github.io` 這個 property**。repo 裡雖有 `google9c954b37d1869b6e.html`（2026-04-29 加入），但推斷當時只放了檔案、未回 GSC 完成驗證。

而 Change of Address 的**硬性前提是舊 property 已驗證**。現在要補驗證卡在：舊網域已全面 301，Google 抓驗證檔會被導走，這種情況通常判定驗證失敗；站上又沒有 GA/GTM 可做替代驗證管道。

可行但被放棄的路徑：暫時清除 Pages custom domain（恢復舊內容直接可存取）→ 驗證 → 設回。若 Google 發的是新檔名，還得額外 revert workflow 讓 Pages 重新部署一次。

決定：**不做**。理由：
- **301 本身就會傳遞權重**，這是 Google 明確立場；Change of Address 是加速與明確化工具，**非權重轉移的必要條件**
- 舊網域是 `github.io` 子網域，自身累積的網域權重有限；內容以 app 隱私權/條款/FAQ 為主，自然搜尋流量本小
- 本專案的 301 是**永久性的**（repo guardrail + monthly 監控在守），Google 有充足時間自行完成轉移
- 為此暫時拆掉 301 反而引入真實風險（中斷期間的爬取、誤操作 Pages 設定），風險/效益不對等

若未來真的需要（例如發現舊網域有可觀残留流量），此路徑隨時可重啟，成本不隨時間增加。
