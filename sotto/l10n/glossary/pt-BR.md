# Site glossary — Português (BR) (pt-BR)

Copied from `_template.md`. The pt-BR translator fills it before translating any packet, and the reviewer holds every pt-BR value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `pt-BR.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | app de notas sobre pessoas | Use in titles and descriptions. Avoid anotações sobre pessoas (no results in Brazil's App Store search) and agenda/contatos (Gmail and Outlook own those results); Notas de pessoas is the short form for the store subtitle. |
| Personal CRM (the same category, as searched) | CRM pessoal | A search term with real demand in Brazil (aso-keywords.md). Use it only where the sentence is already about a personal CRM, never forced in; always write CRM pessoal. |
| Person page (a page for every person) | página da pessoa / uma página para cada pessoa | The app calls people pessoa (Nova pessoa, Editar pessoa), not contato or perfil; perfil appears only in foto do perfil (app: editPerson.avatarActionTitle). |
| Note (a dated note about a person) | nota | from app strings: personDetail.noteSection Nota, personDetail.sectionNotes Notas, addNote.title Adicionar nota. Do not use anotação or observação. |
| Field (size and measurement fields) | campo (tamanhos e medidas) | from app strings: editPerson.fieldsSection Campos, addField.customSection Campos personalizados. The 23 size fields are campos de tamanhos e medidas (app: personDetail.groupSizes Tamanhos); a field the user creates is a campo personalizado. |
| Ring size / shoe size | tamanho do anel / tamanho do calçado | from app strings: settings.unitRingSize Tamanho do anel, settings.unitShoeSize Tamanho do calçado. número do sapato is natural in running text, but the fixed term is tamanho do calçado. Per-finger fields follow the app: Polegar／Indicador／Médio／Anelar／Mínimo + E/D (field.finger.*, field.leftRing Anelar E); running text says dedo anelar, dedo mínimo (not mindinho), mão esquerda/direita. |
| Gift idea / gift log | ideia de presente / registro de presentes | Ideias de presente is the app field (field.giftIdeas); registro de presentes is the market search term (aso-keywords.md). Always presente, never brinde or mimo. The wishlist field is Lista de desejos (field.wishlistUrl). |
| Conversation question (the question catalog) | pergunta para conversar / catálogo de perguntas | from app strings: promptCatalog.title Escolha uma pergunta (screen), promptCatalog.searchPlaceholder Buscar perguntas. The Knowing each other category is Nos conhecer (promptCatalog.category.knowingEachOther). Always pergunta; do not make quebra-gelo a fixed term. |
| Birthday | aniversário | from app strings: field.birthday Aniversário. Plural aniversários. Do not use niver. |
| Anniversary | aniversário de casal | The app field is Aniv. de casal (field.anniversary), a couple's anniversary; quote the field exactly as the app shows it, Aniv. de casal. In running text, aniversário de casal; offer the field for a partner, not for friends. A date worth remembering in general is data especial. |
| How We Met (field) | Encontro | from app strings: field.howWeMet Encontro. Name the field as Encontro; describe the idea in running text as como vocês se conheceram. |
| Reminder | lembrete | from app strings: notification.title Lembretes. Use lembrete, not alerta or aviso. |
| Guides (the article pages) | Guias | Section and menu title; each article is a guia. |
| FAQ / frequently asked questions | Perguntas frequentes | Always the full form (menu, titles, meta); do not mix in FAQ. |
| Privacy Policy | Política de Privacidade | from app strings: settings.privacyPolicy. Capitalize every word. |
| Terms of Use | Termos de Uso | from app strings: settings.termsOfUse. Capitalize every word. |
| One-time purchase, no subscription | compra única, sem assinatura | from app strings: paywall.oneTimePurchase Compra única, paywall.subtitle Uma compra. Sem assinatura. The app button says vitalício; the site prefers uma compra única remove os limites. The free version is gratuita (app: versão gratuita), never free. |
| Back up / restore (to your own cloud) | fazer backup / restaurar (na sua própria nuvem) | from app strings: backup.backupTo Fazer backup em %@, backup.restoreFrom Restaurar de %@. backup takes no hyphen and is not translated; iCloud, Google Drive and Dropbox together are nuvem. |
| On your phone (data stays on the device) | no seu celular | Data stays on the device: ficam no seu celular, somente local (app: appLock.footerTag PRIVADO · SOMENTE LOCAL). Running text says celular; dispositivo only in the legal pages (privacy policy and terms of use). |
| App Lock (screen-lock option) | Bloqueio do app | from app strings: settings.appLock Bloqueio do app. Biometrics: Face ID ou código (settings.appLockDescription); the phone's own screen lock = bloqueio de tela; passcode = código. |
| Settings | Ajustes | from app strings: settings.title Ajustes (Brazilian Portuguese iOS convention). Do not use Configurações. |
| Allergy | alergia | from app strings: field.allergy Alergia. Plural alergias. |
| Theme | tema | from app strings: themePicker.title Escolher tema, settings.currentTheme Tema atual. |
| Address form (você) | você | Second person singular is você, seu/sua; never tu or o usuário. Imperatives in the você form (Anote, Toque), as in the app. |

