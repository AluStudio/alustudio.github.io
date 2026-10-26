// DingPOS guides — et pack. Guides are acquisition articles written for one
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
//   market   — the market the facts hold for, a key of ui.markets ("EE")
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
// Estonia has no fiscal-register rule for general retail, but alkoholiseadus
// § 44 requires a kassaaparaat that records every alcohol retail sale in shops
// and catering, and nobody has confirmed DingPOS meets it. No string here may
// present DingPOS as meeting § 44 or any other legal requirement.

export const ui = {
  nav: "Juhendid",
  title: "Juhendid väikepoodidele",
  subtitle: "Maksed, kulud ja brutokasum: arvutused, millel on tähtsust, kui seisad ise leti taga.",
  meta_description: "Juhendid väikepoodidele: mida kaardimaksed maksma lähevad ja kui suure osa brutokasumist teenustasud võtavad – valemid, näidisarvutused ja allikad.",
  back: "Kõik juhendid",
  related_title: "Loe ka",
  sources_title: "Allikad",
  checked: "Viimati kontrollitud: {{date}}",
  cta_title: "Vaata iPadis iga makseviisi teenustasu",
  cta_text: "DingPOS on iPadi kassarakendus väikepoodidele, ilma tehingutasudeta ja 30-päevase tasuta prooviperioodiga. Kui müüd kaupluses või toitlustusettevõttes alkoholi, ära tugine DingPOSile alkoholiseaduse § 44 kassaaparaadi nõude täitmisel: selle vastavust nõudele ei ole kinnitatud.",
  cta_button: "Laadi alla App Store'ist",
  markets: { EE: "Eesti" },
};

export const articles = [
  {
    slug: "payment-processing-fees-estonia",
    market: "EE",
    checked: "2026-10-25",
    title: "Kaardimakse teenustasu kaupmehele: kui palju maksab makseterminal ja kui suure osa brutokasumist see võtab?",
    summary: "SumUp võtab kaardimaksetelt 1,69%, Maksekeskus 0,95% + 0,02 €, panga tasu sõltub lepingust. 31-eurosel müügil 10 € brutokasumiga võtab 1,69% sellest 5,2%.",
    content: [
      { type: "p", text: "Pangalepingu korral sõltub kaardimakse teenustasu sinu kokkuleppest: Swedbank, LHV, SEB ja Coop Panga partner Nets teevad igale kaupmehele eraldi pakkumise. Avaliku hinnaga võtab SumUp ilma kuutasuta 1,69% makse kohta ja Maksekeskus 0,95% + 0,02 €. Tasu arvutatakse summalt koos käibemaksuga, aga see tuleb sinu brutokasumist: kui müüd kauba 31 euroga (25 € ilma käibemaksuta) ja ostsid selle 15 euroga, võtab SumUp sellelt müügilt 0,52 €, ehk 5,2% sinu 10-eurosest brutokasumist." },

      { type: "h2", text: "Kui palju maksab kaardimakse kaupmehele?" },
      { type: "p", text: "Hinnad on pakkujate Eesti hinnakirjadest, oktoober 2026." },
      {
        type: "table",
        head: ["Makseviis", "Tasu kaupmehele", "Hea teada"],
        rows: [
          ["Sularaha", "0", "Tehingutasu ei ole"],
          ["Panga makseterminal (Swedbank, LHV, SEB, Coop Pank ja Nets)", "Vastavalt lepingule", "Vahendustasu Euroopa Majanduspiirkonnas (EMP) väljastatud eraisikute kaartidel 0,2% (deebet) või 0,3% (krediit), lisaks töötlemis- ja panga teenustasu; paikse terminali üür, Swedbankis 13 € kuus + km"],
          ["Swedbank, terminal mobiilis", "0,99% + 0,02 €", "Kuutasu ei ole"],
          ["Swedbank, nutiterminal", "1,45%", "Seade 140 € + km"],
          ["Maksekeskus (MakeCommerce)", "0,95% + 0,02 €", "Kõigile kaartidele; terminali rent 13 € kuus"],
          ["SumUp ilma kuutasuta", "1,69%", "Kõigile kaartidele"],
          ["SumUp Payments Plus", "0,89% EMP tarbijakaartidele, muudele 1,69%", "Kuutasu 19 €"],
        ],
      },
      { type: "p", text: "Apple Pay ja Google Pay maksed on kaardimaksed: sina maksad telefoni lisatud kaardi tasu." },
      { type: "note", text: "Käibemaks: makseteenused on käibemaksust vabastatud, nii et tehingutasule seda üldjuhul ei lisandu; terminali üür ja ost on käibemaksuga. Maksekeskuse hinnakirja järgi lisandub hindadele käibemaks – vaata arvelt, kas ka tehingutasule." },

      { type: "h2", text: "Teenustasu tuleb brutokasumist, mitte käibest" },
      { type: "p", text: "Tasu võetakse hinnast koos käibemaksuga, aga sinu teenitud raha on brutokasum: käibemaksuta hind miinus sisseostuhind. Kaup hinnaga 31 € on ilma 24% käibemaksuta 25 €, sisseost maksis 15 € ja brutokasum on 10 €." },
      {
        type: "table",
        caption: "Eurodes, tasud on ümardatud sendini. „Brutokasumist alles“ on enne üüri, palku ja muid kulusid, see ei ole puhaskasum.",
        head: ["", "Sularaha", "SumUp Payments Plus 0,89%", "Maksekeskus 0,95% + 0,02 €", "SumUp 1,69%"],
        rows: [
          ["Klient maksab", "31,00", "31,00", "31,00", "31,00"],
          ["Teenustasu", "0", "0,28", "0,31", "0,52"],
          ["Sulle laekub", "31,00", "30,72", "30,69", "30,48"],
          ["Sellest käibemaks riigile", "6,00", "6,00", "6,00", "6,00"],
          ["Brutokasumist alles", "10,00", "9,72", "9,69", "9,48"],
          ["Teenustasu osa brutokasumist", "0%", "2,8%", "3,1%", "5,2%"],
        ],
      },
      { type: "p", text: "Valem: teenustasu osa brutokasumist = teenustasu määr × 1,24 ÷ marginaal, kus 1,24 = 1 + 24% käibemaks. Marginaal on brutokasum jagatud käibemaksuta hinnaga (10 ÷ 25 = 40%), nii et SumUpi puhul 1,69% × 1,24 ÷ 40% = 5,2%. Kui sa ei ole käibemaksukohustuslane (käive alla 40 000 € aastas), kasuta 1,24 asemel 1." },
      {
        type: "table",
        caption: "Teenustasu osa brutokasumist 24% käibemaksu juures. Fikseeritud tasu tehingu kohta ei ole arvestatud. Kui sa ei ole käibemaksukohustuslane, jaga arvud 1,24-ga.",
        head: ["Marginaal", "Tasu 0,89%", "Tasu 0,99%", "Tasu 1,45%", "Tasu 1,69%"],
        rows: [
          ["20%", "5,5%", "6,1%", "9,0%", "10,5%"],
          ["30%", "3,7%", "4,1%", "6,0%", "7,0%"],
          ["40%", "2,8%", "3,1%", "4,5%", "5,2%"],
          ["50%", "2,2%", "2,5%", "3,6%", "4,2%"],
          ["60%", "1,8%", "2,0%", "3,0%", "3,5%"],
        ],
      },

      { type: "h2", text: "Kui palju teeb see kuus?" },
      { type: "p", text: "Kuu tasud arvutatakse iga makseviisi kohta eraldi ja sularaha eest tasu ei maksa. Võtame poe, mille kuukäive koos käibemaksuga on 12 000 € ja millel on Maksekeskuse paikne terminal:" },
      {
        type: "table",
        caption: "Eurodes; tasud ja üür on ilma käibemaksuta, käibe jaotus ja maksete arv on näide. Kui sa ei ole käibemaksukohustuslane, maksad üüri eest 16,12 € ja, kui Maksekeskus arvestab käibemaksu ka tehingutasult, tasude eest 120,90 €.",
        head: ["Makseviis", "Kuu käive", "Määr", "Tasu"],
        rows: [
          ["Sularaha", "3000", "0", "0"],
          ["Kaardid ja digirahakotid, 600 makset", "9000", "0,95% + 0,02 € makse kohta", "97,50"],
          ["Terminali üür", "", "13 € kuus", "13,00"],
          ["Kokku", "12 000", "", "110,50"],
        ],
      },
      { type: "p", text: "Pood maksab 110,50 € kuus ehk 1326 € aastas. Sama 9000 € kaardikäive maksaks SumUpiga ilma kuutasuta 152,10 € ja Payments Plusiga 99,10 €, kui kõik kaardid on EMP tarbijakaardid." },

      { type: "h2", text: "Miks laekub kontole vähem raha, kui kassa näitab?" },
      { type: "p", text: "Kassa näitab, mida klient maksis, aga pakkuja kannab üle netosumma, millest tasud on maha arvatud." },
      {
        type: "list",
        items: [
          "Kajasta müük täissummas ja teenustasu eraldi kuluna, siis on maksete hind näha.",
          "Swedbank kannab raha üle järgmisel hommikul, LHV järgmise päeva lõunaks, Maksekeskus ja SumUp järgmisel tööpäeval, nii et kuu lõpus on osa käibest alles teel.",
          "LHV tagasinõude teenustasu jääb alles ka siis, kui vaidlus lahendatakse sinu kasuks. Tagasimaksete reeglid on lepingus.",
        ],
      },

      { type: "h2", text: "Kas kaardimakse eest võib kliendilt lisatasu võtta?" },
      { type: "p", text: "Tavaliste kaartide eest mitte. Võlaõigusseadus keelab tasu nõuda eraisikute deebet- ja krediitkaartide eest, mille vahendustasud reguleerib ELi määrus 2015/751. Teiste kaartide, näiteks ärikaartide eest võib lisatasu küsida, kui sinu leping pakkujaga seda lubab, tasu ei ületa sinu tegelikku kulu ja teatad sellest kliendile enne makset." },
      { type: "p", text: "Lihtsam on tasu hindadesse arvestada. Kui 75% käibest tuleb kaardimaksetest keskmiselt 1% tasuga, tõsta hindu umbes 0,94%, sest tasu arvutatakse hinnalt koos käibemaksuga, aga hinnatõusust jääb sulle ainult käibemaksuta osa." },

      { type: "h2", text: "Millal kaardimakse end ära tasub?" },
      { type: "p", text: "Kaardimakse maksab, aga toob ka müüki, mida muidu poleks olnud. Vajalik lisamüük osana selle makseviisi käibest = teenustasu määr × 1,24 ÷ marginaal. 40% marginaali ja SumUpi 1,69% juures maksab 1000 € kaardimakseid 16,90 €; kui 52,39 € (5,24%) neist tuli ainult tänu sellele, et sai kaardiga maksta, katab selle lisamüügi brutokasum kogu tasu." },
      { type: "p", text: "Kui klient oleks muidu maksnud sularahas, on tasu puhas kulu. Euroopa Keskpanga 2024. aasta uuringu järgi maksavad Eesti inimesed müügikohtades kaardi või nutiseadmega 57% ja sularahas 39% juhtudest." },

      { type: "h2", text: "Kuidas leida oma tegelik teenustasu määr?" },
      { type: "p", text: "Kõige täpsem number on väljavõttel: jaga kuu teenustasud sama kuu kaardikäibega. ELi määruse 2015/751 järgi peab makseteenuse pakkuja näitama iga kaardimakse summat ja tasusid ning esitama tasud kaardikategooriate ja -brändide kaupa eraldi, kui sa pole kirjalikult koondhinda palunud. Lisa aasta tasudele kuutasud ja terminali üür ning jaga summa aasta kaardikäibega: selle kogumääraga võrdle pakkumisi." },

      { type: "h2", text: "Kassanõuded Eestis ja teenustasud DingPOSis" },
      { type: "p", text: "Tavalisel jaemüügil ei ole Eestis fiskaalkassa nõuet: sertifitseeritud kassaaparaati ega registreeritud kassatarkvara ei nõuta. Kohe maksvale kliendile tuleb siiski anda ostu tõendav dokument. Paberil tšekki ei pea enam vaikimisi andma, vaid siis, kui klient seda soovib või maksab sularahas ega kasuta kliendikaarti, mille kaudu ostudokument on hiljem kättesaadav." },
      { type: "p", text: "Alkoholi müük on erand: kauplus või toitlustusettevõte, mis müüb alkoholi, peab alkoholiseaduse § 44 järgi fikseerima kõik alkoholi jaemüügitehingud kassaaparaadiga, ja juriidilist isikut võib rikkumise eest trahvida kuni 3000 euroga. Seadus ega TTJA juhend ei ütle, kas iPadi kassarakendus on kassaaparaat. Me ei väida, et [DingPOS](/) seda nõuet täidab. Kui müüd alkoholi, ära kasuta DingPOSi § 44 kassaaparaadina ega asenda sellega kassat, millega praegu alkoholimüüki fikseerid, enne kui TTJA on kirjalikult kinnitanud, et see sobib; küsi neilt ka seda, kas DingPOSi tohib kasutada kassa kõrval. Riigikogu menetluses olev eelnõu 853 SE asendaks kassaaparaadi nõude kohustusega fikseerida iga tehing elektrooniliselt, kuid 25. oktoobri 2026 seisuga kehtib § 44 muutmata kujul." },
      { type: "p", text: "Kui sa alkoholi ei müü, arvestab DingPOS teenustasud ja netolaekumise iPadis sinu eest. DingPOS ei prindi ega saada ostutšekki, seega annad ostu tõendava dokumendi muul viisil. Puuduta jaotises Seaded → Makseviisid makseviisi ja täida Teenustasu: protsent, fikseeritud summa tehingu kohta või mõlemad. Sisesta määr, mille pakkuja tegelikult maha arvab, koos käibemaksuga, kui see lisandub." },
      { type: "image", src: "guides/fees-ee-settings.webp", width: 872, height: 764, alt: "DingPOS Seaded → Makseviisid: makseviisi Teenustasu väljad, protsent on täidetud", caption: "Sisesta makseviisile määr, mille pakkuja tegelikult maha arvab." },
      {
        type: "list",
        items: [
          "Jaotises Aruanded lisab kaart Makseviisid iga tasuga makseviisi alla rea „Teenustasu · Neto“: hinnanguline teenustasu ja hinnanguline netolaekumine.",
          "Kaardi allservas on kogu perioodi hinnangulised tasud ja hinnanguline netolaekumine.",
          "Maksed, mis laekusid enne, kui makseviisil oli määr, märgitakse „N ilma määrata“ ja nende neto on „—“.",
        ],
      },
      { type: "image", src: "guides/fees-ee-report.webp", phone: "guides/fees-ee-report-1080w.webp", width: 1126, height: 770, alt: "DingPOS Aruanded, kaart Makseviisid: tasuga makseviiside all rida „Teenustasu · Neto“, kaardi allservas perioodi hinnangulised tasud ja hinnanguline netolaekumine", caption: "Teenustasu ja neto on hinnangud sinu määrade põhjal; tegelik summa on pakkuja väljavõttel." },
      { type: "p", text: "Need on hinnangud sinu määrade põhjal: DingPOS ei töötle makseid ega loe pakkuja väljavõtteid, tegelik summa on väljavõttel. Neto on laekunud raha, mitte brutokasum. Täpsemalt loe [Kas DingPOS oskab kaardi- ja mobiilimakse teenustasusid jälgida?](/support/payment-fees/). Funktsioon nõuab paketti Standard või kõrgemat (vaata [Hinnad](/pricing/)) ja DingPOSi saad 30 päeva tasuta proovida." },
    ],
    sources: [
      { label: "Swedbank: kaardimaksete vastuvõtmine müügikohas (terminal mobiilis 0,99% + 0,02 €, nutiterminal 1,45% ja 140 € + km, terminalide üür, komisjonitasu vastavalt kokkuleppele, raha laekub järgmisel hommikul)", url: "https://www.swedbank.ee/business/cash/cashflow/cardservice?language=EST" },
      { label: "LHV: kaardimaksete vastuvõtmise KKK (tasu koostisosad, eraldi pakkumine igale kliendile, raha laekub järgmise päeva lõunaks, tagasinõude teenustasu)", url: "https://www.lhv.ee/et/kkk/kaardimaksed/" },
      { label: "LHV: maksekaartide teenindamisega seotud indikatiivsed vahendus- ja töötlemistasud (EMP eraisikute deebetkaardid 0,20%, krediitkaardid 0,30%)", url: "https://www.lhv.ee/et/maksekaartide-teenindamise-tasud" },
      { label: "SEB: makseterminalid (personaalne pakkumine)", url: "https://www.seb.ee/ariklient/maksete-kogumine/pos" },
      { label: "Coop Pank: maksete kogumine müügikohas (Nets, maksed laekuvad netosummana)", url: "https://www.cooppank.ee/ariklient/maksete-kogumine/maksete-kogumine-muugikohas" },
      { label: "Maksekeskus: makseterminalid (0,95% + 0,02 € kõigile kaartidele, rent 13 € kuus, raha laekub järgmisel tööpäeval, hindadele lisandub käibemaks)", url: "https://maksekeskus.ee/service/makseterminalid/" },
      { label: "SumUp: hinnad (1,69% ilma kuutasuta, Payments Plus 19 € kuus ja 0,89%, seadmete hinnad ilma käibemaksuta, järgmise päeva väljamaksed)", url: "https://www.sumup.com/et-ee/hinnad/" },
      { label: "SumUp: Payments Plus (0,89% EMP tarbijakaartidele, 1,69% äri-, premium- ja EMP välistele kaartidele)", url: "https://www.sumup.com/et-ee/payments-plus/" },
      { label: "Eesti Pank (14.01.2025): Eestis kasutatakse maksmisel enim digitaalseid maksevahendeid (kaart ja nutiseade 57%, sularaha 39%)", url: "https://www.eestipank.ee/press/uuring-eestis-kasutatakse-maksmisel-enim-digitaalseid-maksevahendeid-14012025" },
      { label: "Maksu- ja Tolliamet: maksuvabad finantsteenused (makseteenused käibemaksuta alates 01.07.2022, käibemaksuseaduse § 16 lõige 2¹)", url: "https://www.emta.ee/ariklient/maksud-ja-tasumine/kaibemaks/kaibemaksumaarad-ja-maksuvaba-kaive/maksuvabad-finantsteenused" },
      { label: "Maksu- ja Tolliamet: käibemaksukohustuslasena registreerimine (piirmäär 40 000 €)", url: "https://www.emta.ee/ariklient/maksud-ja-tasumine/kaibemaks/kaibemaksukohustuslasena-registreerimine" },
      { label: "Riigi Teataja: võlaõigusseadus (§ 72⁵ lõiked 7–9: tasu ja allahindlus makseinstrumendi kasutamise eest)", url: "https://www.riigiteataja.ee/akt/V%C3%95S" },
      { label: "EUR-Lex: määrus (EL) 2015/751 kaardipõhiste maksetehingute vahendustasude kohta", url: "https://eur-lex.europa.eu/legal-content/ET/TXT/?uri=CELEX:32015R0751" },
      { label: "Fiscal Requirements (12.06.2023): kuidas on Eestis kassakeskkond reguleeritud (fiskaliseerimise seadust ega kassatarkvara sertifitseerimist ei ole)", url: "https://www.fiscal-requirements.com/news/2308-how-is-the-pos-environment-regulated-in-estonia" },
      { label: "Riigi Teataja: tarbijakaitseseaduse muutmise seadus (§ 4 lõiked 4 ja 4¹: ostu tõendav dokument ja selle andmed)", url: "https://www.riigiteataja.ee/akt/108072025071" },
      { label: "Majandus- ja Kommunikatsiooniministeerium: ostutšekke ei pea enam vaikimisi väljastama (alates 1. septembrist 2025)", url: "https://www.mkm.ee/uudised/keldo-tanasest-raiskame-vahem-paberit-kohustus-ostutsekke-anda-kaob" },
      { label: "Riigi Teataja: alkoholiseadus (§ 44 kassaaparaadi olemasolu ja kasutamise nõue, § 62 vastutus)", url: "https://www.riigiteataja.ee/akt/AS" },
      { label: "Riigikogu: eelnõu 853 SE, alkoholiseaduse ja teiste seaduste muutmise seadus (bürokraatia vähendamine), menetluses", url: "https://www.riigikogu.ee/tegevus/eelnoud/1a1cbc16-5a9a-4c66-bf75-2eef273ede31/alkoholiseaduse-ja-teiste-seaduste-muutmise-seadus-burokraatia-vahendamine/" },
      { label: "Riigikogu: eelnõu 853 SE algtekst (§ 1 punkt 11: uus § 44 „Tehingu fikseerimine“)", url: "https://www.riigikogu.ee/wp-json/riigikogu/v1/files/91c4107a-df52-4a68-9c6f-0e1c0bab5a6c/download" },
      { label: "TTJA: alkoholi müügi nõuded (kassaaparaat, kaardimakseterminal ei asenda kassaaparaati)", url: "https://ttja.ee/ariklient/ettevotlus/tarbijakaitsenouded-tegevusalale/alkohol" },
    ],
    related: [],
  },
];
