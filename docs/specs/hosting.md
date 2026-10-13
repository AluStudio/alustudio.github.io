---
summary: How alu-studio.com is hosted — Cloudflare Worker static assets, canonical host and redirect rules, the permanent old-domain 301, deploy pipeline, and rollback
read_when:
  - Changing src/worker.js, wrangler.jsonc, or the deploy / check-redirects workflows
  - Debugging a redirect, a 404, cache headers, or the alustudio.github.io 301
  - Considering renaming, splitting, archiving, or restructuring this repo
  - Changing a store listing URL or app-ads.txt
---

# Hosting

## 架構

- 託管：Cloudflare **Workers static assets**，Worker 名稱 `alu-studio-site`，掛 `alu-studio.com` 與 `www.alu-studio.com` 兩個 custom domain（`wrangler.jsonc`）。不用 Cloudflare Pages，因為 Cloudflare 對新專案建議走 Workers。
- Canonical origin：`https://alu-studio.com`（apex，非 www）。所有 canonical / og:url / sitemap 都用這個 origin，路徑一律 trailing-slash 形式。
- 部署：push 到 `main` 觸發 `.github/workflows/deploy.yml`，在同一個 job 內依序 build 五個 app、assemble `_site/`、產生 sitemap、prerender、`wrangler deploy`。沒有手動部署。
- `wrangler-action` 明確指定 `wranglerVersion: "4"`：action 的預設版本會漂移，而 wrangler 3.x 讀不到 `wrangler.jsonc`（錯誤訊息是 `Missing entry-point`）。

## Worker 規則

`assets.run_worker_first: true`，每個請求都先進 `src/worker.js`，依序：

1. `http` 或 `www` → 單一 301 到 `https://alu-studio.com`，保留 path + query。兩件事合成一跳，因為舊網域 301 落地在 `http://`（見下節），分兩跳會多一次 redirect。
2. `/` → 301 到 `/home/`。
3. 已退役且被索引過的頁面 → 301 到取代它的頁面（`MOVED_PATHS`）。移除任何已索引的 slug 都要在這裡加一筆。
4. 其餘交給 `env.ASSETS.fetch()`。
5. Asset 404 → 回 `404.html` 的 body + 真正的 404 status。不做 SPA fallback：每個合法 route 都有實體 `index.html`，fallback 只會產生空白的 200 汙染索引。
6. 每個回應補 headers：hashed asset `immutable` 一年、HTML `no-cache`、`nosniff` / `Referrer-Policy` / `X-Frame-Options: DENY`。

- 不使用 `_redirects` / `_headers` 檔：`_redirects` 做不到 host 層級的 redirect，所有 redirect 與 header 邏輯集中在 Worker，單一來源。
- Regression test：`npm test`（repo root）直接呼叫 Worker 的 `fetch` 並 mock `ASSETS`。`wrangler dev` 會把 Host 正規化成第一個 route，測不出 www → apex，所以 host 類行為上線後仍要用 `curl -IL` 對 live edge 抽驗。

## 舊網域 301（永久不變量）

`https://alustudio.github.io/*` 由 GitHub Pages 301 到 `http://alu-studio.com/*`，保留 path + query，Worker 再升級到 https。

- 這是 GitHub **未文件化**的行為：GitHub 只保證「DNS 指向 GitHub」時的 custom-domain redirect。它只在以下條件同時成立時存在：本 repo 以 `alustudio.github.io` 這個名稱存在、Pages custom domain 設為 `alu-studio.com`、最後一次 Pages 部署仍在。三者任何時候都不得移除。
- Location 是 `http://`：GitHub 無法替 DNS 不在它手上的網域簽憑證。Worker 的 http → https 規則就是為了這一跳。
- `/app-ads.txt` 同樣被 301，跨網域落到新網域。app-ads.txt 爬蟲依規格只跟隨同 root domain 內的 redirect（推論，依 IAB 規格），所以商店 listing 的 Marketing URL / Developer website 必須是 `alu-studio.com`，不能依賴舊網域。
- 監控：`.github/workflows/check-redirects.yml` 每月 1 日打三個代表舊網址，斷言首跳為 301 且 host + path + query 保留、最終落點為 `https://alu-studio.com` 且 200。repo variable `MIGRATION_CUTOVER_DONE=true` 讓失敗直接讓 workflow 變紅。

### 為什麼是單一 repo

程式碼、CI、301 錨點同住這個 repo，不拆成「新 repo + 只剩 301 的 stub」。301 依賴的是這個 user-site repo 永久存在；拆分不會移除這個依賴，只會把它藏進一個看起來可丟的空殼，更容易被清理動作誤刪。拆分還要重設 secrets / CI / remote，功能增益為零。命名語意用 AGENTS.md 的 guardrail 處理；未來真有需要再拆，成本不會變高。

### 為什麼不做 GSC Change of Address

Change of Address 需要舊 property 已驗證，而 `alustudio.github.io` 從未在 GSC 驗證過。舊網域已全面 301，要補驗證必須暫時拆掉 301，風險大於效益：301 本身就傳遞權重，舊的 `github.io` 子網域累積的權重有限，且 301 是永久的。若之後發現舊網域有可觀殘留流量，可以重新評估。

## Rollback

依序執行：

1. Revert deploy workflow 的 Cloudflare 改造，重跑 Actions，讓完整 `_site` 部署回 GitHub Pages。
2. 移除 Worker 的 custom domain routes，釋放 `alu-studio.com` / `www` 的 DNS 記錄。
3. 擇一：
   - 保留新網域：`alu-studio.com` DNS 指回 GitHub Pages（4 筆 A record + `www` CNAME），Pages custom domain 維持 `alu-studio.com`，等 GitHub 重簽 TLS。舊網域持續 301 是預期行為。
   - 放棄新網域：清除 Pages custom domain，讓 `alustudio.github.io` 直接服務內容。
4. 驗證：保留新網域時，`curl -IL https://alu-studio.com/pikgeon/` 最終 200；放棄新網域時，`curl -I https://alustudio.github.io/pikgeon/` 直接 200、沒有 301。

## Related

- [seo-aeo.md](./seo-aeo.md) ← canonical、sitemap、prerender 規則
