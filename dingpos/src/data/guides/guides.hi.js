// DingPOS guides — hi pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of en or zh-Hant: each language lists only the guides written
// for the markets that read it, and a language without a pack has no guides
// section. This pack is written natively in Hindi, not generated through
// `npm run l10n`. Rules: docs/specs/seo-aeo.md §獲客文章. Checked by
// scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("IN")
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

export const ui = {
  nav: "गाइड",
  title: "छोटी दुकान चलाने की गाइड",
  subtitle: "पेमेंट, लागत और मुनाफ़े का हिसाब, उन दुकानदारों के लिए जो अपनी दुकान ख़ुद सँभालते हैं।",
  meta_description: "छोटे दुकानदारों के लिए गाइड: कार्ड और UPI पेमेंट पर चार्ज कैसे लगता है और मुनाफ़े का कितना हिस्सा खा जाता है, फ़ॉर्मूले, हिसाब की टेबल और स्रोतों के साथ।",
  back: "सभी गाइड",
  related_title: "यह भी पढ़ें",
  sources_title: "स्रोत",
  checked: "आख़िरी जाँच: {{date}}",
  cta_title: "iPad पर बिलिंग करें, हर भुगतान तरीके का अनुमानित चार्ज अपने-आप देखें",
  cta_text: "DingPOS छोटी दुकानों के लिए iPad का POS (बिलिंग) ऐप है। 30 दिन का मुफ़्त ट्रायल, कोई ट्रांज़ैक्शन शुल्क नहीं।",
  cta_button: "App Store पर डाउनलोड करें",
  markets: { IN: "भारत" },
};

export const articles = [
  {
    slug: "payment-processing-fees-india",
    market: "IN",
    checked: "2026-10-25",
    title: "MDR चार्ज कितना लगता है? कार्ड मशीन और UPI पर दुकानदार के मुनाफ़े का हिसाब",
    summary: "UPI (₹2,000 तक) और RuPay डेबिट पर MDR शून्य, क्रेडिट कार्ड पर आम तौर पर 1.5%–2.5% + 18% GST। ₹800 की बिक्री पर 1.99% + GST चार्ज ₹240 मार्जिन का 7.8% खाता है।",
    content: [
      { type: "p", text: "भारत में नकद, ₹2,000 तक के UPI पेमेंट और RuPay डेबिट कार्ड पर दुकानदार से कोई MDR (मर्चेंट डिस्काउंट रेट) नहीं लिया जा सकता। Visa या Mastercard डेबिट कार्ड पर छोटे दुकानदार का ज़्यादा से ज़्यादा 0.40% कटता है, और क्रेडिट कार्ड पर आम तौर पर 1.5% से 2.5%, ऊपर से इस चार्ज पर 18% GST। यह चार्ज मुनाफ़े से कटता है: ₹800 की जिस चीज़ की लागत ₹560 है, उस पर क्रेडिट कार्ड का 1.99% + GST यानी ₹18.79 कटता है, जो ₹240 के मार्जिन का 7.8% है।" },

      { type: "h2", text: "किस पेमेंट पर दुकानदार को कितना चार्ज लगता है?" },
      { type: "p", text: "दरें अक्टूबर 2026 के सरकारी नियमों और Paytm की रेट लिस्ट से हैं; आपकी असली दर कॉन्ट्रैक्ट में है।" },
      {
        type: "table",
        head: ["भुगतान का तरीका", "दुकानदार का चार्ज (GST अलग)", "ध्यान रखें"],
        rows: [
          ["नकद", "0", ""],
          ["UPI, ₹2,000 तक", "0", "कानूनन। UPI से RuPay क्रेडिट कार्ड इसमें नहीं, उस पर कॉन्ट्रैक्ट की दर"],
          ["UPI, ₹2,000 से ऊपर", "अभी 0; दिवाली के बाद 0.4% (एक पेमेंट पर ₹300 तक)", "नीचे का नोट देखें"],
          ["RuPay डेबिट कार्ड", "0", "रकम चाहे जितनी हो"],
          ["Visa, Mastercard डेबिट कार्ड", "पिछले साल का टर्नओवर ₹20 लाख तक: 0.40% तक · उससे ज़्यादा: 0.90% तक", "RBI की सीमा। Paytm: छोटे दुकानदार 0.40%"],
          ["क्रेडिट कार्ड (Visa, Mastercard, RuPay)", "आम तौर पर 1.5%–2.5%", "कोई सरकारी सीमा नहीं। Paytm: किराना 1.40%, बाकी ज़्यादातर 1.99%"],
          ["American Express, विदेशी कार्ड", "Paytm: Amex 2.75%, विदेशी कार्ड 3.50%", ""],
        ],
      },
      { type: "note", text: "UPI पर नया MDR: ₹2,000 से ऊपर के, दुकानों को होने वाले (P2M) UPI पेमेंट पर 0.4% MDR 15 अक्टूबर से लगना था, पर NPCI ने इसे दिवाली के बाद तक टाल दिया है; नई तारीख़ अलग से घोषित होगी। जो छोटे दुकानदार UPI QR से अपने निजी खाते में महीने में ₹1 लाख तक पाते हैं (P2PM), उन पर यह नहीं लगेगा। नियम अभी लागू नहीं हुआ, इसलिए शर्तें बदल सकती हैं।" },
      { type: "note", text: "MDR पर 18% GST अलग लगता है: 1.99% असल में 1.99% × 1.18 ≈ 2.348% पड़ता है। सामान्य तरीके से GST भरने वाली रजिस्टर्ड दुकान टैक्स इनवॉइस मिलने और कंपनी के उसे रिटर्न में दिखाने पर इसका इनपुट टैक्स क्रेडिट (ITC) ले सकती है, पर GST-मुक्त सामान (जैसे खुला अनाज, दूध) वाले हिस्से पर नहीं। कंपोज़िशन स्कीम वाली या बिना रजिस्ट्रेशन वाली दुकान के लिए यह सीधा खर्च है, और नीचे का हिसाब ऐसी ही दुकान का है।" },

      { type: "h2", text: "चार्ज बिक्री पर लगता है, पर कटता मुनाफ़े से है" },
      { type: "p", text: "MDR पूरी बिक्री पर लगता है, इसलिए 1–2% मामूली लगता है। पर दुकानदार की कमाई मार्जिन है, यानी बिक्री मूल्य घटा ख़रीद लागत, और चार्ज इसी में से जाता है। ₹800 में बिकने वाली और ₹560 लागत वाली चीज़ पर मार्जिन ₹240 है:" },
      {
        type: "table",
        caption: "रकम ₹ में। दरें GST समेत: डेबिट 0.472%, क्रेडिट कार्ड 2.348%, विदेशी कार्ड 4.13%। “बचा” शुद्ध मुनाफ़ा नहीं: किराया, तनख़्वाह अभी नहीं घटे।",
        head: ["", "नकद / UPI / RuPay डेबिट", "Visa, Mastercard डेबिट", "क्रेडिट कार्ड", "विदेशी कार्ड"],
        rows: [
          ["ग्राहक ने दिए", "800", "800", "800", "800"],
          ["चार्ज (GST समेत)", "0", "3.78", "18.79", "33.04"],
          ["दुकानदार को मिले", "800", "796.22", "781.21", "766.96"],
          ["लागत और चार्ज के बाद बचा", "240", "236.22", "221.21", "206.96"],
          ["चार्ज मार्जिन का कितना हिस्सा", "0%", "1.6%", "7.8%", "13.8%"],
        ],
      },
      { type: "p", text: "इसका सीधा फ़ॉर्मूला है: चार्ज का मार्जिन में हिस्सा = चार्ज की दर ÷ मार्जिन %। ऊपर मार्जिन 240 ÷ 800 = 30% है, तो क्रेडिट कार्ड का 2.348% ÷ 30% ≈ 7.8%। मार्जिन जितना पतला, उतना बड़ा हिस्सा कटता है:" },
      {
        type: "table",
        caption: "हर ख़ाने में: चार्ज मार्जिन का कितना प्रतिशत खाता है। दरें GST समेत; 1.652% = Paytm की किराना दर 1.40% + GST।",
        head: ["मार्जिन %", "डेबिट 0.472%", "किराना क्रेडिट 1.652%", "क्रेडिट 2.348%", "विदेशी कार्ड 4.13%"],
        rows: [
          ["10%", "4.7%", "16.5%", "23.5%", "41.3%"],
          ["20%", "2.4%", "8.3%", "11.7%", "20.7%"],
          ["30%", "1.6%", "5.5%", "7.8%", "13.8%"],
          ["40%", "1.2%", "4.1%", "5.9%", "10.3%"],
          ["50%", "0.9%", "3.3%", "4.7%", "8.3%"],
        ],
      },

      { type: "h2", text: "महीने में कुल कितना चार्ज कटता है?" },
      { type: "p", text: "हर तरीके का चार्ज अलग निकालकर जोड़ें; नकद, UPI और RuPay डेबिट वाला हिस्सा शून्य रहता है। मान लीजिए एक छोटी दुकान (पिछले साल का टर्नओवर ₹20 लाख से कम) को महीने में ₹1,20,000 डिजिटल पेमेंट से मिलते हैं, हर पेमेंट ₹2,000 से कम का:" },
      {
        type: "table",
        caption: "रकम ₹ में। दरें GST समेत; क्रेडिट कार्ड पर Paytm की 1.99% दर, यानी ≈ 2.348%।",
        head: ["भुगतान का तरीका", "इस महीने मिले", "दर", "चार्ज"],
        rows: [
          ["UPI", "80,000", "0", "0"],
          ["RuPay डेबिट", "10,000", "0", "0"],
          ["Visa, Mastercard डेबिट", "10,000", "0.472%", "47.20"],
          ["क्रेडिट कार्ड", "20,000", "2.348%", "469.64"],
          ["कुल", "1,20,000", "", "516.84"],
        ],
      },
      { type: "p", text: "यह दुकान महीने में करीब ₹517 और साल में करीब ₹6,200 चार्ज देती है, डिजिटल पेमेंट का औसतन 0.43%। पर क्रेडिट कार्ड, जिससे सिर्फ़ छठा हिस्सा आया, कुल चार्ज का 90% से ज़्यादा है।" },

      { type: "h2", text: "बैंक में बिक्री से कम पैसा क्यों आता है?" },
      { type: "p", text: "कंपनी पैसा भेजने से पहले MDR और उस पर GST काट लेती है। Paytm के मुताबिक सेटलमेंट की रकम = मिले पेमेंट − कमीशन − कमीशन पर 18% GST − दूसरी कटौतियाँ (मशीन का किराया, रिफ़ंड, चार्जबैक)। बिलिंग ऐप में ग्राहक की दी हुई पूरी रकम दर्ज होती है, इसलिए यह फ़र्क आना सामान्य है।" },
      {
        type: "list",
        items: [
          "बिक्री पूरी रकम पर लिखें और MDR को अलग खर्च की तरह दर्ज करें। तब बिक्री कम नहीं दिखेगी और चार्ज अलग दिखेगा।",
          "Paytm के सेटलमेंट दस्तावेज़ के मुताबिक रात 12 बजे तक का पैसा आम तौर पर अगले दिन (T+1) आता है; आपकी मशीन का साइकिल कॉन्ट्रैक्ट में है। महीने के आख़िर में कुछ पैसा रास्ते में हो सकता है।",
          "Paytm के EDC एग्रीमेंट के मुताबिक रिफ़ंड या चार्जबैक पर MDR वापस नहीं होता। दूसरी कंपनी से मशीन लेते समय यह पूछ लें।",
        ],
      },

      { type: "h2", text: "क्या कार्ड का चार्ज ग्राहक से ले सकते हैं?" },
      { type: "p", text: "नहीं। “कार्ड पर 2% एक्स्ट्रा” या “₹200 से कम पर कार्ड नहीं” जैसे बोर्ड आपके मशीन कॉन्ट्रैक्ट और कार्ड नेटवर्क के नियमों के ख़िलाफ़ हैं: Visa के नियमों में भारत के लिए कोई छूट नहीं, और Paytm का कॉन्ट्रैक्ट भी सरचार्ज और न्यूनतम या अधिकतम रकम रोकता है। RBI ने बैंकों से कहा है कि दुकानदार डेबिट कार्ड का MDR ग्राहक पर न डालें, और वित्त मंत्रालय के मुताबिक UPI का MDR भी नहीं डाला जा सकता।" },
      { type: "p", text: "सुरक्षित तरीका है कि चार्ज को कीमत में ही जोड़ लें: अगर बिक्री का दसवाँ हिस्सा क्रेडिट कार्ड से आता है और दर GST समेत 2.348% है, तो सभी कीमतें करीब 0.24% बढ़ाना काफ़ी है।" },

      { type: "h2", text: "कार्ड लेना फ़ायदे का सौदा है या नहीं? ब्रेक-ईवन से समझिए" },
      { type: "p", text: "कार्ड लेने की लागत उसका चार्ज है, और फ़ायदा उन ग्राहकों से है जो कार्ड न चलने पर ख़रीदते ही नहीं। हिसाब उसी फ़ॉर्मूले से निकलता है: ज़रूरी अतिरिक्त बिक्री (कार्ड बिक्री का %) = चार्ज की दर ÷ मार्जिन %। 30% मार्जिन और 2.348% दर पर हर ₹10,000 की कार्ड बिक्री पर करीब ₹235 कटते हैं; अगर इसमें से कम से कम ₹783 (7.8%) की बिक्री सिर्फ़ कार्ड की वजह से हुई, तो उसका मार्जिन पूरा चार्ज चुका देता है।" },
      { type: "p", text: "जो ग्राहक वैसे भी मुफ़्त UPI से पेमेंट कर देता, उसके कार्ड का चार्ज सीधा खर्च है। बड़े बिल बनते हों, पर्यटक आते हों या ग्राहक क्रेडिट कार्ड से ही पेमेंट करना चाहें, तो अतिरिक्त बिक्री इससे ऊपर जा सकती है।" },

      { type: "h2", text: "अपनी असली दर कैसे पता करें?" },
      { type: "p", text: "सबसे सही आँकड़ा सेटलमेंट स्टेटमेंट में है: महीने भर का MDR और उस पर GST जोड़कर उस महीने की कार्ड बिक्री से भाग दें, यही आपकी असली दर है। हर तरीके का हिसाब अलग रखें, तो दिखेगा कि कौन-सा सबसे महँगा है।" },
      { type: "p", text: "अगर आप iPad पर बिलिंग करते हैं, तो [DingPOS](/) यह हिसाब लगा सकता है। सेटिंग्ज़ → भुगतान के तरीके में किसी तरीके पर टैप करें और प्रोसेसिंग शुल्क भरें: प्रतिशत, हर लेन-देन पर तय रकम, या दोनों। वही दर भरें जो असल में कटती है, GST समेत, जैसे 1.99% की जगह 2.348%; ऐप में दशमलव के बाद दो ही अंक भरे जाते हैं, इसलिए 2.35% भरें (ITC वाला GST बाद में रिटर्न में मिल जाता है)। जो कंपनी Paytm की तरह रिफ़ंड पर MDR नहीं लौटाती, उसके तरीके में “रिफ़ंड पर प्रतिशत शुल्क वापस मिलता है” बंद कर दें।" },
      { type: "image", src: "guides/fees-in-settings.webp", width: 872, height: 764, alt: "DingPOS सेटिंग्ज़ → भुगतान के तरीके: एक भुगतान तरीके के प्रोसेसिंग शुल्क फ़ील्ड, जिनमें प्रतिशत भरा है", caption: "भुगतान तरीके के प्रोसेसिंग शुल्क में वही दर भरें जो असल में कटती है, GST समेत।" },
      { type: "p", text: "इसके बाद आँकड़े में भुगतान के तरीके कार्ड यह दिखाता है:" },
      {
        type: "list",
        items: [
          "जिस तरीके की शुल्क दर भरी है, उसके नीचे “शुल्क · शुद्ध” की एक पंक्ति: उस तरीके का अनुमानित शुल्क और अनुमानित शुद्ध प्राप्ति।",
          "कार्ड के नीचे पूरी अवधि का अनुमानित शुल्क और अनुमानित शुद्ध प्राप्ति।",
          "दर भरने से पहले ली गई रकम पर कोई शुल्क दर्ज नहीं होता: आँकड़े उन्हें “N की दर नहीं है” से चिह्नित करते हैं और शुद्ध प्राप्ति “—” दिखाते हैं।",
        ],
      },
      { type: "image", src: "guides/fees-in-report.webp", phone: "guides/fees-in-report-1080w.webp", width: 1126, height: 934, alt: "DingPOS आँकड़े का भुगतान के तरीके कार्ड: शुल्क दर वाले हर तरीके के नीचे “शुल्क · शुद्ध” की पंक्ति, और कार्ड के नीचे पूरी अवधि का अनुमानित शुल्क और अनुमानित शुद्ध प्राप्ति", caption: "आँकड़े आपकी भरी दर से हर भुगतान तरीके का अनुमानित शुल्क और शुद्ध प्राप्ति दिखाते हैं।" },
      { type: "p", text: "ये आँकड़े आपकी भरी दर से लगाए अनुमान हैं। DingPOS ख़ुद पेमेंट नहीं लेता और कंपनी का स्टेटमेंट नहीं पढ़ता, इसलिए असली रकम सेटलमेंट स्टेटमेंट में ही है। सेटअप का तरीका [क्या DingPOS कार्ड और मोबाइल भुगतान का शुल्क ट्रैक कर सकता है?](/support/payment-fees/) में है। यह सुविधा Standard प्लान या उससे ऊपर में है ([प्लान और क़ीमत](/pricing/)), और 30 दिन का मुफ़्त ट्रायल मिलता है।" },
    ],
    sources: [
      { label: "PIB (15 सितंबर 2026): UPI पर MDR का ढाँचा — ₹2,000 तक मुफ़्त, P2PM छोटे दुकानदार, 0.4% और ₹300 की सीमा, MDR ग्राहक पर न डालना", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310586" },
      { label: "वित्तीय सेवा विभाग / NPCI: MDR on Select UPI (P2M) Transactions — FAQ (15 सितंबर 2026; क्रेडिट कार्ड MDR 1.5%–2.5%, डेबिट कार्ड 0.90% तक, P2PM, UPI पर क्रेडिट कार्ड)", url: "https://financialservices.gov.in/sites/default/files/2026-09/FAQs---Merchant-Discount-Rate--MDR--on-Select-UPI--P2M--Transactions_0.pdf" },
      { label: "Business Standard (13 अक्टूबर 2026): NPCI ने UPI MDR दिवाली के बाद तक टाला, नई तारीख़ अलग से", url: "https://www.business-standard.com/finance/news/upi-mdr-deferred-until-after-diwali-new-date-to-be-notified-npci-126101300556_1.html" },
      { label: "Mint (15 सितंबर 2026): RuPay डेबिट कार्ड और ₹2,000 तक के UPI पर कोई चार्ज नहीं — धारा 10A के तहत अधिसूचना", url: "https://www.livemint.com/industry/banking/centre-tells-banks-no-charge-rupay-debit-card-pay-upi-transactions-up-to-rs-2000-digital-payments-and-settlement-act-mdr-11789402806559.html" },
      { label: "RBI सर्कुलर (6 दिसंबर 2017): डेबिट कार्ड पर MDR की अधिकतम सीमा और MDR ग्राहक पर न डालना", url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11183" },
      { label: "Paytm for Business: EDC (कार्ड मशीन) की MDR रेट लिस्ट", url: "https://business.paytm.com/pricing" },
      { label: "Paytm EDC Agreement (MDR रिफ़ंड पर वापस नहीं, फ़ीस GST के बिना, सरचार्ज और न्यूनतम रकम पर रोक)", url: "https://business.paytm.com/edc-agreement" },
      { label: "Paytm Payments: Settlement Processing (पेमेंट गेटवे दस्तावेज़; T+1 सेटलमेंट, कमीशन पर 18% GST, किराया और रिफ़ंड की कटौती)", url: "https://www.paytmpayments.com/docs/settlement-processing-in-paytm" },
      { label: "Visa Core Rules and Visa Product and Service Rules, 18 April 2026 (नियम 1.5.5.1 न्यूनतम/अधिकतम रकम, 1.5.5.2 Surcharges)", url: "https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf" },
      { label: "ETCFO (21 सितंबर 2026): MDR पर 18% GST और इनपुट टैक्स क्रेडिट की शर्तें", url: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/upi-mdr-18-gst-to-add-cost-for-exempt-businesses-hit-thin-margin-sectors/134384353" },
      { label: "CBIC: CGST एक्ट धारा 10 (कंपोज़िशन स्कीम में ITC नहीं)", url: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter3/section10_v1.00.html" },
      { label: "CBIC: CGST एक्ट धारा 16 (रजिस्टर्ड व्यक्ति को ITC)", url: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter5/section16_v1.00.html" },
    ],
    related: [],
  },
];
