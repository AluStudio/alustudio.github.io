// Generated from en and the de translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync de`, then `npm run l10n -- apply de`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Erste Schritte",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Bezahlen",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Bestellungen & Rückgaben",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Artikel, Bestand & Einkauf",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Berichte",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Aktionen & Treue",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Backup & Daten",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Personal & Berechtigungen",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Abonnement & Abrechnung",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Einrichtungsanleitungen für Aktionen",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Demnächst",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Wie richte ich meinen Laden in DingPOS ein?",
    "keywords": [
      "Einrichtung",
      "Einrichten",
      "Start",
      "erste Schritte",
      "Einrichtungsassistent",
      "Laden eröffnen",
      "Land",
      "Währung",
      "Kassen-App einrichten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Beim ersten Öffnen von DingPOS eröffnet ein Einrichtungsassistent Ihren Laden in zwei Schritten und wenigen Minuten:"
      },
      {
        "type": "steps",
        "items": [
          "Wählen Sie Ihr Land oder Ihre Region. Oben in der Liste stehen die Region dieses iPad und die häufigsten Märkte; darunter finden Sie alle 175 Länder und Regionen, in denen DingPOS im App Store erhältlich ist – durchsuchbar nach Namen in der Sprache der App oder auf Englisch. Ihre Auswahl trägt Währung, Steuersatz und Steuermodus ein.",
          "Geben Sie unter „Ihr Geschäft“ den Namen des Geschäfts ein, fügen Sie optional ein Logo hinzu und prüfen Sie Währung, Steuersatz und Steuermodus (inklusive / exklusive). Die Währung ist zunächst die Ihres Landes; tippen Sie darauf, um aus 130 Währungen zu wählen."
        ]
      },
      {
        "type": "p",
        "text": "Tippen Sie auf „Fortfahren“, und es erscheint „Ding! Ihr Geschäft ist startklar.“ DingPOS richtet außerdem zwei Zahlungsarten ein, Bargeld und Kreditkarte. Legen Sie dann unter „Artikel“ Ihre Artikel an und starten Sie den Verkauf."
      },
      {
        "type": "note",
        "text": "Währung und Steuermodus lassen sich nach der Einrichtung nicht mehr ändern; den Steuersatz können Sie später weiterhin in den Einstellungen ändern. In den USA, Kanada, Brasilien und Mikronesien hängt der Satz vom Bundesstaat, der Provinz oder der Stadt ab; das Feld für den Steuersatz bleibt deshalb zunächst leer, und Sie tragen den Satz ein, den Sie berechnen (0 ist erlaubt), um fortzufahren. Die Liste mit 175 Ländern und die Wahl der Währung gibt es seit v3.2; frühere Versionen boten 15 Länder an."
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
    "question": "Funktioniert DingPOS ohne Internet?",
    "keywords": [
      "offline",
      "ohne Internet",
      "WLAN",
      "Wi-Fi",
      "Netzwerk",
      "keine Verbindung",
      "Markt",
      "Kasse ohne Internet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. DingPOS ist offline nutzbar – Kassieren, Artikelverwaltung, Bestand und Berichte laufen lokal auf Ihrem iPad, ganz ohne Netzwerk. Nachtmärkte, Pop-up-Stände und andere Orte ohne Wi-Fi sind kein Problem."
      },
      {
        "type": "p",
        "text": "Nur zwei Dinge brauchen eine Verbindung: das Cloud-Backup (Upload in Ihr eigenes iCloud, Google Drive oder Dropbox) und die Prüfung des Abonnementstatus."
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
    "question": "Muss ich ein Konto erstellen?",
    "keywords": [
      "Konto",
      "Registrierung",
      "Anmeldung",
      "Login",
      "registrieren",
      "Datenschutz"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nein. DingPOS hat kein Kontosystem – laden Sie die App herunter und legen Sie los. Ihre Artikel, Bestellungen und Kundendaten bleiben auf Ihrem iPad und werden nie auf unsere Server hochgeladen."
      },
      {
        "type": "p",
        "text": "Wenn Sie das Cloud-Backup aktivieren, melden Sie sich bei Ihrem eigenen Cloud-Konto an (iCloud, Google Drive oder Dropbox). Die Sicherungen liegen in Ihrem Konto – wir haben keinen Zugriff darauf."
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
    "question": "Welche Geräte werden unterstützt?",
    "keywords": [
      "Gerät",
      "iPhone",
      "Mac",
      "iPad",
      "Systemvoraussetzungen",
      "Version",
      "iPadOS"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS unterstützt derzeit iPads mit iPadOS 17 oder neuer und ist vorrangig für das Querformat ausgelegt."
      },
      {
        "type": "p",
        "text": "iPhone und Mac werden noch nicht unterstützt. Wenn Sie sich ein weiteres Gerät wünschen, schreiben Sie uns und schildern Sie Ihren Einsatzzweck."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kann ich Währung oder Steuermodus nach der Einrichtung ändern?",
    "keywords": [
      "Währung",
      "Steuermodus",
      "ändern",
      "gesperrt",
      "Steuersatz"
    ],
    "content": [
      {
        "type": "p",
        "text": "Den Steuersatz können Sie jederzeit in den Einstellungen ändern – der neue Satz gilt nur für künftige Bestellungen."
      },
      {
        "type": "p",
        "text": "Währung und Steuermodus (inklusive / exklusive) sind nach Abschluss der Einrichtung gesperrt. Alle bisherigen Bestellungen wurden damit berechnet; eine Änderung mittendrin würde Ihre Berichte verfälschen. Prüfen Sie beides im Einrichtungsschritt „Ihr Geschäft“: Die Währung ist zunächst die Ihres Landes, und Sie können darauf tippen, um eine andere zu wählen."
      },
      {
        "type": "note",
        "text": "Wenn Sie Ihren Laden gerade erst eröffnet haben und noch keine wichtigen Daten besitzen, können Sie die App löschen und neu installieren, um die Einrichtung erneut zu durchlaufen. Prüfen Sie vor dem Löschen, dass nichts dabei ist, was Sie behalten möchten."
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
    "question": "Wie ändere ich die Sprache der App?",
    "keywords": [
      "Sprache",
      "App-Sprache",
      "Englisch",
      "Chinesisch",
      "Japanisch",
      "Spanisch",
      "mehrsprachig",
      "wechseln",
      "Spracheinstellung"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS unterstützt 32 Sprachen, darunter Englisch, traditionelles und vereinfachtes Chinesisch, Japanisch, Koreanisch, Thailändisch, Vietnamesisch, Indonesisch, Malaiisch, Spanisch (Lateinamerika), Portugiesisch (Brasilien), Französisch und Deutsch. Gehen Sie zu Einstellungen → Geräteeinstellungen und tippen Sie auf App-Sprache. Dadurch öffnet sich die Seite von DingPOS in der Einstellungen-App des iPad, wo Sie unter „Sprache“ die gewünschte Sprache wählen."
      },
      {
        "type": "p",
        "text": "iOS erlaubt Apps nicht, die Sprachliste direkt zu öffnen, deshalb erfolgt der letzte Tipp in den Systemeinstellungen. Die Sprache gilt nur für dieses iPad."
      },
      {
        "type": "note",
        "text": "Andere Sprachen als Englisch und traditionelles Chinesisch gibt es seit v3.2. Wenn unter „Sprache“ nur Englisch und Chinesisch stehen, aktualisieren Sie DingPOS im App Store."
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
    "question": "Wie bediene ich mehrere Kunden gleichzeitig?",
    "keywords": [
      "Warenkörbe",
      "mehrere Kunden",
      "parken",
      "wechseln",
      "gleichzeitig",
      "Warteschlange"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Kassenbildschirm unterstützt bis zu 10 Warenkörbe gleichzeitig. Tippen Sie in der Warenkorb-Leiste auf „+“, um einen neuen hinzuzufügen, und auf einen nummerierten Tab, um zu wechseln."
      },
      {
        "type": "p",
        "text": "Jeder Warenkorb wird unabhängig berechnet. Während Kunde A noch stöbert, wechseln Sie zu einem anderen Warenkorb und kassieren zuerst Kunde B ab. Sobald der Bezahlvorgang abgeschlossen ist, wird der Warenkorbplatz automatisch freigegeben."
      },
      {
        "type": "note",
        "text": "Warenkörbe existieren nur im Arbeitsspeicher – Warenkörbe, die nicht bezahlt wurden, werden gelöscht, sobald die App vollständig beendet wird."
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
    "question": "Wie gebe ich einen Rabatt?",
    "keywords": [
      "Rabatt",
      "Prozent",
      "Festbetrag",
      "Preisnachlass",
      "Preis reduzieren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Rabatte gibt es auf zwei Ebenen, jeweils als Festbetrag oder in Prozent:"
      },
      {
        "type": "list",
        "items": [
          "Artikelrabatt: Tippen Sie im Warenkorb auf einen Artikel → wählen Sie „Rabatt“ → geben Sie einen Betrag oder Prozentsatz ein.",
          "Warenkorb-Rabatt: Tippen Sie unter dem Warenkorb auf die Schaltfläche „Rabatt“."
        ]
      },
      {
        "type": "p",
        "text": "Jeder Artikel und jeder Warenkorb kann jeweils nur einen Rabatt haben – ein erneuter Rabatt überschreibt den vorherigen, und ein Tipp auf das Rabatt-Badge entfernt ihn. Rabatte werden vor der Steuer abgezogen, wie im Einzelhandel üblich."
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
    "question": "Wie wird die Steuer berechnet?",
    "keywords": [
      "Steuer",
      "MwSt.",
      "Umsatzsteuer",
      "inklusive",
      "exklusive",
      "Beleg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Die Steuer wird automatisch anhand des Steuermodus berechnet, den Sie bei der Einrichtung gewählt haben. Der Beleg weist den Steuerbetrag in beiden Modi aus:"
      },
      {
        "type": "list",
        "items": [
          "Inklusive: Die Preise enthalten bereits die Steuer – die Summe bleibt unverändert, und der Beleg weist die enthaltene Steuer aus (üblich z. B. in Taiwan und Japan).",
          "Exklusive: Die Steuer wird beim Bezahlen auf den Betrag nach Rabatt aufgeschlagen (üblich z. B. in den USA und Kanada)."
        ]
      },
      {
        "type": "p",
        "text": "Die Berechnung erfolgt in dieser Reihenfolge: Artikelrabatte → Warenkorb-Rabatt → Steuer. Beträge werden kaufmännisch auf die Dezimalstellen der Währung gerundet (z. B. 0 bei TWD, 2 bei USD)."
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
    "question": "Welche Zahlungsarten unterstützt DingPOS?",
    "keywords": [
      "Zahlungsart",
      "Bargeld",
      "Kreditkarte",
      "Line Pay",
      "Wechselgeld",
      "eigene Zahlungsart",
      "auf Rechnung",
      "Gebühren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ein neuer Laden startet mit zwei Zahlungsarten, Bargeld und Kreditkarte, die bei der Einrichtung in der Sprache der App benannt werden. Unter Einstellungen → Zahlungsarten können Sie beliebige weitere Zahlungsarten hinzufügen (z. B. Apple Pay, Line Pay oder eine lokale Wallet) sowie löschen oder umsortieren."
      },
      {
        "type": "p",
        "text": "Zahlungsarten sind reine Bezeichnungen für die Buchführung – DingPOS wickelt keine echten Zahlungen ab. Nehmen Sie Karten- oder mobile Zahlungen mit Ihrem bestehenden Terminal oder Ihrer App entgegen und wählen Sie dann in DingPOS die passende Bezeichnung, um sie zu erfassen. Bei Barzahlungen wird das Wechselgeld automatisch berechnet."
      },
      {
        "type": "p",
        "text": "Wenn Ihr Anbieter für Karten- oder mobile Zahlungen eine Gebühr erhebt, hinterlegen Sie für die Zahlungsart einen Gebührensatz, und die Statistik schätzt die Gebühren und den Nettoeingang je Zahlungsart – siehe „Kann DingPOS Gebühren für Karten- und mobile Zahlungen erfassen?“"
      },
      {
        "type": "p",
        "text": "Für Stammkunden, die die Ware jetzt mitnehmen und später bezahlen, wählen Sie „Auf Rechnung“: Der Verkauf wird als offener Posten erfasst und beglichen, sobald das Geld eintrifft. Siehe „Können Stammkunden auf Rechnung kaufen und später bezahlen?“"
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
    "question": "Kann DingPOS Gebühren für Karten- und mobile Zahlungen erfassen?",
    "keywords": [
      "Bearbeitungsgebühr",
      "Kartengebühr",
      "Zahlungsgebühr",
      "Transaktionsgebühr",
      "Gebührensatz",
      "Nettoeingang",
      "Händlergebühr",
      "Line Pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Tippen Sie unter Einstellungen → Zahlungsarten auf eine Zahlungsart (oder fügen Sie eine neue hinzu) und füllen Sie die Bearbeitungsgebühr aus: einen Prozentsatz, einen festen Betrag pro Zahlung oder beides. Ab dann wird für jede über diese Zahlungsart kassierte Zahlung eine Gebühr erfasst, geschätzt mit dem Satz, der in diesem Moment gilt."
      },
      {
        "type": "p",
        "text": "In der Statistik ergänzt die Karte „Zahlungsarten“ unter jeder Zahlungsart mit Gebühr eine Zeile „Gebühr · Netto“, und am Ende der Karte stehen die voraussichtlichen Gebühren und der voraussichtliche Nettoeingang für den gesamten Zeitraum."
      },
      {
        "type": "list",
        "items": [
          "Tragen Sie den Satz ein, den Ihr Anbieter tatsächlich abzieht, einschließlich Steuer – bei 3 % plus 5 % Steuer also 3,15 %. Lassen Sie beide Felder leer, wenn es keine Gebühr gibt.",
          "Eine Änderung des Satzes gilt nur für spätere Zahlungen; bereits erfasste Gebühren bleiben unverändert.",
          "„Prozentanteil der Gebühr bei Rückgaben erstattet“ ist standardmäßig aktiviert, für Anbieter, die ihre Gebühr bei einer Erstattung zurückgeben. Die Einstellung gilt für Rückgaben und erstattete Anzahlungen von Vorbestellungen: Ist sie aktiviert, wird der Prozentanteil erstattet; der feste Betrag nie. Eine Annullierung oder eine rückgängig gemachte Begleichung ignoriert den Schalter und nimmt die gesamte erfasste Gebühr zurück, den festen Betrag eingeschlossen. In beiden Fällen erhält der Kunde denselben Betrag zurück.",
          "Zahlungen, die kassiert wurden, bevor die Zahlungsart einen Gebührensatz hatte, tragen keine Gebühr: Die Statistik markiert sie mit „N ohne Gebührensatz“ und zeigt das Netto als „—“."
        ]
      },
      {
        "type": "note",
        "text": "Gebühren sind Schätzungen auf Basis des eingetragenen Satzes; maßgeblich ist die Abrechnung Ihres Anbieters. Gebührensätze zu bearbeiten und Gebühren in der Statistik zu sehen erfordert den Tarif Standard oder höher. Bei Lite sind die Felder gesperrt, Zahlungen erfassen ihre Gebühren aber trotzdem, sodass sie nach einem Upgrade erscheinen."
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
    "question": "Kann ich den „Ding“-Ton nach dem Bezahlen ausschalten?",
    "keywords": [
      "Ton",
      "Ding",
      "stummschalten",
      "lautlos",
      "Ton beim Bezahlen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Öffnen Sie Einstellungen → Geräteeinstellungen und schalten Sie „Ton beim Bezahlen“ aus. Ab dem nächsten Verkauf bleibt der Erfolgsbildschirm stumm, das haptische Feedback bleibt erhalten."
      },
      {
        "type": "p",
        "text": "Der Schalter gilt nur für dieses iPad, und das Wiederherstellen eines Cloud-Backups ändert ihn nicht."
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
    "question": "Kann ich nicht vorrätige Artikel auf dem Kassenbildschirm ausblenden?",
    "keywords": [
      "ausblenden",
      "nicht vorrätig",
      "ausverkauft",
      "Bestand null",
      "Kasse",
      "Artikel fehlt",
      "Artikel nicht gefunden"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Öffnen Sie Einstellungen → Geräteeinstellungen und aktivieren Sie „Nicht vorrätige Artikel ausblenden“ (standardmäßig aus). Artikelraster, Kategoriefilter und Suche (Name und Barcode) der Kasse überspringen dann jeden Artikel, dessen Bestand 0 oder darunter liegt. Der Schalter wirkt sofort, die App muss nicht neu geöffnet werden."
      },
      {
        "type": "list",
        "items": [
          "Artikel ohne Bestandsführung werden immer angezeigt. Ein Artikel mit Varianten wird nur ausgeblendet, wenn alle Varianten nicht vorrätig sind.",
          "Das betrifft nur die Kasse dieses iPad; die Artikelliste zeigt weiterhin jeden Artikel.",
          "Sind alle Artikel ausgeblendet, zeigt die Kasse „Alle Artikel sind nicht vorrätig“ und sagt Ihnen, wo Sie den Schalter wieder ausschalten."
        ]
      },
      {
        "type": "note",
        "text": "Solange der Schalter aktiv ist, findet dieses iPad nicht vorrätige Artikel nicht – es kann also weder in den negativen Bestand verkaufen noch eine Vorbestellung dafür annehmen. Schalten Sie ihn aus, wenn Sie das brauchen. Wenn Artikel an der Kasse scheinbar verschwunden sind, liegt es meistens an diesem Schalter."
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
    "question": "Wird der Warenkorb aktualisiert, wenn ich einen Artikelpreis ändere?",
    "keywords": [
      "Preisänderung",
      "Preis ändern",
      "Warenkorb",
      "neu berechnen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Warenkorb zeigt den Preis zu dem Zeitpunkt, an dem der Artikel hinzugefügt wurde. Wenn Sie das Bezahlen bestätigen, fragt DingPOS den aktuellen Preis jedes Artikels erneut ab – hat sich etwas geändert, werden Sie vor dem Fortfahren mit den neuen Preisen darauf hingewiesen."
      },
      {
        "type": "p",
        "text": "Auch Aktionen werden bei der Bestätigung komplett neu ausgewertet. Ändert sich dadurch die Summe, die Steuer oder ein Rabattbetrag, erscheint eine Zusammenfassung der Änderungen, und Sie müssen erneut bestätigen – so ist der angezeigte Betrag genau der erfasste Betrag."
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
    "question": "Kann ich manuelle Rabatte und Aktionen kombinieren?",
    "keywords": [
      "manueller Rabatt",
      "Aktion",
      "kombinieren",
      "überschreiben"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Die Regel lautet „Manuell gewinnt, die Ebenen bleiben unabhängig“:"
      },
      {
        "type": "list",
        "items": [
          "Manueller Artikelrabatt: Für diese Zeile gelten keine Artikel-Aktionen mehr – Ihr manueller Rabatt gilt als endgültige Entscheidung vor Ort. Der Zeilenbetrag zählt aber weiterhin für Mindestumsätze.",
          "Manueller Warenkorb-Rabatt: Er wird nach der Berechnung aller Aktionen angewendet, beide bestehen also nebeneinander. Geben Sie mehr ein als die verbleibende Summe, wird der Rabatt automatisch mit einem Hinweis gekappt."
        ]
      },
      {
        "type": "p",
        "text": "Wenn Sie einen manuellen Rabatt entfernen, kann die Zeile bei der nächsten Auswertung wieder an Aktionen teilnehmen."
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
    "question": "Beim Kassieren vertippt – wie annulliere ich eine Bestellung?",
    "keywords": [
      "annullieren",
      "stornieren",
      "Fehler",
      "falsche Bestellung",
      "Verkauf rückgängig machen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie Verkäufe, suchen Sie die Bestellung, rufen Sie die Detailansicht auf und wählen Sie Annullieren. Bestätigen Sie – fertig."
      },
      {
        "type": "p",
        "text": "Beim Annullieren wird automatisch alles Zugehörige zurückgesetzt: Der erfasste Bestand wird wieder gutgeschrieben, die mit der Bestellung gesammelten Punkte werden abgezogen und eingelöste Punkte zurückgegeben. Annullierte Bestellungen bleiben deutlich markiert in der Liste und zählen nicht zum Umsatz in den Auswertungen."
      },
      {
        "type": "note",
        "text": "Annullieren heißt „dieser Verkauf hat nie stattgefunden“ – nutzen Sie es für eine Bestellung, die an der Kasse falsch erfasst wurde. Bringt ein Kunde die Ware später zurück, verwenden Sie stattdessen Rückgabe: Die ursprüngliche Bestellung bleibt erhalten, Sie können auch nur einen Teil der Artikel zurücknehmen, und der Umsatz sinkt am Tag der Rückgabe."
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
    "question": "Wie nehme ich Ware zurück oder tausche sie um?",
    "keywords": [
      "Rückgabe",
      "Umtausch",
      "Erstattung",
      "Teilrückgabe",
      "Größe tauschen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie Verkäufe, rufen Sie die ursprüngliche Bestellung auf und tippen Sie auf Rückgabe. Wählen Sie, wie viele Stück jedes Artikels zurückkommen. Für einen Umtausch tippen Sie auf demselben Bildschirm auf Ersatzartikel hinzufügen; der Differenzbetrag wird in einem Schritt beglichen – positiv heißt, der Kunde zahlt, negativ heißt, Sie erstatten, und null heißt, es fließt kein Geld."
      },
      {
        "type": "list",
        "items": [
          "Die ursprüngliche Bestellung wird nie verändert. Eine Rückgabe erzeugt einen eigenen Beleg mit dem heutigen Datum und dem Nummernpräfix R; der Umsatz sinkt am Tag der Rückgabe.",
          "Erstattet wird, was der Kunde für den Artikel tatsächlich bezahlt hat – Artikelrabatte, Warenkorbrabatte und eingelöste Punkte sind bereits anteilig herausgerechnet, es wird also nicht zum Listenpreis erstattet. Die Steuer richtet sich nach dem Satz, mit dem die ursprüngliche Bestellung berechnet wurde.",
          "Ersatzartikel werden zum heutigen Preis berechnet, ohne Aktionen oder Rabatte.",
          "Der erfasste Bestand wird automatisch wieder gutgeschrieben. Punkte aus der ursprünglichen Bestellung werden abgezogen, eingelöste Punkte zurückgegeben, und Ersatzartikel sammeln eigene Punkte.",
          "Eine Bestellung kann in mehreren Runden zurückgegeben werden, aber nie über die ursprünglich verkaufte Menge hinaus. Nutzungslimits von Aktionen werden durch eine Rückgabe nicht zurückgesetzt."
        ]
      },
      {
        "type": "note",
        "text": "Für Rückgaben gibt es keine Frist, die ursprüngliche Bestellung ist aber erforderlich. Wurde eine Rückgabe versehentlich erfasst, annullieren Sie die Rückgabe – dann ist die rückgabefähige Menge wieder verfügbar."
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
    "question": "Wie nehme ich eine Vorbestellung mit Anzahlung an?",
    "keywords": [
      "Vorbestellung",
      "Anzahlung",
      "Abholung",
      "Restbetrag",
      "reservieren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Stellen Sie an der Kasse oben auf dem Bildschirm von Verkauf auf Vorbestellung um, wählen Sie das Abholdatum, geben Sie die Anzahlung ein (von 0 bis zum vollen Betrag, mit Kurzwahl 30 % / 50 % / Voll) und legen Sie fest, wie die Anzahlung bezahlt wird. Fügen Sie einen Kunden hinzu, damit Sie ihn erreichen, sobald die Ware da ist."
      },
      {
        "type": "list",
        "items": [
          "Der Bestand wird bereits beim Anlegen der Vorbestellung abgebucht, sodass die verkaufbare Menge sofort sinkt. Das ist ein Signal, keine Reservierung: Ein späterer Verkauf kann noch die letzte Einheit nehmen. Nicht vorrätige Artikel gehen in den negativen Bereich und gleichen sich aus, sobald eine Einkaufsbestellung eingegangen ist.",
          "Holt der Kunde die Ware ab, tippen Sie in den Bestelldetails auf Übergeben und kassieren den Restbetrag. Die Bestellung wird dann zu einem ganz normalen abgeschlossenen Verkauf; spätere Rückgaben laufen wie gewohnt über den Rückgabe-Ablauf.",
          "Kommt der Kunde nicht, tippen Sie in den Bestelldetails auf Bestellung stornieren und wählen, ob die Anzahlung erstattet oder einbehalten wird. Der Bestand wird wieder gutgeschrieben.",
          "Der Beleg über die Anzahlung und der Abholbeleg tragen dieselbe Nummer."
        ]
      },
      {
        "type": "p",
        "text": "In der Statistik wird der Umsatz einer Vorbestellung am Abholtag in voller Höhe erfasst, während die Anzahlung am Zahlungstag zum Zahlungseingang zählt – beide Zahlen weichen daher eine Zeit lang voneinander ab. Siehe „Was ist der Unterschied zwischen Umsatz und Zahlungseingang?“"
      },
      {
        "type": "note",
        "text": "Artikel einer Vorbestellung lassen sich nicht bearbeiten; überlegt es sich der Kunde anders, stornieren Sie und legen eine neue Vorbestellung an. Vorbestellungen anzulegen erfordert den Tarif Standard oder höher. Nach einem Downgrade können bestehende Vorbestellungen weiterhin abgeholt oder storniert werden."
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
    "question": "Können Stammkunden auf Rechnung kaufen und später zahlen?",
    "keywords": [
      "auf Rechnung",
      "Kundenkonto",
      "anschreiben",
      "offene Posten",
      "begleichen",
      "später zahlen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Wählen Sie an der Kasse den Kunden aus und als Zahlungsart Auf Rechnung. Eine Schuld braucht jemanden, dem sie zugeordnet ist – ohne Kunden ist Auf Rechnung deshalb nicht verfügbar."
      },
      {
        "type": "p",
        "text": "Zum Kassieren stellen Sie oben in Verkäufe auf Offene Posten um. Die Schulden sind nach Kunden gruppiert; öffnen Sie einen Kunden, um eine einzelne Bestellung, einen ganzen Monat oder alles zu begleichen – jedes Mal fragt DingPOS, wie das Geld bezahlt wurde. Eine einzelne Bestellung lässt sich auch in ihrer Detailansicht begleichen, und eine versehentlich erfasste Begleichung können Sie mit Begleichung rückgängig machen zurücknehmen."
      },
      {
        "type": "list",
        "items": [
          "Der Umsatz zählt an dem Tag, an dem die Ware den Laden verlässt; Zahlungseingang und Treuepunkte folgen erst am Tag der Begleichung.",
          "Unbeglichene Bestellungen tragen in der Liste ein bernsteinfarbenes Abzeichen, und die Kundendetails zeigen, wie viel der Kunde aktuell schuldet.",
          "Ein Kunde mit unbeglichenen Bestellungen kann nicht gelöscht werden."
        ]
      },
      {
        "type": "note",
        "text": "Verkäufe auf Rechnung anzulegen erfordert den Tarif Standard oder höher. Nach einem Downgrade können Sie keine neuen mehr beginnen, bestehende offene Posten lassen sich aber weiterhin ansehen und begleichen."
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
    "question": "Kann ich Notizen zu Bestellungen, Kunden oder Einkaufsbestellungen hinzufügen?",
    "keywords": [
      "Notiz",
      "Notizen",
      "Anmerkung",
      "Kommentar",
      "Vermerk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Die Detailseiten von Bestellungen, Kunden und Einkaufsbestellungen haben jeweils eine Notizkarte – tippen Sie darauf, um zu bearbeiten, bis zu 500 Zeichen. Auch beim Anlegen eines Kunden oder einer Einkaufsbestellung können Sie im Formular eine Notiz eintragen."
      },
      {
        "type": "p",
        "text": "Notizen hängen nicht vom Status ab: Abgeschlossene Bestellungen, annullierte Bestellungen und Rückgaben lassen sich alle mit Notizen versehen oder bearbeiten. Beträge und Artikel einer Bestellung stehen mit dem Kassieren fest; die Notiz liegt neben dem Beleg und ändert nie seinen Inhalt."
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
    "question": "Wie lege ich Artikel mit Varianten an (z. B. Größe und Farbe)?",
    "keywords": [
      "Varianten",
      "Größe",
      "Farbe",
      "Optionen",
      "Optionswerte",
      "Artikelvarianten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tippen Sie auf der Bearbeitungsseite des Artikels unter „Variantenoptionen“ auf „Option hinzufügen“, um eine Option anzulegen (z. B. „Farbe“), und fügen Sie mit „+ Wert“ jeden Optionswert hinzu (z. B. Rot, Blau). Bei zwei oder mehr Optionen (z. B. Farbe × Größe) erzeugt DingPOS automatisch jede Kombination (Rot/S, Rot/M, Blau/S …)."
      },
      {
        "type": "p",
        "text": "Sobald ein Artikel Varianten hat, klappt sein Feld „Preis“ ein, und jede Kombination bekommt unter „Variantenpreis & -bestand“ einen eigenen Preis und einen eigenen Bestand (seit v3.2; frühere Versionen verlangen weiterhin einen Artikelpreis). Kasse, Artikelliste und Artikeldetails zeigen eine Preisspanne vom niedrigsten bis zum höchsten Preis, etwa „NT$350–NT$390“, oder einen einzigen Preis, wenn alle Kombinationen gleich viel kosten; die Sortierung nach Preis nutzt den niedrigsten Kombinationspreis. An der Kasse erscheint beim Antippen des Artikels eine Variantenauswahl, bevor er in den Warenkorb gelegt wird."
      },
      {
        "type": "p",
        "text": "Sie müssen nicht für jede Kombination einen Einkaufspreis eintragen: Ein leeres Feld „Einkaufspreis“ bedeutet „Wie Artikel“, es übernimmt also den Einkaufspreis des Artikels und ändert sich mit ihm. Eine Zahl macht daraus „Eigener Einkaufspreis“ – auch 0. Mit „Für alle Artikel-Einkaufspreis verwenden“ löschen Sie alle eigenen Einkaufspreise auf einmal."
      },
      {
        "type": "note",
        "text": "Namen von Optionen und Optionswerten sind auf 20 Zeichen begrenzt und dürfen nicht leer sein: Ein leerer Options- oder Wertname wird beim Sichern rot umrandet – füllen Sie ihn aus oder löschen Sie den leeren Wert. Ein Artikel mit Varianten kann keinen freien Preis verwenden."
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
    "question": "Kann ich den Preis eines Artikels erst an der Kasse eingeben, etwa für Versandkosten oder verhandelte Ware?",
    "keywords": [
      "freier Preis",
      "Preis eingeben",
      "Preis an der Kasse",
      "Versandkosten",
      "Servicegebühr",
      "verhandelter Preis",
      "Tagespreis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja – legen Sie einen Artikel mit freiem Preis an. Aktivieren Sie auf der Bearbeitungsseite des Artikels „Freier Preis“ und lassen Sie den Preis leer; Kasse und Artikelliste zeigen dann „Freier Preis“ anstelle des Preises. Beim Antippen des Artikels an der Kasse wird zuerst nach dem Preis gefragt; geben Sie ihn ein und tippen Sie auf „In den Warenkorb“, um den Artikel zu diesem Preis hinzuzufügen."
      },
      {
        "type": "list",
        "items": [
          "0 ist ein gültiger Preis (etwa für kostenlosen Versand); ein leeres Feld lässt sich nicht hinzufügen. Geben Sie den Preis so ein, wie der Steuermodus Ihres Geschäfts auch alle anderen Preise behandelt.",
          "Ein Warenkorb enthält pro Artikel mit freiem Preis nur eine Zeile: Tippen Sie ihn erneut an, öffnet sich diese Zeile, und Sie können den Preis ändern.",
          "Mit „Freier Preis“ wird auch „Von Aktionen ausschließen“ aktiviert, damit auf eine Gebühr kein Rabatt gewährt wird und sie nicht zu Mindestumsätzen zählt. Schalten Sie es wieder aus, wenn verhandelte Ware an Aktionen teilnehmen soll.",
          "Nach dem Verkauf wird die Zeile versteuert, sammelt Punkte und zählt in der Statistik wie jede andere, und eine Rückgabe erstattet den eingegebenen Preis.",
          "Ein Artikel mit Varianten kann keinen freien Preis verwenden. Artikel mit freiem Preis werden nie als Geschenk oder kostenpflichtige Zusatzartikel angeboten und erscheinen nie in der Ersatzartikel-Liste eines Umtauschs."
        ]
      },
      {
        "type": "note",
        "text": "Alle Tarife bieten das, und für die Eingabe des Preises ist nie die Freigabe einer Führungskraft nötig."
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
    "question": "Wie funktionieren Barcodes in DingPOS?",
    "keywords": [
      "Barcode",
      "scannen",
      "Scanner",
      "Barcode doppelt",
      "Kamera",
      "Strichcode"
    ],
    "content": [
      {
        "type": "p",
        "text": "Barcodes von Artikeln können Sie von Hand eingeben oder mit der Kamera scannen. Jeder Barcode darf nur einmal vergeben sein – gibt es beim Sichern einen Konflikt mit einem anderen Artikel, zeigt DingPOS Ihnen, zu welchem Artikel er gehört."
      },
      {
        "type": "p",
        "text": "An der Kasse findet das Suchfeld sowohl Artikelnamen als auch den Anfang von Barcodes – geben Sie einen Barcode ein, und der Artikel erscheint sofort. Zu Plänen für Hardware-Barcodescanner lesen Sie „Werden physische Barcodescanner unterstützt?“"
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
    "question": "Wie ändere ich die Reihenfolge der Artikel?",
    "keywords": [
      "sortieren",
      "Reihenfolge",
      "Artikel verschieben",
      "anordnen",
      "ziehen",
      "nach oben"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tippen Sie unter „Artikel“ auf „Sortierung bearbeiten“ und ziehen Sie die Artikelkarten an die gewünschte Stelle. Kasse und Artikelverwaltung teilen sich diese eine Reihenfolge – einmal anordnen genügt für beide."
      },
      {
        "type": "list",
        "items": [
          "Bei einem großen Sortiment bietet das Menü jeder Karte „An den Anfang verschieben“, „Ans Ende verschieben“ und „Auf Position verschieben“, und jede Karte zeigt ihre aktuelle Position.",
          "Filtern Sie zuerst nach einer Kategorie, um nur innerhalb dieser Kategorie umzusortieren – Artikel in anderen Kategorien bleiben, wo sie sind.",
          "Neue Artikel kommen an den Anfang; das Bearbeiten der Artikeldaten ändert die Position nie."
        ]
      },
      {
        "type": "p",
        "text": "Um vorübergehend nach Name, Preis oder Erstell- bzw. Änderungszeit zu sortieren, verwenden Sie das Menü „Sortieren nach“. Ihre eigene Reihenfolge bleibt erhalten und kommt mit „Manuelle Reihenfolge“ zurück."
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
    "question": "Wie verwalte ich den Bestand meiner Artikel?",
    "keywords": [
      "Bestand",
      "Lagerbestand",
      "Bestandsführung",
      "Inventur",
      "Mindestbestand",
      "niedriger Bestand"
    ],
    "content": [
      {
        "type": "p",
        "text": "Die Bestandsführung lässt sich für jeden Artikel einzeln einschalten – aktivieren Sie sie auf der Bearbeitungsseite des Artikels und geben Sie die aktuelle Menge ein. Für jede Variante eines Artikels wird der Bestand separat geführt."
      },
      {
        "type": "p",
        "text": "Ist sie aktiv, buchen Verkäufe und Vorbestellungen den Bestand automatisch ab; Annullierungen, Rückgaben und stornierte Vorbestellungen buchen ihn zurück; ein Wareneingang einer Einkaufsbestellung erhöht ihn; und Sie können ihn jederzeit manuell anpassen. Jede Bewegung wird lückenlos protokolliert. Niedriger Bestand wird farbig hervorgehoben."
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
    "question": "Warum kann der Bestand ins Minus gehen?",
    "keywords": [
      "negativer Bestand",
      "Minusbestand",
      "nicht auf Lager",
      "Verkauf sperren",
      "Bestand korrigieren",
      "Artikel nicht gefunden"
    ],
    "content": [
      {
        "type": "p",
        "text": "Das ist Absicht: Das Bezahlen wird nie durch zu geringen Bestand blockiert. Die erste Regel an einer laufenden Kasse lautet, dass der Kunde nie warten muss – eine falsche Zahl auf dem Papier lässt sich später korrigieren, ein unterbrochener Verkauf ist dagegen für immer verloren."
      },
      {
        "type": "p",
        "text": "Ein negativer Bestand bedeutet meist, dass ein Wareneingang nicht erfasst wurde oder ein vorbestellter Artikel noch nicht eingetroffen ist (Vorbestellungen buchen den Bestand schon bei der Aufnahme ab). Erfassen Sie Nachschub über den Wareneingang einer Einkaufsbestellung, dann gleicht sich die Zahl von selbst aus; Differenzen aus der Inventur korrigieren Sie mit einer manuellen Anpassung, die im Bewegungsprotokoll erhalten bleibt."
      },
      {
        "type": "note",
        "text": "Wenn die Kasse einen Artikel mit Bestand 0 nicht findet, prüfen Sie unter Einstellungen → Geräteeinstellungen, ob „Nicht vorrätige Artikel ausblenden“ aktiv ist: Solange es das ist, kann dieses iPad nicht vorrätige Artikel nicht in einen Warenkorb legen."
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
    "question": "Wie erfasse ich Einkäufe und Lieferanten?",
    "keywords": [
      "Einkaufsbestellung",
      "Einkauf",
      "Lieferant",
      "Wareneingang",
      "Nachschub",
      "offene Rechnungen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Unter „Einkauf“ in der Seitenleiste verwalten Sie Lieferanten und Einkaufsbestellungen. Ein Lieferant enthält Name, Ansprechperson, Telefonnummer, Adresse und ein Standard-Zahlungsziel (sofort oder monatlich)."
      },
      {
        "type": "steps",
        "items": [
          "Tippen Sie auf „Neuer Einkauf“, wählen Sie den Lieferanten und fügen Sie Artikel, Mengen und Einkaufspreise hinzu (vorausgefüllt mit dem aktuellen Einkaufspreis des Artikels). Versandkosten lassen sich ebenfalls ergänzen. Ist der Lieferant noch nicht angelegt, tippen Sie oben links in der Lieferantenliste auf „Lieferant hinzufügen“ – der neue Lieferant wird direkt in die Einkaufsbestellung übernommen.",
          "Ein Entwurf berührt weder Bestand noch offene Zahlungen – bearbeiten oder löschen Sie ihn nach Belieben.",
          "Wenn die Ware eintrifft, tippen Sie auf „Wareneingang buchen“: Der Bestand bestandsgeführter Artikel steigt, und die Einkaufsbestellung erhält ihre Nummer und wird gesperrt. Standardmäßig aktualisiert der Wareneingang auch den Einkaufspreis jedes Artikels auf diesen Stückpreis; schalten Sie „Einkaufspreis des Artikels übernehmen“ in der Einkaufsbestellung aus, damit die Einkaufspreise unverändert bleiben."
        ]
      },
      {
        "type": "p",
        "text": "Das Zahlungsziel entscheidet über den weiteren Ablauf: Bestellungen mit sofortiger Zahlung gelten als bezahlt, monatliche Bestellungen bleiben unter „Zu zahlen“ offen. Dort begleichen Sie sie pro Lieferant – einzelne Bestellung, diesen Monat oder alles."
      },
      {
        "type": "note",
        "text": "Der Einkauf erfordert den Tarif Standard oder höher. Ein Lieferant mit unbezahlten, eingegangenen Bestellungen kann nicht gelöscht werden."
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
    "question": "Was ist der Unterschied zwischen Umsatz und Zahlungseingang?",
    "keywords": [
      "Umsatz",
      "Zahlungseingang",
      "Geldeingang",
      "Kasse abstimmen",
      "Anzahlung",
      "Verkauf auf Rechnung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Umsatz zählt an dem Tag, an dem die Ware übergeben wurde; der Zahlungseingang zählt an dem Tag, an dem das Geld eingeht. Bei einem Verkauf, der an der Kasse bezahlt wird, fallen beide auf denselben Tag, und die Zahlen stimmen überein. Auseinander laufen sie in diesen Fällen:"
      },
      {
        "type": "list",
        "items": [
          "Verkauf auf Rechnung: Die Ware verlässt den Laden heute und zählt zum Umsatz von heute; das Geld zählt an dem Tag zum Zahlungseingang, an dem die Begleichung erfolgt.",
          "Vorbestellung: Die Anzahlung zählt zum Zahlungseingang, sobald sie bezahlt wird; der Umsatz wird am Abholtag in voller Höhe erfasst.",
          "Verfall der Anzahlung: Storniert ein Kunde eine Vorbestellung und Sie behalten die Anzahlung, wurde sie beim Bezahlen bereits als Zahlungseingang gezählt. In der Statistik erscheint sie separat als verfallene Anzahlungen und zählt nie als Umsatz.",
          "Annullierung einer früheren Bestellung: Das erstattete Geld zählt am Tag der Annullierung zum Zahlungseingang, sodass der Zahlungseingang dieses Tages negativ sein kann, während „Annulliert“ die Bestellung an ihrem Verkaufstag zählt. Das ⓘ an den Kacheln „Zahlungseingang“ und „Annulliert“ erklärt dasselbe."
        ]
      },
      {
        "type": "p",
        "text": "Für den Abgleich vergleichen Sie den Zahlungseingang mit dem Bargeldbestand in der Kassenschublade und den Angaben Ihres Kartenterminals; wie viel Sie in einem Zeitraum tatsächlich verkauft haben, sehen Sie am Umsatz. Rückgaben mindern den Umsatz an dem Tag, an dem sie stattfinden."
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
    "question": "Für welche Zeiträume kann ich Berichte anzeigen?",
    "keywords": [
      "Berichte",
      "Zeitraum",
      "diese Woche",
      "dieser Monat",
      "dieses Jahr",
      "benutzerdefinierter Zeitraum",
      "Datum",
      "Artikel-Ranking"
    ],
    "content": [
      {
        "type": "p",
        "text": "Wählen Sie oben in der Statistik Heute, Gestern, Diese Woche, Dieser Monat, Dieses Jahr oder Gesamter Zeitraum, oder legen Sie über Benutzerdefiniert ein Start- und Enddatum fest. Diese Woche richtet sich nach dem ersten Wochentag des Geräts; Dieser Monat und Dieses Jahr beginnen am 1. bzw. am 1. Januar. Jede Option zeigt die Daten, die sie abdeckt, und Gesamter Zeitraum beginnt mit der ersten Transaktion Ihres Geschäfts."
      },
      {
        "type": "p",
        "text": "Für einen einzelnen Tag wird das Verlaufsdiagramm zu einem Balkendiagramm nach Stunden; längere Zeiträume zeigen je nach Länge Tage, Wochen, Monate oder Jahre pro Balken."
      },
      {
        "type": "p",
        "text": "Die Karte Artikel-Ranking listet die Top 5. Tippen Sie auf die Karte oder auf „Alle anzeigen“, um jeden im Zeitraum verkauften Artikel zu sehen, sortiert nach Menge nach Rückgaben."
      },
      {
        "type": "p",
        "text": "Mit dem Tarif Pro vergleicht der Umsatzvergleich rechts in der Zeitraumleiste den Zeitraum mit dem davor oder mit demselben Zeitraum im Vorjahr – siehe „Was zeigen die erweiterten Berichte in Pro?“"
      },
      {
        "type": "note",
        "text": "Diese Kalenderzeiträume gibt es seit Version 2.4; frühere Versionen boten gleitende Zeiträume (Heute / 7 Tage / 30 Tage / Gesamter Zeitraum). Wenn Sie diese noch sehen, aktualisieren Sie DingPOS im App Store."
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
    "question": "Was zeigen die erweiterten Berichte in Pro?",
    "keywords": [
      "erweiterte Berichte",
      "Pro",
      "Umsatzvergleich",
      "Vorjahr",
      "Heatmap",
      "Stoßzeiten",
      "Ladenhüter",
      "Lagerwert",
      "Wiederkaufrate",
      "Punkte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Erweiterte Berichte sind kein eigener Bildschirm – sie sitzen direkt in der Statistik und folgen dem Zeitraum, den Sie oben wählen:"
      },
      {
        "type": "list",
        "items": [
          "Umsatzvergleich: Rechts in der Zeitraumleiste vergleichen Sie mit demselben Zeitraum im Vorjahr oder mit dem Zeitraum davor (ein einzelner Tag mit demselben Tag der Vorwoche, diese Woche mit der letzten Woche, dieser Monat mit dem letzten Monat, dieses Jahr mit dem letzten Jahr, ein benutzerdefinierter Zeitraum mit der gleichen Anzahl Tage davor). Die Kachel Zahlungseingang zeigt die Differenz und die Wachstumsrate, und das Umsatzdiagramm erhält eine hellere Linie für den Vergleichszeitraum. Läuft ein Zeitraum noch, wird der Vergleichszeitraum zum gleichen Zeitpunkt abgeschnitten.",
          "Wochentag × Uhrzeit: Stellen Sie die Kopfzeile „Umsatz im Zeitverlauf“ auf Wochentag × Uhrzeit um und sehen Sie eine Heatmap mit sieben Tagen und 24 Stunden – je dunkler ein Feld, desto mehr haben Sie verkauft. Wechseln Sie zwischen Umsatz und Bestellungen; bei eingeschaltetem Vergleich sehen Sie, welche Stunden gewachsen und welche geschrumpft sind.",
          "Ladenhüter: Stellen Sie die Kopfzeile der Ranking-Karte auf Ladenhüter um, um Artikel von den wenigsten bis zu den meisten Verkäufen aufzulisten, mit aktuellem Bestand und dem Datum des letzten Verkaufs. Artikel, die nie verkauft wurden, sind mit „Nie verkauft“ markiert. Standardmäßig werden nur Artikel mit Bestand angezeigt.",
          "Wiederkaufrate: Die letzte Zeile der Kundenkachel zeigt den Anteil der Mitglieder, die im Zeitraum gekauft haben und insgesamt mindestens zweimal gekauft haben.",
          "Aktuell: Lagerwert (aktueller Bestand × aktueller Einkaufspreis), alle Lagerbewegungen im gewählten Zeitraum sowie die Punkte, die Kunden besitzen, aber noch nicht eingelöst haben, samt dem höchstmöglichen Abzug. Das sind aktuelle Stände; der Zeitraum ändert sie nicht."
        ]
      },
      {
        "type": "p",
        "text": "Ohne Pro trägt jede dieser fünf Stellen ein kleines Schloss, das eine Erklärung zum Upgrade öffnet; alles andere in der Statistik funktioniert wie bisher. Die Berichte lesen Daten, die Ihr Geschäft ohnehin speichert – endet Pro, werden nur die Berichte ausgeblendet, es gehen keine Daten verloren."
      },
      {
        "type": "note",
        "text": "Personal sieht erweiterte Berichte mit der Berechtigung für das Dashboard; für die Beträge des Lagerwerts ist außerdem die Berechtigung „Einkaufspreis & Rohertrag“ nötig."
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
    "question": "Wie wird der Rohertrag berechnet, wenn ich keine Einkaufspreise eingetragen habe?",
    "keywords": [
      "Einkaufspreis",
      "Rohertrag",
      "Gewinn",
      "Marge",
      "Handelsspanne",
      "Berichte",
      "nicht erfasst",
      "fehlender Einkaufspreis",
      "Rohertrag erfasst"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Einkaufspreis ist ein optionales Feld. Artikel ohne Einkaufspreis bleiben im Rohertrag unberücksichtigt, ihr Umsatz zählt aber weiterhin vollständig. Die Karte „Rohertrag erfasst“ in der Statistik zeigt, wie viele im Zeitraum verkaufte Artikel keinen Einkaufspreis haben; ein Einkaufspreis von 0 gilt als Einkaufspreis, solche Artikel werden also nicht aufgeführt."
      },
      {
        "type": "p",
        "text": "Tippen Sie auf die Karte oder auf „Artikel ansehen“, um „Artikel ohne Einkaufspreis“ zu öffnen, sortiert nach dem Umsatz, der im Rohertrag fehlt. Tippen Sie auf eine Zeile, um den Artikel zu öffnen, tragen Sie über „Bearbeiten“ den Einkaufspreis nach, und die Zeile ist bei Ihrer Rückkehr mit „Einkaufspreis ergänzt“ markiert. Ein Artikel mit Varianten gilt erst dann als „Einkaufspreis ergänzt“, wenn jede ohne Einkaufspreis verkaufte Variante einen hat – ihren eigenen oder den des Artikels, der dann für sie gilt."
      },
      {
        "type": "p",
        "text": "Der Rohertrag ist der Umsatz nach allen Rabatten (Artikel- und Warenkorbrabatte, Aktionen, Punkteeinlösung) und vor Steuern, abzüglich des Einkaufspreises – deshalb heißt das Feld „Einkaufspreis ohne Steuer (optional)“: Tragen Sie ein, was Sie vor Steuern bezahlt haben. Die Marge ist der Rohertrag geteilt durch den Umsatz vor Steuern der Artikel mit Einkaufspreis, sodass Artikel ohne Einkaufspreis sie nicht drücken. Eine Rückgabe nimmt an ihrem Tag den Rohertrag zurück, den diese Artikel eingebracht hatten."
      },
      {
        "type": "note",
        "text": "Ein nachgetragener Einkaufspreis wirkt sich nur auf spätere Verkäufe aus; bereits getätigte Verkäufe werden nicht neu berechnet. Diese Berechnung gibt es seit v3.1: Frühere Versionen zogen nur manuelle Artikelrabatte ab und zählten enthaltene Steuer als Rohertrag. Nach dem Update zeigen Zeiträume mit Rabatten oder enthaltener Steuer daher einen niedrigeren Rohertrag. Das ist eine Korrektur, kein Datenverlust."
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
    "question": "Wie lege ich eine Aktion (Rabattaktion) an?",
    "keywords": [
      "Aktion",
      "Rabattaktion",
      "Angebot",
      "1+1 gratis",
      "Mindestumsatz",
      "Happy Hour",
      "Gutschein"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie Einstellungen → Aktionen. Folgende Arten werden unterstützt:"
      },
      {
        "type": "list",
        "items": [
          "Mindestumsatz: Ab X Einkaufswert gibt es Y Rabatt oder Y % Rabatt.",
          "„Eins kaufen, eins gratis“ und Angebote auf den n-ten Artikel.",
          "Multiplikatoren für Bonuspunkte.",
          "Angebote nur für bestimmte Mitgliedsstufen oder im Geburtstagsmonat.",
          "Kaufe A, erhalte B, kostenpflichtige Zusatzartikel und Festpreisbündel."
        ]
      },
      {
        "type": "p",
        "text": "Jede Aktion lässt sich zeitlich planen (Happy-Hour-Zeitfenster, bestimmte Wochentage, über Mitternacht hinaus), auf bestimmte Artikel beschränken und über Priorität, Kombinationsregeln und Nutzungslimits steuern. Passende Aktionen greifen beim Bezahlen automatisch – Rabattcodes sind nicht nötig."
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
    "question": "Eine Aktion greift nicht – was sollte ich prüfen?",
    "keywords": [
      "Aktion",
      "funktioniert nicht",
      "wird nicht angewendet",
      "Fehlersuche",
      "Rabatt greift nicht"
    ],
    "content": [
      {
        "type": "p",
        "text": "Prüfen Sie die häufigsten Ursachen der Reihe nach:"
      },
      {
        "type": "steps",
        "items": [
          "Zeitplan: Liegt der heutige Tag im aktiven Zeitraum? Schränkt ein Happy-Hour-Zeitfenster den Wochentag oder die Uhrzeit ein?",
          "Geltungsbereich: Gehören die Artikel im Warenkorb zum Artikel- oder Kategoriebereich der Aktion? Ist beim Artikel „Von Aktionen ausschließen“ aktiviert (bei Artikeln mit freiem Preis ist das standardmäßig der Fall)? Ist der Mindestumsatz erreicht?",
          "Zielgruppe: Ist die Aktion auf eine Mitgliedsstufe oder den Geburtstagsmonat beschränkt? Wurde dieses Mitglied beim Bezahlen ausgewählt?",
          "Nutzungslimits: Ist das Gesamtlimit oder das Limit dieses Kunden erreicht? Das Limit pro Kunde einer Geburtstagsmonat-Aktion zählt je Kalenderjahr.",
          "Kombination: Blockiert eine Aktion mit höherer Priorität und der Option „Weitere Aktionen stoppen, wenn diese greift“ die Aktion?"
        ]
      },
      {
        "type": "p",
        "text": "Wenn alles stimmt und die Aktion trotzdem nicht greift, senden Sie uns per E-Mail einen Screenshot der Aktionseinstellungen – wir helfen Ihnen bei der Fehlersuche."
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
    "question": "Wie funktionieren Treuepunkte?",
    "keywords": [
      "Punkte",
      "Treuepunkte",
      "Treueprogramm",
      "Prämien",
      "Punkte einlösen",
      "Willkommensbonus"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie Einstellungen → Treueprogramm und legen Sie zwei Regeln fest: Kunden erhalten Y Punkte pro X Umsatz, und N Punkte lassen sich gegen M Rabatt einlösen (optional mit einer Einlösegrenze pro Bestellung). Neuen Mitgliedern können Sie außerdem automatisch einen Willkommensbonus gutschreiben."
      },
      {
        "type": "p",
        "text": "Wählen Sie beim Bezahlen das Mitglied aus, dann werden die Punkte automatisch gesammelt; zum Einlösen geben Sie die einzusetzenden Punkte ein. Wird eine Bestellung annulliert, werden die dafür gesammelten Punkte wieder abgezogen und eingelöste Punkte zurückgegeben."
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
    "question": "Wozu dienen Mitgliedsstufen?",
    "keywords": [
      "Stufe",
      "Mitgliedsstufe",
      "VIP",
      "Gold",
      "Aufstieg",
      "Kundenstufe"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mitgliedsstufen (z. B. Standard, Silber, Gold) haben zwei Zwecke: Aktionen lassen sich gezielt auf sie ausrichten (z. B. 10 % Rabatt nur für Gold), und Sie erkennen beim Bezahlen auf einen Blick den Status eines Kunden."
      },
      {
        "type": "p",
        "text": "Mitglieder können nach selbst festgelegten Regeln (z. B. nach dem Gesamtumsatz) automatisch in eine höhere Stufe aufsteigen oder manuell einer Stufe zugewiesen werden. Hatte eine annullierte Bestellung einen Aufstieg ausgelöst, wird die Stufe automatisch zurückgesetzt."
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
    "question": "Wie sichere ich meine Daten per Backup?",
    "keywords": [
      "Backup",
      "Datensicherung",
      "iCloud",
      "Google Drive",
      "Dropbox",
      "Cloud",
      "Sicherung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie Einstellungen → Cloud-Backup, wählen Sie iCloud, Google Drive oder Dropbox und erteilen Sie die Berechtigung. Danach können Sie jederzeit manuell ein Backup starten. Für iCloud müssen Sie auf diesem iPad bei iCloud angemeldet sein, iCloud Drive aktiviert haben und DingPOS die Nutzung erlauben."
      },
      {
        "type": "p",
        "text": "Die Backups landen in Ihrem eigenen Cloud-Konto. Jede Cloud behält nur das neueste Backup – eine Sicherung der Daten und eine Datei mit den Artikelfotos – und jedes neue Backup überschreibt das vorherige."
      },
      {
        "type": "note",
        "text": "Weil ein neues Backup das alte ersetzt, sollten Sie nicht sichern, wenn Sie vermuten, dass Ihre Daten bereits fehlerhaft sind (zum Beispiel weil versehentlich mehrere Artikel gelöscht wurden). Schreiben Sie uns stattdessen eine E-Mail, dann klären wir gemeinsam das weitere Vorgehen."
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
    "question": "iCloud-Backup zeigt „Nicht verbunden“ – was tun?",
    "keywords": [
      "iCloud",
      "nicht verbunden",
      "iCloud Drive",
      "Backup fehlgeschlagen",
      "keine Verbindung"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS zeigt iCloud nur dann als verbunden an, wenn es iCloud auch wirklich nutzen kann. Bei „Nicht verbunden“ prüfen Sie drei Dinge in der Einstellungen-App des iPad:"
      },
      {
        "type": "steps",
        "items": [
          "Sie sind mit Ihrem Apple-Account angemeldet.",
          "iCloud Drive ist aktiviert.",
          "DingPOS darf iCloud Drive nutzen."
        ]
      },
      {
        "type": "p",
        "text": "Sind alle drei Punkte aktiviert, öffnen Sie in DingPOS wieder Cloud-Backup – iCloud wird dann als verbunden angezeigt. Die Backups liegen im eigenen Ordner von DingPOS in iCloud Drive."
      },
      {
        "type": "note",
        "text": "In Versionen vor v3.0 funktionierte das iCloud-Backup nicht und scheiterte jedes Mal mit „Backup.SyncError error 0“. Aktualisieren Sie DingPOS zuerst im App Store."
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
    "question": "Wie übertrage ich meine Daten auf ein neues iPad?",
    "keywords": [
      "übertragen",
      "neues iPad",
      "wiederherstellen",
      "umziehen",
      "Datenübertragung",
      "iPad wechseln"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Altes iPad: Öffnen Sie Einstellungen → Cloud-Backup und starten Sie ein manuelles Backup. Prüfen Sie, ob sich die Backup-Zeit aktualisiert hat.",
          "Neues iPad: Installieren Sie DingPOS und schließen Sie den Einrichtungsassistenten ab.",
          "Neues iPad: Öffnen Sie Einstellungen → Cloud-Backup, verbinden Sie dasselbe Cloud-Konto und tippen Sie auf Wiederherstellen."
        ]
      },
      {
        "type": "p",
        "text": "Wenn Sie auf Wiederherstellen tippen, erscheint zuerst eine Vorschau: die Anzahl der Artikel, Verkäufe und Kunden auf diesem iPad und in der Sicherung nebeneinander sowie jeder Verkauf, den die Wiederherstellung entfernen würde. Auf diesem iPad ändert sich nichts, bis Sie bestätigen. Stammt die Sicherung von einer neueren DingPOS-Version, werden Sie zuerst aufgefordert, die App zu aktualisieren. Die Artikelfotos werden ebenfalls wiederhergestellt."
      },
      {
        "type": "note",
        "text": "Eine Wiederherstellung ersetzt alle Daten auf diesem iPad durch das Backup – Verkäufe, die nach diesem Backup auf diesem iPad entstanden sind, gehen verloren. Achten Sie darauf, das richtige Cloud-Konto zu verwenden; haben Sie versehentlich das falsche wiederhergestellt, nutzen Sie Wiederherstellung rückgängig machen."
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
    "question": "Bleiben meine Daten erhalten, wenn ich die App lösche?",
    "keywords": [
      "löschen",
      "deinstallieren",
      "Datenverlust",
      "App entfernen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nein. DingPOS speichert alles lokal auf Ihrem Gerät – wenn Sie die App löschen, werden alle Artikel, Verkäufe, Mitglieder und Einstellungen endgültig gelöscht, es sei denn, Sie haben das Cloud-Backup aktiviert."
      },
      {
        "type": "note",
        "text": "Führen Sie vor dem Löschen der App immer ein manuelles Backup durch und prüfen Sie, dass es erfolgreich war. Nach der Neuinstallation stellen Sie die Daten aus der Cloud wieder her."
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
    "question": "Die App zeigt „Ladendaten konnten nicht geöffnet werden“ – was tun?",
    "keywords": [
      "konnte nicht geöffnet werden",
      "App startet nicht",
      "Absturz",
      "Absturz beim Start",
      "Datenbank",
      "Ladendaten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Löschen Sie die App nicht. Dieser Bildschirm bedeutet, dass DingPOS Ihre Ladendaten nicht lesen konnte, die Daten aber noch auf diesem iPad liegen – löschen Sie die App, werden sie mit ihr gelöscht."
      },
      {
        "type": "p",
        "text": "Tippen Sie zuerst auf Erneut versuchen; klappt es, öffnet sich die App wie gewohnt. Tritt der Fehler weiter auf, tippen Sie auf Support kontaktieren und schildern Sie uns das Problem – wir helfen Ihnen, Ihre Daten zu retten. Dieser Bildschirm verschiebt oder löscht keine Dateien."
      },
      {
        "type": "note",
        "text": "Die häufigste Ursache ist, dass die App mitten in einer Wiederherstellung beendet wurde. Vor v3.0 führte das dazu, dass die App bei jedem Start abstürzte; seit v3.0 hält sie stattdessen auf diesem Bildschirm an."
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
    "question": "Kann ich zwei iPads gleichzeitig nutzen?",
    "keywords": [
      "zwei iPads",
      "mehrere Geräte",
      "Synchronisierung",
      "teilen",
      "zweite Kasse"
    ],
    "content": [
      {
        "type": "p",
        "text": "Die Daten jedes iPads sind derzeit unabhängig voneinander – ein gemeinsamer Datenbestand in Echtzeit über zwei Geräte wird noch nicht unterstützt."
      },
      {
        "type": "p",
        "text": "Per Cloud-Backup (sichern → wiederherstellen) können Sie Daten von einem iPad auf ein anderes kopieren. Das eignet sich gut, um das Gerät zu wechseln oder ein zweites iPad vorzubereiten. Verkäufe, die getrennt auf jedem Gerät erfasst werden, werden jedoch nicht automatisch zusammengeführt. Die Synchronisierung mehrerer Geräte steht auf unserer Roadmap."
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
    "question": "Kann ich Artikel und Verkäufe aus einem anderen Kassensystem oder einer Tabelle importieren?",
    "keywords": [
      "Import",
      "CSV",
      "Excel",
      "Tabelle",
      "Daten übernehmen",
      "Kassensystem wechseln",
      "Massenimport",
      "Verkaufshistorie"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Öffnen Sie Einstellungen → Datenimport, wählen Sie, ob Sie Artikel oder Verkäufe importieren möchten, und wählen Sie eine CSV-Datei (Excel und Google Sheets können beide als CSV speichern)."
      },
      {
        "type": "steps",
        "items": [
          "Die Datei öffnet sich als Tabelle. Gängige Spaltennamen auf Englisch und Chinesisch (traditionell oder vereinfacht) werden automatisch zugeordnet; tippen Sie auf eine Spaltenüberschrift, um die Zuordnung zu ändern.",
          "Tippen Sie auf eine Zelle, um ihren Wert direkt zu korrigieren – Sie müssen die Datei nicht bearbeiten und neu beginnen.",
          "Tippen Sie auf Bestätigen, um die Daten zu prüfen. Zeilen mit Problemen werden rot markiert und mit Grund angezeigt; beim Import von Verkäufen lassen sich Verkäufe mit Fehlern überspringen.",
          "Klären Sie alles, was eine Entscheidung erfordert (doppelte Artikelnamen, eine Zeile, die zu mehreren Kunden passt), prüfen Sie die Zusammenfassung und tippen Sie dann auf Import starten."
        ]
      },
      {
        "type": "list",
        "items": [
          "Importierte Verkäufe werden nach Bestelldatum eingeordnet und mit der Währung und dem Steuermodus Ihres Geschäfts neu berechnet. Sie wirken sich nicht auf den Bestand aus und vergeben keine Willkommenspunkte.",
          "Kunden werden anhand von Telefonnummer oder E-Mail bestehenden Kunden zugeordnet; wer nicht zugeordnet werden kann, wird neu angelegt.",
          "Importierte Verkäufe zeigen das Datum „Importiert am“ und die ursprüngliche Belegnummer und können nicht annulliert oder zurückgegeben werden.",
          "Zeilen mit Fehlern lassen sich als CSV exportieren, ergänzt um die Gründe – korrigieren Sie sie und importieren Sie erneut. Doppelte Zeilen werden automatisch übersprungen."
        ]
      },
      {
        "type": "note",
        "text": "Der Datenimport befindet sich in der Beta-Phase. Jede Datei darf bis zu 50.000 Zeilen oder 20 MB enthalten. Führen Sie vor dem Import ein Cloud-Backup durch; lässt sich etwas nicht importieren oder sieht das Ergebnis falsch aus, melden Sie es uns über Problem melden auf dem Importbildschirm."
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
    "question": "Ich habe das falsche Backup wiederhergestellt – kann ich das rückgängig machen?",
    "keywords": [
      "Wiederherstellung rückgängig machen",
      "wiederherstellen",
      "falsche Sicherung",
      "Wiederherstellungsprotokolle",
      "Daten verloren",
      "zurücksetzen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Jede Wiederherstellung aus der Cloud behält die ersetzten Daten als Kopie vor der Wiederherstellung. Unter Einstellungen → Cloud-Backup zeigt eine Karte, wann die letzte Wiederherstellung stattfand und woher sie stammte. Tippen Sie auf Wiederherstellung rückgängig machen, prüfen Sie die Vorschau und bestätigen Sie – die Daten werden auf den Stand vor der Wiederherstellung zurückgesetzt und die App lädt neu."
      },
      {
        "type": "list",
        "items": [
          "Wiederherstellung rückgängig machen ist selbst eine Wiederherstellung und behält eine weitere Kopie der ersetzten Daten – wenn Sie erneut tippen, wechseln Sie wieder zurück.",
          "Es wird nur die neueste Kopie aufbewahrt; die nächste Wiederherstellung ersetzt sie.",
          "Es kommen nur Daten zurück: Artikel, die nach der Sicherung hinzugefügt wurden, zeigen ein fehlendes Bild."
        ]
      },
      {
        "type": "p",
        "text": "Wer wann und von welcher Sicherung wiederhergestellt hat, sehen Sie, wenn Sie auf demselben Bildschirm auf Wiederherstellungsprotokolle ansehen tippen: Zeitpunkt, Bediener:in, Quelle, Anzahl der Artikel, Verkäufe und Kunden vorher und nachher sowie jeder entfernte Verkauf. Die Protokolle liegen auf diesem iPad und werden durch eine Wiederherstellung nie ersetzt."
      },
      {
        "type": "note",
        "text": "Die Wiederherstellungsvorschau und Wiederherstellung rückgängig machen funktionieren in jedem Tarif; Wiederherstellungsprotokolle ansehen ist eine Pro-Funktion. Die Protokolle werden auch ohne Pro geschrieben (nur ohne Bediener:in) – wer später Pro abonniert, sieht sie also alle."
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
    "question": "Wie lege ich Mitarbeiter:innen an und wechsle die Person an der Kasse?",
    "keywords": [
      "Mitarbeiter",
      "Personal",
      "Manager",
      "Konto",
      "PIN",
      "Bediener",
      "wechseln",
      "Schichtwechsel",
      "Kassierer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tippen Sie in der Seitenleiste auf Personal. Beim ersten Öffnen richten Sie das Inhaberprofil ein: mit einem Namen und einer vierstelligen PIN. Zum Hinzufügen von Mitarbeiter:innen und Ändern von Berechtigungen benötigen Sie diese PIN – merken Sie sie sich gut, sie lässt sich nicht zurücksetzen."
      },
      {
        "type": "steps",
        "items": [
          "Tippen Sie auf der Seite Personal auf Mitarbeiter:in hinzufügen, geben Sie einen Namen ein, wählen Sie eine Rolle (Manager:in oder Mitarbeiter:in) und legen Sie eine 4-stellige PIN fest.",
          "Unten in der Seitenleiste und oben rechts an der Kasse wird angezeigt, wer gerade als Bediener:in ausgewählt ist. Tippen Sie beim Schichtwechsel darauf, wählen Sie Ihren Namen und geben Sie Ihre PIN ein.",
          "Ab dann wird bei jeder Bestellung, Zahlung sowie jeder Bestands- oder Punktebewegung festgehalten, wer sie bearbeitet hat – sichtbar in der Bestellliste und in den Details; bei annullierten Bestellungen wird zusätzlich erfasst, wer sie annulliert hat."
        ]
      },
      {
        "type": "p",
        "text": "Wenn jemand das Geschäft verlässt, nutzen Sie Mitarbeiter:in deaktivieren: Der Verlauf bleibt erhalten, und Sie können die Person später wieder aktivieren. Eine Umbenennung ändert alte Bestellungen nicht – sie behalten den damaligen Namen."
      },
      {
        "type": "note",
        "text": "Personal ist eine Pro-Funktion (auch während der Testphase verfügbar). Endet Pro, bleiben die Personaldaten und die jeweils für eine Bestellung erfasste Bediener:in erhalten. Neue Bestellungen werden der Inhaber:in zugeordnet; mit einem erneuten Pro-Abo ist alles wieder da."
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
    "question": "Was tun, wenn ich die Inhaber-PIN vergessen habe?",
    "keywords": [
      "PIN",
      "vergessen",
      "Passwort",
      "zurücksetzen",
      "Inhaber",
      "wiederherstellen",
      "ausgesperrt"
    ],
    "content": [
      {
        "type": "p",
        "text": "Die Inhaber-PIN lässt sich nicht zurücksetzen, und auch unser Support kann sie nicht entsperren. Die PIN wird zusammen mit Ihren Ladendaten gespeichert: Wenn Sie die App löschen, neu installieren und aus der Cloud wiederherstellen, ist dieselbe PIN wieder da."
      },
      {
        "type": "p",
        "text": "Beim Einrichten des Inhaberprofils und bei jeder Änderung der Inhaber-PIN erscheint der Hinweis „Merken Sie sich diese PIN. Wenn Sie sie vergessen, kann sie nicht zurückgesetzt werden.“ Bewahren Sie sie an einem Ort auf, zu dem nur Sie Zugang haben."
      },
      {
        "type": "p",
        "text": "Ohne die Inhaber-PIN bleibt alles unerreichbar, was sie erfordert – Mitarbeiter:innen hinzufügen oder bearbeiten, Rollenberechtigungen ändern und das Aktivitätsprotokoll ansehen. Mitarbeiter:innen können mit ihrer eigenen PIN weiter kassieren und den Tagesbetrieb erledigen."
      },
      {
        "type": "note",
        "text": "Vergisst eine Mitarbeiter:in ihre PIN, ist das kein Problem: Die Inhaber:in kann sie unter Personal zurücksetzen."
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
    "question": "Wie funktionieren Berechtigungen für Mitarbeiter:innen und Freigaben durch Manager:innen?",
    "keywords": [
      "Berechtigungen",
      "Freigabe",
      "Manager",
      "Rabattgrenze",
      "Personal",
      "Einkaufspreis",
      "Rolle"
    ],
    "content": [
      {
        "type": "p",
        "text": "Eine Berechtigung hat zwei Werte: Erlaubt oder Freigabe nötig – ein striktes Verbot gibt es nicht. Stößt das Personal auf eine Aktion, die eine Freigabe braucht, wählt eine Kolleg:in, die das darf, ihren Namen und gibt ihre PIN ein, um die Aktion durchzulassen."
      },
      {
        "type": "list",
        "items": [
          "Aktionen (manuelle Bestandskorrektur, Artikelverwaltung, Bezahlen über der Rabattgrenze): Eine Freigabe gilt für genau diese eine Aktion.",
          "Ansichten (Einkaufspreis & Rohertrag, Statistik, Einstellungen, Backup & Wiederherstellung): Eine Freigabe schaltet frei, bis die Bediener:in wechselt oder die App in den Hintergrund geht.",
          "Die Rabattgrenze gilt für manuelle Rabatte und wird einmal beim Bezahlen geprüft; automatische Aktionen und das Einlösen von Punkten zählen nicht dazu."
        ]
      },
      {
        "type": "p",
        "text": "Werkseinstellung: Manager:innen dürfen alles außer Backup & Wiederherstellung, ohne Rabattgrenze; Mitarbeiter:innen brauchen für alles eine Freigabe, bei einer Rabattgrenze von 10 %. Die Inhaber:in darf immer alles und kann nicht bearbeitet werden. Zum Ändern gehen Sie zu Personal → Rollenberechtigungen, tippen auf Bearbeiten und anschließend einmal auf Sichern – die Änderung gilt sofort für alle."
      },
      {
        "type": "note",
        "text": "Annullierungen, Rückgaben, Verkäufe auf Rechnung und Einkäufe haben bewusst keine Berechtigung; es wird nur festgehalten, wer sie bearbeitet hat. Um sie später nachzuvollziehen, nutzen Sie das Aktivitätsprotokoll."
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
    "question": "Wie sehe ich, wer eine Bestellung annulliert, den Bestand korrigiert oder einen Preis geändert hat?",
    "keywords": [
      "Aktivitätsprotokoll",
      "Prüfprotokoll",
      "wer hat geändert",
      "annulliert",
      "Preisänderung",
      "Bestandskorrektur",
      "gelöschter Artikel",
      "Freigaben",
      "Protokoll"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nutzen Sie das Aktivitätsprotokoll. Tippen Sie auf der Seite Personal oben rechts auf Aktivitätsprotokoll und geben Sie die Inhaber-PIN ein. Dann sehen Sie die sensiblen Vorgänge Ihres Ladens, die neuesten zuerst: Annullierungen, Rückgaben, manuelle Bestandskorrekturen, Freigaben, Änderungen an Personal und Berechtigungen, Änderungen der Inhaber-PIN, Preis- und Einkaufspreisänderungen bei Artikeln sowie gelöschte Artikel. Normale Verkäufe werden nicht aufgeführt."
      },
      {
        "type": "list",
        "items": [
          "Jeder Eintrag zeigt, was betroffen war, wer wann was getan hat und das Ergebnis – zum Beispiel „M Preis 390 € → 350 €“.",
          "Filtern Sie nach Mitarbeiter:in (auch deaktivierte), Vorgangsart und Heute / Diese Woche / Dieser Monat.",
          "Tippen Sie auf einen Eintrag, der auf eine Bestellung, einen Artikel oder eine Kundschaft verweist, um die Details zu öffnen.",
          "Bestelldetails, Artikeldetails und die Seite jeder Mitarbeiter:in haben jeweils eine eigene Liste, die nur die Einträge zu genau diesem Objekt zeigt.",
          "Gelöschte Artikel zeigen im Protokoll weiterhin ihren damaligen Namen und Preis."
        ]
      },
      {
        "type": "note",
        "text": "In jedem Tarif wird aufgezeichnet; nur das Ansehen ist eine Pro-Funktion. Einträge aus der Zeit ohne Pro erscheinen also, sobald Sie wieder abonnieren. Das Protokoll wird mit Ihren Cloud-Backups gesichert."
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
    "question": "Wie funktioniert die kostenlose Testphase von DingPOS?",
    "keywords": [
      "Testphase",
      "kostenlos testen",
      "30 Tage",
      "gratis",
      "kostenlose Testphase"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ab der Installation nutzen Sie 30 Tage lang alle Funktionen des Tarifs Pro, darunter Mitarbeiter:innen-Konten, Berechtigungen, das Aktivitätsprotokoll und erweiterte Berichte – ohne Konto."
      },
      {
        "type": "p",
        "text": "Wenn Sie während der Testphase einen Tarif abonnieren, endet die Testphase sofort, und ab dann gilt der gekaufte Tarif. Nach der Testphase bleiben Pro-Funktionen wie Personal und erweiterte Berichte nur mit einem Pro-Abonnement verfügbar."
      },
      {
        "type": "p",
        "text": "In den letzten 7 Tagen und am letzten Tag erinnert Sie die App jeweils einmal daran, wie viele Tage noch bleiben, dass die Kasse pausiert, wenn die Testphase endet, und dass Ihre Daten erhalten bleiben."
      },
      {
        "type": "p",
        "text": "Alles, was Sie während der Testphase anlegen (Artikel, Bestellungen, Kunden), bleibt vollständig erhalten. Ihre Daten werden nie gelöscht – egal, ob Sie danach abonnieren oder nicht."
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
    "question": "Gehen meine Daten verloren, wenn die Testphase endet?",
    "keywords": [
      "Testphase abgelaufen",
      "Ende der Testphase",
      "Kasse gesperrt",
      "Daten",
      "Daten verloren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nein – Ihre Daten bleiben dauerhaft auf Ihrem Gerät. Nach Ende der Testphase ist das Bezahlen gesperrt, aber Sie können weiterhin Bestellungen ansehen, Berichte aufrufen und Artikel verwalten."
      },
      {
        "type": "p",
        "text": "Sie können jederzeit abonnieren: Das Bezahlen ist sofort wieder freigeschaltet, und alle Daten sind genau so, wie Sie sie verlassen haben."
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
    "question": "Was ist der Unterschied zwischen Lite, Standard und Pro?",
    "keywords": [
      "Tarife",
      "Lite",
      "Standard",
      "Pro",
      "Unterschied",
      "Tarife vergleichen",
      "Upgrade",
      "Downgrade",
      "Preise"
    ],
    "content": [
      {
        "type": "p",
        "text": "Alle drei Tarife enthalten die komplette Kasse, Artikel, Bestellungen (mit Annullierungen, Rückgaben und Umtausch), Berichte und Cloud-Backup. Sie unterscheiden sich in den Werkzeugen für den Ladenalltag:"
      },
      {
        "type": "list",
        "items": [
          "Lite: für Einzelpersonen am Marktstand, die Kasse und Artikel brauchen.",
          "Standard: zusätzlich Aktionen, Punkte und Kundenstufen, Bestandsverwaltung, Einkauf, Verkauf auf Rechnung, Vorbestellungen und Schätzung der Bearbeitungsgebühren.",
          "Pro: zusätzlich Mitarbeiter:innen-Konten und Berechtigungen, Freigaben, Aktivitätsprotokoll, Wiederherstellungsprotokoll und erweiterte Berichte – für Geschäfte mit Personal."
        ]
      },
      {
        "type": "p",
        "text": "Sie haben bereits Standard? Wechseln Sie auf der Abonnement-Seite zu Pro: Die Abrechnung bleibt im selben Zyklus, das Upgrade gilt sofort, und Apple verrechnet die Differenz anteilig. Der Wechsel von Pro zurück zu Standard greift zur nächsten Verlängerung. Die Preise sehen Sie in der App, und auf unserer Seite „Preise“ können Sie die Tarife vergleichen."
      },
      {
        "type": "note",
        "text": "Bei einem Downgrade werden nie Daten gelöscht. Funktionen außerhalb Ihres Tarifs pausieren, die Daten bleiben erhalten, und mit einem erneuten Abonnement sind die Funktionen wieder da."
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
    "question": "Wie abonniere ich DingPOS, kündige das Abo oder stelle Käufe wieder her?",
    "keywords": [
      "abonnieren",
      "kündigen",
      "Abo kündigen",
      "Käufe wiederherstellen",
      "Preis",
      "Abrechnung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abonnements laufen über den In-App-Kauf im App Store – Tarife und Preise sehen Sie in der App. Die Zahlung wickelt Apple ab; Ihre Zahlungsdaten bekommen wir nie zu sehen."
      },
      {
        "type": "list",
        "items": [
          "Kündigen: Verwalten Sie das Abo auf Ihrem Gerät unter Einstellungen → Apple-Account → Abonnements. Kündigen Sie mindestens 24 Stunden vor Ende des laufenden Zeitraums, damit es sich nicht verlängert.",
          "Wiederherstellen: Nach einem Gerätewechsel oder einer Neuinstallation tippen Sie auf der Abonnement-Seite von DingPOS auf „Käufe wiederherstellen“.",
          "Tarif wechseln: Wählen Sie auf der Abonnement-Seite von DingPOS den neuen Tarif. Upgrades (Standard zu Pro, monatlich zu jährlich) gelten sofort, wobei Apple die Differenz anteilig verrechnet; Downgrades greifen zur nächsten Verlängerung."
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
    "question": "Mindestbetrag-Rabatt einrichten: Rabatt ab einem bestimmten Einkaufswert",
    "keywords": [
      "Mindestbetrag",
      "Rabatt ab Einkaufswert",
      "Schwelle",
      "Anleitung",
      "Einrichtung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie Einstellungen → Aktionen, tippen Sie auf „Hinzufügen“, wählen Sie den Mindestbetrag-Typ und gehen Sie dann so vor:"
      },
      {
        "type": "steps",
        "items": [
          "Legen Sie den Mindestbetrag und den Rabatt fest (fester Betrag oder Prozentsatz).",
          "Wählen Sie den Geltungsbereich: bestimmte Artikel, bestimmte Kategorien oder leer lassen für das gesamte Sortiment.",
          "Legen Sie den Zeitplan fest: Das Startdatum ist Pflicht; lassen Sie das Enddatum leer für eine unbefristete Aktion.",
          "Sichern Sie die Aktion – sie startet planmäßig und wird an der Kasse automatisch angewendet, ganz ohne Codes."
        ]
      },
      {
        "type": "note",
        "text": "Der Mindestbetrag wird anhand der Zwischensumme der Artikel im Geltungsbereich geprüft, nicht anhand des gesamten Warenkorbs. Bei einer Aktion „1000 € in Getränken ausgeben“ zählen nur Getränke zum Mindestbetrag; Artikel, die als „von Aktionen ausgeschlossen“ markiert sind, zählen nie mit."
      },
      {
        "type": "p",
        "text": "Eine Besonderheit, nach der wir oft gefragt werden: Greift zuvor eine Aktion mit höherer Priorität, wird der Mindestbetrag am bereits rabattierten Betrag geprüft – ein Warenkorb, der über der Schwelle zu liegen scheint, kann sie knapp verfehlen. Soll die Schwelle zuerst geprüft werden, geben Sie ihr eine kleinere Prioritätsnummer."
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
    "question": "„Kaufe 1, erhalte 1 gratis“ und Angebote für jeden n-ten Artikel einrichten",
    "keywords": [
      "2 für 1",
      "Kaufe 2 erhalte 1",
      "3 zum Preis von 2",
      "Mengenrabatt",
      "Anleitung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Erstellen Sie eine Aktion vom Typ „X kaufen / Y erhalten“: Legen Sie fest, wie viele Artikel gekauft werden, wie viele man erhält und wie hoch der Rabatt in Prozent ist (100 % = gratis). Beschränken Sie sie auf bestimmte Artikel oder eine ganze Kategorie – verschiedene Artikel derselben Kategorie werden zu einer Gruppe zusammengefasst."
      },
      {
        "type": "list",
        "items": [
          "Rabattiert wird der günstigste Artikel der Gruppe, und zwar zu seinem aktuell gültigen Preis: Hat eine frühere Aktion ihn schon rabattiert, basiert der Rabatt auf dem rabattierten Preis, nicht auf dem Listenpreis.",
          "Soll das Label „3. Artikel gratis“ den vollen Listenpreis anzeigen, geben Sie dieser Aktion die kleinste Prioritätsnummer, damit sie zuerst berechnet wird. Läuft zuvor ein Warenkorb-Rabatt, fällt der angezeigte Abzug beim Gratisartikel kleiner aus als der Listenpreis – das ist eine Eigenschaft der Berechnungsreihenfolge, die wir umfassend geprüft haben, kein Fehler. Beide Reihenfolgen führen zu nahezu derselben Summe; es ändert sich nur, wo der Rabatt sichtbar erscheint."
        ]
      },
      {
        "type": "p",
        "text": "Tipp: Setzen Sie Ihr Hauptangebot in der Priorität an die erste Stelle, damit die Rabattaufschlüsselung auf dem Beleg zu Ihrer Werbebotschaft passt."
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
    "question": "Doppelte Punkte einrichten: Punkte-Multiplikator für Bonuspunkte",
    "keywords": [
      "Punkte-Multiplikator",
      "doppelte Punkte",
      "Bonuspunkte",
      "Anleitung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Erstellen Sie eine Aktion vom Typ „Punkte-Multiplikator“ und legen Sie den Multiplikator fest (eine ganze Zahl ab 2). Optional ergänzen Sie einen Mindestbetrag (z. B. ab 500 € doppelte Punkte) und einen Zeitplan (z. B. nur samstags)."
      },
      {
        "type": "list",
        "items": [
          "Wenn mehrere Multiplikatoren gleichzeitig zutreffen, gilt nur der höchste – sie werden nie multipliziert oder addiert.",
          "Der Mindestbetrag wird nach der Punkteeinlösung geprüft: Sinkt die Summe durch eingelöste Punkte unter die Schwelle, greift der Multiplikator diesmal nicht.",
          "Damit Punkte gutgeschrieben werden, muss beim Bezahlen ein Mitglied ausgewählt sein – Bestellungen ohne Mitglied sammeln keine Punkte, der Multiplikator hat dann nichts zu multiplizieren."
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
    "question": "Angebote für Mitgliedsstufen und Geburtstage einrichten",
    "keywords": [
      "Mitgliedsstufe",
      "Geburtstag",
      "Geburtstagsrabatt",
      "VIP",
      "Anleitung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Legen Sie zuerst unter Einstellungen → Mitgliedsstufen Stufen an (z. B. Gold) und richten Sie die Aktion dann auf diese Stufe aus. Für Geburtstagsangebote wählen Sie unter „Wer darf teilnehmen“ die Option „Geburtstagsmonat“ und füllen „Limit pro Kunde“ aus."
      },
      {
        "type": "list",
        "items": [
          "Das Mitglied muss beim Bezahlen ausgewählt sein, damit das Angebot greift – die Berechtigung wird anhand des aktuell ausgewählten Mitglieds geprüft.",
          "Die Geburtstagsprüfung liest den Geburtsmonat des Mitglieds. Tragen Sie also das Geburtstagsfeld ein; Mitglieder ohne Eintrag gelten nie als Geburtstagskunden.",
          "Eine Geburtstagsmonat-Aktion braucht ein Limit pro Kunde, das je Kalenderjahr gezählt wird: Bei einem Limit von 1 kann jeder Kunde sie einmal pro Jahr nutzen, im nächsten Jahr beginnt es von vorn. Ohne Limit lässt sie sich nicht sichern.",
          "Automatische Stufenaufstiege werden beim Abschluss des Bezahlvorgangs geprüft; wird die Bestellung annulliert, wird ein dadurch ausgelöster Aufstieg automatisch zurückgenommen."
        ]
      },
      {
        "type": "note",
        "text": "Vor v3.2 zeigte eine Geburtstagsmonat-Aktion einen Fehler an und ließ sich auch mit ausgefülltem Limit pro Kunde nicht sichern. Falls Ihnen das passiert, aktualisieren Sie DingPOS im App Store."
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
    "question": "Gratisgeschenke, Zusatzartikel zum Aktionspreis und Festpreisbündel einrichten",
    "keywords": [
      "Geschenk",
      "Gratisgeschenk",
      "Zusatzartikel",
      "Festpreisbündel",
      "A kaufen B erhalten",
      "Anleitung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Es stehen drei kombinierte Angebotstypen zur Verfügung: Geschenk beim Kauf (A kaufen, B erhalten), Zusatzartikel zum Aktionspreis (für X € dazu erhalten Sie Y) und Festpreisbündel (beliebige N Artikel für X €). Geschenke und Zusatzartikel warten auf die Bestätigung der Kassierer:in; Festpreisbündel werden automatisch angewendet."
      },
      {
        "type": "p",
        "text": "Geschenke und Zusatzartikel verändern den Warenkorb nie von selbst. Sind die Bedingungen erfüllt, erscheint auf dem Kassenbildschirm ein Vorschlagsbanner, und der Warenkorb ändert sich erst, wenn die Kassierer:in auf „Annehmen“ tippt. Das ist Absicht, denn Geschenke betreffen den physischen Bestand: Jemand muss prüfen, ob der Artikel vorrätig ist und ob der Kunde ihn möchte."
      },
      {
        "type": "list",
        "items": [
          "Nach „Ablehnen“ erscheint derselbe Vorschlag für diesen Warenkorb nicht erneut; bei einem neuen oder geleerten Warenkorb wird wieder gefragt.",
          "Erscheint vor der Bestätigung beim Bezahlen ein neuer Vorschlag, muss er angenommen oder abgelehnt werden, bevor die Bestellung abgeschickt werden kann.",
          "Geschenk- und Zusatzartikel-Zeilen können von anderen Geldrabatt-Aktionen nicht weiter rabattiert werden und zählen nicht zu den Mindestbeträgen anderer Aktionen."
        ]
      },
      {
        "type": "p",
        "text": "Festpreisbündel (automatisch angewendet seit v2.4): Sobald der Warenkorb ein Bündel bilden kann, fasst DingPOS es zusammen und berücksichtigt es in der Summe – ohne Nachfrage, und Bündel lassen sich nicht aufteilen."
      },
      {
        "type": "list",
        "items": [
          "Ein Bündel entsteht nur, wenn der Warenkorb dadurch günstiger wird. Bei gleich teuren Artikeln werden zuerst nicht rabattierte gruppiert; bereits rabattierte Artikel behalten ihren Rabatt.",
          "Welche Artikel zusammengefasst werden, hängt nur vom Inhalt des Warenkorbs ab, nie von der Reihenfolge des Scannens.",
          "Jeder Artikel im Bündel zeigt seinen Anteil am Bündelrabatt, und der Betrag jeder Zeile gilt nach Rabatten.",
          "Beim Bezahlen werden die Bündel mit den neuesten Preisen neu gebildet; ändert sich das Ergebnis, werden Sie gebeten, die neue Summe zu bestätigen."
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
    "question": "Zeitplan und Happy Hour für Aktionen einrichten",
    "keywords": [
      "Zeitplan",
      "Happy Hour",
      "Wochentag",
      "Mitternacht",
      "Anleitung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Zeitplan jeder Aktion hat drei Ebenen: einen Datumsbereich (Beginn erforderlich, Ende optional), ein tägliches Zeitfenster (Happy Hour) und ausgewählte Wochentage. Alle drei müssen zutreffen, damit die Aktion greift."
      },
      {
        "type": "list",
        "items": [
          "Bei Zeitfenstern über Mitternacht (z. B. 22:00–02:00) zählt der Wochentag, an dem das Fenster beginnt: Ist nur Freitag ausgewählt, gilt Samstag um 01:30 noch als Teil des Freitags-Zeitfensters und die Aktion greift – Samstag um 23:30 dagegen nicht.",
          "Das Enddatum ist eine harte Grenze: Selbst wenn ein Happy-Hour-Fenster noch läuft, endet die Aktion in dem Moment, in dem das Enddatum verstreicht.",
          "Die Uhrzeit stammt von der Systemuhr des iPad – achten Sie daher auf die richtige Zeitzone und Uhrzeit des Geräts."
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
    "question": "Priorität, Kombinierbarkeit und „Weitere Aktionen stoppen“ erklärt",
    "keywords": [
      "Priorität",
      "kombinierbar",
      "Rabatte kombinieren",
      "Weitere Aktionen stoppen",
      "Konflikt",
      "Anleitung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Treffen mehrere Aktionen gleichzeitig zu, steuern drei Einstellungen Reihenfolge und Zusammenspiel:"
      },
      {
        "type": "list",
        "items": [
          "Priorität: Kleinere Nummern werden zuerst berechnet. Ziehen Sie Einträge in der Aktionsliste, um die Reihenfolge zu ändern.",
          "Mit anderen Aktionen kombinierbar (standardmäßig an): Ist die Option aus, sperrt eine Artikelaktion nur die Zeilen, die sie rabattiert hat – andere Artikel können weiterhin spätere Artikelaktionen erhalten; eine nicht kombinierbare Warenkorb-Aktion blockiert alle späteren Warenkorb-Aktionen.",
          "Weitere Aktionen stoppen, wenn diese greift: Sobald diese Aktion angewendet wurde, werden keine weiteren Geldrabatte mehr berechnet – Punkte-Multiplikatoren und Geschenkvorschläge bleiben davon unberührt."
        ]
      },
      {
        "type": "note",
        "text": "Spätere Aktionen werden auf den bereits rabattierten Betrag berechnet: 10 % Rabatt plus 5 % Rabatt sind nicht 15 % Rabatt – der zweite Rabatt gilt für die Summe nach dem ersten. Außerdem sucht DingPOS nie nach der für den Kunden günstigsten Kombination; die Reihenfolge ergibt sich allein aus Ihren Prioritäten."
      },
      {
        "type": "p",
        "text": "Gut zu wissen: Wird ein Rabatt auf null gerundet, zählt er nicht als angewendet und verbraucht auch kein Nutzungslimit."
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
    "question": "Gibt es bald eine integrierte Kartenzahlung in der Kassen-App?",
    "keywords": [
      "Zahlungsabwicklung",
      "Kartenzahlung",
      "Integration",
      "Zahlungsanbieter",
      "Kartenterminal"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS greift derzeit nicht in den Geldfluss ein: Zahlungsarten sind reine Buchhaltungsbezeichnungen, bezahlt wird weiterhin über Ihr vorhandenes Kartenterminal oder Ihre Zahlungs-App."
      },
      {
        "type": "p",
        "text": "Ob wir die Zahlungsabwicklung integrieren, hängt vom tatsächlichen Bedarf ab. Wenn Sie sie brauchen, schreiben Sie uns, welchen Dienst Sie anbinden möchten (welchen Zahlungsanbieter, welches Terminal) und wofür Sie ihn einsetzen – wir priorisieren die Entwicklung nach der Zahl der Anfragen."
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
    "question": "Kann DingPOS elektronische Rechnungen erstellen und Bons drucken?",
    "keywords": [
      "elektronische Rechnung",
      "E-Rechnung",
      "Rechnung",
      "Kassenbon",
      "Bondrucker",
      "Drucker"
    ],
    "content": [
      {
        "type": "p",
        "text": "Noch nicht. Für elektronische Rechnungen und den Belegdruck müssten wir Rechnungsgeräte bzw. Bondrucker anschaffen, um sie zu testen und die Anbindung zu entwickeln – das ist ein erheblicher Kostenfaktor. Als kleines Team planen wir das ein, sobald die Nutzerzahl wächst und die Einnahmen stabil sind."
      },
      {
        "type": "p",
        "text": "Wenn Sie das brauchen, schreiben Sie uns das Gerätemodell, das Sie verwenden – wir priorisieren die Entwicklung nach der Zahl der Anfragen."
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
    "question": "Kann ich einen Barcode-Scanner an DingPOS anschließen?",
    "keywords": [
      "Barcode-Scanner",
      "Scanner",
      "Handscanner",
      "Bluetooth",
      "USB",
      "Hardware"
    ],
    "content": [
      {
        "type": "p",
        "text": "Das Scannen von Barcodes mit der Kamera zum Anlegen von Artikeln wird bereits unterstützt. Externe Scanner (USB / Bluetooth) werden noch nicht offiziell unterstützt – wie andere Hardware-Funktionen brauchen sie Geräte, die wir zum Testen und Entwickeln anschaffen müssen, und werden mit wachsender Nutzerzahl eingeplant."
      },
      {
        "type": "note",
        "text": "Das Suchfeld an der Kasse findet auch Barcodes. Ein Scanner im Tastaturmodus könnte also theoretisch dort eintippen und Artikel aufrufen – wir haben das aber nicht an echter Hardware geprüft und unterstützen es deshalb nicht offiziell. Wenn Sie einen Scanner getestet haben, der funktioniert, nennen Sie uns das Modell!"
      },
      {
        "type": "p",
        "text": "Wenn Sie das brauchen, schreiben Sie uns – wir priorisieren die Entwicklung nach der Zahl der Anfragen."
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
    "question": "Gibt es einen Monatsabschluss-Bericht für offene Posten und Umsätze?",
    "keywords": [
      "Monatsabschluss",
      "Abstimmung",
      "Abschluss",
      "Monatsbericht",
      "Verbindlichkeiten",
      "Forderungen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Einen eigenen Monatsabschluss-Bericht gibt es noch nicht, aber alles, was Sie für den Abgleich brauchen, steckt bereits in der App:"
      },
      {
        "type": "list",
        "items": [
          "Stellen Sie unter Statistik den Zeitraum Dieser Monat ein – dann sehen Sie Umsatz, Zahlungseingang, Rohertrag und die Aufteilung nach Zahlungsarten des Monats.",
          "Einkäufe bei Lieferanten auf Monatsziel sammeln sich unter Zu zahlen im Bereich Einkauf; dort lässt sich ein ganzer Monat auf einmal begleichen.",
          "Verkäufe auf Rechnung an Kunden sammeln sich unter Verkäufe → Offene Posten; dort lässt sich ein ganzer Monat auf einmal begleichen."
        ]
      },
      {
        "type": "p",
        "text": "Wenn Sie einen Monatsabschluss-Bericht zum Exportieren oder Drucken brauchen, schreiben Sie uns, welche Felder Sie benötigen – wir priorisieren die Entwicklung nach der Zahl der Anfragen."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
