// DingPOS guides — da pack. Guides are acquisition articles written for one
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
//   market   — the market the facts hold for, a key of ui.markets ("DK")
//   checked  — YYYY-MM-DD the rates and rules were last verified
//   title    — the page h1 and <title>, phrased the way people search
//   summary  — index-card text and the page's meta description (≤ 160 characters)
//   content  — blocks, opening with a paragraph that answers the title directly:
//              { type: "p" | "h2" | "note", text }
//              { type: "list" | "steps", items: [text] }
//              { type: "table", caption?, head: [text], rows: [[text]] }
//              { type: "image", src, phone?, width, height, alt, caption? }
//              src / phone are .webp paths under public/ ("guides/<name>.webp");
//              width / height are src's pixel size; phone is its 1080w copy,
//              required when width > 1080; caption is plain text, no links.
//              Text may carry [label](/route/) links to a page of this
//              language (router-relative, trailing slash) or [label](https://…).
//   sources  — [{ label, url }] behind the article's figures and rules
//   related  — slugs of other guides in this pack
//
// Claims about DingPOS must match the app's code (AGENTS.md §Product Repos).
// Denmark requires cafés, restaurants, bars, pizzerias, kiosks, grocers and
// similar trades under DKK 10 million turnover to use a digital sales
// registration system meeting momsbekendtgørelsen § 64 (momsloven § 55 e);
// DingPOS does not meet it, so no string here may present DingPOS as a
// register for those trades or claim any compliance.

export const ui = {
  nav: "Guides",
  title: "Guides til små butikker",
  subtitle: "Betaling, omkostninger og avance: de udregninger, der betyder noget, når du selv står bag disken.",
  meta_description: "Guides til små butikker: hvad kort- og mobilbetaling koster, og hvor meget af avancen gebyrerne tager – med formler, regneeksempler og kilder.",
  back: "Alle guides",
  related_title: "Læs også",
  sources_title: "Kilder",
  checked: "Senest kontrolleret: {{date}}",
  cta_title: "Se gebyret for hver betalingsmåde på din iPad",
  cta_text: "DingPOS er en kasseapp til iPad for små butikker, uden provision af dit salg og med 30 dages gratis prøveperiode. Den er ikke et digitalt salgsregistreringssystem efter momsbekendtgørelsens krav: caféer, restauranter, barer, kiosker, købmænd og de andre brancher med den pligt skal bruge et system, der opfylder kravene, og ikke DingPOS.",
  cta_button: "Hent i App Store",
  markets: { DK: "Danmark" },
};

export const articles = [
  {
    slug: "payment-processing-fees-denmark",
    market: "DK",
    checked: "2026-10-25",
    title: "Kortgebyrer for butikker: Hvad koster Dankort, Visa og MobilePay – og hvor meget af avancen går til gebyrer?",
    summary: "Dankort koster en ny butik 0,55 %, MobilePay 0,99 % og SumUp 0,89 %. På en vare til 250 kr. med 80 kr. i avance tager 0,99 % godt 3 % af avancen.",
    content: [
      { type: "p", text: "En ny butik betaler 0,55 % pr. Dankort-betaling hos Nets. MobilePay koster 0,99 %, SumUp 0,89 %, og hos Nets koster Visa og Mastercard 1,30 % med en SmartPOS-terminal til 199 kr. om måneden. Gebyret går fra din avance: Sælger du en vare til 250 kr. med 80 kr. i avance, koster en MobilePay-betaling 2,48 kr., altså godt 3 % af avancen." },

      { type: "h2", text: "Hvad koster de forskellige betalingsmåder for en butik?" },
      { type: "p", text: "Tabellen viser udbydernes listepriser. Har du forhandlet din egen aftale, gælder den." },
      {
        type: "table",
        head: ["Betalingsmåde", "Gebyr for butikken", "Godt at vide"],
        rows: [
          ["Kontanter", "Intet gebyr", "Tager du imod kort eller mobilbetaling, skal du som hovedregel også tage imod kontanter fra kl. 6 til 22"],
          ["Dankort (Nets)", "0,550 % i første prisgruppe (op til 499 Dankort-betalinger om året), 0,495 % op til 4.999 og ned til 0,187 %", "Nye butikker starter i første prisgruppe. Prisen er reguleret ved lov, og aftalen fås kun hos Nets"],
          ["Visa og Mastercard via Nets SmartPOS", "1,30 %", "Terminalen koster 199 kr. om måneden med 36 måneders binding"],
          ["MobilePay", "0,99 %", "Købt direkte hos Vipps MobilePay; via et kassesystem får du prisen fra kasseleverandøren"],
          ["SumUp", "0,89 %", "Alle de kort, SumUp tager imod; Dankort nævnes ikke. Ingen månedlig betaling"],
          ["PayPal POS (tidligere Zettle)", "1,95 %", "Kort og wallets, også American Express; Dankort nævnes ikke"],
        ],
      },
      { type: "p", text: "Apple Pay og Google Pay har ikke deres eget gebyr: Kunden betaler med kortet i telefonen, og du betaler kortets sats." },
      { type: "note", text: "Moms: Gebyrer for betalinger er som udgangspunkt momsfri, men ren teknisk service kan være momspligtig, og terminaler sælges med moms. Se efter på fakturaen fra din udbyder." },

      { type: "h2", text: "Gebyret går fra avancen, ikke fra omsætningen" },
      { type: "p", text: "Gebyret er en procentdel af prisen med moms, men det går fra din avance, altså salgsprisen uden moms minus indkøbsprisen. Tag en vare til 250 kr. Uden 25 % moms er prisen 200 kr., og du har købt den ind for 120 kr. Avancen er 80 kr.:" },
      {
        type: "table",
        caption: "I kroner, gebyrer afrundet til hele øre. Dankort er første prisgruppe, Visa og Mastercard er Nets SmartPOS. „Tilbage af avancen“ er før husleje, løn og andre udgifter.",
        head: ["", "Kontant", "Dankort 0,55 %", "SumUp 0,89 %", "MobilePay 0,99 %", "Visa/Mastercard 1,30 %", "PayPal POS 1,95 %"],
        rows: [
          ["Kunden betaler", "250,00", "250,00", "250,00", "250,00", "250,00", "250,00"],
          ["Gebyr", "0", "1,38", "2,23", "2,48", "3,25", "4,88"],
          ["Du får ind", "250,00", "248,62", "247,77", "247,52", "246,75", "245,12"],
          ["Heraf moms til Skattestyrelsen", "50,00", "50,00", "50,00", "50,00", "50,00", "50,00"],
          ["Tilbage af avancen", "80,00", "78,62", "77,77", "77,52", "76,75", "75,12"],
          ["Gebyrets andel af avancen", "0 %", "1,7 %", "2,8 %", "3,1 %", "4,1 %", "6,1 %"],
        ],
      },
      { type: "p", text: "Formlen er: gebyrets andel af avancen = gebyrsats × 1,25 ÷ dækningsgrad. Dækningsgraden er avancen delt med prisen uden moms, her 80 ÷ 200 = 40 %, og 1,25 er prisen med moms delt med prisen uden. For MobilePay: 0,99 % × 1,25 ÷ 40 % = 3,1 %. Er butikken ikke momsregistreret, fordi omsætningen er under 50.000 kr. om året, bruger du 1 i stedet for 1,25." },
      {
        type: "table",
        caption: "Gebyrets andel af avancen ved 25 % moms, afrundet til én decimal.",
        head: ["Dækningsgrad", "Gebyr 0,55 %", "Gebyr 0,99 %", "Gebyr 1,30 %", "Gebyr 1,95 %"],
        rows: [
          ["20 %", "3,4 %", "6,2 %", "8,1 %", "12,2 %"],
          ["30 %", "2,3 %", "4,1 %", "5,4 %", "8,1 %"],
          ["40 %", "1,7 %", "3,1 %", "4,1 %", "6,1 %"],
          ["50 %", "1,4 %", "2,5 %", "3,3 %", "4,9 %"],
          ["60 %", "1,1 %", "2,1 %", "2,7 %", "4,1 %"],
        ],
      },

      { type: "h2", text: "Hvad koster gebyrerne om måneden?" },
      { type: "p", text: "Hver betalingsmåde har sin egen sats, så du regner dem hver for sig og lægger sammen. Tag en butik med Nets SmartPOS og MobilePay, der omsætter for 100.000 kr. med moms på en måned:" },
      {
        type: "table",
        caption: "I kroner. Dankort i anden prisgruppe (op til 4.999 Dankort-betalinger om året). Fordelingen er et eksempel.",
        head: ["Betalingsmåde", "Omsætning i måneden", "Sats", "Gebyr"],
        rows: [
          ["Kontanter", "8.000", "0", "0"],
          ["Dankort", "30.000", "0,495 %", "148,50"],
          ["Visa og Mastercard", "42.000", "1,30 %", "546,00"],
          ["MobilePay", "20.000", "0,99 %", "198,00"],
          ["Terminalleje", "", "199 kr. om måneden", "199,00"],
          ["I alt", "100.000", "", "1.091,50"],
        ],
      },
      { type: "p", text: "Butikken betaler omkring 1.090 kr. om måneden, cirka 13.100 kr. om året, for at tage imod 92.000 kr. digitalt." },

      { type: "h2", text: "Hvorfor kommer der færre penge ind på kontoen, end kassen viser?" },
      { type: "p", text: "Kassen registrerer det, kunden har betalt. Indløseren og MobilePay trækker gebyret fra udbetalingen eller opkræver det for sig. Forskellen er gebyret." },
      {
        type: "list",
        items: [
          "Bogfør salget med det fulde beløb og gebyret som en udgift for sig, ikke kun det, der kommer ind på kontoen. Så falder omsætningen ikke, fordi flere betaler digitalt, og du kan se, hvad betalingerne koster.",
          "Pengene kommer ikke samme dag: Nets SmartPOS betaler ud efter én bankdag, og MobilePay dagligt, ugentligt eller månedligt, som du vælger. Ved månedens udgang er en del af omsætningen stadig på vej.",
        ],
      },

      { type: "h2", text: "Må du lægge et kortgebyr på kunden?" },
      { type: "p", text: "Ikke på de kort, dine kunder normalt bruger. Betalingsloven forbyder gebyrer på kort med EU-reguleret interbankgebyr, det vil sige de almindelige debet- og kreditkort, også når kunden betaler med kortet via Apple Pay eller Google Pay." },
      { type: "p", text: "Du må blandt andet opkræve et gebyr på firmakort og kort udstedt uden for EU. Gebyret må aldrig være højere end det, betalingen koster dig, og på firmakort højst det, indløseren tager pr. betaling. En rabat for at vælge en bestemt betalingsmåde er tilladt." },
      { type: "p", text: "Det letteste er at regne gebyret ind i priserne. Betaler 90 % af kunderne digitalt til en gennemsnitlig sats på 1 %, skal priserne op med cirka 1,1 %, fordi gebyret beregnes af prisen med moms, mens prisstigningen kun giver dig beløbet uden moms." },

      { type: "h2", text: "Kan det betale sig at tage imod en betalingsmåde mere?" },
      { type: "p", text: "Grænsen følger samme formel: det ekstra salg, du skal have, som andel af det, der betales med betalingsmåden = gebyrsats × 1,25 ÷ dækningsgrad." },
      { type: "p", text: "Ved 40 % i dækningsgrad og 1,30 % for Visa og Mastercard koster 10.000 kr. i kortbetalinger 130 kr. Hvis 406,25 kr. af dem (4,1 %) kun blev til salg, fordi du tog imod kortet, betaler avancen fra de salg hele gebyret." },
      { type: "p", text: "Ville kunden ellers have betalt kontant, er gebyret en ren udgift. Men ifølge Nationalbanken blev kun 9 % af betalingerne i fysisk handel lavet med kontanter i 2025, mod 23 % i 2017." },

      { type: "h2", text: "Sådan finder du din reelle sats" },
      { type: "p", text: "Det mest præcise tal står på din afregning: Del månedens gebyrer med det beløb, der blev betalt med samme betalingsmåde, så har du din reelle sats. Gør det for hver betalingsmåde, så ser du, hvilken der koster mest." },
      { type: "p", text: "Din indløser skal vise gebyret for hver kortbetaling. Læg årets gebyrer, terminalleje og faste beløb sammen, og del med årets kortomsætning: Det er din samlede sats, og den skal du sammenligne tilbud med." },

      { type: "h2", text: "Krav til kassesystemet: hvem kan bruge DingPOS i Danmark?" },
      { type: "p", text: "Caféer, værtshuse, diskoteker, pizzeriaer, grillbarer, isbarer, kiosker, købmænd (ikke supermarkeder), restauranter og mobile madboder med under 10 mio. kr. i årlig omsætning skal registrere salget i et digitalt salgsregistreringssystem, der opfylder momsbekendtgørelsens krav, blandt andet at kort- og mobilbetalinger registreres automatisk. Det er virksomhedens branchekode, der afgør, om du er omfattet. Skattestyrelsen kan også pålægge en virksomhed i en anden branche at bruge sådan et system, hvis dens salgsregistrering er utilstrækkelig. [DingPOS](/) opfylder ikke kravene. Hører din virksomhed til de brancher, så registrér ikke dit salg i DingPOS, heller ikke ved siden af din kasse. Brug i stedet formlerne i denne artikel på tallene fra din kasse og afregningerne fra din indløser og MobilePay." },
      { type: "p", text: "Andre butikker, der overvejende sælger til private, for eksempel med tøj, gaver, blomster eller bøger, kan frit vælge mellem en forenklet faktura og et kasseapparat med kassebon, og her gælder der ikke de samme tekniske krav. Er du i tvivl, så spørg din revisor eller Skattestyrelsen." },
      { type: "p", text: "Er din butik ikke omfattet af kravet, kan DingPOS regne gebyrerne ud for dig på iPad. Under Indstillinger → Betalingsmåder trykker du på en betalingsmåde og udfylder Transaktionsgebyr: en procentdel, et fast beløb pr. transaktion eller begge dele. Skriv den sats, udbyderen faktisk trækker, inklusive moms, hvis der lægges moms på gebyret." },
      { type: "image", src: "guides/fees-dk-settings.webp", width: 872, height: 764, alt: "DingPOS Indstillinger → Betalingsmåder: en betalingsmådes felter under Transaktionsgebyr, med en procentdel udfyldt", caption: "Satsen skrives én gang for hver betalingsmåde og bruges på de betalinger, der kommer bagefter." },
      {
        type: "list",
        items: [
          "Under Statistik får kortet Betalingsmåder en ekstra linje „Gebyr · Netto“ under hver betalingsmåde med gebyrsats: det forventede gebyr og det forventede nettobeløb.",
          "Nederst på kortet står „Forv. gebyrer“ og „Forventet nettomodtaget“ for hele perioden.",
          "Betalinger, du tog imod, før betalingsmåden fik en sats, tælles op som „N uden gebyrsats“, og nettoen vises som „—“.",
        ],
      },
      { type: "image", src: "guides/fees-dk-report.webp", phone: "guides/fees-dk-report-1080w.webp", width: 1126, height: 970, alt: "DingPOS Statistik: kortet Betalingsmåder med en linje „Gebyr · Netto“ under hver betalingsmåde med gebyrsats og periodens forventede gebyrer og forventede nettomodtaget nederst", caption: "Gebyr og netto er estimater ud fra dine egne satser; afregningen fra din udbyder viser det faktiske beløb." },
      { type: "p", text: "Beløbene er estimater ud fra dine egne satser. DingPOS behandler ikke selve betalingerne og læser ikke afregningerne fra din udbyder, så det er afregningen, der viser det faktiske beløb. Nettobeløbet er det, der kommer ind, ikke din avance. Se [vejledningen om gebyrer](/support/payment-fees/). Funktionen kræver abonnementsniveauet Standard eller højere (se [Priser](/pricing/)), og du kan prøve DingPOS gratis i 30 dage." },
    ],
    sources: [
      { label: "Nets: Prisliste for fysisk handel, Dankort, gældende fra 1. april 2026 (Dankort PROCENT 0,550 %, 0,495 %, ned til 0,187 %, Dankort FAST fra 133 kr. om måneden, prisen reguleret ved lov, nye forretninger i prisgruppe 1)", url: "https://assets.ctfassets.net/gxv815mh8y8i/66KH0TWGmLMyiO4Cr1bD2Z/3d891373b1907658c6b14e3725f7bfcf/Prisliste-fysisk-handel-Dankort-20260401-dk.pdf" },
      { label: "Nets: Indløsningsaftale til alle kort (Dankort-aftale kun igennem Nets)", url: "https://payments.nets.eu/da-DK/acquiring" },
      { label: "Nets: SmartPOS (199 kr. om måneden, 36 måneders binding, 1,30 % på Visa og Mastercard, udbetaling efter én bankdag)", url: "https://payments.nets.eu/da-DK/smartpos" },
      { label: "Vipps MobilePay: priser (MobilePay-nummer og mobilt kassesystem 0,99 % pr. transaktion, kasseintegration via partner)", url: "https://mobilepay.dk/priser" },
      { label: "Vipps MobilePay hjælp: Hvornår modtager jeg afregningen? (daglig, ugentlig eller månedlig udbetaling)", url: "https://help.vippsmobilepay.com/da-DK/articles/when-will-i-receive-settlement" },
      { label: "SumUp: priser (0,89 % pr. transaktion, 0 kr. om måneden; Dankort nævnes ikke)", url: "https://www.sumup.com/da-dk/betalingsterminal-pris/" },
      { label: "PayPal POS (Zettle): priser og gebyrer (1,95 % for kort og wallets, også American Express, udstyr ekskl. moms)", url: "https://www.zettle.com/dk/priser" },
      { label: "Danmarks Nationalbank (26. juni 2026): Danskerne betaler mere digitalt (kontanter 9 % af betalingerne i fysisk handel i 2025, 23 % i 2017)", url: "https://www.nationalbanken.dk/da/viden-og-nyheder/presse/arkiv/2026/danskerne-betaler-mere-digitalt-det-goer-offline-betalinger-endnu-vigtigere-som-beredskab-26-06-2026" },
      { label: "Danmarks Nationalbank, analyse nr. 14 (26. juni 2026): Danskerne betaler mere med mobilen (en wallet-betaling er en kortbetaling)", url: "https://www.nationalbanken.dk/da/viden-og-nyheder/publikationer-og-taler/analyse/2026/danskerne-betaler-mere-med-mobilen" },
      { label: "Retsinformation: Lov om betalinger, LBK nr. 463 af 26. april 2026 (§ 81 pligt til at modtage kontanter kl. 6–22, § 121 gebyrer)", url: "https://www.retsinformation.dk/eli/lta/2026/463" },
      { label: "Konkurrence- og Forbrugerstyrelsen: Spørgsmål og svar om regler for gebyrer på betalingskort", url: "https://kfst.dk/betalingsmarkedet/ofte-stillede-spoergsmaal/ofte-stillede-spoergsmaal-om-regler-for-gebyrer" },
      { label: "EUR-Lex: Forordning (EU) 2015/751 om interbankgebyrer for kortbaserede betalingstransaktioner (art. 9 og 12: opgørelse af gebyrer)", url: "https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32015R0751" },
      { label: "Den juridiske vejledning D.A.5.11.6.1: momsfritagelse for betalinger og overførsler (momslovens § 13, stk. 1, nr. 11, litra c)", url: "https://info.skat.dk/data.aspx?oid=1921278" },
      { label: "Den juridiske vejledning D.A.5.11.6.3: Betalinger og overførsler (teknisk behandling er ikke omfattet af fritagelsen)", url: "https://info.skat.dk/data.aspx?oid=1921280" },
      { label: "Skatteministeriet: satser og beløbsgrænser i momsloven (registreringsgrænse 50.000 kr., moms 25 %)", url: "https://skm.dk/tal-og-metode/satser/satser-og-beloebsgraenser-i-lovgivningen/momsloven" },
      { label: "Skattestyrelsen: Registrer dine salg digitalt (brancher og branchekoder 47.11.10, 47.11.20, 56.11.10, 56.11.90, 56.12.00, 56.30.10, 56.30.20; omsætning under 10 mio. kr.)", url: "https://skat.dk/erhverv/nye-krav-til-digital-salgsregistrering-for-visse-brancher-i-2024" },
      { label: "Den juridiske vejledning A.B.3.3.1.6: Forenklede fakturaer og kasseboner (frit valg mellem forenklet faktura og kasseapparat, digitale salgsregistreringssystemer, påbud)", url: "https://info.skat.dk/data.aspx?oid=2068791" },
      { label: "Retsinformation: Momsbekendtgørelsen (§ 64 krav til digitale salgsregistreringssystemer, § 65 brancher, § 66 kasseboner)", url: "https://www.retsinformation.dk/eli/lta/2023/1435" },
    ],
    related: [],
  },
];
