// Generated from en and the da translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync da`, then `npm run l10n -- dingpos apply da`.

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
      "opret butik",
      "land",
      "valuta",
      "moms"
    ],
    "content": [
      {
        "type": "p",
        "text": "Første gang du åbner DingPOS, hjælper en opsætningsguide dig med at oprette din butik i to trin på få minutter:"
      },
      {
        "type": "steps",
        "items": [
          "Vælg dit land eller din region. Øverst på listen står det land eller den region, som denne iPad befinder sig i, derefter de mest almindelige markeder; nedenunder finder du alle 175 lande og regioner, hvor DingPOS er tilgængelig i App Store. Du kan søge på navn på appens sprog eller på engelsk. Dit valg udfylder valuta, moms og momstilstand.",
          "Under Din butik skriver du butikkens navn, tilføjer eventuelt et logo og tjekker valuta, moms og momstilstand (inkl. moms / ekskl. moms). Valutaen er som standard dit lands valuta; tryk på den for at vælge blandt 130 valutaer. Momslisten viser dit lands standardmoms: omdøb en række, ret satsen, slet en række, eller tryk på Tilføj moms for at tilføje endnu en. En butik i British Columbia ændrer fx den første række til „GST 5“ og tilføjer en række „PST 7“."
        ]
      },
      {
        "type": "p",
        "text": "Tryk på Fortsæt, så ser du „Ding! Din butik er klar“. DingPOS opretter også to betalingsmetoder, Kontant og Kreditkort. Tilføj derefter dine produkter under Produkter, og begynd at sælge."
      },
      {
        "type": "note",
        "text": "Valutaen kan ikke ændres efter opsætningen; moms og momsvisning kan begge ændres senere under Indstillinger → Butiksoplysninger. I USA, Canada, Brasilien og Mikronesien afhænger satsen af stat, provins eller by, så feltet til momssats er tomt fra start, og du skal skrive den sats, du opkræver, for at komme videre. En sats skal være over 0: en butik, der ikke opkræver moms, sletter rækken. I Tyskland, Frankrig, Italien og andre europæiske lande indeholder listen også de reducerede satser, der er almindelige i detailhandlen, under det lokale momsnavn, fx „MwSt. 19%“ og „MwSt. 7%“ i Tyskland; reducerede satser anvendes ikke automatisk på nye produkter, så slå dem til for hvert enkelt produkt. Listen med 175 lande og valg af valuta kom i v3.2. Tidligere versioner havde 15 lande."
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
        "text": "Nej. DingPOS har intet kontosystem – download appen, og begynd at sælge. Dine produkter, ordrer og kundedata bliver på din iPad. De når kun til os, hvis du sender en supportrapport fra Indstillinger, som vedhæfter en kopi af dine butiksdata, så vi kan genskabe problemet."
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
        "text": "DingPOS understøtter i øjeblikket iPads med iPadOS 17.4 eller nyere og er primært designet til liggende format."
      },
      {
        "type": "p",
        "text": "iPhone og Mac understøttes ikke endnu. Hvis du ønsker, at vi understøtter en anden enhed, så skriv til os og fortæl, hvordan du vil bruge den."
      },
      {
        "type": "note",
        "text": "Alle iPads, der kan køre iPadOS 17, kan opdateres til 17.4, så ingen model er udelukket. En iPad, der stadig kører iPadOS 17.0–17.3, skal først have en systemopdatering under Indstillinger → Generelt → Softwareopdatering, før den kan installere DingPOS v3.5 eller nyere."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kan jeg ændre valuta, moms eller momstilstand efter opsætningen?",
    "keywords": [
      "valuta",
      "momstilstand",
      "ændre",
      "låst",
      "momssats",
      "moms",
      "inkl. moms",
      "ekskl. moms",
      "momsvisning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Moms kan ændres; valutaen kan ikke. Moms og momsvisning ændres begge på kortet Moms under Indstillinger → Butiksoplysninger, og en ændring gælder kun for senere salg: tidligere ordrer, returer og rapporter beholder de momsbeløb og den momsvisning, de blev registreret med."
      },
      {
        "type": "list",
        "items": [
          "Moms: tilføj en, omdøb den, ret satsen, eller slet den – se „Hvordan beregnes moms?“",
          "Momsvisning (inkl. moms / ekskl. moms): tryk på den anden tilstand, så viser bekræftelsen et eksempel med din første moms, fx „et produkt til NT$100 med 5 % moms: kunden betaler NT$105“. Priserne beholder deres tal, og en åben kurv genberegnes i den nye tilstand, når du går tilbage til kassen. Tilstanden kan skiftes siden v3.5; tidligere versioner låser den ved opsætningen.",
          "Efter et skift refunderer en fuld retur stadig den oprindelige ordre, som den var. En ombytning (med erstatningsvarer) på en ordre, der er solgt i den anden tilstand, er blokeret: skift tilstanden tilbage, eller returnér varerne og gå til betaling igen."
        ]
      },
      {
        "type": "p",
        "text": "Valutaen er låst, når opsætningen er afsluttet. Alle tidligere ordrer er registreret i den, så et skift undervejs ville ødelægge dine rapporter. Tjek den under trinnet Din butik i opsætningen: Den er som standard dit lands valuta, og du kan trykke på den for at vælge en anden."
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
      "japansk",
      "spansk",
      "flere sprog",
      "skift sprog",
      "appsprog"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS understøtter 32 sprog, blandt andet engelsk, traditionelt og forenklet kinesisk, japansk, koreansk, thai, vietnamesisk, indonesisk, malajisk, spansk (Latinamerika), portugisisk (Brasilien), fransk og tysk. Gå til Indstillinger → Enhedsvalg, og tryk på Appsprog. Det åbner DingPOS' side i appen Indstillinger på iPad'en, hvor du vælger sproget under Sprog."
      },
      {
        "type": "p",
        "text": "iOS lader ikke apps åbne sproglisten direkte, så det sidste tryk foregår i systemets Indstillinger. Sproget gælder kun for denne iPad."
      },
      {
        "type": "note",
        "text": "Andre sprog end engelsk og traditionelt kinesisk kom i v3.2. Hvis Sprog kun viser engelsk og kinesisk, skal du opdatere DingPOS fra App Store."
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
        "text": "Kassen kører ti kurve på samme tid. Tryk på \"+\" på kurvlinjen for at tilføje en, og tryk på en nummereret fane for at skifte."
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
      },
      {
        "type": "p",
        "text": "Rabatter, du ofte giver, kan gemmes: gå til Indstillinger → Loyalitet og kampagner → Rabatforvalg, tryk på Tilføj forvalg, og opret f.eks. „Medarbejderpris 20 % rabat“. Ved kassen har både varerabatten og kurvrabatten en menu under Rabatforvalg; når du vælger et forvalg, udfyldes rabattypen og værdien, præcis som hvis du selv havde indtastet dem, så det tæller stadig med i en medarbejders rabatloft. Rabatforvalg kom med v3.6 og kræver abonnementsniveauet Standard eller højere."
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
      "skat",
      "salgsmoms",
      "inkl. moms",
      "ekskl. moms",
      "flere momssatser",
      "gst",
      "pst",
      "sæt moms på pause",
      "kvittering"
    ],
    "content": [
      {
        "type": "p",
        "text": "Momsen beregnes automatisk ud fra de momssatser og den momsvisning, du har angivet under Indstillinger → Butiksoplysninger. Der er to momsvisninger, og kvitteringen viser momsbeløbet i begge tilfælde:"
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
        "text": "En butik kan opkræve flere momssatser, f.eks. GST 5 % plus PST 7 % i British Columbia, eller Japans forbrugsafgift på 10 % ved siden af den reducerede sats på 8 %:"
      },
      {
        "type": "list",
        "items": [
          "På kortet Moms trykker du på Tilføj moms og angiver et navn og en sats. Slå Anvend på nye produkter til, så får produkter, du tilføjer senere, som standard denne moms. Har butikken allerede en standardmoms, starter en nyoprettet moms med den kontakt slået fra; slå den til, hvis begge skal opkræves.",
          "Hvert produkt vælger selv, hvilken moms det opkræver, under Opkrævet moms i produktformularen – en bento kan f.eks. kun opkræve den reducerede sats på 8 %. Er to eller flere slået til, viser formularen produktets samlede sats.",
          "Tryk på en moms for at omdøbe den, ændre satsen eller bruge Anvend på alle produkter eller Fjern fra alle produkter for at tilføje den til eller fjerne den fra alle produkter på én gang. Når du sletter en moms, får du først at vide, hvor mange produkter der holder op med at opkræve den.",
          "I en butik med visning ekskl. moms viser kurvens totaler én række pr. moms, og ordredetaljerne viser én række pr. moms med satsen og det beløb, den blev opkrævet af."
        ]
      },
      {
        "type": "p",
        "text": "Vil du holde pause med at opkræve moms, så slå Opkræv moms fra øverst på kortet Moms: alle senere salg er uden moms, også varer, der allerede ligger i en kurv. Hvert produkt beholder sin moms, og når du slår kontakten til igen, genoprettes den, som den var."
      },
      {
        "type": "p",
        "text": "Fuld beregningsrækkefølge: varerabatter og kampagner → kurvrabat → indløsning af point → moms. Beløb afrundes opad ved halve til valutaens antal decimaler (f.eks. 0 for TWD, 2 for USD). Momsen beregnes én gang pr. moms på hver ordre, og dens decimaler følger Momsafrunding på kortet Moms: Almindelig afrunding, Rund ned eller Rund op. Nye butikker i Japan starter med Rund ned; andre butikker starter med Almindelig afrunding."
      },
      {
        "type": "note",
        "text": "Navngivne momssatser kom med v3.5. Når du opdaterer, bliver din momssats til en navngiven moms (f.eks. „GST 10 %“ i Australien), og alle eksisterende produkter opkræver den; en butik, hvis sats var 0, får ingen moms. Tidligere ordrer og returer beholder de momssatser og beløb, de blev registreret med; rapporterne tæller nu omsætning før moms, også for tidligere perioder (se „Hvad er forskellen på omsætning og modtagne betalinger?“)."
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
    "question": "Hvilke betalingsmetoder kan jeg bruge?",
    "keywords": [
      "betaling",
      "betalingsmetode",
      "betalingsmåde",
      "kontant",
      "kreditkort",
      "line pay",
      "byttepenge",
      "egen betalingsmetode",
      "på konto",
      "gebyrer"
    ],
    "content": [
      {
        "type": "p",
        "text": "En ny butik starter med to betalingsmetoder, Kontant og Kreditkort, navngivet på appens sprog under opsætningen. Under Indstillinger → Betalingsmetoder kan du tilføje alle andre metoder (f.eks. Apple Pay, LINE Pay eller en lokal mobilbetaling) og omarrangere dem. Tryk på en metode for at omdøbe den, f.eks. fra Kreditkort til „Kort (Square)“; Statistik tæller salg fra før omdøbningen med under det nye navn (siden v3.6). Slet betalingsmetode ligger nederst på redigeringsarket og spørger, før den sletter; tidligere ordrer beholder den betalingsmetode, de blev betalt med, og den sidste tilbageværende metode kan ikke slettes."
      },
      {
        "type": "p",
        "text": "Betalingsmetoder er bogføringsetiketter – DingPOS behandler ikke selve betalingerne. Tag imod kort- eller mobilbetaling med din eksisterende terminal eller app, og vælg derefter den tilsvarende etiket i DingPOS for at registrere den. Ved kontant betaling beregnes byttepengene automatisk, og hvor de mindste mønter ikke længere bruges, kan kontanter også afrundes – se „Kan jeg afrunde kontante betalinger til de mønter, der er i brug?“"
      },
      {
        "type": "p",
        "text": "Hvis din udbyder af kort- eller mobilbetaling tager et gebyr, kan du give betalingsmetoden en gebyrsats, så Statistik estimerer gebyrerne og det forventede nettomodtaget for hver metode – se „Kan DingPOS holde styr på gebyrer på kort- og mobilbetalinger?“"
      },
      {
        "type": "p",
        "text": "Hvis en stamkunde tager varerne med nu og betaler senere, så vælg På konto: salget registreres som et tilgodehavende og afregnes, når pengene kommer. Se „Kan stamkunder købe på konto og betale senere?“"
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
    "question": "Kan DingPOS holde styr på gebyrer på kort- og mobilbetalinger?",
    "keywords": [
      "transaktionsgebyr",
      "gebyr på kortbetaling",
      "gebyr",
      "gebyrsats",
      "nettomodtaget",
      "betalingsgebyr",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Under Indstillinger → Betalingsmetoder trykker du på en betalingsmetode (eller tilføjer en ny) og udfylder Transaktionsgebyr: en procentdel, et fast beløb pr. transaktion eller begge dele. Kontante metoder har intet gebyr. Fra da af registrerer hver betaling, der modtages med den metode, et gebyr, der estimeres med den sats, som gælder på det tidspunkt."
      },
      {
        "type": "p",
        "text": "Under Statistik får kortet Betalingsmåder en linje „Gebyr · Netto“ under hver metode med gebyr, og nederst på kortet vises de forventede gebyrer og den forventede nettomodtaget for hele perioden."
      },
      {
        "type": "list",
        "items": [
          "Skriv den sats, som din udbyder faktisk trækker. Opkræves der moms af gebyret, så tag den med – ved 3 % plus 5 % moms skriver du 3,15 %. Lad begge felter stå tomme, hvis der ikke er noget gebyr.",
          "En ændring af satsen gælder kun for senere betalinger. Gebyrer, der allerede er registreret, forbliver, som de var.",
          "„Procentgebyr returneres ved refusion“ er som standard slået til for butikker i Taiwan og Japan og slået fra andre steder, fordi udbydere som Stripe, Square og PayPal beholder deres gebyr ved en refusion; indstil den, så den passer til din udbyder. Den styrer returer og refunderede depositumbeløb på forudbestillinger: når den er slået til, returneres procentdelen, men det faste gebyr aldrig. En makulering eller en tilbageførsel af en afregning ignorerer indstillingen og tilbagefører hele det gebyr, der blev registreret, også det faste. Under alle omstændigheder får kunden det samme beløb tilbage.",
          "Betalinger, der blev modtaget, før metoden havde en sats, har intet gebyr: Statistik markerer dem „N uden gebyrsats“ og viser nettoen som „—“."
        ]
      },
      {
        "type": "note",
        "text": "Gebyrer er estimater ud fra den sats, du skriver. Din udbyders afregning viser det faktiske beløb. For at redigere gebyrsatser skal du have abonnementsniveauet Standard eller højere, og på Lite er felterne låst. Siden v3.4 kan alle abonnementsniveauer se de registrerede gebyrer under Statistik og i Resultat, så en sats, der er angivet i prøveperioden, fortsætter med at estimere på Lite. Tidligere versioner viste kun gebyrer fra Standard og opefter."
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
    "question": "Kan jeg afrunde kontante betalinger til de mønter, der er i brug?",
    "keywords": [
      "kontantafrunding",
      "afrunding",
      "afrund op",
      "afrund ned",
      "mønter",
      "øre",
      "cent",
      "0,05",
      "byttepenge",
      "canada",
      "australien",
      "schweiz",
      "danmark"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Canada, Australien, New Zealand, Schweiz, Danmark, Sverige, Norge, Belgien, Finland og Ungarn bruger ikke længere deres mindste mønter, så DingPOS afrunder kontanter til et beløb, du faktisk kan række over: en ordre på C$12,99 betalt kontant tages som C$13,00, og byttepengene beregnes ud fra C$13,00. Kort og andre betalinger uden kontanter forbliver nøjagtige."
      },
      {
        "type": "p",
        "text": "En ny butik, der oprettes i et af disse lande med landets valuta, får det slået til automatisk. Alle andre butikker kan slå det til med kortet Kontantafrunding nederst under Indstillinger → Betalingsmetoder: vælg, hvad kontanter skal afrundes til (Ingen afrunding eller 0,05, 0,10, 0,50 eller 1,00 i en valuta med øre; 5, 10, 50 eller 100 i en valuta uden, f.eks. TWD eller JPY), og for et trin, der kan ramme præcis midt imellem, om det rundes op eller ned. En ændring gælder kun senere betalinger."
      },
      {
        "type": "list",
        "items": [
          "Ved betaling vises „Kontant modtaget C$13,00“. Beder kunden om at betale det nøjagtige beløb, så tryk på Tag det nøjagtige beløb under betalingsmetoderne; det gælder kun det ene salg.",
          "Ordretotal, moms, omsætning, point og kundens forbrug ændres ikke; afrundingsforskellen ligger på betalingen, og kvitteringsskærmen og ordredetaljerne viser den under totalen, f.eks. „Kontantafrunding +C$0,01“.",
          "Kontante tilbagebetalinger ved returer, kontante depositummer og restbeløb ved afhentning på forudbestillinger, tillægsbetalinger ved ombytning og udestående på konto, der afregnes kontant, afrundes også; afregnes flere på én gang, afrundes hele partiet kun én gang.",
          "Makuleringer, tilbagebetalte depositummer på forudbestillinger og tilbageførte afregninger betaler præcis det tilbage, der blev registreret, uden at afrunde igen.",
          "Modtagne betalinger i Statistik viser, hvor meget af beløbet der var kontantafrunding, og det månedlige Resultat får en række Kontantafrunding, der tæller med i nettoresultatet. Afrunding tæller aldrig som omsætning."
        ]
      },
      {
        "type": "note",
        "text": "Schweiz runder altid ned efter sine regler for prisvisning – CHF 12,98 tages som CHF 12,95, og der er intet valg ved midt imellem. Belgien afrunder kun totaler over 0,05 €. Kontantafrunding findes på alle abonnementsniveauer, og en eksisterende butik tager imod kontanter præcis som før, indtil du slår det til."
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
      "hide-out-of-stock",
      "multiple-carts"
    ]
  },
  {
    "slug": "hide-out-of-stock",
    "category": "checkout",
    "since": "3.1",
    "question": "Kan kassen skjule produkter, der ikke er på lager?",
    "keywords": [
      "skjul",
      "ikke på lager",
      "udsolgt",
      "nul lager",
      "kasse",
      "produkt mangler",
      "kan ikke finde produkt"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå til Indstillinger → Enhedsvalg, og slå Skjul produkter uden lager til (slået fra som standard). Kassens produktvisning, kategorifilter og søgning (navn og stregkode) springer så alle produkter over, hvor lageret er 0 eller derunder. Kontakten virker med det samme, og du behøver ikke åbne appen igen."
      },
      {
        "type": "list",
        "items": [
          "Produkter, der ikke følger lager, vises altid. Et produkt med varianter skjules kun, når alle varianter er uden lager.",
          "Det påvirker kun kassen på denne iPad. Produktlisten viser stadig alle produkter.",
          "Når alle produkter er skjult, viser kassen „Alle produkter er udsolgt“ og fortæller, hvor du kan slå kontakten fra."
        ]
      },
      {
        "type": "note",
        "text": "Mens kontakten er slået til, kan denne iPad ikke finde produkter uden lager, så den kan hverken sælge ind i negativt lager eller tage imod en forudbestilling på dem – slå den fra, når du har brug for det. Hvis produkter ser ud til at være forsvundet fra kassen, er det som regel på grund af denne kontakt."
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
    "slug": "checkout-customer",
    "category": "checkout",
    "since": "3.4",
    "question": "Hvordan tilføjer eller skifter jeg kunden på et salg?",
    "keywords": [
      "kunde",
      "medlem",
      "tilknyt kunde",
      "skift kunde",
      "ny kunde",
      "betaling"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tilknyt kunden i kurven eller på betalingsskærmen: rækken Kunde under beløbet åbner kundelisten, hvis ingen er tilknyttet, og tilbyder Skift kunde eller Fjern kunde, hvis nogen er. Den kunde, du vælger ved betaling, er kurvens kunde og bliver på kurven, hvis du annullerer betalingen."
      },
      {
        "type": "list",
        "items": [
          "Når du skifter kunde, genberegnes niveaurabatter, fødselsdagstilbud og indløsning af point med det samme. Kontanter eller et depositum, du allerede har indtastet, bevares og kontrolleres mod det nye totalbeløb.",
          "Kan du ikke finde kunden? Tryk på Ny kunde øverst til højre i kundelisten – eller midt på skærmen, hvis intet matcher din søgning. Det, du søgte efter, udfylder formularen (cifre går til telefonnummeret, alt andet til navnet), og den nye kunde tilknyttes salget.",
          "Hvis du trykker på På konto, uden at der er tilknyttet en kunde, åbnes kundelisten, og På konto vælges, så snart du har valgt en kunde.",
          "Hvis den nye kunde får en manuel rabat til at overskride den aktive medarbejders rabatloft, skal en leder godkende først. Annullerer du godkendelsen, forbliver kunden uændret."
        ]
      },
      {
        "type": "note",
        "text": "Kunder er en del af abonnementsniveauet Standard. På Lite står der „Kunder — Standard-abonnement“ i rækken, og den åbner oplysninger om opgradering. Rækken Kunde på betalingsskærmen kom med v3.4; tidligere versioner tilknytter kun kunden i kurven."
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
        "text": "Gå til Ordrer, find ordren, åbn den, og tryk på Makulér. Arket „Makulere denne ordre?“ har et valgfrit felt til en årsag (op til 100 tegn). Tryk på Makulér øverst til højre, så er det gjort. Årsagen vises i ordredetaljerne og i aktivitetsloggen og kan ikke redigeres, når den er sendt."
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
      "kassere vare",
      "årsag til retur"
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
          "Refusionen svarer til det, kunden faktisk betalte for varen – vare- og kurvrabatter samt indløste point er allerede fordelt, så der refunderes ikke til listepris. Moms beregnes med den sats, der blev opkrævet på den oprindelige ordre.",
          "Erstatningsvarer sælges til dagens pris, uden kampagner eller rabatter.",
          "Ved et produkt, hvor du holder styr på lageret, kan hver returneret linje enten lægges tilbage på lager (Læg på lager, standard) eller kasseres (Kassér, siden v3.5). Læg på lager lægger varen tilbage i lageret. Kassér lader lageret være, som det er, og lægger varens kostpris fra salget oven i månedens Lagertab i Resultat. Refusion, moms og point er de samme i begge tilfælde.",
          "Point optjent på den oprindelige ordre trækkes tilbage, indløste point gives tilbage, og erstatningsvarer optjener deres egne point.",
          "Hvis den oprindelige ordre er et uafregnet salg på konto, skifter der ingen penge hænder: returen trækkes fra kundens tilgodehavende, og en dyrere erstatningsvare lægger differencen oven i det.",
          "En ordre kan returneres i flere omgange, men aldrig ud over det antal, der oprindeligt blev solgt. Når alt er kommet tilbage, svarer den returnerede moms, de returnerede rabatter og de returnerede point nøjagtigt til den oprindelige ordre. Kampagnernes brugsgrænser gives ikke tilbage ved en retur."
        ]
      },
      {
        "type": "p",
        "text": "Feltet Årsag er valgfrit og kan indeholde op til 100 tegn. Det vises i ordredetaljerne og i aktivitetsloggen og kan ikke redigeres, når det er sendt."
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
        "text": "Skift øverst på skærmen ved betaling fra Salg til Forudbestilling, vælg afhentningsdato, indtast depositum (alt fra 0 til hele beløbet, med genveje til 30 % / 50 % / fuldt beløb), og vælg, hvordan depositum betales. Tilknyt en kunde, så du kan kontakte vedkommende om afhentningen."
      },
      {
        "type": "list",
        "items": [
          "Lageret trækkes fra, når forudbestillingen oprettes, så det antal, der kan sælges, afspejler det med det samme. Det er et signal, ikke en reservation: Et senere salg kan stadig tage den sidste enhed. Varer, der ikke er på lager, går i minus og retter sig, når en indkøbsordre er modtaget.",
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
        "text": "Varer i en forudbestilling kan ikke redigeres. Ombestemmer kunden sig, skal du annullere og oprette en ny forudbestilling. Det kræver abonnementsniveauet Standard eller højere at oprette forudbestillinger. Efter en nedgradering kan eksisterende forudbestillinger stadig afhentes eller annulleres."
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
        "text": "Ja. Vælg På konto som betalingsmetode, så registreres salget som et tilgodehavende hos kunden. Et tilgodehavende skal have en skyldner, så uden en tilknyttet kunde åbner et tryk på På konto først kundelisten (siden v3.4; tidligere versioner beder dig tilknytte en kunde i kurven)."
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
          "En retur på en ordre, der endnu ikke er afregnet, udbetaler ingen penge: beløbet trækkes fra kundens tilgodehavende.",
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
      "checkout-customer",
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
        "text": "Ja. Detaljesiderne for ordrer, kunder og indkøbsordrer har hver notater – tryk på notatkortet for at redigere, op til 500 tegn, eller på den enkelte linje „Tilføj et notat“, så længe der endnu ikke er nogen. Du kan også skrive et notat i formularen, når du opretter en kunde eller en indkøbsordre."
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
      "variant",
      "specifikation"
    ],
    "content": [
      {
        "type": "p",
        "text": "På produktets redigeringsside under Variantvalgmuligheder trykker du på Tilføj valgmulighed for at tilføje en valgmulighed (fx „Farve“) og derefter på „+ Værdi“ for at tilføje hver af dens værdier (fx Rød, Blå). Med to eller flere valgmuligheder (fx Farve × Størrelse) opretter DingPOS automatisk alle kombinationer (Rød/S, Rød/M, Blå/S …)."
      },
      {
        "type": "p",
        "text": "Når et produkt har varianter, har hver kombination under Variantpris og lager sit eget lager, og dens pris følger produktets Pris: En kombination uden egen pris viser produktets pris i gråt og ændrer sig, når den gør, og et tal, du skriver, er kombinationens egen pris, vist i sort. Sæt fx prisen på en T-shirt til 390, og ændr kun L til 350: M og XL sælges for 390, og når produktets Pris senere bliver 420, følger M og XL med til 420, mens L bliver ved med at koste 350. ⓘ ved siden af kolonnen Pris rummer Brug produktets pris, som sætter alle kombinationer tilbage til at følge produktets pris. Produkter oprettet før v3.6 beholder hver variantpris som kombinationens egen pris, og produktets Pris er den laveste af dem. Kassen, produktlisten og produktdetaljerne viser et interval fra laveste til højeste pris, fx „NT$350–NT$390“, eller én pris, når alle kombinationer koster det samme; sortering efter pris bruger den laveste kombinationspris. Ved betaling åbnes en variantvælger, når du trykker på produktet, før det lægges i kurven."
      },
      {
        "type": "p",
        "text": "Kostpris fungerer på samme måde: En tom kostpris viser produktets kostpris i gråt og ændrer sig, når den gør, og et tal er kombinationens egen kostpris, vist i sort – også 0. Brug produktets kostpris i ⓘ ved siden af kolonnen Kostpris nulstiller alle kombinationers egne kostpriser på én gang."
      },
      {
        "type": "note",
        "text": "Navne på valgmuligheder og værdier må højst være 20 tegn lange, og mellemrum i begyndelsen og slutningen fjernes, når du gemmer. En værdi, du ikke har skrevet noget i, er ikke en kombination og springes over ved gemning. Gemning stopper, og feltet får en rød kant, når et navn på en valgmulighed er tomt, når alle værdier i en valgmulighed er tomme, eller når du tømmer en værdi, som produktet allerede har gemt; skriv den ind igen, eller fjern den ved at trykke på ×. Et produkt med varianter kan ikke bruge åben pris."
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
    "question": "Kan jeg skrive et produkts pris ind ved betaling, fx fragt eller en forhandlet vare?",
    "keywords": [
      "åben pris",
      "egen pris",
      "indtast pris",
      "fragt",
      "servicegebyr",
      "forhandlet pris",
      "markedspris",
      "procentgebyr"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja – gør det til et produkt med åben pris. Slå Åben pris til på produktets redigeringsside, og lad prisen stå tom. Kassen og produktlisten viser „Åben pris“ der, hvor prisen ellers ville stå. Ved betaling spørger produktet først om prisen, når du trykker på det. Skriv den, og tryk på Læg i kurv for at tilføje det til den pris."
      },
      {
        "type": "list",
        "items": [
          "0 er en gyldig pris (fx gratis fragt), mens et tomt felt ikke kan tilføjes. Skriv prisen på samme måde, som din butiks momstilstand prissætter alt andet.",
          "En kurv har én linje pr. produkt med åben pris: Trykker du på det igen, åbnes den linje, så du kan ændre prisen.",
          "Siden v3.3 skifter Beregn efter mellem Beløb og Procent. Ved 5 % bliver linjen 5 % af de øvrige varers subtotal (efter varerabatter, før kampagner, kurvrabat og indløsning af point), afrundet (halve op) til valutaens antal decimaler, og den følger kurven, når varer tilføjes, fjernes eller rabatteres. Kurvlinjen viser „5 % af kurven“, og ordren registrerer det beløb, det blev til.",
          "En linje med åben pris får ikke varerabat; ret prisen, hvis du vil tage mindre. Kurvrabatter, indløsning af point og kampagner (medmindre varen er udelukket fra dem) gælder stadig for den.",
          "Når Åben pris slås til, slås Udeluk fra kampagner også til, så et gebyr ikke bliver rabatteret og ikke tæller med i beløbsgrænser. Slå den fra igen, hvis en forhandlet vare skal deltage i kampagner.",
          "Når linjen er solgt, pålægges der moms, den giver point og tæller med i Statistik som enhver anden, og en retur refunderer den pris, der blev skrevet.",
          "Et produkt med varianter kan ikke bruge åben pris. Produkter med åben pris tilbydes aldrig som gaver eller betalte tilvalg og vises aldrig på listen over erstatningsvarer i en ombytning."
        ]
      },
      {
        "type": "note",
        "text": "Alle abonnementsniveauer har det, og det kræver aldrig en leders godkendelse at skrive prisen."
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
        "text": "Når den er slået til, trækker salg og forudbestillinger automatisk fra lageret; makuleringer, returneringer og annullerede forudbestillinger lægger varerne tilbage; og modtagelse af en indkøbsordre lægger til. Hver bevægelse registreres i en komplet oversigt. Ved 10 eller færre markeres lageret som lavt med orange i produktlisten, i kassen og i produktdetaljerne."
      },
      {
        "type": "p",
        "text": "Du kan ændre tallet manuelt på to måder:"
      },
      {
        "type": "list",
        "items": [
          "Optællingsrettelse: Ret lagerantallet på produktets formular, så det passer med det, du faktisk har talt op. Den indgår aldrig i resultatopgørelsen.",
          "Reguler lager (siden v3.5): Tryk på Reguler lager i produktdetaljerne, vælg Fjern eller Tilføj, antallet og en årsag som Udløbet/fordærvet, Beskadiget eller Smagsprøver og gaver. Kostprisen for det, du fjerner, tæller med i denne måneds lagertab i resultatopgørelsen – se „Hvordan registrerer jeg varer, der er udløbet, gået i stykker eller givet væk som smagsprøver?“"
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
    "question": "Hvordan registrerer jeg varer, der er udløbet, gået i stykker eller givet væk som smagsprøver?",
    "keywords": [
      "reguler lager",
      "lagerregulering",
      "lagertab",
      "svind",
      "afskrivning",
      "spild",
      "udløbet",
      "beskadiget",
      "smagsprøver",
      "butiksforbrug",
      "optælling"
    ],
    "content": [
      {
        "type": "p",
        "text": "Brug Reguler lager. For et produkt med lagerstyring trykker du på Reguler lager i produktdetaljerne, vælger Fjern eller Tilføj, angiver antallet med + og − (det starter på 1; tryk på tallet for at skrive det ind), vælger en årsag og tilføjer eventuelt et notat (op til 100 tegn). Skærmbilledet beregner lageret efter ændringen, og linjen under årsagen fortæller, om den indgår i resultatopgørelsen."
      },
      {
        "type": "list",
        "items": [
          "Årsager til at fjerne: Brugt i produktion, Udløbet/fordærvet, Beskadiget, Mistet eller stjålet, Medarbejderforbrug, Smagsprøver og gaver, Butiksforbrug og Andet. Årsager til at tilføje: Selvfremstillet, Fundet og Andet. Andet kræver et notat.",
          "Bortset fra Brugt i produktion tæller det, du fjerner, med sin kostpris på det tidspunkt i denne måneds lagertab i resultatopgørelsen. Det kommer efter dækningsbidraget og sænker nettoresultatet; dækningsbidrag og dækningsgrad ændres ikke. Brugt i produktion tager kun varerne af lageret, fordi et materiales kostpris allerede er med i kostprisen på det produkt, der er lavet af det.",
          "Fundet trækker det samme beløb fra lagertabet igen. Selvfremstillet og Andet under Tilføj lægger kun til lageret og indgår aldrig i resultatopgørelsen.",
          "En regulering tæller på den dag, du registrerer den. Den kan ikke tilbagedateres, redigeres eller slettes; for at rette en fejl registrerer du Fundet eller en regulering i den modsatte retning.",
          "Et produkt uden kostpris kan stadig reguleres, men resultatopgørelsen kan ikke sætte et beløb på det, og måneden noterer, hvor mange poster der ikke havde nogen kostpris."
        ]
      },
      {
        "type": "p",
        "text": "Når du ændrer lagerantallet på produktets redigeringsside, er det en optællingsrettelse: Lageret kommer til at passe med det, du faktisk har talt op, og den indgår aldrig i resultatopgørelsen. Listen over lagerbevægelser i Statistik filtrerer lagerreguleringer og optællingsrettelser hver for sig, og aktivitetsloggen viser hver reguleringsårsag og hvert notat."
      },
      {
        "type": "note",
        "text": "Reguler lager kræver abonnementsniveauet Standard eller højere. På Pro bliver medarbejdere, hvis rolle kræver godkendelse til Manuel lagerjustering, bedt om en leders PIN, når de bekræfter."
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
    "question": "Hvorfor kan lageret blive negativt?",
    "keywords": [
      "negativt",
      "lager",
      "udsolgt",
      "blokere",
      "justere",
      "minus på lager"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det er med vilje: Betalingen bliver aldrig blokeret af for lidt lager. Den første regel ved en kasse i drift er, at kunden aldrig skal vente – et forkert tal på papiret kan rettes bagefter, men et afbrudt salg er tabt for altid."
      },
      {
        "type": "p",
        "text": "Negativt lager betyder som regel, at en genopfyldning ikke blev registreret, eller at en forudbestilt vare endnu ikke er kommet (forudbestillinger trækker fra lageret, når de oprettes). Registrér genopfyldning ved at modtage en indkøbsordre, så retter tallet sig selv. Ret forskelle fra en lageroptælling ved at ændre lagerantallet på produktets redigeringsside (en optællingsrettelse); for varer, der er gået i stykker, udløbet eller givet væk, registrerer du årsagen med Reguler lager. Begge dele gemmes i bevægelsesoversigten."
      },
      {
        "type": "note",
        "text": "Hvis kassen ikke kan finde et produkt med 0 på lager, så tjek, om Skjul produkter uden lager er slået til under Indstillinger → Enhedsvalg: Mens den er det, kan denne iPad ikke lægge produkter uden lager i en kurv."
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
        "text": "Indkøb i sidemenuen bruges til at administrere leverandører og indkøbsordrer. For hver leverandør kan du gemme navn, kontaktperson, telefonnummer, adresse og standardbetalingsbetingelser (Betaling ved modtagelse eller Månedskredit)."
      },
      {
        "type": "steps",
        "items": [
          "Tryk på Nyt indkøb, vælg leverandøren, og tilføj produkter, antal og enhedskostpriser (udfyldt på forhånd med hvert produkts nuværende kostpris). Du kan også tilføje en fragtomkostning. For varer, der endnu ikke er oprettet som produkter, trykker du på Nyt produkt i vælgeren Tilføj produkt; det nye produkt kommer direkte ind på indkøbsordren som en linje. Hvis leverandøren endnu ikke er oprettet, trykker du på Tilføj leverandør øverst til venstre på leverandørlisten – den nye leverandør kommer direkte tilbage til indkøbsordren.",
          "En kladde rører aldrig lager eller skyldige beløb – du kan frit redigere eller slette den.",
          "Når varerne kommer, trykker du på Modtag lager: lagerbeholdningen for lagerstyrede produkter stiger, og indkøbsordren får sit nummer og låses. Som standard opdaterer modtagelsen også hvert produkts kostpris til denne enhedskostpris; slå Synkronisér produktets kostpris fra på indkøbsordren for at lade kostpriserne være uændrede. Under den fordeler Medregn fragt i kostprisen (slået til for nye indkøbsordrer) fragtomkostningen på linjerne efter beløb, så den kostpris, der skrives til hvert produkt, indeholder dets andel: mel 10 × $30, smør 1 × $60 og $25 i fragt giver mel en kostpris på $32 og smør $64."
        ]
      },
      {
        "type": "p",
        "text": "Betalingsbetingelserne afgør, hvad der sker derefter: Ordrer med Betaling ved modtagelse markeres som betalt, mens ordrer med Månedskredit forbliver ubetalte under Til betaling, hvor du kan afregne dem pr. leverandør – én ordre, denne måned eller det hele."
      },
      {
        "type": "p",
        "text": "Materialer, du ikke sælger, som mel eller emballage, kan indkøbes på samme måde: Opret dem som produkter, der ikke er til salg – se „Kan jeg tilføje materialer som mel eller emballage som produkter?“"
      },
      {
        "type": "note",
        "text": "Indkøb kræver abonnementsniveauet Standard eller højere. En leverandør med ubetalte modtagne ordrer kan ikke slettes."
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
    "question": "Kan jeg tilføje materialer som mel eller emballage som produkter?",
    "keywords": [
      "ikke til salg",
      "råvarer",
      "ingredienser",
      "materialer",
      "emballage",
      "forbrugsvarer",
      "sælg i kassen",
      "indkøb",
      "kostpris"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Slå Sælg i kassen fra på produktets redigeringsside under fotoet (den er slået til som standard), så er produktet ikke til salg: Det behøver ingen pris, beholder sin kostpris, stregkode, lager og varianter, og produktlisten viser „Ikke til salg“ der, hvor prisen ellers ville stå."
      },
      {
        "type": "list",
        "items": [
          "Et produkt, der ikke er til salg, vises aldrig i kassens produktgitter, kategorier, søgning eller stregkodescanning og kan ikke være en gave, et tilvalg, målet for en kampagne eller en erstatningsvare ved en ombytning. En kategori, der kun indeholder produkter, der ikke er til salg, udelades fra kassens kategorilinje.",
          "Når butikken har produkter, der ikke er til salg, vises en filterknap øverst til højre i Produkter: Vælg Alle produkter, Til salg eller Ikke til salg, sammen med søgning og kategorier.",
          "Indkøbsordrer, modtagelse, Synkronisér produktets kostpris og ubetalte regninger fungerer præcis som for andre produkter, så et materiales indkøbspris og lager kan registreres via Indkøb.",
          "Når du sælger andre produkter, trækkes der ikke fra materialets lager. Når du bruger noget af det, registrerer du en fjernelse med Reguler lager i produktdetaljerne: Brugt i produktion for det, der er gået i produkter, og Butiksforbrug for ting som papirposer eller rengøringsmidler.",
          "Du kan til enhver tid slå det til igen, og prisen og skatten er der stadig. Ordrer og rapporter, der allerede er lavet, påvirkes ikke."
        ]
      },
      {
        "type": "p",
        "text": "Sådan når kostprisen resultatopgørelsen: Indkøb tæller ikke direkte med der. For et produkt, der er lavet af materialet, lægger du kostprisen på det produkt, og den trækkes fra, når produktet sælges. Forbrugsvarer, der ikke indgår i noget produkts kostpris, registreres som Butiksforbrug, når de bruges, hvis deres lager følges, eller som en engangsudgift, hvis det ikke gør. Registrér ikke de samme penge på begge måder, ellers tælles de med to gange."
      },
      {
        "type": "note",
        "text": "Produkter, der ikke er til salg, findes på alle abonnementsniveauer; indkøb, lagerstyring og Reguler lager kræver abonnementsniveauet Standard eller højere."
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
    "question": "Hvad er forskellen på omsætning og modtagne betalinger?",
    "keywords": [
      "omsætning",
      "modtagne betalinger",
      "statistik",
      "dækningsbidrag",
      "fra omsætning til dækningsbidrag",
      "afstemning",
      "depositum",
      "salg på konto",
      "moms"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omsætning tæller den dag, varerne blev overdraget, efter alle rabatter og før moms; Modtagne betalinger tæller den dag, pengene kom ind, og er de penge, du har modtaget, inklusive moms. I en butik, der opkræver moms, ligger Modtagne betalinger derfor højere end Omsætning med momsbeløbet, også for ordrer, der betales ved kassen. De to tal står som de to første felter i første række i Statistik ved siden af Dækningsbidrag, Ordrer og Gennemsnitlig ordre."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Rækker med felter i Statistik, hvor Omsætning og Modtagne betalinger står side om side i første række"
      },
      {
        "type": "h2",
        "text": "Når omsætning og modtagne betalinger er forskellige"
      },
      {
        "type": "p",
        "text": "Hvis en butik med priser inklusive moms f.eks. sælger for NT$1,050 inkl. 5 % moms, og kunden betaler ved kassen, er Omsætning NT$1,000, og Modtagne betalinger er NT$1,050. Ud over moms skilles de to tal ad i disse situationer:"
      },
      {
        "type": "list",
        "items": [
          "Salg på konto: varerne forlader butikken i dag og tæller med i dagens Omsætning; pengene tæller med i Modtagne betalinger den dag, ordren afregnes.",
          "Forudbestilling: depositummet tæller med i Modtagne betalinger, når det betales; Omsætning indregnes fuldt ud på afhentningsdatoen.",
          "Fortabte depositummer: når en kunde annullerer en forudbestilling, og du beholder depositummet, var det allerede talt med i Modtagne betalinger, da det blev betalt. Statistik viser det særskilt som Fortabte depositummer, og det tæller aldrig som Omsætning.",
          "Makulering af en tidligere ordre: de refunderede penge tæller med i Modtagne betalinger på makuleringsdagen, så den dags Modtagne betalinger kan være negative. Selve den makulerede ordre tælles på sin salgsdato og vises i undertitlen på feltet Ordrer.",
          "Kontantafrunding: det, som Kontantafrunding lægger til eller trækker fra ordrens total, tæller med i Modtagne betalinger, aldrig i Omsætning."
        ]
      },
      {
        "type": "p",
        "text": "Når et af beløbene ikke er nul, viser undertitlen på feltet Modtagne betalinger Kontantafrunding eller Fortabte depositummer."
      },
      {
        "type": "h2",
        "text": "Moms og detaljer om felterne"
      },
      {
        "type": "p",
        "text": "Momsen, der skiller Omsætning og Modtagne betalinger, står i Fra omsætning til dækningsbidrag, som du åbner fra bunden af feltet Dækningsbidrag. Den viser Omsætning (inkl. moms), Skat og Omsætning (ekskl. moms). Butikker i Australien, Storbritannien, New Zealand og Singapore ser deres lokale momsnavn der, f.eks. Omsætning (inkl. GST), GST og Omsætning (ekskl. GST)."
      },
      {
        "type": "p",
        "text": "Hvis du vil se den opkrævede moms til indberetning, så åbn Momsrapport fra feltet Moms."
      },
      {
        "type": "p",
        "text": "ⓘ på felterne Omsætning, Modtagne betalinger og Ordrer forklarer disse regler i appen, også de makulerede ordrer, der står i undertitlen på feltet Ordrer."
      },
      {
        "type": "h2",
        "text": "Afstemning og aflæsning af salg"
      },
      {
        "type": "p",
        "text": "Til afstemning sammenligner du Modtagne betalinger med kassebeholdningen og din kortterminal. Kortet Betalingsmåder i Statistik viser én række pr. betalingsmåde, og salg, der er foretaget, før du omdøber en betalingsmåde, tælles under det nye navn. For at se, hvor meget du har solgt i en periode, ser du på Omsætning. Returer reducerer Omsætning på returdagen."
      },
      {
        "type": "note",
        "text": "Omsætning før moms kom i v3.5, og tidligere perioder blev genberegnet på samme måde, så en butik, der opkræver moms, ser lavere Omsætning end før opdateringen. Det er en rettelse: Tidligere versioner medregnede moms i Omsætning, og i butikker med priser eksklusive moms talte den opkrævede salgsmoms endda med som Omsætning."
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
    "question": "Hvilke tidsperioder kan jeg se rapporter for?",
    "keywords": [
      "statistik",
      "rapporter",
      "tidsperiode",
      "denne uge",
      "denne måned",
      "i år",
      "brugerdefineret periode",
      "produktrangliste",
      "sammenlign"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vælg I dag, I går, Denne uge, Denne måned, I år eller Samlet i periodelinjen øverst i Statistik, eller tryk på Brugerdefineret for at vælge en vilkårlig start- og slutdato. Alle kort på siden følger den periode, du vælger. Denne uge følger enhedens første ugedag, Denne måned begynder den 1., I år begynder den 1. januar, Samlet starter fra din butiks første transaktion, og hver mulighed viser de datoer, den dækker."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Periodelinjen øverst i Statistik med Brugerdefineret valgt og datovinduet åbent til valg af start- og slutdato"
      },
      {
        "type": "h2",
        "text": "Vælg en brugerdefineret periode"
      },
      {
        "type": "p",
        "text": "Brug Brugerdefineret, når du har brug for en periode uden for de faste kalenderperioder, f.eks. en momsperiode på to måneder eller et kvartal."
      },
      {
        "type": "steps",
        "items": [
          "Åbn Statistik, og tryk på Brugerdefineret i periodelinjen.",
          "Vælg start- og slutdato i vinduet.",
          "Bekræft datoerne for at opdatere rapporten."
        ]
      },
      {
        "type": "p",
        "text": "Feltet Moms og momsrapporten følger også den valgte periode, så en periode til indberetning, som du sætter med Brugerdefineret, opdaterer begge; se den tilknyttede artikel om momsrapporten for detaljer. Til højre i periodelinjen kan du trykke på Sammenlign for at se den valgte periode ved siden af den foregående eller samme periode sidste år; se den tilknyttede artikel om avancerede rapporter for detaljer."
      },
      {
        "type": "h2",
        "text": "Felter og kort på siden"
      },
      {
        "type": "p",
        "text": "Under periodelinjen viser Statistik to rækker med nøgletalsfelter efterfulgt af grafer og oversigtskort i par, med Lige nu nederst."
      },
      {
        "type": "list",
        "items": [
          "Første række: Omsætning, Modtagne betalinger, Dækningsbidrag, Ordrer og Gennemsnitlig ordre.",
          "Anden række: Rabatter i alt, Moms, Nettoresultat, Produkter uden kostpris og Betjente kunder.",
          "Første par: tendensgrafen ved siden af Kostpris og dækningsbidrag.",
          "Andet par: Produktrangliste ved siden af Andel pr. kategori.",
          "Tredje par: Betalingsmåder ved siden af kampagnekortet.",
          "Nederste kort: Lige nu."
        ]
      },
      {
        "type": "p",
        "text": "To felter i anden række vises kun i bestemte tilfælde. Moms, tilføjet i v3.6, vises kun for en butik med moms, eller når den valgte periode indeholder salg foretaget med moms. Nettoresultat vises kun, når perioden er Denne måned eller dækker præcis én hel måned."
      },
      {
        "type": "note",
        "text": "Hvis en periode ikke har ordrer, viser Statistik kun periodelinjen, en besked og Lige nu."
      },
      {
        "type": "h2",
        "text": "Sådan læser du graferne og Produktrangliste"
      },
      {
        "type": "p",
        "text": "Menuen øverst til højre på tendensgrafen skifter den mellem Omsætning, Ordrer, Gennemsnitlig ordre og Betjente kunder. Grafen har også et skift mellem Tendens og Ugedag × time; se den tilknyttede artikel om avancerede rapporter for den visning. Ved siden af viser grafen Kostpris og dækningsbidrag hver periodes produktkostpris og dækningsbidrag stablet i én søjle. En enkelt dag vises pr. time, mens længere perioder grupperer data i dage, uger, måneder eller år afhængigt af længden."
      },
      {
        "type": "p",
        "text": "Tryk og hold på tendensgrafen, Kostpris og dækningsbidrag eller Betalingsmåder for at få et aflæsningskort for ét tidsinterval. Når Sammenlign er slået til, viser tendensgrafens aflæsningskort denne periodes tal og sammenligningsperiodens side om side. Træk til venstre eller højre for at flytte dig mellem intervallerne; stryg op eller ned på grafen for at rulle siden som sædvanligt."
      },
      {
        "type": "p",
        "text": "Produktrangliste viser de 5 bedst sælgende produkter i den valgte periode. Tryk på kortet eller Se alle for at vise alle produkter solgt i perioden, rangeret efter antal efter returer. Et produkt med varianter vises som én linje pr. variant."
      },
      {
        "type": "note",
        "text": "Kalenderperioder kom i v2.4; tidligere versioner havde glidende intervaller (I dag / 7 dage / 30 dage / Samlet). Hvis du stadig ser dem, så opdatér DingPOS fra App Store."
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
    "question": "Hvad viser de avancerede rapporter?",
    "keywords": [
      "avancerede rapporter",
      "statistik",
      "sammenlign",
      "periodesammenligning",
      "ugedag × time",
      "langsomt sælgende varer",
      "udsving",
      "andel pr. kategori",
      "lagerværdi",
      "genkøbsrate",
      "heatmap",
      "point"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avancerede rapporter er ikke en separat skærm; de sidder i Statistik og følger den periode, du vælger øverst. De tilføjer periodesammenligninger, et heatmap over ugedag og time, Langsomt sælgende varer, Udsving, medlemmers genkøbsrate, Andel pr. kategori og et afsnit Lige nu for lager og point. Alle abonnementsniveauer inkluderer dem alle, og de forbliver åbne, efter at prøveperioden er slut."
      },
      {
        "type": "h2",
        "text": "Sammenlign"
      },
      {
        "type": "p",
        "text": "Sammenlign står til højre i periodelinjen i Statistik og måler den valgte periode mod en tidligere."
      },
      {
        "type": "steps",
        "items": [
          "Åbn Statistik fra sidepanelet.",
          "Vælg en periode øverst.",
          "Tryk på Sammenlign til højre i periodelinjen.",
          "Vælg en sammenligning i menuen."
        ]
      },
      {
        "type": "p",
        "text": "De mulige valg afhænger af den periode, du vælger:"
      },
      {
        "type": "list",
        "items": [
          "Ingen slår sammenligning fra.",
          "Sidste uge sammenligner en enkelt dag med samme dag i sidste uge eller denne uge med sidste uge.",
          "Sidste måned sammenligner denne måned med sidste måned.",
          "Sidste år sammenligner i år med sidste år eller den valgte periode med samme periode sidste år.",
          "Forrige sammenligner en brugerdefineret periode med det samme antal dage lige før den."
        ]
      },
      {
        "type": "p",
        "text": "Når en sammenligning er aktiv, tilføjer Statistik ændringen og sammenligningsperiodens tal til alle felter undtagen Moms, Nettoresultat og Produkter uden kostpris. Omsætning, Modtagne betalinger, Dækningsbidrag, Ordrer, Gennemsnitlig ordre, Rabatter i alt og Betjente kunder viser hver en sammenligningslinje som “▼ 3 % ift. Sidste måned”."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Statistik for Denne uge med Sammenlign sat til Sidste uge, med sammenligningslinjen og første række af felter, hvor hvert felt har sin ændring og sit sammenligningstal under sig",
        "caption": "Tryk på en sammenligningslinje under et felt for at åbne Periodesammenligning og se begge perioders tal."
      },
      {
        "type": "p",
        "text": "Ændringen i Rabatter i alt er altid grå, fordi mere rabat ikke i sig selv er godt eller dårligt. Tryk på en sammenligningslinje for at åbne Periodesammenligning, som viser begge perioders tal. Tendensgrafen får en lysere linje for sammenligningsperioden. Mens en periode stadig løber, afkortes sammenligningsperioden på samme tidspunkt."
      },
      {
        "type": "h2",
        "text": "Ugedag × time"
      },
      {
        "type": "p",
        "text": "Skift tendensgrafens overskrift fra Tendens til Ugedag × time for at se et heatmap over syv dage og 24 timer. Jo mørkere en celle er, jo mere har du solgt i den time. Du kan skifte heatmappet mellem omsætning og ordrer. Når en sammenligning er slået til under Sammenlign, viser heatmappet også, hvilke timer der voksede, og hvilke der faldt."
      },
      {
        "type": "h2",
        "text": "Langsomt sælgende varer"
      },
      {
        "type": "p",
        "text": "Skift rangeringskortets overskrift til Langsomt sælgende varer for at vise produkter fra færrest til flest salg. Hver række viser produktets nuværende lager og datoen for seneste salg. Produkter, der aldrig er solgt, er markeret Aldrig solgt, og et produkt med varianter får én linje pr. variant. Som standard vises kun produkter på lager."
      },
      {
        "type": "h2",
        "text": "Udsving"
      },
      {
        "type": "p",
        "text": "Skift rangeringskortets overskrift til Udsving for at se de 3 produkter, hvis omsætning steg mest, og de 3, der faldt mest, i forhold til sammenligningsperioden. Hver række viser begge perioders omsætning og forskellen, og hver variant sammenlignes med sig selv."
      },
      {
        "type": "p",
        "text": "Vælg først en periode under Sammenlign. Når Sammenlign er sat til Ingen, eller perioden er Samlet, beder kortet dig vælge en sammenligningsperiode. Tryk på kortet eller Se alle for at åbne hele listen Produktudsving, delt i Stigende og Faldende."
      },
      {
        "type": "h2",
        "text": "Genkøbsrate"
      },
      {
        "type": "p",
        "text": "Sidste linje i feltet Betjente kunder viser genkøbsraten som “Genkøbsrate … · … medlemmer købte igen”. Den viser andelen af medlemmer, der har købt i den valgte periode og i alt har købt to eller flere gange. Når en sammenligning er slået til under Sammenlign, angiver en linje under den ændringen i procentpoint og sammenligningsperiodens rate."
      },
      {
        "type": "h2",
        "text": "Andel pr. kategori"
      },
      {
        "type": "p",
        "text": "Andel pr. kategori viser hver kategoris omsætning og andel, den største først, efter hvert produkts nuværende kategori. Produkter uden kategori står under Uden kategori, og rækkerne summerer præcis til Omsætning."
      },
      {
        "type": "h2",
        "text": "Lige nu"
      },
      {
        "type": "p",
        "text": "Lige nu viser tre detaljer om lager og point:"
      },
      {
        "type": "list",
        "items": [
          "Lagerværdi, beregnet som nuværende lager × nuværende kostpris.",
          "Alle lagerbevægelser i den valgte periode.",
          "De point, kunderne har, men ikke har indløst, sammen med det højeste beløb, de kan trække fra."
        ]
      },
      {
        "type": "p",
        "text": "Lagerværdi og uindløste point er aktuelle saldi, så en ændring af perioden øverst ændrer dem ikke."
      },
      {
        "type": "h2",
        "text": "Abonnementsniveauer og tilladelser"
      },
      {
        "type": "p",
        "text": "Siden v3.4 er alle avancerede rapporter åbne på alle abonnementsniveauer, også Lite, og de forbliver åbne, efter at prøveperioden er slut. Udsving blev også tilføjet i v3.4. Tidligere versioner viste avancerede rapporter kun på Pro med en lille lås på de andre niveauer; hvis du stadig ser låsene, så opdatér DingPOS fra App Store."
      },
      {
        "type": "p",
        "text": "Lite holder ikke styr på lager eller loyalitetspoint, men Lige nu viser stadig den lagerværdi og de uindløste point, din butik allerede har (for eksempel fra prøveperioden), eller nul."
      },
      {
        "type": "note",
        "text": "Medarbejdere ser avancerede rapporter under tilladelsen Statistik; lagerværdibeløbene kræver også tilladelsen Kostpris og fortjeneste."
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
    "question": "Hvordan opgøres dækningsbidraget, hvis jeg ikke har indtastet kostpriser?",
    "keywords": [
      "kostpris",
      "fortjeneste",
      "dækningsbidrag",
      "dækningsgrad",
      "bruttofortjeneste",
      "rapporter",
      "ikke opgjort",
      "mangler kostpris",
      "produkter uden kostpris",
      "fra omsætning til dækningsbidrag"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostpris er et valgfrit felt, så produkter uden kostpris holdes uden for dækningsbidraget, mens deres omsætning stadig tæller fuldt ud. Feltet Produkter uden kostpris i Statistik viser, hvor mange produkter solgt eller returneret i perioden der ikke har en kostpris, f.eks. “12 produkter”. En kostpris på 0 tæller som en kostpris og står ikke på listen; når alle produkter har en kostpris, står der i feltet “0 produkter · komplette kostprisdata”."
      },
      {
        "type": "h2",
        "text": "Find produkter uden kostpris"
      },
      {
        "type": "p",
        "text": "Tryk på feltet Produkter uden kostpris eller på Se produkter i Statistik for at åbne Produkter uden kostpris. Arket viser produkterne rangeret fra højeste til laveste efter den omsætning, der er holdt uden for dækningsbidraget."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Arket Produkter uden kostpris med produkter rangeret efter den omsætning, der er holdt uden for dækningsbidraget"
      },
      {
        "type": "steps",
        "items": [
          "Tryk på en række i Produkter uden kostpris for at åbne produktet.",
          "Tryk på Rediger, og angiv kostprisen i Kostpris (valgfri).",
          "Gå tilbage til Produkter uden kostpris, så du kan se rækken markeret Kostpris tilføjet."
        ]
      },
      {
        "type": "p",
        "text": "Et produkt med varianter markeres først som Kostpris tilføjet, når hver variant, der er solgt uden kostpris, har en – enten sin egen eller produktets kostpris, som den følger. Siden v3.6 kan et indkøb også fordele sin fragt på den kostpris, det skriver til produkterne, når Medregn fragt i kostprisen er slået til."
      },
      {
        "type": "note",
        "text": "En kostpris, du tilføjer, påvirker kun senere salg. Salg, der allerede er foretaget, genberegnes ikke."
      },
      {
        "type": "h2",
        "text": "Kostpris og moms"
      },
      {
        "type": "p",
        "text": "På produktformularen hedder kostprisfeltet Kostpris (valgfri) i alle butikker. I en butik med moms vises et ⓘ ved siden af Kostpris (valgfri) og viser, hvordan moms indgår, afhængigt af Momsfradrag:"
      },
      {
        "type": "list",
        "items": [
          "Momsfradrag er slået til: angiv kostprisen før moms, du kan få fradrag for. Noten under ⓘ lyder: “Angiv kostprisen uden fradragsberettiget moms, som registreres som indgående moms. Moms, der ikke er fradragsberettiget, er en del af kostprisen.”",
          "Momsfradrag er slået fra: angiv det, du betalte, minus moms, du kan få fradrag for. Noten under ⓘ lyder: “Moms, du kan trække fra, indgår ikke i kostprisen. Moms, du ikke kan trække fra, gør. Hvis du trækker indgående moms fra, skal du slå Momsfradrag til i Butiksoplysninger.”"
        ]
      },
      {
        "type": "p",
        "text": "Hvis din butik indberetter indgående moms, så slå Momsfradrag til i Butiksoplysninger."
      },
      {
        "type": "h2",
        "text": "Sådan læser du opdelingen af dækningsbidrag"
      },
      {
        "type": "p",
        "text": "Dækningsbidrag er omsætningen efter alle rabatter (vare- og kurvrabatter, kampagner, indløsning af point) og før moms, minus kostpris. Dækningsgraden er dækningsbidraget ÷ omsætningen for produkter med en kostpris, så produkter uden kostpris ikke trækker den ned. En retur tager på returdagen det dækningsbidrag tilbage, som varerne havde givet."
      },
      {
        "type": "p",
        "text": "Tryk på feltet Dækningsbidrag i Statistik for at åbne Fra omsætning til dækningsbidrag, som trækker fra række for række:"
      },
      {
        "type": "list",
        "items": [
          "Omsætning (inkl. moms)",
          "Skat",
          "Omsætning (ekskl. moms)",
          "Omsætning uden kostpris",
          "Produkternes kostpris",
          "Dækningsbidrag og dækningsgrad"
        ]
      },
      {
        "type": "p",
        "text": "Rækkerne summerer præcis til feltet Dækningsbidrag. Butikker i Australien, Storbritannien, New Zealand og Singapore ser det lokale momsnavn på momsrækkerne, f.eks. Omsætning (inkl. GST)."
      },
      {
        "type": "note",
        "text": "Denne beregning af dækningsbidrag kom i v3.1. Tidligere versioner trak kun manuelle varerabatter fra og regnede moms i prisen med som fortjeneste, så efter en opdatering viser perioder med rabatter eller moms i prisen et lavere dækningsbidrag. Det er en rettelse, ikke tabte data."
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
    "question": "Hvordan ser jeg, hvor meget jeg faktisk tjener hver måned?",
    "keywords": [
      "resultatopgørelse",
      "resultat",
      "nettoresultat",
      "dækningsbidrag",
      "månedligt resultat",
      "faste udgifter",
      "driftsresultat",
      "P&L"
    ],
    "content": [
      {
        "type": "p",
        "text": "Åbn Resultat under Statistik i sidepanelet for at se hver måneds nettoresultat og hvordan det beregnes. Listen går fra den nyeste måned til den ældste og starter fra din første måned med aktivitet; den aktuelle måned er markeret I gang, og hvert års overskrift lægger nettoresultatet for årets afsluttede måneder sammen. Den første række, Alle udgifter, åbner alle udgifter uanset måned."
      },
      {
        "type": "h2",
        "text": "Månedlig opdeling"
      },
      {
        "type": "steps",
        "items": [
          "Åbn Resultat under Statistik i sidepanelet.",
          "Tryk på en måned for at se, hvordan dens nettoresultat beregnes."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Månedsside i Resultat med meddelelsen I gang, nettoresultatet og hele opdelingen fra omsætning til udgifter"
      },
      {
        "type": "p",
        "text": "Månedssiden viser hver linje fra salg til nettoresultat i rækkefølge. Rækkerne fra omsætning til dækningsbidrag har de samme navne og tal som Fra omsætning til dækningsbidrag i Statistik."
      },
      {
        "type": "list",
        "items": [
          "Omsætning (inkl. moms), Skat og Omsætning (ekskl. moms): omsætning inklusive moms, momsbeløbet og omsætning efter alle rabatter og før moms, talt på den dag, varerne blev overdraget. Butikker i Australien, Storbritannien, New Zealand og Singapore ser det lokale momsnavn.",
          "Omsætning uden kostpris: trækkes fra før produkternes kostpris og vises kun, når den ikke er nul.",
          "Produkternes kostpris: kostprisen for det, der er solgt, ud fra kostpriserne på dine produkter.",
          "Dækningsbidrag: vises med dækningsgraden.",
          "Omsætning uden kostpris: lægges til igen efter dækningsbidraget, når den ikke er nul.",
          "Lagertab: vises kun, når måneden har et; kostprisen for det, du har fjernet fra lageret med Reguler lager som udløbet, beskadiget, givet væk og lignende, plus kasserede returer. Det kommer efter dækningsbidraget. Se “Hvordan registrerer jeg varer, der er udløbet, gået i stykker eller givet væk som smagsprøver?” Måneden har også et afsnit Lagertab, som summerer det efter årsag.",
          "Transaktionsgebyrer (est.): de gebyrer, der estimeres ud fra satserne på dine betalingsmåder.",
          "Fortabte depositummer: vises kun, når de ikke er nul; depositummer, du beholdt, da en forudbestilling blev annulleret.",
          "Kontantafrunding: vises kun, når den ikke er nul; det, som afrunding af kontanter til de mønter, der er i brug, har indbragt for meget eller for lidt i forhold til ordrernes totaler.",
          "Faste udgifter og Engangsudgifter: det, du har registreret for måneden – se “Hvordan registrerer jeg husleje, løn og andre udgifter?”",
          "Nettoresultat: beregnes som omsætning (ekskl. moms) − produkternes kostpris − lagertab − transaktionsgebyrer + fortabte depositummer + kontantafrunding − faste udgifter − engangsudgifter."
        ]
      },
      {
        "type": "h2",
        "text": "Måneder i gang"
      },
      {
        "type": "p",
        "text": "Mens en måned stadig løber, fratrækker Resultat allerede hele månedens faste udgifter. Hvis omsætningen (ekskl. moms) f.eks. den 5. oktober indtil videre er 20.000, produkternes kostpris er 10.000, og de faste udgifter er 65.700, er nettoresultatet −55.700 og markeret I gang · hele månedens udgifter fratrækkes."
      },
      {
        "type": "p",
        "text": "Fordi hele månedens udgifter allerede er talt med, vises denne måneds nettoresultat aldrig i rødt på månedslisten, på månedssiden eller på feltet Nettoresultat i Statistik. En afsluttet måned, der ender med et tab, viser sit nettoresultat i advarselsfarven."
      },
      {
        "type": "h2",
        "text": "Grafer"
      },
      {
        "type": "p",
        "text": "Op til tre grafer følger efter opdelingen: nettoresultatet måned for måned, andelen for hver fast udgift og udviklingen i de faste udgifter. De to udviklingsgrafer dækker højst de 12 måneder frem til den måned, du har åbnet, og vises først, når der er mindst to måneder at sammenligne, regnet fra måneden for dit første salg eller din første udgift. Andelsgrafen kræver en fast udgift i den måned; indtil der er en, viser afsnittet i stedet Tilføj fast udgift."
      },
      {
        "type": "h2",
        "text": "Skift mellem Statistik og Resultat"
      },
      {
        "type": "p",
        "text": "Statistik og Resultat linker til hinanden. Når perioden i Statistik er Denne måned eller præcis én hel måned, får anden række af felter et felt Nettoresultat, markeret I gang · hele månedens udgifter fratrækkes, mens måneden løber. Tryk på det felt for at se den måneds opdeling fra dækningsbidrag til nettoresultat. For alle andre perioder trykker du på Se månedligt resultat på sidste linje i Fra omsætning til dækningsbidrag."
      },
      {
        "type": "p",
        "text": "Den anden vej åbner Statistik for den måned (brugerdefineret periode 1/10–31/10), når du trykker på Se rapporten for oktober under månedens titel i Resultat; for måneden i gang åbner den Denne måned."
      },
      {
        "type": "note",
        "text": "Nettoresultat er driftsresultat før indkomstskat, beregnet ud fra det, DingPOS har registreret, ikke en selvangivelse. Hvis produkter er solgt uden kostpris, viser måneden stadig et nettoresultat, markeret Kostprisen for N produkter er ikke med, og du kan trykke på det for at se hvilke."
      },
      {
        "type": "note",
        "text": "Resultat er med på alle abonnementsniveauer. Med medarbejderkonti kræver åbning af Resultat tilladelsen Resultat og udgifter, som ledere og medarbejdere som standard skal have godkendelse til, fordi siden viser produkters kostpriser og løn."
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
    "question": "Hvordan registrerer jeg husleje, løn og andre udgifter?",
    "keywords": [
      "udgifter",
      "husleje",
      "løn",
      "el, vand og varme",
      "faste udgifter",
      "engangsudgifter",
      "alle udgifter",
      "driftsomkostninger",
      "fordele udgift",
      "P&L"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tryk på Tilføj udgift i Resultat, og vælg Tilføj fast udgift eller Tilføj engangsudgift for at registrere husleje, løn, el, vand og varme og andre driftsomkostninger. En udgift tælles i den måned, den hører til, ikke i den måned, du betalte den, og nettoresultatet for hver måned opdateres tilsvarende. Faste udgifter gentages hver måned med mulighed for beløbsændringer, mens engangsudgifter tælles i én måned eller fordeles over flere måneder."
      },
      {
        "type": "h2",
        "text": "Faste udgifter"
      },
      {
        "type": "p",
        "text": "En fast udgift er en tilbagevendende omkostning, du betaler hver måned, f.eks. husleje, el, vand og varme eller løn."
      },
      {
        "type": "steps",
        "items": [
          "Åbn Resultat.",
          "Tryk på Tilføj udgift.",
          "Vælg Tilføj fast udgift.",
          "Angiv navn, det månedlige beløb og den måned, den starter. Vælg en tidligere måned for at efterregistrere tidligere måneder.",
          "Tryk på ✓ for at gemme."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Formular til fast udgift med navn, månedligt beløb, startmåned og beløbsændringer"
      },
      {
        "type": "p",
        "text": "Når beløbet ændres, åbner du udgiften og trykker på Ændr beløb. Vælg den måned, ændringen starter, og vælg derefter Fra denne måned til en løbende ændring som en huslejestigning eller Kun denne måned til en forskel i én måned som månedens elregning. Hver ændring står på formularen, og du kan åbne en post for at redigere eller fjerne den."
      },
      {
        "type": "p",
        "text": "Når du holder op med at betale en fast udgift, så angiv Sidste måned medregnet. Den måned og månederne før den tæller stadig med i Resultat, mens senere måneder ikke længere indeholder den."
      },
      {
        "type": "h2",
        "text": "Planlagte ændringer i Alle udgifter"
      },
      {
        "type": "p",
        "text": "I Alle udgifter viser hver række for en fast udgift, hvad der er planlagt fremover. Rækken samler startmåneden med en eventuel næste planlagte beløbsændring og sidste måned medregnet. En række kan f.eks. lyde: Siden januar 2026 · $420/md. fra december 2026 · Sidst medregnet marts 2027."
      },
      {
        "type": "p",
        "text": "Beløbet til højre er fortsat dagens månedlige beløb, ikke det kommende beløb. En ændring, der er sat til Kun denne måned, vises ikke på rækken."
      },
      {
        "type": "h2",
        "text": "Engangsudgifter"
      },
      {
        "type": "p",
        "text": "En engangsudgift er en omkostning, der betales én gang, f.eks. en indretning, udstyr, en forudbetalt forsikring eller en enkelt regning."
      },
      {
        "type": "steps",
        "items": [
          "Åbn Resultat.",
          "Tryk på Tilføj udgift.",
          "Vælg Tilføj engangsudgift.",
          "Angiv beløb og dato.",
          "Angiv Måned medregnet for én måned, eller slå Fordel over flere måneder til.",
          "Tryk på ✓ for at gemme."
        ]
      },
      {
        "type": "p",
        "text": "Uden fordeling kan du stadig vælge Måned medregnet, så omkostningen tælles i den måned, den hører til. En regning for oktober, der kommer i november, kan f.eks. tælles i oktober, og den rigtige dato bevares."
      },
      {
        "type": "p",
        "text": "Til en indretning, udstyr eller en forudbetalt forsikring slår du Fordel over flere måneder til, vælger 2 til 120 måneder og vælger Første måned medregnet. Formularen viser på forhånd, hvor meget der tælles hver måned, og hvilke måneder den dækker."
      },
      {
        "type": "p",
        "text": "Hvis en fordeling slutter tidligt, f.eks. når en forsikring opsiges, så åbn udgiften, og brug Afslut fordeling tidligt. Det resterende beløb tælles i den måned, du vælger."
      },
      {
        "type": "h2",
        "text": "Indgående moms på udgifter"
      },
      {
        "type": "p",
        "text": "Når Momsfradrag er slået til, kan du registrere et fakturanummer og den fradragsberettigede moms på en engangsudgift og registrere hver faktura for en fast udgift under Fakturaer med Registrer en faktura. Beløbet, der tælles i Resultat, er fortsat det, butikken bærer, og den tilknyttede artikel om indgående moms forklarer, hvordan fradragsberettiget moms fungerer."
      },
      {
        "type": "note",
        "text": "Angiv det, butikken bærer, og udelad moms, du kan få fradrag for. Varer, du skal sælge, og de materialer, du laver dem af, går i stedet gennem Indkøb, fordi de indgår i kostprisen, når de sælges. Forbrugsvarer, du følger lageret på, registreres med Reguler lager, når de bruges, med årsagen Butiksforbrug – ikke som en udgift. Betalte depositummer, lånets hovedstol og penge, ejeren tager ud, er ikke udgifter. Ændringer gemmes samlet, når du trykker på ✓, og en ændring, der rammer en afsluttet måned, fortæller dig først, hvilke måneders nettoresultat der ændres."
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
    "question": "Hvordan eksporterer jeg momsrapporten til min revisor?",
    "keywords": [
      "eksportér momsrapport",
      "momsrapport",
      "eksportér",
      "Excel-projektmappe",
      "CSV",
      "PDF-rapport",
      "momsoversigt",
      "detaljer om indgående moms",
      "revisor",
      "regnskabsprogram"
    ],
    "content": [
      {
        "type": "p",
        "text": "Åbn Momsrapport, tryk på Eksportér øverst til højre, og vælg en CSV, en Excel-projektmappe (XLSX) eller en PDF-rapport. Filen åbner i en forhåndsvisning i fuld skærm, hvor du kan trykke på delingsknappen for at gemme den eller sende den til din revisor. Alle formater indeholder de samme tal, som vises på skærmen."
      },
      {
        "type": "h2",
        "text": "Sådan eksporterer du"
      },
      {
        "type": "steps",
        "items": [
          "Åbn Statistik, og vælg perioden, f.eks. en brugerdefineret periode fra 1. november til 31. december til en momsperiode på to måneder eller en kvartalsperiode.",
          "Tryk på feltet Moms for at åbne Momsrapport. Eksporten dækker præcis den periode.",
          "Tryk på Eksportér øverst til højre i Momsrapport. En menu viser formaterne, hvor det format, der sidst blev eksporteret på denne iPad, er markeret med flueben.",
          "Vælg et format, f.eks. Excel-projektmappe (XLSX), for at åbne en forhåndsvisning i fuld skærm. CSV-filer vises som en tabel, og i Excel-projektmappen kan du skifte mellem arkene, f.eks. for først at se Summary.",
          "Tryk på delingsknappen øverst til højre i forhåndsvisningen for at gemme filen eller sende den til din revisor. Når du lukker forhåndsvisningen, kommer du tilbage til Momsrapport."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Momsrapport med menuen Eksportér åben og en liste over filformaterne"
      },
      {
        "type": "p",
        "text": "Hvis en eksport mislykkes, viser appen Filen kunne ikke eksporteres og Prøv at eksportere igen. Der bliver ikke skrevet noget; eksportér igen."
      },
      {
        "type": "h2",
        "text": "Eksportformater"
      },
      {
        "type": "list",
        "items": [
          "Momsoversigt (CSV): én linje pr. rapportrække (hver moms og sats, nulsats og uden moms) med salg, returer og netto, før moms og moms.",
          "Alle bilag (CSV): én linje pr. bilag under hver moms med dato og klokkeslæt, kvitteringsnummer, bilagstype (salg, retur eller tilbageførsel af en makulering), kundenavn, beløb og betalingsmåder. En makulering tilføjer en tilbageførselslinje på makuleringsdatoen.",
          "Daglig oversigt (CSV): oversigten pr. dag og derefter en anden tabel med betalinger pr. dag og betalingsmåde.",
          "Detaljer om indgående moms (CSV): vises kun, når rapporten har et kort med indgående moms. Én linje pr. linje med indgående moms i hver indkøbsordre og udgift, med leverandør, leverandørens momsnummer og fakturanummer.",
          "Excel-projektmappe (XLSX): arkene Summary, Documents og Daily svarer til de tre CSV-filer med salg, plus Purchases, når rapporten viser indgående moms. Beløb er talceller, og hver kolonne tilpasses sit indhold, så intet åbner afskåret.",
          "PDF-rapport: en A4-rapport på appens sprog med butiksnavn, periode, momsvisning, valuta og rapportens afsnit. Butikker i Australien, New Zealand, Singapore og Storbritannien får Felter i momsangivelsen først; kort med indgående moms følger, når de vises. I forhåndsvisningen kan du signere eller kommentere med Markering for at dele den markerede fil; eksporterer du samme periode igen, skrives en ren kopi."
        ]
      },
      {
        "type": "h2",
        "text": "Formatering til regnskabsprogrammer"
      },
      {
        "type": "p",
        "text": "CSV-filer er UTF-8 og adskilt af kommaer med faste engelske kolonnenavne på alle appsprog, så regnskabsprogrammer kan læse dem. Beløb bruger valutaens decimaler og et minustegn, uden symbol eller tusindtalsseparator (f.eks. 80.97, -40.00 eller 1000 for en butik med yen). Datoer ser ud som 2026-11-03."
      },
      {
        "type": "p",
        "text": "Tekstceller, der begynder med =, +, - eller @ (f.eks. en kunde, der hedder =1+1), får et foranstillet ', så regneark viser tekst i stedet for at køre en formel. Beløb får det aldrig."
      },
      {
        "type": "p",
        "text": "Filnavne indeholder perioden, f.eks. tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx og tax-report_2026-11-01_2026-11-30.pdf, så filer fra forskellige perioder aldrig overskriver hinanden."
      },
      {
        "type": "h2",
        "text": "Tilladelser og privatliv"
      },
      {
        "type": "p",
        "text": "Alle abonnementsniveauer kan eksportere, også Lite. Medarbejdere skal have tilladelsen Statistik, ligesom til Momsrapport."
      },
      {
        "type": "p",
        "text": "Filer med indgående moms beder først om de godkendelser, deres kort kræver: Kostpris og fortjeneste til indkøbsordrer og Resultat og udgifter til udgifter. Det gælder Detaljer om indgående moms (CSV) samt Excel-projektmappe (XLSX) og PDF-rapport, når kort med indgående moms vises. Hvis du annullerer, skrives der ingenting; de tre CSV-filer med salg beder aldrig om godkendelse."
      },
      {
        "type": "note",
        "text": "Alle bilag (CSV) indeholder kundenavne, og filer med indgående moms indeholder leverandørnavne og momsnumre. Del dem kun med personer, der må se dem."
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
    "question": "Hvordan registrerer jeg indgående moms (moms på indkøb)?",
    "keywords": [
      "indgående moms",
      "moms på indkøb",
      "GST",
      "Momsfradrag",
      "indgående moms på indkøbsordrer",
      "indgående moms på udgifter",
      "leverandørens momsnummer",
      "indkøbsordrer",
      "momsrapport"
    ],
    "content": [
      {
        "type": "p",
        "text": "Slå Momsfradrag til i Indstillinger → Butiksoplysninger for at registrere fradragsberettiget moms fra leverandørfakturaer på indkøbsordrer og udgifter. Begge formularer får så et afsnit Indgående moms, hvor du kopierer den fradragsberettigede moms fra hver faktura. Momsrapporten viser den i to kort, Indgående moms på indkøbsordrer og Indgående moms på udgifter."
      },
      {
        "type": "h2",
        "text": "Slå Momsfradrag til"
      },
      {
        "type": "steps",
        "items": [
          "Åbn Indstillinger → Butiksoplysninger, og find momskortet.",
          "Under Opkræv moms slår du Momsfradrag til."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Momskortet i Butiksoplysninger med Momsfradrag slået til og hjælpeteksten nedenunder"
      },
      {
        "type": "p",
        "text": "Momsfradrag vises kun, når butikken har mindst én moms, og er slået fra for nye butikker og efter en opdatering. Kontakten gemmer med det samme og logges under Momsindstillinger i Aktivitetslog. Når den er slået til, angiver du indkøbspriser og kostpriser før fradragsberettiget moms; moms, der ikke kan fradrages, forbliver i kostprisen."
      },
      {
        "type": "note",
        "text": "Alle abonnementsniveauer har kontakten Momsfradrag, mens Indkøb kræver Standard eller højere. Når du slår den fra, skjules felterne på nye poster; eksisterende poster beholder deres indgående moms og skyldige beløb, og tidligere momsrapporter forbliver uændrede."
      },
      {
        "type": "h2",
        "text": "Indkøbsordrer"
      },
      {
        "type": "steps",
        "items": [
          "Åbn Indkøb, og tryk på Nyt indkøb.",
          "Angiv enhedspriser før fradragsberettiget moms, og rul forbi ekstra omkostninger til Indgående moms.",
          "Tjek Fakturadato, som som standard er ordredatoen, og tilføj eventuelt Fakturanummer og Leverandørens momsnummer.",
          "Vælg en moms i butikken som Sats, eller vælg Anden sats… for at skrive op til 3 decimaler, f.eks. 9,975 %.",
          "Tjek Ekskl. moms, som starter ved ordrens total før moms, og kopiér Fradragsberettiget moms fra fakturaen.",
          "Tryk på Tilføj en sats for yderligere satser."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Indkøbsordre med afsnittet Indgående moms, fakturafelter, én satslinje og totaler"
      },
      {
        "type": "p",
        "text": "Fradragsberettiget moms starter tom; DingPOS beregner den aldrig ud fra satsen og accepterer afrunding på fakturaen. Hvis f.eks. mel, 10 × $300, plus $100 i fragt på faktura AB-12345678 dateret 30. juni 2026 har én 5 %-linje med Ekskl. moms $3,100 og Fradragsberettiget moms $155, giver det I alt ekskl. moms $3,100, Indgående moms $155 og Skyldigt beløb $3,255, som vises på listen, i ordredetaljerne og i Til betaling. Et Leverandørens momsnummer på en leverandør udfylder nye ordrer; gemte ordrer beholder deres eget."
      },
      {
        "type": "p",
        "text": "Hvis en faktura kommer sent, så åbn den modtagne ordre og tryk på Registrer indgående moms på kortet Indgående moms, eller på Rediger for at ændre den. Kun Skyldigt beløb ændres; lager, kostpris og status som betalt eller ubetalt forbliver uændrede. Makulerede ordrer beholder Indgående moms skrivebeskyttet, og ordrer gemt før opdateringen udfyldes ikke bagud."
      },
      {
        "type": "h2",
        "text": "Udgifter"
      },
      {
        "type": "p",
        "text": "I Resultat → Engangsudgifter får formularen Fakturanummer og linjer for indgående moms under beløbet. Behold beløbet før fradragsberettiget moms, og kopiér kun den fradragsberettigede moms. På en kontorartikelfaktura på $1,100 med $100 fradragsberettiget angiver du $1,000 og en 10 %-linje på $1,000 og $100; Inkl. moms viser $1,100, og Resultat tæller $1,000. Dens indgående moms tælles samlet på udgiftsdatoen og følger aldrig Måned medregnet eller en fordeling."
      },
      {
        "type": "p",
        "text": "I Resultat → Faste udgifter åbner du en gemt udgift som husleje eller el, vand og varme og trykker på Registrer en faktura under Fakturaer, efterhånden som hver faktura kommer, med fakturadato, eventuelt fakturanummer og mindst én satslinje. Hvis Husleje er $30,000 om måneden, og fakturaerne for juli og august hver har en 5 %-linje på $30,000 og $1,500, indeholder rapporten for juli–september $3,000 i indgående moms, mens Resultat stadig tæller $30,000 hver måned."
      },
      {
        "type": "p",
        "text": "Hvis du gemmer en ændring af indgående moms i en tidligere måned, spørger appen Gem ændringen? og advarer om, at månedens momsrapport ændres, hvis du allerede har indberettet den. Ændringer i den aktuelle måned og kladder gemmes uden at spørge."
      },
      {
        "type": "note",
        "text": "DingPOS beregner ikke importmoms, omvendt betalingspligt eller delvist momsfradrag. Kopiér den fradragsberettigede moms fra fakturaen, og læg moms, du ikke kan trække fra, i beløbet før moms."
      },
      {
        "type": "h2",
        "text": "Momsrapport"
      },
      {
        "type": "p",
        "text": "To kort står efter salgskortene: Indgående moms på indkøbsordrer og Indgående moms på udgifter. Hvert viser én række pr. sats, en række Ingen indgående moms og totaler for Ekskl. moms, Fradragsberettiget moms og Inkl. moms. Totalerne omfatter indkøb uden indgående moms, selvom nogle momsangivelser kun medregner rækker med indgående moms."
      },
      {
        "type": "list",
        "items": [
          "Indkøbsordrer tælles på Fakturadato, eller på ordredatoen, hvis den er tom.",
          "Makulerede indkøbsordrer tælles som et negativt beløb på makuleringsdatoen.",
          "Engangsudgifter tælles samlet på udgiftsdatoen.",
          "Fakturaer på faste udgifter tælles på fakturadatoen."
        ]
      },
      {
        "type": "p",
        "text": "Indgående moms på indkøbsordrer kræver Kostpris og fortjeneste, og Indgående moms på udgifter kræver Resultat og udgifter; medarbejdere uden en tilladelse ser Bed en leder om godkendelse under kortets titel. Feltet Moms viser stadig kun moms opkrævet på salg, aldrig minus indgående moms, fordi Japans forenklede metode og den britiske flat rate fungerer anderledes. Butikker i Australien, New Zealand, Singapore og Storbritannien ser også disse beløb i Felter i momsangivelsen."
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
    "question": "Hvor finder jeg momsrapporten, og hvordan læser jeg den?",
    "keywords": [
      "momsrapport",
      "moms",
      "GST",
      "salgsmoms",
      "statistik",
      "salg og moms pr. sats",
      "efter betalingsmåde",
      "momsangivelse"
    ],
    "content": [
      {
        "type": "p",
        "text": "Åbn Statistik, og tryk på feltet Moms for at se Momsrapport, som viser salg og moms pr. sats for den periode, Statistik viser. Kopiér tallene over i en momsangivelse (moms, GST eller salgsmoms), eller send dem til en revisor. Senere ændringer af moms ændrer aldrig de gemte bilags tal."
      },
      {
        "type": "h2",
        "text": "Sådan åbner du momsrapporten"
      },
      {
        "type": "steps",
        "items": [
          "Åbn Statistik, og vælg perioden, f.eks. Denne måned eller en brugerdefineret periode.",
          "Find feltet Moms i anden række efter Rabatter i alt.",
          "Tryk på feltet Moms eller Momsrapport ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Statistik for Denne måned med feltet Moms og dets fodlinje Momsrapport ›"
      },
      {
        "type": "p",
        "text": "Dette felt er den eneste vej ind. Dets undertitel nævner de moms, der er opkrævet i perioden, det største beløb først: to ved navn, tre eller flere som f.eks. 3 momssatser inkl. PST 7 %. Overskriften viser Statistiks periode (Denne måned · 1/11 – 30/11) uden periodevælger eller genvej til sidste måned, da indberetningsperioder er forskellige (Taiwan to måneder, Australien et kvartal, Japan et år)."
      },
      {
        "type": "p",
        "text": "Butikker uden moms og uden momspligtigt salg i perioden ser intet felt Moms; perioder uden bilag viser Statistiks tomme tilstand. Slettede momssatser beholder feltet for perioder med salg under dem."
      },
      {
        "type": "note",
        "text": "Alle abonnementsniveauer, også Lite og prøveperioden, har feltet, rapporten og alle eksporter. Medarbejdere skal have tilladelsen Statistik; roller, der kræver godkendelse, ser pladsholderen for godkendelse, indtil en leder godkender."
      },
      {
        "type": "h2",
        "text": "Sådan læser du rapporten"
      },
      {
        "type": "p",
        "text": "Butikker i Australien, New Zealand, Singapore og Storbritannien ser Felter i momsangivelsen først."
      },
      {
        "type": "p",
        "text": "Salg og moms pr. sats viser én række pr. sats: højeste først, derefter 0 % med nulsats og til sidst Uden moms (produkter uden moms). Kolonnerne er Salg, Returer og makuleringer og Netto, hver med Før moms og Moms; rækker med nulsats og Uden moms har ingen momslinje. Hver moms i butikken får en række, selv uden salg. Omdøbning beholder én række; en satsændring tilføjer en."
      },
      {
        "type": "p",
        "text": "I alt viser Salg før moms, Moms og Salg inkl. moms. Med to eller flere moms står der en note om, at ét salg kan have flere moms, så rækkernes salg ikke kan lægges sammen; Salg før moms tæller hvert salg én gang. For et britisk kvartal kan VAT 20 % f.eks. vise Før moms £1,000 og Moms £200, Nulsats 0 % £300 og Uden moms £50: I alt giver Salg før moms £1,350, Moms £200 og Salg inkl. moms £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Momsrapport med rækkerne i Salg og moms pr. sats og I alt nedenunder"
      },
      {
        "type": "list",
        "items": [
          "Efter betalingsmåde viser betalinger på disse bilag ved periodens udgang, ubetalte beløb som Tilgodehavender og kontantafrunding på en linje Inkl. kontantafrunding … inde i kontantrækken.",
          "Tæller ikke som salg vises kun for fortabte depositummer og viser Fortabte depositummer med en undertitel om at tjekke indberetningen med en revisor; de lægges hverken til salg eller moms.",
          "Butikker med Momsfradrag slået til, eller som har registreret indgående moms i perioden, ser også Indgående moms på indkøbsordrer og Indgående moms på udgifter."
        ]
      },
      {
        "type": "h2",
        "text": "Hvilken dag hvert bilag tæller på"
      },
      {
        "type": "p",
        "text": "Tryk på ⓘ ved siden af Salg og moms pr. sats:"
      },
      {
        "type": "list",
        "items": [
          "En makulering tæller i den periode, hvor den blev foretaget, som et negativt beløb, så en periode, der allerede er indberettet, aldrig ændres. Statistik fjerner den i stedet fra salgets periode.",
          "En retur tæller på sin egen dato. Ved en ombytning tæller de nye varer som salg og de returnerede varer som returer.",
          "En forudbestilling tæller på afhentningsdagen, et salg på konto på salgsdagen."
        ]
      },
      {
        "type": "p",
        "text": "Et salg fra 30. oktober, der makuleres 2. november, bliver i Salg for oktober og vises som et negativt beløb i Returer og makuleringer for november. Hvis et salg på konto afregnes senere, flytter det ikke."
      },
      {
        "type": "h2",
        "text": "Opkrævet moms og totaler i Statistik"
      },
      {
        "type": "p",
        "text": "Feltet Moms er lig med Momsrapports Moms i alt. Det afviger fra rækken Skat i Statistiks Fra omsætning til dækningsbidrag kun ved makuleringer på tværs af perioder, fordi Statistik tager et makuleret salg ud af dets oprindelige periode."
      },
      {
        "type": "note",
        "text": "Momsrapport viser moms opkrævet på salg, aldrig moms til betaling (udgående minus indgående moms), fordi ikke alle lande beregner den på den måde, f.eks. Japans forenklede metode eller UK Flat Rate Scheme."
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
    "question": "Hvilke tal skal i felterne i min BAS-, GST- eller momsangivelse?",
    "keywords": [
      "felter i momsangivelsen",
      "momsrapport",
      "statistik",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "Momsfradrag"
    ],
    "content": [
      {
        "type": "p",
        "text": "For butikker i Australien, New Zealand, Singapore eller Storbritannien åbner Momsrapport med Felter i momsangivelsen, som viser hvert felt og beløbet fra den samme rapport. Den dækker Australien BAS · Simpler BAS, New Zealand GST101A, Singapore GST F5 og Storbritannien VAT Return på alle abonnementsniveauer."
      },
      {
        "type": "h2",
        "text": "Sådan åbner du Felter i momsangivelsen"
      },
      {
        "type": "steps",
        "items": [
          "Åbn Statistik.",
          "Tryk på feltet Moms for at åbne Momsrapport."
        ]
      },
      {
        "type": "p",
        "text": "Felter i momsangivelsen er det første kort, over Salg og moms pr. sats, og dets undertitel nævner angivelsen. Hvert beløb kommer fra den samme rapport, cents med, og intet genberegnes. Den eksporterede PDF-rapport åbner med det samme kort. Butikker, der blev oprettet, før appen registrerede landet, tælles efter valuta (AUD, NZD, SGD eller GBP); andre butikker har intet kort Felter i momsangivelsen."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Kortet Felter i momsangivelsen øverst i Momsrapport med felt 1, 4, 6 og 7 i den britiske VAT Return"
      },
      {
        "type": "h2",
        "text": "Australien BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Salg med GST, inklusive GST-frit salg og salg uden moms; svar Yes på “Does the amount shown at G1 include GST?”",
          "1A GST on sales: Moms på salg",
          "1B GST on purchases: Fradragsberettiget moms på indkøbsordrer og udgifter"
        ]
      },
      {
        "type": "p",
        "text": "ATO kræver hele dollars: udelad cents på BAS, og rund aldrig op."
      },
      {
        "type": "h2",
        "text": "New Zealand GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: Salg med GST, inklusive salg med nulsats; salg uden moms er ikke med",
          "Box 6 Zero-rated supplies: Salg med nulsats",
          "Box 11 Total purchases and expenses: Indkøbsordrer og udgifter med GST, inklusive GST; indkøb uden indgående moms eller med nulsats er ikke med"
        ]
      },
      {
        "type": "p",
        "text": "myIR beregner felt 8 og felt 12 som 3/23, hvilket kan afvige fra rapportens moms med et par cent."
      },
      {
        "type": "h2",
        "text": "Singapore GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: Momspligtigt salg før moms",
          "Box 2 Total value of zero-rated supplies: Salg med nulsats; kun eksport og internationale tjenester kan have nulsats",
          "Box 5 Total value of taxable purchases: Indkøbsordrer og udgifter med GST eller nulsats, før moms; indkøb uden indgående moms er ikke med",
          "Box 6 Output tax due: Moms på salg",
          "Box 7 Input tax and refunds claimed: Fradragsberettiget moms på indkøbsordrer og udgifter"
        ]
      },
      {
        "type": "h2",
        "text": "Storbritannien VAT Return"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: Moms på salg",
          "Box 4 VAT reclaimed on purchases and other inputs: Fradragsberettiget moms på indkøbsordrer og udgifter",
          "Box 6 Total value of sales and all other outputs excluding any VAT: Salg før moms, inklusive salg med nulsats, momsfritaget salg og salg uden moms",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: Indkøbsordrer og udgifter før moms, inklusive indkøb uden indgående moms; træk eventuelle registrerede lønudgifter og erhvervsejendomsskat (business rates) fra"
        ]
      },
      {
        "type": "p",
        "text": "Gælder almindeligt momsregnskab; med Flat Rate Scheme beregnes felt 1 og felt 6 anderledes. I Storbritannien forfalder momsen på et depositum, når du modtager det; DingPOS indberetter en forudbestilling, når den afhentes."
      },
      {
        "type": "p",
        "text": "Eksempel på et britisk kvartal: £1,000 i salg med VAT 20 % før moms (moms £200), £300 med nulsats, £50 uden moms, indkøbsordrer på £400 plus £80 i VAT og udgifter på £250 uden indgående moms giver felt 1 £200, felt 4 £80, felt 6 £1,350 og felt 7 £650."
      },
      {
        "type": "h2",
        "text": "Tomme felter og medarbejderes adgang"
      },
      {
        "type": "p",
        "text": "Felter, som skattemyndigheden selv beregner, og skyldige beløb er udeladt (UK felt 3 og 5; Singapore felt 3, momsfritaget salg). I New Zealand og Singapore er salg uden moms ikke med i noget felt; spørg din revisor, hvis det skulle have haft moms."
      },
      {
        "type": "p",
        "text": "Felter med indgående moms (AU 1B, NZ 11, SG 5 og 7, UK 4 og 7) kræver Momsfradrag, ellers viser de — og Ingen indgående moms registreret, aldrig 0. UK felt 7 kræver både Indgående moms på indkøbsordrer og Indgående moms på udgifter; indkøbsordrer alene udfylder felt 4 og lader felt 7 stå som —."
      },
      {
        "type": "p",
        "text": "Medarbejdere uden tilladelsen Resultat og udgifter eller Kostpris og fortjeneste ser ikke felter, der lægger begge kort sammen, før en leder godkender via Bed en leder om godkendelse."
      },
      {
        "type": "note",
        "text": "Beregnet ud fra salgs- og fakturadatoer; DingPOS holder ikke styr på betalingsdatoer. Hvis du indberetter efter kontantprincippet eller betalingsprincippet, skal tallene justeres."
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
          "Omfang: er varerne i kurven omfattet af kampagnens produkter eller kategorier? Er produktet sat til Udeluk fra kampagner (produkter med åben pris er det som standard)? Er forbrugsgrænsen nået?",
          "Målgruppe: er kampagnen begrænset til et medlemsniveau eller en fødselsmåned? Blev medlemmet valgt ved betaling?",
          "Brugsgrænser: er den samlede grænse eller kundens egen grænse nået? Grænsen pr. kunde for en kampagne i fødselsmåneden tæller pr. kalenderår.",
          "Kombination: blokerer en kampagne med højere prioritet, som har „Stop efterfølgende kampagner, når denne udløses“, for den?"
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
        "text": "Gå til Indstillinger → Loyalitetsprogram og angiv to regler: optjen Y point for hver X, du bruger, og indløs N point til M i rabat (eventuelt med et loft for indløsning pr. ordre). Du kan også automatisk give nye medlemmer en velkomstbonus. Nye butikker starter med point slået fra: slå Aktivér loyalitetsprogram til, og angiv en regel. Hvis kontakten er slået til, men der ikke er angivet nogen regel, vises advarslen »Der er endnu ikke angivet en regel for optjening eller indløsning, så salg optjener eller indløser ikke point.«"
      },
      {
        "type": "p",
        "text": "Tilknyt medlemmet til salget i kurven eller på betalingsskærmen, så optjenes point automatisk. For at indløse point skal du angive, hvor mange der skal bruges. Bekræftelsesskærmen viser de optjente point og den nye saldo, f.eks. »+22 point · 122 point i alt«. Ved et salg på konto eller en forudbestilling, der endnu ikke er betalt fuldt ud, tilføjes point først, når pengene kommer ind, og der står »tilføjes ved afregning« eller »tilføjes, når der betales ved afhentning«. Når du makulerer en ordre, trækkes de point, den gav, tilbage, og indløste point gives tilbage."
      },
      {
        "type": "p",
        "text": "Hvis du selv vil lægge point til eller trække point fra (f.eks. for et køb, der blev glemt), skal du trykke på Juster på kortet Point i kundens detaljer, vælge Tilføj eller Træk fra, indtaste antallet af point og eventuelt skrive en årsag (op til 100 tegn). Du kan ikke trække flere point fra, end kunden har. Hver justering gemmes i pointhistorikken med saldoen før og efter, årsagen og navnet på den, der foretog den."
      },
      {
        "type": "note",
        "text": "Manuel pointjustering kom med v3.5. På Pro bliver medarbejdere, hvis rolle kræver godkendelse af Manuel pointjustering (det gør rollen Medarbejder som standard), bedt om en leders eller ejerens PIN, når de bekræfter."
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
        "type": "p",
        "text": "Første start efter en opdatering, eller efter en gendannelse af en backup fra en ældre version, kan først vise “Opdaterer dine data…”. Det er dine butiksdata, der flyttes til et nyere format, og det tager længere tid, jo flere data du har; appen åbner af sig selv, når det er færdigt. Den er ikke gået i stå."
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
        "text": "En tilladelse har to værdier: Tilladt eller Kræver godkendelse – intet er direkte forbudt. Når en medarbejder støder på en handling, der kræver godkendelse, vælger en kollega, som har tilladelse til at udføre den, sit eget navn og indtaster sin PIN for at godkende handlingen."
      },
      {
        "type": "list",
        "items": [
          "Handlinger (manuel lagerregulering, manuel pointjustering, produktstyring, ekspedition med rabat over rabatloftet): én godkendelse dækker den ene handling.",
          "Visninger (kostpris og fortjeneste, Statistik, Resultat og udgifter, Indstillinger, backup og gendannelse): en godkendelse låser op, indtil den aktive medarbejder skifter, eller appen går i baggrunden.",
          "Rabatloftet gælder manuelle rabatter og kontrolleres én gang ved betaling. Automatiske kampagner og indløsning af point tæller ikke med."
        ]
      },
      {
        "type": "p",
        "text": "Standardindstillinger: Ledere har lov til alt undtagen backup og gendannelse samt Resultat og udgifter, uden rabatloft. Medarbejdere kræver godkendelse til alt, med et loft på 10 %. Ejeren har altid lov til alt, og ejerens tilladelser kan ikke ændres. Hvis du vil ændre det, går du til Personale → Rolletilladelser, trykker på Rediger og gemmer én gang – ændringen gælder straks for alle."
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
      "revision",
      "hvem har ændret",
      "makulering",
      "prisændring",
      "lagerregulering",
      "slettet produkt",
      "godkendelser",
      "log"
    ],
    "content": [
      {
        "type": "p",
        "text": "Brug aktivitetsloggen. På siden Personale trykker du på Aktivitetslog øverst til højre og indtaster ejerens PIN. Så ser du butikkens følsomme handlinger med de nyeste først: makuleringer, returer, lagerreguleringer og optællingsrettelser, manuelle pointjusteringer, godkendelser, ændringer af medarbejdere og tilladelser, ændringer af ejerens PIN, skatteindstillinger, ændringer af produkters pris og kostpris samt slettede produkter. Almindelige salg vises ikke."
      },
      {
        "type": "list",
        "items": [
          "Hver post viser, hvad den berørte, hvem der gjorde hvad og hvornår, og resultatet – for eksempel “M pris 390 kr. → 350 kr.”. Den angivne årsag til en makulering, en retur, en lagerregulering eller en pointjustering står på postens tredje linje.",
          "Filtrér efter medarbejder (også deaktiverede), handlingstype og I dag / Denne uge / Denne måned.",
          "Tryk på en post, der peger på en ordre, et produkt eller en kunde, for at åbne dens detaljer.",
          "Ordredetaljer, produktdetaljer og hver medarbejders side har hver sin aktivitetsliste, der kun viser poster om den pågældende ordre, det pågældende produkt eller den pågældende medarbejder.",
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
        "text": "Du får 30 dages adgang til alle funktioner i Pro fra første installation, herunder medarbejderkonti, tilladelser og aktivitetsloggen – uden at oprette en konto."
      },
      {
        "type": "p",
        "text": "Hvis du tegner et abonnement i prøveperioden, slutter prøveperioden med det samme, og det abonnement, du har købt, gælder fra da af. Efter prøveperioden er Pro-funktioner som medarbejdere og aktivitetsloggen kun tilgængelige med et Pro-abonnement. Avancerede rapporter kræver ikke et Pro-abonnement; siden v3.4 er de med i alle abonnementsniveauer."
      },
      {
        "type": "p",
        "text": "I løbet af de sidste 7 dage og på den sidste dag minder appen dig én gang om, hvor mange dage der er tilbage, én gang om at kassefunktionen sættes på pause, når prøveperioden slutter, og én gang om, at dine data bevares."
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
        "text": "Alle tre abonnementsniveauer omfatter alle funktioner under Betaling, produkter, ordrer (med makuleringer, returneringer og ombytninger), rapporter (inklusive avancerede rapporter og det månedlige resultat siden v3.4 samt momsrapporten og dens eksport siden v3.6) og cloud-backup. De adskiller sig i værktøjerne til at drive butikken:"
      },
      {
        "type": "list",
        "items": [
          "Lite: til dig, der driver en markedsstand alene og har brug for betaling og produkter.",
          "Standard: tilføjer kampagner, rabatforvalg, loyalitetspoint og medlemsniveauer, lagerstyring, indkøb, salg på konto, forudbestillinger og gebyrsatser for betalinger.",
          "Pro: tilføjer medarbejderkonti og tilladelser, lederens godkendelse, aktivitetslog og gendannelsesposter – til butikker med medarbejdere."
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
        "text": "Opret først niveauer under Indstillinger → Medlemsniveauer (f.eks. Guld), og målret derefter kampagnen mod det niveau. Til fødselsdagstilbud sætter du målgruppen til Fødselsmåned og udfylder Grænse pr. kunde."
      },
      {
        "type": "list",
        "items": [
          "Medlemmet skal være valgt ved betaling, for at tilbuddet udløses – berettigelsen vurderes ud fra det medlem, der er valgt lige nu.",
          "Fødselsdagstilbud bruger medlemmets fødselsmåned, så udfyld fødselsdagsfeltet; medlemmer uden en fødselsdag regnes aldrig som fødselsdagskunder.",
          "En kampagne i fødselsmåneden kræver en grænse pr. kunde, som tælles pr. kalenderår: En grænse på 1 betyder, at hver kunde kan bruge den én gang om året, og den nulstilles året efter. Uden en grænse kan den ikke gemmes.",
          "Automatiske niveauopgraderinger vurderes, når betalingen gennemføres; hvis ordren makuleres, rulles en opgradering, som den udløste, automatisk tilbage."
        ]
      },
      {
        "type": "note",
        "text": "Før v3.2 viste en kampagne i fødselsmåneden en fejl og kunne ikke gemmes, selv om der var udfyldt en grænse pr. kunde. Hvis det sker for dig, skal du opdatere DingPOS fra App Store."
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
        "text": "Gaver og tilkøb ændrer aldrig kurven af sig selv. Når betingelserne er opfyldt, vises et forslagsbanner på kassesiden, og kurven ændres først, når kassemedarbejderen trykker på gave- eller +-knappen på banneret (Vælg gave eller Vælg tilkøb) — det er bevidst, fordi gaver involverer fysisk lager: Nogen skal bekræfte, at varen er på lager, og at kunden vil have den."
      },
      {
        "type": "list",
        "items": [
          "Når du har trykket på banneret ✕ (Afslå), vises det samme forslag ikke igen for denne kurv; en ny eller tømt kurv udløser forslaget igen.",
          "Hvis kurven holder op med at opfylde betingelserne (f.eks. fordi den vare, der udløste en gave, fjernes), fjernes gaven eller tilkøbet automatisk med en besked øverst, og det tæller ikke som en brug (siden v3.6).",
          "Siden v3.4 stopper afventende tilbud ikke betalingen: En gul linje under betalingsknappen, f.eks. „1 afventende tilbud gælder ikke“, fortæller, hvor mange der er udeladt (tryk på den for at se hvilke), og ordren gennemføres uden dem. Hvis du vil have, at betalingen venter som før, så slå Håndtér tilbud før betaling til under Indstillinger → Enhedsvalg; den gælder kun for denne iPad.",
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
        "text": "Siden v3.4 viser Resultat hver måneds nettoresultat efter produkternes kostpris, gebyrer og udgifter – se „Hvordan ser jeg, hvor meget jeg faktisk tjener hver måned?“ Siden v3.6 kan momsrapporten eksporteres for en periode (fx Denne måned) som CSV, som Excel-projektmappe eller som PDF-rapport til din bogholder, med salg, moms, beløbet modtaget med hver betalingsmåde og tilgodehavender. Resultat og de øvrige rapporter kan endnu ikke eksporteres, men alt, du skal bruge til afstemningen, findes allerede i appen:"
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
        "text": "Hvis du har brug for en månedlig afregningsrapport, du kan eksportere eller printe, ud over det momsrapporten dækker, så skriv til os med de felter, du skal bruge – vi prioriterer udviklingen efter antallet af henvendelser."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
