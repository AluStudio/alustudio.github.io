// Generated from en and the nl translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync nl`, then `npm run l10n -- dingpos apply nl`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Aan de slag",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Afrekenen",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Bestellingen en retouren",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Producten, voorraad en inkoop",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Rapporten",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Acties en spaarprogramma",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Back-up en gegevens",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Personeel en toestemmingen",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Abonnement & facturering",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Instelgidsen voor acties",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Binnenkort beschikbaar",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Hoe stel ik mijn winkel in DingPOS in?",
    "keywords": [
      "instellen",
      "starten",
      "onboarding",
      "eerste keer",
      "installatiewizard",
      "winkel openen",
      "land kiezen",
      "valuta",
      "btw-tarieven",
      "kassa-app instellen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Als je DingPOS voor het eerst opent, helpt een installatiewizard je om je winkel in een paar minuten en twee stappen in te stellen:"
      },
      {
        "type": "steps",
        "items": [
          "Kies je land of regio. Bovenaan de lijst staat het land of de regio waarin deze iPad zich bevindt, gevolgd door de meest gekozen markten; daaronder staan alle 175 landen en regio's waar DingPOS in de App Store staat, doorzoekbaar op naam in de taal van de app of in het Engels. Je keuze vult de valuta, de btw-tarieven en de btw-modus in.",
          "Vul bij Je winkel de winkelnaam in, voeg eventueel een logo toe en controleer de valuta, de btw-tarieven en de btw-modus (inclusief / exclusief). De valuta staat standaard op die van je land; tik erop om uit 130 valuta's te kiezen. De lijst met btw-tarieven toont de standaardtarieven van je land: geef een tarief een andere naam, wijzig het percentage, verwijder een tarief of tik op Voeg btw-tarief toe voor nog een rij. Een winkel in British Columbia past bijvoorbeeld de eerste rij aan naar “GST 5” en voegt een rij “PST 7” toe."
        ]
      },
      {
        "type": "p",
        "text": "Tik op Ga door en je ziet “Ding! Je winkel is klaar.” DingPOS stelt ook twee betaalmethoden voor je in: Contant en Creditcard. Voeg daarna je producten toe onder Producten en begin met verkopen."
      },
      {
        "type": "note",
        "text": "De valuta kun je na de installatie niet meer wijzigen; de btw-tarieven en de btw-modus kun je later allebei aanpassen in Instellingen → Winkelgegevens. In de Verenigde Staten, Canada, Brazilië en Micronesië hangt het tarief af van de staat, provincie of stad. Daarom is het tariefveld daar eerst leeg en vul je het tarief in dat je rekent om door te gaan. Een tarief moet hoger zijn dan 0: een winkel die geen btw rekent, verwijdert de rij. In Duitsland, Frankrijk, Italië en andere Europese landen bevat de lijst ook de verlaagde tarieven die in de plaatselijke detailhandel gangbaar zijn, onder de plaatselijke belastingnaam, zoals “MwSt. 19%” en “MwSt. 7%” in Duitsland; verlaagde tarieven worden standaard niet op nieuwe producten toegepast, dus schakel ze per product in. De lijst met 175 landen en de keuze van valuta kwamen met v3.2; eerdere versies boden 15 landen."
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
    "question": "Werkt DingPOS zonder internet?",
    "keywords": [
      "offline",
      "zonder internet",
      "wifi",
      "netwerk",
      "geen verbinding",
      "markt",
      "kassa zonder internet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. DingPOS werkt offline — afrekenen, productbeheer, voorraad en rapporten draaien allemaal lokaal op je iPad, zonder netwerk. Nachtmarkten, pop-upkramen en andere locaties zonder Wi-Fi werken probleemloos."
      },
      {
        "type": "p",
        "text": "Slechts twee dingen hebben een verbinding nodig: de cloudback-up (uploaden naar je eigen iCloud / Google Drive / Dropbox) en de controle van je abonnementsstatus."
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
    "question": "Moet ik een account aanmaken?",
    "keywords": [
      "account",
      "aanmelden",
      "inloggen",
      "registreren",
      "privacy"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nee. DingPOS heeft geen accountsysteem — download de app en begin met verkopen. Je producten, bestellingen en klantgegevens blijven allemaal op je iPad. Ze komen alleen bij ons terecht als je vanuit Instellingen een supportrapport verstuurt, waarbij een kopie van je winkelgegevens wordt bijgevoegd zodat we het probleem kunnen reproduceren."
      },
      {
        "type": "p",
        "text": "Als je de cloudback-up inschakelt, log je in bij je eigen cloudaccount (iCloud, Google Drive of Dropbox). Back-ups staan in jouw account — wij hebben er geen toegang toe."
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
    "question": "Welke apparaten worden ondersteund?",
    "keywords": [
      "apparaat",
      "iphone",
      "mac",
      "ipad",
      "systeemvereisten",
      "versie",
      "iPadOS"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS ondersteunt op dit moment iPads met iPadOS 17.4 of nieuwer, en is in de eerste plaats ontworpen voor liggend gebruik."
      },
      {
        "type": "p",
        "text": "iPhone en Mac worden nog niet ondersteund. Wil je dat we een ander apparaat ondersteunen? Schrijf ons en vertel hoe je het zou gebruiken."
      },
      {
        "type": "note",
        "text": "Elke iPad die iPadOS 17 draait, kan worden bijgewerkt naar 17.4, dus er valt geen enkel model af. Een iPad die nog op iPadOS 17.0–17.3 staat, heeft eerst een systeemupdate nodig, via Instellingen → Algemeen → Software-update, voordat DingPOS v3.5 of nieuwer erop kan worden geïnstalleerd."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kan ik na het instellen de valuta, het btw-tarief of de btw-modus nog wijzigen?",
    "keywords": [
      "valuta",
      "btw-modus",
      "wijzigen",
      "vergrendeld",
      "btw-tarief",
      "btw-tarieven",
      "inclusief btw",
      "exclusief btw"
    ],
    "content": [
      {
        "type": "p",
        "text": "De btw kun je wijzigen; de valuta niet. Btw-tarieven en de btw-modus pas je allebei aan op de kaart Btw in Instellingen → Winkelgegevens, en een wijziging geldt alleen voor latere verkopen: eerdere bestellingen, retouren en rapporten behouden de btw-bedragen en de modus waarmee ze zijn vastgelegd."
      },
      {
        "type": "list",
        "items": [
          "Btw-tarieven: voeg er een toe, geef een tarief een andere naam, wijzig het percentage of verwijder het — zie “Hoe wordt de btw berekend?”",
          "Btw-modus (inclusief / exclusief): tik op de andere modus en de bevestiging rekent een voorbeeld uit met je eerste btw-tarief, zoals “een artikel van NT$100 met 5% btw: de klant betaalt NT$105”. De prijzen behouden hun bedragen en een openstaande winkelmand wordt in de nieuwe modus opnieuw berekend zodra je teruggaat naar de kassa. De modus kun je sinds v3.5 omzetten; eerdere versies vergrendelen hem bij de installatie.",
          "Na een omschakeling wordt bij een volledige retour nog steeds het oorspronkelijke bedrag van de bestelling terugbetaald. Een omruiling (met vervangende artikelen) op een bestelling die in de andere modus is verkocht, wordt geblokkeerd: zet de modus terug, of neem de artikelen retour en reken ze opnieuw af."
        ]
      },
      {
        "type": "p",
        "text": "De valuta is vergrendeld zodra de installatie klaar is. Elke eerdere bestelling is erin vastgelegd, dus tussentijds van valuta wisselen zou je rapporten onbetrouwbaar maken. Controleer de valuta daarom in de stap Je winkel van de installatie: die staat standaard op de valuta van je land en je kunt erop tikken om een andere te kiezen."
      },
      {
        "type": "note",
        "text": "Als je winkel net open is en je nog geen belangrijke gegevens hebt, kun je de app verwijderen en opnieuw installeren om de installatie nogmaals te doorlopen. Controleer eerst dat je niets kwijtraakt wat je wilt bewaren."
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
    "question": "Hoe wijzig ik de taal van de app?",
    "keywords": [
      "taal",
      "engels",
      "chinees",
      "japans",
      "spaans",
      "meertalig",
      "taal wijzigen",
      "taalinstelling",
      "omschakelen"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS ondersteunt 32 talen, waaronder Engels, traditioneel en vereenvoudigd Chinees, Japans, Koreaans, Thais, Vietnamees, Indonesisch, Maleis, Spaans (Latijns-Amerika), Portugees (Brazilië), Frans en Duits. Ga naar Instellingen → Apparaatvoorkeuren en tik op Taal van de app. Hiermee open je de pagina van DingPOS in de app Instellingen van de iPad, waar je onder Taal de taal kiest."
      },
      {
        "type": "p",
        "text": "iOS laat apps de talenlijst niet rechtstreeks openen, dus de laatste tik doe je in de systeeminstellingen. De taal geldt alleen voor deze iPad."
      },
      {
        "type": "note",
        "text": "Andere talen dan Engels en traditioneel Chinees kwamen met v3.2. Staan onder Taal alleen Engels en Chinees, werk DingPOS dan bij via de App Store."
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
    "question": "Hoe bedien ik meerdere klanten tegelijk aan de kassa?",
    "keywords": [
      "winkelmanden",
      "meerdere klanten",
      "in de wacht zetten",
      "wisselen",
      "tegelijk",
      "wachtrij"
    ],
    "content": [
      {
        "type": "p",
        "text": "Het kassascherm werkt met tien winkelmanden tegelijk. Tik op “+” in de mandbalk om er een toe te voegen en tik op een genummerd tabblad om te wisselen."
      },
      {
        "type": "p",
        "text": "Elke winkelmand wordt los berekend. Kijkt klant A nog rond, schakel dan over naar een andere winkelmand en reken klant B eerst af. Een winkelmand verdwijnt automatisch zodra het afrekenen is voltooid."
      },
      {
        "type": "note",
        "text": "Winkelmanden staan alleen in het geheugen — winkelmanden waarmee je niet hebt afgerekend, worden gewist als je de app helemaal afsluit."
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
    "question": "Hoe geef ik korting op een verkoop?",
    "keywords": [
      "korting",
      "percentage",
      "vast bedrag",
      "afprijzen",
      "prijsverlaging"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kortingen werken op twee niveaus, elk met een vast bedrag of een percentage:"
      },
      {
        "type": "list",
        "items": [
          "Artikelkorting: tik op een artikel in de winkelmand → kies “Korting” → voer een bedrag of percentage in.",
          "Winkelmandkorting: tik op de knop “Korting” onder de winkelmand."
        ]
      },
      {
        "type": "p",
        "text": "Elk artikel en elke winkelmand kan één korting tegelijk hebben — opnieuw toepassen overschrijft de vorige en tikken op het kortingslabel verwijdert de korting. Kortingen worden vóór de btw toegepast, de gangbare volgorde in de detailhandel."
      },
      {
        "type": "p",
        "text": "Kortingen die je vaak geeft, kun je bewaren: ga naar Instellingen → Klantenbinding en acties → Kortingsvoorinstellingen en tik op Voeg voorinstelling toe, bijvoorbeeld “Medewerkersprijs 20% korting”. Aan de kassa hebben zowel de artikelkorting als de winkelmandkorting een menu Voorinstellingen; kies je daar een voorinstelling, dan worden het kortingstype en de waarde precies ingevuld alsof je ze zelf had getypt, dus de korting telt nog steeds mee voor de kortingslimiet van een medewerker. Kortingsvoorinstellingen zijn er sinds v3.6 en vereisen het Standard-abonnement of hoger."
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
    "question": "Hoe wordt de btw berekend?",
    "keywords": [
      "btw",
      "belasting",
      "omzetbelasting",
      "inclusief btw",
      "exclusief btw",
      "meerdere btw-tarieven",
      "gst",
      "pst",
      "belasting pauzeren",
      "bon"
    ],
    "content": [
      {
        "type": "p",
        "text": "De btw wordt automatisch berekend op basis van de btw-tarieven en de btw-modus onder Instellingen → Winkelgegevens. Er zijn twee modi, en de bon toont het btw-bedrag in beide:"
      },
      {
        "type": "list",
        "items": [
          "Incl. btw: de prijzen bevatten al btw — het totaal blijft gelijk en de bon specificeert de btw die erin zit (gebruikelijk in Taiwan, Japan enz.).",
          "Excl. btw: de btw wordt bij het afrekenen bovenop het bedrag na korting gezet (gebruikelijk in de VS, Canada enz.)."
        ]
      },
      {
        "type": "p",
        "text": "Een winkel kan meerdere belastingen berekenen, zoals 5% GST plus 7% PST in Brits-Columbia, of de Japanse consumptiebelasting van 10% naast het verlaagde tarief van 8%:"
      },
      {
        "type": "list",
        "items": [
          "Tik op de kaart Btw op Voeg btw-tarief toe en vul een naam en een percentage in. Zet Toepassen op nieuwe producten aan, dan krijgen producten die je later toevoegt dit btw-tarief standaard. Heeft de winkel al een standaardtarief, dan staat die schakelaar bij een nieuw btw-tarief eerst uit; zet hem aan als beide moeten worden berekend.",
          "Elk product kiest zelf onder Btw-tarieven in het productformulier welke btw-tarieven het berekent — een bentobox kan bijvoorbeeld alleen het verlaagde tarief van 8% berekenen. Staan er twee of meer aan, dan toont het formulier het gecombineerde tarief van het product.",
          "Tik op een btw-tarief om de naam of het percentage te wijzigen, of gebruik Pas toe op alle producten of Verwijder van alle producten om het in één keer aan elk product toe te voegen of van elk product te halen. Bij het verwijderen van een btw-tarief zie je eerst voor hoeveel producten het niet meer wordt berekend.",
          "In een winkel met Excl. btw toont het totaal van de winkelmand één regel per btw-tarief, en de bestelgegevens tonen één regel per btw-tarief met het percentage en het bedrag waarover het is berekend."
        ]
      },
      {
        "type": "p",
        "text": "Wil je een tijdje geen belasting berekenen, zet dan bovenaan de kaart Btw de schakelaar Belasting berekenen uit: alle latere verkopen zijn zonder belasting, ook voor artikelen die al in een winkelmand zitten. Elk product behoudt zijn btw-tarieven, en als je de schakelaar weer aanzet, zijn ze weer zoals ze waren."
      },
      {
        "type": "p",
        "text": "Volledige rekenvolgorde: artikelkortingen en acties → winkelmandkorting → inwisselen van punten → btw. Bedragen worden afgerond volgens de half-up-methode: vanaf 0,5 naar boven, op het aantal decimalen van de valuta (bijv. 0 voor TWD, 2 voor USD). De btw wordt per bestelling één keer per btw-tarief berekend, en de decimalen volgen Afronding van de belasting op de kaart Btw: Half omhoog afronden, Naar beneden afronden of Naar boven afronden. Nieuwe winkels in Japan starten met Naar beneden afronden; andere winkels starten met Half omhoog afronden."
      },
      {
        "type": "note",
        "text": "Btw-tarieven met een eigen naam zijn er sinds v3.5. Bij de update wordt je btw-tarief een tarief met een naam (bijvoorbeeld “GST 10%” in Australië) en krijgt elk bestaand product dit tarief; een winkel met een tarief van 0 krijgt geen btw. Eerdere bestellingen en retouren behouden de btw-tarieven en bedragen waarmee ze zijn vastgelegd; rapporten tellen de omzet nu vóór btw, ook over eerdere periodes (zie “Wat is het verschil tussen omzet en ontvangen bedrag?”)."
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
    "question": "Welke betaalmethoden worden ondersteund?",
    "keywords": [
      "betaalmethode",
      "betaling",
      "contant",
      "creditcard",
      "line pay",
      "wisselgeld",
      "eigen betaalmethode",
      "op rekening",
      "transactiekosten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Een nieuwe winkel start met twee betaalmethoden, Contant en Creditcard, bij de installatie al in de taal van de app. Onder Instellingen → Betaalmethoden voeg je elke andere methode toe (bijv. Apple Pay, LINE Pay, een lokale wallet) en kun je de volgorde aanpassen. Tik op een methode om de naam te wijzigen, bijvoorbeeld van Creditcard naar “Kaart (Square)”; Cijfers telt verkopen van vóór de naamswijziging mee onder de nieuwe naam (sinds v3.6). Verwijder betaalmethode staat onderaan het bewerkvenster en vraagt eerst om bevestiging; eerdere bestellingen behouden de methode waarmee ze zijn betaald, en de laatste overgebleven methode kan niet worden verwijderd."
      },
      {
        "type": "p",
        "text": "Betaalmethoden zijn labels voor je boekhouding — DingPOS verwerkt zelf geen echte betalingen. Neem pinbetalingen of mobiele betalingen aan met je bestaande terminal of app en kies daarna het bijbehorende label in DingPOS om de betaling vast te leggen. Bij contante betalingen wordt het wisselgeld automatisch berekend, en waar de kleinste munten niet meer worden gebruikt, kan ook het contante bedrag worden afgerond — zie “Kunnen contante betalingen worden afgerond op de munten die nog in omloop zijn?”"
      },
      {
        "type": "p",
        "text": "Rekent je aanbieder van pin- of mobiele betalingen kosten? Geef de methode dan een kostenpercentage, en Cijfers schat de kosten en het netto ontvangen bedrag per methode — zie “Kan DingPOS transactiekosten van pin- en mobiele betalingen bijhouden?”"
      },
      {
        "type": "p",
        "text": "Neemt een vaste klant de spullen nu mee en betaalt die later? Kies dan Op rekening: de verkoop wordt vastgelegd als openstaande vordering en vereffend zodra het geld binnenkomt. Zie “Kunnen vaste klanten op rekening kopen en later betalen?”"
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
    "question": "Kan DingPOS transactiekosten van pin- en mobiele betalingen bijhouden?",
    "keywords": [
      "transactiekosten",
      "pinkosten",
      "kosten per betaling",
      "kostenpercentage",
      "netto ontvangen",
      "kosten betaalprovider",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Tik onder Instellingen → Betaalmethoden op een betaalmethode (of voeg een nieuwe toe) en vul Transactiekosten in: een percentage, een vast bedrag per transactie, of allebei. Methoden van het type Contant hebben geen kosten. Vanaf dat moment wordt bij elke betaling via die methode een kostenraming vastgelegd, op basis van het percentage dat op dat moment gold."
      },
      {
        "type": "p",
        "text": "Bij Cijfers toont de kaart Betaalmethoden onder elke methode met kosten een regel “Kosten · Netto”, en onderaan de kaart staan de geschatte kosten en het geschatte netto ontvangen bedrag over de hele periode."
      },
      {
        "type": "list",
        "items": [
          "Vul het percentage in dat je aanbieder echt inhoudt. Berekent de aanbieder btw over de kosten, tel die dan mee: bij 3% plus 5% btw vul je 3,15% in. Laat beide velden leeg als er geen kosten zijn.",
          "Een gewijzigd percentage geldt alleen voor latere betalingen; kosten die al zijn vastgelegd blijven zoals ze waren.",
          "“Percentage wordt teruggegeven bij terugbetalingen” staat voor winkels in Taiwan en Japan standaard aan en elders uit, omdat aanbieders zoals Stripe, Square en PayPal hun kosten bij een terugbetaling houden; stel de instelling in zoals je aanbieder het doet. De instelling geldt voor retouren en terugbetaalde aanbetalingen op voorbestellingen: staat hij aan, dan komt het percentage terug; de vaste kosten nooit. Een ongeldig gemaakte verkoop of ongedaan gemaakte vereffening negeert de instelling en draait de volledige vastgelegde kosten terug, vaste kosten inbegrepen. In beide gevallen krijgt de klant hetzelfde bedrag terug.",
          "Betalingen die zijn ontvangen voordat de methode een percentage had, hebben geen kosten: Cijfers markeert ze met “N zonder kostenpercentage” en toont het netto bedrag als “—”."
        ]
      },
      {
        "type": "note",
        "text": "Kosten zijn schattingen op basis van het percentage dat je invult; het afschrift van je aanbieder toont het werkelijke bedrag. Kostenpercentages wijzigen vereist het Standard-abonnement of hoger; bij Lite zijn de velden vergrendeld. Sinds v3.4 zien alle abonnementen de vastgelegde kosten bij Cijfers en in W&V, dus een percentage dat tijdens de proefperiode is ingesteld blijft ook bij Lite kosten schatten; eerdere versies toonden kosten alleen bij Standard en hoger."
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
    "question": "Kunnen contante betalingen worden afgerond op de munten die nog in omloop zijn?",
    "keywords": [
      "contante afronding",
      "afronden",
      "naar boven afronden",
      "naar beneden afronden",
      "munten",
      "kleine munten",
      "centen",
      "0,05",
      "wisselgeld",
      "canada",
      "australië",
      "zwitserland"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Canada, Australië, Nieuw-Zeeland, Zwitserland, Denemarken, Zweden, Noorwegen, België, Finland en Hongarije gebruiken hun kleinste munten niet meer, dus rondt DingPOS contant geld af op een bedrag dat je echt kunt overhandigen: een bestelling van C$12,99 die contant wordt betaald, wordt aangenomen als C$13,00, en het wisselgeld wordt berekend vanaf C$13,00. Pinbetalingen en andere niet-contante betalingen blijven exact."
      },
      {
        "type": "p",
        "text": "Een nieuwe winkel die in een van deze landen en in de valuta van dat land wordt ingesteld, krijgt dit automatisch. Elke andere winkel zet het aan met de kaart Contante afronding onderaan Instellingen → Betaalmethoden: kies waarop contant wordt afgerond (Niet afronden, of 0,05, 0,10, 0,50 of 1,00 in een valuta met centen; 5, 10, 50 of 100 in een valuta zonder centen, zoals TWD of JPY) en, bij een stap die precies in het midden kan uitkomen, of er dan naar boven of naar beneden wordt afgerond. Een wijziging geldt alleen voor latere betalingen."
      },
      {
        "type": "list",
        "items": [
          "Bij het afrekenen staat “Contant ontvangen C$13,00”. Vraagt de klant om het exacte bedrag te betalen, tik dan onder de betaalmethoden op Exact bedrag aannemen; dat geldt voor die ene verkoop.",
          "Het totaal van de bestelling, de btw, de omzet, de punten en de bestedingen van de klant blijven ongewijzigd; het afrondingsverschil hoort bij de betaling, en het bonscherm en de bestelgegevens tonen het onder het totaal, bijvoorbeeld “Contante afronding +C$0,01”.",
          "Contante terugbetalingen bij retouren, contante aanbetalingen en restbedragen bij het afhalen van voorbestellingen, bijbetalingen bij een omruiling en openstaande bedragen op rekening die contant worden vereffend, worden ook afgerond; worden er meerdere tegelijk vereffend, dan wordt het geheel één keer afgerond.",
          "Ongeldig gemaakte bestellingen, terugbetaalde aanbetalingen op voorbestellingen en ongedaan gemaakte vereffeningen betalen precies terug wat is vastgelegd, zonder opnieuw af te ronden.",
          "Ontvangen bedrag in Cijfers laat zien hoeveel daarvan contante afronding was, en de maandelijkse W&V krijgt een regel Contante afronding die meetelt voor de nettowinst. Afronding is nooit omzet."
        ]
      },
      {
        "type": "note",
        "text": "Zwitserland rondt altijd naar beneden af, volgens de regels voor prijsaanduiding — CHF 12,98 wordt aangenomen als CHF 12,95, en er is geen keuze voor het midden. België rondt alleen totalen boven €0,05 af. Contante afronding zit in elk abonnement, en een bestaande winkel neemt contant geld precies zo aan als voorheen totdat je het aanzet."
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
    "question": "Kan ik het “Ding”-geluid na het afrekenen uitzetten?",
    "keywords": [
      "geluid",
      "ding",
      "dempen",
      "stil",
      "geluid bij afrekenen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Ga naar Instellingen → Apparaatvoorkeuren en zet Geluid bij afrekenen uit. Vanaf de volgende verkoop blijft het successcherm stil, met behoud van de haptische tik."
      },
      {
        "type": "p",
        "text": "De schakelaar geldt alleen voor deze iPad en wordt niet gewijzigd door het terugzetten van een cloud-back-up."
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
    "question": "Kan ik producten die niet op voorraad zijn op het kassascherm verbergen?",
    "keywords": [
      "verbergen",
      "niet op voorraad",
      "uitverkocht",
      "voorraad nul",
      "kassa",
      "product ontbreekt",
      "product niet te vinden"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Ga naar Instellingen → Apparaatvoorkeuren en zet Verberg producten die niet op voorraad zijn aan (standaard uit). Het productraster, het categoriefilter en het zoeken (op naam en barcode) in de kassa slaan dan elk product over waarvan de voorraad 0 of lager is. De schakelaar werkt direct, zonder de app opnieuw te openen."
      },
      {
        "type": "list",
        "items": [
          "Producten waarvan je de voorraad niet bijhoudt, worden altijd getoond. Een product met varianten wordt alleen verborgen als alle varianten niet op voorraad zijn.",
          "Het geldt alleen voor de kassa van deze iPad; de lijst Producten toont nog steeds elk product.",
          "Als alle producten verborgen zijn, toont de kassa “Geen enkel product is op voorraad” en wijst aan waar je de schakelaar uitzet."
        ]
      },
      {
        "type": "note",
        "text": "Zolang de schakelaar aan staat, kan deze iPad producten die niet op voorraad zijn niet vinden. Je kunt dus niet in de min verkopen of er een voorbestelling voor aannemen — zet hem uit wanneer dat nodig is. Lijken producten uit de kassa verdwenen te zijn, dan ligt het meestal aan deze schakelaar."
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
    "question": "Wordt de winkelmand bijgewerkt als ik de prijs van een product wijzig?",
    "keywords": [
      "prijswijziging",
      "prijs aanpassen",
      "winkelmand",
      "herberekenen"
    ],
    "content": [
      {
        "type": "p",
        "text": "De winkelmand toont de prijs op het moment dat het artikel werd toegevoegd. Als je het afrekenen bevestigt, vraagt DingPOS van elk artikel de nieuwste prijs op — is er iets gewijzigd, dan krijg je een melding met de bijgewerkte prijzen voordat het doorgaat."
      },
      {
        "type": "p",
        "text": "Ook acties worden bij de bevestiging volledig opnieuw beoordeeld. Verandert daardoor het totaal, de btw of een kortingsbedrag, dan verschijnt een overzicht van de wijzigingen en moet je opnieuw bevestigen — zo is het bedrag dat je ziet precies het bedrag dat wordt vastgelegd."
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
    "question": "Kan ik handmatige korting en acties combineren?",
    "keywords": [
      "handmatige korting",
      "actie",
      "combineren",
      "overschrijven"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. De regel is “handmatig gaat voor, de lagen blijven onafhankelijk”:"
      },
      {
        "type": "list",
        "items": [
          "Handmatige artikelkorting: die regel krijgt geen acties op artikelniveau meer — je handmatige korting geldt als de definitieve beslissing ter plekke. Het bedrag van de regel telt wel mee voor drempelbedragen.",
          "Handmatige winkelmandkorting: wordt toegepast nadat alle acties zijn berekend, zodat beide naast elkaar bestaan. Voer je meer in dan het resterende totaal, dan wordt de korting automatisch begrensd en krijg je een melding."
        ]
      },
      {
        "type": "p",
        "text": "Als je een handmatige korting verwijdert, komt de regel bij de volgende beoordeling weer in aanmerking voor acties."
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
    "question": "Hoe voeg ik een klant toe aan een verkoop of wijzig ik die?",
    "keywords": [
      "klant",
      "lid",
      "klant koppelen",
      "klant wijzigen",
      "nieuwe klant",
      "afrekenen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Koppel de klant in de winkelmand of op het afrekenscherm: de rij Klant onder het bedrag opent de klantenlijst als er niemand is gekoppeld, en biedt Wijzig klant of Verwijder klant als er wel iemand is gekoppeld. De klant die je bij het afrekenen kiest, is de klant van de winkelmand en blijft eraan gekoppeld als je het afrekenen annuleert."
      },
      {
        "type": "list",
        "items": [
          "Als je de klant wijzigt, worden niveaukortingen, verjaardagsacties en het inwisselen van punten meteen opnieuw berekend. Een contant bedrag of een aanbetaling die je al hebt ingevoerd blijft staan en wordt gecontroleerd tegen het nieuwe totaal.",
          "Kun je de klant niet vinden? Tik op Nieuwe klant rechtsboven in de klantenlijst, of in het midden als niets overeenkomt met je zoekopdracht. Wat je hebt gezocht komt in het formulier te staan — cijfers gaan naar het telefoonnummer, al het andere naar de naam — en de nieuwe klant wordt aan de verkoop gekoppeld.",
          "Als je op Op rekening tikt zonder gekoppelde klant, opent de klantenlijst; Op rekening wordt geselecteerd zodra je iemand kiest.",
          "Komt een handmatige korting door de nieuwe klant boven de kortingslimiet van de actieve medewerker uit, dan moet eerst een manager goedkeuren; annuleer je de goedkeuring, dan blijft de klant zoals hij was."
        ]
      },
      {
        "type": "note",
        "text": "Klanten horen bij het Standard-abonnement; bij Lite staat er in de rij “Klanten — Standard-abonnement” en opent de rij de details over upgraden. De rij Klant bij het afrekenen is er sinds v3.4; eerdere versies koppelen de klant alleen in de winkelmand."
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
    "question": "Ik heb een fout gemaakt bij het afrekenen — hoe maak ik een bestelling ongeldig?",
    "keywords": [
      "ongeldig maken",
      "bestelling annuleren",
      "fout bij afrekenen",
      "verkeerde bestelling",
      "verkoop ongedaan maken"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Orders, zoek de bestelling, open de details en tik op Maak ongeldig. In het venster ‘Deze bestelling ongeldig maken?’ kun je een reden invullen (optioneel, maximaal 100 tekens); tik rechtsboven op Maak ongeldig en het is gebeurd. De reden staat in de bestelgegevens en in het activiteitenlogboek en kan na verzending niet meer worden gewijzigd."
      },
      {
        "type": "p",
        "text": "Ongeldig maken draait automatisch alles terug wat eraan vastzit: bijgehouden voorraad komt terug, spaarpunten die met de bestelling zijn verdiend worden ingetrokken en ingewisselde punten worden teruggegeven. Ongeldig gemaakte bestellingen blijven duidelijk gemarkeerd in de lijst staan en tellen niet mee in de omzet in de rapporten."
      },
      {
        "type": "note",
        "text": "Ongeldig maken betekent: ‘deze verkoop heeft nooit plaatsgevonden’ — gebruik het voor een bestelling die ter plekke verkeerd is ingetoetst. Brengt een klant later spullen terug, gebruik dan Retour: de oorspronkelijke bestelling blijft bewaard, je kunt maar een deel van de artikelen retourneren en de omzet wordt verlaagd op de dag van de retour."
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
    "question": "Hoe verwerk ik een retour of omruiling?",
    "keywords": [
      "retour",
      "omruiling",
      "terugbetaling",
      "gedeeltelijk retour",
      "andere maat",
      "ruilen",
      "weggooien",
      "reden van retour"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Orders, open de oorspronkelijke bestelling en tik op Retour. Kies hoeveel stuks van elk artikel terugkomen. Voor een omruiling tik je op hetzelfde scherm op Voeg vervangend artikel toe; het nettobedrag wordt in één keer verrekend — positief betekent dat de klant betaalt, negatief dat je terugbetaalt, en nul betekent dat er geen geld wordt uitgewisseld."
      },
      {
        "type": "list",
        "items": [
          "De oorspronkelijke bestelling wordt nooit gewijzigd. Een retour maakt een eigen document met de datum van vandaag en een nummer dat met R begint, en de omzet wordt verlaagd op de dag van de retour.",
          "De terugbetaling is wat de klant echt voor dat artikel heeft betaald — kortingen op artikelen, kortingen op de winkelmand en ingewisselde punten zijn al evenredig verwerkt, dus er wordt niet tegen de catalogusprijs terugbetaald. De btw volgt het tarief waarmee de oorspronkelijke bestelling is afgerekend.",
          "Vervangende artikelen worden berekend tegen de prijs van vandaag, zonder acties of kortingen.",
          "Bij een product met bijgehouden voorraad kan elke geretourneerde regel terug de voorraad in (Terugleggen, de standaardkeuze) of worden weggegooid (Weggooien, sinds v3.5). Terugleggen voegt de voorraad weer toe. Weggooien laat de voorraad zoals die was en telt de kostprijs die het artikel bij de verkoop had mee in het Voorraadverlies van die maand op de W&V. Terugbetaling, btw en punten zijn in beide gevallen hetzelfde.",
          "Punten die met de oorspronkelijke bestelling zijn verdiend worden ingetrokken, ingewisselde punten worden teruggegeven en vervangende artikelen leveren hun eigen punten op.",
          "Is de oorspronkelijke bestelling een nog niet vereffende verkoop op rekening, dan gaat er geen geld over de toonbank: het retour wordt in mindering gebracht op de vorderingen van de klant, en een duurder vervangend artikel telt het verschil daarbij op.",
          "Een bestelling kan in meerdere rondes worden geretourneerd, maar nooit meer dan het oorspronkelijk verkochte aantal; zodra alles terug is, komen de geretourneerde btw, kortingen en punten samen exact uit op de oorspronkelijke bestelling. Gebruikslimieten van acties komen door een retour niet terug."
        ]
      },
      {
        "type": "p",
        "text": "Het veld Reden is optioneel, maximaal 100 tekens. De reden staat in de bestelgegevens en in het activiteitenlogboek en kan na verzending niet meer worden gewijzigd."
      },
      {
        "type": "note",
        "text": "Er geldt geen termijn voor retouren, maar de oorspronkelijke bestelling is wel nodig. Is een retour per ongeluk ingevoerd, maak het retour dan ongeldig; het retourneerbare aantal komt dan terug."
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
    "question": "Hoe neem ik een voorbestelling aan met een aanbetaling?",
    "keywords": [
      "voorbestelling",
      "aanbetaling",
      "afhalen",
      "restbedrag",
      "reserveren",
      "vooruit bestellen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Schakel bij het afrekenen bovenaan het scherm van Verkoop naar Voorbestelling, kies de afhaaldatum, voer de aanbetaling in (alles van 0 tot het volledige bedrag, met snelkeuzes 30% / 50% / Volledig) en kies hoe de aanbetaling wordt betaald. Koppel een klant, zodat je contact kunt opnemen over het afhalen."
      },
      {
        "type": "list",
        "items": [
          "De voorraad wordt afgeboekt zodra de voorbestelling is geplaatst, zodat het verkoopbare aantal meteen klopt. Het is een signaal, geen reservering: een latere verkoop kan nog steeds het laatste exemplaar meenemen. Artikelen die niet op voorraad zijn, gaan in de min en herstellen zodra een inkooporder is ontvangen.",
          "Komt de klant de spullen halen, tik dan in de details van de bestelling op Overhandig om het restbedrag te innen. De bestelling wordt dan een gewone afgeronde verkoop; latere retouren lopen via de normale retourprocedure.",
          "Komt de klant niet opdagen, tik dan in de details van de bestelling op Annuleer bestelling en kies of je de aanbetaling terugbetaalt of houdt. De voorraad wordt weer bijgeboekt.",
          "De bon van de aanbetaling en de bon bij het afhalen hebben hetzelfde nummer."
        ]
      },
      {
        "type": "p",
        "text": "Bij Cijfers wordt de omzet van een voorbestelling volledig geteld op de afhaaldatum, terwijl de aanbetaling meetelt bij Ontvangen bedrag op de dag dat die is betaald — de twee cijfers lopen dus een tijdje uiteen. Zie ‘Wat is het verschil tussen omzet en ontvangen bedrag?’"
      },
      {
        "type": "note",
        "text": "Artikelen in een voorbestelling kunnen niet worden gewijzigd; bedenkt de klant zich, annuleer dan en plaats een nieuwe voorbestelling. Voorbestellingen aanmaken vereist het Standard-abonnement of hoger. Na een downgrade kun je bestaande voorbestellingen nog steeds laten afhalen of annuleren."
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
    "question": "Kunnen vaste klanten op rekening kopen en later betalen?",
    "keywords": [
      "op rekening",
      "krediet",
      "later betalen",
      "openstaande vorderingen",
      "vereffenen",
      "klantenrekening"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Kies Op rekening als betaalmethode, dan wordt de verkoop vastgelegd als openstaand bedrag van de klant. Dat bedrag moet aan een klant gekoppeld zijn, dus als er geen klant is gekoppeld, opent een tik op Op rekening eerst de klantenlijst (sinds v3.4; eerdere versies vragen je een klant in de winkelmand te koppelen)."
      },
      {
        "type": "p",
        "text": "Om te innen schakel je bovenaan Orders naar Vorderingen. Openstaande bedragen zijn per klant gegroepeerd; open een klant om één bestelling, een hele maand of alles te vereffenen — telkens vraagt DingPOS hoe het geld is betaald. Een losse bestelling kun je ook vanuit de details vereffenen, en een per ongeluk ingevoerde vereffening haal je terug met Vereffening ongedaan maken."
      },
      {
        "type": "list",
        "items": [
          "De omzet telt mee op de dag dat de spullen de deur uit gaan; het ontvangen bedrag en de spaarpunten volgen pas op de dag van de vereffening.",
          "Niet-vereffende bestellingen hebben in de lijst een oranje label, en in de klantdetails staat hoeveel de klant op dat moment nog schuldig is.",
          "Een retour op een bestelling die nog niet is vereffend betaalt geen geld terug: het bedrag wordt in mindering gebracht op de vorderingen van die klant.",
          "Een klant met niet-vereffende bestellingen kan niet worden verwijderd."
        ]
      },
      {
        "type": "note",
        "text": "Verkopen op rekening aanmaken vereist het Standard-abonnement of hoger. Na een downgrade kun je geen nieuwe starten, maar bestaande vorderingen kun je nog steeds bekijken en vereffenen."
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
    "question": "Kan ik notities toevoegen aan bestellingen, klanten of inkooporders?",
    "keywords": [
      "notitie",
      "notities",
      "aantekening",
      "opmerking",
      "bestelling notitie"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Op de detailpagina's van bestellingen, klanten en inkooporders kun je notities toevoegen. Tik op de notitiekaart om die te bewerken (maximaal 500 tekens), of op de regel “Voeg een notitie toe” als er nog geen notities zijn. Je kunt ook een notitie schrijven in het formulier voor een nieuwe klant of inkooporder."
      },
      {
        "type": "p",
        "text": "Notities zijn niet afhankelijk van de status: afgeronde bestellingen, ongeldig gemaakte bestellingen en retouren kun je allemaal van een notitie voorzien of die wijzigen. De bedragen en artikelen van een bestelling liggen vast bij het afrekenen; de notitie staat ernaast en verandert de inhoud nooit."
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
    "question": "Hoe maak ik producten met varianten (maat, kleur) aan?",
    "keywords": [
      "varianten",
      "maat",
      "kleur",
      "opties",
      "productopties",
      "specificaties"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tik op het scherm Wijzig product onder Variantopties op Voeg optie toe om een optie toe te voegen (bijv. “Kleur”) en gebruik daarna “+ Optiewaarde” voor elke keuze (bijv. Rood, Blauw). Heb je twee of meer opties (bijv. Kleur × Maat), dan maakt DingPOS automatisch alle combinaties aan (Rood/S, Rood/M, Blauw/S…)."
      },
      {
        "type": "p",
        "text": "Zodra een product varianten heeft, houdt elke combinatie onder Variantprijs en -voorraad een eigen voorraad bij en volgt de prijs de Prijs van het product: een combinatie zonder eigen prijs toont de productprijs in grijs en verandert mee als die verandert, en een getal dat je intypt is de eigen prijs van die combinatie, in zwart weergegeven. Stel bijvoorbeeld de Prijs van een T-shirt in op 390 en wijzig alleen L naar 350: M en XL worden verkocht voor 390, en als de Prijs later 420 wordt, gaan M en XL mee naar 420 terwijl L op 350 blijft staan. Achter het ⓘ naast de kolom Prijs zit Gebruik productprijs, waarmee alle combinaties weer de productprijs volgen. Producten die vóór v3.6 zijn gemaakt, houden elke variantprijs als eigen prijs van die combinatie, en de Prijs van het product is de laagste daarvan. De kassa, de productlijst en de productdetails tonen een bereik van de laagste tot de hoogste prijs, zoals “NT$350–NT$390”, of één prijs als alle combinaties evenveel kosten; sorteren op prijs gebruikt de laagste prijs van een combinatie. Aan de kassa toont een tik op het product eerst een variantkeuze, voordat het in de winkelmand komt."
      },
      {
        "type": "p",
        "text": "Bij de kostprijs werkt het op dezelfde manier: een lege kostprijs toont de kostprijs van het product in grijs en verandert mee als die verandert, en een getal is de eigen kostprijs van de combinatie, in zwart weergegeven — ook 0. Met Gebruik productkostprijs, achter het ⓘ naast de kolom Kostprijs, wis je in één keer de eigen kostprijs van alle combinaties."
      },
      {
        "type": "note",
        "text": "Namen van opties en waarden mogen maximaal 20 tekens bevatten, en spaties aan het begin of einde worden bij het bewaren weggehaald. Een waarde waarin je niets hebt getypt is geen combinatie en wordt bij het bewaren overgeslagen. Het bewaren stopt, met een rode rand om het veld, als een optienaam leeg is, als alle waarden van een optie leeg zijn of als je een waarde wist die het product al had bewaard; typ de waarde opnieuw in of verwijder hem met de knop Verwijder (×) bij die waarde. Een product met varianten kan geen open prijs hebben."
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
    "question": "Kan ik de prijs van een product aan de kassa zelf invullen, zoals verzendkosten of een onderhandeld artikel?",
    "keywords": [
      "open prijs",
      "eigen prijs",
      "prijs invoeren",
      "verzendkosten",
      "servicekosten",
      "onderhandelde prijs",
      "marktprijs",
      "percentagekosten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja — maak er een product met open prijs van. Zet Open prijs aan op de bewerkpagina van het product en laat de prijs leeg; de kassa en de productlijst tonen “Open prijs” op de plek van de prijs. Aan de kassa vraagt een tik op het product eerst om de prijs; voer die in en tik op Voeg toe aan winkelmand om het product tegen die prijs toe te voegen."
      },
      {
        "type": "list",
        "items": [
          "0 is een geldige prijs (bijvoorbeeld gratis verzending); een leeg veld kan niet worden toegevoegd. Voer de prijs in op dezelfde manier als andere prijzen volgens de btw-modus van je winkel worden berekend.",
          "Een winkelmand bevat één regel per product met open prijs: tik er nogmaals op om die regel te openen en de prijs te wijzigen.",
          "Sinds v3.3 schakelt Berekenen op basis van tussen Bedrag en Percentage. Bij 5% komt de regel op 5% van het subtotaal van de andere artikelen (na artikelkortingen, vóór acties, de korting op de winkelmand en het inwisselen van punten), afgerond op de decimalen van de valuta (vanaf 0,5 naar boven), en de regel loopt mee met de winkelmand als er artikelen worden toegevoegd, verwijderd of met korting worden verkocht. In de winkelmand staat op de regel “5% van winkelmand”, en de bestelling bewaart het bedrag waarop de regel uitkwam.",
          "Een regel met open prijs krijgt geen artikelkorting; wijzig de prijs om minder te rekenen. Kortingen op de winkelmand, het inwisselen van punten en acties (tenzij de regel daarvan is uitgesloten) gelden er wel voor.",
          "Als je Open prijs aanzet, gaat ook Sluit uit van acties aan, zodat op kosten geen korting wordt gegeven en ze niet meetellen voor bestedingsdrempels. Zet het weer uit als een onderhandeld artikel wel aan acties mee moet doen.",
          "Na verkoop wordt de regel belast, levert punten op en telt mee in Cijfers zoals elke andere, en bij een retour wordt de ingevoerde prijs terugbetaald.",
          "Een product met varianten kan geen open prijs hebben. Producten met open prijs worden nooit aangeboden als cadeau of als betaalde extra en verschijnen nooit in de lijst met vervangende artikelen bij een omruiling."
        ]
      },
      {
        "type": "note",
        "text": "Elk abonnement heeft dit, en het invoeren van de prijs vraagt nooit om goedkeuring van een manager."
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
    "question": "Hoe werken barcodes en barcodes scannen?",
    "keywords": [
      "barcode",
      "scannen",
      "barcodescanner",
      "dubbele barcode",
      "camera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Je kunt productbarcodes handmatig invoeren of met de camera scannen. Een barcode moet uniek zijn: hoort de barcode bij het opslaan al bij een ander product, dan laat DingPOS zien om welk product het gaat."
      },
      {
        "type": "p",
        "text": "Aan de kassa zoekt het zoekveld op zowel productnamen als het begin van een barcode. Typ een barcode en het product staat direct in beeld. Voor de plannen rond fysieke barcodescanners, zie “Will physical barcode scanners be supported?”"
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
    "question": "Hoe wijzig ik de volgorde van mijn producten?",
    "keywords": [
      "sorteren",
      "volgorde",
      "volgorde wijzigen",
      "herschikken",
      "slepen",
      "vooraan zetten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tik bij Producten op Wijzig sorteervolgorde en sleep de productkaarten naar de plek die je wilt. De kassa en het productbeheer gebruiken dezelfde volgorde, dus je past hem maar één keer aan."
      },
      {
        "type": "list",
        "items": [
          "Heb je veel producten, dan biedt het menu van elke kaart Zet vooraan, Zet achteraan en Verplaats naar positie, en elke kaart toont zijn huidige positie.",
          "Filter eerst op een categorie om alleen binnen die categorie de volgorde te wijzigen. Producten in andere categorieën blijven staan waar ze staan.",
          "Nieuwe producten komen vooraan te staan. Als je de gegevens van een product wijzigt, verandert de positie nooit."
        ]
      },
      {
        "type": "p",
        "text": "Wil je een tijdje sorteren op naam, prijs of aanmaak- of wijzigingstijd, gebruik dan het menu Sorteer op. Je handmatige volgorde blijft bewaard en komt terug zodra je weer kiest voor Handmatige volgorde."
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
    "question": "Hoe houd ik mijn voorraad bij?",
    "keywords": [
      "voorraad",
      "voorraadbeheer",
      "voorraad bijhouden",
      "aantal tellen",
      "lage voorraad"
    ],
    "content": [
      {
        "type": "p",
        "text": "Voorraad bijhouden stel je per product in: zet het aan op het scherm Wijzig product en vul het huidige aantal in. Elke variant van een product houdt een eigen voorraad bij."
      },
      {
        "type": "p",
        "text": "Zodra het aan staat, verlagen verkopen en voorbestellingen de voorraad automatisch. Bij ongeldig gemaakte verkopen, retouren en geannuleerde voorbestellingen wordt de voorraad weer aangevuld; een ontvangen inkooporder verhoogt de voorraad. Elke mutatie wordt vastgelegd in een volledig overzicht. Bij 10 of minder wordt de voorraad als laag oranje gemarkeerd in de productlijst, de kassa en de productdetails."
      },
      {
        "type": "p",
        "text": "Je kunt het aantal op twee manieren met de hand wijzigen:"
      },
      {
        "type": "list",
        "items": [
          "Hertelling: wijzig het voorraadaantal op het productformulier zodat het klopt met wat je hebt geteld. Het telt nooit mee in de W&V.",
          "Pas voorraad aan (sinds v3.5): tik in de productdetails op Pas voorraad aan, kies Haal eruit of Voeg toe, het aantal en een reden, zoals Verlopen of bedorven, Beschadigd of Samples en cadeaus. De kostprijs van wat je eruit haalt telt mee in het Voorraadverlies van die maand in de W&V — zie “Hoe leg ik voorraad vast die is verlopen, beschadigd of als sample is weggegeven?”"
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
    "question": "Hoe leg ik voorraad vast die is verlopen, beschadigd of als sample is weggegeven?",
    "keywords": [
      "voorraad aanpassen",
      "voorraadaanpassing",
      "voorraadverlies",
      "voorraad verminderen",
      "verlopen",
      "bedorven",
      "beschadigd",
      "samples",
      "winkelbenodigdheden",
      "hertelling"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gebruik Pas voorraad aan. Tik bij een product waarvan je de voorraad bijhoudt in de productdetails op Pas voorraad aan, kies Haal eruit of Voeg toe, stel het aantal in met + en − (het begint bij 1; tik op het getal om het in te typen), kies een reden en voeg eventueel een notitie toe (maximaal 100 tekens). Het scherm berekent de voorraad na de wijziging, en de regel onder de reden zegt of het in de W&V terechtkomt."
      },
      {
        "type": "list",
        "items": [
          "Redenen om eruit te halen: Productieverbruik, Verlopen of bedorven, Beschadigd, Kwijt of gestolen, Gebruik medewerker, Samples en cadeaus, Winkelbenodigdheden en Overig. Redenen om toe te voegen: Zelf gemaakt, Teruggevonden en Overig. Overig vereist een notitie.",
          "Behalve bij Productieverbruik telt wat je eruit haalt, tegen de kostprijs op dat moment, mee in het Voorraadverlies van die maand in de W&V. Het komt na de brutowinst en verlaagt de nettowinst; de brutowinst en de marge veranderen niet. Productieverbruik haalt alleen de voorraad weg, omdat de kostprijs van een materiaal al in de kostprijs van het product zit dat ervan is gemaakt.",
          "Teruggevonden haalt hetzelfde bedrag weer van het Voorraadverlies af. Zelf gemaakt en Overig bij Voeg toe voegen alleen voorraad toe en komen nooit in de W&V.",
          "Een aanpassing telt mee op de dag waarop je hem vastlegt. Je kunt hem niet met terugwerkende kracht invoeren, wijzigen of verwijderen; leg om een fout te herstellen Teruggevonden of een aanpassing in de andere richting vast.",
          "Een product zonder kostprijs kun je wel aanpassen, maar de W&V kan er geen bedrag aan koppelen, en de maand vermeldt bij hoeveel registraties een kostprijs ontbrak."
        ]
      },
      {
        "type": "p",
        "text": "Het voorraadaantal wijzigen op het productformulier is een Hertelling: het zet de voorraad gelijk aan wat je hebt geteld en komt nooit in de W&V. De lijst met voorraadmutaties in Cijfers filtert voorraadaanpassingen en hertellingen apart, en het activiteitenlogboek toont de reden en de notitie van elke aanpassing."
      },
      {
        "type": "note",
        "text": "Pas voorraad aan vereist het Standard-abonnement of hoger. Bij Pro wordt aan medewerkers van wie de rol goedkeuring nodig heeft voor Handmatige voorraadcorrectie bij het bevestigen om de pincode van een manager gevraagd."
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
    "question": "Waarom kan mijn voorraad negatief worden?",
    "keywords": [
      "negatieve voorraad",
      "voorraad onder nul",
      "uitverkocht",
      "afrekenen blokkeren",
      "voorraad corrigeren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dat is bewust zo: afrekenen wordt nooit geblokkeerd door te weinig voorraad. De eerste regel van een drukke kassa is dat de klant nooit hoeft te wachten. Een verkeerd getal op papier kun je later corrigeren, maar een afgebroken verkoop ben je voorgoed kwijt."
      },
      {
        "type": "p",
        "text": "Een negatieve voorraad betekent meestal dat een aanvulling niet is vastgelegd, of dat een voorbesteld artikel nog niet binnen is (voorbestellingen verlagen de voorraad op het moment van bestellen). Leg aanvullingen vast door een inkooporder te ontvangen en het aantal herstelt zich vanzelf. Corrigeer een verschil na een telling door het voorraadaantal op het productformulier te wijzigen (een hertelling); leg bij goederen die kapot zijn gegaan, zijn verlopen of zijn weggegeven de reden vast met Pas voorraad aan. Beide worden bewaard in het overzicht van voorraadmutaties."
      },
      {
        "type": "note",
        "text": "Kan de kassamedewerker een product met voorraad 0 niet vinden, controleer dan of Verberg producten die niet op voorraad zijn aan staat onder Instellingen → Apparaatvoorkeuren: zolang dat zo is, kan deze iPad producten die niet op voorraad zijn niet aan een winkelmand toevoegen."
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
    "question": "Hoe leg ik inkopen en leveranciers vast?",
    "keywords": [
      "inkooporder",
      "inkoop",
      "leverancier",
      "voorraad ontvangen",
      "voorraad aanvullen",
      "te betalen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bij Inkoop in de zijbalk beheer je leveranciers en inkooporders. Bij een leverancier bewaar je een naam, contactpersoon, telefoonnummer, adres en de standaard betaalvoorwaarde: Betalen bij ontvangst of Maandkrediet."
      },
      {
        "type": "steps",
        "items": [
          "Tik op Nieuwe inkoop, kies de leverancier en voeg de producten, aantallen en kostprijzen per stuk toe (vooraf ingevuld met de huidige kostprijs van elk product). Je kunt ook verzendkosten toevoegen. Voor goederen die nog geen product zijn, tik je in de keuzelijst Voeg product toe op Nieuw product; het nieuwe product komt direct als regel in de inkooporder. Staat de leverancier er nog niet bij, tik dan linksboven in de leverancierslijst op Voeg leverancier toe. De nieuwe leverancier komt direct terug in de inkooporder.",
          "Een concept raakt de voorraad of de te betalen bedragen nooit aan. Je kunt het vrij wijzigen of verwijderen.",
          "Zodra de goederen binnen zijn, tik je op Voorraad ontvangen: de bijgehouden voorraad gaat omhoog en de inkooporder krijgt een nummer en wordt vergrendeld. Bij ontvangst wordt standaard ook de kostprijs van elk product bijgewerkt naar deze kostprijs per stuk. Zet Productkostprijs synchroniseren op de inkooporder uit om de kostprijzen ongewijzigd te laten. Daaronder verdeelt Verzendkosten meenemen in kostprijs (aan bij nieuwe inkooporders) de verzendkosten naar rato van het bedrag over de regels, zodat de kostprijs die bij elk product wordt opgeslagen ook zijn aandeel bevat: bij meel 10 × $30, boter 1 × $60 en $25 verzendkosten wordt de kostprijs van meel $32 en die van boter $64."
        ]
      },
      {
        "type": "p",
        "text": "De betaalvoorwaarde bepaalt wat er daarna gebeurt: orders met Betalen bij ontvangst worden als betaald gemarkeerd, terwijl orders met Maandkrediet onbetaald onder Te betalen blijven staan. Daar vereffen je ze per leverancier: één order, deze maand of alles."
      },
      {
        "type": "p",
        "text": "Grondstoffen die je niet verkoopt, zoals meel of verpakking, kun je op dezelfde manier inkopen: maak er producten van die niet voor verkoop zijn — zie “Kan ik grondstoffen zoals meel of verpakking als producten toevoegen?”"
      },
      {
        "type": "note",
        "text": "Inkoop vereist het Standard-abonnement of hoger. Een leverancier met onbetaalde ontvangen orders kan niet worden verwijderd."
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
    "question": "Kan ik grondstoffen zoals meel of verpakking als producten toevoegen?",
    "keywords": [
      "niet voor verkoop",
      "grondstoffen",
      "ingrediënten",
      "materialen",
      "verpakking",
      "benodigdheden",
      "verkopen aan de kassa",
      "inkoop",
      "kostprijs"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Zet op het productformulier onder de foto Verkopen aan de kassa uit (het staat standaard aan) en het product is niet voor verkoop: het heeft geen prijs nodig, behoudt zijn kostprijs, barcode, voorraad en varianten, en de productlijst toont “Niet voor verkoop” op de plek van de prijs."
      },
      {
        "type": "list",
        "items": [
          "Een product dat niet voor verkoop is, verschijnt nooit in het kassaoverzicht, de categorieën, de zoekfunctie of bij het scannen van barcodes, en kan geen cadeau, betaalde extra, doelproduct van een actie of vervangend artikel bij een omruiling zijn. Een categorie die alleen producten bevat die niet voor verkoop zijn, ontbreekt in de categoriebalk van de kassa.",
          "Als de winkel producten heeft die niet voor verkoop zijn, verschijnt rechtsboven bij Producten een filterknop: kies Alle producten, Voor verkoop of Niet voor verkoop, samen met zoeken en categorieën.",
          "Inkooporders, voorraad ontvangen, Productkostprijs synchroniseren en Te betalen werken precies zoals bij andere producten, dus de inkoopkostprijs en de voorraad van een materiaal kun je via Inkoop vastleggen.",
          "De verkoop van andere producten verlaagt de voorraad ervan niet. Gebruik je er iets van, leg dan met Pas voorraad aan in de productdetails een afname vast: Productieverbruik voor wat in producten is gegaan, Winkelbenodigdheden voor zaken als papieren tassen of schoonmaakmiddelen.",
          "Je kunt het op elk moment weer terugzetten; de prijs en belastingen staan er dan nog. Bestellingen en rapporten die al zijn gemaakt, blijven ongewijzigd."
        ]
      },
      {
        "type": "p",
        "text": "Zo komt de kostprijs in de W&V: inkopen tellen daar niet rechtstreeks mee. Reken de kostprijs bij een product dat ervan wordt gemaakt mee in dat product; die telt mee zodra dat product wordt verkocht. Benodigdheden die in de kostprijs van geen enkel product zitten, worden bij gebruik vastgelegd als Winkelbenodigdheden als je de voorraad ervan bijhoudt, of als eenmalige kostenpost als je dat niet doet. Leg hetzelfde geld niet op beide manieren vast, anders telt het dubbel."
      },
      {
        "type": "note",
        "text": "Producten die niet voor verkoop zijn, zijn er in elk abonnement; inkoop, voorraadbeheer en Pas voorraad aan vereisen het Standard-abonnement of hoger."
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
    "question": "Wat is het verschil tussen omzet en ontvangen bedrag?",
    "keywords": [
      "omzet",
      "ontvangen bedrag",
      "omzet versus ontvangen bedrag",
      "cijfers",
      "brutowinst",
      "van omzet naar brutowinst",
      "afstemmen",
      "kas afstemmen",
      "aanbetaling",
      "verkoop op rekening",
      "btw"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omzet telt mee op de dag dat de goederen zijn overhandigd, na alle kortingen en vóór btw; Ontvangen bedrag telt mee op de dag dat het geld binnenkomt en is het geld dat je hebt ontvangen, inclusief btw. In een winkel die btw berekent ligt Ontvangen bedrag daarom met het bedrag aan btw hoger dan Omzet, zelfs bij bestellingen die aan de kassa zijn betaald. Beide staan als eerste twee tegels in de eerste rij van Cijfers, naast Brutowinst, Bestellingen en Gemiddelde bestelling."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Rijen met tegels in Cijfers, met Omzet en Ontvangen bedrag naast elkaar in de eerste rij"
      },
      {
        "type": "h2",
        "text": "Wanneer Omzet en Ontvangen bedrag verschillen"
      },
      {
        "type": "p",
        "text": "Stel dat een winkel met prijzen inclusief btw voor NT$1,050 verkoopt, inclusief 5% btw, en de klant aan de kassa betaalt: dan is de Omzet NT$1,000 en het Ontvangen bedrag NT$1,050. Naast btw lopen de twee cijfers in deze situaties uiteen:"
      },
      {
        "type": "list",
        "items": [
          "Verkoop op rekening: de goederen gaan vandaag mee en tellen mee in de Omzet van vandaag; het geld telt mee in Ontvangen bedrag op de dag dat de bestelling wordt vereffend.",
          "Voorbestelling: de aanbetaling telt mee in Ontvangen bedrag op het moment dat die wordt betaald; de Omzet wordt volledig geboekt op de afhaaldatum.",
          "Ingehouden aanbetalingen: als een klant een voorbestelling annuleert en jij de aanbetaling houdt, was die al meegeteld in Ontvangen bedrag toen die werd betaald. Cijfers toont dit apart als Ingehouden aanbetalingen en het telt nooit mee als Omzet.",
          "Een eerdere bestelling ongeldig maken: het terugbetaalde geld telt mee in Ontvangen bedrag op de dag van het ongeldig maken, dus Ontvangen bedrag van die dag kan negatief zijn. De ongeldig gemaakte bestelling zelf telt mee op de verkoopdatum en staat in de ondertitel van de tegel Bestellingen.",
          "Contante afronding: wat de Contante afronding boven of onder het totaalbedrag van de bestelling binnenhaalt, telt mee in Ontvangen bedrag, nooit in Omzet."
        ]
      },
      {
        "type": "p",
        "text": "Is een van beide bedragen niet nul, dan staat in de ondertitel van de tegel Ontvangen bedrag de Contante afronding of de Ingehouden aanbetalingen."
      },
      {
        "type": "h2",
        "text": "Btw en tegels in detail"
      },
      {
        "type": "p",
        "text": "De btw die het verschil tussen Omzet en Ontvangen bedrag vormt, staat in Van omzet naar brutowinst, dat je opent via de voet van de tegel Brutowinst. Daar zie je Omzet (incl. btw), Belasting en Omzet (excl. btw). Winkels in Australië, het Verenigd Koninkrijk, Nieuw-Zeeland en Singapore zien daar de plaatselijke belastingnaam, zoals Omzet (incl. GST), GST en Omzet (excl. GST)."
      },
      {
        "type": "p",
        "text": "Om de geïnde btw voor je aangifte te zien, open je Belastingrapport via de tegel Belasting."
      },
      {
        "type": "p",
        "text": "Het ⓘ-pictogram op de tegels Omzet, Ontvangen bedrag en Bestellingen legt deze regels in de app uit, inclusief de ongeldig gemaakte bestellingen in de ondertitel van de tegel Bestellingen."
      },
      {
        "type": "h2",
        "text": "Afstemmen en verkopen lezen"
      },
      {
        "type": "p",
        "text": "Om af te stemmen vergelijk je Ontvangen bedrag met je kassalade en je pinautomaat. De kaart Betaalmethoden in Cijfers toont één rij per methode, en verkopen van vóór een naamswijziging van een methode staan onder de nieuwe naam. Om te zien hoeveel je in een periode hebt verkocht, kijk je naar Omzet. Retouren verlagen de Omzet op de dag van de retour."
      },
      {
        "type": "note",
        "text": "Omzet vóór btw kwam met v3.5, en eerdere periodes zijn op dezelfde manier herberekend, dus een winkel die btw berekent ziet een lagere Omzet dan vóór de update. Dat is een correctie: eerdere versies rekenden btw mee in de Omzet, en winkels met prijzen exclusief btw telden zelfs de btw die ze in rekening brachten als Omzet."
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
    "question": "Welke periodes kan ik in de rapporten bekijken?",
    "keywords": [
      "cijfers",
      "rapporten",
      "rapportperiode",
      "periode",
      "deze week",
      "deze maand",
      "aangepaste periode",
      "productranglijst",
      "langzaam verkopende producten",
      "weekdag × uur",
      "heatmap",
      "voorraadwaarde"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kies bovenaan Cijfers in de periodebalk uit Vandaag, Gisteren, Deze week, Deze maand, Dit jaar of Altijd, of tik op Aangepast om zelf een begin- en einddatum te kiezen. Elke kaart op de pagina volgt de periode die je kiest. Deze week volgt de eerste dag van de week van je apparaat, Deze maand begint op de 1e, Dit jaar begint op 1 januari, Altijd begint bij de eerste verkoop van je winkel, en elke optie toont de datums waarop die betrekking heeft."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Periodebalk bovenaan Cijfers met Aangepast geselecteerd en de pop-over met datums open om Begin en Einde te kiezen"
      },
      {
        "type": "h2",
        "text": "Een aangepaste periode kiezen"
      },
      {
        "type": "p",
        "text": "Gebruik Aangepast als je een periode nodig hebt die buiten de vaste kalenderperiodes valt, zoals een aangifteperiode van twee maanden of een kwartaal."
      },
      {
        "type": "steps",
        "items": [
          "Open Cijfers en tik op Aangepast in de periodebalk.",
          "Kies de begin- en einddatum in de pop-over.",
          "Bevestig je datums om het rapport bij te werken."
        ]
      },
      {
        "type": "p",
        "text": "De tegel Belasting en het belastingrapport volgen ook de gekozen periode; met Aangepast stel je dus voor beide een aangifteperiode in. Zie het bijbehorende artikel over het belastingrapport voor details. Rechts van de periodebalk tik je op Vergelijk om de gekozen periode naast de voorgaande periode of dezelfde periode vorig jaar te zien; zie het bijbehorende artikel over het vergelijken van periodes voor details."
      },
      {
        "type": "h2",
        "text": "Tegels en kaarten op de pagina"
      },
      {
        "type": "p",
        "text": "Onder de periodebalk toont Cijfers twee rijen cijfertegels, gevolgd door grafieken en overzichtskaarten in paren, met Op dit moment onderaan."
      },
      {
        "type": "list",
        "items": [
          "Eerste tegelrij: Omzet, Ontvangen bedrag, Brutowinst, Bestellingen en Gemiddelde bestelling.",
          "Tweede tegelrij: Totale kortingen, Belasting, Nettowinst, Producten zonder kostprijs en Geholpen klanten.",
          "Eerste paar: de trendgrafiek van de verkopen naast Kosten en brutowinst.",
          "Tweede paar: Productranglijst naast Aandeel per categorie.",
          "Derde paar: Betaalmethoden naast de kaart Acties.",
          "Onderste kaart: Op dit moment."
        ]
      },
      {
        "type": "p",
        "text": "Twee tegels in de tweede rij verschijnen alleen in specifieke gevallen. Belasting, toegevoegd in v3.6, verschijnt alleen bij een winkel met belastingen of als de gekozen periode verkopen bevat die onder een belasting zijn gedaan. Nettowinst verschijnt alleen als de periode Deze maand is of precies één hele maand beslaat."
      },
      {
        "type": "note",
        "text": "Heeft een periode geen bestellingen, dan toont Cijfers alleen de periodebalk, een bericht en Op dit moment."
      },
      {
        "type": "h2",
        "text": "Grafieken en Productranglijst lezen"
      },
      {
        "type": "p",
        "text": "Met het menu rechtsboven in de trendgrafiek wissel je tussen Omzet, Bestellingen, Gemiddelde bestelling en Geholpen klanten. Ernaast toont de grafiek Kosten en brutowinst de productkosten en de brutowinst van elke periode samen in één staaf. Een enkele dag wordt per uur weergegeven; langere periodes groeperen de gegevens per dag, week, maand of jaar, afhankelijk van de lengte."
      },
      {
        "type": "p",
        "text": "Houd de trendgrafiek, Kosten en brutowinst of Betaalmethoden ingedrukt om een kaart met de cijfers van één datapunt te tonen. Staat Vergelijk aan, dan toont de kaart van de trendgrafiek het cijfer van deze periode en dat van de vergelijkingsperiode naast elkaar. Sleep naar links of rechts om langs de datapunten te gaan; veeg je omhoog of omlaag over de grafiek, dan scrolt de pagina zoals gewoonlijk."
      },
      {
        "type": "p",
        "text": "Zet de kop van de trendgrafiek van Trend op Weekdag × uur voor een heatmap van zeven dagen bij 24 uur. Hoe donkerder een vak, hoe meer je in dat uur hebt verkocht, en je kunt de heatmap wisselen tussen omzet en bestellingen."
      },
      {
        "type": "p",
        "text": "De Productranglijst toont de top 5 producten van de gekozen periode. Tik op de kaart of op Toon alles om alle producten te zien die in die periode zijn verkocht, gerangschikt op aantal na retouren. Een product met varianten staat met één regel per variant."
      },
      {
        "type": "p",
        "text": "Zet de kop van de rangschikkingskaart op Langzaam verkopende producten om producten van de minste naar de meeste verkopen te tonen. Elke rij toont de huidige voorraad van het product en de datum waarop het voor het laatst is verkocht. Producten die nooit zijn verkocht, staan als Nooit verkocht en standaard zie je alleen producten die op voorraad zijn. De kop Stijgers en dalers toont de producten waarvan de omzet ten opzichte van een vergelijkingsperiode het meest steeg of daalde; zie het bijbehorende artikel over het vergelijken van periodes."
      },
      {
        "type": "h2",
        "text": "Aandeel per categorie, herhaalaankoop en Op dit moment"
      },
      {
        "type": "p",
        "text": "Aandeel per categorie toont de omzet en het aandeel van elke categorie, van groot naar klein, volgens de huidige categorie van elk product. Producten zonder categorie staan onder Zonder categorie en de rijen tellen precies op tot Omzet."
      },
      {
        "type": "p",
        "text": "De laatste regel van de tegel Geholpen klanten toont het herhaalaankooppercentage als “Herhaalaankooppercentage … · … leden teruggekomen”. Het toont het aandeel leden dat in de gekozen periode kocht en in totaal al twee of meer keer heeft gekocht."
      },
      {
        "type": "p",
        "text": "Op dit moment toont drie gegevens over voorraad en punten:"
      },
      {
        "type": "list",
        "items": [
          "Voorraadwaarde, berekend als huidige voorraad × huidige kostprijs.",
          "Elke voorraadmutatie in de gekozen periode.",
          "De punten die klanten hebben maar nog niet hebben ingewisseld, met het maximale bedrag dat ze ermee van de prijs kunnen halen."
        ]
      },
      {
        "type": "p",
        "text": "Voorraadwaarde en niet-ingewisselde punten zijn actuele standen, dus de periode bovenaan verandert ze niet."
      },
      {
        "type": "note",
        "text": "Medewerkers zien Cijfers met de toestemming Cijfers; voor de bedragen van de voorraadwaarde is ook de toestemming Kostprijs en winst nodig."
      },
      {
        "type": "note",
        "text": "Deze kalenderperiodes kwamen met v2.4; eerdere versies hadden doorlopende periodes (Vandaag / 7 dagen / 30 dagen / Altijd). Zie je die nog, werk dan DingPOS bij via de App Store."
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
    "question": "Hoe vergelijk ik mijn verkoop met vorige week, vorige maand of vorig jaar?",
    "keywords": [
      "vergelijk",
      "periodevergelijking",
      "vorige week",
      "vorige maand",
      "vorig jaar",
      "dezelfde periode vorig jaar",
      "stijgers en dalers",
      "cijfers",
      "groei",
      "herhaalaankooppercentage"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tik in Cijfers rechts van de periodebalk op Vergelijk en kies een eerdere periode, zoals Vorige week of Vorig jaar. Elke tegel toont dan hoeveel het cijfer is gestegen of gedaald, bijvoorbeeld “▼ 3% t.o.v. Vorige maand”, met daaronder het cijfer van de vergelijkingsperiode."
      },
      {
        "type": "h2",
        "text": "Een vergelijking aanzetten"
      },
      {
        "type": "steps",
        "items": [
          "Open Cijfers via de zijbalk.",
          "Kies bovenaan een periode.",
          "Tik rechts van de periodebalk op Vergelijk.",
          "Kies een vergelijkingsoptie in het menu."
        ]
      },
      {
        "type": "p",
        "text": "De beschikbare keuzes hangen af van de periode die je kiest:"
      },
      {
        "type": "list",
        "items": [
          "Geen zet de vergelijking uit.",
          "Vorige week vergelijkt één dag met dezelfde dag vorige week, of deze week met vorige week.",
          "Vorige maand vergelijkt deze maand met vorige maand.",
          "Vorig jaar vergelijkt dit jaar met vorig jaar, of de gekozen periode met dezelfde periode vorig jaar.",
          "Daarvoor vergelijkt een aangepaste periode met een even lange periode direct daarvoor."
        ]
      },
      {
        "type": "p",
        "text": "Als een vergelijking actief is, voegt Cijfers de verandering en het cijfer van de vergelijkingsperiode toe aan elke tegel behalve Belasting, Nettowinst en Producten zonder kostprijs. Omzet, Ontvangen bedrag, Brutowinst, Bestellingen, Gemiddelde bestelling, Totale kortingen en Geholpen klanten tonen elk een vergelijkingsregel zoals “▼ 3% t.o.v. Vorige maand”."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Cijfers op Deze week met Vergelijk ingesteld op Vorige week, met de vergelijkingsbalk en de eerste rij tegels, elk met de verandering en het vergelijkingscijfer eronder",
        "caption": "Tik op een vergelijkingsregel onder een tegel om Periodevergelijking te openen en de cijfers van beide periodes te zien."
      },
      {
        "type": "p",
        "text": "De verandering bij Totale kortingen is altijd grijs, want meer korting is op zich niet goed of slecht. Tik op een vergelijkingsregel om Periodevergelijking te openen, met de cijfers van beide periodes. De trendgrafiek krijgt een lichtere lijn voor de vergelijkingsperiode. Zolang een periode nog loopt, wordt de vergelijkingsperiode op hetzelfde moment afgekapt."
      },
      {
        "type": "h2",
        "text": "Stijgers en dalers"
      },
      {
        "type": "p",
        "text": "Zet de kop van de rangschikkingskaart op Stijgers en dalers voor de 3 producten waarvan de omzet het meest steeg en de 3 waarvan de omzet het meest daalde ten opzichte van de vergelijkingsperiode. Elke rij toont de omzet van beide periodes en het verschil; elke variant wordt met zichzelf vergeleken."
      },
      {
        "type": "p",
        "text": "Kies eerst een periode onder Vergelijk. Staat Vergelijk op Geen, of is de periode Altijd, dan vraagt de kaart je een vergelijkingsperiode te kiezen. Tik op de kaart of op Toon alles om de volledige lijst Stijgers en dalers te openen, onderverdeeld in Stijgers en Dalers."
      },
      {
        "type": "h2",
        "text": "Heatmap en herhaalaankooppercentage"
      },
      {
        "type": "p",
        "text": "Met een vergelijking aan laat de heatmap Weekdag × uur in de trendgrafiek ook zien welke uren groeiden en welke krompen. Het herhaalaankooppercentage op de tegel Geholpen klanten krijgt er een regel bij met de verandering in procentpunten en het percentage van de vergelijkingsperiode."
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
    "question": "Hoe wordt brutowinst getoond als ik geen kostprijzen heb ingevoerd?",
    "keywords": [
      "kostprijs",
      "winst",
      "brutowinst",
      "marge",
      "brutomarge",
      "rapporten",
      "niet bijgehouden",
      "kostprijs ontbreekt",
      "producten zonder kostprijs",
      "van omzet naar brutowinst"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostprijs is een optioneel veld, dus producten zonder kostprijs blijven buiten de brutowinst, terwijl hun omzet nog steeds volledig meetelt. De tegel Producten zonder kostprijs in Cijfers toont hoeveel producten die in de periode zijn verkocht of geretourneerd geen kostprijs hebben, zoals “12 producten”. Een kostprijs van 0 telt als kostprijs en staat niet in de lijst; heeft elk product een kostprijs, dan staat er “0 producten · kostprijzen compleet”."
      },
      {
        "type": "h2",
        "text": "Producten zonder kostprijs vinden"
      },
      {
        "type": "p",
        "text": "Tik in Cijfers op de tegel Producten zonder kostprijs of op Toon producten om Producten zonder kostprijs te openen. De lijst rangschikt producten van hoog naar laag op de omzet die buiten de brutowinst blijft."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Het scherm Producten zonder kostprijs met producten, gerangschikt op de omzet die buiten de brutowinst blijft"
      },
      {
        "type": "steps",
        "items": [
          "Tik in Producten zonder kostprijs op een rij om het product te openen.",
          "Tik op Wijzig en vul de kostprijs in bij Kostprijs (optioneel).",
          "Ga terug naar Producten zonder kostprijs: de rij is nu gemarkeerd met Kostprijs toegevoegd."
        ]
      },
      {
        "type": "p",
        "text": "Een product met varianten krijgt Kostprijs toegevoegd pas zodra elke verkochte variant zonder kostprijs er een heeft: een eigen kostprijs, of de kostprijs van het product die de variant volgt. Sinds v3.6 kan een inkooporder ook de verzendkosten meenemen in de kostprijs die ze vastlegt, als Verzendkosten meenemen in kostprijs aanstaat."
      },
      {
        "type": "note",
        "text": "Een kostprijs die je toevoegt, geldt alleen voor latere verkopen. Verkopen die al zijn gedaan, worden niet opnieuw berekend."
      },
      {
        "type": "h2",
        "text": "Kostprijs en btw invoeren"
      },
      {
        "type": "p",
        "text": "In het productformulier heet het kostprijsveld in elke winkel Kostprijs (optioneel). In een winkel met belastingen verschijnt naast Kostprijs (optioneel) een ⓘ die uitlegt hoe belasting werkt, afhankelijk van Voorbelasting aftrekken:"
      },
      {
        "type": "list",
        "items": [
          "Voorbelasting aftrekken staat aan: vul de kostprijs in vóór de belasting die je kunt terugvragen. In de ⓘ staat: “Vul de kostprijs in zonder de belasting die je kunt aftrekken; die boek je als voorbelasting. Belasting die je niet kunt aftrekken hoort wel bij de kostprijs.”",
          "Voorbelasting aftrekken staat uit: vul in wat je hebt betaald, min de belasting die je kunt terugvragen. In de ⓘ staat: “Belasting die je kunt aftrekken, hoort niet bij de kostprijs; belasting die je niet kunt aftrekken wel. Als je voorbelasting aftrekt, zet je Voorbelasting aftrekken aan bij Winkelgegevens.”"
        ]
      },
      {
        "type": "p",
        "text": "Geeft je winkel voorbelasting aan, zet dan Voorbelasting aftrekken aan bij Winkelgegevens."
      },
      {
        "type": "h2",
        "text": "De uitsplitsing van de brutowinst lezen"
      },
      {
        "type": "p",
        "text": "Brutowinst is de omzet na alle kortingen (korting op artikelen en winkelmand, acties, inwisseling van punten) en vóór btw, minus de kostprijs. De marge is de brutowinst ÷ de omzet van producten met een kostprijs, zodat producten zonder kostprijs de marge niet omlaag halen. Een retour neemt op de dag van de retour de brutowinst terug die die artikelen hadden opgeleverd."
      },
      {
        "type": "p",
        "text": "Tik in Cijfers op de tegel Brutowinst om Van omzet naar brutowinst te openen, dat rij voor rij aftrekt:"
      },
      {
        "type": "list",
        "items": [
          "Omzet (incl. btw)",
          "Belasting",
          "Omzet (excl. btw)",
          "Omzet zonder kostprijs",
          "Kostprijs producten",
          "Brutowinst en marge"
        ]
      },
      {
        "type": "p",
        "text": "De rijen tellen precies op tot de tegel Brutowinst. Winkels in Australië, het Verenigd Koninkrijk, Nieuw-Zeeland en Singapore zien de plaatselijke belastingnaam bij de belastingrijen, zoals Omzet (incl. GST)."
      },
      {
        "type": "note",
        "text": "Deze berekening van de brutowinst kwam met v3.1. Eerdere versies trokken alleen handmatige kortingen op artikelen af en telden btw in de prijs als winst mee, dus na de update tonen periodes met kortingen of btw in de prijs een lagere brutowinst. Dat is een correctie, geen verloren gegevens."
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
    "question": "Hoe zie ik hoeveel ik elke maand echt heb verdiend?",
    "keywords": [
      "winst en verlies",
      "w&v",
      "nettowinst",
      "brutowinst",
      "winst per maand",
      "vaste kosten",
      "kosten",
      "bedrijfsresultaat",
      "resultatenrekening"
    ],
    "content": [
      {
        "type": "p",
        "text": "Open W&V, onder Cijfers in de zijbalk, om de nettowinst van elke maand te zien en hoe die is berekend. De lijst loopt van nieuw naar oud vanaf je eerste maand met activiteit; de lopende maand is gemarkeerd met Lopend en de kop van elk jaar telt de nettowinst van de afgesloten maanden bij elkaar op. De eerste rij, Alle kosten, opent alle kostenposten, ongeacht de maand."
      },
      {
        "type": "h2",
        "text": "Uitsplitsing per maand"
      },
      {
        "type": "steps",
        "items": [
          "Open W&V, onder Cijfers in de zijbalk.",
          "Tik op een maand om te zien hoe de nettowinst is berekend."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Maandpagina van W&V met de melding Lopend, de nettowinst en de volledige uitsplitsing van omzet tot kosten"
      },
      {
        "type": "p",
        "text": "De maandpagina toont elke regel van verkoop tot nettowinst op volgorde. De rijen van omzet tot brutowinst hebben dezelfde namen en cijfers als Van omzet naar brutowinst in Cijfers."
      },
      {
        "type": "list",
        "items": [
          "Omzet (incl. btw), Belasting en Omzet (excl. btw): de omzet inclusief btw, het btw-bedrag, en de omzet na alle kortingen en vóór btw, geteld op de dag dat de goederen zijn overhandigd. Winkels in Australië, het Verenigd Koninkrijk, Nieuw-Zeeland en Singapore zien de plaatselijke belastingnaam.",
          "Omzet zonder kostprijs: wordt vóór de kostprijs van producten afgetrokken en staat er alleen als het niet nul is.",
          "Kostprijs producten: wat de verkochte goederen hebben gekost, op basis van de kostprijzen bij je producten.",
          "Brutowinst: getoond met de marge.",
          "Omzet zonder kostprijs: na de brutowinst weer bijgeteld, als het niet nul is.",
          "Voorraadverlies: staat er alleen als de maand er een heeft; de kostprijs van wat via Pas voorraad aan is afgeboekt als verlopen, beschadigd, weggegeven en dergelijke, plus weggegooide retouren. Het komt na de brutowinst. Zie “Hoe leg ik voorraad vast die is verlopen, beschadigd of als sample is weggegeven?” De maand heeft ook een onderdeel Voorraadverlies dat het per reden optelt.",
          "Transactiekosten (geschat): de kosten, geschat op basis van de kostenpercentages van je betaalmethoden.",
          "Ingehouden aanbetalingen: staat er alleen als het niet nul is; aanbetalingen die je hebt gehouden toen een voorbestelling werd geannuleerd.",
          "Contante afronding: staat er alleen als het niet nul is; wat het afronden van contant geld op de gangbare munten boven of onder het totaalbedrag van de bestellingen heeft opgeleverd.",
          "Vaste kosten en Eenmalige kosten: wat je voor die maand hebt vastgelegd; zie “Hoe leg ik huur, salarissen en andere kosten vast?”",
          "Nettowinst: berekend als omzet (excl. btw) − kostprijs producten − voorraadverlies − transactiekosten + ingehouden aanbetalingen + contante afronding − vaste kosten − eenmalige kosten."
        ]
      },
      {
        "type": "h2",
        "text": "Lopende maanden"
      },
      {
        "type": "p",
        "text": "Zolang een maand loopt, trekt W&V al de vaste kosten van de hele maand af. Bijvoorbeeld: op 5 oktober is de omzet (excl. btw) tot nu toe 20,000, de kostprijs van producten 10,000 en zijn de vaste kosten 65,700; de nettowinst is dan −55,700 en gemarkeerd met Lopend · de kosten van de hele maand worden afgetrokken."
      },
      {
        "type": "p",
        "text": "Omdat de kosten van de hele maand al zijn meegeteld, staat de nettowinst van deze maand nooit in het rood: niet in de maandlijst, niet op de maandpagina en niet op de tegel Nettowinst in Cijfers. Een afgesloten maand die met verlies eindigt, toont de nettowinst in de waarschuwingskleur."
      },
      {
        "type": "h2",
        "text": "Grafieken"
      },
      {
        "type": "p",
        "text": "Na de uitsplitsing volgen maximaal drie grafieken: de nettowinst per maand, het aandeel van elke vaste kostenpost en de trend van de vaste kosten. De twee trendgrafieken beslaan hooguit de 12 maanden tot en met de maand die je hebt geopend en verschijnen pas als er minstens twee maanden zijn om te vergelijken, geteld vanaf de maand van je eerste verkoop of kostenpost. De grafiek met aandelen heeft in die maand een vaste kostenpost nodig; zolang die er niet is, staat in dat onderdeel Voeg vaste kostenpost toe."
      },
      {
        "type": "h2",
        "text": "Wisselen tussen Cijfers en W&V"
      },
      {
        "type": "p",
        "text": "Cijfers en W&V verwijzen naar elkaar. Is de periode in Cijfers deze maand of precies één hele maand, dan krijgt de tweede rij tegels een tegel Nettowinst, gemarkeerd met Lopend · de kosten van de hele maand worden afgetrokken zolang de maand loopt. Tik op die tegel voor de uitsplitsing van die maand van brutowinst naar nettowinst. Tik bij elke andere periode op Bekijk winst en verlies per maand op de laatste regel van Van omzet naar brutowinst."
      },
      {
        "type": "p",
        "text": "Andersom opent Bekijk het rapport van oktober onder de titel van een maand in W&V de pagina Cijfers op die maand (aangepaste periode 1 okt – 31 okt); bij de lopende maand opent het Deze maand."
      },
      {
        "type": "note",
        "text": "De nettowinst is het bedrijfsresultaat vóór inkomstenbelasting, berekend uit wat DingPOS heeft vastgelegd, geen belastingaangifte. Zijn er producten zonder kostprijs verkocht, dan toont de maand nog steeds een nettowinst, gemarkeerd met Exclusief de kostprijs van N producten; tik erop om te zien welke."
      },
      {
        "type": "note",
        "text": "W&V is beschikbaar in elk abonnement. Met medewerkersaccounts vraagt het openen om de toestemming Winst en verlies, kosten; Managers en Medewerkers hebben daarvoor standaard goedkeuring nodig, omdat W&V kostprijzen van producten en salarissen toont."
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
    "question": "Hoe leg ik huur, salarissen en andere kosten vast?",
    "keywords": [
      "kosten",
      "huur",
      "salarissen",
      "gas water en licht",
      "vaste kosten",
      "eenmalige kosten",
      "alle kosten",
      "bedrijfskosten",
      "kosten verspreiden",
      "afschrijving",
      "w&v"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tik in W&V op Voeg kostenpost toe en kies Voeg vaste kostenpost toe of Voeg eenmalige kostenpost toe om huur, salarissen, gas, water en licht en andere bedrijfskosten vast te leggen. Elke kostenpost telt mee in de maand waartoe hij hoort, niet in de maand waarin je hem betaalde, en de nettowinst van elke maand wordt daarop aangepast. Vaste kostenposten herhalen zich elke maand, met optionele bedragswijzigingen; eenmalige kostenposten tellen mee in één maand of worden over meerdere maanden verspreid."
      },
      {
        "type": "h2",
        "text": "Vaste kosten"
      },
      {
        "type": "p",
        "text": "Een vaste kostenpost is een terugkerende kost die je elke maand betaalt, zoals huur, gas, water en licht of salarissen."
      },
      {
        "type": "steps",
        "items": [
          "Open W&V.",
          "Tik op Voeg kostenpost toe.",
          "Kies Voeg vaste kostenpost toe.",
          "Vul de naam, het bedrag per maand en de maand waarin de kostenpost begint in. Kies een eerdere maand om met terugwerkende kracht in te voeren.",
          "Tik op ✓ om te bewaren."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Formulier voor een vaste kostenpost met de naam, het bedrag per maand, de beginmaand en de bedragswijzigingen"
      },
      {
        "type": "p",
        "text": "Verandert het bedrag, open dan de kostenpost en tik op Wijzig bedrag. Kies de maand waarin de wijziging ingaat en kies dan Vanaf deze maand voor een blijvende wijziging, zoals een huurverhoging, of Alleen deze maand voor een verschil in één maand, zoals de energierekening van deze maand. Elke wijziging staat in een lijst op het formulier en je kunt elk item openen om het te wijzigen of te verwijderen."
      },
      {
        "type": "p",
        "text": "Stop je met het betalen van een vaste kostenpost, stel dan Laatste maand meegeteld in. Die maand en de maanden ervoor tellen nog mee in W&V, latere maanden bevatten de kostenpost niet meer."
      },
      {
        "type": "h2",
        "text": "Geplande wijzigingen in Alle kosten"
      },
      {
        "type": "p",
        "text": "In Alle kosten toont elke rij van een vaste kostenpost wat er gepland staat. De rij combineert de beginmaand met een eventuele volgende geplande bedragswijziging en de laatste maand die meetelt. Een rij kan bijvoorbeeld zeggen: Sinds januari 2026 · $420/mnd vanaf december 2026 · Laatst meegeteld in maart 2027."
      },
      {
        "type": "p",
        "text": "Het bedrag rechts blijft het huidige maandbedrag, niet het komende bedrag. Een wijziging die op Alleen deze maand staat, wordt niet op de rij getoond."
      },
      {
        "type": "h2",
        "text": "Eenmalige kosten"
      },
      {
        "type": "p",
        "text": "Een eenmalige kostenpost betaal je één keer, zoals een winkelinrichting, apparatuur, een vooruitbetaalde verzekering of één enkele rekening."
      },
      {
        "type": "steps",
        "items": [
          "Open W&V.",
          "Tik op Voeg kostenpost toe.",
          "Kies Voeg eenmalige kostenpost toe.",
          "Vul het bedrag en de datum in.",
          "Stel Maand meegeteld in voor één maand, of zet Verspreid over meerdere maanden aan.",
          "Tik op ✓ om te bewaren."
        ]
      },
      {
        "type": "p",
        "text": "Zonder verspreiding kun je nog steeds Maand meegeteld kiezen, zodat de kostenpost meetelt in de maand waartoe hij hoort. Een rekening van oktober die in november binnenkomt, kan bijvoorbeeld in oktober meetellen, met behoud van de echte datum."
      },
      {
        "type": "p",
        "text": "Zet voor een winkelinrichting, apparatuur of vooruitbetaalde verzekering Verspreid over meerdere maanden aan, kies 2 tot 120 maanden en selecteer de eerste maand die meetelt. Het formulier toont vooraf hoeveel er per maand meetelt en welke maanden dat zijn."
      },
      {
        "type": "p",
        "text": "Eindigt een verspreiding eerder, bijvoorbeeld bij een opgezegde verzekering, open dan de kostenpost en gebruik Verspreiding eerder beëindigen. Wat er nog over is, telt mee in de maand die je kiest."
      },
      {
        "type": "h2",
        "text": "Voorbelasting op kostenposten"
      },
      {
        "type": "p",
        "text": "Staat Voorbelasting aftrekken aan, dan kun je bij een eenmalige kostenpost een factuurnummer en de aftrekbare belasting vastleggen, en bij een vaste kostenpost elke factuur onder Facturen met Leg een factuur vast. Het bedrag dat in W&V meetelt, blijft wat de winkel draagt; het bijbehorende artikel over voorbelasting legt uit hoe aftrekbare belasting werkt."
      },
      {
        "type": "note",
        "text": "Voer in wat de winkel draagt, zonder btw die je kunt terugvragen. Voorraad die je gaat verkopen en de grondstoffen waarvan je die maakt, lopen via Inkoop, omdat ze bij verkoop in de kostprijs worden meegeteld. Benodigdheden met bijgehouden voorraad leg je bij gebruik vast met Pas voorraad aan, met de reden Winkelbenodigdheden, niet als kostenpost. Waarborgsommen, aflossingen van leningen en geld dat de eigenaar opneemt zijn geen kosten. Wijzigingen worden samen bewaard als je op ✓ tikt, en raakt een wijziging een afgelopen maand, dan krijg je eerst te zien voor welke maanden de nettowinst verandert."
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
    "question": "Hoe exporteer ik het belastingrapport voor mijn boekhouder?",
    "keywords": [
      "belastingrapport exporteren",
      "exporteren",
      "excel-werkboek",
      "csv",
      "pdf-rapport",
      "belastingoverzicht",
      "voorbelastingdetails",
      "boekhouder",
      "btw-aangifte",
      "boekhoudsoftware"
    ],
    "content": [
      {
        "type": "p",
        "text": "Open Belastingrapport, tik rechtsboven op Exporteer en kies een CSV-bestand, Excel-werkboek (XLSX) of PDF-rapport. Het bestand opent in een voorbeeld op volledig scherm, waar je op de deelknop tikt om het te bewaren of naar je boekhouder te sturen. Elk formaat bevat dezelfde cijfers als op het scherm."
      },
      {
        "type": "h2",
        "text": "Zo exporteer je"
      },
      {
        "type": "steps",
        "items": [
          "Open Cijfers en kies de periode, bijvoorbeeld een aangepaste periode van 1 november tot en met 31 december voor een aangifteperiode van twee maanden, of een kwartaal.",
          "Tik op de tegel Belasting om Belastingrapport te openen. De export omvat precies die periode.",
          "Tik rechtsboven in Belastingrapport op Exporteer. Een menu toont de formaten, met het laatst geëxporteerde formaat op deze iPad aangevinkt.",
          "Kies een formaat, zoals Excel-werkboek (XLSX), om een voorbeeld op volledig scherm te openen. CSV-bestanden verschijnen als tabel en in het Excel-werkboek kun je wisselen tussen bladen, bijvoorbeeld om eerst Summary te bekijken.",
          "Tik rechtsboven in het voorbeeld op de deelknop om het bestand te bewaren of naar je boekhouder te sturen. Sluit je het voorbeeld, dan ga je terug naar Belastingrapport."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Belastingrapport met het menu Exporteer open, met de lijst van bestandsformaten"
      },
      {
        "type": "p",
        "text": "Mislukt een export, dan toont de app Kan het bestand niet exporteren en Probeer opnieuw te exporteren. Er wordt niets weggeschreven; exporteer opnieuw."
      },
      {
        "type": "h2",
        "text": "Exportformaten"
      },
      {
        "type": "list",
        "items": [
          "Belastingoverzicht (CSV): één regel per rij van het rapport (elke belasting en elk tarief, nultarief en onbelast), met verkopen, retouren en netto, vóór belasting en belasting.",
          "Alle documenten (CSV): één regel per document onder elke belasting, met datum en tijd, bonnummer, documenttype (verkoop, retour of de tegenboeking van een ongeldig gemaakte verkoop), klantnaam, bedragen en betaalmethoden. Een ongeldig gemaakte verkoop krijgt een tegenboeking op de datum van het ongeldig maken.",
          "Dagoverzicht (CSV): het overzicht per dag, daarna een tweede tabel met betalingen per dag en methode.",
          "Voorbelastingdetails (CSV): alleen zichtbaar als het rapport een kaart met voorbelasting heeft. Eén regel per voorbelastingregel van elke inkooporder en kostenpost, met leverancier, belastingnummer van de leverancier en factuurnummer.",
          "Excel-werkboek (XLSX): de bladen Summary, Documents en Daily komen overeen met de drie CSV-bestanden over verkopen, plus Purchases als het rapport voorbelasting toont. Bedragen zijn getalcellen en elke kolom past bij zijn inhoud, zodat niets afgesneden opent.",
          "PDF-rapport: een A4-rapport in de taal van de app met winkelnaam, periode, belastingmodus, valuta en de onderdelen van het rapport. Winkels in Australië, Nieuw-Zeeland, Singapore en het Verenigd Koninkrijk krijgen eerst Aangiftevakken; kaarten met voorbelasting volgen als ze worden getoond. Teken of annoteer in het voorbeeld met Markeren om het gemarkeerde bestand te delen; exporteer je dezelfde periode opnieuw, dan wordt een schone kopie geschreven."
        ]
      },
      {
        "type": "h2",
        "text": "Opmaak voor boekhoudsoftware"
      },
      {
        "type": "p",
        "text": "CSV-bestanden zijn UTF-8 en door komma's gescheiden, met vaste Engelse kolomnamen in elke app-taal, zodat boekhoudsoftware ze kan lezen. Bedragen gebruiken de decimalen van de valuta en een minteken, zonder symbool of duizendtalscheiding (zoals 80.97, -40.00 of 1000 voor een winkel met yen). Datums zien eruit als 2026-11-03."
      },
      {
        "type": "p",
        "text": "Tekstcellen die beginnen met =, +, - of @ (zoals een klant met de naam =1+1) krijgen een ' ervoor, zodat spreadsheets tekst tonen in plaats van een formule uit te voeren. Bedragen krijgen dit nooit."
      },
      {
        "type": "p",
        "text": "Bestandsnamen bevatten de periode, zoals tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx en tax-report_2026-11-01_2026-11-30.pdf, zodat bestanden van verschillende periodes elkaar nooit overschrijven."
      },
      {
        "type": "h2",
        "text": "Toestemmingen en privacy"
      },
      {
        "type": "p",
        "text": "Elk abonnement kan exporteren, ook Lite. Medewerkers hebben de toestemming Cijfers nodig, net als voor Belastingrapport."
      },
      {
        "type": "p",
        "text": "Bestanden met voorbelasting vragen eerst om de goedkeuringen die hun kaarten nodig hebben: Kostprijs en winst voor inkooporders en Winst en verlies, kosten voor kostenposten. Dit geldt voor Voorbelastingdetails (CSV), plus Excel-werkboek (XLSX) en PDF-rapport als er kaarten met voorbelasting verschijnen. Annuleren schrijft niets weg; de drie CSV-bestanden over verkopen vragen er nooit om."
      },
      {
        "type": "note",
        "text": "Alle documenten (CSV) bevat klantnamen en bestanden met voorbelasting bevatten namen en belastingnummers van leveranciers. Deel ze alleen met mensen die ze mogen zien."
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
    "question": "Hoe leg ik voorbelasting (btw op inkopen) vast?",
    "keywords": [
      "voorbelasting",
      "btw op inkopen",
      "GST",
      "voorbelasting aftrekken",
      "voorbelasting op inkooporders",
      "voorbelasting op kostenposten",
      "belastingnummer leverancier",
      "inkooporders",
      "belastingrapport",
      "aftrekbare belasting"
    ],
    "content": [
      {
        "type": "p",
        "text": "Zet Voorbelasting aftrekken aan in Instellingen → Winkelgegevens om aftrekbare belasting van leveranciersfacturen vast te leggen bij inkooporders en kostenposten. Beide formulieren krijgen dan een sectie Voorbelasting waarin je de aftrekbare belasting van elke factuur overneemt. Het belastingrapport toont die in twee kaarten: Voorbelasting op inkooporders en Voorbelasting op kostenposten."
      },
      {
        "type": "h2",
        "text": "Voorbelasting aftrekken aanzetten"
      },
      {
        "type": "steps",
        "items": [
          "Open Instellingen → Winkelgegevens en zoek de belastingkaart.",
          "Zet onder Belasting berekenen Voorbelasting aftrekken aan."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Belastingkaart van Winkelgegevens met Voorbelasting aftrekken aan en de toelichting eronder"
      },
      {
        "type": "p",
        "text": "Voorbelasting aftrekken verschijnt alleen als de winkel minstens één belasting heeft en staat uit voor nieuwe winkels en na een update. De schakelaar wordt direct bewaard en komt in het Activiteitenlogboek onder Btw-instellingen. Staat de schakelaar aan, voer dan inkoopprijzen en kostprijzen van producten in vóór aftrekbare belasting; belasting die je niet kunt aftrekken blijft deel van de kostprijs."
      },
      {
        "type": "note",
        "text": "Elk abonnement heeft de schakelaar Voorbelasting aftrekken, terwijl Inkoop Standard of hoger vereist. Zet je hem uit, dan verbergt dat de velden bij nieuwe records; bestaande records houden hun voorbelasting en te betalen bedrag, en eerdere belastingrapporten blijven ongewijzigd."
      },
      {
        "type": "h2",
        "text": "Inkooporders"
      },
      {
        "type": "steps",
        "items": [
          "Open Inkoop en tik op Nieuwe inkoop.",
          "Voer stukprijzen in vóór aftrekbare belasting en scrol voorbij de extra kosten naar Voorbelasting.",
          "Controleer Factuurdatum, die standaard de besteldatum is, en vul optioneel Factuurnummer en Belastingnummer leverancier in.",
          "Kies een belasting van de winkel bij Tarief, of kies Ander tarief… om tot 3 decimalen in te typen, zoals 9,975%.",
          "Controleer Excl. belasting, dat begint bij het ordertotaal vóór belasting, en neem Aftrekbare belasting over van de factuur.",
          "Tik op Voeg tarief toe voor extra tarieven."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Inkooporder met de sectie Voorbelasting, met factuurvelden, één tariefregel en totalen"
      },
      {
        "type": "p",
        "text": "Aftrekbare belasting begint leeg; DingPOS rekent die nooit uit het tarief uit en accepteert afrondingen van de factuur. Bijvoorbeeld: bloem 10 × $300 plus $100 verzendkosten op factuur AB-12345678 van 30 juni 2026 met één regel van 5% met Excl. belasting $3,100 en Aftrekbare belasting $155 geeft Totaal excl. belasting $3,100, Voorbelasting $155 en Te betalen bedrag $3,255, dat in de lijst, het orderdetail en Te betalen staat. Een Belastingnummer leverancier bij een leverancier vult nieuwe orders in; bewaarde orders houden hun eigen nummer."
      },
      {
        "type": "p",
        "text": "Komt een factuur later binnen, open dan de ontvangen order en tik op Leg voorbelasting vast op de kaart Voorbelasting, of op Wijzig om die te wijzigen. Alleen Te betalen bedrag verandert; voorraad, kostprijs van producten en de status betaald of onbetaald blijven ongewijzigd. Ongeldig gemaakte orders houden Voorbelasting alleen-lezen en orders die vóór de update zijn bewaard, worden niet achteraf aangevuld."
      },
      {
        "type": "h2",
        "text": "Kostenposten"
      },
      {
        "type": "p",
        "text": "In W&V → Eenmalige kosten krijgt het formulier onder het bedrag een Factuurnummer en regels voor voorbelasting. Houd het bedrag vóór aftrekbare belasting en neem alleen de aftrekbare belasting over. Bij een factuur voor kantoorartikelen van $1,100 met $100 aftrekbaar voer je $1,000 in en een regel van 10% met $1,000 en $100; Incl. belasting toont $1,100 en W&V telt $1,000. De voorbelasting daarvan telt in zijn geheel mee op de datum van de kostenpost, nooit volgens Maand meegeteld of een verspreiding."
      },
      {
        "type": "p",
        "text": "Open in W&V → Vaste kosten een bewaarde kostenpost, zoals huur of gas, water en licht, en tik onder Facturen op Leg een factuur vast zodra elke factuur binnenkomt, met de factuurdatum, een optioneel factuurnummer en minstens één tariefregel. Is de huur $30,000 per maand en hebben de facturen van juli en augustus elk een regel van 5% met $30,000 en $1,500, dan bevat het rapport van juli–september $3,000 aan voorbelasting, terwijl W&V elke maand nog steeds $30,000 telt."
      },
      {
        "type": "p",
        "text": "Een wijziging van voorbelasting in een eerdere maand bewaren vraagt De wijziging bewaren? en waarschuwt dat het belastingrapport van die maand verandert als je al aangifte hebt gedaan. Wijzigingen in de huidige maand en concepten worden bewaard zonder te vragen."
      },
      {
        "type": "note",
        "text": "DingPOS berekent geen invoer-btw, btw-verlegging of gedeeltelijke aftrek. Neem de aftrekbare belasting over van de factuur en reken belasting die je niet kunt aftrekken mee in het bedrag vóór belasting."
      },
      {
        "type": "h2",
        "text": "Belastingrapport"
      },
      {
        "type": "p",
        "text": "Twee kaarten staan na de verkoopkaarten: Voorbelasting op inkooporders en Voorbelasting op kostenposten. Elke kaart toont één rij per tarief, een rij Geen voorbelasting en totalen voor Excl. belasting, Aftrekbare belasting en Incl. belasting. De totalen omvatten ook inkopen zonder voorbelasting, al tellen sommige aangiftes alleen regels met voorbelasting mee."
      },
      {
        "type": "list",
        "items": [
          "Inkooporders tellen mee op Factuurdatum, of op de besteldatum als die leeg is.",
          "Ongeldig gemaakte inkooporders tellen als negatief bedrag mee op de datum van het ongeldig maken.",
          "Eenmalige kostenposten tellen in hun geheel mee op de datum van de kostenpost.",
          "Facturen van vaste kostenposten tellen mee op de factuurdatum."
        ]
      },
      {
        "type": "p",
        "text": "Voor Voorbelasting op inkooporders is de toestemming Kostprijs en winst nodig; voor Voorbelasting op kostenposten de toestemming Winst en verlies, kosten. Medewerkers zonder die toestemming zien onder de kaarttitel Vraag een manager om goedkeuring. De tegel Belasting toont nog steeds alleen de belasting die op verkopen is geïnd, nooit min voorbelasting, omdat de vereenvoudigde methode van Japan en het Flat Rate Scheme in het Verenigd Koninkrijk anders werken. Winkels in Australië, Nieuw-Zeeland, Singapore en het Verenigd Koninkrijk zien deze bedragen ook in Aangiftevakken."
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
    "question": "Waar vind ik het belastingrapport en hoe lees ik het?",
    "keywords": [
      "belastingrapport",
      "btw-rapport",
      "btw-aangifte",
      "GST",
      "sales tax",
      "cijfers",
      "tegel belasting",
      "verkoop en belasting per tarief",
      "per betaalmethode",
      "aangifte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Open Cijfers en tik op de tegel Belasting om Belastingrapport te zien, dat verkopen en belasting per tarief toont voor de periode die Cijfers laat zien. Neem deze cijfers over in een btw-, GST- of sales tax-aangifte, of stuur ze naar een boekhouder. Latere belastingwijzigingen veranderen nooit de bewaarde cijfers van documenten."
      },
      {
        "type": "h2",
        "text": "Het belastingrapport openen"
      },
      {
        "type": "steps",
        "items": [
          "Open Cijfers en kies de periode, zoals Deze maand of een aangepaste periode.",
          "Zoek de tegel Belasting in de tweede rij, na Totale kortingen.",
          "Tik op de tegel Belasting of op Belastingrapport ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Cijfers op Deze maand met de tegel Belasting en de voet Belastingrapport ›"
      },
      {
        "type": "p",
        "text": "Deze tegel is de enige ingang. De ondertitel noemt de belastingen die in de periode zijn geïnd, het grootste bedrag eerst: twee met naam, drie of meer als bijvoorbeeld 3 belastingen, waaronder PST 7%. De kop toont de periode van Cijfers (Deze maand · 1 nov – 30 nov) zonder periodekiezer of snelkoppeling naar vorige maand, omdat aangifteperiodes verschillen (Taiwan twee maanden, Australië een kwartaal, Japan een jaar)."
      },
      {
        "type": "p",
        "text": "Winkels zonder belasting en zonder belaste verkopen in de periode zien geen tegel Belasting; periodes zonder documenten tonen de lege weergave van Cijfers. Verwijderde belastingen houden de tegel voor periodes met verkopen daaronder."
      },
      {
        "type": "note",
        "text": "Elk abonnement, ook Lite en de proefperiode, heeft de tegel, het rapport en elke export. Medewerkers hebben de toestemming Cijfers nodig; rollen die goedkeuring nodig hebben, zien het scherm om goedkeuring te vragen totdat een manager goedkeurt."
      },
      {
        "type": "h2",
        "text": "Het rapport lezen"
      },
      {
        "type": "p",
        "text": "Winkels in Australië, Nieuw-Zeeland, Singapore en het Verenigd Koninkrijk zien eerst Aangiftevakken."
      },
      {
        "type": "p",
        "text": "Verkoop en belasting per tarief toont één rij per tarief: het hoogste eerst, daarna 0% nultarief en Onbelast (producten zonder belasting) als laatste. De kolommen zijn Verkopen, Retouren en ongeldig gemaakte verkopen en Netto, elk met Vóór belasting en Belasting; rijen met nultarief en Onbelast hebben geen belastingregel. Elke belasting van de winkel krijgt een rij, ook zonder verkopen. Een naamswijziging houdt één rij; een tariefwijziging voegt er één toe."
      },
      {
        "type": "p",
        "text": "Totalen toont Verkopen vóór belasting, Belasting en Verkopen incl. belasting. Bij twee of meer belastingen zegt een notitie dat één verkoop meer dan één belasting kan hebben, zodat de verkopen per rij niet kunnen worden opgeteld; Verkopen vóór belasting telt elke verkoop één keer. Voor een kwartaal in het Verenigd Koninkrijk kan VAT 20% Vóór belasting £1,000 en Belasting £200 tonen, Nultarief 0% £300 en Onbelast £50: Totalen geeft dan Verkopen vóór belasting £1,350, Belasting £200 en Verkopen incl. belasting £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Belastingrapport met de rijen van Verkoop en belasting per tarief en Totalen eronder"
      },
      {
        "type": "list",
        "items": [
          "Per betaalmethode toont de betalingen op deze documenten per einde van de periode, onbetaalde bedragen als Openstaande vorderingen, en contante afronding op een regel Incl. contante afronding … binnen de rij Contant.",
          "Niet als verkoop geteld verschijnt alleen bij ingehouden aanbetalingen en toont Ingehouden aanbetalingen met een ondertitel om de aangifte met een boekhouder te controleren; het telt niet mee bij verkopen of belasting.",
          "Winkels met Voorbelasting aftrekken aan, of met voorbelasting die in de periode is vastgelegd, zien ook Voorbelasting op inkooporders en Voorbelasting op kostenposten."
        ]
      },
      {
        "type": "h2",
        "text": "Op welke dag elk document meetelt"
      },
      {
        "type": "p",
        "text": "Tik op ⓘ naast Verkoop en belasting per tarief:"
      },
      {
        "type": "list",
        "items": [
          "Een ongeldig gemaakte verkoop telt mee in de periode waarin die ongeldig is gemaakt, als negatief bedrag, zodat een periode die al is aangegeven nooit verandert. Cijfers haalt de verkoop juist uit de periode van de verkoop.",
          "Een retour telt mee op de eigen datum. Bij een omruiling tellen de nieuwe artikelen als verkoop en de teruggebrachte artikelen als retour.",
          "Een voorbestelling telt mee op de afhaaldag; een verkoop op rekening op de dag van de verkoop."
        ]
      },
      {
        "type": "p",
        "text": "Een verkoop van 30 oktober die op 2 november ongeldig is gemaakt, blijft in de Verkopen van oktober staan en verschijnt als negatief bedrag in Retouren en ongeldig gemaakte verkopen van november. Een verkoop op rekening later vereffenen verplaatst die niet."
      },
      {
        "type": "h2",
        "text": "Geïnde belasting en totalen in Cijfers"
      },
      {
        "type": "p",
        "text": "De tegel Belasting is gelijk aan het totaal Belasting van Belastingrapport. Hij verschilt van de rij Belasting in Van omzet naar brutowinst in Cijfers alleen bij ongeldig gemaakte verkopen over periodes heen, omdat Cijfers een ongeldig gemaakte verkoop uit de oorspronkelijke periode haalt."
      },
      {
        "type": "note",
        "text": "Belastingrapport toont geïnde belasting op verkopen, nooit te betalen belasting (verschuldigde belasting min voorbelasting), omdat niet elk land die zo berekent, zoals de vereenvoudigde methode in Japan of het Flat Rate Scheme in het Verenigd Koninkrijk."
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
    "question": "Welke bedragen vul ik in bij de vakken van mijn BAS-, GST- of VAT-aangifte?",
    "keywords": [
      "aangiftevakken",
      "belastingrapport",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "btw-aangifte",
      "voorbelasting aftrekken",
      "Australië",
      "Nieuw-Zeeland",
      "Singapore",
      "Verenigd Koninkrijk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Voor winkels in Australië, Nieuw-Zeeland, Singapore of het Verenigd Koninkrijk opent Belastingrapport met Aangiftevakken, dat elk vak toont met het bedrag uit hetzelfde rapport. Het dekt Australië BAS · Simpler BAS, Nieuw-Zeeland GST101A, Singapore GST F5 en Verenigd Koninkrijk VAT Return, in elk abonnement."
      },
      {
        "type": "h2",
        "text": "Aangiftevakken openen"
      },
      {
        "type": "steps",
        "items": [
          "Open Cijfers.",
          "Tik op de tegel Belasting om Belastingrapport te openen."
        ]
      },
      {
        "type": "p",
        "text": "Aangiftevakken is de eerste kaart, boven Verkoop en belasting per tarief, en de ondertitel noemt de aangifte. Elk bedrag komt uit hetzelfde rapport, centen inbegrepen, en er wordt niets herberekend. Het geëxporteerde PDF-rapport opent met dezelfde kaart. Winkels die zijn ingesteld voordat de app het land vastlegde, tellen op valuta (AUD, NZD, SGD of GBP); andere winkels hebben geen kaart Aangiftevakken."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Kaart Aangiftevakken bovenaan Belastingrapport met vak 1, 4, 6 en 7 van de VAT Return van het Verenigd Koninkrijk"
      },
      {
        "type": "h2",
        "text": "Australië BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Verkopen met GST, GST-vrije en onbelaste verkopen inbegrepen; antwoord Ja op “Does the amount shown at G1 include GST?”",
          "1A GST on sales: Belasting op verkopen",
          "1B GST on purchases: Aftrekbare belasting op inkooporders en kostenposten"
        ]
      },
      {
        "type": "p",
        "text": "De ATO vraagt om hele dollars: laat de centen op het BAS weg en rond nooit naar boven af."
      },
      {
        "type": "h2",
        "text": "Nieuw-Zeeland GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: Verkopen met GST, verkopen tegen nultarief inbegrepen, onbelaste verkopen niet meegeteld",
          "Box 6 Zero-rated supplies: Verkopen tegen nultarief",
          "Box 11 Total purchases and expenses: Inkooporders en kostenposten met GST, GST inbegrepen; inkopen zonder voorbelasting of tegen nultarief niet meegeteld"
        ]
      },
      {
        "type": "p",
        "text": "myIR berekent vak 8 en vak 12 als 3/23, wat enkele centen kan afwijken van de belasting in het rapport."
      },
      {
        "type": "h2",
        "text": "Singapore GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: Belaste verkopen vóór belasting",
          "Box 2 Total value of zero-rated supplies: Verkopen tegen nultarief; alleen export en internationale diensten kunnen tegen nultarief worden verkocht",
          "Box 5 Total value of taxable purchases: Inkooporders en kostenposten met GST of tegen nultarief, vóór belasting; inkopen zonder voorbelasting niet meegeteld",
          "Box 6 Output tax due: Belasting op verkopen",
          "Box 7 Input tax and refunds claimed: Aftrekbare belasting op inkooporders en kostenposten"
        ]
      },
      {
        "type": "h2",
        "text": "Verenigd Koninkrijk VAT Return"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: Belasting op verkopen",
          "Box 4 VAT reclaimed on purchases and other inputs: Aftrekbare belasting op inkooporders en kostenposten",
          "Box 6 Total value of sales and all other outputs excluding any VAT: Verkopen vóór belasting, verkopen tegen nultarief, vrijgestelde en onbelaste verkopen inbegrepen",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: Inkooporders en kostenposten vóór belasting, inkopen zonder voorbelasting inbegrepen; haal vastgelegde salarissen en lokale belasting op bedrijfsgebouwen eruit"
        ]
      },
      {
        "type": "p",
        "text": "Dit geldt voor standaard VAT-boekhouding; bij het Flat Rate Scheme worden vak 1 en vak 6 anders berekend. In het Verenigd Koninkrijk is VAT over een aanbetaling verschuldigd bij ontvangst; DingPOS boekt een voorbestelling bij afhalen."
      },
      {
        "type": "p",
        "text": "Voorbeeld voor een kwartaal in het Verenigd Koninkrijk: £1,000 aan verkopen met VAT 20% vóór belasting (belasting £200), £300 tegen nultarief, £50 onbelast, inkooporders van £400 plus £80 VAT en kostenposten van £250 zonder voorbelasting geven vak 1 £200, vak 4 £80, vak 6 £1,350 en vak 7 £650."
      },
      {
        "type": "h2",
        "text": "Lege vakken en toegang voor medewerkers"
      },
      {
        "type": "p",
        "text": "Vakken die de belastingdienst zelf berekent en verschuldigde bedragen worden weggelaten (vak 3 en 5 van het Verenigd Koninkrijk; vak 3 van Singapore, vrijgestelde leveringen). In Nieuw-Zeeland en Singapore staan onbelaste verkopen in geen enkel vak; overleg met je boekhouder als daar belasting over had moeten worden berekend."
      },
      {
        "type": "p",
        "text": "Vakken met voorbelasting (AU 1B, NZ 11, SG 5 en 7, VK 4 en 7) vragen Voorbelasting aftrekken, anders tonen ze — en Geen voorbelasting vastgelegd, nooit 0. Vak 7 van het Verenigd Koninkrijk vraagt zowel Voorbelasting op inkooporders als Voorbelasting op kostenposten; alleen inkooporders vullen vak 4 en laten vak 7 op — staan."
      },
      {
        "type": "p",
        "text": "Medewerkers die de toestemming Kostprijs en winst of Winst en verlies, kosten missen, zien de vakken die beide kaarten bij elkaar optellen niet totdat een manager goedkeurt via Vraag een manager om goedkeuring."
      },
      {
        "type": "note",
        "text": "Berekend op verkoop- en factuurdatum; DingPOS houdt geen betaaldatums bij. Als je aangifte doet op kas- of betalingsbasis, pas deze bedragen dan aan."
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
    "question": "Hoe maak ik een actie of korting aan in mijn kassa-app?",
    "keywords": [
      "actie",
      "korting",
      "1+1 gratis",
      "drempel",
      "happy hour",
      "kortingsbon",
      "aanbieding"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Instellingen → Acties. Je kunt onder meer de volgende typen maken:"
      },
      {
        "type": "list",
        "items": [
          "Bestedingsdrempel: besteed X en krijg Y korting of Y% korting.",
          "Koop-één-krijg-één-acties en acties op het n-de artikel.",
          "Vermenigvuldigers voor bonuspunten.",
          "Aanbiedingen alleen voor een bepaald klantniveau of tijdens de verjaardagsmaand van de klant.",
          "Koop A en krijg B, extra's die je kunt bijkopen en bundels met een vaste prijs."
        ]
      },
      {
        "type": "p",
        "text": "Elke actie kun je inplannen (Happy Hour-tijdvakken, bepaalde weekdagen, over middernacht heen), beperken tot specifieke producten en regelen met prioriteit, combineerregels en gebruikslimieten. Acties die van toepassing zijn, worden bij het afrekenen automatisch toegepast — kortingscodes zijn niet nodig."
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
    "question": "Mijn actie wordt niet toegepast bij het afrekenen — wat controleer ik?",
    "keywords": [
      "actie",
      "werkt niet",
      "niet toegepast",
      "korting werkt niet",
      "probleem oplossen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Loop de meest voorkomende oorzaken in deze volgorde na:"
      },
      {
        "type": "steps",
        "items": [
          "Planning: valt vandaag binnen de actieve data? Beperkt een Happy Hour-tijdvak de weekdag of het tijdstip?",
          "Bereik: vallen de artikelen in de winkelmand onder de producten of categorieën van de actie? Staat het product op Sluit uit van acties (producten met open prijs standaard wel)? Is de bestedingsdrempel bereikt?",
          "Doelgroep: is de actie beperkt tot een klantniveau of de verjaardagsmaand? Is die klant bij het afrekenen gekozen?",
          "Gebruikslimiet: is het maximum in totaal of het maximum voor deze klant bereikt? De limiet per klant van een verjaardagsmaand-actie telt per kalenderjaar.",
          "Combineren: blokkeert een actie met hogere prioriteit en de optie \"Volgende acties stoppen als deze wordt toegepast\" jouw actie?"
        ]
      },
      {
        "type": "p",
        "text": "Klopt alles en wordt de actie toch niet toegepast? Mail ons dan een screenshot van de instellingen van de actie, dan zoeken we het samen met je uit."
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
    "question": "Hoe werkt sparen en inwisselen van punten voor klanten?",
    "keywords": [
      "punten",
      "spaarpunten",
      "spaarprogramma",
      "klantenkaart",
      "inwisselen",
      "welkomstbonus",
      "puntencorrectie"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Instellingen → Spaarprogramma en stel twee regels in: ontvang Y punten per X besteed en wissel N punten in voor M korting (met een optioneel maximum per bestelling). Nieuwe klanten kun je ook automatisch een welkomstbonus in punten geven. In een nieuwe winkel staan punten standaard uit: zet Spaarprogramma inschakelen aan en vul een regel in. Staat de schakelaar aan zonder dat er een regel is ingesteld, dan zie je de melding “Er is nog geen spaar- of inwisselregel ingesteld, dus met verkopen worden geen punten gespaard of ingewisseld.”"
      },
      {
        "type": "p",
        "text": "Koppel de klant aan de verkoop, in de winkelmand of op het afrekenscherm, en de punten worden automatisch gespaard; om in te wisselen voer je het aantal te gebruiken punten in. Het scherm na een geslaagde verkoop toont de gespaarde punten en het nieuwe saldo, zoals “+22 punten · totaal 122 punten”. Bij een verkoop op rekening of een voorbestelling die nog niet volledig is betaald, komen de punten er pas bij zodra het geld binnenkomt; dan staat er “toegevoegd na vereffening” of “toegevoegd na betaling bij afhalen”. Maak je een bestelling ongeldig, dan worden de daarmee gespaarde punten teruggedraaid en de ingewisselde punten teruggegeven."
      },
      {
        "type": "p",
        "text": "Wil je zelf punten toevoegen of aftrekken (bijvoorbeeld voor een gemiste aankoop)? Tik in de klantgegevens op Pas aan op de kaart Punten, kies Voeg toe of Trek af, voer de punten in en geef eventueel een reden (maximaal 100 tekens). Je kunt niet meer punten aftrekken dan de klant heeft. Elke aanpassing blijft in de puntenhistorie staan, met het saldo ervoor en erna, de reden en wie de aanpassing heeft gedaan."
      },
      {
        "type": "note",
        "text": "Handmatige puntencorrectie is er sinds v3.5. Bij Pro moeten medewerkers van wie de rol goedkeuring vereist voor Handmatige puntencorrectie (standaard de rol Medewerker) bij het bevestigen de pincode van een manager of de eigenaar invoeren."
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
    "question": "Waarvoor dienen klantniveaus?",
    "keywords": [
      "niveau",
      "klantniveau",
      "vip",
      "goud",
      "opwaarderen",
      "lidmaatschap"
    ],
    "content": [
      {
        "type": "p",
        "text": "Klantniveaus (bijv. Standaard, Zilver, Goud) hebben twee doelen: acties kunnen erop gericht zijn (bijv. 10% korting alleen voor Goud) en je ziet bij het afrekenen in één oogopslag welke status een klant heeft."
      },
      {
        "type": "p",
        "text": "Niveaus kunnen automatisch worden opgewaardeerd op basis van regels die je zelf instelt (bijv. totale bestedingen), of handmatig worden toegewezen. Heeft een ongeldig gemaakte bestelling een opwaardering veroorzaakt, dan wordt het niveau automatisch teruggedraaid."
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
    "question": "Hoe maak ik een back-up van mijn gegevens?",
    "keywords": [
      "back-up",
      "backup maken",
      "icloud",
      "google drive",
      "dropbox",
      "cloud",
      "momentopname"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Instellingen → Cloudback-up, kies iCloud, Google Drive of Dropbox en geef toestemming. Daarna kun je op elk moment handmatig een back-up maken. Voor iCloud moet deze iPad zijn aangemeld bij iCloud met iCloud Drive aan, en moet DingPOS iCloud Drive mogen gebruiken."
      },
      {
        "type": "p",
        "text": "Back-ups komen in je eigen cloudaccount. Elke cloud bewaart alleen de nieuwste: één momentopname van je gegevens en één bestand met productfoto’s. Elke nieuwe back-up overschrijft de vorige."
      },
      {
        "type": "note",
        "text": "Omdat een nieuwe back-up de oude vervangt, maak je geen back-up als je vermoedt dat je gegevens al niet meer kloppen (bijvoorbeeld doordat per ongeluk een aantal producten is verwijderd). Mail ons dan, dan bepalen we samen de volgende stap."
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
    "question": "iCloud-back-up zegt “Niet verbonden”: wat moet ik doen?",
    "keywords": [
      "icloud",
      "niet verbonden",
      "icloud drive",
      "back-up mislukt",
      "kan geen verbinding maken"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS toont iCloud alleen als verbonden als het ook echt gebruikt kan worden. Staat er Niet verbonden, controleer dan in de app Instellingen van de iPad drie dingen:"
      },
      {
        "type": "steps",
        "items": [
          "Je bent aangemeld met je Apple-account.",
          "iCloud Drive staat aan.",
          "DingPOS mag iCloud Drive gebruiken."
        ]
      },
      {
        "type": "p",
        "text": "Staan alle drie aan, ga dan terug naar Cloudback-up in DingPOS en iCloud wordt als verbonden getoond. Back-ups worden bewaard in de eigen map van DingPOS in iCloud Drive."
      },
      {
        "type": "note",
        "text": "In versies vóór v3.0 werkte de iCloud-back-up niet en mislukte hij elke keer met “Backup.SyncError error 0”. Werk DingPOS eerst bij via de App Store."
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
    "question": "Hoe zet ik mijn gegevens over naar een nieuwe iPad?",
    "keywords": [
      "overzetten",
      "nieuwe ipad",
      "herstellen",
      "verhuizen",
      "gegevens overzetten",
      "back-up terugzetten"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Oude iPad: ga naar Instellingen → Cloudback-up en maak een handmatige back-up. Controleer of de back-uptijd is bijgewerkt.",
          "Nieuwe iPad: installeer DingPOS en doorloop de installatie-assistent.",
          "Nieuwe iPad: ga naar Instellingen → Cloudback-up, verbind hetzelfde cloudaccount en herstel."
        ]
      },
      {
        "type": "p",
        "text": "Als je op Herstel tikt, zie je eerst een voorbeeld: het aantal producten, bestellingen en klanten van deze iPad naast dat van de momentopname, plus elke bestelling die het herstel zou verwijderen. Er verandert niets op deze iPad voordat je bevestigt. Een momentopname van een nieuwere versie van DingPOS vraagt je eerst de app bij te werken. Productfoto’s worden ook hersteld."
      },
      {
        "type": "note",
        "text": "Een herstel vervangt alle gegevens op deze iPad door de back-up: bestellingen die na die back-up op deze iPad zijn gemaakt, zijn dan weg. Controleer dat je met het juiste cloudaccount bent verbonden; heb je het verkeerde hersteld, gebruik dan Herstel ongedaan maken."
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
    "question": "Blijven mijn gegevens bewaard als ik de app verwijder?",
    "keywords": [
      "verwijderen",
      "app verwijderen",
      "gegevens kwijt",
      "gegevensverlies",
      "deïnstalleren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nee. DingPOS slaat alles lokaal op je apparaat op. Als je de app verwijdert, worden alle producten, bestellingen, leden en instellingen definitief gewist, tenzij je cloudback-up hebt ingeschakeld."
      },
      {
        "type": "note",
        "text": "Maak voordat je de app verwijdert altijd een handmatige back-up en controleer of die is gelukt. Herstel na het opnieuw installeren vanuit de cloud."
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
    "question": "De app toont “Kan de winkelgegevens niet openen”: wat nu?",
    "keywords": [
      "kan niet openen",
      "app opent niet",
      "crash",
      "app crasht bij opstarten",
      "database",
      "winkelgegevens"
    ],
    "content": [
      {
        "type": "p",
        "text": "Verwijder de app niet. Dit scherm betekent dat DingPOS je winkelgegevens niet kon lezen, maar de gegevens staan nog op deze iPad. Verwijder je de app, dan verdwijnen ze samen met de app."
      },
      {
        "type": "p",
        "text": "Tik eerst op Probeer opnieuw; als dat lukt, opent de app zoals gewoonlijk. Blijft het gebeuren, tik dan op Neem contact op met support en laat het ons weten, dan helpen we je je gegevens terug te krijgen. Dit scherm verplaatst of verwijdert nooit bestanden."
      },
      {
        "type": "p",
        "text": "Bij de eerste start na een update, of na het herstellen van een back-up van een oudere versie, zie je mogelijk eerst “Je gegevens worden bijgewerkt…”. Dan worden je winkelgegevens omgezet naar een nieuwer formaat; hoe meer gegevens je hebt, hoe langer dat duurt. De app opent vanzelf zodra het klaar is. Hij is niet vastgelopen."
      },
      {
        "type": "note",
        "text": "De meest voorkomende oorzaak is dat de app midden in een herstel is afgesloten. Vóór v3.0 crashte de app daardoor bij elke start; sinds v3.0 stopt hij in plaats daarvan op dit scherm."
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
    "question": "Kan ik twee iPads samen gebruiken?",
    "keywords": [
      "twee ipads",
      "meerdere apparaten",
      "synchroniseren",
      "delen",
      "tweede kassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "De gegevens van elke iPad zijn momenteel onafhankelijk: één gegevensset in realtime delen over twee apparaten wordt nog niet ondersteund."
      },
      {
        "type": "p",
        "text": "Via een cloudback-up (back-up maken → herstellen) kun je gegevens van de ene iPad naar de andere kopiëren. Dat werkt goed als je van apparaat wisselt of een tweede iPad wilt vullen. Bestellingen die je op elk apparaat apart afrekent, worden echter niet automatisch samengevoegd. Synchronisatie tussen meerdere apparaten staat op onze roadmap."
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
    "question": "Ik heb de verkeerde back-up hersteld. Kan ik dat ongedaan maken?",
    "keywords": [
      "herstel ongedaan maken",
      "herstellen",
      "verkeerde momentopname",
      "herstelregistraties",
      "gegevens kwijt",
      "terugzetten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Bij elk herstel vanuit de cloud blijven de vervangen gegevens bewaard als kopie van vóór het herstel. In Instellingen → Cloudback-up zie je op een kaart wanneer het laatste herstel plaatsvond en waarvandaan. Tik op Herstel ongedaan maken, bekijk het voorbeeld en bevestig: de gegevens staan weer zoals vóór het herstel en de app laadt opnieuw."
      },
      {
        "type": "list",
        "items": [
          "Herstel ongedaan maken is zelf ook een herstel en bewaart weer een kopie van wat het vervangt, dus als je er nog eens op tikt, ga je weer terug.",
          "Alleen de nieuwste kopie wordt bewaard; het volgende herstel vervangt die.",
          "Alleen gegevens komen terug: bij producten die na de momentopname zijn toegevoegd, ontbreekt de afbeelding."
        ]
      },
      {
        "type": "p",
        "text": "Wil je zien wie heeft hersteld, wanneer en vanuit welke momentopname? Tik op Bekijk herstelregistraties op hetzelfde scherm: per herstel zie je het tijdstip, de medewerker, de bron, het aantal producten, bestellingen en klanten voor en na, en elke bestelling die is verwijderd. De registraties staan op deze iPad en worden nooit door een herstel vervangen."
      },
      {
        "type": "note",
        "text": "Het herstelvoorbeeld en Herstel ongedaan maken werken in elk abonnement; herstelregistraties bekijken is een Pro-functie. Registraties worden ook zonder Pro bijgehouden (alleen zonder medewerker), dus als je later Pro neemt, zie je ze allemaal."
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
    "question": "Hoe voeg ik medewerkers toe en wissel ik van persoon aan de kassa?",
    "keywords": [
      "personeel",
      "medewerker",
      "manager",
      "account",
      "pincode",
      "actieve medewerker",
      "wisselen",
      "dienstwissel",
      "kassamedewerker"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tik in de zijbalk op Personeel. De eerste keer stel je de eigenaar in: een naam en een pincode van 4 cijfers. Voor het toevoegen van medewerkers en het wijzigen van toestemmingen heb je deze pincode nodig. Onthoud hem dus goed, want hij kan niet worden gereset."
      },
      {
        "type": "steps",
        "items": [
          "Tik op de pagina Personeel op Voeg medewerker toe, vul een naam in, kies een rol (Manager of Medewerker) en stel een pincode van 4 cijfers in.",
          "De actieve medewerker staat onderaan in de zijbalk en rechtsboven bij het afrekenen. Tik bij een dienstwissel op die naam, kies jouw naam en voer je pincode in.",
          "Vanaf dat moment wordt bij elke bestelling, betaling en voorraad- of puntenmutatie vastgelegd wie het heeft afgehandeld. Dat zie je in de bestellijst en in de details. Bij ongeldig gemaakte bestellingen staat ook wie ze ongeldig heeft gemaakt."
        ]
      },
      {
        "type": "p",
        "text": "Als iemand weggaat, gebruik je Deactiveer deze medewerker: de geschiedenis blijft behouden en je kunt de medewerker later weer activeren. Een naam wijzigen heeft geen invloed op oude bestellingen; die behouden de naam van toen."
      },
      {
        "type": "note",
        "text": "Personeel is een Pro-functie (ook beschikbaar tijdens de proefperiode). Als Pro afloopt, blijven de personeelsgegevens en de afhandelaar van elke bestelling bewaard en worden nieuwe bestellingen op naam van de eigenaar vastgelegd. Neem je weer een Pro-abonnement, dan is alles terug."
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
    "question": "Wat als ik de pincode van de eigenaar vergeten ben?",
    "keywords": [
      "pincode",
      "vergeten",
      "wachtwoord",
      "resetten",
      "eigenaar",
      "herstellen",
      "buitengesloten"
    ],
    "content": [
      {
        "type": "p",
        "text": "De pincode van de eigenaar kan niet worden gereset en ook ons supportteam kan hem niet ontgrendelen. De pincode wordt bewaard bij de gegevens van je winkel. Als je de app verwijdert, opnieuw installeert en vanuit de cloud herstelt, krijg je dus dezelfde pincode terug."
      },
      {
        "type": "p",
        "text": "Bij het aanmaken van de eigenaar en bij elke wijziging van de pincode van de eigenaar verschijnt de waarschuwing “Onthoud deze pincode. Als je hem vergeet, kan hij niet worden gereset.” Bewaar hem op een plek waar alleen jij bij kunt."
      },
      {
        "type": "p",
        "text": "Zonder de pincode van de eigenaar blijft alles wat hem vereist buiten bereik: medewerkers toevoegen of wijzigen, toestemmingen per rol aanpassen en het activiteitenlogboek bekijken. Medewerkers kunnen met hun eigen pincode gewoon blijven afrekenen en het dagelijkse werk doen."
      },
      {
        "type": "note",
        "text": "Als een medewerker zijn of haar pincode vergeet, is dat geen probleem: de eigenaar kan hem resetten onder Personeel."
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
    "question": "Hoe werken toestemmingen voor medewerkers en goedkeuring door een manager?",
    "keywords": [
      "toestemmingen",
      "goedkeuring",
      "manager",
      "kortingslimiet",
      "medewerker",
      "kostprijs",
      "rol"
    ],
    "content": [
      {
        "type": "p",
        "text": "Een toestemming heeft twee waarden: Toegestaan of Goedkeuring nodig. Niets is volledig verboden. Als een medewerker een handeling uitvoert waarvoor goedkeuring nodig is, kiest een collega die deze handeling wel mag uitvoeren diens naam en voert die collega diens pincode in om de handeling goed te keuren."
      },
      {
        "type": "list",
        "items": [
          "Handelingen (handmatige voorraadcorrectie, handmatige puntencorrectie, productbeheer, afrekenen boven de kortingslimiet): één goedkeuring geldt voor die ene handeling.",
          "Overzichten (kostprijs en winst, Cijfers, W&V en kosten, Instellingen, back-up en herstel): een goedkeuring ontgrendelt tot de actieve medewerker wisselt of de app naar de achtergrond gaat.",
          "De kortingslimiet geldt voor handmatige kortingen en wordt één keer gecontroleerd bij het afrekenen. Automatische kortingsacties en het inwisselen van punten tellen niet mee."
        ]
      },
      {
        "type": "p",
        "text": "Standaardinstellingen: Managers mogen alles behalve back-up en herstel, en W&V en kosten, zonder kortingslimiet. Medewerkers hebben overal goedkeuring voor nodig, met een limiet van 10%. De eigenaar mag altijd alles; de toestemmingen van de eigenaar kunnen niet worden gewijzigd. Om dit te wijzigen ga je naar Personeel → Toestemmingen per rol, tik je op Wijzig en bewaar je één keer. Het geldt direct voor iedereen."
      },
      {
        "type": "note",
        "text": "Voor ongeldig maken, retouren, verkoop op rekening en inkoop bestaat bewust geen toestemming; er wordt alleen vastgelegd wie ze heeft afgehandeld. Om ze later terug te kijken, gebruik je het activiteitenlogboek."
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
    "question": "Hoe zie ik wie een bestelling ongeldig heeft gemaakt, de voorraad heeft aangepast of een prijs heeft gewijzigd?",
    "keywords": [
      "activiteitenlogboek",
      "logboek",
      "wie heeft gewijzigd",
      "ongeldig maken",
      "prijswijziging",
      "voorraadaanpassing",
      "verwijderd product",
      "goedkeuringen",
      "controle"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gebruik het activiteitenlogboek. Tik op de pagina Personeel rechtsboven op Activiteitenlogboek en voer de pincode van de eigenaar in. Je ziet dan de gevoelige handelingen van de winkel, de nieuwste eerst: ongeldig gemaakte bestellingen, retouren, voorraadaanpassingen en hertellingen, handmatige puntenaanpassingen, goedkeuringen, wijzigingen van medewerkers en toestemmingen, wijzigingen van de pincode van de eigenaar, belastinginstellingen, wijzigingen van productprijs en kostprijs en verwijderde producten. Gewone afrekeningen staan er niet in."
      },
      {
        "type": "list",
        "items": [
          "Elke regel toont waar het om gaat, wie wat wanneer heeft gedaan en wat het resultaat was, bijvoorbeeld “M prijs $390 → $350”. De reden die is opgegeven bij een ongeldig gemaakte bestelling, een retour, een voorraadaanpassing of een puntenaanpassing staat op de derde regel.",
          "Filter op medewerker (ook gedeactiveerde), soort handeling en Vandaag / Deze week / Deze maand.",
          "Tik op een regel die naar een bestelling, product of klant verwijst om de details te openen.",
          "De details van een bestelling, een product en de pagina van elke medewerker hebben elk een eigen lijst met alleen de registraties over dat onderdeel.",
          "Verwijderde producten tonen in het logboek nog steeds hun naam en prijs van toen."
        ]
      },
      {
        "type": "note",
        "text": "Alle abonnementen leggen activiteiten vast; alleen het bekijken is een Pro-functie. Registraties uit de periode waarin Pro was verlopen, zie je dus zodra je weer een Pro-abonnement neemt. Het logboek wordt meegenomen in je back-ups in de cloud."
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
    "question": "Hoe werkt de gratis proefperiode?",
    "keywords": [
      "proefperiode",
      "gratis proberen",
      "30 dagen",
      "gratis kassa-app"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vanaf de eerste installatie krijg je 30 dagen lang alle functies van het Pro-abonnement, inclusief medewerkersaccounts, toestemmingen en het activiteitenlogboek — zonder account."
      },
      {
        "type": "p",
        "text": "Als je tijdens de proefperiode een abonnement afsluit, eindigt de proefperiode meteen en geldt vanaf dat moment het abonnement dat je hebt gekocht. Na de proefperiode blijven Pro-functies zoals medewerkers en het activiteitenlogboek alleen beschikbaar met een Pro-abonnement. Voor Cijfers is dat niet nodig: elk abonnement bevat alles daarvan."
      },
      {
        "type": "p",
        "text": "In de laatste 7 dagen en op de laatste dag herinnert de app je telkens één keer eraan hoeveel dagen er nog over zijn, dat afrekenen pauzeert als de proefperiode eindigt en dat je gegevens bewaard blijven."
      },
      {
        "type": "p",
        "text": "Alles wat je tijdens de proefperiode aanmaakt (producten, bestellingen, klanten) blijft volledig bewaard. Je gegevens worden nooit verwijderd, of je daarna nu een abonnement neemt of niet."
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
    "question": "Raak ik mijn gegevens kwijt als de proefperiode afloopt?",
    "keywords": [
      "proefperiode afgelopen",
      "verlopen",
      "afrekenen vergrendeld",
      "gegevens kwijt"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nee — je gegevens blijven voor altijd op je apparaat staan. Als de proefperiode afloopt, is afrekenen vergrendeld, maar je kunt nog steeds bestellingen bekijken, rapporten openen en producten beheren."
      },
      {
        "type": "p",
        "text": "Neem op elk moment een abonnement en afrekenen is direct weer beschikbaar, met al je gegevens precies zoals je ze hebt achtergelaten."
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
    "question": "Wat is het verschil tussen Lite, Standard en Pro?",
    "keywords": [
      "abonnementen",
      "lite",
      "standard",
      "pro",
      "verschil",
      "vergelijken",
      "upgraden",
      "downgraden",
      "prijzen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alle drie de abonnementen bevatten alle functies voor afrekenen, producten, bestellingen (met ongeldig maken, retouren en omruilingen), rapporten (alles in Cijfers en de maandelijkse W&V sinds v3.4, het belastingrapport en de export ervan sinds v3.6) en back-up in de cloud. Ze verschillen in de hulpmiddelen om je winkel te runnen:"
      },
      {
        "type": "list",
        "items": [
          "Lite: voor één persoon met een kraam die afrekenen en producten nodig heeft.",
          "Standard: voegt acties, kortingsvoorinstellingen, spaarpunten en klantniveaus, voorraadbeheer, inkoop, verkoop op rekening, voorbestellingen en kostenpercentages voor betaalmethoden toe.",
          "Pro: voegt medewerkersaccounts en toestemmingen, goedkeuring door een manager, het activiteitenlogboek en herstelregistraties toe — voor winkels met medewerkers."
        ]
      },
      {
        "type": "p",
        "text": "Heb je al Standard? Upgrade naar Pro vanaf de abonnementspagina: de factureringscyclus blijft hetzelfde, de upgrade gaat direct in en Apple rekent het verschil naar rato af. Terug van Pro naar Standard gaat in bij de verlenging. De prijzen zie je in de app en je kunt de abonnementen vergelijken op onze pagina Prijzen."
      },
      {
        "type": "note",
        "text": "Downgraden verwijdert nooit gegevens. Functies buiten je abonnement worden gepauzeerd, je gegevens blijven bewaard en als je weer een abonnement neemt, zijn ze terug."
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
    "question": "Hoe sluit ik een abonnement af, zeg ik het op of herstel ik een aankoop?",
    "keywords": [
      "abonnement afsluiten",
      "abonnement opzeggen",
      "aankopen herstellen",
      "prijs",
      "facturering"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abonnementen lopen via een in-app aankoop in de App Store — de abonnementen en prijzen zie je in de app. De betaling wordt door Apple verwerkt; wij zien je betaalgegevens nooit."
      },
      {
        "type": "list",
        "items": [
          "Opzeggen: beheer dit via Instellingen → Apple Account → Abonnementen op je apparaat. Zeg minstens 24 uur voor het einde van de lopende periode op om verlenging te voorkomen.",
          "Herstellen: tik na een nieuw apparaat of een herinstallatie op 'Herstel aankopen' op de abonnementspagina van DingPOS.",
          "Abonnement wijzigen: kies het nieuwe abonnement op de abonnementspagina van DingPOS. Upgrades (Standard naar Pro, maandelijks naar jaarlijks) gaan direct in, waarbij Apple het verschil naar rato afrekent; downgrades gaan in bij de verlenging."
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
    "question": "Een korting met bestedingsdrempel instellen",
    "keywords": [
      "drempel",
      "bestedingsdrempel",
      "korting vanaf bedrag",
      "instelgids",
      "uitleg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Instellingen → Acties → Voeg toe, kies het actietype met bestedingsdrempel en doe dan het volgende:"
      },
      {
        "type": "steps",
        "items": [
          "Stel het drempelbedrag en de korting in (vast bedrag of percentage).",
          "Kies het bereik: bepaalde producten, bepaalde categorieën, of laat het leeg voor de hele winkel.",
          "Stel de planning in: een startdatum is verplicht; laat de einddatum leeg voor een doorlopende actie.",
          "Bewaar — de actie gaat volgens planning van start en wordt bij het afrekenen automatisch toegepast, zonder codes."
        ]
      },
      {
        "type": "note",
        "text": "De drempel wordt getoetst aan het subtotaal van de artikelen binnen het bereik, niet aan de hele winkelmand. Bij een actie ‘besteed €1000 aan Drankjes’ tellen alleen drankjes mee voor de drempel, en producten met ‘Sluit uit van acties’ tellen nooit mee."
      },
      {
        "type": "p",
        "text": "Iets waar we vaak naar worden gevraagd: als eerst een actie met hogere prioriteit wordt toegepast, wordt de drempel getoetst aan het al verlaagde bedrag — een winkelmand die boven de drempel lijkt te zitten, kan er net onder vallen. Wil je dat de drempel eerst wordt beoordeeld, geef hem dan een lager prioriteitsnummer."
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
    "question": "Een 1+1 gratis- of derde-artikelactie instellen",
    "keywords": [
      "1+1 gratis",
      "2e halve prijs",
      "derde gratis",
      "koop x krijg y",
      "instelgids",
      "uitleg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maak een actie van het type Koop X / Krijg Y: stel in hoeveel artikelen er gekocht moeten worden, hoeveel je er krijgt en het kortingspercentage (100% = gratis). Beperk de actie tot bepaalde producten of een hele categorie — verschillende producten in dezelfde categorie vormen samen een groep."
      },
      {
        "type": "list",
        "items": [
          "Het afgeprijsde artikel is het goedkoopste in de groep, gewaardeerd tegen de huidige effectieve prijs — als een eerdere actie er al korting op gaf, is het Koop X / Krijg Y-bedrag gebaseerd op de verlaagde prijs, niet op de catalogusprijs.",
          "Wil je dat het label ‘3e artikel gratis’ de volle catalogusprijs toont, geef deze actie dan het laagste prioriteitsnummer zodat ze als eerste wordt berekend. Gaat eerst een korting op de hele winkelmand, dan is de getoonde aftrek op het gratis artikel kleiner dan de catalogusprijs — dat is een eigenschap van de rekenvolgorde die we uitgebreid hebben gecontroleerd, geen fout. Beide volgordes komen op vrijwel hetzelfde totaal uit; wat verandert is waar de korting zichtbaar staat."
        ]
      },
      {
        "type": "p",
        "text": "Tip: zet je belangrijkste aanbieding bovenaan in de prioriteit, zodat de kortingsspecificatie op de bon aansluit bij je marketingboodschap."
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
    "question": "Een puntenvermenigvuldiger voor extra punten instellen",
    "keywords": [
      "puntenvermenigvuldiger",
      "dubbele punten",
      "extra spaarpunten",
      "instelgids",
      "uitleg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maak een actie van het type Puntenvermenigvuldiger en stel de vermenigvuldiger in (een geheel getal van 2 of hoger). Voeg eventueel een bestedingsdrempel toe (bijv. besteed €500 → dubbele punten) en een planning (bijv. alleen op zaterdag)."
      },
      {
        "type": "list",
        "items": [
          "Als meerdere vermenigvuldigers tegelijk gelden, wordt alleen de hoogste toegepast — ze worden nooit vermenigvuldigd of opgeteld.",
          "De bestedingsdrempel wordt getoetst nadat punten zijn ingewisseld: als het totaal door het inwisselen van punten onder de drempel zakt, wordt de vermenigvuldiger deze keer niet toegepast.",
          "Bij het afrekenen moet een klant zijn gekozen om punten te sparen — bestellingen zonder klant leveren geen punten op, dus de vermenigvuldiger heeft niets om te vermenigvuldigen."
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
    "question": "Acties voor klantniveaus en verjaardagen instellen",
    "keywords": [
      "klantniveau",
      "niveau",
      "verjaardag",
      "verjaardagsactie",
      "vip",
      "instelgids",
      "uitleg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maak eerst niveaus aan onder Instellingen → Ledenniveaus (bijv. Goud) en richt de actie daarna op dat niveau. Stel voor verjaardagsacties de doelgroep in op Verjaardagsmaand en vul Limiet per klant in."
      },
      {
        "type": "list",
        "items": [
          "De klant moet bij het afrekenen zijn gekozen om de actie te activeren — de geschiktheid wordt beoordeeld aan de hand van de op dat moment gekozen klant.",
          "Voor een verjaardagsactie wordt de verjaardagsmaand van de klant gebruikt, dus vul het verjaardagsveld in; klanten zonder verjaardag worden nooit als jarig behandeld.",
          "Een verjaardagsactie vraagt om een limiet per klant, geteld per kalenderjaar: bij een limiet van 1 kan elke klant de actie één keer per jaar gebruiken en begint dat het jaar erop opnieuw. Zonder limiet kan de actie niet worden bewaard.",
          "Automatische niveauverhogingen worden beoordeeld zodra het afrekenen is voltooid; als de bestelling ongeldig wordt gemaakt, wordt een verhoging die ze veroorzaakte automatisch teruggedraaid."
        ]
      },
      {
        "type": "note",
        "text": "Vóór v3.2 gaf een actie voor de verjaardagsmaand een foutmelding en kon die niet worden bewaard, ook niet met een ingevulde limiet per klant. Overkomt je dat, werk DingPOS dan bij via de App Store."
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
    "question": "Cadeaus, extra artikelen tegen actieprijs en bundelprijzen instellen",
    "keywords": [
      "cadeau bij aankoop",
      "extra artikel",
      "bundel",
      "bundelprijs",
      "koop a krijg b",
      "instelgids"
    ],
    "content": [
      {
        "type": "p",
        "text": "Er zijn drie samengestelde actietypes: cadeau bij aankoop (koop A, krijg B), extra artikel tegen actieprijs (voeg €X toe voor Y) en bundelprijs (elke N voor €X). Cadeaus en extra artikelen wachten op bevestiging van de kassamedewerker; bundelprijzen worden automatisch toegepast."
      },
      {
        "type": "p",
        "text": "Cadeaus en extra artikelen wijzigen de winkelmand nooit uit zichzelf. Zodra aan de voorwaarden is voldaan, verschijnt er een voorstelbanner op het kassascherm, en de winkelmand verandert pas als de kassamedewerker op de banner op de knop met het cadeau- of +-symbool tikt (Kies cadeau of Kies extra artikel) — bewust, want bij cadeaus gaat het om fysieke voorraad: iemand moet bevestigen dat het artikel er is en dat de klant het wil."
      },
      {
        "type": "list",
        "items": [
          "Nadat je op het ✕ van de banner (Weiger) hebt getikt, verschijnt hetzelfde voorstel niet opnieuw voor deze winkelmand; bij een nieuwe of geleegde winkelmand verschijnt het opnieuw.",
          "Als de winkelmand niet meer aan de voorwaarden voldoet (bijvoorbeeld omdat het artikel dat het cadeau activeerde is verwijderd), wordt het cadeau of extra artikel automatisch verwijderd met een melding bovenaan, en het telt niet als gebruik (sinds v3.6).",
          "Sinds v3.4 houden openstaande aanbiedingen het afrekenen niet meer tegen: een gele regel onder de betaalknop, zoals “1 openstaande actieaanbieding wordt niet toegepast”, laat zien hoeveel er worden weggelaten (tik erop om te zien welke), en de bestelling gaat door zonder die aanbiedingen. Wil je dat het afrekenen zoals vroeger wacht, zet dan Aanbiedingen afhandelen voor het afrekenen aan in Instellingen → Apparaatvoorkeuren; dat geldt alleen voor deze iPad.",
          "Cadeau- en extraregels kunnen niet verder worden verlaagd door andere kortingsacties en tellen niet mee voor de drempels van andere acties."
        ]
      },
      {
        "type": "p",
        "text": "Bundelprijzen (automatisch toegepast sinds v2.4): zodra de winkelmand een bundel kan vormen, groepeert DingPOS die en rekent hem mee in het totaal — zonder vraag, en bundels kunnen niet worden gesplitst."
      },
      {
        "type": "list",
        "items": [
          "Een bundel wordt alleen gevormd als de winkelmand daardoor goedkoper wordt. Bij artikelen met dezelfde prijs worden artikelen zonder korting eerst gegroepeerd, en artikelen die al korting hebben, behouden die korting.",
          "Welke artikelen samen een bundel vormen, hangt alleen af van wat er in de winkelmand zit, nooit van de volgorde waarin ze zijn gescand.",
          "Elk artikel in de bundel toont zijn aandeel in de bundelkorting, en het bedrag van elke regel is na kortingen.",
          "Bij het afrekenen worden de bundels opnieuw gegroepeerd met de nieuwste prijzen; als het resultaat verandert, word je gevraagd het nieuwe totaal te bevestigen."
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
    "question": "Planning en Happy Hour van een actie instellen",
    "keywords": [
      "planning",
      "happy hour",
      "weekdag",
      "over middernacht",
      "actie plannen",
      "instelgids"
    ],
    "content": [
      {
        "type": "p",
        "text": "De planning van elke actie bestaat uit drie lagen: een datumbereik (start verplicht, einde optioneel), een dagelijks tijdvak (Happy Hour) en gekozen weekdagen. Aan alle drie moet worden voldaan om de actie te laten gelden."
      },
      {
        "type": "list",
        "items": [
          "Bij tijdvakken die over middernacht gaan (bijv. 22:00–02:00) wordt de weekdag bepaald door de dag waarop het tijdvak begint: als alleen vrijdag is gekozen, telt zaterdag 01:30 nog als vrijdagse sessie en geldt de actie — maar zaterdag 23:30 niet.",
          "De einddatum is een harde grens — ook als een Happy Hour-tijdvak nog loopt, stopt de actie zodra de einddatum voorbij is.",
          "De tijd wordt van de klok van de iPad gelezen, dus zorg dat de tijdzone en de tijd van het apparaat kloppen."
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
    "question": "Prioriteit, combineren en stoppen na toepassing uitgelegd",
    "keywords": [
      "prioriteit",
      "combineerbaar",
      "acties combineren",
      "volgende acties stoppen",
      "conflict",
      "instelgids"
    ],
    "content": [
      {
        "type": "p",
        "text": "Als meerdere acties tegelijk van toepassing zijn, bepalen drie instellingen de volgorde en de onderlinge werking:"
      },
      {
        "type": "list",
        "items": [
          "Prioriteit: lagere nummers worden eerst berekend. Sleep om de volgorde in de lijst met acties te wijzigen.",
          "Combineerbaar met andere acties (standaard aan): als dit uit staat, vergrendelt een artikelactie alleen de regels waarop ze korting gaf — andere artikelen kunnen nog latere artikelacties krijgen; een niet-combineerbare winkelmandactie blokkeert alle latere winkelmandacties.",
          "Volgende acties stoppen als deze wordt toegepast: zodra deze actie wordt toegepast, worden er geen verdere geldkortingen meer berekend — maar puntenvermenigvuldigers en cadeauvoorstellen blijven ongemoeid."
        ]
      },
      {
        "type": "note",
        "text": "Latere acties worden berekend over het al verlaagde bedrag: 10% korting plus 5% korting is niet 15% korting — de tweede korting geldt voor het totaal na de eerste. DingPOS zoekt ook nooit naar de voor de klant gunstigste combinatie; de volgorde wordt volledig bepaald door jouw prioriteiten."
      },
      {
        "type": "p",
        "text": "Weetje: als een korting op nul afrondt, telt de toepassing niet mee — en gaat er ook niets af van een gebruikslimiet."
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
    "question": "Komt er een koppeling met betaalterminals of pinbetalingen?",
    "keywords": [
      "betalingen",
      "pinbetaling",
      "betaalterminal",
      "koppeling",
      "betaalprovider"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS verwerkt momenteel geen betalingen: betaalmethoden zijn alleen labels voor je boekhouding, en echte betalingen lopen via je bestaande betaalterminal of betaalapp."
      },
      {
        "type": "p",
        "text": "Of we betalingen gaan koppelen hangt af van de vraag van gebruikers. Heb je dit nodig, stuur ons dan een bericht met de dienst die je gekoppeld wilt zien (welke betaalprovider, welke terminal) en hoe je die gebruikt. We bepalen de volgorde van de ontwikkeling op basis van het aantal verzoeken."
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
    "question": "Kan DingPOS e-facturen maken of bonnen printen?",
    "keywords": [
      "e-factuur",
      "factuur",
      "kassabon",
      "bonnenprinter",
      "printer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nog niet. Voor e-facturen en het printen van bonnen moeten we factuurapparaten en bonnenprinters aanschaffen om mee te testen en te ontwikkelen, en dat kost veel. Als klein team plannen we dit zodra het aantal gebruikers groeit en de inkomsten stabiel zijn."
      },
      {
        "type": "p",
        "text": "Heb je dit nodig, stuur ons dan een bericht met het model apparaat dat je gebruikt. We bepalen de volgorde van de ontwikkeling op basis van het aantal verzoeken."
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
    "question": "Kan ik een fysieke barcodescanner gebruiken?",
    "keywords": [
      "barcodescanner",
      "scanner",
      "bluetooth",
      "usb",
      "hardware"
    ],
    "content": [
      {
        "type": "p",
        "text": "Barcodes scannen met de camera om producten aan te maken kan al. Fysieke scanners (USB / Bluetooth) worden nog niet officieel ondersteund: net als andere hardware moeten we ze aanschaffen om te testen en te ontwikkelen, en we plannen ze in naarmate het aantal gebruikers groeit."
      },
      {
        "type": "note",
        "text": "Het zoekveld bij het afrekenen zoekt ook op barcodes, dus een scanner in toetsenbordmodus zou in theorie in dat veld kunnen typen en producten kunnen opzoeken. Dat hebben we echter niet op echte hardware getest, dus het is niet officieel ondersteund. Heb je een scanner getest die werkt, laat ons dan het model weten!"
      },
      {
        "type": "p",
        "text": "Heb je dit nodig, stuur ons dan een bericht. We bepalen de volgorde van de ontwikkeling op basis van het aantal verzoeken."
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
    "question": "Komt er een rapport voor maandelijkse vereffening?",
    "keywords": [
      "maandafsluiting",
      "maandrapport",
      "afstemmen",
      "boekhouding",
      "te betalen",
      "vorderingen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sinds v3.4 toont W&V de nettowinst van elke maand na de kostprijs van producten, de transactiekosten en je vaste en eenmalige kosten — zie “Hoe zie ik hoeveel ik elke maand echt heb verdiend?” Sinds v3.6 kun je in het belastingrapport een periode (bijvoorbeeld Deze maand) exporteren als CSV, Excel-werkmap of PDF-rapport voor je boekhouder, met de verkopen, de belasting, het ontvangen bedrag per betaalmethode en de vorderingen. W&V en de andere rapporten kun je nog niet exporteren, maar alles wat je nodig hebt om af te stemmen, zit al in de app:"
      },
      {
        "type": "list",
        "items": [
          "Zet Cijfers op Deze maand voor de omzet, het ontvangen bedrag, de winst en de verdeling per betaalmethode van de maand.",
          "Inkopen bij leveranciers met maandelijkse betaling staan onder Te betalen in Inkoop, waar je een hele maand in één keer kunt vereffenen.",
          "Verkopen op rekening aan klanten staan onder Orders → Vorderingen, waar je een hele maand in één keer kunt vereffenen."
        ]
      },
      {
        "type": "p",
        "text": "Heb je een maandrapport nodig dat je kunt exporteren of printen en dat verder gaat dan het belastingrapport, stuur ons dan een bericht met de velden die je erin wilt zien. We bepalen de volgorde van de ontwikkeling op basis van het aantal verzoeken."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
