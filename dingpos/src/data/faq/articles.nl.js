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
        "text": "Als je DingPOS voor het eerst opent, zet een installatiewizard je winkel op in twee stappen en een paar minuten:"
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
        "text": "De valuta kun je na de installatie niet meer wijzigen; de btw-tarieven en de btw-modus kun je later allebei aanpassen in Instellingen → Winkelgegevens. In de Verenigde Staten, Canada, Brazilië en Micronesië hangt het tarief af van de staat, provincie of stad. Daarom is het tariefveld daar eerst leeg en vul je het tarief in dat je rekent om door te gaan. Een tarief moet hoger zijn dan 0: een winkel die geen btw rekent, verwijdert de rij. De lijst met 175 landen en de keuze van valuta kwamen met v3.2; eerdere versies boden 15 landen."
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
        "text": "Wil je een tijdje geen belasting berekenen, zet dan bovenaan de kaart Btw Belasting berekenen uit: alle latere verkopen zijn zonder belasting, ook voor artikelen die al in een winkelmand zitten. Elk product behoudt zijn btw-tarieven, en als je de schakelaar weer aanzet, zijn ze weer zoals ze waren."
      },
      {
        "type": "p",
        "text": "Volledige rekenvolgorde: artikelkortingen en acties → winkelmandkorting → inwisselen van punten → btw. Bedragen worden afgerond volgens de half-up-methode: vanaf 0,5 naar boven, op het aantal decimalen van de valuta (bijv. 0 voor TWD, 2 voor USD)."
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
        "text": "Een nieuwe winkel start met twee betaalmethoden, Contant en Creditcard, bij de installatie al in de taal van de app. Onder Instellingen → Betaalmethoden voeg je elke andere methode toe (bijv. Apple Pay, LINE Pay, een lokale wallet) en kun je methoden verwijderen of anders sorteren."
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
        "text": "Ja. Tik onder Instellingen → Betaalmethoden op een betaalmethode (of voeg een nieuwe toe) en vul Transactiekosten in: een percentage, een vast bedrag per transactie, of allebei. Vanaf dat moment wordt bij elke betaling via die methode een kostenraming vastgelegd, op basis van het percentage dat op dat moment gold."
      },
      {
        "type": "p",
        "text": "Bij Cijfers toont de kaart Betaalmethoden onder elke methode met kosten een regel “Kosten · Netto”, en onderaan de kaart staan de geschatte kosten en het geschatte netto ontvangen bedrag over de hele periode."
      },
      {
        "type": "list",
        "items": [
          "Vul het percentage in dat je aanbieder echt inhoudt, inclusief btw — bij 3% plus 5% btw vul je 3,15% in. Laat beide velden leeg als er geen kosten zijn.",
          "Een gewijzigd percentage geldt alleen voor latere betalingen; kosten die al zijn vastgelegd blijven zoals ze waren.",
          "“Percentage wordt teruggegeven bij terugbetalingen” staat standaard aan, voor aanbieders die hun kosten teruggeven als je terugbetaalt. De instelling geldt voor retouren en terugbetaalde aanbetalingen op voorbestellingen: staat hij aan, dan komt het percentage terug; de vaste kosten nooit. Een ongeldig gemaakte verkoop of ongedaan gemaakte vereffening negeert de instelling en draait de volledige vastgelegde kosten terug, vaste kosten inbegrepen. In beide gevallen krijgt de klant hetzelfde bedrag terug.",
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
        "text": "Schakel bij het afrekenen bovenaan het scherm van Verkoop naar Voorbestelling, kies de afhaaldatum, voer de aanbetaling in (alles van 0 tot het volledige bedrag, met snelkeuzes 30% / 50% / Volledig) en kies hoe de aanbetaling wordt betaald. Koppel een klant, zodat je contact kunt opnemen als de spullen binnen zijn."
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
        "text": "Zodra een product varianten heeft, verdwijnt het veld Prijs en krijgt elke combinatie onder Variantprijs en -voorraad een eigen prijs en een eigen voorraad (sinds v3.2; eerdere versies vragen nog om een productprijs). De kassa, de productlijst en de productdetails tonen een bereik van de laagste tot de hoogste prijs, zoals “NT$350–NT$390”, of één prijs als alle combinaties evenveel kosten; sorteren op prijs gebruikt de laagste prijs van een combinatie. Aan de kassa toont een tik op het product eerst een variantkeuze, voordat het in de winkelmand komt."
      },
      {
        "type": "p",
        "text": "Je hoeft niet voor elke combinatie een kostprijs in te vullen: een leeg veld Kostprijs betekent Volgt product, dus de kostprijs van het product wordt gebruikt en verandert mee. Een getal maakt er Eigen kostprijs van — ook 0. Met Kostprijs product voor alle gebruiken wis je alle eigen kostprijzen in één keer."
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
        "text": "Zodra het aan staat, verlagen verkopen en voorbestellingen de voorraad automatisch. Bij ongeldig gemaakte verkopen, retouren en geannuleerde voorbestellingen wordt de voorraad weer aangevuld; een ontvangen inkooporder verhoogt de voorraad. Elke mutatie wordt vastgelegd in een volledig overzicht. Lage voorraad wordt met een kleur gemarkeerd."
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
        "text": "Gebruik Pas voorraad aan. Tik bij een product waarvan je de voorraad bijhoudt in de productdetails op Pas voorraad aan, kies Haal eruit of Voeg toe, vul het aantal in, kies een reden en voeg eventueel een notitie toe (maximaal 100 tekens). Het scherm berekent de voorraad na de wijziging, en de regel onder de reden zegt of het in de W&V terechtkomt."
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
        "text": "Bij Inkoop in de zijbalk beheer je leveranciers en inkooporders. Bij een leverancier bewaar je een naam, contactpersoon, telefoonnummer, adres en de standaard betaalvoorwaarde (Betalen bij ontvangst of Maandkrediet)."
      },
      {
        "type": "steps",
        "items": [
          "Tik op Nieuwe inkoop, kies de leverancier en voeg de producten, aantallen en kostprijzen per stuk toe (vooraf ingevuld met de huidige kostprijs van elk product). Je kunt ook verzendkosten toevoegen. Staat de leverancier er nog niet bij, tik dan linksboven in de leverancierslijst op Voeg leverancier toe. De nieuwe leverancier komt direct terug in de inkooporder.",
          "Een concept raakt de voorraad of de te betalen bedragen nooit aan. Je kunt het vrij wijzigen of verwijderen.",
          "Zodra de goederen binnen zijn, tik je op Voorraad ontvangen: de bijgehouden voorraad gaat omhoog en de inkooporder krijgt een nummer en wordt vergrendeld. Bij ontvangst wordt standaard ook de kostprijs van elk product bijgewerkt naar deze kostprijs per stuk. Zet Productkostprijs synchroniseren op de inkooporder uit om de kostprijzen ongewijzigd te laten."
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
          "Een product dat niet voor verkoop is, verschijnt nooit in het kassaoverzicht, de categorieën, de zoekfunctie of bij het scannen van barcodes, en kan geen cadeau, betaalde extra, doelproduct van een actie of vervangend artikel bij een omruiling zijn.",
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
      "inkomsten",
      "afstemmen",
      "kas afstemmen",
      "aanbetaling",
      "verkoop op rekening"
    ],
    "content": [
      {
        "type": "p",
        "text": "Omzet telt op de dag dat de goederen zijn overhandigd, na alle kortingen en vóór btw; Ontvangen bedrag telt op de dag dat het geld binnenkomt en is het geld dat je echt hebt binnengekregen, inclusief btw. In een winkel die btw berekent ligt Ontvangen bedrag dus hoger dan Omzet, met het bedrag aan btw, zelfs bij bestellingen die aan de kassa zijn betaald. Verder lopen ze uiteen bij:"
      },
      {
        "type": "list",
        "items": [
          "Verkoop op rekening: de goederen gaan vandaag mee en tellen mee in de omzet van vandaag; het geld telt mee in Ontvangen bedrag op de dag dat het wordt vereffend.",
          "Voorbestelling: de aanbetaling telt mee in Ontvangen bedrag op het moment dat die wordt betaald; de omzet wordt volledig geboekt op de afhaaldatum.",
          "Ingehouden aanbetaling: als een klant een voorbestelling annuleert en jij de aanbetaling houdt, was die al meegeteld in Ontvangen bedrag toen die werd betaald. Cijfers toont dit apart als ingehouden aanbetalingen en het telt nooit mee als omzet.",
          "Een eerdere bestelling ongeldig maken: het terugbetaalde geld telt mee in Ontvangen bedrag op de dag van het ongeldig maken, dus Ontvangen bedrag van die dag kan negatief zijn, terwijl Ongeldig gemaakt de bestelling telt op de verkoopdatum.",
          "Contante afronding: wat de contante afronding boven of onder het totaalbedrag van de bestelling binnenhaalt, telt mee in Ontvangen bedrag, nooit in Omzet."
        ]
      },
      {
        "type": "p",
        "text": "Om af te stemmen vergelijk je Ontvangen bedrag met de kassalade en je pinautomaat; om te zien hoeveel je in een periode echt hebt verkocht, kijk je naar Omzet. Retouren verlagen de omzet op de dag van de retour. De ⓘ op de tegels Omzet, Ontvangen bedrag en Ongeldig gemaakt legt hetzelfde uit, en de btw zelf staat onder Van omzet naar brutowinst, dat je opent via de tegel Brutowinst."
      },
      {
        "type": "note",
        "text": "Omzet vóór btw kwam met v3.5, en eerdere periodes zijn op dezelfde manier herberekend, dus een winkel die btw berekent ziet een lagere omzet dan vóór de update. Dat is een correctie. Eerdere versies rekenden btw mee in de omzet, en winkels met prijzen exclusief btw telden zelfs de btw die ze in rekening brachten als omzet."
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
    "question": "Welke periodes kan ik in de rapporten bekijken?",
    "keywords": [
      "rapporten",
      "rapportperiode",
      "periode",
      "deze week",
      "deze maand",
      "dit jaar",
      "aangepaste periode",
      "datum",
      "bestverkochte producten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kies bovenaan Cijfers uit Vandaag, Gisteren, Deze week, Deze maand, Dit jaar of Altijd, of gebruik Aangepast om een begin- en einddatum te kiezen. Deze week volgt de eerste dag van de week van het apparaat; Deze maand en Dit jaar beginnen op de 1e en op 1 januari. Elke optie toont de datums waarop ze betrekking heeft, en Altijd begint bij de eerste verkoop van je winkel."
      },
      {
        "type": "p",
        "text": "Onder de periodebalk staan twee rijen cijfertegels (Omzet, Ontvangen bedrag, Brutowinst, Bestellingen, Gemiddelde bestelling; Totale kortingen, Nettowinst, Producten zonder kostprijs, Geholpen klanten), daarna de trendgrafiek. Met het menu rechtsboven in de trendgrafiek wissel je tussen omzet, bestellingen, gemiddelde bestelling en geholpen klanten, en ernaast toont de grafiek Kosten en brutowinst de productkosten en de brutowinst van elke periode samen in één staaf. Een enkele dag wordt per uur weergegeven; langere periodes gebruiken dagen, weken, maanden of jaren, afhankelijk van de lengte."
      },
      {
        "type": "p",
        "text": "Houd de trendgrafiek of de grafiek Kosten en brutowinst ingedrukt om ze periode voor periode te lezen; met Verkoopvergelijking aan toont de kaart van de trendgrafiek het cijfer van deze periode en dat van de vergelijkingsperiode naast elkaar. Sleep naar links of rechts om verder te gaan; veeg je omhoog of omlaag over de grafiek, dan scrolt de pagina zoals gewoonlijk."
      },
      {
        "type": "p",
        "text": "De kaart Productranglijst toont de top 5. Tik op de kaart of op Toon alles om alle producten te zien die in de periode zijn verkocht, gerangschikt op aantal na retouren; een product met varianten krijgt één regel per variant."
      },
      {
        "type": "p",
        "text": "Met Verkoopvergelijking rechts van de periodebalk vergelijk je de periode met de voorgaande periode of met dezelfde periode vorig jaar — zie “Wat laten de geavanceerde rapporten zien?”"
      },
      {
        "type": "note",
        "text": "Deze kalenderperiodes kwamen met v2.4; eerdere versies hadden doorlopende periodes (Vandaag / 7 dagen / 30 dagen / Altijd). Zie je die nog, werk dan DingPOS bij via de App Store."
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
    "question": "Wat laten de geavanceerde rapporten zien?",
    "keywords": [
      "geavanceerde rapporten",
      "verkoopvergelijking",
      "vorig jaar",
      "heatmap",
      "drukke uren",
      "langzaam verkopende producten",
      "stijgers en dalers",
      "aandeel per categorie",
      "voorraadwaarde",
      "herhaalaankooppercentage",
      "punten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Geavanceerde rapporten zijn geen apart scherm — ze staan direct in Cijfers en volgen de periode die je bovenaan kiest:"
      },
      {
        "type": "list",
        "items": [
          "Verkoopvergelijking: rechts van de periodebalk vergelijk je met dezelfde periode vorig jaar of met de voorgaande periode (één dag met dezelfde dag vorige week, deze week met vorige week, deze maand met vorige maand, dit jaar met vorig jaar, een aangepaste periode met evenveel dagen daarvoor). De tegels Omzet, Ontvangen bedrag, Brutowinst, Bestellingen, Gemiddelde bestelling, Totale kortingen en Geholpen klanten tonen elk de verandering en het cijfer van de vergelijkingsperiode, zoals “▼ 3% t.o.v. vorige maand”; de verandering bij Totale kortingen is altijd grijs, want meer korting is op zich niet goed of slecht. Tik op een vergelijkingsregel om Periodevergelijking te openen, met de cijfers van beide periodes. De trendgrafiek krijgt een lichtere lijn voor de vergelijkingsperiode. Zolang een periode nog loopt, wordt de vergelijkingsperiode op hetzelfde moment afgekapt.",
          "Weekdag × uur: zet de kop van de trendgrafiek van Trend op Weekdag × uur voor een heatmap van zeven dagen bij 24 uur — hoe donkerder een vak, hoe meer je verkocht. Wissel tussen omzet en bestellingen; met een vergelijking aan zie je welke uren groeiden en welke krompen.",
          "Langzaam verkopende producten: zet de kop van de rangschikkingskaart op Langzaam verkopende producten om producten van de minste naar de meeste verkopen te tonen, met de huidige voorraad en de datum waarop elk product het laatst is verkocht. Producten die nooit zijn verkocht, staan als ‘Nooit verkocht’ en een product met varianten krijgt één regel per variant. Standaard zie je alleen producten die op voorraad zijn.",
          "Stijgers en dalers (sinds v3.4): zet de kop van de rangschikkingskaart op Stijgers en dalers voor de 3 producten waarvan de omzet het meest steeg en de 3 waarvan de omzet het meest daalde ten opzichte van de vergelijkingsperiode, elk met de omzet van beide periodes en het verschil; elke variant wordt met zichzelf vergeleken. Kies eerst een periode onder Verkoopvergelijking; bij Geen of bij Altijd vraagt de kaart je een andere periode te kiezen. Tik op de kaart of op Toon alles voor de volledige lijst Stijgers en dalers, onderverdeeld in Stijgers en Dalers.",
          "Herhaalaankooppercentage: de laatste regel van de klantentegel is het aandeel leden dat in de periode kocht en in totaal al twee of meer keer heeft gekocht. Met een vergelijking aan geeft een regel eronder de verandering in procentpunten en het percentage van de vergelijkingsperiode.",
          "Aandeel per categorie: de omzet en het aandeel van elke categorie, volgens de huidige categorie van elk product, van groot naar klein. Producten zonder categorie staan onder Zonder categorie en de rijen tellen precies op tot Omzet.",
          "Op dit moment: voorraadwaarde (huidige voorraad × huidige kostprijs), elke voorraadmutatie in de gekozen periode, en de punten die klanten hebben maar nog niet hebben ingewisseld, met het maximale bedrag dat ze ermee van de prijs kunnen halen. Dit zijn actuele standen; de periode verandert ze niet."
        ]
      },
      {
        "type": "p",
        "text": "Sinds v3.4 zijn ze allemaal beschikbaar in elk abonnement en blijven ze beschikbaar nadat de proefperiode is afgelopen. Eerdere versies toonden ze alleen bij Pro, met een klein slotje bij andere abonnementen; zie je de slotjes nog, werk dan DingPOS bij via de App Store."
      },
      {
        "type": "p",
        "text": "Lite houdt geen voorraad of spaarpunten bij, maar Op dit moment toont nog steeds de voorraadwaarde en de niet-ingewisselde punten die je winkel al heeft (bijvoorbeeld uit de proefperiode), of nul."
      },
      {
        "type": "note",
        "text": "Medewerkers zien geavanceerde rapporten met de toestemming Dashboard; voor de bedragen van de voorraadwaarde is ook de toestemming Kostprijs en winst nodig."
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
      "producten zonder kostprijs"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostprijs is een optioneel veld. Producten zonder kostprijs blijven buiten de brutowinst, terwijl hun omzet nog steeds volledig meetelt. De tegel Producten zonder kostprijs in Cijfers toont hoeveel producten die in de periode zijn verkocht of geretourneerd geen kostprijs hebben, zoals “12 producten”. Een kostprijs van 0 telt als kostprijs, dus die producten staan niet in de lijst; heeft elk product er een, dan staat er “0 producten · kostprijzen compleet”."
      },
      {
        "type": "p",
        "text": "Tik op de tegel of op Toon producten om Producten zonder kostprijs te openen, gerangschikt op de omzet die buiten de brutowinst blijft. Tik op een rij om het product te openen, voeg de kostprijs toe via Wijzig, en de rij is gemarkeerd met Kostprijs toegevoegd als je terugkomt. Een product met varianten krijgt Kostprijs toegevoegd pas zodra elke verkochte variant zonder kostprijs er een heeft — een eigen kostprijs, of die van het product."
      },
      {
        "type": "p",
        "text": "Brutowinst is de omzet na alle kortingen (korting op artikelen en winkelmand, acties, inwisseling van punten) en vóór btw, minus de kostprijs — daarom heet het veld in een winkel die btw berekent Kostprijs excl. btw (optioneel): vul in wat je vóór btw hebt betaald. De marge is de brutowinst ÷ de omzet van producten met een kostprijs, zodat producten zonder kostprijs de marge niet omlaag halen. Een retour neemt op de dag van de retour de brutowinst terug die die artikelen hadden opgeleverd."
      },
      {
        "type": "p",
        "text": "Tik op de tegel Brutowinst voor Van omzet naar brutowinst, dat rij voor rij aftrekt: omzet (incl. btw), belasting, omzet (excl. btw), omzet zonder kostprijs, kostprijs producten en ten slotte brutowinst en marge. De rijen tellen precies op tot de tegel."
      },
      {
        "type": "note",
        "text": "Een kostprijs die je toevoegt, geldt alleen voor latere verkopen; verkopen die al zijn gedaan worden niet opnieuw berekend. Deze berekening kwam met v3.1: eerdere versies trokken alleen handmatige kortingen op artikelen af en telden btw in de prijs als winst mee, dus na de update tonen periodes met kortingen of btw in de prijs een lagere brutowinst. Dat is een correctie, geen verloren gegevens."
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
    "question": "Hoe zie ik hoeveel ik elke maand echt heb verdiend?",
    "keywords": [
      "winst en verlies",
      "w&v",
      "nettowinst",
      "winst per maand",
      "kosten",
      "bedrijfsresultaat",
      "resultatenrekening"
    ],
    "content": [
      {
        "type": "p",
        "text": "Open W&V, onder Cijfers in de zijbalk. Daar staat elke maand van nieuw naar oud met de nettowinst: de lopende maand is gemarkeerd met Lopend en de kop van elk jaar telt de nettowinst van de afgesloten maanden bij elkaar op."
      },
      {
        "type": "p",
        "text": "Tik op een maand om te zien hoe de nettowinst is berekend:"
      },
      {
        "type": "list",
        "items": [
          "Omzet (excl. btw): de omzet na alle kortingen en vóór btw, geteld op de dag dat de goederen zijn overhandigd.",
          "Kostprijs producten: wat de verkochte goederen hebben gekost, op basis van de kostprijzen bij je producten.",
          "Voorraadverlies: de kostprijs van wat via Pas voorraad aan is afgeboekt als verlopen, beschadigd, weggegeven en dergelijke, plus weggegooide retouren. Het komt na de brutowinst — zie “Hoe leg ik voorraad vast die is verlopen, beschadigd of als sample is weggegeven?” De maand heeft ook een onderdeel Voorraadverlies dat het per reden optelt.",
          "Transactiekosten (geschat): de kosten, geschat op basis van de kostenpercentages van je betaalmethoden.",
          "Ingehouden aanbetalingen: aanbetalingen die je hebt gehouden toen een voorbestelling werd geannuleerd.",
          "Contante afronding: wat het afronden van contant geld op de gangbare munten boven of onder het totaalbedrag van de bestellingen heeft opgeleverd.",
          "Vaste kosten en Eenmalige kosten: wat je voor die maand hebt vastgelegd — zie “Hoe leg ik huur, salarissen en andere kosten vast?”"
        ]
      },
      {
        "type": "p",
        "text": "Daarna volgen maximaal drie grafieken: de nettowinst per maand, het aandeel van elke vaste kostenpost en de trend van de vaste kosten. De twee trendgrafieken beslaan hooguit de 12 maanden tot en met de maand die je hebt geopend en verschijnen pas als er minstens twee maanden zijn om te vergelijken, geteld vanaf de maand van je eerste verkoop of kostenpost. De grafiek met aandelen heeft een vaste kostenpost in die maand nodig; zolang die er niet is, staat in dat onderdeel Voeg vaste kostenpost toe."
      },
      {
        "type": "p",
        "text": "Cijfers en W&V verwijzen naar elkaar. Is de periode in Cijfers deze maand of precies één hele maand, dan krijgt de tweede rij tegels een tegel Nettowinst (gemarkeerd met “Lopend · de kosten van de hele maand worden afgetrokken” zolang de maand loopt); tik erop voor de uitsplitsing van die maand van brutowinst naar nettowinst. Tik bij elke andere periode op Bekijk winst en verlies per maand op de laatste regel van Van omzet naar brutowinst. Andersom opent Bekijk het rapport van oktober onder de titel van een maand in W&V de pagina Cijfers op die maand."
      },
      {
        "type": "note",
        "text": "De nettowinst is het bedrijfsresultaat vóór inkomstenbelasting, berekend uit wat DingPOS heeft vastgelegd — geen belastingaangifte. Zijn er producten zonder kostprijs verkocht, dan toont de maand nog steeds een nettowinst, gemarkeerd met “Exclusief de kostprijs van N producten”; tik erop om te zien welke. W&V is beschikbaar in elk abonnement. Met medewerkersaccounts vraagt het openen om de toestemming Winst en verlies, kosten. Managers en Medewerkers hebben daarvoor standaard goedkeuring nodig, omdat W&V kostprijzen van producten en salarissen toont."
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
      "bedrijfskosten",
      "kosten verspreiden",
      "afschrijving",
      "eenmalige kosten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tik in W&V op Voeg kostenpost toe en kies een vaste of een eenmalige kostenpost. Een kostenpost telt mee in de maand waartoe hij hoort, niet in de maand waarin je hem betaalde, en de nettowinst van elke maand volgt daarop."
      },
      {
        "type": "p",
        "text": "Een vaste kostenpost betaal je elke maand, zoals huur, gas, water en licht of salarissen:"
      },
      {
        "type": "list",
        "items": [
          "Vul de naam, het bedrag per maand en de maand waarin de kostenpost begint in. Kies een eerdere maand om met terugwerkende kracht in te voeren.",
          "Verandert het bedrag, tik dan op Wijzig bedrag, kies de maand en kies Vanaf deze maand (bijvoorbeeld een huurverhoging) of Alleen deze maand (bijvoorbeeld de energierekening van deze maand). Elke wijziging staat in een lijst en je kunt er een openen om te wijzigen of te verwijderen.",
          "Stop je met betalen, stel dan Laatste maand meegeteld in: die maand en de maanden ervoor tellen nog mee."
        ]
      },
      {
        "type": "p",
        "text": "Een eenmalige kostenpost betaal je één keer:"
      },
      {
        "type": "list",
        "items": [
          "Zet voor een winkelinrichting, apparatuur of vooruitbetaalde verzekering Verspreid over meerdere maanden aan en kies 2 tot 120 maanden en de eerste maand meegeteld. Het formulier toont vooraf hoeveel er per maand meetelt en welke maanden dat zijn.",
          "Zonder verspreiding kun je nog steeds de maand kiezen waarin de kostenpost meetelt: een rekening van oktober die in november binnenkomt, kan in oktober meetellen, met behoud van de echte datum.",
          "Eindigt een verspreiding eerder (bijvoorbeeld een opgezegde verzekering), gebruik dan Verspreiding eerder beëindigen: wat er nog over is, telt mee in de maand die je kiest."
        ]
      },
      {
        "type": "note",
        "text": "Voer in wat de winkel werkelijk draagt, zonder btw die je kunt terugvragen. Voorraad die je gaat verkopen en de grondstoffen waarvan je die maakt, lopen via Inkoop, omdat ze bij verkoop in de kostprijs worden meegeteld. Benodigdheden met bijgehouden voorraad leg je bij gebruik vast met Pas voorraad aan, met de reden Winkelbenodigdheden, niet als kostenpost. Waarborgsommen die je uitbetaalt, aflossingen van leningen en geld dat de eigenaar opneemt zijn geen kosten. Wijzigingen worden samen bewaard als je op ✓ tikt, en raakt een wijziging een afgelopen maand, dan krijg je eerst te zien voor welke maanden de nettowinst verandert."
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
        "text": "Ga naar Instellingen → Spaarprogramma en stel twee regels in: ontvang Y punten per X besteed en wissel N punten in voor M korting (met een optioneel maximum per bestelling). Nieuwe klanten kun je ook automatisch een welkomstbonus in punten geven."
      },
      {
        "type": "p",
        "text": "Koppel de klant aan de verkoop, in de winkelmand of op het afrekenscherm, en de punten worden automatisch gespaard; om in te wisselen voer je het aantal te gebruiken punten in. Maak je een bestelling ongeldig, dan worden de daarmee gespaarde punten teruggedraaid en de ingewisselde punten teruggegeven."
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
          "Overzichten (kostprijs en winst, Dashboard, W&V en kosten, Instellingen, back-up en herstel): een goedkeuring ontgrendelt tot de actieve medewerker wisselt of de app naar de achtergrond gaat.",
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
        "text": "Als je tijdens de proefperiode een abonnement afsluit, eindigt de proefperiode meteen en geldt vanaf dat moment het abonnement dat je hebt gekocht. Na de proefperiode blijven Pro-functies zoals medewerkers en het activiteitenlogboek alleen beschikbaar met een Pro-abonnement. Voor geavanceerde rapporten is dat niet nodig: sinds v3.4 zitten ze in elk abonnement."
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
        "text": "Alle drie de abonnementen bevatten alle functies voor afrekenen, producten, bestellingen (met ongeldig maken, retouren en omruilingen), rapporten (geavanceerde rapporten en de maandelijkse W&V inbegrepen sinds v3.4) en back-up in de cloud. Ze verschillen in de hulpmiddelen om je winkel te runnen:"
      },
      {
        "type": "list",
        "items": [
          "Lite: voor wie alleen een kraam runt en afrekenen en producten nodig heeft.",
          "Standard: voegt acties, spaarpunten en klantniveaus, voorraadbeheer, inkoop, verkoop op rekening, voorbestellingen en kostenpercentages voor betaalmethoden toe.",
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
        "text": "Cadeaus en extra artikelen wijzigen de winkelmand nooit uit zichzelf. Zodra aan de voorwaarden is voldaan, verschijnt er een voorstelbanner op het kassascherm, en de winkelmand verandert pas als de kassamedewerker op Kies cadeau of Kies extra artikel tikt — bewust, want bij cadeaus gaat het om fysieke voorraad: iemand moet bevestigen dat het artikel er is en dat de klant het wil."
      },
      {
        "type": "list",
        "items": [
          "Nadat je op ‘Weiger’ hebt getikt, verschijnt hetzelfde voorstel niet opnieuw voor deze winkelmand; bij een nieuwe of geleegde winkelmand verschijnt het opnieuw.",
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
        "text": "Sinds v3.4 toont W&V de nettowinst van elke maand na de kostprijs van producten, de transactiekosten en je vaste en eenmalige kosten — zie “Hoe zie ik hoeveel ik elke maand echt heb verdiend?” Er is nog geen vereffeningsrapport om te exporteren of te printen, maar alles wat je nodig hebt om af te stemmen, zit al in de app:"
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
        "text": "Heb je een maandrapport nodig dat je kunt exporteren of printen, stuur ons dan een bericht met de velden die je erin wilt zien. We bepalen de volgorde van de ontwikkeling op basis van het aantal verzoeken."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
