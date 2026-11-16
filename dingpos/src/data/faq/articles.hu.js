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
        "text": "A pénznem a beállítás után nem módosítható; az adók és az adózási mód később egyaránt módosíthatók a Beállítások → Üzletadatok menüpontban. Az Egyesült Államokban, Kanadában, Brazíliában és Mikronéziában az adókulcs az államtól, tartománytól vagy várostól függ, ezért az adókulcs mezője üresen indul, és a továbblépéshez meg kell adnia az Ön által felszámított adókulcsot. Az adókulcsnak 0-nál nagyobbnak kell lennie: az az üzlet, amely nem számít fel adót, törli a sort. A 175 országos lista és a pénznemválasztás a 3.2-es verzióban jelent meg; a korábbi verziók 15 országot kínáltak."
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
        "text": "A teljes számítási sorrend: tételengedmények és akciók → kosárengedmény → pontbeváltás → adó. Az összegeket a pénznem tizedesjegyeire kerekíti, fél esetén felfelé (pl. 0 a TWD-nél, 2 az USD-nél)."
      },
      {
        "type": "note",
        "text": "Az elnevezett adók a 3.5-ös verzióval érkeztek. Frissítéskor az Ön adókulcsa elnevezett adóvá válik (például Ausztráliában „GST 10%”), és minden meglévő termék ezt számítja fel; ha az üzlet kulcsa 0 volt, nem kap adót. A korábbi rendelések és riportok megtartják a számaikat."
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
        "text": "Az új üzlet két fizetési móddal indul, Készpénz és Bankkártya névvel, amelyeket a beállításkor az app nyelvén nevez el a rendszer. A Beállítások → Fizetési módok alatt bármilyen más módot hozzáadhat (pl. Apple Pay, LINE Pay, helyi digitális pénztárca), törölhet vagy átrendezhet."
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
        "text": "Igen. A Beállítások → Fizetési módok alatt koppintson egy fizetési módra (vagy adjon hozzá újat), és töltse ki a Kezelési költség mezőt: százalékot, tranzakciónkénti fix összeget, vagy mindkettőt. Ettől kezdve az adott módon beszedett minden fizetésnél a rendszer az éppen érvényes díjkulccsal becsült kezelési költséget rögzít."
      },
      {
        "type": "p",
        "text": "A Riportok Fizetési módok kártyáján minden díjjal rendelkező mód alatt megjelenik egy „Költség · Nettó” sor, a kártya alján pedig az egész időszak becsült kezelési költsége és becsült nettó beérkezése látható."
      },
      {
        "type": "list",
        "items": [
          "Azt a díjkulcsot adja meg, amelyet a szolgáltatója ténylegesen levon, adóval együtt – 3% plusz 5% adó esetén 3,15%-ot. Díj nélkül hagyja üresen mindkét mezőt.",
          "A díjkulcs módosítása csak a későbbi fizetésekre vonatkozik; a már rögzített költségek változatlanok maradnak.",
          "A „Százalékos díj visszatérítése visszatérítéskor” alapból be van kapcsolva, azoknak a szolgáltatóknak, amelyek visszatérítéskor visszaadják a díjat. Ez a visszavételekre és a visszatérített előrendelési előlegekre vonatkozik: bekapcsolva a százalék visszatér, a fix összeg soha. A sztornó és a kiegyenlítés visszavonása nem veszi figyelembe a kapcsolót, és a rögzített teljes költséget visszaveszi, a fix összeget is. Mindkét esetben a vevő ugyanannyit kap vissza.",
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
        "text": "Az ezen országok valamelyikében, az adott ország pénznemében létrehozott új üzletnél ez automatikusan be van állítva. Bármely más üzlet a Beállítások → Fizetési módok alján található Készpénz kerekítése kártyán kapcsolhatja be: válassza ki, mire kerekítsen a rendszer (Nincs kerekítés, 0,05, 0,10, 0,50 vagy 1,00), és azoknál a kerekítési egységeknél, amelyek pontosan félútra eshetnek, azt is, hogy ilyenkor felfelé vagy lefelé kerekítsen. A módosítás csak a későbbi fizetésekre vonatkozik."
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
        "text": "Fizetéskor a képernyő tetején váltson Eladás helyett Előrendelés módra, válassza ki az átvétel napját, adja meg az előleget (0-tól a teljes összegig bármennyi, 30% / 50% / teljes összeg gyorsgombokkal), és válassza ki, hogyan fizették az előleget. Rendeljen hozzá vevőt, hogy értesíteni tudja, amikor megérkezik az áru."
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
        "text": "Ha egy terméknek vannak változatai, az Ár mezője összecsukódik, és minden kombináció saját árat kap a Változatok ára és készlete alatt, saját készlettel (a 3.2-es verzió óta; a korábbi verziók még kérnek termékárat). A pénztár, a terméklista és a termék részletei a legalacsonyabb és a legmagasabb ár közötti sávot mutatják, például „NT$350–NT$390”, vagy egyetlen árat, ha minden kombináció ugyanannyiba kerül; az ár szerinti rendezés a legalacsonyabb kombinációs árat veszi alapul. Fizetéskor a termékre koppintva változatválasztó jelenik meg, mielőtt a termék a kosárba kerül."
      },
      {
        "type": "p",
        "text": "Nem kell minden kombinációhoz költséget megadnia: az üres Költség mező jelentése A termék költségét követi, vagyis a termék költségét használja, és annak változásakor vele együtt változik. Ha számot ír be, az Saját költség lesz – a 0 is annak számít. A Termékköltség mindenhol egyszerre törli az összes saját költséget."
      },
      {
        "type": "note",
        "text": "A jellemzők és az értékek neve legfeljebb 20 karakter lehet, és mentéskor a két végén lévő szóközöket a rendszer levágja. Az az érték, amelybe nem írt semmit, nem kombináció, ezért mentéskor kimarad; pirosan bekeretezve csak az üres jellemzőnév, illetve az a jellemző jelenik meg, amelynek minden értéke üres. A változatokkal rendelkező termék nem lehet szabadáras."
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
        "text": "Bekapcsolás után az eladások és az előrendelések automatikusan csökkentik a készletet; a sztornók, visszavételek és lemondott előrendelések visszaállítják; a beszerzési rendelés átvétele pedig növeli. Minden készletmozgás bekerül a teljes mozgásnaplóba. Az alacsony készletet színes figyelmeztetés jelzi."
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
        "text": "Használja a Készlet módosítása funkciót. Készletkövetéses terméknél koppintson a termék részleteiben a Készlet módosítása gombra, válassza az Eltávolítás vagy a Hozzáadás lehetőséget, adja meg a mennyiséget, válasszon indokot, és ha szeretné, írjon megjegyzést (legfeljebb 100 karakter). A megjelenő lap kiszámolja a módosítás utáni készletet, az indok alatti sor pedig megmondja, hogy a módosítás bekerül-e az eredménykimutatásba."
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
          "Koppintson az Új beszerzés gombra, válassza ki a beszállítót, és adja hozzá a termékeket, a mennyiségeket és az egységköltségeket (előre kitöltve a termék jelenlegi költségével). Szállítási díjat is megadhat. Ha a beszállító még nincs felvéve, koppintson a Beszállító hozzáadása gombra a beszállítólista bal felső részén – az új beszállító rögtön visszakerül a beszerzési rendelésbe.",
          "A vázlat soha nem érinti a készletet és a tartozásokat – szabadon szerkesztheti vagy törölheti.",
          "Amikor az áru megérkezik, koppintson a Készlet átvétele gombra: a követett készlet nő, a beszerzési rendelés pedig megkapja a számát, és zárolódik. Az átvétel alapértelmezés szerint az egyes termékek költségét is erre az egységköltségre frissíti; ha a költségeket változatlanul szeretné hagyni, kapcsolja ki a Termékköltség szinkronizálása beállítást a beszerzési rendelésen."
        ]
      },
      {
        "type": "p",
        "text": "A fizetési feltétel dönti el, mi történik ezután: a „Fizetés átvételkor” feltételű rendelések fizetettnek lesznek jelölve, a „Havi hitel” feltételűek pedig kifizetetlenek maradnak a Nyitott számlák alatt, ahol beszállítónként kiegyenlítheti őket – egy rendelést, az adott hónapot vagy mindent."
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
          "A nem árusított termék soha nem jelenik meg a pénztár rácsában, a kategóriákban, a keresésben és a vonalkódolvasásnál, és nem lehet ajándék, kiegészítő, akció célterméke vagy cseretermék.",
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
      "bevétel",
      "pénzforgalom",
      "egyeztetés",
      "előleg",
      "számlás eladás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az árbevétel azon a napon számít, amikor az árut átadta, minden engedmény után és adó nélkül; a beérkezett pénz pedig azon a napon, amikor az összeg beérkezik, és azt a ténylegesen átvett pénz adja, adóval együtt. Ezért az adót felszámító boltban a beérkezett pénz az adó összegével magasabb az árbevételnél, még a pultnál kifizetett rendeléseknél is. Ezen túl akkor térnek el egymástól, ha:"
      },
      {
        "type": "list",
        "items": [
          "Számlás eladás: az áru ma elhagyja a boltot, és a mai árbevételbe számít; a pénz azon a napon számít bele a beérkezett pénzbe, amikor kiegyenlítik.",
          "Előrendelés: az előleg a befizetés napján számít bele a beérkezett pénzbe; az árbevétel az átvétel napján jelenik meg teljes összegben.",
          "Elvesztett előleg: ha a vevő lemond egy előrendelést, és Ön megtartja az előleget, az a befizetéskor már bekerült a beérkezett pénzbe. A Riportok ezt külön, elvesztett előlegként mutatja, és soha nem számít árbevételnek.",
          "Korábbi rendelés sztornózása: a visszatérített pénz a sztornó napján számít bele a beérkezett pénzbe, így az adott nap beérkezett pénze negatív is lehet, míg a Sztornózva a rendelést az eladás napján számolja.",
          "Készpénz kerekítése: amennyivel a kerekítés a rendelés végösszege fölé vagy alá visz, az a beérkezett pénzbe számít bele, az árbevételbe soha."
        ]
      },
      {
        "type": "p",
        "text": "Az egyeztetéshez a beérkezett pénzt vesse össze a kasszafiók és a kártyaterminál adataival; ha azt szeretné látni, mennyit adott el valójában egy időszakban, az árbevételt nézze. A visszavételek a visszavétel napján csökkentik az árbevételt. Az Árbevétel, a Beérkezett pénz és a Sztornózva csempén az ⓘ ugyanezt magyarázza, maga az adó pedig az „Az árbevételtől a bruttó nyereségig” nézetben szerepel, amely a bruttó nyereség csempéjéről nyílik meg."
      },
      {
        "type": "note",
        "text": "Az adó nélküli árbevétel a 3.5-ös verzióban jelent meg, és a korábbi időszakokat is ugyanígy számolták újra, ezért az adót felszámító bolt a frissítés előttinél alacsonyabb árbevételt lát. Ez javítás. A korábbi verziók az árbevételben az adót is tartalmazták, az adó nélkül árazó boltok pedig még a beszedett adót is árbevételnek számolták."
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
    "question": "Milyen időszakokat jeleníthetnek meg a jelentések?",
    "keywords": [
      "riportok",
      "időszak",
      "ez a hét",
      "ez a hónap",
      "ez az év",
      "egyéni időszak",
      "dátum",
      "termékrangsor"
    ],
    "content": [
      {
        "type": "p",
        "text": "A Riportok tetején választhat a Ma, Tegnap, Ez a hét, Ez a hónap, Ez az év és Minden időszak közül, vagy az Egyéni lehetőséggel megadhat kezdő- és záródátumot. Az Ez a hét az eszköz beállított hétkezdő napját követi; az Ez a hónap 1-jén, az Ez az év január 1-jén kezdődik. Minden lehetőség mellett látszik, mely dátumokat fedi le, a Minden időszak pedig az üzlet első tranzakciójától indul."
      },
      {
        "type": "p",
        "text": "Az időszaksáv alatt két sor mutatószám-csempe következik (Árbevétel, Beérkezett pénz, Bruttó nyereség, Rendelések, Átlagos rendelés; Engedmények összesen, Nettó eredmény, Költség nélküli termékek, Kiszolgált vevők), majd a trenddiagram. A trenddiagram jobb felső sarkában lévő menüvel váltogathat az árbevétel, a rendelések, az átlagos rendelés és a kiszolgált vevők között; mellette a Költség és bruttó nyereség diagram egy-egy oszlopban halmozza az egyes időszakok termékköltségét és bruttó nyereségét. Egyetlen nap óránkénti bontásban látszik; hosszabb időszakoknál az időszak hosszától függően napokra, hetekre, hónapokra vagy évekre bontva."
      },
      {
        "type": "p",
        "text": "Nyomja le és tartsa nyomva a trenddiagramot vagy a Költség és bruttó nyereség diagramot, hogy időszakról időszakra leolvashassa; bekapcsolt Eladások összehasonlítása mellett a trenddiagram kártyája egymás mellett mutatja az adott időszak és az összehasonlítási időszak értékét. Húzza balra vagy jobbra a továbblépéshez; ha a diagramon felfelé vagy lefelé söpör, az oldal a szokásos módon görög."
      },
      {
        "type": "p",
        "text": "A Termékrangsor kártya az 5 legjobban teljesítő terméket listázza. Koppintson a kártyára vagy az Összes megtekintése lehetőségre, hogy lássa az időszakban eladott összes terméket, a visszavételek utáni mennyiség szerint rangsorolva; a változatokkal rendelkező termék változatonként egy sort kap."
      },
      {
        "type": "p",
        "text": "Az időszaksáv jobb oldalán lévő Eladások összehasonlítása az időszakot az előzővel vagy az előző év azonos időszakával veti össze – lásd: „Mit mutatnak a részletes jelentések?”"
      },
      {
        "type": "note",
        "text": "Ezek a naptári időszakok a 2.4-es verzióban jelentek meg; a korábbi verziók gördülő tartományokat kínáltak (Ma / 7 nap / 30 nap / Minden időszak). Ha még ezeket látja, frissítse a DingPOS-t az App Store-ból."
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
    "question": "Mit mutatnak a részletes jelentések?",
    "keywords": [
      "részletes jelentések",
      "eladások összehasonlítása",
      "előző év",
      "hőtérkép",
      "forgalmas órák",
      "lassan forgó termékek",
      "termékek változása",
      "megoszlás kategóriánként",
      "készletérték",
      "visszatérő vásárlók aránya",
      "pontok"
    ],
    "content": [
      {
        "type": "p",
        "text": "A részletes jelentések nem külön képernyők – közvetlenül a Riportok képernyőn jelennek meg, és a felül kiválasztott időszakot követik:"
      },
      {
        "type": "list",
        "items": [
          "Eladások összehasonlítása: az időszaksáv jobb oldalán összevetheti az időszakot az előző év azonos időszakával vagy az előző időszakkal (egy napot a múlt heti azonos nappal, ezt a hetet a múlt héttel, ezt a hónapot a múlt hónappal, ezt az évet a tavalyival, az egyéni időszakot az előtte lévő ugyanennyi nappal). Az Árbevétel, a Beérkezett pénz, a Bruttó nyereség, a Rendelések, az Átlagos rendelés, az Engedmények összesen és a Kiszolgált vevők csempén egyaránt látszik a változás és az összehasonlítási időszak értéke, például „▼ 3% vs. múlt hónap”; az Engedmények összesen változása mindig szürke, mert a több engedmény önmagában sem jó, sem rossz. Koppintson bármelyik összehasonlító sorra az Időszak-összehasonlítás megnyitásához, amely mindkét időszak értékeit listázza. A trenddiagramon halványabb vonal jelenik meg az összehasonlítási időszakhoz. Amíg egy időszak még tart, az összehasonlítási időszak is ugyanaddig tart.",
          "Hétnap × óra: a trenddiagram fejlécét Alakulás nézetről átkapcsolva Hétnap × óra nézetre hétnapos, 24 órás hőtérkép jelenik meg – minél sötétebb egy cella, annál többet adott el. Váltogathat az árbevétel és a rendelések között; bekapcsolt összehasonlításnál látszik, mely órák nőttek, és melyek csökkentek.",
          "Lassan forgó termékek: a rangsorkártya fejlécét átkapcsolva Lassan forgó termékek nézetre a termékek a legkevesebbet eladottól a legtöbbig sorakoznak, a jelenlegi készlettel és az utolsó eladás dátumával. Azok a termékek, amelyekből még nem adtak el, a Még nem adták el jelölést kapják, a változatokkal rendelkező termék pedig változatonként egy sort. Alapértelmezés szerint csak a készleten lévő termékek látszanak.",
          "Változás (a 3.4-es verzió óta): a rangsorkártya fejlécét átkapcsolva Változás nézetre megjelenik az a 3 termék, amelynek árbevétele az összehasonlítási időszakhoz képest a legtöbbet nőtt, és az a 3, amelyé a legtöbbet csökkent, mindkét időszak árbevételével és a különbséggel; minden változatot önmagához hasonlít. Előbb válasszon időszakot az Eladások összehasonlítása alatt; a Nincs beállításnál, illetve a Minden időszak esetén a kártya erre figyelmeztet. Koppintson a kártyára vagy az Összes megtekintése lehetőségre a teljes Termékek változása listáért, amely Növekedés és Csökkenés részre oszlik.",
          "Visszatérő vásárlók aránya: a Kiszolgált vevők csempéjének utolsó sora azoknak a tagoknak az aránya, akik az időszakban vásároltak, és összesen legalább kétszer vásároltak. Bekapcsolt összehasonlításnál egy alatta lévő sor megadja a változást százalékpontban és az összehasonlítási időszak arányát.",
          "Megoszlás kategóriánként: az egyes kategóriák árbevétele és részesedése a termékek jelenlegi kategóriája szerint, a legnagyobbtól kezdve. A kategória nélküli termékek a Kategória nélkül sor alá kerülnek, és a sorok pontosan az árbevételre jönnek ki.",
          "Aktuális állapot: a készletérték (jelenlegi készlet × jelenlegi költség), az adott időszak összes készletmozgása, valamint a vevők birtokában lévő, még be nem váltott pontok a legnagyobb levonható összeggel. Ezek aktuális egyenlegek; az időszak nem változtat rajtuk."
        ]
      },
      {
        "type": "p",
        "text": "A 3.4-es verzió óta valamennyi elérhető minden csomagban, és a próbaidőszak lejárta után is nyitva marad. A korábbi verziók ezeket csak a Pro csomagban mutatták, a többi csomagnál egy kis lakattal; ha még lakatokat lát, frissítse a DingPOS-t az App Store-ból."
      },
      {
        "type": "p",
        "text": "A Lite csomag nem követi a készletet és a hűségpontokat, de az Aktuális állapot ilyenkor is megmutatja az üzlet által már tárolt készletértéket és be nem váltott pontokat (például a próbaidőszakból), vagy nullát."
      },
      {
        "type": "note",
        "text": "A személyzet az Irányítópult jogosultság alatt látja a részletes jelentéseket; a készletérték összegeihez a Költség és nyereség jogosultság is kell."
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
    "question": "Hogyan számolja a rendszer a bruttó nyereséget, ha nem adtam meg költséget?",
    "keywords": [
      "költség",
      "nyereség",
      "bruttó nyereség",
      "árrés",
      "bruttó árrés",
      "riportok",
      "nincs megadott költség",
      "hiányzó költség",
      "költség nélküli termékek"
    ],
    "content": [
      {
        "type": "p",
        "text": "A költség nem kötelező mező. A költség nélküli termékek kimaradnak a bruttó nyereségből, miközben az árbevételük teljes egészében beleszámít. A Riportok Költség nélküli termékek csempéje megmutatja, hány, az időszakban eladott vagy visszavett terméknek nincs költsége, például „12 termék”; a 0 költségnek számít, ezért az ilyen termékek nem szerepelnek a listán. Ha minden terméknek van költsége, a csempén ez áll: „0 termék · a költségadatok teljesek”."
      },
      {
        "type": "p",
        "text": "Koppintson a csempére vagy a Termékek megtekintése gombra a Költség nélküli termékek megnyitásához, amelyek a bruttó nyereségből kimaradó árbevétel szerint vannak rangsorolva. Koppintson egy sorra a termék megnyitásához, a Szerkesztés gombbal adja hozzá a költségét, és visszatérve a sor a Költség hozzáadva jelölést kapja. A változatokkal rendelkező termék csak akkor kap Költség hozzáadva jelölést, ha minden költség nélkül eladott változatának van költsége – a sajátja, vagy a termék költsége, amelyet követ."
      },
      {
        "type": "p",
        "text": "A bruttó nyereség az összes engedmény (tétel- és kosárengedmények, akciók, pontbeváltás) utáni, adó nélküli árbevétel mínusz a költség – ezért olvasható az adót felszámító boltban a mező úgy, hogy Beszerzési ár adó nélkül (nem kötelező): azt adja meg, amennyit adó nélkül fizetett. Az árrés a bruttó nyereség osztva a költséggel rendelkező termékek árbevételével, így a költség nélküliek nem húzzák le. A visszavétel a visszavétel napján visszaveszi azt a bruttó nyereséget, amelyet ezek a tételek hoztak."
      },
      {
        "type": "p",
        "text": "Koppintson a bruttó nyereség csempére az „Az árbevételtől a bruttó nyereségig” nézetért, amely soronként von le: árbevétel (adóval), adó, árbevétel (adó nélkül), költség nélküli árbevétel, termékköltség, végül bruttó nyereség és árrés. A sorok pontosan kiadják a csempe értékét."
      },
      {
        "type": "note",
        "text": "A megadott költség csak a későbbi eladásokat érinti; a már megtörtént eladásokat nem számolja újra a rendszer. Ez a számítás a 3.1-es verzióban jelent meg: a korábbi verziók csak a kézi tételengedményeket vonták le, és az adóval együtt megadott árban lévő adót nyereségnek számolták, ezért a frissítés után az engedményes vagy adóval együtt árazott időszakok alacsonyabb bruttó nyereséget mutatnak. Ez javítás, nem adatvesztés."
      }
    ],
    "related": [
      "report-periods",
      "product-variants",
      "purchase-orders"
    ]
  },
  {
    "slug": "profit-loss",
    "category": "reports",
    "since": "3.4",
    "question": "Hogyan látom, mennyit kerestem ténylegesen havonta?",
    "keywords": [
      "eredménykimutatás",
      "nyereség és veszteség",
      "p&l",
      "nettó eredmény",
      "havi nyereség",
      "kiadások",
      "működési eredmény",
      "havi eredmény"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nyissa meg az Eredmény fület az oldalsávban, a Riportok alatt. Itt minden hónap látható a legújabbtól a legrégebbiig, a nettó eredményével: az aktuális hónap Folyamatban jelölést kap, az egyes évek fejléce pedig összeadja a lezárult hónapok nettó eredményét."
      },
      {
        "type": "p",
        "text": "Koppintson egy hónapra, és láthatja, hogyan jön ki a nettó eredménye:"
      },
      {
        "type": "list",
        "items": [
          "Árbevétel (adó nélkül): az összes engedmény utáni, adó nélküli árbevétel, azon a napon számítva, amikor az árut átadták.",
          "Termékköltség: az eladott áruk költsége, a termékeknél megadott költségek alapján.",
          "Készletveszteség: annak a költsége, amit a Készlet módosítása lejárat, sérülés, ajándékozás és hasonló okból kivett a készletből, plusz a selejtezett visszáru. A bruttó nyereség után következik – lásd: „Hogyan rögzíthetem a lejárt, tönkrement vagy mintaként kiadott készletet?” A hónapnál külön Készletveszteség szakasz is van, amely indok szerint összesíti.",
          "Kezelési költség (becsült): a fizetési módok díjkulcsaiból becsült költségek.",
          "Elvesztett előlegek: az előrendelés lemondásakor megtartott előlegek.",
          "Készpénz kerekítése: amennyivel a használatban lévő érmékre kerekítés a rendelések végösszegét meghaladta vagy elmaradt tőle.",
          "Fix kiadások és Egyszeri kiadások: az adott hónapra rögzített tételek – lásd: „Hogyan rögzíthetem a bérleti díjat, a béreket és más kiadásokat?”"
        ]
      },
      {
        "type": "p",
        "text": "Legfeljebb három diagram következik: a nettó eredmény hónapról hónapra, az egyes fix kiadások részaránya és a fix kiadások alakulása. A két trenddiagram legfeljebb 12 hónapot fed le a megnyitott hónapig, és csak akkor jelenik meg, ha az első eladás vagy kiadás hónapjától számítva legalább két összehasonlítható hónap van. A részarány-diagramhoz az adott hónapban kell egy fix kiadás; amíg nincs, ezen a szakaszon a Fix kiadás hozzáadása felirat látható."
      },
      {
        "type": "p",
        "text": "A Riportok és az Eredmény összekapcsolódik. Ha a Riportok időszaka ez a hónap vagy pontosan egy egész hónap, a csempék második sora kiegészül egy Nettó eredmény csempével (amíg a hónap tart, „Folyamatban · a hónap teljes kiadása levonásra kerül” jelöléssel); koppintson rá, hogy lássa a hónap bontását a bruttó nyereségtől a nettó eredményig. Minden más időszaknál koppintson a Havi eredmény megtekintése sorra az „Az árbevételtől a bruttó nyereségig” nézet utolsó sorában. Fordítva: az Eredményben a hónap címe alatti „Október jelentés megtekintése” megnyitja a Riportokat az adott hónappal."
      },
      {
        "type": "note",
        "text": "A nettó eredmény a jövedelemadó előtti működési eredmény, a DingPOS-ban rögzített adatokból számolva – nem adóbevallás. Ha vannak költség nélkül eladott termékek, a hónap akkor is mutat nettó eredményt, a „Nem tartalmazza N termék költségét” jelöléssel; koppintson rá, hogy lássa, melyek ezek. Az Eredmény minden csomagban elérhető. Munkatársi fiókok esetén a megnyitásához az Eredmény és kiadások jogosultság kell, amelyhez a Menedzserek és a Munkatársak alapértelmezés szerint jóváhagyást igényelnek, mert termékköltségeket és béreket is mutat."
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
      "általános költségek",
      "költségelosztás",
      "egyszeri kiadás"
    ],
    "content": [
      {
        "type": "p",
        "text": "Az Eredmény fülön koppintson a Kiadás hozzáadása gombra, és válasszon fix vagy egyszeri kiadást. A kiadás abban a hónapban számít, amelyikhez tartozik, nem abban, amelyikben kifizette, és ehhez igazodik minden hónap nettó eredménye."
      },
      {
        "type": "p",
        "text": "A fix kiadás olyan, amelyet minden hónapban fizet, például a bérleti díj, a rezsi vagy a bérek:"
      },
      {
        "type": "list",
        "items": [
          "Adja meg a nevet, a havi összeget és azt a hónapot, amelyben kezdődik. Korábbi hónapot választva visszamenőleg is rögzíthet.",
          "Ha az összeg megváltozik, koppintson az Összeg módosítása gombra, válassza ki a hónapot, majd az Ettől a hónaptól (például bérleti díj emelésekor) vagy a Csak erre a hónapra (például az adott havi áramszámlánál) lehetőséget. Minden módosítás megjelenik a listában, és megnyitva szerkesztheti vagy eltávolíthatja.",
          "Ha már nem fizeti, adja meg az Utolsó beszámított hónapot: az a hónap és az előtte lévők továbbra is beszámítanak."
        ]
      },
      {
        "type": "p",
        "text": "Az egyszeri kiadás egyszer fizetendő:"
      },
      {
        "type": "list",
        "items": [
          "Üzletberendezésnél, felszerelésnél vagy előre kifizetett biztosításnál kapcsolja be az Elosztás több hónapra beállítást, és válasszon 2–120 hónapos időtartamot, valamint az első beszámított hónapot. Az űrlap előnézetben mutatja, havonta mekkora összeg számít be, és mely hónapokat érinti.",
          "Elosztás nélkül is megválaszthatja a Beszámított hónapot: a novemberben érkező októberi számla októberben is beszámítható, a valós dátum megtartásával.",
          "Ha az elosztás korán véget ér (például felmondtak egy biztosítást), használja az Elosztás korai befejezése lehetőséget: ami még hátravan, az Ön által választott hónapban számít be."
        ]
      },
      {
        "type": "note",
        "text": "Azt adja meg, amit az üzlet ténylegesen visel, a visszaigényelhető adó nélkül. Az eladásra szánt áru és az alapanyagok, amelyekből elkészíti, ehelyett a Beszerzésen keresztül kerülnek be, mert eladáskor a termékköltségben számítanak be. A követett készletű fogyóeszközöket felhasználáskor a Készlet módosítása rögzíti Bolti fogyóeszköz indoklással, nem kiadásként. A (visszajáró) kaució, a hitel tőkéje és a tulajdonos kivétele nem kiadás. A módosítások a ✓ koppintásakor együtt mentődnek, és ha a változás lezárult hónapot érint, a rendszer előbb megmondja, mely hónapok nettó eredménye módosul."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "roadmap-monthly-settlement"
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
        "text": "Nyissa meg a Beállítások → Hűségprogram részt, és adjon meg két szabályt: hány pontot kap a vevő X összegű vásárlás után, illetve hány pontot kell beváltani M összegű engedményhez (rendelésenkénti beváltási korlát is megadható). Az új tagoknak automatikusan üdvözlő pontokat is adhat."
      },
      {
        "type": "p",
        "text": "Válassza ki a tagot az eladáshoz a kosárban vagy a fizetési képernyőn, és a pontok automatikusan jóváíródnak; beváltáshoz adja meg a felhasználandó pontokat. A rendelés sztornózásakor a rendszer visszavonja a vele szerzett pontokat, a beváltott pontokat pedig visszatéríti."
      },
      {
        "type": "p",
        "text": "Ha kézzel szeretne pontot hozzáadni vagy levonni (például egy kimaradt vásárlás miatt), koppintson a vevő adatlapján a Pontok kártya Módosítás gombjára, válassza a Hozzáadás vagy a Levonás lehetőséget, adja meg a pontok számát, és szükség esetén írjon indoklást (legfeljebb 100 karakter). A vevő meglévő pontjainál többet nem vonhat le. Minden módosítás megmarad a pontok előzményei között az előtte és utána érvényes egyenleggel, az indoklással és a módosító nevével."
      },
      {
        "type": "note",
        "text": "A kézi pontmódosítás a 3.5-ös verzióban jelent meg. Pro csomagban azok a munkatársak, akiknek a szerepköre a Kézi pontmódosításhoz jóváhagyást kér (alapértelmezés szerint a Munkatárs szerepkörnél ez így van), a megerősítéskor egy menedzser vagy a tulajdonos PIN-kódját kell megadniuk."
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
          "Nézetek (költség és nyereség, Irányítópult, Eredmény és kiadások, Beállítások, biztonsági mentés és visszaállítás): a jóváhagyás addig oldja fel a nézetet, amíg a kezelő nem változik, vagy az alkalmazás a háttérbe nem kerül.",
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
        "text": "Ha a próbaidőszak alatt bármelyik csomagra előfizet, a próba azonnal véget ér, és onnantól a megvásárolt csomag érvényes. A próbaidőszak után a Pro funkciók, például a személyzet kezelése és a tevékenységnapló csak Pro előfizetéssel maradnak elérhetők. A részletes jelentésekhez erre nincs szükség: a 3.4-es verzió óta minden csomag tartalmazza őket."
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
        "text": "Mindhárom csomag tartalmazza a teljes körű fizetési funkciókat, a termékeket, a rendeléseket (sztornóval, visszavétellel és cserével), a jelentéseket (a részletes jelentésekkel és a havi eredménnyel a 3.4-es verzió óta) és a felhőalapú biztonsági mentést. Az üzlet vezetéséhez nyújtott eszközökben térnek el:"
      },
      {
        "type": "list",
        "items": [
          "Lite: egyedül dolgozó piaci standhoz, ahol fizetésre és termékekre van szükség.",
          "Standard: kiegészül akciókkal, hűségpontokkal és tagi szintekkel, készletkövetéssel, beszerzéssel, számlás (utólag fizetett) eladással, előrendeléssel és a kezelési költség díjkulcsaival.",
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
        "text": "Az ajándékok és a fizetős kiegészítők sosem módosítják maguktól a kosarat. Ha a feltételek teljesülnek, javaslatsáv jelenik meg a pénztárképernyőn, és a kosár csak akkor változik, ha a pénztáros az Ajándék választása vagy a Kiegészítő választása gombra koppint – ez szándékos, mert az ajándék fizikai készletet érint: valakinek meg kell erősítenie, hogy van belőle, és hogy a vevő kéri."
      },
      {
        "type": "list",
        "items": [
          "Az Elutasítás után ugyanaz a javaslat ennél a kosárnál nem jelenik meg újra; új vagy kiürített kosárnál ismét felajánlja a rendszer.",
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
        "text": "A 3.4-es verzió óta az Eredmény a termékköltség, a kezelési költség és a kiadások levonása után mutatja az egyes hónapok nettó eredményét – lásd: „Hogyan látom, mennyit kerestem ténylegesen havonta?” Külön havi zárási riport még nincs, de az egyeztetéshez szükséges minden adat már megtalálható az alkalmazásban:"
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
        "text": "Ha exportálható vagy kinyomtatható havi zárási riportra van szüksége, írjon nekünk, és adja meg, mely adatok kellenek benne. A fejlesztést a kérések száma szerint rangsoroljuk."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
