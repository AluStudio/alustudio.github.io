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
      { type: "p", text: "Pangaga sõlmitud lepingu korral sõltub kaardimakse teenustasu sinu kokkuleppest: Swedbank, LHV, SEB ja Coop Panga partner Nets teevad igale kaupmehele eraldi pakkumise ning tavalise makseterminali tehingutasu avalikus hinnakirjas ei ole. Avaliku hinnaga lahendustest võtab SumUp ilma kuutasuta 1,69% makse kohta, Maksekeskus 0,95% + 0,02 € ja Swedbanki terminal mobiilis 0,99% + 0,02 €. Teenustasu arvutatakse kogu summalt koos käibemaksuga, kuid see tuleb sinu brutokasumist: kui müüd kauba 31 euroga (25 € ilma käibemaksuta) ja ostsid selle sisse 15 euroga, võtab SumUpi 1,69% sellelt müügilt 0,52 €, ehk 5,2% sinu 10-eurosest brutokasumist." },
      { type: "p", text: "Allpool arvutame samade numbritega läbi, mida iga lahendus maksma läheb, kui palju see kuus kokku teeb, miks kontole laekub vähem raha, kui kassa näitab, ja kas tasu võib kliendi kanda jätta." },

      { type: "h2", text: "Kui palju maksab kaardimakse kaupmehele?" },
      { type: "p", text: "Tabelis on teenusepakkujate Eesti hinnalehtedel avaldatud hinnad, kontrollitud oktoobris 2026. Panga maksekaartide teenindamise lepingus on tehingutasu kokkuleppe küsimus, nii et pankade kohta saab siin näidata ainult tasu koostisosi ja terminali üüri." },
      {
        type: "table",
        head: ["Makseviis", "Tasu kaupmehele", "Hea teada"],
        rows: [
          ["Sularaha", "0", "Tehingutasu ei ole"],
          ["Panga makseterminal (Swedbank, LHV, SEB, Coop Pank ja Nets)", "Vastavalt lepingule", "Pank teeb igale kliendile eraldi pakkumise. Tasu koosneb vahendustasust (Euroopa Majanduspiirkonnas väljastatud eraisikute kaartidel 0,2% deebet- ja 0,3% krediitkaardi puhul), töötlemistasust ja panga teenustasust. Lisaks tuleb maksta terminali üüri, Swedbankis näiteks 13 € kuus + km paikse terminali eest"],
          ["Swedbank, terminal mobiilis (Androidi telefon)", "0,99% + 0,02 €", "Kuutasu ei ole"],
          ["Swedbank, nutiterminal", "1,45%", "Seade tuleb välja osta, 140 € + km"],
          ["Maksekeskus (MakeCommerce)", "0,95% + 0,02 €", "Sama tariif kõigile kaartidele, ka äri- ja EL-i välistele kaartidele. Terminali rent 13 € kuus, Androidi telefonirakendus kuutasuta. Maksekeskuse hinnakirja järgi lisandub hindadele käibemaks"],
          ["SumUp ilma kuutasuta", "1,69%", "Kõigile kaartidele, ka American Expressile ja premium-kaartidele; kaardilugeja ostad ühe korra"],
          ["SumUp Payments Plus", "0,89% EMP tarbijakaartidele, 1,69% äri-, premium- ja EMP välistele kaartidele", "Kuutasu 19 €; SumUpi sõnul tasub ära, kui kaardikäive on vähemalt 2800 € kuus"],
          ["Stripe Terminal", "1,4% + 0,10 € EMP kaartidele", "2,9% + 0,10 € EMP välistele kaartidele"],
        ],
      },
      { type: "p", text: "Apple Pay ja Google Pay ei ole eraldi makseviis oma tasuga: klient maksab telefoni lisatud pangakaardiga ja sina maksad selle kaardi tasu. Seda tasub teada, sest Eesti Panga andmetel tehti 2026. aasta II kvartalis 37% Eesti pankade kaartidega müügikohas tehtud kaardimaksetest digirahakotiga. LHV selgitab, et pangad pakuvad kahte hinnastusmudelit: Interchange++, kus kokku lepitakse ainult panga teenustasu ning vahendus- ja töötlemistasu muutuvad, ja segahinnastamine, kus kõigil kaartidel on üks määr, mõnikord koos fikseeritud summaga tehingu kohta." },
      { type: "note", text: "Käibemaks: makseteenused on alates 1. juulist 2022 käibemaksust vabastatud (käibemaksuseaduse § 16 lõige 2¹), seega tehingutasule käibemaksu üldjuhul ei lisandu. Terminali üür ja ost on käibemaksuga maksustatud; Swedbank ja SumUp näitavad seadmete hindu ilma käibemaksuta. Maksekeskus kirjutab oma hinnakirja juurde, et hindadele lisandub käibemaks, kuid ei ütle, kas see puudutab ka tehingutasu. Vaata oma teenusepakkuja arvelt, millele käibemaksu arvestatakse. Kui oled käibemaksukohustuslane, saad üldjuhul üüri ja seadme sisendkäibemaksu maha arvata." },

      { type: "h2", text: "Teenustasu tuleb brutokasumist, mitte käibest" },
      { type: "p", text: "Teenustasu on protsent summast, mille klient maksab, ehk hinnast koos käibemaksuga. Sinu teenitud raha on aga brutokasum: käibemaksuta müügihind miinus sisseostuhind. Just sellest brutokasumist teenustasu makstakse." },
      { type: "p", text: "Võtame kauba, mille hind on 31 €. Ilma 24% käibemaksuta on see 25 € ja sisseost maksis 15 €. Brutokasum on 10 €:" },
      {
        type: "table",
        caption: "Eurodes. Tasud on ümardatud sendini, osa brutokasumist on arvutatud ümardamata tasust. „Brutokasumist alles“ on enne üüri, palku ja muid kulusid, see ei ole puhaskasum.",
        head: ["", "Sularaha", "SumUp Payments Plus 0,89%", "Maksekeskus 0,95% + 0,02 €", "SumUp 1,69%", "Stripe Terminal 1,4% + 0,10 €"],
        rows: [
          ["Klient maksab", "31,00", "31,00", "31,00", "31,00", "31,00"],
          ["Teenustasu", "0", "0,28", "0,31", "0,52", "0,53"],
          ["Sulle laekub", "31,00", "30,72", "30,69", "30,48", "30,47"],
          ["Sellest käibemaks riigile", "6,00", "6,00", "6,00", "6,00", "6,00"],
          ["Brutokasumist alles", "10,00", "9,72", "9,69", "9,48", "9,47"],
          ["Teenustasu osa brutokasumist", "0%", "2,8%", "3,1%", "5,2%", "5,3%"],
        ],
      },
      { type: "p", text: "Osa saab arvutada ka otse: teenustasu osa brutokasumist = teenustasu määr × 1,24 ÷ marginaal. Marginaal on brutokasum jagatud käibemaksuta müügihinnaga, siin 10 ÷ 25 = 40%, ja 1,24 on hinna suhe koos käibemaksuga ja ilma. SumUpi puhul: 1,69% × 1,24 ÷ 40% = 5,2%. Ära aja marginaali segi juurdehindlusega, mis arvutatakse sisseostuhinnast. Kui sa ei ole käibemaksukohustuslane, sest su käive jääb alla 40 000 € aastas, on hind koos käibemaksuga ja ilma sama ning 1,24 asemel kasutad 1. Vähendatud määraga kauba puhul asenda 1,24 arvuga 1 + sinu käibemaksumäär." },
      {
        type: "table",
        caption: "Teenustasu osa brutokasumist 24% käibemaksu juures, ümardatud ühe kümnendkohani. Fikseeritud tasu tehingu kohta ei ole arvestatud. Kui sa ei ole käibemaksukohustuslane, jaga tabeli arvud 1,24-ga.",
        head: ["Marginaal", "Tasu 0,89%", "Tasu 0,99%", "Tasu 1,45%", "Tasu 1,69%"],
        rows: [
          ["20%", "5,5%", "6,1%", "9,0%", "10,5%"],
          ["30%", "3,7%", "4,1%", "6,0%", "7,0%"],
          ["40%", "2,8%", "3,1%", "4,5%", "5,2%"],
          ["50%", "2,2%", "2,5%", "3,6%", "4,2%"],
          ["60%", "1,8%", "2,0%", "3,0%", "3,5%"],
        ],
      },
      { type: "p", text: "20% marginaali juures võtab 1,69% tasu üle kümnendiku brutokasumist, 60% juures umbes 3,5%. Fikseeritud tasu tehingu kohta mõjub kõige rohkem väikestele ostudele: Stripe'i 0,10 € on 31-eurosest maksest 0,3%, aga 3-eurosest kohvist 3,3%." },

      { type: "h2", text: "Kui palju teeb see kuus? Arvuta oma makseviiside järgi" },
      { type: "p", text: "Kuu tasusid ei saa, kui korrutad kogu käibe ühe määraga: igal makseviisil on oma määr ja sularaha eest tasu ei maksa. Võtame poe, mille kuukäive koos käibemaksuga on 12 000 € ja mis kasutab Maksekeskuse paikset terminali:" },
      {
        type: "table",
        caption: "Eurodes, Maksekeskuse hinnad oktoobrist 2026. Käibe jaotus ja maksete arv on näide. Summad on ilma käibemaksuta. Kui sa ei ole käibemaksukohustuslane, maksad üüri eest koos 24% käibemaksuga 16,12 €; kui Maksekeskus arvestab käibemaksu ka tehingutasult, maksad nende eest 120,90 €. Vaata oma arvelt.",
        head: ["Makseviis", "Kuu käive", "Määr", "Tasu"],
        rows: [
          ["Sularaha", "3000", "0", "0"],
          ["Kaardid ja digirahakotid, 600 makset", "9000", "0,95% + 0,02 € makse kohta", "97,50"],
          ["Terminali üür", "", "13 € kuus", "13,00"],
          ["Kokku", "12 000", "", "110,50"],
        ],
      },
      { type: "p", text: "Pood maksab 110,50 € kuus ehk 1326 € aastas, et võtta kaardiga vastu 9000 € kuus. Sama 9000 € maksaks SumUpiga ilma kuutasuta 152,10 € (1,69%) ja Payments Plusiga 99,10 €, kui kõik kaardid on EMP tarbijakaardid (0,89% ja 19 € kuutasu); äri- ja premium-kaartide eest maksad seal 1,69%. Pangalepingu puhul tee sama arvutus oma lepingu määradega ja lisa terminali üür. Pane tabelisse oma arvud, siis näed, mida maksed just sinu poele maksma lähevad." },

      { type: "h2", text: "Miks laekub kontole vähem raha, kui kassa näitab?" },
      { type: "p", text: "Kassa registreerib summa, mille klient maksis. Pank või makseteenuse pakkuja kannab sulle üle netosumma, millest teenustasud on juba maha arvatud; kui rendid terminali, arvab näiteks Coop Panga partner Nets kord kuus maha ka üüri. Kassa ja laekumiste vahe ongi teenustasu." },
      {
        type: "list",
        items: [
          "Kajasta müük raamatupidamises täissummas ja teenustasu eraldi kuluna, mitte ainult kontole laekunud summat. Nii ei vähene käive sellepärast, et kliendid maksavad kaardiga, ja maksete hind jääb nähtavaks.",
          "Raha ei laeku samal päeval. Swedbank kannab kaardimaksete raha kontole järgmisel hommikul, LHV tehingule järgneva päeva lõunaks, Maksekeskus ja SumUp järgmisel tööpäeval ning Nets tööpäeviti. Kuu lõpus on seega osa käibest alles teel.",
          "Kui teed kliendile tagasimakse, ei saa sa teenustasu alati tagasi: Stripe ei tagasta algse makse tasu. LHV kirjutab, et tagasinõude teenustasu jääb alles ka siis, kui vaidlus lahendatakse sinu kasuks. Teiste pakkujate reeglid on lepingus; küsi enne allkirjastamist.",
        ],
      },

      { type: "h2", text: "Kas kaardimakse eest võib kliendilt lisatasu võtta?" },
      { type: "p", text: "Tavaliste kaartide eest mitte. Võlaõigusseaduse § 72⁵ lõike 9 järgi ei või makse saaja nõuda tasu makseinstrumendi kasutamise eest, kui selle vahendustasud on reguleeritud ELi määruse 2015/751 II peatükis. See hõlmab eraisikute deebet- ja krediitkaarte, millega kliendid poes enamasti maksavad. Euroopa Komisjoni portaal Your Europe võtab selle kauplejale kokku nii: krediit- või deebetkaardiga tehtud makse eest ei tohi lisatasu võtta, ei poes ega internetis." },
      { type: "p", text: "Seadus jätab siiski erandi: kaartide puhul, mida keeld ei hõlma, näiteks ärikaartide puhul, võib lisatasu küsida, kui sinu leping makseteenuse pakkujaga seda lubab. Tasu ei tohi ületada sinu tegelikku kulu ja kliendile tuleb sellest teatada enne makse algatamist (§ 72⁵ lõiked 7 ja 8). Allahindlust, näiteks sularahas maksjatele, võid pakkuda. Kui annad allahindlust mõne makseinstrumendi, näiteks kaardi kasutamise eest, pead sellest kliendile teatama enne makset (§ 72⁵ lõige 8)." },
      { type: "p", text: "Lihtsam on teenustasu hindadesse arvestada. Kui 75% käibest tuleb kaardimaksetest keskmiselt 1% tasuga, tuleb hindu tõsta umbes 0,94%, sest tasu arvutatakse hinnalt koos käibemaksuga, aga hinnatõus annab sulle ainult käibemaksuta summa." },

      { type: "h2", text: "Kas makseviisi vastuvõtmine tasub ära? Tasuvuspunkt" },
      { type: "p", text: "Makseviis maksab teenustasu ja toob müüki, mida ilma selleta poleks olnud. Piir arvutatakse sama valemiga: vajalik lisamüük, osana selle makseviisiga laekunud summast = teenustasu määr × 1,24 ÷ marginaal." },
      { type: "p", text: "40% marginaali ja SumUpi 1,69% juures maksab 1000 € kaardimakseid 16,90 €. Kui 52,39 € sellest müügist (5,24%) tuli ainult sellepärast, et kaardiga sai maksta, katab selle müügi brutokasum kogu teenustasu." },
      { type: "p", text: "Kui klient oleks muidu maksnud sularahas, on tasu puhas kulu. Euroopa Keskpanga 2024. aasta uuringu järgi maksavad Eesti inimesed müügikohtades pangakaardi või nutiseadmega 57% juhtudest ja sularahas 39% juhtudest. Sama uuringu järgi peab 53% Eesti elanikest sularahas maksmise võimalust siiski oluliseks." },

      { type: "h2", text: "Kuidas leida oma tegelik teenustasu määr?" },
      { type: "p", text: "Kõige täpsem number on väljavõttel: jaga kuu teenustasud sama kuu kaardikäibega ja saad oma tegeliku määra. Pane see kirja iga makseviisi kohta, siis näed kiiresti, milline maksab kõige rohkem." },
      { type: "p", text: "ELi määruse 2015/751 järgi peab makseteenuse pakkuja näitama iga kaardimakse summat ja tasusid ning esitama tasud kaardikategooriate ja kaardibrändide kaupa eraldi, kui sa ei ole ise kirjalikult palunud koondhinda. LHV internetipanga kaardimaksete raportis on näiteks iga tehingu juures eraldi vahendustasu (Interchange fee), töötlemistasu (Processing fee) ja panga teenustasu (Charge fee). Lisa kuutasud ja terminali üür ning jaga kõik aasta kaardikäibega. See on sinu kogumäär, ja just seda tasub pakkumiste võrdlemisel kasutada." },

      { type: "h2", text: "Kassanõuded Eestis: kes saab DingPOSi kasutada?" },
      { type: "p", text: "Eestis ei ole tavalisel jaemüügil fiskaalkassa nõuet: seadus ei nõua sertifitseeritud kassaaparaati ega maksuametis registreeritud kassatarkvara, ja müügiandmeid ei pea kassast maksuametile saatma. Kliendile tuleb siiski anda ostu tõendav dokument, kui ta maksab kohe, ja sellel peavad olema vähemalt sinu nimi või ärinimi ja tegevuskoha aadress, kuupäev, iga kauba nimetus ja hind ning tasutud summa (tarbijakaitseseaduse § 4 lõiked 4 ja 4¹). Alates 1. septembrist 2025 ei pea paberil ostutšekki enam vaikimisi trükkima; see tuleb anda, kui klient seda soovib või kui ta maksab sularahas ega kasuta kliendikaarti, mille kaudu ostudokument on hiljem kättesaadav." },
      { type: "p", text: "Alkoholi müük on erand. Kui müüd kaupluses või toitlustusettevõttes alkohoolseid jooke, nõuab alkoholiseaduse § 44, et tegevuskohas oleks kassaaparaat, mille kaudu fikseeritakse kõik alkohoolse joogi jaemüügitehingud. Selle rikkumise eest võib füüsilist isikut trahvida kuni 200 trahviühikuga ja juriidilist isikut kuni 3000 euroga (§ 62). Seadus ei määratle, mis on kassaaparaat, ega nõua sertifikaati; TTJA juhendis on selle kohta öeldud, et kaardimakseterminal kassaaparaati ei asenda. Kas iPadi kassarakendus selle nõude täidab, ei ütle ei seadus ega TTJA juhend." },
      { type: "p", text: "Me ei väida, et [DingPOS](/) alkoholiseaduse § 44 nõuet täidab. Kui müüd alkoholi, ära kasuta DingPOSi § 44 kassaaparaadina ega asenda sellega kassat, millega praegu alkoholimüüki fikseerid, enne kui TTJA on kirjalikult kinnitanud, et selline lahendus sobib. Kas DingPOSi tohib kasutada praeguse kassa kõrval, seadus ei ütle; küsi ka seda TTJA-lt. Seni kasuta selle artikli arvutustes oma praeguse kassa andmeid ja makseteenuse pakkuja väljavõtteid. Riigikogus on menetluses valitsuse eelnõu 853 SE, mis kaotaks kassaaparaadi nõude: algteksti järgi tuleks iga alkoholimüügi tehing fikseerida elektrooniliselt kellaaja täpsusega nii, et tehingutest moodustub muutmatu süsteemne kirje. 25. oktoobri 2026 seisuga on eelnõu esimene lugemine lõpetatud ja § 44 kehtib muutmata kujul." },
      { type: "p", text: "Kui sa alkoholi ei müü, saab DingPOS need arvutused iPadis sinu eest teha. Arvesta, et DingPOS ei prindi ega saada kliendile ostutšekki, nii et ostu tõendava dokumendi pead andma muul viisil. Puuduta jaotises Seaded → Makseviisid makseviisi ja täida Teenustasu: protsent, fikseeritud summa tehingu kohta või mõlemad. Jaotises Aruanded näitab kaart Makseviisid seejärel iga tasuga makseviisi all rida „Teenustasu · Neto“ ning kaardi allservas kogu perioodi hinnangulisi tasusid ja hinnangulist netolaekumist. DingPOS ei töötle makseid ega loe sinu teenusepakkuja väljavõtteid: summad on hinnangud sinu sisestatud määrade põhjal ja tegelik summa on väljavõttel. Neto on laekunud summa, mitte sinu brutokasum: sisseostuhinda ei ole sellest maha arvatud. Täpsemalt loe [Kas DingPOS oskab kaardi- ja mobiilimakse teenustasusid jälgida?](/support/payment-fees/). Funktsioon nõuab paketti Standard või kõrgemat (vaata [Hinnad](/pricing/)) ja DingPOSi saad 30 päeva tasuta proovida." },
    ],
    sources: [
      { label: "Swedbank: kaardimaksete vastuvõtmine müügikohas (terminal mobiilis 0,99% + 0,02 €, nutiterminal 1,45% ja 140 € + km, terminalide üür, komisjonitasu vastavalt kokkuleppele, raha laekub järgmisel hommikul)", url: "https://www.swedbank.ee/business/cash/cashflow/cardservice?language=EST" },
      { label: "LHV: kaardimaksete vastuvõtmise KKK (tasu koostisosad, eraldi pakkumine igale kliendile, raha laekub järgmise päeva lõunaks, raporti väljad, tagasinõude teenustasu)", url: "https://www.lhv.ee/et/kkk/kaardimaksed/" },
      { label: "LHV: maksekaartide teenindamisega seotud indikatiivsed vahendus- ja töötlemistasud (EMP eraisikute deebetkaardid 0,20%, krediitkaardid 0,30%)", url: "https://www.lhv.ee/et/maksekaartide-teenindamise-tasud" },
      { label: "LHV blogi: kuidas kujuneb kaardimaksete hind kaupmehele (Interchange++ ja segahinnastamine)", url: "https://www.lhv.ee/et/blogi/kuidas-kujuneb-kaardimaksete-hind-kaupmehele" },
      { label: "SEB: makseterminalid (personaalne pakkumine)", url: "https://www.seb.ee/ariklient/maksete-kogumine/pos" },
      { label: "Coop Pank: maksete kogumine müügikohas (Nets, maksed laekuvad tööpäeviti netosummana, üür arvatakse maha kord kuus)", url: "https://www.cooppank.ee/ariklient/maksete-kogumine/maksete-kogumine-muugikohas" },
      { label: "Maksekeskus: makseterminalid (0,95% + 0,02 € kõigile kaartidele, rent 13 € kuus, raha laekub järgmisel tööpäeval, hindadele lisandub käibemaks)", url: "https://maksekeskus.ee/service/makseterminalid/" },
      { label: "SumUp: hinnad (1,69% ilma kuutasuta, Payments Plus 19 € kuus ja 0,89%, seadmete hinnad ilma käibemaksuta, järgmise päeva väljamaksed)", url: "https://www.sumup.com/et-ee/hinnad/" },
      { label: "SumUp: Payments Plus (0,89% EMP tarbijakaartidele, 1,69% äri-, premium- ja EMP välistele kaartidele, alates 2800 € kuus)", url: "https://www.sumup.com/et-ee/payments-plus/" },
      { label: "Stripe: hinnad (Terminal 1,4% + 0,10 € EMP kaartidele, 2,9% + 0,10 € muudele kaartidele)", url: "https://stripe.com/en-ee/pricing" },
      { label: "Stripe: tagasimaksed (algse makse tasu ei tagastata)", url: "https://docs.stripe.com/refunds" },
      { label: "Eesti Pank: Maksete ülevaade, august 2026 (digirahakoti maksete osakaal müügikohas 37% 2026. aasta II kvartalis)", url: "https://haldus.eestipank.ee/sites/default/files/2026-09/maksete_ylevaade_august_2026.pdf" },
      { label: "Eesti Pank (14.01.2025): Eestis kasutatakse maksmisel enim digitaalseid maksevahendeid (kaart ja nutiseade 57%, sularaha 39%, sularahas maksmise võimalus oluline 53%-le)", url: "https://www.eestipank.ee/press/uuring-eestis-kasutatakse-maksmisel-enim-digitaalseid-maksevahendeid-14012025" },
      { label: "Maksu- ja Tolliamet: maksuvabad finantsteenused (makseteenused käibemaksuta alates 01.07.2022)", url: "https://www.emta.ee/ariklient/maksud-ja-tasumine/kaibemaks/kaibemaksumaarad-ja-maksuvaba-kaive/maksuvabad-finantsteenused" },
      { label: "Maksu- ja Tolliamet: käibemaksukohustuslasena registreerimine (piirmäär 40 000 €)", url: "https://www.emta.ee/ariklient/maksud-ja-tasumine/kaibemaks/kaibemaksukohustuslasena-registreerimine" },
      { label: "Riigi Teataja: võlaõigusseadus (§ 72⁵ lõiked 7–9: tasu ja allahindlus makseinstrumendi kasutamise eest)", url: "https://www.riigiteataja.ee/akt/V%C3%95S" },
      { label: "Your Europe: elektroonilised ja sularahamaksed ning eeskirjad lisatasude kohta", url: "https://europa.eu/youreurope/business/finance-and-tax/making-receiving-payments/electronic-cash-payments/index_et.htm" },
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
