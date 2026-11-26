# Requirements: DingPOS FAQ 圖文版（報表類試點）

## Summary

DingPOS v3.6 已上架，帶來稅務報表、申報對照、進項稅與匯出，FAQ 卻一篇都沒寫，`VERIFIED_APP_VERSION` 還停在 3.5；現有 67 篇沒有一張圖。這一輪以「報表」分類為試點：補齊 v3.6 文章、把整個分類改成每種語言各自截圖的圖文版，並建立 Gemini 4 Neon 寫原稿、再翻成 30 種語言的流程。

Owner 決定（2026-11-25）：範圍是報表類試點；截圖每種語言各截一套；寫稿用新建的 `faq-writer` agent（Gemini 4 Neon）。

## Non-goals

- 其他分類的圖文化（試點跑順後另開）。
- 用 CSS 重畫 app 畫面（首頁 Scenes 的做法）。
- FAQ 結構化資料、URL 結構的改動。

## US-001 v3.6 的報表功能有 FAQ，且整份 FAQ 對得上 v3.6 (P1)

- REQ-001: The reports category shall contain articles for the tax report, the filing-box summary (申報對照), recording input tax, and exporting reports, each with `since: "3.6"`.
- REQ-002: When `VERIFIED_APP_VERSION` becomes `"3.6"`, every FAQ article in every category shall agree with DingPOS `CHANGELOG.md` §[3.6].
- AC-001: Given the en and zh-Hant packs, When listing category `reports`, Then the four v3.6 articles exist next to the six existing ones.
- AC-002: Given CHANGELOG §[3.6], When each entry is checked against the FAQ, Then no article states pre-3.6 behavior for a changed feature (e.g. 付款方式改名、常用折扣、75折、規格售價、會員點數預設關閉).

## US-002 FAQ 文章能放每種語言自己的 app 截圖 (P1)

- REQ-003: The FAQ content schema shall support a screenshot block that names a shot; the page shall render that shot captured in the page's language, with declared width/height and a 1080w phone file.
- REQ-004: If a shipped language lacks a named shot's file, or the file is not WebP or not the registered size, or the block has no alt, then the DingPOS build shall fail.
- REQ-005: Screenshots shall be real captures of the DingPOS app in the page's language, produced by a script from UI-test fixtures (never fake-data generators or drawn UI).
- REQ-006: The FAQ content schema shall support `h2` section headings for long articles, excluded from the meta description.
- AC-003: Given an article with a screenshot block, When `/dingpos/ja/support/<slug>/` is built, Then its `<img>` points at the ja file and carries `width`, `height`, `srcset` and the translated alt.
- AC-004: Given one shipped language's shot file is deleted, When `npm run build` runs in `dingpos/`, Then it fails naming the language and shot.
- AC-005: Given the capture script runs for one language, When it finishes, Then every shot of that language is written and each step printed its verification line without `!`.

## US-003 報表類 10 篇改成圖文版，原稿由 Gemini 4 Neon 寫 (P1)

- REQ-007: A `faq-writer` agent on `google/gemini-4-neon` shall write one FAQ draft per run (en or zh-Hant) from a brief; facts and on-screen names come only from the brief.
- REQ-008: Each draft shall pass `guide-cleaner`, a main-session fact check against the DingPOS repo, and reach the pack through a script, never retyped.
- REQ-009: Each pilot article shall open with a 2–3 sentence direct answer and carry at least one screenshot block.
- AC-006: Given a brief, When `faq-writer` runs, Then it writes exactly the draft path and the draft converts into the pack without errors.
- AC-007: Given the converted pilot articles, When compared with the brief's facts and the app's `Localizable.strings`, Then every number and on-screen name matches.

## US-004 32 種語言齊全並上線 (P2)

- REQ-010: zh-Hans shall be regenerated from zh-Hant and reviewed by `zh-hans-reviewer`; the 29 translated languages shall be translated from en and reviewed through `npm run l10n -- dingpos`.
- REQ-011: The work shall reach `main` only when every shipped language is complete, the sitemap matches the pages, and build plus prerender pass.
- REQ-012: The rules for FAQ screenshots and the FAQ writing pipeline shall be documented in `docs/specs/seo-aeo.md` and AGENTS.md before merge.
- AC-008: Given the branch, When `npm test` and `npm run l10n -- check` run, Then both pass with no stale or missing unit.
- AC-009: Given the merged branch, When the deploy workflow runs, Then prerender and route audit pass.
- AC-010: Given the new articles, When owner reads en and zh-Hant, Then tone and accuracy are accepted (Human Acceptance).
