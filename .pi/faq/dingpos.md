# DingPOS FAQ writer contract

Read in full by the `faq-writer` project agent (`.pi/agents/faq-writer.md`) before every task. Pages: `/dingpos/<prefix>/support/<slug>/`; packs: `dingpos/src/data/faq/articles.<code>.js`. Spec: `docs/specs/seo-aeo.md` §內容 and §FAQ 圖文.

A DingPOS FAQ article is a support page. Its readers are shop owners and staff who use DingPOS, an offline iPad point-of-sale app for small shops, or who are about to decide on it. They arrive from a search, an AI answer or the support index with one question, and they often follow the steps on their iPad while reading. The article answers that question exactly, in the app's own words, with screenshots of the screens it names.

## Inputs

The task gives:

- the language (`en` or `zh-Hant`);
- the output path, `.logs/faq/dingpos/<slug>.<language>.draft.md`;
- the brief path, `.logs/faq/dingpos/briefs/<slug>.md`: slug, category, `since` (when set), the question direction, the verified facts (each with its source), the on-screen names in en and zh-Hant, the screenshots you may place (name and what each shows), related slugs, and the target length.

## Hard rules

- Facts come from the brief only: no other numbers, limits, plan tiers, versions, countries or behaviors, and nothing restated more strongly than the brief says it. A point the brief does not support stays out. When the brief gives an example with numbers, use its numbers exactly.
- Every screen, tab, button, field, menu and tile name is copied verbatim from the brief's list for your language. Never translate a name yourself, never paraphrase one, never invent one.
- Screenshot names come only from the brief's list.
- You write exactly one file, the output path. You read only this contract and the brief. No other tools, no web.
- Your final message is one line: the output path and the article's length (characters for zh-Hant, words for en). Never call `contact_supervisor`; a blocking problem ends the run with `BLOCKED: <reason>`.

A separate cleanup pass removes AI-tone patterns after you, so spend your effort on accuracy, order and clarity.

## Article rules

- `question` is the question a shop owner types into a search engine or asks an assistant, in that language, following the brief's direction. Never a translation of another language's question. When the brief fixes the question (an existing article), keep it.
- The first block is a paragraph of 2–3 sentences that answers the question on its own. Its first sentence carries the answer: the page's meta description is cut from the opening, and the home page and AI answers quote it alone.
- After the answer, use `## ` sections when the article covers more than one task or topic (reading a report and exporting it, for example); a short single-task article needs none. Section headings are plain labels, not questions and not clever.
- Actions on the iPad are numbered steps, one action per step, starting from where the reader is (the sidebar, Settings). A path is written with →, e.g. `Settings → Store Info`.
- Place a screenshot right after the step or paragraph that names its screen, and only there. A screenshot never splits a numbered list: when the screen belongs to a step, put the screenshot right after the whole list, because a list that resumes after it restarts at 1. Use every screenshot the brief lists, each once. Its alt says what the picture shows: the screen and the element that matters, e.g. `Tax report with one row per tax rate and the totals underneath`, never "screenshot of". Add a caption only when the reader should look at one specific thing; one sentence, no links.
- Explain with the brief's concrete example (a sale, an amount, a date) rather than a general description.
- Use a `> ` note for a caveat the reader must not miss: a plan tier, a version difference the brief names, or an edge case. At most two notes.
- No marketing: no praise of the app, no hype words (超實用、輕鬆、強大、seamless, powerful, effortless), no emoji, no exclamation marks, no closing summary paragraph (總結, In short).
- `keywords`: 5–10 terms in that language that a reader would type to find this article, including the screen names they would search for.
- `related` lists exactly the brief's related slugs, in its order.

## Languages

- `zh-Hant`: Taiwan usage (平板, 設定, 報表), full-width punctuation, 「」 around on-screen names (`點「匯出」`), half-width digits and currency (`NT$1,050`). zh-Hans is generated from this file, so no zh-Hans-only wording.
- `en`: the source every translated language is made from. Plain international English: short sentences, no idioms, no US-only framing. On-screen names are written as the app capitalizes them, without quotes (`tap Export`). Keep the brief's currency in examples.

## Output format

A restricted Markdown file that `scripts/faq-md.mjs` converts into the pack; anything outside this format makes the conversion fail.

```markdown
---
slug: <slug from the brief>
category: <category from the brief>
since: "<version>"
question: <question>
keywords: <term>, <term>, <term>
related: <slug>, <slug>
---

<answer paragraph, one line>

## <section heading>

<paragraph, one line>

1. <step>
2. <step>

![<alt>](shot:<name>)

- <list item>
- <list item>

> <note, one line>

![<alt>](shot:<name> "<caption>")
```

- Blocks are separated by one blank line. A paragraph, `## ` heading, `> ` note or screenshot line is exactly one line, however long. A list block is only `- ` lines; a steps block only `1. ` lines.
- Write `since` only when the brief gives one, always quoted. Write `related` only when the brief names slugs.
- A value that contains `: ` or starts with a quote is written as a JSON string (`question: "Revenue vs. Cash Received: what's the difference?"`).
- No other heading level, no bold, italics, links, code, tables or HTML. Inside alt and caption text, no `]`, `(`, `)` or `"`.
