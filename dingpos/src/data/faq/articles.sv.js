// Generated from en and the sv translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync sv`, then `npm run l10n -- apply sv`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Kom igång",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Betalning",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Ordrar och returer",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Produkter, lager och inköp",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Rapporter",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Kampanjer och poängprogram",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Säkerhetskopia och data",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Personal och behörigheter",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Prenumeration och betalning",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Konfigurationsguider för kampanjer",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Kommer snart",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Hur ställer jag in min butik i DingPOS?",
    "keywords": [
      "kom igång",
      "installation",
      "första gången",
      "konfigurera",
      "guide",
      "öppna butik",
      "starta butik"
    ],
    "content": [
      {
        "type": "p",
        "text": "Första gången du öppnar DingPOS leder en guide dig genom stegen för att öppna butiken på cirka 10 minuter:"
      },
      {
        "type": "steps",
        "items": [
          "Välj ditt land – valuta, momsläge och en standardmomssats fylls i automatiskt (momssats och momsläge kan fortfarande ändras i det här steget).",
          "Ange butikens namn och ladda eventuellt upp en butikslogotyp.",
          "Följ guiden för att skapa 3–5 produkter (kan hoppas över – du kan lägga till dem när som helst senare)."
        ]
      },
      {
        "type": "p",
        "text": "När du är klar hör du ett ”Ding!” – butiken är redo och du kan börja sälja direkt."
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
    "question": "Fungerar DingPOS utan internet?",
    "keywords": [
      "offline",
      "utan internet",
      "wifi",
      "nätverk",
      "ingen uppkoppling",
      "marknad",
      "kassasystem utan internet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. DingPOS fungerar utan internet – betalning, produkthantering, lager och rapporter körs lokalt på din iPad utan att något nätverk behövs. Nattmarknader, pop-up-butiker och andra platser utan Wi-Fi fungerar utmärkt."
      },
      {
        "type": "p",
        "text": "Bara två saker kräver uppkoppling: säkerhetskopiering i molnet (uppladdning till ditt eget iCloud / Google Drive / Dropbox) och kontroll av prenumerationsstatus."
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
    "question": "Måste jag skapa ett konto?",
    "keywords": [
      "konto",
      "registrera",
      "logga in",
      "skapa konto",
      "integritet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nej. DingPOS har inget kontosystem – ladda ner appen och börja sälja. Dina produkter, ordrar och kunduppgifter stannar på din iPad och laddas aldrig upp till våra servrar."
      },
      {
        "type": "p",
        "text": "När du aktiverar säkerhetskopiering i molnet loggar du in på ditt eget molnkonto (iCloud, Google Drive eller Dropbox). Säkerhetskopiorna ligger i ditt konto – vi har ingen åtkomst till dem."
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
    "question": "Vilka enheter fungerar DingPOS på?",
    "keywords": [
      "enhet",
      "iphone",
      "mac",
      "ipad",
      "krav",
      "version",
      "iPadOS"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS fungerar för närvarande på iPad med iPadOS 17 eller senare och är i första hand utformat för liggande läge."
      },
      {
        "type": "p",
        "text": "iPhone och Mac stöds inte ännu. Vill du att vi stöder en annan enhet kan du skriva till oss och berätta hur du skulle använda den."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kan jag ändra valuta eller momsläge efter installationen?",
    "keywords": [
      "valuta",
      "momsläge",
      "ändra",
      "låst",
      "momssats",
      "byta valuta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Momssatsen kan ändras när som helst i Inställningar – den nya satsen gäller bara kommande ordrar."
      },
      {
        "type": "p",
        "text": "Valuta och momsläge (inklusive / exklusive moms) är låsta när installationen är klar. Alla dina tidigare ordrar har beräknats med dem, så om de ändras mitt i skulle dina rapporter bli felaktiga."
      },
      {
        "type": "note",
        "text": "Om du precis har öppnat butiken och ännu inte har några viktiga data kan du radera appen och installera om den för att köra installationen igen. Kontrollera att det inte finns något du vill behålla innan du raderar."
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
    "question": "Hur byter jag språk i appen?",
    "keywords": [
      "språk",
      "byta språk",
      "ändra språk",
      "appspråk",
      "svenska",
      "engelska"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS finns på flera språk. Gå till Inställningar → Enhetsval och tryck på Appspråk. Då öppnas DingPOS-sidan i iPadens Inställningar, där du väljer språk under Språk."
      },
      {
        "type": "p",
        "text": "iOS låter inte appar öppna språklistan direkt, så sista trycket görs i systemets Inställningar. Språket gäller bara den här iPaden."
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
    "question": "Hur expedierar jag flera kunder samtidigt?",
    "keywords": [
      "varukorgar",
      "flera kunder",
      "parkera köp",
      "byta varukorg",
      "samtidigt",
      "kö"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kassaskärmen klarar upp till 10 varukorgar samtidigt. Tryck på ”+” i varukorgsfältet för att lägga till en och tryck på en numrerad flik för att byta."
      },
      {
        "type": "p",
        "text": "Varje varukorg räknas för sig. Medan kund A fortfarande tittar runt kan du byta till en annan varukorg och ta betalt av kund B först. En varukorg försvinner automatiskt när betalningen är klar."
      },
      {
        "type": "note",
        "text": "Varukorgarna finns bara i minnet – varukorgar som inte har betalats töms när appen stängs helt."
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
    "question": "Hur ger jag rabatt på en vara eller hela köpet?",
    "keywords": [
      "rabatt",
      "procent",
      "fast belopp",
      "nedsättning",
      "prisavdrag"
    ],
    "content": [
      {
        "type": "p",
        "text": "Rabatter fungerar på två nivåer, och båda kan vara ett fast belopp eller en procentsats:"
      },
      {
        "type": "list",
        "items": [
          "Varurabatt: tryck på en produkt i varukorgen → välj ”Rabatt” → ange ett belopp eller en procentsats.",
          "Varukorgsrabatt: tryck på knappen ”Rabatt” under varukorgen."
        ]
      },
      {
        "type": "p",
        "text": "Varje produkt och varje varukorg kan ha en rabatt i taget – ger du en ny ersätter den den förra, och trycker du på rabattmärket tas den bort. Rabatter dras av före moms, vilket är den vanliga ordningen i handeln."
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
    "question": "Hur räknas momsen ut?",
    "keywords": [
      "moms",
      "mervärdesskatt",
      "moms ingår",
      "moms tillkommer",
      "kvitto",
      "inklusive moms",
      "exklusive moms"
    ],
    "content": [
      {
        "type": "p",
        "text": "Momsen räknas ut automatiskt utifrån det momsläge du valde vid konfigurationen. Kvittot visar momsbeloppet i båda lägena:"
      },
      {
        "type": "list",
        "items": [
          "Moms ingår: priserna innehåller redan moms – totalsumman ändras inte och kvittot specificerar den inräknade momsen (vanligt i Taiwan, Japan med flera).",
          "Moms tillkommer: momsen läggs på det belopp som återstår efter rabatt vid betalning (vanligt i USA, Kanada med flera)."
        ]
      },
      {
        "type": "p",
        "text": "Fullständig beräkningsordning: varurabatter → varukorgsrabatt → moms. Belopp avrundas uppåt från hälften till valutans antal decimaler (t.ex. 0 för TWD, 2 för USD)."
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
    "question": "Vilka betalsätt kan jag använda i kassan?",
    "keywords": [
      "betalning",
      "betalsätt",
      "kontant",
      "kreditkort",
      "line pay",
      "växel",
      "egna betalsätt",
      "på räkning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kontant, Kreditkort och Line Pay finns inbyggda, och under Inställningar kan du lägga till egna betalsätt (t.ex. Apple Pay eller lokala plånböcker)."
      },
      {
        "type": "p",
        "text": "Betalsätten är etiketter för bokföringen – DingPOS hanterar inga riktiga betalningar. Ta emot kort- eller mobilbetalningar med din vanliga terminal eller app och välj sedan motsvarande etikett i DingPOS för att registrera dem. Vid kontantbetalning räknas växeln ut automatiskt."
      },
      {
        "type": "p",
        "text": "Om en stamkund tar med sig varorna nu och betalar senare väljer du På räkning: försäljningen registreras som en kundfordran och regleras när pengarna kommer in. Se ”Kan stamkunder handla på räkning och betala senare?”"
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
    "question": "Kan jag stänga av ljudet ”Ding” efter betalning?",
    "keywords": [
      "ljud",
      "ding",
      "stäng av ljud",
      "tyst",
      "ljud vid betalning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå till Inställningar → Enhetsval och stäng av Ljud vid betalning. Från nästa försäljning är skärmen som visar att köpet gått igenom tyst, men den lätta vibrationen finns kvar."
      },
      {
        "type": "p",
        "text": "Reglaget gäller bara den här iPaden, och en återställning från en molnbackup ändrar det inte."
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
    "question": "Uppdateras varukorgen om jag ändrar en produkts pris?",
    "keywords": [
      "prisändring",
      "ändra pris",
      "varukorg",
      "räkna om"
    ],
    "content": [
      {
        "type": "p",
        "text": "Varukorgen visar priset från det ögonblick produkten lades till. När du trycker på att bekräfta betalningen hämtar DingPOS det senaste priset för varje produkt på nytt – om något har ändrats får du en varning med de uppdaterade priserna innan du går vidare."
      },
      {
        "type": "p",
        "text": "Kampanjer beräknas också om från början vid bekräftelsen. Om totalsumman, momsen eller någon rabatt ändras till följd av det visas en sammanfattning av ändringarna och du måste bekräfta igen – så att beloppet du ser är exakt det som registreras."
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
    "question": "Kan jag kombinera manuell rabatt och kampanjer?",
    "keywords": [
      "manuell rabatt",
      "kampanj",
      "kombinera",
      "åsidosätta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Regeln är ”manuell går först, nivåerna förblir oberoende”:"
      },
      {
        "type": "list",
        "items": [
          "Manuell varurabatt: den raden får inga kampanjer på produktnivå – din manuella rabatt gäller som det slutliga beslutet på plats. Radens belopp räknas ändå med mot gränser för köpbelopp.",
          "Manuell varukorgsrabatt: läggs på efter att alla kampanjer har beräknats, så de två kan finnas samtidigt. Om du anger mer än det som återstår av totalsumman begränsas den automatiskt, med ett meddelande."
        ]
      },
      {
        "type": "p",
        "text": "När du tar bort en manuell rabatt blir raden berättigad till kampanjer igen vid nästa beräkning."
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
    "question": "Jag gjorde fel i kassan – hur makulerar jag en order?",
    "keywords": [
      "makulera",
      "makulera order",
      "avbryta köp",
      "fel i kassan",
      "felaktig order",
      "ångra försäljning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå till Ordrar, hitta ordern, öppna dess detaljvy och välj Makulera. Bekräfta så är det klart."
      },
      {
        "type": "p",
        "text": "Makuleringen återställer automatiskt allt som hänger ihop: spårat lager läggs tillbaka, poäng som tjänats in på ordern dras tillbaka och inlösta poäng återbetalas. Makulerade ordrar ligger kvar i listan med tydlig markering och räknas inte med i intäkten i rapporterna."
      },
      {
        "type": "note",
        "text": "En makulering betyder ”den här försäljningen skedde aldrig” – använd den för en order som blev fel direkt i kassan. När en kund kommer tillbaka med varor senare använder du Retur i stället: den ursprungliga ordern finns kvar, du kan returnera bara några av varorna och intäkten minskar den dag returen görs."
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
    "question": "Hur hanterar jag en retur eller ett byte?",
    "keywords": [
      "retur",
      "returnera vara",
      "byte",
      "byta vara",
      "återbetalning",
      "delretur",
      "byta storlek"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå till Ordrar, öppna den ursprungliga ordern och tryck på Returnera. Välj hur många av varje vara som kommer tillbaka. Vid ett byte trycker du på Lägg till ersättningsvara på samma skärm. Nettobeloppet regleras på en gång: positivt betyder att kunden betalar, negativt att du betalar tillbaka och noll att inga pengar byter händer."
      },
      {
        "type": "list",
        "items": [
          "Den ursprungliga ordern ändras aldrig. En retur skapar ett eget dokument med dagens datum, numrerat med prefixet R, och intäkten minskar den dag returen görs.",
          "Återbetalningen är det kunden faktiskt betalade för varan – radrabatter, varukorgsrabatter och poänginlösen är redan fördelade, så det blir inte en återbetalning till ordinarie pris. Momsen följer den sats som ordern debiterades med.",
          "Ersättningsvaror debiteras till dagens pris, utan kampanjer eller rabatter.",
          "Spårat lager återställs automatiskt. Poäng som tjänats in på den ursprungliga ordern dras tillbaka, inlösta poäng återbetalas och ersättningsvarorna ger egna poäng.",
          "En order kan returneras i flera omgångar, men aldrig fler än det som ursprungligen såldes. Kampanjernas användningsgränser återställs inte av en retur."
        ]
      },
      {
        "type": "note",
        "text": "Det finns ingen tidsgräns för returer, men den ursprungliga ordern krävs. Om en retur har registrerats av misstag makulerar du returen, så kommer den returnerbara mängden tillbaka."
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
    "question": "Hur tar jag emot en förbeställning med handpenning?",
    "keywords": [
      "förbeställning",
      "förbeställa",
      "handpenning",
      "avhämtning",
      "restbelopp",
      "reservera vara"
    ],
    "content": [
      {
        "type": "p",
        "text": "Växla överst i kassan från Försäljning till Förbeställning, välj avhämtningsdatum, ange handpenningen (allt från 0 till hela beloppet, med genvägarna 30 % / 50 % / hela) och välj hur handpenningen betalas. Koppla en kund så att du kan nå dem när varorna kommit in."
      },
      {
        "type": "list",
        "items": [
          "Lagret dras av när förbeställningen läggs, så varorna är reserverade åt kunden. Varor som är slut går på minus och återhämtar sig när en inköpsorder tas emot.",
          "När kunden hämtar ut varorna trycker du på Lämna ut i orderdetaljerna för att ta emot restbeloppet. Ordern blir då en vanlig slutförd försäljning, och senare returer går via det vanliga returflödet.",
          "Om kunden aldrig kommer trycker du på Avboka order i orderdetaljerna och väljer att återbetala eller behålla handpenningen. Lagret läggs tillbaka.",
          "Kvittot för handpenningen och kvittot vid avhämtning har samma nummer."
        ]
      },
      {
        "type": "p",
        "text": "I Statistik räknas en förbeställnings intäkt i sin helhet på avhämtningsdagen, medan handpenningen räknas som mottagna betalningar den dag den betalas – så de två siffrorna skiljer sig åt ett tag. Se ”Vad är skillnaden mellan intäkt och mottagna betalningar?”"
      },
      {
        "type": "note",
        "text": "Varor i en förbeställning kan inte redigeras. Om kunden ändrar sig avbokar du och lägger en ny förbeställning. För att skapa förbeställningar krävs planen Standard eller högre. Efter en nedgradering kan befintliga förbeställningar fortfarande hämtas ut eller avbokas."
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
    "question": "Kan stamkunder handla på räkning och betala senare?",
    "keywords": [
      "på räkning",
      "köpa på kredit",
      "betala senare",
      "kundfordringar",
      "reglera",
      "stamkund",
      "skriva upp"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Välj kunden i kassan och välj På räkning som betalningsmetod. En skuld måste ha en ägare, så På räkning går inte att välja utan kund."
      },
      {
        "type": "p",
        "text": "För att ta emot betalning växlar du överst i Ordrar till Kundfordringar. Skulderna är grupperade per kund. Öppna en kund för att reglera en enskild order, en hel månad eller allt – varje gång frågar DingPOS hur pengarna betalades. En enskild order kan också regleras från sin detaljvy, och en reglering som registrerats av misstag kan tas tillbaka med Ångra reglering."
      },
      {
        "type": "list",
        "items": [
          "Intäkten räknas den dag varorna lämnar butiken. Mottagna betalningar och poäng väntar till dagen då ordern regleras.",
          "Oreglerade ordrar har en bärnstensfärgad märkning i listan, och kunddetaljerna visar hur mycket kunden är skyldig just nu.",
          "En kund med oreglerade ordrar kan inte raderas."
        ]
      },
      {
        "type": "note",
        "text": "För att skapa försäljning på räkning krävs planen Standard eller högre. Efter en nedgradering kan du inte starta nya, men befintliga kundfordringar kan fortfarande visas och regleras."
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
    "question": "Kan jag lägga till anteckningar på ordrar, kunder och inköpsordrar?",
    "keywords": [
      "anteckning",
      "anteckningar",
      "notering",
      "kommentar",
      "lägga till anteckning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Detaljsidorna för ordrar, kunder och inköpsordrar har var sitt anteckningskort – tryck på det för att redigera, upp till 500 tecken. Du kan också skriva en anteckning i formuläret när du skapar en kund eller en inköpsorder."
      },
      {
        "type": "p",
        "text": "Anteckningar är oberoende av status: slutförda ordrar, makulerade ordrar och returer kan alla förses med eller få sin anteckning redigerad. En orders belopp och varor är låsta när köpet genomförs. Anteckningen ligger vid sidan av dokumentet och ändrar aldrig dess innehåll."
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
    "question": "Hur lägger jag upp produkter med varianter, till exempel storlek och färg?",
    "keywords": [
      "varianter",
      "storlek",
      "färg",
      "alternativ",
      "specifikation"
    ],
    "content": [
      {
        "type": "p",
        "text": "På produktens redigeringssida trycker du på Lägg till alternativ under Variantalternativ för att skapa ett alternativ (till exempel ”Färg”) och sedan på ”+ Värde” för varje val (till exempel Röd, Blå). Med två eller fler alternativ (till exempel Färg × Storlek) skapar DingPOS alla kombinationer åt dig (Röd/S, Röd/M, Blå/S …)."
      },
      {
        "type": "p",
        "text": "Varje kombination har eget pris och eget inköpspris, och håller reda på sitt eget lager. I kassan visas en variantväljare när du trycker på produkten, innan den läggs i varukorgen."
      },
      {
        "type": "note",
        "text": "Namn på alternativ och värden får vara högst 20 tecken långa."
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
    "question": "Hur fungerar streckkoder i kassasystemet?",
    "keywords": [
      "streckkod",
      "skanna",
      "streckkodsläsare",
      "dubblett",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Streckkoder för produkter kan skrivas in manuellt eller skannas med kameran. Varje streckkod måste vara unik – om en streckkod redan används av en annan produkt när du sparar visar DingPOS vilken produkt den tillhör."
      },
      {
        "type": "p",
        "text": "I kassan söker sökfältet på både produktnamn och början av streckkoder – skriv in en streckkod så dyker produkten upp direkt. Om du undrar över streckkodsläsare som ansluts till iPad, se ”Kommer fysiska streckkodsläsare att stödjas?”"
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
    "question": "Hur ändrar jag i vilken ordning produkterna visas?",
    "keywords": [
      "sortera",
      "ordning",
      "ändra ordning",
      "ordna",
      "dra",
      "fäst överst"
    ],
    "content": [
      {
        "type": "p",
        "text": "Under Produkter trycker du på Redigera ordning och drar produktkorten dit du vill ha dem. Kassan och produkthanteringen delar samma ordning, så när du ordnar den en gång uppdateras båda."
      },
      {
        "type": "list",
        "items": [
          "Med ett stort sortiment finns Flytta först, Flytta sist och Flytta till position i varje korts meny, och varje kort visar sin nuvarande position.",
          "Filtrera på en kategori först om du bara vill ändra ordningen inom den kategorin – produkter i andra kategorier stannar där de är.",
          "Nya produkter hamnar först, och när du redigerar en produkts uppgifter ändras aldrig dess position."
        ]
      },
      {
        "type": "p",
        "text": "Vill du en stund sortera efter namn, pris eller skapad/uppdaterad tid använder du menyn Sortera efter. Din egen ordning sparas, och när du går tillbaka till Manuell ordning är den tillbaka."
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
    "question": "Hur håller jag reda på lagersaldot?",
    "keywords": [
      "lager",
      "lagersaldo",
      "lagerhantering",
      "inventering",
      "lågt lager"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lagerföring slår du på för varje produkt: aktivera den på produktens redigeringssida och ange nuvarande antal. Varje variant av en produkt har sitt eget lagersaldo."
      },
      {
        "type": "p",
        "text": "När den är på drar försäljningar och förbeställningar av lager automatiskt; makuleringar, returer och avbokade förbeställningar lägger tillbaka det; när du tar emot en inköpsorder ökar saldot; och du kan justera manuellt när som helst. Varje förändring registreras i en komplett logg. Lågt lager markeras med en färgvarning."
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
    "question": "Varför kan lagersaldot bli negativt?",
    "keywords": [
      "negativt lager",
      "lagersaldo",
      "slut i lager",
      "spärra",
      "justera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det är avsiktligt: kassan blockeras aldrig av för lågt lagersaldo. Första regeln när kassan är igång är att kunden aldrig ska behöva vänta – ett felaktigt tal på papperet går att rätta senare, men ett avbrutet köp är förlorat för gott."
      },
      {
        "type": "p",
        "text": "Negativt saldo betyder oftast att en påfyllning inte registrerats, eller att en förbeställd vara ännu inte kommit in (förbeställningar drar av lager när de läggs). Registrera påfyllningar genom att ta emot en inköpsorder, så rättar saldot sig självt. Differenser vid inventering rättar du med en manuell justering, som sparas i lagerloggen."
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
    "question": "Hur registrerar jag inköp och leverantörer?",
    "keywords": [
      "inköpsorder",
      "inköp",
      "leverantör",
      "inleverans",
      "påfyllning",
      "leverantörsskulder"
    ],
    "content": [
      {
        "type": "p",
        "text": "Under Inköp i sidofältet hanterar du leverantörer och inköpsorder. För en leverantör sparas namn, kontaktperson, telefon, adress och ett standardmässigt betalningsvillkor (betala direkt eller månadskredit)."
      },
      {
        "type": "steps",
        "items": [
          "Tryck på Nytt inköp, välj leverantör och lägg till produkter, antal och inköpspris per styck (förifyllt med varje produkts nuvarande inköpspris). Du kan också lägga till en fraktavgift. Finns leverantören inte än trycker du på Lägg till leverantör uppe till vänster i leverantörslistan – den nya leverantören följer direkt med tillbaka till inköpsordern.",
          "Ett utkast påverkar aldrig lager eller skulder – redigera eller radera det fritt.",
          "När varorna kommer trycker du på Ta emot varor: lagerförda produkter ökar i saldo, och inköpsordern får sitt nummer och låses. Som standard uppdateras också varje produkts inköpspris till det här priset per styck; stäng av Uppdatera produkternas inköpspris på inköpsordern om du vill behålla priserna oförändrade."
        ]
      },
      {
        "type": "p",
        "text": "Betalningsvillkoret avgör vad som händer sedan: ordrar som betalas direkt markeras som betalda, medan ordrar med månadsbetalning ligger kvar som obetalda under Att betala, där du kan reglera dem per leverantör – en order, den här månaden eller allt."
      },
      {
        "type": "note",
        "text": "Inköp kräver planen Standard eller högre. En leverantör med obetalda mottagna ordrar kan inte raderas."
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
    "question": "Vad är skillnaden mellan intäkt och mottagna betalningar?",
    "keywords": [
      "intäkt",
      "mottagna betalningar",
      "inkomst",
      "avstämning",
      "handpenning",
      "försäljning på räkning"
    ],
    "content": [
      {
        "type": "p",
        "text": "Intäkten räknas den dag varorna lämnas över, mottagna betalningar den dag pengarna kommer in. Vid en order som betalas i kassan sker båda samma dag och siffrorna stämmer överens. De skiljer sig åt när:"
      },
      {
        "type": "list",
        "items": [
          "Försäljning på räkning: varorna lämnar butiken idag och räknas in i dagens intäkt, medan pengarna räknas som mottagna betalningar den dag ordern regleras.",
          "Förbeställning: handpenningen räknas som mottagna betalningar när den betalas, och intäkten bokförs i sin helhet på upphämtningsdagen.",
          "Förverkad handpenning: när en kund avbokar en förbeställning och du behåller handpenningen, räknades den redan som mottagna betalningar när den betalades. Statistik visar den separat som förverkade handpenningar, och den räknas aldrig som intäkt."
        ]
      },
      {
        "type": "p",
        "text": "För avstämning jämför du mottagna betalningar med kassalådan och kortterminalen. Vill du se hur mycket du faktiskt sålt under en period tittar du på intäkt. Returer minskar intäkten den dag returen görs."
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
    "question": "Vilka tidsperioder kan rapporterna visa?",
    "keywords": [
      "rapporter",
      "period",
      "denna vecka",
      "denna månad",
      "detta år",
      "anpassat datumintervall",
      "datum",
      "mest sålda produkter"
    ],
    "content": [
      {
        "type": "p",
        "text": "Välj Idag, Igår, Denna vecka, Denna månad, Detta år eller Hela tiden högst upp i Statistik, eller använd Anpassad för att välja start- och slutdatum. Denna vecka utgår från enhetens första veckodag, och Denna månad och Detta år börjar den 1:a respektive den 1 januari. Varje alternativ visar vilka datum det omfattar, och Hela tiden börjar vid butikens första transaktion."
      },
      {
        "type": "p",
        "text": "För en enskild dag blir trenddiagrammet ett stapeldiagram per timme. Längre perioder använder dagar, veckor, månader eller år per stapel beroende på längd."
      },
      {
        "type": "p",
        "text": "Kortet Produktranking visar de fem främsta. Tryck på kortet eller på Visa alla för att lista alla produkter som sålts under perioden, rankade efter antal efter returer."
      },
      {
        "type": "p",
        "text": "Med planen Pro jämför Försäljningsjämförelse till höger i periodfältet perioden med den före eller med samma period förra året – se ”Vad visar de avancerade rapporterna i Pro?”"
      },
      {
        "type": "note",
        "text": "Dessa kalenderperioder kom i v2.4. Tidigare versioner hade glidande intervall (Idag / 7 dagar / 30 dagar / Hela tiden). Ser du dem fortfarande, uppdatera DingPOS från App Store."
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
    "question": "Vad visar de avancerade rapporterna i Pro?",
    "keywords": [
      "avancerade rapporter",
      "pro",
      "försäljningsjämförelse",
      "förra året",
      "värmekarta",
      "rusningstider",
      "långsamgående produkter",
      "lagervärde",
      "återköpsfrekvens",
      "poäng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avancerade rapporter är ingen separat skärm – de finns direkt i Statistik och följer den period du väljer högst upp:"
      },
      {
        "type": "list",
        "items": [
          "Försäljningsjämförelse: till höger i periodfältet jämför du med samma period förra året eller med perioden före (en enskild dag mot samma dag förra veckan, denna vecka mot förra veckan, denna månad mot förra månaden, detta år mot förra året, ett anpassat intervall mot lika många dagar närmast före). Rutan Mottagna betalningar visar skillnaden och tillväxttakten, och intäktsdiagrammet får en ljusare linje för jämförelseperioden. Medan en period pågår klipps jämförelseperioden vid samma tidpunkt.",
          "Veckodag × timme: växla rubriken Försäljning över tid till Veckodag × timme för en värmekarta över sju dagar och 24 timmar – ju mörkare ruta, desto mer sålde du. Växla mellan intäkt och ordrar. Med jämförelse påslagen ser du vilka timmar som ökat och vilka som minskat.",
          "Långsamgående produkter: växla rubriken på rankingkortet till Långsamgående produkter för att lista produkterna från minst till mest sålda, med aktuellt lagersaldo och datumet då varje produkt senast såldes. Produkter som aldrig sålts markeras Aldrig såld. Som standard visas bara produkter som finns i lager.",
          "Återköpsfrekvens: sista raden i kundrutan visar andelen medlemmar som handlat under perioden och som totalt handlat två gånger eller fler.",
          "Just nu: lagervärde (aktuellt lagersaldo × aktuellt inköpspris), alla lagerrörelser under vald period samt de poäng kunderna har men inte löst in, med det mesta de kan dra av. Det är aktuella saldon, och perioden påverkar dem inte."
        ]
      },
      {
        "type": "p",
        "text": "Utan Pro har vart och ett av dessa fem ställen ett litet lås som öppnar en förklaring om uppgradering. Allt annat i Statistik fungerar som vanligt. Rapporterna läser data som din butik redan sparar, så när Pro upphör döljs bara rapporterna – ingen data försvinner."
      },
      {
        "type": "note",
        "text": "Personal ser avancerade rapporter under behörigheten Översikt. För lagervärdets belopp krävs dessutom behörigheten Inköpspris och vinst."
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
    "question": "Hur redovisas vinsten om jag inte har angett inköpspris?",
    "keywords": [
      "inköpspris",
      "vinst",
      "marginal",
      "rapporter",
      "vinst spåras inte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Inköpspris är ett valfritt fält. Produkter utan inköpspris markeras ”vinst spåras inte” i rapporterna och lämnas utanför vinstberäkningen – intäkten räknas fortfarande fullt ut, det är bara vinsten som hoppas över."
      },
      {
        "type": "p",
        "text": "För kompletta vinstrapporter lägger du till inköpspris på produktens redigeringssida. Kommande ordrar tas då med. Vinsten beräknas på intäkten efter rabatt."
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
    "question": "Hur skapar jag en kampanj?",
    "keywords": [
      "kampanj",
      "erbjudande",
      "köp en få en gratis",
      "köp X få Y",
      "tröskel",
      "happy hour",
      "rabattkod",
      "kupong"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå till Inställningar → Kampanjer. Följande typer stöds:"
      },
      {
        "type": "list",
        "items": [
          "Köptröskel: handla för X och få Y kr eller Y % rabatt.",
          "Köp en få en gratis och erbjudanden på den n:te varan.",
          "Multiplikatorer för bonuspoäng.",
          "Erbjudanden bara för en viss medlemsnivå eller under födelsemånaden.",
          "Köp A få B, betalda tillval och paketpris."
        ]
      },
      {
        "type": "p",
        "text": "Varje kampanj kan schemaläggas (happy hour-tider, vissa veckodagar, över midnatt), begränsas till vissa produkter och styras med prioritet, regler för kombinering och användningsgränser. Kampanjer som uppfylls tillämpas automatiskt vid betalning – inga rabattkoder behövs."
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
    "question": "Min kampanj tillämpas inte – vad ska jag kontrollera?",
    "keywords": [
      "kampanj",
      "fungerar inte",
      "tillämpas inte",
      "felsökning",
      "rabatt syns inte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kontrollera de vanligaste orsakerna i den här ordningen:"
      },
      {
        "type": "steps",
        "items": [
          "Schema: ligger dagens datum inom kampanjens aktiva period? Begränsar happy hour-tiden veckodag eller klockslag?",
          "Omfattning: ingår varorna i varukorgen i kampanjens produkter eller kategori? Har köptröskeln nåtts?",
          "Målgrupp: gäller kampanjen bara en medlemsnivå eller födelsemånad? Valdes den medlemmen vid betalning?",
          "Användningsgränser: har den totala gränsen, eller den här kundens gräns, nåtts?",
          "Kombinering: blockeras den av en kampanj med högre prioritet som har ”Stoppa efterföljande kampanjer när denna tillämpas”?"
        ]
      },
      {
        "type": "p",
        "text": "Om allt stämmer och kampanjen ändå inte tillämpas kan du mejla oss en skärmbild av kampanjens inställningar, så hjälper vi dig att gå till botten med det."
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
    "question": "Hur fungerar poängprogrammet?",
    "keywords": [
      "poäng",
      "poängprogram",
      "belöningar",
      "lös in poäng",
      "välkomstbonus",
      "kundklubb"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå till Inställningar → Poängprogram och ställ in två regler: tjäna Y poäng för varje X du handlar för och lös in N poäng mot M i rabatt (med ett valfritt inlösentak per order). Du kan också ge nya medlemmar en välkomstbonus automatiskt."
      },
      {
        "type": "p",
        "text": "Välj medlemmen vid betalning så samlas poängen automatiskt. Om du vill lösa in anger du hur många poäng som ska användas. När en order makuleras dras de poäng den gav tillbaka, och inlösta poäng återförs."
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
    "question": "Vad används medlemsnivåer till?",
    "keywords": [
      "medlemsnivå",
      "nivå",
      "vip",
      "guld",
      "uppgradering",
      "medlemskap"
    ],
    "content": [
      {
        "type": "p",
        "text": "Medlemsnivåer (t.ex. Standard, Silver, Guld) har två syften: kampanjer kan riktas mot en viss nivå (t.ex. 10 % rabatt bara för Guld), och du ser en kunds status direkt vid betalning."
      },
      {
        "type": "p",
        "text": "Nivåer kan uppgraderas automatiskt enligt regler du bestämmer (t.ex. sammanlagda köp) eller tilldelas manuellt. Om en makulerad order hade utlöst en uppgradering tas nivån tillbaka automatiskt."
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
    "question": "Hur säkerhetskopierar jag min data?",
    "keywords": [
      "säkerhetskopia",
      "backup",
      "icloud",
      "google drive",
      "dropbox",
      "moln",
      "ögonblicksbild"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå till Inställningar → Säkerhetskopia i molnet, välj iCloud, Google Drive eller Dropbox och godkänn åtkomsten. Därefter kan du när som helst starta en säkerhetskopia manuellt. För iCloud måste den här iPaden vara inloggad på iCloud med iCloud Drive aktiverat, och DingPOS måste ha tillåtelse att använda det."
      },
      {
        "type": "p",
        "text": "Säkerhetskopiorna hamnar i ditt eget molnkonto. Varje moln sparar bara den senaste – en ögonblicksbild av datan och en fil med produktbilder – och varje ny säkerhetskopia skriver över den förra."
      },
      {
        "type": "note",
        "text": "Eftersom en ny säkerhetskopia ersätter den gamla ska du inte säkerhetskopiera om du misstänker att din data redan har blivit fel (till exempel att en rad produkter raderats av misstag). Mejla oss i stället, så tar vi fram nästa steg tillsammans."
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
    "question": "iCloud-säkerhetskopian visar ”Inte ansluten” – vad gör jag?",
    "keywords": [
      "icloud",
      "inte ansluten",
      "icloud drive",
      "säkerhetskopiering misslyckades",
      "kan inte ansluta"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS visar iCloud som anslutet först när det faktiskt går att använda. Om det står Inte ansluten, kontrollera tre saker i appen Inställningar på iPaden:"
      },
      {
        "type": "steps",
        "items": [
          "Du är inloggad med ditt Apple-konto.",
          "iCloud Drive är aktiverat.",
          "DingPOS har tillåtelse att använda iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "När alla tre är på går du tillbaka till Säkerhetskopia i molnet i DingPOS, så visas iCloud som anslutet. Säkerhetskopiorna sparas i DingPOS egen mapp i iCloud Drive."
      },
      {
        "type": "note",
        "text": "I versioner före v3.0 fungerade inte iCloud-säkerhetskopiering utan misslyckades varje gång med ”Backup.SyncError error 0”. Uppdatera först DingPOS från App Store."
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
    "question": "Hur flyttar jag min data till en ny iPad?",
    "keywords": [
      "flytta data",
      "ny ipad",
      "återställa",
      "överföra",
      "byta ipad"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Gamla iPaden: gå till Inställningar → Säkerhetskopia i molnet och kör en manuell säkerhetskopia. Kontrollera att tiden för säkerhetskopian har uppdaterats.",
          "Nya iPaden: installera DingPOS och gå igenom installationsguiden.",
          "Nya iPaden: gå till Inställningar → Säkerhetskopia i molnet, anslut samma molnkonto och återställ."
        ]
      },
      {
        "type": "p",
        "text": "När du trycker på Återställ öppnas först en förhandsvisning: den här iPadens och ögonblicksbildens antal produkter, ordrar och kunder sida vid sida, plus alla ordrar som återställningen skulle ta bort. Ingenting på den här iPaden ändras förrän du bekräftar. Om ögonblicksbilden är gjord med en nyare version av DingPOS ombeds du uppdatera appen först. Produktbilderna återställs också."
      },
      {
        "type": "note",
        "text": "En återställning ersätter all data på den här iPaden med säkerhetskopian – ordrar som skapats på den här iPaden efter säkerhetskopian försvinner. Kontrollera att du är ansluten till rätt molnkonto. Om du har återställt från fel konto använder du Ångra återställning."
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
    "question": "Finns min data kvar om jag raderar appen?",
    "keywords": [
      "radera",
      "avinstallera",
      "dataförlust",
      "ta bort appen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nej. DingPOS lagrar allt lokalt på din enhet – när du raderar appen raderas alla produkter, ordrar, kunder och inställningar för gott, om du inte har aktiverat säkerhetskopiering i molnet."
      },
      {
        "type": "note",
        "text": "Kör alltid en manuell säkerhetskopia innan du raderar appen och kontrollera att den lyckades. När du har installerat om appen återställer du från molnet."
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
    "question": "Appen visar ”Det gick inte att öppna din butiksdata” – vad gör jag?",
    "keywords": [
      "går inte att öppna",
      "öppnas inte",
      "kraschar",
      "kraschar vid start",
      "databas",
      "butiksdata"
    ],
    "content": [
      {
        "type": "p",
        "text": "Radera inte appen. Den här skärmen betyder att DingPOS inte kunde läsa din butiksdata, men datan finns kvar på den här iPaden – om du raderar appen raderas den tillsammans med appen."
      },
      {
        "type": "p",
        "text": "Tryck först på Försök igen. Om det fungerar öppnas appen som vanligt. Om felet återkommer trycker du på Kontakta support och berättar för oss, så hjälper vi dig att få tillbaka din data. Den här skärmen flyttar eller raderar aldrig några filer."
      },
      {
        "type": "note",
        "text": "Den vanligaste orsaken är att appen stängdes mitt under en återställning. Före v3.0 gjorde det att appen kraschade vid varje start. Sedan v3.0 stannar den i stället på den här skärmen."
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
    "question": "Kan jag använda två iPads tillsammans?",
    "keywords": [
      "två ipads",
      "flera enheter",
      "synkronisera",
      "dela data",
      "andra kassan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Varje iPads data är för närvarande fristående – att dela en och samma data i realtid mellan två enheter stöds inte ännu."
      },
      {
        "type": "p",
        "text": "Du kan kopiera data från en iPad till en annan via säkerhetskopia i molnet (säkerhetskopiera → återställ), vilket fungerar bra när du byter enhet eller vill fylla en andra iPad med data. Ordrar som registreras separat på varje enhet slås dock inte ihop automatiskt. Synkronisering mellan flera enheter finns på vår färdplan."
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
    "question": "Kan jag importera produkter och försäljning från ett annat kassasystem eller ett kalkylblad?",
    "keywords": [
      "importera",
      "csv",
      "excel",
      "kalkylblad",
      "byta kassasystem",
      "flytta data",
      "massimport",
      "försäljningshistorik"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Gå till Inställningar → Dataimport, välj om du vill importera produkter eller försäljning och välj en CSV-fil (Excel och Google Sheets kan båda spara som CSV)."
      },
      {
        "type": "steps",
        "items": [
          "Filen öppnas som en tabell. Vanliga kolumnnamn på engelska och kinesiska matchas automatiskt. Tryck på en kolumnrubrik för att ändra dess koppling.",
          "Tryck på en cell för att rätta värdet direkt – du behöver inte redigera filen och börja om.",
          "Tryck på Bekräfta för att kontrollera filen. Rader med problem markeras med rött och orsak. Vid import av försäljning kan ordrar med fel hoppas över.",
          "Lös allt som kräver ett val (produkter med samma namn, en rad som matchar flera kunder), gå igenom sammanfattningen och tryck sedan på Starta importen."
        ]
      },
      {
        "type": "list",
        "items": [
          "Importerad försäljning placeras efter transaktionsdatum och räknas om med butikens valuta och momsläge. Den påverkar inte lagret och ger inga välkomstpoäng.",
          "Kunder matchas mot befintliga via telefonnummer eller e-post. Kunder utan träff skapas.",
          "Importerade ordrar visar ett importdatum och källans ordernummer och kan inte makuleras eller returneras.",
          "Rader med fel kan exporteras som en CSV-fil med orsakerna angivna – rätta dem och importera igen. Dubblettrader hoppas över automatiskt."
        ]
      },
      {
        "type": "note",
        "text": "Dataimporten är en betaversion. Varje fil kan innehålla upp till 50 000 rader eller 20 MB. Säkerhetskopiera till molnet före importen. Om något inte går att importera eller resultatet ser fel ut, berätta för oss via Rapportera ett problem på importskärmen."
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
    "question": "Jag återställde fel säkerhetskopia. Kan jag ångra det?",
    "keywords": [
      "ångra återställning",
      "återställ",
      "fel ögonblicksbild",
      "återställningslogg",
      "förlorad data",
      "gå tillbaka"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Varje återställning från molnet sparar den data den ersatte som en kopia före återställning. Under Inställningar → Säkerhetskopia i molnet visar ett kort när den senaste återställningen gjordes och varifrån den kom. Tryck på Ångra återställning, granska förhandsvisningen och bekräfta – då byter datan tillbaka till hur den var före återställningen och appen läses in på nytt."
      },
      {
        "type": "list",
        "items": [
          "Ångra återställning är i sig en återställning och sparar en ny kopia av det den ersätter, så om du trycker igen byter du tillbaka.",
          "Bara den senaste kopian sparas. Nästa återställning ersätter den.",
          "Bara data kommer tillbaka: produkter som lades till efter ögonblicksbilden visas med saknad bild."
        ]
      },
      {
        "type": "p",
        "text": "Vill du se vem som återställde, när och från vilken ögonblicksbild, tryck på Visa återställningslogg på samma skärm. Där syns varje återställnings tid, aktiv medarbetare, källa, antal produkter / ordrar / kunder före och efter samt alla ordrar som den tog bort. Loggen finns på den här iPaden och ersätts aldrig av en återställning."
      },
      {
        "type": "note",
        "text": "Förhandsvisningen av återställning och Ångra återställning fungerar i alla planer. Att visa återställningsloggen är en Pro-funktion. Loggposter skrivs även utan Pro (bara utan aktiv medarbetare), så om du skaffar Pro senare ser du dem alla."
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
    "question": "Hur lägger jag till medarbetare och byter vem som sköter kassan?",
    "keywords": [
      "personal",
      "medarbetare",
      "anställd",
      "chef",
      "konto",
      "PIN-kod",
      "aktiv medarbetare",
      "byta användare",
      "skiftbyte",
      "kassör"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tryck på Personal i sidofältet. Första gången skapar du ägaren: ett namn och en PIN-kod på 4 siffror. Du behöver den här PIN-koden för att lägga till medarbetare och ändra behörigheter, så kom ihåg den – den kan inte återställas."
      },
      {
        "type": "steps",
        "items": [
          "På sidan Personal trycker du på Lägg till medarbetare, skriver ett namn, väljer roll (Chef eller Medarbetare) och anger en PIN-kod på 4 siffror.",
          "Den aktiva medarbetaren visas längst ned i sidofältet och uppe till höger i kassan. Vid skiftbyte trycker du på den, väljer ditt namn och anger din PIN-kod.",
          "Därefter registreras vem som hanterat varje order, betalning samt lager- eller poängändring. Det syns i orderlistan och i orderinformationen, och för makulerade ordrar registreras också vem som makulerade."
        ]
      },
      {
        "type": "p",
        "text": "När någon slutar använder du Inaktivera medarbetaren: historiken finns kvar och du kan aktivera personen igen senare. Om du ändrar ett namn påverkas inte gamla ordrar – de behåller namnet från den tiden."
      },
      {
        "type": "note",
        "text": "Personal är en Pro-funktion (den ingår även under provperioden). Om Pro upphör sparas personaldata och vem som hanterat varje order, och nya ordrar registreras på ägaren. Prenumererar du på Pro igen kommer allt tillbaka."
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
    "question": "Vad händer om jag glömmer ägarens PIN-kod?",
    "keywords": [
      "PIN-kod",
      "glömt",
      "lösenord",
      "återställa",
      "ägare",
      "återfå",
      "utelåst"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ägarens PIN-kod kan inte återställas, och vår support kan inte heller låsa upp den. PIN-koden lagras tillsammans med butikens data, så om du raderar och installerar om appen och sedan återställer från molnet får du tillbaka samma PIN-kod."
      },
      {
        "type": "p",
        "text": "När ägaren skapas och vid varje ändring av ägarens PIN-kod visas varningen ”Kom ihåg den här PIN-koden. Om du glömmer den kan den inte återställas.” Förvara den på ett ställe som bara du har tillgång till."
      },
      {
        "type": "p",
        "text": "Utan ägarens PIN-kod går det inte att göra något som kräver den – lägga till eller redigera medarbetare, ändra rollbehörigheter och visa aktivitetsloggen. Medarbetarna kan fortsätta ta betalt och sköta det dagliga arbetet med sina egna PIN-koder."
      },
      {
        "type": "note",
        "text": "Om en medarbetare glömmer sin PIN-kod är det ingen fara: ägaren kan återställa den under Personal."
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
    "question": "Hur fungerar behörigheter för medarbetare och godkännande från chef?",
    "keywords": [
      "behörigheter",
      "godkännande",
      "chef",
      "rabatttak",
      "medarbetare",
      "inköpspris",
      "roll"
    ],
    "content": [
      {
        "type": "p",
        "text": "En behörighet har två värden: Tillåtet eller Kräver godkännande – inget är helt förbjudet. När en medarbetare försöker göra något som kräver godkännande väljer en kollega som får göra det sitt namn och anger sin PIN-kod för att släppa igenom åtgärden."
      },
      {
        "type": "list",
        "items": [
          "Åtgärder (manuell lagerjustering, produkthantering, genomföra ett köp med rabatt som överskrider rabatttaket): ett godkännande gäller just den åtgärden.",
          "Vyer (inköpspris och vinst, Statistik, Inställningar, säkerhetskopiering och återställning): ett godkännande låser upp tills den aktiva medarbetaren byts eller appen går till bakgrunden.",
          "Rabatttaket gäller manuella rabatter och kontrolleras en gång vid betalning. Automatiska kampanjer och inlösen av poäng räknas inte mot det."
        ]
      },
      {
        "type": "p",
        "text": "Standardinställningar: Chefer får göra allt utom säkerhetskopiering och återställning, utan rabatttak. Medarbetare kräver godkännande för allt, med ett tak på 10 %. Ägaren har alltid behörighet och kan inte redigeras. Om du vill ändra något går du till Personal → Rollbehörigheter, trycker på Redigera och sparar en gång – det gäller direkt för alla."
      },
      {
        "type": "note",
        "text": "Makuleringar, returer, försäljning på räkning och inköp har medvetet ingen behörighet; de registrerar bara vem som hanterat dem. Om du vill granska dem i efterhand använder du aktivitetsloggen."
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
    "question": "Hur ser jag vem som makulerade en order, justerade lagret eller ändrade ett pris?",
    "keywords": [
      "aktivitetslogg",
      "granskning",
      "vem ändrade",
      "makulering",
      "prisändring",
      "lagerjustering",
      "raderad produkt",
      "godkännanden",
      "logg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Använd aktivitetsloggen. På sidan Personal trycker du på Aktivitetslogg uppe till höger och anger ägarens PIN-kod. Då ser du butikens känsliga åtgärder med de senaste först: makuleringar, returer, manuella lagerjusteringar, godkännanden, ändringar av personal och behörigheter, ändringar av ägarens PIN-kod, ändringar av produkters pris och inköpspris samt borttagna produkter. Vanliga betalningar listas inte."
      },
      {
        "type": "list",
        "items": [
          "Varje post visar vad som berördes, vem som gjorde vad och när, samt resultatet – till exempel ”Pris M: $390 → $350”.",
          "Filtrera på medarbetare (även inaktiverade), typ av åtgärd och Idag / Denna vecka / Denna månad.",
          "Tryck på en post som hänvisar till en order, produkt eller kund för att öppna dess detaljer.",
          "Orderinformationen, produktinformationen och varje medarbetares sida har en egen ingång som bara listar posterna om just den.",
          "Raderade produkter visas fortfarande i loggen med namn och pris från den tiden."
        ]
      },
      {
        "type": "note",
        "text": "Alla planer registrerar, men det är bara visningen som är en Pro-funktion, så poster från tiden då Pro var avbrutet syns när du prenumererar igen. Loggen följer med dina säkerhetskopior i molnet."
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
    "question": "Hur fungerar den gratis provperioden?",
    "keywords": [
      "provperiod",
      "gratis",
      "30 dagar",
      "prova gratis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Du får 30 dagar med alla funktioner i Pro-planen från första installationen, bland annat medarbetarkonton, behörigheter, aktivitetsloggen och avancerade rapporter – inget konto behövs."
      },
      {
        "type": "p",
        "text": "Om du prenumererar på en plan under provperioden avslutas provperioden direkt, och den plan du köpt gäller från och med då. Efter provperioden finns Pro-funktioner som medarbetare och avancerade rapporter kvar bara med en Pro-prenumeration."
      },
      {
        "type": "p",
        "text": "Allt du skapar under provperioden (produkter, ordrar, medlemmar) sparas helt och hållet. Dina data raderas aldrig, oavsett om du prenumererar efteråt eller inte."
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
    "question": "Försvinner mina data när provperioden är slut?",
    "keywords": [
      "provperioden slut",
      "går ut",
      "låst",
      "data",
      "förlora data"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nej – dina data finns kvar på din enhet för alltid. När provperioden är slut låses kassan, men du kan fortfarande bläddra bland ordrar, se rapporter och hantera produkter."
      },
      {
        "type": "p",
        "text": "Prenumerera när som helst så låses kassan upp direkt, med alla dina data precis som du lämnade dem."
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
    "question": "Vad skiljer Lite, Standard och Pro åt?",
    "keywords": [
      "planer",
      "lite",
      "standard",
      "pro",
      "skillnad",
      "jämföra",
      "uppgradera",
      "nedgradera",
      "pris"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alla tre planerna ger dig full kassafunktion, produkter, ordrar (med makuleringar, returer och byten), rapporter och säkerhetskopiering i molnet. Skillnaden ligger i verktygen för att driva butiken:"
      },
      {
        "type": "list",
        "items": [
          "Lite: för dig som driver ett marknadsstånd ensam och behöver kassa och produkter.",
          "Standard: lägger till kampanjer, poäng och kundnivåer, lagerstyrning, inköp, försäljning på räkning och förbeställningar.",
          "Pro: lägger till medarbetarkonton och behörigheter, godkännande från en chef, aktivitetsloggen, återställningslogg och avancerade rapporter – för butiker med personal."
        ]
      },
      {
        "type": "p",
        "text": "Har du redan Standard? Uppgradera till Pro på sidan Prenumeration: betalningsperioden förblir densamma, uppgraderingen gäller direkt och Apple räknar om mellanskillnaden proportionellt. Byte från Pro tillbaka till Standard gäller vid förnyelsen. Priserna visas i appen, och du kan jämföra planerna på vår sida Priser."
      },
      {
        "type": "note",
        "text": "Om du byter till en lägre plan raderas inga data. Funktioner utöver din plan pausas, datan finns kvar, och när du prenumererar igen är de tillbaka."
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
    "question": "Hur prenumererar jag, säger upp prenumerationen eller återställer ett köp?",
    "keywords": [
      "prenumerera",
      "avsluta prenumeration",
      "säga upp",
      "återställ köp",
      "pris",
      "fakturering"
    ],
    "content": [
      {
        "type": "p",
        "text": "Prenumerationer hanteras via köp i appen i App Store – planer och priser visas i appen. Betalningen hanteras av Apple; vi ser aldrig dina betalningsuppgifter."
      },
      {
        "type": "list",
        "items": [
          "Säga upp: hantera det i enhetens Inställningar → Apple-konto → Prenumerationer. Säg upp minst 24 timmar innan den pågående perioden tar slut för att undvika förnyelse.",
          "Återställa: efter byte av enhet eller ominstallation, tryck på ”Återställ köp” på sidan Prenumeration i DingPOS.",
          "Byta plan: välj den nya planen på sidan Prenumeration i DingPOS. Uppgraderingar (Standard till Pro, månadsvis till årsvis) gäller direkt, och Apple räknar om mellanskillnaden proportionellt; nedgraderingar gäller vid förnyelsen."
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
    "question": "Hur skapar jag en rabatt när kunden handlar för ett visst belopp?",
    "keywords": [
      "beloppsgräns",
      "handla för",
      "rabatt vid köpbelopp",
      "guide",
      "konfiguration",
      "instruktion"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gå till Inställningar → Kampanjer → Ny, välj kampanjtypen med beloppsgräns och gör sedan så här:"
      },
      {
        "type": "steps",
        "items": [
          "Ange beloppsgränsen och rabatten (fast belopp eller procent).",
          "Välj omfattning: vissa produkter, vissa kategorier, eller lämna tomt för hela butiken.",
          "Ställ in schemat: startdatum krävs; lämna slutdatum tomt för en löpande kampanj.",
          "Spara – kampanjen aktiveras enligt schemat och tillämpas automatiskt i kassan, utan koder."
        ]
      },
      {
        "type": "note",
        "text": "Gränsen kontrolleras mot delsumman för de varor som omfattas, inte mot hela varukorgen. En kampanj som ”handla för 1 000 kr på Drycker” räknar bara drycker mot gränsen, och produkter markerade ”undanta från kampanjer” räknas aldrig med."
      },
      {
        "type": "p",
        "text": "Något vi ofta får frågor om: om en kampanj med högre prioritet tillämpas först kontrolleras gränsen mot det redan rabatterade beloppet – en varukorg som ser ut att ligga över gränsen kan hamna strax under. Vill du att gränsen bedöms först, ge den ett lägre prioritetsnummer."
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
    "question": "Hur ställer jag in köp en, få en gratis och rabatt på vara nummer N?",
    "keywords": [
      "köp en få en gratis",
      "bogo",
      "3 för 2",
      "vara nummer N",
      "guide",
      "instruktion"
    ],
    "content": [
      {
        "type": "p",
        "text": "Skapa en kampanj av typen köp N, få N: ange hur många kunden köper, hur många kunden får och rabattprocenten (100 % = gratis). Begränsa den till vissa produkter eller en hel kategori – olika produkter i samma kategori räknas ihop i en grupp."
      },
      {
        "type": "list",
        "items": [
          "Den rabatterade varan är den billigaste i gruppen, värderad till sitt aktuella gällande pris – om en tidigare kampanj redan har rabatterat den baseras BOGO-beloppet på det rabatterade priset, inte ordinarie pris.",
          "Vill du att märket ”vara 3 gratis” ska visa hela ordinarie priset, ge den här BOGO-kampanjen det lägsta prioritetsnumret så att den räknas först. När en rabatt på hela varukorgen körs först blir den gratis varans visade avdrag mindre än ordinarie pris – det är en egenskap hos beräkningsordningen som vi har testat grundligt, inte ett fel. Båda ordningarna ger nästan samma totalsumma; det som ändras är var rabatten syns."
        ]
      },
      {
        "type": "p",
        "text": "Tips: lägg ditt huvuderbjudande först i prioritetsordningen så att rabattspecifikationen på kvittot stämmer med ditt marknadsföringsbudskap."
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
    "question": "Hur ställer jag in extrapoäng och poängmultiplikatorer?",
    "keywords": [
      "poängmultiplikator",
      "dubbla poäng",
      "extrapoäng",
      "guide",
      "instruktion"
    ],
    "content": [
      {
        "type": "p",
        "text": "Skapa en kampanj av typen poängmultiplikator och ange multiplikatorn (ett heltal, 2 eller högre). Du kan också lägga till en beloppsgräns (t.ex. handla för 500 kr → dubbla poäng) och ett schema (t.ex. bara lördagar)."
      },
      {
        "type": "list",
        "items": [
          "När flera multiplikatorer uppfylls samtidigt gäller bara den högsta – de multipliceras eller staplas aldrig.",
          "Beloppsgränsen kontrolleras efter att poäng har lösts in: om inlösen sänker totalen under gränsen utlöses inte multiplikatorn den här gången.",
          "En medlem måste vara vald i kassan för att poäng ska tjänas in – ordrar utan medlem ger inga poäng, så multiplikatorn har inget att multiplicera."
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
    "question": "Hur ställer jag in erbjudanden för medlemsnivåer och födelsedagar?",
    "keywords": [
      "medlemsnivå",
      "födelsedag",
      "födelsedagserbjudande",
      "vip",
      "guide",
      "instruktion"
    ],
    "content": [
      {
        "type": "p",
        "text": "Skapa först nivåer under Inställningar → Medlemsnivåer (t.ex. Guld) och rikta sedan kampanjen mot den nivån. För födelsedagserbjudanden anger du villkoret ”Födelsemånad”."
      },
      {
        "type": "list",
        "items": [
          "Medlemmen måste vara vald i kassan för att erbjudandet ska utlösas – behörigheten bedöms utifrån den medlem som är vald just nu.",
          "Födelsedagsbehörigheten läser medlemmens födelsemånad, så fyll i födelsedagsfältet; medlemmar utan födelsedag behandlas aldrig som födelsedagskunder.",
          "Automatiska nivåuppgraderingar bedöms när betalningen slutförs; om ordern makuleras återställs en uppgradering som den utlöste automatiskt."
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
    "question": "Hur ställer jag in gratisvaror, betalda tillval och paketpriser?",
    "keywords": [
      "gratisvara",
      "present vid köp",
      "betalt tillval",
      "paketpris",
      "köp A få B",
      "guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det finns tre sammansatta erbjudandetyper: gratisvara vid köp (köp A, få B), betalt tillval (lägg till X kr för att få Y) och paketpris (valfria N för X kr). Gratisvaror och betalda tillval väntar på att kassören bekräftar; paketpriser tillämpas automatiskt."
      },
      {
        "type": "p",
        "text": "Gratisvaror och betalda tillval ändrar aldrig varukorgen på egen hand. När villkoren är uppfyllda visas en förslagsbanner på kassaskärmen, och varukorgen ändras först när kassören trycker på knappen i bannern (Välj gratisvara eller Välj tillval) – det är avsiktligt, eftersom gratisvaror rör fysiskt lager: någon måste bekräfta att varan finns och att kunden vill ha den."
      },
      {
        "type": "list",
        "items": [
          "Efter Avböj visas samma förslag inte igen för den här varukorgen; en ny eller tömd varukorg ger förslaget igen.",
          "Om ett nytt förslag dyker upp före betalningen måste det accepteras eller avböjas innan ordern kan skickas in.",
          "Rader med gratisvaror och tillval kan inte rabatteras ytterligare av andra penningkampanjer och räknas inte mot andra kampanjers gränser."
        ]
      },
      {
        "type": "p",
        "text": "Paketpriser (tillämpas automatiskt sedan v2.4): så snart varukorgen kan bilda en paketprisgrupp grupperar DingPOS varorna och tar med den i totalen – utan fråga, och gruppen kan inte delas."
      },
      {
        "type": "list",
        "items": [
          "En paketprisgrupp bildas bara när den gör varukorgen billigare. Bland varor med samma pris grupperas orabatterade först, och varor som redan har rabatt behåller sin rabatt.",
          "Vilka varor som grupperas i en paketprisgrupp beror bara på vad som finns i varukorgen, aldrig på i vilken ordning de skannades.",
          "Varje ingående vara visar sin andel av paketprisrabatten, och varje rads belopp är efter rabatter.",
          "Vid betalning grupperas varorna på nytt till paketpris med de senaste priserna; om resultatet ändras ombeds du bekräfta den nya totalen."
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
    "question": "Hur ställer jag in schema och happy hour för en kampanj?",
    "keywords": [
      "schema",
      "happy hour",
      "veckodag",
      "midnatt",
      "guide",
      "instruktion"
    ],
    "content": [
      {
        "type": "p",
        "text": "Varje kampanjs schema har tre lager: ett datumintervall (start krävs, slut är valfritt), ett dagligt tidsfönster (happy hour) och valda veckodagar. Alla tre måste stämma för att kampanjen ska utlösas."
      },
      {
        "type": "list",
        "items": [
          "För tidsfönster som passerar midnatt (t.ex. 22:00–02:00) bedöms veckodagen utifrån den dag fönstret börjar: om bara fredag är vald räknas lördag 01:30 fortfarande som fredagens pass och kampanjen utlöses – men lördag 23:30 gör det inte.",
          "Slutdatumet är en hård gräns – även om ett happy hour-fönster fortfarande pågår upphör kampanjen i samma stund som slutdatumet passerat.",
          "Tiden läses från iPadens klocka, så se till att enhetens tidszon och tid är rätt."
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
    "question": "Så fungerar prioritet, kombinering och stoppa efterföljande kampanjer",
    "keywords": [
      "prioritet",
      "kombinera kampanjer",
      "stoppa efterföljande",
      "krock",
      "guide"
    ],
    "content": [
      {
        "type": "p",
        "text": "När flera kampanjer uppfylls samtidigt styr tre inställningar ordning och samspel:"
      },
      {
        "type": "list",
        "items": [
          "Prioritet: lägre nummer räknas först. Dra för att ändra ordning i kampanjlistan.",
          "Kan kombineras med andra kampanjer (på som standard): när det är av låser en kampanj på radnivå bara de rader den rabatterade – andra varor kan fortfarande få senare kampanjer på radnivå; en kampanj på varukorgsnivå som inte kan kombineras blockerar alla senare kampanjer på varukorgsnivå.",
          "Stoppa efterföljande kampanjer när denna tillämpas: när kampanjen har tillämpats beräknas inga fler penningrabatter – men poängmultiplikatorer och gratisvaruförslag påverkas inte."
        ]
      },
      {
        "type": "note",
        "text": "Senare kampanjer räknas på det redan rabatterade beloppet: 10 % rabatt plus 5 % rabatt blir inte 15 % rabatt – den andra rabatten tillämpas på totalen efter den första. DingPOS letar heller aldrig efter den bästa kombinationen för kunden; ordningen bestäms helt av dina prioriteter."
      },
      {
        "type": "p",
        "text": "Bra att veta: om en rabatt avrundas till noll räknas tillämpningen inte – och förbrukar inte heller någon användningsgräns."
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
    "question": "Kommer DingPOS att kunna ta emot kortbetalningar direkt i appen?",
    "keywords": [
      "betalning",
      "kortbetalning",
      "kortterminal",
      "integration",
      "betalningsleverantör"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS hanterar för närvarande inte själva pengaflödet – betalsätten är etiketter för bokföringen, och själva betalningarna går via din befintliga kortterminal eller betalapp."
      },
      {
        "type": "p",
        "text": "Om vi integrerar betalningar beror på det faktiska intresset från användarna. Behöver du det, skriv till oss och berätta vilken tjänst du vill koppla in (vilken leverantör, vilken terminal) och hur du skulle använda den – vi prioriterar utvecklingen efter antalet förfrågningar."
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
    "question": "Kommer DingPOS att stödja e-fakturor och kvittoutskrift?",
    "keywords": [
      "e-faktura",
      "faktura",
      "kvitto",
      "kvittoskrivare",
      "skrivare",
      "kassaregister"
    ],
    "content": [
      {
        "type": "p",
        "text": "Inte ännu. Elektroniska fakturor och kvittoutskrift kräver att vi köper fakturamaskiner och kvittoskrivare för att testa och utveckla mot, vilket är en stor kostnad. Som litet team planerar vi det när användarbasen har vuxit och intäkterna är stabila."
      },
      {
        "type": "p",
        "text": "Behöver du det, skriv till oss och berätta vilken maskinmodell du använder – vi prioriterar utvecklingen efter antalet förfrågningar."
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
    "question": "Går det att använda en streckkodsläsare med DingPOS?",
    "keywords": [
      "streckkodsläsare",
      "skanner",
      "handskanner",
      "bluetooth",
      "usb",
      "hårdvara"
    ],
    "content": [
      {
        "type": "p",
        "text": "Streckkodsskanning med Kamera när du lägger upp produkter stöds redan. Fysiska läsare (USB / Bluetooth) stöds inte officiellt ännu – precis som andra hårdvarufunktioner kräver de att vi köper enheter för test och utveckling, och de planeras när användarbasen växer."
      },
      {
        "type": "note",
        "text": "Sökfältet i kassan matchar streckkoder, så en läsare i tangentbordsläge skulle i teorin kunna skriva in i det och hämta fram produkter – men vi har inte verifierat det på riktig hårdvara, så det stöds inte officiellt. Har du testat en läsare som fungerar, berätta gärna vilken modell!"
      },
      {
        "type": "p",
        "text": "Behöver du det, skriv till oss – vi prioriterar utvecklingen efter antalet förfrågningar."
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
    "question": "Finns det en månadsrapport för avstämning och månadsavslut?",
    "keywords": [
      "månadsavstämning",
      "avstämning",
      "månadsavslut",
      "månadsrapport",
      "leverantörsskulder",
      "kundfordringar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Det finns ännu ingen särskild rapport för månadsavstämning, men allt du behöver för att stämma av finns redan i appen:"
      },
      {
        "type": "list",
        "items": [
          "Ställ in Statistik på Denna månad för månadens intäkter, mottagna betalningar, vinst och fördelning per betalsätt.",
          "Leverantörsinköp med månadsvillkor samlas under Att betala i Inköp, där en hel månad kan regleras på en gång.",
          "Kundernas försäljning på räkning samlas under Ordrar → Kundfordringar, där en hel månad kan regleras på en gång."
        ]
      },
      {
        "type": "p",
        "text": "Behöver du en månadsrapport för reglering som du kan exportera eller skriva ut, skriv till oss och berätta vilka fält du behöver – vi prioriterar utvecklingen efter antalet förfrågningar."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
