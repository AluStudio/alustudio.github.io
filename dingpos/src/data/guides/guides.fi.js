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
      { type: "p", text: "Korttimaksun vastaanottaminen maksaa pienelle myymälälle julkisten hinnastojen mukaan ETA-alueella myönnetyillä korteilla 0,79–1,95 % maksun summasta, ja osassa palveluista on lisäksi kuukausimaksu tai kiinteä summa maksua kohden. Netsin SmartPOS-maksupäätteellä kulu on 1 % kaikista korteista ja pääte maksaa 20 euroa kuukaudessa, SumUp veloittaa 1,49 % ilman kuukausimaksua ja PayPal POS (entinen Zettle) 1,95 %. MobilePay-numerolla tai Mobiilikassalla vastaanotettu maksu maksaa 1,75 %. Kulu lasketaan koko verollisesta summasta, mutta se maksetaan katteesta: kun myyt 25,10 euron tuotteen (20,00 € ilman arvonlisäveroa), jonka olet ostanut 12,00 eurolla, 1 prosentin kulu on 0,25 € eli noin 3 % kahdeksan euron katteesta, ja MobilePayn 1,75 % vie katteesta 5,5 %." },
      { type: "p", text: "Alla lasketaan samoilla luvuilla, mitä kukin maksutapa maksaa, paljonko kuluja kertyy kuukaudessa, miksi tilille tulee vähemmän kuin kassa näyttää ja saako kulun siirtää asiakkaan maksettavaksi." },

      { type: "h2", text: "Mitä korttimaksut ja MobilePay maksavat kauppiaalle?" },
      { type: "p", text: "Taulukon hinnat ovat palveluntarjoajien omilta Suomen hinnastosivuilta, ja ne on tarkistettu lokakuussa 2026. Jos sinulla on korttitilityssopimus pankin, Netsin tai Worldlinen kanssa, maksat sopimuksessa sovitun hinnan." },
      {
        type: "table",
        head: ["Maksutapa", "Kauppiaan maksukulu", "Hyvä tietää"],
        rows: [
          ["Käteinen", "Ei maksukulua", "Kuitti on tarjottava myös käteismaksusta, jos liikevaihtosi on yli 10 000 € (katso alempaa)"],
          ["Visa ja Mastercard räätälöidyllä korttitilityssopimuksella (pankki, Nets, Worldline)", "Sopimuksen mukaan", "Perinteisille tilityssopimuksille ei ole julkista hintaa. EU on rajannut kuluttajakorttien siirtohinnan, eli kortin myöntäjälle menevän osuuden, 0,2 %:iin debit- ja 0,3 %:iin luottokorteissa; loput hinnasta päättää palveluntarjoaja. Worldlinen maksupäätteet maksavat 5–19 € kuukaudessa, puhelinratkaisu 0 €"],
          ["Nets SmartPOS", "1 % kaikista maksukorteista", "20 € kuukaudessa, sopimusaika 24 kuukautta; tilitys seuraavana pankkipäivänä"],
          ["Nets Softpay (Android-puhelin)", "1,25 % pankki- ja luottokorteista", "5,90 € kuukaudessa, sopimusaika 12 kuukautta; Visa ja Mastercard. Palautukset ja hyvitykset sisältyvät hintaan"],
          ["SumUp", "1,49 %", "Ei kuukausimaksua; sama hinta kaikille korteille, myös American Expressille ja premium-korteille. Kortinlukija ostetaan kerran"],
          ["SumUp Maksut Plus", "0,79 %", "19 € kuukaudessa; American Express- ja premium-kortit 1,49 %. SumUpin mukaan tilaus kannattaa, kun korttimyyntiä on vähintään 2 900 € kuukaudessa"],
          ["PayPal POS (entinen Zettle)", "1,95 %", "Sama hinta yleisimmille korteille ja mobiililompakoille, myös American Expressille; ei kuukausimaksua"],
          ["Stripe Terminal", "1,4 % + 0,10 € ETA-alueen korteista", "2,9 % + 0,10 € ETA-alueen ulkopuolisista korteista; Tap to Pay -toiminnolla 0,10 € lisää jokaisesta autorisoinnista"],
          ["MobilePay-numero ja Mobiilikassa", "1,75 %", "Ei kuukausi- eikä aloitusmaksua. Asiakas voi maksaa MobilePaylla tai kortilla, ja hinnaston mukaan tapahtuma maksaa 1,75 %. Jos MobilePay on liitetty kassajärjestelmään, hinnan kertoo kassajärjestelmän toimittaja"],
          ["Epassi (henkilöstöedut)", "Lounas 3,7 %, liikunta ja kulttuuri 5 %, lisäksi arvonlisävero", "Hinnasto 1.9.2026 alkaen. Lisäksi 2,50 € kuukaudessa jokaiselta toimipisteeltä, jossa on ollut yli 50 € myyntiä. Koskee vain palveluja, joihin etua voi käyttää"],
        ],
      },
      { type: "p", text: "Apple Pay ja Google Pay eivät ole oma maksutapansa omine kuluineen: asiakas maksaa puhelimeen tallennetulla kortilla, ja sinä maksat kortin hinnan. Sama koskee MobilePayn lähimaksua. Kun asiakas maksaa MobilePaylla lähimaksuna maksupäätteelläsi, maksu tehdään sovellukseen lisätyllä Visa- tai Mastercard-kortilla, joten käytännössä maksat siitä maksupäätteesi sopimuksen mukaisen korttihinnan etkä MobilePay-numeron 1,75 %:a. Kotimaista korttijärjestelmää Suomessa ei enää ole: Suomen Pankin johtokunnan jäsenen Tuomas Välimäen mukaan korttimaksut kulkevat käytännössä Visan ja Mastercardin järjestelmissä, maksettiinpa debit- tai luottokortilla." },
      { type: "note", text: "Arvonlisävero: Korttimaksujen välittäminen on yleensä maksuliikettä, josta ei makseta arvonlisäveroa (arvonlisäverolain 41 ja 42 §), joten sopimuksessa oleva prosentti on tavallisesti se, minkä maksat. Verohallinnon mukaan asia arvioidaan kuitenkin tapauskohtaisesti, joten tarkista palveluntarjoajasi laskusta, onko kuluun lisätty arvonlisävero. Maksupäätteen vuokra ja laitteet ovat arvonlisäverollisia; Keskusverolautakunnan ennakkoratkaisussa maksupalvelua ja päätteen vuokraa verotettiin erikseen. Epassin palvelumaksuihin lisätään arvonlisävero. Alv-rekisterissä oleva yritys vähentää laskujen arvonlisäveron. Jos liikevaihtosi on enintään 20 000 euroa sekä kuluvana että edellisenä kalenterivuonna etkä ole hakeutunut alv-rekisteriin, arvonlisävero on sinulle osa kulua." },

      { type: "h2", text: "Maksukulu maksetaan katteesta, ei liikevaihdosta" },
      { type: "p", text: "Maksukulu on prosentti siitä, mitä asiakas maksaa, eli verollisesta hinnasta. Itse ansaitset kuitenkin vain katteen: verottoman myyntihinnan ja ostohinnan erotuksen. Juuri tästä katteesta maksukulu maksetaan." },
      { type: "p", text: "Otetaan esimerkiksi tuote, jonka hinta on 25,10 €. Ilman 25,5 %:n arvonlisäveroa hinta on 20,00 €, ja olet ostanut tuotteen 12,00 eurolla ilman arvonlisäveroa. Katetta on 8,00 €:" },
      {
        type: "table",
        caption: "Euroina. Maksukulut on pyöristetty sentteihin, osuus katteesta on laskettu pyöristämättömästä kulusta. ”Katetta jäljellä” on ennen vuokraa, palkkoja ja muita kuluja, joten se ei ole voittoa.",
        head: ["", "Käteinen", "SumUp Maksut Plus 0,79 %", "Nets SmartPOS 1 %", "SumUp 1,49 %", "MobilePay 1,75 %", "PayPal POS 1,95 %"],
        rows: [
          ["Asiakas maksaa", "25,10", "25,10", "25,10", "25,10", "25,10", "25,10"],
          ["Maksukulu", "0", "0,20", "0,25", "0,37", "0,44", "0,49"],
          ["Sinulle tulee", "25,10", "24,90", "24,85", "24,73", "24,66", "24,61"],
          ["Josta arvonlisävero Verohallinnolle", "5,10", "5,10", "5,10", "5,10", "5,10", "5,10"],
          ["Katetta jäljellä", "8,00", "7,80", "7,75", "7,63", "7,56", "7,51"],
          ["Maksukulun osuus katteesta", "0 %", "2,5 %", "3,1 %", "4,7 %", "5,5 %", "6,1 %"],
        ],
      },
      { type: "p", text: "Osuuden voi laskea suoraan: maksukulun osuus katteesta = maksukuluprosentti × 1,255 ÷ kateprosentti. Kateprosentti on kate jaettuna verottomalla myyntihinnalla, tässä 8 ÷ 20 = 40 %, ja 1,255 on verollisen ja verottoman hinnan suhde. MobilePaylla laskettuna: 1,75 % × 1,255 ÷ 40 % ≈ 5,5 %. Elintarvikkeissa, joiden arvonlisävero on 13,5 %, kerroin on 1,135. Jos et ole alv-rekisterissä, verollinen ja veroton hinta ovat samat, ja kerroin on 1." },
      {
        type: "table",
        caption: "Maksukulun osuus katteesta 25,5 %:n arvonlisäverolla, yhden desimaalin tarkkuudella.",
        head: ["Kateprosentti", "Kulu 0,79 %", "Kulu 1 %", "Kulu 1,49 %", "Kulu 1,75 %", "Kulu 1,95 %"],
        rows: [
          ["20 %", "5,0 %", "6,3 %", "9,3 %", "11,0 %", "12,2 %"],
          ["30 %", "3,3 %", "4,2 %", "6,2 %", "7,3 %", "8,2 %"],
          ["40 %", "2,5 %", "3,1 %", "4,7 %", "5,5 %", "6,1 %"],
          ["50 %", "2,0 %", "2,5 %", "3,7 %", "4,4 %", "4,9 %"],
          ["60 %", "1,7 %", "2,1 %", "3,1 %", "3,7 %", "4,1 %"],
        ],
      },
      { type: "p", text: "Jos kateprosenttisi on 20, 1,95 prosentin kulu vie katteesta yli kymmenesosan; 60 prosentin katteella sama kulu vie noin 4 %. Kiinteä summa maksua kohden osuu eniten pieniin ostoksiin: Stripen 0,10 € on 0,4 % 25,10 euron maksusta mutta 2,5 % neljän euron kahvista." },

      { type: "h2", text: "Paljonko maksukuluja kertyy kuukaudessa? Laske oman maksutapajakaumasi mukaan" },
      { type: "p", text: "Kuukauden maksukuluja ei saa kertomalla koko myyntiä yhdellä prosentilla. Jokaisella maksutavalla on oma hintansa, eikä käteisestä makseta maksukulua. Otetaan esimerkiksi myymälä, jolla on Netsin SmartPOS-pääte ja MobilePay-numero ja jonka myynti on 10 000 € kuukaudessa arvonlisäveroineen:" },
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
      { type: "p", text: "Myymälä maksaa noin 118 € kuukaudessa eli noin 1 410 € vuodessa siitä, että se ottaa 9 000 € vastaan digitaalisesti. Sama 8 000 euron korttimyynti maksaisi SumUpilla ilman kuukausimaksua 119,20 € (1,49 %) ja Maksut Plus -tilauksella 82,20 € (0,79 % ja 19 € kuukausimaksu), jos kaikki kortit ovat tavallisia kortteja eivätkä American Express- tai premium-kortteja. Sijoita taulukkoon omat lukusi, niin näet, mitä maksujen vastaanottaminen maksaa juuri sinun myymälällesi." },

      { type: "h2", text: "Miksi tilille tulee vähemmän rahaa kuin kassa näyttää?" },
      { type: "p", text: "Kassa kirjaa sen, minkä asiakas maksoi. Palveluntarjoaja tilittää sinulle summan, josta maksukulu on jo vähennetty, tai veloittaa kulut erikseen, esimerkiksi kerran kuukaudessa. Kun matkalla olevat tilitykset ja palautukset on otettu huomioon, kassan ja tilitysten erotus on pääosin maksukulu." },
      {
        type: "list",
        items: [
          "Kirjaa myynti täysimääräisenä ja maksukulut omaksi kuluksi sen sijaan, että kirjaisit myynniksi vain tilille tulleen summan. Silloin liikevaihto ei pienene sen takia, että yhä useampi maksaa digitaalisesti, ja näet, paljonko maksujen vastaanottaminen maksaa. Kirjaustavasta kannattaa sopia kirjanpitäjäsi kanssa.",
          "Rahat eivät tule samana päivänä. Nets tilittää SmartPOS- ja Softpay-maksut seuraavana pankkipäivänä. SumUp tilittää seuraavana päivänä klo 7 SumUpin yritystilille, myös viikonloppuisin ja arkipyhinä, tai pankkitilillesi yleensä 1–3 arkipäivässä. PayPal POS tilittää PayPal-yritystilille yleensä minuuteissa, ja siirrot omaan pankkiin ovat maksuttomia. MobilePay tilittää maanantain maksut keskiviikkona ja perjantain maksut tiistaina, ja tilitysvälin voi valita päivittäiseksi, viikoittaiseksi tai kuukausittaiseksi. Epassi tilittää neljästi kuussa, ja rahat näkyvät tilillä yleensä 2–3 arkipäivän kuluessa tilityspäivästä. Kuun vaihteessa osa myynnistä on siis vielä matkalla.",
          "Kun palautat asiakkaalle rahaa, et välttämättä saa maksukulua takaisin: Stripe ei palauta alkuperäisen maksun kuluja, ellei palautusta käsitellä peruutuksena pian maksun jälkeen. Netsin Softpayssa palautukset sisältyvät hintaan. Muiden palveluntarjoajien käytäntö on niiden ehdoissa, joten kysy asiasta ennen kuin teet sopimuksen.",
        ],
      },

      { type: "h2", text: "Saako korttimaksusta periä lisämaksua?" },
      { type: "p", text: "Tavallisimmista korteista ei. Maksupalvelulain 46 §:n mukaan maksunsaaja ei saa periä maksua sellaisten maksuvälineiden käytöstä, joiden siirtohinnoista säädetään EU:n siirtohinta-asetuksessa, eikä SEPA-tilisiirroista tai -suoraveloituksista. Kilpailu- ja kuluttajaviraston mukaan kielto koskee kuluttajien yleisimpiä kortteja, kuten Visa- ja Mastercard-kortteja, kun sekä maksajan että maksunsaajan maksupalveluntarjoaja on EU:ssa. Apple Payssa ja Google Payssa maksetaan puhelimeen tallennetulla kortilla, joten kielto koskee käytännössä niitäkin." },
      { type: "p", text: "Siirtohinta-asetuksen hintakatot eivät koske yrityskortteja eivätkä American Expressin kaltaisten kolmen osapuolen korttijärjestelmien kortteja, joten niistä lisämaksun periminen voi olla sallittua, samoin EU:n ulkopuolella myönnetyistä korteista. Jos kolmen osapuolen järjestelmä antaa muiden pankkien myöntää korttejaan, asetusta ja kieltoa voidaan kuitenkin soveltaa niihinkin. Kun lisämaksu on sallittu, sen on oltava asianmukainen eikä se saa ylittää sinulle aiheutuvia todellisia kustannuksia (maksupalvelulain 60 §), tarjolla on oltava ainakin yksi yleisesti käytetty maksutapa ilman lisämaksua, ja lisämaksusta on kerrottava selvästi etukäteen samassa yhteydessä, jossa kerrot maksutavan hyväksymisestä. MobilePayta KKV ei mainitse erikseen. Jos MobilePay-maksu veloitetaan asiakkaan Visa- tai Mastercard-kortilta, kielto koskee sitä todennäköisesti samalla tavalla, eikä kassalla näe, mistä maksu veloitetaan. Turvallisinta on jättää lisämaksu perimättä." },
      { type: "p", text: "Alennuksen antaminen maksutavan perusteella on KKV:n mukaan yleensä sallittua, kunhan luotolla maksamisesta ei anneta alennusta käteishintaan verrattuna. Yksinkertaisinta on kuitenkin laskea maksukulut hintoihin. Jos 90 % asiakkaistasi maksaa digitaalisesti keskimäärin 1,2 %:n kululla, hintoja on nostettava noin 1,4 %, koska kulu lasketaan verollisesta hinnasta mutta korotuksesta jää sinulle vain veroton osa." },

      { type: "h2", text: "Kannattaako ottaa uusi maksutapa käyttöön? Näin lasket kannattavuusrajan" },
      { type: "p", text: "Maksutapa maksaa maksukulun ja tuo ne kaupat, jotka ilman sitä olisivat jääneet syntymättä. Raja lasketaan samalla kaavalla: tarvittava lisämyynti osuutena kyseisellä maksutavalla maksetusta myynnistä = maksukuluprosentti × 1,255 ÷ kateprosentti." },
      { type: "p", text: "Kun kateprosentti on 40 ja MobilePay maksaa 1,75 %, 10 000 euron MobilePay-myynnistä menee kuluihin 175 €. Jos siitä 549,06 € (5,5 %) syntyi vain siksi, että asiakas pystyi maksamaan MobilePaylla, näiden kauppojen kate kattaa koko kulun. Netsin 1 %:n korttimaksulla raja on 3,1 % eli 313,75 € samasta summasta." },
      { type: "p", text: "Jos asiakas olisi muuten maksanut kortilla, MobilePay on sinulle vain kalliimpi tapa ottaa sama raha vastaan: SmartPOS-päätteen 1 %:iin verrattuna ero on 0,75 prosenttiyksikköä. Käteistä taas käyttää Välimäen mukaan pääasiallisena maksuvälineenään enää noin kymmenesosa kuluttajista. Laki ei velvoita ottamaan käteistä aina vastaan; KKV:n mukaan pankkitiliin liitetyllä maksukortilla maksaminen on useimmiten riittävä vaihtoehto käteiselle. Jos et ota käteistä vastaan, kerro siitä asiakkaalle selvästi etukäteen." },

      { type: "h2", text: "Näin selvität todellisen maksukuluprosenttisi" },
      { type: "p", text: "Tarkin luku on tilitysraportissasi: jaa kuukauden maksukulut samalla maksutavalla samassa kuussa maksetulla myynnillä, niin saat todellisen prosenttisi. Merkitse se muistiin jokaisesta maksutavasta, niin näet nopeasti, mikä on kallein." },
      { type: "p", text: "EU:n siirtohinta-asetuksen mukaan palveluntarjoajan on kerrottava jokaisesta korttimaksusta sen summa ja kulut, ja sen on veloitettava kulut eriteltyinä korttiluokittain ja -merkeittäin, ellet ole kirjallisesti pyytänyt yhtä yhteistä hintaa; tiedot voidaan koota yhteen, jos olet antanut siihen suostumuksesi. Lisää vuoden vertailuun päätteen vuokra ja muut kuukausimaksut ja jaa kaikki vuoden korttimyynnillä. Näin saat kokonaisprosentin, jolla tarjouksia kannattaa vertailla." },

      { type: "h2", text: "Tarvitaanko Suomessa sertifioitu kassajärjestelmä, ja mitä kuitissa pitää olla?" },
      { type: "p", text: "Ei tarvita. Verohallinnon mukaan kassakone ei ole pakollinen, ja kuitin saa kirjoittaa myös käsin, joten myöskään sertifioitua tai tyyppihyväksyttyä kassajärjestelmää ei vaadita. Verohallinnon harmaan talouden selvitysyksikkö selvitti vuonna 2018 niin sanottujen fiskaalisten kassajärjestelmien käyttöönottoa Suomessa, mutta voimassa oleva kuittilaki koskee vain kuittia, ei kassalaitetta." },
      { type: "p", text: "Kuitti sen sijaan on tarjottava. Laki kuitintarjoamisvelvollisuudesta käteiskaupassa koskee yritystä, jonka tilikauden liikevaihto on yli 10 000 €. Kuitti on tarjottava, kun asiakas maksaa käteisellä tai siihen rinnastettavalla tavalla, Verohallinnon mukaan myös maksukortilla. Kuitti voi olla tulostettu, käsin kirjoitettu tai sähköinen, ja siinä on oltava yrityksen nimi, yhteystiedot ja y-tunnus, kuitin antopäivä ja tunnistenumero, myytyjen tavaroiden määrä ja laji tai palvelujen laji sekä maksu ja arvonlisävero verokannoittain. Pelkkä maksupäätteen kuitti, jossa näkyy vain summa, ei siis riitä. Laki ei koske esimerkiksi automaattimyyntiä, ulkotiloissa käytävää tori- ja markkinakauppaa (alkoholin myyntiä ja anniskelua lukuun ottamatta) eikä verkkokauppaa. Laiminlyönnistä voidaan määrätä 300–1 000 euron laiminlyöntimaksu." },

      { type: "h2", text: "Maksukulujen seuranta DingPOSilla" },
      { type: "p", text: "[DingPOS](/) laskee maksukulut puolestasi iPadilla. Kohdassa Asetukset → Maksutavat napautat maksutapaa ja täytät Maksukulu-kentän: prosenttiosuus, kiinteä summa tapahtumaa kohden tai molemmat. Syötä määrä, jonka maksupalvelusi todella vähentää, mahdollinen arvonlisävero mukaan lukien. Tilastot-välilehden Maksutavat-kortti näyttää sen jälkeen jokaisen maksukulullisen maksutavan alla rivin ”Maksukulu · Netto” ja kortin alareunassa koko jakson arvioidut maksukulut ja arvioidun nettotulon. DingPOS ei käsittele maksuja eikä näe palveluntarjoajasi tilitysraportteja: summat ovat arvioita syöttämiesi määrien perusteella, ja todellinen summa näkyy tiliotteella. Arvioitu nettotulo on vastaanotettu summa miinus arvioitu maksukulu, eli se, mitä tilillesi tulee. Se ei ole katteesi, sillä ostohintaa ei ole vähennetty." },
      { type: "p", text: "DingPOS ei tällä hetkellä tulosta eikä lähetä asiakkaalle kuittia (katso [Tuleeko tuki sähköisille laskuille ja kuittitulostukselle?](/support/roadmap-e-invoice/)), joten jos kuitintarjoamisvelvollisuus koskee sinua, tarvitset kuitteihin toisen ratkaisun. Maksukuluista kerrotaan tarkemmin artikkelissa [Voiko DingPOS seurata kortti- ja mobiilimaksujen maksukuluja?](/support/payment-fees/). Toiminto vaatii Standard-paketin tai sitä ylemmän (katso [Hinnoittelu](/pricing/)), ja DingPOSia voi kokeilla 30 päivää ilmaiseksi." },
    ],
    sources: [
      { label: "Nets: SmartPOS (20 €/kk, sopimusaika 24 kk, 1 % kaikista maksukorteista, tilitys seuraavana pankkipäivänä)", url: "https://payments.nets.eu/fi-FI/smartpos" },
      { label: "Nets: Softpay Androidille (5,90 €/kk, sopimusaika 12 kk, 1,25 % pankki- ja luottokorteista, tilitys seuraavana pankkipäivänä, palautukset sisältyvät hintaan)", url: "https://payments.nets.eu/fi-FI/tap-to-pay-for-android" },
      { label: "Worldline Suomi: maksuratkaisut myymälään (maksupäätteiden kuukausimaksut 0–19 €)", url: "https://worldline.com/fi-fi/home/main-navigation/solutions/merchants/solutions-and-services/instore" },
      { label: "SumUp: hinnoittelu (1,49 % ilman kuukausimaksua; Maksut Plus 19 €/kk ja 0,79 %, American Express- ja premium-kortit 1,49 %; kannattaa vähintään 2 900 €:n kuukausimyynnillä)", url: "https://www.sumup.com/fi-fi/hinnoittelu/" },
      { label: "SumUp tuki: Mitä tilitykset ovat ja miten ne toimivat? (seuraavana päivänä klo 7 yritystilille, pankkitilille 1–3 arkipäivässä)", url: "https://help.sumup.com/fi-FI/articles/3LmA9XV15VHbcJvl6YVpyX" },
      { label: "PayPal POS (Zettle): hinnat ja maksupalkkiot (1,95 % korteista ja mobiililompakoista, rahat PayPal-yritystilille yleensä minuuteissa)", url: "https://www.zettle.com/fi/hinnoittelustamme" },
      { label: "Stripe: hinnat (Terminal 1,4 % + 0,10 € ETA-kortit, 2,9 % + 0,10 € muut kortit, Tap to Pay + 0,10 €)", url: "https://stripe.com/en-fi/pricing" },
      { label: "Stripe: palautukset (alkuperäisen maksun kuluja ei palauteta, paitsi peruutuksessa)", url: "https://docs.stripe.com/refunds" },
      { label: "Vipps MobilePay: MobilePay-numero (ei kuukausi- eikä aloituskuluja)", url: "https://vippsmobilepay.com/fi-FI/mobilepay-numero" },
      { label: "Vipps MobilePay: hinnat yrityksille (MobilePay-numero ja Mobiilikassa 1,75 %, kassaintegraation hinta kassajärjestelmätoimittajalta)", url: "https://vippsmobilepay.com/fi-FI/for-business" },
      { label: "MobilePay (24.4.2025): Mobiilikassa ottaa vastaan kortti-, MobilePay- ja käteismaksuja ilman aloitus- ja kuukausimaksuja", url: "https://www.mobilepay.fi/news/mobiilikassa" },
      { label: "MobilePay: Täppää MobilePaylla (lähimaksu maksupäätteellä sovellukseen lisätyllä kortilla)", url: "https://mobilepay.fi/lahimaksaminen" },
      { label: "Vipps MobilePay tuki: Milloin teette tilityksen minulle? (maanantain maksut keskiviikkona, perjantain maksut tiistaina)", url: "https://help.vippsmobilepay.com/fi-FI/articles/when-will-i-receive-settlement" },
      { label: "Epassi: maksuvälinehinnasto palveluntarjoajille 1.9.2026 alkaen (lounas 3,7 %, liikunta ja kulttuuri 5 %, alv lisätään, toimipistemaksu 2,50 €/kk)", url: "https://www.epassi.fi/hubfs/Epassi-Palveluntarjoajat-Liite-2-Maksuv%C3%A4linehinnasto-01-09-2026.pdf" },
      { label: "Epassi tuki: Palvelumaksut ja tilitykset (tilitys neljästi kuussa, rahat tilillä yleensä 2–3 arkipäivässä)", url: "https://support.epassi.fi/fi/support/solutions/articles/77000145305-palvelumaksut-ja-tilitykset" },
      { label: "Suomen Pankki (8.5.2025): Tulevaisuuden maksaminen kaupan kassalla (ei kotimaista korttijärjestelmää, käteisen pääasiallisia käyttäjiä noin 10 %)", url: "https://www.suomenpankki.fi/fi/ajankohtaista/puheet-ja-haastattelut/2025/tulevaisuuden-maksaminen-kaupan-kassalla/" },
      { label: "Kilpailu- ja kuluttajavirasto: Lisämaksut ja alennus maksutavan perusteella", url: "https://www.kkv.fi/kuluttaja-asiat/luotot-ja-maksaminen/maksaminen/lisamaksut-ja-alennus-maksutavan-perusteella/" },
      { label: "Kilpailu- ja kuluttajavirasto: kuluttaja-asiamiehen linjaus maksamisesta ja laskutuksesta (käteismaksu, lisämaksut, maksupalvelulain 60 §)", url: "https://www.kkv.fi/kuluttaja-asiat/tietoa-ja-ohjeita-yrityksille/kuluttaja-asiamiehen-linjaukset/maksaminen-ja-laskutus/" },
      { label: "Finlex: Maksupalvelulaki 290/2010 (46 § ja 60 §)", url: "https://www.finlex.fi/fi/lainsaadanto/2010/290" },
      { label: "EUR-Lex: Asetus (EU) 2015/751 korttimaksujen siirtohinnoista (1 artiklan 3 ja 5 kohta, 3 ja 4 artikla siirtohintakatot, 9 ja 12 artikla kulujen erittely)", url: "https://eur-lex.europa.eu/legal-content/FI/TXT/?uri=CELEX:32015R0751" },
      { label: "Verohallinto: Rahoituspalvelut arvonlisäverotuksessa (maksuliike on arvonlisäverotonta, AVL 41 ja 42 §; arvioidaan tapauskohtaisesti)", url: "https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/333399/rahoituspalvelut-arvonlisaverotuksessa/" },
      { label: "Keskusverolautakunta: ennakkoratkaisu KVL:020/2015 (korttimaksujen maksupalvelu veroton, maksupäätteen vuokra verollinen)", url: "https://www.vero.fi/syventavat-vero-ohjeet/ennakkoratkaisut/54390/kvl020201/" },
      { label: "Verohallinto: Arvonlisäveroprosentit (yleinen 25,5 %, alennettu 13,5 % vuodesta 2026)", url: "https://www.vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/arvonlisaverotus/arvonlisaveroprosentit/" },
      { label: "Verohallinto: Arvonlisäveroton vähäinen toiminta (20 000 euron raja)", url: "https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/48658/arvonlisaveroton-vahainen-toiminta/" },
      { label: "Verohallinto: Kuitinantovelvollisuus (fiskaalisia kassajärjestelmiä koskeva selvitys 2018)", url: "https://www.vero.fi/yritykset-ja-yhteisot/yhteistyo-ja-palvelut/verotarkastus-ja-harmaa-talous/kuitinantovelvollisuus-harmaan-talouden-torjunnassa/" },
      { label: "Verohallinto: Pelaa reilusti – muista kuitti (kuitti myös korttimaksusta, kassakone ei ole pakollinen)", url: "https://www.vero.fi/yritykset-ja-yhteisot/yhteistyo-ja-palvelut/verotarkastus-ja-harmaa-talous/kuitinantovelvollisuus-harmaan-talouden-torjunnassa/pelaa-reilusti-muista-kuitti/" },
      { label: "Finlex: Laki kuitintarjoamisvelvollisuudesta käteiskaupassa 658/2013 (2–4 § soveltamisala ja kuitin tiedot, 6 § laiminlyöntimaksu)", url: "https://www.finlex.fi/fi/lainsaadanto/2013/658" },
    ],
    related: [],
  },
];
