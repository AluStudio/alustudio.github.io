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
//              { type: "image", src, phone?, width, height, alt, caption? }
//              src / phone are .webp paths under public/ ("guides/<name>.webp");
//              width / height are src's pixel size; phone is its 1080w copy,
//              required when width > 1080; caption is plain text, no links.
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
      { type: "p", text: "Senza passare dalla banca, SumUp trattiene l'1,95% su ogni pagamento con carta (0,95% sulle carte personali nazionali con l'abbonamento Pagamenti Plus da 19 € al mese), Zettle l'1,79%, Nexi Mobile POS l'1,89% e Satispay lo 0,95% sui pagamenti da 10 € in su; con il POS della banca vale il tuo contratto. La commissione si calcola sull'incasso IVA inclusa, ma esce dal margine: su un articolo venduto a 30,50 € (25 € più IVA al 22%) e comprato a 15 €, l'1,95% costa 0,59 €, cioè il 5,9% dei 10 € di margine." },

      { type: "h2", text: "Quanto costa il POS a un commerciante?" },
      { type: "p", text: "Tariffe pubblicate dagli operatori a ottobre 2026; con la banca la commissione si tratta." },
      {
        type: "table",
        head: ["Metodo di pagamento", "Commissione", "Da sapere"],
        rows: [
          ["Contanti", "0", "Nessuna commissione"],
          ["POS della banca o contratto Nexi", "Dipende dal contratto", "Nexi pubblica anche un'offerta allo 0,99% per PagoBANCOMAT e carte consumer europee"],
          ["Nexi Mobile POS", "1,89%", "PagoBANCOMAT e carte europee; offerta promozionale, senza canone"],
          ["SumUp, senza abbonamento", "1,95%", "Stessa tariffa per tutti i pagamenti in presenza"],
          ["SumUp Pagamenti Plus", "0,95% sulle carte personali nazionali; 1,95% su carte aziendali, premium ed extra SEE", "19 € al mese (189 € l'anno); gratis i pagamenti fino a 10 €, entro 7.500 € al mese"],
          ["Zettle (POS di PayPal)", "1,79%", "Anche per i wallet e American Express"],
          ["Stripe Terminal", "1,4% + 0,10 € (carte SEE)", "Carte extra SEE 2,9% + 0,10 €; Tap to Pay +0,10 €"],
          ["Satispay", "0 sotto i 10 €; 0,95% da 10 € in su", "Listino da settembre 2026; condizioni a parte per tabaccai, benzinai ed edicolanti"],
          ["Apple Pay e Google Pay", "Come una carta", "Passano dal POS come una carta (Zettle applica la stessa tariffa)"],
        ],
      },
      { type: "note", text: "Le commissioni sugli incassi elettronici sono di norma esenti da IVA; canoni e noleggio del POS possono averla. Se l'anno prima hai avuto ricavi fino a 400.000 €, recuperi il 30% delle commissioni sui pagamenti dei consumatori finali come credito d'imposta non tassato, in compensazione con l'F24: di fatto la commissione ti costa il 70% della tariffa." },

      { type: "h2", text: "La commissione la paghi sul margine, non sul fatturato" },
      { type: "p", text: "La commissione si calcola su quello che paga il cliente, IVA compresa, ma esce dal margine: prezzo di vendita senza IVA meno costo d'acquisto senza IVA. Un articolo venduto a 30,50 € (25 € più IVA al 22%) e comprato a 15 € più IVA ha 10 € di margine:" },
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
      { type: "p", text: "La formula: quota del margine = commissione × 1,22 ÷ margine percentuale, dove 1,22 è il rapporto fra prezzo con e senza IVA al 22% e il margine percentuale è il margine diviso per il prezzo senza IVA (non il ricarico). Qui il margine percentuale è 10 ÷ 25 = 40%, quindi 1,95% × 1,22 ÷ 40% = 5,9%. Con l'IVA al 10% usa 1,10; senza IVA, come nel forfettario, usa 1." },
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

      { type: "h2", text: "Quanto spendi di commissioni al mese?" },
      { type: "p", text: "Il conto si fa metodo per metodo, perché ognuno ha la sua commissione. Un negozio con SumUp Pagamenti Plus e Satispay che incassa 12.000 € in un mese:" },
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
      { type: "p", text: "Sono 100,25 € al mese, 1.203 € l'anno; senza abbonamento, le carte costerebbero 150,15 €, più i 2,85 € di Satispay. Con il credito d'imposta il negozio recupera fra 24 e 30 € circa al mese, a seconda di quante carte all'1,95% sono aziendali, escluse dal credito (secondo SumUp il canone conta). Con il POS della banca usa le percentuali del tuo contratto e aggiungi il canone." },

      { type: "h2", text: "Perché sul conto arriva meno di quanto segna la cassa" },
      { type: "p", text: "La cassa registra quello che ha pagato il cliente; sul conto arriva quella cifra meno le commissioni, trattenute da ogni accredito o addebitate a parte, secondo il contratto." },
      {
        type: "list",
        items: [
          "In contabilità, registra le vendite per l'importo pieno e le commissioni come costo a parte: così il fatturato non cala e il costo resta visibile.",
          "Gli accrediti non sono sempre immediati: SumUp accredita il giorno dopo sul suo Conto Aziendale o in 1-2 giorni lavorativi su un altro conto, Nexi in 1 giorno lavorativo. A fine mese una parte degli incassi è ancora in viaggio.",
          "Sui rimborsi la commissione non sempre torna: Stripe non restituisce quella del pagamento originale; per gli altri decide il contratto.",
        ],
      },

      { type: "h2", text: "Puoi far pagare la commissione al cliente?" },
      { type: "p", text: "No. La legge vieta di addebitare al cliente spese per l'uso di uno strumento di pagamento (vigila l'Antitrust): niente «+1 € con la carta» né prezzi più alti per chi paga con il POS." },
      { type: "p", text: "Non puoi nemmeno rifiutare la carta o fissare un minimo: devi accettare almeno una carta di debito e una di credito e, dal 28 giugno 2026, anche la moneta elettronica. Rifiutare un pagamento di qualsiasi importo costa 30 € più il 4% della transazione, salvo impossibilità tecnica oggettiva. Quali app bastino per la moneta elettronica non è ancora chiarito: chiedi alla tua associazione di categoria o al commercialista." },
      { type: "p", text: "Resta una strada: mettere la commissione nei prezzi. Se metà delle vendite passa dalla carta all'1,95%, basta alzare i prezzi di circa l'1% per coprirla." },

      { type: "h2", text: "Quale tariffa conviene? Il punto di pareggio" },
      { type: "p", text: "Un abbonamento conviene quando il risparmio sulle commissioni supera il canone: volume minimo al mese = canone ÷ (commissione senza abbonamento − commissione con abbonamento). Con SumUp: 19 € ÷ (1,95% − 0,95%) = 1.900 € al mese di pagamenti con carte personali nazionali, le sole che scendono allo 0,95%; con il piano annuale, circa 1.575 €. Sopra questa soglia conviene Pagamenti Plus, e prima ancora se incassi molti importi fino a 10 €, gratis con l'abbonamento." },
      { type: "p", text: "Lo stesso calcolo vale con una parte fissa: Stripe Terminal (1,4% + 0,10 €) costa meno di Zettle (1,79%) sopra i 25,64 € a pagamento, Tap to Pay e lettore esclusi. Con scontrini più piccoli conviene la tariffa solo percentuale." },

      { type: "h2", text: "Come sapere quanto ti costa davvero ogni metodo di pagamento?" },
      { type: "p", text: "Guarda gli estratti dell'operatore, che ogni mese deve mandarti anche l'elenco delle transazioni: commissioni del mese ÷ incassato con quel metodo = la tua percentuale reale. Annotala per ogni metodo: vedrai quale costa di più." },

      { type: "h2", text: "Registratore telematico e DingPOS" },
      { type: "p", text: "Chi vende al dettaglio deve certificare ogni vendita con il documento commerciale, emesso da un registratore telematico (RT), dalla procedura web dell'Agenzia delle Entrate o da un software approvato, e trasmettere i corrispettivi. [DingPOS](/) non fa nessuna delle due cose e non sostituisce questi strumenti: se il tuo negozio ha l'obbligo, non registrare le vendite in DingPOS e applica le formule ai dati del tuo RT e agli estratti dell'operatore. Il forfettario non esonera: gli esoneri dipendono dal tipo di attività, e nel dubbio chiedi al commercialista." },
      { type: "p", text: "Se la tua attività è esonerata da questi obblighi, DingPOS stima le commissioni sull'iPad. In Impostazioni → Metodi di pagamento compili la Commissione di ogni metodo: una percentuale, un importo fisso per operazione, oppure entrambi. Inserisci quello che l'operatore trattiene davvero." },
      { type: "image", src: "guides/fees-it-settings.webp", width: 872, height: 764, alt: "DingPOS Impostazioni → Metodi di pagamento: i campi Commissione di un metodo di pagamento, con una percentuale compilata", caption: "La tariffa si inserisce una volta per ogni metodo di pagamento e vale per i pagamenti successivi." },
      { type: "p", text: "In Report, la scheda Metodi di pagamento mostra poi:" },
      {
        type: "list",
        items: [
          "sotto ogni metodo con una tariffa, la riga «Commissione · Netto»: commissione stimata e incassato netto stimato;",
          "in fondo alla scheda, commissioni stimate e incassato netto stimato dell'intero periodo;",
          "per i pagamenti incassati prima di impostare la tariffa, l'avviso «N senza tariffa» e il netto «—».",
        ],
      },
      { type: "image", src: "guides/fees-it-report.webp", phone: "guides/fees-it-report-1080w.webp", width: 1126, height: 1034, alt: "DingPOS Report: la scheda Metodi di pagamento con la riga «Commissione · Netto» sotto ogni metodo con una tariffa e, in fondo, commissioni stimate e incassato netto stimato del periodo", caption: "Commissioni e netto sono stime basate sulle tue tariffe; l'importo reale è quello dell'estratto conto." },
      { type: "p", text: "Sono stime basate sulle tue tariffe: DingPOS non elabora pagamenti e non legge gli estratti dell'operatore, quindi l'importo reale è quello dell'estratto conto. L'incassato netto non è il margine: il costo d'acquisto non viene sottratto. I passaggi sono in [DingPOS può tenere traccia delle commissioni su carte e pagamenti da mobile?](/support/payment-fees/). Serve il piano Standard o superiore (vedi i [Prezzi](/pricing/)), con 30 giorni di prova gratuita." },
    ],
    sources: [
      { label: "SumUp: prezzi (1,95% senza abbonamento; Pagamenti Plus 19 €/mese o 189 €/anno, 0,95%)", url: "https://www.sumup.com/it-it/prezzi/" },
      { label: "SumUp: Pagamenti Plus (0,95% sulle carte personali nazionali, 1,95% su carte extra SEE e premium inclusa American Express, zero commissioni fino a 10 € entro 7.500 € al mese)", url: "https://www.sumup.com/it-it/pagamenti-plus/" },
      { label: "Pagamenti Digitali (28 settembre 2026): SumUp Pagamenti Plus, carte aziendali, premium ed extra SEE all'1,95%", url: "https://www.pagamentidigitali.it/digital-banking/sumup-pagamenti-plus-commissioni-zero-micropagamenti/" },
      { label: "SumUp: accettare pagamenti (accredito sul Conto Aziendale entro le 7 del giorno dopo, su altri conti in 1-2 giorni lavorativi)", url: "https://www.sumup.com/it-it/accettare-pagamenti/" },
      { label: "SumUp: credito d'imposta sulle commissioni (escluse le carte aziendali, detraibile anche il canone)", url: "https://www.sumup.com/it-it/credito-imposta/" },
      { label: "Zettle by PayPal: costi e commissioni (1,79% per carte e wallet principali, American Express compresa)", url: "https://www.zettle.com/it/costi" },
      { label: "Nexi: Mobile POS (commissione unica 1,89% per PagoBANCOMAT e carte europee con convenzionamento promozionale, canone zero, accredito in 1 giorno lavorativo; offerta Italia + allo 0,99% per PagoBANCOMAT e carte consumer europee)", url: "https://www.nexi.it/shop/it/mobile-pos" },
      { label: "Stripe: tariffe (Terminal 1,4% + 0,10 € carte SEE, 2,9% + 0,10 € carte non SEE, Tap to Pay +0,10 €)", url: "https://stripe.com/it/pricing" },
      { label: "Stripe: rimborsi (le commissioni del pagamento originale non vengono rimborsate)", url: "https://docs.stripe.com/refunds?locale=it-IT" },
      { label: "Satispay Business: costi (gratis sotto i 10 €, 0,95% da 10 € in su)", url: "https://www.satispay.com/it-it/business/costi/" },
      { label: "Satispay: obbligo di moneta elettronica e nuovo listino da settembre 2026 (condizioni per tabaccai, benzinai ed edicolanti)", url: "https://www.satispay.com/it-it/blog/mondo-satispay/nuove-commissioni-esercenti-informazioni/" },
      { label: "Agenzia delle Entrate: principio di diritto n. 12 del 2 aprile 2019 (commissioni agli esercenti per pagamenti elettronici esenti da IVA, art. 10, primo comma, n. 1 DPR 633/1972)", url: "https://www.agenziaentrate.gov.it/portale/documents/20143/307489/Principio+di+diritto+n+12+2019_PRINCIPIO+DI+DIRITTO+N.+12+del+2+aprile+2019.pdf/bd423ef2-604b-ed10-a15c-bf159be34070" },
      { label: "Normattiva: art. 22 del DL 124/2019 (credito d'imposta del 30% sulle commissioni, ricavi fino a 400.000 €, comunicazione mensile delle transazioni agli esercenti)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2019-10-26;124~art22" },
      { label: "Normattiva: art. 3 del D.Lgs. 11/2010 (divieto di spese a carico del pagatore per l'uso di strumenti di pagamento)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-01-27;11~art3" },
      { label: "Normattiva: art. 15 del DL 179/2012 (obbligo di accettare carte di debito, di credito e strumenti di moneta elettronica; sanzione di 30 € più il 4%)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-10-18;179~art15" },
      { label: "Normattiva: testo coordinato del DL 63/2026 convertito dalla legge 113/2026 (art. 1-undecies, obbligo esteso alla moneta elettronica)", url: "https://www.normattiva.it/eli/id/2026/06/27/26A03280/CONSOLIDATED/" },
      { label: "Normattiva: art. 2 del D.Lgs. 127/2015, testo vigente al 25 ottobre 2026 (memorizzazione e trasmissione dei corrispettivi, esoneri per decreto)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-08-05;127!vig=2026-10-25~art2" },
      { label: "Agenzia delle Entrate: i corrispettivi elettronici (documento commerciale e strumenti per emetterlo)", url: "https://www.agenziaentrate.gov.it/portale/i-corrispettivi-elettronici" },
      { label: "Agenzia delle Entrate: corrispettivi da soluzione software (art. 24 D.Lgs. 1/2024, provvedimento del 7 marzo 2025)", url: "https://www.agenziaentrate.gov.it/portale/specifiche-tecniche-allegati-invio-corrispettivi-soluzione-software" },
      { label: "Gazzetta Ufficiale: DM 10 maggio 2019, esoneri dalla memorizzazione e trasmissione dei corrispettivi", url: "https://www.gazzettaufficiale.it/eli/id/2019/05/18/19A03217/sg" },
      { label: "RegimeForfettario.it: i forfettari non sono esonerati in automatico dai corrispettivi telematici", url: "https://www.regimeforfettario.it/corrispettivi-telematici-regime-forfettario/" },
    ],
    related: [],
  },
];
