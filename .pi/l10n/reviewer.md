# Website reviewer contract

Read in full by the global `l10n-reviewer` agent (`~/.pi/agent/agents/l10n-reviewer.md`) before every website review task. Inputs: language code (the app's lproj id) + a review packet (+ the previous reply for a re-review), or site glossary row names.

You review one language of one website of this repo — DingPOS (alu-studio.com/dingpos), Sotto (alu-studio.com/sotto) or Babbby (alu-studio.com/babbby). Before reviewing, read the translator contract the packet names in its `contract` field (`.pi/l10n/dingpos.md`, `.pi/l10n/sotto.md` or `.pi/l10n/babbby.md`): it describes the product and its readers, which names stay untranslated, the address form, and the per-unit rules the translation must follow. Hold the translation to it. The packet's `app` field names the site; its files live under that directory (`<app>/src/locales/`, the pack the contract names; Babbby has no pack, all its copy is `ui:` units).

The repo is the current working directory.

## Hard rules

- English is the only source. Never open or compare with the site's or the app's zh-Hant or zh-Hans, or any other language: they are not references for this language. The target language's own site files and the app's strings in that language are yours to read.
- Modes: packet review, re-review and glossary row review (rows of the site glossary). There is no screenshot review.

## Sources of truth

- en (`<app>/src/locales/en/translation.json` and the app's en pack) is the only source.
- The app's own wording: `packet.glossary.app` (an absolute path into the app repo; `null` when the app has no glossary — the translator contract then names the app's strings file to check against) fixes domain terms and UI vocabulary. The site glossary (`packet.glossary.site`) adds website-only words. Hold every value to both; for a glossary row review, the app glossary is the concept source.
- `appMatch` on a `ui:` unit is the app's translation of the identical en string; `appTerms` on a pack packet are app screen, button and tab names that appear in its entries, with the app's translation. Where the site names that element, it must say what the app shows.
- The page component settles what a UI string labels: `grep -rn "<key>" <app>/src/pages <app>/src/components`.

## Packet fields

A packet (`.logs/l10n/<app>/<code>/packets/<segment>.json`, written by `npm run l10n -- <app> sync <code> --mode review`, with `--since <ref>` for the units changed since a commit and `--ids` for named units) has `app`, `contract`, `glossary` and units. Each unit has `id`, `en`, `current` (the translation) and possibly `appMatch`. A pack unit (`faq:` article or `cat:` category for DingPOS, `guide:` guide for Sotto and Babbby) holds only its text fields, as the translator contract's unit table describes.

## Already enforced — do not re-check

`npm run l10n -- <app> apply` rejects placeholders that do not match, empty values and item counts that differ from en.

## Website checks

Add these to the packet review:

- App wording: names of screens, buttons, tabs, fields and settings match `appTerms` / the app glossary or strings / `appMatch`, so a reader who follows the page in the app finds the same words — where the translator contract says readers follow steps on a device (DingPOS FAQ steps on an iPad), this matters most. A `ui:` value that differs from its `appMatch` needs a reason the site's sense differs.
- Fixed terms: the names the translator contract keeps untranslated (and plan names, where it has them) stay as written.
- Meaning, for a product site: a product claim that drifts (a feature, a limit, a price, what works offline or stays on the device) misleads a reader deciding whether to use the app.
- Search and answer: a page title (DingPOS FAQ `question`, Sotto or Babbby guide `title`) reads like the question a reader in that market types into a search engine; the opening paragraph answers it directly; the search fields the translator contract names (`keywords`, `summary`) are terms and sentences readers of the language would actually search and click.
- Register: reads like a product site written in the language, natural for that site's reader.
- Mechanics the build cannot catch: where the translator contract describes split sentences (DingPOS `_before` / `_after` around a price), the pair reads as one natural sentence; punctuation follows the language.

## Re-review

An article or guide is one unit, but on re-review judge only the fields a previous finding named or the fix changed; its other fields (`keywords`, other `content` entries) are out of scope unless the fix touched them. App wording is a re-review check alongside Meaning, Glossary and Grammar. Search-term preferences are not: like register, they go in a `note` row. A unit the packet carries because the translator kept your finding unchanged comes with the translator's reason in the task: accept it, or keep the finding open with why the reason does not hold.

## Extra layer

- `app` — the app's own translation (`appMatch`, `appTerms`, its glossary or strings) is wrong for this language. Reported to the owner, who fixes it in the app first; the site keeps the app's wording meanwhile. Never blocking.

## Output

The key column is `id`, and the reviewed line is `Reviewed units:`. For a finding inside an article or guide, put the field path in the id column (`faq:how-to-set-up:content.1.items.0`, `guide:gift-log:content.3.text`), and give the corrected text of that field.
