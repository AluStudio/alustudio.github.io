// Generated from en and the sq translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync sq`, then `npm run l10n -- dingpos apply sq`.

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
      "dyqan i ri",
      "shteti",
      "monedha",
      "tatimet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Herën e parë që hap DingPOS, një udhëzues konfigurimi e hap dyqanin tënd në dy hapa dhe disa minuta:"
      },
      {
        "type": "steps",
        "items": [
          "Zgjidh shtetin ose rajonin. Në krye të listës shfaqet shteti ose rajoni ku ndodhet ky iPad, pastaj tregjet më të zakonshme; poshtë tyre janë të gjitha 175 shtetet dhe rajonet ku DingPOS është në App Store, të kërkueshme me emër në gjuhën e aplikacionit ose në anglisht. Zgjedhja plotëson monedhën, tatimet dhe mënyrën e tatimit.",
          "Te Dyqani yt, shkruaj emrin e dyqanit, shto opsionalisht një logo dhe kontrollo monedhën, tatimet dhe mënyrën e tatimit (me tatim të përfshirë / pa tatim të përfshirë). Monedha është si parazgjedhje ajo e shtetit tënd; trokite për të zgjedhur nga 130 monedha. Lista e tatimeve përmban tatimet e paracaktuara të shtetit tënd: riemërtoji, ndrysho një normë, fshi një tatim ose trokit Shto tatim për një rresht tjetër. Një dyqan në British Columbia, për shembull, e ndryshon rreshtin e parë në “GST 5” dhe shton një rresht “PST 7”."
        ]
      },
      {
        "type": "p",
        "text": "Trokit Vazhdo dhe do të shohësh “Ding! Dyqani yt është gati.” DingPOS konfiguron edhe dy mënyra pagese, Para në dorë dhe Kartë krediti. Pastaj shto produktet te Produkte dhe nis shitjet."
      },
      {
        "type": "note",
        "text": "Monedha nuk mund të ndryshohet pas konfigurimit; tatimet dhe mënyra e tatimit mund të ndryshohen të dyja më vonë te Cilësimet → Të dhënat e dyqanit. Në SHBA, Kanada, Brazil dhe Mikronezi norma varet nga shteti, provinca ose qyteti, ndaj fusha e normës nis bosh dhe ti shkruan normën që aplikon për të vazhduar. Norma duhet të jetë mbi 0: një dyqan që nuk ngarkon tatim e fshin rreshtin. Në Gjermani, Francë, Itali dhe vende të tjera evropiane lista përfshin edhe normat e reduktuara të zakonshme në tregtinë vendase me pakicë, nën emrin vendas të tatimit, si “MwSt. 19%” dhe “MwSt. 7%” në Gjermani; normat e reduktuara nuk aplikohen si parazgjedhje te produktet e reja, ndaj aktivizoji për çdo produkt veç e veç. Lista me 175 shtete dhe zgjedhja e monedhës erdhën në v3.2; versionet më të vjetra ofronin 15 shtete."
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
        "text": "Jo. DingPOS nuk ka sistem llogarish — shkarkoje dhe nis të shesësh. Produktet, porositë dhe të dhënat e klientëve qëndrojnë të gjitha në iPad-in tënd. Ato na arrijnë vetëm nëse dërgon një raport mbështetjeje nga Cilësimet, i cili bashkëngjit një kopje të të dhënave të dyqanit tënd që të mund ta riprodhojmë problemin."
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
        "text": "Aktualisht DingPOS mbështet iPad me iPadOS 17.4 ose më të ri dhe është projektuar kryesisht për orientim horizontal."
      },
      {
        "type": "p",
        "text": "iPhone dhe Mac nuk mbështeten ende. Nëse dëshiron që të mbështesim një pajisje tjetër, na shkruaj dhe na trego se si do ta përdorje."
      },
      {
        "type": "note",
        "text": "Çdo iPad që punon me iPadOS 17 mund të përditësohet në 17.4, ndaj asnjë model nuk mbetet jashtë. Një iPad që është ende në iPadOS 17.0–17.3 ka nevojë fillimisht për një përditësim sistemi, te Cilësimet → Të përgjithshme → Përditësimi i softuerit (në iPad në anglisht: Settings → General → Software Update), para se të instalojë DingPOS v3.5 ose më të ri."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "A mund ta ndryshoj monedhën, normën e tatimit ose mënyrën e tatimit pas konfigurimit?",
    "keywords": [
      "monedha",
      "mënyra e tatimit",
      "ndryshim",
      "e kyçur",
      "e bllokuar",
      "norma e tatimit",
      "ndrysho monedhën",
      "tatimet",
      "me tatim të përfshirë",
      "pa tatim të përfshirë"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tatimi mund të ndryshojë; monedha jo. Tatimet dhe mënyra e tatimit ndryshohen të dyja te karta Tatimi te Cilësimet → Të dhënat e dyqanit, dhe ndryshimi vlen vetëm për shitjet e mëpasshme: porositë e kaluara, kthimet dhe raportet i mbajnë shumat e tatimit dhe mënyrën që kanë regjistruar."
      },
      {
        "type": "list",
        "items": [
          "Tatimet: shto një, riemërtoje, ndrysho normën ose fshije — shih “Si llogaritet tatimi?”",
          "Mënyra e tatimit (me tatim të përfshirë / pa tatim të përfshirë): trokit mënyrën tjetër dhe konfirmimi tregon një shembull me tatimin tënd të parë, si “një artikull NT$100 me tatim 5%: klienti paguan NT$105”. Çmimet i mbajnë numrat e tyre dhe një shportë e hapur rillogaritet në mënyrën e re kur kthehesh te Arka. Mënyra mund të ndërrohet që nga v3.5; versionet më të vjetra e kyçin gjatë konfigurimit.",
          "Pas një ndërrimi, një kthim i plotë malli i kthen paratë për porosinë origjinale ashtu siç ishte. Një këmbim (me artikuj zëvendësues) në një porosi të shitur në mënyrën tjetër bllokohet: kthe mënyrën e tatimit te mënyra e mëparshme, ose kthe artikujt dhe bëj pagesën sërish."
        ]
      },
      {
        "type": "p",
        "text": "Monedha kyçet sapo mbaron konfigurimi. Çdo porosi historike është regjistruar në të, ndaj ndërrimi i monedhës në mes të rrugës do t’i prishte raportet. Kontrolloje te hapi Dyqani yt i konfigurimit: si parazgjedhje është monedha e shtetit tënd dhe mund ta trokasësh për të zgjedhur një tjetër."
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
      "japonisht",
      "spanjisht",
      "shumëgjuhësh",
      "ndrysho gjuhën",
      "ndërrim gjuhe"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS mbështet 32 gjuhë, përfshirë anglishten, kinezishten tradicionale dhe të thjeshtuar, japonishten, koreanishten, tajlandishten, vietnamishten, indonezianishten, malajzishten, spanjishten (Amerika Latine), portugalishten (Brazil), frëngjishten dhe gjermanishten. Shko te Cilësimet → Preferencat e pajisjes dhe trokit Gjuha e aplikacionit. Hapet faqja e DingPOS në aplikacionin Cilësimet të iPad-it, ku e zgjedh gjuhën te Gjuha."
      },
      {
        "type": "p",
        "text": "iOS nuk i lejon aplikacionet ta hapin drejtpërdrejt listën e gjuhëve, ndaj trokitja e fundit bëhet te Cilësimet e sistemit. Gjuha vlen vetëm për këtë iPad."
      },
      {
        "type": "note",
        "text": "Gjuhët përveç anglishtes dhe kinezishtes tradicionale erdhën në v3.2. Nëse te Gjuha shfaqen vetëm anglishtja dhe kinezishtja, përditëso DingPOS nga App Store."
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
        "text": "Ekrani i arkës punon me dhjetë shporta në të njëjtën kohë. Prek \"+\" në shiritin e shportave për të shtuar një, dhe prek një skedë me numër për të kaluar te ajo."
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
      "zbritje për shportën",
      "zbritje të paracaktuara"
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
      },
      {
        "type": "p",
        "text": "Zbritjet që i jep shpesh mund t’i ruash: shko te Cilësimet → Besnikëria dhe promovimet → Zbritje të paracaktuara dhe prek Shto paracaktim, për shembull “Çmim për punonjësit 20% zbritje”. Te arka, si zbritja për artikull ashtu edhe zbritja për shportën kanë një meny Paracaktime; kur zgjedh një, plotësohen lloji dhe vlera e zbritjes saktësisht sikur t’i kishe shkruar vetë, ndaj ajo numërohet prapë te kufiri i zbritjes së një punonjësi. Zbritjet e paracaktuara erdhën në v3.6 dhe kërkojnë planin Standard ose më lart."
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
      "disa tatime",
      "GST",
      "PST",
      "pauzo tatimin",
      "faturë"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tatimi llogaritet automatikisht sipas tatimeve dhe mënyrës së tatimit te Cilësimet → Të dhënat e dyqanit. Ka dy mënyra tatimi, dhe fatura shfaq shumën e tatimit në të dyja:"
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
        "text": "Një dyqan mund të ngarkojë disa tatime, si GST 5% plus PST 7% në British Columbia, ose tatimin e konsumit 10% të Japonisë krahas normës së reduktuar 8%:"
      },
      {
        "type": "list",
        "items": [
          "Te karta Tatimi, prek Shto tatim dhe shkruaj një emër e një normë. Aktivizo Zbato për produktet e reja dhe produktet që shton më vonë e mbartin këtë tatim si të paracaktuar. Nëse dyqani ka tashmë një tatim të paracaktuar, tatimi i ri shtohet me këtë çelës të çaktivizuar; aktivizoje kur duhen ngarkuar të dyja.",
          "Çdo produkt zgjedh tatimet që ngarkon te Tatimet e aplikuara në formularin e produktit — një kuti dreke bento mund të ngarkojë vetëm normën e reduktuar 8%. Kur ka dy ose më shumë tatime të aktivizuara, formulari shfaq normën e kombinuar të produktit.",
          "Prek një tatim për ta riemërtuar, për të ndryshuar normën e tij, ose përdor Zbato për të gjitha produktet ose Hiqe nga të gjitha produktet për ta shtuar ose hequr nga çdo produkt me një prekje. Kur fshin një tatim, aplikacioni të tregon më parë sa produkte do të reshtin ta ngarkojnë.",
          "Në një dyqan me tatim të shtuar, totalet e shportës shfaqin një rresht për secilin tatim, ndërsa detajet e porosisë listojnë një rresht për secilin tatim me normën e tij dhe shumën mbi të cilën është ngarkuar."
        ]
      },
      {
        "type": "p",
        "text": "Për të ndalur së ngarkuari tatim për një farë kohe, çaktivizo Ngarko tatim në krye të kartës Tatimi: çdo shitje e mëpasshme është pa tatim, përfshirë artikujt që janë tashmë në një shportë. Çdo produkt i mban tatimet e tij, dhe kur ta aktivizosh përsëri çelësin, ato kthehen siç ishin."
      },
      {
        "type": "p",
        "text": "Rendi i plotë i llogaritjes: zbritjet për artikull dhe promovimet → zbritja për shportën → shpërblimi i pikëve → tatimi. Shumat rrumbullakosen sipas rregullit që gjysmat rrumbullakosen lart, në bazë të shifrave dhjetore të monedhës (p.sh. 0 për TWD, 2 për USD). Tatimi llogaritet një herë për çdo tatim në çdo porosi, dhe pjesa e tij dhjetore ndjek Rrumbullakimin e tatimit te karta Tatimi: Rrumbullako lart nga gjysma, Rrumbullako poshtë ose Rrumbullako lart. Dyqanet e reja në Japoni nisin me Rrumbullako poshtë; dyqanet e tjera nisin me Rrumbullako lart nga gjysma."
      },
      {
        "type": "note",
        "text": "Tatimet me emër erdhën në v3.5. Kur përditëson, norma jote e tatimit bëhet një tatim me emër (për shembull “GST 10%” në Australi) dhe të gjitha produktet ekzistuese e mbartin atë; një dyqan që kishte normë 0 nuk ngarkon tatim. Porositë e kaluara dhe kthimet i mbajnë normat e tatimit dhe shumat me të cilat u regjistruan; raportet tani i numërojnë të ardhurat para tatimit, përfshirë periudhat e kaluara (shih “Cili është ndryshimi mes të ardhurave nga shitjet dhe parave të arkëtuara?”)."
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
    "question": "Cilat mënyra pagese mbështeten?",
    "keywords": [
      "mënyra pagese",
      "para në dorë",
      "kartë krediti",
      "line pay",
      "kusur",
      "mënyrë e personalizuar",
      "me afat pagese",
      "komision"
    ],
    "content": [
      {
        "type": "p",
        "text": "Një dyqan i ri nis me dy mënyra pagese, Para në dorë dhe Kartë krediti, me emra në gjuhën e aplikacionit gjatë konfigurimit. Te Cilësimet → Mënyrat e pagesës mund të shtosh çdo mënyrë tjetër (p.sh. Apple Pay, LINE Pay, një portofol vendor), si dhe t’i renditësh. Prek një mënyrë për ta riemërtuar, për shembull nga Kartë krediti në “Kartë (Square)”; Statistika i numëron nën emrin e ri edhe shitjet e bëra para riemërtimit (që nga v3.6). Fshi mënyrën e pagesës gjendet në fund të fletës së ndryshimit dhe pyet para se të fshijë; porositë e kaluara e mbajnë mënyrën me të cilën u paguan, dhe mënyra e fundit e mbetur nuk mund të fshihet."
      },
      {
        "type": "p",
        "text": "Mënyrat e pagesës janë etiketa kontabël — DingPOS nuk përpunon pagesa të vërteta. Merr pagesat me kartë ose me celular me terminalin ose aplikacionin që ke tashmë, pastaj zgjidh etiketën përkatëse në DingPOS për ta regjistruar. Pagesat me para në dorë e llogaritin kusurin automatikisht, dhe aty ku monedhat më të vogla nuk përdoren më, edhe paratë mund të rrumbullakosen — shih “A mund të rrumbullakosen pagesat me para në dorë sipas monedhave në përdorim?”"
      },
      {
        "type": "p",
        "text": "Nëse ofruesi i pagesave me kartë ose celular merr komision, vendos një normë komisioni për mënyrën dhe Statistika vlerëson komisionin e çdo mënyre dhe paratë neto të arkëtuara — shih “A mund t’i ndjekë DingPOS komisionet e pagesave me kartë dhe celular?”"
      },
      {
        "type": "p",
        "text": "Për një klient të rregullt që merr mallin sot dhe paguan më vonë, zgjidh Me afat pagese: shitja regjistrohet si e arkëtueshme dhe shlyhet kur vijnë paratë. Shih “A mund të blejnë klientët e rregullt me afat pagese dhe të paguajnë më vonë?”"
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
    "question": "A mund t’i ndjekë DingPOS komisionet e pagesave me kartë dhe celular?",
    "keywords": [
      "komision procesimi",
      "komision karte",
      "komision transaksioni",
      "normë komisioni",
      "para neto të arkëtuara",
      "komision tregtari",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Te Cilësimet → Mënyrat e pagesës, prek një mënyrë pagese (ose shto një të re) dhe plotëso Komision procesimi: një përqindje, një shumë fikse për transaksion, ose të dyja. Mënyrat me para në dorë nuk kanë komision. Që nga ai moment, çdo pagesë e arkëtuar me atë mënyrë regjistron një komision të vlerësuar me normën që vlen në atë çast."
      },
      {
        "type": "p",
        "text": "Te Statistika, karta Mënyrat e pagesës shton një rresht “Komision · Neto” nën çdo mënyrë që ka komision, ndërsa në fund të kartës shfaqen komisionet e vlerësuara dhe paratë neto të arkëtuara të vlerësuara për gjithë periudhën."
      },
      {
        "type": "list",
        "items": [
          "Shkruaj normën që ofruesi zbret realisht. Nëse mbi komision ngarkohet tatim, përfshije: për 3% plus 5% tatim, shkruaj 3,15%. Lëri të dyja fushat bosh nëse nuk ka komision.",
          "Ndryshimi i normës vlen vetëm për pagesat e mëvonshme; komisionet e regjistruara tashmë mbeten siç ishin.",
          "“Përqindja e komisionit kthehet te rimbursimet” nis e aktivizuar për dyqanet në Tajvan dhe Japoni, dhe e çaktivizuar gjetkë, sepse ofrues si Stripe, Square dhe PayPal e mbajnë komisionin kur bën rimbursim; vendose sipas ofruesit tënd. Ajo rregullon kthimet dhe kaparet e rimbursuara të porosive paraprake: kur është e aktivizuar, përqindja kthehet; komisioni fiks nuk kthehet kurrë. Një shfuqizim ose një anulim i shlyerjes e injoron këtë çelës dhe merr prapa komisionin e plotë që kishte regjistruar, përfshirë komisionin fiks. Në të dyja rastet, klienti merr të njëjtën shumë.",
          "Pagesat e arkëtuara para se mënyra të kishte normë nuk kanë komision: Statistika i shënon “N pa normë” dhe e shfaq neton si “—”."
        ]
      },
      {
        "type": "note",
        "text": "Komisionet janë vlerësime nga norma që shkruan; shuma reale është ajo e pasqyrës së ofruesit. Ndryshimi i normave kërkon planin Standard ose më lart, dhe te Lite fushat janë të bllokuara. Që nga v3.4 çdo plan i sheh komisionet e regjistruara te Statistika dhe te Fitimi, ndaj një normë e caktuar gjatë provës vazhdon të vlerësojë komisione edhe te Lite; versionet e mëparshme i shfaqnin komisionet vetëm te Standard e më lart."
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
    "question": "A mund të rrumbullakosen pagesat me para në dorë sipas monedhave në përdorim?",
    "keywords": [
      "rrumbullakimi i parave",
      "rrumbullakim",
      "rrumbullakim lart",
      "rrumbullakim poshtë",
      "monedha",
      "qindarkë",
      "cent",
      "0.05",
      "kusur",
      "Kanada",
      "Australia",
      "Zvicër"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Kanadaja, Australia, Zelanda e Re, Zvicra, Danimarka, Suedia, Norvegjia, Belgjika, Finlanda dhe Hungaria nuk i përdorin më monedhat e tyre më të vogla, ndaj DingPOS i rrumbullakos paratë në dorë në një shumë që mund ta japësh realisht: një porosi C$12.99 e paguar me para në dorë merret C$13.00, dhe kusuri llogaritet nga C$13.00. Pagesat me kartë dhe të tjerat pa para në dorë mbeten të sakta."
      },
      {
        "type": "p",
        "text": "Një dyqan i ri i konfiguruar në një nga këto shtete dhe me monedhën e atij shteti e ka këtë cilësim të aktivizuar automatikisht. Çdo dyqan tjetër mund ta aktivizojë te karta Rrumbullakimi i parave, në fund të Cilësimet → Mënyrat e pagesës: zgjidh shumën drejt së cilës do të rrumbullakosen pagesat me para në dorë (Pa rrumbullakim; në një monedhë me cent 0.05, 0.10, 0.50 ose 1.00; në një monedhë pa cent 5, 10, 50 ose 100, si TWD ose JPY) dhe, kur një shumë mund të jetë saktësisht në mes të dy vlerave, nëse rrumbullakimi bëhet lart apo poshtë. Ndryshimi vlen vetëm për pagesat e mëvonshme."
      },
      {
        "type": "list",
        "items": [
          "Pagesa shfaq “Para të marra C$13.00”. Nëse klienti kërkon të paguajë shumën e saktë, prek Merr shumën e saktë nën mënyrat e pagesës; vlen vetëm për atë shitje.",
          "Totali i porosisë, tatimi, të ardhurat nga shitjet, pikët dhe shpenzimet e anëtarit nuk ndryshojnë; diferenca e rrumbullakimit qëndron te pagesa, dhe ekrani i faturës e detajet e porosisë e shfaqin nën total, si “Rrumbullakimi i parave +C$0.01”.",
          "Edhe rimbursimet me para në dorë për kthimet, kaparet me para në dorë dhe mbetjet e marrjes së mallit për porositë paraprake, diferencat e paguara në këmbime dhe borxhet e shitjeve me afat pagese të shlyera me para në dorë rrumbullakosen; kur shlyen disa bashkë, grupi rrumbullakoset vetëm një herë.",
          "Shfuqizimet, kaparet e kthyera të porosive paraprake dhe shlyerjet e anuluara kthejnë saktësisht atë që është regjistruar, pa rrumbullakim të ri.",
          "Para të arkëtuara te Statistika tregon sa prej tyre ishte rrumbullakim parash, dhe Fitimi mujor merr një rresht Rrumbullakimi i parave që llogaritet te fitimi neto. Rrumbullakimi nuk është kurrë e ardhur nga shitjet."
        ]
      },
      {
        "type": "note",
        "text": "Zvicra rrumbullakos gjithmonë poshtë, sipas rregullave të saj të shfaqjes së çmimeve — CHF 12.98 merret CHF 12.95, dhe nuk ka zgjedhje në mes. Belgjika rrumbullakos vetëm totalet mbi €0.05. Rrumbullakimi i parave është në çdo plan, dhe një dyqan ekzistues vazhdon t’i pranojë pagesat me para në dorë në shumat e sakta si më parë, derisa ta aktivizosh."
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
      "hide-out-of-stock",
      "multiple-carts"
    ]
  },
  {
    "slug": "hide-out-of-stock",
    "category": "checkout",
    "since": "3.1",
    "question": "A mund t’i fsheh produktet pa stok në ekranin e arkës?",
    "keywords": [
      "fsheh",
      "pa stok",
      "malli mbaroi",
      "stok bosh",
      "arkë",
      "produkti mungon",
      "nuk e gjej produktin"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Shko te Cilësimet → Preferencat e pajisjes dhe aktivizo Fshih produktet pa stok (e çaktivizuar si parazgjedhje). Pastaj rrjeta e produkteve të arkës, filtri i kategorive dhe kërkimi (me emër dhe barkod) i kapërcejnë të gjitha produktet me stok 0 ose më pak. Ndërruesi vlen menjëherë, pa nevojën ta rihapësh aplikacionin."
      },
      {
        "type": "list",
        "items": [
          "Produktet që nuk ndjekin stokun shfaqen gjithmonë. Një produkt me variante fshihet vetëm kur të gjitha variantet janë pa stok.",
          "Prek vetëm arkën e këtij iPad-i; lista Produkte i shfaq prapë të gjitha produktet.",
          "Kur fshihen të gjitha produktet, arka shfaq “Të gjitha produktet janë pa stok” dhe të tregon ku ta çaktivizosh ndërruesin."
        ]
      },
      {
        "type": "note",
        "text": "Sa kohë ndërruesi është aktiv, ky iPad nuk i gjen produktet pa stok, ndaj nuk mund të shesë me stok negativ as të pranojë porosi paraprake për to — çaktivizoje kur të duhet. Nëse produktet duken sikur kanë zhdukur nga arka, zakonisht shkaku është ky ndërrues."
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
    "slug": "checkout-customer",
    "category": "checkout",
    "since": "3.4",
    "question": "Si e shtoj ose e ndryshoj klientin në një shitje?",
    "keywords": [
      "klient",
      "anëtar",
      "lidh klientin",
      "ndrysho klientin",
      "klient i ri",
      "pagesa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lidhe klientin në shportë ose në ekranin e pagesës: rreshti Klienti nën shumë hap listën e klientëve kur nuk është lidhur askush, dhe ofron Ndrysho klientin ose Hiq klientin kur është lidhur dikush. Klienti i zgjedhur në pagesë bëhet klienti i shportës dhe mbetet në shportë nëse e anulon pagesën."
      },
      {
        "type": "list",
        "items": [
          "Ndryshimi i klientit rillogarit menjëherë zbritjet e nivelit, ofertat e ditëlindjes dhe përdorimin e pikëve. Paratë në dorë ose kapari që ke futur tashmë ruhen dhe kontrollohen sipas totalit të ri.",
          "Nuk e gjen? Prek Klient i ri lart djathtas në listën e klientëve, ose në mes kur asgjë nuk përputhet me kërkimin tënd. Ajo që kërkove plotëson formularin — shifrat shkojnë te telefoni, çdo gjë tjetër te emri — dhe klienti i ri lidhet me shitjen.",
          "Kur prek Me afat pagese pa klient të lidhur, hapet lista e klientëve, dhe Me afat pagese zgjidhet sapo të zgjedhësh dikë.",
          "Nëse klienti i ri e çon një zbritje manuale mbi kufirin e zbritjes të operatorit, së pari miraton një menaxher; nëse e anulon miratimin, klienti mbetet siç ishte."
        ]
      },
      {
        "type": "note",
        "text": "Klientët janë pjesë e planit Standard; te Lite rreshti shfaq “Klientët — plani Standard” dhe hap detajet e përmirësimit. Rreshti Klienti në pagesë erdhi në v3.4; versionet e mëparshme e lidhin klientin vetëm në shportë."
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
        "text": "Shko te Porosi, gjej porosinë, hap detajet e saj dhe trokit Shfuqizo. Fleta “Të shfuqizohet kjo porosi?” pranon një arsye opsionale (deri në 100 karaktere); trokit Shfuqizo lart djathtas dhe u krye. Arsyeja shfaqet te detajet e porosisë dhe në regjistrin e aktivitetit, dhe nuk mund të ndryshohet pasi të dërgohet."
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
      "ndërrim numri",
      "skartim",
      "arsyeja e kthimit"
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
          "Për një produkt me stok të gjurmuar, çdo rresht i kthyer mund të kthehet në stok (Kthe në stok, parazgjedhja) ose të hidhet tej (Skarto, që nga v3.5). Kthe në stok e shton stokun përsëri. Skarto e lë stokun siç ishte dhe e numëron koston që kishte artikulli kur u shit te Humbje stoku e atij muaji në skedën Fitimi. Rimbursimi, tatimi dhe pikët janë të njëjta në të dyja rastet.",
          "Pikët e fituara nga porosia origjinale merren mbrapsht, pikët e përdorura rimbursohen, dhe artikujt zëvendësues fitojnë pikët e tyre.",
          "Kur porosia origjinale është një shitje me afat pagese e pashlyer, nuk kalojnë para nga njëra palë te tjetra: kthimi zbritet nga të arkëtueshmet e klientit, dhe një artikull zëvendësues më i shtrenjtë ia shton diferencën.",
          "Një porosi mund të kthehet në disa raunde, por kurrë mbi sasinë e shitur fillimisht; kur gjithçka është kthyer, tatimi, zbritjet dhe pikët e kthyera përputhen saktësisht me porosinë origjinale. Kufijtë e përdorimit të promovimeve nuk rikthehen nga një kthim."
        ]
      },
      {
        "type": "p",
        "text": "Fusha Arsyeja është opsionale, deri në 100 karaktere. Shfaqet te detajet e porosisë dhe në regjistrin e aktivitetit, dhe nuk mund të ndryshohet pasi të dërgohet."
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
        "text": "Te pagesa, kaloje skedën në krye të ekranit nga Shitje te Porosi paraprake, zgjidh datën e marrjes, shkruaj kaparin (çdo shumë nga 0 deri në total, me shkurtoret 30% / 50% / e plotë) dhe zgjidh mënyrën e pagesës së kaparit. Lidh një klient që ta kontaktosh për marrjen e porosisë."
      },
      {
        "type": "list",
        "items": [
          "Stoku zbritet kur vendoset porosia paraprake, ndaj sasia e shitshme e pasqyron menjëherë. Është një sinjal, jo një rezervim: një shitje e mëvonshme mund ta marrë prapë njësinë e fundit. Artikujt pa stok shkojnë në negativ dhe rikuperohen kur pranohet një porosi blerjeje.",
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
        "text": "Po. Zgjidh Me afat pagese si mënyrë pagese dhe shitja regjistrohet si borxh i klientit. Një borxh duhet të ketë zotëruesin e vet, ndaj kur nuk ka klient të lidhur, prekja e Me afat pagese hap fillimisht listën e klientëve (që nga v3.4; versionet e mëparshme kërkojnë që ta lidhësh klientin në shportë)."
      },
      {
        "type": "p",
        "text": "Për të arkëtuar, kaloje skedën në krye të ekranit nga Porosi te Të arkëtueshme. Borxhet grupohen sipas klientit; hap njërin për të shlyer një porosi të vetme, një muaj të tërë ose gjithçka — çdo herë DingPOS të pyet si u paguan paratë. Një porosi e vetme mund të shlyhet edhe nga detajet e saj, dhe një shlyerje e futur gabimisht mund të anulohet me Anulo shlyerjen."
      },
      {
        "type": "list",
        "items": [
          "Të ardhurat nga shitjet numërohen në ditën kur del malli; Para të arkëtuara dhe pikët e besnikërisë llogariten në ditën e shlyerjes.",
          "Porositë e pashlyera kanë një shenjë me ngjyrë qelibari në listë, dhe detajet e klientit tregojnë sa i ka mbetur për të paguar.",
          "Një kthim për një porosi që nuk është shlyer ende nuk rimburson para: shuma zbritet nga të arkëtueshmet e atij klienti.",
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
      "checkout-customer",
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
        "text": "Po. Faqet e detajeve të porosisë, të klientit dhe të porosisë së blerjes kanë secila shënime: trokit kartën e shënimeve për t’i ndryshuar, deri në 500 karaktere, ose rreshtin e vetëm “Shto një shënim” kur ende nuk ka asnjë. Mund ta shkruash edhe në formular kur krijon një klient ose një porosi blerjeje."
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
        "text": "Sapo një produkt ka variante, çdo kombinim te Çmimi dhe stoku i varianteve mban stokun e vet, dhe çmimi i tij ndjek Çmimin e produktit: një kombinim pa çmim të vetin e shfaq çmimin e produktit me gri dhe ndryshon bashkë me të, ndërsa një numër që shkruan ti është çmimi i vetë atij kombinimi, i shfaqur me të zezë. Për shembull, vendos Çmimin e një bluze në 390 dhe ndrysho vetëm L në 350: M dhe XL shiten për 390, dhe kur Çmimi më vonë bëhet 420, M dhe XL e ndjekin në 420 ndërsa L mbetet 350. Te ⓘ pranë kolonës Çmimi gjendet Përdor çmimin e produktit, që i kthen të gjitha kombinimet te ndjekja e çmimit të produktit. Produktet e krijuara para v3.6 e mbajnë çmimin e çdo varianti si çmim të vetin të atij kombinimi, dhe Çmimi i produktit është më i ulëti prej tyre. Arka, lista e produkteve dhe detajet e produktit shfaqin një interval nga çmimi më i ulët te më i larti, si “NT$350–NT$390”, ose një çmim të vetëm kur të gjitha kombinimet kushtojnë njësoj; renditja sipas çmimit përdor çmimin më të ulët të kombinimeve. Te pagesa, kur trokit produktin shfaqet një zgjedhës variantesh përpara se ta shtosh në shportë."
      },
      {
        "type": "p",
        "text": "Kostoja funksionon njësoj: një kosto bosh e shfaq koston e produktit me gri dhe ndryshon bashkë me të, ndërsa një numër është kostoja e vetë kombinimit, e shfaqur me të zezë — edhe 0. Përdor koston e produktit, te ⓘ pranë kolonës Kostoja, i pastron menjëherë kostot e veçanta të të gjitha kombinimeve."
      },
      {
        "type": "note",
        "text": "Emrat e opsioneve dhe të vlerave mund të kenë deri në 20 karaktere dhe hapësirat në fillim e në fund hiqen kur ruan. Një vlerë ku nuk ke shkruar asgjë nuk është kombinim dhe anashkalohet kur ruan. Ruajtja ndalet me fushën e rrethuar me të kuqe kur një emër opsioni është bosh, kur të gjitha vlerat e një opsioni janë bosh, ose kur pastron një vlerë që produkti e kishte të ruajtur; shkruaje përsëri ose hiqe duke prekur ikonën ×. Një produkt me variante nuk mund të përdorë çmim në shitje."
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
    "question": "A mund ta shkruaj çmimin e një produkti në arkë, si tarifën e transportit ose një artikull të negociuar?",
    "keywords": [
      "çmim në shitje",
      "çmim i personalizuar",
      "shkruaj çmimin",
      "tarifa e transportit",
      "tarifa e shërbimit",
      "çmim i negociuar",
      "çmim sipas marrëveshjes",
      "tarifë në përqindje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po — bëje produkt me Çmim në shitje. Aktivizo Çmim në shitje te faqja e ndryshimit të produktit dhe lëre çmimin bosh; arka dhe lista e produkteve shfaqin “Çmim në shitje” në vend të çmimit. Te pagesa, kur troket produktin ai kërkon fillimisht çmimin; shkruaje dhe trokit Shto në shportë për ta shtuar me atë çmim."
      },
      {
        "type": "list",
        "items": [
          "0 është çmim i vlefshëm (p.sh. transport falas); një fushë bosh nuk mund të shtohet. Shkruaje çmimin ashtu siç i çmon gjithçka tjetër mënyra e tatimit të dyqanit tënd.",
          "Shporta mban një rresht për çdo produkt me çmim në shitje: kur e troket sërish, hapet ai rresht që të ndryshosh çmimin.",
          "Që nga v3.3, Llogarit sipas kalon midis Shuma dhe Përqindja. Me 5%, rreshti del 5% e nëntotalit të artikujve të tjerë (pas zbritjeve të artikujve, para promovimeve, zbritjes së shportës dhe përdorimit të pikëve), i rrumbullakuar nga gjysma lart sipas shifrave dhjetore të monedhës, dhe ndjek shportën kur artikujt shtohen, hiqen ose zbriten. Rreshti në shportë shfaqet “5% e shportës”, ndërsa porosia regjistron shumën që doli.",
          "Një rresht me çmim në shitje nuk merr zbritje artikulli; për të ngarkuar më pak, ndrysho çmimin e tij. Zbritjet e shportës, shpërblimi i pikëve dhe promovimet (përveç nëse është përjashtuar prej tyre) vlejnë prapë për të.",
          "Aktivizimi i Çmim në shitje aktivizon edhe Përjashto nga promovimet, ndaj një tarifë nuk zbritet dhe nuk numërohet te pragjet e shpenzimit. Çaktivizoje sërish nëse një artikull i negociuar duhet të marrë pjesë në promovime.",
          "Pasi shitet, rreshti tatohet, fiton pikë dhe numërohet te Statistika si çdo tjetër, ndërsa një kthim rimburson çmimin që u shkrua.",
          "Një produkt me variante nuk mund të ketë çmim në shitje. Produktet me çmim në shitje nuk ofrohen kurrë si dhurata ose shtesa me pagesë, dhe nuk shfaqen kurrë te lista e zëvendësimeve të një këmbimi."
        ]
      },
      {
        "type": "note",
        "text": "Çdo plan e ka, dhe shkrimi i çmimit nuk kërkon kurrë miratimin e menaxherit."
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
        "text": "Pasi aktivizohet, shitjet dhe porositë paraprake e zbresin stokun automatikisht; shfuqizimet, kthimet dhe porositë paraprake të anuluara e rikthejnë; dhe marrja në stok e një porosie blerjeje e shton. Çdo lëvizje regjistrohet në një regjistër të plotë. Kur stoku është 10 ose më pak, shënohet si i ulët me portokalli te lista e produkteve, në arkë dhe te detajet e produktit."
      },
      {
        "type": "p",
        "text": "Ka dy mënyra për ta ndryshuar numrin me dorë:"
      },
      {
        "type": "list",
        "items": [
          "Rinumërim: ndrysho numrin e stokut në formularin e produktit që të përputhet me atë që ke numëruar realisht. Nuk ndikon kurrë te Fitimi.",
          "Rregullo stokun (që nga v3.5): te detajet e produktit trokit Rregullo stokun, zgjidh Hiq ose Shto, sasinë dhe një arsye, si Skaduar ose prishur, Dëmtuar ose Mostra e dhurata. Kostoja e asaj që hiqet numërohet te Humbje stoku e atij muaji në Fitimi — shih “Si e regjistroj stokun që skadoi, u dëmtua ose u dha si mostër?”"
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
    "question": "Si e regjistroj stokun që skadoi, u dëmtua ose u dha si mostër?",
    "keywords": [
      "rregullo stokun",
      "humbje stoku",
      "mall i skaduar",
      "mall i prishur",
      "mall i dëmtuar",
      "mall i humbur",
      "mostra",
      "furnizime dyqani",
      "hiq nga stoku",
      "rinumërim"
    ],
    "content": [
      {
        "type": "p",
        "text": "Përdor Rregullo stokun. Për një produkt me ndjekje stoku, te detajet e produktit trokit Rregullo stokun, zgjidh Hiq ose Shto, cakto sasinë me + dhe − (nis nga 1; trokit numrin për ta shkruar), zgjidh një arsye dhe, nëse do, shto një shënim (deri në 100 karaktere). Fleta llogarit stokun pas ndryshimit dhe rreshti nën arsyen tregon nëse ndikon te Fitimi."
      },
      {
        "type": "list",
        "items": [
          "Arsyet për të hequr: Përdorim materialesh, Skaduar ose prishur, Dëmtuar, Humbur ose vjedhur, Përdorim nga stafi, Mostra e dhurata, Furnizime dyqani dhe Tjetër. Arsyet për të shtuar: Prodhuar në dyqan, Gjetur dhe Tjetër. Tjetër kërkon shënim.",
          "Me përjashtim të Përdorim materialesh, ajo që heq numërohet me koston e atij çasti te Humbje stoku e atij muaji në Fitimi. Vjen pas fitimit bruto dhe ul fitimin neto; fitimi bruto dhe marzhi nuk ndryshojnë. Përdorim materialesh vetëm e heq nga stoku, sepse kostoja e një materiali është tashmë te kostoja e produktit të bërë prej tij.",
          "Gjetur heq po aq nga Humbje stoku. Prodhuar në dyqan dhe Tjetër në anën e shtimit vetëm shtojnë stok dhe nuk arrijnë kurrë te Fitimi.",
          "Një rregullim numërohet në ditën kur e regjistron. Nuk mund të vihet me datë të mëparshme, të ndryshohet ose të fshihet; për të korrigjuar një gabim, regjistro Gjetur ose një rregullim në drejtimin e kundërt.",
          "Një produkt pa kosto mund të rregullohet prapë, por Fitimi nuk mund t’i caktojë një shumë, dhe muaji shënon sa regjistrime nuk kishin kosto."
        ]
      },
      {
        "type": "p",
        "text": "Ndryshimi i numrit të stokut në formularin e produktit është Rinumërim: e përputh stokun me atë që ke numëruar realisht dhe nuk arrin kurrë te Fitimi. Lista e lëvizjeve të stokut te Statistika i filtron veçmas rregullimet e stokut dhe rinumërimet, dhe regjistri i aktivitetit tregon arsyen dhe shënimin e çdo rregullimi."
      },
      {
        "type": "note",
        "text": "Rregullo stokun kërkon planin Standard ose më të lartë. Në Pro, punonjësve që roli i tyre kërkon miratim për Rregullim manual të stokut u kërkohet PIN-i i një menaxheri kur konfirmojnë."
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
        "text": "Stoku negativ zakonisht do të thotë që një furnizim nuk është regjistruar, ose që një artikull i porositur paraprakisht nuk ka mbërritur ende (porositë paraprake e zbresin stokun kur krijohen). Regjistro furnizimet duke marrë në stok një porosi blerjeje dhe numri rikuperohet vetë. Korrigjo një diferencë inventari duke ndryshuar numrin e stokut në formularin e produktit (Rinumërim); për mallin që u dëmtua, skadoi ose u dha, regjistro arsyen me Rregullo stokun. Të dyja ruhen në regjistrin e lëvizjeve."
      },
      {
        "type": "note",
        "text": "Nëse arkëtari nuk e gjen një produkt me stok 0, kontrollo nëse Fshih produktet pa stok është aktiv te Cilësimet → Preferencat e pajisjes: sa kohë është aktiv, ky iPad nuk mund t’i shtojë produktet pa stok në shportë."
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
        "text": "Blerjet në menynë anësore menaxhojnë furnitorët dhe porositë e blerjes. Një furnitor ruan emrin, personin e kontaktit, telefonin, adresën dhe kushtin e parazgjedhur të pagesës: Pagesë në marrje ose Kredi mujore."
      },
      {
        "type": "steps",
        "items": [
          "Trokit Blerje e re, zgjidh furnitorin dhe shto produktet, sasitë dhe kostot për njësi (të plotësuara paraprakisht me koston aktuale të çdo produkti). Mund të shtosh edhe një tarifë transporti. Për mallrat që nuk janë krijuar ende si produkte, trokit Produkt i ri te zgjedhësi Shto produkt; produkti i ri hyn drejt në porosinë e blerjes si rresht. Nëse furnitori nuk është krijuar ende, trokit Shto furnitor lart majtas në listën e furnitorëve — furnitori i ri kthehet drejt në porosinë e blerjes.",
          "Një draft nuk prek kurrë stokun ose detyrimet — ndryshoje ose fshije lirisht.",
          "Kur mbërrin malli, trokit Merr stokun: stoku i ndjekur rritet, dhe porosia e blerjes merr numrin e vet dhe kyçet. Si parazgjedhje, marrja përditëson edhe koston e çdo produkti me këtë kosto për njësi; çaktivizo Sinkronizo koston e produktit në porosinë e blerjes për t’i lënë kostot të pandryshuara. Poshtë saj, Përfshi transportin në kosto (aktiv për porositë e reja të blerjes) e ndan tarifën e transportit mes rreshtave sipas shumës, ndaj kostoja e shkruar te çdo produkt përfshin pjesën e vet: miell 10 × $30, gjalpë 1 × $60 dhe $25 transport e çojnë koston e miellit në $32 dhe të gjalpit në $64."
        ]
      },
      {
        "type": "p",
        "text": "Kushti i pagesës vendos çfarë ndodh më pas: porositë me Pagesë në marrje shënohen si të paguara, ndërsa ato me Kredi mujore mbeten të papaguara te Të papaguara, ku mund t’i shlyesh për çdo furnitor — një porosi, këtë muaj, ose të gjitha."
      },
      {
        "type": "p",
        "text": "Materialet që nuk i shet, si mielli ose paketimet, mund të blihen në të njëjtën mënyrë: krijoji si produkte jo për shitje — shih “A mund t’i shtoj materiale si mielli ose paketimet si produkte?”"
      },
      {
        "type": "note",
        "text": "Blerjet kërkojnë planin Standard ose më të lartë. Një furnitor me porosi të marra të papaguara nuk mund të fshihet."
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
    "question": "A mund t’i shtoj materiale si mielli ose paketimet si produkte?",
    "keywords": [
      "jo për shitje",
      "produkt jo për shitje",
      "materiale",
      "mielli",
      "paketime",
      "furnitura",
      "shitet në arkë",
      "blerje",
      "kosto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Po. Në formularin e produktit, çaktivizo Shitet në arkë poshtë fotos (është aktive si parazgjedhje) dhe produkti nuk është për shitje: nuk ka nevojë për çmim, mban koston, barkodin, stokun dhe variantet e veta, dhe lista e produkteve shfaq “Jo për shitje” aty ku do të ishte çmimi."
      },
      {
        "type": "list",
        "items": [
          "Një produkt jo për shitje nuk shfaqet kurrë në rrjetën e arkës, te kategoritë, në kërkim ose në skanimet e barkodit, dhe nuk mund të jetë dhuratë, shtesë, produkt i synuar i një promovimi ose zëvendësim në një këmbim. Një kategori që mban vetëm produkte jo për shitje lihet jashtë shiritit të kategorive të arkës.",
          "Kur dyqani ka produkte jo për shitje, lart djathtas te Produkte shfaqet një buton filtri: zgjidh Të gjitha produktet, Për shitje ose Jo për shitje, bashkë me kërkimin dhe kategoritë.",
          "Porositë e blerjes, marrja në stok, Sinkronizo koston e produktit dhe faturat e papaguara funksionojnë saktësisht si për produktet e tjera, ndaj kostoja e blerjes dhe stoku i një materiali mund të regjistrohen përmes seksionit Blerje.",
          "Shitja e produkteve të tjera nuk ia zbret stokun. Kur përdor një pjesë prej tij, regjistro një heqje me Rregullo stokun te detajet e produktit: Përdorim materialesh për atë që hyri në produkte, Furnizime dyqani për gjëra si qeset e letrës ose produktet e pastrimit.",
          "Mund ta kthesh në produkt për shitje kur të duash, dhe çmimi e tatimet e tij janë ende aty. Porositë dhe raportet që janë bërë tashmë nuk preken."
        ]
      },
      {
        "type": "p",
        "text": "Si arrin kostoja e tij te Fitimi: blerjet nuk numërohen aty drejtpërdrejt. Për një produkt të bërë prej tij, vendose koston te ai produkt, dhe numërohet kur shitet ai produkt. Furnizimet që nuk hyjnë në koston e asnjë produkti regjistrohen si Furnizime dyqani kur përdoren, nëse stoku i tyre ndiqet, ose si shpenzim i njëhershëm nëse jo. Mos e regjistro të njëjtën shumë në të dyja mënyrat, përndryshe numërohet dy herë."
      },
      {
        "type": "note",
        "text": "Produktet jo për shitje ekzistojnë në çdo plan; blerjet, ndjekja e stokut dhe Rregullo stokun kërkojnë planin Standard ose më të lartë."
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
    "question": "Cili është ndryshimi mes të ardhurave nga shitjet dhe parave të arkëtuara?",
    "keywords": [
      "të ardhura nga shitjet",
      "para të arkëtuara",
      "statistika",
      "fitimi bruto",
      "nga të ardhurat nga shitjet te fitimi bruto",
      "përputhje me arkën",
      "kapar",
      "shitje me afat pagese",
      "tatim"
    ],
    "content": [
      {
        "type": "p",
        "text": "Të ardhurat nga shitjet numërohen ditën kur malli u dorëzua, pas çdo zbritjeje dhe para tatimit; paratë e arkëtuara numërohen ditën kur hynë paratë dhe janë paratë që more realisht, me tatim të përfshirë. Në një dyqan që ngarkon tatim, paratë e arkëtuara dalin më të larta se të ardhurat nga shitjet me vlerën e tatimit, edhe për porositë e paguara në arkë. Të dyja shfaqen si dy pllakat e para në rreshtin e parë të Statistikës, pranë pllakave Fitimi bruto, Porositë dhe Porosia mesatare."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Rreshtat e pllakave në Statistika me Të ardhura nga shitjet dhe Para të arkëtuara krah për krah në rreshtin e parë"
      },
      {
        "type": "h2",
        "text": "Kur ndryshojnë të ardhurat nga shitjet dhe paratë e arkëtuara"
      },
      {
        "type": "p",
        "text": "Për shembull, kur një dyqan me tatim të përfshirë shet për NT$1,050 me 5% tatim të përfshirë dhe klienti paguan në arkë, të ardhurat nga shitjet janë NT$1,000 dhe paratë e arkëtuara janë NT$1,050. Përveç tatimit, dy shifrat ndahen edhe në këto situata:"
      },
      {
        "type": "list",
        "items": [
          "Shitje me afat pagese: malli del sot dhe hyn te të ardhurat e sotme nga shitjet; paratë hyjnë te paratë e arkëtuara ditën kur shlyhet porosia.",
          "Porosi paraprake: kapari hyn te paratë e arkëtuara kur paguhet; të ardhurat nga shitjet njihen të plota në datën e marrjes së mallit.",
          "Kapare të mbajtura: kur një klient anulon një porosi paraprake dhe ti e mban kaparin, ai ishte numëruar tashmë te paratë e arkëtuara kur u pagua. Statistika e shfaq veçmas si Kapare të mbajtura dhe nuk numërohet kurrë te të ardhurat nga shitjet.",
          "Shfuqizimi i një porosie të mëparshme: paratë e rimbursuara numërohen te paratë e arkëtuara ditën e shfuqizimit, ndaj paratë e arkëtuara të asaj dite mund të jenë negative. Vetë porosia e shfuqizuar numërohet në datën e shitjes dhe shfaqet në nëntitullin e pllakës Porositë.",
          "Rrumbullakimi i parave: çdo shumë që Rrumbullakimi i parave merr mbi ose nën totalin e porosisë numërohet te paratë e arkëtuara, kurrë te të ardhurat nga shitjet."
        ]
      },
      {
        "type": "p",
        "text": "Kur njëra nga dy shumat nuk është zero, nëntitulli i pllakës Para të arkëtuara shfaq rrumbullakimin e parave ose kaparet e mbajtura."
      },
      {
        "type": "h2",
        "text": "Tatimi dhe detajet e pllakave"
      },
      {
        "type": "p",
        "text": "Tatimi që e ndan të ardhurat nga shitjet nga paratë e arkëtuara listohet te Nga të ardhurat nga shitjet te fitimi bruto, që hapet nga fundi i pllakës Fitimi bruto. Aty shfaqen Të ardhura nga shitjet (me tatim), Tatim dhe Të ardhura nga shitjet (pa tatim). Dyqanet në Australi, Mbretërinë e Bashkuar, Zelandën e Re dhe Singapor e shohin aty emrin vendor të tatimit, si Të ardhura nga shitjet (me GST), GST dhe Të ardhura nga shitjet (pa GST)."
      },
      {
        "type": "p",
        "text": "Për të parë tatimin e mbledhur për deklarim, hap Raportin tatimor nga pllaka Tatimi."
      },
      {
        "type": "p",
        "text": "Ikona ⓘ te pllakat Të ardhura nga shitjet, Para të arkëtuara dhe Porositë i shpjegon këto rregulla brenda aplikacionit, përfshirë porositë e shfuqizuara që listohen në nëntitullin e pllakës Porositë."
      },
      {
        "type": "h2",
        "text": "Rakordimi dhe leximi i shitjeve"
      },
      {
        "type": "p",
        "text": "Për të rakorduar, krahaso paratë e arkëtuara me sirtarin e parasë dhe me terminalin e kartave. Karta Mënyrat e pagesës te Statistika tregon një rresht për çdo mënyrë, dhe shitjet e bëra para se ta riemërtosh një mënyrë numërohen nën emrin e ri. Për të parë sa ke shitur në një periudhë, shiko të ardhurat nga shitjet. Kthimet e mallrave ulin të ardhurat nga shitjet ditën e kthimit."
      },
      {
        "type": "note",
        "text": "Të ardhurat para tatimit erdhën në v3.5 dhe periudhat e kaluara u rillogaritën në të njëjtën mënyrë, ndaj një dyqan që ngarkon tatim sheh të ardhura nga shitjet më të ulëta se para përditësimit. Kjo është korrigjim: versionet e mëparshme e përfshinin tatimin te të ardhurat nga shitjet, dhe dyqanet ku tatimi shtohet mbi çmim e numëronin si të ardhura nga shitjet edhe tatimin e shitjes që mblidhnin."
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
    "question": "Për cilat periudha kohore mund të shfaqen raportet?",
    "keywords": [
      "Statistika",
      "raporte",
      "periudha kohore",
      "këtë javë",
      "këtë muaj",
      "këtë vit",
      "interval i personalizuar",
      "renditja e produkteve",
      "krahaso"
    ],
    "content": [
      {
        "type": "p",
        "text": "Zgjidh Sot, Dje, Këtë javë, Këtë muaj, Këtë vit ose Gjithë kohës në shiritin e periudhës në krye të Statistikës, ose trokit Personalizuar për të zgjedhur çdo datë fillimi dhe mbarimi. Çdo kartë në faqe ndjek periudhën që zgjedh. Këtë javë ndjek ditën e parë të javës të pajisjes tënde, Këtë muaj nis më 1, Këtë vit nis më 1 janar, Gjithë kohës nis nga shitja e parë e dyqanit tënd, dhe çdo opsion shfaq datat që mbulon."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Shiriti i periudhës në krye të Statistikës me Personalizuar të zgjedhur dhe dritaren e datave të hapur për të zgjedhur Fillimin dhe Fundin"
      },
      {
        "type": "h2",
        "text": "Zgjedhja e një intervali Personalizuar"
      },
      {
        "type": "p",
        "text": "Përdor Personalizuar kur të duhet një interval jashtë periudhave kalendarike të gatshme, si një periudhë deklarimi tatimor dymujore ose tremujore."
      },
      {
        "type": "steps",
        "items": [
          "Hap Statistikën dhe trokit Personalizuar te shiriti i periudhës.",
          "Zgjidh datat e fillimit dhe të mbarimit në dritaren që hapet.",
          "Konfirmo datat për të përditësuar raportin."
        ]
      },
      {
        "type": "p",
        "text": "Pllaka Tatimi dhe raporti tatimor e ndjekin gjithashtu periudhën e zgjedhur, ndaj caktimi i një intervali deklarimi me Personalizuar përditëson të dyja; shih artikullin përkatës për raportin tatimor. Në të djathtë të shiritit të periudhës, trokit Krahaso për ta parë periudhën e zgjedhur krah për krah me atë para saj ose me të njëjtën periudhë të vitit të kaluar; shih artikullin përkatës për raportet e avancuara."
      },
      {
        "type": "h2",
        "text": "Pllakat dhe kartat në faqe"
      },
      {
        "type": "p",
        "text": "Poshtë shiritit të periudhës, Statistika shfaq dy rreshta pllakash me shifra, pastaj grafikë dhe karta përmbledhëse në çifte, me Tani në fund."
      },
      {
        "type": "list",
        "items": [
          "Rreshti i parë i pllakave: Të ardhura nga shitjet, Para të arkëtuara, Fitimi bruto, Porositë dhe Porosia mesatare.",
          "Rreshti i dytë i pllakave: Zbritjet gjithsej, Tatimi, Fitimi neto, Produkte pa kosto dhe Klientë të shërbyer.",
          "Çifti i parë: grafiku i trendit të shitjeve pranë kartës Kostoja dhe fitimi bruto.",
          "Çifti i dytë: Renditja e produkteve pranë kartës Pjesa sipas kategorisë.",
          "Çifti i tretë: Mënyrat e pagesës pranë kartës së promovimeve.",
          "Karta e fundit: Tani."
        ]
      },
      {
        "type": "p",
        "text": "Dy pllaka të rreshtit të dytë shfaqen vetëm në raste të caktuara. Tatimi, shtuar në v3.6, shfaqet vetëm për një dyqan me tatime ose kur periudha e zgjedhur ka shitje të bëra me tatim. Fitimi neto shfaqet vetëm kur periudha është Këtë muaj ose mbulon saktësisht një muaj të plotë."
      },
      {
        "type": "note",
        "text": "Nëse një periudhë nuk ka porosi, Statistika shfaq vetëm shiritin e periudhës, një mesazh dhe Tani."
      },
      {
        "type": "h2",
        "text": "Leximi i grafikëve dhe i Renditjes së produkteve"
      },
      {
        "type": "p",
        "text": "Menuja lart djathtas te grafiku i trendit të shitjeve e kalon mes Të ardhurave nga shitjet, Porosive, Porosisë mesatare dhe Klientëve të shërbyer. Grafiku ka edhe kalimin Trendi / Dita × ora; shih artikullin për raportet e avancuara për atë pamje. Pranë tij, grafiku Kostoja dhe fitimi bruto vë në një shtyllë koston e produkteve dhe fitimin bruto të çdo periudhe. Një ditë e vetme paraqitet sipas orës, ndërsa periudhat më të gjata grupojnë të dhënat sipas ditëve, javëve, muajve ose viteve, në varësi të gjatësisë."
      },
      {
        "type": "p",
        "text": "Mbaj shtypur grafikun e trendit të shitjeve, Kostoja dhe fitimi bruto ose Mënyrat e pagesës për të shfaqur një kartë leximi për një pikë të grafikut. Kur Krahaso është i ndezur, karta e leximit të grafikut të trendit tregon krah për krah shifrën e kësaj periudhe dhe të periudhës së krahasimit. Zvarrit majtas ose djathtas për të lëvizur mes pikave; rrëshqit lart ose poshtë mbi grafik dhe faqja lëviz si zakonisht."
      },
      {
        "type": "p",
        "text": "Renditja e produkteve liston 5 produktet më të shitura të periudhës së zgjedhur. Trokit te karta ose te Shiko të gjitha për të parë çdo produkt të shitur në atë periudhë, të renditur sipas sasisë pas kthimeve. Një produkt me variante shfaqet me një rresht për çdo variant."
      },
      {
        "type": "note",
        "text": "Periudhat kalendarike erdhën në v2.4; versionet e mëparshme ofronin intervale lëvizëse (Sot / 7 ditë / 30 ditë / Gjithë kohës). Nëse ende i sheh ato opsione, përditëso DingPOS nga App Store."
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
    "question": "Çfarë tregojnë raportet e avancuara?",
    "keywords": [
      "raporte të avancuara",
      "Statistika",
      "krahaso",
      "krahasimi i periudhave",
      "Dita × ora",
      "hartë nxehtësie",
      "produkte me shitje të ngadalta",
      "ndryshimet",
      "pjesa sipas kategorisë",
      "vlerësimi i inventarit",
      "shkalla e blerjeve të përsëritura"
    ],
    "content": [
      {
        "type": "p",
        "text": "Raportet e avancuara nuk janë një ekran më vete; ato shfaqen te Statistika dhe ndjekin periudhën që zgjedh në krye. Ato shtojnë krahasime periudhash, një hartë nxehtësie të ditës dhe orës, Produkte me shitje të ngadalta, Ndryshimet, shkallën e blerjeve të përsëritura të anëtarëve, Pjesën sipas kategorisë dhe një pjesë Tani për stokun dhe pikat. Çdo plan i përfshin të gjitha, dhe mbeten të hapura edhe pasi mbaron prova."
      },
      {
        "type": "h2",
        "text": "Krahaso"
      },
      {
        "type": "p",
        "text": "Krahaso ndodhet në të djathtë të shiritit të periudhës te Statistika dhe e mat periudhën e zgjedhur kundrejt një periudhe më të hershme."
      },
      {
        "type": "steps",
        "items": [
          "Hap Statistikën nga shiriti anësor.",
          "Zgjidh një periudhë në krye.",
          "Trokit Krahaso në të djathtë të shiritit të periudhës.",
          "Zgjidh një opsion krahasimi nga menuja."
        ]
      },
      {
        "type": "p",
        "text": "Opsionet e disponueshme varen nga periudha që zgjedh:"
      },
      {
        "type": "list",
        "items": [
          "Asnjë e fik krahasimin.",
          "Java e kaluar krahason një ditë të vetme me të njëjtën ditë javën e kaluar, ose këtë javë me javën e kaluar.",
          "Muaji i kaluar krahason këtë muaj me muajin e kaluar.",
          "Viti i kaluar krahason këtë vit me vitin e kaluar, ose periudhën e zgjedhur me të njëjtën periudhë të vitit të kaluar.",
          "Më parë krahason një interval të personalizuar me po aq ditë para tij."
        ]
      },
      {
        "type": "p",
        "text": "Kur një krahasim është aktiv, Statistika shton ndryshimin dhe shifrën e periudhës së krahasimit në çdo pllakë, përveç Tatimi, Fitimi neto dhe Produkte pa kosto. Të ardhura nga shitjet, Para të arkëtuara, Fitimi bruto, Porositë, Porosia mesatare, Zbritjet gjithsej dhe Klientë të shërbyer shfaqin secila një rresht krahasimi si “▼ 3% kundrejt muajit të kaluar”."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Statistika te Këtë javë me Krahaso të vendosur te Java e kaluar, me shiritin e krahasimit dhe rreshtin e parë të pllakave, secila me ndryshimin dhe shifrën e krahasimit poshtë",
        "caption": "Trokit çdo rresht krahasimi poshtë një pllake për të hapur Krahasimi i periudhave dhe për të parë shifrat e të dyja periudhave."
      },
      {
        "type": "p",
        "text": "Ndryshimi te Zbritjet gjithsej është gjithmonë gri, sepse më shumë zbritje nuk është vetvetiu e mirë apo e keqe. Trokit çdo rresht krahasimi për të hapur Krahasimi i periudhave, që liston shifrat e të dyja periudhave. Grafiku i trendit shton një vijë më të zbehtë për periudhën e krahasimit. Sa kohë një periudhë është ende në vazhdim, periudha e krahasimit pritet në të njëjtin çast."
      },
      {
        "type": "h2",
        "text": "Dita × ora"
      },
      {
        "type": "p",
        "text": "Kalo titullin e grafikut të trendit nga Trendi te Dita × ora për të parë një hartë nxehtësie me shtatë ditë dhe 24 orë. Sa më e errët të jetë një qelizë, aq më shumë ke shitur gjatë asaj ore. Hartën mund ta kalosh mes të ardhurave nga shitjet dhe porosive. Me një krahasim të ndezur te Krahaso, harta tregon edhe cilat orë u rritën dhe cilat u ulën."
      },
      {
        "type": "h2",
        "text": "Produkte me shitje të ngadalta"
      },
      {
        "type": "p",
        "text": "Kalo titullin e kartës së renditjes te Produkte me shitje të ngadalta për të listuar produktet nga ato me më pak shitje te ato me më shumë. Çdo rresht tregon stokun aktual të produktit dhe datën e fundit kur u shit. Produktet që nuk janë shitur kurrë shënohen Nuk është shitur kurrë, dhe një produkt me variante merr një rresht për çdo variant. Si parazgjedhje shfaqen vetëm produktet në stok."
      },
      {
        "type": "h2",
        "text": "Ndryshimet"
      },
      {
        "type": "p",
        "text": "Kalo titullin e kartës së renditjes te Ndryshimet për të parë 3 produktet me rritjen më të madhe të të ardhurave nga shitjet dhe 3 me rënien më të madhe kundrejt periudhës së krahasimit. Çdo rresht tregon të ardhurat nga shitjet të të dyja periudhave dhe diferencën, dhe çdo variant krahasohet me vetveten."
      },
      {
        "type": "p",
        "text": "Zgjidh fillimisht një periudhë te Krahaso. Kur Krahaso është te Asnjë, ose kur periudha është Gjithë kohës, karta të thotë të zgjedhësh një periudhë krahasimi. Trokit te karta ose te Shiko të gjitha për të hapur listën e plotë Produktet me ndryshim, të ndarë në Në rritje dhe Në rënie."
      },
      {
        "type": "h2",
        "text": "Shkalla e blerjeve të përsëritura"
      },
      {
        "type": "p",
        "text": "Rreshti i fundit i pllakës Klientë të shërbyer shfaq shkallën e blerjeve të përsëritura si “Shkalla e blerjeve të përsëritura … · … anëtarë u kthyen”. Ajo tregon pjesën e anëtarëve që bënë blerje në periudhën e zgjedhur dhe kanë blerë dy ose më shumë herë gjithsej. Me një krahasim të ndezur te Krahaso, një rresht poshtë jep ndryshimin në pikë përqindjeje dhe shkallën e periudhës së krahasimit."
      },
      {
        "type": "h2",
        "text": "Pjesa sipas kategorisë"
      },
      {
        "type": "p",
        "text": "Pjesa sipas kategorisë liston të ardhurat nga shitjet dhe pjesën e çdo kategorie, nga më e madhja te më e vogla, sipas kategorisë aktuale të secilit produkt. Produktet pa kategori hyjnë te Pa kategori, dhe rreshtat mblidhen saktësisht në të ardhurat nga shitjet."
      },
      {
        "type": "h2",
        "text": "Tani"
      },
      {
        "type": "p",
        "text": "Tani shfaq tre detaje për inventarin dhe pikat:"
      },
      {
        "type": "list",
        "items": [
          "Vlerësimi i inventarit, llogaritur si stoku aktual × kostoja aktuale.",
          "Çdo lëvizje stoku në periudhën e zgjedhur.",
          "Pikat që klientët i kanë por nuk i kanë përdorur ende, së bashku me shumën maksimale që mund të zbresin."
        ]
      },
      {
        "type": "p",
        "text": "Vlerësimi i inventarit dhe pikat e papërdorura janë gjendje aktuale, ndaj ndryshimi i periudhës në krye nuk i ndryshon ato."
      },
      {
        "type": "h2",
        "text": "Planet dhe lejet"
      },
      {
        "type": "p",
        "text": "Që nga v3.4, të gjitha raportet e avancuara janë të hapura në çdo plan, përfshirë Lite, dhe mbeten të hapura edhe pasi mbaron prova. Edhe Ndryshimet u shtuan në v3.4. Versionet e mëparshme i shfaqnin raportet e avancuara vetëm në Pro, me një dryn të vogël në planet e tjera; nëse ende i sheh drynat, përditëso DingPOS nga App Store."
      },
      {
        "type": "p",
        "text": "Lite nuk e ndjek stokun dhe pikat e besnikërisë, por Tani prapë tregon vlerësimin e inventarit dhe pikat e papërdorura që dyqani yt i ka tashmë (për shembull nga prova), ose zero."
      },
      {
        "type": "note",
        "text": "Stafi i sheh raportet e avancuara me lejen Statistika; shumat e Vlerësimit të inventarit kërkojnë edhe lejen Kostoja dhe fitimi."
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
    "question": "Si raportohet fitimi bruto nëse nuk kam futur kostot?",
    "keywords": [
      "kostoja",
      "fitimi bruto",
      "marzhi",
      "marzhi bruto",
      "raporte",
      "kosto që mungon",
      "nuk ndiqet",
      "produkte pa kosto",
      "nga të ardhurat nga shitjet te fitimi bruto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostoja është fushë opsionale, ndaj produktet pa kosto lihen jashtë fitimit bruto, ndërsa të ardhurat e tyre nga shitjet numërohen plotësisht. Pllaka Produkte pa kosto te Statistika tregon sa produkte të shitura ose të kthyera në periudhë nuk kanë kosto, si “12 produkte”. Një kosto 0 llogaritet si kosto dhe nuk listohet; kur çdo produkt ka kosto, pllaka shfaq “0 produkte · të dhënat e kostos janë të plota”."
      },
      {
        "type": "h2",
        "text": "Gjetja e produkteve pa kosto"
      },
      {
        "type": "p",
        "text": "Te Statistika, trokit pllakën Produkte pa kosto ose Shiko produktet për të hapur Produkte pa kosto. Fleta i liston produktet nga më e larta te më e ulëta sipas të ardhurave nga shitjet që mbeten jashtë fitimit bruto."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Fleta Produkte pa kosto me produktet e renditura sipas të ardhurave nga shitjet që mbeten jashtë fitimit bruto"
      },
      {
        "type": "steps",
        "items": [
          "Trokit një rresht te Produkte pa kosto për të hapur produktin.",
          "Trokit Ndrysho dhe shkruaj koston te Kostoja (opsionale).",
          "Kthehu te Produkte pa kosto për të parë rreshtin e shënuar Kostoja u shtua."
        ]
      },
      {
        "type": "p",
        "text": "Një produkt me variante shënohet Kostoja u shtua vetëm kur çdo variant i shitur pa kosto ka një kosto, qoftë koston e vet ose koston e produktit, që e ndjek. Që nga v3.6, një porosi blerjeje mund ta shpërndajë transportin edhe në koston e produktit që shkruan, kur është aktivizuar Përfshi transportin në kosto."
      },
      {
        "type": "note",
        "text": "Një kosto që shton prek vetëm shitjet e mëpasshme. Shitjet e kryera nuk rillogariten."
      },
      {
        "type": "h2",
        "text": "Futja e kostos dhe tatimi"
      },
      {
        "type": "p",
        "text": "Te forma e produktit, fusha e kostos quhet Kostoja (opsionale) në çdo dyqan. Në një dyqan me tatime, pranë Kostoja (opsionale) shfaqet një ⓘ që tregon si zbatohet tatimi, sipas Zbrit tatimin në hyrje:"
      },
      {
        "type": "list",
        "items": [
          "Zbrit tatimin në hyrje është i ndezur: shkruaj koston pa tatimin që mund ta zbresësh. Shënimi te ⓘ thotë: “Shkruaj koston pa tatimin e zbritshëm, i cili regjistrohet si tatim në hyrje. Tatimi i pazbritshëm është pjesë e kostos.”",
          "Zbrit tatimin në hyrje është i fikur: shkruaj atë që ke paguar, minus çdo tatim që mund ta zbresësh. Shënimi te ⓘ thotë: “Tatimi i zbritshëm nuk përfshihet në kosto; tatimi i pazbritshëm përfshihet. Nëse zbret tatimin në hyrje, aktivizo ‘Zbrit tatimin në hyrje’ te ‘Të dhënat e dyqanit’.”"
        ]
      },
      {
        "type": "p",
        "text": "Nëse dyqani yt deklaron tatimin në hyrje, aktivizo Zbrit tatimin në hyrje te Të dhënat e dyqanit."
      },
      {
        "type": "h2",
        "text": "Leximi i zbërthimit të fitimit bruto"
      },
      {
        "type": "p",
        "text": "Fitimi bruto janë të ardhurat nga shitjet pas çdo zbritjeje (zbritje artikulli dhe shporte, promovime, përdorim pikash) dhe para tatimit, minus koston. Marzhi është fitimi bruto ÷ të ardhurat nga shitjet të produkteve me kosto, ndaj produktet pa kosto nuk e ulin marzhin. Një kthim merr prapa, ditën e kthimit, fitimin bruto që ato artikuj kishin sjellë."
      },
      {
        "type": "p",
        "text": "Trokit pllakën Fitimi bruto te Statistika për të hapur Nga të ardhurat nga shitjet te fitimi bruto, që zbret rresht pas rreshti:"
      },
      {
        "type": "list",
        "items": [
          "Të ardhura nga shitjet (me tatim)",
          "Tatim",
          "Të ardhura nga shitjet (pa tatim)",
          "Të ardhura nga shitjet pa kosto",
          "Kostoja e produkteve",
          "Fitimi bruto dhe marzhi"
        ]
      },
      {
        "type": "p",
        "text": "Rreshtat mblidhen saktësisht në pllakën Fitimi bruto. Dyqanet në Australi, Mbretërinë e Bashkuar, Zelandën e Re dhe Singapor e shohin emrin vendor të tatimit te rreshtat e tatimit, si Të ardhura nga shitjet (me GST)."
      },
      {
        "type": "note",
        "text": "Kjo llogaritje e fitimit bruto erdhi në v3.1. Versionet më të vjetra zbrisnin vetëm zbritjet manuale të artikujve dhe e numëronin tatimin e përfshirë si fitim, ndaj pas përditësimit periudhat me zbritje ose tatim të përfshirë shfaqin fitim bruto më të ulët. Kjo është korrigjim, jo humbje të dhënash."
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
    "question": "Si e shoh sa fitova realisht çdo muaj?",
    "keywords": [
      "fitimi dhe humbja",
      "P&L",
      "fitimi neto",
      "fitimi bruto",
      "fitimi mujor",
      "shpenzime fikse",
      "fitimi operativ",
      "pasqyra e të ardhurave"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hap Fitimi, poshtë Statistikës në shiritin anësor, për të parë fitimin neto të çdo muaji dhe si llogaritet. Lista shkon nga muaji më i ri te më i vjetri, duke nisur nga muaji yt i parë me aktivitet; muaji aktual shënohet Në vazhdim, dhe titulli i çdo viti mbledh fitimin neto të muajve të tij të përfunduar. Rreshti i saj i parë, Të gjitha shpenzimet, hap çdo shpenzim pavarësisht nga muaji."
      },
      {
        "type": "h2",
        "text": "Zbërthimi mujor"
      },
      {
        "type": "steps",
        "items": [
          "Hap Fitimi, poshtë Statistikës në shiritin anësor.",
          "Trokit një muaj për të parë si llogaritet fitimi i tij neto."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Faqja e një muaji te Fitimi me njoftimin Në vazhdim, fitimin neto dhe zbërthimin e plotë nga të ardhurat nga shitjet te shpenzimet"
      },
      {
        "type": "p",
        "text": "Faqja e muajit liston çdo rresht nga shitjet deri te fitimi neto, me radhë. Rreshtat nga të ardhurat nga shitjet te fitimi bruto kanë të njëjtat emra dhe shifra si Nga të ardhurat nga shitjet te fitimi bruto te Statistika."
      },
      {
        "type": "list",
        "items": [
          "Të ardhura nga shitjet (me tatim), Tatim dhe Të ardhura nga shitjet (pa tatim): të ardhurat me tatim të përfshirë, shuma e tatimit, dhe të ardhurat pas çdo zbritjeje e para tatimit, të numëruara ditën kur u dorëzua malli. Dyqanet në Australi, Mbretërinë e Bashkuar, Zelandën e Re dhe Singapor e shohin emrin vendor të tatimit.",
          "Të ardhura nga shitjet pa kosto: zbritet para kostos së produkteve, shfaqet vetëm kur nuk është zero.",
          "Kostoja e produkteve: kostoja e asaj që u shit, nga kostot e vëna te produktet e tua.",
          "Fitimi bruto: shfaqet me marzhin e tij.",
          "Të ardhura nga shitjet pa kosto: shtohet përsëri pas fitimit bruto kur nuk është zero.",
          "Humbje stoku: shfaqet vetëm kur muaji ka të tillë; kostoja e asaj që hoqe me Rregullo stokun si të skaduar, të dëmtuar, të dhuruar dhe të ngjashme, plus kthimet e skartuara. Vjen pas fitimit bruto. Shih “Si e regjistroj stokun që skadoi, u dëmtua ose u dha si mostër?” Muaji ka edhe një pjesë Humbje stoku që e mbledh sipas arsyes.",
          "Komisione procesimi (vlerësim): komisionet e vlerësuara nga normat e mënyrave të tua të pagesës.",
          "Kapare të mbajtura: shfaqet vetëm kur nuk është zero; kaparet që ke mbajtur kur një porosi paraprake u anulua.",
          "Rrumbullakimi i parave: shfaqet vetëm kur nuk është zero; diferenca mbi ose nën totalet e porosive që solli rrumbullakimi i parave në dorë te monedhat në përdorim.",
          "Shpenzime fikse dhe Shpenzime të njëhershme: ato që ke regjistruar për atë muaj — shih “Si i regjistroj qiranë, pagat dhe shpenzimet e tjera?”",
          "Fitimi neto: llogaritet si të ardhura nga shitjet (pa tatim) − kostoja e produkteve − humbje stoku − komisione procesimi + kapare të mbajtura + rrumbullakimi i parave − shpenzime fikse − shpenzime të njëhershme."
        ]
      },
      {
        "type": "h2",
        "text": "Muajt në vazhdim"
      },
      {
        "type": "p",
        "text": "Sa kohë një muaj është ende në vazhdim, Fitimi zbret tashmë shpenzimet fikse të të gjithë muajit. Për shembull, më 10/5, nëse të ardhurat nga shitjet (pa tatim) deri tani janë 20,000, kostoja e produkteve është 10,000 dhe shpenzimet fikse janë 65,700, fitimi neto është −55,700 dhe shënohet Në vazhdim · zbriten shpenzimet e plota të muajit."
      },
      {
        "type": "p",
        "text": "Meqë shpenzimet e plota të muajit numërohen që tani, fitimi neto i këtij muaji nuk shfaqet kurrë me të kuqe te lista e muajve, te faqja e muajit apo te pllaka Fitimi neto në Statistika. Një muaj i përfunduar që mbyllet me humbje e shfaq fitimin neto me ngjyrën e paralajmërimit."
      },
      {
        "type": "h2",
        "text": "Grafikët"
      },
      {
        "type": "p",
        "text": "Pas zbërthimit vijnë deri në tre grafikë: fitimi neto muaj pas muaji, pesha e secilit shpenzim fiks dhe trendi i shpenzimeve fikse. Dy grafikët e trendit përfshijnë më së shumti 12 muajt deri te muaji që ke hapur dhe shfaqen vetëm kur ka të paktën dy muaj për t’u krahasuar, të numëruar nga muaji i shitjes ose i shpenzimit tënd të parë. Grafiku i peshës kërkon një shpenzim fiks në atë muaj; derisa të ketë një, ajo pjesë shfaq Shto shpenzim fiks."
      },
      {
        "type": "h2",
        "text": "Kalimi mes Statistikës dhe Fitimit"
      },
      {
        "type": "p",
        "text": "Statistika dhe Fitimi lidhen me njëra-tjetrën. Kur periudha në Statistika është Këtë muaj ose saktësisht një muaj i plotë, rreshti i dytë i pllakave shton një pllakë Fitimi neto, të shënuar Në vazhdim · zbriten shpenzimet e plota të muajit sa kohë muaji është në vazhdim. Trokit atë pllakë për zbërthimin e atij muaji nga fitimi bruto te fitimi neto. Për çdo periudhë tjetër, trokit Shiko fitimin dhe humbjen mujore në rreshtin e fundit të Nga të ardhurat nga shitjet te fitimi bruto."
      },
      {
        "type": "p",
        "text": "Në drejtim të kundërt, Shiko raportin për tetor poshtë titullit të një muaji te Fitimi e hap Statistikën në atë muaj (interval i personalizuar 10/1–10/31); për muajin në vazhdim, e hap Këtë muaj."
      },
      {
        "type": "note",
        "text": "Fitimi neto është fitimi operativ para tatimit mbi të ardhurat, i llogaritur nga ato që ka regjistruar DingPOS — nuk është deklaratë tatimore. Nëse ka produkte të shitura pa kosto, muaji prapë tregon një fitim neto, të shënuar Nuk përfshin koston e N produkteve, dhe mund ta trokasësh për të parë cilat janë."
      },
      {
        "type": "note",
        "text": "Fitimi është i hapur në çdo plan. Me llogari stafi, hapja e tij kërkon lejen Fitimi, humbja dhe shpenzimet, për të cilën Menaxherët dhe Stafi kanë nevojë për miratim si parazgjedhje, sepse tregon kostot e produkteve dhe pagat."
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
    "question": "Si i regjistroj qiranë, pagat dhe shpenzimet e tjera?",
    "keywords": [
      "shpenzime",
      "qira",
      "paga",
      "shërbime komunale",
      "shpenzime fikse",
      "shpenzime të njëhershme",
      "të gjitha shpenzimet",
      "amortizim",
      "shpenzime operative",
      "P&L"
    ],
    "content": [
      {
        "type": "p",
        "text": "Te Fitimi, trokit Shto shpenzim dhe zgjidh Shto shpenzim fiks ose Shto shpenzim të njëhershëm për të regjistruar qiranë, pagat, shërbimet komunale dhe kosto të tjera operative. Çdo shpenzim numërohet në muajin që i përket, jo në muajin kur e ke paguar, dhe fitimi neto i çdo muaji përditësohet sipas tij. Shpenzimet fikse përsëriten çdo muaj me ndryshime opsionale të shumës, ndërsa shpenzimet e njëhershme numërohen në një muaj të vetëm ose shpërndahen në disa muaj."
      },
      {
        "type": "h2",
        "text": "Shpenzime fikse"
      },
      {
        "type": "p",
        "text": "Një shpenzim fiks është një kosto e përsëritur që e paguan çdo muaj, si qiraja, shërbimet komunale ose pagat."
      },
      {
        "type": "steps",
        "items": [
          "Hap Fitimi.",
          "Trokit Shto shpenzim.",
          "Zgjidh Shto shpenzim fiks.",
          "Shkruaj emrin, shumën mujore dhe muajin kur fillon. Zgjidh një muaj më të hershëm për të plotësuar muajt e kaluar.",
          "Trokit ✓ për të ruajtur."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Formulari i shpenzimit fiks me emrin, shumën mujore, muajin e fillimit dhe ndryshimet e shumës"
      },
      {
        "type": "p",
        "text": "Kur ndryshon shuma, hap shpenzimin dhe trokit Ndrysho shumën. Zgjidh muajin kur fillon ndryshimi, pastaj zgjidh Nga ky muaj për një ndryshim që vazhdon, si një rritje qiraje, ose Vetëm këtë muaj për një diferencë vetëm për një muaj, si fatura e rrymës e këtij muaji. Çdo ndryshim listohet te formulari dhe mund ta hapësh çdo shënim për ta ndryshuar ose hequr."
      },
      {
        "type": "p",
        "text": "Kur ndalon ta paguash një shpenzim fiks, cakto Muaji i fundit i numëruar. Ai muaj dhe ata para tij numërohen prapë te Fitimi, ndërsa muajt e mëpasshëm nuk e përfshijnë më."
      },
      {
        "type": "h2",
        "text": "Ndryshimet e planifikuara te Të gjitha shpenzimet"
      },
      {
        "type": "p",
        "text": "Te Të gjitha shpenzimet, çdo rresht i një shpenzimi fiks tregon çfarë është planifikuar më tej. Rreshti bashkon muajin e fillimit me ndryshimin e radhës të shumës, nëse ka, dhe muajin e fundit të numëruar. Për shembull, një rresht mund të lexohet Nga janari 2026 · $420/muaj nga dhjetori 2026 · Numërohet deri në mars 2027."
      },
      {
        "type": "p",
        "text": "Shuma në të djathtë mbetet shuma mujore e sotme, jo norma e ardhshme. Një ndryshim i caktuar si Vetëm këtë muaj nuk listohet në rresht."
      },
      {
        "type": "h2",
        "text": "Shpenzime të njëhershme"
      },
      {
        "type": "p",
        "text": "Një shpenzim i njëhershëm është një kosto që paguhet vetëm një herë, si një rregullim dyqani, pajisjet, sigurimi i paguar paraprakisht ose një faturë e vetme."
      },
      {
        "type": "steps",
        "items": [
          "Hap Fitimi.",
          "Trokit Shto shpenzim.",
          "Zgjidh Shto shpenzim të njëhershëm.",
          "Shkruaj shumën dhe datën.",
          "Cakto Muaji i numëruar për një muaj të vetëm, ose aktivizo Shpërndaje në disa muaj.",
          "Trokit ✓ për të ruajtur."
        ]
      },
      {
        "type": "p",
        "text": "Pa shpërndarje, prapë mund të zgjedhësh Muaji i numëruar që kostoja të numërohet në muajin që i përket. Për shembull, një faturë e tetorit që arrin në nëntor mund të numërohet në tetor, ndërsa data e vërtetë ruhet."
      },
      {
        "type": "p",
        "text": "Për një rregullim dyqani, pajisje ose sigurim të paguar paraprakisht, aktivizo Shpërndaje në disa muaj, zgjidh 2 deri në 120 muaj dhe zgjidh Muaji i parë i numëruar. Formulari tregon paraprakisht sa numërohet çdo muaj dhe cilët muaj mbulon."
      },
      {
        "type": "p",
        "text": "Nëse një shpërndarje përfundon më herët, si kur anulohet një policë sigurimi, hap shpenzimin dhe përdor Përfundo shpërndarjen më herët. Shuma e mbetur numërohet në muajin që zgjedh."
      },
      {
        "type": "h2",
        "text": "Tatimi në hyrje te shpenzimet"
      },
      {
        "type": "p",
        "text": "Kur Zbrit tatimin në hyrje është i ndezur, te një shpenzim i njëhershëm mund të regjistrosh numrin e faturës dhe tatimin e zbritshëm, dhe çdo faturë të një shpenzimi fiks e regjistron te Faturat me Regjistro një faturë. Shuma e numëruar te Fitimi mbetet ajo që e përballon dyqani, dhe artikulli përkatës për tatimin në hyrje shpjegon si funksionon tatimi i zbritshëm."
      },
      {
        "type": "note",
        "text": "Shkruaj atë që dyqani e përballon realisht, pa tatimin që mund ta rikuperosh. Stoku që do ta shesësh dhe lëndët e para nga të cilat e prodhon kalojnë te Blerje, sepse numërohen te kostoja e produktit kur shitet. Furnizimet me stok të ndjekur regjistrohen me Rregullo stokun kur përdoren, me arsyen Furnizime dyqani, jo si shpenzim. Depozitat e garancisë, kryegjëja e huasë dhe paratë që merr pronari nuk janë shpenzime. Ndryshimet ruhen së bashku kur trokit ✓; nëse një ndryshim prek një muaj të përfunduar, aplikacioni të tregon më parë se fitimi neto i cilëve muaj do të ndryshojë."
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
    "question": "Si e eksportoj raportin tatimor për kontabilistin?",
    "keywords": [
      "eksporto raportin tatimor",
      "Raporti tatimor",
      "Eksporto",
      "libër pune Excel",
      "CSV",
      "raport PDF",
      "përmbledhja e tatimit",
      "detajet e tatimit në hyrje",
      "kontabilist"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hap Raportin tatimor, trokit Eksporto lart djathtas dhe zgjidh një CSV, libër pune Excel (XLSX) ose raport PDF. Skedari hapet në një pamje paraprake me ekran të plotë, ku mund të trokasësh butonin e ndarjes për ta ruajtur ose dërguar te kontabilisti. Çdo format përmban të njëjtat shifra që shfaqen në ekran."
      },
      {
        "type": "h2",
        "text": "Si eksportohet"
      },
      {
        "type": "steps",
        "items": [
          "Hap Statistikën dhe zgjidh periudhën, si një interval i personalizuar nga 11/1 deri më 12/31 për një periudhë deklarimi dymujore, ose një interval tremujor.",
          "Trokit pllakën Tatimi për të hapur Raportin tatimor. Eksporti mbulon saktësisht atë periudhë.",
          "Trokit Eksporto lart djathtas te Raporti tatimor. Një meny liston formatet, me të fundit të eksportuarin në këtë iPad të shënuar.",
          "Zgjidh një format, si Libër pune Excel (XLSX), për të hapur një pamje paraprake me ekran të plotë. Skedarët CSV shfaqen si tabelë, dhe libri i punës Excel të lejon të kalosh mes fletëve, si të kontrollosh së pari Summary.",
          "Trokit butonin e ndarjes lart djathtas në pamjen paraprake për të ruajtur skedarin ose për ta dërguar te kontabilisti. Mbyllja e pamjes paraprake të kthen te Raporti tatimor."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Raporti tatimor me menunë Eksporto të hapur, që liston formatet e skedarëve"
      },
      {
        "type": "p",
        "text": "Nëse një eksport dështon, aplikacioni shfaq Skedari nuk u eksportua dhe Provo ta eksportosh përsëri. Asgjë nuk shkruhet; eksportoje përsëri."
      },
      {
        "type": "h2",
        "text": "Formatet e eksportit"
      },
      {
        "type": "list",
        "items": [
          "Përmbledhja e tatimit (CSV): Një rresht për çdo rresht të raportit (çdo tatim dhe normë, normë zero dhe pa tatim), me shitjet, kthimet dhe neton, para tatimit dhe tatimin.",
          "Çdo dokument (CSV): Një rresht për çdo dokument nën çdo tatim, me datën dhe orën, numrin e faturës së shitjes, llojin e dokumentit (shitje, kthim ose rreshti i kundërt i një shfuqizimi), emrin e klientit, shumat dhe mënyrat e pagesës. Një shfuqizim shton një rresht të kundërt në datën e shfuqizimit.",
          "Përmbledhja ditore (CSV): Përmbledhja për çdo ditë, pastaj një tabelë e dytë me pagesat për çdo ditë dhe mënyrë.",
          "Detajet e tatimit në hyrje (CSV): Shfaqet vetëm kur raporti ka një kartë të tatimit në hyrje. Një rresht për çdo rresht tatimi në hyrje të çdo porosie blerjeje dhe shpenzimi, me furnitorin, ID-në tatimore të furnitorit dhe numrin e faturës.",
          "Libër pune Excel (XLSX): Fletët Summary, Documents dhe Daily që përputhen me tri CSV-të e shitjeve, plus Purchases kur raporti shfaq tatim në hyrje. Shumat janë qeliza numrash dhe çdo kolonë përshtatet me përmbajtjen, që asgjë të mos hapet e prerë.",
          "Raport PDF: Një raport A4 në gjuhën e aplikacionit me emrin e dyqanit, periudhën, mënyrën e tatimit, monedhën dhe pjesët e raportit. Dyqanet në Australi, Zelandën e Re, Singapor dhe Mbretërinë e Bashkuar marrin Kutizat e deklaratës së pari; kartat e tatimit në hyrje vijnë pas tyre kur shfaqen. Në pamjen paraprake, nënshkruaj ose shëno me Markup për të ndarë skedarin e shënuar; eksportimi i së njëjtës periudhë përsëri shkruan një kopje të pastër."
        ]
      },
      {
        "type": "h2",
        "text": "Formatimi për programet e kontabilitetit"
      },
      {
        "type": "p",
        "text": "Skedarët CSV janë UTF-8 dhe të ndarë me presje, me emra kolonash fiks në anglisht në çdo gjuhë të aplikacionit, që programet e kontabilitetit t’i lexojnë. Shumat përdorin decimalet e monedhës dhe shenjën minus, pa simbol dhe pa ndarës mijëshesh (si 80.97, -40.00, ose 1000 për një dyqan me jen). Datat duken si 2026-11-03."
      },
      {
        "type": "p",
        "text": "Qelizat me tekst që nisin me =, +, -, ose @ (si një klient me emrin =1+1) marrin një ' në fillim, që fletët e llogaritjes të shfaqin tekst në vend që të ekzekutojnë një formulë. Shumat nuk e marrin kurrë."
      },
      {
        "type": "p",
        "text": "Emrat e skedarëve mbajnë periudhën, si tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx dhe tax-report_2026-11-01_2026-11-30.pdf, kështu që skedarët e periudhave të ndryshme nuk e mbishkruajnë kurrë njëri-tjetrin."
      },
      {
        "type": "h2",
        "text": "Lejet dhe privatësia"
      },
      {
        "type": "p",
        "text": "Çdo plan mund të eksportojë, përfshirë Lite. Stafi ka nevojë për lejen Statistika, njëlloj si për Raportin tatimor."
      },
      {
        "type": "p",
        "text": "Skedarët me tatim në hyrje kërkojnë më parë miratimet që u duhen kartave të tyre: Kostoja dhe fitimi për porositë e blerjes dhe Fitimi, humbja dhe shpenzimet për shpenzimet. Kjo vlen për Detajet e tatimit në hyrje (CSV), si dhe për Libër pune Excel (XLSX) dhe Raport PDF kur shfaqen karta të tatimit në hyrje. Anulimi nuk shkruan asgjë; tri CSV-të e shitjeve nuk kërkojnë kurrë miratim."
      },
      {
        "type": "note",
        "text": "Çdo dokument (CSV) përmban emrat e klientëve, dhe skedarët e tatimit në hyrje përmbajnë emrat e furnitorëve dhe ID-të tatimore. Ndaji vetëm me njerëz që duhet t’i shohin."
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
    "question": "Si e regjistroj tatimin në hyrje (TVSH ose GST për blerjet)?",
    "keywords": [
      "tatim në hyrje",
      "TVSH",
      "GST",
      "zbrit tatimin në hyrje",
      "tatim në hyrje për porositë e blerjes",
      "tatim në hyrje për shpenzimet",
      "ID tatimore e furnitorit",
      "porosi blerjeje",
      "raporti tatimor"
    ],
    "content": [
      {
        "type": "p",
        "text": "Aktivizo Zbrit tatimin në hyrje te Cilësimet → Të dhënat e dyqanit për të regjistruar tatimin e zbritshëm nga faturat e furnitorëve te porositë e blerjes dhe shpenzimet. Të dyja format marrin atëherë një seksion për tatimin në hyrje, ku kopjon tatimin e zbritshëm nga çdo faturë. Raporti tatimor e liston në dy karta, Tatim në hyrje për porositë e blerjes dhe Tatim në hyrje për shpenzimet."
      },
      {
        "type": "h2",
        "text": "Aktivizo Zbrit tatimin në hyrje"
      },
      {
        "type": "steps",
        "items": [
          "Hap Cilësimet → Të dhënat e dyqanit dhe gjej kartën e tatimit.",
          "Nën Ngarko tatim, ndiz Zbrit tatimin në hyrje."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Karta e tatimit te Të dhënat e dyqanit me Zbrit tatimin në hyrje të ndezur dhe këshillën e saj poshtë"
      },
      {
        "type": "p",
        "text": "Zbrit tatimin në hyrje shfaqet vetëm kur dyqani ka të paktën një tatim, dhe nis i fikur për dyqanet e reja dhe pas përditësimit. Ndërrimi ruhet menjëherë dhe regjistrohet te Cilësimet e tatimit në Regjistri i aktivitetit. Kur është i ndezur, shkruaj çmimet e blerjes dhe kostot e produkteve para tatimit të zbritshëm; tatimi i pazbritshëm mbetet në kosto."
      },
      {
        "type": "note",
        "text": "Çdo plan ka çelësin Zbrit tatimin në hyrje, ndërsa Blerje kërkon planin Standard ose më lart. Fikja e tij fsheh fushat në regjistrimet e reja; regjistrimet ekzistuese e mbajnë tatimin në hyrje dhe shumën e pagueshme, dhe raportet tatimore të kaluara mbeten të pandryshuara."
      },
      {
        "type": "h2",
        "text": "Porositë e blerjes"
      },
      {
        "type": "steps",
        "items": [
          "Hap Blerje dhe trokit Blerje e re.",
          "Shkruaj çmimet për njësi para tatimit të zbritshëm, pastaj zhvendosu poshtë kostove shtesë deri te Tatim në hyrje.",
          "Kontrollo Data e faturës, që si parazgjedhje është data e porosisë, dhe shto opsionalisht Numri i faturës dhe ID tatimore e furnitorit.",
          "Zgjidh një tatim të dyqanit te Norma, ose zgjidh Normë tjetër… për të shkruar deri në 3 shifra dhjetore, si 9.975%.",
          "Kontrollo Para tatimit, që nis me totalin e porosisë para tatimit, dhe kopjo Tatim i zbritshëm nga fatura.",
          "Trokit Shto një normë për norma shtesë."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Porosi blerjeje me seksionin Tatim në hyrje, me fushat e faturës, një rresht norme dhe totalet"
      },
      {
        "type": "p",
        "text": "Tatim i zbritshëm nis bosh; DingPOS nuk e llogarit kurrë nga norma dhe pranon rrumbullakimin e faturës. Për shembull, miell 10 × $300 plus $100 transport në faturën AB-12345678 me datë 30 qershor 2026, me një rresht 5% me Para tatimit $3,100 dhe Tatim i zbritshëm $155, jep Totali para tatimit $3,100, Tatim në hyrje $155 dhe Shuma e pagueshme $3,255, që shfaqet te lista, te detajet e porosisë dhe te Të papaguara. Një ID tatimore e ruajtur te furnitori plotëson porositë e reja; porositë e ruajtura e mbajnë të tyren."
      },
      {
        "type": "p",
        "text": "Nëse fatura vonon të vijë, hap porosinë e marrë dhe trokit Regjistro tatimin në hyrje te karta Tatim në hyrje, ose Ndrysho për ta ndryshuar. Ndryshon vetëm Shuma e pagueshme; stoku, kostoja e produktit dhe statusi i paguar ose i papaguar mbeten të pandryshuara. Porositë e shfuqizuara e mbajnë Tatim në hyrje vetëm për lexim, dhe porositë e ruajtura para përditësimit nuk plotësohen prapa."
      },
      {
        "type": "h2",
        "text": "Shpenzimet"
      },
      {
        "type": "p",
        "text": "Te Fitimi → Shpenzime të njëhershme, formulari shton Numri i faturës dhe rreshta të tatimit në hyrje nën shumë. Mbaje shumën para tatimit të zbritshëm dhe kopjo vetëm tatimin e zbritshëm. Në një faturë kancelarie prej $1,100 me $100 tatim të zbritshëm, shkruaj $1,000 dhe një rresht 10% me $1,000 dhe $100; Me tatim tregon $1,100 dhe Fitimi numëron $1,000. Tatimi i tij në hyrje numërohet i plotë në datën e shpenzimit, pa ndjekur kurrë Muaji i numëruar apo një shpërndarje."
      },
      {
        "type": "p",
        "text": "Te Fitimi → Shpenzime fikse, hap një shpenzim të ruajtur si qiraja ose shërbimet komunale dhe trokit Regjistro një faturë nën Faturat sa herë që vjen një faturë, me datën e faturës, numrin opsional të faturës dhe të paktën një rresht norme. Nëse qiraja është $30,000 në muaj dhe faturat e korrikut dhe të gushtit mbajnë secila një rresht 5% me $30,000 dhe $1,500, raporti për periudhën korrik–shtator mban $3,000 tatim në hyrje, ndërsa Fitimi numëron prapë $30,000 çdo muaj."
      },
      {
        "type": "p",
        "text": "Ruajtja e një ndryshimi të tatimit në hyrje në një muaj të kaluar shfaq Të ruhet ndryshimi? dhe të paralajmëron se raporti tatimor i atij muaji ndryshon nëse e ke deklaruar tashmë. Ndryshimet e muajit aktual dhe draftet ruhen pa pyetur."
      },
      {
        "type": "note",
        "text": "DingPOS nuk llogarit TVSH-në e importit, kundërngarkimin (reverse charge) ose kredinë e pjesshme. Kopjo tatimin e zbritshëm nga fatura, dhe çdo tatim që nuk mund ta zbresësh vëre në shumën para tatimit."
      },
      {
        "type": "h2",
        "text": "Raporti tatimor"
      },
      {
        "type": "p",
        "text": "Dy karta vijnë pas kartave të shitjeve: Tatim në hyrje për porositë e blerjes dhe Tatim në hyrje për shpenzimet. Secila liston një rresht për çdo normë, një rresht Pa tatim në hyrje dhe totalet për Para tatimit, Tatim i zbritshëm dhe Me tatim. Totalet përfshijnë blerjet pa tatim në hyrje, ndërsa në disa deklarata tatimore numërohen vetëm rreshtat me tatim në hyrje."
      },
      {
        "type": "list",
        "items": [
          "Porositë e blerjes numërohen te Data e faturës, ose te data e porosisë nëse është bosh.",
          "Porositë e blerjes të shfuqizuara numërohen si shumë negative në datën e shfuqizimit.",
          "Shpenzimet e njëhershme numërohen të plota në datën e shpenzimit.",
          "Faturat e shpenzimeve fikse numërohen në datën e faturës."
        ]
      },
      {
        "type": "p",
        "text": "Tatim në hyrje për porositë e blerjes kërkon Kostoja dhe fitimi, dhe Tatim në hyrje për shpenzimet kërkon Fitimi, humbja dhe shpenzimet; stafi pa një leje e sheh Kërko miratimin e menaxherit nën titullin e kartës. Pllaka Tatimi tregon prapë vetëm tatimin e mbledhur nga shitjet, kurrë minus tatimin në hyrje, sepse metoda e thjeshtuar e Japonisë dhe skema me normë fikse e MB-së funksionojnë ndryshe. Dyqanet në Australi, Zelandën e Re, Singapor dhe Mbretërinë e Bashkuar i shohin këto shuma edhe te Kutizat e deklaratës."
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
    "question": "Ku është raporti tatimor dhe si e lexoj?",
    "keywords": [
      "raporti tatimor",
      "TVSH",
      "GST",
      "tatim shitjeje",
      "Statistika",
      "Tatimi",
      "shitjet dhe tatimi sipas normës",
      "sipas mënyrës së pagesës",
      "deklarata tatimore"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hap Statistikën dhe trokit pllakën Tatimi për të parë Raportin tatimor, që liston shitjet dhe tatimin sipas normës për periudhën që tregon Statistika. Kopjo këto shifra në një deklaratë TVSH-je, GST ose tatimi mbi shitjet, ose dërgoji kontabilistit. Ndryshimet e mëvonshme të tatimeve nuk i ndryshojnë kurrë shifrat e ruajtura të dokumenteve."
      },
      {
        "type": "h2",
        "text": "Hapja e raportit tatimor"
      },
      {
        "type": "steps",
        "items": [
          "Hap Statistikën dhe zgjidh periudhën, si Këtë muaj ose një interval të personalizuar.",
          "Gjej pllakën Tatimi në rreshtin e dytë pas Zbritjet gjithsej.",
          "Trokit pllakën Tatimi ose Raporti tatimor ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Statistika te Këtë muaj me pllakën Tatimi dhe fundin e saj Raporti tatimor ›"
      },
      {
        "type": "p",
        "text": "Kjo pllakë është e vetmja hyrje. Nëntitulli i saj emërton tatimet e mbledhura në periudhë, me shumën më të madhe së pari: dy me emër, tre ose më shumë si, për shembull, 3 tatime, përfshirë PST 7%. Titulli tregon periudhën e Statistikës (Këtë muaj · 11/1 – 11/30) pa zgjedhës periudhe dhe pa shkurtore për muajin e kaluar, sepse periudhat e deklarimit ndryshojnë (Tajvan dy muaj, Australi një tremujor, Japoni një vit)."
      },
      {
        "type": "p",
        "text": "Dyqanet pa tatim dhe pa shitje me tatim në periudhë nuk e shohin pllakën Tatimi; periudhat pa dokumente shfaqin gjendjen boshe të Statistikës. Tatimet e fshira e mbajnë pllakën për periudhat me shitje nën to."
      },
      {
        "type": "note",
        "text": "Çdo plan, përfshirë Lite dhe provën, ka pllakën, raportin dhe çdo eksport. Stafi ka nevojë për lejen Statistika; rolet që kërkojnë miratim e shohin mesazhin e miratimit derisa një menaxher ta miratojë."
      },
      {
        "type": "h2",
        "text": "Leximi i raportit"
      },
      {
        "type": "p",
        "text": "Dyqanet në Australi, Zelandën e Re, Singapor dhe Mbretërinë e Bashkuar shohin Kutizat e deklaratës së pari."
      },
      {
        "type": "p",
        "text": "Shitjet dhe tatimi sipas normës liston një rresht për çdo normë: më e larta së pari, pastaj 0% me normë zero, dhe Pa tatim (produkte pa tatim) së fundi. Kolonat janë Shitjet, Kthime dhe shfuqizime dhe Neto, secila me Para tatimit dhe Tatimi; rreshtat me normë zero dhe Pa tatim nuk kanë rresht tatimi. Çdo tatim i dyqanit ka një rresht edhe pa shitje. Riemërtimi mban një rresht; një ndryshim norme shton një."
      },
      {
        "type": "p",
        "text": "Totalet tregon Shitjet para tatimit, Tatimi dhe Shitjet me tatim. Me dy ose më shumë tatime, një shënim thotë se një shitje mund të ketë disa tatime, ndaj shitjet sipas rreshtave nuk mund të mblidhen; Shitjet para tatimit e numërojnë çdo shitje një herë. Për një tremujor në MB, TVSH 20% mund të tregojë Para tatimit £1,000 dhe Tatimi £200, Normë zero 0% £300, dhe Pa tatim £50: Totalet jep Shitjet para tatimit £1,350, Tatimi £200, Shitjet me tatim £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Raporti tatimor me rreshtat e Shitjet dhe tatimi sipas normës dhe Totalet poshtë"
      },
      {
        "type": "list",
        "items": [
          "Sipas mënyrës së pagesës liston pagesat e këtyre dokumenteve deri në fund të periudhës, shumat e papaguara si Llogari të arkëtueshme, dhe rrumbullakimin e parave në një rresht Përfshin rrumbullakimin e parave … brenda rreshtit të parave në dorë.",
          "Nuk numërohen si shitje shfaqet vetëm për kaparet e mbajtura, duke listuar Kapare të mbajtura me një nëntitull për ta kontrolluar deklarimin me kontabilistin, pa u shtuar as te shitjet as te tatimi.",
          "Dyqanet me Zbrit tatimin në hyrje të ndezur, ose me tatim në hyrje të regjistruar në periudhë, shohin edhe Tatim në hyrje për porositë e blerjes dhe Tatim në hyrje për shpenzimet."
        ]
      },
      {
        "type": "h2",
        "text": "Në cilën ditë numërohet çdo dokument"
      },
      {
        "type": "p",
        "text": "Trokit ⓘ pranë Shitjet dhe tatimi sipas normës:"
      },
      {
        "type": "list",
        "items": [
          "Një shfuqizim numërohet në periudhën kur u shfuqizua, si shumë negative, kështu që një periudhë e deklaruar më parë nuk ndryshon kurrë. Statistika, në vend të kësaj, e heq nga periudha e shitjes.",
          "Një kthim numërohet në datën e vet. Në një këmbim, artikujt e rinj numërohen si shitje dhe artikujt e kthyer si kthime.",
          "Një porosi paraprake numërohet ditën e marrjes së mallit; një shitje me afat pagese, ditën e shitjes."
        ]
      },
      {
        "type": "p",
        "text": "Një shitje e 10/30 e shfuqizuar më 11/2 mbetet te Shitjet e tetorit dhe shfaqet si shumë negative te Kthime dhe shfuqizime të nëntorit. Shlyerja e një shitjeje me afat pagese më vonë nuk e zhvendos."
      },
      {
        "type": "h2",
        "text": "Tatimi i mbledhur dhe totalet e Statistikës"
      },
      {
        "type": "p",
        "text": "Pllaka Tatimi është e barabartë me totalin Tatimi të Raportit tatimor. Dallon nga rreshti Tatim te Nga të ardhurat nga shitjet te fitimi bruto i Statistikës vetëm te shfuqizimet ndërmjet periudhave, sepse Statistika e heq një shitje të shfuqizuar nga periudha e saj origjinale."
      },
      {
        "type": "note",
        "text": "Raporti tatimor tregon tatimin e mbledhur nga shitjet, kurrë tatimin e pagueshëm (tatimi mbi shitjet minus tatimi në hyrje), sepse jo çdo shtet e llogarit kështu, si metoda e thjeshtuar e Japonisë ose Flat Rate Scheme e MB-së."
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
    "question": "Cilat shifra futen në kutizat e deklaratës BAS, GST ose TVSH?",
    "keywords": [
      "kutizat e deklaratës",
      "Raporti tatimor",
      "Statistika",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "deklarata e TVSH-së",
      "zbrit tatimin në hyrje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Për dyqanet në Australi, Zelandën e Re, Singapor ose Mbretërinë e Bashkuar, Raporti tatimor hapet me Kutizat e deklaratës, që tregon çdo kuti dhe shumën nga i njëjti raport. Mbulon Australia BAS · Simpler BAS, Zelanda e Re GST101A, Singapori GST F5 dhe Deklarata e TVSH-së në MB në çdo plan."
      },
      {
        "type": "h2",
        "text": "Hapja e Kutizave të deklaratës"
      },
      {
        "type": "steps",
        "items": [
          "Hap Statistikën.",
          "Trokit pllakën Tatimi për të hapur Raportin tatimor."
        ]
      },
      {
        "type": "p",
        "text": "Kutizat e deklaratës është karta e parë, mbi Shitjet dhe tatimi sipas normës, dhe nëntitulli i saj emërton deklaratën. Çdo shumë vjen nga i njëjti raport, me centë, dhe asgjë nuk rillogaritet. Raporti PDF i eksportuar hapet me të njëjtën kartë. Dyqanet e konfiguruara para se aplikacioni të regjistronte shtetin numërohen sipas monedhës (AUD, NZD, SGD ose GBP); dyqanet e tjera nuk kanë kartë Kutizat e deklaratës."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Karta Kutizat e deklaratës në krye të Raportit tatimor me Kutitë 1, 4, 6 dhe 7 të Deklaratës së TVSH-së në MB"
      },
      {
        "type": "h2",
        "text": "Australia BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Shitjet me GST, përfshirë shitjet pa GST dhe shitjet pa tatim; te “Does the amount shown at G1 include GST?” përgjigju “Yes”",
          "1A GST on sales: Tatimi mbi shitjet",
          "1B GST on purchases: Tatimi i zbritshëm nga porositë e blerjes dhe shpenzimet"
        ]
      },
      {
        "type": "p",
        "text": "ATO kërkon dollarë të plotë: te BAS lëri centët jashtë, kurrë mos i rrumbullakos lart."
      },
      {
        "type": "h2",
        "text": "Zelanda e Re GST101A"
      },
      {
        "type": "list",
        "items": [
          "Kutia 5 Total sales and income: Shitjet me GST, përfshirë shitjet me normë zero; shitjet pa tatim nuk përfshihen",
          "Kutia 6 Zero-rated supplies: Shitje me normë zero",
          "Kutia 11 Total purchases and expenses: Porositë e blerjes dhe shpenzimet me GST, GST i përfshirë; blerjet pa tatim në hyrje ose me normë zero nuk përfshihen"
        ]
      },
      {
        "type": "p",
        "text": "myIR i llogarit Kutinë 8 dhe Kutinë 12 si 3/23, që mund të ndryshojë me disa cent nga tatimi i raportit."
      },
      {
        "type": "h2",
        "text": "Singapori GST F5"
      },
      {
        "type": "list",
        "items": [
          "Kutia 1 Total value of standard-rated supplies: Shitjet e tatueshme para tatimit",
          "Kutia 2 Total value of zero-rated supplies: Shitje me normë zero; vetëm eksportet dhe shërbimet ndërkombëtare mund të kenë normë zero",
          "Kutia 5 Total value of taxable purchases: Porositë e blerjes dhe shpenzimet me GST ose me normë zero, para tatimit; blerjet pa tatim në hyrje nuk përfshihen",
          "Kutia 6 Output tax due: Tatimi mbi shitjet",
          "Kutia 7 Input tax and refunds claimed: Tatimi i zbritshëm nga porositë e blerjes dhe shpenzimet"
        ]
      },
      {
        "type": "h2",
        "text": "Deklarata e TVSH-së në MB"
      },
      {
        "type": "list",
        "items": [
          "Kutia 1 VAT due on sales and other outputs: Tatimi mbi shitjet",
          "Kutia 4 VAT reclaimed on purchases and other inputs: Tatimi i zbritshëm nga porositë e blerjes dhe shpenzimet",
          "Kutia 6 Total value of sales and all other outputs excluding any VAT: Shitjet para tatimit, përfshirë shitjet me normë zero, të përjashtuara dhe pa tatim",
          "Kutia 7 Total value of purchases and all other inputs excluding any VAT: Porositë e blerjes dhe shpenzimet para tatimit, përfshirë blerjet pa tatim në hyrje; hiq pagat dhe taksat vendore të biznesit (business rates) që i ke regjistruar"
        ]
      },
      {
        "type": "p",
        "text": "Për kontabilitetin standard të TVSH-së. Në Skemën me normë fikse (Flat Rate Scheme), Kutia 1 dhe Kutia 6 llogariten ndryshe. Në MB, TVSH-ja për një kapar duhet paguar kur e merr; DingPOS e numëron një porosi paraprake kur merret malli."
      },
      {
        "type": "p",
        "text": "Shembull për një tremujor në MB: shitje £1,000 me TVSH 20% para tatimit (tatimi £200), £300 me normë zero, £50 pa tatim, porosi blerjeje prej £400 plus £80 TVSH dhe shpenzime prej £250 pa tatim në hyrje japin Kutia 1 £200, Kutia 4 £80, Kutia 6 £1,350 dhe Kutia 7 £650."
      },
      {
        "type": "h2",
        "text": "Kutitë bosh dhe qasja e stafit"
      },
      {
        "type": "p",
        "text": "Kutitë që i llogarit zyra e tatimeve dhe shumat e detyruara lihen jashtë (MB Kutia 3 dhe 5; Singapor Kutia 3, shitje të përjashtuara). Në Zelandën e Re dhe Singapor, shitjet pa tatim nuk janë në asnjë kuti; pyet kontabilistin nëse duhej të kishin tatim."
      },
      {
        "type": "p",
        "text": "Kutitë e tatimit në hyrje (AU 1B, NZ 11, SG 5 dhe 7, MB 4 dhe 7) kërkojnë Zbrit tatimin në hyrje, ose shfaqin — dhe Nuk ka tatim në hyrje të regjistruar, kurrë 0. Kutia 7 e MB-së kërkon si Tatim në hyrje për porositë e blerjes ashtu edhe Tatim në hyrje për shpenzimet; vetëm porositë e blerjes e plotësojnë Kutinë 4 dhe e lënë Kutinë 7 si —."
      },
      {
        "type": "p",
        "text": "Stafi pa lejen Fitimi, humbja dhe shpenzimet ose Kostoja dhe fitimi nuk i sheh kutitë që mbledhin të dyja kartat derisa një menaxher t’i miratojë përmes Kërko miratimin e menaxherit."
      },
      {
        "type": "note",
        "text": "Llogaritur sipas datave të shitjes dhe të faturës; DingPOS nuk ndjek datat e pagesës. Nëse deklaron mbi bazë parash ose pagesash, rregulloji këto shifra."
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
          "Zbatimi: a përfshihen artikujt e shportës te produktet ose kategoritë për të cilat vlen promovimi? A është produkti i vendosur te Përjashto nga promovimet (produktet me çmim në shitje janë të tillë si parazgjedhje)? A është arritur pragu i shpenzimit?",
          "Audienca: a është promovimi i kufizuar te një nivel anëtarësie ose muaji i ditëlindjes? A u zgjodh ai anëtar gjatë pagesës?",
          "Kufijtë e përdorimit: a është arritur kufiri total i përdorimit ose kufiri për këtë klient? Kufiri për klient i një promovimi për muajin e ditëlindjes numërohet për vit kalendarik.",
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
      "program besnikërie",
      "rregullo pikët"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hap Cilësimet → Programi i besnikërisë dhe përcakto dy rregulla: sa pikë fiton për çdo X të shpenzuar dhe sa zbritje jep përdorimi i N pikëve (me një kufi opsional për porosi). Mund të japësh automatikisht edhe pikë mirëseardhjeje për anëtarët e rinj. Dyqanet e reja fillojnë me pikët të çaktivizuara: ndiz çelësin “Aktivizo programin e besnikërisë” dhe plotëso një rregull. Nëse çelësi është i ndezur dhe nuk ka asnjë rregull, shfaqet paralajmërimi “Ende nuk është vendosur asnjë rregull për fitimin ose përdorimin e pikëve, ndaj shitjet nuk do të fitojnë dhe nuk do të përdorin pikë.”"
      },
      {
        "type": "p",
        "text": "Lidhe anëtarin me shitjen, në shportë ose në ekranin e pagesës, dhe pikët grumbullohen automatikisht; për t'i përdorur, shkruaj pikët që do të shpenzohen. Ekrani i konfirmimit shfaq pikët e fituara dhe gjendjen e re, si “+22 pikë · 122 pikë gjithsej”; në një shitje me afat pagese ose në një porosi paraprake që nuk është paguar plotësisht, pikët shtohen vetëm kur hyjnë paratë dhe shfaqet “shtohen pas shlyerjes” ose “shtohen kur paguhet në marrje”. Shfuqizimi i një porosie heq pikët që ajo kishte dhënë dhe kthen pikët që ishin përdorur."
      },
      {
        "type": "p",
        "text": "Për të shtuar ose hequr pikë me dorë (për shembull, për një blerje që nuk u regjistrua), prek Rregullo te karta Pikë në detajet e klientit, zgjidh Shto ose Zbrit, shkruaj pikët dhe, nëse dëshiron, jep një arsye (deri në 100 karaktere). Nuk mund të zbresësh më shumë pikë sesa ka klienti. Çdo rregullim mbetet në historikun e pikëve me gjendjen para dhe pas, arsyen dhe personin që e ka bërë."
      },
      {
        "type": "note",
        "text": "Rregullimi manual i pikëve erdhi me v3.5. Në Pro, punonjësit me një rol që kërkon miratim për Rregullim manual i pikëve (roli Punonjës e ka kështu si parazgjedhje) pyeten për PIN-in e një menaxheri ose të pronarit kur e konfirmojnë."
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
        "type": "p",
        "text": "Nisja e parë pas një përditësimi, ose pas rivendosjes së një kopjeje rezervë nga një version më i vjetër, mund të shfaqë fillimisht “Po përditësohen të dhënat e tua…”. Kjo do të thotë që të dhënat e dyqanit po kalojnë në një format më të ri, gjë që zgjat më shumë sa më shumë të dhëna të kesh; aplikacioni hapet vetë kur mbaron. Nuk është ngrirë."
      },
      {
        "type": "note",
        "text": "Shkaku më i shpeshtë është mbyllja e aplikacionit në mes të një rivendosjeje. Para v3.0, kjo e bënte aplikacionin të mbyllej papritur në çdo nisje; që nga v3.0 ai ndalet në këtë ekran."
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
        "text": "Një leje ka dy vlera: E lejuar ose Kërkon miratim — asgjë nuk është e ndaluar plotësisht. Kur punonjësit hasin një veprim që kërkon miratim, një koleg që lejohet ta kryejë atë zgjedh emrin e vet dhe shkruan PIN-in për ta lejuar."
      },
      {
        "type": "list",
        "items": [
          "Veprimet (rregullimi manual i stokut, rregullimi manual i pikëve, menaxhimi i produkteve, kryerja e pagesës me zbritje mbi kufirin e lejuar): një miratim mbulon vetëm atë veprim.",
          "Pamjet (kosto dhe fitim, Statistika, Fitimi, humbja dhe shpenzimet, Cilësimet, kopje rezervë dhe rivendosje): miratimi zhbllokon derisa të ndërrojë operatori ose aplikacioni të kalojë në sfond.",
          "Kufiri i zbritjes vlen për zbritjet manuale dhe kontrollohet një herë gjatë pagesës; promovimet automatike dhe përdorimi i pikëve nuk llogariten në të."
        ]
      },
      {
        "type": "p",
        "text": "Parazgjedhjet: Menaxherët lejohen të bëjnë gjithçka përveç kopjes rezervë dhe rivendosjes dhe përveç fitimit, humbjes dhe shpenzimeve, pa kufi zbritjeje; Punonjësit kanë nevojë për miratim për gjithçka, me kufi 10%. Pronari lejohet gjithmonë dhe lejet e tij nuk mund të ndryshohen. Për t'i ndryshuar, shko te Stafi → Lejet e roleve, prek Ndrysho dhe ruaj një herë — ndryshimet zbatohen menjëherë për të gjithë."
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
        "text": "Përdor regjistrin e aktivitetit. Në faqen Stafi, prek Regjistri i aktivitetit lart djathtas dhe shkruaj PIN-in e pronarit për të parë veprimet e ndjeshme të dyqanit, të renditura nga më të rejat te më të vjetrat: shfuqizime, kthime, rregullime të stokut dhe rinumërime, rregullime manuale të pikëve, miratime, ndryshime të stafit dhe lejeve, ndryshime të PIN-it të pronarit, cilësimet e tatimit, ndryshime çmimi dhe kostoje të produkteve dhe fshirje produktesh. Shitjet e zakonshme nuk renditen."
      },
      {
        "type": "list",
        "items": [
          "Çdo regjistrim tregon çfarë ka prekur, kush ka bërë çfarë dhe kur, si dhe rezultatin — për shembull “M price $390 → $350”. Arsyeja e dhënë për një shfuqizim, një kthim, një rregullim stoku ose një rregullim pikësh shfaqet në rreshtin e tretë të regjistrimit.",
          "Filtro sipas punonjësit (përfshirë ata të çaktivizuar), llojit të veprimit dhe Sot / Këtë javë / Këtë muaj.",
          "Prek një regjistrim që të çon te një porosi, produkt ose klient për të hapur detajet përkatëse.",
          "Detajet e porosisë, detajet e produktit dhe faqja e secilit punonjës kanë listën e vet të regjistrimeve, ku shfaqen vetëm regjistrimet që lidhen me to.",
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
        "text": "Merr 30 ditë me çdo veçori të planit Pro që nga instalimi i parë, përfshirë llogaritë e punonjësve, lejet dhe regjistrin e aktivitetit — pa nevojë për llogari."
      },
      {
        "type": "p",
        "text": "Nëse abonohesh në çdo plan gjatë provës, prova përfundon menjëherë dhe nga ai moment vlen plani që ke blerë. Pas provës, veçoritë Pro si punonjësit dhe regjistri i aktivitetit mbeten të disponueshme vetëm me abonim Pro. Raportet e avancuara nuk kanë nevojë për të; që nga v3.4 çdo plan i përfshin."
      },
      {
        "type": "p",
        "text": "Gjatë 7 ditëve të fundit dhe ditën e fundit, aplikacioni të kujton një herë për secilën nga këto: sa ditë kanë mbetur, që procesi i pagesës ndalet kur mbaron prova dhe që të dhënat e tua ruhen."
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
        "text": "Të tria planet përfshijnë funksionin e plotë të pagesës, produktet, porositë (me shfuqizime, kthime malli dhe këmbime), raportet (raportet e avancuara dhe fitimi e humbja mujore të përfshira që nga v3.4, raporti tatimor dhe eksporti i tij që nga v3.6) dhe kopjen rezervë në cloud. Ndryshojnë te veglat për drejtimin e dyqanit:"
      },
      {
        "type": "list",
        "items": [
          "Lite: për një person që drejton një banak pazari dhe i duhen pagesa e produktet.",
          "Standard: shton promovime, zbritje të paracaktuara, pikë besnikërie dhe nivele anëtarësh, ndjekjen e stokut, blerjet te furnitorët, shitjet me afat pagese, porositë paraprake dhe normat e komisionit të pagesave.",
          "Pro: shton llogari punonjësish dhe leje, miratimin nga menaxheri, regjistrin e aktivitetit dhe regjistrimet e rivendosjes — për dyqane me punonjës."
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
        "text": "Së pari krijo nivelet te Cilësimet → Nivelet e anëtarësisë (p.sh. Gold), pastaj drejtoje promovimin te ai nivel. Për ofertat e ditëlindjes, cakto audiencën te Muaji i ditëlindjes dhe plotëso Kufiri për klient."
      },
      {
        "type": "list",
        "items": [
          "Anëtari duhet të zgjidhet në pagesë që oferta të aktivizohet — përshtatshmëria vlerësohet sipas anëtarit të zgjedhur aktualisht.",
          "Përshtatshmëria për ditëlindje lexon muajin e ditëlindjes së anëtarit, prandaj plotëso fushën e ditëlindjes; anëtarët pa të nuk trajtohen kurrë si klientë ditëlindjeje.",
          "Një promovim për muajin e ditëlindjes ka nevojë për kufi për klient, që numërohet për vit kalendarik: kufiri 1 do të thotë që çdo klient mund ta përdorë një herë në vit dhe rivendoset vitin tjetër. Pa të nuk mund të ruhet.",
          "Ngritjet automatike të nivelit vlerësohen kur përfundon pagesa; nëse porosia shfuqizohet, ngritja që ajo ka shkaktuar zhbëhet automatikisht."
        ]
      },
      {
        "type": "note",
        "text": "Para v3.2, një promovim për muajin e ditëlindjes shfaqte gabim dhe nuk ruhej edhe kur kufiri për klient ishte plotësuar. Nëse të ndodh kjo, përditëso DingPOS nga App Store."
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
        "text": "Dhuratat dhe shtesat me pagesë nuk e ndryshojnë kurrë vetë shportën. Kur plotësohen kushtet, në ekranin e arkëtarit shfaqet një banner sugjerimi, dhe shporta ndryshon vetëm kur arkëtari troket butonin e dhuratës ose butonin + në banner (Zgjidh dhuratën ose Zgjidh shtesën) — me qëllim, sepse dhuratat përfshijnë stok fizik: dikush duhet të konfirmojë që e ka në dispozicion dhe që klienti e dëshiron."
      },
      {
        "type": "list",
        "items": [
          "Pas ✕-së së banerit (Refuzo), i njëjti sugjerim nuk shfaqet më për këtë shportë; një shportë e re ose e pastruar e kërkon sërish.",
          "Nëse shporta pushon së plotësuari kushtet (p.sh. hiqet artikulli që nxiti një dhuratë), dhurata ose shtesa hiqet automatikisht me një mesazh sipër, dhe nuk llogaritet si përdorim (që nga v3.6).",
          "Që nga v3.4, ofertat ende në pritje nuk e ndalojnë pagesën: një rresht i verdhë nën butonin e pagesës, si “1 ofertë në pritje nuk do të zbatohet”, tregon sa janë lënë jashtë (trokite për të parë cilat), dhe porosia kalon pa to. Që pagesa të presë si më parë, aktivizo Zgjidh ofertat para pagesës te Cilësimet → Preferencat e pajisjes; vlen vetëm për këtë iPad.",
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
        "text": "Që nga v3.4, Fitimi tregon fitimin neto të çdo muaji pas kostos së produkteve, komisioneve dhe shpenzimeve — shih “Si e shoh sa fitova realisht çdo muaj?” Që nga v3.6, Raporti tatimor e eksporton një periudhë (për shembull Këtë muaj) si CSV, libër pune Excel ose Raport PDF për kontabilistin, me shitjet, tatimin, shumën e arkëtuar sipas çdo mënyre pagese dhe të arkëtueshmet. Fitimi dhe raportet e tjera ende nuk mund të eksportohen, por gjithçka që të duhet për rakordim është tashmë në aplikacion:"
      },
      {
        "type": "list",
        "items": [
          "Te Statistika, zgjidh Këtë muaj për të parë të ardhurat nga shitjet e muajit, paratë e arkëtuara, fitimin dhe ndarjen sipas mënyrës së pagesës.",
          "Blerjet nga furnitorët me afat mujor mblidhen te Të papaguara në Blerje, ku mund të shlyesh menjëherë blerjet e një muaji të tërë.",
          "Shitjet me afat pagese për klientët mblidhen te Porosi → Të arkëtueshme, ku mund të shlyesh menjëherë shitjet e një muaji të tërë."
        ]
      },
      {
        "type": "p",
        "text": "Nëse të duhet një raport i shlyerjes mujore që mund ta eksportosh ose printosh, përtej asaj që mbulon Raporti tatimor, na shkruaj cilat fusha të duhen — zhvillimin e prioritizojmë sipas numrit të kërkesave."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
