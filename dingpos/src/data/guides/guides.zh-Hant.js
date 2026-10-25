// DingPOS guides — zh-Hant pack. Guides are acquisition articles written for
// one market (fees, laws and payment brands differ by country), so a pack is
// NOT a translation of en: each language lists only the guides written for
// the markets that read it, and a language without a pack has no guides
// section. zh-Hans is not generated from this pack. Rules:
// docs/specs/seo-aeo.md §獲客文章. Checked by scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("TW")
//   checked  — YYYY-MM-DD the rates and rules were last verified
//   title    — the page h1 and <title>, phrased the way people search
//   summary  — index-card text and the page's meta description (≤ 160 characters)
//   content  — blocks, opening with a paragraph that answers the title directly:
//              { type: "p" | "h2" | "note", text }
//              { type: "list" | "steps", items: [text] }
//              { type: "table", caption?, head: [text], rows: [[text]] }
//              Text may carry [label](/route/) links to a page of this
//              language (router-relative, trailing slash) or [label](https://…).
//   sources  — [{ label, url }] behind the article's figures and rules
//   related  — slugs of other guides in this pack
//
// Claims about DingPOS must match the app's code (AGENTS.md §Product Repos).

export const ui = {
  nav: "經營指南",
  title: "小店經營指南",
  subtitle: "收款、成本與毛利的算法，寫給自己顧店的老闆。",
  meta_description: "寫給小店老闆的經營指南：刷卡與行動支付手續費怎麼算、會吃掉多少毛利，附公式、試算表與資料來源。",
  back: "所有指南",
  related_title: "延伸閱讀",
  sources_title: "資料來源",
  checked: "最後查核：{{date}}",
  cta_title: "用 iPad 收銀，每種付款方式的手續費自動估算",
  cta_text: "DingPOS 是給小店用的 iPad 收銀系統，30 天免費試用，沒有抽成。",
  cta_button: "在 App Store 下載",
  markets: { TW: "台灣", HK: "香港" },
};

export const articles = [
  {
    slug: "card-and-mobile-payment-fees",
    market: "TW",
    checked: "2026-10-24",
    title: "刷卡、LINE Pay、街口手續費，店家抽幾趴？算算吃掉多少毛利",
    summary: "LINE Pay 店家手續費 3% 未稅，含稅約 3.15%；刷卡與街口依合約，常見約 1.65%–3%。手續費吃的是毛利：賣 500 元、賺 200 元的商品，LINE Pay 扣掉的約是毛利的 7.9%。附算式、月成本試算與對帳方法。",
    content: [
      { type: "p", text: "LINE Pay 向店家收 3% 未稅的手續費，加上 5% 營業稅約 3.15%；信用卡刷卡機和街口支付的費率依合約而定，常見說法落在 1.65% 到 3% 之間。手續費從營業額扣，但真正被吃掉的是毛利：一件賣 500 元、進貨 300 元的商品，用 LINE Pay 收款會被扣約 15.75 元，等於這筆 200 元毛利的 7.9%。" },
      { type: "p", text: "下面用同一組數字，算給你看每種收款方式的成本、一個月合計多少、為什麼入帳比營業額少，以及手續費能不能轉給客人。" },

      { type: "h2", text: "各種收款方式，店家要付多少手續費？" },
      { type: "p", text: "下表是 2026 年 10 月查到的公開資訊。費率會因合約、交易量和申請管道不同，實際以你的合約和撥款明細為準。" },
      {
        type: "table",
        head: ["收款方式", "店家手續費", "說明"],
        rows: [
          ["現金", "0", "沒有金流費用"],
          ["信用卡（刷卡機）", "依收單合約，常見約 1.65%–3%", "沒有公開的統一牌價。例如街口的行動刷卡機公告「刷卡手續費 1.65% 起」；另外可能有月租或押金"],
          ["LINE Pay", "3% 未稅，含稅約 3.15%", "LINE Pay 對媒體表示「統一公告的費率為 3%」；客人用信用卡、LINE POINTS 或 iPASS MONEY 付款，費率都一樣"],
          ["街口支付", "依合約，常見說法約 2.2%–2.5%", "街口官方商家頁寫「部分店家費率略有浮動」，沒有公開單一費率"],
          ["Apple Pay、Google Pay", "算在刷卡機的合約裡", "這兩種是透過刷卡機感應的信用卡交易，不是另一筆費用"],
        ],
      },
      { type: "p", text: "「未稅」的意思是手續費另外加 5% 營業稅：3% 乘上 1.05，實際被扣 3.15%。合約上寫的是未稅費率時，估算成本請用含稅的數字。" },
      { type: "note", text: "查定課徵的小規模營業人（免用統一發票的小店）拿到手續費發票並按時申報，可以用發票上稅額的 10% 扣減查定稅額（營業稅法第 25 條）。以 100 元的 LINE Pay 交易來說，手續費的稅是 0.15 元，可以扣減的只有 0.015 元，估算時用 3.15% 就夠了。" },

      { type: "h2", text: "手續費吃的是毛利，不是營業額" },
      { type: "p", text: "手續費按收款金額計算，所以帳面上看起來只有 2% 或 3%。但店家真正賺的是售價扣掉進貨成本後的毛利，手續費是從毛利裡拿走的。" },
      { type: "p", text: "用一件賣 500 元、進貨成本 300 元的商品當例子，這筆毛利是 200 元：" },
      {
        type: "table",
        caption: "單位：新台幣元。刷卡與街口的費率是假設值。「剩下」還沒扣房租、人事和其他開銷，不是淨利。",
        head: ["", "現金", "刷卡 2%", "街口 2.5%", "LINE Pay 3.15%"],
        rows: [
          ["客人付款", "500", "500", "500", "500"],
          ["手續費", "0", "10", "12.5", "15.75"],
          ["店家實際入帳", "500", "490", "487.5", "484.25"],
          ["扣成本與手續費後剩下", "200", "190", "187.5", "184.25"],
          ["手續費占毛利", "0%", "5%", "6.3%", "7.9%"],
        ],
      },
      { type: "p", text: "手續費占毛利的比例，可以直接用一個算式算：手續費占毛利的比例 = 手續費率 ÷ 毛利率。上面的例子，毛利率是 200 ÷ 500 = 40%，LINE Pay 的 3.15% ÷ 40% ≈ 7.9%。毛利率越低，同樣的手續費吃掉的比例越高：" },
      {
        type: "table",
        caption: "格內是手續費占毛利的比例。",
        head: ["毛利率", "費率 2%", "費率 2.5%", "費率 3.15%"],
        rows: [
          ["20%", "10%", "12.5%", "15.8%"],
          ["30%", "6.7%", "8.3%", "10.5%"],
          ["40%", "5%", "6.3%", "7.9%"],
          ["50%", "4%", "5%", "6.3%"],
          ["60%", "3.3%", "4.2%", "5.3%"],
        ],
      },
      { type: "p", text: "菸酒、飲料這類毛利率 20% 上下的商品，收 LINE Pay 等於每賺 100 元要交出約 16 元；手作、服飾這類毛利率 50% 以上的商品，影響小得多。" },

      { type: "h2", text: "一個月會被扣多少？用收款組合算" },
      { type: "p", text: "每月的手續費不是拿整個月的營業額乘上一個費率，而是每種收款方式各自計算再加總，現金那部分是 0。假設一個月的非現金收款有 10 萬元：" },
      {
        type: "table",
        caption: "單位：新台幣元。",
        head: ["收款方式", "當月收款", "費率", "手續費"],
        rows: [
          ["刷卡", "40,000", "2%", "800"],
          ["LINE Pay", "40,000", "3.15%", "1,260"],
          ["街口", "20,000", "2.5%", "500"],
          ["合計", "100,000", "", "2,560"],
        ],
      },
      { type: "p", text: "這家店每月約付 2,560 元手續費，一年約 30,720 元。把三個收款金額和費率換成你自己的數字，就能算出你的店一個月付多少。" },

      { type: "h2", text: "為什麼入帳的錢比收銀機的營業額少？" },
      { type: "p", text: "LINE Pay、街口和刷卡機撥款給店家時，撥的是已經扣掉手續費的淨額。收銀機記的是客人付的總額，所以兩邊對不起來是正常的，差額就是手續費。" },
      {
        type: "list",
        items: [
          "記帳時，營業額照客人付的總額記，手續費另外記成一筆費用。這樣營業額不會因為客人改用行動支付而變少，手續費也看得出來。",
          "撥款不是當天到帳，各家的撥款週期寫在合約裡。月底對帳時，要留意有些收款還在途中。",
          "客人退貨時，手續費退不退要看合約。有些金流會按退款金額退回百分比的部分，每筆固定費用通常不退；LINE Pay 和街口沒有公開的商家退款規則，簽約時可以問業務。",
        ],
      },

      { type: "h2", text: "手續費可以加在刷卡客人身上嗎？" },
      { type: "p", text: "信用卡不行。聯合信用卡處理中心的特約商店規範寫明，店家不得把手續費轉嫁給持卡人，違反的店家會被解約，而且其他收單機構半年內不得和它簽約。標「刷卡另加 3%」或「刷卡價、現金價」都屬於這種情況。" },
      { type: "p", text: "LINE Pay 對媒體表示，合作商店不能加收手續費；發現店家把費用轉嫁給消費者，會先了解並勸導。街口與其他行動支付的規定寫在各自的商家合約裡，加收之前先確認。" },
      { type: "p", text: "比較穩當的做法，是訂價時就把手續費算進去：如果非現金收款占一半、平均費率 3%，全店售價只要多抓約 1.5%，就能打平手續費。" },

      { type: "h2", text: "要不要收行動支付？用打平點判斷" },
      { type: "p", text: "收行動支付的成本是手續費，收益是那些「不能用 LINE Pay 就不買」的客人。兩者打平的條件也是同一個算式：需要多做的生意占非現金營業額的比例 = 手續費率 ÷ 毛利率。" },
      { type: "p", text: "以毛利率 40%、LINE Pay 3.15% 來說，每 1 萬元的 LINE Pay 收款會被扣 315 元。只要其中有 787.5 元（7.9%）是因為能用 LINE Pay 才成交的，賺到的毛利就能付清這 315 元手續費。" },
      { type: "p", text: "如果你的客人大多本來就會付現，只是改用 LINE Pay，那手續費就是純成本；如果你在市集、觀光區，或客人常說「沒帶現金」，多做到的生意通常就超過這個比例。" },

      { type: "h2", text: "怎麼知道每種收款方式實際被扣多少？" },
      { type: "p", text: "最準的數字在每月的撥款明細上：把當月的手續費除以交易金額，就是你實際的費率，含稅與否也看得出來。每種收款方式各記一欄，月底就能看出哪一種最貴。" },
      { type: "p", text: "如果你已經用 iPad 收銀，也可以讓收銀系統幫你算。在 [DingPOS](/) 的「設定 → 付款方式」替每種付款方式填上手續費率（百分比、每筆固定金額，或兩者都填），報表的付款方式卡就會列出每種方式的預估手續費和預估淨收。DingPOS 不經手金流，也不讀取金流商的帳單，這些數字是依你填的費率估算的，實際金額仍以撥款明細為準。" },
      { type: "p", text: "設定方式見[可以記錄刷卡或行動支付的手續費嗎？](/support/payment-fees/)。這是 Standard 以上方案的功能，各方案比較見[方案與價格](/pricing/)，可以先免費試用 30 天。" },
    ],
    sources: [
      { label: "Yahoo 新聞：LINE Pay 回應店家加收手續費（費率 3%、不能加收）", url: "https://tw.news.yahoo.com/%E7%8D%A8%E5%AE%B6-%E5%90%88%E7%90%86%E5%97%8E-%E7%94%A8linepay%E4%BB%98%E6%AC%BE-%E5%BA%97%E5%AE%B6%E5%91%8A%E7%9F%A5-%E5%8A%A0%E6%94%B62-123300697.html" },
      { label: "街口支付：店家收款（「部分店家費率略有浮動」）", url: "https://www.jkopay.com/application/store" },
      { label: "街口行動刷卡機（刷卡手續費 1.65% 起）", url: "https://event.jkos.com.tw/promotions/A/mpos/index.html" },
      { label: "聯合信用卡處理中心：特店作業說明（不得轉嫁手續費）", url: "https://www.nccc.com.tw/wps/wcm/connect/zh/home/AuthorizedStoreArea/CustomerService" },
      { label: "全國法規資料庫：加值型及非加值型營業稅法第 25 條", url: "https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=G0340080&flno=25" },
    ],
    related: [],
  },
  {
    slug: "payment-processing-fees-hong-kong",
    market: "HK",
    checked: "2026-10-25",
    title: "八達通、PayMe、碌卡商戶手續費幾多？計清楚食你幾多毛利",
    summary: "八達通商戶手續費標準為 1.5%，PayMe for Business 為 1.2%，碌卡依合約，一般約 1.5% 至 3%。手續費食的是毛利：賣 HK$200、毛利 HK$80 的貨，以碌卡 2.5% 計，就扣走毛利的 6.3%。附算式、每月試算與對數方法。",
    content: [
      { type: "p", text: "八達通向商戶收取的標準手續費是 1.5%（新商戶有 1.3% 優惠），PayMe for Business 經 App 收款是 1.2%；碌卡沒有劃一價錢，要看你和收單機構的合約，易辦事列出的一般範圍約 1.5% 至 3%。手續費按收款金額計算，真正被吃掉的卻是毛利：一件賣 HK$200、成本 HK$120 的貨，以碌卡 2.5% 計會被扣 HK$5，已是這筆 HK$80 毛利的 6.3%。" },
      { type: "p", text: "下面用同一組數字，逐項計算每種收款方式的成本、一個月合共幾多、為甚麼入賬比營業額少，以及手續費可否轉嫁給客人。" },

      { type: "h2", text: "香港常見的收款方式，商戶要付幾多手續費？" },
      { type: "p", text: "下表是 2026 年 10 月在各營運商官網及公開報道查到的資料。費率會因合約、行業、交易量和開戶時間而不同，實際以你的合約和結算紀錄為準。" },
      {
        type: "table",
        head: ["收款方式", "商戶手續費", "說明"],
        rows: [
          ["現金", "0", "沒有收款費用"],
          ["信用卡（Visa、Mastercard、銀聯等）", "依合約，一般約 1.5%–3%", "沒有公開的劃一價錢。易辦事的商戶指南指費率視乎行業、交易量、卡種及收單機構；另外可能有機租、按金或安裝費"],
          ["Stripe Terminal（有公開牌價的例子）", "每筆 2.5% + HK$0.50", "本地卡的價錢；海外卡另加 0.5%，用手機 Tap to Pay 收款每次授權再加 HK$0.80"],
          ["八達通", "標準 1.5%，新商戶 1.3%", "八達通讀寫器按交易收費，2026 年 12 月 31 日或之前開戶的新商戶享 1.3%；商用版八達通 App 在把款項轉到銀行時按轉賬金額收費（最低 HK$1），新開戶首 6 個月免收，之後 1.3%"],
          ["PayMe for Business", "App 收款 1.2%", "經 API 或 POS 終端機收款是 1.5%；把款項轉到銀行不收費。要有滙豐商業戶口"],
          ["AlipayHK", "依服務而定，線下低至 0%", "官網只寫「線下交易費可低至 0%」，沒有公開單一費率"],
          ["WeChat Pay HK", "中小商戶每年收款額 HK$50 萬以內免手續費", "2025 年 6 月公布的優惠；現時是否仍適用、超出後怎樣收費，要向 WeChat Pay HK 查詢"],
          ["轉數快（FPS）", "視乎你的銀行", "轉數快本身不向商戶收費，但收款服務由銀行或儲值支付工具提供，收費要向它們查詢"],
          ["易辦事（EPS）", "依合約", "沒有公開的劃一價錢"],
        ],
      },
      { type: "p", text: "客人用 Apple Pay、Google Pay 拍手機，走的仍是信用卡收單，費用計在你的收單合約裡，不是另一筆收費。例如 Stripe Terminal 的牌價就同時適用於信用卡、扣賬卡和電子錢包。" },
      { type: "note", text: "八達通在 2024 年 7 月公布，由同年 8 月起「永久豁免」商用版八達通 App 商戶每月首 HK$10,000 交易額的轉賬費。現時官網的收費頁和優惠頁都沒有列出這項安排，我們未能確認現時是否仍然適用，本文的試算也沒有計入；開戶時宜向八達通確認。" },
      { type: "p", text: "香港沒有增值稅或商品及服務稅，所以手續費不用另外加稅：合約寫 1.5%，被扣的就是 1.5%。手續費屬於為賺取應評稅利潤而付出的開支，一般可以在計算利得稅時扣除（《稅務條例》第 16 條）。" },

      { type: "h2", text: "手續費食的是毛利，不是營業額" },
      { type: "p", text: "手續費按收款金額計算，所以賬面上只是 1% 至 3%。但商戶真正賺到的是售價減去入貨成本後的毛利，手續費是從毛利裡拿走的。" },
      { type: "p", text: "用一件賣 HK$200、入貨成本 HK$120 的貨做例子，這筆毛利是 HK$80：" },
      {
        type: "table",
        caption: "單位：港幣。信用卡 2.5% 是假設值。「剩下」還未扣租金、人工和其他開支，不是純利。",
        head: ["", "現金", "PayMe 1.2%", "八達通 1.5%", "信用卡 2.5%", "Stripe Terminal 2.5% + $0.50"],
        rows: [
          ["客人付款", "200", "200", "200", "200", "200"],
          ["手續費", "0", "2.40", "3.00", "5.00", "5.50"],
          ["商戶實際收到", "200", "197.60", "197.00", "195.00", "194.50"],
          ["扣除成本和手續費後剩下", "80", "77.60", "77.00", "75.00", "74.50"],
          ["手續費佔毛利", "0%", "3%", "3.8%", "6.3%", "6.9%"],
        ],
      },
      { type: "p", text: "手續費佔毛利的比例，可以直接用一條算式計：手續費佔毛利的比例 = 手續費率 ÷ 毛利率。上面的例子毛利率是 80 ÷ 200 = 40%，碌卡的 2.5% ÷ 40% ≈ 6.3%。毛利率越低，同樣的手續費吃掉的比例越高：" },
      {
        type: "table",
        caption: "格內是手續費佔毛利的比例。",
        head: ["毛利率", "費率 1.2%", "費率 1.5%", "費率 2.5%", "費率 3%"],
        rows: [
          ["20%", "6%", "7.5%", "12.5%", "15%"],
          ["30%", "4%", "5%", "8.3%", "10%"],
          ["40%", "3%", "3.8%", "6.3%", "7.5%"],
          ["50%", "2.4%", "3%", "5%", "6%"],
          ["60%", "2%", "2.5%", "4.2%", "5%"],
        ],
      },
      { type: "p", text: "如果你的貨毛利率只有 20%，碌卡 2.5% 等於每賺 HK$100 毛利要交出 HK$12.5；毛利率 60% 的貨，同一個費率只拿走 HK$4.2。" },
      { type: "p", text: "每筆固定收費對細額交易影響最大。Stripe Terminal 的 HK$0.50 放在 HK$200 的交易上，等於費率多了 0.25%；放在 HK$20 的交易上，就多了 2.5%。" },

      { type: "h2", text: "一個月會被扣幾多？用收款組合計" },
      { type: "p", text: "每月的手續費不是用全月營業額乘一個費率，而是每種收款方式各自計算再加起來，現金那部分是 0。假設一個月的電子收款有 HK$80,000：" },
      {
        type: "table",
        caption: "單位：港幣。信用卡費率是假設值；八達通以讀寫器標準 1.5% 計，未計商用版 App 的豁免；轉數快假設你的銀行不收費；WeChat Pay HK 假設全年收款在優惠上限以內。",
        head: ["收款方式", "當月收款", "費率", "手續費"],
        rows: [
          ["信用卡", "30,000", "2.5%", "750"],
          ["八達通", "25,000", "1.5%", "375"],
          ["PayMe for Business", "10,000", "1.2%", "120"],
          ["轉數快", "10,000", "0", "0"],
          ["WeChat Pay HK", "5,000", "0（假設每年收款在 HK$50 萬以內）", "0"],
          ["合計", "80,000", "", "1,245"],
        ],
      },
      { type: "p", text: "這間店每月約付 HK$1,245 手續費，一年約 HK$14,940。把各項收款金額和費率換成你自己的數字，就能算出你的店一個月付幾多。" },

      { type: "h2", text: "為甚麼入賬的錢比收銀機的營業額少？" },
      { type: "p", text: "收單機構和電子錢包把錢結算給你時，給的是已扣除手續費的淨額。收銀機記的是客人付的總額，兩邊對不上數是正常的，差額就是手續費。" },
      {
        type: "list",
        items: [
          "記賬時，營業額照客人付的總額記，手續費另外記成一項開支。這樣營業額不會因為客人改用電子支付而變少，手續費也看得清楚。稅務局要求商戶以中文或英文備存足夠的收入及開支紀錄（包括銀行結單和收據），保留最少 7 年（《稅務條例》第 51C 條），每月的結算報表也建議一併保存。",
          "每種收款方式到賬的時間不同：商用版八達通 App 可經轉數快 24 小時即時把款項轉到銀行戶口；PayMe for Business 可即時轉賬，不收費用；AlipayHK 在待結算款項滿 HK$20 後，於 1 個工作天內轉賬，商戶大約 2 至 3 個工作天收到；信用卡依合約，可能是 T+2、T+3 或其他周期。月尾對數時，要留意有些款項仍在途中。",
          "客人退貨時，手續費退不退要看營運商。PayMe for Business 的條款寫明，退款成功後會退回該筆交易已付的手續費（或相應部分）；Stripe 則不退回原交易的手續費。其他營運商我們找不到公開的退款手續費規則，簽約時可以問清楚。",
        ],
      },

      { type: "h2", text: "可以向碌卡的客人加收手續費嗎？" },
      { type: "p", text: "信用卡不可以。Visa 的規則（1.5.5.2）寫明，除非當地法例明文要求容許商戶收附加費，否則商戶不得在標價或正常價錢之上另加任何金額；這一條只為新西蘭、加拿大、歐洲和美國訂了例外，香港不在其中。同一套規則（1.5.5.1）亦禁止商戶以最低或最高簽賬額作為接受信用卡的條件。消委會 2008 年曾向 Visa、萬事達卡和美國運通查詢，三者都表示收「碌卡」手續費和設最低簽賬額都違反卡組織的指引；發卡銀行亦表示會處理卡主索回手續費的申請，但卡主要有收據等證明。所以「現金價、碌卡加 3%」或「$100 以下不設碌卡」都不符規定。" },
      { type: "p", text: "PayMe for Business 同樣不可以：它的商戶條款第 8.2(b)(v) 條寫明，商戶不得就透過 PayMe 進行的付款向客人收取任何費用或附加費。八達通、AlipayHK 和 WeChat Pay HK 的商戶協議沒有公開，我們未能確認它們對加收的規定；未確認不等於可以加收，想加收之前先看清合約或問營運商。" },
      { type: "p", text: "較穩妥的做法，是定價時已把手續費計算在內：假如一半營業額來自電子支付、平均費率 2%，全店售價調高約 1% 就可以抵銷手續費。" },

      { type: "h2", text: "應否接受某種付款方式？用收支平衡點判斷" },
      { type: "p", text: "接受一種付款方式的成本是手續費，收益是那些「不收這種付款就不買」的客人。兩者打和的條件也是同一條算式：需要多做的生意佔該付款方式營業額的比例 = 手續費率 ÷ 毛利率。" },
      { type: "p", text: "以毛利率 40%、碌卡 2.5% 計，每 HK$10,000 的碌卡收款會被扣 HK$250。只要其中有 HK$625（6.25%）是因為可以碌卡才成交，這部分賺到的毛利就足夠付清這 HK$250 手續費。" },
      { type: "p", text: "如果客人本來就會付現金，只是轉用電子支付，手續費就是純成本；如果你做遊客生意，或者熟客習慣拍卡、常說沒帶現金，多做到的生意就較容易超過這個比例。八達通公布的市場調查顯示，在 15 至 64 歲市民中，八達通的滲透率達 98%。" },

      { type: "h2", text: "怎樣知道每種收款方式實際被扣幾多？" },
      { type: "p", text: "最準確的數字在每月的結算報表或月結單上：把當月的手續費除以交易金額，就是你實際的費率。每種收款方式各記一欄，月尾就看得出哪一種最貴。" },
      { type: "p", text: "如果你已經用 iPad 收銀，也可以讓收銀系統代你計算。在 [DingPOS](/) 的「設定 → 付款方式」替每種付款方式填上手續費率（百分比、每筆固定金額，或兩者都填），報表的付款方式卡就會列出每種方式的預估手續費和預估淨收。香港沒有增值稅，照合約上的費率填就可以。DingPOS 不處理收款，也不讀取營運商的結算報表，這些數字是按你填的費率估算的，實際金額仍以結算紀錄為準。" },
      { type: "p", text: "設定方法見[可以記錄刷卡或行動支付的手續費嗎？](/support/payment-fees/)。這是 Standard 或以上方案的功能，各方案比較見[方案與價格](/pricing/)，可以先免費試用 30 天。" },
    ],
    sources: [
      { label: "八達通：商用版八達通 App 手續費（銀行賬戶資金轉賬費）標準收費", url: "https://www.octopus.com.hk/tc/business/become-a-merchant/business-octopus-app/fee/index.html" },
      { label: "八達通：商業客戶（讀寫器標準手續費 1.5%、2026 年底前開戶新商戶 1.3%、15 至 64 歲滲透率 98%）", url: "https://www.octopus.com.hk/tc/business/index.html" },
      { label: "八達通：商用版八達通 App 推廣優惠（首 6 個月免手續費、之後 1.3%）", url: "https://www.octopus.com.hk/tc/business/become-a-merchant/business-octopus-app/promotion/index.html" },
      { label: "八達通：商用版八達通 App（經轉數快 24/7 即時轉賬到銀行）", url: "https://www.octopus.com.hk/business-octopus-app" },
      { label: "八達通新聞稿（2024 年 7 月 9 日）：豁免每月首 HK$10,000 交易額的轉賬費", url: "https://www.octopus.com.hk/en/corporate/media/press-releases/2024/20240709.html" },
      { label: "PayMe for Business：收費（App 1.2%、API 及 POS 1.5%、轉賬免費）", url: "https://payme.hsbc.com.hk/zh-hk/business-homepage" },
      { label: "PayMe for Business 條款及細則（第 2.2(d) 條退款時退回手續費、第 8.2(b)(v) 條不得向客戶加收費用）", url: "https://payme.hsbc.com.hk/files/PayMe-for-Business-New-T&Cs-TC.pdf" },
      { label: "AlipayHK：商戶常見問題（線下交易費低至 0%、到賬時間）", url: "https://www.alipayhk.com/zh/merchants/setup-and-support/frequently-asked-questions/" },
      { label: "香港01：WeChat Pay HK 中小商戶每年收款首 50 萬元免手續費", url: "https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/60247185/wechat-pay-hk-%E6%8E%A8%E9%9B%B6%E6%89%8B%E7%BA%8C%E8%B2%BB%E5%84%AA%E6%83%A0-%E4%BA%94%E4%B8%80%E9%BB%83%E9%87%91%E5%91%A8%E5%85%A7%E5%9C%B0%E5%AE%A2%E5%9C%A8%E6%B8%AF%E7%94%A8%E9%87%8F%E5%8D%873%E5%80%8D" },
      { label: "香港銀行同業結算有限公司：轉數快商戶常見問題（轉數快不向商戶收費）", url: "https://fps.hkicl.com.hk/chi/fps/merchants/frequently_asked_questions.php" },
      { label: "易辦事：信用卡機申請指南（商戶扣單費一般約 1.5% 至 3%）", url: "https://www.eps.com.hk/chi/credit-card-machine-guide.html" },
      { label: "易辦事：EPS 與信用卡機比較（信用卡結算周期）", url: "https://www.eps.com.hk/chi/electronic-payment-comparison.html" },
      { label: "Stripe 香港：收費（Terminal 每筆 2.5% + HK$0.50）", url: "https://stripe.com/en-hk/pricing" },
      { label: "Stripe：退款不退回原交易的手續費", url: "https://docs.stripe.com/refunds" },
      { label: "Visa Core Rules（2026 年 4 月版）1.5.5.1 最低簽賬額、1.5.5.2 Surcharges", url: "https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf" },
      { label: "消委會《選擇》月刊第 382 期（2008 年）：不應收取信用卡手續費或設最低簽帳額", url: "https://www.consumer.org.hk/tc/press-release/20080815-3" },
      { label: "PwC Worldwide Tax Summaries：香港沒有增值稅、商品及服務稅或銷售稅", url: "https://taxsummaries.pwc.com/hong-kong-sar/corporate/other-taxes" },
      { label: "稅務局：利得稅（可扣除的開支）", url: "https://www.ird.gov.hk/chi/tax/bus_pft.htm" },
      { label: "稅務局：保存業務紀錄（《稅務條例》第 51C 條）", url: "https://www.ird.gov.hk/chi/tax/bus_rke.htm" },
    ],
    related: [],
  },
];
