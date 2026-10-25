// DingPOS guides — de pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of en or zh-Hant: each language lists only the guides written
// for the markets that read it, and a language without a pack has no guides
// section. This pack is not touched by `npm run l10n`. Rules:
// docs/specs/seo-aeo.md §獲客文章. Checked by scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("DE")
//   checked  — YYYY-MM-DD the rates and rules were last verified
//   title    — the page h1 and <title>, phrased the way people search
//   summary  — index-card text and the page's meta description (≤ 160 characters)
//   content  — blocks, opening with a paragraph that answers the title directly:
//              { type: "p" | "h2" | "note", text }
//              { type: "list" | "steps", items: [text] }
//              { type: "table", caption?, head: [text], rows: [[text]] }
//              Text may carry [label](/route/) links to a page of this
//              language (router-relative, trailing slash) or [label](https://…).
//   sources  — [{ label, url }] behind the article's figures and rules
//   related  — slugs of other guides in this pack
//
// Claims about DingPOS must match the app's code (AGENTS.md §Product Repos).
// Germany requires every electronic recording system with a cash function to
// be protected by a certified TSE (§ 146a AO) and DingPOS has none, so no
// string here may present DingPOS as a register for recording sales in
// Germany.

export const ui = {
  nav: "Ratgeber",
  title: "Ratgeber für kleine Läden",
  subtitle: "Kartenzahlung, Kosten und Marge: die Rechnungen, auf die es im Ladenalltag ankommt – für Inhaber, die selbst hinter der Theke stehen.",
  meta_description: "Ratgeber für kleine Läden: was Kartenzahlungen kosten und wie viel Marge die Gebühren wegnehmen – mit Formeln, Rechenbeispielen und Quellen.",
  back: "Alle Ratgeber",
  related_title: "Weiterlesen",
  sources_title: "Quellen",
  checked: "Zuletzt geprüft: {{date}}",
  cta_title: "DingPOS: was die App kann und wo ihre Grenzen liegen",
  cta_text: "DingPOS ist eine iPad-App, die Verkäufe erfasst und die Gebühren je Zahlungsart schätzt, ohne Provision und mit 30 Tagen kostenlosem Test. Sie hat keine zertifizierte technische Sicherheitseinrichtung (TSE): In Deutschland ist sie nicht dafür geeignet, Verkäufe zu erfassen, auch nicht neben einer TSE-Kasse. Ob Ihr Land eine zertifizierte Kasse verlangt, klären Sie vor dem Einsatz mit Ihrer Steuerberatung. Die Rechnungen in diesen Ratgebern funktionieren mit den Zahlen jeder Kasse.",
  cta_button: "DingPOS im App Store ansehen",
  markets: { DE: "Deutschland" },
};

export const articles = [
  {
    slug: "payment-processing-fees-germany",
    market: "DE",
    checked: "2026-10-25",
    title: "Kartenzahlung: Gebühren für Händler bei EC- und Kreditkarte – und wie viel Marge sie kosten",
    summary: "girocard bei der Sparkasse z. B. rund 0,25 % plus Cent je Zahlung, SumUp und PayPal POS 1,39 %. Bei 23,80 € Preis und 8 € Marge kosten 1,39 % gut 4 % der Marge.",
    content: [
      { type: "p", text: "Eine Zahlung mit girocard (der „EC-Karte“) kostet Händler über ein Terminal der Sparkasse zum Beispiel rund 0,25 % des Umsatzes plus einige Cent je Zahlung, dazu kommt die Terminalmiete; für Visa und Mastercard gilt, was im Vertrag steht. Ohne Bankvertrag nehmen SumUp und PayPal POS 1,39 % je Kartenzahlung, mit dem Abo Zahlungen Plus von SumUp 0,79 % für inländische Karten, bei PAYONE All Time Flex 0,89 % für die girocard und 1,9 % für Kreditkarten. Die Gebühr wird vom Bruttoumsatz berechnet, geht aber von Ihrer Marge ab: Bei einem Artikel für 23,80 € (20,00 € netto), den Sie für 12,00 € netto einkaufen, kosten 1,39 % rund 0,33 €, also gut 4 % der 8,00 € Marge." },
      { type: "p", text: "Im Folgenden rechnen wir mit denselben Zahlen durch, was jede Zahlungsart kostet, was im Monat zusammenkommt, warum auf dem Konto weniger ankommt als in der Kasse steht und ob Sie die Gebühr an die Kundschaft weitergeben dürfen." },

      { type: "h2", text: "Was kostet eine Kartenzahlung für Händler?" },
      { type: "p", text: "Die Anbieterpreise in der Tabelle stammen von den offiziellen Preisseiten und Preisverzeichnissen, abgerufen im Oktober 2026. Für Kreditkarten über die eigene Bank oder Sparkasse gibt es keine öffentliche Preisliste; der Satz, das sogenannte Disagio, steht in Ihrem Vertrag." },
      {
        type: "table",
        head: ["Zahlungsart", "Gebühr für den Händler", "Gut zu wissen"],
        rows: [
          ["Bargeld", "Keine Transaktionsgebühr", "Kostenlos ist Bargeld trotzdem nicht: Zählen, Wechselgeld und Einzahlen kosten Zeit und Geld. Die Bundesbank kommt einschließlich Arbeitszeit auf durchschnittlich 43 Cent je Barzahlung"],
          ["girocard über ein Terminal der Sparkasse", "Beispiel Kreissparkasse Freudenstadt: 0,20 % Autorisierungsentgelt + 0,05 % Serviceentgelt + 0,045 bis 0,065 € je Zahlung", "Dazu kommen die Terminalmiete (dort 15,30 bis 21,90 € im Monat bei 60 Monaten Laufzeit) und einmalig 49 €; außer dem Autorisierungsentgelt alles zzgl. MwSt. Andere Banken und Sparkassen haben eigene Preise"],
          ["Visa, Mastercard über Bank oder Sparkasse", "Nach Vertrag", "Teurer als die girocard: Laut einer Studie von ibi research (2025) verursachen internationale Debitkarten im stationären Handel im Schnitt Gesamtkosten von 1,24 % des Umsatzes, die girocard 0,60 %. Das Interbankenentgelt ist für Verbraucherkarten auf 0,2 % (Debit) und 0,3 % (Kredit) gedeckelt, den Rest legt Ihr Anbieter fest"],
          ["PAYONE All Time Flex", "0,89 % für girocard und Debitkarten (Maestro, V Pay), 1,9 % für Kreditkarten", "Keine Monatsgebühr, einmalig ab 19 €, Terminal für 24 Monate; fragen Sie nach einer Mindestgebühr je Zahlung, die bei kleinen Bons ins Gewicht fällt"],
          ["SumUp, Standardtarif", "1,39 %", "Gleicher Satz für alle Karten, auch American Express und Premiumkarten; 0 % für Zahlungen mit einer SumUp Karte"],
          ["SumUp Zahlungen Plus", "0,79 % für inländische EC- und Kreditkarten, 1,39 % für Premium-, internationale Karten und American Express", "19 € im Monat oder 199 € im Jahr; laut SumUp lohnt es sich ab etwa 3.500 € Kartenumsatz im Monat"],
          ["PayPal POS (früher Zettle)", "1,39 %", "Gleicher Satz für alle Karten und gängigen mobilen Wallets, American Express inklusive. Die girocard nennt PayPal auf seinen deutschen Seiten nicht"],
          ["Stripe Terminal", "1,4 % + 0,10 € (Karten aus dem EWR)", "2,9 % + 0,10 € für Karten von außerhalb des EWR; mit Tap to Pay 0,10 € mehr je Autorisierung"],
        ],
      },
      { type: "p", text: "Apple Pay und Google Pay laufen über das Terminal wie eine Karte: Belastet wird die im Handy hinterlegte Karte, meist eine Visa oder Mastercard. PayPal POS und Stripe berechnen dafür ihren normalen Kartensatz, es kommt also keine zusätzliche Gebühr dazu. Apple Pay ist laut Bundesbank das meistgenutzte mobile Bezahlverfahren an der Ladenkasse." },
      { type: "note", text: "Umsatzsteuer: Nicht jede Gebühr rund um die Kartenzahlung ist umsatzsteuerfrei. Steuerfrei sind nach § 4 Nr. 8 Buchst. d UStG Umsätze im Zahlungsverkehr, rein technische Abwicklung dagegen nicht. So ist bei der Sparkasse das girocard-Autorisierungsentgelt mehrwertsteuerfrei, während Serviceentgelt, Transaktionspreis und Terminalmiete zzgl. 19 % MwSt. berechnet werden. Was bei Ihrem Anbieter gilt, steht auf seiner Rechnung. Mit Regelbesteuerung ziehen Sie die ausgewiesene Umsatzsteuer als Vorsteuer ab. Als Kleinunternehmer (Umsatz im Vorjahr bis 25.000 €, im laufenden Jahr bis 100.000 €) können Sie das nicht: Für Sie ist die Umsatzsteuer auf die Gebühren Teil der Kosten." },

      { type: "h2", text: "Die Gebühr geht von der Marge ab, nicht vom Umsatz" },
      { type: "p", text: "Die Gebühr ist ein Prozentsatz dessen, was der Kunde zahlt, also des Bruttobetrags mit Mehrwertsteuer. Verdient haben Sie aber nur die Marge: den Nettoverkaufspreis minus den Netto-Einkaufspreis. Und genau von dieser Marge geht die Gebühr ab." },
      { type: "p", text: "Nehmen wir einen Artikel für 23,80 €, also 20,00 € netto bei 19 % Mehrwertsteuer, den Sie für 12,00 € netto einkaufen. Die Marge beträgt 8,00 €:" },
      {
        type: "table",
        caption: "In Euro, Gebühren auf den Cent gerundet, der Anteil an der Marge aus der ungerundeten Gebühr. „Verbleibende Marge“ ist vor Miete, Personal und anderen Kosten gerechnet, also kein Gewinn.",
        head: ["", "Bargeld", "SumUp Zahlungen Plus 0,79 %", "PAYONE girocard 0,89 %", "SumUp oder PayPal POS 1,39 %", "PAYONE Kreditkarte 1,9 %"],
        rows: [
          ["Kunde zahlt", "23,80", "23,80", "23,80", "23,80", "23,80"],
          ["Gebühr", "0", "0,19", "0,21", "0,33", "0,45"],
          ["Bei Ihnen kommt an", "23,80", "23,61", "23,59", "23,47", "23,35"],
          ["Davon Umsatzsteuer ans Finanzamt", "3,80", "3,80", "3,80", "3,80", "3,80"],
          ["Verbleibende Marge", "8,00", "7,81", "7,79", "7,67", "7,55"],
          ["Anteil der Gebühr an der Marge", "0 %", "2,4 %", "2,6 %", "4,1 %", "5,7 %"],
        ],
      },
      { type: "p", text: "Allgemein gilt: Anteil der Gebühr an der Marge = Gebührensatz × (Bruttopreis ÷ Nettopreis) ÷ Handelsspanne. Die Handelsspanne ist die Marge geteilt durch den Nettoverkaufspreis, nicht zu verwechseln mit dem Kalkulationsaufschlag, der sich auf den Einkaufspreis bezieht. Im Beispiel beträgt die Handelsspanne 8 ÷ 20 = 40 % und das Verhältnis brutto zu netto 1,19: 1,39 % × 1,19 ÷ 40 % = 4,1 %. Bei Waren mit 7 % Mehrwertsteuer setzen Sie 1,07 statt 1,19 ein; als Kleinunternehmer ohne Umsatzsteuer ist der Faktor 1." },
      {
        type: "table",
        caption: "Anteil der Gebühr an der Marge bei 19 % Mehrwertsteuer, auf eine Nachkommastelle gerundet. Bei 7 % Mehrwertsteuer mit 1,07 ÷ 1,19 malnehmen, als Kleinunternehmer durch 1,19 teilen.",
        head: ["Handelsspanne", "Gebühr 0,79 %", "Gebühr 0,89 %", "Gebühr 1,39 %", "Gebühr 1,9 %"],
        rows: [
          ["20 %", "4,7 %", "5,3 %", "8,3 %", "11,3 %"],
          ["30 %", "3,1 %", "3,5 %", "5,5 %", "7,5 %"],
          ["40 %", "2,4 %", "2,6 %", "4,1 %", "5,7 %"],
          ["50 %", "1,9 %", "2,1 %", "3,3 %", "4,5 %"],
          ["60 %", "1,6 %", "1,8 %", "2,8 %", "3,8 %"],
        ],
      },
      { type: "p", text: "Bei 20 % Handelsspanne nimmt eine Gebühr von 1,39 % schon gut 8 % der Marge, bei 60 % weniger als 3 %. Feste Centbeträge treffen vor allem kleine Bons: Die 0,10 € von Stripe sind bei 23,80 € nur 0,4 % des Betrags, bei einem Kaffee für 5 € aber 2 %." },

      { type: "h2", text: "Wie hoch sind Ihre Gebühren im Monat? So rechnen Sie mit Ihrem Zahlungsmix" },
      { type: "p", text: "Die Gebühren eines Monats ergeben sich nicht aus einem einzigen Satz auf den ganzen Umsatz: Jede Zahlungsart hat ihren eigenen Satz, und Bargeld kostet keine Transaktionsgebühr. Nehmen wir einen Laden mit SumUp Zahlungen Plus und 12.000 € Umsatz im Monat:" },
      {
        type: "table",
        caption: "In Euro, mit den Preisen von SumUp Zahlungen Plus, Stand Oktober 2026.",
        head: ["Zahlungsart", "Umsatz im Monat", "Satz", "Gebühren"],
        rows: [
          ["Bargeld", "3.500", "0", "0"],
          ["Inländische EC- und Kreditkarten", "7.000", "0,79 %", "55,30"],
          ["Premium-, internationale Karten und American Express", "1.500", "1,39 %", "20,85"],
          ["Abo Zahlungen Plus", "", "19 € im Monat", "19,00"],
          ["Summe", "12.000", "", "95,15"],
        ],
      },
      { type: "p", text: "Dieser Laden zahlt rund 95 € Gebühren im Monat, gut 1.140 € im Jahr. Im Standardtarif ohne Abo würden dieselben 8.500 € Kartenumsatz 118,15 € im Monat kosten (1,39 %). Mit einem Terminal Ihrer Bank rechnen Sie genauso mit den Sätzen aus Ihrem Vertrag und zählen die Terminalmiete dazu. Setzen Sie Ihre eigenen Umsätze ein, dann sehen Sie, was Kartenzahlung Ihren Laden wirklich kostet." },

      { type: "h2", text: "Warum auf dem Konto weniger ankommt, als in der Kasse steht" },
      { type: "p", text: "Ihre Kasse erfasst, was der Kunde bezahlt hat. Auf Ihr Konto kommt dieser Betrag abzüglich der Gebühren: Je nach Anbieter werden sie direkt von jeder Auszahlung abgezogen oder separat abgebucht, etwa einmal im Monat. Der Unterschied zwischen Kasse und Kontoeingang ist die Gebühr." },
      {
        type: "list",
        items: [
          "Buchen Sie die Umsätze in voller Höhe und die Gebühren als eigene Betriebsausgabe, statt nur den Auszahlungsbetrag als Umsatz zu erfassen. So bleibt Ihr Umsatz vollständig und die Kosten bleiben sichtbar. Wie Sie das genau buchen, klären Sie am besten mit Ihrer Steuerberatung.",
          "Das Geld ist nicht sofort da. SumUp zahlt bis 7 Uhr am nächsten Tag auf das SumUp Geschäftskonto aus, auch am Wochenende und an Feiertagen; auf ein anderes Bankkonto dauert es laut SumUp ein bis drei Werktage. PayPal POS schreibt Kartenzahlungen in der Regel sofort, spätestens innerhalb eines Werktags dem PayPal-Geschäftskonto gut. Bei Bank und Sparkasse steht die Frist im Vertrag. Am Monatsende ist also ein Teil der Kartenumsätze noch unterwegs.",
          "Wenn Sie einem Kunden Geld zurückerstatten, bekommen Sie die Gebühr nicht unbedingt zurück: Stripe erstattet die Gebühren der ursprünglichen Zahlung nicht. Bei anderen Anbietern steht es in den Bedingungen; fragen Sie vor dem Vertragsabschluss nach.",
        ],
      },

      { type: "h2", text: "Dürfen Händler einen Aufschlag für Kartenzahlung verlangen?" },
      { type: "p", text: "Für die üblichen Karten Ihrer Kundschaft nicht. § 270a BGB verbietet Entgelte für Zahlungen mit SEPA-Überweisung, SEPA-Lastschrift und Zahlungskarten. Bei Karten gilt das Verbot für Zahlungen von Verbrauchern mit Karten, deren Interbankenentgelt die EU-Verordnung 2015/751 regelt: girocard sowie Visa- und Mastercard-Debit- und Kreditkarten von Privatkunden. Ein Zuschlag wie „+0,50 € bei Kartenzahlung“ ist bei diesen Karten unwirksam." },
      { type: "p", text: "Nicht unter das Verbot fallen Firmenkarten und in der Regel Karten aus Drei-Parteien-Systemen wie American Express; gibt ein solches System seine Karten über andere Banken oder als Co-Branding-Karte aus, kann die Verordnung trotzdem gelten. Auch dort darf ein Aufschlag gegenüber Verbrauchern aber nur verlangt werden, wenn es eine gängige und zumutbare Zahlungsmöglichkeit ohne Aufpreis gibt, und er darf nicht höher sein als die Kosten, die Ihnen die Karte verursacht (§ 312a Abs. 4 BGB)." },
      { type: "p", text: "Erlaubt ist dagegen ein Rabatt für Barzahlung; laut IHK ist ein Barzahlungsnachlass grundsätzlich zulässig. Am einfachsten ist es, die Gebühr in die Preise einzurechnen: Zahlt die Hälfte Ihrer Kundschaft mit Karte zu 1,39 %, deckt bei 19 % Mehrwertsteuer eine Preiserhöhung von etwa 0,8 % die Gebühren, denn die Gebühr fällt auf den Bruttopreis an, die Preiserhöhung bringt Ihnen aber nur netto etwas." },

      { type: "h2", text: "Lohnt sich Kartenzahlung? Die Break-even-Rechnung" },
      { type: "p", text: "Kartenzahlung kostet die Gebühr und bringt die Verkäufe, die Ihnen ohne Karte entgangen wären. Der Break-even folgt aus derselben Formel: Zusatzumsatz, den Sie brauchen, als Anteil Ihres Kartenumsatzes = Gebührensatz × (Bruttopreis ÷ Nettopreis) ÷ Handelsspanne." },
      { type: "p", text: "Bei 40 % Handelsspanne, 19 % Mehrwertsteuer und 1,39 % Gebühr kosten 1.000 € Kartenumsatz 13,90 €. Wären davon 41,35 € (4,1 %) ohne Kartenzahlung nicht zustande gekommen, bezahlt die Marge dieser Verkäufe die Gebühren bereits." },
      { type: "p", text: "Hätte der Kunde ohnehin bar gezahlt, ist die Gebühr zusätzlicher Aufwand, auch wenn Bargeld ebenfalls Arbeitszeit kostet (siehe oben). Laut Bundesbank wurden 2025 allerdings erstmals mehr Einkäufe unbar bezahlt als bar: 55 % der erfassten Zahlungen, nur noch 45 % mit Bargeld. Gemessen am Betrag lag die Debitkarte mit 28 % vorn, Bargeld kam auf 23 %. Etwa ein Viertel der Befragten konnte im Vormonat mindestens einmal nicht wie gewünscht bargeldlos zahlen. Wer ohne Bargeld im Laden steht, kommt nicht unbedingt mit Bargeld wieder." },

      { type: "h2", text: "So finden Sie Ihren tatsächlichen Gebührensatz" },
      { type: "p", text: "Die genaueste Zahl steht auf Ihrer Abrechnung: Teilen Sie die Gebühren eines Monats durch den Kartenumsatz desselben Monats, dann haben Sie Ihren tatsächlichen Satz. Notieren Sie ihn für jede Zahlungsart, dann sehen Sie, welche Sie am meisten kostet." },
      { type: "p", text: "Ihr Anbieter muss Ihnen die Gebühren dafür aufschlüsseln: Nach der EU-Verordnung 2015/751 weist er für jede Kartenzahlung den Betrag und die Entgelte aus, Händlerentgelt und Interbankenentgelt getrennt, und rechnet die Händlerentgelte je Kartenart und -marke einzeln ab, solange Sie nicht schriftlich eine Bündelung verlangen. Anbieter mit einem Einheitssatz wie PayPal POS lassen sich diese Bündelung in ihren Bedingungen meist gleich mit bestätigen; dort steht dann nur die Gesamtgebühr. Zählen Sie für den Jahresvergleich auch Terminalmiete, Abo und feste Monatsgebühren dazu und teilen Sie alles durch den Kartenumsatz des Jahres. Das ist Ihr Satz inklusive aller Kosten, und mit ihm vergleichen Sie Angebote." },

      { type: "h2", text: "TSE-Pflicht: Was DingPOS in Deutschland kann und was nicht" },
      { type: "p", text: "In Deutschland gibt es heute keine Pflicht zur elektronischen Kasse; eine offene Ladenkasse ist erlaubt. Wer Verkäufe aber mit einem elektronischen Aufzeichnungssystem erfasst, auch mit einer Kassen-App auf dem Tablet, muss es durch eine zertifizierte technische Sicherheitseinrichtung (TSE) schützen, Belege ausgeben und es dem Finanzamt melden (§ 146a AO). Eine Umsatzgrenze kennt diese Pflicht nicht. Sie gilt für jedes eingesetzte System, also auch für eine zweite App neben Ihrer TSE-Kasse, und für jedes System, das Barzahlungen erfassen kann: Nach Auffassung der Finanzverwaltung kommt es darauf an, ob die Software Barzahlungen ermöglicht, nicht darauf, ob Sie tatsächlich Bargeld annehmen. Nur Karten anzunehmen oder die Zahlungsart „Bargeld“ zu löschen, reicht also nicht. [DingPOS](/) hat keine TSE. Erfassen Sie Ihre Verkäufe in Deutschland deshalb nicht in DingPOS, auch nicht zusätzlich zu Ihrer Kasse. Rechnen Sie stattdessen mit den Formeln aus diesem Artikel, mit den Zahlen Ihrer TSE-Kasse oder Ihres Kassenberichts und den Abrechnungen Ihres Zahlungsanbieters." },
      { type: "p", text: "Die Regeln werden voraussichtlich strenger: Nach einem Gesetzentwurf, den das Bundeskabinett am 23. September 2026 beschlossen hat, sollen ab 2028 Betriebe ab 100.000 € Gesamtumsatz im Jahr eine elektronische Kasse verwenden; ausgenommen bleiben Betriebe mit weniger als etwa 12.000 € Barumsatz im Jahr. Zugleich soll der digitale Beleg den Papierbon als Regelfall ablösen. Der Entwurf ist noch kein geltendes Recht, und die genauen Grenzen können sich im Gesetzgebungsverfahren noch ändern. Ob Ihr Betrieb betroffen ist, klären Sie mit Ihrer Steuerberatung." },
      { type: "p", text: "Zur Einordnung, was die Gebührenfunktion von DingPOS tut: Unter Einstellungen → Zahlungsarten lässt sich für jede Zahlungsart eine Bearbeitungsgebühr hinterlegen, als Prozentsatz, als fester Betrag pro Zahlung oder beides. Die Karte „Zahlungsarten“ in der Statistik zeigt daraus für jede Zahlungsart die voraussichtliche Gebühr und den Nettoeingang. Die Funktion rechnet mit den Verkäufen, die in DingPOS gespeichert sind, und ist kein eigenständiger Gebührenrechner für die Zahlen einer anderen Kasse. DingPOS wickelt keine Zahlungen ab und liest keine Abrechnungen Ihres Anbieters: Die Beträge sind Schätzungen auf Basis der eingetragenen Sätze, maßgeblich ist die Abrechnung. Der Nettoeingang ist ein Zahlungseingang, nicht Ihre Marge; der Einkaufspreis ist darin nicht abgezogen. Die Einzelheiten stehen unter [Kann DingPOS Gebühren für Karten- und mobile Zahlungen erfassen?](/support/payment-fees/). Die Funktion gehört zum Tarif Standard und höher (siehe [Preise](/pricing/)); DingPOS lässt sich 30 Tage kostenlos testen. Eine Eignung als Kasse in Deutschland folgt daraus nicht." },
    ],
    sources: [
      { label: "Kreissparkasse Freudenstadt: Kartenterminals (girocard-Autorisierungsentgelt 0,20 % mehrwertsteuerfrei, Serviceentgelt 0,05 %, 0,045–0,065 € je Transaktion, Miete 15,30–21,90 € im Monat, zzgl. MwSt.)", url: "https://www.ksk-fds.de/fi/home/produkte/bezahlverfahren/kassieren-im-geschaeft/kartenterminals.html" },
      { label: "Sparkasse Leipzig: Preisverzeichnis Terminalgeschäft, Stand 1. April 2024 (Autorisierungsentgelt girocard mehrwertsteuerfrei, Serviceentgelt und Transaktionspreis mit MwSt.)", url: "https://www.sparkasse-leipzig.de/content/dam/myif/sksk-leipzig/work/dokumente/pdf/preise-leistungen/terminalgeschaeft-preis-und-leistungsverzeichnis.pdf" },
      { label: "PAYONE: All Time Flex (0,89 % girocard und Debitkarten, 1,9 % Kreditkarten, einmalig ab 19 €, 24 Monate)", url: "https://www.payone.com/DE-de/bezahlloesungen/kartenlesegeraete/all-time-flex" },
      { label: "SumUp: Preise (1,39 % Standardtarif; Zahlungen Plus 19 €/Monat oder 199 €/Jahr, 0,79 % inländische EC- und Kreditkarten; Auszahlung bis 7 Uhr am Folgetag)", url: "https://www.sumup.com/de-de/preise/" },
      { label: "SumUp Hilfe: Auszahlungen (Folgetag aufs SumUp Geschäftskonto, Bankkonto in 1 bis 2 bzw. 2 bis 3 Werktagen)", url: "https://help.sumup.com/de-DE/de-DE/articles/3LmA9XV15VHbcJvl6YVpyX-bezahlt-werden" },
      { label: "PayPal POS (Zettle): Kosten und Gebühren (1,39 % für alle Karten und mobilen Wallets, American Express inklusive; girocard nicht genannt)", url: "https://www.zettle.com/de/kosten" },
      { label: "PayPal POS: Nutzungsbedingungen (Gutschrift aufs PayPal-Geschäftskonto sofort, spätestens innerhalb eines Werktags; gemischte Entgelte über alle Kartenarten)", url: "https://www.zettle.com/de/rechtshinweise/paypal-point-of-sale" },
      { label: "Stripe: Preise (Terminal 1,4 % + 0,10 € EWR-Karten, 2,9 % + 0,10 € Nicht-EWR-Karten, Tap to Pay +0,10 €)", url: "https://stripe.com/de/pricing" },
      { label: "Stripe: Rückerstattungen (Gebühren der ursprünglichen Zahlung werden nicht erstattet)", url: "https://docs.stripe.com/refunds?locale=de-DE" },
      { label: "Deutsche Bundesbank (28. November 2025): Kosten von Zahlungsmitteln im Einzelhandel (Barzahlung durchschnittlich 43 Cent je Transaktion)", url: "https://www.bundesbank.de/de/publikationen/berichte/studien/kosten-von-zahlungsmitteln-im-einzelhandel-972294" },
      { label: "kartensicherheit.de (Juni 2025): ibi-Studie „Gesamtkosten von Zahlungsverfahren 2025“ (girocard 0,60 %, internationale Debitkarten 1,24 % des Umsatzes)", url: "https://www.kartensicherheit.de/oeffentlich/newsletter/alle-artikel/artikel-2025/juni-2025/ibi-studie-zahlverfahren-im-kostenvergleich.html" },
      { label: "Deutsche Bundesbank (17. Juni 2026): Zahlungsverhalten in Deutschland 2025 (55 % unbar, 45 % bar; Debitkarte 28 % des Umsatzes; Apple Pay meistgenutzt)", url: "https://www.bundesbank.de/de/presse/pressemitteilungen/zahlungsverhalten-in-deutschland-2025-964736" },
      { label: "EUR-Lex: Verordnung (EU) 2015/751 über Interbankenentgelte (Obergrenzen 0,2 % und 0,3 %, Ausnahmen für Firmenkarten und Drei-Parteien-Systeme, Art. 9 und 12 Aufschlüsselung der Entgelte)", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32015R0751" },
      { label: "§ 270a BGB: Vereinbarungen über Entgelte für die Nutzung bargeldloser Zahlungsmittel", url: "https://www.gesetze-im-internet.de/bgb/__270a.html" },
      { label: "§ 312a BGB, Abs. 4: Entgelt für ein Zahlungsmittel nur mit unentgeltlicher Alternative und höchstens in Höhe der Kosten", url: "https://www.gesetze-im-internet.de/bgb/__312a.html" },
      { label: "IHK Frankfurt am Main: Regelungen und Gesetze im Einzelhandel (Barzahlungsnachlass grundsätzlich zulässig)", url: "https://www.frankfurt-main.ihk.de/branchenthemen/einzelhandel-und-handelsvertreter/regelungen-und-gesetze" },
      { label: "§ 4 UStG, Nr. 8 Buchst. d: Steuerbefreiung für Umsätze im Zahlungs- und Überweisungsverkehr", url: "https://www.gesetze-im-internet.de/ustg_1980/__4.html" },
      { label: "UStAE 4.8.7 (steuerschroeder.de): nur Leistungen, die Gelder weiterleiten, sind steuerfrei, nicht die rein technische Abwicklung", url: "https://www.steuerschroeder.de/steuergesetze/ustae/4.8.7" },
      { label: "§ 19 UStG: Kleinunternehmer (25.000 € im Vorjahr, 100.000 € im laufenden Jahr)", url: "https://www.gesetze-im-internet.de/ustg_1980/__19.html" },
      { label: "IHK Berlin: Kleinunternehmerregelung (kein Vorsteuerabzug)", url: "https://www.ihk.de/berlin/Service-und-Beratung/recht_und_steuern/Steuern_und_Finanzen/kleinunternehmerregelung/" },
      { label: "§ 146a AO: Ordnungsvorschrift für die Buchführung und für Aufzeichnungen mittels elektronischer Aufzeichnungssysteme (TSE, Belegausgabepflicht, Mitteilungspflicht)", url: "https://www.gesetze-im-internet.de/ao_1977/__146a.html" },
      { label: "§ 1 KassenSichV: elektronische Aufzeichnungssysteme", url: "https://www.gesetze-im-internet.de/kassensichv/__1.html" },
      { label: "ZDH: Praxishilfe Kassenführung (5. April 2024), mit dem Wortlaut von AEAO zu § 146a Nr. 1.2 (Kassenfunktion, Tablet-Kassen, TSE für jedes System) und der BMF-FAQ (Barzahlungsfunktion, sobald die Software sie ermöglicht; auf die tatsächliche Verwendung kommt es nicht an)", url: "https://www.hwk-reutlingen.de/wp-content/uploads/zdh_praxishilfe-kassenfuehrung_2024.pdf" },
      { label: "IHK Köln: Anforderungen an die Kassenführung (keine allgemeine Kassenpflicht, offene Ladenkasse, TSE, Mitteilung seit 2025, geplante Kassenpflicht ab 2028)", url: "https://www.ihk.de/koeln/hauptnavigation/recht-steuern/anforderungen-an-die-kassenfuehrung-5049844" },
      { label: "Bundesregierung: Digitale Belege ersetzen Papierbons (Kabinettsentwurf: Kassenpflicht ab 2028 ab 100.000 € Gesamtumsatz, Ausnahme unter 12.000 € Barumsatz)", url: "https://www.bundesregierung.de/breg-de/bundesregierung/bundeskanzleramt/abschaffung-bonpflicht-2453568" },
    ],
    related: [],
  },
];
