// DingPOS FAQ — English content pack.
// Slugs and `related` links MUST stay in sync with articles.zh-Hant.js
// (enforced at build time by scripts/copy-spa-pages.js).
// Block schema documented in articles.zh-Hant.js.

export const categories = [
  { key: "getting-started", icon: "bi-rocket-takeoff", label: "Getting Started", group: "faq" },
  { key: "checkout", icon: "bi-basket3", label: "Checkout", group: "faq" },
  { key: "products", icon: "bi-box-seam", label: "Products & Inventory", group: "faq" },
  { key: "promotion", icon: "bi-tags", label: "Promotions & Loyalty", group: "faq" },
  { key: "backup", icon: "bi-cloud-check", label: "Backup & Data", group: "faq" },
  { key: "subscription", icon: "bi-credit-card", label: "Subscription & Billing", group: "faq" },
  { key: "promotion-guide", icon: "bi-mortarboard", label: "Promotion Setup Guides", group: "guide" },
  { key: "roadmap", icon: "bi-signpost-split", label: "Coming Soon", group: "roadmap", standalone: true },
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
    related: ["roadmap-payment-integration", "multiple-carts", "void-order"],
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
    related: ["inventory-tracking", "roadmap-returns-exchanges", "loyalty-points"],
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
      { type: "p", text: "At checkout, the search field matches both product names and barcode prefixes — type a barcode to pull up the product instantly. For hardware barcode scanner plans, see “Will physical barcode scanners be supported?”" },
    ],
    related: ["product-variants", "roadmap-barcode-scanner"],
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
    related: ["negative-inventory", "roadmap-purchase-orders"],
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
    related: ["guide-threshold", "guide-composite", "promotion-not-applied"],
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
    related: ["guide-schedule", "guide-priority-stacking", "create-promotion"],
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
  // ── New FAQ: checkout & report behavior ───────────────────
  {
    slug: "price-change-cart",
    category: "checkout",
    question: "If I change a product's price, does the cart update?",
    keywords: ["price change", "reprice", "cart", "recalculate"],
    content: [
      { type: "p", text: "The cart shows the price at the moment the item was added. When you tap checkout confirm, DingPOS re-queries the latest price of every item — if anything changed, it alerts you with the updated prices before proceeding." },
      { type: "p", text: "Promotions are also re-evaluated from scratch at confirmation. If the total, tax, or any discount amount changes as a result, a change summary is shown and you must confirm again — so the amount you see is exactly the amount recorded." },
    ],
    related: ["apply-discounts", "guide-priority-stacking"],
  },
  {
    slug: "manual-discount-promotion",
    category: "checkout",
    question: "Can manual discounts and promotions be used together?",
    keywords: ["manual discount", "promotion", "combine", "override"],
    content: [
      { type: "p", text: "Yes. The rule is “manual wins, layers stay independent”:" },
      {
        type: "list",
        items: [
          "Manual item discount: that line no longer receives item-level promotions — your manual discount is treated as the final on-the-spot decision. The line's amount still counts toward spend thresholds, though.",
          "Manual cart discount: applied after all promotions have been calculated, so the two coexist. If you enter more than the remaining total, it's automatically capped with a notice.",
        ],
      },
      { type: "p", text: "Removing a manual discount restores the line's promotion eligibility on the next evaluation." },
    ],
    related: ["apply-discounts", "guide-priority-stacking"],
  },
  {
    slug: "profit-not-tracked",
    category: "products",
    question: "How is profit reported if I didn't enter costs?",
    keywords: ["cost", "profit", "margin", "reports", "not tracked"],
    content: [
      { type: "p", text: "Cost is an optional field. Products without a cost are marked “profit not tracked” in reports and excluded from profit calculations — revenue is still counted in full, only profit is skipped." },
      { type: "p", text: "To get complete profit reports, add costs on the product edit page; future orders will be included. Profit is calculated on after-discount revenue." },
    ],
    related: ["inventory-tracking", "roadmap-monthly-settlement"],
  },

  // ── Promotion Setup Guides ────────────────────────────────
  {
    slug: "guide-threshold",
    category: "promotion-guide",
    question: "Setting up a spend-threshold discount",
    keywords: ["threshold", "spend", "guide", "setup", "tutorial"],
    content: [
      { type: "p", text: "Go to Settings → Promotions → New, pick the spend-threshold type, then:" },
      {
        type: "steps",
        items: [
          "Set the threshold amount and the discount (fixed amount or percentage).",
          "Choose the scope: specific products, specific categories, or leave empty for store-wide.",
          "Set the schedule: start date is required; leave the end date empty for an ongoing promotion.",
          "Save — it activates on schedule and applies automatically at checkout, no codes needed.",
        ],
      },
      { type: "note", text: "The threshold is checked against the subtotal of in-scope items, not the whole cart. A “spend $1000 on Drinks” promotion only counts drinks toward the threshold, and products marked “exclude from promotions” never count." },
      { type: "p", text: "One behavior we're often asked about: if a higher-priority promotion applies first, the threshold is checked against the already-discounted amount — a cart that looks over the threshold can miss it by a little. To have the threshold judged first, give it a smaller priority number." },
    ],
    related: ["guide-priority-stacking", "create-promotion", "promotion-not-applied"],
  },
  {
    slug: "guide-bogo",
    category: "promotion-guide",
    question: "Setting up buy-one-get-one and Nth-item deals",
    keywords: ["bogo", "buy one get one", "nth item", "guide", "tutorial"],
    content: [
      { type: "p", text: "Create a promotion of the buy-N-get-N type: set how many to buy, how many to get, and the discount percent (100% = free). Scope it to specific products or a whole category — different products in the same category group together." },
      {
        type: "list",
        items: [
          "The discounted unit is the cheapest one in the group, valued at its current effective price — if an earlier promotion already discounted it, the BOGO amount is based on the discounted price, not the list price.",
          "If you want the “3rd item free” badge to show the full list price, give this BOGO the smallest priority number so it calculates first. When a cart-wide discount runs first, the free item's displayed deduction is smaller than list price — a calculation-order property we've verified extensively, not a bug. Both orders land on nearly the same total; what changes is where the discount visibly sits.",
        ],
      },
      { type: "p", text: "Tip: put your headline offer first in priority so the receipt's discount breakdown matches your marketing message." },
    ],
    related: ["guide-priority-stacking", "guide-threshold", "create-promotion"],
  },
  {
    slug: "guide-points-multiplier",
    category: "promotion-guide",
    question: "Setting up bonus-points multipliers",
    keywords: ["points multiplier", "double points", "guide", "tutorial"],
    content: [
      { type: "p", text: "Create a promotion of the points-multiplier type and set the multiplier (an integer of 2 or more). Optionally add a spend threshold (e.g. spend $500 → double points) and a schedule (e.g. Saturdays only)." },
      {
        type: "list",
        items: [
          "When several multipliers qualify at once, only the highest one applies — they never multiply or stack.",
          "The spend threshold is checked after points redemption: if redeeming points drops the total below the threshold, the multiplier won't fire this time.",
          "A member must be selected at checkout for points to accrue — orders without a member earn no points, so the multiplier has nothing to multiply.",
        ],
      },
    ],
    related: ["loyalty-points", "guide-schedule", "member-tiers"],
  },
  {
    slug: "guide-tier-birthday",
    category: "promotion-guide",
    question: "Setting up member-tier and birthday offers",
    keywords: ["tier", "birthday", "vip", "guide", "tutorial"],
    content: [
      { type: "p", text: "First create tiers under Settings → Member Tiers (e.g. Gold), then target the promotion at that tier. For birthday offers, set the condition to “birthday month”." },
      {
        type: "list",
        items: [
          "The member must be selected at checkout for the offer to trigger — eligibility is judged against the currently selected member.",
          "Birthday eligibility reads the member's birthday month, so fill in the birthday field; members without one are never treated as birthday customers.",
          "Auto tier upgrades are judged when checkout completes; if the order is voided, an upgrade it triggered is rolled back automatically.",
        ],
      },
    ],
    related: ["member-tiers", "loyalty-points", "guide-schedule"],
  },
  {
    slug: "guide-composite",
    category: "promotion-guide",
    question: "Setting up gifts, paid add-ons, and bundle prices",
    keywords: ["gift", "add-on", "bundle", "buy a get b", "guide"],
    content: [
      { type: "p", text: "Three composite offer types are available: gift with purchase (buy A get B), paid add-on (add $X to get Y), and bundle price (any N for $X)." },
      { type: "p", text: "Important: these offers never modify the cart automatically. When conditions are met, a suggestion banner appears on the cashier screen, and the cart changes only when the cashier taps Accept — deliberate, because gifts involve physical stock: someone needs to confirm it's on hand and the customer wants it." },
      {
        type: "list",
        items: [
          "After Decline, the same suggestion won't reappear for this cart; a new or cleared cart prompts again.",
          "If a new suggestion appears before checkout confirmation, it must be Accepted or Declined before the order can be submitted.",
          "Bundle price: when more qualifying items are in the cart than the bundle needs, the highest-priced ones are pre-selected — the cashier can re-pick before confirming.",
          "Gift and add-on lines can't be discounted further by other money promotions, and don't count toward other promotions' thresholds.",
        ],
      },
    ],
    related: ["create-promotion", "guide-threshold", "guide-priority-stacking"],
  },
  {
    slug: "guide-schedule",
    category: "promotion-guide",
    question: "Setting up schedules and Happy Hour",
    keywords: ["schedule", "happy hour", "weekday", "midnight", "guide"],
    content: [
      { type: "p", text: "Each promotion's schedule has three layers: a date range (start required, end optional), a daily time window (Happy Hour), and selected weekdays. All three must match for the promotion to fire." },
      {
        type: "list",
        items: [
          "For cross-midnight windows (e.g. 22:00–02:00), the weekday is judged by the day the window starts: with only Friday selected, Saturday 01:30 still counts as Friday's session and fires — but Saturday 23:30 does not.",
          "The end date is a hard cutoff — even if a Happy Hour window is still running, the promotion stops the moment the end date passes.",
          "Time is read from the iPad's device clock, so make sure the device time zone and time are correct.",
        ],
      },
    ],
    related: ["guide-priority-stacking", "promotion-not-applied", "create-promotion"],
  },
  {
    slug: "guide-priority-stacking",
    category: "promotion-guide",
    question: "Priority, stacking, and stop-after explained",
    keywords: ["priority", "stacking", "stop after", "conflict", "guide"],
    content: [
      { type: "p", text: "When several promotions qualify at once, three settings control the order and interaction:" },
      {
        type: "list",
        items: [
          "Priority: smaller numbers calculate first. Drag to reorder in the promotions list.",
          "Stackable (on by default): when off, an item-level promotion locks only the lines it discounted — other items can still receive later item-level promotions; a non-stackable cart-level promotion blocks all later cart-level promotions.",
          "Stop after applying: once this promotion applies, no further money discounts are calculated — but points multipliers and gift suggestions are unaffected.",
        ],
      },
      { type: "note", text: "Later promotions calculate on the already-discounted amount: 10% off plus 5% off is not 15% off — the second discount applies to the total after the first. DingPOS also never searches for the customer-optimal combination; the order is entirely determined by your priorities." },
      { type: "p", text: "Fun fact: if a discount rounds to zero, the application doesn't count — and doesn't consume a usage limit." },
    ],
    related: ["guide-bogo", "guide-threshold", "guide-schedule"],
  },

  // ── Coming Soon ───────────────────────────────────────────
  {
    slug: "roadmap-payment-integration",
    category: "roadmap",
    question: "Will payment processing be integrated?",
    keywords: ["payment", "card processing", "integration", "gateway"],
    content: [
      { type: "p", text: "DingPOS currently doesn't touch the money flow — payment methods are bookkeeping labels, and actual payments go through your existing terminal or payment app." },
      { type: "p", text: "Whether we integrate payment processing depends on real user demand. If you need it, write to us with the service you'd want connected (which processor, which terminal) and your use case — we prioritize development by the number of requests." },
    ],
    related: ["payment-methods", "roadmap-e-invoice"],
  },
  {
    slug: "roadmap-e-invoice",
    category: "roadmap",
    question: "Will e-invoices or receipt printing be supported?",
    keywords: ["e-invoice", "invoice", "receipt", "printer"],
    content: [
      { type: "p", text: "Not yet. E-invoicing and receipt printing require purchasing invoice machines / receipt printers to test and develop against — a significant cost. As a small team, we'll plan it once the user base grows and revenue is steady." },
      { type: "p", text: "If you need this, write to us with the machine model you use — we prioritize development by the number of requests." },
    ],
    related: ["roadmap-barcode-scanner", "roadmap-payment-integration"],
  },
  {
    slug: "roadmap-barcode-scanner",
    category: "roadmap",
    question: "Will physical barcode scanners be supported?",
    keywords: ["barcode scanner", "scanner gun", "bluetooth", "usb", "hardware"],
    content: [
      { type: "p", text: "Camera barcode scanning for product setup is already supported. Physical scanners (USB / Bluetooth) aren't officially supported yet — like other hardware features, they need devices purchased for testing and development, and will be planned as the user base grows." },
      { type: "note", text: "The checkout search field matches barcodes, so a scanner in keyboard mode could in theory type into it and pull up products — but we haven't verified this on real hardware, so it's not officially supported. If you've tested a scanner that works, tell us the model!" },
      { type: "p", text: "If you need this, write to us — we prioritize development by the number of requests." },
    ],
    related: ["barcode-scanning", "roadmap-e-invoice"],
  },
  {
    slug: "roadmap-purchase-orders",
    category: "roadmap",
    question: "Will purchase orders be added?",
    keywords: ["purchase order", "restock", "receiving", "procurement"],
    content: [
      { type: "p", text: "Yes — purchase orders are planned." },
      { type: "p", text: "Until then, record incoming stock with a manual inventory adjustment — the movement ledger keeps the record, so history stays traceable once purchase orders ship." },
      { type: "p", text: "If you need this, write to us — we prioritize development by the number of requests." },
    ],
    related: ["inventory-tracking", "roadmap-monthly-settlement"],
  },
  {
    slug: "roadmap-returns-exchanges",
    category: "roadmap",
    question: "Will pre-orders, returns, and exchanges be supported?",
    keywords: ["pre-order", "return", "exchange", "refund"],
    content: [
      { type: "p", text: "Yes — pre-orders, returns, and exchanges are all planned." },
      { type: "p", text: "Workarounds until then: handle a return by voiding the whole order (stock and points are restored automatically); handle an exchange by voiding the original order and ringing up a corrected one." },
      { type: "p", text: "If you need this, write to us — we prioritize development by the number of requests." },
    ],
    related: ["void-order", "roadmap-purchase-orders"],
  },
  {
    slug: "roadmap-monthly-settlement",
    category: "roadmap",
    question: "Will monthly settlement reports be added?",
    keywords: ["monthly settlement", "reconciliation", "closing", "monthly report"],
    content: [
      { type: "p", text: "Yes — monthly settlement for purchasing and sales is planned." },
      { type: "p", text: "For now, use the dashboard's monthly range to review the month's revenue, profit, and payment breakdown as a reconciliation baseline." },
      { type: "p", text: "If you need this, write to us — we prioritize development by the number of requests." },
    ],
    related: ["roadmap-purchase-orders", "profit-not-tracked"],
  },
];
