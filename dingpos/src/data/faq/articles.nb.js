// Generated from en and the nb translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync nb`, then `npm run l10n -- apply nb`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Komme i gang",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Kasse",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Ordrer og returer",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Produkter, lager og innkjøp",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Rapporter",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Kampanjer og lojalitet",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Sikkerhetskopi og data",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Ansatte og tillatelser",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Abonnement og betaling",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Oppsettguider for kampanjer",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Kommer snart",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Hvordan setter jeg opp butikken min i DingPOS?",
    "keywords": [
      "oppsett",
      "komme i gang",
      "første gang",
      "oppsettveiviser",
      "veiviser",
      "åpne butikk",
      "sette opp kassesystem",
      "land",
      "valuta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Første gang du åpner DingPOS, setter en veiviser opp butikken din i to trinn på noen få minutter:"
      },
      {
        "type": "steps",
        "items": [
          "Velg land eller region. Øverst i listen står regionen til denne iPaden og de vanligste markedene. Under finner du alle 175 landene og regionene der DingPOS er i App Store, og du kan søke på navn i appens språk eller på engelsk. Valget fyller ut valuta, avgiftssats og avgiftsmodus.",
          "Under Butikken din skriver du inn butikknavnet, legger eventuelt til en logo og kontrollerer valuta, avgiftssats og avgiftsmodus (inkludert / ekskludert avgift). Valutaen er som standard landets egen. Trykk på den for å velge blant 130 valutaer."
        ]
      },
      {
        "type": "p",
        "text": "Trykk på Fortsett, så ser du «Ding! Butikken din er klar.» DingPOS setter også opp to betalingsmåter, Kontant og Kredittkort. Deretter legger du inn produktene dine under Produkter og begynner å registrere salg."
      },
      {
        "type": "note",
        "text": "Valuta og avgiftsmodus kan ikke endres etter oppsettet, men avgiftssatsen kan fortsatt endres senere under Innstillinger. I USA, Canada, Brasil og Mikronesia avhenger satsen av delstat, provins eller by. Der er feltet for avgiftssats tomt til å begynne med, og du skriver inn satsen du bruker (0 er tillatt) for å gå videre. Listen med 175 land og valget av valuta kom i v3.2. Tidligere versjoner hadde 15 land."
      }
    ],
    "related": [
      "change-currency",
      "free-trial",
      "product-variants"
    ]
  },
  {
    "slug": "offline-usage",
    "category": "getting-started",
    "question": "Fungerer DingPOS uten internett?",
    "keywords": [
      "uten nett",
      "uten internett",
      "offline",
      "wifi",
      "nettverk",
      "ingen dekning",
      "marked"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. DingPOS fungerer uten nett – kasse, produktadministrasjon, lager og rapporter kjører lokalt på iPaden din uten at du trenger nettverk. Nattmarkeder (markeder som holder åpent om natten), pop-up-butikker og andre steder uten Wi-Fi fungerer helt fint."
      },
      {
        "type": "p",
        "text": "Bare to ting krever tilkobling: sikkerhetskopi i skyen (opplasting til din egen iCloud / Google Drive / Dropbox) og bekreftelse av abonnementsstatus."
      }
    ],
    "related": [
      "backup-data",
      "account-required"
    ]
  },
  {
    "slug": "account-required",
    "category": "getting-started",
    "question": "Må jeg opprette en konto?",
    "keywords": [
      "konto",
      "registrere seg",
      "logge inn",
      "registrering",
      "personvern"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nei. DingPOS har ikke noe kontosystem – last ned appen og begynn å selge. Produktene, ordrene og kundedataene dine blir på iPaden din og lastes aldri opp til serverne våre."
      },
      {
        "type": "p",
        "text": "Når du slår på sikkerhetskopi i skyen, logger du på din egen skykonto (iCloud, Google Drive eller Dropbox). Sikkerhetskopiene ligger i kontoen din – vi har ikke tilgang til dem."
      }
    ],
    "related": [
      "offline-usage",
      "backup-data"
    ]
  },
  {
    "slug": "supported-devices",
    "category": "getting-started",
    "question": "Hvilke enheter støttes?",
    "keywords": [
      "enhet",
      "iPhone",
      "Mac",
      "iPad",
      "systemkrav",
      "iPadOS-versjon",
      "kompatibilitet"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS støtter for øyeblikket iPad med iPadOS 17 eller nyere, og er hovedsakelig laget for bruk i liggende format."
      },
      {
        "type": "p",
        "text": "iPhone og Mac støttes ikke ennå. Hvis du ønsker at vi støtter en annen enhet, kan du skrive til oss og fortelle hvordan du vil bruke den."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kan jeg endre valuta eller avgiftsmodus etter oppsettet?",
    "keywords": [
      "valuta",
      "avgiftsmodus",
      "endre",
      "låst",
      "avgiftssats",
      "mva"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avgiftssatsen kan endres når som helst under Innstillinger – den nye satsen gjelder bare for fremtidige ordrer."
      },
      {
        "type": "p",
        "text": "Valuta og avgiftsmodus (inkludert / ekskludert avgift) er låst når oppsettet er fullført. Alle tidligere ordrer er beregnet med dem, så en endring underveis ville ødelagt rapportene dine. Sjekk dem på trinnet Butikken din i oppsettet: valutaen er som standard landets egen, og du kan trykke på den for å velge en annen."
      },
      {
        "type": "note",
        "text": "Hvis du nettopp har åpnet butikken og ikke har viktige data ennå, kan du slette appen og installere den på nytt for å kjøre oppsettet igjen. Sjekk at du ikke har noe du vil beholde før du sletter."
      }
    ],
    "related": [
      "tax-calculation",
      "how-to-set-up"
    ]
  },
  {
    "slug": "app-language",
    "category": "getting-started",
    "since": "3.0",
    "question": "Hvordan endrer jeg språket i appen?",
    "keywords": [
      "språk",
      "appspråk",
      "bytte språk",
      "endre språk",
      "norsk",
      "engelsk",
      "kinesisk",
      "japansk",
      "spansk",
      "flerspråklig"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS støtter 32 språk, blant annet engelsk, tradisjonell og forenklet kinesisk, japansk, koreansk, thai, vietnamesisk, indonesisk, malayisk, spansk (Latin-Amerika), portugisisk (Brasil), fransk og tysk. Gå til Innstillinger → Enhetsinnstillinger og trykk på Appspråk. Da åpnes DingPOS-siden i Innstillinger-appen på iPaden, der du velger språk under Språk."
      },
      {
        "type": "p",
        "text": "iOS lar ikke apper åpne språklisten direkte, så det siste trykket skjer i systeminnstillingene. Språket gjelder bare denne iPaden."
      },
      {
        "type": "note",
        "text": "Andre språk enn engelsk og tradisjonell kinesisk kom i v3.2. Hvis Språk bare viser engelsk og kinesisk, oppdaterer du DingPOS fra App Store."
      }
    ],
    "related": [
      "checkout-sound",
      "supported-devices"
    ]
  },
  {
    "slug": "multiple-carts",
    "category": "checkout",
    "question": "Hvordan betjener jeg flere kunder samtidig?",
    "keywords": [
      "handlekurver",
      "flere kunder",
      "sette på vent",
      "bytte handlekurv",
      "parallelt",
      "kø"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kasseskjermen støtter opptil 10 handlekurver samtidig. Trykk på «+» i handlekurvlinjen for å legge til en ny, og trykk på en nummerert fane for å bytte."
      },
      {
        "type": "p",
        "text": "Hver handlekurv beregnes uavhengig. Mens kunde A fortsatt ser seg rundt, kan du bytte til en annen handlekurv og ekspedere kunde B først. Handlekurven fjernes automatisk når salget er fullført."
      },
      {
        "type": "note",
        "text": "Handlekurver finnes bare i minnet – handlekurver som ikke er gjort opp, tømmes når appen lukkes helt."
      }
    ],
    "related": [
      "apply-discounts",
      "payment-methods"
    ]
  },
  {
    "slug": "apply-discounts",
    "category": "checkout",
    "question": "Hvordan gir jeg rabatt?",
    "keywords": [
      "rabatt",
      "prosent",
      "fast beløp",
      "nedsatt pris",
      "prisavslag"
    ],
    "content": [
      {
        "type": "p",
        "text": "Rabatter virker på to nivåer, og begge støtter et fast beløp eller en prosent:"
      },
      {
        "type": "list",
        "items": [
          "Varerabatt: trykk på en vare i handlekurven → velg «Rabatt» → skriv inn et beløp eller en prosent.",
          "Handlekurvrabatt: trykk på «Rabatt»-knappen under handlekurven."
        ]
      },
      {
        "type": "p",
        "text": "Hver vare og hver handlekurv kan ha én rabatt om gangen – gir du rabatt på nytt, erstatter den den forrige, og et trykk på rabattmerket fjerner den. Rabatter trekkes fra før mva., som er vanlig rekkefølge i detaljhandel."
      }
    ],
    "related": [
      "create-promotion",
      "tax-calculation"
    ]
  },
  {
    "slug": "tax-calculation",
    "category": "checkout",
    "question": "Hvordan beregnes mva.?",
    "keywords": [
      "mva",
      "merverdiavgift",
      "avgift",
      "inkl. mva.",
      "ekskl. mva.",
      "kvittering"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mva. beregnes automatisk ut fra mva.-modusen du valgte under oppsettet. Kvitteringen viser mva.-beløpet i begge modusene:"
      },
      {
        "type": "list",
        "items": [
          "Inkl. mva.: prisene inneholder allerede mva. – totalen er uendret, og kvitteringen spesifiserer mva. som er inkludert (vanlig i Taiwan, Japan med flere).",
          "Ekskl. mva.: mva. legges på beløpet etter rabatt i kassen (vanlig i USA, Canada med flere)."
        ]
      },
      {
        "type": "p",
        "text": "Full beregningsrekkefølge: varerabatter → handlekurvrabatt → mva. Beløp avrundes opp ved ½ til valutaens antall desimaler (f.eks. 0 for TWD, 2 for USD)."
      }
    ],
    "related": [
      "change-currency",
      "apply-discounts"
    ]
  },
  {
    "slug": "payment-methods",
    "category": "checkout",
    "question": "Hvilke betalingsmåter støttes?",
    "keywords": [
      "betaling",
      "betalingsmåter",
      "kontant",
      "kredittkort",
      "line pay",
      "vekslepenger",
      "egendefinert",
      "på konto",
      "gebyrer"
    ],
    "content": [
      {
        "type": "p",
        "text": "En ny butikk starter med to betalingsmåter, Kontant og Kredittkort, med navn på appens språk ved oppsettet. Under Innstillinger → Betalingsmåter kan du legge til andre måter (for eksempel Apple Pay, LINE Pay eller en lokal lommebok), og slette eller sortere dem på nytt."
      },
      {
        "type": "p",
        "text": "Betalingsmåtene er bare etiketter for regnskapsføring – DingPOS behandler ikke selve betalingene. Ta imot kort- eller mobilbetaling med din eksisterende terminal eller app, og velg deretter tilsvarende etikett i DingPOS for å registrere den. Ved kontantbetaling beregnes vekslepengene automatisk."
      },
      {
        "type": "p",
        "text": "Hvis kort- eller mobilbetalingstilbyderen din tar et gebyr, gir du betalingsmåten en gebyrsats, så anslår Rapporter gebyrer og forventet nettobeløp mottatt for hver betalingsmåte – se «Kan DingPOS holde oversikt over gebyrer på kort- og mobilbetalinger?»"
      },
      {
        "type": "p",
        "text": "Hvis en fast kunde tar med varene nå og betaler senere, velg På konto: salget registreres som en kundefordring og gjøres opp når pengene kommer. Se «Kan faste kunder kjøpe på konto og betale senere?»"
      }
    ],
    "related": [
      "payment-fees",
      "on-account",
      "roadmap-payment-integration"
    ]
  },
  {
    "slug": "payment-fees",
    "category": "checkout",
    "since": "3.2",
    "question": "Kan DingPOS holde oversikt over gebyrer på kort- og mobilbetalinger?",
    "keywords": [
      "transaksjonsgebyr",
      "kortgebyr",
      "gebyr",
      "gebyrsats",
      "nettobeløp",
      "forventet nettobeløp",
      "betalingsgebyr",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Under Innstillinger → Betalingsmåter trykker du på en betalingsmåte (eller legger til en ny) og fyller ut Transaksjonsgebyr: en prosent, et fast beløp per transaksjon, eller begge deler. Fra da av registrerer hver betaling som tas imot med den betalingsmåten et gebyr, anslått med satsen som gjelder i øyeblikket."
      },
      {
        "type": "p",
        "text": "I Rapporter får kortet Betalingsmåter en linje «Gebyr · Netto» under hver betalingsmåte som har et gebyr, og nederst på kortet vises forventede gebyrer og forventet nettobeløp mottatt for hele perioden."
      },
      {
        "type": "list",
        "items": [
          "Skriv inn satsen tilbyderen faktisk trekker, inkludert avgift – for 3 % pluss 5 % avgift skriver du 3,15 %. La begge feltene stå tomme hvis det ikke er noe gebyr.",
          "En endring av satsen gjelder bare senere betalinger. Gebyrer som allerede er registrert, blir stående som de var.",
          "«Prosentandelen av gebyret refunderes ved refusjoner» er på som standard, for tilbydere som gir gebyret tilbake når du refunderer. Det styrer returer og refunderte depositum på forhåndsbestillinger: når den er på, refunderes prosentandelen, mens det faste gebyret aldri refunderes. En annullering eller et tilbakeført oppgjør ignorerer bryteren og reverserer hele gebyret som ble registrert, også det faste. Uansett får kunden tilbake samme beløp.",
          "Betalinger som ble tatt imot før betalingsmåten hadde en sats, har ikke noe gebyr: Rapporter merker dem «N mangler sats» og viser nettobeløpet som «—»."
        ]
      },
      {
        "type": "note",
        "text": "Gebyrene er anslag ut fra satsen du skriver inn. Tilbyderens oppgjør viser det faktiske beløpet. Du trenger Standard-planen eller høyere for å redigere gebyrsatser og se gebyrer i Rapporter. På Lite er feltene låst, men betalingene registrerer likevel gebyrene sine, så de vises når du oppgraderer."
      }
    ],
    "related": [
      "payment-methods",
      "revenue-vs-cash",
      "plans-compare"
    ]
  },
  {
    "slug": "checkout-sound",
    "category": "checkout",
    "since": "3.0",
    "question": "Kan jeg slå av «Ding»-lyden etter salget?",
    "keywords": [
      "lyd",
      "ding",
      "slå av lyd",
      "stille",
      "kasselyd"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå til Innstillinger → Enhetsinnstillinger og slå av Kasselyd. Fra neste salg er bekreftelsesskjermen stille, men du kjenner fortsatt den lille vibrasjonen."
      },
      {
        "type": "p",
        "text": "Bryteren gjelder bare denne iPaden, og den endres ikke når du gjenoppretter en skysikkerhetskopi."
      }
    ],
    "related": [
      "app-language",
      "hide-out-of-stock",
      "multiple-carts"
    ]
  },
  {
    "slug": "hide-out-of-stock",
    "category": "checkout",
    "since": "3.1",
    "question": "Kan kassen skjule produkter som ikke er på lager?",
    "keywords": [
      "skjule",
      "ikke på lager",
      "utsolgt",
      "null på lager",
      "kasse",
      "produkt mangler",
      "finner ikke produkt"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå til Innstillinger → Enhetsinnstillinger og slå på Skjul produkter som ikke er på lager (av som standard). Produktrutenettet, kategorifilteret og søket (navn og strekkode) i kassen hopper da over alle produkter med 0 eller mindre på lager. Bryteren virker med en gang, uten at du trenger å åpne appen på nytt."
      },
      {
        "type": "list",
        "items": [
          "Produkter uten lagerføring vises alltid. Et produkt med varianter skjules bare når alle variantene er ute av lager.",
          "Det gjelder bare kassen på denne iPaden. Produktlisten viser fortsatt alle produkter.",
          "Når alle produkter er skjult, viser kassen «Ingen produkter er på lager» og forteller hvor du slår bryteren av."
        ]
      },
      {
        "type": "note",
        "text": "Så lenge bryteren er på, finner ikke denne iPaden produkter som ikke er på lager, så den kan ikke selge dem i minus eller ta imot en forhåndsbestilling på dem – slå den av når du trenger det. Hvis produkter ser ut til å ha forsvunnet fra kassen, er det vanligvis denne bryteren som er årsaken."
      }
    ],
    "related": [
      "negative-inventory",
      "inventory-tracking",
      "checkout-sound"
    ]
  },
  {
    "slug": "price-change-cart",
    "category": "checkout",
    "question": "Oppdateres handlekurven hvis jeg endrer prisen på et produkt?",
    "keywords": [
      "prisendring",
      "endre pris",
      "handlekurv",
      "beregne på nytt"
    ],
    "content": [
      {
        "type": "p",
        "text": "Handlekurven viser prisen slik den var da varen ble lagt til. Når du bekrefter med «Gå til kassen», henter DingPOS den nyeste prisen for hver vare på nytt – hvis noe er endret, får du en melding med de oppdaterte prisene før du går videre."
      },
      {
        "type": "p",
        "text": "Kampanjer vurderes også på nytt fra grunnen av ved bekreftelsen. Hvis totalen, mva. eller et rabattbeløp endres som følge av det, vises en oversikt over endringene, og du må bekrefte igjen – slik at beløpet du ser er nøyaktig det som blir registrert."
      }
    ],
    "related": [
      "apply-discounts",
      "guide-priority-stacking"
    ]
  },
  {
    "slug": "manual-discount-promotion",
    "category": "checkout",
    "question": "Kan manuell rabatt og kampanjer brukes sammen?",
    "keywords": [
      "manuell rabatt",
      "kampanje",
      "kombinere",
      "overstyre"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Regelen er «manuell går foran, lagene er uavhengige»:"
      },
      {
        "type": "list",
        "items": [
          "Manuell varerabatt: den linjen får ikke lenger kampanjer på varenivå – din manuelle rabatt regnes som den endelige avgjørelsen i øyeblikket. Linjens beløp teller likevel med mot kjøpsgrenser.",
          "Manuell handlekurvrabatt: brukes etter at alle kampanjer er beregnet, så de to eksisterer side om side. Skriver du inn mer enn det som er igjen av totalen, begrenses den automatisk med en melding."
        ]
      },
      {
        "type": "p",
        "text": "Når du fjerner en manuell rabatt, kan linjen få kampanjer igjen ved neste vurdering."
      }
    ],
    "related": [
      "apply-discounts",
      "guide-priority-stacking"
    ]
  },
  {
    "slug": "void-order",
    "category": "orders",
    "question": "Jeg gjorde en feil i kassen – hvordan annullerer jeg en ordre?",
    "keywords": [
      "annullere ordre",
      "annuller",
      "kansellere",
      "feil i kassen",
      "feil ordre",
      "angre salg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Ordrer, finn ordren, åpne detaljvisningen og velg Annuller. Bekreft, så er det gjort."
      },
      {
        "type": "p",
        "text": "Annulleringen reverserer automatisk alt som henger sammen med ordren: lagerbeholdningen for varer med lagerstyring gjenopprettes, poeng kunden tjente på ordren trekkes tilbake, og poeng som ble brukt, gis tilbake. Annullerte ordrer blir stående i listen med tydelig merking, og de teller ikke med i salgsinntekten i rapportene."
      },
      {
        "type": "note",
        "text": "En annullering betyr «dette salget fant aldri sted» – bruk den for en ordre som ble slått feil inn med en gang. Når en kunde leverer varer tilbake senere, bruker du Retur i stedet: den opprinnelige ordren beholdes, du kan returnere bare noen av varene, og salgsinntekten reduseres på dagen returen skjer."
      }
    ],
    "related": [
      "returns-exchanges",
      "inventory-tracking",
      "loyalty-points"
    ]
  },
  {
    "slug": "returns-exchanges",
    "category": "orders",
    "since": "2.0",
    "question": "Hvordan håndterer jeg en retur eller et bytte?",
    "keywords": [
      "retur",
      "bytte",
      "refusjon",
      "delvis retur",
      "bytte størrelse",
      "tilbakebetaling"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Ordrer, åpne den opprinnelige ordren og trykk på Retur. Velg hvor mange av hver vare som leveres tilbake. Ved bytte trykker du på Legg til erstatningsvare på samme skjerm. Differansen gjøres opp i ett steg: positivt beløp betyr at kunden betaler, negativt betyr at du betaler tilbake, og null betyr at ingen penger skifter hender."
      },
      {
        "type": "list",
        "items": [
          "Den opprinnelige ordren endres aldri. En retur får sitt eget dokument datert i dag, nummerert med prefikset R, og salgsinntekten reduseres på dagen returen skjer.",
          "Tilbakebetalingen er det kunden faktisk betalte for varen – vare- og handlekurvrabatter og poengbruk er allerede fordelt, så det betales ikke tilbake til listepris. Mva. følger satsen den opprinnelige ordren ble belastet med.",
          "Erstatningsvarer belastes til dagens pris, uten kampanjer eller rabatter.",
          "Lagerbeholdningen for varer med lagerstyring gjenopprettes automatisk. Poeng som ble tjent på den opprinnelige ordren, trekkes tilbake, poeng som ble brukt, gis tilbake, og erstatningsvarene gir egne poeng.",
          "En ordre kan returneres i flere runder, men aldri utover antallet som opprinnelig ble solgt. Bruksgrenser for kampanjer gis ikke tilbake ved en retur."
        ]
      },
      {
        "type": "note",
        "text": "Det er ingen tidsfrist for returer, men den opprinnelige ordren kreves. Hvis en retur ble lagt inn ved en feil, annullerer du returen, så kommer antallet som kan returneres, tilbake."
      }
    ],
    "related": [
      "void-order",
      "inventory-tracking",
      "loyalty-points"
    ]
  },
  {
    "slug": "pre-orders",
    "category": "orders",
    "since": "2.0",
    "question": "Hvordan tar jeg imot en forhåndsbestilling med depositum?",
    "keywords": [
      "forhåndsbestilling",
      "forhåndsbestille",
      "depositum",
      "henting",
      "restbeløp",
      "reservere"
    ],
    "content": [
      {
        "type": "p",
        "text": "I kassen bytter du øverst på skjermen fra Salg til Forhåndsbestilling, velger hentedato, skriver inn depositumet (alt fra 0 til hele beløpet, med snarveiene 30 % / 50 % / Hele) og velger hvordan depositumet betales. Legg til en kunde, så du kan nå vedkommende når varene kommer."
      },
      {
        "type": "list",
        "items": [
          "Lageret trekkes når forhåndsbestillingen legges inn, slik at antallet som kan selges oppdateres med en gang. Det er et signal, ikke en reservasjon: et senere salg kan fortsatt ta siste enhet. Varer som ikke er på lager, går i minus og rettes opp når en innkjøpsordre er mottatt.",
          "Når kunden henter varene, trykker du på Utlever i ordredetaljene for å ta imot restbeløpet. Ordren blir da et vanlig fullført salg, og senere returer følger den vanlige returflyten.",
          "Hvis kunden aldri kommer, trykker du på Kanseller ordre i ordredetaljene og velger å betale tilbake eller beholde depositumet. Varene legges tilbake på lager.",
          "Depositumskvitteringen og den endelige hentekvitteringen har samme nummer."
        ]
      },
      {
        "type": "p",
        "text": "I Rapporter regnes salgsinntekten for en forhåndsbestilling i sin helhet på hentedagen, mens depositumet teller med i Mottatt betaling den dagen det betales – så de to tallene avviker en stund. Se «Hva er forskjellen på salgsinntekt og mottatt betaling?»"
      },
      {
        "type": "note",
        "text": "Varene i en forhåndsbestilling kan ikke redigeres. Hvis kunden ombestemmer seg, kansellerer du og legger inn en ny forhåndsbestilling. Det kreves Standard-planen eller høyere for å opprette forhåndsbestillinger. Etter en nedgradering kan eksisterende forhåndsbestillinger fortsatt hentes eller kanselleres."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "on-account",
      "negative-inventory"
    ]
  },
  {
    "slug": "on-account",
    "category": "orders",
    "since": "2.0",
    "question": "Kan faste kunder kjøpe på konto og betale senere?",
    "keywords": [
      "på konto",
      "kreditt",
      "betale senere",
      "kundefordringer",
      "oppgjør",
      "utestående",
      "regning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Velg kunden i kassen og velg På konto som betalingsmåte. Et utestående beløp må ha en eier, så På konto er ikke tilgjengelig uten en kunde."
      },
      {
        "type": "p",
        "text": "For å ta imot betaling bytter du øverst i Ordrer til Kundefordringer. Utestående beløp er gruppert per kunde. Åpne en kunde for å gjøre opp én enkelt ordre, en hel måned eller alt – hver gang spør DingPOS hvordan pengene ble betalt. En enkelt ordre kan også gjøres opp fra detaljvisningen, og et oppgjør som ble lagt inn ved en feil, kan tas tilbake med Tilbakefør oppgjør."
      },
      {
        "type": "list",
        "items": [
          "Salgsinntekten regnes den dagen varene forlater butikken. Mottatt betaling og lojalitetspoeng venter til dagen ordren gjøres opp.",
          "Ordrer som ikke er gjort opp, har et ravgult merke i listen, og kundedetaljene viser hvor mye kunden skylder nå.",
          "En kunde med ordrer som ikke er gjort opp, kan ikke slettes."
        ]
      },
      {
        "type": "note",
        "text": "Det kreves Standard-planen eller høyere for å opprette salg på konto. Etter en nedgradering kan du ikke starte nye, men eksisterende kundefordringer kan fortsatt vises og gjøres opp."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "payment-methods",
      "pre-orders"
    ]
  },
  {
    "slug": "order-notes",
    "category": "orders",
    "since": "2.2",
    "question": "Kan jeg legge notater på ordrer, kunder eller innkjøpsordrer?",
    "keywords": [
      "notat",
      "notater",
      "merknad",
      "kommentar",
      "huskelapp"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Detaljsidene for ordrer, kunder og innkjøpsordrer har hver sitt notatkort – trykk på det for å redigere, opptil 500 tegn. Du kan også skrive et notat i skjemaet når du oppretter en kunde eller en innkjøpsordre."
      },
      {
        "type": "p",
        "text": "Notater er uavhengige av status: fullførte ordrer, annullerte ordrer og returer kan alle få notater, og notatene kan redigeres. Beløp og varer i en ordre ligger fast fra kassen; notatet står ved siden av dokumentet og endrer aldri innholdet."
      }
    ],
    "related": [
      "void-order",
      "purchase-orders"
    ]
  },
  {
    "slug": "product-variants",
    "category": "products",
    "question": "Hvordan legger jeg inn produkter med varianter, som størrelse og farge?",
    "keywords": [
      "varianter",
      "størrelse",
      "farge",
      "produktvalg",
      "variant",
      "alternativer"
    ],
    "content": [
      {
        "type": "p",
        "text": "På redigeringssiden for produktet trykker du på Legg til produktvalg under Produktvalg for varianter for å legge til et valg (for eksempel «Farge»), og bruker «+ Verdi» for å legge inn hver av mulighetene (for eksempel Rød, Blå). Med to eller flere produktvalg (for eksempel Farge × Størrelse) lager DingPOS alle kombinasjonene for deg (Rød/S, Rød/M, Blå/S …)."
      },
      {
        "type": "p",
        "text": "Når et produkt har varianter, forsvinner feltet Pris, og hver kombinasjon får egen pris under Pris og lager per variant, med eget lager (siden v3.2; tidligere versjoner ber fortsatt om en produktpris). Kassen, produktlisten og produktdetaljene viser et prisområde fra laveste til høyeste pris, for eksempel «NT$350–NT$390», eller én pris når alle kombinasjonene koster det samme. Sortering etter pris bruker den laveste kombinasjonsprisen. I kassen vises en variantvelger når du trykker på produktet, før det legges i handlekurven."
      },
      {
        "type": "p",
        "text": "Du trenger ikke legge inn kostpris for hver kombinasjon: et tomt felt for Kostpris betyr Følger produktet, så kombinasjonen bruker produktets kostpris og endres når den endres. Et tall gir Egen kostpris – også 0. Bruk produktets kostpris for alle fjerner alle egne kostpriser på én gang."
      },
      {
        "type": "note",
        "text": "Navn på produktvalg og verdier kan ha maks 20 tegn og kan ikke være tomme: et tomt navn eller en tom verdi får rød kant når du lagrer, så fyll det ut eller slett den tomme verdien. Et produkt med varianter kan ikke bruke åpen pris."
      }
    ],
    "related": [
      "open-price-products",
      "barcode-scanning",
      "inventory-tracking"
    ]
  },
  {
    "slug": "open-price-products",
    "category": "products",
    "since": "3.2",
    "question": "Kan jeg skrive inn prisen på et produkt i kassen, for eksempel frakt eller en avtalt pris?",
    "keywords": [
      "åpen pris",
      "egen pris",
      "skrive inn pris",
      "frakt",
      "servicegebyr",
      "avtalt pris",
      "dagspris"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja – gjør det om til et produkt med åpen pris. Slå på Åpen pris på redigeringssiden for produktet og la prisen stå tom. Kassen og produktlisten viser «Åpen pris» der prisen ellers ville stått. Når du trykker på produktet i kassen, blir du først bedt om prisen. Skriv den inn og trykk på Legg i handlekurv for å legge produktet til med den prisen."
      },
      {
        "type": "list",
        "items": [
          "0 er en gyldig pris (for eksempel gratis frakt), men et tomt felt kan ikke legges til. Skriv inn prisen slik butikkens avgiftsmodus angir alle andre priser.",
          "Handlekurven har én linje per produkt med åpen pris: trykker du på det igjen, åpnes linjen så du kan endre prisen.",
          "Når du slår på Åpen pris, slås også Utelat fra kampanjer på, slik at et gebyr ikke får rabatt og ikke teller med i kjøpsgrenser. Slå det av igjen hvis en avtalt vare skal delta i kampanjer.",
          "Når linjen er solgt, beregnes det avgift på den, den gir poeng og telles med i Rapporter som alle andre, og en retur betaler tilbake prisen som ble skrevet inn.",
          "Et produkt med varianter kan ikke bruke åpen pris. Produkter med åpen pris tilbys aldri som gaver eller betalte tilleggsvarer, og de vises aldri i listen over erstatningsvarer ved et bytte."
        ]
      },
      {
        "type": "note",
        "text": "Alle planer har dette, og å skrive inn prisen krever aldri godkjenning fra en leder."
      }
    ],
    "related": [
      "product-variants",
      "promotion-not-applied",
      "returns-exchanges"
    ]
  },
  {
    "slug": "barcode-scanning",
    "category": "products",
    "question": "Hvordan fungerer strekkoder i DingPOS?",
    "keywords": [
      "strekkode",
      "skanne",
      "skanner",
      "strekkodeleser",
      "duplikat",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Strekkoder for produkter kan skrives inn for hånd eller skannes med kameraet. Strekkoder må være unike – hvis en strekkode er i konflikt med et annet produkt når du lagrer, viser DingPOS deg hvilket produkt den tilhører."
      },
      {
        "type": "p",
        "text": "I kassen søker søkefeltet både i produktnavn og i begynnelsen av strekkoder – skriv inn en strekkode, så dukker produktet opp med en gang. Om planene for strekkodelesere som maskinvare, se «Kan jeg bruke en strekkodeleser med DingPOS?»"
      }
    ],
    "related": [
      "product-variants",
      "roadmap-barcode-scanner"
    ]
  },
  {
    "slug": "product-order",
    "category": "products",
    "since": "2.0",
    "question": "Hvordan endrer jeg rekkefølgen på produktene?",
    "keywords": [
      "sortere",
      "rekkefølge",
      "endre rekkefølge",
      "flytte",
      "dra",
      "fest øverst"
    ],
    "content": [
      {
        "type": "p",
        "text": "Under Produkter trykker du på Rediger sorteringsrekkefølge og drar produktkortene dit du vil ha dem. Kassen og produktadministrasjonen deler denne ene rekkefølgen, så du ordner den bare én gang."
      },
      {
        "type": "list",
        "items": [
          "Med mange produkter har menyen på hvert kort valgene Flytt til førsteplass, Flytt til sisteplass og Flytt til plassering … , og hvert kort viser plasseringen sin.",
          "Filtrer på en kategori først for å endre rekkefølgen bare innenfor den kategorien – produkter i andre kategorier blir stående.",
          "Nye produkter havner først. Når du redigerer detaljene til et produkt, endres aldri plasseringen."
        ]
      },
      {
        "type": "p",
        "text": "Vil du en stund sortere etter navn, pris eller opprettet- og oppdatert-tidspunkt, bruker du menyen Sorter etter. Din egen rekkefølge blir beholdt, og velger du Manuell rekkefølge igjen, er den tilbake."
      }
    ],
    "related": [
      "product-variants",
      "barcode-scanning"
    ]
  },
  {
    "slug": "inventory-tracking",
    "category": "products",
    "question": "Hvordan holder jeg styr på lagerbeholdningen?",
    "keywords": [
      "lagerbeholdning",
      "lager",
      "lagerstyring",
      "varetelling",
      "lav beholdning",
      "antall"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lagersporing slår du av eller på for hvert produkt – skru den på på redigeringssiden for produktet og skriv inn antallet du har nå. Hver variant av et produkt har sitt eget lager."
      },
      {
        "type": "p",
        "text": "Når sporingen er på, trekker salg og forhåndsbestillinger fra lageret automatisk. Annulleringer, returer og kansellerte forhåndsbestillinger legger varene tilbake, mottak av en innkjøpsordre øker beholdningen, og du kan justere manuelt når som helst. Alle endringer føres i en fullstendig logg over lagerbevegelser. Lav beholdning utheves med en fargeadvarsel."
      }
    ],
    "related": [
      "negative-inventory",
      "purchase-orders"
    ]
  },
  {
    "slug": "negative-inventory",
    "category": "products",
    "question": "Hvorfor kan lageret bli negativt?",
    "keywords": [
      "negativt lager",
      "lager",
      "utsolgt",
      "blokkere",
      "justere",
      "minus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det er med vilje: kassen blir aldri stoppet av for lite lager. Det første prinsippet ved en kasse i drift er at kunden aldri skal vente – et feil tall på papiret kan rettes senere, men et avbrutt salg er tapt for godt."
      },
      {
        "type": "p",
        "text": "Negativt lager betyr som regel at en varepåfyll ikke ble registrert, eller at en forhåndsbestilt vare ikke har kommet ennå (forhåndsbestillinger trekker fra lageret når de legges inn). Registrer påfyll ved å motta en innkjøpsordre, så retter tallet seg selv. Rett differanser fra varetelling med en manuell justering, som blir stående i loggen over lagerbevegelser."
      },
      {
        "type": "note",
        "text": "Hvis kassen ikke finner et produkt med 0 på lager, sjekk om Skjul produkter som ikke er på lager er slått på under Innstillinger → Enhetsinnstillinger: så lenge den er på, kan ikke denne iPaden legge produkter som ikke er på lager i en handlekurv."
      }
    ],
    "related": [
      "inventory-tracking",
      "purchase-orders",
      "hide-out-of-stock"
    ]
  },
  {
    "slug": "purchase-orders",
    "category": "products",
    "since": "2.0",
    "question": "Hvordan registrerer jeg innkjøp og leverandører?",
    "keywords": [
      "innkjøpsordre",
      "innkjøp",
      "leverandør",
      "motta varer",
      "påfyll",
      "å betale"
    ],
    "content": [
      {
        "type": "p",
        "text": "Under Innkjøp i sidemenyen administrerer du leverandører og innkjøpsordrer. En leverandør lagrer navn, kontaktperson, telefon, adresse og standard betalingsvilkår (betaling ved mottak eller månedskreditt)."
      },
      {
        "type": "steps",
        "items": [
          "Trykk på Nytt innkjøp, velg leverandør og legg til produkter, antall og enhetskostnad (forhåndsutfylt med kostprisen produktet har nå). Du kan også legge til fraktkostnad. Er leverandøren ikke opprettet ennå, trykker du på Legg til leverandør øverst til venstre i leverandørlisten – den nye leverandøren havner rett tilbake i innkjøpsordren.",
          "Et utkast rører aldri lager eller regnskapet over det du skylder – rediger eller slett det som du vil.",
          "Når varene kommer, trykker du på Motta varer: lageret for sporede produkter øker, og innkjøpsordren får nummer og låses. Som standard oppdaterer mottaket også kostprisen på hvert produkt til denne enhetskostnaden. Slå av Synkroniser produktets kostpris på innkjøpsordren for å la kostprisene stå uendret."
        ]
      },
      {
        "type": "p",
        "text": "Betalingsvilkårene avgjør hva som skjer videre: ordrer med betaling ved mottak merkes som betalt, mens ordrer med månedskreditt blir stående som ubetalte under Å betale. Der kan du gjøre dem opp per leverandør – én ordre, denne måneden eller alt."
      },
      {
        "type": "note",
        "text": "Innkjøp krever Standard-planen eller høyere. En leverandør med ubetalte mottatte ordrer kan ikke slettes."
      }
    ],
    "related": [
      "inventory-tracking",
      "negative-inventory",
      "roadmap-monthly-settlement"
    ]
  },
  {
    "slug": "revenue-vs-cash",
    "category": "reports",
    "since": "2.0",
    "question": "Hva er forskjellen på salgsinntekt og mottatt betaling?",
    "keywords": [
      "salgsinntekt",
      "mottatt betaling",
      "kasseavstemming",
      "avstemming",
      "depositum",
      "salg på konto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Salgsinntekt telles den dagen varene ble overlevert, mens mottatt betaling telles den dagen pengene kom inn. Ved en ordre som betales i kassen skjer begge deler samme dag, og tallene er like. De skiller lag når:"
      },
      {
        "type": "list",
        "items": [
          "Salg på konto: varene går ut i dag og teller med i dagens salgsinntekt, mens pengene teller som mottatt betaling den dagen oppgjøret skjer.",
          "Forhåndsbestilling: depositumet teller som mottatt betaling når det betales, mens salgsinntekten regnes i sin helhet på hentedatoen.",
          "Tapt depositum: hvis en kunde kansellerer en forhåndsbestilling og du beholder depositumet, ble det allerede regnet som mottatt betaling da det ble betalt. Rapporter viser det separat som tapte depositum, og det regnes aldri som salgsinntekt.",
          "Annullering av en tidligere ordre: pengene som refunderes, teller som mottatt betaling på dagen ordren annulleres, så mottatt betaling den dagen kan bli negativ, mens Annullert teller ordren på salgsdatoen. ⓘ på feltene Mottatt betaling og Annullert forklarer det samme."
        ]
      },
      {
        "type": "p",
        "text": "For å avstemme sammenligner du mottatt betaling med kasseskuffen og kortterminalen. For å se hvor mye du faktisk har solgt i en periode, leser du salgsinntekt. Returer reduserer salgsinntekten den dagen returen skjer."
      }
    ],
    "related": [
      "on-account",
      "pre-orders",
      "report-periods"
    ]
  },
  {
    "slug": "report-periods",
    "category": "reports",
    "question": "Hvilke tidsperioder kan rapportene vise?",
    "keywords": [
      "rapporter",
      "periode",
      "denne uken",
      "denne måneden",
      "dette året",
      "egendefinert periode",
      "dato",
      "toppprodukter"
    ],
    "content": [
      {
        "type": "p",
        "text": "Velg I dag, I går, Denne uken, Denne måneden, Dette året eller Hele perioden øverst i Rapporter, eller bruk Egendefinert for å velge start- og sluttdato. Denne uken følger enhetens første ukedag, mens Denne måneden og Dette året starter den 1. og 1. januar. Hvert valg viser datoene det dekker, og Hele perioden starter ved butikkens første transaksjon."
      },
      {
        "type": "p",
        "text": "For én enkelt dag blir trenddiagrammet et søylediagram per time. Lengre perioder bruker dager, uker, måneder eller år per søyle, avhengig av lengden."
      },
      {
        "type": "p",
        "text": "Kortet Produktrangering viser de fem beste. Trykk på kortet eller Vis alle for å se alle produkter som er solgt i perioden, rangert etter antall etter returer."
      },
      {
        "type": "p",
        "text": "Med Pro-planen kan du bruke Salgssammenligning til høyre i periodelinjen til å sammenligne perioden med den forrige eller med samme periode i fjor – se «Hva viser de avanserte Pro-rapportene?»"
      },
      {
        "type": "note",
        "text": "Disse kalenderperiodene kom i v2.4. Eldre versjoner hadde løpende perioder (I dag / 7 dager / 30 dager / Hele perioden). Hvis du fortsatt ser dem, oppdaterer du DingPOS fra App Store."
      }
    ],
    "related": [
      "advanced-reports",
      "revenue-vs-cash",
      "profit-not-tracked"
    ]
  },
  {
    "slug": "advanced-reports",
    "category": "reports",
    "since": "3.0",
    "question": "Hva viser de avanserte Pro-rapportene?",
    "keywords": [
      "avanserte rapporter",
      "pro",
      "salgssammenligning",
      "i fjor",
      "varmekart",
      "travle timer",
      "saktegående varer",
      "lagerverdi",
      "gjenkjøpsandel",
      "poeng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avanserte rapporter er ikke en egen skjerm. De ligger rett i Rapporter og følger perioden du velger øverst:"
      },
      {
        "type": "list",
        "items": [
          "Salgssammenligning: til høyre i periodelinjen kan du sammenligne med samme periode i fjor eller med forrige periode (én dag mot samme dag forrige uke, denne uken mot forrige uke, denne måneden mot forrige måned, dette året mot i fjor, en egendefinert periode mot like mange dager rett før). Feltet for mottatt betaling viser differansen og vekstraten, og salgsdiagrammet får en lysere linje for sammenligningsperioden. Mens en periode ennå pågår, kuttes sammenligningsperioden på samme tidspunkt.",
          "Ukedag × time: bytt overskriften Salg over tid til Ukedag × time for et varmekart med sju dager og 24 timer – jo mørkere rute, desto mer solgte du. Du kan bytte mellom salgsinntekt og ordrer, og med sammenligning på ser du hvilke timer som vokste og hvilke som krympet.",
          "Saktegående varer: bytt overskriften på rangeringskortet til Saktegående varer for å se produktene fra færrest til flest salg, med nåværende lagerbeholdning og siste salgsdato for hvert produkt. Produkter som aldri er solgt, er merket Aldri solgt. Som standard vises bare produkter som er på lager.",
          "Gjenkjøpsandel: den siste linjen i kundefeltet er andelen medlemmer som handlet i perioden og har handlet to eller flere ganger totalt.",
          "Akkurat nå: lagerverdi (nåværende beholdning × nåværende kostpris), alle lagerbevegelser i den valgte perioden, og poengene kundene har, men ikke har brukt, med det høyeste beløpet de kan få trukket fra. Dette er nåværende saldoer, og perioden endrer dem ikke."
        ]
      },
      {
        "type": "p",
        "text": "Uten Pro har hver av disse fem plassene en liten lås som åpner en forklaring om oppgradering. Alt annet i Rapporter fungerer som før. Rapportene bruker data butikken din allerede lagrer, så når Pro utløper, skjules bare rapportene – ingen data går tapt."
      },
      {
        "type": "note",
        "text": "Ansatte ser avanserte rapporter under tillatelsen Oversikt. Lagerverdibeløpene krever i tillegg tillatelsen Kostpris og fortjeneste."
      }
    ],
    "related": [
      "report-periods",
      "inventory-tracking",
      "staff-permissions"
    ]
  },
  {
    "slug": "profit-not-tracked",
    "category": "reports",
    "question": "Hvordan rapporteres fortjeneste hvis jeg ikke har lagt inn kostpris?",
    "keywords": [
      "kostpris",
      "fortjeneste",
      "margin",
      "bruttomargin",
      "rapporter",
      "fortjeneste registrert",
      "mangler kostpris",
      "produkter uten kostpris"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostpris er et valgfritt felt. Produkter uten kostpris utelates fra fortjenesten, mens salgsinntekten deres fortsatt telles fullt ut. Kortet Fortjeneste registrert i Rapporter viser hvor mange produkter som er solgt i perioden uten kostpris. En kostpris på 0 regnes som en kostpris, så slike produkter står ikke i listen."
      },
      {
        "type": "p",
        "text": "Trykk på kortet eller Vis produkter for å åpne Produkter uten kostpris, sortert etter salgsinntekten som er utelatt fra fortjenesten. Trykk på en rad for å åpne produktet, legg inn kostprisen via Rediger, så er raden merket Kostpris lagt til når du kommer tilbake. Et produkt med varianter merkes Kostpris lagt til først når hver variant som er solgt uten kostpris har fått en – sin egen, eller produktets kostpris som den følger."
      },
      {
        "type": "p",
        "text": "Fortjeneste er salgsinntekt etter alle rabatter (rabatt på varelinjer og handlekurv, kampanjer og innløsning av poeng) og før avgift, minus kostpris – derfor heter feltet Kostpris eks. mva. (valgfritt): skriv inn det du betalte før avgift. Marginen er fortjeneste ÷ salgsinntekten før avgift for produkter med kostpris, så produkter uten kostpris trekker den ikke ned. En retur tar tilbake, på returdagen, fortjenesten disse varene hadde gitt."
      },
      {
        "type": "note",
        "text": "En kostpris du legger inn, påvirker bare senere salg. Salg som allerede er gjort, beregnes ikke på nytt. Denne beregningen kom i v3.1: tidligere versjoner trakk bare fra manuelle rabatter på varelinjer og regnet inkludert avgift som fortjeneste, så etter oppdateringen viser perioder med rabatter eller inkludert avgift lavere fortjeneste. Det er en korrigering, ikke tapte data."
      }
    ],
    "related": [
      "report-periods",
      "product-variants",
      "purchase-orders"
    ]
  },
  {
    "slug": "create-promotion",
    "category": "promotion",
    "question": "Hvordan lager jeg en kampanje i kassesystemet?",
    "keywords": [
      "kampanje",
      "tilbud",
      "kjøp en få en gratis",
      "2 for 1",
      "kjøpsgrense",
      "happy hour",
      "kupong",
      "rabattkode"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Innstillinger → Kampanjer. Disse kampanjetypene støttes blant annet:"
      },
      {
        "type": "list",
        "items": [
          "Kjøpsgrense: kjøp for X og få Y kroner eller Y % avslag.",
          "Kjøp én få én gratis og tilbud på vare nummer N.",
          "Multiplikatorer for bonuspoeng.",
          "Tilbud kun for et bestemt medlemsnivå eller i fødselsmåneden.",
          "Kjøp A få B, betalte tilleggsprodukter og pakketilbud til fast pris."
        ]
      },
      {
        "type": "p",
        "text": "Hver kampanje kan tidsstyres (happy hour-vinduer, bestemte ukedager, over midnatt), begrenses til bestemte produkter og styres med prioritet, regler for kombinering og bruksgrenser. Kampanjer som oppfylles, brukes automatisk i kassen – du trenger ingen rabattkoder."
      }
    ],
    "related": [
      "guide-threshold",
      "guide-composite",
      "promotion-not-applied"
    ]
  },
  {
    "slug": "promotion-not-applied",
    "category": "promotion",
    "question": "Kampanjen min virker ikke – hva bør jeg sjekke?",
    "keywords": [
      "kampanje",
      "virker ikke",
      "brukes ikke",
      "feilsøking",
      "rabatt kommer ikke"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sjekk de vanligste årsakene i denne rekkefølgen:"
      },
      {
        "type": "steps",
        "items": [
          "Tidsplan: er dagens dato innenfor perioden kampanjen er aktiv? Begrenser et happy hour-vindu ukedag eller klokkeslett?",
          "Omfang: ligger varene i handlekurven innenfor kampanjens produkter eller kategori? Er produktet satt til Utelat fra kampanjer (produkter med åpen pris er det som standard)? Er kjøpsgrensen nådd?",
          "Målgruppe: er kampanjen begrenset til et medlemsnivå eller en bursdagsmåned? Ble medlemmet valgt i kassen?",
          "Bruksgrenser: er den totale bruksgrensen, eller grensen for denne kunden, nådd? Grensen per kunde for en kampanje i bursdagsmåned telles per kalenderår.",
          "Kombinering: blokkerer en kampanje med høyere prioritet og «Stopp etterfølgende kampanjer når denne utløses» den?"
        ]
      },
      {
        "type": "p",
        "text": "Hvis alt stemmer og kampanjen fortsatt ikke brukes, send oss et skjermbilde av kampanjens innstillinger på e-post, så hjelper vi deg med å finne feilen."
      }
    ],
    "related": [
      "guide-schedule",
      "guide-priority-stacking",
      "create-promotion"
    ]
  },
  {
    "slug": "loyalty-points",
    "category": "promotion",
    "question": "Hvordan fungerer lojalitetspoeng?",
    "keywords": [
      "poeng",
      "lojalitet",
      "lojalitetsprogram",
      "bonuspoeng",
      "løse inn poeng",
      "velkomstbonus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Innstillinger → Lojalitetsprogram og sett opp to regler: opptjen Y poeng per X brukt, og løs inn N poeng mot M i rabatt (med en valgfri grense for innløsning per ordre). Du kan også gi nye medlemmer velkomstbonus automatisk."
      },
      {
        "type": "p",
        "text": "Velg medlemmet i kassen, så opptjenes poengene automatisk. Skriv inn hvor mange poeng du vil løse inn. Hvis du annullerer en ordre, trekkes poengene som ble opptjent på ordren tilbake, og eventuelle innløste poeng tilbakeføres."
      }
    ],
    "related": [
      "member-tiers",
      "void-order"
    ]
  },
  {
    "slug": "member-tiers",
    "category": "promotion",
    "question": "Hva brukes medlemsnivåer til?",
    "keywords": [
      "medlemsnivå",
      "nivå",
      "vip",
      "gull",
      "oppgradering",
      "medlemskap"
    ],
    "content": [
      {
        "type": "p",
        "text": "Medlemsnivåer (for eksempel Vanlig, Sølv, Gull) har to formål: kampanjer kan rettes mot dem (for eksempel 10 % rabatt kun for Gull), og du ser med et blikk hvilken status en kunde har i kassen."
      },
      {
        "type": "p",
        "text": "Nivåer kan oppgraderes automatisk etter regler du definerer (for eksempel samlet kjøpsbeløp), eller tildeles manuelt. Hvis en annullert ordre utløste en oppgradering, settes nivået automatisk tilbake."
      }
    ],
    "related": [
      "loyalty-points",
      "create-promotion"
    ]
  },
  {
    "slug": "backup-data",
    "category": "backup",
    "question": "Hvordan tar jeg sikkerhetskopi av dataene mine?",
    "keywords": [
      "sikkerhetskopi",
      "backup",
      "icloud",
      "google drive",
      "dropbox",
      "skyen",
      "øyeblikkskopi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Innstillinger → Sikkerhetskopi i skyen, velg iCloud, Google Drive eller Dropbox, og gi tilgang. Etter det kan du ta sikkerhetskopi manuelt når du vil. For iCloud må iPaden være logget på iCloud med iCloud Drive slått på, og DingPOS må ha tilgang til det."
      },
      {
        "type": "p",
        "text": "Sikkerhetskopiene havner i din egen skykonto. Hver sky beholder bare den nyeste: én øyeblikkskopi av dataene og én fil med produktbilder, og hver ny sikkerhetskopi overskriver den forrige."
      },
      {
        "type": "note",
        "text": "Siden en ny sikkerhetskopi erstatter den gamle, bør du ikke ta sikkerhetskopi hvis du mistenker at dataene allerede er blitt feil (for eksempel at en rekke produkter er slettet ved en feil). Send oss heller en e-post, så finner vi ut av neste steg sammen."
      }
    ],
    "related": [
      "transfer-new-ipad",
      "undo-restore",
      "data-after-delete"
    ]
  },
  {
    "slug": "icloud-not-connected",
    "category": "backup",
    "since": "3.0",
    "question": "iCloud-sikkerhetskopi viser «Ikke tilkoblet». Hva gjør jeg?",
    "keywords": [
      "icloud",
      "ikke tilkoblet",
      "icloud drive",
      "sikkerhetskopi feilet",
      "får ikke koblet til"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS viser iCloud som tilkoblet bare når appen faktisk kan bruke det. Når det står Ikke tilkoblet, sjekk tre ting i Innstillinger-appen på iPaden:"
      },
      {
        "type": "steps",
        "items": [
          "Du er logget på med Apple-kontoen din.",
          "iCloud Drive er slått på.",
          "DingPOS har tilgang til iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Når alle tre er på, går du tilbake til Sikkerhetskopi i skyen i DingPOS, og iCloud vises som tilkoblet. Sikkerhetskopiene lagres i DingPOS' egen mappe i iCloud Drive."
      },
      {
        "type": "note",
        "text": "I versjoner før v3.0 fungerte ikke iCloud-sikkerhetskopi, og den feilet hver gang med «Backup.SyncError error 0». Oppdater først DingPOS fra App Store."
      }
    ],
    "related": [
      "backup-data",
      "transfer-new-ipad"
    ]
  },
  {
    "slug": "transfer-new-ipad",
    "category": "backup",
    "question": "Hvordan flytter jeg dataene mine til en ny iPad?",
    "keywords": [
      "flytte data",
      "ny ipad",
      "gjenopprette",
      "overføre",
      "bytte iPad"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Gammel iPad: gå til Innstillinger → Sikkerhetskopi i skyen og ta en manuell sikkerhetskopi. Sjekk at klokkeslettet for sikkerhetskopien er oppdatert.",
          "Ny iPad: installer DingPOS og fullfør oppsettveiviseren.",
          "Ny iPad: gå til Innstillinger → Sikkerhetskopi i skyen, koble til den samme skykontoen og gjenopprett."
        ]
      },
      {
        "type": "p",
        "text": "Når du trykker på Gjenopprett, åpnes først en forhåndsvisning: antall produkter, ordrer og kunder på denne iPaden og i øyeblikkskopien side om side, pluss alle ordrer som gjenopprettingen ville fjerne. Ingenting på denne iPaden endres før du bekrefter. En øyeblikkskopi laget av en nyere versjon av DingPOS ber deg oppdatere appen først. Produktbildene gjenopprettes også."
      },
      {
        "type": "note",
        "text": "En gjenoppretting erstatter alle data på denne iPaden med sikkerhetskopien. Ordrer som er opprettet på denne iPaden etter den sikkerhetskopien, forsvinner. Sjekk at du er koblet til riktig skykonto. Hvis du gjenoppretter fra feil konto, bruker du Angre gjenoppretting."
      }
    ],
    "related": [
      "backup-data",
      "undo-restore",
      "data-after-delete"
    ]
  },
  {
    "slug": "data-after-delete",
    "category": "backup",
    "question": "Beholder jeg dataene mine hvis jeg sletter appen?",
    "keywords": [
      "slette",
      "avinstallere",
      "datatap",
      "fjerne appen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nei. DingPOS lagrer alt lokalt på enheten din. Hvis du sletter appen, slettes alle produkter, ordrer, medlemmer og innstillinger for godt, med mindre du har slått på sikkerhetskopi i skyen."
      },
      {
        "type": "note",
        "text": "Før du sletter appen, bør du alltid ta en manuell sikkerhetskopi og kontrollere at den lyktes. Etter ominstallering gjenoppretter du fra skyen."
      }
    ],
    "related": [
      "backup-data",
      "transfer-new-ipad"
    ]
  },
  {
    "slug": "launch-failure",
    "category": "backup",
    "since": "3.0",
    "question": "Appen viser «Kunne ikke åpne butikkdataene dine». Hva nå?",
    "keywords": [
      "kunne ikke åpne",
      "åpner ikke",
      "krasj",
      "krasjer ved start",
      "database",
      "butikkdata"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ikke slett appen. Denne skjermen betyr at DingPOS ikke fikk lest butikkdataene dine, men dataene ligger fortsatt på denne iPaden. Hvis du sletter appen, slettes de sammen med den."
      },
      {
        "type": "p",
        "text": "Trykk først på Prøv igjen. Hvis det virker, åpnes appen som vanlig. Hvis det fortsetter, trykker du på Kontakt kundestøtte og forteller oss det, så hjelper vi deg med å få tilbake dataene. Denne skjermen flytter eller sletter aldri noen filer."
      },
      {
        "type": "note",
        "text": "Den vanligste årsaken er at appen ble lukket midt i en gjenoppretting. Før v3.0 førte det til at appen krasjet hver gang den ble åpnet. Fra og med v3.0 stopper den i stedet på denne skjermen."
      }
    ],
    "related": [
      "data-after-delete",
      "undo-restore"
    ]
  },
  {
    "slug": "multi-device",
    "category": "backup",
    "question": "Kan jeg bruke to iPader sammen?",
    "keywords": [
      "to ipader",
      "flere enheter",
      "synkronisering",
      "dele data",
      "kasse nummer to"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dataene på hver iPad er foreløpig uavhengige. Deling av ett datasett i sanntid mellom to enheter støttes ikke ennå."
      },
      {
        "type": "p",
        "text": "Du kan kopiere data fra én iPad til en annen via sikkerhetskopi i skyen (ta sikkerhetskopi → gjenopprett). Det fungerer fint når du bytter enhet eller vil fylle en andre iPad med data. Ordrer som er registrert hver for seg på hver enhet, slås derimot ikke sammen automatisk. Synkronisering mellom flere enheter står på planen vår."
      }
    ],
    "related": [
      "transfer-new-ipad",
      "supported-devices"
    ]
  },
  {
    "slug": "import-csv",
    "category": "backup",
    "since": "2.3",
    "question": "Kan jeg importere produkter og salg fra et annet kassesystem eller et regneark?",
    "keywords": [
      "importere",
      "csv",
      "excel",
      "regneark",
      "flytte data",
      "bytte kassesystem",
      "masseimport",
      "salgshistorikk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå til Innstillinger → Dataimport, velg om du vil importere produkter eller salg, og velg en CSV-fil (både Excel og Google Sheets kan lagre som CSV)."
      },
      {
        "type": "steps",
        "items": [
          "Filen åpnes som en tabell. Vanlige kolonnenavn på engelsk og kinesisk (tradisjonell eller forenklet) gjenkjennes automatisk. Trykk på en kolonneoverskrift for å endre hva den tilordnes.",
          "Trykk på en celle for å rette verdien der og da, uten å redigere filen og begynne på nytt.",
          "Trykk på Bekreft for å kontrollere. Rader med feil merkes med rødt og en forklaring. Ved import av salg kan du hoppe over ordrer med feil.",
          "Løs alt som krever et valg (like produktnavn, en rad som passer til flere kunder), se over oppsummeringen og trykk på Start import."
        ]
      },
      {
        "type": "list",
        "items": [
          "Importerte salg plasseres etter ordredato og beregnes på nytt med butikkens valuta og avgiftsmodus. De påvirker ikke lageret og gir ingen velkomstpoeng.",
          "Kunder kobles til eksisterende kunder via telefonnummer eller e-post. De som ikke finnes fra før, opprettes.",
          "Importerte ordrer viser merket Importert med dato og kildens ordrenummer, og kan ikke annulleres eller returneres.",
          "Rader med feil kan eksporteres som en CSV med forklaringer. Rett dem og importer på nytt. Like rader hoppes over automatisk."
        ]
      },
      {
        "type": "note",
        "text": "Dataimport er i betaversjon. Hver fil kan inneholde opptil 50 000 rader eller 20 MB. Ta sikkerhetskopi i skyen før du importerer. Hvis noe ikke lar seg importere eller resultatet ser feil ut, gi oss beskjed via Meld fra om et problem på importskjermen."
      }
    ],
    "related": [
      "backup-data",
      "transfer-new-ipad",
      "product-variants"
    ]
  },
  {
    "slug": "undo-restore",
    "category": "backup",
    "since": "3.0",
    "question": "Jeg gjenopprettet feil sikkerhetskopi. Kan jeg angre?",
    "keywords": [
      "angre gjenoppretting",
      "gjenopprette",
      "feil øyeblikkskopi",
      "gjenopprettingslogg",
      "mistet data",
      "tilbakestille"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Hver gjenoppretting fra skyen beholder dataene den erstattet som en kopi før gjenoppretting. Under Innstillinger → Sikkerhetskopi i skyen viser et kort når den siste gjenopprettingen skjedde og hvor den kom fra. Trykk på Angre gjenoppretting, se over forhåndsvisningen og bekreft. Dataene byttes tilbake til slik de var før gjenopprettingen, og appen lastes på nytt."
      },
      {
        "type": "list",
        "items": [
          "Angre gjenoppretting er selv en gjenoppretting og beholder en ny kopi av det den erstatter, så hvis du trykker på den igjen, bytter du tilbake.",
          "Bare den nyeste kopien beholdes. Neste gjenoppretting erstatter den.",
          "Bare data kommer tilbake: produkter som er lagt til etter øyeblikkskopien, vises med manglende bilde."
        ]
      },
      {
        "type": "p",
        "text": "Vil du se hvem som gjenopprettet, når og fra hvilken øyeblikkskopi, trykker du på Se gjenopprettingslogg på samme skjerm. Der ser du tidspunkt, aktiv ansatt, kilde, antall produkter, ordrer og kunder før og etter, og alle ordrer som ble fjernet for hver gjenoppretting. Loggen ligger på denne iPaden og erstattes aldri av en gjenoppretting."
      },
      {
        "type": "note",
        "text": "Forhåndsvisningen av gjenopprettingen og Angre gjenoppretting fungerer på alle abonnementsplaner. Å se gjenopprettingsloggen er en Pro-funksjon. Loggen skrives også uten Pro (bare uten aktiv ansatt), så hvis du tar Pro senere, ser du alt."
      }
    ],
    "related": [
      "transfer-new-ipad",
      "backup-data",
      "activity-log"
    ]
  },
  {
    "slug": "staff-accounts",
    "category": "staff",
    "since": "3.0",
    "question": "Hvordan legger jeg til ansatte og bytter hvem som står i kassen?",
    "keywords": [
      "ansatte",
      "ansatt",
      "leder",
      "konto",
      "pin-kode",
      "aktiv ansatt",
      "bytte ansatt",
      "skiftbytte",
      "kasserer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Trykk på Ansatte i sidemenyen. Første gang oppretter du eieren: et navn og en firesifret PIN-kode. Du trenger denne PIN-koden for å legge til ansatte og endre tillatelser, så husk den – den kan ikke tilbakestilles."
      },
      {
        "type": "steps",
        "items": [
          "På siden Ansatte trykker du på Legg til ansatt, skriver inn et navn, velger en rolle (Leder eller Ansatt) og angir en firesifret PIN-kode.",
          "Den aktive ansatte vises nederst i sidemenyen og øverst til høyre i kassen. Ved skiftbytte trykker du på navnet, velger ditt eget navn og taster inn PIN-koden din.",
          "Fra da av registreres det på hver ordre, betaling og hver lager- eller poengendring hvem som utførte den. Det vises i ordrelisten og i ordredetaljene, og for annullerte ordrer registreres også hvem som annullerte."
        ]
      },
      {
        "type": "p",
        "text": "Når noen slutter, bruker du Deaktiver denne ansatte: historikken beholdes, og du kan aktivere vedkommende igjen senere. Endrer du et navn, berøres ikke gamle ordrer – de beholder navnet som gjaldt den gangen."
      },
      {
        "type": "note",
        "text": "Ansatte er en Pro-funksjon (også tilgjengelig i prøveperioden). Hvis Pro utløper, beholdes dataene om ansatte og hvem som utførte hver ordre, og nye ordrer registreres på eieren. Tegner du Pro på nytt, er alt tilbake."
      }
    ],
    "related": [
      "staff-permissions",
      "activity-log",
      "free-trial"
    ]
  },
  {
    "slug": "owner-pin-forgotten",
    "category": "staff",
    "since": "3.0",
    "question": "Hva gjør jeg hvis jeg har glemt PIN-koden til eieren?",
    "keywords": [
      "pin-kode",
      "glemt pin",
      "passord",
      "tilbakestille",
      "eier",
      "gjenopprette",
      "låst ute"
    ],
    "content": [
      {
        "type": "p",
        "text": "PIN-koden til eieren kan ikke tilbakestilles, og kundestøtten vår har heller ingen måte å låse den opp på. PIN-koden lagres sammen med butikkdataene dine, så hvis du sletter og installerer appen på nytt og gjenoppretter fra skyen, får du tilbake den samme PIN-koden."
      },
      {
        "type": "p",
        "text": "Når eieren opprettes og hver gang eierens PIN-kode endres, vises advarselen «Husk denne PIN-koden. Hvis du glemmer den, kan den ikke tilbakestilles.» Oppbevar den et sted som bare du har tilgang til."
      },
      {
        "type": "p",
        "text": "Uten eierens PIN-kode er alt som krever den utilgjengelig – å legge til eller redigere ansatte, endre tillatelser for roller og se aktivitetsloggen. Ansatte kan fortsatt ta betalt og gjøre det daglige arbeidet med sine egne PIN-koder."
      },
      {
        "type": "note",
        "text": "Hvis en ansatt glemmer PIN-koden sin, er det ikke noe problem: eieren kan tilbakestille den under Ansatte."
      }
    ],
    "related": [
      "staff-accounts",
      "staff-permissions"
    ]
  },
  {
    "slug": "staff-permissions",
    "category": "staff",
    "since": "3.0",
    "question": "Hvordan fungerer tillatelser for ansatte og godkjenning fra leder?",
    "keywords": [
      "tillatelser",
      "godkjenning",
      "leder",
      "rabattgrense",
      "ansatte",
      "kostpris",
      "rolle"
    ],
    "content": [
      {
        "type": "p",
        "text": "En tillatelse har to verdier: Tillatt eller Krever godkjenning – ingenting er rett og slett forbudt. Når en ansatt prøver noe som krever godkjenning, velger en kollega som har lov til det navnet sitt og taster inn PIN-koden sin for å slippe handlingen gjennom."
      },
      {
        "type": "list",
        "items": [
          "Handlinger (manuell lagerjustering, produktadministrasjon, gjennomføring av et kjøp med rabatt over rabattgrensen): én godkjenning gjelder den ene handlingen.",
          "Visninger (kostpris og fortjeneste, Rapporter, Innstillinger, sikkerhetskopi og gjenoppretting): en godkjenning gir tilgang inntil den aktive ansatte byttes eller appen går i bakgrunnen.",
          "Rabattgrensen gjelder manuelle rabatter og kontrolleres én gang i kassen. Automatiske kampanjer og innløsning av poeng teller ikke med."
        ]
      },
      {
        "type": "p",
        "text": "Standardinnstillinger: Ledere har lov til alt unntatt sikkerhetskopi og gjenoppretting, uten rabattgrense. Ansatte trenger godkjenning for alt, med en grense på 10 %. Eieren har alltid lov til alt og kan ikke redigeres. For å endre dette går du til Ansatte → Tillatelser for roller, trykker på Rediger og lagrer én gang – endringen gjelder alle umiddelbart."
      },
      {
        "type": "note",
        "text": "Annulleringer, returer, salg på konto og innkjøp har bevisst ingen tillatelse; de registrerer bare hvem som utførte dem. Vil du gå gjennom dem senere, bruker du aktivitetsloggen."
      }
    ],
    "related": [
      "staff-accounts",
      "activity-log",
      "apply-discounts"
    ]
  },
  {
    "slug": "activity-log",
    "category": "staff",
    "since": "3.0",
    "question": "Hvordan ser jeg hvem som annullerte en ordre, justerte lageret eller endret en pris?",
    "keywords": [
      "aktivitetslogg",
      "logg",
      "revisjon",
      "hvem endret",
      "annullering",
      "prisendring",
      "lagerjustering",
      "slettet produkt",
      "godkjenninger"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bruk aktivitetsloggen. På siden Ansatte trykker du på Aktivitetslogg øverst til høyre og taster inn eierens PIN-kode. Da ser du butikkens sensitive handlinger, nyeste først: annulleringer, returer, manuelle lagerjusteringer, godkjenninger, endringer av ansatte og tillatelser, endringer av eierens PIN-kode, endringer av produktpriser og kostpriser og slettede produkter. Vanlige salg i kassen vises ikke."
      },
      {
        "type": "list",
        "items": [
          "Hver oppføring viser hva den gjelder, hvem som gjorde hva og når, og resultatet – for eksempel «M pris 390 kr → 350 kr».",
          "Filtrer på ansatt (også deaktiverte), handlingstype og I dag / Denne uken / Denne måneden.",
          "Trykk på en oppføring som peker til en ordre, et produkt eller en kunde for å åpne detaljene.",
          "Ordredetaljer, produktdetaljer og hver enkelt ansatts side har sin egen oppføring som bare viser det som gjelder dem.",
          "Slettede produkter vises fortsatt i loggen med navnet og prisen de hadde den gangen."
        ]
      },
      {
        "type": "note",
        "text": "Aktivitetsloggen registreres på alle abonnementsplaner; bare visningen er en Pro-funksjon, så oppføringer fra perioden da Pro var utløpt dukker opp når du tegner Pro på nytt. Loggen følger med i sikkerhetskopiene dine i skyen."
      }
    ],
    "related": [
      "staff-accounts",
      "staff-permissions",
      "undo-restore"
    ]
  },
  {
    "slug": "free-trial",
    "category": "subscription",
    "question": "Hvordan fungerer den gratis prøveperioden?",
    "keywords": [
      "prøveperiode",
      "gratis",
      "30 dager",
      "prøve gratis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Du får 30 dager med alle funksjonene i Pro fra du installerer appen første gang, blant annet ansatte, tillatelser, aktivitetsloggen og avanserte rapporter. Du trenger ingen konto."
      },
      {
        "type": "p",
        "text": "Tegner du et abonnement i prøveperioden, avsluttes prøveperioden med en gang, og planen du kjøpte gjelder fra da av. Etter prøveperioden er Pro-funksjoner som ansatte og avanserte rapporter bare tilgjengelige med et Pro-abonnement."
      },
      {
        "type": "p",
        "text": "I løpet av de siste 7 dagene og på siste dag minner appen deg én gang hver om hvor mange dager som er igjen, at kassen settes på pause når prøveperioden er over, og at dataene dine beholdes."
      },
      {
        "type": "p",
        "text": "Alt du oppretter i prøveperioden (produkter, ordrer, medlemmer) blir værende i sin helhet. Dataene dine slettes aldri, uansett om du tegner abonnement etterpå eller ikke."
      }
    ],
    "related": [
      "after-trial",
      "manage-subscription"
    ]
  },
  {
    "slug": "after-trial",
    "category": "subscription",
    "question": "Forsvinner dataene mine når prøveperioden er over?",
    "keywords": [
      "utløper",
      "prøveperioden er over",
      "låst kasse",
      "data"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nei, dataene dine blir værende på enheten din for alltid. Når prøveperioden er over, låses kassen, men du kan fortsatt bla i ordrer, se rapporter og administrere produkter."
      },
      {
        "type": "p",
        "text": "Tegn abonnement når som helst, så låses kassen opp umiddelbart, og alle dataene dine er akkurat slik du lot dem."
      }
    ],
    "related": [
      "free-trial",
      "manage-subscription"
    ]
  },
  {
    "slug": "plans-compare",
    "category": "subscription",
    "since": "3.0",
    "question": "Hva er forskjellen på Lite, Standard og Pro?",
    "keywords": [
      "abonnementsplaner",
      "lite",
      "standard",
      "pro",
      "forskjell",
      "sammenligne",
      "oppgradere",
      "nedgradere",
      "pris"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alle tre planene har full kasse, produkter, ordrer (med annulleringer, returer og bytter), rapporter og sikkerhetskopi i skyen. Forskjellen ligger i verktøyene for å drive butikken:"
      },
      {
        "type": "list",
        "items": [
          "Lite: for deg som driver en markedsstand alene og trenger kasse og produkter.",
          "Standard: legger til kampanjer, poeng og medlemsnivåer, lagerstyring, innkjøp, salg på konto, forhåndsbestillinger og overslag over transaksjonsgebyrer.",
          "Pro: legger til ansatte og tillatelser, godkjenning fra leder, aktivitetslogg, gjenopprettingslogg og avanserte rapporter, for butikker med ansatte."
        ]
      },
      {
        "type": "p",
        "text": "Har du allerede Standard? Oppgrader til Pro fra abonnementssiden: Faktureringsperioden er den samme, oppgraderingen gjelder med en gang, og Apple beregner differansen forholdsmessig. Bytter du fra Pro tilbake til Standard, gjelder det fra neste fornyelse. Prisene vises i appen, og du kan sammenligne planene på siden Priser."
      },
      {
        "type": "note",
        "text": "Nedgradering sletter aldri data. Funksjoner utenfor planen din settes på pause, dataene blir værende, og tegner du abonnement igjen, er funksjonene tilbake."
      }
    ],
    "related": [
      "manage-subscription",
      "free-trial",
      "staff-accounts"
    ]
  },
  {
    "slug": "manage-subscription",
    "category": "subscription",
    "question": "Hvordan tegner jeg abonnement, sier det opp eller gjenoppretter et kjøp?",
    "keywords": [
      "tegne abonnement",
      "si opp abonnement",
      "gjenopprett kjøp",
      "pris",
      "betaling"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abonnement håndteres som kjøp i appen via App Store. Planer og priser vises i appen. Betalingen behandles av Apple, og vi ser aldri betalingsopplysningene dine."
      },
      {
        "type": "list",
        "items": [
          "Si opp: Administrer det i Innstillinger → Apple-konto → Abonnementer på enheten din. Si opp minst 24 timer før gjeldende periode utløper, for å unngå fornyelse.",
          "Gjenopprett: Etter bytte av enhet eller ominstallering trykker du på «Gjenopprett kjøp» på abonnementssiden i DingPOS.",
          "Bytt plan: Velg den nye planen på abonnementssiden i DingPOS. Oppgraderinger (Standard til Pro, månedlig til årlig) gjelder med en gang, og Apple beregner differansen forholdsmessig. Nedgraderinger gjelder fra neste fornyelse."
        ]
      }
    ],
    "related": [
      "free-trial",
      "after-trial"
    ]
  },
  {
    "slug": "guide-threshold",
    "category": "promotion-guide",
    "question": "Slik setter du opp rabatt ved kjøp over en viss sum",
    "keywords": [
      "terskel",
      "minimumsbeløp",
      "rabatt ved kjøp over beløp",
      "guide",
      "oppsett",
      "veiledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Innstillinger → Kampanjer → Ny, velg kampanjetypen med terskel for kjøpsbeløp, og gjør deretter dette:"
      },
      {
        "type": "steps",
        "items": [
          "Angi terskelbeløpet og rabatten (fast beløp eller prosent).",
          "Velg omfang: bestemte produkter, bestemte kategorier, eller la feltet stå tomt for hele butikken.",
          "Sett tidsplanen: startdato er påkrevd. La sluttdatoen stå tom for en kampanje som løper videre.",
          "Lagre – kampanjen aktiveres etter tidsplanen og brukes automatisk i kassen, uten koder."
        ]
      },
      {
        "type": "note",
        "text": "Terskelen sjekkes mot delsummen for varene som omfattes av kampanjen, ikke mot hele handlekurven. En kampanje som «handle for 1000 kr på drikke» teller bare drikkevarer mot terskelen, og produkter som er satt til «Utelat fra kampanjer», teller aldri med."
      },
      {
        "type": "p",
        "text": "Én ting vi ofte får spørsmål om: hvis en kampanje med høyere prioritet brukes først, sjekkes terskelen mot beløpet etter rabatten. En handlekurv som ser ut til å ligge over terskelen, kan derfor ende litt under. Vil du at terskelen skal vurderes først, gir du den et lavere prioritetsnummer."
      }
    ],
    "related": [
      "guide-priority-stacking",
      "create-promotion",
      "promotion-not-applied"
    ]
  },
  {
    "slug": "guide-bogo",
    "category": "promotion-guide",
    "question": "Slik setter du opp «kjøp en, få en» og tilbud på hver n-te vare",
    "keywords": [
      "kjøp en få en",
      "2 for 1",
      "3 for 2",
      "gratis vare",
      "guide",
      "veiledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Opprett en kampanje av typen Kjøp X / Få Y: angi hvor mange som kjøpes, hvor mange som fås, og rabattprosenten (100 % = gratis). Avgrens den til bestemte produkter eller en hel kategori – ulike produkter i samme kategori grupperes sammen."
      },
      {
        "type": "list",
        "items": [
          "Varen som får rabatt, er den rimeligste i gruppen, regnet med gjeldende pris. Hvis en tidligere kampanje allerede har gitt rabatt på den, baseres Kjøp X / Få Y-rabatten på den rabatterte prisen, ikke på ordinær pris.",
          "Vil du at merkingen «3. vare gratis» skal vise full ordinær pris, gir du denne kampanjen det laveste prioritetsnummeret, slik at den regnes ut først. Når en rabatt på hele handlekurven kjøres først, blir fradraget som vises for den gratis varen mindre enn ordinær pris. Dette er en egenskap ved beregningsrekkefølgen som vi har testet grundig, ikke en feil. Begge rekkefølgene gir nesten samme totalbeløp. Det som endres, er hvor rabatten synes."
        ]
      },
      {
        "type": "p",
        "text": "Tips: gi hovedtilbudet det laveste prioritetsnummeret, så rabattoversikten på kvitteringen stemmer med budskapet i markedsføringen din."
      }
    ],
    "related": [
      "guide-priority-stacking",
      "guide-threshold",
      "create-promotion"
    ]
  },
  {
    "slug": "guide-points-multiplier",
    "category": "promotion-guide",
    "question": "Slik setter du opp bonuspoeng med multiplikator",
    "keywords": [
      "poengmultiplikator",
      "doble poeng",
      "bonuspoeng",
      "guide",
      "veiledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Opprett en kampanje av typen Poengmultiplikator og angi multiplikatoren (et heltall på 2 eller høyere). Du kan også legge til en terskel for kjøpsbeløp (for eksempel handle for 500 kr → doble poeng) og en tidsplan (for eksempel bare på lørdager)."
      },
      {
        "type": "list",
        "items": [
          "Når flere multiplikatorer kvalifiserer samtidig, brukes bare den høyeste. De ganges eller legges aldri sammen.",
          "Terskelen for kjøpsbeløp sjekkes etter at poeng er innløst. Hvis innløsningen får totalen under terskelen, utløses ikke multiplikatoren denne gangen.",
          "Det må være valgt et medlem i kassen for at poeng skal tjenes opp. Ordrer uten medlem gir ingen poeng, så multiplikatoren har ingenting å gange."
        ]
      }
    ],
    "related": [
      "loyalty-points",
      "guide-schedule",
      "member-tiers"
    ]
  },
  {
    "slug": "guide-tier-birthday",
    "category": "promotion-guide",
    "question": "Slik setter du opp tilbud for medlemsnivå og bursdag",
    "keywords": [
      "medlemsnivå",
      "bursdag",
      "bursdagstilbud",
      "vip",
      "guide",
      "veiledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Opprett først nivåer under Innstillinger → Medlemsnivåer (for eksempel Gull), og rett deretter kampanjen mot dette nivået. For bursdagstilbud setter du målgruppen til Bursdagsmåned og fyller ut Grense per kunde."
      },
      {
        "type": "list",
        "items": [
          "Medlemmet må være valgt i kassen for at tilbudet skal utløses. Kvalifiseringen vurderes ut fra medlemmet som er valgt akkurat nå.",
          "Bursdagstilbud bruker medlemmets bursdagsmåned, så fyll ut fødselsdagsfeltet. Medlemmer uten fødselsdag regnes aldri som bursdagskunder.",
          "Et tilbud for bursdagsmåned krever en grense per kunde, som telles per kalenderår: grensen 1 betyr at hver kunde kan bruke tilbudet én gang i året, og den nullstilles året etter. Tilbudet kan ikke lagres uten en slik grense.",
          "Automatiske nivåoppgraderinger vurderes når kjøpet fullføres. Hvis ordren annulleres, blir en oppgradering den utløste, rullet tilbake automatisk."
        ]
      },
      {
        "type": "note",
        "text": "Før v3.2 ga et tilbud for bursdagsmåned en feilmelding og kunne ikke lagres, selv med en grense per kunde utfylt. Hvis det skjer hos deg, oppdaterer du DingPOS fra App Store."
      }
    ],
    "related": [
      "member-tiers",
      "loyalty-points",
      "guide-schedule"
    ]
  },
  {
    "slug": "guide-composite",
    "category": "promotion-guide",
    "question": "Slik setter du opp gaver, tilleggsvarer til spesialpris og pakketilbud",
    "keywords": [
      "gave",
      "gratis gave ved kjøp",
      "tilleggsvare",
      "pakketilbud",
      "kjøp a få b",
      "guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det finnes tre sammensatte tilbudstyper: gave ved kjøp (kjøp A, få B), tilleggsvare til spesialpris (legg til X kr og få Y) og pakketilbud til fast pris (valgfritt N varer for X kr). Gaver og tilleggsvarer venter på at kassereren bekrefter, mens pakketilbud brukes automatisk."
      },
      {
        "type": "p",
        "text": "Gaver og tilleggsvarer endrer aldri handlekurven av seg selv. Når vilkårene er oppfylt, vises et forslagsbanner på kasseskjermen, og handlekurven endres først når kassereren trykker på Velg gave eller Velg tilleggsvare. Det er med vilje, fordi gaver gjelder fysisk lager: noen må bekrefte at varen finnes, og at kunden vil ha den."
      },
      {
        "type": "list",
        "items": [
          "Etter Avslå dukker det samme forslaget ikke opp igjen for denne handlekurven. En ny eller tømt handlekurv gir forslaget på nytt.",
          "Hvis et nytt forslag dukker opp før bekreftelsen i kassen, må det velges eller avslås før ordren kan sendes inn.",
          "Gave- og tilleggsvarelinjer kan ikke få ytterligere rabatt fra andre rabattkampanjer, og de teller ikke med mot terskelen i andre kampanjer."
        ]
      },
      {
        "type": "p",
        "text": "Pakketilbud (brukes automatisk siden v2.4): så snart handlekurven kan danne en pakke, grupperer DingPOS den og tar den med i totalen – uten forespørsel, og pakker kan ikke deles opp."
      },
      {
        "type": "list",
        "items": [
          "En pakke dannes bare når den gjør handlekurven billigere. Blant varer med lik pris grupperes de uten rabatt først, og varer som allerede har rabatt, beholder rabatten.",
          "Hvilke varer som grupperes sammen, avhenger bare av hva som ligger i handlekurven, aldri av rekkefølgen de ble skannet i.",
          "Hver vare i pakken viser sin andel av pakkerabatten, og beløpet på hver linje er etter rabatter.",
          "I kassen grupperes pakkene på nytt med nyeste priser. Hvis resultatet endres, blir du bedt om å bekrefte den nye totalen."
        ]
      }
    ],
    "related": [
      "create-promotion",
      "guide-threshold",
      "guide-priority-stacking"
    ]
  },
  {
    "slug": "guide-schedule",
    "category": "promotion-guide",
    "question": "Slik setter du opp tidsplan og happy hour",
    "keywords": [
      "tidsplan",
      "happy hour",
      "ukedag",
      "midnatt",
      "tidsrom",
      "guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tidsplanen for hver kampanje har tre lag: en datoperiode (start påkrevd, slutt valgfri), et daglig tidsrom (happy hour) og valgte ukedager. Alle tre må passe for at kampanjen skal utløses."
      },
      {
        "type": "list",
        "items": [
          "For tidsrom som går over midnatt (for eksempel 22:00–02:00) avgjøres ukedagen av dagen tidsrommet starter: hvis bare fredag er valgt, regnes lørdag 01:30 fortsatt som fredagens økt og utløser kampanjen, men lørdag 23:30 gjør det ikke.",
          "Sluttdatoen er en absolutt grense. Selv om et happy hour-tidsrom fortsatt pågår, stopper kampanjen i det sluttdatoen er passert.",
          "Klokkeslettet hentes fra iPadens egen klokke, så sjekk at tidssone og tid på enheten er riktig."
        ]
      }
    ],
    "related": [
      "guide-priority-stacking",
      "promotion-not-applied",
      "create-promotion"
    ]
  },
  {
    "slug": "guide-priority-stacking",
    "category": "promotion-guide",
    "question": "Prioritet, kombinering og «stopp etter» forklart",
    "keywords": [
      "prioritet",
      "kombinere kampanjer",
      "stopp etter",
      "konflikt",
      "rekkefølge",
      "guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "Når flere kampanjer kvalifiserer samtidig, styrer tre innstillinger rekkefølgen og samspillet:"
      },
      {
        "type": "list",
        "items": [
          "Prioritet: lavere tall regnes ut først. Dra for å endre rekkefølgen i kampanjelisten.",
          "Kan kombineres med andre kampanjer (på som standard): når den er av, låser en kampanje på varenivå bare linjene den ga rabatt på, så andre varer kan fortsatt få senere kampanjer på varenivå. En kampanje på handlekurvnivå som ikke kan kombineres, blokkerer alle senere kampanjer på handlekurvnivå.",
          "Stopp etterfølgende kampanjer når denne utløses: når kampanjen er brukt, beregnes ingen flere pengerabatter, men poengmultiplikatorer og gaveforslag påvirkes ikke."
        ]
      },
      {
        "type": "note",
        "text": "Senere kampanjer regnes ut på beløpet etter tidligere rabatter: 10 % rabatt pluss 5 % rabatt er ikke 15 % rabatt, for den andre rabatten gis på totalen etter den første. DingPOS leter heller aldri etter den beste kombinasjonen for kunden. Rekkefølgen bestemmes helt av prioritetene dine."
      },
      {
        "type": "p",
        "text": "Visste du at: hvis en rabatt rundes av til null, teller ikke bruken, og den bruker heller ikke opp noen bruksgrense."
      }
    ],
    "related": [
      "guide-bogo",
      "guide-threshold",
      "guide-schedule"
    ]
  },
  {
    "slug": "roadmap-payment-integration",
    "category": "roadmap",
    "question": "Får DingPOS integrert betalingsterminal eller kortbetaling?",
    "keywords": [
      "betaling",
      "kortbetaling",
      "betalingsterminal",
      "integrasjon",
      "betalingsløsning"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS rører foreløpig ikke selve pengestrømmen. Betalingsmåter er bare etiketter til regnskapet, og de faktiske betalingene går via betalingsterminalen eller betalingsappen du bruker i dag."
      },
      {
        "type": "p",
        "text": "Om vi integrerer betaling, avhenger av hvor stor etterspørselen er. Trenger du det, send oss en melding om hvilken tjeneste du vil koble til (hvilken betalingsleverandør og hvilken terminal) og hvordan du ville brukt den. Vi prioriterer utviklingen etter hvor mange som ber om det."
      }
    ],
    "related": [
      "payment-methods",
      "roadmap-e-invoice"
    ]
  },
  {
    "slug": "roadmap-e-invoice",
    "category": "roadmap",
    "question": "Kan DingPOS skrive ut kvittering eller sende e-faktura?",
    "keywords": [
      "e-faktura",
      "faktura",
      "kvittering",
      "kvitteringsskriver",
      "skriver"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ikke ennå. For å utvikle og teste e-faktura og kvitteringsutskrift må vi kjøpe inn fakturamaskiner og kvitteringsskrivere, og det koster mye. Som et lite team planlegger vi det når brukerbasen har vokst og inntektene er stabile."
      },
      {
        "type": "p",
        "text": "Trenger du dette, send oss en melding med modellen på utstyret du bruker. Vi prioriterer utviklingen etter hvor mange som ber om det."
      }
    ],
    "related": [
      "roadmap-barcode-scanner",
      "roadmap-payment-integration"
    ]
  },
  {
    "slug": "roadmap-barcode-scanner",
    "category": "roadmap",
    "question": "Kan jeg bruke en strekkodeleser med DingPOS?",
    "keywords": [
      "strekkodeleser",
      "strekkodeskanner",
      "skannerpistol",
      "bluetooth",
      "usb",
      "maskinvare"
    ],
    "content": [
      {
        "type": "p",
        "text": "Skanning av strekkoder med kameraet når du legger inn varer, støttes allerede. Fysiske strekkodelesere (USB / Bluetooth) støttes ikke offisielt ennå. Som annen maskinvare krever de at vi kjøper inn enheter til testing og utvikling, og de planlegges etter hvert som brukerbasen vokser."
      },
      {
        "type": "note",
        "text": "Søkefeltet i kassen finner varer på strekkode, så en leser i tastaturmodus kan i teorien skrive inn i det og hente fram varen. Vi har ikke bekreftet dette på ekte utstyr, så det er ikke offisielt støttet. Har du testet en leser som fungerer, si fra hvilken modell det er!"
      },
      {
        "type": "p",
        "text": "Trenger du dette, send oss en melding. Vi prioriterer utviklingen etter hvor mange som ber om det."
      }
    ],
    "related": [
      "barcode-scanning",
      "roadmap-e-invoice"
    ]
  },
  {
    "slug": "roadmap-monthly-settlement",
    "category": "roadmap",
    "question": "Finnes det en månedlig oppgjørsrapport?",
    "keywords": [
      "månedsoppgjør",
      "avstemming",
      "månedsavslutning",
      "månedsrapport",
      "leverandørgjeld",
      "kundefordringer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det finnes ingen egen månedlig oppgjørsrapport ennå, men alt du trenger til avstemmingen finnes allerede i appen:"
      },
      {
        "type": "list",
        "items": [
          "Velg Denne måneden under Rapporter for å se månedens salgsinntekt, mottatt betaling, bruttofortjeneste og fordelingen på betalingsmåter.",
          "Leverandørinnkjøp på månedlig betalingsavtale samles under Å betale i Innkjøp, der du kan gjøre opp en hel måned samtidig.",
          "Salg på konto til kunder samles under Ordrer → Kundefordringer, der du kan gjøre opp en hel måned samtidig."
        ]
      },
      {
        "type": "p",
        "text": "Trenger du en månedlig oppgjørsrapport som du kan eksportere eller skrive ut, send oss en melding om hvilke felt du trenger. Vi prioriterer utviklingen etter hvor mange som ber om det."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
