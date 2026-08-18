// DingPOS FAQ — zh-Hant content pack.
// Slugs and `related` links MUST stay in sync with articles.en.js
// (enforced at build time by scripts/copy-spa-pages.js).
//
// Content block types (rendered by FaqBlocks.jsx):
//   { type: "p",     text }
//   { type: "list",  items: [] }
//   { type: "steps", items: [] }
//   { type: "note",  text }
//   { type: "image", src, alt, caption? }
//   { type: "video", src, poster?, caption? }
//   { type: "youtube", id, caption? }

export const categories = [
  { key: "getting-started", icon: "bi-rocket-takeoff", label: "快速上手", group: "faq" },
  { key: "checkout", icon: "bi-basket3", label: "收銀結帳", group: "faq" },
  { key: "products", icon: "bi-box-seam", label: "商品與庫存", group: "faq" },
  { key: "promotion", icon: "bi-tags", label: "促銷與會員", group: "faq" },
  { key: "backup", icon: "bi-cloud-check", label: "備份與資料", group: "faq" },
  { key: "subscription", icon: "bi-credit-card", label: "訂閱與費用", group: "faq" },
  { key: "promotion-guide", icon: "bi-mortarboard", label: "促銷設定教學", group: "guide" },
  // standalone: the group has this one category and shares its title, so the
  // support page renders the list without a repeated card head.
  { key: "roadmap", icon: "bi-signpost-split", label: "未來功能", group: "roadmap", standalone: true },
];

export const articles = [
  // ── 快速上手 ──────────────────────────────────────────────
  {
    slug: "how-to-set-up",
    category: "getting-started",
    question: "如何開始使用 DingPOS 開店？",
    keywords: ["開店", "教學", "新手", "設定", "入門", "第一次", "onboarding"],
    content: [
      { type: "p", text: "第一次開啟 DingPOS 會進入開店精靈，整個流程大約 10 分鐘：" },
      {
        type: "steps",
        items: [
          "選擇國家——自動帶入幣別、稅制與預設稅率（稅率與稅制此時可以調整）。",
          "輸入店名，並可選擇上傳商店 logo。",
          "跟著引導建立 3–5 樣商品（可以略過，之後隨時可補）。",
        ],
      },
      { type: "p", text: "完成後會聽到一聲「叮！」，代表商店已就緒，可以直接開始結帳收錢。" },
    ],
    related: ["change-currency", "free-trial", "product-variants"],
  },
  {
    slug: "offline-usage",
    category: "getting-started",
    question: "沒有網路可以使用嗎？",
    keywords: ["離線", "網路", "斷網", "wifi", "夜市", "市集", "offline"],
    content: [
      { type: "p", text: "可以。DingPOS 是離線優先設計——結帳、商品管理、庫存、報表全部在 iPad 本地運作，完全不需要網路。夜市、快閃市集這類沒有 WiFi 的場景都能正常收銀。" },
      { type: "p", text: "只有兩件事需要網路：雲端備份（上傳到你自己的 iCloud／Google Drive／Dropbox），以及訂閱狀態的驗證。" },
    ],
    related: ["backup-data", "account-required"],
  },
  {
    slug: "account-required",
    category: "getting-started",
    question: "需要註冊帳號嗎？",
    keywords: ["帳號", "註冊", "登入", "隱私", "免帳號", "account"],
    content: [
      { type: "p", text: "不需要。DingPOS 沒有帳號系統——下載開啟就能用。你的商品、訂單與會員資料全部儲存在你的 iPad 上，不會上傳到我們的伺服器。" },
      { type: "p", text: "啟用雲端備份時，登入的是你自己的雲端帳號（iCloud、Google Drive 或 Dropbox），備份檔存在你的帳號裡，我們無法存取。" },
    ],
    related: ["offline-usage", "backup-data"],
  },
  {
    slug: "supported-devices",
    category: "getting-started",
    question: "支援哪些裝置？",
    keywords: ["裝置", "iphone", "mac", "ipad", "系統需求", "版本"],
    content: [
      { type: "p", text: "DingPOS 目前支援 iPadOS 17 以上的 iPad，以橫向畫面為主要設計。" },
      { type: "p", text: "iPhone 與 Mac 目前不支援。如果你希望我們支援其他裝置，歡迎寫信告訴我們你的使用情境。" },
    ],
    related: ["multi-device"],
  },
  {
    slug: "change-currency",
    category: "getting-started",
    question: "開店後可以更改幣別或稅制嗎？",
    keywords: ["幣別", "貨幣", "稅制", "稅率", "更改", "修改", "鎖定"],
    content: [
      { type: "p", text: "稅率隨時可以在「設定」中修改，新稅率只會套用到之後的訂單。" },
      { type: "p", text: "幣別與稅制（內含稅／外加稅）在開店設定完成後即鎖定，無法更改——因為所有歷史訂單的金額都是以它們計算的，中途變更會讓報表失真。" },
      { type: "note", text: "如果剛開店、還沒有重要資料，可以刪除並重新安裝 App，重新跑一次開店流程。刪除前請確認不需要保留任何資料。" },
    ],
    related: ["tax-calculation", "how-to-set-up"],
  },

  // ── 收銀結帳 ──────────────────────────────────────────────
  {
    slug: "multiple-carts",
    category: "checkout",
    question: "如何同時服務多位客人？",
    keywords: ["購物車", "多車", "掛單", "切換", "同時", "多位客人"],
    content: [
      { type: "p", text: "收銀畫面支援最多 10 個購物車同時進行。點購物車列上的「+」新增，點編號分頁即可切換。" },
      { type: "p", text: "每個購物車獨立計算。客人 A 還在挑選時，切到另一車就能先幫客人 B 結帳；結帳完成後該車位會自動移除。" },
      { type: "note", text: "購物車只存在記憶體中，App 完全關閉後，尚未結帳的購物車會清空。" },
    ],
    related: ["apply-discounts", "payment-methods"],
  },
  {
    slug: "apply-discounts",
    category: "checkout",
    question: "如何套用折扣？",
    keywords: ["折扣", "打折", "優惠", "折讓", "百分比", "折價"],
    content: [
      { type: "p", text: "折扣分兩層，都支援固定金額或百分比：" },
      {
        type: "list",
        items: [
          "單品折扣：點購物車中的品項 → 選「折扣」→ 輸入金額或百分比。",
          "整單折扣：點購物車下方的「折扣」按鈕。",
        ],
      },
      { type: "p", text: "每個品項與整單各只能有一個折扣，重複套用會覆蓋前一個；點折扣標籤即可移除。計算順序是先折扣、後計稅，這是零售的通用順序。" },
    ],
    related: ["create-promotion", "tax-calculation"],
  },
  {
    slug: "tax-calculation",
    category: "checkout",
    question: "稅金怎麼計算？",
    keywords: ["稅", "稅金", "營業稅", "內含稅", "外加稅", "發票", "tax"],
    content: [
      { type: "p", text: "依開店時選擇的稅制自動計算，兩種模式收據上都會顯示稅額：" },
      {
        type: "list",
        items: [
          "內含稅：商品價格已包含稅金，總額不變，收據上拆列出內含的稅額（台灣、日本等常用）。",
          "外加稅：結帳時在折扣後金額上外加稅金（美國、加拿大等常用）。",
        ],
      },
      { type: "p", text: "完整計算順序：單品折扣 → 整單折扣 → 稅金。金額依幣別的小數位數四捨五入（例如新台幣取整數、美元取兩位）。" },
    ],
    related: ["change-currency", "apply-discounts"],
  },
  {
    slug: "payment-methods",
    category: "checkout",
    question: "支援哪些付款方式？",
    keywords: ["付款", "支付", "現金", "刷卡", "信用卡", "line pay", "找零"],
    content: [
      { type: "p", text: "內建現金、信用卡、Line Pay，也可以在「設定」中自訂任意付款方式標籤（例如街口支付、Apple Pay）。" },
      { type: "p", text: "付款方式是記帳用的標籤——DingPOS 不經手實際金流。刷卡或行動支付請用你原有的刷卡機或收款 App 完成，在 DingPOS 選對應標籤記錄即可。現金付款會自動計算找零。" },
    ],
    related: ["roadmap-payment-integration", "multiple-carts", "void-order"],
  },
  {
    slug: "void-order",
    category: "checkout",
    question: "結帳打錯了，如何作廢訂單？",
    keywords: ["作廢", "退款", "取消", "打錯", "退貨", "訂單", "void"],
    content: [
      { type: "p", text: "到「訂單」找到該筆訂單，進入詳情後選擇「作廢」，確認即完成。" },
      { type: "p", text: "作廢會自動回補所有連動資料：有追蹤庫存的商品數量會加回、會員該筆獲得的點數會收回、已折抵的點數會退還。作廢的訂單仍保留在清單中並明確標示，不列入報表營收。" },
      { type: "note", text: "目前僅支援整單作廢，沒有部分退款。如需修正，可作廢後重新結帳一筆正確的訂單。" },
    ],
    related: ["inventory-tracking", "roadmap-returns-exchanges", "loyalty-points"],
  },

  // ── 商品與庫存 ────────────────────────────────────────────
  {
    slug: "product-variants",
    category: "products",
    question: "如何建立多規格商品？",
    keywords: ["規格", "多規格", "尺寸", "顏色", "變體", "variant"],
    content: [
      { type: "p", text: "在商品編輯頁開啟多規格，先定義規格軸（例如「尺寸」與「顏色」），系統會展開所有組合（S／黑、S／白、M／黑⋯⋯）。" },
      { type: "p", text: "每個規格可獨立設定售價與成本，庫存也各自計算。收銀時點選該商品，會先跳出規格選擇再加入購物車。" },
      { type: "note", text: "規格軸與選項名稱上限 20 字。" },
    ],
    related: ["barcode-scanning", "inventory-tracking"],
  },
  {
    slug: "barcode-scanning",
    category: "products",
    question: "如何使用條碼？",
    keywords: ["條碼", "掃描", "掃碼", "barcode", "重複", "掃描槍"],
    content: [
      { type: "p", text: "商品條碼可以手動輸入，也可以用相機直接掃描帶入。條碼不可重複——儲存時若與其他商品衝突，會提示你衝突的商品名稱。" },
      { type: "p", text: "收銀時，搜尋欄會同時比對商品名稱與條碼開頭，輸入條碼即可快速叫出商品。實體掃描槍的支援規劃請見「會支援實體掃描槍嗎？」。" },
    ],
    related: ["product-variants", "roadmap-barcode-scanner"],
  },
  {
    slug: "inventory-tracking",
    category: "products",
    question: "如何追蹤庫存？",
    keywords: ["庫存", "追蹤", "進貨", "盤點", "數量", "低庫存"],
    content: [
      { type: "p", text: "庫存追蹤是每項商品獨立的開關——在商品編輯頁開啟並輸入目前數量即可。多規格商品的每個規格各自計算庫存。" },
      { type: "p", text: "開啟後，銷售自動扣庫存、訂單作廢自動回補，也可以隨時手動調整。所有異動（銷售、作廢、手動調整）都記錄在異動帳本中，一筆不漏。庫存過低時會以顏色警示。" },
    ],
    related: ["negative-inventory", "roadmap-purchase-orders"],
  },
  {
    slug: "negative-inventory",
    category: "products",
    question: "為什麼庫存可以是負數？",
    keywords: ["負庫存", "負數", "庫存不足", "擋單", "調整"],
    content: [
      { type: "p", text: "這是刻意的設計：庫存不足時，結帳不會被擋下。現場收銀的第一原則是不能讓客人等——帳面數字錯了可以事後修正，交易被中斷的損失卻補不回來。" },
      { type: "p", text: "出現負庫存通常代表之前有進貨或盤點沒登記。用「手動調整」把數字修正即可，調整紀錄會留在異動帳本中。" },
    ],
    related: ["inventory-tracking"],
  },

  // ── 促銷與會員 ────────────────────────────────────────────
  {
    slug: "create-promotion",
    category: "promotion",
    question: "如何建立促銷活動？",
    keywords: ["促銷", "活動", "滿額", "買一送一", "優惠", "折扣碼", "happy hour"],
    content: [
      { type: "p", text: "到「設定 → 促銷活動」建立。支援的類型包括：" },
      {
        type: "list",
        items: [
          "滿額折扣：滿 X 元折 Y 元或 Y%。",
          "買一送一、第 N 件優惠。",
          "點數加倍回饋。",
          "指定會員等級或壽星專屬優惠。",
          "買 A 送 B、加價購、組合價等組合優惠。",
        ],
      },
      { type: "p", text: "每檔促銷可設定檔期（支援 Happy Hour 時段、指定星期、跨午夜）、適用商品範圍、優先順序與疊加規則、使用次數上限。符合條件時結帳自動套用，客人不需要輸入折扣碼。" },
    ],
    related: ["guide-threshold", "guide-composite", "promotion-not-applied"],
  },
  {
    slug: "promotion-not-applied",
    category: "promotion",
    question: "促銷沒有自動套用怎麼辦？",
    keywords: ["促銷", "沒套用", "沒生效", "沒觸發", "檢查", "排查"],
    content: [
      { type: "p", text: "依序檢查最常見的幾個原因：" },
      {
        type: "steps",
        items: [
          "檔期與時段：是否在有效日期內？Happy Hour 是否限定了星期或時段？",
          "適用範圍：購物車中的商品是否在促銷指定的商品或分類內？門檻金額是否已達到？",
          "對象限定：促銷是否限定會員等級或壽星？結帳時是否已選擇該會員？",
          "次數上限：總使用次數、或該客戶的使用次數是否已用完？",
          "疊加規則：是否被優先順序較高、且設定「套用後停止」的另一檔促銷擋下？",
        ],
      },
      { type: "p", text: "若確認條件都符合仍未套用，寫信給我們並附上促銷設定的截圖，我們會協助排查。" },
    ],
    related: ["guide-schedule", "guide-priority-stacking", "create-promotion"],
  },
  {
    slug: "loyalty-points",
    category: "promotion",
    question: "會員點數怎麼設定與折抵？",
    keywords: ["點數", "集點", "回饋", "折抵", "會員", "迎新"],
    content: [
      { type: "p", text: "到「設定 → 會員點數」設定兩條規則：消費滿 X 元回饋 Y 點（賺點），以及 N 點折抵 M 元（用點，可設定單筆折抵上限）。也可以設定新會員自動獲得的迎新點數。" },
      { type: "p", text: "結帳時選擇會員，點數自動累積；要折抵時輸入使用的點數即可。訂單作廢會自動收回該筆獲得的點數、退還已折抵的點數。" },
    ],
    related: ["member-tiers", "void-order"],
  },
  {
    slug: "member-tiers",
    category: "promotion",
    question: "會員等級有什麼用？",
    keywords: ["會員等級", "等級", "vip", "升級", "金卡", "tier"],
    content: [
      { type: "p", text: "會員等級（例如一般、銀卡、金卡）有兩個主要用途：作為促銷的指定對象（例如金卡專屬 9 折），以及讓你在結帳時一眼辨識客人身份。" },
      { type: "p", text: "等級可以設定自動升級規則（例如累積消費達標自動升級），也可以手動指定。訂單作廢時，若該筆消費曾觸發升級，等級也會自動回退。" },
    ],
    related: ["loyalty-points", "create-promotion"],
  },

  // ── 備份與資料 ────────────────────────────────────────────
  {
    slug: "backup-data",
    category: "backup",
    question: "如何備份資料？",
    keywords: ["備份", "icloud", "google drive", "dropbox", "雲端", "快照"],
    content: [
      { type: "p", text: "到「設定 → 雲端備份」，從 iCloud、Google Drive、Dropbox 中選一個並完成授權，之後隨時可以手動觸發備份。" },
      { type: "p", text: "備份存進你自己的雲端帳號，保留最近 5 份快照。商品照片採增量同步，只上傳新增或變更的部分。" },
    ],
    related: ["transfer-new-ipad", "data-after-delete"],
  },
  {
    slug: "transfer-new-ipad",
    category: "backup",
    question: "換新 iPad 怎麼轉移資料？",
    keywords: ["換機", "轉移", "新 ipad", "還原", "搬家", "restore"],
    content: [
      {
        type: "steps",
        items: [
          "舊 iPad：到「設定 → 雲端備份」手動執行一次備份，確認備份時間已更新。",
          "新 iPad：安裝 DingPOS 並完成開店流程。",
          "新 iPad：到「設定 → 雲端備份」連接同一個雲端帳號，選擇還原最新的快照。",
        ],
      },
      { type: "p", text: "還原前系統會先驗證備份檔的完整性，並保留一份現有資料的安全副本，確認可用才會替換。商品照片會一併還原。" },
    ],
    related: ["backup-data", "data-after-delete"],
  },
  {
    slug: "data-after-delete",
    category: "backup",
    question: "刪除 App 後資料還在嗎？",
    keywords: ["刪除", "移除", "解除安裝", "資料遺失", "消失"],
    content: [
      { type: "p", text: "不在。DingPOS 的資料全部儲存在裝置本地，刪除 App 會一併永久刪除所有商品、訂單、會員與設定——除非你已啟用雲端備份。" },
      { type: "note", text: "刪除 App 前，請務必先手動執行一次備份並確認成功。重新安裝後即可從雲端還原。" },
    ],
    related: ["backup-data", "transfer-new-ipad"],
  },
  {
    slug: "multi-device",
    category: "backup",
    question: "可以兩台 iPad 一起用嗎？",
    keywords: ["兩台", "多裝置", "同步", "共用", "第二台", "分店"],
    content: [
      { type: "p", text: "目前每台 iPad 的資料各自獨立，尚不支援兩台裝置即時共用同一份資料。" },
      { type: "p", text: "你可以透過雲端備份把資料從一台複製到另一台（備份 → 還原），適合換機或建立第二台的初始資料；但兩台各自結帳的訂單不會自動合併。多裝置同步在我們的規劃中。" },
    ],
    related: ["transfer-new-ipad", "supported-devices"],
  },

  // ── 訂閱與費用 ────────────────────────────────────────────
  {
    slug: "free-trial",
    category: "subscription",
    question: "免費試用怎麼運作？",
    keywords: ["試用", "免費", "30 天", "信用卡", "trial"],
    content: [
      { type: "p", text: "首次安裝起 30 天內可使用全部功能，不需要信用卡、不需要註冊帳號。" },
      { type: "p", text: "試用期間建立的所有資料（商品、訂單、會員）都會完整保留——不論之後是否訂閱，資料都不會被刪除。" },
    ],
    related: ["after-trial", "manage-subscription"],
  },
  {
    slug: "after-trial",
    category: "subscription",
    question: "試用到期後資料會消失嗎？",
    keywords: ["到期", "過期", "資料", "鎖定", "結帳鎖"],
    content: [
      { type: "p", text: "不會，資料永遠保留在你的裝置上。試用到期後，「結帳」功能會鎖定，但你仍然可以瀏覽訂單、查看報表與管理商品。" },
      { type: "p", text: "任何時候訂閱，都能立即恢復結帳功能，所有資料原封不動。" },
    ],
    related: ["free-trial", "manage-subscription"],
  },
  {
    slug: "manage-subscription",
    category: "subscription",
    question: "如何訂閱、取消或恢復購買？",
    keywords: ["訂閱", "取消", "退訂", "恢復購買", "價格", "付費"],
    content: [
      { type: "p", text: "訂閱透過 App Store 應用程式內購買完成，方案與價格以 App 內顯示為準。付款由 Apple 處理，我們不會接觸你的付款資料。" },
      {
        type: "list",
        items: [
          "取消訂閱：在裝置的「設定 → Apple 帳號 → 訂閱項目」管理，於當期結束至少 24 小時前取消即不會續扣。",
          "恢復購買：換機或重新安裝後，在 DingPOS 的訂閱頁面點「恢復購買」即可。",
        ],
      },
    ],
    related: ["free-trial", "after-trial"],
  },
  // ── 新增 FAQ：結帳與報表行為 ──────────────────────────────
  {
    slug: "price-change-cart",
    category: "checkout",
    question: "商品改價後，購物車裡的價格會跟著變嗎？",
    keywords: ["改價", "價格變動", "調價", "購物車", "重新計算"],
    content: [
      { type: "p", text: "購物車顯示的是商品加入當下的價格。按下結帳確認時，系統會重新查一次所有商品的最新價格——若有變動，會先跳出提示讓你確認新價格後才繼續。" },
      { type: "p", text: "促銷也會在確認當下從頭重新計算一次；若總額、稅額或任何折扣金額因此改變，畫面會顯示變動摘要並要求再確認，確保你看到的金額就是實際入帳的金額。" },
    ],
    related: ["apply-discounts", "guide-priority-stacking"],
  },
  {
    slug: "manual-discount-promotion",
    category: "checkout",
    question: "手動折扣和促銷可以同時用嗎？",
    keywords: ["手動折扣", "促銷", "並存", "同時", "覆蓋", "優先"],
    content: [
      { type: "p", text: "可以，規則是「手動優先、各管各的」：" },
      {
        type: "list",
        items: [
          "單品手動折扣：該行商品不再套用單品類促銷——手動折扣視為你現場的最終決定；但這行的金額仍計入滿額門檻的計算。",
          "整單手動折扣：在所有促銷算完之後才扣，兩者可以並存。若輸入的折扣超過剩餘金額，系統會自動以剩餘金額為上限並提示你。",
        ],
      },
      { type: "p", text: "移除手動折扣後，該行商品下次計算時會重新恢復促銷資格。" },
    ],
    related: ["apply-discounts", "guide-priority-stacking"],
  },
  {
    slug: "profit-not-tracked",
    category: "products",
    question: "沒填商品成本，報表毛利怎麼算？",
    keywords: ["成本", "毛利", "報表", "未追蹤", "利潤"],
    content: [
      { type: "p", text: "成本是選填欄位。沒填成本的商品會在報表中標示為「未追蹤毛利」，並從毛利計算中排除——營收照常計入，只有毛利不計。" },
      { type: "p", text: "想看完整的毛利報表，回到商品編輯頁補上成本即可，之後的訂單就會納入計算。毛利以折扣後的實收金額計算。" },
    ],
    related: ["inventory-tracking", "roadmap-monthly-settlement"],
  },

  // ── 促銷設定教學 ──────────────────────────────────────────
  {
    slug: "guide-threshold",
    category: "promotion-guide",
    question: "滿額折扣設定教學",
    keywords: ["滿額", "門檻", "滿千折百", "教學", "設定"],
    content: [
      { type: "p", text: "到「設定 → 促銷活動 → 新增」，選擇滿額折扣類型，依序完成：" },
      {
        type: "steps",
        items: [
          "設定門檻金額，以及折扣內容（定額或百分比）。",
          "選擇適用範圍：指定商品、指定分類，或不選（代表全店適用）。",
          "設定檔期：開始日期必填，結束日期留空代表長期有效。",
          "儲存後依檔期自動生效，結帳時符合條件即自動套用，客人不需輸入任何代碼。",
        ],
      },
      { type: "note", text: "門檻比對的是「符合適用範圍的商品小計」，不是整車總額。指定「飲料」分類的滿千折百，只有飲料金額計入門檻；被設為「排除促銷」的商品也一律不計入。" },
      { type: "p", text: "另一個開發時常被問到的行為：若有優先順序更前面的促銷先扣過，門檻是以「扣過之後」的金額判定——購物車表面過千，實際可能差一點沒達標。想讓滿額判定先跑，把它的優先順序數字調小即可。" },
    ],
    related: ["guide-priority-stacking", "create-promotion", "promotion-not-applied"],
  },
  {
    slug: "guide-bogo",
    category: "promotion-guide",
    question: "買一送一與第 N 件優惠設定教學",
    keywords: ["買一送一", "bogo", "第二件", "湊組", "教學"],
    content: [
      { type: "p", text: "新增促銷時選擇買 N 送 N 類型，設定「買幾件」「送幾件」與折扣比例（100% 即免費）。適用範圍可指定商品或整個分類——同分類內不同商品也能互相湊組。" },
      {
        type: "list",
        items: [
          "折抵的是同組中「目前最便宜」的那件，而且以當下有效單價計算——若前面已有其他促銷先打折，折抵金額是打折後的價格，不是原價。",
          "想讓「第 3 件免費」的折抵標示是完整原價，把這檔促銷的優先順序調到最小（最先計算）。整單折扣先跑的話，贈送那件顯示的折抵金額會小於原價——這是我們反覆驗證過的計算順序特性，不是錯誤；兩種順序的最終總額幾乎相同，差別在客人看到的「折在哪裡」。",
        ],
      },
      { type: "p", text: "建議：把主打的優惠排在最前面，讓收據上的折扣分佈符合你行銷的說法。" },
    ],
    related: ["guide-priority-stacking", "guide-threshold", "create-promotion"],
  },
  {
    slug: "guide-points-multiplier",
    category: "promotion-guide",
    question: "點數加倍活動設定教學",
    keywords: ["點數加倍", "雙倍", "點數", "教學", "設定"],
    content: [
      { type: "p", text: "新增促銷選「點數加倍」，設定倍數（2 以上的整數），可搭配消費門檻（例如滿 500 點數雙倍）與檔期（例如每週六）。" },
      {
        type: "list",
        items: [
          "多檔點數加倍同時符合時，只取最高的那個倍數——不會相乘、也不會疊加。",
          "門檻金額是以「點數折抵之後」的金額判定：客人用點數折抵後若低於門檻，這次就不會加倍。",
          "結帳時必須選擇會員才會累點；沒選會員的訂單不產生點數，加倍自然也不會生效。",
        ],
      },
    ],
    related: ["loyalty-points", "guide-schedule", "member-tiers"],
  },
  {
    slug: "guide-tier-birthday",
    category: "promotion-guide",
    question: "會員等級與壽星優惠設定教學",
    keywords: ["會員等級", "壽星", "生日", "vip", "教學"],
    content: [
      { type: "p", text: "先在「設定 → 會員等級」建立等級（例如金卡），再於促銷的適用對象選擇該等級；壽星優惠則是把條件設為「生日月份」。" },
      {
        type: "list",
        items: [
          "結帳時要先選定該會員，優惠才會觸發——判定依據是當下選擇的會員資料。",
          "壽星判定看會員資料裡的生日月份，記得幫會員補上生日欄位，沒填生日的會員不會被視為壽星。",
          "等級自動升級規則在結帳完成時判定；若訂單作廢，因該筆消費觸發的升級也會自動回退。",
        ],
      },
    ],
    related: ["member-tiers", "loyalty-points", "guide-schedule"],
  },
  {
    slug: "guide-composite",
    category: "promotion-guide",
    question: "贈品、加購與組合價設定教學",
    keywords: ["贈品", "加購", "加價購", "組合價", "買a送b", "教學"],
    content: [
      { type: "p", text: "新增促銷時可選三種組合型優惠：滿額／滿件送贈品（買 A 送 B）、加價購（加 X 元換購 Y）、組合價（任選 N 件 $X）。" },
      { type: "p", text: "重要：這類優惠不會自動改動購物車。條件符合時，收銀畫面會出現建議橫幅，店員按「接受」才會把贈品或組合加入——這是刻意設計，因為贈品牽涉實體庫存，需要店員確認現場有貨、客人要拿。" },
      {
        type: "list",
        items: [
          "按「拒絕」後，同一車不會再跳同一檔建議；換一車或清空後會重新提示。",
          "結帳確認前若條件變動冒出新的建議，需要先「接受」或「拒絕」完才能送出訂單。",
          "組合價：符合的商品多於組合件數時，預設選最貴的幾件入組，店員可在確認前改選。",
          "贈品與加購商品加入購物車後，不會再被其他金錢折扣打折，也不計入其他促銷的門檻。",
        ],
      },
    ],
    related: ["create-promotion", "guide-threshold", "guide-priority-stacking"],
  },
  {
    slug: "guide-schedule",
    category: "promotion-guide",
    question: "檔期與 Happy Hour 設定教學",
    keywords: ["檔期", "happy hour", "時段", "星期", "跨午夜", "教學"],
    content: [
      { type: "p", text: "每檔促銷的檔期有三層條件：日期範圍（開始必填、結束可留空）、每日時段（Happy Hour）、指定星期。三者都符合才會觸發。" },
      {
        type: "list",
        items: [
          "跨午夜時段（例如 22:00–02:00）的星期以「開始那天」為準：只勾週五時，週六凌晨 01:30 仍屬於週五場、會觸發；但週六晚上 23:30 不會。",
          "結束日期是硬切點——即使 Happy Hour 時段還沒跑完，過了結束日期就立即停止。",
          "時間以 iPad 的裝置時間為準，請確認裝置的時區與時間正確。",
        ],
      },
    ],
    related: ["guide-priority-stacking", "promotion-not-applied", "create-promotion"],
  },
  {
    slug: "guide-priority-stacking",
    category: "promotion-guide",
    question: "優先順序、疊加與停止規則教學",
    keywords: ["優先順序", "疊加", "停止", "衝突", "順序", "教學"],
    content: [
      { type: "p", text: "當多檔促銷同時符合，套用順序與互動由三個設定控制：" },
      {
        type: "list",
        items: [
          "優先順序：數字小的先計算。在促銷清單拖曳排序即可調整。",
          "可疊加（預設開啟）：關閉時，單品類促銷只鎖住「被它折過的那幾行」，其他商品仍可套用後續單品促銷；整單類促銷關閉疊加，則會擋掉後面所有整單類促銷。",
          "套用後停止：這檔套用後，後面的金錢折扣全部不再計算——但點數加倍與贈品建議不受影響。",
        ],
      },
      { type: "note", text: "後算的促銷以「已被前面扣過」的金額為基礎：9 折加 95 折不等於 85.5 折——第二檔算的是打過 9 折後的金額。系統也不會自動嘗試對客人最有利的組合，順序完全由你的優先順序決定。" },
      { type: "p", text: "冷知識：折扣金額經四捨五入後若為 0，該次套用不成立，也不會消耗使用次數上限。" },
    ],
    related: ["guide-bogo", "guide-threshold", "guide-schedule"],
  },

  // ── 未來功能 ──────────────────────────────────────────────
  {
    slug: "roadmap-payment-integration",
    category: "roadmap",
    question: "會串接金流（線上收款）嗎？",
    keywords: ["金流", "刷卡", "支付", "串接", "收款"],
    content: [
      { type: "p", text: "目前 DingPOS 不經手金流——付款方式是記帳用的標籤，實際收款透過你原有的刷卡機或支付 App 完成。" },
      { type: "p", text: "是否串接金流，會依實際使用者需求決定。如果你有需求，歡迎來信告訴我們你想串接的服務（哪家支付、哪種刷卡機）與使用情境，我們會依照需求人數決定開發順序。" },
    ],
    related: ["payment-methods", "roadmap-e-invoice"],
  },
  {
    slug: "roadmap-e-invoice",
    category: "roadmap",
    question: "會支援電子發票或收據列印嗎？",
    keywords: ["電子發票", "發票", "收據", "列印", "出單機"],
    content: [
      { type: "p", text: "目前還不支援。電子發票與收據列印需要採購發票機／出單機等硬體回來測試與開發，成本較高——我們是小團隊，會在用戶成長、有穩定收入後排入規劃。" },
      { type: "p", text: "如果你有需求，歡迎來信告訴我們你需要支援的機型，我們會依照需求人數決定開發順序。" },
    ],
    related: ["roadmap-barcode-scanner", "roadmap-payment-integration"],
  },
  {
    slug: "roadmap-barcode-scanner",
    category: "roadmap",
    question: "會支援實體掃描槍嗎？",
    keywords: ["掃描槍", "掃碼槍", "藍牙", "usb", "硬體"],
    content: [
      { type: "p", text: "建立商品時用相機掃描條碼已經支援；實體掃描槍（USB／藍牙）尚未正式支援——需要採購硬體回來測試與開發，成本較高，會在用戶成長後排入規劃。" },
      { type: "note", text: "收銀搜尋欄支援條碼比對，理論上以鍵盤模式輸入的掃描槍可以打進搜尋欄叫出商品，但我們尚未實機驗證，不列為正式支援。若你已有掃描槍實測可用，歡迎寫信告訴我們型號。" },
      { type: "p", text: "如果你有需求，歡迎來信，我們會依照需求人數決定開發順序。" },
    ],
    related: ["barcode-scanning", "roadmap-e-invoice"],
  },
  {
    slug: "roadmap-purchase-orders",
    category: "roadmap",
    question: "會有進貨單功能嗎？",
    keywords: ["進貨單", "進貨", "採購", "補貨"],
    content: [
      { type: "p", text: "會，進貨單已在規劃中。" },
      { type: "p", text: "在那之前，進貨可以用庫存的「手動調整」記錄——調整數量後異動帳本會留下紀錄，之後進貨單功能上線時，歷史仍可追溯。" },
      { type: "p", text: "如果你有需求，歡迎來信，我們會依照需求人數決定開發順序。" },
    ],
    related: ["inventory-tracking", "roadmap-monthly-settlement"],
  },
  {
    slug: "roadmap-returns-exchanges",
    category: "roadmap",
    question: "會支援預訂、退貨與換貨嗎？",
    keywords: ["預訂", "退貨", "換貨", "退款", "部分退款"],
    content: [
      { type: "p", text: "會，預訂、退貨、換貨都已在規劃中。" },
      { type: "p", text: "在那之前的替代做法：退貨可用「整單作廢」處理，庫存與點數會自動回補；換貨則是作廢原單後，重新結帳一筆正確的訂單。" },
      { type: "p", text: "如果你有需求，歡迎來信，我們會依照需求人數決定開發順序。" },
    ],
    related: ["void-order", "roadmap-purchase-orders"],
  },
  {
    slug: "roadmap-monthly-settlement",
    category: "roadmap",
    question: "會有進貨／銷售月結功能嗎？",
    keywords: ["月結", "結算", "對帳", "月報"],
    content: [
      { type: "p", text: "會，月結報表已在規劃中。" },
      { type: "p", text: "目前可以先用報表的「月」區間檢視當月營收、毛利與付款方式分佈，作為對帳的基礎。" },
      { type: "p", text: "如果你有需求，歡迎來信，我們會依照需求人數決定開發順序。" },
    ],
    related: ["roadmap-purchase-orders", "profit-not-tracked"],
  },
];
