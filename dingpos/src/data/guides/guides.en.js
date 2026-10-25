// DingPOS guides — en pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of another language: en lists only the guides written for
// the English-reading markets (Australia, the US, the UK, …), each tagged
// with its market, and a language without a pack has no guides section.
// Rules: docs/specs/seo-aeo.md §獲客文章. Checked by scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("AU")
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
  nav: "Guides",
  title: "Small business guides",
  subtitle: "Payments, costs and margins, worked out for people who run their own shop.",
  meta_description: "Guides for small shop owners: what card and payment fees really cost and how much of your margin they take, with formulas, worked examples and sources.",
  back: "All guides",
  related_title: "Related guides",
  sources_title: "Sources",
  checked: "Last checked: {{date}}",
  cta_title: "Run your counter on an iPad, with fees estimated for every payment method",
  cta_text: "DingPOS is an iPad POS for small shops. It takes no cut of your sales, and you can try it free for 30 days.",
  cta_button: "Download on the App Store",
  markets: { AU: "Australia" },
};

export const articles = [
  {
    slug: "payment-processing-fees-australia",
    market: "AU",
    checked: "2026-10-25",
    title: "EFTPOS fees in Australia: what small shops pay and how much margin they cost",
    summary: "Big providers publish EFTPOS flat rates of 0.79%–1.6% per card payment, and surcharges are banned from 1 October 2026. See how much of your margin that takes.",
    content: [
      { type: "p", text: "The big providers' published flat rates for card payments in Australia sit between 0.79% and 1.6% of each sale: 0.79% at Westpac, 0.99% at CommBank (plus terminal rental), 1.4% at Zeller and 1.6% at Square. Since 1 October 2026 you can't pass that on as a card surcharge, so it comes straight out of your gross profit. On an item you sell for $50 plus GST that cost you $30, a 1.6% fee takes 80c of your $20 margin — 4% of it." },
      { type: "p", text: "The rest of this guide uses the same numbers to show what each way of paying costs you, what a month of fees adds up to, why your payouts come in under your takings, and how to find the rate you're really paying." },

      { type: "h2", text: "What do card payments cost a small shop?" },
      { type: "p", text: "These are the rates providers published as of October 2026. Flat (single-rate) plans charge the same percentage on every card. Custom or cost-plus plans charge a different rate for each card type and aren't published. Your merchant agreement and statements are what count." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No merchant fee", "Still about 15% of consumer payments by number in the RBA's 2025 survey"],
          ["Visa, Mastercard and eftpos cards on a terminal", "0.79%–1.6% on published flat rates; custom plans depend on your contract", "Westpac 0.79%; CommBank 0.99%, plus $29.50 a month for a Smart terminal; Zeller 1.4%, no rental; Square 1.6% (1.9% on some devices for accounts opened before 30 May 2024); Stripe Terminal 1.65% + 10c, plus GST unless your agreement includes it"],
          ["Apple Pay, Google Pay, Samsung Wallet", "The same rate as the card in the wallet", "A tap with a phone or watch is a card payment through your terminal, not a separate fee. Around 40% of in-person card payments were made this way in 2025"],
          ["American Express", "The same flat rate as other cards at CommBank, Zeller and Square", "Westpac's 0.79% doesn't apply to Amex or JCB"],
          ["Tap to Pay on iPhone (no terminal)", "Westpac EFTPOS Air 1.25%; Stripe adds 15c a payment to its in-person rate, plus GST", "Turns a compatible iPhone into the card reader"],
          ["Afterpay (buy now, pay later)", "Through Square: 6% + 30c plus GST, which is 6.6% + 33c", "Other ways of taking Afterpay are priced in your agreement"],
        ],
      },
      { type: "p", text: "Most flat card rates are quoted including GST: Zeller and CommBank say so on their pricing pages, and Square issues monthly tax invoices for the GST inside its fees, so Square's 1.6% is what actually leaves your account. Stripe adds GST on top of its fees unless your agreement says otherwise. Check your provider's tax invoice, and if GST is added on top, multiply the quoted rate by 1.1." },
      { type: "note", text: "If you're registered for GST, you can claim the GST in your merchant fees (1/11 of the fee) as a credit on your BAS. The fee is charged on the GST-inclusive price, so the two cancel out: 1.6% of a $55 sale is 88c, you claim 8c back, and the 80c left is 1.6% of the $50 you keep after GST. If you're not registered (GST turnover under $75,000 and you haven't opted in), you can't claim it back, but there's no GST in your prices either. Either way, work with the GST-inclusive rate." },
      { type: "p", text: "Terminal rental is part of the cost too. $29.50 a month on $10,000 of card sales adds about 0.3%, so a 0.99% plan costs about 1.3% all up." },

      { type: "h2", text: "Merchant fees come out of your margin, not your sales" },
      { type: "p", text: "A 1.6% fee sounds small because it's measured against the sale. But your shop runs on what's left after the cost of the goods, and that's where the fee comes from." },
      { type: "p", text: "Take an item you sell for $50 plus GST ($55 at the till) that costs you $30. Your gross profit is $20, a 40% margin:" },
      {
        type: "table",
        caption: "Amounts exclude GST; fees are net of the GST credit. The card rates are examples from the published range. \"Left\" is before rent, wages and other overheads, so it isn't net profit.",
        head: ["", "Cash", "Card at 1%", "Card at 1.4%", "Card at 1.6%"],
        rows: [
          ["Sale", "$50.00", "$50.00", "$50.00", "$50.00"],
          ["Cost of the item", "$30.00", "$30.00", "$30.00", "$30.00"],
          ["Merchant fee", "$0.00", "$0.50", "$0.70", "$0.80"],
          ["Left after cost and fee", "$20.00", "$19.50", "$19.30", "$19.20"],
          ["Fee as a share of gross profit", "0%", "2.5%", "3.5%", "4%"],
        ],
      },
      { type: "p", text: "The last row comes from one formula: fee as a share of gross profit = fee rate ÷ gross margin. Here that's 1.6% ÷ 40% = 4%. The thinner your margin, the bigger the bite:" },
      {
        type: "table",
        caption: "Each cell is the fee as a share of gross profit, rounded to one decimal place.",
        head: ["Gross margin", "Fee 1%", "Fee 1.4%", "Fee 1.6%"],
        rows: [
          ["20%", "5%", "7%", "8%"],
          ["30%", "3.3%", "4.7%", "5.3%"],
          ["40%", "2.5%", "3.5%", "4%"],
          ["50%", "2%", "2.8%", "3.2%"],
          ["60%", "1.7%", "2.3%", "2.7%"],
        ],
      },
      { type: "p", text: "A convenience store or bottle shop working on a 20% margin gives up 8% of its gross profit to a 1.6% fee. A gift shop or clothing store on 50% to 60% feels less than half of that." },
      { type: "p", text: "A fixed fee per transaction weighs most on small sales. Stripe Terminal's 1.65% + 10c, with GST added, is about 4% of a $5 coffee but about 2% of a $50 sale. If most of your sales are small, compare providers on your average sale, not the headline percentage." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "A month of fees isn't one rate times your turnover. Each payment method has its own rate, cash costs nothing, and the expensive methods count for more than their share of sales. Here's a shop on Square that takes $38,000 in a month:" },
      {
        type: "table",
        caption: "Amounts include GST, as customers paid them. Afterpay assumes 20 sales averaging $150.",
        head: ["Payment method", "Takings", "Rate (incl. GST)", "Fee"],
        rows: [
          ["Cash", "$5,000", "—", "$0.00"],
          ["Cards and phone wallets", "$30,000", "1.6%", "$480.00"],
          ["Afterpay", "$3,000", "6.6% + 33c", "$204.60"],
          ["Total", "$38,000", "", "$684.60"],
        ],
      },
      { type: "p", text: "Afterpay is 8% of this shop's takings but about 30% of its fees. If the shop is registered for GST, it claims 1/11 back ($62.24), so the fees really cost $622.36 a month, or about $7,470 a year. Put in your own takings and rates to get your number." },

      { type: "h2", text: "Why your payouts are smaller than your takings" },
      { type: "p", text: "Your POS records what the customer paid. Your provider pays out what's left after its fee, so the two never match, and the gap is your merchant fees." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid, and record merchant fees as a separate expense. Your sales figures then stay right when customers switch from cash to card, and you can see what the fees cost.",
          "Payouts take time. CommBank settles card sales made before 9:30 pm AEST into a CommBank business account the same day. Zeller settles nightly into a Zeller Account and the next business day into other banks. Square pays out as soon as the next day, or instantly for 1.95%. With a next-business-day payout, weekend takings arrive on Monday.",
          "A refund doesn't always give the fee back. Square and Stripe both keep the processing fee on the original payment when you refund it. Bank plans set this in your merchant agreement.",
          "Disputes cost extra: CommBank charges $30 per chargeback, and Stripe $25 per dispute, plus another $25 if you contest it yourself (refunded if you win).",
        ],
      },

      { type: "h2", text: "Can you still add a surcharge for card payments?" },
      { type: "p", text: "No. From 1 October 2026, eftpos, Mastercard and Visa ban surcharges on their credit, debit and prepaid cards, including cards issued overseas, and American Express, UnionPay and PayPal have dropped surcharging too. The RBA made the change possible and the card networks enforce it. Most large providers planned to switch surcharging off on their terminals by that date." },
      { type: "p", text: "Charges that apply however the customer pays, such as a weekend or public holiday surcharge, aren't affected. A fee that applies only to some payment methods is probably a card surcharge, whatever you call it. You can still offer a discount for paying a cheaper way." },
      { type: "p", text: "The ban covers cards. The RBA doesn't regulate surcharges on other payment methods, such as buy now, pay later, so check your provider's agreement and the ACCC's pricing guidance before adding one." },
      { type: "p", text: "That leaves your prices as the place to recover card costs. If cards and phone wallets are 85% of your takings at 1.4%, fees cost about 1.2% of sales, so prices about 1.2% higher cover them." },
      { type: "p", text: "The same date brought lower caps on interchange, the fee your provider pays the card issuer: 0.3% for consumer credit cards, with lower caps on debit too. Several banks cut their flat rates: Westpac from 1.20% to 0.79%, and CommBank from 1.1% to 0.99%. Square said its pricing would not change. If you haven't compared plans since October, now is the time." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs you its fee and earns you the sales you'd lose without it. The break-even uses the same formula: the share of that method's sales that must be extra business = fee rate ÷ gross margin." },
      { type: "p", text: "Take Afterpay at 6.6% on a 40% margin: 6.6% ÷ 40% = 16.5%. About one in six Afterpay sales has to be one you wouldn't otherwise have made, from a bigger basket or a customer who'd have walked out, for the fees to pay for themselves. The 33c fixed fee pushes that slightly higher." },
      { type: "p", text: "Cards are an easy call by comparison. At 1.4% on a 40% margin, only 3.5% of card sales need to depend on you taking cards, and most in-person payments in Australia are now made by card." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "Your merchant statement has the real number: divide the month's fees, terminal rental included, by your card takings. That's your effective rate, GST included. If your statement splits fees by card type, do it for each one and you'll see which costs you most." },
      { type: "p", text: "Then compare. In March 2026 the RBA found that small merchants on single-rate plans paid 1.4% of card sales on average, against 0.9% on unblended (cost-plus) plans, yet only 19% of small merchants were on one. The largest acquirers have to publish their average fees by merchant size every quarter, starting by 30 October 2026. From April 2027, statements must split domestic from foreign cards and card-present from card-not-present (online and phone) payments, which makes like-for-like quotes easier." },
      { type: "p", text: "On a cost-plus plan, ask whether least-cost routing is on. It sends tap payments on dual-network debit cards through whichever of the card's two networks costs you less, which for many merchants is eftpos." },
      { type: "p", text: "Lots of overseas visitors? Foreign cards usually cost more (Stripe Terminal charges 3.5% + 10c, plus GST), and the RBA's cap on their interchange only starts on 1 April 2027." },

      { type: "h2", text: "Let your POS do the sums" },
      { type: "p", text: "Australia doesn't require a certified cash register, so the POS you use is your choice. What the ATO does require is a record of every sale, kept for five years, and software that hides or deletes sales has been illegal since October 2018." },
      { type: "p", text: "If you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, give each payment method its processing fee: a percentage, a fixed amount per transaction, or both (for Afterpay through Square, 6.6% and $0.33). Use the GST-inclusive rate. The Payment Methods card on Stats then shows the estimated fee and net received for each method. DingPOS doesn't process payments or read your provider's statements, so these figures are estimates from the rates you enter, and your statement shows the actual amount." },
      { type: "p", text: "Setup is covered in [Can DingPOS track card and mobile payment fees?](/support/payment-fees/). Fee tracking is on the Standard plan and up (compare them on [Pricing](/pricing/)), and you can try everything free for 30 days." },
    ],
    sources: [
      { label: "RBA: FAQs on the removal of card payment surcharges from 1 October 2026", url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/" },
      { label: "RBA Conclusions Paper (March 2026): impact and implementation, interchange caps and dates", url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/impact-and-implementation.html" },
      { label: "RBA Conclusions Paper (March 2026): competition in card acquiring, what small merchants pay", url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/competition-in-card-acquiring-services.html" },
      { label: "RBA Bulletin (May 2026): consumer payment behaviour in Australia", url: "https://www.rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html" },
      { label: "RBA: backgrounder on least-cost routing", url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/backgrounders/backgrounder-on-least-cost-routing.html" },
      { label: "ACCC: card surcharges (business guidance)", url: "https://www.accc.gov.au/business/pricing/card-surcharges" },
      { label: "Westpac: flat transaction rate cut to 0.79% from 1 October 2026", url: "https://www.westpac.com.au/about-westpac/media/media-releases/2026/24-september/" },
      { label: "Westpac: EFTPOS fees (0.79% excludes Amex and JCB)", url: "https://www.westpac.com.au/business-banking/merchants-and-payments/eftpos/eftpos-fees/" },
      { label: "CommBank: EFTPOS terminal fees", url: "https://www.commbank.com.au/business/payments/eftpos-terminals/fees.html" },
      { label: "CommBank: single rate per transaction and same-day settlement", url: "https://www.commbank.com.au/business/payments/eftpos-terminals/fees/single-rate-per-transaction.html" },
      { label: "Zeller: pricing", url: "https://www.myzeller.com/au/pricing" },
      { label: "Square: pricing and processing fees", url: "https://squareup.com/au/en/pricing" },
      { label: "Square: fee schedule (1.6% from 30 May 2024, 1.9% for some older accounts)", url: "https://squareup.com/help/au/en/article/5068-what-are-square-s-fees" },
      { label: "Square: preparing for the end of card surcharging", url: "https://squareup.com/help/au/en/article/8680-preparing-your-business-for-end-of-card-surcharging" },
      { label: "Square: manage customer refunds", url: "https://squareup.com/help/au/en/article/5060-refund-overview" },
      { label: "Square: tax and fee reports, GST invoices", url: "https://squareup.com/help/au/en/article/7858-square-tax-reporting-and-gst-invoices-faq" },
      { label: "Stripe: pricing in Australia", url: "https://stripe.com/au/pricing" },
      { label: "Stripe: fees for refunded payments", url: "https://support.stripe.com/questions/understanding-fees-for-refunded-payments" },
      { label: "Stripe: taxes on Stripe fees for Australia-based businesses", url: "https://support.stripe.com/questions/taxes-on-stripe-fees-for-australia-based-businesses" },
      { label: "business.gov.au: register for GST", url: "https://business.gov.au/registrations/register-for-taxes/register-for-goods-and-services-tax-gst" },
      { label: "ATO: overview of record-keeping rules for business", url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/overview-of-record-keeping-rules-for-business" },
      { label: "ATO: electronic sales suppression tools are illegal", url: "https://www.ato.gov.au/media-centre/raids-uncover-illegal-sales-suppression-technology" },
      { label: "Fiscal Solutions: Australia country overview (no mandatory POS certification)", url: "https://www.fiscal-requirements.com/news/5648" },
    ],
    related: [],
  },
];
