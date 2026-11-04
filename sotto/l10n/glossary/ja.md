# Site glossary — 日本語 (ja)

Copied from `_template.md`. The ja translator fills it before translating any packet, and the reviewer holds every ja value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `ja.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | 人脈メモアプリ | Main ASO term 人脈メモ (SWEET). Always call the product category 人脈メモアプリ; for "the people who matter to you" use 大切な人 (second ASO term). Do not write 人物手帳, CRM or 人脈管理 (the last reads as business and is heavily contested). |
| Person page (a page for every person) | 人物ページ | The app's tab and titles say 人物 (tab.people, editPerson.newTitle). Running text may say 一人ひとりのページ, but the fixed name is 人物ページ. |
| Note (a dated note about a person) | メモ | from app strings: personDetail.noteSection / addNote.title. Do not use ノート (the app shows it only on the share screen and backup prompts). |
| Field (size and measurement fields) | 項目 | from app strings: editPerson.fieldsSection / addField.title (項目を追加). Do not write フィールド; the only exception is the app's own 地域フィールド (settings.regionalFields). Custom field = カスタム項目 (addField.customSection). |
| Ring size / shoe size | 指輪サイズ / 靴サイズ | from app strings: settings.unitRingSize 指輪サイズ, field.shoeSize 靴サイズ. Per-finger field names follow the app: 左親指／左示指／左中指／左薬指／左小指 (right hand likewise); the app field name is 示指, while running text about the finger says 人差し指 (field.finger.index 人差指). Japanese ring sizes are counted in 号 (e.g. 10号). |
| Gift idea / gift log | ギフトアイデア / プレゼント記録 | ギフトアイデア from app strings: field.giftIdeas. In running text a gift is プレゼント (natural, personal); the log is プレゼント記録, not the business-like 贈答記録. |
| Conversation question (the question catalog) | 会話のきっかけになる質問 / 質問カタログ | The app's catalog screen title is ひとつ選んで話してみる (promptCatalog.title), its search field 質問を探す; the app counts %d 問, the site writes 323問 (no space). The short name is always 質問. |
| Guides (the article pages) | ガイド | Navigation and the index page both say ガイド. |
| FAQ / frequently asked questions | よくある質問 | Navigation and page titles both say よくある質問; do not mix in FAQ. |
| Privacy Policy | プライバシーポリシー | from app strings: settings.privacyPolicy. |
| Terms of Use | 利用規約 | from app strings: settings.termsOfUse. |
| One-time purchase, no subscription | 買い切り・サブスクリプションなし | 一度の購入。サブスクリプションなし。 from app strings: paywall.subtitle. The paid version is 買い切り版 (settings.upgradeToPro); do not use Pro, ライフタイム or 永久ライセンス. Do not abbreviate to サブスク; always write サブスクリプション. |
| Back up / restore (to your own cloud) | バックアップ / 復元（ご自身のクラウドへ） | from app strings: settings.backup, backup.restoreAction. Write the destination as ご自身のiCloud／Google Drive／Dropbox; iCloud is iPhone only. |
| On your phone (data stays on the device) | スマホの中だけに保存 | General pages and guides say スマホ; the privacy policy and terms of use say お使いのデバイス内 (the app says デバイス, appLockUnavailable). Do not write ローカル. |
| Free version (free for up to 5 people) | 無料版 | from app strings: paywall.limitReachedTitle 無料版の上限に達しました. |
| Person (a human being, in running text) | 人 / 大切な人 | Running text says 人 or 大切な人; 人物 only in app screen names (人物ページ, 新しい人物). Never call people 顧客 or 連絡先 (business / address-book tone). |
| Size and measurement fields (23 of them) | サイズと身体の項目 | Matches the app's field groups personDetail.groupSizes サイズ and groupBody 身体. Phrases like 23のサイズ・身体計測項目 keep these two words; do not use 採寸. |
| Shoe / ring size systems (column heads, conversion) | US・EU・UK・日本（号）・中国・香港・スイス | The app's unit labels unit.ringUS/EU/UK/JP are US／EU／UK／JP. The site's conversion table heads are 米国・カナダ, 英国・オーストラリア, EU, 日本（号）, 中国; circumference 円周（mm）, inside diameter 内径（mm）. Japanese shoe sizes are in centimetres (cm). |
| Reminder | リマインダー | from app strings: notification.title. Phrases like 7日前の朝9時にお知らせ use お知らせ or 通知; the feature name is always リマインダー. |
| Birthday / Anniversary | 誕生日 / 記念日 | from app strings: field.birthday, field.anniversary. |
| How We Met (field) | 出会い | from app strings: field.howWeMet. Quote the field as 出会い. |
| Wishlist (field) | ウィッシュリスト | from app strings: field.wishlistUrl. |
| Allergy | アレルギー | from app strings: field.allergy. |
| Knowing each other (question category) | お互いを知る | from app strings: promptCatalog.category.knowingEachOther. |
| App Lock | Appロック | from app strings: settings.appLock (Apple's Japanese convention writes App). When explaining the lock methods write スマホの画面ロック（Face ID、Touch ID、指紋、パスコードなど）; 画面ロック = the phone's own screen lock. |
| Custom field | カスタム項目 | from app strings: addField.customSection. |
| Theme (color themes) | テーマ | from app strings: settings.currentTheme / themePicker.title. Do not use カラーテーマ. |
| Share (a person's page as an image) | 共有 / 画像を保存 | from app strings: shareComposer.share, shareComposer.save. |
| Hidden people | 非表示の連絡先 | from app strings: settings.hiddenPeople (the app says 連絡先; copy it only here, and never call people 連絡先 elsewhere on the site). |
| Studio / publisher name | ALU Studio | Not translated; keep the capitalization. |
