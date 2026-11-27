// Regression tests for scripts/faq-md.mjs — run with
// `node --test scripts/faq-md.test.mjs`.

import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseFaqMarkdown, writeToPack } from "./faq-md.mjs";

const DRAFT = `---
slug: tax-report
category: reports
since: "3.6"
question: How do I read the tax report?
keywords: tax report, VAT, GST
related: report-periods
---

The tax report lists each tax rate for the period.

## Open it

1. Open Stats.
2. Tap the Tax tile.

![The tax report with one row per tax rate](shot:tax-report)

![The export menu](shot:tax-export "Pick CSV, Excel or PDF.")

> Voids count on the day of the void.
`;

const PACK = `export const categories = [
  { key: "reports", label: "Reports" },
  { key: "backup", label: "Backup" },
];

export const articles = [
  {
    slug: "report-periods",
    category: "reports",
    question: "Which periods?",
    keywords: ["period"],
    content: [
      { type: "p", text: "Today, week, month." },
    ],
    related: [],
  },
  {
    slug: "backup-now",
    category: "backup",
    question: "How do I back up?",
    keywords: ["backup"],
    content: [
      { type: "p", text: "Tap Back Up Now." },
    ],
    related: [],
  },
];
`;

function tempPack() {
  const file = join(mkdtempSync(join(tmpdir(), "faq-md-")), "articles.en.js");
  writeFileSync(file, PACK);
  return file;
}

test("maps the frontmatter and each block, shots with and without caption", () => {
  assert.deepEqual(parseFaqMarkdown(DRAFT), {
    slug: "tax-report",
    category: "reports",
    since: "3.6",
    question: "How do I read the tax report?",
    keywords: ["tax report", "VAT", "GST"],
    content: [
      { type: "p", text: "The tax report lists each tax rate for the period." },
      { type: "h2", text: "Open it" },
      { type: "steps", items: ["Open Stats.", "Tap the Tax tile."] },
      { type: "shot", name: "tax-report", alt: "The tax report with one row per tax rate" },
      { type: "shot", name: "tax-export", alt: "The export menu", caption: "Pick CSV, Excel or PDF." },
      { type: "note", text: "Voids count on the day of the void." },
    ],
    related: ["report-periods"],
  });
});

test("rejects inline markup, a non-paragraph opening and unknown keys", () => {
  assert.throws(() => parseFaqMarkdown(DRAFT.replace("lists each", "lists **each**")), /inline Markdown/);
  assert.throws(() => parseFaqMarkdown(DRAFT.replace("The tax report lists each tax rate for the period.\n\n", "")), /open with a paragraph/);
  assert.throws(() => parseFaqMarkdown(DRAFT.replace("since:", "version:")), /unknown frontmatter key/);
  assert.throws(() => parseFaqMarkdown(DRAFT.replace("(shot:tax-report)", "(https://x.test/a.png)")), /inline Markdown/);
});

test("inserts a new slug after the last article of its category", async () => {
  const file = tempPack();
  assert.equal(await writeToPack(parseFaqMarkdown(DRAFT), file), "insert");
  const { articles } = await import(`${file}?v=insert`);
  assert.deepEqual(articles.map((a) => a.slug), ["report-periods", "tax-report", "backup-now"]);
  assert.deepEqual(articles[1], parseFaqMarkdown(DRAFT));
});

test("replaces an existing slug in place", async () => {
  const file = tempPack();
  const draft = `---
slug: report-periods
category: reports
question: Which periods can I see?
keywords: period, range
---

Today, this week, this month, or a custom range.
`;
  assert.equal(await writeToPack(parseFaqMarkdown(draft), file), "replace");
  const { articles } = await import(`${file}?v=replace`);
  assert.deepEqual(articles.map((a) => a.slug), ["report-periods", "backup-now"]);
  assert.equal(articles[0].question, "Which periods can I see?");
  assert.match(readFileSync(file, "utf8"), /Tap Back Up Now\./);
});

test("refuses a replacement that changes since or category, and dry run writes nothing", async () => {
  const file = tempPack();
  const changedSince = `---
slug: report-periods
category: reports
since: "3.6"
question: Which periods?
keywords: period
---

Today.
`;
  await assert.rejects(writeToPack(parseFaqMarkdown(changedSince), file), /since never changes/);
  await assert.rejects(writeToPack(parseFaqMarkdown(changedSince.replace("category: reports", "category: backup")), file), /category/);
  assert.equal(await writeToPack(parseFaqMarkdown(DRAFT), file, { dryRun: true }), "insert");
  assert.equal(readFileSync(file, "utf8"), PACK);
});
