# Site glossary — Português (BR) (pt-BR)

Copied from `_template.md`. The pt-BR translator fills it before translating any packet, and the reviewer holds every pt-BR value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `pt-BR.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | app de notas sobre pessoas | 用在標題與描述。避免「anotações sobre pessoas」（巴西 App Store 搜尋無結果）與「agenda/contatos」（會被 Gmail、Outlook 吃掉）；「Notas de pessoas」是商店副標用的短式。 |
| Personal CRM (the same category, as searched) | CRM pessoal | 巴西有真實需求的搜尋詞（aso-keywords.md）。只在句子本來就談個人 CRM 時用，不硬塞；固定寫「CRM pessoal」。 |
| Person page (a page for every person) | página da pessoa / uma página para cada pessoa | App 稱人為「pessoa」（「Nova pessoa」「Editar pessoa」），不用 contato 或 perfil；「perfil」只出現在「foto do perfil」（app: editPerson.avatarActionTitle）。 |
| Note (a dated note about a person) | nota | from app strings: personDetail.noteSection「Nota」、personDetail.sectionNotes「Notas」、addNote.title「Adicionar nota」。不用 anotação、observação。 |
| Field (size and measurement fields) | campo (tamanhos e medidas) | from app strings: editPerson.fieldsSection「Campos」、addField.customSection「Campos personalizados」。23 個尺寸欄位寫「campos de tamanhos e medidas」（app: personDetail.groupSizes「Tamanhos」）；使用者自建的叫「campo personalizado」。 |
| Ring size / shoe size | tamanho do anel / tamanho do calçado | from app strings: settings.unitRingSize「Tamanho do anel」、settings.unitShoeSize「Tamanho do calçado」。內文「número do sapato」雖自然，但固定詞是「tamanho do calçado」。十指欄位照 app：Polegar／Indicador／Médio／Anelar／Mínimo + E/D（field.finger.*、field.leftRing「Anelar E」）；行文用「dedo anelar」「dedo mínimo」（不用 mindinho）、「mão esquerda/direita」。 |
| Gift idea / gift log | ideia de presente / registro de presentes | 「Ideias de presente」是 app 欄位（field.giftIdeas）；「registro de presentes」是市場搜尋詞（aso-keywords.md）。一律「presente」，不用 brinde、mimo。Wishlist 欄位為「Lista de desejos」（field.wishlistUrl）。 |
| Conversation question (the question catalog) | pergunta para conversar / catálogo de perguntas | from app strings: promptCatalog.title「Escolha uma pergunta」（畫面）、promptCatalog.searchPlaceholder「Buscar perguntas」。分類 Knowing each other 為「Nos conhecer」（promptCatalog.category.knowingEachOther）。固定用「pergunta」，不把「quebra-gelo」當固定詞。 |
| Birthday | aniversário | from app strings: field.birthday「Aniversário」。複數「aniversários」。不用 niver。 |
| Anniversary | aniversário de casal | App 欄位縮寫為「Aniv. de casal」（field.anniversary）；頁面引用欄位時寫全稱「aniversário de casal」。泛指值得紀念的日子用「data especial」。 |
| How We Met (field) | Encontro | from app strings: field.howWeMet「Encontro」。點名欄位時就寫「Encontro」；行文描述概念時用「como vocês se conheceram」。 |
| Reminder | lembrete | from app strings: notification.title「Lembretes」。用 lembrete，不用 alerta、aviso。 |
| Guides (the article pages) | Guias | 區塊與選單標題；每篇文章稱「guia」。 |
| FAQ / frequently asked questions | Perguntas frequentes | 一律寫全稱（選單、標題、meta），不與「FAQ」混用。 |
| Privacy Policy | Política de Privacidade | from app strings: settings.privacyPolicy。每個字首大寫。 |
| Terms of Use | Termos de Uso | from app strings: settings.termsOfUse。每個字首大寫。 |
| One-time purchase, no subscription | compra única, sem assinatura | from app strings: paywall.oneTimePurchase「Compra única」、paywall.subtitle「Uma compra. Sem assinatura.」。App 按鈕寫「vitalício」；網站優先寫「uma compra única remove os limites」。免費版寫「gratuita」（app:「versão gratuita」），不寫 free。 |
| Back up / restore (to your own cloud) | fazer backup / restaurar (na sua própria nuvem) | from app strings: backup.backupTo「Fazer backup em %@」、backup.restoreFrom「Restaurar de %@」。「backup」不加連字號、不翻；iCloud、Google Drive、Dropbox 統稱「nuvem」。 |
| On your phone (data stays on the device) | no seu celular | 資料只留在裝置：「ficam no seu celular」、「somente local」（app: appLock.footerTag「PRIVADO · SOMENTE LOCAL」）。行文用「celular」；「dispositivo」只用於法律文件（隱私權政策與使用條款）。 |
| App Lock (screen-lock option) | Bloqueio do app | from app strings: settings.appLock「Bloqueio do app」。生物辨識寫「Face ID ou código」（settings.appLockDescription）；手機本身的螢幕鎖＝「bloqueio de tela」；passcode＝「código」。 |
| Settings | Ajustes | from app strings: settings.title「Ajustes」（巴西葡語 iOS 慣例）。不用 Configurações。 |
| Allergy | alergia | from app strings: field.allergy「Alergia」。複數「alergias」。 |
| Theme | tema | from app strings: themePicker.title「Escolher tema」、settings.currentTheme「Tema atual」。 |
| Address form (você) | você | 第二人稱單數用「você」「seu/sua」；不用 tu、不用「o usuário」。祈使句用 você 形（「Anote」「Toque」），與 app 一致。 |

