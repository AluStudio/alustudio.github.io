// Generated from en and the it translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync it`, then `npm run l10n -- apply it`.

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
      "valuta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alla prima apertura di DingPOS, una procedura guidata ti accompagna nell'apertura del negozio in due passaggi e pochi minuti:"
      },
      {
        "type": "steps",
        "items": [
          "Scegli il tuo paese o la tua regione. In cima all'elenco trovi la regione di questo iPad e i mercati più comuni; sotto ci sono tutti i 175 paesi e regioni in cui DingPOS è sull'App Store, ricercabili per nome nella lingua dell'app o in inglese. La tua scelta compila in automatico valuta, aliquota e modalità imposte.",
          "In Il tuo negozio, inserisci il nome del negozio, se vuoi carica un logo e controlla valuta, aliquota e modalità imposte (inclusa / esclusa). La valuta è quella del tuo paese; toccala per sceglierne una tra 130 valute."
        ]
      },
      {
        "type": "p",
        "text": "Tocca Continua e vedrai «Ding! Il tuo negozio è pronto.» DingPOS crea anche due metodi di pagamento, Contanti e Carta di credito. Poi aggiungi i tuoi prodotti in Prodotti e inizia a registrare le vendite."
      },
      {
        "type": "note",
        "text": "Valuta e modalità imposte non si possono cambiare dopo la configurazione; l'aliquota si può ancora modificare in seguito in Impostazioni. Negli Stati Uniti, in Canada, in Brasile e in Micronesia l'aliquota dipende dallo stato, dalla provincia o dalla città: il campo dell'aliquota parte vuoto e, per continuare, inserisci l'aliquota che applichi (0 è ammesso). L'elenco di 175 paesi e la scelta della valuta sono arrivati con la v3.2; le versioni precedenti offrivano 15 paesi."
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
        "text": "No. DingPOS non ha un sistema di account: scarica l'app e inizia a vendere. Prodotti, ordini e dati dei clienti restano sul tuo iPad e non vengono mai caricati sui nostri server."
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
        "text": "Al momento DingPOS funziona su iPad con iPadOS 17 o successivo, pensato soprattutto per l'uso in orizzontale."
      },
      {
        "type": "p",
        "text": "iPhone e Mac non sono ancora supportati. Se vuoi che supportiamo un altro dispositivo, scrivici e raccontaci come lo useresti."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Posso cambiare valuta o modalità imposte dopo la configurazione?",
    "keywords": [
      "valuta",
      "modalità imposte",
      "cambiare",
      "bloccata",
      "aliquota"
    ],
    "content": [
      {
        "type": "p",
        "text": "L'aliquota d'imposta si può cambiare in qualsiasi momento in Impostazioni: la nuova aliquota vale solo per i nuovi ordini."
      },
      {
        "type": "p",
        "text": "Valuta e modalità imposte (imposta inclusa / esclusa) non sono più modificabili al termine della configurazione. Tutti gli ordini passati sono stati calcolati con quei valori, quindi cambiarli a metà strada falserebbe i report. Controllali nel passaggio Il tuo negozio della configurazione: la valuta è quella del tuo paese e puoi toccarla per sceglierne un'altra."
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
        "text": "La schermata cassa gestisce fino a 10 carrelli nello stesso momento. Tocca «+» sulla barra dei carrelli per aggiungerne uno e tocca una scheda numerata per passare da un carrello all'altro."
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
      "imposta inclusa",
      "imposta esclusa",
      "scontrino"
    ],
    "content": [
      {
        "type": "p",
        "text": "L'imposta viene calcolata in automatico in base alla modalità scelta durante la configurazione. In entrambe le modalità lo scontrino riporta l'importo dell'imposta:"
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
        "text": "Ordine completo del calcolo: sconti sugli articoli → sconto sul carrello → imposta. Gli importi vengono arrotondati al numero di decimali previsto per la valuta (ad es. 0 per TWD, 2 per USD); le frazioni esattamente a metà vengono arrotondate per eccesso."
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
        "text": "Un nuovo negozio parte con due metodi di pagamento, Contanti e Carta di credito, con il nome nella lingua dell'app scelta durante la configurazione. In Impostazioni → Metodi di pagamento puoi aggiungere qualsiasi altro metodo (ad es. Apple Pay, LINE Pay, un portafoglio digitale locale), eliminarlo o riordinarli."
      },
      {
        "type": "p",
        "text": "I metodi di pagamento sono etichette per la contabilità: DingPOS non elabora pagamenti reali. Incassa carte o pagamenti da mobile con il tuo POS o la tua app abituale, poi scegli l'etichetta corrispondente in DingPOS per registrarlo. Con i contanti il resto viene calcolato in automatico."
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
        "text": "Sì. In Impostazioni → Metodi di pagamento tocca un metodo di pagamento (o aggiungine uno nuovo) e compila Commissione: una percentuale, un importo fisso per operazione, oppure entrambi. Da quel momento ogni pagamento incassato con quel metodo registra una commissione stimata con la tariffa in vigore in quel momento."
      },
      {
        "type": "p",
        "text": "In Report, la scheda Metodi di pagamento aggiunge una riga «Commissione · Netto» sotto ogni metodo con una commissione, e in fondo alla scheda compaiono commissioni stimate e incassato netto stimato dell'intero periodo."
      },
      {
        "type": "list",
        "items": [
          "Inserisci la tariffa che il fornitore trattiene davvero, tasse incluse: per il 3% più il 5% di tasse, inserisci 3,15%. Lascia vuoti entrambi i campi se non c'è commissione.",
          "Una modifica della tariffa vale solo per i pagamenti successivi; le commissioni già registrate restano come sono.",
          "«Percentuale della commissione restituita sui rimborsi» è attiva di default, per i fornitori che restituiscono la commissione quando fai un rimborso. Riguarda i resi e gli acconti dei preordini rimborsati: se è attiva, la percentuale viene restituita; la parte fissa mai. Uno Storno o un Annullamento del saldo ignorano l'interruttore e stornano l'intera commissione registrata, parte fissa inclusa. In ogni caso il cliente riceve lo stesso importo.",
          "I pagamenti incassati prima che il metodo avesse una tariffa non hanno commissione: Report li segnala con «N senza tariffa» e mostra il netto come «—»."
        ]
      },
      {
        "type": "note",
        "text": "Le commissioni sono stime basate sulla tariffa che inserisci; l'importo effettivo è quello dell'estratto conto del tuo fornitore. Per modificare le tariffe e vedere le commissioni in Report serve il piano Standard o superiore. Con Lite i campi sono bloccati, ma i pagamenti registrano comunque le loro commissioni, che compaiono quando passi a un piano superiore."
      }
    ],
    "related": [
      "payment-methods",
      "revenue-vs-cash",
      "plans-compare"
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
        "text": "Vai in Ordini, trova l'ordine, apri il dettaglio e scegli Storna. Conferma e hai finito."
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
      "cambio taglia"
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
          "La giacenza tracciata viene ripristinata in automatico. I punti guadagnati con l'ordine originale vengono tolti, quelli utilizzati vengono restituiti e gli articoli sostitutivi maturano i propri punti.",
          "Un ordine può essere reso in più riprese, ma mai oltre la quantità venduta in origine. I limiti di utilizzo delle promozioni non vengono ripristinati da un reso."
        ]
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
        "text": "In cassa, cambia in alto la schermata da Vendita a Preordine, scegli la data di ritiro, inserisci l'acconto (da 0 fino all'importo totale, con le scorciatoie 30% / 50% / totale) e indica come viene pagato. Associa un cliente, così potrai contattarlo quando arriva la merce."
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
        "text": "Sì. Seleziona il cliente in cassa e scegli A credito come metodo di pagamento. Un debito deve avere un intestatario, quindi A credito non è disponibile senza un cliente."
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
      "payment-methods",
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
        "text": "Sì. Le pagine di dettaglio di ordini, clienti e ordini d'acquisto hanno ciascuna una scheda Note: toccala per modificarla, fino a 500 caratteri. Puoi anche scriverne una nel modulo quando crei un cliente o un ordine d'acquisto."
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
        "text": "Quando un prodotto ha varianti, il campo Prezzo si chiude e ogni combinazione ha il proprio prezzo in Prezzo e giacenza delle varianti, con la propria giacenza (dalla v3.2; le versioni precedenti chiedono ancora un prezzo del prodotto). La cassa, l'elenco prodotti e il dettaglio prodotto mostrano un intervallo dal prezzo più basso al più alto, come “NT$350–NT$390”, oppure un prezzo unico quando tutte le combinazioni costano uguale; l'ordinamento per prezzo usa il prezzo più basso tra le combinazioni. Alla cassa, toccando il prodotto compare la scelta della variante prima di aggiungerlo al carrello."
      },
      {
        "type": "p",
        "text": "Non devi inserire un costo per ogni combinazione: un campo Costo vuoto significa Segue il prodotto, cioè usa il costo del prodotto e cambia quando cambia quello. Un numero lo rende Costo proprio, anche se è 0. Usa il costo del prodotto per tutte cancella in un colpo solo tutti i costi propri."
      },
      {
        "type": "note",
        "text": "I nomi delle opzioni e dei valori possono avere al massimo 20 caratteri e non possono essere vuoti: un nome di opzione o un valore vuoto viene evidenziato in rosso al salvataggio, quindi compilalo o elimina il valore vuoto. Un prodotto con varianti non può usare il prezzo libero."
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
      "prezzo di mercato"
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
        "text": "Una volta attivato, vendite e preordini scalano la giacenza in automatico; storni, resi e preordini annullati la rimettono a magazzino; ricevere un ordine d'acquisto la aumenta; e puoi correggerla a mano in qualsiasi momento. Ogni movimento viene registrato in un registro completo. Le giacenze basse sono evidenziate da un avviso colorato."
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
        "text": "Una giacenza negativa di solito significa che un rifornimento non è stato registrato, oppure che un articolo preordinato non è ancora arrivato (i preordini scalano la giacenza quando vengono inseriti). Registra i rifornimenti ricevendo un ordine d'acquisto e il numero si ripristina da solo; correggi le differenze di inventario con una rettifica manuale, che resta nel registro dei movimenti."
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
        "text": "Acquisti, nella barra laterale, gestisce fornitori e ordini d'acquisto. Un fornitore conserva nome, referente, telefono, indirizzo e una condizione di pagamento predefinita (pagamento immediato o mensile)."
      },
      {
        "type": "steps",
        "items": [
          "Tocca Nuovo acquisto, scegli il fornitore e aggiungi prodotti, quantità e costi unitari (precompilati con il costo attuale di ciascun prodotto). Si possono aggiungere anche le spese di spedizione. Se il fornitore non è ancora stato creato, tocca Aggiungi fornitore in alto a sinistra nell'elenco dei fornitori: il nuovo fornitore torna direttamente nell'ordine d'acquisto.",
          "Una bozza non tocca mai la giacenza né i debiti: modificala o eliminala liberamente.",
          "Quando la merce arriva, tocca Ricevi merce: la giacenza tracciata aumenta e l'ordine d'acquisto riceve il suo numero e si blocca. Per impostazione predefinita la ricezione aggiorna anche il costo di ogni prodotto con questo costo unitario; disattiva Sincronizza costo prodotto nell'ordine d'acquisto per lasciare i costi invariati."
        ]
      },
      {
        "type": "p",
        "text": "La condizione di pagamento decide cosa succede dopo: gli ordini con pagamento immediato vengono segnati come pagati, mentre quelli mensili restano non pagati in Da pagare, dove puoi saldarli per fornitore: un ordine, il mese in corso o tutto."
      },
      {
        "type": "note",
        "text": "Gli acquisti richiedono il piano Standard o superiore. Un fornitore con ordini ricevuti non ancora pagati non può essere eliminato."
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
    "question": "Che differenza c'è tra Ricavi e Incassato?",
    "keywords": [
      "ricavi",
      "incassato",
      "incassi",
      "quadratura cassa",
      "acconto",
      "vendita a credito"
    ],
    "content": [
      {
        "type": "p",
        "text": "I Ricavi contano nel giorno in cui la merce passa di mano; l'Incassato conta nel giorno in cui entra il denaro. Per un ordine pagato alla cassa le due cose avvengono lo stesso giorno e i numeri coincidono. Si differenziano quando:"
      },
      {
        "type": "list",
        "items": [
          "Vendita a credito: la merce esce oggi e rientra nei Ricavi di oggi; il denaro rientra nell'Incassato nel giorno in cui viene saldato.",
          "Preordine: l'acconto rientra nell'Incassato quando viene pagato; i Ricavi vengono riconosciuti per intero alla data del ritiro.",
          "Acconto trattenuto: quando un cliente annulla un preordine e tu trattieni l'acconto, questo era già stato contato nell'Incassato al momento del pagamento. Report lo mostra a parte come acconti trattenuti e non rientra mai nei Ricavi.",
          "Storno di un ordine precedente: il denaro rimborsato rientra nell'Incassato nel giorno dello storno, quindi l'Incassato di quel giorno può essere negativo, mentre Stornati conta l'ordine alla data della vendita. Lo spiega anche l'ⓘ sulle schede Incassato e Stornati."
        ]
      },
      {
        "type": "p",
        "text": "Per far quadrare i conti, confronta l'Incassato con il cassetto e con il terminale carte; per sapere quanto hai davvero venduto in un periodo, guarda i Ricavi. I resi riducono i ricavi nel giorno del reso."
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
    "question": "Quali periodi di tempo posso vedere nei report?",
    "keywords": [
      "report",
      "periodo",
      "questa settimana",
      "questo mese",
      "quest'anno",
      "intervallo personalizzato",
      "data",
      "classifica prodotti"
    ],
    "content": [
      {
        "type": "p",
        "text": "In alto in Report scegli Oggi, Ieri, Questa settimana, Questo mese, Quest'anno o Sempre, oppure usa Personalizzato per indicare una data di inizio e una di fine. Questa settimana segue il primo giorno della settimana impostato sul dispositivo; Questo mese e Quest'anno partono dal 1° del mese e dal 1° gennaio. Ogni opzione mostra le date che copre e Sempre parte dalla prima vendita del tuo negozio."
      },
      {
        "type": "p",
        "text": "Per un singolo giorno il grafico dell'andamento diventa un grafico a barre orario; i periodi più lunghi usano giorni, settimane, mesi o anni per ogni barra, in base alla durata."
      },
      {
        "type": "p",
        "text": "La scheda Classifica prodotti elenca i primi 5. Tocca la scheda o Mostra tutti per vedere ogni prodotto venduto nel periodo, in ordine di quantità al netto dei resi."
      },
      {
        "type": "p",
        "text": "Con il piano Pro, Confronto vendite a destra della barra del periodo mette a confronto il periodo con quello precedente o con lo stesso periodo dell'anno scorso — vedi «Che cosa mostrano i report avanzati del piano Pro?»"
      },
      {
        "type": "note",
        "text": "Questi periodi di calendario sono arrivati con la v2.4; le versioni precedenti offrivano intervalli mobili (Oggi / 7 giorni / 30 giorni / Sempre). Se li vedi ancora, aggiorna DingPOS dall'App Store."
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
    "question": "Che cosa mostrano i report avanzati del piano Pro?",
    "keywords": [
      "report avanzati",
      "pro",
      "confronto vendite",
      "anno scorso",
      "mappa di calore",
      "orari di punta",
      "articoli a bassa rotazione",
      "valore del magazzino",
      "tasso di riacquisto",
      "punti"
    ],
    "content": [
      {
        "type": "p",
        "text": "I report avanzati non sono una schermata a parte: stanno direttamente in Report e seguono il periodo che scegli in alto:"
      },
      {
        "type": "list",
        "items": [
          "Confronto vendite: a destra della barra del periodo, confronta con lo stesso periodo dell'anno scorso o con il periodo precedente (un singolo giorno con lo stesso giorno della settimana scorsa, questa settimana con la scorsa, questo mese con il mese scorso, quest'anno con l'anno scorso, un intervallo personalizzato con lo stesso numero di giorni che lo precedono). Il riquadro Incassato mostra la differenza e il tasso di crescita, e il grafico dei Ricavi aggiunge una linea più chiara per il periodo di confronto. Finché un periodo è ancora in corso, il periodo di confronto viene tagliato allo stesso momento.",
          "Giorno × ora: nell'intestazione Vendite nel tempo passa a Giorno × ora per una mappa di calore su sette giorni e 24 ore: più una cella è scura, più hai venduto. Passa tra ricavi e ordini; con un confronto attivo vedi quali ore sono cresciute e quali sono calate.",
          "Articoli a bassa rotazione: passa l'intestazione della scheda di classifica ad Articoli a bassa rotazione per elencare i prodotti dal meno al più venduto, con la giacenza attuale e l'ultima data in cui ciascuno è stato venduto. I prodotti mai venduti sono indicati come Mai venduto. Per impostazione predefinita sono mostrati solo i prodotti in giacenza.",
          "Tasso di riacquisto: l'ultima riga del riquadro dei clienti è la quota di membri che hanno acquistato nel periodo e hanno acquistato in totale due o più volte.",
          "Situazione attuale: il valore del magazzino (giacenza attuale × costo attuale), tutti i movimenti di magazzino del periodo selezionato e i punti che i clienti hanno ma non hanno ancora riscattato, con lo sconto massimo che possono dare. Sono saldi attuali: il periodo non li modifica."
        ]
      },
      {
        "type": "p",
        "text": "Senza Pro, ciascuno di questi cinque punti mostra un piccolo lucchetto che apre una spiegazione dell'upgrade; tutto il resto di Report funziona come prima. I report leggono dati che il tuo negozio conserva già, quindi quando Pro termina vengono nascosti solo i report: nessun dato va perso."
      },
      {
        "type": "note",
        "text": "I collaboratori vedono i report avanzati con il permesso Dashboard; gli importi del valore del magazzino richiedono anche il permesso Costi e utile."
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
    "question": "Come viene calcolato l'utile se non ho inserito i costi?",
    "keywords": [
      "costo",
      "utile",
      "margine",
      "margine lordo",
      "report",
      "utile non tracciato",
      "costo mancante",
      "utile lordo tracciato"
    ],
    "content": [
      {
        "type": "p",
        "text": "Il costo è un campo facoltativo. I prodotti senza costo sono esclusi dall'utile, mentre i loro ricavi contano comunque per intero. La scheda Utile lordo tracciato in Report mostra quanti prodotti venduti nel periodo non hanno un costo; un costo pari a 0 conta come costo, quindi quei prodotti non vengono elencati."
      },
      {
        "type": "p",
        "text": "Tocca la scheda o Mostra prodotti per aprire Prodotti senza costo, ordinati per i ricavi esclusi dall'utile. Tocca una riga per aprire il prodotto, aggiungi il costo da Modifica e al ritorno la riga risulta contrassegnata come Costo aggiunto. Un prodotto con varianti è contrassegnato come Costo aggiunto solo quando ogni variante venduta senza costo ne ha uno: il proprio oppure quello del prodotto, da seguire."
      },
      {
        "type": "p",
        "text": "L'utile è il ricavo dopo tutti gli sconti (sconti sugli articoli e sul carrello, promozioni, riscatto punti) e prima delle tasse, meno il costo: per questo il campo si chiama Costo al netto delle tasse (facoltativo), quindi inserisci quanto hai pagato prima delle tasse. Il margine è l'utile diviso per il ricavo al netto delle tasse dei prodotti con un costo, così quelli senza costo non lo abbassano. Un reso riprende, nel giorno del reso, l'utile che quegli articoli avevano portato."
      },
      {
        "type": "note",
        "text": "Un costo che aggiungi riguarda solo le vendite successive; le vendite già fatte non vengono ricalcolate. Questo calcolo è arrivato con la v3.1: le versioni precedenti toglievano solo gli sconti manuali sugli articoli e contavano come utile l'imposta inclusa, quindi dopo l'aggiornamento i periodi con sconti o imposta inclusa mostrano un utile più basso. È una correzione, non una perdita di dati."
      }
    ],
    "related": [
      "report-periods",
      "product-variants",
      "purchase-orders"
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
        "text": "Vai in Impostazioni → Programma fedeltà e definisci due regole: quanti punti Y si guadagnano ogni X spesi e quanti punti N si riscattano per M di sconto (con un limite di riscatto per ordine, facoltativo). Puoi anche assegnare in automatico un bonus di benvenuto ai nuovi clienti."
      },
      {
        "type": "p",
        "text": "Seleziona il cliente alla cassa e i punti si accumulano in automatico; per riscattarli, inserisci i punti da usare. Con lo storno di un ordine vengono tolti i punti che aveva fatto guadagnare e restituiti quelli riscattati."
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
        "text": "Tocca prima Riprova; se funziona, l'app si apre come al solito. Se il problema si ripresenta, tocca Contatta l'assistenza e scrivici: ti aiuteremo a recuperare i dati. Questa schermata non sposta né elimina mai alcun file."
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
    "slug": "import-csv",
    "category": "backup",
    "since": "2.3",
    "question": "Posso importare prodotti e vendite da un altro POS o da un foglio di calcolo?",
    "keywords": [
      "importare",
      "csv",
      "excel",
      "foglio di calcolo",
      "migrare",
      "cambiare pos",
      "importazione massiva",
      "storico vendite"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sì. Vai in Impostazioni → Importa dati, scegli se importare prodotti o vendite e seleziona un file CSV (Excel e Fogli Google possono entrambi salvare in CSV)."
      },
      {
        "type": "steps",
        "items": [
          "Il file si apre come tabella. I nomi di colonna più comuni in inglese e in cinese (tradizionale o semplificato) vengono riconosciuti automaticamente; tocca l'intestazione di una colonna per cambiarne l'abbinamento.",
          "Tocca una cella per correggerne subito il valore, senza dover modificare il file e ricominciare.",
          "Tocca Conferma per la verifica. Le righe con problemi sono segnalate in rosso con il motivo; l'importazione delle vendite può saltare gli ordini con errori.",
          "Risolvi ciò che richiede una scelta (nomi di prodotto duplicati, una riga che corrisponde a più clienti), controlla il riepilogo, poi tocca Avvia importazione."
        ]
      },
      {
        "type": "list",
        "items": [
          "Le vendite importate vengono collocate in base alla data dell'ordine e ricalcolate con la valuta e la modalità imposte del tuo negozio. Non incidono sulla giacenza e non assegnano punti di benvenuto.",
          "I clienti vengono abbinati a quelli esistenti tramite telefono o e-mail; chi non trova corrispondenza viene creato.",
          "Gli ordini importati mostrano la data di importazione (Importato il) e il numero dell'ordine di origine, e non possono essere stornati né resi.",
          "Le righe con errori si possono esportare in un CSV con i motivi annotati: correggile e importa di nuovo. Le righe duplicate vengono saltate automaticamente."
        ]
      },
      {
        "type": "note",
        "text": "L'importazione dei dati è in versione beta. Ogni file può contenere fino a 50.000 righe o 20 MB. Prima di importare, esegui un backup su cloud; se qualcosa non si importa o il risultato ti sembra sbagliato, faccelo sapere con Segnala un problema nella schermata di importazione."
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
          "Azioni (rettifica manuale della giacenza, gestione prodotti, pagamento oltre lo sconto massimo del ruolo): un'approvazione vale per quella sola azione.",
          "Schermate (costi e utile, Report, Impostazioni, backup e ripristino): un'approvazione sblocca finché l'operatore non cambia o l'app va in background.",
          "Lo sconto massimo del ruolo si applica agli sconti manuali e viene controllato una sola volta al pagamento; le promozioni automatiche e il riscatto dei punti non vengono conteggiati."
        ]
      },
      {
        "type": "p",
        "text": "Impostazioni di fabbrica: i Responsabili possono fare tutto tranne backup e ripristino, senza sconto massimo del ruolo; i Collaboratori richiedono approvazione per tutto, con uno sconto massimo del ruolo del 10%. Il titolare è sempre autorizzato e non è modificabile. Per cambiarle, vai in Collab. → Permessi dei ruoli, tocca Modifica e salva una volta: la modifica vale subito per tutti."
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
        "text": "Usa il registro attività. Nella pagina Collab. tocca Registro attività in alto a destra e inserisci il PIN del titolare per vedere le operazioni sensibili del negozio, dalla più recente: storni, resi, rettifiche manuali della giacenza, approvazioni, modifiche a collaboratori e permessi, modifiche al PIN del titolare, modifiche a prezzo e costo dei prodotti ed eliminazioni di prodotti. I normali pagamenti in cassa non sono elencati."
      },
      {
        "type": "list",
        "items": [
          "Ogni voce mostra cosa ha riguardato, chi ha fatto cosa e quando, e il risultato, per esempio «M prezzo $390 → $350».",
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
        "text": "Dalla prima installazione hai 30 giorni con tutte le funzioni del piano Pro, compresi collaboratori, permessi, registro attività e report avanzati, senza bisogno di creare un account."
      },
      {
        "type": "p",
        "text": "Se ti abboni a un piano durante la prova, la prova termina subito e da quel momento vale il piano acquistato. Dopo la prova, le funzioni Pro come collaboratori e report avanzati restano disponibili solo con un abbonamento Pro."
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
        "text": "Tutti e tre i piani includono cassa completa, prodotti, ordini (con storni, resi e cambi), report e backup nel cloud. Cambiano gli strumenti per gestire il negozio:"
      },
      {
        "type": "list",
        "items": [
          "Lite: per chi gestisce un banco da solo e ha bisogno di cassa e prodotti.",
          "Standard: aggiunge promozioni, punti fedeltà e livelli clienti, gestione del magazzino, acquisti, vendite a credito, preordini e stima delle commissioni di pagamento.",
          "Pro: aggiunge collaboratori e permessi, approvazione del responsabile, registro attività, registro ripristino e report avanzati, pensato per i negozi con personale."
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
        "text": "Regali ed extra a pagamento non modificano mai il carrello da soli. Quando le condizioni sono soddisfatte, sulla schermata del cassiere compare un banner con il suggerimento, e il carrello cambia solo quando il cassiere tocca Scegli regalo o Scegli extra. È voluto, perché i regali coinvolgono merce fisica: qualcuno deve verificare che sia disponibile e che il cliente la voglia."
      },
      {
        "type": "list",
        "items": [
          "Dopo Rifiuta, lo stesso suggerimento non ricompare per quel carrello; con un carrello nuovo o svuotato viene riproposto.",
          "Se prima della conferma alla cassa compare un nuovo suggerimento, va accettato o rifiutato prima di poter inviare l’ordine.",
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
        "text": "Non esiste ancora un report di chiusura mensile dedicato, ma nell'app c'è già tutto ciò che serve per riconciliare i conti:"
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
        "text": "Se ti serve un report di chiusura mensile da esportare o stampare, scrivici indicando i campi che vorresti: diamo priorità allo sviluppo in base al numero di richieste."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
