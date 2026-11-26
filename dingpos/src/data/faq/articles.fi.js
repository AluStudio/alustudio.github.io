// Generated from en and the fi translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync fi`, then `npm run l10n -- dingpos apply fi`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Aloitus",
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
    "label": "Tilaukset ja palautukset",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Tuotteet, varasto ja ostot",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Raportit",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Kampanjat ja kanta-asiakkuus",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Varmuuskopiointi ja tiedot",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Henkilöstö ja oikeudet",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Tilaus ja laskutus",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Kampanjoiden käyttöönotto-oppaat",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Tulossa pian",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Miten perustan kauppani DingPOSiin?",
    "keywords": [
      "käyttöönotto",
      "aloitus",
      "aloittaminen",
      "ensimmäinen käynnistys",
      "ohjattu käyttöönotto",
      "kaupan perustaminen",
      "kassajärjestelmän käyttöönotto",
      "maa",
      "valuutta",
      "verot"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kun avaat DingPOSin ensimmäisen kerran, ohjattu käyttöönotto perustaa kauppasi kahdessa vaiheessa ja muutamassa minuutissa:"
      },
      {
        "type": "steps",
        "items": [
          "Valitse maasi tai alueesi. Luettelon alussa näkyvät ensin iPadin nykyinen maa tai alue ja sitten yleisimmät maat ja alueet; niiden alla ovat kaikki 175 maata ja aluetta, joissa DingPOS on App Storessa, ja luetteloa voi hakea nimellä sovelluksen kielellä tai englanniksi. Valintasi täyttää valuutan, verot ja verotavan.",
          "Anna kohdassa Myymäläsi kaupan nimi, lisää halutessasi logo ja tarkista valuutta, verot ja verotapa (Sisältää veron / Ei sisällä veroa). Valuutta on oletuksena maasi valuutta; napauttamalla sitä voit valita 130 valuutan joukosta. Verot-luettelossa on maasi oletusverot: voit nimetä ne uudelleen, muuttaa verokantaa, poistaa veron tai napauttaa Lisää vero -painiketta, jos tarvitset toisen rivin. Esimerkiksi Brittiläisessä Kolumbiassa sijaitseva kauppa muuttaa ensimmäisen rivin muotoon ”GST 5” ja lisää rivin ”PST 7”."
        ]
      },
      {
        "type": "p",
        "text": "Napauta Jatka, niin näet viestin ”Ding! Myymäläsi on valmis.” DingPOS luo myös kaksi maksutapaa, Käteinen ja Luottokortti. Lisää sitten tuotteesi Tuotteet-välilehdellä ja aloita myynti."
      },
      {
        "type": "note",
        "text": "Valuuttaa ei voi muuttaa käyttöönoton jälkeen; verot ja verotavan voi molemmat vaihtaa myöhemmin kohdassa Asetukset → Myymälän tiedot. Yhdysvalloissa, Kanadassa, Brasiliassa ja Mikronesiassa verokanta riippuu osavaltiosta, provinssista tai kaupungista, joten verokantakenttä on aluksi tyhjä ja jatkaaksesi syötät veloittamasi verokannan. Verokannan on oltava yli 0: kauppa, joka ei peri veroa, poistaa rivin. Saksassa, Ranskassa, Italiassa ja muissa Euroopan maissa luettelossa on myös paikalliseen vähittäiskauppaan yleisesti kuuluvat alennetut verokannat paikallisella veron nimellä, esimerkiksi Saksassa ”MwSt. 19%” ja ”MwSt. 7%”; alennettuja verokantoja ei oletuksena käytetä uusiin tuotteisiin, joten ota ne käyttöön tuotekohtaisesti. 175 maan luettelo ja valuutan valinta tulivat versiossa 3.2; aiemmissa versioissa oli 15 maata."
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
    "question": "Toimiiko kassajärjestelmä ilman internetyhteyttä?",
    "keywords": [
      "offline",
      "ilman nettiä",
      "internet",
      "wifi",
      "verkkoyhteys",
      "ei yhteyttä",
      "tori",
      "kassa ilman verkkoa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. DingPOS toimii ilman verkkoyhteyttä – myynti, tuotteiden hallinta, varasto ja raportit toimivat paikallisesti iPadillasi ilman verkkoa. Yötorit, pop-up-myyntikojut ja muut paikat ilman Wi-Fiä sopivat käyttöön hyvin."
      },
      {
        "type": "p",
        "text": "Vain kaksi asiaa vaatii yhteyden: pilvivarmuuskopiointi (lataus omaan iCloud-, Google Drive- tai Dropbox-tiliisi) ja tilauksen tilan tarkistus."
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
    "question": "Tarvitseeko DingPOSia varten luoda tili?",
    "keywords": [
      "tili",
      "rekisteröityminen",
      "kirjautuminen",
      "tunnukset",
      "tietosuoja",
      "luo tili"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ei. DingPOSissa ei ole käyttäjätilejä – lataa sovellus ja aloita myynti. Tuotteesi, tilauksesi ja asiakastietosi pysyvät iPadillasi. Ne päätyvät meille vain, jos lähetät Asetuksista ongelmailmoituksen, jonka mukana lähtee kopio myymäläsi tiedoista, jotta voimme toistaa ongelman."
      },
      {
        "type": "p",
        "text": "Kun otat pilvivarmuuskopioinnin käyttöön, kirjaudut omaan pilvitiliisi (iCloud, Google Drive tai Dropbox). Varmuuskopiot ovat tililläsi, emmekä pääse niihin käsiksi."
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
    "question": "Millä laitteilla DingPOSia voi käyttää?",
    "keywords": [
      "laite",
      "iphone",
      "mac",
      "ipad",
      "vaatimukset",
      "versio",
      "iPadOS",
      "yhteensopivuus"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS tukee tällä hetkellä iPadeja, joissa on iPadOS 17.4 tai uudempi. Sovellus on suunniteltu ensisijaisesti vaaka-asentoon."
      },
      {
        "type": "p",
        "text": "iPhonea ja Macia ei vielä tueta. Jos haluat meidän tukevan jotain muuta laitetta, kirjoita meille ja kerro käyttötarkoituksestasi."
      },
      {
        "type": "note",
        "text": "Jokainen iPad, jossa toimii iPadOS 17, voidaan päivittää versioon 17.4, joten mikään malli ei jää ulkopuolelle. Jos iPadissa on yhä iPadOS 17.0–17.3, se täytyy ensin päivittää kohdassa Asetukset → Yleiset → Ohjelmistopäivitys, ennen kuin siihen voi asentaa DingPOSin version 3.5 tai uudemman."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Voiko valuuttaa, verokantaa tai verotapaa vaihtaa käyttöönoton jälkeen?",
    "keywords": [
      "valuutta",
      "verotila",
      "vaihtaminen",
      "lukittu",
      "verokanta",
      "verot",
      "alv",
      "verollinen hinta",
      "veroton hinta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Veroa voi muuttaa, valuuttaa ei. Verot ja verotapa vaihdetaan Vero-kortissa kohdassa Asetukset → Myymälän tiedot, ja muutos koskee vain myöhempiä myyntejä: aiemmat tilaukset, palautukset ja raportit säilyttävät kirjatut veromääränsä ja verotapansa."
      },
      {
        "type": "list",
        "items": [
          "Verot: lisää vero, nimeä se uudelleen, muuta sen verokantaa tai poista se – katso ”Miten vero lasketaan?”",
          "Verotapa (Sisältää veron / Ei sisällä veroa): napauta toista vaihtoehtoa, niin vahvistusikkunassa näytetään esimerkki ensimmäisellä verollasi, esimerkiksi ”NT$100:n tuote, vero 5 %: asiakas maksaa NT$105”. Hintojen luvut säilyvät, ja avoin ostoskori lasketaan uudelleen uudessa tilassa, kun palaat kassalle. Verotavan voi vaihtaa versiosta 3.5 alkaen; aiemmat versiot lukitsevat sen käyttöönotossa.",
          "Vaihdon jälkeen kokonainen palautus hyvittää alkuperäisen tilauksen sellaisena kuin se oli. Vaihto (korvaavilla tuotteilla) tilaukseen, joka on myyty toisella verotavalla, estetään: vaihda verotapa takaisin tai palauta tuotteet ja tee uusi myynti."
        ]
      },
      {
        "type": "p",
        "text": "Valuutta lukitaan, kun käyttöönotto on valmis. Kaikki aiemmat tilaukset on kirjattu siinä, joten valuutan vaihtaminen kesken kaiken sotkisi raporttisi. Tarkista se käyttöönoton Myymäläsi-vaiheessa: valuutta on oletuksena maasi valuutta, ja voit napauttaa sitä valitaksesi toisen."
      },
      {
        "type": "note",
        "text": "Jos olet juuri perustanut kauppasi eikä sinulla ole vielä tärkeitä tietoja, voit poistaa sovelluksen ja asentaa sen uudelleen, jolloin pääset käyttöönottoon uudestaan. Varmista ennen poistamista, ettei mitään säilytettävää ole."
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
    "question": "Miten vaihdan sovelluksen kielen?",
    "keywords": [
      "kieli",
      "sovelluksen kieli",
      "englanti",
      "kiinan kieli",
      "japani",
      "espanja",
      "vaihda kieli",
      "kielivalinta"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS tukee 32 kieltä, muun muassa englantia, perinteistä ja yksinkertaistettua kiinaa, japania, koreaa, thaita, vietnamia, indonesiaa, malaijia, espanjaa (Latinalainen Amerikka), portugalia (Brasilia), ranskaa ja saksaa. Siirry kohtaan Asetukset → Laitteen asetukset ja napauta Sovelluksen kieli. Se avaa DingPOSin sivun iPadin Asetukset-sovelluksessa, jossa valitset kielen kohdasta Kieli."
      },
      {
        "type": "p",
        "text": "iOS ei salli sovellusten avata kielilistaa suoraan, joten viimeinen napautus tehdään järjestelmän Asetuksissa. Kieli koskee vain tätä iPadia."
      },
      {
        "type": "note",
        "text": "Muut kielet kuin englanti ja perinteinen kiina tulivat versiossa 3.2. Jos Kieli-luettelossa on vain englanti ja kiina, päivitä DingPOS App Storesta."
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
    "question": "Miten palvelen useita asiakkaita yhtä aikaa?",
    "keywords": [
      "ostoskorit",
      "useita ostoskoreja",
      "pito",
      "vaihto",
      "rinnakkain",
      "jono",
      "useampi asiakas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kassanäkymässä toimii kymmenen ostoskoria yhtä aikaa. Lisää uusi napauttamalla ostoskoripalkin \"+\"-painiketta ja vaihda koria napauttamalla numeroitua välilehteä."
      },
      {
        "type": "p",
        "text": "Jokainen ostoskori lasketaan erikseen. Kun asiakas A vielä katselee, vaihda toiseen koriin ja ota asiakkaan B maksu ensin. Ostoskori poistuu automaattisesti, kun sen maksu on valmis."
      },
      {
        "type": "note",
        "text": "Ostoskorit ovat vain muistissa – maksamattomat ostoskorit tyhjenevät, kun sovellus suljetaan kokonaan."
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
    "question": "Miten annan alennuksen?",
    "keywords": [
      "alennus",
      "prosenttialennus",
      "kiinteä alennus",
      "hinnanalennus",
      "alennusprosentti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alennuksia voi antaa kahdella tasolla, ja kumpikin tukee kiinteää summaa tai prosenttia:"
      },
      {
        "type": "list",
        "items": [
          "Tuotealennus: napauta tuotetta ostoskorissa → valitse \"Alennus\" → syötä summa tai prosentti.",
          "Ostoskorin alennus: napauta ostoskorin alla olevaa \"Alennus\"-painiketta."
        ]
      },
      {
        "type": "p",
        "text": "Jokaisella tuotteella ja jokaisella ostoskorilla voi olla yksi alennus kerrallaan – uusi alennus korvaa edellisen, ja alennusmerkkiä napauttamalla alennus poistuu. Alennukset vähennetään ennen veroa, kuten vähittäiskaupassa yleensä."
      },
      {
        "type": "p",
        "text": "Usein antamasi alennukset voi tallentaa: siirry kohtaan Asetukset → Kanta-asiakkaat ja kampanjat → Alennusesiasetukset ja napauta Lisää esiasetus, esimerkiksi ”Henkilökuntahinta 20 %”. Kassalla sekä tuotealennuksessa että ostoskorin alennuksessa on Esiasetukset-valikko; esiasetuksen valinta täyttää alennuksen tyypin ja arvon täsmälleen kuin kirjoittaisit ne itse, joten se lasketaan edelleen mukaan työntekijän alennusrajaan. Alennusesiasetukset tulivat versiossa 3.6, ja ne vaativat Standard-paketin tai sitä ylemmän."
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
    "question": "Miten vero lasketaan?",
    "keywords": [
      "vero",
      "alv",
      "arvonlisävero",
      "myyntivero",
      "verollinen hinta",
      "veroton hinta",
      "useita veroja",
      "gst",
      "pst",
      "keskeytä vero",
      "kuitti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vero lasketaan automaattisesti kohdassa Asetukset → Myymälän tiedot määritettyjen verojen ja verotavan mukaan. Verotapoja on kaksi, ja kuitti näyttää veron määrän kummassakin:"
      },
      {
        "type": "list",
        "items": [
          "Sisältää veron: hinnat sisältävät jo veron – loppusumma ei muutu, ja kuitissa eritellään hintaan sisältyvä vero (yleistä esimerkiksi Taiwanissa ja Japanissa).",
          "Ei sisällä veroa: vero lisätään alennuksen jälkeiseen summaan maksun yhteydessä (yleistä esimerkiksi Yhdysvalloissa ja Kanadassa)."
        ]
      },
      {
        "type": "p",
        "text": "Myymälä voi periä useita veroja, esimerkiksi GST 5 % ja PST 7 % Brittiläisessä Kolumbiassa tai Japanissa 10 prosentin kulutusvero ja 8 prosentin alennettu verokanta rinnakkain:"
      },
      {
        "type": "list",
        "items": [
          "Napauta Vero-kortissa Lisää vero ja anna nimi ja verokanta. Jos otat käyttöön Käytä uusille tuotteille, myöhemmin lisäämäsi tuotteet saavat tämän veron oletuksena. Jos myymälällä on jo oletusvero, uusi vero lisätään aluksi pois päältä; ota se käyttöön, kun tuotteesta peritään molemmat.",
          "Jokainen tuote valitsee perimänsä verot tuotelomakkeen Verot-kohdassa – esimerkiksi bentosta voidaan periä vain 8 prosentin alennettu verokanta. Kun käytössä on kaksi tai useampi vero, lomake näyttää verokantojen yhteissumman.",
          "Napauttamalla veroa voit nimetä sen uudelleen, muuttaa sen verokantaa tai lisätä sen kaikkiin tuotteisiin tai poistaa sen kaikista tuotteista kerralla valinnalla Lisää kaikkiin tuotteisiin tai Poista kaikista tuotteista. Veroa poistettaessa näytetään ensin, kuinka monesta tuotteesta sitä ei enää veloiteta.",
          "Myymälässä, jonka verotapa on Ei sisällä veroa, ostoskorin yhteenvedossa on yksi rivi kutakin veroa kohden, ja tilauksen tiedoissa on yksi rivi kutakin veroa kohden verokantoineen ja summoineen, joista vero veloitettiin."
        ]
      },
      {
        "type": "p",
        "text": "Jos haluat lopettaa veron perimisen joksikin aikaa, poista Veron periminen -kytkin käytöstä Vero-kortin yläreunassa: kaikki myöhemmät myynnit ovat verottomia, myös ostoskorissa jo olevat tuotteet. Jokainen tuote säilyttää verot, ja kytkimen ottaminen uudelleen käyttöön palauttaa ne ennalleen."
      },
      {
        "type": "p",
        "text": "Laskentajärjestys kokonaisuudessaan: tuotealennukset ja kampanjat → ostoskorin alennus → pisteiden lunastus → vero. Summat pyöristetään tavallisen pyöristyssäännön mukaan (puolikas ylöspäin) valuutan desimaalien määrään (esim. 0 TWD:lle, 2 USD:lle). Vero lasketaan kerran kutakin veroa kohden jokaisella tilauksella, ja sen desimaalit noudattavat Vero-kortin asetusta Veron pyöristys: Pyöristä lähimpään, puolikas ylös, Pyöristä alas tai Pyöristä ylös. Japanin uudet myymälät aloittavat asetuksella Pyöristä alas, muut myymälät asetuksella Pyöristä lähimpään, puolikas ylös."
      },
      {
        "type": "note",
        "text": "Nimetyt verot tulivat versiossa 3.5. Päivityksen yhteydessä verokantasi muuttuu nimetyksi veroksi (esimerkiksi ”GST 10 %” Australiassa), ja jokainen olemassa oleva tuote perii sen; myymälä, jonka verokanta oli 0, ei saa veroa. Aiemmat tilaukset ja palautukset säilyttävät verokannat ja summat, joilla ne kirjattiin; raportit laskevat liikevaihdon nyt ennen veroa, myös aiemmilta jaksoilta (katso ”Mikä ero on liikevaihdolla ja saapuneella maksulla?”)."
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
    "question": "Mitä maksutapoja DingPOS tukee?",
    "keywords": [
      "maksutapa",
      "maksutavat",
      "käteinen",
      "luottokortti",
      "line pay",
      "vaihtoraha",
      "oma maksutapa",
      "laskulle",
      "maksukulut"
    ],
    "content": [
      {
        "type": "p",
        "text": "Uusi myymälä aloittaa kahdella maksutavalla, Käteinen ja Luottokortti, jotka nimetään käyttöönotossa sovelluksen kielellä. Kohdassa Asetukset → Maksutavat voit lisätä minkä tahansa muun maksutavan (esim. Apple Pay, LINE Pay, paikallinen e-lompakko) ja järjestellä niitä. Napauttamalla maksutapaa voit nimetä sen uudelleen, esimerkiksi Luottokortista ”Kortti (Square)”; Tilastot laskevat ennen nimenmuutosta tehdyt myynnit uuden nimen alle (versiosta 3.6 alkaen). Poista maksutapa -painike on muokkausnäkymän alareunassa, ja se kysyy ennen poistamista; aiemmat tilaukset säilyttävät maksutapansa, eikä viimeistä jäljellä olevaa maksutapaa voi poistaa."
      },
      {
        "type": "p",
        "text": "Maksutavat ovat kirjanpidon merkintöjä – DingPOS ei käsittele varsinaisia maksuja. Ota kortti- tai mobiilimaksut vastaan nykyisellä maksupäätteellä tai sovelluksella ja valitse sitten DingPOSissa vastaava maksutapa kirjataksesi sen. Käteismaksuissa vaihtoraha lasketaan automaattisesti, ja siellä, missä pienimpiä kolikoita ei enää käytetä, myös käteissumma voidaan pyöristää – katso ”Voiko käteismaksuja pyöristää käytössä oleviin kolikoihin?”"
      },
      {
        "type": "p",
        "text": "Jos kortti- tai mobiilimaksupalvelusi perii maksukulun, anna maksutavalle maksukulun määrä, niin Tilastot arvioivat kunkin maksutavan maksukulut ja arvioidun nettotulon – katso ”Voiko DingPOS seurata kortti- ja mobiilimaksujen maksukuluja?”"
      },
      {
        "type": "p",
        "text": "Jos vakioasiakas ottaa tavarat nyt ja maksaa myöhemmin, valitse Laskulle: myynti kirjataan myyntisaamiseksi ja kuitataan, kun raha saapuu. Katso ”Voiko vakioasiakas ostaa laskulle ja maksaa myöhemmin?”"
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
    "question": "Voiko DingPOS seurata kortti- ja mobiilimaksujen maksukuluja?",
    "keywords": [
      "maksukulu",
      "korttimaksun kulut",
      "maksukulun määrä",
      "nettotulo",
      "kauppiaan kulut",
      "maksupalvelun palkkio",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Napauta kohdassa Asetukset → Maksutavat maksutapaa (tai lisää uusi) ja täytä Maksukulu: prosenttiosuus, kiinteä summa tapahtumaa kohden tai molemmat. Käteistyyppisillä maksutavoilla ei ole maksukulua. Siitä lähtien jokaiseen kyseisellä maksutavalla vastaanotettuun maksuun kirjataan maksukulu, joka arvioidaan sillä hetkellä voimassa olevalla määrällä."
      },
      {
        "type": "p",
        "text": "Tilastot-välilehden Maksutavat-kortti lisää jokaisen maksukulullisen maksutavan alle rivin ”Maksukulu · Netto”, ja kortin alareunassa näkyvät koko jakson arvioidut maksukulut ja arvioitu nettotulo."
      },
      {
        "type": "list",
        "items": [
          "Syötä määrä, jonka maksupalvelusi todella vähentää. Jos kulusta peritään vero, sisällytä se: jos kulu on 3 % ja vero 5 %, syötä 3,15 %. Jätä molemmat kentät tyhjiksi, jos kuluja ei ole.",
          "Määrän muutos koskee vain myöhempiä maksuja; jo kirjatut maksukulut pysyvät ennallaan.",
          "”Prosenttiosuus palautuu palautuksissa ja ennakkotilausten peruutuksissa” on oletuksena päällä Taiwanin ja Japanin myymälöissä ja pois päältä muualla, koska esimerkiksi Stripe, Square ja PayPal pitävät kulunsa hyvityksen yhteydessä; aseta valinta vastaamaan omaa maksupalveluasi. Se koskee palautuksia ja palautettuja ennakkotilausten etumaksuja: kun valinta on päällä, prosenttiosuus palautuu; kiinteä osuus ei koskaan. Mitätöinti tai peruutettu maksun kuittaus ohittaa valinnan ja perii takaisin koko kirjatun maksukulun, kiinteä osuus mukaan lukien. Asiakas saa kummassakin tapauksessa takaisin saman summan.",
          "Maksuihin, jotka on vastaanotettu ennen kuin maksutavalla oli määrä, ei kirjata maksukulua: Tilastot merkitsee ne tekstillä ”N ilman maksukulun määrää” ja näyttää nettotulon muodossa ”—”."
        ]
      },
      {
        "type": "note",
        "text": "Maksukulut ovat arvioita antamastasi määrästä; todellinen summa on maksupalvelusi tiliotteella. Maksukulujen määrän muokkaaminen vaatii Standard-paketin tai sitä ylemmän, ja Lite-paketissa kentät on lukittu. Versiosta 3.4 alkaen jokainen paketti näkee kirjatut maksukulut Tilastot- ja Tulos-välilehdellä, joten kokeilun aikana asetettu määrä arvioi maksukuluja edelleen myös Lite-paketissa. Aiemmat versiot näyttivät maksukulut vain Standard-paketissa ja sitä ylemmissä."
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
    "question": "Voiko käteismaksuja pyöristää käytössä oleviin kolikoihin?",
    "keywords": [
      "käteisen pyöristys",
      "pyöristys",
      "pyöristä ylös",
      "pyöristä alas",
      "kolikot",
      "pennit",
      "sentit",
      "0,05",
      "vaihtoraha",
      "kanada",
      "australia",
      "sveitsi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Kanada, Australia, Uusi-Seelanti, Sveitsi, Tanska, Ruotsi, Norja, Belgia, Suomi ja Unkari eivät enää käytä pienimpiä kolikoitaan, joten DingPOS pyöristää käteissumman määräksi, jonka voi oikeasti ojentaa: käteisellä maksettu C$12.99 tilaus otetaan summana C$13.00, ja vaihtoraha lasketaan summasta C$13.00. Korttimaksut ja muut ei-käteismaksut pysyvät tarkkoina."
      },
      {
        "type": "p",
        "text": "Uusi myymälä, joka otetaan käyttöön jossakin näistä maista ja kyseisen maan valuutalla, saa asetuksen automaattisesti. Muissa myymälöissä sen voi ottaa käyttöön Käteisen pyöristys -kortilla kohdan Asetukset → Maksutavat alareunassa: valitse, mihin käteinen pyöristetään (Ei pyöristystä; valuutassa, jossa on senttejä: 0,05, 0,10, 0,50 tai 1,00; valuutassa, jossa ei ole senttejä, kuten TWD tai JPY: 5, 10, 50 tai 100) ja, jos arvo voi osua tasan puoliväliin, pyöristetäänkö ylös vai alas. Muutos koskee vain myöhempiä maksuja."
      },
      {
        "type": "list",
        "items": [
          "Maksunäkymässä lukee ”Käteismaksu C$13.00”. Jos asiakas pyytää maksamaan tarkan summan, napauta maksutapojen alla olevaa Ota tarkka summa; se koskee vain kyseistä myyntiä.",
          "Tilauksen loppusumma, vero, liikevaihto, pisteet ja jäsenen ostosumma eivät muutu; pyöristyserä kirjataan maksuun, ja kuittinäkymä sekä tilauksen tiedot näyttävät sen loppusumman alla, esimerkiksi ”Käteisen pyöristys +C$0.01”.",
          "Myös palautusten käteishyvitykset, ennakkotilausten käteisetumaksut ja noudon loppusummat, vaihtojen lisämaksut sekä käteisellä kuitatut myyntisaamiset pyöristetään; kun kuitataan useita kerralla, erä pyöristetään vain kerran.",
          "Mitätöinnit, palautetut ennakkotilausten etumaksut ja peruutetut maksun kuittaukset maksavat takaisin täsmälleen kirjatun summan ilman uutta pyöristystä.",
          "Tilastot-välilehden Saapunut maksu näyttää, kuinka suuri osa siitä oli käteisen pyöristystä, ja kuukausittainen Tulos-näkymä saa rivin Käteisen pyöristys, joka lasketaan mukaan liikevoittoon. Pyöristys ei ole koskaan liikevaihtoa."
        ]
      },
      {
        "type": "note",
        "text": "Sveitsi pyöristää aina alas hintojen esittämissääntöjensä mukaan – CHF 12.98 otetaan summana CHF 12.95, eikä puolivälin valintaa ole. Belgia pyöristää vain summat, jotka ovat yli €0.05. Käteisen pyöristys kuuluu kaikkiin paketteihin, ja olemassa oleva myymälä ottaa käteisen vastaan täsmälleen kuten ennenkin, kunnes otat pyöristyksen käyttöön."
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
    "question": "Voiko maksun jälkeisen \"Ding\"-äänen poistaa käytöstä?",
    "keywords": [
      "ääni",
      "ding",
      "mykistä",
      "hiljainen",
      "maksuääni",
      "äänetön"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Avaa Asetukset → Laitteen asetukset ja poista Maksuääni käytöstä. Seuraavasta myynnistä alkaen onnistumisnäkymä pysyy hiljaisena, mutta haptinen palaute säilyy."
      },
      {
        "type": "p",
        "text": "Asetus koskee vain tätä iPadia, eikä pilvivarmuuskopion palauttaminen muuta sitä."
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
    "question": "Voiko kassanäkymästä piilottaa loppuunmyydyt tuotteet?",
    "keywords": [
      "piilota",
      "loppuunmyydyt tuotteet",
      "loppu varastosta",
      "kassanhoitaja",
      "tuote ei näy",
      "tuotetta ei löydy"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Avaa Asetukset → Laitteen asetukset ja kytke päälle Piilota loppuunmyydyt tuotteet (oletuksena pois päältä). Kassan tuoteruudukko, luokkasuodatin ja haku (nimi ja viivakoodi) ohittavat silloin kaikki tuotteet, joiden varastosaldo on 0 tai alle. Kytkin tulee voimaan heti, eikä sovellusta tarvitse avata uudelleen."
      },
      {
        "type": "list",
        "items": [
          "Tuotteet, joiden varastoa ei seurata, näkyvät aina. Variantillinen tuote piilotetaan vain, kun kaikki sen variantit on myyty loppuun.",
          "Se vaikuttaa vain tämän iPadin kassaan; Tuotteet-luettelo näyttää edelleen kaikki tuotteet.",
          "Kun kaikki tuotteet on piilotettu, kassa näyttää viestin ”Kaikki tuotteet ovat loppuunmyytyjä” ja kertoo, mistä kytkimen saa pois päältä."
        ]
      },
      {
        "type": "note",
        "text": "Kun kytkin on päällä, tämä iPad ei löydä loppuunmyytyjä tuotteita, joten se ei voi myydä negatiiviseen varastosaldoon eikä ottaa niistä ennakkotilausta – kytke se pois, kun tarvitset niitä. Jos tuotteet näyttävät kadonneen kassalta, syy on yleensä tämä kytkin."
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
    "question": "Päivittyykö ostoskori, jos muutan tuotteen hintaa?",
    "keywords": [
      "hinnanmuutos",
      "hinnan muuttaminen",
      "ostoskori",
      "uudelleenlaskenta",
      "hinta päivittyy"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ostoskori näyttää hinnan sellaisena kuin se oli tuotetta lisättäessä. Kun napautat maksun vahvistusta, DingPOS hakee jokaisen tuotteen uusimman hinnan – jos jokin on muuttunut, näet ilmoituksen päivitetyistä hinnoista ennen jatkamista."
      },
      {
        "type": "p",
        "text": "Myös kampanjat arvioidaan vahvistuksen yhteydessä alusta alkaen. Jos loppusumma, vero tai jokin alennuksen määrä muuttuu sen seurauksena, näytetään yhteenveto muutoksista ja sinun on vahvistettava uudelleen – näin näkemäsi summa on täsmälleen kirjattava summa."
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
    "question": "Voiko käsin annettuja alennuksia ja kampanjoita käyttää yhdessä?",
    "keywords": [
      "käsin annettu alennus",
      "kampanja",
      "yhdistäminen",
      "ohittaminen",
      "alennus ja kampanja"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Sääntö on \"käsin annettu voittaa, tasot pysyvät erillisinä\":"
      },
      {
        "type": "list",
        "items": [
          "Käsin annettu tuotealennus: kyseinen rivi ei enää saa tuotetason kampanjoita – käsin antamasi alennus katsotaan lopulliseksi paikan päällä tehdyksi päätökseksi. Rivin summa lasketaan silti mukaan ostosummaan perustuviin rajoihin.",
          "Käsin annettu ostoskorin alennus: se lasketaan sen jälkeen, kun kaikki kampanjat on laskettu, joten ne toimivat rinnakkain. Jos syötät enemmän kuin jäljellä oleva loppusumma, alennus rajataan automaattisesti ja siitä näytetään ilmoitus."
        ]
      },
      {
        "type": "p",
        "text": "Kun poistat käsin annetun alennuksen, rivi on taas oikeutettu kampanjoihin seuraavassa arvioinnissa."
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
    "question": "Miten lisään tai vaihdan myyntiin liitetyn asiakkaan?",
    "keywords": [
      "asiakas",
      "jäsen",
      "liitä asiakas",
      "vaihda asiakasta",
      "uusi asiakas",
      "kassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Liitä asiakas ostoskorissa tai kassanäkymässä: summan alla oleva Asiakas-rivi avaa asiakasluettelon, kun ketään ei ole liitetty, ja tarjoaa vaihtoehdot Vaihda asiakasta ja Poista asiakas, kun joku on liitetty. Kassalla valittu asiakas on ostoskorin asiakas ja pysyy ostoskorissa, vaikka peruutat maksamisen."
      },
      {
        "type": "list",
        "items": [
          "Asiakkaan vaihtaminen laskee tasoalennukset, syntymäpäivätarjoukset ja pisteiden lunastuksen heti uudelleen. Jo syöttämäsi käteissumma tai etumaksu säilyy, ja se tarkistetaan uutta loppusummaa vasten.",
          "Etkö löydä häntä? Napauta Uusi asiakas asiakasluettelon oikeasta yläkulmasta tai keskeltä, kun haullasi ei löydy ketään. Hakusanasi täyttyy lomakkeeseen – numerot menevät puhelinnumeroksi, kaikki muu nimeksi – ja uusi asiakas liitetään myyntiin.",
          "Kun napautat Laskulle ilman liitettyä asiakasta, asiakasluettelo avautuu, ja Laskulle valitaan heti, kun olet valinnut jonkun.",
          "Jos uusi asiakas nostaa käsin annetun alennuksen vuorossa olevan työntekijän alennusrajan yli, esihenkilön on ensin hyväksyttävä se; jos peruutat hyväksynnän, asiakas pysyy ennallaan."
        ]
      },
      {
        "type": "note",
        "text": "Asiakkaat kuuluvat Standard-pakettiin; Lite-paketissa rivillä lukee ”Asiakkaat – Standard-paketti” ja se avaa tiedot päivityksestä. Kassan Asiakas-rivi tuli versiossa 3.4; aiemmissa versioissa asiakas liitetään vain ostoskorissa."
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
    "question": "Tein kassalla virheen – miten mitätöin tilauksen?",
    "keywords": [
      "mitätöinti",
      "mitätöi tilaus",
      "peruutus",
      "virhe kassalla",
      "väärä tilaus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Tilaukset, etsi tilaus, avaa sen tiedot ja napauta Mitätöi. ”Mitätöidäänkö tämä tilaus?” -näkymässä voit kirjoittaa vapaaehtoisen syyn (enintään 100 merkkiä); napauta näkymän oikeasta yläkulmasta Mitätöi, niin asia on hoidettu. Syy näkyy tilauksen tiedoissa ja toimintolokissa, eikä sitä voi muokata lähettämisen jälkeen."
      },
      {
        "type": "p",
        "text": "Mitätöinti kumoaa automaattisesti kaiken siihen liittyvän: seurattu varasto palautuu, tilauksesta kertyneet pisteet vähennetään ja käytetyt pisteet palautetaan. Mitätöidyt tilaukset pysyvät listassa selvästi merkittyinä, eikä niitä lasketa raporttien liikevaihtoon."
      },
      {
        "type": "note",
        "text": "Mitätöinti tarkoittaa, että ”tätä myyntiä ei koskaan tapahtunut”. Käytä sitä, kun tilaus on kirjattu väärin heti kassalla. Jos asiakas tuo tavaran takaisin myöhemmin, käytä Palautus-toimintoa: alkuperäinen tilaus säilyy, voit palauttaa vain osan tuotteista, ja liikevaihto pienenee palautuspäivänä."
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
    "question": "Miten käsittelen palautuksen tai tuotteen vaihdon?",
    "keywords": [
      "palautus",
      "vaihto",
      "tuotteen vaihto",
      "hyvitys",
      "osittainen palautus",
      "koon vaihto",
      "romutus",
      "palautuksen syy"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Tilaukset, avaa alkuperäinen tilaus ja napauta Palautus. Valitse, kuinka monta kappaletta kutakin tuotetta palautetaan. Vaihdossa napauta samalla näytöllä Lisää korvaava tuote. Erotus tilitetään kerralla: positiivinen tarkoittaa, että asiakas maksaa, negatiivinen että palautat rahaa, ja nolla tarkoittaa, ettei raha vaihda omistajaa."
      },
      {
        "type": "list",
        "items": [
          "Alkuperäistä tilausta ei koskaan muuteta. Palautuksesta syntyy oma asiakirja, jonka päivämäärä on tämä päivä ja jonka numerossa on R-etuliite. Liikevaihto pienenee palautuspäivänä.",
          "Hyvitys on se summa, jonka asiakas todella maksoi kyseisestä tuotteesta: tuotealennukset, ostoskorin alennukset ja pisteillä maksettu osuus on jo huomioitu, joten hyvitystä ei makseta listahinnalla. Veroon käytetään sitä verokantaa, jolla alkuperäinen tilaus veloitettiin.",
          "Korvaavat tuotteet veloitetaan päivän hinnalla ilman kampanjoita tai alennuksia.",
          "Varastoseurannassa olevan tuotteen jokainen palautettu rivi voi palata varastoon (Varastoon, oletus) tai se voidaan hävittää (Romuta, versiosta 3.5 alkaen). Jos valitset Varastoon, tuote lisätään takaisin varastosaldoon. Romuta jättää varaston ennalleen ja laskee tuotteen myyntihetken omakustannuksen mukaan kuukauden varastotappioon Tulos-välilehdellä. Hyvitys, vero ja pisteet ovat kummassakin tapauksessa samat.",
          "Alkuperäisestä tilauksesta kertyneet pisteet vähennetään, käytetyt pisteet palautetaan, ja korvaavat tuotteet kerryttävät omat pisteensä.",
          "Jos alkuperäinen tilaus on kuittaamaton laskulle myynti, rahaa ei liiku: palautus vähennetään asiakkaan myyntisaamisista, ja kalliimpi korvaava tuote lisää erotuksen niihin.",
          "Tilauksen voi palauttaa useassa erässä, mutta ei koskaan enempää kuin alun perin myytiin. Kun kaikki on palautettu, palautetut verot, alennukset ja pisteet vastaavat yhteensä täsmälleen alkuperäistä tilausta. Palautus ei palauta kampanjoiden käyttörajoja."
        ]
      },
      {
        "type": "p",
        "text": "Syy-kenttä on vapaaehtoinen, enintään 100 merkkiä. Se näkyy tilauksen tiedoissa ja toimintolokissa, eikä sitä voi muokata lähettämisen jälkeen."
      },
      {
        "type": "note",
        "text": "Palautuksille ei ole aikarajaa, mutta alkuperäinen tilaus tarvitaan. Jos palautus on kirjattu vahingossa, mitätöi palautus, niin palautettavissa oleva määrä palautuu."
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
    "question": "Miten otan ennakkotilauksen etumaksulla?",
    "keywords": [
      "ennakkotilaus",
      "etumaksu",
      "nouto",
      "loppusumma",
      "varaus",
      "tilaus etumaksulla"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vaihda kassalla näytön yläreunasta Myynti-välilehden tilalle Ennakkotilaus, valitse noutopäivä, syötä etumaksu (mikä tahansa summa nollasta koko summaan, pikavalinnat 30 % / 50 % / koko summa) ja valitse, miten etumaksu maksetaan. Liitä tilaukseen asiakas, jotta voit ottaa häneen yhteyttä noudosta."
      },
      {
        "type": "list",
        "items": [
          "Varastosta vähennetään heti, kun ennakkotilaus tehdään, joten myytävissä oleva määrä päivittyy heti. Se on merkki, ei varaus: myöhempi myynti voi silti viedä viimeisen kappaleen. Loppuun myydyt tuotteet menevät negatiivisiksi ja palautuvat, kun ostotilaus vastaanotetaan.",
          "Kun asiakas noutaa tilauksen, napauta tilauksen tiedoissa Luovuta ja ota loppusumma vastaan. Tilauksesta tulee tavallinen valmis myynti, ja myöhemmät palautukset hoidetaan normaalisti palautuksen kautta.",
          "Jos asiakas ei koskaan tule, napauta tilauksen tiedoissa Peruuta tilaus ja valitse, palautatko etumaksun vai pidätkö sen. Tavara lisätään takaisin varastoon.",
          "Etumaksukuitilla ja lopullisella noutokuitilla on sama numero."
        ]
      },
      {
        "type": "p",
        "text": "Tilastot-välilehdellä ennakkotilauksen liikevaihto kirjataan kokonaisuudessaan noutopäivälle, kun taas etumaksu lasketaan mukaan saapuneisiin maksuihin maksupäivänä – siksi nämä kaksi lukua eroavat toisistaan jonkin aikaa. Katso ”Mitä eroa on liikevaihdolla ja saapuneella maksulla?”"
      },
      {
        "type": "note",
        "text": "Ennakkotilauksen tuotteita ei voi muokata. Jos asiakas muuttaa mielensä, peruuta tilaus ja tee uusi ennakkotilaus. Ennakkotilausten luominen vaatii Standard-paketin tai sitä ylemmän. Paketin alentamisen jälkeenkin olemassa olevat ennakkotilaukset voi edelleen noutaa tai peruuttaa."
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
    "question": "Voiko vakioasiakas ostaa laskulle ja maksaa myöhemmin?",
    "keywords": [
      "laskulle",
      "lasku",
      "luotto",
      "maksu myöhemmin",
      "myyntisaamiset",
      "maksun kuittaus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Valitse maksutavaksi Laskulle, niin myynti kirjataan asiakkaan velaksi. Velka on liitettävä asiakkaaseen, joten jos asiakasta ei ole liitetty, Laskulle-painikkeen napautus avaa ensin asiakasluettelon (versiosta 3.4 alkaen; aiemmissa versioissa asiakas pitää liittää ostoskorissa)."
      },
      {
        "type": "p",
        "text": "Maksun perimistä varten vaihda Tilaukset-näkymän yläreunasta Myyntisaamiset. Velat on ryhmitelty asiakkaittain. Avaa asiakas ja kuittaa yksi tilaus, kokonainen kuukausi tai kaikki – DingPOS kysyy joka kerta, miten raha maksettiin. Yksittäisen tilauksen voi kuitata myös sen tiedoista, ja vahingossa tehdyn kuittauksen voi perua toiminnolla Peruuta kuittaus."
      },
      {
        "type": "list",
        "items": [
          "Liikevaihto kirjataan sinä päivänä, kun tavara lähtee; saapunut maksu ja kanta-asiakaspisteet odottavat kuittauspäivään.",
          "Kuittaamattomissa tilauksissa on listassa oranssi merkki, ja asiakkaan tiedoissa näkyy, paljonko hän on tällä hetkellä velkaa.",
          "Kuittaamattoman tilauksen palautus ei palauta rahaa: summa vähennetään kyseisen asiakkaan myyntisaamisista.",
          "Asiakasta, jolla on kuittaamattomia tilauksia, ei voi poistaa."
        ]
      },
      {
        "type": "note",
        "text": "Laskulle myynnin luominen vaatii Standard-paketin tai sitä ylemmän. Paketin alentamisen jälkeen uusia ei voi aloittaa, mutta olemassa olevia myyntisaamisia voi edelleen katsoa ja kuitata."
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
    "question": "Voinko lisätä muistiinpanoja tilauksiin, asiakkaisiin tai ostotilauksiin?",
    "keywords": [
      "muistiinpano",
      "muistiinpanot",
      "muistio",
      "kommentti",
      "huomautus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Tilauksen, asiakkaan ja ostotilauksen tietosivuilla on kullakin muistiinpanokortti – muokkaa napauttamalla korttia (enintään 500 merkkiä) tai, kun muistiinpanoja ei vielä ole, yksittäistä riviä ”Lisää muistiinpano”. Muistiinpanon voi kirjoittaa myös lomakkeeseen, kun luot asiakkaan tai ostotilauksen."
      },
      {
        "type": "p",
        "text": "Muistiinpanot eivät riipu tilasta: valmiisiin ja mitätöityihin tilauksiin sekä palautuksiin voi lisätä ja muokata muistiinpanoja. Tilauksen summat ja tuotteet lukitaan kassalla; muistiinpano on asiakirjan rinnalla eikä koskaan muuta sen sisältöä."
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
    "question": "Miten luon tuotteita, joilla on variantteja (koko, väri)?",
    "keywords": [
      "variantit",
      "koko",
      "väri",
      "vaihtoehdot",
      "tuotevariantti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Napauta tuotteen muokkaussivulla kohdassa Variantin vaihtoehdot painiketta Lisää vaihtoehto ja anna vaihtoehdon nimi (esim. ”Väri”). Lisää sitten jokainen valinta painikkeella ”+ Arvo” (esim. punainen, sininen). Kun vaihtoehtoja on kaksi tai useampi (esim. väri × koko), DingPOS muodostaa kaikki yhdistelmät puolestasi (punainen/S, punainen/M, sininen/S…)."
      },
      {
        "type": "p",
        "text": "Kun tuotteella on variantteja, jokainen yhdistelmä kohdassa Varianttien hinnat ja varasto pitää oman varastosaldonsa, ja sen hinta seuraa tuotteen Hintaa: yhdistelmä, jolle ei ole annettu omaa hintaa, näyttää tuotteen hinnan harmaana ja muuttuu sen mukana, ja kirjoittamasi luku on kyseisen yhdistelmän erillinen hinta, joka näkyy mustana. Aseta esimerkiksi T-paidan Hinnaksi 390 ja muuta vain L:n hinnaksi 350: M ja XL myydään hintaan 390, ja kun Hinta myöhemmin muuttuu 420:ksi, M ja XL siirtyvät myös hintaan 420, mutta L pysyy hinnassa 350. Hinta-sarakkeen vieressä oleva ⓘ sisältää toiminnon Käytä tuotteen hintaa, joka asettaa kaikki yhdistelmät takaisin seuraamaan tuotteen hintaa. Ennen versiota 3.6 luodut tuotteet säilyttävät jokaisen variantin hinnan kyseisen yhdistelmän erillisenä hintana, ja tuotteen Hinta on näistä alin. Kassa, tuoteluettelo ja tuotteen tiedot näyttävät hintahaarukan halvimmasta kalleimpaan, esim. ”NT$350–NT$390”, tai yhden hinnan, jos kaikki yhdistelmät maksavat saman; hintajärjestys käyttää halvimman yhdistelmän hintaa. Kassalla tuotteen napauttaminen avaa variantin valinnan ennen kuin tuote lisätään ostoskoriin."
      },
      {
        "type": "p",
        "text": "Omakustannus toimii samalla tavalla: tyhjä omakustannus näyttää tuotteen omakustannuksen harmaana ja muuttuu sen mukana, ja luku on yhdistelmän erillinen omakustannus, joka näkyy mustana – myös 0. Omakust.-sarakkeen vieressä olevan ⓘ:n Käytä tuotteen omakustannusta tyhjentää kaikkien yhdistelmien erilliset omakustannukset kerralla."
      },
      {
        "type": "note",
        "text": "Vaihtoehdon ja arvon nimi saa olla enintään 20 merkkiä pitkä, ja nimen alusta ja lopusta poistetaan välilyönnit tallennettaessa. Arvoa, johon et ole kirjoittanut mitään, ei lasketa yhdistelmäksi, vaan se ohitetaan tallennettaessa. Tallennus keskeytyy, ja kenttä korostuu punaisella, kun vaihtoehdon nimi on tyhjä, kun kaikki vaihtoehdon arvot ovat tyhjiä tai kun tyhjennät arvon, jonka tuote on jo tallennettuna; kirjoita se takaisin tai poista se napauttamalla sen ×-painiketta. Tuotteella, jolla on variantteja, ei voi käyttää avohintaa."
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
    "question": "Voinko syöttää tuotteen hinnan kassalla, esimerkiksi toimitusmaksun tai sovitun hinnan?",
    "keywords": [
      "avohinta",
      "oma hinta",
      "syötä hinta",
      "toimitusmaksu",
      "palvelumaksu",
      "sovittu hinta",
      "torihinta",
      "prosenttimaksu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä – tee siitä avohintainen tuote. Kytke tuotteen muokkaussivulla Avohinta päälle ja jätä hinta tyhjäksi; kassa ja tuoteluettelo näyttävät hinnan paikalla tekstin ”Avohinta”. Kassalla tuotteen napauttaminen kysyy ensin hinnan; syötä se ja napauta Lisää koriin, niin tuote lisätään kyseisellä hinnalla."
      },
      {
        "type": "list",
        "items": [
          "0 on kelvollinen hinta (esim. ilmainen toimitus); tyhjää kenttää ei voi lisätä. Syötä hinta samalla tavalla kuin kaupassasi muutkin hinnat verotilan mukaan.",
          "Ostoskorissa on yksi rivi avohintaista tuotetta kohden: sen napauttaminen uudelleen avaa rivin, jotta voit muuttaa hintaa.",
          "Versiosta 3.3 alkaen Veloitustapa-valinnalla voi vaihtaa Summan ja Prosentin välillä. Kun prosentti on 5 %, rivin hinta on 5 % muiden tuotteiden välisummasta (tuotekohtaisten alennusten jälkeen, mutta ennen kampanjoita, ostoskorin alennusta ja pisteiden käyttöä), pyöristettynä valuutan desimaalien tarkkuuteen puolikkaat ylöspäin, ja se seuraa ostoskoria, kun tuotteita lisätään, poistetaan tai alennetaan. Ostoskorin rivillä lukee ”5 % ostoskorista”, ja tilaukseen tallentuu syntynyt summa.",
          "Avohintaiselle riville ei voi antaa tuotealennusta; jos haluat veloittaa vähemmän, muuta sen hintaa. Ostoskorin alennukset, pisteiden käyttö ja kampanjat (ellei riviä ole suljettu niiden ulkopuolelle) koskevat sitä edelleen.",
          "Avohinnan kytkeminen päälle kytkee päälle myös asetuksen Sulje pois kampanjoista, jolloin maksua ei alenneta eikä se lasketa ostosrajaan. Kytke se takaisin pois, jos sovitun hinnan tuotteen pitäisi osallistua kampanjoihin.",
          "Kun rivi on myyty, siihen lasketaan vero, se kerryttää pisteitä ja näkyy Tilastoissa kuten muutkin rivit, ja palautuksessa palautetaan syötetty hinta.",
          "Tuotteella, jolla on variantteja, ei voi käyttää avohintaa. Avohintaisia tuotteita ei koskaan tarjota lahjoina tai maksullisina lisätuotteina, eivätkä ne näy vaihdon korvaavien tuotteiden luettelossa."
        ]
      },
      {
        "type": "note",
        "text": "Se on käytössä jokaisessa paketissa, eikä hinnan syöttäminen koskaan vaadi esihenkilön hyväksyntää."
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
    "question": "Miten viivakoodit toimivat?",
    "keywords": [
      "viivakoodi",
      "skannaus",
      "viivakoodinlukija",
      "kaksoiskappale",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tuotteen viivakoodin voi kirjoittaa käsin tai skannata kameralla. Viivakoodin on oltava yksilöllinen: jos se on jo toisella tuotteella tallennettaessa, DingPOS näyttää, mille tuotteelle se kuuluu."
      },
      {
        "type": "p",
        "text": "Kassalla hakukenttä etsii sekä tuotenimiä että viivakoodien alkuosia, joten kirjoittamalla viivakoodin saat tuotteen heti esiin. Jos haluat tietää ulkoisista viivakoodinlukijoista, lue ”Tuetaanko fyysisiä viivakoodinlukijoita?”"
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
    "question": "Miten muutan tuotteiden järjestystä?",
    "keywords": [
      "lajittelu",
      "järjestys",
      "järjestä uudelleen",
      "vedä",
      "kiinnitä ylös"
    ],
    "content": [
      {
        "type": "p",
        "text": "Napauta Tuotteet-näkymässä Muokkaa järjestystä ja vedä tuotekortit haluamiisi paikkoihin. Kassa ja tuotehallinta käyttävät samaa järjestystä, joten kerralla tehty muutos päivittää molemmat."
      },
      {
        "type": "list",
        "items": [
          "Jos valikoima on suuri, jokaisen kortin valikosta löytyvät Siirrä alkuun, Siirrä loppuun ja Siirrä kohtaan, ja jokaisessa kortissa näkyy sen nykyinen kohta.",
          "Suodata ensin luokan mukaan, jos haluat järjestää uudelleen vain kyseisen luokan sisällä – muiden luokkien tuotteet pysyvät paikoillaan.",
          "Uudet tuotteet tulevat alkuun, ja tuotteen tietojen muokkaaminen ei koskaan muuta sen paikkaa."
        ]
      },
      {
        "type": "p",
        "text": "Jos haluat hetkeksi lajitella nimen, hinnan tai luonti- tai päivitysajan mukaan, käytä Lajitteluperuste-valikkoa. Oma järjestyksesi säilyy, ja kun vaihdat takaisin kohtaan Oma järjestys, se palaa."
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
    "question": "Miten seuraan varastosaldoa?",
    "keywords": [
      "varasto",
      "varastosaldo",
      "varastonseuranta",
      "inventaario",
      "vähissä oleva varasto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Varastonseuranta otetaan käyttöön tuotekohtaisella kytkimellä: kytke se päälle tuotteen muokkaussivulla ja syötä nykyinen määrä. Tuotteen jokaisen variantin varastosaldoa seurataan erikseen."
      },
      {
        "type": "p",
        "text": "Kun seuranta on päällä, myynnit ja ennakkotilaukset vähentävät varastoa automaattisesti. Mitätöinnit, palautukset ja peruutetut ennakkotilaukset palauttavat sen, ja ostotilauksen vastaanotto lisää sitä. Jokainen muutos kirjataan täydelliseen lokiin. Kun varastoa on jäljellä enintään 10, varasto merkitään oranssilla vähissä olevaksi tuoteluettelossa, kassalla ja tuotteen tiedoissa."
      },
      {
        "type": "p",
        "text": "Lukua voi muuttaa käsin kahdella tavalla:"
      },
      {
        "type": "list",
        "items": [
          "Uudelleenlaskenta: muokkaa tuotelomakkeessa varastomäärää vastaamaan laskemaasi määrää. Se ei koskaan vaikuta tuloslaskelmaan.",
          "Muuta varastosaldoa (versiosta 3.5 alkaen): napauta tuotteen tiedoissa Muuta varastosaldoa, valitse Vähennä tai Lisää, määrä ja syy, esimerkiksi Vanh./pilaantunut, Vaurioitunut tai Näytteet ja lahjat. Varastosta vähennettyjen tuotteiden omakustannus lasketaan kyseisen kuukauden varastotappioon tuloslaskelmassa – katso ”Miten kirjaan varastosta vanhentuneet, rikkoutuneet tai näytteinä annetut tuotteet?”"
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
    "question": "Miten kirjaan varastosta vanhentuneet, rikkoutuneet tai näytteinä annetut tuotteet?",
    "keywords": [
      "varastomuutos",
      "varastotappio",
      "hävikki",
      "poistokirjaus",
      "tuotteen hävikki",
      "vanhentunut",
      "vaurioitunut",
      "näytteet",
      "liikkeen tarvikkeet",
      "uudelleenlaskenta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Käytä toimintoa Muuta varastosaldoa. Kun tuotteen varastoa seurataan, napauta tuotteen tiedoissa Muuta varastosaldoa, valitse Vähennä tai Lisää, aseta määrä painikkeilla + ja − (alkuarvo on 1; voit myös napauttaa lukua ja kirjoittaa sen), valitse syy ja halutessasi lisää muistiinpano (enintään 100 merkkiä). Näkymä laskee varastosaldon muutoksen jälkeen, ja syyn alla oleva rivi kertoo, lasketaanko muutos tuloslaskelmaan."
      },
      {
        "type": "list",
        "items": [
          "Vähennyksen syyt: Tuotantokäyttö, Vanh./pilaantunut, Vaurioitunut, Kadonnut/varastettu, Henkilökunnan käyttö, Näytteet ja lahjat, Liikkeen tarvikkeet ja Muu. Lisäyksen syyt: Oma valmistus, Löytynyt ja Muu. Muu vaatii muistiinpanon.",
          "Tuotantokäyttöä lukuun ottamatta vähennetyn määrän omakustannus kirjaushetkellä lasketaan kyseisen kuukauden varastotappioon tuloslaskelmassa. Se tulee myyntikatteen jälkeen ja pienentää liikevoittoa; myyntikate ja katemarginaali eivät muutu. Tuotantokäyttö vain vähentää varastosaldoa, koska materiaalin omakustannus sisältyy jo siitä valmistetun tuotteen omakustannukseen.",
          "Löytynyt vähentää saman summan varastotappiosta. Lisäyspuolen Oma valmistus ja Muu vain lisäävät varastoa eivätkä koskaan vaikuta tuloslaskelmaan.",
          "Varastomuutos lasketaan sille päivälle, jona kirjaat sen. Sitä ei voi päivätä taaksepäin, muokata tai poistaa; korjaa virhe kirjaamalla Löytynyt tai varastomuutos toiseen suuntaan.",
          "Tuotteelle, jolla ei ole omakustannetta, voi silti tehdä varastomuutoksen, mutta tuloslaskelma ei voi antaa sille summaa, ja kuukauden kohdalla näkyy, montako kirjausta oli ilman omakustannetta."
        ]
      },
      {
        "type": "p",
        "text": "Varastomäärän muokkaaminen tuotelomakkeessa on Uudelleenlaskenta: se vastaa laskemaasi määrää eikä koskaan vaikuta tuloslaskelmaan. Tilastot-välilehden varastoliikkeet suodattavat varastomuutokset ja uudelleenlaskennat erikseen, ja toimintoloki näyttää jokaisen varastomuutoksen syyn ja muistiinpanon."
      },
      {
        "type": "note",
        "text": "Muuta varastosaldoa vaatii Standard-paketin tai sitä korkeamman. Pro-paketissa työntekijöiltä, joiden roolilla oikeus Varaston käsinmuutos vaatii hyväksynnän, kysytään esihenkilön PIN-koodia vahvistettaessa."
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
    "question": "Miksi varastosaldo voi olla miinuksella?",
    "keywords": [
      "negatiivinen",
      "varastosaldo",
      "loppunut",
      "esto",
      "saldon korjaus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Se on tarkoituksellista: kassalla myyntiä ei koskaan estetä riittämättömän varastosaldon vuoksi. Myyntitilanteen ensimmäinen sääntö on, ettei asiakas jää odottamaan – väärän luvun voi korjata myöhemmin, mutta keskeytynyt myynti menetetään lopullisesti."
      },
      {
        "type": "p",
        "text": "Miinuksella oleva saldo tarkoittaa yleensä, ettei täydennystä ole kirjattu tai että ennakkotilattu tuote ei ole vielä saapunut (ennakkotilaukset vähentävät varastoa heti tehtäessä). Kirjaa täydennykset vastaanottamalla ostotilaus, niin saldo palautuu itsestään. Korjaa inventaarioero muokkaamalla varastomäärää tuotelomakkeessa (uudelleenlaskenta); rikkoutuneiden, vanhentuneiden tai lahjaksi annettujen tuotteiden syy kirjataan toiminnolla Muuta varastosaldoa. Molemmat tallentuvat varastoliikkeiden lokiin."
      },
      {
        "type": "note",
        "text": "Jos kassanhoitaja ei löydä tuotetta, jonka varastosaldo on 0, tarkista, onko kohdassa Asetukset → Laitteen asetukset päällä Piilota loppuunmyydyt tuotteet: kun se on päällä, tämä iPad ei voi lisätä loppuunmyytyjä tuotteita ostoskoriin."
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
    "question": "Miten kirjaan ostot ja toimittajat?",
    "keywords": [
      "ostotilaus",
      "ostot",
      "toimittaja",
      "vastaanotto",
      "täydennys",
      "ostovelat"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sivupalkin Ostot-kohdassa hallitaan toimittajia ja ostotilauksia. Toimittajalle tallennetaan nimi, yhteyshenkilö, puhelinnumero, osoite ja oletusmaksuehdot (Maksu vastaanotettaessa tai Kuukausilasku)."
      },
      {
        "type": "steps",
        "items": [
          "Napauta Uusi osto, valitse toimittaja ja lisää tuotteet, määrät ja yksikköhinnat (esitäytettynä kunkin tuotteen nykyisellä omakustannuksella). Myös toimituskulut voi lisätä. Jos tavara ei ole vielä tuotteena, napauta Lisää tuote -valitsimessa Uusi tuote; uusi tuote tulee suoraan ostotilaukseen rivinä. Jos toimittajaa ei ole vielä luotu, napauta toimittajaluettelon vasemmasta yläkulmasta Lisää toimittaja – uusi toimittaja palaa suoraan ostotilaukseen.",
          "Luonnos ei koskaan vaikuta varastoon tai ostovelkoihin, joten voit muokata tai poistaa sen vapaasti.",
          "Kun tavara saapuu, napauta Vastaanota tuotteet: seurattu varasto kasvaa, ja ostotilaus saa numeron ja lukittuu. Oletuksena vastaanotto päivittää myös kunkin tuotteen omakustannuksen tähän yksikköhintaan; poista ostotilauksesta käytöstä Päivitä tuotteen hankintahinta, jos haluat pitää omakustannukset ennallaan. Sen alapuolella oleva Sisällytä toimituskulut omakustannukseen (uusissa ostotilauksissa käytössä) jakaa toimituskulut riveille summien mukaan, joten kunkin tuotteen omakustannukseen kirjautuu sen osuus: jauho 10 × $30, voi 1 × $60 ja $25 toimituskulut antavat jauholle omakustannukseksi $32 ja voille $64."
        ]
      },
      {
        "type": "p",
        "text": "Maksuehdot ratkaisevat, mitä seuraavaksi tapahtuu: Maksu vastaanotettaessa -tilaukset merkitään maksetuiksi, kun taas Kuukausilasku-tilaukset jäävät maksamattomiksi kohtaan Maksamattomat laskut, jossa voit kuitata ne toimittajakohtaisesti – yksittäisen tilauksen, kuukauden tai kaiken kerralla."
      },
      {
        "type": "p",
        "text": "Myös raaka-aineita, joita et myy, kuten jauhoja tai pakkauksia, voi ostaa samalla tavalla: luo ne tuotteiksi, jotka eivät ole myynnissä – katso ”Voinko lisätä raaka-aineita, kuten jauhoja tai pakkauksia, tuotteina?”"
      },
      {
        "type": "note",
        "text": "Ostot vaativat Standard-paketin tai sitä korkeamman paketin. Toimittajaa, jolla on maksamattomia vastaanotettuja tilauksia, ei voi poistaa."
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
    "question": "Voinko lisätä raaka-aineita, kuten jauhoja tai pakkauksia, tuotteina?",
    "keywords": [
      "myynnin ulkopuolinen tuote",
      "raaka-aineet",
      "ainekset",
      "materiaalit",
      "pakkaukset",
      "tarvikkeet",
      "myy kassalla",
      "ostot",
      "omakustannus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Kytke tuotelomakkeessa kuvan alla oleva Myy kassalla pois päältä (oletuksena se on päällä), niin tuote on myynnin ulkopuolinen: sille ei tarvita hintaa, se säilyttää omakustannuksen, viivakoodin, varaston ja variantit, ja tuoteluettelossa hinnan paikalla lukee ”Ei myynnissä”."
      },
      {
        "type": "list",
        "items": [
          "Myynnin ulkopuolinen tuote ei koskaan näy kassan ruudukossa, luokissa, haussa tai viivakoodin luennassa, eikä se voi olla lahja, lisätuote, kampanjan kohde tai vaihdon korvaava tuote. Luokka, jossa on vain myynnin ulkopuolisia tuotteita, jätetään pois kassan luokkapalkista.",
          "Kun liikkeessäsi on myynnin ulkopuolisia tuotteita, Tuotteet-näkymän oikeaan yläkulmaan tulee suodatinpainike: valitse Kaikki tuotteet, Myynnissä tai Ei myynnissä, yhdessä haun ja luokkien kanssa.",
          "Ostotilaukset, vastaanotto, Päivitä tuotteen hankintahinta ja maksamattomat laskut toimivat täsmälleen kuten muillakin tuotteilla, joten materiaalin ostohinnan ja varaston voi kirjata kohdassa Ostot.",
          "Muiden tuotteiden myynti ei vähennä sen varastoa. Kun käytät sitä, kirjaa vähennys tuotteen tiedoissa toiminnolla Muuta varastosaldoa: Tuotantokäyttö tuotteisiin menneelle määrälle, Liikkeen tarvikkeet esimerkiksi paperipusseille tai siivousvälineille.",
          "Voit kytkeä sen takaisin myyntiin milloin tahansa, ja sen hinta ja verot ovat edelleen tallessa. Jo tehtyihin tilauksiin ja raportteihin tämä ei vaikuta."
        ]
      },
      {
        "type": "p",
        "text": "Miten sen omakustannus päätyy tuloslaskelmaan: ostot eivät vaikuta siihen suoraan. Laita omakustannus tuotteelle, joka siitä valmistetaan, niin se vähennetään, kun kyseinen tuote myydään. Tarvikkeet, jotka eivät kuulu minkään tuotteen omakustannukseen, kirjataan käytettäessä Liikkeen tarvikkeiksi, jos niiden varastoa seurataan, tai kertakuluksi, jos ei. Älä kirjaa samaa rahaa molemmilla tavoilla, sillä silloin se lasketaan kahteen kertaan."
      },
      {
        "type": "note",
        "text": "Myynnin ulkopuoliset tuotteet ovat käytössä kaikissa paketeissa; ostot, varastonseuranta ja Muuta varastosaldoa vaativat Standard-paketin tai sitä korkeamman."
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
    "question": "Mikä ero on liikevaihdolla ja saapuneella maksulla?",
    "keywords": [
      "liikevaihto",
      "saapunut maksu",
      "tilastot",
      "myyntikate",
      "liikevaihdosta myyntikatteeseen",
      "täsmäytys",
      "etumaksu",
      "laskulle myynti",
      "vero",
      "tulot"
    ],
    "content": [
      {
        "type": "p",
        "text": "Liikevaihto kirjautuu sille päivälle, jona tuotteet luovutettiin, kaikkien alennusten jälkeen ja ennen veroa; saapunut maksu kirjautuu sille päivälle, jona raha tuli, ja se on vastaanottamasi raha veroineen. Myymälässä, joka perii veroa, saapunut maksu on siksi liikevaihtoa suurempi veron verran, myös kassalla maksetuissa tilauksissa. Molemmat ovat Tilastot-välilehden ensimmäisen rivin kaksi ensimmäistä ruutua, ja niiden vieressä ovat Myyntikate, Tilaukset ja Tilauksen keskiarvo."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Tilastot-välilehden ruuturivit, joiden ensimmäisellä rivillä Liikevaihto ja Saapunut maksu ovat vierekkäin"
      },
      {
        "type": "h2",
        "text": "Kun liikevaihto ja saapunut maksu eroavat"
      },
      {
        "type": "p",
        "text": "Esimerkiksi kun myymälä, jonka hinnat sisältävät veron, myy tuotteen hintaan NT$1,050 (sisältää 5 %:n veron) ja asiakas maksaa kassalla, liikevaihto on NT$1,000 ja saapunut maksu NT$1,050. Veron lisäksi luvut eroavat toisistaan seuraavissa tilanteissa:"
      },
      {
        "type": "list",
        "items": [
          "Laskulle myynti: tuotteet lähtevät tänään ja kuuluvat tämän päivän liikevaihtoon. Raha kirjautuu saapuneeseen maksuun sinä päivänä, kun maksu kuitataan.",
          "Ennakkotilaus: etumaksu kirjautuu saapuneeseen maksuun maksupäivänä. Liikevaihto kirjataan kokonaisuudessaan noutopäivänä.",
          "Menetetyt etumaksut: kun asiakas peruu ennakkotilauksen ja etumaksu jää sinulle, se on jo laskettu saapuneeseen maksuun maksupäivänä. Tilastot näyttää sen erikseen kohdassa Menetetyt etumaksut, eikä se koskaan kuulu liikevaihtoon.",
          "Aiemman tilauksen mitätöinti: palautettu raha kirjautuu saapuneeseen maksuun mitätöintipäivänä, joten sen päivän saapunut maksu voi olla negatiivinen. Mitätöity tilaus itse lasketaan sen myyntipäivälle, ja se näkyy Tilaukset-ruudun alarivillä.",
          "Käteisen pyöristys: summa, jonka käteisen pyöristys lisää tilauksen loppusummaan tai vähentää siitä, kirjautuu saapuneeseen maksuun, ei koskaan liikevaihtoon."
        ]
      },
      {
        "type": "p",
        "text": "Kun jompikumpi summa ei ole nolla, Saapunut maksu -ruudun alarivillä näkyy Käteisen pyöristys tai Menetetyt etumaksut."
      },
      {
        "type": "h2",
        "text": "Vero ja ruutujen tiedot"
      },
      {
        "type": "p",
        "text": "Veron, joka erottaa liikevaihdon ja saapuneen maksun toisistaan, näet kohdasta Liikevaihdosta myyntikatteeseen, joka aukeaa Myyntikate-ruudun alareunasta. Siinä ovat rivit Liikevaihto (sis. vero), Vero ja Liikevaihto (ilman veroa). Australian, Ison-Britannian, Uuden-Seelannin ja Singaporen myymälät näkevät siinä paikallisen veron nimen, esimerkiksi Liikevaihto (sis. GST), GST ja Liikevaihto (ei sis. GST)."
      },
      {
        "type": "p",
        "text": "Jos haluat nähdä ilmoitusta varten kerätyn veron, avaa Veroraportti Vero-ruudusta."
      },
      {
        "type": "p",
        "text": "Liikevaihto-, Saapunut maksu- ja Tilaukset-ruudun ⓘ-kuvake selittää nämä säännöt sovelluksessa, myös Tilaukset-ruudun alarivillä luetellut mitätöidyt tilaukset."
      },
      {
        "type": "h2",
        "text": "Täsmäytys ja myynnin lukeminen"
      },
      {
        "type": "p",
        "text": "Täsmäytä saapunut maksu kassalaatikkoon ja korttipäätteeseen. Tilastot-välilehden Maksutavat-kortti näyttää yhden rivin kutakin maksutapaa kohti, ja ennen maksutavan nimen vaihtamista tehdyt myynnit lasketaan uuden nimen alle. Jos haluat nähdä, paljonko myit jaksolla, katso liikevaihtoa. Palautukset vähentävät liikevaihtoa palautuspäivältä."
      },
      {
        "type": "note",
        "text": "Veroton liikevaihto tuli versiossa 3.5, ja aiemmat jaksot laskettiin uudelleen samalla tavalla, joten myymälässä, joka perii veroa, liikevaihto on päivityksen jälkeen aiempaa pienempi. Kyse on korjauksesta: aiemmat versiot sisälsivät veron liikevaihtoon, ja myymälöissä, joissa hinnat ilmoitetaan ilman veroa, myös kerätty myyntivero laskettiin liikevaihdoksi."
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
    "question": "Mitä jaksoja raporteissa voi katsoa?",
    "keywords": [
      "tilastot",
      "raportit",
      "raportin jakso",
      "tämä viikko",
      "tämä kuukausi",
      "tämä vuosi",
      "mukautettu jakso",
      "myydyimmät tuotteet",
      "vertaa jaksoja"
    ],
    "content": [
      {
        "type": "p",
        "text": "Valitse Tilastot-välilehden yläreunan jaksopalkista Tänään, Eilen, Tämä viikko, Tämä kuukausi, Tämä vuosi tai Koko aika, tai napauta Mukautettu ja valitse mikä tahansa alku- ja loppupäivä. Sivun jokainen kortti seuraa valitsemaasi jaksoa. Tämä viikko noudattaa laitteesi viikon ensimmäistä päivää, Tämä kuukausi alkaa 1. päivästä, Tämä vuosi alkaa 1. tammikuuta ja Koko aika alkaa myymälän ensimmäisestä tapahtumasta, ja jokainen vaihtoehto näyttää kattamansa päivämäärät."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Tilastot-välilehden jaksopalkki, jossa Mukautettu on valittuna ja sen päivämäärävalitsin on auki alku- ja loppupäivän valintaa varten"
      },
      {
        "type": "h2",
        "text": "Mukautetun jakson valitseminen"
      },
      {
        "type": "p",
        "text": "Käytä Mukautettu-vaihtoehtoa, kun tarvitset jakson, jota ei ole valmiina kalenterijaksoissa, esimerkiksi kahden kuukauden tai neljänneksen mittaista veroilmoitusjaksoa."
      },
      {
        "type": "steps",
        "items": [
          "Avaa Tilastot ja napauta jaksopalkista Mukautettu.",
          "Valitse alku- ja loppupäivä ponnahdusikkunasta.",
          "Vahvista päivämäärät, niin raportti päivittyy."
        ]
      },
      {
        "type": "p",
        "text": "Vero-ruutu ja veroraportti seuraavat myös valittua jaksoa, joten ilmoitusjakson asettaminen Mukautettu-vaihtoehdolla päivittää molemmat; lisätietoja on veroraporttia käsittelevässä artikkelissa. Jaksopalkin oikeassa reunassa Vertaa-painike näyttää valitun jakson sitä edeltävän jakson tai viime vuoden vastaavan jakson rinnalla; lisätietoja on laajennettuja raportteja käsittelevässä artikkelissa."
      },
      {
        "type": "h2",
        "text": "Ruudut ja kortit sivulla"
      },
      {
        "type": "p",
        "text": "Jaksopalkin alla Tilastot näyttää kaksi riviä lukuruutuja ja sen jälkeen kaavioita ja yhteenvetokortteja pareittain, ja alimpana on Nykytilanne."
      },
      {
        "type": "list",
        "items": [
          "Ensimmäinen ruuturivi: Liikevaihto, Saapunut maksu, Myyntikate, Tilaukset ja Tilauksen keskiarvo.",
          "Toinen ruuturivi: Alennukset yhteensä, Vero, Liikevoitto, Tuotteet ilman omakustannetta ja Palvellut asiakkaat.",
          "Ensimmäinen pari: myynnin kehityskaavio ja Omakustannus ja myyntikate.",
          "Toinen pari: Tuotteiden paremmuusjärjestys ja Osuus luokittain.",
          "Kolmas pari: Maksutavat ja kampanjakortti.",
          "Alin kortti: Nykytilanne."
        ]
      },
      {
        "type": "p",
        "text": "Kaksi toisen rivin ruutua näkyy vain tietyissä tapauksissa. Versiossa 3.6 lisätty Vero näkyy vain myymälässä, jolla on veroja, tai kun valitulla jaksolla on myyntejä, jotka on tehty jonkin veron alaisena. Liikevoitto näkyy vain, kun jakso on Tämä kuukausi tai kattaa täsmälleen yhden kokonaisen kuukauden."
      },
      {
        "type": "note",
        "text": "Jos jaksolla ei ole tilauksia, Tilastot näyttää vain jaksopalkin, viestin ja Nykytilanteen."
      },
      {
        "type": "h2",
        "text": "Kaavioiden ja Tuotteiden paremmuusjärjestyksen lukeminen"
      },
      {
        "type": "p",
        "text": "Myynnin kehityskaavion oikean yläkulman valikko vaihtaa kaavion näyttämään liikevaihdon, tilaukset, tilauksen keskiarvon tai palvellut asiakkaat. Kaaviossa on myös vaihtaja Kehitys ja Viikonpäivä × tunti; tästä näkymästä kerrotaan laajennettuja raportteja käsittelevässä artikkelissa. Sen vieressä Omakustannus ja myyntikate -kaavio pinoaa kunkin jakson tuotteiden omakustannuksen ja myyntikatteen yhteen pylvääseen. Yksittäinen päivä esitetään tunneittain; pidemmillä jaksoilla tiedot ryhmitellään päiviin, viikkoihin, kuukausiin tai vuosiin jakson pituuden mukaan."
      },
      {
        "type": "p",
        "text": "Paina pitkään myynnin kehityskaaviota, Omakustannus ja myyntikate -kaaviota tai Maksutavat-korttia, niin näet yhden jakson lukemakortin. Kun Vertaa on päällä, kehityskaavion lukemakortti näyttää tämän jakson luvun ja vertailujakson luvun rinnakkain. Siirry vetämällä vasemmalle tai oikealle; jos pyyhkäiset kaaviota ylös tai alas, sivu vierii tavalliseen tapaan."
      },
      {
        "type": "p",
        "text": "Tuotteiden paremmuusjärjestys -kortti listaa valitun jakson viisi parasta tuotetta. Napauta korttia tai Näytä kaikki, niin näet kaikki jaksolla myydyt tuotteet myydyn määrän mukaan järjestettynä palautusten jälkeen. Tuotteella, jolla on variantteja, on yksi rivi kutakin varianttia kohti."
      },
      {
        "type": "note",
        "text": "Kalenterijaksot tulivat versiossa 2.4; aiemmissa versioissa oli liukuvia jaksoja (Tänään / 7 päivää / 30 päivää / Koko aika). Jos näet vielä ne, päivitä DingPOS App Storesta."
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
    "question": "Mitä laajennetut raportit näyttävät?",
    "keywords": [
      "laajennetut raportit",
      "tilastot",
      "vertaa",
      "jaksojen vertailu",
      "viikonpäivä × tunti",
      "lämpökartta",
      "hitaasti liikkuvat tuotteet",
      "muutokset",
      "osuus luokittain",
      "varaston arvo",
      "uusintaostoprosentti",
      "pisteet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Laajennetut raportit eivät ole erillinen näkymä: ne ovat Tilastot-välilehdellä ja seuraavat yläreunasta valitsemaasi jaksoa. Ne lisäävät jaksojen vertailut, viikonpäivän ja tunnin lämpökartan, Hitaasti liikkuvat tuotteet, Muutokset, jäsenten uusintaostoprosentin, Osuus luokittain ja Nykytilanne-osion varastolle ja pisteille. Kaikki ovat käytössä jokaisessa paketissa, ja ne pysyvät käytössä myös kokeilun päätyttyä."
      },
      {
        "type": "h2",
        "text": "Vertaa"
      },
      {
        "type": "p",
        "text": "Vertaa on Tilastot-välilehden jaksopalkin oikeassa reunassa, ja se vertaa valittua jaksoa aiempaan jaksoon."
      },
      {
        "type": "steps",
        "items": [
          "Avaa Tilastot sivupalkista.",
          "Valitse jakso yläreunasta.",
          "Napauta jaksopalkin oikeassa reunassa Vertaa.",
          "Valitse vertailu valikosta."
        ]
      },
      {
        "type": "p",
        "text": "Vaihtoehdot riippuvat valitsemastasi jaksosta:"
      },
      {
        "type": "list",
        "items": [
          "Ei mitään: vertailu on pois päältä.",
          "Viime viikko: vertaa yksittäistä päivää viime viikon samaan päivään tai tätä viikkoa viime viikkoon.",
          "Viime kuu: vertaa tätä kuukautta viime kuukauteen.",
          "Viime vuosi: vertaa tätä vuotta viime vuoteen tai valittua jaksoa viime vuoden vastaavaan jaksoon.",
          "Edellinen: vertaa mukautettua jaksoa yhtä pitkään sitä edeltävään jaksoon."
        ]
      },
      {
        "type": "p",
        "text": "Kun vertailu on käytössä, Tilastot lisää muutoksen ja vertailujakson luvun jokaiseen ruutuun paitsi Vero-, Liikevoitto- ja Tuotteet ilman omakustannetta -ruutuun. Liikevaihto, Saapunut maksu, Myyntikate, Tilaukset, Tilauksen keskiarvo, Alennukset yhteensä ja Palvellut asiakkaat näyttävät kukin vertailurivin, esimerkiksi ”▼ 3 % vrt. viime kuu”."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Tilastot-välilehti jaksolla Tämä viikko ja vertailuna Viime viikko: näkyvissä ovat vertailupalkki ja ensimmäinen ruuturivi, jossa kunkin ruudun alla ovat muutos ja vertailujakson luku",
        "caption": "Napauta mitä tahansa ruudun alla olevaa vertailuriviä, niin Jaksojen vertailu aukeaa ja näet molempien jaksojen luvut."
      },
      {
        "type": "p",
        "text": "Alennukset yhteensä -ruudun muutos on aina harmaa, koska suurempi alennus ei ole sellaisenaan hyvä eikä huono. Napauta mitä tahansa vertailuriviä, niin avautuu Jaksojen vertailu, jossa on molempien jaksojen luvut. Kehityskaavioon tulee vaaleampi viiva vertailujaksolle. Kun jakso on vielä käynnissä, vertailujakso katkaistaan samaan hetkeen."
      },
      {
        "type": "h2",
        "text": "Viikonpäivä × tunti"
      },
      {
        "type": "p",
        "text": "Vaihda kehityskaavion otsikosta näkymä Kehitys näkymäksi Viikonpäivä × tunti, niin saat seitsemän päivän ja 24 tunnin lämpökartan. Mitä tummempi ruutu on, sitä enemmän myit kyseisenä tuntina. Lämpökartan voi vaihtaa näyttämään liikevaihdon tai tilaukset. Kun Vertaa-valinnalla on otettu käyttöön vertailu, lämpökartta näyttää myös, mitkä tunnit kasvoivat ja mitkä supistuivat."
      },
      {
        "type": "h2",
        "text": "Hitaasti liikkuvat tuotteet"
      },
      {
        "type": "p",
        "text": "Vaihda Tuotteiden paremmuusjärjestys -kortin otsikoksi Hitaasti liikkuvat tuotteet, niin tuotteet listataan vähiten myydyistä eniten myytyihin. Jokaisella rivillä näkyvät tuotteen nykyinen varasto ja viimeinen myyntipäivä. Tuotteet, joita ei ole koskaan myyty, merkitään tekstillä Ei koskaan myyty, ja tuotteella, jolla on variantteja, on yksi rivi kutakin varianttia kohti. Oletuksena näytetään vain varastossa olevat tuotteet."
      },
      {
        "type": "h2",
        "text": "Muutokset"
      },
      {
        "type": "p",
        "text": "Vaihda Tuotteiden paremmuusjärjestys -kortin otsikoksi Muutokset, niin näet 3 tuotetta, joiden liikevaihto nousi eniten, ja 3, joiden liikevaihto laski eniten vertailujaksoon verrattuna. Jokaisella rivillä näkyvät molempien jaksojen liikevaihto ja ero, ja jokaista varianttia verrataan itseensä."
      },
      {
        "type": "p",
        "text": "Valitse ensin jakso kohdasta Vertaa. Kun Vertaa on Ei mitään tai jakso on Koko aika, kortti kehottaa valitsemaan vertailujakson. Napauta korttia tai Näytä kaikki, niin avautuu koko Tuotteiden muutokset -luettelo, joka on jaettu osioihin Nousussa ja Laskussa."
      },
      {
        "type": "h2",
        "text": "Uusintaostoprosentti"
      },
      {
        "type": "p",
        "text": "Palvellut asiakkaat -ruudun viimeisellä rivillä uusintaostoprosentti näkyy muodossa ”Uusintaostoprosentti … · … jäsentä palasi”. Se näyttää niiden jäsenten osuuden, jotka ostivat valitulla jaksolla ja ovat ostaneet yhteensä vähintään kaksi kertaa. Kun Vertaa-valinnalla on otettu käyttöön vertailu, alla oleva rivi näyttää muutoksen prosenttiyksikköinä ja vertailujakson prosentin."
      },
      {
        "type": "h2",
        "text": "Osuus luokittain"
      },
      {
        "type": "p",
        "text": "Osuus luokittain listaa kunkin luokan liikevaihdon ja osuuden suurimmasta pienimpään tuotteen nykyisen luokan mukaan. Tuotteet, joilla ei ole luokkaa, näytetään kohdassa Ei luokkaa, ja rivit summautuvat täsmälleen liikevaihdoksi."
      },
      {
        "type": "h2",
        "text": "Nykytilanne"
      },
      {
        "type": "p",
        "text": "Nykytilanne näyttää kolme varastoon ja pisteisiin liittyvää tietoa:"
      },
      {
        "type": "list",
        "items": [
          "Varaston arvo, joka lasketaan kaavalla nykyinen varasto × nykyinen omakustannus.",
          "Kaikki valitun jakson varastoliikkeet.",
          "Pisteet, jotka asiakkailla on mutta joita he eivät ole lunastaneet, sekä suurin mahdollinen alennus niillä."
        ]
      },
      {
        "type": "p",
        "text": "Varaston arvo ja lunastamattomat pisteet ovat tämänhetkisiä saldoja, joten yläreunan jakson vaihtaminen ei muuta niitä."
      },
      {
        "type": "h2",
        "text": "Paketit ja oikeudet"
      },
      {
        "type": "p",
        "text": "Versiosta 3.4 alkaen kaikki laajennetut raportit ovat käytössä jokaisessa paketissa, myös Lite-paketissa, ja ne pysyvät käytössä myös kokeilun päätyttyä. Myös Muutokset lisättiin versiossa 3.4. Aiemmissa versioissa laajennetut raportit näkyivät vain Pro-paketissa, ja muissa paketeissa niissä oli pieni lukko; jos näet vielä lukot, päivitä DingPOS App Storesta."
      },
      {
        "type": "p",
        "text": "Lite ei seuraa varastoa eikä kanta-asiakaspisteitä, mutta Nykytilanne näyttää silti myymäläsi jo sisältämän varaston arvon ja lunastamattomat pisteet (esimerkiksi kokeilusta) tai nollan."
      },
      {
        "type": "note",
        "text": "Henkilökunta näkee laajennetut raportit Tilastot-oikeudella; Varaston arvon summat vaativat lisäksi Kustannukset ja kate -oikeuden."
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
    "question": "Miten myyntikate raportoidaan, jos en ole syöttänyt omakustannuksia?",
    "keywords": [
      "omakustannus",
      "myyntikate",
      "kate",
      "kateprosentti",
      "raportit",
      "ei seurannassa",
      "puuttuva omakustannus",
      "tuotteet ilman omakustannetta",
      "liikevaihdosta myyntikatteeseen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omakustannus on valinnainen kenttä, joten tuotteet ilman omakustannusta jätetään pois myyntikatteesta, mutta niiden liikevaihto lasketaan silti kokonaan. Tilastot-välilehden Tuotteet ilman omakustannetta -ruutu näyttää, kuinka monella jaksolla myydyllä tai palautetulla tuotteella ei ole omakustannusta, esimerkiksi ”12 tuotetta”. Omakustannus 0 lasketaan omakustannukseksi, eikä sellaisia tuotteita luetella; kun jokaisella tuotteella on omakustannus, ruudussa lukee ”0 tuotetta · omakustannetiedot kunnossa”."
      },
      {
        "type": "h2",
        "text": "Tuotteiden löytäminen, joilta puuttuu omakustannus"
      },
      {
        "type": "p",
        "text": "Napauta Tilastot-välilehdellä Tuotteet ilman omakustannetta -ruutua tai Näytä tuotteet, niin avautuu näkymä Tuotteet ilman omakustannetta. Näkymä listaa tuotteet siinä järjestyksessä, kuinka paljon liikevaihtoa on jäänyt myyntikatteen ulkopuolelle, suurimmasta pienimpään."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Tuotteet ilman omakustannetta -näkymä, jossa tuotteet on järjestetty myyntikatteen ulkopuolelle jääneen liikevaihdon mukaan"
      },
      {
        "type": "steps",
        "items": [
          "Napauta riviä näkymässä Tuotteet ilman omakustannetta, niin tuote aukeaa.",
          "Napauta Muokkaa ja syötä omakustannus kenttään Omakustannus (valinnainen).",
          "Palaa näkymään Tuotteet ilman omakustannetta, niin näet rivillä merkinnän Omakustanne lisätty."
        ]
      },
      {
        "type": "p",
        "text": "Tuote, jolla on variantteja, merkitään tekstillä Omakustanne lisätty vasta, kun jokaisella ilman omakustannusta myydyllä variantilla on omakustannus – oma tai tuotteen omakustannus, jota variantti seuraa. Versiosta 3.6 alkaen ostotilaus voi myös jakaa toimituskulut omakustannukseen, jonka se kirjoittaa, kun Sisällytä toimituskulut omakustannukseen on päällä."
      },
      {
        "type": "note",
        "text": "Lisäämäsi omakustannus vaikuttaa vain myöhempiin myynteihin. Jo tehtyjä myyntejä ei lasketa uudelleen."
      },
      {
        "type": "h2",
        "text": "Omakustannuksen ja veron syöttäminen"
      },
      {
        "type": "p",
        "text": "Tuotelomakkeella omakustannuskentän nimi on jokaisessa myymälässä Omakustannus (valinnainen). Myymälässä, jolla on veroja, kentän vieressä on ⓘ, joka näyttää, miten vero huomioidaan sen mukaan, onko Ostojen veron vähennys päällä:"
      },
      {
        "type": "list",
        "items": [
          "Ostojen veron vähennys on päällä: syötä omakustannus ennen veroa, jonka voit vähentää. ⓘ-huomautuksessa lukee: ”Syötä omakustannus ilman vähennettävää veroa, joka kirjataan ostojen veroksi. Vero, jota et voi vähentää, kuuluu omakustannukseen.”",
          "Ostojen veron vähennys ei ole päällä: syötä maksamasi hinta miinus vähennettävä vero. ⓘ-huomautuksessa lukee: ”Vähennettävä vero ei kuulu omakustannukseen, mutta vero, jota et voi vähentää, kuuluu. Jos vähennät ostojen veron, ota käyttöön Ostojen veron vähennys kohdassa Myymälän tiedot.”"
        ]
      },
      {
        "type": "p",
        "text": "Jos myymäläsi ilmoittaa ostojen veron, ota Ostojen veron vähennys käyttöön kohdassa Myymälän tiedot."
      },
      {
        "type": "h2",
        "text": "Myyntikatteen erittelyn lukeminen"
      },
      {
        "type": "p",
        "text": "Myyntikate on liikevaihto kaikkien alennusten jälkeen (tuote- ja ostoskorialennukset, kampanjat, pisteiden lunastus) ja ennen veroa, miinus omakustannus. Kateprosentti on myyntikate ÷ niiden tuotteiden liikevaihto, joilla on omakustannus, joten tuotteet ilman omakustannusta eivät laske sitä. Palautus peruu palautuspäivänä sen myyntikatteen, jonka kyseiset tuotteet olivat tuoneet."
      },
      {
        "type": "p",
        "text": "Napauta Tilastot-välilehden Myyntikate-ruutua, niin avautuu Liikevaihdosta myyntikatteeseen, joka vähentää rivi riviltä:"
      },
      {
        "type": "list",
        "items": [
          "Liikevaihto (sis. vero)",
          "Vero",
          "Liikevaihto (ilman veroa)",
          "Liikevaihto ilman omakustannetta",
          "Tuotteiden omakustannus",
          "Myyntikate ja kate"
        ]
      },
      {
        "type": "p",
        "text": "Rivit summautuvat täsmälleen Myyntikate-ruudun lukuun. Australian, Ison-Britannian, Uuden-Seelannin ja Singaporen myymälät näkevät verorivien kohdalla paikallisen veron nimen, esimerkiksi Liikevaihto (sis. GST)."
      },
      {
        "type": "note",
        "text": "Tämä myyntikatteen laskentatapa tuli versiossa 3.1. Aiemmat versiot vähensivät vain käsin annetut tuotealennukset ja laskivat verolliseen hintaan sisältyvän veron myyntikatteeksi, joten päivityksen jälkeen jaksot, joissa on alennuksia tai verollisia hintoja, näyttävät pienempää myyntikatetta. Kyse on korjauksesta, ei kadonneista tiedoista."
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
    "question": "Miten näen, paljonko tienasin oikeasti kunakin kuukautena?",
    "keywords": [
      "tuloslaskelma",
      "tulos",
      "P&L",
      "liikevoitto",
      "myyntikate",
      "kuukausittainen voitto",
      "kiinteät kulut",
      "kulut",
      "liiketulos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa sivupalkista Tilastot-välilehden alapuolella oleva Tulos, niin näet kunkin kuukauden liikevoiton ja sen muodostumisen. Lista kulkee uusimmasta vanhimpaan alkaen ensimmäisestä kuukaudesta, jolloin oli toimintaa; kuluvalla kuukaudella on merkintä Käynnissä, ja kunkin vuoden otsikko laskee yhteen sen valmiiden kuukausien liikevoiton. Listan ensimmäinen rivi Kaikki kulut avaa kaikki kulut kuukaudesta riippumatta."
      },
      {
        "type": "h2",
        "text": "Kuukausierittely"
      },
      {
        "type": "steps",
        "items": [
          "Avaa sivupalkista Tilastot-välilehden alapuolella oleva Tulos.",
          "Napauta kuukautta nähdäksesi, miten sen liikevoitto muodostuu."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Tulos-näkymän kuukausisivu, jossa näkyvät Käynnissä-merkintä, liikevoitto ja koko erittely liikevaihdosta kuluihin"
      },
      {
        "type": "p",
        "text": "Kuukausisivu listaa kaikki rivit myynnistä liikevoittoon järjestyksessä. Rivit liikevaihdosta myyntikatteeseen ovat nimiltään ja luvuiltaan samat kuin kohdassa Liikevaihdosta myyntikatteeseen Tilastoissa."
      },
      {
        "type": "list",
        "items": [
          "Liikevaihto (sis. vero), Vero ja Liikevaihto (ilman veroa): liikevaihto veroineen, veron määrä sekä kaikkien alennusten jälkeinen ja ennen veroa laskettu liikevaihto, joka lasketaan sille päivälle, jona tavara luovutettiin. Australian, Ison-Britannian, Uuden-Seelannin ja Singaporen myymälät näkevät paikallisen veron nimen.",
          "Liikevaihto ilman omakustannetta: vähennetään ennen tuotteiden omakustannusta, ja näkyy vain, kun se ei ole nolla.",
          "Tuotteiden omakustannus: myytyjen tuotteiden kustannus tuotteisiin kirjattujen omakustannusten mukaan.",
          "Myyntikate: näkyy kateprosentin kanssa.",
          "Liikevaihto ilman omakustannetta: lisätään takaisin myyntikatteen jälkeen, kun se ei ole nolla.",
          "Varastotappio: näkyy vain, kun kuukaudella on sellainen; sellaisten tuotteiden omakustannus, jotka Muuta varastosaldoa -toiminto poisti vanhentuneina, vaurioituneina, lahjoitettuina tai vastaavina, sekä romutetut palautukset. Se tulee myyntikatteen jälkeen. Katso ”Miten kirjaan varastosta vanhentuneet, rikkoutuneet tai näytteinä annetut tuotteet?” Kuukaudella on myös Varastotappio-osio, joka summaa sen syittäin.",
          "Maksukulut (arvio): maksutapojesi määristä arvioidut maksukulut.",
          "Menetetyt etumaksut: näkyy vain, kun ne eivät ole nolla; etumaksut, jotka pidit, kun ennakkotilaus peruutettiin.",
          "Käteisen pyöristys: näkyy vain, kun se ei ole nolla; summa, jonka käytössä oleviin kolikoihin pyöristetty käteinen toi tilausten loppusummiin yli tai ali.",
          "Kiinteät kulut ja Kertakulut: kyseiselle kuukaudelle kirjaamasi kulut – katso ”Miten kirjaan vuokran, palkat ja muut kulut?”",
          "Liikevoitto: lasketaan kaavalla liikevaihto (ilman veroa) − tuotteiden omakustannus − varastotappio − maksukulut + menetetyt etumaksut + käteisen pyöristys − kiinteät kulut − kertakulut."
        ]
      },
      {
        "type": "h2",
        "text": "Käynnissä olevat kuukaudet"
      },
      {
        "type": "p",
        "text": "Kun kuukausi on vielä kesken, Tulos vähentää jo koko kuukauden kiinteät kulut. Esimerkiksi 5.10. liikevaihto (ilman veroa) on toistaiseksi 20 000, tuotteiden omakustannus 10 000 ja kiinteät kulut 65 700, jolloin liikevoitto on −55 700 ja merkintänä on Käynnissä · koko kuukauden kulut vähennetään."
      },
      {
        "type": "p",
        "text": "Koska koko kuukauden kulut on jo laskettu, kuluvan kuukauden liikevoittoa ei koskaan näytetä punaisella kuukausilistassa, kuukausisivulla eikä Tilastojen Liikevoitto-ruudussa. Valmis kuukausi, joka päättyy tappioon, näyttää liikevoiton varoitusvärillä."
      },
      {
        "type": "h2",
        "text": "Kaaviot"
      },
      {
        "type": "p",
        "text": "Erittelyn jälkeen tulee enintään kolme kaaviota: liikevoitto kuukausi kuukaudelta, kunkin kiinteän kulun osuus ja kiinteiden kulujen kehitys. Kaksi kehityskaaviota kattavat enintään 12 kuukautta avaamaasi kuukauteen asti, ja ne näkyvät vasta, kun vertailtavia kuukausia on vähintään kaksi – kuukaudet lasketaan ensimmäisen myynnin tai kulun kuukaudesta alkaen. Osuuskaavio vaatii kyseiselle kuukaudelle kiinteän kulun; kunnes sellainen on, osiossa näkyy sen sijaan Lisää kiinteä kulu."
      },
      {
        "type": "h2",
        "text": "Siirtyminen Tilastojen ja Tulos-näkymän välillä"
      },
      {
        "type": "p",
        "text": "Tilastot ja Tulos viittaavat toisiinsa. Kun Tilastot-välilehden jakso on Tämä kuukausi tai täsmälleen yksi kokonainen kuukausi, toinen ruuturivi saa Liikevoitto-ruudun, jossa lukee Käynnissä · koko kuukauden kulut vähennetään, kun kuukausi on kesken. Napauttamalla ruutua näet kyseisen kuukauden erittelyn myyntikatteesta liikevoittoon. Muilla jaksoilla napauta Näytä kuukausittainen tuloslaskelma kohdan Liikevaihdosta myyntikatteeseen viimeiseltä riviltä."
      },
      {
        "type": "p",
        "text": "Toiseen suuntaan: Tulos-näkymässä kuukauden otsikon alla oleva Näytä raportti: lokakuu avaa Tilastot kyseiselle kuukaudelle (mukautettu jakso 1.–31.10.); kuluvan kuukauden kohdalla se avaa jakson Tämä kuukausi."
      },
      {
        "type": "note",
        "text": "Liikevoitto on voitto ennen tuloveroa, laskettuna DingPOSiin kirjatuista tiedoista – se ei ole veroilmoitus. Jos tuotteita on myyty ilman omakustannetta, kuukaudelle näytetään silti liikevoitto, jossa on merkintä ”Ei sisällä N tuotteen omakustannusta”; napauttamalla merkintää näet, mitkä tuotteet se koskee."
      },
      {
        "type": "note",
        "text": "Tulos on käytössä kaikissa paketeissa. Jos käytössä on työntekijätilit, sen avaaminen vaatii oikeuden Tuloslaskelma ja kulut, johon esihenkilöt ja työntekijät tarvitsevat oletuksena hyväksynnän, koska se näyttää tuotteiden omakustannukset ja palkat."
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
    "question": "Miten kirjaan vuokran, palkat ja muut kulut?",
    "keywords": [
      "kulut",
      "vuokra",
      "palkat",
      "sähkö ja vesi",
      "kiinteät kulut",
      "kertakulut",
      "kaikki kulut",
      "jaksotus",
      "yleiskulut",
      "tulos",
      "kertakulu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Napauta Tulos-välilehdellä Lisää kulu ja valitse Lisää kiinteä kulu tai Lisää kertakulu, kun haluat kirjata vuokran, palkat, sähkön ja veden sekä muut liiketoiminnan kulut. Jokainen kulu lasketaan kuukaudelle, jolle se kuuluu, ei maksukuukaudelle, ja kunkin kuukauden liikevoitto päivittyy sen mukaan. Kiinteät kulut toistuvat joka kuukausi, ja summaa voi halutessaan muuttaa; kertakulu lasketaan yhdelle kuukaudelle tai jaetaan usealle kuukaudelle."
      },
      {
        "type": "h2",
        "text": "Kiinteät kulut"
      },
      {
        "type": "p",
        "text": "Kiinteä kulu on toistuva kulu, jonka maksat joka kuukausi, kuten vuokra, sähkö ja vesi tai palkat."
      },
      {
        "type": "steps",
        "items": [
          "Avaa Tulos.",
          "Napauta Lisää kulu.",
          "Valitse Lisää kiinteä kulu.",
          "Syötä nimi, kuukausisumma ja kuukausi, josta alkaen kulu lasketaan. Valitse aiempi kuukausi, jos haluat kirjata kulun taannehtivasti.",
          "Tallenna napauttamalla ✓."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Kiinteän kulun lomake, jossa näkyvät nimi, kuukausisumma, alkukuukausi ja summan muutokset"
      },
      {
        "type": "p",
        "text": "Kun summa muuttuu, avaa kulu ja napauta Muuta summaa. Valitse kuukausi, josta muutos alkaa, ja valitse sitten Tästä kuukaudesta alkaen pysyvälle muutokselle, kuten vuokrankorotukselle, tai Vain tämä kuukausi yhden kuukauden poikkeamalle, kuten tämän kuukauden sähkölaskulle. Jokainen muutos näkyy lomakkeen listassa, ja voit avata minkä tahansa merkinnän muokataksesi tai poistaaksesi sen."
      },
      {
        "type": "p",
        "text": "Kun lopetat kiinteän kulun maksamisen, aseta Viimeinen laskettu kuukausi. Kyseinen kuukausi ja sitä edeltävät kuukaudet lasketaan edelleen Tulokseen, mutta myöhemmät kuukaudet eivät enää sisällä sitä."
      },
      {
        "type": "h2",
        "text": "Ajoitetut muutokset kohdassa Kaikki kulut"
      },
      {
        "type": "p",
        "text": "Kohdassa Kaikki kulut jokainen kiinteän kulun rivi näyttää, mitä on ajoitettu eteenpäin. Rivillä yhdistyvät alkukuukausi sekä mahdollinen seuraava ajoitettu summan muutos ja viimeinen laskettu kuukausi. Rivillä voi esimerkiksi lukea Alkaen: tammikuu 2026 · $420/kk alkaen joulukuu 2026 · Viimeinen kuukausi: maaliskuu 2027."
      },
      {
        "type": "p",
        "text": "Oikealla oleva summa pysyy tämänhetkisenä kuukausisummana, ei tulevana summana. Vain tämä kuukausi -vaihtoehdolla asetettua muutosta ei listata rivillä."
      },
      {
        "type": "h2",
        "text": "Kertakulut"
      },
      {
        "type": "p",
        "text": "Kertakulu on kerran maksettava kulu, kuten myymälän varustelu, laitteet, ennalta maksettu vakuutus tai yksittäinen lasku."
      },
      {
        "type": "steps",
        "items": [
          "Avaa Tulos.",
          "Napauta Lisää kulu.",
          "Valitse Lisää kertakulu.",
          "Syötä summa ja päivämäärä.",
          "Aseta Laskettu kuukausi yhdelle kuukaudelle tai ota käyttöön Jaa usealle kuukaudelle.",
          "Tallenna napauttamalla ✓."
        ]
      },
      {
        "type": "p",
        "text": "Ilman jakamistakin voit valita Laskettu kuukausi, jotta kulu lasketaan kuukaudelle, jolle se kuuluu. Esimerkiksi marraskuussa saapuva lokakuun lasku voidaan laskea lokakuulle, ja sen todellinen päivämäärä säilyy."
      },
      {
        "type": "p",
        "text": "Myymälän varustelun, laitteiden tai ennalta maksetun vakuutuksen kohdalla ota käyttöön Jaa usealle kuukaudelle, valitse 2–120 kuukautta ja valitse Ensimmäinen laskettu kuukausi. Lomake näyttää esikatselun siitä, paljonko kullekin kuukaudelle lasketaan ja mitkä kuukaudet kulu kattaa."
      },
      {
        "type": "p",
        "text": "Jos jaksotettu kulu päättyy ennenaikaisesti, esimerkiksi kun vakuutus irtisanotaan, avaa kulu ja käytä toimintoa Lopeta jako ennenaikaisesti. Jäljellä oleva osuus lasketaan valitsemallesi kuukaudelle."
      },
      {
        "type": "h2",
        "text": "Kulujen ostojen vero"
      },
      {
        "type": "p",
        "text": "Kun Ostojen veron vähennys on päällä, voit kirjata kertakululle laskunumeron ja vähennettävän veron sekä kirjata kiinteän kulun jokaisen laskun kohdassa Laskut toiminnolla Kirjaa lasku. Tulokseen lasketaan edelleen summa, jonka myymälä kantaa, ja vähennettävän veron toiminnasta kerrotaan ostojen veroa käsittelevässä artikkelissa."
      },
      {
        "type": "note",
        "text": "Syötä summa, jonka myymälä kantaa, ja jätä pois vero, jonka voit vähentää. Myytävä varasto ja raaka-aineet, joista sen valmistat, kirjataan Ostot-osiossa, koska ne sisältyvät omakustannukseen vasta myytäessä. Varastoseurannassa olevat tarvikkeet kirjataan käytettäessä toiminnolla Muuta varastosaldoa syyllä Liikkeen tarvikkeet, ei kuluna. Takaisin saatavat vakuusmaksut, lainan pääoma ja omistajan nostamat rahat eivät ole kuluja. Muutokset tallentuvat yhdessä, kun napautat ✓, ja jos muutos ulottuu valmiiseen kuukauteen, sovellus kertoo ensin, minkä kuukausien liikevoitto muuttuu."
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
    "question": "Miten vien veroraportin kirjanpitäjälle?",
    "keywords": [
      "veroraportin vienti",
      "Veroraportti",
      "Vie",
      "Excel-työkirja",
      "CSV",
      "PDF-raportti",
      "Veroyhteenveto",
      "Ostojen veron erittely",
      "kirjanpitäjä"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Veroraportti, napauta oikeasta yläkulmasta Vie ja valitse CSV, Excel-työkirja (XLSX) tai PDF-raportti. Tiedosto aukeaa koko näytön esikatseluun, jossa voit tallentaa sen tai lähettää sen kirjanpitäjällesi jakopainikkeella. Kaikki muodot sisältävät samat luvut, jotka näkyvät näytöllä."
      },
      {
        "type": "h2",
        "text": "Näin viet"
      },
      {
        "type": "steps",
        "items": [
          "Avaa Tilastot ja valitse jakso, esimerkiksi mukautettu jakso 1.11.–31.12. kahden kuukauden ilmoitusjaksolle tai neljännesvuosijakso.",
          "Avaa Veroraportti napauttamalla Vero-ruutua. Vienti kattaa täsmälleen kyseisen jakson.",
          "Napauta Veroraportin oikeasta yläkulmasta Vie. Valikko listaa muodot, ja viimeksi tällä iPadilla viety muoto on merkitty valituksi.",
          "Valitse muoto, esimerkiksi Excel-työkirja (XLSX), niin avautuu koko näytön esikatselu. CSV-tiedostot näkyvät taulukkona, ja Excel-työkirjassa voit vaihtaa taulukkojen välillä, esimerkiksi tarkistaa ensin Summary-taulukon.",
          "Napauta esikatselun oikeasta yläkulmasta jakopainiketta tallentaaksesi tiedoston tai lähettääksesi sen kirjanpitäjällesi. Esikatselun sulkeminen palauttaa Veroraporttiin."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Veroraportti, jossa Vie-valikko on auki ja listaa tiedostomuodot"
      },
      {
        "type": "p",
        "text": "Jos vienti epäonnistuu, sovellus näyttää viestin Tiedoston vienti epäonnistui ja tekstin Yritä viedä uudelleen. Mitään ei kirjoiteta; vie tiedosto uudelleen."
      },
      {
        "type": "h2",
        "text": "Vientimuodot"
      },
      {
        "type": "list",
        "items": [
          "Veroyhteenveto (CSV): yksi rivi kutakin raportin riviä kohti (kukin vero ja verokanta, nollaverokanta ja veroton), ja siinä ovat myynti, palautukset ja netto, ennen veroa ja vero.",
          "Kaikki asiakirjat (CSV): yksi rivi asiakirjaa kohti kunkin veron alla, ja siinä ovat päivämäärä ja kellonaika, kuittinumero, asiakirjatyyppi (myynti, palautus tai mitätöinnin vastakirjaus), asiakkaan nimi, summat ja maksutavat. Mitätöinti lisää vastakirjausrivin mitätöintipäivälle.",
          "Päiväyhteenveto (CSV): yhteenveto päiväkohtaisesti ja sen jälkeen toinen taulukko päiväkohtaisista maksuista maksutavoittain.",
          "Ostojen veron erittely (CSV): näkyy vain, kun raportissa on ostojen veron kortti. Yksi rivi kunkin ostotilauksen ja kulun jokaista ostojen verorivia kohti, ja siinä ovat toimittaja, toimittajan verotunniste ja laskunumero.",
          "Excel-työkirja (XLSX): taulukot Summary, Documents ja Daily vastaavat kolmea myynnin CSV-tiedostoa, ja lisäksi mukana on Purchases, kun raportissa näkyy ostojen vero. Summat ovat lukusoluja, ja jokainen sarake mitoitetaan sisältönsä mukaan, ettei mikään aukea leikattuna.",
          "PDF-raportti: A4-kokoinen raportti sovelluksen kielellä, jossa ovat myymälän nimi, jakso, verotila, valuutta ja raportin osiot. Australian, Uuden-Seelannin, Singaporen ja Ison-Britannian myymälöissä Ilmoituksen ruudut tulevat ensin; ostojen veron kortit seuraavat, kun ne näkyvät. Esikatselussa voit allekirjoittaa tai merkitä tiedostoa Merkinnällä ja jakaa merkityn tiedoston; saman jakson uudelleen vieminen kirjoittaa puhtaan kopion."
        ]
      },
      {
        "type": "h2",
        "text": "Muotoilu kirjanpito-ohjelmistoa varten"
      },
      {
        "type": "p",
        "text": "CSV-tiedostot ovat UTF-8-koodattuja ja pilkuilla eroteltuja, ja sarakkeiden nimet ovat kiinteästi englanniksi sovelluksen kielestä riippumatta, jotta kirjanpito-ohjelmisto osaa lukea ne. Summat käyttävät valuutan desimaaleja ja miinusmerkkiä ilman symbolia tai tuhaterotinta (esimerkiksi 80.97, -40.00 tai 1000 jenin myymälässä). Päivämäärät näkyvät muodossa 2026-11-03."
      },
      {
        "type": "p",
        "text": "Tekstisolut, jotka alkavat merkillä =, +, - tai @ (esimerkiksi asiakas nimeltä =1+1), saavat alkuunsa merkin ', jotta taulukkolaskenta näyttää tekstin eikä suorita kaavaa. Summille sitä ei koskaan lisätä."
      },
      {
        "type": "p",
        "text": "Tiedostonimissä on jakso, esimerkiksi tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx ja tax-report_2026-11-01_2026-11-30.pdf, joten eri jaksojen tiedostot eivät koskaan korvaa toisiaan."
      },
      {
        "type": "h2",
        "text": "Oikeudet ja tietosuoja"
      },
      {
        "type": "p",
        "text": "Kaikki paketit voivat viedä, myös Lite. Henkilökunta tarvitsee Tilastot-oikeuden, kuten Veroraporttiinkin."
      },
      {
        "type": "p",
        "text": "Tiedostot, joissa on ostojen vero, pyytävät ensin hyväksynnät, joita niiden kortit tarvitsevat: Kustannukset ja kate ostotilauksille ja Tuloslaskelma ja kulut kuluille. Tämä koskee Ostojen veron erittelyä (CSV) sekä Excel-työkirjaa (XLSX) ja PDF-raporttia, kun ostojen veron kortit näkyvät. Peruuttaminen ei kirjoita mitään; kolme myynnin CSV-tiedostoa eivät koskaan pyydä hyväksyntää."
      },
      {
        "type": "note",
        "text": "Kaikki asiakirjat (CSV) sisältää asiakkaiden nimiä, ja ostojen veron tiedostot sisältävät toimittajien nimiä ja verotunnisteita. Jaa ne vain niiden kanssa, joiden kuuluu nähdä ne."
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
    "question": "Miten kirjaan ostojen veron (ALV tai GST ostoista)?",
    "keywords": [
      "ostojen vero",
      "ALV",
      "VAT",
      "GST",
      "Ostojen veron vähennys",
      "Ostojen vero: ostotilaukset",
      "Ostojen vero: kulut",
      "Toimittajan verotunniste",
      "ostotilaukset",
      "veroraportti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ota Ostojen veron vähennys käyttöön kohdassa Asetukset → Myymälän tiedot, kun haluat kirjata toimittajien laskuilla olevan vähennettävän veron ostotilauksille ja kuluille. Molemmat lomakkeet saavat silloin ostojen veron osion, johon kopioit vähennettävän veron jokaiselta laskulta. Veroraportti listaa sen kahdessa kortissa: Ostojen vero: ostotilaukset ja Ostojen vero: kulut."
      },
      {
        "type": "h2",
        "text": "Ostojen veron vähennyksen käyttöönotto"
      },
      {
        "type": "steps",
        "items": [
          "Avaa Asetukset → Myymälän tiedot ja etsi veron kortti.",
          "Kytke Veron periminen -kohdan alla päälle Ostojen veron vähennys."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Myymälän tietojen veron kortti, jossa Ostojen veron vähennys on kytketty päälle ja sen vihje näkyy alla"
      },
      {
        "type": "p",
        "text": "Ostojen veron vähennys näkyy vain, kun myymälällä on vähintään yksi vero, ja se on uusissa myymälöissä ja päivityksen jälkeen aluksi pois päältä. Kytkimen vaihtaminen tallentuu heti ja kirjautuu Toimintolokiin kohtaan Veroasetukset. Kun se on päällä, syötä ostohinnat ja tuotteiden omakustannukset ennen vähennettävää veroa; vero, jota ei voi vähentää, jää omakustannukseen."
      },
      {
        "type": "note",
        "text": "Ostojen veron vähennys -kytkin on jokaisessa paketissa, mutta Ostot vaatii Standard-paketin tai sitä korkeamman. Kun kytkimen laittaa pois päältä, kentät piilotetaan uusilta tietueilta; olemassa olevat tietueet säilyttävät ostojen veronsa ja maksettavan summansa, eivätkä aiemmat veroraportit muutu."
      },
      {
        "type": "h2",
        "text": "Ostotilaukset"
      },
      {
        "type": "steps",
        "items": [
          "Avaa Ostot ja napauta Uusi osto.",
          "Syötä yksikköhinnat ennen vähennettävää veroa ja vieritä lisäkulujen ohi kohtaan Ostojen vero.",
          "Tarkista Laskupäivä, joka on oletuksena tilauspäivä, ja lisää halutessasi Laskunumero ja Toimittajan verotunniste.",
          "Valitse Verokanta-kohdassa myymälän vero tai valitse Muu verokanta… ja kirjoita enintään 3 desimaalia, esimerkiksi 9,975 %.",
          "Tarkista Veroton, joka on aluksi tilauksen loppusumma ennen veroa, ja kopioi Vähennettävä vero laskulta.",
          "Napauta Lisää verokanta, jos tarvitset lisää verokantoja."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Ostotilaus, jossa näkyvät Ostojen vero -osio laskukenttineen, yhden verokannan rivi ja summat"
      },
      {
        "type": "p",
        "text": "Vähennettävä vero on aluksi tyhjä; DingPOS ei koskaan laske sitä verokannan perusteella ja hyväksyy laskun pyöristykset. Esimerkiksi laskulla AB-12345678 (päivätty 30.6.2026) on jauhoja 10 × $300 ja toimituskuluja $100, ja siinä on yksi 5 %:n rivi, jossa Veroton on $3,100 ja Vähennettävä vero $155. Tuloksena Yhteensä ilman veroa on $3,100, Ostojen vero $155 ja Maksettava summa $3,255, ja ne näkyvät luettelossa, tilauksen tiedoissa ja kohdassa Maksamattomat laskut. Toimittajalle tallennettu Toimittajan verotunniste täyttyy uusiin tilauksiin; tallennetut tilaukset säilyttävät omansa."
      },
      {
        "type": "p",
        "text": "Jos lasku saapuu myöhässä, avaa vastaanotettu tilaus ja napauta Ostojen vero -kortissa Kirjaa ostojen vero tai Muokkaa, kun haluat muuttaa sitä. Vain Maksettava summa muuttuu; varasto, tuotteen omakustannus sekä maksettu- tai maksamatta-tila pysyvät ennallaan. Mitätöidyillä tilauksilla Ostojen vero on vain luettavissa, eikä ennen päivitystä tallennettuja tilauksia täydennetä jälkikäteen."
      },
      {
        "type": "h2",
        "text": "Kulut"
      },
      {
        "type": "p",
        "text": "Kohdassa Tulos → Kertakulut lomakkeeseen tulevat summan alle Laskunumero ja ostojen veron rivit. Pidä summa ennen vähennettävää veroa ja kopioi vain vähennettävä vero. Jos paperitarvikelasku on $1,100 ja siitä $100 on vähennettävää, syötä $1,000 sekä 10 %:n rivi, jossa ovat $1,000 ja $100; Verollinen näyttää $1,100 ja tuloslaskelma laskee $1,000. Sen ostojen vero lasketaan kokonaan kulun päivämäärälle, eikä se koskaan seuraa Laskettua kuukautta tai jaksotusta."
      },
      {
        "type": "p",
        "text": "Kohdassa Tulos → Kiinteät kulut avaa tallennettu kulu, kuten vuokra tai sähkö ja vesi, ja napauta kohdassa Laskut Kirjaa lasku aina, kun lasku saapuu: anna laskupäivä, halutessasi laskunumero ja vähintään yksi verokantarivi. Jos vuokra on $30,000 kuukaudessa ja heinä- ja elokuun laskuilla kummallakin on 5 %:n rivi, jossa ovat $30,000 ja $1,500, heinä–syyskuun raportissa on ostojen veroa $3,000, kun taas tuloslaskelma laskee edelleen $30,000 kuukaudessa."
      },
      {
        "type": "p",
        "text": "Kun tallennat ostojen veron muutoksen menneelle kuukaudelle, sovellus kysyy Tallennetaanko muutos? ja varoittaa, että kuukauden veroraportti muuttuu, jos olet jo ilmoittanut sen. Kuluvan kuukauden muokkaukset ja luonnokset tallentuvat kysymättä."
      },
      {
        "type": "note",
        "text": "DingPOS ei laske tuonnin arvonlisäveroa, käännettyä verovelvollisuutta eikä osittaista vähennysoikeutta. Kopioi vähennettävä vero laskulta ja laita vero, jota et voi vähentää, ennen veroa olevaan summaan."
      },
      {
        "type": "h2",
        "text": "Veroraportti"
      },
      {
        "type": "p",
        "text": "Kaksi korttia on myyntikorttien jälkeen: Ostojen vero: ostotilaukset ja Ostojen vero: kulut. Kummassakin on yksi rivi kutakin verokantaa kohti, rivi Ei ostojen veroa sekä yhteissummat sarakkeille Veroton, Vähennettävä vero ja Verollinen. Yhteissummat sisältävät myös ostot, joissa ei ole ostojen veroa, vaikka joissakin veroilmoituksissa huomioidaan vain ostojen verorivit."
      },
      {
        "type": "list",
        "items": [
          "Ostotilaukset lasketaan Laskupäivälle tai tilauspäivälle, jos laskupäivä on tyhjä.",
          "Mitätöidyt ostotilaukset lasketaan negatiivisena summana mitätöintipäivälle.",
          "Kertakulut lasketaan kokonaan kulun päivämäärälle.",
          "Kiinteän kulun laskut lasketaan laskupäivälle."
        ]
      },
      {
        "type": "p",
        "text": "Ostojen vero: ostotilaukset vaatii Kustannukset ja kate -oikeuden ja Ostojen vero: kulut vaatii oikeuden Tuloslaskelma ja kulut; työntekijät, joilta oikeus puuttuu, näkevät kortin otsikon alla tekstin Pyydä esihenkilöä hyväksymään. Vero-ruutu näyttää edelleen vain myynnistä kerätyn veron, ei koskaan miinus ostojen veroa, koska Japanin yksinkertaistettu menetelmä ja Ison-Britannian Flat Rate Scheme toimivat eri tavalla. Australian, Uuden-Seelannin, Singaporen ja Ison-Britannian myymälät näkevät nämä summat myös kohdassa Ilmoituksen ruudut."
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
    "question": "Missä veroraportti on ja miten luen sitä?",
    "keywords": [
      "veroraportti",
      "ALV",
      "GST",
      "myyntivero",
      "Tilastot",
      "Vero",
      "Myynti ja vero verokannoittain",
      "Maksutavoittain"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Tilastot ja napauta Vero-ruutua, niin näet Veroraportin, joka listaa myynnin ja veron verokannoittain Tilastojen näyttämälle jaksolle. Kopioi luvut ALV-, GST- tai myyntiveroilmoitukseen tai lähetä ne kirjanpitäjälle. Myöhemmät veromuutokset eivät koskaan muuta tallennettujen asiakirjojen lukuja."
      },
      {
        "type": "h2",
        "text": "Veroraportin avaaminen"
      },
      {
        "type": "steps",
        "items": [
          "Avaa Tilastot ja valitse jakso, esimerkiksi Tämä kuukausi tai mukautettu jakso.",
          "Etsi Vero-ruutu toiselta riviltä Alennukset yhteensä -ruudun jälkeen.",
          "Napauta Vero-ruutua tai Veroraportti ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Tilastot-välilehti jaksolla Tämä kuukausi, jossa näkyvät Vero-ruutu ja sen alareunan Veroraportti ›"
      },
      {
        "type": "p",
        "text": "Tämä ruutu on ainoa reitti raporttiin. Sen alarivi nimeää jaksolla kerätyt verot suurin summa ensin: kaksi nimeltä, kolme tai useampi esimerkiksi muodossa 3 veroa, mm. PST 7 %. Otsikossa näkyy Tilastojen jakso (Tämä kuukausi · 1.11. – 30.11.), eikä siinä ole jaksonvalitsinta eikä viime kuun pikavalintaa, koska ilmoitusjaksot vaihtelevat (Taiwanissa kaksi kuukautta, Australiassa neljännesvuosi, Japanissa vuosi)."
      },
      {
        "type": "p",
        "text": "Myymälät, joilla ei ole veroa eikä jaksolla verollisia myyntejä, eivät näe Vero-ruutua; jaksot, joilla ei ole asiakirjoja, näyttävät Tilastojen tyhjän tilan. Poistetuilla veroilla ruutu säilyy jaksoilla, joilla on niiden alaisia myyntejä."
      },
      {
        "type": "note",
        "text": "Jokaisessa paketissa, myös Lite-paketissa ja kokeilussa, on ruutu, raportti ja kaikki viennit. Henkilökunta tarvitsee Tilastot-oikeuden; roolit, jotka tarvitsevat hyväksynnän, näkevät hyväksyntää pyytävän tilan, kunnes esihenkilö hyväksyy."
      },
      {
        "type": "h2",
        "text": "Raportin lukeminen"
      },
      {
        "type": "p",
        "text": "Australian, Uuden-Seelannin, Singaporen ja Ison-Britannian myymälät näkevät Ilmoituksen ruudut ensin."
      },
      {
        "type": "p",
        "text": "Myynti ja vero verokannoittain listaa yhden rivin kutakin verokantaa kohti: suurin ensin, sitten nollaverokanta 0 % ja Veroton (tuotteet, joilla ei ole veroa) viimeisenä. Sarakkeet ovat Myynti, Palautukset ja mitätöinnit sekä Netto, ja kussakin on Ennen veroa ja Vero; nollaverokannan ja Veroton-rivillä ei ole Vero-riviä. Jokaisella myymälän verolla on rivi, vaikka myyntiä ei olisi. Veron nimen vaihtaminen säilyttää yhden rivin; verokannan muutos lisää uuden rivin."
      },
      {
        "type": "p",
        "text": "Yhteissummat näyttää Myynti ilman veroa, Vero ja Myynti veroineen. Kun veroja on kaksi tai useampi, huomautus kertoo, että yhdellä myynnillä voi olla useampi vero, joten rivien myyntejä ei voi laskea yhteen; Myynti ilman veroa laskee jokaisen myynnin vain kerran. Esimerkiksi Ison-Britannian neljänneksellä VAT 20 % voisi näyttää Ennen veroa £1,000 ja Vero £200, nollaverokanta 0 % £300 ja Veroton £50: Yhteissummat antaa Myynti ilman veroa £1,350, Vero £200 ja Myynti veroineen £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Veroraportti, jossa rivit Myynti ja vero verokannoittain sekä Yhteissummat alla"
      },
      {
        "type": "list",
        "items": [
          "Maksutavoittain listaa näiden asiakirjojen maksut jakson loppuun mennessä, maksamattomat summat kohdassa Myyntisaamiset ja käteisen pyöristyksen rivillä Sis. käteisen pyöristyksen … käteisen rivin sisällä.",
          "Ei lasketa myynniksi näkyy vain menetetyille etumaksuille: se listaa Menetetyt etumaksut, ja alarivi kehottaa tarkistamaan ilmoittamisen kirjanpitäjältä. Ne eivät lisää myyntiä eivätkä veroa.",
          "Myymälät, joilla Ostojen veron vähennys on päällä tai joilla on jaksolla kirjattua ostojen veroa, näkevät myös Ostojen vero: ostotilaukset ja Ostojen vero: kulut."
        ]
      },
      {
        "type": "h2",
        "text": "Minä päivänä kukin asiakirja lasketaan"
      },
      {
        "type": "p",
        "text": "Napauta ⓘ-kuvaketta kohdan Myynti ja vero verokannoittain vieressä:"
      },
      {
        "type": "list",
        "items": [
          "Mitätöinti lasketaan sille jaksolle, jona se tehtiin, negatiivisena summana, joten jo ilmoitettu jakso ei koskaan muutu. Tilastot puolestaan poistavat sen myynnin omalta jaksolta.",
          "Palautus lasketaan oman päivämääränsä mukaan. Vaihdossa uudet tuotteet lasketaan myynniksi ja palautetut tuotteet palautuksiksi.",
          "Ennakkotilaus lasketaan noutopäivälle, laskulle myynti myyntipäivälle."
        ]
      },
      {
        "type": "p",
        "text": "30.10. tehty myynti, joka mitätöidään 2.11., pysyy lokakuun Myynnissä ja näkyy marraskuun kohdassa Palautukset ja mitätöinnit negatiivisena summana. Laskulle myynnin myöhempi kuittaus ei siirrä sitä."
      },
      {
        "type": "h2",
        "text": "Kerätty vero ja Tilastojen summat"
      },
      {
        "type": "p",
        "text": "Vero-ruutu vastaa Veroraportin Vero-yhteissummaa. Se eroaa Tilastojen kohdan Liikevaihdosta myyntikatteeseen Vero-rivistä vain jaksojen välisissä mitätöinneissä, koska Tilastot ottaa mitätöidyn myynnin pois sen alkuperäiseltä jaksolta."
      },
      {
        "type": "note",
        "text": "Veroraportti näyttää myynnistä kerätyn veron, ei koskaan maksettavaa veroa (myynnin vero miinus ostojen vero), koska kaikki maat eivät laske sitä näin, esimerkiksi Japanin yksinkertaistettu menetelmä tai Ison-Britannian Flat Rate Scheme."
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
    "question": "Mitkä luvut kuuluvat BAS-, GST- tai VAT-ilmoitukseni ruutuihin?",
    "keywords": [
      "Ilmoituksen ruudut",
      "Veroraportti",
      "Tilastot",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "Ostojen veron vähennys",
      "ALV-ilmoitus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Australian, Uuden-Seelannin, Singaporen tai Ison-Britannian myymälöissä Veroraportti alkaa kortilla Ilmoituksen ruudut, joka näyttää jokaisen ruudun ja siihen kuuluvan summan samasta raportista. Se kattaa lomakkeet Australia BAS · Simpler BAS, Uusi-Seelanti GST101A, Singapore GST F5 ja Iso-Britannia VAT Return kaikissa paketeissa."
      },
      {
        "type": "h2",
        "text": "Ilmoituksen ruutujen avaaminen"
      },
      {
        "type": "steps",
        "items": [
          "Avaa Tilastot.",
          "Avaa Veroraportti napauttamalla Vero-ruutua."
        ]
      },
      {
        "type": "p",
        "text": "Ilmoituksen ruudut on ensimmäinen kortti Myynti ja vero verokannoittain -kortin yläpuolella, ja sen alarivi nimeää ilmoituksen. Jokainen summa tulee samasta raportista senttien kanssa, eikä mitään lasketa uudelleen. Viety PDF-raportti alkaa samalla kortilla. Myymälät, jotka on otettu käyttöön ennen kuin sovellus alkoi tallentaa maata, määräytyvät valuutan mukaan (AUD, NZD, SGD tai GBP); muilla myymälöillä ei ole Ilmoituksen ruudut -korttia."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Veroraportin yläosan Ilmoituksen ruudut -kortti, jossa näkyvät Ison-Britannian VAT Returnin ruudut 1, 4, 6 ja 7"
      },
      {
        "type": "h2",
        "text": "Australia BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Myynnit GST:n kanssa, GST-vapaat ja verottomat myynnit mukaan lukien; vastaa kysymykseen “Does the amount shown at G1 include GST?” kohdassa Yes",
          "1A GST on sales: Myynnin vero",
          "1B GST on purchases: Ostotilausten ja kulujen vähennettävä vero"
        ]
      },
      {
        "type": "p",
        "text": "ATO edellyttää täysiä dollareita: jätä sentit pois BAS-ilmoituksesta, älä koskaan pyöristä ylöspäin."
      },
      {
        "type": "h2",
        "text": "Uusi-Seelanti GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: Myynnit GST:n kanssa, nollaverokannan myynnit mukaan lukien, verottomat myynnit pois lukien",
          "Box 6 Zero-rated supplies: Nollaverokannan myynnit",
          "Box 11 Total purchases and expenses: Ostotilaukset ja kulut, joissa on GST, GST mukaan lukien; ostot, joissa ei ole ostojen veroa tai joiden verokanta on nolla, jätetään pois"
        ]
      },
      {
        "type": "p",
        "text": "myIR laskee ruudut 8 ja 12 kaavalla 3/23, joten tulos voi poiketa raportin verosta muutamalla sentillä."
      },
      {
        "type": "h2",
        "text": "Singapore GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: Verolliset myynnit ennen veroa",
          "Box 2 Total value of zero-rated supplies: Nollaverokannan myynnit; vain viennit ja kansainväliset palvelut voivat olla nollaverokannalla",
          "Box 5 Total value of taxable purchases: Ostotilaukset ja kulut, joissa on GST tai nollaverokanta, ennen veroa; ostot, joissa ei ole ostojen veroa, jätetään pois",
          "Box 6 Output tax due: Myynnin vero",
          "Box 7 Input tax and refunds claimed: Ostotilausten ja kulujen vähennettävä vero"
        ]
      },
      {
        "type": "h2",
        "text": "Iso-Britannia VAT Return"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: Myynnin vero",
          "Box 4 VAT reclaimed on purchases and other inputs: Ostotilausten ja kulujen vähennettävä vero",
          "Box 6 Total value of sales and all other outputs excluding any VAT: Myynnit ennen veroa, mukaan lukien nollaverokannan myynnit, verosta vapautetut myynnit ja verottomat myynnit",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: Ostotilausten ja kulujen verottomat määrät, myös ostot, joista ei ole ostojen veroa; vähennä kirjaamasi palkat ja liikekiinteistövero (business rates)"
        ]
      },
      {
        "type": "p",
        "text": "Tavallista VAT-kirjanpitoa varten; Flat Rate Scheme -järjestelmässä ruudut 1 ja 6 lasketaan eri tavalla. Isossa-Britanniassa etumaksun VAT erääntyy, kun saat etumaksun; DingPOS ilmoittaa ennakkotilauksen vasta, kun se noudetaan."
      },
      {
        "type": "p",
        "text": "Esimerkki Ison-Britannian neljänneksestä: £1,000 VAT 20 % -myyntiä ennen veroa (vero £200), £300 nollaverokannan myyntiä, £50 verotonta myyntiä, ostotilauksia £400 plus £80 VAT sekä kuluja £250 ilman ostojen veroa antavat Box 1 £200, Box 4 £80, Box 6 £1,350 ja Box 7 £650."
      },
      {
        "type": "h2",
        "text": "Tyhjät ruudut ja henkilökunnan pääsy"
      },
      {
        "type": "p",
        "text": "Ruudut, jotka veroviranomainen laskee itse, ja maksettavat summat jätetään pois (Ison-Britannian Box 3 ja 5; Singaporen Box 3, verosta vapautetut myynnit). Uudessa-Seelannissa ja Singaporessa verottomat myynnit eivät ole missään ruudussa; kysy kirjanpitäjältäsi, olisiko niissä pitänyt olla veroa."
      },
      {
        "type": "p",
        "text": "Ostojen veron ruudut (AU 1B, NZ 11, SG 5 ja 7, UK 4 ja 7) vaativat Ostojen veron vähennyksen, tai ne näyttävät — ja tekstin Ostojen veroa ei ole kirjattu, eivät koskaan nollaa. UK Box 7 vaatii sekä Ostojen vero: ostotilaukset että Ostojen vero: kulut; pelkät ostotilaukset täyttävät Box 4:n ja jättävät Box 7:n arvoon —."
      },
      {
        "type": "p",
        "text": "Työntekijät, joilla ei ole oikeutta Tuloslaskelma ja kulut tai Kustannukset ja kate, eivät näe ruutuja, jotka laskevat yhteen molemmat kortit, ennen kuin esihenkilö hyväksyy kohdasta Pyydä esihenkilöä hyväksymään."
      },
      {
        "type": "note",
        "text": "Luvut on laskettu myynti- ja laskupäivien mukaan; DingPOS ei seuraa maksupäiviä. Jos ilmoitat maksuperusteisesti, korjaa nämä luvut."
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
    "question": "Miten luon kampanjan?",
    "keywords": [
      "kampanja",
      "tarjous",
      "osta yksi, saat toisen",
      "ostosraja",
      "happy hour",
      "alennuskoodi",
      "kuponki"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Asetukset → Kampanjat. Tuetut kampanjatyypit:"
      },
      {
        "type": "list",
        "items": [
          "Ostosraja: kun ostat tietyllä summalla, saat Y alennusta tai Y %:n alennuksen.",
          "Osta yksi, saat toisen -tarjoukset ja n:nnen tuotteen tarjoukset.",
          "Bonuspisteiden kertoimet.",
          "Vain tietyn jäsentason tai syntymäkuukauden tarjoukset.",
          "Osta A, saat B, maksulliset lisätuotteet ja pakettihinnat."
        ]
      },
      {
        "type": "p",
        "text": "Jokaisen kampanjan voi ajastaa (Happy Hour -ajat, tietyt viikonpäivät, keskiyön yli), rajata tiettyihin tuotteisiin ja määrittää sille prioriteetin, yhdistämissäännöt ja käyttörajat. Ehdot täyttävät kampanjat tulevat kassalla voimaan automaattisesti – alennuskoodeja ei tarvita."
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
    "question": "Kampanja ei toteudu kassalla – mitä pitäisi tarkistaa?",
    "keywords": [
      "kampanja",
      "ei toimi",
      "ei toteudu",
      "alennus ei tule",
      "vianmääritys"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tarkista yleisimmät syyt tässä järjestyksessä:"
      },
      {
        "type": "steps",
        "items": [
          "Ajoitus: onko tämä päivä kampanjan voimassaoloaikana? Rajaako Happy Hour -aika viikonpäivää tai kellonaikaa?",
          "Rajaus: kuuluvatko ostoskorin tuotteet kampanjan tuote- tai luokkarajaukseen? Onko tuotteelle asetettu Sulje pois kampanjoista (avohintaisille tuotteille se on oletuksena)? Onko ostosraja täyttynyt?",
          "Kohderyhmä: onko kampanja rajattu jäsentasoon tai syntymäkuukauteen? Valittiinko kyseinen jäsen kassalla?",
          "Käyttörajat: onko kokonaiskäyttöraja tai tämän asiakkaan oma raja täyttynyt? Syntymäkuukausikampanjan asiakaskohtainen raja lasketaan kalenterivuosittain.",
          "Yhdistäminen: estääkö korkeamman prioriteetin kampanja, jossa on asetus ”Pysäytä myöhemmät kampanjat, kun tämä toteutuu”?"
        ]
      },
      {
        "type": "p",
        "text": "Jos kaikki on kunnossa mutta kampanja ei silti toteudu, lähetä meille sähköpostilla kuvakaappaus kampanjan asetuksista, niin selvitämme asiaa yhdessä."
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
    "question": "Miten kanta-asiakaspisteet toimivat?",
    "keywords": [
      "pisteet",
      "kanta-asiakas",
      "kanta-asiakasohjelma",
      "palkinnot",
      "lunasta pisteet",
      "tervetuliaispisteet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Asetukset → Kanta-asiakasohjelma ja määritä kaksi sääntöä: kuinka monta pistettä asiakas saa jokaista X:n arvoista ostosta kohden ja montako pistettä (N) tarvitaan M:n suuruiseen alennukseen (voit myös määrittää tilauskohtaisen lunastusrajan). Voit myös antaa uusille jäsenille tervetuliaispisteet automaattisesti. Uusissa liikkeissä pisteet ovat aluksi pois käytöstä: kytke päälle Ota kanta-asiakasohjelma käyttöön ja täytä sääntö. Jos kytkin on päällä mutta sääntöä ei ole asetettu, sovellus varoittaa: ”Ansaintasääntöä tai lunastussääntöä ei ole vielä asetettu, joten myynneistä ei kerry pisteitä eikä niitä voi lunastaa.”"
      },
      {
        "type": "p",
        "text": "Liitä jäsen myyntiin ostoskorissa tai kassanäkymässä, niin pisteet kertyvät automaattisesti. Lunastaaksesi pisteitä syötä käytettävien pisteiden määrä. Onnistumisnäkymä näyttää ansaitut pisteet ja uuden saldon, esimerkiksi ”+22 pist. · yhteensä 122 pist.”. Laskulle myynnissä tai ennakkotilauksessa, jota ei ole vielä maksettu kokonaan, pisteet lisätään vasta, kun raha tulee maksuna, ja näkymässä lukee ”lisätään, kun maksu kuitataan” tai ”lisätään, kun loppu maksetaan noudossa”. Tilauksen mitätöinti vähentää tilauksesta kertyneet pisteet ja palauttaa lunastetut pisteet."
      },
      {
        "type": "p",
        "text": "Voit lisätä tai vähentää pisteitä myös käsin, esimerkiksi jos ostos jäi kirjaamatta: napauta asiakkaan tiedoissa Pisteet-kortin Säädä-painiketta, valitse Lisää tai Vähennä, syötä pisteet ja halutessasi anna syy (enintään 100 merkkiä). Asiakkaalta ei voi vähentää enempää pisteitä kuin hänellä on. Jokainen muutos jää pistehistoriaan, ja siihen tallentuvat saldo ennen muutosta ja sen jälkeen, syy sekä muutoksen tekijä."
      },
      {
        "type": "note",
        "text": "Pisteiden käsinmuutos tuli käyttöön versiossa v3.5. Pro-paketissa työntekijältä, jonka rooli vaatii hyväksynnän oikeudelle Pisteiden käsinmuutos (Työntekijä-rooli vaatii sen oletuksena), pyydetään vahvistettaessa esihenkilön tai omistajan PIN-koodi."
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
    "question": "Mihin jäsentasoja käytetään?",
    "keywords": [
      "jäsentaso",
      "taso",
      "vip",
      "kulta",
      "tason nousu",
      "jäsenyystaso"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jäsentasoilla (esim. Perus, Hopea, Kulta) on kaksi tehtävää: kampanjat voi kohdistaa tietylle tasolle (esim. 10 %:n alennus vain Kulta-tasolle), ja asiakkaan aseman näkee kassalla yhdellä silmäyksellä."
      },
      {
        "type": "p",
        "text": "Tasot voivat nousta automaattisesti määrittämiesi sääntöjen mukaan (esim. kertynyt ostosumma) tai ne voi määrittää käsin. Jos mitätöity tilaus oli laukaissut tason nousun, taso palautuu automaattisesti."
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
    "question": "Miten otan tiedoistani varmuuskopion?",
    "keywords": [
      "varmuuskopio",
      "varmuuskopiointi",
      "icloud",
      "google drive",
      "dropbox",
      "pilvi",
      "pilvivarmuuskopio"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Asetukset → Pilvivarmuuskopiointi, valitse iCloud, Google Drive tai Dropbox ja anna sille lupa. Sen jälkeen voit käynnistää varmuuskopioinnin käsin milloin tahansa. iCloudia varten iPadissa on oltava kirjauduttuna iCloudiin, iCloud Drive on oltava päällä ja DingPOSilla on oltava lupa käyttää sitä."
      },
      {
        "type": "p",
        "text": "Varmuuskopiot tallentuvat omalle pilvitilillesi. Jokainen pilvipalvelu säilyttää vain viimeisimmän kopion – yhden pilvivarmuuskopion ja yhden tuotekuvien tiedoston – ja jokainen varmuuskopiointi korvaa edellisen."
      },
      {
        "type": "note",
        "text": "Koska uusi varmuuskopio korvaa vanhan, älä ota uutta kopiota, jos epäilet tietojesi jo menneen pieleen (esimerkiksi joukko tuotteita on poistettu vahingossa). Lähetä meille sähköpostia, niin selvitetään yhdessä seuraava askel."
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
    "question": "iCloud-varmuuskopiointi näyttää tilan ”Ei yhdistetty” – mitä teen?",
    "keywords": [
      "icloud",
      "ei yhdistetty",
      "icloud drive",
      "varmuuskopiointi epäonnistui",
      "yhteys ei toimi"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS näyttää iCloudin yhdistettynä vain, kun se pystyy oikeasti käyttämään sitä. Jos tilana on Ei yhdistetty, tarkista iPadin Asetukset-sovelluksesta kolme asiaa:"
      },
      {
        "type": "steps",
        "items": [
          "Olet kirjautunut Apple-tilillesi.",
          "iCloud Drive on päällä.",
          "DingPOSilla on lupa käyttää iCloud Drivea."
        ]
      },
      {
        "type": "p",
        "text": "Kun kaikki kolme ovat päällä, palaa DingPOSin kohtaan Pilvivarmuuskopiointi, ja iCloud näkyy yhdistettynä. Varmuuskopiot tallennetaan DingPOSin omaan kansioon iCloud Drivessa."
      },
      {
        "type": "note",
        "text": "Ennen versiota v3.0 iCloud-varmuuskopiointi ei toiminut, vaan epäonnistui joka kerta virheeseen ”Backup.SyncError error 0”. Päivitä ensin DingPOS App Storesta."
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
    "question": "Miten siirrän tietoni uuteen iPadiin?",
    "keywords": [
      "siirto",
      "uusi ipad",
      "palautus",
      "siirrä tiedot",
      "vaihda laitetta"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Vanha iPad: avaa Asetukset → Pilvivarmuuskopiointi ja suorita varmuuskopiointi käsin. Varmista, että varmuuskopion aika päivittyi.",
          "Uusi iPad: asenna DingPOS ja käy asennusohjattu toiminto läpi.",
          "Uusi iPad: avaa Asetukset → Pilvivarmuuskopiointi, yhdistä sama pilvitili ja palauta tiedot."
        ]
      },
      {
        "type": "p",
        "text": "Kun napautat Palauta, näkyviin tulee ensin esikatselu: tämän iPadin ja varmuuskopion tuotteiden, tilausten ja asiakkaiden määrät rinnakkain sekä kaikki tilaukset, jotka palautus poistaisi. Tämän iPadin tiedot eivät muutu ennen kuin vahvistat. Jos varmuuskopio on tehty DingPOSin uudemmalla versiolla, sovellus pyytää päivittämään sen ensin. Myös tuotekuvat palautetaan."
      },
      {
        "type": "note",
        "text": "Palautus korvaa kaikki tämän iPadin tiedot varmuuskopiolla – tämän varmuuskopion jälkeen tälle iPadille tehdyt tilaukset katoavat. Varmista, että olet yhdistänyt oikean pilvitilin; jos palautat väärästä, käytä toimintoa Kumoa palautus."
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
    "question": "Säilyvätkö tietoni, jos poistan sovelluksen?",
    "keywords": [
      "poisto",
      "poista sovellus",
      "asennuksen poisto",
      "tietojen menetys",
      "tiedot katoavat"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ei. DingPOS tallentaa kaiken paikallisesti laitteellesi – sovelluksen poistaminen poistaa pysyvästi kaikki tuotteet, tilaukset, jäsenet ja asetukset, ellei pilvivarmuuskopiointi ole käytössä."
      },
      {
        "type": "note",
        "text": "Ota ennen sovelluksen poistamista aina varmuuskopio käsin ja varmista, että se onnistui. Asennuksen jälkeen palauta tiedot pilvestä."
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
    "question": "Sovellus näyttää ”Kauppasi tietoja ei voitu avata” – mitä teen?",
    "keywords": [
      "tietoja ei voitu avata",
      "ei aukea",
      "kaatuu",
      "kaatuu käynnistyksessä",
      "tietokanta",
      "kaupan tiedot"
    ],
    "content": [
      {
        "type": "p",
        "text": "Älä poista sovellusta. Tämä näkymä tarkoittaa, ettei DingPOS pystynyt lukemaan kauppasi tietoja, mutta tiedot ovat edelleen tällä iPadilla – sovelluksen poistaminen poistaa ne sovelluksen mukana."
      },
      {
        "type": "p",
        "text": "Napauta ensin Yritä uudelleen; jos se onnistuu, sovellus avautuu normaalisti. Jos ongelma toistuu, napauta Ota yhteyttä tukeen ja kerro meille, niin autamme palauttamaan tietosi. Tämä näkymä ei koskaan siirrä tai poista tiedostoja."
      },
      {
        "type": "p",
        "text": "Ensimmäinen käynnistys päivityksen jälkeen tai vanhemman version varmuuskopion palauttamisen jälkeen saattaa näyttää ensin tekstin ”Päivitetään tietoja…”. Silloin kauppasi tiedot siirtyvät uudempaan muotoon, mikä kestää sitä kauemmin, mitä enemmän tietoa on; sovellus avautuu itsestään, kun työ on valmis. Se ei ole jumiutunut."
      },
      {
        "type": "note",
        "text": "Yleisin syy on se, että sovellus suljettiin kesken palautuksen. Ennen versiota v3.0 tämä sai sovelluksen kaatumaan joka käynnistyksessä; versiosta v3.0 alkaen se pysähtyy tähän näkymään."
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
    "question": "Voiko kahta iPadia käyttää yhdessä?",
    "keywords": [
      "kaksi ipadia",
      "useampi laite",
      "synkronointi",
      "jako",
      "toinen kassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kunkin iPadin tiedot ovat toistaiseksi erillisiä – yhden tietojoukon jakamista reaaliajassa kahden laitteen kesken ei vielä tueta."
      },
      {
        "type": "p",
        "text": "Voit kopioida tiedot iPadilta toiselle pilvivarmuuskopiolla (varmuuskopiointi → palautus), mikä sopii hyvin laitteen vaihtoon tai toisen iPadin alkutietojen luomiseen. Kullakin laitteella erikseen kirjatut tilaukset eivät kuitenkaan yhdisty automaattisesti. Usean laitteen synkronointi on tiekartallamme."
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
    "question": "Palautin väärän pilvivarmuuskopion. Voinko kumota sen?",
    "keywords": [
      "kumoa palautus",
      "palautus",
      "väärä varmuuskopio",
      "palautusmerkinnät",
      "kadonneet tiedot",
      "palaa takaisin"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kyllä. Jokainen pilvipalautus säilyttää korvaamansa tiedot kopiona ennen palautusta. Kohdassa Asetukset → Pilvivarmuuskopiointi kortti näyttää, milloin viimeisin palautus tehtiin ja mistä. Napauta Kumoa palautus, tarkista esikatselu ja vahvista – tiedot palaavat sellaisiksi kuin ne olivat ennen palautusta ja sovellus latautuu uudelleen."
      },
      {
        "type": "list",
        "items": [
          "Kumoa palautus on itsekin palautus ja säilyttää kopion korvaamistaan tiedoista, joten sen napauttaminen uudelleen vaihtaa takaisin.",
          "Vain viimeisin kopio säilyy; seuraava palautus korvaa sen.",
          "Vain tiedot palaavat: varmuuskopion jälkeen lisättyjen tuotteiden kuva puuttuu."
        ]
      },
      {
        "type": "p",
        "text": "Jos haluat nähdä, kuka palautti tiedot, milloin ja mistä pilvivarmuuskopiosta, napauta samassa näkymässä Näytä palautusmerkinnät. Näet kunkin palautuksen ajankohdan, vuorossa olleen työntekijän ja lähteen, tuotteiden, tilausten ja asiakkaiden määrät ennen palautusta ja sen jälkeen sekä kaikki palautuksessa poistetut tilaukset. Merkinnät säilyvät tällä iPadilla, eikä palautus koskaan korvaa niitä."
      },
      {
        "type": "note",
        "text": "Palautuksen esikatselu ja Kumoa palautus toimivat kaikissa paketeissa; palautusmerkintöjen katselu on Pro-ominaisuus. Merkinnät tallennetaan myös ilman Prota (vain ilman tekijää), joten kun tilaat Pron myöhemmin, näet ne kaikki."
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
    "question": "Miten lisään työntekijän ja vaihdan, kuka on kassalla?",
    "keywords": [
      "henkilöstö",
      "työntekijä",
      "esihenkilö",
      "tili",
      "PIN-koodi",
      "vuorossa oleva työntekijä",
      "vaihda käyttäjää",
      "vuoronvaihto",
      "kassanhoitaja"
    ],
    "content": [
      {
        "type": "p",
        "text": "Napauta sivupalkista Henkilöstö. Ensimmäisellä kerralla luot omistajan: nimi ja nelinumeroinen PIN-koodi. Työntekijöiden lisääminen ja oikeuksien muuttaminen vaativat tämän PIN-koodin, joten muista se – sitä ei voi nollata."
      },
      {
        "type": "steps",
        "items": [
          "Napauta Henkilöstö-sivulla Lisää työntekijä, kirjoita nimi, valitse rooli (esihenkilö tai työntekijä) ja aseta nelinumeroinen PIN-koodi.",
          "Vuorossa oleva työntekijä näkyy sivupalkin alareunassa ja kassanäkymän oikeassa yläkulmassa. Vuoronvaihdossa napauta nimeä, valitse oma nimesi ja anna PIN-koodisi.",
          "Tästä lähtien jokaiseen tilaukseen, maksuun sekä varasto- tai pistemuutokseen tallentuu, kuka sen hoiti. Tieto näkyy tilausluettelossa ja tilauksen tiedoissa; mitätöityihin tilauksiin tallentuu myös mitätöijä."
        ]
      },
      {
        "type": "p",
        "text": "Kun joku lopettaa, käytä toimintoa Poista työntekijä käytöstä: hänen historiansa säilyy, ja voit ottaa hänet myöhemmin takaisin käyttöön. Nimen muuttaminen ei vaikuta vanhoihin tilauksiin – niihin jää nimi sellaisena kuin se oli silloin."
      },
      {
        "type": "note",
        "text": "Henkilöstö on Pro-ominaisuus (käytettävissä myös kokeilun aikana). Jos Pro päättyy, henkilöstötiedot ja jokaisen tilauksen hoitaja säilyvät, ja uudet tilaukset kirjataan omistajalle. Kun tilaat Pron uudelleen, kaikki palaa käyttöön."
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
    "question": "Mitä jos unohdan omistajan PIN-koodin?",
    "keywords": [
      "PIN-koodi",
      "unohtunut",
      "salasana",
      "nollaus",
      "omistaja",
      "palauta",
      "lukittu ulos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omistajan PIN-koodia ei voi nollata, eikä tukemmekaan voi avata sitä. PIN-koodi tallentuu kaupan tietojen mukana, joten kun poistat sovelluksen, asennat sen uudelleen ja palautat tiedot pilvestä, sama PIN-koodi palaa."
      },
      {
        "type": "p",
        "text": "Omistajaa luotaessa ja jokaisen omistajan PIN-koodin vaihdon yhteydessä näkyy varoitus ”Muista tämä PIN-koodi. Jos unohdat sen, sitä ei voi nollata.” Säilytä koodia paikassa, johon vain sinulla on pääsy."
      },
      {
        "type": "p",
        "text": "Ilman omistajan PIN-koodia kaikki sitä vaativa jää pois käytöstä: työntekijöiden lisääminen ja muokkaus, roolien oikeuksien muuttaminen sekä toimintolokin katselu. Työntekijät voivat jatkaa myyntiä ja päivittäisiä töitä omilla PIN-koodeillaan."
      },
      {
        "type": "note",
        "text": "Jos työntekijä unohtaa oman PIN-koodinsa, se ei haittaa: omistaja voi nollata sen kohdassa Henkilöstö."
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
    "question": "Miten työntekijöiden oikeudet ja esihenkilön hyväksynnät toimivat?",
    "keywords": [
      "oikeudet",
      "hyväksyntä",
      "esihenkilö",
      "alennusraja",
      "työntekijä",
      "omakustannus",
      "rooli"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oikeudella on kaksi arvoa: Sallittu tai Vaatii hyväksynnän – mitään ei ole kokonaan kielletty. Kun työntekijä yrittää toimintoa, joka vaatii hyväksynnän, sen tekemiseen oikeutettu työkaveri valitsee nimensä ja antaa PIN-koodinsa, jolloin toiminto menee läpi."
      },
      {
        "type": "list",
        "items": [
          "Toiminnot (varaston käsinmuutos, pisteiden käsinmuutos, tuotteiden hallinta, maksaminen alennusrajan ylittävällä alennuksella): yksi hyväksyntä kattaa sen yhden toiminnon.",
          "Näkymät (kustannukset ja kate, Tilastot, Tuloslaskelma ja kulut, Asetukset, varmuuskopiointi ja palautus): hyväksyntä avaa näkymän, kunnes vuorossa oleva työntekijä vaihtuu tai sovellus siirtyy taustalle.",
          "Alennusraja koskee käsin annettuja alennuksia ja tarkistetaan kerran kassalla; automaattiset kampanjat ja pisteiden käyttö eivät lasketa siihen."
        ]
      },
      {
        "type": "p",
        "text": "Tehdasasetukset: Esihenkilöt saavat tehdä kaiken paitsi varmuuskopioinnin ja palautuksen sekä tuloslaskelman ja kulujen katselun, eikä alennusrajaa ole; työntekijät tarvitsevat hyväksynnän kaikkeen, ja heidän alennusrajansa on 10 %. Omistaja saa aina tehdä kaiken, eikä hänen oikeuksiaan voi muokata. Voit muuttaa asetuksia kohdassa Henkilöstö → Roolien oikeudet: napauta Muokkaa ja tallenna kerran – muutos tulee voimaan heti kaikille."
      },
      {
        "type": "note",
        "text": "Mitätöinneille, palautuksille, laskulle myynneille ja ostoille ei tarkoituksella ole määritetty oikeuksia; niihin vain kirjataan, kuka ne hoiti. Voit tarkastella niitä myöhemmin toimintolokista."
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
    "question": "Mistä näen, kuka mitätöi tilauksen tai muutti varastosaldoa tai hintaa?",
    "keywords": [
      "toimintoloki",
      "valvonta",
      "kuka muutti",
      "mitätöinti",
      "hinnanmuutos",
      "varastomuutos",
      "uudelleenlaskenta",
      "pistesäätö",
      "poistettu tuote",
      "hyväksynnät",
      "loki"
    ],
    "content": [
      {
        "type": "p",
        "text": "Käytä toimintolokia. Napauta Henkilöstö-sivun oikeasta yläkulmasta Toimintoloki ja anna omistajan PIN-koodi. Näet kaupan arkaluonteiset toiminnot uusimmat ensin: mitätöinnit, palautukset, varastomuutokset ja uudelleenlaskennat, manuaaliset pistesäädöt, hyväksynnät, henkilöstö- ja oikeusmuutokset, omistajan PIN-koodin vaihdot, veroasetukset, tuotteiden hinta- ja omakustannusmuutokset sekä tuotteiden poistot. Tavallisia kassalla tehtyjä myyntejä ei listata."
      },
      {
        "type": "list",
        "items": [
          "Jokaisesta merkinnästä näkyy, mitä se koski, kuka teki mitä ja milloin sekä lopputulos – esimerkiksi ”M-hinta $390 → $350”. Mitätöinnin, palautuksen, varastomuutoksen tai pistesäädön syy näkyy merkinnän kolmannella rivillä.",
          "Voit suodattaa työntekijän (myös käytöstä poistetut), toiminnon tyypin sekä jakson Tänään / Tämä viikko / Tämä kuukausi mukaan.",
          "Napauta merkintää, joka viittaa tilaukseen, tuotteeseen tai asiakkaaseen, niin avautuu sen tietosivu.",
          "Tilauksen, tuotteen ja jokaisen työntekijän sivulla on oma merkintäluettelonsa, jossa näkyvät vain kyseistä tilausta, tuotetta tai työntekijää koskevat merkinnät.",
          "Poistetuista tuotteista lokissa näkyy edelleen silloinen nimi ja hinta."
        ]
      },
      {
        "type": "note",
        "text": "Lokiin tallentuu tietoja kaikilla paketeilla; vain sen katselu on Pro-ominaisuus, joten ajalta, jolloin Pro-tilaus oli päättynyt, tallentuneet merkinnät tulevat näkyviin, kun tilaat Pron uudelleen. Loki kulkee mukana pilvivarmuuskopioissa."
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
    "question": "Miten ilmainen kokeilu toimii?",
    "keywords": [
      "kokeilu",
      "ilmainen",
      "30 päivää",
      "ilmainen kokeilu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat 30 päiväksi käyttöösi kaikki Pro-paketin ominaisuudet ensimmäisestä asennuksesta alkaen, myös työntekijätilit, oikeudet ja toimintoloki. Tiliä ei tarvita."
      },
      {
        "type": "p",
        "text": "Jos tilaat jonkin paketin kokeilun aikana, kokeilu päättyy heti ja ostamasi paketti on voimassa siitä lähtien. Kokeilun jälkeen Pro-ominaisuudet, kuten henkilökunta ja toimintoloki, ovat käytettävissä vain Pro-tilauksella. Laajennetut raportit eivät vaadi Pro-tilausta: versiosta 3.4 alkaen ne sisältyvät kaikkiin paketteihin."
      },
      {
        "type": "p",
        "text": "Kokeilun viimeisten 7 päivän aikana ja viimeisenä päivänä sovellus muistuttaa kerran kummassakin vaiheessa, kuinka monta päivää on jäljellä, että kassa keskeytyy kokeilun päättyessä ja että tietosi säilyvät."
      },
      {
        "type": "p",
        "text": "Kaikki kokeilun aikana luomasi tiedot (tuotteet, tilaukset, jäsenet) säilyvät kokonaisuudessaan. Tietojasi ei koskaan poisteta, tilasit paketin myöhemmin tai et."
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
    "question": "Katoavatko tietoni, kun ilmainen kokeilu päättyy?",
    "keywords": [
      "kokeilu päättyy",
      "kokeilun jälkeen",
      "kassa lukittu",
      "tiedot",
      "vanheneminen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ei, tietosi pysyvät laitteellasi aina. Kun kokeilu päättyy, kassa lukitaan, mutta voit edelleen selata tilauksia, katsoa raportteja ja hallita tuotteita."
      },
      {
        "type": "p",
        "text": "Tilaa paketti milloin tahansa, niin kassa avautuu heti ja kaikki tietosi ovat täsmälleen sellaisina kuin jätit ne."
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
    "question": "Mitä eroa on Lite-, Standard- ja Pro-paketilla?",
    "keywords": [
      "paketit",
      "lite",
      "standard",
      "pro",
      "ero",
      "vertailu",
      "päivitys",
      "paketin vaihto",
      "hinnat"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kaikki kolme pakettia sisältävät täyden kassatoiminnan, tuotteet, tilaukset (mitätöinnit, palautukset ja vaihdot mukaan lukien), raportit (versiosta 3.4 alkaen myös laajennetut raportit ja kuukausittainen tuloslaskelma, versiosta 3.6 alkaen veroraportti ja sen vienti) ja pilvivarmuuskopion. Erona ovat kaupan pyörittämiseen tarkoitetut työkalut:"
      },
      {
        "type": "list",
        "items": [
          "Lite: yhden hengen myyntikojulle, joka tarvitsee kassan ja tuotteet.",
          "Standard: lisää kampanjat, alennusesiasetukset, kanta-asiakaspisteet ja -tasot, varastoseurannan, ostotilaukset, laskulle myynnin, ennakkotilaukset ja maksukulujen määrät.",
          "Pro: lisää työntekijätilit ja oikeudet, esihenkilön hyväksynnän, toimintolokin ja palautusmerkinnät – kaupoille, joissa on henkilökuntaa."
        ]
      },
      {
        "type": "p",
        "text": "Onko sinulla jo Standard? Päivitä Pro-pakettiin Tilaus-sivulta: laskutusjakso pysyy samana, päivitys tulee voimaan heti ja Apple veloittaa erotuksen suhteutettuna jäljellä olevaan aikaan. Siirtyminen Prosta takaisin Standardiin tulee voimaan uusiutumisen yhteydessä. Hinnat näkyvät sovelluksessa, ja paketteja voi vertailla Hinnoittelu-sivullamme."
      },
      {
        "type": "note",
        "text": "Paketin vaihtaminen halvempaan ei koskaan poista tietoja. Paketin ulkopuoliset ominaisuudet menevät tauolle, tiedot säilyvät, ja tilaamalla uudelleen ne palaavat käyttöön."
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
    "question": "Miten tilaan, peruutan tai palautan oston?",
    "keywords": [
      "tilaa",
      "peruuta tilaus",
      "palauta osto",
      "hinta",
      "laskutus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tilaukset hoidetaan App Storen sovelluksensisäisenä ostona – paketit ja hinnat näkyvät sovelluksessa. Maksun käsittelee Apple, emmekä koskaan näe maksutietojasi."
      },
      {
        "type": "list",
        "items": [
          "Peruutus: hallitse tilausta laitteesi kohdassa Asetukset → Apple-tili → Tilaukset. Peruuta vähintään 24 tuntia ennen kuluvan jakson päättymistä, ettei tilaus uusiudu.",
          "Palautus: kun vaihdat laitetta tai asennat sovelluksen uudelleen, napauta DingPOSin Tilaus-sivulla \"Palauta osto\".",
          "Paketin vaihto: valitse uusi paketti DingPOSin Tilaus-sivulla. Päivitykset (Standardista Proon, kuukausitilauksesta vuositilaukseen) tulevat voimaan heti, ja Apple veloittaa erotuksen suhteutettuna; siirtyminen halvempaan pakettiin tulee voimaan uusiutumisen yhteydessä."
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
    "question": "Miten asetan ostosummarajaan perustuvan alennuksen?",
    "keywords": [
      "ostosumman raja",
      "alennus summan perusteella",
      "ostoraja",
      "opas",
      "käyttöönotto",
      "ohje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avaa Asetukset › Kampanjat › Lisää, valitse ostosummaan perustuva kampanjatyyppi ja toimi näin:"
      },
      {
        "type": "steps",
        "items": [
          "Aseta summaraja ja alennus (kiinteä summa tai prosentti).",
          "Valitse kohdistus: tietyt tuotteet, tietyt luokat tai jätä tyhjäksi, jolloin kampanja koskee koko myymälää.",
          "Aseta ajoitus: alkamispäivä on pakollinen; jätä päättymispäivä tyhjäksi, jos kampanja on toistaiseksi voimassa.",
          "Valitse Tallenna – kampanja aktivoituu ajastuksen mukaan ja tulee voimaan automaattisesti kassalla ilman koodeja."
        ]
      },
      {
        "type": "note",
        "text": "Raja tarkistetaan kohdistukseen kuuluvien tuotteiden välisummasta, ei koko ostoskorista. Kampanja ”osta juomia 1000 $:lla” laskee rajaan vain juomat, eikä tuotteita, jotka on merkitty ”ei kampanjoihin”, lasketa koskaan mukaan."
      },
      {
        "type": "p",
        "text": "Tästä kysytään usein: jos suuremman prioriteetin kampanja tulee voimaan ensin, raja tarkistetaan jo alennetusta summasta – ostoskori, joka näyttää ylittävän rajan, voi jäädä siitä hieman alle. Jos haluat, että raja tarkistetaan ensin, anna sille pienempi prioriteettinumero."
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
    "question": "Miten teen ”osta 2, saat 1 ilmaiseksi” ja muut n:nnen tuotteen tarjoukset?",
    "keywords": [
      "osta yksi saat yksi",
      "osta 2 saat 1",
      "kolmas ilmaiseksi",
      "bogo",
      "opas",
      "käyttöönotto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Luo kampanja, jonka tyyppi on Osta X / saat Y: aseta ostettava määrä, saatava määrä ja alennusprosentti (100 % = ilmainen). Rajaa kampanja tiettyihin tuotteisiin tai kokonaiseen luokkaan – saman luokan eri tuotteet muodostavat yhden ryhmän."
      },
      {
        "type": "list",
        "items": [
          "Alennettava tuote on ryhmän halvin, ja sen arvona käytetään sen nykyistä voimassa olevaa hintaa – jos aiempi kampanja on jo alentanut sitä, Osta X / saat Y -alennus lasketaan alennetusta hinnasta, ei listahinnasta.",
          "Jos haluat, että ”3. ilmaiseksi” -merkintä näyttää täyden listahinnan, anna tälle kampanjalle pienin prioriteettinumero, jolloin se lasketaan ensin. Kun koko ostoskorin alennus lasketaan ensin, ilmaisen tuotteen näytetty vähennys on listahintaa pienempi – kyse on laskentajärjestyksen ominaisuudesta, jonka olemme tarkistaneet perusteellisesti, ei virheestä. Molemmat järjestykset johtavat lähes samaan loppusummaan; vain alennuksen näkyvä kohta muuttuu."
        ]
      },
      {
        "type": "p",
        "text": "Vinkki: aseta pääkampanjasi prioriteetissa ensimmäiseksi, jotta kuitin alennuserittely vastaa markkinointiviestiäsi."
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
    "question": "Miten asetan kaksinkertaiset pisteet tai muun pistekertoimen?",
    "keywords": [
      "pistekerroin",
      "kaksinkertaiset pisteet",
      "bonuspisteet",
      "opas",
      "käyttöönotto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Luo kampanja, jonka tyyppi on Pistekerroin, ja aseta kerroin (kokonaisluku, vähintään 2). Voit halutessasi lisätä summarajan (esim. ostat 500 $:lla → kaksinkertaiset pisteet) ja ajoituksen (esim. vain lauantaisin)."
      },
      {
        "type": "list",
        "items": [
          "Kun useampi kerroin täyttyy yhtä aikaa, vain suurin on voimassa – kertoimet eivät koskaan kerro keskenään eivätkä kasaannu.",
          "Summaraja tarkistetaan pisteiden käytön jälkeen: jos pisteiden käyttö laskee loppusumman rajan alle, kerroin ei tällä kertaa laukea.",
          "Kassalla on valittava jäsen, jotta pisteitä kertyy – ilman jäsentä tehdyt tilaukset eivät tuota pisteitä, joten kertoimella ei ole mitä kertoa."
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
    "question": "Miten teen jäsentason tai syntymäpäivän erikoistarjouksen?",
    "keywords": [
      "jäsentaso",
      "syntymäpäivätarjous",
      "syntymäkuukausi",
      "vip",
      "opas",
      "käyttöönotto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Luo ensin tasot kohdassa Asetukset → Jäsentasot (esim. Kulta) ja kohdista kampanja sitten kyseiselle tasolle. Syntymäpäivätarjouksissa valitse kohderyhmäksi Syntymäkuukausi ja täytä Käyttöraja asiakasta kohden."
      },
      {
        "type": "list",
        "items": [
          "Jäsen on valittava kassalla, jotta tarjous laukeaa – oikeus arvioidaan sillä hetkellä valitun jäsenen perusteella.",
          "Syntymäpäiväoikeus perustuu jäsenen syntymäkuukauteen, joten täytä syntymäpäiväkenttä; jäseniä, joilta se puuttuu, ei koskaan pidetä syntymäpäiväasiakkaina.",
          "Syntymäkuukausikampanja tarvitsee asiakaskohtaisen käyttörajan, joka lasketaan kalenterivuosittain: raja 1 tarkoittaa, että kukin asiakas voi käyttää tarjouksen kerran vuodessa, ja se nollautuu seuraavana vuonna. Ilman rajaa kampanjaa ei voi tallentaa.",
          "Automaattiset tasonnostot arvioidaan, kun kassatapahtuma valmistuu; jos tilaus mitätöidään, sen laukaisema tasonnosto perutaan automaattisesti."
        ]
      },
      {
        "type": "note",
        "text": "Ennen versiota 3.2 syntymäkuukausikampanja näytti virheen eikä sitä voinut tallentaa, vaikka asiakaskohtainen käyttöraja oli täytetty. Jos näin käy sinulle, päivitä DingPOS App Storesta."
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
    "question": "Miten asetan lahjan, maksullisen lisätuotteen tai pakettihinnan?",
    "keywords": [
      "lahja ostoksen mukana",
      "lisätuote",
      "pakettihinta",
      "osta a saat b",
      "opas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yhdistelmätarjouksia on kolmea tyyppiä: lahja ostoksen mukana (osta A, saat B), maksullinen lisätuote (lisää X €, saat Y) ja pakettihinta (mitkä tahansa N tuotetta hintaan X €). Lahjat ja maksulliset lisätuotteet odottavat kassanhoitajan vahvistusta; pakettihinnat tulevat voimaan automaattisesti."
      },
      {
        "type": "p",
        "text": "Lahjat ja maksulliset lisätuotteet eivät koskaan muuta ostoskoria itsestään. Kun ehdot täyttyvät, kassanäkymään ilmestyy ehdotusbanneri, ja ostoskori muuttuu vasta, kun kassanhoitaja napauttaa bannerin lahja- tai +-painiketta (Valitse lahja tai Valitse lisätuote) – tämä on tarkoituksellista, koska lahjat koskevat fyysistä varastoa: jonkun on varmistettava, että tuotetta on saatavilla ja että asiakas haluaa sen."
      },
      {
        "type": "list",
        "items": [
          "Kun olet napauttanut bannerin ✕-painiketta (Hylkää), sama ehdotus ei tule uudelleen tälle ostoskorille; uusi tai tyhjennetty ostoskori tuo ehdotuksen uudelleen esiin.",
          "Jos ostoskori ei enää täytä ehtoja (esimerkiksi lahjan käynnistänyt tuote poistetaan), lahja tai lisätuote poistetaan automaattisesti ja ylhäällä näytetään viesti. Sitä ei lasketa käyttökerraksi (versiosta 3.6 alkaen).",
          "Versiosta 3.4 alkaen ratkaisemattomat tarjoukset eivät estä maksamista: maksupainikkeen alla oleva keltainen rivi, kuten ”1 ratkaisematon tarjous jää käyttämättä”, kertoo, montako tarjousta jää pois (napauta sitä nähdäksesi, mitkä), ja tilaus menee läpi ilman niitä. Jos haluat, että maksaminen odottaa kuten ennen, ota käyttöön Ratkaise tarjoukset ennen maksua kohdassa Asetukset → Laitteen asetukset; se koskee vain tätä iPadia.",
          "Lahja- ja lisätuoterivejä ei voi alentaa muilla rahallisilla kampanjoilla, eivätkä niiden hinnat kerrytä muiden kampanjoiden ostosummarajoja."
        ]
      },
      {
        "type": "p",
        "text": "Pakettihinnat (automaattisia versiosta 2.4 lähtien): aina kun ostoskorista voi muodostua paketti, DingPOS ryhmittelee sen ja sisällyttää sen loppusummaan – ilman kysymystä, eikä paketteja voi jakaa."
      },
      {
        "type": "list",
        "items": [
          "Paketti muodostuu vain, jos ostoskori halpenee. Samanhintaisista tuotteista ryhmitellään ensin alentamattomat, ja jo alennuksessa olevat tuotteet säilyttävät alennuksensa.",
          "Mitkä tuotteet ryhmitellään yhteen, riippuu vain ostoskorin sisällöstä, ei koskaan skannausjärjestyksestä.",
          "Jokaisessa pakettiin kuuluvassa tuotteessa näkyy sen osuus pakettialennuksesta, ja jokaisen rivin summa on alennusten jälkeen.",
          "Kassalla paketit ryhmitellään uudelleen viimeisimmillä hinnoilla; jos tulos muuttuu, sinua pyydetään vahvistamaan uusi loppusumma."
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
    "question": "Miten ajastan kampanjan ja asetan Happy Hourin?",
    "keywords": [
      "ajoitus",
      "happy hour",
      "viikonpäivä",
      "keskiyö",
      "kampanjan ajastus",
      "opas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jokaisen kampanjan ajoituksessa on kolme tasoa: ajanjakso (alku pakollinen, loppu valinnainen), päivittäinen aikaväli (Happy Hour) ja valitut viikonpäivät. Kaikkien kolmen on täytyttävä, jotta kampanja laukeaa."
      },
      {
        "type": "list",
        "items": [
          "Keskiyön yli ulottuvissa aikaväleissä (esim. 22.00–02.00) viikonpäivä määräytyy aikavälin alkamispäivän mukaan: jos vain perjantai on valittu, lauantain klo 01.30 lasketaan yhä perjantain jaksoon ja kampanja laukeaa – mutta lauantain klo 23.30 ei.",
          "Päättymispäivä on ehdoton raja – vaikka Happy Hour -aikaväli olisi vielä käynnissä, kampanja loppuu heti päättymispäivän ylityttyä.",
          "Aika luetaan iPadin laitekellosta, joten varmista, että laitteen aikavyöhyke ja kellonaika ovat oikein."
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
    "question": "Prioriteetti, yhdistettävyys ja kampanjoiden pysäytys – miten ne toimivat?",
    "keywords": [
      "prioriteetti",
      "yhdistettävyys",
      "pysäytä myöhemmät kampanjat",
      "päällekkäiset kampanjat",
      "opas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kun useampi kampanja täyttyy yhtä aikaa, kolme asetusta ohjaa järjestystä ja vuorovaikutusta:"
      },
      {
        "type": "list",
        "items": [
          "Prioriteetti: pienemmät numerot lasketaan ensin. Voit vaihtaa järjestystä vetämällä kampanjaluettelossa.",
          "Yhdistettävissä muihin kampanjoihin (oletuksena päällä): kun asetus on pois päältä, tuotetason kampanja lukitsee vain ne rivit, joita se alensi – muut tuotteet voivat yhä saada myöhempiä tuotetason kampanjoita; yhdistämätön koko ostoskorin kampanja estää kaikki myöhemmät koko ostoskorin kampanjat.",
          "Pysäytä myöhemmät kampanjat, kun tämä toteutuu: kun tämä kampanja on tullut voimaan, muita alennuksia ei enää lasketa – mutta pistekertoimet ja lahjaehdotukset eivät vaikuta."
        ]
      },
      {
        "type": "note",
        "text": "Myöhemmät kampanjat lasketaan jo alennetusta summasta: 10 % alennus ja 5 % alennus ei ole 15 % alennus – toinen alennus lasketaan ensimmäisen jälkeisestä loppusummasta. DingPOS ei myöskään etsi asiakkaalle edullisinta yhdistelmää; järjestyksen määräävät kokonaan sinun asettamasi prioriteetit."
      },
      {
        "type": "p",
        "text": "Hauska fakta: jos alennus pyöristyy nollaan, sitä ei lasketa käytetyksi – eikä se kuluta käyttörajaa."
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
    "question": "Tuleeko DingPOSiin korttimaksujen integraatio?",
    "keywords": [
      "maksuintegraatio",
      "korttimaksut",
      "korttipääte",
      "maksupääte",
      "maksuyhdyskäytävä"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS ei tällä hetkellä käsittele rahaliikennettä: maksutavat ovat kirjanpidon merkintöjä, ja varsinaiset maksut kulkevat nykyisen maksupäätteesi tai maksusovelluksesi kautta."
      },
      {
        "type": "p",
        "text": "Maksujen käsittelyn integrointi riippuu käyttäjien todellisesta kysynnästä. Jos tarvitset sitä, kirjoita meille, minkä palvelun haluaisit liittää (mikä maksunvälittäjä, mikä päätelaite) ja miten sitä käyttäisit. Priorisoimme kehitystä pyyntöjen määrän mukaan."
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
    "question": "Tuleeko tuki sähköisille laskuille ja kuittitulostukselle?",
    "keywords": [
      "sähköinen lasku",
      "lasku",
      "kuitti",
      "kuittitulostin",
      "tulostin"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ei vielä. Sähköinen laskutus ja kuittien tulostus edellyttävät laskutuslaitteiden ja kuittitulostimien hankkimista testausta ja kehitystä varten, mikä on merkittävä kustannus. Pienenä tiiminä suunnittelemme tätä, kun käyttäjäkunta on kasvanut ja tulot ovat vakaat."
      },
      {
        "type": "p",
        "text": "Jos tarvitset tätä, kirjoita meille käyttämäsi laitteen malli. Priorisoimme kehitystä pyyntöjen määrän mukaan."
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
    "question": "Tukeeko DingPOS fyysisiä viivakoodinlukijoita?",
    "keywords": [
      "viivakoodinlukija",
      "viivakoodin lukija",
      "lukijapistooli",
      "bluetooth",
      "usb",
      "laitteisto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Viivakoodin skannaus kameralla tuotteiden lisäämiseen toimii jo. Fyysisiä lukijoita (USB / Bluetooth) ei vielä tueta virallisesti: kuten muutkin laiteominaisuudet, ne vaativat testaus- ja kehityslaitteiden hankintaa, ja niitä suunnitellaan käyttäjäkunnan kasvaessa."
      },
      {
        "type": "note",
        "text": "Kassan hakukenttä tunnistaa viivakoodit, joten näppäimistötilassa toimiva lukija voisi teoriassa kirjoittaa koodin siihen ja hakea tuotteet esiin. Emme ole kuitenkaan varmistaneet tätä oikealla laitteella, joten se ei ole virallisesti tuettu. Jos olet testannut toimivan lukijan, kerro meille malli!"
      },
      {
        "type": "p",
        "text": "Jos tarvitset tätä, kirjoita meille. Priorisoimme kehitystä pyyntöjen määrän mukaan."
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
    "question": "Onko DingPOSiin tulossa kuukausittainen maksujen täsmäytysraportti?",
    "keywords": [
      "kuukausittainen täsmäytysraportti",
      "maksujen täsmäytys",
      "kuukauden päätös",
      "kuukausiraportti",
      "ostovelat",
      "myyntisaamiset"
    ],
    "content": [
      {
        "type": "p",
        "text": "Versiosta 3.4 alkaen Tulos-välilehti näyttää kunkin kuukauden liikevoiton tuotteiden omakustannusten, maksukulujen ja kulujen jälkeen – katso ”Miten näen, paljonko tienasin oikeasti kunakin kuukautena?” Versiosta 3.6 alkaen veroraportti vie valitun jakson (esimerkiksi Tämä kuukausi) tiedot kirjanpitäjällesi CSV-tiedostona, Excel-työkirjana tai PDF-raporttina, ja mukana ovat myynti, vero, kunkin maksutavan saapuneet maksut ja myyntisaamiset. Tulosta ja muita raportteja ei voi vielä viedä, mutta kaikki täsmäytykseen tarvittava löytyy jo sovelluksesta:"
      },
      {
        "type": "list",
        "items": [
          "Valitse Tilastot-välilehdellä Tämä kuukausi, niin näet kuukauden liikevaihdon, saapuneet maksut, myyntikatteen ja maksutapojen jakauman.",
          "Kuukausilaskulla tehdyt toimittajaostot kertyvät Ostot-kohdan Maksamattomat laskut -näkymään, jossa koko kuukauden voi kuitata kerralla.",
          "Asiakkaille laskulle myydyt tuotteet kertyvät kohtaan Tilaukset → Myyntisaamiset, jossa koko kuukauden voi kuitata kerralla."
        ]
      },
      {
        "type": "p",
        "text": "Jos tarvitset veroraporttia laajemman kuukausittaisen täsmäytysraportin, jonka voi viedä tai tulostaa, kirjoita meille tarvitsemasi kentät. Priorisoimme kehitystä pyyntöjen määrän mukaan."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
