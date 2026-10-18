# Plan: DingPOS 官網 29 種翻譯語言

## Technical Approach

- 語言清單改成一份資料檔 `dingpos/l10n/languages.json`，i18n、copy-spa-pages、sitemap lastmod、l10n 工具都從它讀；加一種語言只新增資料，不改程式。
- 照 Sotto 的模式，每頁只載入自己語言的 UI 字串和 FAQ pack（`import.meta.glob`，載完才 hydrate）。
- 新增 `scripts/l10n.mjs`：以 manifest 記錄每個翻譯單位是從哪一版 en 翻的，產生翻譯 packet、套用 translator 輸出、在 `npm test` 檢查缺漏與過期。翻譯語言的 pack 是工具產生的檔案，不手改。
- 翻譯 packet 自帶 app 的資產：該語言的 app glossary、和網站 en 逐字相同的 app 字串及其譯文；網站只維護 app 沒有的詞。
- Phase 0 在 `l10n` branch 上完成基礎建設與 ja，merge 上線；其餘 28 種由 Herdr commander 一次一種地交給 worker session，每種語言在自己的 branch 上做完、merge 進 main 即上線。

## Decisions

### DEC-001: 語言清單是一份鏡像 app 的資料檔

**Choice**: `dingpos/l10n/languages.json` 列 32 種語言，每筆有 `code`（app 的 lproj id，例如 `es-419`、`pt-BR`）、`kind`（source / owner / generated / translated，同 app `l10n/languages.json`）、`label`（app 設定頁顯示的語言自稱，例如 `Español (Latinoamérica)`）、`pathPrefix`、`hreflang`、`ogLocale`、`shipped`（true 才會出 URL、進 hreflang 和 sitemap；worker 在語言審過後才設成 true）。`i18n.js` 的 `supportedLanguages` 與 `copy-spa-pages.js` 的 `LOCALES` 改由它產生。
**Alternatives**: 維持兩份手寫清單（現狀）— 32 筆要逐字對齊兩份，seo-aeo 已經把「兩邊必須一致」列成規則，就是因為它會漂移。
**Rationale**: `code` 用 app 的 id，工具才能直接找到 app 的 glossary 與 lproj；一份資料檔讓 worker 加語言時只動資料。
**Satisfies**: REQ-001, REQ-005, REQ-012

### DEC-002: URL prefix、hreflang、`<html lang>` 用同一個值

**Choice**: `hreflang` 是 Google 接受的代碼，`<html lang>` 與它相同，`pathPrefix` 是它的小寫。只有 es-419 和 app id 不同：hreflang 與 lang 是 `es`，prefix 是 `es/`。其他直接用 app id（`pt-BR` → `pt-br/`，`nb` → `nb/`）。
**Alternatives**: hreflang 寫 `es-419` — Google 文件明列 es-419 不被支援；`<html lang="es-419">` 而 hreflang `es` — 違反 prerender audit「`<html lang>` 等於指向自己的 hreflang」。
**Rationale**: 三個值一致，audit 規則不用改；網站只有一種西班牙文，`es` 不會和別的版本衝突。
**Satisfies**: REQ-001, REQ-003

### DEC-003: 每頁只載入自己的語言

**Choice**: 照 `sotto/src/i18n.js` 與 `sotto/src/data/guides/index.js`：`i18nReady` 只載當頁語言的 `translation.json`，`loadFaq(code)` 只載當頁語言的 `articles.<code>.js`，`main.jsx` 等兩者完成才 hydrate。`getFaq()` 不再接受 lang 參數。
**Alternatives**: 維持 static import — 32 種語言約 3 MB 原始碼會進每一頁的 bundle。
**Rationale**: repo 裡已經有一份驗證過 hydrate 不 mismatch 的實作（Sotto），照抄風險最低。
**Satisfies**: REQ-006

### DEC-004: 不加新的 webfont，Manrope 以外的文字用系統字型

**Choice**: 拉丁、西里爾、希臘、越南文由 Manrope 涵蓋。ja、ko 頁的 `--dp-font-cjk` 改用系統字型 stack（同 Sotto 的作法：Noto Sans TC 會用繁中字形畫日文）。th、km、lo、ka、bn、hi 交給系統字型的 fallback，iOS、Android、Windows、macOS 都內建這些文字的字型。
**Alternatives**: 每種文字各自用 fontsource 自託管 Noto（八個 package 都存在）— 每頁多一份 `@font-face` CSS 和字型下載，而系統字型已經能正確顯示。
**Rationale**: 零下載，符合 performance.md 的原則；若 AC-011 的實機截圖出現豆腐字，再針對那一種文字改成自託管。
**Satisfies**: REQ-007

### DEC-005: 翻譯語言的 pack 由工具產生

**Choice**: `npm run l10n -- apply <code>` 寫出 `dingpos/src/locales/<code>/translation.json` 與 `dingpos/src/data/faq/articles.<code>.js`。非文字欄位（slug、category、related、since、icon、group、type）一律從 en 複製，只有文字欄位來自翻譯；檔頭寫明不可手改。套用時拒絕 `{{…}}` placeholder 和 en 不同的值、空值，以及從舊版 en 翻出來的值。
**Alternatives**: translator 直接編輯 pack — slug、related、since 會在 29 份檔案裡各自漂移，build 只能事後擋。
**Rationale**: 和 zh-Hans 由 generator 產生是同一個理由；欄位分類沿用 `scripts/gen-zh-hans.mjs` 的 pack traversal（抽成共用模組）。
**Satisfies**: REQ-002, REQ-010, REQ-011

### DEC-006: 以 manifest 判斷過期

**Choice**: 每種翻譯語言一份 `dingpos/l10n/manifest/<code>.json`，記錄每個翻譯單位翻譯時的 en hash。翻譯單位：UI 字串是一個 key（`ui:<dotted.path>`），FAQ 是一整篇文章（`faq:<slug>`）或一個分類（`cat:<key>`），hash 只算文字欄位。`scripts/l10n.test.mjs` 對 repo 的實際狀態執行 `check`：缺漏、多出、過期都會失敗。
**Alternatives**: 只比對 key 集合 — 抓得到缺漏，抓不到「英文改了但翻譯還是舊的」，這正是 US-002 要擋的。
**Rationale**: 跟 app 的 manifest 同一個模型，已在 29 種語言上運作過；以整篇文章為單位，和 zh-Hans review packet 的切法一致。
**Satisfies**: REQ-010, REQ-011

### DEC-007: 直接沿用 app 的用詞資產

**Choice**: `sync` 在本機讀 app repo（預設 `~/Developer/alustudio/DingPOS`，可用 `--app-repo` 覆寫），每份 packet 附上：該語言的 `l10n/glossary/<id>.md`；以及和網站 en 逐字相同的 app 字串（目前 248 個 UI key 中有 33 個）與它們的 app 譯文和 translator note，標成 `appMatch`。FAQ packet 另附文章裡逐字出現的 app 按鈕、畫面、分頁名稱（依 note 的 role 是 `button`/`title`/`tab`/`menu`/`header` 篩選）。translator 對 `appMatch` 預設採用，語境不同才改，並要說明理由。網站才有的詞記在 `dingpos/l10n/glossary/<code>.md`。
**Alternatives**: 網站各語言從頭建 glossary — 重做 app 已經審過的決策，你在 app 裁決過的 th、ms、hi、sq 寫法也可能被翻成別的。
**Rationale**: app 的 owner 裁決已經寫進它的字串，借用字串就借到了裁決；app repo 只在本機 `sync` 時讀，CI 和 `npm test` 不依賴它。
**Satisfies**: REQ-008, REQ-009

### DEC-008: sitemap 仍是 URL 成員的來源，但由 build 改寫

**Choice**: `dingpos/scripts/copy-spa-pages.js --write-sitemap` 用它算出的頁面清單，改寫根目錄 `sitemap.xml` 的 DingPOS 區塊；一般 build 仍然檢查兩者完全一致。`scripts/generate-sitemap.mjs` 的 `dingposRules` 改成對 registry 的每個 prefix 產生，lastmod 的來源檔加上該語言的 pack。
**Alternatives**: 手改 2,048 行 sitemap — 每種語言 64 行，worker 一定會漏；讓 generate-sitemap 直接從資料推導 DingPOS URL — 改掉 seo-aeo「sitemap.xml 是唯一來源」的規則，prerender 的 route 清單也會跟著變。
**Rationale**: 保留現有的契約和檢查，只把手寫換成產生。
**Satisfies**: REQ-001, REQ-003

### DEC-009: Herdr commander + worker，單一 checkout，只開 branch，一次一種語言

**Choice**: 照 app 的 `.pi/prompts/l10n-commander.md` 與 `l10n-worker.md` 改寫成網站版，但不用 worktree。commander 每次開始一種語言前確認 checkout 停在 main、`git status` 乾淨；worker 從最新的 main 開 `dingpos-l10n/<code>`，用 `mpd_run` merge 回 main。BLOCKED 的語言先把半成品 commit 在自己的 branch，再切回 main 才結束。worker 的步驟：new → sync → 平行翻譯各 segment → apply → check → 第一輪完整 review → 最多兩輪修正（重審只看改過的單位）→ write-sitemap → 該語言的 build 與 prerender → docs → merge。進度存在 git 外（`npm run l10n -- progress`）。
**Alternatives**: worktree 平行跑 — user 指定不用；每個 worktree 都要對五個 app 重新 `npm ci`，共用清單（registry、sitemap）的 rebase conflict 也會出現。Ralph — 29 種語言彼此獨立，各需要乾淨的 context。
**Rationale**: 序列跑讓每個 branch 都從已含前一種語言的 main 開始，共用清單不會衝突；語言內部仍用 subagent 平行翻譯。代價是跑的期間這個 checkout 不能拿來做別的事。
**Satisfies**: REQ-012, REQ-013

### DEC-010: translator、reviewer 從 app 複製

**Choice**: `.pi/agents/l10n-translator.md`（`anthropic/claude-sonnet-5-5`, medium）與 `l10n-reviewer.md`（`openai-codex/gpt-6-luna`, high, read-only）從 app 複製，改成網站的 packet 格式並加上網站規則：FAQ 標題用該語言實際的搜尋問法、先 2–3 句直接回答、title 不重複。en 有問題的 finding 只記錄給 owner，不在語言 branch 修。
**Alternatives**: 從零寫 — app 版本已經處理過 review 不收斂、finding 分層等問題。
**Rationale**: 同一組模型，網站和 app 的語氣與用詞判斷一致。
**Satisfies**: REQ-008, REQ-009, REQ-013

### DEC-011: Privacy 與 Terms 照常翻譯，不加「以英文版為準」

**Choice**: 和其他頁面一樣翻譯（約 1,150 字）。
**Alternatives**: 加一句英文版優先的聲明 — 需要新增 UI 字串和法務判斷，user 沒有提出。
**Rationale**: Sotto 的 9 種翻譯語言是同樣做法（已查 `sotto/src/locales/*/translation.json`，沒有這類聲明）。
**Satisfies**: REQ-002

## Interfaces / Contracts

```
npm run l10n -- new <code>                    # empty manifest + site glossary from template
npm run l10n -- sync <code> [--mode review] [--since <ref>] [--app-repo <path>]
                                              # → .logs/l10n/<code>/packets/<segment>.json
npm run l10n -- apply <code>                  # .logs/l10n/<code>/out/*.json → packs + manifest
npm run l10n -- check                         # missing / extra / stale, exit 1 on any
npm run l10n -- progress show|get <code>|set <code> k=v …
```

```
packet: { lang, segment, units: [{ id, en, enHash, appMatch?: { key, value, note } }],
          glossary: { app: <path>, site: <path> }, appTerms: [{ en, value, role }] }
out:    { lang, segment, units: [{ id, enHash, value }], enIssues: [...] }
```

Segment：UI 依 top-level key（`pricing`、`privacy`、`terms` 各自一段），FAQ 依 category。

## Data Flow

```
DingPOS repo (glossary, lproj) ──sync──▶ packets ──translator──▶ out/*.json
dingpos en sources ──────────────sync──┘                           │
                                                          apply ◀───┘
                        packs + manifest ──▶ copy-spa-pages (checks, sitemap) ──▶ prerender audit
```

## Change Map

| File | Action | Change | Satisfies |
|------|--------|--------|-----------|
| `dingpos/l10n/languages.json` | Create | 32 種語言的 registry | REQ-001, REQ-003, REQ-005 |
| `dingpos/src/i18n.js` | Modify | 從 registry 產生 `supportedLanguages`，只載當頁語言，匯出 `i18nReady`、`currentLanguage` | REQ-001, REQ-006 |
| `dingpos/src/data/faq/index.js` | Modify | `loadFaq(code)` / `getFaq()` | REQ-006 |
| `dingpos/src/main.jsx` | Modify | 等 `i18nReady` 與 `loadFaq` 再 hydrate | REQ-006 |
| `dingpos/src/pages/SupportPage.jsx`, `SupportArticlePage.jsx` | Modify | 改用 `getFaq()` | REQ-006 |
| `dingpos/src/index.css` | Modify | ja、ko 的 `--dp-font-cjk` 系統字型 stack | REQ-007 |
| `dingpos/scripts/copy-spa-pages.js` | Modify | `LOCALES` 從 registry 來；UI key 完整性檢查（移植 Sotto 的 `validateLocales`）；`--write-sitemap` | REQ-001–004 |
| `scripts/generate-sitemap.mjs` | Modify | `dingposRules` 對每個 registry prefix 產生 | REQ-001 |
| `sitemap.xml` | Modify | DingPOS 區塊由 `--write-sitemap` 改寫 | REQ-001 |
| `scripts/l10n.mjs`, `scripts/l10n.test.mjs` | Create | new / sync / apply / check / progress，以及 repo 狀態檢查 | REQ-010, REQ-011, REQ-008 |
| `scripts/pack-fields.mjs` | Create | 從 `gen-zh-hans.mjs` 抽出的 pack traversal，兩邊共用 | REQ-010 |
| `package.json` | Modify | `l10n` script | REQ-011 |
| `dingpos/l10n/glossary/_template.md`, `dingpos/l10n/glossary/<code>.md`, `dingpos/l10n/manifest/<code>.json` | Create | 網站專用詞與 manifest，每種語言一份 | REQ-008, REQ-010 |
| `dingpos/src/locales/<code>/translation.json`, `dingpos/src/data/faq/articles.<code>.js` | Create | 29 種語言各一份，由 apply 產生 | REQ-002, REQ-012 |
| `.pi/agents/l10n-translator.md`, `.pi/agents/l10n-reviewer.md` | Create | 從 app 複製並改寫 | REQ-008, REQ-013 |
| `.pi/prompts/l10n-commander.md`, `.pi/prompts/l10n-worker.md` | Create | 單一 checkout、只開 branch 的版本 | REQ-012, REQ-013 |
| `.github/workflows/deploy.yml` | Modify | 只在 prerender 實測太慢時調整 `--concurrency` | NFR Build |
| `docs/specs/seo-aeo.md`, `docs/specs/performance.md`, `AGENTS.md` | Modify | 語言清單改指向 registry、es 的 hreflang、DingPOS 字型規則、翻譯流程的入口 | — |

## Verification

| Layer | What | How |
|-------|------|-----|
| Unit | manifest 雜湊只看文字欄位；apply 拒絕 placeholder 不符、空值、舊 en；非文字欄位從 en 複製；registry 衍生的 prefix、hreflang（es-419 → `es`） | `npm test`（`scripts/l10n.test.mjs`） |
| Repo state | 每種已上線語言沒有缺漏、多出、過期的單位 | `npm test` |
| Build | UI key、FAQ slug 完整；title、description 不重複；sitemap 一致 | `cd dingpos && npm run build` |
| Prerender | 每頁剛好一個 h1、hreflang 雙向互指、`<html lang>` 一致、hydrate 不 mismatch | `node scripts/prerender.mjs --site-dir _site --only /dingpos/` |
| Bundle | ja 頁只下載 ja 的字串與 pack（AC-010） | build 後檢查 `/dingpos/ja/` 的 network requests |
| Scale | ja 上線後量 DingPOS prerender 時間，推算 32 種語言是否需要調整 concurrency；`_site` 檔案數低於 20,000 | 計時 `prerender.mjs --only /dingpos/`；`find _site -type f \| wc -l` |
| Visual | th、km、lo、ka、bn、hi 各一頁沒有豆腐字（AC-011） | iOS Simulator Safari 截圖 + Android emulator Chrome 截圖 |
