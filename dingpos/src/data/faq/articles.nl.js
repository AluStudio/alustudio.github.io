// Generated from en and the nl translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync nl`, then `npm run l10n -- apply nl`.

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
      "installatiehulp",
      "winkel openen",
      "kassa-app instellen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Als je DingPOS voor het eerst opent, begeleidt een installatiewizard je in ongeveer 10 minuten bij het instellen van je winkel:"
      },
      {
        "type": "steps",
        "items": [
          "Kies je land — valuta, btw-modus en een standaard btw-tarief worden automatisch ingevuld (btw-tarief en btw-modus kun je in dit stadium nog aanpassen).",
          "Vul je winkelnaam in en upload eventueel een winkellogo.",
          "Volg de gids om 3–5 producten aan te maken (overslaan kan — je kunt ze altijd later toevoegen)."
        ]
      },
      {
        "type": "p",
        "text": "Als je klaar bent, hoor je een \"Ding!\" — je winkel is klaar en je kunt meteen beginnen met verkopen."
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
        "text": "Nee. DingPOS heeft geen accountsysteem — download de app en begin met verkopen. Je producten, bestellingen en klantgegevens blijven op je iPad en worden nooit naar onze servers geüpload."
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
        "text": "DingPOS ondersteunt op dit moment iPads met iPadOS 17 of nieuwer, en is in de eerste plaats ontworpen voor liggend gebruik."
      },
      {
        "type": "p",
        "text": "iPhone en Mac worden nog niet ondersteund. Wil je dat we een ander apparaat ondersteunen? Schrijf ons en vertel hoe je het zou gebruiken."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kan ik na het instellen de valuta of btw-modus nog wijzigen?",
    "keywords": [
      "valuta",
      "btw-modus",
      "wijzigen",
      "vergrendeld",
      "btw-tarief",
      "inclusief btw"
    ],
    "content": [
      {
        "type": "p",
        "text": "Het btw-tarief kun je op elk moment wijzigen in Instellingen — het nieuwe tarief geldt alleen voor toekomstige bestellingen."
      },
      {
        "type": "p",
        "text": "Valuta en btw-modus (inclusief / exclusief) zijn vergrendeld zodra de installatie klaar is. Al je eerdere bestellingen zijn ermee berekend, dus tussentijds wijzigen zou je rapporten onbetrouwbaar maken."
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
      "taal wijzigen",
      "taalinstelling",
      "omschakelen"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS ondersteunt Engels en traditioneel Chinees. Ga naar Instellingen → Apparaatvoorkeuren en tik op Taal van de app. Hiermee open je de pagina van DingPOS in de app Instellingen van de iPad, waar je onder Taal de taal kiest."
      },
      {
        "type": "p",
        "text": "iOS laat apps de talenlijst niet rechtstreeks openen, dus de laatste tik doe je in de systeeminstellingen. De taal geldt alleen voor deze iPad."
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
        "text": "Het kassascherm ondersteunt maximaal 10 winkelmanden tegelijk. Tik op “+” in de mandbalk om er een toe te voegen en tik op een genummerd tabblad om te wisselen."
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
      "bon"
    ],
    "content": [
      {
        "type": "p",
        "text": "De btw wordt automatisch berekend op basis van de belastingmodus die je bij het instellen hebt gekozen. De bon toont het btw-bedrag in beide modi:"
      },
      {
        "type": "list",
        "items": [
          "Inclusief: de prijzen bevatten al btw — het totaal blijft gelijk en de bon specificeert de btw die erin zit (gebruikelijk in Taiwan, Japan enz.).",
          "Exclusief: de btw wordt bij het afrekenen bovenop het bedrag na korting gezet (gebruikelijk in de VS, Canada enz.)."
        ]
      },
      {
        "type": "p",
        "text": "Volledige rekenvolgorde: artikelkortingen → winkelmandkorting → btw. Bedragen worden afgerond volgens de half-up-methode: vanaf 0,5 naar boven, op het aantal decimalen van de valuta (bijv. 0 voor TWD, 2 voor USD)."
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
    "question": "Welke betaalmethoden worden ondersteund?",
    "keywords": [
      "betaalmethode",
      "betaling",
      "contant",
      "creditcard",
      "line pay",
      "wisselgeld",
      "eigen betaalmethode",
      "op rekening"
    ],
    "content": [
      {
        "type": "p",
        "text": "Contant, Creditcard en Line Pay zijn standaard aanwezig en je kunt in Instellingen eigen betaallabels toevoegen (bijv. Apple Pay, lokale wallets)."
      },
      {
        "type": "p",
        "text": "Betaalmethoden zijn labels voor je boekhouding — DingPOS verwerkt zelf geen echte betalingen. Neem pinbetalingen of mobiele betalingen aan met je bestaande terminal of app en kies daarna het bijbehorende label in DingPOS om de betaling vast te leggen. Bij contante betalingen wordt het wisselgeld automatisch berekend."
      },
      {
        "type": "p",
        "text": "Neemt een vaste klant de spullen nu mee en betaalt die later? Kies dan Op rekening: de verkoop wordt vastgelegd als openstaande vordering en vereffend zodra het geld binnenkomt. Zie “Kunnen vaste klanten op rekening kopen en later betalen?”"
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
      "multiple-carts"
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
        "text": "Ga naar Orders, zoek de bestelling, open de details en kies Maak ongeldig. Bevestig, en het is gebeurd."
      },
      {
        "type": "p",
        "text": "Ongeldig maken draait automatisch alles terug wat eraan vastzit: bijgehouden voorraad komt terug, spaarpunten die met de bestelling zijn verdiend worden ingetrokken en ingewisselde punten worden teruggegeven. Ongeldig gemaakte bestellingen blijven duidelijk gemarkeerd in de lijst staan en tellen niet mee in de omzet in de rapporten."
      },
      {
        "type": "note",
        "text": "Ongeldig maken betekent: ‘deze verkoop heeft nooit plaatsgevonden’ — gebruik het voor een bestelling die ter plekke verkeerd is ingetoetst. Brengt een klant later spullen terug, gebruik dan Retour: de oorspronkelijke bestelling blijft bewaard, je kunt maar een deel van de artikelen retourneren en de omzet wordt verlaagd op de dag waarop de retour wordt verwerkt."
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
      "ruilen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Orders, open de oorspronkelijke bestelling en tik op Retour. Kies hoeveel stuks van elk artikel terugkomen. Voor een omruiling tik je op hetzelfde scherm op Voeg vervangend artikel toe; het nettobedrag wordt in één keer verrekend — positief betekent dat de klant betaalt, negatief dat je terugbetaalt, en nul betekent dat er geen geld wordt uitgewisseld."
      },
      {
        "type": "list",
        "items": [
          "De oorspronkelijke bestelling wordt nooit gewijzigd. Een retour maakt een eigen document met de datum van vandaag en een nummer dat met R begint, en de omzet wordt verlaagd op de dag waarop de retour wordt verwerkt.",
          "De terugbetaling is wat de klant echt voor dat artikel heeft betaald — kortingen op artikelen, kortingen op de winkelmand en ingewisselde punten zijn al evenredig verwerkt, dus er wordt niet tegen de catalogusprijs terugbetaald. De btw volgt het tarief waarmee de oorspronkelijke bestelling is afgerekend.",
          "Vervangende artikelen worden berekend tegen de prijs van vandaag, zonder acties of kortingen.",
          "Bijgehouden voorraad komt automatisch terug. Punten die met de oorspronkelijke bestelling zijn verdiend worden ingetrokken, ingewisselde punten worden teruggegeven en vervangende artikelen leveren hun eigen punten op.",
          "Een bestelling kan in meerdere rondes worden geretourneerd, maar nooit meer dan het oorspronkelijk verkochte aantal. Gebruikslimieten van acties komen door een retour niet terug."
        ]
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
          "De voorraad wordt afgeboekt zodra de voorbestelling is geplaatst, zodat de spullen voor de klant gereserveerd zijn. Artikelen die niet op voorraad zijn, gaan in de min en herstellen zodra een inkooporder is ontvangen.",
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
        "text": "Ja. Kies bij het afrekenen de klant en selecteer Op rekening als betaalmethode. Een schuld moet van iemand zijn, dus Op rekening is niet beschikbaar zonder klant."
      },
      {
        "type": "p",
        "text": "Om te innen schakel je bovenaan Orders naar Vorderingen. Schulden zijn per klant gegroepeerd; open er een om één bestelling, een hele maand of alles te vereffenen — telkens vraagt DingPOS hoe het geld is betaald. Een losse bestelling kun je ook vanuit de details vereffenen, en een per ongeluk ingevoerde vereffening haal je terug met Vereffening ongedaan maken."
      },
      {
        "type": "list",
        "items": [
          "De omzet telt mee op de dag dat de spullen de deur uit gaan; het ontvangen bedrag en de spaarpunten volgen pas op de dag van de vereffening.",
          "Niet-vereffende bestellingen hebben in de lijst een oranje label, en in de klantdetails staat hoeveel de klant op dat moment nog schuldig is.",
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
      "payment-methods",
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
        "text": "Ja. De detailpagina's van bestellingen, klanten en inkooporders hebben elk een notitiekaart — tik erop om te bewerken, tot 500 tekens. Je kunt ook meteen een notitie schrijven in het formulier bij het aanmaken van een klant of inkooporder."
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
      "productopties"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tik op de productpagina onder Variantopties op Voeg optie toe om een optie toe te voegen (bijv. “Kleur”) en gebruik daarna “+ Optiewaarde” voor elke keuze (bijv. Rood, Blauw). Heb je twee of meer opties (bijv. Kleur × Maat), dan maakt DingPOS automatisch alle combinaties aan (Rood/S, Rood/M, Blauw/S…)."
      },
      {
        "type": "p",
        "text": "Elke combinatie heeft een eigen prijs en kostprijs en houdt een eigen voorraad bij. Aan de kassa toont een tik op het product eerst een variantkeuze, voordat het in de winkelmand komt."
      },
      {
        "type": "note",
        "text": "Namen van opties en waarden mogen maximaal 20 tekens bevatten."
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
        "text": "Zodra het aan staat, verlagen verkopen en voorbestellingen de voorraad automatisch. Bij ongeldig gemaakte verkopen, retouren en geannuleerde voorbestellingen wordt de voorraad weer aangevuld; een ontvangen inkooporder verhoogt de voorraad. Je kunt de voorraad ook altijd handmatig aanpassen. Elke mutatie wordt vastgelegd in een volledig overzicht. Lage voorraad wordt met een kleur gemarkeerd."
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
        "text": "Een negatieve voorraad betekent meestal dat een aanvulling niet is vastgelegd, of dat een voorbesteld artikel nog niet binnen is (voorbestellingen verlagen de voorraad op het moment van bestellen). Leg aanvullingen vast door een inkooporder te ontvangen en het aantal herstelt zich vanzelf. Corrigeer verschillen na een telling met een handmatige aanpassing, die in het overzicht van voorraadmutaties bewaard blijft."
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
        "text": "Bij Inkoop in de zijbalk beheer je leveranciers en inkooporders. Bij een leverancier bewaar je een naam, contactpersoon, telefoonnummer, adres en de standaard betaalvoorwaarde (direct betalen of maandkrediet)."
      },
      {
        "type": "steps",
        "items": [
          "Tik op Nieuwe inkoop, kies de leverancier en voeg de producten, aantallen en kostprijzen per stuk toe (vooraf ingevuld met de huidige kostprijs van elk product). Je kunt ook verzendkosten toevoegen. Staat de leverancier er nog niet bij, tik dan linksboven in de leverancierslijst op Voeg leverancier toe. De nieuwe leverancier komt direct terug in de inkooporder.",
          "Een concept raakt de voorraad of de te betalen bedragen nooit aan. Je kunt het vrij wijzigen of verwijderen.",
          "Zodra de goederen binnen zijn, tik je op Ontvang voorraad: de bijgehouden voorraad gaat omhoog en de inkooporder krijgt een nummer en wordt vergrendeld. Bij ontvangst wordt standaard ook de kostprijs van elk product bijgewerkt naar deze kostprijs per stuk. Zet Productkostprijs synchroniseren op de inkooporder uit om de kostprijzen ongewijzigd te laten."
        ]
      },
      {
        "type": "p",
        "text": "De betaalvoorwaarde bepaalt wat er daarna gebeurt: orders met directe betaling worden als betaald gemarkeerd, terwijl orders met maandkrediet onbetaald onder Te betalen blijven staan. Daar vereffen je ze per leverancier: één order, deze maand of alles."
      },
      {
        "type": "note",
        "text": "Inkoop vereist het Standard-abonnement of hoger. Een leverancier met onbetaalde ontvangen orders kan niet worden verwijderd."
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
        "text": "Omzet telt op de dag dat de goederen worden overhandigd; Ontvangen bedrag telt op de dag dat het geld binnenkomt. Bij een bestelling die aan de kassa wordt betaald gebeurt beide op dezelfde dag en kloppen de cijfers. Ze lopen uiteen bij:"
      },
      {
        "type": "list",
        "items": [
          "Verkoop op rekening: de goederen gaan vandaag mee en tellen mee in de omzet van vandaag; het geld telt mee in Ontvangen bedrag op de dag dat het wordt vereffend.",
          "Voorbestelling: de aanbetaling telt mee in Ontvangen bedrag op het moment dat die wordt betaald; de omzet wordt volledig geboekt op de afhaaldatum.",
          "Gehouden aanbetaling: als een klant een voorbestelling annuleert en jij de aanbetaling houdt, was die al meegeteld in Ontvangen bedrag toen die werd betaald. Cijfers toont dit apart als gehouden aanbetalingen en het telt nooit mee als omzet."
        ]
      },
      {
        "type": "p",
        "text": "Om af te stemmen vergelijk je Ontvangen bedrag met de kassalade en je pinautomaat; om te zien hoeveel je in een periode echt hebt verkocht, kijk je naar Omzet. Retouren verlagen de omzet op de dag van de retour."
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
        "text": "Voor één dag wordt de trendgrafiek een staafdiagram per uur; langere periodes gebruiken dagen, weken, maanden of jaren per staaf, afhankelijk van de lengte."
      },
      {
        "type": "p",
        "text": "De kaart Productranglijst toont de top 5. Tik op de kaart of op Toon alles om alle producten te zien die in de periode zijn verkocht, gerangschikt op aantal na retouren."
      },
      {
        "type": "p",
        "text": "Met het Pro-abonnement vergelijkt Verkoopvergelijking rechts van de periodebalk de periode met de voorgaande periode of met dezelfde periode vorig jaar — zie “Wat laten de geavanceerde Pro-rapporten zien?”"
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
    "question": "Wat laten de geavanceerde Pro-rapporten zien?",
    "keywords": [
      "geavanceerde rapporten",
      "pro",
      "verkoopvergelijking",
      "vorig jaar",
      "heatmap",
      "drukke uren",
      "langzaam verkopende producten",
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
          "Verkoopvergelijking: rechts van de periodebalk vergelijk je met dezelfde periode vorig jaar of met de voorgaande periode (één dag met dezelfde dag vorige week, deze week met vorige week, deze maand met vorige maand, dit jaar met vorig jaar, een aangepaste periode met evenveel dagen daarvoor). De tegel Ontvangen bedrag toont het verschil en het groeipercentage, en de omzetgrafiek krijgt een lichtere lijn voor de vergelijkingsperiode. Zolang een periode nog loopt, wordt de vergelijkingsperiode op hetzelfde moment afgekapt.",
          "Weekdag × uur: zet de kop Verkoop in de tijd op Weekdag × uur voor een heatmap van zeven dagen bij 24 uur — hoe donkerder een vak, hoe meer je verkocht. Wissel tussen omzet en bestellingen; met een vergelijking aan zie je welke uren groeiden en welke krompen.",
          "Langzaam verkopende producten: zet de kop van de rangschikkingskaart op Langzaam verkopende producten om producten van de minste naar de meeste verkopen te tonen, met de huidige voorraad en de datum waarop elk product het laatst is verkocht. Producten die nooit zijn verkocht, staan als ‘Nooit verkocht’. Standaard zie je alleen producten die op voorraad zijn.",
          "Herhaalaankooppercentage: de laatste regel van de klantentegel is het aandeel leden dat in de periode kocht en in totaal al twee of meer keer heeft gekocht.",
          "Op dit moment: voorraadwaarde (huidige voorraad × huidige kostprijs), elke voorraadmutatie in de gekozen periode, en de punten die klanten hebben maar nog niet hebben ingewisseld, met het maximale bedrag dat ze ermee van de prijs kunnen halen. Dit zijn actuele standen; de periode verandert ze niet."
        ]
      },
      {
        "type": "p",
        "text": "Zonder Pro heeft elk van deze vijf plekken een klein slotje dat een uitleg over upgraden opent; al het andere in Cijfers werkt zoals voorheen. De rapporten lezen gegevens die je winkel al bijhoudt, dus als Pro afloopt, worden alleen de rapporten verborgen — er gaan geen gegevens verloren."
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
    "question": "Hoe wordt winst getoond als ik geen kostprijzen heb ingevoerd?",
    "keywords": [
      "kostprijs",
      "winst",
      "marge",
      "rapporten",
      "winst niet bijgehouden"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kostprijs is een optioneel veld. Producten zonder kostprijs worden in rapporten gemarkeerd als “winst niet bijgehouden” en blijven buiten de winstberekening — de omzet telt nog steeds volledig mee, alleen de winst wordt overgeslagen."
      },
      {
        "type": "p",
        "text": "Voor volledige winstrapporten vul je de kostprijs in op de bewerkpagina van het product; toekomstige bestellingen worden dan meegenomen. Winst wordt berekend over de omzet na korting."
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
          "Bereik: vallen de artikelen in de winkelmand onder de producten of categorieën van de actie? Is de bestedingsdrempel bereikt?",
          "Doelgroep: is de actie beperkt tot een klantniveau of de verjaardagsmaand? Is die klant bij het afrekenen gekozen?",
          "Gebruikslimiet: is het maximum in totaal of het maximum voor deze klant bereikt?",
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
      "welkomstbonus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ga naar Instellingen → Spaarprogramma en stel twee regels in: ontvang Y punten per X besteed en wissel N punten in voor M korting (met een optioneel maximum per bestelling). Nieuwe klanten kun je ook automatisch een welkomstbonus in punten geven."
      },
      {
        "type": "p",
        "text": "Kies bij het afrekenen de klant en de punten worden automatisch gespaard; om in te wisselen voer je het aantal te gebruiken punten in. Maak je een bestelling ongeldig, dan worden de daarmee gespaarde punten teruggedraaid en de ingewisselde punten teruggegeven."
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
    "slug": "import-csv",
    "category": "backup",
    "since": "2.3",
    "question": "Kan ik producten en verkopen importeren uit een ander kassasysteem of een spreadsheet?",
    "keywords": [
      "importeren",
      "csv",
      "excel",
      "spreadsheet",
      "overstappen",
      "ander kassasysteem",
      "bulk",
      "verkoopgeschiedenis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Ga naar Instellingen → Gegevens importeren, kies of je producten of verkopen importeert en selecteer een CSV-bestand (Excel en Google Sheets kunnen allebei als CSV opslaan)."
      },
      {
        "type": "steps",
        "items": [
          "Het bestand opent als tabel. Veelgebruikte kolomnamen in het Engels en Chinees worden automatisch herkend; tik op een kolomkop om de koppeling te wijzigen.",
          "Tik op een cel om de waarde direct aan te passen. Je hoeft het bestand niet te bewerken en opnieuw te beginnen.",
          "Tik op Bevestig om te controleren. Rijen met problemen krijgen een rode markering met de reden; bij het importeren van verkopen kun je bestellingen met fouten overslaan.",
          "Los op wat een keuze vraagt (dubbele productnamen, een rij die bij meerdere klanten past), bekijk de samenvatting en tik op Importeren starten."
        ]
      },
      {
        "type": "list",
        "items": [
          "Geïmporteerde verkopen worden geplaatst op hun transactiedatum en opnieuw berekend met de valuta en belastingmodus van je winkel. Ze raken de voorraad niet en geven geen welkomstpunten.",
          "Klanten worden op telefoonnummer of e-mailadres gekoppeld aan bestaande klanten; wie niet wordt gevonden, wordt aangemaakt.",
          "Geïmporteerde bestellingen tonen de datum ‘Geïmporteerd op’ en het oorspronkelijke bestelnummer. Je kunt ze niet ongeldig maken of als retour verwerken.",
          "Rijen met fouten kun je exporteren als CSV met de redenen erbij. Los ze op en importeer opnieuw. Dubbele rijen worden automatisch overgeslagen."
        ]
      },
      {
        "type": "note",
        "text": "Gegevens importeren is in bèta. Elk bestand mag maximaal 50.000 rijen of 20 MB bevatten. Maak vóór het importeren een cloudback-up; lukt iets niet of ziet het resultaat er verkeerd uit, laat het ons dan weten via Meld een probleem op het importscherm."
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
        "text": "Een toestemming heeft twee waarden: Toegestaan of Goedkeuring nodig. Niets is volledig verboden. Als een medewerker een handeling uitvoert die goedkeuring nodig heeft, kiest een collega die dit wel mag zijn of haar naam en voert de pincode in om het door te laten gaan."
      },
      {
        "type": "list",
        "items": [
          "Handelingen (handmatige voorraadcorrectie, productbeheer, afrekenen boven de kortingslimiet): één goedkeuring geldt voor die ene handeling.",
          "Overzichten (kostprijs en winst, Cijfers, Instellingen, back-up en herstel): een goedkeuring ontgrendelt tot de actieve medewerker wisselt of de app naar de achtergrond gaat.",
          "De kortingslimiet geldt voor handmatige kortingen en wordt één keer gecontroleerd bij het afrekenen. Automatische kortingsacties en het inwisselen van punten tellen niet mee."
        ]
      },
      {
        "type": "p",
        "text": "Standaardinstellingen: Managers mogen alles behalve back-up en herstel, zonder kortingslimiet. Medewerkers hebben overal goedkeuring voor nodig, met een limiet van 10%. De eigenaar mag altijd alles; de toestemmingen van de eigenaar kunnen niet worden gewijzigd. Om dit te wijzigen ga je naar Personeel → Toestemmingen per rol, tik je op Wijzig en bewaar je één keer. Het geldt direct voor iedereen."
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
      "voorraadcorrectie",
      "verwijderd product",
      "goedkeuringen",
      "controle"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gebruik het activiteitenlogboek. Tik op de pagina Personeel rechtsboven op Activiteitenlogboek en voer de pincode van de eigenaar in. Je ziet dan de gevoelige handelingen van de winkel, de nieuwste eerst: ongeldig gemaakte bestellingen, retouren, handmatige voorraadcorrecties, goedkeuringen, wijzigingen van medewerkers en toestemmingen, wijzigingen van de pincode van de eigenaar, wijzigingen van productprijs en kostprijs en verwijderde producten. Gewone afrekeningen staan er niet in."
      },
      {
        "type": "list",
        "items": [
          "Elke regel toont waar het om gaat, wie wat wanneer heeft gedaan en wat het resultaat was, bijvoorbeeld “M prijs $390 → $350”.",
          "Filter op medewerker (ook gedeactiveerde), soort handeling en Vandaag / Deze week / Deze maand.",
          "Tik op een regel die naar een bestelling, product of klant verwijst om de details te openen.",
          "De details van een bestelling, een product en de pagina van elke medewerker hebben elk een eigen lijst met alleen de registraties over dat onderdeel.",
          "Verwijderde producten tonen in het logboek nog steeds hun naam en prijs van toen."
        ]
      },
      {
        "type": "note",
        "text": "Bij elk abonnement wordt alles vastgelegd; alleen het bekijken is een Pro-functie. Registraties uit de periode dat Pro was verlopen zie je dus zodra je weer een Pro-abonnement neemt. Het logboek wordt meegenomen in je back-ups in de cloud."
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
        "text": "Vanaf de eerste installatie krijg je 30 dagen lang alle functies van het Pro-abonnement, inclusief medewerkersaccounts, toestemmingen, het activiteitenlogboek en geavanceerde rapporten — zonder account."
      },
      {
        "type": "p",
        "text": "Als je tijdens de proefperiode een abonnement afsluit, eindigt de proefperiode meteen en geldt vanaf dat moment het abonnement dat je hebt gekocht. Na de proefperiode blijven Pro-functies zoals medewerkers en geavanceerde rapporten alleen beschikbaar met een Pro-abonnement."
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
        "text": "Alle drie de abonnementen bevatten alle functies voor afrekenen, producten, bestellingen (met ongeldig maken, retouren en omruilingen), rapporten en back-up in de cloud. Ze verschillen in de hulpmiddelen om je winkel te runnen:"
      },
      {
        "type": "list",
        "items": [
          "Lite: voor wie alleen een kraam runt en afrekenen en producten nodig heeft.",
          "Standard: voegt acties, spaarpunten en klantniveaus, voorraadbeheer, inkoop, verkoop op rekening en voorbestellingen toe.",
          "Pro: voegt medewerkersaccounts en toestemmingen, goedkeuring, het activiteitenlogboek, herstelregistraties en geavanceerde rapporten toe — voor winkels met medewerkers."
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
        "text": "Maak eerst niveaus aan onder Instellingen → Ledenniveaus (bijv. Goud) en richt de actie daarna op dat niveau. Voor verjaardagsacties stel je de voorwaarde in op ‘Verjaardagsmaand’."
      },
      {
        "type": "list",
        "items": [
          "De klant moet bij het afrekenen zijn gekozen om de actie te activeren — de geschiktheid wordt beoordeeld aan de hand van de op dat moment gekozen klant.",
          "Voor een verjaardagsactie wordt de verjaardagsmaand van de klant gebruikt, dus vul het verjaardagsveld in; klanten zonder verjaardag worden nooit als jarig behandeld.",
          "Automatische niveauverhogingen worden beoordeeld zodra het afrekenen is voltooid; als de bestelling ongeldig wordt gemaakt, wordt een verhoging die ze veroorzaakte automatisch teruggedraaid."
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
        "text": "Cadeaus en extra artikelen wijzigen de winkelmand nooit uit zichzelf. Zodra aan de voorwaarden is voldaan, verschijnt er een voorstelbanner op het kassascherm, en de winkelmand verandert pas als de kassamedewerker het voorstel accepteert (Kies cadeau / Kies extra artikel) — bewust, want bij cadeaus gaat het om fysieke voorraad: iemand moet bevestigen dat het artikel er is en dat de klant het wil."
      },
      {
        "type": "list",
        "items": [
          "Nadat je op ‘Weiger’ hebt getikt, verschijnt hetzelfde voorstel niet opnieuw voor deze winkelmand; bij een nieuwe of geleegde winkelmand verschijnt het opnieuw.",
          "Als er vóór de bevestiging bij het afrekenen een nieuw voorstel verschijnt, moet dat eerst worden geaccepteerd of geweigerd voordat de bestelling kan worden afgerond.",
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
        "text": "Er is nog geen apart rapport voor de maandelijkse vereffening, maar alles wat je nodig hebt om af te stemmen, zit al in de app:"
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
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
