# Guide writer contract

Read in full by the `guide-writer` project agent (`.pi/agents/guide-writer.md`) before every task, then the app contract `.pi/guides/<app>.md`. The app contract wins where the two differ. Spec: `docs/specs/seo-aeo.md` §獲客文章.

An acquisition guide (獲客文章) is a search landing page for people who do not know the app yet. They arrive from Google or an AI answer with a question they had before looking for any app. The guide answers that question honestly and usefully; the app appears only in the last section, as one practical option. It must not read like an ad.

## Inputs

The task gives:

- the app (`babbby`, …) and the language (`zh-Hant` or `en`);
- the output path, `.logs/guides/<app>/<slug>.<language>.draft.md`;
- a brief: the angle, a title direction, the verified facts you may use (each with its source), the app activities or features you may name, and the target length.

## Hard rules

- Facts come from the brief and the app contract only. No other statistics, studies, dates, quotes or numbers, and no rounding or restating a figure more strongly than the brief does. A point the brief does not support stays out of the article.
- Claims about the app come from the app contract's §Product facts only.
- Names of app activities, screens and features are copied verbatim from the brief or the app contract.
- You write exactly one file, the output path. You read only this contract, the app contract and files the brief names. No other tools, no web.
- Your final message is one line: the output path and the article's length (characters for zh-Hant, words for en). Never call `contact_supervisor`; a blocking problem ends the run with `BLOCKED: <reason>`.

A separate cleanup pass removes AI-tone patterns after you, so spend your effort on substance, structure and accuracy.

## Article rules

- `title` is the question or phrase people in that language actually type into a search engine, never a translation of another language's title.
- The first block is a paragraph of 2–3 sentences that directly answers the title. Then `h2` sections. The last `h2` section brings the reader back to the app: calm, factual, at most 2 short paragraphs.
- `summary` is both the index card and the meta description: at most 160 characters, and it contains the answer, not a teaser.
- Concrete sentences that can be quoted on their own; facts and numbers over adjectives. No hype words (超實用、必看、神器、ultimate, game-changer, must-try), no emoji, no exclamation marks, no closing summary paragraph (總而言之, In conclusion).
- A news hook only opens the article; the body answers a question that will not go stale.
- No medical, legal or financial advice beyond the cited guidance.

## Languages

- `zh-Hant`: Taiwan usage (影片 not 視頻, 平板, 3C, 爸媽), full-width punctuation, 「」 for quotes. zh-Hans is generated from this file later, so no zh-Hans-only wording.
- `en`: the source every translated language is made from. Plain international English: no idioms that do not translate, no US-only or single-country framing, no country-specific currency, school system or brands unless the brief names them.

## Output format

A restricted Markdown file that `scripts/guide-md.mjs` converts into the pack; anything outside this format makes the conversion fail.

```markdown
---
slug: <english-kebab-case-slug>
title: <title>
summary: <summary>
---

<opening paragraph, one line>

## <section heading>

<paragraph, one line>

- <list item>
- <list item>

1. <step>
2. <step>

> <note, one line>
```

- Blocks are separated by one blank line. A paragraph, `## ` heading or `> ` note is exactly one line, however long. A list block is only `- ` lines; a steps block only `1. ` lines.
- Use only the block types the app contract lists. No other heading level, no bold, italics, links, code or HTML.
- `slug` is the brief's slug when it gives one, otherwise English kebab case. Add `related: <slug>, <slug>` to the frontmatter only when the brief names slugs.
