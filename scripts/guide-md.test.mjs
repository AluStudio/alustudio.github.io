// Regression tests for scripts/guide-md.mjs — run with
// `node --test scripts/guide-md.test.mjs`.

import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { appendToPack, parseGuideMarkdown } from "./guide-md.mjs";

const DRAFT = `---
slug: screen-free-play
title: "Screen-Free Play: What to Do at Home"
summary: Keep a few 5-minute activities ready.
related: remember-details, other-guide
---

Keep a few short activities ready. Say "let's play" first.

## By age

- Peekaboo: hide behind a towel.
- Cup tower: stack 3 cups.

1. Pick one activity.
2. Start before the screen request.

> See a pediatrician when you suspect a delay.
`;

test("maps each Markdown block to its guide block type", () => {
  assert.deepEqual(parseGuideMarkdown(DRAFT), {
    slug: "screen-free-play",
    title: "Screen-Free Play: What to Do at Home",
    summary: "Keep a few 5-minute activities ready.",
    content: [
      { type: "p", text: 'Keep a few short activities ready. Say "let\'s play" first.' },
      { type: "h2", text: "By age" },
      { type: "list", items: ["Peekaboo: hide behind a towel.", "Cup tower: stack 3 cups."] },
      { type: "steps", items: ["Pick one activity.", "Start before the screen request."] },
      { type: "note", text: "See a pediatrician when you suspect a delay." },
    ],
    related: ["remember-details", "other-guide"],
  });
});

test("refuses drafts the pack schema cannot hold", () => {
  const body = (text) => `---\nslug: a\ntitle: T\nsummary: S\n---\n\n${text}\n`;
  assert.throws(() => parseGuideMarkdown(body("Line one\nline two")), /must be one line/);
  assert.throws(() => parseGuideMarkdown(body("Some **bold** text")), /inline Markdown/);
  assert.throws(() => parseGuideMarkdown(body("[link](/support/x/)")), /inline Markdown/);
  assert.throws(() => parseGuideMarkdown(body("### Deep heading")), /only ## headings/);
  assert.throws(() => parseGuideMarkdown(body("- item\nnot an item")), /not a list item/);
  assert.throws(() => parseGuideMarkdown("---\nslug: a\ntitle: T\n---\n\nText\n"), /missing summary/);
  assert.throws(() => parseGuideMarkdown("---\nslug: a\ntitle: T\nsummary: S\nauthor: x\n---\n\nText\n"), /unknown frontmatter key/);
});

test("appends to a pack and reads back identical; refuses a slug already there", async () => {
  const dir = mkdtempSync(join(tmpdir(), "guide-md-"));
  const pack = join(dir, "guides.en.js");
  writeFileSync(pack, `// header\n\nexport const articles = [\n  {\n    slug: "existing",\n    title: "E",\n    summary: "E",\n    content: [{ type: "p", text: "E" }],\n    related: [],\n  },\n];\n`);

  const article = parseGuideMarkdown(DRAFT);
  await appendToPack(article, pack);
  const { articles } = await import(`${join(dir, "guides.en.js")}?check`);
  assert.deepEqual(articles.map((entry) => entry.slug), ["existing", "screen-free-play"]);
  assert.deepEqual(articles[1], article);
  assert.ok(readFileSync(pack, "utf8").endsWith("  },\n];\n"));

  await assert.rejects(appendToPack(article, pack), /already exists/);
});
