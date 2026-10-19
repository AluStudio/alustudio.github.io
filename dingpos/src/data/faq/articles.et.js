// Generated from en and the et translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync et`, then `npm run l10n -- apply et`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Alustamine",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Kassa",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Müügid ja tagastused",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Tooted, ladu ja ostmine",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Aruanded",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Kampaaniad ja püsikliendiprogramm",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Varundus ja andmed",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Töötajad ja õigused",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Tellimus ja arveldus",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Kampaaniate seadistusjuhendid",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Tulekul",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Kuidas DingPOSis poodi seadistada?",
    "keywords": [
      "seadistamine",
      "alustamine",
      "esmakordne seadistus",
      "seadistusviisard",
      "poe avamine",
      "esimesed sammud"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kui avad DingPOSi esimest korda, juhatab seadistusviisard sind poe avamisel läbi umbes 10 minutiga:"
      },
      {
        "type": "steps",
        "items": [
          "Vali oma riik – valuuta, maksurežiim ja vaikimisi maksumäär täidetakse automaatselt (maksumäära ja maksurežiimi saab selles etapis siiski muuta).",
          "Sisesta poe nimi ja soovi korral laadi üles poe logo.",
          "Järgi juhendit ja lisa 3–5 toodet (vahele jäetav – tooteid saad lisada ka hiljem)."
        ]
      },
      {
        "type": "p",
        "text": "Kui oled valmis, kuuled helinat „Ding!“ – pood on valmis ja müüa saab kohe alustada."
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
    "question": "Kas DingPOS töötab ilma internetita?",
    "keywords": [
      "offline",
      "ilma internetita",
      "internet",
      "wifi",
      "võrguühendus",
      "ühenduseta",
      "turg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. DingPOS töötab ilma internetita – kassa, tootehaldus, laoseis ja aruanded töötavad kõik otse sinu iPadis ning võrku ei vaja. Ööturud, pop-up-poed ja muud Wi-Fita kohad sobivad suurepäraselt."
      },
      {
        "type": "p",
        "text": "Ühendust vajab vaid kaks asja: pilvevarundus (üleslaadimine sinu enda iCloudi / Google Drive'i / Dropboxi) ja tellimuse oleku kontroll."
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
    "question": "Kas DingPOSi kasutamiseks on vaja konto luua?",
    "keywords": [
      "konto",
      "registreerimine",
      "sisselogimine",
      "registreeru",
      "andmekaitse",
      "privaatsus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ei. DingPOSil pole kontosüsteemi – laadi alla ja alusta müümist. Sinu tooted, müügid ja klientide andmed jäävad sinu iPadi ega laeta kunagi meie serveritesse."
      },
      {
        "type": "p",
        "text": "Pilvevarunduse sisselülitamisel logid sisse oma pilvekontosse (iCloud, Google Drive või Dropbox). Varukoopiad asuvad sinu kontol – meil neile juurdepääsu pole."
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
    "question": "Millistes seadmetes DingPOS töötab?",
    "keywords": [
      "seade",
      "toetatud seadmed",
      "iphone",
      "mac",
      "ipad",
      "nõuded",
      "versioon",
      "iPadOS"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS töötab praegu iPadides, kus on iPadOS 17 või uuem, ning on mõeldud peamiselt horisontaalasendis kasutamiseks."
      },
      {
        "type": "p",
        "text": "iPhone'i ja Maci me veel ei toeta. Kui soovid, et toetaksime mõnda muud seadet, kirjuta meile ja räägi oma kasutusjuhtumist."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kas valuutat või maksurežiimi saab pärast seadistamist muuta?",
    "keywords": [
      "valuuta",
      "maksurežiim",
      "muutmine",
      "lukus",
      "maksumäär",
      "valuuta vahetamine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maksumäära saab igal ajal muuta jaotises Seaded – uus määr kehtib ainult edaspidistele müükidele."
      },
      {
        "type": "p",
        "text": "Valuuta ja maksurežiim (maksuga / maksuta hinnad) lukustatakse seadistamise lõppedes. Kõik varasemad müügid on arvutatud nende alusel, mistõttu nende muutmine keset tegevust rikuks sinu aruanded."
      },
      {
        "type": "note",
        "text": "Kui oled poe just avanud ja olulisi andmeid veel pole, saad rakenduse kustutada ja uuesti installida, et seadistus otsast peale teha. Enne kustutamist veendu, et sul pole midagi, mida peaks säilitama."
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
    "question": "Kuidas DingPOSi keelt vahetada?",
    "keywords": [
      "keel",
      "rakenduse keel",
      "inglise keel",
      "hiina keel",
      "keele vahetamine",
      "keelevalik"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS toetab inglise ja traditsioonilist hiina keelt. Ava Seaded → Seadme eelistused ja puuduta valikut Rakenduse keel. See avab DingPOSi lehe iPadi rakenduses Seaded, kus valid keele jaotises Keel."
      },
      {
        "type": "p",
        "text": "iOS ei luba rakendustel keelte loendit otse avada, mistõttu tehakse viimane puudutus süsteemi seadetes. Keel kehtib ainult sellel iPadil."
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
    "question": "Kuidas teenindada korraga mitut klienti?",
    "keywords": [
      "ostukorvid",
      "mitu ostukorvi",
      "ootele panemine",
      "ostukorvi vahetamine",
      "paralleelselt",
      "järjekord"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kassaekraanil saab korraga olla kuni 10 ostukorvi. Uue lisamiseks puuduta ostukorvide real nuppu „+“, vahetamiseks puuduta numbriga vahelehte."
      },
      {
        "type": "p",
        "text": "Iga ostukorv arvutatakse eraldi. Kui klient A alles valib, vaheta teisele ostukorvile ja vormista enne kliendi B ost. Ostukorv eemaldatakse automaatselt, kui makse on vormistatud."
      },
      {
        "type": "note",
        "text": "Ostukorvid on ainult mälus – vormistamata ostukorvid tühjendatakse, kui rakendus täielikult sulgeda."
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
    "question": "Kuidas allahindlust anda?",
    "keywords": [
      "allahindlus",
      "protsent",
      "kindel summa",
      "hinnaalandus",
      "soodushind"
    ],
    "content": [
      {
        "type": "p",
        "text": "Allahindlus töötab kahel tasemel ning mõlemal saab anda kindla summa või protsendi:"
      },
      {
        "type": "list",
        "items": [
          "Toote allahindlus: puuduta ostukorvis toodet → vali „Allahindlus“ → sisesta summa või protsent.",
          "Ostukorvi allahindlus: puuduta ostukorvi all nuppu „Allahindlus“."
        ]
      },
      {
        "type": "p",
        "text": "Igal tootel ja igal ostukorvil võib korraga olla üks allahindlus – uue andmisel kirjutatakse eelmine üle ning allahindluse märgist puudutades eemaldub see. Allahindlused rakendatakse enne maksu, nagu jaekaubanduses tavaks."
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
    "question": "Kuidas maksu arvutatakse?",
    "keywords": [
      "maks",
      "käibemaks",
      "müügimaks",
      "maksuga hind",
      "maksuta hind",
      "tšekk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maks arvutatakse automaatselt seadistamisel valitud maksurežiimi järgi. Tšekk näitab maksusummat mõlemas režiimis:"
      },
      {
        "type": "list",
        "items": [
          "Maksuga hinnad: hind sisaldab juba maksu – kogusumma ei muutu ja tšekil on sisalduv maks eraldi välja toodud (levinud Taiwanis, Jaapanis jm).",
          "Maksuta hinnad: maks lisatakse kassas allahindlusjärgsele summale juurde (levinud USAs, Kanadas jm)."
        ]
      },
      {
        "type": "p",
        "text": "Arvutuse täielik järjekord: toote allahindlused → ostukorvi allahindlus → maks. Summad ümardatakse tavareegli järgi valuuta kümnendkohtadeni (nt 0 TWD puhul, 2 USD puhul)."
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
    "question": "Milliseid makseviise DingPOS toetab?",
    "keywords": [
      "makse",
      "sularaha",
      "krediitkaart",
      "Line Pay",
      "tagasiraha",
      "oma makseviis",
      "müük arvele"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sularaha, krediitkaart ja Line Pay on olemas algusest peale ning Seadetes saad lisada ka oma makseviisi nimesid (nt Apple Pay, kohalikud rahakotid)."
      },
      {
        "type": "p",
        "text": "Makseviisid on raamatupidamise sildid – DingPOS ise makseid ei töötle. Kaardi- või mobiilimakse võta vastu oma olemasoleva terminali või rakendusega ning vali selle salvestamiseks DingPOSis sobiv silt. Sularahamakse puhul arvutab rakendus tagasiraha automaatselt."
      },
      {
        "type": "p",
        "text": "Kui püsiklient võtab kauba kohe kaasa ja maksab hiljem, vali „Müük arvele“: müük kirjutatakse üles laekumata nõudena ja märgitakse tasutuks, kui raha laekub. Vaata „Kas püsikliendid saavad osta arvele ja maksta hiljem?“"
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
    "question": "Kas saan pärast makset kõlava „Dingi“ välja lülitada?",
    "keywords": [
      "heli",
      "ding",
      "vaigistamine",
      "hääletu",
      "kassa heli"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Mine jaotisse Seaded → Seadme eelistused ja lülita Kassa heli välja. Järgmisest müügist alates jääb õnnestumise ekraan vaikseks, vibratsioon jääb alles."
      },
      {
        "type": "p",
        "text": "Lüliti kehtib ainult sellel iPadil ja pilvekoopia taastamine seda ei muuda."
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
    "question": "Kas ostukorv uueneb, kui muudan toote hinda?",
    "keywords": [
      "hinnamuutus",
      "hinna muutmine",
      "ostukorv",
      "ümberarvutamine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ostukorv näitab hinda sellest hetkest, kui toode lisati. Kui puudutad makse vormistamise kinnitust, küsib DingPOS iga toote uusima hinna uuesti – kui midagi on muutunud, annab rakendus enne jätkamist uuendatud hindadest teada."
      },
      {
        "type": "p",
        "text": "Kampaaniad hinnatakse kinnitamisel samuti algusest peale uuesti. Kui selle tõttu muutub kogusumma, maks või mõni allahindlus, kuvatakse muudatuste kokkuvõte ja pead uuesti kinnitama – nii on nähtav summa täpselt see, mis salvestatakse."
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
    "question": "Kas käsitsi allahindlust ja kampaaniaid saab koos kasutada?",
    "keywords": [
      "käsitsi allahindlus",
      "kampaania",
      "koos kasutamine",
      "ülekirjutamine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Reegel on „käsitsi antud allahindlus on ees, tasemed jäävad üksteisest sõltumatuks“:"
      },
      {
        "type": "list",
        "items": [
          "Toote käsitsi allahindlus: see rida enam toote tasemel kampaaniaid ei saa – sinu käsitsi antud allahindlust loetakse kohapealseks lõplikuks otsuseks. Rea summa läheb siiski arvesse ostusumma piiride juures.",
          "Ostukorvi käsitsi allahindlus: rakendatakse pärast kõigi kampaaniate arvutamist, seega kehtivad mõlemad koos. Kui sisestad rohkem kui järelejäänud kogusumma, piiratakse see automaatselt ja kuvatakse teade."
        ]
      },
      {
        "type": "p",
        "text": "Käsitsi allahindluse eemaldamisel on rida järgmisel hindamisel taas kampaaniatele sobiv."
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
    "question": "Tegin kassas vea – kuidas müüki anuleerida?",
    "keywords": [
      "anuleerimine",
      "müügi anuleerimine",
      "tühistamine",
      "viga kassas",
      "vale müük"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava Müügid, leia müük, ava selle detailvaade ja vali Anuleeri. Kinnita ning ongi tehtud."
      },
      {
        "type": "p",
        "text": "Anuleerimine pöörab automaatselt tagasi kõik seotud: jälgitav laoseis taastatakse, müügiga teenitud püsikliendipunktid võetakse tagasi ja kasutatud punktid tagastatakse. Anuleeritud müügid jäävad nimekirja selgelt märgitult ning neid aruannete müügitulus ei arvestata."
      },
      {
        "type": "note",
        "text": "Anuleerimine tähendab „seda müüki ei toimunud“ – kasuta seda kohapeal valesti sisestatud müügi puhul. Kui klient toob kauba hiljem tagasi, kasuta hoopis tagastust: algne müük jääb alles, tagastada saab ka ainult osa tooteid ning müügitulu väheneb tagastuse päeval."
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
    "question": "Kuidas tagastust või vahetust vormistada?",
    "keywords": [
      "tagastus",
      "vahetus",
      "raha tagasi",
      "osaline tagastus",
      "suuruse vahetus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava Müügid, ava algne müük ja puuduta Alusta tagastust. Vali, mitu tükki igast tootest tagasi tuleb. Vahetuse korral puuduta samal ekraanil Lisa asendustoode; vahe tasutakse ühe korraga – positiivne summa tähendab, et klient maksab juurde, negatiivne, et sina maksad raha tagasi, ja null, et raha ei liigu."
      },
      {
        "type": "list",
        "items": [
          "Algset müüki ei muudeta kunagi. Tagastus loob oma dokumendi tänase kuupäevaga ja numbriga, mille ees on R, ning müügitulu väheneb tagastuse päeval.",
          "Tagasi makstakse see, mida klient selle toote eest tegelikult maksis – tootesoodustused, ostukorvi soodustused ja punktide kasutamine on juba osade vahel jaotatud, seega ei tagastata hinnakirjahinda. Maks arvestatakse sama määraga, millega algne müük maksustati.",
          "Asendustooted müüakse tänase hinnaga, ilma kampaaniate ja soodustusteta.",
          "Jälgitav laoseis taastatakse automaatselt. Algse müügiga teenitud punktid võetakse tagasi, kasutatud punktid tagastatakse ning asendustooted teenivad oma punktid.",
          "Müüki võib tagastada mitmes osas, kuid mitte rohkem, kui algselt müüdi. Kampaania kasutuspiiranguid tagastus tagasi ei anna."
        ]
      },
      {
        "type": "note",
        "text": "Tagastusel ei ole tähtaega, kuid algne müük on vajalik. Kui tagastus sai ekslikult sisestatud, anuleeri see ja tagastatav kogus taastub."
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
    "question": "Kuidas võtta ettetellimus käsirahaga?",
    "keywords": [
      "ettetellimus",
      "käsiraha",
      "kättesaamine",
      "jääk",
      "reserveerimine",
      "ettetellimine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vaheta kassas ekraani ülaosas Müük peale Ettetellimus, vali kättesaamise kuupäev, sisesta käsiraha (0-st kogusummani, kiirvalikud 30% / 50% / täis) ja vali, kuidas käsiraha tasutakse. Lisa klient, et saaksid temaga kaupade saabumisel ühendust võtta."
      },
      {
        "type": "list",
        "items": [
          "Laoseis arvatakse maha ettetellimuse tegemisel, nii on kaup kliendile reserveeritud. Laost otsas olevad tooted lähevad miinusesse ja taastuvad ostutellimuse kättesaamisel.",
          "Kui klient tuleb järele, puuduta müügi detailvaates Anna üle, et jääk kätte saada. Seejärel muutub müük tavaliseks lõpetatud müügiks ja hilisemad tagastused käivad tavapärase tagastuse kaudu.",
          "Kui klient ei tule, puuduta müügi detailvaates Loobu ettetellimusest ning vali, kas tagastada käsiraha või see alles jätta. Laoseis lisatakse tagasi.",
          "Käsiraha kviitungil ja lõplikul kättesaamise kviitungil on sama number."
        ]
      },
      {
        "type": "p",
        "text": "Jaotises Aruanded arvestatakse ettetellimuse müügitulu täielikult kättesaamise päeval, käsiraha aga loetakse laekunud rahasse selle tasumise päeval – seega on need kaks arvu mõnda aega erinevad. Vaata „Mis vahe on müügitulul ja laekunud rahal?“"
      },
      {
        "type": "note",
        "text": "Ettetellimuse tooteid ei saa muuta; kui klient mõtleb ümber, loobu ja tee uus ettetellimus. Ettetellimuste loomiseks on vaja paketti Standard või kõrgemat. Pärast madalamasse paketti üleminekut saab olemasolevaid ettetellimusi endiselt kätte anda või neist loobuda."
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
    "question": "Kas püsikliendid saavad osta arvele ja maksta hiljem?",
    "keywords": [
      "müük arvele",
      "arvele ostmine",
      "krediit",
      "hiljem maksmine",
      "nõuded",
      "tasumine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Vali kassas klient ja vali makseviisiks Müük arvele. Võlal peab olema omanik, seega ei ole Müük arvele ilma kliendita saadaval."
      },
      {
        "type": "p",
        "text": "Tasumise vastuvõtmiseks vaheta Müügid ülaosas vaade Nõuded peale. Võlad on grupeeritud klientide kaupa; ava üks, et tasuda üksik müük, terve kuu või kõik korraga – iga kord küsib DingPOS, kuidas raha tasuti. Üksiku müügi saab tasuda ka selle detailvaatest ning ekslikult sisestatud tasumise saab tagasi võtta nupuga Tühista tasumine."
      },
      {
        "type": "list",
        "items": [
          "Müügitulu loetakse päeval, mil kaup läheb üle; laekunud raha ja püsikliendipunktid ootavad tasumise päevani.",
          "Tasumata müükidel on nimekirjas merevaigukarva märk ning kliendi detailvaates on näha, kui palju ta praegu võlgneb.",
          "Tasumata müükidega klienti ei saa kustutada."
        ]
      },
      {
        "type": "note",
        "text": "Müükide arvele tegemiseks on vaja paketti Standard või kõrgemat. Pärast madalamasse paketti üleminekut ei saa uusi alustada, kuid olemasolevaid nõudeid saab endiselt vaadata ja tasuda."
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
    "question": "Kas müükidele, klientidele ja ostutellimustele saab märkusi lisada?",
    "keywords": [
      "märkus",
      "märkused",
      "memo",
      "kommentaar",
      "lisamärkus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Müügi, kliendi ja ostutellimuse detailvaates on igaühel märkuste kaart – puuduta seda, et muuta, kuni 500 tähemärki. Märkuse saab kirjutada ka kliendi või ostutellimuse loomise vormis."
      },
      {
        "type": "p",
        "text": "Märkused ei sõltu olekust: märkusi saab lisada ja muuta nii lõpetatud kui ka anuleeritud müükidele ning tagastustele. Müügi summad ja tooted fikseeritakse kassas; märkus on dokumendi kõrval ega muuda kunagi selle sisu."
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
    "question": "Kuidas lisada toode variantidega (suurus, värv)?",
    "keywords": [
      "variandid",
      "suurus",
      "värv",
      "valikud",
      "toote valikud",
      "mõõt"
    ],
    "content": [
      {
        "type": "p",
        "text": "Toote muutmise lehel puuduta jaotises Variandi valikud nuppu Lisa valik, et lisada valik (nt „Värv“), ning seejärel nuppu „+ Väärtus“, et lisada selle valikud (nt punane, sinine). Kui valikuid on kaks või rohkem (nt värv × suurus), loob DingPOS kõik kombinatsioonid sinu eest (punane/S, punane/M, sinine/S…)."
      },
      {
        "type": "p",
        "text": "Igal kombinatsioonil on oma hind ja omahind ning oma laoseis. Kassas kuvatakse toodet puudutades enne ostukorvi lisamist variandi valik."
      },
      {
        "type": "note",
        "text": "Valiku ja väärtuse nimi võib olla kuni 20 märki pikk."
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
    "question": "Kuidas triipkoodid DingPOS-is töötavad?",
    "keywords": [
      "triipkood",
      "skaneerimine",
      "skänner",
      "dubleeriv triipkood",
      "kaamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Toote triipkoodi saab sisestada käsitsi või skaneerida kaameraga. Triipkood peab olema unikaalne – kui salvestamisel on triipkood mõne teise tootega samane, näitab DingPOS, millisele tootele see kuulub."
      },
      {
        "type": "p",
        "text": "Kassas otsib otsinguväli nii toodete nimede kui ka triipkoodide algusosade järgi – sisesta triipkood ja toode ilmub kohe. Füüsiliste triipkoodiskännerite plaanide kohta vaata küsimust „Will physical barcode scanners be supported?“."
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
    "question": "Kuidas muuta toodete järjestust?",
    "keywords": [
      "sortimine",
      "järjestus",
      "järjekord",
      "ümberjärjestamine",
      "lohistamine",
      "tõsta algusesse"
    ],
    "content": [
      {
        "type": "p",
        "text": "Puuduta jaotises Tooted nuppu Muuda järjestust ja lohista tootekaardid soovitud kohale. Kassa ja tootehaldus kasutavad sama järjestust, nii et ühekordne korrastamine uuendab mõlemat."
      },
      {
        "type": "list",
        "items": [
          "Suure tootevaliku korral pakub iga kaardi menüü valikuid Tõsta algusesse, Tõsta lõppu ja Tõsta kohale ning iga kaart näitab oma praegust kohta.",
          "Filtreeri enne kategooria järgi, et järjestada ümber ainult selle kategooria tooteid – teiste kategooriate tooted jäävad paigale.",
          "Uued tooted lähevad algusesse; toote andmete muutmine ei muuda kunagi selle kohta."
        ]
      },
      {
        "type": "p",
        "text": "Kui soovid mõneks ajaks sortida nime, hinna või loomise/uuendamise aja järgi, kasuta menüüd Sortimisalus. Sinu käsitsi järjestus säilib ja valik Käsitsi järjestus toob selle tagasi."
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
    "question": "Kuidas laoseisu jälgida?",
    "keywords": [
      "ladu",
      "laoseis",
      "laojääk",
      "jälgimine",
      "inventuur",
      "väike laoseis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Laoseisu jälgimine on toote enda lüliti – lülita see sisse toote muutmise lehel jaotises Ladu ja sisesta praegune kogus. Toote iga variant jälgib oma laoseisu."
      },
      {
        "type": "p",
        "text": "Pärast sisselülitamist vähendavad müügid ja ettetellimused laoseisu automaatselt; anuleerimised, tagastused ja tühistatud ettetellimused panevad selle tagasi; ostutellimuse vastuvõtmine suurendab seda; ja käsitsi saad seda alati korrigeerida. Iga liikumine kantakse täielikku logisse. Väike laoseis tõstetakse esile värvilise hoiatusega."
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
    "question": "Miks võib laoseis minna miinusesse?",
    "keywords": [
      "negatiivne laoseis",
      "miinuslaoseis",
      "laoseis",
      "otsas",
      "müügi blokeerimine",
      "korrigeerimine"
    ],
    "content": [
      {
        "type": "p",
        "text": "See on teadlik valik: kassat ei blokeeri kunagi ebapiisav laoseis. Töötava kassa esimene reegel on, et klient ei pea kunagi ootama – vale number paberil on hiljem parandatav, aga katkenud müük on jäädavalt kadunud."
      },
      {
        "type": "p",
        "text": "Negatiivne laoseis tähendab tavaliselt, et täiendus jäi kirja panemata või ettetellitud toode pole veel saabunud (ettetellimus vähendab laoseisu tellimise hetkel). Kanna täiendused sisse ostutellimuse vastuvõtmisega ja number taastub ise; inventuuri erinevused paranda käsitsi korrigeerimisega, mis jääb liikumiste logisse."
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
    "question": "Kuidas sisestada oste ja tarnijaid?",
    "keywords": [
      "ostutellimus",
      "ostmine",
      "tarnija",
      "vastuvõtmine",
      "täiendamine",
      "maksmata arved"
    ],
    "content": [
      {
        "type": "p",
        "text": "Külgribal olev Ostmine haldab tarnijaid ja ostutellimusi. Tarnija juures on nimi, kontaktisik, telefon, aadress ja vaikimisi maksetingimus (tasu kohe või kord kuus)."
      },
      {
        "type": "steps",
        "items": [
          "Puuduta Uus ost, vali tarnija ning lisa tooted, kogused ja ühikuomahinnad (eeltäidetud iga toote praeguse omahinnaga). Lisada saab ka saatmistasu. Kui tarnijat pole veel loodud, puuduta tarnijate loendi vasakus ülanurgas Lisa tarnija – uus tarnija jõuab otse tagasi ostutellimusse.",
          "Mustand ei mõjuta kunagi laoseisu ega tasumata arveid – seda saab vabalt muuta või kustutada.",
          "Kui kaup saabub, puuduta Võta kaup vastu: jälgitav laoseis suureneb ning ostutellimus saab numbri ja lukustub. Vaikimisi uuendab vastuvõtt ka iga toote omahinna selle ühikuomahinnaga; omahindade muutmata jätmiseks lülita ostutellimusel välja Sünkrooni toote omahind."
        ]
      },
      {
        "type": "p",
        "text": "Maksetingimus määrab, mis edasi saab: kohe tasutavad tellimused märgitakse tasutuks, kord kuus tasutavad jäävad aga jaotisse Tasumata arved, kus saad need tarnija kaupa tasuda – üks tellimus, selle kuu või kõik korraga."
      },
      {
        "type": "note",
        "text": "Ostmine nõuab Standard või kõrgemat paketti. Tarnijat, kellel on tasumata vastuvõetud tellimusi, ei saa kustutada."
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
    "question": "Mis vahe on müügitulul ja laekunud rahal?",
    "keywords": [
      "müügitulu",
      "laekunud raha",
      "sissetulek",
      "kassa kontrollimine",
      "käsiraha",
      "müük arvele"
    ],
    "content": [
      {
        "type": "p",
        "text": "Müügitulu arvestatakse päeval, mil kaup üle anti; laekunud raha päeval, mil raha laekus. Letis makstud müügi puhul juhtub mõlemad samal päeval ja numbrid on samad. Need lähevad lahku, kui:"
      },
      {
        "type": "list",
        "items": [
          "Müük arvele: kaup läheb täna ja kuulub tänasesse müügitulusse; raha kuulub laekunud raha hulka tasumise päeval.",
          "Ettetellimus: käsiraha läheb laekunud raha hulka makse päeval; müügitulu arvestatakse tervikuna kättesaamise päeval.",
          "Kinnipeetud käsiraha: kui klient ettetellimusest loobub ja jätad käsiraha endale, oli see makse hetkel juba laekunud raha hulgas. Aruanded näitab seda eraldi kinnipeetud käsirahana ja see ei lähe kunagi müügitulu hulka."
        ]
      },
      {
        "type": "p",
        "text": "Kassa kontrollimiseks võrdle laekunud raha sahtli ja kaardimakseterminaliga; et näha, kui palju perioodi jooksul tegelikult müüsid, vaata müügitulu. Tagastused vähendavad müügitulu tagastuse päeval."
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
    "question": "Milliseid perioode saab aruannetes vaadata?",
    "keywords": [
      "aruanded",
      "periood",
      "see nädal",
      "see kuu",
      "see aasta",
      "oma vahemik",
      "kuupäev",
      "toodete edetabel"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vali Aruanded vahekaardi ülaosas Täna, Eile, See nädal, See kuu, See aasta või Kogu aeg või kasuta valikut Oma vahemik, et määrata algus- ja lõppkuupäev. See nädal järgib seadme nädala esimest päeva; See kuu ja See aasta algavad vastavalt 1. kuupäeval ja 1. jaanuaril. Iga valik näitab kuupäevi, mida see hõlmab, ja Kogu aeg algab poe esimesest müügist."
      },
      {
        "type": "p",
        "text": "Ühe päeva puhul muutub trendigraafik tunnipõhiseks tulpdiagrammiks; pikemate perioodide puhul on ühe tulba pikkus pikkusest olenevalt päev, nädal, kuu või aasta."
      },
      {
        "type": "p",
        "text": "Kaart Toodete edetabel näitab top 5. Puuduta kaarti või valikut Kuva kõik, et näha kõiki perioodil müüdud tooteid, järjestatud kogusega pärast tagastusi."
      },
      {
        "type": "p",
        "text": "Pro paketis võrdleb perioodiriba paremal küljel olev müügivõrdlus perioodi eelmise perioodi või eelmise aasta sama perioodiga — vaata „Mida näitavad Pro täiustatud aruanded?“"
      },
      {
        "type": "note",
        "text": "Need kalendriperioodid lisandusid versioonis v2.4; varasemad versioonid pakkusid libisevaid vahemikke (Täna / 7 päeva / 30 päeva / Kogu aeg). Kui näed neid endiselt, uuenda DingPOS App Store'ist."
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
    "question": "Mida näitavad Pro täiustatud aruanded?",
    "keywords": [
      "täiustatud aruanded",
      "pro",
      "müügivõrdlus",
      "eelmine aasta",
      "soojuskaart",
      "tipptunnid",
      "aeglase käibega tooted",
      "laojäägi väärtus",
      "korduvostude määr",
      "punktid"
    ],
    "content": [
      {
        "type": "p",
        "text": "Täiustatud aruanded pole eraldi ekraan — need asuvad otse vahekaardil Aruanded ja järgivad ülaosas valitud perioodi:"
      },
      {
        "type": "list",
        "items": [
          "Müügivõrdlus: perioodiribast paremal saad võrrelda eelmise aasta sama perioodi või eelmise perioodiga (üks päev eelmise nädala sama päevaga, see nädal eelmise nädalaga, see kuu eelmise kuuga, see aasta eelmise aastaga, oma vahemik sama pikkuse varasema vahemikuga). Paneel Laekunud raha näitab vahet ja kasvumäära ning müügitulu graafikule lisandub heledam joon võrdlusperioodi kohta. Kui periood veel kestab, lõigatakse võrdlusperiood samas hetkes.",
          "Nädalapäev × tund: lülita pealkiri Müük ajas valikule Nädalapäev × tund, et näha seitsmepäevast 24-tunnist soojuskaarti — mida tumedam lahter, seda rohkem müüsid. Lülitu müügitulu ja müükide vahel; kui võrdlus on sees, näed, millised tunnid kasvasid ja millised kahanesid.",
          "Aeglase käibega tooted: lülita edetabelikaardi pealkiri valikule Aeglase käibega tooted, et näha tooteid vähimast müügist suurimani koos praeguse laoseisu ja viimase müügikuupäevaga. Tooted, mida pole kunagi müüdud, on märgitud „Pole müüdud“. Vaikimisi näidatakse ainult laos olevaid tooteid.",
          "Korduvostude määr: kliendipaneeli viimane rida näitab liikmete osakaalu, kes ostsid perioodis ja on kokku ostnud kaks või enam korda.",
          "Praegu: laojäägi väärtus (praegune laoseis × praegune omahind), kõik laoliikumised valitud perioodil ning punktid, mis kliendid hoiavad, kuid pole kasutanud, koos suurima summaga, mida nad saavad maha arvata. Need on praegused jäägid; periood neid ei muuda."
        ]
      },
      {
        "type": "p",
        "text": "Ilma Pro paketita on igal neist viiest kohast väike lukk, mis avab uuendamise selgituse; kõik muu Aruanded vahekaardil töötab nagu varem. Aruanded loevad andmeid, mida su pood juba hoiab, nii et Pro lõppedes peidetakse ainult aruanded — andmeid ei kao."
      },
      {
        "type": "note",
        "text": "Töötajad näevad täiustatud aruandeid õiguse Ülevaatepaneel alusel; laojäägi väärtuse summade nägemiseks on vaja ka õigust Omahind ja kasum."
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
    "question": "Kuidas kasumit arvestatakse, kui ma omahindu ei sisestanud?",
    "keywords": [
      "omahind",
      "kasum",
      "marginaal",
      "aruanded",
      "kasumit ei jälgita"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omahind on valikuline väli. Aruannetes märgitakse tooted ilma omahinnata „kasumit ei jälgita“ ja jäetakse kasumiarvutusest välja — müügitulu arvestatakse endiselt täielikult, vahele jäetakse ainult kasum."
      },
      {
        "type": "p",
        "text": "Täieliku kasumiaruande saamiseks lisa omahinnad toote muutmise lehel; need arvestatakse tulevastes müükides. Kasumit arvutatakse allahindluse järgsest müügitulust."
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
    "question": "Kuidas kampaaniat luua?",
    "keywords": [
      "kampaania",
      "pakkumine",
      "üks tasuta",
      "ostusumma lävi",
      "happy hour",
      "kupong",
      "allahindlus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava Seaded → Kampaaniad. Toetatud on järgmised tüübid:"
      },
      {
        "type": "list",
        "items": [
          "Ostusumma lävi: kui ostad X eest, saad Y allahindlust või Y% allahindlust.",
          "Ostad ühe, saad ühe tasuta ning N-nda toote pakkumised.",
          "Lisapunktide kordajad.",
          "Pakkumised ainult teatud liikmetasemele või sünnikuu puhul.",
          "Osta A, saa B, tasulised lisatooted ja püsihinnaga komplektid."
        ]
      },
      {
        "type": "p",
        "text": "Iga kampaania saab ajastada (Happy Hour'i ajavahemikud, kindlad nädalapäevad, üle südaöö), siduda kindlate toodetega ning seadistada prioriteedi, kombineerimise reeglite ja kasutuspiirangutega. Sobivad kampaaniad rakenduvad kassas automaatselt – allahindluskoode pole vaja."
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
    "question": "Miks kampaania ei rakendu? Mida kontrollida?",
    "keywords": [
      "kampaania",
      "ei tööta",
      "ei rakendu",
      "tõrkeotsing",
      "allahindlus puudub"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kontrolli tavalisemaid põhjuseid selles järjekorras:"
      },
      {
        "type": "steps",
        "items": [
          "Ajakava: kas tänane päev jääb kehtivusperioodi sisse? Kas Happy Hour'i ajavahemik piirab nädalapäeva või kellaaega?",
          "Ulatus: kas ostukorvi tooted kuuluvad kampaania toote- või kategooriapiiridesse? Kas ostusumma lävi on täidetud?",
          "Sihtrühm: kas kampaania on piiratud liikmetaseme või sünnikuuga? Kas liige valiti kassas?",
          "Kasutuspiirangud: kas üldine kasutuslimiit või selle kliendi limiit on täis saanud?",
          "Kombineerimine: kas kõrgema prioriteediga kampaania, millel on seadistus „lõpeta pärast rakendamist“, blokeerib selle?"
        ]
      },
      {
        "type": "p",
        "text": "Kui kõik on korras ja kampaania ikka ei rakendu, saada meile e-kirjaga kuvatõmmis kampaania seadetest ning aitame asja uurida."
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
    "question": "Kuidas püsikliendipunktid töötavad?",
    "keywords": [
      "punktid",
      "püsikliendiprogramm",
      "boonuspunktid",
      "punktide kasutamine",
      "tervitusbonus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava Seaded → Püsikliendiprogramm ja määra kaks reeglit: mitu punkti saab iga kulutatud X kohta ning mitu punkti annab M allahindlust (soovi korral koos ühe müügi kohta kehtiva kasutuslimiidiga). Uutele liikmetele saad automaatselt anda ka tervitusbonuse."
      },
      {
        "type": "p",
        "text": "Vali kassas liige, siis punktid kogunevad automaatselt; punktide kasutamiseks sisesta kasutatavate punktide arv. Müügi anuleerimine võtab sellest teenitud punktid tagasi ja tagastab kasutatud punktid."
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
    "question": "Milleks on liikmetasemed?",
    "keywords": [
      "tase",
      "vip",
      "kuldtase",
      "tõus",
      "liikmetase",
      "püsiklient"
    ],
    "content": [
      {
        "type": "p",
        "text": "Liikmetasemed (nt Tavaline, Hõbe, Kuld) täidavad kahte eesmärki: kampaaniaid saab suunata kindlale tasemele (nt 10% allahindlus ainult kuldtasemele) ja kassas näed kliendi staatust ühe pilguga."
      },
      {
        "type": "p",
        "text": "Tasemed võivad tõusta automaatselt sinu määratud reeglite alusel (nt kogukulutus) või võid need määrata käsitsi. Kui anuleeritud müük oli taseme tõstnud, võetakse tase automaatselt tagasi."
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
    "question": "Kuidas oma andmeid varundada?",
    "keywords": [
      "varundus",
      "varukoopia",
      "icloud",
      "google drive",
      "dropbox",
      "pilv",
      "pilvevarundus",
      "pilvekoopia"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava Seaded → Pilvevarundus, vali iCloud, Google Drive või Dropbox ja anna luba. Pärast seda saad varunduse igal ajal käsitsi käivitada. iCloudi puhul peab iPadis olema sisse logitud iCloudi, iCloud Drive peab olema sisse lülitatud ja DingPOS-ile peab olema antud luba seda kasutada."
      },
      {
        "type": "p",
        "text": "Varukoopiad salvestatakse sinu enda pilvekontole. Igas pilves säilib ainult uusim koopia – üks andmete pilvekoopia ja üks toodete fotode fail – ning iga uus varundus kirjutab eelmise üle."
      },
      {
        "type": "note",
        "text": "Kuna uus varukoopia asendab vana, siis kui kahtlustad, et andmed on juba valeks läinud (näiteks kustutati kogemata hulk tooteid), ära veel varunda – kirjuta meile ja leiame koos edasise lahenduse."
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
    "question": "iCloudi varundus näitab „Ühendamata“ – mida teha?",
    "keywords": [
      "icloud",
      "ühendamata",
      "icloud drive",
      "varundus ebaõnnestus",
      "ei saa ühendust",
      "icloud ei ühendu"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS näitab iCloudi ühendatuna ainult siis, kui seda tõesti saab kasutada. Kui seal on „Ühendamata“, kontrolli iPadi Seadete rakenduses kolme asja:"
      },
      {
        "type": "steps",
        "items": [
          "Oled oma Apple’i kontosse sisse logitud.",
          "iCloud Drive on sisse lülitatud.",
          "DingPOS-il on luba iCloud Drive’i kasutada."
        ]
      },
      {
        "type": "p",
        "text": "Kui kõik kolm on sees, ava DingPOS-is uuesti Pilvevarundus ja iCloud on ühendatud. Varukoopiad salvestatakse iCloud Drive’is DingPOS-i enda kausta."
      },
      {
        "type": "note",
        "text": "Enne versiooni v3.0 iCloudi varundus ei töötanud ja ebaõnnestus iga kord veaga „Backup.SyncError error 0“. Värskenda kõigepealt DingPOS-i App Store’is."
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
    "question": "Kuidas andmed uude iPadi üle tuua?",
    "keywords": [
      "üleviimine",
      "uus ipad",
      "taastamine",
      "andmete ülekanne",
      "ipadi vahetus",
      "andmete teisaldamine"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Vana iPad: ava Seaded → Pilvevarundus ja tee käsitsi varundus. Kontrolli, et varunduse aeg on uuenenud.",
          "Uus iPad: paigalda DingPOS ja käi seadistusviisard läbi.",
          "Uus iPad: ava Seaded → Pilvevarundus, ühenda sama pilvekonto ja taasta."
        ]
      },
      {
        "type": "p",
        "text": "Taasta vajutamisel avaneb kõigepealt eelvaade: selle iPadi ja pilvekoopia toodete, müükide ja klientide arvud kõrvuti ning kõik müügid, mille taastamine eemaldaks. Selle iPadi andmed ei muutu enne, kui Kinnita. DingPOS-i uuema versiooniga tehtud pilvekoopia puhul palutakse enne rakendus värskendada. Ka toodete fotod taastatakse."
      },
      {
        "type": "note",
        "text": "Taastamine asendab kõik selle iPadi andmed varukoopiaga – pärast seda varukoopiat selles iPadis tehtud müügid kaovad. Veendu, et oled ühendatud õige pilvekontoga; kui taastasid vale koopia, kasuta valikut Taastamise tagasivõtmine."
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
    "question": "Kas andmed säilivad, kui rakenduse kustutan?",
    "keywords": [
      "kustutamine",
      "desinstallimine",
      "andmete kadu",
      "rakenduse eemaldamine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ei. DingPOS hoiab kõike kohalikult sinu seadmes – rakenduse kustutamisega kustuvad jäädavalt kõik tooted, müügid, liikmed ja seaded, kui sa pole pilvevarundust sisse lülitanud."
      },
      {
        "type": "note",
        "text": "Enne rakenduse kustutamist tee alati käsitsi varundus ja veendu, et see õnnestus. Pärast uuesti paigaldamist taasta andmed pilvest."
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
    "question": "Rakendus näitab teadet „Poeandmeid ei saanud avada“ – mida teha?",
    "keywords": [
      "ei saanud avada",
      "ei avane",
      "jookseb kokku",
      "jookseb käivitamisel kokku",
      "andmebaas",
      "poeandmed"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ära rakendust kustuta. See ekraan tähendab, et DingPOS ei suutnud sinu poeandmeid lugeda, kuid andmed on selles iPadis alles – rakenduse kustutamisega kustuksid need koos rakendusega."
      },
      {
        "type": "p",
        "text": "Vajuta kõigepealt Proovi uuesti; kui see aitab, avaneb rakendus tavapäraselt. Kui probleem kordub, vajuta Võta ühendust toega ja anna meile teada – aitame andmed taastada. See ekraan ei teisalda ega kustuta ühtegi faili."
      },
      {
        "type": "note",
        "text": "Kõige sagedasem põhjus on rakenduse sulgemine taastamise ajal. Enne v3.0 jooksis rakendus seetõttu igal käivitamisel kokku; alates v3.0-st peatub see selle ekraani juures."
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
    "question": "Kas saan kasutada kahte iPadi koos?",
    "keywords": [
      "kaks ipadi",
      "mitu seadet",
      "sünkroonimine",
      "jagamine",
      "teine kassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Iga iPadi andmed on praegu sõltumatud – ühe andmestiku reaalajas jagamist kahe seadme vahel veel ei toetata."
      },
      {
        "type": "p",
        "text": "Andmeid saad ühest iPadist teise kopeerida pilvevarunduse kaudu (varunda → taasta), mis sobib hästi seadme vahetamiseks või teise iPadi algandmeteks. Igas seadmes eraldi tehtud müügid ei ühine aga automaatselt. Mitme seadme sünkroonimine on meie arenduskavas."
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
    "question": "Kas saan tooteid ja müüke importida teisest kassasüsteemist või tabelist?",
    "keywords": [
      "import",
      "csv",
      "excel",
      "tabel",
      "andmete teisaldamine",
      "kassasüsteemi vahetus",
      "hulgi",
      "müügiajalugu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Ava Seaded → Andmete import, vali, kas impordid tooteid või müüke, ja vali CSV-fail (Excel ja Google Sheets oskavad mõlemad CSV-vormingus salvestada)."
      },
      {
        "type": "steps",
        "items": [
          "Fail avaneb tabelina. Levinud veerunimed inglise ja hiina keeles seotakse automaatselt; seotuse muutmiseks puuduta veeru päist.",
          "Väärtuse parandamiseks puuduta lahtrit ja muuda seda otse – faili pole vaja redigeerida ja otsast alustada.",
          "Kontrollimiseks puuduta Kinnita. Probleemidega read märgitakse punasega koos põhjusega; müükide impordil saab vigadega müügid vahele jätta.",
          "Lahenda kõik, mis vajab otsust (korduvad toodete nimed, rida, mis sobib mitme kliendiga), vaata kokkuvõte üle ja puuduta Alusta importi."
        ]
      },
      {
        "type": "list",
        "items": [
          "Imporditud müügid paigutatakse tehingu kuupäeva järgi ja arvutatakse uuesti sinu poe valuuta ja maksurežiimiga. Need ei mõjuta laoseisu ega anna tervituspunkte.",
          "Kliendid seotakse olemasolevatega telefoni või e-posti järgi; sobimatud luuakse uuena.",
          "Imporditud müükidel on kuvatud kuupäev „Imporditud“ ja lähtesüsteemi müügi number ning neid ei saa anuleerida ega tagastada.",
          "Vigadega read saab eksportida põhjustega märgitud CSV-failina – paranda need ja impordi uuesti. Korduvad read jäetakse automaatselt vahele."
        ]
      },
      {
        "type": "note",
        "text": "Andmete import on beetaversioonis. Üks fail võib sisaldada kuni 50 000 rida või 20 MB. Tee enne importi pilvevarundus; kui midagi ei õnnestu importida või tulemus tundub vale, anna meile teada impordiekraani valikuga Teata probleemist."
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
    "question": "Taastasin vale varukoopia – kas saan selle tagasi võtta?",
    "keywords": [
      "taastamise tagasivõtmine",
      "taastamine",
      "vale pilvekoopia",
      "taastamise kirjed",
      "kadunud andmed",
      "tagasi võtta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Iga pilvest taastamine säilitab asendatud andmed enne taastamist tehtud koopiana. Kaardil Seaded → Pilvevarundus on näha, millal viimane taastamine toimus ja kust see pärines. Puuduta Taastamise tagasivõtmine, vaata eelvaade üle ja Kinnita – andmed lähevad tagasi sellisele kujule, nagu need enne taastamist olid, ja rakendus laadib uuesti."
      },
      {
        "type": "list",
        "items": [
          "Taastamise tagasivõtmine on ise taastamine ja säilitab asendatavatest andmetest veel ühe koopia, nii et uuesti puudutades lähed tagasi.",
          "Säilib ainult viimane koopia; järgmine taastamine asendab selle.",
          "Tagasi tulevad ainult andmed: pärast pilvekoopiat lisatud toodetel puudub pilt."
        ]
      },
      {
        "type": "p",
        "text": "Et näha, kes millal ja millisest pilvekoopiast taastas, puuduta samal ekraanil Vaata taastamise kirjeid: iga taastamise aeg, operaator, allikas, toodete / müükide / klientide arvud enne ja pärast ning kõik müügid, mille see eemaldas. Kirjed asuvad selles iPadis ja taastamine neid kunagi ei asenda."
      },
      {
        "type": "note",
        "text": "Taastamise eelvaade ja Taastamise tagasivõtmine töötavad igas paketis; taastamise kirjete vaatamine on Pro funktsioon. Kirjeid salvestatakse ka ilma Proota (lihtsalt ilma operaatorita), nii et hiljem Prosse tellides näed neid kõiki."
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
    "question": "Kuidas lisada töötajaid ja vahetada kassas olijat?",
    "keywords": [
      "töötaja",
      "töötajate lisamine",
      "juhataja",
      "konto",
      "PIN-kood",
      "operaator",
      "operaatori vahetamine",
      "vahetus",
      "kassapidaja"
    ],
    "content": [
      {
        "type": "p",
        "text": "Puuduta külgribal valikut Töötajad. Esimesel korral seadista omanik: nimi ja 4-kohaline PIN-kood. Töötajate lisamiseks ja õiguste muutmiseks on vaja seda PIN-koodi, seega jäta see meelde – seda ei saa lähtestada."
      },
      {
        "type": "steps",
        "items": [
          "Lehel Töötajad puuduta Lisa töötaja, sisesta nimi, vali roll (Juhataja või Töötaja) ja määra 4-kohaline PIN-kood.",
          "Praegune operaator on näha külgriba allosas ja kassa paremas ülanurgas. Vahetuse vahetumisel puuduta seda, vali oma nimi ja sisesta oma PIN-kood.",
          "Edaspidi salvestatakse iga müügi, makse ning lao- või punktiliikumise juures, kes seda tegi. See on näha müükide loendis ja müügi üksikasjades; anuleeritud müükide juures on ka anuleerija."
        ]
      },
      {
        "type": "p",
        "text": "Kui keegi lahkub, vali Deaktiveeri see töötaja: tema ajalugu jääb alles ja hiljem saad ta uuesti aktiveerida. Nime muutmine ei mõjuta vanu müüke – need säilitavad tollase nime."
      },
      {
        "type": "note",
        "text": "Töötajad on Pro funktsioon (saadaval ka prooviperioodil). Kui Pro lõpeb, jäävad töötajate andmed ja iga müügi töötleja alles ning uued müügid salvestatakse omaniku nime alla; Pro uuesti tellides on kõik taas olemas."
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
    "question": "Mis saab, kui unustan omaniku PIN-koodi?",
    "keywords": [
      "PIN-kood",
      "unustasin PIN-koodi",
      "parool",
      "lähtestamine",
      "omanik",
      "taastamine",
      "pääsu kadumine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omaniku PIN-koodi ei saa lähtestada ja ka meie tugi ei saa seda lahti lukustada. PIN-kood on salvestatud koos poe andmetega, nii et rakenduse kustutamine, uuesti paigaldamine ja pilvest taastamine toob tagasi sama PIN-koodi."
      },
      {
        "type": "p",
        "text": "Omaniku loomisel ja iga omaniku PIN-koodi muutmisel kuvatakse hoiatus „Jäta see PIN-kood meelde. Kui unustad selle, ei saa seda lähtestada.“ Hoia seda kohas, kuhu pääsed ligi ainult sina."
      },
      {
        "type": "p",
        "text": "Ilma omaniku PIN-koodita jäävad kättesaamatuks kõik toimingud, mis seda nõuavad: töötajate lisamine ja muutmine, rollide õiguste muutmine ning tegevuslogi vaatamine. Töötajad saavad oma PIN-koodidega edasi kassat teenindada ja igapäevatööd teha."
      },
      {
        "type": "note",
        "text": "Kui töötaja unustab oma PIN-koodi, pole hullu: omanik saab selle lehel Töötajad lähtestada."
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
    "question": "Kuidas töötajate õigused ja juhataja heakskiit töötavad?",
    "keywords": [
      "õigused",
      "heakskiit",
      "juhataja",
      "allahindluse ülempiir",
      "töötaja",
      "omahind",
      "roll"
    ],
    "content": [
      {
        "type": "p",
        "text": "Õigusel on kaks väärtust: Lubatud või Vajab heakskiitu – päris keelatud pole midagi. Kui töötaja satub toimingu juurde, mis vajab heakskiitu, valib seda lubatud kolleeg oma nime ja sisestab oma PIN-koodi, et toiming läbi lasta."
      },
      {
        "type": "list",
        "items": [
          "Toimingud (käsitsi laoseisu korrigeerimine, toodete haldus, kassas ülempiirist suurema allahindlusega müük): üks heakskiit katab selle ühe toimingu.",
          "Vaated (omahind ja kasum, Aruanded, Seaded, varundus ja taastamine): heakskiit avab vaate, kuni operaator vahetub või rakendus läheb taustale.",
          "Allahindluse ülempiir kehtib käsitsi allahindlustele ja seda kontrollitakse kassas üks kord; automaatsed kampaaniad ja punktide kasutamine sellesse ei arvestata."
        ]
      },
      {
        "type": "p",
        "text": "Tehaseseaded: Juhatajatel on lubatud kõik peale varunduse ja taastamise ning allahindluse ülempiiri pole; Töötajatel vajab kõik heakskiitu ja ülempiir on 10%. Omanikul on alati kõik lubatud ja seda ei saa muuta. Muutmiseks ava Töötajad → Rollide õigused, puuduta Muuda ja salvesta üks kord – muudatus jõustub kohe kõigile."
      },
      {
        "type": "note",
        "text": "Anuleerimistel, tagastustel, tasumata müükidel ja ostutellimustel ei ole teadlikult õigust; neis salvestatakse ainult töötleja. Hiljem saad neid vaadata tegevuslogist."
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
    "question": "Kuidas näha, kes müügi anuleeris, laoseisu korrigeeris või hinda muutis?",
    "keywords": [
      "tegevuslogi",
      "audit",
      "kes muutis",
      "anuleerimine",
      "hinna muutmine",
      "laoseisu korrigeerimine",
      "kustutatud toode",
      "heakskiidud",
      "logi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kasuta tegevuslogi. Lehel Töötajad puuduta paremas ülanurgas Tegevuslogi ja sisesta omaniku PIN-kood, et näha poe tundlikke toiminguid uuemast vanemani: anuleerimised, tagastused, käsitsi laoseisu korrigeerimised, heakskiidud, töötajate ja õiguste muudatused, omaniku PIN-koodi muutmised, toodete hinna- ja omahinnamuudatused ning toodete kustutamised. Tavalisi kassatehinguid seal ei kuvata."
      },
      {
        "type": "list",
        "items": [
          "Iga kirje näitab, mida see puudutas, kes mida ja millal tegi ning tulemust – näiteks „M hind $390 → $350“.",
          "Filtreeri töötaja (ka deaktiveeritud), toimingu tüübi ning valikute Täna / See nädal / See kuu järgi.",
          "Puuduta kirjet, mis viitab müügile, tootele või kliendile, et avada selle üksikasjad.",
          "Müügi üksikasjadel, toote üksikasjadel ja iga töötaja lehel on oma sisenemiskoht, mis loetleb ainult nendega seotud kirjed.",
          "Kustutatud toodete juures on logis endiselt näha nende nimi ja tollane hind."
        ]
      },
      {
        "type": "note",
        "text": "Salvestamine toimub igas paketis; ainult vaatamine on Pro funktsioon, nii et Pro aegumise ajal tehtud kirjed ilmuvad nähtavale, kui tellid Pro uuesti. Logi liigub kaasa sinu pilvevarukoopiatega."
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
    "question": "Kuidas tasuta prooviperiood töötab?",
    "keywords": [
      "prooviperiood",
      "tasuta",
      "30 päeva",
      "proovi tasuta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alates esmasest installimisest saad 30 päeva kasutada kõiki Pro paketi funktsioone, sealhulgas töötajaid, õigusi, tegevuslogi ja täiustatud aruandeid. Kontot pole vaja luua."
      },
      {
        "type": "p",
        "text": "Mis tahes paketi tellimine prooviperioodi ajal lõpetab prooviperioodi kohe ning edaspidi kehtib sinu ostetud pakett. Pärast prooviperioodi jäävad Pro funktsioonid, näiteks töötajad ja täiustatud aruanded, kättesaadavaks vaid Pro tellimusega."
      },
      {
        "type": "p",
        "text": "Kõik, mille prooviperioodil lood (tooted, müügid, liikmed), säilib täielikult. Sinu andmeid ei kustutata kunagi, olenemata sellest, kas tellid hiljem paketi või mitte."
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
    "question": "Kas mu andmed kaovad, kui prooviperiood lõpeb?",
    "keywords": [
      "aegub",
      "prooviperioodi lõpp",
      "lukus",
      "andmed",
      "kassa lukustub"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ei, sinu andmed jäävad igaveseks sinu seadmesse. Kui prooviperiood lõpeb, lukustub kassa, kuid müüke saad endiselt vaadata, aruandeid avada ja tooteid hallata."
      },
      {
        "type": "p",
        "text": "Telli pakett millal tahes ning kassa avaneb kohe, kõik andmed täpselt sellisena, nagu need jätsid."
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
    "question": "Mis vahe on Lite, Standard ja Pro paketil?",
    "keywords": [
      "paketid",
      "lite",
      "standard",
      "pro",
      "erinevus",
      "võrdlus",
      "uuendamine",
      "madalamale paketile üleminek",
      "hinnad"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kõik kolm paketti sisaldavad täisfunktsionaalset kassat, tooteid, müüke (koos anuleerimiste, tagastuste ja vahetustega), aruandeid ja pilvevarundust. Need erinevad poe juhtimise tööriistade poolest:"
      },
      {
        "type": "list",
        "items": [
          "Lite: ühele inimesele, kes peab turulettu ning vajab kassat ja tooteid.",
          "Standard: lisab kampaaniad, püsikliendipunktid ja tasemed, laoseisu jälgimise, ostutellimused, müügi arvele ja ettetellimused.",
          "Pro: lisab töötajad ja õigused, heakskiidu, tegevuslogi, taastamise kirjed ja täiustatud aruanded – töötajatega poodidele."
        ]
      },
      {
        "type": "p",
        "text": "Oled juba Standard paketis? Uuenda Pro paketile tellimuse lehel: arveldustsükkel jääb samaks, uuendus jõustub kohe ja vahe arvutab proportsionaalselt Apple. Üleminek Pro paketilt tagasi Standardile jõustub pikendamise hetkel. Hinnad on rakenduses nähtaval ning pakette saad võrrelda meie lehel Hinnad."
      },
      {
        "type": "note",
        "text": "Madalamale paketile üleminek ei kustuta kunagi andmeid. Paketist väljaspool olevad funktsioonid peatuvad, andmed jäävad alles ning uuesti tellimisel tulevad funktsioonid tagasi."
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
    "question": "Kuidas tellida, tellimust tühistada või ostu taastada?",
    "keywords": [
      "telli",
      "tühista tellimus",
      "taasta ost",
      "hind",
      "arveldus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tellimusi haldab App Store'i rakendusesisene ost – paketid ja hinnad on näha rakenduses. Makse töötleb Apple; meie sinu makseandmeid kunagi ei näe."
      },
      {
        "type": "list",
        "items": [
          "Tühistamine: halda seda seadme rakenduses Seaded → Apple'i konto → Tellimused. Tühista vähemalt 24 tundi enne praeguse perioodi lõppu, et tellimus ei pikeneks.",
          "Taastamine: pärast seadme vahetamist või uuesti installimist puuduta DingPOS-i tellimuse lehel „Taasta ost“.",
          "Paketi vahetamine: vali uus pakett DingPOS-i tellimuse lehel. Uuendused (Standard paketilt Pro paketile, kuumaksult aastamaksele) jõustuvad kohe ja vahe arvutab proportsionaalselt Apple; madalamale paketile üleminek jõustub pikendamise hetkel."
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
    "question": "Kuidas seadistada allahindlust, mis kehtib teatud ostusumma korral?",
    "keywords": [
      "ostusumma lävi",
      "summapõhine allahindlus",
      "allahindlus summa eest",
      "seadistusjuhend",
      "kampaania seadistamine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avage Seaded → Kampaaniad → Uus kampaania, valige ostusumma läviga kampaania liik ja seejärel:"
      },
      {
        "type": "steps",
        "items": [
          "Määrake läviväärtus ja allahindlus (kindel summa või protsent).",
          "Valige kehtivusala: kindlad tooted, kindlad kategooriad või jätke tühjaks, et kampaania kehtiks kogu poes.",
          "Määrake ajakava: algus on kohustuslik; jätke lõpp tühjaks, kui kampaania kestab kuni tühistamiseni.",
          "Salvestage – kampaania aktiveerub ajakava järgi ja rakendub kassas automaatselt, koode pole vaja."
        ]
      },
      {
        "type": "note",
        "text": "Läve kontrollitakse kampaania alla kuuluvate toodete vahesumma, mitte kogu ostukorvi põhjal. Kampaania „osta jookidele 1000 €“ arvestab läve täitmisel ainult jooke ning tooteid, mis on märgitud „kampaaniatest välja jäetud“, ei arvestata kunagi."
      },
      {
        "type": "p",
        "text": "Üks asi, mille kohta sageli küsitakse: kui kõrgema prioriteediga kampaania rakendub esimesena, kontrollitakse lävi juba allahinnatud summa põhjal – ostukorv, mis paistab läve ületavat, võib sellest veidi puudu jääda. Et lävi hinnataks esimesena, andke sellele väiksem prioriteedinumber."
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
    "question": "Kuidas seadistada „osta üks, saa teine“ ja „n-s toode“ pakkumisi?",
    "keywords": [
      "osta üks saa teine",
      "bogo",
      "3. toode tasuta",
      "n-s toode",
      "seadistusjuhend"
    ],
    "content": [
      {
        "type": "p",
        "text": "Looge kampaania liigiga „osta X / saa Y“: määrake, mitu toodet tuleb osta, mitu saada ja allahindluse protsent (100% = tasuta). Piirake kampaania kindlate toodete või terve kategooriaga – sama kategooria erinevad tooted moodustavad ühe grupi."
      },
      {
        "type": "list",
        "items": [
          "Allahinnatud on grupi odavaim toode, mille väärtuseks võetakse selle hetkel kehtiv hind – kui varasem kampaania on seda juba alandanud, arvutatakse „osta X / saa Y“ allahindlus allahinnatud hinnast, mitte kataloogihinnast.",
          "Kui soovite, et märgis „3. toode tasuta“ näitaks täit kataloogihinda, andke sellele kampaaniale väikseim prioriteedinumber, et see arvutataks esimesena. Kui kogu ostukorvi allahindlus käivitub enne, on tasuta toote kuvatav mahaarvamine kataloogihinnast väiksem – see on arvutusjärjekorra omadus, mida oleme põhjalikult kontrollinud, mitte viga. Mõlemal järjekorral on lõppsumma peaaegu sama; muutub vaid see, kus allahindlus nähtavalt asub."
        ]
      },
      {
        "type": "p",
        "text": "Näpunäide: pange oma peamine pakkumine prioriteedis esimeseks, et tšeki allahindluste jaotus vastaks teie turundussõnumile."
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
    "question": "Kuidas seadistada topeltpunktide ja punktide kordajaga kampaaniaid?",
    "keywords": [
      "punktide kordaja",
      "topeltpunktid",
      "lisapunktid",
      "seadistusjuhend"
    ],
    "content": [
      {
        "type": "p",
        "text": "Looge kampaania liigiga „Punktide kordaja“ ja määrake kordaja (täisarv, vähemalt 2). Soovi korral lisage ostusumma lävi (nt 50 € eest → topeltpunktid) ja ajakava (nt ainult laupäeviti)."
      },
      {
        "type": "list",
        "items": [
          "Kui korraga sobib mitu kordajat, rakendub ainult suurim – need ei korrutu ega liitu.",
          "Ostusumma lävi kontrollitakse pärast punktide kasutamist: kui punktide kasutamine viib kogusumma läve alla, kordaja seekord ei rakendu.",
          "Punktide kogumiseks peab kassas olema valitud liige – ilma liikmeta tellimused punkte ei anna, seega pole kordajal mida korrutada."
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
    "question": "Kuidas seadistada liikmetaseme ja sünnipäeva pakkumisi?",
    "keywords": [
      "liikmetase",
      "sünnipäevapakkumine",
      "sünnikuu allahindlus",
      "vip",
      "seadistusjuhend"
    ],
    "content": [
      {
        "type": "p",
        "text": "Looge esmalt tasemed jaotises Seaded › Liikmetasemed (nt Kuld) ja suunake kampaania seejärel sellele tasemele. Sünnipäevapakkumise puhul valige tingimuseks „Sünnikuu“."
      },
      {
        "type": "list",
        "items": [
          "Pakkumise käivitumiseks peab kassas olema valitud liige – sobivust hinnatakse hetkel valitud liikme järgi.",
          "Sünnipäeva sobivus põhineb liikme sünnikuul, seega täitke sünnipäeva väli; liikmeid, kellel seda pole, ei käsitleta kunagi sünnipäevalistena.",
          "Automaatset taseme tõusu hinnatakse kassa lõpetamisel; kui müük anuleeritakse, võetakse selle põhjustatud tõus automaatselt tagasi."
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
    "question": "Kuidas seadistada kingitusi, tasulisi lisatooteid ja komplektihindu?",
    "keywords": [
      "kingitus ostuga",
      "tasuline lisatoode",
      "komplektihind",
      "osta a saa b",
      "seadistusjuhend"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saadaval on kolm liitpakkumise liiki: kingitus ostu kõrvale (osta A, saa B), tasuline lisatoode (lisa X €, et saada Y) ja komplektihind (mis tahes N toodet hinnaga X €). Kingitused ja tasulised lisatooted ootavad kassapidaja kinnitust; komplektihinnad rakenduvad automaatselt."
      },
      {
        "type": "p",
        "text": "Kingitused ja tasulised lisatooted ei muuda ostukorvi kunagi omal käel. Kui tingimused on täidetud, ilmub kassaekraanile soovitusriba ning ostukorv muutub alles siis, kui kassapidaja puudutab nuppu „Vali kingitus“ või „Vali lisatoode“. See on teadlik valik, sest kingitused puudutavad füüsilist lao seisu: keegi peab kinnitama, et toode on olemas ja klient soovib seda."
      },
      {
        "type": "list",
        "items": [
          "Pärast nupu „Keeldu“ puudutamist sama soovitus selles ostukorvis enam ei ilmu; uus või tühjendatud ostukorv pakub seda uuesti.",
          "Kui enne kassas kinnitamist ilmub uus soovitus, tuleb see vastu võtta või sellest keelduda, enne kui müüki saab esitada.",
          "Kingituse ja lisatoote ridu ei saa muud rahalised kampaaniad edasi alandada ning need ei lähe arvesse teiste kampaaniate läviväärtuste täitmisel."
        ]
      },
      {
        "type": "p",
        "text": "Komplektihinnad (automaatsed alates versioonist v2.4): kui ostukorvist saab komplekti moodustada, rühmitab DingPOS selle ja arvestab kogusummasse – küsimata, ning komplekte ei saa poolitada."
      },
      {
        "type": "list",
        "items": [
          "Komplekt moodustub ainult siis, kui see muudab ostukorvi odavamaks. Võrdse hinnaga toodete seast rühmitatakse esimesena allahindluseta tooted ning juba allahinnatud toodetele jääb nende allahindlus alles.",
          "See, millised tooted kokku rühmitatakse, sõltub ainult ostukorvi sisust, mitte skannimise järjekorrast.",
          "Iga komplekti kuuluv toode näitab oma osa komplekti allahindlusest ning iga rea summa on pärast allahindlusi.",
          "Kassas rühmitatakse komplektid uuesti värskeimate hindadega; kui tulemus muutub, palutakse teil uus kogusumma kinnitada."
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
    "question": "Kuidas seadistada kampaania ajakava ja Happy Houri?",
    "keywords": [
      "ajakava",
      "happy hour",
      "nädalapäev",
      "südaöö",
      "seadistusjuhend"
    ],
    "content": [
      {
        "type": "p",
        "text": "Iga kampaania ajakava koosneb kolmest kihist: kuupäevavahemik (algus kohustuslik, lõpp valikuline), päevane ajavahemik (Happy Hour) ja valitud nädalapäevad. Kampaania rakendumiseks peavad kõik kolm sobima."
      },
      {
        "type": "list",
        "items": [
          "Südaööd ületavate ajavahemike (nt 22:00–02:00) puhul hinnatakse nädalapäeva selle päeva järgi, mil ajavahemik algab: kui on valitud ainult reede, loetakse laupäev 01:30 endiselt reede seansiks ja kampaania rakendub – laupäev 23:30 aga mitte.",
          "Lõppkuupäev on range piir – isegi kui Happy Houri ajavahemik veel kestab, lõpeb kampaania hetkel, kui lõppkuupäev möödub.",
          "Aeg võetakse iPadi seadme kellast, seega veenduge, et seadme ajavöönd ja kellaaeg on õiged."
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
    "question": "Prioriteet, kombineeritavus ja „peata järgnevad“ – kuidas need toimivad?",
    "keywords": [
      "prioriteet",
      "kombineeritavus",
      "peata järgnevad kampaaniad",
      "kampaaniate konflikt",
      "seadistusjuhend"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kui korraga sobib mitu kampaaniat, juhivad järjekorda ja koosmõju kolm seadet:"
      },
      {
        "type": "list",
        "items": [
          "Prioriteet: väiksemad numbrid arvutatakse esimesena. Järjekorra muutmiseks lohistage kampaaniate loendis.",
          "Kombineeritav teiste kampaaniatega (vaikimisi sees): kui see on väljas, lukustab toote tasandi kampaania ainult read, mida see alandas – teised tooted võivad hiljem siiski saada toote tasandi kampaaniaid; kombineerimatu ostukorvi tasandi kampaania blokeerib kõik hilisemad ostukorvi tasandi kampaaniad.",
          "Peata järgnevad kampaaniad, kui see rakendub: kui see kampaania on rakendunud, ei arvutata enam ühtegi rahalist allahindlust – punktide kordajaid ja kingitussoovitusi see aga ei mõjuta."
        ]
      },
      {
        "type": "note",
        "text": "Hilisemad kampaaniad arvutatakse juba allahinnatud summalt: 10% pluss 5% allahindlust ei ole 15%, sest teine allahindlus rakendub summale pärast esimest. DingPOS ei otsi ka kunagi kliendile kõige soodsamat kombinatsiooni – järjekorra määravad täielikult teie prioriteedid."
      },
      {
        "type": "p",
        "text": "Huvitav fakt: kui allahindlus ümardub nulliks, ei loeta rakendumist arvesse – ja see ei kuluta kasutuspiirangut."
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
    "question": "Kas maksete vastuvõtmine liidetakse DingPOS-iga?",
    "keywords": [
      "maksed",
      "kaardimaksed",
      "maksete integratsioon",
      "makselahendus",
      "maksevärav"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS ei puutu praegu rahaliikumisse: makseviisid on vaid raamatupidamissildid ja tegelikud maksed toimuvad teie olemasoleva terminali või makserakenduse kaudu."
      },
      {
        "type": "p",
        "text": "Kas me maksete vastuvõtu liidame, sõltub kasutajate tegelikust huvist. Kui vajate seda, kirjutage meile, millise teenuse soovite ühendada (milline makseprotsessor, milline terminal), ja kirjeldage oma kasutusjuhtu. Arendust seame tähtsuse järjekorda päringute arvu järgi."
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
    "question": "Kas DingPOS toetab e-arveid ja tšeki printimist?",
    "keywords": [
      "e-arve",
      "arve",
      "tšekk",
      "tšeki printimine",
      "tšekiprinter",
      "printer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Veel mitte. E-arvete ja tšeki printimise testimiseks ning arendamiseks tuleb osta arvemasinaid ja tšekiprintereid, mis on märkimisväärne kulu. Väikese meeskonnana plaanime selle ette siis, kui kasutajaid on rohkem ja tulu on stabiilne."
      },
      {
        "type": "p",
        "text": "Kui vajate seda, kirjutage meile oma kasutatava seadme mudel. Arendust seame tähtsuse järjekorda päringute arvu järgi."
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
    "question": "Kas DingPOS toetab füüsilisi vöötkoodilugejaid?",
    "keywords": [
      "vöötkoodilugeja",
      "vöötkoodi skanner",
      "skannerpüstol",
      "bluetooth",
      "usb",
      "riistvara"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vöötkoodi skannimine kaameraga toote lisamisel on juba toetatud. Füüsilisi lugejaid (USB / Bluetooth) ametlikult veel ei toetata: nagu teiste riistvarafunktsioonide testimiseks ja arendamiseks tuleb ka neid seadmeid osta ning me plaanime need ette kasutajaskonna kasvades."
      },
      {
        "type": "note",
        "text": "Kassa otsinguväli otsib ka vöötkoodide järgi, nii et klaviatuurirežiimis lugeja võiks teoreetiliselt sinna sisestada ja toote leida. Päris seadmega pole me seda aga kontrollinud, seega ametlikult see toetatud ei ole. Kui olete lugejat katsetanud ja see töötab, andke meile mudel teada!"
      },
      {
        "type": "p",
        "text": "Kui vajate seda, kirjutage meile. Arendust seame tähtsuse järjekorda päringute arvu järgi."
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
    "question": "Kas DingPOS-is tuleb kuine tasumisaruanne?",
    "keywords": [
      "kuine tasumine",
      "kuu kokkuvõte",
      "kuu lõpetamine",
      "kuuaruanne",
      "tasumata arved",
      "laekumata nõuded"
    ],
    "content": [
      {
        "type": "p",
        "text": "Eraldi kuist tasumisaruannet veel pole, kuid kõik andmed kontrollimiseks on rakenduses juba olemas:"
      },
      {
        "type": "list",
        "items": [
          "Valige Aruanded all periood See kuu, et näha kuu müügitulu, laekunud raha, kasumit ja maksete jaotust.",
          "Tarnijate kuutingimustega ostud koonduvad jaotises Ostmine alla Tasumata arved, kus saab terve kuu korraga tasuda.",
          "Klientide arvele müügid koonduvad jaotises Müügid → Nõuded, kus saab terve kuu korraga tasuda."
        ]
      },
      {
        "type": "p",
        "text": "Kui vajate kuist tasumisaruannet, mida saaks eksportida või printida, kirjutage meile, milliseid välju vajate. Arendust seame tähtsuse järjekorda päringute arvu järgi."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
