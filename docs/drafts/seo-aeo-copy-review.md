---
summary: Every draft string written during the SEO/AEO pass, collected for one review sitting
read_when:
  - Reviewing the aeo-seo branch before merge
  - Checking what copy an answer engine will quote
---

# SEO/AEO 文案審核

本檔由 `scripts/build-copy-review.mjs` 從各 app 的 locale 檔與 metadata 直接產生，不是手抄。
只列**英文**版本；其他語言由 l10n-translator 依此翻譯，語氣跟著英文走。

改哪裡：每段標了來源檔路徑。改完英文後其他語言需重新翻譯。

實作與決策脈絡見 [seo-aeo-optimization.md](./seo-aeo-optimization.md)。


## 1. Route title / description

搜尋結果與 AI 引用時最常出現的兩行字。

### /home/

- 來源：`home/index.html`
- **title**: Alu Studio — Indie App Studio
- **description**: Alu Studio is an independent app studio building small, focused apps for iPhone, iPad, and Android: Pikgeon, Babbby, Sotto, and DingPOS.

### /pikgeon/

- 來源：`pikgeon/index.html`
- **title**: Pikgeon — Pikmin Bloom Postcard Tracker with On-Device OCR
- **description**: Pikgeon turns the postcards you receive in Pikmin Bloom into a searchable delivery log. Its OCR reads the date, location, and sender entirely on your device, so nothing is uploaded.

子路由（來源：`pikgeon/scripts/copy-spa-pages.js`）：

- **/pikgeon/privacy/** — Privacy & Data Security — Pikgeon
  - How Pikgeon handles your data: postcard records stay in local storage on your device, OCR runs offline, and the app does no tracking.
- **/pikgeon/terms/** — Terms of Use — Pikgeon
  - The terms that apply when you download or use Pikgeon, the free postcard tracking app from Alu Studio.
- **/pikgeon/faq/** — FAQ — Pikgeon
  - Common Pikgeon questions answered: quick import using an iPhone Shortcut with Back Tap, where to find Merge Friends, and why postcard recognition sometimes fails.

### /babbby/

- 來源：`babbby/index.html`
- **title**: Babbby — 0–6 歲寶貝的每日活動靈感
- **description**: Babbby — 為 0–6 歲寶貝量身推薦每日活動靈感。紀錄成長、建立日常，讓每一天都有意義。

子路由（來源：`babbby/scripts/copy-spa-pages.js`）：

- **/babbby/privacy/** — 隱私權政策 — Babbby
  - Babbby 如何處理你的資料：孩子檔案、活動紀錄、完成記錄與統計全部以本地資料庫儲存在你的裝置上，不會傳輸至 Alu Studio 似服器或第三方。
- **/babbby/terms/** — 使用條款 — Babbby
  - 下載或使用 Babbby（Alu Studio 開發的免費 iOS 應用程式）時適用的使用條款。
- **/babbby/faq/** — 常見問題 — Babbby
  - Babbby 常見問題：適用年齡 0–6 歲、資料全部存在裝置本地不上雲、免費無訂閱制、340 種以上活動依手邊材料篩選。

### /sotto/

- 來源：`sotto/index.html`
- **title**: Sotto — Remember the Details About People You Love
- **description**: Sotto — Remember the details that matter. Keep track of the little things about the people you care about.

子路由（來源：`sotto/scripts/copy-spa-pages.js`）：

- **/sotto/privacy/** — Privacy Policy — Sotto
  - How Sotto handles your information: your notes stay in local storage on your device, with optional iCloud sync and biometric lock, and Alu Studio collects none of it.
- **/sotto/terms/** — Terms of Use — Sotto
  - The terms that apply when you download, install, or use Sotto, the personal-notes app from Alu Studio.
- **/sotto/faq/** — FAQ — Sotto
  - Common Sotto questions: notes never leave your device, optional Face ID / Touch ID app lock, 27+ measurement fields with unit conversion, and a curated catalogue of questions to open a note with.

### /dingpos/

- 來源：`dingpos/index.html`
- **title**: DingPOS — Offline-First Point of Sale for iPad
- **description**: DingPOS — Open your store in 10 minutes. A server-less, offline-first point of sale for iPad. Your data, your control.

子路由（來源：`dingpos/scripts/copy-spa-pages.js`）：

- **/dingpos/privacy/** — Privacy Policy — DingPOS
  - How DingPOS handles your business data: sales records stay in local storage on your iPad with optional cloud backup, and Alu Studio collects no business data.
- **/dingpos/terms/** — Terms of Use — DingPOS
  - The terms that apply when you download, install, or use DingPOS, including its subscription terms.
- **/dingpos/faq/** — FAQ — DingPOS
  - Common DingPOS questions: checkout works fully offline, a 30-day free trial then NT$299 per month, business data stored on your own iPad, and optional backup to your own iCloud, Google Drive or Dropbox.

## 2. 工作室定位（最高引用價值）

回答引擎回答「Alu Studio 是什麼」時最可能引用這兩段。來源：`home/src/locales/en/translation.json`

- **bio**: Independent app studio — small, focused apps for iPhone, iPad, and Android.
- **about**: Alu Studio builds apps that each do a single everyday job well. There are four so far: Pikgeon for postcard collectors, Babbby for parents of young children, Sotto for remembering the people you care about, and DingPOS for small shops. Pikgeon, Babbby, and Sotto are free to download.

各 app 一句話介紹（同檔）：

- **Keep Your Postcard Memories Organized** — Pikgeon turns the postcards you receive in Pikmin Bloom into a searchable delivery log. Share a screenshot and its offline OCR reads the date, location, and sender, then matches them to your friends — all on your device, with nothing uploaded.
- **Daily Activity Ideas for Ages 0–6** — Babbby suggests activities for children aged 0 to 6, drawn from a library of over 340 ideas across 8 categories. Filter by the materials you already have at home, and track milestones as you go.
- **Remember the Details That Matter** — Sotto keeps a private page for each person you care about — what they love, what they can't stand, and over 27 measurement fields like clothing and ring sizes. Everything stays on your device, and you can lock the app with Face ID or Touch ID.
- **Point of Sale for iPad** — DingPOS is a point-of-sale app for iPad that runs entirely on the device — no account, no server, and it keeps working with no internet. Your products, orders, and customers stay on your own iPad.

## 3. Landing hero 文案

### pikgeon

來源：`pikgeon/src/locales/en/translation.json`

- Keep Your Pikmin Bloom Postcards Organized.
- Pikgeon turns the postcards you receive in Pikmin Bloom into a searchable delivery log. Its OCR reads the date, location, and sender entirely on your device, so nothing is uploaded.

### babbby

來源：`babbby/src/locales/en/translation.json`

- Babbby
- Daily activity ideas for your little one, ages 0–6. Track milestones, build routines, and make every day count.

### sotto

來源：`sotto/src/locales/en/translation.json`

- Remember the details that matter
- Everyone carries little details worth remembering. Sotto keeps them safe for you — heights, preferences, the things only you would know. All data stays on your phone, quietly helping you remember.

### dingpos

來源：`dingpos/src/locales/en/translation.json`

- Open your store in 10 minutes. Your data, your control.
- DingPOS is a server-less point of sale for iPad. No account, no cloud lock-in, and it keeps working with no internet. Your products, orders, and customers all stay on your own device.

## 4. FAQ

全部由已上線功能、隱私政策與條款推導。你手上的真實使用者提問是 AEO 引用價值最高的來源 — 建議對照一輪。

### pikgeon（3 題）

來源：`pikgeon/src/locales/en/translation.json` → `faq.items`

**undefined**
> undefined

**undefined**
> undefined

**undefined**
> undefined

### babbby（7 題）

來源：`babbby/src/locales/en/translation.json` → `faq.items`

**What ages is Babbby for?**
> Ages 0–6. Activities are matched to your child's age automatically, so you only see suggestions that fit their current stage. Babbby is a tool for parents and caregivers, not an app for children to use directly.

**Is my activity history uploaded to the cloud?**
> No. Child profiles, activity records, completion history and statistics are all stored in a local database (GRDB/SQLite) on your device, and are never sent to Alu Studio's servers or any third party. Uninstalling the app deletes that local data permanently.

**Does Babbby cost anything?**
> No. Babbby is free to download and use, with no subscription. The only purchase is an optional one-time tip ("buy the developer a coffee") handled entirely through Apple's StoreKit — Alu Studio never collects or sees any payment information.

**How many activities are there?**
> Over 340, across eight categories including gross motor, fine motor, language and sensory play. Babbby filters them by age automatically, and you can also browse the full library yourself.

**Can I use Babbby without special toys or equipment?**
> Yes. Pick the materials you already have — crayons, a cardboard box, building blocks — and Babbby shows only the activities you can do right now. Nothing needs to be bought first.

**Are the activity suggestions professional child development advice?**
> No. Every suggestion is generated algorithmically and is meant as inspiration only. It does not constitute medical, educational, psychological or child development advice. Parents and guardians decide whether any activity suits their child.

**Is there an Android version?**
> Not yet — Babbby is currently available on iOS through the App Store.

### sotto（8 題）

來源：`sotto/src/locales/en/translation.json` → `faq.items`

**Is my data uploaded anywhere?**
> No. Everything you write stays on your device. Sotto does not upload your data to any server, and does not collect, transmit or share your personal content.

**Can I lock Sotto so nobody else can read it?**
> Yes. App Lock is optional and uses Face ID or Touch ID. The biometric check is handled entirely by Apple's LocalAuthentication framework and stays in the secure enclave on your device — Alu Studio can never access or store it.

**What happens to my notes if I lose my phone?**
> Sotto has no cloud sync of its own, so your notes live on the device. If you have iCloud Backup switched on, your device backup may include Sotto's data; that backup is governed by Apple's privacy policy and managed in your device's iCloud settings.

**What can I record about someone?**
> Each person gets their own page with photos and a bio, free-form notes for the things they said or love, and over 27 measurement fields — height, weight, shoe size, ring size and more — with real-time unit conversion so you never have to ask before buying a gift.

**What if I don't know what to ask someone?**
> Pick a question from the curated catalog. Sotto opens a fresh note already prefilled with that question, so you only have to fill in their answer.

**Which devices does Sotto run on?**
> iPhone via the App Store and Android via Google Play.

**Does Sotto cost anything?**
> No. Sotto is free to download.

**Can I change how Sotto looks?**
> Yes. Seven colour themes are included, so you can pick the one that suits you.

### dingpos（8 題）

來源：`dingpos/src/locales/en/translation.json` → `faq.items`

**Does DingPOS work without an internet connection?**
> Yes. DingPOS is server-less and needs no account, so checkout keeps working with no internet at all. Your products, orders and customers stay on your own iPad rather than on someone else's server.

**How much does DingPOS cost?**
> A 30-day full-feature free trial with no credit card required, then NT$299 per month. There are no transaction fees and no hidden charges — the subscription runs through Apple App Store In-App Purchase, with RevenueCat managing subscription status.

**What happens to my data when the trial or subscription ends?**
> Your data is always kept. Nothing is deleted when a trial expires, and you can resubscribe at any time and carry on where you left off.

**Where is my business data stored?**
> Locally on your device. Unless you actively turn on cloud backup, none of it leaves the iPad. DingPOS does not collect, transmit or share your business content.

**How does backup work?**
> Backup is optional and goes to your own cloud account — pick one of iCloud, Google Drive or Dropbox. Backups are manual and run whenever you trigger them, the latest 5 snapshots are kept, product images sync incrementally, and a conflict always asks you which copy to keep instead of silently overwriting.

**How long does setup take?**
> About 10 minutes end to end. Pick your country and the currency, tax mode and tax rate are filled in for you; set your store name and logo; then start selling.

**What device do I need?**
> An iPad. DingPOS is built specifically for iPad rather than as a scaled-up phone app.

**Can it handle busy counters and product variants?**
> Yes. Up to 10 carts can run at the same time, products can have variants such as size × colour each with its own price and cost, and barcodes can be typed in or scanned with the camera. Negative stock is allowed so checkout is never blocked.

共 26 題。

## 5. og:image x5

1200x630，各 app 品牌色與字體。重新產生：`npm run og-images`（調整 `scripts/generate-og-images.mjs` 的 `CARDS`）。

- `home/public/og-image.png`
- `pikgeon/public/og-image.png`
- `babbby/public/og-image.png`
- `sotto/public/og-image.png`
- `dingpos/public/og-image.png`
