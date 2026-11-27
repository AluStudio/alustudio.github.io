// Generated from en and the hu translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync hu`, then `npm run l10n -- dingpos apply hu`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Első lépések",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Fizetés",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Rendelések és visszavételek",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Termékek, készlet és beszerzés",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Riportok",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Akciók és hűségprogram",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Mentés és adatok",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Munkatársak és jogosultságok",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Előfizetés és számlázás",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Akciók beállítási útmutatói",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Hamarosan",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Hogyan állítom be az üzletemet a DingPOS-ban?",
    "keywords": [
      "beállítás",
      "első lépések",
      "indulás",
      "üzletnyitás",
      "beállítási varázsló",
      "kezdés",
      "ország",
      "pénznem",
      "adók"
    ],
    "content": [
      {
        "type": "p",
        "text": "A DingPOS első megnyitásakor a beállítási varázsló két lépésben, néhány perc alatt beállítja az üzletét:"
      },
      {
        "type": "steps",
        "items": [
          "Válassza ki az országát vagy régióját. A lista élén az az ország vagy régió áll, ahol az iPad van, utána a leggyakoribb piacok; alattuk mind a 175 ország és régió megtalálható, ahol a DingPOS elérhető az App Store-ban. Az ország neve az app nyelvén vagy angolul is kereshető. A választás kitölti a pénznemet, az adókat és az adózási módot.",
          "Az „Az Ön üzlete” képernyőn adja meg az üzlet nevét, ha szeretné, adjon hozzá logót, és ellenőrizze a pénznemet, az adókat és az adózási módot (adóval együtt / adó nélkül). A pénznem alapból az országé; koppintson rá, hogy 130 pénznem közül válasszon. Az adók listája az Ön országának alapértelmezett adóit tartalmazza: átnevezheti őket, módosíthatja az adókulcsukat, törölhet egyet, vagy az Adó hozzáadása gombbal felvehet egy újabb sort. Egy British Columbia-beli üzlet például az első sort „GST 5”-re módosítja, és hozzáad egy „PST 7” sort."
        ]
      },
      {
        "type": "p",
        "text": "Koppintson a Folytatás gombra, és megjelenik a „Ding! Az üzlete készen áll.” üzenet. A DingPOS két fizetési módot is létrehoz: Készpénz és Bankkártya. Ezután vegye fel a termékeit a Termékek alatt, és kezdhet is eladni."
      },
      {
        "type": "note",
        "text": "A pénznem a beállítás után nem módosítható; az adók és az adózási mód később egyaránt módosíthatók a Beállítások → Üzletadatok menüpontban. Az Egyesült Államokban, Kanadában, Brazíliában és Mikronéziában az adókulcs az államtól, tartománytól vagy várostól függ, ezért az adókulcs mezője üresen indul, és a továbblépéshez meg kell adnia az Ön által felszámított adókulcsot. Az adókulcsnak 0-nál nagyobbnak kell lennie: az az üzlet, amely nem számít fel adót, törli a sort. Németországban, Franciaországban, Olaszországban és más európai országokban a lista a helyi kiskereskedelemben szokásos kedvezményes adókulcsokat is tartalmazza, a helyi adónéven, például Németországban „MwSt. 19%” és „MwSt. 7%”; a kedvezményes adókulcsokat alapból nem alkalmazza az új termékekre, ezért termékenként kapcsolja be őket. A 175 országos lista és a pénznemválasztás a 3.2-es verzióban jelent meg; a korábbi verziók 15 országot kínáltak."
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
    "question": "Működik a DingPOS internet nélkül?",
    "keywords": [
      "offline",
      "internet nélkül",
      "wifi",
      "hálózat",
      "nincs internet",
      "piac"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. A DingPOS internetkapcsolat nélkül is működik – a fizetés, a termékkezelés, a készlet és a jelentések mind helyben, az iPaden futnak, hálózat nélkül. Az éjszakai piacokon, pop-up boltokban és más Wi-Fi nélküli helyszíneken is tökéletesen használható."
      },
      {
        "type": "p",
        "text": "Csak két dologhoz kell kapcsolat: a felhőalapú biztonsági mentéshez (feltöltés a saját iCloud-, Google Drive- vagy Dropbox-fiókjába) és az előfizetés állapotának ellenőrzéséhez."
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
    "question": "Kell fiókot létrehoznom a DingPOS használatához?",
    "keywords": [
      "fiók",
      "regisztráció",
      "bejelentkezés",
      "fiók létrehozása",
      "adatvédelem"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nem. A DingPOS-nak nincs fiókrendszere – töltse le, és kezdhet is eladni. A termékei, rendelései és vevőadatai mind az iPaden maradnak. Csak akkor jutnak el hozzánk, ha a Beállításokból támogatási bejelentést küld, amely csatolja az üzlete adatainak másolatát, hogy újra elő tudjuk állítani a problémát."
      },
      {
        "type": "p",
        "text": "Ha bekapcsolja a felhőalapú biztonsági mentést, a saját felhőfiókjába (iCloud, Google Drive vagy Dropbox) jelentkezik be. A biztonsági mentések az Ön fiókjában vannak – mi nem férünk hozzájuk."
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
    "question": "Milyen eszközökön fut a DingPOS?",
    "keywords": [
      "eszköz",
      "iphone",
      "mac",
      "ipad",
      "rendszerkövetelmények",
      "verzió"
    ],
    "content": [
      {
        "type": "p",
        "text": "A DingPOS jelenleg az iPadOS 17.4-es vagy újabb verzióját futtató iPadeken működik, elsősorban fekvő tájolásra tervezve."
      },
      {
        "type": "p",
        "text": "Az iPhone és a Mac egyelőre nem támogatott. Ha szeretné, hogy más eszközt is támogassunk, írjon nekünk, és meséljen a felhasználási módjáról."
      },
      {
        "type": "note",
        "text": "Minden iPad, amelyen fut az iPadOS 17, frissíthető a 17.4-es verzióra, így egyetlen modell sem marad ki. Az iPadOS 17.0–17.3 rendszeren maradt iPaden először rendszerfrissítést kell végezni a Beállítások → Általános → Szoftverfrissítés menüpontban, mielőtt telepíthető rá a DingPOS 3.5-ös vagy újabb verziója."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Megváltoztatható a pénznem, az adókulcs vagy az adózási mód a beállítás után?",
    "keywords": [
      "pénznem",
      "adózási mód",
      "módosítás",
      "zárolt",
      "adókulcs",
      "adók",
      "adóval együtt",
      "adó nélkül"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az adó módosítható, a pénznem nem. Az adókat és az adózási módot is a Beállítások → Üzletadatok képernyő Adó kártyáján lehet módosítani, és a változás csak a későbbi eladásokra vonatkozik: a korábbi rendelések, visszavételek és jelentések megtartják a rögzített adóösszegeket és adózási módot."
      },
      {
        "type": "list",
        "items": [
          "Adók: felvehet egyet, átnevezheti, módosíthatja a kulcsát, vagy törölheti – lásd a „Hogyan számolódik az adó?” című cikket.",
          "Adózási mód (adóval együtt / adó nélkül): koppintson a másik módra, és a megerősítés az első adójával számol ki egy példát, például: „egy 5% adójú NT$100-as termék: a vevő NT$105-öt fizet”. Az árak számértéke nem változik, a nyitott kosarat pedig az új módban számolja újra a DingPOS, amikor visszatér a kasszához. A mód a 3.5-ös verzió óta váltható; a korábbi verziókban a beállításkor rögzül.",
          "Váltás után a teljes visszavétel továbbra is az eredeti rendelést téríti vissza úgy, ahogyan az volt. Az a csere (cseretermékekkel), amely a másik módban lebonyolított rendelésre vonatkozik, le van tiltva: állítsa vissza a módot, vagy végezzen visszavételt, és üsse be újra a termékeket."
        ]
      },
      {
        "type": "p",
        "text": "A pénznem a beállítás befejezése után zárolt. Minden korábbi rendelés ebben lett rögzítve, ezért menet közbeni módosítása tönkretenné a jelentéseket. Ellenőrizze a beállítás „Az Ön üzlete” lépésében: a pénznem alapból az országé, és rákoppintva másikat választhat."
      },
      {
        "type": "note",
        "text": "Ha az imént nyitotta meg az üzletet, és még nincsenek fontos adatai, törölheti és újratelepítheti az appot, hogy újra lefuttassa a beállítást. Törlés előtt győződjön meg róla, hogy nincs semmi, amit meg szeretne őrizni."
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
    "question": "Hogyan válthatom át az app nyelvét?",
    "keywords": [
      "nyelv",
      "angol",
      "kínai",
      "japán",
      "spanyol",
      "többnyelvű",
      "nyelvváltás",
      "nyelvbeállítás"
    ],
    "content": [
      {
        "type": "p",
        "text": "A DingPOS 32 nyelven érhető el, köztük angolul, hagyományos és egyszerűsített kínaiul, japánul, koreaiul, thaiul, vietnamiul, indonézül, malájul, spanyolul (Latin-Amerika), portugálul (Brazília), franciául és németül. Nyissa meg a Beállítások → Eszközbeállítások részt, és koppintson az Az app nyelve elemre. Megnyílik a DingPOS oldala az iPad Beállítások alkalmazásában, ahol a Nyelv alatt kiválaszthatja a nyelvet."
      },
      {
        "type": "p",
        "text": "Az iOS nem engedi, hogy az appok közvetlenül megnyissák a nyelvek listáját, ezért az utolsó koppintás a rendszer Beállítások alkalmazásában történik. A nyelv csak ezen az iPaden érvényes."
      },
      {
        "type": "note",
        "text": "Az angolon és a hagyományos kínain kívüli nyelvek a 3.2-es verzióban jelentek meg. Ha a Nyelv listában csak az angol és a kínai szerepel, frissítse a DingPOS-t az App Store-ból."
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
    "question": "Hogyan szolgálhatok ki egyszerre több vevőt?",
    "keywords": [
      "kosarak",
      "több kosár",
      "várakoztatás",
      "kosárváltás",
      "egyszerre több vevő",
      "sor"
    ],
    "content": [
      {
        "type": "p",
        "text": "A kassza képernyője egyszerre tíz kosarat kezel. A „+” gombbal új kosarat adhat hozzá a kosársávon, a számozott fülre koppintva pedig válthat közöttük."
      },
      {
        "type": "p",
        "text": "Minden kosár külön számolódik. Amíg az „A” vevő még válogat, váltson egy másik kosárra, és fizettesse ki előbb a „B” vevőt. A kosár helye a fizetés befejezésekor automatikusan megszűnik."
      },
      {
        "type": "note",
        "text": "A kosarak csak a memóriában élnek – a ki nem fizetett kosarak törlődnek, amikor az alkalmazást teljesen bezárja."
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
    "question": "Hogyan adhatok engedményt?",
    "keywords": [
      "engedmény",
      "százalékos engedmény",
      "fix összegű engedmény",
      "árleszállítás",
      "kedvezmény"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az engedmény két szinten működik, mindkettőnél megadhat fix összeget vagy százalékot:"
      },
      {
        "type": "list",
        "items": [
          "Tételengedmény: koppintson egy tételre a kosárban → válassza az „Engedmény” lehetőséget → adjon meg összeget vagy százalékot.",
          "Kosárengedmény: koppintson a kosár alatti „Engedmény” gombra."
        ]
      },
      {
        "type": "p",
        "text": "Minden tételen és minden kosáron egyszerre egy engedmény lehet – az újabb engedmény felülírja az előzőt, az engedményjelvényre koppintva pedig eltávolítható. Az engedmény az adó előtt érvényesül, ez a kereskedelemben bevett sorrend."
      },
      {
        "type": "p",
        "text": "A gyakran adott engedményeket el is mentheti: lépjen a Beállítások → Hűségprogram és akciók → Engedmény-előbeállítások oldalra, és koppintson az Előbeállítás hozzáadása gombra, például „Munkatársi ár 20% engedmény”. A pultnál a tételengedménynél és a kosárengedménynél is van Előbeállítások menü; egy előbeállítás kiválasztása pontosan úgy tölti ki az engedmény típusát és értékét, mintha Ön gépelte volna be, ezért az engedmény továbbra is beleszámít a munkatárs engedményének felső határába. Az engedmény-előbeállítások a 3.6-os verzióval érkeztek, és Standard vagy magasabb csomagot igényelnek."
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
    "question": "Hogyan számolódik az adó?",
    "keywords": [
      "adó",
      "áfa",
      "forgalmi adó",
      "bruttó ár",
      "nettó ár",
      "több adó",
      "gst",
      "pst",
      "adó szüneteltetése",
      "nyugta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az adót a rendszer automatikusan számolja a Beállítások → Üzletadatok alatt megadott adók és adómód alapján. Két adómód van, és a nyugta mindkettőben kiírja az adó összegét:"
      },
      {
        "type": "list",
        "items": [
          "Adóval együtt (bruttó): az árak már tartalmazzák az adót – a végösszeg nem változik, a nyugta pedig külön feltünteti a benne foglalt adót (jellemző például Tajvanon, Japánban).",
          "Adó nélkül (nettó): az adó a fizetéskor kerül hozzáadásra az engedmény utáni összeghez (jellemző például az Egyesült Államokban, Kanadában)."
        ]
      },
      {
        "type": "p",
        "text": "Az üzlet több adót is felszámíthat, például GST 5% és PST 7% Brit Columbiában, vagy Japánban a 10%-os fogyasztási adót a 8%-os kedvezményes kulccsal együtt:"
      },
      {
        "type": "list",
        "items": [
          "Az Adó kártyán koppintson az Adó hozzáadása gombra, és adjon meg nevet és kulcsot. Ha bekapcsolja az Alkalmazás az új termékeknél opciót, a később felvett termékek alapértelmezés szerint ezt az adót számítják fel. Ha az üzletnek már van alapértelmezett adója, az újonnan hozzáadott adónál ez a kapcsoló kikapcsolva indul; kapcsolja be, ha mindkettőt fel kell számítani.",
          "Minden termék a termékűrlap Felszámított adók részében választja ki, mely adókat számítja fel – egy bento például csak a 8%-os kedvezményes kulcsot. Két vagy több bekapcsolt adónál az űrlap a termék összesített adókulcsát mutatja.",
          "Egy adóra koppintva átnevezheti, módosíthatja a kulcsát, vagy az Alkalmazás az összes termékre, illetve az Eltávolítás az összes termékről gombbal egyszerre hozzáadhatja az összes termékhez, illetve levehet minden termékről. Egy adó törlése előtt a rendszer megmondja, hány termékre nem vonatkozik majd többé.",
          "Ha az üzlet adózási módja Adó nélkül, a kosár végösszegei adónként egy sort mutatnak, a rendelés részletei pedig adónként egy sort a kulccsal és azzal az összeggel, amelyre az adót felszámították."
        ]
      },
      {
        "type": "p",
        "text": "Ha egy időre nem szeretne adót felszámítani, kapcsolja ki az Adó felszámítása kapcsolót az Adó kártya tetején: ezután minden eladás adómentes, a kosárban már lévő tételeket is beleértve. Minden termék megtartja az adóit, és a kapcsoló visszakapcsolásakor ugyanúgy állnak vissza, ahogy voltak."
      },
      {
        "type": "p",
        "text": "A teljes számítási sorrend: tételengedmények és akciók → kosárengedmény → pontbeváltás → adó. Az összegeket a pénznem tizedesjegyeire kerekíti, fél esetén felfelé (pl. 0 a TWD-nél, 2 az USD-nél). Az adót a rendszer rendelésenként minden adónál egyszer számolja ki, a tizedesjegyeit pedig az Adó kártyán az Adó kerekítése beállítás szabályozza: Matematikai kerekítés, Lefelé kerekítés vagy Felfelé kerekítés. A japán új üzletek Lefelé kerekítéssel indulnak, a többi üzlet Matematikai kerekítéssel."
      },
      {
        "type": "note",
        "text": "Az elnevezett adók a 3.5-ös verzióval érkeztek. Frissítéskor az Ön adókulcsa elnevezett adóvá válik (például Ausztráliában „GST 10%”), és minden meglévő termék ezt számítja fel; ha az üzlet kulcsa 0 volt, nem kap adót. A korábbi rendelések és visszavételek megtartják azokat az adókulcsokat és összegeket, amelyekkel rögzítették őket; a riportok mostantól az adó nélküli árbevételt számolják, a korábbi időszakokat is beleértve (lásd: „Mi a különbség az árbevétel és a beérkezett pénz között?”)."
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
    "question": "Milyen fizetési módokat támogat a kassza?",
    "keywords": [
      "fizetési mód",
      "készpénz",
      "bankkártya",
      "line pay",
      "visszajáró",
      "egyéni fizetési mód",
      "számlás eladás",
      "kezelési költség"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az új üzlet két fizetési móddal indul, Készpénz és Bankkártya névvel, amelyeket a beállításkor az app nyelvén nevez el a rendszer. A Beállítások → Fizetési módok alatt bármilyen más módot hozzáadhat (pl. Apple Pay, LINE Pay, helyi digitális pénztárca), és átrendezheti őket. Egy módra koppintva átnevezheti, például a Bankkártyát „Kártya (Square)” névre; a Riportok az átnevezés előtt történt eladásokat is az új név alatt számolja (a 3.6-os verzió óta). A Fizetési mód törlése a szerkesztőlap alján található, és törlés előtt rákérdez; a korábbi rendelések megtartják azt a módot, amellyel kifizették őket, az utolsó megmaradó mód pedig nem törölhető."
      },
      {
        "type": "p",
        "text": "A fizetési módok könyvelési címkék – a DingPOS nem bonyolít le tényleges fizetést. A kártyás vagy mobilos fizetést fogadja a meglévő terminálján vagy alkalmazásán, majd a DingPOS-ban válassza ki a megfelelő címkét a rögzítéshez. Készpénznél a visszajárót automatikusan kiszámolja, és ahol a legkisebb érméket már nem használják, a készpénz kerekítése is megoldható – lásd: „Kerekíthető a készpénzes fizetés a forgalomban lévő érmékre?”"
      },
      {
        "type": "p",
        "text": "Ha a kártyás vagy mobilfizetési szolgáltatója kezelési költséget számít fel, adjon a módhoz díjkulcsot, és a Riportok módonként megbecsüli a kezelési költséget és a nettó beérkezést – lásd: „Követi a DingPOS a kártyás és mobilfizetések kezelési költségét?”"
      },
      {
        "type": "p",
        "text": "Ha egy törzsvevő most viszi el az árut, és később fizet, válassza a Számlás eladás lehetőséget: az eladás kintlévőségként kerül rögzítésre, és a pénz beérkezésekor kiegyenlítheti. Lásd: „Vásárolhatnak a törzsvevők számlára, és fizethetnek később?”"
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
    "question": "Követi a DingPOS a kártyás és mobilfizetések kezelési költségét?",
    "keywords": [
      "kezelési költség",
      "kártyadíj",
      "tranzakciós díj",
      "díjkulcs",
      "nettó beérkezés",
      "szolgáltatói díj",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. A Beállítások → Fizetési módok alatt koppintson egy fizetési módra (vagy adjon hozzá újat), és töltse ki a Kezelési költség mezőt: százalékot, tranzakciónkénti fix összeget, vagy mindkettőt. A készpénz típusú módoknál nincs kezelési költség. Ettől kezdve az adott módon beszedett minden fizetésnél a rendszer az éppen érvényes díjkulccsal becsült kezelési költséget rögzít."
      },
      {
        "type": "p",
        "text": "A Riportok Fizetési módok kártyáján minden díjjal rendelkező mód alatt megjelenik egy „Költség · Nettó” sor, a kártya alján pedig az egész időszak becsült kezelési költsége és becsült nettó beérkezése látható."
      },
      {
        "type": "list",
        "items": [
          "Azt a díjkulcsot adja meg, amelyet a szolgáltatója ténylegesen levon. Ha a díjra adót is felszámítanak, azt is számítsa bele: 3% plusz 5% adó esetén adjon meg 3,15%-ot. Díj nélkül hagyja üresen mindkét mezőt.",
          "A díjkulcs módosítása csak a későbbi fizetésekre vonatkozik; a már rögzített költségek változatlanok maradnak.",
          "A „Százalékos díj visszatérítése visszatérítéskor” a tajvani és a japán üzleteknél bekapcsolva indul, máshol kikapcsolva, mert az olyan szolgáltatók, mint a Stripe, a Square és a PayPal, visszatérítéskor megtartják a díjukat; állítsa be a szolgáltatójának megfelelően. Ez a visszavételekre és a visszatérített előrendelési előlegekre vonatkozik: bekapcsolva a százalék visszatér, a fix összeg soha. A sztornó és a kiegyenlítés visszavonása nem veszi figyelembe a kapcsolót, és a rögzített teljes költséget visszaveszi, a fix összeget is. Mindkét esetben a vevő ugyanannyit kap vissza.",
          "Az olyan fizetések, amelyeket még a díjkulcs megadása előtt szedtek be, nem viselnek költséget: a Riportok ezeket „N díjkulcs nélkül” jelöléssel mutatja, a nettó értéket pedig „—” jelzi."
        ]
      },
      {
        "type": "note",
        "text": "A költségek a megadott díjkulcsból számolt becslések; a tényleges összeget a szolgáltató kimutatása mutatja. A díjkulcsok szerkesztéséhez Standard vagy magasabb csomag szükséges, Lite csomagon a mezők zároltak. A 3.4-es verzió óta minden csomag látja a rögzített költségeket a Riportokban és az Eredmény fülön, így a próbaidőszakban megadott díjkulcs Lite csomagon is tovább becsül; a korábbi verziók a költségeket csak Standard vagy magasabb csomagon mutatták."
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
    "question": "Kerekíthető a készpénzes fizetés a forgalomban lévő érmékre?",
    "keywords": [
      "készpénz kerekítése",
      "kerekítés",
      "felkerekítés",
      "lekerekítés",
      "érmék",
      "fillér",
      "cent",
      "0,05",
      "visszajáró",
      "kanada",
      "ausztrália",
      "svájc",
      "forint kerekítés"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. Kanada, Ausztrália, Új-Zéland, Svájc, Dánia, Svédország, Norvégia, Belgium, Finnország és Magyarország már nem használja a legkisebb érméit, ezért a DingPOS a készpénzt olyan összegre kerekíti, amelyet ténylegesen át is lehet adni: a készpénzzel fizetett C$12,99-os rendelést C$13,00-ként fogadja el, és a visszajárót C$13,00-ből számolja. A kártyás és egyéb nem készpénzes fizetések pontosak maradnak."
      },
      {
        "type": "p",
        "text": "Az ezen országok valamelyikében, az adott ország pénznemében létrehozott új üzletnél ez automatikusan be van állítva. Bármely más üzlet a Beállítások → Fizetési módok alján található Készpénz kerekítése kártyán kapcsolhatja be: válassza ki, mire kerekítsen a rendszer (Nincs kerekítés, vagy centtel rendelkező pénznemnél 0,05, 0,10, 0,50 vagy 1,00; cent nélküli pénznemnél, például TWD vagy JPY esetén 5, 10, 50 vagy 100), és azoknál a kerekítési egységeknél, amelyek pontosan félútra eshetnek, azt is, hogy ilyenkor felfelé vagy lefelé kerekítsen. A módosítás csak a későbbi fizetésekre vonatkozik."
      },
      {
        "type": "list",
        "items": [
          "A Fizetésnél az „Átvett készpénz C$13,00” felirat látható. Ha a vevő a pontos összeggel szeretne fizetni, koppintson a fizetési módok alatti Pontos összeg beszedése gombra; ez csak az adott eladásra vonatkozik.",
          "A rendelés végösszege, az adó, az árbevétel, a pontok és a vevő költése nem változik; a kerekítési különbség a fizetésnél jelenik meg, a nyugta képernyőjén és a rendelés részleteinél a végösszeg alatt, például „Készpénz kerekítése +C$0,01”.",
          "A visszavételnél kiadott készpénz-visszatérítés, az előrendelések készpénzes előlege és átvételkori fennmaradó összege, a cserénél fizetett különbözet, valamint a készpénzben kiegyenlített számlás eladások szintén kerekítődnek; több tétel egyszerre történő kiegyenlítésekor a teljes köteget egyszer kerekíti.",
          "A sztornók, a visszatérített előrendelési előlegek és a visszavont kiegyenlítések pontosan azt fizetik vissza, amit rögzítettek, újabb kerekítés nélkül.",
          "A Riportok fülön a Beérkezett pénz mutatja, mennyi volt ebből készpénz-kerekítés, az Eredmény fül havi kimutatása pedig kap egy Készpénz kerekítése sort, amely beleszámít a nettó eredménybe. A kerekítés soha nem árbevétel."
        ]
      },
      {
        "type": "note",
        "text": "Svájc – az árkijelzési szabályait követve – mindig lefelé kerekít: a CHF 12,98 CHF 12,95-ként számít, és nincs választás a félútra eső összegekre. Belgium csak a €0,05-nál nagyobb végösszegeket kerekíti. A készpénz kerekítése minden csomagban elérhető, a meglévő üzlet pedig a bekapcsolásig a korábbiak szerint, pontosan fogadja el a készpénzt."
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
    "question": "Kikapcsolható a „Ding” hang fizetés után?",
    "keywords": [
      "hang",
      "ding",
      "némítás",
      "csendes mód",
      "fizetési hang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. Nyissa meg a Beállítások → Eszközbeállítások részt, és kapcsolja ki a Fizetési hang kapcsolót. A következő eladástól a sikeres fizetés képernyője néma marad, a rezgéses visszajelzés viszont megmarad."
      },
      {
        "type": "p",
        "text": "A kapcsoló csak ezen az iPaden érvényes, a felhőmentés visszaállítása nem módosítja."
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
    "question": "Elrejthetők az elfogyott termékek a pénztárképernyőn?",
    "keywords": [
      "elrejtés",
      "elfogyott",
      "nulla készlet",
      "pénztáros",
      "hiányzó termék",
      "nem találom a terméket"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. Nyissa meg a Beállítások → Eszközbeállítások részt, és kapcsolja be az Elfogyott termékek elrejtése lehetőséget (alapból ki van kapcsolva). A pénztáros termékrácsa, kategóriaszűrője és keresése (név és vonalkód alapján) ekkor kihagyja azokat a termékeket, amelyek készlete 0 vagy kevesebb. A kapcsoló azonnal érvénybe lép, az appot nem kell újranyitni."
      },
      {
        "type": "list",
        "items": [
          "A készletet nem követő termékek mindig megjelennek. A változatokkal rendelkező termék csak akkor rejtődik el, ha minden változata elfogyott.",
          "Csak ennek az iPadnek a pénztárát érinti; a Termékek lista továbbra is minden terméket mutat.",
          "Ha minden termék el van rejtve, a pénztár a „Minden termék elfogyott” üzenetet mutatja, és megmondja, hol kapcsolhatja ki a kapcsolót."
        ]
      },
      {
        "type": "note",
        "text": "Amíg a kapcsoló be van kapcsolva, ez az iPad nem találja meg az elfogyott termékeket, így nem tud negatív készletbe eladni, és előrendelést sem tud felvenni rájuk – ha szükséges, kapcsolja ki. Ha úgy tűnik, hogy termékek tűntek el a pénztárból, általában ez a kapcsoló az oka."
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
    "question": "Ha megváltoztatom egy termék árát, frissül a kosár?",
    "keywords": [
      "árváltozás",
      "átárazás",
      "kosár",
      "újraszámolás"
    ],
    "content": [
      {
        "type": "p",
        "text": "A kosár azt az árat mutatja, amely a tétel hozzáadásakor érvényes volt. Amikor a fizetés megerősítésére koppint, a DingPOS újra lekérdezi minden tétel aktuális árát – ha bármi változott, a folytatás előtt figyelmeztetést kap a frissített árakkal."
      },
      {
        "type": "p",
        "text": "Az akciókat is a megerősítéskor értékeli ki újra elölről. Ha emiatt a végösszeg, az adó vagy bármely engedmény összege módosul, változásösszesítő jelenik meg, és újra meg kell erősítenie – így a látott összeg pontosan megegyezik a rögzítettel."
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
    "question": "Használhatók együtt a kézi engedmények és az akciók?",
    "keywords": [
      "kézi engedmény",
      "akció",
      "kombinálás",
      "felülírás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. A szabály: „a kézi engedmény az erősebb, a szintek egymástól függetlenek”:"
      },
      {
        "type": "list",
        "items": [
          "Kézi tételengedmény: erre a sorra már nem érvényesül tételszintű akció – a kézi engedményt a rendszer a helyszínen hozott végső döntésnek tekinti. A sor összege viszont továbbra is beleszámít a költési küszöbökbe.",
          "Kézi kosárengedmény: az összes akció kiszámítása után érvényesül, így mindkettő érvényesülhet. Ha a hátralévő végösszegnél többet ad meg, a rendszer értesítéssel automatikusan korlátozza az összeget."
        ]
      },
      {
        "type": "p",
        "text": "A kézi engedmény eltávolítása után a sor a következő kiértékeléskor ismét jogosulttá válik az akciókra."
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
    "question": "Hogyan adhatok hozzá vagy módosíthatom a vevőt egy eladásnál?",
    "keywords": [
      "vevő",
      "tag",
      "vevő hozzárendelése",
      "vevő módosítása",
      "új vevő",
      "fizetés"
    ],
    "content": [
      {
        "type": "p",
        "text": "Rendelje hozzá a vevőt az eladáshoz a kosárban vagy a fizetési képernyőn: az összeg alatti Vevő sor vevő nélkül megnyitja a vevőlistát, ha pedig már van hozzárendelt vevő, a Vevő módosítása vagy a Vevő eltávolítása lehetőséget kínálja. A fizetésnél kiválasztott vevő a kosár vevője, és a fizetés megszakítása után is a kosárnál marad."
      },
      {
        "type": "list",
        "items": [
          "A vevő módosításakor a szintengedmények, a születésnapi ajánlatok és a pontbeváltás azonnal újraszámolódnak. A már megadott készpénzt vagy előleget a rendszer megtartja, és az új végösszeggel veti össze.",
          "Nem találja? Koppintson az Új vevő gombra a vevőlista jobb felső sarkában, vagy – ha egyetlen vevő sem felel meg a keresésnek – a lista közepén. A keresett kifejezés kitölti az űrlapot: a számjegyek a telefonszámba, minden más a névbe kerül, és az új vevő hozzárendelődik az eladáshoz.",
          "Ha vevő nélkül koppint a Számlás eladás lehetőségre, megnyílik a vevőlista, és amint kiválaszt valakit, a Számlás eladás ki van választva.",
          "Ha az új vevő miatt a kézi engedmény meghaladja a kezelő engedményének felső határát, először egy menedzser jóváhagyja; ha megszakítja a jóváhagyást, a vevő változatlan marad."
        ]
      },
      {
        "type": "note",
        "text": "A vevők a Standard csomag részei; Lite csomagon a sor ezt írja: „Vevők — Standard csomag”, és a frissítés részleteit nyitja meg. A fizetési képernyő Vevő sora a 3.4-es verzióban jelent meg; a korábbi verziókban a vevőt csak a kosárban lehet hozzárendelni."
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
    "question": "Hibáztam fizetéskor – hogyan sztornózhatok egy rendelést?",
    "keywords": [
      "sztornó",
      "rendelés sztornózása",
      "hibás rendelés",
      "elírás a kasszánál",
      "lemondás",
      "tévedés"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg a Rendelések fület, keresse meg a rendelést, nyissa meg a részleteit, és koppintson a Sztornó gombra. A „Sztornózza ezt a rendelést?” lap nem kötelező indoklást kér (legfeljebb 100 karakter); koppintson a jobb felső sarokban lévő Sztornó gombra, és kész. Az indok megjelenik a rendelés részleteiben és a tevékenységnaplóban, és elküldés után már nem szerkeszthető."
      },
      {
        "type": "p",
        "text": "A sztornó automatikusan visszafordít mindent, ami a rendeléshez kapcsolódik: a nyomon követett készlet visszakerül, a rendelésen szerzett hűségpontok levonásra kerülnek, a beváltott pontok pedig visszajárnak. A sztornózott rendelések egyértelmű jelöléssel megmaradnak a listában, és nem számítanak bele a riportok árbevételébe."
      },
      {
        "type": "note",
        "text": "A sztornó azt jelenti: „ez az eladás meg sem történt” – akkor használja, ha egy rendelést rögtön a helyszínen rosszul ütöttek be. Ha a vevő később hozza vissza az árut, használja inkább a Visszavétel funkciót: az eredeti rendelés megmarad, a tételeknek csak egy részét is visszaveheti, és az árbevétel a visszavétel napján csökken."
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
    "question": "Hogyan kezeljem a visszavételt vagy a cserét?",
    "keywords": [
      "visszavétel",
      "csere",
      "visszatérítés",
      "részleges visszavétel",
      "méretcsere",
      "selejtezés",
      "visszavétel oka"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg a Rendelések fület, válassza ki az eredeti rendelést, és koppintson a Visszavétel gombra. Adja meg, hogy az egyes tételekből hány darab jön vissza. Csere esetén ugyanazon a képernyőn koppintson a Cseretermék hozzáadása gombra; a különbözetet egyben rendezheti: ha pozitív, a vevő fizet, ha negatív, Ön fizet vissza, ha pedig nulla, nem történik pénzmozgás."
      },
      {
        "type": "list",
        "items": [
          "Az eredeti rendelés soha nem módosul. A visszavétel saját bizonylatot hoz létre a mai dátummal és R előtaggal ellátott számmal, az árbevétel pedig a visszavétel napján csökken.",
          "A visszatérítés az az összeg, amelyet a vevő az adott tételért ténylegesen kifizetett – a tételenkénti és a kosárra adott engedmények, valamint a pontbeváltás már arányosan le vannak vonva, így nem listaáron kap vissza pénzt. Az adó azzal a kulccsal számolódik, amellyel az eredeti rendelést terhelték.",
          "A cseretermékek a mai áron kerülnek felszámításra, akciók és engedmények nélkül.",
          "Nyomon követett készletű terméknél minden visszavett tétel visszakerülhet a készletre (Visszatöltés, ez az alapértelmezés), vagy kidobható (Selejtezés, a 3.5-ös verzió óta). A Visszatöltés visszaadja a készletet. A Selejtezés a készletet változatlanul hagyja, a tétel eladáskori költségét pedig az adott hónap készletveszteségébe számítja az Eredmény fülön. A visszatérítés, az adó és a pontok mindkét esetben ugyanazok.",
          "Az eredeti rendelésen szerzett pontok levonásra kerülnek, a beváltott pontok visszajárnak, a cseretermékek után pedig új pontok járnak.",
          "Ha az eredeti rendelés egy még ki nem egyenlített, számlás eladás, nem történik pénzmozgás: a visszavétel összege levonódik a vevő kintlévőségéből, a drágább cseretermék különbözete pedig hozzáadódik.",
          "Egy rendelés több körben is visszavehető, de soha nem az eredetileg eladott mennyiségnél többet; ha minden visszakerült, a visszaadott adó, engedmények és pontok pontosan kiadják az eredeti rendelés értékét. Az akciók felhasználási korlátait a visszavétel nem adja vissza."
        ]
      },
      {
        "type": "p",
        "text": "Az Indok mező nem kötelező, legfeljebb 100 karakter. Megjelenik a rendelés részleteiben és a tevékenységnaplóban, és elküldés után már nem szerkeszthető."
      },
      {
        "type": "note",
        "text": "A visszavételnek nincs időkorlátja, de az eredeti rendelés szükséges hozzá. Ha tévedésből rögzített visszavételt, sztornózza a visszavételt, és a visszavehető mennyiség helyreáll."
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
    "question": "Hogyan vegyek fel előrendelést előleggel?",
    "keywords": [
      "előrendelés",
      "előleg",
      "átvétel",
      "fennmaradó összeg",
      "foglalás",
      "előleg fizetése"
    ],
    "content": [
      {
        "type": "p",
        "text": "Fizetéskor a képernyő tetején váltson Eladás helyett Előrendelés módra, válassza ki az átvétel napját, adja meg az előleget (0-tól a teljes összegig bármennyi, 30% / 50% / teljes összeg gyorsgombokkal), és válassza ki, hogyan fizették az előleget. Rendeljen hozzá vevőt, hogy értesíteni tudja az átvétellel kapcsolatban."
      },
      {
        "type": "list",
        "items": [
          "A készlet az előrendelés rögzítésekor csökken, így az eladható mennyiség azonnal ezt tükrözi. Ez jelzés, nem lefoglalás: egy későbbi eladás még elviheti az utolsó darabot. A hiányzó készletű tételek negatívba mennek, és a beszerzési rendelés beérkezésekor rendeződnek.",
          "Amikor a vevő átveszi az árut, koppintson a rendelés részleteiben az Átadás gombra a fennmaradó összeg beszedéséhez. A rendelés ekkor rendes, lezárt eladássá válik, a későbbi visszavételek pedig a megszokott visszavételi folyamaton mennek keresztül.",
          "Ha a vevő nem jön el, koppintson a rendelés részleteiben a Rendelés lemondása gombra, és válassza az előleg visszatérítését vagy megtartását. A készlet visszakerül.",
          "Az előlegről szóló nyugta és a végső átvételi nyugta ugyanazt a számot viseli."
        ]
      },
      {
        "type": "p",
        "text": "A Riportok között az előrendelés árbevétele az átvétel napján számít be teljes egészében, az előleg viszont a befizetés napján a beérkezett pénzhez adódik – így a két szám egy ideig eltér. Lásd: „Mi a különbség az árbevétel és a beérkezett pénz között?”"
      },
      {
        "type": "note",
        "text": "Az előrendelés tételei nem szerkeszthetők; ha a vevő meggondolja magát, mondja le, és vegyen fel új előrendelést. Előrendelés létrehozásához Standard vagy magasabb csomag szükséges. Alacsonyabb csomagra váltás után a meglévő előrendelések továbbra is átvehetők vagy lemondhatók."
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
    "question": "Vásárolhatnak a törzsvevők számlára, és fizethetnek később?",
    "keywords": [
      "számlás eladás",
      "hitelre vásárlás",
      "tartozás",
      "kintlévőség",
      "kiegyenlítés",
      "utólagos fizetés",
      "később fizet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. Fizetési módnak válassza a Számlás eladás lehetőséget, és az eladás a vevő tartozásaként kerül rögzítésre. A tartozásnak kell, hogy legyen gazdája, ezért ha nincs vevő hozzárendelve, a Számlás eladásra koppintva először a vevőlista nyílik meg (a 3.4-es verzió óta; a korábbi verziókban előbb a kosárban kell vevőt hozzárendelni)."
      },
      {
        "type": "p",
        "text": "A beszedéshez váltson a Rendelések tetején a Kintlévőségek nézetre. A tartozások vevők szerint vannak csoportosítva; nyisson meg egyet, és kiegyenlíthet egyetlen rendelést, egy egész hónapot vagy mindent – a DingPOS minden alkalommal megkérdezi, hogyan fizették ki az összeget. Egyetlen rendelés a részletei nézetből is kiegyenlíthető, a tévedésből rögzített kiegyenlítést pedig a Kiegyenlítés visszavonása gombbal vonhatja vissza."
      },
      {
        "type": "list",
        "items": [
          "Az árbevétel azon a napon számít, amikor az áru kikerül a boltból; a beérkezett pénz és a hűségpontok a kiegyenlítés napjáig várnak.",
          "A ki nem egyenlített rendeléseket borostyánsárga jelvény jelöli a listában, a vevő részletei pedig megmutatják, mennyivel tartozik jelenleg.",
          "Egy még ki nem egyenlített rendelés visszavételénél nem történik pénzmozgás: az összeg levonódik a vevő kintlévőségéből.",
          "Az a vevő, akinek ki nem egyenlített rendelései vannak, nem törölhető."
        ]
      },
      {
        "type": "note",
        "text": "Számlás eladás létrehozásához Standard vagy magasabb csomag szükséges. Alacsonyabb csomagra váltás után újakat már nem indíthat, de a meglévő kintlévőségek továbbra is megtekinthetők és kiegyenlíthetők."
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
    "question": "Írhatok megjegyzést rendelésekhez, vevőkhöz vagy beszerzési rendelésekhez?",
    "keywords": [
      "megjegyzés",
      "megjegyzések",
      "jegyzet",
      "feljegyzés",
      "észrevétel"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. A rendelések, a vevők és a beszerzési rendelések részletes oldalán is vannak megjegyzések: koppintson a megjegyzéskártyára a szerkesztéshez, legfeljebb 500 karakter hosszan, vagy – amíg még nincs megjegyzés – az egyetlen „Megjegyzés hozzáadása” sorra. Vevő vagy beszerzési rendelés létrehozásakor az űrlapon is írhat megjegyzést."
      },
      {
        "type": "p",
        "text": "A megjegyzések nem függnek az állapottól: lezárt és sztornózott rendelésekhez, valamint visszavételekhez is fűzhet vagy szerkeszthet megjegyzést. A rendelés összegei és tételei a fizetéskor rögzülnek; a megjegyzés a bizonylat mellett áll, és soha nem változtatja meg annak tartalmát."
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
    "question": "Hogyan hozhatok létre változatokkal rendelkező terméket (méret, szín)?",
    "keywords": [
      "változatok",
      "méret",
      "szín",
      "jellemzők",
      "termékváltozat",
      "specifikáció"
    ],
    "content": [
      {
        "type": "p",
        "text": "A termék szerkesztőoldalán, a Változat jellemzői alatt koppintson a Jellemző hozzáadása gombra, és adjon meg egy jellemzőt (pl. „Szín”), majd a „+ Jellemzőérték” gombbal vegye fel az értékeit (pl. piros, kék). Két vagy több jellemzőnél (pl. szín × méret) a DingPOS automatikusan előállítja az összes kombinációt (piros/S, piros/M, kék/S…)."
      },
      {
        "type": "p",
        "text": "Ha egy terméknek vannak változatai, a Változatok ára és készlete alatt minden kombináció saját készletet tart, az ára pedig követi a termék Árát: az a kombináció, amelynek nincs saját ára, szürkén a termék árát mutatja, és annak változásakor vele együtt változik; az Ön által beírt szám a kombináció saját ára, és feketén jelenik meg. Például állítsa egy póló Árát 390-re, és csak az L árát módosítsa 350-re: az M és az XL ára 390, és ha az Ár később 420 lesz, az M és az XL ára is 420-ra változik, az L pedig 350 marad. Az Ár oszlop melletti ⓘ alatt található a Termékár használata, amely minden kombinációt visszaállít a termékár követésére. A 3.6-os verzió előtt létrehozott termékeknél minden változatár a kombináció saját ára marad, a termék Ára pedig ezek közül a legalacsonyabb. A pénztár, a terméklista és a termék részletei a legalacsonyabb és a legmagasabb ár közötti sávot mutatják, például „NT$350–NT$390”, vagy egyetlen árat, ha minden kombináció ugyanannyiba kerül; az ár szerinti rendezés a legalacsonyabb kombinációs árat veszi alapul. Fizetéskor a termékre koppintva változatválasztó jelenik meg, mielőtt a termék a kosárba kerül."
      },
      {
        "type": "p",
        "text": "A költség ugyanígy működik: az üres Költség mező szürkén a termék költségét mutatja, és annak változásakor vele együtt változik; a beírt szám a kombináció saját költsége, és feketén jelenik meg – a 0 is annak számít. A Költség oszlop melletti ⓘ alatt lévő Termékköltség használata egyszerre törli az összes kombináció saját költségét."
      },
      {
        "type": "note",
        "text": "A jellemzők és az értékek neve legfeljebb 20 karakter lehet, és mentéskor a két végén lévő szóközöket a rendszer levágja. Az az érték, amelybe nem írt semmit, nem kombináció, ezért mentéskor kimarad; a mentés megáll, és a mező pirosan bekeretezve jelenik meg, ha a jellemzőnév üres, ha egy jellemző minden értéke üres, vagy ha olyan értéket töröl, amely a terméknél már el volt mentve; írja vissza, vagy koppintson az érték melletti × ikonra az eltávolításához. A változatokkal rendelkező termék nem lehet szabadáras."
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
    "question": "Megadhatom egy termék árát fizetéskor, például szállítási díjnál vagy alkudott áruknál?",
    "keywords": [
      "szabad ár",
      "egyedi ár",
      "ár megadása",
      "szállítási díj",
      "szolgáltatási díj",
      "alkudott ár",
      "piaci ár",
      "százalékos díj"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen – tegye a terméket szabadáras termékké. Kapcsolja be a Szabad ár lehetőséget a termék szerkesztőoldalán, és hagyja üresen az árat; a pénztár és a terméklista az ár helyén a „Szabad ár” feliratot mutatja. Fizetéskor a termékre koppintva először az árat kéri a rendszer; írja be, és koppintson a Kosárba gombra, hogy az adott áron kerüljön a kosárba."
      },
      {
        "type": "list",
        "items": [
          "A 0 érvényes ár (például ingyenes szállításnál); üres mezővel nem lehet hozzáadni. Az árat úgy adja meg, ahogy az üzlet adózási módja szerint minden más árat is.",
          "A kosárban minden szabadáras termék egy sort kap: ha újra rákoppint, megnyílik az a sor, és módosíthatja az árat.",
          "A v3.3 óta a Számítás módja átvált az Összeg és a Százalék között. 5%-nál a sor a többi tétel részösszegének 5%-a (a tételengedmények után, az akciók, a kosárengedmény és a pontbeváltás előtt), a pénznem tizedesjegyeire kerekítve (az .5 felfelé), és együtt változik a kosárral, ahogy tételeket adnak hozzá, vesznek ki belőle, vagy engedményt kapnak. A kosársor felirata „a kosár 5%-a”, a rendelés pedig a kijött összeget rögzíti.",
          "A szabadáras sorra nem adható tételengedmény; ha kevesebbet szeretne felszámolni, módosítsa az árát. A kosárengedmény, a pontbeváltás és az akciók (hacsak ki nincs zárva belőlük) továbbra is vonatkoznak rá.",
          "A Szabad ár bekapcsolása a Kizárás az akciókból opciót is bekapcsolja, így a díjra nem vonatkozik engedmény, és nem számít bele az összegküszöbökbe. Kapcsolja vissza, ha egy alkudott tételnek részt kell vennie az akciókban.",
          "Eladás után a sor ugyanúgy adózik, pontot szerez és számít a Riportokban, mint bármelyik másik, a visszavétel pedig a megadott árat téríti vissza.",
          "A változatokkal rendelkező termék nem lehet szabadáras. A szabadáras termékek soha nem kerülnek fel ajándékként vagy fizetős kiegészítőként, és a csere cseretermék-listájában sem jelennek meg."
        ]
      },
      {
        "type": "note",
        "text": "Minden csomagban elérhető, és az ár megadásához soha nem kell vezetői jóváhagyás."
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
    "question": "Hogyan működik a vonalkódkezelés?",
    "keywords": [
      "vonalkód",
      "beolvasás",
      "vonalkódolvasó",
      "duplikált",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "A termékek vonalkódját beírhatja kézzel, vagy beolvashatja a kamerával. A vonalkódnak egyedinek kell lennie – ha mentéskor egy másik termék már ugyanazt a vonalkódot használja, a DingPOS megmutatja, melyik termékhez tartozik."
      },
      {
        "type": "p",
        "text": "Fizetéskor a keresőmező a terméknevekre és a vonalkódok elejére is keres – írjon be egy vonalkódot, és a termék azonnal megjelenik. A külső vonalkódolvasók támogatásának terveiről lásd a „Támogatni fogják a külső vonalkódolvasókat?” kérdést."
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
    "question": "Hogyan változtathatom meg a termékek sorrendjét?",
    "keywords": [
      "rendezés",
      "sorrend",
      "átrendezés",
      "elrendezés",
      "húzás",
      "kiemelés az elejére"
    ],
    "content": [
      {
        "type": "p",
        "text": "A Termékek fülön koppintson a Sorrend szerkesztése gombra, és húzza a termékkártyákat a kívánt helyre. A pénztáros és a termékkezelés ugyanazt a sorrendet használja, ezért elég egyszer beállítani, és mindkét helyen érvényes lesz."
      },
      {
        "type": "list",
        "items": [
          "Nagy kínálatnál minden kártya menüjében ott van az Áthelyezés az elejére, az Áthelyezés a végére és az Áthelyezés pozícióra lehetőség, és minden kártyán látszik az aktuális pozíciója.",
          "Először szűrjön egy kategóriára, hogy csak azon belül rendezzen át – a többi kategória termékei a helyükön maradnak.",
          "Az új termékek az elejére kerülnek; egy termék adatainak szerkesztése soha nem változtatja meg a pozícióját."
        ]
      },
      {
        "type": "p",
        "text": "Ha egy időre név, ár vagy létrehozási / módosítási idő szerint szeretne rendezni, használja a Rendezés menüt. Az egyéni sorrend megmarad, és az Egyéni sorrendre visszaváltva újra megjelenik."
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
    "question": "Hogyan követhetem a készletet?",
    "keywords": [
      "készlet",
      "készletkezelés",
      "készletnyilvántartás",
      "leltár",
      "alacsony készlet"
    ],
    "content": [
      {
        "type": "p",
        "text": "A készletkövetés termékenként kapcsolható be: kapcsolja be a termék szerkesztőoldalán, és adja meg a jelenlegi mennyiséget. A termék minden változata a saját készletét követi."
      },
      {
        "type": "p",
        "text": "Bekapcsolás után az eladások és az előrendelések automatikusan csökkentik a készletet; a sztornók, visszavételek és lemondott előrendelések visszaállítják; a beszerzési rendelés átvétele pedig növeli. Minden készletmozgás bekerül a teljes mozgásnaplóba. Ha a készlet legfeljebb 10, a terméklistában, a pénztárban és a termék részleteiben az alacsony készletet narancssárga jelölés mutatja."
      },
      {
        "type": "p",
        "text": "A számot kétféleképpen módosíthatja kézzel:"
      },
      {
        "type": "list",
        "items": [
          "Újraszámlálás: a termékűrlapon írja át a készletszámot arra, amennyit valóban megszámolt. Soha nem kerül be az eredménykimutatásba.",
          "Készlet módosítása (a 3.5-ös verzió óta): a termék részleteiben koppintson a Készlet módosítása gombra, válassza az Eltávolítás vagy a Hozzáadás lehetőséget, adja meg a mennyiséget és egy indokot, például Lejárt vagy romlott, Sérült, illetve Kóstoló és ajándék. Az eltávolított áru költsége beleszámít az adott hónap készletveszteségébe az eredménykimutatásban – lásd: „Hogyan rögzíthetem a lejárt, tönkrement vagy mintaként kiadott készletet?”"
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
    "question": "Hogyan rögzíthetem a lejárt, tönkrement vagy mintaként kiadott készletet?",
    "keywords": [
      "készlet módosítása",
      "készletveszteség",
      "apadás",
      "leírás",
      "selejt",
      "lejárt",
      "sérült",
      "kóstoló",
      "ajándék",
      "bolti fogyóeszköz",
      "újraszámlálás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Használja a Készlet módosítása funkciót. Készletkövetéses terméknél koppintson a termék részleteiben a Készlet módosítása gombra, válassza az Eltávolítás vagy a Hozzáadás lehetőséget, állítsa be a mennyiséget a + és − gombbal (1-ről indul; koppintson a számra, ha be szeretné írni), válasszon indokot, és ha szeretné, írjon megjegyzést (legfeljebb 100 karakter). A megjelenő lap kiszámolja a módosítás utáni készletet, az indok alatti sor pedig megmondja, hogy a módosítás bekerül-e az eredménykimutatásba."
      },
      {
        "type": "list",
        "items": [
          "Eltávolítás indokai: Anyagfelhasználás, Lejárt vagy romlott, Sérült, Elveszett/ellopott, Munkatársi használat, Kóstoló és ajándék, Bolti fogyóeszköz és Egyéb. Hozzáadás indokai: Saját gyártás, Megkerült és Egyéb. Az Egyéb indokhoz megjegyzés kell.",
          "Az Anyagfelhasználás kivételével az eltávolított mennyiség az akkori költségén beleszámít az adott hónap készletveszteségébe az eredménykimutatásban. Ez a bruttó nyereség után következik, és a nettó eredményt csökkenti; a bruttó nyereség és az árrés nem változik. Az Anyagfelhasználás csak levonja a készletet, mert az alapanyag költsége már benne van az ebből készült termék költségében.",
          "A Megkerült ugyanennyivel csökkenti a készletveszteséget. A Hozzáadás oldalon a Saját gyártás és az Egyéb csak növeli a készletet, és soha nem kerül be az eredménykimutatásba.",
          "A módosítás a rögzítés napján számít. Nem lehet visszadátumozni, szerkeszteni vagy törölni; hiba javításához rögzítsen Megkerült indokú vagy ellenkező irányú módosítást.",
          "A költség nélküli terméket is lehet módosítani, de az eredménykimutatás nem tud összeget rendelni hozzá, és a hónap jelzi, hány bejegyzésnek nem volt költsége."
        ]
      },
      {
        "type": "p",
        "text": "Ha a termékűrlapon írja át a készletszámot, az Újraszámlálás: azt rögzíti, amennyit valóban megszámolt, és soha nem kerül be az eredménykimutatásba. A Riportok alatti készletmozgások listájában a Módosítások és az Újraszámlálás külön szűrhető, a Tevékenységnapló pedig megmutatja az egyes módosítások indokát és megjegyzését."
      },
      {
        "type": "note",
        "text": "A Készlet módosítása funkcióhoz Standard vagy magasabb csomag szükséges. Pro csomagnál azoknál a munkatársaknál, akiknek a szerepköre a Kézi készletmódosításhoz jóváhagyást kér, a megerősítéskor egy menedzser PIN-kódját kéri a rendszer."
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
    "question": "Miért mehet a készlet negatívba?",
    "keywords": [
      "negatív",
      "készlet",
      "elfogyott",
      "blokkolás",
      "módosítás",
      "mínuszos készlet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ez szándékos: a fizetést soha nem akadályozza a készlethiány. Egy működő kassza első szabálya, hogy a vevőnek soha nem kell várnia – egy hibás szám a papíron később kijavítható, a megszakadt eladás viszont végleg elveszik."
      },
      {
        "type": "p",
        "text": "A negatív készlet általában azt jelenti, hogy egy utánpótlást nem rögzítettek, vagy egy előrendelt termék még nem érkezett meg (az előrendelés leadáskor levonja a készletet). Az utánpótlást a beszerzési rendelés átvételével rögzítse, és a szám magától helyreáll. A leltári eltérést a termékűrlapon a készletszám átírásával javítsa (újraszámlálás); a tönkrement, lejárt vagy elajándékozott áru indokát pedig a Készlet módosítása funkcióval rögzítse. Mindkettő bekerül a mozgásnaplóba."
      },
      {
        "type": "note",
        "text": "Ha a pénztáros nem talál egy 0 készletű terméket, ellenőrizze, be van-e kapcsolva az Elfogyott termékek elrejtése a Beállítások → Eszközbeállítások részben: amíg be van kapcsolva, ez az iPad nem tud elfogyott terméket a kosárba tenni."
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
    "question": "Hogyan rögzíthetem a beszerzéseket és a beszállítókat?",
    "keywords": [
      "beszerzési rendelés",
      "beszerzés",
      "beszállító",
      "készlet átvétele",
      "utánpótlás",
      "tartozások"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az oldalsávban a Beszerzés menüpont alatt kezelheti a beszállítókat és a beszerzési rendeléseket. A beszállítónál megadhatja a nevet, a kapcsolattartót, a telefonszámot, a címet és az alapértelmezett fizetési feltételt (Fizetés átvételkor vagy Havi hitel)."
      },
      {
        "type": "steps",
        "items": [
          "Koppintson az Új beszerzés gombra, válassza ki a beszállítót, és adja hozzá a termékeket, a mennyiségeket és az egységköltségeket (előre kitöltve a termék jelenlegi költségével). Szállítási díjat is megadhat. Az olyan árukhoz, amelyek még nincsenek termékként felvéve, koppintson az Új termék gombra a Termék hozzáadása választóban; az új termék rögtön tételként kerül be a beszerzési rendelésbe. Ha a beszállító még nincs felvéve, koppintson a Beszállító hozzáadása gombra a beszállítólista bal felső részén – az új beszállító rögtön visszakerül a beszerzési rendelésbe.",
          "A vázlat soha nem érinti a készletet és a tartozásokat – szabadon szerkesztheti vagy törölheti.",
          "Amikor az áru megérkezik, koppintson a Készlet átvétele gombra: a követett készlet nő, a beszerzési rendelés pedig megkapja a számát, és zárolódik. Az átvétel alapértelmezés szerint az egyes termékek költségét is erre az egységköltségre frissíti; ha a költségeket változatlanul szeretné hagyni, kapcsolja ki a Termékköltség szinkronizálása beállítást a beszerzési rendelésen. Alatta a Szállítás beszámítása a költségbe (az új beszerzési rendeléseknél be van kapcsolva) a szállítási díjat a tételek összege arányában elosztja, így az egyes termékekhez írt költség tartalmazza a rá eső részt: 10 × $30-os liszt, 1 × $60-os vaj és $25 szállítási díj esetén a liszt költsége $32, a vajé $64 lesz."
        ]
      },
      {
        "type": "p",
        "text": "A fizetési feltétel dönti el, mi történik ezután: a „Fizetés átvételkor” feltételű rendelések fizetettként lesznek megjelölve, a „Havi hitel” feltételűek pedig kifizetetlenek maradnak a Nyitott számlák között, ahol beszállítónként rendezheti őket – egy rendelést, az adott hónap összes rendelését vagy az összeset."
      },
      {
        "type": "p",
        "text": "Az eladásra nem szánt alapanyagokat, például a lisztet vagy a csomagolóanyagot ugyanígy beszerezheti: vegye fel őket nem árusított termékként – lásd: „Hozzáadhatok alapanyagot, például lisztet vagy csomagolóanyagot termékként?”"
      },
      {
        "type": "note",
        "text": "A Beszerzés funkcióhoz Standard vagy magasabb csomag szükséges. Az a beszállító, akinél kifizetetlen, átvett rendelések vannak, nem törölhető."
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
    "question": "Hozzáadhatok alapanyagot, például lisztet vagy csomagolóanyagot termékként?",
    "keywords": [
      "nem árusított",
      "alapanyag",
      "összetevők",
      "anyagok",
      "csomagolóanyag",
      "fogyóeszköz",
      "árusítás a pénztárban",
      "beszerzés",
      "költség"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. A termékűrlapon kapcsolja ki a fotó alatti Árusítás a pénztárban kapcsolót (alapértelmezés szerint be van kapcsolva), és a termék nem árusított lesz: nem kell árat megadni hozzá, megtartja a költségét, a vonalkódját, a készletét és a változatait, a terméklista pedig az ár helyén a „Nem árusított” feliratot mutatja."
      },
      {
        "type": "list",
        "items": [
          "A nem árusított termék soha nem jelenik meg a pénztár rácsában, a kategóriákban, a keresésben és a vonalkódolvasásnál, és nem lehet ajándék, kiegészítő, akció célterméke vagy cseretermék. A csak nem árusított termékeket tartalmazó kategória nem jelenik meg a pénztár kategóriasávjában.",
          "Ha az üzletben vannak nem árusított termékek, a Termékek jobb felső sarkában megjelenik egy szűrőgomb: válassza az Összes termék, Árusított vagy Nem árusított lehetőséget, a kereséssel és a kategóriákkal együtt.",
          "A beszerzési rendelések, az átvétel, a Termékköltség szinkronizálása és a nyitott számlák pontosan úgy működnek, mint a többi terméknél, így az alapanyag beszerzési költsége és készlete a Beszerzésen keresztül rögzíthető.",
          "Más termékek eladása nem csökkenti a készletét. Amikor felhasznál belőle, rögzítse a csökkentést a termék részleteiben a Készlet módosítása funkcióval: Anyagfelhasználás arra, ami termékekbe került, Bolti fogyóeszköz az olyan dolgokra, mint a papírzacskó vagy a tisztítószer.",
          "Bármikor visszakapcsolhatja, az ára és az adói megmaradnak. A már elkészült rendeléseket és riportokat ez nem érinti."
        ]
      },
      {
        "type": "p",
        "text": "Így kerül a költsége az eredménybe: a beszerzések közvetlenül nem számítanak bele. Az ebből készült termékeknél a költséget azon a terméken adja meg, és az a termék eladásakor számít bele. Azokat a fogyóeszközöket, amelyek egyetlen termék költségében sincsenek benne, ha követi a készletüket, felhasználáskor Bolti fogyóeszközként rögzítse, ha nem követi, egyszeri kiadásként. Ne rögzítse ugyanazt az összeget mindkét módon, mert akkor kétszer számít."
      },
      {
        "type": "note",
        "text": "A nem árusított termékek minden csomagban elérhetők; a beszerzéshez, a készletkövetéshez és a Készlet módosítása funkcióhoz Standard vagy magasabb csomag szükséges."
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
    "question": "Mi a különbség az árbevétel és a beérkezett pénz között?",
    "keywords": [
      "árbevétel",
      "beérkezett pénz",
      "riportok",
      "bruttó nyereség",
      "az árbevételtől a bruttó nyereségig",
      "egyeztetés",
      "előleg",
      "számlás eladás",
      "adó"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az árbevétel azon a napon számít, amikor az árut átadták, minden engedmény után és adó előtt; a beérkezett pénz pedig azon a napon, amikor a pénz befolyt, és a ténylegesen beérkezett összeget jelenti, adóval együtt. Az adót felszámító boltban a beérkezett pénz ezért az adó összegével magasabb az árbevételnél, még a pultnál kifizetett rendeléseknél is. Mindkettő a Riportok első sorának első két csempéjeként szerepel, a Bruttó nyereség, a Rendelések és az Átlagos rendelés mellett."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "A Riportok csempesorai, az első sorban egymás mellett az Árbevétel és a Beérkezett pénz"
      },
      {
        "type": "h2",
        "text": "Mikor tér el az árbevétel a beérkezett pénztől"
      },
      {
        "type": "p",
        "text": "Például ha egy adóval együtt árazó bolt NT$1,050 értékben ad el 5% adóval, és a vevő a pultnál fizet, az árbevétel NT$1,000, a beérkezett pénz pedig NT$1,050. Az adón túl a két érték ezekben a helyzetekben válik el egymástól:"
      },
      {
        "type": "list",
        "items": [
          "Számlás eladás: az áru ma elhagyja a boltot, és a mai árbevételbe számít; a pénz azon a napon számít bele a beérkezett pénzbe, amikor a rendelést kiegyenlítik.",
          "Előrendelés: az előleg a befizetés napján számít bele a beérkezett pénzbe; az árbevétel az átvétel napján jelenik meg teljes összegben.",
          "Elvesztett előleg: ha a vevő lemond egy előrendelést, és Ön megtartja az előleget, az a befizetéskor már bekerült a beérkezett pénzbe. A Riportok ezt külön, Elvesztett előlegek néven mutatja, és soha nem számít árbevételnek.",
          "Korábbi rendelés sztornózása: a visszatérített pénz a sztornó napján számít bele a beérkezett pénzbe, ezért az adott nap beérkezett pénze negatív is lehet. Maga a sztornózott rendelés az eladás napján számít, és a Rendelések csempe alcímében látszik.",
          "Készpénz kerekítése: amennyivel a Készpénz kerekítése a rendelés végösszege fölé vagy alá visz, az a beérkezett pénzbe számít bele, az árbevételbe soha."
        ]
      },
      {
        "type": "p",
        "text": "Ha bármelyik összeg nem nulla, a Beérkezett pénz csempe alcíme megmutatja a Készpénz kerekítése vagy az Elvesztett előlegek tételét."
      },
      {
        "type": "h2",
        "text": "Az adó és a csempék részletei"
      },
      {
        "type": "p",
        "text": "Az árbevételt és a beérkezett pénzt elválasztó adó az „Az árbevételtől a bruttó nyereségig” nézetben szerepel, amely a Bruttó nyereség csempe láblécéből nyílik meg. Itt látható az Árbevétel (adóval), az Adó és az Árbevétel (adó nélkül). Az ausztráliai, egyesült királyságbeli, új-zélandi és szingapúri boltok itt a helyi adó nevét látják, például Árbevétel (adóval együtt: GST), GST és Árbevétel (GST nélkül)."
      },
      {
        "type": "p",
        "text": "A bevalláshoz beszedett adó megtekintéséhez nyissa meg az Adójelentést az Adó csempéről."
      },
      {
        "type": "p",
        "text": "Az Árbevétel, a Beérkezett pénz és a Rendelések csempén lévő ⓘ ikon az appban ugyanezeket a szabályokat magyarázza, a Rendelések csempe alcímében felsorolt sztornózott rendeléseket is beleértve."
      },
      {
        "type": "h2",
        "text": "Egyeztetés és az eladások értelmezése"
      },
      {
        "type": "p",
        "text": "Az egyeztetéshez vesse össze a beérkezett pénzt a kasszafiókkal és a kártyaterminállal. A Riportok Fizetési módok kártyája módonként egy sort mutat, és a fizetési mód átnevezése előtti eladások is az új név alatt szerepelnek. Ha azt szeretné látni, mennyit adott el egy időszakban, az árbevételt nézze. A visszavételek a visszavétel napján csökkentik az árbevételt."
      },
      {
        "type": "note",
        "text": "Az adó nélküli árbevétel a 3.5-ös verzióban jelent meg, és a korábbi időszakokat is ugyanígy számolták újra, ezért az adót felszámító bolt a frissítés előttinél alacsonyabb árbevételt lát. Ez javítás: a korábbi verziók az árbevételben az adót is tartalmazták, az adó nélkül árazó boltok pedig még a beszedett forgalmi adót is árbevételnek számolták."
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
    "question": "Milyen időszakokra mutatnak adatokat a riportok?",
    "keywords": [
      "riportok",
      "jelentések",
      "időszak",
      "ez a hét",
      "ez a hónap",
      "egyéni időszak",
      "termékrangsor",
      "lassan forgó termékek",
      "hétnap × óra",
      "készletérték"
    ],
    "content": [
      {
        "type": "p",
        "text": "A Riportok tetején lévő időszaksávban választhat a Ma, Tegnap, Ez a hét, Ez a hónap, Ez az év és Minden időszak közül, vagy az Egyéni lehetőséggel megadhat tetszőleges kezdő- és záródátumot. Az oldal minden kártyája a kiválasztott időszakot követi. Az Ez a hét az eszköz hétkezdő napjától számít, az Ez a hónap 1-jén, az Ez az év január 1-jén kezdődik, a Minden időszak pedig az üzlet első tranzakciójától indul; minden lehetőség mellett látszik, mely dátumokat fedi le."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "A Riportok tetején lévő időszaksáv kiválasztott Egyéni lehetőséggel és megnyitott dátumválasztóval a Kezdet és a Vége dátum megadásához"
      },
      {
        "type": "h2",
        "text": "Egyéni időszak kiválasztása"
      },
      {
        "type": "p",
        "text": "Az Egyéni lehetőséget akkor használja, ha a naptári időszakokon kívüli tartományra van szüksége, például kéthavi vagy negyedéves adóbevallási időszakra."
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg a Riportokat, és koppintson az Egyéni lehetőségre az időszaksávban.",
          "Válassza ki a kezdő- és a záródátumot a felugró ablakban.",
          "Koppintson a Megerősítés gombra a jelentés frissítéséhez."
        ]
      },
      {
        "type": "p",
        "text": "Az Adó csempe és az adójelentés is a kiválasztott időszakot követi, így az Egyéni lehetőséggel beállított bevallási időszak mindkettőt frissíti; részletekért lásd a kapcsolódó adójelentés-cikket. Az időszaksáv jobb oldalán az Összehasonlítás gombbal a kiválasztott időszakot az előzővel vagy az előző év azonos időszakával vetheti össze; részletekért lásd a kapcsolódó cikket az időszakok összehasonlításáról."
      },
      {
        "type": "h2",
        "text": "A csempék és kártyák az oldalon"
      },
      {
        "type": "p",
        "text": "Az időszaksáv alatt a Riportok két sor mutatószám-csempét jelenít meg, majd párosával diagramokat és összegző kártyákat, legalul az Aktuális állapot résszel."
      },
      {
        "type": "list",
        "items": [
          "Első csempesor: Árbevétel, Beérkezett pénz, Bruttó nyereség, Rendelések és Átlagos rendelés.",
          "Második csempesor: Engedmények összesen, Adó, Nettó eredmény, Költség nélküli termékek és Kiszolgált vevők.",
          "Első pár: az eladási trend diagramja a Költség és bruttó nyereség mellett.",
          "Második pár: a Termékrangsor a Megoszlás kategóriánként mellett.",
          "Harmadik pár: a Fizetési módok az akciókártya mellett.",
          "Alsó kártya: Aktuális állapot."
        ]
      },
      {
        "type": "p",
        "text": "A második sor két csempéje csak bizonyos esetekben jelenik meg. A 3.6-os verzióban megjelent Adó csempe csak az adót felszámító boltoknál látszik, vagy ha a kiválasztott időszakban adó felszámításával történt eladás. A Nettó eredmény csempe csak akkor jelenik meg, ha az időszak az Ez a hónap, vagy pontosan egy egész hónapot fed le."
      },
      {
        "type": "note",
        "text": "Ha egy időszakban nincs rendelés, a Riportok csak az időszaksávot, egy üzenetet és az Aktuális állapotot mutatja."
      },
      {
        "type": "h2",
        "text": "A diagramok és a Termékrangsor olvasása"
      },
      {
        "type": "p",
        "text": "Az eladási trend diagramjának jobb felső sarkában lévő menü az Árbevétel, a Rendelések, az Átlagos rendelés és a Kiszolgált vevők között vált. Mellette a Költség és bruttó nyereség diagram egy-egy oszlopban halmozza az egyes időszakok termékköltségét és bruttó nyereségét. Egyetlen nap óránkénti bontásban látszik, a hosszabb időszakok pedig az időszak hosszától függően napokra, hetekre, hónapokra vagy évekre bontva."
      },
      {
        "type": "p",
        "text": "Nyomja le és tartsa nyomva az eladási trend diagramját, a Költség és bruttó nyereség diagramot vagy a Fizetési módok kártyát, hogy egy időszelet értékeit leolvasókártyán lássa. Bekapcsolt Összehasonlítás mellett az eladási trend diagramjának leolvasókártyája egymás mellett mutatja az adott időszak és az összehasonlítási időszak értékét. A szeletek közötti lépkedéshez húzza balra vagy jobbra; ha a diagramon felfelé vagy lefelé söpör, az oldal a szokásos módon görög."
      },
      {
        "type": "p",
        "text": "Ha a trenddiagram fejlécében az Alakulás helyett a Hétnap × óra nézetet választja, hétnapos, 24 órás hőtérképet kap. Minél sötétebb egy cella, annál többet adott el az adott órában, és a hőtérképet átválthatja árbevétel és rendelések között."
      },
      {
        "type": "p",
        "text": "A Termékrangsor az adott időszak 5 legjobban teljesítő termékét listázza. Koppintson a kártyára vagy az Összes megtekintése gombra, hogy lássa az időszakban eladott összes terméket, a visszavételek utáni mennyiség szerint rangsorolva. A változatokkal rendelkező termék változatonként egy sort kap."
      },
      {
        "type": "p",
        "text": "Ha a rangsorkártya fejlécében a Lassan forgó termékek nézetre vált, a termékeket a legkevesebbet eladottól a legtöbbet eladottig listázza. Minden sor megmutatja a termék aktuális készletét és az utolsó eladás dátumát. A még sosem eladott termékek mellett a Még nem adták el felirat áll, és alapértelmezés szerint csak a készleten lévő termékek látszanak. A Változás nézet azokat a termékeket listázza, amelyek árbevétele az összehasonlítási időszakhoz képest a legjobban nőtt vagy csökkent; lásd a kapcsolódó cikket az időszakok összehasonlításáról."
      },
      {
        "type": "h2",
        "text": "Megoszlás kategóriánként, visszatérők aránya és Aktuális állapot"
      },
      {
        "type": "p",
        "text": "A Megoszlás kategóriánként kártya felsorolja az egyes kategóriák árbevételét és részesedését a legnagyobbtól a legkisebbig, a termékek aktuális kategóriája alapján. A kategória nélküli termékek a Kategória nélkül sorba kerülnek, és a sorok összege pontosan kiadja az Árbevételt."
      },
      {
        "type": "p",
        "text": "A Kiszolgált vevők csempe utolsó sora a visszatérők arányát mutatja „Visszatérők aránya … · … tag tért vissza” formában. Azon tagok arányát adja meg, akik a kiválasztott időszakban vásároltak, és összesen legalább kétszer vásároltak már."
      },
      {
        "type": "p",
        "text": "Az Aktuális állapot három készlettel és pontokkal kapcsolatos adatot mutat:"
      },
      {
        "type": "list",
        "items": [
          "Készletérték, az aktuális készlet × aktuális költség szorzataként számítva.",
          "A kiválasztott időszak minden készletmozgása.",
          "A vevők kezében lévő, még be nem váltott pontok, valamint a legnagyobb engedmény, amelyre beválthatók."
        ]
      },
      {
        "type": "p",
        "text": "A készletérték és a be nem váltott pontok aktuális egyenlegek, ezért a felül kiválasztott időszak nem változtat rajtuk."
      },
      {
        "type": "note",
        "text": "A személyzet a Riportokat a Riportok jogosultság alapján látja; a Készletérték összegeihez emellett a Költség és nyereség jogosultság is kell."
      },
      {
        "type": "note",
        "text": "A naptári időszakok a 2.4-es verzióban jelentek meg; a korábbi verziók gördülő tartományokat kínáltak (Ma / 7 nap / 30 nap / Minden időszak). Ha még ezeket látja, frissítse a DingPOS-t az App Store-ból."
      }
    ],
    "related": [
      "compare-periods",
      "revenue-vs-cash",
      "profit-not-tracked",
      "tax-report"
    ]
  },
  {
    "slug": "compare-periods",
    "category": "reports",
    "since": "3.0",
    "question": "Hogyan hasonlíthatom össze az eladásokat a múlt héttel, a múlt hónappal vagy a tavalyi évvel?",
    "keywords": [
      "összehasonlítás",
      "időszak-összehasonlítás",
      "múlt hét",
      "múlt hónap",
      "tavaly",
      "tavalyi azonos időszak",
      "változás",
      "riportok",
      "növekedés",
      "visszatérők aránya"
    ],
    "content": [
      {
        "type": "p",
        "text": "Koppintson a Riportok időszaksávjának jobb oldalán az Összehasonlítás gombra, és válasszon egy korábbi időszakot, például a Múlt hetet vagy a Tavalyt. Ezután minden csempén látszik, mennyivel nőtt vagy csökkent az értéke, például „▼ 3% vs. Múlt hónap”, alatta pedig az összehasonlítási időszak értéke."
      },
      {
        "type": "h2",
        "text": "Az összehasonlítás bekapcsolása"
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg a Riportokat az oldalsávról.",
          "Válasszon időszakot felül.",
          "Koppintson az Összehasonlítás gombra az időszaksáv jobb oldalán.",
          "Válasszon egy összehasonlítási lehetőséget a menüből."
        ]
      },
      {
        "type": "p",
        "text": "Az elérhető lehetőségek a kiválasztott időszaktól függnek:"
      },
      {
        "type": "list",
        "items": [
          "A Nincs kikapcsolja az összehasonlítást.",
          "A Múlt hét egyetlen napot az előző hét azonos napjával, az adott hetet pedig az előző héttel veti össze.",
          "A Múlt hónap az adott hónapot az előző hónappal veti össze.",
          "A Tavaly az adott évet az előző évvel, vagy a kiválasztott időszakot az előző év azonos időszakával veti össze.",
          "Az Előző az egyéni tartományt az előtte lévő, ugyanannyi napból álló időszakkal veti össze."
        ]
      },
      {
        "type": "p",
        "text": "Aktív összehasonlításnál a Riportok minden csempéhez hozzáadja a változást és az összehasonlítási időszak értékét, kivéve az Adó, a Nettó eredmény és a Költség nélküli termékek csempét. Az Árbevétel, a Beérkezett pénz, a Bruttó nyereség, a Rendelések, az Átlagos rendelés, az Engedmények összesen és a Kiszolgált vevők mind összehasonlító sort kapnak, például „▼ 3% vs. Múlt hónap”."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "A Riportok az Ez a hét időszakkal és Múlt hét összehasonlítással: látszik az összehasonlító sáv és a csempék első sora, minden csempe alatt a változással és az összehasonlítási értékkel",
        "caption": "Koppintson bármelyik csempe alatti összehasonlító sorra az Időszak-összehasonlítás megnyitásához, ahol mindkét időszak értékét látja."
      },
      {
        "type": "p",
        "text": "Az Engedmények összesen változása mindig szürke, mert a több engedmény önmagában nem jó és nem rossz. Koppintson bármelyik összehasonlító sorra az Időszak-összehasonlítás megnyitásához, amely mindkét időszak értékeit felsorolja. A trenddiagramon az összehasonlítási időszakot egy halványabb vonal mutatja. Amíg egy időszak még tart, az összehasonlítási időszakot ugyanabban a pillanatban vágja el."
      },
      {
        "type": "h2",
        "text": "Változás"
      },
      {
        "type": "p",
        "text": "Ha a rangsorkártya fejlécében a Változás nézetre vált, látja azt a 3 terméket, amelynek árbevétele az összehasonlítási időszakhoz képest a legjobban nőtt, és azt a 3-at, amelyé a legjobban csökkent. Minden sor mindkét időszak árbevételét és a különbséget mutatja, és minden változatot önmagával hasonlít össze."
      },
      {
        "type": "p",
        "text": "Előbb válasszon időszakot az Összehasonlítás alatt. Ha az Összehasonlítás Nincs értéken áll, vagy az időszak Minden időszak, a kártya felszólít egy összehasonlítási időszak kiválasztására. Koppintson a kártyára vagy az Összes megtekintése gombra a teljes Termékek változása lista megnyitásához, amely Növekedés és Csökkenés részre oszlik."
      },
      {
        "type": "h2",
        "text": "Hőtérkép és visszatérők aránya"
      },
      {
        "type": "p",
        "text": "Bekapcsolt összehasonlítás mellett a trenddiagram Hétnap × óra hőtérképe azt is megmutatja, mely órák nőttek és melyek csökkentek, a Kiszolgált vevők csempén a visszatérők aránya pedig kap egy sort a százalékpontos változással és az összehasonlítási időszak arányával."
      }
    ],
    "related": [
      "report-periods",
      "revenue-vs-cash"
    ]
  },
  {
    "slug": "profit-not-tracked",
    "category": "reports",
    "question": "Hogyan számolja a rendszer a bruttó nyereséget, ha nem adtam meg költséget?",
    "keywords": [
      "költség",
      "bruttó nyereség",
      "nyereség",
      "árrés",
      "bruttó árrés",
      "riportok",
      "hiányzó költség",
      "költség nélküli termékek",
      "az árbevételtől a bruttó nyereségig"
    ],
    "content": [
      {
        "type": "p",
        "text": "A költség nem kötelező mező, ezért a költség nélküli termékek kimaradnak a bruttó nyereségből, miközben az árbevételük teljes egészében beleszámít. A Riportok Költség nélküli termékek csempéje megmutatja, hány, az időszakban eladott vagy visszavett terméknek nincs költsége, például „12 termék”. A 0 költségnek számít, és nem szerepel a listán; ha minden terméknek van költsége, a csempén ez áll: „0 termék · a költségadatok teljesek”."
      },
      {
        "type": "h2",
        "text": "A költség nélküli termékek megkeresése"
      },
      {
        "type": "p",
        "text": "A Riportokban koppintson a Költség nélküli termékek csempére vagy a Termékek megtekintése gombra a Költség nélküli termékek megnyitásához. A lap a termékeket a bruttó nyereségből kimaradó árbevétel szerint rangsorolja, a legnagyobbtól a legkisebbig."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "A Költség nélküli termékek lap a termékekkel, a bruttó nyereségből kimaradó árbevétel szerint rangsorolva"
      },
      {
        "type": "steps",
        "items": [
          "Koppintson egy sorra a Költség nélküli termékek között a termék megnyitásához.",
          "Koppintson a Szerkesztés gombra, és adja meg a költséget a Beszerzési ár (nem kötelező) mezőben.",
          "Térjen vissza a Költség nélküli termékek lapra, ahol a sor Költség hozzáadva jelölést kap."
        ]
      },
      {
        "type": "p",
        "text": "A változatokkal rendelkező termék csak akkor kap Költség hozzáadva jelölést, ha minden költség nélkül eladott változatának van költsége: vagy a sajátja, vagy a termék költsége, amelyet követ. A 3.6-os verzió óta a beszerzési rendelés a szállítási díjat is beleoszthatja az általa írt termékköltségbe, ha be van kapcsolva a Szállítás beszámítása a költségbe."
      },
      {
        "type": "note",
        "text": "A megadott költség csak a későbbi eladásokat érinti. A már megtörtént eladásokat a rendszer nem számolja újra."
      },
      {
        "type": "h2",
        "text": "Költség és adó megadása"
      },
      {
        "type": "p",
        "text": "A termékűrlapon a költségmező minden üzletben a Beszerzési ár (nem kötelező) feliratot viseli. Adóval rendelkező üzletben a Beszerzési ár (nem kötelező) mellett megjelenik egy ⓘ, amely azt mutatja, hogyan érvényesül az adó az Előzetesen felszámított adó levonása beállítástól függően:"
      },
      {
        "type": "list",
        "items": [
          "Az Előzetesen felszámított adó levonása be van kapcsolva: a költséget a levonható adó előtt adja meg. Az ⓘ megjegyzés szövege: „A költséget a levonható adó nélkül adja meg; azt az előzetesen felszámított adónál rögzítse. A nem levonható adó a költség részét képezi.”",
          "Az Előzetesen felszámított adó levonása ki van kapcsolva: azt adja meg, amennyit fizetett, a levonható adó nélkül. Az ⓘ megjegyzés szövege: „A levonható adó nem része a költségnek, a nem levonható adó viszont igen. Ha előzetesen felszámított adót vonsz le, kapcsold be az Előzetesen felszámított adó levonása beállítást az Üzletadatok oldalon.”"
        ]
      },
      {
        "type": "p",
        "text": "Ha az üzlet előzetesen felszámított adót vall be, kapcsolja be az Előzetesen felszámított adó levonása beállítást az Üzletadatok alatt."
      },
      {
        "type": "h2",
        "text": "A bruttó nyereség bontásának olvasása"
      },
      {
        "type": "p",
        "text": "A bruttó nyereség az összes engedmény (tétel- és kosárengedmények, akciók, pontbeváltás) utáni, adó nélküli árbevétel mínusz a költség. Az árrés a bruttó nyereség osztva a költséggel rendelkező termékek árbevételével, így a költség nélküli termékek nem csökkentik az árrést. A visszavétel a visszavétel napján visszaveszi azt a bruttó nyereséget, amelyet ezek a tételek hoztak."
      },
      {
        "type": "p",
        "text": "Koppintson a Riportok Bruttó nyereség csempéjére az „Az árbevételtől a bruttó nyereségig” nézetért, amely soronként von le:"
      },
      {
        "type": "list",
        "items": [
          "Árbevétel (adóval)",
          "Adó",
          "Árbevétel (adó nélkül)",
          "Költség nélküli árbevétel",
          "Termékköltség",
          "Bruttó nyereség és árrés"
        ]
      },
      {
        "type": "p",
        "text": "A sorok pontosan kiadják a Bruttó nyereség csempe értékét. Az ausztráliai, egyesült királyságbeli, új-zélandi és szingapúri boltok az adósorokon a helyi adó nevét látják, például Árbevétel (adóval együtt: GST)."
      },
      {
        "type": "note",
        "text": "Ez a bruttónyereség-számítás a 3.1-es verzióban jelent meg. A korábbi verziók csak a kézi tételengedményeket vonták le, és az adóval együtt megadott árban lévő adót nyereségnek számolták, ezért a frissítés után az engedményes vagy adóval együtt árazott időszakok alacsonyabb bruttó nyereséget mutatnak. Ez javítás, nem adatvesztés."
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
    "question": "Hogyan látom, mennyit kerestem ténylegesen havonta?",
    "keywords": [
      "eredmény",
      "eredménykimutatás",
      "nyereség és veszteség",
      "nettó eredmény",
      "bruttó nyereség",
      "havi nyereség",
      "fix kiadások",
      "működési eredmény"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg az Eredmény fület az oldalsávban, a Riportok alatt, hogy lássa az egyes hónapok nettó eredményét és azt, hogyan jön ki. A lista a legújabbtól a legrégebbiig halad az első olyan hónaptól, amelyben volt tevékenység; az aktuális hónap Folyamatban jelölést kap, az egyes évek fejléce pedig összeadja a lezárult hónapok nettó eredményét. Az első sor, a Minden kiadás, hónaptól függetlenül minden kiadást megnyit."
      },
      {
        "type": "h2",
        "text": "Havi bontás"
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg az Eredmény fület az oldalsávban, a Riportok alatt.",
          "Koppintson egy hónapra, és láthatja, hogyan jön ki a nettó eredménye."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Az Eredmény havi oldala a Folyamatban jelzéssel, a nettó eredménnyel és a teljes bontással az árbevételtől a kiadásokig"
      },
      {
        "type": "p",
        "text": "A havi oldal sorrendben felsorol minden sort az eladásoktól a nettó eredményig. Az árbevételtől a bruttó nyereségig tartó sorok ugyanazokat a neveket és értékeket viselik, mint a Riportok „Az árbevételtől a bruttó nyereségig” nézete."
      },
      {
        "type": "list",
        "items": [
          "Árbevétel (adóval), Adó és Árbevétel (adó nélkül): az adóval együtt számolt árbevétel, az adó összege, valamint az összes engedmény utáni, adó nélküli árbevétel, azon a napon számítva, amikor az árut átadták. Az ausztráliai, egyesült királyságbeli, új-zélandi és szingapúri boltok a helyi adó nevét látják.",
          "Költség nélküli árbevétel: a termékköltség előtt kerül levonásra, és csak akkor látszik, ha nem nulla.",
          "Termékköltség: az eladott áruk költsége, a termékeknél megadott költségek alapján.",
          "Bruttó nyereség: az árréssel együtt jelenik meg.",
          "Költség nélküli árbevétel: a bruttó nyereség után visszaadódik, ha nem nulla.",
          "Készletveszteség: csak akkor látszik, ha a hónapban van; annak a költsége, amit a Készlet módosítása lejárat, sérülés, ajándékozás és hasonló okból kivett a készletből, plusz a selejtezett visszáru. A bruttó nyereség után következik. Lásd: „Hogyan rögzíthetem a lejárt, tönkrement vagy mintaként kiadott készletet?” A hónapnál külön Készletveszteség szakasz is van, amely indok szerint összesíti.",
          "Kezelési költség (becsült): a fizetési módok díjkulcsaiból becsült költségek.",
          "Elvesztett előlegek: csak akkor látszik, ha nem nulla; az előrendelés lemondásakor megtartott előlegek.",
          "Készpénz kerekítése: csak akkor látszik, ha nem nulla; amennyivel a használatban lévő érmékre való kerekítés a rendelések végösszegénél többet vagy kevesebbet hozott.",
          "Fix kiadások és Egyszeri kiadások: az adott hónapra rögzített tételek. Lásd: „Hogyan rögzíthetem a bérleti díjat, a béreket és más kiadásokat?”",
          "Nettó eredmény: így számolódik: árbevétel (adó nélkül) − termékköltség − készletveszteség − kezelési költség + elvesztett előlegek + készpénz kerekítése − fix kiadások − egyszeri kiadások."
        ]
      },
      {
        "type": "h2",
        "text": "Folyamatban lévő hónapok"
      },
      {
        "type": "p",
        "text": "Amíg egy hónap tart, az Eredmény már a teljes hónap fix kiadásait levonja. Például október 5-én, ha az árbevétel (adó nélkül) eddig 20 000, a termékköltség 10 000, a fix kiadások pedig 65 700, a nettó eredmény −55 700, és a Folyamatban · a hónap teljes kiadása levonásra kerül jelölést kapja."
      },
      {
        "type": "p",
        "text": "Mivel a teljes hónap kiadásai már beleszámítanak, az adott hónap nettó eredménye soha nem látszik pirosan a hónaplistán, a havi oldalon és a Riportok Nettó eredmény csempéjén. A veszteséggel záruló, lezárt hónap nettó eredménye a figyelmeztető színben jelenik meg."
      },
      {
        "type": "h2",
        "text": "Diagramok"
      },
      {
        "type": "p",
        "text": "A bontás után legfeljebb három diagram következik: a nettó eredmény hónapról hónapra, az egyes fix kiadások részaránya és a fix kiadások alakulása. A két trenddiagram legfeljebb 12 hónapot fed le a megnyitott hónapig, és csak akkor jelenik meg, ha az első eladás vagy kiadás hónapjától számítva legalább két összehasonlítható hónap van. A részarány-diagramhoz az adott hónapban kell egy fix kiadás; amíg nincs, ezen a szakaszon a Fix kiadás hozzáadása felirat látható."
      },
      {
        "type": "h2",
        "text": "Váltás a Riportok és az Eredmény között"
      },
      {
        "type": "p",
        "text": "A Riportok és az Eredmény összekapcsolódik. Ha a Riportok időszaka ez a hónap vagy pontosan egy egész hónap, a csempék második sora kiegészül egy Nettó eredmény csempével, amely a hónap tartama alatt a Folyamatban · a hónap teljes kiadása levonásra kerül jelölést viseli. Koppintson rá, hogy lássa a hónap bontását a bruttó nyereségtől a nettó eredményig. Minden más időszaknál koppintson a Havi eredmény megtekintése sorra az „Az árbevételtől a bruttó nyereségig” nézet utolsó sorában."
      },
      {
        "type": "p",
        "text": "Fordítva: az Eredményben egy hónap címe alatt az „Október jelentés megtekintése” sor megnyitja a Riportokat az adott hónappal (egyéni időszak, október 1–31.); a folyamatban lévő hónapnál az Ez a hónap nézetet nyitja meg."
      },
      {
        "type": "note",
        "text": "A nettó eredmény a jövedelemadó előtti működési eredmény, a DingPOS-ban rögzített adatokból számolva, nem adóbevallás. Ha vannak költség nélkül eladott termékek, a hónap akkor is mutat nettó eredményt, a „Nem tartalmazza N termék költségét” jelöléssel; koppintson rá, hogy lássa, melyek ezek."
      },
      {
        "type": "note",
        "text": "Az Eredmény minden csomagban elérhető. Munkatársi fiókok esetén a megnyitásához az Eredmény és kiadások jogosultság kell, amelyhez a Menedzserek és a Munkatársak alapértelmezés szerint jóváhagyást igényelnek, mert termékköltségeket és béreket is mutat."
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
    "question": "Hogyan rögzíthetem a bérleti díjat, a béreket és más kiadásokat?",
    "keywords": [
      "kiadások",
      "bérleti díj",
      "bérek",
      "rezsi",
      "fix kiadások",
      "egyszeri kiadások",
      "minden kiadás",
      "elosztás",
      "általános költségek",
      "eredmény"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az Eredményben koppintson a Kiadás hozzáadása gombra, és válassza a Fix kiadás hozzáadása vagy az Egyszeri kiadás hozzáadása lehetőséget a bérleti díj, a bérek, a rezsi és más működési költségek rögzítéséhez. Minden kiadás abban a hónapban számít, amelyikhez tartozik, nem abban, amelyikben kifizette, és ehhez igazodik minden hónap nettó eredménye. A fix kiadások minden hónapban ismétlődnek, szükség esetén módosított összeggel, az egyszeri kiadások pedig egyetlen hónapban számítanak be, vagy több hónapra vannak elosztva."
      },
      {
        "type": "h2",
        "text": "Fix kiadások"
      },
      {
        "type": "p",
        "text": "A fix kiadás olyan ismétlődő költség, amelyet minden hónapban fizet, például a bérleti díj, a rezsi vagy a bérek."
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg az Eredményt.",
          "Koppintson a Kiadás hozzáadása gombra.",
          "Válassza a Fix kiadás hozzáadása lehetőséget.",
          "Adja meg a nevet, a havi összeget és azt a hónapot, amelyben kezdődik. Korábbi hónapot választva visszamenőleg is rögzíthet.",
          "A mentéshez koppintson a ✓ jelre."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "A fix kiadás űrlapja a névvel, a havi összeggel, a kezdő hónappal és az összegmódosításokkal"
      },
      {
        "type": "p",
        "text": "Ha az összeg megváltozik, nyissa meg a kiadást, és koppintson az Összeg módosítása gombra. Válassza ki a változás kezdő hónapját, majd az Ettől a hónaptól lehetőséget egy tartós változásnál, például bérleti díj emelésekor, vagy a Csak erre a hónapra lehetőséget egyetlen hónap eltéréséhez, például az adott havi áramszámlánál. Minden módosítás megjelenik az űrlapon, és bármelyik bejegyzést megnyitva szerkesztheti vagy eltávolíthatja."
      },
      {
        "type": "p",
        "text": "Ha már nem fizeti a fix kiadást, adja meg az Utolsó beszámított hónapot. Az a hónap és az előtte lévők továbbra is beszámítanak az Eredménybe, a későbbi hónapok viszont már nem tartalmazzák."
      },
      {
        "type": "h2",
        "text": "Ütemezett módosítások a Minden kiadás alatt"
      },
      {
        "type": "p",
        "text": "A Minden kiadás alatt minden fix kiadás sora megmutatja, mi van előre beütemezve. A sor egyesíti a kezdő hónapot a következő ütemezett összegmódosítással és az utolsó beszámított hónappal. Egy sor például így szólhat: 2026. január óta · 2026. december: $420/hó · Utolsó beszámított hónap: 2027. március."
      },
      {
        "type": "p",
        "text": "A jobb oldali összeg a mai havi összeg marad, nem a közelgő díj. A Csak erre a hónapra beállított módosítás nem szerepel a soron."
      },
      {
        "type": "h2",
        "text": "Egyszeri kiadások"
      },
      {
        "type": "p",
        "text": "Az egyszeri kiadás egyszer kifizetett költség, például üzletberendezés, felszerelés, előre kifizetett biztosítás vagy egyetlen számla."
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg az Eredményt.",
          "Koppintson a Kiadás hozzáadása gombra.",
          "Válassza az Egyszeri kiadás hozzáadása lehetőséget.",
          "Adja meg az összeget és a dátumot.",
          "Állítsa be a Beszámított hónapot egyetlen hónapra, vagy kapcsolja be az Elosztás több hónapra beállítást.",
          "A mentéshez koppintson a ✓ jelre."
        ]
      },
      {
        "type": "p",
        "text": "Elosztás nélkül is megválaszthatja a Beszámított hónapot, hogy a költség abban a hónapban számítson, amelyikhez tartozik. Például a novemberben érkező októberi számla októberben is beszámítható, a valós dátum megtartásával."
      },
      {
        "type": "p",
        "text": "Üzletberendezésnél, felszerelésnél vagy előre kifizetett biztosításnál kapcsolja be az Elosztás több hónapra beállítást, válasszon 2–120 hónapos időtartamot, és jelölje ki az Első beszámított hónapot. Az űrlap előnézetben mutatja, havonta mekkora összeg számít be, és mely hónapokat érinti."
      },
      {
        "type": "p",
        "text": "Ha az elosztás korán véget ér, például felmondtak egy biztosítást, nyissa meg a kiadást, és használja az Elosztás korai befejezése lehetőséget. A hátralévő összeg az Ön által választott hónapban számít be."
      },
      {
        "type": "h2",
        "text": "Előzetesen felszámított adó a kiadásokon"
      },
      {
        "type": "p",
        "text": "Ha az Előzetesen felszámított adó levonása be van kapcsolva, az egyszeri kiadásnál rögzíthet számlaszámot és levonható adót, a fix kiadásnál pedig az egyes számlákat a Számlák alatt a Számla rögzítése gombbal. Az Eredményben beszámított összeg az marad, amit az üzlet visel, a levonható adó működéséről pedig a kapcsolódó, előzetesen felszámított adóról szóló cikk szól."
      },
      {
        "type": "note",
        "text": "Azt adja meg, amit az üzlet ténylegesen visel, a visszaigényelhető adó nélkül. Az eladásra szánt áru és az alapanyagok, amelyekből elkészíti, ehelyett a Beszerzésen keresztül kerülnek be, mert eladáskor a termékköltségben számítanak be. A követett készletű fogyóeszközöket felhasználáskor a Készlet módosítása rögzíti Bolti fogyóeszköz indoklással, nem kiadásként. A (visszajáró) kaució, a hitel tőkéje és a tulajdonos kivétele nem kiadás. A módosítások a ✓ jelre koppintva együtt mentődnek, és ha a változás lezárult hónapot érint, a rendszer előbb megmondja, mely hónapok nettó eredménye módosul."
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
    "question": "Hogyan exportálhatom az adójelentést a könyvelőmnek?",
    "keywords": [
      "adójelentés exportálása",
      "Adójelentés",
      "Exportálás",
      "Excel-munkafüzet",
      "CSV",
      "PDF-jelentés",
      "Adóösszesítő",
      "Előzetesen felszámított adó részletei",
      "könyvelő"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg az Adójelentést, koppintson a jobb felső sarokban az Exportálás gombra, és válasszon CSV, Excel-munkafüzet (XLSX) vagy PDF-jelentés formátumot. A fájl teljes képernyős előnézetben nyílik meg, ahol a megosztás gombra koppintva mentheti vagy elküldheti a könyvelőjének. Minden formátum ugyanazokat az adatokat tartalmazza, amelyek a képernyőn látszanak."
      },
      {
        "type": "h2",
        "text": "Az exportálás menete"
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg a Riportokat, és válassza ki az időszakot, például egy kéthavi bevallási időszakhoz az egyéni november 1-jétől december 31-ig tartó tartományt, vagy egy negyedéves tartományt.",
          "Koppintson az Adó csempére az Adójelentés megnyitásához. Az export pontosan erre az időszakra vonatkozik.",
          "Koppintson az Exportálás gombra az Adójelentés jobb felső sarkában. Egy menü sorolja fel a formátumokat, és az utoljára ezen az iPaden exportált be van jelölve.",
          "Válasszon formátumot, például Excel-munkafüzet (XLSX), a teljes képernyős előnézet megnyitásához. A CSV-fájlok táblázatként jelennek meg, az Excel-munkafüzetben pedig lapok között válthat, például először a Summary lapot ellenőrizheti.",
          "Koppintson az előnézet jobb felső sarkában lévő megosztás gombra a fájl mentéséhez vagy a könyvelőnek való elküldéséhez. Az előnézet bezárása visszavisz az Adójelentéshez."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Az Adójelentés megnyitott Exportálás menüvel, amely felsorolja a fájlformátumokat"
      },
      {
        "type": "p",
        "text": "Ha az export nem sikerül, az app a „A fájl exportálása nem sikerült” és a „Próbálja újra az exportálást.” üzenetet mutatja. Semmi nem íródik ki; exportáljon újra."
      },
      {
        "type": "h2",
        "text": "Exportformátumok"
      },
      {
        "type": "list",
        "items": [
          "Adóösszesítő (CSV): jelentéssoronként egy sor (minden adó és adókulcs, a 0%-os adókulcsú és az adó nélküli), az eladásokkal, a visszavételekkel és a nettó összeggel, adó előtt és az adóval.",
          "Minden bizonylat (CSV): adónként bizonylatonként egy sor, a dátummal és időponttal, a nyugtaszámmal, a bizonylat típusával (eladás, visszavétel vagy egy sztornó visszafordítása), a vevő nevével, az összegekkel és a fizetési módokkal. A sztornó a sztornó napján egy visszafordító sort ad hozzá.",
          "Napi összesítő (CSV): az összesítő naponként, majd egy második táblázat a befizetésekről naponként és fizetési módonként.",
          "Előzetesen felszámított adó részletei (CSV): csak akkor jelenik meg, ha a jelentésben van előzetesen felszámított adó kártya. Soronként egy sor minden beszerzési rendelés és kiadás minden előzetesen felszámított adó sorához, a beszállítóval, a beszállító adószámával és a számlaszámmal.",
          "Excel-munkafüzet (XLSX): a Summary, Documents és Daily lap megfelel a három eladási CSV-nek, a Purchases lappal kiegészítve, ha a jelentés előzetesen felszámított adót mutat. Az összegek számcellák, és minden oszlop a tartalmához igazodik, így semmi nem nyílik meg levágva.",
          "PDF-jelentés: A4-es jelentés az app nyelvén az üzlet nevével, az időszakkal, az adómóddal, a pénznemmel és a jelentés szakaszaival. Az ausztráliai, új-zélandi, szingapúri és egyesült királyságbeli boltok először a Bevallás rovatait kapják; az előzetesen felszámított adó kártyái követik, ha látszanak. Az előnézetben a Jelölés eszközzel aláírhatja vagy megjegyzésekkel láthatja el a fájlt, hogy a megjelölt fájlt oszthassa meg; ugyanazon időszak ismételt exportálása tiszta másolatot ír."
        ]
      },
      {
        "type": "h2",
        "text": "Formázás könyvelőprogramokhoz"
      },
      {
        "type": "p",
        "text": "A CSV-fájlok UTF-8 kódolásúak és vesszővel tagoltak, az oszlopnevek az app nyelvétől függetlenül rögzített angol nevek, hogy a könyvelőprogramok be tudják olvasni őket. Az összegek a pénznem tizedesjegyeit és mínuszjelet használnak, szimbólum és ezreselválasztó nélkül (például 80.97, -40.00, vagy 1000 egy jenes boltban). A dátumok így néznek ki: 2026-11-03."
      },
      {
        "type": "p",
        "text": "Az =, +, - vagy @ jellel kezdődő szövegcellák (például az =1+1 nevű vevő) elejére egy ' kerül, hogy a táblázatkezelők szöveget mutassanak képlet futtatása helyett. Az összegek elé soha nem kerül."
      },
      {
        "type": "p",
        "text": "A fájlnevek tartalmazzák az időszakot, például tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx és tax-report_2026-11-01_2026-11-30.pdf, így a különböző időszakok fájljai soha nem írják felül egymást."
      },
      {
        "type": "h2",
        "text": "Jogosultságok és adatvédelem"
      },
      {
        "type": "p",
        "text": "Minden csomagban lehet exportálni, a Lite csomagban is. A személyzetnek a Riportok jogosultság kell, ugyanúgy, mint az Adójelentéshez."
      },
      {
        "type": "p",
        "text": "Az előzetesen felszámított adót tartalmazó fájlok először azokat a jóváhagyásokat kérik, amelyeket a kártyáik igényelnek: a Költség és nyereség jogosultságot a beszerzési rendelésekhez, az Eredmény és kiadások jogosultságot a kiadásokhoz. Ez az Előzetesen felszámított adó részletei (CSV) fájlra, valamint az Excel-munkafüzet (XLSX) és a PDF-jelentés fájlra vonatkozik, ha megjelennek az előzetesen felszámított adó kártyái. Ha megszakítja, semmi nem íródik ki; a három eladási CSV soha nem kér jóváhagyást."
      },
      {
        "type": "note",
        "text": "A Minden bizonylat (CSV) vevőneveket tartalmaz, az előzetesen felszámított adót tartalmazó fájlok pedig beszállítói neveket és adószámokat. Csak olyanokkal ossza meg őket, akik láthatják ezeket."
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
    "question": "Hogyan rögzíthetem az előzetesen felszámított adót (a beszerzések áfáját vagy GST-jét)?",
    "keywords": [
      "előzetesen felszámított adó",
      "áfa",
      "GST",
      "Előzetesen felszámított adó levonása",
      "Előzetesen felszámított adó a beszerzési rendeléseken",
      "Előzetesen felszámított adó a kiadásokon",
      "Beszállító adószáma",
      "beszerzési rendelések",
      "adójelentés"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kapcsolja be az Előzetesen felszámított adó levonása beállítást a Beállítások → Üzletadatok alatt, hogy a beszerzési rendeléseken és a kiadásokon rögzíthesse a beszállítói számlákon szereplő levonható adót. Mindkét űrlapon megjelenik egy előzetesen felszámított adó szakasz, ahová a levonható adót az egyes számlákról átmásolja. Az adójelentés két kártyán sorolja fel: Előzetesen felszámított adó a beszerzési rendeléseken és Előzetesen felszámított adó a kiadásokon."
      },
      {
        "type": "h2",
        "text": "Kapcsolja be az Előzetesen felszámított adó levonása beállítást"
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg a Beállítások → Üzletadatok oldalt, és keresse meg az adókártyát.",
          "Az Adó felszámítása alatt kapcsolja be az Előzetesen felszámított adó levonása kapcsolót."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Az Üzletadatok adókártyája bekapcsolt Előzetesen felszámított adó levonása kapcsolóval és alatta a súgószöveggel"
      },
      {
        "type": "p",
        "text": "Az Előzetesen felszámított adó levonása csak akkor jelenik meg, ha az üzletnek legalább egy adója van, és az új üzleteknél, illetve a frissítés után kikapcsolva indul. A kapcsoló átállítása azonnal mentődik, és a Tevékenységnaplóban az Adóbeállítások alatt jelenik meg. Bekapcsolt állapotban a beszerzési árakat és a termékköltségeket a levonható adó előtt adja meg; a nem levonható adó a költségben marad."
      },
      {
        "type": "note",
        "text": "Az Előzetesen felszámított adó levonása kapcsoló minden csomagban megvan, a Beszerzéshez viszont Standard vagy magasabb csomag kell. Kikapcsolva az új rekordokon elrejti a mezőket; a meglévő rekordok megtartják az előzetesen felszámított adójukat és a fizetendő összegüket, a korábbi adójelentések pedig változatlanok maradnak."
      },
      {
        "type": "h2",
        "text": "Beszerzési rendelések"
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg a Beszerzést, és koppintson az Új beszerzés gombra.",
          "Az egységárakat a levonható adó előtt adja meg, majd a további költségeken túl görgessen le az Előzetesen felszámított adóhoz.",
          "Ellenőrizze a Számla keltét, amely alapértelmezés szerint a rendelés dátuma, és szükség esetén adja meg a nem kötelező Számlaszámot és a Beszállító adószámát.",
          "Az Adókulcs mezőnél válasszon egy üzleti adót, vagy válassza az Egyéb adókulcs… lehetőséget legfeljebb 3 tizedesjegyű adókulcs beírásához, például 9,975%.",
          "Ellenőrizze a Nettó értéket, amely a rendelés adó előtti végösszegéből indul, és másolja át a Levonható adót a számláról.",
          "További adókulcsokhoz koppintson az Adókulcs hozzáadása gombra."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Beszerzési rendelés az Előzetesen felszámított adó szakasszal, számlamezőkkel, egy adókulcssorral és összesítéssel"
      },
      {
        "type": "p",
        "text": "A Levonható adó üresen indul; a DingPOS soha nem számolja ki az adókulcsból, és elfogadja a számla kerekítését. Például 10 × $300 liszt plusz $100 szállítás az AB-12345678 számú, 2026. június 30-i számlán, egyetlen 5%-os sorral, amelynek Nettó értéke $3,100 és Levonható adója $155, a következőt adja: Nettó összesen $3,100, Előzetesen felszámított adó $155 és Fizetendő összeg $3,255, amely a listában, a rendelés részleteiben és a Nyitott számlák között látszik. A beszállítónál megadott Beszállító adószáma az új rendeléseknél előre kitöltődik; a mentett rendelések megtartják a sajátjukat."
      },
      {
        "type": "p",
        "text": "Ha egy számla késve érkezik, nyissa meg az átvett rendelést, és koppintson az Előzetesen felszámított adó rögzítése gombra az Előzetesen felszámított adó kártyán, vagy a Szerkesztés gombra a módosításhoz. Csak a Fizetendő összeg változik; a készlet, a termékköltség és a kifizetett vagy kifizetetlen állapot változatlan marad. A sztornózott rendeléseknél az Előzetesen felszámított adó csak olvasható, a frissítés előtt mentett rendeléseket pedig a rendszer nem tölti ki visszamenőleg."
      },
      {
        "type": "h2",
        "text": "Kiadások"
      },
      {
        "type": "p",
        "text": "Az Eredmény → Egyszeri kiadások alatt az űrlap az összeg alatt Számlaszám mezővel és előzetesen felszámított adó sorokkal bővül. Az összeget a levonható adó előtt tartsa, és csak a levonható adót másolja át. Egy $1,100-os irodaszer-számlánál, amelyből $100 levonható, adjon meg $1,000-et és egy 10%-os, $1,000 és $100 összegű sort; a Bruttó $1,100-at mutat, az Eredmény pedig $1,000-et számol. Az ehhez tartozó előzetesen felszámított adó egészében a kiadás dátumán számít, soha nem követi a Beszámított hónapot vagy az elosztást."
      },
      {
        "type": "p",
        "text": "Az Eredmény → Fix kiadások alatt nyisson meg egy mentett kiadást, például a bérleti díjat vagy a rezsit, és minden számla megérkezésekor koppintson a Számla rögzítése gombra a Számlák alatt, a számla keltével, nem kötelező számlaszámmal és legalább egy adókulcssorral. Ha a bérleti díj havi $30,000, és a júliusi és az augusztusi számlán is van egy 5%-os, $30,000 és $1,500 összegű sor, a júliustól szeptemberig tartó jelentés $3,000 előzetesen felszámított adót tartalmaz, miközben az eredménykimutatás továbbra is havonta $30,000-et számol."
      },
      {
        "type": "p",
        "text": "Egy korábbi hónap előzetesen felszámított adójának módosításakor a rendszer megkérdezi: „Szeretnéd menteni a módosítást?”, és figyelmeztet, hogy a hónap adójelentése megváltozik, ha azt már benyújtotta. Az aktuális havi módosítások és a vázlatok kérdés nélkül mentődnek."
      },
      {
        "type": "note",
        "text": "A DingPOS nem számolja ki az importáfát, a fordított adózást és a részleges levonást. A levonható adót másolja át a számláról, a nem levonható adót pedig tegye a nettó összegbe."
      },
      {
        "type": "h2",
        "text": "Adójelentés"
      },
      {
        "type": "p",
        "text": "Az eladási kártyák után két kártya következik: Előzetesen felszámított adó a beszerzési rendeléseken és Előzetesen felszámított adó a kiadásokon. Mindegyik adókulcsonként egy sort, egy Nincs előzetesen felszámított adó sort, valamint a Nettó, a Levonható adó és a Bruttó összesítését listázza. Az összesítések az előzetesen felszámított adó nélküli beszerzéseket is tartalmazzák, bár egyes bevallások csak az előzetesen felszámított adót tartalmazó sorokat veszik figyelembe."
      },
      {
        "type": "list",
        "items": [
          "A beszerzési rendelések a Számla kelte szerint számítanak, vagy ha az üres, a rendelés dátuma szerint.",
          "A sztornózott beszerzési rendelések negatív összegként számítanak a sztornó napján.",
          "Az egyszeri kiadások egészükben a kiadás dátumán számítanak.",
          "A fix kiadások számlái a számla keltén számítanak."
        ]
      },
      {
        "type": "p",
        "text": "Az Előzetesen felszámított adó a beszerzési rendeléseken a Költség és nyereség, az Előzetesen felszámított adó a kiadásokon az Eredmény és kiadások jogosultságot igényli; a jogosultság nélküli személyzet a kártya címe alatt a „Kérjen jóváhagyást egy menedzsertől” feliratot látja. Az Adó csempe továbbra is csak az eladásokon beszedett adót mutatja, soha nem csökkentve az előzetesen felszámított adóval, mert a japán egyszerűsített módszer és az egyesült királyságbeli Flat Rate Scheme másképp működik. Az ausztráliai, új-zélandi, szingapúri és egyesült királyságbeli boltok ezeket az összegeket a Bevallás rovataiban is látják."
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
    "question": "Hol találom az adójelentést, és hogyan értelmezzem?",
    "keywords": [
      "adójelentés",
      "Adójelentés",
      "áfa",
      "GST",
      "forgalmi adó",
      "Riportok",
      "Adó",
      "Eladások és adó adókulcsonként",
      "Fizetési mód szerint"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg a Riportokat, és koppintson az Adó csempére az Adójelentés megtekintéséhez, amely a Riportok által mutatott időszakra adókulcsonként listázza az eladásokat és az adót. Ezeket az adatokat átmásolhatja egy áfa-, GST- vagy forgalmiadó-bevallásba, vagy elküldheti a könyvelőnek. A későbbi adómódosítások soha nem változtatják meg a tárolt bizonylatok adatait."
      },
      {
        "type": "h2",
        "text": "Az adójelentés megnyitása"
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg a Riportokat, és válassza ki az időszakot, például az Ez a hónap vagy egy Egyéni időszak.",
          "Keresse meg az Adó csempét a második sorban, az Engedmények összesen után.",
          "Koppintson az Adó csempére vagy az Adójelentés › feliratra."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "A Riportok az Ez a hónap időszakkal, az Adó csempével és az Adójelentés › lábléccel"
      },
      {
        "type": "p",
        "text": "Ez a csempe az egyetlen bejárat. Az alcíme az időszakban beszedett adókat nevezi meg, a legnagyobb összeggel kezdve: kettőt név szerint, hármat vagy többet például így: 3 adó, köztük PST 7%. A fejléc a Riportok időszakát mutatja (Ez a hónap · nov. 1. – nov. 30.), időszakválasztó és a múlt havi gyorsgomb nélkül, mert a bevallási időszakok eltérőek (Tajvanon két hónap, Ausztráliában negyedév, Japánban egy év)."
      },
      {
        "type": "p",
        "text": "Az adó nélküli, és az időszakban adóköteles eladás nélküli boltoknál nincs Adó csempe; a bizonylat nélküli időszakoknál a Riportok üres állapota látszik. A törölt adók megtartják a csempét azokra az időszakokra, amelyekben az adójuk alatt történt eladás van."
      },
      {
        "type": "note",
        "text": "Minden csomagban, a Lite csomagot és a próbaidőszakot is beleértve, megvan a csempe, a jelentés és minden export. A személyzetnek a Riportok jogosultság kell; a jóváhagyást igénylő szerepkörök a jóváhagyási helyőrzőt látják, amíg egy menedzser jóvá nem hagyja."
      },
      {
        "type": "h2",
        "text": "A jelentés olvasása"
      },
      {
        "type": "p",
        "text": "Az ausztráliai, új-zélandi, szingapúri és egyesült királyságbeli boltok először a Bevallás rovatait látják."
      },
      {
        "type": "p",
        "text": "Az Eladások és adó adókulcsonként kártya adókulcsonként egy sort listáz: elöl a legmagasabb kulcs, utána a 0%-os adókulcsú sor, a végén az Adó nélküli (az adó nélküli termékek). Az oszlopok az Eladások, a Visszavételek és sztornók, valamint a Nettó, mindegyik Adó előtt és Adó bontásban; a 0%-os adókulcsú és az Adó nélküli sorokban nincs adósor. Az üzlet minden adója kap egy sort akkor is, ha nem volt eladás. Az átnevezés egy sort tart meg, a kulcsmódosítás újat ad hozzá."
      },
      {
        "type": "p",
        "text": "Az Összesítés az Eladások adó előtt, az Adó és az Eladások adóval értéket mutatja. Két vagy több adónál egy megjegyzés közli, hogy egy eladás több adót is tartalmazhat, ezért a soronkénti eladások nem adhatók össze; az Eladások adó előtt minden eladást egyszer számol. Egy brit negyedévnél a VAT 20% mutathat Adó előtt £1,000 és Adó £200 értéket, 0%-os adókulcsú £300-at és Adó nélküli £50-et: az Összesítés Eladások adó előtt £1,350, Adó £200 és Eladások adóval £1,550 értéket ad."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Az Adójelentés az Eladások és adó adókulcsonként soraival és alatta az Összesítéssel"
      },
      {
        "type": "list",
        "items": [
          "A Fizetési mód szerint az ezekre a bizonylatokra az időszak végéig beérkezett befizetéseket listázza, a ki nem fizetett összegeket Kintlévőségek néven, a készpénz kerekítését pedig a készpénz soron belül egy Ebből készpénz kerekítése … sorban.",
          "A Nem számít eladásnak csak az elvesztett előlegeknél jelenik meg: az Elvesztett előlegeket listázza egy alcímmel, amely arra kér, hogy egyeztessen a könyvelővel a bevallásról; sem az eladásokhoz, sem az adóhoz nem adódik hozzá.",
          "Az Előzetesen felszámított adó levonása bekapcsolásával, vagy ha az időszakban rögzítettek előzetesen felszámított adót, az üzletek az Előzetesen felszámított adó a beszerzési rendeléseken és az Előzetesen felszámított adó a kiadásokon kártyát is látják."
        ]
      },
      {
        "type": "h2",
        "text": "Melyik napon számít egy bizonylat"
      },
      {
        "type": "p",
        "text": "Koppintson az Eladások és adó adókulcsonként melletti ⓘ ikonra:"
      },
      {
        "type": "list",
        "items": [
          "A sztornó abban az időszakban számít, amelyben sztornózták, negatív összegként, így a már bevallott időszak soha nem változik. A Riportok ezzel szemben az eladás időszakából veszi ki.",
          "A visszavétel a saját dátumán számít. Cserénél az új termékek eladásként, a visszavett termékek visszavételként számítanak.",
          "Az előrendelés az átvétel napján számít, a számlás eladás az eladás napján."
        ]
      },
      {
        "type": "p",
        "text": "Egy október 30-i eladás, amelyet november 2-án sztornóztak, az októberi Eladások között marad, és negatív összegként jelenik meg a novemberi Visszavételek és sztornók között. A számlás eladás későbbi kiegyenlítése nem helyezi át."
      },
      {
        "type": "h2",
        "text": "Beszedett adó és a Riportok összesítései"
      },
      {
        "type": "p",
        "text": "Az Adó csempe megegyezik az Adójelentés Adó összesítésével. Csak az időszakokon átívelő sztornóknál tér el a Riportok „Az árbevételtől a bruttó nyereségig” nézetének Adó sorától, mert a Riportok a sztornózott eladást az eredeti időszakából veszi ki."
      },
      {
        "type": "note",
        "text": "Az Adójelentés az eladásokon beszedett adót mutatja, soha nem a fizetendő adót (kimenő mínusz előzetesen felszámított adó), mert nem minden ország számolja így, például a japán egyszerűsített módszer vagy az egyesült királyságbeli Flat Rate Scheme."
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
    "question": "Mely adatok kerülnek a BAS, GST vagy VAT bevallásom rovataiba?",
    "keywords": [
      "Bevallás rovatai",
      "Adójelentés",
      "Riportok",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "Előzetesen felszámított adó levonása"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az Ausztráliában, Új-Zélandon, Szingapúrban vagy az Egyesült Királyságban működő boltoknál az Adójelentés a Bevallás rovataival nyílik, amely minden rovatot és az ugyanabból a jelentésből származó összeget mutatja. Minden csomagban lefedi az Ausztrália BAS · Simpler BAS, az Új-Zéland GST101A, a Szingapúr GST F5 és az Egyesült Királyság VAT Return bevallást."
      },
      {
        "type": "h2",
        "text": "A Bevallás rovatainak megnyitása"
      },
      {
        "type": "steps",
        "items": [
          "Nyissa meg a Riportokat.",
          "Koppintson az Adó csempére az Adójelentés megnyitásához."
        ]
      },
      {
        "type": "p",
        "text": "A Bevallás rovatai az első kártya az Eladások és adó adókulcsonként fölött, és az alcíme megnevezi a bevallást. Minden összeg ugyanabból a jelentésből származik, centekkel együtt, és semmit nem számol újra a rendszer. Az exportált PDF-jelentés ugyanezzel a kártyával nyílik. Azok az üzletek, amelyeket még azelőtt állítottak be, hogy az app rögzítette az országot, a pénznem alapján számítanak (AUD, NZD, SGD vagy GBP); a többi üzletnél nincs Bevallás rovatai kártya."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "A Bevallás rovatai kártya az Adójelentés tetején, az egyesült királyságbeli VAT Return 1., 4., 6. és 7. rovatával"
      },
      {
        "type": "h2",
        "text": "Ausztrália BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: GST-vel terhelt, GST-mentes és adó nélküli eladások együtt; a „Does the amount shown at G1 include GST?” kérdésre a válasz: Yes (igen)",
          "1A GST on sales: Eladások utáni adó",
          "1B GST on purchases: Levonható adó a beszerzési rendelések és kiadások után"
        ]
      },
      {
        "type": "p",
        "text": "Az ATO egész dollárt kér: a BAS-on hagyja el a centeket, ne kerekítsen felfelé."
      },
      {
        "type": "h2",
        "text": "Új-Zéland GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: GST-vel terhelt eladások, a 0%-os adókulcsúakkal együtt, az adó nélküli eladások nélkül",
          "Box 6 Zero-rated supplies: 0%-os adókulcsú eladások",
          "Box 11 Total purchases and expenses: GST-t tartalmazó beszerzési rendelések és kiadások, a GST-vel együtt; az előzetesen felszámított adó nélküli és a 0%-os adókulcsú beszerzések nélkül"
        ]
      },
      {
        "type": "p",
        "text": "A myIR a 8. és a 12. rovatot 3/23-ként számolja, ezért ez néhány centtel eltérhet a jelentés adójától."
      },
      {
        "type": "h2",
        "text": "Szingapúr GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: Adóköteles eladások nettó értéke",
          "Box 2 Total value of zero-rated supplies: 0%-os adókulcsú eladások; csak az export és a nemzetközi szolgáltatások lehetnek 0%-os adókulcsúak",
          "Box 5 Total value of taxable purchases: GST-t tartalmazó vagy 0%-os adókulcsú beszerzési rendelések és kiadások nettó értéke; az előzetesen felszámított adó nélküli beszerzések nélkül",
          "Box 6 Output tax due: Eladások utáni adó",
          "Box 7 Input tax and refunds claimed: Levonható adó a beszerzési rendelések és kiadások után"
        ]
      },
      {
        "type": "h2",
        "text": "Egyesült Királyság VAT Return"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: Eladások utáni adó",
          "Box 4 VAT reclaimed on purchases and other inputs: Levonható adó a beszerzési rendelések és kiadások után",
          "Box 6 Total value of sales and all other outputs excluding any VAT: Eladások nettó értéke, a 0%-os adókulcsú, az adómentes és az adó nélküli eladásokkal együtt",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: Beszerzési rendelések és kiadások nettó értéke, az előzetesen felszámított adó nélküli beszerzésekkel együtt; vonja le a rögzített béreket és az üzleti ingatlanadót (business rates)"
        ]
      },
      {
        "type": "p",
        "text": "A szokásos VAT-elszámoláshoz; a Flat Rate Scheme esetén az 1. és a 6. rovatot másképp kell kiszámolni. Az Egyesült Királyságban az előleg utáni VAT akkor esedékes, amikor megkapja az előleget; a DingPOS az előrendelést az átvételekor tünteti fel."
      },
      {
        "type": "p",
        "text": "Példa egy brit negyedévre: £1,000 VAT 20%-os eladás adó előtt (adó £200), £300 0%-os adókulcsú, £50 adó nélküli, £400 plusz £80 VAT értékű beszerzési rendelések és £250 előzetesen felszámított adó nélküli kiadások esetén a Box 1 £200, a Box 4 £80, a Box 6 £1,350 és a Box 7 £650."
      },
      {
        "type": "h2",
        "text": "Üres rovatok és személyzeti hozzáférés"
      },
      {
        "type": "p",
        "text": "Azok a rovatok, amelyeket az adóhatóság számol ki, és a fizetendő összegek kimaradnak (UK Box 3 és 5; Szingapúr Box 3, adómentes szolgáltatások). Új-Zélandon és Szingapúrban az adó nélküli eladások egyik rovatban sem szerepelnek; ha adót kellett volna felszámítani, kérdezze meg a könyvelőjét."
      },
      {
        "type": "p",
        "text": "A beszerzési rovatok (AU 1B, NZ 11, SG 5 és 7, UK 4 és 7) az Előzetesen felszámított adó levonása beállítást igénylik, különben a — jelet és a Nincs rögzített előzetesen felszámított adó feliratot mutatják, soha nem 0-t. A UK Box 7-hez az Előzetesen felszámított adó a beszerzési rendeléseken és az Előzetesen felszámított adó a kiadásokon is kell; csak a beszerzési rendelések a Box 4-et töltik ki, a Box 7 pedig — marad."
      },
      {
        "type": "p",
        "text": "Az Eredmény és kiadások vagy a Költség és nyereség jogosultság nélküli személyzet nem látja azokat a rovatokat, amelyek mindkét kártyát összeadják, amíg egy menedzser jóvá nem hagyja a „Kérjen jóváhagyást egy menedzsertől” gombbal."
      },
      {
        "type": "note",
        "text": "Az eladások és a számlák dátuma alapján számolva; a DingPOS nem követi a fizetési dátumokat. Ha pénzforgalmi vagy fizetési alapon vall, igazítsa ezeket az adatokat."
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
    "question": "Hogyan hozhatok létre akciót?",
    "keywords": [
      "akció",
      "akció létrehozása",
      "kedvezmény",
      "egyet fizet, kettőt kap",
      "összegküszöb",
      "happy hour",
      "kupon"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg a Beállítások → Akciók részt. Ezek a támogatott akciótípusok:"
      },
      {
        "type": "list",
        "items": [
          "Összegküszöb: X összeg elköltése után Y összegű vagy Y%-os engedmény jár.",
          "Egyet fizet, kettőt kap, valamint minden N-edik termékre vonatkozó akciók.",
          "Bónuszpont-szorzók.",
          "Csak adott tagsági szintnek szóló vagy születési hónapos ajánlatok.",
          "Vegyen A-t, kapjon B-t akciók, fizetős kiegészítők és fix árú csomagakciók."
        ]
      },
      {
        "type": "p",
        "text": "Minden akció időzíthető (Happy Hour idősávok, adott hétköznapok, éjfélen átnyúló időszak), korlátozható bizonyos termékekre, és szabályozható prioritással, halmozási szabályokkal és felhasználási korlátokkal. A feltételeknek megfelelő akciók a fizetésnél automatikusan érvényesülnek – kuponkódokra nincs szükség."
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
    "question": "Nem érvényesül az akció – mit ellenőrizzek?",
    "keywords": [
      "akció",
      "nem működik az akció",
      "nem érvényesül",
      "hibaelhárítás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ellenőrizze sorban a leggyakoribb okokat:"
      },
      {
        "type": "steps",
        "items": [
          "Időzítés: a mai nap beleesik az akció időszakába? Egy Happy Hour idősáv korlátozza a hétköznapot vagy az időpontot?",
          "Hatókör: a kosárban lévő termékek beleesnek az akció termék- vagy kategóriahatókörébe? A termék Kizárás az akciókból beállítású (a szabadáras termékek alapból azok)? Elérte a vásárlás az összegküszöböt?",
          "Célközönség: az akció egy tagsági szintre vagy születési hónapra korlátozott? Kiválasztotta a tagot a fizetésnél?",
          "Felhasználási korlátok: elérte az akció az összes felhasználás korlátját, vagy ennek a vevőnek a korlátját? A születési hónaphoz kötött akció vevőnkénti korlátját naptári évenként számolja a rendszer.",
          "Halmozás: egy magasabb prioritású, „a további akciók leállítása” beállítású akció blokkolja?"
        ]
      },
      {
        "type": "p",
        "text": "Ha minden rendben van, de az akció mégsem érvényesül, küldje el nekünk e-mailben az akció beállításainak képernyőképét, és segítünk a hiba okának kiderítésében."
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
    "question": "Hogyan működik a hűségpont-rendszer?",
    "keywords": [
      "pontok",
      "hűségpont",
      "hűségprogram",
      "jutalom",
      "pontbeváltás",
      "üdvözlő pontok",
      "kézi pontmódosítás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg a Beállítások → Hűségprogram részt, és adjon meg két szabályt: hány pontot kap a vevő X összegű vásárlás után, illetve hány pontot kell beváltani M összegű engedményhez (rendelésenkénti beváltási korlát is megadható). Az új tagoknak automatikusan üdvözlő pontokat is adhat. Az új üzletekben a pontgyűjtés alapból ki van kapcsolva: kapcsolja be a Hűségprogram engedélyezése kapcsolót, és adjon meg egy szabályt. Ha a kapcsoló be van kapcsolva, de nincs szabály megadva, az app figyelmeztet: „Még nincs gyűjtési vagy beváltási szabály megadva, ezért az eladásokkal nem lehet pontot gyűjteni vagy beváltani.”"
      },
      {
        "type": "p",
        "text": "Válassza ki a tagot az eladáshoz a kosárban vagy a fizetési képernyőn, és a pontok automatikusan jóváíródnak; beváltáshoz adja meg a felhasználandó pontokat. A sikeres eladás képernyője mutatja a megszerzett pontokat és az új egyenleget, például így: „+22 pont · összesen 122 pont”. Számlás eladásnál vagy még nem teljesen kifizetett előrendelésnél a pontok csak a pénz beérkezésekor íródnak jóvá, ilyenkor ez áll ott: „jóváírás kiegyenlítéskor” vagy „jóváírás az átvételkor történő fizetéskor”. A rendelés sztornózásakor a rendszer visszavonja a vele szerzett pontokat, a beváltott pontokat pedig visszatéríti."
      },
      {
        "type": "p",
        "text": "Ha kézzel szeretne pontot hozzáadni vagy levonni (például egy kimaradt vásárlás miatt), koppintson a vevő adatlapján a Pontok kártya Módosítás gombjára, válassza a Hozzáadás vagy a Levonás lehetőséget, adja meg a pontok számát, és szükség esetén írjon indoklást (legfeljebb 100 karakter). A vevő meglévő pontjainál többet nem vonhat le. Minden módosítás megmarad a pontok előzményei között az előtte és utána érvényes egyenleggel, az indoklással és a módosító nevével."
      },
      {
        "type": "note",
        "text": "A kézi pontmódosítás a 3.5-ös verzióban jelent meg. Pro csomagban azoknak a munkatársaknak, akiknek a szerepköre jóváhagyást kér a kézi pontmódosításhoz (alapértelmezés szerint a Munkatárs szerepkörnél ez így van), a megerősítéskor egy menedzser vagy a tulajdonos PIN-kódját kell megadniuk."
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
    "question": "Mire valók a tagsági szintek?",
    "keywords": [
      "tagsági szint",
      "szint",
      "VIP",
      "arany",
      "szintlépés",
      "törzsvásárlói szint"
    ],
    "content": [
      {
        "type": "p",
        "text": "A tagsági szintek (pl. Alap, Ezüst, Arany) két célt szolgálnak: akciókat lehet rájuk célozni (pl. 10% engedmény csak az Arany szintnek), és fizetéskor első pillantásra látszik a vevő státusza."
      },
      {
        "type": "p",
        "text": "A szintek az Ön által megadott szabályok szerint automatikusan emelkedhetnek (pl. az összesített költés alapján), vagy kézzel is beállíthatók. Ha egy sztornózott rendelés szintlépést váltott ki, a szint automatikusan visszaáll."
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
    "question": "Hogyan menthetem el az adataimat?",
    "keywords": [
      "biztonsági mentés",
      "adatmentés",
      "icloud",
      "google drive",
      "dropbox",
      "felhő",
      "pillanatkép"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg a Beállítások → Felhőmentés menüpontot, válasszon az iCloud, a Google Drive és a Dropbox közül, és engedélyezze a hozzáférést. Ezután bármikor kézzel is indíthat mentést. iCloud esetén az iPadnek be kell lennie jelentkezve az iCloudba, az iCloud Drive-nak bekapcsolva kell lennie, és engedélyeznie kell a DingPOS számára az iCloud Drive használatát."
      },
      {
        "type": "p",
        "text": "A mentések a saját felhőfiókjába kerülnek. Minden felhőben csak a legutóbbi mentés marad meg – egy adat-pillanatkép és egy fájl a termékfotókkal –, és minden új mentés felülírja az előzőt."
      },
      {
        "type": "note",
        "text": "Mivel az új mentés lecseréli a régit, ha úgy gondolja, hogy az adatai már elromlottak (például tévedésből töröltek egy csomó terméket), még ne mentsen – írjon nekünk e-mailt, és közösen kitaláljuk a következő lépést."
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
    "question": "Az iCloud-mentésnél „Nincs csatlakoztatva” látszik – mit tegyek?",
    "keywords": [
      "icloud",
      "nincs csatlakoztatva",
      "icloud drive",
      "sikertelen mentés",
      "nem tud csatlakozni"
    ],
    "content": [
      {
        "type": "p",
        "text": "A DingPOS csak akkor mutatja az iCloudot csatlakoztatottnak, ha tényleg használni tudja. Ha „Nincs csatlakoztatva” szerepel, ellenőrizze három dolgot az iPad Beállítások alkalmazásában:"
      },
      {
        "type": "steps",
        "items": [
          "Be van jelentkezve az Apple-fiókjába.",
          "Az iCloud Drive be van kapcsolva.",
          "A DingPOS használhatja az iCloud Drive-ot."
        ]
      },
      {
        "type": "p",
        "text": "Ha mindhárom feltétel teljesül, térjen vissza a DingPOS Felhőmentés oldalára: az iCloud csatlakoztatottként jelenik meg. A mentések az iCloud Drive-ban, a DingPOS saját mappájában tárolódnak."
      },
      {
        "type": "note",
        "text": "A 3.0-s verzió előtt az iCloud-mentés nem működött, és minden alkalommal a „Backup.SyncError error 0” hibával leállt. Először frissítse a DingPOS-t az App Store-ban."
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
    "question": "Hogyan vigyem át az adataimat új iPadre?",
    "keywords": [
      "átvitel",
      "új ipad",
      "visszaállítás",
      "költöztetés",
      "adatok áthelyezése"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Régi iPad: nyissa meg a Beállítások → Felhőmentés menüpontot, és indítson kézi mentést. Ellenőrizze, hogy a mentés ideje frissült.",
          "Új iPad: telepítse a DingPOS-t, és végezze el a beállítási varázslót.",
          "Új iPad: nyissa meg a Beállítások → Felhőmentés menüpontot, csatlakozzon ugyanahhoz a felhőfiókhoz, és állítsa vissza az adatokat."
        ]
      },
      {
        "type": "p",
        "text": "A Visszaállítás megérintése először előnézetet nyit: egymás mellett látja az iPad és a pillanatkép termék-, rendelés- és vevőszámát, valamint minden rendelést, amelyet a visszaállítás eltávolítana. Az iPaden semmi nem változik, amíg meg nem erősíti. Ha a pillanatképet a DingPOS újabb verziója készítette, először frissítenie kell az alkalmazást. A termékfotók is visszaállnak."
      },
      {
        "type": "note",
        "text": "A visszaállítás az iPad összes adatát lecseréli a mentésre – az ezen az iPaden a mentés után létrehozott rendelések eltűnnek. Győződjön meg róla, hogy a megfelelő felhőfiókhoz csatlakozott; ha rossz mentést állított vissza, használja a Visszaállítás visszavonása funkciót."
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
    "question": "Megmaradnak az adataim, ha törlöm az alkalmazást?",
    "keywords": [
      "törlés",
      "eltávolítás",
      "adatvesztés",
      "alkalmazás törlése"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nem. A DingPOS mindent helyben, az eszközön tárol – az alkalmazás törlésével véglegesen törlődik az összes termék, rendelés, tag és beállítás, kivéve, ha bekapcsolta a felhőmentést."
      },
      {
        "type": "note",
        "text": "Az alkalmazás törlése előtt mindig indítson kézi mentést, és ellenőrizze, hogy sikerült. Az újratelepítés után állítsa vissza az adatokat a felhőből."
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
    "question": "Az alkalmazás „Nem sikerült megnyitni az üzlet adatait” üzenetet mutat – mit tegyek?",
    "keywords": [
      "nem sikerült megnyitni",
      "nem nyílik meg",
      "összeomlás",
      "indításkor összeomlik",
      "adatbázis",
      "üzlet adatai"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ne törölje az alkalmazást. Ez a képernyő azt jelzi, hogy a DingPOS nem tudta beolvasni az üzlet adatait, de az adatok még az iPaden vannak – az alkalmazás törlésével azok is törlődnek."
      },
      {
        "type": "p",
        "text": "Először koppintson az Újra gombra; ha sikerül, az alkalmazás a szokott módon megnyílik. Ha a probléma továbbra is fennáll, koppintson a Kapcsolatfelvétel az ügyfélszolgálattal gombra, és írjon nekünk. Segítünk helyreállítani az adatait. Ez a képernyő soha nem helyez át és nem töröl fájlokat."
      },
      {
        "type": "p",
        "text": "Egy frissítés utáni első indításkor, vagy egy régebbi verzióból készült biztonsági mentés visszaállítása után előfordulhat, hogy először az „Adatok frissítése…” felirat jelenik meg. Ilyenkor az üzlet adatai új formátumra állnak át, ami annál tovább tart, minél több az adat; ha végzett, az alkalmazás magától megnyílik. Nem fagyott le."
      },
      {
        "type": "note",
        "text": "A leggyakoribb ok, hogy az alkalmazás egy visszaállítás közben bezárult. A 3.0-s verzió előtt emiatt az alkalmazás minden indításkor összeomlott; a 3.0-tól kezdve ehelyett ezen a képernyőn áll meg."
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
    "question": "Használhatok két iPadet együtt?",
    "keywords": [
      "két ipad",
      "több eszköz",
      "szinkronizálás",
      "megosztás",
      "második kassza"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jelenleg minden iPad adatai függetlenek – egyetlen adatállomány valós idejű megosztása két eszköz között még nem támogatott."
      },
      {
        "type": "p",
        "text": "Az adatokat a felhőmentéssel (mentés → visszaállítás) átmásolhatja egyik iPadről a másikra, ez jól működik eszközcserénél vagy egy második iPad kezdeti beállításakor. Az egyes eszközökön külön rögzített rendelések azonban nem egyesülnek automatikusan. A több eszközös szinkronizálás szerepel a terveink között."
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
    "question": "Rossz mentést állítottam vissza. Visszavonhatom?",
    "keywords": [
      "visszaállítás visszavonása",
      "visszaállítás",
      "rossz pillanatkép",
      "visszaállítási bejegyzések",
      "elveszett adatok",
      "visszaváltás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Igen. Minden felhőből történő visszaállítás visszaállítás előtti másolatként megőrzi a lecserélt adatokat. A Beállítások → Felhőmentés oldalon egy kártya mutatja, mikor történt az utolsó visszaállítás, és honnan. Koppintson a Visszaállítás visszavonása gombra, nézze át az előnézetet, és erősítse meg – az adatok visszaállnak a visszaállítás előtti állapotra, az alkalmazás pedig újratölt."
      },
      {
        "type": "list",
        "items": [
          "A Visszaállítás visszavonása maga is visszaállítás, és újabb másolatot őriz a lecserélt adatokról, így újbóli megérintésével ismét visszaállíthat az előző állapotra.",
          "Csak a legutóbbi másolat marad meg; a következő visszaállítás lecseréli.",
          "Csak az adatok jönnek vissza: a pillanatkép után hozzáadott termékeknél hiányzó kép látszik."
        ]
      },
      {
        "type": "p",
        "text": "Hogy ki, mikor és melyik pillanatképből állított vissza, azt ugyanezen az oldalon a Visszaállítási bejegyzések megtekintése gombbal láthatja: minden visszaállítás idejét, kezelőjét, forrását, a termék-, rendelés- és vevőszámot előtte és utána, valamint az általa eltávolított rendeléseket. A bejegyzések ezen az iPaden vannak, és visszaállítás soha nem cseréli le őket."
      },
      {
        "type": "note",
        "text": "A visszaállítás előnézete és a Visszaállítás visszavonása minden csomagban működik; a visszaállítási bejegyzések megtekintése Pro funkció. A bejegyzések Pro nélkül is íródnak (csak kezelő nélkül), így ha később Pro-ra fizet elő, mindet látni fogja."
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
    "question": "Hogyan adhatok hozzá munkatársakat, és hogyan válthatok kezelőt a kasszánál?",
    "keywords": [
      "munkatárs",
      "munkatársak",
      "menedzser",
      "fiók",
      "PIN",
      "kezelő",
      "kezelőváltás",
      "műszakváltás",
      "pénztáros",
      "kasszás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Koppintson az oldalsáv Személyzet pontjára. Első alkalommal állítsa be a tulajdonost: egy nevet és egy 4 számjegyű PIN-t. A munkatársak hozzáadásához és a jogosultságok módosításához is ez a PIN szükséges, ezért jegyezze meg – nem állítható vissza."
      },
      {
        "type": "steps",
        "items": [
          "A Személyzet oldalon koppintson a Munkatárs hozzáadása gombra, adjon meg egy nevet, válasszon szerepkört (Menedzser vagy Munkatárs), és állítson be egy 4 számjegyű PIN-t.",
          "Az aktuális kezelő az oldalsáv alján és a fizetés képernyő jobb felső sarkában látható. Műszakváltáskor koppintson rá, válassza ki a nevét, és adja meg a PIN-jét.",
          "Ettől kezdve minden rendeléshez, fizetéshez, valamint készlet- vagy pontmozgáshoz rögzül, ki kezelte azokat; ez a rendelések listájában és részleteiben látható. A sztornózott rendeléseknél az is látszik, ki sztornózta őket."
        ]
      },
      {
        "type": "p",
        "text": "Ha valaki távozik, használja a Munkatárs inaktiválása gombot: az előzményei érintetlenek maradnak, és később újra aktiválhatja. Az átnevezés nem érinti a régi rendeléseket – azok az akkori nevet őrzik."
      },
      {
        "type": "note",
        "text": "A Személyzet funkció Pro szolgáltatás (a próbaidőszak alatt is elérhető). Ha a Pro megszűnik, a munkatársak adatai és minden rendelés kezelője megmarad, az új rendeléseket pedig a tulajdonos nevén rögzítjük; a Pro újbóli előfizetésekor minden visszatér."
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
    "question": "Mit tegyek, ha elfelejtettem a tulajdonos PIN-kódját?",
    "keywords": [
      "PIN",
      "elfelejtett PIN",
      "jelszó",
      "visszaállítás",
      "tulajdonos",
      "helyreállítás",
      "kizárás",
      "nem tudok belépni"
    ],
    "content": [
      {
        "type": "p",
        "text": "A tulajdonos PIN-kódja nem állítható vissza, és az ügyfélszolgálatunk sem tudja feloldani. A PIN az üzlet adataival együtt tárolódik, ezért az alkalmazás törlése és újratelepítése, majd a felhőből való visszaállítás ugyanazt a PIN-t hozza vissza."
      },
      {
        "type": "p",
        "text": "A tulajdonos létrehozásakor és minden tulajdonosi PIN-csere alkalmával megjelenik a figyelmeztetés: „Jegyezze meg ezt a PIN-t. Ha elfelejti, nem állítható vissza.” Tartsa olyan helyen, amelyhez csak Ön fér hozzá."
      },
      {
        "type": "p",
        "text": "A tulajdonos PIN-kódja nélkül minden, ami ezt igényli, elérhetetlen marad: munkatársak hozzáadása vagy szerkesztése, a szerepkör-jogosultságok módosítása és a Tevékenységnapló megtekintése. A munkatársak a saját PIN-kódjukkal továbbra is lebonyolíthatják az eladásokat, és elvégezhetik a napi munkát."
      },
      {
        "type": "note",
        "text": "Ha egy munkatárs felejti el a PIN-jét, az nem gond: a tulajdonos a Személyzet oldalon visszaállíthatja."
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
    "question": "Hogyan működnek a munkatársi jogosultságok és a menedzseri jóváhagyások?",
    "keywords": [
      "jogosultságok",
      "jóváhagyás",
      "menedzser",
      "engedmény felső határa",
      "munkatárs",
      "költség",
      "szerepkör"
    ],
    "content": [
      {
        "type": "p",
        "text": "Egy jogosultságnak két értéke lehet: Engedélyezett vagy Jóváhagyás szükséges – semmi sincs teljesen megtiltva. Ha a munkatárs jóváhagyást igénylő műveletet próbál végrehajtani, egy arra jogosult kolléga kiválasztja a saját nevét, és a PIN-kódja megadásával jóváhagyja a műveletet."
      },
      {
        "type": "list",
        "items": [
          "Műveletek (kézi készletmódosítás, kézi pontmódosítás, termékkezelés, a felső határ feletti engedménnyel történő fizetés): egy jóváhagyás egyetlen műveletre érvényes.",
          "Nézetek (költség és nyereség, Riportok, Eredmény és kiadások, Beállítások, biztonsági mentés és visszaállítás): a jóváhagyás addig oldja fel a nézetet, amíg a kezelő nem változik, vagy az alkalmazás a háttérbe nem kerül.",
          "Az engedmény felső határa a kézi engedményekre vonatkozik, és fizetéskor egyszer ellenőrizzük; az automatikus akciók és a pontbeváltás nem számítanak bele."
        ]
      },
      {
        "type": "p",
        "text": "Gyári alapértelmezések: a Menedzserek mindent megtehetnek a biztonsági mentés és visszaállítás, valamint az Eredmény és kiadások kivételével, engedmény felső határa nélkül; a Munkatársaknak mindenhez jóváhagyás kell, 10%-os felső határral. A tulajdonos mindig mindent megtehet, és nem szerkeszthető. A módosításhoz lépjen a Személyzet → Szerepkör-jogosultságok oldalra, koppintson a Szerkesztés gombra, és mentse egyszer – a változás azonnal mindenkire érvényes."
      },
      {
        "type": "note",
        "text": "A sztornó, a visszavétel, a számlás (utólag fizetett) eladás és a beszerzés szándékosan nem igényel jogosultságot; ezeknél csak azt rögzítjük, ki kezelte. Később a Tevékenységnaplóban nézheti át őket."
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
    "question": "Hogyan látom, ki sztornózott egy rendelést, módosította a készletet, vagy változtatta meg egy termék árát?",
    "keywords": [
      "tevékenységnapló",
      "napló",
      "ki módosította",
      "sztornó",
      "árváltozás",
      "készletmódosítás",
      "törölt termék",
      "jóváhagyások",
      "ellenőrzés"
    ],
    "content": [
      {
        "type": "p",
        "text": "Használja a Tevékenységnaplót. A Személyzet oldalon koppintson a jobb felső sarokban lévő Tevékenységnapló gombra, és adja meg a tulajdonos PIN-kódját. Itt az üzlet érzékeny műveletei láthatók, a legújabbakkal kezdve: sztornók, visszavételek, készletmódosítások és újraszámlálások, kézi pontmódosítások, jóváhagyások, a munkatársak és jogosultságok módosításai, a tulajdonos PIN-kódjának módosításai, az adóbeállítások, a termékárak és -költségek változásai, valamint a terméktörlések. A szokásos eladások nem szerepelnek benne."
      },
      {
        "type": "list",
        "items": [
          "Minden bejegyzés megmutatja, mit érintett, ki mit tett és mikor, valamint az eredményt – például „M ár 390 Ft → 350 Ft”. A sztornóhoz, visszavételhez, készletmódosításhoz vagy pontmódosításhoz megadott indok a bejegyzés harmadik sorában látható.",
          "Szűrhet munkatárs (az inaktiváltakat is beleértve), művelettípus, valamint Ma / Ez a hét / Ez a hónap szerint.",
          "Koppintson egy rendelésre, termékre vagy vevőre mutató bejegyzésre a részletei megnyitásához.",
          "A rendelés- és termékrészletek oldalán, valamint minden munkatárs saját oldalán külön lista jeleníti meg a csak rájuk vonatkozó bejegyzéseket.",
          "A törölt termékek neve és akkori ára a naplóban is látható."
        ]
      },
      {
        "type": "note",
        "text": "Minden csomag rögzíti a műveleteket; a napló megtekintése viszont csak Pro-funkció, ezért a Pro-előfizetés nem aktív időszakában keletkezett bejegyzések az újbóli előfizetés után is megjelennek. A napló a felhőmentések része."
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
    "question": "Hogyan működik az ingyenes próbaidőszak?",
    "keywords": [
      "ingyenes próba",
      "próbaidőszak",
      "30 nap",
      "ingyenes kipróbálás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az első telepítéstől számítva 30 napig a Pro csomag minden funkcióját használhatja, köztük a munkatársi fiókokat, a jogosultságokat és a tevékenységnaplót – fiók létrehozása nélkül."
      },
      {
        "type": "p",
        "text": "Ha a próbaidőszak alatt bármelyik csomagra előfizet, a próba azonnal véget ér, és onnantól a megvásárolt csomag érvényes. A próbaidőszak után a Pro funkciók, például a személyzet kezelése és a tevékenységnapló csak Pro előfizetéssel maradnak elérhetők. A Riportok használatához erre nincs szükség: minden csomag teljes egészében tartalmazza."
      },
      {
        "type": "p",
        "text": "Az utolsó 7 napban, majd az utolsó napon az app egyszer-egyszer emlékezteti Önt arra, hány nap van hátra, hogy a próbaidőszak végén szünetel a kasszázás, és hogy az adatai megmaradnak."
      },
      {
        "type": "p",
        "text": "A próbaidőszak alatt létrehozott minden adat (termékek, rendelések, tagok) teljes egészében megmarad. Az adatai soha nem törlődnek, függetlenül attól, hogy utána előfizet-e."
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
    "question": "Elvesznek az adataim, ha lejár a próbaidőszak?",
    "keywords": [
      "lejárat",
      "próbaidőszak vége",
      "zárolt",
      "adatok",
      "lejárt próba"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nem – az adatai örökre az eszközén maradnak. A próbaidőszak végén a fizetés funkció zárolódik, de a rendeléseket továbbra is böngészheti, a jelentéseket megtekintheti, a termékeket pedig kezelheti."
      },
      {
        "type": "p",
        "text": "Bármikor előfizethet, és a fizetés funkció azonnal feloldódik; az adatai pedig pontosan úgy maradnak, ahogy hagyta őket."
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
    "question": "Mi a különbség a Lite, a Standard és a Pro csomag között?",
    "keywords": [
      "csomagok",
      "lite",
      "standard",
      "pro",
      "különbség",
      "összehasonlítás",
      "csomagváltás",
      "visszaváltás",
      "árak"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mindhárom csomag tartalmazza a teljes körű fizetési funkciókat, a termékeket, a rendeléseket (sztornóval, visszavétellel és cserével), a jelentéseket (a Riportok teljes egészét és a havi Eredményt a 3.4-es verzió óta, az adójelentést és exportját a 3.6-os verzió óta) és a felhőalapú biztonsági mentést. Az üzlet vezetéséhez nyújtott eszközökben térnek el:"
      },
      {
        "type": "list",
        "items": [
          "Lite: egyedül dolgozó piaci standhoz, ahol fizetésre és termékekre van szükség.",
          "Standard: kiegészül akciókkal, engedmény-előbeállításokkal, hűségpontokkal és tagi szintekkel, készletkövetéssel, beszerzéssel, számlás (utólag fizetett) eladással, előrendeléssel és a kezelési költség díjkulcsaival.",
          "Pro: kiegészül munkatársi fiókokkal és jogosultságokkal, jóváhagyással, tevékenységnaplóval és visszaállítási bejegyzésekkel – munkatársakat foglalkoztató üzleteknek."
        ]
      },
      {
        "type": "p",
        "text": "Már Standard csomagja van? Az Előfizetés oldalon válthat Pro csomagra: a számlázási ciklus ugyanaz marad, a váltás azonnal életbe lép, a különbözetet pedig az Apple időarányosan számolja el. A Pro csomagról Standardra visszaváltás a megújításkor lép életbe. Az árak az alkalmazásban láthatók, a csomagokat pedig az Árak oldalunkon is összehasonlíthatja."
      },
      {
        "type": "note",
        "text": "A csomag visszaváltása soha nem töröl adatot. A csomagján túli funkciók szüneteltetve vannak, az adatok megmaradnak, és újbóli előfizetéssel a funkciók visszatérnek."
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
    "question": "Hogyan fizethetek elő, mondhatom le az előfizetést, vagy állíthatom vissza a vásárlást?",
    "keywords": [
      "előfizetés",
      "lemondás",
      "vásárlás visszaállítása",
      "ár",
      "számlázás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az előfizetés az App Store-on keresztüli alkalmazáson belüli vásárlással történik. A csomagok és az árak az alkalmazásban láthatók. A fizetést az Apple kezeli; a fizetési adatait mi soha nem látjuk."
      },
      {
        "type": "list",
        "items": [
          "Lemondás: az eszköz Beállítások → Apple-fiók → Előfizetések menüpontjában kezelheti. A megújítás elkerüléséhez legalább 24 órával az aktuális időszak vége előtt mondja le.",
          "Visszaállítás: eszközváltás vagy újratelepítés után koppintson a DingPOS Előfizetés oldalán a „Vásárlás visszaállítása” gombra.",
          "Csomagváltás: válassza ki az új csomagot a DingPOS Előfizetés oldalán. A magasabb csomagra váltás (Standardról Prora, havi díjról éves díjra) azonnal életbe lép, a különbözetet az Apple időarányosan számolja el; az alacsonyabb csomagra váltás a megújításkor lép életbe."
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
    "question": "Hogyan állítsak be vásárlási összeghez kötött engedményt?",
    "keywords": [
      "összegküszöb",
      "küszöbös engedmény",
      "költési határ",
      "akció beállítása",
      "útmutató"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg a Beállítások → Akciók → Új akció részt, válassza ki az összegküszöbös típust, majd:"
      },
      {
        "type": "steps",
        "items": [
          "Adja meg a küszöbösszeget és az engedményt (fix összeg vagy százalék).",
          "Válassza ki a hatókört: adott termékek, adott kategóriák, vagy hagyja üresen, ha az egész boltra vonatkozzon.",
          "Állítsa be az időzítést: a kezdő dátum kötelező; folyamatos akciónál hagyja üresen a befejező dátumot.",
          "Mentés – az akció az időzítés szerint aktiválódik, és a fizetésnél automatikusan érvényesül, kód nélkül."
        ]
      },
      {
        "type": "note",
        "text": "A küszöböt a rendszer a hatókörbe tartozó tételek részösszegéhez méri, nem a teljes kosárhoz. Egy „Italokra költött 1000 Ft” akciónál csak az italok számítanak a küszöbbe, a „kizárás az akciókból” jelölésű termékek pedig soha."
      },
      {
        "type": "p",
        "text": "Egy gyakori kérdés: ha egy magasabb prioritású akció fut le előbb, a küszöböt a rendszer már az engedményezett összegen ellenőrzi – így egy kosár, amely a küszöb fölöttinek tűnik, kicsivel alatta maradhat. Ha azt szeretné, hogy a küszöböt elsőként értékelje ki, adjon neki kisebb prioritásszámot."
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
    "question": "Hogyan állítsak be „vegyen egyet, kapjon egyet” és n-edik termékes akciót?",
    "keywords": [
      "vegyen egyet kapjon egyet",
      "1+1 akció",
      "2+1 akció",
      "n-edik termék ingyen",
      "útmutató"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hozzon létre „Vegyen X-et / kapjon Y-t” típusú akciót: adja meg, hány darabot kell vásárolni, hányat kap a vevő, és az engedmény százalékát (100% = ingyenes). A hatókört korlátozhatja adott termékekre vagy egy egész kategóriára – az azonos kategória különböző termékei egy csoportba kerülnek."
      },
      {
        "type": "list",
        "items": [
          "Az engedményezett darab a csoport legolcsóbb tétele, az aktuális tényleges árán számolva – ha egy korábbi akció már engedményt adott rá, az akció összege az engedményezett árból indul ki, nem a listaárból.",
          "Ha azt szeretné, hogy a „3. termék ingyen” jelzés a teljes listaárat mutassa, adja ennek az akciónak a legkisebb prioritásszámot, hogy előbb számolódjon. Ha előbb a teljes kosárra szóló engedmény fut le, az ingyenes termék megjelenített levonása kisebb a listaárnál – ez a számítási sorrend sajátossága, amelyet alaposan ellenőriztünk, nem hiba. Mindkét sorrend közel azonos végösszeghez vezet; csak az változik, hogy az engedmény hol látszik."
        ]
      },
      {
        "type": "p",
        "text": "Tipp: a kiemelt ajánlatát tegye az első helyre a prioritásban, hogy a nyugta engedménybontása egyezzen a hirdetett üzenettel."
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
    "question": "Hogyan állítsak be dupla pontot vagy pontszorzót?",
    "keywords": [
      "pontszorzó",
      "dupla pont",
      "bónuszpont",
      "hűségpont akció",
      "útmutató"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hozzon létre pontszorzó típusú akciót, és adja meg a szorzót (legalább 2 egész szám). Opcionálisan megadhat összegküszöböt (pl. 5000 Ft felett dupla pont) és időzítést (pl. csak szombaton)."
      },
      {
        "type": "list",
        "items": [
          "Ha egyszerre több szorzó is teljesül, csak a legmagasabb érvényesül – a szorzók sosem szorzódnak és nem halmozódnak.",
          "Az összegküszöböt a rendszer a pontbeváltás után ellenőrzi: ha a pontbeváltás a végösszeget a küszöb alá viszi, a szorzó ezúttal nem lép életbe.",
          "A pontgyűjtéshez a fizetésnél ki kell választani a tagot – tag nélküli rendelésekért nem jár pont, így a szorzónak nincs mit szoroznia."
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
    "question": "Hogyan állítsak be tagsági szinthez vagy születésnaphoz kötött akciót?",
    "keywords": [
      "tagsági szint",
      "születésnapi akció",
      "VIP",
      "törzsvásárlói akció",
      "útmutató",
      "vevőnkénti korlát"
    ],
    "content": [
      {
        "type": "p",
        "text": "Először hozza létre a szinteket a Beállítások → Tagsági szintek részen (pl. Arany), majd célozza az akciót erre a szintre. Születésnapi akciónál állítsa a célközönséget Születési hónap értékre, és töltse ki a Vevőnkénti korlát mezőt."
      },
      {
        "type": "list",
        "items": [
          "Az akció csak akkor lép életbe, ha a fizetésnél ki van választva a tag – a jogosultságot a rendszer az aktuálisan kiválasztott tag alapján ítéli meg.",
          "A születésnapi jogosultság a tag születési hónapját olvassa, ezért töltse ki a születésnap mezőt; akinél ez hiányzik, azt a rendszer sosem kezeli születésnapos vevőként.",
          "A születési hónaphoz kötött akcióhoz vevőnkénti korlát kell, amelyet naptári évenként számol a rendszer: az 1-es korlát azt jelenti, hogy minden vevő évente egyszer használhatja, és a következő évben újraindul. Korlát nélkül nem menthető.",
          "Az automatikus szintlépést a rendszer a fizetés lezárásakor értékeli; ha a rendelést sztornózzák, az általa kiváltott szintlépés automatikusan visszavonódik."
        ]
      },
      {
        "type": "note",
        "text": "A 3.2-es verzió előtt a születési hónaphoz kötött akció hibát jelzett, és még kitöltött vevőnkénti korlát mellett sem lehetett menteni. Ha ez Önnel is előfordul, frissítse a DingPOS-t az App Store-ból."
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
    "question": "Hogyan állítsak be ajándékot, fizetős kiegészítőt és csomagakciót?",
    "keywords": [
      "ajándék vásárláshoz",
      "kiegészítő",
      "csomagakció",
      "csomagakció beállítása",
      "vegyen A-t kapjon B-t",
      "útmutató"
    ],
    "content": [
      {
        "type": "p",
        "text": "Három összetett akciótípus érhető el: ajándék vásárláshoz (vegyen A-t, kapjon B-t), fizetős kiegészítő (X összegért hozzáadható Y) és csomagakció (bármely N termék X összegért). Az ajándékok és a fizetős kiegészítők megerősítésre várnak a pénztárostól; a csomagakciók automatikusan érvényesülnek."
      },
      {
        "type": "p",
        "text": "Az ajándékok és a fizetős kiegészítők sosem módosítják maguktól a kosarat. Ha a feltételek teljesülnek, javaslatsáv jelenik meg a pénztárképernyőn, és a kosár csak akkor változik, ha a pénztáros a javaslatsáv ajándék- vagy + gombjára koppint (Ajándék választása vagy Kiegészítő választása) – ez szándékos, mert az ajándék fizikai készletet érint: valakinek meg kell erősítenie, hogy van belőle, és hogy a vevő kéri."
      },
      {
        "type": "list",
        "items": [
          "A javaslatsáv ✕ (Elutasítás) gombja után ugyanaz a javaslat ennél a kosárnál nem jelenik meg újra; új vagy kiürített kosárnál ismét felajánlja a rendszer.",
          "Ha a kosár már nem teljesíti a feltételeket (például eltávolítják azt a tételt, amely az ajándékot kiváltotta), az ajándék vagy a kiegészítő automatikusan eltűnik a kosárból, felül egy üzenet jelzi, és nem számít felhasználásnak (a 3.6-os verzió óta).",
          "A 3.4-es verzió óta a függőben lévő ajánlatok nem akadályozzák a fizetést: a fizetési gomb alatti sárga sor, például „1 függőben lévő ajánlat nem érvényesül”, megmondja, hány maradt ki (koppintson rá, hogy lássa, melyek), a rendelés pedig nélkülük megy át. Ha azt szeretné, hogy a fizetés a korábbiakhoz hasonlóan várjon, kapcsolja be az Ajánlatok kezelése fizetés előtt beállítást a Beállítások → Eszközbeállítások alatt; ez csak erre az iPadre érvényes.",
          "Az ajándék és a kiegészítő tételekre más pénzbeli akciók nem adhatnak további engedményt, és ezek nem számítanak bele más akciók küszöbébe."
        ]
      },
      {
        "type": "p",
        "text": "A csomagakciók (a 2.4-es verzió óta automatikusan): amint a kosárból csomagakció állítható össze, a DingPOS csoportosítja a tételeket, és beleszámítja az akciót a végösszegbe – kérdés nélkül; az akcióba tartozó tételek pedig nem választhatók szét."
      },
      {
        "type": "list",
        "items": [
          "Csomagakció csak akkor jön létre, ha ezzel olcsóbb lesz a kosár. Azonos árú tételek közül először az engedmény nélküliek kerülnek a csomagakcióba, a már engedményezett tételek pedig megtartják az engedményüket.",
          "Hogy mely tételek kerülnek egy csomagakcióba, csak a kosár tartalmától függ, soha nem a beolvasás sorrendjétől.",
          "A csomagakció minden tétele megmutatja a rá eső csomagengedményt, és minden sor összege az engedmények utáni érték.",
          "A fizetésnél a csomagakció tételeit a rendszer a legfrissebb árakkal csoportosítja újra; ha az eredmény megváltozik, megerősítést kér az új végösszegre."
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
    "question": "Hogyan időzítsem az akciókat, és hogyan állítsak be Happy Hourt?",
    "keywords": [
      "időzítés",
      "happy hour",
      "napok",
      "éjfél",
      "akció időtartama",
      "útmutató"
    ],
    "content": [
      {
        "type": "p",
        "text": "Minden akció időzítése három rétegből áll: dátumtartomány (a kezdés kötelező, a befejezés opcionális), napi időablak (Happy Hour) és kiválasztott napok. Az akció érvényesüléséhez mindhárom feltételnek teljesülnie kell."
      },
      {
        "type": "list",
        "items": [
          "Az éjfélen átnyúló időablakoknál (pl. 22:00–02:00) a napot az ablak kezdőnapja határozza meg: ha csak a péntek van kiválasztva, a szombat 01:30 még a pénteki szakaszhoz tartozik, és az akció érvényesül – a szombat 23:30 viszont nem.",
          "A befejező dátum szigorú határ – még ha a Happy Hour ablak épp tart is, az akció abban a pillanatban leáll, amikor a befejező dátum letelik.",
          "Az időt a rendszer az iPad eszközórájáról olvassa, ezért ellenőrizze, hogy az eszköz időzónája és ideje helyes."
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
    "question": "Prioritás, halmozás és a további akciók leállítása – hogyan működik?",
    "keywords": [
      "prioritás",
      "halmozás",
      "halmozható akció",
      "akciók leállítása",
      "ütköző akciók",
      "útmutató"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha egyszerre több akció is teljesül, három beállítás szabályozza a sorrendet és a kölcsönhatást:"
      },
      {
        "type": "list",
        "items": [
          "Prioritás: a kisebb szám számolódik előbb. Az akciók listáján húzással átrendezheti őket.",
          "Más akciókkal halmozható (alapból be van kapcsolva): kikapcsolva a tételszintű akció csak az általa engedményezett sorokat zárja le – más tételek még kaphatnak későbbi tételszintű akciót; a nem halmozható kosárszintű akció minden későbbi kosárszintű akciót blokkol.",
          "A további akciók leállítása, ha ez érvényesül: ha ez az akció érvényesült, a rendszer több pénzbeli engedményt nem számol – a pontszorzókat és az ajándékjavaslatokat ez nem érinti."
        ]
      },
      {
        "type": "note",
        "text": "A későbbi akciók már az engedményezett összegen számolnak: a 10% és az 5% engedmény nem 15%, mert a második engedmény az első utáni végösszegre vonatkozik. A DingPOS emellett sosem keresi a vevő számára legkedvezőbb kombinációt; a sorrendet teljes egészében az Ön prioritásai döntik el."
      },
      {
        "type": "p",
        "text": "Érdekesség: ha az engedmény összege nullára kerekedik, az akció nem érvényesül, és nem fogyasztja a felhasználási keretet."
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
    "question": "Lesz bankkártyás fizetés-integráció a DingPOS-ban?",
    "keywords": [
      "fizetés",
      "bankkártya-elfogadás",
      "integráció",
      "fizetési szolgáltató",
      "kártyaterminál"
    ],
    "content": [
      {
        "type": "p",
        "text": "A DingPOS jelenleg nem kezeli a pénz útját: a fizetési módok csak könyvelési címkék, a tényleges fizetés a meglévő terminálon vagy fizetési alkalmazáson keresztül történik."
      },
      {
        "type": "p",
        "text": "Hogy beépítünk-e fizetésfeldolgozást, azon múlik, mekkora rá a valós felhasználói igény. Ha Önnek szüksége van rá, írjon nekünk: adja meg, melyik szolgáltatót és terminált kötnénk be, és mire használná. A fejlesztést a kérések száma szerint rangsoroljuk."
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
    "question": "Támogatja a DingPOS az e-számlát és a nyugtanyomtatást?",
    "keywords": [
      "e-számla",
      "elektronikus számla",
      "számla",
      "nyugta",
      "nyugtanyomtató",
      "blokknyomtató"
    ],
    "content": [
      {
        "type": "p",
        "text": "Egyelőre nem. Az e-számlázás és a nyugtanyomtatás fejlesztéséhez és teszteléséhez számlázó gépeket és nyugtanyomtatókat kellene vásárolnunk, ami jelentős költség. Kis csapatként akkor tervezzük be, amikor a felhasználók tábora nő, és a bevételünk stabil."
      },
      {
        "type": "p",
        "text": "Ha Önnek szüksége van rá, írjon nekünk, és adja meg a használt készülék típusát. A fejlesztést a kérések száma szerint rangsoroljuk."
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
    "question": "Használhatok vonalkódolvasó pisztolyt a DingPOS-szal?",
    "keywords": [
      "vonalkódolvasó",
      "vonalkódolvasó pisztoly",
      "bluetooth",
      "usb",
      "hardver"
    ],
    "content": [
      {
        "type": "p",
        "text": "A termékek felvételekor a vonalkód kamerával való beolvasása már működik. A fizikai (USB-s és Bluetooth-os) vonalkódolvasókat egyelőre hivatalosan nem támogatjuk: mint minden hardveres funkcióhoz, ehhez is teszteszközöket kell vásárolnunk, ezért a felhasználók számának növekedésével tervezzük be."
      },
      {
        "type": "note",
        "text": "A kassza keresőmezője vonalkódra is keres, így a billentyűzet módban működő olvasó elvileg beírhatja a kódot, és előhozhatja a terméket. Ezt azonban valódi eszközön még nem ellenőriztük, ezért hivatalosan nem támogatott. Ha kipróbált már működő olvasót, írja meg a típusát!"
      },
      {
        "type": "p",
        "text": "Ha Önnek szüksége van rá, írjon nekünk. A fejlesztést a kérések száma szerint rangsoroljuk."
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
    "question": "Lesz havi zárási riport a DingPOS-ban?",
    "keywords": [
      "havi zárás",
      "egyeztetés",
      "havi riport",
      "havi elszámolás",
      "tartozások",
      "kintlévőségek"
    ],
    "content": [
      {
        "type": "p",
        "text": "A 3.4-es verzió óta az Eredmény a termékköltség, a kezelési költség és a kiadások levonása után mutatja az egyes hónapok nettó eredményét – lásd: „Hogyan látom, mennyit kerestem ténylegesen havonta?” A 3.6-os verzió óta az Adójelentés egy időszakot (például az Ez a hónap értéket) CSV-fájlként, Excel-munkafüzetként vagy PDF-jelentésként exportál a könyvelőnek: az eladásokkal, az adóval, a fizetési módonként beérkezett összeggel és a kintlévőségekkel. Az Eredmény és a többi riport egyelőre nem exportálható, de az egyeztetéshez szükséges minden adat már megtalálható az alkalmazásban:"
      },
      {
        "type": "list",
        "items": [
          "Állítsa a Riportok lapon az időszakot Ez a hónap értékre: így látja a hónap árbevételét, a beérkezett pénzt, a nyereséget és a fizetési módok szerinti bontást.",
          "A havi fizetési határidős beszállítói beszerzések a Beszerzés alatt a Nyitott számlák között gyűlnek, ahol egy teljes hónap egyszerre kiegyenlíthető.",
          "A vevők számlás (utólag fizetett) eladásai a Rendelések → Kintlévőségek alatt gyűlnek, ahol egy teljes hónap egyszerre kiegyenlíthető."
        ]
      },
      {
        "type": "p",
        "text": "Ha az Adójelentésen túl exportálható vagy kinyomtatható havi zárási riportra van szüksége, írjon nekünk, és adja meg, mely adatok kellenek benne. A fejlesztést a kérések száma szerint rangsoroljuk."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
