// Generated from en and the nb translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync nb`, then `npm run l10n -- dingpos apply nb`.

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
      "valuta",
      "avgifter"
    ],
    "content": [
      {
        "type": "p",
        "text": "Første gang du åpner DingPOS, setter en veiviser opp butikken din i to trinn på noen få minutter:"
      },
      {
        "type": "steps",
        "items": [
          "Velg land eller region. Øverst i listen står landet eller regionen denne iPaden er i, og deretter de vanligste markedene. Under finner du alle 175 landene og regionene der DingPOS er i App Store, og du kan søke på navn i appens språk eller på engelsk. Valget fyller ut valuta, avgifter og avgiftsmodus.",
          "Under Butikken din skriver du inn butikknavnet, legger eventuelt til en logo og kontrollerer valuta, avgifter og avgiftsmodus (inkludert / ekskludert avgift). Valutaen er som standard landets egen. Trykk på den for å velge blant 130 valutaer. Avgiftene viser landets standardavgifter: du kan gi dem nytt navn, endre en sats, slette en eller trykke på Legg til mva.-sats for å få en rad til. En butikk i British Columbia kan for eksempel endre den første raden til «GST 5» og legge til en rad «PST 7»."
        ]
      },
      {
        "type": "p",
        "text": "Trykk på Fortsett, så ser du «Ding! Butikken din er klar.» DingPOS setter også opp to betalingsmåter, Kontant og Kredittkort. Deretter legger du inn produktene dine under Produkter og begynner å registrere salg."
      },
      {
        "type": "note",
        "text": "Valuta kan ikke endres etter oppsettet. Avgifter og Mva.-modus kan begge endres senere under Innstillinger → Butikkinfo. I USA, Canada, Brasil og Mikronesia avhenger satsen av delstat, provins eller by. Derfor er satsfeltet tomt til å begynne med, og du må skrive inn satsen du bruker for å gå videre. En sats må være over 0: en butikk som ikke tar avgift, sletter raden. I Tyskland, Frankrike, Italia og andre europeiske land inneholder listen også reduserte satser som er vanlige i lokal detaljhandel, under det lokale avgiftsnavnet, for eksempel «MwSt. 19%» og «MwSt. 7%» i Tyskland. Reduserte satser brukes ikke på nye produkter som standard, så slå dem på for hvert produkt. Listen med 175 land og valget av valuta kom i v3.2. Tidligere versjoner hadde 15 land."
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
        "text": "Nei. DingPOS har ikke noe kontosystem – last ned appen og begynn å selge. Produktene, ordrene og kundedataene dine blir på iPaden din. De når oss bare hvis du sender en støtterapport fra Innstillinger, som legger ved en kopi av butikkdataene dine slik at vi kan gjenskape problemet."
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
        "text": "DingPOS støtter for øyeblikket iPad med iPadOS 17.4 eller nyere, og er hovedsakelig laget for bruk i liggende format."
      },
      {
        "type": "p",
        "text": "iPhone og Mac støttes ikke ennå. Hvis du ønsker at vi støtter en annen enhet, kan du skrive til oss og fortelle hvordan du vil bruke den."
      },
      {
        "type": "note",
        "text": "Alle iPad-modeller som kjører iPadOS 17, kan oppdateres til 17.4, så ingen modell blir stående igjen. En iPad som fortsatt har iPadOS 17.0–17.3, må først få en systemoppdatering under Innstillinger → Generelt → Programvareoppdatering før den kan installere DingPOS v3.5 eller nyere."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kan jeg endre valuta, avgiftssats eller avgiftsmodus etter oppsettet?",
    "keywords": [
      "valuta",
      "avgiftsmodus",
      "endre",
      "låst",
      "avgiftssats",
      "avgifter",
      "mva",
      "inkludert",
      "ekskludert"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avgift kan endres, valuta kan ikke. Avgifter og Mva.-modus endres begge på kortet Mva. under Innstillinger → Butikkinfo, og en endring gjelder bare senere salg: tidligere ordrer, returer og rapporter beholder avgiftsbeløpene og modusen de ble registrert med."
      },
      {
        "type": "list",
        "items": [
          "Avgifter: legg til en, gi den nytt navn, endre satsen eller slett den – se «Hvordan beregnes mva.?»",
          "Avgiftsmodus (inkludert / ekskludert): trykk på den andre modusen, så viser bekreftelsen et eksempel med den første avgiften din, for eksempel «en vare til NT$100 med 5 % avgift: kunden betaler NT$105». Prisene beholder tallene sine, og en åpen handlekurv beregnes på nytt i den nye modusen når du går tilbake til kassen. Modusen kan skiftes siden v3.5; eldre versjoner låser den ved oppsettet.",
          "Etter et skifte refunderer en full retur fortsatt den opprinnelige ordren slik den var. Et bytte (med erstatningsvarer) på en ordre som er solgt i den andre modusen, blokkeres: skift tilbake til forrige modus, eller returner varene og slå dem inn på nytt."
        ]
      },
      {
        "type": "p",
        "text": "Valutaen er låst når oppsettet er fullført. Alle tidligere ordrer er registrert i den, så et skifte underveis ville ødelagt rapportene dine. Sjekk den på trinnet Butikken din i oppsettet: valutaen er som standard landets egen, og du kan trykke på den for å velge en annen."
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
        "text": "Kasseskjermen kan kjøre ti handlekurver samtidig. Trykk på «+» i handlekurvlinjen for å legge til en ny, og trykk på en nummerert fane for å bytte."
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
      },
      {
        "type": "p",
        "text": "Rabatter du gir ofte, kan lagres: gå til Innstillinger → Lojalitet og kampanjer → Rabattforvalg og trykk på Legg til forvalg, for eksempel «Ansattpris 20 % rabatt». Ved kassen har både varerabatten og handlekurvrabatten en Forvalg-meny; når du velger ett, fylles rabattypen og verdien ut nøyaktig som om du hadde skrevet dem inn selv, så det teller fortsatt med i en ansatts rabattgrense. Rabattforvalg kom i v3.6 og krever Standard-planen eller høyere."
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
      "flere mva.-satser",
      "gst",
      "pst",
      "sette mva. på pause",
      "kvittering"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mva. beregnes automatisk ut fra mva.-satsene og mva.-modusen under Innstillinger → Butikkinfo. Det finnes to mva.-moduser, og kvitteringen viser mva.-beløpet i begge:"
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
        "text": "En butikk kan ta flere mva.-satser, for eksempel GST 5 % pluss PST 7 % i British Columbia, eller Japans forbruksavgift på 10 % sammen med den reduserte satsen på 8 %:"
      },
      {
        "type": "list",
        "items": [
          "I kortet Mva. trykker du på Legg til mva.-sats og skriver inn et navn og en sats. Slår du på Bruk på nye produkter, får produkter du legger til senere denne mva.-satsen som standard. Hvis butikken allerede har en standard mva.-sats, starter en ny sats med den bryteren av; slå den på når begge skal tas.",
          "Hvert produkt velger hvilke mva.-satser det tar under Mva.-satser i produktskjemaet – en bento kan for eksempel bare ta den reduserte satsen på 8 %. Når to eller flere er slått på, viser skjemaet produktets samlede sats.",
          "Trykk på en mva.-sats for å gi den nytt navn eller endre satsen, eller bruk Bruk på alle produkter eller Fjern fra alle produkter for å legge den til eller ta den bort på alle produkter på én gang. Når du sletter en mva.-sats, får du først vite hvor mange produkter som slutter å ta den.",
          "I en butikk med ekskl. mva. viser handlekurvens summer én rad per mva.-sats, og ordredetaljene viser én rad per mva.-sats med satsen og beløpet den ble tatt av."
        ]
      },
      {
        "type": "p",
        "text": "Hvis du vil slutte å ta mva. en periode, slår du av Ta avgift øverst i kortet Mva.: alle senere salg er uten mva., også varer som allerede ligger i en handlekurv. Hvert produkt beholder mva.-satsene sine, og når du slår bryteren på igjen, er alt som før."
      },
      {
        "type": "p",
        "text": "Full beregningsrekkefølge: varerabatter og kampanjer → handlekurvrabatt → poenginnløsning → mva. Beløp avrundes etter vanlige regler (½ og over opp) til valutaens antall desimaler (f.eks. 0 for TWD, 2 for USD). Mva. regnes ut én gang per mva.-sats på hver ordre, og desimalene følger Avrunding av avgift i kortet Mva.: Rund av til nærmeste, Rund ned eller Rund opp. Nye butikker i Japan starter med Rund ned, andre butikker med Rund av til nærmeste."
      },
      {
        "type": "note",
        "text": "Mva.-satser med navn kom i v3.5. Når du oppdaterer, blir mva.-satsen din til en mva.-sats med navn («GST 10 %» i Australia, for eksempel), og alle eksisterende produkter tar den. En butikk med sats 0 får ingen mva. Tidligere ordrer og returer beholder mva.-satsene og beløpene de ble registrert med; rapporter regner nå salgsinntekt før mva., også for tidligere perioder (se «Hva er forskjellen på salgsinntekt og mottatt betaling?»)."
      }
    ],
    "related": [
      "change-currency",
      "apply-discounts",
      "revenue-vs-cash"
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
        "text": "En ny butikk starter med to betalingsmåter, Kontant og Kredittkort, med navn på appens språk ved oppsettet. Under Innstillinger → Betalingsmåter kan du legge til andre måter (for eksempel Apple Pay, LINE Pay eller en lokal lommebok) og endre rekkefølgen. Trykk på en betalingsmåte for å gi den nytt navn, for eksempel fra Kredittkort til «Kort (Square)»; Rapporter teller salg fra før navnebyttet under det nye navnet (fra og med v3.6). Slett betalingsmåte ligger nederst i redigeringsarket og spør før den sletter; tidligere ordrer beholder betalingsmåten de ble betalt med, og den siste gjenværende betalingsmåten kan ikke slettes."
      },
      {
        "type": "p",
        "text": "Betalingsmåtene er bare etiketter for regnskapsføring – DingPOS behandler ikke selve betalingene. Ta imot kort- eller mobilbetaling med din eksisterende terminal eller app, og velg deretter tilsvarende etikett i DingPOS for å registrere den. Ved kontantbetaling beregnes vekslepengene automatisk, og der de minste myntene ikke lenger er i bruk, kan kontanter også avrundes – se «Kan kontantbetalinger avrundes til myntene som er i bruk?»"
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
      "cash-rounding",
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
        "text": "Ja. Under Innstillinger → Betalingsmåter trykker du på en betalingsmåte (eller legger til en ny) og fyller ut Transaksjonsgebyr: en prosent, et fast beløp per transaksjon, eller begge deler. Kontantmåter har ikke gebyr. Fra da av registrerer hver betaling som tas imot med den betalingsmåten et gebyr, anslått med satsen som gjelder i øyeblikket."
      },
      {
        "type": "p",
        "text": "I Rapporter får kortet Betalingsmåter en linje «Gebyr · Netto» under hver betalingsmåte som har et gebyr, og nederst på kortet vises forventede gebyrer og forventet nettobeløp mottatt for hele perioden."
      },
      {
        "type": "list",
        "items": [
          "Skriv inn satsen tilbyderen faktisk trekker. Hvis det legges mva. på gebyret, tar du den med: for 3 % pluss 5 % mva. skriver du 3,15 %. La begge feltene stå tomme hvis det ikke er noe gebyr.",
          "En endring av satsen gjelder bare senere betalinger. Gebyrer som allerede er registrert, blir stående som de var.",
          "«Prosentandelen av gebyret refunderes ved refusjoner» er på som standard for butikker i Taiwan og Japan og av for butikker andre steder, fordi tilbydere som Stripe, Square og PayPal beholder gebyret ved refusjon. Still den inn etter tilbyderen din. Den styrer returer og refunderte depositum på forhåndsbestillinger: når den er på, refunderes prosentandelen, mens det faste gebyret aldri refunderes. En annullering eller en tilbakeføring av oppgjør ignorerer bryteren og reverserer hele gebyret som ble registrert, også det faste. Uansett får kunden tilbake samme beløp.",
          "Betalinger som ble tatt imot før betalingsmåten hadde en sats, har ikke noe gebyr: Rapporter merker dem «N mangler sats» og viser nettobeløpet som «—»."
        ]
      },
      {
        "type": "note",
        "text": "Gebyrene er anslag ut fra satsen du skriver inn. Tilbyderens oppgjør viser det faktiske beløpet. Du trenger Standard-planen eller høyere for å redigere gebyrsatser, og på Lite er feltene låst. Fra og med v3.4 ser alle planer de registrerte gebyrene i Rapporter og i Resultat, så en sats som ble satt i prøveperioden, fortsetter å gi anslag på Lite. Tidligere versjoner viste gebyrer bare på Standard og høyere."
      }
    ],
    "related": [
      "payment-methods",
      "revenue-vs-cash",
      "plans-compare"
    ]
  },
  {
    "slug": "cash-rounding",
    "category": "checkout",
    "since": "3.5",
    "question": "Kan kontantbetalinger avrundes til myntene som er i bruk?",
    "keywords": [
      "kontantavrunding",
      "avrunding",
      "runde opp",
      "runde ned",
      "mynter",
      "øre",
      "cent",
      "0,05",
      "vekslepenger",
      "canada",
      "australia",
      "sveits"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Canada, Australia, New Zealand, Sveits, Danmark, Sverige, Norge, Belgia, Finland og Ungarn bruker ikke lenger de minste myntene sine, så DingPOS avrunder kontanter til et beløp du faktisk kan gi: en ordre på C$12.99 betalt kontant tas imot som C$13.00, og vekslepengene regnes ut fra C$13.00. Kortbetalinger og andre betalinger uten kontanter forblir nøyaktige."
      },
      {
        "type": "p",
        "text": "En ny butikk som settes opp i ett av disse landene, med landets valuta, får dette slått på automatisk. Andre butikker kan slå det på med kortet Kontantavrunding nederst under Innstillinger → Betalingsmåter: velg hva kontanter skal avrundes til (Ingen avrunding, eller 0,05, 0,10, 0,50 eller 1,00 i en valuta med øre; 5, 10, 50 eller 100 i en valuta uten øre, for eksempel TWD eller JPY), og for en enhet som kan havne nøyaktig midt imellom, om det avrundes opp eller ned. En endring gjelder bare senere betalinger."
      },
      {
        "type": "list",
        "items": [
          "Kassen viser «Kontant mottatt C$13.00». Hvis kunden ber om å betale det nøyaktige beløpet, trykker du på Ta nøyaktig beløp under betalingsmåtene; det gjelder det ene salget.",
          "Ordretotalen, mva., salgsinntekten, poengene og medlemmets forbruk endres ikke; avrundingsforskjellen ligger på betalingen, og kvitteringsskjermen og ordredetaljene viser den under totalen, for eksempel «Kontantavrunding +C$0.01».",
          "Kontantrefusjoner ved retur, kontantdepositum og restbeløp ved henting av forhåndsbestillinger, tilleggsbetalinger ved bytte og kundefordringer som gjøres opp med kontanter, avrundes også; når flere gjøres opp samtidig, avrundes hele partiet én gang.",
          "Annulleringer, refunderte depositum på forhåndsbestillinger og tilbakeførte oppgjør betaler tilbake nøyaktig det som ble registrert, uten ny avrunding.",
          "Mottatt betaling i Rapporter viser hvor mye av beløpet som er kontantavrunding, og det månedlige resultatet får en rad Kontantavrunding som teller med i nettoresultatet. Avrunding er aldri salgsinntekt."
        ]
      },
      {
        "type": "note",
        "text": "Sveits avrunder alltid ned, etter reglene for prisvisning – CHF 12.98 tas imot som CHF 12.95, og det finnes ikke noe valg for midt imellom. Belgia avrunder bare totaler over €0.05. Kontantavrunding er med i alle abonnementsplaner, og en eksisterende butikk tar imot kontanter nøyaktig som før til du slår det på."
      }
    ],
    "related": [
      "payment-methods",
      "revenue-vs-cash",
      "profit-loss"
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
    "slug": "checkout-customer",
    "category": "checkout",
    "since": "3.4",
    "question": "Hvordan legger jeg til eller bytter kunde på et salg?",
    "keywords": [
      "kunde",
      "medlem",
      "legge til kunde",
      "bytte kunde",
      "ny kunde",
      "kasse"
    ],
    "content": [
      {
        "type": "p",
        "text": "Du kan legge til kunden i handlekurven eller på kasseskjermen: raden Kunde under beløpet åpner kundelisten når ingen er lagt til, og gir deg Bytt kunde eller Fjern kunde når noen er det. Kunden som velges i kassen, blir handlekurvens kunde og blir stående på handlekurven hvis du avbryter kassen."
      },
      {
        "type": "list",
        "items": [
          "Når du bytter kunde, beregnes nivårabatter, bursdagstilbud og innløsning av poeng på nytt med en gang. Kontantbeløp eller depositum du allerede har skrevet inn, beholdes og sjekkes mot den nye totalen.",
          "Finner du ikke kunden? Trykk på Ny kunde øverst til høyre i kundelisten, eller midt i listen når ingenting samsvarer med søket. Det du søkte etter, fylles inn i skjemaet – sifre havner i telefonfeltet, alt annet i navnefeltet – og den nye kunden legges til på salget.",
          "Hvis du trykker på På konto uten at en kunde er lagt til, åpnes kundelisten, og På konto velges så snart du har valgt noen.",
          "Hvis den nye kunden gjør at en manuell rabatt går over den aktive ansattes rabattgrense, må en leder godkjenne først. Avbryter du godkjenningen, blir kunden som den var."
        ]
      },
      {
        "type": "note",
        "text": "Kunder er en del av Standard-planen. På Lite står det «Kunder – Standard-plan» på raden, og den åpner detaljer om oppgradering. Raden Kunde i kassen kom i v3.4; tidligere versjoner legger til kunden bare i handlekurven."
      }
    ],
    "related": [
      "loyalty-points",
      "on-account",
      "member-tiers"
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
        "text": "Gå til Ordrer, finn ordren, åpne detaljvisningen og trykk på Annuller. Arket «Annullere denne ordren?» har et valgfritt felt for årsak (opptil 100 tegn). Trykk på Annuller øverst til høyre, så er det gjort. Årsaken vises i ordredetaljene og i aktivitetsloggen, og kan ikke redigeres når den først er sendt."
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
      "tilbakebetaling",
      "kassere",
      "årsak til retur"
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
          "For en vare med lagerstyring kan hver returnerte linje enten gå tilbake på lager (Til lager, standard) eller kasseres (Kasser, fra og med v3.5). Til lager legger varene tilbake på lageret. Kasser lar lageret stå som det var, og kostprisen varen hadde da den ble solgt, regnes med i månedens Lagertap i Resultat. Tilbakebetaling, mva. og poeng er de samme uansett.",
          "Poeng som ble tjent på den opprinnelige ordren, trekkes tilbake, poeng som ble brukt, gis tilbake, og erstatningsvarene gir egne poeng.",
          "Når den opprinnelige ordren er et salg på konto som ikke er gjort opp, skifter ingen penger hender: returen trekkes fra kundens utestående beløp, og en dyrere erstatningsvare legger differansen til beløpet.",
          "En ordre kan returneres i flere runder, men aldri utover antallet som opprinnelig ble solgt. Når alt er levert tilbake, summerer mva., rabatter og poeng som er returnert, seg nøyaktig til den opprinnelige ordren. Bruksgrenser for kampanjer gis ikke tilbake ved en retur."
        ]
      },
      {
        "type": "p",
        "text": "Feltet Årsak er valgfritt og kan inneholde opptil 100 tegn. Årsaken vises i ordredetaljene og i aktivitetsloggen, og kan ikke redigeres når den først er sendt."
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
        "text": "I kassen bytter du øverst på skjermen fra Salg til Forhåndsbestilling, velger hentedato, skriver inn depositumet (alt fra 0 til hele beløpet, med snarveiene 30 % / 50 % / Hele) og velger hvordan depositumet betales. Legg til en kunde, så du kan kontakte vedkommende om henting."
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
        "text": "Ja. Velg På konto som betalingsmåte, så registreres salget som et utestående beløp på kunden. Et utestående beløp må ha en eier, så hvis ingen kunde er lagt til, åpner trykk på På konto kundelisten først (fra og med v3.4; eldre versjoner ber deg legge til en kunde i handlekurven)."
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
          "En retur på en ordre som ikke er gjort opp ennå, gir ingen utbetaling: beløpet trekkes fra kundens utestående beløp.",
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
      "checkout-customer",
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
        "text": "Ja. Detaljsidene for ordrer, kunder og innkjøpsordrer har hver sitt notatkort – trykk på det for å redigere, opptil 500 tegn. Så lenge det ikke finnes noe notat, vises bare linjen «Legg til et notat». Du kan også skrive et notat i skjemaet når du oppretter en kunde eller en innkjøpsordre."
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
        "text": "Når et produkt har varianter, har hver kombinasjon under Pris og lager per variant sitt eget lager, og prisen følger produktets Pris: en kombinasjon uten egen pris viser produktets pris i grått og endres når den endres, og et tall du skriver inn, er kombinasjonens egen pris, vist i svart. Sett for eksempel Pris for en T-skjorte til 390 og endre bare L til 350: M og XL selges for 390, og når Pris senere blir 420, følger M og XL med til 420, mens L blir stående på 350. ⓘ ved siden av kolonnen Pris inneholder Bruk produktets pris, som setter alle kombinasjoner tilbake til å følge produktprisen. Produkter laget før v3.6 beholder hver variantpris som kombinasjonens egen pris, og produktets Pris er den laveste av dem. Kassen, produktlisten og produktdetaljene viser et prisområde fra laveste til høyeste pris, for eksempel «NT$350–NT$390», eller én pris når alle kombinasjonene koster det samme; sortering etter pris bruker den laveste kombinasjonsprisen. I kassen vises en variantvelger når du trykker på produktet, før det legges i handlekurven."
      },
      {
        "type": "p",
        "text": "Kostpris fungerer på samme måte: et tomt felt viser produktets kostpris i grått og endres når den endres, og et tall er kombinasjonens egen kostpris, vist i svart – også 0. Bruk produktets kostpris, i ⓘ ved siden av kolonnen Kostpris, fjerner alle egne kostpriser på én gang."
      },
      {
        "type": "note",
        "text": "Navn på produktvalg og valgverdier kan ha maks 20 tegn, og mellomrom i begynnelsen og slutten fjernes når du lagrer. En verdi du ikke har skrevet noe i, er ikke en kombinasjon og hoppes over ved lagring. Lagringen stopper, og feltet får rød kant, når navnet på et produktvalg er tomt, når alle verdiene til et produktvalg er tomme, eller når du tømmer en verdi produktet allerede hadde lagret; skriv den inn igjen, eller fjern den med ×-knappen. Et produkt med varianter kan ikke bruke åpen pris."
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
      "dagspris",
      "prosentgebyr"
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
          "Fra og med v3.3 bytter du mellom Beløp og Prosent under «Beregn etter». Ved 5 % blir linjen 5 % av delsummen for de andre varene (etter varerabatter, før kampanjer, handlekurvrabatt og innløsning av poeng), rundet opp fra og med halvparten til valutaens antall desimaler, og den følger handlekurven når varer legges til, fjernes eller får rabatt. Handlekurvlinjen viser «5 % av handlekurven», og ordren registrerer beløpet den ble til.",
          "En linje med åpen pris får ingen varerabatt; endre prisen hvis du vil ta mindre betalt. Handlekurvrabatt, innløsning av poeng og kampanjer (med mindre linjen er utelatt fra dem) gjelder fortsatt for den.",
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
        "text": "Når sporingen er på, trekker salg og forhåndsbestillinger fra lageret automatisk. Annulleringer, returer og kansellerte forhåndsbestillinger legger varene tilbake, og mottak av en innkjøpsordre øker beholdningen. Alle endringer føres i en fullstendig logg over lagerbevegelser. Ved 10 eller færre merkes lageret som lavt, med oransje farge, i produktlisten, i kassen og i produktdetaljene."
      },
      {
        "type": "p",
        "text": "Det er to måter å endre tallet manuelt på:"
      },
      {
        "type": "list",
        "items": [
          "Ny telling: rediger lagertallet i produktskjemaet slik at det stemmer med det du faktisk har talt. Det kommer aldri med i resultatregnskapet.",
          "Juster lager (siden v3.5): trykk på Juster lager i produktdetaljene, velg Fjern eller Legg til, antallet og en årsak, for eksempel Utløpt/bedervet, Skadet eller Prøver og gaver. Kostnaden for det som fjernes, regnes med i månedens lagertap i resultatregnskapet – se «Hvordan registrerer jeg varer som har gått ut på dato, blitt ødelagt eller gitt bort som prøver?»"
        ]
      }
    ],
    "related": [
      "stock-adjustment",
      "negative-inventory",
      "purchase-orders"
    ]
  },
  {
    "slug": "stock-adjustment",
    "category": "products",
    "since": "3.5",
    "question": "Hvordan registrerer jeg varer som har gått ut på dato, blitt ødelagt eller gitt bort som prøver?",
    "keywords": [
      "juster lager",
      "lagertap",
      "svinn",
      "kassering",
      "bedervet",
      "utløpt",
      "skadet",
      "prøver",
      "butikkrekvisita",
      "ny telling"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bruk Juster lager. For et produkt med sporet lager trykker du på Juster lager i produktdetaljene, velger Fjern eller Legg til, stiller inn antallet med + og − (det starter på 1; trykk på tallet for å skrive det inn), velger en årsak og legger eventuelt til et notat (opptil 100 tegn). Arket regner ut lageret etter endringen, og linjen under årsaken sier om justeringen kommer med i resultatregnskapet."
      },
      {
        "type": "list",
        "items": [
          "Årsaker til å fjerne: Brukt i produksjon, Utløpt/bedervet, Skadet, Mistet eller stjålet, Ansattes bruk, Prøver og gaver, Butikkrekvisita og Annet. Årsaker til å legge til: Egenprodusert, Funnet og Annet. Annet krever et notat.",
          "Unntatt Brukt i produksjon regnes det du fjerner med kostprisen det har akkurat da, i månedens lagertap i resultatregnskapet. Det kommer etter bruttofortjenesten og reduserer nettoresultatet; bruttofortjeneste og margin endres ikke. Brukt i produksjon tar bare varen ut av lageret, fordi kostnaden til et materiale allerede ligger i kostprisen til produktet som er laget av det.",
          "Funnet trekker det samme beløpet fra lagertapet igjen. Egenprodusert og Annet på Legg til-siden øker bare lageret og kommer aldri med i resultatregnskapet.",
          "En justering regnes på dagen du registrerer den. Den kan ikke etterdateres, redigeres eller slettes. Hvis du har gjort en feil, registrerer du Funnet eller en justering i motsatt retning.",
          "Et produkt uten kostpris kan fortsatt justeres, men resultatregnskapet kan ikke sette noe beløp på det, og måneden viser hvor mange registreringer som manglet kostpris."
        ]
      },
      {
        "type": "p",
        "text": "Å redigere lagertallet i produktskjemaet er en Ny telling: det stemmer med det du faktisk har talt og kommer aldri med i resultatregnskapet. Listen over lagerbevegelser under Rapporter filtrerer lagerjusteringer og nye tellinger hver for seg, og aktivitetsloggen viser årsaken og notatet til hver justering."
      },
      {
        "type": "note",
        "text": "Juster lager krever Standard-planen eller høyere. På Pro blir ansatte hvis rolle krever godkjenning for Manuell lagerjustering bedt om PIN-koden til en leder når de bekrefter."
      }
    ],
    "related": [
      "inventory-tracking",
      "profit-loss",
      "not-for-sale-products"
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
        "text": "Negativt lager betyr som regel at et påfyll ikke ble registrert, eller at en forhåndsbestilt vare ikke har kommet ennå (forhåndsbestillinger trekker fra lageret når de legges inn). Registrer påfyll ved å motta en innkjøpsordre, så retter tallet seg selv. Rett en differanse etter lagertelling ved å redigere lagertallet i produktskjemaet (en ny telling); for varer som er ødelagt, utløpt eller gitt bort, registrerer du årsaken med Juster lager. Begge deler blir stående i loggen over lagerbevegelser."
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
      "å betale",
      "ubetalte regninger"
    ],
    "content": [
      {
        "type": "p",
        "text": "Under Innkjøp i sidemenyen administrerer du leverandører og innkjøpsordrer. En leverandør lagrer navn, kontaktperson, telefon, adresse og standard betalingsvilkår: Betaling ved mottak eller Månedskreditt."
      },
      {
        "type": "steps",
        "items": [
          "Trykk på Nytt innkjøp, velg leverandør og legg til produkter, antall og enhetskostnad (forhåndsutfylt med kostprisen produktet har nå). Du kan også legge til fraktkostnad. For varer som ikke er opprettet som produkter ennå, trykker du på Nytt produkt i valget Legg til produkt – det nye produktet havner rett i innkjøpsordren som en linje. Er leverandøren ikke opprettet ennå, trykker du på Legg til leverandør øverst til venstre i leverandørlisten – den nye leverandøren havner rett tilbake i innkjøpsordren.",
          "Et utkast rører aldri lager eller ubetalte regninger – rediger eller slett det som du vil.",
          "Når varene kommer, trykker du på Motta varer: lageret for sporede produkter øker, og innkjøpsordren får nummer og låses. Som standard oppdaterer mottaket også kostprisen på hvert produkt til denne enhetskostnaden. Slå av Synkroniser produktets kostpris på innkjøpsordren for å la kostprisene stå uendret. Under den fordeler Inkluder frakt i kostpris (på for nye innkjøpsordrer) fraktkostnaden på linjene etter beløp, slik at kostprisen som skrives til hvert produkt inkluderer sin andel: mel 10 × $30, smør 1 × $60 og $25 i frakt gir mel en kostpris på $32 og smør $64."
        ]
      },
      {
        "type": "p",
        "text": "Betalingsvilkårene avgjør hva som skjer videre: ordrer med Betaling ved mottak merkes som betalt, mens ordrer med Månedskreditt blir stående som ubetalte under Å betale. Der kan du gjøre dem opp per leverandør – én ordre, denne måneden eller alt."
      },
      {
        "type": "p",
        "text": "Råvarer du ikke selger, som mel eller emballasje, kan kjøpes inn på samme måte: legg dem inn som produkter som ikke selges – se «Kan jeg legge inn råvarer som mel eller emballasje som produkter?»"
      },
      {
        "type": "note",
        "text": "Innkjøp krever Standard-planen eller høyere. En leverandør med ubetalte mottatte ordrer kan ikke slettes."
      }
    ],
    "related": [
      "inventory-tracking",
      "not-for-sale-products",
      "negative-inventory",
      "roadmap-monthly-settlement"
    ]
  },
  {
    "slug": "not-for-sale-products",
    "category": "products",
    "since": "3.5",
    "question": "Kan jeg legge inn råvarer som mel eller emballasje som produkter?",
    "keywords": [
      "selges ikke",
      "produkt som ikke selges",
      "råvarer",
      "ingredienser",
      "materialer",
      "emballasje",
      "rekvisita",
      "selg i kassen",
      "innkjøp",
      "kostpris"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Slå av Selg i kassen under bildet i produktskjemaet (den er på som standard), så blir det et produkt som ikke selges: det trenger ingen pris, beholder kostpris, strekkode, lager og varianter, og produktlisten viser «Selges ikke» der prisen ellers ville stått."
      },
      {
        "type": "list",
        "items": [
          "Et produkt som ikke selges, vises aldri i kassens rutenett, i kategorier, i søk eller ved skanning av strekkode, og kan ikke være en gave, en tilleggsvare, målet for en kampanje eller en erstatningsvare ved bytte. En kategori som bare har produkter som ikke selges, vises ikke i kassens kategorilinje.",
          "Når butikken har produkter som ikke selges, vises en filterknapp øverst til høyre i Produkter: velg Alle produkter, Selges i kassen eller Selges ikke, sammen med søk og kategorier.",
          "Innkjøpsordrer, mottak, Synkroniser produktets kostpris og ubetalte regninger fungerer akkurat som for andre produkter, så innkjøpskostnaden og lageret for et materiale kan registreres under Innkjøp.",
          "Salg av andre produkter trekker ikke fra lageret. Når du bruker noe av det, registrerer du en fjerning med Juster lager i produktdetaljene: Brukt i produksjon for det som gikk inn i produkter, Butikkrekvisita for ting som papirposer eller rengjøringsmidler.",
          "Du kan slå det på igjen når som helst, og pris og avgifter er fortsatt der. Ordrer og rapporter som allerede er laget, påvirkes ikke."
        ]
      },
      {
        "type": "p",
        "text": "Slik når kostnaden resultatregnskapet: innkjøp telles ikke med der direkte. For et produkt som lages av det, legger du kostnaden på det produktet, og den trekkes fra når produktet selges. Rekvisita som ikke inngår i noe produkts kostpris, registreres som Butikkrekvisita når de brukes hvis lageret deres spores, eller som en engangsutgift hvis ikke. Ikke registrer de samme pengene på begge måter, ellers telles de to ganger."
      },
      {
        "type": "note",
        "text": "Produkter som ikke selges finnes på alle planer; innkjøp, lagersporing og Juster lager krever Standard-planen eller høyere."
      }
    ],
    "related": [
      "purchase-orders",
      "stock-adjustment",
      "record-expenses"
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
      "rapporter",
      "bruttofortjeneste",
      "fra salgsinntekt til bruttofortjeneste",
      "kasseavstemming",
      "avstemming",
      "depositum",
      "salg på konto",
      "avgift"
    ],
    "content": [
      {
        "type": "p",
        "text": "Salgsinntekt telles den dagen varene ble overlevert, etter alle rabatter og før avgift. Mottatt betaling telles den dagen pengene kom inn, og er pengene du tok imot, avgift inkludert. I en butikk som tar avgift, er mottatt betaling høyere enn salgsinntekten med like mye som avgiften, selv for ordrer som betales i kassen. Begge vises som de to første feltene i første rad i Rapporter, sammen med Bruttofortjeneste, Ordrer og Gjennomsnittlig ordreverdi."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Rader med felt i Rapporter, med Salgsinntekt og Mottatt betaling side om side i første rad"
      },
      {
        "type": "h2",
        "text": "Når salgsinntekt og mottatt betaling er forskjellige"
      },
      {
        "type": "p",
        "text": "For eksempel: En butikk med priser inkludert avgift selger for NT$1,050 inkludert 5 % avgift, og kunden betaler i kassen. Da er salgsinntekten NT$1,000 og mottatt betaling NT$1,050. Utover avgiften skiller de to tallene lag i disse tilfellene:"
      },
      {
        "type": "list",
        "items": [
          "Salg på konto: varene går ut i dag og teller med i dagens salgsinntekt, mens pengene teller som mottatt betaling den dagen oppgjøret skjer.",
          "Forhåndsbestilling: depositumet teller som mottatt betaling når det betales, mens salgsinntekten regnes i sin helhet på hentedatoen.",
          "Tapt depositum: hvis en kunde kansellerer en forhåndsbestilling og du beholder depositumet, ble det allerede regnet som mottatt betaling da det ble betalt. Rapporter viser det separat som Tapt depositum, og det regnes aldri som salgsinntekt.",
          "Annullering av en tidligere ordre: pengene som refunderes, teller som mottatt betaling på dagen ordren annulleres, så mottatt betaling den dagen kan bli negativ. Selve den annullerte ordren telles på salgsdatoen og vises i undertittelen til feltet Ordrer.",
          "Kontantavrunding: det kontantavrundingen legger til eller trekker fra ordretotalen, regnes som mottatt betaling, aldri som salgsinntekt."
        ]
      },
      {
        "type": "p",
        "text": "Når ett av beløpene ikke er null, viser undertittelen til feltet Mottatt betaling kontantavrunding eller tapt depositum."
      },
      {
        "type": "h2",
        "text": "Avgift og detaljer om feltene"
      },
      {
        "type": "p",
        "text": "Avgiften som skiller salgsinntekt og mottatt betaling, står i Fra salgsinntekt til bruttofortjeneste, som åpnes fra nederste linje i feltet Bruttofortjeneste. Der ser du Salgsinntekt (inkl. mva.), Avgift og Salgsinntekt (eks. mva.). Butikker i Australia, Storbritannia, New Zealand og Singapore ser det lokale avgiftsnavnet der, for eksempel Salgsinntekt (inkl. GST), GST og Salgsinntekt (eks. GST)."
      },
      {
        "type": "p",
        "text": "For å se avgiften du har tatt inn og skal innrapportere, åpner du Avgiftsrapport fra feltet Avgift."
      },
      {
        "type": "p",
        "text": "ⓘ-ikonet på feltene Salgsinntekt, Mottatt betaling og Ordrer forklarer disse reglene i appen, også de annullerte ordrene som står i undertittelen til feltet Ordrer."
      },
      {
        "type": "h2",
        "text": "Avstemming og lesing av salgstall"
      },
      {
        "type": "p",
        "text": "For å avstemme sammenligner du mottatt betaling med kasseskuffen og kortterminalen. Kortet Betalingsmåter i Rapporter viser én rad per betalingsmåte, og salg som er gjort før du endrer navn på en betalingsmåte, telles under det nye navnet. For å se hvor mye du har solgt i en periode, leser du salgsinntekt. Returer reduserer salgsinntekten den dagen returen skjer."
      },
      {
        "type": "note",
        "text": "Salgsinntekt før avgift kom i v3.5, og tidligere perioder ble regnet om på samme måte, så en butikk som tar avgift ser lavere salgsinntekt enn før oppdateringen. Det er en korrigering. Tidligere versjoner tok med avgiften i salgsinntekten, og butikker med priser uten avgift regnet til og med salgsavgiften de krevde inn som salgsinntekt."
      }
    ],
    "related": [
      "on-account",
      "pre-orders",
      "report-periods",
      "tax-report"
    ]
  },
  {
    "slug": "report-periods",
    "category": "reports",
    "question": "Hvilke tidsperioder kan rapportene vise?",
    "keywords": [
      "rapporter",
      "periode",
      "tidsperiode",
      "denne uken",
      "denne måneden",
      "dette året",
      "egendefinert periode",
      "dato",
      "produktrangering",
      "sammenlign perioder"
    ],
    "content": [
      {
        "type": "p",
        "text": "Velg I dag, I går, Denne uken, Denne måneden, Dette året eller Hele perioden i periodelinjen øverst i Rapporter, eller trykk på Egendefinert for å velge en valgfri start- og sluttdato. Alle kortene på siden følger perioden du velger. Denne uken følger enhetens første ukedag, Denne måneden starter den 1., Dette året starter 1. januar, Hele perioden starter ved butikkens første transaksjon, og hvert valg viser datoene det dekker."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Periodelinjen øverst i Rapporter med Egendefinert valgt og datovelgeren åpen for å velge Start og Slutt"
      },
      {
        "type": "h2",
        "text": "Velge en egendefinert periode"
      },
      {
        "type": "p",
        "text": "Bruk Egendefinert når du trenger en periode utenfor de ferdige kalenderperiodene, for eksempel en tomåneders eller kvartalsvis innrapporteringsperiode for avgift."
      },
      {
        "type": "steps",
        "items": [
          "Åpne Rapporter og trykk på Egendefinert i periodelinjen.",
          "Velg start- og sluttdato i datovelgeren.",
          "Bekreft datoene for å oppdatere rapporten."
        ]
      },
      {
        "type": "p",
        "text": "Feltet Avgift og avgiftsrapporten følger også den valgte perioden, så når du angir en innrapporteringsperiode med Egendefinert, oppdateres begge. Se den tilhørende artikkelen om avgiftsrapporten for detaljer. Til høyre i periodelinjen trykker du på Sammenlign for å se den valgte perioden ved siden av perioden før eller samme periode i fjor. Se den tilhørende artikkelen om avanserte rapporter for detaljer."
      },
      {
        "type": "h2",
        "text": "Felt og kort på siden"
      },
      {
        "type": "p",
        "text": "Under periodelinjen viser Rapporter to rader med tallfelt, etterfulgt av diagrammer og oppsummeringskort i par, med Akkurat nå nederst."
      },
      {
        "type": "list",
        "items": [
          "Første rad med felt: Salgsinntekt, Mottatt betaling, Bruttofortjeneste, Ordrer og Gjennomsnittlig ordreverdi.",
          "Andre rad med felt: Rabatter totalt, Avgift, Nettoresultat, Produkter uten kostpris og Betjente kunder.",
          "Første par: trenddiagrammet ved siden av Kostnad og bruttofortjeneste.",
          "Andre par: Produktrangering ved siden av Andel per kategori.",
          "Tredje par: Betalingsmåter ved siden av kortet Kampanjer.",
          "Nederste kort: Akkurat nå."
        ]
      },
      {
        "type": "p",
        "text": "To av feltene i andre rad vises bare i bestemte tilfeller. Avgift, som kom i v3.6, vises bare for en butikk med avgifter eller når den valgte perioden har salg gjort med avgift. Nettoresultat vises bare når perioden er Denne måneden eller dekker nøyaktig én hel måned."
      },
      {
        "type": "note",
        "text": "Hvis en periode ikke har ordrer, viser Rapporter bare periodelinjen, en melding og Akkurat nå."
      },
      {
        "type": "h2",
        "text": "Slik leser du diagrammer og Produktrangering"
      },
      {
        "type": "p",
        "text": "Menyen øverst til høyre på trenddiagrammet bytter det mellom Salgsinntekt, Ordrer, Gjennomsnittlig ordreverdi og Betjente kunder. Diagrammet har også en bryter mellom Utvikling og Ukedag × time. Se den tilhørende artikkelen om avanserte rapporter for den visningen. Ved siden av stabler diagrammet Kostnad og bruttofortjeneste hver periodes kostpris og bruttofortjeneste i én søyle. En enkelt dag vises per time, mens lengre perioder grupperes i dager, uker, måneder eller år, avhengig av lengden."
      },
      {
        "type": "p",
        "text": "Trykk og hold på trenddiagrammet, Kostnad og bruttofortjeneste eller Betalingsmåter for å vise et avlesningskort for ett punkt i diagrammet. Når Sammenlign er på, viser avlesningskortet på trenddiagrammet denne periodens tall og sammenligningsperiodens tall side om side. Dra til venstre eller høyre for å flytte deg fra punkt til punkt. Sveiper du opp eller ned på diagrammet, ruller siden som vanlig."
      },
      {
        "type": "p",
        "text": "Produktrangering viser de fem beste produktene i den valgte perioden. Trykk på kortet eller Vis alle for å se alle produkter som er solgt i perioden, rangert etter antall etter returer. Et produkt med varianter får én linje per variant."
      },
      {
        "type": "note",
        "text": "Kalenderperiodene kom i v2.4. Eldre versjoner hadde løpende perioder (I dag / 7 dager / 30 dager / Hele perioden). Hvis du fortsatt ser dem, oppdaterer du DingPOS fra App Store."
      }
    ],
    "related": [
      "advanced-reports",
      "revenue-vs-cash",
      "profit-not-tracked",
      "tax-report"
    ]
  },
  {
    "slug": "advanced-reports",
    "category": "reports",
    "since": "3.0",
    "question": "Hva viser de avanserte rapportene?",
    "keywords": [
      "avanserte rapporter",
      "rapporter",
      "sammenlign",
      "periodesammenligning",
      "ukedag × time",
      "varmekart",
      "saktegående varer",
      "endringer",
      "andel per kategori",
      "lagerverdi",
      "gjenkjøpsandel",
      "poeng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avanserte rapporter er ikke en egen skjerm. De ligger i Rapporter og følger perioden du velger øverst. De gir deg periodesammenligninger, et varmekart over ukedag og time, Saktegående varer, Endringer, gjenkjøpsandel for medlemmer, Andel per kategori og en seksjon, Akkurat nå, for lager og poeng. Alle planer har alle disse, og de forblir åpne etter at prøveperioden er over."
      },
      {
        "type": "h2",
        "text": "Sammenlign"
      },
      {
        "type": "p",
        "text": "Sammenlign ligger til høyre i periodelinjen i Rapporter og måler den valgte perioden mot en tidligere periode."
      },
      {
        "type": "steps",
        "items": [
          "Åpne Rapporter fra sidemenyen.",
          "Velg en periode øverst.",
          "Trykk på Sammenlign til høyre i periodelinjen.",
          "Velg et sammenligningsalternativ fra menyen."
        ]
      },
      {
        "type": "p",
        "text": "Hvilke valg du har, avhenger av perioden du velger:"
      },
      {
        "type": "list",
        "items": [
          "Ingen slår av sammenligningen.",
          "Forrige uke sammenligner én enkelt dag med samme dag forrige uke, eller denne uken med forrige uke.",
          "Forrige måned sammenligner denne måneden med forrige måned.",
          "I fjor sammenligner dette året med i fjor, eller den valgte perioden med samme periode i fjor.",
          "Forrige sammenligner en egendefinert periode med like mange dager rett før den."
        ]
      },
      {
        "type": "p",
        "text": "Når en sammenligning er aktiv, legger Rapporter endringen og sammenligningsperiodens tall til alle felt unntatt Avgift, Nettoresultat og Produkter uten kostpris. Salgsinntekt, Mottatt betaling, Bruttofortjeneste, Ordrer, Gjennomsnittlig ordreverdi, Rabatter totalt og Betjente kunder viser hvert sin sammenligningslinje, for eksempel «▼ 3 % mot Forrige måned»."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Rapporter med Denne uken og Sammenlign satt til Forrige uke, med sammenligningslinjen og første rad med felt, der hvert felt viser endringen og sammenligningstallet under seg",
        "caption": "Trykk på en sammenligningslinje under et felt for å åpne Periodesammenligning og se tallene for begge periodene."
      },
      {
        "type": "p",
        "text": "Endringen i Rabatter totalt er alltid grå, siden mer rabatt verken er bra eller dårlig i seg selv. Trykk på en sammenligningslinje for å åpne Periodesammenligning, som viser tallene for begge periodene. Trenddiagrammet får en lysere linje for sammenligningsperioden. Mens en periode ennå pågår, kuttes sammenligningsperioden på samme tidspunkt."
      },
      {
        "type": "h2",
        "text": "Ukedag × time"
      },
      {
        "type": "p",
        "text": "Bytt overskriften på trenddiagrammet fra Utvikling til Ukedag × time for å se et varmekart med syv dager og 24 timer. Jo mørkere rute, desto mer solgte du i den timen. Du kan bytte varmekartet mellom salgsinntekt og ordrer. Når en sammenligning er slått på under Sammenlign, viser varmekartet også hvilke timer som vokste og hvilke som krympet."
      },
      {
        "type": "h2",
        "text": "Saktegående varer"
      },
      {
        "type": "p",
        "text": "Bytt overskriften på rangeringskortet til Saktegående varer for å se produktene fra færrest til flest salg. Hver rad viser produktets nåværende lagerbeholdning og siste salgsdato. Produkter som aldri er solgt, er merket Aldri solgt, og et produkt med varianter får én linje per variant. Som standard vises bare produkter som er på lager."
      },
      {
        "type": "h2",
        "text": "Endringer"
      },
      {
        "type": "p",
        "text": "Bytt overskriften på rangeringskortet til Endringer for å se de 3 produktene der salgsinntekten økte mest og de 3 der den falt mest sammenlignet med sammenligningsperioden. Hver rad viser salgsinntekten for begge periodene og differansen, og hver variant sammenlignes med seg selv."
      },
      {
        "type": "p",
        "text": "Velg først en periode under Sammenlign. Når Sammenlign er satt til Ingen, eller perioden er Hele perioden, ber kortet deg om å velge en sammenligningsperiode. Trykk på kortet eller Vis alle for å åpne hele listen Produktendringer, delt i Økning og Nedgang."
      },
      {
        "type": "h2",
        "text": "Gjenkjøpsandel"
      },
      {
        "type": "p",
        "text": "Den siste linjen i feltet Betjente kunder viser gjenkjøpsandelen som «Gjenkjøpsandel … · … medlemmer kom tilbake». Den viser andelen medlemmer som handlet i den valgte perioden og har handlet to eller flere ganger totalt. Når en sammenligning er slått på under Sammenlign, gir en linje under endringen i prosentpoeng og sammenligningsperiodens andel."
      },
      {
        "type": "h2",
        "text": "Andel per kategori"
      },
      {
        "type": "p",
        "text": "Andel per kategori viser hver kategoris salgsinntekt og andel, med størst først, etter produktenes nåværende kategori. Produkter uten kategori havner under Uten kategori, og radene summerer seg nøyaktig til salgsinntekten."
      },
      {
        "type": "h2",
        "text": "Akkurat nå"
      },
      {
        "type": "p",
        "text": "Akkurat nå viser tre opplysninger om lager og poeng:"
      },
      {
        "type": "list",
        "items": [
          "Lagerverdi, beregnet som nåværende beholdning × nåværende kostpris.",
          "Alle lagerbevegelser i den valgte perioden.",
          "Poengene kundene har, men ikke har brukt, sammen med det høyeste beløpet de kan få trukket fra."
        ]
      },
      {
        "type": "p",
        "text": "Lagerverdi og ubrukte poeng er nåværende saldoer, så de endres ikke når du bytter periode øverst."
      },
      {
        "type": "h2",
        "text": "Planer og tillatelser"
      },
      {
        "type": "p",
        "text": "Fra og med v3.4 er alle avanserte rapporter åpne på alle planer, også Lite, og de forblir åpne etter at prøveperioden er over. Endringer ble også lagt til i v3.4. Tidligere versjoner viste avanserte rapporter bare på Pro, med en liten lås på de andre planene. Hvis du fortsatt ser låsene, oppdaterer du DingPOS fra App Store."
      },
      {
        "type": "p",
        "text": "Lite sporer ikke lager eller lojalitetspoeng, men Akkurat nå viser likevel Lagerverdi og de ubrukte poengene butikken din allerede har (for eksempel fra prøveperioden), eller null."
      },
      {
        "type": "note",
        "text": "Ansatte ser avanserte rapporter under tillatelsen Rapporter. Beløpene for Lagerverdi krever i tillegg tillatelsen Kostpris og fortjeneste."
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
    "question": "Hvordan rapporteres bruttofortjenesten hvis jeg ikke har lagt inn kostpris?",
    "keywords": [
      "kostpris",
      "fortjeneste",
      "bruttofortjeneste",
      "margin",
      "bruttomargin",
      "rapporter",
      "mangler kostpris",
      "ikke registrert",
      "produkter uten kostpris",
      "fra salgsinntekt til bruttofortjeneste"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostpris er et valgfritt felt, så produkter uten kostpris utelates fra bruttofortjenesten, mens salgsinntekten deres fortsatt telles fullt ut. Feltet Produkter uten kostpris i Rapporter viser hvor mange produkter som er solgt eller returnert i perioden uten kostpris, for eksempel «12 produkter». En kostpris på 0 regnes som en kostpris og står ikke i listen. Når alle produkter har kostpris, står det «0 produkter · kostpriser komplette»."
      },
      {
        "type": "h2",
        "text": "Finne produkter uten kostpris"
      },
      {
        "type": "p",
        "text": "I Rapporter trykker du på feltet Produkter uten kostpris eller Vis produkter for å åpne Produkter uten kostpris. Arket viser produktene sortert fra høyest til lavest etter salgsinntekten som er utelatt fra bruttofortjenesten."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Arket Produkter uten kostpris med produkter sortert etter salgsinntekten som er utelatt fra bruttofortjenesten"
      },
      {
        "type": "steps",
        "items": [
          "Trykk på en rad i Produkter uten kostpris for å åpne produktet.",
          "Trykk på Rediger og skriv inn kostprisen i Kostpris (valgfritt).",
          "Gå tilbake til Produkter uten kostpris for å se raden merket Kostpris lagt til."
        ]
      },
      {
        "type": "p",
        "text": "Et produkt med varianter merkes Kostpris lagt til først når hver variant som er solgt uten kostpris har fått en, enten sin egen eller produktets kostpris som den følger. Fra og med v3.6 kan en innkjøpsordre også fordele frakten på kostprisen den skriver, når Inkluder frakt i kostpris er slått på."
      },
      {
        "type": "note",
        "text": "En kostpris du legger til, påvirker bare senere salg. Salg som allerede er gjort, beregnes ikke på nytt."
      },
      {
        "type": "h2",
        "text": "Kostpris og avgift"
      },
      {
        "type": "p",
        "text": "I produktskjemaet heter kostprisfeltet Kostpris (valgfritt) i alle butikker. I en butikk med avgifter vises et ⓘ ved siden av Kostpris (valgfritt) som viser hvordan avgift gjelder, avhengig av Krev fradrag for inngående avgift:"
      },
      {
        "type": "list",
        "items": [
          "Krev fradrag for inngående avgift er på: skriv inn kostprisen før avgift du kan få tilbake. ⓘ-notatet lyder: «Oppgi kostprisen uten avgiften du kan kreve fradrag for. Den registrerer du som inngående avgift. Avgift du ikke kan kreve fradrag for, er en del av kostprisen.»",
          "Krev fradrag for inngående avgift er av: skriv inn det du betalte, minus avgift du kan få tilbake. ⓘ-notatet lyder: «Avgift du kan kreve fradrag for, er ikke en del av kostprisen. Avgift du ikke kan kreve fradrag for, er det. Krever du fradrag for inngående avgift, slår du på ‘Krev fradrag for inngående avgift’ i Butikkinfo.»"
        ]
      },
      {
        "type": "p",
        "text": "Hvis butikken din innrapporterer inngående avgift, slår du på Krev fradrag for inngående avgift i Butikkinfo."
      },
      {
        "type": "h2",
        "text": "Slik leser du bruttofortjenesten"
      },
      {
        "type": "p",
        "text": "Bruttofortjeneste er salgsinntekt etter alle rabatter (rabatt på varelinjer og handlekurv, kampanjer og innløsning av poeng) og før avgift, minus kostpris. Marginen er bruttofortjeneste ÷ salgsinntekten til produkter med kostpris, så produkter uten kostpris trekker ikke marginen ned. En retur tar tilbake, på returdagen, bruttofortjenesten disse varene hadde gitt."
      },
      {
        "type": "p",
        "text": "Trykk på feltet Bruttofortjeneste i Rapporter for å åpne Fra salgsinntekt til bruttofortjeneste, som trekker fra rad for rad:"
      },
      {
        "type": "list",
        "items": [
          "Salgsinntekt (inkl. mva.)",
          "Avgift",
          "Salgsinntekt (eks. mva.)",
          "Salgsinntekt uten kostpris",
          "Kostpris",
          "Bruttofortjeneste og margin"
        ]
      },
      {
        "type": "p",
        "text": "Radene summerer seg nøyaktig til feltet Bruttofortjeneste. Butikker i Australia, Storbritannia, New Zealand og Singapore ser det lokale avgiftsnavnet på avgiftsradene, for eksempel Salgsinntekt (inkl. GST)."
      },
      {
        "type": "note",
        "text": "Denne beregningen av bruttofortjeneste kom i v3.1. Tidligere versjoner trakk bare fra manuelle rabatter på varelinjer og regnet inkludert avgift som fortjeneste, så etter oppdateringen viser perioder med rabatter eller inkludert avgift lavere bruttofortjeneste. Det er en korrigering, ikke tapte data."
      }
    ],
    "related": [
      "report-periods",
      "product-variants",
      "purchase-orders",
      "input-tax"
    ]
  },
  {
    "slug": "profit-loss",
    "category": "reports",
    "since": "3.4",
    "question": "Hvordan ser jeg hvor mye jeg faktisk tjente hver måned?",
    "keywords": [
      "resultatregnskap",
      "resultat",
      "P&L",
      "nettoresultat",
      "bruttofortjeneste",
      "månedlig fortjeneste",
      "faste utgifter",
      "utgifter",
      "driftsresultat"
    ],
    "content": [
      {
        "type": "p",
        "text": "Åpne Resultat, rett under Rapporter i sidemenyen, for å se nettoresultatet for hver måned og hvordan det regnes ut. Listen går fra nyeste til eldste måned, fra den første måneden med aktivitet. Inneværende måned er merket Pågår, og overskriften for hvert år summerer nettoresultatet for månedene som er ferdige. Den første raden, Alle utgifter, åpner alle utgifter uansett måned."
      },
      {
        "type": "h2",
        "text": "Månedlig oppstilling"
      },
      {
        "type": "steps",
        "items": [
          "Åpne Resultat, rett under Rapporter i sidemenyen.",
          "Trykk på en måned for å se hvordan nettoresultatet regnes ut."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Månedssiden i Resultat med merknaden Pågår, nettoresultatet og hele oppstillingen fra salgsinntekt til utgifter"
      },
      {
        "type": "p",
        "text": "Månedssiden viser alle linjer fra salg ned til nettoresultat i rekkefølge. Radene fra salgsinntekt til bruttofortjeneste har samme navn og tall som Fra salgsinntekt til bruttofortjeneste i Rapporter."
      },
      {
        "type": "list",
        "items": [
          "Salgsinntekt (inkl. mva.), Avgift og Salgsinntekt (eks. mva.): salgsinntekt med avgift, avgiftsbeløpet og salgsinntekt etter alle rabatter og før avgift, regnet på dagen varene ble overlevert. Butikker i Australia, Storbritannia, New Zealand og Singapore ser det lokale avgiftsnavnet.",
          "Salgsinntekt uten kostpris: trekkes fra før kostpris, og vises bare når den ikke er null.",
          "Kostpris: kostnaden for det som ble solgt, ut fra kostprisene på produktene dine.",
          "Bruttofortjeneste: vises sammen med marginen.",
          "Salgsinntekt uten kostpris: legges til igjen etter bruttofortjenesten når den ikke er null.",
          "Lagertap: vises bare når måneden har et; kostnaden for det Juster lager fjernet som utløpt, ødelagt, gitt bort og lignende, pluss kasserte returer. Det kommer etter bruttofortjenesten. Se «Hvordan registrerer jeg varer som har gått ut på dato, blitt ødelagt eller gitt bort som prøver?» Måneden har også en seksjon Lagertap som summerer det per årsak.",
          "Transaksjonsgebyrer (est.): gebyrene anslått ut fra satsene på betalingsmåtene dine.",
          "Tapte depositum: vises bare når de ikke er null; depositum du beholdt da en forhåndsbestilling ble kansellert.",
          "Kontantavrunding: vises bare når den ikke er null; det avrundingen av kontanter til myntene som er i bruk tok inn over eller under ordretotalene.",
          "Faste utgifter og Engangsutgifter: det du har registrert for den måneden – se «Hvordan registrerer jeg husleie, lønn og andre utgifter?»",
          "Nettoresultat: regnes ut som salgsinntekt (eks. mva.) − kostpris − lagertap − transaksjonsgebyrer + tapte depositum + kontantavrunding − faste utgifter − engangsutgifter."
        ]
      },
      {
        "type": "h2",
        "text": "Måneder som pågår"
      },
      {
        "type": "p",
        "text": "Mens en måned pågår, trekker Resultat allerede fra hele månedens faste utgifter. For eksempel, den 5. oktober, hvis salgsinntekten (eks. mva.) så langt er 20 000, kostprisen er 10 000 og de faste utgiftene er 65 700, er nettoresultatet −55 700, merket Pågår · hele månedens utgifter trekkes fra."
      },
      {
        "type": "p",
        "text": "Siden hele månedens utgifter allerede er regnet med, vises nettoresultatet for denne måneden aldri i rødt på månedslisten, på månedssiden eller i feltet Nettoresultat i Rapporter. En ferdig måned som ender med tap, viser nettoresultatet i varselfargen."
      },
      {
        "type": "h2",
        "text": "Diagrammer"
      },
      {
        "type": "p",
        "text": "Opptil tre diagrammer følger etter oppstillingen: nettoresultatet måned for måned, hver fast utgifts andel og utviklingen i de faste utgiftene. De to trenddiagrammene dekker høyst de 12 månedene fram til måneden du har åpnet, og vises først når det finnes minst to måneder å sammenligne, regnet fra måneden for det første salget eller den første utgiften din. Andelsdiagrammet krever en fast utgift den måneden. Til du har lagt til en, viser denne delen Legg til fast utgift i stedet."
      },
      {
        "type": "h2",
        "text": "Bytte mellom Rapporter og Resultat"
      },
      {
        "type": "p",
        "text": "Rapporter og Resultat lenker til hverandre. Når perioden i Rapporter er denne måneden eller nøyaktig én hel måned, får andre rad med felt et felt for Nettoresultat, merket Pågår · hele månedens utgifter trekkes fra mens måneden pågår. Trykk på det feltet for å se månedens oppstilling fra bruttofortjeneste til nettoresultat. For alle andre perioder trykker du på Se månedlig resultat på siste linje i Fra salgsinntekt til bruttofortjeneste."
      },
      {
        "type": "p",
        "text": "Den andre veien åpner Se rapporten for oktober, under månedens tittel i Resultat, Rapporter på den måneden (egendefinert periode 1.–31. oktober). For måneden som pågår, åpner den Denne måneden."
      },
      {
        "type": "note",
        "text": "Nettoresultat er driftsresultat før inntektsskatt, regnet ut fra det DingPOS har registrert – ikke en skattemelding. Hvis produkter ble solgt uten kostpris, viser måneden likevel et nettoresultat, merket «Utelater kostprisen for N produkter», og du kan trykke på det for å se hvilke det gjelder."
      },
      {
        "type": "note",
        "text": "Resultat finnes på alle planer. Med ansattkontoer krever det tillatelsen Resultat og utgifter, som ledere og ansatte trenger godkjenning for som standard, fordi det viser kostpriser og lønn."
      }
    ],
    "related": [
      "record-expenses",
      "profit-not-tracked",
      "staff-permissions"
    ]
  },
  {
    "slug": "record-expenses",
    "category": "reports",
    "since": "3.4",
    "question": "Hvordan registrerer jeg husleie, lønn og andre utgifter?",
    "keywords": [
      "utgifter",
      "husleie",
      "lønn",
      "strøm og vann",
      "faste utgifter",
      "engangsutgifter",
      "alle utgifter",
      "fordele utgift",
      "driftskostnader",
      "resultat"
    ],
    "content": [
      {
        "type": "p",
        "text": "I Resultat trykker du på Legg til utgift og velger Legg til fast utgift eller Legg til engangsutgift for å registrere husleie, lønn, strøm og vann og andre driftskostnader. Hver utgift regnes i måneden den hører til, ikke måneden du betalte den, og nettoresultatet for hver måned oppdateres tilsvarende. Faste utgifter gjentas hver måned med valgfrie beløpsendringer, mens engangsutgifter regnes i én måned eller fordeles over flere."
      },
      {
        "type": "h2",
        "text": "Faste utgifter"
      },
      {
        "type": "p",
        "text": "En fast utgift er en gjentakende kostnad du betaler hver måned, som husleie, strøm og vann eller lønn."
      },
      {
        "type": "steps",
        "items": [
          "Åpne Resultat.",
          "Trykk på Legg til utgift.",
          "Velg Legg til fast utgift.",
          "Skriv inn navnet, det månedlige beløpet og måneden utgiften starter. Velg en tidligere måned for å legge inn bakover i tid.",
          "Trykk på ✓ for å lagre."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Skjemaet for en fast utgift med navn, månedlig beløp, startmåned og beløpsendringer"
      },
      {
        "type": "p",
        "text": "Når beløpet endres, åpner du utgiften og trykker på Endre beløp. Velg måneden endringen starter, og velg deretter Fra denne måneden for en varig endring som en husleieøkning, eller Bare denne måneden for en forskjell i én måned, som månedens strømregning. Hver endring står i en liste i skjemaet, og du kan åpne en for å redigere eller fjerne den."
      },
      {
        "type": "p",
        "text": "Når du slutter å betale en fast utgift, setter du Siste måned som regnes. Den måneden og månedene før den regnes fortsatt i Resultat, mens senere måneder ikke lenger tar den med."
      },
      {
        "type": "h2",
        "text": "Planlagte endringer i Alle utgifter"
      },
      {
        "type": "p",
        "text": "I Alle utgifter viser hver rad med en fast utgift det som er planlagt framover. Raden kombinerer startmåneden med neste planlagte beløpsendring og siste måned som regnes. For eksempel kan en rad lyde Siden januar 2026 · $420/mnd. fra desember 2026 · Regnes til og med mars 2027."
      },
      {
        "type": "p",
        "text": "Beløpet til høyre er fortsatt dagens månedlige beløp, ikke den kommende satsen. En endring satt til Bare denne måneden vises ikke på raden."
      },
      {
        "type": "h2",
        "text": "Engangsutgifter"
      },
      {
        "type": "p",
        "text": "En engangsutgift er en kostnad du betaler én gang, som innredning, utstyr, forhåndsbetalt forsikring eller en enkelt regning."
      },
      {
        "type": "steps",
        "items": [
          "Åpne Resultat.",
          "Trykk på Legg til utgift.",
          "Velg Legg til engangsutgift.",
          "Skriv inn beløp og dato.",
          "Sett Måned som regnes for én måned, eller slå på Fordel over flere måneder.",
          "Trykk på ✓ for å lagre."
        ]
      },
      {
        "type": "p",
        "text": "Uten fordeling kan du likevel velge Måned som regnes, slik at kostnaden regnes i måneden den hører til. For eksempel kan en regning for oktober som kommer i november, regnes i oktober, og den virkelige datoen beholdes."
      },
      {
        "type": "p",
        "text": "For innredning, utstyr eller forhåndsbetalt forsikring slår du på Fordel over flere måneder, velger 2 til 120 måneder og velger Første måned som regnes. Skjemaet viser en forhåndsvisning av hvor mye som regnes hver måned, og hvilke måneder det dekker."
      },
      {
        "type": "p",
        "text": "Hvis en fordeling avsluttes tidlig, for eksempel når en forsikring sies opp, åpner du utgiften og bruker Avslutt fordeling tidlig. Det som er igjen, regnes i måneden du velger."
      },
      {
        "type": "h2",
        "text": "Inngående avgift på utgifter"
      },
      {
        "type": "p",
        "text": "Når Krev fradrag for inngående avgift er slått på, kan du registrere et fakturanummer og avgiften du kan kreve fradrag for på en engangsutgift, og du kan registrere hver faktura for en fast utgift under Fakturaer med Registrer en faktura. Beløpet som regnes i Resultat, er fortsatt det butikken bærer, og den tilhørende artikkelen om inngående avgift forklarer hvordan fradragsberettiget avgift fungerer."
      },
      {
        "type": "note",
        "text": "Skriv inn det butikken bærer, uten avgift du kan få tilbake. Varer du skal selge og råvarene du lager dem av går via Innkjøp i stedet, fordi de regnes med i kostpris når de selges. Rekvisita med sporet lager registrerer du med Juster lager når du bruker dem, med årsaken Butikkrekvisita, ikke som en utgift. Depositum du betaler og får tilbake, lånets hovedstol og penger eieren tar ut er ikke utgifter. Endringer lagres samlet når du trykker på ✓, og en endring som berører en ferdig måned, forteller deg først hvilke måneders nettoresultat som endres."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "input-tax",
      "roadmap-monthly-settlement"
    ]
  },
  {
    "slug": "export-tax-report",
    "category": "reports",
    "since": "3.6",
    "question": "Hvordan eksporterer jeg avgiftsrapporten til regnskapsføreren min?",
    "keywords": [
      "eksporter avgiftsrapport",
      "avgiftsrapport",
      "eksporter",
      "Excel-arbeidsbok",
      "CSV",
      "PDF-rapport",
      "avgiftsoppsummering",
      "detaljer om inngående avgift",
      "regnskapsfører"
    ],
    "content": [
      {
        "type": "p",
        "text": "Åpne Avgiftsrapport, trykk på Eksporter øverst til høyre og velg CSV, Excel-arbeidsbok (XLSX) eller PDF-rapport. Filen åpnes i en forhåndsvisning i fullskjerm, der du kan trykke på delingsknappen for å lagre den eller sende den til regnskapsføreren din. Alle formater har de samme tallene som vises på skjermen."
      },
      {
        "type": "h2",
        "text": "Slik eksporterer du"
      },
      {
        "type": "steps",
        "items": [
          "Åpne Rapporter og velg perioden, for eksempel en egendefinert periode fra 1. november til 31. desember for en tomåneders innrapporteringsperiode, eller en kvartalsperiode.",
          "Trykk på feltet Avgift for å åpne Avgiftsrapport. Eksporten dekker nøyaktig den perioden.",
          "Trykk på Eksporter øverst til høyre i Avgiftsrapport. En meny viser formatene, og det du eksporterte sist på denne iPaden, er merket av.",
          "Velg et format, for eksempel Excel-arbeidsbok (XLSX), for å åpne en forhåndsvisning i fullskjerm. CSV-filer vises som en tabell, og i Excel-arbeidsboken kan du bytte mellom arkene, for eksempel for å se Summary først.",
          "Trykk på delingsknappen øverst til høyre i forhåndsvisningen for å lagre filen eller sende den til regnskapsføreren din. Når du lukker forhåndsvisningen, kommer du tilbake til Avgiftsrapport."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Avgiftsrapport med menyen Eksporter åpen og en liste over filformatene"
      },
      {
        "type": "p",
        "text": "Hvis en eksport mislykkes, viser appen Kunne ikke eksportere filen og Prøv å eksportere på nytt. Ingenting skrives. Eksporter på nytt."
      },
      {
        "type": "h2",
        "text": "Eksportformater"
      },
      {
        "type": "list",
        "items": [
          "Avgiftsoppsummering (CSV): én linje per rad i rapporten (hver avgift og sats, nullsats og uten avgift), med salg, returer og netto, før avgift og avgift.",
          "Alle dokumenter (CSV): én linje per dokument under hver avgift, med dato og klokkeslett, kvitteringsnummer, dokumenttype (salg, retur eller reverseringen av en annullering), kundenavn, beløp og betalingsmåter. En annullering legger til en reverseringslinje på annulleringsdatoen.",
          "Dagsoppsummering (CSV): oppsummeringen per dag, deretter en andre tabell med betalinger per dag og betalingsmåte.",
          "Detaljer om inngående avgift (CSV): vises bare når rapporten har et kort for inngående avgift. Én linje per linje for inngående avgift for hver innkjøpsordre og utgift, med leverandør, leverandørens avgiftsnummer og fakturanummer.",
          "Excel-arbeidsbok (XLSX): arkene Summary, Documents og Daily tilsvarer de tre CSV-filene for salg, pluss Purchases når rapporten viser inngående avgift. Beløp er tallceller, og hver kolonne tilpasses innholdet slik at ingenting åpnes avkuttet.",
          "PDF-rapport: en A4-rapport på appens språk med butikknavn, periode, avgiftsmodus, valuta og rapportens deler. Butikker i Australia, New Zealand, Singapore og Storbritannia får Felt i skjemaet først, og kort for inngående avgift følger når de vises. I forhåndsvisningen kan du signere eller tegne på med Markering for å dele den merkede filen. Eksporterer du samme periode på nytt, skrives en ren kopi."
        ]
      },
      {
        "type": "h2",
        "text": "Formatering for regnskapsprogrammer"
      },
      {
        "type": "p",
        "text": "CSV-filer er UTF-8 og kommaseparerte, med faste engelske kolonnenavn uansett appspråk, slik at regnskapsprogrammer kan lese dem. Beløp bruker valutaens desimaler og minustegn, uten symbol eller tusenskilletegn (for eksempel 80.97, -40.00, eller 1000 for en yen-butikk). Datoer ser ut som 2026-11-03."
      },
      {
        "type": "p",
        "text": "Tekstceller som begynner med =, +, - eller @ (for eksempel en kunde som heter =1+1) får en ledende ' slik at regneark viser tekst i stedet for å kjøre en formel. Beløp får aldri den."
      },
      {
        "type": "p",
        "text": "Filnavn inneholder perioden, for eksempel tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx og tax-report_2026-11-01_2026-11-30.pdf, slik at filer fra ulike perioder aldri overskriver hverandre."
      },
      {
        "type": "h2",
        "text": "Tillatelser og personvern"
      },
      {
        "type": "p",
        "text": "Alle planer kan eksportere, også Lite. Ansatte trenger tillatelsen Rapporter, på samme måte som for Avgiftsrapport."
      },
      {
        "type": "p",
        "text": "Filer med inngående avgift ber først om godkjenningene kortene deres krever: Kostpris og fortjeneste for innkjøpsordrer og Resultat og utgifter for utgifter. Dette gjelder Detaljer om inngående avgift (CSV), pluss Excel-arbeidsbok (XLSX) og PDF-rapport når kort for inngående avgift vises. Avbryter du, skrives ingenting. De tre CSV-filene for salg spør aldri."
      },
      {
        "type": "note",
        "text": "Alle dokumenter (CSV) inneholder kundenavn, og filer med inngående avgift inneholder leverandørnavn og avgiftsnumre. Del dem bare med personer som skal se dem."
      }
    ],
    "related": [
      "tax-report",
      "tax-return-boxes",
      "input-tax",
      "report-periods"
    ]
  },
  {
    "slug": "input-tax",
    "category": "reports",
    "since": "3.6",
    "question": "Hvordan registrerer jeg inngående avgift (mva. eller GST på innkjøp)?",
    "keywords": [
      "inngående avgift",
      "fradrag for inngående avgift",
      "fradrag for mva",
      "mva",
      "VAT",
      "GST",
      "innkjøpsordrer",
      "utgifter",
      "leverandørens avgiftsnummer",
      "avgiftsrapport"
    ],
    "content": [
      {
        "type": "p",
        "text": "Slå på Krev fradrag for inngående avgift i Innstillinger → Butikkinfo for å registrere fradragsberettiget avgift fra leverandørfakturaer på innkjøpsordrer og utgifter. Begge skjemaene får da en seksjon for inngående avgift, der du skriver av avgiften du kan kreve fradrag for fra hver faktura. Avgiftsrapporten viser den i to kort, Inngående avgift på innkjøpsordrer og Inngående avgift på utgifter."
      },
      {
        "type": "h2",
        "text": "Slå på Krev fradrag for inngående avgift"
      },
      {
        "type": "steps",
        "items": [
          "Åpne Innstillinger → Butikkinfo og finn kortet Mva.",
          "Under Ta avgift slår du på Krev fradrag for inngående avgift."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Kortet Mva. i Butikkinfo med Krev fradrag for inngående avgift slått på og hintet under"
      },
      {
        "type": "p",
        "text": "Krev fradrag for inngående avgift vises bare når butikken har minst én avgift, og er av for nye butikker og etter oppdatering. Når du bytter den, lagres det med en gang og loggføres under Avgiftsinnstillinger i Aktivitetslogg. Med den på oppgir du innkjøpspriser og produktkostnader uten avgiften du kan kreve fradrag for, mens avgift du ikke kan kreve fradrag for, blir værende i kostprisen."
      },
      {
        "type": "note",
        "text": "Alle planer har bryteren Krev fradrag for inngående avgift, mens Innkjøp krever Standard eller høyere. Når du slår den av, skjules feltene på nye poster. Eksisterende poster beholder sin inngående avgift og sitt skyldige beløp, og tidligere avgiftsrapporter forblir uendret."
      },
      {
        "type": "h2",
        "text": "Innkjøpsordrer"
      },
      {
        "type": "steps",
        "items": [
          "Åpne Innkjøp og trykk på Nytt innkjøp.",
          "Skriv inn enhetspriser uten avgiften du kan kreve fradrag for, og bla forbi ekstrakostnader til Inngående avgift.",
          "Sjekk Fakturadato, som er ordredatoen som standard, og legg eventuelt til Fakturanummer og Leverandørens avgiftsnummer.",
          "Velg en avgift fra butikken under Sats, eller velg Annen sats… for å skrive inn opptil 3 desimaler, for eksempel 9,975 %.",
          "Sjekk Før avgift, som starter på ordretotalen før avgift, og skriv av Fradragsberettiget avgift fra fakturaen.",
          "Trykk på Legg til en sats for flere satser."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Innkjøpsordre med seksjonen Inngående avgift, med fakturafelt, én satslinje og totaler"
      },
      {
        "type": "p",
        "text": "Fradragsberettiget avgift starter tom. DingPOS beregner den aldri ut fra satsen og godtar avrunding fra fakturaen. For eksempel gir mel 10 × $300 pluss $100 i frakt på faktura AB-12345678 datert 30. juni 2026, med én 5 %-linje med Før avgift $3,100 og Fradragsberettiget avgift $155, Totalt før avgift $3,100, Inngående avgift $155 og Skyldig beløp $3,255, som vises i listen, ordredetaljene og Å betale. Et Leverandørens avgiftsnummer som er lagt inn på en leverandør, fylles ut på nye ordrer, mens lagrede ordrer beholder sitt eget."
      },
      {
        "type": "p",
        "text": "Hvis en faktura kommer sent, åpner du den mottatte ordren og trykker på Registrer inngående avgift på kortet Inngående avgift, eller på Rediger for å endre den. Bare Skyldig beløp endres, mens lager, produktkostnad og status som betalt eller ubetalt forblir uendret. Annullerte ordrer beholder Inngående avgift som skrivebeskyttet, og ordrer som ble lagret før oppdateringen, fylles ikke ut i ettertid."
      },
      {
        "type": "h2",
        "text": "Utgifter"
      },
      {
        "type": "p",
        "text": "I Resultat → Engangsutgifter får skjemaet Fakturanummer og linjer for inngående avgift under beløpet. La beløpet stå før fradragsberettiget avgift, og skriv bare av den fradragsberettigede avgiften. På en kontorrekvisita-faktura på $1,100 med $100 fradragsberettiget skriver du inn $1,000 og en 10 %-linje med $1,000 og $100. Med avgift viser $1,100, og Resultat regner $1,000. Den inngående avgiften regnes samlet på utgiftsdatoen og følger aldri Måned som regnes eller en fordeling."
      },
      {
        "type": "p",
        "text": "I Resultat → Faste utgifter åpner du en lagret utgift som husleie eller strøm og vann og trykker på Registrer en faktura under Fakturaer etter hvert som fakturaene kommer, med fakturadato, valgfritt fakturanummer og minst én satslinje. Hvis husleien er $30,000 i måneden og fakturaene for juli og august hver har en 5 %-linje med $30,000 og $1,500, inneholder rapporten for juli–september $3,000 i inngående avgift, mens Resultat fortsatt regner $30,000 hver måned."
      },
      {
        "type": "p",
        "text": "Når du lagrer en endring i inngående avgift i en tidligere måned, spør appen Vil du lagre endringen? og advarer om at månedens avgiftsrapport endres hvis du allerede har levert den. Endringer i inneværende måned og utkast lagres uten spørsmål."
      },
      {
        "type": "note",
        "text": "DingPOS beregner ikke import-VAT, reverse charge eller delvis fradrag. Skriv av den fradragsberettigede avgiften fra fakturaen, og legg avgift du ikke kan kreve fradrag for i beløpet før avgift."
      },
      {
        "type": "h2",
        "text": "Avgiftsrapport"
      },
      {
        "type": "p",
        "text": "To kort står etter salgskortene: Inngående avgift på innkjøpsordrer og Inngående avgift på utgifter. Hvert kort har én rad per sats, en rad Ingen inngående avgift og totaler for Før avgift, Fradragsberettiget avgift og Med avgift. Totalene inkluderer innkjøp uten inngående avgift, men enkelte avgiftsoppgaver teller bare rader med inngående avgift."
      },
      {
        "type": "list",
        "items": [
          "Innkjøpsordrer regnes på Fakturadato, eller ordredatoen hvis den er tom.",
          "Annullerte innkjøpsordrer regnes som et negativt beløp på annulleringsdatoen.",
          "Engangsutgifter regnes samlet på utgiftsdatoen.",
          "Fakturaer for faste utgifter regnes på fakturadatoen."
        ]
      },
      {
        "type": "p",
        "text": "Inngående avgift på innkjøpsordrer krever Kostpris og fortjeneste, og Inngående avgift på utgifter krever Resultat og utgifter. Ansatte uten en av tillatelsene ser Be en leder om godkjenning under korttittelen. Feltet Avgift viser fortsatt bare avgift tatt inn på salg, aldri minus inngående avgift, fordi Japans forenklede metode og UK Flat Rate Scheme fungerer annerledes. Butikker i Australia, New Zealand, Singapore og Storbritannia ser også disse beløpene i Felt i skjemaet."
      }
    ],
    "related": [
      "tax-report",
      "tax-return-boxes",
      "purchase-orders",
      "record-expenses"
    ]
  },
  {
    "slug": "tax-report",
    "category": "reports",
    "since": "3.6",
    "question": "Hvor finner jeg avgiftsrapporten, og hvordan leser jeg den?",
    "keywords": [
      "avgiftsrapport",
      "mva",
      "VAT",
      "GST",
      "salgsavgift",
      "rapporter",
      "avgift",
      "salg og avgift per sats",
      "etter betalingsmåte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Åpne Rapporter og trykk på feltet Avgift for å se Avgiftsrapport, som viser salg og avgift per sats for perioden Rapporter viser. Kopier tallene inn i en avgiftsoppgave (VAT, GST eller salgsavgift), eller send dem til en regnskapsfører. Senere avgiftsendringer endrer aldri tallene som er lagret på dokumentene."
      },
      {
        "type": "h2",
        "text": "Åpne avgiftsrapporten"
      },
      {
        "type": "steps",
        "items": [
          "Åpne Rapporter og velg perioden, for eksempel Denne måneden eller en egendefinert periode.",
          "Finn feltet Avgift i andre rad, etter Rabatter totalt.",
          "Trykk på feltet Avgift eller Avgiftsrapport ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Rapporter med Denne måneden valgt, med feltet Avgift og nederste linje Avgiftsrapport ›"
      },
      {
        "type": "p",
        "text": "Dette feltet er den eneste veien inn. Undertittelen nevner avgiftene som er tatt inn i perioden, med størst beløp først: to med navn, tre eller flere som for eksempel 3 avgifter, inkl. PST 7 %. Overskriften viser perioden fra Rapporter (Denne måneden · 1.–30. nov.), uten periodevelger og uten snarvei til forrige måned, siden innrapporteringsperioder varierer (Taiwan to måneder, Australia et kvartal, Japan ett år)."
      },
      {
        "type": "p",
        "text": "Butikker uten avgift og uten salg med avgift i perioden ser ikke feltet Avgift, og perioder uten dokumenter viser tomtilstanden i Rapporter. Slettede avgifter beholder feltet for perioder som har salg med dem."
      },
      {
        "type": "note",
        "text": "Alle planer, også Lite og prøveperioden, har feltet, rapporten og alle eksporter. Ansatte trenger tillatelsen Rapporter. Roller som trenger godkjenning, ser plassholderen for godkjenning til en leder godkjenner."
      },
      {
        "type": "h2",
        "text": "Slik leser du rapporten"
      },
      {
        "type": "p",
        "text": "Butikker i Australia, New Zealand, Singapore og Storbritannia ser Felt i skjemaet først."
      },
      {
        "type": "p",
        "text": "Salg og avgift per sats har én rad per sats: høyest først, deretter nullsats 0 %, og Uten avgift (produkter uten avgift) sist. Kolonnene er Salg, Returer og annulleringer og Netto, hver med Før avgift og Avgift. Rader med nullsats og Uten avgift har ingen avgiftslinje. Hver avgift i butikken får en rad, selv uten salg. Et nytt navn beholder én rad, mens en endret sats legger til en ny."
      },
      {
        "type": "p",
        "text": "Totalt viser Salg før avgift, Avgift og Salg inkl. avgift. Med to eller flere avgifter står det en merknad om at ett salg kan ha flere avgifter, så salgstallene per rad ikke kan legges sammen. Salg før avgift teller hvert salg én gang. For et britisk kvartal kan VAT 20 % vise Før avgift £1,000 og Avgift £200, Nullsats 0 % £300 og Uten avgift £50: Totalt gir Salg før avgift £1,350, Avgift £200 og Salg inkl. avgift £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Avgiftsrapport med radene i Salg og avgift per sats og Totalt under"
      },
      {
        "type": "list",
        "items": [
          "Etter betalingsmåte viser betalinger på disse dokumentene ved periodens slutt, ubetalte beløp som Kundefordringer, og kontantavrunding på en linje Inkl. kontantavrunding … inne i kontantraden.",
          "Ikke regnet som salg vises bare for tapt depositum og viser Tapt depositum med en undertittel om å sjekke innrapporteringen med en regnskapsfører. Det legges ikke til salg eller avgift.",
          "Butikker som har Krev fradrag for inngående avgift på, eller har registrert inngående avgift i perioden, ser også Inngående avgift på innkjøpsordrer og Inngående avgift på utgifter."
        ]
      },
      {
        "type": "h2",
        "text": "Hvilken dag hvert dokument regnes på"
      },
      {
        "type": "p",
        "text": "Trykk på ⓘ ved siden av Salg og avgift per sats:"
      },
      {
        "type": "list",
        "items": [
          "En annullering regnes i perioden den ble annullert, som et negativt beløp, slik at en periode som allerede er innrapportert, aldri endres. Rapporter trekker den i stedet fra salgsperioden.",
          "En retur regnes på sin egen dato. Ved et bytte regnes de nye varene som salg og de returnerte varene som returer.",
          "En forhåndsbestilling regnes på hentedagen, et salg på konto på salgsdagen."
        ]
      },
      {
        "type": "p",
        "text": "Et salg fra 30. oktober som annulleres 2. november, blir stående i Salg for oktober og vises som et negativt beløp i Returer og annulleringer for november. Å gjøre opp et salg på konto senere flytter det ikke."
      },
      {
        "type": "h2",
        "text": "Avgift tatt inn og totaler i Rapporter"
      },
      {
        "type": "p",
        "text": "Feltet Avgift er lik Avgift under Totalt i Avgiftsrapport. Det avviker fra raden Avgift i Fra salgsinntekt til bruttofortjeneste i Rapporter bare ved annulleringer på tvers av perioder, fordi Rapporter tar et annullert salg ut av den opprinnelige perioden."
      },
      {
        "type": "note",
        "text": "Avgiftsrapport viser avgift tatt inn på salg, aldri avgift å betale (utgående minus inngående avgift), fordi ikke alle land beregner det slik, som Japans forenklede metode eller UK Flat Rate Scheme."
      }
    ],
    "related": [
      "tax-return-boxes",
      "input-tax",
      "export-tax-report",
      "report-periods"
    ]
  },
  {
    "slug": "tax-return-boxes",
    "category": "reports",
    "since": "3.6",
    "question": "Hvilke tall skal i feltene i BAS-, GST- eller VAT-skjemaet mitt?",
    "keywords": [
      "felt i skjemaet",
      "avgiftsrapport",
      "rapporter",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "fradrag for inngående avgift"
    ],
    "content": [
      {
        "type": "p",
        "text": "For butikker i Australia, New Zealand, Singapore eller Storbritannia åpner Avgiftsrapport med Felt i skjemaet, som viser hvert felt og beløpet fra samme rapport. Den dekker Australia BAS · Simpler BAS, New Zealand GST101A, Singapore GST F5 og Storbritannia VAT Return på alle planer."
      },
      {
        "type": "h2",
        "text": "Åpne Felt i skjemaet"
      },
      {
        "type": "steps",
        "items": [
          "Åpne Rapporter.",
          "Trykk på feltet Avgift for å åpne Avgiftsrapport."
        ]
      },
      {
        "type": "p",
        "text": "Felt i skjemaet er det første kortet, over Salg og avgift per sats, og undertittelen nevner oppgaven. Alle beløp kommer fra samme rapport, med cent, og ingenting beregnes på nytt. PDF-rapporten som eksporteres, åpner med det samme kortet. Butikker som ble satt opp før appen registrerte land, regnes etter valuta (AUD, NZD, SGD eller GBP). Andre butikker har ikke kortet Felt i skjemaet."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Kortet Felt i skjemaet øverst i Avgiftsrapport med felt 1, 4, 6 og 7 i den britiske VAT Return"
      },
      {
        "type": "h2",
        "text": "Australia BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Salg med GST, inkludert GST-frie salg og salg uten avgift; svar Ja på «Does the amount shown at G1 include GST?»",
          "1A GST on sales: Avgift på salg",
          "1B GST on purchases: Fradragsberettiget avgift på innkjøpsordrer og utgifter"
        ]
      },
      {
        "type": "p",
        "text": "ATO krever hele dollar: utelat centene på BAS, og rund aldri opp."
      },
      {
        "type": "h2",
        "text": "New Zealand GST101A"
      },
      {
        "type": "list",
        "items": [
          "Felt 5 Total sales and income: Salg med GST, inkludert salg med nullsats, men uten salg uten avgift",
          "Felt 6 Zero-rated supplies: Salg med nullsats",
          "Felt 11 Total purchases and expenses: Innkjøpsordrer og utgifter med GST, inkl. GST; innkjøp uten inngående avgift eller med nullsats er utelatt"
        ]
      },
      {
        "type": "p",
        "text": "myIR beregner felt 8 og felt 12 som 3/23, noe som kan avvike fra avgiften i rapporten med noen få cent."
      },
      {
        "type": "h2",
        "text": "Singapore GST F5"
      },
      {
        "type": "list",
        "items": [
          "Felt 1 Total value of standard-rated supplies: Avgiftspliktige salg før avgift",
          "Felt 2 Total value of zero-rated supplies: Salg med nullsats; bare eksport og internasjonale tjenester kan ha nullsats",
          "Felt 5 Total value of taxable purchases: Innkjøpsordrer og utgifter med GST eller nullsats, før avgift; innkjøp uten inngående avgift er utelatt",
          "Felt 6 Output tax due: Avgift på salg",
          "Felt 7 Input tax and refunds claimed: Fradragsberettiget avgift på innkjøpsordrer og utgifter"
        ]
      },
      {
        "type": "h2",
        "text": "Storbritannia VAT Return"
      },
      {
        "type": "list",
        "items": [
          "Felt 1 VAT due on sales and other outputs: Avgift på salg",
          "Felt 4 VAT reclaimed on purchases and other inputs: Fradragsberettiget avgift på innkjøpsordrer og utgifter",
          "Felt 6 Total value of sales and all other outputs excluding any VAT: Salg før avgift, inkludert salg med nullsats, fritatte salg og salg uten avgift",
          "Felt 7 Total value of purchases and all other inputs excluding any VAT: Innkjøpsordrer og utgifter før avgift, inkludert innkjøp uten inngående avgift; trekk fra eventuell lønn og næringseiendomsskatt (business rates) du har registrert"
        ]
      },
      {
        "type": "p",
        "text": "Gjelder vanlig VAT-regnskap. Med Flat Rate Scheme beregnes felt 1 og felt 6 annerledes. I Storbritannia forfaller VAT på et depositum når du mottar det, mens DingPOS regner en forhåndsbestilling på hentedagen."
      },
      {
        "type": "p",
        "text": "Eksempel på et britisk kvartal: £1,000 i salg før avgift med VAT 20 % (avgift £200), £300 med nullsats, £50 uten avgift, innkjøpsordrer på £400 pluss £80 VAT og utgifter på £250 uten inngående avgift gir felt 1 £200, felt 4 £80, felt 6 £1,350 og felt 7 £650."
      },
      {
        "type": "h2",
        "text": "Tomme felt og tilgang for ansatte"
      },
      {
        "type": "p",
        "text": "Felt som skattemyndighetene beregner selv, og beløp som skyldes, er utelatt (britiske felt 3 og 5, Singapore felt 3, fritatte salg). I New Zealand og Singapore er salg uten avgift ikke med i noe felt. Sjekk med regnskapsføreren din om de skulle ha hatt avgift."
      },
      {
        "type": "p",
        "text": "Felt for inngående avgift (AU 1B, NZ 11, SG 5 og 7, UK 4 og 7) krever Krev fradrag for inngående avgift, ellers viser de — og Ingen inngående avgift registrert, aldri 0. Britisk felt 7 krever både Inngående avgift på innkjøpsordrer og Inngående avgift på utgifter. Bare innkjøpsordrer fyller felt 4 og lar felt 7 stå som —."
      },
      {
        "type": "p",
        "text": "Ansatte uten tillatelsen Resultat og utgifter eller Kostpris og fortjeneste ser ikke felt som legger sammen begge kortene, før en leder godkjenner via Be en leder om godkjenning."
      },
      {
        "type": "note",
        "text": "Beregnet etter salgs- og fakturadatoer. DingPOS sporer ikke betalingsdatoer. Hvis du innrapporterer etter kontantprinsippet eller betalingstidspunkt, må du justere disse tallene."
      }
    ],
    "related": [
      "tax-report",
      "input-tax",
      "export-tax-report"
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
        "text": "Gå til Innstillinger → Lojalitetsprogram og sett opp to regler: opptjen Y poeng per X brukt, og løs inn N poeng mot M i rabatt (med en valgfri grense for innløsning per ordre). Du kan også gi nye medlemmer velkomstbonus automatisk. Nye butikker starter med poeng slått av: slå på Aktiver lojalitetsprogram og fyll inn en regel. Er bryteren på uten at noen regel er satt, vises advarselen «Ingen regel for opptjening eller innløsning er satt ennå, så salg verken gir eller løser inn poeng.»"
      },
      {
        "type": "p",
        "text": "Knytt medlemmet til salget, i handlekurven eller på kasseskjermen, så opptjenes poengene automatisk. Skriv inn hvor mange poeng du vil løse inn. Skjermen etter fullført salg viser opptjente poeng og ny saldo, for eksempel «+22 poeng · 122 poeng totalt». Ved et salg på konto eller en forhåndsbestilling som ikke er betalt fullt ut, legges poengene til først når pengene kommer inn, og du ser «legges til ved oppgjør» eller «legges til ved betaling ved henting». Hvis du annullerer en ordre, trekkes poengene som ble opptjent på ordren tilbake, og eventuelle innløste poeng tilbakeføres."
      },
      {
        "type": "p",
        "text": "Vil du legge til eller trekke fra poeng manuelt (for eksempel for et kjøp som ble glemt), trykker du på Juster på Poeng-kortet i kundedetaljene, velger Legg til eller Trekk fra, skriver inn antall poeng og eventuelt en årsak (maks. 100 tegn). Du kan ikke trekke fra flere poeng enn kunden har. Hver justering blir værende i poenghistorikken med saldo før og etter, årsak og hvem som gjorde den."
      },
      {
        "type": "note",
        "text": "Manuell poengjustering kom i v3.5. På Pro blir ansatte hvis rolle krever godkjenning for Manuell poengjustering (rollen Ansatt gjør det som standard) bedt om PIN-koden til en leder eller eieren når de bekrefter."
      }
    ],
    "related": [
      "member-tiers",
      "checkout-customer",
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
        "type": "p",
        "text": "Første gang du åpner appen etter en oppdatering, eller etter at du har gjenopprettet en sikkerhetskopi fra en eldre versjon, kan du først se «Oppdaterer dataene dine…». Da flyttes butikkdataene over til et nyere format, og det tar lengre tid jo mer data du har. Appen åpnes av seg selv når det er ferdig. Den har ikke hengt seg opp."
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
          "Handlinger (manuell lagerjustering, manuell poengjustering, produktadministrasjon, gjennomføring av et kjøp med rabatt over rabattgrensen): én godkjenning gjelder den ene handlingen.",
          "Visninger (kostpris og fortjeneste, Rapporter, Resultat og utgifter, Innstillinger, sikkerhetskopi og gjenoppretting): en godkjenning gir tilgang inntil den aktive ansatte byttes eller appen går i bakgrunnen.",
          "Rabattgrensen gjelder manuelle rabatter og kontrolleres én gang i kassen. Automatiske kampanjer og innløsning av poeng teller ikke med."
        ]
      },
      {
        "type": "p",
        "text": "Standardinnstillinger: Ledere har lov til alt unntatt sikkerhetskopi og gjenoppretting og Resultat og utgifter, uten rabattgrense. Ansatte trenger godkjenning for alt, med en grense på 10 %. Eieren har alltid lov til alt og kan ikke redigeres. For å endre dette går du til Ansatte → Tillatelser for roller, trykker på Rediger og lagrer én gang – endringen gjelder alle umiddelbart."
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
      "endringslogg",
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
        "text": "Bruk aktivitetsloggen. På siden Ansatte trykker du på Aktivitetslogg øverst til høyre og taster inn eierens PIN-kode. Da ser du butikkens sensitive handlinger, nyeste først: annulleringer, returer, lagerjusteringer og nye tellinger, manuelle poengjusteringer, godkjenninger, endringer av ansatte og tillatelser, endringer av eierens PIN-kode, avgiftsinnstillinger, endringer av produktpriser og kostpriser og slettede produkter. Vanlige salg i kassen vises ikke."
      },
      {
        "type": "list",
        "items": [
          "Hver oppføring viser hva den gjelder, hvem som gjorde hva og når, og resultatet – for eksempel «M pris 390 kr → 350 kr». Årsaken som er oppgitt for en annullering, en retur, en lagerjustering eller en poengjustering, står på oppføringens tredje linje.",
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
        "text": "Du får 30 dager med alle funksjonene i Pro fra du installerer appen første gang, blant annet ansatte, tillatelser og aktivitetsloggen. Du trenger ingen konto."
      },
      {
        "type": "p",
        "text": "Tegner du et abonnement i prøveperioden, avsluttes prøveperioden med en gang, og abonnementsplanen du kjøpte gjelder fra da av. Etter prøveperioden er Pro-funksjoner som ansatte og aktivitetsloggen bare tilgjengelige med et Pro-abonnement. Avanserte rapporter krever ikke det. Fra og med v3.4 er de inkludert i alle abonnementsplaner."
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
        "text": "Alle tre abonnementsplanene har full kasse, produkter, ordrer (med annulleringer, returer og bytter), rapporter (avanserte rapporter og månedlig resultat inkludert fra og med v3.4, avgiftsrapporten og eksport av den fra og med v3.6) og sikkerhetskopi i skyen. Forskjellen ligger i verktøyene for å drive butikken:"
      },
      {
        "type": "list",
        "items": [
          "Lite: for deg som driver en markedsstand alene og trenger kasse og produkter.",
          "Standard: legger til kampanjer, rabattforvalg, poeng og medlemsnivåer, lagerstyring, innkjøp, salg på konto, forhåndsbestillinger og gebyrsatser for betalinger.",
          "Pro: legger til ansatte og tillatelser, godkjenning fra leder, aktivitetslogg og gjenopprettingslogg, for butikker med ansatte."
        ]
      },
      {
        "type": "p",
        "text": "Har du allerede Standard? Oppgrader til Pro fra abonnementssiden: Abonnementsperioden er den samme, oppgraderingen gjelder med en gang, og Apple beregner differansen forholdsmessig. Bytter du fra Pro tilbake til Standard, gjelder det fra neste fornyelse. Prisene vises i appen, og du kan sammenligne abonnementsplanene på siden Priser."
      },
      {
        "type": "note",
        "text": "Nedgradering sletter aldri data. Funksjoner som ikke inngår i abonnementsplanen din settes på pause, dataene blir værende, og tegner du abonnement igjen, er funksjonene tilbake."
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
        "text": "Gaver og tilleggsvarer endrer aldri handlekurven av seg selv. Når vilkårene er oppfylt, vises et forslagsbanner på kasseskjermen, og handlekurven endres først når kassereren trykker på gave- eller +-knappen i banneret (Velg gave eller Velg tilleggsvare). Det er med vilje, fordi gaver gjelder fysisk lager: noen må bekrefte at varen finnes, og at kunden vil ha den."
      },
      {
        "type": "list",
        "items": [
          "Etter ✕ (Avslå) i banneret dukker det samme forslaget ikke opp igjen for denne handlekurven. En ny eller tømt handlekurv gir forslaget på nytt.",
          "Hvis handlekurven ikke lenger oppfyller vilkårene (for eksempel at varen som utløste en gave, fjernes), fjernes gaven eller tilleggsvaren automatisk, og en melding øverst gir beskjed. Det teller ikke som en bruk (siden v3.6).",
          "Fra og med v3.4 hindrer ikke tilbud som fortsatt venter, at du går til kassen: en gul linje under betalingsknappen, for eksempel «1 ventende tilbud blir ikke brukt», viser hvor mange tilbud som utelates (trykk på linjen for å se hvilke), og ordren gjennomføres uten dem. For at kassen skal vente som før, slår du på Ta stilling til tilbud før kassen under Innstillinger → Enhetsinnstillinger. Dette gjelder bare denne iPaden.",
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
        "text": "Fra og med v3.4 viser Resultat nettoresultatet for hver måned etter kostpris, gebyrer og utgifter – se «Hvordan ser jeg hvor mye jeg faktisk tjente hver måned?» Fra og med v3.6 kan du eksportere en periode (for eksempel Denne måneden) fra avgiftsrapporten som CSV, Excel-arbeidsbok eller PDF-rapport til regnskapsføreren, med salg, avgift, beløpet som er mottatt per betalingsmåte, og kundefordringer. Resultat og de andre rapportene kan ikke eksporteres ennå, men alt du trenger til avstemmingen finnes allerede i appen:"
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
        "text": "Trenger du en månedlig oppgjørsrapport som du kan eksportere eller skrive ut, ut over det avgiftsrapporten dekker, send oss en melding om hvilke felt du trenger. Vi prioriterer utviklingen etter hvor mange som ber om det."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
