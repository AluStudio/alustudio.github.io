# Site glossary — 한국어 (ko)

Copied from `_template.md`. The ko translator fills it before translating any packet, and the reviewer holds every ko value to it.

The Sotto app has no glossary file. Its own wording reaches every packet as the app's exact translation of strings the site shares with the app (`appMatch`); the app's `ko.lproj/Localizable.strings` in the sotto repo (`sotto-ios/Targets/Sotto/Resources/`) is the reference for any other screen or field name. Never contradict the app's wording; add a row here for a word the pages repeat, so every page and guide says it the same way.

Fill "Term in language" with the one word or phrase every page will use, as a reader in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| People notes app (the product category) | 인맥 노트 앱 | Store subtitle and aso-keywords use 인맥 노트 / 지인 기록 (the searched terms). Use 인맥 노트 as the category name; 지인 기록 is allowed where the sentence is about recording things on acquaintances. Never a bare 메모 앱 as the category (pulls in Notion/GoodNotes class apps). Do not use 인맥 관리 for a gentle sentence about loved ones — say 소중한 사람들에 대한 기록 instead; 인맥 관리 only when the sentence echoes the search phrase |
| Person page (a page for every person) | 사람별 페이지 | App calls a person 사람 (`editPerson.newTitle` 새 사람, `personList.emptyAction` 첫 사람 추가); avoid 인물/연락처 for the page. One page per 사람 |
| Note (a dated note about a person) | 메모 | from app strings: `editPerson.addNote` 메모 추가, `personDetail.sectionNotes` 메모. Not 노트 (that is the product-category word in 인맥 노트) and not 일기 |
| Field (size and measurement fields) | 필드 | from app strings: `editPerson.addField` 필드 추가. Not 항목 |
| Ring size / shoe size | 반지 사이즈 / 신발 사이즈 | Search terms use 사이즈 (aso subtitle 선물 사이즈); the app's settings labels are 반지 치수 / 신발 치수 (`settings.unitRingSize`, `settings.unitShoeSize`) — write those only when naming that setting. Per-finger fields: 왼약지 / 오른약지 (`field.leftRing`, `field.rightRing`); finger = 약지 (`field.finger.ring`). Systems US/EU/UK/JP stay Latin (`unit.ringUS`…) |
| Gift idea / gift log | 선물 아이디어 / 선물 기록 | Gift Ideas = 선물 아이디어 (from app strings: `field.giftIdeas`). Gift log = 선물 기록 (aso-keywords SWEET term); don't use 선물 목록/위시리스트, which read as a wishlist |
| Conversation question (the question catalog) | 대화 질문 / 질문 모음 | 질문 (`promptCatalog.searchPlaceholder` 질문 검색). The app writes a count as `%d 문항`, but prose says N개의 질문. Catalog = 질문 모음 (the app uses 모음 for packs: 상황별 모음, 보너스 모음). The screen "Pick a question" is shown as `promptCatalog.title` 한 가지 골라서 같이 이야기해요 — quote it as is |
| Guides (the article pages) | 가이드 | Nav label and page name. Not 칼럼/블로그 |
| FAQ / frequently asked questions | 자주 묻는 질문 | Spell it out in titles, nav and headings; FAQ alone only if space forces it |
| Privacy Policy | 개인정보 처리방침 | from app strings: `settings.privacyPolicy` |
| Terms of Use | 이용약관 | from app strings: `settings.termsOfUse` |
| One-time purchase, no subscription | 한 번만 구매, 구독 없음 | App: 일회성 구매 · 평생 이용 (`paywall.oneTimePurchase`), 구독이 아닙니다 (`paywall.subtitle`). Lifetime unlock = 평생 이용권 (`settings.upgradeToPro`). Say 구독 없이, never 정기결제 |
| Back up / restore (to your own cloud) | 백업 / 복원 | from app strings: `settings.backup` 백업, `backup.restoreAction` 복원, `backup.backupTo` %@에 백업. Own cloud = 내 클라우드 (iCloud, Google Drive, Dropbox stay Latin) |
| On your phone (data stays on the device) | 내 휴대폰에만 저장 | Site prose says 휴대폰; the app's own screens say 기기 — use 기기 only when quoting an app string. Never imply a server: 서버에 올리지 않습니다 |
| Size and measurement fields | 사이즈와 치수 필드 | Site sentence form ("23 size and measurement fields"). App section is 치수 (`personDetail.groupSizes`); body measurements = 신체 (`personDetail.groupBody`) → 신체 치수 |
| Custom field | 사용자화 필드 | from app strings: `addField.createCustom` 사용자화 필드 생성, `customField.title`. Awkward but it is what the app shows — do not write 맞춤 필드 / 커스텀 필드 |
| App Lock | 앱 잠금 | from app strings: `settings.appLock`. Face ID, Touch ID stay Latin; the phone's own screen lock = 휴대폰 자체 화면 잠금 |
| Reminder | 알림 | from app strings: `notification.title` 알림. Not 리마인더 |
| Birthday / anniversary | 생일 / 기념일 | from app strings: `field.birthday`, `field.anniversary`. aso term 생일 관리 only when the sentence is about managing birthdays |
| Allergy | 알레르기 | from app strings: `field.allergy` |
| Color theme | 테마 | from app strings: `settings.currentTheme` 현재 테마. "8 color themes" = 컬러 테마 8가지, light/dark = 라이트·다크 |
| Free limit | 무료 한도 | from app strings: `paywall.limitReachedTitle` 무료 한도 도달. The app says Pro in limit messages; the site says 평생 이용권 for the paid unlock |
