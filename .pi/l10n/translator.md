# Website translator contract — router

Read by the global `l10n-translator` agent (`~/.pi/agent/agents/l10n-translator.md`) when a task names no contract. This repo translates two sites, each with its own contract; this file only says which one applies. Open the packet only to read its `contract` field, then read that contract in full before any other file, and follow it as written.

- The task gives a packet (`.logs/l10n/<app>/<code>/packets/<segment>.json`, or a fix task naming one): read the file named in the packet's `contract` field — `.pi/l10n/dingpos.md` or `.pi/l10n/sotto.md`.
- The task is a site glossary ("Site glossary for <code>") and names the app or its glossary path (`dingpos/l10n/glossary/<code>.md`, `sotto/l10n/glossary/<code>.md`): read `.pi/l10n/<app>.md`.
- Neither the packet nor the task names an app: end with `BLOCKED: no app named — the packet's contract field or the task must say dingpos or sotto`.
