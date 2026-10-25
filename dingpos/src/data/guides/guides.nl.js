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
      { type: "p", text: "Bij een bank of terminalaanbieder betaal je voor een pinbetaling meestal een vast bedrag van zo’n 6 à 7 cent, plus maandkosten voor de automaat: ABN AMRO rekent € 0,065 per transactie, CCV € 0,068. Aanbieders zonder abonnement rekenen een percentage: SumUp 1,49%, Stripe Terminal 1,4% + € 0,10. Op een artikel van € 24,20 (€ 20 excl. btw, inkoop € 12) kost een pinbetaling bij ABN AMRO 0,8% van je € 8 marge; met SumUp is dat 4,5%." },
      { type: "p", text: "Hieronder reken je met dezelfde cijfers uit wat elke betaalmethode kost, wat het je per maand kost, waarom er minder op je rekening komt dan je kassa aangeeft en of je de kosten mag doorberekenen aan de klant." },

      { type: "h2", text: "Wat kost een pinbetaling voor een ondernemer?" },
      { type: "p", text: "De tarieven hieronder komen van de officiële tarievenpagina’s van de aanbieders, gecontroleerd in oktober 2026. Ze gaan uit van een kaart van een consument uit Europa; zakelijke en niet-Europese kaarten zijn duurder. Wat jij betaalt, staat in je contract." },
      {
        type: "table",
        head: ["Aanbieder", "Pinpas (debitcard)", "Creditcard", "Vaste kosten"],
        rows: [
          ["Contant", "0", "–", "Geen transactiekosten"],
          ["ABN AMRO (pincontract)", "€ 0,065 per transactie", "Niet in het openbare tarievenoverzicht", "€ 3,70 per maand per betaalautomaat. Bij een hoge gemiddelde transactiewaarde kan een ander tarief gelden"],
          ["CCV", "€ 0,068 per transactie (Nederlandse pas); 0,9% voor een pas uit een ander Europees land", "1,3% (Europese consumentenkaart); 2,3% zakelijk of van buiten Europa; American Express vanaf 1,5%", "€ 4,25 per maand per betaalautomaat"],
          ["SumUp, zonder abonnement", "1,49%", "1,49%, ook American Express en premium kaarten", "Geen; je koopt de kaartlezer zelf"],
          ["SumUp Betalingen Plus", "0,99%", "0,99%; 1,49% voor American Express, premium en zakelijke kaarten en kaarten van buiten de EU", "€ 19 per maand"],
          ["Stripe Terminal", "1,4% + € 0,10", "1,4% + € 0,10; 2,9% + € 0,10 voor kaarten van buiten de EER", "Geen; kaartlezer vanaf € 59 excl. btw, of € 0,10 extra per betaling met Tap to Pay"],
        ],
      },
      { type: "p", text: "Apple Pay en Google Pay zijn geen apart betaalmiddel: de telefoon of het horloge geeft de pas of kaart door die in de wallet staat. Stripe rekent voor digitale wallets hetzelfde tarief als voor kaarten; bij andere aanbieders staat in je contract welk tarief geldt. Betalen met telefoon of horloge is inmiddels gewoon: volgens DNB werd in 2025 al 39% van alle kassabetalingen met een telefoon of smartwatch gedaan, en 83% met een pas, telefoon of horloge in plaats van contant." },
      { type: "p", text: "De vertrouwde Maestro- en V PAY-passen worden vervangen door Debit Mastercard en Visa Debit. Dat zijn ook debitcards: ABN AMRO en CCV rekenen er hetzelfde vaste pintarief voor als voor Maestro. Controleer bij een ouder contract of de nieuwe passen niet als creditcard worden afgerekend." },
      { type: "note", text: "Op de transactiekosten van pinbetalingen zit normaal gesproken geen btw: betalingsverkeer is vrijgesteld, en ABN AMRO vermeldt in zijn tarieven dat de pinkosten vrij van btw zijn. Er is dan ook geen btw om terug te vragen. Controleer op de factuur van je aanbieder welke regels wel btw bevatten. Over de aanschaf of huur van een pinautomaat betaal je wel btw (SumUp noemt voor zijn Terminal € 169, ofwel € 204,49 incl. btw); ben je btw-plichtig, dan trek je die af als voorbelasting. Doe je mee aan de kleineondernemersregeling (KOR, omzet tot € 20.000 per jaar), dan reken je geen btw aan je klanten en kun je ook geen btw terugvragen." },

      { type: "h2", text: "Pinkosten gaan van je marge af, niet van je omzet" },
      { type: "p", text: "De kosten worden berekend over het bedrag dat de klant betaalt, inclusief btw. Wat je werkelijk verdient is de brutomarge: de verkoopprijs zonder btw min de inkoopprijs. De pinkosten gaan van die marge af." },
      { type: "p", text: "Neem een artikel dat je verkoopt voor € 24,20, dus € 20 plus 21% btw, en inkoopt voor € 12. Je marge is € 8:" },
      {
        type: "table",
        caption: "In euro’s, afgerond op hele centen; het aandeel is berekend met de exacte kosten. ‘Marge over’ is vóór huur, loon en andere vaste lasten, dus geen winst.",
        head: ["", "Contant", "Pinpas ABN AMRO € 0,065", "SumUp Betalingen Plus 0,99%", "Creditcard CCV 1,3%", "SumUp 1,49%", "Stripe Terminal 1,4% + € 0,10"],
        rows: [
          ["Klant betaalt", "24,20", "24,20", "24,20", "24,20", "24,20", "24,20"],
          ["Transactiekosten", "0", "0,07", "0,24", "0,31", "0,36", "0,44"],
          ["Je ontvangt", "24,20", "24,14", "23,96", "23,89", "23,84", "23,76"],
          ["Btw af te dragen", "4,20", "4,20", "4,20", "4,20", "4,20", "4,20"],
          ["Marge over", "8,00", "7,94", "7,76", "7,69", "7,64", "7,56"],
          ["Deel van de marge naar transactiekosten", "0%", "0,8%", "3%", "3,9%", "4,5%", "5,5%"],
        ],
      },
      { type: "p", text: "Dat laatste getal reken je zo uit: deel van je marge = transactiekosten per verkoop ÷ marge per verkoop. Bij een percentage komt dat neer op: tarief × 1,21 ÷ margepercentage, waarbij het margepercentage de marge is gedeeld door de verkoopprijs zonder btw. In het voorbeeld is het margepercentage 8 ÷ 20 = 40%, dus bij SumUp 1,49% × 1,21 ÷ 40% = 4,5%. Verkoop je tegen 9% btw, reken dan met 1,09; zit je in de KOR, dan reken je zonder btw-factor. Hoe lager je margepercentage, hoe groter het deel dat de kosten opeten:" },
      {
        type: "table",
        caption: "Deel van de marge dat naar transactiekosten gaat, bij 21% btw, afgerond op één decimaal.",
        head: ["Margepercentage", "Tarief 0,99%", "Tarief 1,3%", "Tarief 1,49%"],
        rows: [
          ["20%", "6,0%", "7,9%", "9,0%"],
          ["30%", "4,0%", "5,2%", "6,0%"],
          ["40%", "3,0%", "3,9%", "4,5%"],
          ["50%", "2,4%", "3,1%", "3,6%"],
          ["60%", "2,0%", "2,6%", "3,0%"],
        ],
      },
      { type: "p", text: "Een vast bedrag per betaling werkt andersom: het weegt zwaar bij kleine bonnen en valt weg bij grote. Bij 40% marge en 21% btw kost € 0,065 per pinbetaling 3,9% van de marge op een bon van € 5, 0,8% op € 25 en 0,2% op € 100. Een percentage blijft altijd hetzelfde deel. Vanaf een bon van ongeveer € 4,60 is € 0,068 per betaling goedkoper dan 1,49%; daar staan wel de vaste maandkosten en de aanschaf of huur van de automaat tegenover." },

      { type: "h2", text: "Hoeveel kost pinnen je per maand? Reken het uit per betaalmethode" },
      { type: "p", text: "De kosten van een maand reken je niet uit met één percentage over je hele omzet. Elke betaalmethode heeft zijn eigen tarief, en contant kost niets. Neem een winkel met € 12.000 omzet in een maand: € 2.400 contant, 600 pinbetalingen samen goed voor € 9.000 en 20 creditcardbetalingen van samen € 600. Wat kost dat bij drie aanbieders?" },
      {
        type: "table",
        caption: "In euro’s, tarieven van oktober 2026. Aangenomen is dat alle kaarten Europese consumentenkaarten zijn. Aanschaf of huur van de automaat en eventuele btw op abonnementen zijn niet meegeteld.",
        head: ["", "CCV", "SumUp zonder abonnement", "SumUp Betalingen Plus"],
        rows: [
          ["600 pinbetalingen (€ 9.000)", "40,80 (600 × € 0,068)", "134,10 (1,49%)", "89,10 (0,99%)"],
          ["20 creditcardbetalingen (€ 600)", "7,80 (1,3%)", "8,94 (1,49%)", "5,94 (0,99%)"],
          ["Vaste kosten per maand", "4,25", "0", "19,00"],
          ["Totaal per maand", "52,85", "143,04", "114,04"],
          ["Per jaar", "634,20", "1.716,48", "1.368,48"],
        ],
      },
      { type: "p", text: "Bij deze winkel scheelt het vaste pintarief ruim € 1.000 per jaar ten opzichte van SumUp zonder abonnement, nog vóór de prijs van de automaat. Met minder of kleinere betalingen wordt dat verschil kleiner. Vul je eigen aantallen, bedragen en tarieven in om te zien wat het voor jouw winkel kost." },

      { type: "h2", text: "Waarom komt er minder op je rekening dan je kassa aangeeft?" },
      { type: "p", text: "Je kassa telt wat de klant betaalde. Wat er op je rekening komt, is dat bedrag min de transactiekosten, of het volledige bedrag terwijl de kosten later apart worden gefactureerd: CCV maakt bij creditcards het bruto bedrag over en factureert de kosten achteraf. Het verschil tussen kassa en bijschrijving is wat je aan transactiekosten betaalt." },
      {
        type: "list",
        items: [
          "Boek je omzet voor het volle bedrag dat de klant betaalde, en de transactiekosten als aparte kostenpost. Zo daalt je omzet niet doordat klanten pinnen, en blijven de kosten zichtbaar.",
          "Het geld staat er niet meteen. CCV betaalt standaard uit op de transactiedatum plus één werkdag; op maandag komen de bedragen van vrijdag, zaterdag en zondag binnen, en rond feestdagen kan het een of twee werkdagen later worden. SumUp belooft uitbetaling de volgende dag om 7.00 uur, ook in het weekend. Aan het eind van de maand is een deel van je omzet dus nog onderweg.",
          "Geld terugstorten op de pas van een klant (retourpinnen) kost ook geld: ABN AMRO rekent € 0,065 per retourtransactie plus € 5 per maand per automaat, CCV € 0,068 per transactie plus € 4,25 per maand. Stripe geeft bij een terugbetaling de kosten van de oorspronkelijke betaling niet terug. Hoe het bij jouw aanbieder zit, staat in het contract.",
        ],
      },

      { type: "h2", text: "Mag je pinkosten doorberekenen aan de klant?" },
      { type: "p", text: "Voor pinnen niet, en voor een gewone creditcard van Visa of Mastercard ook niet. Het Burgerlijk Wetboek (artikel 7:520 lid 4) verbiedt een toeslag voor betaalmiddelen die onder de Europese verordening voor afwikkelingsvergoedingen vallen, en de ACM noemt pin, consumentencreditcards van Visa en Mastercard, SEPA-overschrijvingen en incasso’s uitdrukkelijk. Een bordje ‘pinnen + € 0,10’ of ‘creditcard + 3%’ mag dus niet, ook niet in een fysieke winkel." },
      { type: "p", text: "Een toeslag mag wel voor zakelijke debit- en creditcards, voor kaarten als American Express en Diners Club en voor PayPal. Dan mag je nooit meer vragen dan wat de betaling jou echt kost, en moet de klant de toeslag vóór de aankoop kunnen zien, bijvoorbeeld naast de prijs. Een korting voor een bepaalde betaalmethode is wel toegestaan (artikel 7:520 lid 3), bijvoorbeeld voor contant." },
      { type: "p", text: "Je bepaalt zelf welke betaalmiddelen je accepteert, maar de klant moet dat vooraf weten: de ACM verlangt dat je het aangeeft bij de ingang, aan de kassa en, als je die hebt, in je webshop of app. Het eenvoudigst is de kosten in je prijzen te verwerken: wordt de helft van je omzet gepind tegen 1,49%, dan dekt een prijsverhoging van ongeveer 0,75% de kosten." },

      { type: "h2", text: "Loont het om een betaalmethode te accepteren? Het break-evenpunt" },
      { type: "p", text: "Pin weigeren is geen reële optie meer nu 83% van de kassabetalingen met een pas, telefoon of horloge gaat. De echte keuze zit bij creditcards en bij welke aanbieder je neemt. Een betaalmethode kost je de transactiekosten en levert je de verkopen op die je zonder die betaalmethode was misgelopen. Het break-evenpunt volgt uit dezelfde formule: extra verkoop die nodig is, als deel van de omzet met die betaalmethode = tarief × 1,21 ÷ margepercentage." },
      { type: "p", text: "Bij 40% marge en 1,3% voor creditcards kost elke € 1.000 creditcardomzet € 13. Is € 39,33 (3,9%) daarvan omzet die je zonder creditcard was misgelopen, dan betaalt de marge daarop de kosten terug. In een winkel met veel toeristen haal je dat al snel; als je klanten bijna allemaal met hun pinpas betalen, is het vooral een extra kostenpost." },
      { type: "p", text: "Let op de regel van Visa en Mastercard dat je alle kaarten van een merk accepteert als je er een accepteert (Honour All Cards). Volgens Betaalvereniging Nederland mag je op grond van Europese wetgeving bij klanten uit Europa toch alleen debitcards accepteren, en creditcards alleen van klanten van buiten Europa." },

      { type: "h2", text: "Hoe zie je wat je echt aan transactiekosten betaalt?" },
      { type: "p", text: "Het betrouwbaarste getal staat in de overzichten van je aanbieder. Volgens de Europese verordening voor afwikkelingsvergoedingen (artikel 12) moet je betaaldienstverlener je per kaartbetaling het bedrag en de kosten laten zien, met de handelarenvergoeding en de afwikkelingsvergoeding apart; in je contract kan staan dat je die informatie periodiek krijgt, minstens eens per maand. Deel de kosten van een maand door de omzet met die betaalmethode, en je hebt je echte tarief, inclusief vaste maandkosten als je die meetelt. Houd het per betaalmethode bij, dan zie je aan het eind van de maand welke het duurst is." },

      { type: "h2", text: "Kassa-eisen in Nederland, en wat DingPOS voor je kan doen" },
      { type: "p", text: "Nederland verplicht geen gecertificeerde kassa. De Belastingdienst hanteert een open norm: de eisen hangen af van de aard, omvang en complexiteit van je onderneming. Wel horen de gegevens in je kassasysteem bij je administratie, en die moet je zeven jaar bewaren. Er bestaat een Keurmerk Betrouwbare Afrekensystemen, een initiatief van kassaleveranciers in samenwerking met de Belastingdienst; [DingPOS](/) heeft dat keurmerk niet. Vraag je boekhouder hoe je je kassagegevens volledig bewaart, met welk systeem je ook werkt." },
      { type: "p", text: "Werk je al met een iPad, dan kan DingPOS de transactiekosten voor je schatten. Tik onder Instellingen → Betaalmethoden op een betaalmethode en vul Transactiekosten in: een percentage, een vast bedrag per transactie, of allebei. Het vaste bedrag vul je in hele centen in: rekent je bank € 0,065 per pinbetaling, vul dan € 0,07 in, een fractie meer dan je echt betaalt. Staat er geen btw op je transactiekosten, dan vul je het tarief uit je contract in; anders het tarief inclusief btw. Bij Cijfers toont de kaart Betaalmethoden dan per methode de geschatte kosten en het geschatte netto ontvangen bedrag. DingPOS verwerkt zelf geen betalingen en leest de overzichten van je aanbieder niet: de bedragen zijn schattingen op basis van wat je invult, en het afschrift van je aanbieder toont het werkelijke bedrag. Geeft je aanbieder bij een terugbetaling geen kosten terug, zet dan ‘Percentage wordt teruggegeven bij terugbetalingen’ uit." },
      { type: "p", text: "Hoe dat werkt, lees je in [Kan DingPOS transactiekosten van pin- en mobiele betalingen bijhouden?](/support/payment-fees/). De functie zit in het Standard-abonnement en hoger (zie [Prijzen](/pricing/)), en je kunt DingPOS 30 dagen gratis proberen." },
    ],
    sources: [
      { label: "ABN AMRO: overzicht kosten en tarieven, zakelijk pinnen (€ 0,065 per transactie, € 3,70 per maand per betaalautomaat, vrij van btw; retourpinnen € 0,065 en € 5 per maand)", url: "https://www.abnamro.nl/nl/zakelijk/producten/kosten-en-tarieven.html" },
      { label: "CCV: tarieven transactieverwerking (€ 0,068 Nederlandse debetkaart, 0,9% Europese debetkaart, 1,3% Europese consumentencreditcard, 2,3% zakelijk of buiten Europa, American Express vanaf 1,5%, € 4,25 per maand, retourpinnen)", url: "https://www.ccv.eu/nl/betaaloplossingen/transactieverwerking/tarieven" },
      { label: "CCV: uitbetaling transacties (transactiedatum + 1 werkdag; creditcards bruto uitbetaald, kosten achteraf gefactureerd)", url: "https://www.ccv.eu/nl/service-contact/direct-naar/veelgestelde-vragen/administratie/uitbetaling-transacties" },
      { label: "SumUp: prijzen (1,49% zonder abonnement; Betalingen Plus € 19 per maand, 0,99%, 1,49% voor American Express, premium, zakelijke en niet-EU-kaarten; uitbetaling volgende dag 7.00 uur; Terminal € 169, € 204,49 incl. btw)", url: "https://www.sumup.com/nl-nl/prijzen/" },
      { label: "Stripe: tarieven (Terminal 1,4% + € 0,10 voor kaarten uit de EER, 2,9% + € 0,10 daarbuiten, digitale wallets, Tap to Pay + € 0,10)", url: "https://stripe.com/nl/pricing" },
      { label: "Stripe: refunds (verwerkingskosten van de oorspronkelijke betaling worden niet teruggegeven)", url: "https://docs.stripe.com/refunds" },
      { label: "DNB (27 mei 2026): Betalen aan de kassa 2025 (17% contant, 83% met kaart, 39% met telefoon of smartwatch)", url: "https://www.dnb.nl/algemeen-nieuws/achtergrond-2026/75-plussers-betalen-steeds-vaker-met-pinpas/" },
      { label: "Betaalvereniging Nederland: de vernieuwde betaalpas (Debit Mastercard en Visa Debit, Honour All Cards, alleen debitcards accepteren)", url: "https://www.betaalvereniging.nl/kennisbank/kaartbetalingen/vernieuwde-betaalpas/" },
      { label: "ACM: betaalmogelijkheden en betaalkosten in winkels (geen toeslag op pin en Visa/Mastercard, wel op zakelijke kaarten, American Express, Diners Club en PayPal tot de echte kosten)", url: "https://www.acm.nl/nl/concurrentie-en-marktwerking/concurreren-en-samenwerken/concurrentie-het-betalingsverkeer/betaalmogelijkheden-en-betaalkosten-winkels" },
      { label: "Burgerlijk Wetboek, artikel 7:520 (lid 3 vergoeding of korting, lid 4 toeslagverbod)", url: "https://wetten.overheid.nl/jci1.3:c:BWBR0005290&boek=7&titeldeel=7b&afdeling=1&artikel=520" },
      { label: "Verordening (EU) 2015/751 over afwikkelingsvergoedingen (artikel 12: informatie per kaartbetaling, minstens maandelijks)", url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX%3A32015R0751" },
      { label: "Belastingdienst: vrijstelling voor betalingsverkeer", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/vrijstellingen/financiele_diensten_en_verzekeringen/vrijstelling_voor_betalingsverkeer" },
      { label: "Belastingdienst: voorwaarden kleineondernemersregeling (omzet tot € 20.000, geen btw in rekening brengen)", url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/kor-voorwaarden" },
      { label: "Belastingdienst: administratie 7 jaar bewaren", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/administratie_bewaren/administratie_bewaren" },
      { label: "Belastingdienst: informatie afrekensystemen (open norm; kassagegevens horen bij de administratie)", url: "https://odb.belastingdienst.nl/afrekensystemen-kassa/informatie-afrekensystemen-kassa/" },
      { label: "Stichting Keurmerk Betrouwbare Afrekensystemen: veelgestelde vragen (initiatief van leveranciers, in samenwerking met de Belastingdienst)", url: "https://www.keurmerkafrekensystemen.nl/veelgestelde-vragen-de-stichting/" },
    ],
    related: [],
  },
];
