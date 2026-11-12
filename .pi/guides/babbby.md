# Babbby guide writer contract

Read in full by the `guide-writer` project agent after `.pi/guides/writer.md`, for every Babbby guide. Pages: `/babbby/guides/<slug>/`; packs: `babbby/src/data/guides/guides.<code>.js`.

## Readers

Parents and caregivers of children aged 0–6 who do not know Babbby yet: someone wondering what to do with their baby today, how much screen time is fine, or what suits their child's age. Copy is warm, plain and specific, like a friend who knows child development; never clinical, never cute baby talk.

The same guides ship in every language (same slug, same order), translated from en. So a fact that differs by country, such as official screen-time guidance, names which country says what; it is never adapted to one market (owner 2026-11-07).

## Product facts

The only claims the article may make about Babbby. Checked against `~/Developer/alustudio/babbby-ios` on 2026-11-07 (device support and offline rechecked 2026-11-12); when the app changes, update this list there first.

- An iPhone and iPad app for parents: a tool for the parent, not an app the child uses.
- Ages 0–6 in seven age ranges: 0–6 months, 6–12 months, 12–18 months, 18–24 months, 2–3 years, 3–4 years, 4–6 years.
- The parent enters the child's birthday; the app counts the age in completed months from it (shown in months until 2 years, then years and months) and picks the age range from that count (checked 2026-11-12, `Models.swift` `ageMonths`).
- 342 built-in activities in 8 developmental categories. zh-Hant: 大肢體運動、小肌肉操作、語言溝通、思考探索、情緒社交、感官體驗、創意表達、生活自理. en: gross motor, fine motor, language, cognitive, social-emotional, sensory, creative, daily living.
- Every day it suggests up to 6 activities for the child's age; the parent can swap or adjust them, then mark each one done. Each activity shows materials, a tip and roughly how many minutes it takes.
- Up to 3 photos per completed activity; stats, plus weekly and monthly photo reviews.
- Works offline (suggestions, activities, records and reviews; buying the unlock needs a connection), no ads. Free download with a 14-day full-access trial, then a one-time lifetime unlock (no subscription).

Never claim anything not listed above, and in particular:

- content written or reviewed by experts or doctors, or "science-based" or research-proven;
- milestones, "falling behind", golden periods, what a child "should" do at an age, Montessori or early-education claims, or any medical or developmental judgment beyond what a play practises;
- outcomes such as balanced development or a smarter child;
- personalized, tailored, AI, or endless or different every day;
- safety guarantees;
- data export, sync or family sharing, or that no data is ever collected or never leaves the phone;
- being the only or first app, or naming competitors;
- user counts, ratings or testimonials;
- Android support.

The list mirrors the product claims in `~/Developer/alustudio/marketing-kit/products/babbby/strategy/brand.md` §不說 (its voice, opening and CTA rules are social-only); change both together.

## Activities

Activities the guide names are the app's own. Use only the names the brief lists, verbatim; the brief takes them from the app's activity library (`~/Developer/alustudio/babbby-ios/babbby/babbby/Resources/ActivityData/<language>-age-<range>.json`).

## Format

The five Markdown block types are available: paragraph, `## ` heading, `- ` list, `1. ` steps and `> ` note. At most one note, for a caution such as "see a pediatrician when you suspect a delay".

Illustrations are `image` blocks (schema at the top of `guides.en.js`) that the main session adds to the pack after `scripts/guide-md.mjs`, at the positions the brief names; the draft never contains them. They are AI-generated scene illustrations with no text in the picture, never app UI, and a child in one is generated from a text prompt alone, never from a photo of a real child. The image files are shared by every language; `alt` and `caption` are translated like any other text.
