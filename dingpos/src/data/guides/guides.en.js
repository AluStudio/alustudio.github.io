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
  markets: { AU: "Australia", CA: "Canada", GB: "United Kingdom", NZ: "New Zealand", SG: "Singapore", US: "United States" },
};

export const articles = [
  {
    slug: "payment-processing-fees-australia",
    market: "AU",
    checked: "2026-10-25",
    title: "EFTPOS fees in Australia: what small shops pay and how much margin they cost",
    summary: "Big providers publish EFTPOS flat rates of 0.79%–1.6% per card payment, and surcharges are banned from 1 October 2026. See how much of your margin that takes.",
    content: [
      { type: "p", text: "Big providers' published flat rates for card payments in Australia run from 0.79% to 1.6% of each sale: 0.79% at Westpac, 0.99% at CommBank, 1.4% at Zeller and 1.6% at Square. Since 1 October 2026 you can't pass that on as a card surcharge, so it comes out of your gross profit: on an item you sell for $50 plus GST that cost you $30, a 1.6% fee takes 80c of your $20 margin — 4% of it." },

      { type: "h2", text: "What do card payments cost a small shop?" },
      { type: "p", text: "Rates published as of October 2026. Custom and cost-plus plans aren't published; your merchant agreement and statements are what count." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No merchant fee", "About 15% of payments by number in 2025"],
          ["Visa, Mastercard and eftpos cards", "0.79%–1.6% on published flat rates", "Westpac 0.79%; CommBank 0.99% plus $29.50 a month for a Smart terminal; Zeller 1.4%, no rental; Square 1.6% (1.9% on some older accounts)"],
          ["Apple Pay, Google Pay, Samsung Wallet", "The rate of the card in the wallet", "A card payment through your terminal. Around 40% of in-person card payments in 2025"],
          ["American Express", "The same flat rate at CommBank, Zeller and Square", "Westpac's 0.79% doesn't apply to Amex or JCB"],
          ["Afterpay (buy now, pay later)", "Through Square: 6.6% + 33c, GST included", "That's 6% + 30c plus GST"],
        ],
      },
      { type: "p", text: "Most flat rates include GST: Square's 1.6% is what leaves your account. Terminal rental counts too: $29.50 a month on $10,000 of card sales adds about 0.3%." },
      { type: "note", text: "If you're registered for GST, you claim 1/11 of your merchant fees back on your BAS. That cancels out the GST in the price the fee was charged on: 1.6% of a $55 sale is 88c, you claim 8c, and the 80c left is 1.6% of the $50 you keep. Not registered? Nothing to claim, but no GST in your prices either." },

      { type: "h2", text: "Merchant fees come out of your margin, not your sales" },
      { type: "p", text: "A 1.6% fee sounds small because it's measured against the sale, but it's paid out of what's left after the cost of the goods. Take an item you sell for $50 plus GST that costs you $30. Your gross profit is $20, a 40% margin:" },
      {
        type: "table",
        caption: "Amounts exclude GST; fees are net of the GST credit. \"Left\" is before rent, wages and other overheads, so it isn't net profit.",
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
        caption: "Each cell is the fee as a share of gross profit.",
        head: ["Gross margin", "Fee 1%", "Fee 1.4%", "Fee 1.6%"],
        rows: [
          ["20%", "5%", "7%", "8%"],
          ["30%", "3.3%", "4.7%", "5.3%"],
          ["40%", "2.5%", "3.5%", "4%"],
          ["50%", "2%", "2.8%", "3.2%"],
          ["60%", "1.7%", "2.3%", "2.7%"],
        ],
      },
      { type: "p", text: "A convenience store or bottle shop on a 20% margin gives up 8% of its gross profit to a 1.6% fee." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "Each payment method has its own rate, and cash costs nothing. Here's a shop on Square that takes $38,000 in a month:" },
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
      { type: "p", text: "Afterpay is 8% of the takings but about 30% of the fees. A GST-registered shop claims 1/11 back ($62.24), so the fees cost $622.36 a month, about $7,470 a year. Put in your own takings and rates to get your number." },

      { type: "h2", text: "Why your payouts are smaller than your takings" },
      { type: "p", text: "Your POS records what the customer paid. Your provider pays out what's left after its fee, and the gap is your merchant fees." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid and fees as a separate expense, so the fees stay visible.",
          "Payouts take time: CommBank can pay into a CommBank account the same day, Square as soon as the next day.",
          "A refund doesn't always give the fee back: Square keeps the fee on the original payment. Bank plans set this in your merchant agreement.",
        ],
      },

      { type: "h2", text: "Can you still add a surcharge for card payments?" },
      { type: "p", text: "No. From 1 October 2026, eftpos, Mastercard and Visa ban surcharges on their credit, debit and prepaid cards, overseas cards included, and Amex, UnionPay and PayPal have followed. A charge that applies however the customer pays, such as a public holiday surcharge, isn't affected, and you can still offer a discount for paying a cheaper way. A fee on only some payment methods is probably a card surcharge, whatever you call it. For buy now, pay later, which the ban doesn't cover, check your agreement." },
      { type: "p", text: "So recover card costs in your prices: if cards and phone wallets are 85% of your takings at 1.4%, prices about 1.2% higher cover the fees. Several banks have cut their flat rates, so if you haven't compared plans since October, now is the time." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs its fee and earns the sales you'd lose without it. The share of its sales that must be extra business to break even = fee rate ÷ gross margin." },
      { type: "p", text: "Afterpay at 6.6% on a 40% margin needs 16.5%: about one Afterpay sale in six has to be one you wouldn't otherwise have made, a little more with the 33c fixed fee. Cards at 1.4% need only 3.5% of card sales, and most in-person payments in Australia are now made by card." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "Divide the month's fees on your merchant statement, terminal rental included, by your card takings. That's your effective rate. In March 2026 the RBA found small merchants paid 1.4% on average on single-rate plans and 0.9% on cost-plus plans." },
      { type: "p", text: "If you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, tap a payment method and fill in Processing fee: a percentage, a fixed amount per transaction, or both. Enter the GST-inclusive rate (×1.1 if GST is added on top), such as 6.6% and $0.33 for Afterpay. Square keeps its fee on refunds, so turn off “Percentage fee returned on refunds”." },
      { type: "p", text: "From then on, the Payment Methods card on Stats does the sums:" },
      {
        type: "list",
        items: [
          "Under each method with a rate, a “Fee · Net” line shows its estimated fee and estimated net received.",
          "The foot of the card totals the period's estimated fees and net received.",
          "Payments taken before a method had a rate are counted as “N missing a rate”, and the net shows “—”.",
        ],
      },
      { type: "p", text: "These are estimates from your own rates: DingPOS doesn't process payments or read your provider's statements, so your statement shows the actual amount. [How to set it up](/support/payment-fees/). Fee tracking is on the Standard plan and up ([Pricing](/pricing/)), with a free 30-day trial." },
    ],
    sources: [
      { label: "RBA: FAQs on the removal of card payment surcharges from 1 October 2026", url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/" },
      { label: "RBA Conclusions Paper (March 2026): competition in card acquiring, what small merchants pay", url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/competition-in-card-acquiring-services.html" },
      { label: "RBA Bulletin (May 2026): consumer payment behaviour in Australia", url: "https://www.rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html" },
      { label: "ACCC: card surcharges (business guidance)", url: "https://www.accc.gov.au/business/pricing/card-surcharges" },
      { label: "Westpac: flat transaction rate cut to 0.79% from 1 October 2026", url: "https://www.westpac.com.au/about-westpac/media/media-releases/2026/24-september/" },
      { label: "Westpac: EFTPOS fees (0.79% excludes Amex and JCB)", url: "https://www.westpac.com.au/business-banking/merchants-and-payments/eftpos/eftpos-fees/" },
      { label: "CommBank: EFTPOS terminal fees", url: "https://www.commbank.com.au/business/payments/eftpos-terminals/fees.html" },
      { label: "CommBank: single rate per transaction and same-day settlement", url: "https://www.commbank.com.au/business/payments/eftpos-terminals/fees/single-rate-per-transaction.html" },
      { label: "Zeller: pricing", url: "https://www.myzeller.com/au/pricing" },
      { label: "Square: pricing and processing fees", url: "https://squareup.com/au/en/pricing" },
      { label: "Square: fee schedule (1.6% from 30 May 2024, 1.9% for some older accounts)", url: "https://squareup.com/help/au/en/article/5068-what-are-square-s-fees" },
      { label: "Square: manage customer refunds", url: "https://squareup.com/help/au/en/article/5060-refund-overview" },
      { label: "Square: tax and fee reports, GST invoices", url: "https://squareup.com/help/au/en/article/7858-square-tax-reporting-and-gst-invoices-faq" },
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
      { type: "p", text: "On published flat rates, Square and Moneris charge 2.5% and 2.65% + 10¢ on every credit card payment in Canada, Amex included. Interac debit costs far less: 12¢ a payment on Moneris Flat Rate, 9¢ to 12.5¢ at Helcim, or 0.75% + 7¢ at Square. The fee comes out of your gross profit: on a $40 item that cost you $24, a 2.5% credit card fee takes $1 of your $16 margin, or 6.25% of it." },

      { type: "h2", text: "What do card payments cost a small shop in Canada?" },
      { type: "p", text: "Rates published as of October 2026. Bank and custom contracts aren't published; your merchant agreement and statements are what count." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No processing fee", "9% of payments by number in 2025"],
          ["Interac debit (chip and PIN or tap)", "Moneris Flat Rate 12¢; Helcim 9¢ chip and PIN, 12.5¢ tap; Square 0.75% + 7¢", "25% of payments by number in 2025"],
          ["Visa and Mastercard credit", "Square 2.5%; Moneris Flat Rate 2.65% + 10¢; Helcim interchange-plus 1.42% + 9¢ to 2.58% + 8¢, by card type", "Helcim: personal cards, lowest volume tier (April 2026)"],
          ["American Express", "Square and Moneris Flat Rate: the same as other cards; Helcim 2.19% + 13¢ (2.59% + 13¢ over $500)", "On a bank or custom contract, check whether it covers Amex"],
          ["Apple Pay, Google Pay, watches", "The rate of the card in the wallet", "An Interac card in a phone is still Interac debit. A Visa Debit or Debit Mastercard can be charged the credit rate, as on Moneris Flat Rate"],
        ],
      },
      { type: "p", text: "The terminal counts too: Moneris rents its Go terminal from $34.95 a month, about 0.35% on $10,000 of card sales." },
      { type: "note", text: "Card processing fees are generally exempt from GST/HST, so the quoted rate is what comes off, with no tax to claim back. Terminal rental is taxable; a GST/HST registrant claims that tax as an input tax credit." },

      { type: "h2", text: "Processing fees come out of your margin, not your sales" },
      { type: "p", text: "A 2.5% fee sounds small because it's measured against the sale, but it's paid out of what's left after the cost of the goods. Take an item you sell for $40 before tax that costs you $24. Your gross profit is $16, a 40% margin:" },
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
        caption: "Each cell is the fee as a share of gross profit. Percentage fees only; a fixed fee per payment adds to these.",
        head: ["Gross margin", "Fee 1.75%", "Fee 2.5%", "Fee 2.65%"],
        rows: [
          ["20%", "8.8%", "12.5%", "13.3%"],
          ["30%", "5.8%", "8.3%", "8.8%"],
          ["40%", "4.4%", "6.3%", "6.6%"],
          ["50%", "3.5%", "5.0%", "5.3%"],
          ["60%", "2.9%", "4.2%", "4.4%"],
        ],
      },
      { type: "p", text: "A convenience store on a 20% margin gives up an eighth of its gross profit to a 2.5% credit card fee. Fixed fees weigh most on small sales: a 12¢ debit fee is 2.4% of a $5 coffee but 0.3% of a $40 sale." },
      { type: "p", text: "The fee is also charged on the sales tax: Square takes its fee from the total, tax included. In Ontario, with 13% HST, the $40 item rings up at $45.20, and 2.5% of that is $1.13, about 7.1% of your $16 margin rather than 6.25%. For the real cost, multiply your rate by 1 plus your sales tax rate." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "Each payment method has its own price, cash costs nothing, and credit costs far more than debit. Here's one month at an Ontario shop, priced on two flat-rate plans:" },
      {
        type: "table",
        caption: "Amounts include HST, as customers paid them. Debit: 400 payments averaging $30; credit: 400 averaging $37.50. Square's reader is bought outright; the Moneris rental is before HST and excludes other account fees.",
        head: ["Payment method", "Sales", "Square", "Moneris Flat Rate"],
        rows: [
          ["Cash", "$3,000", "$0.00", "$0.00"],
          ["Interac debit", "$12,000", "$118.00", "$48.00"],
          ["Credit cards", "$15,000", "$375.00", "$437.50"],
          ["Terminal rental", "", "$0.00", "$34.95"],
          ["Total", "$30,000", "$493.00", "$520.45"],
        ],
      },
      { type: "p", text: "Credit cards are half the sales but about three-quarters of the fees on Square. Moneris's 12¢ debit saves $70 a month, but its credit rate and rental cost more; a shop with more debit could come out the other way. On Square, this shop pays about $5,900 a year. Put in your own sales and rates to get your number." },

      { type: "h2", text: "Why your deposits are smaller than your sales" },
      { type: "p", text: "Your POS records what the customer paid. Your provider deposits what's left after its fee, or takes the fees separately, and the gap is your fees." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid and fees as a separate expense, so the fees stay visible.",
          "Square takes its fees out before paying you, as soon as the next business day. Helcim can deposit your full sales, usually in one to two business days, and take its fees as a separate line.",
          "A refund doesn't give the fee back at Square or Helcim.",
        ],
      },

      { type: "h2", text: "Can you add a surcharge for credit card payments?" },
      { type: "p", text: "Outside Quebec, the card networks allow it on credit cards only: no more than 2.4% or what the card costs you, whichever is lower. Visa requires 30 days' written notice to your provider, and you must show the surcharge at the entrance, at the till and on the receipt. The customer must be able to pay another way, and a refund must include the surcharge." },
      { type: "p", text: "Not on debit: Visa forbids surcharges on Visa Debit and prepaid cards, and for Interac the FCAC says to ask your processor, so assume no until yours says yes. Quebec's Consumer Protection Act bans any fee for paying by card. A separately shown surcharge carries no GST/HST, and you can offer a discount for cash or debit instead." },
      { type: "p", text: "Or build the cost into your prices. In Ontario, if credit cards are half of what customers pay at 2.5%, prices about 1.4% higher cover the fees, HST included (0.5 × 2.5% × 1.13)." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs its fee and earns the sales you'd lose without it. The share of its sales that must be extra business to break even = fee rate ÷ gross margin." },
      { type: "p", text: "For credit cards at 2.5% on a 40% margin, that's 6.25%, or about 7.1% with Ontario's HST. So turning credit cards away only saves money if fewer than about one credit customer in 14 would leave or spend less. With credit cards at 43% of all payments, that's a risky bet." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "Divide the month's fees on your statement, terminal rental included, by your card sales. That's your effective rate." },
      { type: "p", text: "Then check you're getting the small-business rates: since October 19, 2024, Visa and Mastercard have cut interchange, the card-issuing bank's share of your fee, on in-store consumer credit payments at qualifying small businesses to an annual weighted average of 0.95% (Mastercard's threshold is $175,000 a year in Mastercard sales; Visa's, $750,000 in Visa sales since October 24, 2026). On interchange-plus, the cut reaches you; a flat rate stays the same." },
      { type: "p", text: "For a retail shop, we found no Canadian rule that requires a certified cash register. Quebec food service is the exception: QST-registered restaurants, bars, caterers and other restaurant establishments must record every sale in a certified sales recording system (SRS) linked to Revenu Québec's WEB-SRM. DingPOS is not a certified SRS; if that rule covers you, ring up every sale on your certified system and apply this guide's formulas to its reports." },
      { type: "p", text: "Otherwise, if you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, tap a payment method and fill in Processing fee: a percentage, a fixed amount per transaction, or both, such as $0.12 for Interac on Moneris Flat Rate, or 0.75% and $0.07 at Square. Card fees generally carry no GST/HST, so enter the rate as quoted. Square and Helcim keep their fee on refunds, so turn off “Percentage fee returned on refunds”." },
      { type: "p", text: "From then on, the Payment Methods card on Stats does the math:" },
      {
        type: "list",
        items: [
          "Under each method with a rate, a “Fee · Net” line shows its estimated fee and estimated net received.",
          "The foot of the card totals the period's estimated fees and net received.",
          "Payments taken before a method had a rate are counted as “N missing a rate”, and the net shows “—”.",
        ],
      },
      { type: "p", text: "These are estimates from your own rates: DingPOS doesn't process payments or read your provider's statements, so your statement shows the actual amount. [How to set it up](/support/payment-fees/). Fee tracking is on the Standard plan and up ([Pricing](/pricing/)), with a free 30-day trial." },
    ],
    sources: [
      { label: "Square: understanding our fees (Canada)", url: "https://squareup.com/ca/en/payments/our-fees" },
      { label: "Square Support Centre: Square fees in Canada, Tap to Pay, international cards, Instant Transfer", url: "https://squareup.com/help/ca/en/article/5068-what-are-square-s-fees" },
      { label: "Square: new lower processing fees from October 21, 2024", url: "https://squareup.com/ca/en/press/lower-processing-fees-canada" },
      { label: "Square: refund policy update (fees not returned, Canada from June 6, 2023)", url: "https://squareup.com/ca/en/press/refund-policy-update" },
      { label: "Moneris: pricing (Flat Rate, card types covered)", url: "https://www.moneris.com/en/pricing" },
      { label: "Moneris: micro business (Go terminal from $34.95 a month)", url: "https://www.moneris.com/en/micro-business" },
      { label: "Moneris: debit machine plans (Flat Rate and the app-only plan)", url: "https://www.moneris.com/en/solutions/payment-processing/debit-card-machine" },
      { label: "Helcim: fee disclosures, Canada (effective April 1, 2026)", url: "https://legal.helcim.com/ca/fee-disclosures/" },
      { label: "Helcim: in-person payments (gross deposits, refunds)", url: "https://www.helcim.com/in-person-payments/" },
      { label: "Helcim: pricing (gross or net deposits, no fee for refunds)", url: "https://www.helcim.com/pricing/" },
      { label: "Helcim: deposit timelines and Faster Deposits", url: "https://learn.helcim.com/docs/bank-deposit-timelines-helcim" },
      { label: "Payments Canada: Canadian Payment Methods and Trends Report 2026, fact sheet (2025 data)", url: "https://www.payments.ca/sites/default/files/PaymentsCanada_Canadian_Payment_Methods_and_Trends_Report_FactSheet_2026_EN.pdf" },
      { label: "Interac: accept Interac Debit (card, phone and wearable taps)", url: "https://www.interac.ca/en/payments/business/accept-interac-debit-payments/" },
      { label: "FCAC: merchant surcharges, service and convenience fees, and discounts", url: "https://www.canada.ca/en/financial-consumer-agency/services/merchants/credit-fees-merchant.html" },
      { label: "Visa Canada: merchant surcharging FAQ for businesses", url: "https://www.visa.ca/content/dam/VCOM/regional/na/canada/Support/Documents/surcharging-faq-businesses-en.pdf" },
      { label: "Office de la protection du consommateur: payment by debit or credit card, prohibited fees", url: "https://www.opc.gouv.qc.ca/en/consumer/topic/price-discount/advertised-price/debit-credit-card" },
      { label: "CRA GST/HST Info Sheet GI-200: credit card surcharges", url: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/gi-200/application-gst-hst-credit-card-surcharges.html" },
      { label: "CRA: GST/HST status of financial institution services (merchant discount exempt, terminal rental taxable)", url: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/17-2/products-services-a-deposit-taking-financial-institution.html" },
      { label: "CRA GST/HST interpretation 247852 (December 2024): merchant card processing services, via Tax Interpretations", url: "https://taxinterpretations.com/content/1015882" },
      { label: "CRA: charge and collect the GST/HST (13% HST in Ontario)", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html" },
      { label: "Finance Canada: credit card fee reductions for small businesses from October 19, 2024", url: "https://www.canada.ca/en/department-finance/news/2024/10/government-reduces-credit-card-fees-by-27-per-cent-for-small-business-owners.html" },
      { label: "CFIB (October 14, 2026): Visa expands small merchant rates; new network fees", url: "https://www.newswire.ca/news-releases/visa-lowers-interchange-fees-for-tens-of-thousands-of-small-businesses-but-new-credit-card-fees-are-on-the-horizon-840526311.html" },
      { label: "Revenu Québec: mandatory billing in the restaurant sector", url: "https://www.revenuquebec.ca/en/businesses/sector-specific-measures/mandatory-billing/mandatory-billing-restaurant-sector/" },
      { label: "Revenu Québec: persons subject to mandatory billing in the restaurant sector", url: "https://www.revenuquebec.ca/en/businesses/sector-specific-measures/mandatory-billing/mandatory-billing-restaurant-sector/mandatory-billing-restaurant-sector/" },
    ],
    related: [],
  },
  {
    slug: "payment-processing-fees-new-zealand",
    market: "NZ",
    checked: "2026-10-25",
    title: "EFTPOS and paywave fees in NZ: what small shops pay and how much margin they cost",
    summary: "Inserted EFTPOS is free per sale. Paywave and credit cost 0.95% on BNZ's portable terminal and 0.7%–1.25% at ANZ for NZ cards. See what that takes from margin.",
    content: [
      { type: "p", text: "In New Zealand, an EFTPOS card inserted or swiped on Cheque or Savings costs you nothing per sale at the banks; you usually pay a monthly terminal fee instead. A tapped card or phone, or a credit card, goes through Visa or Mastercard and costs a merchant service fee: for New Zealand cards, 0.95% on BNZ's portable terminal and 0.7% to 1.25% on ANZ's blended rates, and from 2.6% + 5c at Stripe. On an item you sell for $46 including GST that cost you $24, a 0.95% fee takes 44c of your $16 gross profit, or 2.7% of it." },

      { type: "h2", text: "What does each way of paying cost a small shop?" },
      { type: "p", text: "Published rates (ANZ's from the Commerce Commission's April 2026 comparison). Most bank plans aren't published, so your merchant agreement and statements are what count." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No merchant fee", "11% of people say cash is their preferred way to pay"],
          ["EFTPOS card inserted or swiped (Cheque or Savings)", "No fee per sale", "You usually pay for the terminal instead: BNZ's portable terminal is $30 a month plus GST"],
          ["Visa and Mastercard, tapped (paywave) or credit", "BNZ portable terminal 0.95%; ANZ blended 0.7% to 1.25%; Stripe Terminal from 2.6% + 5c", "BNZ's rate needs sales settled to a BNZ business account (otherwise add 0.45%) and an average sale of $20 or more. Three in four electronic payments go through Visa or Mastercard"],
          ["Apple Pay, Google Pay, a phone or watch", "The same as a tapped card", "EFTPOS can't be used from a phone, so a phone tap is a Visa or Mastercard payment"],
          ["American Express", "BNZ portable terminal 1.30%", ""],
          ["Cards issued overseas", "BNZ portable terminal 2.35%; ANZ 2.50%", ""],
        ],
      },
      { type: "note", text: "Merchant service fees generally carry no GST: Inland Revenue treats payment services that settle the money to you as financial services, so there's no GST to claim back. Terminal rental usually comes with GST, which a registered business claims back." },

      { type: "h2", text: "Merchant fees come out of your margin, not your sales" },
      { type: "p", text: "A 0.95% fee sounds small because it's measured against the sale, but it's paid out of what's left after the cost of the goods. Take an item that's $46 at the till: $40 plus $6 GST. It costs you $24, so your gross profit is $16, a 40% margin. The fee is charged on the full $46, but you only keep $40, so a 0.95% fee costs you 1.09% of your sales after GST:" },
      {
        type: "table",
        caption: "GST-registered shop. The rates are examples from the published range; Stripe's includes its 5c per payment. \"Left\" is before rent, wages and other overheads, so it isn't net profit.",
        head: ["", "Inserted EFTPOS", "Card at 0.7%", "Card at 0.95%", "Card at 1.25%", "Stripe 2.6% + 5c"],
        rows: [
          ["Price at the till", "$46.00", "$46.00", "$46.00", "$46.00", "$46.00"],
          ["Sale after GST", "$40.00", "$40.00", "$40.00", "$40.00", "$40.00"],
          ["Cost of the item", "$24.00", "$24.00", "$24.00", "$24.00", "$24.00"],
          ["Merchant fee", "$0.00", "$0.32", "$0.44", "$0.58", "$1.25"],
          ["Left after cost and fee", "$16.00", "$15.68", "$15.56", "$15.42", "$14.75"],
          ["Fee as a share of gross profit", "0%", "2.0%", "2.7%", "3.6%", "7.8%"],
        ],
      },
      { type: "p", text: "The last row comes from one formula: fee as a share of gross profit = fee rate ÷ gross margin, both measured against your sales after GST. If you're GST-registered, multiply the quoted rate by 1.15 first: 0.95% × 1.15 = 1.09%, and 1.09% ÷ 40% = 2.7%. If you're not registered, use the quoted rate as it is. The thinner your margin, the bigger the bite:" },
      {
        type: "table",
        caption: "Fee as a share of gross profit for a GST-registered shop (quoted rate × 1.15 ÷ margin). Percentage fees only; Stripe's 5c per payment adds to its column.",
        head: ["Gross margin", "Fee 0.7%", "Fee 0.95%", "Fee 1.25%", "Fee 2.6%"],
        rows: [
          ["20%", "4.0%", "5.5%", "7.2%", "15.0%"],
          ["30%", "2.7%", "3.6%", "4.8%", "10.0%"],
          ["40%", "2.0%", "2.7%", "3.6%", "7.5%"],
          ["50%", "1.6%", "2.2%", "2.9%", "6.0%"],
          ["60%", "1.3%", "1.8%", "2.4%", "5.0%"],
        ],
      },
      { type: "p", text: "A dairy or bottle store on a 20% margin gives up 5.5% of its gross profit to a 0.95% fee, and 15% to a 2.6% one." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "Cash and inserted EFTPOS cost nothing per sale; cards cost a percentage, and the expensive ones count for more than their share. Here's a shop on BNZ's portable terminal that takes $30,000 in a month:" },
      {
        type: "table",
        caption: "Takings include GST, as customers paid them. Card sales settle to a BNZ business account. Terminal rental is before GST, which a registered shop claims back.",
        head: ["Payment method", "Takings", "Rate", "Fee"],
        rows: [
          ["Cash", "$3,000", "—", "$0.00"],
          ["Inserted EFTPOS (Cheque or Savings)", "$6,000", "—", "$0.00"],
          ["Visa and Mastercard, NZ cards (tapped, phones, credit)", "$19,000", "0.95%", "$180.50"],
          ["American Express", "$1,000", "1.30%", "$13.00"],
          ["Cards issued overseas", "$1,000", "2.35%", "$23.50"],
          ["Terminal rental", "", "", "$30.00"],
          ["Total", "$30,000", "", "$247.00"],
        ],
      },
      { type: "p", text: "That's $2,964 a year. Overseas cards are 3% of takings but more than a tenth of the merchant fees. If the customers who insert their EFTPOS card started tapping instead, that $6,000 would cost another $57 a month. Put in your own takings and rates to get your number." },

      { type: "h2", text: "Why your bank deposits don't match your takings" },
      { type: "p", text: "Your POS records what the customer paid. What reaches your bank account follows your provider's rules." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid and fees as a separate expense, so the fees stay visible.",
          "Banks often settle your card sales in full and take the fees later: BNZ charges the month's merchant service fees in one debit on the 15th of the following month.",
          "Refunds come out of the same settlement. Stripe keeps its fee on a refunded payment, unless the refund goes through as a reversal soon after the sale; for bank plans, check your merchant agreement.",
        ],
      },

      { type: "h2", text: "Can you add a surcharge for paywave and credit cards?" },
      { type: "p", text: "Yes, it's still legal for now, but the Commerce Commission expects you to tell customers about the surcharge before they pay, offer at least one way to pay without one, and charge no more than that method's extra cost, which for most businesses is the merchant service fee. Inserted EFTPOS shouldn't be surcharged at all. On a standard-rated sale, the surcharge includes 15% GST, which you pass on to Inland Revenue." },
      { type: "p", text: "A ban is planned but not law. The bill to stop surcharges on in-store EFTPOS, Visa and Mastercard payments stalled, and it was still on the Order Paper when Parliament rose for the 7 November 2026 election. Whether it goes ahead is up to the next Parliament." },
      { type: "p", text: "Or recover card costs in your prices: if tapped and credit cards are 70% of your takings at 0.95%, fees cost about 0.67% of takings, so prices about 0.7% higher cover them." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs its fee and earns the sales you'd lose without it. The share of its sales that must be extra business to break even = fee rate ÷ gross margin, after the 1.15 GST step if you're registered." },
      { type: "p", text: "Take Amex at BNZ's 1.30% on a 40% margin: 1.30% × 1.15 ÷ 40% = 3.7%, about one Amex sale in 27. Overseas cards at 2.35% need 6.8% of those sales, an easy call in a tourist town, where a visitor with only a foreign card has no other way to pay." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "The Commerce Commission's method: divide the month's merchant service fees by your Visa and Mastercard sales. That's your effective rate; add terminal rental for the full cost of taking cards." },
      { type: "p", text: "Then check that the interchange cut reached you: on 1 December 2025, the cap on interchange (the largest part of your fee) for New Zealand personal credit cards used in person fell from 0.80% to 0.30%, and the Commission asks businesses to check with their bank that it was passed on. Ask about interchange-plus pricing too: at BNZ's 0.5% + interchange for New Zealand cards, a personal credit card used in person costs at most 0.80%." },
      { type: "p", text: "If you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, tap a payment method and fill in Processing fee: a percentage, a fixed amount per transaction, or both. Keep inserted EFTPOS (no fee) and tapped or credit cards (0.95% on BNZ's portable terminal) as separate methods, so free payments stay free. Merchant fees generally carry no GST, so enter the rate as quoted. If your provider keeps its fee on refunds, as Stripe does, turn off “Percentage fee returned on refunds”." },
      { type: "p", text: "From then on, the Payment Methods card on Stats does the sums:" },
      {
        type: "list",
        items: [
          "Under each method with a rate, a “Fee · Net” line shows its estimated fee and estimated net received.",
          "The foot of the card totals the period's estimated fees and net received.",
          "Payments taken before a method had a rate are counted as “N missing a rate”, and the net shows “—”.",
        ],
      },
      { type: "p", text: "These are estimates from your own rates: DingPOS doesn't process payments or read your provider's statements, so your statement shows the actual amount. [How to set it up](/support/payment-fees/). Fee tracking is on the Standard plan and up ([Pricing](/pricing/)), with a free 30-day trial." },
    ],
    sources: [
      { label: "Commerce Commission: merchant service fees, with its comparison of published rates as at 1 April 2026", url: "https://www.comcom.govt.nz/regulated-industries/retail-payments/merchant-service-fees/" },
      { label: "Commerce Commission: making and accepting payments (surcharging expectations)", url: "https://www.comcom.govt.nz/regulated-industries/retail-payments/making-and-accepting-payments/" },
      { label: "Commerce Commission: pricing your products or services (how to surcharge appropriately)", url: "https://www.comcom.govt.nz/business/dealing-with-typical-situations/selling-goods-and-services/pricing-your-products-or-services/" },
      { label: "Commerce Commission: changes in the payments system (October 2025)", url: "https://www.comcom.govt.nz/assets/Uploads/Retail-Payment-System-Changes-in-the-payments-system-8-October-2025.pdf" },
      { label: "Commerce Commission: monitoring snapshot, three in four payments use Visa and Mastercard (June 2026)", url: "https://www.comcom.govt.nz/assets/Uploads/Payments-monitoring-snapshot-Convenience-of-Visa-and-Mastercard-sees-businesses-pay-more-30-June-2026.pdf" },
      { label: "Commerce Commission: interchange fee regulation (dates for personal and commercial cards)", url: "https://www.comcom.govt.nz/regulated-industries/projects/interchange-fee-regulation/" },
      { label: "MinterEllison (July 2025): final decision, in-person personal credit cap cut from 0.80% to 0.30%, debit caps unchanged", url: "https://minterellison.co.nz/insights/new-zealand-payment-system-update-interchange-fee" },
      { label: "Consumer Protection: card payment surcharges", url: "https://www.consumerprotection.govt.nz/general-help/ways-to-buy-and-pay/card-payment-surcharges" },
      { label: "BNZ: Pay Portable EFTPOS pricing (rental, fixed merchant service fees, Payap)", url: "https://www.bnz.co.nz/business-banking/payments/portable-eftpos" },
      { label: "BNZ: understanding merchant service fees (no fee for Cheque or Savings, charged on the 15th)", url: "https://www.bnz.co.nz/business-banking/support/merchant-services/merchant-service-fees" },
      { label: "ANZ: merchant fees explained", url: "https://www.anz.co.nz/business/accept-payments/merchant-fees-explained/" },
      { label: "Stripe: pricing in New Zealand (Terminal, Tap to Pay, disputes)", url: "https://stripe.com/nz/pricing" },
      { label: "Stripe: fees for refunded payments", url: "https://support.stripe.com/questions/understanding-fees-for-refunded-payments" },
      { label: "Stripe docs: refunds and reversals", url: "https://docs.stripe.com/refunds" },
      { label: "Payments NZ: Consumer Research 2026", url: "https://www.paymentsnz.co.nz/resources/articles/consumer-research-2026/" },
      { label: "Inland Revenue IS 26/02 (24 March 2026): GST on payment processing services to merchants", url: "https://www.taxtechnical.ird.govt.nz/interpretation-statements/2026/is-26-02" },
      { label: "Inland Revenue QB 18/14: GST on fees charged to customers for paying by card", url: "https://www.taxtechnical.ird.govt.nz/questions-we-ve-been-asked/2018/qb-1814-gst-treatment-of-fees-that-suppliers-charge-customers-for-using-a-credit-or-debit-card" },
      { label: "NZ Legislation: Retail Payment System (Ban on Merchant Surcharges) Amendment Bill", url: "https://www.legislation.govt.nz/bill/government/2025/205/en/latest/" },
      { label: "RNZ (23 September 2026): bills left on the Order Paper as Parliament rises, including the surcharge ban", url: "https://www.rnz.co.nz/news/political/1536550/debates-finally-complete-incomplete-and-unwelcome" },
    ],
    related: [],
  },
  {
    slug: "payment-processing-fees-singapore",
    market: "SG",
    checked: "2026-10-25",
    title: "Credit card, NETS and PayNow fees in Singapore: what small shops pay and how much margin they cost",
    summary: "Singapore shops pay about 0.25% for PayNow QR, 0.8% for NETS and 2.5% or more for credit cards, and the rules bar surcharges. See what that takes from margin.",
    content: [
      { type: "p", text: "A small shop in Singapore pays about 0.25% to take PayNow in a bank's QR app, 0.8% for NETS, and 2.5% or more for credit cards: 2.5% on DBS's MAX app (Android phones), 2.5% + S$0.50 at HitPay, up to 3.5% on NETS card terminals. PayNow's rules, Visa's rules and NETS's merchant agreement all bar surcharges, so the fees come out of your gross profit. On a S$20 item that cost you S$12, a 2.5% card fee takes 50 cents of your S$8 margin, or 6.25% of it; PayNow takes 5 cents." },

      { type: "h2", text: "What does each way of paying cost a small shop in Singapore?" },
      { type: "p", text: "Rates published as of October 2026. Card rates on a DBS, OCBC or UOB terminal are set in your merchant agreement and mostly aren't published." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No processing fee", "82% of citizens and PRs aged 18 to 65 still use cash, behind cards (87%) and PayNow (83%)"],
          ["PayNow QR", "0.25% in the DBS MAX and OCBC OneCollect apps; HitPay 0.4% (at least S$0.10)", "New sign-ups get it free for six months at DBS, three at OCBC"],
          ["NETS (local debit cards)", "0.8%, plus S$38 a month for a NETS-only terminal and a S$10 monthly telco charge", "Quoted before GST. NETS QR on a static label: 0.25% to 0.8%"],
          ["Visa and Mastercard", "DBS MAX on an Android phone 2.5%; HitPay 2.5% + S$0.50; NETS card terminal up to 3.5%, plus S$50 a month", "The largest share of in-store spending in 2025: 40%"],
          ["Apple Pay, Google Pay, Samsung Pay", "The rate of the card in the wallet", "A phone tap is a card payment through your terminal"],
          ["GrabPay and ShopeePay", "HitPay in person: GrabPay 2.2%, ShopeePay 1.8%", "OCBC OneCollect: 1.5%"],
          ["Alipay+, WeChat Pay and other overseas QR wallets", "NETS up to 1.8%; OCBC OneCollect 1.5%", "The way many tourists pay"],
        ],
      },
      { type: "note", text: "A bank's merchant discount rate (MDR) on credit cards is exempt from GST. Other fees may carry 9% GST, which a GST-registered shop claims back. If you aren't registered, it's a cost: 0.8% plus GST is 0.872%." },

      { type: "h2", text: "Processing fees come out of your margin, not your sales" },
      { type: "p", text: "A 2.5% fee sounds small because it's measured against the sale, but it's paid out of what's left after the cost of the goods. Take an item you sell for S$20 that costs you S$12. Your gross profit is S$8, a 40% margin:" },
      {
        type: "table",
        caption: "A shop that isn't GST-registered, so the price carries no GST. \"Left\" is before rent, wages and other overheads, so it isn't net profit.",
        head: ["", "Cash", "PayNow at 0.25%", "NETS at 0.8%", "Card at 2.5%", "Card at 2.5% + S$0.50"],
        rows: [
          ["Sale", "S$20.00", "S$20.00", "S$20.00", "S$20.00", "S$20.00"],
          ["Cost of the item", "S$12.00", "S$12.00", "S$12.00", "S$12.00", "S$12.00"],
          ["Processing fee", "S$0.00", "S$0.05", "S$0.16", "S$0.50", "S$1.00"],
          ["Left after cost and fee", "S$8.00", "S$7.95", "S$7.84", "S$7.50", "S$7.00"],
          ["Fee as a share of gross profit", "0%", "0.6%", "2%", "6.3%", "12.5%"],
        ],
      },
      { type: "p", text: "The last row comes from one formula: fee as a share of gross profit = fee rate ÷ gross margin. Here that's 2.5% ÷ 40% = 6.25%. The thinner your margin, the bigger the bite:" },
      {
        type: "table",
        caption: "Each cell is the fee as a share of gross profit. Percentage fees only; a fixed fee per payment adds to these.",
        head: ["Gross margin", "Fee 0.25%", "Fee 0.8%", "Fee 2.5%", "Fee 3.5%"],
        rows: [
          ["20%", "1.3%", "4%", "12.5%", "17.5%"],
          ["30%", "0.8%", "2.7%", "8.3%", "11.7%"],
          ["40%", "0.6%", "2%", "6.3%", "8.8%"],
          ["50%", "0.5%", "1.6%", "5%", "7%"],
          ["60%", "0.4%", "1.3%", "4.2%", "5.8%"],
        ],
      },
      { type: "p", text: "A minimart on a 20% margin gives up an eighth of its gross profit to a 2.5% card fee, and only 1.3% of it to PayNow." },
      { type: "p", text: "If you're GST-registered, the fee is charged on the GST too: at 9% GST the S$20 item rings up at S$21.80, and 2.5% of that, about 55 cents, is 6.8% of your S$8 margin rather than 6.25%. For the real cost, multiply your rate by 1.09." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "Cash costs nothing, and cards cost ten times what PayNow does. Here's a shop that isn't GST-registered and takes S$30,000 in a month:" },
      {
        type: "table",
        caption: "Example rates from the table above; terminal rental isn't included.",
        head: ["Payment method", "Takings", "Rate", "Fee"],
        rows: [
          ["Cash", "S$4,000", "—", "S$0.00"],
          ["PayNow QR", "S$7,000", "0.25%", "S$17.50"],
          ["NETS", "S$5,000", "0.8%", "S$40.00"],
          ["Cards and phone wallets", "S$12,000", "2.5%", "S$300.00"],
          ["GrabPay, ShopeePay and other QR wallets", "S$2,000", "1.8%", "S$36.00"],
          ["Total", "S$30,000", "", "S$393.50"],
        ],
      },
      { type: "p", text: "Cards are 40% of the takings but about three-quarters of the fees; PayNow, almost a quarter of the takings, is about 4% of them. That's about S$4,720 a year, before terminal rental. Put in your own takings and rates to get your number." },

      { type: "h2", text: "Why your payouts don't match your takings" },
      { type: "p", text: "Your POS records what the customer paid. What reaches your bank account follows each provider's rules." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid and fees as a separate expense, so the fees stay visible.",
          "NETS pays into your bank the next working day; HitPay pays out card sales from the next business day, net of its fee; OCBC OneCollect credits PayNow instantly and takes its PayNow fee monthly.",
          "A refund doesn't give the fee back at HitPay. For NETS and bank plans, check your agreement.",
        ],
      },

      { type: "h2", text: "Can you add a surcharge for PayNow or card payments?" },
      { type: "p", text: "Not for PayNow: the Association of Banks in Singapore's rules bar any PayNow surcharge, or charging PayNow customers more than others, and a bank can suspend or cancel a shop's PayNow for it." },
      { type: "p", text: "For cards, not under the rules you signed up to. Visa forbids surcharges unless local law expressly requires allowing them, and we found no Singapore law that does; NETS's agreement forbids them on NETS and the cards it acquires itself unless NETS approves. Both also rule out a minimum spend, so a \"cards for S$10 and above\" sign breaks them. NETS's agreement even bars promoting other ways to pay more actively than its cards, so read yours before asking customers to use PayNow." },
      { type: "p", text: "So recover payment costs in your prices: if cards are 40% of takings at 2.5%, prices 1% higher cover the card fees." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs its fee and earns the sales you'd lose without it. The share of its sales that must be extra business to break even = fee rate ÷ gross margin." },
      { type: "p", text: "Cards at 2.5% on a 40% margin need 6.25%, about one card customer in 16; at HitPay's 2.5% + S$0.50, the S$20 sale's S$1 fee is 5%, so one in eight. Overseas QR wallets at 1.8% need 4.5%, and a tourist who only carries Alipay+ or WeChat Pay has no other way to pay you." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "Divide the month's fees on your statement, terminal rental included, by your takings for each payment method. That's your effective rate. Bank card rates are negotiated: get a written quote that says whether it covers American Express and overseas cards." },
      { type: "p", text: "GST-registered? InvoiceNow applies to new voluntary registrants since 1 April 2026 and to every other GST-registered business between 2028 and 2031: invoice data goes to IRAS through an InvoiceNow-Ready Solution, and POS sales can go as totals. DingPOS is not one and sends nothing to IRAS, so use it alongside one, such as your accounting software." },
      { type: "p", text: "If you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, tap a payment method and fill in Processing fee: a percentage, a fixed amount per transaction, or both, such as 2.5% and S$0.50 for cards on HitPay. Keep PayNow, NETS and cards as separate methods. Include any GST you can't claim back: for 0.8% plus GST, enter 0.87%. HitPay keeps its fee on refunds, so turn off “Percentage fee returned on refunds”." },
      { type: "p", text: "From then on, the Payment Methods card on Stats does the sums:" },
      {
        type: "list",
        items: [
          "Under each method with a rate, a “Fee · Net” line shows its estimated fee and estimated net received.",
          "The foot of the card totals the period's estimated fees and net received.",
          "Payments taken before a method had a rate are counted as “N missing a rate”, and the net shows “—”.",
        ],
      },
      { type: "p", text: "These are estimates from your own rates: DingPOS doesn't process payments or read your provider's statements, so your statement shows the actual amount. [How to set it up](/support/payment-fees/). Fee tracking is on the Standard plan and up ([Pricing](/pricing/)), with a free 30-day trial." },
    ],
    sources: [
      { label: "NETS Standard Price Guide (May 2026): terminal, static QR, card acceptance and cross-border fees", url: "https://www.nets.com.sg/wp-content/uploads/document-application-nets-services-terminal-sgqr-label.pdf" },
      { label: "NETS: commercial agreement for merchants (no surcharges, no minimum amounts)", url: "https://www.nets.com.sg/nets/for-business/nets-commercial-agreement-for-merchants" },
      { label: "NETS: merchant guide (sales proceeds the next working day)", url: "https://www.nets.com.sg/wp-content/uploads/2022/07/document-guide-pop-merchant.pdf" },
      { label: "DBS MAX: fees for PayNow QR and contactless cards", url: "https://www.dbs.com.sg/sme/max" },
      { label: "OCBC OneCollect: fees and crediting times", url: "https://www.ocbc.com/business-banking/help-and-support/payment-collection-transactions/one-collect" },
      { label: "HitPay: pricing in Singapore (in-person rates, refunds, chargebacks, payouts)", url: "https://hitpayapp.com/sg/pricing" },
      { label: "The Straits Times (April 2026): Kantar survey on how Singaporeans pay", url: "https://www.straitstimes.com/multimedia/graphics/2026/04/payment-methods/index.html" },
      { label: "Singapore Business Review: cards and digital wallets' share of 2025 POS spend, from a Global Payments report", url: "https://sbr.com.sg/news/cards-lead-sgs-payments-market-in-2025-wallets-and-a2a-gain-ground" },
      { label: "Association of Banks in Singapore (5 June 2026): PayNow merchant surcharge prohibition FAQ", url: "https://abs.org.sg/docs/library/merchant-surcharge-prohibition-faq_5jun2026.pdf" },
      { label: "Visa Core Rules (18 April 2026): 1.5.5.1 minimum amounts and 1.5.5.2 surcharges", url: "https://www.visa.com.sg/content/dam/VCOM/download/about-visa/visa-rules-public.pdf" },
      { label: "IRAS GST Guide for the Banking Industry (30 January 2026): MDR exempt from GST", url: "https://www.iras.gov.sg/media/docs/default-source/e-tax/etaxguide_gst_guide-for-the-banking-industry.pdf" },
      { label: "IRAS: conditions for claiming input tax", url: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/claiming-gst-(input-tax)/conditions-for-claiming-input-tax" },
      { label: "IRAS (26 February 2026): GST InvoiceNow Requirement extended to all GST-registered businesses by April 2031", url: "https://www.iras.gov.sg/news-events/newsroom/committee-of-supply-2026--extension-of-gst-invoicenow-requirement-to-all-gst-registered-businesses-by-april-2031" },
      { label: "IRAS: FAQ on the GST InvoiceNow Requirement (16 April 2026), 3.12 POS sales", url: "https://www.iras.gov.sg/media/docs/default-source/uploadedfiles/gst/frequently-asked-questions-for-gst-invoicenow-requirement.pdf" },
    ],
    related: [],
  },
  {
    slug: "payment-processing-fees-united-states",
    market: "US",
    checked: "2026-10-25",
    title: "Credit card processing fees for small businesses in the US: what you pay and how much margin they take",
    summary: "Square, Stripe, PayPal and Clover charge US shops 2.29% to 2.7% plus 5¢ to 15¢ per in-person card payment. See how much of your margin that takes.",
    content: [
      { type: "p", text: "The big flat-rate providers charge US shops 2.29% to 2.7% plus 5¢ to 15¢ for each in-person card payment: Square 2.6% + 15¢ on its free plan, Stripe Terminal 2.7% + 5¢, PayPal 2.29% + 9¢, and Clover 2.3% to 2.6% + 10¢, depending on the plan. On these plans a debit card costs the same as a credit card. The fee comes out of your gross profit: on an item you sell for $25 that cost you $15, Square's 80¢ fee takes 8% of your $10 margin." },

      { type: "h2", text: "What do card payments cost a small shop in the US?" },
      { type: "p", text: "Rates published as of October 2026. Bank and processor merchant accounts aren't published; your agreement and statements are what count." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No processing fee", "About one in seven US consumer payments in 2025"],
          ["Credit and debit cards on a flat-rate plan (Visa, Mastercard, Amex, Discover)", "Square 2.6% + 15¢ (2.5% + 15¢ on Square Plus, 2.4% + 15¢ on Premium); Clover 2.3% to 2.6% + 10¢; PayPal 2.29% + 9¢; Stripe Terminal 2.7% + 5¢", "Square Plus is $49 a month per location, Premium $149"],
          ["Apple Pay, Google Pay, a phone or watch", "The rate of the card in the wallet", "A phone tap is a card payment through your reader"],
          ["Afterpay (buy now, pay later)", "Through Square: 6% + 30¢", ""],
          ["Cards issued outside the US", "Square and Stripe add 1.5%", ""],
        ],
      },
      { type: "p", text: "Plan fees count too: Clover's Retail Standard plan, which gets the 2.3% rate, costs $84.95 a month, 0.85% on $10,000 of card sales." },
      { type: "note", text: "The US has no VAT or GST, so there's no tax on your fees to claim back. Your processor reports card sales on Form 1099-K at the gross amount, before fees and refunds, and you deduct those yourself, so keep your statements." },

      { type: "h2", text: "Processing fees come out of your margin, not your sales" },
      { type: "p", text: "A 2.6% fee sounds small because it's measured against the sale, but it's paid out of what's left after the cost of the goods. Take an item you sell for $25 before sales tax that costs you $15. Your gross profit is $10, a 40% margin:" },
      {
        type: "table",
        caption: "Amounts before sales tax. \"Left\" is before rent, wages and other overheads, so it isn't net profit.",
        head: ["", "Cash", "PayPal 2.29% + 9¢", "Square 2.6% + 15¢", "Stripe 2.7% + 5¢"],
        rows: [
          ["Sale", "$25.00", "$25.00", "$25.00", "$25.00"],
          ["Cost of the item", "$15.00", "$15.00", "$15.00", "$15.00"],
          ["Processing fee", "$0.00", "$0.66", "$0.80", "$0.73"],
          ["Left after cost and fee", "$10.00", "$9.34", "$9.20", "$9.27"],
          ["Fee as a share of gross profit", "0%", "6.6%", "8.0%", "7.3%"],
        ],
      },
      { type: "p", text: "The last row comes from one formula: fee as a share of gross profit = fee rate ÷ gross margin. Count the fixed fee as part of the rate: 15¢ on a $25 sale is 0.6%, so Square's all-in rate here is 3.2%, and 3.2% ÷ 40% = 8%. The thinner your margin, the bigger the bite:" },
      {
        type: "table",
        caption: "Each cell is the fee as a share of gross profit. Use your all-in rate, fixed fee included.",
        head: ["Gross margin", "All-in fee 2.5%", "All-in fee 3%", "All-in fee 3.5%"],
        rows: [
          ["20%", "12.5%", "15.0%", "17.5%"],
          ["30%", "8.3%", "10.0%", "11.7%"],
          ["40%", "6.3%", "7.5%", "8.8%"],
          ["50%", "5.0%", "6.0%", "7.0%"],
          ["60%", "4.2%", "5.0%", "5.8%"],
        ],
      },
      { type: "p", text: "A convenience store on a 20% margin gives up 15% of its gross profit to a 3% all-in fee." },
      { type: "p", text: "The fee is charged on the sales tax too: Square takes it from the total, tax and tip included. With 8% sales tax the $25 item rings up at $27, and the fee is 85¢, 8.5% of your $10 margin rather than 8%. For the real cost, multiply the percentage part of your rate by 1 plus your sales tax rate." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "The fixed fee on every payment adds up. Here's a shop on Square's free plan that takes $30,000 in a month:" },
      {
        type: "table",
        caption: "Amounts include sales tax, as customers paid them. US cards: 800 payments averaging $30; cards from abroad: 25 averaging $40; Afterpay: 10 sales averaging $100.",
        head: ["Payment method", "Sales", "Rate", "Fee"],
        rows: [
          ["Cash", "$4,000", "—", "$0.00"],
          ["Cards and phone wallets, issued in the US", "$24,000", "2.6% + 15¢", "$744.00"],
          ["Cards issued abroad", "$1,000", "4.1% + 15¢", "$44.75"],
          ["Afterpay", "$1,000", "6% + 30¢", "$63.00"],
          ["Total", "$30,000", "", "$851.75"],
        ],
      },
      { type: "p", text: "That's about 2.8% of what customers paid, or roughly $10,200 a year, and the 15¢ per card payment alone is $123.75 of it. Afterpay and cards from abroad are under 7% of the sales but about an eighth of the fees. Put in your own sales and rates to get your number." },

      { type: "h2", text: "Why your deposits are smaller than your sales" },
      { type: "p", text: "Your POS records what the customer paid. Your processor deposits what's left after its fee, and the gap is your fees." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid and fees as a separate expense. Your sales then line up with the gross amount on your Form 1099-K.",
          "Square's free transfers arrive the next business day (Friday's by Monday); instant ones cost 1.95%.",
          "A refund doesn't give the fee back at Square or Stripe. On a bank merchant account, check your agreement.",
        ],
      },

      { type: "h2", text: "Can you add a surcharge for credit card payments?" },
      { type: "p", text: "In most states, yes, on credit cards only. Visa caps a surcharge at 3% or what the card costs you, whichever is lower, and requires 30 days' notice to your processor, notices at the entrance and register, and the surcharge shown on every receipt. Debit and prepaid cards can't be surcharged, even when the customer picks “credit” on the terminal." },
      { type: "p", text: "State law comes first. Connecticut, Maine, Massachusetts and Puerto Rico ban card surcharges. Oklahoma caps them at 2% or your cost, whichever is lower, and allows none if you only take cards; Minnesota caps them at 5%, with notice out loud and on a sign. Colorado, New Jersey and New York have their own rules. California's attorney general says a card-only shop must put the fee in its advertised price. Texas and Washington, among others, tax a card fee passed on to customers on a taxable sale." },
      { type: "p", text: "A cash discount is the other route: Visa allows it when each item shows the card price, or card and cash prices side by side. A card fee added at checkout is a surcharge under Visa's rules, whatever you call it. A Visa–Mastercard settlement awaiting final approval would give merchants more room to surcharge; until then, today's rules apply." },
      { type: "p", text: "Or recover card costs in your prices: if cards are 85% of what customers pay at about 3.2% all in, fees come to about 2.7% of sales, so prices about 2.8% higher cover them." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs its fee and earns the sales you'd lose without it. The share of its sales that must be extra business to break even = fee rate ÷ gross margin." },
      { type: "p", text: "Cards on Square at 3.2% all in on a 40% margin need 8%, one card customer in 12: an easy call, with cards at two-thirds of US consumer payments. Afterpay is closer: at 6% + 30¢ on a $100 sale the fee is 6.3%, and 6.3% ÷ 40% is about 16%: roughly one Afterpay sale in six has to be one you wouldn't otherwise have made." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "Divide the month's total fees on your statement, monthly, terminal and statement fees included, by your card sales. That's your effective rate. Set your credit card fees against the average merchants paid on Visa and Mastercard credit cards in 2024: 2.35%, per the Nilson Report." },
      { type: "p", text: "If a lot of customers pay by debit, ask about interchange-plus, where you pay each card's actual interchange plus a markup. Regulation II caps debit interchange from banks and credit unions with $10 billion or more in assets at 21¢ + 0.05%, plus 1¢ for fraud prevention (challenged in court, but still in force): at most about 23¢ on a $25 sale, against Square's 80¢, before network fees and the markup." },
      { type: "p", text: "In the 50 states, we found no federal or state rule that requires a certified cash register. Puerto Rico's Hacienda requires a fiscal terminal at every point of sale for merchants with more than $125,000 in annual sales, and for any business charging the reduced sales tax rate on prepared food, whatever its sales. DingPOS is not a fiscal terminal and doesn't report to Hacienda; if that rule covers you, ring up your sales on your fiscal terminal and use its reports for this guide's math." },
      { type: "p", text: "If that rule doesn't cover you and you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, tap a payment method and fill in Processing fee: a percentage, a fixed amount per transaction, or both, such as 2.6% and $0.15 on Square's free plan. Enter the rate as quoted: DingPOS applies it to what the customer pays, tax included, as your processor does. Square and Stripe keep their fee on refunds, so turn off “Percentage fee returned on refunds”." },
      { type: "p", text: "From then on, the Payment Methods card on Stats does the math:" },
      {
        type: "list",
        items: [
          "Under each method with a rate, a “Fee · Net” line shows its estimated fee and estimated net received.",
          "The foot of the card totals the period's estimated fees and net received.",
          "Payments taken before a method had a rate are counted as “N missing a rate”, and the net shows “—”.",
        ],
      },
      { type: "p", text: "These are estimates from your own rates: DingPOS doesn't process payments or read your processor's statements, so your statement shows the actual amount. [How to set it up](/support/payment-fees/). Fee tracking is on the Standard plan and up ([Pricing](/pricing/)), with a free 30-day trial." },
    ],
    sources: [
      { label: "Square: pricing and processing fees (US plans)", url: "https://squareup.com/us/en/pricing" },
      { label: "Square Support Center: Square fees (fees on the total including tax and tip, Cash App Pay, Afterpay, international cards)", url: "https://squareup.com/help/us/en/article/5068-what-are-square-s-fees" },
      { label: "Square Support Center: manage customer refunds (fees not refunded)", url: "https://squareup.com/help/us/en/article/6116-process-refunds" },
      { label: "Square Support Center: transfer options (next business day, 1.95% instant and same-day, weekend balance)", url: "https://squareup.com/help/us/en/article/3807-deposit-options-with-square" },
      { label: "Stripe: pricing (Terminal, Tap to Pay, international cards, disputes)", url: "https://stripe.com/pricing" },
      { label: "Stripe docs: refund and cancel payments (fees not returned)", url: "https://docs.stripe.com/refunds" },
      { label: "PayPal: merchant fees (PayPal Point of Sale card-present and QR code rates)", url: "https://www.paypal.com/us/business/paypal-business-fees" },
      { label: "NerdWallet: Clover POS review 2026 (processing rates and plan prices)", url: "https://www.nerdwallet.com/business/software/reviews/clover-pos" },
      { label: "Federal Reserve Financial Services (May 11, 2026): 2026 Diary of Consumer Payment Choice", url: "https://www.frbservices.org/news/press-releases/2026-diary-consumer-payment-choice-consumer-habits-hold-steady-payment-options-grow/" },
      { label: "Federal Reserve: Regulation II debit interchange cap and average fees (2024 data)", url: "https://www.federalreserve.gov/paymentsystems/regii-average-interchange-fee.htm" },
      { label: "Payments Dive (June 2026): court gives preliminary approval to the Visa-Mastercard settlement", url: "https://www.paymentsdive.com/news/court-approves-visa-mastercard-settlement/822440/" },
      { label: "NACS (March 2025): Nilson Report, Visa and Mastercard credit card swipe fees averaged 2.35% in 2024", url: "https://www.convenience.org/stay-current/news/2025/march/20/3-swipe-fees-hit-record-high-in-2024_research" },
      { label: "ABA Banking Journal (September 2025): North Dakota court vacates Regulation II, ruling stayed pending appeal", url: "https://bankingjournal.aba.com/2025/09/north-dakota-federal-court-vacates-regulation-ii/" },
      { label: "Visa: statement on preliminary approval of the MDL settlement (terms)", url: "https://corporate.visa.com/en/sites/visa-perspectives/company-news/visa-statement-mdl-settlement.html" },
      { label: "Visa: U.S. merchant surcharge Q&A (3% cap, 30 days' notice, no debit, cash discounts, state laws)", url: "https://usa.visa.com/content/dam/VCOM/global/support-legal/documents/merchant-surcharging-qa-for-web.pdf" },
      { label: "Connecticut Department of Consumer Protection: the surcharge law", url: "https://portal.ct.gov/dcp/knowledge-base/articles/surcharge-faqs/what-is-the-connecticut-surcharge-law?language=en_US" },
      { label: "Maine Revised Statutes 9-A §8-509: surcharge prohibited", url: "https://www.mainelegislature.org/legis/statutes/9-A/title9-Asec8-509.html" },
      { label: "Massachusetts General Laws c. 140D §28A: credit card surcharges", url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter140d/Section28a" },
      { label: "Oklahoma Legislature: SB 677 (2025), enrolled text (ban repealed, 2% cap, no surcharge for card-only sellers)", url: "https://www.oklegislature.gov/cf_pdf/2025-26%20ENR/SB/SB677%20ENR.PDF" },
      { label: "Puerto Rico Act 152-2013 amending Act 150-2008 (10 L.P.R.A. §11): card surcharges prohibited", url: "https://www.lexjuris.com/lexlex/Leyes2013/lexl2013152.htm" },
      { label: "Minnesota Statutes 325G.051: credit card surcharges (5% cap, notice)", url: "https://www.revisor.mn.gov/statutes/cite/325G.051" },
      { label: "California Attorney General: SB 478 hidden fees FAQ", url: "https://oag.ca.gov/hiddenfees" },
      { label: "Texas Comptroller, Tax Policy News (July 2024): credit card processing fees passed on to customers", url: "https://comptroller.texas.gov/taxes/tax-policy-news/2024-july.php" },
      { label: "Washington Department of Revenue: surcharges, including tariffs", url: "https://dor.wa.gov/forms-publications/publications-subject/tax-topics/surcharges-including-tariffs" },
      { label: "Tax Foundation: what is a value-added tax (every OECD country but the US)", url: "https://taxfoundation.org/taxedu/glossary/value-added-tax-vat/" },
      { label: "IRS: what to do with Form 1099-K (gross amount not adjusted for fees or refunds)", url: "https://www.irs.gov/businesses/what-to-do-with-form-1099-k" },
      { label: "Hacienda (Puerto Rico): Determinación Administrativa 15-20, fiscal terminals", url: "https://hacienda.pr.gov/publicaciones/determinacion-administrativa-num-15-20" },
      { label: "Hacienda (Puerto Rico): Determinación Administrativa 19-03, fiscal terminals for the reduced IVU rate on prepared food", url: "https://hacienda.pr.gov/publicaciones/determinacion-administrativa-num-19-03" },
    ],
    related: [],
  },
  {
    slug: "payment-processing-fees-united-kingdom",
    market: "GB",
    checked: "2026-10-25",
    title: "Card machine fees in the UK: what small shops pay and how much margin they take",
    summary: "SumUp, Square, PayPal and Dojo charge UK shops 0.99% to 1.75% per card payment, and you can't surcharge personal cards. See how much of your margin that takes.",
    content: [
      { type: "p", text: "Pay-as-you-go card machines charge UK shops 1.69% to 1.75% of every card payment, with no monthly fee: 1.69% at SumUp and 1.75% at Square and PayPal POS. Plans for steadier takings go lower: SumUp charges 0.99% on UK personal cards for £19 a month plus VAT, and Dojo 1.2% plus 5p a payment under £100,000 a year of card takings. You can't pass the fee on to customers paying with a personal card, so it comes out of your gross profit: on an item you sell for £20 that cost you £12, a 1.75% fee takes 35p of your £8 margin, or 4.4% of it." },

      { type: "h2", text: "What do card payments cost a small shop in the UK?" },
      { type: "p", text: "Rates published as of October 2026. Banks and acquirers that rent you a terminal on contract usually charge per card type and don't publish prices." },
      {
        type: "table",
        head: ["Payment method", "What the shop pays", "Notes"],
        rows: [
          ["Cash", "No fee", "8% of UK payments by number in 2025"],
          ["Cards on a pay-as-you-go reader", "SumUp 1.69%; Square 1.75%; PayPal POS 1.75%", "No monthly fee; one rate for Visa, Mastercard and Amex. Cards were 64% of UK payments in 2025"],
          ["Cards on SumUp Payments Plus", "0.99% on UK personal debit and credit cards; 1.69% on Amex, premium, business and international cards", "£19 a month plus VAT; SumUp suggests it from £3,000 a month"],
          ["Cards on Dojo", "1.2% blended rate plus a 5p secure transaction fee (plus VAT) per payment, under £100,000 a year on cards", "Extra for non-UK and keyed-in cards"],
          ["Apple Pay, Google Pay, a phone or watch", "The rate of the card in the wallet", "A phone tap is a card payment through your reader"],
          ["Clearpay (buy now, pay later)", "Through Square: 6% + 30p", "Square pays you in full, as soon as the next day"],
        ],
      },
      { type: "note", text: "Card processing fees usually carry no VAT: HMRC treats card companies' commission as exempt. Card machines, software plans and separate technical charges, such as Dojo's secure transaction fee, usually carry 20% VAT, which a VAT-registered business reclaims." },

      { type: "h2", text: "Card fees come out of your margin, not your sales" },
      { type: "p", text: "A 1.75% fee sounds small because it's measured against the sale, but it's paid out of what's left after the cost of the goods. Take an item you sell for £20 that costs you £12. Your gross profit is £8, a 40% margin:" },
      {
        type: "table",
        caption: "For a shop that isn't VAT-registered. Dojo's fee is 24p plus the 5p secure transaction fee and 1p VAT on it. \"Left\" is before rent, wages and other overheads, so it isn't net profit.",
        head: ["", "Cash", "SumUp Payments Plus 0.99%", "Dojo 1.2% + 5p + VAT", "SumUp 1.69%", "Square or PayPal 1.75%"],
        rows: [
          ["Sale", "£20.00", "£20.00", "£20.00", "£20.00", "£20.00"],
          ["Cost of the item", "£12.00", "£12.00", "£12.00", "£12.00", "£12.00"],
          ["Card fee", "£0.00", "£0.20", "£0.30", "£0.34", "£0.35"],
          ["Left after cost and fee", "£8.00", "£7.80", "£7.70", "£7.66", "£7.65"],
          ["Fee as a share of gross profit", "0%", "2.5%", "3.8%", "4.2%", "4.4%"],
        ],
      },
      { type: "p", text: "The last row comes from one formula: fee as a share of gross profit = fee rate ÷ gross margin. Here that's 1.75% ÷ 40% = 4.4%. The thinner your margin, the bigger the bite:" },
      {
        type: "table",
        caption: "Each cell is the fee as a share of gross profit. The 2.1% column is a 1.75% fee for a VAT-registered shop selling standard-rated goods.",
        head: ["Gross margin", "Fee 1%", "Fee 1.5%", "Fee 1.75%", "Fee 2.1%"],
        rows: [
          ["20%", "5.0%", "7.5%", "8.8%", "10.5%"],
          ["30%", "3.3%", "5.0%", "5.8%", "7.0%"],
          ["40%", "2.5%", "3.8%", "4.4%", "5.3%"],
          ["50%", "2.0%", "3.0%", "3.5%", "4.2%"],
          ["60%", "1.7%", "2.5%", "2.9%", "3.5%"],
        ],
      },
      { type: "p", text: "A convenience store on a 20% margin gives up almost 9% of its gross profit to a 1.75% fee." },
      { type: "p", text: "If you're VAT-registered, the fee is charged on the VAT too: Square takes its fee from the total, VAT included. A standard-rated £20 item rings up at £24, and 1.75% of that is 42p, 5.3% of your £8 margin rather than 4.4%. Multiply your rate by 1.2 for the real cost: 1.75% becomes 2.1%. Zero-rated goods, such as most food, carry no VAT, so their fee stays as quoted." },

      { type: "h2", text: "What a month of fees looks like" },
      { type: "p", text: "Cash costs nothing, and on some plans the type of card matters too. Here's a shop on SumUp that takes £15,000 in a month, priced on both of SumUp's plans:" },
      {
        type: "table",
        caption: "Amounts as customers paid them, VAT included. The shop is VAT-registered, so it reclaims the VAT on the £19 plan. The split between card types is an example.",
        head: ["Payment method", "Takings", "Pay-as-you-go (1.69%)", "Payments Plus (0.99%)"],
        rows: [
          ["Cash", "£1,500", "£0.00", "£0.00"],
          ["UK personal debit and credit cards, phone wallets", "£12,300", "£207.87", "£121.77"],
          ["Amex, premium, business and international cards (1.69% on both plans)", "£1,200", "£20.28", "£20.28"],
          ["Monthly plan fee (VAT reclaimed)", "", "£0.00", "£19.00"],
          ["Total", "£15,000", "£228.15", "£161.05"],
        ],
      },
      { type: "p", text: "On pay-as-you-go this shop pays about 1.5% of its takings in fees; on Payments Plus, about 1.1%, which saves £67.10 a month. The plan pays for itself once your UK personal card takings pass about £2,700 a month (£19 ÷ the 0.7-point saving), or about £3,300 if you're not VAT-registered. Put in your own takings and rates to get your number." },

      { type: "h2", text: "Why your payouts are smaller than your takings" },
      { type: "p", text: "Your till records what the customer paid. Most providers pay out what's left after their fee, and the gap is your card fees." },
      {
        type: "list",
        items: [
          "Record sales at the full amount the customer paid and fees as a separate expense, so the fees stay visible.",
          "Payouts take time: SumUp pays into its business account by 7am the next day, weekends included; Square's free transfers take one to two working days. Dojo bills its charges monthly rather than taking them from transfers, so check the bill too.",
          "Refunds: Square keeps its fee, PayPal POS gives the card fee back, and Dojo charges a 50p refund fee and applies its card rate to refunds too.",
        ],
      },

      { type: "h2", text: "Can you add a surcharge for card payments?" },
      { type: "p", text: "Not on personal cards. Since 13 January 2018 it has been illegal to charge extra for paying with a personal debit or credit card, or with methods such as PayPal. You may add a fee for a business (commercial) card, but no more than it costs you." },
      { type: "p", text: "So recover card costs in your prices: in the monthly example, cards are 90% of takings at 1.69%, and prices about 1.5% higher cover the fees." },

      { type: "h2", text: "Is a payment method worth accepting? Work out the break-even" },
      { type: "p", text: "A payment method costs its fee and earns the sales you'd lose without it. The share of its sales that must be extra business to break even = fee rate ÷ gross margin." },
      { type: "p", text: "Cards at 1.75% on a 40% margin need 4.4%, about one card sale in 23 (5.3%, one in 19, for a VAT-registered shop selling standard-rated goods): an easy call. Clearpay through Square at 6% + 30p is 6.3% on a £100 sale, and 6.3% ÷ 40% is about 16%: roughly one Clearpay sale in six has to be one you wouldn't otherwise have made." },

      { type: "h2", text: "How do you find the rate you're really paying?" },
      { type: "p", text: "Divide the month's total fees on your statement or bill by your card takings, counting terminal rental, any minimum monthly charge, extra charges for keyed-in payments and any PCI non-compliance fee (for a missed card-security check): £25 a month of rental on £5,000 of card takings adds 0.5% on its own. If a contract costs more than the published rates, get quotes." },
      { type: "p", text: "If you run your counter on an iPad, [DingPOS](/) can estimate the fees for you. In Settings → Payment Methods, tap a payment method and fill in Processing fee: a percentage, a fixed amount per transaction, or both, such as 6% and £0.30 for Clearpay through Square. Enter the rate as quoted: DingPOS applies it to what the customer pays, VAT included, as your provider does. Square and Dojo keep their fee on refunds, so turn off “Percentage fee returned on refunds”." },
      { type: "p", text: "From then on, the Payment Methods card on Stats does the sums:" },
      {
        type: "list",
        items: [
          "Under each method with a rate, a “Fee · Net” line shows its estimated fee and estimated net received.",
          "The foot of the card totals the period's estimated fees and net received.",
          "Payments taken before a method had a rate are counted as “N missing a rate”, and the net shows “—”.",
        ],
      },
      { type: "p", text: "These are estimates from your own rates: DingPOS doesn't process payments or read your provider's statements, so your statement shows the actual amount. [How to set it up](/support/payment-fees/). Fee tracking is on the Standard plan and up ([Pricing](/pricing/)), with a free 30-day trial." },
    ],
    sources: [
      { label: "SumUp: pricing (pay-as-you-go 1.69%, Payments Plus 0.99% for £19 a month, custom pricing, 7am next-day payouts)", url: "https://www.sumup.com/en-gb/pricing/" },
      { label: "Square: pricing and processing fees (UK), transfers and Instant Transfers", url: "https://squareup.com/gb/en/pricing" },
      { label: "Square Support Centre: Square fees (1.75% in person, non-UK cards, fees taken from the total including VAT, no chargeback fees)", url: "https://squareup.com/help/gb/en/article/5068-what-are-square-s-fees" },
      { label: "Square Support Centre: manage customer refunds (processing fees not refunded)", url: "https://squareup.com/help/gb/en/article/5060-refund-overview" },
      { label: "Square: Clearpay in person and online, 6% + 30p", url: "https://squareup.com/gb/en/buy-now-pay-later" },
      { label: "PayPal POS (Zettle): pricing and fees, 1.75% for cards and mobile wallets", url: "https://www.zettle.com/gb/pricing" },
      { label: "PayPal: how do I refund a Point of Sale payment? (card fee paid back)", url: "https://www.paypal.com/uk/smarthelp/article/how-do-i-refund-a-card-payment-faq4523" },
      { label: "Dojo: pricing and fees (1.2% blended rate under £100,000 annual card turnover)", url: "https://dojo.tech/pricing/" },
      { label: "Dojo: FAQs (5p secure transaction fee, 50p refund fee)", url: "https://dojo.tech/faqs/" },
      { label: "Dojo Support: understanding your monthly bill (VAT on the secure transaction fee, minimum monthly payment, non-qualifying transactions, PCI and chargeback fees)", url: "https://support.dojo.tech/s/article/How-to-Read-Your-Bill" },
      { label: "UK Finance: UK Payment Markets 2026, summary (2025 data)", url: "https://www.ukfinance.org.uk/system/files/2026-08/PaymentMarketsReport_2026Summary.pdf" },
      { label: "The Consumer Rights (Payment Surcharges) Regulations 2012, regulation 6A", url: "https://www.legislation.gov.uk/uksi/2012/3110/regulation/6A" },
      { label: "HM Treasury (13 January 2018): card surcharge ban", url: "https://www.gov.uk/government/news/card-surcharge-ban-means-no-more-nasty-surprises-for-shoppers" },
      { label: "HMRC VAT Finance Manual VATFIN3160: merchant charges are exempt", url: "https://www.gov.uk/hmrc-internal-manuals/vat-finance-manual/vatfin3160" },
      { label: "HMRC VAT Finance Manual VATFIN2450: payment handling and card processing services are taxable", url: "https://www.gov.uk/hmrc-internal-manuals/vat-finance-manual/vatfin2450" },
      { label: "GOV.UK: rates of VAT on different goods and services", url: "https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services" },
    ],
    related: [],
  },
];
