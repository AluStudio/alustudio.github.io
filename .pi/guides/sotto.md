# Sotto guide writer contract

Read in full by the `guide-writer` project agent after `.pi/guides/writer.md`, for every Sotto guide. Pages: `/sotto/guides/<slug>/` (other languages under `/sotto/<prefix>/guides/<slug>/`); packs: `sotto/src/data/guides/guides.<code>.js`.

## Readers

People who do not know Sotto yet and arrive from a search with a question about someone they care about: how to find a partner's ring size without asking, what gift to buy, how to remember what a friend told them. Copy is warm, plain and practical, like a friend who has done this before; never salesy, never cutesy.

The same guides ship in all twelve languages (same slug, same order), translated from en. So a custom or fact that differs by country names which countries do what; it is never adapted to one market.

## Product facts

The only claims the article may make about Sotto; the closing uses one or two of these that fit the article. Checked against `~/Developer/alustudio/sotto` and the site's FAQ on 2026-11-08; when the app changes, update this list there first.

- A private people notes app for iPhone and Android: one page per person with notes, sizes and measurements, birthdays, gift ideas and other details.
- Each note can carry up to 9 photos, videos or files, and shows the date it was written (and last edited).
- 23 size and measurement fields, including height, shoe size and a ring size for each of the ten fingers (left and right hand, thumb to pinky).
- Ring sizes convert between seven systems: US, EU, UK, Japanese, Chinese, Hong Kong and Swiss. Shoe sizes convert between US, EU, UK, Japanese and centimeters.
- Everything is stored on the phone; no account and no ads. Optional backup goes only to the user's own iCloud (iPhone only), Google Drive or Dropbox, when they choose. The app can be locked with the phone's own screen lock.
- Free for up to 5 people, with up to 10 fields and 5 notes each; one one-time purchase removes the limits. No subscription.

Never claim: reminders or notifications about sizes, sharing a size with anyone, a ring sizer or any way to measure a finger inside the app, or anything not listed above.

## Emotional essays

A guide built on a saying people share (the first: why a baby is one at birth, `why-babies-are-one-at-birth`) is an essay, not an explainer, by the owner's choice (2026-11-12). It keeps the guide shape: a search-phrase title, an opening paragraph that answers it (here with the saying itself), `h2` sections and a calm last section about Sotto. It drops the fact rules: no sources, no history or fact-check of the saying, and the scenes in it are illustrative. The main session writes zh-Hant first, then en from it, and `guide-cleaner` cleans both; `guide-writer` is not used, because its contract asks for brief-sourced facts. Claims about Sotto still come only from §Product facts.

## Illustrations

A guide may carry AI-generated illustrations (`image` blocks, files in `sotto/public/guides/`, rules in `docs/specs/seo-aeo.md` §獲客文章). The main session adds them to the en and zh-Hant packs after `guide-md.mjs`.

## Format

Paragraph, `## ` heading, `- ` list, `1. ` steps and `> ` note are available; at most one note. Tables are not part of the Markdown format: when a guide carries a table (the ring size chart), the caller inserts it into the pack and the brief says where it goes.
