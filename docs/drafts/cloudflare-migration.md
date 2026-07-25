---
summary: Migration plan — move hosting from GitHub Pages to Cloudflare Workers static assets under alu-studio.com, preserving SEO via 301 redirects
read_when:
  - Executing or reviewing the Cloudflare migration
  - Debugging domain / redirect / SEO issues after migration
---

# GitHub Pages → Cloudflare Workers 遷移計劃

**Status**: Phase 1+2 implemented on branch `feat/cloudflare-migration`（見 `.pi/ralph/cloudflare-migration.md` 完整 log）；Phase 3 除 guardrail 文件與 301 監控 workflow 外，其餘卡在 Ohlulu 的 Cloudflare API token / 網域 cutover / GSC / ASC / Play Console — critic 2 rounds 完成，8 findings 全數採納（見 Review Dispositions）
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

- [ ] 切換前：以 `gh api`（或 Settings → Pages）設定 custom domain = `alu-studio.com` — **BLOCKED**：需 Ohlulu 執行（GitHub Pages Settings 變更，Ralph loop 依 guardrail 明確禁止觸碰）
- [ ] 切換後立即驗證（gate）：`curl -IL https://alustudio.github.io/pikgeon/privacy?x=1` 等代表路徑，須為 **path/query-preserving 301** 到新網域 — **BLOCKED**：需上一項的 custom domain 切換先完成，且屬 live 驗證，非 Ralph loop 範圍
- [ ] **順序約束**：Gate 通過前不得移除 GH Pages 部署能力（Phase 1 的 workflow 改造保留可 `git revert` 的單一 commit，作為 Pages fallback 回復路徑）；Pages custom-domain 設定與最後一次 Pages 部署為**永久保護不變量**，任何時候都不得移除 — 目前已由設計滿足（`deploy.yml` 改造是單一可 revert commit `9646c21`；本 loop 全程未動 Pages custom-domain 設定或觸發新的 Pages 部署），Phase 3 cutover 前持續有效，non-actionable 故不打勾
- [ ] Gate 通過 → 進行 GSC Change of Address — **BLOCKED**：需上述 gate 先通過，且為 Ohlulu-only 外部操作（Google Search Console）
- [x] **301 例行監控**：新增 monthly cron workflow，打 2-3 個代表舊網址斷言 path-preserving 301（301 屬未文件化行為，gate 通過一次不等於永久有效；失敗時發 alert 而非無聲 SEO 洩漏）
- [x] **Repo guardrails**：repo description + AGENTS.md + README 明文「本 repo 同時是 alu-studio.com 的程式碼與永久 301 錪點，禁止改名 / 刪除 / archive」— repo 本無 README.md，改用 AGENTS.md（本 repo 實際的文件入口）承載；description 已透過 `gh repo edit` 設定
- [ ] **Gate 失敗 → 停止並回報**：meta-refresh 不是 301，不符鎖定需求。屆時以 `ask_me` 提選項（如：舊網域改部署 canonical-only stub、接受較弱的 canonical 訊號、或重新評估託管架構），不得擅自宣稱 fallback 等效。重設計對象是 redirect 機制，不是 repo 佈局 — 協議本身已在此完整定義，nothing to build；僅在未來 gate 實際失敗時才會被觸發，故不打勾

## 需要 Ohlulu 處理

| # | 事項 | 說明 |
|---|---|---|
| 1 | Cloudflare API token | Workers Scripts:Edit + DNS:Edit 權限。給我 token，我用 `gh secret set` 塞 `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` |
| 2 | Google Search Console | 新增 `alu-studio.com` Domain property（Cloudflare DNS TXT 驗證）→ 提交 sitemap → Phase 3 gate 通過後對舊 property 執行 Change of Address |
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
| GSC Change of Address 前排名波動 | 301 + canonical 雙保險；舊站 redirect 不拆除 |

## Rollback（依序執行，缺一不可）

1. Revert workflow commit，重新跑 GH Actions 讓完整 `_site` 部署回 GitHub Pages
2. 移除 Worker 的 custom domain routes（`alu-studio.com` / `www` 的 DNS 記錄隨之釋放）
3. 二選一，明確擇定分支：
   - **分支 A — 保留新網域**：`alu-studio.com` DNS 指回 GitHub Pages（4 筆 A records + `www` CNAME），repo Settings 的 Pages custom domain **保留** `alu-studio.com`，等 GitHub TLS 重簽。此分支下 `alustudio.github.io` 持續 301 到 apex 是**預期行為**。
   - **分支 B — 放棄新網域**：**清除** repo Settings 的 Pages custom domain 設定，讓 `alustudio.github.io` 恢復直接服務內容；`alu-studio.com` DNS 停用或另作他用。
4. 依所選分支驗證：分支 A → `curl -IL https://alu-studio.com/pikgeon/` 最終 200；分支 B → `curl -I https://alustudio.github.io/pikgeon/` 直接 200（無 301）
5. 確認 GSC 未執行或撤回 Change of Address

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
