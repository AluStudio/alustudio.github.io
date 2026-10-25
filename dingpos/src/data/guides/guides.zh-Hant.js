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
  markets: { TW: "台灣" },
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
];
