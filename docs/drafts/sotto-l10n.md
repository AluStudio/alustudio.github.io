# Sotto 官網多語系地基

Sotto app 之後新增語言時，網站端只剩資料與翻譯工作：在 registry 加一筆、`npm run l10n -- sotto new|sync|apply <code>`、審過後改 `shipped`、`--write-sitemap`。現有 12 種語言的 URL、hreflang、內容與 build 驗證行為不變。

## 背景

- 2026-10-31 實測：DingPOS 網站 32 種語言、Sotto 網站 12 種語言，都已和各自的 app 對齊並上線。「網站語言比較少」的印象來自網站刻意不依瀏覽器語言導向（`docs/specs/seo-aeo.md` §多語系 URL）。
- Sotto 的語言清單寫死在 `sotto/src/i18n.js` 的 `supportedLanguages` 和 `sotto/scripts/copy-spa-pages.js` 的 `LOCALE_DEFS` 兩處。
- Sotto 的 9 種翻譯語言（ja、ko、de、es、fr、it、pt-BR、ru、ar）是手動 / agent 一次性翻的（commit `90388a8`），沒有 manifest，en 改了不會有任何檢查發現譯文過期。
- `scripts/l10n.mjs` 只服務 DingPOS：路徑、app repo、app 字串檔位置、pack 結構（categories + articles）、UI segment、`TEXT_FIELDS` 都寫死。

## 範圍外

- 新增任何語言：網站語言不超過 app 語言（首頁 scene 字串逐字取自 app 的在地化），等 Sotto app 先決定新語言。
- 語言提示條（依瀏覽器語言提示其他版本）：使用者 2026-10-31 決定不做。

## Decisions

### D1：Sotto 有自己的 registry

`sotto/l10n/languages.json`，schema 與 `dingpos/l10n/languages.json` 相同（`code`、`kind`、`label`、`hreflang`、`pathPrefix`、`ogLocale`、`shipped`），另加阿拉伯文的 `dir: "rtl"`。`code` 是 sotto-ios 的 lproj id（`es`、`pt-BR`）。kind：en `source`、zh-Hant `owner`、zh-Hans `generated`，其餘 9 種 `translated`。`sotto/src/i18n.js` 與 `sotto/scripts/copy-spa-pages.js` 都改讀它，刪掉兩份手寫清單。Sotto app 沒有可鏡像的 registry，語言集合以 sotto-ios 的 `.lproj` 為準。

### D2：`scripts/l10n.mjs` 以 per-app 設定支援多個 app

照 `scripts/gen-zh-hans.mjs` 的 `APPS` 模式：路徑、registry、text fields、unit 種類與 segment 規則、pack 的讀寫格式、app repo 與其字串檔 / glossary 位置都是 app 設定。DingPOS 的 unit id、manifest 與產生結果不變（產生檔的註解行可以因為新的 CLI 寫法而改，由 `apply` 重新產生）。

Sotto 的設定：

- unit：`ui:<key>` 與 `guide:<slug>`（一整篇 guide）。segment：UI 依 top-level key 切（privacy、terms 各自一段，其餘 `ui-site`），guide 一篇一段。
- 字串與 pack：`sotto/src/locales/<code>/translation.json`、`sotto/src/data/guides/guides.<code>.js`；manifest 在 `sotto/l10n/manifest/`，site glossary 在 `sotto/l10n/glossary/`。
- 戒圍表的 `rows`（`RING_SIZE_ROWS`，各語言共用、與語言無關）是結構，從 en 複製，不進 packet。
- app repo：`~/Developer/alustudio/sotto`，字串在 `sotto-ios/Targets/Sotto/Resources/<code>.lproj/Localizable.strings`。Sotto app 沒有 glossary，`.strings` 也沒有 `@role` 註記，所以 app glossary 是選用的，`appTerms` 為空，`appMatch` 照常提供。

### D3：CLI 明確指定 app

`npm run l10n -- <app> <command> [<code>]`，例如 `npm run l10n -- sotto sync ja`。`npm run l10n -- check` 不帶 app 時檢查所有 app。不保留不帶 app 的舊寫法（內部工具，沒有相容性需求）；文件、合約、測試一起改。

### D4：translator / reviewer 合約一個 app 一份

- `.pi/l10n/translator.md` 是全域 `l10n-translator` 找不到指定合約時的預設路徑，改成只做分派：依 packet 的 `app` 欄位讀 `.pi/l10n/<app>.md`。DingPOS 現有合約搬到 `.pi/l10n/dingpos.md`，新增 `.pi/l10n/sotto.md`（產品、讀者、不翻的詞、可寫的檔案、驗證指令）。
- packet 帶 `app` 與 `contract` 欄位。
- project agent `l10n-reviewer` 改成不綁產品：產品與讀者描述、不翻的詞從 packet 指向的合約讀。

### D5：現有 9 種翻譯語言納入 pipeline 時，只信任能證明是最新的譯文

對每個 unit，找出該語言的值最後一次被修改的 commit：如果當時的 en 文字等於現在的 en，就把現在的 en hash 寫進 manifest（沿用現有譯文）；否則該 unit 視為過期，走正常的 `sync → l10n-translator → apply` 重翻，新增或改寫的整段再交給 `l10n-reviewer` 審。用 translator 輸出格式的檔案加上 `apply` 寫入，不為這次遷移新增常駐的指令。之後 `npm test` 的 `l10n check` 涵蓋 Sotto。

### D6：Sotto 的 sitemap 區塊由 script 產生

`node sotto/scripts/copy-spa-pages.js --write-sitemap` 改寫根目錄 `sitemap.xml` 的 Sotto 區塊，和 DingPOS 一樣；不帶參數時維持現在的一致性驗證。

### D7：首頁 scene 字串改由 app 同步（待 owner 決定）

`scene`（`HeroPhone.jsx`）與 `FeatureVisuals.jsx` 的介面字串，比照 DingPOS 的 `sync-scene-strings.mjs`：key 清單 + 從 sotto-ios `Localizable.strings` 複製成 `sotto/src/data/scenes/strings.<code>.json`，從 `translation.json` 移出。示範資料（人名、簡介、欄位值）仍是網站文案，留在 `translation.json` 翻譯。

## Slices

一條 branch `sotto-l10n`，在目前的 checkout 依序執行，每個 slice 完成並驗證後才派下一個。

| Slice | 內容 | 依賴 |
|---|---|---|
| A | D1 + D6，文件 | — |
| B | D2 + D3 + D4，測試，文件 | A |
| C | D5：9 種語言的 manifest、過期 unit 重翻與審查 | B |
| D | D7（只在 owner 同意時做） | A |

## 驗證

- `npm test`（含 `l10n check` 涵蓋兩個 app）、`cd sotto && npm run build`、`cd dingpos && npm run build`。
- 照 `.github/workflows/deploy.yml` 組 `_site/` 後跑 `node scripts/prerender.mjs --site-dir _site`：route audit 與 hydration check 全過。
- 前後比較 Sotto 12 種語言 build 出來的 HTML：除了刻意的變更（語言切換器順序、產生檔），canonical、hreflang、title、description 完全相同。

## 文件更新

`docs/specs/seo-aeo.md` §多語系 URL（Sotto 的單一來源改成 registry）、§翻譯語言（兩個 app）；`AGENTS.md` 的 Sotto 與 DingPOS translated languages 兩條。規則寫進 spec 後刪除這份 draft。
