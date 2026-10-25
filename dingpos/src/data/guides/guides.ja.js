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
      { type: "p", text: "お店が負担するキャッシュレス決済の手数料は、クレジットカードが決済サービスの公開料率で1.98%〜3.24%（月額費用のかからないプランなら2.48%〜3.24%）、PayPayが1.98%（税別、消費税込みで2.178%）です。手数料は売上に対してかかりますが、実際に削られるのは粗利です。売価1,000円、仕入原価600円の商品をカード手数料3.24%で売ると32.4円が差し引かれ、粗利400円の8.1%にあたります。" },
      { type: "p", text: "以下では同じ数字を使って、決済手段ごとのコスト、1か月の合計、入金額がレジの売上より少ない理由、手数料をお客様に上乗せできるかどうかを順に見ていきます。" },

      { type: "h2", text: "決済手段ごとの手数料はいくら？" },
      { type: "p", text: "2026年10月時点で各社が公開している料率です。プラン、年間の決済額、業種によって変わるため、実際の料率は契約内容と振込明細で確認してください。" },
      {
        type: "table",
        head: ["決済手段", "店側の手数料", "補足"],
        rows: [
          ["現金", "0円", "決済手数料はかからない"],
          ["クレジットカード（Visa、Mastercard、JCBなど）", "1.98%〜3.24%", "Square 2.5%。Airペイは標準3.24%、条件を満たして申し込めば2.48%。STORES 決済はフリープランで2.48%〜、スタンダードプラン（月額3,300円・税込、年間契約）でVisa・Mastercard 1.98%、JCBなどは2.38%。カード会社と直接契約する場合は契約次第"],
          ["電子マネー（交通系IC、iD、QUICPay）", "約3.24%〜3.25%", "AirペイはiD・QUICPayが3.24%、交通系が2.95%＋消費税（税込約3.245%）。Squareは3.25%、STORES 決済は3.24%。カードの優遇料率は適用されない"],
          ["PayPay（PayPayと直接契約）", "1.98%＋消費税（税込2.178%）", "すべての店舗で「PayPayマイストア ライトプラン」（初期費用・月額各1,980円＋税）に加入すると、利用開始の翌月から1.60%＋消費税"],
          ["PayPay、楽天ペイ、d払い、au PAYなど（決済サービス経由）", "Airペイは2.95%＋消費税（税込約3.245%）", "料率も消費税の扱いも、決済サービスとQRコード決済の組み合わせで変わる"],
        ],
      },
      { type: "p", text: "低い料率には条件があります。Squareの2.5%は、中小企業で年間のキャッシュレス決済額が3,000万円未満などの条件を満たし、申し込んだ場合の料率です。Airペイの2.48%（決済手数料ディスカウントプログラム）は、ブランドごとの審査があり、直近1年の決済額がVisaで2,000万円以下、Mastercardで1,000万円以下などの上限があります。STORES 決済は年間決済額が3,000万円以上になると、カード手数料が2.98%（スタンダードプラン）または3.24%（フリープラン）になります。以下の試算では、条件なしで適用されるAirペイの標準料率3.24%を、高めのカード手数料の例として使います。" },

      { type: "h2", text: "手数料が削るのは売上ではなく粗利" },
      { type: "p", text: "手数料は決済金額に対してかかるので、料率だけ見れば2〜3%です。しかし、お店に残るのは売価から原価を引いた粗利で、手数料はその粗利から出ていきます。" },
      { type: "p", text: "売価1,000円、仕入原価600円の商品で考えます。1点あたりの粗利は400円です。" },
      {
        type: "table",
        caption: "単位：円。カード2.5%はSquare、3.24%はAirペイの標準料率を想定。「残り」は家賃や人件費を引く前の金額で、利益ではありません。",
        head: ["", "現金", "PayPay 2.178%", "カード 2.5%", "カード 3.24%"],
        rows: [
          ["お客様の支払い", "1,000", "1,000", "1,000", "1,000"],
          ["決済手数料", "0", "21.78", "25", "32.4"],
          ["入金額", "1,000", "978.22", "975", "967.6"],
          ["原価と手数料を引いた残り", "400", "378.22", "375", "367.6"],
          ["手数料が粗利に占める割合", "0%", "5.4%", "6.3%", "8.1%"],
        ],
      },
      { type: "p", text: "この割合は「手数料が粗利に占める割合 ＝ 手数料率 ÷ 粗利率」で直接求められます。上の例は粗利率が400 ÷ 1,000 ＝ 40%なので、3.24% ÷ 40% ＝ 8.1%です。粗利率が低いほど、同じ手数料でも削られる割合は大きくなります。" },
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
      { type: "p", text: "粗利率20%の商品をカード3.24%で売ると、粗利100円ごとに約16円が手数料に消えます。粗利率が50%を超える商品なら、影響はずっと小さくなります。" },

      { type: "h2", text: "1か月でいくら引かれる？決済手段の内訳で計算する" },
      { type: "p", text: "毎月の手数料は、月の売上全体に1つの料率を掛けて出すのではありません。決済手段ごとに計算して合計し、現金の分は0円です。キャッシュレスの売上が月30万円のお店で考えます。" },
      {
        type: "table",
        caption: "単位：円。カードと交通系電子マネーはAirペイの標準料率（カード3.24%、交通系2.95%＋消費税）、PayPayは直接契約でライトプラン未加入（税込2.178%）を想定。1円未満は切り捨て。",
        head: ["決済手段", "月の売上", "手数料率", "手数料"],
        rows: [
          ["クレジットカード", "150,000", "3.24%", "4,860"],
          ["PayPay", "100,000", "2.178%", "2,178"],
          ["交通系電子マネー", "50,000", "3.245%", "1,622"],
          ["合計", "300,000", "", "8,660"],
        ],
      },
      { type: "p", text: "このお店は毎月約8,700円、1年で約10万4,000円を手数料として払っています。3つの売上と料率を自分のお店の数字に置き換えれば、同じ方法で月の手数料を出せます。" },

      { type: "h2", text: "入金額がレジの売上より少ないのはなぜ？" },
      { type: "p", text: "決済サービスは、手数料を差し引いた金額をお店の口座に振り込みます。レジにはお客様が支払った総額が記録されるので、両者が合わないのは正常で、その差額が手数料です。" },
      {
        type: "list",
        items: [
          "帳簿では、売上はお客様が支払った総額で計上し、手数料は「支払手数料」として別に計上するのが一般的です。こうすれば、キャッシュレス払いが増えても売上が小さく見えることはなく、手数料の額もはっきりします。",
          "売上は当日には入金されません。Squareは三井住友銀行・みずほ銀行なら翌営業日、その他の金融機関なら毎週金曜日。Airペイはみずほ・三菱UFJ・三井住友の各銀行で月6回、その他の金融機関で月3回。PayPayは月末締めで、最短で翌日の振込です。月末に照合するときは、まだ入金されていない売上に注意してください。",
          "早く受け取ると、別の費用がかかることがあります。Squareの即時入金は送金額の1.5%、PayPayの早期振込は売上金額の0.38%に加えて振込手数料（PayPay銀行20円、その他の金融機関200円、いずれも税別）、STORES 決済の手動入金は売上合計が10万円未満だと振込手数料200円です。これも決済のコストとして数えておきましょう。",
          "返品・取消のときの扱いは決済手段で違います。PayPayは全額返金なら手数料がかからず、一部返金なら残額で計算し直されます。交通系電子マネーはSquareやAirペイでは取り消せないため現金で返すことになり、Squareはその場合の手数料は戻らないと案内しています。ほかのサービスは規約や契約で確認してください。",
        ],
      },

      { type: "h2", text: "手数料をカード払いのお客様に上乗せできる？" },
      { type: "p", text: "できません。禁じているのは、カード会社や決済サービスと結ぶ加盟店規約です。JCBの加盟店規約（第11条）は、現金払いなど他の支払い方法のお客様と異なる金額をカード会員に請求することを禁止しており、JCBは上乗せを確認した場合、事実確認のうえ是正指導するとしています。Squareの一般利用規約（第12条）も、手数料を上乗せするなど現金客と異なる代金を請求することを禁じています。「カード払いは3%増し」は、まさにこの上乗せにあたります。ほかのカード会社や決済サービスと契約している場合も、自分の加盟店規約を確認してください。" },
      { type: "p", text: "PayPayも、会計時に手数料を上乗せして請求することと、現金払いのときだけ割引することを、加盟店規約で禁止しています。" },
      { type: "p", text: "手数料を取り戻すなら、値付けの段階で織り込むのが確実です。売上の半分がキャッシュレスで平均手数料率が3%なら、全体の価格を約1.5%上げれば手数料分をまかなえます。" },

      { type: "h2", text: "決済手数料に消費税はかかる？課税と非課税が混ざっている" },
      { type: "p", text: "カード会社が加盟店の売上債権を譲り受ける形の加盟店手数料は、国税庁の質疑応答事例で消費税が非課税とされています。Airペイ、STORES 決済もカード手数料を非課税と案内しており、Squareは決済方法にかかわらず手数料を不課税としています。" },
      { type: "p", text: "QRコード決済と交通系電子マネーは、決済サービスによって扱いが分かれます。PayPayと直接契約した場合の1.98%には消費税がかかり、Airペイでは交通系電子マネーとQRコード決済がすべて課税です。STORES 決済では、PayPay・楽天ペイ・交通系電子マネーが課税、d払いやSmartCode（au PAYなど）が非課税です。同じPayPayでも、どの決済サービス経由かで扱いが変わります。" },
      { type: "p", text: "この消費税を取り戻せるかどうかは、お店の消費税の計算方法で決まります。本則課税の課税事業者なら、適格請求書（インボイス）などを保存すれば仕入税額控除の対象になります。免税事業者（原則として、基準期間の課税売上高が1,000万円以下で、インボイス登録をしていない事業者）は消費税を納めない代わりに控除もありません。簡易課税制度では控除額を売上の消費税額にみなし仕入率を掛けて計算し、インボイス登録を機に課税事業者になったお店の2割特例（個人事業者の2027年・2028年は3割特例）では納税額を売上の消費税額の2割（3割）とします。どちらも、手数料に払った消費税の額は納税額に影響しません。これらにあたるお店は、手数料を税込みの料率で見積もってください。" },

      { type: "h2", text: "キャッシュレスを導入するべき？損益分岐点で判断する" },
      { type: "p", text: "経済産業省によると、2025年のキャッシュレス決済比率（国内指標）は58.0%で、金額の内訳はクレジットカードが82.7%、コード決済が10.2%でした。" },
      { type: "p", text: "キャッシュレスを受け付けるコストは手数料、得られるのは「キャッシュレスが使えないなら買わない」お客様の売上です。両者がつり合う条件も同じ式で出せます。必要な追加売上（キャッシュレス売上に対する割合）＝ 手数料率 ÷ 粗利率 です。" },
      { type: "p", text: "粗利率40%、カード手数料3.24%なら、カード売上10万円につき手数料は3,240円です。そのうち8,100円（8.1%）がカードを使えたからこそ生まれた売上なら、その粗利3,240円で手数料をまかなえます。" },
      { type: "p", text: "もともと現金で払っていたお客様がカードに切り替えただけなら、手数料はそのままコストになります。観光地やイベント出店のお店、「現金を持っていない」と言われることが多いお店ほど、増える売上がこの割合を超えやすくなります。" },

      { type: "h2", text: "自分のお店の実際の手数料率を知るには？" },
      { type: "p", text: "いちばん正確なのは振込明細です。その月の手数料を決済金額で割れば、実際の料率が出ます。消費税込みかどうかも明細でわかります。決済手段ごとに分けて記録すれば、どれがいちばん高くついているかが月末にわかります。" },
      { type: "p", text: "iPadでレジをしているなら、POSレジに計算させる方法もあります。[DingPOS](/)では「設定」→「支払い方法」で、支払い方法ごとに「決済手数料」を入力できます（パーセント、1回あたりの固定額、またはその両方）。入力すると、「統計」の「支払い方法」カードに支払い方法ごとの手数料と入金見込額が表示されます。PayPayなら、1.98%に消費税を加えた2.178%のように、実際に差し引かれる税込みの料率を入力します。DingPOSは決済を処理せず、決済事業者の明細も読み込まないため、これらは入力した手数料率にもとづく概算です。実際の金額は振込明細で確認してください。" },
      { type: "p", text: "設定方法は[カード・モバイル決済の手数料を管理できますか？](/support/payment-fees/)をご覧ください。Standard以上のプランで使える機能で、プランの違いは[料金](/pricing/)で比較できます。30日間の無料トライアルで試せます。" },
    ],
    sources: [
      { label: "Square：決済手数料（対面2.5%〜、入金スケジュール、即時入金1.5%）", url: "https://squareup.com/jp/ja/payments/our-fees" },
      { label: "Squareヘルプ：Squareの手数料について（2.5%の適用条件、手数料は不課税）", url: "https://squareup.com/help/jp/ja/article/5068-what-are-square-s-fees" },
      { label: "Square：電子マネー決済（交通系IC・iD・QUICPay 3.25%）", url: "https://squareup.com/jp/ja/payments/e-money" },
      { label: "Squareヘルプ：お客さまへの払い戻しを管理する（交通系ICは現金で払い戻し、手数料は戻らない）", url: "https://squareup.com/help/jp/ja/article/6116-process-refunds" },
      { label: "Square：決済手数料に消費税はかかる？（支払手数料の仕訳、Squareの手数料は不課税）", url: "https://squareup.com/jp/ja/townsquare/payment-processing-fees-consumption-tax" },
      { label: "Airペイ FAQ：決済手数料・振込手数料（料率と課税区分）", url: "https://faq.airpayment.jp/hc/ja/articles/218985588" },
      { label: "Airペイ：決済手数料ディスカウントプログラム（主要カード6ブラン2.48%、適用条件）", url: "https://airregi.jp/payment/discountprogram/" },
      { label: "Airペイ FAQ：入金（振込）サイクルと振込金額の確認方法", url: "https://faq.airpayment.jp/hc/ja/articles/219379377" },
      { label: "Airペイ FAQ：アプリで決済した取引の取消・修正方法（交通系電子マネーは取消不可）", url: "https://faq.airpayment.jp/hc/ja/articles/216578218" },
      { label: "STORES 決済：手数料率・初期費用・決済端末費用（ブランド別料率、入金方法）", url: "https://stores.fun/payments/pricing" },
      { label: "STORES Magazine：各サービスで使える支払い方法ガイド（STORES 決済の手数料の課税区分）", url: "https://stores.fun/magazine/articles/stores-service-payment-summary" },
      { label: "PayPay：費用と振込サイクル", url: "https://paypay.ne.jp/store/cost/" },
      { label: "PayPay 加盟店様向けヘルプ：各種利用料一覧", url: "https://paypay.ne.jp/help-merchant/b0544/" },
      { label: "PayPay 加盟店様向けヘルプ：返金した場合、決済システム利用料はどうなる？", url: "https://paypay.ne.jp/help-merchant/b0569/" },
      { label: "PayPay 加盟店様向けヘルプ：決済システム利用料をPayPayユーザーに転嫁してもよいか？", url: "https://paypay.ne.jp/help-merchant/b0603/" },
      { label: "JCB加盟店規約（2026年4月1日改定版）第11条", url: "https://www.jcb.co.jp/kiyaku/pdf/kameiten0705_05.pdf" },
      { label: "JCB よくあるご質問：JCBカードで支払うと、手数料がかかると言われました。", url: "https://j-faq.jcb.co.jp/faq/show/391?site_domain=default" },
      { label: "Square 一般利用規約 第12条（手数料の上乗せ禁止）", url: "https://squareup.com/jp/ja/legal/general/ua" },
      { label: "国税庁 質疑応答事例：クレジット手数料", url: "https://www.nta.go.jp/law/shitsugi/shohi/06/02.htm" },
      { label: "国税庁 タックスアンサー No.6501 納税義務の免除", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6501.htm" },
      { label: "国税庁 タックスアンサー No.6505 簡易課税制度", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6505.htm" },
      { label: "国税庁 タックスアンサー No.6498 適格請求書等保存方式（インボイス制度、2割特例・3割特例）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6498.htm" },
      { label: "経済産業省：2025年のキャッシュレス決済比率を算出しました", url: "https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html" },
    ],
    related: [],
  },
];
