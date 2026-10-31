# Site glossary — العربية (ar)

Copied from `_template.md`. The ar translator fills it before translating any packet, and the reviewer holds every ar value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `ar.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | تطبيق ملاحظات عن الأشخاص | Store keyword `ملاحظات عن الأشخاص` (aso-keywords.md); use it where a sentence names the category. In warm copy "the people you love" is `من تحب` (gender-neutral `من`), not `الأحباء`. Do not anchor on the bare word `ملاحظات` alone |
| Person page (a page for every person) | صفحة لكل شخص | Heading form; elsewhere `صفحة الشخص`. A person is `شخص`, people `الأشخاص` (app tab.people). Not `ملف` or `بطاقة`, not `جهة اتصال` (that is a phone contact) |
| Note (a dated note about a person) | ملاحظة | from app strings: personDetail.noteSection / addNote.title (`إضافة ملاحظة`); plural `ملاحظات`. Not `مذكرة` or `تدوينة` |
| Field (size and measurement fields) | حقل | from app strings: editPerson.fieldsSection (`الحقول`); `حقل مخصص` for a custom field (customField.title); `حقول المقاسات والقياسات` for the 23 size fields. Not `خانة` |
| Ring size / shoe size | مقاس الخاتم / مقاس الحذاء | from app strings: settings.unitRingSize, settings.unitShoeSize. Plural/general `المقاسات` (personDetail.groupSizes), measurements `القياسات`. Fingers as in the app: الإبهام، السبابة، الوسطى، البنصر، الخنصر (field.finger.*); `يمين`/`يسار` spelled out in prose, not the app's short `يم`/`يس` |
| Gift idea / gift log | أفكار الهدايا / سجل الهدايا | `أفكار هدايا` is the app field (field.giftIdeas); on the site write `أفكار الهدايا`. `سجل الهدايا` is the store search term (SWEET, aso-keywords.md): use it verbatim for the gift log, not `دفتر الهدايا` or `قائمة الهدايا` |
| Conversation question (the question catalog) | سؤال للحديث | The catalog is `قائمة الأسئلة`; the screen/button reads `اختر سؤالاً` (promptCatalog.title, from app strings). Not `سؤال حواري`; `حوار` in the app means communication topics |
| Guides (the article pages) | الأدلة | Nav label; one article is `دليل`. Already used by the site nav |
| FAQ / frequently asked questions | الأسئلة الشائعة | Nav label and page title; not `أسئلة متكررة` |
| Privacy Policy | سياسة الخصوصية | from app strings: settings.privacyPolicy |
| Terms of Use | شروط الاستخدام | from app strings: settings.termsOfUse |
| One-time purchase, no subscription | شراء لمرة واحدة، بلا اشتراك | from app strings: paywall.oneTimePurchase (`شراء لمرة واحدة`) + paywall.subtitle (`بلا اشتراك`). `مدى الحياة` only where en says lifetime. Not `دفعة واحدة` |
| Back up / restore (to your own cloud) | نسخ احتياطي / استعادة | from app strings: settings.backup (`النسخ الاحتياطي`), backup.restoreAction (`استعادة`). Verb: `انسخ احتياطيًا`; destination `سحابتك الخاصة`. Never `تصدير` |
| On your phone (data stays on the device) | في هاتفك | Say `تبقى كل البيانات في هاتفك`; for the technical sense `محليًا على جهازك` (privacy policy). Not `على السحابة`; app footer is `خاص · محلي فقط` |
| Birthday / birthday reminder | عيد الميلاد / تذكير أعياد الميلاد | `تذكير أعياد الميلاد` is a SWEET store term: use it verbatim where the sentence is about the reminder. App field is the short `الميلاد`; on the site write `عيد الميلاد` (plural `أعياد الميلاد`) |
| Allergy | حساسية | from app strings: field.allergy. Food allergy in prose: `حساسية الطعام` |
| Reminder | تذكير | from app strings: notification.title (`تذكيرات`) |
| Custom field / free version | حقل مخصص / النسخة المجانية | from app strings: customField.title, paywall.limitReachedTitle (`النسخة المجانية`) |
| Color theme | سمة | from app strings: themePicker.title (`اختر سمة`); plural `السمات`. Not `ثيم` |
| App Lock | قفل التطبيق | from app strings: settings.appLock. Phone's screen lock in prose: `قفل الشاشة` |
| Settings | الإعدادات | from app strings: settings.title |
| Free to start / No account | ابدأ مجانًا / بلا حساب | `بلا` (as in the app's `بلا اشتراك`, paywall.noAccount `بلا حساب`), not `بدون` |

Register: second person singular, warm; keep the form gender-neutral where en allows (`من تحب`, `من تهتم بهم`). Western digits (5, 23, 323) as in the app. Product and platform names stay Latin (Sotto, iPhone, Android, App Store, Google Play).
