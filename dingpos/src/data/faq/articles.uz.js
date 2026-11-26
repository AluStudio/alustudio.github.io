// Generated from en and the uz translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync uz`, then `npm run l10n -- dingpos apply uz`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Boshlash",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "To‘lov",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Buyurtmalar va qaytarishlar",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Mahsulotlar, ombor va xaridlar",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Hisobotlar",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Aksiyalar va sodiqlik",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Zaxira nusxa va ma’lumotlar",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Xodimlar va ruxsatlar",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Obuna va to‘lovlar",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Aksiyalarni sozlash qo‘llanmalari",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Tez orada",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "DingPOS’da do‘konimni qanday sozlayman?",
    "keywords": [
      "sozlash",
      "boshlash",
      "birinchi marta",
      "sozlash ustasi",
      "do‘kon ochish",
      "kassa ilovasini sozlash",
      "mamlakat",
      "davlat",
      "valyuta",
      "soliqlar"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS’ni birinchi marta ochganingizda sozlash ustasi do‘koningizni ikki bosqichda, bir necha daqiqada ochib beradi:"
      },
      {
        "type": "steps",
        "items": [
          "Davlat yoki hududingizni tanlang. Ro‘yxat tepasida shu iPad turgan davlat yoki hudud, undan keyin eng keng tarqalgan bozorlar turadi; pastda DingPOS App Store’da mavjud bo‘lgan barcha 175 ta davlat va hudud bor — ularni ilova tilidagi yoki inglizcha nomi bo‘yicha qidirish mumkin. Tanlovingiz valyuta, soliqlar va soliq rejimini avtomatik to‘ldiradi.",
          "Do‘koningiz bosqichida do‘kon nomini kiriting, xohlasangiz logotip qo‘shing va valyuta, soliqlar hamda soliq rejimini (Soliq narxga kiritilgan / Soliq narxga kiritilmagan) tekshiring. Valyuta sukut bo‘yicha davlatingiznikidir; 130 ta valyutadan tanlash uchun uni bosing. Soliqlar ro‘yxatida davlatingizdagi standart soliqlar turadi: ularning nomini o‘zgartirish, stavkasini almashtirish yoki bittasini o‘chirish mumkin, yana bir qator kerak bo‘lsa Soliq qo‘shish tugmasini bosing. Masalan, Britaniya Kolumbiyasidagi do‘kon birinchi qatorni «GST 5» ga o‘zgartirib, «PST 7» qatorini qo‘shadi."
        ]
      },
      {
        "type": "p",
        "text": "Davom etish tugmasini bosing — «Ding! Do‘koningiz tayyor.» yozuvini ko‘rasiz. DingPOS ikkita to‘lov usulini ham o‘zi yaratadi: Naqd pul va Kredit karta. Keyin Mahsulot bo‘limida mahsulotlaringizni qo‘shing va sotuvni boshlang."
      },
      {
        "type": "note",
        "text": "Valyutani sozlashdan keyin o‘zgartirib bo‘lmaydi; soliqlar va soliq rejimini esa keyinroq Sozlamalar → Do‘kon ma’lumotlarida o‘zgartirish mumkin. AQSh, Kanada, Braziliya va Mikroneziyada stavka shtat, viloyat yoki shaharga bog‘liq, shuning uchun stavka maydoni bo‘sh turadi va davom etish uchun siz qo‘llaydigan stavkani kiritasiz. Stavka 0 dan yuqori bo‘lishi kerak: soliq olmaydigan do‘kon qatorni o‘chiradi. Germaniya, Fransiya, Italiya va Yevropaning boshqa davlatlarida ro‘yxatga mahalliy chakana savdoda keng tarqalgan kamaytirilgan stavkalar ham kiradi, ular mahalliy soliq nomi bilan ko‘rsatiladi, masalan, Germaniyada «MwSt. 19%» va «MwSt. 7%»; kamaytirilgan stavkalar yangi mahsulotlarga sukut bo‘yicha qo‘llanmaydi, shuning uchun ularni har bir mahsulot uchun alohida yoqing. 175 ta davlat ro‘yxati va valyuta tanlash v3.2 versiyasida paydo bo‘lgan; avvalgi versiyalarda 15 ta davlat bor edi."
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
    "question": "DingPOS internetsiz ishlaydimi?",
    "keywords": [
      "internetsiz",
      "oflayn",
      "internet",
      "wifi",
      "tarmoq",
      "aloqa yo‘q",
      "bozor"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. DingPOS internetsiz ham ishlaydi — to‘lov, mahsulotlarni boshqarish, zaxira va hisobotlarning barchasi iPad’ingizning o‘zida, tarmoqsiz bajariladi. Kechki bozorlar, vaqtinchalik savdo nuqtalari va Wi-Fi bo‘lmagan boshqa joylarda ham a’lo ishlaydi."
      },
      {
        "type": "p",
        "text": "Faqat ikki narsa uchun ulanish kerak: bulutga zaxira nusxa (o‘zingizning iCloud / Google Drive / Dropbox hisobingizga yuklash) va obuna holatini tekshirish."
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
    "question": "DingPOS’dan foydalanish uchun akkaunt ochish kerakmi?",
    "keywords": [
      "akkaunt",
      "ro‘yxatdan o‘tish",
      "kirish",
      "login",
      "maxfiylik"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yo‘q. DingPOS’da akkaunt tizimi yo‘q — yuklab oling va sotishni boshlang. Mahsulotlaringiz, buyurtmalaringiz va mijozlar ma’lumotlari iPad’ingizda qoladi. Ular bizga faqat Sozlamalar bo‘limidan yordam hisoboti yuborsangizgina yetib boradi: unga muammoni qayta takrorlay olishimiz uchun do‘koningiz ma’lumotlarining nusxasi ilova qilinadi."
      },
      {
        "type": "p",
        "text": "Bulutga zaxira nusxani yoqsangiz, o‘zingizning bulut akkauntingizga (iCloud, Google Drive yoki Dropbox) kirasiz. Zaxira nusxalar sizning akkauntingizda saqlanadi — ularga biz kira olmaymiz."
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
    "question": "DingPOS qaysi qurilmalarda ishlaydi?",
    "keywords": [
      "qurilma",
      "iphone",
      "mac",
      "ipad",
      "talablar",
      "versiya"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS hozircha iPadOS 17.4 yoki undan yangi versiyali iPad’larda ishlaydi va asosan yotiq (landshaft) holat uchun mo‘ljallangan."
      },
      {
        "type": "p",
        "text": "iPhone va Mac hozircha qo‘llab-quvvatlanmaydi. Boshqa qurilmani ham qo‘llab-quvvatlashimizni istasangiz, bizga yozing va qanday foydalanmoqchi ekaningizni ayting."
      },
      {
        "type": "note",
        "text": "iPadOS 17 ishlaydigan har bir iPad 17.4 ga yangilanishi mumkin, shuning uchun hech bir model chetda qolmaydi. Hali iPadOS 17.0–17.3 da turgan iPad DingPOS v3.5 yoki undan yangisini o‘rnatishdan oldin tizimni yangilashi kerak: Sozlamalar → Umumiy → Dasturni yangilash."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Sozlagandan keyin valyuta, soliq stavkasi yoki soliq rejimini o‘zgartirish mumkinmi?",
    "keywords": [
      "valyuta",
      "soliq rejimi",
      "o‘zgartirish",
      "qulflangan",
      "soliq stavkasi",
      "soliqlar",
      "soliq narxga kiritilgan",
      "soliq narxga kiritilmagan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Soliqni o‘zgartirish mumkin, valyutani esa yo‘q. Soliqlar ham, soliq rejimi ham Sozlamalar → Do‘kon ma’lumotlaridagi Soliq bo‘limida o‘zgartiriladi va o‘zgarish faqat keyingi sotuvlarga qo‘llanadi: oldingi buyurtmalar, qaytarishlar va hisobotlar o‘zlari qayd etgan soliq summalari va rejimini saqlab qoladi."
      },
      {
        "type": "list",
        "items": [
          "Soliqlar: bittasini qo‘shish, nomini o‘zgartirish, stavkasini almashtirish yoki o‘chirish mumkin — «Soliq qanday hisoblanadi?» maqolasiga qarang.",
          "Soliq rejimi (Soliq narxga kiritilgan / Soliq narxga kiritilmagan): boshqa rejimni bosing — tasdiqlash oynasida birinchi solig‘ingiz bilan misol ko‘rsatiladi, masalan «5% soliqli NT$100 narxdagi mahsulot: mijoz NT$105 to‘laydi». Narxlarning raqamlari o‘zgarmaydi, ochiq savat esa kassaga qaytganingizda yangi rejimda qayta hisoblanadi. Rejimni v3.5 versiyasidan boshlab almashtirish mumkin; avvalgi versiyalarda u sozlashda qulflanadi.",
          "Almashtirishdan keyin ham to‘liq qaytarish asl buyurtma pulini o‘zi sotilgan holida qaytaradi. Boshqa rejimda sotilgan buyurtmada almashtirish (almashtirilgan tovar bilan) bloklanadi: rejimni qaytarib o‘zgartiring yoki tovarlarni qaytarib, ularni qaytadan sotuvga kiriting."
        ]
      },
      {
        "type": "p",
        "text": "Valyuta sozlash tugagach qulflanadi. Barcha oldingi buyurtmalar shu valyutada qayd etilgan, shuning uchun uni o‘rtada o‘zgartirsangiz hisobotlaringiz buzilib qoladi. Uni sozlashning Do‘koningiz bosqichida tekshirib oling: valyuta sukut bo‘yicha davlatingiznikidir, uni bosib boshqasini tanlash mumkin."
      },
      {
        "type": "note",
        "text": "Agar do‘koningizni endigina ochgan bo‘lsangiz va muhim ma’lumotlaringiz hali yo‘q bo‘lsa, ilovani o‘chirib qayta o‘rnatib, sozlashni yangidan o‘tkazishingiz mumkin. O‘chirishdan oldin saqlab qolish kerak bo‘lgan hech narsa yo‘qligiga ishonch hosil qiling."
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
    "question": "Ilova tilini qanday o‘zgartiraman?",
    "keywords": [
      "til",
      "ilova tili",
      "inglizcha",
      "xitoycha",
      "yaponcha",
      "ispancha",
      "ko‘p tillilik",
      "tilni almashtirish"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS 32 tilni qo‘llab-quvvatlaydi, jumladan ingliz, an’anaviy va soddalashtirilgan xitoy, yapon, koreys, tay, vyetnam, indonez, malay, ispan (Lotin Amerikasi), portugal (Braziliya), fransuz va nemis tillarini. Sozlamalar → Qurilma sozlamalari bo‘limiga o‘ting va Ilova tili tugmasini bosing. U iPad’ning Sozlamalar ilovasida DingPOS sahifasini ochadi, u yerda Til bo‘limidan tilni tanlaysiz."
      },
      {
        "type": "p",
        "text": "iOS ilovalarga til ro‘yxatini to‘g‘ridan-to‘g‘ri ochishga ruxsat bermaydi, shuning uchun oxirgi bosish tizim Sozlamalarida bajariladi. Til faqat shu iPad’ga qo‘llanadi."
      },
      {
        "type": "note",
        "text": "Ingliz va an’anaviy xitoy tilidan boshqa tillar v3.2 versiyasida paydo bo‘lgan. Til ro‘yxatida faqat ingliz va xitoy tili bo‘lsa, DingPOS’ni App Store’dan yangilang."
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
    "question": "Bir vaqtning o‘zida bir nechta mijozga qanday xizmat ko‘rsataman?",
    "keywords": [
      "savat",
      "bir nechta savat",
      "kutib turish",
      "almashtirish",
      "navbat",
      "parallel"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kassa ekrani bir vaqtning o‘zida o‘nta savat bilan ishlaydi. Yangi savat qo‘shish uchun savat panelidagi “+” tugmasini bosing, almashtirish uchun raqamlangan yorliqni bosing."
      },
      {
        "type": "p",
        "text": "Har bir savat alohida hisoblanadi. A mijoz hali tanlayotgan bo‘lsa, boshqa savatga o‘tib, avval B mijozni hisoblab yuboring. To‘lov yakunlangach, savat o‘rni avtomatik olib tashlanadi."
      },
      {
        "type": "note",
        "text": "Savatlar faqat xotirada saqlanadi — to‘lovi qilinmagan savatlar ilova butunlay yopilganda tozalanadi."
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
    "question": "Chegirmani qanday qo‘llayman?",
    "keywords": [
      "chegirma",
      "foiz",
      "aniq summa",
      "narx tushirish",
      "arzonlashtirish",
      "tayyor chegirma"
    ],
    "content": [
      {
        "type": "p",
        "text": "Chegirmalar ikki darajada ishlaydi, har biri aniq summa yoki foiz bo‘lishi mumkin:"
      },
      {
        "type": "list",
        "items": [
          "Mahsulot chegirmasi: savatdagi mahsulotni bosing → “Chegirma”ni tanlang → summa yoki foizni kiriting.",
          "Savat chegirmasi: savat ostidagi “Chegirma” tugmasini bosing."
        ]
      },
      {
        "type": "p",
        "text": "Har bir mahsulot va har bir savatda bir vaqtning o‘zida faqat bitta chegirma bo‘lishi mumkin — qayta qo‘llasangiz, oldingisi almashadi, chegirma belgisini bossangiz esa olib tashlanadi. Chegirmalar soliqdan oldin qo‘llanadi — chakana savdoda shunday tartib qabul qilingan."
      },
      {
        "type": "p",
        "text": "Tez-tez beradigan chegirmalaringizni saqlab qo‘yish mumkin: Sozlamalar → Sodiqlik va aksiyalar → Tayyor chegirmalar bo‘limiga o‘ting va Tayyor chegirma qo‘shish tugmasini bosing, masalan, “Xodim narxi: 20% chegirma”. Kassada mahsulot chegirmasida ham, savat chegirmasida ham Tayyor chegirmalar menyusi bor; birini tanlasangiz, chegirma turi va qiymati xuddi qo‘lda kiritilgandek to‘ldiriladi, shuning uchun u xodimning chegirma chegarasiga ham hisoblanadi. Tayyor chegirmalar v3.6 da paydo bo‘lgan va Standard yoki undan yuqori tarifni talab qiladi."
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
    "question": "Soliq qanday hisoblanadi?",
    "keywords": [
      "soliq",
      "QQS",
      "savdo solig‘i",
      "narxga kiritilgan",
      "narxga kiritilmagan",
      "bir nechta soliq",
      "GST",
      "PST",
      "soliqni to‘xtatish",
      "chek"
    ],
    "content": [
      {
        "type": "p",
        "text": "Soliq Sozlamalar → Do‘kon ma’lumotlari bo‘limidagi soliqlar va soliq rejimi asosida avtomatik hisoblanadi. Soliq rejimi ikkita, chekda soliq summasi ikkala rejimda ham ko‘rsatiladi:"
      },
      {
        "type": "list",
        "items": [
          "Soliq narxga kiritilgan: narxlar soliqni o‘z ichiga oladi — jami summa o‘zgarmaydi, chekda esa narx ichidagi soliq alohida ko‘rsatiladi (Tayvan, Yaponiya va boshqalarda keng tarqalgan).",
          "Soliq narxga kiritilmagan: soliq to‘lov paytida chegirmadan keyingi summaga qo‘shiladi (AQSH, Kanada va boshqalarda keng tarqalgan)."
        ]
      },
      {
        "type": "p",
        "text": "Do‘kon bir nechta soliq undirishi mumkin, masalan, Britaniya Kolumbiyasida 5% GST bilan 7% PST yoki Yaponiyada 10% iste’mol solig‘i bilan birga 8% imtiyozli stavka:"
      },
      {
        "type": "list",
        "items": [
          "Soliq kartasida Soliq qo‘shish tugmasini bosib, nom va stavkani kiriting. Yangi mahsulotlarga qo‘llash yoqilsa, keyin qo‘shadigan mahsulotlaringiz bu soliqni sukut bo‘yicha oladi. Do‘konda allaqachon standart soliq bo‘lsa, yangi qo‘shilgan soliqda bu sozlama o‘chirilgan holda boshlanadi; ikkalasi ham olinadigan bo‘lsa, uni yoqing.",
          "Har bir mahsulot qaysi soliqlarni undirishini mahsulot shaklidagi Soliqlar bo‘limida tanlaydi — masalan, bento faqat 8% imtiyozli stavkani undirishi mumkin. Ikki yoki undan ko‘p soliq yoqilsa, shaklda mahsulotning jami soliq stavkasi ko‘rsatiladi.",
          "Soliqni bosib, uning nomini yoki stavkasini o‘zgartirishingiz mumkin; Barcha mahsulotlarga qo‘llash yoki Barcha mahsulotlardan olib tashlash tugmalari uni barcha mahsulotlarga birdaniga qo‘shadi yoki olib tashlaydi. Soliqni o‘chirishdan oldin nechta mahsulotda u undirilmay qolishi aytiladi.",
          "Soliq narxga kiritilmagan do‘konda savatning jami summalarida har bir soliq uchun alohida qator ko‘rsatiladi, buyurtma tafsilotida esa har bir soliq uchun stavkasi va qaysi summaga hisoblangani bilan alohida qator bo‘ladi."
        ]
      },
      {
        "type": "p",
        "text": "Soliqni bir muddat undirmaslik uchun Soliq kartasining yuqorisidagi Soliq undirish sozlamasini o‘chiring: keyingi barcha savdolar soliqsiz bo‘ladi, savatda turgan tovarlar ham. Har bir mahsulot o‘z soliqlarini saqlab turadi, sozlamani qayta yoqsangiz ular avvalgidek qaytadi."
      },
      {
        "type": "p",
        "text": "To‘liq hisoblash tartibi: mahsulot chegirmalari va aksiyalar → savat chegirmasi → ballarni ishlatish → soliq. Summalar valyutaning kasr xonalari soniga qadar yaxlitlanadi, 0,5 va undan yuqori yuqoriga (masalan, TWD uchun 0, USD uchun 2). Soliq har bir buyurtmada har bir soliq uchun bir marta hisoblanadi, uning kasr qismi esa Soliq kartasidagi Soliqni yaxlitlash sozlamasiga bo‘ysunadi: Yarmidan yuqoriga yaxlitlash, Pastga yaxlitlash yoki Yuqoriga yaxlitlash. Yaponiyadagi yangi do‘konlar Pastga yaxlitlash bilan boshlanadi, boshqa do‘konlar esa Yarmidan yuqoriga yaxlitlash bilan."
      },
      {
        "type": "note",
        "text": "Nomli soliqlar v3.5 da paydo bo‘lgan. Yangilaganingizda soliq stavkangiz nomli soliqqa aylanadi (masalan, Avstraliyada “GST 10%”) va barcha mavjud mahsulotlar uni oladi; stavkasi 0 bo‘lgan do‘konda soliq bo‘lmaydi. Oldingi buyurtmalar va qaytarishlar yozilgan soliq stavkalari va summalarini saqlab qoladi; hisobotlar endi daromadni soliqdan oldin hisoblaydi, o‘tgan davrlar ham (qarang: “Daromad bilan qabul qilingan pul o‘rtasida qanday farq bor?”)."
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
    "question": "Qaysi to‘lov usullari qo‘llab-quvvatlanadi?",
    "keywords": [
      "to‘lov usuli",
      "naqd pul",
      "kredit karta",
      "line pay",
      "qaytim",
      "nasiya",
      "qo‘shimcha to‘lov usuli",
      "komissiya"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yangi do‘kon ikkita to‘lov usuli bilan boshlanadi — Naqd pul va Kredit karta; ularning nomlari sozlash paytida ilova tilida yoziladi. Sozlamalar → To‘lov usullari bo‘limida istalgan boshqa usulni (masalan, Apple Pay, LINE Pay, mahalliy hamyon) qo‘shish va tartibini o‘zgartirish mumkin. Usulni bosib, uning nomini o‘zgartirishingiz mumkin, masalan, Kredit kartani “Karta (Square)” deb; Statistika nom o‘zgarishidan oldingi savdolarni ham yangi nom ostida hisoblaydi (v3.6 dan beri). To‘lov usulini o‘chirish tugmasi tahrirlash oynasining pastida turadi va o‘chirishdan oldin so‘raydi; oldingi buyurtmalar qaysi usul bilan to‘langan bo‘lsa, shuni saqlab qoladi, oxirgi qolgan usulni esa o‘chirib bo‘lmaydi."
      },
      {
        "type": "p",
        "text": "To‘lov usullari — hisob yuritish uchun yorliqlar: DingPOS haqiqiy to‘lovlarni amalga oshirmaydi. Karta yoki mobil to‘lovni o‘zingizdagi terminal yoki ilova orqali qabul qiling, so‘ng yozib qo‘yish uchun DingPOS’da mos yorliqni tanlang. Naqd to‘lovda qaytim avtomatik hisoblanadi, eng kichik tangalar ishlatilmay qo‘ygan joylarda esa naqd pulni ham yaxlitlash mumkin — “Naqd to‘lovlarni muomaladagi tangalarga yaxlitlash mumkinmi?” maqolasiga qarang."
      },
      {
        "type": "p",
        "text": "Karta yoki mobil to‘lov provayderingiz komissiya olsa, usulga komissiya stavkasini kiriting — Statistika har bir usul bo‘yicha taxminiy komissiya va taxminiy sof tushumni ko‘rsatadi. “DingPOS karta va mobil to‘lov komissiyalarini hisobga ola oladimi?” maqolasiga qarang."
      },
      {
        "type": "p",
        "text": "Tovarni hozir olib, pulni keyin to‘laydigan doimiy mijoz uchun Nasiya’ni tanlang: savdo qarz sifatida yoziladi va pul kelganda yopiladi. “Doimiy mijozlarga nasiyaga sotib, keyin pul olsa bo‘ladimi?” maqolasiga qarang."
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
    "question": "DingPOS karta va mobil to‘lov komissiyalarini hisobga ola oladimi?",
    "keywords": [
      "komissiya haqi",
      "karta komissiyasi",
      "to‘lov komissiyasi",
      "komissiya stavkasi",
      "taxminiy sof tushum",
      "savdogar komissiyasi",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Sozlamalar → To‘lov usullari bo‘limida to‘lov usulini bosing (yoki yangisini qo‘shing) va Komissiya haqini to‘ldiring: foiz, har bir to‘lovga qat’iy summa yoki ikkalasi. Naqd pul turidagi usullarda komissiya bo‘lmaydi. Shundan keyin shu usul orqali qabul qilingan har bir to‘lovga o‘sha paytdagi stavka bo‘yicha taxminiy komissiya yoziladi."
      },
      {
        "type": "p",
        "text": "Statistikada To‘lov usullari kartasi komissiyali har bir usul ostiga “Komissiya · Sof” qatorini qo‘shadi, kartaning pastida esa butun davr uchun taxminiy komissiya va taxminiy sof tushum ko‘rsatiladi."
      },
      {
        "type": "list",
        "items": [
          "Provayderingiz amalda ushlab qoladigan stavkani kiriting. Komissiyadan soliq olinsa, uni ham qo‘shing: 3% va 5% soliq bo‘lsa, 3,15% kiriting. Komissiya bo‘lmasa, ikkala maydonni ham bo‘sh qoldiring.",
          "Stavka o‘zgarishi faqat keyingi to‘lovlarga qo‘llanadi; yozib bo‘lingan komissiyalar o‘zgarmaydi.",
          "“Qaytarishda foizli komissiya qaytariladi” Tayvan va Yaponiyadagi do‘konlarda yoqilgan holda, boshqa joylarda esa o‘chirilgan holda boshlanadi: Stripe, Square va PayPal kabi provayderlar qaytarishda o‘z komissiyasini qaytarmaydi. Uni provayderingizga moslab o‘rnating. U qaytarishlarni va qaytarilgan oldindan buyurtma avanslarini boshqaradi: yoqilgan bo‘lsa, foiz qaytariladi; qat’iy summa esa hech qachon qaytarilmaydi. Yaroqsiz deb belgilash yoki qarz yopilishini bekor qilish bu sozlamani hisobga olmaydi va yozilgan komissiyani to‘liq, qat’iy summa bilan birga qaytarib oladi. Har ikki holatda mijozga bir xil summa qaytariladi.",
          "Usulga stavka kiritilmasdan oldin qabul qilingan to‘lovlarda komissiya yo‘q: Statistika ularni “N tasida stavka yo‘q” deb belgilaydi va sof tushum o‘rniga “—” ko‘rsatadi."
        ]
      },
      {
        "type": "note",
        "text": "Komissiya — siz kiritgan stavkadan hisoblangan taxmin; haqiqiy summa provayderingiz hisobotida ko‘rinadi. Komissiya stavkalarini tahrirlash uchun Standard yoki undan yuqori tarif kerak, Lite’da maydonlar qulflangan. v3.4 dan boshlab har bir tarif yozilgan komissiyalarni Statistikada va P&L’da ko‘radi, shuning uchun sinov davrida belgilangan stavka Lite’da ham taxminni davom ettiradi; oldingi versiyalarda komissiya faqat Standard va undan yuqori tarifda ko‘rinardi."
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
    "question": "Naqd to‘lovlarni muomaladagi tangalarga yaxlitlash mumkinmi?",
    "keywords": [
      "naqd pulni yaxlitlash",
      "yaxlitlash",
      "yuqoriga yaxlitlash",
      "pastga yaxlitlash",
      "tangalar",
      "1 sentlik tanga",
      "sent",
      "0,05",
      "qaytim",
      "Kanada",
      "Avstraliya",
      "Shveytsariya"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Kanada, Avstraliya, Yangi Zelandiya, Shveytsariya, Daniya, Shvetsiya, Norvegiya, Belgiya, Finlyandiya va Vengriyada eng kichik tangalar endi ishlatilmaydi, shuning uchun DingPOS naqd pulni haqiqatan qo‘lda berish mumkin bo‘lgan summagacha yaxlitlaydi: naqd to‘langan C$12.99 lik buyurtma C$13.00 sifatida olinadi, qaytim ham C$13.00 dan hisoblanadi. Karta va boshqa naqd bo‘lmagan to‘lovlar aniq qoladi."
      },
      {
        "type": "p",
        "text": "Shu mamlakatlardan birida, o‘sha mamlakat valyutasida sozlangan yangi do‘konda bu avtomatik yoqiladi. Boshqa har qanday do‘kon uni Sozlamalar → To‘lov usullari ekranining pastidagi Naqd pulni yaxlitlash kartasi orqali yoqishi mumkin: naqd pul nimagacha yaxlitlanishini tanlang (Yaxlitlanmaydi yoki sentli valyutada 0.05, 0.10, 0.50, 1.00; TWD yoki JPY kabi sentsiz valyutada 5, 10, 50, 100), aynan o‘rtaga tushishi mumkin bo‘lgan qadam uchun esa o‘rtasi yuqoriga (Yuqoriga yaxlitlash) yoki pastga (Pastga yaxlitlash) yaxlitlanishini. O‘zgartirish faqat keyingi to‘lovlarga ta’sir qiladi."
      },
      {
        "type": "list",
        "items": [
          "To‘lov ekranida “Olingan naqd pul C$13.00” ko‘rsatiladi. Mijoz aniq summani to‘lashni so‘rasa, to‘lov usullari ostidagi Aniq summani olish tugmasini bosing; u faqat shu bitta savdoga qo‘llanadi.",
          "Buyurtmaning jami summasi, soliq, daromad, ballar va a’zo mijozning xarid summasi o‘zgarmaydi; yaxlitlash farqi to‘lovda saqlanadi, chek ekrani va buyurtma tafsiloti uni jami ostida “Naqd pulni yaxlitlash +C$0.01” kabi ko‘rsatadi.",
          "Qaytarishdagi naqd pul qaytarimlari, oldindan buyurtmalardagi naqd avans va olib ketishdagi qoldiq, almashtirishdagi qo‘shimcha to‘lovlar hamda naqd to‘langan nasiya qarzlari ham yaxlitlanadi; bir nechta qarz birdan yopilsa, butun to‘plam bir marta yaxlitlanadi.",
          "Yaroqsiz deb belgilash, qaytarilgan oldindan buyurtma avanslari va bekor qilingan qarz yopilishlari yozilgan summani aynan qaytaradi, qayta yaxlitlanmaydi.",
          "Statistikadagi Qabul qilingan pul uning qancha qismi naqd pulni yaxlitlash ekanini ko‘rsatadi, oylik P&L’da esa sof foyda hisobiga kiradigan Naqd pulni yaxlitlash qatori bor. Yaxlitlash hech qachon daromad hisoblanmaydi."
        ]
      },
      {
        "type": "note",
        "text": "Shveytsariya narx ko‘rsatish qoidalariga ko‘ra doim pastga yaxlitlaydi — CHF 12.98 CHF 12.95 sifatida olinadi, aynan o‘rtadagi variant yo‘q. Belgiya faqat €0.05 dan yuqori jami summalarni yaxlitlaydi. Naqd pulni yaxlitlash barcha tariflarda mavjud, mavjud do‘kon esa uni yoqmaguningizcha naqd pulni avvalgidek aniq oladi."
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
    "question": "To‘lovdan keyingi “Ding” ovozini o‘chirib qo‘ysam bo‘ladimi?",
    "keywords": [
      "ovoz",
      "ding",
      "ovozsiz",
      "jim rejim",
      "to‘lov ovozi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Sozlamalar → Qurilma sozlamalari bo‘limiga kiring va To‘lov ovozini o‘chiring. Keyingi savdodan boshlab muvaffaqiyat ekrani ovozsiz bo‘ladi, titroq esa saqlanib qoladi."
      },
      {
        "type": "p",
        "text": "Bu sozlama faqat shu iPad uchun amal qiladi va bulutdagi nusxani tiklash uni o‘zgartirmaydi."
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
    "question": "Kassir ekranida tugagan mahsulotlarni yashirish mumkinmi?",
    "keywords": [
      "yashirish",
      "tugagan mahsulot",
      "zaxira nol",
      "kassir",
      "mahsulot yo‘qolgan",
      "mahsulot topilmayapti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Sozlamalar → Qurilma sozlamalari bo‘limiga o‘ting va Tugagan mahsulotlarni yashirish’ni yoqing (sukut bo‘yicha o‘chiq). Shunda kassirning mahsulotlar ro‘yxati, toifa filtri va qidiruvi (nom va shtrix-kod bo‘yicha) zaxirasi 0 yoki undan kam bo‘lgan har bir mahsulotni o‘tkazib yuboradi. Almashtirgich darhol ishlaydi, ilovani qayta ochish shart emas."
      },
      {
        "type": "list",
        "items": [
          "Zaxirasi hisobga olinmaydigan mahsulotlar doim ko‘rinadi. Variantli mahsulot faqat barcha variantlari tugagandagina yashiriladi.",
          "Bu faqat shu iPad’dagi kassirga ta’sir qiladi; Mahsulot bo‘limidagi ro‘yxatda barcha mahsulotlar ko‘rinaveradi.",
          "Hamma mahsulot yashirilsa, kassir “Barcha mahsulotlar tugagan” yozuvini ko‘rsatadi va almashtirgichni qayerda o‘chirishni aytadi."
        ]
      },
      {
        "type": "note",
        "text": "Almashtirgich yoqiq turganda bu iPad tugagan mahsulotlarni topa olmaydi, shuning uchun manfiy zaxiraga sota olmaydi va ular uchun oldindan buyurtma ham qabul qila olmaydi — kerak bo‘lsa, uni o‘chiring. Kassirdan mahsulotlar yo‘qolib qolgandek tuyulsa, odatda sabab shu almashtirgich."
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
    "question": "Mahsulot narxini o‘zgartirsam, savatdagi narx yangilanadimi?",
    "keywords": [
      "narx o‘zgarishi",
      "narxni yangilash",
      "savat",
      "qayta hisoblash"
    ],
    "content": [
      {
        "type": "p",
        "text": "Savatda mahsulot qo‘shilgan paytdagi narx ko‘rsatiladi. To‘lovni tasdiqlash tugmasini bosganingizda DingPOS har bir mahsulotning eng so‘nggi narxini qayta so‘raydi — biror narsa o‘zgargan bo‘lsa, davom etishdan oldin yangilangan narxlar haqida ogohlantiradi."
      },
      {
        "type": "p",
        "text": "Aksiyalar ham tasdiqlash paytida noldan qayta baholanadi. Natijada jami summa, soliq yoki biror chegirma summasi o‘zgarsa, o‘zgarishlar xulosasi ko‘rsatiladi va yana tasdiqlashingiz kerak bo‘ladi — shunda ko‘rgan summangiz aynan yozilgan summaga teng bo‘ladi."
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
    "question": "Qo‘lda berilgan chegirma va aksiyalarni birga ishlatish mumkinmi?",
    "keywords": [
      "qo‘lda chegirma",
      "aksiya",
      "birga qo‘llash",
      "ustun kelish"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Qoida: “qo‘lda berilgani ustun, qatlamlar esa mustaqil”:"
      },
      {
        "type": "list",
        "items": [
          "Mahsulot uchun qo‘lda chegirma: bu qator endi mahsulot darajasidagi aksiyalarni olmaydi — qo‘lda chegirmangiz joyida qabul qilingan yakuniy qaror hisoblanadi. Biroq qator summasi xarid chegaralariga baribir hisoblanadi.",
          "Savat uchun qo‘lda chegirma: barcha aksiyalar hisoblangandan keyin qo‘llanadi, shuning uchun ikkalasi birga ishlaydi. Qolgan jami summadan ko‘p kiritsangiz, u ogohlantirish bilan avtomatik cheklanadi."
        ]
      },
      {
        "type": "p",
        "text": "Qo‘lda chegirma olib tashlansa, qator keyingi baholashda aksiyalarda qatnashish huquqini qayta oladi."
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
    "question": "Sotuvga mijozni qanday biriktiraman yoki almashtiraman?",
    "keywords": [
      "mijoz",
      "doimiy mijoz",
      "mijozni biriktirish",
      "mijozni almashtirish",
      "yangi mijoz",
      "to‘lov"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mijozni savatda yoki to‘lov ekranida biriktiring: summa ostidagi Mijoz qatori hech kim biriktirilmagan bo‘lsa mijozlar ro‘yxatini ochadi, kimdir biriktirilgan bo‘lsa Mijozni almashtirish yoki Mijozni olib tashlash imkonini beradi. To‘lov ekranida tanlangan mijoz savatning mijozi bo‘ladi va to‘lovni bekor qilsangiz ham savatda qoladi."
      },
      {
        "type": "list",
        "items": [
          "Mijozni almashtirsangiz, daraja chegirmalari, tug‘ilgan kun takliflari va ballarni ishlatish darhol qayta hisoblanadi. Allaqachon kiritilgan naqd pul yoki avans saqlanadi va yangi jami summaga nisbatan tekshiriladi.",
          "Topa olmadingizmi? Mijozlar ro‘yxatining yuqori o‘ng burchagidagi Yangi mijoz tugmasini bosing, qidiruvingizga hech narsa mos kelmasa esa o‘rtadagisini. Qidirgan matningiz shaklga tushadi — raqamlar telefonga, qolgani ismga — va yangi mijoz sotuvga biriktiriladi.",
          "Mijoz biriktirilmagan holda Nasiya tugmasini bossangiz, mijozlar ro‘yxati ochiladi va kimnidir tanlaganingizdan so‘ng Nasiya tanlanadi.",
          "Yangi mijoz qo‘lda berilgan chegirmani joriy xodimning chegirma chegarasidan oshirib yuborsa, avval menejer tasdiqlaydi; tasdiqlashni bekor qilsangiz, mijoz avvalgidek qoladi."
        ]
      },
      {
        "type": "note",
        "text": "Mijozlar Standard tarifiga kiradi; Lite’da qator “Mijozlar — Standard tarifi” deb ko‘rinadi va tarifni yangilash tafsilotlarini ochadi. To‘lov ekranidagi Mijoz qatori v3.4 da paydo bo‘lgan; oldingi versiyalarda mijoz faqat savatda biriktiriladi."
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
    "question": "To‘lovda xato qildim — buyurtmani qanday yaroqsiz deb belgilayman?",
    "keywords": [
      "yaroqsiz deb belgilash",
      "buyurtmani bekor qilish",
      "xato",
      "noto‘g‘ri buyurtma",
      "sotuvni bekor qilish"
    ],
    "content": [
      {
        "type": "p",
        "text": "«Buyurtma» bo‘limiga o‘ting, buyurtmani toping, uning tafsilotlarini oching va «Yaroqsiz deb belgilash» tugmasini bosing. «Bu buyurtma yaroqsiz deb belgilansinmi?» oynasida ixtiyoriy sabab yozish mumkin (100 belgigacha); uning yuqori o‘ng burchagidagi «Yaroqsiz deb belgilash»ni bossangiz, tamom. Sabab buyurtma tafsilotlarida va faoliyat jurnalida ko‘rinadi, yuborilgandan keyin esa tahrirlab bo‘lmaydi."
      },
      {
        "type": "p",
        "text": "Yaroqsiz deb belgilash bog‘liq hamma narsani avtomatik qaytaradi: hisobi yuritiladigan zaxira tiklanadi, buyurtma bo‘yicha olingan ballar ortga qaytariladi, ishlatilgan ballar esa qaytarib beriladi. Yaroqsiz buyurtmalar ro‘yxatda aniq belgi bilan qoladi va hisobotlardagi daromadga kirmaydi."
      },
      {
        "type": "note",
        "text": "Yaroqsiz deb belgilash «bu sotuv umuman bo‘lmagan» degani — uni joyida noto‘g‘ri kiritilgan buyurtma uchun ishlating. Mijoz tovarni keyinroq qaytarib keltirsa, «Qaytarish»dan foydalaning: asl buyurtma saqlanadi, tovarlarning faqat bir qismini qaytarish mumkin, daromad esa qaytarilgan kunda kamayadi."
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
    "question": "Tovarni qaytarish yoki almashtirishni qanday rasmiylashtiraman?",
    "keywords": [
      "qaytarish",
      "almashtirish",
      "pulni qaytarish",
      "qisman qaytarish",
      "razmerni almashtirish",
      "tashlash",
      "qaytarish sababi"
    ],
    "content": [
      {
        "type": "p",
        "text": "«Buyurtma» bo‘limiga o‘ting, asl buyurtmani oching va «Qaytarish»ni bosing. Har bir tovardan nechtasi qaytayotganini tanlang. Almashtirish uchun shu ekranning o‘zida «Almashtirish tovarini qo‘shish»ni bosing; farq summasi bir yo‘la hisob-kitob qilinadi: musbat bo‘lsa mijoz to‘laydi, manfiy bo‘lsa siz pulni qaytarasiz, nol bo‘lsa pul o‘tmaydi."
      },
      {
        "type": "list",
        "items": [
          "Asl buyurtma hech qachon o‘zgartirilmaydi. Qaytarish bugungi sana bilan alohida hujjat sifatida yaratiladi, raqami R harfi bilan boshlanadi, daromad esa qaytarilgan kunda kamayadi.",
          "Qaytariladigan pul — mijoz shu tovar uchun haqiqatda to‘lagan summa: tovar chegirmalari, savat chegirmalari va ballar bilan to‘langan qism allaqachon ajratib ayirilgan, shuning uchun pul asl narx bo‘yicha qaytarilmaydi. Soliq asl buyurtmada qo‘llangan stavka bo‘yicha hisoblanadi.",
          "Almashtirish tovarlari bugungi narxda hisoblanadi, aksiya va chegirmalarsiz.",
          "Hisobi yuritiladigan zaxirali mahsulotda qaytarilgan har bir qatorni omborga qaytarish («Zaxiraga», standart variant) yoki tashlab yuborish («Tashlash», v3.5 dan boshlab) mumkin. «Zaxiraga» zaxirani qayta qo‘shadi. «Tashlash» zaxirani o‘zgarishsiz qoldiradi va tovarning sotilgandagi tannarxini P&L dagi shu oyning «Zaxira yo‘qotishi»ga qo‘shadi. Qaytariladigan pul, soliq va ballar ikkala holatda ham bir xil.",
          "Asl buyurtmada olingan ballar ortga qaytariladi, ishlatilgan ballar qaytarib beriladi, almashtirish tovarlari esa o‘z ballarini beradi.",
          "Asl buyurtma hali yopilmagan nasiya savdo bo‘lsa, pul o‘tmaydi: qaytarilgan summa mijozning qarzdorliklaridan ayiriladi, qimmatroq almashtirish tovari esa farqni mijozning qarzdorliklariga qo‘shadi.",
          "Buyurtmani bir necha bosqichda qaytarish mumkin, lekin dastlab sotilgan miqdordan oshmasligi kerak; hammasi qaytarilgach, qaytarilgan soliq, chegirmalar va ballar yig‘indisi asl buyurtmanikiga aynan teng bo‘ladi. Aksiyadan foydalanish cheklovlari qaytarishda tiklanmaydi."
        ]
      },
      {
        "type": "p",
        "text": "«Sabab» maydoni ixtiyoriy, 100 belgigacha. U buyurtma tafsilotlarida va faoliyat jurnalida ko‘rinadi, yuborilgandan keyin esa tahrirlab bo‘lmaydi."
      },
      {
        "type": "note",
        "text": "Qaytarish uchun muddat cheklovi yo‘q, ammo asl buyurtma bo‘lishi shart. Qaytarish xato kiritilgan bo‘lsa, uni yaroqsiz deb belgilang — qaytarish mumkin bo‘lgan miqdor qayta tiklanadi."
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
    "question": "Avans bilan oldindan buyurtmani qanday qabul qilaman?",
    "keywords": [
      "oldindan buyurtma",
      "avans",
      "olib ketish",
      "qolgan summa",
      "bron"
    ],
    "content": [
      {
        "type": "p",
        "text": "To‘lov oynasida ekranning yuqori qismidagi «Sotuv»ni «Oldindan buyurtma»ga almashtiring, olib ketish sanasini tanlang, avans summasini kiriting (0 dan to to‘liq summagacha, 30% / 50% / to‘liq tezkor tugmalari bilan) va avans qanday to‘lanishini tanlang. Olib ketish haqida xabar berish uchun mijozni biriktiring."
      },
      {
        "type": "list",
        "items": [
          "Oldindan buyurtma berilganda zaxira kamayadi, shuning uchun sotish mumkin bo‘lgan miqdor darhol o‘zgaradi. Bu signal, ushlab qolish emas: keyingi sotuv oxirgi donani olib qo‘yishi mumkin. Zaxirada yo‘q tovarlar manfiyga tushadi va xarid buyurtmasi qabul qilingach tiklanadi.",
          "Mijoz olib ketishga kelganda, buyurtma tafsilotlarida «Topshirish»ni bosib qolgan summani oling. Shundan keyin buyurtma oddiy yakunlangan sotuvga aylanadi, keyingi qaytarishlar odatdagi tartibda o‘tadi.",
          "Mijoz kelmasa, buyurtma tafsilotlarida «Buyurtmani bekor qilish»ni bosing va avansni qaytarish yoki ushlab qolishni tanlang. Zaxira qayta qo‘shiladi.",
          "Avans cheki va yakuniy topshirish cheki bir xil raqamga ega."
        ]
      },
      {
        "type": "p",
        "text": "«Statistika»da oldindan buyurtmaning daromadi olib ketilgan kunda to‘liq hisobga olinadi, avans esa to‘langan kunda qabul qilingan pulga qo‘shiladi — shuning uchun bir muddat bu ikki raqam farq qiladi. “Daromad bilan qabul qilingan pul o‘rtasida qanday farq bor?” maqolasiga qarang."
      },
      {
        "type": "note",
        "text": "Oldindan buyurtmadagi tovarlarni tahrirlab bo‘lmaydi; mijoz fikrini o‘zgartirsa, bekor qilib, yangi oldindan buyurtma yarating. Oldindan buyurtma yaratish uchun Standard yoki undan yuqori tarif kerak. Tarif pasaytirilgandan keyin mavjud oldindan buyurtmalarni baribir topshirish yoki bekor qilish mumkin."
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
    "question": "Doimiy mijozlarga nasiyaga sotib, keyin pul olsa bo‘ladimi?",
    "keywords": [
      "nasiya",
      "qarzga sotish",
      "qarzdorliklar",
      "qarzni yopish",
      "keyin to‘lash"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. To‘lov usuli sifatida «Nasiya»ni tanlang — savdo mijozning qarzi sifatida yoziladi. Qarzning egasi bo‘lishi kerak, shuning uchun mijoz biriktirilmagan bo‘lsa, «Nasiya»ni bosganingizda avval mijozlar ro‘yxati ochiladi (v3.4 dan boshlab; oldingi versiyalarda mijozni savatda biriktirish so‘raladi)."
      },
      {
        "type": "p",
        "text": "Pulni yig‘ish uchun «Buyurtma» bo‘limining yuqorisidan «Qarzdorliklar»ga o‘ting. Qarzlar mijozlar bo‘yicha guruhlangan; birini oching va bitta buyurtmani, butun bir oyni yoki hammasini yoping — har safar DingPOS pul qanday to‘langanini so‘raydi. Bitta buyurtmani uning tafsilotlaridan ham yopish mumkin, xato kiritilgan yopishni esa «Qarz yopilishini bekor qilish» bilan qaytarib olish mumkin."
      },
      {
        "type": "list",
        "items": [
          "Daromad tovar berilgan kunda hisobga olinadi; qabul qilingan pul va sodiqlik ballari qarz yopilgan kunni kutadi.",
          "Yopilmagan buyurtmalar ro‘yxatda sariq belgi bilan ko‘rinadi, mijoz tafsilotlarida esa hozir qancha qarzi borligi ko‘rsatiladi.",
          "Hali yopilmagan buyurtmadagi qaytarishda pul qaytarilmaydi: summa shu mijozning qarzdorliklaridan ayiriladi.",
          "Yopilmagan buyurtmalari bor mijozni o‘chirib bo‘lmaydi."
        ]
      },
      {
        "type": "note",
        "text": "Nasiya savdolarni yaratish uchun Standard yoki undan yuqori tarif kerak. Tarif pasaytirilgandan keyin yangilarini boshlay olmaysiz, lekin mavjud qarzdorliklarni ko‘rish va yopish mumkin."
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
    "question": "Buyurtma, mijoz yoki xarid buyurtmasiga izoh qo‘shsa bo‘ladimi?",
    "keywords": [
      "izoh",
      "izohlar",
      "eslatma",
      "qayd",
      "mijoz izohi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Buyurtma, mijoz va xarid buyurtmasi tafsilotlari sahifalarining har birida izohlar bor: tahrirlash uchun izohlar kartasini bosing (500 belgigacha yozish mumkin), izoh hali bo‘lmasa — yagona «Izoh qo‘shish» qatorini. Mijoz yoki xarid buyurtmasini yaratayotganda ham formada izoh yozishingiz mumkin."
      },
      {
        "type": "p",
        "text": "Izohlar holatga bog‘liq emas: yakunlangan buyurtmalar, yaroqsiz buyurtmalar va qaytarishlarga ham izoh yozish yoki uni tahrirlash mumkin. Buyurtmaning summalari va tovarlari to‘lov paytida qat’iylanadi; izoh hujjat yonida turadi va uning mazmunini hech qachon o‘zgartirmaydi."
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
    "question": "Rang va o‘lcham kabi variantli mahsulotni qanday yarataman?",
    "keywords": [
      "variantlar",
      "o‘lcham",
      "rang",
      "xususiyatlar",
      "xususiyat qiymati",
      "variant qo‘shish"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mahsulotni tahrirlash sahifasida «Variant xususiyatlari» bo‘limida «Xususiyat qo‘shish» tugmasini bosib xususiyat qo‘shing (masalan, «Rang»), so‘ng «+ Xususiyat qiymati» orqali uning har bir qiymatini kiriting (masalan, Qizil, Ko‘k). Ikki yoki undan ko‘p xususiyat bo‘lsa (masalan, Rang × O‘lcham), DingPOS barcha kombinatsiyalarni o‘zi hosil qiladi (Qizil/S, Qizil/M, Ko‘k/S…)."
      },
      {
        "type": "p",
        "text": "Mahsulotda variantlar paydo bo‘lgach, «Variant narxi va zaxirasi» bo‘limidagi har bir kombinatsiya o‘z zaxirasini alohida yuritadi, narxi esa mahsulotning «Narx»iga ergashadi: o‘z narxi yo‘q kombinatsiya mahsulot narxini kulrang ko‘rsatadi va u o‘zgarganda o‘zgaradi, siz kiritgan raqam esa shu kombinatsiyaning o‘z narxi bo‘lib, qora rangda ko‘rinadi. Masalan, futbolkaning «Narx»ini 390 qilib, faqat L ni 350 ga o‘zgartirsangiz, M va XL 390 dan sotiladi; keyin «Narx» 420 bo‘lsa, M va XL ham 420 ga o‘tadi, L esa 350 da qoladi. «Narx» ustuni yonidagi ⓘ ichida «Mahsulot narxini qo‘llash» bor: u barcha kombinatsiyalarni yana mahsulot narxiga ergashadigan qilib qo‘yadi. v3.6 dan oldin yaratilgan mahsulotlarda har bir variant narxi shu kombinatsiyaning o‘z narxi bo‘lib qoladi, mahsulotning «Narx»i esa ulardan eng pasti bo‘ladi. Kassir, mahsulotlar ro‘yxati va mahsulot tafsilotlarida eng past narxdan eng yuqorisigacha oraliq ko‘rsatiladi, masalan «NT$350–NT$390», yoki barcha kombinatsiyalar bir xil tursa, bitta narx; narx bo‘yicha saralash eng past kombinatsiya narxidan foydalanadi. To‘lov paytida mahsulotga tegsangiz, savatga qo‘shishdan oldin variant tanlash oynasi chiqadi."
      },
      {
        "type": "p",
        "text": "«Tannarx» ham xuddi shunday ishlaydi: bo‘sh tannarx mahsulot tannarxini kulrang ko‘rsatadi va u o‘zgarganda o‘zgaradi, raqam esa kombinatsiyaning o‘z tannarxi bo‘lib, qora rangda ko‘rinadi — 0 ham shunday. «Tannarx» ustuni yonidagi ⓘ ichidagi «Mahsulot tannarxini qo‘llash» barcha kombinatsiyalarning o‘z tannarxini birdaniga tozalaydi."
      },
      {
        "type": "note",
        "text": "Xususiyat va qiymat nomlari 20 belgidan oshmasligi kerak, saqlaganingizda esa ikki chetdagi bo‘shliqlar olib tashlanadi. Hech narsa yozilmagan qiymat kombinatsiya hisoblanmaydi va saqlashda o‘tkazib yuboriladi; xususiyat nomi bo‘sh bo‘lsa, xususiyatning barcha qiymatlari bo‘sh bo‘lsa yoki mahsulotda avval saqlangan qiymatni tozalab qo‘ysangiz, saqlash qizil ramkaga olingan maydonda to‘xtaydi; uni qayta yozing yoki yonidagi × belgisini bosib olib tashlang. Variantli mahsulotda erkin narxdan foydalanib bo‘lmaydi."
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
    "question": "To‘lov paytida mahsulot narxini o‘zim kiritsam bo‘ladimi, masalan yetkazib berish haqi yoki kelishilgan tovar uchun?",
    "keywords": [
      "erkin narx",
      "narxni qo‘lda kiritish",
      "narx kiritish",
      "yetkazib berish haqi",
      "xizmat haqi",
      "kelishilgan narx",
      "bozor narxi",
      "foizli haq"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha — uni Erkin narxli mahsulot qiling. Mahsulotni tahrirlash sahifasida «Erkin narx»ni yoqing va narxni bo‘sh qoldiring; kassir va mahsulotlar ro‘yxatida narx o‘rnida «Erkin narx» ko‘rinadi. To‘lov paytida mahsulotga tegsangiz, avval narx so‘raladi; uni kiriting va «Savatga qo‘shish»ni bosing — mahsulot shu narxda qo‘shiladi."
      },
      {
        "type": "list",
        "items": [
          "0 narx ham mumkin (masalan, bepul yetkazib berish); bo‘sh maydonni qo‘shib bo‘lmaydi. Narxni do‘koningizning soliq rejimi qolgan hamma narsani narxlaganidek kiriting.",
          "Savatda har bir erkin narxli mahsulotga bitta qator to‘g‘ri keladi: unga yana tegsangiz, o‘sha qator ochiladi va narxni o‘zgartirishingiz mumkin.",
          "v3.3 dan boshlab «Hisoblash usuli» Summa va Foiz o‘rtasida almashadi. 5% bo‘lganda qator boshqa mahsulotlar oraliq summasining 5% iga teng bo‘ladi (mahsulot chegirmalaridan keyin, aksiyalar, savat chegirmasi va ballarni ishlatishdan oldin); u valyutaning o‘nlik xonalarigacha yaxlitlanadi (0,5 yuqoriga) va mahsulotlar qo‘shilganda, olib tashlanganda yoki chegirma berilganda savat bilan birga o‘zgaradi. Savatdagi qator «savatning 5%» deb ko‘rinadi, buyurtmada esa chiqqan summa yoziladi.",
          "Erkin narxli qatorga mahsulot chegirmasi berilmaydi; kamroq olish uchun uning narxini o‘zgartiring. Savat chegirmalari, ballarni ishlatish va aksiyalar (agar u aksiyalardan chiqarilmagan bo‘lsa) unga baribir tatbiq etiladi.",
          "Erkin narx yoqilganda «Aksiyalardan chiqarish» ham yoqiladi, shuning uchun haqqa chegirma berilmaydi va u summa chegaralariga hisoblanmaydi. Kelishilgan tovar aksiyalarda qatnashishi kerak bo‘lsa, uni qayta o‘chiring.",
          "Sotilgach, qator boshqalari kabi soliqqa tortiladi, ball beradi va Statistika’da hisobga olinadi; qaytarishda kiritilgan narx qaytariladi.",
          "Variantli mahsulotda erkin narxdan foydalanib bo‘lmaydi. Erkin narxli mahsulotlar hech qachon sovg‘a yoki pullik qo‘shimcha sifatida taklif qilinmaydi va almashtirishdagi almashtirilgan tovarlar ro‘yxatida ko‘rinmaydi."
        ]
      },
      {
        "type": "note",
        "text": "Bu imkoniyat barcha tariflarda bor, narxni kiritish uchun menejer tasdig‘i hech qachon kerak emas."
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
    "question": "Shtrix-kod qanday ishlaydi? Mahsulotga shtrix-kodni qanday qo‘shaman?",
    "keywords": [
      "shtrix-kod",
      "skanerlash",
      "skaner",
      "takroriy shtrix-kod",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mahsulot shtrix-kodini qo‘lda kiritish yoki kamera bilan skanerlash mumkin. Shtrix-kodlar takrorlanmasligi kerak — saqlashda shtrix-kod boshqa mahsulot bilan to‘qnashsa, DingPOS u qaysi mahsulotga tegishli ekanini ko‘rsatadi."
      },
      {
        "type": "p",
        "text": "To‘lov paytida qidiruv maydoni mahsulot nomlari va shtrix-kod boshlanishi bo‘yicha qidiradi — shtrix-kodni yozing, mahsulot darrov chiqadi. Jismoniy shtrix-kod skanerlari haqida “Jismoniy shtrix-kod skanerlari qo‘llab-quvvatlanadimi?” savoliga qarang."
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
    "question": "Mahsulotlar ro‘yxatidagi tartibni qanday o‘zgartiraman?",
    "keywords": [
      "saralash",
      "tartib",
      "tartibni o‘zgartirish",
      "joylashtirish",
      "sudrash",
      "boshiga qo‘yish"
    ],
    "content": [
      {
        "type": "p",
        "text": "«Mahsulot» ro‘yxatida «Tartibni tahrirlash» tugmasini bosing va mahsulot kartochkalarini kerakli joyga sudrang. Kassa va mahsulotlarni boshqarish bitta tartibdan foydalanadi, shuning uchun bir marta joylashtirsangiz, ikkalasi ham yangilanadi."
      },
      {
        "type": "list",
        "items": [
          "Katalog katta bo‘lsa, har bir kartochka menyusida «Boshiga ko‘chirish», «Oxiriga ko‘chirish» va «O‘ringa ko‘chirish» bor, har bir kartochkada uning hozirgi o‘rni ko‘rsatiladi.",
          "Avval toifa bo‘yicha filtrlang — shunda faqat shu toifa ichidagi tartib o‘zgaradi, boshqa toifalardagi mahsulotlar joyida qoladi.",
          "Yangi mahsulotlar boshiga qo‘shiladi; mahsulot ma’lumotlarini tahrirlash uning o‘rnini hech qachon o‘zgartirmaydi."
        ]
      },
      {
        "type": "p",
        "text": "Mahsulotlarni vaqtincha nomi, narxi yoki yaratilgan / yangilangan vaqti bo‘yicha saralash uchun «Saralash» menyusidan foydalaning. Sizning tartibingiz saqlanadi, «Qo‘lda tartib»ga qaytsangiz, u yana chiqadi."
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
    "question": "Zaxirani (ombor qoldig‘ini) qanday kuzataman?",
    "keywords": [
      "ombor",
      "zaxira",
      "zaxirani kuzatish",
      "qoldiq",
      "sanash",
      "zaxira kam"
    ],
    "content": [
      {
        "type": "p",
        "text": "Zaxirani kuzatish har bir mahsulot uchun alohida yoqiladi — mahsulotni tahrirlash sahifasida uni yoqing va hozirgi miqdorni kiriting. Mahsulotning har bir varianti o‘z zaxirasini alohida hisoblaydi."
      },
      {
        "type": "p",
        "text": "Yoqilgandan so‘ng sotuvlar va oldindan buyurtmalar zaxirani avtomatik kamaytiradi; yaroqsiz deb belgilash, qaytarish va bekor qilingan oldindan buyurtmalar uni qaytaradi; xarid buyurtmasini qabul qilish uni oshiradi. Har bir harakat to‘liq jurnalda yoziladi. Zaxira 10 yoki undan kam bo‘lsa, mahsulotlar ro‘yxatida, kassada va mahsulot tafsilotlarida u to‘q sariq rangda «kam» deb belgilanadi."
      },
      {
        "type": "p",
        "text": "Sonni qo‘lda o‘zgartirishning ikki yo‘li bor:"
      },
      {
        "type": "list",
        "items": [
          "Qayta sanash: mahsulot formasidagi zaxira sonini haqiqatda sanaganingizga moslab tahrirlang. U P&L’ga hech qachon ta’sir qilmaydi.",
          "Zaxirani tuzatish (v3.5 dan): mahsulot tafsilotlarida «Zaxirani tuzatish»ni bosing, «Ayirish» yoki «Qo‘shish»ni, miqdorni va sababni tanlang — masalan, «Muddati o‘tgan», «Shikastlangan» yoki «Namuna va sovg‘a». Ayirilgan tovar tannarxi P&L’dagi shu oylik «Zaxira yo‘qotishi»ga qo‘shiladi — «Muddati o‘tgan, shikastlangan yoki namuna sifatida chiqib ketgan tovarni zaxiradan qanday chiqaraman?» degan savolga qarang."
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
    "question": "Muddati o‘tgan, shikastlangan yoki namuna sifatida chiqib ketgan tovarni zaxiradan qanday chiqaraman?",
    "keywords": [
      "zaxirani tuzatish",
      "zaxira yo‘qotishi",
      "kamomad",
      "hisobdan chiqarish",
      "isrof",
      "muddati o‘tgan",
      "shikastlangan",
      "namuna",
      "do‘kon materiallari",
      "qayta sanash"
    ],
    "content": [
      {
        "type": "p",
        "text": "«Zaxirani tuzatish»dan foydalaning. Zaxirasi kuzatiladigan mahsulot uchun mahsulot tafsilotlarida «Zaxirani tuzatish»ni bosing, «Ayirish» yoki «Qo‘shish»ni tanlang, miqdorni + va − tugmalari bilan belgilang (u 1 dan boshlanadi; yozib kiritish uchun raqamga bosing), sababni tanlang va xohlasangiz izoh qo‘shing (100 belgigacha). Oyna o‘zgarishdan keyingi zaxirani hisoblab beradi, sabab ostidagi satr esa bu P&L’ga ta’sir qilishini aytadi."
      },
      {
        "type": "list",
        "items": [
          "Ayirish sabablari: «Ishlab chiqarishga», «Muddati o‘tgan», «Shikastlangan», «Yo‘qolgan, o‘g‘rilik», «Xodim ishlatgan», «Namuna va sovg‘a», «Do‘kon materiallari» va «Boshqa». Qo‘shish sabablari: «Do‘konda tayyorlandi», «Topildi» va «Boshqa». «Boshqa» uchun izoh majburiy.",
          "«Ishlab chiqarishga»dan tashqari, ayirgan tovaringiz o‘sha paytdagi tannarxi bo‘yicha P&L’dagi shu oylik «Zaxira yo‘qotishi»ga kiradi. U yalpi foydadan keyin turadi va sof foydani kamaytiradi; yalpi foyda va marja o‘zgarmaydi. «Ishlab chiqarishga» faqat zaxirani kamaytiradi, chunki material tannarxi undan tayyorlangan mahsulot tannarxida allaqachon bor.",
          "«Topildi» shu miqdorni «Zaxira yo‘qotishi»dan qaytarib ayiradi. «Qo‘shish»dagi «Do‘konda tayyorlandi» va «Boshqa» faqat zaxirani oshiradi va P&L’ga hech qachon kirmaydi.",
          "Tuzatish uni yozgan kuningiz hisobga olinadi. Uni oldingi sanaga qo‘yib, tahrirlab yoki o‘chirib bo‘lmaydi; xatoni to‘g‘rilash uchun «Topildi» yoki teskari yo‘nalishdagi tuzatishni yozing.",
          "Tannarxi yo‘q mahsulotni ham tuzatish mumkin, ammo P&L undagi yo‘qotish summasini hisoblay olmaydi. Oylik hisobotda tannarxi ko‘rsatilmagan yozuvlar soni qayd etiladi."
        ]
      },
      {
        "type": "p",
        "text": "Mahsulot formasida zaxira sonini tahrirlash «Qayta sanash» hisoblanadi: u haqiqatda sanaganingizga moslanadi va P&L’ga hech qachon ta’sir qilmaydi. Statistikadagi ombor harakatlari ro‘yxatida tuzatishlar («Tuzatishlar») va qayta sanashlar («Qayta sanash») alohida filtrlanadi, «Faoliyat jurnali»da esa har bir tuzatishning sababi va izohi ko‘rinadi."
      },
      {
        "type": "note",
        "text": "«Zaxirani tuzatish» uchun Standard tarifi yoki undan yuqorisi kerak. Pro tarifida «Zaxirani qo‘lda o‘zgartirish» uchun tasdiq talab qilinadigan lavozimdagi xodimlardan tasdiqlashda menejerning PIN kodi so‘raladi."
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
    "question": "Nega zaxira manfiy bo‘lib qoladi?",
    "keywords": [
      "manfiy zaxira",
      "zaxira",
      "tugagan",
      "sotuvni bloklash",
      "tuzatish"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bu ataylab shunday qilingan: zaxira yetmasa ham to‘lov hech qachon to‘xtatilmaydi. Ishlayotgan kassaning birinchi qoidasi — mijoz kutmasligi: qog‘ozdagi noto‘g‘ri raqamni keyin tuzatish mumkin, lekin uzilib qolgan sotuv butunlay yo‘qoladi."
      },
      {
        "type": "p",
        "text": "Manfiy zaxira odatda to‘ldirilgan tovar yozilmaganini yoki oldindan buyurtma qilingan tovar hali kelmaganini bildiradi (oldindan buyurtmalar zaxirani buyurtma qilingan paytda kamaytiradi). Tovar to‘ldirilishini xarid buyurtmasini qabul qilish orqali yozing — raqam o‘zi tiklanadi. Inventarizatsiyadagi farqni mahsulot formasida zaxira sonini tahrirlab to‘g‘rilang («Qayta sanash»); shikastlangan, muddati o‘tgan yoki sovg‘a qilingan tovar uchun sababini «Zaxirani tuzatish» bilan yozing. Ikkalasi ham ombor harakatlari jurnalida saqlanadi."
      },
      {
        "type": "note",
        "text": "Kassir zaxirasi 0 bo‘lgan mahsulotni topa olmasa, Sozlamalar → Qurilma sozlamalari bo‘limida Tugagan mahsulotlarni yashirish yoqilganmi, tekshiring: u yoqiq turganda bu iPad tugagan mahsulotlarni savatga qo‘sha olmaydi."
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
    "question": "Xaridlar va yetkazib beruvchilarni qanday yozib boraman?",
    "keywords": [
      "xarid buyurtmasi",
      "xaridlar",
      "yetkazib beruvchi",
      "zaxirani qabul qilish",
      "tovar to‘ldirish",
      "to‘lanmagan hisoblar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yon paneldagi «Xaridlar» bo‘limi yetkazib beruvchilar va xarid buyurtmalarini boshqaradi. Yetkazib beruvchida nomi, aloqa shaxsi, telefon, manzil va standart to‘lov shartlari saqlanadi («Qabul qilganda to‘lash» yoki «Oylik nasiya»)."
      },
      {
        "type": "steps",
        "items": [
          "«Yangi xarid»ni bosing, yetkazib beruvchini tanlang va mahsulotlar, miqdorlar hamda birlik tannarxini qo‘shing (tannarx har bir mahsulotning hozirgi tannarxi bilan oldindan to‘ldiriladi). Yetkazib berish narxini ham qo‘shish mumkin. Hali mahsulot sifatida kiritilmagan tovar uchun «Mahsulot qo‘shish» tanlov oynasida «Yangi mahsulot»ni bosing — yangi mahsulot to‘g‘ridan-to‘g‘ri xarid buyurtmasiga qator bo‘lib qo‘shiladi. Yetkazib beruvchi hali kiritilmagan bo‘lsa, yetkazib beruvchilar ro‘yxatining yuqori chap burchagidagi «Yetkazib beruvchi qo‘shish»ni bosing — yangi yetkazib beruvchi to‘g‘ridan-to‘g‘ri xarid buyurtmasiga qaytadi.",
          "Qoralama zaxira va to‘lanmagan hisoblarga tegmaydi — uni xohlaganingizcha tahrirlang yoki o‘chiring.",
          "Tovar kelganda «Zaxirani qabul qilish»ni bosing: kuzatiladigan zaxira ko‘payadi, xarid buyurtmasi raqam oladi va qulflanadi. Odatda qabul qilish har bir mahsulot tannarxini shu birlik tannarxiga almashtiradi; tannarxlar o‘zgarmasligi uchun xarid buyurtmasida «Mahsulot tannarxini yangilash»ni o‘chiring. Uning ostidagi «Yetkazib berishni tannarxga qo‘shish» (yangi xarid buyurtmalarida yoqilgan) yetkazib berish narxini qatorlar o‘rtasida summasiga qarab taqsimlaydi, shuning uchun har bir mahsulotga yoziladigan tannarx uning ulushini ham o‘z ichiga oladi: un 10 × $30, sariyog‘ 1 × $60 va $25 yetkazib berish bo‘lsa, unning tannarxi $32, sariyog‘niki $64 bo‘ladi."
        ]
      },
      {
        "type": "p",
        "text": "To‘lov shartlari keyingi qadamni belgilaydi: «Qabul qilganda to‘lash» buyurtmalari to‘langan deb belgilanadi, «Oylik nasiya» buyurtmalari esa «To‘lanmagan hisoblar»da to‘lanmagan holda qoladi — ularni yetkazib beruvchi bo‘yicha yopishingiz mumkin: bitta buyurtma, shu oy yoki hammasini."
      },
      {
        "type": "p",
        "text": "Sotmaydigan xom ashyo — masalan, un yoki qadoqlash materiallari — ham xuddi shunday xarid qilinadi: ularni sotuvga mo‘ljallanmagan mahsulot sifatida qo‘shing — «Un yoki qadoqlash materiali kabi xom ashyoni mahsulot sifatida qo‘sha olamanmi?» degan savolga qarang."
      },
      {
        "type": "note",
        "text": "Xaridlar uchun Standard tarifi yoki undan yuqorisi kerak. Qabul qilingan to‘lanmagan buyurtmalari bor yetkazib beruvchini o‘chirib bo‘lmaydi."
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
    "question": "Un yoki qadoqlash materiali kabi xom ashyoni mahsulot sifatida qo‘sha olamanmi?",
    "keywords": [
      "sotuvga mo‘ljallanmagan",
      "xom ashyo",
      "masalliq",
      "materiallar",
      "qadoqlash",
      "sarf materiallari",
      "kassada sotish",
      "xaridlar",
      "tannarx"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Mahsulot formasida suratning pastidagi «Kassada sotish»ni o‘chiring (u odatda yoqiq turadi) — mahsulot sotuvga mo‘ljallanmagan bo‘lib qoladi: narx kerak emas, tannarxi, shtrix-kodi, zaxirasi va variantlari saqlanadi, mahsulotlar ro‘yxatida esa narx o‘rnida «Sotuvga mo‘ljallanmagan» ko‘rinadi."
      },
      {
        "type": "list",
        "items": [
          "Sotuvga mo‘ljallanmagan mahsulot kassaning katalogida, toifalarida, qidiruvida va shtrix-kod skanerlashda hech qachon ko‘rinmaydi, shuningdek sovg‘a, qo‘shimcha, aksiya qamrab oladigan mahsulot yoki almashtirilgan tovar bo‘la olmaydi. Faqat sotuvga mo‘ljallanmagan mahsulotlar bor toifa kassaning toifalar panelida ko‘rsatilmaydi.",
          "Do‘konda sotuvga mo‘ljallanmagan mahsulotlar bo‘lsa, «Mahsulot» ekranining yuqori o‘ng burchagida filtr tugmasi paydo bo‘ladi: qidiruv va toifalar bilan birga «Barcha mahsulotlar», «Sotuvda» yoki «Sotuvga mo‘ljallanmagan»ni tanlang.",
          "Xarid buyurtmalari, qabul qilish, «Mahsulot tannarxini yangilash» va to‘lanmagan hisoblar boshqa mahsulotlardagi kabi ishlaydi, shuning uchun materialning xarid tannarxi va zaxirasini «Xaridlar» orqali yozib borish mumkin.",
          "Boshqa mahsulotlarni sotish uning zaxirasini kamaytirmaydi. Bir qismini ishlatganingizda mahsulot tafsilotlarida «Zaxirani tuzatish» bilan ayirishni yozing: mahsulotlarga ketgani uchun «Ishlab chiqarishga», qog‘oz paketlar yoki tozalash vositalari kabilar uchun «Do‘kon materiallari».",
          "Uni istalgan vaqtda qaytarishingiz mumkin, narxi va soliqlari saqlanib turadi. Allaqachon yaratilgan buyurtmalar va hisobotlarga ta’sir qilmaydi."
        ]
      },
      {
        "type": "p",
        "text": "Tannarxi P&L’ga qanday kiradi: xaridlar u yerda bevosita hisobga olinmaydi. Undan tayyorlanadigan mahsulot bo‘lsa, tannarxni o‘sha mahsulotga qo‘shing — u sotilganda hisobga olinadi. Hech bir mahsulot tannarxiga kirmaydigan materiallar, agar zaxirasi yuritilsa, ishlatilganda «Do‘kon materiallari» sifatida, yuritilmasa bir martalik xarajat sifatida yoziladi. Bir pulni ikki usulda kiritmang, aks holda u ikki marta hisoblanadi."
      },
      {
        "type": "note",
        "text": "Sotuvga mo‘ljallanmagan mahsulotlar barcha tariflarda bor; xaridlar, zaxirani kuzatish va «Zaxirani tuzatish» uchun Standard tarifi yoki undan yuqorisi kerak."
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
    "question": "Daromad bilan qabul qilingan pul o‘rtasida qanday farq bor?",
    "keywords": [
      "daromad",
      "qabul qilingan pul",
      "kelib tushgan pul",
      "statistika",
      "yalpi foyda",
      "daromaddan yalpi foydagacha",
      "kassani solishtirish",
      "avans",
      "nasiya savdo",
      "soliq"
    ],
    "content": [
      {
        "type": "p",
        "text": "Daromad tovar topshirilgan kunda hisobga olinadi — barcha chegirmalardan keyin va soliqdan oldin; Qabul qilingan pul esa pul kelgan kunda hisobga olinadi va siz olgan pulni, soliq bilan birga, ko‘rsatadi. Soliq undiradigan do‘konda Qabul qilingan pul daromaddan soliq miqdoricha ko‘p bo‘ladi, hatto peshtaxtada to‘langan buyurtmalarda ham. Ikkalasi ham Statistikadagi birinchi qatorning dastlabki ikkita kartasi bo‘lib, Yalpi foyda, Buyurtmalar va O‘rtacha buyurtma kartalari bilan yonma-yon turadi."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Statistikadagi karta qatorlari: birinchi qatorda Daromad va Qabul qilingan pul yonma-yon turibdi"
      },
      {
        "type": "h2",
        "text": "Daromad va Qabul qilingan pul farq qilganda"
      },
      {
        "type": "p",
        "text": "Masalan, soliq narxga kiritilgan do‘kon 5% soliq bilan NT$1,050 ga sotsa va mijoz peshtaxtada to‘lasa, Daromad NT$1,000, Qabul qilingan pul esa NT$1,050 bo‘ladi. Soliqdan tashqari, bu ikki ko‘rsatkich quyidagi hollarda ajraladi:"
      },
      {
        "type": "list",
        "items": [
          "Nasiya savdo: tovar bugun chiqib ketadi va bugungi Daromadga qo‘shiladi; pul esa buyurtma bo‘yicha qarz yopilgan kuni Qabul qilingan pulga qo‘shiladi.",
          "Oldindan buyurtma: avans to‘langan kuni Qabul qilingan pulga qo‘shiladi; Daromad esa olib ketish kuni to‘liq hisobga olinadi.",
          "Ushlab qolingan avanslar: mijoz oldindan buyurtmani bekor qilsa va avansni o‘zingizda qoldirsangiz, u to‘langan kuniyoq Qabul qilingan pulda hisobga olingan bo‘ladi. Statistika uni alohida, Ushlab qolingan avanslar sifatida ko‘rsatadi va u hech qachon Daromadga kirmaydi.",
          "Avvalgi buyurtmani yaroqsiz deb belgilash: qaytarilgan pul yaroqsiz deb belgilangan kunning Qabul qilingan pulidan ayriladi, shuning uchun o‘sha kunning Qabul qilingan puli manfiy bo‘lishi mumkin. Yaroqsiz deb belgilangan buyurtmaning o‘zi sotuv sanasi bo‘yicha hisoblanadi va Buyurtmalar kartasi ostidagi qatorda ko‘rsatiladi.",
          "Naqd pulni yaxlitlash: Naqd pulni yaxlitlash natijasida buyurtma summasidan ortiq yoki kam olingan qism Qabul qilingan pulga kiradi, hech qachon Daromadga kirmaydi."
        ]
      },
      {
        "type": "p",
        "text": "Ikkala summadan biri noldan farq qilganda, Qabul qilingan pul kartasi ostidagi qatorda uning Naqd pulni yaxlitlash yoki Ushlab qolingan avanslar qismi ko‘rsatiladi."
      },
      {
        "type": "h2",
        "text": "Soliq va karta tafsilotlari"
      },
      {
        "type": "p",
        "text": "Daromad bilan Qabul qilingan pul orasidagi soliq farqi Daromaddan yalpi foydagacha bo‘limida ro‘yxatlangan; uni Yalpi foyda kartasining pastki qismidan oching. U Daromad (soliq bilan), Soliq va Daromad (soliqsiz) qatorlarini ko‘rsatadi. Avstraliya, Buyuk Britaniya, Yangi Zelandiya va Singapurdagi do‘konlar bu yerda o‘z soliq nomini ko‘radi, masalan, Daromad (GST kiritilgan), GST va Daromad (GST kiritilmagan)."
      },
      {
        "type": "p",
        "text": "Deklaratsiya uchun yig‘ilgan soliqni ko‘rish uchun Soliq kartasidan Soliq hisobotini oching."
      },
      {
        "type": "p",
        "text": "Daromad, Qabul qilingan pul va Buyurtmalar kartalaridagi ⓘ belgisi bu qoidalarni ilovaning o‘zida tushuntiradi, jumladan Buyurtmalar kartasi ostidagi qatorda ko‘rsatiladigan yaroqsiz deb belgilangan buyurtmalarni ham."
      },
      {
        "type": "h2",
        "text": "Kassani solishtirish va sotuvni baholash"
      },
      {
        "type": "p",
        "text": "Kassani solishtirish uchun Qabul qilingan pulni kassa tortmasi va karta terminali bilan taqqoslang. Statistikadagi To‘lov usullari kartasida har bir usul uchun bitta qator bor, usul nomini o‘zgartirishdan oldingi sotuvlar esa yangi nom ostida hisoblanadi. Davr ichida qancha sotganingizni bilish uchun Daromadga qarang. Qaytarishlar Daromadni qaytarish kunida kamaytiradi."
      },
      {
        "type": "note",
        "text": "Soliqsiz Daromad v3.5 da paydo bo‘lgan va o‘tgan davrlar ham shu tarzda qayta hisoblangan, shuning uchun soliq undiradigan do‘kon yangilanishdan keyin avvalgidan kamroq Daromad ko‘radi. Bu tuzatish: avvalgi versiyalar Daromadga soliqni ham kiritgan, narxiga soliq kiritilmagan do‘konlar esa yig‘ilgan sotuv solig‘ini ham Daromad deb hisoblagan."
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
    "question": "Hisobotlarda qaysi davrlarni ko‘rish mumkin?",
    "keywords": [
      "statistika",
      "hisobotlar",
      "hisobot davri",
      "shu hafta",
      "shu oy",
      "shu yil",
      "maxsus davr",
      "sana",
      "mahsulotlar reytingi",
      "solishtirish",
      "eng ko‘p sotilgan mahsulotlar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Statistika tepasidagi davr panelidan Bugun, Kecha, Shu hafta, Shu oy, Shu yil yoki Butun davrni tanlang, yoxud Maxsus tugmasini bosib istalgan boshlanish va tugash sanasini belgilang. Sahifadagi har bir karta siz tanlagan davrga ergashadi. Shu hafta qurilmadagi haftaning birinchi kunidan boshlanadi, Shu oy 1-sanadan, Shu yil 1-yanvardan boshlanadi, Butun davr esa do‘koningizdagi birinchi savdodan boshlanadi; har bir variant qaysi sanalarni qamrab olishini ko‘rsatadi."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Statistika tepasidagi davr paneli: Maxsus tanlangan, Boshlanishi va Tugashi sanalarini tanlash oynasi ochiq"
      },
      {
        "type": "h2",
        "text": "Maxsus davrni tanlash"
      },
      {
        "type": "p",
        "text": "Oldindan belgilangan kalendar davrlariga sig‘maydigan oraliq kerak bo‘lsa, masalan, ikki oylik yoki choraklik soliq topshirish davri uchun, Maxsus tugmasidan foydalaning."
      },
      {
        "type": "steps",
        "items": [
          "Statistikani oching va davr panelidagi Maxsus tugmasini bosing.",
          "Ochilgan oynada boshlanish va tugash sanalarini tanlang.",
          "Hisobot yangilanishi uchun sanalarni tasdiqlang."
        ]
      },
      {
        "type": "p",
        "text": "Soliq kartasi va soliq hisoboti ham tanlangan davrga ergashadi, shuning uchun Maxsus bilan topshirish oralig‘ini belgilasangiz, ikkalasi ham yangilanadi; batafsil ma’lumot uchun tegishli soliq hisoboti maqolasiga qarang. Davr panelining o‘ng tomonidagi Solishtirish tugmasi tanlangan davrni undan oldingi davr yoki o‘tgan yilning shu davri bilan yonma-yon ko‘rsatadi; batafsil ma’lumot uchun tegishli kengaytirilgan hisobotlar maqolasiga qarang."
      },
      {
        "type": "h2",
        "text": "Sahifadagi kartalar"
      },
      {
        "type": "p",
        "text": "Davr panelidan pastda Statistika ikki qator ko‘rsatkich kartalarini, undan keyin juft-juft grafiklar va xulosa kartalarini ko‘rsatadi, eng pastda esa Hozir bo‘limi turadi."
      },
      {
        "type": "list",
        "items": [
          "Birinchi qator: Daromad, Qabul qilingan pul, Yalpi foyda, Buyurtmalar va O‘rtacha buyurtma.",
          "Ikkinchi qator: Jami chegirmalar, Soliq, Sof foyda, Tannarxsiz mahsulotlar va Xizmat ko‘rsatilgan mijozlar.",
          "Birinchi juftlik: dinamika grafigi va uning yonida Tannarx va yalpi foyda.",
          "Ikkinchi juftlik: Mahsulotlar reytingi va uning yonida Toifalar bo‘yicha ulush.",
          "Uchinchi juftlik: To‘lov usullari va uning yonida aksiyalar kartasi.",
          "Pastdagi karta: Hozir."
        ]
      },
      {
        "type": "p",
        "text": "Ikkinchi qatordagi ikkita karta faqat ayrim hollarda chiqadi. v3.6 da qo‘shilgan Soliq kartasi faqat soliqli do‘kon uchun yoki tanlangan davrda soliq bilan qilingan sotuvlar bo‘lganda chiqadi. Sof foyda kartasi faqat davr Shu oy bo‘lsa yoki roppa-rosa bir butun oyni qamrasa chiqadi."
      },
      {
        "type": "note",
        "text": "Davrda buyurtmalar bo‘lmasa, Statistika faqat davr panelini, xabarni va Hozir bo‘limini ko‘rsatadi."
      },
      {
        "type": "h2",
        "text": "Grafiklar va Mahsulotlar reytingini o‘qish"
      },
      {
        "type": "p",
        "text": "Dinamika grafigining yuqori o‘ng burchagidagi menyu uni Daromad, Buyurtmalar, O‘rtacha buyurtma va Xizmat ko‘rsatilgan mijozlar o‘rtasida almashtiradi. Grafikda Dinamika va Hafta kuni × soat almashtirgichi ham bor; bu ko‘rinish haqida tegishli kengaytirilgan hisobotlar maqolasiga qarang. Uning yonidagi Tannarx va yalpi foyda grafigi har bir davrning mahsulot tannarxi va yalpi foydasini bitta ustunda jamlab ko‘rsatadi. Bitta kun soatma-soat chiziladi, uzunroq davrlarda esa uzunligiga qarab ma’lumotlar kun, hafta, oy yoki yil bo‘yicha guruhlanadi."
      },
      {
        "type": "p",
        "text": "Dinamika grafigi, Tannarx va yalpi foyda yoki To‘lov usullarini bosib turing — bitta oraliq bo‘yicha ko‘rsatkichlar kartasi chiqadi. Solishtirish yoqilgan bo‘lsa, dinamika grafigining kartasida shu davrning ko‘rsatkichi va solishtirish davrining ko‘rsatkichi yonma-yon chiqadi. Oraliqlar bo‘ylab siljish uchun barmog‘ingizni chapga yoki o‘ngga suring; grafik ustida yuqoriga yoki pastga surilsa, sahifa odatdagidek aylanadi."
      },
      {
        "type": "p",
        "text": "Mahsulotlar reytingi tanlangan davr uchun eng ko‘p sotilgan 5 ta mahsulotni ko‘rsatadi. Kartani yoki Barchasini ko‘rish tugmasini bosing — o‘sha davrda sotilgan barcha mahsulotlar qaytarishlardan keyingi miqdor bo‘yicha tartiblangan ro‘yxatda ochiladi. Variantli mahsulot har bir variant uchun alohida qatorda chiqadi."
      },
      {
        "type": "note",
        "text": "Kalendar davrlari v2.4 da paydo bo‘lgan; avvalgi versiyalarda sirpanuvchi davrlar bor edi (Bugun / 7 kun / 30 kun / Butun davr). Agar hali ham shularni ko‘rsangiz, DingPOS’ni App Store orqali yangilang."
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
    "question": "Kengaytirilgan hisobotlar nimani ko‘rsatadi?",
    "keywords": [
      "kengaytirilgan hisobotlar",
      "statistika",
      "solishtirish",
      "davrlarni solishtirish",
      "o‘tgan yil",
      "hafta kuni × soat",
      "issiqlik xaritasi",
      "gavjum soatlar",
      "sekin sotiladigan mahsulotlar",
      "daromadi o‘zgargan mahsulotlar",
      "toifalar bo‘yicha ulush",
      "ombor qiymati",
      "takroriy xarid ulushi",
      "ballar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kengaytirilgan hisobotlar alohida ekran emas: ular Statistikada turadi va tepada tanlangan davrga ergashadi. Ular davrlarni solishtirish, hafta kuni va soat bo‘yicha issiqlik xaritasi, Sekin sotiladigan mahsulotlar, O‘zgarishlar, a’zolarning takroriy xarid ulushi, Toifalar bo‘yicha ulush hamda zaxira va ballar uchun Hozir bo‘limini qo‘shadi. Ularning hammasi har bir tarifda mavjud va sinov tugagandan keyin ham ochiq qoladi."
      },
      {
        "type": "h2",
        "text": "Solishtirish"
      },
      {
        "type": "p",
        "text": "Solishtirish Statistikadagi davr panelining o‘ng tomonida turadi va tanlangan davrni oldingi davr bilan solishtiradi."
      },
      {
        "type": "steps",
        "items": [
          "Yon paneldan Statistikani oching.",
          "Tepada davrni tanlang.",
          "Davr panelining o‘ng tomonidagi Solishtirish tugmasini bosing.",
          "Menyudan solishtirish variantini tanlang."
        ]
      },
      {
        "type": "p",
        "text": "Mavjud variantlar siz tanlagan davrga bog‘liq:"
      },
      {
        "type": "list",
        "items": [
          "Yo‘q solishtirishni o‘chiradi.",
          "O‘tgan hafta bir kunni o‘tgan haftaning shu kuni bilan yoki shu haftani o‘tgan hafta bilan solishtiradi.",
          "O‘tgan oy shu oyni o‘tgan oy bilan solishtiradi.",
          "O‘tgan yil shu yilni o‘tgan yil bilan yoki tanlangan davrni o‘tgan yilning shu davri bilan solishtiradi.",
          "Oldingi maxsus davrni undan oldingi xuddi shuncha kun bilan solishtiradi."
        ]
      },
      {
        "type": "p",
        "text": "Solishtirish faol bo‘lsa, Statistika Soliq, Sof foyda va Tannarxsiz mahsulotlardan tashqari har bir kartaga o‘zgarishni va solishtirish davrining ko‘rsatkichini qo‘shadi. Daromad, Qabul qilingan pul, Yalpi foyda, Buyurtmalar, O‘rtacha buyurtma, Jami chegirmalar va Xizmat ko‘rsatilgan mijozlar kartalarining har birida “▼ 3%, o‘tgan oy bilan solishtirganda” kabi solishtirish qatori chiqadi."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Statistika Shu hafta davrida, Solishtirish O‘tgan haftaga o‘rnatilgan: solishtirish paneli va birinchi qator kartalari, har birining ostida o‘zgarish va solishtirish ko‘rsatkichi",
        "caption": "Ikkala davrning ko‘rsatkichlarini ko‘rish uchun kartaning ostidagi istalgan solishtirish qatorini bosib, Davrlarni solishtirish sahifasini oching."
      },
      {
        "type": "p",
        "text": "Jami chegirmalardagi o‘zgarish doim kulrang bo‘ladi, chunki chegirmaning ko‘pligi o‘z-o‘zidan yaxshi ham, yomon ham emas. Ikkala davrning ko‘rsatkichlari ro‘yxatlangan Davrlarni solishtirish sahifasini ochish uchun istalgan solishtirish qatorini bosing. Dinamika grafigiga solishtirish davri uchun ochroq chiziq qo‘shiladi. Davr hali tugamagan bo‘lsa, solishtirish davri ham xuddi shu paytda kesiladi."
      },
      {
        "type": "h2",
        "text": "Hafta kuni × soat"
      },
      {
        "type": "p",
        "text": "Dinamika grafigi sarlavhasidagi Dinamika tugmasini Hafta kuni × soatga o‘tkazing — yetti kun va 24 soatlik issiqlik xaritasi chiqadi. Katak qanchalik to‘q bo‘lsa, o‘sha soatda shunchalik ko‘p sotgansiz. Issiqlik xaritasini daromad va buyurtmalar o‘rtasida almashtirish mumkin. Solishtirish orqali taqqoslash yoqilgan bo‘lsa, xarita qaysi soatlar o‘sgani va qaysilari kamaygani ham ko‘rsatadi."
      },
      {
        "type": "h2",
        "text": "Sekin sotiladigan mahsulotlar"
      },
      {
        "type": "p",
        "text": "Reyting kartasi sarlavhasini Sekin sotiladigan mahsulotlarga o‘tkazing — mahsulotlar eng kam sotilganidan eng ko‘pigacha tartiblanadi. Har bir qatorda mahsulotning hozirgi zaxirasi va oxirgi sotilgan sanasi ko‘rsatiladi. Hech sotilmagan mahsulotlar Hech sotilmagan deb belgilanadi, variantli mahsulot uchun esa har bir variantga alohida qator beriladi. Odatda faqat zaxirada bor mahsulotlar ko‘rsatiladi."
      },
      {
        "type": "h2",
        "text": "O‘zgarishlar"
      },
      {
        "type": "p",
        "text": "Reyting kartasi sarlavhasini O‘zgarishlarga o‘tkazing — solishtirish davriga nisbatan daromadi eng ko‘p oshgan 3 ta va eng ko‘p kamaygan 3 ta mahsulot chiqadi. Har bir qatorda ikkala davrning daromadi va farqi ko‘rsatiladi; har bir variant o‘zi bilan solishtiriladi."
      },
      {
        "type": "p",
        "text": "Avval Solishtirish bo‘limida davrni tanlang. Solishtirish Yo‘q bo‘lsa yoki davr Butun davr bo‘lsa, karta solishtirish davrini tanlashni eslatadi. To‘liq Daromadi o‘zgargan mahsulotlar ro‘yxatini ochish uchun kartani yoki Barchasini ko‘rish tugmasini bosing — u O‘sganlar va Tushganlar bo‘limlariga bo‘lingan."
      },
      {
        "type": "h2",
        "text": "Takroriy xarid ulushi"
      },
      {
        "type": "p",
        "text": "Xizmat ko‘rsatilgan mijozlar kartasining oxirgi qatorida takroriy xarid ulushi “Takroriy xarid ulushi … · … ta a’zo qaytdi” ko‘rinishida chiqadi. U tanlangan davrda xarid qilgan va jami ikki yoki undan ko‘p marta xarid qilgan a’zolar ulushini ko‘rsatadi. Solishtirish orqali taqqoslash yoqilgan bo‘lsa, quyidagi qatorda foiz punktlaridagi o‘zgarish va solishtirish davrining ulushi ko‘rsatiladi."
      },
      {
        "type": "h2",
        "text": "Toifalar bo‘yicha ulush"
      },
      {
        "type": "p",
        "text": "Toifalar bo‘yicha ulush har bir toifaning daromadi va ulushini mahsulotning joriy toifasi bo‘yicha kattasidan kichigigacha ro‘yxatlaydi. Toifasiz mahsulotlar Toifasiz qatoriga tushadi va qatorlar yig‘indisi roppa-rosa Daromadga teng bo‘ladi."
      },
      {
        "type": "h2",
        "text": "Hozir"
      },
      {
        "type": "p",
        "text": "Hozir bo‘limi ombor va ballar haqida uchta ma’lumotni ko‘rsatadi:"
      },
      {
        "type": "list",
        "items": [
          "Ombor qiymati: hozirgi zaxira × hozirgi tannarx.",
          "Tanlangan davrdagi barcha zaxira harakatlari.",
          "Mijozlarda turgan, lekin ishlatilmagan ballar va ular bilan eng ko‘pi bilan qancha chegirma qilish mumkinligi."
        ]
      },
      {
        "type": "p",
        "text": "Ombor qiymati va ishlatilmagan ballar joriy qoldiqlardir, shuning uchun tepadagi davrni o‘zgartirish ularni o‘zgartirmaydi."
      },
      {
        "type": "h2",
        "text": "Tariflar va ruxsatlar"
      },
      {
        "type": "p",
        "text": "v3.4 dan boshlab barcha kengaytirilgan hisobotlar har bir tarifda, jumladan Lite tarifida, ochiq va sinov tugagandan keyin ham ochiq qoladi. O‘zgarishlar ham v3.4 da qo‘shilgan. Avvalgi versiyalarda kengaytirilgan hisobotlar faqat Pro tarifida ko‘rsatilgan, boshqa tariflarda esa kichik qulf turgan; agar hali ham qulflarni ko‘rsangiz, DingPOS’ni App Store orqali yangilang."
      },
      {
        "type": "p",
        "text": "Lite tarifi zaxira va sodiqlik ballarini yuritmaydi, ammo Hozir bo‘limi do‘koningizda allaqachon mavjud Ombor qiymati va ishlatilmagan ballarni (masalan, sinov davridan qolganini) yoki nolni baribir ko‘rsatadi."
      },
      {
        "type": "note",
        "text": "Xodimlar kengaytirilgan hisobotlarni Statistika ruxsati bilan ko‘radi; Ombor qiymati summalari uchun esa Tannarx va foyda ruxsati ham kerak."
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
    "question": "Tannarxni kiritmasam, yalpi foyda hisobotda qanday ko‘rinadi?",
    "keywords": [
      "tannarx",
      "foyda",
      "yalpi foyda",
      "marja",
      "yalpi marja",
      "hisobotlar",
      "yalpi foyda hisoblanmagan",
      "tannarx kiritilmagan",
      "tannarxsiz mahsulotlar",
      "daromaddan yalpi foydagacha"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tannarx — ixtiyoriy maydon, shuning uchun tannarxi yo‘q mahsulotlar yalpi foydaga kiritilmaydi, ularning daromadi esa to‘liq hisobga olinadi. Statistikadagi Tannarxsiz mahsulotlar kartasi davrda sotilgan yoki qaytarilgan nechta mahsulotning tannarxi yo‘qligini ko‘rsatadi, masalan, “12 ta mahsulot”. 0 tannarx ham tannarx hisoblanadi va ro‘yxatga kirmaydi; barcha mahsulotlarda tannarx bo‘lsa, karta “0 ta mahsulot · tannarx ma’lumotlari to‘liq” deb yoziladi."
      },
      {
        "type": "h2",
        "text": "Tannarxsiz mahsulotlarni topish"
      },
      {
        "type": "p",
        "text": "Statistikada Tannarxsiz mahsulotlar kartasini yoki Mahsulotlarni ko‘rish tugmasini bosib, Tannarxsiz mahsulotlar sahifasini oching. Unda mahsulotlar yalpi foydadan tashqarida qolgan daromad bo‘yicha kattasidan kichigigacha tartiblangan."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Tannarxsiz mahsulotlar sahifasi: mahsulotlar yalpi foydadan tashqarida qolgan daromad bo‘yicha tartiblangan"
      },
      {
        "type": "steps",
        "items": [
          "Mahsulotni ochish uchun Tannarxsiz mahsulotlar ro‘yxatidagi qatorni bosing.",
          "Tahrirlash tugmasini bosing va Tannarx (ixtiyoriy) maydoniga tannarxni kiriting.",
          "Tannarxsiz mahsulotlarga qayting — qator Tannarx qo‘shildi deb belgilanganini ko‘rasiz."
        ]
      },
      {
        "type": "p",
        "text": "Variantli mahsulot faqat tannarxsiz sotilgan har bir variantga tannarx belgilangandan keyin Tannarx qo‘shildi deb belgilanadi: variantning o‘z tannarxi bo‘lishi yoki mahsulot tannarxidan foydalanishi kerak. v3.6 dan boshlab, Yetkazib berishni tannarxga qo‘shish yoqilgan bo‘lsa, xarid buyurtmasi yetkazib berish haqini ham o‘zi yozadigan mahsulot tannarxiga taqsimlay oladi."
      },
      {
        "type": "note",
        "text": "Siz kiritgan tannarx faqat keyingi sotuvlarga ta’sir qiladi. Allaqachon amalga oshgan sotuvlar qayta hisoblanmaydi."
      },
      {
        "type": "h2",
        "text": "Tannarx va soliqni kiritish"
      },
      {
        "type": "p",
        "text": "Mahsulot formasida tannarx maydoni har bir do‘konda Tannarx (ixtiyoriy) deb yoziladi. Soliqli do‘konda Tannarx (ixtiyoriy) yonida ⓘ belgisi chiqadi; u soliq Kirim solig‘ini hisobga olish sozlamasiga qarab qanday qo‘llanishini ko‘rsatadi:"
      },
      {
        "type": "list",
        "items": [
          "Kirim solig‘ini hisobga olish yoqilgan: tannarxni qaytarib olishingiz mumkin bo‘lgan soliqdan oldin kiriting. ⓘ izohi shunday: “Tannarxni qaytarib olish mumkin bo‘lgan soliqsiz kiriting — u kirim solig‘iga yoziladi. Qaytarib olinmaydigan soliq tannarxning bir qismi hisoblanadi.”",
          "Kirim solig‘ini hisobga olish o‘chirilgan: to‘lagan summangizni kiriting, qaytarib olish mumkin bo‘lgan soliqni ayirib. ⓘ izohi shunday: “Hisobga olinadigan soliq tannarxga kirmaydi, hisobga olinmaydigan soliq esa kiradi. Kirim solig‘ini hisobga olsangiz, Do‘kon ma’lumotlari sahifasida «Kirim solig‘ini hisobga olish» ni yoqing.”"
        ]
      },
      {
        "type": "p",
        "text": "Do‘koningiz kirim solig‘ini topshirsa, Do‘kon ma’lumotlari bo‘limida Kirim solig‘ini hisobga olishni yoqing."
      },
      {
        "type": "h2",
        "text": "Yalpi foyda tafsilotini o‘qish"
      },
      {
        "type": "p",
        "text": "Yalpi foyda — barcha chegirmalardan (mahsulot va buyurtma chegirmalari, aksiyalar, ballarni ishlatish) keyingi va soliqdan oldingi daromaddan tannarxni ayirganda chiqadi. Marja — yalpi foydaning tannarxli mahsulotlar daromadiga nisbati, shuning uchun tannarxsiz mahsulotlar marjani pasaytirmaydi. Qaytarish o‘sha tovarlar keltirgan yalpi foydani qaytarish kunida ayiradi."
      },
      {
        "type": "p",
        "text": "Statistikada Yalpi foyda kartasini bosing — Daromaddan yalpi foydagacha bo‘limi ochiladi; u qator-baqator ayirib boradi:"
      },
      {
        "type": "list",
        "items": [
          "Daromad (soliq bilan)",
          "Soliq",
          "Daromad (soliqsiz)",
          "Tannarxsiz daromad",
          "Mahsulot tannarxi",
          "Yalpi foyda va marja"
        ]
      },
      {
        "type": "p",
        "text": "Qatorlar yig‘indisi Yalpi foyda kartasiga roppa-rosa teng bo‘ladi. Avstraliya, Buyuk Britaniya, Yangi Zelandiya va Singapurdagi do‘konlar soliq qatorlarida o‘z soliq nomini ko‘radi, masalan, Daromad (GST kiritilgan)."
      },
      {
        "type": "note",
        "text": "Yalpi foydaning bu hisobi v3.1 da paydo bo‘lgan. Avvalgi versiyalar faqat qo‘lda berilgan mahsulot chegirmalarini ayirgan va narxga kiritilgan soliqni foyda deb hisoblagan, shuning uchun yangilangandan keyin chegirmali yoki narxiga soliq kiritilgan davrlarda yalpi foyda kamroq ko‘rinadi. Bu tuzatish, yo‘qolgan ma’lumot emas."
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
    "question": "Do‘konim har oyda aslida qancha foyda qilganini qanday ko‘raman?",
    "keywords": [
      "foyda va zarar",
      "p&l",
      "sof foyda",
      "yalpi foyda",
      "oylik foyda",
      "doimiy xarajatlar",
      "xarajatlar",
      "operatsion foyda",
      "moliyaviy natijalar hisoboti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yon paneldagi Statistika ostida joylashgan P&L bo‘limini oching — har bir oyning sof foydasini va u qanday hisoblanganini ko‘rasiz. Ro‘yxat faoliyat bo‘lgan birinchi oydan boshlab yangisidan eskisigacha tartiblangan: joriy oy Davom etmoqda deb belgilanadi, har bir yil sarlavhasi esa shu yilning tugagan oylaridagi sof foydani qo‘shib ko‘rsatadi. Birinchi qator Barcha xarajatlar oyga qaramay barcha xarajatlarni ochadi."
      },
      {
        "type": "h2",
        "text": "Oylik tafsilot"
      },
      {
        "type": "steps",
        "items": [
          "Yon paneldagi Statistika ostidagi P&L bo‘limini oching.",
          "Oyni bosing — uning sof foydasi qanday hisoblanganini ko‘rasiz."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "P&L oy sahifasi: Davom etmoqda belgisi, sof foyda va daromaddan xarajatlargacha bo‘lgan to‘liq tafsilot"
      },
      {
        "type": "p",
        "text": "Oy sahifasi sotuvdan sof foydagacha bo‘lgan har bir qatorni tartib bilan ko‘rsatadi. Daromaddan yalpi foydagacha bo‘lgan qatorlarning nomlari va summalari Statistikadagi Daromaddan yalpi foydagacha bo‘limi bilan bir xil."
      },
      {
        "type": "list",
        "items": [
          "Daromad (soliq bilan), Soliq va Daromad (soliqsiz): soliq bilan birga daromad, soliq summasi hamda barcha chegirmalardan keyingi va soliqdan oldingi daromad; tovar topshirilgan kunda hisobga olinadi. Avstraliya, Buyuk Britaniya, Yangi Zelandiya va Singapurdagi do‘konlar o‘z soliq nomini ko‘radi.",
          "Tannarxsiz daromad: mahsulot tannarxidan oldin ayriladi, faqat noldan farq qilganda ko‘rsatiladi.",
          "Mahsulot tannarxi: sotilgan tovarning tannarxi, mahsulotlaringizdagi tannarxlar asosida.",
          "Yalpi foyda: marja bilan birga ko‘rsatiladi.",
          "Tannarxsiz daromad: noldan farq qilsa, yalpi foydadan keyin qaytarib qo‘shiladi.",
          "Zaxira yo‘qotishi: oyda bo‘lgandagina ko‘rsatiladi; Zaxirani tuzatish orqali muddati o‘tgan, shikastlangan, sovg‘a qilingan va shu kabi sabablar bilan chiqarilgan tovarning tannarxi hamda tashlab yuborilgan qaytarishlar. U yalpi foydadan keyin keladi. “Muddati o‘tgan, shikastlangan yoki namuna sifatida chiqib ketgan tovarni zaxiradan qanday chiqaraman?” maqolasiga qarang. Oyda uni sabablar bo‘yicha jamlaydigan Zaxira yo‘qotishi bo‘limi ham bor.",
          "Komissiya haqi (taxm.): to‘lov usullaringiz stavkalari bo‘yicha taxmin qilingan komissiyalar.",
          "Ushlab qolingan avanslar: faqat noldan farq qilganda ko‘rsatiladi; oldindan buyurtma bekor qilinganda o‘zingizda qoldirgan avanslar.",
          "Naqd pulni yaxlitlash: faqat noldan farq qilganda ko‘rsatiladi; naqd pulni muomaladagi tangalarga yaxlitlash natijasida buyurtma summalaridan ortiq yoki kam olingan qism.",
          "Doimiy xarajatlar va Bir martalik xarajatlar: o‘sha oy uchun kiritgan xarajatlaringiz — “Ijara, ish haqi va boshqa xarajatlarni qanday kiritaman?” maqolasiga qarang.",
          "Sof foyda: daromad (soliqsiz) − mahsulot tannarxi − zaxira yo‘qotishi − komissiya haqi + ushlab qolingan avanslar + naqd pulni yaxlitlash − doimiy xarajatlar − bir martalik xarajatlar sifatida hisoblanadi."
        ]
      },
      {
        "type": "h2",
        "text": "Davom etayotgan oylar"
      },
      {
        "type": "p",
        "text": "Oy hali tugamagan bo‘lsa ham, P&L butun oyning doimiy xarajatlarini allaqachon ayiradi. Masalan, 5-oktyabrda daromad (soliqsiz) hozircha 20,000, mahsulot tannarxi 10,000 va doimiy xarajatlar 65,700 bo‘lsa, sof foyda −55,700 bo‘ladi va Davom etmoqda · oyning to‘liq xarajatlari ayiriladi deb belgilanadi."
      },
      {
        "type": "p",
        "text": "Butun oyning xarajatlari allaqachon hisobga olingani uchun joriy oyning sof foydasi oylar ro‘yxatida, oy sahifasida va Statistikadagi Sof foyda kartasida hech qachon qizil rangda ko‘rsatilmaydi. Zarar bilan tugagan oy esa sof foydasini ogohlantirish rangida ko‘rsatadi."
      },
      {
        "type": "h2",
        "text": "Grafiklar"
      },
      {
        "type": "p",
        "text": "Tafsilotdan keyin uchtagacha grafik keladi: oylar bo‘yicha sof foyda, har bir doimiy xarajatning ulushi va doimiy xarajatlar dinamikasi. Ikkala dinamika grafigi siz ochgan oyga qadar eng ko‘pi bilan 12 oyni qamrab oladi va birinchi savdo yoki xarajat oyidan boshlab solishtirish uchun kamida ikki oy bo‘lgandagina ko‘rinadi. Ulush grafigi uchun o‘sha oyda doimiy xarajat bo‘lishi kerak; u bo‘lmaguncha bu bo‘lim o‘rnida Doimiy xarajat qo‘shish tugmasi chiqadi."
      },
      {
        "type": "h2",
        "text": "Statistika va P&L o‘rtasida o‘tish"
      },
      {
        "type": "p",
        "text": "Statistika va P&L bir-biriga bog‘langan. Statistikadagi davr shu oy yoki roppa-rosa bir butun oy bo‘lsa, kartalarning ikkinchi qatoriga Sof foyda kartasi qo‘shiladi; oy davom etayotganda u Davom etmoqda · oyning to‘liq xarajatlari ayiriladi deb belgilanadi. Shu oyning yalpi foydadan sof foydagacha bo‘lgan tafsilotini ko‘rish uchun kartani bosing. Boshqa har qanday davrda Daromaddan yalpi foydagacha bo‘limining oxirgi qatoridagi Oylik foyda va zararni ko‘rish tugmasini bosing."
      },
      {
        "type": "p",
        "text": "Teskari yo‘nalishda esa P&L’dagi oy sarlavhasi ostidagi Oktyabr hisobotini ko‘rish Statistikani aynan shu oyda ochadi (maxsus davr 1.10–31.10); davom etayotgan oy uchun u Shu oyni ochadi."
      },
      {
        "type": "note",
        "text": "Sof foyda — daromad solig‘igacha bo‘lgan operatsion foyda; u DingPOS qayd etgan ma’lumotlardan hisoblanadi va soliq deklaratsiyasi emas. Agar mahsulotlar tannarxsiz sotilgan bo‘lsa, oy baribir sof foydani ko‘rsatadi, ammo “N ta mahsulotning tannarxi hisobga olinmagan” deb belgilanadi; qaysilari ekanini ko‘rish uchun uni bosing."
      },
      {
        "type": "note",
        "text": "P&L barcha tariflarda bor. Xodimlar qo‘shilgan bo‘lsa, uni ochish uchun Foyda va zarar, xarajatlar ruxsati kerak; u mahsulot tannarxi va ish haqini ko‘rsatgani uchun Menejerlar va Xodimlar uchun sukut bo‘yicha tasdiqlashni talab qiladi."
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
    "question": "Ijara, ish haqi va boshqa xarajatlarni qanday kiritaman?",
    "keywords": [
      "xarajatlar",
      "ijara",
      "ish haqi",
      "kommunal to‘lovlar",
      "doimiy xarajatlar",
      "bir martalik xarajat",
      "barcha xarajatlar",
      "taqsimlash",
      "qo‘shimcha xarajatlar",
      "p&l"
    ],
    "content": [
      {
        "type": "p",
        "text": "P&L bo‘limida Xarajat qo‘shish tugmasini bosing va ijara, ish haqi, kommunal to‘lovlar hamda boshqa operatsion xarajatlarni kiritish uchun Doimiy xarajat qo‘shish yoki Bir martalik xarajat qo‘shishni tanlang. Har bir xarajat to‘langan oyda emas, o‘zi tegishli bo‘lgan oyda hisobga olinadi va har oyning sof foydasi shunga qarab yangilanadi. Doimiy xarajatlar har oy takrorlanadi va ularning summasini ixtiyoriy ravishda o‘zgartirish mumkin, bir martalik xarajatlar esa bitta oyda hisobga olinadi yoki bir necha oyga taqsimlanadi."
      },
      {
        "type": "h2",
        "text": "Doimiy xarajatlar"
      },
      {
        "type": "p",
        "text": "Doimiy xarajat — har oy to‘lanadigan takrorlanuvchi xarajat, masalan, ijara, kommunal to‘lovlar yoki ish haqi."
      },
      {
        "type": "steps",
        "items": [
          "P&L bo‘limini oching.",
          "Xarajat qo‘shish tugmasini bosing.",
          "Doimiy xarajat qo‘shishni tanlang.",
          "Nomini, oylik summani va boshlanish oyini kiriting. Oldingi oylarni to‘ldirish uchun avvalgi oyni tanlang.",
          "Saqlash uchun ✓ ni bosing."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Doimiy xarajat formasi: nomi, oylik summa, boshlanish oyi va summa o‘zgarishlari"
      },
      {
        "type": "p",
        "text": "Summa o‘zgarganda xarajatni oching va Summani o‘zgartirish tugmasini bosing. O‘zgarish boshlanadigan oyni tanlang, so‘ng doimiy o‘zgarish (masalan, ijara oshishi) uchun Shu oydan boshlab yoki bir oylik farq (masalan, shu oydagi elektr hisobi) uchun Faqat shu oy variantini belgilang. Har bir o‘zgarish formada ro‘yxatlanadi; istalgan yozuvni ochib tahrirlash yoki olib tashlash mumkin."
      },
      {
        "type": "p",
        "text": "Doimiy xarajatni to‘lashni to‘xtatganingizda Oxirgi hisoblangan oyni belgilang. O‘sha oy va undan oldingi oylar P&L da hisobga olinaveradi, keyingi oylarga esa kirmaydi."
      },
      {
        "type": "h2",
        "text": "Barcha xarajatlardagi rejalashtirilgan o‘zgarishlar"
      },
      {
        "type": "p",
        "text": "Barcha xarajatlar bo‘limida har bir doimiy xarajat qatori oldinda nima rejalashtirilganini ko‘rsatadi. Qator boshlanish oyini keyingi rejalashtirilgan summa o‘zgarishi va oxirgi hisoblangan oy bilan birlashtiradi. Masalan, qatorda Boshlangan: 2026-yil yanvar · Boshlanishi: 2026-yil dekabr, oyiga $420 · Oxirgi hisoblangan oy: 2027-yil mart deb yozilishi mumkin."
      },
      {
        "type": "p",
        "text": "O‘ngdagi summa kelgusi stavka emas, bugungi oylik summa bo‘lib qoladi. Faqat shu oy uchun belgilangan o‘zgarish qatorda ko‘rsatilmaydi."
      },
      {
        "type": "h2",
        "text": "Bir martalik xarajatlar"
      },
      {
        "type": "p",
        "text": "Bir martalik xarajat — bir marta to‘lanadigan xarajat, masalan, do‘kon ta’miri, jihozlar, oldindan to‘langan sug‘urta yoki bitta hisob."
      },
      {
        "type": "steps",
        "items": [
          "P&L bo‘limini oching.",
          "Xarajat qo‘shish tugmasini bosing.",
          "Bir martalik xarajat qo‘shishni tanlang.",
          "Summa va sanani kiriting.",
          "Bitta oy uchun Hisoblanadigan oyni belgilang yoki Bir necha oyga taqsimlashni yoqing.",
          "Saqlash uchun ✓ ni bosing."
        ]
      },
      {
        "type": "p",
        "text": "Taqsimlamasangiz ham, Hisoblanadigan oyni tanlashingiz mumkin, shunda xarajat o‘zi tegishli bo‘lgan oyda hisobga olinadi. Masalan, noyabrda kelgan oktyabr hisobi haqiqiy sanasi saqlangan holda oktyabrda hisobga olinishi mumkin."
      },
      {
        "type": "p",
        "text": "Do‘kon ta’miri, jihozlar yoki oldindan to‘langan sug‘urta uchun Bir necha oyga taqsimlashni yoqing, 2 dan 120 gacha oyni tanlang va birinchi hisoblangan oyni belgilang. Forma har oyga qancha hisoblanishini va qaysi oylarni qamrab olishini oldindan ko‘rsatadi."
      },
      {
        "type": "p",
        "text": "Taqsimlangan xarajat erta tugasa, masalan, sug‘urta polisi bekor qilinganda, xarajatni oching va Taqsimlashni erta tugatish tugmasidan foydalaning. Qolgan summa siz tanlagan oyda hisobga olinadi."
      },
      {
        "type": "h2",
        "text": "Xarajatlardagi kirim solig‘i"
      },
      {
        "type": "p",
        "text": "Kirim solig‘ini hisobga olish yoqilgan bo‘lsa, bir martalik xarajatga faktura raqamini va hisobga olinadigan soliqni kiritish, doimiy xarajatning har bir fakturasini esa Fakturalar bo‘limida Faktura kiritish orqali yozib borish mumkin. P&L da hisoblanadigan summa do‘kon ko‘taradigan summaligicha qoladi; hisobga olinadigan soliq qanday ishlashi tegishli kirim solig‘i maqolasida bayon etilgan."
      },
      {
        "type": "note",
        "text": "Do‘kon ko‘taradigan summani kiriting, qaytarib olish mumkin bo‘lgan soliqni kiritmang. Sotadigan tovaringiz va uni tayyorlash uchun ishlatiladigan materiallar o‘rniga Xaridlar orqali kiritiladi, chunki ular sotilganda mahsulot tannarxiga kiradi. Zaxirasi yuritiladigan sarf materiallari xarajat sifatida emas, ishlatilganda Zaxirani tuzatish orqali Do‘kon materiallari sababi bilan kiritiladi. Qaytariladigan garov pullari, kreditning asosiy qarzi va egasi olib qo‘ygan pul xarajat hisoblanmaydi. O‘zgarishlar ✓ ni bosganingizda birgalikda saqlanadi, tugagan oyga ta’sir qiladigan o‘zgarish esa avval qaysi oylarning sof foydasi o‘zgarishini aytadi."
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
    "question": "Buxgalterim uchun soliq hisobotini qanday eksport qilaman?",
    "keywords": [
      "soliq hisobotini eksport qilish",
      "soliq hisoboti",
      "eksport",
      "excel kitobi",
      "csv",
      "pdf hisobot",
      "soliq xulosasi",
      "kirim solig‘i qatorlari",
      "buxgalter"
    ],
    "content": [
      {
        "type": "p",
        "text": "Soliq hisobotini oching, yuqori o‘ngdagi Eksport tugmasini bosing va CSV, Excel kitobi (XLSX) yoki PDF hisobotni tanlang. Fayl to‘liq ekranli ko‘rib chiqish oynasida ochiladi; u yerdan ulashish tugmasini bosib uni saqlash yoki buxgalteringizga yuborish mumkin. Har bir format ekrandagi bir xil ko‘rsatkichlarni o‘z ichiga oladi."
      },
      {
        "type": "h2",
        "text": "Qanday eksport qilinadi"
      },
      {
        "type": "steps",
        "items": [
          "Statistikani oching va davrni tanlang, masalan, ikki oylik topshirish davri uchun 1.11 dan 31.12 gacha bo‘lgan maxsus davrni yoki choraklik davrni.",
          "Soliq hisobotini ochish uchun Soliq kartasini bosing. Eksport aynan shu davrni qamrab oladi.",
          "Soliq hisobotining yuqori o‘ng burchagidagi Eksport tugmasini bosing. Menyuda formatlar ro‘yxati chiqadi, shu iPad’da oxirgi eksport qilingani belgilangan bo‘ladi.",
          "Format tanlang, masalan, Excel kitobi (XLSX) — to‘liq ekranli ko‘rib chiqish oynasi ochiladi. CSV fayllar jadval ko‘rinishida chiqadi, Excel kitobida esa varaqlar o‘rtasida o‘tish mumkin, masalan, avval Summary ni tekshirish.",
          "Faylni saqlash yoki buxgalteringizga yuborish uchun ko‘rib chiqish oynasining yuqori o‘ng burchagidagi ulashish tugmasini bosing. Oynani yopsangiz, Soliq hisobotiga qaytasiz."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Soliq hisoboti, Eksport menyusi ochiq va fayl formatlari ro‘yxati ko‘rinib turibdi"
      },
      {
        "type": "p",
        "text": "Eksport amalga oshmasa, ilova Faylni eksport qilib bo‘lmadi va Qayta eksport qilib ko‘ring deb yozadi. Hech narsa yozilmaydi; qaytadan eksport qiling."
      },
      {
        "type": "h2",
        "text": "Eksport formatlari"
      },
      {
        "type": "list",
        "items": [
          "Soliq xulosasi (CSV): Hisobotning har bir qatori uchun bitta satr (har bir soliq va stavka, nol stavkali va soliq solinmagan), soliqdan oldin va soliq bo‘yicha sotuvlar, qaytarishlar va sof summa.",
          "Barcha hujjatlar (CSV): Har bir soliq ostida har bir hujjat uchun bitta satr: sana va vaqt, chek raqami, hujjat turi (sotuv, qaytarish yoki yaroqsiz deb belgilanganning teskari yozuvi), mijoz ismi, summalar va to‘lov usullari. Yaroqsiz deb belgilash o‘sha sanada teskari yozuv satrini qo‘shadi.",
          "Kunlik xulosa (CSV): Har bir kun bo‘yicha xulosa, so‘ng kun va usul bo‘yicha to‘lovlarning ikkinchi jadvali.",
          "Kirim solig‘i qatorlari (CSV): Faqat hisobotda kirim solig‘i kartasi bo‘lganda ko‘rsatiladi. Har bir xarid buyurtmasi va xarajatning har bir kirim solig‘i qatori uchun bitta satr: yetkazib beruvchi, yetkazib beruvchining soliq raqami va faktura raqami bilan.",
          "Excel kitobi (XLSX): Uchta sotuv CSV fayliga mos Summary, Documents va Daily varaqlari, hisobotda kirim solig‘i ko‘rsatilsa, Purchases varag‘i ham qo‘shiladi. Summalar raqam yacheykalarida turadi, har bir ustun o‘z mazmuniga moslanadi, shuning uchun hech narsa kesilgan holda ochilmaydi.",
          "PDF hisobot: Ilova tilidagi A4 hisobot: do‘kon nomi, davr, soliq rejimi, valyuta va hisobot bo‘limlari bilan. Avstraliya, Yangi Zelandiya, Singapur va Buyuk Britaniyadagi do‘konlarda avval Deklaratsiya katakchalari chiqadi; kirim solig‘i kartalari ko‘rsatilsa, ular keyin keladi. Ko‘rib chiqish oynasida Markup yordamida imzo qo‘yish yoki belgilar qo‘shish va belgilangan faylni ulashish mumkin; xuddi shu davrni qayta eksport qilsangiz, toza nusxa yoziladi."
        ]
      },
      {
        "type": "h2",
        "text": "Buxgalteriya dasturlari uchun format"
      },
      {
        "type": "p",
        "text": "CSV fayllar UTF-8 kodlashda va vergul bilan ajratilgan, ustun nomlari esa ilova qaysi tilda bo‘lishidan qat’i nazar o‘zgarmas inglizcha bo‘ladi, shuning uchun buxgalteriya dasturlari ularni o‘qiy oladi. Summalar valyutaning kasr raqamlari va minus belgisi bilan yoziladi, belgi va mingliklar ajratgichisiz (masalan, 80.97, -40.00 yoki iyenadagi do‘kon uchun 1000). Sanalar 2026-11-03 ko‘rinishida bo‘ladi."
      },
      {
        "type": "p",
        "text": "=, +, - yoki @ bilan boshlanadigan matn yacheykalarga (masalan, =1+1 ismli mijoz) boshiga ' belgisi qo‘shiladi, shunda jadval dasturlari formulani bajarmasdan matnni ko‘rsatadi. Summalarga u hech qachon qo‘shilmaydi."
      },
      {
        "type": "p",
        "text": "Fayl nomlarida davr bo‘ladi, masalan, tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx va tax-report_2026-11-01_2026-11-30.pdf, shuning uchun turli davrlarning fayllari hech qachon bir-birining ustidan yozilmaydi."
      },
      {
        "type": "h2",
        "text": "Ruxsatlar va maxfiylik"
      },
      {
        "type": "p",
        "text": "Har bir tarif, jumladan Lite, eksport qila oladi. Xodimlarga Soliq hisoboti uchun bo‘lgani kabi Statistika ruxsati kerak."
      },
      {
        "type": "p",
        "text": "Kirim solig‘i bor fayllar avval o‘z kartalari talab qiladigan tasdiqlarni so‘raydi: xarid buyurtmalari uchun Tannarx va foyda, xarajatlar uchun Foyda va zarar, xarajatlar. Bu Kirim solig‘i qatorlari (CSV)ga, shuningdek kirim solig‘i kartalari chiqqanda Excel kitobi (XLSX) va PDF hisobotga tegishli. Bekor qilsangiz, hech narsa yozilmaydi; uchta sotuv CSV fayli hech qachon so‘ramaydi."
      },
      {
        "type": "note",
        "text": "Barcha hujjatlar (CSV) mijoz ismlarini, kirim solig‘i fayllari esa yetkazib beruvchi nomlari va soliq raqamlarini o‘z ichiga oladi. Ularni faqat ko‘rishi kerak bo‘lgan kishilarga yuboring."
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
    "question": "Kirim solig‘ini (xaridlardagi VAT yoki GST) qanday kiritaman?",
    "keywords": [
      "kirim solig‘i",
      "VAT",
      "GST",
      "kirim solig‘ini hisobga olish",
      "xarid buyurtmalaridagi kirim solig‘i",
      "xarajatlardagi kirim solig‘i",
      "yetkazib beruvchining soliq raqami",
      "xarid buyurtmalari",
      "soliq hisoboti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Xarid buyurtmalari va xarajatlarda yetkazib beruvchi fakturalaridagi hisobga olinadigan soliqni kiritish uchun Sozlamalar → Do‘kon ma’lumotlari bo‘limida Kirim solig‘ini hisobga olishni yoqing. Shundan keyin ikkala formada kirim solig‘i bo‘limi paydo bo‘ladi va hisobga olinadigan soliqni har bir fakturadan ko‘chirasiz. Soliq hisoboti uni ikkita kartada ro‘yxatlaydi: Xarid buyurtmalaridagi kirim solig‘i va Xarajatlardagi kirim solig‘i."
      },
      {
        "type": "h2",
        "text": "Kirim solig‘ini hisobga olishni yoqish"
      },
      {
        "type": "steps",
        "items": [
          "Sozlamalar → Do‘kon ma’lumotlari bo‘limini oching va soliq kartasini toping.",
          "Soliq undirish ostida Kirim solig‘ini hisobga olishni yoqing."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Do‘kon ma’lumotlaridagi soliq kartasi: Kirim solig‘ini hisobga olish yoqilgan, uning ostida izoh ko‘rinadi"
      },
      {
        "type": "p",
        "text": "Kirim solig‘ini hisobga olish faqat do‘konda kamida bitta soliq bo‘lganda chiqadi va yangi do‘konlarda hamda yangilanishdan keyin o‘chirilgan holda turadi. Uni almashtirsangiz, darhol saqlanadi va Faoliyat jurnalida Soliq sozlamalari ostida qayd etiladi. Yoqilgan bo‘lsa, xarid narxlari va mahsulot tannarxini hisobga olinadigan soliqdan oldin kiriting; hisobga olinmaydigan soliq tannarxda qoladi."
      },
      {
        "type": "note",
        "text": "Kirim solig‘ini hisobga olish tugmasi har bir tarifda bor, Xaridlar esa Standard yoki undan yuqori tarifni talab qiladi. Uni o‘chirsangiz, yangi yozuvlardagi maydonlar yashirinadi; mavjud yozuvlar o‘z kirim solig‘i va to‘lanadigan summasini saqlab qoladi, o‘tgan soliq hisobotlari esa o‘zgarmaydi."
      },
      {
        "type": "h2",
        "text": "Xarid buyurtmalari"
      },
      {
        "type": "steps",
        "items": [
          "Xaridlarni oching va Yangi xarid tugmasini bosing.",
          "Birlik narxlarini hisobga olinadigan soliqdan oldin kiriting, so‘ng qo‘shimcha xarajatlardan o‘tib Kirim solig‘i bo‘limigacha pastga suring.",
          "Sukut bo‘yicha buyurtma sanasi qo‘yiladigan Faktura sanasini tekshiring va ixtiyoriy Faktura raqami hamda Yetkazib beruvchining soliq raqamini qo‘shing.",
          "Stavka uchun do‘kondagi soliqlardan birini tanlang yoki Boshqa stavka… ni tanlab, 9.975% kabi 3 tagacha kasr raqamli stavkani kiriting.",
          "Buyurtmaning soliqdan oldingi jamidan boshlanadigan Soliqsiz summani tekshiring va Hisobga olinadigan soliqni fakturadan ko‘chiring.",
          "Qo‘shimcha stavkalar uchun Stavka qo‘shish tugmasini bosing."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Xarid buyurtmasi: faktura maydonlari, bitta stavka qatori va jamilar bilan Kirim solig‘i bo‘limi"
      },
      {
        "type": "p",
        "text": "Hisobga olinadigan soliq bo‘sh holda boshlanadi: DingPOS uni hech qachon stavkadan hisoblab chiqarmaydi va faktura yaxlitlashini qabul qiladi. Masalan, 2026-yil 30-iyundagi AB-12345678 fakturasi bo‘yicha un 10 × $300 plus $100 yetkazib berish bo‘lsa va bitta 5% qatorda Soliqsiz $3,100 hamda Hisobga olinadigan soliq $155 kiritilsa, Soliqsiz jami $3,100, Kirim solig‘i $155 va To‘lanadigan summa $3,255 bo‘ladi; bu ro‘yxatda, buyurtma tafsilotida va To‘lanmagan hisoblarda ko‘rinadi. Yetkazib beruvchida saqlangan soliq raqami yangi buyurtmalarni to‘ldiradi; saqlangan buyurtmalar o‘zinikini saqlab qoladi."
      },
      {
        "type": "p",
        "text": "Faktura kech kelsa, qabul qilingan buyurtmani oching va Kirim solig‘i kartasida Kirim solig‘ini kiritish yoki o‘zgartirish uchun Tahrirlash tugmasini bosing. Faqat To‘lanadigan summa o‘zgaradi; zaxira, mahsulot tannarxi va to‘langan yoki to‘lanmagan holati o‘zgarmaydi. Yaroqsiz deb belgilangan buyurtmalarda Kirim solig‘i faqat o‘qish uchun qoladi, yangilanishdan oldin saqlangan buyurtmalar esa orqaga qarab to‘ldirilmaydi."
      },
      {
        "type": "h2",
        "text": "Xarajatlar"
      },
      {
        "type": "p",
        "text": "P&L → Bir martalik xarajatlar bo‘limida forma summa ostiga Faktura raqami va kirim solig‘i qatorlarini qo‘shadi. Summani hisobga olinadigan soliqdan oldingi holda qoldiring va faqat hisobga olinadigan soliqni ko‘chiring. $1,100 li kanselyariya fakturasida $100 hisobga olinadigan bo‘lsa, $1,000 ni va $1,000 hamda $100 li 10% qatorni kiriting; Soliq bilan $1,100 ni ko‘rsatadi, P&L esa $1,000 ni hisoblaydi. Uning kirim solig‘i butunlay xarajat sanasida hisobga olinadi, Hisoblanadigan oy yoki taqsimlashga hech qachon ergashmaydi."
      },
      {
        "type": "p",
        "text": "P&L → Doimiy xarajatlar bo‘limida ijara yoki kommunal to‘lovlar kabi saqlangan xarajatni oching va har bir faktura kelganda Fakturalar ostida Faktura kiritish tugmasini bosib, faktura sanasi, ixtiyoriy faktura raqami va kamida bitta stavka qatorini kiriting. Ijara oyiga $30,000 bo‘lsa va iyul hamda avgust fakturalarining har birida $30,000 va $1,500 li 5% qator bo‘lsa, iyul–sentabr hisoboti $3,000 kirim solig‘ini o‘z ichiga oladi, P&L esa har oy baribir $30,000 ni hisoblaydi."
      },
      {
        "type": "p",
        "text": "O‘tgan oydagi kirim solig‘i o‘zgarishini saqlashda O‘zgarish saqlansinmi? deb so‘raladi va agar o‘sha oyni allaqachon topshirgan bo‘lsangiz, oyning soliq hisoboti o‘zgarishi haqida ogohlantiriladi. Joriy oydagi tahrirlar va qoralamalar so‘ramasdan saqlanadi."
      },
      {
        "type": "note",
        "text": "DingPOS import VAT, teskari undirish (reverse charge) yoki qisman kreditni hisoblamaydi. Hisobga olinadigan soliqni fakturadan ko‘chiring, hisobga ololmaydigan soliqni esa soliqsiz summaga kiriting."
      },
      {
        "type": "h2",
        "text": "Soliq hisoboti"
      },
      {
        "type": "p",
        "text": "Sotuv kartalaridan keyin ikkita karta turadi: Xarid buyurtmalaridagi kirim solig‘i va Xarajatlardagi kirim solig‘i. Har birida har bir stavka uchun bitta qator, Kirim solig‘i yo‘q qatori hamda Soliqsiz, Hisobga olinadigan soliq va Soliq bilan jamilari bor. Jami kirim solig‘i yo‘q xaridlarni ham o‘z ichiga oladi, ba’zi deklaratsiyalarda esa faqat kirim solig‘i bor qatorlar hisobga olinadi."
      },
      {
        "type": "list",
        "items": [
          "Xarid buyurtmalari Faktura sanasida hisobga olinadi, u bo‘sh bo‘lsa buyurtma sanasida.",
          "Yaroqsiz deb belgilangan xarid buyurtmalari yaroqsiz deb belgilangan sanada manfiy summa sifatida hisobga olinadi.",
          "Bir martalik xarajatlar xarajat sanasida butunlay hisobga olinadi.",
          "Doimiy xarajat fakturalari faktura sanasida hisobga olinadi."
        ]
      },
      {
        "type": "p",
        "text": "Xarid buyurtmalaridagi kirim solig‘i Tannarx va foyda ruxsatini, Xarajatlardagi kirim solig‘i esa Foyda va zarar, xarajatlar ruxsatini talab qiladi; ruxsati yo‘q xodimlar karta sarlavhasi ostida Menejerdan tasdiqlashni so‘rang yozuvini ko‘radi. Soliq kartasi esa baribir faqat sotuvlardan yig‘ilgan soliqni ko‘rsatadi, kirim solig‘ini ayirmaydi, chunki Yaponiyaning soddalashtirilgan usuli va Buyuk Britaniyaning Flat Rate tizimi boshqacha ishlaydi. Avstraliya, Yangi Zelandiya, Singapur va Buyuk Britaniyadagi do‘konlar bu summalarni Deklaratsiya katakchalarida ham ko‘radi."
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
    "question": "Soliq hisoboti qayerda va uni qanday o‘qiyman?",
    "keywords": [
      "soliq hisoboti",
      "VAT",
      "GST",
      "sotuv solig‘i",
      "statistika",
      "soliq",
      "stavka bo‘yicha sotuvlar va soliq",
      "to‘lov usuli bo‘yicha"
    ],
    "content": [
      {
        "type": "p",
        "text": "Statistikani oching va Soliq kartasini bosib Soliq hisobotini ko‘ring: u Statistika ko‘rsatayotgan davr uchun sotuvlar va soliqni stavkalar bo‘yicha ro‘yxatlaydi. Bu ko‘rsatkichlarni VAT, GST yoki sotuv solig‘i deklaratsiyasiga ko‘chiring yoki buxgalteringizga yuboring. Keyingi soliq o‘zgarishlari saqlangan hujjat ko‘rsatkichlarini hech qachon o‘zgartirmaydi."
      },
      {
        "type": "h2",
        "text": "Soliq hisobotini ochish"
      },
      {
        "type": "steps",
        "items": [
          "Statistikani oching va davrni tanlang, masalan, Shu oy yoki maxsus davr.",
          "Ikkinchi qatorda Jami chegirmalardan keyin turgan Soliq kartasini toping.",
          "Soliq kartasini yoki Soliq hisoboti ›ni bosing."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Statistika Shu oy davrida: Soliq kartasi va uning Soliq hisoboti › pastki qismi"
      },
      {
        "type": "p",
        "text": "Bu karta yagona kirish yo‘li. Uning ostidagi qatorda davrda yig‘ilgan soliqlar nomi bilan, eng ko‘p summalisidan boshlab sanab o‘tiladi: ikkitasi nomi bilan, uch yoki undan ko‘pi esa, masalan, “3 ta soliq, jumladan PST 7%” shaklida. Sarlavhada Statistika davri ko‘rsatiladi (Shu oy · 1.11 – 30.11), davr tanlagich yoki o‘tgan oy tugmasi yo‘q, chunki topshirish davrlari har xil (Tayvanda ikki oy, Avstraliyada chorak, Yaponiyada bir yil)."
      },
      {
        "type": "p",
        "text": "Soliqsiz do‘konlar va davrda soliq solingan sotuvlari bo‘lmagan do‘konlar Soliq kartasini ko‘rmaydi; hujjatlari bo‘lmagan davrlarda Statistikaning bo‘sh holati chiqadi. O‘chirilgan soliqlar o‘z ostidagi sotuvlari bo‘lgan davrlar uchun kartani saqlab qoladi."
      },
      {
        "type": "note",
        "text": "Har bir tarif, jumladan Lite va sinov davri, karta, hisobot va barcha eksportlarga ega. Xodimlarga Statistika ruxsati kerak; tasdiq talab qiladigan lavozimlar menejer tasdiqlaguncha tasdiq so‘rovi o‘rnini ko‘radi."
      },
      {
        "type": "h2",
        "text": "Hisobotni o‘qish"
      },
      {
        "type": "p",
        "text": "Avstraliya, Yangi Zelandiya, Singapur va Buyuk Britaniyadagi do‘konlar avval Deklaratsiya katakchalarini ko‘radi."
      },
      {
        "type": "p",
        "text": "Stavka bo‘yicha sotuvlar va soliq har bir stavka uchun bitta qatorni ro‘yxatlaydi: avval eng yuqori stavka, undan keyin 0% nol stavkali, oxirida esa Soliq solinmagan (soliqsiz mahsulotlar). Ustunlar Sotuvlar, Qaytarishlar va yaroqsiz deb belgilangan sotuvlar hamda Sof bo‘lib, har birida Soliqdan oldin va Soliq bor; nol stavkali va Soliq solinmagan qatorlarda soliq qatori yo‘q. Do‘kondagi har bir soliq sotuvi bo‘lmasa ham qatorga ega bo‘ladi. Nomini o‘zgartirsangiz bitta qator saqlanadi; stavkani o‘zgartirsangiz yangi qator qo‘shiladi."
      },
      {
        "type": "p",
        "text": "Jami bo‘limi Soliqdan oldingi sotuvlar, Soliq va Soliq bilan sotuvlarni ko‘rsatadi. Ikki yoki undan ortiq soliq bo‘lsa, izohda bitta sotuv bir nechta soliqqa ega bo‘lishi mumkinligi, shuning uchun stavkalar bo‘yicha sotuvlarni qo‘shib bo‘lmasligi aytiladi; Soliqdan oldingi sotuvlar har bir sotuvni bir marta hisoblaydi. Buyuk Britaniyadagi chorak uchun VAT 20% Soliqdan oldin £1,000 va Soliq £200, Nol stavkali 0% £300 va Soliq solinmagan £50 ko‘rsatishi mumkin: Jami bo‘limi Soliqdan oldingi sotuvlar £1,350, Soliq £200, Soliq bilan sotuvlar £1,550 beradi."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Soliq hisoboti: Stavka bo‘yicha sotuvlar va soliq qatorlari va ularning ostida Jami"
      },
      {
        "type": "list",
        "items": [
          "To‘lov usuli bo‘yicha bu hujjatlar uchun davr oxirigacha to‘langan summalarni, to‘lanmagan summalarni Qarzdorliklar sifatida, naqd pulni yaxlitlashni esa naqd pul qatori ichidagi Jumladan naqd pulni yaxlitlash … qatorida ko‘rsatadi.",
          "Sotuv hisoblanmaydigan mablag‘lar faqat ushlab qolingan avanslar uchun chiqadi: Ushlab qolingan avanslar buxgalter bilan topshirishni tekshirish haqidagi izoh bilan ro‘yxatlanadi va sotuvga ham, soliqqa ham qo‘shilmaydi.",
          "Kirim solig‘ini hisobga olish yoqilgan yoki davrda kirim solig‘i kiritilgan do‘konlar Xarid buyurtmalaridagi kirim solig‘i va Xarajatlardagi kirim solig‘ini ham ko‘radi."
        ]
      },
      {
        "type": "h2",
        "text": "Har bir hujjat qaysi kunga kiritilishi"
      },
      {
        "type": "p",
        "text": "Stavka bo‘yicha sotuvlar va soliq yonidagi ⓘ ni bosing:"
      },
      {
        "type": "list",
        "items": [
          "Yaroqsiz deb belgilangan sotuv shu belgilangan davrda manfiy summa sifatida hisobga olinadi, shuning uchun topshirib bo‘lingan davr hech qachon o‘zgarmaydi. Statistika esa uni sotuv davridan olib tashlaydi.",
          "Qaytarish o‘z sanasida hisobga olinadi. Almashtirishda yangi tovarlar sotuv, qaytarilgan tovarlar esa qaytarish sifatida hisoblanadi.",
          "Oldindan buyurtma olib ketilgan kunda, nasiya savdo esa sotuv kunida hisobga olinadi."
        ]
      },
      {
        "type": "p",
        "text": "30-oktyabrdagi sotuv 2-noyabrda yaroqsiz deb belgilansa, oktyabr Sotuvlarida qoladi va noyabrning Qaytarishlar va yaroqsiz deb belgilangan sotuvlar ustunida manfiy summa sifatida chiqadi. Nasiya savdoni keyinroq yopish uni ko‘chirmaydi."
      },
      {
        "type": "h2",
        "text": "Yig‘ilgan soliq va Statistika jami ko‘rsatkichlari"
      },
      {
        "type": "p",
        "text": "Soliq kartasi Soliq hisobotidagi Soliq jamiga teng. U Statistikadagi Daromaddan yalpi foydagacha bo‘limining Soliq qatoridan faqat davrlararo yaroqsiz deb belgilashlarda farq qiladi, chunki Statistika yaroqsiz deb belgilangan sotuvni o‘zining asl davridan olib tashlaydi."
      },
      {
        "type": "note",
        "text": "Soliq hisoboti sotuvlardan yig‘ilgan soliqni ko‘rsatadi, to‘lanadigan soliqni (sotuvdan olingan soliq minus kirim solig‘i) hech qachon ko‘rsatmaydi, chunki har bir mamlakat uni shunday hisoblamaydi, masalan, Yaponiyaning soddalashtirilgan usuli yoki Buyuk Britaniyaning Flat Rate Scheme."
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
    "question": "BAS, GST yoki VAT deklaratsiyamning qaysi katakchalariga qaysi ko‘rsatkichlar kiritiladi?",
    "keywords": [
      "deklaratsiya katakchalari",
      "soliq hisoboti",
      "statistika",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT deklaratsiyasi",
      "kirim solig‘ini hisobga olish"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avstraliya, Yangi Zelandiya, Singapur yoki Buyuk Britaniyadagi do‘konlar uchun Soliq hisoboti Deklaratsiya katakchalaridan boshlanadi: u har bir katakchani va shu hisobotning o‘zidan olingan summani ko‘rsatadi. U har bir tarifda Avstraliya BAS · Simpler BAS, Yangi Zelandiya GST101A, Singapur GST F5 va Buyuk Britaniya VAT deklaratsiyasini qamrab oladi."
      },
      {
        "type": "h2",
        "text": "Deklaratsiya katakchalarini ochish"
      },
      {
        "type": "steps",
        "items": [
          "Statistikani oching.",
          "Soliq hisobotini ochish uchun Soliq kartasini bosing."
        ]
      },
      {
        "type": "p",
        "text": "Deklaratsiya katakchalari — birinchi karta, u Stavka bo‘yicha sotuvlar va soliq kartasidan yuqorida turadi, uning ostidagi qatorda esa deklaratsiya nomi yoziladi. Har bir summa sentlargacha shu hisobotning o‘zidan olinadi va hech narsa qayta hisoblanmaydi. Eksport qilingan PDF hisobot ham xuddi shu karta bilan boshlanadi. Ilova mamlakatni qayd etishidan oldin sozlangan do‘konlar valyuta bo‘yicha aniqlanadi (AUD, NZD, SGD yoki GBP); boshqa do‘konlarda Deklaratsiya katakchalari kartasi yo‘q."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Soliq hisoboti tepasidagi Deklaratsiya katakchalari kartasi: Buyuk Britaniya VAT deklaratsiyasining 1, 4, 6 va 7-katakchalari"
      },
      {
        "type": "h2",
        "text": "Avstraliya BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: GST bilan, GSTdan ozod va soliq solinmagan sotuvlar kiradi; “G1 katakchasidagi summa GSTni o‘z ichiga oladimi?” savoliga Ha deb javob bering",
          "1A GST on sales: Sotuvdan olingan soliq",
          "1B GST on purchases: Xarid buyurtmalari va xarajatlar bo‘yicha hisobga olinadigan soliq"
        ]
      },
      {
        "type": "p",
        "text": "ATO butun dollarlarni talab qiladi: BAS’da sentlarni tashlab yuboring, hech qachon yuqoriga yaxlitlamang."
      },
      {
        "type": "h2",
        "text": "Yangi Zelandiya GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: GST bilan sotuvlar, nol stavkali sotuvlar kiradi, soliq solinmagan sotuvlar kirmaydi",
          "Box 6 Zero-rated supplies: Nol stavkali sotuvlar",
          "Box 11 Total purchases and expenses: GST bilan xarid buyurtmalari va xarajatlar, GST bilan birga; kirim solig‘i yo‘q yoki nol stavkali xaridlar kirmaydi"
        ]
      },
      {
        "type": "p",
        "text": "myIR 8- va 12-katakchani 3/23 hisobida chiqaradi, shuning uchun u hisobotdagi soliqdan bir necha sentga farq qilishi mumkin."
      },
      {
        "type": "h2",
        "text": "Singapur GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: Soliq solinadigan sotuvlar, soliqsiz summada",
          "Box 2 Total value of zero-rated supplies: Nol stavkali sotuvlar; faqat eksport va xalqaro xizmatlar nol stavkali bo‘lishi mumkin",
          "Box 5 Total value of taxable purchases: GST li yoki nol stavkali xarid buyurtmalari va xarajatlar, soliqsiz summada; kirim solig‘i yo‘q xaridlar kirmaydi",
          "Box 6 Output tax due: Sotuvdan olingan soliq",
          "Box 7 Input tax and refunds claimed: Xarid buyurtmalari va xarajatlar bo‘yicha hisobga olinadigan soliq"
        ]
      },
      {
        "type": "h2",
        "text": "Buyuk Britaniya VAT deklaratsiyasi"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: Sotuvdan olingan soliq",
          "Box 4 VAT reclaimed on purchases and other inputs: Xarid buyurtmalari va xarajatlar bo‘yicha hisobga olinadigan soliq",
          "Box 6 Total value of sales and all other outputs excluding any VAT: Soliqsiz summadagi sotuvlar; nol stavkali, soliqdan ozod va soliq solinmagan sotuvlar kiradi",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: Soliqsiz summadagi xarid buyurtmalari va xarajatlar, kirim solig‘i yo‘q xaridlar ham kiradi; yozib qo‘yilgan ish haqi va business rates (tijorat mulk solig‘i) summalarini chiqarib tashlang"
        ]
      },
      {
        "type": "p",
        "text": "Standart VAT hisobi uchun. Flat Rate Scheme’da 1- va 6-katakcha boshqacha hisoblanadi. Buyuk Britaniyada avans uchun VAT uni olgan paytda to‘lanadi; DingPOS esa oldindan buyurtmani u olib ketilganda hisobotga kiritadi."
      },
      {
        "type": "p",
        "text": "Buyuk Britaniyadagi chorakka misol: VAT 20% li sotuvlar soliqdan oldin £1,000 (soliq £200), nol stavkali £300, soliq solinmagan £50, £400 va £80 VAT li xarid buyurtmalari hamda kirim solig‘i yo‘q £250 li xarajatlar quyidagini beradi: Box 1 £200, Box 4 £80, Box 6 £1,350 va Box 7 £650."
      },
      {
        "type": "h2",
        "text": "Bo‘sh katakchalar va xodimlar kirishi"
      },
      {
        "type": "p",
        "text": "Soliq idorasi o‘zi hisoblaydigan katakchalar va qarz summalari kiritilmaydi (Buyuk Britaniya Box 3 va 5; Singapur Box 3, soliqdan ozod yetkazib berishlar). Yangi Zelandiya va Singapurda soliq solinmagan sotuvlar hech bir katakchaga kirmaydi; agar ularga soliq solinishi kerak bo‘lgan bo‘lsa, buxgalteringiz bilan maslahatlashing."
      },
      {
        "type": "p",
        "text": "Kirim katakchalari (AU 1B, NZ 11, SG 5 va 7, UK 4 va 7) uchun Kirim solig‘ini hisobga olish kerak, aks holda ular — va Kirim solig‘i yozilmagan ni ko‘rsatadi, hech qachon 0 ni emas. UK Box 7 uchun Xarid buyurtmalaridagi kirim solig‘i ham, Xarajatlardagi kirim solig‘i ham kerak; faqat xarid buyurtmalari Box 4 ni to‘ldiradi va Box 7 ni — holida qoldiradi."
      },
      {
        "type": "p",
        "text": "Foyda va zarar, xarajatlar yoki Tannarx va foyda ruxsati bo‘lmagan xodimlar, menejer Menejerdan tasdiqlashni so‘rang orqali tasdiqlamaguncha, ikkala kartani qo‘shadigan katakchalarni ko‘rmaydi."
      },
      {
        "type": "note",
        "text": "Sotuv va faktura sanalari bo‘yicha hisoblangan; DingPOS to‘lov sanalarini kuzatmaydi. Agar hisobotni naqd pul yoki to‘lovlar asosida topshirsangiz, bu summalarni tuzating."
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
    "question": "Aksiyani qanday yarataman?",
    "keywords": [
      "aksiya",
      "chegirma",
      "1+1",
      "summa bo‘yicha chegirma",
      "happy hour",
      "kupon",
      "aksiya yaratish"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sozlamalar → Aksiyalar bo‘limiga o‘ting. Quyidagi turlar mavjud:"
      },
      {
        "type": "list",
        "items": [
          "Summa chegarasi: X so‘m sarflasa, Y so‘m yoki Y% chegirma.",
          "Bitta olsangiz, bittasi sovg‘a va N-tovar uchun aksiyalar.",
          "Bonus ballarni ko‘paytirish.",
          "Faqat ma’lum a’zolik darajasi yoki tug‘ilgan oy uchun takliflar.",
          "A ni olsangiz, B ni oling; pullik qo‘shimchalar va qat’iy narxli to‘plamlar."
        ]
      },
      {
        "type": "p",
        "text": "Har bir aksiyani jadval bo‘yicha sozlash (Happy Hour vaqtlari, haftaning ma’lum kunlari, yarim tundan oshadigan vaqt), muayyan mahsulotlarga cheklash va ustuvorlik, qo‘shilish qoidalari hamda foydalanish limitlari bilan boshqarish mumkin. Shartga mos aksiyalar to‘lov paytida avtomatik qo‘llanadi — chegirma kodlari kerak emas."
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
    "question": "Aksiya qo‘llanmayapti — nimani tekshirish kerak?",
    "keywords": [
      "aksiya",
      "ishlamayapti",
      "qo‘llanmayapti",
      "aksiya ishlamasa",
      "muammoni hal qilish"
    ],
    "content": [
      {
        "type": "p",
        "text": "Eng ko‘p uchraydigan sabablarni tartib bilan tekshiring:"
      },
      {
        "type": "steps",
        "items": [
          "Jadval: bugun faol sanalar ichidami? Happy Hour vaqti hafta kunini yoki soatni cheklayaptimi?",
          "Qamrov: savatdagi mahsulotlar aksiya qamrab oladigan mahsulot yoki toifalarga kiradimi? Mahsulotda «Aksiyalardan chiqarish» yoqilmaganmi (erkin narxli mahsulotlarda u sukut bo‘yicha yoqilgan)? Summa chegarasiga yetildimi?",
          "Auditoriya: aksiya a’zolik darajasi yoki tug‘ilgan oy bilan cheklanganmi? To‘lov paytida shu a’zo tanlanganmi?",
          "Foydalanish limitlari: umumiy limit yoki shu mijozning limiti tugaganmi? Tug‘ilgan oy aksiyasida har bir mijoz uchun limit kalendar yil bo‘yicha hisoblanadi.",
          "Birgalikda qo‘llanish: ustuvorligi yuqori aksiyada «Bu aksiya ishlagach, keyingilarini to‘xtatish» yoqilgani bu aksiyani to‘sib qo‘yayaptimi?"
        ]
      },
      {
        "type": "p",
        "text": "Hammasi joyida bo‘lsa-yu, aksiya baribir qo‘llanmasa, aksiya sozlamalarining skrinshotini bizga elektron pochta orqali yuboring — birga sababini topamiz."
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
    "question": "Sodiqlik ballari qanday ishlaydi?",
    "keywords": [
      "ballar",
      "sodiqlik",
      "sodiqlik dasturi",
      "bonus",
      "ballarni ishlatish",
      "xush kelibsiz bonusi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sozlamalar → Sodiqlik dasturi bo‘limiga o‘ting va ikkita qoida belgilang: har X miqdorida pul sarflaganda Y ball berish va N ballni M chegirmaga almashtirish (xohlasangiz, bir buyurtmada ishlatish chegarasi bilan). Yangi a’zolarga xush kelibsiz bonusini ham avtomatik berishingiz mumkin. Yangi do‘konlarda ballar o‘chiq turadi: Sodiqlik dasturini yoqish tugmasini yoqing va qoida kiriting. Tugma yoqilgan, lekin qoida belgilanmagan bo‘lsa, ilova ogohlantiradi: “Ball to‘plash yoki ishlatish qoidasi hali belgilanmagan, shuning uchun savdolarda ball to‘planmaydi va ishlatilmaydi.”"
      },
      {
        "type": "p",
        "text": "A’zoni sotuvga savatda yoki to‘lov ekranida biriktiring — ballar avtomatik to‘planadi; ishlatish uchun sarflanadigan ballarni kiriting. Ding! ekranida olingan ballar va yangi qoldiq ko‘rsatiladi, masalan, “+22 ball · jami 122 ball”; nasiya savdoda yoki to‘liq to‘lanmagan oldindan buyurtmada ballar faqat pul kelib tushganda qo‘shiladi va ekranda “qarz yopilganda qo‘shiladi” yoki “olib ketishda to‘langanda qo‘shiladi” deb yoziladi. Buyurtma yaroqsiz deb belgilansa, u uchun berilgan ballar qaytarib olinadi, ishlatilgan ballar esa qaytariladi."
      },
      {
        "type": "p",
        "text": "Ballarni qo‘lda qo‘shish yoki ayirish uchun (masalan, hisobga olinmay qolgan xarid uchun) mijoz sahifasidagi Ballar kartasida Tuzatish tugmasini bosing, Qo‘shish yoki Ayirish ni tanlang, ballar sonini kiriting va xohlasangiz sabab yozing (100 belgigacha). Mijozdagi ballardan ko‘pini ayirib bo‘lmaydi. Har bir tuzatish ballar tarixida saqlanadi: undan oldingi va keyingi qoldiq, sabab va uni kim qilgani ko‘rinib turadi."
      },
      {
        "type": "note",
        "text": "Ballarni qo‘lda tuzatish imkoniyati v3.5 versiyasida qo‘shilgan. Pro tarifida “Ballarni qo‘lda o‘zgartirish” uchun tasdiq talab qilinadigan lavozimdagi xodimlardan (Xodim lavozimida odatda shunday) tasdiqlashda menejerning yoki egasining PIN kodi so‘raladi."
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
    "question": "A’zolik darajalari nima uchun kerak?",
    "keywords": [
      "daraja",
      "VIP",
      "oltin",
      "daraja oshirish",
      "a’zolik darajasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "A’zolik darajalari (masalan, Oddiy, Kumush, Oltin) ikki vazifani bajaradi: aksiyalarni ularga qaratish mumkin (masalan, faqat Oltin uchun 10% chegirma) va to‘lov paytida mijozning maqomini bir qarashda ko‘rasiz."
      },
      {
        "type": "p",
        "text": "Darajalar siz belgilagan qoidalar (masalan, jami xarid summasi) bo‘yicha avtomatik oshishi yoki qo‘lda belgilanishi mumkin. Yaroqsiz deb belgilangan buyurtma daraja oshishiga sabab bo‘lgan bo‘lsa, daraja avtomatik ortga qaytariladi."
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
    "question": "Ma’lumotlarimdan zaxira nusxani qanday olaman?",
    "keywords": [
      "zaxira nusxa",
      "icloud",
      "google drive",
      "dropbox",
      "bulut",
      "ma’lumotlarni saqlash",
      "bulutdagi nusxa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sozlamalar → Bulutli zaxira nusxa bo‘limiga kiring, iCloud, Google Drive yoki Dropbox’dan birini tanlang va ruxsat bering. Shundan keyin istalgan vaqtda zaxira nusxani qo‘lda olishingiz mumkin. iCloud uchun bu iPad’da iCloud hisobingizga kirilgan, iCloud Drive yoqilgan va DingPOS’ga undan foydalanishga ruxsat berilgan bo‘lishi kerak."
      },
      {
        "type": "p",
        "text": "Zaxira nusxalar o‘zingizning bulut hisobingizga saqlanadi. Har bir bulutda faqat eng oxirgisi qoladi — ma’lumotlarning bitta bulutdagi nusxasi va mahsulot rasmlari uchun bitta fayl — va har yangi zaxira nusxa oldingisini almashtiradi."
      },
      {
        "type": "note",
        "text": "Yangi zaxira nusxa eskisining o‘rniga yoziladi, shuning uchun ma’lumotlaringiz allaqachon buzilgan deb gumon qilsangiz (masalan, bir qancha mahsulot xato o‘chirilgan bo‘lsa), hozircha zaxira nusxa olmang — bizga xat yozing, keyingi qadamni birgalikda aniqlaymiz."
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
    "question": "iCloud zaxira nusxasida “Ulanmagan” deb chiqyapti — nima qilish kerak?",
    "keywords": [
      "icloud",
      "ulanmagan",
      "icloud drive",
      "zaxira nusxa olinmadi",
      "ulanmayapti"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS iCloud’ni faqat uni haqiqatan ishlata olganda ulangan deb ko‘rsatadi. “Ulanmagan” deb chiqsa, iPad’ning Sozlamalar ilovasida uchta narsani tekshiring:"
      },
      {
        "type": "steps",
        "items": [
          "Apple Account hisobingizga kirilgan.",
          "iCloud Drive yoqilgan.",
          "DingPOS’ga iCloud Drive’dan foydalanishga ruxsat berilgan."
        ]
      },
      {
        "type": "p",
        "text": "Uchalasi yoqilgach, DingPOS’dagi Bulutli zaxira nusxa bo‘limiga qayting — iCloud ulangan deb ko‘rinadi. Zaxira nusxalar iCloud Drive’dagi DingPOS’ning o‘z papkasida saqlanadi."
      },
      {
        "type": "note",
        "text": "v3.0 dan oldingi versiyalarda iCloud zaxira nusxasi ishlamas va har safar “Backup.SyncError error 0” xatosi bilan tugar edi. Avval DingPOS’ni App Store’dan yangilang."
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
    "question": "Ma’lumotlarni yangi iPad’ga qanday ko‘chiraman?",
    "keywords": [
      "ko‘chirish",
      "yangi ipad",
      "tiklash",
      "boshqa ipad’ga o‘tkazish",
      "ma’lumotlarni o‘tkazish"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Eski iPad: Sozlamalar → Bulutli zaxira nusxa bo‘limiga kirib, zaxira nusxani qo‘lda oling. Zaxira nusxa vaqti yangilanganini tekshiring.",
          "Yangi iPad: DingPOS’ni o‘rnating va sozlash ustasini yakunlang.",
          "Yangi iPad: Sozlamalar → Bulutli zaxira nusxa bo‘limiga kiring, xuddi shu bulut hisobini ulang va tiklang."
        ]
      },
      {
        "type": "p",
        "text": "Tiklash tugmasini bossangiz, avval ko‘rib chiqish oynasi ochiladi: bu iPad’dagi va bulutdagi nusxada saqlangan mahsulotlar, buyurtmalar va mijozlar soni yonma-yon, shuningdek tiklash natijasida olib tashlanadigan barcha buyurtmalar ko‘rsatiladi. Tasdiqlamaguningizcha bu iPad’dagi hech narsa o‘zgarmaydi. DingPOS’ning yangiroq versiyasida olingan nusxa avval ilovani yangilashni so‘raydi. Mahsulot rasmlari ham tiklanadi."
      },
      {
        "type": "note",
        "text": "Tiklash bu iPad’dagi barcha ma’lumotlarni zaxira nusxadagilar bilan almashtiradi — shu nusxadan keyin bu iPad’da yaratilgan buyurtmalar yo‘qoladi. To‘g‘ri bulut hisobiga ulanganingizga ishonch hosil qiling; noto‘g‘risidan tiklab qo‘ysangiz, Tiklashni bekor qilish tugmasidan foydalaning."
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
    "question": "Ilovani o‘chirsam, ma’lumotlarim saqlanib qoladimi?",
    "keywords": [
      "o‘chirish",
      "ilovani o‘chirib tashlash",
      "ma’lumotlar yo‘qolishi",
      "ilovani olib tashlash"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yo‘q. DingPOS hamma narsani qurilmangizning o‘zida saqlaydi — bulutli zaxira nusxani yoqmagan bo‘lsangiz, ilovani o‘chirish barcha mahsulotlar, buyurtmalar, a’zolar va sozlamalarni butunlay o‘chirib yuboradi."
      },
      {
        "type": "note",
        "text": "Ilovani o‘chirishdan oldin har doim zaxira nusxani qo‘lda oling va muvaffaqiyatli olinganini tekshiring. Qayta o‘rnatgach, buluttan tiklang."
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
    "question": "Ilova “Do‘kon ma’lumotlari ochilmadi” deb chiqyapti — nima qilay?",
    "keywords": [
      "ochilmadi",
      "ilova ochilmayapti",
      "ilova qotib qolyapti",
      "ishga tushganda qulaydi",
      "ma’lumotlar bazasi",
      "do‘kon ma’lumotlari"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ilovani o‘chirmang. Bu ekran DingPOS do‘kon ma’lumotlaringizni o‘qiy olmaganini bildiradi, lekin ma’lumotlar hali ham shu iPad’da turibdi — ilovani o‘chirsangiz, ular ham ilova bilan birga o‘chib ketadi."
      },
      {
        "type": "p",
        "text": "Avval Qayta urinish tugmasini bosing; yordam bersa, ilova odatdagidek ochiladi. Takrorlanaversa, Yordamga murojaat qilish tugmasini bosib, bizga yozing — ma’lumotlaringizni tiklashda yordam beramiz. Bu ekran hech qanday faylni ko‘chirmaydi ham, o‘chirmaydi ham."
      },
      {
        "type": "p",
        "text": "Yangilanishdan keyingi birinchi ishga tushirishda yoki eski versiyadan olingan zaxira nusxani tiklagandan keyin avval “Ma’lumotlaringiz yangilanmoqda…” yozuvi chiqishi mumkin. Bu do‘kon ma’lumotlaringiz yangi formatga o‘tayotganini bildiradi; ma’lumot qancha ko‘p bo‘lsa, shuncha ko‘proq vaqt ketadi. Tugagach, ilova o‘zi ochiladi. U qotib qolgani yo‘q."
      },
      {
        "type": "note",
        "text": "Eng ko‘p uchraydigan sabab — tiklash jarayonida ilovaning yopilib qolishi. v3.0 dan oldin bu ilovaning har ishga tushganda qulashiga olib kelardi; v3.0 dan boshlab esa ilova shu ekranda to‘xtaydi."
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
    "question": "Ikkita iPad’ni birga ishlatsam bo‘ladimi?",
    "keywords": [
      "ikkita ipad",
      "bir nechta qurilma",
      "sinxronlash",
      "ulashish",
      "ikkinchi kassa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hozircha har bir iPad’ning ma’lumotlari alohida — bitta ma’lumotlar to‘plamini ikki qurilmada real vaqtda ulashish hali qo‘llab-quvvatlanmaydi."
      },
      {
        "type": "p",
        "text": "Bulutli zaxira nusxa orqali (zaxira nusxa olish → tiklash) ma’lumotlarni bir iPad’dan ikkinchisiga nusxalashingiz mumkin; bu qurilmani almashtirishda yoki ikkinchi iPad’ni boshlang‘ich ma’lumotlar bilan to‘ldirishda qulay. Biroq har bir qurilmada alohida rasmiylashtirilgan buyurtmalar o‘zi birlashmaydi. Bir nechta qurilmani sinxronlash rejalarimizda bor."
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
    "question": "Noto‘g‘ri zaxira nusxadan tikladim. Buni bekor qilsa bo‘ladimi?",
    "keywords": [
      "tiklashni bekor qilish",
      "tiklash",
      "noto‘g‘ri nusxa",
      "tiklash yozuvlari",
      "ma’lumotlar yo‘qoldi",
      "orqaga qaytarish"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ha. Har bir bulutdan tiklash almashtirilgan ma’lumotlarni tiklashdan oldingi nusxa sifatida saqlab qoladi. Sozlamalar → Bulutli zaxira nusxa bo‘limida kartochka oxirgi tiklash qachon va qayerdan bo‘lganini ko‘rsatadi. Tiklashni bekor qilish tugmasini bosing, ko‘rib chiqish oynasini tekshiring va tasdiqlang — ma’lumotlar tiklashdan oldingi holatiga qaytadi va ilova qayta yuklanadi."
      },
      {
        "type": "list",
        "items": [
          "Tiklashni bekor qilish o‘zi ham tiklash hisoblanadi va almashtirayotgan ma’lumotlarning yana bir nusxasini saqlaydi, shuning uchun uni yana bossangiz, avvalgi holatga qaytadi.",
          "Faqat eng oxirgi nusxa saqlanadi; keyingi tiklash uni almashtiradi.",
          "Faqat ma’lumotlar qaytadi: bulutdagi nusxa olinganidan keyin qo‘shilgan mahsulotlarda rasm yo‘q deb ko‘rinadi."
        ]
      },
      {
        "type": "p",
        "text": "Kim, qachon va qaysi nusxadan tiklaganini ko‘rish uchun shu ekrandagi Tiklash yozuvlarini ko‘rish tugmasini bosing: har bir tiklashning vaqti, bajaruvchisi, manbasi, tiklashdan oldingi va keyingi mahsulotlar / buyurtmalar / mijozlar soni va u olib tashlagan barcha buyurtmalar ko‘rsatiladi. Yozuvlar shu iPad’da saqlanadi va tiklash ularni hech qachon almashtirmaydi."
      },
      {
        "type": "note",
        "text": "Tiklashdan oldin ko‘rib chiqish oynasi va Tiklashni bekor qilish barcha tariflarda ishlaydi; tiklash yozuvlarini ko‘rish esa Pro imkoniyati. Yozuvlar Pro bo‘lmaganda ham yoziladi (faqat bajaruvchisiz), shuning uchun keyinroq Pro’ga obuna bo‘lsangiz, hammasini ko‘rasiz."
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
    "question": "Xodim qanday qo‘shiladi va kassada ishlayotgan xodim qanday almashtiriladi?",
    "keywords": [
      "xodim",
      "xodim qo‘shish",
      "menejer",
      "PIN",
      "joriy xodim",
      "smena almashtirish",
      "kassir",
      "hisob"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yon paneldagi Xodimlar bo‘limini oching. Birinchi marta egasini sozlang: ism va 4 xonali PIN kiriting. Xodim qo‘shish va ruxsatlarni o‘zgartirish uchun shu PIN kerak bo‘ladi, shuning uchun uni eslab qoling — uni tiklab bo‘lmaydi."
      },
      {
        "type": "steps",
        "items": [
          "Xodimlar sahifasida Xodim qo‘shish tugmasini bosing, ism kiriting, lavozimni tanlang (Menejer yoki Xodim) va 4 xonali PIN belgilang.",
          "Joriy xodim yon panelning pastida va to‘lov ekranining yuqori o‘ng burchagida ko‘rinadi. Smena almashganda unga bosing, ismingizni tanlang va PIN kiriting.",
          "Shundan keyin har bir buyurtma, to‘lov hamda zaxira yoki ballar harakatida uni kim bajargani yoziladi; bu buyurtmalar ro‘yxati va tafsilotlarida ko‘rinadi. Yaroqsiz deb belgilangan buyurtmalarda buni kim belgilagani ham saqlanadi."
        ]
      },
      {
        "type": "p",
        "text": "Xodim ishdan ketsa, Bu xodimni faolsizlantirish tugmasidan foydalaning: uning tarixi saqlanib qoladi, keyinchalik uni qayta faollashtirish mumkin. Ismni o‘zgartirish eski buyurtmalarga ta’sir qilmaydi — ularda o‘sha paytdagi ism qoladi."
      },
      {
        "type": "note",
        "text": "Xodimlar — Pro imkoniyati (sinov davrida ham mavjud). Pro tugasa, xodimlar ma’lumotlari va har bir buyurtmani bajargan xodim saqlanadi, yangi buyurtmalar esa egasi nomiga yoziladi; Proga qayta obuna bo‘lsangiz, hammasi qaytadi."
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
    "question": "Egasining PIN-kodini unutib qo‘ysam nima qilaman?",
    "keywords": [
      "PIN",
      "PIN unutdim",
      "parol",
      "tiklash",
      "ega",
      "egasining PIN-kodi",
      "kira olmayapman"
    ],
    "content": [
      {
        "type": "p",
        "text": "Egasining PIN-kodini tiklab bo‘lmaydi, qo‘llab-quvvatlash jamoamiz ham uni ocha olmaydi. PIN do‘kon ma’lumotlari bilan birga saqlanadi, shuning uchun ilovani o‘chirib qayta o‘rnatib, so‘ng bulutdan tiklasangiz, o‘sha PIN qaytadi."
      },
      {
        "type": "p",
        "text": "Egasini yaratishda va egasining PIN-kodi har safar o‘zgartirilganda “Bu PIN’ni eslab qoling. Uni unutsangiz, tiklab bo‘lmaydi.” degan ogohlantirish chiqadi. Uni faqat o‘zingiz olishingiz mumkin bo‘lgan joyda saqlang."
      },
      {
        "type": "p",
        "text": "Egasining PIN-kodisiz u talab qiladigan amallar yopiq qoladi — xodimlarni qo‘shish yoki tahrirlash, lavozim ruxsatlarini o‘zgartirish va faoliyat jurnalini ko‘rish. Xodimlar o‘z PIN-kodlari bilan savdolarni rasmiylashtirishda va kundalik ishda davom etaveradi."
      },
      {
        "type": "note",
        "text": "Xodim o‘z PIN-kodini unutsa, muammo yo‘q: ega uni Xodimlar bo‘limida qayta o‘rnatib beradi."
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
    "question": "Xodim ruxsatlari va menejer tasdig‘i qanday ishlaydi?",
    "keywords": [
      "ruxsatlar",
      "tasdiqlash",
      "menejer",
      "chegirma chegarasi",
      "xodim",
      "tannarx",
      "lavozim"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ruxsat ikki qiymatdan birini oladi: Ruxsat etilgan yoki Tasdiqlash kerak — hech narsa butunlay taqiqlanmaydi. Xodim tasdiq talab qiladigan amalga duch kelsa, unga ruxsati bor hamkasbi o‘z ismini tanlab, PIN kiritadi va amal o‘tadi."
      },
      {
        "type": "list",
        "items": [
          "Amallar (zaxirani qo‘lda o‘zgartirish, ballarni qo‘lda o‘zgartirish, mahsulotlarni boshqarish, chegirma chegarasidan oshiq chegirma bilan to‘lov qabul qilish): bitta tasdiq faqat shu bitta amalni qamrab oladi.",
          "Ko‘rinishlar (tannarx va foyda, Statistika, “Foyda va zarar, xarajatlar”, Sozlamalar, zaxira nusxa va tiklash): tasdiq joriy xodim almashguncha yoki ilova fonga o‘tguncha ochiq turadi.",
          "Chegirma chegarasi qo‘lda berilgan chegirmalarga tatbiq etiladi va to‘lov paytida bir marta tekshiriladi; avtomatik aksiyalar va ballarni ishlatish unga kirmaydi."
        ]
      },
      {
        "type": "p",
        "text": "Boshlang‘ich sozlamalar: Menejerlarga zaxira nusxa va tiklash hamda “Foyda va zarar, xarajatlar”dan tashqari hamma narsa ruxsat etilgan, chegirma chegarasi yo‘q; Xodimlarga hamma narsa uchun tasdiq kerak, chegara 10%. Do‘kon egasiga doim hamma narsaga ruxsat berilgan va uning ruxsatlarini tahrirlab bo‘lmaydi. O‘zgartirish uchun Xodimlar → Lavozim ruxsatlari bo‘limiga o‘ting, Tahrirlash tugmasini bosing va bir marta saqlang — o‘zgarish hamma uchun darhol kuchga kiradi."
      },
      {
        "type": "note",
        "text": "Yaroqsiz deb belgilash, qaytarish, nasiya savdo va xaridlar uchun ataylab ruxsat yo‘q; ular faqat kim bajarganini yozib boradi. Keyinroq ularni ko‘rish uchun faoliyat jurnalidan foydalaning."
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
    "question": "Buyurtmani kim yaroqsiz deb belgilagani, zaxirani kim tuzatgani yoki narxni kim o‘zgartirganini qanday ko‘raman?",
    "keywords": [
      "faoliyat jurnali",
      "audit",
      "kim o‘zgartirdi",
      "yaroqsiz deb belgilash",
      "narx o‘zgarishi",
      "zaxirani tuzatish",
      "o‘chirilgan mahsulot",
      "tasdiqlash",
      "jurnal"
    ],
    "content": [
      {
        "type": "p",
        "text": "Faoliyat jurnalidan foydalaning. Xodimlar sahifasida yuqori o‘ngdagi Faoliyat jurnali tugmasini bosing va egasining PIN-kodini kiriting — do‘konning muhim amallari yangisidan boshlab ko‘rsatiladi: yaroqsiz deb belgilashlar, qaytarishlar, zaxirani tuzatishlar va qayta sanashlar, ballarni qo‘lda tuzatishlar, tasdiqlashlar, xodim va ruxsat o‘zgarishlari, egasi PIN-kodining o‘zgarishi, soliq sozlamalari, mahsulot narxi va tannarxi o‘zgarishlari hamda mahsulotlarni o‘chirish. Oddiy savdolar ro‘yxatga kiritilmaydi."
      },
      {
        "type": "list",
        "items": [
          "Har bir yozuvda nimaga tegilgani, kim nima qilgani, qachon va natijasi ko‘rsatiladi — masalan, “M narx $390 → $350”. Yaroqsiz deb belgilash, qaytarish, zaxirani tuzatish yoki ballarni tuzatish sababi yozuvning uchinchi qatorida turadi.",
          "Xodim (faolsizlantirilganlar ham), amal turi va Bugun / Shu hafta / Shu oy bo‘yicha saralang.",
          "Buyurtma, mahsulot yoki mijozga olib boradigan yozuvni bossangiz, uning tafsilotlari ochiladi.",
          "Buyurtma tafsilotlari, mahsulot tafsilotlari va har bir xodim sahifasida faqat shu buyurtma, mahsulot yoki xodimga oid yozuvlar ro‘yxati bor.",
          "O‘chirilgan mahsulotlar jurnalda o‘sha paytdagi nomi va narxi bilan ko‘rinadi."
        ]
      },
      {
        "type": "note",
        "text": "Yozuvlar barcha tariflarda yuritiladi; faqat ko‘rish Pro imkoniyati, shuning uchun Pro obunasi faol bo‘lmagan davrda yozilgan yozuvlar qayta obuna bo‘lgach ko‘rinadi. Jurnal bulutdagi zaxira nusxalaringiz bilan birga saqlanadi."
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
    "question": "Bepul sinov muddati qanday ishlaydi?",
    "keywords": [
      "bepul sinov",
      "sinov muddati",
      "30 kun",
      "bepul",
      "Pro imkoniyatlari"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS birinchi o‘rnatilgandan boshlab 30 kun davomida Pro tarifining barcha imkoniyatlarini beradi: xodimlar uchun kirish profillari, ruxsatlar va faoliyat jurnali. Ro‘yxatdan o‘tish shart emas."
      },
      {
        "type": "p",
        "text": "Sinov paytida istalgan tarifga obuna bo‘lsangiz, sinov darhol tugaydi va keyin siz sotib olgan tarif amal qiladi. Sinovdan keyin xodimlar va faoliyat jurnali kabi Pro imkoniyatlari faqat Pro obunasi bilan ishlaydi. Kengaytirilgan hisobotlar uchun obuna shart emas: v3.4 dan boshlab ular har bir tarifga kiradi."
      },
      {
        "type": "p",
        "text": "Oxirgi 7 kun ichida va oxirgi kuni ilova sizga bir martadan eslatadi: necha kun qolgani, sinov tugagach to‘lov qabul qilish to‘xtab turishi va ma’lumotlaringiz saqlanishi haqida."
      },
      {
        "type": "p",
        "text": "Sinov davrida yaratgan hamma narsangiz (mahsulotlar, buyurtmalar, a’zolar) to‘liq saqlanadi. Keyin obuna bo‘lasizmi yoki yo‘qmi, ma’lumotlaringiz hech qachon o‘chirilmaydi."
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
    "question": "Sinov muddati tugasa, ma’lumotlarim yo‘qolib ketadimi?",
    "keywords": [
      "sinov tugashi",
      "muddat tugadi",
      "bloklangan",
      "ma’lumotlar",
      "to‘lov bloklandi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yo‘q — ma’lumotlaringiz qurilmangizda doimo saqlanadi. Sinov tugagach, to‘lov qabul qilish bloklanadi, lekin buyurtmalarni ko‘rish, hisobotlarni ochish va mahsulotlarni boshqarish mumkin bo‘ladi."
      },
      {
        "type": "p",
        "text": "Istalgan vaqtda obuna bo‘ling — to‘lov qabul qilish darhol ochiladi, ma’lumotlaringiz esa o‘zingiz qoldirgandek turadi."
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
    "question": "Lite, Standard va Pro tariflari o‘rtasida qanday farq bor?",
    "keywords": [
      "tariflar",
      "lite",
      "standard",
      "pro",
      "farq",
      "solishtirish",
      "yangilash",
      "tarifni pasaytirish",
      "narxlar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Uchala tarifda ham to‘liq to‘lov qabul qilish, mahsulotlar, buyurtmalar (yaroqsiz deb belgilash, qaytarish va almashtirish bilan), hisobotlar (v3.4 dan boshlab kengaytirilgan hisobotlar va oylik P&L, v3.6 dan boshlab soliq hisoboti va uni eksport qilish ham) va bulutdagi nusxa bor. Farq do‘konni boshqarish vositalarida:"
      },
      {
        "type": "list",
        "items": [
          "Lite: peshtaxtada yolg‘iz ishlaydigan, faqat to‘lov qabul qilish va mahsulotlar kerak bo‘lgan sotuvchi uchun.",
          "Standard: aksiyalar, tayyor chegirmalar, ballar va a’zolik darajalari, zaxirani hisobga olish, xaridlar, nasiya savdo, oldindan buyurtmalar va komissiya stavkalarini qo‘shadi.",
          "Pro: xodimlar uchun kirish profillari va ruxsatlar, menejer tomonidan PIN bilan tasdiqlash, faoliyat jurnali va tiklash yozuvlarini qo‘shadi — xodimlari bor do‘konlar uchun."
        ]
      },
      {
        "type": "p",
        "text": "Standard tarifidamisiz? Obuna sahifasidan Pro’ga o‘ting: to‘lov davri o‘zgarmaydi, yangilash darhol kuchga kiradi, farqni esa Apple proporsional hisoblaydi. Pro’dan Standard’ga qaytish keyingi to‘lov davri boshlanganda kuchga kiradi. Narxlar ilovada ko‘rsatilgan, tariflarni Narxlar sahifasida ham solishtirishingiz mumkin."
      },
      {
        "type": "note",
        "text": "Tarifni pasaytirish ma’lumotlarni hech qachon o‘chirmaydi. Tarifingizdan tashqaridagi imkoniyatlar to‘xtab turadi, ma’lumotlar qoladi, qayta obuna bo‘lsangiz ular yana ishlaydi."
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
    "question": "Obunani qanday rasmiylashtiraman, bekor qilaman yoki xaridni tiklayman?",
    "keywords": [
      "obuna bo‘lish",
      "obunani bekor qilish",
      "xaridni tiklash",
      "narx",
      "to‘lov"
    ],
    "content": [
      {
        "type": "p",
        "text": "Obunalar App Store ilova ichidagi xarid orqali rasmiylashtiriladi — tariflar va narxlar ilovada ko‘rsatiladi. To‘lovni Apple qabul qiladi; to‘lov ma’lumotlaringizni biz hech qachon ko‘rmaymiz."
      },
      {
        "type": "list",
        "items": [
          "Bekor qilish: qurilmangizdagi Sozlamalar → Apple Account → Obunalar bo‘limida boshqaring. Yangilanishning oldini olish uchun joriy davr tugashidan kamida 24 soat oldin bekor qiling.",
          "Tiklash: qurilmani almashtirgan yoki ilovani qayta o‘rnatgan bo‘lsangiz, DingPOS’dagi Obuna sahifasida “Xaridni tiklash” tugmasini bosing.",
          "Tarifni o‘zgartirish: DingPOS’dagi Obuna sahifasida yangi tarifni tanlang. Yangilash (Standard’dan Pro’ga, oylikdan yillikka) darhol kuchga kiradi, farqni Apple proporsional hisoblaydi; pasaytirish esa yangilanish sanasida kuchga kiradi."
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
    "question": "Summa chegarasi bo‘yicha chegirmani qanday sozlash mumkin?",
    "keywords": [
      "summa chegarasi",
      "minimal summa",
      "X sarflang Y tejang",
      "sozlash qo‘llanmasi",
      "chegirma sozlash"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sozlamalar → Aksiyalar → Qo‘shish bo‘limiga o‘ting, summa chegarasi turini tanlang, so‘ng:"
      },
      {
        "type": "steps",
        "items": [
          "Chegara summasini va chegirmani (qat’iy summa yoki foiz) kiriting.",
          "Doirani tanlang: aniq mahsulotlar, aniq toifalar yoki butun do‘kon uchun bo‘sh qoldiring.",
          "Jadvalni belgilang: boshlanish sanasi majburiy; aksiya muddatsiz davom etsa, tugash sanasini bo‘sh qoldiring.",
          "Saqlash tugmasini bosing — aksiya jadval bo‘yicha yoqiladi va to‘lov paytida o‘zi qo‘llanadi, promokodlar kerak emas."
        ]
      },
      {
        "type": "note",
        "text": "Chegara butun savatga emas, doiraga kiruvchi mahsulotlarning oraliq summasiga solishtiriladi. “Ichimliklarga $1000 sarflang” aksiyasida chegaraga faqat ichimliklar hisoblanadi, “aksiyalardan chiqarish” deb belgilangan mahsulotlar esa hech qachon hisoblanmaydi."
      },
      {
        "type": "p",
        "text": "Ko‘p so‘raladigan holat: agar ustuvorligi yuqoriroq aksiya avval qo‘llansa, chegara allaqachon chegirilgan summaga solishtiriladi — chegaradan oshgandek ko‘ringan savat biroz yetmay qolishi mumkin. Chegara birinchi tekshirilishi uchun unga kichikroq ustuvorlik raqamini bering."
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
    "question": "“Bitta olsangiz, bittasi bepul” va N-mahsulot aksiyasini qanday sozlash kerak?",
    "keywords": [
      "bogo",
      "bitta olsangiz bittasi bepul",
      "3-mahsulot bepul",
      "sozlash qo‘llanmasi",
      "aksiya sozlash"
    ],
    "content": [
      {
        "type": "p",
        "text": "X xarid / Y olish turidagi aksiya yarating: nechta sotib olish, nechta olish va chegirma foizini (100% = bepul) kiriting. Uni aniq mahsulotlar yoki butun toifa bilan cheklang — bir toifadagi turli mahsulotlar bitta guruhga birlashadi."
      },
      {
        "type": "list",
        "items": [
          "Chegirma beriladigan birlik — guruhdagi eng arzoni, uning joriy amaldagi narxi bo‘yicha: agar oldingi aksiya unga chegirma bergan bo‘lsa, BOGO chegirmasi ro‘yxat narxiga emas, chegirilgan narxga asoslanadi.",
          "“3-mahsulot bepul” yorlig‘ida to‘liq ro‘yxat narxi ko‘rinishini xohlasangiz, bu BOGO aksiyasiga eng kichik ustuvorlik raqamini bering — shunda u birinchi hisoblanadi. Agar butun savatga chegirma avval ishlasa, bepul mahsulotning ko‘rsatiladigan chegirmasi ro‘yxat narxidan kichik bo‘ladi — bu hisoblash tartibining xususiyati, biz uni puxta tekshirganmiz, xato emas. Ikkala tartibda ham jami summa deyarli bir xil chiqadi; faqat chegirma qayerda ko‘rinishi o‘zgaradi."
        ]
      },
      {
        "type": "p",
        "text": "Maslahat: asosiy taklifingizni ustuvorlikda birinchi qo‘ying — shunda chekdagi chegirmalar tafsiloti marketing xabaringizga mos keladi."
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
    "question": "Ballarni ko‘paytirish aksiyasini qanday sozlash mumkin?",
    "keywords": [
      "ballarni ko‘paytirish",
      "ikki barobar ball",
      "bonus ball",
      "sozlash qo‘llanmasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ballarni ko‘paytirish turidagi aksiya yarating va ko‘paytiruvchini (2 yoki undan katta butun son) kiriting. Xohlasangiz, summa chegarasi (masalan, $500 sarflasa — ikki barobar ball) va jadval (masalan, faqat shanba kunlari) qo‘shing."
      },
      {
        "type": "list",
        "items": [
          "Bir vaqtda bir nechta ko‘paytiruvchi mos kelsa, faqat eng kattasi qo‘llanadi — ular hech qachon bir-biriga ko‘paymaydi va qo‘shilmaydi.",
          "Summa chegarasi ballar ishlatilgandan keyin tekshiriladi: ballarni ishlatish jami summani chegaradan pasaytirib yuborsa, ko‘paytiruvchi bu safar ishlamaydi.",
          "Ballar yig‘ilishi uchun to‘lov paytida a’zo tanlangan bo‘lishi kerak — a’zosiz buyurtmalar ball bermaydi, ya’ni ko‘paytiriladigan narsa bo‘lmaydi."
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
    "question": "A’zolik darajasi va tug‘ilgan kun takliflarini qanday sozlash kerak?",
    "keywords": [
      "a’zolik darajasi",
      "tug‘ilgan kun",
      "VIP",
      "tug‘ilgan kun chegirmasi",
      "sozlash qo‘llanmasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Avval Sozlamalar → A’zolik darajalari bo‘limida darajalarni yarating (masalan, Gold), so‘ng aksiyani shu darajaga yo‘naltiring. Tug‘ilgan kun takliflari uchun auditoriyani Tug‘ilgan oy qilib belgilang va Har bir mijoz uchun limit maydonini to‘ldiring."
      },
      {
        "type": "list",
        "items": [
          "Taklif ishga tushishi uchun to‘lov paytida a’zo tanlangan bo‘lishi kerak — mosligi hozir tanlangan a’zo bo‘yicha aniqlanadi.",
          "Tug‘ilgan kun mosligi a’zoning tug‘ilgan oyidan olinadi, shuning uchun tug‘ilgan kun maydonini to‘ldiring; u kiritilmagan a’zolar hech qachon tug‘ilgan kun mijozi hisoblanmaydi.",
          "Tug‘ilgan oy aksiyasi uchun har bir mijozga limit kerak, u kalendar yil bo‘yicha hisoblanadi: 1 limit har bir mijoz aksiyadan yilda bir marta foydalana oladi degani, keyingi yilda u yangilanadi. Limitsiz saqlab bo‘lmaydi.",
          "Avtomatik daraja oshirish to‘lov yakunlanganda aniqlanadi; buyurtma yaroqsiz deb belgilansa, u keltirib chiqargan oshirish avtomatik ravishda bekor bo‘ladi."
        ]
      },
      {
        "type": "note",
        "text": "v3.2 gacha tug‘ilgan oy aksiyasi xato ko‘rsatardi va har bir mijoz uchun limit to‘ldirilgan bo‘lsa ham saqlab bo‘lmasdi. Sizda shunday bo‘lsa, DingPOS’ni App Store’dan yangilang."
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
    "question": "Sovg‘a, pullik qo‘shimcha va to‘plam narxini qanday sozlash mumkin?",
    "keywords": [
      "sovg‘a",
      "pullik qo‘shimcha",
      "to‘plam narxi",
      "A olsangiz B sovg‘a",
      "sozlash qo‘llanmasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Uch xil murakkab taklif turi mavjud: xaridga sovg‘a (A olsangiz, B sovg‘a), pullik qo‘shimcha ($X qo‘shsangiz, Y olasiz) va to‘plam narxi (istalgan N tasi $X). Sovg‘a va pullik qo‘shimcha kassir tasdiqlashini kutadi; to‘plam narxi esa o‘zi qo‘llanadi."
      },
      {
        "type": "p",
        "text": "Sovg‘a va pullik qo‘shimcha savatni o‘zi o‘zgartirmaydi. Shartlar bajarilganda kassir ekranida taklif banneri chiqadi va savat faqat kassir bannerdagi sovg‘a yoki + tugmasini (Sovg‘ani tanlash yoki Qo‘shimchani tanlash) bosganda o‘zgaradi — bu ataylab shunday, chunki sovg‘a jismoniy zaxiraga tegishli: kimdir u omborda borligini va mijoz uni xohlashini tasdiqlashi kerak."
      },
      {
        "type": "list",
        "items": [
          "Bannerdagi ✕ tugmasi (Rad etish) bosilgach, xuddi shu taklif ushbu savat uchun qayta chiqmaydi; yangi yoki tozalangan savatda yana taklif qilinadi.",
          "Savat endi shartlarga mos kelmay qolsa (masalan, sovg‘ani ishga tushirgan mahsulot olib tashlansa), sovg‘a yoki pullik qo‘shimcha avtomatik olib tashlanadi va tepada xabar chiqadi; bu foydalanish sifatida hisoblanmaydi (v3.6 dan boshlab).",
          "v3.4 dan boshlab kutilayotgan takliflar to‘lovni to‘xtatmaydi: to‘lov tugmasi ostidagi sariq qator, masalan, “1 ta kutilayotgan taklif qo‘llanmaydi”, nechta taklif chetda qolganini aytadi (qaysilari ekanini ko‘rish uchun uni bosing), buyurtma esa ularsiz o‘tadi. To‘lov avvalgidek kutib turishi uchun Sozlamalar → Qurilma sozlamalari bo‘limida To‘lovdan oldin takliflarni hal qilishni yoqing; bu faqat shu iPad’ga tegishli.",
          "Sovg‘a va qo‘shimcha qatorlariga boshqa pulli aksiyalar qo‘shimcha chegirma bera olmaydi va ular boshqa aksiyalar chegarasiga hisoblanmaydi."
        ]
      },
      {
        "type": "p",
        "text": "To‘plam narxi (v2.4 dan boshlab avtomatik qo‘llanadi): savat to‘plam hosil qila olsa, DingPOS uni guruhlaydi va jami summaga kiritadi — so‘rovsiz, to‘plamlarni esa bo‘lib bo‘lmaydi."
      },
      {
        "type": "list",
        "items": [
          "To‘plam faqat savatni arzonlashtirsagina hosil bo‘ladi. Narxi bir xil mahsulotlar orasida chegirmasizlari birinchi guruhlanadi, allaqachon chegirmadagilar o‘z chegirmasini saqlab qoladi.",
          "Qaysi mahsulotlar birga guruhlanishi faqat savatda nima borligiga bog‘liq, skanerlash tartibiga emas.",
          "Har bir mahsulot to‘plam chegirmasidagi o‘z ulushini ko‘rsatadi, har bir qator summasi esa chegirmalardan keyingi summadir.",
          "To‘lov paytida to‘plamlar eng so‘nggi narxlar bilan qayta guruhlanadi; natija o‘zgarsa, yangi jami summani tasdiqlash so‘raladi."
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
    "question": "Aksiya jadvalini va Happy Hour’ni qanday sozlash mumkin?",
    "keywords": [
      "jadval",
      "Happy Hour",
      "hafta kunlari",
      "yarim tun",
      "sozlash qo‘llanmasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Har bir aksiya jadvali uch qatlamdan iborat: sana oralig‘i (boshlanishi majburiy, tugashi ixtiyoriy), kunlik vaqt oralig‘i (Happy Hour) va tanlangan hafta kunlari. Aksiya ishlashi uchun uchalasi ham mos kelishi kerak."
      },
      {
        "type": "list",
        "items": [
          "Yarim tundan o‘tuvchi oraliqlarda (masalan, 22:00–02:00) hafta kuni oraliq boshlangan kun bo‘yicha aniqlanadi: faqat juma tanlangan bo‘lsa, shanba kuni 01:30 hali jumaning seansi hisoblanadi va aksiya ishlaydi — lekin shanba kuni 23:30 da ishlamaydi.",
          "Tugash sanasi qat’iy chegara — Happy Hour oralig‘i hali davom etayotgan bo‘lsa ham, tugash sanasi o‘tishi bilan aksiya to‘xtaydi.",
          "Vaqt iPad qurilmasining soatidan olinadi, shuning uchun qurilmaning vaqt mintaqasi va vaqti to‘g‘ri ekanini tekshiring."
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
    "question": "Ustuvorlik, qo‘shilish va “ishlagach to‘xtatish” nima?",
    "keywords": [
      "ustuvorlik",
      "aksiyalar qo‘shilishi",
      "keyingilarini to‘xtatish",
      "aksiyalar ziddiyati",
      "sozlash qo‘llanmasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bir vaqtda bir nechta aksiya mos kelganda, tartib va o‘zaro ta’sirni uchta sozlama boshqaradi:"
      },
      {
        "type": "list",
        "items": [
          "Ustuvorlik: raqami kichigi birinchi hisoblanadi. Tartibni o‘zgartirish uchun aksiyalar ro‘yxatida sudrab o‘tkazing.",
          "Boshqa aksiyalar bilan qo‘shiladi (standart bo‘yicha yoqilgan): o‘chirilsa, mahsulot darajasidagi aksiya faqat o‘zi chegirma bergan qatorlarni band qiladi — boshqa mahsulotlar keyingi mahsulot darajasidagi aksiyalarni olishi mumkin; qo‘shilmaydigan savat darajasidagi aksiya keyingi barcha savat darajasidagi aksiyalarni to‘sadi.",
          "Bu aksiya ishlagach, keyingilarini to‘xtatish: bu aksiya qo‘llangach, boshqa pulli chegirmalar hisoblanmaydi — lekin ballarni ko‘paytirish va sovg‘a takliflariga ta’sir qilmaydi."
        ]
      },
      {
        "type": "note",
        "text": "Keyingi aksiyalar allaqachon chegirilgan summaga hisoblanadi: 10% va 5% chegirma 15% chegirma emas — ikkinchi chegirma birinchisidan keyingi jami summaga qo‘llanadi. DingPOS mijoz uchun eng foydali kombinatsiyani ham qidirmaydi; tartib to‘liq sizning ustuvorliklaringiz bilan belgilanadi."
      },
      {
        "type": "p",
        "text": "Qiziq fakt: chegirma nolgacha yaxlitlansa, qo‘llanish hisoblanmaydi — foydalanish limitini ham sarflamaydi."
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
    "question": "DingPOS’ga to‘lovlarni qabul qilish tizimi ulanadimi?",
    "keywords": [
      "to‘lov",
      "karta orqali to‘lov",
      "integratsiya",
      "to‘lov shlyuzi",
      "terminal"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS hozircha pul oqimiga aralashmaydi: to‘lov usullari faqat hisob yuritish uchun belgilar, haqiqiy to‘lovlar esa sizdagi mavjud terminal yoki to‘lov ilovasi orqali o‘tadi."
      },
      {
        "type": "p",
        "text": "To‘lovlarni qabul qilishni ulash-ulamasligimiz foydalanuvchilarning haqiqiy talabiga bog‘liq. Bu sizga kerak bo‘lsa, bizga yozing: qaysi xizmatni ulashni xohlayotganingizni (qaysi protsessor, qaysi terminal) va qanday holatda ishlatishingizni ayting. Ishlab chiqishni so‘rovlar soniga qarab navbatga qo‘yamiz."
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
    "question": "DingPOS elektron schyot-faktura va chek chiqarishni qo‘llaydimi?",
    "keywords": [
      "elektron schyot-faktura",
      "schyot-faktura",
      "chek",
      "printer",
      "chek printeri"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hozircha yo‘q. Elektron schyot-faktura va chek chiqarishni sinash va ishlab chiqish uchun fiskal qurilmalar / chek printerlari sotib olish kerak, bu esa katta xarajat. Biz kichik jamoamiz, shuning uchun foydalanuvchilar soni oshib, daromad barqaror bo‘lgach, buni rejalashtiramiz."
      },
      {
        "type": "p",
        "text": "Bu sizga kerak bo‘lsa, foydalanayotgan qurilmangiz modelini yozib yuboring — ishlab chiqishni so‘rovlar soniga qarab navbatga qo‘yamiz."
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
    "question": "DingPOS shtrix-kod skanerini ulash mumkinmi?",
    "keywords": [
      "shtrix-kod skaneri",
      "skaner",
      "bluetooth",
      "usb",
      "qurilma"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mahsulot qo‘shishda kamera orqali shtrix-kodni skanerlash allaqachon bor. Alohida skanerlar (USB / Bluetooth) hozircha rasman qo‘llab-quvvatlanmaydi: boshqa qurilma funksiyalari kabi, ular uchun ham sinash va ishlab chiqish maqsadida qurilmalar sotib olish kerak, shuning uchun foydalanuvchilar soni oshgani sari rejalashtiramiz."
      },
      {
        "type": "note",
        "text": "Kassadagi qidiruv maydoni shtrix-kod bo‘yicha ham qidiradi, shuning uchun klaviatura rejimidagi skaner nazariy jihatdan unga kodni kiritib, mahsulotni chiqarishi mumkin. Lekin biz buni haqiqiy qurilmada tekshirmaganmiz, shuning uchun rasman qo‘llab-quvvatlanmaydi. Agar ishlaydigan skanerni sinab ko‘rgan bo‘lsangiz, modelini bizga ayting!"
      },
      {
        "type": "p",
        "text": "Bu sizga kerak bo‘lsa, bizga yozing — ishlab chiqishni so‘rovlar soniga qarab navbatga qo‘yamiz."
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
    "question": "DingPOS’da oylik hisob-kitob hisoboti bormi?",
    "keywords": [
      "oylik hisob-kitob",
      "solishtirish",
      "oy yopish",
      "oylik hisobot",
      "kreditor qarz",
      "debitor qarz"
    ],
    "content": [
      {
        "type": "p",
        "text": "v3.4 dan boshlab P&L har oyning sof foydasini mahsulot tannarxi, komissiya haqi va xarajatlardan keyin ko‘rsatadi — “Do‘konim har oyda aslida qancha foyda qilganini qanday ko‘raman?” maqolasiga qarang. v3.6 dan boshlab soliq hisoboti davrni (masalan, Shu oy) buxgalteringiz uchun CSV, Excel fayli yoki PDF hisobot ko‘rinishida eksport qiladi: unda savdolar, soliq, har bir to‘lov usuli bo‘yicha qabul qilingan pul va qarzdorliklar bo‘ladi. P&L va boshqa hisobotlarni hozircha eksport qilib bo‘lmaydi, lekin solishtirish uchun kerak bo‘lgan hamma narsa ilovada allaqachon bor:"
      },
      {
        "type": "list",
        "items": [
          "Statistika’da “Shu oy”ni tanlang — oyning daromadi (sotuvdan tushum), qabul qilingan pul, foyda va to‘lov turlari bo‘yicha taqsimot ko‘rinadi.",
          "Yetkazib beruvchilardan oylik shartlarda qilingan xaridlar Xaridlar bo‘limidagi To‘lanmagan hisoblar’da to‘planadi, u yerda butun oyni bir yo‘la yopish mumkin.",
          "Mijozlarga nasiyaga qilingan savdolar Buyurtma → Qarzdorliklar’da to‘planadi, u yerda ham butun oyni bir yo‘la yopish mumkin."
        ]
      },
      {
        "type": "p",
        "text": "Agar soliq hisoboti qamrab olganidan tashqari, eksport qilish yoki chop etish mumkin bo‘lgan oylik hisob-kitob hisoboti kerak bo‘lsa, kerakli maydonlarni yozib bizga yuboring — ishlab chiqishni so‘rovlar soniga qarab navbatga qo‘yamiz."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
