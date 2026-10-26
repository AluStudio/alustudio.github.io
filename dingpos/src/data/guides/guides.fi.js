// DingPOS guides — fi pack. Guides are acquisition articles written for one
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
//   market   — the market the facts hold for, a key of ui.markets ("FI")
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
// Finland requires no certified or type-approved cash register, but a business
// with over EUR 10,000 turnover must offer a receipt with prescribed contents
// for cash and card sales (laki kuitintarjoamisvelvollisuudesta käteiskaupassa
// 658/2013). DingPOS neither prints nor sends receipts, so no string here may
// present it as meeting the receipt obligation.

export const ui = {
  nav: "Oppaat",
  title: "Oppaat pienille myymälöille",
  subtitle: "Maksut, kulut ja kate: laskelmat, joilla on väliä, kun seisot itse tiskin takana.",
  meta_description: "Oppaita pienen myymälän yrittäjälle: mitä kortti- ja mobiilimaksut maksavat ja paljonko maksukulut vievät katteesta – kaavat, laskuesimerkit ja lähteet.",
  back: "Kaikki oppaat",
  related_title: "Lue myös",
  sources_title: "Lähteet",
  checked: "Tarkistettu viimeksi {{date}}",
  cta_title: "Näe jokaisen maksutavan maksukulut iPadilla",
  cta_text: "DingPOS on iPadin kassasovellus pienille myymälöille: ei provisiota myynnistäsi ja 30 päivän ilmainen kokeilu. Kuitteja se ei vielä tulosta eikä lähetä asiakkaalle.",
  cta_button: "Lataa App Storesta",
  markets: { FI: "Suomi" },
};

export const articles = [
  {
    slug: "payment-processing-fees-finland",
    market: "FI",
    checked: "2026-10-25",
    title: "Korttimaksujen kulut yrittäjälle: mitä maksupääte ja MobilePay maksavat – ja paljonko katteesta lähtee?",
    summary: "Nets SmartPOS veloittaa korttimaksusta 1 %, SumUp 1,49 % ja MobilePay 1,75 %. Kun tuote maksaa 25,10 € ja katetta on 8 €, MobilePayn kulu vie katteesta 5,5 %.",
    content: [
      { type: "p", text: "Korttimaksu maksaa pienelle myymälälle julkisten hinnastojen mukaan 0,79–1,95 % maksun summasta ETA-alueella myönnetyillä korteilla, ja osassa palveluista on lisäksi kuukausimaksu tai kiinteä summa maksua kohden. Netsin SmartPOS-päätteellä kulu on 1 % (pääte 20 € kuukaudessa), SumUpilla 1,49 % ilman kuukausimaksua ja MobilePay-numerolla 1,75 %. Kulu lasketaan koko verollisesta summasta, mutta se maksetaan katteesta: 25,10 euron tuotteessa, josta katetta jää 8 €, Netsin 1 % vie katteesta noin 3 % ja MobilePayn 1,75 % jo 5,5 %." },
      { type: "p", text: "Alla lasketaan samoilla luvuilla kuukauden kulut ja kerrotaan, miksi tilille tulee vähemmän kuin kassa näyttää ja saako kulun periä asiakkaalta." },

      { type: "h2", text: "Mitä korttimaksut ja MobilePay maksavat kauppiaalle?" },
      { type: "p", text: "Hinnat on tarkistettu palveluntarjoajien Suomen hinnastoista lokakuussa 2026." },
      {
        type: "table",
        head: ["Maksutapa", "Kauppiaan maksukulu", "Hyvä tietää"],
        rows: [
          ["Käteinen", "Ei maksukulua", ""],
          ["Korttitilityssopimus (pankki, Nets, Worldline)", "Sopimuksen mukaan", "Ei julkista hintaa. EU rajaa kuluttajakorteissa kortin myöntäjän osuuden 0,2 %:iin (debit) ja 0,3 %:iin (luotto)"],
          ["Nets SmartPOS", "1 % kaikista maksukorteista", "20 € kuukaudessa, sopimusaika 24 kuukautta"],
          ["SumUp", "1,49 %", "Ei kuukausimaksua; sama hinta kaikille korteille"],
          ["SumUp Maksut Plus", "0,79 %", "19 € kuukaudessa; American Express- ja premium-kortit 1,49 %"],
          ["PayPal POS (entinen Zettle)", "1,95 %", "Ei kuukausimaksua"],
          ["Stripe Terminal", "ETA-alueen kortit 1,4 % + 0,10 €", "Muut kortit 2,9 % + 0,10 €"],
          ["MobilePay-numero ja Mobiilikassa", "1,75 %", "Ei kuukausi- eikä aloitusmaksua"],
        ],
      },
      { type: "p", text: "Apple Payssa ja Google Payssa asiakas maksaa puhelimeen tallennetulla kortilla, joten maksat niistä kortin hinnan. Sama koskee MobilePayn lähimaksua maksupäätteelläsi: se veloitetaan sovellukseen lisätyltä kortilta, joten käytännössä maksat päätteesi korttihinnan etkä 1,75 %:a." },
      { type: "note", text: "Arvonlisävero: korttimaksujen välittäminen on yleensä arvonlisäverotonta maksuliikettä, joten sopimuksen prosentti on tavallisesti se, minkä maksat. Verohallinto arvioi asian kuitenkin tapauskohtaisesti, joten tarkista laskusta, onko kuluun lisätty alv. Jos et ole alv-rekisterissä, vero on sinulle osa kulua." },

      { type: "h2", text: "Maksukulu maksetaan katteesta, ei liikevaihdosta" },
      { type: "p", text: "Maksukulu lasketaan verollisesta hinnasta, mutta ansaitset vain katteen: verottoman myyntihinnan ja ostohinnan erotuksen. Esimerkkituote maksaa 25,10 € (ilman 25,5 %:n arvonlisäveroa 20,00 €), ja olet ostanut sen 12,00 eurolla ilman arvonlisäveroa, joten katetta on 8,00 €:" },
      {
        type: "table",
        caption: "Euroina. Kulut on pyöristetty sentteihin, osuus katteesta laskettu pyöristämättömästä kulusta. ”Katetta jäljellä” on ennen vuokraa, palkkoja ja muita kuluja, joten se ei ole voittoa.",
        head: ["", "Käteinen", "Nets SmartPOS 1 %", "SumUp 1,49 %", "MobilePay 1,75 %", "PayPal POS 1,95 %"],
        rows: [
          ["Asiakas maksaa", "25,10", "25,10", "25,10", "25,10", "25,10"],
          ["Maksukulu", "0", "0,25", "0,37", "0,44", "0,49"],
          ["Sinulle tulee", "25,10", "24,85", "24,73", "24,66", "24,61"],
          ["Josta arvonlisävero Verohallinnolle", "5,10", "5,10", "5,10", "5,10", "5,10"],
          ["Katetta jäljellä", "8,00", "7,75", "7,63", "7,56", "7,51"],
          ["Maksukulun osuus katteesta", "0 %", "3,1 %", "4,7 %", "5,5 %", "6,1 %"],
        ],
      },
      { type: "p", text: "Osuuden voi laskea suoraan: maksukulun osuus katteesta = maksukuluprosentti × 1,255 ÷ kateprosentti. Kateprosentti on kate jaettuna verottomalla hinnalla (8 ÷ 20 = 40 %), ja 1,255 on verollisen ja verottoman hinnan suhde. MobilePaylla: 1,75 % × 1,255 ÷ 40 % ≈ 5,5 %. Elintarvikkeissa, joiden arvonlisävero on 13,5 %, kerroin on 1,135, ja jos et ole alv-rekisterissä, kerroin on 1." },
      {
        type: "table",
        caption: "Maksukulun osuus katteesta 25,5 %:n arvonlisäverolla.",
        head: ["Kateprosentti", "Kulu 1 %", "Kulu 1,49 %", "Kulu 1,75 %", "Kulu 1,95 %"],
        rows: [
          ["20 %", "6,3 %", "9,3 %", "11,0 %", "12,2 %"],
          ["30 %", "4,2 %", "6,2 %", "7,3 %", "8,2 %"],
          ["40 %", "3,1 %", "4,7 %", "5,5 %", "6,1 %"],
          ["50 %", "2,5 %", "3,7 %", "4,4 %", "4,9 %"],
          ["60 %", "2,1 %", "3,1 %", "3,7 %", "4,1 %"],
        ],
      },
      { type: "p", text: "Kiinteä summa maksua kohden osuu eniten pieniin ostoksiin: Stripen 0,10 € on 0,4 % 25,10 euron maksusta mutta 2,5 % neljän euron kahvista." },

      { type: "h2", text: "Paljonko maksukuluja kertyy kuukaudessa?" },
      { type: "p", text: "Kuukauden kulut lasketaan maksutavoittain, eikä käteisestä makseta maksukulua. Esimerkkimyymälällä on Netsin SmartPOS-pääte ja MobilePay-numero, ja sen myynti on 10 000 € kuukaudessa arvonlisäveroineen:" },
      {
        type: "table",
        caption: "Euroina. Jakauma on esimerkki. Netsin sivulla ei kerrota, sisältääkö 20 euron kuukausimaksu arvonlisäveron.",
        head: ["Maksutapa", "Myynti kuukaudessa", "Hinta", "Maksukulu"],
        rows: [
          ["Käteinen", "1 000", "0", "0"],
          ["Kortit (Nets SmartPOS)", "8 000", "1 %", "80,00"],
          ["MobilePay-numero", "1 000", "1,75 %", "17,50"],
          ["Maksupäätteen kuukausimaksu", "", "20 € kuukaudessa", "20,00"],
          ["Yhteensä", "10 000", "", "117,50"],
        ],
      },
      { type: "p", text: "Myymälä maksaa noin 118 € kuukaudessa eli noin 1 410 € vuodessa siitä, että se ottaa 9 000 € vastaan digitaalisesti. Sama 8 000 euron korttimyynti maksaisi SumUpilla 119,20 € ja Maksut Plus -tilauksella kuukausimaksuineen 82,20 €, jos joukossa ei ole American Express- tai premium-kortteja. Sijoita taulukkoon omat lukusi." },

      { type: "h2", text: "Miksi tilille tulee vähemmän rahaa kuin kassa näyttää?" },
      { type: "p", text: "Kassa kirjaa sen, minkä asiakas maksoi, mutta palveluntarjoaja tilittää summan, josta maksukulu on jo vähennetty, tai veloittaa kulut erikseen. Matkalla olevien tilitysten ja palautusten lisäksi erotus on pääosin maksukulu." },
      {
        type: "list",
        items: [
          "Kirjaa myynti täysimääräisenä ja maksukulut omaksi kuluksi, niin liikevaihto ei pienene digitaalisten maksujen takia ja näet, mitä maksujen vastaanottaminen maksaa. Sovi kirjaustavasta kirjanpitäjäsi kanssa.",
          "Rahat eivät tule samana päivänä: Nets SmartPOS tilittää seuraavana pankkipäivänä ja MobilePay esimerkiksi maanantain maksut keskiviikkona.",
          "Palautuksessa et välttämättä saa maksukulua takaisin: Stripe ei palauta alkuperäisen maksun kuluja, ellei palautusta käsitellä peruutuksena pian maksun jälkeen. Kysy käytäntö ennen sopimusta.",
        ],
      },

      { type: "h2", text: "Saako korttimaksusta periä lisämaksua?" },
      { type: "p", text: "Tavallisimmista korteista ei. Maksupalvelulaki kieltää lisämaksun korteista, joiden siirtohinnoista säädetään EU:n siirtohinta-asetuksessa. Kilpailu- ja kuluttajaviraston (KKV) mukaan kielto koskee kuluttajien yleisimpiä kortteja, kuten Visaa ja Mastercardia, kun sekä maksajan että maksunsaajan maksupalveluntarjoaja on EU:ssa. Apple Payssa ja Google Payssa maksetaan kortilla, joten kielto koskee käytännössä niitäkin." },
      { type: "p", text: "Yrityskorteista, American Expressin kaltaisista korteista ja EU:n ulkopuolella myönnetyistä korteista lisämaksu voi joissain tapauksissa olla sallittu. Silloinkin se saa olla enintään todelliset kustannuksesi, ainakin yhden yleisen maksutavan on oltava ilman lisämaksua, ja siitä on kerrottava selvästi etukäteen. MobilePayta KKV ei mainitse, mutta kortilta veloitettuun maksuun kielto todennäköisesti pätee, eikä kassalla näe, mistä maksu veloitetaan. Turvallisinta on jättää lisämaksu perimättä." },
      { type: "p", text: "Yksinkertaisinta on kuitenkin laskea maksukulut hintoihin. Jos 90 % asiakkaistasi maksaa digitaalisesti keskimäärin 1,2 %:n kululla, hintoja on nostettava noin 1,4 %, koska kulu lasketaan verollisesta hinnasta mutta korotuksesta jää sinulle vain veroton osa." },

      { type: "h2", text: "Kannattaako ottaa uusi maksutapa käyttöön?" },
      { type: "p", text: "Maksutapa maksaa maksukulun ja tuo ne kaupat, jotka ilman sitä olisivat jääneet syntymättä. Raja lasketaan samalla kaavalla: tarvittava lisämyynti osuutena kyseisellä maksutavalla maksetusta myynnistä = maksukuluprosentti × 1,255 ÷ kateprosentti." },
      { type: "p", text: "Kun kateprosentti on 40 ja MobilePay maksaa 1,75 %, 10 000 euron MobilePay-myynnistä menee kuluihin 175 €. Jos siitä 549,06 € (5,5 %) syntyi vain siksi, että asiakas pystyi maksamaan MobilePaylla, näiden kauppojen kate kattaa koko kulun. Netsin 1 %:n korttimaksulla raja on 3,1 % eli 313,75 € samasta summasta. Jos asiakas olisi muuten maksanut kortilla, MobilePay on vain kalliimpi tapa ottaa sama raha vastaan: ero Netsin 1 %:iin on 0,75 prosenttiyksikköä." },

      { type: "h2", text: "Näin selvität todellisen maksukuluprosenttisi ja seuraat kuluja" },
      { type: "p", text: "Tarkin luku on tilitysraportissasi: jaa kuukauden maksukulut samalla maksutavalla samassa kuussa maksetulla myynnillä, niin saat todellisen prosenttisi. EU-asetuksen mukaan kulut on eriteltävä korttiluokittain ja -merkeittäin, ellet ole kirjallisesti pyytänyt yhtä hintaa. Tarjousten vertailuun laske vuoden maksukulut ja kuukausimaksut yhteen ja jaa summa vuoden korttimyynnillä." },
      { type: "p", text: "Jos kirjaat myynnit iPadilla, [DingPOS](/) voi arvioida kulut puolestasi. Kohdassa Asetukset → Maksutavat napautat maksutapaa ja täytät kohdan Maksukulu: prosenttiosuus, kiinteä summa tapahtumaa kohden tai molemmat. Syötä määrä, jonka maksupalvelusi todella vähentää, mahdollinen arvonlisävero mukaan lukien." },
      { type: "p", text: "Sen jälkeen Tilastot-välilehden Maksutavat-kortissa näkyy:" },
      {
        type: "list",
        items: [
          "jokaisen maksukulullisen maksutavan alla rivi ”Maksukulu · Netto”: maksutavan arvioitu maksukulu ja arvioitu nettotulo",
          "kortin alareunassa koko jakson arvioidut maksukulut ja arvioitu nettotulo",
          "jos maksuja on vastaanotettu ennen kuin maksutavalla oli määrä, merkintä ”N ilman maksukulun määrää”, ja nettotulo näkyy muodossa ”—”",
        ],
      },
      { type: "p", text: "Luvut ovat arvioita syöttämiesi määrien perusteella: DingPOS ei käsittele maksuja eikä lue tilitysraporttejasi, joten todellinen summa on maksupalvelusi tiliotteella. Arvioitu nettotulo on vastaanotettu summa miinus arvioitu maksukulu, ei katteesi. Lisätietoa artikkelissa [Voiko DingPOS seurata kortti- ja mobiilimaksujen maksukuluja?](/support/payment-fees/). Toiminto vaatii Standard-paketin tai sitä ylemmän (katso [Hinnoittelu](/pricing/)), ja DingPOSia voi kokeilla 30 päivää ilmaiseksi." },
      { type: "note", text: "Kuitti: sertifioitua kassajärjestelmää ei Suomessa vaadita, ja Verohallinnon mukaan kassakone ei ole pakollinen. Jos tilikauden liikevaihtosi on yli 10 000 €, kuitti on kuitenkin tarjottava myös korttimaksusta, ja siinä on oltava muun muassa y-tunnus, myydyt tavarat ja arvonlisävero verokannoittain; pelkkä maksupäätteen kuitti ei riitä. Laki ei koske esimerkiksi automaattimyyntiä, ulkotorikauppaa eikä verkkokauppaa. DingPOS ei tällä hetkellä tulosta eikä lähetä kuittia (katso [kuittitulostuksen tilanne](/support/roadmap-e-invoice/)), joten jos velvollisuus koskee sinua, tarvitset kuitteihin toisen ratkaisun." },
    ],
    sources: [
      { label: "Nets: SmartPOS (20 €/kk, sopimusaika 24 kk, 1 % kaikista maksukorteista, tilitys seuraavana pankkipäivänä)", url: "https://payments.nets.eu/fi-FI/smartpos" },
      { label: "SumUp: hinnoittelu (1,49 % ilman kuukausimaksua; Maksut Plus 19 €/kk ja 0,79 %, American Express- ja premium-kortit 1,49 %)", url: "https://www.sumup.com/fi-fi/hinnoittelu/" },
      { label: "PayPal POS (Zettle): hinnat ja maksupalkkiot (1,95 % korteista ja mobiililompakoista)", url: "https://www.zettle.com/fi/hinnoittelustamme" },
      { label: "Stripe: hinnat (Terminal 1,4 % + 0,10 € ETA-kortit, 2,9 % + 0,10 € muut kortit)", url: "https://stripe.com/en-fi/pricing" },
      { label: "Stripe: palautukset (alkuperäisen maksun kuluja ei palauteta, paitsi peruutuksessa)", url: "https://docs.stripe.com/refunds" },
      { label: "Vipps MobilePay: MobilePay-numero (ei kuukausi- eikä aloituskuluja)", url: "https://vippsmobilepay.com/fi-FI/mobilepay-numero" },
      { label: "Vipps MobilePay: hinnat yrityksille (MobilePay-numero ja Mobiilikassa 1,75 %)", url: "https://vippsmobilepay.com/fi-FI/for-business" },
      { label: "MobilePay (24.4.2025): Mobiilikassa ottaa vastaan kortti-, MobilePay- ja käteismaksuja ilman aloitus- ja kuukausimaksuja", url: "https://www.mobilepay.fi/news/mobiilikassa" },
      { label: "MobilePay: Täppää MobilePaylla (lähimaksu maksupäätteellä sovellukseen lisätyllä kortilla)", url: "https://mobilepay.fi/lahimaksaminen" },
      { label: "Vipps MobilePay tuki: Milloin teette tilityksen minulle? (maanantain maksut keskiviikkona)", url: "https://help.vippsmobilepay.com/fi-FI/articles/when-will-i-receive-settlement" },
      { label: "Kilpailu- ja kuluttajavirasto: Lisämaksut ja alennus maksutavan perusteella", url: "https://www.kkv.fi/kuluttaja-asiat/luotot-ja-maksaminen/maksaminen/lisamaksut-ja-alennus-maksutavan-perusteella/" },
      { label: "Kilpailu- ja kuluttajavirasto: kuluttaja-asiamiehen linjaus maksamisesta ja laskutuksesta (lisämaksut, maksupalvelulain 60 §)", url: "https://www.kkv.fi/kuluttaja-asiat/tietoa-ja-ohjeita-yrityksille/kuluttaja-asiamiehen-linjaukset/maksaminen-ja-laskutus/" },
      { label: "Finlex: Maksupalvelulaki 290/2010 (46 § lisämaksukielto, 60 § lisämaksun enimmäismäärä)", url: "https://www.finlex.fi/fi/lainsaadanto/2010/290" },
      { label: "EUR-Lex: Asetus (EU) 2015/751 korttimaksujen siirtohinnoista (3 ja 4 artikla siirtohintakatot, 1 artiklan 3 ja 5 kohta, 9 artikla kulujen erittely)", url: "https://eur-lex.europa.eu/legal-content/FI/TXT/?uri=CELEX:32015R0751" },
      { label: "Verohallinto: Rahoituspalvelut arvonlisäverotuksessa (maksuliike on arvonlisäverotonta, AVL 41 ja 42 §; arvioidaan tapauskohtaisesti)", url: "https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/333399/rahoituspalvelut-arvonlisaverotuksessa/" },
      { label: "Verohallinto: Arvonlisäveroprosentit (yleinen 25,5 %, alennettu 13,5 % vuodesta 2026)", url: "https://www.vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/arvonlisaverotus/arvonlisaveroprosentit/" },
      { label: "Verohallinto: Pelaa reilusti – muista kuitti (kuitti myös korttimaksusta, kassakone ei ole pakollinen)", url: "https://www.vero.fi/yritykset-ja-yhteisot/yhteistyo-ja-palvelut/verotarkastus-ja-harmaa-talous/kuitinantovelvollisuus-harmaan-talouden-torjunnassa/pelaa-reilusti-muista-kuitti/" },
      { label: "Finlex: Laki kuitintarjoamisvelvollisuudesta käteiskaupassa 658/2013 (2 § liikevaihtoraja, 3 § poikkeukset, 4 § kuitin tiedot)", url: "https://www.finlex.fi/fi/lainsaadanto/2013/658" },
    ],
    related: [],
  },
];
