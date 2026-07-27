---
summary: Central routing table for all project documentation
read_when:
  - First time entering the project
  - Looking for a specific doc
---

# alu-studio.com — Documentation Index

`alustudio.github.io` 的文件入口。專案本身的結構與開發指令見 repo 根目錄的 `AGENTS.md`。

## Start Here

1. `AGENTS.md`（repo 根目錄）— repo guardrails、目錄結構、本機開發、部署
2. [drafts/seo-aeo-optimization.md](./drafts/seo-aeo-optimization.md) — 目前進行中的最大宗工作

## Specs

尚無。既有規格已完成並歸檔於 `archive/`。

## Drafts

| 檔案 | 內容 | 何時讀 |
|------|------|--------|
| [seo-aeo-optimization.md](./drafts/seo-aeo-optimization.md) | SEO/AEO 全站優化：研究、計劃、決策、交接 | 接手或審查 `aeo-seo` 分支 |
| [seo-aeo-copy-review.md](./drafts/seo-aeo-copy-review.md) | 該次優化產出的全部草稿文案，集中一處 | 審核文案、merge 前 |
| [seo-aeo-baseline.md](./drafts/seo-aeo-baseline.md) | T0 基線記錄表 | **merge 前**必填 |
| [cloudflare-migration.md](./drafts/cloudflare-migration.md) | GitHub Pages → Cloudflare Worker 遷移紀錄，含 repo 不可刪除的決策 | 動到部署或 repo 名稱前 |

## Archive

`archive/specs/babbby-page/` — babbby 頁面的原始 requirements / plan / tasks，已完成。

## References

- 發布：push to `main` → GitHub Actions → `wrangler deploy`
- Worker 行為與回歸測試：`src/worker.js`、`npm test`
