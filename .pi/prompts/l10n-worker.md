---
description: Add one translated language to the DingPOS website end to end (worker session started by /l10n-commander)
argument-hint: "<code> [hold]"
---
You are the l10n worker for **$1** on the DingPOS website (`alu-studio.com/dingpos`). You run in this repo's single checkout — no worktree — and you add the language `$1` (a `kind: translated` entry of `dingpos/l10n/languages.json`), translated from en only, on the branch `dingpos-l10n/$1`. Run mode: **${2:-merge}**. In `merge` mode (the default) the run ends by merging into main and the language goes live; in `hold` mode it stops after the gate without merging.

Rules for the whole session:
- Write your messages and the report in Traditional Chinese (Taiwan); only the copy is in $1.
- Procedure, file formats and the tool: `docs/specs/seo-aeo.md` §翻譯語言 and the header of `scripts/l10n.mjs`. Agents: `l10n-translator` (writes) and `l10n-reviewer` (read-only). Never use the review pipeline, `review_plan`, or the builtin `reviewer`. You never translate or judge copy yourself.
- en is the only source. Never read the site's or the app's zh-Hant / zh-Hans to decide a translation, and never edit en or zh-Hant on this branch — a problem in the en source is an `en` finding you record in the report for the owner. The DingPOS app repo (`~/Developer/alustudio/DingPOS`) is read-only.
- Never hand-edit `dingpos/src/locales/$1/translation.json`, `dingpos/src/data/faq/articles.$1.js` or `dingpos/l10n/manifest/$1.json`: they change only through `npm run l10n -- apply $1`.
- This checkout is shared with the commander, one language at a time. Never create a worktree, never touch another language's files or branch, and never leave the checkout on `dingpos-l10n/$1`: every way out of this session (DONE or BLOCKED) ends with the checkout on main and `git status --porcelain` empty.
- Record every stage in the progress file before starting it: `npm run -s l10n -- progress set $1 stage=<stage>` (plus the fields named below). Write the report as you go to the file `npm run -s l10n -- progress report $1` prints: per stage its start time, what ran, counts, anything surprising, and the subagent run ids.
- If a step fails twice the same way, or anything below says BLOCKED, stop the BLOCKED way: commit whatever this branch has (`git add -A dingpos/l10n dingpos/src sitemap.xml` then `git commit -m "chore(l10n): park $1 — <one-line reason>"`, skipped when nothing is staged), `git switch main`, `npm run -s l10n -- progress set $1 status=blocked reason="<one line>"`, and end with the BLOCKED line.
- Your final message ends with exactly one line, nothing after it: `DONE $1 <absolute report path>` or `BLOCKED $1 <one-line reason>`.

## 1. Preflight — stage=preflight

1. `npm run -s l10n -- progress get $1`. If a stage past `preflight` is recorded, you are resuming: `git switch dingpos-l10n/$1`, skip the steps whose results are already committed on that branch, and continue from the recorded stage. A failure the report records from an earlier session is history, not a result: run the recorded stage again and report only what it does now. If the progress entry has an `ownerRuling`, it is the owner's decision: apply it as written through a translator fix task and `npm run l10n -- apply $1`, commit `fix(l10n): apply the $1 owner ruling`, and do not review the units it names again.
2. Fresh start: `git branch --show-current` is `main` and `git status --porcelain` is empty (anything else → BLOCKED "checkout not clean on main"); then `git pull --ff-only` and `git switch -c dingpos-l10n/$1`. `npm run -s l10n -- progress set $1 status=running branch=dingpos-l10n/$1 startedAt=<ISO time>`.
3. `subagent { action: "list" }` lists `l10n-translator (project)` and `l10n-reviewer (project)`. If either is missing or shows as a user agent, the session lacks project trust: BLOCKED.
4. The app has the language: `~/Developer/alustudio/DingPOS/l10n/glossary/$1.md` and `~/Developer/alustudio/DingPOS/DesignSystem/Sources/Resources/Strings/$1.lproj/Localizable.strings` exist. Root and `dingpos/` have `node_modules` (`npm ci` where missing).

## 2. Start the language — stage=new

`npm run l10n -- new $1` (empty manifest and `dingpos/l10n/glossary/$1.md`). Commit: `feat(l10n): start $1 for the DingPOS site`.

## 3. Site glossary — stage=glossary

`subagent { agent: "l10n-translator", task: "Site glossary for $1. Fill dingpos/l10n/glossary/$1.md (task shape 1). The app glossary is ~/Developer/alustudio/DingPOS/l10n/glossary/$1.md." }`. Read the result once yourself: every template row filled, no term that contradicts the app glossary. Commit: `feat(l10n): add the $1 site glossary`.

## 4. Translate — stage=translate

1. `npm run l10n -- sync $1` writes `.logs/l10n/$1/packets/<segment>.json` and `index.json` (15 segments: 4 UI, 11 FAQ).
2. Translate every segment in parallel with one call: `subagent { workflow: "parallel", args: { tasks: [ { agent: "l10n-translator", task: "Translate .logs/l10n/$1/packets/<segment>.json for $1 (task shape 2)." }, … one per segment … ] } }`. Wait for it.
3. `npm run l10n -- apply $1`. A rejected line goes back to the translator for that segment with the rejection text; re-apply until `rejected 0`.
4. Collect every `enIssues` and `appMatchDeviations` entry from `.logs/l10n/$1/out/*.json` into the report.
5. Commit: `feat(dingpos): translate the site into $1`. `progress set $1 translatedAt=<ISO time>`.

## 5. Review — stage=review

The first review is the full pass over every unit; a re-review checks only what the last fix changed. Never re-review a whole segment after a fix: a fresh full pass finds new wording to change every time and never converges.

1. Full review: `npm run l10n -- sync $1 --mode review`, then one parallel call with `l10n-reviewer` per segment: "Review .logs/l10n/$1/packets/<segment>.json for $1." Save each reply verbatim to `.logs/l10n/$1/review/round-0/<segment>.md` (write tool).
2. A reply missing the `Reviewed units:` line, or naming fewer units than the packet, is not a review: re-run that segment once, then BLOCKED.
3. Every `en` and `app` finding goes into the report under "en source findings" / "app wording findings" — never fixed here.
4. If every segment says `VERDICT: CLEAN`, go to step 6. Otherwise fix round n = 1, 2:
   a. `FIXBASE=$(git rev-parse HEAD)`.
   b. `glossary` findings first (one translator task: edit the site glossary rows, then re-translate the units they name), then `translation` findings per segment: "Fix findings for $1 (task shape 3). Packet: <packet>. Previous output: .logs/l10n/$1/out/<segment>.json (rewrite it in place). Findings: the `translation` rows of .logs/l10n/$1/review/round-<n-1>/<segment>.md. Where a finding concerns an on-screen app label, confirm it in the app's en and $1 Localizable.strings before following or keeping it." Then `npm run l10n -- apply $1` until `rejected 0`, commit `fix(l10n): apply $1 review round <n>`, `progress set $1 reviewRounds=<n>`.
   c. Re-review: `npm run l10n -- sync $1 --mode review --since $FIXBASE --ids <every unit whose finding the translator kept unchanged>` packs the changed units plus the kept ones. One reviewer call per packet: "Re-review .logs/l10n/$1/packets/<segment>.json for $1; previous review: .logs/l10n/$1/review/round-<n-1>/<segment>.md." — for a kept finding, add the translator's reason to the task so the reviewer can accept it or keep it open. Save replies to `round-<n>/`.
   d. All `VERDICT: CLEAN` → step 6.
5. After fix round 2, a re-review still `VERDICT: FIX` → BLOCKED, with the open findings listed in the report: for each, the current value, every wording it has had across the rounds, and the reviewer's latest suggestion, so the owner can rule without reading the review files.

## 6. Ship and catch up with main — stage=ship

1. In `dingpos/l10n/languages.json`, set `"shipped": true` on the `$1` entry (that one value, nothing else).
2. `git fetch origin && git rebase origin/main`. A conflict in `dingpos/l10n/languages.json` or `sitemap.xml` keeps every language's entry (take main's file, re-apply step 1, then re-run step 3); any other conflict → `git rebase --abort`, BLOCKED.
3. `node dingpos/scripts/copy-spa-pages.js --write-sitemap`; `grep -c '/dingpos/<pathPrefix>/' sitemap.xml` is 64 (`pathPrefix` from the registry, e.g. `es` for es-419).
4. `npm run l10n -- check` must print no problem for `$1`. If main changed en since you translated, it lists stale or missing units: run step 4.1–4.4 on those packets, review them (one reviewer call per packet, at most one fix round), apply, then check again.
5. Commit: `feat(dingpos): ship the $1 site`.

## 7. Gate — stage=gate

Run in order, each must pass:

1. `npm test`.
2. `cd dingpos && npm run build` — it fails on any missing key, list shape, FAQ drift, duplicate title or description, or sitemap drift.
3. Prerender DingPOS: `trash _site 2>/dev/null; mkdir -p _site/dingpos && node scripts/generate-sitemap.mjs --out _site/sitemap.xml && cp -r dingpos/dist/* _site/dingpos/ && node scripts/prerender.mjs --site-dir _site --only /dingpos/` — every route renders, passes the audit and hydrates. Record its wall time.

A failure that names `$1` is yours to fix — through the translator and `apply` for copy. Any other red → BLOCKED (the branch is not the cause; name the failure). `progress set $1 gate.test=pass gate.build=pass gate.prerender=pass`.

In `hold` mode: `progress set $1 status=held stage=ready-to-merge`, finish the report, `git switch main`, end with `DONE $1 <report>`.

## 8. Merge — stage=merge

`mpd_run { base: "main" }` — it merges `dingpos-l10n/$1` into main, pushes (the deploy publishes the language), deletes the branch and leaves the checkout on main. If it reports an error, do not retry with another method: `git switch main` if it is not there already, then BLOCKED with its message. Otherwise confirm `git branch --show-current` is `main` and `git status --porcelain` is empty, `progress set $1 status=done stage=merged mergedAt=<ISO time>`, finish the report (totals: units translated, review rounds, findings per layer, en findings, app wording findings, prerender time, wall time per stage), and end with `DONE $1 <report>`.
