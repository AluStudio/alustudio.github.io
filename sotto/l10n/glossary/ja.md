# Site glossary — 日本語 (ja)

Copied from `_template.md`. The ja translator fills it before translating any packet, and the reviewer holds every ja value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `ja.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | 人脈メモアプリ | ASO 主打詞「人脈メモ」（SWEET）。商品類別一律用「人脈メモアプリ」；描述「對你重要的人」時用「大切な人」（ASO 第二主打詞）。不要寫成「人物手帳」「CRM」「人脈管理」（後者偏商務、競爭激烈）。 |
| Person page (a page for every person) | 人物ページ | App tab/標題用「人物」（tab.people、editPerson.newTitle）。行文可說「一人ひとりのページ」，但專有稱呼固定為「人物ページ」。 |
| Note (a dated note about a person) | メモ | from app strings: personDetail.noteSection / addNote.title。不要用「ノート」（app 僅在分享畫面、備份提示出現）。 |
| Field (size and measurement fields) | 項目 | from app strings: editPerson.fieldsSection / addField.title（「項目を追加」）。不要寫「フィールド」；唯一例外是 app 自己的「地域フィールド」（settings.regionalFields）。自訂欄位＝「カスタム項目」（addField.customSection）。 |
| Ring size / shoe size | 指輪サイズ / 靴サイズ | from app strings: settings.unitRingSize「指輪サイズ」、field.shoeSize「靴サイズ」。十指各自的欄位名照 app：左親指／左示指／左中指／左薬指／左小指（右同）；app 欄位名是「示指」，泛指手指時用「人差し指」（field.finger.index「人差指」）。日本的戒圍單位是「号」（例：10号）。 |
| Gift idea / gift log | ギフトアイデア / プレゼント記録 | 「ギフトアイデア」from app strings: field.giftIdeas。禮物本身行文用「プレゼント」（自然、親密）；紀錄用「プレゼント記録」，不要用偏商務的「贈答記録」。 |
| Conversation question (the question catalog) | 会話のきっかけになる質問 / 質問カタログ | App 的目錄畫面標題是「ひとつ選んで話してみる」（promptCatalog.title），搜尋框「質問を探す」；計數 app 寫「%d 問」，站上寫成「323問」（不加空格）。短稱一律「質問」。 |
| Guides (the article pages) | ガイド | 導覽列與索引頁都用「ガイド」。 |
| FAQ / frequently asked questions | よくある質問 | 導覽列、頁面標題都用「よくある質問」，不要混用「FAQ」。 |
| Privacy Policy | プライバシーポリシー | from app strings: settings.privacyPolicy。 |
| Terms of Use | 利用規約 | from app strings: settings.termsOfUse。 |
| One-time purchase, no subscription | 買い切り・サブスクリプションなし | 「一度の購入。サブスクリプションなし。」from app strings: paywall.subtitle。付費版稱「買い切り版」（settings.upgradeToPro）；不要用「Pro」「ライフタイム」「永久ライセンス」。「サブスク」簡寫不用，統一寫「サブスクリプション」。 |
| Back up / restore (to your own cloud) | バックアップ / 復元（ご自身のクラウドへ） | from app strings: settings.backup、backup.restoreAction。備份目的地寫「ご自身のiCloud／Google Drive／Dropbox」，iCloud 僅 iPhone。 |
| On your phone (data stays on the device) | スマホの中だけに保存 | 一般頁面與指南用「スマホ」；隱私權政策與利用規約用「お使いのデバイス内」（app 用「デバイス」，appLockUnavailable）。不要寫成「ローカル」。 |
| Free version (free for up to 5 people) | 無料版 | from app strings: paywall.limitReachedTitle「無料版の上限に達しました」。 |
| Person (a human being, in running text) | 人 / 大切な人 | 行文用「人」「大切な人」；「人物」只用在 app 畫面名（人物ページ、新しい人物）。不要把人稱作「顧客」「連絡先」（商務／通訊錄語感）。 |
| Size and measurement fields (23 of them) | サイズと身体の項目 | 對應 app 欄位群組 personDetail.groupSizes「サイズ」、groupBody「身体」。「23のサイズ・身体計測項目」之類寫法固定這兩個詞，不要用「採寸」。 |
| Shoe / ring size systems (column heads, conversion) | US・EU・UK・日本（号）・中国・香港・スイス | app 單位標籤 unit.ringUS/EU/UK/JP 為 US／EU／UK／JP；站上換算表欄名寫「米国・カナダ」「英国・オーストラリア」「EU」「日本（号）」「中国」，周長「円周（mm）」、內徑「内径（mm）」。鞋子日本尺寸是公分（cm）。 |
| Reminder | リマインダー | from app strings: notification.title。「7日前の朝9時にお知らせ」類說法用「お知らせ」或「通知」，功能名稱固定「リマインダー」。 |
| Birthday / Anniversary | 誕生日 / 記念日 | from app strings: field.birthday、field.anniversary。 |
| How We Met (field) | 出会い | from app strings: field.howWeMet。引用欄位名時用「出会い」。 |
| Wishlist (field) | ウィッシュリスト | from app strings: field.wishlistUrl。 |
| Allergy | アレルギー | from app strings: field.allergy。 |
| Knowing each other (question category) | お互いを知る | from app strings: promptCatalog.category.knowingEachOther。 |
| App Lock | Appロック | from app strings: settings.appLock（Apple 日文慣用「App」）。說明鎖定方式時寫「スマホの画面ロック（Face ID、Touch ID、指紋、パスコードなど）」；「画面ロック」＝phone's own screen lock。 |
| Custom field | カスタム項目 | from app strings: addField.customSection。 |
| Theme (color themes) | テーマ | from app strings: settings.currentTheme / themePicker.title。「カラーテーマ」不用。 |
| Share (a person's page as an image) | 共有 / 画像を保存 | from app strings: shareComposer.share、shareComposer.save。 |
| Hidden people | 非表示の連絡先 | from app strings: settings.hiddenPeople（app 用「連絡先」，僅此處照抄；站上其他地方不要把人物叫「連絡先」）。 |
| Studio / publisher name | ALU Studio | 不翻譯、不改大小寫。 |
