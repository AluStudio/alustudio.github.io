// DingPOS guides — ja pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of en or zh-Hant: each language lists only the guides written
// for the markets that read it, and a language without a pack has no guides
// section. This pack is not touched by `npm run l10n`. Rules:
// docs/specs/seo-aeo.md §獲客文章. Checked by scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("JP")
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
  nav: "経営ガイド",
  title: "小さなお店の経営ガイド",
  subtitle: "決済手数料、原価、粗利の計算を、自分でお店を切り盛りする店主向けにまとめました。",
  meta_description: "小さなお店の店主向けの経営ガイド。キャッシュレス決済の手数料の相場や粗利への影響を、計算式・試算表・出典つきで解説します。",
  back: "ガイド一覧",
  related_title: "関連ガイド",
  sources_title: "出典",
  checked: "最終確認日：{{date}}",
  cta_title: "iPadのPOSレジで、支払い方法ごとの決済手数料を自動で概算",
  cta_text: "DingPOSは小さなお店向けのiPad用POSレジアプリです。30日間の無料トライアルがあり、DingPOSが取引手数料を取ることはありません。",
  cta_button: "App Storeでダウンロード",
  markets: { JP: "日本" },
};

export const articles = [
  {
    slug: "payment-processing-fees-japan",
    market: "JP",
    checked: "2026-10-25",
    title: "クレジットカード・PayPayの手数料は店側いくら？相場と粗利への影響を計算",
    summary: "店側のカード手数料は公開料率で1.98%〜3.24%、PayPayは1.98%（税別）。手数料は粗利から出ていきます。売価1,000円・原価600円なら、3.24%で粗利の8.1%。相場表、月の試算、消費税、入金額の確認方法つき。",
    content: [
      { type: "p", text: "お店が負担するキャッシュレス決済の手数料は、クレジットカードが公開料率で1.98%〜3.24%、PayPayが1.98%（税別、消費税込みで2.178%）です。手数料は売上にかかりますが、実際に削られるのは粗利です。売価1,000円、仕入原価600円の商品をカード手数料3.24%で売ると32.4円が差し引かれ、粗利400円の8.1%にあたります。" },

      { type: "h2", text: "決済手段ごとの手数料はいくら？" },
      { type: "p", text: "2026年10月時点の公開料率です。実際の料率は契約と振込明細で確認してください。" },
      {
        type: "table",
        head: ["決済手段", "店側の手数料", "補足"],
        rows: [
          ["現金", "0円", "決済手数料はかからない"],
          ["クレジットカード（Visa、Mastercard、JCBなど）", "1.98%〜3.24%", "Square 2.5%、Airペイ 3.24%（条件つきで2.48%）、STORES 決済 2.48%〜（スタンダードプランのVisa・Mastercardは1.98%）"],
          ["電子マネー（交通系IC、iD、QUICPay）", "約3.24%〜3.25%", "Square 3.25%、STORES 決済 3.24%、Airペイ 3.24%（交通系は2.95%＋消費税）"],
          ["PayPay（直接契約）", "1.98%＋消費税（税込2.178%）", "全店舗でライトプラン（1店舗月額1,980円＋税）に加入すると翌月から1.60%＋消費税"],
          ["PayPay、楽天ペイ、d払いなど（決済サービス経由）", "Airペイは2.95%＋消費税（税込約3.245%）", "料率も消費税の扱いもサービスごとに違う"],
        ],
      },
      { type: "p", text: "低い料率には、プランや申し込み、年間の決済額などの条件があります。以下の試算では、条件なしで適用されるAirペイの標準料率3.24%を使います。" },
      { type: "note", text: "Airペイ・Squareのカード手数料には消費税がかかりませんが、PayPayとの直接契約などにはかかります。免税事業者、簡易課税、2割特例のお店はこの消費税が納税額に影響しないので、税込みの料率で見積もってください。" },

      { type: "h2", text: "手数料が削るのは売上ではなく粗利" },
      { type: "p", text: "料率は2〜3%でも、お店に残るのは売価から原価を引いた粗利で、手数料はそこから出ていきます。売価1,000円、仕入原価600円（粗利400円）で比べます。" },
      {
        type: "table",
        caption: "単位：円。カード2.5%はSquare、3.24%はAirペイの標準料率。「残り」は家賃や人件費を引く前の金額。",
        head: ["", "現金", "PayPay 2.178%", "カード 2.5%", "カード 3.24%"],
        rows: [
          ["お客様の支払い", "1,000", "1,000", "1,000", "1,000"],
          ["決済手数料", "0", "21.78", "25", "32.4"],
          ["入金額", "1,000", "978.22", "975", "967.6"],
          ["原価と手数料を引いた残り", "400", "378.22", "375", "367.6"],
          ["手数料が粗利に占める割合", "0%", "5.4%", "6.3%", "8.1%"],
        ],
      },
      { type: "p", text: "この割合は「手数料率 ÷ 粗利率」で求められます。上の例は粗利率40%なので、3.24% ÷ 40% ＝ 8.1%です。" },
      {
        type: "table",
        caption: "表の数字は、手数料が粗利に占める割合。",
        head: ["粗利率", "手数料 2.178%", "手数料 2.5%", "手数料 3.24%"],
        rows: [
          ["20%", "10.9%", "12.5%", "16.2%"],
          ["30%", "7.3%", "8.3%", "10.8%"],
          ["40%", "5.4%", "6.3%", "8.1%"],
          ["50%", "4.4%", "5%", "6.5%"],
          ["60%", "3.6%", "4.2%", "5.4%"],
        ],
      },
      { type: "p", text: "粗利率が低いほど影響は大きく、粗利率20%の商品をカード3.24%で売ると、粗利100円ごとに約16円が消えます。" },

      { type: "h2", text: "1か月でいくら引かれる？決済手段の内訳で計算する" },
      { type: "p", text: "月の手数料は決済手段ごとに計算して合計します。現金の分は0円です。キャッシュレスの売上が月30万円のお店で考えます。" },
      {
        type: "table",
        caption: "単位：円。カードと交通系はAirペイの標準料率、PayPayは直接契約（ライトプラン未加入）。1円未満は切り捨て。",
        head: ["決済手段", "月の売上", "手数料率", "手数料"],
        rows: [
          ["クレジットカード", "150,000", "3.24%", "4,860"],
          ["PayPay", "100,000", "2.178%", "2,178"],
          ["交通系電子マネー", "50,000", "3.245%", "1,622"],
          ["合計", "300,000", "", "8,660"],
        ],
      },
      { type: "p", text: "このお店は毎月約8,700円、1年で約10万4,000円を手数料として払っています。自分の数字に置き換えれば、同じように計算できます。" },

      { type: "h2", text: "入金額がレジの売上より少ないのはなぜ？" },
      { type: "p", text: "決済サービスは手数料を差し引いて振り込みます。レジの売上はお客様が支払った総額なので、合わないのは正常で、その差額が手数料です。" },
      {
        type: "list",
        items: [
          "帳簿では、売上は支払われた総額で、手数料は「支払手数料」として別に計上するのが一般的です。",
          "通常の入金は当日ではなく、時期は決済サービスごとに違います。月末の照合では未入金の売上に注意してください。",
        ],
      },

      { type: "h2", text: "手数料をカード払いのお客様に上乗せできる？" },
      { type: "p", text: "できません。JCBの加盟店規約やSquareの利用規約は、現金払いのお客様と異なる金額をカード払いのお客様に請求することを禁じていて、「カード払いは3%増し」はこれにあたります。PayPayも、会計時の手数料の上乗せと現金払いだけの割引を禁止しています。ほかの会社と契約している場合も、自分の規約を確認してください。" },
      { type: "p", text: "手数料を取り戻すなら、値付けで織り込むのが確実です。売上の半分がキャッシュレスで平均手数料率が3%なら、全体の価格を約1.5%上げればまかなえます。" },

      { type: "h2", text: "キャッシュレスを導入するべき？損益分岐点で判断する" },
      { type: "p", text: "キャッシュレスのコストは手数料、得られるのは「キャッシュレスが使えないなら買わない」お客様の売上です。キャッシュレス売上のうち必要な追加売上の割合も、同じ「手数料率 ÷ 粗利率」です。" },
      { type: "p", text: "粗利率40%、カード手数料3.24%なら、カード売上10万円の手数料は3,240円です。10万円のうち8,100円（8.1%）がカードを使えたから生まれた売上なら、その粗利でまかなえます。現金客が切り替えただけなら、手数料はそのままコストです。観光地やイベント出店など「現金がない」と言われやすいお店ほど、この割合を超えやすくなります。" },

      { type: "h2", text: "自分のお店の実際の手数料率を知るには？" },
      { type: "p", text: "いちばん正確なのは振込明細です。その月の手数料を決済金額で割れば実際の料率が出て、税込みかどうかもわかります。決済手段ごとに記録すれば、どれが高いかがわかります。" },
      { type: "p", text: "iPadでレジをしているなら、[DingPOS](/)で概算を出すこともできます。「設定」→「支払い方法」で支払い方法を選び、「決済手数料」にパーセント、1回あたりの固定額、またはその両方を入力します。料率は実際に差し引かれる税込みの数字を入れます。PayPayの標準料率（2.178%）なら、入力できるのは小数点以下2桁までなので2.18%と入れます。" },
      { type: "p", text: "すると「統計」の「支払い方法」カードが次のようになります。" },
      {
        type: "list",
        items: [
          "手数料を設定した支払い方法ごとに、「手数料 · 入金見込額」の行が加わります。",
          "「支払い方法」カードの下部には、期間全体の概算手数料と入金見込額が出ます。",
          "手数料率を設定する前に受け取った支払いは「手数料率未設定 N件」と表示され、入金見込額は「—」になります。",
        ],
      },
      { type: "p", text: "どれも入力した手数料率にもとづく概算です。DingPOSは決済を処理せず、決済事業者の明細も読み込まないため、実際の金額は振込明細で確認してください。" },
      { type: "p", text: "設定方法は[カード・モバイル決済の手数料を管理できますか？](/support/payment-fees/)をご覧ください。Standard以上のプランの機能で、プランの違いは[料金](/pricing/)で比較できます。30日間の無料トライアルで試せます。" },
    ],
    sources: [
      { label: "Square：決済手数料（対面2.5%〜）", url: "https://squareup.com/jp/ja/payments/our-fees" },
      { label: "Squareヘルプ：Squareの手数料について（2.5%の適用条件、手数料は不課税）", url: "https://squareup.com/help/jp/ja/article/5068-what-are-square-s-fees" },
      { label: "Square：電子マネー決済（交通系IC・iD・QUICPay 3.25%）", url: "https://squareup.com/jp/ja/payments/e-money" },
      { label: "Square：決済手数料に消費税はかかる？（支払手数料の仕訳）", url: "https://squareup.com/jp/ja/townsquare/payment-processing-fees-consumption-tax" },
      { label: "Airペイ FAQ：決済手数料・振込手数料（料率と課税区分）", url: "https://faq.airpayment.jp/hc/ja/articles/218985588" },
      { label: "Airペイ：決済手数料ディスカウントプログラム（主要カード6ブラン2.48%、適用条件）", url: "https://airregi.jp/payment/discountprogram/" },
      { label: "STORES 決済：手数料率・初期費用・決済端末費用（ブランド別料率、入金方法）", url: "https://stores.fun/payments/pricing" },
      { label: "PayPay：費用と振込サイクル", url: "https://paypay.ne.jp/store/cost/" },
      { label: "PayPay 加盟店様向けヘルプ：決済システム利用料をPayPayユーザーに転嫁してもよいか？", url: "https://paypay.ne.jp/help-merchant/b0603/" },
      { label: "JCB加盟店規約（2026年4月1日改定版）第11条", url: "https://www.jcb.co.jp/kiyaku/pdf/kameiten0705_05.pdf" },
      { label: "Square 一般利用規約 第12条（手数料の上乗せ禁止）", url: "https://squareup.com/jp/ja/legal/general/ua" },
      { label: "国税庁 タックスアンサー No.6501 納税義務の免除", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6501.htm" },
      { label: "国税庁 タックスアンサー No.6505 簡易課税制度", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6505.htm" },
      { label: "国税庁 タックスアンサー No.6498 適格請求書等保存方式（2割特例）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6498.htm" },
    ],
    related: [],
  },
];
