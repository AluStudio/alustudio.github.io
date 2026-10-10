// DingPOS FAQ — zh-Hant content pack.
// Slugs and `related` links MUST stay in sync with articles.en.js
// (enforced at build time by scripts/copy-spa-pages.js).
//
// Optional `since: "2.0"` marks a feature added after 1.0; when to set it and
// how VERIFIED_APP_VERSION moves with each release: see ./version.js.
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
  { key: "orders", icon: "bi-receipt", label: "訂單與退換貨", group: "faq" },
  { key: "products", icon: "bi-box-seam", label: "商品、庫存與進貨", group: "faq" },
  { key: "reports", icon: "bi-bar-chart-line", label: "報表", group: "faq" },
  { key: "promotion", icon: "bi-tags", label: "促銷與會員", group: "faq" },
  { key: "backup", icon: "bi-cloud-check", label: "備份與資料", group: "faq" },
  { key: "staff", icon: "bi-people", label: "員工與權限", group: "faq" },
  { key: "subscription", icon: "bi-credit-card", label: "訂閱與費用", group: "faq" },
  { key: "promotion-guide", icon: "bi-mortarboard", label: "促銷設定教學", group: "guide" },
  // standalone: the group has this one category and shares its title, so the
  // support page renders the list without a repeated card head.
  { key: "roadmap", icon: "bi-signpost-split", label: "未來功能", group: "roadmap", standalone: true },
];

export const articles = [
  // ── 快速上手 ────────────────────────────────────────────────
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
  {
    slug: "app-language",
    category: "getting-started",
    since: "3.0",
    question: "怎麼切換 App 的語言？",
    keywords: ["語言", "英文", "中文", "切換", "language"],
    content: [
      { type: "p", text: "DingPOS 支援繁體中文與英文。到「設定 → 本機偏好設定」點「App 語言」，會打開 iPad「設定」裡 DingPOS 的頁面，在「語言」選擇中文或英文即可。" },
      { type: "p", text: "iOS 不允許 App 直接打開語言清單，所以要在系統設定裡再點一次。語言只套用在這台 iPad。" },
    ],
    related: ["checkout-sound", "supported-devices"],
  },

  // ── 收銀結帳 ────────────────────────────────────────────────
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
    keywords: ["付款", "支付", "現金", "刷卡", "信用卡", "line pay", "找零", "掛帳"],
    content: [
      { type: "p", text: "內建現金、信用卡、Line Pay，也可以在「設定」中自訂任意付款方式標籤（例如街口支付、Apple Pay）。" },
      { type: "p", text: "付款方式是記帳用的標籤——DingPOS 不經手實際金流。刷卡或行動支付請用你原有的刷卡機或收款 App 完成，在 DingPOS 選對應標籤記錄即可。現金付款會自動計算找零。" },
      { type: "p", text: "熟客想先把東西帶走、之後再付，可以選「掛帳」：這筆會記成未收帳款，等收到錢再結清。詳見「熟客可以先掛帳、之後再付嗎？」。" },
    ],
    related: ["on-account", "roadmap-payment-integration", "multiple-carts"],
  },
  {
    slug: "checkout-sound",
    category: "checkout",
    since: "3.0",
    question: "可以關掉結帳完成的「叮」一聲嗎？",
    keywords: ["音效", "叮", "聲音", "靜音", "關掉", "結帳", "sound"],
    content: [
      { type: "p", text: "可以。到「設定 → 本機偏好設定」關掉「結帳完成音效」，下一筆結帳就不會再發出叮聲，但仍然會有震動回饋。" },
      { type: "p", text: "這個開關只套用在這台 iPad，從雲端備份還原也不會改變它。" },
    ],
    related: ["app-language", "multiple-carts"],
  },
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

  // ── 訂單與退換貨 ────────────────────────────────────────────
  {
    slug: "void-order",
    category: "orders",
    question: "結帳打錯了，如何作廢訂單？",
    keywords: ["作廢", "取消", "打錯", "訂單", "void"],
    content: [
      { type: "p", text: "到「訂單」找到該筆訂單，進入詳情後選擇「作廢」，確認即完成。" },
      { type: "p", text: "作廢會自動回補所有連動資料：有追蹤庫存的商品數量會加回、會員該筆獲得的點數會收回、已折抵的點數會退還。作廢的訂單仍保留在清單中並明確標示，不列入報表營收。" },
      { type: "note", text: "作廢代表「這筆交易沒有發生過」，適合當場打錯的單。客人事後拿商品回來，請改用「退貨」：原單會保留，可以只退其中幾件，營收在退貨當天扣回。" },
    ],
    related: ["returns-exchanges", "inventory-tracking", "loyalty-points"],
  },
  {
    slug: "returns-exchanges",
    category: "orders",
    since: "2.0",
    question: "客人要退貨或換貨怎麼辦？",
    keywords: ["退貨", "換貨", "退款", "部分退貨", "換尺寸", "退一件", "return", "exchange"],
    content: [
      { type: "p", text: "到「訂單」打開原本那張訂單，點「退貨」，逐項選要退幾件。要換貨的話，在同一個畫面「加入換入品項」，最後一次結算淨額：正數向客人收錢、負數退錢給客人，剛好抵銷就不用收付。" },
      {
        type: "list",
        items: [
          "原訂單不會被修改。退貨會產生一張當天日期、單號以 R 開頭的退貨單，營收在退貨當天扣回。",
          "退款金額是該商品在原單上實際付的錢：當初的單品折扣、整單折扣與點數折抵都已按比例扣掉，不是用原價退。稅也照原單當時的稅率計算。",
          "換入品項以今天的售價計算，不套用促銷與折扣。",
          "有追蹤庫存的商品會自動加回庫存；原單發出的點數會收回、折抵掉的點數會退還，換入品項另外發點。",
          "同一張單可以分次退，但累計不會超過原單賣出的數量。促銷的使用次數不會因為退貨而歸還。",
        ],
      },
      { type: "note", text: "退貨沒有期限，但一定要有原單。退貨單按錯了可以作廢，可退數量會回復。" },
    ],
    related: ["void-order", "inventory-tracking", "loyalty-points"],
  },
  {
    slug: "pre-orders",
    category: "orders",
    since: "2.0",
    question: "如何接受預購、先收訂金？",
    keywords: ["預購", "訂金", "預訂", "取貨", "尾款", "訂貨", "pre-order", "deposit"],
    content: [
      { type: "p", text: "結帳時，畫面最上方從「一般銷售」切到「預購」，選好取貨日、輸入訂金（0 到全額都可以，有 30%、50%、全額快選），再選訂金用什麼方式收。建議指定顧客，到貨時才聯絡得到人。" },
      {
        type: "list",
        items: [
          "下單當下就扣庫存，替客人把貨留著；缺貨的品項會變成負庫存，進貨入庫後自動回正。",
          "客人來拿貨時，在訂單詳情點「取貨結清」收齊尾款，這張單就成為一般的已完成訂單；之後要退貨，走一般的退貨流程。",
          "客人不來拿，點「取消訂單」，選擇退還或沒收訂金，庫存會加回去。",
          "訂金收執和取貨時的收據是同一個單號。",
        ],
      },
      { type: "p", text: "報表上，預購的營收在取貨那天才認列全額，訂金則在收到的那天計入「實收」，所以兩個數字會暫時不一樣，詳見「報表的「營收」和「實收」有什麼不同？」。" },
      { type: "note", text: "預購單不能直接修改品項，客人改主意時請取消後重新下一張。建立預購是 Standard 以上方案的功能；降級後，既有預購仍可取貨結清或取消。" },
    ],
    related: ["revenue-vs-cash", "on-account", "negative-inventory"],
  },
  {
    slug: "on-account",
    category: "orders",
    since: "2.0",
    question: "熟客可以先掛帳、之後再付嗎？",
    keywords: ["掛帳", "賒帳", "欠款", "未收帳款", "結清", "月結", "on account", "credit"],
    content: [
      { type: "p", text: "可以。結帳時先選好顧客，付款方式選「掛帳」——一筆欠款一定要有人認領，所以沒有指定顧客時不能掛帳。" },
      { type: "p", text: "要收錢時，到「訂單」上方切到「未收帳款」：依顧客分組，點進去可以結清單張、整個月份或全部，每次都會問這筆錢用什麼方式收。單張訂單也能在訂單詳情直接結清；收錯了可以「還原結清」。" },
      {
        type: "list",
        items: [
          "營收算在貨交出去的那天，實收和點數則等到結清那天才發生。",
          "未結清的訂單在列表上有琥珀色標籤，顧客詳情也看得到他目前欠多少。",
          "還有未結清訂單的顧客不能刪除。",
        ],
      },
      { type: "note", text: "建立掛帳是 Standard 以上方案的功能。降級後不能再新增掛帳，但既有的未收帳款仍可查看與結清。" },
    ],
    related: ["revenue-vs-cash", "payment-methods", "pre-orders"],
  },
  {
    slug: "order-notes",
    category: "orders",
    since: "2.2",
    question: "可以在訂單、顧客或進貨單上寫備注嗎？",
    keywords: ["備注", "備註", "註記", "筆記", "留言", "note"],
    content: [
      { type: "p", text: "可以。訂單、顧客與進貨單的詳情頁都有一張備注卡，點一下就能編輯，最多 500 字；新增顧客或進貨單時也能在表單裡直接寫。" },
      { type: "p", text: "備注不受單據狀態限制：已結帳、已作廢的訂單或退貨單都能補寫、修改。訂單的金額與明細在結帳當下就固定了，備注是寫在旁邊的註記，不會改動單據內容。" },
    ],
    related: ["void-order", "purchase-orders"],
  },

  // ── 商品、庫存與進貨 ────────────────────────────────────────
  {
    slug: "product-variants",
    category: "products",
    question: "如何建立多規格商品？",
    keywords: ["規格", "多規格", "選項", "尺寸", "顏色", "變體", "variant"],
    content: [
      { type: "p", text: "在商品編輯頁的「商品規格」新增規格（例如「顏色」），再用「+ 選項」加入它的每個選擇（例如紅色、藍色）。有兩個以上的規格時（例如顏色 × 尺寸），系統會展開所有組合（紅／S、紅／M、藍／S⋯⋯）。" },
      { type: "p", text: "每個組合可獨立設定售價與成本，庫存也各自計算。收銀時點選該商品，會先跳出規格選擇再加入購物車。" },
      { type: "note", text: "規格與選項名稱上限 20 字。" },
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
    slug: "product-order",
    category: "products",
    since: "2.0",
    question: "如何調整商品的排列順序？",
    keywords: ["排序", "順序", "排列", "拖曳", "置頂", "商品順序", "sort"],
    content: [
      { type: "p", text: "在「商品」點「編輯排序」，直接拖曳商品卡片到想要的位置。收銀台和商品管理用的是同一份順序，排一次兩邊都會跟著變。" },
      {
        type: "list",
        items: [
          "商品很多時，每張卡片的選單可以「移至最前」「移至最後」或「移至指定位置」，卡片上也標著它目前排第幾。",
          "先篩選分類再排，只會調整這個分類內的先後，其他分類的商品位置不變。",
          "新增的商品會排在最前面；修改商品資料不會改變它的位置。",
        ],
      },
      { type: "p", text: "想暫時改用名稱、價格、建立或更新時間排序，用「排序方式」選單切換即可。你自訂的順序會保留，切回「自訂順序」就回來。" },
    ],
    related: ["product-variants", "barcode-scanning"],
  },
  {
    slug: "inventory-tracking",
    category: "products",
    question: "如何追蹤庫存？",
    keywords: ["庫存", "追蹤", "進貨", "盤點", "數量", "低庫存"],
    content: [
      { type: "p", text: "庫存追蹤是每項商品獨立的開關——在商品編輯頁開啟並輸入目前數量即可。多規格商品的每個規格各自計算庫存。" },
      { type: "p", text: "開啟後，銷售與預購自動扣庫存，作廢、退貨與取消預購自動加回，進貨單入庫自動增加，也可以隨時手動調整。每一筆異動都記錄在異動帳本中，一筆不漏。庫存過低時會以顏色警示。" },
    ],
    related: ["negative-inventory", "purchase-orders"],
  },
  {
    slug: "negative-inventory",
    category: "products",
    question: "為什麼庫存可以是負數？",
    keywords: ["負庫存", "負數", "庫存不足", "擋單", "調整"],
    content: [
      { type: "p", text: "這是刻意的設計：庫存不足時，結帳不會被擋下。現場收銀的第一原則是不能讓客人等——帳面數字錯了可以事後修正，交易被中斷的損失卻補不回來。" },
      { type: "p", text: "出現負庫存通常代表有進貨沒登記，或是預購的商品還沒到貨（預購下單就會先扣庫存）。進貨請用進貨單入庫，數字會自動補回；盤點發現的落差再用「手動調整」修正，調整紀錄會留在異動帳本中。" },
    ],
    related: ["inventory-tracking", "purchase-orders", "pre-orders"],
  },
  {
    slug: "purchase-orders",
    category: "products",
    since: "2.0",
    question: "如何記錄進貨和供應商？",
    keywords: ["進貨", "進貨單", "供應商", "入庫", "採購", "補貨", "未付帳款", "purchase order", "supplier"],
    content: [
      { type: "p", text: "側欄的「進貨」管理供應商與進貨單。供應商記錄名稱、聯絡人、電話、地址與預設付款方式（現結或月結）。" },
      {
        type: "steps",
        items: [
          "點「新增進貨單」，選供應商，加入這批貨的商品、數量與單價（預帶商品目前的成本），也可以填運費。還沒建過這家供應商的話，在選擇供應商的清單左上角點「新增供應商」，建好會直接帶回進貨單。",
          "草稿階段不會動到庫存或帳款，可以隨時修改或刪除。",
          "貨到了按「確認入庫」：有追蹤庫存的商品數量自動增加，進貨單取得單號並鎖定。入庫時預設會把商品成本更新為這次的單價，不想更新可以在進貨單上關掉「同步商品成本」。",
        ],
      },
      { type: "p", text: "付款方式決定入庫後的狀態：現結直接標為已付款；月結則記為未付款，集中在「未付帳款」，可以依供應商結清單張、本月或全部。" },
      { type: "note", text: "進貨是 Standard 以上方案的功能。名下還有未付款進貨單的供應商不能刪除。" },
    ],
    related: ["inventory-tracking", "negative-inventory", "roadmap-monthly-settlement"],
  },

  // ── 報表 ────────────────────────────────────────────────────
  {
    slug: "revenue-vs-cash",
    category: "reports",
    since: "2.0",
    question: "報表的「營收」和「實收」有什麼不同？",
    keywords: ["營收", "實收", "收入", "對帳", "訂金", "掛帳", "不一樣", "revenue"],
    content: [
      { type: "p", text: "營收算的是貨在哪一天交給客人，實收算的是錢在哪一天進到店裡。當場結帳的訂單兩者在同一天發生，數字相同；以下情況會讓它們分開：" },
      {
        type: "list",
        items: [
          "掛帳：貨今天出門，計入今天的營收；錢等到結清那天才計入實收。",
          "預購：訂金在收到的那天計入實收；營收要等到取貨那天才認列全額。",
          "沒收訂金：客人取消預購、訂金不退時，那筆訂金在收到的那天已經算進實收，報表另外標出「沒收訂金」，不計入營收。",
        ],
      },
      { type: "p", text: "對帳時，用「實收」對照抽屜裡的現金與刷卡紀錄；想知道這段期間實際賣出多少，看「營收」。退貨會在退貨當天從營收扣回。" },
    ],
    related: ["on-account", "pre-orders", "report-periods"],
  },
  {
    slug: "report-periods",
    category: "reports",
    question: "報表可以看哪些期間？",
    keywords: ["報表", "期間", "本週", "本月", "今年", "自選區間", "日期", "熱銷排行", "統計"],
    content: [
      { type: "p", text: "報表上方可以選今日、昨日、本週、本月、今年、全部時間，或用「自選區間」挑開始與結束日。本週依裝置設定的每週起始日計算，本月與今年從 1 號、1 月 1 日算起，選項旁會顯示實際涵蓋的日期。「全部時間」從店裡第一筆交易算起。" },
      { type: "p", text: "選單一天時，趨勢圖是每小時的柱狀圖；多天的期間依長度以日、週、月或年為一格。" },
      { type: "p", text: "熱銷排行卡只列前 5 名，點卡片或「查看全部」可以看該期間每一項有銷售的商品，依扣掉退貨後的數量排序。" },
      { type: "p", text: "Pro 方案在期間列右側多了「銷售比較」，可以拿這段期間跟上一段或去年同期比，詳見「進階報表（Pro）可以看什麼？」。" },
      { type: "note", text: "這些日曆期間是 2.4 起的設計；更早的版本是「今日／7 天／30 天／全部時間」這類往回推的天數。如果你看到的還是舊選項，請到 App Store 更新 DingPOS。" },
    ],
    related: ["advanced-reports", "revenue-vs-cash", "profit-not-tracked"],
  },
  {
    slug: "advanced-reports",
    category: "reports",
    since: "3.0",
    question: "進階報表（Pro）可以看什麼？",
    keywords: ["進階報表", "pro", "銷售比較", "去年同期", "熱力圖", "時段", "滯銷", "庫存估值", "回購率", "點數"],
    content: [
      { type: "p", text: "進階報表不是另一個畫面，而是直接長在「報表」頁上，跟著上方選的期間一起切換：" },
      {
        type: "list",
        items: [
          "銷售比較：期間列右側選「去年同期」或跟上一段期間比（單日比上週同一天、本週比上週、本月比上個月、今年比去年、自選區間比前面同樣天數）。實收那一格列出差額與成長率，營收走勢圖多一條較淡的比較線。期間還沒結束時，比較期間也切在同一個時刻。",
          "星期 × 時段：銷售走勢的標頭切到「星期 × 時段」，看一週七天、每小時的熱力圖，顏色越深賣得越多，可以切營收或訂單數；開了銷售比較時還能看哪些時段變多、哪些變少。",
          "滯銷品：商品排行卡的標頭切到「滯銷品」，由賣最少的排到最多，旁邊是目前庫存與最後一次賣出的日期，從沒賣過的標「從未售出」。預設只看有庫存的商品。",
          "回購率：服務顧客那一格的最後一行，是這段期間有消費的會員中，累計消費兩次以上的比例。",
          "目前狀況：庫存估值（目前庫存 × 目前成本）、所選期間的每一筆庫存異動，以及顧客手上還沒兌換的點數與最多能折抵的金額。這一區是目前的餘額，不隨期間切換。",
        ],
      },
      { type: "p", text: "沒有 Pro 時，這五個位置各帶一個小鎖，點了會看到升級說明；報表原本的內容照常可以看。進階報表讀的是店裡本來就有的資料，所以 Pro 到期只會把報表收起來，資料不會少。" },
      { type: "note", text: "員工看進階報表沿用「報表」權限；庫存估值的金額另外需要「看成本與毛利」權限。" },
    ],
    related: ["report-periods", "inventory-tracking", "staff-permissions"],
  },
  {
    slug: "profit-not-tracked",
    category: "reports",
    question: "沒填商品成本，報表毛利怎麼算？",
    keywords: ["成本", "毛利", "報表", "未追蹤", "利潤"],
    content: [
      { type: "p", text: "成本是選填欄位。沒填成本的商品會在報表中標示為「未追蹤毛利」，並從毛利計算中排除——營收照常計入，只有毛利不計。" },
      { type: "p", text: "想看完整的毛利報表，回到商品編輯頁補上成本即可，之後的訂單就會納入計算。毛利以折扣後的實收金額計算。" },
    ],
    related: ["report-periods", "purchase-orders"],
  },

  // ── 促銷與會員 ──────────────────────────────────────────────
  {
    slug: "create-promotion",
    category: "promotion",
    question: "如何建立促銷活動？",
    keywords: ["促銷", "活動", "滿額", "買一送一", "優惠", "折扣碼", "happy hour"],
    content: [
      { type: "p", text: "到「設定 → 優惠活動」建立。支援的類型包括：" },
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

  // ── 備份與資料 ──────────────────────────────────────────────
  {
    slug: "backup-data",
    category: "backup",
    question: "如何備份資料？",
    keywords: ["備份", "icloud", "google drive", "dropbox", "雲端", "快照"],
    content: [
      { type: "p", text: "到「設定 → 雲端備份」，從 iCloud、Google Drive、Dropbox 中選一個並完成授權，之後隨時可以手動觸發備份。用 iCloud 的話，這台 iPad 要登入 iCloud、開啟 iCloud 雲碟，並允許 DingPOS 使用。" },
      { type: "p", text: "備份存進你自己的雲端帳號。每個雲端只保留最新的一份：資料快照與商品照片各一個檔案，每次備份都會覆蓋上一份。" },
      { type: "note", text: "因為新的備份會蓋掉舊的，如果你懷疑資料已經出錯（例如誤刪了大量商品），先不要按備份，寫信給我們一起看怎麼處理。" },
    ],
    related: ["transfer-new-ipad", "undo-restore", "data-after-delete"],
  },
  {
    slug: "icloud-not-connected",
    category: "backup",
    since: "3.0",
    question: "iCloud 備份顯示「未連線」怎麼辦？",
    keywords: ["icloud", "未連線", "連不上", "icloud 雲碟", "icloud drive", "備份失敗"],
    content: [
      { type: "p", text: "DingPOS 只有在 iCloud 真的能用時，才會顯示為已連線。顯示「未連線」時，請到 iPad 的「設定」確認三件事：" },
      {
        type: "steps",
        items: [
          "已經登入 Apple 帳號。",
          "iCloud 雲碟（iCloud Drive）已開啟。",
          "iCloud 雲碟允許 DingPOS 使用。",
        ],
      },
      { type: "p", text: "都開好之後回到 DingPOS 的「雲端備份」，iCloud 就會顯示為已連線。備份會存在 iCloud 雲碟裡 DingPOS 自己的資料夾。" },
      { type: "note", text: "3.0 以前的版本 iCloud 備份無法使用，每次都會出現「Backup.SyncError 錯誤 0」。請先到 App Store 更新 DingPOS。" },
    ],
    related: ["backup-data", "transfer-new-ipad"],
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
          "新 iPad：到「設定 → 雲端備份」連接同一個雲端帳號，選擇還原。",
        ],
      },
      { type: "p", text: "按「還原」會先開一張預覽：並排這台 iPad 與快照的商品、訂單、顧客筆數，並逐筆列出還原後會消失的訂單。按下確認之前，本機資料完全不動。快照如果是較新版本的 DingPOS 建立的，會請你先更新 App。商品照片會一併還原。" },
      { type: "note", text: "還原會用備份完整取代這台 iPad 上的資料：這台 iPad 在備份之後才建立的訂單會消失。請確認連到的是正確的雲端帳號；還原錯了，可以「回到還原前」。" },
    ],
    related: ["backup-data", "undo-restore", "data-after-delete"],
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
    slug: "launch-failure",
    category: "backup",
    since: "3.0",
    question: "App 開啟時顯示「無法開啟店家資料」怎麼辦？",
    keywords: ["無法開啟", "打不開", "閃退", "當機", "資料庫", "開不了", "店家資料", "crash"],
    content: [
      { type: "p", text: "請不要刪除 App。這個畫面代表 App 讀不到店裡的資料，但資料仍然保存在這台 iPad 上；刪除 App 會連同資料一起刪掉。" },
      { type: "p", text: "先按「重試」，成功就會照常進入 App。如果還是一樣，按「聯絡客服」告訴我們，我們會協助找回資料。這個畫面本身不會搬動或刪除任何檔案。" },
      { type: "note", text: "最常見的原因是還原到一半時 App 被關掉。3.0 以前的版本遇到這種情況會一開就閃退；更新到 3.0 之後，會改停在這個說明畫面。" },
    ],
    related: ["data-after-delete", "undo-restore"],
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
  {
    slug: "import-csv",
    category: "backup",
    since: "2.3",
    question: "可以從其他 POS 或 Excel 匯入商品與銷售紀錄嗎？",
    keywords: ["匯入", "csv", "excel", "試算表", "轉移", "換系統", "批次", "歷史銷售", "import"],
    content: [
      { type: "p", text: "可以。到「設定 → 資料匯入」，選擇要匯入商品還是銷售，再挑一個 CSV 檔（Excel 或 Google 試算表都能另存成 CSV）。" },
      {
        type: "steps",
        items: [
          "檔案會以表格呈現。常見的中英文欄位名稱會自動對應，對不上的欄位點一下就能改。",
          "表格裡的值可以直接點來修改，不用回去改檔案。",
          "按「確認」開始檢查，有問題的列會標紅並說明原因；銷售匯入可以選擇跳過有錯的訂單。",
          "處理完需要你決定的項目（例如同名商品、對到多位顧客），看過摘要再按「開始匯入」。",
        ],
      },
      {
        type: "list",
        items: [
          "匯入的銷售依交易日期排入，照店裡設定的幣別與稅制重新計算，不會動到庫存，也不發迎新點數。",
          "顧客以電話或 email 對應既有顧客，對不到就建立新的。",
          "匯入的訂單會標示「匯入於」與來源單號，不能作廢或退貨。",
          "有錯的列可以匯出成標好原因的 CSV，修好再匯入一次；重複的資料會自動跳過。",
        ],
      },
      { type: "note", text: "資料匯入目前是 Beta 功能，單檔上限 50,000 列或 20 MB。匯入前建議先做一次雲端備份；遇到匯不進去或結果不對，請從匯入畫面的「問題回報」告訴我們。" },
    ],
    related: ["backup-data", "transfer-new-ipad", "product-variants"],
  },
  {
    slug: "undo-restore",
    category: "backup",
    since: "3.0",
    question: "還原錯了怎麼辦？可以回到還原前嗎？",
    keywords: ["還原", "回到還原前", "復原", "挑錯快照", "還原紀錄", "資料不見", "undo"],
    content: [
      { type: "p", text: "可以。每次從雲端還原，被取代的本機資料都會留成一份「還原前副本」。到「設定 → 雲端備份」，卡片上寫著上次還原的時間與來源，按「回到還原前」，看過預覽、確認後，資料就切回還原前的樣子，App 會重新載入。" },
      {
        type: "list",
        items: [
          "回到還原前本身也算一次還原，會把被取代的資料再留一份，所以反悔了再按一次就切回來。",
          "副本只留最近一份，下一次還原會取代它。",
          "只回復資料：快照之後才新增的商品，圖片會顯示為缺圖。",
        ],
      },
      { type: "p", text: "想查誰在什麼時候、從哪份快照還原過，在同一頁點「查看還原紀錄」：每一次還原的時間、操作者、來源、前後的商品／訂單／顧客筆數，以及被移除的每一筆訂單。紀錄存在這台 iPad 上，不會跟著還原被換掉。" },
      { type: "note", text: "還原預覽與回到還原前是所有方案都能用的功能；查看還原紀錄是 Pro 功能。沒有 Pro 時紀錄照樣會寫（只是不記操作者），之後訂閱 Pro 就看得到。" },
    ],
    related: ["transfer-new-ipad", "backup-data", "activity-log"],
  },

  // ── 員工與權限 ──────────────────────────────────────────────
  {
    slug: "staff-accounts",
    category: "staff",
    since: "3.0",
    question: "如何建立員工帳號、切換操作者？",
    keywords: ["員工", "店員", "店長", "帳號", "pin", "操作者", "換人", "經手人", "交班"],
    content: [
      { type: "p", text: "點側欄的「員工」。第一次進去要先建立店主：輸入姓名與 4 位數 PIN。之後新增員工、修改權限都需要這組 PIN，請記住它——忘記無法重設。" },
      {
        type: "steps",
        items: [
          "在「員工」點「新增員工」，填姓名、選角色（店長或店員），設一組 4 位數 PIN。",
          "側欄底部和結帳畫面右上角會顯示目前操作者。換班時點一下，選自己的名字、輸入自己的 PIN 就換人。",
          "之後每張訂單、每筆款項、庫存與點數異動都記下經手人，訂單列表與明細看得到；作廢的單另外記作廢者。",
        ],
      },
      { type: "p", text: "員工離職時用「停用此員工」，歷史紀錄完整保留，需要時可以重新啟用。改名不影響舊單，舊單顯示的是當時的姓名。" },
      { type: "note", text: "員工是 Pro 方案的功能（試用期間也能用）。失去 Pro 後，員工資料與每張單的經手人都會保留，新的單記為店主；重新訂閱 Pro 就恢復。" },
    ],
    related: ["staff-permissions", "activity-log", "free-trial"],
  },
  {
    slug: "owner-pin-forgotten",
    category: "staff",
    since: "3.0",
    question: "忘記店主 PIN 怎麼辦？",
    keywords: ["pin", "忘記", "密碼", "重設", "店主", "找回", "解鎖"],
    content: [
      { type: "p", text: "店主 PIN 無法重設，我們的客服也沒有辦法幫你解開。PIN 和店裡的資料存在一起，所以刪掉 App 重新安裝、再從雲端還原，也會帶回同一組 PIN。" },
      { type: "p", text: "建立店主和每次更改店主 PIN 時，畫面都會提醒「請記住這組 PIN。忘記將無法重設。」建議把它記在只有你拿得到的地方。" },
      { type: "p", text: "忘記店主 PIN 之後，需要店主 PIN 的操作就無法進行，例如新增或修改員工、修改角色權限、查看操作紀錄。員工仍然可以用自己的 PIN 繼續結帳與處理日常工作。" },
      { type: "note", text: "員工忘記自己的 PIN 沒關係：店主可以在「員工」幫他重設。" },
    ],
    related: ["staff-accounts", "staff-permissions"],
  },
  {
    slug: "staff-permissions",
    category: "staff",
    since: "3.0",
    question: "員工權限與主管核准怎麼運作？",
    keywords: ["權限", "核准", "主管", "折扣上限", "店員", "店長", "成本", "角色"],
    content: [
      { type: "p", text: "權限只有兩種狀態：允許、需核准——沒有硬性禁止。店員碰到需核准的動作時，畫面會請一位對這項是「允許」的在職同事選自己的名字、輸入 PIN 放行。" },
      {
        type: "list",
        items: [
          "動作類（庫存手動調整、商品管理、超過折扣上限的結帳）：核准一次只放行這一次。",
          "檢視類（看成本與毛利、報表、設定、備份與還原）：核准後解鎖到切換操作者或 App 進背景為止。",
          "折扣上限看的是手動折扣，結帳時檢查一次；促銷自動套用的折扣與點數折抵不算在內。",
        ],
      },
      { type: "p", text: "出廠設定：店長除了「備份與還原」之外都是允許、折扣不限；店員每一項都需核准、折扣上限 10%。店主一律允許，不能修改。要調整的話，到「員工 → 角色權限」按「編輯」，改完一次儲存，所有人立即套用。" },
      { type: "note", text: "作廢、退貨、掛帳、進貨刻意不設權限，只記錄經手人；事後想查，用「操作紀錄」。" },
    ],
    related: ["staff-accounts", "activity-log", "apply-discounts"],
  },
  {
    slug: "activity-log",
    category: "staff",
    since: "3.0",
    question: "怎麼查是誰作廢了單、調了庫存或改了價格？",
    keywords: ["操作紀錄", "稽核", "誰改的", "作廢", "改價", "調庫存", "刪除商品", "核准紀錄", "log"],
    content: [
      { type: "p", text: "用「操作紀錄」。在「員工」頁右上角點「操作紀錄」，輸入店主 PIN 後，由新到舊列出店裡的敏感操作：作廢、退貨、手動調庫存、主管核准、員工與權限變更、店主 PIN 變更、商品改價（售價與成本）與商品刪除。一般結帳不列入。" },
      {
        type: "list",
        items: [
          "每一筆寫出對象、誰在幾點幾分做了什麼、以及結果，例如「M 售價 $390 → $350」。",
          "可以依員工（含已停用的）、動作類型與今日／本週／本月篩選。",
          "點一筆指向訂單、商品或顧客的紀錄，會直接打開它的明細。",
          "訂單明細、商品詳情與員工資料也各有入口，只列跟它有關的紀錄。",
          "刪掉的商品在紀錄裡仍看得到名稱與當時的售價。",
        ],
      },
      { type: "note", text: "所有方案都照樣記錄，查看才是 Pro 功能，所以 Pro 到期期間的紀錄，重新訂閱後都看得到。紀錄會隨雲端備份一起走。" },
    ],
    related: ["staff-accounts", "staff-permissions", "undo-restore"],
  },

  // ── 訂閱與費用 ──────────────────────────────────────────────
  {
    slug: "free-trial",
    category: "subscription",
    question: "免費試用怎麼運作？",
    keywords: ["試用", "免費", "30 天", "trial"],
    content: [
      { type: "p", text: "首次安裝起 30 天內可使用 Pro 方案的全部功能，包括員工帳號、權限、操作紀錄與進階報表，不需要註冊帳號。" },
      { type: "p", text: "試用期間訂閱任一方案，試用會立即結束，從那一刻起改用你訂閱的方案。試用結束後，員工與進階報表等 Pro 功能只在訂閱 Pro 時開放。" },
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
    slug: "plans-compare",
    category: "subscription",
    since: "3.0",
    question: "Lite、Standard、Pro 方案差在哪？",
    keywords: ["方案", "lite", "standard", "pro", "差別", "比較", "升級", "降級", "價格"],
    content: [
      { type: "p", text: "三個方案都有完整的結帳、商品、訂單（含作廢與退換貨）、報表與雲端備份，差別在經營工具：" },
      {
        type: "list",
        items: [
          "Lite：適合一個人顧攤，只需要結帳與商品管理。",
          "Standard：再加上促銷、會員點數與等級、庫存追蹤、進貨、掛帳與預購。",
          "Pro：再加上員工與權限、主管核准、操作紀錄、還原紀錄與進階報表，適合有員工的店。",
        ],
      },
      { type: "p", text: "已經訂閱 Standard，可以在訂閱頁直接升級到 Pro：付款週期與目前相同，升級立即生效，差額由 Apple 按比例計算。從 Pro 改回 Standard，則在續訂日生效。價格以 App 內顯示為準，也可以到官網的「價格」頁比較。" },
      { type: "note", text: "降級不會刪除任何資料。超出方案的功能會停用，資料保留，重新訂閱就恢復。" },
    ],
    related: ["manage-subscription", "free-trial", "staff-accounts"],
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
          "更換方案：在 DingPOS 的訂閱頁面選新方案。升級（例如 Standard 改 Pro、月繳改年繳）立即生效，差額由 Apple 按比例計算；降級到續訂日才生效。",
        ],
      },
    ],
    related: ["free-trial", "after-trial"],
  },

  // ── 促銷設定教學 ────────────────────────────────────────────
  {
    slug: "guide-threshold",
    category: "promotion-guide",
    question: "滿額折扣設定教學",
    keywords: ["滿額", "門檻", "滿千折百", "教學", "設定"],
    content: [
      { type: "p", text: "到「設定 → 優惠活動 → 新增」，選擇滿額折扣類型，依序完成：" },
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
      { type: "p", text: "先在「設定 → 會員分級」建立等級（例如金卡），再於促銷的適用對象選擇該等級；壽星優惠則是把條件設為「生日月份」。" },
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
      { type: "p", text: "新增促銷時可選三種組合型優惠：滿額／滿件送贈品（買 A 送 B）、加價購（加 X 元換購 Y）、組合價（任選 N 件 $X）。贈品與加價購需要店員確認，組合價則自動套用。" },
      { type: "p", text: "贈品與加價購不會自動改動購物車。條件符合時，收銀畫面會出現建議橫幅，店員按「接受」才會加入——這是刻意設計，因為贈品牽涉實體庫存，需要店員確認現場有貨、客人要拿。" },
      {
        type: "list",
        items: [
          "按「拒絕」後，同一車不會再跳同一檔建議；換一車或清空後會重新提示。",
          "結帳確認前若條件變動冒出新的建議，需要先「接受」或「拒絕」完才能送出訂單。",
          "贈品與加購商品加入購物車後，不會再被其他金錢折扣打折，也不計入其他促銷的門檻。",
        ],
      },
      { type: "p", text: "組合價（2.4 起自動套用）：購物車湊得成組合時，系統直接組起來並算進應付總額，不跳提示、也不能拆開。" },
      {
        type: "list",
        items: [
          "只有組起來比不組更便宜才會組；價格相同時，先組沒有其他折扣的商品，已打折的商品保留原本的折扣。",
          "哪幾件被組在一起只看購物車內容，跟刷進來的順序無關。",
          "每件成員商品底下會寫出它分到的折扣，商品列的金額是扣完優惠後的金額。",
          "結帳時會用最新的價格再組一次，結果不同時會請你確認新的應付金額。",
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

  // ── 未來功能 ────────────────────────────────────────────────
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
    slug: "roadmap-monthly-settlement",
    category: "roadmap",
    question: "會有月結報表嗎？",
    keywords: ["月結", "結算", "對帳", "月報", "未付帳款", "未收帳款"],
    content: [
      { type: "p", text: "目前沒有獨立的月結報表，但對帳需要的資料都已經在 App 裡：" },
      {
        type: "list",
        items: [
          "報表選「本月」，看當月的營收、實收、毛利與付款方式分布。",
          "供應商月結的進貨，集中在進貨的「未付帳款」，可以整月結清。",
          "顧客的掛帳，集中在「訂單 → 未收帳款」，可以整月結清。",
        ],
      },
      { type: "p", text: "如果你需要一份可以匯出或列印的月結報表，歡迎來信告訴我們需要哪些欄位，我們會依照需求人數決定開發順序。" },
    ],
    related: ["revenue-vs-cash", "purchase-orders", "on-account"],
  },
];
