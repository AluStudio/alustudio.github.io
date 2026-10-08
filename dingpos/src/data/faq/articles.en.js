// DingPOS FAQ — English content pack.
// Slugs and `related` links MUST stay in sync with articles.zh-Hant.js
// (enforced at build time by scripts/copy-spa-pages.js).
// Block schema and the `since` field documented in articles.zh-Hant.js.

export const categories = [
  { key: "getting-started", icon: "bi-rocket-takeoff", label: "Getting Started", group: "faq" },
  { key: "checkout", icon: "bi-basket3", label: "Checkout", group: "faq" },
  { key: "orders", icon: "bi-receipt", label: "Orders & Returns", group: "faq" },
  { key: "products", icon: "bi-box-seam", label: "Products, Inventory & Purchasing", group: "faq" },
  { key: "reports", icon: "bi-bar-chart-line", label: "Reports", group: "faq" },
  { key: "staff", icon: "bi-people", label: "Staff & Permissions", group: "faq" },
  { key: "promotion", icon: "bi-tags", label: "Promotions & Loyalty", group: "faq" },
  { key: "backup", icon: "bi-cloud-check", label: "Backup & Data", group: "faq" },
  { key: "subscription", icon: "bi-credit-card", label: "Subscription & Billing", group: "faq" },
  { key: "promotion-guide", icon: "bi-mortarboard", label: "Promotion Setup Guides", group: "guide" },
  { key: "roadmap", icon: "bi-signpost-split", label: "Coming Soon", group: "roadmap", standalone: true },
];

export const articles = [
  // ── Getting Started ─────────────────────────────────────────
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
  {
    slug: "app-language",
    category: "getting-started",
    since: "3.0",
    question: "How do I change the app's language?",
    keywords: ["language", "english", "chinese", "switch", "locale"],
    content: [
      { type: "p", text: "DingPOS supports English and Traditional Chinese. Go to Settings → Device Preferences and tap App Language. It opens DingPOS's page in the iPad's Settings app, where you pick the language under Language." },
      { type: "p", text: "iOS doesn't let apps open the language list directly, so the last tap happens in system Settings. The language applies to this iPad only." },
    ],
    related: ["checkout-sound", "supported-devices"],
  },

  // ── Checkout ────────────────────────────────────────────────
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
    keywords: ["discount", "percentage", "fixed", "markdown", "price off", "discount cap"],
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
      { type: "note", text: "With staff accounts (Pro), a staff member's manual discount above the discount cap needs a manager's approval at checkout. The cap defaults to unlimited for managers and 10% for staff, adjustable in Role Permissions." },
    ],
    related: ["create-promotion", "tax-calculation", "staff-permissions"],
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
    keywords: ["payment", "cash", "credit card", "line pay", "change", "custom", "on account"],
    content: [
      { type: "p", text: "Cash, Credit Card, and Line Pay are built in, and you can add any custom payment labels in Settings (e.g. Apple Pay, local wallets)." },
      { type: "p", text: "Payment methods are bookkeeping labels — DingPOS does not process actual payments. Take card or mobile payments with your existing terminal or app, then pick the matching label in DingPOS to record it. Cash payments calculate change automatically." },
      { type: "p", text: "For a regular who takes the goods now and pays later, choose On Account: the sale is recorded as a receivable and settled when the money arrives. See “Can regulars buy on account and pay later?”" },
    ],
    related: ["on-account", "roadmap-payment-integration", "multiple-carts"],
  },
  {
    slug: "checkout-sound",
    category: "checkout",
    since: "3.0",
    question: "Can I turn off the “Ding” after checkout?",
    keywords: ["sound", "ding", "mute", "silent", "checkout sound"],
    content: [
      { type: "p", text: "Yes. Go to Settings → Device Preferences and turn off Checkout Sound. From the next sale on, the success screen stays silent, with the haptic tap still there." },
      { type: "p", text: "The switch applies to this iPad only, and restoring a cloud backup doesn't change it." },
    ],
    related: ["app-language", "multiple-carts"],
  },
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

  // ── Orders & Returns ────────────────────────────────────────
  {
    slug: "void-order",
    category: "orders",
    question: "I made a mistake at checkout — how do I void an order?",
    keywords: ["void", "cancel", "mistake", "wrong order"],
    content: [
      { type: "p", text: "Go to Orders, find the order, open its detail view, and choose Void. Confirm and it's done." },
      { type: "p", text: "Voiding automatically reverses everything connected: tracked stock is restored, loyalty points earned on the order are taken back, and redeemed points are refunded. Voided orders stay in the list clearly marked, and are excluded from report revenue." },
      { type: "note", text: "A void means “this sale never happened” — use it for an order rung up wrong on the spot. When a customer brings goods back later, use Return instead: the original order is kept, you can return just some of the items, and revenue is reduced on the day of the return." },
    ],
    related: ["returns-exchanges", "inventory-tracking", "loyalty-points"],
  },
  {
    slug: "returns-exchanges",
    category: "orders",
    since: "2.0",
    question: "How do I handle a return or exchange?",
    keywords: ["return", "exchange", "refund", "partial return", "swap size"],
    content: [
      { type: "p", text: "Go to Orders, open the original order, and tap Return. Choose how many of each item come back. For an exchange, tap Add Replacement on the same screen; the net amount is settled in one go — positive means the customer pays, negative means you refund, and zero means nothing changes hands." },
      {
        type: "list",
        items: [
          "The original order is never modified. A return creates its own document dated today, numbered with an R prefix, and revenue is reduced on the day of the return.",
          "The refund is what the customer actually paid for that item — item discounts, cart discounts, and points redemption are already apportioned out, so it is not refunded at list price. Tax uses the rate the original order was charged at.",
          "Replacement items are charged at today's price, with no promotions or discounts.",
          "Tracked stock is restored automatically. Points earned on the original order are taken back, redeemed points are refunded, and replacement items earn their own points.",
          "An order can be returned in several rounds, but never beyond the quantity originally sold. Promotion usage limits are not given back by a return.",
        ],
      },
      { type: "note", text: "There is no time limit on returns, but the original order is required. If a return was entered by mistake, void the return and the returnable quantity comes back." },
    ],
    related: ["void-order", "inventory-tracking", "loyalty-points"],
  },
  {
    slug: "pre-orders",
    category: "orders",
    since: "2.0",
    question: "How do I take a pre-order with a deposit?",
    keywords: ["pre-order", "preorder", "deposit", "pickup", "balance", "reserve"],
    content: [
      { type: "p", text: "At checkout, switch the top of the screen from Sale to Pre-order, pick the pickup date, enter the deposit (anything from 0 to the full amount, with 30% / 50% / full shortcuts), and choose how the deposit is paid. Attach a customer so you can reach them when the goods arrive." },
      {
        type: "list",
        items: [
          "Stock is deducted when the pre-order is placed, reserving the goods for the customer. Out-of-stock items go negative and recover once a purchase order is received.",
          "When the customer picks up, tap Hand Over in the order detail to collect the balance. The order then becomes an ordinary completed sale, and later returns go through the normal return flow.",
          "If the customer never comes, tap Cancel Order in the order detail and choose to refund or keep the deposit. Stock is added back.",
          "The deposit receipt and the final pickup receipt share the same number.",
        ],
      },
      { type: "p", text: "In Stats, a pre-order's revenue is recognized in full on the pickup date, while the deposit counts toward Cash Received on the day it is paid — so the two numbers differ for a while. See “What's the difference between Revenue and Cash Received?”" },
      { type: "note", text: "Pre-order items can't be edited; if the customer changes their mind, cancel and place a new pre-order. Creating pre-orders requires the Standard plan or higher. After a downgrade, existing pre-orders can still be picked up or cancelled." },
    ],
    related: ["revenue-vs-cash", "on-account", "negative-inventory"],
  },
  {
    slug: "on-account",
    category: "orders",
    since: "2.0",
    question: "Can regulars buy on account and pay later?",
    keywords: ["on account", "credit", "tab", "receivable", "settle", "pay later"],
    content: [
      { type: "p", text: "Yes. Select the customer at checkout and choose On Account as the payment method. A debt needs someone to own it, so On Account isn't available without a customer." },
      { type: "p", text: "To collect, switch the top of Orders to Receivables. Debts are grouped by customer; open one to settle a single order, a whole month, or everything — each time DingPOS asks how the money was paid. A single order can also be settled from its detail view, and a settlement entered by mistake can be taken back with Undo Settlement." },
      {
        type: "list",
        items: [
          "Revenue counts on the day the goods leave; Cash Received and loyalty points wait until the day it's settled.",
          "Unsettled orders carry an amber badge in the list, and the customer detail shows how much they currently owe.",
          "A customer with unsettled orders can't be deleted.",
        ],
      },
      { type: "note", text: "Creating on-account sales requires the Standard plan or higher. After a downgrade you can't start new ones, but existing receivables can still be viewed and settled." },
    ],
    related: ["revenue-vs-cash", "payment-methods", "pre-orders"],
  },
  {
    slug: "order-notes",
    category: "orders",
    since: "2.2",
    question: "Can I add notes to orders, customers, or purchase orders?",
    keywords: ["note", "notes", "memo", "comment", "remark"],
    content: [
      { type: "p", text: "Yes. Order, customer, and purchase order detail pages each have a notes card — tap it to edit, up to 500 characters. You can also write one in the form when creating a customer or a purchase order." },
      { type: "p", text: "Notes don't depend on status: completed orders, voided orders, and returns can all be annotated or edited. An order's amounts and items are fixed at checkout; the note sits alongside the document and never changes its contents." },
    ],
    related: ["void-order", "purchase-orders"],
  },

  // ── Products, Inventory & Purchasing ────────────────────────
  {
    slug: "product-variants",
    category: "products",
    question: "How do I create products with variants?",
    keywords: ["variants", "size", "color", "options", "spec"],
    content: [
      { type: "p", text: "In the product edit page, tap Add Option under Variant Options to add an option (e.g. “Color”), then use “+ Value” to add each of its choices (e.g. Red, Blue). With two or more options (e.g. Color × Size), DingPOS expands every combination for you (Red/S, Red/M, Blue/S…)." },
      { type: "p", text: "Each combination has its own price and cost, and tracks its own stock. At checkout, tapping the product shows a variant picker before adding it to the cart." },
      { type: "note", text: "Option and value names are limited to 20 characters." },
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
    slug: "product-order",
    category: "products",
    since: "2.0",
    question: "How do I change the order products appear in?",
    keywords: ["sort", "order", "reorder", "arrange", "drag", "pin to top"],
    content: [
      { type: "p", text: "In Products, tap Edit Order and drag product cards where you want them. The cashier and product management share this one order, so arranging it once updates both." },
      {
        type: "list",
        items: [
          "With a large catalog, each card's menu offers Move to Front, Move to Back, and Move to Position, and every card shows its current position.",
          "Filter by a category first to reorder within that category only — products in other categories stay where they are.",
          "New products go to the front; editing a product's details never changes its position.",
        ],
      },
      { type: "p", text: "To sort by name, price, or created / updated time for a while, use the Sort By menu. Your custom order is kept, and switching back to Custom Order brings it back." },
    ],
    related: ["product-variants", "barcode-scanning"],
  },
  {
    slug: "inventory-tracking",
    category: "products",
    question: "How do I track inventory?",
    keywords: ["inventory", "stock", "tracking", "count", "low stock"],
    content: [
      { type: "p", text: "Inventory tracking is a per-product toggle — turn it on in the product edit page and enter the current quantity. Each variant of a product tracks its own stock." },
      { type: "p", text: "Once enabled, sales and pre-orders deduct stock automatically; voids, returns, and cancelled pre-orders put it back; receiving a purchase order adds to it; and you can adjust manually anytime. Every movement is recorded in a complete ledger. Low stock is highlighted with a color warning." },
    ],
    related: ["negative-inventory", "purchase-orders"],
  },
  {
    slug: "negative-inventory",
    category: "products",
    question: "Why can stock go negative?",
    keywords: ["negative", "stock", "out of stock", "block", "adjust"],
    content: [
      { type: "p", text: "This is by design: checkout is never blocked by insufficient stock. The first rule of a live register is that the customer never waits — a wrong number on paper can be fixed later, but an interrupted sale is lost for good." },
      { type: "p", text: "Negative stock usually means a restock wasn't recorded, or a pre-ordered item hasn't arrived yet (pre-orders deduct stock when placed). Record restocks by receiving a purchase order and the number recovers on its own; fix stocktake differences with a manual adjustment, which is kept in the movement ledger." },
    ],
    related: ["inventory-tracking", "purchase-orders", "pre-orders"],
  },
  {
    slug: "purchase-orders",
    category: "products",
    since: "2.0",
    question: "How do I record purchases and suppliers?",
    keywords: ["purchase order", "purchasing", "supplier", "receive", "restock", "payables"],
    content: [
      { type: "p", text: "Purchasing in the sidebar manages suppliers and purchase orders. A supplier stores a name, contact person, phone, address, and a default payment term (pay now or monthly)." },
      {
        type: "steps",
        items: [
          "Tap New Purchase, pick the supplier, and add the products, quantities, and unit costs (pre-filled with each product's current cost). A shipping fee can be added too. Since 3.0, a supplier you haven't created yet can be added right from the picker with Add Supplier.",
          "A draft never touches stock or payables — edit or delete it freely.",
          "When the goods arrive, tap Receive Stock: tracked stock goes up, and the purchase order gets its number and locks. By default receiving also updates each product's cost to this unit cost; turn off Sync Product Cost on the purchase order to keep costs unchanged.",
        ],
      },
      { type: "p", text: "The payment term decides what happens next: pay-now orders are marked paid, while monthly orders stay unpaid under Unpaid Bills, where you can settle them per supplier — one order, this month, or everything." },
      { type: "note", text: "Purchasing requires the Standard plan or higher. A supplier with unpaid received orders can't be deleted." },
    ],
    related: ["inventory-tracking", "negative-inventory", "roadmap-monthly-settlement"],
  },

  // ── Reports ─────────────────────────────────────────────────
  {
    slug: "revenue-vs-cash",
    category: "reports",
    since: "2.0",
    question: "What's the difference between Revenue and Cash Received?",
    keywords: ["revenue", "cash received", "income", "reconcile", "deposit", "on account"],
    content: [
      { type: "p", text: "Revenue counts the day the goods were handed over; Cash Received counts the day the money came in. For an order paid at the counter both happen the same day and the numbers match. They split apart when:" },
      {
        type: "list",
        items: [
          "On account: the goods leave today and count toward today's revenue; the money counts toward Cash Received on the day it's settled.",
          "Pre-order: the deposit counts toward Cash Received when it's paid; revenue is recognized in full on the pickup date.",
          "Forfeited deposit: when a customer cancels a pre-order and you keep the deposit, it was already counted in Cash Received when paid. Stats shows it separately as forfeited deposits, and it never counts as revenue.",
        ],
      },
      { type: "p", text: "To reconcile, match Cash Received against the drawer and your card terminal; to see how much you actually sold in a period, read Revenue. Returns reduce revenue on the day of the return." },
    ],
    related: ["on-account", "pre-orders", "report-periods"],
  },
  {
    slug: "report-periods",
    category: "reports",
    question: "Which time periods can reports show?",
    keywords: ["reports", "period", "this week", "this month", "this year", "custom range", "date", "top products"],
    content: [
      { type: "p", text: "Pick Today, Yesterday, This Week, This Month, This Year, or All Time at the top of Stats, or use Custom to choose a start and end date. This Week follows the device's first day of the week; This Month and This Year start on the 1st and on January 1. Each option shows the dates it covers, and All Time starts from your store's first transaction." },
      { type: "p", text: "For a single day, the trend chart becomes an hourly bar chart; longer periods use days, weeks, months, or years per bar depending on length." },
      { type: "p", text: "The Product Ranking card lists the top 5. Tap the card or View All to list every product sold in the period, ranked by quantity after returns." },
      { type: "note", text: "Versions before 2.4 offered rolling ranges (Today / 7 Days / 30 Days / All Time). If you still see those, update DingPOS from the App Store." },
    ],
    related: ["revenue-vs-cash", "advanced-reports", "profit-not-tracked"],
  },
  {
    slug: "advanced-reports",
    category: "reports",
    since: "3.0",
    question: "What's in the advanced reports?",
    keywords: ["advanced reports", "comparison", "last year", "previous period", "heatmap", "hour", "slow movers", "repeat purchase", "stock value", "outstanding points", "pro"],
    content: [
      { type: "p", text: "Advanced reports sit right on the Stats page and follow the same period:" },
      {
        type: "list",
        items: [
          "Sales comparison: on the right of the period bar, compare with the previous period or the same period last year. The Cash Received tile shows the comparison amount, the difference, and the growth rate, and the revenue trend gains a comparison line.",
          "Weekday × hour: switch the sales chart to this view to see which of the week's 7 × 24 hours sell most. With a sales comparison set, switch to Difference to see which hours went up or down.",
          "Slow Movers: switch the product ranking to Slow Movers to list every product's net quantity sold in the period, fewest first, with current stock and the last sale date; products that never sold are marked Never sold.",
          "Repeat-purchase rate: the Customers Served tile shows the share of members who bought in this period and have bought at least twice overall.",
          "Right now: stock value (current stock × current cost) and outstanding loyalty points. Both are current balances and don't change with the period.",
        ],
      },
      { type: "note", text: "Advanced reports are a Pro plan feature. Without Pro, each of these five spots shows a small lock that explains what it offers. Staff access follows the existing Dashboard permission." },
    ],
    related: ["report-periods", "revenue-vs-cash", "plans-compare"],
  },
  {
    slug: "profit-not-tracked",
    category: "reports",
    question: "How is profit reported if I didn't enter costs?",
    keywords: ["cost", "profit", "margin", "reports", "not tracked"],
    content: [
      { type: "p", text: "Cost is an optional field. Products without a cost are marked “profit not tracked” in reports and excluded from profit calculations — revenue is still counted in full, only profit is skipped." },
      { type: "p", text: "To get complete profit reports, add costs on the product edit page; future orders will be included. Profit is calculated on after-discount revenue." },
    ],
    related: ["report-periods", "purchase-orders"],
  },

  // ── Staff & Permissions ─────────────────────────────────────
  {
    slug: "staff-setup",
    category: "staff",
    since: "3.0",
    question: "How do I add staff so each person switches in with their own PIN?",
    keywords: ["staff", "employee", "manager", "account", "pin", "switch user", "shift", "handled by"],
    content: [
      { type: "p", text: "The first time you open Staff in the sidebar, DingPOS asks you to create the owner: a name and a 4-digit PIN. After that you can add managers and staff, each with their own PIN." },
      { type: "p", text: "The current operator shows at the bottom of the sidebar and at the top right of the checkout screen. Tap it, pick your name, and enter your PIN to switch. From then on every order, payment, and stock or points movement records who handled it, visible in the order list and detail; voided orders also record who voided them." },
      {
        type: "list",
        items: [
          "Renaming a staff member doesn't change past orders — they keep the name used at the time.",
          "The owner can deactivate staff and reset their PINs, but nobody can see anyone else's PIN.",
          "The owner PIN can't be reset if forgotten — see “What if I forget the owner PIN?”",
        ],
      },
      { type: "note", text: "Staff accounts are a Pro plan feature. Without Pro there's no operator to pick. If Pro lapses, staff records and who handled each order are kept, and new documents are recorded under the owner." },
    ],
    related: ["owner-pin-forgotten", "staff-permissions", "activity-log"],
  },
  {
    slug: "owner-pin-forgotten",
    category: "staff",
    since: "3.0",
    question: "What if I forget the owner PIN?",
    keywords: ["pin", "forgot", "password", "reset", "owner", "recover", "locked out"],
    content: [
      { type: "p", text: "The owner PIN can't be reset, and our support team has no way to unlock it either. The PIN is stored with your store data, so deleting and reinstalling the app, then restoring from the cloud, brings back the same PIN." },
      { type: "p", text: "Creating the owner and every owner PIN change show the warning “Remember this PIN. If you forget it, it can't be reset.” Keep it somewhere only you can reach." },
      { type: "p", text: "Without the owner PIN, anything that needs it stays out of reach — adding or editing staff, changing role permissions, and viewing the activity log. Staff can keep checking out and doing daily work with their own PINs." },
      { type: "note", text: "If a staff member forgets their PIN, that's fine: the owner can reset it in Staff." },
    ],
    related: ["staff-setup", "staff-permissions"],
  },
  {
    slug: "staff-permissions",
    category: "staff",
    since: "3.0",
    question: "How do staff permissions and manager approval work?",
    keywords: ["permissions", "approval", "manager", "staff", "discount cap", "role", "restrict", "cost visibility"],
    content: [
      { type: "p", text: "Every permission has two states: Allowed or Needs approval — nothing is flatly forbidden. The owner sets what managers and staff can do in Staff → Role Permissions and saves the whole table at once." },
      { type: "p", text: "When a staff member hits something that needs approval, a colleague with the permission picks their own name and enters their PIN to let it through once:" },
      {
        type: "list",
        items: [
          "Actions: manual stock adjustments, every save in product management (products, variants, categories, product order), and checkouts with a manual discount above the cap. The discount cap defaults to unlimited for managers and 10% for staff.",
          "Views: cost & profit, the dashboard, settings, and backup & restore. One approval keeps them unlocked until the operator changes or the app goes to the background.",
        ],
      },
      { type: "p", text: "Voids, returns, on-account sales, and purchasing deliberately have no permission — they only record who handled them. Every approval is written to the activity log." },
      { type: "note", text: "Staff accounts and permissions are a Pro plan feature." },
    ],
    related: ["staff-setup", "activity-log", "apply-discounts"],
  },
  {
    slug: "activity-log",
    category: "staff",
    since: "3.0",
    question: "How do I find out who voided an order, changed a price, or adjusted stock?",
    keywords: ["activity log", "audit", "who", "price change", "void", "stock adjustment", "deleted product", "log"],
    content: [
      { type: "p", text: "Tap Activity Log at the top right of the Staff page and enter the owner PIN. It lists the store's sensitive actions, newest first: voids, returns, manual stock adjustments, approvals, staff and permission changes, owner PIN setup and changes, and product price changes and deletions. Ordinary sales aren't listed." },
      { type: "p", text: "Each entry names the target, who did what and when, and the result — for example “Product White Tee”, “Amy changed price · 14:05:32”, “M price $390 → $350”. Filter by staff member, action type, and today / this week / this month; tap an entry that points to an order, product, or customer to open it." },
      { type: "p", text: "Order details, product details, and staff records also have their own entry, listing only the activity for that order, product, or person." },
      { type: "note", text: "Every plan records activity; viewing it requires Pro, and anything recorded while you didn't have Pro shows up once you subscribe. Voids and adjustments from before 3.0 have no operator and are marked “No operator recorded”." },
    ],
    related: ["staff-permissions", "staff-setup", "restore-undo"],
  },

  // ── Promotions & Loyalty ────────────────────────────────────
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
      { type: "p", text: "Go to Settings → Loyalty Program and define two rules: earn Y points per X spent, and redeem N points for M off (with an optional per-order redemption cap). You can also grant welcome points to new members automatically." },
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

  // ── Backup & Data ───────────────────────────────────────────
  {
    slug: "backup-data",
    category: "backup",
    question: "How do I back up my data?",
    keywords: ["backup", "icloud", "google drive", "dropbox", "cloud", "snapshot"],
    content: [
      { type: "p", text: "Go to Settings → Cloud Backup, pick one of iCloud, Google Drive, or Dropbox, and authorize it. After that you can trigger a backup manually anytime." },
      { type: "p", text: "Backups go into your own cloud account. Each cloud keeps only the latest one — one data snapshot and one file of product photos — and every backup overwrites the previous one." },
      { type: "note", text: "Because a new backup replaces the old one, if you suspect your data has already gone wrong (say, a batch of products deleted by mistake), don't back up yet — email us and we'll work out the next step together." },
    ],
    related: ["transfer-new-ipad", "icloud-not-connected", "data-after-delete"],
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
          "New iPad: go to Settings → Cloud Backup, connect the same cloud account, and restore.",
        ],
      },
      { type: "p", text: "Tapping Restore first opens a preview: product, order, and customer counts and the latest order time for this iPad and for the backup side by side, plus the orders the restore would remove. Data is replaced only after you confirm, and product photos are restored too." },
      { type: "note", text: "If the backup was made by a newer version of DingPOS, the restore is blocked until you update the app. Restored the wrong one? Use Undo Restore." },
    ],
    related: ["backup-data", "restore-undo", "data-after-delete"],
  },
  {
    slug: "restore-undo",
    category: "backup",
    since: "3.0",
    question: "Can I undo a restore?",
    keywords: ["restore", "undo", "undo restore", "wrong backup", "snapshot", "preview", "restore records"],
    content: [
      { type: "p", text: "Yes. Every cloud restore keeps the data it replaced as a pre-restore copy. A card on the Cloud Backup screen shows when the last restore happened and where it came from; tap Undo Restore and confirm, and your data goes back to how it was. Undo Restore counts as a restore itself, so if you change your mind, tap it again to switch back." },
      { type: "p", text: "Before any restore, a preview compares the product, order, and customer counts on this iPad and in the backup, and lists every order the restore would remove. Nothing on the iPad changes until you confirm." },
      {
        type: "list",
        items: [
          "Only the most recent pre-restore copy is kept; the next restore replaces it.",
          "Undo Restore brings back data only; products added after the backup show a missing photo.",
          "A backup made by a newer version of DingPOS can't be restored until you update the app.",
        ],
      },
      { type: "p", text: "Every restore leaves a restore record: when, who, from where, and which orders it removed. Tap View Restore Records on the Cloud Backup screen to see them. Viewing restore records is a Pro plan feature; the preview and Undo Restore work on every plan." },
    ],
    related: ["transfer-new-ipad", "backup-data", "activity-log"],
  },
  {
    slug: "icloud-not-connected",
    category: "backup",
    since: "3.0",
    question: "iCloud backup says “Not connected” — what do I do?",
    keywords: ["icloud", "not connected", "icloud drive", "backup failed", "can't connect"],
    content: [
      { type: "p", text: "DingPOS shows iCloud as connected only when it can actually use it. When it says Not connected, check three things in the iPad's Settings app:" },
      {
        type: "steps",
        items: [
          "You're signed in to your Apple Account.",
          "iCloud Drive is turned on.",
          "DingPOS is allowed to use iCloud Drive.",
        ],
      },
      { type: "p", text: "Once all three are on, go back to Cloud Backup in DingPOS and iCloud shows as connected. Backups are stored in DingPOS's own folder in iCloud Drive." },
      { type: "note", text: "In versions before 3.0, iCloud backup didn't work and failed every time with “Backup.SyncError error 0”. Update DingPOS from the App Store first." },
    ],
    related: ["backup-data", "transfer-new-ipad"],
  },
  {
    slug: "data-after-delete",
    category: "backup",
    question: "Is my data kept if I delete the app?",
    keywords: ["delete", "uninstall", "data loss", "remove app"],
    content: [
      { type: "p", text: "No. DingPOS stores everything locally on your device — deleting the app permanently deletes all products, orders, members, and settings, unless you've enabled cloud backup." },
      { type: "note", text: "Before deleting the app, always run a manual backup and confirm it succeeded. After reinstalling, restore from the cloud. If the app opens to “Couldn't Open Your Store Data”, do not delete it." },
    ],
    related: ["backup-data", "launch-failure", "transfer-new-ipad"],
  },
  {
    slug: "launch-failure",
    category: "backup",
    since: "3.0",
    question: "The app opens to “Couldn't Open Your Store Data” — what now?",
    keywords: ["couldn't open", "won't open", "crash", "crashes on launch", "database", "store data"],
    content: [
      { type: "p", text: "Don't delete the app. This screen means DingPOS couldn't read your store data, but the data is still on this iPad — deleting the app deletes it along with the app." },
      { type: "p", text: "Tap Retry first; if it works, the app opens as usual. If it keeps happening, tap Contact Support and tell us, and we'll help you recover your data. This screen never moves or deletes any files." },
      { type: "note", text: "The most common cause is the app being closed in the middle of a restore. Before 3.0, this made the app crash on every launch; since 3.0 it stops on this screen instead." },
    ],
    related: ["data-after-delete", "restore-undo"],
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
  {
    slug: "import-csv",
    category: "backup",
    since: "2.3",
    question: "Can I import products and sales from another POS or a spreadsheet?",
    keywords: ["import", "csv", "excel", "spreadsheet", "migrate", "switch pos", "bulk", "sales history"],
    content: [
      { type: "p", text: "Yes. Go to Settings → Data Import, choose whether to import products or sales, and pick a CSV file (Excel and Google Sheets can both save as CSV)." },
      {
        type: "steps",
        items: [
          "The file opens as a table. Common column names in English and Chinese are matched automatically; tap any column header to change its mapping.",
          "Tap any cell to fix its value right there — no need to edit the file and start over.",
          "Tap Confirm to validate. Rows with problems are flagged in red with the reason; sales imports can skip orders with errors.",
          "Resolve anything that needs a decision (duplicate product names, a row matching several customers), review the summary, then tap Start Import.",
        ],
      },
      {
        type: "list",
        items: [
          "Imported sales are placed by transaction date and recalculated with your store's currency and tax mode. They don't touch stock and don't grant welcome points.",
          "Customers are matched to existing ones by phone or email; anyone unmatched is created.",
          "Imported orders show an Imported On date and the source order number, and can't be voided or returned.",
          "Rows with errors can be exported as a CSV annotated with the reasons — fix them and import again. Duplicate rows are skipped automatically.",
        ],
      },
      { type: "note", text: "Data import is in beta. Each file can hold up to 50,000 rows or 20 MB. Run a cloud backup before importing; if something won't import or the result looks wrong, tell us through Report a Problem on the import screen." },
    ],
    related: ["backup-data", "transfer-new-ipad", "product-variants"],
  },

  // ── Subscription & Billing ──────────────────────────────────
  {
    slug: "free-trial",
    category: "subscription",
    question: "How does the free trial work?",
    keywords: ["trial", "free", "30 days", "credit card"],
    content: [
      { type: "p", text: "You get 30 days of every Pro plan feature from first install, including staff accounts, permissions, the activity log and advanced reports — no credit card, no account required." },
      { type: "p", text: "Subscribing to any plan during the trial ends the trial right away, and the plan you bought applies from then on. After the trial, Pro features such as staff and advanced reports stay available only with a Pro subscription." },
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
    slug: "plans-compare",
    category: "subscription",
    since: "3.0",
    question: "What's the difference between Lite, Standard, and Pro?",
    keywords: ["plans", "lite", "standard", "pro", "difference", "compare", "upgrade", "downgrade", "pricing"],
    content: [
      { type: "p", text: "All three plans include full checkout, products, orders (with voids, returns, and exchanges), reports, and cloud backup. They differ in the tools for running the shop:" },
      {
        type: "list",
        items: [
          "Lite: for one person running a stall who needs checkout and products.",
          "Standard: adds promotions, loyalty points and member tiers, inventory tracking, purchasing, on-account sales, and pre-orders.",
          "Pro: adds staff accounts and permissions, manager approval, the activity log, restore records, and advanced reports — for shops with staff.",
        ],
      },
      { type: "p", text: "Already on Standard? Upgrade to Pro from the subscription page: billing stays on the same cycle, the upgrade takes effect immediately, and Apple prorates the difference. Moving from Pro back to Standard takes effect at renewal. Prices are shown in the app, and you can compare plans on our Pricing page." },
      { type: "note", text: "Downgrading never deletes data. Features beyond your plan pause, the data stays, and subscribing again brings them back." },
    ],
    related: ["manage-subscription", "free-trial", "staff-setup"],
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

  // ── Promotion Setup Guides ──────────────────────────────────
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
      { type: "p", text: "Three composite offer types are available: gift with purchase (buy A get B), paid add-on (add $X to get Y), and bundle price (any N for $X). Gifts and paid add-ons wait for the cashier to confirm; bundle prices apply automatically." },
      { type: "p", text: "Gifts and paid add-ons never modify the cart on their own. When conditions are met, a suggestion banner appears on the cashier screen, and the cart changes only when the cashier taps Accept — deliberate, because gifts involve physical stock: someone needs to confirm it's on hand and the customer wants it." },
      {
        type: "list",
        items: [
          "After Decline, the same suggestion won't reappear for this cart; a new or cleared cart prompts again.",
          "If a new suggestion appears before checkout confirmation, it must be Accepted or Declined before the order can be submitted.",
          "Gift and add-on lines can't be discounted further by other money promotions, and don't count toward other promotions' thresholds.",
        ],
      },
      { type: "p", text: "Bundle prices (applied automatically since 2.4): whenever the cart can form a bundle, DingPOS groups it and includes it in the total — no prompt, and bundles can't be split." },
      {
        type: "list",
        items: [
          "A bundle forms only when it makes the cart cheaper. Among equally priced items, undiscounted ones are grouped first, and items already on discount keep their discount.",
          "Which items group together depends only on what's in the cart, never on the order they were scanned.",
          "Each member item shows its share of the bundle discount, and each line's amount is after discounts.",
          "At checkout the bundles are regrouped with the latest prices; if the result changes, you're asked to confirm the new total.",
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

  // ── Coming Soon ─────────────────────────────────────────────
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
    slug: "roadmap-monthly-settlement",
    category: "roadmap",
    question: "Will there be a monthly settlement report?",
    keywords: ["monthly settlement", "reconciliation", "closing", "monthly report", "payables", "receivables"],
    content: [
      { type: "p", text: "There's no dedicated monthly settlement report yet, but everything you need to reconcile is already in the app:" },
      {
        type: "list",
        items: [
          "Set Stats to This Month for the month's revenue, cash received, profit, and payment breakdown.",
          "Supplier purchases on monthly terms collect under Unpaid Bills in Purchasing, where a whole month can be settled at once.",
          "Customer on-account sales collect under Orders → Receivables, where a whole month can be settled at once.",
        ],
      },
      { type: "p", text: "If you need a monthly settlement report you can export or print, write to us with the fields you need — we prioritize development by the number of requests." },
    ],
    related: ["revenue-vs-cash", "purchase-orders", "on-account"],
  },
];
