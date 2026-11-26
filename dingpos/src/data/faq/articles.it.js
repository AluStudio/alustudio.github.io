// Generated from en and the it translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync it`, then `npm run l10n -- dingpos apply it`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Per iniziare",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Cassa",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Ordini e resi",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Prodotti, magazzino e acquisti",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Report",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Promozioni e fedeltà",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Backup e dati",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Collaboratori e permessi",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Abbonamento e fatturazione",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Guide alla configurazione delle promozioni",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "In arrivo",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Come configuro il mio negozio in DingPOS?",
    "keywords": [
      "configurazione",
      "iniziare",
      "primo avvio",
      "prima configurazione",
      "procedura guidata",
      "aprire il negozio",
      "app per punto cassa",
      "paese",
      "valuta",
      "imposte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alla prima apertura di DingPOS, una procedura guidata ti accompagna nell'apertura del negozio in due passaggi e in pochi minuti:"
      },
      {
        "type": "steps",
        "items": [
          "Scegli il tuo paese o la tua regione. In cima all'elenco trovi il paese o la regione in cui si trova questo iPad e i mercati più comuni; sotto ci sono tutti i 175 paesi e regioni in cui DingPOS è sull'App Store, ricercabili per nome nella lingua dell'app o in inglese. La tua scelta compila in automatico valuta, imposte e modalità imposte.",
          "Nel passaggio Il tuo negozio, inserisci il nome del negozio, se vuoi carica un logo e controlla valuta, imposte e modalità imposte (inclusa / esclusa). La valuta è quella del tuo paese; toccala per sceglierne una tra 130 valute. L'elenco delle imposte contiene quelle predefinite del tuo paese: puoi rinominarle, cambiare un'aliquota, eliminarne una o toccare Aggiungi imposta per un'altra riga. Un negozio nella British Columbia, ad esempio, cambia la prima riga in «GST 5» e aggiunge una riga «PST 7»."
        ]
      },
      {
        "type": "p",
        "text": "Tocca Continua e vedrai «Ding! Il tuo negozio è pronto.» DingPOS crea anche due metodi di pagamento, Contanti e Carta di credito. Poi aggiungi i tuoi prodotti in Prodotti e inizia a registrare le vendite."
      },
      {
        "type": "note",
        "text": "La valuta non si può cambiare dopo la configurazione; imposte e modalità imposte si possono modificare in seguito in Impostazioni → Info negozio. Negli Stati Uniti, in Canada, in Brasile e in Micronesia l'aliquota dipende dallo stato, dalla provincia o dalla città: il campo dell'aliquota parte vuoto e, per continuare, inserisci l'aliquota che applichi. Un'aliquota deve essere superiore a 0: un negozio che non applica imposte elimina la riga. In Germania, Francia, Italia e in altri paesi europei l'elenco comprende anche le aliquote ridotte più comuni nel commercio al dettaglio locale, con il nome locale dell'imposta, ad esempio «MwSt. 19%» e «MwSt. 7%» in Germania; le aliquote ridotte non vengono applicate di default ai nuovi prodotti, quindi attivale prodotto per prodotto. L'elenco di 175 paesi e la scelta della valuta sono arrivati con la v3.2; le versioni precedenti offrivano 15 paesi."
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
    "question": "DingPOS funziona senza internet?",
    "keywords": [
      "offline",
      "senza internet",
      "wifi",
      "rete",
      "senza connessione",
      "mercatino"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. DingPOS funziona anche offline: cassa, gestione dei prodotti, magazzino e report girano in locale sul tuo iPad, senza bisogno di rete. Mercatini serali, pop-up store e altri luoghi senza Wi-Fi non sono un problema."
      },
      {
        "type": "p",
        "text": "Solo due cose richiedono la connessione: il backup nel cloud (il caricamento sul tuo iCloud / Google Drive / Dropbox) e la verifica dello stato dell'abbonamento."
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
    "question": "Devo creare un account per usare DingPOS?",
    "keywords": [
      "account",
      "registrazione",
      "accesso",
      "iscrizione",
      "privacy"
    ],
    "content": [
      {
        "type": "p",
        "text": "No. DingPOS non ha un sistema di account: scarica l'app e inizia a vendere. Prodotti, ordini e dati dei clienti restano tutti sul tuo iPad. Ci arrivano solo se invii una segnalazione all'assistenza da Impostazioni, che allega una copia dei dati del tuo negozio così da poter riprodurre il problema."
      },
      {
        "type": "p",
        "text": "Quando attivi il backup nel cloud, accedi al tuo account cloud personale (iCloud, Google Drive o Dropbox). I backup restano nel tuo account e noi non possiamo accedervi."
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
    "question": "Su quali dispositivi funziona DingPOS?",
    "keywords": [
      "dispositivi",
      "iphone",
      "mac",
      "ipad",
      "requisiti",
      "versione"
    ],
    "content": [
      {
        "type": "p",
        "text": "Al momento DingPOS funziona su iPad con iPadOS 17.4 o versioni successive ed è pensato soprattutto per l'uso in orizzontale."
      },
      {
        "type": "p",
        "text": "iPhone e Mac non sono ancora supportati. Se vuoi che supportiamo un altro dispositivo, scrivici e raccontaci come lo useresti."
      },
      {
        "type": "note",
        "text": "Ogni iPad che supporta iPadOS 17 può passare alla 17.4, quindi nessun modello resta escluso. Un iPad ancora fermo a iPadOS 17.0–17.3 richiede prima un aggiornamento di sistema, in Impostazioni → Generali → Aggiornamento software, per poter installare DingPOS v3.5 o versioni successive."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Posso cambiare valuta, aliquota o modalità imposte dopo la configurazione?",
    "keywords": [
      "valuta",
      "modalità imposte",
      "cambiare",
      "bloccata",
      "aliquota",
      "imposte",
      "imposta inclusa",
      "imposta esclusa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le imposte si possono cambiare; la valuta no. Imposte e modalità imposte si modificano entrambe nella scheda Imposta in Impostazioni → Info negozio, e la modifica vale solo per le vendite successive: ordini, resi e report passati mantengono gli importi e la modalità imposte con cui sono stati registrati."
      },
      {
        "type": "list",
        "items": [
          "Imposte: aggiungine una, rinominala, cambia la sua aliquota o eliminala — vedi «Come viene calcolata l'IVA?»",
          "Modalità imposte (inclusa / esclusa): tocca l'altra modalità e la conferma mostra un esempio con la tua prima imposta, come «un articolo da NT$100 con imposta al 5%: il cliente paga NT$105». I prezzi mantengono i loro numeri e un carrello aperto viene ricalcolato nella nuova modalità quando torni in cassa. La modalità si può cambiare dalla v3.5; le versioni precedenti la bloccano alla configurazione.",
          "Dopo il cambio, un reso completo rimborsa comunque l'ordine originale così com'era. Un cambio (con articoli sostitutivi) su un ordine venduto con l'altra modalità è bloccato: rimetti la modalità precedente, oppure rendi gli articoli e registrali di nuovo."
        ]
      },
      {
        "type": "p",
        "text": "La valuta è bloccata al termine della configurazione. Ogni ordine passato è stato registrato in quella valuta, quindi cambiarla a metà strada falserebbe i report. Controllala nel passaggio Il tuo negozio della configurazione: per impostazione predefinita è la valuta del tuo paese e puoi toccarla per sceglierne un'altra."
      },
      {
        "type": "note",
        "text": "Se hai appena aperto il negozio e non hai ancora dati importanti, puoi eliminare e reinstallare l'app per rifare la configurazione. Prima di eliminarla, assicurati di non avere nulla da conservare."
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
    "question": "Come cambio la lingua dell'app?",
    "keywords": [
      "lingua",
      "inglese",
      "cinese",
      "giapponese",
      "spagnolo",
      "multilingue",
      "cambiare lingua",
      "impostazioni lingua"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS è disponibile in 32 lingue, tra cui inglese, cinese tradizionale e semplificato, giapponese, coreano, thailandese, vietnamita, indonesiano, malese, spagnolo (America Latina), portoghese (Brasile), francese e tedesco. Vai in Impostazioni → Preferenze del dispositivo e tocca Lingua dell'app: si apre la pagina di DingPOS nell'app Impostazioni dell'iPad, dove scegli la lingua sotto Lingua."
      },
      {
        "type": "p",
        "text": "iOS non permette alle app di aprire direttamente l'elenco delle lingue, quindi l'ultimo passaggio si fa nelle Impostazioni di sistema. La lingua vale solo per questo iPad."
      },
      {
        "type": "note",
        "text": "Le lingue diverse da inglese e cinese tradizionale sono arrivate con la v3.2. Se sotto Lingua compaiono solo inglese e cinese, aggiorna DingPOS dall'App Store."
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
    "question": "Come servo più clienti contemporaneamente?",
    "keywords": [
      "carrelli",
      "più clienti",
      "mettere in attesa",
      "cambiare carrello",
      "in parallelo",
      "coda"
    ],
    "content": [
      {
        "type": "p",
        "text": "La schermata cassa gestisce dieci carrelli nello stesso momento. Tocca «+» sulla barra dei carrelli per aggiungerne uno e tocca una scheda numerata per passare da un carrello all'altro."
      },
      {
        "type": "p",
        "text": "Ogni carrello viene calcolato in modo indipendente. Mentre il cliente A sta ancora scegliendo, passa a un altro carrello e fai pagare prima il cliente B. Quando il pagamento è completato, il carrello viene rimosso in automatico."
      },
      {
        "type": "note",
        "text": "I carrelli esistono solo in memoria: quelli per cui non hai ancora concluso il pagamento vengono svuotati quando chiudi completamente l'app."
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
    "question": "Come applico uno sconto?",
    "keywords": [
      "sconto",
      "percentuale",
      "importo fisso",
      "ribasso",
      "prezzo scontato"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gli sconti funzionano su due livelli, e ciascuno accetta un importo fisso o una percentuale:"
      },
      {
        "type": "list",
        "items": [
          "Sconto sugli articoli: tocca un articolo nel carrello → scegli «Sconto» → inserisci un importo o una percentuale.",
          "Sconto sul carrello: tocca il pulsante «Sconto» sotto il carrello."
        ]
      },
      {
        "type": "p",
        "text": "Ogni articolo e ogni carrello possono avere un solo sconto alla volta: applicarne un altro sostituisce il precedente, e toccando il badge dello sconto lo rimuovi. Gli sconti si applicano prima dell'imposta, come da prassi nel commercio al dettaglio."
      },
      {
        "type": "p",
        "text": "Gli sconti che dai spesso si possono salvare: vai in Impostazioni → Fedeltà e promozioni → Sconti predefiniti e tocca Aggiungi sconto predefinito, ad esempio «Prezzo collaboratori −20%». Alla cassa, sia lo sconto sugli articoli sia lo sconto sul carrello hanno un menu Predefiniti: scegliendone uno, tipo e valore dello sconto si compilano esattamente come se li avessi digitati, quindi conta comunque ai fini dello sconto massimo di un collaboratore. Gli sconti predefiniti sono arrivati con la v3.6 e richiedono il piano Standard o superiore."
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
    "question": "Come viene calcolata l'IVA?",
    "keywords": [
      "imposta",
      "IVA",
      "tasse",
      "aliquota",
      "imposta inclusa",
      "imposta esclusa",
      "più imposte",
      "GST",
      "PST",
      "sospendere l'imposta",
      "scontrino"
    ],
    "content": [
      {
        "type": "p",
        "text": "L'imposta viene calcolata in automatico in base alle imposte e alla modalità imposta definite in Impostazioni → Info negozio. Le modalità sono due e in entrambe lo scontrino riporta l'importo dell'imposta:"
      },
      {
        "type": "list",
        "items": [
          "Imposta inclusa: i prezzi contengono già l'imposta, quindi il totale non cambia e lo scontrino evidenzia l'imposta compresa (diffusa a Taiwan, in Giappone e altrove).",
          "Imposta esclusa: l'imposta viene aggiunta all'importo dopo gli sconti al momento del pagamento (diffusa negli Stati Uniti, in Canada e altrove)."
        ]
      },
      {
        "type": "p",
        "text": "Un negozio può applicare più imposte, come GST 5% più PST 7% nella Columbia Britannica, oppure l'imposta sui consumi del 10% del Giappone insieme all'aliquota ridotta dell'8%:"
      },
      {
        "type": "list",
        "items": [
          "Nella scheda Imposta, tocca Aggiungi imposta e inserisci un nome e un'aliquota. Attiva Applica ai nuovi prodotti e i prodotti che aggiungerai in seguito avranno questa imposta in modo predefinito. Se il negozio ha già un'imposta predefinita, quella appena aggiunta parte con l'interruttore disattivato: attivalo quando vanno applicate entrambe.",
          "Ogni prodotto sceglie le imposte che applica sotto Imposte applicate nel modulo del prodotto: un bento potrebbe applicare solo l'aliquota ridotta dell'8%. Con due o più imposte attive, il modulo mostra l'aliquota complessiva del prodotto.",
          "Tocca un'imposta per rinominarla, cambiarne l'aliquota oppure usare Applica a tutti i prodotti o Rimuovi da tutti i prodotti per aggiungerla o toglierla a tutti i prodotti in una volta. Prima di eliminare un'imposta, l'app ti dice a quanti prodotti smetterà di essere applicata.",
          "In un negozio con imposta esclusa, i totali del carrello mostrano una riga per ogni imposta, e il dettaglio dell'ordine elenca una riga per ogni imposta con la sua aliquota e l'importo su cui è stata applicata."
        ]
      },
      {
        "type": "p",
        "text": "Per non applicare l'imposta per un po', disattiva Applica imposta in cima alla scheda Imposta: ogni vendita successiva è senza imposta, compresi gli articoli già nel carrello. Ogni prodotto mantiene le sue imposte e, riattivando l'interruttore, tornano com'erano."
      },
      {
        "type": "p",
        "text": "Ordine completo del calcolo: sconti sugli articoli e promozioni → sconto sul carrello → utilizzo dei punti → imposta. Gli importi vengono arrotondati al numero di decimali previsto per la valuta, con le frazioni esattamente a metà arrotondate per eccesso (ad es. 0 per TWD, 2 per USD). L'imposta viene calcolata una sola volta per ciascuna imposta su ogni ordine e i suoi decimali seguono Arrotondamento dell'imposta nella scheda Imposta: Arrotonda al più vicino, Arrotonda per difetto o Arrotonda per eccesso. I nuovi negozi in Giappone partono con Arrotonda per difetto; tutti gli altri partono con Arrotonda al più vicino."
      },
      {
        "type": "note",
        "text": "Le imposte con nome sono arrivate con la v3.5. Quando aggiorni, la tua aliquota diventa un'imposta con nome (ad esempio «GST 10%» in Australia) e viene applicata a ogni prodotto esistente; un negozio con aliquota 0 non avrà alcuna imposta. Gli ordini passati e i resi mantengono le aliquote e gli importi con cui sono stati registrati; i report ora contano i ricavi al netto dell'imposta, anche per i periodi passati (vedi «Che differenza c'è tra Ricavi e Incassato?»)."
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
    "question": "Quali metodi di pagamento sono supportati?",
    "keywords": [
      "pagamento",
      "contanti",
      "carta di credito",
      "Line Pay",
      "resto",
      "personalizzato",
      "a credito",
      "commissioni"
    ],
    "content": [
      {
        "type": "p",
        "text": "Un nuovo negozio parte con due metodi di pagamento, Contanti e Carta di credito, con i nomi nella lingua dell'app durante la configurazione. In Impostazioni → Metodi di pagamento puoi aggiungere qualsiasi altro metodo (ad es. Apple Pay, LINE Pay, un portafoglio digitale locale) e cambiare l'ordine dei metodi. Tocca un metodo per rinominarlo, ad esempio da Carta di credito a «Carta (Square)»: Report conta con il nuovo nome anche le vendite fatte prima della ridenominazione (dalla v3.6). Elimina metodo di pagamento si trova in fondo alla schermata di modifica e chiede conferma prima di eliminare; gli ordini passati mantengono il metodo con cui sono stati pagati e l'ultimo metodo rimasto non può essere eliminato."
      },
      {
        "type": "p",
        "text": "I metodi di pagamento sono etichette per la contabilità: DingPOS non elabora pagamenti reali. Incassa carte o pagamenti da mobile con il tuo POS o la tua app abituale, poi scegli l'etichetta corrispondente in DingPOS per registrarlo. Con i contanti il resto viene calcolato in automatico e, dove le monete più piccole non sono più in uso, anche i contanti possono essere arrotondati: vedi «Posso arrotondare i pagamenti in contanti alle monete in uso?»"
      },
      {
        "type": "p",
        "text": "Se il fornitore del tuo pagamento con carta o da mobile trattiene una commissione, assegna una tariffa al metodo e Report stima le commissioni e l'incassato netto di ogni metodo: vedi «DingPOS può tenere traccia delle commissioni su carte e pagamenti da mobile?»"
      },
      {
        "type": "p",
        "text": "Per un cliente abituale che ritira la merce ora e paga più tardi, scegli A credito: la vendita viene registrata come credito da incassare e saldata quando arrivano i soldi. Vedi «I clienti abituali possono comprare a credito e pagare dopo?»"
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
    "question": "DingPOS può tenere traccia delle commissioni su carte e pagamenti da mobile?",
    "keywords": [
      "commissione",
      "commissioni carta",
      "commissioni di pagamento",
      "tariffa della commissione",
      "incassato netto",
      "costi POS",
      "Line Pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. In Impostazioni → Metodi di pagamento tocca un metodo di pagamento (o aggiungine uno nuovo) e compila Commissione: una percentuale, un importo fisso per operazione, oppure entrambi. I metodi di tipo contanti non hanno commissione. Da quel momento ogni pagamento incassato con quel metodo registra una commissione stimata con la tariffa in vigore in quel momento."
      },
      {
        "type": "p",
        "text": "In Report, la scheda Metodi di pagamento aggiunge una riga «Commissione · Netto» sotto ogni metodo con una commissione, e in fondo alla scheda compaiono commissioni stimate e incassato netto stimato dell'intero periodo."
      },
      {
        "type": "list",
        "items": [
          "Inserisci la tariffa che il fornitore trattiene davvero. Se sulla commissione si applica un'imposta, includila: per il 3% più il 5% di imposta, inserisci 3,15%. Lascia vuoti entrambi i campi se non c'è commissione.",
          "Una modifica della tariffa vale solo per i pagamenti successivi; le commissioni già registrate restano come sono.",
          "«Percentuale della commissione restituita sui rimborsi» parte attiva per i negozi a Taiwan e in Giappone e disattivata altrove, perché fornitori come Stripe, Square e PayPal trattengono la commissione in caso di rimborso: impostala in base al tuo fornitore. Riguarda i resi e gli acconti dei preordini rimborsati: se è attiva, la percentuale viene restituita; la parte fissa mai. Uno Storno o un Annullamento del saldo ignorano l'interruttore e stornano l'intera commissione registrata, parte fissa inclusa. In ogni caso il cliente riceve lo stesso importo.",
          "I pagamenti incassati prima che il metodo avesse una tariffa non hanno commissione: Report li segnala con «N senza tariffa» e mostra il netto come «—»."
        ]
      },
      {
        "type": "note",
        "text": "Le commissioni sono stime basate sulla tariffa che inserisci; l'importo effettivo è quello dell'estratto conto del tuo fornitore. Per modificare le tariffe serve il piano Standard o superiore e con Lite i campi sono bloccati. Dalla v3.4 ogni piano vede in Report e in Utile le commissioni registrate, quindi una tariffa impostata durante la prova continua a stimare le commissioni anche con Lite; le versioni precedenti mostravano le commissioni solo con Standard o superiore."
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
    "question": "Posso arrotondare i pagamenti in contanti alle monete in uso?",
    "keywords": [
      "arrotondamento contanti",
      "arrotondamento",
      "arrotondare per eccesso",
      "arrotondare per difetto",
      "monete",
      "centesimi",
      "0,05",
      "resto",
      "Canada",
      "Australia",
      "Svizzera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Canada, Australia, Nuova Zelanda, Svizzera, Danimarca, Svezia, Norvegia, Belgio, Finlandia e Ungheria non usano più le monete di taglio più piccolo, quindi DingPOS arrotonda i contanti a un importo che si può davvero consegnare: un ordine da C$12,99 pagato in contanti viene incassato come C$13,00 e il resto si calcola su C$13,00. I pagamenti con carta e gli altri pagamenti non in contanti restano esatti."
      },
      {
        "type": "p",
        "text": "Un nuovo negozio configurato in uno di questi paesi, con la valuta di quel paese, ha l'arrotondamento già attivo. Qualsiasi altro negozio può attivarlo dalla scheda Arrotondamento contanti in fondo a Impostazioni → Metodi di pagamento: scegli a quale importo arrotondare i contanti (Nessun arrotondamento, oppure 0,05, 0,10, 0,50 o 1,00 in una valuta con centesimi; 5, 10, 50 o 100 in una senza, come TWD o JPY) e, per un multiplo che può cadere esattamente a metà, se arrotondare per eccesso o per difetto. Una modifica vale solo per i pagamenti successivi."
      },
      {
        "type": "list",
        "items": [
          "Alla cassa compare «Contanti incassati C$13,00». Se il cliente chiede di pagare l'importo esatto, tocca Incassa l'importo esatto sotto i metodi di pagamento: vale solo per quella vendita.",
          "Il totale dell'ordine, l'imposta, i ricavi, i punti e la spesa del cliente non cambiano; la differenza di arrotondamento resta sul pagamento, e la schermata dello scontrino e il dettaglio dell'ordine la mostrano sotto il totale, ad esempio «Arrotondamento contanti +C$0,01».",
          "Vengono arrotondati anche i rimborsi in contanti sui resi, gli acconti in contanti e i saldi al ritiro dei preordini, i conguagli pagati nei cambi e le vendite a credito saldate in contanti; saldando più vendite insieme, l'arrotondamento si applica una sola volta al totale.",
          "Gli storni, gli acconti rimborsati dei preordini e gli annullamenti del saldo restituiscono esattamente quanto era stato registrato, senza arrotondare di nuovo.",
          "Incassato in Report mostra quanta parte è dovuta all'arrotondamento dei contanti, e nel Conto economico compare una riga Arrotondamento contanti che entra nell'utile netto. L'arrotondamento non è mai un ricavo."
        ]
      },
      {
        "type": "note",
        "text": "La Svizzera arrotonda sempre per difetto, secondo le sue regole sull'indicazione dei prezzi: CHF 12,98 viene incassato come CHF 12,95, e non c'è la scelta per il caso a metà. Il Belgio arrotonda solo i totali superiori a 0,05 €. L'arrotondamento dei contanti è disponibile in ogni piano e un negozio esistente incassa i contanti esattamente come prima finché non lo attivi."
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
    "question": "Posso disattivare il «Ding» dopo il pagamento?",
    "keywords": [
      "suono",
      "ding",
      "silenzioso",
      "disattivare audio",
      "suono della cassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Vai in Impostazioni → Preferenze del dispositivo e disattiva Suono della cassa. Dalla vendita successiva la schermata di conferma resta silenziosa, mentre la vibrazione al tocco rimane."
      },
      {
        "type": "p",
        "text": "L'opzione vale solo per questo iPad e il ripristino di un backup nel cloud non la modifica."
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
    "question": "La schermata di cassa può nascondere i prodotti esauriti?",
    "keywords": [
      "nascondere",
      "esaurito",
      "prodotti esauriti",
      "giacenza zero",
      "cassiere",
      "prodotto sparito",
      "non trovo il prodotto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Vai in Impostazioni → Preferenze del dispositivo e attiva Nascondi i prodotti esauriti (disattivato di default). La griglia prodotti della cassa, il filtro per categoria e la ricerca (per nome e codice a barre) saltano allora ogni prodotto con giacenza pari o inferiore a 0. L'opzione ha effetto subito, senza riaprire l'app."
      },
      {
        "type": "list",
        "items": [
          "I prodotti che non tengono traccia della giacenza compaiono sempre. Un prodotto con varianti viene nascosto solo quando tutte le varianti sono esaurite.",
          "Riguarda solo la cassa di questo iPad; l'elenco Prodotti mostra comunque tutti i prodotti.",
          "Quando tutti i prodotti sono nascosti, la cassa mostra «Tutti i prodotti sono esauriti» e ti indica dove disattivare l'opzione."
        ]
      },
      {
        "type": "note",
        "text": "Finché l'opzione è attiva, questo iPad non trova i prodotti esauriti, quindi non può venderli in giacenza negativa né registrare un preordine per essi: disattivala quando serve. Se i prodotti sembrano spariti dalla cassa, di solito il motivo è questo."
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
    "question": "Se cambio il prezzo di un prodotto, il carrello si aggiorna?",
    "keywords": [
      "cambio prezzo",
      "modifica prezzo",
      "carrello",
      "ricalcolo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Il carrello mostra il prezzo del momento in cui l'articolo è stato aggiunto. Quando tocchi Vai alla cassa e confermi, DingPOS rilegge il prezzo più recente di ogni articolo: se qualcosa è cambiato, ti avvisa con i prezzi aggiornati prima di proseguire."
      },
      {
        "type": "p",
        "text": "Anche le Promozioni vengono rivalutate da zero alla conferma. Se di conseguenza cambiano il totale, l'imposta o l'importo di uno sconto, compare un riepilogo delle modifiche e devi confermare di nuovo: così l'importo che vedi è esattamente quello registrato."
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
    "question": "Si possono usare insieme sconti manuali e promozioni?",
    "keywords": [
      "sconto manuale",
      "promozione",
      "combinare",
      "cumulare",
      "sostituire"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. La regola è «vince lo sconto manuale, i livelli restano indipendenti»:"
      },
      {
        "type": "list",
        "items": [
          "Sconto manuale sull'articolo: quella riga non riceve più promozioni a livello di articolo, perché il tuo sconto manuale è la decisione finale presa sul momento. L'importo della riga conta comunque per le soglie di spesa.",
          "Sconto manuale sul carrello: viene applicato dopo il calcolo di tutte le promozioni, quindi le due cose coesistono. Se inserisci più del totale rimasto, viene limitato in automatico con un avviso."
        ]
      },
      {
        "type": "p",
        "text": "Rimuovendo uno sconto manuale, la riga torna idonea alle promozioni alla valutazione successiva."
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
    "question": "Come aggiungo o cambio il cliente di una vendita?",
    "keywords": [
      "cliente",
      "cliente fedeltà",
      "associare cliente",
      "cambiare cliente",
      "nuovo cliente",
      "cassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Associa il cliente nel carrello o nella schermata di cassa: la riga Cliente sotto l'importo apre l'elenco clienti quando nessuno è associato, e offre Cambia cliente o Rimuovi cliente quando qualcuno lo è. Il cliente scelto alla cassa è il cliente del carrello e resta nel carrello se annulli la procedura di cassa."
      },
      {
        "type": "list",
        "items": [
          "Cambiare il cliente ricalcola subito gli sconti del livello, le offerte di compleanno e il riscatto dei punti. Il contante o l'acconto che hai già inserito viene mantenuto e ricontrollato rispetto al nuovo totale.",
          "Non lo trovi? Tocca Nuovo cliente in alto a destra nell'elenco clienti, oppure al centro quando nessun risultato corrisponde alla ricerca. Ciò che hai cercato riempie il modulo (le cifre vanno nel telefono, tutto il resto nel nome) e il nuovo cliente viene associato alla vendita.",
          "Se tocchi A credito senza un cliente associato, si apre l'elenco clienti e A credito viene selezionato non appena scegli qualcuno.",
          "Se il nuovo cliente porta uno sconto manuale oltre lo sconto massimo del ruolo dell'operatore, prima serve l'approvazione di un responsabile; se annulli l'approvazione, il cliente resta quello di prima."
        ]
      },
      {
        "type": "note",
        "text": "I clienti fanno parte del piano Standard; con Lite la riga riporta «Clienti — piano Standard» e apre i dettagli per passare a un piano superiore. La riga Cliente alla cassa è arrivata con la v3.4; le versioni precedenti associano il cliente solo nel carrello."
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
    "question": "Ho sbagliato alla cassa: come si storna un ordine?",
    "keywords": [
      "storno",
      "stornare ordine",
      "annullare vendita",
      "errore in cassa",
      "ordine sbagliato"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vai in Ordini, trova l'ordine, apri il dettaglio e tocca Storna. La finestra «Stornare questo ordine?» accetta un motivo facoltativo (fino a 100 caratteri): tocca Storna in alto a destra e hai finito. Il motivo compare nel dettaglio dell'ordine e nel registro attività e, una volta inviato, non si può modificare."
      },
      {
        "type": "p",
        "text": "Lo storno annulla in automatico tutto ciò che è collegato: la giacenza tracciata viene ripristinata, i punti guadagnati con l'ordine vengono tolti e quelli utilizzati vengono restituiti. Gli ordini stornati restano nell'elenco, ben segnalati, e non vengono conteggiati nei ricavi del report."
      },
      {
        "type": "note",
        "text": "Uno storno significa «questa vendita non è mai avvenuta»: usalo per un ordine battuto male sul momento. Quando invece un cliente riporta la merce più tardi, usa Reso: l'ordine originale resta, puoi rendere solo alcuni articoli e i ricavi si riducono nel giorno del reso."
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
    "question": "Come gestisco un reso o un cambio?",
    "keywords": [
      "reso",
      "cambio",
      "rimborso",
      "reso parziale",
      "cambio taglia",
      "scarto",
      "motivo del reso"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vai in Ordini, apri l'ordine originale e tocca Reso. Scegli quanti pezzi di ciascun articolo tornano indietro. Per un cambio, tocca Aggiungi articolo sostitutivo nella stessa schermata: la differenza viene saldata in un colpo solo. Se è positiva paga il cliente, se è negativa rimborsi tu, se è zero non si scambia denaro."
      },
      {
        "type": "list",
        "items": [
          "L'ordine originale non viene mai modificato. Il reso crea un documento a sé, con la data di oggi e un numero con prefisso R, e i ricavi si riducono nel giorno del reso.",
          "Il rimborso è quanto il cliente ha effettivamente pagato per quell'articolo: sconti sull'articolo, sconti sul carrello e utilizzo dei punti sono già ripartiti, quindi non si rimborsa a prezzo di listino. L'imposta usa l'aliquota applicata all'ordine originale.",
          "Gli articoli sostitutivi si addebitano al prezzo di oggi, senza promozioni né sconti.",
          "Per un prodotto con giacenza tracciata, ogni riga resa può tornare in giacenza (Riponi, l'opzione predefinita) oppure essere buttata (Scarta, dalla v3.5). Riponi aggiunge di nuovo la giacenza. Scarta lascia la giacenza com'era e porta il costo che l'articolo aveva al momento della vendita nelle Perdite di magazzino del mese, nella scheda Utile. Rimborso, imposta e punti sono gli stessi in entrambi i casi.",
          "I punti guadagnati con l'ordine originale vengono tolti, quelli utilizzati vengono restituiti e gli articoli sostitutivi maturano i propri punti.",
          "Se l'ordine originale è una vendita a credito non ancora saldata, non si scambia denaro: il reso viene dedotto dai crediti da clienti e un articolo sostitutivo più caro aggiunge loro la differenza.",
          "Un ordine può essere reso in più riprese, ma mai oltre la quantità venduta in origine; quando tutto è rientrato, imposta, sconti e punti restituiti sommano esattamente quelli dell'ordine originale. I limiti di utilizzo delle promozioni non vengono ripristinati da un reso."
        ]
      },
      {
        "type": "p",
        "text": "Il campo Motivo è facoltativo, fino a 100 caratteri. Compare nel dettaglio dell'ordine e nel registro attività e, una volta inviato, non si può modificare."
      },
      {
        "type": "note",
        "text": "Non c'è un limite di tempo per i resi, ma serve l'ordine originale. Se hai registrato un reso per errore, storna il reso e la quantità rendibile torna disponibile."
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
    "question": "Come registro un preordine con acconto?",
    "keywords": [
      "preordine",
      "acconto",
      "ritiro",
      "saldo",
      "prenotare merce",
      "caparra"
    ],
    "content": [
      {
        "type": "p",
        "text": "In cassa, cambia in alto la schermata da Vendita a Preordine, scegli la data di ritiro, inserisci l'acconto (da 0 fino all'importo totale, con le scorciatoie 30% / 50% / totale) e indica come viene pagato. Associa un cliente, così potrai contattarlo per il ritiro."
      },
      {
        "type": "list",
        "items": [
          "La giacenza viene scaricata quando si registra il preordine, così il numero vendibile lo riflette subito. È un segnale, non un blocco: una vendita successiva può comunque prendere l'ultimo pezzo. Gli articoli esauriti vanno in negativo e si riallineano quando ricevi un ordine d'acquisto.",
          "Quando il cliente ritira, tocca Completa ritiro nel dettaglio dell'ordine per incassare il saldo. L'ordine diventa una normale vendita completata e gli eventuali resi seguono la procedura di reso abituale.",
          "Se il cliente non si presenta, tocca Annulla ordine nel dettaglio dell'ordine e scegli se rimborsare o trattenere l'acconto. La giacenza viene ripristinata.",
          "Lo scontrino dell'acconto e quello del ritiro finale hanno lo stesso numero."
        ]
      },
      {
        "type": "p",
        "text": "In Report, i ricavi di un preordine vengono riconosciuti per intero nel giorno del ritiro, mentre l'acconto conta nell'Incassato del giorno in cui viene pagato: per un po' i due numeri differiscono. Vedi «Qual è la differenza tra Ricavi e Incassato?»"
      },
      {
        "type": "note",
        "text": "Gli articoli di un preordine non si possono modificare; se il cliente cambia idea, annulla e registra un nuovo preordine. Per creare preordini serve il piano Standard o superiore. Dopo un passaggio a un piano inferiore, i preordini esistenti si possono comunque ritirare o annullare."
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
    "question": "I clienti abituali possono comprare a credito e pagare dopo?",
    "keywords": [
      "a credito",
      "pagare dopo",
      "conto cliente",
      "crediti da clienti",
      "saldo",
      "vendita a credito"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Scegli A credito come metodo di pagamento e la vendita viene registrata come debito del cliente. Un debito deve avere un intestatario, quindi senza un cliente associato, toccando A credito si apre prima l'elenco clienti (dalla v3.4; le versioni precedenti chiedono di associare un cliente nel carrello)."
      },
      {
        "type": "p",
        "text": "Per incassare, passa in alto in Ordini a Crediti da clienti. I debiti sono raggruppati per cliente: aprine uno per saldare un singolo ordine, un intero mese o tutto insieme. Ogni volta DingPOS chiede come è stato pagato l'importo. Un singolo ordine si può saldare anche dal suo dettaglio, e un saldo registrato per errore si può annullare con Annulla saldo."
      },
      {
        "type": "list",
        "items": [
          "I ricavi contano nel giorno in cui la merce esce; l'Incassato e i punti fedeltà arrivano solo nel giorno del saldo.",
          "Gli ordini da saldare hanno un badge ambra nell'elenco, e il dettaglio del cliente mostra quanto deve al momento.",
          "Un reso su un ordine non ancora saldato non rimborsa denaro: l'importo viene dedotto dai crediti da clienti di quel cliente.",
          "Un cliente con ordini da saldare non può essere eliminato."
        ]
      },
      {
        "type": "note",
        "text": "Per creare vendite a credito serve il piano Standard o superiore. Dopo un passaggio a un piano inferiore non puoi avviarne di nuove, ma i crediti esistenti si possono ancora consultare e saldare."
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
    "question": "Posso aggiungere note a ordini, clienti od ordini d'acquisto?",
    "keywords": [
      "nota",
      "note",
      "appunto",
      "commento",
      "promemoria"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Le pagine di dettaglio di ordini, clienti e ordini d'acquisto hanno ciascuna una scheda Note: toccala per modificarla, fino a 500 caratteri, oppure tocca l'unica riga «Aggiungi una nota» finché non ce ne sono. Puoi anche scriverne una nel modulo quando crei un cliente o un ordine d'acquisto."
      },
      {
        "type": "p",
        "text": "Le note non dipendono dallo stato: si possono aggiungere o modificare su ordini completati, ordini stornati e resi. Importi e articoli di un ordine sono fissati alla cassa; la nota resta accanto al documento e non ne cambia mai il contenuto."
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
    "question": "Come creo prodotti con varianti (taglia, colore)?",
    "keywords": [
      "varianti",
      "taglia",
      "colore",
      "opzioni",
      "combinazioni",
      "specifiche"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nella pagina di modifica del prodotto, tocca Aggiungi opzione in Opzioni delle varianti per aggiungere un'opzione (ad es. “Colore”), poi usa “+ Valore” per inserire ciascuna scelta (ad es. Rosso, Blu). Con due o più opzioni (ad es. Colore × Taglia), DingPOS crea per te tutte le combinazioni (Rosso/S, Rosso/M, Blu/S…)."
      },
      {
        "type": "p",
        "text": "Quando un prodotto ha varianti, ogni combinazione in Prezzo e giacenza delle varianti ha la propria giacenza e il suo prezzo segue il Prezzo del prodotto: una combinazione senza un prezzo proprio mostra il prezzo del prodotto in grigio e cambia quando cambia questo, mentre un numero che digiti è il prezzo proprio di quella combinazione, mostrato in nero. Ad esempio, imposta il Prezzo di una maglietta a 390 e cambia solo la L a 350: M e XL si vendono a 390 e, quando in seguito il Prezzo diventa 420, M e XL passano a 420 mentre L resta a 350. Il simbolo ⓘ accanto alla colonna Prezzo contiene Usa prezzo prodotto, che riporta tutte le combinazioni a seguire il prezzo del prodotto. I prodotti creati prima della v3.6 mantengono ogni prezzo di variante come prezzo proprio di quella combinazione, e il Prezzo del prodotto è il più basso tra questi. La cassa, l'elenco prodotti e il dettaglio prodotto mostrano un intervallo dal prezzo più basso al più alto, come “NT$350–NT$390”, oppure un prezzo unico quando tutte le combinazioni costano uguale; l'ordinamento per prezzo usa il prezzo più basso tra le combinazioni. Alla cassa, toccando il prodotto compare la scelta della variante prima di aggiungerlo al carrello."
      },
      {
        "type": "p",
        "text": "Il costo funziona allo stesso modo: un costo vuoto mostra in grigio il costo del prodotto e cambia quando cambia quello, mentre un numero è il costo proprio della combinazione, mostrato in nero, anche se è 0. Usa costo prodotto, nel simbolo ⓘ accanto alla colonna Costo, cancella in un colpo solo i costi propri di tutte le combinazioni."
      },
      {
        "type": "note",
        "text": "I nomi delle opzioni e dei valori possono avere al massimo 20 caratteri e gli spazi all'inizio e alla fine vengono eliminati al salvataggio. Un valore in cui non hai scritto nulla non è una combinazione e viene saltato al salvataggio. Il salvataggio si interrompe, con il campo evidenziato in rosso, quando un nome di opzione è vuoto, quando tutti i valori di un'opzione sono vuoti o quando cancelli un valore che il prodotto aveva già salvato: riscrivilo oppure tocca la × per eliminarlo. Un prodotto con varianti non può usare il prezzo libero."
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
    "question": "Posso inserire il prezzo di un prodotto direttamente alla cassa, ad esempio una spedizione o un articolo trattato?",
    "keywords": [
      "prezzo libero",
      "prezzo personalizzato",
      "inserire il prezzo",
      "spese di spedizione",
      "costo del servizio",
      "prezzo trattato",
      "prezzo di mercato",
      "spesa in percentuale"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì: basta creare un prodotto a prezzo libero. Attiva Prezzo libero nella pagina di modifica del prodotto e lascia vuoto il prezzo; la cassa e l'elenco prodotti mostrano “Prezzo libero” al posto del prezzo. Alla cassa, toccando il prodotto viene chiesto prima il prezzo: inseriscilo e tocca Aggiungi al carrello per aggiungerlo a quel prezzo."
      },
      {
        "type": "list",
        "items": [
          "0 è un prezzo valido (ad es. spedizione gratuita); un campo vuoto non si può aggiungere. Inserisci il prezzo come il resto del tuo negozio, in base alla modalità imposte.",
          "Un carrello contiene una sola riga per ogni prodotto a prezzo libero: toccandolo di nuovo si apre quella riga per cambiare il prezzo.",
          "Dalla v3.3, Addebita per permette di scegliere tra Importo e Percentuale. Con il 5%, la riga vale il 5% del subtotale degli altri articoli (dopo gli sconti articolo, prima di promozioni, sconto carrello e riscatto dei punti), arrotondato alla cifra decimale della valuta più vicina, con i valori a metà arrotondati per eccesso. L'importo segue il carrello quando gli articoli vengono aggiunti, rimossi o scontati. Nel carrello la riga riporta “5% del carrello” e l'ordine registra l'importo risultante.",
          "Una riga a prezzo libero non ha sconto articolo: per addebitare meno, cambia il prezzo. Sconto carrello, riscatto dei punti e promozioni (a meno che il prodotto non ne sia escluso) valgono comunque per questa riga.",
          "Attivando Prezzo libero si attiva anche Escludi dalle promozioni, così una spesa accessoria non viene scontata e non conta per le soglie di spesa. Disattivalo di nuovo se un articolo trattato deve partecipare alle promozioni.",
          "Una volta venduta, la riga è tassata, accumula punti e conta in Report come le altre, e un reso rimborsa il prezzo inserito.",
          "Un prodotto con varianti non può usare il prezzo libero. I prodotti a prezzo libero non vengono mai offerti come omaggi o aggiunte a pagamento e non compaiono mai nell'elenco degli articoli sostitutivi di un cambio."
        ]
      },
      {
        "type": "note",
        "text": "È disponibile in tutti i piani e l'inserimento del prezzo non richiede mai l'approvazione di un responsabile."
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
    "question": "Come funzionano i codici a barre?",
    "keywords": [
      "codice a barre",
      "scansione",
      "scanner",
      "duplicato",
      "fotocamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "I codici a barre dei prodotti si possono digitare a mano o scansionare con la fotocamera. Ogni codice a barre deve essere univoco: se al salvataggio coincide con quello di un altro prodotto, DingPOS ti mostra a quale prodotto appartiene."
      },
      {
        "type": "p",
        "text": "Alla cassa, il campo di ricerca trova sia i nomi dei prodotti sia l'inizio dei codici a barre: digita un codice a barre per richiamare subito il prodotto. Per i piani sugli scanner di codici a barre fisici, vedi “Verranno supportati gli scanner di codici a barre fisici?”"
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
    "question": "Come cambio l'ordine in cui compaiono i prodotti?",
    "keywords": [
      "ordinare",
      "ordine",
      "riordinare",
      "disporre",
      "trascinare",
      "in primo piano"
    ],
    "content": [
      {
        "type": "p",
        "text": "In Prodotti, tocca Modifica ordine e trascina le schede dei prodotti dove vuoi. La cassa e la gestione dei prodotti condividono questo unico ordine, quindi basta sistemarlo una volta per aggiornarli entrambi."
      },
      {
        "type": "list",
        "items": [
          "Con un catalogo grande, il menu di ogni scheda offre Sposta all'inizio, Sposta alla fine e Sposta in posizione, e ogni scheda mostra la sua posizione attuale.",
          "Filtra prima per categoria per riordinare solo all'interno di quella categoria: i prodotti delle altre categorie restano dove sono.",
          "I nuovi prodotti vanno all'inizio; modificare i dettagli di un prodotto non ne cambia mai la posizione."
        ]
      },
      {
        "type": "p",
        "text": "Per ordinare per un po' per nome, prezzo o data di creazione / modifica, usa il menu Ordina per. Il tuo ordine manuale viene conservato e, tornando a Ordine manuale, lo ritrovi."
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
    "question": "Come tengo traccia del magazzino?",
    "keywords": [
      "magazzino",
      "giacenza",
      "giacenze",
      "gestione del magazzino",
      "inventario",
      "giacenza bassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "La gestione del magazzino si attiva prodotto per prodotto: abilitala nella pagina di modifica del prodotto e inserisci la quantità attuale. Ogni variante di un prodotto tiene traccia della propria giacenza."
      },
      {
        "type": "p",
        "text": "Una volta attivata, vendite e preordini scalano la giacenza in automatico; storni, resi e preordini annullati la rimettono a magazzino; ricevere un ordine d'acquisto la aumenta. Ogni movimento viene registrato in un registro completo. Con 10 pezzi o meno, la giacenza è segnalata come bassa in arancione nell'elenco prodotti, alla cassa e nel dettaglio prodotto."
      },
      {
        "type": "p",
        "text": "Per cambiare il numero a mano ci sono due modi:"
      },
      {
        "type": "list",
        "items": [
          "Riconteggio: modifica il numero di giacenza nel modulo del prodotto in modo che corrisponda a ciò che hai contato davvero. Non incide mai sul conto economico.",
          "Rettifica giacenza (dalla v3.5): nel dettaglio del prodotto tocca Rettifica giacenza, scegli Rimuovi o Aggiungi, la quantità e un motivo, ad esempio Scaduto o avariato, Danneggiato o Campioni e omaggi. Il costo di ciò che rimuovi rientra nella Perdita di magazzino del mese nel conto economico: vedi «Come registro la merce scaduta, danneggiata o uscita come campione?»"
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
    "question": "Come registro la merce scaduta, danneggiata o uscita come campione?",
    "keywords": [
      "rettifica giacenza",
      "perdita di magazzino",
      "ammanco",
      "scarto",
      "spreco",
      "scaduto",
      "danneggiato",
      "campioni",
      "materiali di consumo",
      "riconteggio"
    ],
    "content": [
      {
        "type": "p",
        "text": "Usa Rettifica giacenza. Per un prodotto con giacenza tracciata, tocca Rettifica giacenza nel dettaglio del prodotto, scegli Rimuovi o Aggiungi, imposta la quantità con + e − (parte da 1; tocca il numero per digitarlo), scegli un motivo e, se vuoi, aggiungi una nota (fino a 100 caratteri). La schermata calcola la giacenza dopo la modifica e la riga sotto il motivo indica se incide sul conto economico."
      },
      {
        "type": "list",
        "items": [
          "Motivi per rimuovere: Usato in produzione, Scaduto o avariato, Danneggiato, Perso o rubato, Uso collaboratori, Campioni e omaggi, Materiali di consumo e Altro. Motivi per aggiungere: Produzione interna, Ritrovato e Altro. Altro richiede una nota.",
          "Tranne Usato in produzione, ciò che rimuovi rientra, al suo costo in quel momento, nella Perdita di magazzino del mese nel conto economico. Viene dopo l'utile lordo e riduce l'utile netto; utile lordo e margine non cambiano. Usato in produzione toglie solo la giacenza, perché il costo di un materiale è già incluso nel costo del prodotto realizzato con esso.",
          "Ritrovato toglie la stessa somma dalla Perdita di magazzino. Produzione interna e Altro tra i motivi per aggiungere aumentano solo la giacenza e non incidono mai sul conto economico.",
          "Una rettifica conta nel giorno in cui la registri. Non può essere retrodatata, modificata o eliminata; per correggere un errore, registra Ritrovato o una rettifica nel senso opposto.",
          "Un prodotto senza costo può comunque essere rettificato, ma il conto economico non può attribuirgli un importo, e il mese indica quante registrazioni erano senza costo."
        ]
      },
      {
        "type": "p",
        "text": "Modificare il numero di giacenza nel modulo del prodotto è un Riconteggio: lo allinea a ciò che hai contato davvero e non incide mai sul conto economico. L'elenco dei movimenti di magazzino in Report filtra separatamente le Rettifiche e i Riconteggi, e il registro attività mostra motivo e nota di ogni rettifica."
      },
      {
        "type": "note",
        "text": "Rettifica giacenza richiede il piano Standard o superiore. Con Pro, ai collaboratori il cui ruolo richiede approvazione per la Rettifica manuale della giacenza viene chiesto il PIN di un responsabile al momento della conferma."
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
    "question": "Perché la giacenza può andare in negativo?",
    "keywords": [
      "giacenza negativa",
      "magazzino negativo",
      "giacenza",
      "esaurito",
      "blocco vendita",
      "rettifica"
    ],
    "content": [
      {
        "type": "p",
        "text": "È una scelta voluta: la cassa non viene mai bloccata dalla giacenza insufficiente. La prima regola di una cassa in funzione è che il cliente non aspetta mai: un numero sbagliato sulla carta si corregge dopo, ma una vendita interrotta è persa per sempre."
      },
      {
        "type": "p",
        "text": "Una giacenza negativa di solito significa che un rifornimento non è stato registrato, oppure che un articolo preordinato non è ancora arrivato (i preordini scalano la giacenza quando vengono inseriti). Registra i rifornimenti ricevendo un ordine d'acquisto e il numero si ripristina da solo. Correggi una differenza di inventario modificando il numero di giacenza nel modulo del prodotto (un riconteggio); per merce rotta, scaduta o regalata, registra il motivo con Rettifica giacenza. Entrambe restano nel registro dei movimenti."
      },
      {
        "type": "note",
        "text": "Se alla cassa non trovi un prodotto con giacenza 0, controlla se Nascondi i prodotti esauriti è attivo in Impostazioni → Preferenze del dispositivo: finché lo è, questo iPad non può aggiungere al carrello i prodotti esauriti."
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
    "question": "Come registro gli acquisti e i fornitori?",
    "keywords": [
      "ordine d'acquisto",
      "acquisti",
      "fornitore",
      "ricevere merce",
      "rifornimento",
      "debiti verso fornitori"
    ],
    "content": [
      {
        "type": "p",
        "text": "La sezione Acquisti nella barra laterale gestisce fornitori e ordini d'acquisto. Un fornitore conserva nome, referente, telefono, indirizzo e una condizione di pagamento predefinita (Pagamento alla consegna o Credito mensile)."
      },
      {
        "type": "steps",
        "items": [
          "Tocca Nuovo acquisto, scegli il fornitore e aggiungi prodotti, quantità e costi unitari (precompilati con il costo attuale di ciascun prodotto). Si possono aggiungere anche le spese di spedizione. Per la merce non ancora creata come prodotto, tocca Nuovo prodotto nel selettore Aggiungi prodotto: il nuovo prodotto entra direttamente nell'ordine d'acquisto come riga. Se il fornitore non è ancora stato creato, tocca Aggiungi fornitore in alto a sinistra nell'elenco dei fornitori: il nuovo fornitore torna direttamente nell'ordine d'acquisto.",
          "Una bozza non tocca mai la giacenza né i debiti: modificala o eliminala liberamente.",
          "Quando la merce arriva, tocca Ricevi merce: la giacenza tracciata aumenta e l'ordine d'acquisto riceve il suo numero e si blocca. Per impostazione predefinita la ricezione aggiorna anche il costo di ogni prodotto con questo costo unitario; disattiva Sincronizza costo prodotto nell'ordine d'acquisto per lasciare i costi invariati. Subito sotto, Includi spedizione nel costo (attivo per i nuovi ordini d'acquisto) ripartisce le spese di spedizione sulle righe in base all'importo, così il costo scritto su ogni prodotto include la sua quota: farina 10 × $30, burro 1 × $60 e $25 di spedizione danno alla farina un costo di $32 e al burro di $64."
        ]
      },
      {
        "type": "p",
        "text": "La condizione di pagamento decide cosa succede dopo: gli ordini con Pagamento alla consegna vengono segnati come pagati, mentre quelli a Credito mensile restano non pagati in Da pagare, dove puoi saldarli per fornitore: un ordine, il mese in corso o tutto."
      },
      {
        "type": "p",
        "text": "I materiali che non vendi, come farina o imballaggi, si acquistano allo stesso modo: impostali come prodotti non in vendita — vedi «Posso aggiungere tra i prodotti materiali come farina o imballaggi?»"
      },
      {
        "type": "note",
        "text": "Gli acquisti richiedono il piano Standard o superiore. Un fornitore con ordini ricevuti non ancora pagati non può essere eliminato."
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
    "question": "Posso aggiungere tra i prodotti materiali come farina o imballaggi?",
    "keywords": [
      "non in vendita",
      "materiali",
      "ingredienti",
      "materie prime",
      "imballaggi",
      "forniture",
      "vendi in cassa",
      "acquisti",
      "costo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Nel modulo del prodotto, sotto la foto, disattiva Vendi in cassa (è attivo per impostazione predefinita) e il prodotto diventa non in vendita: non serve un prezzo, conserva costo, codice a barre, giacenza e varianti, e l'elenco prodotti mostra “Non in vendita” al posto del prezzo."
      },
      {
        "type": "list",
        "items": [
          "Un prodotto non in vendita non compare mai nella griglia della cassa, nelle categorie, nella ricerca o nella scansione dei codici a barre, e non può essere un regalo, un extra, il prodotto a cui si applica una promozione o un articolo sostitutivo in un cambio. Una categoria che contiene solo prodotti non in vendita non compare nella barra delle categorie della cassa.",
          "Quando il negozio ha prodotti non in vendita, in alto a destra in Prodotti compare un pulsante filtro: scegli Tutti i prodotti, In vendita o Non in vendita, insieme a ricerca e categorie.",
          "Ordini d'acquisto, ricezione, Sincronizza costo prodotto e conti da pagare funzionano esattamente come per gli altri prodotti, quindi costo d'acquisto e giacenza di un materiale si possono registrare da Acquisti.",
          "Vendere altri prodotti non ne scala la giacenza. Quando ne usi un po', registra una diminuzione con Rettifica giacenza nel dettaglio del prodotto: Usato in produzione per ciò che è finito nei prodotti, Materiali di consumo per cose come sacchetti di carta o detersivi.",
          "Puoi riattivarlo quando vuoi: prezzo e imposte restano al loro posto. Gli ordini e i report già creati non cambiano."
        ]
      },
      {
        "type": "p",
        "text": "Come il suo costo arriva nel conto economico: gli acquisti non contano direttamente. Per un prodotto realizzato con esso, inserisci il costo su quel prodotto: viene conteggiato quando quel prodotto si vende. Le forniture che non rientrano nel costo di nessun prodotto vengono registrate come Materiali di consumo quando le usi, se la loro giacenza è tracciata, oppure come spesa una tantum se non lo è. Non registrare la stessa somma in entrambi i modi, o verrà contata due volte."
      },
      {
        "type": "note",
        "text": "I prodotti non in vendita sono disponibili con ogni piano; acquisti, gestione del magazzino e Rettifica giacenza richiedono il piano Standard o superiore."
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
    "question": "Che differenza c'è tra Ricavi e Incassato?",
    "keywords": [
      "ricavi",
      "incassato",
      "report",
      "utile lordo",
      "dai ricavi all'utile lordo",
      "quadratura cassa",
      "acconto",
      "vendita a credito",
      "imposta"
    ],
    "content": [
      {
        "type": "p",
        "text": "I Ricavi contano nel giorno in cui la merce passa di mano, dopo tutti gli sconti e prima delle imposte; l'Incassato conta nel giorno in cui entra il denaro ed è il denaro che hai incassato, imposte comprese. In un negozio che applica l'imposta, l'Incassato supera quindi i Ricavi dell'importo dell'imposta, anche per gli ordini pagati alla cassa. Sono i primi due riquadri della prima riga di Report, accanto a Utile lordo, Ordini e Ordine medio."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Righe di riquadri di Report con Ricavi e Incassato affiancati nella prima riga"
      },
      {
        "type": "h2",
        "text": "Quando Ricavi e Incassato differiscono"
      },
      {
        "type": "p",
        "text": "Ad esempio, un negozio con imposta inclusa nei prezzi vende a NT$1,050, 5% di imposta compresa, e il cliente paga alla cassa: i Ricavi sono NT$1,000 e l'Incassato è NT$1,050. Oltre all'imposta, le due cifre si differenziano in questi casi:"
      },
      {
        "type": "list",
        "items": [
          "Vendita a credito: la merce esce oggi e rientra nei Ricavi di oggi; il denaro rientra nell'Incassato nel giorno in cui l'ordine viene saldato.",
          "Preordine: l'acconto rientra nell'Incassato quando viene pagato; i Ricavi vengono riconosciuti per intero alla data del ritiro.",
          "Acconti trattenuti: quando un cliente annulla un preordine e tu trattieni l'acconto, questo era già stato contato nell'Incassato al momento del pagamento. Report lo mostra a parte come Acconti trattenuti e non rientra mai nei Ricavi.",
          "Storno di un ordine precedente: il denaro rimborsato rientra nell'Incassato nel giorno dello storno, quindi l'Incassato di quel giorno può essere negativo. L'ordine stornato resta conteggiato alla data della vendita e compare nel sottotitolo del riquadro Ordini.",
          "Arrotondamento contanti: ciò che l'Arrotondamento contanti aggiunge o toglie al totale dell'ordine rientra nell'Incassato, mai nei Ricavi."
        ]
      },
      {
        "type": "p",
        "text": "Quando uno dei due importi è diverso da zero, il sottotitolo del riquadro Incassato mostra l'Arrotondamento contanti o gli Acconti trattenuti."
      },
      {
        "type": "h2",
        "text": "Imposta e dettagli dei riquadri"
      },
      {
        "type": "p",
        "text": "L'imposta che separa Ricavi e Incassato è elencata in Dai ricavi all’utile lordo, che si apre dalla riga in fondo al riquadro Utile lordo. Mostra Ricavi (imposte incluse), Imposta e Ricavi (al netto delle imposte). I negozi in Australia, Regno Unito, Nuova Zelanda e Singapore vi vedono il nome locale dell'imposta, ad esempio Ricavi (incl. GST), GST e Ricavi (al netto di GST)."
      },
      {
        "type": "p",
        "text": "Per vedere l'imposta incassata da dichiarare, apri Report imposte dal riquadro Imposta."
      },
      {
        "type": "p",
        "text": "L'icona ⓘ sui riquadri Ricavi, Incassato e Ordini spiega queste regole nell'app, compresi gli ordini stornati elencati nel sottotitolo del riquadro Ordini."
      },
      {
        "type": "h2",
        "text": "Quadratura e lettura delle vendite"
      },
      {
        "type": "p",
        "text": "Per far quadrare i conti, confronta l'Incassato con il cassetto e con il terminale carte. La scheda Metodi di pagamento in Report mostra una riga per metodo e le vendite fatte prima di rinominare un metodo vengono conteggiate con il nuovo nome. Per sapere quanto hai venduto in un periodo, guarda i Ricavi. I resi riducono i Ricavi nel giorno del reso."
      },
      {
        "type": "note",
        "text": "I ricavi al netto delle imposte sono arrivati con la v3.5 e anche i periodi passati sono stati ricalcolati allo stesso modo, quindi un negozio che applica l'imposta vede Ricavi più bassi rispetto a prima dell'aggiornamento. È una correzione: le versioni precedenti includevano l'imposta nei Ricavi e nei negozi con prezzi al netto delle imposte si contava come ricavo persino l'imposta sulle vendite incassata."
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
    "question": "Quali periodi di tempo posso vedere nei report?",
    "keywords": [
      "report",
      "periodo",
      "questa settimana",
      "questo mese",
      "quest'anno",
      "intervallo personalizzato",
      "data",
      "classifica prodotti",
      "confronta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Scegli Oggi, Ieri, Questa settimana, Questo mese, Quest'anno o Sempre nella barra del periodo in alto in Report, oppure tocca Personalizzato per scegliere una data di inizio e una di fine qualsiasi. Ogni scheda della pagina segue il periodo scelto. Questa settimana segue il primo giorno della settimana impostato sul dispositivo, Questo mese parte dal 1° del mese, Quest'anno parte dal 1° gennaio, Sempre parte dalla prima vendita del tuo negozio e ogni opzione mostra le date che copre."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Barra del periodo in alto in Report con Personalizzato selezionato e il popover delle date aperto per scegliere Inizio e Fine"
      },
      {
        "type": "h2",
        "text": "Scegliere un intervallo personalizzato"
      },
      {
        "type": "p",
        "text": "Usa Personalizzato quando ti serve un intervallo diverso dai periodi di calendario predefiniti, ad esempio un periodo di dichiarazione fiscale bimestrale o trimestrale."
      },
      {
        "type": "steps",
        "items": [
          "Apri Report e tocca Personalizzato nella barra del periodo.",
          "Scegli la data di inizio e quella di fine nel popover.",
          "Conferma le date per aggiornare il report."
        ]
      },
      {
        "type": "p",
        "text": "Anche il riquadro Imposta e il report imposte seguono il periodo scelto, quindi impostare un intervallo di dichiarazione con Personalizzato aggiorna entrambi; vedi l'articolo correlato sul report imposte. A destra della barra del periodo, tocca Confronta per vedere il periodo selezionato accanto a quello precedente o allo stesso periodo dell'anno scorso; vedi l'articolo correlato sui report avanzati."
      },
      {
        "type": "h2",
        "text": "Riquadri e schede della pagina"
      },
      {
        "type": "p",
        "text": "Sotto la barra del periodo, Report mostra due righe di riquadri con i valori, seguite da grafici e schede riepilogative a coppie, con Situazione attuale in fondo."
      },
      {
        "type": "list",
        "items": [
          "Prima riga di riquadri: Ricavi, Incassato, Utile lordo, Ordini e Ordine medio.",
          "Seconda riga di riquadri: Sconti totali, Imposta, Utile netto, Prodotti senza costo e Clienti serviti.",
          "Prima coppia: il grafico dell'andamento delle vendite accanto a Costo e utile lordo.",
          "Seconda coppia: Classifica prodotti accanto a Quota per categoria.",
          "Terza coppia: Metodi di pagamento accanto alla scheda delle promozioni.",
          "Scheda in fondo: Situazione attuale."
        ]
      },
      {
        "type": "p",
        "text": "Due riquadri della seconda riga compaiono solo in casi particolari. Imposta, aggiunto con la v3.6, compare solo per un negozio con imposte o quando il periodo selezionato contiene vendite fatte con un'imposta. Utile netto compare solo quando il periodo è Questo mese o copre esattamente un mese intero."
      },
      {
        "type": "note",
        "text": "Se un periodo non ha ordini, Report mostra solo la barra del periodo, un messaggio e Situazione attuale."
      },
      {
        "type": "h2",
        "text": "Lettura dei grafici e di Classifica prodotti"
      },
      {
        "type": "p",
        "text": "Il menu in alto a destra del grafico dell'andamento delle vendite permette di passare tra Ricavi, Ordini, Ordine medio e Clienti serviti. Il grafico offre anche un selettore Andamento e Giorno × ora; per questa vista vedi l'articolo correlato sui report avanzati. Accanto, il grafico Costo e utile lordo impila in un'unica barra il costo dei prodotti e l'utile lordo di ogni periodo. Un singolo giorno è mostrato per ora, mentre i periodi più lunghi raggruppano i dati per giorni, settimane, mesi o anni in base alla durata."
      },
      {
        "type": "p",
        "text": "Tieni premuto sul grafico dell'andamento delle vendite, su Costo e utile lordo o su Metodi di pagamento per mostrare una scheda di lettura per un singolo intervallo. Con Confronta attivo, la scheda di lettura del grafico dell'andamento delle vendite mostra affiancate la cifra di questo periodo e quella del periodo di confronto. Trascina a sinistra o a destra per spostarti tra gli intervalli; scorri verso l'alto o verso il basso sul grafico per far scorrere la pagina come al solito."
      },
      {
        "type": "p",
        "text": "Classifica prodotti elenca i primi 5 prodotti del periodo selezionato. Tocca la scheda o Mostra tutti per elencare ogni prodotto venduto in quel periodo, in ordine di quantità al netto dei resi. Un prodotto con varianti compare con una riga per ogni variante."
      },
      {
        "type": "note",
        "text": "I periodi di calendario sono arrivati con la v2.4; le versioni precedenti offrivano intervalli mobili (Oggi / 7 giorni / 30 giorni / Sempre). Se vedi ancora queste opzioni, aggiorna DingPOS dall'App Store."
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
    "question": "Che cosa mostrano i report avanzati?",
    "keywords": [
      "report avanzati",
      "report",
      "confronta",
      "confronto tra periodi",
      "giorno × ora",
      "articoli a bassa rotazione",
      "variazioni",
      "quota per categoria",
      "valore del magazzino",
      "tasso di riacquisto"
    ],
    "content": [
      {
        "type": "p",
        "text": "I report avanzati non sono una schermata a parte: stanno in Report e seguono il periodo che scegli in alto. Aggiungono i confronti tra periodi, una mappa di calore per giorno della settimana e ora, Articoli a bassa rotazione, Variazioni, il tasso di riacquisto dei clienti fedeltà, Quota per categoria e una sezione Situazione attuale per giacenza e punti. Sono tutti inclusi in ogni piano e restano disponibili anche dopo la fine della prova."
      },
      {
        "type": "h2",
        "text": "Confronta"
      },
      {
        "type": "p",
        "text": "Confronta si trova a destra della barra del periodo in Report e mette il periodo selezionato a confronto con uno precedente."
      },
      {
        "type": "steps",
        "items": [
          "Apri Report dalla barra laterale.",
          "Scegli un periodo in alto.",
          "Tocca Confronta a destra della barra del periodo.",
          "Scegli un'opzione di confronto dal menu."
        ]
      },
      {
        "type": "p",
        "text": "Le opzioni disponibili dipendono dal periodo che scegli:"
      },
      {
        "type": "list",
        "items": [
          "Nessuno disattiva il confronto.",
          "Settimana scorsa confronta un singolo giorno con lo stesso giorno della settimana scorsa, oppure questa settimana con la scorsa.",
          "Mese scorso confronta questo mese con il mese scorso.",
          "Anno scorso confronta quest'anno con l'anno scorso, oppure il periodo selezionato con lo stesso periodo dell'anno scorso.",
          "Precedente confronta un intervallo personalizzato con lo stesso numero di giorni che lo precedono."
        ]
      },
      {
        "type": "p",
        "text": "Quando un confronto è attivo, Report aggiunge la variazione e la cifra del periodo di confronto a ogni riquadro tranne Imposta, Utile netto e Prodotti senza costo. Ricavi, Incassato, Utile lordo, Ordini, Ordine medio, Sconti totali e Clienti serviti mostrano ciascuno una riga di confronto come «▼ 3% rispetto a Mese scorso»."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Report su Questa settimana con Confronta impostato su Settimana scorsa: si vedono la barra di confronto e la prima riga di riquadri, ciascuno con la propria variazione e la cifra di confronto sotto",
        "caption": "Tocca una qualsiasi riga di confronto sotto un riquadro per aprire Confronto tra periodi e vedere le cifre di entrambi i periodi."
      },
      {
        "type": "p",
        "text": "La variazione di Sconti totali è sempre grigia, perché uno sconto in più non è di per sé un bene né un male. Tocca una qualsiasi riga di confronto per aprire Confronto tra periodi, che elenca le cifre di entrambi i periodi. Il grafico dell'andamento aggiunge una linea più chiara per il periodo di confronto. Finché un periodo è ancora in corso, il periodo di confronto viene tagliato allo stesso momento."
      },
      {
        "type": "h2",
        "text": "Giorno × ora"
      },
      {
        "type": "p",
        "text": "Nell'intestazione del grafico dell'andamento passa da Andamento a Giorno × ora per vedere una mappa di calore su sette giorni e 24 ore. Più una cella è scura, più hai venduto in quell'ora. Puoi passare la mappa tra ricavi e ordini. Con un confronto attivo in Confronta, la mappa mostra anche quali ore sono cresciute e quali sono calate."
      },
      {
        "type": "h2",
        "text": "Articoli a bassa rotazione"
      },
      {
        "type": "p",
        "text": "Passa l'intestazione della scheda di classifica ad Articoli a bassa rotazione per elencare i prodotti dal meno al più venduto. Ogni riga mostra la giacenza attuale del prodotto e l'ultima data in cui è stato venduto. I prodotti mai venduti sono indicati come Mai venduto e un prodotto con varianti ha una riga per ogni variante. Per impostazione predefinita sono mostrati solo i prodotti in giacenza."
      },
      {
        "type": "h2",
        "text": "Variazioni"
      },
      {
        "type": "p",
        "text": "Passa l'intestazione della scheda di classifica a Variazioni per vedere i 3 prodotti i cui ricavi sono cresciuti di più e i 3 calati di più rispetto al periodo di confronto. Ogni riga mostra i ricavi dei due periodi e la differenza, e ogni variante è confrontata con se stessa."
      },
      {
        "type": "p",
        "text": "Scegli prima un periodo in Confronta. Quando Confronta è impostato su Nessuno, o quando il periodo è Sempre, la scheda ti invita a scegliere un periodo di confronto. Tocca la scheda o Mostra tutti per aprire l'elenco completo Variazioni prodotti, diviso in In aumento e In calo."
      },
      {
        "type": "h2",
        "text": "Tasso di riacquisto"
      },
      {
        "type": "p",
        "text": "L'ultima riga del riquadro Clienti serviti mostra il tasso di riacquisto come «Tasso di riacquisto … · … clienti tornati». Indica la quota di clienti fedeltà che hanno acquistato nel periodo selezionato e hanno acquistato in totale due o più volte. Con un confronto attivo in Confronta, una riga sotto indica la variazione in punti percentuali e il tasso del periodo di confronto."
      },
      {
        "type": "h2",
        "text": "Quota per categoria"
      },
      {
        "type": "p",
        "text": "Quota per categoria elenca i ricavi e la quota di ogni categoria, dalla più grande alla più piccola, in base alla categoria attuale di ogni prodotto. I prodotti senza categoria rientrano in Senza categoria e le righe sommano esattamente i Ricavi."
      },
      {
        "type": "h2",
        "text": "Situazione attuale"
      },
      {
        "type": "p",
        "text": "Situazione attuale mostra tre dettagli su magazzino e punti:"
      },
      {
        "type": "list",
        "items": [
          "Valore del magazzino, calcolato come giacenza attuale × costo attuale.",
          "Tutti i movimenti di magazzino del periodo selezionato.",
          "I punti che i clienti hanno e non hanno ancora riscattato, con lo sconto massimo che possono ottenere."
        ]
      },
      {
        "type": "p",
        "text": "Il valore del magazzino e i punti non riscattati sono saldi attuali, quindi cambiare il periodo in alto non li modifica."
      },
      {
        "type": "h2",
        "text": "Piani e permessi"
      },
      {
        "type": "p",
        "text": "Dalla v3.4 tutti i report avanzati sono disponibili con ogni piano, Lite compreso, e restano disponibili anche dopo la fine della prova. Anche Variazioni è stato aggiunto con la v3.4. Le versioni precedenti mostravano i report avanzati solo con Pro, con un piccolo lucchetto sugli altri piani; se vedi ancora i lucchetti, aggiorna DingPOS dall'App Store."
      },
      {
        "type": "p",
        "text": "Lite non gestisce giacenza né punti fedeltà, ma Situazione attuale mostra comunque il valore del magazzino e i punti non riscattati che il tuo negozio ha già (per esempio dalla prova), oppure zero."
      },
      {
        "type": "note",
        "text": "I collaboratori vedono i report avanzati con il permesso Report; gli importi del valore del magazzino richiedono anche il permesso Costi e utile."
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
    "question": "Come viene calcolato l'utile lordo se non ho inserito i costi?",
    "keywords": [
      "costo",
      "utile lordo",
      "margine",
      "margine lordo",
      "report",
      "costo mancante",
      "utile lordo non tracciato",
      "prodotti senza costo",
      "dai ricavi all'utile lordo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Il costo è un campo facoltativo, quindi i prodotti senza costo sono esclusi dall'utile lordo, mentre i loro ricavi contano comunque per intero. Il riquadro Prodotti senza costo in Report mostra quanti prodotti venduti o resi nel periodo non hanno un costo, ad esempio «12 prodotti». Un costo pari a 0 conta come costo e non viene elencato; quando ogni prodotto ha un costo, il riquadro riporta «0 prodotti · costi completi»."
      },
      {
        "type": "h2",
        "text": "Trovare i prodotti senza costo"
      },
      {
        "type": "p",
        "text": "In Report tocca il riquadro Prodotti senza costo o Mostra prodotti per aprire Prodotti senza costo. Il foglio elenca i prodotti in ordine decrescente per i ricavi esclusi dall'utile lordo."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Foglio Prodotti senza costo con i prodotti ordinati per i ricavi esclusi dall'utile lordo"
      },
      {
        "type": "steps",
        "items": [
          "Tocca una riga in Prodotti senza costo per aprire il prodotto.",
          "Tocca Modifica e inserisci il costo in Costo (facoltativo).",
          "Torna a Prodotti senza costo per vedere la riga contrassegnata come Costo aggiunto."
        ]
      },
      {
        "type": "p",
        "text": "Un prodotto con varianti è contrassegnato come Costo aggiunto solo quando ogni variante venduta senza costo ne ha uno: il proprio oppure quello del prodotto, da seguire. Dalla v3.6, un ordine d'acquisto può anche ripartire la spedizione nel costo del prodotto che scrive, quando è attivo Includi spedizione nel costo."
      },
      {
        "type": "note",
        "text": "Un costo che aggiungi riguarda solo le vendite successive. Le vendite già fatte non vengono ricalcolate."
      },
      {
        "type": "h2",
        "text": "Inserire costo e imposta"
      },
      {
        "type": "p",
        "text": "Nella scheda del prodotto il campo del costo si chiama Costo (facoltativo) in ogni negozio. In un negozio con imposte, accanto a Costo (facoltativo) compare un ⓘ che mostra come si applica l'imposta a seconda di Detrazione imposta sugli acquisti:"
      },
      {
        "type": "list",
        "items": [
          "Detrazione imposta sugli acquisti è attiva: inserisci il costo al netto dell'imposta che puoi detrarre. La nota ⓘ dice: «Inserisci il costo senza l’imposta che puoi detrarre, da registrare come imposta sugli acquisti. L’imposta che non puoi detrarre fa parte del costo.»",
          "Detrazione imposta sugli acquisti è disattivata: inserisci quanto hai pagato, meno l'imposta che puoi detrarre. La nota ⓘ dice: «L’imposta detraibile non fa parte del costo; quella non detraibile sì. Se detrai l’imposta sugli acquisti, attiva Detrazione imposta sugli acquisti in Info negozio.»"
        ]
      },
      {
        "type": "p",
        "text": "Se il tuo negozio dichiara l'imposta sugli acquisti, attiva Detrazione imposta sugli acquisti in Info negozio."
      },
      {
        "type": "h2",
        "text": "Leggere il dettaglio dell'utile lordo"
      },
      {
        "type": "p",
        "text": "L'utile lordo è il ricavo dopo tutti gli sconti (sconti sugli articoli e sul carrello, promozioni, riscatto punti) e prima delle imposte, meno il costo. Il margine è l'utile lordo diviso per i ricavi dei prodotti con un costo, così quelli senza costo non lo abbassano. Un reso riprende, nel giorno del reso, l'utile lordo che quegli articoli avevano portato."
      },
      {
        "type": "p",
        "text": "Tocca il riquadro Utile lordo in Report per aprire Dai ricavi all’utile lordo, che sottrae riga per riga:"
      },
      {
        "type": "list",
        "items": [
          "Ricavi (imposte incluse)",
          "Imposta",
          "Ricavi (al netto delle imposte)",
          "Ricavi senza costo",
          "Costo dei prodotti",
          "Utile lordo e margine"
        ]
      },
      {
        "type": "p",
        "text": "Le righe sommano esattamente il riquadro Utile lordo. I negozi in Australia, Regno Unito, Nuova Zelanda e Singapore vedono il nome locale dell'imposta nelle righe dell'imposta, ad esempio Ricavi (incl. GST)."
      },
      {
        "type": "note",
        "text": "Questo calcolo dell'utile lordo è arrivato con la v3.1. Le versioni precedenti toglievano solo gli sconti manuali sugli articoli e contavano come utile l'imposta inclusa nel prezzo, quindi dopo l'aggiornamento i periodi con sconti o imposta inclusa mostrano un utile lordo più basso. È una correzione, non una perdita di dati."
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
    "question": "Come vedo quanto ho guadagnato davvero ogni mese?",
    "keywords": [
      "utile",
      "conto economico",
      "profitti e perdite",
      "utile netto",
      "utile lordo",
      "utile mensile",
      "spese fisse",
      "utile operativo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Apri Utile, sotto Report nella barra laterale, per vedere l'utile netto di ogni mese e come viene calcolato. L'elenco va dal mese più recente al più vecchio, a partire dal primo mese con attività; il mese corrente è contrassegnato In corso e l'intestazione di ogni anno somma l'utile netto dei suoi mesi conclusi. La prima riga, Tutte le spese, apre ogni spesa a prescindere dal mese."
      },
      {
        "type": "h2",
        "text": "Dettaglio mensile"
      },
      {
        "type": "steps",
        "items": [
          "Apri Utile, sotto Report nella barra laterale.",
          "Tocca un mese per vedere come si calcola il suo utile netto."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Pagina di un mese in Utile con l'avviso In corso, l'utile netto e il dettaglio completo dai ricavi alle spese"
      },
      {
        "type": "p",
        "text": "La pagina del mese elenca in ordine ogni riga, dalle vendite all'utile netto. Le righe dai ricavi all'utile lordo hanno gli stessi nomi e gli stessi importi di Dai ricavi all’utile lordo in Report."
      },
      {
        "type": "list",
        "items": [
          "Ricavi (imposte incluse), Imposta e Ricavi (al netto delle imposte): i ricavi con l'imposta inclusa, l'importo dell'imposta e i ricavi dopo ogni sconto e prima delle imposte, conteggiati nel giorno in cui la merce è stata consegnata. I negozi in Australia, Regno Unito, Nuova Zelanda e Singapore vedono il nome locale dell'imposta.",
          "Ricavi senza costo: sottratti prima del costo dei prodotti, mostrati solo se diversi da zero.",
          "Costo dei prodotti: il costo di ciò che è stato venduto, in base ai costi indicati nei tuoi prodotti.",
          "Utile lordo: mostrato con il suo margine.",
          "Ricavi senza costo: aggiunti di nuovo dopo l'utile lordo, se diversi da zero.",
          "Perdite di magazzino: mostrate solo se il mese ne ha; il costo di ciò che Rettifica giacenza ha tolto perché scaduto, danneggiato, regalato e simili, più i resi scartati. Vengono dopo l'utile lordo. Vedi «Come registro la merce scaduta, danneggiata o uscita come campione?» Il mese ha anche una sezione Perdite di magazzino che le totalizza per motivo.",
          "Commissioni (stima): le commissioni stimate in base alle tariffe dei tuoi metodi di pagamento.",
          "Acconti trattenuti: mostrati solo se diversi da zero; gli acconti che hai trattenuto quando un preordine è stato annullato.",
          "Arrotondamento contanti: mostrato solo se diverso da zero; ciò che l'arrotondamento dei contanti alle monete in uso ha aggiunto o tolto ai totali degli ordini.",
          "Spese fisse e Spese una tantum: ciò che hai registrato per quel mese — vedi «Come registro affitto, stipendi e altre spese?»",
          "Utile netto: calcolato come ricavi (al netto delle imposte) − costo dei prodotti − perdite di magazzino − commissioni + acconti trattenuti + arrotondamento contanti − spese fisse − spese una tantum."
        ]
      },
      {
        "type": "h2",
        "text": "Mesi in corso"
      },
      {
        "type": "p",
        "text": "Finché un mese è ancora in corso, Utile detrae già le spese fisse dell'intero mese. Ad esempio, il 5/10, se finora i ricavi (al netto delle imposte) sono 20,000, il costo dei prodotti è 10,000 e le spese fisse sono 65,700, l'utile netto è −55,700 e viene contrassegnato In corso · vengono detratte le spese dell’intero mese."
      },
      {
        "type": "p",
        "text": "Poiché le spese dell'intero mese sono già conteggiate, l'utile netto di questo mese non è mai mostrato in rosso nell'elenco dei mesi, nella pagina del mese né nel riquadro Utile netto di Report. Un mese concluso in perdita mostra il suo utile netto nel colore di avviso."
      },
      {
        "type": "h2",
        "text": "Grafici"
      },
      {
        "type": "p",
        "text": "Dopo il dettaglio seguono fino a tre grafici: l'utile netto mese per mese, la quota di ogni spesa fissa e l'andamento delle spese fisse. I due grafici di andamento coprono al massimo i 12 mesi fino al mese che hai aperto e compaiono solo quando ci sono almeno due mesi da confrontare, contati dal mese della tua prima vendita o spesa. Il grafico delle quote richiede una spesa fissa in quel mese; finché non ce n'è una, quella sezione mostra Aggiungi spesa fissa."
      },
      {
        "type": "h2",
        "text": "Passare da Report a Utile"
      },
      {
        "type": "p",
        "text": "Report e Utile si collegano tra loro. Quando il periodo di Report è questo mese o esattamente un mese intero, la seconda riga di riquadri aggiunge un riquadro Utile netto, contrassegnato In corso · vengono detratte le spese dell’intero mese mentre il mese è in corso. Toccalo per vedere il dettaglio di quel mese dall'utile lordo all'utile netto. Per qualsiasi altro periodo, tocca Vedi il conto economico mensile nell'ultima riga di Dai ricavi all’utile lordo."
      },
      {
        "type": "p",
        "text": "Nell'altro senso, Vedi il report di ottobre sotto il titolo di un mese in Utile apre Report su quel mese (intervallo personalizzato 1/10–31/10); per il mese in corso apre Questo mese."
      },
      {
        "type": "note",
        "text": "L'utile netto è l'utile operativo al lordo delle imposte sul reddito, calcolato in base a quanto DingPOS ha registrato: non è una dichiarazione dei redditi. Se alcuni prodotti sono stati venduti senza costo, il mese mostra comunque un utile netto contrassegnato Esclude il costo di N prodotti, e puoi toccarlo per vedere quali."
      },
      {
        "type": "note",
        "text": "Utile è disponibile con ogni piano. Con i collaboratori, aprirlo richiede il permesso Conto economico e spese, per il quale Responsabili e Collaboratori hanno di default bisogno di approvazione, perché mostra i costi dei prodotti e gli stipendi."
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
    "question": "Come registro affitto, stipendi e altre spese?",
    "keywords": [
      "spese",
      "affitto",
      "stipendi",
      "utenze",
      "spese fisse",
      "spese una tantum",
      "tutte le spese",
      "ammortamento",
      "costi generali",
      "utile"
    ],
    "content": [
      {
        "type": "p",
        "text": "In Utile tocca Aggiungi spesa e scegli Aggiungi spesa fissa o Aggiungi spesa una tantum per registrare affitto, stipendi, utenze e altri costi di gestione. Ogni spesa è conteggiata nel mese a cui appartiene, non in quello in cui l'hai pagata, e l'utile netto di ogni mese si aggiorna di conseguenza. Le spese fisse si ripetono ogni mese con eventuali variazioni di importo facoltative, mentre quelle una tantum sono conteggiate in un solo mese o ripartite su più mesi."
      },
      {
        "type": "h2",
        "text": "Spese fisse"
      },
      {
        "type": "p",
        "text": "Una spesa fissa è un costo ricorrente che paghi ogni mese, come affitto, utenze o stipendi."
      },
      {
        "type": "steps",
        "items": [
          "Apri Utile.",
          "Tocca Aggiungi spesa.",
          "Scegli Aggiungi spesa fissa.",
          "Inserisci il nome, l'importo mensile e il mese di inizio. Scegli un mese precedente per registrare spese passate.",
          "Tocca ✓ per salvare."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Modulo della spesa fissa con nome, importo mensile, mese di inizio e variazioni dell'importo"
      },
      {
        "type": "p",
        "text": "Quando l'importo cambia, apri la spesa e tocca Cambia importo. Scegli il mese da cui parte la variazione, poi Da questo mese per un cambiamento duraturo, come un aumento dell'affitto, oppure Solo questo mese per una differenza di un solo mese, come la bolletta della luce del mese. Ogni variazione è elencata nel modulo e puoi aprirla per modificarla o rimuoverla."
      },
      {
        "type": "p",
        "text": "Quando smetti di pagare una spesa fissa, imposta Ultimo mese conteggiato. Quel mese e i precedenti restano conteggiati in Utile, mentre i mesi successivi non la includono più."
      },
      {
        "type": "h2",
        "text": "Variazioni programmate in Tutte le spese"
      },
      {
        "type": "p",
        "text": "In Tutte le spese, ogni riga di spesa fissa mostra ciò che è programmato in seguito. La riga unisce il mese di inizio con l'eventuale prossima variazione dell'importo e l'ultimo mese conteggiato. Ad esempio, una riga può riportare Da gennaio 2026 · $420/mese da dicembre 2026 · Ultimo conteggio: marzo 2027."
      },
      {
        "type": "p",
        "text": "L'importo a destra resta quello mensile di oggi, non la tariffa futura. Una variazione impostata su Solo questo mese non compare nella riga."
      },
      {
        "type": "h2",
        "text": "Spese una tantum"
      },
      {
        "type": "p",
        "text": "Una spesa una tantum è un costo pagato una sola volta, come un allestimento, un'attrezzatura, un'assicurazione pagata in anticipo o una singola fattura."
      },
      {
        "type": "steps",
        "items": [
          "Apri Utile.",
          "Tocca Aggiungi spesa.",
          "Scegli Aggiungi spesa una tantum.",
          "Inserisci l'importo e la data.",
          "Imposta Mese conteggiato per un solo mese, oppure attiva Ripartisci su più mesi.",
          "Tocca ✓ per salvare."
        ]
      },
      {
        "type": "p",
        "text": "Anche senza ripartizione puoi scegliere il Mese conteggiato, così il costo è conteggiato nel mese a cui appartiene. Ad esempio, una fattura di ottobre che arriva a novembre può essere conteggiata in ottobre, mantenendo la data reale."
      },
      {
        "type": "p",
        "text": "Per un allestimento, un'attrezzatura o un'assicurazione pagata in anticipo, attiva Ripartisci su più mesi, scegli da 2 a 120 mesi e seleziona il primo mese conteggiato. Il modulo mostra in anteprima quanto viene conteggiato ogni mese e quali mesi copre."
      },
      {
        "type": "p",
        "text": "Se una ripartizione termina prima del previsto, ad esempio quando una polizza assicurativa viene annullata, apri la spesa e usa Termina ripartizione in anticipo. L'importo residuo è conteggiato nel mese che scegli."
      },
      {
        "type": "h2",
        "text": "Imposta sugli acquisti nelle spese"
      },
      {
        "type": "p",
        "text": "Quando Detrazione imposta sugli acquisti è attiva, in una spesa una tantum puoi registrare un numero di fattura e l'imposta detraibile, e per una spesa fissa puoi registrare ogni fattura in Fatture con Registra una fattura. L'importo conteggiato in Utile resta quello a carico del negozio; l'articolo correlato sull'imposta sugli acquisti spiega come funziona l'imposta detraibile."
      },
      {
        "type": "note",
        "text": "Inserisci ciò che il negozio sostiene davvero, escludendo le imposte che puoi recuperare. La merce che venderai e le materie prime con cui la produci passano dagli Acquisti, perché vengono conteggiate nel costo dei prodotti quando sono vendute. I materiali di consumo con giacenza tracciata si registrano con Rettifica giacenza quando li usi, con il motivo Materiali di consumo, non come spesa. Depositi cauzionali, capitale di un prestito e prelievi del titolare non sono spese. Le modifiche si salvano insieme quando tocchi ✓, e una modifica che raggiunge un mese concluso ti dice prima l'utile netto di quali mesi cambierà."
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
    "question": "Come esporto il report imposte per il mio commercialista?",
    "keywords": [
      "esportare report imposte",
      "Report imposte",
      "Esporta",
      "cartella di lavoro Excel",
      "CSV",
      "report PDF",
      "riepilogo imposte",
      "righe imposta sugli acquisti",
      "commercialista"
    ],
    "content": [
      {
        "type": "p",
        "text": "Apri Report imposte, tocca Esporta in alto a destra e scegli un CSV, una Cartella di lavoro Excel (XLSX) o un Report PDF. Il file si apre in un'anteprima a schermo intero, dove puoi toccare il pulsante di condivisione per salvarlo o inviarlo al tuo commercialista. Ogni formato contiene gli stessi importi mostrati sullo schermo."
      },
      {
        "type": "h2",
        "text": "Come esportare"
      },
      {
        "type": "steps",
        "items": [
          "Apri Report e scegli il periodo, ad esempio un intervallo personalizzato dal 1/11 al 31/12 per un periodo di dichiarazione bimestrale, oppure un intervallo trimestrale.",
          "Tocca il riquadro Imposta per aprire Report imposte. L'esportazione copre esattamente quel periodo.",
          "Tocca Esporta in alto a destra in Report imposte. Un menu elenca i formati, con l'ultimo esportato su questo iPad spuntato.",
          "Scegli un formato, ad esempio Cartella di lavoro Excel (XLSX), per aprire un'anteprima a schermo intero. I file CSV si mostrano come tabella e la cartella di lavoro Excel permette di passare da un foglio all'altro, ad esempio controllando prima Summary.",
          "Tocca il pulsante di condivisione in alto a destra nell'anteprima per salvare il file o inviarlo al tuo commercialista. Chiudendo l'anteprima torni a Report imposte."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Report imposte con il menu Esporta aperto che elenca i formati di file"
      },
      {
        "type": "p",
        "text": "Se un'esportazione non riesce, l'app mostra Impossibile esportare il file e Prova a esportare di nuovo. Non viene scritto nulla: esporta di nuovo."
      },
      {
        "type": "h2",
        "text": "Formati di esportazione"
      },
      {
        "type": "list",
        "items": [
          "Riepilogo imposte (CSV): una riga per ogni riga del report (ogni imposta e aliquota, ad aliquota zero e senza imposta), con vendite, resi e netto, al netto dell'imposta e imposta.",
          "Tutti i documenti (CSV): una riga per documento sotto ogni imposta, con data e ora, numero dello scontrino, tipo di documento (vendita, reso o contropartita di uno storno), nome del cliente, importi e metodi di pagamento. Uno storno aggiunge una riga di contropartita alla data dello storno.",
          "Riepilogo giornaliero (CSV): il riepilogo per giorno, poi una seconda tabella dei pagamenti per giorno e metodo.",
          "Righe imposta sugli acquisti (CSV): compare solo quando il report ha una scheda dell'imposta sugli acquisti. Una riga per ogni riga di imposta sugli acquisti di ogni ordine d'acquisto e spesa, con fornitore, ID fiscale del fornitore e numero fattura.",
          "Cartella di lavoro Excel (XLSX): fogli Summary, Documents e Daily che corrispondono ai tre CSV delle vendite, più Purchases quando il report mostra l'imposta sugli acquisti. Gli importi sono celle numeriche e ogni colonna si adatta al contenuto, così nulla si apre tagliato.",
          "Report PDF: un report in formato A4 nella lingua dell'app, con nome del negozio, periodo, modalità imposta, valuta e le sezioni del report. I negozi in Australia, Nuova Zelanda, Singapore e Regno Unito ottengono prima le Caselle della dichiarazione; seguono le schede dell'imposta sugli acquisti, quando presenti. Nell'anteprima, firma o annota con Annotazione per condividere il file annotato; esportare di nuovo lo stesso periodo scrive una copia pulita."
        ]
      },
      {
        "type": "h2",
        "text": "Formattazione per i software di contabilità"
      },
      {
        "type": "p",
        "text": "I file CSV sono in UTF-8 e separati da virgole, con nomi di colonna fissi in inglese in qualsiasi lingua dell'app, così i software di contabilità possono leggerli. Gli importi usano i decimali della valuta e il segno meno, senza simbolo né separatore delle migliaia (ad esempio 80.97, -40.00 oppure 1000 per un negozio in yen). Le date hanno il formato 2026-11-03."
      },
      {
        "type": "p",
        "text": "Le celle di testo che iniziano con =, +, - o @ (ad esempio un cliente di nome =1+1) ricevono un ' iniziale, così i fogli di calcolo mostrano testo invece di eseguire una formula. Gli importi non lo ricevono mai."
      },
      {
        "type": "p",
        "text": "I nomi dei file riportano il periodo, ad esempio tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx e tax-report_2026-11-01_2026-11-30.pdf, così i file di periodi diversi non si sovrascrivono mai."
      },
      {
        "type": "h2",
        "text": "Permessi e privacy"
      },
      {
        "type": "p",
        "text": "Ogni piano può esportare, Lite compreso. I collaboratori hanno bisogno del permesso Report, lo stesso richiesto per Report imposte."
      },
      {
        "type": "p",
        "text": "I file con l'imposta sugli acquisti chiedono prima le approvazioni di cui hanno bisogno le loro schede: Costi e utile per gli ordini d'acquisto e Conto economico e spese per le spese. Vale per Righe imposta sugli acquisti (CSV), più la Cartella di lavoro Excel (XLSX) e il Report PDF quando compaiono le schede dell'imposta sugli acquisti. Annullando non viene scritto nulla; i tre CSV delle vendite non lo chiedono mai."
      },
      {
        "type": "note",
        "text": "Tutti i documenti (CSV) contiene i nomi dei clienti e i file con l'imposta sugli acquisti contengono nomi e ID fiscali dei fornitori. Condividili solo con chi deve vederli."
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
    "question": "Come registro l'imposta sugli acquisti (IVA o GST sulle fatture dei fornitori)?",
    "keywords": [
      "imposta sugli acquisti",
      "IVA",
      "GST",
      "Detrazione imposta sugli acquisti",
      "Imposta sugli acquisti degli ordini d'acquisto",
      "Imposta sugli acquisti delle spese",
      "ID fiscale del fornitore",
      "ordini d'acquisto",
      "report imposte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Attiva Detrazione imposta sugli acquisti in Impostazioni → Info negozio per registrare l'imposta detraibile delle fatture dei fornitori su ordini d'acquisto e spese. Entrambi i moduli avranno una sezione Imposta sugli acquisti in cui copiare l'imposta detraibile da ogni fattura. Il report imposte la elenca in due schede, Imposta sugli acquisti degli ordini d’acquisto e Imposta sugli acquisti delle spese."
      },
      {
        "type": "h2",
        "text": "Attivare Detrazione imposta sugli acquisti"
      },
      {
        "type": "steps",
        "items": [
          "Apri Impostazioni → Info negozio e trova la scheda delle imposte.",
          "Sotto Applica imposta, attiva Detrazione imposta sugli acquisti."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Scheda delle imposte di Info negozio con Detrazione imposta sugli acquisti attivata e il suo suggerimento sotto"
      },
      {
        "type": "p",
        "text": "Detrazione imposta sugli acquisti compare solo quando il negozio ha almeno un'imposta ed è disattivata per i nuovi negozi e dopo l'aggiornamento. L'interruttore si salva subito e viene registrato in Impostazioni imposta nel Registro attività. Quando è attiva, inserisci prezzi d'acquisto e costi dei prodotti al netto dell'imposta detraibile; l'imposta non detraibile resta nel costo."
      },
      {
        "type": "note",
        "text": "Ogni piano ha l'interruttore Detrazione imposta sugli acquisti, mentre Acquisti richiede Standard o superiore. Disattivarlo nasconde i campi sui nuovi record; i record esistenti mantengono la loro imposta sugli acquisti e il loro importo da pagare, e i report imposte passati restano invariati."
      },
      {
        "type": "h2",
        "text": "Ordini d'acquisto"
      },
      {
        "type": "steps",
        "items": [
          "Apri Acquisti e tocca Nuovo acquisto.",
          "Inserisci i prezzi unitari al netto dell'imposta detraibile, poi scorri oltre i costi extra fino a Imposta sugli acquisti.",
          "Controlla Data fattura, che per impostazione predefinita è la data dell'ordine, e aggiungi se vuoi Numero fattura e ID fiscale del fornitore.",
          "Scegli un'imposta del negozio per Aliquota, oppure Altra aliquota… per digitare fino a 3 decimali, ad esempio 9.975%.",
          "Controlla Al netto dell’imposta, che parte dal totale dell'ordine al netto dell'imposta, e copia Imposta detraibile dalla fattura.",
          "Tocca Aggiungi un’aliquota per altre aliquote."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Ordine d'acquisto con la sezione Imposta sugli acquisti, i campi della fattura, una riga di aliquota e i totali"
      },
      {
        "type": "p",
        "text": "Imposta detraibile parte vuota; DingPOS non la calcola mai dall'aliquota e accetta gli arrotondamenti della fattura. Ad esempio, farina 10 × $300 più $100 di spedizione sulla fattura AB-12345678 del 30 giugno 2026, con una riga al 5% di Al netto dell’imposta $3,100 e Imposta detraibile $155, dà Totale al netto dell’imposta $3,100, Imposta sugli acquisti $155 e Importo da pagare $3,255, che compare nell'elenco, nel dettaglio dell'ordine e in Da pagare. Un ID fiscale del fornitore indicato sul fornitore compila i nuovi ordini; gli ordini salvati mantengono il proprio."
      },
      {
        "type": "p",
        "text": "Se una fattura arriva in ritardo, apri l'ordine ricevuto e tocca Registra imposta sugli acquisti nella scheda Imposta sugli acquisti, oppure Modifica per cambiarla. Cambia solo l'Importo da pagare; giacenza, costo dei prodotti e stato pagato o non pagato restano invariati. Gli ordini stornati mantengono Imposta sugli acquisti in sola lettura e gli ordini salvati prima dell'aggiornamento non vengono compilati retroattivamente."
      },
      {
        "type": "h2",
        "text": "Spese"
      },
      {
        "type": "p",
        "text": "In Utile → Spese una tantum, il modulo aggiunge Numero fattura e le righe dell'imposta sugli acquisti sotto l'importo. Mantieni l'importo al netto dell'imposta detraibile e copia solo l'imposta detraibile. Su una fattura di cancelleria da $1,100 con $100 detraibili, inserisci $1,000 e una riga al 10% di $1,000 e $100; Con imposta mostra $1,100 e Utile conta $1,000. La sua imposta sugli acquisti è conteggiata per intero alla data della spesa, senza mai seguire Mese conteggiato né una ripartizione."
      },
      {
        "type": "p",
        "text": "In Utile → Spese fisse, apri una spesa salvata come affitto o utenze e tocca Registra una fattura in Fatture man mano che arriva ogni fattura, con la data della fattura, il numero fattura facoltativo e almeno una riga di aliquota. Se l'affitto è $30,000 al mese e le fatture di luglio e agosto riportano ciascuna una riga al 5% di $30,000 e $1,500, il report luglio–settembre contiene $3,000 di imposta sugli acquisti mentre Utile conta comunque $30,000 ogni mese."
      },
      {
        "type": "p",
        "text": "Salvare una modifica all'imposta sugli acquisti in un mese passato chiede Salvare la modifica? e avvisa che il report imposte di quel mese cambia se hai già presentato la dichiarazione. Le modifiche al mese corrente e le bozze si salvano senza chiedere."
      },
      {
        "type": "note",
        "text": "DingPOS non calcola l'IVA all'importazione, l'inversione contabile (reverse charge) né la detrazione parziale. Copia l'imposta detraibile dalla fattura e metti l'imposta che non puoi detrarre nell'importo al netto dell'imposta."
      },
      {
        "type": "h2",
        "text": "Report imposte"
      },
      {
        "type": "p",
        "text": "Dopo le schede delle vendite ci sono due schede: Imposta sugli acquisti degli ordini d’acquisto e Imposta sugli acquisti delle spese. Ognuna elenca una riga per aliquota, una riga Nessuna imposta sugli acquisti e i totali di Al netto dell’imposta, Imposta detraibile e Con imposta. I totali comprendono gli acquisti senza imposta sugli acquisti, anche se alcune dichiarazioni considerano solo le righe con imposta sugli acquisti."
      },
      {
        "type": "list",
        "items": [
          "Gli ordini d'acquisto contano alla Data fattura, o alla data dell'ordine se vuota.",
          "Gli ordini d'acquisto stornati contano come importo negativo alla data dello storno.",
          "Le spese una tantum contano per intero alla data della spesa.",
          "Le fatture delle spese fisse contano alla data della fattura."
        ]
      },
      {
        "type": "p",
        "text": "Imposta sugli acquisti degli ordini d’acquisto richiede Costi e utile e Imposta sugli acquisti delle spese richiede Conto economico e spese; i collaboratori senza un permesso vedono Chiedi l’approvazione di un responsabile sotto il titolo della scheda. Il riquadro Imposta mostra comunque solo l'imposta incassata sulle vendite, mai al netto dell'imposta sugli acquisti, perché il metodo semplificato giapponese e il flat rate del Regno Unito funzionano diversamente. I negozi in Australia, Nuova Zelanda, Singapore e Regno Unito vedono questi importi anche nelle Caselle della dichiarazione."
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
    "question": "Dov'è il report imposte e come si legge?",
    "keywords": [
      "report imposte",
      "Report imposte",
      "IVA",
      "GST",
      "imposta sulle vendite",
      "Report",
      "Imposta",
      "Vendite e imposta per aliquota",
      "Per metodo di pagamento"
    ],
    "content": [
      {
        "type": "p",
        "text": "Apri Report e tocca il riquadro Imposta per vedere Report imposte, che elenca vendite e imposta per aliquota per il periodo mostrato da Report. Copia questi importi in una dichiarazione IVA, GST o dell'imposta sulle vendite, oppure inviali a un commercialista. Le modifiche successive alle imposte non alterano mai gli importi dei documenti già registrati."
      },
      {
        "type": "h2",
        "text": "Aprire il report imposte"
      },
      {
        "type": "steps",
        "items": [
          "Apri Report e scegli il periodo, ad esempio Questo mese o un intervallo personalizzato.",
          "Trova il riquadro Imposta nella seconda riga, dopo Sconti totali.",
          "Tocca il riquadro Imposta o Report imposte ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Report su Questo mese con il riquadro Imposta e la sua riga in fondo Report imposte ›"
      },
      {
        "type": "p",
        "text": "Questo riquadro è l'unico accesso. Il suo sottotitolo indica le imposte incassate nel periodo, a partire dall'importo maggiore: due per nome, tre o più come, ad esempio, 3 imposte, tra cui PST 7%. L'intestazione mostra il periodo di Report (Questo mese · 1/11 – 30/11) senza selettore del periodo né scorciatoia al mese scorso, perché i periodi di dichiarazione variano (Taiwan due mesi, Australia un trimestre, Giappone un anno)."
      },
      {
        "type": "p",
        "text": "I negozi senza imposte e senza vendite tassate nel periodo non vedono il riquadro Imposta; i periodi senza documenti mostrano lo stato vuoto di Report. Le imposte eliminate mantengono il riquadro per i periodi che contengono vendite con quelle imposte."
      },
      {
        "type": "note",
        "text": "Ogni piano, compresi Lite e la prova, ha il riquadro, il report e ogni esportazione. I collaboratori hanno bisogno del permesso Report; i ruoli che richiedono approvazione vedono il segnaposto di approvazione finché un responsabile non approva."
      },
      {
        "type": "h2",
        "text": "Leggere il report"
      },
      {
        "type": "p",
        "text": "I negozi in Australia, Nuova Zelanda, Singapore e Regno Unito vedono prima le Caselle della dichiarazione."
      },
      {
        "type": "p",
        "text": "Vendite e imposta per aliquota elenca una riga per aliquota: prima la più alta, poi lo 0% ad aliquota zero e infine Senza imposta (prodotti senza imposta). Le colonne sono Vendite, Resi e storni e Netto, ognuna con Al netto dell’imposta e Imposta; le righe ad aliquota zero e Senza imposta non hanno la riga dell'imposta. Ogni imposta del negozio ha una riga anche senza vendite. Rinominare un'imposta mantiene una sola riga; un cambio di aliquota ne aggiunge una."
      },
      {
        "type": "p",
        "text": "Totali mostra Vendite al netto dell’imposta, Imposta e Vendite con imposta. Con due o più imposte, una nota spiega che una vendita può avere più imposte, quindi le vendite delle singole righe non si possono sommare; Vendite al netto dell’imposta conta ogni vendita una sola volta. Per un trimestre nel Regno Unito, IVA 20% potrebbe mostrare Al netto dell’imposta £1,000 e Imposta £200, Aliquota zero 0% £300 e Senza imposta £50: Totali dà Vendite al netto dell’imposta £1,350, Imposta £200, Vendite con imposta £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Report imposte con le righe di Vendite e imposta per aliquota e Totali sotto"
      },
      {
        "type": "list",
        "items": [
          "Per metodo di pagamento elenca i pagamenti di questi documenti alla fine del periodo, gli importi non pagati come Crediti da clienti e l'arrotondamento contanti in una riga Incl. arrotondamento contanti … dentro la riga dei contanti.",
          "Non conteggiati come vendite compare solo per gli acconti trattenuti: elenca Acconti trattenuti con un sottotitolo che invita a verificare la dichiarazione con un commercialista, e non si somma né alle vendite né all'imposta.",
          "I negozi con Detrazione imposta sugli acquisti attiva, o con imposta sugli acquisti registrata nel periodo, vedono anche Imposta sugli acquisti degli ordini d’acquisto e Imposta sugli acquisti delle spese."
        ]
      },
      {
        "type": "h2",
        "text": "In quale giorno viene conteggiato ogni documento"
      },
      {
        "type": "p",
        "text": "Tocca ⓘ accanto a Vendite e imposta per aliquota:"
      },
      {
        "type": "list",
        "items": [
          "Uno storno viene conteggiato nel periodo in cui è stato stornato, come importo negativo, così un periodo già dichiarato non cambia mai. Report, invece, lo toglie dal periodo della vendita.",
          "Un reso viene conteggiato alla propria data. In un cambio, gli articoli nuovi contano come vendite e quelli restituiti come resi.",
          "Un preordine conta nel giorno del ritiro; una vendita a credito nel giorno della vendita."
        ]
      },
      {
        "type": "p",
        "text": "Una vendita del 30/10 stornata il 2/11 resta nelle Vendite di ottobre e compare come importo negativo in Resi e storni di novembre. Saldare più tardi una vendita a credito non la sposta."
      },
      {
        "type": "h2",
        "text": "Imposta incassata e totali di Report"
      },
      {
        "type": "p",
        "text": "Il riquadro Imposta è uguale al totale Imposta di Report imposte. Differisce dalla riga Imposta di Dai ricavi all’utile lordo di Report solo per gli storni a cavallo di periodi, perché Report toglie una vendita stornata dal periodo originale."
      },
      {
        "type": "note",
        "text": "Report imposte mostra l'imposta incassata sulle vendite, mai l'imposta da versare (imposta sulle vendite meno imposta sugli acquisti), perché non tutti i paesi la calcolano così, come il metodo semplificato giapponese o il Flat Rate Scheme del Regno Unito."
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
    "question": "Quali importi vanno nelle caselle della dichiarazione BAS, GST o IVA?",
    "keywords": [
      "Caselle della dichiarazione",
      "Report imposte",
      "Report",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "dichiarazione IVA",
      "Detrazione imposta sugli acquisti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Per i negozi in Australia, Nuova Zelanda, Singapore o Regno Unito, Report imposte si apre con Caselle della dichiarazione, che mostra ogni casella e l'importo tratto dallo stesso report. Copre Australia BAS · Simpler BAS, Nuova Zelanda GST101A, Singapore GST F5 e Dichiarazione IVA del Regno Unito con ogni piano."
      },
      {
        "type": "h2",
        "text": "Aprire Caselle della dichiarazione"
      },
      {
        "type": "steps",
        "items": [
          "Apri Report.",
          "Tocca il riquadro Imposta per aprire Report imposte."
        ]
      },
      {
        "type": "p",
        "text": "Caselle della dichiarazione è la prima scheda, sopra Vendite e imposta per aliquota, e il suo sottotitolo indica la dichiarazione. Ogni importo proviene dallo stesso report, centesimi compresi, e nulla viene ricalcolato. Il report PDF esportato si apre con la stessa scheda. I negozi configurati prima che l'app registrasse il paese contano in base alla valuta (AUD, NZD, SGD o GBP); gli altri negozi non hanno la scheda Caselle della dichiarazione."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Scheda Caselle della dichiarazione in cima a Report imposte con le caselle 1, 4, 6 e 7 della Dichiarazione IVA del Regno Unito"
      },
      {
        "type": "h2",
        "text": "Australia BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Vendite con GST, comprese quelle esenti da GST e non tassate; rispondi Yes a «Does the amount shown at G1 include GST?»",
          "1A GST on sales: Imposta sulle vendite",
          "1B GST on purchases: Imposta detraibile su ordini d’acquisto e spese"
        ]
      },
      {
        "type": "p",
        "text": "L'ATO richiede dollari interi: nel BAS ometti i centesimi, senza mai arrotondare per eccesso."
      },
      {
        "type": "h2",
        "text": "Nuova Zelanda GST101A"
      },
      {
        "type": "list",
        "items": [
          "Casella 5 Total sales and income: Vendite con GST, comprese quelle ad aliquota zero, escluse quelle non tassate",
          "Casella 6 Zero-rated supplies: Vendite ad aliquota zero",
          "Casella 11 Total purchases and expenses: Ordini d’acquisto e spese con GST, GST inclusa; esclusi gli acquisti senza imposta sugli acquisti o ad aliquota zero"
        ]
      },
      {
        "type": "p",
        "text": "myIR calcola le caselle 8 e 12 come 3/23, un valore che può differire di pochi centesimi dall'imposta del report."
      },
      {
        "type": "h2",
        "text": "Singapore GST F5"
      },
      {
        "type": "list",
        "items": [
          "Casella 1 Total value of standard-rated supplies: Vendite tassate al netto dell’imposta",
          "Casella 2 Total value of zero-rated supplies: Vendite ad aliquota zero; solo esportazioni e servizi internazionali possono essere ad aliquota zero",
          "Casella 5 Total value of taxable purchases: Ordini d’acquisto e spese con GST o ad aliquota zero, al netto dell’imposta; esclusi gli acquisti senza imposta sugli acquisti",
          "Casella 6 Output tax due: Imposta sulle vendite",
          "Casella 7 Input tax and refunds claimed: Imposta detraibile su ordini d’acquisto e spese"
        ]
      },
      {
        "type": "h2",
        "text": "Dichiarazione IVA del Regno Unito"
      },
      {
        "type": "list",
        "items": [
          "Casella 1 VAT due on sales and other outputs: Imposta sulle vendite",
          "Casella 4 VAT reclaimed on purchases and other inputs: Imposta detraibile su ordini d’acquisto e spese",
          "Casella 6 Total value of sales and all other outputs excluding any VAT: Vendite al netto dell’imposta, comprese quelle ad aliquota zero, esenti e non tassate",
          "Casella 7 Total value of purchases and all other inputs excluding any VAT: Ordini d’acquisto e spese al netto dell’imposta, compresi gli acquisti senza imposta sugli acquisti; togli eventuali stipendi e imposte locali sugli immobili commerciali (business rates) che hai registrato"
        ]
      },
      {
        "type": "p",
        "text": "Per la contabilità IVA standard; con il Flat Rate Scheme, le caselle 1 e 6 si calcolano in modo diverso. Nel Regno Unito l'IVA su un acconto è dovuta quando lo ricevi; DingPOS registra un preordine al momento del ritiro."
      },
      {
        "type": "p",
        "text": "Esempio di trimestre nel Regno Unito: £1,000 di vendite con IVA 20% al netto dell'imposta (imposta £200), £300 ad aliquota zero, £50 senza imposta, ordini d'acquisto per £400 più £80 di IVA e spese per £250 senza imposta sugli acquisti danno Casella 1 £200, Casella 4 £80, Casella 6 £1,350 e Casella 7 £650."
      },
      {
        "type": "h2",
        "text": "Caselle vuote e accesso dei collaboratori"
      },
      {
        "type": "p",
        "text": "Le caselle che calcola l'ente fiscale e gli importi dovuti sono omessi (Regno Unito caselle 3 e 5; Singapore casella 3, forniture esenti). In Nuova Zelanda e a Singapore le vendite non tassate non rientrano in nessuna casella; chiedi al tuo commercialista se avrebbero dovuto avere l'imposta."
      },
      {
        "type": "p",
        "text": "Le caselle degli acquisti (AU 1B, NZ 11, SG 5 e 7, UK 4 e 7) richiedono Detrazione imposta sugli acquisti, altrimenti mostrano — e Nessuna imposta sugli acquisti registrata, mai 0. La casella 7 del Regno Unito richiede sia Imposta sugli acquisti degli ordini d’acquisto sia Imposta sugli acquisti delle spese; i soli ordini d'acquisto compilano la casella 4 e lasciano la casella 7 come —."
      },
      {
        "type": "p",
        "text": "I collaboratori senza il permesso Conto economico e spese o Costi e utile non vedono le caselle che sommano entrambe le schede finché un responsabile non approva tramite Chiedi l’approvazione di un responsabile."
      },
      {
        "type": "note",
        "text": "Calcolato sulle date di vendita e di fattura; DingPOS non tiene traccia delle date di pagamento. Se dichiari per cassa o per pagamenti, correggi questi importi."
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
    "question": "Come creo una promozione per il mio negozio?",
    "keywords": [
      "promozione",
      "offerta",
      "2x1",
      "soglia di spesa",
      "happy hour",
      "coupon",
      "sconto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vai in Impostazioni → Promozioni. I tipi disponibili includono:"
      },
      {
        "type": "list",
        "items": [
          "Soglia di spesa: spendi X e ottieni Y di sconto oppure il Y% di sconto.",
          "Offerte 2x1 e promozioni sull'ennesimo articolo.",
          "Moltiplicatori di punti bonus.",
          "Offerte riservate a un livello cliente o al mese del compleanno.",
          "Compra A e ricevi B, extra a pagamento e offerte multiple a prezzo fisso."
        ]
      },
      {
        "type": "p",
        "text": "Ogni promozione può essere pianificata (fasce di Happy Hour, giorni della settimana specifici, anche a cavallo della mezzanotte), limitata a prodotti specifici e regolata con priorità, regole di cumulo e limiti di utilizzo. Le promozioni valide si applicano in automatico alla cassa, senza bisogno di codici sconto."
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
    "question": "La promozione non si applica: cosa controllo?",
    "keywords": [
      "promozione",
      "non funziona",
      "non si applica",
      "sconto non applicato",
      "problema",
      "risoluzione problemi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Controlla in ordine le cause più comuni:"
      },
      {
        "type": "steps",
        "items": [
          "Pianificazione: oggi rientra nelle date di validità? Una fascia di Happy Hour limita il giorno o l'orario?",
          "Ambito: gli articoli nel carrello rientrano nei prodotti o nella categoria della promozione? Il prodotto è impostato su Escludi dalle promozioni (i prodotti a prezzo libero lo sono di default)? La soglia di spesa è stata raggiunta?",
          "Destinatari: la promozione è limitata a un livello cliente o al mese del compleanno? Il cliente è stato selezionato alla cassa?",
          "Limiti di utilizzo: è stato raggiunto il limite totale di utilizzi, o quello di questo cliente? Il limite per cliente di una promozione del mese del compleanno si conta per anno solare.",
          "Cumulo: una promozione con priorità più alta e con \"ferma dopo l'applicazione\" la sta bloccando?"
        ]
      },
      {
        "type": "p",
        "text": "Se è tutto in ordine e la promozione non si applica ancora, scrivici via email con uno screenshot delle impostazioni della promozione e ti aiuteremo a capire cosa succede."
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
    "question": "Come funzionano i punti fedeltà?",
    "keywords": [
      "punti",
      "fedeltà",
      "programma fedeltà",
      "premi",
      "riscatto punti",
      "punti di benvenuto",
      "raccolta punti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vai in Impostazioni → Programma fedeltà e definisci due regole: quanti punti Y si guadagnano ogni X spesi e quanti punti N si riscattano per M di sconto (con un limite di riscatto per ordine, facoltativo). Puoi anche assegnare in automatico un bonus di benvenuto ai nuovi clienti. I nuovi negozi partono con i punti disattivati: attiva l'opzione “Attiva programma fedeltà” e imposta una regola. Se l'interruttore è attivo ma non c'è alcuna regola, compare l'avviso “Non è ancora impostata alcuna regola di accumulo o di utilizzo, quindi le vendite non accumuleranno né utilizzeranno punti.”"
      },
      {
        "type": "p",
        "text": "Associa il cliente alla vendita, nel carrello o nella schermata di cassa, e i punti si accumulano in automatico; per riscattarli, inserisci i punti da usare. La schermata di conferma mostra i punti guadagnati e il nuovo saldo, ad esempio “+22 punti · 122 punti in totale”; con una vendita a credito o un preordine non ancora pagato per intero, i punti vengono aggiunti solo quando arriva il pagamento e compare la dicitura “accreditati al saldo” oppure “accreditati al pagamento al ritiro”. Con lo storno di un ordine vengono tolti i punti che aveva fatto guadagnare e restituiti quelli riscattati."
      },
      {
        "type": "p",
        "text": "Per aggiungere o togliere punti a mano (ad esempio per un acquisto non registrato), nella scheda del cliente tocca Rettifica sulla card Punti, scegli Aggiungi o Sottrai, inserisci i punti e, se vuoi, indica un motivo (fino a 100 caratteri). Non puoi sottrarre più punti di quelli che il cliente ha. Ogni rettifica resta nello storico dei punti con il saldo prima e dopo, il motivo e chi l'ha eseguita."
      },
      {
        "type": "note",
        "text": "La rettifica manuale dei punti è disponibile dalla v3.5. Con Pro, ai collaboratori il cui ruolo richiede l'approvazione per la Rettifica manuale dei punti (per il ruolo Collaboratore è così in modo predefinito) viene chiesto il PIN di un responsabile o del titolare al momento della conferma."
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
    "question": "A cosa servono i livelli dei clienti?",
    "keywords": [
      "livello",
      "livelli cliente",
      "vip",
      "gold",
      "passaggio di livello",
      "fidelity card",
      "livello di iscrizione"
    ],
    "content": [
      {
        "type": "p",
        "text": "I livelli dei clienti (ad esempio Base, Silver, Gold) servono a due cose: possono essere il bersaglio delle promozioni (ad esempio il 10% di sconto solo per i Gold) e ti fanno riconoscere a colpo d'occhio lo status del cliente alla cassa."
      },
      {
        "type": "p",
        "text": "I livelli possono salire in automatico in base a regole che definisci tu (ad esempio la spesa cumulata) oppure essere assegnati a mano. Se un ordine stornato aveva fatto scattare un passaggio di livello, il livello torna indietro in automatico."
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
    "question": "Come faccio il backup dei miei dati?",
    "keywords": [
      "backup",
      "icloud",
      "google drive",
      "dropbox",
      "cloud",
      "copia dei dati",
      "salvare i dati"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vai in Impostazioni → Backup su cloud, scegli iCloud, Google Drive o Dropbox e autorizza l'accesso. Da quel momento puoi avviare un backup manuale quando vuoi. Per iCloud, questo iPad deve aver effettuato l'accesso a iCloud con iCloud Drive attivo e DingPOS deve essere autorizzato a usarlo."
      },
      {
        "type": "p",
        "text": "I backup vengono salvati nel tuo account cloud. Ogni cloud conserva solo l'ultimo: una copia nel cloud dei dati e un file con le foto dei prodotti. Ogni nuovo backup sovrascrive il precedente."
      },
      {
        "type": "note",
        "text": "Poiché un nuovo backup sostituisce il vecchio, se sospetti che i tuoi dati siano già compromessi (per esempio, un gruppo di prodotti eliminato per errore), non fare ancora il backup: scrivici e decideremo insieme come procedere."
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
    "question": "Il backup iCloud mostra “Non connesso”: cosa devo fare?",
    "keywords": [
      "icloud",
      "non connesso",
      "icloud drive",
      "backup non riuscito",
      "impossibile connettersi"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS mostra iCloud come connesso solo quando può davvero usarlo. Se vedi Non connesso, controlla tre cose nell'app Impostazioni dell'iPad:"
      },
      {
        "type": "steps",
        "items": [
          "Hai effettuato l'accesso con il tuo account Apple.",
          "iCloud Drive è attivo.",
          "DingPOS è autorizzato a usare iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Quando tutte e tre sono attive, torna in Backup su cloud in DingPOS e iCloud risulterà connesso. I backup vengono salvati nella cartella di DingPOS in iCloud Drive."
      },
      {
        "type": "note",
        "text": "Nelle versioni precedenti alla v3.0 il backup su iCloud non funzionava e falliva sempre con “Backup.SyncError error 0”. Come prima cosa, aggiorna DingPOS dall'App Store."
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
    "question": "Come trasferisco i miei dati su un nuovo iPad?",
    "keywords": [
      "trasferire",
      "nuovo ipad",
      "ripristino",
      "migrare",
      "spostare i dati",
      "cambiare ipad"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Vecchio iPad: vai in Impostazioni → Backup su cloud ed esegui un backup manuale. Controlla che l'ora del backup si sia aggiornata.",
          "Nuovo iPad: installa DingPOS e completa la configurazione guidata.",
          "Nuovo iPad: vai in Impostazioni → Backup su cloud, collega lo stesso account cloud e ripristina."
        ]
      },
      {
        "type": "p",
        "text": "Toccando Ripristina si apre prima un'anteprima: i numeri di prodotti, ordini e clienti di questo iPad e della copia nel cloud affiancati, più tutti gli ordini che il ripristino rimuoverebbe. Su questo iPad non cambia nulla finché non confermi. Se la copia nel cloud è stata creata da una versione più recente di DingPOS, ti verrà chiesto di aggiornare prima l'app. Vengono ripristinate anche le foto dei prodotti."
      },
      {
        "type": "note",
        "text": "Un ripristino sostituisce tutti i dati di questo iPad con quelli del backup: gli ordini creati su questo iPad dopo quel backup andranno persi. Assicurati di essere collegato all'account cloud giusto; se hai ripristinato quello sbagliato, usa Annulla ripristino."
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
    "question": "Se elimino l'app, i miei dati vengono conservati?",
    "keywords": [
      "eliminare",
      "disinstallare",
      "perdita di dati",
      "rimuovere l'app",
      "cancellare app"
    ],
    "content": [
      {
        "type": "p",
        "text": "No. DingPOS salva tutto in locale sul tuo dispositivo: eliminando l'app si eliminano definitivamente prodotti, ordini, clienti fedeltà e impostazioni, a meno che tu non abbia attivato il backup su cloud."
      },
      {
        "type": "note",
        "text": "Prima di eliminare l'app, esegui sempre un backup manuale e verifica che sia riuscito. Dopo averla reinstallata, ripristina i dati dal cloud."
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
    "question": "All'apertura dell'app compare “Impossibile aprire i dati del negozio”: cosa faccio?",
    "keywords": [
      "impossibile aprire",
      "l'app non si apre",
      "crash",
      "si chiude all'avvio",
      "database",
      "dati del negozio"
    ],
    "content": [
      {
        "type": "p",
        "text": "Non eliminare l'app. Questa schermata significa che DingPOS non è riuscito a leggere i dati del tuo negozio, ma i dati sono ancora su questo iPad: eliminando l'app, li elimini insieme a lei."
      },
      {
        "type": "p",
        "text": "Tocca prima Riprova; se funziona, l'app si apre come al solito. Se il problema si ripresenta, tocca Contatta l’assistenza e scrivici: ti aiuteremo a recuperare i dati. Questa schermata non sposta né elimina mai alcun file."
      },
      {
        "type": "p",
        "text": "Il primo avvio dopo un aggiornamento, o dopo il ripristino di un backup di una versione precedente, può mostrare prima “Aggiornamento dei dati in corso…”. Sono i dati del tuo negozio che passano a un formato più recente: più dati hai, più ci vuole. Quando ha finito, l'app si apre da sola. Non si è bloccata."
      },
      {
        "type": "note",
        "text": "La causa più comune è la chiusura dell'app nel bel mezzo di un ripristino. Prima della v3.0 questo faceva andare in crash l'app a ogni avvio; dalla v3.0 si ferma invece su questa schermata."
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
    "question": "Posso usare due iPad insieme?",
    "keywords": [
      "due ipad",
      "più dispositivi",
      "sincronizzazione",
      "condividere",
      "seconda cassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Per ora i dati di ogni iPad sono indipendenti: la condivisione in tempo reale di un unico archivio tra due dispositivi non è ancora supportata."
      },
      {
        "type": "p",
        "text": "Puoi copiare i dati da un iPad all'altro tramite il backup su cloud (backup → ripristino), una soluzione comoda per cambiare dispositivo o per preparare un secondo iPad. Gli ordini registrati separatamente su ciascun dispositivo, però, non vengono uniti automaticamente. La sincronizzazione tra più dispositivi è nei nostri piani."
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
    "question": "Ho ripristinato il backup sbagliato: posso annullare?",
    "keywords": [
      "annulla ripristino",
      "ripristino",
      "copia sbagliata",
      "registro ripristino",
      "dati persi",
      "tornare indietro"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Ogni ripristino dal cloud conserva i dati sostituiti come copia pre-ripristino. In Impostazioni → Backup su cloud, una scheda mostra quando è avvenuto l'ultimo ripristino e da quale copia nel cloud proveniva. Tocca Annulla ripristino, controlla l'anteprima e conferma: i dati tornano com'erano prima del ripristino e l'app si ricarica."
      },
      {
        "type": "list",
        "items": [
          "Annulla ripristino è a sua volta un ripristino e conserva un'altra copia di ciò che sostituisce, quindi toccandolo di nuovo si torna allo stato precedente.",
          "Viene conservata solo l'ultima copia; il ripristino successivo la sostituisce.",
          "Tornano solo i dati: i prodotti aggiunti dopo la copia mostrano un'immagine mancante."
        ]
      },
      {
        "type": "p",
        "text": "Per vedere chi ha ripristinato, quando e da quale copia nel cloud, tocca Mostra registro ripristino nella stessa schermata: per ogni ripristino trovi ora, operatore, origine, numero di prodotti / ordini / clienti prima e dopo, e tutti gli ordini rimossi. I registri restano su questo iPad e non vengono mai sostituiti da un ripristino."
      },
      {
        "type": "note",
        "text": "L'anteprima del ripristino e Annulla ripristino sono disponibili in ogni piano; la consultazione del registro ripristino è una funzione Pro. I registri vengono scritti anche senza Pro (solo senza operatore), quindi abbonandoti a Pro in seguito li vedrai tutti."
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
    "question": "Come aggiungo i collaboratori e cambio chi è alla cassa?",
    "keywords": [
      "collaboratori",
      "dipendenti",
      "responsabile",
      "account",
      "PIN",
      "operatore",
      "cambio turno",
      "cassiere",
      "aggiungere collaboratore"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tocca Collab. nella barra laterale. La prima volta configura il titolare: un nome e un PIN di 4 cifre. Per aggiungere collaboratori e modificare i permessi serve questo PIN, quindi ricordalo: non può essere reimpostato."
      },
      {
        "type": "steps",
        "items": [
          "Nella pagina Collab. tocca Aggiungi collaboratore, inserisci un nome, scegli un ruolo (Responsabile o Collaboratore) e imposta un PIN di 4 cifre.",
          "L'operatore attuale compare in fondo alla barra laterale e in alto a destra nella cassa. Al cambio turno toccalo, scegli il tuo nome e inserisci il tuo PIN.",
          "Da quel momento ogni ordine, pagamento e movimento di giacenza o di punti registra chi se n'è occupato, visibile nell'elenco e nel dettaglio dell'ordine; gli ordini stornati registrano anche chi li ha stornati."
        ]
      },
      {
        "type": "p",
        "text": "Quando qualcuno se ne va, usa Disattiva questo collaboratore: la sua cronologia resta intatta e potrai riattivarlo in seguito. Rinominare non modifica i vecchi ordini, che mantengono il nome di allora."
      },
      {
        "type": "note",
        "text": "Collaboratori è una funzione Pro (disponibile anche durante la prova). Se il Pro termina, i dati dei collaboratori e chi ha gestito ogni ordine vengono conservati e i nuovi ordini sono registrati a nome del titolare; riabbonandoti al Pro ritrovi tutto."
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
    "question": "Cosa succede se dimentico il PIN del titolare?",
    "keywords": [
      "PIN",
      "dimenticato",
      "password",
      "reimpostare",
      "titolare",
      "recuperare",
      "bloccato"
    ],
    "content": [
      {
        "type": "p",
        "text": "Il PIN del titolare non può essere reimpostato e nemmeno la nostra assistenza può sbloccarlo. Il PIN è salvato insieme ai dati del negozio, quindi eliminando e reinstallando l'app e poi ripristinando dal cloud, ritrovi lo stesso PIN."
      },
      {
        "type": "p",
        "text": "Quando crei il titolare e a ogni modifica del suo PIN compare l'avviso «Ricorda questo PIN. Se lo dimentichi, non può essere reimpostato.» Conservalo in un posto a cui puoi accedere solo tu."
      },
      {
        "type": "p",
        "text": "Senza il PIN del titolare resta inaccessibile tutto ciò che lo richiede: aggiungere o modificare collaboratori, cambiare i permessi dei ruoli e consultare il registro attività. I collaboratori possono continuare a fare cassa e a lavorare ogni giorno con i propri PIN."
      },
      {
        "type": "note",
        "text": "Se un collaboratore dimentica il proprio PIN, nessun problema: il titolare può reimpostarlo in Collab."
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
    "question": "Come funzionano i permessi dei collaboratori e le approvazioni del responsabile?",
    "keywords": [
      "permessi",
      "approvazione",
      "responsabile",
      "sconto massimo del ruolo",
      "collaboratori",
      "costo",
      "ruolo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Un permesso ha due valori: Consentito o Richiede approvazione; niente è vietato in modo assoluto. Quando un collaboratore tenta un'azione che richiede approvazione, un collega autorizzato a farla sceglie il proprio nome e inserisce il PIN per darle il via libera."
      },
      {
        "type": "list",
        "items": [
          "Azioni (rettifica manuale della giacenza, rettifica manuale dei punti, gestione prodotti, pagamento oltre lo sconto massimo del ruolo): un'approvazione vale per quella sola azione.",
          "Schermate (costi e utile, Report, conto economico e spese, Impostazioni, backup e ripristino): un'approvazione sblocca finché l'operatore non cambia o l'app va in background.",
          "Lo sconto massimo del ruolo si applica agli sconti manuali e viene controllato una sola volta al pagamento; le promozioni automatiche e il riscatto dei punti non vengono conteggiati."
        ]
      },
      {
        "type": "p",
        "text": "Impostazioni di fabbrica: i Responsabili possono fare tutto tranne backup e ripristino e conto economico e spese, senza sconto massimo del ruolo; i Collaboratori richiedono approvazione per tutto, con uno sconto massimo del ruolo del 10%. Il titolare è sempre autorizzato e non è modificabile. Per cambiarle, vai in Collab. → Permessi dei ruoli, tocca Modifica e salva una volta: la modifica vale subito per tutti."
      },
      {
        "type": "note",
        "text": "Storni, resi, vendite a credito e acquisti non hanno volutamente alcun permesso: registrano solo chi se n'è occupato. Per rivederli in seguito usa il registro attività."
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
    "question": "Come vedo chi ha stornato un ordine, rettificato la giacenza o cambiato un prezzo?",
    "keywords": [
      "registro attività",
      "controllo",
      "chi ha modificato",
      "storno",
      "cambio prezzo",
      "rettifica giacenza",
      "prodotto eliminato",
      "approvazioni",
      "log"
    ],
    "content": [
      {
        "type": "p",
        "text": "Usa il registro attività. Nella pagina Collab. tocca Registro attività in alto a destra e inserisci il PIN del titolare per vedere le operazioni sensibili del negozio, dalla più recente: storni, resi, rettifiche della giacenza e riconteggi, rettifiche manuali dei punti, approvazioni, modifiche a collaboratori e permessi, modifiche al PIN del titolare, modifiche alle impostazioni delle imposte, modifiche a prezzo e costo dei prodotti ed eliminazioni di prodotti. I normali pagamenti in cassa non sono elencati."
      },
      {
        "type": "list",
        "items": [
          "Ogni voce mostra cosa ha riguardato, chi ha fatto cosa e quando, e il risultato, per esempio «M prezzo $390 → $350». Il motivo indicato per uno storno, un reso, una rettifica della giacenza o una rettifica dei punti si trova sulla terza riga della voce.",
          "Filtra per collaboratore (inclusi quelli disattivati), tipo di azione e Oggi / Questa settimana / Questo mese.",
          "Tocca una voce che rimanda a un ordine, un prodotto o un cliente per aprirne il dettaglio.",
          "Il dettaglio dell'ordine, quello del prodotto e la pagina di ogni collaboratore hanno un accesso dedicato che elenca solo le registrazioni che li riguardano.",
          "I prodotti eliminati mostrano comunque nel registro il nome e il prezzo di allora."
        ]
      },
      {
        "type": "note",
        "text": "La registrazione è attiva con tutti i piani; solo la consultazione è una funzione Pro, quindi le registrazioni fatte mentre il Pro era scaduto compaiono quando ti riabboni. Il registro è incluso nei backup sul cloud."
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
    "question": "Come funziona la prova gratuita di DingPOS?",
    "keywords": [
      "prova gratuita",
      "gratis",
      "30 giorni",
      "periodo di prova"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dalla prima installazione hai 30 giorni con tutte le funzioni del piano Pro, compresi collaboratori, permessi e registro attività, senza bisogno di creare un account."
      },
      {
        "type": "p",
        "text": "Se ti abboni a un piano durante la prova, la prova termina subito e da quel momento vale il piano acquistato. Dopo la prova, le funzioni Pro come collaboratori e registro attività restano disponibili solo con un abbonamento Pro. I report avanzati non richiedono un abbonamento Pro: dalla v3.4 ogni piano li include."
      },
      {
        "type": "p",
        "text": "Negli ultimi 7 giorni e nell'ultimo giorno, l'app ti ricorda una volta per ciascuno quanti giorni restano, che la cassa si ferma alla fine della prova e che i tuoi dati vengono conservati."
      },
      {
        "type": "p",
        "text": "Tutto ciò che crei durante la prova (prodotti, ordini, clienti fedeltà) viene conservato per intero. I tuoi dati non vengono mai eliminati, che tu ti abboni o no in seguito."
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
    "question": "Cosa succede ai miei dati quando finisce la prova gratuita?",
    "keywords": [
      "prova scaduta",
      "fine prova",
      "cassa bloccata",
      "dati"
    ],
    "content": [
      {
        "type": "p",
        "text": "I dati non spariscono: restano sul tuo dispositivo per sempre. Quando la prova finisce la cassa si blocca, ma puoi comunque consultare gli ordini, vedere i report e gestire i prodotti."
      },
      {
        "type": "p",
        "text": "Abbonati quando vuoi e la cassa si sblocca subito, con tutti i tuoi dati esattamente come li avevi lasciati."
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
    "question": "Che differenza c'è tra i piani Lite, Standard e Pro?",
    "keywords": [
      "piani",
      "lite",
      "standard",
      "pro",
      "differenza",
      "confronto",
      "passare a un piano superiore",
      "passare a un piano inferiore",
      "prezzi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tutti e tre i piani includono cassa completa, prodotti, ordini (con storni, resi e cambi), report (report avanzati e conto economico mensile inclusi dalla v3.4, report imposte e relativa esportazione dalla v3.6) e backup nel cloud. Cambiano gli strumenti per gestire il negozio:"
      },
      {
        "type": "list",
        "items": [
          "Lite: per chi gestisce un banco da solo e ha bisogno di cassa e prodotti.",
          "Standard: aggiunge promozioni, sconti predefiniti, punti fedeltà e livelli clienti, gestione del magazzino, acquisti, vendite a credito, preordini e tariffe delle commissioni di pagamento.",
          "Pro: aggiunge collaboratori e permessi, approvazione del responsabile, registro attività e registro ripristino, pensato per i negozi con personale."
        ]
      },
      {
        "type": "p",
        "text": "Hai già il piano Standard? Passa a Pro dalla pagina Abbonamento: la fatturazione resta sullo stesso ciclo, il passaggio ha effetto subito e Apple calcola in proporzione la differenza. Il passaggio da Pro a Standard ha effetto al rinnovo. I prezzi sono mostrati nell'app e puoi confrontare i piani nella nostra pagina Prezzi."
      },
      {
        "type": "note",
        "text": "Passare a un piano inferiore non elimina mai i dati. Le funzioni non incluse nel tuo piano vengono sospese, i dati restano e, abbonandoti di nuovo, le funzioni tornano disponibili."
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
    "question": "Come faccio ad abbonarmi, disdire l'abbonamento o ripristinare un acquisto?",
    "keywords": [
      "abbonarsi",
      "disdire abbonamento",
      "annullare abbonamento",
      "ripristinare acquisti",
      "prezzo",
      "fatturazione"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gli abbonamenti passano dagli acquisti in-app dell'App Store: piani e prezzi sono mostrati nell'app. Il pagamento è gestito da Apple e noi non vediamo mai i tuoi dati di pagamento."
      },
      {
        "type": "list",
        "items": [
          "Disdire: gestiscilo da Impostazioni → Account Apple → Abbonamenti sul tuo dispositivo. Disdici almeno 24 ore prima della fine del periodo in corso per evitare il rinnovo.",
          "Ripristinare: dopo aver cambiato dispositivo o reinstallato l'app, tocca \"Ripristina acquisti\" nella pagina Abbonamento di DingPOS.",
          "Cambiare piano: scegli il nuovo piano nella pagina Abbonamento di DingPOS. I passaggi a un piano superiore (da Standard a Pro, da mensile ad annuale) hanno effetto subito e Apple calcola in proporzione la differenza; il passaggio a un piano inferiore ha effetto al rinnovo."
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
    "question": "Come impostare uno sconto a soglia di spesa",
    "keywords": [
      "soglia di spesa",
      "sconto a soglia",
      "spendi e risparmia",
      "guida alla configurazione",
      "come impostare"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vai su Impostazioni → Promozioni → Aggiungi, scegli il tipo con soglia di spesa e poi:"
      },
      {
        "type": "steps",
        "items": [
          "Imposta l’importo della soglia e lo sconto (importo fisso o percentuale).",
          "Scegli a cosa si applica: prodotti specifici, categorie specifiche oppure lascia vuoto per tutto il negozio.",
          "Imposta la pianificazione: la data di inizio è obbligatoria; lascia vuota la data di fine per una promozione senza scadenza.",
          "Tocca Salva: la promozione si attiva secondo la pianificazione e si applica da sola alla cassa, senza bisogno di codici."
        ]
      },
      {
        "type": "note",
        "text": "La soglia viene verificata sul subtotale degli articoli interessati, non sull’intero carrello. Una promozione “spendi 1000 € in Bevande” conta solo le bevande ai fini della soglia, e i prodotti con l’opzione “escludi dalle promozioni” non vengono mai conteggiati."
      },
      {
        "type": "p",
        "text": "Un comportamento su cui ci chiedono spesso: se prima si applica una promozione con priorità più alta, la soglia viene verificata sull’importo già scontato, quindi un carrello che sembra superare la soglia può restarne di poco sotto. Per far valutare la soglia per prima, assegnale un numero di priorità più basso."
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
    "question": "Come impostare le offerte 2×1, 3×2 e “l’N-esimo articolo scontato”",
    "keywords": [
      "2x1",
      "3x2",
      "prendi due paghi uno",
      "bogo",
      "articolo gratis",
      "guida alla configurazione"
    ],
    "content": [
      {
        "type": "p",
        "text": "Crea una promozione del tipo Acquista X / Ottieni Y: imposta quanti articoli acquistare, quanti ottenere e la percentuale di sconto (100% = gratis). Puoi limitarla a prodotti specifici o a un’intera categoria: prodotti diversi della stessa categoria vengono raggruppati insieme."
      },
      {
        "type": "list",
        "items": [
          "L’articolo scontato è il meno caro del gruppo, calcolato al suo prezzo effettivo attuale: se una promozione precedente lo ha già scontato, lo sconto BOGO si basa sul prezzo scontato, non su quello di listino.",
          "Se vuoi che l’etichetta “3° articolo gratis” mostri il prezzo di listino intero, assegna a questa promozione BOGO il numero di priorità più basso, così viene calcolata per prima. Quando uno sconto sull’intero carrello viene eseguito prima, la riduzione mostrata per l’articolo gratis è inferiore al prezzo di listino: è una caratteristica dell’ordine di calcolo, verificata a fondo, non un errore. Con entrambi gli ordini il totale è quasi lo stesso; cambia solo il punto in cui lo sconto risulta visibile."
        ]
      },
      {
        "type": "p",
        "text": "Consiglio: metti la tua offerta principale per prima nella priorità, così il dettaglio degli sconti sullo scontrino corrisponde al messaggio della tua promozione."
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
    "question": "Come impostare i punti doppi e i moltiplicatori di punti",
    "keywords": [
      "moltiplicatore di punti",
      "punti doppi",
      "punti bonus",
      "guida alla configurazione"
    ],
    "content": [
      {
        "type": "p",
        "text": "Crea una promozione del tipo Moltiplicatore di punti e imposta il moltiplicatore (un numero intero pari o superiore a 2). Se vuoi, aggiungi una soglia di spesa (ad es. spendi 500 € → punti doppi) e una pianificazione (ad es. solo il sabato)."
      },
      {
        "type": "list",
        "items": [
          "Quando più moltiplicatori sono validi insieme, si applica solo il più alto: non si moltiplicano né si sommano mai.",
          "La soglia di spesa viene verificata dopo l’utilizzo dei punti: se l’uso dei punti porta il totale sotto la soglia, questa volta il moltiplicatore non scatta.",
          "Per accumulare punti alla cassa deve essere selezionato un cliente: gli ordini senza cliente non fanno guadagnare punti, quindi il moltiplicatore non ha nulla da moltiplicare."
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
    "question": "Come impostare offerte per livello fedeltà e per il compleanno",
    "keywords": [
      "livello fedeltà",
      "compleanno",
      "sconto compleanno",
      "vip",
      "guida alla configurazione"
    ],
    "content": [
      {
        "type": "p",
        "text": "Crea prima i livelli in Impostazioni → Livelli dei membri (ad es. Oro), poi indirizza la promozione a quel livello. Per le offerte di compleanno, imposta i destinatari su “Mese del compleanno” e compila Limite per cliente."
      },
      {
        "type": "list",
        "items": [
          "Il cliente deve essere selezionato alla cassa perché l’offerta scatti: l’idoneità viene valutata sul cliente selezionato in quel momento.",
          "L’idoneità per il compleanno si basa sul mese di compleanno del cliente, quindi compila il campo del compleanno: i clienti che non lo hanno non vengono mai trattati come clienti in compleanno.",
          "Una promozione del mese del compleanno richiede un limite per cliente, contato per anno solare: un limite di 1 significa che ogni cliente può usarla una volta all’anno, e si azzera l’anno successivo. Senza limite non si può salvare.",
          "I passaggi automatici di livello vengono valutati al completamento del pagamento; se l’ordine viene stornato, il passaggio di livello che ha provocato viene annullato automaticamente."
        ]
      },
      {
        "type": "note",
        "text": "Prima della v3.2, una promozione del mese del compleanno mostrava un errore e non si poteva salvare nemmeno con un limite per cliente compilato. Se ti succede, aggiorna DingPOS dall’App Store."
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
    "question": "Come impostare regali, extra a pagamento e offerte multiple a prezzo fisso",
    "keywords": [
      "regalo",
      "extra a pagamento",
      "offerta multipla",
      "prezzo fisso",
      "acquista A ricevi B",
      "guida alla configurazione"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sono disponibili tre tipi di offerte composte: regalo con acquisto (acquista A, ottieni B), extra a pagamento (aggiungi X € per ottenere Y) e offerta multipla a prezzo fisso (qualsiasi N per X €). Regali ed extra a pagamento aspettano la conferma del cassiere; le offerte multiple si applicano in automatico."
      },
      {
        "type": "p",
        "text": "Regali ed extra a pagamento non modificano mai il carrello da soli. Quando le condizioni sono soddisfatte, sulla schermata del cassiere compare un banner con il suggerimento, e il carrello cambia solo quando il cassiere tocca il pulsante del regalo o il pulsante + sul banner (Scegli regalo o Scegli extra). È voluto, perché i regali coinvolgono merce fisica: qualcuno deve verificare che sia disponibile e che il cliente la voglia."
      },
      {
        "type": "list",
        "items": [
          "Dopo aver toccato ✕ (Rifiuta) sul banner, lo stesso suggerimento non ricompare per quel carrello; con un carrello nuovo o svuotato viene riproposto.",
          "Se il carrello non soddisfa più le condizioni (ad esempio perché viene tolto l’articolo che aveva attivato un regalo), il regalo o l’extra viene rimosso in automatico con un messaggio in alto e non conta come utilizzo (dalla v3.6).",
          "Dalla v3.4 le offerte ancora in sospeso non bloccano la cassa: una riga gialla sotto il pulsante di pagamento, ad esempio «1 offerta in sospeso non verrà applicata», indica quante ne restano escluse (toccala per vedere quali) e l'ordine va a buon fine senza di esse. Per far attendere la cassa come prima, attiva Gestisci le proposte prima della cassa in Impostazioni → Preferenze del dispositivo; vale solo per questo iPad.",
          "Le righe di regali ed extra non possono ricevere altri sconti da altre promozioni in denaro e non contano per le soglie delle altre promozioni."
        ]
      },
      {
        "type": "p",
        "text": "Offerte multiple a prezzo fisso (applicate in automatico dalla v2.4): ogni volta che il carrello può formare un’offerta multipla, DingPOS la raggruppa e la include nel totale, senza chiedere conferma; le offerte multiple non si possono dividere."
      },
      {
        "type": "list",
        "items": [
          "Un’offerta multipla si forma solo se rende il carrello più economico. Tra articoli con lo stesso prezzo, vengono raggruppati per primi quelli non scontati, e gli articoli già in sconto mantengono il proprio sconto.",
          "Quali articoli vengono raggruppati dipende solo da ciò che c’è nel carrello, mai dall’ordine in cui sono stati scansionati.",
          "Ogni articolo dell’offerta mostra la sua quota di sconto e l’importo di ogni riga è già al netto degli sconti.",
          "Alla cassa le offerte multiple vengono raggruppate di nuovo con i prezzi più recenti; se il risultato cambia, ti viene chiesto di confermare il nuovo totale."
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
    "question": "Come impostare la pianificazione e l’Happy Hour",
    "keywords": [
      "pianificazione",
      "happy hour",
      "giorni della settimana",
      "mezzanotte",
      "guida alla configurazione"
    ],
    "content": [
      {
        "type": "p",
        "text": "La pianificazione di ogni promozione ha tre livelli: un intervallo di date (inizio obbligatorio, fine facoltativa), una fascia oraria giornaliera (Happy Hour) e i giorni della settimana selezionati. Tutti e tre devono corrispondere perché la promozione scatti."
      },
      {
        "type": "list",
        "items": [
          "Per le fasce che superano la mezzanotte (ad es. 22:00–02:00), il giorno della settimana è quello in cui la fascia inizia: con solo il venerdì selezionato, il sabato alle 01:30 conta ancora come turno del venerdì e la promozione scatta, ma il sabato alle 23:30 no.",
          "La data di fine è un limite rigido: anche se una fascia Happy Hour è ancora in corso, la promozione si ferma nel momento in cui passa la data di fine.",
          "L’ora viene letta dall’orologio dell’iPad, quindi controlla che fuso orario e ora del dispositivo siano corretti."
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
    "question": "Priorità, cumulabilità e interruzione delle promozioni successive: come funzionano",
    "keywords": [
      "priorità",
      "cumulabile",
      "promozioni cumulabili",
      "interrompi promozioni successive",
      "conflitto tra promozioni",
      "guida alla configurazione"
    ],
    "content": [
      {
        "type": "p",
        "text": "Quando più promozioni sono valide insieme, tre impostazioni controllano l’ordine e l’interazione:"
      },
      {
        "type": "list",
        "items": [
          "Priorità: i numeri più bassi vengono calcolati per primi. Trascina per riordinare nell’elenco delle promozioni.",
          "Cumulabile (attiva per impostazione predefinita): se disattivata, una promozione sugli articoli blocca solo le righe che ha scontato, mentre gli altri articoli possono ancora ricevere successive promozioni sugli articoli; una promozione sul carrello non cumulabile blocca tutte le successive promozioni sul carrello.",
          "Interrompi le promozioni successive quando questa si applica: dopo che questa promozione si applica, non vengono calcolati altri sconti in denaro, ma i moltiplicatori di punti e i suggerimenti di regalo non sono interessati."
        ]
      },
      {
        "type": "note",
        "text": "Le promozioni successive si calcolano sull’importo già scontato: 10% di sconto più 5% di sconto non fa il 15%, perché il secondo sconto si applica al totale dopo il primo. Inoltre DingPOS non cerca mai la combinazione più vantaggiosa per il cliente: l’ordine è determinato interamente dalle tue priorità."
      },
      {
        "type": "p",
        "text": "Curiosità: se uno sconto viene arrotondato a zero, l’applicazione non conta e non consuma un limite di utilizzo."
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
    "question": "DingPOS integrerà i pagamenti con carta?",
    "keywords": [
      "pagamenti",
      "pagamento con carta",
      "integrazione",
      "POS bancario",
      "gateway di pagamento"
    ],
    "content": [
      {
        "type": "p",
        "text": "Per ora DingPOS non gestisce il flusso di denaro: i metodi di pagamento sono etichette contabili e i pagamenti veri e propri passano dal tuo terminale o dalla tua app di pagamento attuale."
      },
      {
        "type": "p",
        "text": "Integrare o meno i pagamenti dipende dalla richiesta reale degli utenti. Se ti serve, scrivici indicando il servizio che vorresti collegare (quale gestore, quale terminale) e come lo useresti: diamo priorità allo sviluppo in base al numero di richieste."
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
    "question": "DingPOS supporterà la fattura elettronica e la stampa degli scontrini?",
    "keywords": [
      "fattura elettronica",
      "fattura",
      "scontrino",
      "stampante scontrini",
      "registratore telematico"
    ],
    "content": [
      {
        "type": "p",
        "text": "Non ancora. Fattura elettronica e stampa degli scontrini richiedono l'acquisto di registratori fiscali e stampanti per scontrini su cui testare e sviluppare, un costo considerevole. Siamo un piccolo team: la pianificheremo quando gli utenti saranno cresciuti e le entrate stabili."
      },
      {
        "type": "p",
        "text": "Se ti serve, scrivici indicando il modello che usi: diamo priorità allo sviluppo in base al numero di richieste."
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
    "question": "DingPOS supporta i lettori di codici a barre fisici?",
    "keywords": [
      "lettore codici a barre",
      "scanner",
      "lettore a pistola per codici a barre",
      "bluetooth",
      "usb",
      "hardware"
    ],
    "content": [
      {
        "type": "p",
        "text": "La scansione dei codici a barre con la fotocamera per creare i prodotti è già disponibile. I lettori fisici (USB / Bluetooth) non sono ancora supportati ufficialmente: come le altre funzioni hardware, richiedono dispositivi da acquistare per test e sviluppo, e saranno pianificati con la crescita degli utenti."
      },
      {
        "type": "note",
        "text": "Il campo di ricerca della cassa riconosce i codici a barre, quindi un lettore in modalità tastiera potrebbe in teoria scrivervi dentro e richiamare i prodotti. Però non l'abbiamo verificato su hardware reale, quindi non è un uso supportato ufficialmente. Se hai provato un lettore che funziona, dicci il modello!"
      },
      {
        "type": "p",
        "text": "Se ti serve, scrivici: diamo priorità allo sviluppo in base al numero di richieste."
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
    "question": "Ci sarà un report di chiusura mensile?",
    "keywords": [
      "chiusura mensile",
      "riconciliazione",
      "chiusura del mese",
      "report mensile",
      "da pagare",
      "crediti da clienti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dalla v3.4, Utile mostra l'utile netto di ogni mese dopo costo dei prodotti, commissioni e spese — vedi «Come vedo quanto ho guadagnato davvero ogni mese?» Dalla v3.6, il Report imposte esporta un periodo (ad esempio Questo mese) in CSV, in una cartella di lavoro Excel o in un Report PDF da dare al commercialista, con vendite, imposte, importo incassato per ogni metodo di pagamento e crediti da clienti. Utile e gli altri report non si possono ancora esportare, ma nell'app c'è già tutto ciò che serve per riconciliare i conti:"
      },
      {
        "type": "list",
        "items": [
          "Imposta Report su Questo mese per vedere ricavi, incassato, utile e ripartizione dei pagamenti del mese.",
          "Gli acquisti dai fornitori con pagamento mensile si raccolgono in Da pagare, dentro Acquisti, dove puoi saldare un intero mese in una volta.",
          "Le vendite a credito ai clienti si raccolgono in Ordini → Crediti da clienti, dove puoi saldare un intero mese in una volta."
        ]
      },
      {
        "type": "p",
        "text": "Se ti serve un report di chiusura mensile da esportare o stampare, oltre a quanto già copre il Report imposte, scrivici indicando i campi che vorresti: diamo priorità allo sviluppo in base al numero di richieste."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
