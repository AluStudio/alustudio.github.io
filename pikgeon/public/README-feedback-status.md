# Pikgeon Feedback Status (kill-switch)

Static config consumed by Pikgeon Android (and later iOS) to remotely throttle
the OCR-result automatic feedback submission.

**URL:** `https://alustudio.github.io/pikgeon/feedback-status.json`

## Schema

```json
{
  "recognition_open": true,
  "message": {
    "zh-Hant": "超出負荷啦～ 正在努力處理已回報的辨識問題\n暫停收件中 🐦💨",
    "en": "Overloaded! We’re catching up on reported issues\nSubmissions paused 🐦💨"
  }
}
```

| Field              | Required | Notes                                                             |
| ------------------ | -------- | ----------------------------------------------------------------- |
| `recognition_open` | yes      | `true` = normal operation. `false` = the OCR-result report checkbox is rendered disabled with a red Block icon and a red overload subtitle, and no background feedback is submitted. |
| `message`          | yes      | BCP-47 locale → notice string. App falls back to `en`, then to a hardcoded resource if both miss. `\n` is honoured as a hard line break. |

## Operator runbook

### Recommended: from the pikgeon-android repo

```bash
cd ~/Developer/AluStudio/pikgeon-android
scripts/feedback-channel status   # check current state
scripts/feedback-channel pause    # turn channel off
scripts/feedback-channel resume   # turn channel on

# Optional: custom messages (zh-Hant + en)
scripts/feedback-channel pause "暫停中，預計明天恢復 🐦" "Paused, back tomorrow 🐦"
```

The script clones / updates this repo, edits the JSON, commits + pushes,
then polls the published URL until GitHub Pages reports the new state.

### Manual fallback (GitHub UI)

1. Edit [`pikgeon/public/feedback-status.json`](https://github.com/AluStudio/alustudio.github.io/edit/main/pikgeon/public/feedback-status.json)
2. Flip `"recognition_open": true` ↔ `false`
3. Commit to `main` — GitHub Pages auto-deploys in ~1 minute

### Latency

| Stage | Time |
| --- | --- |
| GitHub Pages deploy | ~1 min |
| App in-memory cache TTL | 30 min |
| **Worst-case total** | **~31 min** before all live installs reflect the new state |

Newly-launched app instances pick up the latest state immediately on first fetch.

## App behaviour contract

* **Fail-open**: any fetch error / non-2xx / parse failure → app treats the channel as open.
* **Cache**: 30-min TTL in-memory; last-good copy persisted to DataStore so cold-starts with no network still respect the most recent state.
* **No PII**: the app sends a plain anonymous GET; no user IDs, no email, no device ID.
* **Manual feedback unaffected**: Settings → 意見回饋 stays available regardless of `recognition_open`.

See `pikgeon-android/docs/specs/ocr-feedback-throttle/` for the full spec.
