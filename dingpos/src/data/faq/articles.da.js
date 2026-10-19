// Generated from en and the da translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync da`, then `npm run l10n -- apply da`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Kom godt i gang",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Betaling",
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
    "label": "Produkter, lager og indkøb",
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
    "label": "Kampagner og loyalitet",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Backup og data",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Medarbejdere og tilladelser",
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
    "label": "Opsætningsguides til kampagner",
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
    "question": "Hvordan opretter jeg min butik i DingPOS?",
    "keywords": [
      "opsætning",
      "kom i gang",
      "onboarding",
      "første gang",
      "opsætningsguide",
      "opret butik"
    ],
    "content": [
      {
        "type": "p",
        "text": "Første gang du åbner DingPOS, hjælper en opsætningsguide dig med at oprette din butik på cirka 10 minutter:"
      },
      {
        "type": "steps",
        "items": [
          "Vælg dit land – valuta, momstilstand og en standardmomssats udfyldes automatisk (momssats og momstilstand kan stadig justeres på dette trin).",
          "Skriv din butiks navn, og upload eventuelt et logo.",
          "Følg vejledningen og opret 3–5 produkter (kan springes over – du kan altid tilføje dem senere)."
        ]
      },
      {
        "type": "p",
        "text": "Når du er færdig, lyder der et \"Ding!\" – din butik er klar, og du kan gå i gang med at sælge med det samme."
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
    "question": "Virker DingPOS uden internet?",
    "keywords": [
      "offline",
      "uden internet",
      "wifi",
      "netværk",
      "ingen forbindelse",
      "marked"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. DingPOS fungerer offline – betaling, produktstyring, lager og rapporter kører lokalt på din iPad uden behov for netværk. Natmarkeder, pop-up-butikker og andre steder uden Wi-Fi fungerer upåklageligt."
      },
      {
        "type": "p",
        "text": "Kun to ting kræver forbindelse: cloud-backup (upload til din egen iCloud, Google Drive eller Dropbox) og bekræftelse af abonnementsstatus."
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
    "question": "Skal jeg oprette en konto for at bruge DingPOS?",
    "keywords": [
      "konto",
      "tilmelding",
      "log ind",
      "oprette bruger",
      "privatliv"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nej. DingPOS har intet kontosystem – download appen, og begynd at sælge. Dine produkter, ordrer og kundedata bliver på din iPad og uploades aldrig til vores servere."
      },
      {
        "type": "p",
        "text": "Når du aktiverer cloud-backup, logger du ind på din egen cloud-konto (iCloud, Google Drive eller Dropbox). Backups ligger i din konto – vi har ikke adgang til dem."
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
    "question": "Hvilke enheder understøtter DingPOS?",
    "keywords": [
      "enhed",
      "iphone",
      "mac",
      "ipad",
      "krav",
      "version"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS understøtter i øjeblikket iPads med iPadOS 17 eller nyere og er primært designet til liggende format."
      },
      {
        "type": "p",
        "text": "iPhone og Mac understøttes ikke endnu. Hvis du ønsker, at vi understøtter en anden enhed, så skriv til os og fortæl, hvordan du vil bruge den."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kan jeg ændre valuta eller momstilstand efter opsætningen?",
    "keywords": [
      "valuta",
      "momstilstand",
      "ændre",
      "låst",
      "momssats"
    ],
    "content": [
      {
        "type": "p",
        "text": "Momssatsen kan ændres når som helst under Indstillinger – den nye sats gælder kun for fremtidige ordrer."
      },
      {
        "type": "p",
        "text": "Valuta og momstilstand (inkl. moms / ekskl. moms) er låst, når opsætningen er afsluttet. Alle dine tidligere ordrer er beregnet med dem, så en ændring undervejs ville ødelægge dine rapporter."
      },
      {
        "type": "note",
        "text": "Hvis du lige har åbnet din butik og ikke har vigtige data endnu, kan du slette appen og installere den igen for at køre opsætningen forfra. Sørg for, at der ikke er noget, du skal beholde, før du sletter."
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
    "question": "Hvordan skifter jeg appens sprog?",
    "keywords": [
      "sprog",
      "engelsk",
      "kinesisk",
      "skift sprog",
      "appsprog"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS understøtter engelsk og traditionelt kinesisk. Gå til Indstillinger → Enhedsvalg, og tryk på Appsprog. Det åbner DingPOS' side i appen Indstillinger på iPad'en, hvor du vælger sproget under Sprog."
      },
      {
        "type": "p",
        "text": "iOS lader ikke apps åbne sproglisten direkte, så det sidste tryk foregår i systemets Indstillinger. Sproget gælder kun for denne iPad."
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
    "question": "Hvordan ekspederer jeg flere kunder samtidig?",
    "keywords": [
      "kurve",
      "flere kurve",
      "sæt på pause",
      "skift kurv",
      "parallelt",
      "kø",
      "flere kunder"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kassen understøtter op til 10 kurve på samme tid. Tryk på \"+\" på kurvlinjen for at tilføje en, og tryk på en nummereret fane for at skifte."
      },
      {
        "type": "p",
        "text": "Hver kurv beregnes uafhængigt. Mens kunde A stadig kigger rundt, kan du skifte til en anden kurv og lade kunde B betale først. En kurv fjernes automatisk, når betalingen er gennemført."
      },
      {
        "type": "note",
        "text": "Kurve ligger kun i hukommelsen — kurve, der ikke er betalt, ryddes, når appen lukkes helt."
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
    "question": "Hvordan giver jeg rabat?",
    "keywords": [
      "rabat",
      "procent",
      "fast beløb",
      "nedsat pris",
      "prisreduktion"
    ],
    "content": [
      {
        "type": "p",
        "text": "Rabatter virker på to niveauer, og begge kan være et fast beløb eller en procentsats:"
      },
      {
        "type": "list",
        "items": [
          "Varerabat: tryk på en vare i kurven → vælg \"Rabat\" → indtast et beløb eller en procentsats.",
          "Kurvrabat: tryk på knappen \"Rabat\" under kurven."
        ]
      },
      {
        "type": "p",
        "text": "Hver vare og hver kurv kan have én rabat ad gangen — giver du en ny, erstatter den den forrige, og et tryk på rabatmærket fjerner den. Rabatter fratrækkes før moms, som det er almindeligt i detailhandlen."
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
    "question": "Hvordan beregnes moms?",
    "keywords": [
      "moms",
      "inkl. moms",
      "ekskl. moms",
      "momsberegning",
      "kvittering",
      "afrunding"
    ],
    "content": [
      {
        "type": "p",
        "text": "Momsen beregnes automatisk ud fra den momstilstand, du valgte under opsætningen. Kvitteringen viser momsbeløbet i begge tilfælde:"
      },
      {
        "type": "list",
        "items": [
          "Inkl. moms: priserne indeholder allerede moms — totalen ændres ikke, og kvitteringen specificerer den indeholdte moms (almindeligt i bl.a. Taiwan og Japan).",
          "Ekskl. moms: momsen lægges oven på beløbet efter rabat ved betaling (almindeligt i bl.a. USA og Canada)."
        ]
      },
      {
        "type": "p",
        "text": "Fuld beregningsrækkefølge: varerabatter → kurvrabat → moms. Beløb afrundes opad ved halve til valutaens antal decimaler (f.eks. 0 for TWD, 2 for USD)."
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
    "question": "Hvilke betalingsmåder kan jeg bruge?",
    "keywords": [
      "betaling",
      "betalingsmåde",
      "kontant",
      "kreditkort",
      "line pay",
      "byttepenge",
      "egen betalingsmåde",
      "på konto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kontant, Kreditkort og Line Pay er indbygget, og du kan tilføje egne betalingsetiketter under Indstillinger (f.eks. Apple Pay eller lokale mobilbetalinger)."
      },
      {
        "type": "p",
        "text": "Betalingsmåder er bogføringsetiketter — DingPOS behandler ikke selve betalingerne. Tag imod kort- eller mobilbetaling med din eksisterende terminal eller app, og vælg derefter den tilsvarende etiket i DingPOS for at registrere den. Ved kontant betaling beregnes byttepengene automatisk."
      },
      {
        "type": "p",
        "text": "Hvis en stamkunde tager varerne med nu og betaler senere, så vælg På konto: salget registreres som et tilgodehavende og afregnes, når pengene kommer. Se \"Kan stamkunder købe på konto og betale senere?\""
      }
    ],
    "related": [
      "on-account",
      "roadmap-payment-integration",
      "multiple-carts"
    ]
  },
  {
    "slug": "checkout-sound",
    "category": "checkout",
    "since": "3.0",
    "question": "Kan jeg slå \"Ding\"-lyden fra efter betaling?",
    "keywords": [
      "lyd",
      "ding",
      "slå lyden fra",
      "lydløs",
      "betalingslyd"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå til Indstillinger → Enhedsvalg, og slå Betalingslyd fra. Fra næste salg er bekræftelsesskærmen lydløs, men det haptiske tryk er der stadig."
      },
      {
        "type": "p",
        "text": "Kontakten gælder kun denne iPad, og en gendannelse fra en skybackup ændrer den ikke."
      }
    ],
    "related": [
      "app-language",
      "multiple-carts"
    ]
  },
  {
    "slug": "price-change-cart",
    "category": "checkout",
    "question": "Opdateres kurven, hvis jeg ændrer et produkts pris?",
    "keywords": [
      "prisændring",
      "ny pris",
      "kurv",
      "genberegn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kurven viser prisen på det tidspunkt, varen blev lagt i den. Når du trykker for at bekræfte betalingen, henter DingPOS den seneste pris på hver vare igen — hvis noget er ændret, får du en besked med de opdaterede priser, før du fortsætter."
      },
      {
        "type": "p",
        "text": "Kampagner vurderes også forfra ved bekræftelsen. Hvis totalen, momsen eller et rabatbeløb ændrer sig som følge heraf, vises en oversigt over ændringerne, og du skal bekræfte igen — så det beløb, du ser, er præcis det, der registreres."
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
    "question": "Kan manuelle rabatter og kampagner bruges samtidig?",
    "keywords": [
      "manuel rabat",
      "kampagne",
      "kombinere",
      "tilsidesætte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Reglen er \"manuel vinder, lagene er uafhængige\":"
      },
      {
        "type": "list",
        "items": [
          "Manuel varerabat: Linjen får ikke længere kampagner på vareniveau — din manuelle rabat gælder i stedet. Linjens beløb tæller dog stadig med i kampagnernes forbrugstærskler.",
          "Manuel kurvrabat: lægges på, efter alle kampagner er beregnet, så de to eksisterer side om side. Indtaster du mere end det resterende beløb, begrænses den automatisk med en besked."
        ]
      },
      {
        "type": "p",
        "text": "Når du fjerner en manuel rabat, kan linjen igen få kampagner ved næste beregning."
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
    "question": "Jeg har lavet en fejl ved betalingen – hvordan makulerer jeg en ordre?",
    "keywords": [
      "makulere ordre",
      "makulering",
      "annullere salg",
      "fejl ved betaling",
      "forkert ordre"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Ordrer, find ordren, åbn den, og vælg Makulér. Bekræft, så er den ikke længere gældende."
      },
      {
        "type": "p",
        "text": "Makulering tilbagefører automatisk alt, der hænger sammen med ordren: lager, der holdes styr på, lægges tilbage, optjente point på ordren trækkes tilbage, og indløste point gives tilbage. Makulerede ordrer bliver stående i listen med tydelig markering og tælles ikke med i omsætningen i rapporterne."
      },
      {
        "type": "note",
        "text": "En makulering betyder „dette salg skete aldrig“ – brug den til en ordre, der blev slået forkert ind på stedet. Når en kunde senere kommer med varer tilbage, skal du i stedet bruge Retur: Den oprindelige ordre bevares, du kan returnere kun nogle af varerne, og omsætningen reduceres på returdagen."
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
    "question": "Hvordan håndterer jeg en retur eller ombytning?",
    "keywords": [
      "retur",
      "ombytning",
      "refusion",
      "delvis retur",
      "bytte størrelse",
      "returnere vare"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Ordrer, åbn den oprindelige ordre, og tryk på Foretag retur. Vælg, hvor mange af hver vare der kommer tilbage. Ved en ombytning trykker du på Tilføj erstatningsvare på samme skærm. Differencen afregnes på én gang: positivt beløb betyder, at kunden betaler, negativt betyder, at du refunderer, og nul betyder, at der ikke skifter penge hænder."
      },
      {
        "type": "list",
        "items": [
          "Den oprindelige ordre ændres aldrig. En retur opretter sit eget dokument med dagens dato og et R foran nummeret, og omsætningen reduceres på returdagen.",
          "Refusionen svarer til det, kunden faktisk betalte for varen – vare- og kurvrabatter samt indløste point er allerede fordelt, så der refunderes ikke til listepris. Moms beregnes med den sats, som den oprindelige ordre blev afregnet med.",
          "Erstatningsvarer sælges til dagens pris, uden kampagner eller rabatter.",
          "Lager, der holdes styr på, lægges automatisk tilbage. Point optjent på den oprindelige ordre trækkes tilbage, indløste point gives tilbage, og erstatningsvarer optjener deres egne point.",
          "En ordre kan returneres i flere omgange, men aldrig ud over det antal, der oprindeligt blev solgt. Kampagnernes brugsgrænser gives ikke tilbage ved en retur."
        ]
      },
      {
        "type": "note",
        "text": "Der er ingen tidsgrænse for returer, men den oprindelige ordre er påkrævet. Hvis en retur er indtastet ved en fejl, kan du makulere returen, så kan antallet igen returneres."
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
    "question": "Hvordan tager jeg en forudbestilling med depositum?",
    "keywords": [
      "forudbestilling",
      "forudbestille",
      "depositum",
      "afhentning",
      "restbeløb",
      "reservere"
    ],
    "content": [
      {
        "type": "p",
        "text": "Skift øverst på skærmen ved betaling fra Salg til Forudbestilling, vælg afhentningsdato, indtast depositum (alt fra 0 til hele beløbet, med genveje til 30 % / 50 % / fuldt beløb), og vælg, hvordan depositum betales. Tilknyt en kunde, så du kan kontakte vedkommende, når varerne er kommet."
      },
      {
        "type": "list",
        "items": [
          "Lageret trækkes fra, når forudbestillingen oprettes, så varerne er reserveret til kunden. Varer, der ikke er på lager, går i minus og retter sig, når en indkøbsordre er modtaget.",
          "Når kunden henter varerne, trykker du på Udlever i ordredetaljerne for at modtage restbeløbet. Ordren bliver derefter et almindeligt gennemført salg, og senere returer følger den normale returproces.",
          "Hvis kunden aldrig kommer, trykker du på Annuller ordre i ordredetaljerne og vælger at refundere eller beholde depositum. Lageret lægges tilbage.",
          "Kvitteringen for depositum og den endelige afhentningskvittering har samme nummer."
        ]
      },
      {
        "type": "p",
        "text": "Under Statistik indregnes en forudbestillings omsætning fuldt ud på afhentningsdagen, mens depositum tæller med i Modtagne betalinger den dag, det betales – så de to tal er forskellige i en periode. Se „Hvad er forskellen på omsætning og modtagne betalinger?“"
      },
      {
        "type": "note",
        "text": "Varer i en forudbestilling kan ikke redigeres. Ombestemmer kunden sig, skal du annullere og oprette en ny forudbestilling. Det kræver Standard-niveauet eller højere at oprette forudbestillinger. Efter en nedgradering kan eksisterende forudbestillinger stadig afhentes eller annulleres."
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
    "question": "Kan stamkunder købe på konto og betale senere?",
    "keywords": [
      "på konto",
      "kredit",
      "kundekonto",
      "tilgodehavende",
      "afregning",
      "betale senere"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Vælg kunden ved betaling, og vælg På konto som betalingsmetode. Et tilgodehavende skal have en skyldner, så På konto er ikke tilgængelig uden en kunde."
      },
      {
        "type": "p",
        "text": "For at modtage betaling skifter du øverst i Ordrer til Tilgodehavender. Beløbene er grupperet efter kunde. Åbn en kunde for at afregne en enkelt ordre, en hel måned eller det hele – hver gang spørger DingPOS, hvordan pengene blev betalt. En enkelt ordre kan også afregnes fra sine detaljer, og en afregning, der er indtastet ved en fejl, kan fortrydes med Tilbagefør afregning."
      },
      {
        "type": "list",
        "items": [
          "Omsætningen tæller på den dag, varerne forlader butikken; Modtagne betalinger og kundepoint venter til den dag, der afregnes.",
          "Uafregnede ordrer har et ravgult mærke i listen, og kundens detaljer viser, hvor meget vedkommende skylder lige nu.",
          "En kunde med uafregnede ordrer kan ikke slettes."
        ]
      },
      {
        "type": "note",
        "text": "Det kræver Standard-niveauet eller højere at oprette salg på konto. Efter en nedgradering kan du ikke starte nye, men eksisterende tilgodehavender kan stadig ses og afregnes."
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
    "question": "Kan jeg skrive notater på ordrer, kunder eller indkøbsordrer?",
    "keywords": [
      "notat",
      "notater",
      "note",
      "kommentar",
      "bemærkning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Detaljesiderne for ordrer, kunder og indkøbsordrer har hver et notatkort – tryk på det for at redigere, op til 500 tegn. Du kan også skrive et notat i formularen, når du opretter en kunde eller en indkøbsordre."
      },
      {
        "type": "p",
        "text": "Notater er uafhængige af status: Gennemførte ordrer, makulerede ordrer og returer kan alle få tilføjet eller ændret et notat. En ordres beløb og varer ligger fast ved betalingen; notatet står ved siden af dokumentet og ændrer aldrig dets indhold."
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
    "question": "Hvordan opretter jeg produkter med varianter?",
    "keywords": [
      "varianter",
      "størrelse",
      "farve",
      "valgmuligheder",
      "variant"
    ],
    "content": [
      {
        "type": "p",
        "text": "På produktets redigeringsside under Variantvalgmuligheder trykker du på Tilføj valgmulighed for at tilføje en valgmulighed (fx “Farve”) og derefter på “+ Værdi” for at tilføje hver af dens værdier (fx Rød, Blå). Med to eller flere valgmuligheder (fx Farve × Størrelse) opretter DingPOS automatisk alle kombinationer (Rød/S, Rød/M, Blå/S …)."
      },
      {
        "type": "p",
        "text": "Hver kombination har sin egen pris og kostpris og holder styr på sit eget lager. Ved betaling vises en variantvælger, når du trykker på produktet, før det lægges i kurven."
      },
      {
        "type": "note",
        "text": "Navne på valgmuligheder og værdier må højst være 20 tegn lange."
      }
    ],
    "related": [
      "barcode-scanning",
      "inventory-tracking"
    ]
  },
  {
    "slug": "barcode-scanning",
    "category": "products",
    "question": "Hvordan fungerer stregkoder?",
    "keywords": [
      "stregkode",
      "scan",
      "scanner",
      "dublet",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Produkters stregkoder kan indtastes manuelt eller scannes med kameraet. Stregkoder skal være unikke – hvis en stregkode er i konflikt med et andet produkt, når du gemmer, viser DingPOS dig, hvilket produkt den tilhører."
      },
      {
        "type": "p",
        "text": "Ved betaling matcher søgefeltet både produktnavne og begyndelsen af stregkoder – skriv en stregkode for at finde produktet med det samme. Om planer for stregkodescannere som hardware kan du læse “Vil fysiske stregkodescannere blive understøttet?”"
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
    "question": "Hvordan ændrer jeg rækkefølgen på mine produkter?",
    "keywords": [
      "sortering",
      "rækkefølge",
      "omsortér",
      "arrangér",
      "træk",
      "fastgør øverst"
    ],
    "content": [
      {
        "type": "p",
        "text": "Under Produkter trykker du på Rediger sortering og trækker produktkortene derhen, hvor du vil have dem. Kassen og produktadministrationen deler denne ene rækkefølge, så du kun behøver at arrangere den én gang."
      },
      {
        "type": "list",
        "items": [
          "Med et stort sortiment har hvert korts menu Flyt forrest, Flyt bagerst og Flyt til placering, og hvert kort viser sin aktuelle placering.",
          "Filtrér først på en kategori for kun at ændre rækkefølgen inden for den kategori – produkter i andre kategorier bliver, hvor de er.",
          "Nye produkter kommer forrest; når du redigerer et produkts oplysninger, ændres dets placering aldrig."
        ]
      },
      {
        "type": "p",
        "text": "Hvis du en tid vil sortere efter navn, pris eller oprettelses- eller opdateringstidspunkt, bruger du menuen Sortér efter. Din egen rækkefølge bevares, og når du skifter tilbage til Manuel rækkefølge, er den der igen."
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
    "question": "Hvordan holder jeg styr på lageret?",
    "keywords": [
      "lager",
      "lagerbeholdning",
      "lagerstyring",
      "optælling",
      "lav beholdning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lagerstyring slås til pr. produkt – tænd den på produktets redigeringsside, og indtast den aktuelle mængde. Hver variant af et produkt holder styr på sit eget lager."
      },
      {
        "type": "p",
        "text": "Når den er slået til, trækker salg og forudbestillinger automatisk fra lageret; makuleringer, returneringer og annullerede forudbestillinger lægger varerne tilbage; modtagelse af en indkøbsordre lægger til; og du kan til enhver tid justere manuelt. Hver bevægelse registreres i en komplet oversigt. Lav lagerbeholdning fremhæves med en farveadvarsel."
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
    "question": "Hvorfor kan lageret blive negativt?",
    "keywords": [
      "negativt",
      "lager",
      "udsolgt",
      "blokere",
      "justere"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det er med vilje: betalingen bliver aldrig blokeret af for lidt lager. Den første regel ved en kasse i drift er, at kunden aldrig skal vente – et forkert tal på papiret kan rettes bagefter, men et afbrudt salg er tabt for altid."
      },
      {
        "type": "p",
        "text": "Negativt lager betyder som regel, at en genopfyldning ikke blev registreret, eller at en forudbestilt vare endnu ikke er kommet (forudbestillinger trækker fra lageret, når de oprettes). Registrér genopfyldning ved at modtage en indkøbsordre, så retter tallet sig selv; ret forskelle fra lageroptælling med en manuel justering, som gemmes i bevægelsesoversigten."
      }
    ],
    "related": [
      "inventory-tracking",
      "purchase-orders",
      "pre-orders"
    ]
  },
  {
    "slug": "purchase-orders",
    "category": "products",
    "since": "2.0",
    "question": "Hvordan registrerer jeg indkøb og leverandører?",
    "keywords": [
      "indkøbsordre",
      "indkøb",
      "leverandør",
      "modtag",
      "genopfyldning",
      "skyldige beløb"
    ],
    "content": [
      {
        "type": "p",
        "text": "Indkøb i sidemenuen bruges til at administrere leverandører og indkøbsordrer. For hver leverandør kan du gemme navn, kontaktperson, telefonnummer, adresse og en standardbetalingsbetingelse (betal nu eller månedligt)."
      },
      {
        "type": "steps",
        "items": [
          "Tryk på Nyt indkøb, vælg leverandøren, og tilføj produkter, antal og enhedskostpriser (udfyldt på forhånd med hvert produkts nuværende kostpris). Du kan også tilføje en fragtomkostning. Hvis leverandøren endnu ikke er oprettet, trykker du på Tilføj leverandør øverst til venstre på leverandørlisten – den nye leverandør kommer direkte tilbage til indkøbsordren.",
          "En kladde rører aldrig lager eller skyldige beløb – du kan frit redigere eller slette den.",
          "Når varerne kommer, trykker du på Modtag lager: lagerbeholdningen for lagerstyrede produkter stiger, og indkøbsordren får sit nummer og låses. Som standard opdaterer modtagelsen også hvert produkts kostpris til denne enhedskostpris; slå Synkronisér produktets kostpris fra på indkøbsordren for at lade kostpriserne være uændrede."
        ]
      },
      {
        "type": "p",
        "text": "Betalingsbetingelsen afgør, hvad der sker derefter: ordrer med betal nu markeres som betalt, mens månedlige ordrer forbliver ubetalte under Til betaling, hvor du kan afregne dem pr. leverandør – én ordre, denne måned eller det hele."
      },
      {
        "type": "note",
        "text": "Indkøb kræver abonnementsniveauet Standard eller højere. En leverandør med ubetalte modtagne ordrer kan ikke slettes."
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
    "question": "Hvad er forskellen på omsætning og modtagne betalinger?",
    "keywords": [
      "omsætning",
      "modtagne betalinger",
      "betalinger",
      "afstemning",
      "depositum",
      "salg på konto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omsætning tæller den dag, varerne blev udleveret; Modtagne betalinger tæller den dag, pengene kom ind. Ved en ordre, der betales ved kassen, sker begge dele samme dag, og tallene er ens. De skilles ad, når:"
      },
      {
        "type": "list",
        "items": [
          "Salg på konto: varerne forlader butikken i dag og tæller med i dagens omsætning; pengene tæller med i Modtagne betalinger den dag, de afregnes.",
          "Forudbestilling: depositummet tæller med i Modtagne betalinger, når det betales; omsætningen indregnes fuldt ud på afhentningsdagen.",
          "Fortabt depositum: når en kunde annullerer en forudbestilling, og du beholder depositummet, var det allerede talt med i Modtagne betalinger, da det blev betalt. Statistik viser det særskilt som fortabte depositummer, og det tæller aldrig som omsætning."
        ]
      },
      {
        "type": "p",
        "text": "Til afstemning sammenligner du Modtagne betalinger med kassebeholdningen og din kortterminal; for at se, hvor meget du reelt har solgt i en periode, ser du på Omsætning. Returer reducerer omsætningen på returdagen."
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
    "question": "Hvilke tidsperioder kan jeg se rapporter for?",
    "keywords": [
      "rapporter",
      "periode",
      "denne uge",
      "denne måned",
      "i år",
      "brugerdefineret periode",
      "dato",
      "bedst sælgende produkter"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vælg I dag, I går, Denne uge, Denne måned, I år eller Samlet øverst i Statistik, eller brug Brugerdefineret til at vælge en start- og slutdato. Denne uge følger enhedens første ugedag; Denne måned og I år begynder den 1. i måneden og den 1. januar. Hver mulighed viser de datoer, den dækker, og Samlet starter fra din butiks første transaktion."
      },
      {
        "type": "p",
        "text": "For en enkelt dag bliver tendensgrafen til et søjlediagram pr. time; længere perioder bruger dage, uger, måneder eller år pr. søjle afhængigt af længden."
      },
      {
        "type": "p",
        "text": "Kortet Produktrangliste viser de 5 bedste. Tryk på kortet eller Se alle for at vise alle produkter solgt i perioden, rangeret efter antal efter returer."
      },
      {
        "type": "p",
        "text": "Med Pro-abonnementet kan Salgssammenligning til højre i periodelinjen sammenligne perioden med den foregående eller med samme periode sidste år – se “Hvad viser Pros avancerede rapporter?”"
      },
      {
        "type": "note",
        "text": "Disse kalenderperioder kom i v2.4; tidligere versioner havde glidende intervaller (I dag / 7 dage / 30 dage / Samlet). Hvis du stadig ser dem, så opdatér DingPOS fra App Store."
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
    "question": "Hvad viser Pros avancerede rapporter?",
    "keywords": [
      "avancerede rapporter",
      "pro",
      "salgssammenligning",
      "sidste år",
      "heatmap",
      "travle timer",
      "langsomt sælgende varer",
      "lagerværdi",
      "genkøbsrate",
      "point"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avancerede rapporter er ikke en separat skærm – de sidder direkte i Statistik og følger den periode, du vælger øverst:"
      },
      {
        "type": "list",
        "items": [
          "Salgssammenligning: til højre i periodelinjen kan du sammenligne med samme periode sidste år eller med den foregående periode (en enkelt dag mod samme dag i sidste uge, denne uge mod sidste uge, denne måned mod sidste måned, i år mod sidste år, en brugerdefineret periode mod lige så mange dage umiddelbart før). Feltet Modtagne betalinger viser forskellen og væksten, og omsætningsgrafen får en lysere linje for sammenligningsperioden. Mens en periode stadig løber, afskæres sammenligningsperioden på samme tidspunkt.",
          "Ugedag × time: skift overskriften Salg over tid til Ugedag × time for et heatmap over syv dage og 24 timer – jo mørkere en celle, jo mere har du solgt. Skift mellem omsætning og ordrer; med en sammenligning slået til kan du se, hvilke timer der voksede, og hvilke der faldt.",
          "Langsomt sælgende varer: skift rangeringskortets overskrift til Langsomt sælgende varer for at vise produkter fra færrest til flest salg, med nuværende lager og datoen for hvert produkts seneste salg. Produkter, der aldrig er solgt, er markeret Aldrig solgt. Som standard vises kun produkter på lager.",
          "Genkøbsrate: sidste linje i kundefeltet er andelen af medlemmer, der har købt i perioden og i alt har købt to eller flere gange.",
          "Lige nu: lagerværdi (nuværende lager × nuværende kostpris), alle lagerbevægelser i den valgte periode og de point, kunderne har, men ikke har indløst, med det højeste beløb de kan trække fra. Det er aktuelle saldi; perioden ændrer dem ikke."
        ]
      },
      {
        "type": "p",
        "text": "Uden Pro har hvert af disse fem steder en lille lås, der åbner en forklaring på opgraderingen; alt andet i Statistik fungerer som før. Rapporterne bruger data, din butik allerede gemmer, så når Pro udløber, skjules kun rapporterne – der går ingen data tabt."
      },
      {
        "type": "note",
        "text": "Medarbejdere ser avancerede rapporter under tilladelsen Overblik; lagerværdibeløbene kræver også tilladelsen Kostpris og fortjeneste."
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
    "question": "Hvordan opgøres fortjeneste, hvis jeg ikke har indtastet kostpriser?",
    "keywords": [
      "kostpris",
      "fortjeneste",
      "dækningsbidrag",
      "bruttofortjeneste",
      "rapporter",
      "ikke opgjort"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostpris er et valgfrit felt. Produkter uden kostpris er markeret “dækningsbidrag ikke opgjort” i rapporter og holdes uden for beregningen af dækningsbidrag – omsætningen tæller stadig fuldt ud, kun dækningsbidraget springes over."
      },
      {
        "type": "p",
        "text": "For at få komplette rapporter over dækningsbidrag skal du tilføje kostpriser på produktets redigeringsside; fremtidige ordrer bliver medregnet. Dækningsbidraget beregnes ud fra omsætningen efter rabat."
      }
    ],
    "related": [
      "report-periods",
      "purchase-orders"
    ]
  },
  {
    "slug": "create-promotion",
    "category": "promotion",
    "question": "Hvordan opretter jeg en kampagne?",
    "keywords": [
      "kampagne",
      "tilbud",
      "køb 1 få 1",
      "forbrugsgrænse",
      "happy hour",
      "rabatkode"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Indstillinger → Kampagner. Du kan bl.a. oprette disse typer:"
      },
      {
        "type": "list",
        "items": [
          "Forbrugsgrænse: brug X, og få Y i rabat eller Y % rabat.",
          "Køb en, få en gratis, og tilbud på den n'te vare.",
          "Multiplikatorer for bonuspoint.",
          "Tilbud kun for bestemte medlemsniveauer eller i fødselsmåneden.",
          "Køb A, få B, tilkøb mod betaling og pakketilbud til fast pris."
        ]
      },
      {
        "type": "p",
        "text": "Hver kampagne kan tidsplanlægges (Happy Hour-tidsrum, bestemte ugedage, hen over midnat), begrænses til bestemte produkter og styres med prioritet, regler for kombination og brugsgrænser. Kampagner, der opfylder betingelserne, anvendes automatisk ved betaling – du behøver ingen rabatkoder."
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
    "question": "Min kampagne virker ikke – hvad skal jeg tjekke?",
    "keywords": [
      "kampagne",
      "virker ikke",
      "bliver ikke anvendt",
      "fejlfinding"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tjek de mest almindelige årsager i denne rækkefølge:"
      },
      {
        "type": "steps",
        "items": [
          "Tidsplan: er dagen i dag inden for de aktive datoer? Begrænser et Happy Hour-tidsrum ugedagen eller tidspunktet?",
          "Omfang: er varerne i kurven omfattet af kampagnens produkter eller kategorier? Er forbrugsgrænsen nået?",
          "Målgruppe: er kampagnen begrænset til et medlemsniveau eller en fødselsmåned? Blev medlemmet valgt ved betaling?",
          "Brugsgrænser: er den samlede grænse eller kundens egen grænse nået?",
          "Kombination: blokerer en kampagne med højere prioritet, som har \"Stop efterfølgende kampagner, når denne udløses\", for den?"
        ]
      },
      {
        "type": "p",
        "text": "Hvis alt ser rigtigt ud, og kampagnen stadig ikke virker, kan du sende os en e-mail med et skærmbillede af kampagnens indstillinger, så hjælper vi dig med at finde årsagen."
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
    "question": "Hvordan fungerer loyalitetspoint?",
    "keywords": [
      "point",
      "loyalitet",
      "kundeklub",
      "belønning",
      "indløs point",
      "velkomstbonus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Indstillinger → Loyalitetsprogram og angiv to regler: optjen Y point for hver X, du bruger, og indløs N point til M i rabat (eventuelt med et loft for indløsning pr. ordre). Du kan også give nye medlemmer velkomstpoint automatisk."
      },
      {
        "type": "p",
        "text": "Vælg medlemmet ved betaling, så optjenes point automatisk. For at indløse point skal du angive, hvor mange der skal bruges. Når du makulerer en ordre, trækkes de point, den gav, tilbage, og indløste point gives tilbage."
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
    "question": "Hvad bruger man medlemsniveauer til?",
    "keywords": [
      "niveau",
      "vip",
      "guld",
      "opgradering",
      "medlemsniveau",
      "kundeniveau"
    ],
    "content": [
      {
        "type": "p",
        "text": "Medlemsniveauer (fx Almindelig, Sølv, Guld) har to formål: Kampagner kan målrettes dem (fx 10 % rabat kun for Guld), og du kan på et øjeblik se en kundes status ved betaling."
      },
      {
        "type": "p",
        "text": "Niveauer kan opgraderes automatisk efter regler, du selv fastsætter (fx samlet forbrug), eller tildeles manuelt. Hvis en makuleret ordre havde udløst en opgradering, rulles niveauet automatisk tilbage."
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
    "question": "Hvordan tager jeg backup af mine data?",
    "keywords": [
      "backup",
      "sikkerhedskopi",
      "icloud",
      "google drive",
      "dropbox",
      "cloud",
      "øjebliksbillede"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Indstillinger → Cloud-backup, vælg enten iCloud, Google Drive eller Dropbox, og giv adgang. Derefter kan du når som helst starte en backup manuelt. Til iCloud skal denne iPad være logget ind på iCloud med iCloud Drive slået til, og DingPOS skal have lov til at bruge det."
      },
      {
        "type": "p",
        "text": "Backups gemmes på din egen cloudkonto. Hver cloud beholder kun den seneste – ét øjebliksbillede af data og én fil med produktbilleder – og hver ny backup overskriver den forrige."
      },
      {
        "type": "note",
        "text": "Fordi en ny backup erstatter den gamle, bør du ikke tage backup, hvis du har mistanke om, at der allerede er noget galt med dine data (for eksempel hvis en række produkter er blevet slettet ved en fejl). Skriv i stedet til os på e-mail, så finder vi sammen ud af næste skridt."
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
    "question": "iCloud-backup viser “Ikke forbundet” – hvad gør jeg?",
    "keywords": [
      "icloud",
      "ikke forbundet",
      "icloud drive",
      "backup mislykkedes",
      "kan ikke forbinde"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS viser kun iCloud som forbundet, når det faktisk kan bruges. Hvis der står Ikke forbundet, skal du tjekke tre ting i appen Indstillinger på din iPad:"
      },
      {
        "type": "steps",
        "items": [
          "Du er logget ind med din Apple-konto.",
          "iCloud Drive er slået til.",
          "DingPOS har lov til at bruge iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Når alle tre er slået til, skal du gå tilbage til Cloud-backup i DingPOS, og så vises iCloud som forbundet. Backups gemmes i DingPOS’ egen mappe i iCloud Drive."
      },
      {
        "type": "note",
        "text": "I versioner før v3.0 virkede iCloud-backup ikke og fejlede hver gang med “Backup.SyncError error 0”. Opdater først DingPOS fra App Store."
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
    "question": "Hvordan flytter jeg mine data til en ny iPad?",
    "keywords": [
      "flytte data",
      "ny ipad",
      "gendan",
      "overflytning",
      "migrering",
      "flytte"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Gammel iPad: Gå til Indstillinger → Cloud-backup, og kør en manuel backup. Kontrollér, at backuptidspunktet er opdateret.",
          "Ny iPad: Installér DingPOS, og gennemfør opsætningsguiden.",
          "Ny iPad: Gå til Indstillinger → Cloud-backup, forbind den samme cloudkonto, og gendan."
        ]
      },
      {
        "type": "p",
        "text": "Når du trykker på Gendan, åbnes først en forhåndsvisning: antal produkter, ordrer og kunder på denne iPad og i øjebliksbilledet side om side, plus hver ordre, som gendannelsen ville fjerne. Intet på denne iPad ændres, før du bekræfter. Hvis øjebliksbilledet er oprettet med en nyere version af DingPOS, bliver du bedt om først at opdatere appen. Produktbilleder gendannes også."
      },
      {
        "type": "note",
        "text": "En gendannelse erstatter alle data på denne iPad med backuppen – ordrer oprettet på denne iPad efter den backup, er væk. Sørg for, at du er forbundet til den rigtige cloudkonto; hvis du har gendannet fra den forkerte, så brug Fortryd gendannelse."
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
    "question": "Beholder jeg mine data, hvis jeg sletter appen?",
    "keywords": [
      "slet",
      "afinstaller",
      "datatab",
      "fjerne app"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nej. DingPOS gemmer alt lokalt på din enhed – hvis du sletter appen, slettes alle produkter, ordrer, medlemmer og indstillinger permanent, medmindre du har slået cloud-backup til."
      },
      {
        "type": "note",
        "text": "Før du sletter appen, skal du altid køre en manuel backup og kontrollere, at den lykkedes. Efter ominstallation kan du gendanne fra cloud."
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
    "question": "Appen viser “Dine butiksdata kunne ikke åbnes” – hvad nu?",
    "keywords": [
      "kunne ikke åbnes",
      "åbner ikke",
      "nedbrud",
      "crasher ved start",
      "database",
      "butiksdata"
    ],
    "content": [
      {
        "type": "p",
        "text": "Slet ikke appen. Denne skærm betyder, at DingPOS ikke kunne læse dine butiksdata, men dataene er stadig på denne iPad – hvis du sletter appen, slettes de sammen med den."
      },
      {
        "type": "p",
        "text": "Tryk først på Prøv igen; hvis det virker, åbner appen som normalt. Hvis det bliver ved, så tryk på Kontakt support og fortæl os det, så hjælper vi dig med at redde dine data. Denne skærm flytter eller sletter aldrig nogen filer."
      },
      {
        "type": "note",
        "text": "Den mest almindelige årsag er, at appen blev lukket midt i en gendannelse. Før v3.0 fik det appen til at gå ned ved hver start; siden v3.0 stopper den i stedet på denne skærm."
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
    "question": "Kan jeg bruge to iPads sammen?",
    "keywords": [
      "to ipads",
      "flere enheder",
      "synkronisering",
      "dele",
      "ekstra kasse"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hver iPads data er i øjeblikket uafhængige – realtidsdeling af ét datasæt mellem to enheder understøttes endnu ikke."
      },
      {
        "type": "p",
        "text": "Du kan kopiere data fra én iPad til en anden via cloud-backup (backup → gendan), hvilket fungerer godt, når du skifter enhed, eller når du vil give en ekstra iPad et startgrundlag. Ordrer, der er slået ind hver for sig på de to enheder, flettes dog ikke automatisk. Synkronisering mellem flere enheder står på vores køreplan."
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
    "question": "Kan jeg importere produkter og salg fra et andet kassesystem eller et regneark?",
    "keywords": [
      "import",
      "csv",
      "excel",
      "regneark",
      "flytte data",
      "skifte kassesystem",
      "masseimport",
      "salgshistorik"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå til Indstillinger → Dataimport, vælg om du vil importere produkter eller salg, og vælg en CSV-fil (både Excel og Google Sheets kan gemme som CSV)."
      },
      {
        "type": "steps",
        "items": [
          "Filen åbnes som en tabel. Almindelige kolonnenavne på engelsk og kinesisk genkendes automatisk; tryk på en kolonneoverskrift for at ændre dens tilknytning.",
          "Tryk på en celle for at rette værdien direkte – du behøver ikke redigere filen og starte forfra.",
          "Tryk på Bekræft for at validere. Rækker med problemer markeres med rødt og en begrundelse; ved import af salg kan du springe ordrer med fejl over.",
          "Afklar alt, der kræver en beslutning (dublerede produktnavne, en række der passer til flere kunder), gennemgå oversigten, og tryk derefter på Start importen."
        ]
      },
      {
        "type": "list",
        "items": [
          "Importerede salg placeres efter transaktionsdato og genberegnes med din butiks valuta og momsindstilling. De påvirker ikke lageret og giver ikke velkomstpoint.",
          "Kunder matches med eksisterende kunder via telefonnummer eller e-mail; alle uden match oprettes.",
          "Importerede ordrer viser en importdato og det oprindelige ordrenummer og kan ikke makuleres eller returneres.",
          "Rækker med fejl kan eksporteres som en CSV med begrundelserne – ret dem, og importér igen. Dublerede rækker springes automatisk over."
        ]
      },
      {
        "type": "note",
        "text": "Dataimport er i beta. Hver fil kan indeholde op til 50.000 rækker eller 20 MB. Tag en cloud-backup, før du importerer; hvis noget ikke kan importeres, eller resultatet ser forkert ud, så fortæl os det via Rapportér et problem på importskærmen."
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
    "question": "Jeg har gendannet den forkerte backup. Kan jeg fortryde det?",
    "keywords": [
      "fortryd gendannelse",
      "gendan",
      "forkert øjebliksbillede",
      "gendannelsesposter",
      "mistede data",
      "gå tilbage"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Hver cloud-gendannelse gemmer de data, den erstattede, som en kopi før gendannelsen. Under Indstillinger → Cloud-backup viser et kort, hvornår den seneste gendannelse fandt sted, og hvorfra den kom. Tryk på Fortryd gendannelse, gennemgå forhåndsvisningen, og bekræft – så gendannes dataene, som de var før gendannelsen, og appen genindlæses."
      },
      {
        "type": "list",
        "items": [
          "Fortryd gendannelse er i sig selv en gendannelse og gemmer en ny kopi af det, den erstatter, så hvis du trykker igen, skifter du tilbage.",
          "Kun den seneste kopi gemmes; den næste gendannelse erstatter den.",
          "Kun data kommer tilbage: produkter tilføjet efter øjebliksbilledet viser et manglende billede."
        ]
      },
      {
        "type": "p",
        "text": "Hvis du vil se, hvem der gendannede, hvornår og fra hvilket øjebliksbillede, så tryk på Vis gendannelsesposter på samme skærm: tidspunktet for hver gendannelse, aktiv medarbejder, kilde, antal produkter / ordrer / kunder før og efter samt hver ordre, den fjernede. Posterne ligger på denne iPad og erstattes aldrig af en gendannelse."
      },
      {
        "type": "note",
        "text": "Forhåndsvisningen af gendannelsen og Fortryd gendannelse virker på alle abonnementsniveauer; at se gendannelsesposter er en Pro-funktion. Posterne bliver også skrevet uden Pro (blot uden aktiv medarbejder), så hvis du senere abonnerer på Pro, kan du se dem alle."
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
    "question": "Hvordan tilføjer jeg medarbejdere og skifter, hvem der står i kassen?",
    "keywords": [
      "medarbejder",
      "ansat",
      "leder",
      "konto",
      "pin",
      "pinkode",
      "aktiv medarbejder",
      "skift",
      "vagtskifte",
      "kasserer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tryk på Personale i sidepanelet. Første gang opretter du ejeren: et navn og en PIN på 4 cifre. Du skal bruge denne PIN for at tilføje medarbejdere og ændre tilladelser, så husk den – den kan ikke nulstilles."
      },
      {
        "type": "steps",
        "items": [
          "Tryk på Tilføj medarbejder på siden Personale, skriv et navn, vælg en rolle (Leder eller Medarbejder), og angiv en PIN på 4 cifre.",
          "Den aktive medarbejder vises nederst i sidepanelet og øverst til højre på betalingsskærmen. Ved vagtskifte trykker du på den, vælger dit navn og indtaster din PIN.",
          "Fra da af registreres det ved hver ordre, betaling og lager- eller pointbevægelse, hvem der håndterede den. Du kan se det i ordrelisten og i ordredetaljerne, og ved makulerede ordrer registreres også, hvem der makulerede dem."
        ]
      },
      {
        "type": "p",
        "text": "Når en medarbejder stopper, bruger du Deaktivér denne medarbejder: historikken bevares, og du kan genaktivere medarbejderen senere. Hvis du ændrer et navn, påvirker det ikke gamle ordrer – de beholder navnet fra dengang."
      },
      {
        "type": "note",
        "text": "Personale er en Pro-funktion (den kan også bruges i prøveperioden). Hvis Pro udløber, bevares personaledata og den medarbejder, der håndterede hver ordre, og nye ordrer registreres under ejeren. Når du abonnerer på Pro igen, er alt tilbage."
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
    "question": "Hvad gør jeg, hvis jeg glemmer ejerens PIN?",
    "keywords": [
      "pin",
      "pinkode",
      "glemt pin",
      "glemt kode",
      "adgangskode",
      "nulstille",
      "ejer",
      "gendanne",
      "låst ude"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ejerens PIN kan ikke nulstilles, og vores support kan heller ikke låse den op. PIN-koden gemmes sammen med din butiks data, så hvis du sletter og geninstallerer appen og derefter gendanner fra skyen, får du den samme PIN tilbage."
      },
      {
        "type": "p",
        "text": "Når du opretter ejeren, og hver gang du ændrer ejerens PIN, vises advarslen “Husk denne PIN-kode. Hvis du glemmer den, kan den ikke nulstilles.” Opbevar den et sted, som kun du har adgang til."
      },
      {
        "type": "p",
        "text": "Uden ejerens PIN er alt, der kræver den, utilgængeligt – tilføje eller redigere medarbejdere, ændre rolletilladelser og se aktivitetsloggen. Medarbejdere kan stadig ekspedere og udføre det daglige arbejde med deres egne PIN-koder."
      },
      {
        "type": "note",
        "text": "Hvis en medarbejder glemmer sin PIN, er det ikke noget problem: Ejeren kan nulstille den under Personale."
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
    "question": "Hvordan fungerer medarbejderes tilladelser og lederens godkendelser?",
    "keywords": [
      "tilladelser",
      "rolletilladelser",
      "godkendelse",
      "leder",
      "rabatloft",
      "medarbejder",
      "kostpris",
      "rolle"
    ],
    "content": [
      {
        "type": "p",
        "text": "En tilladelse har to værdier: Tilladt eller Kræver godkendelse – intet er direkte forbudt. Når en medarbejder støder på en handling, der kræver godkendelse, vælger en kollega med lov til at udføre den sit navn og indtaster sin PIN for at lade den gå igennem."
      },
      {
        "type": "list",
        "items": [
          "Handlinger (manuel lagerregulering, produktstyring, ekspedition med rabat over rabatloftet): én godkendelse dækker den ene handling.",
          "Visninger (kostpris og fortjeneste, Statistik, Indstillinger, backup og gendannelse): en godkendelse låser op, indtil den aktive medarbejder skifter, eller appen går i baggrunden.",
          "Rabatloftet gælder manuelle rabatter og kontrolleres én gang ved betaling. Automatiske kampagner og indløsning af point tæller ikke med."
        ]
      },
      {
        "type": "p",
        "text": "Standardindstillinger: Ledere har lov til alt undtagen backup og gendannelse, uden rabatloft. Medarbejdere kræver godkendelse til alt, med et loft på 10 %. Ejeren har altid lov til alt, og ejerens tilladelser kan ikke ændres. Hvis du vil ændre det, går du til Personale → Rolletilladelser, trykker på Rediger og gemmer én gang – ændringen gælder straks for alle."
      },
      {
        "type": "note",
        "text": "Makuleringer, returvarer, salg på konto og indkøb har bevidst ingen tilladelse; de registrerer kun, hvem der håndterede dem. Brug aktivitetsloggen, hvis du vil gennemgå dem senere."
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
    "question": "Hvordan ser jeg, hvem der har makuleret en ordre, reguleret lageret eller ændret en pris?",
    "keywords": [
      "aktivitetslog",
      "log",
      "revision",
      "hvem har ændret",
      "makulering",
      "prisændring",
      "lagerregulering",
      "slettet produkt",
      "godkendelser"
    ],
    "content": [
      {
        "type": "p",
        "text": "Brug aktivitetsloggen. På siden Personale trykker du på Aktivitetslog øverst til højre og indtaster ejerens PIN. Så ser du butikkens følsomme handlinger med de nyeste først: makuleringer, returvarer, manuelle lagerreguleringer, godkendelser, ændringer af medarbejdere og tilladelser, ændringer af ejerens PIN, ændringer af produkters pris og kostpris samt slettede produkter. Almindelige salg vises ikke."
      },
      {
        "type": "list",
        "items": [
          "Hver post viser, hvad den berørte, hvem der gjorde hvad og hvornår, og resultatet – for eksempel “M pris 390 kr. → 350 kr.”.",
          "Filtrér efter medarbejder (også deaktiverede), handlingstype og I dag / Denne uge / Denne måned.",
          "Tryk på en post, der peger på en ordre, et produkt eller en kunde, for at åbne dens detaljer.",
          "Ordredetaljer, produktdetaljer og hver medarbejders side har deres egen indgang, der kun viser de poster, der handler om dem.",
          "Slettede produkter vises stadig i loggen med navn og pris fra dengang."
        ]
      },
      {
        "type": "note",
        "text": "Alle abonnementsniveauer registrerer; det er kun visningen, der er en Pro-funktion, så poster fra den periode, hvor Pro var udløbet, dukker op, når du abonnerer igen. Loggen følger med dine skybackups."
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
    "question": "Hvordan fungerer den gratis prøveperiode?",
    "keywords": [
      "prøveperiode",
      "gratis",
      "30 dage",
      "gratis prøve"
    ],
    "content": [
      {
        "type": "p",
        "text": "Du får 30 dages adgang til alle funktioner i Pro fra første installation, herunder medarbejderkonti, tilladelser, aktivitetsloggen og avancerede rapporter – uden at oprette en konto."
      },
      {
        "type": "p",
        "text": "Hvis du tegner et abonnement i prøveperioden, slutter prøveperioden med det samme, og det abonnement, du har købt, gælder fra da af. Efter prøveperioden er Pro-funktioner som medarbejdere og avancerede rapporter kun tilgængelige med et Pro-abonnement."
      },
      {
        "type": "p",
        "text": "Alt, hvad du opretter i prøveperioden (produkter, ordrer, medlemmer), bevares fuldt ud. Dine data bliver aldrig slettet, uanset om du tegner et abonnement bagefter eller ej."
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
    "question": "Forsvinder mine data, når prøveperioden udløber?",
    "keywords": [
      "udløb",
      "prøveperioden slutter",
      "låst",
      "data"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nej – dine data bliver på din enhed for altid. Når prøveperioden er slut, er betaling låst, men du kan stadig se ordrer, se rapporter og administrere produkter."
      },
      {
        "type": "p",
        "text": "Tegn et abonnement når som helst, så låses betaling op med det samme, og alle dine data er præcis, som du efterlod dem."
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
    "question": "Hvad er forskellen på Lite, Standard og Pro?",
    "keywords": [
      "abonnementsniveauer",
      "lite",
      "standard",
      "pro",
      "forskel",
      "sammenlign",
      "opgrader",
      "nedgrader",
      "priser"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alle tre abonnementsniveauer omfatter fuld betaling, produkter, ordrer (med makuleringer, returneringer og ombytninger), rapporter og cloud-backup. De adskiller sig i værktøjerne til at drive butikken:"
      },
      {
        "type": "list",
        "items": [
          "Lite: til dig, der driver en markedsstand alene og har brug for betaling og produkter.",
          "Standard: tilføjer kampagner, loyalitetspoint og medlemsniveauer, lagerstyring, indkøb, salg på konto og forudbestillinger.",
          "Pro: tilføjer medarbejderkonti og tilladelser, lederens godkendelse, aktivitetslog, gendannelsesposter og avancerede rapporter – til butikker med medarbejdere."
        ]
      },
      {
        "type": "p",
        "text": "Har du allerede Standard? Opgrader til Pro fra abonnementssiden: Faktureringen forbliver i samme cyklus, opgraderingen træder i kraft med det samme, og Apple beregner forskellen forholdsmæssigt. Skift fra Pro tilbage til Standard træder i kraft ved fornyelsen. Priserne vises i appen, og du kan sammenligne abonnementsniveauerne på vores side Priser."
      },
      {
        "type": "note",
        "text": "Nedgradering sletter aldrig data. Funktioner ud over dit abonnementsniveau sættes på pause, dine data bliver, og når du tegner abonnementet igen, er funktionerne tilbage."
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
    "question": "Hvordan tegner eller opsiger jeg et abonnement, og hvordan gendanner jeg et køb?",
    "keywords": [
      "tegn abonnement",
      "opsig",
      "annuller abonnement",
      "gendan køb",
      "pris",
      "betaling"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abonnementer håndteres via App Store-køb i appen – abonnementsniveauer og priser vises i appen. Betalingen behandles af Apple; vi ser aldrig dine betalingsoplysninger."
      },
      {
        "type": "list",
        "items": [
          "Opsig: Administrer det i din enheds Indstillinger → Apple-konto → Abonnementer. Opsig mindst 24 timer før den aktuelle periode slutter for at undgå fornyelse.",
          "Gendan: Efter skift af enhed eller geninstallation skal du trykke på \"Gendan køb\" på DingPOS' abonnementsside.",
          "Skift abonnementsniveau: Vælg det nye abonnementsniveau på DingPOS' abonnementsside. Opgraderinger (Standard til Pro, månedlig til årlig) træder i kraft med det samme, og Apple beregner forskellen forholdsmæssigt; nedgraderinger træder i kraft ved fornyelsen."
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
    "question": "Sådan opretter du en rabat ved minimumsbeløb",
    "keywords": [
      "rabat ved minimumsbeløb",
      "køb for og få rabat",
      "minimumsbeløb",
      "kampagne guide",
      "opsætning",
      "vejledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå til Indstillinger → Kampagner → Tilføj, vælg kurvrabat med minimumsbeløb i kurven, og så:"
      },
      {
        "type": "steps",
        "items": [
          "Angiv minimumsbeløbet og rabatten (fast beløb eller procent).",
          "Vælg omfang: bestemte produkter, bestemte kategorier, eller lad feltet stå tomt, så gælder den hele butikken.",
          "Angiv tidsplan: startdato er påkrævet; lad slutdatoen stå tom, hvis kampagnen skal køre løbende.",
          "Tryk på Gem — kampagnen aktiveres efter tidsplanen og bruges automatisk ved betaling uden koder."
        ]
      },
      {
        "type": "note",
        "text": "Minimumsbeløbet vurderes ud fra subtotalen for de varer, der er omfattet, ikke hele kurven. En kampagne med “køb drikkevarer for 1.000 kr.” tæller kun drikkevarer med, og produkter, der er markeret “Udeluk fra kampagner”, tæller aldrig med."
      },
      {
        "type": "p",
        "text": "Noget, vi ofte bliver spurgt om: Hvis en kampagne med højere prioritet anvendes først, vurderes minimumsbeløbet ud fra det beløb, der allerede er rabatteret — en kurv, der ser ud til at nå grænsen, kan komme lidt under den. Hvis grænsen skal vurderes først, så giv kampagnen et lavere prioritetsnummer."
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
    "question": "Sådan opretter du køb-en-få-en og x-vare-tilbud",
    "keywords": [
      "køb 1 få 1",
      "køb en få en gratis",
      "3 for 2",
      "bogo",
      "gratis vare",
      "kampagne guide",
      "vejledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Opret en kampagne af typen Køb X / få Y: angiv, hvor mange der skal købes, hvor mange man får, og rabatprocenten (100 % = gratis). Begræns den til bestemte produkter eller en hel kategori — forskellige produkter i samme kategori tælles sammen i gruppen."
      },
      {
        "type": "list",
        "items": [
          "Den rabatterede vare er den billigste i gruppen, regnet med dens aktuelle effektive pris — hvis en tidligere kampagne allerede har givet rabat på den, beregnes køb-X-få-Y-beløbet ud fra den rabatterede pris, ikke listeprisen.",
          "Hvis du vil have, at mærkaten “3. vare gratis” viser den fulde listepris, så giv denne kampagne det laveste prioritetsnummer, så den beregnes først. Når en rabat på hele kurven køres først, er den viste rabat på den gratis vare mindre end listeprisen — det er en egenskab ved beregningsrækkefølgen, som vi har afprøvet grundigt, ikke en fejl. Begge rækkefølger giver næsten samme totalbeløb; det er kun placeringen af rabatten, der ændrer sig."
        ]
      },
      {
        "type": "p",
        "text": "Tip: Sæt dit hovedtilbud øverst i prioriteten, så rabatopgørelsen på kvitteringen passer til dit budskab."
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
    "question": "Sådan opretter du dobbelte point og pointmultiplikatorer",
    "keywords": [
      "pointmultiplikator",
      "dobbelte point",
      "bonuspoint",
      "kampagne guide",
      "vejledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Opret en kampagne af typen Pointmultiplikator, og angiv multiplikatoren (et helt tal på 2 eller højere). Du kan eventuelt tilføje et minimumsbeløb (f.eks. køb for 500 kr. → dobbelte point) og en tidsplan (f.eks. kun lørdage)."
      },
      {
        "type": "list",
        "items": [
          "Når flere multiplikatorer opfyldes samtidig, gælder kun den højeste — de ganges eller lægges aldrig sammen.",
          "Minimumsbeløbet vurderes efter indløsning af point: Hvis indløsningen sænker totalen under grænsen, udløses multiplikatoren ikke denne gang.",
          "Der skal vælges et medlem ved betaling, for at der optjenes point — ordrer uden medlem giver ingen point, så multiplikatoren har intet at gange."
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
    "question": "Sådan opretter du tilbud til medlemsniveauer og fødselsdage",
    "keywords": [
      "medlemsniveau",
      "fødselsdagstilbud",
      "fødselsdagsrabat",
      "vip",
      "kampagne guide",
      "vejledning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Opret først niveauer under Indstillinger → Medlemsniveauer (f.eks. Guld), og målret derefter kampagnen mod det niveau. Til fødselsdagstilbud vælger du betingelsen “Fødselsmåned”."
      },
      {
        "type": "list",
        "items": [
          "Medlemmet skal være valgt ved betaling, for at tilbuddet udløses — berettigelsen vurderes ud fra det medlem, der er valgt lige nu.",
          "Fødselsdagstilbud bruger medlemmets fødselsmåned, så udfyld fødselsdagsfeltet; medlemmer uden en fødselsdag regnes aldrig som fødselsdagskunder.",
          "Automatiske niveauopgraderinger vurderes, når betalingen gennemføres; hvis ordren makuleres, rulles en opgradering, som den udløste, automatisk tilbage."
        ]
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
    "question": "Sådan opretter du gaver, tilkøb og pakketilbud",
    "keywords": [
      "gave ved køb",
      "tilkøb",
      "pakketilbud",
      "køb a få b",
      "kampagne guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der findes tre sammensatte tilbudstyper: gave ved køb (køb A, få B), tilkøb til særpris (tilføj X kr. for at få Y) og pakketilbud til fast pris (vilkårlige N for X kr.). Gaver og tilkøb venter på, at kassemedarbejderen bekræfter; pakketilbud anvendes automatisk."
      },
      {
        "type": "p",
        "text": "Gaver og tilkøb ændrer aldrig kurven af sig selv. Når betingelserne er opfyldt, vises et forslagsbanner på kassesiden, og kurven ændres først, når kassemedarbejderen accepterer forslaget (Vælg gave eller Vælg tilkøb) — det er bevidst, fordi gaver involverer fysisk lager: Nogen skal bekræfte, at varen er på lager, og at kunden vil have den."
      },
      {
        "type": "list",
        "items": [
          "Når du har trykket på Afslå, vises det samme forslag ikke igen for denne kurv; en ny eller tømt kurv udløser forslaget igen.",
          "Hvis et nyt forslag dukker op før bekræftelsen ved betaling, skal det accepteres eller afslås, før ordren kan gennemføres.",
          "Gave- og tilkøbslinjer kan ikke få yderligere rabat fra andre rabatkampagner og tæller ikke med i andre kampagners minimumsgrænser."
        ]
      },
      {
        "type": "p",
        "text": "Pakketilbud (anvendes automatisk siden v2.4): Når kurven kan danne et pakketilbud, grupperer DingPOS det og medregner det i totalen — uden besked, og pakketilbud kan ikke deles."
      },
      {
        "type": "list",
        "items": [
          "Et pakketilbud dannes kun, hvis det gør kurven billigere. Blandt varer til samme pris grupperes dem uden rabat først, og varer, der allerede har rabat, beholder den.",
          "Hvilke varer der grupperes, afhænger kun af, hvad der er i kurven, aldrig af rækkefølgen, de er scannet i.",
          "Hver vare i pakken viser sin andel af pakkerabatten, og hver linjes beløb er efter rabatter.",
          "Ved betaling grupperes pakketilbuddene igen med de nyeste priser; hvis resultatet ændrer sig, bliver du bedt om at bekræfte den nye total."
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
    "question": "Sådan indstiller du tidsplan og Happy Hour",
    "keywords": [
      "tidsplan",
      "happy hour",
      "ugedag",
      "midnat",
      "kampagne guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hver kampagnes tidsplan har tre lag: et datointerval (start påkrævet, slut valgfri), et dagligt tidsrum (Happy Hour) og valgte ugedage. Alle tre skal passe, for at kampagnen udløses."
      },
      {
        "type": "list",
        "items": [
          "For tidsrum, der går over midnat (f.eks. 22:00–02:00), vurderes ugedagen ud fra den dag, tidsrummet starter: Hvis kun fredag er valgt, tæller lørdag kl. 01:30 stadig som fredagens periode og udløser kampagnen — men lørdag kl. 23:30 gør ikke.",
          "Slutdatoen er en fast grænse — selv hvis et Happy Hour-tidsrum stadig løber, stopper kampagnen, så snart slutdatoen er passeret.",
          "Tiden læses fra iPadens ur, så sørg for, at enhedens tidszone og klokkeslæt er korrekte."
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
    "question": "Prioritet, kombination og stop efterfølgende kampagner forklaret",
    "keywords": [
      "prioritet",
      "kombinere kampagner",
      "stop efterfølgende kampagner",
      "kampagnekonflikt",
      "kampagne guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "Når flere kampagner opfyldes samtidig, styrer tre indstillinger rækkefølgen og samspillet:"
      },
      {
        "type": "list",
        "items": [
          "Prioritet: Lavere tal beregnes først. Træk for at ændre rækkefølgen på kampagnelisten.",
          "Kan kombineres med andre kampagner (slået til som standard): Når den er slået fra, låser en varerabat kun de linjer, den gav rabat på — andre varer kan stadig få senere varerabatter; en kurvrabat, der ikke kan kombineres, blokerer alle senere kurvrabatter.",
          "Stop efterfølgende kampagner, når denne udløses: Når kampagnen er anvendt, beregnes der ikke flere pengerabatter — men pointmultiplikatorer og gaveforslag påvirkes ikke."
        ]
      },
      {
        "type": "note",
        "text": "Senere kampagner beregnes af det allerede rabatterede beløb: 10 % rabat plus 5 % rabat er ikke 15 % rabat — den anden rabat gives af totalen efter den første. DingPOS leder heller aldrig efter den bedste kombination for kunden; rækkefølgen bestemmes udelukkende af dine prioriteter."
      },
      {
        "type": "p",
        "text": "Godt at vide: Hvis en rabat afrundes til nul, tæller den ikke som anvendt — og bruger ikke af en brugsgrænse."
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
    "question": "Kan jeg få kortbetaling integreret i DingPOS?",
    "keywords": [
      "betaling",
      "kortbetaling",
      "integration",
      "betalingsgateway",
      "kortterminal"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS er ikke en del af pengestrømmen i dag – betalingsmetoder er kun bogføringsbetegnelser, og selve betalingen sker via din eksisterende terminal eller betalingsapp."
      },
      {
        "type": "p",
        "text": "Om vi integrerer betalingshåndtering, afhænger af den reelle efterspørgsel. Hvis du har brug for det, så skriv til os, hvilken tjeneste du gerne vil have forbundet (hvilken udbyder, hvilken terminal), og hvordan du vil bruge den – vi prioriterer udviklingen efter antallet af henvendelser."
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
    "question": "Understøtter DingPOS e-faktura eller kvitteringsprinter?",
    "keywords": [
      "e-faktura",
      "faktura",
      "kvittering",
      "bonprinter",
      "kvitteringsprinter"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ikke endnu. E-faktura og kvitteringsprint kræver, at vi køber fakturamaskiner og kvitteringsprintere til test og udvikling – en betydelig udgift. Som lille team planlægger vi det, når brugerbasen vokser, og indtægterne er stabile."
      },
      {
        "type": "p",
        "text": "Hvis du har brug for det, så skriv til os med modellen på det udstyr, du bruger – vi prioriterer udviklingen efter antallet af henvendelser."
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
    "question": "Kan jeg bruge en stregkodescanner med DingPOS?",
    "keywords": [
      "stregkodescanner",
      "scanner",
      "bluetooth",
      "usb",
      "hardware",
      "stregkode"
    ],
    "content": [
      {
        "type": "p",
        "text": "Scanning af stregkoder med kameraet understøttes allerede, når du opretter varer. Fysiske scannere (USB / Bluetooth) understøttes endnu ikke officielt – som andre hardwarefunktioner kræver de, at vi køber udstyr til test og udvikling, og de planlægges, efterhånden som brugerbasen vokser."
      },
      {
        "type": "note",
        "text": "Søgefeltet i kassen matcher stregkoder, så en scanner i tastaturtilstand kan i teorien skrive ind i det og finde varer – men vi har ikke afprøvet det på rigtigt udstyr, så det er ikke officielt understøttet. Har du prøvet en scanner, der virker, så fortæl os modellen!"
      },
      {
        "type": "p",
        "text": "Hvis du har brug for det, så skriv til os – vi prioriterer udviklingen efter antallet af henvendelser."
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
    "question": "Findes der en månedlig afregningsrapport?",
    "keywords": [
      "månedsafslutning",
      "månedlig afregning",
      "afstemning",
      "månedsrapport",
      "leverandørgæld",
      "tilgodehavender"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der er endnu ingen dedikeret månedlig afregningsrapport, men alt, du skal bruge til afstemningen, findes allerede i appen:"
      },
      {
        "type": "list",
        "items": [
          "Vælg Denne måned i Statistik for at se månedens omsætning, modtagne betalinger, dækningsbidrag og fordeling på betalingsmåder.",
          "Leverandørindkøb på månedlige vilkår samles under Til betaling i Indkøb, hvor en hel måned kan afregnes på én gang.",
          "Salg på konto til kunder samles under Ordrer → Tilgodehavender, hvor en hel måned kan afregnes på én gang."
        ]
      },
      {
        "type": "p",
        "text": "Hvis du har brug for en månedlig afregningsrapport, du kan eksportere eller printe, så skriv til os med de felter, du skal bruge – vi prioriterer udviklingen efter antallet af henvendelser."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
