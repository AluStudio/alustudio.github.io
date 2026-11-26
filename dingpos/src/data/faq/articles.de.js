// Generated from en and the de translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync de`, then `npm run l10n -- dingpos apply de`.

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
      "Steuern",
      "Kassen-App einrichten"
    ],
    "content": [
      {
        "type": "p",
        "text": "Beim ersten Öffnen von DingPOS richtet ein Einrichtungsassistent Ihren Laden in zwei Schritten und in wenigen Minuten ein:"
      },
      {
        "type": "steps",
        "items": [
          "Wählen Sie Ihr Land oder Ihre Region. Oben in der Liste steht das Land bzw. die Region, in der sich dieses iPad befindet, danach die häufigsten Märkte; darunter finden Sie alle 175 Länder und Regionen, in denen DingPOS im App Store erhältlich ist – durchsuchbar nach Namen in der Sprache der App oder auf Englisch. Ihre Auswahl trägt Währung, Steuern und Steuermodus ein.",
          "Geben Sie unter „Ihr Geschäft“ den Namen des Geschäfts ein, fügen Sie optional ein Logo hinzu und prüfen Sie Währung, Steuern und Steuermodus (inklusive / exklusive). Die Währung ist zunächst die Ihres Landes; tippen Sie darauf, um aus 130 Währungen zu wählen. Die Steuern zeigen die Standardsteuern Ihres Landes: Sie können sie umbenennen, einen Steuersatz ändern, eine Steuer löschen oder mit „Steuer hinzufügen“ eine weitere Zeile anlegen. Ein Geschäft in British Columbia ändert zum Beispiel die erste Zeile in „GST 5“ und fügt eine Zeile „PST 7“ hinzu."
        ]
      },
      {
        "type": "p",
        "text": "Tippen Sie auf „Fortfahren“, und es erscheint „Ding! Ihr Geschäft ist startklar.“ DingPOS richtet außerdem zwei Zahlungsarten ein, Bargeld und Kreditkarte. Legen Sie dann unter „Artikel“ Ihre Artikel an und starten Sie den Verkauf."
      },
      {
        "type": "note",
        "text": "Die Währung lässt sich nach der Einrichtung nicht mehr ändern; Steuern und Steuermodus können Sie später beide unter Einstellungen → Geschäftsdaten ändern. In den USA, Kanada, Brasilien und Mikronesien hängt der Steuersatz vom Bundesstaat, der Provinz oder der Stadt ab; das Feld für den Steuersatz bleibt deshalb zunächst leer, und Sie tragen den von Ihnen berechneten Steuersatz ein, um fortzufahren. Ein Steuersatz muss größer als 0 sein: Ein Geschäft, das keine Steuer erhebt, löscht die Zeile. In Deutschland, Frankreich, Italien und anderen europäischen Ländern enthält die Liste zusätzlich die im örtlichen Einzelhandel üblichen ermäßigten Steuersätze unter der jeweiligen landesüblichen Steuerbezeichnung, in Deutschland zum Beispiel „MwSt. 19 %“ und „MwSt. 7 %“; ermäßigte Steuersätze werden für neue Artikel nicht standardmäßig angewendet, schalten Sie sie deshalb je Artikel ein. Die Liste mit 175 Ländern und die Wahl der Währung gibt es seit v3.2; frühere Versionen boten 15 Länder an."
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
        "text": "Nein. DingPOS hat kein Kontosystem – laden Sie die App herunter und legen Sie los. Ihre Artikel, Bestellungen und Kundendaten bleiben alle auf Ihrem iPad. Zu uns gelangen sie nur, wenn Sie in den Einstellungen eine Supportmeldung senden; dabei wird eine Kopie Ihrer Ladendaten angehängt, damit wir das Problem nachvollziehen können."
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
        "text": "DingPOS unterstützt derzeit iPads mit iPadOS 17.4 oder neuer und ist vorrangig für das Querformat ausgelegt."
      },
      {
        "type": "p",
        "text": "iPhone und Mac werden noch nicht unterstützt. Wenn Sie sich ein weiteres Gerät wünschen, schreiben Sie uns und schildern Sie Ihren Einsatzzweck."
      },
      {
        "type": "note",
        "text": "Jedes iPad, auf dem iPadOS 17 läuft, lässt sich auf 17.4 aktualisieren – somit ist kein Modell ausgeschlossen. Ein iPad mit iPadOS 17.0–17.3 braucht zuerst ein Systemupdate unter Einstellungen → Allgemein → Softwareupdate, bevor sich DingPOS ab v3.5 installieren lässt."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kann ich Währung, Steuersatz oder Steuermodus nach der Einrichtung ändern?",
    "keywords": [
      "Währung",
      "Steuermodus",
      "ändern",
      "gesperrt",
      "Steuersatz",
      "Steuern",
      "inklusive",
      "exklusive"
    ],
    "content": [
      {
        "type": "p",
        "text": "Die Steuer lässt sich ändern, die Währung nicht. Steuern und Steuermodus ändern Sie beide in der Karte „Steuer“ unter Einstellungen → Geschäftsdaten; eine Änderung gilt nur für spätere Verkäufe: Frühere Bestellungen, Rückgaben und Berichte behalten die Steuerbeträge und den Modus, mit denen sie erfasst wurden."
      },
      {
        "type": "list",
        "items": [
          "Steuern: Sie können eine hinzufügen, umbenennen, ihren Satz ändern oder sie löschen – siehe „Wie wird die Steuer berechnet?“",
          "Steuermodus (inklusive / exklusive): Tippen Sie auf den anderen Modus, und die Bestätigung rechnet ein Beispiel mit Ihrer ersten Steuer vor, etwa „Ein Artikel für NT$100 bei 5 % Steuer: Der Kunde zahlt NT$105“. Die Preise bleiben unverändert, und ein offener Warenkorb wird im neuen Modus neu berechnet, sobald Sie zur Kasse zurückkehren. Der Modus lässt sich seit v3.5 umstellen; frühere Versionen sperren ihn bei der Einrichtung.",
          "Nach einer Umstellung erstattet eine vollständige Rückgabe die ursprüngliche Bestellung weiterhin so, wie sie war. Ein Umtausch (mit Ersatzartikeln) bei einer Bestellung, die im anderen Modus verkauft wurde, ist nicht möglich: Stellen Sie den Modus zurück, oder geben Sie die Artikel zurück und verkaufen Sie sie erneut."
        ]
      },
      {
        "type": "p",
        "text": "Die Währung ist nach Abschluss der Einrichtung gesperrt. Alle bisherigen Bestellungen wurden in ihr erfasst; ein Wechsel mittendrin würde Ihre Berichte verfälschen. Prüfen Sie sie im Einrichtungsschritt „Ihr Geschäft“: Sie ist zunächst die Währung Ihres Landes, und Sie können darauf tippen, um eine andere zu wählen."
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
        "text": "Der Kassenbildschirm führt zehn Warenkörbe gleichzeitig. Tippen Sie in der Warenkorb-Leiste auf „+“, um einen neuen hinzuzufügen, und auf einen nummerierten Tab, um zu wechseln."
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
      },
      {
        "type": "p",
        "text": "Rabatte, die Sie häufig geben, lassen sich speichern: Gehen Sie zu Einstellungen → Treue & Aktionen → Rabatt-Voreinstellungen und tippen Sie auf „Voreinstellung hinzufügen“, zum Beispiel „Personalpreis 20 % Rabatt“. An der Kasse haben der Artikelrabatt und der Warenkorb-Rabatt jeweils ein Menü „Voreinstellungen“. Wählen Sie dort eine aus, werden Rabattart und Wert genauso eingetragen, als hätten Sie sie selbst eingegeben – die Auswahl zählt also weiterhin zur Rabattgrenze der Mitarbeiter:innen. Rabatt-Voreinstellungen gibt es seit Version 3.6, und sie erfordern den Tarif Standard oder höher."
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
      "mehrere Steuern",
      "GST",
      "PST",
      "Steuer pausieren",
      "Beleg"
    ],
    "content": [
      {
        "type": "p",
        "text": "Die Steuer wird automatisch anhand der Steuern und des Steuermodus berechnet, die unter Einstellungen → Geschäftsdaten hinterlegt sind. Es gibt zwei Steuermodi, und der Beleg weist den Steuerbetrag in beiden aus:"
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
        "text": "Ein Laden kann mehrere Steuern berechnen, etwa GST 5 % plus PST 7 % in British Columbia oder Japans Verbrauchsteuer von 10 % neben dem ermäßigten Satz von 8 %:"
      },
      {
        "type": "list",
        "items": [
          "Tippen Sie auf der Karte „Steuer“ auf „Steuer hinzufügen“ und geben Sie einen Namen und einen Satz ein. Schalten Sie „Für neue Artikel übernehmen“ ein. Dann wird diese Steuer standardmäßig auf später hinzugefügte Artikel angewendet. Hat der Laden bereits eine Standardsteuer, ist der Schalter bei einer neu hinzugefügten Steuer zunächst ausgeschaltet. Schalten Sie ihn ein, wenn beide Steuern berechnet werden sollen.",
          "Jeder Artikel legt im Artikelformular unter „Steuern“ fest, welche Steuern er berechnet – ein Bento könnte nur den ermäßigten Satz von 8 % berechnen. Sind zwei oder mehr eingeschaltet, zeigt das Formular die Gesamtsteuer auf den Artikel.",
          "Tippen Sie auf eine Steuer, um sie umzubenennen oder ihren Satz zu ändern. Mit „Auf alle Artikel anwenden“ oder „Von allen Artikeln entfernen“ fügen Sie sie allen Artikeln auf einmal hinzu oder nehmen sie von allen herunter. Beim Löschen einer Steuer erfahren Sie zuvor, für wie viele Artikel sie nicht mehr berechnet wird.",
          "In einem Laden mit exklusivem Steuermodus zeigen die Summen im Warenkorb eine Zeile pro Steuer, und die Details eines Verkaufs führen pro Steuer eine Zeile mit Satz und dem Betrag, auf den sie berechnet wurde."
        ]
      },
      {
        "type": "p",
        "text": "Um vorübergehend keine Steuer zu berechnen, schalten Sie oben auf der Karte „Steuer“ die Option „Steuer berechnen“ aus: Bei allen späteren Verkäufen wird keine Steuer berechnet, auch nicht für Artikel, die bereits in einem Warenkorb liegen. Jeder Artikel behält seine Steuern, und beim Wiedereinschalten gelten sie wieder wie zuvor."
      },
      {
        "type": "p",
        "text": "Die vollständige Berechnungsreihenfolge: Artikelrabatte und Aktionen → Warenkorb-Rabatt → Punkteeinlösung → Steuer. Beträge werden kaufmännisch auf die Dezimalstellen der Währung gerundet (z. B. 0 bei TWD, 2 bei USD). Die Steuer wird pro Steuer und Verkauf einmal berechnet, und ihre Nachkommastellen richten sich nach „Steuerrundung“ auf der Karte „Steuer“: „Kaufmännisch runden“, „Abrunden“ oder „Aufrunden“. Neue Läden in Japan starten mit „Abrunden“, alle anderen mit „Kaufmännisch runden“."
      },
      {
        "type": "note",
        "text": "Benannte Steuern gibt es seit Version 3.5. Beim Update wird Ihr bisheriger Steuersatz zu einer benannten Steuer (z. B. „GST 10 %“ in Australien), und jeder vorhandene Artikel übernimmt sie; bei einem Laden, dessen Satz 0 war, wird keine Steuer angelegt. Frühere Verkäufe und Rückgaben behalten die Steuersätze und Beträge, mit denen sie erfasst wurden; Berichte zählen den Umsatz jetzt vor Steuern, auch für vergangene Zeiträume (siehe „Was ist der Unterschied zwischen Umsatz und Zahlungseingang?“)."
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
    "question": "Welche Zahlungsarten unterstützt DingPOS?",
    "keywords": [
      "Zahlungsart",
      "Bargeld",
      "Kreditkarte",
      "LINE Pay",
      "Wechselgeld",
      "eigene Zahlungsart",
      "auf Rechnung",
      "Gebühren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ein neuer Laden startet mit zwei Zahlungsarten, Bargeld und Kreditkarte, die bei der Einrichtung in der Sprache der App benannt werden. Unter Einstellungen → Zahlungsarten können Sie beliebige weitere Zahlungsarten hinzufügen (z. B. Apple Pay, LINE Pay oder eine lokale Wallet) und sie umsortieren. Tippen Sie auf eine Zahlungsart, um sie umzubenennen, etwa von „Kreditkarte“ in „Karte (Square)“; die Statistik zählt Verkäufe vor der Umbenennung unter dem neuen Namen (seit Version 3.6). „Zahlungsart löschen“ steht unten im Bearbeitungsfenster und fragt vor dem Löschen nach; frühere Verkäufe behalten die Zahlungsart, mit der sie bezahlt wurden, und die letzte verbleibende Zahlungsart lässt sich nicht löschen."
      },
      {
        "type": "p",
        "text": "Zahlungsarten sind reine Bezeichnungen für die Buchführung – DingPOS wickelt keine echten Zahlungen ab. Nehmen Sie Karten- oder mobile Zahlungen mit Ihrem bestehenden Terminal oder Ihrer App entgegen und wählen Sie dann in DingPOS die passende Bezeichnung, um sie zu erfassen. Bei Barzahlungen wird das Wechselgeld automatisch berechnet, und wo die kleinsten Münzen nicht mehr verwendet werden, kann auch Bargeld gerundet werden – siehe „Kann DingPOS Barzahlungen auf die gängigen Münzen runden?“"
      },
      {
        "type": "p",
        "text": "Wenn Ihr Anbieter für Karten- oder mobile Zahlungen eine Gebühr erhebt, hinterlegen Sie für die Zahlungsart einen Gebührensatz, und die Statistik schätzt die Gebühren und den Nettoeingang je Zahlungsart – siehe „Kann DingPOS Gebühren für Karten- und mobile Zahlungen erfassen?“"
      },
      {
        "type": "p",
        "text": "Für Stammkunden, die die Ware jetzt mitnehmen und später bezahlen, wählen Sie „Auf Rechnung“: Der Verkauf wird als offener Posten erfasst und beglichen, sobald das Geld eintrifft. Siehe „Können Stammkunden auf Rechnung kaufen und später zahlen?“"
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
        "text": "Ja. Tippen Sie unter Einstellungen → Zahlungsarten auf eine Zahlungsart (oder fügen Sie eine neue hinzu) und füllen Sie die Bearbeitungsgebühr aus: einen Prozentsatz, einen festen Betrag pro Zahlung oder beides. Zahlungsarten vom Typ Bargeld haben keine Gebühr. Ab dann wird für jede über diese Zahlungsart kassierte Zahlung eine Gebühr erfasst, geschätzt mit dem Satz, der in diesem Moment gilt."
      },
      {
        "type": "p",
        "text": "In der Statistik ergänzt die Karte „Zahlungsarten“ unter jeder Zahlungsart mit Gebühr eine Zeile „Gebühr · Netto“, und am Ende der Karte stehen die voraussichtlichen Gebühren und der voraussichtliche Nettoeingang für den gesamten Zeitraum."
      },
      {
        "type": "list",
        "items": [
          "Tragen Sie den Satz ein, den Ihr Anbieter tatsächlich abzieht. Erhebt er auf die Gebühr Steuer, rechnen Sie sie mit ein: Bei 3 % plus 5 % Steuer geben Sie 3,15 % ein. Lassen Sie beide Felder leer, wenn es keine Gebühr gibt.",
          "Eine Änderung des Satzes gilt nur für spätere Zahlungen; bereits erfasste Gebühren bleiben unverändert.",
          "„Prozentanteil der Gebühr bei Rückgaben erstattet“ ist bei Läden in Taiwan und Japan zunächst eingeschaltet, sonst ausgeschaltet, weil Anbieter wie Stripe, Square und PayPal ihre Gebühr bei einer Erstattung behalten; stellen Sie den Schalter passend zu Ihrem Anbieter ein. Er gilt für Rückgaben und erstattete Anzahlungen von Vorbestellungen: Ist er eingeschaltet, wird der Prozentanteil erstattet; der feste Betrag nie. Beim Annullieren oder Rückgängigmachen einer Begleichung wird der Schalter ignoriert; die gesamte erfasste Gebühr wird zurückgenommen, einschließlich des festen Betrags. In beiden Fällen erhält der Kunde denselben Betrag zurück.",
          "Zahlungen, die kassiert wurden, bevor die Zahlungsart einen Gebührensatz hatte, tragen keine Gebühr: Die Statistik markiert sie mit „N ohne Gebührensatz“ und zeigt das Netto als „—“."
        ]
      },
      {
        "type": "note",
        "text": "Gebühren sind Schätzungen auf Basis des eingetragenen Satzes; maßgeblich ist die Abrechnung Ihres Anbieters. Gebührensätze zu bearbeiten erfordert den Tarif Standard oder höher, bei Lite sind die Felder gesperrt. Seit Version 3.4 sehen alle Tarife die erfassten Gebühren in der Statistik und in der GuV, sodass ein während der Testphase festgelegter Satz bei Lite weiter schätzt; frühere Versionen zeigten Gebühren nur ab Standard."
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
    "question": "Kann DingPOS Barzahlungen auf die gängigen Münzen runden?",
    "keywords": [
      "Barrundung",
      "Runden",
      "aufrunden",
      "abrunden",
      "Münzen",
      "Rappen",
      "Cent",
      "0,05",
      "Wechselgeld",
      "Kanada",
      "Australien",
      "Schweiz"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. In Kanada, Australien, Neuseeland, der Schweiz, Dänemark, Schweden, Norwegen, Belgien, Finnland und Ungarn werden die kleinsten Münzen nicht mehr verwendet, daher rundet DingPOS Bargeld auf einen Betrag, den man tatsächlich übergeben kann: Eine Barzahlung über 12,99 C$ wird mit 13,00 C$ angenommen, und das Wechselgeld wird von 13,00 C$ aus berechnet. Karten- und andere unbare Zahlungen bleiben exakt."
      },
      {
        "type": "p",
        "text": "Ein neuer Laden, der in einem dieser Länder mit der Landeswährung eingerichtet wird, erhält die Rundung automatisch. Jeder andere Laden kann sie mit der Karte „Barrundung“ ganz unten unter Einstellungen → Zahlungsarten einschalten: Wählen Sie, worauf Bargeld gerundet wird („Keine Rundung“, in einer Währung mit Cent 0,05, 0,10, 0,50 oder 1,00; in einer Währung ohne Cent 5, 10, 50 oder 100, etwa bei TWD oder JPY) und – bei einem Rundungsschritt, der genau in der Mitte landen kann – ob dann auf- oder abgerundet wird. Eine Änderung gilt nur für spätere Zahlungen."
      },
      {
        "type": "list",
        "items": [
          "Beim Bezahlen steht „Bar angenommen 13,00 C$“. Möchte der Kunde den genauen Betrag zahlen, tippen Sie unter den Zahlungsarten auf „Genauen Betrag annehmen“; das gilt nur für diesen einen Verkauf.",
          "Gesamtsumme der Bestellung, Steuer, Umsatz, Punkte und Einkaufssumme des Kunden ändern sich nicht; der Rundungsbetrag hängt an der Zahlung, und die Belegansicht sowie die Bestelldetails zeigen ihn unter der Summe an, etwa „Barrundung +0,01 C$“.",
          "Auch Barerstattungen bei Rückgaben, Barzahlungen von Anzahlungen und Restbeträgen bei der Abholung von Vorbestellungen, Aufzahlungen beim Umtausch sowie bar beglichene offene Posten werden gerundet. Werden mehrere Beträge auf einmal beglichen, wird ihre Summe nur einmal gerundet.",
          "Annullierungen, erstattete Anzahlungen von Vorbestellungen und rückgängig gemachte Begleichungen zahlen genau den erfassten Betrag zurück, ohne erneut zu runden.",
          "Der Zahlungseingang in der Statistik zeigt, wie viel davon Barrundung war, und die monatliche GuV erhält eine Zeile „Barrundung“, die in den Reingewinn einfließt. Rundung ist nie Umsatz."
        ]
      },
      {
        "type": "note",
        "text": "Die Schweiz rundet gemäß ihren Regeln zur Preisanzeige immer ab – CHF 12,98 werden als CHF 12,95 angenommen, und eine Wahl für die Mitte gibt es nicht. Belgien rundet nur Summen über 0,05 €. Die Barrundung ist in jedem Tarif enthalten, und ein bestehender Laden nimmt Bargeld wie bisher exakt an, bis Sie sie einschalten."
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
    "slug": "checkout-customer",
    "category": "checkout",
    "since": "3.4",
    "question": "Wie füge ich einem Verkauf einen Kunden hinzu oder ändere den Kunden?",
    "keywords": [
      "Kunde",
      "Mitglied",
      "Kunde zuordnen",
      "Kunde ändern",
      "neuer Kunde",
      "Bezahlen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ordnen Sie den Kunden im Warenkorb oder auf dem Bezahlbildschirm zu: Die Zeile „Kunde“ unter dem Betrag öffnet die Kundenliste, wenn noch niemand zugeordnet ist, und bietet „Kunde ändern“ oder „Kunde entfernen“ an, wenn bereits jemand zugeordnet ist. Der beim Bezahlen gewählte Kunde ist der Kunde des Warenkorbs und bleibt dort, auch wenn Sie das Bezahlen abbrechen."
      },
      {
        "type": "list",
        "items": [
          "Wenn Sie den Kunden ändern, werden Stufenrabatte, Geburtstagsangebote und das Einlösen von Punkten sofort neu berechnet. Bereits eingegebenes Bargeld oder eine Anzahlung bleibt erhalten und wird gegen den neuen Gesamtbetrag geprüft.",
          "Nicht gefunden? Tippen Sie oben rechts in der Kundenliste auf „Neuer Kunde“ – oder in der Mitte, wenn nichts zu Ihrer Suche passt. Ihr Suchbegriff füllt das Formular vor: Ziffern kommen ins Telefonfeld, alles andere in den Namen. Der neue Kunde wird dem Verkauf zugeordnet.",
          "Tippen Sie auf „Auf Rechnung“, obwohl noch kein Kunde zugeordnet ist, öffnet sich die Kundenliste; „Auf Rechnung“ ist ausgewählt, sobald Sie jemanden gewählt haben.",
          "Führt der neue Kunde dazu, dass ein manueller Rabatt die Rabattgrenze der Bediener:in übersteigt, muss zuerst eine Manager:in die Freigabe erteilen; brechen Sie die Freigabe ab, bleibt der Kunde unverändert."
        ]
      },
      {
        "type": "note",
        "text": "Kunden gehören zum Tarif Standard; bei Lite steht in der Zeile „Kunden – Tarif Standard“, und sie öffnet die Upgrade-Details. Die Zeile „Kunde“ beim Bezahlen gibt es seit Version 3.4; frühere Versionen ordnen den Kunden nur im Warenkorb zu."
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
        "text": "Öffnen Sie Verkäufe, suchen Sie die Bestellung, rufen Sie die Detailansicht auf und tippen Sie auf Annullieren. Im Fenster „Diese Bestellung annullieren?“ können Sie optional einen Grund eintragen (bis zu 100 Zeichen); tippen Sie oben rechts auf Annullieren – fertig. Der Grund erscheint in der Detailansicht der Bestellung und im Aktivitätsprotokoll und lässt sich nach dem Absenden nicht mehr ändern."
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
      "Größe tauschen",
      "Ware entsorgen",
      "Rückgabegrund"
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
          "Bei einem Artikel mit erfasstem Bestand kann jede zurückgegebene Zeile zurück in den Bestand (Einlagern, voreingestellt) oder entsorgt werden (Entsorgen, seit Version 3.5). Einlagern schreibt den Bestand wieder gut. Entsorgen lässt den Bestand unverändert und rechnet die Kosten, die der Artikel beim Verkauf hatte, dem Bestandsverlust des Monats in der GuV zu. Erstattung, Steuer und Punkte sind in beiden Fällen gleich.",
          "Punkte aus der ursprünglichen Bestellung werden abgezogen, eingelöste Punkte zurückgegeben, und Ersatzartikel sammeln eigene Punkte.",
          "Ist die ursprüngliche Bestellung ein noch nicht beglichener Verkauf auf Rechnung, fließt kein Geld: Die Rückgabe wird von den offenen Posten des Kunden abgezogen, und ein teurerer Ersatzartikel erhöht diese um die Differenz.",
          "Eine Bestellung kann in mehreren Runden zurückgegeben werden, aber nie über die ursprünglich verkaufte Menge hinaus; sind alle Artikel zurück, ergeben Steuer, Rabatte und Punkte der Rückgaben zusammen genau die Werte der ursprünglichen Bestellung. Nutzungslimits von Aktionen werden durch eine Rückgabe nicht zurückgesetzt."
        ]
      },
      {
        "type": "p",
        "text": "Der Grund ist optional (bis zu 100 Zeichen). Er erscheint in der Detailansicht der Bestellung und im Aktivitätsprotokoll und lässt sich nach dem Absenden nicht mehr ändern."
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
        "text": "Stellen Sie an der Kasse oben auf dem Bildschirm von Verkauf auf Vorbestellung um, wählen Sie das Abholdatum, geben Sie die Anzahlung ein (von 0 bis zum vollen Betrag, mit Kurzwahl 30 % / 50 % / Voll) und legen Sie fest, wie die Anzahlung bezahlt wird. Fügen Sie einen Kunden hinzu, damit Sie ihn wegen der Abholung erreichen können."
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
        "text": "Ja. Wählen Sie „Auf Rechnung“ als Zahlungsart, und der Verkauf wird als Schuld des Kunden erfasst. Eine Schuld braucht jemanden, dem sie zugeordnet ist: Ist noch kein Kunde zugeordnet, öffnet „Auf Rechnung“ zuerst die Kundenliste (seit Version 3.4; frühere Versionen verlangen, dass Sie den Kunden im Warenkorb zuordnen)."
      },
      {
        "type": "p",
        "text": "Zum Einziehen wechseln Sie oben in „Verkäufe“ zu „Offene Posten“. Die offenen Beträge sind nach Kunden gruppiert; öffnen Sie einen Kunden, um eine einzelne Bestellung, einen ganzen Monat oder alle offenen Beträge zu begleichen – DingPOS fragt Sie jedes Mal, welche Zahlungsart verwendet wurde. Eine einzelne Bestellung lässt sich auch in ihrer Detailansicht begleichen; eine versehentlich erfasste Begleichung können Sie über „Begleichung rückgängig machen“ zurücknehmen."
      },
      {
        "type": "list",
        "items": [
          "Der Umsatz zählt an dem Tag, an dem die Ware den Laden verlässt; Zahlungseingang und Treuepunkte folgen erst am Tag der Begleichung.",
          "Unbeglichene Bestellungen tragen in der Liste ein bernsteinfarbenes Abzeichen, und die Kundendetails zeigen, wie viel der Kunde aktuell schuldet.",
          "Bei einer Rückgabe zu einer noch nicht beglichenen Bestellung fließt kein Geld: Der Betrag wird von den offenen Posten des Kunden abgezogen.",
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
      "checkout-customer",
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
        "text": "Ja. Die Detailseiten von Bestellungen, Kunden und Einkaufsbestellungen haben jeweils Notizen – tippen Sie auf die Notizkarte, um zu bearbeiten, bis zu 500 Zeichen, oder, solange es noch keine gibt, auf die einzelne Zeile „Notiz hinzufügen“. Auch beim Anlegen eines Kunden oder einer Einkaufsbestellung können Sie im Formular eine Notiz eintragen."
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
        "text": "Sobald ein Artikel Varianten hat, führt jede Kombination unter „Variantenpreis & -bestand“ ihren eigenen Bestand, und ihr Preis folgt dem „Preis“ des Artikels: Eine Kombination ohne eigenen Preis zeigt den Artikelpreis grau an und ändert sich mit ihm; eine Zahl, die Sie eintragen, ist der eigene Preis dieser Kombination und wird schwarz angezeigt. Beispiel: Sie setzen den „Preis“ eines T-Shirts auf 390 und ändern nur L auf 350. Dann kosten M und XL 390, und wenn der „Preis“ später auf 420 geändert wird, folgen M und XL auf 420, während L bei 350 bleibt. Hinter dem ⓘ neben der Spalte „Preis“ finden Sie „Artikelpreis verwenden“; damit folgen alle Kombinationen wieder dem Artikelpreis. Artikel, die vor v3.6 angelegt wurden, behalten jeden Variantenpreis als eigenen Preis der Kombination, und der „Preis“ des Artikels ist der niedrigste davon. Kasse, Artikelliste und Artikeldetails zeigen eine Preisspanne vom niedrigsten bis zum höchsten Preis, etwa „NT$350–NT$390“, oder einen einzigen Preis, wenn alle Kombinationen gleich viel kosten; die Sortierung nach Preis nutzt den niedrigsten Kombinationspreis. An der Kasse erscheint beim Antippen des Artikels eine Variantenauswahl, bevor er in den Warenkorb gelegt wird."
      },
      {
        "type": "p",
        "text": "Beim Einkaufspreis funktioniert es genauso: Ein leeres Feld zeigt den Einkaufspreis des Artikels grau an und ändert sich mit ihm; eine Zahl ist der eigene Einkaufspreis der Kombination und wird schwarz angezeigt – auch 0. „Artikel-Einkaufspreis verwenden“ hinter dem ⓘ neben der Spalte „EK-Preis“ löscht alle eigenen Einkaufspreise der Kombinationen auf einmal."
      },
      {
        "type": "note",
        "text": "Namen von Optionen und Optionswerten sind auf 20 Zeichen begrenzt; Leerzeichen am Anfang und Ende werden beim Sichern entfernt. Ein Wert, in den Sie nichts eingetragen haben, ist keine Kombination und wird beim Sichern übersprungen. Das Sichern stoppt mit rot umrandetem Feld, wenn ein Optionsname leer ist, wenn alle Werte einer Option leer sind oder wenn Sie einen Wert löschen, den der Artikel bereits gespeichert hatte; tragen Sie ihn wieder ein oder entfernen Sie ihn durch Tippen auf das ×-Symbol. Ein Artikel mit Varianten kann keinen freien Preis verwenden."
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
      "Tagespreis",
      "Prozentgebühr"
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
          "Seit v3.3 wechselt „Berechnung nach“ zwischen Betrag und Prozent. Bei 5 % ergibt die Zeile 5 % der Zwischensumme der übrigen Artikel (nach Artikelrabatten, vor Aktionen, Warenkorbrabatt und Einlösen von Punkten), kaufmännisch auf die Nachkommastellen der Währung gerundet, und sie passt sich dem Warenkorb an, wenn Artikel hinzukommen, entfernt oder rabattiert werden. Die Warenkorbzeile zeigt „5 % des Warenkorbs“, und die Bestellung hält den ermittelten Betrag fest.",
          "Auf eine Zeile mit freiem Preis gibt es keinen Artikelrabatt; um weniger zu berechnen, ändern Sie den Preis. Warenkorbrabatt, Einlösen von Punkten und Aktionen (sofern der Artikel nicht davon ausgeschlossen ist) gelten weiterhin für sie.",
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
      "niedriger Bestand",
      "Bestand korrigieren"
    ],
    "content": [
      {
        "type": "p",
        "text": "Die Bestandsführung lässt sich für jeden Artikel einzeln einschalten – aktivieren Sie sie auf der Bearbeitungsseite des Artikels und geben Sie die aktuelle Menge ein. Für jede Variante eines Artikels wird der Bestand separat geführt."
      },
      {
        "type": "p",
        "text": "Ist sie aktiv, buchen Verkäufe und Vorbestellungen den Bestand automatisch ab; Annullierungen, Rückgaben und stornierte Vorbestellungen buchen ihn zurück; ein Wareneingang einer Einkaufsbestellung erhöht ihn. Jede Bewegung wird lückenlos protokolliert. Bei 10 oder weniger wird der Bestand in der Artikelliste, an der Kasse und in den Artikeldetails orange als niedrig markiert."
      },
      {
        "type": "p",
        "text": "Von Hand ändern Sie die Zahl auf zwei Arten:"
      },
      {
        "type": "list",
        "items": [
          "Neuzählung: Ändern Sie die Bestandszahl im Artikelformular auf das, was Sie tatsächlich gezählt haben. Sie wirkt sich nie auf die GuV aus.",
          "Bestand korrigieren (seit v3.5): Tippen Sie in den Artikeldetails auf „Bestand korrigieren“, wählen Sie „Entfernen“ oder „Hinzufügen“, die Menge und einen Grund, etwa „Abgelaufen/verdorben“, „Beschädigt“ oder „Proben & Geschenke“. Die Kosten der entfernten Ware zählen zum Bestandsverlust des Monats in der GuV – siehe „Wie erfasse ich Ware, die abgelaufen, beschädigt oder als Probe abgegeben wurde?“"
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
    "question": "Wie erfasse ich Ware, die abgelaufen, beschädigt oder als Probe abgegeben wurde?",
    "keywords": [
      "Bestand korrigieren",
      "Bestandskorrektur",
      "Bestandsverlust",
      "Schwund",
      "Abschreibung",
      "Ausschuss",
      "abgelaufen",
      "verdorben",
      "beschädigt",
      "Proben",
      "Ladenbedarf",
      "Neuzählung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Nutzen Sie „Bestand korrigieren“. Tippen Sie bei einem Artikel mit Bestandsführung in den Artikeldetails auf „Bestand korrigieren“, wählen Sie „Entfernen“ oder „Hinzufügen“, stellen Sie die Menge mit + und − ein (sie beginnt bei 1; tippen Sie auf die Zahl, um sie direkt einzugeben), wählen Sie einen Grund und ergänzen Sie optional eine Notiz (bis zu 100 Zeichen). Das Fenster berechnet den Bestand nach der Änderung, und die Zeile unter dem Grund zeigt an, ob die Änderung die GuV betrifft."
      },
      {
        "type": "list",
        "items": [
          "Gründe zum Entfernen: Materialverbrauch, Abgelaufen/verdorben, Beschädigt, Verloren/gestohlen, Personalverbrauch, Proben & Geschenke, Ladenbedarf und Sonstiges. Gründe zum Hinzufügen: Selbst hergestellt, Wiedergefunden und Sonstiges. „Sonstiges“ erfordert eine Notiz.",
          "Außer bei „Materialverbrauch“ zählt das Entfernte mit seinem Einkaufspreis zum Zeitpunkt der Korrektur zum Bestandsverlust des Monats in der GuV. Dieser steht nach dem Rohertrag und mindert den Reingewinn; Rohertrag und Marge bleiben unverändert. „Materialverbrauch“ senkt nur den Bestand, weil die Kosten eines Materials bereits in den Kosten des daraus hergestellten Artikels stecken.",
          "„Wiedergefunden“ zieht denselben Betrag wieder vom Bestandsverlust ab. „Selbst hergestellt“ und „Sonstiges“ beim Hinzufügen erhöhen nur den Bestand und wirken sich nie auf die GuV aus.",
          "Eine Korrektur zählt an dem Tag, an dem Sie sie erfassen. Sie lässt sich weder rückdatieren noch bearbeiten oder löschen; einen Fehler beheben Sie, indem Sie „Wiedergefunden“ oder eine Korrektur in die Gegenrichtung erfassen.",
          "Ein Artikel ohne Einkaufspreis lässt sich trotzdem korrigieren, doch die GuV kann dafür keinen Betrag ansetzen; der Monat vermerkt, wie viele Einträge keinen Einkaufspreis hatten."
        ]
      },
      {
        "type": "p",
        "text": "Wenn Sie die Bestandszahl im Artikelformular ändern, ist das eine Neuzählung: Sie gleicht den Bestand mit dem ab, was Sie tatsächlich gezählt haben, und wirkt sich nie auf die GuV aus. Die Liste der Bestandsbewegungen unter „Statistik“ filtert Korrekturen und Neuzählungen getrennt, und das Aktivitätsprotokoll zeigt zu jeder Korrektur Grund und Notiz."
      },
      {
        "type": "note",
        "text": "„Bestand korrigieren“ erfordert den Tarif Standard oder höher. Im Tarif Pro wird Mitarbeiter:innen, deren Rolle für „Manuelle Bestandskorrektur“ eine Freigabe braucht, beim Bestätigen die PIN eines Managers abgefragt."
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
        "text": "Ein negativer Bestand bedeutet meist, dass ein Wareneingang nicht erfasst wurde oder ein vorbestellter Artikel noch nicht eingetroffen ist (Vorbestellungen buchen den Bestand schon bei der Aufnahme ab). Erfassen Sie Nachschub über den Wareneingang einer Einkaufsbestellung, dann gleicht sich die Zahl von selbst aus. Eine Differenz aus der Inventur beheben Sie, indem Sie die Bestandszahl im Artikelformular ändern (eine Neuzählung); für Ware, die kaputtgegangen, abgelaufen oder verschenkt wurde, erfassen Sie den Grund mit „Bestand korrigieren“. Beides bleibt im Bewegungsprotokoll erhalten."
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
        "text": "Unter „Einkauf“ in der Seitenleiste verwalten Sie Lieferanten und Einkaufsbestellungen. Ein Lieferant enthält Name, Ansprechperson, Telefonnummer, Adresse und ein Standard-Zahlungsziel: „Zahlung bei Erhalt“ oder „Monatliches Zahlungsziel“."
      },
      {
        "type": "steps",
        "items": [
          "Tippen Sie auf „Neuer Einkauf“, wählen Sie den Lieferanten und fügen Sie Artikel, Mengen und Einkaufspreise hinzu (vorausgefüllt mit dem aktuellen Einkaufspreis des Artikels). Versandkosten lassen sich ebenfalls ergänzen. Für Ware, die noch kein Artikel ist, tippen Sie in der Auswahl „Artikel hinzufügen“ auf „Neuer Artikel“; der neue Artikel kommt direkt als Zeile in die Einkaufsbestellung. Ist der Lieferant noch nicht angelegt, tippen Sie oben links in der Lieferantenliste auf „Lieferant hinzufügen“ – der neue Lieferant wird direkt in die Einkaufsbestellung übernommen.",
          "Ein Entwurf berührt weder Bestand noch offene Zahlungen – bearbeiten oder löschen Sie ihn nach Belieben.",
          "Wenn die Ware eintrifft, tippen Sie auf „Wareneingang buchen“: Der Bestand bestandsgeführter Artikel steigt, und die Einkaufsbestellung erhält ihre Nummer und wird gesperrt. Standardmäßig aktualisiert der Wareneingang auch den Einkaufspreis jedes Artikels auf diesen Stückpreis; schalten Sie „Einkaufspreis des Artikels übernehmen“ in der Einkaufsbestellung aus, damit die Einkaufspreise unverändert bleiben. Darunter verteilt „Versand in Einkaufspreis einrechnen“ (bei neuen Einkaufsbestellungen eingeschaltet) die Versandkosten nach Betrag auf die Zeilen, sodass der in jeden Artikel geschriebene Einkaufspreis seinen Anteil enthält: Bei Mehl 10 × 30 $, Butter 1 × 60 $ und 25 $ Versand ergibt das für Mehl einen Einkaufspreis von 32 $ und für Butter 64 $."
        ]
      },
      {
        "type": "p",
        "text": "Das Zahlungsziel entscheidet über den weiteren Ablauf: Einkaufsbestellungen mit „Zahlung bei Erhalt“ gelten als bezahlt, solche mit „Monatliches Zahlungsziel“ bleiben unter „Zu zahlen“ offen. Dort begleichen Sie sie pro Lieferant – einzelne Bestellung, diesen Monat oder alles."
      },
      {
        "type": "p",
        "text": "Material, das Sie nicht verkaufen, etwa Mehl oder Verpackung, lässt sich auf dieselbe Weise einkaufen: Legen Sie es als Artikel an, der nicht im Verkauf ist – siehe „Kann ich Material wie Mehl oder Verpackung als Artikel anlegen?“"
      },
      {
        "type": "note",
        "text": "Der Einkauf erfordert den Tarif Standard oder höher. Ein Lieferant mit unbezahlten, eingegangenen Bestellungen kann nicht gelöscht werden."
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
    "question": "Kann ich Material wie Mehl oder Verpackung als Artikel anlegen?",
    "keywords": [
      "nicht im Verkauf",
      "Material",
      "Rohstoffe",
      "Zutaten",
      "Verpackung",
      "Verbrauchsmaterial",
      "An der Kasse verkaufen",
      "Einkauf",
      "Einkaufspreis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ja. Schalten Sie im Artikelformular unter dem Foto „An der Kasse verkaufen“ aus (standardmäßig ist es an), und der Artikel ist nicht im Verkauf: Er braucht keinen Preis, behält Einkaufspreis, Barcode, Bestand und Varianten, und die Artikelliste zeigt statt des Preises „Nicht im Verkauf“."
      },
      {
        "type": "list",
        "items": [
          "Ein Artikel, der nicht im Verkauf ist, erscheint nie im Kassenraster, in Kategorien, in der Suche oder beim Scannen von Barcodes und kann weder Geschenk, Zusatzartikel, Ziel einer Aktion noch Ersatzartikel bei einem Umtausch sein. Eine Kategorie, die nur Artikel enthält, die nicht im Verkauf sind, erscheint nicht in der Kategorieleiste der Kasse.",
          "Wenn Ihr Geschäft Artikel hat, die nicht im Verkauf sind, erscheint oben rechts unter „Artikel“ eine Filterschaltfläche: Wählen Sie „Alle Artikel“, „Im Verkauf“ oder „Nicht im Verkauf“ – zusammen mit Suche und Kategorien.",
          "Einkaufsbestellungen, Wareneingang, „Einkaufspreis des Artikels übernehmen“ und „Zu zahlen“ funktionieren genau wie bei anderen Artikeln, sodass sich Einkaufspreis und Bestand eines Materials über „Einkauf“ erfassen lassen.",
          "Der Verkauf anderer Artikel senkt seinen Bestand nicht. Wenn Sie etwas davon verbrauchen, erfassen Sie eine Entnahme mit „Bestand korrigieren“ in den Artikeldetails: „Materialverbrauch“ für das, was in Artikel eingegangen ist, „Ladenbedarf“ für Dinge wie Papiertüten oder Reinigungsmittel.",
          "Sie können die Option jederzeit wieder einschalten; Preis und Steuern sind weiterhin vorhanden. Bereits erfasste Verkäufe und Berichte bleiben unberührt."
        ]
      },
      {
        "type": "p",
        "text": "So gelangen die Kosten in die GuV: Einkäufe zählen dort nicht direkt. Bei einem Artikel, der aus dem Material hergestellt wird, tragen Sie die Kosten beim fertigen Artikel ein; sie werden abgezogen, wenn dieser Artikel verkauft wird. Verbrauchsmaterial, das in keinem Artikelpreis steckt, wird beim Verbrauch als „Ladenbedarf“ erfasst, wenn sein Bestand geführt wird, andernfalls als einmalige Ausgabe. Erfassen Sie denselben Betrag nicht auf beiden Wegen, sonst wird er doppelt gezählt."
      },
      {
        "type": "note",
        "text": "Artikel, die nicht im Verkauf sind, gibt es in jedem Tarif; Einkauf, Bestandsführung und „Bestand korrigieren“ erfordern den Tarif Standard oder höher."
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
    "question": "Was ist der Unterschied zwischen Umsatz und Zahlungseingang?",
    "keywords": [
      "Umsatz",
      "Zahlungseingang",
      "Geldeingang",
      "Statistik",
      "Rohertrag",
      "Vom Umsatz zum Rohertrag",
      "Kasse abstimmen",
      "Anzahlung",
      "Verkauf auf Rechnung",
      "Steuer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Umsatz zählt an dem Tag, an dem die Ware übergeben wurde, nach allen Rabatten und vor Steuern. Der Zahlungseingang zählt an dem Tag, an dem das Geld eingeht, und ist das eingenommene Geld inklusive Steuer. In einem Laden, der Steuer berechnet, liegt der Zahlungseingang daher um die Steuer über dem Umsatz – selbst bei Verkäufen, die an der Kasse bezahlt werden. Beide stehen als erste zwei Kacheln in der ersten Reihe der Statistik, neben Rohertrag, Verkäufe und Durchschnittlicher Verkaufswert."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Kachelreihen der Statistik mit Umsatz und Zahlungseingang nebeneinander in der ersten Reihe"
      },
      {
        "type": "h2",
        "text": "Wenn Umsatz und Zahlungseingang auseinanderliegen"
      },
      {
        "type": "p",
        "text": "Ein Beispiel: Verkauft ein Laden mit Preisen inklusive Steuer Ware für NT$1,050 inklusive 5 % Steuer und der Kunde zahlt an der Kasse, beträgt der Umsatz NT$1,000 und der Zahlungseingang NT$1,050. Neben der Steuer laufen die beiden Zahlen in diesen Fällen auseinander:"
      },
      {
        "type": "list",
        "items": [
          "Verkauf auf Rechnung: Die Ware verlässt den Laden heute und zählt zum heutigen Umsatz; das Geld zählt an dem Tag zum Zahlungseingang, an dem der Verkauf beglichen wird.",
          "Vorbestellung: Die Anzahlung zählt zum Zahlungseingang, sobald sie bezahlt wird; der Umsatz wird am Abholtag in voller Höhe erfasst.",
          "Verfallene Anzahlungen: Storniert ein Kunde eine Vorbestellung und Sie behalten die Anzahlung, wurde sie bei der Zahlung bereits als Zahlungseingang gezählt. Die Statistik zeigt sie getrennt als „Verfallene Anzahlungen“, und sie zählt nie als Umsatz.",
          "Annullierung eines früheren Verkaufs: Das erstattete Geld zählt am Tag der Annullierung zum Zahlungseingang, sodass der Zahlungseingang dieses Tages negativ sein kann. Der annullierte Verkauf selbst zählt an seinem Verkaufstag und steht im Untertitel der Kachel „Verkäufe“.",
          "Barrundung: Was die Barrundung gegenüber dem Verkaufsbetrag zu viel oder zu wenig einnimmt, zählt zum Zahlungseingang, nie zum Umsatz."
        ]
      },
      {
        "type": "p",
        "text": "Ist einer der beiden Beträge nicht null, zeigt der Untertitel der Kachel „Zahlungseingang“ die Barrundung bzw. die verfallenen Anzahlungen."
      },
      {
        "type": "h2",
        "text": "Steuer und Kachel-Details"
      },
      {
        "type": "p",
        "text": "Die Steuer, die Umsatz und Zahlungseingang trennt, steht unter „Vom Umsatz zum Rohertrag“, das Sie über die Fußzeile der Kachel „Rohertrag“ öffnen. Dort sehen Sie „Umsatz (inkl. Steuer)“, „Steuer“ und „Umsatz (ohne Steuer)“. Läden in Australien, Großbritannien, Neuseeland und Singapur sehen dort den Namen ihrer Steuer, etwa „Umsatz (inkl. GST)“, „GST“ und „Umsatz (ohne GST)“."
      },
      {
        "type": "p",
        "text": "Die eingenommene Steuer für die Meldung sehen Sie, wenn Sie über die Kachel „Steuer“ den Steuerbericht öffnen."
      },
      {
        "type": "p",
        "text": "Das ⓘ an den Kacheln „Umsatz“, „Zahlungseingang“ und „Verkäufe“ erklärt diese Regeln in der App, einschließlich der annullierten Verkäufe im Untertitel der Kachel „Verkäufe“."
      },
      {
        "type": "h2",
        "text": "Abgleichen und Umsätze lesen"
      },
      {
        "type": "p",
        "text": "Für den Abgleich vergleichen Sie den Zahlungseingang mit dem Bargeld in der Kassenschublade und den Angaben Ihres Kartenterminals. Die Karte „Zahlungsarten“ in der Statistik zeigt eine Zeile pro Zahlungsart; Verkäufe, die vor der Umbenennung einer Zahlungsart erfasst wurden, zählen unter dem neuen Namen. Wie viel Sie in einem Zeitraum verkauft haben, lesen Sie am Umsatz ab. Rückgaben mindern den Umsatz an dem Tag, an dem sie stattfinden."
      },
      {
        "type": "note",
        "text": "Den Umsatz vor Steuern gibt es seit Version 3.5, und vergangene Zeiträume wurden auf dieselbe Weise neu berechnet; ein Laden, der Steuer berechnet, sieht deshalb einen niedrigeren Umsatz als vor dem Update. Das ist eine Korrektur: Frühere Versionen rechneten die Steuer zum Umsatz, und Läden mit exklusiver Steuer (Preise ohne Steuer) zählten sogar die eingenommene Umsatzsteuer als Umsatz."
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
    "question": "Für welche Zeiträume kann ich Berichte anzeigen?",
    "keywords": [
      "Berichte",
      "Statistik",
      "Zeitraum",
      "Diese Woche",
      "Dieser Monat",
      "Dieses Jahr",
      "benutzerdefinierter Zeitraum",
      "Datum",
      "Artikel-Ranking",
      "Vergleichen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Wählen Sie in der Zeitraumleiste oben in der Statistik Heute, Gestern, Diese Woche, Dieser Monat, Dieses Jahr oder Gesamter Zeitraum, oder tippen Sie auf Benutzerdefiniert, um ein beliebiges Start- und Enddatum festzulegen. Jede Karte auf der Seite folgt dem gewählten Zeitraum. Diese Woche richtet sich nach dem ersten Wochentag Ihres Geräts, Dieser Monat beginnt am 1., Dieses Jahr am 1. Januar und Gesamter Zeitraum mit dem ersten Verkauf Ihres Ladens; jede Option zeigt die Daten, die sie abdeckt."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Zeitraumleiste oben in der Statistik mit ausgewähltem Benutzerdefiniert und geöffnetem Datums-Popover zur Wahl von Start- und Enddatum"
      },
      {
        "type": "h2",
        "text": "Einen benutzerdefinierten Zeitraum wählen"
      },
      {
        "type": "p",
        "text": "Nutzen Sie Benutzerdefiniert, wenn Sie einen Zeitraum außerhalb der festen Kalenderzeiträume brauchen, etwa einen zweimonatigen oder vierteljährlichen Meldezeitraum für die Steuer."
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie die Statistik und tippen Sie in der Zeitraumleiste auf Benutzerdefiniert.",
          "Wählen Sie im Popover Start- und Enddatum.",
          "Bestätigen Sie die Daten, um den Bericht zu aktualisieren."
        ]
      },
      {
        "type": "p",
        "text": "Die Kachel „Steuer“ und der Steuerbericht folgen ebenfalls dem gewählten Zeitraum; ein Meldezeitraum, den Sie über Benutzerdefiniert festlegen, aktualisiert also beide – Details im verwandten Artikel zum Steuerbericht. Rechts in der Zeitraumleiste tippen Sie auf Vergleichen, um den gewählten Zeitraum neben dem davor oder neben demselben Zeitraum im Vorjahr zu sehen – Details im verwandten Artikel zu den erweiterten Berichten."
      },
      {
        "type": "h2",
        "text": "Kacheln und Karten auf der Seite"
      },
      {
        "type": "p",
        "text": "Unter der Zeitraumleiste zeigt die Statistik zwei Reihen mit Kennzahl-Kacheln, danach Diagramme und Übersichtskarten paarweise, ganz unten Aktuell."
      },
      {
        "type": "list",
        "items": [
          "Erste Kachelreihe: Umsatz, Zahlungseingang, Rohertrag, Verkäufe und Durchschnittlicher Verkaufswert.",
          "Zweite Kachelreihe: Rabatte gesamt, Steuer, Reingewinn, Artikel ohne Einkaufspreis und Bediente Kunden.",
          "Erstes Paar: das Verlaufsdiagramm neben „Kosten und Rohertrag“.",
          "Zweites Paar: Artikel-Ranking neben Anteil nach Kategorie.",
          "Drittes Paar: Zahlungsarten neben der Aktionskarte.",
          "Unterste Karte: Aktuell."
        ]
      },
      {
        "type": "p",
        "text": "Zwei Kacheln der zweiten Reihe erscheinen nur in bestimmten Fällen. Steuer, neu seit Version 3.6, erscheint nur bei einem Laden mit Steuern oder wenn der gewählte Zeitraum Verkäufe enthält, die unter einer Steuer erfasst wurden. Reingewinn erscheint nur, wenn der Zeitraum Dieser Monat ist oder genau einen ganzen Monat umfasst."
      },
      {
        "type": "note",
        "text": "Hat ein Zeitraum keine Verkäufe, zeigt die Statistik nur die Zeitraumleiste, eine Meldung und Aktuell."
      },
      {
        "type": "h2",
        "text": "Diagramme und Artikel-Ranking lesen"
      },
      {
        "type": "p",
        "text": "Über das Menü oben rechts im Verlaufsdiagramm wechseln Sie zwischen „Umsatz“, „Verkäufe“, „Durchschnittlicher Verkaufswert“ und „Bediente Kunden“. Das Diagramm bietet außerdem den Umschalter Verlauf und Wochentag × Uhrzeit; diese Ansicht beschreibt der verwandte Artikel zu den erweiterten Berichten. Daneben stapelt das Diagramm „Kosten und Rohertrag“ in einem Balken pro Zeitabschnitt den Wareneinsatz und den Rohertrag. Ein einzelner Tag wird nach Stunden dargestellt, längere Zeiträume fassen je nach Länge Tage, Wochen, Monate oder Jahre zusammen."
      },
      {
        "type": "p",
        "text": "Halten Sie das Verlaufsdiagramm, „Kosten und Rohertrag“ oder „Zahlungsarten“ gedrückt, um eine Ablesekarte für einen einzelnen Zeitabschnitt zu sehen. Ist Vergleichen eingeschaltet, zeigt die Ablesekarte des Verlaufsdiagramms den Wert dieses Zeitraums und den des Vergleichszeitraums nebeneinander. Ziehen Sie nach links oder rechts, um durch die Zeitabschnitte zu gehen; wischen Sie auf dem Diagramm nach oben oder unten, scrollt die Seite wie gewohnt."
      },
      {
        "type": "p",
        "text": "Artikel-Ranking listet die Top 5 Artikel des gewählten Zeitraums. Tippen Sie auf die Karte oder auf „Alle anzeigen“, um jeden in diesem Zeitraum verkauften Artikel zu sehen, sortiert nach Menge nach Rückgaben. Ein Artikel mit Varianten erscheint mit einer Zeile pro Variante."
      },
      {
        "type": "note",
        "text": "Kalenderzeiträume gibt es seit Version 2.4; frühere Versionen boten gleitende Zeiträume (Heute / 7 Tage / 30 Tage / Gesamter Zeitraum). Wenn Sie diese noch sehen, aktualisieren Sie DingPOS im App Store."
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
    "question": "Was zeigen die erweiterten Berichte?",
    "keywords": [
      "erweiterte Berichte",
      "Statistik",
      "Vergleichen",
      "Zeitraumvergleich",
      "Vorjahr",
      "Heatmap",
      "Wochentag × Uhrzeit",
      "Stoßzeiten",
      "Ladenhüter",
      "Auf und ab",
      "Anteil nach Kategorie",
      "Lagerwert",
      "Wiederkaufrate",
      "Punkte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Erweiterte Berichte sind kein eigener Bildschirm; sie sitzen direkt in der Statistik und folgen dem Zeitraum, den Sie oben wählen. Sie ergänzen Zeitraumvergleiche, eine Heatmap nach Wochentag und Uhrzeit, Ladenhüter, Auf und ab, die Wiederkaufrate von Mitgliedern, Anteil nach Kategorie und den Bereich Aktuell für Bestand und Punkte. Alle sind in jedem Tarif enthalten und bleiben auch nach Ende der Testphase geöffnet."
      },
      {
        "type": "h2",
        "text": "Vergleichen"
      },
      {
        "type": "p",
        "text": "Vergleichen steht rechts in der Zeitraumleiste der Statistik und misst den gewählten Zeitraum an einem früheren."
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie die Statistik in der Seitenleiste.",
          "Wählen Sie oben einen Zeitraum.",
          "Tippen Sie rechts in der Zeitraumleiste auf Vergleichen.",
          "Wählen Sie im Menü eine Vergleichsoption."
        ]
      },
      {
        "type": "p",
        "text": "Welche Optionen es gibt, hängt vom gewählten Zeitraum ab:"
      },
      {
        "type": "list",
        "items": [
          "Keiner schaltet den Vergleich aus.",
          "Vorwoche vergleicht einen einzelnen Tag mit demselben Tag der Vorwoche oder diese Woche mit der Vorwoche.",
          "Vormonat vergleicht diesen Monat mit dem Vormonat.",
          "Vorjahr vergleicht dieses Jahr mit dem Vorjahr oder den gewählten Zeitraum mit demselben Zeitraum im Vorjahr.",
          "Vorheriger Zeitraum vergleicht einen benutzerdefinierten Zeitraum mit der gleichen Anzahl Tage davor."
        ]
      },
      {
        "type": "p",
        "text": "Ist ein Vergleich aktiv, ergänzt die Statistik die Veränderung und den Wert des Vergleichszeitraums auf jeder Kachel außer Steuer, Reingewinn und Artikel ohne Einkaufspreis. Umsatz, Zahlungseingang, Rohertrag, Verkäufe, Durchschnittlicher Verkaufswert, Rabatte gesamt und Bediente Kunden zeigen jeweils eine Vergleichszeile wie „▼ 3 % ggü. Vormonat“."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Statistik für Diese Woche mit Vergleichen auf Vorwoche: die Vergleichsleiste und die erste Kachelreihe, darunter jeweils Veränderung und Vergleichswert",
        "caption": "Tippen Sie auf eine Vergleichszeile unter einer Kachel, um „Zeitraumvergleich“ zu öffnen und die Werte beider Zeiträume zu sehen."
      },
      {
        "type": "p",
        "text": "Die Veränderung bei „Rabatte gesamt“ ist immer grau, denn mehr Rabatt ist an sich weder gut noch schlecht. Tippen Sie auf eine beliebige Vergleichszeile, um „Zeitraumvergleich“ zu öffnen, der die Werte beider Zeiträume auflistet. Das Verlaufsdiagramm erhält eine hellere Linie für den Vergleichszeitraum. Läuft ein Zeitraum noch, wird der Vergleichszeitraum zum gleichen Zeitpunkt abgeschnitten."
      },
      {
        "type": "h2",
        "text": "Wochentag × Uhrzeit"
      },
      {
        "type": "p",
        "text": "Stellen Sie die Kopfzeile des Verlaufsdiagramms von Verlauf auf Wochentag × Uhrzeit um, um eine Heatmap mit sieben Tagen und 24 Stunden zu sehen. Je dunkler ein Feld, desto mehr haben Sie in dieser Stunde verkauft. Sie können die Heatmap zwischen Umsatz und Verkäufen umschalten. Ist unter Vergleichen ein Vergleich eingeschaltet, zeigt die Heatmap außerdem, welche Stunden gewachsen und welche geschrumpft sind."
      },
      {
        "type": "h2",
        "text": "Ladenhüter"
      },
      {
        "type": "p",
        "text": "Stellen Sie die Kopfzeile der Ranking-Karte auf Ladenhüter um, um Artikel von den wenigsten bis zu den meisten Verkäufen aufzulisten. Jede Zeile zeigt den aktuellen Bestand des Artikels und das Datum des letzten Verkaufs. Artikel, die nie verkauft wurden, sind mit „Nie verkauft“ markiert, und ein Artikel mit Varianten erhält eine Zeile pro Variante. Standardmäßig werden nur Artikel mit Bestand angezeigt."
      },
      {
        "type": "h2",
        "text": "Auf und ab"
      },
      {
        "type": "p",
        "text": "Stellen Sie die Kopfzeile der Ranking-Karte auf Auf und ab um, um die 3 Artikel zu sehen, deren Umsatz gegenüber dem Vergleichszeitraum am stärksten gestiegen ist, und die 3, deren Umsatz am stärksten gefallen ist. Jede Zeile zeigt den Umsatz beider Zeiträume und die Differenz; jede Variante wird mit sich selbst verglichen."
      },
      {
        "type": "p",
        "text": "Wählen Sie vorher unter Vergleichen einen Zeitraum. Steht Vergleichen auf „Keiner“ oder ist der Zeitraum Gesamter Zeitraum, weist die Karte Sie darauf hin, einen Vergleichszeitraum zu wählen. Tippen Sie auf die Karte oder auf „Alle anzeigen“, um die vollständige Liste „Auf- und Absteiger bei Artikeln“ zu öffnen, aufgeteilt in Aufsteiger und Absteiger."
      },
      {
        "type": "h2",
        "text": "Wiederkaufrate"
      },
      {
        "type": "p",
        "text": "Die letzte Zeile der Kachel „Bediente Kunden“ zeigt die Wiederkaufrate als „Wiederkaufrate … · … Mitglieder wiedergekommen“. Sie gibt den Anteil der Mitglieder an, die im gewählten Zeitraum gekauft haben und insgesamt mindestens zweimal gekauft haben. Ist unter Vergleichen ein Vergleich eingeschaltet, nennt eine Zeile darunter die Veränderung in Prozentpunkten und die Rate des Vergleichszeitraums."
      },
      {
        "type": "h2",
        "text": "Anteil nach Kategorie"
      },
      {
        "type": "p",
        "text": "Anteil nach Kategorie listet Umsatz und Anteil jeder Kategorie auf, die größte zuerst, nach der aktuellen Kategorie des jeweiligen Artikels. Artikel ohne Kategorie stehen unter „Ohne Kategorie“, und die Zeilen ergeben genau den Umsatz."
      },
      {
        "type": "h2",
        "text": "Aktuell"
      },
      {
        "type": "p",
        "text": "Aktuell zeigt drei Angaben zu Bestand und Punkten:"
      },
      {
        "type": "list",
        "items": [
          "Lagerwert, berechnet als aktueller Bestand × aktueller Einkaufspreis.",
          "Alle Lagerbewegungen im gewählten Zeitraum.",
          "Die Punkte, die Kunden besitzen und noch nicht eingelöst haben, samt dem höchstmöglichen Abzug."
        ]
      },
      {
        "type": "p",
        "text": "Lagerwert und nicht eingelöste Punkte sind aktuelle Stände; eine Änderung des Zeitraums oben ändert sie nicht."
      },
      {
        "type": "h2",
        "text": "Tarife und Berechtigungen"
      },
      {
        "type": "p",
        "text": "Seit Version 3.4 sind alle erweiterten Berichte in jedem Tarif geöffnet, auch in Lite, und bleiben es nach Ende der Testphase. Auf und ab kam ebenfalls mit Version 3.4 dazu. Frühere Versionen zeigten erweiterte Berichte nur in Pro, mit einem kleinen Schloss bei anderen Tarifen; wenn Sie die Schlösser noch sehen, aktualisieren Sie DingPOS im App Store."
      },
      {
        "type": "p",
        "text": "Lite erfasst weder Bestände noch Treuepunkte, aber Aktuell zeigt weiterhin den Lagerwert und die nicht eingelösten Punkte, die Ihr Laden bereits hält (zum Beispiel aus der Testphase) – oder null."
      },
      {
        "type": "note",
        "text": "Mitarbeiter:innen sehen erweiterte Berichte mit der Berechtigung „Statistik“; die Beträge beim Lagerwert erfordern zusätzlich die Berechtigung „Einkaufspreis & Rohertrag“."
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
      "Artikel ohne Einkaufspreis",
      "Vom Umsatz zum Rohertrag"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Einkaufspreis ist ein optionales Feld, daher bleiben Artikel ohne Einkaufspreis im Rohertrag unberücksichtigt, während ihr Umsatz weiterhin vollständig zählt. Die Kachel „Artikel ohne Einkaufspreis“ in der Statistik zeigt, wie viele im Zeitraum verkaufte oder zurückgegebene Artikel keinen Einkaufspreis haben, etwa „12 Artikel“. Ein Einkaufspreis von 0 gilt als Einkaufspreis und wird nicht aufgeführt; hat jeder Artikel einen, steht auf der Kachel „0 Artikel · Einkaufspreise vollständig“."
      },
      {
        "type": "h2",
        "text": "Artikel ohne Einkaufspreis finden"
      },
      {
        "type": "p",
        "text": "Tippen Sie in der Statistik auf die Kachel „Artikel ohne Einkaufspreis“ oder auf „Artikel ansehen“, um „Artikel ohne Einkaufspreis“ zu öffnen. Die Liste zeigt die Artikel nach dem Umsatz, der im Rohertrag fehlt, vom höchsten zum niedrigsten."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Liste „Artikel ohne Einkaufspreis“ mit Artikeln, sortiert nach dem im Rohertrag fehlenden Umsatz"
      },
      {
        "type": "steps",
        "items": [
          "Tippen Sie in „Artikel ohne Einkaufspreis“ auf eine Zeile, um den Artikel zu öffnen.",
          "Tippen Sie auf Bearbeiten und tragen Sie den Einkaufspreis unter „Einkaufspreis (optional)“ ein.",
          "Kehren Sie zu „Artikel ohne Einkaufspreis“ zurück, um die Zeile mit „Einkaufspreis ergänzt“ markiert zu sehen."
        ]
      },
      {
        "type": "p",
        "text": "Ein Artikel mit Varianten gilt erst dann als „Einkaufspreis ergänzt“, wenn jede ohne Einkaufspreis verkaufte Variante einen hat – ihren eigenen oder den des Artikels, dem sie folgt. Seit Version 3.6 kann eine Einkaufsbestellung ihren Versand außerdem auf die Einkaufspreise umlegen, die sie schreibt, wenn „Versand in Einkaufspreis einrechnen“ eingeschaltet ist."
      },
      {
        "type": "note",
        "text": "Ein Einkaufspreis, den Sie ergänzen, wirkt sich nur auf spätere Verkäufe aus. Bereits getätigte Verkäufe werden nicht neu berechnet."
      },
      {
        "type": "h2",
        "text": "Einkaufspreis und Steuer eingeben"
      },
      {
        "type": "p",
        "text": "Im Artikelformular heißt das Feld in jedem Laden „Einkaufspreis (optional)“. In einem Laden mit Steuern erscheint neben „Einkaufspreis (optional)“ ein ⓘ, das zeigt, wie die Steuer je nach „Vorsteuerabzug“ zu behandeln ist:"
      },
      {
        "type": "list",
        "items": [
          "„Vorsteuerabzug“ ist eingeschaltet: Geben Sie den Einkaufspreis ohne die Steuer ein, die Sie zurückfordern können. Der Hinweis unter ⓘ lautet: „Geben Sie die Kosten ohne die abziehbare Steuer ein; diese erfassen Sie als Vorsteuer. Nicht abziehbare Steuer gehört zu den Kosten.“",
          "„Vorsteuerabzug“ ist ausgeschaltet: Geben Sie ein, was Sie bezahlt haben, abzüglich der Steuer, die Sie zurückfordern können. Der Hinweis unter ⓘ lautet: „Abziehbare Vorsteuer gehört nicht zu den Artikelkosten, nicht abziehbare Steuer schon. Wenn Sie Vorsteuer abziehen, aktivieren Sie unter ‚Geschäftsdaten‘ die Option ‚Vorsteuerabzug‘.“"
        ]
      },
      {
        "type": "p",
        "text": "Wenn Ihr Laden Vorsteuer geltend macht, schalten Sie in den Geschäftsdaten „Vorsteuerabzug“ ein."
      },
      {
        "type": "h2",
        "text": "Die Aufschlüsselung des Rohertrags lesen"
      },
      {
        "type": "p",
        "text": "Der Rohertrag ist der Umsatz nach allen Rabatten (Artikel- und Warenkorbrabatte, Aktionen, Punkteeinlösung) und vor Steuern, abzüglich des Einkaufspreises. Die Marge ist der Rohertrag geteilt durch den Umsatz der Artikel mit Einkaufspreis, sodass Artikel ohne Einkaufspreis die Marge nicht drücken. Eine Rückgabe nimmt am Tag der Rückgabe den Rohertrag zurück, den diese Artikel eingebracht hatten."
      },
      {
        "type": "p",
        "text": "Tippen Sie in der Statistik auf die Kachel „Rohertrag“, um „Vom Umsatz zum Rohertrag“ zu öffnen, das Zeile für Zeile abzieht:"
      },
      {
        "type": "list",
        "items": [
          "Umsatz (inkl. Steuer)",
          "Steuer",
          "Umsatz (ohne Steuer)",
          "Umsatz ohne Einkaufspreis",
          "Wareneinsatz",
          "Rohertrag und Marge"
        ]
      },
      {
        "type": "p",
        "text": "Die Zeilen ergeben genau den Wert der Kachel „Rohertrag“. Läden in Australien, Großbritannien, Neuseeland und Singapur sehen in den Steuerzeilen den Namen ihrer Steuer, etwa „Umsatz (inkl. GST)“."
      },
      {
        "type": "note",
        "text": "Diese Rohertragsberechnung gibt es seit Version 3.1. Frühere Versionen zogen nur manuelle Artikelrabatte ab und zählten enthaltene Steuer als Rohertrag, daher zeigen Zeiträume mit Rabatten oder enthaltener Steuer nach dem Update einen niedrigeren Rohertrag. Das ist eine Korrektur, kein Datenverlust."
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
    "question": "Wie sehe ich, wie viel ich jeden Monat tatsächlich verdient habe?",
    "keywords": [
      "Gewinn und Verlust",
      "GuV",
      "Reingewinn",
      "Rohertrag",
      "Monatsgewinn",
      "feste Ausgaben",
      "Ausgaben",
      "Betriebsergebnis",
      "Gewinn- und Verlustrechnung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie GuV, in der Seitenleiste unter Statistik, um den Reingewinn jedes Monats und seine Berechnung zu sehen. Die Liste läuft vom neuesten zum ältesten Monat, beginnend mit Ihrem ersten Monat mit Aktivität; der laufende Monat ist mit „Laufend“ markiert, und die Kopfzeile jedes Jahres addiert den Reingewinn seiner abgeschlossenen Monate. Die erste Zeile, „Alle Ausgaben“, öffnet alle Ausgaben unabhängig vom Monat."
      },
      {
        "type": "h2",
        "text": "Monatsaufschlüsselung"
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie GuV in der Seitenleiste unter Statistik.",
          "Tippen Sie auf einen Monat, um zu sehen, wie sich sein Reingewinn zusammensetzt."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "GuV-Monatsseite mit dem Hinweis „Laufend“, dem Reingewinn und der vollständigen Aufschlüsselung vom Umsatz bis zu den Ausgaben"
      },
      {
        "type": "p",
        "text": "Die Monatsseite listet der Reihe nach jede Zeile vom Verkauf bis zum Reingewinn auf. Die Zeilen vom Umsatz bis zum Rohertrag tragen dieselben Namen und Werte wie „Vom Umsatz zum Rohertrag“ in der Statistik."
      },
      {
        "type": "list",
        "items": [
          "Umsatz (inkl. Steuer), Steuer und Umsatz (ohne Steuer): der Umsatz einschließlich Steuer, der Steuerbetrag und der Umsatz nach allen Rabatten und vor Steuern, gezählt an dem Tag, an dem die Ware übergeben wurde. Läden in Australien, Großbritannien, Neuseeland und Singapur sehen den Namen ihrer Steuer.",
          "Umsatz ohne Einkaufspreis: wird vor dem Wareneinsatz abgezogen und nur gezeigt, wenn der Wert nicht null ist.",
          "Wareneinsatz: die Kosten der verkauften Ware, aus den Einkaufspreisen Ihrer Artikel.",
          "Rohertrag: wird mit seiner Marge gezeigt.",
          "Umsatz ohne Einkaufspreis: wird nach dem Rohertrag wieder hinzugerechnet, wenn der Wert nicht null ist.",
          "Bestandsverlust: nur gezeigt, wenn der Monat einen hat; die Kosten dessen, was „Bestand korrigieren“ als abgelaufen, beschädigt, verschenkt und Ähnliches abgebucht hat, plus entsorgte Rückgaben. Er kommt nach dem Rohertrag. Siehe „Wie erfasse ich Ware, die abgelaufen, beschädigt oder als Probe abgegeben wurde?“ Der Monat hat außerdem einen Abschnitt „Bestandsverlust“, der ihn nach Grund aufsummiert.",
          "Bearbeitungsgebühren (geschätzt): die Gebühren, geschätzt aus den Sätzen Ihrer Zahlungsarten.",
          "Verfallene Anzahlungen: nur gezeigt, wenn der Wert nicht null ist; Anzahlungen, die Sie behalten haben, als eine Vorbestellung storniert wurde.",
          "Barrundung: nur gezeigt, wenn der Wert nicht null ist; was das Runden von Bargeld auf die vorhandenen Münzen gegenüber den Verkaufsbeträgen zu viel oder zu wenig eingenommen hat.",
          "Feste Ausgaben und Einmalige Ausgaben: was Sie für diesen Monat erfasst haben – siehe „Wie erfasse ich Miete, Löhne und andere Ausgaben?“",
          "Reingewinn: berechnet als Umsatz (ohne Steuer) − Wareneinsatz − Bestandsverlust − Bearbeitungsgebühren + verfallene Anzahlungen + Barrundung − feste Ausgaben − einmalige Ausgaben."
        ]
      },
      {
        "type": "h2",
        "text": "Laufende Monate"
      },
      {
        "type": "p",
        "text": "Solange ein Monat läuft, zieht GuV bereits die festen Ausgaben des ganzen Monats ab. Ein Beispiel: Sind am 5.10. bisher 20.000 Umsatz (ohne Steuer) angefallen, beträgt der Wareneinsatz 10.000 und betragen die festen Ausgaben 65.700, ist der Reingewinn −55.700 und mit „Laufend · die Ausgaben des vollen Monats werden abgezogen“ markiert."
      },
      {
        "type": "p",
        "text": "Weil die Ausgaben des vollen Monats bereits eingerechnet sind, wird der Reingewinn des laufenden Monats weder in der Monatsliste noch auf der Monatsseite noch auf der Kachel „Reingewinn“ in der Statistik je rot dargestellt. Ein abgeschlossener Monat, der mit Verlust endet, zeigt seinen Reingewinn in der Warnfarbe."
      },
      {
        "type": "h2",
        "text": "Diagramme"
      },
      {
        "type": "p",
        "text": "Unter der Aufschlüsselung folgen bis zu drei Diagramme: der Reingewinn Monat für Monat, der Anteil jeder festen Ausgabe und der Verlauf der festen Ausgaben. Die beiden Verlaufsdiagramme umfassen höchstens die 12 Monate bis zu dem Monat, den Sie geöffnet haben, und erscheinen erst, wenn es mindestens zwei Monate zum Vergleichen gibt, gezählt ab dem Monat Ihres ersten Verkaufs oder Ihrer ersten Ausgabe. Das Anteilsdiagramm braucht in diesem Monat eine feste Ausgabe; solange es keine gibt, steht in diesem Bereich stattdessen „Feste Ausgabe hinzufügen“."
      },
      {
        "type": "h2",
        "text": "Zwischen Statistik und GuV wechseln"
      },
      {
        "type": "p",
        "text": "Statistik und GuV verweisen aufeinander. Ist der Zeitraum in der Statistik Dieser Monat oder genau ein ganzer Monat, enthält die zweite Kachelreihe zusätzlich eine Kachel „Reingewinn“, die während des laufenden Monats mit „Laufend · die Ausgaben des vollen Monats werden abgezogen“ markiert ist. Tippen Sie darauf, sehen Sie die Aufschlüsselung dieses Monats vom Rohertrag bis zum Reingewinn. Bei jedem anderen Zeitraum tippen Sie in der letzten Zeile von „Vom Umsatz zum Rohertrag“ auf „Monatliche GuV ansehen“."
      },
      {
        "type": "p",
        "text": "Umgekehrt öffnet „Bericht für Oktober ansehen“ unter dem Titel eines Monats in GuV die Statistik für diesen Monat (benutzerdefinierter Zeitraum 1.10.–31.10.); beim laufenden Monat öffnet sie Dieser Monat."
      },
      {
        "type": "note",
        "text": "Der Reingewinn ist das Betriebsergebnis vor Ertragsteuern, berechnet aus dem, was DingPOS erfasst hat – keine Steuererklärung. Wurden Artikel ohne Einkaufspreis verkauft, zeigt der Monat trotzdem einen Reingewinn, markiert mit „Nicht enthalten: Einkaufspreis von N Artikel“; tippen Sie darauf, um zu sehen, welche."
      },
      {
        "type": "note",
        "text": "GuV gibt es in jedem Tarif. Bei Konten für Mitarbeiter:innen erfordert das Öffnen die Berechtigung „GuV & Ausgaben“, für die Manager:innen und Mitarbeiter:innen standardmäßig eine Freigabe brauchen, weil sie Einkaufspreise und Löhne zeigt."
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
    "question": "Wie erfasse ich Miete, Löhne und andere Ausgaben?",
    "keywords": [
      "Ausgaben",
      "Miete",
      "Löhne und Gehälter",
      "Nebenkosten",
      "feste Ausgaben",
      "einmalige Ausgabe",
      "Alle Ausgaben",
      "Betriebskosten",
      "Abschreibung",
      "GuV"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tippen Sie in der GuV auf „Ausgabe hinzufügen“ und wählen Sie „Feste Ausgabe hinzufügen“ oder „Einmalige Ausgabe hinzufügen“, um Miete, Löhne und Gehälter, Nebenkosten und andere laufende Betriebskosten zu erfassen. Jede Ausgabe zählt in dem Monat, zu dem sie gehört, nicht in dem Monat, in dem Sie sie bezahlt haben, und der Reingewinn jedes Monats passt sich entsprechend an. Feste Ausgaben wiederholen sich jeden Monat, mit optionalen Betragsänderungen; einmalige Ausgaben zählen in einem einzelnen Monat oder verteilt auf mehrere Monate."
      },
      {
        "type": "h2",
        "text": "Feste Ausgaben"
      },
      {
        "type": "p",
        "text": "Eine feste Ausgabe ist ein wiederkehrender Betrag, den Sie jeden Monat zahlen, etwa Miete, Nebenkosten oder Löhne und Gehälter."
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie GuV.",
          "Tippen Sie auf „Ausgabe hinzufügen“.",
          "Wählen Sie „Feste Ausgabe hinzufügen“.",
          "Geben Sie den Namen, den monatlichen Betrag und den Monat ein, ab dem die Ausgabe gilt. Wählen Sie einen früheren Monat, um rückwirkend zu erfassen.",
          "Tippen Sie auf ✓, um zu sichern."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Formular für eine feste Ausgabe mit Name, monatlichem Betrag, Startmonat und Betragsänderungen"
      },
      {
        "type": "p",
        "text": "Ändert sich der Betrag, öffnen Sie die Ausgabe und tippen Sie auf „Betrag ändern“. Wählen Sie den Monat, ab dem die Änderung gilt, und dann „Ab diesem Monat“ für eine dauerhafte Änderung wie eine Mieterhöhung oder „Nur dieser Monat“ für eine Abweichung in einem einzelnen Monat, etwa die Stromrechnung dieses Monats. Jede Änderung steht im Formular in einer Liste; öffnen Sie einen Eintrag, um ihn zu bearbeiten oder zu entfernen."
      },
      {
        "type": "p",
        "text": "Zahlen Sie eine feste Ausgabe nicht mehr, legen Sie „Letzter berücksichtigter Monat“ fest. Dieser Monat und die davor zählen in der GuV weiterhin, spätere Monate enthalten die Ausgabe nicht mehr."
      },
      {
        "type": "h2",
        "text": "Geplante Änderungen unter „Alle Ausgaben“"
      },
      {
        "type": "p",
        "text": "Unter „Alle Ausgaben“ zeigt jede Zeile einer festen Ausgabe, was vorgesehen ist. Die Zeile verbindet den Startmonat mit der nächsten geplanten Betragsänderung und dem letzten berücksichtigten Monat. Eine Zeile kann zum Beispiel lauten: Seit Januar 2026 · $420/Monat ab Dezember 2026 · Zuletzt berücksichtigt: März 2027."
      },
      {
        "type": "p",
        "text": "Der Betrag rechts bleibt der heutige Monatsbetrag, nicht der kommende Satz. Eine Änderung mit „Nur dieser Monat“ steht nicht in der Zeile."
      },
      {
        "type": "h2",
        "text": "Einmalige Ausgaben"
      },
      {
        "type": "p",
        "text": "Eine einmalige Ausgabe ist ein Betrag, den Sie nur einmal zahlen, etwa ein Ladenausbau, Ausstattung, eine im Voraus bezahlte Versicherung oder eine einzelne Rechnung."
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie GuV.",
          "Tippen Sie auf „Ausgabe hinzufügen“.",
          "Wählen Sie „Einmalige Ausgabe hinzufügen“.",
          "Geben Sie Betrag und Datum ein.",
          "Legen Sie „Berücksichtigter Monat“ für einen einzelnen Monat fest oder schalten Sie „Auf mehrere Monate verteilen“ ein.",
          "Tippen Sie auf ✓, um zu sichern."
        ]
      },
      {
        "type": "p",
        "text": "Auch ohne Verteilung können Sie „Berücksichtigter Monat“ wählen, damit die Ausgabe in dem Monat zählt, zu dem sie gehört. Eine Rechnung für Oktober, die erst im November eintrifft, kann zum Beispiel im Oktober zählen, wobei das tatsächliche Datum erhalten bleibt."
      },
      {
        "type": "p",
        "text": "Für einen Ladenausbau, für Ausstattung oder für eine im Voraus bezahlte Versicherung schalten Sie „Auf mehrere Monate verteilen“ ein, wählen 2 bis 120 Monate und legen den ersten berücksichtigten Monat fest. Das Formular zeigt vorab, welcher Betrag pro Monat zählt und welche Monate er abdeckt."
      },
      {
        "type": "p",
        "text": "Endet eine Verteilung vorzeitig, etwa weil eine Versicherung gekündigt wurde, öffnen Sie die Ausgabe und nutzen „Verteilung vorzeitig beenden“. Der verbleibende Betrag wird in dem Monat berücksichtigt, den Sie wählen."
      },
      {
        "type": "h2",
        "text": "Vorsteuer auf Ausgaben"
      },
      {
        "type": "p",
        "text": "Ist „Vorsteuerabzug“ eingeschaltet, können Sie bei einer einmaligen Ausgabe eine Rechnungsnummer und die abziehbare Steuer erfassen, und bei einer festen Ausgabe jede Rechnung unter „Rechnungen“ mit „Rechnung erfassen“. Der in der GuV berücksichtigte Betrag bleibt das, was der Laden trägt; wie die abziehbare Steuer funktioniert, erklärt der verwandte Artikel zur Vorsteuer."
      },
      {
        "type": "note",
        "text": "Geben Sie ein, was der Laden tatsächlich trägt, ohne Steuern, die Sie zurückfordern können. Ware, die Sie verkaufen, und das Material, aus dem Sie sie herstellen, laufen stattdessen über den Einkauf, weil sie beim Verkauf im Wareneinsatz berücksichtigt werden. Verbrauchsmaterial mit Bestandsführung erfassen Sie beim Verbrauch mit „Bestand korrigieren“ und dem Grund „Ladenbedarf“, nicht als Ausgabe. Kautionen, Darlehenstilgungen und Entnahmen der Inhaber:in sind keine Ausgaben. Änderungen werden gemeinsam gesichert, wenn Sie auf ✓ tippen. Betrifft eine Änderung einen abgeschlossenen Monat, erfahren Sie vorher, für welche Monate sich der Reingewinn ändert."
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
    "question": "Wie exportiere ich den Steuerbericht für meine Steuerberatung?",
    "keywords": [
      "Steuerbericht exportieren",
      "Steuerbericht",
      "Exportieren",
      "Excel-Arbeitsmappe",
      "CSV",
      "PDF-Bericht",
      "Steuerübersicht",
      "Vorsteuerdetails",
      "Steuerberatung",
      "Steuerberater"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie den Steuerbericht, tippen Sie oben rechts auf „Exportieren“ und wählen Sie ein CSV-Format, „Excel-Arbeitsmappe (XLSX)“ oder „PDF-Bericht“. Die Datei öffnet sich in einer Vollbild-Vorschau, in der Sie über die Taste „Teilen“ die Datei sichern oder an Ihre Steuerberatung senden können. Jedes Format enthält dieselben Zahlen wie auf dem Bildschirm."
      },
      {
        "type": "h2",
        "text": "So exportieren Sie"
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie die Statistik und wählen Sie den Zeitraum, etwa einen benutzerdefinierten Zeitraum vom 1.11. bis 31.12. für einen zweimonatigen Meldezeitraum oder einen Quartalszeitraum.",
          "Tippen Sie auf die Kachel „Steuer“, um den Steuerbericht zu öffnen. Der Export umfasst genau diesen Zeitraum.",
          "Tippen Sie oben rechts im Steuerbericht auf „Exportieren“. Ein Menü listet die Formate; das zuletzt auf diesem iPad exportierte ist mit einem Häkchen markiert.",
          "Wählen Sie ein Format, etwa „Excel-Arbeitsmappe (XLSX)“, um eine Vollbild-Vorschau zu öffnen. CSV-Dateien erscheinen als Tabelle, und in der Excel-Arbeitsmappe können Sie zwischen den Blättern wechseln, etwa um zuerst „Summary“ zu prüfen.",
          "Tippen Sie oben rechts in der Vorschau auf die Taste „Teilen“, um die Datei zu sichern oder an Ihre Steuerberatung zu senden. Das Schließen der Vorschau führt zurück zum Steuerbericht."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Steuerbericht mit geöffnetem Menü „Exportieren“, das die Dateiformate auflistet"
      },
      {
        "type": "p",
        "text": "Schlägt ein Export fehl, zeigt die App „Datei konnte nicht exportiert werden“ und „Versuchen Sie es erneut.“ Es wird nichts geschrieben; exportieren Sie erneut."
      },
      {
        "type": "h2",
        "text": "Exportformate"
      },
      {
        "type": "list",
        "items": [
          "Steuerübersicht (CSV): Eine Zeile pro Berichtszeile (jede Steuer mit Satz, Nullsatz und nicht besteuert), mit Umsatz, Rückgaben und Summe, jeweils ohne Steuer und Steuer.",
          "Alle Belege (CSV): Eine Zeile pro Beleg unter jeder Steuer, mit Datum und Uhrzeit, Belegnummer, Belegart (Verkauf, Rückgabe oder Umkehrung einer Annullierung), Kundenname, Beträgen und Zahlungsarten. Eine Annullierung fügt am Tag der Annullierung eine Umkehrzeile hinzu.",
          "Tagesübersicht (CSV): Die Übersicht pro Tag, danach eine zweite Tabelle mit den Zahlungen pro Tag und Zahlungsart.",
          "Vorsteuerdetails (CSV): Wird nur angeboten, wenn der Bericht eine Vorsteuer-Karte enthält. Eine Zeile pro Vorsteuerposition jeder Einkaufsbestellung und Ausgabe, mit Lieferant, Steuernummer des Lieferanten und Rechnungsnummer.",
          "Excel-Arbeitsmappe (XLSX): Die Blätter „Summary“, „Documents“ und „Daily“ entsprechen den drei Verkaufs-CSVs, dazu „Purchases“, wenn der Bericht Vorsteuer zeigt. Beträge sind Zahlenzellen, und jede Spalte passt sich ihrem Inhalt an, damit nichts abgeschnitten öffnet.",
          "PDF-Bericht: Ein A4-Bericht in der Sprache der App mit Name des Ladens, Zeitraum, Steuermodus, Währung und den Berichtsabschnitten. Läden in Australien, Neuseeland, Singapur und Großbritannien erhalten zuerst die „Felder der Steuererklärung“; Vorsteuer-Karten folgen, wenn sie angezeigt werden. In der Vorschau können Sie mit „Markierung“ unterschreiben oder Anmerkungen machen, um die markierte Datei zu teilen; exportieren Sie denselben Zeitraum erneut, wird eine saubere Kopie geschrieben."
        ]
      },
      {
        "type": "h2",
        "text": "Formatierung für Buchhaltungssoftware"
      },
      {
        "type": "p",
        "text": "CSV-Dateien sind UTF-8-codiert und kommagetrennt, mit festen englischen Spaltennamen in jeder App-Sprache, damit Buchhaltungssoftware sie lesen kann. Beträge verwenden die Nachkommastellen der Währung und ein Minuszeichen, ohne Symbol und ohne Tausendertrennzeichen (etwa 80.97, -40.00 oder 1000 bei einem Yen-Laden). Datumsangaben sehen so aus: 2026-11-03."
      },
      {
        "type": "p",
        "text": "Textzellen, die mit =, +, - oder @ beginnen (etwa ein Kunde namens =1+1), erhalten ein vorangestelltes ', damit Tabellenkalkulationen Text anzeigen, statt eine Formel auszuführen. Beträge erhalten es nie."
      },
      {
        "type": "p",
        "text": "Dateinamen enthalten den Zeitraum, etwa tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx und tax-report_2026-11-01_2026-11-30.pdf, damit sich Dateien aus verschiedenen Zeiträumen nie überschreiben."
      },
      {
        "type": "h2",
        "text": "Berechtigungen und Datenschutz"
      },
      {
        "type": "p",
        "text": "Jeder Tarif kann exportieren, auch Lite. Mitarbeiter:innen brauchen die Berechtigung „Statistik“, genau wie für den Steuerbericht."
      },
      {
        "type": "p",
        "text": "Dateien mit Vorsteuer verlangen zuerst die Freigaben, die ihre Karten brauchen: „Einkaufspreis & Rohertrag“ für Einkaufsbestellungen und „GuV & Ausgaben“ für Ausgaben. Das betrifft „Vorsteuerdetails (CSV)“ sowie „Excel-Arbeitsmappe (XLSX)“ und „PDF-Bericht“, wenn Vorsteuer-Karten erscheinen. Abbrechen schreibt nichts; die drei Verkaufs-CSVs fragen nie danach."
      },
      {
        "type": "note",
        "text": "„Alle Belege (CSV)“ enthält Kundennamen, und Dateien mit Vorsteuer enthalten Lieferantennamen und Steuernummern. Geben Sie sie nur an Personen weiter, die sie sehen dürfen."
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
    "question": "Wie erfasse ich die Vorsteuer (VAT oder GST auf Einkäufe)?",
    "keywords": [
      "Vorsteuer",
      "Vorsteuerabzug",
      "VAT",
      "GST",
      "Umsatzsteuer",
      "Mehrwertsteuer",
      "Vorsteuer auf Einkaufsbestellungen",
      "Vorsteuer auf Ausgaben",
      "Steuernummer des Lieferanten",
      "Einkaufsbestellungen",
      "Steuerbericht"
    ],
    "content": [
      {
        "type": "p",
        "text": "Schalten Sie unter Einstellungen → Geschäftsdaten „Vorsteuerabzug“ ein, um die abziehbare Steuer aus Lieferantenrechnungen bei Einkaufsbestellungen und Ausgaben zu erfassen. Beide Formulare erhalten dann einen Abschnitt „Vorsteuer“, in den Sie die abziehbare Steuer aus jeder Rechnung übertragen. Der Steuerbericht führt sie in zwei Karten auf: „Vorsteuer auf Einkaufsbestellungen“ und „Vorsteuer auf Ausgaben“."
      },
      {
        "type": "h2",
        "text": "„Vorsteuerabzug“ einschalten"
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie Einstellungen → Geschäftsdaten und suchen Sie die Steuerkarte.",
          "Schalten Sie unter „Steuer berechnen“ den „Vorsteuerabzug“ ein."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Steuerkarte in den Geschäftsdaten mit eingeschaltetem Vorsteuerabzug und dem Hinweis darunter"
      },
      {
        "type": "p",
        "text": "„Vorsteuerabzug“ erscheint nur, wenn der Laden mindestens eine Steuer hat, und ist bei neuen Läden und nach dem Update zunächst ausgeschaltet. Das Umschalten wird sofort gesichert und im Aktivitätsprotokoll unter „Steuereinstellungen“ festgehalten. Ist die Option eingeschaltet, geben Sie Einkaufspreise und Artikelkosten vor der abziehbaren Steuer ein; nicht abziehbare Steuer bleibt in den Kosten."
      },
      {
        "type": "note",
        "text": "Den Schalter „Vorsteuerabzug“ gibt es in jedem Tarif, der Einkauf erfordert dagegen mindestens Standard. Wenn Sie die Option ausschalten, verschwinden die Felder bei neuen Datensätzen; bestehende Datensätze behalten ihre Vorsteuer und ihren zu zahlenden Betrag, und frühere Steuerberichte bleiben unverändert."
      },
      {
        "type": "h2",
        "text": "Einkaufsbestellungen"
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie „Einkauf“ und tippen Sie auf „Einkaufsbestellung anlegen“.",
          "Geben Sie die Stückpreise vor der abziehbaren Steuer ein und scrollen Sie dann an den Zusatzkosten vorbei zu „Vorsteuer“.",
          "Prüfen Sie das „Rechnungsdatum“, das standardmäßig dem Bestelldatum entspricht, und ergänzen Sie optional „Rechnungsnummer“ und „Steuernummer des Lieferanten“.",
          "Wählen Sie für „Satz“ eine Steuer des Ladens oder „Anderer Steuersatz…“, um bis zu 3 Nachkommastellen einzugeben, etwa 9,975 %.",
          "Prüfen Sie „Ohne Steuer“, das mit der Bestellsumme vor Steuern beginnt, und übertragen Sie die „Abziehbare Vorsteuer“ aus der Rechnung.",
          "Tippen Sie auf „Steuersatz hinzufügen“ für weitere Sätze."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Einkaufsbestellung mit dem Abschnitt „Vorsteuer“, Rechnungsfeldern, einer Satzzeile und den Summen"
      },
      {
        "type": "p",
        "text": "Die abziehbare Vorsteuer beginnt leer; DingPOS rechnet sie nie aus dem Satz aus und akzeptiert Rundungen der Rechnung. Ein Beispiel: Mehl, 10 × $300 plus $100 Versand, auf Rechnung AB-12345678 vom 30. Juni 2026 mit einer 5-%-Zeile über „Ohne Steuer“ $3,100 und „Abziehbare Vorsteuer“ $155 ergibt „Gesamt ohne Steuer“ $3,100, „Vorsteuer“ $155 und „Zu zahlender Betrag“ $3,255, der in der Liste, im Bestelldetail und unter „Zu zahlen“ erscheint. Eine „Steuernummer des Lieferanten“ beim Lieferanten füllt neue Bestellungen vor; gesicherte Bestellungen behalten ihre eigene."
      },
      {
        "type": "p",
        "text": "Trifft eine Rechnung verspätet ein, öffnen Sie die erhaltene Bestellung und tippen auf der Karte „Vorsteuer“ auf „Vorsteuer erfassen“ oder auf „Bearbeiten“, um sie zu ändern. Es ändert sich nur der „Zu zahlende Betrag“; Bestand, Artikelkosten und Zahlungsstatus bleiben unverändert. Annullierte Bestellungen zeigen die Vorsteuer nur lesend, und vor dem Update gesicherte Bestellungen werden nicht nachträglich befüllt."
      },
      {
        "type": "h2",
        "text": "Ausgaben"
      },
      {
        "type": "p",
        "text": "Unter GuV → Einmalige Ausgaben ergänzt das Formular unter dem Betrag „Rechnungsnummer“ und Vorsteuerzeilen. Der Betrag bleibt der Betrag vor der abziehbaren Steuer; übertragen Sie nur die abziehbare Steuer. Bei einer Büromaterialrechnung über $1,100 mit $100 abziehbarer Steuer geben Sie $1,000 sowie eine 10-%-Zeile über $1,000 und $100 ein; „Mit Steuer“ zeigt $1,100, und die GuV berücksichtigt $1,000. Ihre Vorsteuer zählt vollständig am Ausgabedatum, nie nach „Berücksichtigter Monat“ oder einer Verteilung."
      },
      {
        "type": "p",
        "text": "Öffnen Sie unter GuV → Feste Ausgaben eine gesicherte Ausgabe wie Miete oder Nebenkosten und tippen Sie unter „Rechnungen“ auf „Rechnung erfassen“, sobald jeweils eine Rechnung eintrifft, mit Rechnungsdatum, optionaler Rechnungsnummer und mindestens einer Satzzeile. Beträgt die Miete $30,000 im Monat und tragen die Rechnungen für Juli und August jeweils eine 5-%-Zeile über $30,000 und $1,500, enthält der Bericht für Juli bis September $3,000 Vorsteuer, während die GuV weiterhin jeden Monat $30,000 berücksichtigt."
      },
      {
        "type": "p",
        "text": "Beim Sichern einer Vorsteuer-Änderung in einem vergangenen Monat erscheint „Änderung sichern?“ mit dem Hinweis, dass sich der Steuerbericht dieses Monats ändert, falls Sie ihn bereits eingereicht haben. Änderungen im laufenden Monat und Entwürfe werden ohne Rückfrage gesichert."
      },
      {
        "type": "note",
        "text": "DingPOS berechnet weder Einfuhr-VAT noch Reverse Charge noch einen anteiligen Vorsteuerabzug. Übertragen Sie die abziehbare Steuer aus der Rechnung und setzen Sie nicht abziehbare Steuer in den Betrag vor Steuern."
      },
      {
        "type": "h2",
        "text": "Steuerbericht"
      },
      {
        "type": "p",
        "text": "Zwei Karten folgen auf die Umsatzkarten: „Vorsteuer auf Einkaufsbestellungen“ und „Vorsteuer auf Ausgaben“. Jede listet eine Zeile pro Satz, eine Zeile „Keine Vorsteuer“ und Summen für „Ohne Steuer“, „Abziehbare Vorsteuer“ und „Mit Steuer“. Die Summen enthalten Einkäufe ohne Vorsteuer, manche Steuererklärungen berücksichtigen jedoch nur Zeilen mit Vorsteuer."
      },
      {
        "type": "list",
        "items": [
          "Einkaufsbestellungen zählen am „Rechnungsdatum“ oder, wenn es leer ist, am Bestelldatum.",
          "Annullierte Einkaufsbestellungen zählen am Tag der Annullierung als negativer Betrag.",
          "Einmalige Ausgaben zählen vollständig am Ausgabedatum.",
          "Rechnungen zu festen Ausgaben zählen am Rechnungsdatum."
        ]
      },
      {
        "type": "p",
        "text": "„Vorsteuer auf Einkaufsbestellungen“ erfordert „Einkaufspreis & Rohertrag“ und „Vorsteuer auf Ausgaben“ erfordert „GuV & Ausgaben“; Mitarbeiter:innen ohne die jeweilige Berechtigung sehen unter dem Kartentitel „Freigabe durch Manager:in anfordern“. Die Kachel „Steuer“ zeigt weiterhin nur die auf Umsätze eingenommene Steuer, nie abzüglich der Vorsteuer, weil die vereinfachte Methode in Japan und das britische Flat Rate Scheme anders funktionieren. Läden in Australien, Neuseeland, Singapur und Großbritannien sehen diese Beträge außerdem in den „Feldern der Steuererklärung“."
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
    "question": "Wo finde ich den Steuerbericht und wie lese ich ihn?",
    "keywords": [
      "Steuerbericht",
      "Steuer",
      "Umsatzsteuer",
      "Mehrwertsteuer",
      "VAT",
      "GST",
      "Sales Tax",
      "Statistik",
      "Umsatz und Steuer je Steuersatz",
      "Nach Zahlungsart"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie die Statistik und tippen Sie auf die Kachel „Steuer“, um den Steuerbericht zu sehen, der Umsatz und Steuer je Steuersatz für den in der Statistik angezeigten Zeitraum auflistet. Übertragen Sie diese Zahlen in eine VAT-, GST- oder Umsatzsteuererklärung oder senden Sie sie an Ihre Steuerberatung. Spätere Steueränderungen verändern die gespeicherten Werte der Belege nie."
      },
      {
        "type": "h2",
        "text": "Den Steuerbericht öffnen"
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie die Statistik und wählen Sie den Zeitraum, etwa Dieser Monat oder einen benutzerdefinierten Zeitraum.",
          "Suchen Sie die Kachel „Steuer“ in der zweiten Reihe nach „Rabatte gesamt“.",
          "Tippen Sie auf die Kachel „Steuer“ oder auf „Steuerbericht ›“."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Statistik für Dieser Monat mit der Kachel „Steuer“ und ihrer Fußzeile „Steuerbericht ›“"
      },
      {
        "type": "p",
        "text": "Diese Kachel ist der einzige Zugang. Ihr Untertitel nennt die im Zeitraum eingenommenen Steuern, die mit dem größten Betrag zuerst: zwei mit Namen, drei oder mehr als zum Beispiel „3 Steuern, u. a. PST 7 %“. Die Kopfzeile zeigt den Zeitraum der Statistik (Dieser Monat · 1.11. – 30.11.), ohne Zeitraumauswahl und ohne Schnellwahl „Vormonat“, da Meldezeiträume unterschiedlich sind (Taiwan zwei Monate, Australien ein Quartal, Japan ein Jahr)."
      },
      {
        "type": "p",
        "text": "Läden ohne Steuer und ohne besteuerte Umsätze im Zeitraum sehen keine Kachel „Steuer“; Zeiträume ohne Belege zeigen die Hinweisansicht der Statistik für leere Zeiträume. Gelöschte Steuern behalten die Kachel für Zeiträume, die Umsätze unter diesen Steuern enthalten."
      },
      {
        "type": "note",
        "text": "Jeder Tarif, auch Lite und die Testphase, hat die Kachel, den Bericht und jeden Export. Mitarbeiter:innen brauchen die Berechtigung „Statistik“; Rollen, die eine Freigabe brauchen, sehen den Hinweis zur Freigabe, bis eine Manager:in freigibt."
      },
      {
        "type": "h2",
        "text": "Den Bericht lesen"
      },
      {
        "type": "p",
        "text": "Läden in Australien, Neuseeland, Singapur und Großbritannien sehen zuerst „Felder der Steuererklärung“."
      },
      {
        "type": "p",
        "text": "„Umsatz und Steuer je Steuersatz“ listet eine Zeile pro Satz: zuerst der höchste, danach 0 % (Nullsatz) und zuletzt „Nicht besteuert“ (Artikel ohne Steuer). Die Spalten heißen „Umsatz“, „Rückgaben & Annullierungen“ und „Summe“, jeweils mit „Ohne Steuer“ und „Steuer“; Zeilen mit Nullsatz und „Nicht besteuert“ haben keine Steuerzeile. Jede Steuer des Ladens erhält eine Zeile, auch ohne Umsätze. Eine Umbenennung behält eine Zeile; eine Satzänderung fügt eine hinzu."
      },
      {
        "type": "p",
        "text": "„Gesamtsummen“ zeigt „Umsatz ohne Steuer“, „Steuer“ und „Umsatz mit Steuer“. Bei zwei oder mehr Steuern weist ein Hinweis darauf hin, dass ein Verkauf mehrere Steuern enthalten kann und sich die Umsätze der Zeilen daher nicht addieren lassen; „Umsatz ohne Steuer“ zählt jeden Verkauf einmal. Für ein britisches Quartal könnte VAT 20 % „Ohne Steuer“ £1,000 und „Steuer“ £200 zeigen, 0 % (Nullsatz) £300 und „Nicht besteuert“ £50: Die Gesamtsummen ergeben „Umsatz ohne Steuer“ £1,350, „Steuer“ £200 und „Umsatz mit Steuer“ £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Steuerbericht mit den Zeilen von „Umsatz und Steuer je Steuersatz“ und den „Gesamtsummen“ darunter"
      },
      {
        "type": "list",
        "items": [
          "„Nach Zahlungsart“ listet die Zahlungen für diese Belege bis zum Zeitraumende auf, unbezahlte Beträge als „Offene Posten“ und die Barrundung in einer Zeile „Inkl. Barrundung …“ innerhalb der Zeile „Bargeld“.",
          "„Nicht als Umsatz gezählt“ erscheint nur bei verfallenen Anzahlungen und listet „Verfallene Anzahlungen“ mit einem Untertitel, der empfiehlt, die Meldung mit der Steuerberatung zu klären; sie fließen weder in den Umsatz noch in die Steuer ein.",
          "Läden mit eingeschaltetem „Vorsteuerabzug“ oder mit im Zeitraum erfasster Vorsteuer sehen außerdem „Vorsteuer auf Einkaufsbestellungen“ und „Vorsteuer auf Ausgaben“."
        ]
      },
      {
        "type": "h2",
        "text": "An welchem Tag jeder Beleg zählt"
      },
      {
        "type": "p",
        "text": "Tippen Sie auf ⓘ neben „Umsatz und Steuer je Steuersatz“:"
      },
      {
        "type": "list",
        "items": [
          "Eine Annullierung zählt als negativer Betrag in dem Zeitraum, in dem annulliert wurde, sodass sich ein bereits gemeldeter Zeitraum nie ändert. Die Statistik entfernt sie dagegen aus dem Zeitraum des Verkaufs.",
          "Eine Rückgabe zählt an ihrem eigenen Datum. Bei einem Umtausch zählen die neuen Artikel als Verkäufe und die zurückgegebenen Artikel als Rückgaben.",
          "Eine Vorbestellung zählt am Tag der Abholung, ein Verkauf auf Rechnung am Tag des Verkaufs."
        ]
      },
      {
        "type": "p",
        "text": "Ein Verkauf vom 30.10., der am 2.11. annulliert wird, bleibt im Oktober unter „Umsatz“ und erscheint im November als negativer Betrag unter „Rückgaben & Annullierungen“. Die spätere Begleichung eines Verkaufs auf Rechnung verschiebt ihn nicht."
      },
      {
        "type": "h2",
        "text": "Eingenommene Steuer und Summen der Statistik"
      },
      {
        "type": "p",
        "text": "Die Kachel „Steuer“ entspricht der Steuersumme im Steuerbericht. Sie weicht von der Zeile „Steuer“ unter „Vom Umsatz zum Rohertrag“ in der Statistik nur bei Annullierungen über Zeiträume hinweg ab, weil die Statistik einen annullierten Verkauf aus seinem ursprünglichen Zeitraum herausnimmt."
      },
      {
        "type": "note",
        "text": "Der Steuerbericht zeigt die auf Umsätze eingenommene Steuer, nie die zu zahlende Steuer (Umsatzsteuer minus Vorsteuer), weil nicht jedes Land sie so berechnet, etwa Japan mit der vereinfachten Methode oder Großbritannien mit dem Flat Rate Scheme."
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
    "question": "Welche Werte gehören in die Felder meiner BAS-, GST- oder VAT-Erklärung?",
    "keywords": [
      "Felder der Steuererklärung",
      "Steuerbericht",
      "Statistik",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "Vorsteuerabzug"
    ],
    "content": [
      {
        "type": "p",
        "text": "Für Läden in Australien, Neuseeland, Singapur oder Großbritannien beginnt der Steuerbericht mit „Felder der Steuererklärung“; die Karte zeigt jedes Feld mit dem Betrag aus demselben Bericht. Sie deckt in jedem Tarif Australien BAS · Simpler BAS, Neuseeland GST101A, Singapur GST F5 und die britische VAT Return ab."
      },
      {
        "type": "h2",
        "text": "„Felder der Steuererklärung“ öffnen"
      },
      {
        "type": "steps",
        "items": [
          "Öffnen Sie die Statistik.",
          "Tippen Sie auf die Kachel „Steuer“, um den Steuerbericht zu öffnen."
        ]
      },
      {
        "type": "p",
        "text": "„Felder der Steuererklärung“ ist die erste Karte, über „Umsatz und Steuer je Steuersatz“, und ihr Untertitel nennt die Erklärung. Jeder Betrag stammt aus demselben Bericht, Cent eingeschlossen, und nichts wird neu berechnet. Der exportierte PDF-Bericht beginnt mit derselben Karte. Läden, die eingerichtet wurden, bevor die App das Land erfasste, werden nach der Währung zugeordnet (AUD, NZD, SGD oder GBP); andere Läden haben keine Karte „Felder der Steuererklärung“."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Karte „Felder der Steuererklärung“ oben im Steuerbericht mit den Feldern Box 1, 4, 6 und 7 der britischen VAT Return"
      },
      {
        "type": "h2",
        "text": "Australien BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Umsätze mit GST, GST-freie und nicht besteuerte Umsätze eingeschlossen; die Frage „Does the amount shown at G1 include GST?“ mit „Yes“ beantworten",
          "1A GST on sales: Steuer auf Umsätze",
          "1B GST on purchases: Abziehbare Vorsteuer auf Einkaufsbestellungen und Ausgaben"
        ]
      },
      {
        "type": "p",
        "text": "Die ATO verlangt ganze Dollar: Lassen Sie in der BAS die Cent weg und runden Sie nie auf."
      },
      {
        "type": "h2",
        "text": "Neuseeland GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: Umsätze mit GST, Umsätze mit Nullsatz eingeschlossen, nicht besteuerte Umsätze nicht enthalten",
          "Box 6 Zero-rated supplies: Umsätze mit Nullsatz",
          "Box 11 Total purchases and expenses: Einkaufsbestellungen und Ausgaben mit GST, GST eingeschlossen; Einkäufe ohne Vorsteuer oder mit Nullsatz nicht enthalten"
        ]
      },
      {
        "type": "p",
        "text": "myIR berechnet Box 8 und Box 12 als 3/23, was um einige Cent von der Steuer im Bericht abweichen kann."
      },
      {
        "type": "h2",
        "text": "Singapur GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: Besteuerte Umsätze ohne Steuer",
          "Box 2 Total value of zero-rated supplies: Umsätze mit Nullsatz; nur Exporte und internationale Dienstleistungen können mit Nullsatz besteuert werden",
          "Box 5 Total value of taxable purchases: Einkaufsbestellungen und Ausgaben mit GST oder Nullsatz, ohne Steuer; Einkäufe ohne Vorsteuer nicht enthalten",
          "Box 6 Output tax due: Steuer auf Umsätze",
          "Box 7 Input tax and refunds claimed: Abziehbare Vorsteuer auf Einkaufsbestellungen und Ausgaben"
        ]
      },
      {
        "type": "h2",
        "text": "Großbritannien VAT Return"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: Steuer auf Umsätze",
          "Box 4 VAT reclaimed on purchases and other inputs: Abziehbare Vorsteuer auf Einkaufsbestellungen und Ausgaben",
          "Box 6 Total value of sales and all other outputs excluding any VAT: Umsätze ohne Steuer, Umsätze mit Nullsatz, steuerbefreite und nicht besteuerte Umsätze eingeschlossen",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: Einkaufsbestellungen und Ausgaben vor Steuern, einschließlich Einkäufen ohne Vorsteuer; ziehen Sie erfasste Löhne und die Grundsteuer für Gewerbeflächen (Business Rates) ab"
        ]
      },
      {
        "type": "p",
        "text": "Für die reguläre VAT-Abrechnung. Beim Flat Rate Scheme werden Box 1 und Box 6 anders berechnet. In Großbritannien wird die VAT auf eine Anzahlung fällig, sobald Sie sie erhalten; DingPOS zählt eine Vorbestellung am Tag der Abholung."
      },
      {
        "type": "p",
        "text": "Beispiel für ein britisches Quartal: £1,000 Umsätze ohne Steuer mit VAT 20 % (Steuer £200), £300 mit Nullsatz, £50 nicht besteuert, Einkaufsbestellungen über £400 plus £80 VAT und Ausgaben über £250 ohne Vorsteuer ergeben Box 1 £200, Box 4 £80, Box 6 £1,350 und Box 7 £650."
      },
      {
        "type": "h2",
        "text": "Leere Felder und Zugriff für Mitarbeiter:innen"
      },
      {
        "type": "p",
        "text": "Felder, die die Steuerbehörde selbst berechnet, und geschuldete Beträge fehlen (UK Box 3 und 5; Singapur Box 3, steuerbefreite Umsätze). In Neuseeland und Singapur stehen nicht besteuerte Umsätze in keinem Feld; fragen Sie Ihre Steuerberatung, wenn sie Steuer hätten tragen müssen."
      },
      {
        "type": "p",
        "text": "Vorsteuer-Felder (AU 1B, NZ 11, SG 5 und 7, UK 4 und 7) brauchen „Vorsteuerabzug“, sonst zeigen sie — und „Keine Vorsteuer erfasst“, nie 0. UK Box 7 braucht sowohl „Vorsteuer auf Einkaufsbestellungen“ als auch „Vorsteuer auf Ausgaben“; Einkaufsbestellungen allein füllen Box 4 und lassen Box 7 bei —."
      },
      {
        "type": "p",
        "text": "Mitarbeiter:innen ohne die Berechtigung „GuV & Ausgaben“ oder „Einkaufspreis & Rohertrag“ sehen die Felder, die beide Karten addieren, nicht, bis eine Manager:in über „Freigabe durch Manager:in anfordern“ freigibt."
      },
      {
        "type": "note",
        "text": "Berechnet nach Verkaufs- und Rechnungsdatum; DingPOS erfasst keine Zahlungsdaten. Wenn Sie auf Zahlungsbasis (Cash Basis) abrechnen, passen Sie diese Werte an."
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
      "Willkommensbonus",
      "Punkte anpassen"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie Einstellungen → Treueprogramm und legen Sie zwei Regeln fest: Kunden erhalten Y Punkte pro X Umsatz, und N Punkte lassen sich gegen M Rabatt einlösen (optional mit einer Einlösegrenze pro Verkauf). Neuen Mitgliedern können Sie außerdem automatisch einen Willkommensbonus gutschreiben. In neuen Läden ist das Treueprogramm zunächst ausgeschaltet: Aktivieren Sie Treueprogramm aktivieren und tragen Sie eine Regel ein. Ist der Schalter an, aber keine Regel festgelegt, erscheint der Hinweis „Es ist noch keine Regel zum Sammeln oder Einlösen festgelegt, daher werden bei Verkäufen weder Punkte gesammelt noch eingelöst.“"
      },
      {
        "type": "p",
        "text": "Ordnen Sie dem Verkauf das Mitglied zu, im Warenkorb oder auf dem Bezahlbildschirm, dann werden die Punkte automatisch gesammelt; zum Einlösen geben Sie die einzusetzenden Punkte ein. Der Abschlussbildschirm zeigt die gesammelten Punkte und den neuen Punktestand, etwa „+22 Punkte · 122 Punkte gesamt“. Bei einem Verkauf auf Rechnung oder einer noch nicht vollständig bezahlten Vorbestellung werden die Punkte erst gutgeschrieben, wenn das Geld eingeht; dann steht dort „gutgeschrieben nach Begleichung“ beziehungsweise „gutgeschrieben, sobald bei Abholung bezahlt wurde“. Wird ein Verkauf annulliert, werden die dafür gesammelten Punkte wieder abgezogen und eingelöste Punkte zurückgegeben."
      },
      {
        "type": "p",
        "text": "Um Punkte von Hand gutzuschreiben oder abzuziehen (etwa für einen vergessenen Einkauf), tippen Sie in den Kundendetails auf der Karte Punkte auf Anpassen, wählen Hinzufügen oder Abziehen, geben die Punkte ein und nennen optional einen Grund (bis zu 100 Zeichen). Sie können nicht mehr Punkte abziehen, als der Kunde hat. Jede Anpassung bleibt im Punkteverlauf erhalten, mit Punktestand davor und danach, Grund und der Person, die sie vorgenommen hat."
      },
      {
        "type": "note",
        "text": "Die manuelle Punktekorrektur gibt es seit Version 3.5. Im Tarif Pro müssen Mitarbeiter:innen, deren Rolle für die Manuelle Punktekorrektur eine Freigabe braucht (standardmäßig die Rolle Mitarbeiter:in), beim Bestätigen die PIN einer Manager:in oder der Inhaber:in eingeben."
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
        "type": "p",
        "text": "Beim ersten Start nach einem Update oder nach dem Wiederherstellen einer Sicherung aus einer älteren Version kann zunächst „Ihre Daten werden aktualisiert …“ erscheinen. Dabei werden Ihre Ladendaten in ein neueres Format überführt – das dauert umso länger, je mehr Daten Sie haben; danach öffnet sich die App von selbst. Die App ist nicht eingefroren."
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
          "Aktionen (manuelle Bestandskorrektur, manuelle Punktekorrektur, Artikelverwaltung, Bezahlen über der Rabattgrenze): Eine Freigabe gilt für genau diese eine Aktion.",
          "Ansichten (Einkaufspreis & Rohertrag, Statistik, GuV & Ausgaben, Einstellungen, Backup & Wiederherstellung): Eine Freigabe schaltet frei, bis die Bediener:in wechselt oder die App in den Hintergrund geht.",
          "Die Rabattgrenze gilt für manuelle Rabatte und wird einmal beim Bezahlen geprüft; automatische Aktionen und das Einlösen von Punkten zählen nicht dazu."
        ]
      },
      {
        "type": "p",
        "text": "Werkseinstellung: Manager:innen dürfen alles außer Backup & Wiederherstellung und GuV & Ausgaben, ohne Rabattgrenze; Mitarbeiter:innen brauchen für alles eine Freigabe, bei einer Rabattgrenze von 10 %. Die Inhaber:in darf immer alles und kann nicht bearbeitet werden. Zum Ändern gehen Sie zu Personal → Rollenberechtigungen, tippen auf Bearbeiten und anschließend einmal auf Sichern – die Änderung gilt sofort für alle."
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
        "text": "Nutzen Sie das Aktivitätsprotokoll. Tippen Sie auf der Seite Personal oben rechts auf Aktivitätsprotokoll und geben Sie die PIN der Inhaber:in ein. Dann sehen Sie die sensiblen Vorgänge Ihres Ladens, die neuesten zuerst: Annullierungen, Rückgaben, Bestandskorrekturen und Neuzählungen, manuelle Punktekorrekturen, Freigaben, Änderungen an Personal und Berechtigungen, Änderungen an der PIN der Inhaber:in, Steuereinstellungen, Preis- und Einkaufspreisänderungen bei Artikeln sowie gelöschte Artikel. Normale Verkäufe werden nicht aufgeführt."
      },
      {
        "type": "list",
        "items": [
          "Jeder Eintrag zeigt, was betroffen war, wer wann was getan hat und das Ergebnis – zum Beispiel „M Preis $390 → $350“. Den Grund, der bei einer Annullierung, Rückgabe, Bestandskorrektur oder Punktekorrektur angegeben wurde, finden Sie in der dritten Zeile des Eintrags.",
          "Filtern Sie nach Mitarbeiter:in (auch deaktivierte), Vorgangsart und Heute / Diese Woche / Dieser Monat.",
          "Tippen Sie auf einen Eintrag, der auf eine Bestellung, einen Artikel oder einen Kunden verweist, um die Details zu öffnen.",
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
        "text": "Ab der Installation nutzen Sie 30 Tage lang alle Funktionen des Tarifs Pro, darunter Mitarbeiter:innen-Konten, Berechtigungen und das Aktivitätsprotokoll – ohne Konto."
      },
      {
        "type": "p",
        "text": "Wenn Sie während der Testphase einen Tarif abonnieren, endet die Testphase sofort, und ab dann gilt der gekaufte Tarif. Nach der Testphase bleiben Pro-Funktionen wie Personal und das Aktivitätsprotokoll nur mit einem Pro-Abonnement verfügbar. Erweiterte Berichte brauchen kein Pro-Abonnement; seit Version 3.4 enthält jeder Tarif sie."
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
        "text": "Alle drei Tarife enthalten die komplette Kasse, Artikel, Bestellungen (mit Annullierungen, Rückgaben und Umtausch), Berichte (erweiterte Berichte und die monatliche GuV seit Version 3.4 inklusive, der Steuerbericht und sein Export seit Version 3.6) und Cloud-Backup. Sie unterscheiden sich in den Werkzeugen für den Ladenalltag:"
      },
      {
        "type": "list",
        "items": [
          "Lite: für Einzelpersonen am Marktstand, die Kasse und Artikel brauchen.",
          "Standard: zusätzlich Aktionen, Rabatt-Voreinstellungen, Punkte und Kundenstufen, Bestandsverwaltung, Einkauf, Verkauf auf Rechnung, Vorbestellungen und Gebührensätze für Zahlungsarten.",
          "Pro: zusätzlich Mitarbeiter:innen-Konten und Berechtigungen, Freigaben, Aktivitätsprotokoll und Wiederherstellungsprotokoll – für Geschäfte mit Personal."
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
        "text": "Geschenke und Zusatzartikel verändern den Warenkorb nie von selbst. Sind die Bedingungen erfüllt, erscheint auf dem Kassenbildschirm ein Vorschlagsbanner, und der Warenkorb ändert sich erst, wenn die Kassierer:in im Banner auf die Geschenk- oder die +-Schaltfläche tippt („Geschenk wählen“ bzw. „Zusatzartikel wählen“). Das ist Absicht, denn Geschenke betreffen den physischen Bestand: Jemand muss prüfen, ob der Artikel vorrätig ist und ob der Kunde ihn möchte."
      },
      {
        "type": "list",
        "items": [
          "Nach ✕ („Ablehnen“) im Banner erscheint derselbe Vorschlag für diesen Warenkorb nicht erneut; bei einem neuen oder geleerten Warenkorb wird wieder gefragt.",
          "Erfüllt der Warenkorb die Bedingungen nicht mehr (etwa weil der Artikel entfernt wurde, der das Geschenk ausgelöst hat), werden das Geschenk oder der Zusatzartikel automatisch entfernt; oben erscheint ein Hinweis, und es zählt nicht als Nutzung (seit Version 3.6).",
          "Seit Version 3.4 halten noch offene Angebote das Bezahlen nicht auf: Eine gelbe Zeile unter dem Bezahlen-Button, etwa „1 offenes Aktionsangebot wird nicht angewendet“, zeigt an, wie viele ausgelassen werden (tippen Sie darauf, um zu sehen, welche), und der Verkauf wird ohne sie abgeschlossen. Soll das Bezahlen wie bisher warten, aktivieren Sie unter Einstellungen → Geräteeinstellungen „Angebote vor dem Bezahlen klären“; die Option gilt nur für dieses iPad.",
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
        "text": "Seit Version 3.4 zeigt die GuV den Reingewinn jedes Monats nach Wareneinsatz, Gebühren und Ausgaben – siehe „Wie sehe ich, wie viel ich jeden Monat tatsächlich verdient habe?“ Seit Version 3.6 exportiert der Steuerbericht einen Zeitraum (zum Beispiel Dieser Monat) für Ihre Steuerberatung als CSV, als Excel-Arbeitsmappe oder als PDF-Bericht – mit Umsatz, Steuer, dem Zahlungseingang je Zahlungsart und den offenen Posten. GuV und die übrigen Berichte lassen sich noch nicht exportieren, aber alles, was Sie für den Abgleich brauchen, steckt bereits in der App:"
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
        "text": "Wenn Sie über den Steuerbericht hinaus einen Monatsabschluss-Bericht zum Exportieren oder Drucken brauchen, schreiben Sie uns, welche Felder Sie benötigen – wir priorisieren die Entwicklung nach der Zahl der Anfragen."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
