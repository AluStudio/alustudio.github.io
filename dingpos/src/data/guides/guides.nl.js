// DingPOS guides — nl pack. Guides are acquisition articles written for one
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
//   market   — the market the facts hold for, a key of ui.markets ("NL")
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
// The Netherlands has no certified-register obligation (open norm, voluntary
// SBA hallmark); DingPOS carries no hallmark, so no string here may claim one.

export const ui = {
  nav: "Gidsen",
  title: "Gidsen voor kleine winkels",
  subtitle: "Afrekenen, kosten en marge: de berekeningen die ertoe doen, voor ondernemers die zelf achter de kassa staan.",
  meta_description: "Gidsen voor kleine winkels: wat pinnen en andere betaalmethoden kosten en hoeveel marge dat je kost, met formules, rekenvoorbeelden en bronnen.",
  back: "Alle gidsen",
  related_title: "Lees ook",
  sources_title: "Bronnen",
  checked: "Laatst gecontroleerd: {{date}}",
  cta_title: "Zie per betaalmethode wat de transactiekosten je kosten",
  cta_text: "DingPOS is een kassa-app voor iPad, gemaakt voor kleine winkels. Geen commissie op je verkopen, en je probeert hem 30 dagen gratis.",
  cta_button: "Download in de App Store",
  markets: { NL: "Nederland" },
};

export const articles = [
  {
    slug: "payment-processing-fees-netherlands",
    market: "NL",
    checked: "2026-10-25",
    title: "Wat kost pinnen voor ondernemers? Pinkosten per transactie en het effect op je marge",
    summary: "Pinnen kost via bank of CCV zo’n € 0,065 per betaling, bij SumUp 1,49%. Op een artikel van € 24,20 met € 8 marge is dat 0,8% of 4,5% van die marge.",
    content: [
      { type: "p", text: "Een bank of terminalaanbieder rekent voor een pinbetaling meestal een vast bedrag van zo’n 6 à 7 cent, plus maandkosten voor de automaat: ABN AMRO € 0,065 per transactie, CCV € 0,068. SumUp rekent zonder abonnement een percentage: 1,49%. Op een artikel van € 24,20 (€ 20 excl. btw, inkoop € 12) kost een pinbetaling bij ABN AMRO 0,8% van je € 8 marge; met SumUp is dat 4,5%." },

      { type: "h2", text: "Wat kost een pinbetaling voor een ondernemer?" },
      { type: "p", text: "Tarieven van oktober 2026, voor Europese consumentenkaarten; zakelijke en niet-Europese kaarten zijn duurder. Wat jij betaalt, staat in je contract." },
      {
        type: "table",
        head: ["Aanbieder", "Pinpas", "Creditcard", "Vaste kosten"],
        rows: [
          ["Contant", "0", "–", "Geen"],
          ["ABN AMRO", "€ 0,065", "Niet in het tarievenoverzicht", "€ 3,70 per maand per automaat; bij hoge bonbedragen kan een ander tarief gelden"],
          ["CCV", "€ 0,068 (Nederlandse pas); andere Europese pas 0,9%", "1,3%; zakelijk of van buiten Europa 2,3%", "€ 4,25 per maand per automaat"],
          ["SumUp, zonder abonnement", "1,49%", "1,49%", "Geen; je koopt de kaartlezer zelf"],
          ["SumUp Betalingen Plus", "0,99%", "0,99%; American Express, premium, zakelijk en van buiten de EU 1,49%", "€ 19 per maand"],
        ],
      },
      { type: "note", text: "Op pinkosten zit normaal gesproken geen btw: betalingsverkeer is vrijgesteld, en ABN AMRO noemt zijn pinkosten vrij van btw. Controleer je factuur. Op de aanschaf of huur van een pinautomaat zit wel btw." },

      { type: "h2", text: "Pinkosten gaan van je marge af, niet van je omzet" },
      { type: "p", text: "De kosten worden berekend over wat de klant betaalt, inclusief btw, maar komen uit je marge: de prijs zonder btw min de inkoopprijs. Een artikel van € 24,20 (€ 20 plus 21% btw), ingekocht voor € 12, laat € 8 marge over:" },
      {
        type: "table",
        caption: "In euro’s, afgerond op centen; het aandeel is berekend met de exacte kosten. ‘Marge over’ is vóór huur, loon en andere vaste lasten.",
        head: ["", "Contant", "Pinpas ABN AMRO € 0,065", "SumUp Betalingen Plus 0,99%", "Creditcard CCV 1,3%", "SumUp 1,49%"],
        rows: [
          ["Klant betaalt", "24,20", "24,20", "24,20", "24,20", "24,20"],
          ["Transactiekosten", "0", "0,07", "0,24", "0,31", "0,36"],
          ["Je ontvangt", "24,20", "24,14", "23,96", "23,89", "23,84"],
          ["Btw af te dragen", "4,20", "4,20", "4,20", "4,20", "4,20"],
          ["Marge over", "8,00", "7,94", "7,76", "7,69", "7,64"],
          ["Deel van de marge naar kosten", "0%", "0,8%", "3%", "3,9%", "4,5%"],
        ],
      },
      { type: "p", text: "Bij een percentage reken je dat deel uit als tarief × 1,21 ÷ margepercentage (de marge gedeeld door de prijs zonder btw). Hier is dat 8 ÷ 20 = 40%, dus bij SumUp 1,49% × 1,21 ÷ 40% = 4,5%. Bij 9% btw reken je met 1,09, in de kleineondernemersregeling (KOR) zonder btw-factor. Hoe lager je margepercentage, hoe groter dat deel:" },
      {
        type: "table",
        caption: "Deel van de marge dat naar transactiekosten gaat, bij 21% btw.",
        head: ["Margepercentage", "Tarief 0,99%", "Tarief 1,3%", "Tarief 1,49%"],
        rows: [
          ["20%", "6,0%", "7,9%", "9,0%"],
          ["30%", "4,0%", "5,2%", "6,0%"],
          ["40%", "3,0%", "3,9%", "4,5%"],
          ["50%", "2,4%", "3,1%", "3,6%"],
          ["60%", "2,0%", "2,6%", "3,0%"],
        ],
      },
      { type: "p", text: "Een vast bedrag weegt juist zwaar bij kleine bonnen: bij 40% marge en 21% btw kost € 0,065 per betaling 3,9% van de marge op een bon van € 5, 0,8% op € 25 en 0,2% op € 100. Vanaf ongeveer € 4,60 is € 0,068 per betaling goedkoper dan 1,49%, maar daar staan maandkosten en de automaat tegenover." },

      { type: "h2", text: "Hoeveel kost pinnen je per maand? Reken het uit per betaalmethode" },
      { type: "p", text: "Reken per betaalmethode, want elke methode heeft een eigen tarief en contant kost niets. Een winkel met € 12.000 omzet in een maand: € 2.400 contant, 600 pinbetalingen van samen € 9.000 en 20 creditcardbetalingen van samen € 600." },
      {
        type: "table",
        caption: "In euro’s, alleen Europese consumentenkaarten, zonder de automaat en eventuele btw op abonnementen.",
        head: ["", "CCV", "SumUp zonder abonnement", "SumUp Betalingen Plus"],
        rows: [
          ["600 pinbetalingen (€ 9.000)", "40,80 (600 × € 0,068)", "134,10 (1,49%)", "89,10 (0,99%)"],
          ["20 creditcardbetalingen (€ 600)", "7,80 (1,3%)", "8,94 (1,49%)", "5,94 (0,99%)"],
          ["Vaste kosten per maand", "4,25", "0", "19,00"],
          ["Totaal per maand", "52,85", "143,04", "114,04"],
          ["Per jaar", "634,20", "1.716,48", "1.368,48"],
        ],
      },
      { type: "p", text: "Hier scheelt het vaste pintarief ruim € 1.000 per jaar ten opzichte van SumUp zonder abonnement, nog vóór de automaat. Met minder of kleinere betalingen is het verschil kleiner; reken het na met je eigen aantallen." },

      { type: "h2", text: "Waarom komt er minder op je rekening dan je kassa aangeeft?" },
      { type: "p", text: "Je kassa telt wat de klant betaalde; op je rekening komt dat bedrag min de kosten, of het volle bedrag met de kosten later gefactureerd. Zo maakt CCV het bij creditcards over." },
      {
        type: "list",
        items: [
          "Boek de omzet voor het volle bedrag en de kosten als aparte kostenpost. Zo daalt je omzet niet doordat klanten pinnen.",
          "Het geld komt later: CCV betaalt standaard uit op de transactiedatum plus één werkdag, SumUp belooft de volgende dag om 7.00 uur. Aan het eind van de maand is een deel van je omzet nog onderweg.",
        ],
      },

      { type: "h2", text: "Mag je pinkosten doorberekenen aan de klant?" },
      { type: "p", text: "Voor pinnen en consumentencreditcards van Visa en Mastercard niet: de wet verbiedt een toeslag op deze betaalmiddelen, ook in een fysieke winkel. Een bordje ‘pinnen + € 0,10’ of ‘creditcard + 3%’ mag dus niet." },
      { type: "p", text: "Voor zakelijke kaarten, American Express, Diners Club en PayPal mag een toeslag wel, mits die niet hoger is dan wat de betaling je echt kost en de klant de toeslag vóór de aankoop ziet. Korting geven voor een betaalmethode, zoals contant, mag ook. Het eenvoudigst is de kosten in je prijzen te verwerken: wordt de helft van je omzet gepind tegen 1,49%, dan dekt een prijsverhoging van ongeveer 0,75% de kosten." },

      { type: "h2", text: "Loont het om een betaalmethode te accepteren? Het break-evenpunt" },
      { type: "p", text: "Pin weigeren is geen reële optie meer: volgens DNB gaat 83% van de kassabetalingen met pas, telefoon of horloge. De keuze zit bij creditcards. Die verdienen zichzelf terug als de verkopen die je anders was misgelopen de kosten dekken. De extra verkoop die je daarvoor nodig hebt, als deel van de creditcardomzet, is tarief × 1,21 ÷ margepercentage." },
      { type: "p", text: "Bij 40% marge en 1,3% kost elke € 1.000 creditcardomzet € 13. Is € 39,33 (3,9%) daarvan omzet die je anders was misgelopen, dan speel je quitte. In een toeristische winkel haal je dat snel; betalen je klanten bijna allemaal met hun pinpas, dan is het vooral een kostenpost." },

      { type: "h2", text: "Hoe zie je wat je echt aan transactiekosten betaalt?" },
      { type: "p", text: "Het echte getal staat in de overzichten van je aanbieder. Volgens Europese regels moet die je per kaartbetaling het bedrag en de kosten laten zien; je contract kan dat bundelen in een overzicht van minstens eens per maand. Deel de kosten van een maand door de omzet met die betaalmethode, en je hebt je echte tarief." },
      { type: "p", text: "Werk je met een iPad, dan kan [DingPOS](/) de kosten per methode voor je schatten. Tik onder Instellingen → Betaalmethoden op een betaalmethode en vul bij Transactiekosten een percentage in, een vast bedrag per transactie, of allebei. Vul in wat je aanbieder echt inhoudt, inclusief btw als die erop zit. Het vaste bedrag gaat in hele centen: bij € 0,065 vul je € 0,07 in, net iets meer dan je echt betaalt." },
      { type: "image", src: "guides/fees-nl-settings.webp", width: 872, height: 764, alt: "DingPOS Instellingen → Betaalmethoden: de velden onder Transactiekosten van een betaalmethode, met een vast bedrag per transactie ingevuld", caption: "Vul per betaalmethode in wat je aanbieder echt inhoudt; het geldt voor de betalingen die daarna komen." },
      {
        type: "list",
        items: [
          "Bij Cijfers krijgt elke methode met transactiekosten op de kaart Betaalmethoden een extra regel, ‘Kosten · Netto’: de geschatte kosten en het geschatte netto ontvangen bedrag.",
          "Onderaan de kaart staan de geschatte kosten en het geschatte netto ontvangen bedrag van de hele periode.",
          "Zijn er betalingen van voordat je de kosten invulde, dan staat bij de kosten ‘N zonder kostenpercentage’ en toont het netto bedrag ‘—’.",
        ],
      },
      { type: "image", src: "guides/fees-nl-report.webp", phone: "guides/fees-nl-report-1080w.webp", width: 1126, height: 806, alt: "DingPOS Cijfers: de kaart Betaalmethoden met een regel ‘Kosten · Netto’ onder elke methode met transactiekosten, en onderaan de geschatte kosten en het geschatte netto ontvangen bedrag van de periode", caption: "Kosten en netto zijn schattingen op basis van je eigen tarieven; het afschrift van je aanbieder toont het werkelijke bedrag." },
      { type: "p", text: "Het zijn schattingen op basis van je eigen tarieven. DingPOS verwerkt zelf geen betalingen en leest de overzichten van je aanbieder niet; het afschrift van je aanbieder toont het werkelijke bedrag. Hoe het werkt, lees je in [Kan DingPOS transactiekosten van pin- en mobiele betalingen bijhouden?](/support/payment-fees/). De functie zit in het Standard-abonnement en hoger (zie [Prijzen](/pricing/)), en je kunt DingPOS 30 dagen gratis proberen." },
      { type: "note", text: "Nederland verplicht geen gecertificeerde kassa, maar je kassagegevens horen bij je administratie. DingPOS heeft het Keurmerk Betrouwbare Afrekensystemen van kassaleveranciers niet; vraag je boekhouder hoe je je kassagegevens volledig bewaart." },
    ],
    sources: [
      { label: "ABN AMRO: overzicht kosten en tarieven, zakelijk pinnen (€ 0,065 per transactie, € 3,70 per maand per betaalautomaat, vrij van btw)", url: "https://www.abnamro.nl/nl/zakelijk/producten/kosten-en-tarieven.html" },
      { label: "CCV: tarieven transactieverwerking (€ 0,068 Nederlandse debetkaart, 0,9% Europese debetkaart, 1,3% Europese consumentencreditcard, 2,3% zakelijk of buiten Europa, € 4,25 per maand)", url: "https://www.ccv.eu/nl/betaaloplossingen/transactieverwerking/tarieven" },
      { label: "CCV: uitbetaling transacties (transactiedatum + 1 werkdag; creditcards bruto uitbetaald, kosten achteraf gefactureerd)", url: "https://www.ccv.eu/nl/service-contact/direct-naar/veelgestelde-vragen/administratie/uitbetaling-transacties" },
      { label: "SumUp: prijzen (1,49% zonder abonnement; Betalingen Plus € 19 per maand, 0,99%, 1,49% voor American Express, premium, zakelijke en niet-EU-kaarten; uitbetaling volgende dag 7.00 uur; Terminal € 169, € 204,49 incl. btw)", url: "https://www.sumup.com/nl-nl/prijzen/" },
      { label: "DNB (27 mei 2026): Betalen aan de kassa 2025 (83% met pas, telefoon of horloge)", url: "https://www.dnb.nl/algemeen-nieuws/achtergrond-2026/75-plussers-betalen-steeds-vaker-met-pinpas/" },
      { label: "ACM: betaalmogelijkheden en betaalkosten in winkels (geen toeslag op pin en Visa/Mastercard, wel op zakelijke kaarten, American Express, Diners Club en PayPal tot de echte kosten)", url: "https://www.acm.nl/nl/concurrentie-en-marktwerking/concurreren-en-samenwerken/concurrentie-het-betalingsverkeer/betaalmogelijkheden-en-betaalkosten-winkels" },
      { label: "Burgerlijk Wetboek, artikel 7:520 (lid 3 vergoeding of korting, lid 4 toeslagverbod)", url: "https://wetten.overheid.nl/jci1.3:c:BWBR0005290&boek=7&titeldeel=7b&afdeling=1&artikel=520" },
      { label: "Verordening (EU) 2015/751 over afwikkelingsvergoedingen (artikel 12: informatie per kaartbetaling, minstens maandelijks)", url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX%3A32015R0751" },
      { label: "Belastingdienst: vrijstelling voor betalingsverkeer", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/vrijstellingen/financiele_diensten_en_verzekeringen/vrijstelling_voor_betalingsverkeer" },
      { label: "Belastingdienst: voorwaarden kleineondernemersregeling (geen btw in rekening brengen)", url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/kor-voorwaarden" },
      { label: "Belastingdienst: informatie afrekensystemen (open norm; kassagegevens horen bij de administratie)", url: "https://odb.belastingdienst.nl/afrekensystemen-kassa/informatie-afrekensystemen-kassa/" },
      { label: "Stichting Keurmerk Betrouwbare Afrekensystemen: veelgestelde vragen (initiatief van leveranciers, in samenwerking met de Belastingdienst)", url: "https://www.keurmerkafrekensystemen.nl/veelgestelde-vragen-de-stichting/" },
    ],
    related: [],
  },
];
