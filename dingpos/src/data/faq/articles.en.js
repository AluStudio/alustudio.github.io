// DingPOS FAQ — English content pack.
// Slugs and `related` links MUST stay in sync with articles.zh-Hant.js
// (enforced at build time by scripts/copy-spa-pages.js).
// Block schema documented in articles.zh-Hant.js.

export const categories = [
  { key: "getting-started", icon: "bi-rocket-takeoff", label: "Getting Started" },
  { key: "checkout", icon: "bi-basket3", label: "Checkout" },
  { key: "products", icon: "bi-box-seam", label: "Products & Inventory" },
  { key: "promotion", icon: "bi-tags", label: "Promotions & Loyalty" },
  { key: "backup", icon: "bi-cloud-check", label: "Backup & Data" },
  { key: "subscription", icon: "bi-credit-card", label: "Subscription & Billing" },
];

export const articles = [
  // ── Getting Started ───────────────────────────────────────
  {
    slug: "how-to-set-up",
    category: "getting-started",
    question: "How do I set up my store in DingPOS?",
    keywords: ["setup", "start", "onboarding", "first", "wizard", "open store"],
    content: [
      { type: "p", text: "The first time you open DingPOS, a setup wizard walks you through opening your store in about 10 minutes:" },
      {
        type: "steps",
        items: [
          "Pick your country — currency, tax mode, and a default tax rate are filled in automatically (tax rate and tax mode can still be adjusted at this point).",
          "Enter your store name, and optionally upload a store logo.",
          "Follow the guide to create 3–5 products (skippable — you can add them anytime later).",
        ],
      },
      { type: "p", text: "When you're done you'll hear a \"Ding!\" — your store is ready and you can start ringing up sales right away." },
    ],
    related: ["change-currency", "free-trial", "product-variants"],
  },
  {
    slug: "offline-usage",
    category: "getting-started",
    question: "Does DingPOS work without internet?",
    keywords: ["offline", "internet", "wifi", "network", "no connection", "market"],
    content: [
      { type: "p", text: "Yes. DingPOS is offline-first — checkout, product management, inventory, and reports all run locally on your iPad with no network required. Night markets, pop-up stalls, and other no-WiFi venues work perfectly." },
      { type: "p", text: "Only two things need a connection: cloud backup (uploading to your own iCloud / Google Drive / Dropbox) and subscription status verification." },
    ],
    related: ["backup-data", "account-required"],
  },
  {
    slug: "account-required",
    category: "getting-started",
    question: "Do I need to create an account?",
    keywords: ["account", "sign up", "login", "register", "privacy"],
    content: [
      { type: "p", text: "No. DingPOS has no account system — download it and start selling. Your products, orders, and customer data all stay on your iPad and are never uploaded to our servers." },
      { type: "p", text: "When you enable cloud backup, you sign in to your own cloud account (iCloud, Google Drive, or Dropbox). Backups live in your account — we cannot access them." },
    ],
    related: ["offline-usage", "backup-data"],
  },
  {
    slug: "supported-devices",
    category: "getting-started",
    question: "Which devices are supported?",
    keywords: ["device", "iphone", "mac", "ipad", "requirements", "version"],
    content: [
      { type: "p", text: "DingPOS currently supports iPads running iPadOS 17 or later, designed primarily for landscape orientation." },
      { type: "p", text: "iPhone and Mac are not supported yet. If you'd like us to support another device, write to us and tell us about your use case." },
    ],
    related: ["multi-device"],
  },
  {
    slug: "change-currency",
    category: "getting-started",
    question: "Can I change the currency or tax mode after setup?",
    keywords: ["currency", "tax mode", "change", "locked", "tax rate"],
    content: [
      { type: "p", text: "The tax rate can be changed anytime in Settings — the new rate only applies to future orders." },
      { type: "p", text: "Currency and tax mode (inclusive / exclusive) are locked once setup is complete. All your historical orders were calculated with them, so changing them mid-stream would corrupt your reports." },
      { type: "note", text: "If you just opened your store and have no important data yet, you can delete and reinstall the app to run setup again. Make sure there's nothing you need to keep before deleting." },
    ],
    related: ["tax-calculation", "how-to-set-up"],
  },

  // ── Checkout ──────────────────────────────────────────────
  {
    slug: "multiple-carts",
    category: "checkout",
    question: "How do I serve multiple customers at once?",
    keywords: ["carts", "multiple", "hold", "switch", "parallel", "queue"],
    content: [
      { type: "p", text: "The cashier screen supports up to 10 carts at the same time. Tap \"+\" on the cart bar to add one, and tap a numbered tab to switch." },
      { type: "p", text: "Each cart is calculated independently. While customer A is still browsing, switch to another cart and check out customer B first. A cart slot is removed automatically once its checkout completes." },
      { type: "note", text: "Carts live in memory only — carts that haven't been checked out are cleared when the app is fully closed." },
    ],
    related: ["apply-discounts", "payment-methods"],
  },
  {
    slug: "apply-discounts",
    category: "checkout",
    question: "How do I apply discounts?",
    keywords: ["discount", "percentage", "fixed", "markdown", "price off"],
    content: [
      { type: "p", text: "Discounts work on two levels, each supporting a fixed amount or a percentage:" },
      {
        type: "list",
        items: [
          "Item discount: tap an item in the cart → choose \"Discount\" → enter an amount or percentage.",
          "Cart discount: tap the \"Discount\" button below the cart.",
        ],
      },
      { type: "p", text: "Each item and each cart can hold one discount at a time — applying again overwrites the previous one, and tapping the discount badge removes it. Discounts are applied before tax, the standard order in retail." },
    ],
    related: ["create-promotion", "tax-calculation"],
  },
  {
    slug: "tax-calculation",
    category: "checkout",
    question: "How is tax calculated?",
    keywords: ["tax", "vat", "sales tax", "inclusive", "exclusive", "receipt"],
    content: [
      { type: "p", text: "Tax is calculated automatically based on the tax mode chosen during setup. The receipt shows the tax amount in both modes:" },
      {
        type: "list",
        items: [
          "Inclusive: prices already contain tax — the total is unchanged and the receipt breaks out the embedded tax (common in Taiwan, Japan, etc.).",
          "Exclusive: tax is added on top of the after-discount amount at checkout (common in the US, Canada, etc.).",
        ],
      },
      { type: "p", text: "Full calculation order: item discounts → cart discount → tax. Amounts are rounded half-up to the currency's decimal places (e.g. 0 for TWD, 2 for USD)." },
    ],
    related: ["change-currency", "apply-discounts"],
  },
  {
    slug: "payment-methods",
    category: "checkout",
    question: "Which payment methods are supported?",
    keywords: ["payment", "cash", "credit card", "line pay", "change", "custom"],
    content: [
      { type: "p", text: "Cash, Credit Card, and Line Pay are built in, and you can add any custom payment labels in Settings (e.g. Apple Pay, local wallets)." },
      { type: "p", text: "Payment methods are bookkeeping labels — DingPOS does not process actual payments. Take card or mobile payments with your existing terminal or app, then pick the matching label in DingPOS to record it. Cash payments calculate change automatically." },
    ],
    related: ["multiple-carts", "void-order"],
  },
  {
    slug: "void-order",
    category: "checkout",
    question: "I made a mistake at checkout — how do I void an order?",
    keywords: ["void", "refund", "cancel", "mistake", "wrong order"],
    content: [
      { type: "p", text: "Go to Orders, find the order, open its detail view, and choose Void. Confirm and it's done." },
      { type: "p", text: "Voiding automatically reverses everything connected: tracked stock is restored, loyalty points earned on the order are taken back, and redeemed points are refunded. Voided orders stay in the list clearly marked, and are excluded from report revenue." },
      { type: "note", text: "Only full voids are supported — there are no partial refunds. To correct an order, void it and ring up a new, correct one." },
    ],
    related: ["inventory-tracking", "loyalty-points"],
  },

  // ── Products & Inventory ──────────────────────────────────
  {
    slug: "product-variants",
    category: "products",
    question: "How do I create products with variants?",
    keywords: ["variants", "size", "color", "options", "spec"],
    content: [
      { type: "p", text: "Enable variants on the product edit page, then define your spec axes (e.g. \"Size\" and \"Color\"). DingPOS expands all combinations for you (S/Black, S/White, M/Black…)." },
      { type: "p", text: "Each variant has its own price and cost, and tracks its own stock. At checkout, tapping the product shows a variant picker before adding it to the cart." },
      { type: "note", text: "Spec and option names are limited to 20 characters." },
    ],
    related: ["barcode-scanning", "inventory-tracking"],
  },
  {
    slug: "barcode-scanning",
    category: "products",
    question: "How do barcodes work?",
    keywords: ["barcode", "scan", "scanner", "duplicate", "camera"],
    content: [
      { type: "p", text: "Product barcodes can be typed in manually or scanned with the camera. Barcodes must be unique — if a barcode conflicts with another product when saving, DingPOS shows you which product it belongs to." },
      { type: "p", text: "At checkout, the search field matches both product names and barcode prefixes, so a barcode scanner or manual entry pulls up the product instantly." },
    ],
    related: ["product-variants"],
  },
  {
    slug: "inventory-tracking",
    category: "products",
    question: "How do I track inventory?",
    keywords: ["inventory", "stock", "tracking", "count", "low stock"],
    content: [
      { type: "p", text: "Inventory tracking is a per-product toggle — turn it on in the product edit page and enter the current quantity. Each variant of a product tracks its own stock." },
      { type: "p", text: "Once enabled, sales deduct stock automatically, voids restore it, and you can adjust manually anytime. Every movement — sale, void, manual adjustment — is recorded in a complete ledger. Low stock is highlighted with a color warning." },
    ],
    related: ["negative-inventory", "void-order"],
  },
  {
    slug: "negative-inventory",
    category: "products",
    question: "Why can stock go negative?",
    keywords: ["negative", "stock", "out of stock", "block", "adjust"],
    content: [
      { type: "p", text: "This is by design: checkout is never blocked by insufficient stock. The first rule of a live register is that the customer never waits — a wrong number on paper can be fixed later, but an interrupted sale is lost for good." },
      { type: "p", text: "Negative stock usually means a restock or stocktake wasn't recorded. Use a manual adjustment to correct the number — the adjustment is kept in the movement ledger." },
    ],
    related: ["inventory-tracking"],
  },

  // ── Promotions & Loyalty ──────────────────────────────────
  {
    slug: "create-promotion",
    category: "promotion",
    question: "How do I create a promotion?",
    keywords: ["promotion", "deal", "bogo", "threshold", "happy hour", "coupon"],
    content: [
      { type: "p", text: "Go to Settings → Promotions. Supported types include:" },
      {
        type: "list",
        items: [
          "Spend threshold: spend X, get Y off or Y% off.",
          "Buy-one-get-one and Nth-item deals.",
          "Bonus point multipliers.",
          "Member-tier-only or birthday-month offers.",
          "Buy A get B, paid add-ons, and fixed-price bundles.",
        ],
      },
      { type: "p", text: "Each promotion can be scheduled (Happy Hour windows, specific weekdays, across midnight), scoped to specific products, and controlled with priority, stacking rules, and usage limits. Qualifying promotions apply automatically at checkout — no discount codes needed." },
    ],
    related: ["promotion-not-applied", "loyalty-points", "apply-discounts"],
  },
  {
    slug: "promotion-not-applied",
    category: "promotion",
    question: "A promotion isn't applying — what should I check?",
    keywords: ["promotion", "not working", "not applied", "troubleshoot"],
    content: [
      { type: "p", text: "Check the most common causes in order:" },
      {
        type: "steps",
        items: [
          "Schedule: is today within the active dates? Does a Happy Hour window restrict the weekday or time?",
          "Scope: are the cart items within the promotion's product or category scope? Has the spend threshold been reached?",
          "Audience: is the promotion limited to a member tier or birthday month? Was that member selected at checkout?",
          "Usage limits: has the total usage cap, or this customer's cap, been reached?",
          "Stacking: is a higher-priority promotion with \"stop after applying\" blocking it?",
        ],
      },
      { type: "p", text: "If everything checks out and it still won't apply, email us a screenshot of the promotion's settings and we'll help you dig in." },
    ],
    related: ["create-promotion", "member-tiers"],
  },
  {
    slug: "loyalty-points",
    category: "promotion",
    question: "How do loyalty points work?",
    keywords: ["points", "loyalty", "rewards", "redeem", "welcome points"],
    content: [
      { type: "p", text: "Go to Settings → Loyalty and define two rules: earn Y points per X spent, and redeem N points for M off (with an optional per-order redemption cap). You can also grant welcome points to new members automatically." },
      { type: "p", text: "Select the member at checkout and points accrue automatically; to redeem, enter the points to use. Voiding an order takes back the points it earned and refunds any points that were redeemed." },
    ],
    related: ["member-tiers", "void-order"],
  },
  {
    slug: "member-tiers",
    category: "promotion",
    question: "What are member tiers for?",
    keywords: ["tier", "vip", "gold", "upgrade", "membership level"],
    content: [
      { type: "p", text: "Member tiers (e.g. Regular, Silver, Gold) serve two purposes: they can be targeted by promotions (e.g. a Gold-only 10% off), and they let you recognize a customer's status at a glance during checkout." },
      { type: "p", text: "Tiers can auto-upgrade based on rules you define (e.g. cumulative spend), or be assigned manually. If a voided order had triggered an upgrade, the tier is rolled back automatically." },
    ],
    related: ["loyalty-points", "create-promotion"],
  },

  // ── Backup & Data ─────────────────────────────────────────
  {
    slug: "backup-data",
    category: "backup",
    question: "How do I back up my data?",
    keywords: ["backup", "icloud", "google drive", "dropbox", "cloud", "snapshot"],
    content: [
      { type: "p", text: "Go to Settings → Cloud Backup, pick one of iCloud, Google Drive, or Dropbox, and authorize it. After that you can trigger a backup manually anytime." },
      { type: "p", text: "Backups go into your own cloud account, keeping the 5 most recent snapshots. Product photos sync incrementally — only new or changed images are uploaded. If the cloud and local versions ever diverge, DingPOS asks you which to keep — it never overwrites silently." },
    ],
    related: ["transfer-new-ipad", "data-after-delete"],
  },
  {
    slug: "transfer-new-ipad",
    category: "backup",
    question: "How do I move my data to a new iPad?",
    keywords: ["transfer", "new ipad", "restore", "migrate", "move"],
    content: [
      {
        type: "steps",
        items: [
          "Old iPad: go to Settings → Cloud Backup and run a manual backup. Confirm the backup time updated.",
          "New iPad: install DingPOS and complete the setup wizard.",
          "New iPad: go to Settings → Cloud Backup, connect the same cloud account, and restore the latest snapshot.",
        ],
      },
      { type: "p", text: "Before restoring, DingPOS validates the backup's integrity and keeps a safety copy of your current data — it only swaps once the backup is confirmed usable. Product photos are restored too." },
    ],
    related: ["backup-data", "data-after-delete"],
  },
  {
    slug: "data-after-delete",
    category: "backup",
    question: "Is my data kept if I delete the app?",
    keywords: ["delete", "uninstall", "data loss", "remove app"],
    content: [
      { type: "p", text: "No. DingPOS stores everything locally on your device — deleting the app permanently deletes all products, orders, members, and settings, unless you've enabled cloud backup." },
      { type: "note", text: "Before deleting the app, always run a manual backup and confirm it succeeded. After reinstalling, restore from the cloud." },
    ],
    related: ["backup-data", "transfer-new-ipad"],
  },
  {
    slug: "multi-device",
    category: "backup",
    question: "Can I use two iPads together?",
    keywords: ["two ipads", "multi device", "sync", "share", "second register"],
    content: [
      { type: "p", text: "Each iPad's data is currently independent — real-time sharing of one dataset across two devices is not supported yet." },
      { type: "p", text: "You can copy data from one iPad to another via cloud backup (back up → restore), which works well for switching devices or seeding a second iPad. Orders rung up separately on each device won't merge automatically, though. Multi-device sync is on our roadmap." },
    ],
    related: ["transfer-new-ipad", "supported-devices"],
  },

  // ── Subscription & Billing ────────────────────────────────
  {
    slug: "free-trial",
    category: "subscription",
    question: "How does the free trial work?",
    keywords: ["trial", "free", "30 days", "credit card"],
    content: [
      { type: "p", text: "You get 30 days of full functionality from first install — no credit card, no account required." },
      { type: "p", text: "Everything you create during the trial (products, orders, members) is kept in full. Your data is never deleted, whether or not you subscribe afterwards." },
    ],
    related: ["after-trial", "manage-subscription"],
  },
  {
    slug: "after-trial",
    category: "subscription",
    question: "Does my data disappear when the trial ends?",
    keywords: ["expire", "trial end", "locked", "data"],
    content: [
      { type: "p", text: "No — your data stays on your device forever. When the trial ends, checkout is locked, but you can still browse orders, view reports, and manage products." },
      { type: "p", text: "Subscribe at any time and checkout unlocks immediately, with all your data exactly as you left it." },
    ],
    related: ["free-trial", "manage-subscription"],
  },
  {
    slug: "manage-subscription",
    category: "subscription",
    question: "How do I subscribe, cancel, or restore a purchase?",
    keywords: ["subscribe", "cancel", "restore purchase", "price", "billing"],
    content: [
      { type: "p", text: "Subscriptions are handled through App Store in-app purchase — plans and prices are shown in the app. Payment is processed by Apple; we never see your payment details." },
      {
        type: "list",
        items: [
          "Cancel: manage it in your device's Settings → Apple Account → Subscriptions. Cancel at least 24 hours before the current period ends to avoid renewal.",
          "Restore: after switching devices or reinstalling, tap \"Restore Purchase\" on DingPOS's subscription page.",
        ],
      },
    ],
    related: ["free-trial", "after-trial"],
  },
];
