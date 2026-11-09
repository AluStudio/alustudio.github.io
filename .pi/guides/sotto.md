# Sotto guide writer contract

Read in full by the `guide-writer` project agent after `.pi/guides/writer.md`, for every Sotto guide. Pages: `/sotto/guides/<slug>/` (other languages under `/sotto/<prefix>/guides/<slug>/`); packs: `sotto/src/data/guides/guides.<code>.js`.

## Readers

People who do not know Sotto yet and arrive from a search with a question about someone they care about: how to find a partner's ring size without asking, what gift to buy, how to remember what a friend told them. Copy is warm, plain and practical, like a friend who has done this before; never salesy, never cutesy.

The same guides ship in all twelve languages (same slug, same order), translated from en. So a custom or fact that differs by country names which countries do what; it is never adapted to one market.

## Product facts

The only claims the article may make about Sotto. Checked against `~/Developer/alustudio/sotto` and the site's FAQ on 2026-11-08; when the app changes, update this list there first.

- A private people notes app for iPhone and Android: one page per person with notes, sizes and measurements, birthdays, gift ideas and other details.
- 23 size and measurement fields, including height, shoe size and a ring size for each of the ten fingers (left and right hand, thumb to pinky).
- Ring sizes convert between seven systems: US, EU, UK, Japanese, Chinese, Hong Kong and Swiss. Shoe sizes convert between US, EU, UK, Japanese and centimeters.
- Everything is stored on the phone; no account and no ads. Optional backup goes only to the user's own iCloud (iPhone only), Google Drive or Dropbox, when they choose. The app can be locked with the phone's own screen lock.
- Free for up to 5 people, with up to 10 fields and 5 notes each; one one-time purchase removes the limits. No subscription.

Never claim: reminders or notifications about sizes, sharing a size with anyone, a ring sizer or any way to measure a finger inside the app, or anything not listed above.

## Format

Paragraph, `## ` heading, `- ` list, `1. ` steps and `> ` note are available; at most one note. Tables are not part of the Markdown format: when a guide carries a table (the ring size chart), the caller inserts it into the pack and the brief says where it goes.
