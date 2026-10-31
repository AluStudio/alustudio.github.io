# Site glossary template

`npm run l10n -- sotto new <code>` copies this file to `sotto/l10n/glossary/<code>.md`. The translator fills it before translating any packet, and the reviewer holds every value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `<code>.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) |  |  |
| Person page (a page for every person) |  |  |
| Note (a dated note about a person) |  |  |
| Field (size and measurement fields) |  |  |
| Ring size / shoe size |  |  |
| Gift idea / gift log |  |  |
| Conversation question (the question catalog) |  |  |
| Guides (the article pages) |  |  |
| FAQ / frequently asked questions |  |  |
| Privacy Policy |  |  |
| Terms of Use |  |  |
| One-time purchase, no subscription |  |  |
| Back up / restore (to your own cloud) |  |  |
| On your phone (data stays on the device) |  |  |
