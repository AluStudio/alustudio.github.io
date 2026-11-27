// Translate synced l10n packets, one l10n-translator child per job.
// args: the JSON `npm run -s l10n -- <app> jobs <code> …` prints: { app, jobs: [[code, [segment, …]], …] }.
// Run: subagent { workflow: "./.pi/workflows/l10n-translate.js", args, async: true, options: { globalConcurrencyLimit: 6 } }
// Procedure and why it is shaped this way: docs/specs/seo-aeo.md §翻譯語言.

// Thinking medium measured as cheap as high with the same review findings (2026-11-27, de + th sample).
const TRANSLATOR_MODEL = "anthropic/claude-sonnet-5-5:medium";

const app = args.app;
const jobs = args.jobs ?? [];
if (!app || !jobs.length) throw new Error("args must be the output of `npm run -s l10n -- <app> jobs <code> …`");

const tasks = jobs.map(([code, segments], i) => {
  const packets = segments.map((s, n) => `${n + 1}. .logs/l10n/${app}/${code}/packets/${s}.json`);
  return {
    key: `tr.${code}.${i}`,
    code,
    segments,
    params: {
      agent: "l10n-translator",
      model: TRANSLATOR_MODEL,
      task: [
        `Translate these ${segments.length} packet(s) for ${code}, one after another, in this order:`,
        ...packets,
        "",
        "Each packet is its own Task shape 2 job under the contract: its own output file, its own dry run until `rejected 0`, its own reply line. Read the contract and both glossaries once, before the first packet.",
        `Reply with the ${segments.length} reply line(s), one per packet, then 備註 only if there is something to note.`,
      ].join("\n"),
    },
  };
});

function replyLines(output) {
  const lines = String(output ?? "").split("\n").filter((line) => / translated, /.test(line) || /^BLOCKED/.test(line));
  return lines.length ? lines : [String(output ?? "").slice(-300)];
}

const first = await runs.all(tasks.map((t) => ({ key: t.key, ...t.params })));
const report = first.map((r, i) => ({ code: tasks[i].code, segments: tasks[i].segments, ok: r.ok, attempt: 1, reply: replyLines(r.output) }));

// A failed child (usually a provider 429) runs once more, one at a time, after the batch has drained.
for (let i = 0; i < tasks.length; i++) {
  if (first[i].ok) continue;
  const r = await runs.run(`${tasks[i].key}.retry`, tasks[i].params);
  report[i] = { code: tasks[i].code, segments: tasks[i].segments, ok: r.ok, attempt: 2, reply: replyLines(r.output) };
}
return report;
