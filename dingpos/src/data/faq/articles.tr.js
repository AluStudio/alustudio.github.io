// Generated from en and the tr translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync tr`, then `npm run l10n -- apply tr`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Başlarken",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Ödeme",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Siparişler ve İadeler",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Ürünler, Stok ve Satın Alma",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Raporlar",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Kampanyalar ve Sadakat",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Yedekleme ve Veri",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Personel ve Yetkiler",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Abonelik ve Faturalandırma",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Kampanya Kurulum Rehberleri",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Yakında",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "DingPOS'ta mağazamı nasıl kurarım?",
    "keywords": [
      "kurulum",
      "başlangıç",
      "ilk kurulum",
      "ilk adımlar",
      "kurulum sihirbazı",
      "mağaza açma",
      "POS kurulumu",
      "ülke",
      "para birimi"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS'u ilk açtığınızda bir kurulum sihirbazı mağazanızı iki adımda, birkaç dakika içinde açar:"
      },
      {
        "type": "steps",
        "items": [
          "Ülkenizi veya bölgenizi seçin. Listenin en üstünde bu iPad'in bölgesi ve en yaygın pazarlar yer alır; altında DingPOS'un App Store'da bulunduğu 175 ülke ve bölgenin tümü vardır ve uygulamanın dilinde ya da İngilizce adla aranabilir. Seçiminiz para birimini, vergi oranını ve vergi modunu otomatik doldurur.",
          "Mağazanız adımında mağaza adını girin, isterseniz logo ekleyin; para birimini, vergi oranını ve vergi modunu (KDV dahil / KDV hariç) kontrol edin. Para birimi varsayılan olarak ülkenizinkidir; 130 para birimi arasından seçmek için ona dokunun."
        ]
      },
      {
        "type": "p",
        "text": "Devam'a dokunun; “Ding! Mağazanız hazır.” ifadesini göreceksiniz. DingPOS ayrıca Nakit ve Kredi Kartı olmak üzere iki ödeme yöntemi ekler. Sonra Ürünler bölümünden ürünlerinizi ekleyin ve satış yapmaya başlayın."
      },
      {
        "type": "note",
        "text": "Para birimi ve vergi modu kurulumdan sonra değiştirilemez; vergi oranı ise sonradan Ayarlar'dan değiştirilebilir. ABD, Kanada, Brezilya ve Mikronezya'da oran eyalete, vilayete veya şehre göre değiştiği için vergi oranı alanı boş başlar; devam etmek için uyguladığınız oranı girersiniz (0 da olur). 175 ülkelik liste ve para birimi seçimi v3.2 ile geldi; önceki sürümlerde 15 ülke vardı."
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
    "question": "DingPOS internet olmadan çalışır mı?",
    "keywords": [
      "internetsiz çalışan POS",
      "çevrimdışı",
      "offline",
      "internet",
      "Wi-Fi",
      "bağlantı yok",
      "gece pazarı",
      "pazar tezgâhı"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. DingPOS internet olmadan da çalışır — ödeme alma, ürün yönetimi, stok ve raporların tümü ağ gerekmeden iPad'inizde yerel olarak çalışır. Gece pazarları, pop-up satış noktaları ve Wi-Fi bulunmayan diğer yerlerde sorunsuz kullanabilirsiniz."
      },
      {
        "type": "p",
        "text": "Yalnızca iki işlem için bağlantı gerekir: bulut yedekleme (kendi iCloud / Google Drive / Dropbox hesabınıza yükleme) ve abonelik durumunun doğrulanması."
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
    "question": "DingPOS için hesap oluşturmam gerekiyor mu?",
    "keywords": [
      "hesap",
      "üyelik",
      "kayıt ol",
      "giriş yap",
      "oturum açma",
      "gizlilik"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hayır. DingPOS'ta hesap sistemi yoktur — indirin ve satışa başlayın. Ürünleriniz, siparişleriniz ve müşteri verileriniz iPad'inizde kalır, sunucularımıza asla yüklenmez."
      },
      {
        "type": "p",
        "text": "Bulut yedeklemeyi açtığınızda kendi bulut hesabınızda (iCloud, Google Drive veya Dropbox) oturum açarsınız. Yedekler sizin hesabınızda durur — bunlara erişemeyiz."
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
    "question": "DingPOS hangi cihazlarda çalışır?",
    "keywords": [
      "cihaz",
      "desteklenen cihazlar",
      "iPhone",
      "Mac",
      "iPad",
      "gereksinimler",
      "iPadOS sürümü"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS şu anda iPadOS 17 veya üzerini çalıştıran iPad'leri destekler ve öncelikle yatay kullanım için tasarlanmıştır."
      },
      {
        "type": "p",
        "text": "iPhone ve Mac henüz desteklenmiyor. Başka bir cihazda da kullanmak isterseniz bize yazın ve kullanım durumunuzu anlatın."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Kurulumdan sonra para birimini veya vergi modunu değiştirebilir miyim?",
    "keywords": [
      "para birimi",
      "vergi modu",
      "değiştirme",
      "kilitli",
      "vergi oranı",
      "KDV oranı"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vergi oranını Ayarlar'dan istediğiniz zaman değiştirebilirsiniz — yeni oran yalnızca bundan sonraki siparişlere uygulanır."
      },
      {
        "type": "p",
        "text": "Para birimi ve vergi modu (KDV dahil / KDV hariç) kurulum tamamlandıktan sonra kilitlenir. Geçmiş siparişlerinizin tümü bunlarla hesaplandığı için sonradan değiştirmek raporlarınızı bozar. Kurulumdaki Mağazanız adımında bunları kontrol edin: para birimi varsayılan olarak ülkenizinkidir ve dokunarak başka bir tane seçebilirsiniz."
      },
      {
        "type": "note",
        "text": "Mağazanızı yeni açtıysanız ve henüz önemli bir verisi yoksa, uygulamayı silip yeniden yükleyerek kurulumu baştan yapabilirsiniz. Silmeden önce saklamanız gereken bir şey olmadığından emin olun."
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
    "question": "Uygulamanın dilini nasıl değiştirebilirim?",
    "keywords": [
      "dil",
      "uygulama dili",
      "İngilizce",
      "Türkçe",
      "Çince",
      "Japonca",
      "İspanyolca",
      "çok dilli",
      "dil değiştirme"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS, İngilizce, Geleneksel ve Basitleştirilmiş Çince, Japonca, Korece, Tayca, Vietnamca, Endonezce, Malayca, İspanyolca (Latin Amerika), Portekizce (Brezilya), Fransızca ve Almanca dahil 32 dili destekler. Ayarlar → Cihaz Tercihleri bölümüne gidip Uygulama Dili'ne dokunun. iPad'in Ayarlar uygulamasında DingPOS sayfası açılır; dili Dil altından seçersiniz."
      },
      {
        "type": "p",
        "text": "iOS, uygulamaların dil listesini doğrudan açmasına izin vermez; bu yüzden son dokunuş sistem Ayarlar'ında yapılır. Seçtiğiniz dil yalnızca bu iPad için geçerlidir."
      },
      {
        "type": "note",
        "text": "İngilizce ve Geleneksel Çince dışındaki diller v3.2 ile geldi. Dil altında yalnızca İngilizce ve Çince görünüyorsa DingPOS'u App Store'dan güncelleyin."
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
    "question": "Aynı anda birden fazla müşteriye nasıl hizmet veririm?",
    "keywords": [
      "sepet",
      "birden fazla sepet",
      "sepeti beklemeye alma",
      "sepet değiştirme",
      "aynı anda satış",
      "kuyruk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kasa ekranı aynı anda en fazla 10 sepeti destekler. Sepet çubuğundaki \"+\" düğmesine dokunarak yeni sepet ekleyin, numaralı bir sekmeye dokunarak sepetler arasında geçiş yapın."
      },
      {
        "type": "p",
        "text": "Her sepet birbirinden bağımsız hesaplanır. A müşterisi hâlâ ürünlere bakarken başka bir sepete geçip önce B müşterisinin ödemesini alabilirsiniz. Ödeme tamamlanınca o sepet alanı otomatik olarak kaldırılır."
      },
      {
        "type": "note",
        "text": "Sepetler yalnızca bellekte tutulur — ödemesi alınmamış sepetler uygulama tamamen kapatıldığında temizlenir."
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
    "question": "İndirim nasıl uygulanır?",
    "keywords": [
      "indirim",
      "yüzde indirim",
      "sabit tutar indirim",
      "fiyat indirimi",
      "ürün indirimi",
      "sepet indirimi"
    ],
    "content": [
      {
        "type": "p",
        "text": "İndirim iki düzeyde uygulanabilir ve her biri sabit tutar ya da yüzde olabilir:"
      },
      {
        "type": "list",
        "items": [
          "Ürün indirimi: sepetteki bir ürüne dokunun → \"İndirim\"i seçin → tutar veya yüzde girin.",
          "Sepet indirimi: sepetin altındaki \"İndirim\" düğmesine dokunun."
        ]
      },
      {
        "type": "p",
        "text": "Her ürüne ve sepete aynı anda yalnızca bir indirim uygulanabilir — yeniden uygulamak öncekinin üzerine yazar, indirim rozetine dokunmak ise indirimi kaldırır. İndirimler perakendede standart olan sırayla, vergiden önce uygulanır."
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
    "question": "Vergi (KDV) nasıl hesaplanır?",
    "keywords": [
      "vergi",
      "KDV",
      "KDV dahil",
      "KDV hariç",
      "vergi hesabı",
      "fiş"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vergi, kurulum sırasında seçtiğiniz vergi moduna göre otomatik hesaplanır. Fişte vergi tutarı her iki modda da gösterilir:"
      },
      {
        "type": "list",
        "items": [
          "Vergi dahil: fiyatlar vergiyi zaten içerir — toplam değişmez, fişte içindeki vergi ayrıca gösterilir (Tayvan, Japonya gibi ülkelerde yaygındır).",
          "Vergi hariç: vergi, ödeme sırasında indirimli tutarın üzerine eklenir (ABD, Kanada gibi ülkelerde yaygındır)."
        ]
      },
      {
        "type": "p",
        "text": "Tam hesaplama sırası: ürün indirimleri → sepet indirimi → vergi. Tutarlar, para biriminin ondalık basamak sayısına göre yarım yukarı yuvarlanır (örneğin TWD için 0, USD için 2)."
      }
    ],
    "related": [
      "change-currency",
      "apply-discounts"
    ]
  },
  {
    "slug": "payment-methods",
    "category": "checkout",
    "question": "Hangi ödeme yöntemleri destekleniyor?",
    "keywords": [
      "ödeme yöntemi",
      "nakit",
      "kredi kartı",
      "line pay",
      "para üstü",
      "özel ödeme yöntemi",
      "veresiye",
      "işlem ücreti"
    ],
    "content": [
      {
        "type": "p",
        "text": "Yeni bir mağaza, kurulumda uygulamanın dilinde adlandırılan Nakit ve Kredi Kartı olmak üzere iki ödeme yöntemiyle başlar. Ayarlar → Ödeme Yöntemleri bölümünden istediğiniz başka bir yöntemi (örneğin Apple Pay, LINE Pay, yerel bir dijital cüzdan) ekleyebilir, yöntemleri silebilir veya yeniden sıralayabilirsiniz."
      },
      {
        "type": "p",
        "text": "Ödeme yöntemleri kayıt tutmaya yarayan etiketlerdir — DingPOS gerçek ödeme almaz. Kart veya mobil ödemeyi mevcut POS cihazınız ya da uygulamanızla alın, sonra kaydetmek için DingPOS'ta eşleşen etiketi seçin. Nakit ödemelerde para üstü otomatik hesaplanır."
      },
      {
        "type": "p",
        "text": "Kart veya mobil ödeme sağlayıcınız ücret kesiyorsa yönteme bir ücret oranı verin; İstatistik her yöntemin ücretini ve net alınan tutarını tahmin eder. Bkz. “DingPOS kart ve mobil ödeme ücretlerini takip edebilir mi?”"
      },
      {
        "type": "p",
        "text": "Ürünü şimdi alıp parasını sonra ödeyecek düzenli bir müşteri için Veresiye'yi seçin: satış alacak olarak kaydedilir ve para geldiğinde kapatılır. Bkz. “Düzenli müşteriler veresiye alışveriş yapıp sonra ödeyebilir mi?”"
      }
    ],
    "related": [
      "payment-fees",
      "on-account",
      "roadmap-payment-integration"
    ]
  },
  {
    "slug": "payment-fees",
    "category": "checkout",
    "since": "3.2",
    "question": "DingPOS kart ve mobil ödeme ücretlerini takip edebilir mi?",
    "keywords": [
      "işlem ücreti",
      "kart ücreti",
      "komisyon",
      "ücret oranı",
      "net alınan tutar",
      "POS komisyonu",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Ayarlar → Ödeme Yöntemleri bölümünde bir ödeme yöntemine dokunun (veya yeni bir tane ekleyin) ve İşlem ücreti alanını doldurun: bir yüzde, işlem başına sabit bir tutar ya da ikisi birden. Bundan sonra o yöntemle tahsil edilen her ödeme, o andaki orana göre tahmin edilen bir ücretle kaydedilir."
      },
      {
        "type": "p",
        "text": "İstatistik'te Ödeme Yöntemleri kartı, ücreti olan her yöntemin altına “Ücret · Net” satırı ekler; kartın alt kısmında tüm dönem için tahmini ücretler ve tahmini net alınan tutar görünür."
      },
      {
        "type": "list",
        "items": [
          "Sağlayıcınızın gerçekte kestiği oranı vergisi dahil girin — %3 artı %5 vergi için %3,15 yazın. Ücret yoksa iki alanı da boş bırakın.",
          "Oran değişikliği yalnızca sonraki ödemelere uygulanır; daha önce kaydedilen ücretler olduğu gibi kalır.",
          "“Yüzde ücret iadelerde geri verilir” varsayılan olarak açıktır; iade yapınca ücretini geri veren sağlayıcılar içindir, sabit ücret hiçbir zaman geri verilmez. Geçersiz kılma, ürün iadesi, iptal edilen ön siparişler ve geri alınan borç kapatmalar ücretleri bu kurala göre tersine çevirir; müşteri her iki durumda da aynı tutarı geri alır.",
          "Yöntemin oranı olmadan önce tahsil edilen ödemelerin ücreti yoktur: İstatistik bunları “N işlemde oran eksik” diye işaretler ve neti “—” olarak gösterir."
        ]
      },
      {
        "type": "note",
        "text": "Ücretler, girdiğiniz orandan hesaplanan tahminlerdir; gerçek tutar sağlayıcınızın ekstresindedir. Ücret oranlarını düzenlemek ve ücretleri İstatistik'te görmek için Standard veya üstü plan gerekir. Lite'ta alanlar kilitlidir, ancak ödemeler yine de ücretlerini kaydeder; yükselttiğinizde bunlar görünür."
      }
    ],
    "related": [
      "payment-methods",
      "revenue-vs-cash",
      "plans-compare"
    ]
  },
  {
    "slug": "checkout-sound",
    "category": "checkout",
    "since": "3.0",
    "question": "Ödeme sonrası “Ding” sesini kapatabilir miyim?",
    "keywords": [
      "ses",
      "ding",
      "sessize alma",
      "sessiz",
      "ödeme sesi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Ayarlar → Cihaz Tercihleri bölümüne gidip Ödeme sesi'ni kapatın. Bir sonraki satıştan itibaren başarı ekranı sessiz kalır, dokunsal geri bildirim yine de sürer."
      },
      {
        "type": "p",
        "text": "Bu ayar yalnızca bu iPad için geçerlidir ve bulut yedeğini geri yüklemek onu değiştirmez."
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
    "question": "Kasa ekranı stokta olmayan ürünleri gizleyebilir mi?",
    "keywords": [
      "gizle",
      "stokta yok",
      "tükenen ürün",
      "sıfır stok",
      "kasa",
      "ürün görünmüyor",
      "ürün bulunamıyor"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Ayarlar → Cihaz Tercihleri bölümüne gidip Stokta olmayan ürünleri gizle seçeneğini açın (varsayılan olarak kapalıdır). Kasadaki ürün ızgarası, kategori filtresi ve arama (ad ve barkod) stoğu 0 veya altında olan her ürünü atlar. Anahtar hemen etki eder; uygulamayı yeniden açmanız gerekmez."
      },
      {
        "type": "list",
        "items": [
          "Stok takibi yapılmayan ürünler her zaman görünür. Varyantlı bir ürün yalnızca tüm varyantları stokta yoksa gizlenir.",
          "Yalnızca bu iPad'in kasasını etkiler; Ürünler listesi yine tüm ürünleri gösterir.",
          "Tüm ürünler gizlendiğinde kasa “Tüm ürünler stokta yok” mesajını gösterir ve anahtarı nereden kapatacağınızı söyler."
        ]
      },
      {
        "type": "note",
        "text": "Anahtar açıkken bu iPad stokta olmayan ürünleri bulamaz; bu yüzden eksi stoğa satış yapamaz veya bunlar için ön sipariş alamaz — gerektiğinde kapatın. Ürünler kasadan kaybolmuş gibi görünüyorsa nedeni genellikle bu anahtardır."
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
    "question": "Ürün fiyatını değiştirirsem sepet güncellenir mi?",
    "keywords": [
      "fiyat değişikliği",
      "fiyat güncelleme",
      "sepet",
      "yeniden hesaplama"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sepet, ürünün eklendiği andaki fiyatı gösterir. Ödemeyi onayladığınızda DingPOS tüm ürünlerin güncel fiyatını yeniden sorgular — bir şey değişmişse devam etmeden önce güncel fiyatlarla sizi uyarır."
      },
      {
        "type": "p",
        "text": "Kampanyalar da onay anında baştan yeniden değerlendirilir. Bunun sonucunda toplam, vergi veya herhangi bir indirim tutarı değişirse bir değişiklik özeti gösterilir ve yeniden onaylamanız gerekir — böylece gördüğünüz tutar, kaydedilen tutarla birebir aynı olur."
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
    "question": "Elle indirim ve kampanyalar birlikte kullanılabilir mi?",
    "keywords": [
      "elle indirim",
      "kampanya",
      "birleştirme",
      "kampanya ile indirim",
      "öncelik"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Kural şu: “elle yapılan indirim önceliklidir, katmanlar birbirinden bağımsızdır”:"
      },
      {
        "type": "list",
        "items": [
          "Elle ürün indirimi: o satır artık ürün düzeyindeki kampanyalardan yararlanmaz — elle yaptığınız indirim, satış anındaki son karar sayılır. Yine de satırın tutarı harcama eşiklerine dahil edilir.",
          "Elle sepet indirimi: tüm kampanyalar hesaplandıktan sonra uygulanır, yani ikisi bir arada geçerli olur. Kalan toplamdan fazla bir tutar girerseniz tutar bir uyarıyla otomatik olarak sınırlanır."
        ]
      },
      {
        "type": "p",
        "text": "Elle yapılan indirimi kaldırmak, bir sonraki değerlendirmede satırın kampanyadan yararlanma hakkını geri getirir."
      }
    ],
    "related": [
      "apply-discounts",
      "guide-priority-stacking"
    ]
  },
  {
    "slug": "void-order",
    "category": "orders",
    "question": "Kasada hata yaptım, siparişi nasıl geçersiz kılarım?",
    "keywords": [
      "geçersiz kıl",
      "sipariş iptali",
      "yanlış satış",
      "hatalı sipariş",
      "satışı geri al"
    ],
    "content": [
      {
        "type": "p",
        "text": "Siparişler sekmesine gidin, siparişi bulup ayrıntı ekranını açın ve Geçersiz kıl’a dokunun. Onayla’ya dokunun, işlem tamamdır."
      },
      {
        "type": "p",
        "text": "Geçersiz kılma, siparişe bağlı her şeyi otomatik olarak geri alır: takip edilen stok geri eklenir, siparişten kazanılan puanlar geri alınır, kullanılan puanlar iade edilir. Geçersiz kılınan siparişler listede açıkça işaretli olarak kalır ve raporlardaki satış gelirine dahil edilmez."
      },
      {
        "type": "note",
        "text": "Geçersiz kılma “bu satış hiç yapılmadı” demektir; kasada o anda yanlış girilen siparişler için kullanın. Müşteri malı sonradan getirirse bunun yerine İade’yi kullanın: asıl sipariş korunur, ürünlerin yalnızca bir kısmını iade edebilirsiniz ve satış geliri iade günü düşürülür."
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
    "question": "Ürün iadesi ve değişimi nasıl yapılır?",
    "keywords": [
      "iade",
      "ürün iadesi",
      "değişim",
      "para iadesi",
      "kısmi iade",
      "beden değişimi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Siparişler sekmesine gidin, asıl siparişi açın ve İade’ye dokunun. Her üründen kaç adedin geri geldiğini seçin. Değişim için aynı ekranda Yerine Verilen Ürün Ekle’ye dokunun; hesaplaşma tek seferde tamamlanır: pozitifse müşteri öder, negatifse siz iade edersiniz, sıfırsa para el değiştirmez."
      },
      {
        "type": "list",
        "items": [
          "Asıl sipariş hiçbir zaman değiştirilmez. İade, bugünün tarihini taşıyan ve R önekiyle numaralanan ayrı bir belge oluşturur; satış geliri iade günü düşürülür.",
          "İade tutarı, müşterinin o ürün için gerçekten ödediği tutardır: ürün indirimleri, sepet indirimleri ve puan kullanımı zaten paylara ayrılmıştır, yani iade etiket fiyatı üzerinden yapılmaz. Vergi, asıl siparişte uygulanan oranla hesaplanır.",
          "Yerine verilen ürünler bugünkü fiyattan satılır; kampanya veya indirim uygulanmaz.",
          "Takip edilen stok otomatik olarak geri eklenir. Asıl siparişten kazanılan puanlar geri alınır, kullanılan puanlar iade edilir; yerine verilen ürünler kendi puanlarını kazandırır.",
          "Bir sipariş birkaç seferde iade edilebilir, ancak iade edilen toplam adet başlangıçta satılan adedi aşamaz. Kampanya kullanım limitleri iadeyle geri verilmez."
        ]
      },
      {
        "type": "note",
        "text": "İadeler için süre sınırı yoktur ancak asıl sipariş gereklidir. Bir iade yanlışlıkla girildiyse iadeyi geçersiz kılın; iade edilebilir adet geri gelir."
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
    "question": "Kaporalı ön sipariş nasıl alınır?",
    "keywords": [
      "ön sipariş",
      "kapora",
      "teslim alma",
      "kalan tutar",
      "ürün ayırtma",
      "rezerve"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ödeme ekranında üstteki Satış seçimini Ön sipariş olarak değiştirin, teslim tarihini seçin, kaporayı girin (0’dan toplam tutara kadar herhangi bir tutar; %30 / %50 / tamamı kısayolları var) ve kaporanın nasıl ödendiğini seçin. Mal geldiğinde ulaşabilmek için bir müşteri ekleyin."
      },
      {
        "type": "list",
        "items": [
          "Stok, ön sipariş verildiği anda düşer; böylece satılabilir miktar hemen buna göre görünür. Bu bir uyarı işaretidir, ayırma değil: sonraki bir satış son adedi yine alabilir. Stokta olmayan ürünler eksiye düşer; satın alma siparişi teslim alınınca düzelir.",
          "Müşteri teslim almaya geldiğinde sipariş ayrıntısında Teslim et’e dokunarak kalan tutarı tahsil edin. Sipariş bundan sonra sıradan bir tamamlanmış satış olur; sonraki iadeler normal iade akışıyla yapılır.",
          "Müşteri hiç gelmezse sipariş ayrıntısında Siparişi iptal et’e dokunun ve kaporayı iade etmeyi ya da alıkoymayı seçin. Stok geri eklenir.",
          "Kapora fişi ile son teslim fişi aynı numarayı taşır."
        ]
      },
      {
        "type": "p",
        "text": "İstatistik sekmesinde ön siparişin satış geliri teslim günü tamamen sayılır; kapora ise ödendiği gün Alınan tutar’a eklenir. Bu yüzden iki rakam bir süre farklı görünür. Bkz. “Satış geliri ile Alınan tutar arasındaki fark nedir?”"
      },
      {
        "type": "note",
        "text": "Ön sipariş kalemleri düzenlenemez; müşteri fikrini değiştirirse siparişi iptal edip yeni bir ön sipariş oluşturun. Ön sipariş oluşturmak için Standard veya üstü plan gerekir. Plan düşürüldükten sonra mevcut ön siparişler yine teslim edilebilir veya iptal edilebilir."
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
    "question": "Müşterilere veresiye satış yapıp parayı sonra alabilir miyim?",
    "keywords": [
      "veresiye",
      "veresiye defteri",
      "alacak",
      "borç kapatma",
      "sonra öde",
      "cari"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Ödeme ekranında müşteriyi seçin ve ödeme yöntemi olarak Veresiye’yi seçin. Borcun bir sahibi olması gerektiğinden müşteri seçilmeden Veresiye kullanılamaz."
      },
      {
        "type": "p",
        "text": "Tahsil etmek için Siparişler sekmesinin üstünden Alacaklar’a geçin. Borçlar müşteriye göre gruplanır; birini açıp tek bir siparişi, bir ayın tamamını ya da hepsini kapatabilirsiniz. DingPOS her seferinde paranın nasıl ödendiğini sorar. Tek bir sipariş ayrıntı ekranından da kapatılabilir; yanlışlıkla girilen bir kapatma Borç Kapatmayı Geri Al ile geri alınabilir."
      },
      {
        "type": "list",
        "items": [
          "Satış geliri, mal çıktığı gün sayılır; Alınan tutar ve sadakat puanları borç kapatıldığı güne kadar bekler.",
          "Borcu kapatılmamış siparişler listede turuncu bir rozet taşır; müşteri ayrıntısında müşterinin şu an ne kadar borcu olduğu görünür.",
          "Borcu kapatılmamış siparişi olan müşteri silinemez."
        ]
      },
      {
        "type": "note",
        "text": "Veresiye satış oluşturmak için Standard veya üstü plan gerekir. Plan düşürüldükten sonra yenisini başlatamazsınız ancak mevcut alacaklar yine görüntülenebilir ve kapatılabilir."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "payment-methods",
      "pre-orders"
    ]
  },
  {
    "slug": "order-notes",
    "category": "orders",
    "since": "2.2",
    "question": "Siparişlere, müşterilere veya satın alma siparişlerine not ekleyebilir miyim?",
    "keywords": [
      "not",
      "notlar",
      "sipariş notu",
      "müşteri notu",
      "açıklama"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Sipariş, müşteri ve satın alma siparişi ayrıntı sayfalarının her birinde bir Notlar kartı bulunur; düzenlemek için kartına dokunun, en fazla 500 karakter yazabilirsiniz. Müşteri ya da satın alma siparişi oluştururken formda da not yazabilirsiniz."
      },
      {
        "type": "p",
        "text": "Notlar duruma bağlı değildir: tamamlanmış siparişlere, geçersiz kılınmış siparişlere ve iadelere de not eklenebilir veya düzenlenebilir. Bir siparişin tutarları ve ürünleri kasada sabitlenir; not belgenin yanında durur ve içeriğini hiçbir zaman değiştirmez."
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
    "question": "Varyantlı (beden, renk gibi seçenekli) ürün nasıl oluşturulur?",
    "keywords": [
      "varyant",
      "beden",
      "renk",
      "seçenek",
      "seçenek değeri",
      "ürün çeşidi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ürün düzenleme sayfasında Varyant Seçenekleri altındaki Seçenek Ekle düğmesine dokunarak bir seçenek ekleyin (örneğin “Renk”), ardından “+ Seçenek değeri” ile seçeneklerini tek tek ekleyin (örneğin Kırmızı, Mavi). İki veya daha fazla seçenek olduğunda (örneğin Renk × Beden) DingPOS tüm birleşimleri sizin yerinize oluşturur (Kırmızı/S, Kırmızı/M, Mavi/S…)."
      },
      {
        "type": "p",
        "text": "Ürünün varyantları olduğunda Fiyat alanı kapanır; her birleşimin fiyatı Varyant Fiyatı ve Stoku altında ayrı girilir ve kendi stoğu da vardır (v3.2'den beri; önceki sürümler hâlâ ürün fiyatı ister). Kasada, ürün listesinde ve ürün ayrıntısında en düşük fiyattan en yükseğe bir aralık görünür, örneğin “NT$350–NT$390”; tüm birleşimler aynı fiyattaysa tek fiyat gösterilir. Fiyata göre sıralama en düşük birleşim fiyatını kullanır. Kasada ürüne dokunduğunuzda, sepete eklenmeden önce bir varyant seçim ekranı açılır."
      },
      {
        "type": "p",
        "text": "Her birleşim için maliyet girmeniz gerekmez: boş bir Maliyet alanı Üründen alınır demektir; ürünün maliyetini kullanır ve o değişince birlikte değişir. Bir sayı girerseniz Kendi maliyeti olur — 0 dahil. Tümünde ürün maliyetini kullan, tüm kendi maliyetlerini tek seferde temizler."
      },
      {
        "type": "note",
        "text": "Seçenek ve seçenek değeri adları en fazla 20 karakter olabilir ve boş bırakılamaz: boş bir seçenek adı ya da değeri kaydederken kırmızı çerçeveyle işaretlenir; doldurun ya da boş değeri silin. Varyantlı bir ürün serbest fiyat kullanamaz."
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
    "question": "Ürün fiyatını ödeme sırasında girebilir miyim? (kargo ücreti, pazarlıklı ürün gibi)",
    "keywords": [
      "serbest fiyat",
      "fiyat girme",
      "özel fiyat",
      "kargo ücreti",
      "hizmet bedeli",
      "pazarlık fiyatı",
      "pazar fiyatı"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet — ürünü Serbest fiyat olarak ayarlayın. Ürün düzenleme sayfasında Serbest fiyat seçeneğini açın ve fiyatı boş bırakın; kasada ve ürün listesinde fiyatın yerinde “Serbest fiyat” yazar. Ödeme sırasında ürüne dokunduğunuzda önce fiyat sorulur; fiyatı girip Sepete Ekle’ye dokunarak ürünü o fiyatla ekleyin."
      },
      {
        "type": "list",
        "items": [
          "0 geçerli bir fiyattır (örneğin ücretsiz kargo); boş alan eklenemez. Fiyatı, mağazanızın vergi modunun diğer her şeyi fiyatlandırdığı şekilde girin.",
          "Sepette serbest fiyatlı her ürün için tek satır bulunur: ürüne yeniden dokunmak o satırı açar ve fiyatı değiştirebilirsiniz.",
          "Serbest fiyatı açmak Kampanyalardan hariç tut seçeneğini de açar; böylece bir ücrete indirim uygulanmaz ve harcama eşiklerine sayılmaz. Pazarlıklı bir ürün kampanyalara katılsın istiyorsanız yeniden kapatın.",
          "Satıldıktan sonra satır, diğerleri gibi vergilendirilir, puan kazandırır ve İstatistik'te sayılır; ürün iadesinde girilen fiyat iade edilir.",
          "Varyantlı bir ürün serbest fiyat kullanamaz. Serbest fiyatlı ürünler hediye ya da ücretli eklenti olarak asla sunulmaz ve bir değişimin yerine konacak ürün listesinde hiç görünmez."
        ]
      },
      {
        "type": "note",
        "text": "Her planda vardır ve fiyatı girmek için hiçbir zaman yönetici onayı gerekmez."
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
    "question": "Barkod nasıl çalışır? Ürüne barkod okutma ve girme",
    "keywords": [
      "barkod",
      "barkod okutma",
      "barkod okuyucu",
      "aynı barkod",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ürün barkodları elle yazılabilir veya kamerayla okutulabilir. Barkodlar benzersiz olmalıdır; kaydederken bir barkod başka bir ürünle çakışırsa DingPOS size hangi ürüne ait olduğunu gösterir."
      },
      {
        "type": "p",
        "text": "Kasada arama alanı hem ürün adlarıyla hem de barkodun baş kısmıyla eşleşir; bir barkod yazdığınızda ürün anında karşınıza gelir. Donanım barkod okuyucu planları için “Fiziksel barkod okuyucular desteklenecek mi?” sorusuna bakın."
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
    "question": "Ürünlerin görünme sırasını nasıl değiştirebilirim?",
    "keywords": [
      "sıralama",
      "ürün sırası",
      "sırayı değiştir",
      "sürükle",
      "en başa taşı",
      "başa sabitle"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ürünler sekmesinde Sıralamayı Düzenle’ye dokunun ve ürün kartlarını istediğiniz yere sürükleyin. Kasa ile ürün yönetimi bu tek sırayı paylaşır; bir kez düzenlemeniz ikisini de günceller."
      },
      {
        "type": "list",
        "items": [
          "Ürün sayısı çoksa her kartın menüsünde En Başa Taşı, En Sona Taşı ve Sıraya Taşı seçenekleri bulunur; her kart mevcut sırasını da gösterir.",
          "Yalnızca bir kategorinin içini sıralamak için önce o kategoriye göre filtreleyin; diğer kategorilerdeki ürünler yerinde kalır.",
          "Yeni ürünler en başa eklenir; bir ürünün bilgilerini düzenlemek sırasını hiçbir zaman değiştirmez."
        ]
      },
      {
        "type": "p",
        "text": "Bir süreliğine ada, fiyata veya oluşturulma / güncellenme zamanına göre sıralamak için Sıralama Ölçütü menüsünü kullanın. Kendi sıralamanız korunur; Elle Sıralama’ya geri döndüğünüzde yeniden karşınıza gelir."
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
    "question": "Stok takibi nasıl yapılır?",
    "keywords": [
      "stok takibi",
      "stok",
      "stok sayımı",
      "stok miktarı",
      "azalan stok",
      "kritik stok"
    ],
    "content": [
      {
        "type": "p",
        "text": "Stok takibi ürün bazında açılıp kapatılan bir ayardır; ürün düzenleme sayfasında açın ve mevcut miktarı girin. Bir ürünün her varyantı kendi stoğunu ayrı takip eder."
      },
      {
        "type": "p",
        "text": "Açıldıktan sonra satışlar ve ön siparişler stoğu otomatik düşer; geçersiz kılma, ürün iadesi ve iptal edilen ön siparişler stoğu geri ekler; satın alma siparişi için stok girişi yapmak stoğu artırır; ayrıca istediğiniz zaman elle düzeltme yapabilirsiniz. Her stok hareketi eksiksiz bir defterde kayıt altına alınır. Azalan stok renkli bir uyarıyla vurgulanır."
      }
    ],
    "related": [
      "negative-inventory",
      "purchase-orders"
    ]
  },
  {
    "slug": "negative-inventory",
    "category": "products",
    "question": "Stok neden eksiye düşebiliyor?",
    "keywords": [
      "eksi stok",
      "negatif stok",
      "stok eksiye düştü",
      "stok bitti",
      "satışı engelleme",
      "stok düzeltme",
      "stokta olmayan ürün"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bu bilerek böyle tasarlandı: yetersiz stok yüzünden ödeme hiçbir zaman engellenmez. Canlı bir kasanın ilk kuralı müşterinin asla beklememesidir; kağıt üzerindeki yanlış bir sayı sonradan düzeltilebilir, ama yarım kalan bir satış sonsuza dek kaybolur."
      },
      {
        "type": "p",
        "text": "Eksi stok genellikle bir mal alımının kaydedilmediği ya da ön siparişi verilmiş bir ürünün henüz gelmediği anlamına gelir (ön siparişler verildiği anda stoktan düşer). Mal alımlarını satın alma siparişi için stok girişi yaparak kaydedin, sayı kendiliğinden düzelir; sayım farklarını ise stok hareketi defterinde saklanan bir elle düzeltmeyle giderin."
      },
      {
        "type": "note",
        "text": "Kasa, stoğu 0 olan bir ürünü bulamıyorsa Ayarlar → Cihaz Tercihleri bölümünde Stokta olmayan ürünleri gizle seçeneğinin açık olup olmadığına bakın: açıkken bu iPad stokta olmayan ürünleri sepete ekleyemez."
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
    "question": "Mal alımlarını ve tedarikçileri nasıl kaydederim?",
    "keywords": [
      "satın alma siparişi",
      "satın alma",
      "tedarikçi",
      "stok girişi",
      "mal alımı",
      "açık fatura"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kenar çubuğundaki Satın Alma bölümü tedarikçileri ve satın alma siparişlerini yönetir. Bir tedarikçi kaydında ad, yetkili kişi, telefon, adres ve varsayılan ödeme şekli (peşin veya aylık) saklanır."
      },
      {
        "type": "steps",
        "items": [
          "Yeni Alım’a dokunun, tedarikçiyi seçin; ürünleri, miktarları ve birim maliyetleri ekleyin (birim maliyet her ürünün mevcut maliyetiyle önceden dolar). Nakliye ücreti de eklenebilir. Tedarikçi henüz tanımlı değilse tedarikçi listesinin sol üstündeki Tedarikçi Ekle’ye dokunun; yeni tedarikçi doğrudan satın alma siparişine döner.",
          "Taslak stoğa da ödeme yükümlülüklerine de dokunmaz; dilediğiniz gibi düzenleyin veya silin.",
          "Mallar geldiğinde Stok girişi yap’a dokunun: takip edilen stok artar, satın alma siparişi numarasını alır ve kilitlenir. Stok girişi varsayılan olarak her ürünün maliyetini de bu birim maliyetle günceller; maliyetlerin değişmemesi için satın alma siparişindeki Ürün maliyetini eşitle ayarını kapatın."
        ]
      },
      {
        "type": "p",
        "text": "Sonrasını ödeme şekli belirler: peşin siparişler ödenmiş olarak işaretlenir, aylık siparişler ise Açık Fatura altında ödenmemiş olarak kalır; orada tedarikçi bazında kapatabilirsiniz: tek bir sipariş, bu ay veya hepsi."
      },
      {
        "type": "note",
        "text": "Satın alma için Standard veya daha üst bir plan gerekir. Ödenmemiş, stok girişi yapılmış siparişi olan bir tedarikçi silinemez."
      }
    ],
    "related": [
      "inventory-tracking",
      "negative-inventory",
      "roadmap-monthly-settlement"
    ]
  },
  {
    "slug": "revenue-vs-cash",
    "category": "reports",
    "since": "2.0",
    "question": "Satış geliri ile alınan tutar arasındaki fark nedir?",
    "keywords": [
      "satış geliri",
      "alınan tutar",
      "gelir",
      "kasa mutabakatı",
      "kapora",
      "veresiye"
    ],
    "content": [
      {
        "type": "p",
        "text": "Satış geliri, ürünün teslim edildiği güne yazılır; alınan tutar ise paranın geldiği güne. Kasada ödenen bir siparişte ikisi de aynı gün gerçekleşir ve rakamlar aynı olur. Şu durumlarda birbirinden ayrılırlar:"
      },
      {
        "type": "list",
        "items": [
          "Veresiye satış: ürün bugün çıkar ve bugünün satış gelirine yazılır; para, borç kapatıldığı gün alınan tutara yazılır.",
          "Ön sipariş: kapora ödendiği gün alınan tutara yazılır; satış geliri ise teslim alma tarihinde tamamı birden kaydedilir.",
          "Alıkonulan kapora: müşteri ön siparişi iptal eder ve kaporayı siz alıkoyarsanız, kapora ödendiği gün zaten alınan tutara yazılmıştır. İstatistik ekranında ayrıca alıkonulan kapora olarak gösterilir ve hiçbir zaman satış geliri sayılmaz.",
          "Daha önceki bir siparişi geçersiz kılma: iade edilen para, geçersiz kılma gününün alınan tutarına yazılır; bu yüzden o günün alınan tutarı eksi olabilir, Geçersiz kılındı ise siparişi satış tarihinde sayar. Alınan tutar ve Geçersiz kılındı kutucuklarındaki ⓘ da aynısını açıklar."
        ]
      },
      {
        "type": "p",
        "text": "Mutabakat için alınan tutarı kasadaki parayla ve kart terminalinizle karşılaştırın; bir dönemde gerçekte ne kadar sattığınızı görmek için satış gelirine bakın. Ürün iadeleri, satış gelirini iadenin yapıldığı gün düşürür."
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
    "question": "Raporlarda hangi tarih aralıkları görüntülenebilir?",
    "keywords": [
      "raporlar",
      "dönem",
      "bu hafta",
      "bu ay",
      "bu yıl",
      "özel tarih aralığı",
      "tarih",
      "en çok satan ürünler"
    ],
    "content": [
      {
        "type": "p",
        "text": "İstatistik ekranının üstünden Bugün, Dün, Bu Hafta, Bu Ay, Bu Yıl veya Tüm dönem seçeneklerinden birini seçin ya da Özel ile başlangıç ve bitiş tarihini belirleyin. Bu Hafta, cihazdaki haftanın ilk gününe göre hesaplanır; Bu Ay ve Bu Yıl ise ayın 1'inde ve 1 Ocak'ta başlar. Her seçenek kapsadığı tarihleri gösterir; Tüm dönem, mağazanızın ilk işleminden başlar."
      },
      {
        "type": "p",
        "text": "Tek bir gün seçildiğinde eğilim grafiği saatlik sütun grafiğine dönüşür; daha uzun dönemlerde süreye göre her sütun bir gün, hafta, ay veya yıl gösterir."
      },
      {
        "type": "p",
        "text": "Ürün Sıralaması kartı ilk 5 ürünü listeler. Dönemde satılan tüm ürünleri, iadeler düşüldükten sonra adede göre sıralı görmek için karta veya Tümünü Gör'e dokunun."
      },
      {
        "type": "p",
        "text": "Pro planda, dönem çubuğunun sağındaki Satış karşılaştırması, seçili dönemi bir önceki dönemle ya da geçen yılın aynı dönemiyle karşılaştırır — bkz. “Pro gelişmiş raporlar neleri gösterir?”"
      },
      {
        "type": "note",
        "text": "Bu takvim dönemleri v2.4 ile geldi; önceki sürümlerde kayan aralıklar vardı (Bugün / 7 Gün / 30 Gün / Tüm dönem). Hâlâ bunları görüyorsanız DingPOS'u App Store'dan güncelleyin."
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
    "question": "Pro gelişmiş raporlar neleri gösterir?",
    "keywords": [
      "gelişmiş raporlar",
      "pro",
      "satış karşılaştırması",
      "geçen yıl",
      "ısı haritası",
      "yoğun saatler",
      "yavaş satan ürünler",
      "stok değeri",
      "tekrar alışveriş oranı",
      "puan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gelişmiş raporlar ayrı bir ekran değildir — doğrudan İstatistik ekranında yer alır ve üstten seçtiğiniz döneme göre değişir:"
      },
      {
        "type": "list",
        "items": [
          "Satış karşılaştırması: dönem çubuğunun sağında, seçili dönemi geçen yılın aynı dönemiyle ya da bir önceki dönemle karşılaştırın (tek gün geçen haftanın aynı günüyle, bu hafta geçen haftayla, bu ay geçen ayla, bu yıl geçen yılla, özel aralık ise kendisinden hemen önceki aynı uzunluktaki günlerle). Alınan tutar kutusu farkı ve büyüme oranını gösterir; satış geliri grafiğine karşılaştırma dönemi için daha açık renkli bir çizgi eklenir. Dönem henüz sürüyorsa karşılaştırma dönemi de aynı ana kadar kesilir.",
          "Haftanın günü × saat: Zaman içinde satışlar başlığını Haftanın günü × saat olarak değiştirin; yedi gün ve 24 saatlik bir ısı haritası görürsünüz — bir hücre ne kadar koyuysa o saatte o kadar çok satış yapmışsınızdır. Satış geliri ile sipariş sayısı arasında geçiş yapabilirsiniz; karşılaştırma açıkken hangi saatlerin arttığını, hangilerinin azaldığını görürsünüz.",
          "Yavaş Satan Ürünler: sıralama kartının başlığını Yavaş Satan Ürünler olarak değiştirin; ürünler en az satandan en çok satana doğru, güncel stokları ve her birinin son satış tarihiyle listelenir. Hiç satılmayan ürünler Hiç satılmadı olarak işaretlenir. Varsayılan olarak yalnızca stokta olan ürünler gösterilir.",
          "Tekrar alışveriş oranı: müşteri kutusunun son satırı, dönemde alışveriş yapan ve toplamda iki veya daha fazla kez alışveriş yapmış üyelerin oranıdır.",
          "Şu anda: stok değeri (güncel stok × güncel maliyet), seçili dönemdeki tüm stok hareketleri ve müşterilerin elinde duran, henüz kullanılmamış puanlar ile bunlarla yapılabilecek en yüksek indirim. Bunlar güncel bakiyelerdir; dönem seçimi bunları değiştirmez."
        ]
      },
      {
        "type": "p",
        "text": "Pro olmadan bu beş noktanın her birinde, yükseltme açıklamasını açan küçük bir kilit görünür; İstatistik ekranındaki diğer her şey eskisi gibi çalışır. Raporlar mağazanızın zaten tuttuğu verileri okur; bu yüzden Pro sona erdiğinde yalnızca raporlar gizlenir — hiçbir veri kaybolmaz."
      },
      {
        "type": "note",
        "text": "Personel gelişmiş raporları Pano yetkisi altında görür; stok değeri tutarları için ayrıca Maliyet ve kâr yetkisi gerekir."
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
    "question": "Maliyet girmediysem kâr nasıl raporlanır?",
    "keywords": [
      "maliyet",
      "kâr",
      "kâr marjı",
      "brüt marj",
      "raporlar",
      "kâr takip edilmiyor",
      "eksik maliyet",
      "kâr hesaplanabiliyor"
    ],
    "content": [
      {
        "type": "p",
        "text": "Maliyet isteğe bağlı bir alandır. Maliyeti olmayan ürünler kâr hesabının dışında kalır; satış gelirleri ise yine tam olarak sayılır. İstatistik'teki Kâr hesaplanabiliyor kartı, dönemde satılan ürünlerden kaçının maliyetinin olmadığını gösterir; maliyeti 0 olan ürün maliyetli sayılır, bu yüzden listelenmez."
      },
      {
        "type": "p",
        "text": "Karta veya Ürünleri gör düğmesine dokunarak Maliyeti Olmayan Ürünler listesini açın; liste, kâr hesabının dışında kalan satış gelirine göre sıralanır. Bir satıra dokunup ürünü açın, Düzenle’den maliyetini ekleyin; geri döndüğünüzde satır Maliyet eklendi olarak işaretlenir. Varyantlı bir ürün, varyantlardan biri ya da ürünün kendisi maliyet içeriyorsa maliyetli sayılır."
      },
      {
        "type": "p",
        "text": "Kâr, tüm indirimlerden (kalem ve sepet indirimleri, kampanyalar, puan kullanımı) sonraki ve vergiden önceki satış gelirinden maliyetin çıkarılmasıyla bulunur — alanın adı bu yüzden Vergi hariç maliyet (isteğe bağlı): vergiden önce ödediğiniz tutarı girin. Marj, kârın maliyeti olan ürünlerin vergi öncesi satış gelirine bölünmesidir; yani maliyeti olmayan ürünler onu aşağı çekmez. Ürün iadesi, iade günü, o ürünlerin getirdiği kârı geri alır."
      },
      {
        "type": "note",
        "text": "Eklediğiniz maliyet yalnızca sonraki satışları etkiler; yapılmış satışlar yeniden hesaplanmaz. Bu hesaplama v3.1 ile geldi: önceki sürümler yalnızca elle girilen kalem indirimlerini düşüyor ve KDV dahil tutarı kâr sayıyordu; bu yüzden güncellemeden sonra indirimli veya KDV dahil dönemlerde kâr daha düşük görünür. Bu bir düzeltmedir, veri kaybı değildir."
      }
    ],
    "related": [
      "report-periods",
      "product-variants",
      "purchase-orders"
    ]
  },
  {
    "slug": "create-promotion",
    "category": "promotion",
    "question": "Kampanya nasıl oluşturulur?",
    "keywords": [
      "kampanya",
      "fırsat",
      "1 alana 1 bedava",
      "alışveriş tutarı",
      "Happy Hour",
      "kupon",
      "indirim kampanyası"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ayarlar → Kampanyalar bölümüne gidin. Desteklenen türler şunlardır:"
      },
      {
        "type": "list",
        "items": [
          "Harcama eşiği: X tutarında alışverişe Y indirim veya %Y indirim.",
          "Bir alana bir bedava ve N. ürün fırsatları.",
          "Puan çarpanları.",
          "Yalnızca belirli üye seviyelerine veya doğum ayına özel teklifler.",
          "A al, B hediye; ücretli ek ürünler ve sabit fiyatlı grup fiyatları."
        ]
      },
      {
        "type": "p",
        "text": "Her kampanya zamanlanabilir (Happy Hour aralıkları, haftanın belirli günleri ve gece yarısını aşan saatler), belirli ürünlerle sınırlandırılabilir; öncelik, birleştirme kuralları ve kullanım sınırlarıyla yönetilebilir. Koşulları sağlayan kampanyalar ödeme sırasında otomatik uygulanır; indirim kodu gerekmez."
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
    "question": "Kampanya uygulanmıyor, nelere bakmalıyım?",
    "keywords": [
      "kampanya",
      "çalışmıyor",
      "uygulanmıyor",
      "sorun giderme",
      "kampanya neden uygulanmaz"
    ],
    "content": [
      {
        "type": "p",
        "text": "En sık görülen nedenleri sırayla kontrol edin:"
      },
      {
        "type": "steps",
        "items": [
          "Zamanlama: bugün kampanyanın geçerli olduğu tarihlerde mi? Happy Hour aralığı günü veya saati kısıtlıyor mu?",
          "Kapsam: sepetteki ürünler kampanyanın ürün veya kategori kapsamında mı? Ürün Kampanyalardan hariç tut olarak ayarlı mı (serbest fiyatlı ürünler varsayılan olarak öyledir)? Harcama eşiğine ulaşıldı mı?",
          "Hedef kitle: kampanya belirli bir üye seviyesi veya doğum ayıyla sınırlı mı? O üye ödeme sırasında seçildi mi?",
          "Kullanım sınırları: toplam kullanım sınırına ya da bu müşterinin sınırına ulaşıldı mı? Doğum ayı kampanyasında müşteri başına sınır takvim yılına göre sayılır.",
          "Birleştirme: “Bu kampanya uygulanınca sonrakileri durdur” seçeneği açık, önceliği daha yüksek bir kampanya bunu engelliyor mu?"
        ]
      },
      {
        "type": "p",
        "text": "Her şey doğru görünüyor ama kampanya yine de uygulanmıyorsa, kampanyanın ayarlarının ekran görüntüsünü bize e-postayla gönderin; birlikte inceleyelim."
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
    "question": "Sadakat puanları nasıl çalışır?",
    "keywords": [
      "puan",
      "sadakat",
      "sadakat programı",
      "ödül",
      "puan kullanma",
      "hoş geldin puanı"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ayarlar → Sadakat Programı bölümüne gidin ve iki kural tanımlayın: harcanan her X tutar için Y puan kazanma ve N puan karşılığında M indirim kullanma (isteğe bağlı sipariş başına kullanım sınırıyla). Yeni üyelere otomatik olarak hoş geldin puanı da verebilirsiniz."
      },
      {
        "type": "p",
        "text": "Ödeme sırasında üyeyi seçin; puanlar otomatik birikir. Puan kullanmak için kullanılacak puanı girin. Bir siparişi geçersiz kılmak, o siparişten kazanılan puanları geri alır ve kullanılan puanları iade eder."
      }
    ],
    "related": [
      "member-tiers",
      "void-order"
    ]
  },
  {
    "slug": "member-tiers",
    "category": "promotion",
    "question": "Üye seviyeleri ne işe yarar?",
    "keywords": [
      "seviye",
      "üye seviyesi",
      "vip",
      "altın",
      "seviye atlama",
      "üyelik düzeyi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Üye seviyeleri (ör. Standart, Gümüş, Altın) iki işe yarar: kampanyalar bu seviyelere özel hazırlanabilir (ör. yalnızca Altın üyelere %10 indirim) ve ödeme sırasında müşterinin durumunu tek bakışta görmenizi sağlar."
      },
      {
        "type": "p",
        "text": "Seviyeler, belirlediğiniz kurallara göre (ör. toplam harcama) otomatik yükselebilir ya da elle atanabilir. Seviye yükselmesine yol açan bir sipariş geçersiz kılınırsa seviye otomatik olarak geri alınır."
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
    "question": "Verilerimi nasıl yedeklerim?",
    "keywords": [
      "yedekleme",
      "veri yedekleme",
      "icloud",
      "google drive",
      "dropbox",
      "bulut",
      "bulut yedekleme"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ayarlar → Bulut Yedekleme bölümüne gidin, iCloud, Google Drive veya Dropbox'tan birini seçip yetkilendirin. Bundan sonra istediğiniz zaman elle yedek alabilirsiniz. iCloud için bu iPad'de iCloud oturumu açık, iCloud Drive etkin ve DingPOS'un kullanmasına izin verilmiş olmalıdır."
      },
      {
        "type": "p",
        "text": "Yedekler kendi bulut hesabınıza gider. Her bulut yalnızca en son yedeği tutar — bir veri kopyası ve bir ürün fotoğrafları dosyası — ve her yedek bir öncekinin üzerine yazar."
      },
      {
        "type": "note",
        "text": "Yeni yedek eskisinin yerine geçtiği için, verilerinizin zaten bozulduğundan şüpheleniyorsanız (örneğin bir grup ürün yanlışlıkla silindi), henüz yedek almayın — bize e-posta gönderin, sonraki adımı birlikte belirleyelim."
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
    "question": "iCloud yedekleme “Bağlı değil” diyor, ne yapmalıyım?",
    "keywords": [
      "icloud",
      "bağlı değil",
      "icloud drive",
      "yedekleme başarısız",
      "bağlanamıyor"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS, iCloud'u yalnızca gerçekten kullanabildiğinde bağlı gösterir. “Bağlı değil” yazıyorsa iPad'in Ayarlar uygulamasında üç şeyi kontrol edin:"
      },
      {
        "type": "steps",
        "items": [
          "Apple Hesabınızla oturum açtınız.",
          "iCloud Drive açık.",
          "DingPOS'un iCloud Drive'ı kullanmasına izin verilmiş."
        ]
      },
      {
        "type": "p",
        "text": "Üçü de açıldıktan sonra DingPOS'ta Bulut Yedekleme ekranına dönün; iCloud bağlı olarak görünür. Yedekler, iCloud Drive içindeki DingPOS'a ait klasörde saklanır."
      },
      {
        "type": "note",
        "text": "v3.0 öncesi sürümlerde iCloud yedekleme çalışmıyordu ve her seferinde “Backup.SyncError error 0” hatasıyla başarısız oluyordu. Önce DingPOS'u App Store'dan güncelleyin."
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
    "question": "Verilerimi yeni iPad'e nasıl taşırım?",
    "keywords": [
      "taşıma",
      "yeni ipad",
      "geri yükleme",
      "veri aktarma",
      "ipad değiştirme"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Eski iPad: Ayarlar → Bulut Yedekleme bölümüne gidip elle yedek alın. Yedekleme zamanının güncellendiğini doğrulayın.",
          "Yeni iPad: DingPOS'u yükleyin ve kurulum sihirbazını tamamlayın.",
          "Yeni iPad: Ayarlar → Bulut Yedekleme bölümüne gidin, aynı bulut hesabını bağlayın ve geri yükleyin."
        ]
      },
      {
        "type": "p",
        "text": "Geri Yükle'ye dokunduğunuzda önce bir önizleme açılır: bu iPad'in ve bulut kopyasının ürün, sipariş ve müşteri sayıları yan yana gösterilir; ayrıca geri yüklemenin kaldıracağı tüm siparişler listelenir. Siz onaylayana kadar bu iPad'de hiçbir şey değişmez. DingPOS'un daha yeni bir sürümüyle oluşturulmuş bulut kopyası, önce uygulamayı güncellemenizi ister. Ürün fotoğrafları da geri yüklenir."
      },
      {
        "type": "note",
        "text": "Geri yükleme, bu iPad'deki tüm verilerin yerine yedeği koyar — bu yedekten sonra bu iPad'de oluşturulan siparişler kaybolur. Doğru bulut hesabına bağlı olduğunuzdan emin olun; yanlış olanı geri yüklerseniz Geri Yüklemeyi Geri Al'ı kullanın."
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
    "question": "Uygulamayı silersem verilerim kalır mı?",
    "keywords": [
      "silme",
      "kaldırma",
      "uygulamayı silmek",
      "veri kaybı",
      "uygulamayı kaldır"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hayır. DingPOS her şeyi cihazınızda yerel olarak saklar — bulut yedeklemeyi açmadıysanız uygulamayı silmek tüm ürünleri, siparişleri, üyeleri ve ayarları kalıcı olarak siler."
      },
      {
        "type": "note",
        "text": "Uygulamayı silmeden önce mutlaka elle yedek alın ve başarılı olduğunu doğrulayın. Yeniden yükledikten sonra buluttan geri yükleyin."
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
    "question": "Uygulama “Mağaza Verileriniz Açılamadı” ekranını gösteriyor, ne yapmalıyım?",
    "keywords": [
      "açılamadı",
      "açılmıyor",
      "çöküyor",
      "açılışta çökme",
      "veritabanı",
      "mağaza verileri"
    ],
    "content": [
      {
        "type": "p",
        "text": "Uygulamayı silmeyin. Bu ekran, DingPOS'un mağaza verilerinizi okuyamadığı anlamına gelir; ancak veriler hâlâ bu iPad'dedir — uygulamayı silerseniz veriler de uygulamayla birlikte silinir."
      },
      {
        "type": "p",
        "text": "Önce Tekrar Dene'ye dokunun; işe yararsa uygulama her zamanki gibi açılır. Sorun sürerse Destekle İletişime Geç'e dokunup bize bildirin, verilerinizi kurtarmanıza yardım edelim. Bu ekran hiçbir dosyayı taşımaz veya silmez."
      },
      {
        "type": "note",
        "text": "En yaygın neden, uygulamanın geri yükleme sırasında kapatılmasıdır. v3.0 öncesinde bu durum uygulamanın her açılışta çökmesine yol açıyordu; v3.0'dan beri uygulama bunun yerine bu ekranda duruyor."
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
    "question": "İki iPad'i birlikte kullanabilir miyim?",
    "keywords": [
      "iki ipad",
      "çoklu cihaz",
      "eşitleme",
      "senkronizasyon",
      "paylaşma",
      "ikinci kasa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Her iPad'in verisi şu anda bağımsızdır — tek bir veri setinin iki cihaz arasında gerçek zamanlı paylaşılması henüz desteklenmiyor."
      },
      {
        "type": "p",
        "text": "Verileri bir iPad'den diğerine bulut yedekleme ile (yedekle → geri yükle) kopyalayabilirsiniz; cihaz değiştirirken veya ikinci bir iPad'i hazırlarken işe yarar. Ancak her cihazda ayrı ayrı girilen siparişler otomatik olarak birleşmez. Çoklu cihaz eşitleme yol haritamızda."
      }
    ],
    "related": [
      "transfer-new-ipad",
      "supported-devices"
    ]
  },
  {
    "slug": "import-csv",
    "category": "backup",
    "since": "2.3",
    "question": "Başka bir POS'tan veya Excel tablosundan ürün ve satış aktarabilir miyim?",
    "keywords": [
      "içe aktarma",
      "csv",
      "excel",
      "tablo",
      "başka pos'tan geçiş",
      "toplu ürün ekleme",
      "satış geçmişi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Ayarlar → Veri İçe Aktarma bölümüne gidin, ürün mü satış mı aktaracağınızı seçin ve bir CSV dosyası seçin (Excel ve Google Sheets CSV olarak kaydedebilir)."
      },
      {
        "type": "steps",
        "items": [
          "Dosya tablo olarak açılır. İngilizce ve Çince (Geleneksel veya Basitleştirilmiş) yaygın sütun adları otomatik eşleşir; eşlemeyi değiştirmek için herhangi bir sütun başlığına dokunun.",
          "Değeri orada düzeltmek için herhangi bir hücreye dokunun — dosyayı düzenleyip baştan başlamanız gerekmez.",
          "Doğrulamak için Onayla'ya dokunun. Sorunlu satırlar nedenleriyle birlikte kırmızıyla işaretlenir; satış aktarımında hatalı siparişler atlanabilir.",
          "Karar gerektiren her şeyi çözün (yinelenen ürün adları, birden çok müşteriyle eşleşen satır), özeti inceleyin, ardından İçe aktarmayı başlat'a dokunun."
        ]
      },
      {
        "type": "list",
        "items": [
          "Aktarılan satışlar sipariş tarihine göre yerleştirilir ve mağazanızın para birimi ve vergi moduyla yeniden hesaplanır. Stoğa dokunmaz ve hoş geldin puanı vermez.",
          "Müşteriler telefon veya e-postayla mevcut müşterilerle eşleştirilir; eşleşmeyenler yeni oluşturulur.",
          "İçe aktarılan siparişlerde İçe aktarma tarihi ve kaynak sipariş numarası görünür; bu siparişler geçersiz kılınamaz veya iade edilemez.",
          "Hatalı satırlar, nedenleriyle birlikte CSV olarak dışa aktarılabilir — düzeltip yeniden aktarın. Yinelenen satırlar otomatik olarak atlanır."
        ]
      },
      {
        "type": "note",
        "text": "Veri içe aktarma beta aşamasındadır. Her dosya en fazla 50.000 satır veya 20 MB olabilir. Aktarmadan önce bulut yedeği alın; bir şey aktarılmazsa veya sonuç yanlış görünürse içe aktarma ekranındaki Sorun bildir ile bize bildirin."
      }
    ],
    "related": [
      "backup-data",
      "transfer-new-ipad",
      "product-variants"
    ]
  },
  {
    "slug": "undo-restore",
    "category": "backup",
    "since": "3.0",
    "question": "Yanlış yedeği geri yükledim, geri alabilir miyim?",
    "keywords": [
      "geri yüklemeyi geri al",
      "geri yükleme",
      "yanlış yedek",
      "geri yükleme kayıtları",
      "kaybolan veri",
      "eski hâle getirme"
    ],
    "content": [
      {
        "type": "p",
        "text": "Evet. Her bulut geri yüklemesi, yerine geçtiği veriyi geri yüklemeden önceki kopya olarak saklar. Ayarlar → Bulut Yedekleme ekranında bir kart, son geri yüklemenin ne zaman ve nereden yapıldığını gösterir. Geri Yüklemeyi Geri Al'a dokunun, önizlemeyi inceleyin ve onaylayın — veriler geri yüklemeden önceki hâline döner ve uygulama yeniden yüklenir."
      },
      {
        "type": "list",
        "items": [
          "Geri Yüklemeyi Geri Al da bir geri yüklemedir ve yerine geçtiği verinin bir kopyasını daha saklar; yeniden dokunursanız eski duruma dönersiniz.",
          "Yalnızca en son kopya saklanır; sonraki geri yükleme onun yerine geçer.",
          "Yalnızca veriler geri gelir: bulut kopyasından sonra eklenen ürünlerin görseli eksik görünür."
        ]
      },
      {
        "type": "p",
        "text": "Kimin, ne zaman ve hangi bulut kopyasından geri yüklediğini görmek için aynı ekrandaki Geri yükleme kayıtlarını görüntüle'ye dokunun: her geri yüklemenin zamanı, işlemi yapan kişi, kaynağı, öncesi ve sonrası ürün / sipariş / müşteri sayıları ve kaldırdığı tüm siparişler listelenir. Kayıtlar bu iPad'de durur ve geri yükleme onların yerine geçmez."
      },
      {
        "type": "note",
        "text": "Geri yükleme önizlemesi ve Geri Yüklemeyi Geri Al her planda çalışır; geri yükleme kayıtlarını görüntülemek Pro özelliğidir. Kayıtlar Pro olmadan da yazılır (yalnızca işlemi yapan kişi olmadan), bu yüzden sonradan Pro'ya abone olursanız hepsini görürsünüz."
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
    "question": "Kasaya personel nasıl eklenir, kasadaki kişi nasıl değiştirilir?",
    "keywords": [
      "personel",
      "çalışan",
      "yönetici",
      "pin",
      "kasiyer",
      "vardiya",
      "kullanıcı değiştirme",
      "personel ekleme"
    ],
    "content": [
      {
        "type": "p",
        "text": "Kenar çubuğunda Personel'e dokunun. İlk seferde sahibi tanımlayın: bir ad ve 4 haneli bir PIN. Personel eklemek ve yetkileri değiştirmek için bu PIN gerekir; bu yüzden unutmayın, sıfırlanamaz."
      },
      {
        "type": "steps",
        "items": [
          "Personel sayfasında Personel ekle'ye dokunun, bir ad girin, rol seçin (Yönetici veya Personel) ve 4 haneli bir PIN belirleyin.",
          "İşlemi yapan kişi kenar çubuğunun altında ve ödeme ekranının sağ üstünde görünür. Vardiya değişiminde buna dokunun, adınızı seçin ve PIN'inizi girin.",
          "Bundan sonra her siparişte, ödemede ve stok veya puan hareketinde işlemi kimin yaptığı kaydedilir; bu bilgi sipariş listesinde ve ayrıntısında görünür. Geçersiz kılınan siparişlerde işlemi geçersiz kılan kişi de kaydedilir."
        ]
      },
      {
        "type": "p",
        "text": "Bir personel işten ayrıldığında “Bu personeli devre dışı bırak” seçeneğini kullanın: geçmişi olduğu gibi kalır ve dilerseniz daha sonra yeniden etkinleştirebilirsiniz. Adı değiştirmek eski siparişleri etkilemez; onlarda o günkü ad kalır."
      },
      {
        "type": "note",
        "text": "Personel, Pro özelliğidir (deneme süresince de kullanılabilir). Pro sona ererse personel verileri ve her siparişi yapan kişi korunur, yeni siparişler sahip adına kaydedilir; Pro'ya yeniden abone olunca her şey geri gelir."
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
    "question": "Sahip PIN'ini unutursam ne olur?",
    "keywords": [
      "pin",
      "unuttum",
      "şifre",
      "sıfırlama",
      "sahip",
      "kurtarma",
      "kilitli kaldım"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sahip PIN'i sıfırlanamaz ve destek ekibimiz de kilidini açamaz. PIN, mağaza verilerinizle birlikte saklanır; bu yüzden uygulamayı silip yeniden yükleyip buluttan geri yüklemek aynı PIN'i geri getirir."
      },
      {
        "type": "p",
        "text": "Sahip oluşturulurken ve sahip PIN'i her değiştirildiğinde “Bu PIN'i unutmayın. Unutursanız sıfırlanamaz.” uyarısı gösterilir. PIN'i yalnızca sizin ulaşabileceğiniz bir yerde saklayın."
      },
      {
        "type": "p",
        "text": "Sahip PIN'i olmadan, onu gerektiren işlemlere ulaşılamaz: personel eklemek veya düzenlemek, rol yetkilerini değiştirmek ve etkinlik günlüğünü görüntülemek. Personel kendi PIN'leriyle ödeme almaya ve günlük işlere devam edebilir."
      },
      {
        "type": "note",
        "text": "Bir personel PIN'ini unutursa sorun değil: sahip bunu Personel bölümünden sıfırlayabilir."
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
    "question": "Personel yetkileri ve yönetici onayı nasıl çalışır?",
    "keywords": [
      "yetki",
      "onay",
      "yönetici",
      "indirim üst sınırı",
      "personel",
      "maliyet",
      "rol",
      "yetki ayarları"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bir yetkinin iki değeri vardır: İzinli veya Onay gerekir; hiçbir şey tümüyle yasak değildir. Personel onay gerektiren bir işleme geldiğinde, o işleme izni olan bir meslektaşı adını seçip PIN'ini girerek işlemin geçmesini sağlar."
      },
      {
        "type": "list",
        "items": [
          "İşlemler (elle stok düzeltme, ürün yönetimi, indirim üst sınırının üzerinde ödeme alma): bir onay yalnızca o tek işlemi kapsar.",
          "Görünümler (maliyet ve kâr, İstatistik, Ayarlar, yedekleme ve geri yükleme): onay, işlemi yapan kişi değişene veya uygulama arka plana geçene kadar kilidi açık tutar.",
          "İndirim üst sınırı elle yapılan indirimlere uygulanır ve ödemede bir kez kontrol edilir; otomatik kampanyalar ve puan kullanımı bu sınıra sayılmaz."
        ]
      },
      {
        "type": "p",
        "text": "Varsayılan ayarlar: Yöneticiler yedekleme ve geri yükleme dışında her şeye izinlidir ve indirim üst sınırı yoktur; Personel her şey için onay ister ve üst sınır %10'dur. Sahip her zaman izinlidir ve düzenlenemez. Değiştirmek için Personel → Rol yetkileri'ne gidin, Düzenle'ye dokunun ve bir kez kaydedin; değişiklik herkes için hemen geçerli olur."
      },
      {
        "type": "note",
        "text": "Geçersiz kılma, ürün iadesi, veresiye satış ve satın alma için bilerek yetki yoktur; bunlar yalnızca işlemi kimin yaptığını kaydeder. Bunları sonradan incelemek için etkinlik günlüğünü kullanın."
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
    "question": "Bir siparişi kimin geçersiz kıldığını, stoku kimin düzelttiğini veya fiyatı kimin değiştirdiğini nasıl görürüm?",
    "keywords": [
      "etkinlik günlüğü",
      "denetim",
      "kim değiştirdi",
      "geçersiz kılma",
      "fiyat değişikliği",
      "stok düzeltme",
      "silinen ürün",
      "onaylar",
      "günlük",
      "işlem geçmişi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Etkinlik günlüğünü kullanın. Personel sayfasında sağ üstteki Etkinlik günlüğü'ne dokunun ve sahip PIN'ini girin; mağazanın hassas işlemleri en yeniden eskiye listelenir: geçersiz kılmalar, ürün iadeleri, elle stok düzeltmeleri, onaylar, personel ve yetki değişiklikleri, sahip PIN değişiklikleri, ürün fiyatı ve maliyeti değişiklikleri ile ürün silmeler. Sıradan ödemeler listelenmez."
      },
      {
        "type": "list",
        "items": [
          "Her kayıtta neyin etkilendiği, kimin ne zaman ne yaptığı ve sonucu görünür; örneğin “M fiyatı $390 → $350”.",
          "Personele (devre dışı bırakılanlar dahil), işlem türüne ve Bugün / Bu Hafta / Bu Ay'a göre süzün.",
          "Bir siparişe, ürüne veya müşteriye işaret eden kayda dokunarak ayrıntısını açın.",
          "Sipariş ayrıntısı, ürün ayrıntısı ve her personelin sayfasında yalnızca kendileriyle ilgili kayıtları listeleyen ayrı bir giriş bulunur.",
          "Silinen ürünler günlükte o günkü adı ve fiyatıyla görünmeye devam eder."
        ]
      },
      {
        "type": "note",
        "text": "Kayıtlar tüm planlarda tutulur; yalnızca görüntüleme Pro özelliğidir, bu yüzden Pro aboneliğinizin etkin olmadığı dönemde tutulan kayıtlar yeniden abone olunca görünür. Günlük, bulut yedeklerinizle birlikte taşınır."
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
    "question": "Ücretsiz deneme nasıl işliyor?",
    "keywords": [
      "deneme",
      "ücretsiz",
      "30 gün",
      "ücretsiz deneme"
    ],
    "content": [
      {
        "type": "p",
        "text": "İlk kurulumdan itibaren 30 gün boyunca personel hesapları, yetkiler, etkinlik günlüğü ve gelişmiş raporlar dahil Pro planın tüm özelliklerini kullanırsınız. Hesap açmanız gerekmez."
      },
      {
        "type": "p",
        "text": "Deneme sırasında herhangi bir plana abone olursanız deneme hemen sona erer ve satın aldığınız plan o andan itibaren geçerli olur. Deneme bittikten sonra personel ve gelişmiş raporlar gibi Pro özellikleri yalnızca Pro abonelikle kullanılabilir."
      },
      {
        "type": "p",
        "text": "Son 7 gün içinde ve son günde uygulama, kaç gün kaldığını, deneme bitince ödeme almanın duraklayacağını ve verilerinizin saklanacağını size birer kez hatırlatır."
      },
      {
        "type": "p",
        "text": "Deneme sırasında oluşturduğunuz her şey (ürünler, siparişler, üyeler) eksiksiz saklanır. Sonradan abone olsanız da olmasanız da verileriniz asla silinmez."
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
    "question": "Deneme süresi bitince verilerim silinir mi?",
    "keywords": [
      "süre dolması",
      "deneme bitti",
      "kilitli",
      "veriler",
      "ödeme kilitlendi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hayır, verileriniz her zaman cihazınızda kalır. Deneme bitince ödeme alma kilitlenir, ancak siparişlere göz atmaya, raporları görüntülemeye ve ürünleri yönetmeye devam edebilirsiniz."
      },
      {
        "type": "p",
        "text": "İstediğiniz zaman abone olun; ödeme alma anında açılır ve tüm verileriniz bıraktığınız gibi durur."
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
    "question": "Lite, Standard ve Pro planları arasındaki fark nedir?",
    "keywords": [
      "planlar",
      "lite",
      "standard",
      "pro",
      "fark",
      "karşılaştırma",
      "yükseltme",
      "düşürme",
      "fiyat"
    ],
    "content": [
      {
        "type": "p",
        "text": "Üç plan da eksiksiz ödeme işlemlerini, ürünleri, siparişleri (geçersiz kılma, ürün iadesi ve değişim dahil), raporları ve bulut yedeklemeyi içerir. Aralarındaki fark, dükkânı yönetmeye yarayan araçlardadır:"
      },
      {
        "type": "list",
        "items": [
          "Lite: ödeme alma ve ürün yönetimi yeterli olan, tezgâhı tek başına işleten kişiler için.",
          "Standard: kampanyalar, sadakat puanı ve üyelik seviyeleri, stok takibi, satın alma, veresiye satış, ön siparişler ve işlem ücreti tahminleri ekler.",
          "Pro: personel hesapları ve yetkiler, yönetici onayı, etkinlik günlüğü, geri yükleme kayıtları ve gelişmiş raporlar ekler; personeli olan dükkânlar için."
        ]
      },
      {
        "type": "p",
        "text": "Zaten Standard kullanıyor musunuz? Abonelik sayfasından Pro'ya yükseltebilirsiniz: faturalandırma dönemi değişmez, yükseltme hemen geçerli olur ve Apple aradaki farkı kalan süreye göre orantılı olarak hesaplar. Pro'dan Standard'a geçiş yenileme tarihinde uygulanır. Fiyatlar uygulamada gösterilir; planları Fiyatlandırma sayfamızda da karşılaştırabilirsiniz."
      },
      {
        "type": "note",
        "text": "Planı düşürmek hiçbir veriyi silmez. Planınızın dışında kalan özellikler duraklatılır, veriler yerinde kalır ve yeniden abone olduğunuzda özellikler geri gelir."
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
    "question": "Nasıl abone olurum, aboneliği nasıl iptal eder veya satın alımı nasıl geri yüklerim?",
    "keywords": [
      "abone olma",
      "abonelik iptali",
      "satın alımları geri yükle",
      "fiyat",
      "faturalandırma"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abonelikler App Store uygulama içi satın alma üzerinden yönetilir; planlar ve fiyatlar uygulamada gösterilir. Ödemeyi Apple işler, ödeme bilgilerinizi biz görmeyiz."
      },
      {
        "type": "list",
        "items": [
          "İptal: cihazınızda Ayarlar → Apple Hesabı → Abonelikler bölümünden yönetin. Yenilemeyi önlemek için mevcut dönemin bitmesinden en az 24 saat önce iptal edin.",
          "Geri yükleme: cihaz değiştirdikten veya uygulamayı yeniden yükledikten sonra DingPOS'un Abonelik sayfasında \"Satın Alımları Geri Yükle\"ye dokunun.",
          "Plan değiştirme: DingPOS'un Abonelik sayfasında yeni planı seçin. Yükseltmeler (Standard'dan Pro'ya, aylıktan yıllığa) hemen geçerli olur ve Apple aradaki farkı kalan süreye göre orantılı olarak hesaplar; planı düşürme yenileme tarihinde uygulanır."
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
    "question": "Harcama tutarına göre indirim kampanyası nasıl kurulur?",
    "keywords": [
      "harcama eşiği",
      "tutara göre indirim",
      "alışveriş tutarı indirimi",
      "kampanya kurulumu",
      "rehber"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ayarlar → Kampanyalar → Ekle yolunu izleyin, harcama eşiği türünü seçin ve şu adımları izleyin:"
      },
      {
        "type": "steps",
        "items": [
          "Eşik tutarını ve indirimi (sabit tutar veya yüzde) girin.",
          "Kapsamı seçin: belirli ürünler, belirli kategoriler ya da tüm mağaza için boş bırakın.",
          "Zamanlamayı ayarlayın: başlangıç tarihi zorunludur; süresiz kampanya için bitiş tarihini boş bırakın.",
          "Kaydet'e dokunun — kampanya zamanı gelince devreye girer ve ödemede kod gerekmeden otomatik uygulanır."
        ]
      },
      {
        "type": "note",
        "text": "Eşik, tüm sepete değil, kapsamdaki ürünlerin ara toplamına göre kontrol edilir. “İçeceklerde ₺1000 harca” kampanyasında eşik hesabına yalnızca içecek harcamaları dahil edilir; “kampanyalardan hariç tut” olarak işaretlenen ürünler ise hiçbir zaman sayılmaz."
      },
      {
        "type": "p",
        "text": "Sıkça sorulan bir davranış: öncelikli başka bir kampanya önce uygulanırsa eşik, indirimli tutara göre kontrol edilir — eşiği aşmış gibi görünen bir sepet eşiğin biraz altında kalabilir. Eşiğin önce değerlendirilmesini istiyorsanız ona daha küçük bir öncelik numarası verin."
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
    "question": "“Bir al bir bedava” ve “3. ürün bedava” kampanyası nasıl kurulur?",
    "keywords": [
      "bir al bir bedava",
      "2 al 1 bedava",
      "3. ürün bedava",
      "adet indirimi",
      "kampanya kurulumu",
      "rehber"
    ],
    "content": [
      {
        "type": "p",
        "text": "X Al / Y Kazan türünde bir kampanya oluşturun: kaç adet alınacağını, kaç adedin indirimli olacağını ve indirim yüzdesini (%100 = bedava) belirleyin. Kapsamı belirli ürünlerle ya da bir kategorinin tamamıyla sınırlayın — aynı kategorideki farklı ürünler tek grupta sayılır."
      },
      {
        "type": "list",
        "items": [
          "İndirim uygulanan adet, gruptaki en ucuz üründür ve güncel geçerli fiyatı üzerinden hesaplanır — daha önceki bir kampanya ona zaten indirim yaptıysa, Al-Bedava tutarı liste fiyatına değil indirimli fiyata göre belirlenir.",
          "“3. ürün bedava” etiketinde liste fiyatının tamamının görünmesini istiyorsanız, önce hesaplanması için bu kampanyaya en küçük öncelik numarasını verin. Sepet genelindeki bir indirim önce çalışırsa bedava ürünün gösterilen indirimi liste fiyatından küçük olur; bu bir hata değil, hesaplama sırasının doğal sonucudur ve kapsamlı biçimde doğruladık. İki sıralamada da toplam neredeyse aynıdır; değişen, indirimin ekranda hangi satırda göründüğüdür."
        ]
      },
      {
        "type": "p",
        "text": "İpucu: fiş üzerindeki indirim dökümü pazarlama mesajınızla uyuşsun diye öne çıkan fırsatınızı öncelik sırasında en başa koyun."
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
    "question": "Çift puan ve puan çarpanı kampanyası nasıl kurulur?",
    "keywords": [
      "puan çarpanı",
      "çift puan",
      "bonus puan",
      "kampanya kurulumu",
      "rehber"
    ],
    "content": [
      {
        "type": "p",
        "text": "Puan çarpanı türünde bir kampanya oluşturun ve çarpanı girin (2 veya daha büyük bir tam sayı). İsterseniz bir harcama eşiği (örn. ₺500 harcayana çift puan) ve bir zamanlama (örn. yalnızca cumartesi) ekleyin."
      },
      {
        "type": "list",
        "items": [
          "Birden çok çarpan aynı anda geçerliyse yalnızca en yükseği uygulanır — çarpanlar birbiriyle çarpılmaz ve toplanmaz.",
          "Harcama eşiği puan kullanımından sonra kontrol edilir: puan kullanmak toplamı eşiğin altına düşürürse çarpan bu sefer devreye girmez.",
          "Puan kazanılması için ödemede bir üye seçilmiş olmalıdır — üyesiz siparişler puan kazanmaz, dolayısıyla çarpanın çarpacağı bir şey olmaz."
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
    "question": "Üyelik seviyesine özel ve doğum günü kampanyası nasıl kurulur?",
    "keywords": [
      "üyelik seviyesi",
      "doğum günü",
      "doğum günü indirimi",
      "VIP",
      "kampanya kurulumu",
      "rehber"
    ],
    "content": [
      {
        "type": "p",
        "text": "Önce Ayarlar → Üyelik Seviyeleri bölümünde seviyeleri oluşturun (örn. Altın), ardından kampanyayı o seviyeye yönlendirin. Doğum günü kampanyaları için hedef kitleyi Doğum ayı olarak ayarlayın ve Müşteri başına sınır alanını doldurun."
      },
      {
        "type": "list",
        "items": [
          "Kampanyanın devreye girmesi için ödemede üye seçilmiş olmalıdır — uygunluk, o anda seçili olan üyeye göre belirlenir.",
          "Doğum günü uygunluğu üyenin doğum ayına bakar; bu yüzden doğum tarihi alanını doldurun — doğum tarihi olmayan üyeler hiçbir zaman doğum günü müşterisi sayılmaz.",
          "Doğum ayı kampanyası için müşteri başına sınır gerekir ve takvim yılına göre sayılır: 1 sınırı, her müşterinin yılda bir kez yararlanabileceği anlamına gelir ve sınır ertesi yıl sıfırlanır. Sınır olmadan kaydedilemez.",
          "Otomatik seviye yükseltmeleri ödeme tamamlandığında değerlendirilir; sipariş geçersiz kılınırsa onun tetiklediği yükseltme otomatik olarak geri alınır."
        ]
      },
      {
        "type": "note",
        "text": "v3.2'den önce, doğum ayı kampanyası müşteri başına sınır doldurulmuş olsa bile hata gösteriyor ve kaydedilemiyordu. Bu size olursa DingPOS'u App Store'dan güncelleyin."
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
    "question": "Hediye, ücretli ek ürün ve grup fiyatı kampanyaları nasıl kurulur?",
    "keywords": [
      "hediye",
      "hediye ürün",
      "ek ürün",
      "grup fiyatı",
      "X al Y hediye",
      "rehber"
    ],
    "content": [
      {
        "type": "p",
        "text": "Üç bileşik kampanya türü vardır: hediye (A al, B hediye), ücretli ek ürün (X ekle, Y al) ve grup fiyatı (herhangi N ürün X fiyatına). Hediye ve ücretli ek ürün kasiyerin onayını bekler; grup fiyatı otomatik uygulanır."
      },
      {
        "type": "p",
        "text": "Hediye ve ücretli ek ürün sepeti kendiliğinden değiştirmez. Koşullar sağlandığında kasiyer ekranında bir öneri bandı çıkar ve sepet yalnızca kasiyer öneriyi kabul ettiğinde (bandın düğmesine dokunduğunda: Hediye seç / Ek ürün seç) değişir. Bu bilinçli bir tercihtir, çünkü hediyeler fiziksel stok içerir: ürünün elde olduğunu ve müşterinin istediğini birinin doğrulaması gerekir."
      },
      {
        "type": "list",
        "items": [
          "Reddet'ten sonra aynı öneri bu sepet için tekrar çıkmaz; yeni veya boşaltılmış bir sepette yeniden sorulur.",
          "Ödeme onayından önce yeni bir öneri çıkarsa, sipariş gönderilmeden önce kabul edilmeli veya reddedilmelidir.",
          "Hediye ve ek ürün satırlarına diğer parasal kampanyalar ek indirim uygulayamaz ve bu satırlar diğer kampanyaların eşiklerine sayılmaz."
        ]
      },
      {
        "type": "p",
        "text": "Grup fiyatı (v2.4'ten beri otomatik uygulanır): sepet bir grup oluşturabildiği sürece DingPOS grubu kurar ve toplama dahil eder — onay sorulmaz ve gruplar bölünemez."
      },
      {
        "type": "list",
        "items": [
          "Grup yalnızca sepeti ucuzlatıyorsa oluşur. Fiyatı eşit ürünler arasında önce indirimsiz olanlar gruplanır; zaten indirimli ürünler indirimlerini korur.",
          "Hangi ürünlerin birlikte gruplanacağı yalnızca sepetteki ürünlere bağlıdır, okutulma sırasına asla bağlı değildir.",
          "Gruptaki her ürün grup indiriminden kendi payını gösterir ve her satırın tutarı indirimler düşüldükten sonraki tutardır.",
          "Ödemede gruplar en güncel fiyatlarla yeniden oluşturulur; sonuç değişirse yeni toplamı onaylamanız istenir."
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
    "question": "Kampanya zamanlaması ve Happy Hour nasıl ayarlanır?",
    "keywords": [
      "zamanlama",
      "happy hour",
      "haftanın günü",
      "gece yarısı",
      "saatli kampanya",
      "rehber"
    ],
    "content": [
      {
        "type": "p",
        "text": "Her kampanyanın zamanlaması üç katmandan oluşur: tarih aralığı (başlangıç zorunlu, bitiş isteğe bağlı), günlük saat aralığı (Happy Hour) ve seçilen haftanın günleri. Kampanyanın devreye girmesi için üçünün de uyması gerekir."
      },
      {
        "type": "list",
        "items": [
          "Gece yarısını aşan aralıklarda (örn. 22:00–02:00) gün, aralığın başladığı güne göre belirlenir: yalnızca cuma seçiliyse cumartesi 01:30 hâlâ cuma oturumu sayılır ve kampanya çalışır — ancak cumartesi 23:30'da çalışmaz.",
          "Bitiş tarihi kesin sınırdır — Happy Hour aralığı sürüyor olsa bile bitiş tarihi geçtiği anda kampanya durur.",
          "Saat, iPad'in cihaz saatinden okunur; bu yüzden cihazın saat diliminin ve saatinin doğru olduğundan emin olun."
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
    "question": "Kampanya önceliği, birleştirme ve “sonrakileri durdur” ayarı nasıl çalışır?",
    "keywords": [
      "öncelik",
      "birleştirilebilir",
      "sonrakileri durdur",
      "kampanya çakışması",
      "indirim sırası",
      "rehber"
    ],
    "content": [
      {
        "type": "p",
        "text": "Birden çok kampanya aynı anda geçerli olduğunda sırayı ve etkileşimi üç ayar belirler:"
      },
      {
        "type": "list",
        "items": [
          "Öncelik: küçük numara önce hesaplanır. Sırayı değiştirmek için kampanyalar listesinde sürükleyin.",
          "Diğer kampanyalarla birleştirilebilir (varsayılan olarak açık): kapalıyken ürün düzeyindeki bir kampanya yalnızca indirim yaptığı satırları kilitler — diğer ürünler sonraki ürün düzeyindeki kampanyalardan yine yararlanabilir; birleştirilemeyen bir sepet düzeyi kampanya, sonraki tüm sepet düzeyi kampanyaları engeller.",
          "Bu kampanya uygulanınca sonrakileri durdur: bu kampanya uygulandıktan sonra başka parasal indirim hesaplanmaz — ancak puan çarpanları ve hediye önerileri bundan etkilenmez."
        ]
      },
      {
        "type": "note",
        "text": "Sonraki kampanyalar, zaten indirimli olan tutar üzerinden hesaplanır: %10 indirim artı %5 indirim %15 indirim demek değildir — ikinci indirim, ilkinden sonraki toplama uygulanır. DingPOS ayrıca müşteri için en avantajlı kombinasyonu aramaz; sıra tamamen sizin belirlediğiniz önceliklere göre oluşur."
      },
      {
        "type": "p",
        "text": "İlginç bilgi: bir indirim sıfıra yuvarlanırsa uygulama sayılmaz — ve kullanım sınırından düşülmez."
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
    "question": "DingPOS'a ödeme alma entegrasyonu gelecek mi?",
    "keywords": [
      "ödeme entegrasyonu",
      "kart ile ödeme",
      "POS cihazı entegrasyonu",
      "sanal pos",
      "ödeme altyapısı"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS şu anda para akışına karışmaz: ödeme yöntemleri yalnızca kayıt amaçlı etiketlerdir, gerçek tahsilat mevcut POS cihazınız veya ödeme uygulamanız üzerinden yapılır."
      },
      {
        "type": "p",
        "text": "Ödeme entegrasyonunu ekleyip eklemeyeceğimiz gerçek kullanıcı talebine bağlı. İhtiyacınız varsa bağlanmasını istediğiniz hizmeti (hangi ödeme kuruluşu, hangi cihaz) ve kullanım amacınızı bize yazın; geliştirme sırasını gelen talep sayısına göre belirliyoruz."
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
    "question": "e-Fatura veya fiş yazdırma desteklenecek mi?",
    "keywords": [
      "e-fatura",
      "fatura",
      "fiş yazıcı",
      "fiş yazdırma",
      "yazıcı"
    ],
    "content": [
      {
        "type": "p",
        "text": "Henüz değil. e-Fatura ve fiş yazdırma, test ve geliştirme için fatura cihazları / fiş yazıcıları satın almayı gerektiriyor ve bu ciddi bir maliyet. Küçük bir ekip olarak, kullanıcı tabanı büyüyüp gelir istikrarlı hale geldiğinde planlayacağız."
      },
      {
        "type": "p",
        "text": "Buna ihtiyacınız varsa kullandığınız cihazın modelini bize yazın; geliştirme sırasını gelen talep sayısına göre belirliyoruz."
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
    "question": "El tipi barkod okuyucular desteklenecek mi?",
    "keywords": [
      "barkod okuyucu",
      "el terminali",
      "bluetooth barkod okuyucu",
      "usb barkod okuyucu",
      "donanım"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ürün tanımlarken Kamera ile barkod okutma zaten destekleniyor. Fiziksel okuyucular (USB / Bluetooth) henüz resmî olarak desteklenmiyor; diğer donanım özellikleri gibi test ve geliştirme için cihaz satın almayı gerektiriyor ve kullanıcı tabanı büyüdükçe planlanacak."
      },
      {
        "type": "note",
        "text": "Ödeme ekranındaki arama alanı barkodlarla eşleşir; bu yüzden klavye modundaki bir okuyucu teorik olarak oraya yazıp ürünleri getirebilir. Ancak bunu gerçek cihazda doğrulamadık, bu nedenle resmî olarak desteklenmiyor. Çalıştığını denediğiniz bir okuyucu varsa modelini bize bildirin!"
      },
      {
        "type": "p",
        "text": "Buna ihtiyacınız varsa bize yazın; geliştirme sırasını gelen talep sayısına göre belirliyoruz."
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
    "question": "Aylık borç kapatma raporu olacak mı?",
    "keywords": [
      "aylık borç kapatma",
      "mutabakat",
      "ay sonu",
      "aylık rapor",
      "borçlar",
      "alacaklar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Henüz özel bir aylık borç kapatma raporu yok, ancak mutabakat için gereken her şey uygulamada zaten mevcut:"
      },
      {
        "type": "list",
        "items": [
          "İstatistik sekmesinde Bu Ay'ı seçerek ayın satış gelirini, alınan tutarı, kârı ve ödeme dağılımını görün.",
          "Aylık vadeli tedarikçi alımları Satın alma bölümündeki Açık Fatura altında toplanır; bir ayın tamamı tek seferde kapatılabilir.",
          "Müşterilere yapılan veresiye satışlar Siparişler → Alacaklar altında toplanır; bir ayın tamamı tek seferde kapatılabilir."
        ]
      },
      {
        "type": "p",
        "text": "Dışa aktarabileceğiniz veya yazdırabileceğiniz bir aylık borç kapatma raporuna ihtiyacınız varsa gereken alanları bize yazın; geliştirme sırasını gelen talep sayısına göre belirliyoruz."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
