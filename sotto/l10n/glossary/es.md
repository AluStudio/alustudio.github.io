# Site glossary — Español (es)

Copied from `_template.md`. The es translator fills it before translating any packet, and the reviewer holds every es value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `es.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | app de notas sobre personas | The App Store subtitle uses "Notas de personas y regalos"; use "notas de personas" for the thing itself. "CRM personal" (the term Spaniards search, SWEET in aso-keywords) only where en says personal CRM, always with the gloss "para las personas que quieres, no para ventas". Never "agenda de contactos" (that is Gmail/Outlook intent). |
| Person page (a page for every person) | página de cada persona | Singular: "la página de una persona". The app shows "Nueva persona" / "Editar persona" and has no word for the page; do not call it "perfil", "ficha" or "contacto". |
| Note (a dated note about a person) | nota | from app strings: personDetail.noteSection "Nota", personDetail.sectionNotes "Notas", addNote.title "Agregar nota". Button names quoted from the app keep the app's verb ("Agregar nota"); in running prose write "añadir" (Spain), never "agregar". |
| Field (size and measurement fields) | campo | from app strings: editPerson.fieldsSection "Campos"; "campo personalizado" = customField.title. "Medidas" for the body-measurement fields as a group (personDetail.groupBody "Cuerpo", groupSizes "Tallas"), "campos de tallas y medidas" for the 23 fields. |
| Ring size / shoe size | talla de anillo / talla de calzado | from app strings: settings.unitRingSize "Talla de anillo", settings.unitShoeSize "Talla de calzado". One term only: do not alternate with "número de zapato", "medida del anillo" or "talla de zapatos". Finger fields as the app shows them: Pulgar, Índice, Medio, Anular, Meñique + I / D (field.leftRing "Anular I", field.rightRing "Anular D"). Say "talla de anillo de cada dedo". |
| Gift idea / gift log | idea de regalo / registro de regalos | "Ideas de regalo" from app strings (field.giftIdeas); "Lista de deseos" = field.wishlistUrl. "Registro de regalos" is the market's search term for the gift log (aso-keywords, es-ES SWEET); the gift log is a habit made of notes, Sotto has no separate screen. Not "diario de regalos" or "lista de regalos". |
| Conversation question (the question catalog) | pregunta para conversar | The app shows "Elige una pregunta" (promptCatalog.title), "Buscar preguntas", "%d preguntas". Catalog = "catálogo de preguntas". In running prose "pregunta" alone is fine once the context is set; do not use "pregunta de conversación", "icebreaker" or "rompehielos" as the term. |
| Guides (the article pages) | Guías | Nav and listing title. Singular "guía". |
| FAQ / frequently asked questions | Preguntas frecuentes | Use the full phrase in nav, titles and links; "FAQ" only inside a meta title where space is tight, never both on one page. |
| Privacy Policy | Política de privacidad | from app strings: settings.privacyPolicy. |
| Terms of Use | Términos de uso | from app strings: settings.termsOfUse. |
| One-time purchase, no subscription | compra única, sin suscripción | from app strings: paywall.oneTimePurchase "Compra única · De por vida", paywall.subtitle "Una sola compra. Sin suscripción.". "De por vida" for lifetime / for good ("quita los límites de por vida"). Free tier: "gratis" ("gratuita" for the version), paid tier "Pro" (paywall.upgrade "Ver Pro"). |
| Back up / restore (to your own cloud) | hacer una copia de seguridad / restaurar | from app strings: settings.backup "Copia de seguridad", backup.restoreAction "Restaurar". "Tu propia nube": iCloud (solo iPhone), Google Drive o Dropbox, kept as brand names. Not "respaldo" or "backup". |
| On your phone (data stays on the device) | en tu móvil | Spain uses "móvil", not "celular" or "teléfono"; the app says "dispositivo" only in system-level wording. Use "en tu iPhone" where the sentence is iPhone-only. "Solo local" / "se queda en tu móvil"; never "en la nube" for the data itself. |
| Reminder | recordatorio | from app strings: notification.title "Recordatorios"; 7 days before, at 9:00 ("a las 9:00"). Search term: "recordatorio de cumpleaños". |
| Birthday / anniversary | cumpleaños / aniversario | from app strings: field.birthday "Cumpleaños", field.anniversary "Aniversario". "Onomástico" is a separate app field (field.nameDay). |
| Allergy | alergia | from app strings: field.allergy "Alergia"; plural "alergias". |
| App Lock | Bloqueo de la app | from app strings: settings.appLock. Phone's own lock: Face ID, Touch ID, código (iPhone); huella, rostro, PIN, patrón o contraseña (Android). Brand and biometric names stay in English. |
| Settings | Configuración (pantalla de Sotto) / Ajustes (del sistema) | The app's own split: settings.title "Configuración" for the Sotto screen; "Ajustes" when it points to iOS/Android system settings (notification.openSettings). |
| Colour theme | tema de color | from app strings: themePicker.title "Elegir tema", settings.currentTheme "Tema actual". The 8 themes, light and dark: "8 temas de color, claro y oscuro". |
| Size / measurement | talla / medida | "Talla" for clothes, shoes and rings (personDetail.groupSizes); "medidas" for body measurements (altura, cintura...). app: field.height "Estatura" (site prose may say "estatura" too, not "altura"). |
| Person (the people in the app) | persona | from app strings: tab.people "Personas". The people you care about: "las personas que quieres" (warm); partner "pareja", not "novio/a" unless en says so. |
| Address form | tú | Spain, singular informal: tienes, elige, guarda. Never vos or ustedes/vosotros for the reader; imperatives in tú ("Guarda", "Anota"). Spain vocabulary: móvil, vídeo (with accent, as the app), "añadir", "ordenador", "vale". |
