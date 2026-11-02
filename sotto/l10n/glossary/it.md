# Site glossary — Italiano (it)

Copied from `_template.md`. The it translator fills it before translating any packet, and the reviewer holds every it value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `it.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | CRM personale | ASO term for it-IT (aso-keywords.md; the app's keywords field uses it). Readers may not know "CRM": in an answer-first paragraph or meta description, gloss it once as "app per le note sulle persone" (the app's subtitle says "Note sulle persone"). Never "rubrica" (that is the contacts app) and never "diario" for the category. Lowercase "personale". |
| Person page (a page for every person) | scheda | "Una scheda per ogni persona". The app's list is "Persone" (tab.people); one person is "persona". Do not use "profilo" except for "Foto profilo" (editPerson.avatarActionTitle). |
| Note (a dated note about a person) | nota | from app strings: personDetail.sectionNotes "Note", addNote.title "Aggiungi nota". Not "appunto". |
| Field (size and measurement fields) | campo | from app strings: editPerson.fieldsSection "Campi", editPerson.addField "Aggiungi campo". "Campo personalizzato" for custom fields (customField.title). Size and measurement fields: "campi di taglie e misure". |
| Ring size / shoe size | misura anello / numero scarpe | from app strings: settings.unitRingSize "Misura anello", settings.unitShoeSize "Numero scarpe". In prose "la misura dell'anello", "il numero di scarpe"; "una misura dell'anello per ogni dito". Clothing sizes: "taglie" (personDetail.groupSizes "Taglie"). Systems: US, EU, UK, JP stay as written (unit.ringUS … unit.shoeJP). |
| Gift idea / gift log | idee regalo / registro regali | "Idee regalo" from app strings: field.giftIdeas (capitalized when naming the field). "Registro regali" is the it-IT search term (aso-keywords.md, SWEET). Singular: "idea regalo". Not "lista regali" (the app's "Lista desideri", field.wishlistUrl, is a different field). |
| Conversation question (the question catalog) | domanda / catalogo di domande | from app strings: promptCatalog.title "Scegli una domanda", promptCatalog.countSuffix "%d domande". "Catalogo di domande" for the catalog; "domande per fare conversazione" when the purpose needs saying. Category "Knowing each other" = "Conoscerci" (promptCatalog.category.knowingEachOther). |
| Guides (the article pages) | Guide | Matches the existing nav label. Link back: "Tutte le guide". Singular "guida". |
| FAQ / frequently asked questions | FAQ / Domande frequenti | "FAQ" in the nav and where space is short; "Domande frequenti" as the page title and in running text. |
| Privacy Policy | Informativa sulla privacy | from app strings: settings.privacyPolicy. Capital I only at the start of a title or label; lowercase "privacy" inside. |
| Terms of Use | Termini di utilizzo | from app strings: settings.termsOfUse. The app's paywall legal line says "Condizioni d'uso" once; the Settings label is the one the site follows. |
| One-time purchase, no subscription | acquisto una tantum, nessun abbonamento | from app strings: paywall.oneTimePurchase "Acquisto una tantum", paywall.subtitle "Un solo acquisto. Nessun abbonamento." "Unlock for good" = "Sblocca a vita" (paywall.unlockButton). "Free to start" = "Gratis per iniziare". The paid tier is "Lifetime" in the app (settings.upgradeToPro); "Pro" appears in the limit messages; on the site say "un unico acquisto" and avoid naming a tier. |
| Back up / restore (to your own cloud) | fare il backup / ripristinare | from app strings: noun "Backup" (backup.title), "Backup su %@", "Ripristina da %@", "Ripristina". Verb: "fare il backup" (backup.description); never "salvare nel cloud". Your own cloud: "il tuo cloud" / "il tuo account Google Drive o Dropbox". |
| On your phone (data stays on the device) | sul tuo telefono | The app's lock-screen tag is "PRIVATO · SOLO LOCALE". Prose: "i dati restano sul tuo telefono" (iPhone and Android alike); "sul dispositivo" only in privacy/terms legal text. "In locale" is fine for "stored locally" once per page, not as a repeated slogan. |
| Reminder (birthdays, anniversaries) | promemoria | from app strings: notification.title "Promemoria". "Attiva un promemoria"; notified 7 days ahead ("7 giorni prima"). |
| Birthday / Anniversary / How We Met (field names) | Compleanno / Anniversario / Incontro | from app strings: field.birthday, field.anniversary, field.howWeMet. Lowercase in prose ("il compleanno"); capitalized with the app's label only when the sentence points at the field ("il campo Incontro"). |
| App Lock | Blocco app | from app strings: settings.appLock. Prose: "blocca l'app con Face ID o codice" (settings.appLockDescription). Face ID, Touch ID stay untranslated. |
| Color theme | tema | from app strings: themePicker.title "Scegli tema"; settings.currentTheme "Tema attuale". "Tema colore" when "color" matters. |
| Relationships / groups | relazioni / gruppi | from app strings: tab.network "Relazioni", personGroups.newGroup "Nuovo gruppo". Not "connessioni" for the tab. |
| Settings | Impostazioni | from app strings: settings.title. |
| Contact Us | Contattaci | Footer and policy pages; tu form. |
| Hand and finger names (ring-size chart, guides) | pollice, indice, medio, anulare, mignolo | from app strings: field.finger.* . In prose use the full words ("anulare sinistro"); the app's abbreviations ("Anul. sx", "Poll. dx") only when quoting a field label. Left/right: "sinistra/destra". |
| Address form (register) | tu | Warm second person singular throughout ("ti serve", "il tuo telefono"); no "Lei", no "voi" for the reader. Possessives for the other person: "chi ami", "le persone a cui tieni". |
