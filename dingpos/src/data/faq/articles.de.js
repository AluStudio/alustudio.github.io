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
        "text": "Die Währung lässt sich nach der Einrichtung nicht mehr ändern; Steuern und Steuermodus können Sie später beide unter Einstellungen → Geschäftsdaten ändern. In den USA, Kanada, Brasilien und Mikronesien hängt der Steuersatz vom Bundesstaat, der Provinz oder der Stadt ab; das Feld für den Steuersatz bleibt deshalb zunächst leer, und Sie tragen den von Ihnen berechneten Steuersatz ein, um fortzufahren. Ein Steuersatz muss größer als 0 sein: Ein Geschäft, das keine Steuer erhebt, löscht die Zeile. Die Liste mit 175 Ländern und die Wahl der Währung gibt es seit v3.2; frühere Versionen boten 15 Länder an."
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
          "In einem Laden mit exklusivem Steuermodus zeigen die Summen im Warenkorb eine Zeile pro Steuer, und die Bestelldetails führen pro Steuer eine Zeile mit Satz und dem Betrag, auf den sie berechnet wurde."
        ]
      },
      {
        "type": "p",
        "text": "Um vorübergehend keine Steuer zu berechnen, schalten Sie oben auf der Karte „Steuer“ die Option „Steuer berechnen“ aus: Bei allen späteren Verkäufen wird keine Steuer berechnet, auch nicht für Artikel, die bereits in einem Warenkorb liegen. Jeder Artikel behält seine Steuern, und beim Wiedereinschalten gelten sie wieder wie zuvor."
      },
      {
        "type": "p",
        "text": "Die vollständige Berechnungsreihenfolge: Artikelrabatte und Aktionen → Warenkorb-Rabatt → Punkteeinlösung → Steuer. Beträge werden kaufmännisch auf die Dezimalstellen der Währung gerundet (z. B. 0 bei TWD, 2 bei USD)."
      },
      {
        "type": "note",
        "text": "Benannte Steuern gibt es seit Version 3.5. Beim Update wird Ihr bisheriger Steuersatz zu einer benannten Steuer (z. B. „GST 10 %“ in Australien), und jeder vorhandene Artikel übernimmt sie; bei einem Laden, dessen Satz 0 war, wird keine Steuer angelegt. Frühere Bestellungen und Berichte behalten ihre Zahlen."
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
        "text": "Ein neuer Laden startet mit zwei Zahlungsarten, Bargeld und Kreditkarte, die bei der Einrichtung in der Sprache der App benannt werden. Unter Einstellungen → Zahlungsarten können Sie beliebige weitere Zahlungsarten hinzufügen (z. B. Apple Pay, LINE Pay oder eine lokale Wallet) sowie löschen oder umsortieren."
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
          "„Prozentanteil der Gebühr bei Rückgaben erstattet“ ist standardmäßig aktiviert, für Anbieter, die ihre Gebühr bei einer Erstattung zurückgeben. Die Einstellung gilt für Rückgaben und erstattete Anzahlungen von Vorbestellungen: Ist sie aktiviert, wird der Prozentanteil erstattet; der feste Betrag nie. Beim Annullieren oder Rückgängigmachen einer Begleichung wird der Schalter ignoriert; die gesamte erfasste Gebühr wird zurückgenommen, einschließlich des festen Betrags. In beiden Fällen erhält der Kunde denselben Betrag zurück.",
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
        "text": "Ein neuer Laden, der in einem dieser Länder mit der Landeswährung eingerichtet wird, erhält die Rundung automatisch. Jeder andere Laden kann sie mit der Karte „Barrundung“ ganz unten unter Einstellungen → Zahlungsarten einschalten: Wählen Sie, worauf Bargeld gerundet wird („Keine Rundung“, 0,05, 0,10, 0,50 oder 1,00) und – bei einem Rundungsschritt, der genau in der Mitte landen kann – ob dann auf- oder abgerundet wird. Eine Änderung gilt nur für spätere Zahlungen."
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
        "text": "Sobald ein Artikel Varianten hat, klappt sein Feld „Preis“ ein, und jede Kombination bekommt unter „Variantenpreis & -bestand“ einen eigenen Preis und einen eigenen Bestand (seit v3.2; frühere Versionen verlangen weiterhin einen Artikelpreis). Kasse, Artikelliste und Artikeldetails zeigen eine Preisspanne vom niedrigsten bis zum höchsten Preis, etwa „NT$350–NT$390“, oder einen einzigen Preis, wenn alle Kombinationen gleich viel kosten; die Sortierung nach Preis nutzt den niedrigsten Kombinationspreis. An der Kasse erscheint beim Antippen des Artikels eine Variantenauswahl, bevor er in den Warenkorb gelegt wird."
      },
      {
        "type": "p",
        "text": "Sie müssen nicht für jede Kombination einen Einkaufspreis eintragen: Ein leeres Feld „Einkaufspreis“ bedeutet „Wie Artikel“, es übernimmt also den Einkaufspreis des Artikels und ändert sich mit ihm. Eine Zahl macht daraus „Eigener Einkaufspreis“ – auch 0. Mit „Für alle Artikel-Einkaufspreis verwenden“ löschen Sie alle eigenen Einkaufspreise auf einmal."
      },
      {
        "type": "note",
        "text": "Namen von Optionen und Optionswerten sind auf 20 Zeichen begrenzt; Leerzeichen am Anfang und Ende werden beim Sichern entfernt. Ein Wert, in den Sie nichts eingetragen haben, ist keine Kombination und wird beim Sichern übersprungen; nur ein leerer Optionsname oder eine Option, deren Werte alle leer sind, wird rot umrandet. Ein Artikel mit Varianten kann keinen freien Preis verwenden."
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
        "text": "Ist sie aktiv, buchen Verkäufe und Vorbestellungen den Bestand automatisch ab; Annullierungen, Rückgaben und stornierte Vorbestellungen buchen ihn zurück; ein Wareneingang einer Einkaufsbestellung erhöht ihn. Jede Bewegung wird lückenlos protokolliert. Niedriger Bestand wird farbig hervorgehoben."
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
        "text": "Nutzen Sie „Bestand korrigieren“. Tippen Sie bei einem Artikel mit Bestandsführung in den Artikeldetails auf „Bestand korrigieren“, wählen Sie „Entfernen“ oder „Hinzufügen“, geben Sie die Menge ein, wählen Sie einen Grund und ergänzen Sie optional eine Notiz (bis zu 100 Zeichen). Das Fenster berechnet den Bestand nach der Änderung, und die Zeile unter dem Grund zeigt an, ob die Änderung die GuV betrifft."
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
          "Ein Artikel, der nicht im Verkauf ist, erscheint nie im Kassenraster, in Kategorien, in der Suche oder beim Scannen von Barcodes und kann weder Geschenk, Zusatzartikel, Ziel einer Aktion noch Ersatzartikel bei einem Umtausch sein.",
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
      "Kasse abstimmen",
      "Anzahlung",
      "Verkauf auf Rechnung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Umsatz zählt an dem Tag, an dem die Ware übergeben wurde, nach allen Rabatten und vor Steuern; der Zahlungseingang zählt an dem Tag, an dem das Geld eingeht, und ist das Geld, das Sie tatsächlich eingenommen haben – inklusive Steuer. In einem Laden, der Steuer berechnet, liegt der Zahlungseingang deshalb um die Steuer über dem Umsatz, selbst bei Bestellungen, die an der Kasse bezahlt werden. Darüber hinaus laufen beide in diesen Fällen auseinander:"
      },
      {
        "type": "list",
        "items": [
          "Verkauf auf Rechnung: Die Ware verlässt den Laden heute und zählt zum Umsatz von heute; das Geld zählt an dem Tag zum Zahlungseingang, an dem die Begleichung erfolgt.",
          "Vorbestellung: Die Anzahlung zählt zum Zahlungseingang, sobald sie bezahlt wird; der Umsatz wird am Abholtag in voller Höhe erfasst.",
          "Verfall der Anzahlung: Storniert ein Kunde eine Vorbestellung und Sie behalten die Anzahlung, wurde sie beim Bezahlen bereits als Zahlungseingang gezählt. In der Statistik erscheint sie separat als verfallene Anzahlungen und zählt nie als Umsatz.",
          "Annullierung einer früheren Bestellung: Das erstattete Geld zählt am Tag der Annullierung zum Zahlungseingang, sodass der Zahlungseingang dieses Tages negativ sein kann, während „Annulliert“ die Bestellung an ihrem Verkaufstag zählt.",
          "Barrundung: Was die Barrundung gegenüber dem Bestellbetrag zu viel oder zu wenig einnimmt, zählt zum Zahlungseingang, nie zum Umsatz."
        ]
      },
      {
        "type": "p",
        "text": "Für den Abgleich vergleichen Sie den Zahlungseingang mit dem Bargeldbestand in der Kassenschublade und den Angaben Ihres Kartenterminals; wie viel Sie in einem Zeitraum tatsächlich verkauft haben, sehen Sie am Umsatz. Rückgaben mindern den Umsatz an dem Tag, an dem sie stattfinden. Das ⓘ an den Kacheln „Umsatz“, „Zahlungseingang“ und „Annulliert“ erklärt dasselbe, und die Steuer selbst steht unter „Vom Umsatz zum Rohertrag“, das sich über die Kachel „Rohertrag“ öffnen lässt."
      },
      {
        "type": "note",
        "text": "Den Umsatz vor Steuern gibt es seit Version 3.5, und vergangene Zeiträume wurden auf dieselbe Weise neu berechnet; ein Laden, der Steuer berechnet, sieht deshalb einen niedrigeren Umsatz als vor dem Update. Das ist eine Korrektur. Frühere Versionen rechneten die Steuer zum Umsatz, und Läden mit exklusiver Steuer (Preise ohne Steuer) zählten sogar die eingenommene Umsatzsteuer als Umsatz."
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
        "text": "Wählen Sie oben in der Statistik Heute, Gestern, Diese Woche, Dieser Monat, Dieses Jahr oder Gesamter Zeitraum, oder legen Sie über Benutzerdefiniert ein Start- und Enddatum fest. Diese Woche richtet sich nach dem ersten Wochentag des Geräts; Dieser Monat und Dieses Jahr beginnen am 1. bzw. am 1. Januar. Jede Option zeigt den abgedeckten Zeitraum, und Gesamter Zeitraum beginnt mit der ersten Transaktion Ihres Geschäfts."
      },
      {
        "type": "p",
        "text": "Unter der Zeitraumleiste folgen zwei Reihen mit Kennzahl-Kacheln (Umsatz, Zahlungseingang, Rohertrag, Bestellungen, Durchschnittlicher Bestellwert; Rabatte gesamt, Reingewinn, Artikel ohne Einkaufspreis, Bediente Kunden), danach das Verlaufsdiagramm. Über das Menü oben rechts im Verlaufsdiagramm wechseln Sie zwischen Umsatz, Bestellungen, durchschnittlichem Bestellwert und bedienten Kunden; daneben zeigt das Diagramm „Kosten und Rohertrag“ in einem Balken pro Zeitraum den Wareneinsatz und den Rohertrag übereinandergestapelt. Ein einzelner Tag wird nach Stunden dargestellt; längere Zeiträume zeigen je nach Länge Tage, Wochen, Monate oder Jahre."
      },
      {
        "type": "p",
        "text": "Halten Sie das Verlaufsdiagramm oder das Diagramm „Kosten und Rohertrag“ gedrückt, um es Zeitraum für Zeitraum abzulesen; bei eingeschaltetem Umsatzvergleich zeigt die Karte des Verlaufsdiagramms den Wert dieses Zeitraums und den des Vergleichszeitraums nebeneinander. Ziehen Sie nach links oder rechts, um weiterzugehen; wischen Sie auf dem Diagramm nach oben oder unten, scrollt die Seite wie gewohnt."
      },
      {
        "type": "p",
        "text": "Die Karte Artikel-Ranking listet die Top 5. Tippen Sie auf die Karte oder auf „Alle anzeigen“, um jeden im Zeitraum verkauften Artikel zu sehen, sortiert nach Menge nach Rückgaben; ein Artikel mit Varianten erhält eine Zeile pro Variante."
      },
      {
        "type": "p",
        "text": "Der Umsatzvergleich rechts in der Zeitraumleiste vergleicht den Zeitraum mit dem davor oder mit demselben Zeitraum im Vorjahr – siehe „Was zeigen die erweiterten Berichte?“"
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
    "question": "Was zeigen die erweiterten Berichte?",
    "keywords": [
      "erweiterte Berichte",
      "Umsatzvergleich",
      "Vorjahr",
      "Heatmap",
      "Stoßzeiten",
      "Ladenhüter",
      "Auf- und Absteiger",
      "Anteil nach Kategorie",
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
          "Umsatzvergleich: Rechts in der Zeitraumleiste vergleichen Sie mit demselben Zeitraum im Vorjahr oder mit dem Zeitraum davor (ein einzelner Tag mit demselben Tag der Vorwoche, diese Woche mit der letzten Woche, dieser Monat mit dem letzten Monat, dieses Jahr mit dem letzten Jahr, ein benutzerdefinierter Zeitraum mit der gleichen Anzahl Tage davor). Die Kacheln Umsatz, Zahlungseingang, Rohertrag, Bestellungen, Durchschnittlicher Bestellwert, Rabatte gesamt und Bediente Kunden zeigen jeweils die Veränderung und den Wert des Vergleichszeitraums, etwa „▼ 3 % ggü. Vormonat“; die Veränderung bei „Rabatte gesamt“ ist immer grau, denn mehr Rabatt ist an sich weder gut noch schlecht. Tippen Sie auf eine beliebige Vergleichszeile, um „Zeitraumvergleich“ zu öffnen, der die Werte beider Zeiträume auflistet. Das Verlaufsdiagramm erhält eine hellere Linie für den Vergleichszeitraum. Läuft ein Zeitraum noch, wird der Vergleichszeitraum zum gleichen Zeitpunkt abgeschnitten.",
          "Wochentag × Uhrzeit: Stellen Sie die Kopfzeile des Verlaufsdiagramms von „Verlauf“ auf „Wochentag × Uhrzeit“ um und sehen Sie eine Heatmap mit sieben Tagen und 24 Stunden – je dunkler ein Feld, desto mehr haben Sie verkauft. Wechseln Sie zwischen Umsatz und Bestellungen; bei eingeschaltetem Vergleich sehen Sie, welche Stunden gewachsen und welche geschrumpft sind.",
          "Ladenhüter: Stellen Sie die Kopfzeile der Ranking-Karte auf Ladenhüter um, um Artikel von den wenigsten bis zu den meisten Verkäufen aufzulisten, mit aktuellem Bestand und dem Datum des letzten Verkaufs. Artikel, die nie verkauft wurden, sind mit „Nie verkauft“ markiert, und ein Artikel mit Varianten erhält eine Zeile pro Variante. Standardmäßig werden nur Artikel mit Bestand angezeigt.",
          "Auf und ab (seit Version 3.4): Stellen Sie die Kopfzeile der Ranking-Karte auf Auf und ab um, um die 3 Artikel zu sehen, deren Umsatz gegenüber dem Vergleichszeitraum am stärksten gestiegen ist, und die 3, deren Umsatz am stärksten gefallen ist – jeweils mit dem Umsatz beider Zeiträume und der Differenz; jede Variante wird mit sich selbst verglichen. Wählen Sie vorher unter Umsatzvergleich einen Zeitraum; bei „Keiner“ oder bei Gesamter Zeitraum weist die Karte Sie darauf hin. Tippen Sie auf die Karte oder auf „Alle anzeigen“ für die vollständige Liste „Auf- und Absteiger bei Artikeln“, aufgeteilt in Aufsteiger und Absteiger.",
          "Wiederkaufrate: Die letzte Zeile der Kundenkachel zeigt den Anteil der Mitglieder, die im Zeitraum gekauft haben und insgesamt mindestens zweimal gekauft haben. Bei eingeschaltetem Vergleich nennt eine Zeile darunter die Veränderung in Prozentpunkten und die Rate des Vergleichszeitraums.",
          "Anteil nach Kategorie: Umsatz und Anteil jeder Kategorie, nach der aktuellen Kategorie des jeweiligen Artikels, die größte zuerst. Artikel ohne Kategorie stehen unter „Ohne Kategorie“, und die Zeilen ergeben genau den Umsatz.",
          "Aktuell: Lagerwert (aktueller Bestand × aktueller Einkaufspreis), alle Lagerbewegungen im gewählten Zeitraum sowie die Punkte, die Kunden besitzen, aber noch nicht eingelöst haben, samt dem höchstmöglichen Abzug. Das sind aktuelle Stände; der Zeitraum ändert sie nicht."
        ]
      },
      {
        "type": "p",
        "text": "Seit Version 3.4 sind sie alle in jedem Tarif geöffnet und bleiben es auch nach Ende der Testphase. Frühere Versionen zeigten sie nur in Pro, mit einem kleinen Schloss bei anderen Tarifen; wenn Sie die Schlösser noch sehen, aktualisieren Sie DingPOS im App Store."
      },
      {
        "type": "p",
        "text": "Lite erfasst weder Bestände noch Treuepunkte, aber „Aktuell“ zeigt weiterhin den Lagerwert und die Punkte, die Ihre Kunden noch nicht eingelöst haben (zum Beispiel aus der Testphase) – oder null."
      },
      {
        "type": "note",
        "text": "Mitarbeiter:innen sehen erweiterte Berichte mit der Berechtigung Dashboard; die Beträge des Lagerwerts erfordern zusätzlich die Berechtigung Einkaufspreis & Rohertrag."
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
      "Artikel ohne Einkaufspreis"
    ],
    "content": [
      {
        "type": "p",
        "text": "Der Einkaufspreis ist ein optionales Feld. Artikel ohne Einkaufspreis bleiben im Rohertrag unberücksichtigt, ihr Umsatz zählt aber weiterhin vollständig. Die Kachel „Artikel ohne Einkaufspreis“ in der Statistik zeigt, wie viele im Zeitraum verkaufte oder zurückgegebene Artikel keinen Einkaufspreis haben, etwa „12 Artikel“. Ein Einkaufspreis von 0 gilt als Einkaufspreis, solche Artikel werden also nicht aufgeführt; hat jeder Artikel einen, steht auf der Kachel „0 Artikel · Einkaufspreise vollständig“."
      },
      {
        "type": "p",
        "text": "Tippen Sie auf die Kachel oder auf „Artikel ansehen“, um „Artikel ohne Einkaufspreis“ zu öffnen, sortiert nach dem Umsatz, der im Rohertrag fehlt. Tippen Sie auf eine Zeile, um den Artikel zu öffnen, tragen Sie über „Bearbeiten“ den Einkaufspreis nach, und die Zeile ist bei Ihrer Rückkehr mit „Einkaufspreis ergänzt“ markiert. Ein Artikel mit Varianten gilt erst dann als „Einkaufspreis ergänzt“, wenn jede ohne Einkaufspreis verkaufte Variante einen hat – ihren eigenen oder den des Artikels, der dann für sie gilt."
      },
      {
        "type": "p",
        "text": "Der Rohertrag ist der Umsatz nach allen Rabatten (Artikel- und Warenkorbrabatte, Aktionen, Punkteeinlösung) und vor Steuern, abzüglich des Einkaufspreises – deshalb heißt das Feld in einem Laden, der Steuer berechnet, „Einkaufspreis ohne Steuer (optional)“: Tragen Sie ein, was Sie vor Steuern bezahlt haben. Die Marge ist der Rohertrag geteilt durch den Umsatz der Artikel mit Einkaufspreis, sodass Artikel ohne Einkaufspreis sie nicht drücken. Eine Rückgabe nimmt an ihrem Tag den Rohertrag zurück, den diese Artikel eingebracht hatten."
      },
      {
        "type": "p",
        "text": "Tippen Sie auf die Kachel „Rohertrag“, um „Vom Umsatz zum Rohertrag“ zu öffnen, das Zeile für Zeile abzieht: Umsatz (inkl. Steuer), Steuer, Umsatz (ohne Steuer), Umsatz ohne Einkaufspreis, Wareneinsatz und schließlich Rohertrag und Marge. Die Zeilen ergeben genau den Wert der Kachel."
      },
      {
        "type": "note",
        "text": "Ein nachgetragener Einkaufspreis wirkt sich nur auf spätere Verkäufe aus; bereits getätigte Verkäufe werden nicht neu berechnet. Diese Berechnung gibt es seit Version 3.1: Frühere Versionen zogen nur manuelle Artikelrabatte ab und zählten enthaltene Steuer als Rohertrag. Nach dem Update zeigen Zeiträume mit Rabatten oder enthaltener Steuer daher einen niedrigeren Rohertrag. Das ist eine Korrektur, kein Datenverlust."
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
    "question": "Wie sehe ich, wie viel ich jeden Monat tatsächlich verdient habe?",
    "keywords": [
      "Gewinn und Verlust",
      "GuV",
      "Reingewinn",
      "Monatsgewinn",
      "Ausgaben",
      "Betriebsergebnis",
      "Gewinn- und Verlustrechnung"
    ],
    "content": [
      {
        "type": "p",
        "text": "Öffnen Sie GuV, in der Seitenleiste unter Statistik. Die Liste zeigt jeden Monat vom neuesten zum ältesten mit seinem Reingewinn: Der laufende Monat ist mit „Laufend“ markiert, und die Kopfzeile jedes Jahres addiert den Reingewinn seiner abgeschlossenen Monate."
      },
      {
        "type": "p",
        "text": "Tippen Sie auf einen Monat, um zu sehen, wie sich sein Reingewinn zusammensetzt:"
      },
      {
        "type": "list",
        "items": [
          "Umsatz (ohne Steuer): der Umsatz nach allen Rabatten und vor Steuern, gezählt an dem Tag, an dem die Ware übergeben wurde.",
          "Wareneinsatz: die Kosten der verkauften Ware, aus den Einkaufspreisen Ihrer Artikel.",
          "Bestandsverlust: die Kosten dessen, was „Bestand korrigieren“ als abgelaufen, beschädigt, verschenkt und Ähnliches abgebucht hat, plus entsorgte Rückgaben. Er kommt nach dem Rohertrag – siehe „Wie erfasse ich Ware, die abgelaufen, beschädigt oder als Probe abgegeben wurde?“ Der Monat hat außerdem einen Abschnitt „Bestandsverlust“, der ihn nach Grund aufsummiert.",
          "Bearbeitungsgebühren (geschätzt): die Gebühren, geschätzt aus den Sätzen Ihrer Zahlungsarten.",
          "Verfallene Anzahlungen: Anzahlungen, die Sie behalten haben, als eine Vorbestellung storniert wurde.",
          "Barrundung: was das Runden von Bargeld auf die vorhandenen Münzen gegenüber den Bestellsummen zu viel oder zu wenig eingenommen hat.",
          "Feste Ausgaben und Einmalige Ausgaben: was Sie für diesen Monat erfasst haben – siehe „Wie erfasse ich Miete, Löhne und andere Ausgaben?“"
        ]
      },
      {
        "type": "p",
        "text": "Darunter folgen bis zu drei Diagramme: der Reingewinn Monat für Monat, der Anteil jeder festen Ausgabe und der Verlauf der festen Ausgaben. Die beiden Verlaufsdiagramme umfassen höchstens die 12 Monate bis zu dem Monat, den Sie geöffnet haben, und erscheinen erst, wenn es mindestens zwei Monate zum Vergleichen gibt, gezählt ab dem Monat Ihres ersten Verkaufs oder Ihrer ersten Ausgabe. Das Anteilsdiagramm braucht in diesem Monat eine feste Ausgabe; solange es keine gibt, steht in diesem Bereich stattdessen „Feste Ausgabe hinzufügen“."
      },
      {
        "type": "p",
        "text": "Statistik und GuV verweisen aufeinander. Ist der Zeitraum in der Statistik dieser Monat oder genau ein ganzer Monat, enthält die zweite Kachelreihe zusätzlich eine Kachel „Reingewinn“ (solange der Monat läuft, markiert mit „Laufend · die Ausgaben des vollen Monats werden abgezogen“); tippen Sie darauf, sehen Sie die Aufschlüsselung dieses Monats vom Rohertrag bis zum Reingewinn. Bei jedem anderen Zeitraum tippen Sie in der letzten Zeile von „Vom Umsatz zum Rohertrag“ auf „Monatliche GuV ansehen“. Umgekehrt öffnet „Bericht für Oktober ansehen“ unter dem Titel eines Monats in der GuV die Statistik für diesen Monat."
      },
      {
        "type": "note",
        "text": "Der Reingewinn ist das Betriebsergebnis vor Ertragsteuern, berechnet aus dem, was DingPOS erfasst hat – keine Steuererklärung. Wurden Artikel ohne Einkaufspreis verkauft, zeigt der Monat trotzdem einen Reingewinn, markiert mit „Nicht enthalten: Einkaufspreis von N Artikel“; tippen Sie darauf, um zu sehen, welche. Die GuV gibt es in jedem Tarif. Bei Konten für Mitarbeiter:innen erfordert das Öffnen die Berechtigung „GuV & Ausgaben“, für die Manager:innen und Mitarbeiter:innen standardmäßig eine Freigabe brauchen, weil sie Einkaufspreise und Löhne zeigt."
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
      "Betriebskosten",
      "Abschreibung",
      "einmalige Ausgabe"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tippen Sie in der GuV auf „Ausgabe hinzufügen“ und wählen Sie eine feste oder eine einmalige Ausgabe. Eine Ausgabe wird in dem Monat berücksichtigt, zu dem sie gehört, nicht in dem Monat, in dem Sie sie bezahlt haben – und der Reingewinn jedes Monats richtet sich danach."
      },
      {
        "type": "p",
        "text": "Eine feste Ausgabe zahlen Sie jeden Monat, etwa Miete, Nebenkosten oder Löhne und Gehälter:"
      },
      {
        "type": "list",
        "items": [
          "Geben Sie den Namen, den monatlichen Betrag und den Monat ein, ab dem sie gilt. Wählen Sie einen früheren Monat, um rückwirkend zu erfassen.",
          "Ändert sich der Betrag, tippen Sie auf „Betrag ändern“, wählen den Monat und dann „Ab diesem Monat“ (zum Beispiel bei einer Mieterhöhung) oder „Nur dieser Monat“ (zum Beispiel die Stromrechnung dieses Monats). Jede Änderung steht in einer Liste; öffnen Sie eine, um sie zu bearbeiten oder zu entfernen.",
          "Zahlen Sie sie nicht mehr, legen Sie „Letzter berücksichtigter Monat“ fest: Dieser Monat und die davor zählen weiterhin."
        ]
      },
      {
        "type": "p",
        "text": "Eine einmalige Ausgabe wird nur einmal bezahlt:"
      },
      {
        "type": "list",
        "items": [
          "Für einen Ladenausbau, für Ausstattung oder für eine im Voraus bezahlte Versicherung schalten Sie „Auf mehrere Monate verteilen“ ein und wählen 2 bis 120 Monate sowie den ersten berücksichtigten Monat. Das Formular zeigt vorab, welcher Betrag pro Monat zählt und welche Monate er abdeckt.",
          "Auch ohne Verteilung können Sie den berücksichtigten Monat wählen: Eine Rechnung für Oktober, die erst im November eintrifft, kann im Oktober zählen, wobei das tatsächliche Datum erhalten bleibt.",
          "Endet eine Verteilung vorzeitig (etwa weil eine Versicherung gekündigt wurde), nutzen Sie „Verteilung vorzeitig beenden“: Was übrig ist, wird in dem Monat berücksichtigt, den Sie wählen."
        ]
      },
      {
        "type": "note",
        "text": "Geben Sie ein, was der Laden tatsächlich trägt, ohne Steuern, die Sie zurückfordern können. Ware, die Sie verkaufen, und das Material, aus dem Sie sie herstellen, laufen stattdessen über den Einkauf, weil sie beim Verkauf im Wareneinsatz berücksichtigt werden. Verbrauchsmaterial mit Bestandsführung erfassen Sie beim Verbrauch mit „Bestand korrigieren“ und dem Grund „Ladenbedarf“, nicht als Ausgabe. Kautionen, Darlehenstilgungen und Entnahmen der Inhaber:in sind keine Ausgaben. Änderungen werden gemeinsam gesichert, wenn Sie auf ✓ tippen. Betrifft eine Änderung einen abgeschlossenen Monat, erfahren Sie vorher, für welche Monate sich der Reingewinn ändert."
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
        "text": "Öffnen Sie Einstellungen → Treueprogramm und legen Sie zwei Regeln fest: Kunden erhalten Y Punkte pro X Umsatz, und N Punkte lassen sich gegen M Rabatt einlösen (optional mit einer Einlösegrenze pro Bestellung). Neuen Mitgliedern können Sie außerdem automatisch einen Willkommensbonus gutschreiben."
      },
      {
        "type": "p",
        "text": "Ordnen Sie dem Verkauf das Mitglied zu, im Warenkorb oder auf dem Bezahlbildschirm, dann werden die Punkte automatisch gesammelt; zum Einlösen geben Sie die einzusetzenden Punkte ein. Wird eine Bestellung annulliert, werden die dafür gesammelten Punkte wieder abgezogen und eingelöste Punkte zurückgegeben."
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
          "Ansichten (Einkaufspreis & Rohertrag, Dashboard, GuV & Ausgaben, Einstellungen, Backup & Wiederherstellung): Eine Freigabe schaltet frei, bis die Bediener:in wechselt oder die App in den Hintergrund geht.",
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
        "text": "Alle drei Tarife enthalten die komplette Kasse, Artikel, Bestellungen (mit Annullierungen, Rückgaben und Umtausch), Berichte (erweiterte Berichte und die monatliche GuV seit Version 3.4 inklusive) und Cloud-Backup. Sie unterscheiden sich in den Werkzeugen für den Ladenalltag:"
      },
      {
        "type": "list",
        "items": [
          "Lite: für Einzelpersonen am Marktstand, die Kasse und Artikel brauchen.",
          "Standard: zusätzlich Aktionen, Punkte und Kundenstufen, Bestandsverwaltung, Einkauf, Verkauf auf Rechnung, Vorbestellungen und Gebührensätze für Zahlungsarten.",
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
        "text": "Geschenke und Zusatzartikel verändern den Warenkorb nie von selbst. Sind die Bedingungen erfüllt, erscheint auf dem Kassenbildschirm ein Vorschlagsbanner, und der Warenkorb ändert sich erst, wenn die Kassierer:in auf „Geschenk wählen“ oder „Zusatzartikel wählen“ tippt. Das ist Absicht, denn Geschenke betreffen den physischen Bestand: Jemand muss prüfen, ob der Artikel vorrätig ist und ob der Kunde ihn möchte."
      },
      {
        "type": "list",
        "items": [
          "Nach „Ablehnen“ erscheint derselbe Vorschlag für diesen Warenkorb nicht erneut; bei einem neuen oder geleerten Warenkorb wird wieder gefragt.",
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
        "text": "Seit Version 3.4 zeigt die GuV den Reingewinn jedes Monats nach Wareneinsatz, Gebühren und Ausgaben – siehe „Wie sehe ich, wie viel ich jeden Monat tatsächlich verdient habe?“ Einen Monatsabschluss-Bericht zum Exportieren oder Drucken gibt es noch nicht, aber alles, was Sie für den Abgleich brauchen, steckt bereits in der App:"
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
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
