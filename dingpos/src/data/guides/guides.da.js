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
      { type: "p", text: "En ny butik betaler 0,55 % pr. Dankort-betaling hos Nets, og satsen falder, jo flere Dankort-betalinger du har. MobilePay koster 0,99 % pr. betaling, SumUp tager 0,89 % for alle de kort, firmaet tager imod, og hos Nets koster Visa og Mastercard 1,30 % med en SmartPOS-terminal til 199 kr. om måneden. Gebyret beregnes af hele beløbet med moms, men det går fra din avance: Sælger du en vare til 250 kr. (200 kr. uden moms), som du har købt ind for 120 kr., koster en MobilePay-betaling 2,48 kr., altså godt 3 % af de 80 kr., du tjener." },
      { type: "p", text: "Nedenfor regner vi med de samme tal hele vejen: hvad hver betalingsmåde koster, hvad det løber op i på en måned, hvorfor der kommer færre penge ind på kontoen, end kassen viser, og om du må lægge gebyret over på kunden." },

      { type: "h2", text: "Hvad koster de forskellige betalingsmåder for en butik?" },
      { type: "p", text: "Priserne i tabellen kommer fra udbydernes egne danske prissider og prislister, kontrolleret i oktober 2026. Har du en indløsningsaftale med Nets eller en anden indløser til Visa og Mastercard, er det din aftale, der gælder; de offentlige priser er ofte kun udgangspunktet for en forhandling." },
      {
        type: "table",
        head: ["Betalingsmåde", "Gebyr for butikken", "Godt at vide"],
        rows: [
          ["Kontanter", "Intet transaktionsgebyr", "Tager du imod kort, skal du også tage imod kontanter (se nedenfor)"],
          ["Dankort (Nets, fysisk butik)", "Dankort PROCENT: 0,550 % i første prisgruppe (op til 499 Dankort-betalinger om året), 0,495 % op til 4.999, og ned til 0,187 % ved de største mængder", "Prisen er reguleret ved lov, og en Dankort-aftale fås i dag kun hos Nets. Du kan i stedet vælge Dankort FAST: et fast beløb om måneden, fra 133 kr. Nye butikker starter i første prisgruppe"],
          ["Visa og Mastercard via Nets SmartPOS", "1,30 % pr. betaling", "Terminalen koster 199 kr. om måneden med 36 måneders binding; Dankort betales efter Dankort-prislisten. Andre indløsere og større butikker får egne priser"],
          ["Visa og Mastercard via Nets SoftPay (Android-telefon)", "0,89 % for debetkort, 1,28 % for kreditkort, 1,79 % for udenlandske kort og firmakort", "69 kr. om måneden med 12 måneders binding"],
          ["MobilePay (MobilePay-nummer eller mobilt kassesystem)", "0,99 % pr. betaling", "Købes direkte hos Vipps MobilePay. Kobler du MobilePay til et kassesystem, får du prisen fra din kasseleverandør"],
          ["SumUp", "0,89 % pr. betaling", "Samme sats for alle de kort, SumUp tager imod, ingen månedlig betaling; kortlæseren købes én gang"],
          ["Flatpay, betalingsterminal", "0,99 % pr. betaling ved under 1 mio. kr. i årlig kortomsætning", "Terminalen er gratis; Flatpays kassesystemer koster 1,79 % plus et engangsbeløb til opstart. Over 1 mio. kr. giver Flatpay individuelle priser"],
          ["PayPal POS (tidligere Zettle)", "1,95 %", "Samme sats for almindelige kort og wallets, også American Express"],
          ["Stripe Terminal", "1,4 % + 0,75 kr. for kort fra EØS", "2,9 % + 0,75 kr. for kort uden for EØS; med Tap to Pay 0,70 kr. mere pr. autorisation"],
        ],
      },
      { type: "p", text: "Apple Pay og Google Pay er ikke en ekstra betalingsmåde med sit eget gebyr: Kunden betaler med det kort, der ligger i telefonen, og du betaler kortets sats. Det betyder noget, for ifølge Nationalbanken blev næsten hver tredje betaling i fysisk handel i 2025 lavet med en wallet på mobilen. SumUp, PayPal og Stripe nævner ikke Dankort på deres danske prissider. DI Handel anbefaler at undersøge, hvilke kort dine kunder bruger, før du vælger, og nævner, at du godt kan have én aftale til Dankort og en anden til de internationale kort." },
      { type: "note", text: "Moms: Gebyrer for at gennemføre betalinger er som udgangspunkt fritaget for moms (momslovens § 13, stk. 1, nr. 11, litra c), så den sats, der står i aftalen, er det, du betaler. Ren teknisk service kan dog være momspligtig, og kortlæsere og terminaler sælges med moms; PayPal oplyser for eksempel sine priser på udstyr uden moms. Se på fakturaen fra din udbyder, om der står moms på." },

      { type: "h2", text: "Gebyret går fra avancen, ikke fra omsætningen" },
      { type: "p", text: "Gebyret er en procentdel af det, kunden betaler, altså prisen med moms. Det, du selv tjener, er avancen: salgsprisen uden moms minus indkøbsprisen. Og det er af den avance, gebyret bliver betalt." },
      { type: "p", text: "Tag en vare til 250 kr. Uden 25 % moms er prisen 200 kr., og du har købt den ind for 120 kr. Avancen er 80 kr.:" },
      {
        type: "table",
        caption: "I kroner. Gebyrerne er afrundet til hele øre, andelen af avancen er regnet af det uafrundede gebyr. Dankort er første prisgruppe, Visa og Mastercard er Nets SmartPOS. „Tilbage af avancen“ er før husleje, løn og andre udgifter, så det er ikke overskud.",
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
      { type: "p", text: "Du kan regne andelen ud direkte: gebyrets andel af avancen = gebyrsats × 1,25 ÷ dækningsgrad. Dækningsgraden er avancen delt med salgsprisen uden moms, her 80 ÷ 200 = 40 %, og 1,25 er forholdet mellem prisen med og uden moms. For MobilePay: 0,99 % × 1,25 ÷ 40 % = 3,1 %. Er din butik ikke momsregistreret, fordi omsætningen er under 50.000 kr. om året, er prisen med og uden moms den samme, og du bruger 1 i stedet for 1,25." },
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
      { type: "p", text: "Ved 20 % i dækningsgrad tager et gebyr på 1,95 % mere end en tiendedel af avancen; ved 60 % tager det samme gebyr godt 4 %. Faste beløb pr. betaling rammer især de små køb: Stripes 0,75 kr. er 0,3 % af en betaling på 250 kr., men 2,5 % af en kop kaffe til 30 kr." },

      { type: "h2", text: "Hvad koster gebyrerne om måneden? Regn med din fordeling af betalinger" },
      { type: "p", text: "Månedens gebyrer får du ikke ved at gange hele omsætningen med én sats. Hver betalingsmåde har sin egen sats, og kontanter koster ikke noget gebyr. Tag en butik med Nets SmartPOS og MobilePay, der omsætter for 100.000 kr. inklusive moms på en måned:" },
      {
        type: "table",
        caption: "I kroner. Dankort i anden prisgruppe (op til 4.999 Dankort-betalinger om året), Visa og Mastercard til Nets SmartPOS-prisen, terminallejen som Nets oplyser den. Fordelingen er et eksempel.",
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
      { type: "p", text: "Butikken betaler omkring 1.090 kr. om måneden, cirka 13.100 kr. om året, for at tage imod 92.000 kr. digitalt. Bruger du en kortlæser med fast sats, ganger du i stedet kortomsætningen med den sats og lægger eventuelle månedlige beløb til. Sæt dine egne tal ind, så kan du se, hvad betalingerne koster netop din butik." },

      { type: "h2", text: "Hvorfor kommer der færre penge ind på kontoen, end kassen viser?" },
      { type: "p", text: "Kassen registrerer det, kunden har betalt. Indløseren og MobilePay betaler det beløb ud, når gebyret er trukket fra, eller de opkræver gebyret for sig, for eksempel én gang om måneden. Forskellen mellem kassen og indbetalingerne er gebyret." },
      {
        type: "list",
        items: [
          "Bogfør salget med det fulde beløb og gebyret som en udgift for sig, i stedet for kun at bogføre det, der kommer ind på kontoen. Så bliver omsætningen ikke mindre, fordi flere betaler digitalt, og du kan se, hvad betalingerne koster.",
          "Pengene kommer ikke samme dag. Nets SmartPOS betaler ud efter én bankdag, Nets SoftPay inden for 48 timer. MobilePay betaler betalinger fra mandag ud om onsdagen og betalinger fra fredag ud om tirsdagen, og du kan vælge daglig, ugentlig eller månedlig udbetaling. SumUp skriver 3–5 dage til din bankkonto, eller næste dag med deres gratis Business-kort, også i weekender og på helligdage. PayPal POS sætter typisk pengene ind på din PayPal-konto i løbet af få minutter, og Flatpay betaler ud alle hverdage. Ved månedens udgang er en del af omsætningen derfor stadig på vej.",
          "Når du giver en kunde pengene tilbage, får du ikke nødvendigvis gebyret tilbage: Stripe tilbagebetaler normalt ikke gebyret for den oprindelige betaling. Hos de andre udbydere står det i betingelserne, så spørg, før du skriver under.",
        ],
      },

      { type: "h2", text: "Må du lægge et kortgebyr på kunden?" },
      { type: "p", text: "Ikke på de kort, dine kunder normalt bruger. Betalingslovens § 121, stk. 3, forbyder gebyrer på betalingskort, hvor interbankgebyret er reguleret af EU. Konkurrence- og Forbrugerstyrelsen skriver, at forbuddet gælder for de mest almindelige betalingskort i Danmark, både i butikken og på nettet og både for debet- og kreditkort. Det gælder også, når kunden betaler med en mobilløsning, der bygger på et betalingskort, som Apple Pay og Google Pay." },
      { type: "p", text: "Du må opkræve et gebyr på firmakort, på kort udstedt uden for EU, på de sjældne kort fra såkaldte trepartsordninger, og når kunden betaler med en app, der flytter pengene direkte fra konto til konto. Gebyret må aldrig være højere end det, betalingen koster dig, og på firmakort og konto-til-konto-apps højst det, indløseren tager pr. betaling. Er du i tvivl om, hvad der ligger bag en betaling i en app, kan du ifølge styrelsen spørge din indløser. En rabat, når kunden vælger en bestemt betalingsmåde, er tilladt." },
      { type: "p", text: "Det letteste er at regne gebyret ind i priserne. Betaler 90 % af kunderne digitalt til en gennemsnitlig sats på 1 %, skal priserne op med cirka 1,1 %, fordi gebyret beregnes af prisen med moms, mens prisstigningen kun giver dig beløbet uden moms." },

      { type: "h2", text: "Kan det betale sig at tage imod en betalingsmåde mere? Sådan regner du break-even" },
      { type: "p", text: "En betalingsmåde koster gebyret og giver dig de salg, du ellers ikke havde fået. Grænsen følger samme formel: det ekstra salg, du skal have, som andel af det, der betales med den betalingsmåde = gebyrsats × 1,25 ÷ dækningsgrad." },
      { type: "p", text: "Ved 40 % i dækningsgrad og 1,30 % for Visa og Mastercard koster 10.000 kr. i kortbetalinger 130 kr. Hvis 406,25 kr. af dem (4,1 %) kun blev til salg, fordi du tog imod kortet, betaler avancen fra de salg hele gebyret." },
      { type: "p", text: "Hvis kunden ellers ville have betalt kontant, er gebyret en ren udgift. Men ifølge Nationalbanken blev kun 9 % af betalingerne i fysisk handel lavet med kontanter i 2025, mod 23 % i 2017. Og omvendt gælder: Tager du imod kort eller andre betalingsinstrumenter, skal du også tage imod kontanter fra kl. 6 til kl. 22 (betalingslovens § 81). Det gælder blandt andet ikke ved fjernsalg, i ubemandede selvbetjeningsløsninger, ved betalinger fra virksomheder eller på festivaler og byfester af højst 14 dage. Butikker i områder, som erhvervsministeren har udpeget med forhøjet røveririsiko, må stoppe kl. 20, hvis de sætter et skilt op." },

      { type: "h2", text: "Sådan finder du din reelle sats" },
      { type: "p", text: "Det mest præcise tal står på din afregning: Del månedens gebyrer med det beløb, der blev betalt med samme betalingsmåde i måneden, så har du din reelle sats. Skriv den op for hver betalingsmåde, så ser du hurtigt, hvilken der koster mest." },
      { type: "p", text: "Ifølge EU-forordning 2015/751 skal din indløser vise beløb og gebyrer for hver kortbetaling og opgøre gebyrerne for hver kortkategori og hvert kortmærke for sig, medmindre du selv skriftligt har bedt om en samlet pris eller har givet samtykke til en samlet opgørelse. Læg terminalleje og faste månedlige beløb til, og del det hele med årets kortomsætning. Så har du din samlede sats, og det er den, du skal sammenligne tilbud med. DI Handel anbefaler at hente tilbud fra flere indløsere og også se på binding, terminalleje og andre gebyrer, fordi de offentlige priser ofte kun viser minimumsgebyret." },

      { type: "h2", text: "Krav til kassesystemet: hvem kan bruge DingPOS i Danmark?" },
      { type: "p", text: "Nogle brancher skal registrere deres salg i et digitalt salgsregistreringssystem (momslovens § 55 e og momsbekendtgørelsens § 65). Det gælder virksomheder med en årlig omsætning under 10 mio. kr., der driver café, værtshus, diskotek, pizzeria, grillbar, isbar, kiosk, købmand eller restaurant. Branchekoderne er 47.11.10 (kioskvarer), 47.11.20 (dagligvarer i købmandsbutikker; supermarkeder er ikke omfattet), 56.11.10 og 56.11.90 (restauranter, caféer og andre spisesteder), 56.12.00 (mobile madboder), 56.30.10 og 56.30.20 (udskænkning). Skattestyrelsen kan også pålægge en virksomhed i en anden branche at bruge sådan et system, hvis dens registrering af salg er utilstrækkelig." },
      { type: "p", text: "Systemet skal opfylde momsbekendtgørelsens § 64: blandt andet en elektronisk journal, der er signeret digitalt, eksport i SAF-T-format, og kort- og mobilbetalinger skal registreres automatisk i journalen. [DingPOS](/) opfylder ikke de krav. Reglerne siger ikke udtrykkeligt, at du ikke må have en app mere ved siden af, men de kræver, at salget og de digitale betalinger kommer ind i et system, der opfylder kravene, og det kan DingPOS ikke. Hører din virksomhed til en af brancherne, så registrér ikke dit salg i DingPOS, heller ikke som supplement til din kasse. Brug i stedet formlerne i denne artikel på tallene fra din kasse og afregningerne fra din indløser og MobilePay." },
      { type: "p", text: "Andre butikker, der overvejende sælger til private, for eksempel med tøj, gaver, blomster eller bøger, kan frit vælge, om de vil udstede en forenklet faktura eller bruge et salgsregistreringssystem, for eksempel et kasseapparat, og give kunden en kassebon; her stilles der ikke de samme tekniske krav. Er du i tvivl om, hvilken side du er på, så spørg din revisor eller Skattestyrelsen." },
      { type: "p", text: "Er din butik ikke omfattet, kan DingPOS regne gebyrerne ud for dig på iPad. Under Indstillinger → Betalingsmåder trykker du på en betalingsmåde og udfylder Transaktionsgebyr: en procentdel, et fast beløb pr. transaktion eller begge dele. Under Statistik viser kortet Betalingsmåder derefter en linje „Gebyr · Netto“ under hver betalingsmåde med gebyr og nederst de forventede gebyrer og den forventede nettomodtaget for hele perioden. DingPOS behandler ikke selve betalingerne og læser ikke afregningerne fra din udbyder: Beløbene er estimater ud fra de satser, du skriver, og afregningen viser det faktiske beløb. Nettobeløbet er det, der kommer ind, ikke din avance; indkøbsprisen er ikke trukket fra. Se mere i [Kan DingPOS holde styr på gebyrer på kort- og mobilbetalinger?](/support/payment-fees/). Funktionen kræver abonnementsniveauet Standard eller højere (se [Priser](/pricing/)), og du kan prøve DingPOS gratis i 30 dage." },
    ],
    sources: [
      { label: "Nets: Prisliste for fysisk handel, Dankort, gældende fra 1. april 2026 (Dankort PROCENT 0,550–0,187 %, Dankort FAST fra 133 kr. om måneden, prisen reguleret ved lov, nye forretninger i prisgruppe 1)", url: "https://assets.ctfassets.net/gxv815mh8y8i/66KH0TWGmLMyiO4Cr1bD2Z/3d891373b1907658c6b14e3725f7bfcf/Prisliste-fysisk-handel-Dankort-20260401-dk.pdf" },
      { label: "Nets: Indløsningsaftale til alle kort (Dankort-aftale kun igennem Nets)", url: "https://payments.nets.eu/da-DK/acquiring" },
      { label: "Nets: SmartPOS (199 kr. om måneden, 36 måneders binding, 1,30 % på Visa og Mastercard, udbetaling efter én bankdag)", url: "https://payments.nets.eu/da-DK/smartpos" },
      { label: "Nets: SoftPOS til Android (69 kr. om måneden, 0,89 % / 1,28 % / 1,79 %, udbetaling inden for 48 timer)", url: "https://payments.nets.eu/da-DK/tap-to-pay-for-android" },
      { label: "Vipps MobilePay: priser (MobilePay-nummer og mobilt kassesystem 0,99 % pr. transaktion, kasseintegration via partner)", url: "https://mobilepay.dk/priser" },
      { label: "Vipps MobilePay hjælp: Hvornår modtager jeg afregningen? (mandag → onsdag, fredag → tirsdag, daglig, ugentlig eller månedlig)", url: "https://help.vippsmobilepay.com/da-DK/articles/when-will-i-receive-settlement" },
      { label: "SumUp: priser (0,89 % pr. transaktion, 0 kr. om måneden, udbetaling til bankkonto 3–5 dage)", url: "https://www.sumup.com/da-dk/betalingsterminal-pris/" },
      { label: "SumUp: Tap to Pay (adgang til pengene næste dag med SumUp Business-kort, også i weekender og på helligdage)", url: "https://www.sumup.com/da-dk/tap-to-pay/" },
      { label: "Flatpay: priser (betalingsterminal 0,99 % under 1 mio. kr. i årlig kortomsætning og gratis, kassesystemer 1,79 %, udbetaling alle hverdage)", url: "https://flatpay.dk/priser" },
      { label: "PayPal POS (Zettle): priser og gebyrer (1,95 % for kort og wallets, udstyr ekskl. moms, pengene typisk på PayPal-kontoen inden for få minutter)", url: "https://www.zettle.com/dk/priser" },
      { label: "Stripe: priser (Terminal 1,4 % + 0,75 kr. EØS-kort, 2,9 % + 0,75 kr. andre kort, Tap to Pay + 0,70 kr.)", url: "https://stripe.com/en-dk/pricing" },
      { label: "Stripe: refunderinger (gebyret for den oprindelige betaling tilbagebetales ikke)", url: "https://docs.stripe.com/refunds" },
      { label: "Danmarks Nationalbank (26. juni 2026): Danskerne betaler mere digitalt (kontanter 9 % af betalingerne i fysisk handel i 2025, 23 % i 2017; wallets hver tredje betaling)", url: "https://www.nationalbanken.dk/da/viden-og-nyheder/presse/arkiv/2026/danskerne-betaler-mere-digitalt-det-goer-offline-betalinger-endnu-vigtigere-som-beredskab-26-06-2026" },
      { label: "Danmarks Nationalbank, analyse nr. 14 (26. juni 2026): Danskerne betaler mere med mobilen (kortbaserede wallets næsten hver tredje betaling i fysisk handel; en wallet-betaling er en kortbetaling)", url: "https://www.nationalbanken.dk/da/viden-og-nyheder/publikationer-og-taler/analyse/2026/danskerne-betaler-mere-med-mobilen" },
      { label: "DI Handel: Guide til valg af kortindløser (april 2026)", url: "https://www.danskindustri.dk/globalassets/brancher/di-handel/pdf/2026/dih-guide-til-kortindloser-apr26.pdf" },
      { label: "Retsinformation: Lov om betalinger, LBK nr. 463 af 26. april 2026 (§ 81 pligt til at modtage kontanter, § 121 gebyrer)", url: "https://www.retsinformation.dk/eli/lta/2026/463" },
      { label: "Konkurrence- og Forbrugerstyrelsen: Spørgsmål og svar om regler for gebyrer på betalingskort", url: "https://kfst.dk/betalingsmarkedet/ofte-stillede-spoergsmaal/ofte-stillede-spoergsmaal-om-regler-for-gebyrer" },
      { label: "EUR-Lex: Forordning (EU) 2015/751 om interbankgebyrer for kortbaserede betalingstransaktioner (art. 9 og 12: opgørelse af gebyrer)", url: "https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32015R0751" },
      { label: "Den juridiske vejledning D.A.5.11.6.1: momsfritagelse for betalinger og overførsler (momslovens § 13, stk. 1, nr. 11, litra c)", url: "https://info.skat.dk/data.aspx?oid=1921278" },
      { label: "Den juridiske vejledning D.A.5.11.6.3: Betalinger og overførsler (teknisk behandling er ikke omfattet af fritagelsen)", url: "https://info.skat.dk/data.aspx?oid=1921280" },
      { label: "Skatteministeriet: satser og beløbsgrænser i momsloven (registreringsgrænse 50.000 kr., moms 25 %)", url: "https://skm.dk/tal-og-metode/satser/satser-og-beloebsgraenser-i-lovgivningen/momsloven" },
      { label: "Skattestyrelsen: Registrer dine salg digitalt (brancher og branchekoder, omsætning under 10 mio. kr.)", url: "https://skat.dk/erhverv/nye-krav-til-digital-salgsregistrering-for-visse-brancher-i-2024" },
      { label: "Den juridiske vejledning A.B.3.3.1.6: Forenklede fakturaer og kasseboner (frit valg mellem forenklet faktura og kasseapparat, digitale salgsregistreringssystemer, påbud)", url: "https://info.skat.dk/data.aspx?oid=2068791" },
      { label: "Retsinformation: Momsbekendtgørelsen (§ 64 krav til digitale salgsregistreringssystemer, § 66 kasseboner)", url: "https://www.retsinformation.dk/eli/lta/2023/1435" },
    ],
    related: [],
  },
];
