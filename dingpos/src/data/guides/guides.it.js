// DingPOS guides — it pack. Guides are acquisition articles written for one
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
//   market   — the market the facts hold for, a key of ui.markets ("IT")
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
// Italian retail must certify every sale with a registratore telematico, the
// Agenzia delle Entrate's web procedure or approved software (D.Lgs. 127/2015
// art. 2), and DingPOS is none of them, so no string here may present DingPOS
// as a register that replaces them or as a fiscally compliant till.

export const ui = {
  nav: "Guide",
  title: "Guide per piccoli negozi",
  subtitle: "Incassi, costi e margini: i conti che servono davvero, spiegati per chi manda avanti il negozio in prima persona.",
  meta_description: "Guide per commercianti e piccoli negozi: quanto costano i pagamenti con carta e quanta parte del margine si prendono, con formule, esempi e fonti.",
  back: "Tutte le guide",
  related_title: "Leggi anche",
  sources_title: "Fonti",
  checked: "Ultima verifica: {{date}}",
  cta_title: "Stima le commissioni di ogni metodo di pagamento sull'iPad",
  cta_text: "DingPOS è un'app per iPad che tiene i conti del negozio, senza commissioni sulle vendite e con 30 giorni di prova gratuita. Non è un registratore telematico e non emette il documento commerciale: non sostituisce l'RT né la procedura dell'Agenzia delle Entrate.",
  cta_button: "Scarica dall'App Store",
  markets: { IT: "Italia" },
};

export const articles = [
  {
    slug: "payment-processing-fees-italy",
    market: "IT",
    checked: "2026-10-25",
    title: "Commissioni POS per commercianti: quanto costano e quanto margine ti mangiano",
    summary: "Commissioni POS: SumUp 1,95% (0,95% con Pagamenti Plus), Zettle 1,79%, Nexi Mobile POS 1,89%. Su un articolo da 30,50 €, l'1,95% prende il 5,9% del margine.",
    content: [
      { type: "p", text: "Senza passare dalla banca, SumUp trattiene l'1,95% su ogni pagamento con carta (0,95% sulle carte personali nazionali con l'abbonamento Pagamenti Plus da 19 € al mese), Zettle l'1,79%, Nexi Mobile POS l'1,89% e Satispay lo 0,95% sui pagamenti da 10 € in su; con il POS della banca la commissione è quella scritta nel tuo contratto. La commissione si calcola sull'incasso IVA inclusa, ma esce dal tuo margine: su un articolo venduto a 30,50 € (25 € più IVA al 22%) e comprato a 15 €, l'1,95% costa 0,59 €, cioè il 5,9% dei 10 € di margine." },
      { type: "p", text: "Qui sotto, con gli stessi numeri, trovi quanto costa ogni metodo di pagamento, quanto pesa in un mese, perché sul conto arriva meno di quanto segna la cassa e perché non puoi girare la commissione al cliente." },

      { type: "h2", text: "Quanto costa il POS a un commerciante?" },
      { type: "p", text: "Le tariffe qui sotto sono quelle pubblicate dagli operatori a ottobre 2026. Con una banca, o con un contratto Nexi su misura, la commissione si tratta e la trovi solo nel contratto: per quella esistono solo ordini di grandezza." },
      {
        type: "table",
        head: ["Metodo di pagamento", "Commissione", "Da sapere"],
        rows: [
          ["Contanti", "0", "Nessuna commissione"],
          ["POS della banca o contratto Nexi", "Dipende dal contratto", "Nexi pubblica anche un'offerta allo 0,99% per PagoBANCOMAT e carte consumer europee (2,49% per le carte aziendali). Secondo uno studio della Banca d'Italia, i piccoli negozi possono pagare commissioni tre o quattro volte più alte delle grandi imprese"],
          ["Nexi Mobile POS", "1,89%", "Commissione unica per PagoBANCOMAT e carte europee Visa, Mastercard, Maestro e V PAY, con convenzionamento promozionale; nessun canone mensile"],
          ["SumUp, senza abbonamento", "1,95%", "Stessa tariffa per tutti i pagamenti in presenza"],
          ["SumUp Pagamenti Plus", "0,95% sulle carte personali nazionali; 1,95% su carte aziendali, premium (American Express compresa) ed emesse fuori dal SEE", "19 € al mese (o 189 € l'anno); zero commissioni sui pagamenti fino a 10 €, fino a 7.500 € al mese"],
          ["Zettle (POS di PayPal)", "1,79%", "Stessa tariffa per le principali carte e i wallet, American Express compresa"],
          ["Stripe Terminal", "1,4% + 0,10 € (carte SEE)", "2,9% + 0,10 € per le carte emesse fuori dal SEE; 0,10 € in più per autorizzazione con Tap to Pay"],
          ["Satispay", "0 sotto i 10 €; 0,95% da 10 € in su", "Listino in vigore da settembre 2026; condizioni a parte per tabaccai, benzinai ed edicolanti"],
        ],
      },
      { type: "p", text: "Apple Pay e Google Pay passano dal POS come una carta: Zettle, per esempio, applica la stessa tariffa alle carte e ai wallet più diffusi. Non è una commissione in più." },
      { type: "note", text: "Le commissioni sugli incassi elettronici rientrano di norma fra i servizi finanziari esenti da IVA (art. 10, primo comma, n. 1 del DPR 633/1972; per le commissioni bancarie sui pagamenti con moneta elettronica lo ha confermato l'Agenzia delle Entrate nel principio di diritto n. 12/2019): la percentuale del contratto è quello che paghi, senza IVA da aggiungere. Canoni, noleggio e acquisto del POS possono invece avere l'IVA: controlla la fattura. Se l'operatore ha sede all'estero, la fattura delle commissioni richiede comunque degli adempimenti in contabilità anche senza IVA da versare: chiedi al tuo commercialista come registrarla." },
      { type: "note", text: "Se l'anno prima hai avuto ricavi fino a 400.000 €, hai diritto a un credito d'imposta pari al 30% delle commissioni sui pagamenti elettronici ricevuti da consumatori finali (art. 22 del DL 124/2019). Si usa in compensazione con l'F24 dal mese successivo alla spesa e non è tassato: di fatto la commissione ti costa il 70% della tariffa." },

      { type: "h2", text: "La commissione la paghi sul margine, non sul fatturato" },
      { type: "p", text: "La commissione è una percentuale di quello che paga il cliente, IVA compresa. Quello che guadagni davvero, però, è il margine: il prezzo di vendita senza IVA meno il costo d'acquisto senza IVA. È da lì che la commissione viene tolta." },
      { type: "p", text: "Prendiamo un articolo venduto a 30,50 €, cioè 25 € più IVA al 22%, comprato a 15 € più IVA. Il margine è di 10 €:" },
      {
        type: "table",
        caption: "Importi in euro. Il «margine che resta» è prima di affitto, stipendi e altre spese: non è un utile.",
        head: ["", "Contanti", "SumUp Pagamenti Plus o Satispay 0,95%", "Stripe Terminal 1,4% + 0,10 €", "Zettle 1,79%", "SumUp 1,95%"],
        rows: [
          ["Il cliente paga", "30,50", "30,50", "30,50", "30,50", "30,50"],
          ["Commissione", "0", "0,29", "0,53", "0,55", "0,59"],
          ["Ti arriva", "30,50", "30,21", "29,97", "29,95", "29,91"],
          ["IVA da versare", "5,50", "5,50", "5,50", "5,50", "5,50"],
          ["Margine che resta", "10,00", "9,71", "9,47", "9,45", "9,41"],
          ["Quota del margine presa dalla commissione", "0%", "2,9%", "5,3%", "5,5%", "5,9%"],
        ],
      },
      { type: "p", text: "La regola generale sta in una formula: quota del margine presa dalla commissione = commissione × (prezzo IVA inclusa ÷ prezzo senza IVA) ÷ margine percentuale. Il margine percentuale è il margine diviso per il prezzo di vendita senza IVA: non va confuso con il ricarico, che si calcola sul costo. Qui il margine percentuale è 10 ÷ 25 = 40% e il rapporto fra prezzo con e senza IVA vale 1,22: 1,95% × 1,22 ÷ 40% = 5,9%. Con l'aliquota del 10% usa 1,10; se non applichi l'IVA, come nel regime forfettario, il rapporto vale 1." },
      {
        type: "table",
        caption: "Quota del margine presa dalla commissione, con IVA al 22%, arrotondata al decimale. Se hai diritto al credito d'imposta del 30%, moltiplica per 0,7.",
        head: ["Margine percentuale", "Commissione 0,95%", "Commissione 1,79%", "Commissione 1,95%"],
        rows: [
          ["20%", "5,8%", "10,9%", "11,9%"],
          ["30%", "3,9%", "7,3%", "7,9%"],
          ["40%", "2,9%", "5,5%", "5,9%"],
          ["50%", "2,3%", "4,4%", "4,8%"],
          ["60%", "1,9%", "3,6%", "4,0%"],
        ],
      },
      { type: "p", text: "Con un margine del 20%, una commissione dell'1,95% si prende più di un decimo del margine; con un margine del 60%, il 4%. La parte fissa pesa soprattutto sui piccoli importi: i 0,10 € di Stripe sono lo 0,3% di uno scontrino da 30,50 €, ma il 6,7% di un caffè da 1,50 €. Per questo SumUp Pagamenti Plus e Satispay azzerano la commissione sotto i 10 €." },

      { type: "h2", text: "Quanto spendi di commissioni al mese? Fai il conto per metodo di pagamento" },
      { type: "p", text: "Le commissioni di un mese non si calcolano applicando una sola percentuale a tutto l'incasso: ogni metodo di pagamento ha la sua, e i contanti non costano nulla. Prendiamo un negozio con SumUp Pagamenti Plus e Satispay che incassa 12.000 € in un mese:" },
      {
        type: "table",
        caption: "Importi in euro, tariffe di ottobre 2026.",
        head: ["Metodo di pagamento", "Incassato nel mese", "Commissione", "Costo"],
        rows: [
          ["Contanti", "4.000", "0", "0"],
          ["Carte personali nazionali, pagamenti oltre 10 €", "6.200", "0,95%", "58,90"],
          ["Pagamenti con carta fino a 10 €", "500", "0", "0"],
          ["Carte aziendali, premium o estere", "1.000", "1,95%", "19,50"],
          ["Satispay, pagamenti da 10 € in su", "300", "0,95%", "2,85"],
          ["Abbonamento Pagamenti Plus", "", "19 € al mese", "19,00"],
          ["Totale", "12.000", "", "100,25"],
        ],
      },
      { type: "p", text: "Questo negozio spende circa 100,25 € al mese, 1.203 € l'anno. Senza abbonamento, gli stessi 7.700 € pagati con carta costerebbero 150,15 € (1,95%), più i 2,85 € di Satispay. Se ha diritto al credito d'imposta, recupera il 30% delle commissioni sui pagamenti dei consumatori finali, escluse quindi le carte aziendali; secondo SumUp conta anche il canone dell'abbonamento. Qui vale fra 24 e 30 € circa al mese, a seconda di quante delle carte all'1,95% sono aziendali. Con il POS della banca, rifai il conto con le percentuali del tuo contratto e aggiungi il canone. Metti i tuoi importi al posto di questi e hai il costo reale del tuo negozio." },

      { type: "h2", text: "Perché sul conto arriva meno di quanto segna la cassa" },
      { type: "p", text: "La cassa registra quello che ha pagato il cliente. Sul conto, invece, arriva quella cifra meno le commissioni: a seconda del contratto, l'operatore le trattiene da ogni accredito o te le addebita a parte, per esempio una volta al mese. La differenza fra cassa e accrediti è la commissione." },
      {
        type: "list",
        items: [
          "In contabilità registra le vendite per l'importo pieno e le commissioni come costo a parte, senza toglierle dalle vendite: il fatturato non cala perché il cliente paga con la carta, e il costo resta visibile.",
          "I soldi non arrivano il giorno stesso. SumUp accredita entro le 7 del giorno dopo sul suo Conto Aziendale, anche nei weekend e nei festivi, oppure in 1-2 giorni lavorativi su un altro conto; Nexi in 1 giorno lavorativo; Satispay il giorno successivo; Zettle accredita sul conto PayPal Business, in genere in pochi minuti, e da lì trasferisci in banca. A fine mese, quindi, una parte degli incassi è ancora in viaggio.",
          "Quando rimborsi un cliente, la commissione non sempre ti torna: Stripe, per esempio, non restituisce le commissioni del pagamento originale. Per la banca o un altro operatore la regola è nel contratto: chiedilo prima di firmare.",
        ],
      },

      { type: "h2", text: "Puoi far pagare la commissione al cliente?" },
      { type: "p", text: "No. Il decreto legislativo 11/2010 (art. 3, comma 4) vieta a chi incassa di addebitare al cliente spese per l'uso di uno strumento di pagamento, e a vigilare è l'Autorità garante della concorrenza e del mercato. Un «+1 € se paghi con la carta» o un prezzo più alto per chi paga con il POS non sono ammessi." },
      { type: "p", text: "Non puoi nemmeno rifiutare la carta o fissare un importo minimo. Chi vende prodotti o servizi deve accettare almeno una carta di debito e una di credito e, dal 28 giugno 2026 (art. 1-undecies della legge 113/2026, che ha convertito il DL 63/2026), l'obbligo e la sanzione citano espressamente anche gli strumenti di moneta elettronica. Rifiutare un pagamento di qualsiasi importo costa 30 € più il 4% della transazione (art. 15 del DL 179/2012), salvo oggettiva impossibilità tecnica. La norma non elenca marchi: quali app o wallet bastino per essere in regola con la parte sulla moneta elettronica non è ancora chiarito in modo ufficiale, quindi chiedi conferma alla tua associazione di categoria o al commercialista." },
      { type: "p", text: "La strada che resta è mettere la commissione nei prezzi: se metà delle tue vendite passa dalla carta all'1,95%, basta alzare i prezzi di circa l'1% per coprirla." },

      { type: "h2", text: "Quale tariffa conviene? Il punto di pareggio" },
      { type: "p", text: "Visto che accettare la carta è un obbligo, il conto da fare non è se accettarla, ma con quale tariffa. Un abbonamento conviene quando il risparmio sulle commissioni supera il canone: volume minimo al mese = canone ÷ (commissione senza abbonamento − commissione con abbonamento)." },
      { type: "p", text: "Con SumUp: 19 € ÷ (1,95% − 0,95%) = 1.900 € al mese di pagamenti con carte personali nazionali. Sopra questa cifra Pagamenti Plus costa meno; sotto, conviene restare senza abbonamento. Con il piano annuale (189 €, circa 15,75 € al mese) il pareggio scende a circa 1.575 €; SumUp stessa indica il piano senza abbonamento per chi incassa fino a 2.250 € al mese. Nel conto entra solo l'incassato con carte personali nazionali: le carte aziendali, premium o estere restano all'1,95% anche con l'abbonamento e non ti fanno risparmiare nulla. Se incassi molti piccoli importi, il pareggio arriva prima, perché con l'abbonamento i pagamenti fino a 10 € non costano nulla." },
      { type: "p", text: "Lo stesso ragionamento vale fra una tariffa con parte fissa e una solo percentuale. Stripe Terminal (1,4% + 0,10 €) costa meno di Zettle (1,79%) quando 0,10 € è meno dello 0,39% dell'importo, cioè sopra i 25,64 € a pagamento, senza contare il supplemento di Tap to Pay e il costo del lettore. Se il tuo scontrino medio è più basso, la tariffa solo percentuale ti costa meno." },
      { type: "p", text: "Per un metodo che aggiungi oltre il minimo di legge, la formula del margine ti dice quante vendite in più deve portare per ripagarsi: con un margine del 40%, IVA al 22% e una commissione dell'1,95%, almeno il 5,9% degli incassi con quel metodo deve essere vendita che altrimenti avresti perso. Secondo l'indagine BCE elaborata dalla Banca d'Italia, in Italia il contante resta lo strumento più usato alla cassa, soprattutto sotto i 50 €, ma il suo uso è in calo." },

      { type: "h2", text: "Come scoprire la tua commissione reale" },
      { type: "p", text: "Il dato più preciso è negli estratti dell'operatore: dividi le commissioni del mese per l'incassato con carta e ottieni la tua percentuale reale. Annotala per ogni metodo di pagamento: a fine mese vedi subito quale ti costa di più." },
      { type: "p", text: "Ogni mese gli operatori devono anche mandarti, per via telematica, l'elenco delle transazioni del periodo con le relative informazioni (art. 22, comma 5 del DL 124/2019): è lo stesso resoconto che usi per il credito d'imposta, e SumUp, per esempio, lo mette a disposizione nella sua dashboard. Somma le commissioni di un anno e dividile per l'incassato con carta: è la percentuale tutto compreso da confrontare con le altre offerte." },

      { type: "h2", text: "Registratore telematico e DingPOS: cosa può fare per te" },
      { type: "p", text: "In Italia chi vende al dettaglio deve memorizzare e trasmettere all'Agenzia delle Entrate i corrispettivi di ogni giorno (art. 2 del D.Lgs. 127/2015) e certificare ogni vendita con il documento commerciale, al più tardi nel momento in cui si conclude. Il documento commerciale si emette con un registratore telematico (RT), con la procedura web «Documento commerciale online» dell'Agenzia o con una soluzione software approvata dall'Agenzia (art. 24 del D.Lgs. 1/2024). Dal 1° gennaio 2026, inoltre, il POS deve essere collegato allo strumento che registra i corrispettivi. Il regime forfettario non esonera da questi obblighi: gli esoneri dipendono dal tipo di attività (DM 10 maggio 2019), e se non sai da che parte stai chiedi al tuo commercialista." },
      { type: "p", text: "[DingPOS](/) non è un registratore telematico né una soluzione approvata dall'Agenzia delle Entrate: non emette il documento commerciale, non trasmette i corrispettivi e non è collegato al POS. Non sostituisce quindi nessuno di questi strumenti. Se lo usi per tenere i conti del negozio, prima emetti il documento commerciale con il tuo RT o con la procedura dell'Agenzia, nel momento della vendita, e solo dopo registra la stessa vendita in DingPOS: non usarlo per segnare le vendite e certificarle più tardi. Registra in DingPOS solo vendite già certificate, così i totali coincidono con la chiusura giornaliera dell'RT. La legge regola lo strumento che memorizza e trasmette i corrispettivi e non abbiamo trovato norme che vietino un registro gestionale accanto all'RT, ma nemmeno un chiarimento ufficiale che lo dica in modo esplicito: in caso di dubbio, chiedi al commercialista. In alternativa, applica le formule di questo articolo ai dati del tuo RT e agli estratti del tuo operatore." },
      { type: "p", text: "Sull'iPad, DingPOS fa questi conti per te. In Impostazioni → Metodi di pagamento compila la Commissione di ogni metodo: una percentuale, un importo fisso per operazione, oppure entrambi. In Report, la scheda Metodi di pagamento mostra commissioni stimate e incassato netto stimato di ogni metodo. DingPOS non elabora pagamenti e non legge gli estratti del tuo operatore: gli importi sono stime basate sulle tariffe che inserisci, e quello che conta è l'estratto conto. L'incassato netto non è il tuo margine, perché il costo d'acquisto non viene sottratto. Trovi tutti i passaggi in [DingPOS può tenere traccia delle commissioni su carte e pagamenti da mobile?](/support/payment-fees/). La funzione richiede il piano Standard o superiore (vedi i [Prezzi](/pricing/)) e puoi provarla gratis per 30 giorni." },
    ],
    sources: [
      { label: "SumUp: prezzi (1,95% senza abbonamento; Pagamenti Plus 19 €/mese o 189 €/anno, 0,95%)", url: "https://www.sumup.com/it-it/prezzi/" },
      { label: "SumUp: Pagamenti Plus (piano senza abbonamento indicato fino a 2.250 € al mese; 0,95% sulle carte personali nazionali, 1,95% su carte extra SEE e premium inclusa American Express, zero commissioni fino a 10 € entro 7.500 € al mese)", url: "https://www.sumup.com/it-it/pagamenti-plus/" },
      { label: "Pagamenti Digitali (28 settembre 2026): SumUp Pagamenti Plus, carte aziendali, premium ed extra SEE all'1,95%", url: "https://www.pagamentidigitali.it/digital-banking/sumup-pagamenti-plus-commissioni-zero-micropagamenti/" },
      { label: "SumUp: accettare pagamenti (accredito sul Conto Aziendale entro le 7 del giorno dopo, su altri conti in 1-2 giorni lavorativi)", url: "https://www.sumup.com/it-it/accettare-pagamenti/" },
      { label: "SumUp: Conto Aziendale (accredito il giorno successivo anche nei weekend e nei festivi)", url: "https://www.sumup.com/it-it/conto-aziendale/" },
      { label: "SumUp: credito d'imposta sulle commissioni (Resoconto per il Credito di Imposta nella dashboard; escluse le carte aziendali, detraibile anche il canone)", url: "https://www.sumup.com/it-it/credito-imposta/" },
      { label: "Zettle by PayPal: costi e commissioni (1,79% per carte e wallet principali, American Express compresa; accredito sul conto PayPal Business in genere in pochi minuti)", url: "https://www.zettle.com/it/costi" },
      { label: "Nexi: Mobile POS (commissione unica 1,89% per PagoBANCOMAT e carte europee con convenzionamento promozionale, canone zero, accredito in 1 giorno lavorativo; offerta Italia + allo 0,99% per PagoBANCOMAT e carte consumer europee, 2,49% per le carte aziendali)", url: "https://www.nexi.it/shop/it/mobile-pos" },
      { label: "Stripe: tariffe (Terminal 1,4% + 0,10 € carte SEE, 2,9% + 0,10 € carte non SEE, Tap to Pay +0,10 €)", url: "https://stripe.com/it/pricing" },
      { label: "Stripe: rimborsi (le commissioni del pagamento originale non vengono rimborsate)", url: "https://docs.stripe.com/refunds?locale=it-IT" },
      { label: "Satispay Business: costi (gratis sotto i 10 €, 0,95% da 10 € in su, deposito degli incassi gratuito)", url: "https://www.satispay.com/it-it/business/costi/" },
      { label: "Satispay: obbligo di moneta elettronica e nuovo listino da settembre 2026 (accredito il giorno successivo, condizioni per tabaccai, benzinai ed edicolanti)", url: "https://www.satispay.com/it-it/blog/mondo-satispay/nuove-commissioni-esercenti-informazioni/" },
      { label: "QuiFinanza: studio della Banca d'Italia sulle commissioni, i piccoli negozi pagano fino a 3-4 volte le grandi imprese", url: "https://quifinanza.it/economia/finanza/commissioni-pos-piccoli-negozi-euro-digitale/1014799/" },
      { label: "Agenzia delle Entrate: principio di diritto n. 12 del 2 aprile 2019 (commissioni agli esercenti per pagamenti elettronici esenti da IVA, art. 10, primo comma, n. 1 DPR 633/1972)", url: "https://www.agenziaentrate.gov.it/portale/documents/20143/307489/Principio+di+diritto+n+12+2019_PRINCIPIO+DI+DIRITTO+N.+12+del+2+aprile+2019.pdf/bd423ef2-604b-ed10-a15c-bf159be34070" },
      { label: "Commercialista Telematico: commissioni POS di operatori esteri, esenti IVA ma con obblighi per le fatture estere", url: "https://www.commercialistatelematico.com/articoli/2023/11/trattamento-iva-fatture-estere-per-commissioni-servizi-sum-up.html" },
      { label: "Normattiva: art. 22 del DL 124/2019 (credito d'imposta del 30% sulle commissioni, ricavi fino a 400.000 €, comunicazione mensile delle transazioni agli esercenti)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2019-10-26;124~art22" },
      { label: "Normattiva: art. 3 del D.Lgs. 11/2010 (divieto di spese a carico del pagatore per l'uso di strumenti di pagamento)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-01-27;11~art3" },
      { label: "Normattiva: art. 15 del DL 179/2012 (obbligo di accettare carte di debito, di credito e strumenti di moneta elettronica; sanzione di 30 € più il 4%)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-10-18;179~art15" },
      { label: "Normattiva: testo coordinato del DL 63/2026 convertito dalla legge 113/2026 (art. 1-undecies, obbligo esteso alla moneta elettronica)", url: "https://www.normattiva.it/eli/id/2026/06/27/26A03280/CONSOLIDATED/" },
      { label: "Normattiva: art. 2 del D.Lgs. 127/2015, testo vigente al 25 ottobre 2026 (memorizzazione e trasmissione dei corrispettivi non oltre la conclusione dell'operazione, esoneri per decreto, collegamento del POS)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-08-05;127!vig=2026-10-25~art2" },
      { label: "Agenzia delle Entrate: corrispettivi da soluzione software (art. 24 D.Lgs. 1/2024, provvedimento del 7 marzo 2025)", url: "https://www.agenziaentrate.gov.it/portale/specifiche-tecniche-allegati-invio-corrispettivi-soluzione-software" },
      { label: "Agenzia delle Entrate: i corrispettivi elettronici (documento commerciale e strumenti per emetterlo)", url: "https://www.agenziaentrate.gov.it/portale/i-corrispettivi-elettronici" },
      { label: "Agenzia delle Entrate: collegamento POS-RT dal 1° gennaio 2026", url: "https://www.agenziaentrate.gov.it/portale/collegamento-pos-rt" },
      { label: "Gazzetta Ufficiale: DM 10 maggio 2019, esoneri dalla memorizzazione e trasmissione dei corrispettivi", url: "https://www.gazzettaufficiale.it/eli/id/2019/05/18/19A03217/sg" },
      { label: "RegimeForfettario.it: i forfettari non sono esonerati in automatico dai corrispettivi telematici", url: "https://www.regimeforfettario.it/corrispettivi-telematici-regime-forfettario/" },
      { label: "Banca d'Italia (13 ottobre 2025): abitudini di pagamento dei consumatori in Italia, indagine BCE SPACE 2024", url: "https://www.bancaditalia.it/media/notizia/rapporto-sulle-abitudini-di-pagamento-dei-consumatori-in-italia-evidenze-dall-indagine-bce-del-2024/" },
    ],
    related: [],
  },
];
