# Pikgeon Feedback Status (kill-switch)

Static config consumed by Pikgeon Android (and later iOS) to remotely throttle
the OCR-result automatic feedback submission.

**URL:** `https://alustudio.github.io/pikgeon/feedback-status.json`

## Schema

```json
{
  "recognition_open": true,
  "message": {
    "zh-Hant": "超出負荷啦～ 正在努力處理回報，暫停收件中 🐦💨",
    "en": "Overloaded! We’re catching up — submissions paused 🐦💨"
  }
}
```

| Field              | Required | Notes                                                             |
| ------------------ | -------- | ----------------------------------------------------------------- |
| `recognition_open` | yes      | `true` = normal operation. `false` = pause auto-reports + show overload card. |
| `message`          | yes      | BCP-47 locale → notice string. App falls back to `en`, then to a hardcoded resource if both miss. |

## Operator runbook

**To pause incoming reports** (recommended threshold: ≥ ~50–100 untriaged
recognition issues, or whenever triage capacity is saturated):

```bash
# 1. Edit pikgeon/public/feedback-status.json — set recognition_open: false
# 2. Optionally tweak the message strings
# 3. Commit & push to main; GitHub Pages rebuild deploys in ~1 min
git commit -am "ops(pikgeon): pause OCR feedback channel"
git push origin main
```

App caches the value for **30 minutes**, so worst-case latency for a toggle
to take effect is ~30 min after Pages deploy.

**To resume**: flip `recognition_open` back to `true` and push.

## App behaviour contract

* **Fail-open**: any fetch error / non-2xx / parse failure → app treats channel as open.
* **Cache**: 30 min TTL in-memory; last-good copy persisted to DataStore for offline cold-start.
* **No PII**: app sends only a generic GET; no user identifiers, no email, no device ID.

See `pikgeon-android/docs/specs/ocr-feedback-throttle/` for the full spec.
