// Generated from en and the sq translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync sq`, then `npm run l10n -- apply sq`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Fillimi",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Pagesa",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Porositë dhe kthimet",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Produkte, inventar dhe blerje",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Raportet",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Promovimet dhe besnikëria",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Kopje rezervë dhe të dhëna",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Stafi dhe lejet",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Abonimi dhe faturimi",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Udhëzues konfigurimi për promovimet",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Së shpejti",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Si ta konfiguroj dyqanin tim në DingPOS?",
    "keywords": [
      "konfigurim",
      "fillim",
      "si të filloj",
      "hapja e dyqanit",
      "udhëzues konfigurimi",
      "hapi i parë",
      "dyqan i ri"
    ],
    "content": [
      {
        "type": "p",
        "text": "Herën e parë që hap DingPOS, një udhëzues konfigurimi të çon hap pas hapi drejt hapjes së dyqanit, për rreth 10 minuta:"
      },
      {
        "type": "steps",
        "items": [
          "Zgjidh shtetin — monedha, mënyra e tatimit dhe norma e paracaktuar e tatimit plotësohen automatikisht (norma dhe mënyra e tatimit mund të ndryshohen ende në këtë hap).",
          "Shkruaj emrin e dyqanit dhe, nëse do, ngarko logon e dyqanit.",
          "Ndiq udhëzuesin për të krijuar 3–5 produkte (mund ta kapërcesh — mund t'i shtosh edhe më vonë, kur të duash)."
        ]
      },
      {
        "type": "p",
        "text": "Kur të mbarosh, do të dëgjosh një \"Ding!\" — dyqani është gati dhe mund të nisësh menjëherë shitjet."
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
    "question": "A punon DingPOS pa internet?",
    "keywords": [
      "pa internet",
      "offline",
      "internet",
      "wifi",
      "rrjeti",
      "pa lidhje",
      "pazar",
      "punon pa rrjet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. DingPOS punon pa internet — arka, menaxhimi i produkteve, stoku dhe raportet funksionojnë të gjitha lokalisht në iPad, pa nevojë për rrjet. Pazaret e natës, banakët e përkohshëm dhe çdo vend pa Wi-Fi funksionojnë pa problem."
      },
      {
        "type": "p",
        "text": "Vetëm dy gjëra kanë nevojë për lidhje: kopja rezervë në cloud (ngarkimi në iCloud / Google Drive / Dropbox-in tënd) dhe verifikimi i statusit të abonimit."
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
    "question": "A më duhet të krijoj llogari për të përdorur DingPOS?",
    "keywords": [
      "llogari",
      "regjistrim",
      "hyrje",
      "identifikim",
      "privatësia",
      "pa llogari"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jo. DingPOS nuk ka sistem llogarish — shkarkoje dhe nis të shesësh. Produktet, porositë dhe të dhënat e klientëve qëndrojnë të gjitha në iPad-in tënd dhe nuk ngarkohen kurrë në serverët tanë."
      },
      {
        "type": "p",
        "text": "Kur aktivizon kopjen rezervë në cloud, hyn në llogarinë tënde në cloud (iCloud, Google Drive ose Dropbox). Kopjet rezervë ruhen në llogarinë tënde — ne nuk kemi qasje në to."
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
    "question": "Në cilat pajisje funksionon DingPOS?",
    "keywords": [
      "pajisje",
      "iphone",
      "mac",
      "ipad",
      "kërkesa",
      "versioni",
      "iPadOS"
    ],
    "content": [
      {
        "type": "p",
        "text": "Aktualisht DingPOS mbështet iPad me iPadOS 17 ose më të ri dhe është projektuar kryesisht për orientim horizontal."
      },
      {
        "type": "p",
        "text": "iPhone dhe Mac nuk mbështeten ende. Nëse dëshiron që të mbështesim një pajisje tjetër, na shkruaj dhe na trego se si do ta përdorje."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "A mund ta ndryshoj monedhën ose mënyrën e tatimit pas konfigurimit?",
    "keywords": [
      "monedha",
      "mënyra e tatimit",
      "ndryshim",
      "e bllokuar",
      "norma e tatimit",
      "ndrysho monedhën"
    ],
    "content": [
      {
        "type": "p",
        "text": "Normën e tatimit mund ta ndryshosh në çdo kohë te Cilësimet — norma e re vlen vetëm për porositë e ardhshme."
      },
      {
        "type": "p",
        "text": "Monedha dhe mënyra e tatimit (me tatim të përfshirë / pa tatim të përfshirë) bllokohen sapo mbaron konfigurimi. Të gjitha porositë e mëparshme janë llogaritur me to, ndaj ndryshimi në mes të rrugës do t'i prishte raportet."
      },
      {
        "type": "note",
        "text": "Nëse sapo ke hapur dyqanin dhe nuk ke ende të dhëna të rëndësishme, mund ta fshish dhe ta instalosh sërish aplikacionin për të bërë konfigurimin nga e para. Sigurohu që nuk ka asgjë që të duhet ta ruash para se ta fshish."
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
    "question": "Si ta ndryshoj gjuhën e aplikacionit?",
    "keywords": [
      "gjuha",
      "gjuha e aplikacionit",
      "anglisht",
      "kinezisht",
      "ndrysho gjuhën",
      "ndërrim gjuhe"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS mbështet anglisht dhe kinezisht tradicionale. Shko te Cilësimet → Preferencat e pajisjes dhe trokit Gjuha e aplikacionit. Hapet faqja e DingPOS në aplikacionin Cilësimet të iPad-it, ku e zgjedh gjuhën te Gjuha."
      },
      {
        "type": "p",
        "text": "iOS nuk i lejon aplikacionet ta hapin drejtpërdrejt listën e gjuhëve, ndaj trokitja e fundit bëhet te Cilësimet e sistemit. Gjuha vlen vetëm për këtë iPad."
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
    "question": "Si t'u shërbej disa klientëve në të njëjtën kohë?",
    "keywords": [
      "shporta",
      "disa shporta",
      "pezullo shportën",
      "ndërro shportën",
      "disa klientë njëherësh",
      "radhë te arka"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ekrani i arkës mbështet deri në 10 shporta në të njëjtën kohë. Prek \"+\" në shiritin e shportave për të shtuar një, dhe prek një skedë me numër për të kaluar te ajo."
      },
      {
        "type": "p",
        "text": "Çdo shportë llogaritet më vete. Ndërsa klienti A është ende duke zgjedhur, kalo te një shportë tjetër dhe bëj fillimisht pagesën e klientit B. Vendi i shportës hiqet automatikisht sapo përfundon pagesa e saj."
      },
      {
        "type": "note",
        "text": "Shportat ruhen vetëm në memorie — shportat pa pagesë të përfunduar fshihen kur aplikacioni mbyllet plotësisht."
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
    "question": "Si e vendos një zbritje?",
    "keywords": [
      "zbritje",
      "përqindje",
      "shumë fikse",
      "ulje çmimi",
      "zbritje për artikull",
      "zbritje për shportën"
    ],
    "content": [
      {
        "type": "p",
        "text": "Zbritjet funksionojnë në dy nivele, secili me shumë fikse ose me përqindje:"
      },
      {
        "type": "list",
        "items": [
          "Zbritje për artikull: prek një artikull në shportë → zgjidh \"Zbritje\" → shkruaj një shumë ose përqindje.",
          "Zbritje për shportën: prek butonin \"Zbritje\" poshtë shportës."
        ]
      },
      {
        "type": "p",
        "text": "Çdo artikull dhe çdo shportë mund të ketë vetëm një zbritje në të njëjtën kohë — nëse e vendos përsëri, zëvendëson të mëparshmen, dhe prek shenjën e zbritjes për ta hequr. Zbritjet zbatohen para tatimit, që është rendi standard në tregti."
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
    "question": "Si llogaritet tatimi?",
    "keywords": [
      "tatim",
      "TVSH",
      "tatim shitjeje",
      "tatim i përfshirë",
      "tatim i shtuar",
      "faturë"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tatimi llogaritet automatikisht sipas mënyrës së tatimit të zgjedhur gjatë konfigurimit. Fatura shfaq shumën e tatimit në të dyja mënyrat:"
      },
      {
        "type": "list",
        "items": [
          "I përfshirë: çmimet e përmbajnë tashmë tatimin — totali nuk ndryshon dhe fatura e ndan tatimin e përfshirë (e zakonshme në Tajvan, Japoni etj.).",
          "I shtuar: tatimi shtohet sipër shumës pas zbritjes në momentin e pagesës (e zakonshme në SHBA, Kanada etj.)."
        ]
      },
      {
        "type": "p",
        "text": "Rendi i plotë i llogaritjes: zbritjet për artikull → zbritja për shportën → tatimi. Shumat rrumbullakosen sipas rregullit që gjysmat rrumbullakosen lart, në bazë të shifrave dhjetore të monedhës (p.sh. 0 për TWD, 2 për USD)."
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
    "question": "Cilat mënyra pagese mbështeten?",
    "keywords": [
      "mënyra pagese",
      "para në dorë",
      "kartë krediti",
      "line pay",
      "kusur",
      "mënyrë e personalizuar",
      "me afat pagese"
    ],
    "content": [
      {
        "type": "p",
        "text": "Para në dorë, Kartë krediti dhe Line Pay janë të gatshme, dhe mund të shtosh çdo etiketë pagese të personalizuar te Cilësimet (p.sh. Apple Pay, portofolë vendorë)."
      },
      {
        "type": "p",
        "text": "Mënyrat e pagesës janë etiketa kontabël — DingPOS nuk përpunon pagesa të vërteta. Merr pagesat me kartë ose me celular me terminalin ose aplikacionin që ke tashmë, pastaj zgjidh etiketën përkatëse në DingPOS për ta regjistruar. Pagesat me para në dorë e llogaritin kusurin automatikisht."
      },
      {
        "type": "p",
        "text": "Për një klient të rregullt që merr mallin sot dhe paguan më vonë, zgjidh Me afat pagese: shitja regjistrohet si e arkëtueshme dhe shlyhet kur vijnë paratë. Shih “A mund të blejnë klientët e rregullt me afat pagese dhe të paguajnë më vonë?”"
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
    "question": "A mund ta fik “Ding” pas pagesës?",
    "keywords": [
      "tingull",
      "ding",
      "heshtje",
      "pa zë",
      "tingulli i pagesës"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Shko te Cilësimet → Preferencat e pajisjes dhe fik Tingullin e pagesës. Nga shitja e radhës, ekrani i suksesit mbetet pa tingull, ndërsa dridhja e lehtë mbetet."
      },
      {
        "type": "p",
        "text": "Ky çelës vlen vetëm për këtë iPad, dhe rivendosja e një kopjeje rezervë në cloud nuk e ndryshon."
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
    "question": "Nëse ndryshoj çmimin e një produkti, përditësohet shporta?",
    "keywords": [
      "ndryshim çmimi",
      "çmim i ri",
      "shportë",
      "rillogaritje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Shporta shfaq çmimin e momentit kur u shtua artikulli. Kur prek konfirmimin e pagesës, DingPOS rikontrollon çmimin më të fundit të çdo artikulli — nëse ka ndryshuar diçka, të njofton me çmimet e përditësuara përpara se të vazhdosh."
      },
      {
        "type": "p",
        "text": "Edhe promovimet rivlerësohen nga e para gjatë konfirmimit. Nëse totali, tatimi ose ndonjë zbritje ndryshon si rezultat, shfaqet një përmbledhje e ndryshimeve dhe duhet ta konfirmosh përsëri — kështu shuma që sheh është saktësisht shuma që regjistrohet."
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
    "question": "A mund të përdoren bashkë zbritjet manuale dhe promovimet?",
    "keywords": [
      "zbritje manuale",
      "promovim",
      "kombinim",
      "zëvendësim"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Rregulli është “manuali fiton, nivelet mbeten të pavarura”:"
      },
      {
        "type": "list",
        "items": [
          "Zbritje manuale për artikull: ai rresht nuk merr më promovime në nivel artikulli — zbritja jote manuale konsiderohet vendimi përfundimtar në vend. Shuma e rreshtit prapë llogaritet te pragjet e shpenzimit.",
          "Zbritje manuale për shportën: zbatohet pasi të jenë llogaritur të gjitha promovimet, ndaj të dyja bashkëjetojnë. Nëse shkruan më shumë se totali i mbetur, kufizohet automatikisht me një njoftim."
        ]
      },
      {
        "type": "p",
        "text": "Heqja e një zbritjeje manuale ia rikthen rreshtit të drejtën për promovime në vlerësimin e radhës."
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
    "question": "Bëra një gabim te pagesa — si e shfuqizoj një porosi?",
    "keywords": [
      "shfuqizim",
      "shfuqizo porosinë",
      "anulim",
      "gabim",
      "porosi e gabuar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Shko te Porosi, gjej porosinë, hap detajet e saj dhe zgjidh Shfuqizo. Konfirmo dhe kaq."
      },
      {
        "type": "p",
        "text": "Shfuqizimi kthen automatikisht gjithçka të lidhur: stoku i gjurmuar rikthehet, pikët e fituara nga porosia merren mbrapsht dhe pikët e përdorura rimbursohen. Porositë e shfuqizuara mbeten në listë të shënuara qartë dhe nuk numërohen te të ardhurat në raporte."
      },
      {
        "type": "note",
        "text": "Shfuqizimi do të thotë “kjo shitje nuk ka ndodhur kurrë” — përdore për një porosi që e ke regjistruar gabim aty për aty. Kur një klient sjell mallin mbrapsht më vonë, përdor Kthim malli: porosia origjinale ruhet, mund të kthesh vetëm disa nga artikujt dhe të ardhurat zvogëlohen në ditën e kthimit."
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
    "question": "Si e trajtoj një kthim malli ose një këmbim?",
    "keywords": [
      "kthim malli",
      "këmbim",
      "rimbursim",
      "kthim i pjesshëm",
      "ndërrim të numrit"
    ],
    "content": [
      {
        "type": "p",
        "text": "Shko te Porosi, hap porosinë origjinale dhe trokit Kthim malli. Zgjidh sa copë kthehen nga çdo artikull. Për një këmbim, trokit Shto artikull zëvendësues në të njëjtin ekran; shuma neto shlyhet menjëherë — nëse është pozitive, klienti paguan; nëse është negative, ti rimburson; nëse është zero, nuk kalojnë para nga njëra palë te tjetra."
      },
      {
        "type": "list",
        "items": [
          "Porosia origjinale nuk ndryshohet kurrë. Një kthim krijon dokumentin e vet, me datën e sotme dhe me numër që fillon me R; të ardhurat zvogëlohen në ditën e kthimit.",
          "Rimbursimi është ajo që klienti ka paguar realisht për atë artikull — zbritjet e artikullit, zbritjet e shportës dhe përdorimi i pikëve janë ndarë tashmë, ndaj nuk rimbursohet me çmimin e listës. Tatimi përdor normën me të cilën u ngarkua porosia origjinale.",
          "Artikujt zëvendësues shiten me çmimin e sotëm, pa promovime ose zbritje.",
          "Stoku i gjurmuar rikthehet automatikisht. Pikët e fituara nga porosia origjinale merren mbrapsht, pikët e përdorura rimbursohen, dhe artikujt zëvendësues fitojnë pikët e tyre.",
          "Një porosi mund të kthehet në disa raunde, por kurrë mbi sasinë e shitur fillimisht. Kufijtë e përdorimit të promovimeve nuk rikthehen nga një kthim."
        ]
      },
      {
        "type": "note",
        "text": "Nuk ka afat kohor për kthimet, por porosia origjinale është e domosdoshme. Nëse një kthim është futur gabimisht, shfuqizo kthimin dhe sasia e kthyeshme rikthehet."
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
    "question": "Si e pranoj një porosi paraprake me kapar?",
    "keywords": [
      "porosi paraprake",
      "kapar",
      "marrje e mallit",
      "mbetja e papaguar",
      "rezervim"
    ],
    "content": [
      {
        "type": "p",
        "text": "Te pagesa, kaloje skedën në krye të ekranit nga Shitje te Porosi paraprake, zgjidh datën e marrjes, shkruaj kaparin (çdo shumë nga 0 deri në total, me shkurtoret 30% / 50% / e plotë) dhe zgjidh mënyrën e pagesës së kaparit. Lidh një klient që ta kontaktosh kur të mbërrijë malli."
      },
      {
        "type": "list",
        "items": [
          "Stoku zbritet kur vendoset porosia paraprake, duke e rezervuar mallin për klientin. Artikujt pa stok shkojnë në negativ dhe rikuperohen kur pranohet një porosi blerjeje.",
          "Kur klienti vjen për ta marrë, trokit Dorëzo te detajet e porosisë për të arkëtuar mbetjen. Pastaj porosia bëhet një shitje e zakonshme e përfunduar, dhe kthimet e mëvonshme ndjekin rrjedhën normale të kthimit.",
          "Nëse klienti nuk vjen kurrë, trokit Anulo porosinë te detajet e porosisë dhe zgjidh të rimbursosh ose të mbash kaparin. Stoku shtohet mbrapsht.",
          "Fatura e kaparit dhe fatura e marrjes përfundimtare kanë të njëjtin numër."
        ]
      },
      {
        "type": "p",
        "text": "Te Statistika, të ardhurat e një porosie paraprake njihen plotësisht në datën e marrjes, ndërsa kapari numërohet te Paratë e arkëtuara në ditën kur paguhet — ndaj dy shifrat ndryshojnë për njëfarë kohe. Shih “Cili është ndryshimi mes të ardhurave nga shitjet dhe parave të arkëtuara?”"
      },
      {
        "type": "note",
        "text": "Artikujt e një porosie paraprake nuk mund të ndryshohen; nëse klienti ndryshon mendje, anuloje dhe vendos një porosi paraprake të re. Krijimi i porosive paraprake kërkon planin Standard ose më lart. Pas uljes së planit, porositë paraprake ekzistuese mund të merren ose anulohen prapë."
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
    "question": "A mund të blejnë klientët e rregullt me afat pagese dhe të paguajnë më vonë?",
    "keywords": [
      "me afat pagese",
      "borxh",
      "blerje me afat",
      "të arkëtueshme",
      "shlyerje",
      "paguaj më vonë"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Zgjidh klientin te pagesa dhe zgjidh Me afat pagese si mënyrë pagese. Një borxh duhet të ketë zotëruesin e vet, ndaj Me afat pagese nuk është i disponueshëm pa klient."
      },
      {
        "type": "p",
        "text": "Për të arkëtuar, kaloje skedën në krye të ekranit nga Porosi te Të arkëtueshme. Borxhet grupohen sipas klientit; hap njërin për të shlyer një porosi të vetme, një muaj të tërë ose gjithçka — çdo herë DingPOS të pyet si u paguan paratë. Një porosi e vetme mund të shlyhet edhe nga detajet e saj, dhe një shlyerje e futur gabimisht mund të anulohet me Anulo shlyerjen."
      },
      {
        "type": "list",
        "items": [
          "Të ardhurat numërohen në ditën kur del malli; Para të arkëtuara dhe pikët e besnikërisë llogariten në ditën e shlyerjes.",
          "Porositë e pashlyera kanë një shenjë me ngjyrë qelibari në listë, dhe detajet e klientit tregojnë sa i ka mbetur për të paguar.",
          "Një klient me porosi të pashlyera nuk mund të fshihet."
        ]
      },
      {
        "type": "note",
        "text": "Krijimi i shitjeve me afat pagese kërkon planin Standard ose më lart. Pas uljes së planit nuk mund të nisësh të reja, por të arkëtueshmet ekzistuese mund të shihen dhe të shlyhen prapë."
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
    "question": "A mund të shtoj shënime te porositë, klientët ose porositë e blerjes?",
    "keywords": [
      "shënim",
      "shënime",
      "memo",
      "koment",
      "vërejtje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Faqet e detajeve të porosisë, të klientit dhe të porosisë së blerjes kanë secila një kartë shënimesh — trokite për ta ndryshuar; shënimi mund të ketë deri në 500 karaktere. Mund ta shkruash edhe në formular kur krijon një klient ose një porosi blerjeje."
      },
      {
        "type": "p",
        "text": "Shënimet nuk varen nga statusi: porositë e përfunduara, porositë e shfuqizuara dhe kthimet mund të shënohen ose të ndryshohen të gjitha. Shumat dhe artikujt e një porosie fiksohen te pagesa; shënimi qëndron pranë dokumentit dhe nuk ia ndryshon kurrë përmbajtjen."
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
    "question": "Si i krijoj produktet me variante (madhësi, ngjyra)?",
    "keywords": [
      "variante",
      "madhësi",
      "ngjyrë",
      "opsione",
      "specifikime",
      "produkt me variante"
    ],
    "content": [
      {
        "type": "p",
        "text": "Në faqen e ndryshimit të produktit, trokit Shto opsion te Opsionet e varianteve për të shtuar një opsion (p.sh. “Ngjyra”), pastaj përdor “+ Vlerë” për të shtuar secilën zgjedhje (p.sh. E kuqe, Blu). Me dy ose më shumë opsione (p.sh. Ngjyra × Madhësia), DingPOS i krijon vetë të gjitha kombinimet (E kuqe/S, E kuqe/M, Blu/S…)."
      },
      {
        "type": "p",
        "text": "Çdo kombinim ka çmimin dhe koston e vet dhe ndjek stokun e vet. Te pagesa, kur troket produktin shfaqet një zgjedhës variantesh përpara se ta shtosh në shportë."
      },
      {
        "type": "note",
        "text": "Emrat e opsioneve dhe të vlerave mund të kenë deri në 20 karaktere."
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
    "question": "Si funksionojnë barkodet?",
    "keywords": [
      "barkod",
      "skanim",
      "skaner",
      "dublikat",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Barkodet e produkteve mund të shkruhen me dorë ose të skanohen me kamerën. Barkodet duhet të jenë unike — nëse gjatë ruajtjes një barkod përplaset me një produkt tjetër, DingPOS të tregon se cilit produkt i përket."
      },
      {
        "type": "p",
        "text": "Te pagesa, fusha e kërkimit përputhet si me emrat e produkteve, ashtu edhe me fillimin e barkodeve — shkruaj një barkod dhe produkti shfaqet menjëherë. Për planet e skanerëve fizikë të barkodit, shih “A do të mbështeten skanerët fizikë të barkodit?”"
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
    "question": "Si e ndryshoj renditjen e produkteve?",
    "keywords": [
      "renditje",
      "rendit",
      "riorganizo",
      "tërhiq",
      "fiksoj në krye",
      "renditje manuale"
    ],
    "content": [
      {
        "type": "p",
        "text": "Te Produkte, trokit Ndrysho renditjen dhe tërhiq kartat e produkteve ku i do. Arka dhe menaxhimi i produkteve përdorin të njëjtën renditje, kështu që mjafton ta rregullosh një herë për t’i përditësuar të dyja."
      },
      {
        "type": "list",
        "items": [
          "Me një katalog të madh, menyja e çdo karte ofron Lëvize në fillim, Lëvize në fund dhe Lëvize te pozicioni, dhe çdo kartë tregon pozicionin e vet aktual.",
          "Filtro së pari sipas një kategorie për ta riorganizuar vetëm brenda asaj kategorie — produktet e kategorive të tjera mbeten aty ku janë.",
          "Produktet e reja shkojnë në fillim; ndryshimi i detajeve të një produkti nuk e ndryshon kurrë pozicionin e tij."
        ]
      },
      {
        "type": "p",
        "text": "Për të renditur përkohësisht sipas emrit, çmimit ose kohës së krijimit / përditësimit, përdor menynë Rendit sipas. Renditja jote manuale ruhet dhe kur kthehesh te Renditja manuale, ajo rikthehet."
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
    "question": "Si e ndjek inventarin e dyqanit?",
    "keywords": [
      "inventar",
      "stok",
      "ndjekje stoku",
      "numërim",
      "stok i ulët"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ndjekja e inventarit aktivizohet për çdo produkt veçmas — aktivizoje në faqen e ndryshimit të produktit dhe shkruaj sasinë aktuale. Çdo variant i një produkti ndjek stokun e vet."
      },
      {
        "type": "p",
        "text": "Pasi aktivizohet, shitjet dhe porositë paraprake e zbresin stokun automatikisht; shfuqizimet, kthimet dhe porositë paraprake të anuluara e rikthejnë; marrja e një porosie blerjeje e shton; dhe mund ta rregullosh manualisht në çdo kohë. Çdo lëvizje regjistrohet në një regjistër të plotë. Stoku i ulët shënohet me një paralajmërim me ngjyrë."
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
    "question": "Pse mund të dalë stoku negativ?",
    "keywords": [
      "negativ",
      "stok",
      "pa stok",
      "bllokim",
      "rregullim"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kjo është e qëllimshme: pagesa nuk bllokohet kurrë nga stoku i pamjaftueshëm. Rregulli i parë i një arke aktive është që klienti të mos presë kurrë — një numër i gabuar në letër mund të korrigjohet më vonë, por një shitje e ndërprerë humbet përgjithmonë."
      },
      {
        "type": "p",
        "text": "Stoku negativ zakonisht do të thotë që një furnizim nuk është regjistruar, ose që një artikull i porositur paraprakisht nuk ka mbërritur ende (porositë paraprake e zbresin stokun kur krijohen). Regjistro furnizimet duke marrë në stok një porosi blerjeje dhe numri rikuperohet vetë; diferencat e inventarit fizik korrigjoji me një rregullim manual, që ruhet në regjistrin e lëvizjeve."
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
    "question": "Si i regjistroj blerjet dhe furnitorët?",
    "keywords": [
      "porosi blerjeje",
      "blerje",
      "furnitor",
      "marrje në stok",
      "furnizim",
      "detyrime ndaj furnitorëve"
    ],
    "content": [
      {
        "type": "p",
        "text": "Blerjet në menynë anësore menaxhojnë furnitorët dhe porositë e blerjes. Një furnitor ruan emrin, personin e kontaktit, telefonin, adresën dhe kushtin e parazgjedhur të pagesës (paguaj tani ose paguaj çdo muaj)."
      },
      {
        "type": "steps",
        "items": [
          "Trokit Blerje e re, zgjidh furnitorin dhe shto produktet, sasitë dhe kostot për njësi (të plotësuara paraprakisht me koston aktuale të çdo produkti). Mund të shtosh edhe një tarifë transporti. Nëse furnitori nuk është krijuar ende, trokit Shto furnitor lart majtas në listën e furnitorëve — furnitori i ri kthehet drejt në porosinë e blerjes.",
          "Një draft nuk prek kurrë stokun ose detyrimet — ndryshoje ose fshije lirisht.",
          "Kur mbërrin malli, trokit Merr stokun: stoku i ndjekur rritet, dhe porosia e blerjes merr numrin e vet dhe kyçet. Si parazgjedhje, marrja përditëson edhe koston e çdo produkti me këtë kosto për njësi; çaktivizo Sinkronizo koston e produktit në porosinë e blerjes për t’i lënë kostot të pandryshuara."
        ]
      },
      {
        "type": "p",
        "text": "Kushti i pagesës vendos çfarë ndodh më pas: porositë me “paguaj tani” shënohen si të paguara, ndërsa ato mujore mbeten të papaguara te Të papaguara, ku mund t’i shlyesh për çdo furnitor — një porosi, këtë muaj, ose të gjitha."
      },
      {
        "type": "note",
        "text": "Blerjet kërkojnë planin Standard ose më të lartë. Një furnitor me porosi të marra të papaguara nuk mund të fshihet."
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
    "question": "Cili është ndryshimi mes të ardhurave nga shitjet dhe parave të arkëtuara?",
    "keywords": [
      "të ardhura nga shitjet",
      "para të arkëtuara",
      "të ardhura",
      "përputhje me arkën",
      "kapar",
      "shitje me afat pagese"
    ],
    "content": [
      {
        "type": "p",
        "text": "Të ardhurat nga shitjet numërohen ditën kur malli u dorëzua; paratë e arkëtuara numërohen ditën kur erdhën paratë. Për një porosi të paguar në arkë të dyja ndodhin në të njëjtën ditë dhe shifrat përputhen. Ndahen kur:"
      },
      {
        "type": "list",
        "items": [
          "Shitje me afat pagese: malli del sot dhe hyn te të ardhurat e sotme nga shitjet; paratë hyjnë te paratë e arkëtuara ditën kur shlyhet.",
          "Porosi paraprake: kapari hyn te paratë e arkëtuara kur paguhet; të ardhurat nga shitjet njihen të plota në datën e marrjes së mallit.",
          "Kapar i mbajtur: kur një klient anulon një porosi paraprake dhe ti e mban kaparin, ai ishte numëruar tashmë te paratë e arkëtuara kur u pagua. Statistika e shfaq veçmas si kapare të mbajtura dhe nuk numërohet kurrë si e ardhur nga shitjet."
        ]
      },
      {
        "type": "p",
        "text": "Për të rakorduar, krahaso paratë e arkëtuara me sirtarin e parasë dhe me terminalin e kartave; për të parë sa ke shitur realisht në një periudhë, shiko të ardhurat nga shitjet. Kthimet e mallrave ulin të ardhurat nga shitjet ditën e kthimit."
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
    "question": "Për cilat periudha kohore mund të shfaqen raportet?",
    "keywords": [
      "raporte",
      "periudha",
      "këtë javë",
      "këtë muaj",
      "këtë vit",
      "interval i personalizuar",
      "data",
      "produktet më të shitura"
    ],
    "content": [
      {
        "type": "p",
        "text": "Zgjidh Sot, Dje, Këtë javë, Këtë muaj, Këtë vit ose Gjithë kohës në krye të ekranit Statistika, ose përdor Personalizuar për të zgjedhur datën e fillimit dhe të mbarimit. Këtë javë ndjek ditën e parë të javës të pajisjes; Këtë muaj dhe Këtë vit fillojnë më 1 të muajit dhe më 1 janar. Çdo opsion shfaq datat që mbulon, ndërsa Gjithë kohës nis nga transaksioni i parë i dyqanit tënd."
      },
      {
        "type": "p",
        "text": "Për një ditë të vetme, grafiku i trendit kthehet në grafik me shtylla sipas orës; periudhat më të gjata përdorin ditë, javë, muaj ose vite për çdo shtyllë, sipas gjatësisë."
      },
      {
        "type": "p",
        "text": "Karta Renditja e produkteve liston 5 më të shiturit. Trokit te karta ose te Shiko të gjitha për të parë çdo produkt të shitur në periudhë, të renditur sipas sasisë pas kthimeve."
      },
      {
        "type": "p",
        "text": "Në planin Pro, Krahasimi i shitjeve në të djathtë të shiritit të periudhës krahason periudhën me atë para saj ose me të njëjtën periudhë të vitit të kaluar — shih “Çfarë tregojnë raportet e avancuara të Pro?”"
      },
      {
        "type": "note",
        "text": "Këto periudha kalendarike erdhën në v2.4; versionet e mëparshme ofronin intervale lëvizëse (Sot / 7 ditë / 30 ditë / Gjithë kohës). Nëse ende i sheh ato, përditëso DingPOS nga App Store."
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
    "question": "Çfarë tregojnë raportet e avancuara të Pro?",
    "keywords": [
      "raporte të avancuara",
      "pro",
      "krahasimi i shitjeve",
      "viti i kaluar",
      "hartë nxehtësie",
      "orët e ngarkuara",
      "produkte me shitje të ngadalta",
      "vlerësimi i inventarit",
      "shkalla e blerjeve të përsëritura",
      "pikë"
    ],
    "content": [
      {
        "type": "p",
        "text": "Raportet e avancuara nuk janë ekran më vete — shfaqen drejtpërdrejt në ekranin Statistika dhe ndjekin periudhën që zgjedh në krye:"
      },
      {
        "type": "list",
        "items": [
          "Krahasimi i shitjeve: në të djathtë të shiritit të periudhës, krahaso me të njëjtën periudhë të vitit të kaluar ose me periudhën para saj (një ditë të vetme me të njëjtën ditë të javës së kaluar, këtë javë me javën e kaluar, këtë muaj me muajin e kaluar, këtë vit me vitin e kaluar, një interval të personalizuar me po aq ditë para tij). Pllaka Para të arkëtuara tregon ndryshimin dhe ritmin e rritjes, dhe grafiku i të ardhurave nga shitjet shton një vijë më të zbehtë për periudhën e krahasimit. Sa kohë një periudhë është ende në vazhdim, periudha e krahasimit pritet në të njëjtin çast.",
          "Dita × ora: kalo titullin Shitjet në kohë te Dita × ora për një hartë nxehtësie me shtatë ditë dhe 24 orë — sa më e errët një qelizë, aq më shumë ke shitur. Kalo mes të ardhurave nga shitjet dhe porosive; me krahasimin e ndezur, shih cilat orë u rritën dhe cilat u ulën.",
          "Produkte me shitje të ngadalta: kalo titullin e kartës së renditjes te Produkte me shitje të ngadalta për të listuar produktet nga ato me më pak shitje te ato me më shumë, me stokun aktual dhe datën e fundit kur u shit secili. Produktet që nuk janë shitur kurrë shënohen “Nuk është shitur kurrë”. Si parazgjedhje shfaqen vetëm produktet me stok.",
          "Shkalla e blerjeve të përsëritura: rreshti i fundit i pllakës së klientëve është pjesa e anëtarëve që bënë blerje në periudhë dhe kanë blerë dy ose më shumë herë gjithsej.",
          "Tani: vlerësimi i inventarit (stoku aktual × kostoja aktuale), çdo lëvizje stoku në periudhën e zgjedhur, dhe pikat që klientët i kanë por nuk i kanë përdorur ende, me shumën maksimale që mund të zbritin. Këto janë gjendje aktuale; periudha nuk i ndryshon."
        ]
      },
      {
        "type": "p",
        "text": "Pa Pro, secila nga këto pesë pika ka një dryn të vogël që hap një shpjegim për përmirësimin e planit; gjithçka tjetër në Statistika punon si më parë. Raportet lexojnë të dhëna që dyqani yt i mban tashmë, ndaj kur Pro mbaron fshihen vetëm raportet — nuk humb asnjë e dhënë."
      },
      {
        "type": "note",
        "text": "Stafi i sheh raportet e avancuara me lejen Paneli; shumat e vlerësimit të inventarit kërkojnë edhe lejen Kostoja dhe fitimi."
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
    "question": "Si raportohet fitimi nëse nuk kam futur kostot?",
    "keywords": [
      "kostoja",
      "fitimi",
      "marzhi",
      "raporte",
      "fitim i papërcaktuar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostoja është fushë opsionale. Produktet pa kosto shënohen në raporte “fitimi nuk ndiqet” dhe nuk përfshihen në llogaritjen e fitimit — të ardhurat nga shitjet numërohen plotësisht, vetëm fitimi anashkalohet."
      },
      {
        "type": "p",
        "text": "Për të marrë raporte të plota fitimi, shto kostot në faqen e ndryshimit të produktit; porositë e ardhshme do të përfshihen. Fitimi llogaritet mbi të ardhurat nga shitjet pas zbritjeve."
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
    "question": "Si krijoj një promovim?",
    "keywords": [
      "promovim",
      "ofertë",
      "bli një merr një",
      "BOGO",
      "prag shpenzimi",
      "happy hour",
      "kupon",
      "zbritje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hap Cilësimet → Promovimet dhe krijo një promovim të ri. Llojet që mbështeten:"
      },
      {
        "type": "list",
        "items": [
          "Prag shpenzimi: shpenzo X, merr Y zbritje ose Y% zbritje.",
          "Blej një merr një dhe oferta për artikullin e N-të.",
          "Shumëzues për pikët bonus.",
          "Oferta vetëm për një nivel anëtarësie ose për muajin e ditëlindjes.",
          "Blej A merr B, shtesa me pagesë dhe pako me çmim fiks."
        ]
      },
      {
        "type": "p",
        "text": "Çdo promovim mund të programohet (orare Happy Hour, ditë të caktuara të javës, përtej mesnatës), të kufizohet te produkte të caktuara dhe të kontrollohet me prioritet, rregulla kombinimi dhe kufij përdorimi. Promovimet që plotësojnë kushtet zbatohen automatikisht në pagesë — nuk nevojiten kode zbritjeje."
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
    "question": "Pse nuk zbatohet një promovim? Çfarë duhet të kontrolloj?",
    "keywords": [
      "promovim",
      "nuk punon",
      "nuk zbatohet",
      "zgjidhje problemi",
      "zbritja nuk del"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kontrollo shkaqet më të zakonshme sipas radhës:"
      },
      {
        "type": "steps",
        "items": [
          "Orari: a është sot brenda datave aktive? A e kufizon ditën ose orën një dritare Happy Hour?",
          "Zbatimi: a përfshihen artikujt e shportës në produktet ose kategoritë për të cilat vlen promovimi? A është arritur pragu i shpenzimit?",
          "Audienca: a është promovimi i kufizuar te një nivel anëtarësie ose muaji i ditëlindjes? A u zgjodh ai anëtar gjatë pagesës?",
          "Kufijtë e përdorimit: a është arritur kufiri total i përdorimit ose kufiri për këtë klient?",
          "Kombinimi: a po e bllokon një promovim me prioritet më të lartë që ka “Ndalo promovimet pasuese kur ky zbatohet”?"
        ]
      },
      {
        "type": "p",
        "text": "Nëse gjithçka del në rregull dhe prapë nuk zbatohet, na dërgo me email një pamje ekrani të cilësimeve të promovimit dhe do të të ndihmojmë ta zbulojmë shkakun."
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
    "question": "Si funksionojnë pikët e besnikërisë?",
    "keywords": [
      "pikë",
      "besnikëri",
      "shpërblime",
      "përdor pikët",
      "bonus mirëseardhjeje",
      "program besnikërie"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hap Cilësimet → Programi i besnikërisë dhe përcakto dy rregulla: sa pikë fiton për çdo X të shpenzuar dhe sa zbritje jep përdorimi i N pikëve (me një kufi opsional për porosi). Mund të japësh automatikisht edhe pikë mirëseardhjeje për anëtarët e rinj."
      },
      {
        "type": "p",
        "text": "Zgjidh anëtarin në pagesë dhe pikët grumbullohen automatikisht; për t'i përdorur, shkruaj pikët që do të shpenzohen. Shfuqizimi i një porosie heq pikët që ajo kishte dhënë dhe kthen pikët që ishin përdorur."
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
    "question": "Për çfarë shërbejnë nivelet e anëtarësisë?",
    "keywords": [
      "nivel",
      "VIP",
      "ar",
      "përmirësim niveli",
      "nivel anëtarësie",
      "anëtarësi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nivelet e anëtarësisë (p.sh. I rregullt, Argjend, Ar) shërbejnë për dy gjëra: promovimet mund të synojnë anëtarë të niveleve të caktuara (p.sh. 10% zbritje vetëm për nivelin Ar), dhe ti mund ta dallosh menjëherë statusin e klientit gjatë pagesës."
      },
      {
        "type": "p",
        "text": "Nivelet mund të përmirësohen automatikisht sipas rregullave që përcakton ti (p.sh. shpenzimi i përgjithshëm) ose të caktohen manualisht. Nëse një porosi e shfuqizuar kishte shkaktuar një përmirësim, niveli kthehet mbrapsht automatikisht."
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
    "question": "Si e bëj kopjen rezervë të të dhënave?",
    "keywords": [
      "kopje rezervë",
      "backup",
      "icloud",
      "google drive",
      "dropbox",
      "cloud",
      "kopje e ruajtur"
    ],
    "content": [
      {
        "type": "p",
        "text": "Shko te Cilësimet → Kopje rezervë në cloud, zgjidh një nga iCloud, Google Drive ose Dropbox dhe autorizoje. Pas kësaj mund ta nisësh kopjen rezervë manualisht kur të duash. Për iCloud, ky iPad duhet të jetë i identifikuar në iCloud me iCloud Drive të aktivizuar dhe me DingPOS të lejuar ta përdorë."
      },
      {
        "type": "p",
        "text": "Kopjet rezervë ruhen në llogarinë tënde në cloud. Çdo cloud mban vetëm kopjen e fundit — një kopje e ruajtur e të dhënave dhe një skedar me fotot e produkteve — dhe çdo kopje rezervë mbishkruan të mëparshmen."
      },
      {
        "type": "note",
        "text": "Meqë kopja e re zëvendëson të vjetrën, nëse dyshon se të dhënat e tua tashmë janë prishur (p.sh. një grup produktesh u fshi gabimisht), mos bëj kopje rezervë tani — na shkruaj me email dhe do të gjejmë së bashku hapin e radhës."
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
    "question": "Kopja rezervë në iCloud tregon “I palidhur” — çfarë bëj?",
    "keywords": [
      "icloud",
      "i palidhur",
      "icloud drive",
      "kopja rezervë dështoi",
      "nuk lidhet"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS e shfaq iCloud si të lidhur vetëm kur mund ta përdorë realisht. Kur tregon I palidhur, kontrollo tri gjëra te aplikacioni Cilësimet i iPad-it:"
      },
      {
        "type": "steps",
        "items": [
          "Je i identifikuar në Llogarinë tënde Apple.",
          "iCloud Drive është i aktivizuar.",
          "DingPOS ka leje të përdorë iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Pasi të tri janë aktivë, kthehu te Kopje rezervë në cloud në DingPOS dhe iCloud shfaqet si i lidhur. Kopjet rezervë ruhen në dosjen e vetë DingPOS në iCloud Drive."
      },
      {
        "type": "note",
        "text": "Në versionet para v3.0, kopja rezervë në iCloud nuk funksiononte dhe dështonte çdo herë me “Backup.SyncError error 0”. Fillimisht përditëso DingPOS nga App Store."
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
    "question": "Si t’i kaloj të dhënat në një iPad të ri?",
    "keywords": [
      "kalim të dhënash",
      "iPad i ri",
      "rivendosje",
      "migrim",
      "zhvendosje"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "iPad-i i vjetër: shko te Cilësimet → Kopje rezervë në cloud dhe nis një kopje rezervë manuale. Sigurohu që ora e kopjes rezervë u përditësua.",
          "iPad-i i ri: instalo DingPOS dhe përfundo magjistarin e konfigurimit.",
          "iPad-i i ri: shko te Cilësimet → Kopje rezervë në cloud, lidhu me të njëjtën llogari cloud dhe rivendos."
        ]
      },
      {
        "type": "p",
        "text": "Kur prek Rivendos, fillimisht hapet një paraqitje paraprake: numri i produkteve, porosive dhe klientëve të këtij iPad-i dhe të kopjes së ruajtur krah për krah, plus çdo porosi që rivendosja do ta heqë. Asgjë në këtë iPad nuk ndryshon derisa të konfirmosh. Një kopje e ruajtur e krijuar nga një version më i ri i DingPOS të kërkon fillimisht të përditësosh aplikacionin. Fotot e produkteve rivendosen gjithashtu."
      },
      {
        "type": "note",
        "text": "Rivendosja i zëvendëson të gjitha të dhënat në këtë iPad me kopjen rezervë — porositë e krijuara në këtë iPad pas asaj kopjeje do të humbasin. Sigurohu që je lidhur me llogarinë e duhur cloud; nëse rivendos nga ajo e gabuar, përdor Zhbëj rivendosjen."
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
    "question": "A mbahen të dhënat nëse e fshij aplikacionin?",
    "keywords": [
      "fshirje",
      "çinstalim",
      "humbje të dhënash",
      "heq aplikacionin"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jo. DingPOS i ruan të gjitha lokalisht në pajisjen tënde — fshirja e aplikacionit fshin përgjithmonë të gjitha produktet, porositë, klientët dhe cilësimet, përveç nëse ke aktivizuar kopjen rezervë në cloud."
      },
      {
        "type": "note",
        "text": "Përpara se ta fshish aplikacionin, bëj gjithmonë një kopje rezervë manuale dhe sigurohu që u krye me sukses. Pas instalimit të ri, rivendos nga cloud."
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
    "question": "Aplikacioni hapet me “Të dhënat e dyqanit nuk u hapën” — çfarë bëj?",
    "keywords": [
      "nuk u hapën",
      "nuk hapet",
      "ndalon",
      "ndalon në nisje",
      "bazë të dhënash",
      "të dhënat e dyqanit"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mos e fshi aplikacionin. Ky ekran do të thotë që DingPOS nuk i lexoi dot të dhënat e dyqanit, por të dhënat janë ende në këtë iPad — fshirja e aplikacionit i fshin bashkë me të."
      },
      {
        "type": "p",
        "text": "Së pari prek Provo përsëri; nëse funksionon, aplikacioni hapet si zakonisht. Nëse vazhdon të ndodhë, prek Kontakto mbështetjen dhe na trego, dhe do të të ndihmojmë t’i rikuperosh të dhënat. Ky ekran nuk zhvendos dhe nuk fshin kurrë asnjë skedar."
      },
      {
        "type": "note",
        "text": "Shkaku më i shpeshtë është mbyllja e aplikacionit në mes të një rivendosjeje. Para v3.0, kjo e bënte aplikacionin të ndalonte në çdo nisje; që nga v3.0 ndalon në këtë ekran."
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
    "question": "Mund t’i përdor dy iPad bashkë?",
    "keywords": [
      "dy iPad",
      "shumë pajisje",
      "sinkronizim",
      "ndarje",
      "arkë e dytë"
    ],
    "content": [
      {
        "type": "p",
        "text": "Të dhënat e çdo iPad-i janë aktualisht të pavarura — ndarja në kohë reale e një grupi të dhënash mes dy pajisjeve nuk mbështetet ende."
      },
      {
        "type": "p",
        "text": "Mund t’i kopjosh të dhënat nga një iPad në tjetrin përmes kopjes rezervë në cloud (kopje rezervë → rivendosje), çka funksionon mirë për ndërrimin e pajisjes ose për ta nisur një iPad të dytë. Porositë e regjistruara veçmas në secilën pajisje nuk bashkohen automatikisht. Sinkronizimi me shumë pajisje është në planin tonë."
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
    "question": "Mund t’i importoj produktet dhe shitjet nga një POS tjetër ose nga një tabelë?",
    "keywords": [
      "importim",
      "csv",
      "excel",
      "tabelë",
      "migrim",
      "ndërrim POS",
      "në masë",
      "historiku i shitjeve"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Shko te Cilësimet → Importi i të dhënave, zgjidh nëse do të importosh produkte apo shitje dhe zgjidh një skedar CSV (Excel dhe Google Sheets mund të ruajnë të dyja si CSV)."
      },
      {
        "type": "steps",
        "items": [
          "Skedari hapet si tabelë. Emrat e zakonshëm të kolonave në anglisht dhe kinezisht përputhen automatikisht; prek kokën e çdo kolone për të ndryshuar përputhjen.",
          "Prek çdo qelizë për ta korrigjuar vlerën aty për aty — nuk ka nevojë ta ndryshosh skedarin dhe ta nisësh nga e para.",
          "Prek Konfirmo për ta verifikuar. Rreshtat me probleme shënohen me të kuqe me arsyen; importimet e shitjeve mund t’i anashkalojnë porositë me gabime.",
          "Zgjidh çdo gjë që kërkon vendim (emra produktesh të dyfishtë, një rresht që përputhet me disa klientë), shqyrto përmbledhjen, pastaj prek Nis importimin."
        ]
      },
      {
        "type": "list",
        "items": [
          "Shitjet e importuara vendosen sipas datës së transaksionit dhe rillogariten me monedhën dhe mënyrën e taksës së dyqanit tënd. Nuk ndikojnë stokun dhe nuk japin pikë mirëseardhjeje.",
          "Klientët përputhen me ata ekzistues sipas telefonit ose emailit; kush nuk përputhet krijohet i ri.",
          "Porositë e importuara shfaqin datën e importimit dhe numrin e porosisë burimore, dhe nuk mund të shfuqizohen ose të kthehen.",
          "Rreshtat me gabime mund të eksportohen si CSV me arsyet e shënuara — korrigjoji dhe importo përsëri. Rreshtat e dyfishtë anashkalohen automatikisht."
        ]
      },
      {
        "type": "note",
        "text": "Importi i të dhënave është në beta. Çdo skedar mund të përmbajë deri në 50.000 rreshta ose 20 MB. Bëj një kopje rezervë në cloud përpara importimit; nëse diçka nuk importohet ose rezultati duket i gabuar, na e thuaj përmes Raporto një problem në ekranin e importimit."
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
    "question": "Rivendosa kopjen e gabuar. A mund ta zhbëj?",
    "keywords": [
      "zhbëj rivendosjen",
      "rivendosje",
      "kopje e gabuar",
      "regjistrimet e rivendosjeve",
      "të dhëna të humbura",
      "kthim prapa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Çdo rivendosje nga cloud i ruan të dhënat që zëvendësoi si kopje para rivendosjes. Te Cilësimet → Kopje rezervë në cloud, një kartë tregon kur ndodhi rivendosja e fundit dhe nga vinte. Prek Zhbëj rivendosjen, shqyrto paraqitjen paraprake dhe konfirmo — të dhënat kthehen siç ishin para rivendosjes dhe aplikacioni ringarkohet."
      },
      {
        "type": "list",
        "items": [
          "Zhbëj rivendosjen është vetë një rivendosje dhe ruan një kopje tjetër të asaj që zëvendëson, kështu që po ta prekësh sërish, kthehesh mbrapsht.",
          "Mbahet vetëm kopja e fundit; rivendosja e radhës e zëvendëson.",
          "Kthehen vetëm të dhënat: produktet e shtuara pas kopjes së ruajtur shfaqin një imazh që mungon."
        ]
      },
      {
        "type": "p",
        "text": "Për të parë kush rivendosi, kur dhe nga cila kopje e ruajtur, prek Shiko regjistrimet e rivendosjeve në të njëjtin ekran: koha e çdo rivendosjeje, operatori, burimi, numri i produkteve / porosive / klientëve para dhe pas, dhe çdo porosi që ajo ka hequr. Regjistrimet ruhen në këtë iPad dhe nuk zëvendësohen kurrë nga një rivendosje."
      },
      {
        "type": "note",
        "text": "Paraqitja paraprake e rivendosjes dhe Zhbëj rivendosjen funksionojnë në çdo plan; shikimi i regjistrimeve të rivendosjeve është veçori e Pro. Regjistrimet shkruhen edhe pa Pro (thjesht pa operator), kështu që nëse abonohesh në Pro më vonë, i sheh të gjitha."
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
    "question": "Si të shtoj punonjës dhe si të ndërroj kush është në arkë?",
    "keywords": [
      "staf",
      "punonjës",
      "menaxher",
      "llogari",
      "pin",
      "operator",
      "ndërrim",
      "turn",
      "arkëtar",
      "shto punonjës"
    ],
    "content": [
      {
        "type": "p",
        "text": "Prek Stafi në shiritin anësor. Herën e parë, konfiguro pronarin: një emër dhe një PIN me 4 shifra. Shtimi i punonjësve dhe ndryshimi i lejeve kërkojnë këtë PIN, ndaj mbaje mend — nuk rivendoset dot."
      },
      {
        "type": "steps",
        "items": [
          "Në faqen Stafi, prek Shto punonjës, shkruaj një emër, zgjidh një rol (Menaxheri ose Punonjës) dhe vendos një PIN me 4 shifra.",
          "Operatori aktual shfaqet poshtë në shiritin anësor dhe lart djathtas në Pagesa. Kur ndërrohet turni, preke, zgjidh emrin tënd dhe shkruaj PIN-in.",
          "Që nga ai çast, çdo porosi, pagesë dhe lëvizje stoku ose pikësh regjistron se kush e ka kryer, e dukshme te lista dhe detajet e porosisë; porositë e shfuqizuara regjistrojnë edhe kush i ka shfuqizuar."
        ]
      },
      {
        "type": "p",
        "text": "Kur dikush largohet, përdor Çaktivizo këtë punonjës: historiku i tij mbetet i paprekur dhe mund ta riaktivizosh më vonë. Ndryshimi i emrit nuk prek porositë e vjetra — ato mbajnë emrin që kishte punonjësi në atë kohë."
      },
      {
        "type": "note",
        "text": "Stafi është veçori e Pro (e disponueshme edhe gjatë provës). Nëse Pro mbaron, të dhënat e stafit dhe operatori i regjistruar për çdo porosi ruhen, ndërsa porositë e reja regjistrohen nën pronarin; kur abonohesh sërish në Pro, gjithçka rikthehet."
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
    "question": "Çfarë ndodh nëse harroj PIN-in e pronarit?",
    "keywords": [
      "pin",
      "harrova pin",
      "fjalëkalim",
      "rivendosje",
      "pronari",
      "rikuperim",
      "bllokuar"
    ],
    "content": [
      {
        "type": "p",
        "text": "PIN-i i pronarit nuk rivendoset dot dhe as ekipi ynë i mbështetjes nuk mund ta zhbllokojë. PIN-i ruhet bashkë me të dhënat e dyqanit, ndaj nëse e fshin aplikacionin, e instalon sërish dhe e rivendos nga cloud-i, kthehet i njëjti PIN."
      },
      {
        "type": "p",
        "text": "Gjatë krijimit të pronarit dhe çdo ndryshimi të PIN-it të pronarit shfaqet paralajmërimi “Mbaje mend këtë PIN. Nëse e harron, nuk rivendoset dot.” Ruaje diku ku vetëm ti mund ta gjesh."
      },
      {
        "type": "p",
        "text": "Pa PIN-in e pronarit, çdo gjë që e kërkon mbetet e paarritshme — shtimi ose ndryshimi i punonjësve, ndryshimi i lejeve të roleve dhe shikimi i regjistrit të aktivitetit. Punonjësit mund të vazhdojnë të kryejnë pagesa dhe punët e përditshme me PIN-et e tyre."
      },
      {
        "type": "note",
        "text": "Nëse një punonjës harron PIN-in e vet, nuk ka problem: pronari mund ta rivendosë te Stafi."
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
    "question": "Si funksionojnë lejet e punonjësve dhe miratimet e menaxherit?",
    "keywords": [
      "leje",
      "miratim",
      "menaxher",
      "kufiri i zbritjes",
      "staf",
      "kosto",
      "rol"
    ],
    "content": [
      {
        "type": "p",
        "text": "Një leje ka dy vlera: E lejuar ose Kërkon miratim — asgjë nuk është e ndaluar plotësisht. Kur punonjësit hasin një veprim që kërkon miratim, një koleg që ka të drejtë ta bëjë zgjedh emrin e vet dhe shkruan PIN-in për ta lejuar."
      },
      {
        "type": "list",
        "items": [
          "Veprimet (rregullimi manual i stokut, menaxhimi i produkteve, kryerja e pagesës me zbritje mbi kufirin e lejuar): një miratim mbulon vetëm atë veprim.",
          "Pamjet (kosto dhe fitim, Statistika, Cilësimet, kopje rezervë dhe rivendosje): miratimi zhbllokon derisa të ndërrojë operatori ose aplikacioni të kalojë në sfond.",
          "Kufiri i zbritjes vlen për zbritjet manuale dhe kontrollohet një herë gjatë pagesës; promovimet automatike dhe shpërblimi i pikëve nuk llogariten në të."
        ]
      },
      {
        "type": "p",
        "text": "Parazgjedhjet: Menaxherët lejohen të bëjnë gjithçka përveç kopjes rezervë dhe rivendosjes, pa kufi zbritjeje; Punonjësit kanë nevojë për miratim për gjithçka, me kufi 10%. Pronari lejohet gjithmonë dhe lejet e tij nuk mund të ndryshohen. Për t'i ndryshuar, shko te Stafi → Lejet e roleve, prek Ndrysho dhe ruaj një herë — ndryshimet zbatohen menjëherë për të gjithë."
      },
      {
        "type": "note",
        "text": "Shfuqizimet, kthimet, shitjet me afat pagese dhe blerjet nuk kanë leje me qëllim; ato regjistrojnë vetëm kush i ka kryer. Për t'i shqyrtuar më vonë, përdor regjistrin e aktivitetit."
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
    "question": "Si mund të shoh kush ka shfuqizuar një porosi, ka rregulluar stokun ose ka ndryshuar një çmim?",
    "keywords": [
      "regjistri i aktivitetit",
      "auditim",
      "kush ka ndryshuar",
      "shfuqizim",
      "ndryshim çmimi",
      "rregullim stoku",
      "produkt i fshirë",
      "miratime",
      "regjistër"
    ],
    "content": [
      {
        "type": "p",
        "text": "Përdor regjistrin e aktivitetit. Në faqen Stafi, prek Regjistri i aktivitetit lart djathtas dhe shkruaj PIN-in e pronarit për të parë veprimet e ndjeshme të dyqanit, nga më e reja: shfuqizime, kthime, rregullime manuale të stokut, miratime, ndryshime të stafit dhe lejeve, ndryshime të PIN-it të pronarit, ndryshime çmimi dhe kostoje të produkteve dhe fshirje produktesh. Pagesat e zakonshme nuk renditen."
      },
      {
        "type": "list",
        "items": [
          "Çdo regjistrim tregon çfarë ka prekur, kush ka bërë çfarë dhe kur, si dhe rezultatin — për shembull “M price $390 → $350”.",
          "Filtro sipas punonjësit (përfshirë ata të çaktivizuar), llojit të veprimit dhe Sot / Këtë javë / Këtë muaj.",
          "Prek një regjistrim që të çon te një porosi, produkt ose klient për të hapur detajet përkatëse.",
          "Detajet e porosisë, detajet e produktit dhe faqja e secilit punonjës kanë hyrjen e vet që liston vetëm regjistrimet që i përkasin.",
          "Produkte të fshira shfaqen në regjistër me emrin dhe çmimin e asaj kohe."
        ]
      },
      {
        "type": "note",
        "text": "Çdo plan regjistron; vetëm shikimi është veçori e Pro, ndaj regjistrimet nga periudha kur Pro nuk ishte aktive shfaqen sapo të abonohesh sërish. Regjistri përfshihet në kopjet rezervë në cloud."
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
    "question": "Si funksionon prova falas?",
    "keywords": [
      "provë falas",
      "provë",
      "falas",
      "30 ditë",
      "periudha provë"
    ],
    "content": [
      {
        "type": "p",
        "text": "Merr 30 ditë me çdo veçori të planit Pro që nga instalimi i parë, përfshirë llogaritë e punonjësve, lejet, regjistrin e aktivitetit dhe raportet e avancuara — pa nevojë për llogari."
      },
      {
        "type": "p",
        "text": "Nëse abonohesh në çdo plan gjatë provës, prova përfundon menjëherë dhe nga ai moment vlen plani që ke blerë. Pas provës, veçoritë Pro si punonjësit dhe raportet e avancuara mbeten të disponueshme vetëm me abonim Pro."
      },
      {
        "type": "p",
        "text": "Gjithçka që krijon gjatë provës (produkte, porosi, anëtarë) ruhet e plotë. Të dhënat e tua nuk fshihen kurrë, pavarësisht nëse abonohesh më pas apo jo."
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
    "question": "A zhduken të dhënat e mia kur mbaron prova?",
    "keywords": [
      "mbarimi i provës",
      "skadim",
      "bllokim",
      "të dhënat",
      "pas provës"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jo — të dhënat e tua mbeten përgjithmonë në pajisjen tënde. Kur mbaron prova, funksioni Pagesa bllokohet, por mund të shfletosh porositë, të shohësh raportet dhe të menaxhosh produktet."
      },
      {
        "type": "p",
        "text": "Abonohu në çdo kohë dhe funksioni Pagesa zhbllokohet menjëherë, me të gjitha të dhënat saktësisht siç i le."
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
    "question": "Cili është ndryshimi mes Lite, Standard dhe Pro?",
    "keywords": [
      "plane",
      "lite",
      "standard",
      "pro",
      "ndryshimi",
      "krahasim",
      "përmirësim plani",
      "kalim në plan më të ulët",
      "çmimet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Të tria planet përfshijnë funksionin e plotë Pagesa, produktet, porositë (me shfuqizime, kthime malli dhe këmbime), raportet dhe kopjen rezervë në cloud. Ndryshojnë te veglat për drejtimin e dyqanit:"
      },
      {
        "type": "list",
        "items": [
          "Lite: për një person që drejton një banak dhe i duhen pagesa e produktet.",
          "Standard: shton promovime, pikë besnikërie dhe nivele anëtarësh, ndjekjen e stokut, blerjet te furnitorët, shitjet me afat pagese dhe porositë paraprake.",
          "Pro: shton llogari punonjësish dhe leje, miratimin nga menaxheri, regjistrin e aktivitetit, regjistrimet e rivendosjes dhe raportet e avancuara — për dyqane me punonjës."
        ]
      },
      {
        "type": "p",
        "text": "Je tashmë në Standard? Kalo në Pro nga faqja e abonimit: faturimi mbetet në të njëjtin cikël, përmirësimi hyn në fuqi menjëherë dhe Apple llogarit proporcionalisht diferencën. Kalimi nga Pro përsëri në Standard hyn në fuqi në rinovim. Çmimet shfaqen në aplikacion dhe planet mund t'i krahasosh në faqen tonë të Çmimeve."
      },
      {
        "type": "note",
        "text": "Kalimi në një plan më të ulët nuk fshin kurrë të dhëna. Veçoritë përtej planit tënd ndalen përkohësisht, të dhënat mbeten, dhe kur abonohesh sërish kthehen."
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
    "question": "Si mund të abonohem, ta anuloj abonimin ose të rivendos një blerje?",
    "keywords": [
      "abonohem",
      "anulo abonimin",
      "rivendos blerjet",
      "çmimi",
      "faturimi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abonimet kryhen përmes blerjes brenda aplikacionit në App Store — planet dhe çmimet shfaqen në aplikacion. Pagesa përpunohet nga Apple; ne nuk i shohim kurrë të dhënat e pagesës sate."
      },
      {
        "type": "list",
        "items": [
          "Anulim: menaxhoje te Cilësimet → Apple Account → Abonimet në pajisjen tënde. Anuloje të paktën 24 orë para përfundimit të periudhës aktuale për të shmangur rinovimin.",
          "Rivendosje: pasi ndërron pajisje ose riinstalon aplikacionin, trokit \"Rivendos blerjet\" te faqja Abonim e DingPOS.",
          "Ndryshim plani: zgjidh planin e ri te faqja Abonim e DingPOS. Përmirësimet (nga Standard në Pro, nga mujor në vjetor) hyjnë në fuqi menjëherë, me Apple që llogarit proporcionalisht diferencën; kalimet në plan më të ulët hyjnë në fuqi në rinovim."
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
    "question": "Si ta konfigurosh një zbritje me prag shpenzimi",
    "keywords": [
      "prag shpenzimi",
      "zbritje me prag",
      "shpenzo dhe merr zbritje",
      "udhëzues",
      "konfigurim",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Shko te Cilësimet → Promovimet → Shto, zgjidh llojin me prag shpenzimi, pastaj:"
      },
      {
        "type": "steps",
        "items": [
          "Vendos shumën e pragut dhe zbritjen (shumë fikse ose përqindje).",
          "Zgjidh fushëveprimin: produkte të caktuara, kategori të caktuara, ose lëre bosh që të vlejë për gjithë dyqanin.",
          "Vendos orarin: data e fillimit është e detyrueshme; lëre bosh datën e mbarimit për një promovim që vazhdon pa afat.",
          "Ruaj — aktivizohet sipas orarit dhe zbatohet automatikisht në pagesë, pa nevojë për kode."
        ]
      },
      {
        "type": "note",
        "text": "Pragu kontrollohet mbi nëntotalin e artikujve brenda fushëveprimit, jo mbi gjithë shportën. Një promovim “shpenzo 1000 $ te Pijet” numëron për pragun vetëm pijet, ndërsa produktet e shënuara “përjashtohen nga promovimet” nuk numërohen kurrë."
      },
      {
        "type": "p",
        "text": "Një sjellje për të cilën na pyesin shpesh: nëse një promovim me prioritet më të lartë zbatohet i pari, pragu kontrollohet mbi shumën e zbritur tashmë — një shportë që duket mbi prag mund ta humbasë për pak. Që pragu të vlerësohet i pari, jepi një numër prioriteti më të vogël."
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
    "question": "Si t'i konfigurosh ofertat “blej një merr një” dhe ofertat me artikullin e N-të",
    "keywords": [
      "bogo",
      "blej një merr një",
      "artikulli i tretë falas",
      "blej X merr Y",
      "udhëzues",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Krijo një promovim të llojit “blej N merr N”: vendos sa artikuj blihen, sa merren dhe përqindjen e zbritjes (100% = falas). Kufizoje te produkte të caktuara ose te një kategori e tërë — produktet e ndryshme të së njëjtës kategori grupohen bashkë."
      },
      {
        "type": "list",
        "items": [
          "Njësia e zbritur është më e lira në grup, e vlerësuar me çmimin e saj efektiv aktual — nëse një promovim më i hershëm e ka zbritur tashmë, shuma e BOGO llogaritet mbi çmimin e zbritur, jo mbi çmimin e listës.",
          "Nëse do që etiketa “artikulli i 3-të falas” të shfaqë çmimin e plotë të listës, jepi këtij BOGO numrin më të vogël të prioritetit që të llogaritet i pari. Kur një zbritje për gjithë shportën ekzekutohet e para, zbritja e shfaqur për artikullin falas është më e vogël se çmimi i listës — një veti e radhës së llogaritjes që e kemi verifikuar gjerësisht, jo një defekt. Të dyja radhët japin pothuajse të njëjtin total; ndryshon vetëm vendi ku shfaqet zbritja."
        ]
      },
      {
        "type": "p",
        "text": "Këshillë: vendose ofertën kryesore të parën sipas prioritetit, që zbërthimi i zbritjeve në faturë të përputhet me mesazhin tënd të marketingut."
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
    "question": "Si t'i konfigurosh shumëzuesit e pikëve bonus",
    "keywords": [
      "shumëzues pikësh",
      "pikë të dyfishta",
      "pikë bonus",
      "udhëzues",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Krijo një promovim të llojit shumëzues pikësh dhe vendos shumëzuesin (numër i plotë, 2 ose më i madh). Opsionalisht shto një prag shpenzimi (p.sh. shpenzo 500 $ → pikë të dyfishta) dhe një orar (p.sh. vetëm të shtunave)."
      },
      {
        "type": "list",
        "items": [
          "Kur kualifikohen disa shumëzues njëkohësisht, zbatohet vetëm më i larti — ata nuk shumëzohen kurrë mes tyre dhe nuk mblidhen.",
          "Pragu i shpenzimit kontrollohet pas përdorimit të pikëve: nëse shlyerja me pikë e ul totalin nën prag, shumëzuesi nuk aktivizohet këtë herë.",
          "Për të fituar pikë, në pagesë duhet zgjedhur një anëtar — porositë pa anëtar nuk fitojnë pikë, kështu që shumëzuesi nuk ka çfarë të shumëzojë."
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
    "question": "Si t'i konfigurosh ofertat sipas nivelit të anëtarësisë dhe ditëlindjes",
    "keywords": [
      "nivel anëtarësie",
      "ofertë ditëlindjeje",
      "zbritje ditëlindjeje",
      "vip",
      "udhëzues",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Së pari krijo nivelet te Cilësimet → Nivelet e anëtarësisë (p.sh. Gold), pastaj drejtoje promovimin te ai nivel. Për ofertat e ditëlindjes, vendos kushtin “Muaji i ditëlindjes”."
      },
      {
        "type": "list",
        "items": [
          "Anëtari duhet të zgjidhet në pagesë që oferta të aktivizohet — përshtatshmëria vlerësohet sipas anëtarit të zgjedhur aktualisht.",
          "Përshtatshmëria për ditëlindje lexon muajin e ditëlindjes së anëtarit, prandaj plotëso fushën e ditëlindjes; anëtarët pa të nuk trajtohen kurrë si klientë ditëlindjeje.",
          "Ngritjet automatike të nivelit vlerësohen kur përfundon pagesa; nëse porosia shfuqizohet, ngritja që ajo ka shkaktuar zhbëhet automatikisht."
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
    "question": "Si t'i konfigurosh dhuratat, shtesat me pagesë dhe çmimet e pakove",
    "keywords": [
      "dhuratë",
      "shtesë me pagesë",
      "pako me çmim fiks",
      "blej A merr B",
      "udhëzues"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ka tre lloje ofertash të përbëra: dhuratë me blerje (blej A merr B), shtesë me pagesë (shto X $ për të marrë Y) dhe çmim pakoje (çdo N për X $). Dhuratat dhe shtesat me pagesë presin konfirmimin e arkëtarit; çmimet e pakove zbatohen automatikisht."
      },
      {
        "type": "p",
        "text": "Dhuratat dhe shtesat me pagesë nuk e ndryshojnë kurrë vetë shportën. Kur plotësohen kushtet, në ekranin e arkëtarit shfaqet një banner sugjerimi, dhe shporta ndryshon vetëm kur arkëtari troket butonin e pranimit (Zgjidh dhuratën ose Zgjidh shtesën) — me qëllim, sepse dhuratat përfshijnë stok fizik: dikush duhet të konfirmojë që e ka në dispozicion dhe që klienti e dëshiron."
      },
      {
        "type": "list",
        "items": [
          "Pas Refuzo, i njëjti sugjerim nuk shfaqet më për këtë shportë; një shportë e re ose e pastruar e kërkon sërish.",
          "Nëse para konfirmimit të pagesës shfaqet një sugjerim i ri, ai duhet pranuar ose refuzuar para se porosia të mund të dërgohet.",
          "Rreshtat e dhuratave dhe të shtesave nuk mund të zbriten më tej nga promovime të tjera me para, dhe nuk numërohen për pragjet e promovimeve të tjera."
        ]
      },
      {
        "type": "p",
        "text": "Çmimet e pakove (të zbatuara automatikisht që nga v2.4): sa herë që shporta mund të formojë një pako, DingPOS e grupon dhe e përfshin në total — pa pyetje, dhe pakot nuk mund të ndahen."
      },
      {
        "type": "list",
        "items": [
          "Një pako formohet vetëm kur e bën shportën më të lirë. Mes artikujve me të njëjtin çmim, grupohen së pari ata pa zbritje, dhe artikujt që kanë tashmë zbritje e ruajnë zbritjen.",
          "Cilët artikuj grupohen bashkë varet vetëm nga ajo që ka në shportë, kurrë nga radha e skanimit.",
          "Çdo artikull anëtar tregon pjesën e vet të zbritjes së pakos, dhe shuma e çdo rreshti është pas zbritjeve.",
          "Në pagesë pakot riformohen me çmimet më të fundit; nëse rezultati ndryshon, të kërkohet të konfirmosh totalin e ri."
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
    "question": "Si t'i konfigurosh orarin dhe Happy Hour",
    "keywords": [
      "orar promovimi",
      "happy hour",
      "ditët e javës",
      "mesnatë",
      "udhëzues"
    ],
    "content": [
      {
        "type": "p",
        "text": "Orari i çdo promovimi ka tre shtresa: një interval datash (fillimi i detyrueshëm, mbarimi opsional), një dritare ditore kohe (Happy Hour) dhe ditë të zgjedhura të javës. Të tria duhet të përputhen që promovimi të aktivizohet."
      },
      {
        "type": "list",
        "items": [
          "Për dritaret që kalojnë mesnatën (p.sh. 22:00–02:00), dita e javës vlerësohet sipas ditës kur fillon dritarja: me të zgjedhur vetëm të premten, e shtuna në 01:30 numërohet ende si seanca e së premtes dhe aktivizohet — por e shtuna në 23:30 jo.",
          "Data e mbarimit është kufi i prerë — edhe nëse dritarja e Happy Hour është ende aktive, promovimi ndalon në çastin kur kalon data e mbarimit.",
          "Koha lexohet nga ora e pajisjes iPad, ndaj sigurohu që zona kohore dhe ora e pajisjes të jenë të sakta."
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
    "question": "Prioriteti, kombinimi i promovimeve dhe ndalimi pas zbatimit: si funksionojnë",
    "keywords": [
      "prioriteti",
      "kombinim promovimesh",
      "ndalo promovimet pasuese",
      "konflikt promovimesh",
      "udhëzues"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kur kualifikohen disa promovime njëkohësisht, tre cilësime kontrollojnë radhën dhe bashkëveprimin:"
      },
      {
        "type": "list",
        "items": [
          "Prioriteti: numrat më të vegjël llogariten të parët. Tërhiqe për ta rirenditur në listën e promovimeve.",
          "Kombinohet me promovime të tjera (aktiv si parazgjedhje): kur është joaktiv, një promovim në nivel artikulli bllokon vetëm rreshtat që ka zbritur — artikujt e tjerë mund të marrin ende promovime të mëvonshme në nivel artikulli; një promovim joaktiv në nivel shporte bllokon të gjitha promovimet e mëvonshme në nivel shporte.",
          "Ndalo promovimet pasuese kur ky zbatohet: pasi ky promovim zbatohet, nuk llogaritet asnjë zbritje tjetër me para — por shumëzuesit e pikëve dhe sugjerimet për dhurata nuk preken."
        ]
      },
      {
        "type": "note",
        "text": "Promovimet e mëvonshme llogariten mbi shumën e zbritur tashmë: 10% zbritje plus 5% zbritje nuk janë 15% zbritje — zbritja e dytë zbatohet mbi totalin pas të parës. DingPOS gjithashtu nuk kërkon kurrë kombinimin më të favorshëm për klientin; radha përcaktohet tërësisht nga prioritetet që vendos ti."
      },
      {
        "type": "p",
        "text": "Një detaj interesant: nëse një zbritje rrumbullakoset në zero, zbatimi nuk numërohet — dhe nuk e harxhon kufirin e përdorimit."
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
    "question": "A do të integrohet përpunimi i pagesave në DingPOS?",
    "keywords": [
      "pagesa",
      "pagesa me kartë",
      "përpunimi i pagesave",
      "integrim",
      "POS terminal"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS aktualisht nuk përfshihet në lëvizjen e parave — mënyrat e pagesës janë etiketa kontabiliteti, ndërsa pagesat bëhen përmes terminalit ose aplikacionit tënd ekzistues të pagesave."
      },
      {
        "type": "p",
        "text": "Nëse do ta integrojmë përpunimin e pagesave varet nga kërkesa reale e përdoruesve. Nëse të duhet, na shkruaj se cilin shërbim do të doje të lidhnim (cilin ofrues pagesash, cilin terminal) dhe për çfarë do ta përdorje — zhvillimin e prioritizojmë sipas numrit të kërkesave."
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
    "question": "A do të mbështetet fatura elektronike dhe printimi i faturave?",
    "keywords": [
      "faturë elektronike",
      "faturë",
      "printim fature",
      "printer",
      "printer faturash"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ende jo. Faturimi elektronik dhe printimi i faturave kërkojnë blerjen e makinerive të faturimit dhe printerëve të faturave për t’i testuar dhe për të zhvilluar funksionet — një kosto e konsiderueshme. Si ekip i vogël, do t’i planifikojmë kur të rritet numri i përdoruesve dhe të ardhurat nga shitjet të jenë të qëndrueshme."
      },
      {
        "type": "p",
        "text": "Nëse të duhet, na shkruaj modelin e pajisjes që përdor — zhvillimin e prioritizojmë sipas numrit të kërkesave."
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
    "question": "A mbështeten skanerët fizikë të barkodit?",
    "keywords": [
      "skaner barkodi",
      "pistoletë skanimi",
      "bluetooth",
      "usb",
      "pajisje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Skanimi i barkodit me kamerë për shtimin e produkteve mbështetet tashmë. Skanerët fizikë (USB / Bluetooth) ende nuk mbështeten zyrtarisht — si veçoritë e tjera që kërkojnë pajisje, duhen blerë pajisje për testim e zhvillim dhe planifikimi do të bëhet kur të rritet numri i përdoruesve."
      },
      {
        "type": "note",
        "text": "Fusha e kërkimit te Arka përputh barkodet, kështu që teorikisht një skaner në modalitetin e tastierës mund të shkruajë në të dhe të shfaqë produktet — por nuk e kemi verifikuar në pajisje reale, prandaj nuk mbështetet zyrtarisht. Nëse ke provuar një skaner që funksionon, na trego modelin!"
      },
      {
        "type": "p",
        "text": "Nëse të duhet, na shkruaj — zhvillimin e prioritizojmë sipas numrit të kërkesave."
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
    "question": "A do të ketë raport të shlyerjes mujore?",
    "keywords": [
      "shlyerje mujore",
      "rakordim",
      "mbyllje muaji",
      "raport mujor",
      "të pagueshme",
      "të arkëtueshme"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ende nuk ka një raport të veçantë të shlyerjes mujore, por gjithçka që të duhet për rakordim është tashmë në aplikacion:"
      },
      {
        "type": "list",
        "items": [
          "Zgjidh Statistika te Këtë muaj për të parë të ardhurat nga shitjet e muajit, paratë e arkëtuara, fitimin dhe ndarjen sipas mënyrës së pagesës.",
          "Blerjet nga furnitorët me afat mujor mblidhen te Të papaguara në Blerje, ku mund të shlyesh menjëherë blerjet e një muaji të tërë.",
          "Shitjet me afat pagese për klientët mblidhen te Porosi → Të arkëtueshme, ku mund të shlyesh menjëherë shitjet e një muaji të tërë."
        ]
      },
      {
        "type": "p",
        "text": "Nëse të duhet një raport i shlyerjes mujore që mund ta eksportosh ose printosh, na shkruaj cilat fusha të duhen — zhvillimin e prioritizojmë sipas numrit të kërkesave."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
