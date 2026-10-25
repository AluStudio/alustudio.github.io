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
  markets: { AU: "Australia", CA: "Canada" },
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
  {
    slug: "payment-processing-fees-canada",
    market: "CA",
    checked: "2026-10-25",
    title: "Credit card processing fees in Canada: what small shops pay and how much margin they take",
    summary: "Square and Moneris charge 2.5% to 2.65% + 10¢ per credit card payment on flat rates; Interac debit costs about 9¢–12¢. See how much of your margin that takes.",
    content: [
      { type: "p", text: "Square and Moneris, two of the providers that publish flat rates in Canada, charge 2.5% and 2.65% + 10¢ on every credit card payment, Amex included. Interac debit costs far less: a flat 12¢ a payment on Moneris Flat Rate, 9¢ to 12.5¢ at Helcim, or 0.75% + 7¢ at Square. Either way the fee comes out of your gross profit, not your sales: on a $40 item that cost you $24, a 2.5% credit card fee takes $1 of your $16 margin, or 6.25% of it, while a 12¢ debit tap takes less than 1%." },
      { type: "p", text: "The rest of this guide uses the same numbers to show what each way of paying costs, what a month of fees adds up to, why your deposits come in under your sales, whether you can pass the fee on, and how to find the rate you're really paying." },

      { type: "h2", text: "What do card payments cost a small shop in Canada?" },
      { type: "p", text: "These are the rates providers published as of October 2026. Flat-rate plans charge one price for every credit card. Interchange-plus plans pass on what the card networks charge for each card type and add the provider's margin, so premium and rewards cards cost more. Bank and custom contracts aren't published; your merchant agreement and statements are what count." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No processing fee", "9% of all payments in Canada by number in 2025"],
          ["Interac debit (chip and PIN or tap)", "Moneris Flat Rate 12¢; Helcim 9¢ chip and PIN, 12.5¢ tap; Square 0.75% + 7¢", "Moneris Flat Rate and Helcim list a flat fee per payment rather than a percentage. Moneris's app-only plan charges 0.70% + 12¢ instead. Debit was 25% of payments by number in 2025"],
          ["Visa and Mastercard credit", "Flat rate: Square 2.5%, Moneris 2.65% + 10¢. Interchange-plus: Helcim's fee disclosure lists 1.42% + 9¢ (Mastercard consumer) to 2.58% + 8¢ (Visa Privilege) for personal cards at its lowest volume tier, in its April 2026 disclosure; Visa's October 24, 2026 cut for small merchants may lower the Visa rates", "Credit cards were 43% of payments by number in 2025, the most-used method"],
          ["American Express", "Square 2.5% and Moneris Flat Rate 2.65% + 10¢, the same as other cards; Helcim 2.19% + 13¢ (2.59% + 13¢ over $500)", "If you're on a bank or custom contract, check whether it covers Amex"],
          ["Apple Pay, Google Pay, watches", "The rate of the card in the wallet", "An Interac debit card in a phone is still Interac debit. A Visa Debit or Debit Mastercard can be charged at the credit rate, as on Moneris Flat Rate. Canadians made 4 billion in-store mobile tap payments in 2025"],
          ["Tap to Pay on iPhone (no terminal)", "Square charges the same rates as on its card readers", "Turns a compatible iPhone into the card reader"],
          ["Cards issued outside Canada", "Square adds 1.5% to its rate", "Worth checking if you get a lot of tourists"],
        ],
      },
      { type: "p", text: "The terminal is part of the cost too. Moneris rents its Go terminal from $34.95 a month, which adds about 0.35% on $10,000 of card sales. Helcim sells its card reader for $239 and its Smart Terminal for $429 instead of renting them." },
      { type: "note", text: "Card processing fees are generally an exempt financial service under the GST/HST, so the rate you're quoted is what comes off, and there's no tax on it to claim back. Terminal rental is different: it's taxable. If you're registered for the GST/HST (required once your taxable sales top $30,000 within four consecutive calendar quarters), you can claim the tax on the rental as an input tax credit." },

      { type: "h2", text: "Processing fees come out of your margin, not your sales" },
      { type: "p", text: "A 2.5% fee sounds small because it's measured against the sale. But your shop runs on what's left after the cost of the goods, and that's where the fee comes from." },
      { type: "p", text: "Take an item you sell for $40 before tax that costs you $24. Your gross profit is $16, a 40% margin:" },
      {
        type: "table",
        caption: "Amounts before sales tax. The rates are examples from the published range. \"Left\" is before rent, wages and other overheads, so it isn't net profit.",
        head: ["", "Cash", "Debit at 12¢", "Credit at 1.75% + 8¢", "Credit at 2.5%", "Credit at 2.65% + 10¢"],
        rows: [
          ["Sale", "$40.00", "$40.00", "$40.00", "$40.00", "$40.00"],
          ["Cost of the item", "$24.00", "$24.00", "$24.00", "$24.00", "$24.00"],
          ["Processing fee", "$0.00", "$0.12", "$0.78", "$1.00", "$1.16"],
          ["Left after cost and fee", "$16.00", "$15.88", "$15.22", "$15.00", "$14.84"],
          ["Fee as a share of gross profit", "0%", "0.8%", "4.9%", "6.3%", "7.3%"],
        ],
      },
      { type: "p", text: "The last row comes from one formula: fee as a share of gross profit = fee rate ÷ gross margin. Here that's 2.5% ÷ 40% = 6.25%. The thinner your margin, the bigger the bite:" },
      {
        type: "table",
        caption: "Each cell is the fee as a share of gross profit, rounded to one decimal place. Percentage fees only; a fixed fee per payment adds to these.",
        head: ["Gross margin", "Fee 1.75%", "Fee 2.5%", "Fee 2.65%"],
        rows: [
          ["20%", "8.8%", "12.5%", "13.3%"],
          ["30%", "5.8%", "8.3%", "8.8%"],
          ["40%", "4.4%", "6.3%", "6.6%"],
          ["50%", "3.5%", "5.0%", "5.3%"],
          ["60%", "2.9%", "4.2%", "4.4%"],
        ],
      },
      { type: "p", text: "A convenience store working on a 20% margin gives up an eighth of its gross profit to a 2.5% credit card fee. A gift shop or clothing store on 50% to 60% feels less than half of that." },
      { type: "p", text: "Fixed fees weigh most on small sales. A 12¢ debit fee is 2.4% of a $5 coffee but 0.3% of a $40 sale. Square's 0.75% + 7¢ works the other way: it's cheaper than a flat 12¢ below about $6.67 and costs more above that, so on a $40 sale it's 37¢. If most of your payments are debit, the debit price matters more than the headline credit rate." },

      { type: "h2", text: "Your fee is charged on the sales tax too" },
      { type: "p", text: "A percentage fee applies to the whole card payment, and that includes the sales tax. Square's help centre spells it out: its fee is taken from the total, tax and tip included. You pass the GST, HST or PST on to the government, but the fee on it is yours to pay." },
      { type: "p", text: "In Ontario, with 13% HST, the $40 item rings up at $45.20. A 2.5% fee on that is $1.13, which is 2.83% of the $40 you keep, and about 7.1% of your $16 margin rather than 6.25%. To get the real cost, multiply your rate by 1 plus your sales tax rate: 2.5% × 1.13 in Ontario." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "A month of fees isn't one rate times your sales. Each payment method has its own price, cash costs nothing, and credit cards cost far more than debit. Here's one month at an Ontario shop, priced on two flat-rate plans:" },
      {
        type: "table",
        caption: "Amounts include HST, as customers paid them. Debit assumes 400 payments averaging $30; credit assumes 400 averaging $37.50. Square's reader is bought outright; the Moneris rental is before HST, and any other Moneris account fees aren't included.",
        head: ["Payment method", "Sales", "Square", "Moneris Flat Rate"],
        rows: [
          ["Cash", "$3,000", "$0.00", "$0.00"],
          ["Interac debit", "$12,000", "$118.00", "$48.00"],
          ["Credit cards", "$15,000", "$375.00", "$437.50"],
          ["Terminal rental", "", "$0.00", "$34.95"],
          ["Total", "$30,000", "$493.00", "$520.45"],
        ],
      },
      { type: "p", text: "Credit cards are half this shop's sales but about three-quarters of its fees on Square, and more than four-fifths on Moneris. Moneris's 12¢ debit saves $70 a month here, but its higher credit rate and the terminal rental cost more than that. A shop that takes more debit and less credit could come out the other way. On Square, this shop pays about $5,900 a year: 1.6% of what customers paid, or about 1.9% of its sales before HST. Put in your own sales and rates to get your number." },

      { type: "h2", text: "Why your deposits are smaller than your sales" },
      { type: "p", text: "Your POS records what the customer paid. Your provider deposits what's left after its fee, or deposits the full amount and takes the fees separately, so your bank statement never matches your sales, and the gap is your processing fees." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid, and record processing fees as a separate expense. Your sales figures then stay right when customers switch from cash to cards, and you can see what the fees cost.",
          "Square takes its fees out before it pays you, and deposits arrive as soon as the next business day (or within minutes with Instant Transfer, for 1.95% of the amount). On gross deposits (it offers gross or net), Helcim deposits your full sales and takes its fees as a separate line the same day; card sales usually arrive in one to two business days, or the next business day if you bank with a major Canadian bank that supports Interac e-Transfer and you close a batch of up to $25,000 by 7 pm MT. Moneris offers RBC business clients next-day deposits, seven days a week.",
          "A refund doesn't give the fee back. Square has kept its processing fee on refunded payments since June 2023, and Helcim keeps the fee on the original payment too, though it charges nothing extra for the refund. At Helcim, voiding a payment before the batch closes costs nothing.",
          "Disputes: Square charges no chargeback fee. Helcim charges $15, refunded if the chargeback is resolved in your favour.",
        ],
      },

      { type: "h2", text: "Can you add a surcharge for credit card payments?" },
      { type: "p", text: "Outside Quebec, yes, on credit cards only, within each card network's rules (Visa's took effect on October 6, 2022). The surcharge can't be more than 2.4% or more than what the card actually costs you to accept, whichever is lower. Visa requires 30 days' written notice to your provider before you start, and you must show the surcharge at the store entrance, at the till and on the receipt. The customer must be able to cancel and pay another way, and a refund must include the surcharge." },
      { type: "p", text: "Debit is a different story. Visa forbids surcharges on Visa Debit and prepaid cards. For Interac debit, the FCAC tells merchants to ask their processor, since some networks don't allow it, so assume no until yours says otherwise. In Quebec, the Consumer Protection Act bans any fee for paying by debit or credit card, and a sign at the till doesn't make it legal." },
      { type: "p", text: "A surcharge shown and charged separately from the price is treated as an exempt financial service, so you don't charge GST/HST on it. You can also offer a discount for paying by cash or debit instead; the Code of Conduct for the Payment Card Industry allows it." },
      { type: "p", text: "The other option is to build the cost into your prices. If credit cards are half of what customers pay and cost 2.5%, the fees come to about 1.25% of your takings. Because the fee is charged on the tax too, that's about 1.4% of your pre-tax prices in Ontario (0.5 × 2.5% × 1.13), so prices about 1.4% higher cover them." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs you its fee and earns you the sales you'd lose without it. The break-even uses the same formula: the share of that method's sales that must be extra business = fee rate ÷ gross margin." },
      { type: "p", text: "For credit cards at 2.5% on a 40% margin, that's 6.25%, or about 7.1% once Ontario's HST is counted (2.5% × 1.13 ÷ 40%). So turning credit cards away only saves money if fewer than about one credit customer in 14 would leave or spend less. With credit cards making up 43% of all payments, and rewards the top reason Canadians give for using them, that's a risky bet." },
      { type: "p", text: "If you're weighing Amex: on Square and Moneris Flat Rate it costs the same as any other card, so there's nothing to decide. On Helcim's interchange-plus pricing, a $40 Amex sale costs $1.01 (2.19% + 13¢): more than a basic Visa ($0.78) and less than a Visa Privilege ($1.11). A customer you turn away usually has another credit card, so what Amex really costs you is the difference from that card, and the break-even is far lower than one sale in 14." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "Your monthly statement has the real number: divide the month's fees, terminal rental included, by your card sales. That's your effective rate. If your statement splits fees by card type, do it for each one and you'll see which costs you most. Under the Code of Conduct, your provider also has to give you a fee disclosure that lists its rates." },
      { type: "p", text: "Then check whether you're getting the small-business rates. Under an agreement with the federal government, from October 19, 2024, Visa and Mastercard cut interchange on in-store consumer credit card payments at qualifying small businesses to an annual weighted average of 0.95%. Mastercard's threshold is $175,000 a year in Mastercard sales. Visa's rose from $300,000 to $750,000 in Visa sales on October 24, 2026. On interchange-plus, those lower rates flow through to you. On a flat rate, your price stays the same whatever the interchange. Your processor must tell you if it isn't passing a network fee cut on in full, and remind you that you can end the contract." },
      { type: "p", text: "Costs can go up too. Mastercard expanded its 1.8-US-cent network fee to every domestic transaction in October 2026, and Visa plans to charge the same from April 2027. The networks bill processors, and processors usually pass these fees on, so compare a few statements before and after." },

      { type: "h2", text: "Let your POS do the math" },
      { type: "p", text: "Outside Quebec's restaurant and passenger-transport sectors, we found no Canadian rule that requires a certified cash register, so for a retail shop the POS is your choice. What the CRA does require is records you can produce, kept for six years after the end of the year they relate to (electronic records in a readable format), and software that hides or deletes sales has been illegal since 2014. Quebec is the exception for food service: QST-registered restaurants, bars, caterers and other businesses Revenu Québec counts as restaurant establishments must record every sale in a certified sales recording system (SRS) linked to its WEB-SRM, and give every customer a bill from it. DingPOS is not a certified SRS. If those rules cover you, ring up sales on your certified system; DingPOS can run alongside it to track payment methods and estimate fees and margins, but it doesn't replace it." },
      { type: "p", text: "If you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, give each payment method its processing fee: a percentage, a fixed amount per transaction, or both (for Interac debit on Moneris Flat Rate, just $0.12; at Square, 0.75% and $0.07). Card processing fees generally carry no GST/HST, so enter the rate as your provider quotes it. If your provider keeps its fee on refunds, as Square and Helcim do, turn off “Percentage fee returned on refunds”. The Payment Methods card on Stats then shows the estimated fee and net received for each method. DingPOS doesn't process payments or read your provider's statements, so these figures are estimates from the rates you enter, and your statement shows the actual amount." },
      { type: "p", text: "Setup is covered in [Can DingPOS track card and mobile payment fees?](/support/payment-fees/). Fee tracking is on the Standard plan and up (compare them on [Pricing](/pricing/)), and you can try everything free for 30 days." },
    ],
    sources: [
      { label: "Square: understanding our fees (Canada)", url: "https://squareup.com/ca/en/payments/our-fees" },
      { label: "Square Support Centre: Square fees in Canada, Tap to Pay, international cards, Instant Transfer", url: "https://squareup.com/help/ca/en/article/5068-what-are-square-s-fees" },
      { label: "Square: new lower processing fees from October 21, 2024", url: "https://squareup.com/ca/en/press/lower-processing-fees-canada" },
      { label: "Square: refund policy update (fees not returned, Canada from June 6, 2023)", url: "https://squareup.com/ca/en/press/refund-policy-update" },
      { label: "Moneris: pricing (Flat Rate, card types covered)", url: "https://www.moneris.com/en/pricing" },
      { label: "Moneris: micro business (Go terminal from $34.95 a month)", url: "https://www.moneris.com/en/micro-business" },
      { label: "Moneris: debit machine plans (Flat Rate and the app-only plan)", url: "https://www.moneris.com/en/solutions/payment-processing/debit-card-machine" },
      { label: "Moneris: next-day deposits for RBC business clients", url: "https://www.moneris.com/en/partners/rbc" },
      { label: "Helcim: fee disclosures, Canada (effective April 1, 2026)", url: "https://legal.helcim.com/ca/fee-disclosures/" },
      { label: "Helcim: in-person payments (gross deposits, refunds)", url: "https://www.helcim.com/in-person-payments/" },
      { label: "Helcim: pricing (gross or net deposits, no fee for refunds)", url: "https://www.helcim.com/pricing/" },
      { label: "Helcim: deposit timelines and Faster Deposits", url: "https://learn.helcim.com/docs/bank-deposit-timelines-helcim" },
      { label: "Helcim: refunds and voids", url: "https://learn.helcim.com/docs/what-are-refunds-voids" },
      { label: "Payments Canada: Canadian Payment Methods and Trends Report 2026, fact sheet (2025 data)", url: "https://www.payments.ca/sites/default/files/PaymentsCanada_Canadian_Payment_Methods_and_Trends_Report_FactSheet_2026_EN.pdf" },
      { label: "Interac: accept Interac Debit (card, phone and wearable taps)", url: "https://www.interac.ca/en/payments/business/accept-interac-debit-payments/" },
      { label: "FCAC: merchant surcharges, service and convenience fees, and discounts", url: "https://www.canada.ca/en/financial-consumer-agency/services/merchants/credit-fees-merchant.html" },
      { label: "Visa Canada: merchant surcharging FAQ for businesses", url: "https://www.visa.ca/content/dam/VCOM/regional/na/canada/Support/Documents/surcharging-faq-businesses-en.pdf" },
      { label: "Office de la protection du consommateur: payment by debit or credit card, prohibited fees", url: "https://www.opc.gouv.qc.ca/en/consumer/topic/price-discount/advertised-price/debit-credit-card" },
      { label: "CRA GST/HST Info Sheet GI-200: credit card surcharges", url: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/gi-200/application-gst-hst-credit-card-surcharges.html" },
      { label: "CRA: GST/HST status of financial institution services (merchant discount exempt, terminal rental taxable)", url: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/17-2/products-services-a-deposit-taking-financial-institution.html" },
      { label: "CRA GST/HST interpretation 247852 (December 2024): merchant card processing services, via Tax Interpretations", url: "https://taxinterpretations.com/content/1015882" },
      { label: "CRA: when to register for and start charging the GST/HST", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html" },
      { label: "CRA: charge and collect the GST/HST (13% HST in Ontario)", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html" },
      { label: "Finance Canada: credit card fee reductions for small businesses from October 19, 2024", url: "https://www.canada.ca/en/department-finance/news/2024/10/government-reduces-credit-card-fees-by-27-per-cent-for-small-business-owners.html" },
      { label: "CFIB (October 14, 2026): Visa expands small merchant rates; new network fees", url: "https://www.newswire.ca/news-releases/visa-lowers-interchange-fees-for-tens-of-thousands-of-small-businesses-but-new-credit-card-fees-are-on-the-horizon-840526311.html" },
      { label: "Payments Dive (October 21, 2026): Visa changes fees in Canada", url: "https://www.paymentsdive.com/news/visa-mastercard-card-fee-changes-fees-canada/833599/" },
      { label: "CRA: general requirements for books and records (six years)", url: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/15-1/general-requirements-books-records.html" },
      { label: "CRA: electronic suppression of sales software sanctions", url: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/budget-2013/budget-2013-electronic-suppression-sales-software-sanctions.html" },
      { label: "Revenu Québec: mandatory billing in the restaurant sector", url: "https://www.revenuquebec.ca/en/businesses/sector-specific-measures/mandatory-billing/mandatory-billing-restaurant-sector/" },
      { label: "Revenu Québec: persons subject to mandatory billing in the restaurant sector", url: "https://www.revenuquebec.ca/en/businesses/sector-specific-measures/mandatory-billing/mandatory-billing-restaurant-sector/mandatory-billing-restaurant-sector/" },
    ],
    related: [],
  },
];
