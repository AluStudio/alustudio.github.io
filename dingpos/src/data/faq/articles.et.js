// Generated from en and the et translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync et`, then `npm run l10n -- dingpos apply et`.

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
      "esimesed sammud",
      "riik",
      "valuuta",
      "maksud"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kui avad DingPOSi esimest korda, saad seadistusviisardi abil poe kahe sammu ja mõne minutiga seadistada:"
      },
      {
        "type": "steps",
        "items": [
          "Vali oma riik või piirkond. Loendi ülaosas on riik või piirkond, kus see iPad asub, ning seejärel levinumad turud; allpool on kõik 175 riiki ja piirkonda, kus DingPOS on App Store'is saadaval, ning neid saab otsida nime järgi rakenduse keeles või inglise keeles. Sinu valiku põhjal määratakse valuuta, maksud ja maksurežiim.",
          "Jaotises Teie pood sisesta poe nimi, soovi korral lisa logo ning kontrolli valuutat, makse ja maksurežiimi (maksuga / maksuta hinnad). Valuuta on vaikimisi sinu riigi oma; puuduta seda, et valida 130 valuuta hulgast. Maksude loendis on sinu riigi vaikimisi maksud: nimeta neid ümber, muuda määra, kustuta mõni või puuduta Lisa maks, et lisada uus rida. Näiteks Briti Columbia pood muudab esimese rea nimeks „GST 5” ja lisab rea „PST 7”."
        ]
      },
      {
        "type": "p",
        "text": "Puuduta Jätka ja näed teadet „Ding! Teie pood on valmis.” DingPOS seadistab ka kaks makseviisi: Sularaha ja Krediitkaart. Seejärel lisa oma tooted jaotises Tooted ja alusta müümist."
      },
      {
        "type": "note",
        "text": "Valuutat ei saa pärast seadistamist muuta; makse ja maksurežiimi saab hiljem muuta jaotises Seaded → Poe andmed. Ameerika Ühendriikides, Kanadas, Brasiilias ja Mikroneesias sõltub määr osariigist, provintsist või linnast, mistõttu määra väli on alguses tühi ja jätkamiseks sisesta määr, mida sa rakendad. Määr peab olema suurem kui 0: kui pood maksu ei arvesta, kustuta see rida. Saksamaal, Prantsusmaal, Itaalias ja teistes Euroopa riikides on loendis ka kohalikus jaekaubanduses levinud vähendatud määrad kohaliku maksunime all, näiteks Saksamaal „MwSt. 19%” ja „MwSt. 7%”; vähendatud määrasid uutele toodetele vaikimisi ei rakendata, seega lülita need sisse toote kaupa. 175 riigi loend ja valuuta valik lisandusid versioonis v3.2; varasemad versioonid pakkusid 15 riiki."
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
        "text": "Ei. DingPOSil pole kontosüsteemi – laadi alla ja alusta müümist. Sinu tooted, müügid ja klientide andmed jäävad sinu iPadi. Need jõuavad meieni ainult siis, kui saadad Seadetest tugiaruande, millega kaasneb sinu poeandmete koopia, et saaksime probleemi reprodutseerida."
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
        "text": "DingPOS töötab praegu iPadides, kus on iPadOS 17.4 või uuem, ning on mõeldud peamiselt horisontaalasendis kasutamiseks."
      },
      {
        "type": "p",
        "text": "iPhone'i ja Maci me veel ei toeta. Kui soovid, et toetaksime mõnda muud seadet, kirjuta meile ja räägi oma kasutusjuhtumist."
      },
      {
        "type": "note",
        "text": "Iga iPad, millel töötab iPadOS 17, saab värskendada versioonile 17.4, nii et ükski mudel ei jää välja. iPadis, kus on veel iPadOS 17.0–17.3, tuleb enne DingPOS v3.5 või uuema installimist süsteemi värskendada jaotises Seaded → Üldist → Tarkvaravärskendus."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kas pärast seadistamist saab valuutat, maksumäära või maksurežiimi muuta?",
    "keywords": [
      "valuuta",
      "maksurežiim",
      "muutmine",
      "lukus",
      "maksumäär",
      "maksud",
      "maksuga hinnad",
      "maksuta hinnad",
      "valuuta vahetamine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maksumäärasid saab muuta, valuutat mitte. Makse ja maksurežiimi muudad kaardil Maks jaotises Seaded → Poe andmed ning muudatus kehtib ainult edaspidistele müükidele: varasemad müügid, tagastused ja aruanded säilitavad neisse salvestatud maksusummad ja -režiimi."
      },
      {
        "type": "list",
        "items": [
          "Maksud: lisa uus, nimeta ümber, muuda määra või kustuta – vaata „Kuidas maksu arvutatakse?”",
          "Maksurežiim (maksuga / maksuta hinnad): puuduta teist režiimi ja kinnitusaknas näed näidet sinu esimese maksuga, nt „NT$100 toode 5% maksuga: klient maksab NT$105”. Hindade numbrid jäävad samaks ning pooleliolev ostukorv arvutatakse uues režiimis ümber, kui naased kassasse. Režiimi saab vahetada alates versioonist v3.5; varasemad versioonid lukustavad selle seadistamisel.",
          "Pärast vahetust tagastatakse täistagastusel algne müük endiselt sellisena, nagu see oli. Vahetus (asendustoodetega) müügil, mis tehti teises režiimis, on blokeeritud: lülita režiim tagasi või tagasta tooted ja müü need uuesti läbi."
        ]
      },
      {
        "type": "p",
        "text": "Valuuta lukustatakse seadistamise lõppedes. Kõik varasemad müügid on salvestatud selles, mistõttu valuuta vahetamine keset tegevust rikuks sinu aruanded. Kontrolli seda seadistuse sammus Teie pood: valuuta on vaikimisi sinu riigi oma ja sellele puudutades saad valida mõne muu."
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
      "jaapani keel",
      "hispaania keel",
      "mitu keelt",
      "keele vahetamine",
      "keelevalik"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS toetab 32 keelt, sealhulgas inglise, traditsioonilist ja lihtsustatud hiina, jaapani, korea, tai, vietnami, indoneesia, malai, hispaania (Ladina-Ameerika), portugali (Brasiilia), prantsuse ja saksa keelt. Ava Seaded → Seadme eelistused ja puuduta valikut Rakenduse keel. See avab DingPOSi lehe iPadi rakenduses Seaded, kus valid keele jaotises Keel."
      },
      {
        "type": "p",
        "text": "iOS ei luba rakendustel keelte loendit otse avada, mistõttu tehakse viimane puudutus süsteemi seadetes. Keel kehtib ainult sellel iPadil."
      },
      {
        "type": "note",
        "text": "Muud keeled peale inglise ja traditsioonilise hiina keele lisandusid versioonis v3.2. Kui Keel loetleb ainult inglise ja hiina keelt, uuenda DingPOSi App Store'is."
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
        "text": "Kassaekraanil töötab korraga kümme ostukorvi. Uue lisamiseks puuduta ostukorvide real nuppu „+“, vahetamiseks puuduta numbriga vahelehte."
      },
      {
        "type": "p",
        "text": "Iga ostukorv arvutatakse eraldi. Kui klient A alles valib, vaheta teisele ostukorvile ja vormista enne kliendi B ost. Ostukorv eemaldatakse automaatselt, kui makse on vormistatud."
      },
      {
        "type": "note",
        "text": "Ostukorvid on ainult mälus – vormistamata ostukorvid tühjendatakse, kui rakendus täielikult suletakse."
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
      },
      {
        "type": "p",
        "text": "Sageli antavaid allahindlusi saab salvestada: ava Seaded → Lojaalsus ja kampaaniad → Allahindluse eelseadistused ja puuduta Lisa eelseadistus, näiteks „Töötajahind −20%“. Kassas on nii toote kui ka ostukorvi allahindlusel menüü Eelseadistused; eelseadistuse valimine täidab allahindluse liigi ja väärtuse täpselt nii, nagu oleksid need ise sisestanud, mistõttu läheb see arvesse ka töötaja allahindluse ülempiiri puhul. Allahindluse eelseadistused tulid versiooniga 3.6 ja neid on vaja paketti Standard või kõrgemat."
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
      "mitu maksu",
      "GST",
      "PST",
      "maksu peatamine",
      "tšekk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maks arvutatakse automaatselt jaotises Seaded → Poe andmed määratud maksude ja maksurežiimi järgi. Maksurežiime on kaks ja tšekk näitab maksusummat mõlemas:"
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
        "text": "Pood võib arvestada mitut maksu, näiteks Briti Columbias GST 5% pluss PST 7% või Jaapanis 10% tarbimismaks koos 8% soodusmääraga:"
      },
      {
        "type": "list",
        "items": [
          "Kaardil Maks puuduta Lisa maks ning sisesta nimi ja määr. Lülita sisse Rakenda uutele toodetele, siis on see maks hiljem lisatavatel toodetel vaikimisi olemas. Kui poel on juba vaikemaks, on äsja lisatud maksu puhul see lüliti algselt väljas; lülita see sisse, kui uutele toodetele peavad kehtima mõlemad.",
          "Iga toode valib toote vormi jaotises Maksud, milliseid makse ta arvestab – näiteks bento võib arvestada ainult 8% soodusmäära. Kui sees on kaks või rohkem maksu, näitab vorm toote kogumaksu.",
          "Maksu nime või määra muutmiseks puuduta seda; nupud Rakenda kõigile toodetele ja Eemalda kõigilt toodetelt lisavad maksu kõigile toodetele või võtavad selle kõigilt korraga ära. Maksu kustutamisel öeldakse enne, mitmel tootel seda enam ei arvestata.",
          "Maksuta hindadega poes näitavad ostukorvi kogusummad iga maksu kohta eraldi rida ning müügi üksikasjades on iga maksu kohta üks rida koos määra ja summaga, millelt seda arvestati."
        ]
      },
      {
        "type": "p",
        "text": "Maksu arvestamise ajutiseks peatamiseks lülita kaardi Maks ülaosas välja Arvesta maksu: kõik hilisemad müügid on maksuvabad, sh ostukorvis juba olevad tooted. Iga toode säilitab oma maksud ja lüliti tagasi sisse lülitamine taastab need endisel kujul."
      },
      {
        "type": "p",
        "text": "Arvutuse täielik järjekord: toote allahindlused ja kampaaniad → ostukorvi allahindlus → punktide lunastamine → maks. Summad ümardatakse valuuta kümnendkohtadeni, poole korral ülespoole (nt 0 TWD puhul, 2 USD puhul). Maks arvutatakse iga müügi kohta iga maksu jaoks üks kord ning selle kümnendkohad järgivad kaardil Maks valikut Maksu ümardamine: Ümarda poolest üles, Ümarda alla või Ümarda üles. Uued poed Jaapanis alustavad valikuga Ümarda alla, teised poed valikuga Ümarda poolest üles."
      },
      {
        "type": "note",
        "text": "Nimega maksud tulid versiooniga 3.5. Uuendamisel muutub sinu maksumäär nimega maksuks (näiteks Austraalias „GST 10%“) ja iga olemasolev toode arvestab seda; kui poe määr oli 0, siis maksu ei lisandu. Varasemad müügid ja tagastused säilitavad maksumäärad ja -summad, millega need salvestati; aruannetes arvestatakse müügitulu nüüd enne maksu, ka varasemate perioodide puhul (vt „Mis vahe on müügitulul ja laekunud rahal?“)."
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
    "question": "Milliseid makseviise DingPOS toetab?",
    "keywords": [
      "makse",
      "sularaha",
      "krediitkaart",
      "Line Pay",
      "tagasiraha",
      "oma makseviis",
      "müük arvele",
      "teenustasu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Uus pood alustab kahe makseviisiga, Sularaha ja Krediitkaart, mis saavad seadistamisel rakenduse keele nimed. Jaotises Seaded → Makseviisid saad lisada mis tahes muid makseviise (nt Apple Pay, LINE Pay, kohalik rahakott) ning neid ümber järjestada. Makseviisi nime muutmiseks puuduta seda, näiteks Krediitkaart → „Kaart (Square)“; Aruanded loevad enne ümbernimetamist tehtud müügid uue nime alla (alates versioonist v3.6). Kustuta makseviis asub muutmislehe allosas ja küsib enne kustutamist kinnitust; varasemad müügid säilitavad makseviisi, millega need tasuti, ning viimast alles jäänud makseviisi kustutada ei saa."
      },
      {
        "type": "p",
        "text": "Makseviisid on raamatupidamise sildid – DingPOS ise makseid ei töötle. Kaardi- või mobiilimakse võta vastu oma olemasoleva terminali või rakendusega ning vali selle salvestamiseks DingPOSis sobiv silt. Sularahamakse puhul arvutab rakendus tagasiraha automaatselt ning seal, kus väikseimaid münte enam ei kasutata, saab ka sularaha ümardada – vaata „Kas sularahamakseid saab ümardada kasutusel olevate müntideni?“"
      },
      {
        "type": "p",
        "text": "Kui sinu kaardi- või mobiilimakse pakkuja võtab teenustasu, lisa makseviisile teenustasu määr ning Aruanded hindab iga makseviisi tasud ja hinnangulise netolaekumise – vaata „Kas DingPOS oskab kaardi- ja mobiilimakse teenustasusid jälgida?“"
      },
      {
        "type": "p",
        "text": "Püsikliendi puhul, kes võtab kauba kohe kaasa ja maksab hiljem, vali „Müük arvele“: müük kirjutatakse üles laekumata nõudena ja märgitakse tasutuks, kui raha laekub. Vaata „Kas püsikliendid saavad osta arvele ja maksta hiljem?“"
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
    "question": "Kas DingPOS oskab kaardi- ja mobiilimakse teenustasusid jälgida?",
    "keywords": [
      "teenustasu",
      "kaarditasu",
      "maksetasu",
      "teenustasu määr",
      "netolaekumine",
      "kaupmehe tasu",
      "Line Pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Puuduta jaotises Seaded → Makseviisid mõnda makseviisi (või lisa uus) ja täida Teenustasu: protsent, fikseeritud summa tehingu kohta või mõlemad. Sularahatüüpi makseviisidel tasu pole. Sellest hetkest salvestab iga selle makseviisiga laekunud makse tasu, mis on hinnatud sel hetkel kehtinud määra järgi."
      },
      {
        "type": "p",
        "text": "Jaotises Aruanded lisab kaart Makseviisid iga tasuga makseviisi alla rea „Teenustasu · Neto“ ning kaardi allservas on kogu perioodi hinnangulised tasud ja hinnanguline netolaekumine."
      },
      {
        "type": "list",
        "items": [
          "Sisesta määr, mille sinu pakkuja tegelikult maha arvab. Kui tasult võetakse maksu, lisa see juurde: 3% pluss 5% maks tähendab 3,15%. Kui tasu pole, jäta mõlemad väljad tühjaks.",
          "Määra muutmine mõjutab ainult hilisemaid makseid; juba salvestatud tasud jäävad samaks.",
          "„Protsentuaalne tasu tagastatakse tagasimaksel“ on Taiwani ja Jaapani poodides algselt sees, mujal väljas, sest pakkujad nagu Stripe, Square ja PayPal jätavad tasu tagasimakse puhul endale; sea see oma pakkuja järgi. See reguleerib tagastusi ja tagasimakstud ettetellimuste käsiraha: sisselülitatuna tagastatakse protsent; fikseeritud tasu ei tagastata kunagi. Anuleerimine või tasumise tühistamine lülitit ei arvesta ja võtab tagasi kogu salvestatud tasu, fikseeritud tasu kaasa arvatud. Klient saab mõlemal juhul sama summa tagasi.",
          "Maksed, mis laekusid enne, kui makseviisil oli määr, ei kanna tasu: Aruanded märgivad need „N ilma määrata“ ja näitavad netot kui „—“."
        ]
      },
      {
        "type": "note",
        "text": "Tasud on hinnangud sisestatud määra põhjal; tegelik summa on sinu pakkuja väljavõttes. Teenustasu määrade muutmiseks on vaja paketti Standard või kõrgemat ning paketis Lite on väljad lukus. Alates versioonist v3.4 näevad salvestatud tasusid vahekaartidel Aruanded ja Kasum kõik paketid, nii et prooviperioodil määratud määr jätkab tasude hindamist ka paketis Lite; varasemad versioonid näitasid tasusid ainult paketis Standard ja kõrgemates."
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
    "question": "Kas sularahamakseid saab ümardada kasutusel olevate müntideni?",
    "keywords": [
      "sularaha ümardus",
      "sularaha ümardamine",
      "ümardamine",
      "ümardamine üles",
      "ümardamine alla",
      "mündid",
      "sent",
      "0,05",
      "tagasiraha",
      "Kanada",
      "Austraalia",
      "Šveits"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Kanada, Austraalia, Uus-Meremaa, Šveits, Taani, Rootsi, Norra, Belgia, Soome ja Ungari ei kasuta enam oma väikseimaid münte, seega ümardab DingPOS sularaha summani, mida saab tegelikult üle anda: sularahas makstud C$12,99 suurune müük võetakse kui C$13,00 ja tagasiraha arvutatakse C$13,00 põhjal. Kaardi- ja muud sularahata maksed jäävad täpseks."
      },
      {
        "type": "p",
        "text": "Uuel poel, mis on seadistatud ühes neist riikidest selle riigi valuutas, on see automaatselt sees. Iga teine pood saab selle sisse lülitada kaardil Sularaha ümardamine jaotise Seaded → Makseviisid allosas: vali, milleni sularaha ümardada (Ümardamata või sendidega valuutas 0,05, 0,10, 0,50 või 1,00; sendideta valuutas, näiteks TWD või JPY, 5, 10, 50 või 100) ning sammu puhul, mis võib sattuda täpselt poole peale, kas ümardatakse üles või alla. Muudatus kehtib ainult hilisematele maksetele."
      },
      {
        "type": "list",
        "items": [
          "Kassas on näha „Sularahas võetud C$13,00“. Kui klient soovib maksta täpse summa, puuduta makseviiside all nuppu Võta täpne summa; see kehtib ainult sellele ühele müügile.",
          "Müügi kogusumma, maks, müügitulu, punktid ja kliendi kulutused ei muutu; ümardusvahe jääb maksele ning tšeki ekraan ja müügi üksikasjad näitavad seda kogusumma all, nt „Sularaha ümardus +C$0,01“.",
          "Sularahas tagasimaksed tagastustel, ettetellimuse sularahas käsiraha ja kättesaamisel tasutav jääk, vahetuse juurdemaksed ning sularahas tasutud arvele müükide tasumata summad ümardatakse samuti; mitme müügi korraga tasumisel ümardatakse kogu partii ühe korra.",
          "Anuleerimised, tagastatud ettetellimuse käsirahad ja tühistatud tasumised maksavad tagasi täpselt selle, mis kirja pandi, uuesti ümardamata.",
          "Vahekaardil Aruanded näitab Laekunud raha, kui suur osa sellest oli sularaha ümardus, ning vahekaardil Kasum on kuu kohta rida Sularaha ümardus, mis läheb arvesse puhaskasumis. Ümardus ei ole kunagi müügitulu."
        ]
      },
      {
        "type": "note",
        "text": "Šveits ümardab alati alla, järgides oma hinnanäitamise reegleid – CHF 12,98 võetakse kui CHF 12,95 ning poole peale sattumise valikut ei ole. Belgias ümardatakse ainult summasid, mis on suuremad kui €0,05. Sularaha ümardamine on kõigis pakettides ning olemasolev pood võtab sularaha täpselt nagu varem, kuni selle sisse lülitad."
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
      "hide-out-of-stock",
      "multiple-carts"
    ]
  },
  {
    "slug": "hide-out-of-stock",
    "category": "checkout",
    "since": "3.1",
    "question": "Kas kassaekraan saab laost otsas tooteid peita?",
    "keywords": [
      "peitmine",
      "laost otsas",
      "otsas",
      "nullvaru",
      "kassa",
      "toode puudub",
      "ei leia toodet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Ava Seaded → Seadme eelistused ja lülita sisse Peida laost otsas tooted (vaikimisi väljas). Kassa tootevõrk, kategooriafilter ja otsing (nime ja vöötkoodi järgi) jätavad siis vahele iga toote, mille laoseis on 0 või alla selle. Lüliti rakendub kohe, rakendust pole vaja uuesti avada."
      },
      {
        "type": "list",
        "items": [
          "Tooted, mille laoseisu ei jälgita, on alati nähtaval. Variantidega toode peidetakse ainult siis, kui iga variant on otsas.",
          "See mõjutab ainult selle iPadi kassat; jaotis Tooted näitab endiselt kõiki tooteid.",
          "Kui kõik tooted on peidetud, kuvab kassa teate „Kõik tooted on otsas“ ja ütleb, kust lüliti välja lülitada."
        ]
      },
      {
        "type": "note",
        "text": "Kui lüliti on sees, ei leia see iPad laost otsas tooteid, mistõttu ei saa ta müüa miinusesse ega võtta nende kohta ettetellimust – lülita see vajaduse korral välja. Kui tooted tunduvad kassast kadunud olevat, on põhjuseks tavaliselt just see lüliti."
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
    "slug": "checkout-customer",
    "category": "checkout",
    "since": "3.4",
    "question": "Kuidas lisada müügile klient või klienti vahetada?",
    "keywords": [
      "klient",
      "liige",
      "kliendi lisamine",
      "kliendi vahetamine",
      "uus klient",
      "kassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lisa klient ostukorvis või kassaekraanil: summa all olev rida Klient avab kliendiloendi, kui kedagi pole lisatud, ning pakub valikuid Vaheta klienti ja Eemalda klient, kui klient on lisatud. Kassas valitud klient on ostukorvi klient ja jääb ostukorvi alles ka siis, kui kassa tühistad."
      },
      {
        "type": "list",
        "items": [
          "Kliendi vahetamine arvutab taseme allahindlused, sünnipäevapakkumised ja punktide kasutamise kohe uuesti. Juba sisestatud sularaha või käsiraha jääb alles ja seda kontrollitakse uue kogusumma suhtes.",
          "Ei leia teda? Puuduta kliendiloendi paremas ülanurgas nuppu Uus klient või – kui otsingule ei vasta keegi – loendi keskel. Otsitu täidab vormi: numbrid lähevad telefoniväljale, kõik muu nimeväljale, ning uus klient lisatakse müügile.",
          "Kui puudutad Müük arvele ilma lisatud kliendita, avaneb kliendiloend ning Müük arvele valitakse alles pärast kliendi valimist.",
          "Kui uus klient viib käsitsi allahindluse operaatori allahindluse ülempiirist kõrgemale, peab esmalt heaks kiitma juhataja; kui heakskiidu tühistad, jääb klient endiseks."
        ]
      },
      {
        "type": "note",
        "text": "Kliendid kuuluvad paketti Standard; paketis Lite on rea tekst „Kliendid – pakett Standard“ ja see avab uuendamise üksikasjad. Kassaekraani rida Klient lisandus versioonis v3.4; varasemates versioonides lisatakse klient ainult ostukorvis."
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
        "text": "Ava Müügid, leia müük, ava selle detailvaade ja puuduta Anuleeri. Leht „Kas anuleerida see müük?“ küsib valikuliselt põhjust (kuni 100 tähemärki); puuduta selle paremas ülanurgas Anuleeri ja ongi tehtud. Põhjus on näha müügi detailvaates ja tegevuslogis ning seda ei saa pärast saatmist muuta."
      },
      {
        "type": "p",
        "text": "Anuleerimine pöörab automaatselt tagasi kõik seotud: jälgitav laoseis taastatakse, müügiga teenitud püsikliendipunktid võetakse tagasi ja kasutatud punktid tagastatakse. Anuleeritud müügid jäävad nimekirja selgelt märgitult ning neid ei arvestata aruannete müügitulus."
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
      "suuruse vahetus",
      "praakimine",
      "tagastuse põhjus"
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
          "Tagasi makstakse see, mida klient selle toote eest tegelikult maksis – rea allahindlused, ostukorvi allahindlused ja punktide kasutamine on juba toodete vahel ära jaotatud, seega ei maksta tagasi tavahinda. Maks arvestatakse sama määraga, millega algne müük maksustati.",
          "Asendustooted müüakse tänase hinnaga, ilma kampaaniate ja allahindlusteta.",
          "Jälgitava laoseisuga toote puhul võib iga tagastatud rea panna tagasi lattu (Lattu tagasi, vaikimisi) või ära visata (Praagi, alates versioonist v3.5). Lattu tagasi taastab laoseisu. Praagi jätab laoseisu endiseks ning lisab toote müügihetkel kehtinud omahinna selle kuu laokaole kasumiaruandes. Tagasimakse, maks ja punktid on mõlemal juhul samad.",
          "Algse müügiga teenitud punktid võetakse tagasi, kasutatud punktid tagastatakse ning asendustooted teenivad oma punktid.",
          "Kui algne müük on tasumata müük arvele, raha ei liigu: tagastus arvatakse kliendi nõuetest maha ja kallima asendustoote korral lisandub vahe tema nõuetele.",
          "Müüki saab tagastada mitmes etapis, kuid mitte rohkem, kui algselt müüdi; kui kõik on tagasi toodud, annavad tagastatud maks, allahindlused ja punktid kokku täpselt algse müügi summad. Kampaania kasutuslimiit ei taastu tagastuse korral."
        ]
      },
      {
        "type": "p",
        "text": "Väli Põhjus on valikuline, kuni 100 tähemärki. See on näha müügi detailvaates ja tegevuslogis ning seda ei saa pärast saatmist muuta."
      },
      {
        "type": "note",
        "text": "Tagastusel ei ole tähtaega, kuid algne müük on vajalik. Kui tagastus sai ekslikult sisestatud, anuleeri tagastus ja tagastatav kogus taastub."
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
        "text": "Vaheta kassas ekraani ülaosas valik Müük valikuks Ettetellimus, vali kättesaamise kuupäev, sisesta käsiraha (0-st kogusummani, kiirvalikud 30% / 50% / Täis) ja vali, kuidas käsiraha tasutakse. Lisa klient, et saaksid temaga kättesaamise asjus ühendust võtta."
      },
      {
        "type": "list",
        "items": [
          "Laoseis arvatakse maha ettetellimuse tegemisel, nii et müüdava koguse arv muutub kohe. See on märguanne, mitte reserveering: hilisem müük võib viimase ühiku siiski ära võtta. Laost otsas olevad tooted lähevad miinusesse ja taastuvad ostutellimuse kättesaamisel.",
          "Kui klient tuleb tellimusele järele, puuduta tellimuse üksikasjades nuppu Anna üle, et ülejäänud summa sisse nõuda. Seejärel muutub müük tavaliseks lõpetatud müügiks ja hilisemad tagastused käivad tavapärase tagastuse kaudu.",
          "Kui klient ei tule, puuduta müügi detailvaates Loobu ettetellimusest ning vali, kas tagastada käsiraha või see alles jätta. Laoseis lisatakse tagasi.",
          "Käsiraha tšekil ja lõplikul kättesaamise tšekil on sama number."
        ]
      },
      {
        "type": "p",
        "text": "Jaotises Aruanded arvestatakse ettetellimuse müügitulu täielikult kättesaamise päeval, käsiraha aga arvestatakse selle tasumise päeval laekunud raha hulka – seega on need kaks arvu mõnda aega erinevad. Vaata „Mis vahe on müügitulul ja laekunud rahal?“"
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
        "text": "Jah. Vali makseviisiks Müük arvele ja müük salvestatakse kliendi võlana. Võlal peab olema võlgnik, seega avab Müük arvele puudutamine ilma lisatud kliendita kõigepealt kliendiloendi (alates versioonist v3.4; varasemad versioonid paluvad ostukorvis kliendi lisada)."
      },
      {
        "type": "p",
        "text": "Tasumise vastuvõtmiseks lülita Müügid ülaosas vaatele Nõuded. Nõuded on grupeeritud klientide kaupa; ava vastav klient, et tasuda üksik müük, terve kuu või kõik korraga – iga kord küsib DingPOS, kuidas raha tasuti. Üksiku müügi saab tasuda ka selle detailvaatest ning ekslikult sisestatud tasumise saab tagasi võtta nupuga Tühista tasumine."
      },
      {
        "type": "list",
        "items": [
          "Müügitulu loetakse päeval, mil kaup üle antakse; laekunud raha ja püsikliendipunktid ootavad tasumise päevani.",
          "Tasumata müükidel on nimekirjas merevaigukarva märk ning kliendi detailvaates on näha, kui palju ta praegu võlgneb.",
          "Veel tasumata müügi tagastamisel raha ei liigu: summa arvatakse selle kliendi nõuetest maha.",
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
      "checkout-customer",
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
        "text": "Jah. Müügi, kliendi ja ostutellimuse detailvaates on igaühel märkuste kaart – puuduta seda muutmiseks (kuni 500 tähemärki) või, kui märkusi veel pole, ainsat rida „Lisa märkus“. Märkuse saab kirjutada ka kliendi või ostutellimuse loomise vormis."
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
        "text": "Toote muutmise lehel puuduta jaotises Variandi valikud nuppu Lisa valik, et lisada valik (nt „Värv“), ning seejärel nuppu „+ Väärtus“, et lisada iga valiku väärtus (nt punane, sinine). Kui valikuid on kaks või rohkem (nt värv × suurus), loob DingPOS kõik kombinatsioonid sinu eest (punane/S, punane/M, sinine/S…)."
      },
      {
        "type": "p",
        "text": "Kui tootel on variandid, on igal kombinatsioonil jaotises Variantide hind ja laoseis oma laoseis ning selle hind järgib toote välja Hind: kombinatsioon, millel pole oma hinda, näitab toote hinda halliga ja muutub koos sellega, ning sisestatud number on selle kombinatsiooni enda hind, mida näidatakse mustaga. Näiteks kui määrad T-särgi Hinnaks 390 ja muudad ainult suuruse L hinnaks 350, müüakse M ja XL hinnaga 390; kui Hind muutub hiljem 420-ks, järgivad M ja XL seda ning maksavad 420, L jääb aga 350 peale. Veeru Hind kõrval olevas ⓘ-s asub valik Kasuta toote hinda, mis seab kõik kombinatsioonid uuesti toote hinda järgima. Enne versiooni v3.6 loodud toodetel jääb iga variandi hind selle kombinatsiooni enda hinnaks ning toote Hind on neist madalaim. Kassa, tootenimekiri ja toote üksikasjad näitavad hinnavahemikku madalaimast kõrgeimani, nt „NT$350–NT$390“, või ühte hinda, kui kõik kombinatsioonid maksavad sama; hinna järgi sortimine kasutab madalaima kombinatsiooni hinda. Kassas kuvatakse toodet puudutades enne ostukorvi lisamist variandi valik."
      },
      {
        "type": "p",
        "text": "Omahind töötab samamoodi: tühi omahind näitab toote omahinda halliga ja muutub koos sellega, number on kombinatsiooni enda omahind, mida näidatakse mustaga – ka 0. Veeru Omahind kõrval olevas ⓘ-s asuv valik Kasuta toote omahinda tühjendab kõigi kombinatsioonide enda omahinnad korraga."
      },
      {
        "type": "note",
        "text": "Valiku ja väärtuse nimi võib olla kuni 20 märki pikk ning tühikud nime mõlemas otsas eemaldatakse salvestamisel. Väärtus, kuhu pole midagi kirjutatud, ei ole kombinatsioon ja jäetakse salvestamisel vahele; salvestamine peatub ja väli tõstetakse punase äärisega esile, kui valiku nimi on tühi, kui valiku kõik väärtused on tühjad või kui tühjendad väärtuse, mis tootel juba salvestatud oli; kirjuta see tagasi või eemalda see selle ×-nupuga. Variantidega toode ei saa olla kohapealse hinnaga toode."
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
    "question": "Kas saan toote hinna kassas ise sisestada, näiteks postikulu või kokkuleppehinna jaoks?",
    "keywords": [
      "kohapealne hind",
      "oma hind",
      "hinna sisestamine",
      "postikulu",
      "teenustasu",
      "kokkuleppehind",
      "turuhind",
      "protsenttasu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah – tee sellest toode, millel on Kohapealne hind. Lülita toote muutmise lehel sisse Kohapealne hind ja jäta hind tühjaks; kassa ja tootenimekiri näitavad hinna asemel teksti „Kohapealne hind“. Kassas küsib toodet puudutades kõigepealt hinda; sisesta see ja puuduta Lisa ostukorvi, et lisada toode selle hinnaga."
      },
      {
        "type": "list",
        "items": [
          "0 on kehtiv hind (näiteks tasuta postikulu); tühja väljaga ei saa lisada. Sisesta hind samamoodi, nagu sinu poe maksurežiim hindab kõike muud.",
          "Ostukorvis on kohapealse hinnaga toote kohta üks rida: sellele uuesti puudutades avaneb see rida, et hinda muuta.",
          "Alates versioonist 3.3 lülitab Hinnastamine vahet valikute Summa ja Protsent vahel. 5% korral on rida 5% teiste toodete vahesummast (pärast toote allahindlusi, enne kampaaniaid, ostukorvi allahindlust ja punktide kasutamist), ümardatuna tavareegli järgi (pool üles) valuuta kümnendkohtadeni, ning see muutub koos ostukorviga, kui tooteid lisatakse, eemaldatakse või neile tehakse allahindlust. Ostukorvi rida näitab teksti „5% ostukorvist“ ja müük salvestab summa, milleni see jõudis.",
          "Kohapealse hinnaga rida ei saa toote allahindlust; madalama hinna jaoks muuda selle hinda. Ostukorvi allahindlused, punktide kasutamine ja kampaaniad (kui seda neist välja pole jäetud) kehtivad sellele siiski.",
          "Kohapealse hinna sisselülitamine lülitab sisse ka Jäta kampaaniatest välja, nii et tasule ei anta allahindlust ja see ei lähe arvesse ostusumma lävedes. Lülita see uuesti välja, kui kokkuleppehinnaga toode peaks kampaaniates osalema.",
          "Müüdud rida maksustatakse, annab punkte ja läheb jaotises Aruanded arvesse nagu iga teinegi, ning tagastus tagastab sisestatud hinna.",
          "Variantidega toode ei saa kasutada kohapealset hinda. Kohapealse hinnaga tooteid ei pakuta kunagi kingitusena ega tasulise lisatootena ning need ei ilmu kunagi vahetuse asendustoodete loendisse."
        ]
      },
      {
        "type": "note",
        "text": "See on olemas igas paketis ja hinna sisestamiseks pole kunagi vaja juhi heakskiitu."
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
      "loendus",
      "väike laoseis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Laoseisu jälgimine on toote enda lüliti – lülita toote muutmise lehel sisse Jälgi laoseisu ja sisesta praegune kogus. Toote iga variant jälgib oma laoseisu."
      },
      {
        "type": "p",
        "text": "Pärast sisselülitamist vähendavad müügid ja ettetellimused laoseisu automaatselt; anuleerimised, tagastused ja ettetellimusest loobumised panevad selle tagasi; ostutellimuse vastuvõtmine suurendab seda. Iga liikumine kantakse täielikku laoseisu ajalukku. Kui laoseisu on 10 või vähem, märgitakse see tootenimekirjas, kassas ja toote üksikasjades oranžiga väikese laoseisuna."
      },
      {
        "type": "p",
        "text": "Numbrit saab käsitsi muuta kahel viisil:"
      },
      {
        "type": "list",
        "items": [
          "Ümberloendus: muuda toote vormil laoseisu number vastavaks sellele, mida tegelikult loendasid. See ei jõua kunagi Kasumisse.",
          "Korrigeeri laoseisu (alates versioonist v3.5): puuduta toote üksikasjades Korrigeeri laoseisu, vali Eemalda või Lisa, kogus ja põhjus, näiteks Aegunud või riknenud, Kahjustatud või Proovid ja kingid. Eemaldatud kauba omahind arvestatakse selle kuu laokaona vahekaardil Kasum – vaata „Kuidas laost maha kanda aegunud, katki läinud või proovina ära antud kaupa?“"
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
    "question": "Kuidas laost maha kanda aegunud, katki läinud või proovina ära antud kaupa?",
    "keywords": [
      "laoseisu korrigeerimine",
      "laokadu",
      "kaupade kadu",
      "mahakandmine",
      "praak",
      "aegunud",
      "kahjustatud",
      "proovid",
      "poe tarvikud",
      "ümberloendus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kasuta Korrigeeri laoseisu. Jälgitava laoseisuga toote puhul puuduta toote üksikasjades Korrigeeri laoseisu, vali Eemalda või Lisa, määra kogus nuppudega + ja − (algväärtus on 1; numbrit puudutades saad selle ise sisestada), vali põhjus ja soovi korral lisa märkus (kuni 100 märki). Leht arvutab välja laoseisu pärast muudatust ning põhjuse all olev rida ütleb, kas see jõuab Kasumisse."
      },
      {
        "type": "list",
        "items": [
          "Eemaldamise põhjused: Kasutatud tootmises, Aegunud või riknenud, Kahjustatud, Kadu või vargus, Töötaja tarbeks, Proovid ja kingid, Poe tarvikud ning Muu. Lisamise põhjused: Ise valmistatud, Leitud ja Muu. Muu puhul on märkus kohustuslik.",
          "Välja arvatud Kasutatud tootmises, arvestatakse eemaldatu selle hetke omahinnaga selle kuu laokaona vahekaardil Kasum. See tuleb pärast brutokasumit ja vähendab puhaskasumit; brutokasum ja marginaal ei muutu. Kasutatud tootmises vähendab ainult laoseisu, sest materjali omahind sisaldub juba sellest valmistatud toote omahinnas.",
          "Leitud arvab sama summa laokaost maha. Lisamise poolel Ise valmistatud ja Muu ainult suurendavad laoseisu ega jõua kunagi Kasumisse.",
          "Korrigeerimine arvestatakse selle päeva alla, mil selle salvestad. Seda ei saa tagasiulatuvalt dateerida, muuta ega kustutada; vea parandamiseks salvesta Leitud või korrigeerimine vastupidises suunas.",
          "Omahinnata toodet saab ikkagi korrigeerida, kuid Kasum ei saa sellele summat panna ning kuu juures märgitakse, mitmel kirjel omahind puudus."
        ]
      },
      {
        "type": "p",
        "text": "Laoseisu numbri muutmine toote vormil on Ümberloendus: see viib laoseisu vastavusse sellega, mida tegelikult loendasid, ega jõua kunagi Kasumisse. Vahekaardil Aruanded filtreerib laoliikumiste loend laoseisu korrigeerimised ja ümberloendused eraldi ning tegevuslogi näitab iga korrigeerimise põhjust ja märkust."
      },
      {
        "type": "note",
        "text": "Korrigeeri laoseisu nõuab Standard või kõrgemat paketti. Pro paketis küsitakse töötajalt, kelle rolli jaoks vajab Laoseisu käsitsi korrigeerimine heakskiitu, kinnitamisel juhataja PIN-koodi."
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
        "text": "Negatiivne laoseis tähendab tavaliselt, et täiendus jäi kirja panemata või ettetellitud toode pole veel saabunud (ettetellimus vähendab laoseisu tellimise hetkel). Kanna täiendused sisse ostutellimuse vastuvõtmisega ja number taastub ise. Loenduse erinevuse paranda toote vormil laoseisu numbrit muutes (ümberloendus); kauba puhul, mis läks katki, aegus või anti ära, salvesta põhjus valikuga Korrigeeri laoseisu. Mõlemad jäävad laoseisu ajalukku."
      },
      {
        "type": "note",
        "text": "Kui kassa ei leia toodet, mille laoseis on 0, vaata, kas jaotises Seaded → Seadme eelistused on sisse lülitatud Peida laost otsas tooted: kui see on sees, ei saa see iPad laost otsas tooteid ostukorvi lisada."
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
    "question": "Kuidas sisestada oste ja tarnijaid?",
    "keywords": [
      "ostutellimus",
      "ostmine",
      "tarnija",
      "vastuvõtmine",
      "täiendamine",
      "tasumata arved"
    ],
    "content": [
      {
        "type": "p",
        "text": "Külgribal olev jaotis Ostud haldab tarnijaid ja ostutellimusi. Tarnija juures on nimi, kontaktisik, telefon, aadress ja vaikimisi maksetingimus (Tasumine kättesaamisel või Kuine krediit)."
      },
      {
        "type": "steps",
        "items": [
          "Puuduta Uus ost, vali tarnija ning lisa tooted, kogused ja ühikuomahinnad (eeltäidetud iga toote praeguse omahinnaga). Lisada saab ka saatmistasu. Kauba jaoks, mis pole veel tootena loodud, puuduta valijas Lisa toode nuppu Uus toode – uus toode jõuab otse ostutellimusse reana. Kui tarnijat pole veel loodud, puuduta tarnijate loendi vasakus ülanurgas Lisa tarnija – uus tarnija jõuab otse tagasi ostutellimusse.",
          "Mustand ei mõjuta kunagi laoseisu ega tasumata arveid – seda saab vabalt muuta või kustutada.",
          "Kui kaup saabub, puuduta Võta kaup vastu: jälgitav laoseis suureneb ning ostutellimus saab numbri ja lukustub. Vaikimisi uuendab vastuvõtt ka iga toote omahinna selle ühikuomahinnaga; omahindade muutmata jätmiseks lülita ostutellimusel välja Sünkrooni toodete omahind. Selle all olev lüliti Arvesta saatmine omahinda (uutel ostutellimustel sisse lülitatud) jagab saatmistasu ridade vahel summa järgi ära, nii et igale tootele kirjutatav omahind sisaldab tema osa saatmistasust: jahu 10 × $30, või 1 × $60 ja saatmistasu $25 annavad jahu omahinnaks $32 ja või omahinnaks $64."
        ]
      },
      {
        "type": "p",
        "text": "Maksetingimus määrab, mis edasi saab: tingimusega Tasumine kättesaamisel tellimused märgitakse tasutuks, tingimusega Kuine krediit tellimused jäävad aga jaotisse Tasumata arved, kus saad need tarnija kaupa tasuda – üks tellimus, selle kuu või kõik korraga."
      },
      {
        "type": "p",
        "text": "Tooraineid, mida sa ei müü, nagu jahu või pakendid, saab osta samamoodi: lisa need müügiväliste toodetena – vaata „Kas tooraineid, nagu jahu või pakendeid, saab tootena lisada?“"
      },
      {
        "type": "note",
        "text": "Jaotis Ostud nõuab Standard või kõrgemat paketti. Tarnijat, kellel on tasumata vastuvõetud tellimusi, ei saa kustutada."
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
    "question": "Kas tooraineid, nagu jahu või pakendeid, saab tootena lisada?",
    "keywords": [
      "müügiväline toode",
      "tooraine",
      "koostisosad",
      "materjalid",
      "pakendid",
      "tarvikud",
      "müü kassas",
      "ostmine",
      "omahind"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jah. Lülita toote vormil foto all välja Müü kassas (vaikimisi on see sees) ja toode on müügiväline: sellele pole hinda vaja, see säilitab omahinna, vöötkoodi, laoseisu ja variandid ning tootenimekirjas on hinna asemel „Ei müüda“."
      },
      {
        "type": "list",
        "items": [
          "Müügiväline toode ei ilmu kunagi kassa tootevalikus, kategooriates, otsingus ega vöötkoodi skannimisel ning ei saa olla kingitus, lisatoode, kampaania sihttoode ega vahetuse asendustoode. Kategooria, kus on ainult müügiväliseid tooteid, jäetakse kassa kategooriaribalt välja.",
          "Kui poes on müügiväliseid tooteid, ilmub vahekaardi Tooted paremasse ülanurka filtrinupp: vali Kõik tooted, Müügil või Müügivälised, koos otsingu ja kategooriatega.",
          "Ostutellimused, vastuvõtmine, Sünkrooni toodete omahind ja tasumata arved toimivad täpselt nagu teiste toodete puhul, nii et materjali ostuhinna ja laoseisu saab salvestada jaotise Ostud kaudu.",
          "Teiste toodete müük ei vähenda selle laoseisu. Kui kasutad seda, salvesta eemaldamine valikuga Korrigeeri laoseisu toote üksikasjades: Kasutatud tootmises toodetesse läinud koguse jaoks, Poe tarvikud selliste asjade jaoks nagu paberkotid või puhastusvahendid.",
          "Selle saab igal ajal tagasi müüdavaks lülitada ning selle hind ja maksud on alles. Juba tehtud müüke ja aruandeid see ei mõjuta."
        ]
      },
      {
        "type": "p",
        "text": "Kuidas selle omahind Kasumisse jõuab: ostud ei lähe seal otse arvesse. Sellest valmistatud toote puhul lisa omahind sellele tootele ning see arvestatakse, kui toode müüakse. Tarvikud, mis ei kuulu ühegi toote omahinda, salvestatakse kasutamisel Poe tarvikutena, kui nende laoseisu jälgitakse, või ühekordse kuluna, kui ei jälgita. Ära salvesta sama raha mõlemal viisil, muidu arvestatakse seda kaks korda."
      },
      {
        "type": "note",
        "text": "Müügivälised tooted on kõigis pakettides; ostmine, laoseisu jälgimine ja Korrigeeri laoseisu nõuavad Standard või kõrgemat paketti."
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
    "question": "Mis vahe on müügitulul ja laekunud rahal?",
    "keywords": [
      "müügitulu",
      "laekunud raha",
      "aruanded",
      "brutokasum",
      "müügitulust brutokasumini",
      "kassa kontrollimine",
      "käsiraha",
      "müük arvele",
      "maks"
    ],
    "content": [
      {
        "type": "p",
        "text": "Müügitulu läheb arvesse kauba üleandmise päeval, pärast kõiki allahindlusi ja enne maksu; laekunud raha läheb arvesse raha laekumise päeval ning see on raha, mille said, maks kaasa arvatud. Maksu arvestavas poes on laekunud raha müügitulust maksu võrra suurem isegi letis makstud müükide puhul. Mõlemad on vahekaardi Aruanded esimese rea kaks esimest kaarti, koos kaartidega Brutokasum, Müügid ja Keskmine müük."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Aruannete kaardiread, esimeses reas kõrvuti Müügitulu ja Laekunud raha"
      },
      {
        "type": "h2",
        "text": "Millal müügitulu ja laekunud raha erinevad"
      },
      {
        "type": "p",
        "text": "Näiteks kui maksu sisaldavate hindadega pood müüb kauba hinnaga NT$1,050, millest 5% on maks, ja klient maksab letis, on müügitulu NT$1,000 ja laekunud raha NT$1,050. Lisaks maksule lähevad need kaks näitajat lahku järgmistes olukordades:"
      },
      {
        "type": "list",
        "items": [
          "Müük arvele: kaup läheb täna ja kuulub tänasesse müügitulusse; raha läheb laekunud raha hulka müügi tasumise päeval.",
          "Ettetellimus: käsiraha läheb laekunud raha hulka makse päeval; müügitulu arvestatakse tervikuna kättesaamise päeval.",
          "Kinnipeetud käsiraha: kui klient ettetellimusest loobub ja jätad käsiraha endale, oli see makse hetkel juba laekunud raha hulgas. Aruanded näitavad seda eraldi kinnipeetud käsirahana ja see ei lähe kunagi müügitulu hulka.",
          "Varasema müügi anuleerimine: tagasi makstud raha läheb laekunud raha hulka anuleerimise päeval, nii et selle päeva laekunud raha võib olla negatiivne. Anuleeritud müük ise arvestatakse müügikuupäeval ja kuvatakse kaardi Müügid alapealkirjas.",
          "Sularaha ümardus: summa, mille võrra sularaha ümardamine müügi kogusummast üle või alla jääb, läheb laekunud raha hulka, mitte kunagi müügitulu hulka."
        ]
      },
      {
        "type": "p",
        "text": "Kui kumbki neist summadest pole null, näitab kaardi Laekunud raha alapealkiri sularaha ümardust või kinnipeetud käsiraha."
      },
      {
        "type": "h2",
        "text": "Maks ja kaartide üksikasjad"
      },
      {
        "type": "p",
        "text": "Maksu, mis müügitulu ja laekunud raha vahele jääb, näed jaotises Müügitulust brutokasumini, mille avad kaardi Brutokasum allosast. Seal on read Müügitulu (koos maksuga), Maks ja Müügitulu (maksuta). Austraalia, Ühendkuningriigi, Uus-Meremaa ja Singapuri poed näevad seal oma riigi maksunime, näiteks Müügitulu (GST kaasa arvatud), GST ja Müügitulu (GST välja arvatud)."
      },
      {
        "type": "p",
        "text": "Müükides arvestatud maksu nägemiseks deklareerimiseks ava kaardilt Maks Maksuaruanne."
      },
      {
        "type": "p",
        "text": "Kaartidel Müügitulu, Laekunud raha ja Müügid olev ikoon ⓘ selgitab neid reegleid rakenduses, sealhulgas kaardi Müügid alapealkirjas loetletud anuleeritud müüke."
      },
      {
        "type": "h2",
        "text": "Kontrollimine ja müügi lugemine"
      },
      {
        "type": "p",
        "text": "Kassa kontrollimiseks võrdle laekunud raha oma kassasahtli ja kaardimakseterminaliga. Kaardil Makseviisid on iga makseviisi kohta üks rida ning enne makseviisi ümbernimetamist tehtud müügid loetakse uue nime alla. Et näha, kui palju perioodi jooksul müüsid, vaata müügitulu. Tagastused vähendavad müügitulu tagastuse päeval."
      },
      {
        "type": "note",
        "text": "Müügitulu enne maksu lisandus versioonis v3.5 ja varasemad perioodid arvutati samamoodi ümber, nii et maksu arvestav pood näeb nüüd väiksemat müügitulu kui enne uuendust. See on parandus: varasemad versioonid lugesid maksu müügitulu sisse ning maksuta hindadega poed lugesid müügitulu hulka isegi kogutud müügimaksu."
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
    "question": "Milliseid perioode saab aruannetes vaadata?",
    "keywords": [
      "aruanded",
      "periood",
      "ajavahemik",
      "see nädal",
      "see kuu",
      "see aasta",
      "oma vahemik",
      "toodete edetabel",
      "võrdle"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vali vahekaardi Aruanded ülaosas olevalt perioodiribalt Täna, Eile, See nädal, See kuu, See aasta või Kogu aeg või puuduta Oma vahemik, et valida mis tahes algus- ja lõppkuupäev. Iga lehe kaart järgib valitud perioodi. See nädal järgib seadme nädala esimest päeva, See kuu algab 1. kuupäeval, See aasta algab 1. jaanuaril, Kogu aeg algab poe esimesest müügist ning iga valik näitab kuupäevi, mida see hõlmab."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Perioodiriba vahekaardi Aruanded ülaosas: valitud on Oma vahemik ja selle kuupäevaaken on avatud, et valida Algus ja Lõpp"
      },
      {
        "type": "h2",
        "text": "Oma vahemiku valimine"
      },
      {
        "type": "p",
        "text": "Kasuta valikut Oma vahemik, kui vajad vahemikku, mis ei kattu valmis kalendriperioodidega, näiteks kahekuulist või kvartaalset maksudeklaratsiooni perioodi."
      },
      {
        "type": "steps",
        "items": [
          "Ava Aruanded ja puuduta perioodiribal Oma vahemik.",
          "Vali hüpikaknas algus- ja lõppkuupäev.",
          "Kinnita kuupäevad, et aruanne uueneks."
        ]
      },
      {
        "type": "p",
        "text": "Kaart Maks ja maksuaruanne järgivad samuti valitud perioodi, nii et deklareerimisperioodi valimine valikuga Oma vahemik uuendab mõlemat; täpsemalt vaata seotud artiklit maksuaruande kohta. Perioodiriba paremal küljel puuduta Võrdle, et vaadata valitud perioodi koos eelneva perioodiga või eelmise aasta sama perioodiga; täpsemalt vaata seotud artiklit täiustatud aruannete kohta."
      },
      {
        "type": "h2",
        "text": "Lehe kaardid ja diagrammid"
      },
      {
        "type": "p",
        "text": "Perioodiriba all kuvab Aruanded kaks rida näitajakaarte, seejärel diagramme ja kokkuvõttekaarte paaridena ning kõige all jaotist Praegu."
      },
      {
        "type": "list",
        "items": [
          "Esimene kaardirida: Müügitulu, Laekunud raha, Brutokasum, Müügid ja Keskmine müük.",
          "Teine kaardirida: Allahindlused kokku, Maks, Puhaskasum, Omahinnata tooted ja Teenindatud kliendid.",
          "Esimene paar: müügitrendi graafik ja Omahind ja brutokasum kõrvuti.",
          "Teine paar: Toodete edetabel ja Osakaal kategooriate kaupa kõrvuti.",
          "Kolmas paar: Makseviisid ja kampaaniakaart kõrvuti.",
          "Alumine kaart: Praegu."
        ]
      },
      {
        "type": "p",
        "text": "Kaks teise rea kaarti ilmuvad ainult teatud juhtudel. Maks, mis lisandus versioonis v3.6, ilmub ainult maksudega poes või siis, kui valitud periood sisaldab maksuga tehtud müüke. Puhaskasum ilmub ainult siis, kui periood on See kuu või hõlmab täpselt ühte täiskuud."
      },
      {
        "type": "note",
        "text": "Kui perioodis müüke pole, näitab Aruanded ainult perioodiriba, teadet ja jaotist Praegu."
      },
      {
        "type": "h2",
        "text": "Diagrammide ja Toodete edetabeli lugemine"
      },
      {
        "type": "p",
        "text": "Müügitrendi graafiku paremas ülanurgas olev menüü lülitab seda valikute Müügitulu, Müügid, Keskmine müük ja Teenindatud kliendid vahel. Graafikul on ka lüliti Trend ja Nädalapäev × tund; selle vaate kohta vaata seotud artiklit täiustatud aruannete kohta. Selle kõrval paneb graafik Omahind ja brutokasum iga perioodi toodete omahinna ja brutokasumi ühte tulpa kokku. Üks päev kuvatakse tunnipõhiselt, pikemate perioodide andmed rühmitatakse pikkusest olenevalt päevade, nädalate, kuude või aastate kaupa."
      },
      {
        "type": "p",
        "text": "Vajuta müügitrendi graafikul, graafikul Omahind ja brutokasum või kaardil Makseviisid ja hoia all, et näha ühe lõigu infokaarti. Kui Võrdle on sees, näitab müügitrendi graafiku infokaart selle perioodi ja võrdlusperioodi näitajat kõrvuti. Lõikude vahel liikumiseks lohista vasakule või paremale; graafikul üles või alla pühkides kerib leht nagu tavaliselt."
      },
      {
        "type": "p",
        "text": "Toodete edetabel näitab valitud perioodi 5 enimmüüdud toodet. Puuduta kaarti või valikut Vaata kõiki, et näha kõiki selles perioodis müüdud tooteid, järjestatud koguse järgi pärast tagastusi. Variantidega toode kuvatakse ühe reana iga variandi kohta."
      },
      {
        "type": "note",
        "text": "Kalendriperioodid lisandusid versioonis v2.4; varasemad versioonid pakkusid libisevaid vahemikke (Täna / 7 päeva / 30 päeva / Kogu aeg). Kui näed neid endiselt, uuenda DingPOS App Store'ist."
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
    "question": "Mida näitavad täiustatud aruanded?",
    "keywords": [
      "täiustatud aruanded",
      "aruanded",
      "võrdle",
      "perioodide võrdlus",
      "nädalapäev × tund",
      "aeglase käibega tooted",
      "muutused",
      "osakaal kategooriate kaupa",
      "laojäägi väärtus",
      "korduvostude määr"
    ],
    "content": [
      {
        "type": "p",
        "text": "Täiustatud aruanded pole eraldi ekraan, vaid asuvad vahekaardil Aruanded ja järgivad ülaosas valitud perioodi. Need lisavad perioodide võrdlused, nädalapäeva ja tunni soojuskaardi, jaotised Aeglase käibega tooted ja Muutused, liikmete korduvostude määra, jaotise Osakaal kategooriate kaupa ning jaotise Praegu laoseisu ja punktide jaoks. Need on kaasatud igas paketis ja jäävad avatuks ka pärast prooviperioodi lõppu."
      },
      {
        "type": "h2",
        "text": "Võrdle"
      },
      {
        "type": "p",
        "text": "Võrdle asub vahekaardil Aruanded perioodiriba paremal küljel ja võrdleb valitud perioodi varasemaga."
      },
      {
        "type": "steps",
        "items": [
          "Ava külgribal Aruanded.",
          "Vali ülaosas periood.",
          "Puuduta perioodiriba paremal küljel Võrdle.",
          "Vali menüüst võrdlusvalik."
        ]
      },
      {
        "type": "p",
        "text": "Saadaolevad valikud sõltuvad valitud perioodist:"
      },
      {
        "type": "list",
        "items": [
          "Pole lülitab võrdluse välja.",
          "Eelmine nädal võrdleb üht päeva eelmise nädala sama päevaga või seda nädalat eelmise nädalaga.",
          "Eelmine kuu võrdleb seda kuud eelmise kuuga.",
          "Eelmine aasta võrdleb seda aastat eelmise aastaga või valitud perioodi eelmise aasta sama perioodiga.",
          "Eelnev võrdleb oma vahemikku sama päevade arvuga vahetult eelneva vahemikuga."
        ]
      },
      {
        "type": "p",
        "text": "Kui võrdlus on aktiivne, lisab Aruanded muutuse ja võrdlusperioodi näitaja igale kaardile peale kaartide Maks, Puhaskasum ja Omahinnata tooted. Kaardid Müügitulu, Laekunud raha, Brutokasum, Müügid, Keskmine müük, Allahindlused kokku ja Teenindatud kliendid näitavad kõik võrdlusrida, näiteks „▼ 3% võrreldes eelmise kuuga“."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Aruanded perioodil See nädal, Võrdle seatud valikule Eelmine nädal: näha on võrdlusriba ja esimene kaardirida, mille iga kaardi all on muutus ja võrdlusperioodi näitaja",
        "caption": "Puuduta mis tahes võrdlusrida kaardi all, et avada Perioodide võrdlus ja näha mõlema perioodi näitajaid."
      },
      {
        "type": "p",
        "text": "Kaardi Allahindlused kokku muutus on alati hall, sest suurem allahindlus ei ole iseenesest hea ega halb. Puuduta mis tahes võrdlusrida, et avada Perioodide võrdlus, mis loetleb mõlema perioodi näitajad. Müügitrendi graafikule lisandub võrdlusperioodi kohta heledam joon. Kui periood veel kestab, lõpeb võrdlusperiood sama ajahetkega."
      },
      {
        "type": "h2",
        "text": "Nädalapäev × tund"
      },
      {
        "type": "p",
        "text": "Lülita müügitrendi graafiku päis valikult Trend valikule Nädalapäev × tund, et näha seitsmepäevast 24-tunnist soojuskaarti. Mida tumedam on lahter, seda rohkem sellel tunnil müüsid. Soojuskaarti saab lülitada müügitulu ja müükide vahel. Kui jaotises Võrdle on võrdlus sisse lülitatud, näitab soojuskaart ka seda, millised tunnid kasvasid ja millised kahanesid."
      },
      {
        "type": "h2",
        "text": "Aeglase käibega tooted"
      },
      {
        "type": "p",
        "text": "Lülita edetabelikaardi päis valikule Aeglase käibega tooted, et näha tooteid vähimast müügist suurimani. Iga rida näitab toote praegust laoseisu ja viimast müügikuupäeva. Tooted, mida pole kunagi müüdud, on märgitud „Pole müüdud“, ja variantidega toode saab iga variandi kohta ühe rea. Vaikimisi näidatakse ainult laos olevaid tooteid."
      },
      {
        "type": "h2",
        "text": "Muutused"
      },
      {
        "type": "p",
        "text": "Lülita edetabelikaardi päis valikule Muutused, et näha 3 toodet, mille müügitulu kasvas võrdlusperioodiga võrreldes enim, ja 3 toodet, mille müügitulu langes enim. Iga rida näitab mõlema perioodi müügitulu ja vahet ning iga varianti võrreldakse iseendaga."
      },
      {
        "type": "p",
        "text": "Vali esmalt periood jaotises Võrdle. Kui Võrdle on seatud valikule Pole või periood on Kogu aeg, palub kaart valida võrdlusperioodi. Puuduta kaarti või valikut Vaata kõiki, et avada täielik loend Toodete muutused, mis on jaotatud osadeks Müügitulu kasv ja Müügitulu langus."
      },
      {
        "type": "h2",
        "text": "Korduvostude määr"
      },
      {
        "type": "p",
        "text": "Kaardi Teenindatud kliendid viimane rida näitab korduvostude määra kujul „Korduvostude määr … · … liiget naasis“. See on nende liikmete osakaal, kes ostsid valitud perioodis ja on kokku ostnud kaks või enam korda. Kui jaotises Võrdle on võrdlus sisse lülitatud, annab selle all olev rida muutuse protsendipunktides ja võrdlusperioodi määra."
      },
      {
        "type": "h2",
        "text": "Osakaal kategooriate kaupa"
      },
      {
        "type": "p",
        "text": "Osakaal kategooriate kaupa loetleb iga kategooria müügitulu ja osakaalu, suurimast väikseimani, lähtudes iga toote praegusest kategooriast. Kategooriata tooted lähevad rubriiki Kategooriata ja read annavad kokku täpselt müügitulu."
      },
      {
        "type": "h2",
        "text": "Praegu"
      },
      {
        "type": "p",
        "text": "Jaotis Praegu näitab kolme laoseisu ja punktidega seotud andmet:"
      },
      {
        "type": "list",
        "items": [
          "Laojäägi väärtus, arvutatud kui praegune laoseis × praegune omahind.",
          "Kõik laoliikumised valitud perioodil.",
          "Punktid, mis kliendid hoiavad ja pole lunastanud, koos suurima summaga, mille nad saavad maha arvata."
        ]
      },
      {
        "type": "p",
        "text": "Laojäägi väärtus ja lunastamata punktid on praegused jäägid, seega ülaosas perioodi muutmine neid ei muuda."
      },
      {
        "type": "h2",
        "text": "Paketid ja õigused"
      },
      {
        "type": "p",
        "text": "Alates versioonist v3.4 on kõik täiustatud aruanded avatud igas paketis, sh Lite, ja jäävad avatuks ka pärast prooviperioodi lõppu. Muutused lisandus samuti versioonis v3.4. Varasemad versioonid näitasid täiustatud aruandeid ainult Pro paketis ja teistel pakettidel oli väike lukk; kui näed lukke endiselt, uuenda DingPOS App Store'ist."
      },
      {
        "type": "p",
        "text": "Lite ei jälgi laoseisu ega püsikliendipunkte, kuid Praegu näitab siiski laojäägi väärtust ja lunastamata punkte, mis su poel juba on (näiteks prooviperioodist), või nulli."
      },
      {
        "type": "note",
        "text": "Töötajad näevad täiustatud aruandeid õiguse Aruanded alusel; laojäägi väärtuse summade nägemiseks on vaja ka õigust Omahind ja kasum."
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
    "question": "Kuidas arvestatakse brutokasumit, kui ma omahindu ei sisestanud?",
    "keywords": [
      "omahind",
      "brutokasum",
      "marginaal",
      "brutomarginaal",
      "aruanded",
      "omahind puudub",
      "kasumit ei jälgita",
      "omahinnata tooted",
      "müügitulust brutokasumini"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omahind on valikuline väli, seega jäetakse tooted ilma omahinnata brutokasumist välja, samas kui nende müügitulu arvestatakse endiselt täielikult. Kaart Omahinnata tooted vahekaardil Aruanded näitab, mitmel selles perioodis müüdud või tagastatud tootel omahind puudub, näiteks „12 toodet“. Omahind 0 loetakse omahinnaks ja neid tooteid loendis ei ole; kui igal tootel on omahind, on kaardil kirjas „0 toodet · omahinnad olemas“."
      },
      {
        "type": "h2",
        "text": "Omahinnata toodete leidmine"
      },
      {
        "type": "p",
        "text": "Puuduta vahekaardil Aruanded kaarti Omahinnata tooted või nuppu Vaata tooteid, et avada Omahinnata tooted. Aken loetleb tooted brutokasumist välja jäänud müügitulu järgi suurimast väikseimani."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Aken Omahinnata tooted, mis loetleb tooted brutokasumist välja jäänud müügitulu järgi"
      },
      {
        "type": "steps",
        "items": [
          "Puuduta aknas Omahinnata tooted rida, et toode avada.",
          "Puuduta Muuda ja sisesta omahind väljale Omahind (valikuline).",
          "Mine tagasi aknasse Omahinnata tooted, et näha rida märkega Omahind lisatud."
        ]
      },
      {
        "type": "p",
        "text": "Variantidega toode märgitakse Omahind lisatud alles siis, kui igal omahinnata müüdud variandil on omahind – kas oma või toote oma, mida variant järgib. Alates versioonist v3.6 saab ostutellimus jaotada oma saatmiskulu ka toote omahinda, mille see kirjutab, kui Arvesta saatmine omahinda on sisse lülitatud."
      },
      {
        "type": "note",
        "text": "Lisatud omahind mõjutab ainult hilisemaid müüke. Juba tehtud müüke ei arvutata ümber."
      },
      {
        "type": "h2",
        "text": "Omahinna ja maksu sisestamine"
      },
      {
        "type": "p",
        "text": "Tootevormil on omahinna väli igas poes nimega Omahind (valikuline). Maksudega poes ilmub välja Omahind (valikuline) kõrvale ⓘ, mis näitab, kuidas maks sõltub valikust Sisendmaksu mahaarvamine:"
      },
      {
        "type": "list",
        "items": [
          "Sisendmaksu mahaarvamine on sees: sisesta omahind enne maksu, mille saad tagasi nõuda. Märkus ⓘ ütleb: „Sisesta omahind ilma mahaarvatava maksuta – see läheb sisendmaksu alla. Mahaarvamatu maks kuulub omahinna hulka.“",
          "Sisendmaksu mahaarvamine on väljas: sisesta summa, mille maksid, miinus maks, mille saad tagasi nõuda. Märkus ⓘ ütleb: „Mahaarvatav maks ei kuulu omahinna hulka, mahaarvamatu maks aga kuulub. Kui arvestad sisendmaksu maha, lülita jaotises Poe andmed sisse Sisendmaksu mahaarvamine.“"
        ]
      },
      {
        "type": "p",
        "text": "Kui su pood deklareerib sisendmaksu, lülita jaotises Poe andmed sisse Sisendmaksu mahaarvamine."
      },
      {
        "type": "h2",
        "text": "Brutokasumi jaotuse lugemine"
      },
      {
        "type": "p",
        "text": "Brutokasum on müügitulu pärast kõiki allahindlusi (kauba- ja ostukorvi allahindlused, kampaaniad, punktide lunastamine) ja enne maksu, millest on lahutatud omahind. Marginaal on brutokasum ÷ omahinnaga toodete müügitulu, nii et omahinnata tooted marginaali ei langeta. Tagastus võtab tagastuse päeval tagasi brutokasumi, mille need tooted olid toonud."
      },
      {
        "type": "p",
        "text": "Puuduta vahekaardil Aruanded kaarti Brutokasum, et avada Müügitulust brutokasumini, mis lahutab rida-realt:"
      },
      {
        "type": "list",
        "items": [
          "Müügitulu (koos maksuga)",
          "Maks",
          "Müügitulu (maksuta)",
          "Omahinnata müügitulu",
          "Toodete omahind",
          "Brutokasum ja marginaal"
        ]
      },
      {
        "type": "p",
        "text": "Read annavad kokku täpselt kaardi Brutokasum näitaja. Austraalia, Ühendkuningriigi, Uus-Meremaa ja Singapuri poed näevad maksuridadel kohalikku maksunime, näiteks Müügitulu (GST kaasa arvatud)."
      },
      {
        "type": "note",
        "text": "See brutokasumi arvutus lisandus versioonis v3.1. Varasemad versioonid lahutasid ainult käsitsi antud kaubaallahindlused ja lugesid maksu sisaldava hinna maksu kasumiks, mistõttu näitavad allahindluste või maksu sisaldavate hindadega perioodid pärast uuendamist väiksemat brutokasumit. See on parandus, mitte kadunud andmed."
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
    "question": "Kuidas näha, kui palju ma iga kuu tegelikult teenisin?",
    "keywords": [
      "kasum",
      "kasum ja kahjum",
      "puhaskasum",
      "brutokasum",
      "kuine kasum",
      "püsikulud",
      "tegevuskasum",
      "kasumiaruanne"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava külgribal vahekaardi Aruanded all olev Kasum, et näha iga kuu puhaskasumit ja seda, kuidas see välja arvutatakse. Loend on uuemast vanemani, alates sinu esimesest tegevusega kuust; jooksev kuu on märgitud Pooleli ja iga aasta päis liidab kokku selle aasta lõppenud kuude puhaskasumi. Selle esimene rida Kõik kulud avab kõik kulud kuust sõltumata."
      },
      {
        "type": "h2",
        "text": "Kuu jaotus"
      },
      {
        "type": "steps",
        "items": [
          "Ava külgribal vahekaardi Aruanded all olev Kasum.",
          "Puuduta kuud, et näha, kuidas selle puhaskasum välja arvutatakse."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Kasumi kuuleht märkega Pooleli, puhaskasumi ja täieliku jaotusega müügitulust kuludeni"
      },
      {
        "type": "p",
        "text": "Kuulehel on iga rida müügist puhaskasumini järjekorras. Read müügitulust brutokasumini kannavad samu nimesid ja summasid nagu Müügitulust brutokasumini vahekaardil Aruanded."
      },
      {
        "type": "list",
        "items": [
          "Müügitulu (koos maksuga), Maks ja Müügitulu (maksuta): müügitulu koos maksuga, maksusumma ning müügitulu pärast kõiki allahindlusi ja enne maksu, arvestatud kauba üleandmise päeval. Austraalia, Ühendkuningriigi, Uus-Meremaa ja Singapuri poed näevad kohalikku maksunime.",
          "Omahinnata müügitulu: lahutatakse enne toodete omahinda, kuvatakse ainult siis, kui see ei ole null.",
          "Toodete omahind: müüdud kauba omahind, võetud sinu toodete omahindadest.",
          "Brutokasum: kuvatakse koos marginaaliga.",
          "Omahinnata müügitulu: lisatakse pärast brutokasumit tagasi, kui see ei ole null.",
          "Laokadu: kuvatakse ainult siis, kui kuul see on; selle kauba omahind, mille Korrigeeri laoseisu on laost eemaldanud aegununa, kahjustatuna, ära antuna vms, ning praagitud tagastused. See tuleb pärast brutokasumit. Vaata „Kuidas laost maha kanda aegunud, katki läinud või proovina ära antud kaupa?“ Kuul on ka jaotis Laokadu, mis annab selle põhjuste kaupa kokku.",
          "Teenustasud (hinn.): makseviiside määradest hinnatud tasud.",
          "Kinnipeetud käsiraha: kuvatakse ainult siis, kui see ei ole null; käsiraha, mille jätsid endale, kui ettetellimusest loobuti.",
          "Sularaha ümardus: kuvatakse ainult siis, kui see ei ole null; summa, mille võrra kasutusel olevatele müntidele ümardatud sularaha müükide kogusummadest suurem või väiksem oli.",
          "Püsikulud ja Ühekordsed kulud: see, mille selle kuu kohta salvestasid – vaata „Kuidas lisada üüri, palku ja muid kulusid?“",
          "Puhaskasum: arvutatakse kui müügitulu (maksuta) − toodete omahind − laokadu − teenustasud + kinnipeetud käsiraha + sularaha ümardus − püsikulud − ühekordsed kulud."
        ]
      },
      {
        "type": "h2",
        "text": "Pooleli kuud"
      },
      {
        "type": "p",
        "text": "Kuni kuu veel kestab, arvab Kasum maha kogu kuu püsikulud. Näiteks 5.10 on müügitulu (maksuta) seni 20,000, toodete omahind 10,000 ja püsikulud 65,700, seega on puhaskasum −55,700 ja märgitud Pooleli · kogu kuu kulud on maha arvatud."
      },
      {
        "type": "p",
        "text": "Kuna kogu kuu kulud on juba arvesse võetud, ei näidata selle kuu puhaskasumit kunagi punasena ei kuuloendis, kuulehel ega kaardil Puhaskasum vahekaardil Aruanded. Kahjumiga lõppenud kuu puhaskasum kuvatakse hoiatusvärviga."
      },
      {
        "type": "h2",
        "text": "Diagrammid"
      },
      {
        "type": "p",
        "text": "Jaotusele järgneb kuni kolm diagrammi: puhaskasum kuude kaupa, iga püsikulu osakaal ja püsikulude trend. Mõlemad trendidiagrammid hõlmavad kuni 12 kuud avatud kuuni ja ilmuvad alles siis, kui võrrelda saab vähemalt kahte kuud, arvestades esimese müügi või kulu kuust. Osakaalu diagramm vajab sel kuul püsikulu; kuni seda pole, kuvatakse selles jaotises hoopis Lisa püsikulu."
      },
      {
        "type": "h2",
        "text": "Aruannete ja Kasumi vahel liikumine"
      },
      {
        "type": "p",
        "text": "Aruanded ja Kasum viivad üksteise juurde. Kui perioodiks on vahekaardil Aruanded See kuu või täpselt üks täiskuu, lisab teine kaardirida kaardi Puhaskasum, mille märge on jooksval kuul Pooleli · kogu kuu kulud on maha arvatud. Puuduta seda kaarti, et näha selle kuu jaotust brutokasumist puhaskasumini. Mis tahes muu perioodi puhul puuduta jaotise Müügitulust brutokasumini viimasel real valikut Vaata kuu kasumiaruannet."
      },
      {
        "type": "p",
        "text": "Teistpidi avab vahekaardil Kasum kuu pealkirja all olev Ava aruanne: oktoober vahekaardi Aruanded sellel kuul (oma vahemik 1.10–31.10); pooleli kuu puhul avab see perioodi See kuu."
      },
      {
        "type": "note",
        "text": "Puhaskasum on tegevuskasum enne tulumaksu, arvutatud DingPOS-i salvestatud andmete põhjal – see ei ole maksudeklaratsioon. Kui tooteid on müüdud ilma omahinnata, näitab kuu siiski puhaskasumit märkega Arvesse pole võetud N toote omahinda ning seda puudutades näed, millised tooted need on."
      },
      {
        "type": "note",
        "text": "Kasum on olemas igas paketis. Töötajakontode kasutamisel nõuab selle avamine õigust Kasumiaruanne ja kulud, mille jaoks vajavad Juhatajad ja Töötajad vaikimisi heakskiitu, sest see näitab toodete omahindu ja palku."
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
    "question": "Kuidas lisada üüri, palku ja muid kulusid?",
    "keywords": [
      "kulud",
      "üür",
      "palgad",
      "kommunaalkulud",
      "püsikulud",
      "ühekordsed kulud",
      "kõik kulud",
      "kulu jaotamine",
      "üldkulud",
      "kasum"
    ],
    "content": [
      {
        "type": "p",
        "text": "Puuduta vahekaardil Kasum nuppu Lisa kulu ja vali Lisa püsikulu või Lisa ühekordne kulu, et lisada üür, palgad, kommunaalkulud ja muud tegevuskulud. Iga kulu arvestatakse selles kuus, kuhu see kuulub, mitte selles kuus, kui selle eest maksid, ning iga kuu puhaskasum uueneb vastavalt. Püsikulud kehtivad igal kuul, vajadusel muutuva summaga, ühekordsed kulud aga arvestatakse ühes kuus või jaotatakse mitme kuu peale."
      },
      {
        "type": "h2",
        "text": "Püsikulud"
      },
      {
        "type": "p",
        "text": "Püsikulu on korduv kulu, mida maksad igal kuul, näiteks üür, kommunaalkulud või palgad."
      },
      {
        "type": "steps",
        "items": [
          "Ava Kasum.",
          "Puuduta Lisa kulu.",
          "Vali Lisa püsikulu.",
          "Sisesta nimi, kuusumma ja kuu, millest kulu algab. Tagasiulatuvalt lisamiseks vali varasem kuu.",
          "Salvestamiseks puuduta ✓."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Püsikulu vorm, kus on nimi, kuusumma, alguskuu ja summa muudatused"
      },
      {
        "type": "p",
        "text": "Kui summa muutub, ava kulu ja puuduta Lisa summa muudatus. Vali kuu, millest muudatus algab, ning seejärel Alates sellest kuust jätkuva muudatuse jaoks (näiteks üüri tõus) või Ainult see kuu ühe kuu erinevuse jaoks (näiteks selle kuu elektriarve). Kõik muudatused on vormil loetletud ja iga kirje saad avada, et seda muuta või kustutada."
      },
      {
        "type": "p",
        "text": "Kui lõpetad püsikulu maksmise, määra Viimane arvestatud kuu. See kuu ja varasemad kuud jäävad kasumiaruandes arvesse, hilisemad kuud seda enam ei sisalda."
      },
      {
        "type": "h2",
        "text": "Ajastatud muudatused jaotises Kõik kulud"
      },
      {
        "type": "p",
        "text": "Jaotises Kõik kulud näitab iga püsikulu rida, mis on ees ootamas. Rida ühendab alguskuu järgmise ajastatud summamuudatuse ja viimase arvestatud kuuga. Näiteks võib rida olla: Alates jaanuar 2026 · detsember 2026 — $420 kuus · Viimati arvestatud märts 2027."
      },
      {
        "type": "p",
        "text": "Paremal olev summa jääb tänaseks kuusummaks, mitte tulevaseks määraks. Valikuga Ainult see kuu seatud muudatust real ei loetleta."
      },
      {
        "type": "h2",
        "text": "Ühekordsed kulud"
      },
      {
        "type": "p",
        "text": "Ühekordne kulu on ühe korra makstav kulu, näiteks sisustus, seadmed, ettemaksuga tasutud kindlustus või üks arve."
      },
      {
        "type": "steps",
        "items": [
          "Ava Kasum.",
          "Puuduta Lisa kulu.",
          "Vali Lisa ühekordne kulu.",
          "Sisesta summa ja kuupäev.",
          "Määra Arvestatud kuu ühe kuu jaoks või lülita sisse Jaota mitmele kuule.",
          "Salvestamiseks puuduta ✓."
        ]
      },
      {
        "type": "p",
        "text": "Ka jaotamata kulu puhul saad valida Arvestatud kuu, et kulu läheks arvesse selles kuus, kuhu see kuulub. Näiteks novembris saabunud oktoobri arve võib minna arvesse oktoobris, tegelik kuupäev jääb alles."
      },
      {
        "type": "p",
        "text": "Sisustuse, seadmete või ettemaksuga tasutud kindlustuse puhul lülita sisse Jaota mitmele kuule, vali 2–120 kuud ja Esimene arvestatud kuu. Vorm näitab eelvaates, kui palju igas kuus arvesse läheb ja millised kuud see hõlmab."
      },
      {
        "type": "p",
        "text": "Kui jaotus lõpeb enneaegu (näiteks kindlustusleping öeldi üles), ava kulu ja kasuta Lõpeta jaotus varem. Allesjäänud summa arvestatakse sinu valitud kuus."
      },
      {
        "type": "h2",
        "text": "Sisendmaks kuludelt"
      },
      {
        "type": "p",
        "text": "Kui Sisendmaksu mahaarvamine on sees, saad ühekordsele kulule lisada arve numbri ja mahaarvatava maksu ning salvestada püsikulu iga arve jaotises Arved nupuga Lisa arve. Kasumiaruandes arvesse minev summa jääb selleks, mille poe kanda jääb; mahaarvatava maksu toimimist selgitab seotud sisendmaksu artikkel."
      },
      {
        "type": "note",
        "text": "Sisesta summa, mille poe kanda tegelikult jääb, jättes välja maksu, mille saad tagasi nõuda. Müügiks ostetav kaup ja tooraine, millest seda valmistad, lähevad hoopis läbi vahekaardi Ostud, sest need arvestatakse toote omahinna sisse müügi hetkel. Laoseisu jälgitavad tarvikud salvestatakse kasutamisel valikuga Korrigeeri laoseisu ja põhjusega Poe tarvikud, mitte kuluna. Tagatisrahad, laenu põhiosa ja omaniku väljavõetud raha ei ole kulud. Muudatused salvestatakse kõik korraga, kui puudutad ✓, ning kui muudatus ulatub lõppenud kuusse, ütleb DingPOS esmalt, millistel kuudel puhaskasum muutub."
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
    "question": "Kuidas eksportida maksuaruanne raamatupidajale?",
    "keywords": [
      "maksuaruande eksport",
      "Maksuaruanne",
      "Ekspordi",
      "Exceli tööraamat",
      "CSV",
      "PDF-aruanne",
      "Maksukokkuvõte",
      "Sisendmaksu andmed",
      "raamatupidaja"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava Maksuaruanne, puuduta paremas ülanurgas Ekspordi ja vali CSV, Exceli tööraamat (XLSX) või PDF-aruanne. Fail avatakse täisekraanil eelvaates, kus saad jagamisnupust faili salvestada või raamatupidajale saata. Kõik vormingud sisaldavad samu näitajaid, mis ekraanil."
      },
      {
        "type": "h2",
        "text": "Kuidas eksportida"
      },
      {
        "type": "steps",
        "items": [
          "Ava Aruanded ja vali periood, näiteks oma vahemik 1.11 kuni 31.12 kahekuulise deklareerimisperioodi jaoks või kvartalivahemik.",
          "Puuduta kaarti Maks, et avada Maksuaruanne. Eksport hõlmab täpselt seda perioodi.",
          "Puuduta Maksuaruande paremas ülanurgas Ekspordi. Menüü loetleb vormingud ja selle iPadi viimati eksporditud vorming on märgitud.",
          "Vali vorming, näiteks Exceli tööraamat (XLSX), et avada täisekraanil eelvaade. CSV-failid kuvatakse tabelina ja Exceli tööraamatus saad lehtede vahel lülituda, näiteks vaadata esmalt lehte Summary.",
          "Puuduta eelvaate paremas ülanurgas jagamisnuppu, et fail salvestada või raamatupidajale saata. Eelvaate sulgemine viib tagasi Maksuaruande juurde."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Maksuaruanne avatud menüüga Ekspordi, mis loetleb failivormingud"
      },
      {
        "type": "p",
        "text": "Kui eksport ebaõnnestub, näitab rakendus teadet Faili ei saanud eksportida ja Proovi uuesti eksportida. Midagi ei kirjutata; ekspordi uuesti."
      },
      {
        "type": "h2",
        "text": "Eksporditavad vormingud"
      },
      {
        "type": "list",
        "items": [
          "Maksukokkuvõte (CSV): üks rida aruande rea kohta (iga maks ja määr, nullmääraga ja maksustamata), koos müügi, tagastuste ja netoga, nii enne maksu kui maksu osas.",
          "Kõik dokumendid (CSV): üks rida dokumendi kohta iga maksu all, koos kuupäeva ja kellaaja, tšeki numbri, dokumenditüübi (müük, tagastus või anuleerimise tühistusrida), kliendi nime, summade ja makseviisidega. Anuleerimine lisab anuleerimise kuupäevale tühistusrea.",
          "Päevakokkuvõte (CSV): kokkuvõte päevade kaupa ja seejärel teine tabel maksetest päeva ja makseviisi kaupa.",
          "Sisendmaksu andmed (CSV): kuvatakse ainult siis, kui aruandes on sisendmaksu kaart. Üks rida iga ostutellimuse ja kulu sisendmaksu rea kohta, koos tarnija, tarnija maksukohustuslase numbri ja arve numbriga.",
          "Exceli tööraamat (XLSX): lehed Summary, Documents ja Daily, mis vastavad kolmele müügi-CSV-le, ning lisaks Purchases, kui aruandes on sisendmaks. Summad on arvurakud ja iga veerg sobitub sisuga, nii et midagi ei avane äralõigatuna.",
          "PDF-aruanne: A4-formaadis aruanne rakenduse keeles poe nime, perioodi, maksurežiimi, valuuta ja aruande osadega. Austraalia, Uus-Meremaa, Singapuri ja Ühendkuningriigi poed saavad esimesena Deklaratsiooni lahtrid; sisendmaksu kaardid järgnevad, kui need on olemas. Eelvaates saad märgistusega (Markup) faili allkirjastada või sellele märkusi lisada ja märgistatud faili jagada; sama perioodi uuesti eksportimine kirjutab puhta koopia."
        ]
      },
      {
        "type": "h2",
        "text": "Vormistus raamatupidamistarkvara jaoks"
      },
      {
        "type": "p",
        "text": "CSV-failid on UTF-8 ja komaga eraldatud, püsivate ingliskeelsete veerunimedega igas rakenduse keeles, et raamatupidamistarkvara neid lugeda saaks. Summad kasutavad valuuta kümnendkohti ja miinusmärki, ilma sümboli ja tuhandete eraldajata (näiteks 80.97, -40.00 või 1000 jeeni poes). Kuupäevad on kujul 2026-11-03."
      },
      {
        "type": "p",
        "text": "Tekstilahtritele, mis algavad märgiga =, +, - või @ (näiteks klient nimega =1+1), lisatakse ette ', et arvutustabelid näitaksid teksti, mitte ei käivitaks valemit. Summadele seda ei lisata."
      },
      {
        "type": "p",
        "text": "Failinimed sisaldavad perioodi, näiteks tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx ja tax-report_2026-11-01_2026-11-30.pdf, nii et eri perioodide failid kunagi üksteist üle ei kirjuta."
      },
      {
        "type": "h2",
        "text": "Õigused ja privaatsus"
      },
      {
        "type": "p",
        "text": "Eksportida saab igas paketis, sh Lite. Töötajad vajavad õigust Aruanded, nagu Maksuaruande puhulgi."
      },
      {
        "type": "p",
        "text": "Sisendmaksuga failid küsivad esmalt heakskiitu, mida nende kaardid vajavad: Omahind ja kasum ostutellimuste jaoks ning Kasumiaruanne ja kulud kulude jaoks. See hõlmab faili Sisendmaksu andmed (CSV) ning Exceli tööraamatut (XLSX) ja PDF-aruannet, kui sisendmaksu kaardid kuvatakse. Tühistamine ei kirjuta midagi; kolm müügi-CSV-d ei küsi kunagi."
      },
      {
        "type": "note",
        "text": "Kõik dokumendid (CSV) sisaldab kliendinimesid ning sisendmaksu failid tarnijate nimesid ja maksukohustuslase numbreid. Jaga neid ainult inimestega, kes neid nägema peavad."
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
    "question": "Kuidas sisendmaksu (VAT või GST ostudelt) salvestada?",
    "keywords": [
      "sisendmaks",
      "käibemaks",
      "VAT",
      "GST",
      "sisendmaksu mahaarvamine",
      "sisendmaks ostutellimustelt",
      "sisendmaks kuludelt",
      "tarnija maksukohustuslase number",
      "ostutellimused",
      "maksuaruanne"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lülita jaotises Seaded → Poe andmed sisse Sisendmaksu mahaarvamine, et salvestada ostutellimustel ja kuludel tarnijate arvetel olev mahaarvatav maks. Mõlemad vormid saavad siis sisendmaksu jaotise, kuhu kopeerid mahaarvatava maksu iga arve pealt. Maksuaruanne loetleb selle kahel kaardil: Sisendmaks ostutellimustelt ja Sisendmaks kuludelt."
      },
      {
        "type": "h2",
        "text": "Sisendmaksu mahaarvamise sisselülitamine"
      },
      {
        "type": "steps",
        "items": [
          "Ava Seaded → Poe andmed ja leia maksukaart.",
          "Lülita jaotises Arvesta maksu sisse Sisendmaksu mahaarvamine."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Poe andmete maksukaart, kus Sisendmaksu mahaarvamine on sisse lülitatud ja selle all on vihje"
      },
      {
        "type": "p",
        "text": "Sisendmaksu mahaarvamine ilmub ainult siis, kui poes on vähemalt üks maks, ning uutes poodides ja pärast uuendamist on see algselt väljas. Lüliti salvestub kohe ja logitakse Tegevuslogis jaotise Maksuseaded all. Kui see on sees, sisesta ostuhinnad ja toodete omahinnad enne mahaarvatavat maksu; mahaarvamatu maks jääb omahinna sisse."
      },
      {
        "type": "note",
        "text": "Lüliti Sisendmaksu mahaarvamine on igas paketis, ostude jaoks (Ostud) on aga vaja paketti Standard või kõrgemat. Väljalülitamine peidab väljad uutelt kirjetelt; olemasolevad kirjed säilitavad oma sisendmaksu ja makstava summa ning varasemad maksuaruanded jäävad samaks."
      },
      {
        "type": "h2",
        "text": "Ostutellimused"
      },
      {
        "type": "steps",
        "items": [
          "Ava Ostud ja puuduta Uus ost.",
          "Sisesta ühikuhinnad enne mahaarvatavat maksu, seejärel keri lisakulude mööda alla jaotiseni Sisendmaks.",
          "Kontrolli Arve kuupäev, mis on vaikimisi tellimuse kuupäev, ning lisa soovi korral Arve number ja Tarnija maksukohustuslase number.",
          "Vali Määr jaoks poe maks või vali Muu määr… ja sisesta kuni 3 kümnendkohta, näiteks 9,975%.",
          "Kontrolli Enne maksu, mis algab tellimuse kogusummast enne maksu, ja kopeeri Mahaarvatav maks arvelt.",
          "Täiendavate määrade jaoks puuduta Lisa määr."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Ostutellimus, millel on jaotis Sisendmaks koos arve väljade, ühe määrareaga ja kogusummadega"
      },
      {
        "type": "p",
        "text": "Mahaarvatav maks algab tühjana; DingPOS ei arvuta seda kunagi määra järgi ja aktsepteerib arve ümardust. Näiteks jahu 10 × $300 pluss $100 saatmist arvel AB-12345678 kuupäevaga 30. juuni 2026, ühe 5% reaga, kus Enne maksu on $3,100 ja Mahaarvatav maks $155, annab Kokku enne maksu $3,100, Sisendmaks $155 ja Makstav summa $3,255, mis kuvatakse loendis, tellimuse üksikasjades ja ekraanil Tasumata arved. Tarnija maksukohustuslase number tarnijal täidab uued tellimused; salvestatud tellimused säilitavad oma numbri."
      },
      {
        "type": "p",
        "text": "Kui arve saabub hilja, ava vastuvõetud tellimus ja puuduta kaardil Sisendmaks Lisa sisendmaks või muutmiseks Muuda. Muutub ainult Makstav summa; laoseis, toote omahind ning makstud või tasumata olek jäävad samaks. Anuleeritud tellimustel on Sisendmaks kirjutuskaitstud ja enne uuendust salvestatud tellimusi tagantjärele ei täideta."
      },
      {
        "type": "h2",
        "text": "Kulud"
      },
      {
        "type": "p",
        "text": "Jaotises Kasum → Ühekordsed kulud lisab vorm summa alla Arve numbri ja sisendmaksu read. Jäta summaks summa enne mahaarvatavat maksu ja kopeeri ainult mahaarvatav maks. $1,100 kantseleitarvete arve puhul, millest $100 on mahaarvatav, sisesta $1,000 ja 10% rida $1,000 ja $100; Maksuga näitab $1,100 ja kasumiaruanne arvestab $1,000. Selle sisendmaks läheb tervikuna arvesse kulu kuupäeval ega järgi kunagi Arvestatud kuud ega jaotust."
      },
      {
        "type": "p",
        "text": "Jaotises Kasum → Püsikulud ava salvestatud kulu, näiteks üür või kommunaalkulud, ja puuduta jaotises Arved iga arve saabumisel Lisa arve, märkides arve kuupäeva, soovi korral arve numbri ja vähemalt ühe määrarea. Kui üür on $30,000 kuus ja juuli ning augusti arvetel on kummalgi 5% rida $30,000 ja $1,500, sisaldab juuli–septembri aruanne $3,000 sisendmaksu, samal ajal kui kasumiaruanne arvestab igal kuul endiselt $30,000."
      },
      {
        "type": "p",
        "text": "Sisendmaksu muudatuse salvestamisel varasemas kuus küsitakse Salvestada muudatus? ja hoiatatakse, et kuu maksuaruanne muutub, kui oled selle juba esitanud. Jooksva kuu muudatused ja mustandid salvestatakse küsimata."
      },
      {
        "type": "note",
        "text": "DingPOS ei arvuta impordi käibemaksu, pöördmaksustamist ega osalist mahaarvamist. Kopeeri mahaarvatav maks arvelt ja pane mahaarvamatu maks summasse enne maksu."
      },
      {
        "type": "h2",
        "text": "Maksuaruanne"
      },
      {
        "type": "p",
        "text": "Müügikaartide järel on kaks kaarti: Sisendmaks ostutellimustelt ja Sisendmaks kuludelt. Kumbki loetleb ühe rea määra kohta, rea Sisendmaksu pole ja kogusummad: Enne maksu, Mahaarvatav maks ja Maksuga. Kogusummad sisaldavad oste, millel sisendmaksu pole, kuigi mõni deklaratsioon arvestab ainult sisendmaksuga ridu."
      },
      {
        "type": "list",
        "items": [
          "Ostutellimused arvestatakse Arve kuupäeval või tellimuse kuupäeval, kui see on tühi.",
          "Anuleeritud ostutellimused arvestatakse negatiivse summana anuleerimise kuupäeval.",
          "Ühekordsed kulud arvestatakse tervikuna kulu kuupäeval.",
          "Püsikulu arved arvestatakse arve kuupäeval."
        ]
      },
      {
        "type": "p",
        "text": "Sisendmaks ostutellimustelt vajab õigust Omahind ja kasum ning Sisendmaks kuludelt õigust Kasumiaruanne ja kulud; töötajad, kellel õigust pole, näevad kaardi pealkirja all teadet Palu juhatajal heaks kiita. Kaart Maks näitab siiski ainult müükides arvestatud maksu, mitte kunagi sisendmaksu mahaarvamisega, sest Jaapani lihtsustatud meetod ja Ühendkuningriigi fikseeritud määr töötavad teisiti. Austraalia, Uus-Meremaa, Singapuri ja Ühendkuningriigi poed näevad neid summasid ka jaotises Deklaratsiooni lahtrid."
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
    "question": "Kus on maksuaruanne ja kuidas seda lugeda?",
    "keywords": [
      "maksuaruanne",
      "käibemaks",
      "VAT",
      "GST",
      "müügimaks",
      "aruanded",
      "Maks",
      "Müük ja maks määrade kaupa",
      "Makseviisi järgi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ava Aruanded ja puuduta kaarti Maks, et näha Maksuaruannet, mis loetleb müügi ja maksu määrade kaupa perioodil, mida Aruanded näitab. Kopeeri need näitajad käibemaksu (VAT), GST või müügimaksu deklaratsiooni või saada need raamatupidajale. Hilisemad maksumuudatused ei muuda kunagi salvestatud dokumentide näitajaid."
      },
      {
        "type": "h2",
        "text": "Maksuaruande avamine"
      },
      {
        "type": "steps",
        "items": [
          "Ava Aruanded ja vali periood, näiteks See kuu või oma vahemik.",
          "Leia teisest reast pärast kaarti Allahindlused kokku kaart Maks.",
          "Puuduta kaarti Maks või Maksuaruanne ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Aruanded perioodil See kuu, kaart Maks ja selle jalus Maksuaruanne ›"
      },
      {
        "type": "p",
        "text": "See kaart on ainus sissepääs. Selle alapealkiri nimetab perioodil arvestatud maksud, suurima summaga esimesena: kaks nimeliselt, kolm või enam näiteks kujul 3 maksu, sh PST 7%. Päis näitab Aruannete perioodi (See kuu · 1.11 – 30.11) ilma perioodivalija või eelmise kuu otseteeta, sest deklareerimisperioodid on erinevad (Taiwanil kaks kuud, Austraalias kvartal, Jaapanis aasta)."
      },
      {
        "type": "p",
        "text": "Maksuta poed, kus perioodis pole ka maksustatud müüke, kaarti Maks ei näe; perioodid ilma dokumentideta näitavad Aruannete tühja olekut. Kustutatud maksud jätavad kaardi alles perioodideks, kus on nende alusel tehtud müüke."
      },
      {
        "type": "note",
        "text": "Kaart, aruanne ja kõik ekspordid on igas paketis, sh Lite ja prooviperioodil. Töötajad vajavad õigust Aruanded; heakskiitu vajavad rollid näevad kuni juhataja heakskiiduni heakskiidu teadet."
      },
      {
        "type": "h2",
        "text": "Aruande lugemine"
      },
      {
        "type": "p",
        "text": "Austraalia, Uus-Meremaa, Singapuri ja Ühendkuningriigi poed näevad esimesena Deklaratsiooni lahtreid."
      },
      {
        "type": "p",
        "text": "Müük ja maks määrade kaupa loetleb ühe rea määra kohta: kõrgeim esimesena, seejärel 0% nullmääraga ja viimasena Maksustamata (tooted ilma maksuta). Veerud on Müük, Tagastused ja anuleerimised ning Neto, igaühes Enne maksu ja Maks; nullmääraga ja Maksustamata ridadel maksurida pole. Iga poe maks saab rea ka siis, kui müüki pole. Ümbernimetamine jätab alles ühe rea; määra muutus lisab uue."
      },
      {
        "type": "p",
        "text": "Kokku näitab Müük enne maksu, Maks ja Müük maksuga. Kahe või enama maksu korral selgitab märge, et ühel müügil võib olla mitu maksu, mistõttu ridade müüki ei saa kokku liita; Müük enne maksu arvestab iga müüki ühe korra. Ühendkuningriigi kvartali puhul võib VAT 20% näidata Enne maksu £1,000 ja Maks £200, Nullmääraga 0% £300 ja Maksustamata £50: Kokku annab Müük enne maksu £1,350, Maks £200, Müük maksuga £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Maksuaruanne, kus on read Müük ja maks määrade kaupa ning all Kokku"
      },
      {
        "type": "list",
        "items": [
          "Makseviisi järgi loetleb nende dokumentide maksed perioodi lõpu seisuga, tasumata summad kui Laekumata nõuded ja sularaha ümardus real Sh sularaha ümardus … sularaharea sees.",
          "Müügina arvesse võtmata kuvatakse ainult kinnipeetud käsirahade puhul: see loetleb Kinnipeetud käsirahad ja alapealkirja, mis soovitab deklareerimist raamatupidajaga kontrollida; see ei lisandu ei müügile ega maksule.",
          "Poed, kus Sisendmaksu mahaarvamine on sees või kus perioodis on sisendmaks salvestatud, näevad ka kaarte Sisendmaks ostutellimustelt ja Sisendmaks kuludelt."
        ]
      },
      {
        "type": "h2",
        "text": "Millisel päeval iga dokument arvesse läheb"
      },
      {
        "type": "p",
        "text": "Puuduta ⓘ jaotise Müük ja maks määrade kaupa kõrval:"
      },
      {
        "type": "list",
        "items": [
          "Anuleerimine arvestatakse perioodis, mil see anuleeriti, negatiivse summana, nii et juba esitatud periood ei muutu. Aruanded eemaldavad selle hoopis müügi perioodist.",
          "Tagastus arvestatakse oma kuupäeval. Vahetuse puhul lähevad uued tooted arvesse müügina ja tagastatud tooted tagastustena.",
          "Ettetellimus arvestatakse kättesaamise päeval; müük arvele müügi päeval."
        ]
      },
      {
        "type": "p",
        "text": "Müük 30.10, mis anuleeriti 2.11, jääb oktoobri müügi hulka ja ilmub novembri veerus Tagastused ja anuleerimised negatiivse summana. Müügi arvele hilisem tasumine seda ei liiguta."
      },
      {
        "type": "h2",
        "text": "Kogutud maks ja Aruannete kogusummad"
      },
      {
        "type": "p",
        "text": "Kaart Maks võrdub Maksuaruande Maksu kogusummaga. See erineb Aruannete jaotise Müügitulust brutokasumini reast Maks ainult perioodidevaheliste anuleerimiste puhul, sest Aruanded võtavad anuleeritud müügi välja selle algsest perioodist."
      },
      {
        "type": "note",
        "text": "Maksuaruanne näitab müükides kogutud maksu, mitte kunagi tasumisele kuuluvat maksu (müügimaks miinus sisendmaks), sest kõik riigid ei arvuta seda nii, näiteks Jaapani lihtsustatud meetod või Ühendkuningriigi fikseeritud määra skeem (Flat Rate Scheme)."
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
    "question": "Millised näitajad lähevad minu BAS-i, GST või VAT deklaratsiooni lahtritesse?",
    "keywords": [
      "Deklaratsiooni lahtrid",
      "Maksuaruanne",
      "Aruanded",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT-deklaratsioon",
      "Sisendmaksu mahaarvamine"
    ],
    "content": [
      {
        "type": "p",
        "text": "Austraalia, Uus-Meremaa, Singapuri või Ühendkuningriigi poodide jaoks avaneb Maksuaruanne lahtritega Deklaratsiooni lahtrid, mis näitab iga lahtrit ja summat samast aruandest. See hõlmab igas paketis Austraalia BAS · Simpler BAS, Uus-Meremaa GST101A, Singapuri GST F5 ja Ühendkuningriigi VAT-deklaratsiooni."
      },
      {
        "type": "h2",
        "text": "Deklaratsiooni lahtrite avamine"
      },
      {
        "type": "steps",
        "items": [
          "Ava Aruanded.",
          "Puuduta kaarti Maks, et avada Maksuaruanne."
        ]
      },
      {
        "type": "p",
        "text": "Deklaratsiooni lahtrid on esimene kaart, jaotise Müük ja maks määrade kaupa kohal, ja selle alapealkiri nimetab deklaratsiooni. Iga summa tuleb samast aruandest, sentidega, ning midagi ei arvutata ümber. Eksporditud PDF-aruanne algab sama kaardiga. Poed, mis seadistati enne, kui rakendus riiki salvestas, loetakse valuuta järgi (AUD, NZD, SGD või GBP); teistel poodidel kaarti Deklaratsiooni lahtrid pole."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Maksuaruande ülaosas olev kaart Deklaratsiooni lahtrid, mis näitab Ühendkuningriigi VAT-deklaratsiooni lahtreid 1, 4, 6 ja 7"
      },
      {
        "type": "h2",
        "text": "Austraalia BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: müük GST-ga, sh GST-vaba ja maksustamata müük; vasta küsimusele „Does the amount shown at G1 include GST?“ vastusega Yes",
          "1A GST on sales: müügilt arvestatud maks",
          "1B GST on purchases: mahaarvatav maks ostutellimustelt ja kuludelt"
        ]
      },
      {
        "type": "p",
        "text": "ATO nõuab täisdollareid: jäta BAS-is sendid ära, ära ümarda kunagi üles."
      },
      {
        "type": "h2",
        "text": "Uus-Meremaa GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: müük GST-ga, sh nullmääraga müük; maksustamata müüki ei arvestata",
          "Box 6 Zero-rated supplies: nullmääraga müük",
          "Box 11 Total purchases and expenses: GST-ga ostutellimused ja kulud, GST kaasa arvatud; sisendmaksuta ja nullmääraga oste ei arvestata"
        ]
      },
      {
        "type": "p",
        "text": "myIR arvutab lahtrid Box 8 ja Box 12 kui 3/23, mis võib aruande maksust erineda mõne sendi võrra."
      },
      {
        "type": "h2",
        "text": "Singapuri GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: maksustatud müük enne maksu",
          "Box 2 Total value of zero-rated supplies: nullmääraga müük; nullmääraga võivad olla ainult eksport ja rahvusvahelised teenused",
          "Box 5 Total value of taxable purchases: GST-ga või nullmääraga ostutellimused ja kulud enne maksu; sisendmaksuta oste ei arvestata",
          "Box 6 Output tax due: müügilt arvestatud maks",
          "Box 7 Input tax and refunds claimed: mahaarvatav maks ostutellimustelt ja kuludelt"
        ]
      },
      {
        "type": "h2",
        "text": "Ühendkuningriigi VAT-deklaratsioon"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: müügilt arvestatud maks",
          "Box 4 VAT reclaimed on purchases and other inputs: mahaarvatav maks ostutellimustelt ja kuludelt",
          "Box 6 Total value of sales and all other outputs excluding any VAT: müük enne maksu, sh nullmääraga, vabastatud ja maksustamata müük",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: ostutellimused ja kulud enne maksu, sh sisendmaksuta ostud; lahuta kõik kajastatud palgad ja äriruumide kinnisvaramaksud (Ühendkuningriigi business rates)"
        ]
      },
      {
        "type": "p",
        "text": "Tavapärase käibemaksuarvestuse jaoks; fikseeritud määra skeemi (Flat Rate Scheme) puhul arvutatakse Box 1 ja Box 6 teisiti. Ühendkuningriigis tuleb käsirahalt käibemaks tasuda selle laekumisel; DingPOS kajastab ettetellimuse aruandes alles siis, kui see kätte saadakse."
      },
      {
        "type": "p",
        "text": "Näide Ühendkuningriigi kvartalist: £1,000 VAT 20% müüki enne maksu (maks £200), £300 nullmääraga, £50 maksustamata, ostutellimused £400 pluss £80 VAT ning kulud £250 ilma sisendmaksuta annavad Box 1 £200, Box 4 £80, Box 6 £1,350 ja Box 7 £650."
      },
      {
        "type": "h2",
        "text": "Tühjad lahtrid ja töötajate juurdepääs"
      },
      {
        "type": "p",
        "text": "Lahtrid, mille maksuamet ise välja arvutab, ja võlgnetavad summad jäetakse välja (Ühendkuningriigi Box 3 ja 5; Singapuri Box 3, vabastatud müük). Uus-Meremaal ja Singapuris ei kuulu maksustamata müük ühtegi lahtrisse; kui sellelt oleks pidanud maksu arvestama, küsi nõu oma raamatupidajalt."
      },
      {
        "type": "p",
        "text": "Sisendmaksu lahtrid (AU 1B, NZ 11, SG 5 ja 7, UK 4 ja 7) vajavad Sisendmaksu mahaarvamist, vastasel juhul näitavad need — ja Sisendmaksu pole registreeritud, mitte kunagi 0. Ühendkuningriigi Box 7 vajab nii kaarti Sisendmaks ostutellimustelt kui ka Sisendmaks kuludelt; ainult ostutellimused täidavad Box 4 ja jätavad Box 7 väärtusele —."
      },
      {
        "type": "p",
        "text": "Töötajad, kellel puudub õigus Kasumiaruanne ja kulud või Omahind ja kasum, ei näe mõlema kaardi summat liitvaid lahtreid, kuni juhataja need heaks kiidab; selleks on nupp Palu juhatajal heaks kiita."
      },
      {
        "type": "note",
        "text": "Arvutatud müügi- ja arvekuupäevade järgi; DingPOS ei jälgi maksekuupäevi. Kui deklareerid kassa- või laekumispõhiselt, kohanda neid summasid."
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
          "Ulatus: kas ostukorvi tooted kuuluvad kampaania toote- või kategooriapiiridesse? Kas toote juures on sisse lülitatud Jäta kampaaniatest välja (kohapealse hinnaga tooted on vaikimisi)? Kas ostusumma lävi on täidetud?",
          "Sihtrühm: kas kampaania on piiratud liikmetaseme või sünnikuuga? Kas liige valiti kassas?",
          "Kasutuspiirangud: kas üldine kasutuslimiit või selle kliendi limiit on täis saanud? Sünnikuu kampaania kliendipõhine piirang loetakse kalendriaasta kaupa.",
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
        "text": "Ava Seaded → Püsikliendiprogramm ja määra kaks reeglit: mitu punkti saab iga kulutatud X kohta ning mitu punkti tuleb kasutada, et saada M allahindlust (soovi korral koos ühe müügi kohta kehtiva kasutuslimiidiga). Uutele liikmetele saad automaatselt anda ka tervitusbonuse. Uutes poodides on punktid algul välja lülitatud: lülita sisse Luba püsikliendiprogramm ja lisa vähemalt üks reegel. Kui lüliti on sees, aga reeglit pole, hoiatab rakendus: „Teenimis- ega lunastusreeglit pole veel seadistatud, seega müükidega punkte ei teenita ega lunastata.“"
      },
      {
        "type": "p",
        "text": "Lisa müügile liige ostukorvis või kassaekraanil, siis punktid kogunevad automaatselt; punktide kasutamiseks sisesta kasutatavate punktide arv. Müügi lõpuekraanil näed teenitud punkte ja uut saldot, näiteks „+22 p · kokku 122 p“; müügil arvele või täielikult tasumata ettetellimusel lisatakse punktid alles raha laekumisel ning ekraanil on kirjas „lisatakse tasumisel“ või „lisatakse kättesaamisel tasudes“. Müügi anuleerimine võtab sellest teenitud punktid tagasi ja tagastab kasutatud punktid."
      },
      {
        "type": "p",
        "text": "Punkte saad käsitsi lisada või maha arvata (näiteks kui ost jäi arvestamata): puuduta kliendi andmetes kaardil Punktid nuppu Korrigeeri, vali Lisa või Arva maha, sisesta punktide arv ja soovi korral põhjus (kuni 100 tähemärki). Kliendi punktide arvust rohkem maha arvata ei saa. Iga korrigeerimine jääb punktide ajalukku koos saldoga enne ja pärast, põhjuse ja tegijaga."
      },
      {
        "type": "note",
        "text": "Punktide käsitsi korrigeerimine lisandus versioonis v3.5. Pro paketis küsitakse kinnitamisel juhataja või omaniku PIN-koodi nende rollide puhul, mille jaoks vajab Punktide käsitsi korrigeerimine heakskiitu (Töötaja rollil on see vaikimisi nii)."
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
        "text": "Taasta vajutamisel avaneb kõigepealt eelvaade: selle iPadi ja pilvekoopia toodete, müükide ja klientide arvud kõrvuti ning kõik müügid, mille taastamine eemaldaks. Selle iPadi andmed ei muutu enne, kui vajutad nuppu Kinnita. DingPOS-i uuema versiooniga tehtud pilvekoopia puhul palutakse enne rakendus värskendada. Ka toodete fotod taastatakse."
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
        "type": "p",
        "text": "Esimesel käivitamisel pärast uuendust või vanemas versioonis tehtud varunduse taastamist võib kõigepealt kuvada teadet „Andmeid uuendatakse…“. See tähendab, et sinu poeandmed viiakse üle uuemasse vormingusse – mida rohkem andmeid, seda kauem see aega võtab. Kui uuendus on valmis, avaneb rakendus ise. Rakendus ei ole hangunud."
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
      "konto lukus"
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
        "text": "Õigusel on kaks võimalikku olekut: Lubatud või Vajab heakskiitu – midagi pole täielikult keelatud. Kui töötaja jõuab toiminguni, mis vajab heakskiitu, valib seda tohtiv kolleeg oma nime ja sisestab oma PIN-koodi, et toiming läbi lasta."
      },
      {
        "type": "list",
        "items": [
          "Toimingud (käsitsi laoseisu korrigeerimine, käsitsi punktide korrigeerimine, toodete haldus, kassas ülempiirist suurema allahindlusega müük): üks heakskiit katab selle ühe toimingu.",
          "Vaated (omahind ja kasum, Aruanded, Kasumiaruanne ja kulud, Seaded, varundus ja taastamine): heakskiit avab vaate, kuni operaator vahetub või rakendus läheb taustale.",
          "Allahindluse ülempiir kehtib käsitsi allahindlustele ja seda kontrollitakse kassas üks kord; automaatsed kampaaniad ja punktide kasutamine sellesse arvesse ei lähe."
        ]
      },
      {
        "type": "p",
        "text": "Tehaseseaded: Juhatajatel on lubatud kõik peale varunduse ja taastamise ning Kasumiaruande ja kulude, allahindluse ülempiiri neil pole; Töötajatel vajab kõik heakskiitu ja ülempiir on 10%. Omanikul on alati kõik lubatud ja seda ei saa muuta. Muutmiseks ava Töötajad → Rollide õigused, puuduta Muuda ja salvesta üks kord – muudatus jõustub kohe kõigile."
      },
      {
        "type": "note",
        "text": "Anuleerimised, tagastused, müük arvele ja ostutellimused on teadlikult õiguste seadistusest välja jäetud; nende puhul salvestatakse ainult see, kes neid käsitles. Hiljem saad neid vaadata tegevuslogist."
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
      "laokorrektuur",
      "kustutatud toode",
      "heakskiidud",
      "logi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kasuta tegevuslogi. Lehel Töötajad puuduta paremas ülanurgas Tegevuslogi ja sisesta omaniku PIN-kood, et näha poe tundlikke toiminguid uuemast vanemani: anuleerimised, tagastused, laokorrektuurid ja ümberloendused, käsitsi punktide korrigeerimised, heakskiidud, töötajate ja õiguste muudatused, omaniku PIN-koodi muutmised, maksuseaded, toodete hinna- ja omahinnamuudatused ning toodete kustutamised. Tavalisi müüke kassas seal ei kuvata."
      },
      {
        "type": "list",
        "items": [
          "Iga kirje näitab, mida see puudutas, kes mida ja millal tegi ning tulemust – näiteks „M hind $390 → $350“. Anuleerimise, tagastuse, laokorrektuuri või punktide korrigeerimise põhjus on kirje kolmandal real.",
          "Filtreeri töötaja (ka deaktiveeritud), toimingu tüübi ja ajavahemiku järgi: Täna / See nädal / See kuu.",
          "Puuduta kirjet, mis viitab müügile, tootele või kliendile, et avada selle üksikasjad.",
          "Müügi üksikasjade lehel, toote üksikasjade lehel ja iga töötaja lehel on oma kirjete loend, kus kuvatakse ainult selle müügi, toote või töötajaga seotud kirjed.",
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
        "text": "Alates esmasest installimisest saad 30 päeva kasutada kõiki Pro paketi funktsioone, sealhulgas töötajakontosid, õigusi ja tegevuslogi. Kontot pole vaja luua."
      },
      {
        "type": "p",
        "text": "Mis tahes paketi tellimine prooviperioodi ajal lõpetab prooviperioodi kohe ning edaspidi kehtib sinu ostetud pakett. Pärast prooviperioodi jäävad Pro funktsioonid, näiteks töötajakontod ja tegevuslogi, kättesaadavaks vaid Pro tellimusega. Täiustatud aruanded seda ei vaja: alates versioonist v3.4 sisaldab neid iga pakett."
      },
      {
        "type": "p",
        "text": "Viimase 7 päeva jooksul ja viimasel päeval tuletab rakendus sulle kummalgi korral üks kord meelde, mitu päeva on jäänud, et kassa peatub prooviperioodi lõppedes ja et sinu andmed säilivad."
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
        "text": "Kõik kolm paketti sisaldavad täisfunktsionaalset kassat, tooteid, müüke (koos anuleerimiste, tagastuste ja vahetustega), aruandeid (alates versioonist v3.4 ka täiustatud aruanded ja kuine kasumiaruanne, alates versioonist v3.6 maksuaruanne ja selle eksport) ja pilvevarundust. Need erinevad poe juhtimise tööriistade poolest:"
      },
      {
        "type": "list",
        "items": [
          "Lite: ühele inimesele, kes peab turulettu ning vajab kassat ja tooteid.",
          "Standard: lisab kampaaniad, allahindluse eelseadistused, püsikliendipunktid ja tasemed, laoseisu jälgimise, ostutellimused, müügi arvele, ettetellimused ja makseviiside teenustasu määrad.",
          "Pro: lisab töötajakontod ja õigused, heakskiidu, tegevuslogi ja taastamise kirjed – töötajatega poodidele."
        ]
      },
      {
        "type": "p",
        "text": "Oled juba Standard paketis? Uuenda Pro paketile tellimuse lehel: arveldustsükkel jääb samaks, paketiuuendus jõustub kohe ja Apple arvutab hinnavahe proportsionaalselt. Üleminek Pro paketilt tagasi Standardile jõustub pikendamise hetkel. Hinnad on rakenduses nähtaval ning pakette saad võrrelda meie lehel Hinnad."
      },
      {
        "type": "note",
        "text": "Madalamale paketile üleminek ei kustuta kunagi andmeid. Sinu paketis mittesisalduvate funktsioonide kasutamine peatub, andmed jäävad alles ning paketi uuesti tellimisel saad neid funktsioone jälle kasutada."
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
        "text": "Tellimusi hallatakse App Store'i rakendusesiseste ostude kaudu – paketid ja hinnad on näha rakenduses. Makseid töötleb Apple; meie ei näe kunagi sinu makseandmeid."
      },
      {
        "type": "list",
        "items": [
          "Tühistamine: halda seda seadme rakenduses Seaded → Apple'i konto → Tellimused. Tühista vähemalt 24 tundi enne praeguse perioodi lõppu, et tellimus ei pikeneks.",
          "Taastamine: pärast seadme vahetamist või uuesti installimist puuduta DingPOS-i tellimuse lehel „Taasta ost“.",
          "Paketi vahetamine: vali uus pakett DingPOS-i tellimuse lehel. Paketiuuendused (Standard paketilt Pro paketile, kuumaksult aastamaksele) jõustuvad kohe ja Apple arvutab hinnavahe proportsionaalselt; madalamale paketile üleminek jõustub pikendamise hetkel."
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
        "text": "Looge kampaania liigiga „Punktide kordaja“ ja määrake kordaja (täisarv, vähemalt 2). Soovi korral lisage ostusumma lävi (nt 500 € eest → topeltpunktid) ja ajakava (nt ainult laupäeviti)."
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
        "text": "Loo esmalt tasemed jaotises Seaded → Liikmetasemed (nt Kuld) ja suuna kampaania seejärel sellele tasemele. Sünnipäevapakkumise puhul vali sihtrühmaks Sünnikuu ja täida Piirang kliendi kohta."
      },
      {
        "type": "list",
        "items": [
          "Pakkumise käivitumiseks peab kassas olema valitud liige – sobivust hinnatakse hetkel valitud liikme järgi.",
          "Sünnipäeva sobivus põhineb liikme sünnikuul, seega täida sünnipäeva väli; liikmeid, kellel seda pole, ei käsitleta kunagi sünnipäevalistena.",
          "Sünnikuu kampaania vajab kliendipõhist piirangut, mida loetakse kalendriaasta kaupa: piirang 1 tähendab, et iga klient saab seda kasutada kord aastas, ja järgmisel aastal algab uuesti. Ilma selleta ei saa salvestada.",
          "Automaatset taseme tõusu hinnatakse kassa lõpetamisel; kui müük anuleeritakse, võetakse selle põhjustatud tõus automaatselt tagasi."
        ]
      },
      {
        "type": "note",
        "text": "Enne versiooni v3.2 kuvas sünnikuu kampaania vea ega salvestunud ka siis, kui kliendipõhine piirang oli täidetud. Kui see juhtub sinuga, uuenda DingPOSi App Store'is."
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
        "text": "Saadaval on kolm kombineeritud pakkumise liiki: kingitus ostuga (osta A, saa B), tasuline lisatoode (maksa X € lisaks, et saada Y) ja komplektihind (ükskõik millised N toodet hinnaga X €). Kingitused ja tasulised lisatooted ootavad kassapidaja kinnitust; komplektihinnad rakenduvad automaatselt."
      },
      {
        "type": "p",
        "text": "Kingitused ja tasulised lisatooted ei muuda ostukorvi kunagi omal käel. Kui tingimused on täidetud, ilmub kassaekraanile soovitusriba ning ostukorv muutub alles siis, kui kassapidaja puudutab riba kingitusenuppu või +-nuppu („Vali kingitus“ või „Vali lisatoode“). See on teadlik valik, sest kingitused puudutavad füüsilist laoseisu: keegi peab kinnitama, et toode on olemas ja klient soovib seda."
      },
      {
        "type": "list",
        "items": [
          "Pärast riba ✕ („Keeldu“) puudutamist sama soovitus selles ostukorvis enam ei ilmu; uus või tühjendatud ostukorv pakub seda uuesti.",
          "Kui ostukorv enam tingimustele ei vasta (näiteks eemaldati toode, mis kingituse käivitas), eemaldatakse kingitus või lisatoode automaatselt ja ülaosas kuvatakse teade; see ei lähe kasutuskorra hulka (alates versioonist v3.6).",
          "Alates versioonist v3.4 ei takista ootel pakkumised kassas maksmist: kollane rida maksenupu all, näiteks „1 ootel pakkumine ei rakendu“, näitab, mitu pakkumist välja jääb (puuduta rida, et näha millised), ja müük läheb läbi ilma nendeta. Et kassa ootaks nagu varem, lülita jaotises Seaded → Seadme eelistused sisse Käsitle pakkumised enne kassat; see kehtib ainult sellel iPadil.",
          "Kingituse ja lisatoote ridu ei saa muud rahalised kampaaniad edasi alandada ning need ei lähe arvesse teiste kampaaniate läviväärtuste täitmisel."
        ]
      },
      {
        "type": "p",
        "text": "Komplektihindu rakendatakse automaatselt alates versioonist v2.4: kui ostukorvist saab komplekti moodustada, rühmitab DingPOS tooted komplektiks ja lisab selle kogusummasse ilma kinnitust küsimata; komplekte ei saa poolitada."
      },
      {
        "type": "list",
        "items": [
          "Komplekt moodustub ainult siis, kui see muudab ostukorvi odavamaks. Võrdse hinnaga toodete seast rühmitatakse esimesena allahindluseta tooted ning juba allahinnatud toodetele jääb nende allahindlus alles.",
          "See, millised tooted kokku rühmitatakse, sõltub ainult ostukorvi sisust, mitte skannimise järjekorrast.",
          "Iga komplekti kuuluv toode näitab oma osa komplekti allahindlusest ning iga rea summa on pärast allahindlusi.",
          "Kassas rühmitatakse komplektid uuesti värskeimate hindadega; kui tulemus muutub, palutakse sul uus kogusumma kinnitada."
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
    "question": "Kas maksete töötlemine integreeritakse DingPOS-iga?",
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
        "text": "Veel mitte. E-arvete ja tšekkide printimise testimiseks ning arendamiseks tuleb osta arve- ja tšekiprintereid, mis on märkimisväärne kulu. Väikese meeskonnana võtame selle plaani siis, kui kasutajaid on rohkem ja tulu stabiilne."
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
        "text": "Vöötkoodi skannimine kaameraga toote lisamisel on juba toetatud. Füüsilisi lugejaid (USB / Bluetooth) ametlikult veel ei toetata. Nagu teiste riistvarafunktsioonide puhul, tuleb ka nende testimiseks ja arendamiseks seadmeid osta. Plaanime seda kasutajaskonna kasvades."
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
        "text": "Alates versioonist v3.4 näitab vahekaart Kasum iga kuu puhaskasumit pärast toodete omahinda, tasusid ja kulusid — vaata „Kuidas näha, kui palju ma iga kuu tegelikult teenisin?“ Alates versioonist v3.6 saab maksuaruandest eksportida perioodi (näiteks See kuu) CSV-failina, Exceli tööraamatuna või PDF-aruandena raamatupidajale: müük, maks, iga makseviisi kaudu laekunud summa ja laekumata nõuded. Kasumit ja teisi aruandeid eksportida veel ei saa, kuid kõik andmed kontrollimiseks on rakenduses juba olemas:"
      },
      {
        "type": "list",
        "items": [
          "Vali Aruanded all periood See kuu, et näha kuu müügitulu, laekunud raha, kasumit ja maksete jaotust.",
          "Tarnijate kuutingimustega ostud koonduvad jaotises Ostmine alla Tasumata arved, kus saab terve kuu korraga tasuda.",
          "Klientidele arvele müüdud kaupade nõuded koonduvad jaotises Müügid → Nõuded, kus saab terve kuu eest korraga tasuda."
        ]
      },
      {
        "type": "p",
        "text": "Kui vajad kuist tasumisaruannet, mida saaks eksportida või printida ja mis läheb maksuaruande sisust kaugemale, kirjuta meile, milliseid välju vajad. Arendust seame tähtsuse järjekorda päringute arvu järgi."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
