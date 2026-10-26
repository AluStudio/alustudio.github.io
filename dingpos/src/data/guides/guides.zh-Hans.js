// DingPOS guides — zh-Hans pack. Guides are acquisition articles written for
// one market (fees, laws and payment brands differ by country), so a pack is
// NOT a translation of en or zh-Hant: each language lists only the guides
// written for the markets that read it, and a language without a pack has no
// guides section. This pack is written by hand for mainland China; it is not
// generated from zh-Hant (`npm run zh-hans` never reads guides) and not touched
// by `npm run l10n`. Rules: docs/specs/seo-aeo.md §获客文章.
// Checked by scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("CN")
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
  nav: "经营指南",
  title: "小店经营指南",
  subtitle: "收款、成本和毛利怎么算，写给自己看店的老板。",
  meta_description: "写给小店老板的经营指南：扫码和刷卡手续费怎么算、会吃掉多少毛利，附公式、试算表和资料来源。",
  back: "全部指南",
  related_title: "延伸阅读",
  sources_title: "资料来源",
  checked: "最后核实：{{date}}",
  cta_title: "用 iPad 收银，自动估算每种付款方式的手续费",
  cta_text: "DingPOS 是给小店用的 iPad 收银系统，可以免费试用 30 天，没有抽成。",
  cta_button: "在 App Store 下载",
  markets: { CN: "中国大陆" },
};

export const articles = [
  {
    slug: "payment-processing-fees-china",
    market: "CN",
    checked: "2026-10-25",
    title: "商家收款码手续费多少？微信、支付宝、刷卡费率一览，算算吃掉多少毛利",
    summary: "微信支付、支付宝商户的标准费率是 0.6%，微信支付经服务商申请优惠费率可低至 0.2%，刷卡按合同约定。手续费吃的是毛利：卖 100 元、毛利 30 元的商品，按 0.6% 扣走毛利的 2%。附算式、月度试算和对账方法。",
    content: [
      { type: "p", text: "微信支付和支付宝向商户收的标准费率都是 0.6%，从每笔收款里直接扣；经服务商申请的微信支付优惠费率，官方公布的区间是 0.2% 到 0.6%；POS 机刷卡没有统一价，看你和收单机构的合同。手续费按收款金额算，真正被吃掉的却是毛利：一件卖 100 元、进价 70 元的商品，按 0.6% 扣 0.6 元，是这笔 30 元毛利的 2%。" },

      { type: "h2", text: "各种收款方式，商家要付多少手续费？" },
      { type: "p", text: "下表是 2026 年 10 月查到的公开信息，实际以你的合同和结算账单为准。" },
      {
        type: "table",
        head: ["收款方式", "商家手续费", "说明"],
        rows: [
          ["现金", "0", "没有收款费用"],
          ["微信支付商户号", "0.6%", "餐饮、零售的标准费率。符合条件的小微商户打 9 折，目前公布到 2027 年 9 月 30 日"],
          ["支付宝当面付", "0.6%", "余额、银行卡、花呗付款都是这个费率"],
          ["服务商或银行的聚合收款码", "按合同约定", "微信支付公布的服务商优惠费率区间是 0.2%–0.6%"],
          ["微信个人经营收款码", "信用卡付款 0.38%", "不需要营业执照。其他付款二选一：模式一收款免费、提现收 0.1%；模式二收款收 0.1%、提现免费"],
          ["银行卡（POS 机）", "按收单合同约定", "例如嘉善农商银行超出每月免费额度的部分：借记卡 0.405%（单笔封顶 20 元）、信用卡 0.55%"],
        ],
      },
      { type: "note", text: "微信支付的服务协议写明手续费“含税”：合同写 0.6%，被扣的就是 0.6%，不用再加税。" },

      { type: "h2", text: "手续费吃的是毛利，不是营业额" },
      { type: "p", text: "以一件卖 100 元、进价 70 元的商品为例，毛利是 30 元：" },
      {
        type: "table",
        caption: "单位：元。0.38% 和 0.55% 是假设值。“剩下”还没扣房租和人工，不是净利润。",
        head: ["", "现金", "聚合收款码 0.38%", "微信或支付宝 0.6%", "信用卡刷卡 0.55%"],
        rows: [
          ["客人付款", "100", "100", "100", "100"],
          ["手续费", "0", "0.38", "0.60", "0.55"],
          ["商家实际到账", "100", "99.62", "99.40", "99.45"],
          ["扣掉进价和手续费后剩下", "30", "29.62", "29.40", "29.45"],
          ["手续费占毛利", "0%", "1.3%", "2%", "1.8%"],
        ],
      },
      { type: "p", text: "公式是：手续费占毛利的比例 = 手续费率 ÷ 毛利率。上例毛利率 30%，0.6% ÷ 30% = 2%。毛利率越低，被吃掉的比例越高：" },
      {
        type: "table",
        caption: "表中数字是手续费占毛利的比例。",
        head: ["毛利率", "费率 0.2%", "费率 0.38%", "费率 0.6%"],
        rows: [
          ["10%", "2%", "3.8%", "6%"],
          ["15%", "1.3%", "2.5%", "4%"],
          ["20%", "1%", "1.9%", "3%"],
          ["30%", "0.7%", "1.3%", "2%"],
          ["50%", "0.4%", "0.8%", "1.2%"],
        ],
      },

      { type: "h2", text: "一个月会被扣多少？按收款组合算" },
      { type: "p", text: "每种收款方式分别算再加起来，现金是 0。假设一家店一个月的非现金收款是 8.5 万元：" },
      {
        type: "table",
        caption: "单位：元。信用卡费率是假设值；微信支付和支付宝按 0.6% 计，未计 9 折。",
        head: ["收款方式", "当月收款", "费率", "手续费"],
        rows: [
          ["微信支付", "50,000", "0.6%", "300"],
          ["支付宝", "25,000", "0.6%", "150"],
          ["信用卡刷卡", "10,000", "0.55%", "55"],
          ["合计", "85,000", "", "505"],
        ],
      },
      { type: "p", text: "这家店每月约付 505 元，一年约 6,060 元。符合小微商户条件的话，微信支付这部分打 9 折，每月少付 30 元；微信和支付宝都改走聚合收款码、谈到 0.38%，这两项从 450 元降到 285 元。" },

      { type: "h2", text: "为什么到账的钱比收银台的营业额少？" },
      { type: "p", text: "微信、支付宝和收单机构结算给你的，是扣掉手续费后的净额；收银台记的是客人付的总额，差额就是手续费。" },
      {
        type: "list",
        items: [
          "记账时，营业额按客人付的总额记，手续费另记一笔费用。",
          "到账时间不同：微信支付商户号 T+1，支付宝当面付一般实时进余额，POS 机看合同。月底对账时，留意还在路上的钱。",
          "退款时，微信支付按退款金额退回手续费，支付宝当面付也退回服务费；POS 机和聚合收款码看合同。",
        ],
      },

      { type: "h2", text: "可以向扫码、刷卡的顾客加收手续费吗？" },
      { type: "p", text: "不能。按人民银行的规定，收单机构要在协议里约束商户，不得向刷卡或扫码的客人收取或变相收取附加费用，“刷卡加 0.6%”“扫码另收手续费”都不行。反过来，2026 年 2 月 1 日起经营者也不得拒收现金或歧视现金支付。" },
      { type: "p", text: "稳妥的做法是定价时就算进去：九成营业额是扫码和刷卡、平均费率 0.6% 的话，售价多留 0.6% 左右就够了。" },

      { type: "h2", text: "要不要开通信用卡收款？算一算盈亏平衡点" },
      { type: "p", text: "加开一种付款方式值不值，公式是：需要多做的生意占这种付款收款额的比例 = 多出来的手续费率 ÷ 毛利率。以经营收款码模式一为例：零钱、储蓄卡收款不收交易费，信用卡收 0.38%。毛利率 30% 时，每 1 万元信用卡收款多扣 38 元，只要其中约 127 元（1.3%）是因为能刷信用卡才成交，就打平了。" },
      { type: "p", text: "如果客人只是把零钱、储蓄卡付款换成信用卡，手续费就是纯成本；客单价高或常有客人说“零钱不够”，多做到的生意通常超过这个比例。" },

      { type: "h2", text: "怎么知道每种收款方式实际被扣多少？" },
      { type: "p", text: "最准的数字在结算账单上：微信支付商户平台、支付宝对账中心和收单机构的对账单都列出每笔手续费。当月手续费除以交易金额，就是你实际的费率。" },
      { type: "p", text: "如果你已经用 iPad 收银，也可以让 [DingPOS](/) 帮你算。到“设置 → 付款方式”点开一个付款方式，在“手续费”填百分比、每笔固定金额，或两者都填。请填实际被扣的费率；微信支付的费率已含税，照合同填就行。" },
      { type: "p", text: "之后用这种方式收的每一笔款都会估算手续费，报表的付款方式卡会这样显示：" },
      {
        type: "list",
        items: [
          "填了手续费的付款方式，下面多一行“手续费｜净收”，就是这种方式的预估手续费和预估净收。",
          "卡片底部是所选期间的预估手续费与预估净收。",
          "设置费率之前收的款没有手续费记录，报表会标出“缺 N 笔费率”，净收显示“—”。",
        ],
      },
      { type: "p", text: "这些数字是按你填的费率估算的。DingPOS 不经手收款，也不读取支付机构的账单，实际金额以结算账单为准。设置方法见[可以记录刷卡或移动支付的手续费吗？](/support/payment-fees/)；这是 Standard 及以上方案的功能，各方案对比见[方案与价格](/pricing/)，可以先免费试用 30 天。" },
      { type: "note", text: "DingPOS 不是税控设备，也不开发票，客人要发票请照常用电子发票服务平台开具。开数电票不需要预先领用税控设备，我们也没查到要求一般小店用税控收银机的全国性规定；但主管税务机关要求你用的话，销售要记在税控系统里，不能用 DingPOS 代替。" },
    ],
    sources: [
      { label: "微信支付：入驻结算规则、行业属性及特殊资质（餐饮、零售费率 0.6%，入账周期 T+1）", url: "https://kf.qq.com/faq/220228IJb2UV220228uEjU3Q.html" },
      { label: "微信支付：优惠费率活动对照表（服务商帮子商户申请，0.2%–0.6%）", url: "https://pay.weixin.qq.com/doc/v3/merchant/4012076387" },
      { label: "财付通：关于 2026 年降费让利续期公告（小微主体手续费 9 折，至 2027 年 9 月 30 日）", url: "https://posts.tenpay.com/posts/67a8ff176ab23117001c2d344c3b340c.html" },
      { label: "微信支付：经营账户用户使用手册（经营收款码费率、两种收费模式）", url: "https://pay.weixin.qq.com/doc/user/4021837959" },
      { label: "微信支付服务协议（收款商家）第 5.1 条：微信支付手续费（含税）", url: "https://pay.weixin.qq.com/static/protocol/protocol_payment_v6.shtml" },
      { label: "微信支付：订单退款常见问题（退款时按比例退回手续费）", url: "https://pay.weixin.qq.com/doc/v3/merchant/4013071200" },
      { label: "支付宝：当面付产品介绍（费率 0.6%、实时到账、退款退回服务费）", url: "https://opendocs.alipay.com/open/00f7nr" },
      { label: "支付宝：行业标准费率（零售、餐饮 0.6%）", url: "https://cshall.alipay.com/enterprise/knowledgeDetail.htm?knowledgeId=201606132425" },
      { label: "经济参考报（2025 年 11 月 22 日）：多地银行取消支付收单“0 费率”（嘉善农商银行费率）", url: "https://www.jjckb.cn/20251122/63f4c6cb36724b30ae58737d54d782e3/c.html" },
      { label: "中国人民银行：银行卡收单业务管理办法（第十二条，不得向持卡人收取附加费用）", url: "https://www.gov.cn/zhengce/2013-07/05/5023771/files/29267552d4984ded9977582b6fec7b49.pdf" },
      { label: "中国人民银行：条码支付业务规范（试行）（第二十六条，不得向客户收取附加费用）", url: "https://www.gov.cn/gongbao/content/2018/content_5299609.htm" },
      { label: "中国人民银行等：人民币现金收付及服务规定（2026 年 2 月 1 日起施行，不得拒收现金）", url: "https://www.gov.cn/zhengce/zhengceku/202512/content_7055739.htm" },
      { label: "关于《国家税务总局关于推广应用全面数字化电子发票的公告》的解读（不再需要预先领取专用税控设备）", url: "https://www.gov.cn/zhengce/202411/content_6989160.htm" },
    ],
    related: [],
  },
];
