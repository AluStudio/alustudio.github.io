// Generated from en and the id translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync id`, then `npm run l10n -- dingpos apply id`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Mulai Menggunakan",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Pembayaran di kasir",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Pesanan & Retur",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Produk, Persediaan & Pembelian",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Laporan",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Promo & Loyalitas",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Cadangan & Data",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Staf & Izin",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Langganan & Penagihan",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Panduan Pengaturan Promo",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Segera hadir",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Bagaimana cara mengatur toko saya di DingPOS?",
    "keywords": [
      "cara mengatur toko",
      "mulai",
      "pengaturan awal",
      "panduan awal",
      "panduan pengaturan",
      "buka toko",
      "negara",
      "mata uang",
      "pajak",
      "aplikasi kasir"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat pertama kali membuka DingPOS, panduan pengaturan akan menuntun Anda membuka toko dalam dua langkah dan beberapa menit:"
      },
      {
        "type": "steps",
        "items": [
          "Pilih negara atau wilayah Anda. Bagian atas daftar menampilkan negara atau wilayah tempat iPad ini berada, lalu pasar yang paling umum; di bawahnya ada semua 175 negara dan wilayah tempat DingPOS tersedia di App Store, yang bisa dicari berdasarkan nama dalam bahasa aplikasi atau bahasa Inggris. Pilihan Anda mengisi mata uang, pajak, dan mode pajak secara otomatis.",
          "Di Toko Anda, masukkan nama toko, tambahkan logo jika mau, lalu periksa mata uang, pajak, dan mode pajak (termasuk pajak / belum termasuk pajak). Mata uang default mengikuti negara Anda; ketuk untuk memilih dari 130 mata uang. Daftar pajak berisi pajak default negara Anda: ubah namanya, ganti tarifnya, hapus salah satunya, atau ketuk Tambah Pajak untuk baris lain. Toko di British Columbia, misalnya, mengubah baris pertama menjadi “GST 5” dan menambahkan baris “PST 7”."
        ]
      },
      {
        "type": "p",
        "text": "Ketuk Lanjutkan dan Anda akan melihat “Ding! Toko Anda sudah siap.” DingPOS juga menyiapkan dua metode pembayaran, Tunai dan Kartu Kredit. Lalu tambahkan produk Anda di Produk dan mulai mencatat penjualan."
      },
      {
        "type": "note",
        "text": "Mata uang tidak bisa diubah setelah pengaturan awal; pajak dan mode pajak keduanya bisa diubah nanti di Pengaturan → Info Toko. Di Amerika Serikat, Kanada, Brasil, dan Mikronesia, tarifnya bergantung pada negara bagian, provinsi, atau kota, sehingga kolom tarif awalnya kosong dan Anda memasukkan tarif yang Anda kenakan untuk melanjutkan. Tarif harus di atas 0: toko yang tidak mengenakan pajak menghapus barisnya. Di Jerman, Prancis, Italia, dan negara Eropa lainnya, daftar itu juga memuat tarif rendah yang lazim di ritel setempat, dengan nama pajak lokal, seperti “MwSt. 19%” dan “MwSt. 7%” di Jerman; tarif rendah tidak diterapkan ke produk baru secara default, jadi aktifkan per produk. Daftar 175 negara dan pilihan mata uang hadir di v3.2; versi sebelumnya hanya menawarkan 15 negara."
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
    "question": "Apakah DingPOS bisa dipakai tanpa internet?",
    "keywords": [
      "offline",
      "tanpa internet",
      "wifi",
      "jaringan",
      "tidak ada koneksi",
      "pasar malam"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. DingPOS berfungsi offline — pembayaran di kasir, pengelolaan produk, stok, dan laporan semuanya berjalan langsung di iPad Anda tanpa perlu jaringan. Pasar malam, lapak pop-up, dan tempat lain tanpa Wi-Fi tetap bisa dipakai dengan lancar."
      },
      {
        "type": "p",
        "text": "Hanya dua hal yang membutuhkan koneksi: cadangan cloud (diunggah ke iCloud / Google Drive / Dropbox milik Anda sendiri) dan verifikasi status langganan."
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
    "question": "Apakah saya perlu membuat akun?",
    "keywords": [
      "akun",
      "daftar",
      "login",
      "masuk",
      "registrasi",
      "privasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tidak. DingPOS tidak memakai sistem akun — unduh saja dan langsung berjualan. Produk, pesanan, dan data pelanggan Anda semuanya tetap ada di iPad Anda. Data itu sampai ke kami hanya jika Anda mengirim laporan dukungan dari Pengaturan, yang melampirkan salinan data toko Anda agar kami dapat mereproduksi masalahnya."
      },
      {
        "type": "p",
        "text": "Saat Anda mengaktifkan cadangan cloud, Anda masuk ke akun cloud milik Anda sendiri (iCloud, Google Drive, atau Dropbox). Cadangan tersimpan di akun Anda — kami tidak bisa mengaksesnya."
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
    "question": "Perangkat apa saja yang didukung?",
    "keywords": [
      "perangkat",
      "iphone",
      "mac",
      "ipad",
      "persyaratan",
      "versi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat ini DingPOS mendukung iPad dengan iPadOS 17.4 atau lebih baru, dan dirancang terutama untuk orientasi lanskap."
      },
      {
        "type": "p",
        "text": "iPhone dan Mac belum didukung. Jika Anda ingin kami mendukung perangkat lain, tulis kepada kami dan ceritakan kebutuhan Anda."
      },
      {
        "type": "note",
        "text": "Setiap iPad yang menjalankan iPadOS 17 bisa diperbarui ke 17.4, jadi tidak ada model yang tertinggal. iPad yang masih memakai iPadOS 17.0–17.3 perlu memperbarui sistem lebih dulu, di Pengaturan → Umum → Pembaruan Software, sebelum bisa memasang DingPOS v3.5 atau yang lebih baru."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Bisakah mata uang, tarif pajak, atau mode pajak diubah setelah pengaturan awal?",
    "keywords": [
      "mata uang",
      "mode pajak",
      "ubah",
      "terkunci",
      "tarif pajak",
      "pajak",
      "termasuk pajak",
      "belum termasuk pajak"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pajak bisa diubah; mata uang tidak. Pajak dan mode pajak sama-sama diubah di kartu Pajak pada Pengaturan → Info Toko, dan perubahan hanya berlaku untuk penjualan berikutnya: pesanan lama, retur, dan laporan tetap memakai jumlah pajak dan mode yang tercatat saat itu."
      },
      {
        "type": "list",
        "items": [
          "Pajak: tambah, ubah nama, ganti tarif, atau hapus — lihat “Bagaimana pajak dihitung di aplikasi kasir?”",
          "Mode pajak (termasuk pajak / belum termasuk pajak): ketuk mode yang lain, lalu konfirmasi akan menunjukkan contoh hitungan dengan pajak pertama Anda, misalnya “barang NT$100 dengan pajak 5%: pelanggan membayar NT$105”. Harga tetap sama angkanya, dan keranjang yang sedang terbuka dihitung ulang dengan mode baru saat Anda kembali ke kasir. Mode bisa diganti sejak v3.5; versi sebelumnya mengunci mode saat pengaturan awal.",
          "Setelah mode diganti, retur penuh tetap mengembalikan dana pesanan asli apa adanya. Tukar barang (dengan barang pengganti) pada pesanan yang dijual dengan mode lain akan diblokir: ganti kembali modenya, atau retur barangnya lalu catat penjualannya lagi."
        ]
      },
      {
        "type": "p",
        "text": "Mata uang terkunci setelah pengaturan awal selesai. Semua pesanan lama tercatat dalam mata uang itu, jadi mengganti mata uang di tengah jalan akan merusak laporan Anda. Periksa di langkah Toko Anda saat pengaturan awal: mata uang default mengikuti negara Anda, dan Anda bisa mengetuknya untuk memilih yang lain."
      },
      {
        "type": "note",
        "text": "Jika toko Anda baru dibuka dan belum punya data penting, Anda bisa menghapus lalu memasang ulang aplikasi untuk menjalankan pengaturan awal lagi. Pastikan tidak ada data yang perlu Anda simpan sebelum menghapus."
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
    "question": "Bagaimana cara mengganti bahasa aplikasi?",
    "keywords": [
      "bahasa",
      "inggris",
      "tionghoa",
      "jepang",
      "spanyol",
      "multibahasa",
      "ganti bahasa",
      "wilayah"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS mendukung 32 bahasa, termasuk Inggris, Tionghoa Tradisional dan Sederhana, Jepang, Korea, Thai, Vietnam, Indonesia, Melayu, Spanyol (Amerika Latin), Portugis (Brasil), Prancis, dan Jerman. Buka Pengaturan → Preferensi Perangkat lalu ketuk Bahasa App. Halaman DingPOS di aplikasi Pengaturan iPad akan terbuka, lalu pilih bahasa di bagian Bahasa."
      },
      {
        "type": "p",
        "text": "iOS tidak mengizinkan aplikasi membuka daftar bahasa secara langsung, jadi ketukan terakhir dilakukan di Pengaturan sistem. Bahasa ini hanya berlaku untuk iPad ini."
      },
      {
        "type": "note",
        "text": "Bahasa selain Inggris dan Tionghoa Tradisional hadir di v3.2. Jika Bahasa hanya menampilkan Inggris dan Tionghoa, perbarui DingPOS dari App Store."
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
    "question": "Bagaimana cara melayani beberapa pelanggan sekaligus?",
    "keywords": [
      "keranjang",
      "beberapa keranjang",
      "tahan pesanan",
      "pindah keranjang",
      "antrean",
      "banyak pelanggan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Layar kasir menjalankan sepuluh keranjang sekaligus. Ketuk \"+\" di bilah keranjang untuk menambah keranjang, lalu ketuk tab bernomor untuk berpindah."
      },
      {
        "type": "p",
        "text": "Setiap keranjang dihitung sendiri-sendiri. Saat pelanggan A masih memilih-milih, pindah ke keranjang lain dan layani pelanggan B lebih dulu. Slot keranjang otomatis hilang setelah keranjang itu selesai dibayar."
      },
      {
        "type": "note",
        "text": "Keranjang hanya tersimpan di memori — keranjang yang belum dibayar akan terhapus saat aplikasi ditutup sepenuhnya."
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
    "question": "Bagaimana cara memberi diskon?",
    "keywords": [
      "diskon",
      "persen",
      "potongan harga",
      "nominal",
      "potongan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Diskon bekerja di dua tingkat, masing-masing bisa berupa nominal tetap atau persentase:"
      },
      {
        "type": "list",
        "items": [
          "Diskon item: ketuk item di keranjang → pilih \"Diskon\" → masukkan nominal atau persentase.",
          "Diskon keranjang: ketuk tombol \"Diskon\" di bawah keranjang."
        ]
      },
      {
        "type": "p",
        "text": "Setiap item dan setiap keranjang hanya bisa memiliki satu diskon pada satu waktu — memberi diskon lagi akan menimpa yang sebelumnya, dan mengetuk lencana diskon akan menghapusnya. Diskon diterapkan sebelum pajak, urutan standar di dunia ritel."
      },
      {
        "type": "p",
        "text": "Diskon yang sering Anda berikan bisa disimpan: buka Pengaturan → Loyalitas & Promo → Preset Diskon lalu ketuk Tambah Preset, misalnya “Harga staf diskon 20%”. Di kasir, diskon item dan diskon keranjang sama-sama punya menu Preset; memilih satu preset mengisi jenis dan nilai diskon persis seperti Anda mengetiknya sendiri, sehingga tetap dihitung dalam batas diskon seorang staf. Preset diskon hadir di v3.6 dan memerlukan paket Standard atau lebih tinggi."
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
    "question": "Bagaimana pajak dihitung di aplikasi kasir?",
    "keywords": [
      "pajak",
      "PPN",
      "pajak penjualan",
      "termasuk pajak",
      "belum termasuk pajak",
      "beberapa pajak",
      "GST",
      "PST",
      "jeda pajak",
      "struk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pajak dihitung otomatis dari pajak dan mode pajak di Pengaturan → Info Toko. Ada dua mode pajak, dan struk menampilkan jumlah pajak di keduanya:"
      },
      {
        "type": "list",
        "items": [
          "Termasuk pajak: harga sudah mengandung pajak — total tidak berubah dan struk merinci pajak yang terkandung di dalamnya (umum di Taiwan, Jepang, dan sebagainya).",
          "Belum termasuk pajak: pajak ditambahkan di atas jumlah setelah diskon saat pembayaran (umum di AS, Kanada, dan sebagainya)."
        ]
      },
      {
        "type": "p",
        "text": "Satu toko bisa mengenakan beberapa pajak, misalnya GST 5% plus PST 7% di British Columbia, atau pajak konsumsi 10% di Jepang bersama tarif ringan 8%:"
      },
      {
        "type": "list",
        "items": [
          "Di kartu Pajak, ketuk Tambah Pajak lalu isi nama dan tarif. Aktifkan Terapkan ke Produk Baru agar produk yang Anda tambahkan kemudian otomatis memakai pajak ini. Jika toko sudah punya pajak default, pajak yang baru ditambahkan awalnya nonaktif pada sakelar itu; aktifkan jika keduanya harus dikenakan.",
          "Tiap produk memilih pajak yang dikenakannya di Pajak Dikenakan pada formulir produk — sebuah bento mungkin hanya dikenai tarif ringan 8%. Jika dua pajak atau lebih diaktifkan, formulir menampilkan total pajak untuk produk itu.",
          "Ketuk sebuah pajak untuk mengganti namanya, mengubah tarifnya, atau pakai Terapkan ke Semua Produk atau Hapus dari Semua Produk untuk menambahkan atau mencabutnya dari semua produk sekaligus. Saat Anda menghapus pajak, aplikasi lebih dulu memberi tahu berapa produk yang tidak akan lagi dikenai pajak itu.",
          "Di toko dengan mode belum termasuk pajak, total keranjang menampilkan satu baris per pajak, dan rincian pesanan mencantumkan satu baris per pajak beserta tarifnya dan jumlah dasar yang dikenai pajak tersebut."
        ]
      },
      {
        "type": "p",
        "text": "Untuk berhenti mengenakan pajak sementara, matikan Kenakan pajak di bagian atas kartu Pajak: semua penjualan berikutnya tanpa pajak, termasuk barang yang sudah ada di keranjang. Tiap produk tetap menyimpan pajaknya, dan menyalakan kembali sakelar itu mengembalikannya seperti semula."
      },
      {
        "type": "p",
        "text": "Urutan perhitungan lengkap: diskon item dan promo → diskon keranjang → penukaran poin → pajak. Jumlah dibulatkan setengah ke atas sesuai jumlah desimal mata uang (misalnya 0 untuk TWD, 2 untuk USD). Pajak dihitung satu kali per jenis pajak pada tiap pesanan, dan desimalnya mengikuti Pembulatan pajak di kartu Pajak: Bulatkan setengah ke atas, Bulatkan ke bawah, atau Bulatkan ke atas. Toko baru di Jepang memakai Bulatkan ke bawah; toko lain memakai Bulatkan setengah ke atas."
      },
      {
        "type": "note",
        "text": "Pajak dengan nama hadir di v3.5. Saat Anda memperbarui aplikasi, tarif pajak Anda menjadi pajak dengan nama (misalnya “GST 10%” di Australia) dan setiap produk yang sudah ada memakainya; toko yang tarifnya 0 tidak mendapat pajak. Pesanan dan retur sebelumnya tetap memakai tarif dan jumlah pajak yang tercatat; laporan kini menghitung pendapatan sebelum pajak, termasuk periode sebelumnya (lihat “Apa bedanya Pendapatan dan Kas Diterima?”)."
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
    "question": "Metode pembayaran apa saja yang didukung?",
    "keywords": [
      "pembayaran",
      "tunai",
      "kartu kredit",
      "line pay",
      "kembalian",
      "metode pembayaran kustom",
      "penjualan tempo",
      "biaya"
    ],
    "content": [
      {
        "type": "p",
        "text": "Toko baru dimulai dengan dua metode pembayaran, Tunai dan Kartu Kredit, yang dinamai dalam bahasa aplikasi saat pengaturan awal. Di Pengaturan → Metode Pembayaran Anda bisa menambahkan metode lain (misalnya Apple Pay, LINE Pay, dompet digital lokal), serta mengurutkannya ulang. Ketuk sebuah metode untuk mengganti namanya, misalnya dari Kartu Kredit menjadi “Kartu (Square)”; Statistik menghitung penjualan sebelum penggantian nama dengan nama yang baru (sejak v3.6). Hapus Metode Pembayaran ada di bagian bawah lembar edit dan meminta konfirmasi sebelum menghapus; pesanan lama tetap menyimpan metode yang dipakai untuk membayarnya, dan metode terakhir yang tersisa tidak bisa dihapus."
      },
      {
        "type": "p",
        "text": "Metode pembayaran hanyalah label pembukuan — DingPOS tidak memproses pembayaran sungguhan. Terima pembayaran kartu atau ponsel dengan terminal atau aplikasi yang sudah Anda pakai, lalu pilih label yang sesuai di DingPOS untuk mencatatnya. Pembayaran tunai menghitung kembalian secara otomatis, dan di negara yang koin terkecilnya tidak lagi dipakai, tunai juga bisa dibulatkan — lihat “Bisakah pembayaran tunai dibulatkan ke koin yang masih dipakai?”"
      },
      {
        "type": "p",
        "text": "Jika penyedia pembayaran kartu atau ponsel Anda memotong biaya, beri metode itu tarif biaya, dan Statistik akan memperkirakan biaya serta kas bersih yang diterima tiap metode — lihat “Bisakah DingPOS mencatat biaya pembayaran kartu dan ponsel?”"
      },
      {
        "type": "p",
        "text": "Untuk pelanggan tetap yang membawa barang sekarang dan membayar nanti, pilih Penjualan tempo: penjualan dicatat sebagai piutang dan dilunasi saat uangnya diterima. Lihat “Bisakah pelanggan tetap membeli secara tempo dan membayar belakangan?”"
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
    "question": "Bisakah DingPOS mencatat biaya pembayaran kartu dan ponsel?",
    "keywords": [
      "biaya pemrosesan",
      "biaya kartu",
      "biaya transaksi",
      "tarif biaya",
      "kas bersih diterima",
      "biaya merchant",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Di Pengaturan → Metode Pembayaran, ketuk sebuah metode pembayaran (atau tambahkan yang baru) lalu isi Biaya pemrosesan: persentase, jumlah tetap per transaksi, atau keduanya. Metode bertipe tunai tidak punya biaya. Sejak itu, setiap pembayaran yang diterima lewat metode tersebut mencatat biaya yang diperkirakan dengan tarif yang berlaku saat itu."
      },
      {
        "type": "p",
        "text": "Di Statistik, kartu Metode Pembayaran menambahkan baris “Biaya · Bersih” di bawah tiap metode yang punya biaya, dan bagian bawah kartu menampilkan perkiraan biaya serta perkiraan kas bersih diterima untuk seluruh periode."
      },
      {
        "type": "list",
        "items": [
          "Masukkan tarif yang benar-benar dipotong penyedia Anda. Jika biayanya dikenai pajak, sertakan pajaknya: untuk 3% plus pajak 5%, masukkan 3,15%. Kosongkan kedua kolom jika tanpa biaya.",
          "Perubahan tarif hanya berlaku untuk pembayaran berikutnya; biaya yang sudah tercatat tetap seperti semula.",
          "“Persentase biaya dikembalikan saat retur dan pembatalan pra-pesan” awalnya aktif untuk toko di Taiwan dan Jepang, dan nonaktif di tempat lain, karena penyedia seperti Stripe, Square, dan PayPal tidak mengembalikan biayanya saat pengembalian dana; atur sesuai penyedia Anda. Pengaturan ini mengatur retur dan uang muka pra-pesan yang dikembalikan: jika aktif, persentasenya dikembalikan; biaya tetap tidak pernah dikembalikan. Batalkan penjualan (Void) atau pembatalan pelunasan mengabaikan pengaturan ini dan menarik kembali seluruh biaya yang tercatat, termasuk biaya tetap. Dalam kedua kasus, pelanggan menerima kembali jumlah yang sama.",
          "Pembayaran yang diterima sebelum metode itu punya tarif tidak membawa biaya: Statistik menandainya “(N tanpa tarif)” dan menampilkan kas bersih sebagai “—”."
        ]
      },
      {
        "type": "note",
        "text": "Biaya adalah perkiraan dari tarif yang Anda masukkan; laporan penyedia Anda adalah jumlah sebenarnya. Mengubah tarif biaya memerlukan paket Standard atau lebih tinggi, dan di Lite kolomnya terkunci. Sejak v3.4, semua paket melihat biaya yang tercatat di Statistik dan di Laba Rugi, sehingga tarif yang diatur selama masa uji coba tetap memperkirakan biaya di Lite; versi sebelumnya hanya menampilkan biaya di Standard ke atas."
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
    "question": "Bisakah pembayaran tunai dibulatkan ke koin yang masih dipakai?",
    "keywords": [
      "pembulatan tunai",
      "pembulatan",
      "bulatkan ke atas",
      "bulatkan ke bawah",
      "koin",
      "uang receh",
      "sen",
      "0,05",
      "0.05",
      "kembalian",
      "kanada",
      "australia",
      "swiss"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Kanada, Australia, Selandia Baru, Swiss, Denmark, Swedia, Norwegia, Belgia, Finlandia, dan Hungaria tidak lagi memakai koin terkecil mereka, jadi DingPOS membulatkan tunai ke jumlah yang benar-benar bisa diserahkan: pesanan C$12.99 yang dibayar tunai diterima sebagai C$13.00, dan kembalian dihitung dari C$13.00. Pembayaran kartu dan nontunai lainnya tetap persis."
      },
      {
        "type": "p",
        "text": "Toko baru yang diatur di salah satu negara ini, dengan mata uang negara itu, otomatis mendapatkan pengaturan ini. Toko lain bisa mengaktifkannya lewat kartu Pembulatan tunai di bagian bawah Pengaturan → Metode Pembayaran: pilih ke mana tunai dibulatkan (Tanpa pembulatan, atau 0.05, 0.10, 0.50, atau 1.00 pada mata uang yang memakai sen; 5, 10, 50, atau 100 pada mata uang tanpa sen, seperti TWD atau JPY), dan untuk kelipatan yang bisa jatuh tepat di tengah, apakah dibulatkan ke atas atau ke bawah. Perubahan hanya berlaku untuk pembayaran berikutnya."
      },
      {
        "type": "list",
        "items": [
          "Layar bayar menampilkan “Tunai diterima C$13.00”. Jika pelanggan ingin membayar jumlah pas, ketuk Terima jumlah pas di bawah metode pembayaran; ini hanya berlaku untuk satu penjualan itu.",
          "Total pesanan, pajak, pendapatan, poin, dan total belanja pelanggan tidak berubah; selisih pembulatan melekat pada pembayaran, dan layar struk serta rincian pesanan menampilkannya di bawah total, seperti “Pembulatan tunai +C$0.01”.",
          "Pengembalian dana tunai pada retur, uang muka tunai dan sisa tagihan saat pengambilan pada pra-pesan, tambahan bayar pada tukar barang, serta penjualan tempo yang dilunasi tunai ikut dibulatkan; jika beberapa dilunasi sekaligus, pembulatan dilakukan satu kali untuk seluruh kelompok.",
          "Void, uang muka pra-pesan yang dikembalikan, dan pelunasan yang dibatalkan mengembalikan persis yang tercatat, tanpa dibulatkan lagi.",
          "Kas Diterima di Statistik menunjukkan berapa bagian darinya yang berupa pembulatan tunai, dan Laba Rugi bulanan mendapat baris Pembulatan tunai yang ikut dihitung ke laba bersih. Pembulatan tidak pernah menjadi pendapatan."
        ]
      },
      {
        "type": "note",
        "text": "Swiss selalu membulatkan ke bawah, mengikuti aturan penampilan harganya — CHF 12.98 diterima sebagai CHF 12.95, dan tidak ada pilihan tepat di tengah. Belgia hanya membulatkan total di atas €0.05. Pembulatan tunai tersedia di setiap paket, dan toko yang sudah ada menerima tunai persis seperti sebelumnya sampai Anda mengaktifkannya."
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
    "question": "Bisakah bunyi “Ding” setelah transaksi selesai dimatikan?",
    "keywords": [
      "suara",
      "ding",
      "matikan suara",
      "suara setelah transaksi",
      "bunyi kasir"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Buka Pengaturan → Preferensi Perangkat lalu matikan Suara pembayaran. Mulai penjualan berikutnya, layar konfirmasi tidak lagi mengeluarkan bunyi, tetapi getaran haptik tetap aktif."
      },
      {
        "type": "p",
        "text": "Pengaturan ini hanya berlaku di iPad ini, dan memulihkan cadangan cloud tidak mengubahnya."
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
    "question": "Bisakah layar kasir menyembunyikan produk yang stoknya habis?",
    "keywords": [
      "sembunyikan",
      "stok habis",
      "produk habis",
      "stok nol",
      "kasir",
      "produk hilang",
      "produk tidak ditemukan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Buka Pengaturan → Preferensi Perangkat dan aktifkan Sembunyikan produk stok habis (nonaktif secara default). Kisi produk, filter kategori, dan pencarian (nama dan barcode) di kasir lalu melewatkan setiap produk yang stoknya 0 atau kurang. Pengaturan ini berlaku langsung, tanpa perlu membuka ulang aplikasi."
      },
      {
        "type": "list",
        "items": [
          "Produk yang tidak melacak stok selalu tampil. Produk dengan varian disembunyikan hanya jika semua variannya habis.",
          "Pengaturan ini hanya memengaruhi kasir di iPad ini; daftar Produk tetap menampilkan semua produk.",
          "Jika semua produk tersembunyi, kasir menampilkan “Semua produk stok habis” dan memberi tahu di mana Anda bisa menonaktifkan pengaturannya."
        ]
      },
      {
        "type": "note",
        "text": "Selama pengaturan ini aktif, iPad ini tidak bisa menemukan produk yang stoknya habis, sehingga tidak bisa menjual hingga stok minus atau menerima pra-pesan untuk produk itu — nonaktifkan bila perlu. Jika produk tampak hilang dari kasir, biasanya pengaturan inilah penyebabnya."
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
    "question": "Kalau harga produk diubah, apakah harga di keranjang ikut berubah?",
    "keywords": [
      "ubah harga",
      "harga berubah",
      "keranjang",
      "hitung ulang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Keranjang menampilkan harga saat item ditambahkan. Saat Anda mengetuk konfirmasi Bayar, DingPOS mengecek ulang harga terbaru setiap item — jika ada yang berubah, Anda diberi peringatan beserta harga terbarunya sebelum lanjut."
      },
      {
        "type": "p",
        "text": "Promo juga dievaluasi ulang dari awal saat konfirmasi. Jika total, pajak, atau jumlah diskon berubah karenanya, ringkasan perubahan ditampilkan dan Anda harus mengonfirmasi lagi — sehingga jumlah yang Anda lihat persis sama dengan yang dicatat."
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
    "question": "Bisakah diskon manual dan promo dipakai bersamaan?",
    "keywords": [
      "diskon manual",
      "promo",
      "gabung",
      "timpa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Aturannya: “manual diutamakan, tiap lapisan berdiri sendiri”:"
      },
      {
        "type": "list",
        "items": [
          "Diskon item manual: baris itu tidak lagi mendapat promo tingkat item — diskon manual Anda dianggap keputusan akhir di tempat. Namun jumlah baris tersebut tetap dihitung untuk ambang belanja minimum.",
          "Diskon keranjang manual: diterapkan setelah semua promo dihitung, sehingga keduanya berjalan bersama. Jika Anda memasukkan nilai lebih besar dari sisa total, nilainya otomatis dibatasi disertai pemberitahuan."
        ]
      },
      {
        "type": "p",
        "text": "Menghapus diskon manual mengembalikan kelayakan promo baris tersebut pada evaluasi berikutnya."
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
    "question": "Bagaimana cara menambahkan atau mengganti pelanggan pada penjualan?",
    "keywords": [
      "pelanggan",
      "member",
      "pilih pelanggan",
      "ganti pelanggan",
      "pelanggan baru",
      "bayar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pilih pelanggan di keranjang atau di layar Bayar: baris Pelanggan di bawah jumlah tagihan membuka daftar pelanggan jika belum ada yang dipilih, dan menawarkan Ganti Pelanggan atau Hapus Pelanggan jika sudah ada. Pelanggan yang dipilih saat bayar menjadi pelanggan keranjang, dan tetap di keranjang jika Anda membatalkan pembayaran."
      },
      {
        "type": "list",
        "items": [
          "Mengganti pelanggan langsung menghitung ulang diskon tingkat, penawaran ulang tahun, dan penukaran poin. Uang tunai atau uang muka yang sudah Anda isi tetap tersimpan dan diperiksa terhadap total yang baru.",
          "Tidak menemukannya? Ketuk Pelanggan Baru di kanan atas daftar pelanggan, atau di tengah saat tidak ada yang cocok dengan pencarian Anda. Kata yang Anda cari mengisi formulir — angka masuk ke telepon, selain itu ke nama — dan pelanggan baru langsung dikaitkan dengan penjualan.",
          "Mengetuk Penjualan tempo saat belum ada pelanggan membuka daftar pelanggan, dan Penjualan tempo terpilih setelah Anda memilih seseorang.",
          "Jika pelanggan baru membuat diskon manual melewati batas diskon operator, manajer menyetujui lebih dulu; batalkan persetujuan itu dan pelanggan tetap seperti semula."
        ]
      },
      {
        "type": "note",
        "text": "Pelanggan termasuk dalam paket Standard; di Lite barisnya bertuliskan “Pelanggan — paket Standard” dan membuka rincian upgrade. Baris Pelanggan di layar Bayar hadir sejak v3.4; versi sebelumnya hanya memilih pelanggan di keranjang."
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
    "question": "Salah input saat bayar, bagaimana cara membatalkan penjualan (void)?",
    "keywords": [
      "void",
      "batalkan penjualan",
      "batal",
      "salah input",
      "pesanan salah"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Pesanan, cari pesanannya, buka halaman rinciannya, lalu ketuk Batalkan penjualan. Jendela “Batalkan penjualan ini?” menerima alasan opsional (maksimal 100 karakter); ketuk Batalkan penjualan di kanan atas jendela itu, selesai. Alasan tampil di rincian pesanan dan log aktivitas, dan tidak bisa diedit setelah dikirim."
      },
      {
        "type": "p",
        "text": "Pembatalan otomatis membalik semua yang terkait: stok yang dilacak dikembalikan, poin loyalitas yang didapat dari pesanan itu ditarik kembali, dan poin yang ditukarkan dikembalikan. Pesanan yang dibatalkan tetap ada di daftar dengan tanda yang jelas, dan tidak dihitung dalam pendapatan laporan."
      },
      {
        "type": "note",
        "text": "Batalkan penjualan (Void) berarti “penjualan ini tidak pernah terjadi” — gunakan untuk pesanan yang salah dicatat saat itu juga. Kalau pelanggan mengembalikan barang di kemudian hari, gunakan Retur: pesanan asli tetap tersimpan, Anda bisa mengembalikan sebagian barang saja, dan pendapatan dikurangi pada hari retur."
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
    "question": "Bagaimana cara memproses retur atau tukar barang?",
    "keywords": [
      "retur",
      "tukar barang",
      "pengembalian dana",
      "retur sebagian",
      "tukar ukuran",
      "buang barang retur",
      "alasan retur"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Pesanan, buka pesanan aslinya, lalu ketuk Retur. Pilih berapa banyak tiap barang yang dikembalikan. Untuk tukar barang, ketuk Tambah Barang Pengganti di layar yang sama; selisihnya diselesaikan sekaligus — positif berarti pelanggan membayar, negatif berarti Anda mengembalikan dana, dan nol berarti tidak ada uang yang berpindah."
      },
      {
        "type": "list",
        "items": [
          "Pesanan asli tidak pernah diubah. Retur membuat dokumen sendiri bertanggal hari ini dengan nomor berawalan R, dan pendapatan dikurangi pada hari retur.",
          "Dana yang dikembalikan adalah yang benar-benar dibayar pelanggan untuk barang itu — diskon barang, diskon keranjang, dan penukaran poin sudah dibagi proporsional, jadi bukan dikembalikan sesuai harga normal. Pajak memakai tarif yang dikenakan pada pesanan asli.",
          "Barang pengganti dikenakan harga hari ini, tanpa promo atau diskon.",
          "Untuk produk dengan stok yang dilacak, tiap baris retur bisa dikembalikan ke stok (Restok, bawaan) atau dibuang (Buang, sejak v3.5). Restok menambahkan stok kembali. Buang membiarkan stok seperti semula dan memasukkan harga pokok barang saat dijual ke Kerugian stok bulan itu di Laba Rugi. Dana yang dikembalikan, pajak, dan poin sama saja pada kedua pilihan.",
          "Poin yang didapat dari pesanan asli ditarik kembali, poin yang ditukarkan dikembalikan, dan barang pengganti mendapat poinnya sendiri.",
          "Jika pesanan asli adalah penjualan tempo yang belum lunas, tidak ada uang yang berpindah: retur dipotong dari piutang pelanggan, dan barang pengganti yang lebih mahal menambahkan selisihnya ke piutang itu.",
          "Satu pesanan bisa diretur dalam beberapa kali, tetapi tidak boleh melebihi jumlah yang dijual semula; setelah semuanya dikembalikan, jumlah pajak, diskon, dan poin yang dikembalikan persis sama dengan pesanan asli. Batas pemakaian promo tidak dikembalikan oleh retur."
        ]
      },
      {
        "type": "p",
        "text": "Kolom Alasan bersifat opsional, maksimal 100 karakter. Alasan tampil di rincian pesanan dan log aktivitas, dan tidak bisa diedit setelah dikirim."
      },
      {
        "type": "note",
        "text": "Retur tidak dibatasi waktu, tetapi pesanan aslinya wajib ada. Jika retur salah dimasukkan, pilih Batalkan penjualan untuk membatalkan retur tersebut dan jumlah yang bisa diretur kembali seperti semula."
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
    "question": "Bagaimana cara menerima pra-pesan dengan uang muka?",
    "keywords": [
      "pra-pesan",
      "pre-order",
      "uang muka",
      "DP",
      "pengambilan",
      "sisa tagihan",
      "pesan dulu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat bayar, ganti bagian atas layar dari Penjualan ke Pra-pesan, pilih tanggal pengambilan, masukkan uang muka (dari 0 sampai jumlah penuh, dengan pintasan 30% / 50% / lunas), dan pilih cara uang muka dibayar. Tambahkan pelanggan agar Anda bisa menghubunginya soal pengambilan."
      },
      {
        "type": "list",
        "items": [
          "Stok dikurangi saat pra-pesan dibuat, sehingga jumlah yang bisa dijual langsung mencerminkannya. Ini sekadar penanda, bukan penahanan: penjualan berikutnya tetap bisa mengambil unit terakhir. Barang yang stoknya habis menjadi minus dan pulih begitu pesanan pembelian diterima.",
          "Saat pelanggan mengambil barang, ketuk Serahkan di rincian pesanan untuk menerima sisa tagihan. Pesanan lalu menjadi penjualan biasa yang selesai, dan retur berikutnya mengikuti alur retur normal.",
          "Jika pelanggan tidak pernah datang, ketuk Batalkan pesanan di rincian pesanan lalu pilih mengembalikan atau menahan uang muka. Stok ditambahkan kembali.",
          "Struk uang muka dan struk pengambilan akhir memakai nomor yang sama."
        ]
      },
      {
        "type": "p",
        "text": "Di Statistik, pendapatan pra-pesan diakui penuh pada tanggal pengambilan, sedangkan uang muka masuk ke Kas Diterima pada hari dibayar — jadi kedua angka itu berbeda untuk sementara waktu. Lihat “Apa bedanya Pendapatan dan Kas Diterima?”"
      },
      {
        "type": "note",
        "text": "Barang pada pra-pesan tidak bisa diedit; jika pelanggan berubah pikiran, batalkan lalu buat pra-pesan baru. Membuat pra-pesan memerlukan paket Standard atau lebih tinggi. Setelah paket diturunkan, pra-pesan yang sudah ada tetap bisa diambil atau dibatalkan."
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
    "question": "Bisakah pelanggan tetap membeli secara tempo dan membayar belakangan?",
    "keywords": [
      "penjualan tempo",
      "bon",
      "piutang",
      "pelunasan",
      "bayar belakangan",
      "pelanggan tetap"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Pilih Penjualan tempo sebagai metode pembayaran, maka penjualan itu dicatat sebagai tagihan pelanggan. Tagihan harus ada yang menanggungnya, jadi jika belum ada pelanggan, mengetuk Penjualan tempo membuka daftar pelanggan lebih dulu (sejak v3.4; versi sebelumnya meminta Anda memilih pelanggan di keranjang)."
      },
      {
        "type": "p",
        "text": "Untuk menerima pelunasan, ganti bagian atas Pesanan ke Piutang. Piutang dikelompokkan per pelanggan; buka salah satunya untuk melunasi satu pesanan, satu bulan penuh, atau semuanya — setiap kali DingPOS menanyakan bagaimana uangnya dibayar. Satu pesanan juga bisa dilunasi dari halaman rinciannya, dan pelunasan yang salah dimasukkan bisa ditarik kembali dengan Batalkan pelunasan."
      },
      {
        "type": "list",
        "items": [
          "Pendapatan dihitung pada hari barang keluar; Kas Diterima dan poin loyalitas menunggu sampai hari pelunasan.",
          "Pesanan yang belum lunas diberi lencana kuning di daftar, dan rincian pelanggan menunjukkan berapa yang masih terutang.",
          "Retur pada pesanan yang belum lunas tidak mengembalikan uang: jumlahnya dipotong dari piutang pelanggan itu.",
          "Pelanggan yang masih punya pesanan belum lunas tidak bisa dihapus."
        ]
      },
      {
        "type": "note",
        "text": "Membuat penjualan tempo memerlukan paket Standard atau lebih tinggi. Setelah paket diturunkan Anda tidak bisa membuat yang baru, tetapi piutang yang sudah ada tetap bisa dilihat dan dilunasi."
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
    "question": "Bisakah menambahkan catatan ke pesanan, pelanggan, atau pesanan pembelian?",
    "keywords": [
      "catatan",
      "tambah catatan",
      "memo",
      "keterangan",
      "catatan pesanan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Halaman rincian pesanan, pelanggan, dan pesanan pembelian masing-masing punya catatan — ketuk kartu catatan untuk mengedit, maksimal 500 karakter, atau baris “Tambah catatan” selama belum ada catatan. Anda juga bisa menulisnya di formulir saat membuat pelanggan atau pesanan pembelian."
      },
      {
        "type": "p",
        "text": "Catatan tidak bergantung pada status: pesanan yang selesai, pesanan yang dibatalkan, dan retur semuanya bisa diberi catatan atau diedit. Jumlah dan barang pada pesanan sudah tetap saat pembayaran; catatan hanya menyertai dokumen dan tidak pernah mengubah isinya."
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
    "question": "Bagaimana cara membuat produk dengan varian (ukuran, warna)?",
    "keywords": [
      "varian",
      "ukuran",
      "warna",
      "opsi",
      "spesifikasi",
      "varian produk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Di halaman edit produk, ketuk Tambah Opsi di bawah Opsi Varian untuk menambah sebuah opsi (misalnya “Warna”), lalu gunakan “+ Pilihan” untuk menambahkan tiap pilihannya (misalnya Merah, Biru). Jika ada dua opsi atau lebih (misalnya Warna × Ukuran), DingPOS otomatis membuat semua kombinasinya (Merah/S, Merah/M, Biru/S…)."
      },
      {
        "type": "p",
        "text": "Setelah produk punya varian, setiap kombinasi di bawah Harga & Stok Varian memiliki stoknya sendiri, dan harganya mengikuti Harga produk: kombinasi tanpa harga sendiri menampilkan harga produk dengan warna abu-abu dan ikut berubah saat harga produk berubah, sedangkan angka yang Anda ketik menjadi harga milik kombinasi itu sendiri, ditampilkan dengan warna hitam. Misalnya, atur Harga sebuah kaos ke 390 lalu ubah hanya ukuran L menjadi 350: M dan XL dijual seharga 390, dan ketika Harga kemudian menjadi 420, M dan XL ikut menjadi 420 sedangkan L tetap 350. Ikon ⓘ di samping kolom Harga berisi Pakai harga jual produk, yang mengembalikan semua kombinasi agar kembali mengikuti harga produk. Produk yang dibuat sebelum v3.6 mempertahankan setiap harga varian sebagai harga milik kombinasi itu sendiri, dan Harga produk adalah yang terendah di antaranya. Kasir, daftar produk, dan rincian produk menampilkan rentang dari harga terendah sampai tertinggi, seperti “NT$350–NT$390”, atau satu harga jika semua kombinasi harganya sama; pengurutan berdasarkan harga memakai harga kombinasi terendah. Saat bayar, mengetuk produk akan menampilkan pemilih varian sebelum produk dimasukkan ke keranjang."
      },
      {
        "type": "p",
        "text": "Harga pokok bekerja dengan cara yang sama: harga pokok yang kosong menampilkan harga pokok produk dengan warna abu-abu dan ikut berubah saat harga pokok produk berubah, sedangkan angka yang diisi adalah harga pokok milik kombinasi itu sendiri, ditampilkan dengan warna hitam — termasuk angka 0. Pakai harga pokok produk di ikon ⓘ di samping kolom Hrg. pokok untuk menghapus harga pokok sendiri dari semua kombinasi sekaligus."
      },
      {
        "type": "note",
        "text": "Nama opsi dan nama pilihan dibatasi maksimal 20 karakter, dan spasi di awal maupun akhir dipangkas saat Anda menyimpan. Pilihan yang belum Anda isi bukan sebuah kombinasi dan dilewati saat menyimpan. Penyimpanan berhenti dengan kolom yang diberi garis merah jika nama opsi kosong, jika semua pilihan sebuah opsi kosong, atau jika Anda mengosongkan pilihan yang sudah tersimpan di produk; ketik kembali, atau hapus dengan mengetuk ikon ×. Produk dengan varian tidak bisa memakai harga bebas."
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
    "question": "Bisakah saya mengisi harga produk saat bayar, misalnya ongkos kirim atau barang hasil tawar-menawar?",
    "keywords": [
      "harga bebas",
      "harga kustom",
      "isi harga",
      "ongkos kirim",
      "biaya layanan",
      "harga tawar",
      "harga pasar",
      "biaya persentase"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa — jadikan sebagai produk Harga Bebas. Aktifkan Harga Bebas di halaman edit produk dan biarkan harganya kosong; kasir dan daftar produk menampilkan “Harga Bebas” di tempat harga seharusnya berada. Saat bayar, mengetuk produk akan meminta harga lebih dulu; masukkan harganya lalu ketuk Tambah ke Keranjang untuk menambahkannya dengan harga itu."
      },
      {
        "type": "list",
        "items": [
          "0 adalah harga yang valid (misalnya gratis ongkir); kolom yang kosong tidak bisa ditambahkan. Masukkan harga sesuai mode pajak toko Anda, seperti harga lainnya.",
          "Keranjang hanya memuat satu baris per produk harga bebas: mengetuknya lagi membuka baris itu sehingga Anda bisa mengubah harganya.",
          "Sejak v3.3, Dihitung Berdasarkan beralih antara Jumlah dan Persen. Pada 5%, baris ini bernilai 5% dari subtotal barang lain (setelah diskon item, sebelum promo, diskon keranjang, dan penukaran poin), dibulatkan ke angka terdekat (0,5 ke atas) sesuai jumlah desimal mata uang, dan mengikuti keranjang saat barang ditambah, dihapus, atau didiskon. Baris di keranjang tertulis “5% dari keranjang”, dan pesanan mencatat jumlah hasil hitungnya.",
          "Baris harga bebas tidak mendapat diskon item; untuk menagih lebih rendah, ubah harganya. Diskon keranjang, penukaran poin, dan promo (kecuali produknya dikecualikan dari promo) tetap berlaku padanya.",
          "Mengaktifkan Harga Bebas juga mengaktifkan Kecualikan dari promo, sehingga biaya tidak didiskon dan tidak dihitung untuk minimal belanja. Nonaktifkan lagi jika barang hasil tawar-menawar boleh ikut promo.",
          "Setelah terjual, barisnya dikenai pajak, menghasilkan poin, dan dihitung di Statistik seperti barang lain, dan retur mengembalikan harga yang dimasukkan.",
          "Produk dengan varian tidak bisa memakai harga bebas. Produk harga bebas tidak pernah ditawarkan sebagai hadiah atau tambahan berbayar, dan tidak pernah muncul di daftar barang pengganti pada tukar barang."
        ]
      },
      {
        "type": "note",
        "text": "Semua paket memilikinya, dan memasukkan harga tidak pernah memerlukan persetujuan manajer."
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
    "question": "Bagaimana cara kerja barcode di aplikasi kasir?",
    "keywords": [
      "barcode",
      "scan",
      "pemindai",
      "scanner barcode",
      "barcode ganda",
      "kamera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Barcode produk bisa diketik manual atau dipindai dengan kamera. Barcode harus unik — jika saat menyimpan barcode bentrok dengan produk lain, DingPOS akan menunjukkan produk mana yang memakainya."
      },
      {
        "type": "p",
        "text": "Saat pembayaran di kasir, kolom pencarian mencocokkan nama produk sekaligus awalan barcode — ketik barcode untuk langsung memunculkan produknya. Untuk rencana dukungan pemindai barcode fisik, lihat “Apakah DingPOS mendukung pemindai barcode fisik (scanner)?”"
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
    "question": "Bagaimana cara mengubah urutan tampilan produk?",
    "keywords": [
      "urutan",
      "mengurutkan",
      "ubah urutan",
      "atur urutan",
      "seret",
      "taruh di paling depan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Di Produk, ketuk Ubah Urutan lalu seret kartu produk ke posisi yang Anda inginkan. Kasir dan pengelolaan produk memakai satu urutan yang sama, jadi sekali diatur, keduanya ikut berubah."
      },
      {
        "type": "list",
        "items": [
          "Untuk katalog yang besar, menu tiap kartu menawarkan Pindah ke Depan, Pindah ke Belakang, dan Pindah ke Posisi, dan setiap kartu menampilkan posisinya saat ini.",
          "Filter kategori terlebih dahulu untuk mengubah urutan hanya di dalam kategori itu — produk di kategori lain tetap di tempatnya.",
          "Produk baru masuk di paling depan; mengedit detail produk tidak pernah mengubah posisinya."
        ]
      },
      {
        "type": "p",
        "text": "Untuk sementara mengurutkan berdasarkan nama, harga, atau waktu dibuat / diperbarui, gunakan menu Urutkan Berdasarkan. Urutan manual Anda tetap tersimpan, dan beralih kembali ke Urutan Manual akan memulihkannya."
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
    "question": "Bagaimana cara melacak stok barang?",
    "keywords": [
      "persediaan",
      "stok",
      "pelacakan stok",
      "hitung stok",
      "stok menipis",
      "cek stok"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pelacakan persediaan adalah pengaturan per produk — aktifkan di halaman edit produk lalu masukkan jumlah stok saat ini. Setiap varian dari satu produk melacak stoknya sendiri."
      },
      {
        "type": "p",
        "text": "Setelah aktif, penjualan dan pra-pesan otomatis mengurangi stok; pembatalan penjualan (void), retur, dan pra-pesan yang dibatalkan mengembalikannya; dan penerimaan pesanan pembelian menambahkannya. Setiap perubahan tercatat dalam riwayat lengkap. Pada angka 10 atau kurang, stok ditandai menipis dengan warna oranye di daftar produk, kasir, dan rincian produk."
      },
      {
        "type": "p",
        "text": "Ada dua cara mengubah angkanya secara manual:"
      },
      {
        "type": "list",
        "items": [
          "Hitung ulang: ubah angka stok di formulir produk agar sesuai dengan hasil hitungan Anda. Tidak pernah memengaruhi laba rugi.",
          "Sesuaikan Stok (sejak v3.5): di rincian produk, ketuk Sesuaikan Stok, pilih Kurangi atau Tambah, isi jumlahnya, lalu pilih alasan seperti Kedaluwarsa/busuk, Rusak, atau Sampel dan hadiah. Harga pokok barang yang dikurangi dihitung dalam Kerugian stok bulan itu di laba rugi — lihat “Bagaimana cara mencatat stok yang kedaluwarsa, rusak, atau keluar sebagai sampel?”"
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
    "question": "Bagaimana cara mencatat stok yang kedaluwarsa, rusak, atau keluar sebagai sampel?",
    "keywords": [
      "sesuaikan stok",
      "kerugian stok",
      "penyusutan stok",
      "stok dihapus",
      "barang busuk",
      "kedaluwarsa",
      "barang rusak",
      "sampel",
      "perlengkapan toko",
      "hitung ulang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gunakan Sesuaikan Stok. Untuk produk yang stoknya dilacak, ketuk Sesuaikan Stok di rincian produk, pilih Kurangi atau Tambah, atur jumlahnya dengan + dan − (dimulai dari 1; ketuk angkanya untuk mengetikkannya), pilih alasan, lalu tambahkan catatan jika perlu (maksimal 100 karakter). Lembar itu menghitung stok sesudah perubahan, dan baris di bawah alasan menunjukkan apakah perubahan itu masuk ke laba rugi."
      },
      {
        "type": "list",
        "items": [
          "Alasan untuk mengurangi: Dipakai produksi, Kedaluwarsa/busuk, Rusak, Hilang atau dicuri, Dipakai staf, Sampel dan hadiah, Perlengkapan toko, dan Lainnya. Alasan untuk menambah: Buatan sendiri, Ditemukan, dan Lainnya. Lainnya wajib diberi catatan.",
          "Kecuali Dipakai produksi, barang yang dikurangi dihitung dengan harga pokoknya pada saat itu ke dalam Kerugian stok bulan tersebut di laba rugi. Kerugian ini muncul setelah laba kotor dan mengurangi laba bersih; laba kotor dan marginnya tidak berubah. Dipakai produksi hanya mengurangi stok, karena harga pokok bahan sudah termasuk dalam harga pokok produk yang dibuat darinya.",
          "Ditemukan mengurangi Kerugian stok dengan jumlah yang sama. Buatan sendiri dan Lainnya di sisi Tambah hanya menambah stok dan tidak pernah masuk ke laba rugi.",
          "Penyesuaian dihitung pada hari Anda mencatatnya. Penyesuaian tidak bisa diberi tanggal mundur, diedit, atau dihapus; untuk memperbaiki kesalahan, catat Ditemukan atau penyesuaian ke arah sebaliknya.",
          "Produk tanpa harga pokok tetap bisa disesuaikan, tetapi laba rugi tidak bisa menghitung nilainya, dan bulan tersebut mencatat berapa banyak catatan yang tidak punya harga pokok."
        ]
      },
      {
        "type": "p",
        "text": "Mengubah angka stok di formulir produk adalah Hitung ulang: angkanya disesuaikan dengan hasil hitungan Anda dan tidak pernah masuk ke laba rugi. Daftar pergerakan stok di Statistik menyaring penyesuaian stok dan hitung ulang secara terpisah, dan log aktivitas menampilkan alasan serta catatan tiap penyesuaian."
      },
      {
        "type": "note",
        "text": "Sesuaikan Stok memerlukan paket Standard atau yang lebih tinggi. Di Pro, staf yang perannya memerlukan persetujuan untuk Penyesuaian stok manual akan diminta memasukkan PIN manajer saat mengonfirmasi."
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
    "question": "Kenapa stok bisa minus?",
    "keywords": [
      "stok minus",
      "stok negatif",
      "stok habis",
      "stok kurang",
      "koreksi stok",
      "penyesuaian stok"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ini memang disengaja: proses pembayaran tidak pernah diblokir karena stok tidak cukup. Prinsip utama saat kasir beroperasi adalah pelanggan tidak boleh menunggu — angka yang salah di catatan bisa diperbaiki nanti, tetapi penjualan yang terhenti hilang selamanya."
      },
      {
        "type": "p",
        "text": "Stok minus biasanya berarti penambahan stok belum dicatat, atau barang pra-pesan belum tiba (pra-pesan mengurangi stok saat dibuat). Catat penambahan stok dengan menerima pesanan pembelian dan angkanya pulih sendiri. Perbaiki selisih hasil penghitungan stok dengan mengubah angka stok di formulir produk (Hitung ulang); untuk barang yang rusak, kedaluwarsa, atau diberikan gratis, catat alasannya dengan Sesuaikan Stok. Keduanya tersimpan di riwayat pergerakan stok."
      },
      {
        "type": "note",
        "text": "Jika kasir tidak menemukan produk yang stoknya 0, periksa apakah Sembunyikan produk stok habis aktif di Pengaturan → Preferensi Perangkat: selama aktif, iPad ini tidak bisa menambahkan produk stok habis ke keranjang."
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
    "question": "Bagaimana cara mencatat pembelian barang dan pemasok?",
    "keywords": [
      "pesanan pembelian",
      "pembelian",
      "pemasok",
      "terima barang",
      "tambah stok",
      "utang dagang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pembelian di sidebar mengelola pemasok dan pesanan pembelian. Data pemasok menyimpan nama, kontak, telepon, alamat, dan ketentuan pembayaran default: Bayar saat Terima atau Kredit Bulanan."
      },
      {
        "type": "steps",
        "items": [
          "Ketuk Pembelian Baru, pilih pemasok, lalu tambahkan produk, jumlah, dan harga pokok satuan (terisi otomatis dengan harga pokok produk saat ini). Ongkos kirim juga bisa ditambahkan. Untuk barang yang belum diatur sebagai produk, ketuk Produk Baru di pemilih Tambah Produk; produk baru langsung masuk ke pesanan pembelian sebagai satu baris. Jika pemasok belum terdaftar, ketuk Tambah Pemasok di kiri atas daftar pemasok — pemasok baru langsung kembali ke pesanan pembelian.",
          "Draf tidak pernah memengaruhi stok maupun utang — edit atau hapus sesuka Anda.",
          "Saat barang tiba, ketuk Terima stok: stok yang dilacak bertambah, dan pesanan pembelian mendapat nomor lalu terkunci. Secara default, penerimaan juga memperbarui harga pokok tiap produk menjadi harga pokok satuan ini; matikan Sinkronkan harga pokok produk di pesanan pembelian agar harga pokok tidak berubah. Di bawahnya, Masukkan ongkos kirim ke harga pokok (aktif untuk pesanan pembelian baru) membagi ongkos kirim ke setiap baris menurut jumlahnya, sehingga harga pokok yang tertulis di tiap produk sudah termasuk bagiannya: tepung 10 × $30, mentega 1 × $60, dan ongkos kirim $25 membuat harga pokok tepung $32 dan mentega $64."
        ]
      },
      {
        "type": "p",
        "text": "Ketentuan pembayaran menentukan langkah berikutnya: pesanan Bayar saat Terima ditandai lunas, sedangkan pesanan Kredit Bulanan tetap belum lunas di Belum Lunas, tempat Anda bisa melunasinya per pemasok — satu pesanan, bulan ini, atau semuanya."
      },
      {
        "type": "p",
        "text": "Bahan baku yang tidak Anda jual, seperti tepung atau kemasan, bisa dibeli dengan cara yang sama: daftarkan sebagai produk yang tidak dijual — lihat “Bisakah saya menambahkan bahan baku seperti tepung atau kemasan sebagai produk?”"
      },
      {
        "type": "note",
        "text": "Pembelian memerlukan paket Standard atau yang lebih tinggi. Pemasok yang masih memiliki pesanan diterima yang belum lunas tidak bisa dihapus."
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
    "question": "Bisakah saya menambahkan bahan baku seperti tepung atau kemasan sebagai produk?",
    "keywords": [
      "produk tidak dijual",
      "bahan baku",
      "bahan",
      "kemasan",
      "perlengkapan",
      "jual di kasir",
      "pembelian",
      "harga pokok"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Di formulir produk, matikan Jual di kasir di bawah foto (secara default aktif) dan produk itu menjadi tidak dijual: tidak perlu harga, tetap menyimpan harga pokok, barcode, stok, dan variannya, dan daftar produk menampilkan “Tidak dijual” di tempat harga biasanya berada."
      },
      {
        "type": "list",
        "items": [
          "Produk yang tidak dijual tidak pernah muncul di kisi kasir, kategori, pencarian, maupun pemindaian barcode, dan tidak bisa menjadi hadiah, item tambahan, target promo, atau barang pengganti saat tukar barang. Kategori yang hanya berisi produk yang tidak dijual tidak ditampilkan di bilah kategori kasir.",
          "Saat toko memiliki produk yang tidak dijual, tombol filter muncul di kanan atas Produk: pilih Semua produk, Dijual, atau Tidak dijual, bersama dengan pencarian dan kategori.",
          "Pesanan pembelian, penerimaan stok, Sinkronkan harga pokok produk, dan tagihan belum lunas bekerja persis seperti pada produk lain, sehingga harga pokok pembelian dan stok bahan bisa dicatat lewat Pembelian.",
          "Menjual produk lain tidak mengurangi stoknya. Saat Anda memakainya, catat pengurangan dengan Sesuaikan Stok di rincian produk: Dipakai produksi untuk yang masuk ke produk, Perlengkapan toko untuk hal seperti kantong kertas atau pembersih.",
          "Anda bisa mengaktifkan Jual di kasir lagi kapan saja, dan harga serta pajaknya masih tersimpan. Pesanan dan laporan yang sudah dibuat tidak terpengaruh."
        ]
      },
      {
        "type": "p",
        "text": "Bagaimana harga pokoknya masuk ke laba rugi: pembelian tidak dihitung langsung di sana. Untuk produk yang dibuat dari bahan itu, masukkan harga pokoknya ke produk tersebut, dan harga pokok itu dikurangkan saat produk tersebut terjual. Perlengkapan yang tidak termasuk dalam harga pokok produk mana pun dicatat sebagai Perlengkapan toko saat dipakai jika stoknya dilacak, atau sebagai pengeluaran sekali bayar jika tidak. Jangan catat uang yang sama dengan kedua cara, agar tidak terhitung dua kali."
      },
      {
        "type": "note",
        "text": "Produk yang tidak dijual tersedia di semua paket; pembelian, pelacakan stok, dan Sesuaikan Stok memerlukan paket Standard atau yang lebih tinggi."
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
    "question": "Apa bedanya Pendapatan dan Kas Diterima?",
    "keywords": [
      "pendapatan",
      "kas diterima",
      "statistik",
      "laba kotor",
      "dari pendapatan ke laba kotor",
      "uang masuk",
      "rekonsiliasi kas",
      "uang muka",
      "penjualan tempo",
      "pajak"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pendapatan dihitung pada hari barang diserahkan, setelah semua diskon dan sebelum pajak; Kas Diterima dihitung pada hari uangnya masuk, yaitu uang yang Anda terima, termasuk pajak. Di toko yang mengenakan pajak, Kas Diterima lebih tinggi daripada Pendapatan sebesar pajaknya, bahkan untuk pesanan yang dibayar di kasir. Keduanya tampil sebagai dua ubin pertama di baris pertama Statistik, bersama Laba kotor, Pesanan, dan Rata-rata Pesanan."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Baris-baris ubin Statistik dengan Pendapatan dan Kas Diterima berdampingan di baris pertama"
      },
      {
        "type": "h2",
        "text": "Saat Pendapatan dan Kas Diterima berbeda"
      },
      {
        "type": "p",
        "text": "Misalnya, toko dengan harga sudah termasuk pajak menjual barang seharga NT$1,050 termasuk pajak 5%, dan pelanggan membayar di kasir: Pendapatan NT$1,000 dan Kas Diterima NT$1,050. Selain pajak, kedua angka itu berbeda dalam situasi berikut:"
      },
      {
        "type": "list",
        "items": [
          "Penjualan tempo: barang keluar hari ini dan masuk ke Pendapatan hari ini; uangnya masuk ke Kas Diterima pada hari pesanan dilunasi.",
          "Pra-pesan: uang muka masuk ke Kas Diterima saat dibayar; Pendapatan diakui penuh pada tanggal pengambilan.",
          "Uang muka hangus: jika pelanggan membatalkan pra-pesan dan Anda menyimpan uang mukanya, uang itu sudah masuk ke Kas Diterima saat dibayar. Statistik menampilkannya terpisah sebagai Uang muka hangus, dan tidak pernah dihitung sebagai Pendapatan.",
          "Membatalkan (void) pesanan sebelumnya: uang yang dikembalikan masuk ke Kas Diterima pada hari pembatalan, sehingga Kas Diterima hari itu bisa negatif. Pesanan yang dibatalkan itu sendiri dihitung pada tanggal penjualannya dan ditampilkan di subjudul ubin Pesanan.",
          "Pembulatan tunai: selisih lebih atau kurang dari total pesanan akibat Pembulatan tunai dihitung di Kas Diterima, tidak pernah di Pendapatan."
        ]
      },
      {
        "type": "p",
        "text": "Saat salah satu angkanya tidak nol, subjudul ubin Kas Diterima menampilkan Pembulatan tunai atau Uang muka hangus."
      },
      {
        "type": "h2",
        "text": "Pajak dan detail ubin"
      },
      {
        "type": "p",
        "text": "Pajak yang menjadi selisih antara Pendapatan dan Kas Diterima tercantum di Dari Pendapatan ke Laba Kotor, yang dibuka dari bagian bawah ubin Laba kotor. Di sana tampil Pendapatan (termasuk pajak), Pajak, dan Pendapatan (tanpa pajak). Toko di Australia, Inggris Raya, Selandia Baru, dan Singapura melihat nama pajak setempat di sana, misalnya Pendapatan (termasuk GST), GST, dan Pendapatan (tanpa GST)."
      },
      {
        "type": "p",
        "text": "Untuk melihat pajak yang dipungut sebagai bahan pelaporan, buka Laporan pajak dari ubin Pajak."
      },
      {
        "type": "p",
        "text": "Ikon ⓘ pada ubin Pendapatan, Kas Diterima, dan Pesanan menjelaskan aturan ini di dalam aplikasi, termasuk pesanan yang dibatalkan yang tercantum di subjudul ubin Pesanan."
      },
      {
        "type": "h2",
        "text": "Rekonsiliasi dan membaca penjualan"
      },
      {
        "type": "p",
        "text": "Untuk rekonsiliasi, cocokkan Kas Diterima dengan isi laci kasir dan mesin kartu Anda. Kartu Metode Pembayaran di Statistik menampilkan satu baris per metode, dan penjualan yang dibuat sebelum Anda mengganti nama sebuah metode dihitung di bawah nama barunya. Untuk melihat berapa yang terjual dalam suatu periode, lihat Pendapatan. Retur mengurangi Pendapatan pada hari retur dilakukan."
      },
      {
        "type": "note",
        "text": "Pendapatan sebelum pajak hadir di v3.5, dan periode-periode sebelumnya dihitung ulang dengan cara yang sama, jadi toko yang mengenakan pajak melihat Pendapatan yang lebih rendah daripada sebelum pembaruan. Itu koreksi: versi sebelumnya memasukkan pajak ke dalam Pendapatan, dan toko dengan harga belum termasuk pajak bahkan menghitung pajak penjualan yang dipungutnya sebagai Pendapatan."
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
    "question": "Laporan bisa menampilkan periode waktu apa saja?",
    "keywords": [
      "statistik",
      "laporan",
      "periode laporan",
      "periode waktu",
      "minggu ini",
      "bulan ini",
      "rentang kustom",
      "peringkat produk",
      "produk kurang laku",
      "hari × jam",
      "nilai persediaan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pilih Hari ini, Kemarin, Minggu Ini, Bulan Ini, Tahun Ini, atau Semua Waktu di bilah periode di bagian atas Statistik, atau ketuk Kustom untuk memilih tanggal mulai dan tanggal akhir sesuka Anda. Semua kartu di halaman mengikuti periode yang Anda pilih. Minggu Ini mengikuti hari pertama dalam seminggu di perangkat Anda, Bulan Ini dimulai pada tanggal 1, Tahun Ini dimulai pada 1 Januari, Semua Waktu dimulai dari penjualan pertama toko Anda, dan setiap pilihan menampilkan tanggal yang dicakupnya."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Bilah periode di bagian atas Statistik dengan Kustom dipilih dan popover tanggalnya terbuka untuk memilih tanggal Mulai dan Berakhir"
      },
      {
        "type": "h2",
        "text": "Memilih rentang Kustom"
      },
      {
        "type": "p",
        "text": "Gunakan Kustom saat Anda butuh rentang di luar periode kalender bawaan, misalnya periode pelaporan pajak dua bulanan atau per kuartal."
      },
      {
        "type": "steps",
        "items": [
          "Buka Statistik dan ketuk Kustom di bilah periode.",
          "Pilih tanggal mulai dan tanggal akhir di popover.",
          "Konfirmasi tanggal Anda untuk memperbarui laporan."
        ]
      },
      {
        "type": "p",
        "text": "Ubin Pajak dan laporan pajak juga mengikuti periode yang dipilih, jadi menetapkan rentang pelaporan dengan Kustom memperbarui keduanya; lihat artikel laporan pajak terkait untuk detailnya. Di sisi kanan bilah periode, ketuk Bandingkan untuk melihat periode yang dipilih berdampingan dengan periode sebelumnya atau periode yang sama tahun lalu; lihat artikel terkait tentang perbandingan periode untuk detailnya."
      },
      {
        "type": "h2",
        "text": "Ubin dan kartu di halaman"
      },
      {
        "type": "p",
        "text": "Di bawah bilah periode, Statistik menampilkan dua baris ubin angka, diikuti grafik dan kartu ringkasan berpasangan, dengan Saat ini di bagian bawah."
      },
      {
        "type": "list",
        "items": [
          "Baris ubin pertama: Pendapatan, Kas Diterima, Laba kotor, Pesanan, dan Rata-rata Pesanan.",
          "Baris ubin kedua: Total Diskon, Pajak, Laba bersih, Produk Tanpa Harga Pokok, dan Pelanggan yang Membeli.",
          "Pasangan pertama: grafik tren penjualan di samping Harga Pokok dan Laba Kotor.",
          "Pasangan kedua: Peringkat Produk di samping Proporsi per Kategori.",
          "Pasangan ketiga: Metode Pembayaran di samping kartu promo.",
          "Kartu paling bawah: Saat ini."
        ]
      },
      {
        "type": "p",
        "text": "Dua ubin di baris kedua hanya muncul pada kasus tertentu. Pajak, yang ditambahkan di v3.6, hanya muncul untuk toko yang punya pajak atau saat periode yang dipilih berisi penjualan yang dikenai pajak. Laba bersih hanya muncul saat periodenya Bulan Ini atau mencakup tepat satu bulan penuh."
      },
      {
        "type": "note",
        "text": "Jika suatu periode tidak punya pesanan, Statistik hanya menampilkan bilah periode, sebuah pesan, dan Saat ini."
      },
      {
        "type": "h2",
        "text": "Membaca grafik dan Peringkat Produk"
      },
      {
        "type": "p",
        "text": "Menu di kanan atas grafik tren penjualan mengalihkannya antara Pendapatan, Pesanan, Rata-rata Pesanan, dan Pelanggan yang Membeli. Di sebelahnya, grafik Harga Pokok dan Laba Kotor menumpuk harga pokok produk dan laba kotor tiap periode dalam satu batang. Satu hari digambar per jam, sedangkan periode yang lebih panjang mengelompokkan data per hari, minggu, bulan, atau tahun sesuai panjangnya."
      },
      {
        "type": "p",
        "text": "Tekan dan tahan grafik tren penjualan, Harga Pokok dan Laba Kotor, atau Metode Pembayaran untuk menampilkan kartu bacaan satu kelompok. Saat Bandingkan aktif, kartu bacaan grafik tren penjualan menampilkan angka periode ini dan periode pembanding berdampingan. Geser ke kiri atau kanan untuk berpindah antarkelompok; geser ke atas atau bawah pada grafik untuk menggulir halaman seperti biasa."
      },
      {
        "type": "p",
        "text": "Ubah header grafik tren dari Tren ke Hari × jam untuk melihat heatmap tujuh hari × 24 jam. Semakin gelap sebuah sel, semakin banyak penjualan Anda pada jam itu, dan heatmap bisa dialihkan antara pendapatan dan pesanan."
      },
      {
        "type": "p",
        "text": "Peringkat Produk menampilkan 5 produk teratas pada periode yang dipilih. Ketuk kartunya atau ketuk Lihat semua untuk menampilkan setiap produk yang terjual pada periode itu, diurutkan menurut jumlah setelah retur. Produk dengan varian tampil sebagai satu baris per varian."
      },
      {
        "type": "p",
        "text": "Ubah header kartu peringkat ke Produk Kurang Laku untuk menampilkan produk dari yang paling sedikit terjual hingga yang paling banyak. Setiap baris menampilkan stok produk saat ini dan tanggal terakhir produk itu terjual. Produk yang belum pernah terjual diberi tanda Belum pernah terjual, dan secara bawaan hanya produk yang ada stoknya yang ditampilkan. Header Naik-Turun menampilkan produk yang pendapatannya paling naik atau turun dibanding periode pembanding; lihat artikel terkait tentang perbandingan periode."
      },
      {
        "type": "h2",
        "text": "Proporsi per Kategori, tingkat pembelian ulang, dan Saat ini"
      },
      {
        "type": "p",
        "text": "Proporsi per Kategori menampilkan pendapatan dan proporsi tiap kategori, diurutkan dari yang terbesar ke yang terkecil, berdasarkan kategori produk saat ini. Produk tanpa kategori dikelompokkan di bawah Tanpa kategori, dan jumlah semua barisnya persis sama dengan Pendapatan."
      },
      {
        "type": "p",
        "text": "Baris terakhir di ubin Pelanggan yang Membeli menampilkan tingkat pembelian ulang sebagai \"Pembelian ulang … · … anggota kembali\". Angka ini menunjukkan persentase anggota yang berbelanja pada periode yang dipilih dan secara total sudah berbelanja dua kali atau lebih."
      },
      {
        "type": "p",
        "text": "Saat ini menampilkan tiga rincian persediaan dan poin:"
      },
      {
        "type": "list",
        "items": [
          "Nilai persediaan, dihitung dari stok saat ini × harga pokok saat ini.",
          "Setiap mutasi stok pada periode yang dipilih.",
          "Poin yang dimiliki pelanggan dan belum ditukar, beserta potongan maksimum yang bisa diberikan."
        ]
      },
      {
        "type": "p",
        "text": "Nilai persediaan dan poin yang belum ditukar adalah saldo saat ini, jadi mengubah periode di bagian atas tidak mengubahnya."
      },
      {
        "type": "note",
        "text": "Staf melihat Statistik dengan izin Statistik; jumlah Nilai persediaan juga memerlukan izin Harga pokok & laba."
      },
      {
        "type": "note",
        "text": "Periode kalender hadir di v2.4; versi sebelumnya menawarkan rentang bergulir (Hari ini / 7 Hari / 30 Hari / Semua Waktu). Jika Anda masih melihat opsi itu, perbarui DingPOS dari App Store."
      }
    ],
    "related": [
      "compare-periods",
      "revenue-vs-cash",
      "profit-not-tracked",
      "tax-report"
    ]
  },
  {
    "slug": "compare-periods",
    "category": "reports",
    "since": "3.0",
    "question": "Bagaimana cara membandingkan penjualan dengan minggu lalu, bulan lalu, atau tahun lalu?",
    "keywords": [
      "bandingkan",
      "perbandingan periode",
      "minggu lalu",
      "bulan lalu",
      "tahun lalu",
      "periode yang sama tahun lalu",
      "produk naik-turun",
      "statistik",
      "pertumbuhan penjualan",
      "tingkat pembelian ulang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ketuk Bandingkan di sisi kanan bilah periode pada Statistik, lalu pilih periode pembanding, seperti Minggu lalu atau Tahun lalu. Setiap ubin kemudian menampilkan seberapa besar angkanya naik atau turun, misalnya \"▼ 3% vs Bulan lalu\", dengan angka periode pembanding di bawahnya."
      },
      {
        "type": "h2",
        "text": "Mengaktifkan perbandingan"
      },
      {
        "type": "steps",
        "items": [
          "Buka Statistik dari bilah samping.",
          "Pilih periode di bagian atas.",
          "Ketuk Bandingkan di sisi kanan bilah periode.",
          "Pilih salah satu opsi perbandingan dari menu."
        ]
      },
      {
        "type": "p",
        "text": "Pilihan yang tersedia bergantung pada periode yang Anda pilih:"
      },
      {
        "type": "list",
        "items": [
          "Tidak ada mematikan perbandingan.",
          "Minggu lalu membandingkan satu hari dengan hari yang sama minggu lalu, atau minggu ini dengan minggu lalu.",
          "Bulan lalu membandingkan bulan ini dengan bulan lalu.",
          "Tahun lalu membandingkan tahun ini dengan tahun lalu, atau membandingkan periode yang dipilih dengan periode yang sama tahun lalu.",
          "Sebelumnya membandingkan rentang kustom dengan rentang berjumlah hari yang sama tepat sebelum rentang itu."
        ]
      },
      {
        "type": "p",
        "text": "Saat perbandingan aktif, Statistik menambahkan perubahan dan angka periode pembanding ke setiap ubin kecuali Pajak, Laba bersih, dan Produk Tanpa Harga Pokok. Pendapatan, Kas Diterima, Laba kotor, Pesanan, Rata-rata Pesanan, Total Diskon, dan Pelanggan yang Membeli masing-masing menampilkan baris perbandingan seperti \"▼ 3% vs Bulan lalu\"."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Statistik pada Minggu Ini dengan Bandingkan diatur ke Minggu lalu, menampilkan bilah perbandingan dan baris ubin pertama dengan perubahan dan angka pembanding tiap ubin di bawahnya",
        "caption": "Ketuk baris perbandingan mana pun di bawah ubin untuk membuka Perbandingan periode dan melihat angka kedua periode."
      },
      {
        "type": "p",
        "text": "Perubahan pada Total Diskon selalu berwarna abu-abu, karena diskon yang lebih besar tidak dengan sendirinya baik atau buruk. Ketuk baris perbandingan mana pun untuk membuka Perbandingan periode, yang mencantumkan angka kedua periode. Grafik tren menambahkan garis yang lebih terang untuk periode pembanding. Selama suatu periode masih berjalan, periode pembanding dipotong pada saat yang sama."
      },
      {
        "type": "h2",
        "text": "Naik-Turun"
      },
      {
        "type": "p",
        "text": "Ubah header kartu peringkat ke Naik-Turun untuk melihat 3 produk yang pendapatannya paling naik dan 3 produk yang paling turun dibanding periode pembanding. Setiap baris menampilkan pendapatan kedua periode beserta selisihnya, dan setiap varian dibandingkan dengan dirinya sendiri."
      },
      {
        "type": "p",
        "text": "Pilih periode di bawah Bandingkan terlebih dahulu. Saat Bandingkan diatur ke Tidak ada, atau saat periodenya Semua Waktu, kartu meminta Anda memilih periode pembanding. Ketuk kartu atau Lihat semua untuk membuka daftar lengkap Produk naik-turun, yang dibagi menjadi Naik dan Turun."
      },
      {
        "type": "h2",
        "text": "Heatmap dan tingkat pembelian ulang"
      },
      {
        "type": "p",
        "text": "Dengan perbandingan aktif, heatmap Hari × jam pada grafik tren juga menunjukkan jam mana yang naik dan mana yang turun, dan tingkat pembelian ulang pada ubin Pelanggan yang Membeli mendapat satu baris tambahan berisi perubahan dalam poin persentase dan tingkat periode pembanding."
      }
    ],
    "related": [
      "report-periods",
      "revenue-vs-cash"
    ]
  },
  {
    "slug": "profit-not-tracked",
    "category": "reports",
    "question": "Bagaimana laba kotor dilaporkan jika saya tidak mengisi harga pokok?",
    "keywords": [
      "harga pokok",
      "laba",
      "laba kotor",
      "margin",
      "margin kotor",
      "laporan",
      "tidak dilacak",
      "harga pokok kosong",
      "produk tanpa harga pokok",
      "dari pendapatan ke laba kotor"
    ],
    "content": [
      {
        "type": "p",
        "text": "Harga pokok adalah kolom opsional, jadi produk tanpa harga pokok tidak diikutkan dalam laba kotor, sedangkan pendapatannya tetap dihitung penuh. Ubin Produk Tanpa Harga Pokok di Statistik menunjukkan berapa produk yang terjual atau diretur pada periode itu tanpa harga pokok, misalnya “12 produk”. Harga pokok 0 dihitung sebagai harga pokok dan tidak dicantumkan; saat semua produk sudah punya harga pokok, ubin menampilkan “0 produk · data harga pokok lengkap”."
      },
      {
        "type": "h2",
        "text": "Menemukan produk tanpa harga pokok"
      },
      {
        "type": "p",
        "text": "Di Statistik, ketuk ubin Produk Tanpa Harga Pokok atau Lihat produk untuk membuka Produk Tanpa Harga Pokok. Lembar ini mencantumkan produk dari yang tertinggi ke terendah menurut pendapatan yang tidak masuk ke laba kotor."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Lembar Produk Tanpa Harga Pokok yang mencantumkan produk diurutkan menurut pendapatan yang tidak masuk ke laba kotor"
      },
      {
        "type": "steps",
        "items": [
          "Ketuk sebuah baris di Produk Tanpa Harga Pokok untuk membuka produknya.",
          "Ketuk Edit dan isi harga pokok di Harga pokok (opsional).",
          "Kembali ke Produk Tanpa Harga Pokok untuk melihat baris itu ditandai Harga pokok ditambahkan."
        ]
      },
      {
        "type": "p",
        "text": "Produk dengan varian ditandai Harga pokok ditambahkan hanya setelah setiap varian yang terjual tanpa harga pokok punya harga pokok, baik harga pokoknya sendiri maupun harga pokok produk yang diikutinya. Sejak v3.6, pesanan pembelian juga bisa membagi ongkos kirimnya ke harga pokok produk yang dicatatnya saat Masukkan ongkos kirim ke harga pokok diaktifkan."
      },
      {
        "type": "note",
        "text": "Harga pokok yang Anda tambahkan hanya memengaruhi penjualan berikutnya. Penjualan yang sudah terjadi tidak dihitung ulang."
      },
      {
        "type": "h2",
        "text": "Mengisi harga pokok dan pajak"
      },
      {
        "type": "p",
        "text": "Di formulir produk, kolom harga pokok bernama Harga pokok (opsional) di setiap toko. Di toko yang punya pajak, ikon ⓘ muncul di samping Harga pokok (opsional) untuk menunjukkan cara pajak berlaku, tergantung pada Kreditkan pajak masukan:"
      },
      {
        "type": "list",
        "items": [
          "Kreditkan pajak masukan aktif: isi harga pokok sebelum pajak yang bisa Anda kreditkan. Catatan ⓘ berbunyi: “Isi harga pokok tanpa pajak yang dapat dikreditkan, yang dicatat sebagai pajak masukan. Pajak yang tidak dapat dikreditkan termasuk dalam harga pokok.”",
          "Kreditkan pajak masukan nonaktif: isi harga yang Anda bayar, dikurangi pajak yang bisa dikreditkan. Catatan ⓘ berbunyi: “Pajak yang dapat dikreditkan tidak termasuk harga pokok; pajak yang tidak dapat dikreditkan termasuk. Jika Anda mengkreditkan pajak masukan, aktifkan Kreditkan pajak masukan di Info Toko.”"
        ]
      },
      {
        "type": "p",
        "text": "Jika toko Anda melaporkan pajak masukan, aktifkan Kreditkan pajak masukan di Info Toko."
      },
      {
        "type": "h2",
        "text": "Membaca rincian laba kotor"
      },
      {
        "type": "p",
        "text": "Laba kotor adalah pendapatan setelah semua diskon (diskon barang dan keranjang, promo, penukaran poin) dan sebelum pajak, dikurangi harga pokok. Margin adalah laba kotor ÷ pendapatan produk yang punya harga pokok, sehingga produk tanpa harga pokok tidak menurunkan margin. Retur menarik kembali, pada hari retur, laba kotor yang pernah dihasilkan barang-barang itu."
      },
      {
        "type": "p",
        "text": "Ketuk ubin Laba kotor di Statistik untuk membuka Dari Pendapatan ke Laba Kotor, yang mengurangkan baris demi baris:"
      },
      {
        "type": "list",
        "items": [
          "Pendapatan (termasuk pajak)",
          "Pajak",
          "Pendapatan (tanpa pajak)",
          "Pendapatan tanpa harga pokok",
          "Harga pokok produk",
          "Laba kotor dan margin"
        ]
      },
      {
        "type": "p",
        "text": "Jumlah baris-barisnya tepat sama dengan ubin Laba kotor. Toko di Australia, Inggris Raya, Selandia Baru, dan Singapura melihat nama pajak setempat pada baris pajak, misalnya Pendapatan (termasuk GST)."
      },
      {
        "type": "note",
        "text": "Perhitungan laba kotor ini hadir di v3.1. Versi sebelumnya hanya mengurangi diskon barang manual dan menghitung pajak yang sudah termasuk sebagai laba, jadi setelah pembaruan, periode dengan diskon atau pajak termasuk menampilkan laba kotor yang lebih rendah. Itu koreksi, bukan data yang hilang."
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
    "question": "Bagaimana cara melihat laba bersih toko saya setiap bulan?",
    "keywords": [
      "laba rugi",
      "p&l",
      "laba bersih",
      "laba kotor",
      "untung bulanan",
      "pengeluaran tetap",
      "laba operasional",
      "laporan laba rugi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Laba Rugi, di bawah Statistik pada bilah samping, untuk melihat laba bersih tiap bulan dan cara menghitungnya. Daftarnya berjalan dari yang terbaru ke yang terlama mulai dari bulan pertama Anda beraktivitas, dengan bulan berjalan ditandai Berjalan dan header tiap tahun menjumlahkan laba bersih bulan-bulannya yang sudah selesai. Baris pertamanya, Semua Pengeluaran, membuka seluruh pengeluaran tanpa melihat bulannya."
      },
      {
        "type": "h2",
        "text": "Rincian bulanan"
      },
      {
        "type": "steps",
        "items": [
          "Buka Laba Rugi, di bawah Statistik pada bilah samping.",
          "Ketuk sebuah bulan untuk melihat cara laba bersihnya dihitung."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Halaman bulan di Laba Rugi dengan keterangan Berjalan, laba bersih, dan rincian lengkap dari pendapatan sampai pengeluaran"
      },
      {
        "type": "p",
        "text": "Halaman bulan mencantumkan setiap baris secara berurutan dari penjualan sampai laba bersih. Baris dari pendapatan sampai laba kotor memakai nama dan angka yang sama dengan Dari Pendapatan ke Laba Kotor di Statistik."
      },
      {
        "type": "list",
        "items": [
          "Pendapatan (termasuk pajak), Pajak, dan Pendapatan (tanpa pajak): pendapatan dengan pajak termasuk, jumlah pajaknya, dan pendapatan setelah semua diskon dan sebelum pajak, dihitung pada hari barang diserahkan. Toko di Australia, Inggris Raya, Selandia Baru, dan Singapura melihat nama pajak setempat.",
          "Pendapatan tanpa harga pokok: dikurangkan sebelum harga pokok produk, hanya tampil jika tidak nol.",
          "Harga pokok produk: harga pokok barang yang terjual, berdasarkan harga pokok pada produk Anda.",
          "Laba kotor: ditampilkan beserta marginnya.",
          "Pendapatan tanpa harga pokok: ditambahkan kembali setelah laba kotor jika tidak nol.",
          "Kerugian stok: hanya tampil jika bulan itu punya kerugian stok; harga pokok barang yang dikeluarkan lewat Sesuaikan Stok karena kedaluwarsa, rusak, diberikan gratis, dan sejenisnya, ditambah retur yang dibuang. Posisinya setelah laba kotor. Lihat “Bagaimana cara mencatat stok yang kedaluwarsa, rusak, atau keluar sebagai sampel?” Bulan itu juga punya bagian Kerugian Stok yang menjumlahkannya menurut alasan.",
          "Biaya pemrosesan (perkiraan): biaya yang diperkirakan dari tarif metode pembayaran Anda.",
          "Uang muka hangus: hanya tampil jika tidak nol; uang muka yang Anda simpan saat pra-pesan dibatalkan.",
          "Pembulatan tunai: hanya tampil jika tidak nol; selisih lebih atau kurang dari total pesanan yang timbul saat tunai dibulatkan ke koin yang beredar.",
          "Pengeluaran tetap dan Pengeluaran sekali bayar: yang Anda catat untuk bulan itu — lihat “Bagaimana cara mencatat sewa, gaji, dan pengeluaran lain?”",
          "Laba bersih: dihitung sebagai pendapatan (tanpa pajak) − harga pokok produk − kerugian stok − biaya pemrosesan + uang muka hangus + pembulatan tunai − pengeluaran tetap − pengeluaran sekali bayar."
        ]
      },
      {
        "type": "h2",
        "text": "Bulan yang sedang berjalan"
      },
      {
        "type": "p",
        "text": "Selama sebulan masih berjalan, Laba Rugi sudah mengurangkan seluruh pengeluaran tetap bulan itu. Misalnya, pada 5 Oktober, jika pendapatan (tanpa pajak) sejauh ini 20,000, harga pokok produk 10,000, dan pengeluaran tetap 65,700, laba bersih adalah −55,700 dan ditandai Berjalan · pengeluaran sebulan penuh dikurangkan."
      },
      {
        "type": "p",
        "text": "Karena pengeluaran sebulan penuh sudah dihitung, laba bersih bulan berjalan tidak pernah ditampilkan berwarna merah, baik di daftar bulan, di halaman bulan, maupun di ubin Laba bersih di Statistik. Bulan yang sudah selesai dan berakhir rugi menampilkan laba bersihnya dengan warna peringatan."
      },
      {
        "type": "h2",
        "text": "Grafik"
      },
      {
        "type": "p",
        "text": "Hingga tiga grafik menyusul setelah rincian: laba bersih dari bulan ke bulan, porsi tiap pengeluaran tetap, dan tren pengeluaran tetap. Kedua grafik tren mencakup paling banyak 12 bulan hingga bulan yang Anda buka, dan baru muncul setelah ada sedikitnya dua bulan untuk dibandingkan, dihitung sejak bulan penjualan atau pengeluaran pertama Anda. Grafik porsi membutuhkan pengeluaran tetap di bulan itu; selama belum ada, bagian tersebut menampilkan Tambah Pengeluaran Tetap."
      },
      {
        "type": "h2",
        "text": "Berpindah antara Statistik dan Laba Rugi"
      },
      {
        "type": "p",
        "text": "Statistik dan Laba Rugi saling terhubung. Jika periode di Statistik adalah bulan ini atau tepat satu bulan penuh, baris ubin kedua menambahkan ubin Laba bersih yang ditandai Berjalan · pengeluaran sebulan penuh dikurangkan selama bulan itu masih berjalan. Ketuk ubin itu untuk melihat rincian bulan tersebut dari laba kotor sampai laba bersih. Untuk periode lain, ketuk Lihat laba rugi bulanan di baris terakhir Dari Pendapatan ke Laba Kotor."
      },
      {
        "type": "p",
        "text": "Sebaliknya, Lihat laporan Oktober di bawah judul sebuah bulan di Laba Rugi membuka Statistik pada bulan itu (rentang kustom 1–31 Oktober); untuk bulan yang sedang berjalan, yang terbuka adalah Bulan Ini."
      },
      {
        "type": "note",
        "text": "Laba bersih adalah laba operasional sebelum pajak penghasilan, dihitung dari data yang tercatat di DingPOS, bukan laporan pajak. Jika ada produk yang terjual tanpa harga pokok, bulan itu tetap menampilkan laba bersih yang ditandai Belum termasuk harga pokok N produk, dan Anda bisa mengetuknya untuk melihat produk mana saja."
      },
      {
        "type": "note",
        "text": "Laba Rugi tersedia di semua paket. Jika memakai akun staf, membukanya memerlukan izin Laba rugi & pengeluaran, yang secara default perlu persetujuan bagi Manajer dan Staf karena halaman ini menampilkan harga pokok produk dan gaji."
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
    "question": "Bagaimana cara mencatat sewa, gaji, dan pengeluaran lain?",
    "keywords": [
      "pengeluaran",
      "sewa",
      "gaji",
      "listrik dan air",
      "pengeluaran tetap",
      "pengeluaran sekali bayar",
      "semua pengeluaran",
      "biaya operasional",
      "pembagian pengeluaran",
      "laba rugi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Di Laba Rugi, ketuk Tambah Pengeluaran lalu pilih Tambah Pengeluaran Tetap atau Tambah Pengeluaran Sekali Bayar untuk mencatat sewa, gaji, listrik dan air, serta biaya operasional lainnya. Setiap pengeluaran dihitung pada bulan yang menjadi bebannya, bukan bulan Anda membayarnya, dan laba bersih setiap bulan ikut diperbarui. Pengeluaran tetap berulang setiap bulan dengan perubahan jumlah yang bersifat opsional, sedangkan pengeluaran sekali bayar dihitung dalam satu bulan atau dibagi ke beberapa bulan."
      },
      {
        "type": "h2",
        "text": "Pengeluaran Tetap"
      },
      {
        "type": "p",
        "text": "Pengeluaran tetap adalah biaya berulang yang Anda bayar setiap bulan, seperti sewa tempat, listrik, atau gaji."
      },
      {
        "type": "steps",
        "items": [
          "Buka Laba Rugi.",
          "Ketuk Tambah Pengeluaran.",
          "Pilih Tambah Pengeluaran Tetap.",
          "Isi nama, jumlah per bulan, dan bulan mulainya. Pilih bulan sebelumnya untuk mengisi data bulan-bulan yang terlewat.",
          "Ketuk ✓ untuk menyimpan."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Formulir pengeluaran tetap yang menampilkan nama, jumlah per bulan, bulan mulai, dan perubahan jumlah"
      },
      {
        "type": "p",
        "text": "Saat jumlahnya berubah, buka pengeluaran itu lalu ketuk Ubah Jumlah. Pilih bulan perubahan itu mulai berlaku, lalu pilih Mulai bulan ini untuk perubahan yang berlanjut seperti kenaikan sewa, atau Hanya bulan ini untuk selisih di satu bulan saja seperti tagihan listrik bulan ini. Setiap perubahan tercantum di formulir, dan Anda bisa membuka entri mana pun untuk mengedit atau menghapusnya."
      },
      {
        "type": "p",
        "text": "Saat Anda berhenti membayar pengeluaran tetap, atur Bulan terakhir dihitung. Bulan itu dan bulan-bulan sebelumnya tetap dihitung di Laba Rugi, sedangkan bulan-bulan berikutnya tidak lagi memasukkannya."
      },
      {
        "type": "h2",
        "text": "Perubahan terjadwal di Semua Pengeluaran"
      },
      {
        "type": "p",
        "text": "Di Semua Pengeluaran, setiap baris pengeluaran tetap menampilkan apa yang sudah dijadwalkan ke depan. Baris itu menggabungkan bulan mulainya dengan perubahan jumlah terjadwal berikutnya dan bulan terakhir dihitung. Misalnya, sebuah baris bisa berbunyi Sejak Januari 2026 · $420/bln mulai Desember 2026 · Terakhir dihitung Maret 2027."
      },
      {
        "type": "p",
        "text": "Jumlah di sebelah kanan tetap jumlah bulanan saat ini, bukan jumlah yang akan datang. Perubahan yang diatur sebagai Hanya bulan ini tidak dicantumkan di baris itu."
      },
      {
        "type": "h2",
        "text": "Pengeluaran Sekali Bayar"
      },
      {
        "type": "p",
        "text": "Pengeluaran sekali bayar adalah biaya yang dibayar satu kali, seperti renovasi, peralatan, asuransi yang dibayar di muka, atau satu tagihan."
      },
      {
        "type": "steps",
        "items": [
          "Buka Laba Rugi.",
          "Ketuk Tambah Pengeluaran.",
          "Pilih Tambah Pengeluaran Sekali Bayar.",
          "Isi jumlah dan tanggal.",
          "Atur Bulan dihitung untuk satu bulan, atau aktifkan Bagi ke beberapa bulan.",
          "Ketuk ✓ untuk menyimpan."
        ]
      },
      {
        "type": "p",
        "text": "Tanpa pembagian, Anda tetap bisa memilih Bulan dihitung agar biaya masuk ke bulan yang menjadi bebannya. Misalnya, tagihan Oktober yang baru datang di November bisa dihitung di Oktober dengan tanggal aslinya tetap tersimpan."
      },
      {
        "type": "p",
        "text": "Untuk renovasi, peralatan, atau asuransi yang dibayar di muka, aktifkan Bagi ke beberapa bulan, pilih 2 sampai 120 bulan, lalu pilih Bulan pertama dihitung. Formulir menampilkan pratinjau berapa yang dihitung tiap bulan dan bulan mana saja yang tercakup."
      },
      {
        "type": "p",
        "text": "Jika pembagian berakhir lebih awal, misalnya polis asuransi dibatalkan, buka pengeluaran itu dan gunakan Akhiri Pembagian Lebih Awal. Sisa jumlahnya dihitung pada bulan yang Anda pilih."
      },
      {
        "type": "h2",
        "text": "Pajak masukan pada pengeluaran"
      },
      {
        "type": "p",
        "text": "Saat Kreditkan pajak masukan aktif, Anda bisa mencatat nomor faktur dan pajak yang dapat dikreditkan pada pengeluaran sekali bayar, serta mencatat setiap faktur pengeluaran tetap di bagian Faktur lewat Catat Faktur. Jumlah yang dihitung di Laba Rugi tetap jumlah yang ditanggung toko, dan artikel pajak masukan terkait menjelaskan cara kerja pajak yang dapat dikreditkan."
      },
      {
        "type": "note",
        "text": "Isi jumlah yang benar-benar ditanggung toko, tanpa pajak yang bisa diklaim kembali. Stok yang akan dijual dan bahan baku untuk membuatnya dicatat lewat Pembelian, karena nilainya masuk ke harga pokok produk saat terjual. Perlengkapan dengan stok yang dilacak dicatat lewat Sesuaikan Stok saat dipakai, dengan alasan Perlengkapan toko, bukan sebagai pengeluaran. Uang jaminan, pokok pinjaman, dan uang yang diambil pemilik bukan pengeluaran. Perubahan tersimpan sekaligus saat Anda mengetuk ✓, dan perubahan yang menjangkau bulan yang sudah selesai lebih dulu memberi tahu laba bersih bulan mana saja yang akan berubah."
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
    "question": "Bagaimana cara mengekspor laporan pajak untuk akuntan saya?",
    "keywords": [
      "ekspor laporan pajak",
      "Laporan Pajak",
      "ekspor",
      "buku kerja Excel",
      "CSV",
      "laporan PDF",
      "ringkasan pajak",
      "entri pajak masukan",
      "akuntan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Laporan Pajak, ketuk Ekspor di kanan atas, lalu pilih salah satu format: CSV, Buku kerja Excel (XLSX), atau Laporan PDF. File terbuka dalam pratinjau layar penuh, tempat Anda bisa mengetuk tombol bagikan untuk menyimpannya atau mengirimkannya ke akuntan. Semua format memuat angka yang sama dengan yang tampil di layar."
      },
      {
        "type": "h2",
        "text": "Cara mengekspor"
      },
      {
        "type": "steps",
        "items": [
          "Buka Statistik dan pilih periodenya, misalnya rentang kustom dari 1 November sampai 31 Desember untuk periode pelaporan dua bulanan, atau rentang per kuartal.",
          "Ketuk ubin Pajak untuk membuka Laporan Pajak. Ekspor mencakup persis periode itu.",
          "Ketuk Ekspor di kanan atas Laporan Pajak. Sebuah menu mencantumkan format yang tersedia, dengan format yang terakhir diekspor di iPad ini diberi tanda centang.",
          "Pilih sebuah format, misalnya Buku kerja Excel (XLSX), untuk membuka pratinjau layar penuh. File CSV tampil sebagai tabel, dan buku kerja Excel memungkinkan Anda berpindah antarlembar, misalnya memeriksa Summary lebih dulu.",
          "Ketuk tombol bagikan di kanan atas pratinjau untuk menyimpan file atau mengirimkannya ke akuntan. Menutup pratinjau akan kembali ke Laporan Pajak."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Laporan Pajak dengan menu Ekspor terbuka yang mencantumkan format file"
      },
      {
        "type": "p",
        "text": "Jika ekspor gagal, aplikasi menampilkan Tidak dapat mengekspor file dan Coba ekspor lagi. Tidak ada file yang dibuat; ekspor ulang saja."
      },
      {
        "type": "h2",
        "text": "Format ekspor"
      },
      {
        "type": "list",
        "items": [
          "Ringkasan pajak (CSV): Satu baris per baris laporan (setiap pajak dan tarif, tarif nol, dan tidak kena pajak), berisi penjualan, retur, dan bersih, sebelum pajak dan pajaknya.",
          "Semua dokumen (CSV): Satu baris per dokumen di bawah setiap pajak, dengan tanggal dan jam, nomor struk, jenis dokumen (penjualan, retur, atau pembalikan dari pembatalan penjualan), nama pelanggan, jumlah, dan metode pembayaran. Pembatalan penjualan (void) menambahkan baris pembalikan pada tanggal pembatalan.",
          "Ringkasan harian (CSV): Ringkasan per hari, lalu tabel kedua berisi pembayaran per hari dan metode.",
          "Entri pajak masukan (CSV): Hanya tampil jika laporan punya kartu pajak masukan. Satu baris per entri pajak masukan pada setiap pesanan pembelian dan pengeluaran, dengan pemasok, ID pajak pemasok, dan nomor faktur.",
          "Buku kerja Excel (XLSX): Lembar Summary, Documents, dan Daily yang sesuai dengan tiga CSV penjualan, ditambah Purchases saat laporan menampilkan pajak masukan. Jumlah disimpan sebagai sel angka, dan lebar setiap kolom disesuaikan dengan isinya sehingga tidak ada yang terpotong saat dibuka.",
          "Laporan PDF: Laporan A4 dalam bahasa aplikasi dengan nama toko, periode, mode pajak, mata uang, dan bagian-bagian laporan. Toko di Australia, Selandia Baru, Singapura, dan Inggris Raya mendapat Kotak formulir pajak lebih dulu; kartu pajak masukan menyusul jika ditampilkan. Di pratinjau, tanda tangani atau beri anotasi dengan Markup untuk membagikan file yang sudah ditandai; mengekspor periode yang sama lagi akan menghasilkan salinan bersih."
        ]
      },
      {
        "type": "h2",
        "text": "Format untuk perangkat lunak akuntansi"
      },
      {
        "type": "p",
        "text": "File CSV memakai UTF-8 dan dipisahkan koma, dengan nama kolom bahasa Inggris yang tetap di bahasa aplikasi mana pun agar perangkat lunak akuntansi bisa membacanya. Jumlah memakai desimal mata uangnya dan tanda minus, tanpa simbol atau pemisah ribuan (misalnya 80.97, -40.00, atau 1000 untuk toko yen). Tanggal berbentuk 2026-11-03."
      },
      {
        "type": "p",
        "text": "Sel teks yang diawali =, +, -, atau @ (misalnya pelanggan bernama =1+1) mendapat tanda ' di depannya agar spreadsheet menampilkan teks, bukan menjalankan rumus. Jumlah tidak pernah diberi tanda itu."
      },
      {
        "type": "p",
        "text": "Nama file memuat periodenya, seperti tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx, dan tax-report_2026-11-01_2026-11-30.pdf, sehingga file dari periode berbeda tidak pernah saling menimpa."
      },
      {
        "type": "h2",
        "text": "Izin dan privasi"
      },
      {
        "type": "p",
        "text": "Semua paket bisa mengekspor, termasuk Lite. Staf memerlukan izin Statistik, sama seperti untuk Laporan Pajak."
      },
      {
        "type": "p",
        "text": "File dengan pajak masukan lebih dulu meminta persetujuan yang dibutuhkan kartunya: Harga pokok & laba untuk pesanan pembelian dan Laba rugi & pengeluaran untuk pengeluaran. Ini berlaku untuk Entri pajak masukan (CSV), serta Buku kerja Excel (XLSX) dan Laporan PDF saat kartu pajak masukan tampil. Jika dibatalkan, tidak ada file yang dibuat; tiga CSV penjualan tidak pernah memintanya."
      },
      {
        "type": "note",
        "text": "Semua dokumen (CSV) berisi nama pelanggan, dan file pajak masukan berisi nama pemasok dan ID pajak. Bagikan hanya kepada orang yang memang berhak melihatnya."
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
    "question": "Bagaimana cara mencatat pajak masukan (PPN, VAT, atau GST atas pembelian)?",
    "keywords": [
      "pajak masukan",
      "PPN masukan",
      "VAT",
      "GST",
      "kreditkan pajak masukan",
      "pajak masukan pada pesanan pembelian",
      "pajak masukan pada pengeluaran",
      "ID pajak pemasok",
      "pesanan pembelian",
      "laporan pajak",
      "faktur pemasok"
    ],
    "content": [
      {
        "type": "p",
        "text": "Aktifkan Kreditkan pajak masukan di Pengaturan → Info Toko untuk mencatat pajak yang dapat dikreditkan dari faktur pemasok pada pesanan pembelian dan pengeluaran. Kedua formulir itu lalu mendapat bagian pajak masukan tempat Anda menyalin pajak yang dapat dikreditkan dari setiap faktur. Laporan pajak mencantumkannya di dua kartu, Pajak Masukan pada Pesanan Pembelian dan Pajak Masukan pada Pengeluaran."
      },
      {
        "type": "h2",
        "text": "Mengaktifkan Kreditkan pajak masukan"
      },
      {
        "type": "steps",
        "items": [
          "Buka Pengaturan → Info Toko dan temukan kartu pajak.",
          "Di bawah Kenakan pajak, aktifkan Kreditkan pajak masukan."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Kartu pajak di Info Toko dengan Kreditkan pajak masukan aktif dan petunjuknya di bawah"
      },
      {
        "type": "p",
        "text": "Kreditkan pajak masukan hanya muncul jika toko punya setidaknya satu pajak, dan awalnya nonaktif untuk toko baru serta setelah pembaruan. Mengubahnya langsung tersimpan dan tercatat di bawah Pengaturan pajak di Log aktivitas. Saat aktif, isi harga beli dan harga pokok produk sebelum pajak yang dapat dikreditkan; pajak yang tidak dapat dikreditkan tetap masuk ke harga pokok."
      },
      {
        "type": "note",
        "text": "Semua paket punya sakelar Kreditkan pajak masukan, sedangkan Pembelian memerlukan paket Standard atau lebih tinggi. Menonaktifkannya menyembunyikan kolom pada catatan baru; catatan yang sudah ada tetap menyimpan pajak masukan dan jumlah terutangnya, dan laporan pajak periode lalu tidak berubah."
      },
      {
        "type": "h2",
        "text": "Pesanan pembelian"
      },
      {
        "type": "steps",
        "items": [
          "Buka Pembelian dan ketuk Pembelian baru.",
          "Isi harga satuan sebelum pajak yang dapat dikreditkan, lalu gulir melewati biaya tambahan sampai ke Pajak Masukan.",
          "Periksa Tanggal faktur, yang secara default sama dengan tanggal pesanan, dan tambahkan Nomor faktur serta ID pajak pemasok jika perlu.",
          "Pilih salah satu pajak toko untuk Tarif, atau pilih Tarif lain… untuk mengetik hingga 3 desimal seperti 9.975%.",
          "Periksa Sebelum pajak, yang awalnya berisi total pesanan sebelum pajak, dan salin Pajak dapat dikreditkan dari faktur.",
          "Ketuk Tambah Tarif untuk tarif tambahan."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Pesanan pembelian yang menampilkan bagian Pajak Masukan dengan kolom faktur, satu baris tarif, dan total"
      },
      {
        "type": "p",
        "text": "Pajak dapat dikreditkan awalnya kosong; DingPOS tidak pernah menghitungnya dari tarif dan menerima pembulatan faktur. Misalnya, tepung 10 × $300 ditambah ongkos kirim $100 pada faktur AB-12345678 bertanggal 30 Juni 2026 dengan satu baris 5% berisi Sebelum pajak $3,100 dan Pajak dapat dikreditkan $155 menghasilkan Total sebelum pajak $3,100, Pajak Masukan $155, dan Jumlah terutang $3,255, yang tampil di daftar, detail pesanan, dan Belum Lunas. ID pajak pemasok yang tersimpan pada pemasok mengisi pesanan baru; pesanan yang sudah tersimpan mempertahankan miliknya sendiri."
      },
      {
        "type": "p",
        "text": "Jika faktur datang terlambat, buka pesanan yang sudah diterima lalu ketuk Catat Pajak Masukan di kartu Pajak Masukan, atau Edit untuk mengubahnya. Hanya Jumlah terutang yang berubah; stok, harga pokok produk, dan status lunas atau belum lunas tetap sama. Pesanan yang dibatalkan menyimpan Pajak Masukan sebagai hanya-baca, dan pesanan yang disimpan sebelum pembaruan tidak diisi ulang."
      },
      {
        "type": "h2",
        "text": "Pengeluaran"
      },
      {
        "type": "p",
        "text": "Di Laba Rugi → Pengeluaran Sekali Bayar, formulir menambahkan Nomor faktur dan baris pajak masukan di bawah jumlah. Biarkan jumlah tetap sebelum pajak yang dapat dikreditkan dan salin hanya pajak yang dapat dikreditkan. Pada faktur alat tulis $1,100 dengan pajak yang dapat dikreditkan $100, isi $1,000 dan satu baris 10% sebesar $1,000 dan $100; Termasuk pajak menampilkan $1,100 dan Laba Rugi menghitung $1,000. Pajak masukannya dihitung utuh pada tanggal pengeluaran, tidak pernah mengikuti Bulan dihitung atau pembagian."
      },
      {
        "type": "p",
        "text": "Di Laba Rugi → Pengeluaran Tetap, buka pengeluaran yang sudah tersimpan seperti sewa tempat atau listrik, lalu ketuk Catat Faktur di bawah Faktur setiap kali faktur datang, dengan tanggal faktur, nomor faktur (opsional), dan setidaknya satu baris tarif. Jika sewa $30,000 per bulan dan faktur Juli serta Agustus masing-masing membawa satu baris 5% sebesar $30,000 dan $1,500, laporan Juli–September memuat pajak masukan $3,000 sementara Laba Rugi tetap menghitung $30,000 setiap bulan."
      },
      {
        "type": "p",
        "text": "Menyimpan perubahan pajak masukan di bulan yang sudah lewat memunculkan Simpan perubahan? dan peringatan bahwa laporan pajak bulan itu berubah jika Anda sudah melaporkannya. Perubahan di bulan berjalan dan draf tersimpan tanpa bertanya."
      },
      {
        "type": "note",
        "text": "DingPOS tidak menghitung VAT impor, reverse charge, atau kredit parsial. Salin pajak yang dapat dikreditkan dari faktur, dan masukkan pajak yang tidak bisa Anda kreditkan ke jumlah sebelum pajak."
      },
      {
        "type": "h2",
        "text": "Laporan pajak"
      },
      {
        "type": "p",
        "text": "Dua kartu berada setelah kartu penjualan: Pajak Masukan pada Pesanan Pembelian dan Pajak Masukan pada Pengeluaran. Masing-masing mencantumkan satu baris per tarif, baris Tanpa pajak masukan, dan total untuk Sebelum pajak, Pajak dapat dikreditkan, dan Termasuk pajak. Total mencakup pembelian tanpa pajak masukan, meski sebagian pelaporan pajak hanya menghitung baris yang punya pajak masukan."
      },
      {
        "type": "list",
        "items": [
          "Pesanan pembelian dihitung pada Tanggal faktur, atau tanggal pesanan jika kosong.",
          "Pesanan pembelian yang dibatalkan dihitung sebagai angka negatif pada tanggal pembatalan.",
          "Pengeluaran sekali bayar dihitung utuh pada tanggal pengeluaran.",
          "Faktur pengeluaran tetap dihitung pada tanggal faktur."
        ]
      },
      {
        "type": "p",
        "text": "Pajak Masukan pada Pesanan Pembelian memerlukan izin Harga pokok & laba, dan Pajak Masukan pada Pengeluaran memerlukan izin Laba rugi & pengeluaran; staf yang tidak punya izinnya melihat Minta manajer menyetujui di bawah judul kartu. Ubin Pajak tetap hanya menampilkan pajak yang dipungut atas penjualan, tidak pernah dikurangi pajak masukan, karena metode sederhana di Jepang dan Flat Rate Scheme di Inggris Raya bekerja dengan cara berbeda. Toko di Australia, Selandia Baru, Singapura, dan Inggris Raya juga melihat jumlah ini di Kotak formulir pajak."
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
    "question": "Di mana laporan pajak dan bagaimana cara membacanya?",
    "keywords": [
      "laporan pajak",
      "Laporan Pajak",
      "VAT",
      "GST",
      "pajak penjualan",
      "statistik",
      "ubin pajak",
      "penjualan dan pajak per tarif",
      "per metode pembayaran",
      "laporan pajak untuk akuntan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Statistik dan ketuk ubin Pajak untuk melihat Laporan Pajak, yang mencantumkan penjualan dan pajak per tarif untuk periode yang ditampilkan Statistik. Salin angka-angka ini ke pelaporan VAT, GST, atau pajak penjualan Anda, atau kirimkan ke akuntan. Perubahan pajak di kemudian hari tidak pernah mengubah angka dokumen yang sudah tersimpan."
      },
      {
        "type": "h2",
        "text": "Membuka laporan pajak"
      },
      {
        "type": "steps",
        "items": [
          "Buka Statistik dan pilih periodenya, misalnya Bulan Ini atau rentang kustom.",
          "Temukan ubin Pajak di baris kedua setelah Total Diskon.",
          "Ketuk ubin Pajak atau Laporan pajak ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Statistik pada Bulan Ini dengan ubin Pajak dan footer Laporan pajak ›"
      },
      {
        "type": "p",
        "text": "Ubin ini adalah satu-satunya jalan masuk. Subjudulnya menyebut pajak yang dipungut pada periode itu, dari jumlah terbesar: dua pajak disebut dengan namanya, tiga pajak atau lebih ditampilkan seperti, misalnya, 3 pajak termasuk PST 7%. Header menampilkan periode Statistik (Bulan Ini · 1–30 November) tanpa pemilih periode atau pintasan bulan lalu, karena periode pelaporan berbeda-beda (Taiwan dua bulan, Australia satu kuartal, Jepang satu tahun)."
      },
      {
        "type": "p",
        "text": "Toko tanpa pajak dan tanpa penjualan kena pajak pada periode itu tidak melihat ubin Pajak; periode tanpa dokumen menampilkan tampilan kosong Statistik. Pajak yang sudah dihapus tetap mempertahankan ubin untuk periode yang memuat penjualan dengan pajak itu."
      },
      {
        "type": "note",
        "text": "Setiap paket, termasuk Lite dan uji coba, punya ubin, laporan, dan semua ekspornya. Staf memerlukan izin Statistik; peran yang memerlukan persetujuan melihat layar persetujuan sampai manajer menyetujui."
      },
      {
        "type": "h2",
        "text": "Membaca laporan"
      },
      {
        "type": "p",
        "text": "Toko di Australia, Selandia Baru, Singapura, dan Inggris Raya melihat Kotak formulir pajak lebih dulu."
      },
      {
        "type": "p",
        "text": "Penjualan dan pajak per tarif mencantumkan satu baris per tarif: yang tertinggi dulu, lalu tarif nol 0%, dan Tidak kena pajak (produk tanpa pajak) paling akhir. Kolomnya adalah Penjualan, Retur & pembatalan penjualan, dan Bersih, masing-masing dengan Sebelum pajak dan Pajak; baris tarif nol dan Tidak kena pajak tidak punya baris pajak. Setiap pajak toko mendapat satu baris meski tanpa penjualan. Mengganti nama pajak tetap menghasilkan satu baris; perubahan tarif menambah satu baris."
      },
      {
        "type": "p",
        "text": "Total menampilkan Penjualan sebelum pajak, Pajak, dan Penjualan termasuk pajak. Dengan dua pajak atau lebih, sebuah catatan menyebutkan bahwa satu penjualan bisa dikenai beberapa pajak, sehingga penjualan tiap baris tidak bisa dijumlahkan; Penjualan sebelum pajak menghitung setiap penjualan satu kali. Untuk satu kuartal di Inggris Raya, VAT 20% mungkin menampilkan Sebelum pajak £1,000 dan Pajak £200, Tarif nol 0% £300, dan Tidak kena pajak £50: Total memberi Penjualan sebelum pajak £1,350, Pajak £200, Penjualan termasuk pajak £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Laporan Pajak dengan baris Penjualan dan pajak per tarif serta Total di bawahnya"
      },
      {
        "type": "list",
        "items": [
          "Per metode pembayaran mencantumkan pembayaran atas dokumen-dokumen ini hingga akhir periode, jumlah yang belum dibayar sebagai Piutang, dan pembulatan tunai pada baris Termasuk pembulatan tunai … di dalam baris tunai.",
          "Tidak dihitung sebagai penjualan hanya tampil untuk uang muka hangus, mencantumkan Uang muka hangus dengan subjudul untuk memeriksa pelaporannya ke akuntan, dan tidak menambah penjualan maupun pajak.",
          "Toko dengan Kreditkan pajak masukan aktif, atau yang mencatat pajak masukan pada periode itu, juga melihat Pajak Masukan pada Pesanan Pembelian dan Pajak Masukan pada Pengeluaran."
        ]
      },
      {
        "type": "h2",
        "text": "Hari tempat setiap dokumen dihitung"
      },
      {
        "type": "p",
        "text": "Ketuk ⓘ di samping Penjualan dan pajak per tarif:"
      },
      {
        "type": "list",
        "items": [
          "Pembatalan penjualan (void) dihitung pada periode pembatalannya, sebagai angka negatif, sehingga periode yang sudah dilaporkan tidak pernah berubah. Statistik justru mengeluarkannya dari periode penjualan aslinya.",
          "Retur dihitung pada tanggalnya sendiri. Pada tukar barang, barang baru dihitung sebagai penjualan dan barang yang dikembalikan sebagai retur.",
          "Pra-pesan dihitung pada hari pengambilan; penjualan tempo pada hari penjualan."
        ]
      },
      {
        "type": "p",
        "text": "Penjualan tanggal 30 Oktober yang dibatalkan pada 2 November tetap berada di Penjualan Oktober dan muncul sebagai angka negatif di Retur & pembatalan penjualan bulan November. Pelunasan penjualan tempo di kemudian hari tidak memindahkannya."
      },
      {
        "type": "h2",
        "text": "Pajak yang dipungut dan total Statistik"
      },
      {
        "type": "p",
        "text": "Ubin Pajak sama dengan total Pajak di Laporan Pajak. Ubin ini berbeda dari baris Pajak di Dari Pendapatan ke Laba Kotor di Statistik hanya pada pembatalan penjualan lintas periode, karena Statistik mengeluarkan penjualan yang dibatalkan dari periode aslinya."
      },
      {
        "type": "note",
        "text": "Laporan Pajak menampilkan pajak yang dipungut atas penjualan, bukan pajak terutang (pajak keluaran dikurangi pajak masukan), karena tidak semua negara menghitungnya seperti itu, misalnya metode sederhana di Jepang atau Flat Rate Scheme di Inggris Raya."
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
    "question": "Angka mana yang masuk ke kotak formulir BAS, GST, atau VAT saya?",
    "keywords": [
      "kotak formulir pajak",
      "Laporan Pajak",
      "Statistik",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "kreditkan pajak masukan",
      "pelaporan pajak Australia",
      "pelaporan pajak Singapura"
    ],
    "content": [
      {
        "type": "p",
        "text": "Untuk toko di Australia, Selandia Baru, Singapura, atau Inggris Raya, Laporan Pajak dibuka dengan Kotak formulir pajak, yang menampilkan setiap kotak beserta jumlah dari laporan yang sama. Kotak ini mencakup Australia BAS · Simpler BAS, Selandia Baru GST101A, Singapura GST F5, dan VAT Return Inggris Raya di setiap paket."
      },
      {
        "type": "h2",
        "text": "Membuka Kotak formulir pajak"
      },
      {
        "type": "steps",
        "items": [
          "Buka Statistik.",
          "Ketuk ubin Pajak untuk membuka Laporan Pajak."
        ]
      },
      {
        "type": "p",
        "text": "Kotak formulir pajak adalah kartu pertama, di atas Penjualan dan pajak per tarif, dan subjudulnya menyebut formulir pelaporannya. Setiap jumlah berasal dari laporan yang sama, sen termasuk, dan tidak ada yang dihitung ulang. Laporan PDF yang diekspor dibuka dengan kartu yang sama. Toko yang disiapkan sebelum aplikasi mencatat negara dihitung menurut mata uangnya (AUD, NZD, SGD, atau GBP); toko lain tidak punya kartu Kotak formulir pajak."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Kartu Kotak formulir pajak di bagian atas Laporan Pajak yang menampilkan Box 1, 4, 6, dan 7 VAT Return Inggris Raya"
      },
      {
        "type": "h2",
        "text": "Australia BAS · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: Penjualan dengan GST, termasuk penjualan bebas GST dan tidak kena pajak; jawab Ya untuk “Apakah jumlah yang ditampilkan di G1 termasuk GST?”",
          "1A GST on sales: Pajak atas penjualan",
          "1B GST on purchases: Pajak dapat dikreditkan pada pesanan pembelian dan pengeluaran"
        ]
      },
      {
        "type": "p",
        "text": "ATO meminta dolar utuh: hilangkan sen pada BAS, jangan dibulatkan ke atas."
      },
      {
        "type": "h2",
        "text": "Selandia Baru GST101A"
      },
      {
        "type": "list",
        "items": [
          "Box 5 Total sales and income: Penjualan dengan GST, termasuk penjualan tarif nol, tidak termasuk penjualan tidak kena pajak",
          "Box 6 Zero-rated supplies: Penjualan tarif nol",
          "Box 11 Total purchases and expenses: Pesanan pembelian dan pengeluaran dengan GST, sudah termasuk GST; pembelian tanpa pajak masukan atau bertarif nol tidak dihitung"
        ]
      },
      {
        "type": "p",
        "text": "myIR menghitung Box 8 dan Box 12 sebagai 3/23, sehingga bisa berbeda beberapa sen dari pajak di laporan."
      },
      {
        "type": "h2",
        "text": "Singapura GST F5"
      },
      {
        "type": "list",
        "items": [
          "Box 1 Total value of standard-rated supplies: Penjualan kena pajak sebelum pajak",
          "Box 2 Total value of zero-rated supplies: Penjualan tarif nol; hanya ekspor dan jasa internasional yang dapat bertarif nol",
          "Box 5 Total value of taxable purchases: Pesanan pembelian dan pengeluaran dengan GST atau bertarif nol, sebelum pajak; pembelian tanpa pajak masukan tidak dihitung",
          "Box 6 Output tax due: Pajak atas penjualan",
          "Box 7 Input tax and refunds claimed: Pajak dapat dikreditkan pada pesanan pembelian dan pengeluaran"
        ]
      },
      {
        "type": "h2",
        "text": "VAT Return Inggris Raya"
      },
      {
        "type": "list",
        "items": [
          "Box 1 VAT due on sales and other outputs: Pajak atas penjualan",
          "Box 4 VAT reclaimed on purchases and other inputs: Pajak dapat dikreditkan pada pesanan pembelian dan pengeluaran",
          "Box 6 Total value of sales and all other outputs excluding any VAT: Penjualan sebelum pajak, termasuk penjualan tarif nol, dibebaskan dari pajak, dan tidak kena pajak",
          "Box 7 Total value of purchases and all other inputs excluding any VAT: Pesanan pembelian dan pengeluaran sebelum pajak, termasuk pembelian tanpa pajak masukan; kurangi gaji dan pajak properti usaha (business rates) yang Anda catat"
        ]
      },
      {
        "type": "p",
        "text": "Untuk akuntansi VAT standar; pada Flat Rate Scheme, Box 1 dan Box 6 dihitung dengan cara berbeda. Di Inggris Raya, VAT atas uang muka terutang saat Anda menerimanya; DingPOS melaporkan pra-pesan saat barang diambil."
      },
      {
        "type": "p",
        "text": "Contoh satu kuartal di Inggris Raya: penjualan VAT 20% sebelum pajak £1,000 (pajak £200), £300 tarif nol, £50 tidak kena pajak, pesanan pembelian £400 plus VAT £80, dan pengeluaran £250 tanpa pajak masukan menghasilkan Box 1 £200, Box 4 £80, Box 6 £1,350, dan Box 7 £650."
      },
      {
        "type": "h2",
        "text": "Kotak kosong dan akses staf"
      },
      {
        "type": "p",
        "text": "Kotak yang dihitung sendiri oleh kantor pajak dan jumlah terutang tidak ditampilkan (Box 3 dan 5 di Inggris Raya; Box 3 di Singapura, penjualan yang dibebaskan dari pajak). Di Selandia Baru dan Singapura, penjualan tidak kena pajak tidak masuk ke kotak mana pun; tanyakan ke akuntan Anda jika seharusnya dikenai pajak."
      },
      {
        "type": "p",
        "text": "Kotak pajak masukan (AU 1B, NZ 11, SG 5 dan 7, UK 4 dan 7) memerlukan Kreditkan pajak masukan, atau menampilkan — dan Pajak masukan tidak dicatat, bukan 0. Box 7 Inggris Raya memerlukan Pajak Masukan pada Pesanan Pembelian dan Pajak Masukan pada Pengeluaran; pesanan pembelian saja hanya mengisi Box 4 dan membiarkan Box 7 tetap —."
      },
      {
        "type": "p",
        "text": "Staf tanpa izin Laba rugi & pengeluaran atau Harga pokok & laba tidak melihat kotak yang menjumlahkan kedua kartu itu sampai manajer menyetujui lewat Minta manajer menyetujui."
      },
      {
        "type": "note",
        "text": "Dihitung berdasarkan tanggal penjualan dan faktur; DingPOS tidak melacak tanggal pembayaran. Jika Anda melapor dengan basis kas atau pembayaran, sesuaikan angka ini."
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
    "question": "Bagaimana cara membuat promo di aplikasi kasir?",
    "keywords": [
      "promo",
      "diskon",
      "beli satu gratis satu",
      "minimal belanja",
      "happy hour",
      "kupon"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Pengaturan → Promo. Jenis promo yang didukung:"
      },
      {
        "type": "list",
        "items": [
          "Minimal belanja: belanja sebesar X, dapat potongan Y atau diskon Y%.",
          "Beli satu gratis satu dan promo barang ke-N.",
          "Pengali poin bonus.",
          "Promo khusus tingkat anggota atau bulan ulang tahun.",
          "Beli A dapat B, tambahan berbayar, dan Paket harga tetap."
        ]
      },
      {
        "type": "p",
        "text": "Setiap promo bisa dijadwalkan (jam Happy Hour, hari tertentu, hingga melewati tengah malam), dibatasi untuk produk tertentu, serta diatur dengan prioritas, aturan penggabungan, dan batas pemakaian. Promo yang memenuhi syarat berlaku otomatis saat pembayaran — tanpa kode diskon."
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
    "question": "Promo tidak berlaku di kasir, apa yang harus saya periksa?",
    "keywords": [
      "promo",
      "tidak berfungsi",
      "tidak berlaku",
      "promo tidak terpakai",
      "mengatasi masalah"
    ],
    "content": [
      {
        "type": "p",
        "text": "Periksa penyebab yang paling umum secara berurutan:"
      },
      {
        "type": "steps",
        "items": [
          "Jadwal: apakah hari ini masih dalam tanggal aktif? Apakah jam Happy Hour membatasi hari atau waktunya?",
          "Cakupan: apakah barang di keranjang termasuk dalam cakupan produk atau kategori promo? Apakah produk diatur Kecualikan dari promo (produk harga bebas otomatis dikecualikan)? Apakah minimal belanja sudah tercapai?",
          "Sasaran: apakah promo dibatasi untuk tingkat anggota atau bulan ulang tahun tertentu? Apakah anggota tersebut sudah dipilih saat pembayaran?",
          "Batas pemakaian: apakah batas total pemakaian, atau batas untuk pelanggan ini, sudah tercapai? Batas per pelanggan pada promo bulan ulang tahun dihitung per tahun kalender.",
          "Penggabungan: apakah promo berprioritas lebih tinggi dengan opsi \"Hentikan promo berikutnya saat promo ini berlaku\" menghalanginya?"
        ]
      },
      {
        "type": "p",
        "text": "Jika semuanya sudah sesuai tetapi promo tetap tidak berlaku, kirimkan tangkapan layar pengaturan promo tersebut lewat email kepada kami, dan kami akan membantu menelusurinya."
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
    "question": "Bagaimana cara kerja poin loyalitas pelanggan?",
    "keywords": [
      "poin",
      "loyalitas",
      "hadiah",
      "tukar poin",
      "bonus selamat datang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Pengaturan → Program Loyalitas dan tetapkan dua aturan: dapat Y poin untuk setiap belanja X, dan tukar N poin untuk potongan M (dengan batas penukaran per pesanan yang bersifat opsional). Anda juga bisa memberi bonus selamat datang otomatis kepada anggota baru. Toko baru dimulai dengan poin nonaktif: nyalakan Aktifkan Program Loyalitas, lalu isi satu aturan. Jika sakelar menyala tetapi belum ada aturan yang diatur, akan muncul peringatan “Aturan perolehan atau penukaran belum diatur, sehingga poin tidak akan diperoleh atau ditukarkan pada penjualan.”"
      },
      {
        "type": "p",
        "text": "Pilih anggota untuk penjualan itu, di keranjang atau di layar Bayar, lalu poin bertambah otomatis; untuk menukar, masukkan jumlah poin yang dipakai. Layar berhasil menampilkan poin yang diperoleh dan saldo barunya, seperti “+22 poin · total 122 poin”; pada penjualan tempo atau pra-pesan yang belum dibayar lunas, poin baru ditambahkan saat uangnya masuk, dengan keterangan “ditambahkan saat lunas” atau “ditambahkan setelah pembayaran saat pengambilan”. Jika pesanan dibatalkan lewat Batalkan penjualan (Void), poin yang diperoleh dari pesanan tersebut ditarik kembali dan poin yang sudah ditukar dikembalikan."
      },
      {
        "type": "p",
        "text": "Untuk menambah atau mengurangi poin secara manual (misalnya untuk pembelian yang terlewat), ketuk Sesuaikan pada kartu Poin di detail pelanggan, pilih Tambah atau Kurangi, masukkan jumlah poin, lalu isi alasan jika perlu (maksimal 100 karakter). Anda tidak dapat mengurangi lebih banyak daripada poin yang dimiliki pelanggan. Setiap penyesuaian tercatat di riwayat poin, lengkap dengan saldo sebelum dan sesudahnya, alasan, dan siapa yang melakukannya."
      },
      {
        "type": "note",
        "text": "Penyesuaian poin manual hadir sejak v3.5. Di paket Pro, staf yang perannya memerlukan persetujuan untuk Penyesuaian poin manual (secara default, peran Staf) akan diminta memasukkan PIN manajer atau pemilik saat menekan Konfirmasi."
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
    "question": "Apa gunanya tingkat anggota?",
    "keywords": [
      "tingkat anggota",
      "vip",
      "gold",
      "naik tingkat",
      "level membership"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tingkat anggota (misalnya Reguler, Silver, Gold) punya dua fungsi: bisa menjadi sasaran promo (misalnya diskon 10% khusus Gold), dan membantu Anda mengenali status pelanggan sekilas saat pembayaran."
      },
      {
        "type": "p",
        "text": "Tingkat bisa naik otomatis berdasarkan aturan yang Anda tentukan (misalnya total belanja kumulatif), atau diatur secara manual. Jika penjualan yang keliru dibatalkan lewat Batalkan penjualan (Void) dan pesanan itu sempat memicu kenaikan tingkat, tingkat tersebut dikembalikan otomatis."
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
    "question": "Bagaimana cara mencadangkan data toko saya?",
    "keywords": [
      "cadangan",
      "backup",
      "icloud",
      "google drive",
      "dropbox",
      "cloud",
      "snapshot",
      "cadangkan data"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Pengaturan → Cadangan Cloud, pilih salah satu dari iCloud, Google Drive, atau Dropbox, lalu beri izin. Setelah itu Anda bisa menjalankan cadangan secara manual kapan saja. Untuk iCloud, iPad ini harus sudah masuk ke iCloud dengan iCloud Drive aktif dan DingPOS diizinkan menggunakannya."
      },
      {
        "type": "p",
        "text": "Cadangan disimpan di akun cloud Anda sendiri. Setiap penyedia cloud hanya menyimpan yang terbaru — satu snapshot cadangan data dan satu file foto produk — dan setiap cadangan menimpa cadangan sebelumnya."
      },
      {
        "type": "note",
        "text": "Karena cadangan baru menggantikan yang lama, jika Anda curiga data sudah bermasalah (misalnya sekumpulan produk terhapus tanpa sengaja), jangan cadangkan dulu — kirim email kepada kami dan kita cari langkah berikutnya bersama."
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
    "question": "Cadangan iCloud tertulis “Tidak terhubung”, apa yang harus saya lakukan?",
    "keywords": [
      "icloud",
      "tidak terhubung",
      "icloud drive",
      "cadangan gagal",
      "tidak bisa terhubung"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS hanya menampilkan iCloud sebagai terhubung jika benar-benar bisa menggunakannya. Jika tertulis Tidak terhubung, periksa tiga hal di aplikasi Pengaturan iPad:"
      },
      {
        "type": "steps",
        "items": [
          "Anda sudah masuk ke Akun Apple.",
          "iCloud Drive aktif.",
          "DingPOS diizinkan menggunakan iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Setelah ketiganya aktif, kembali ke Cadangan Cloud di DingPOS dan iCloud akan tampil sebagai terhubung. Cadangan disimpan di folder khusus DingPOS di iCloud Drive."
      },
      {
        "type": "note",
        "text": "Pada versi sebelum v3.0, cadangan iCloud tidak berfungsi dan selalu gagal dengan pesan “Backup.SyncError error 0”. Perbarui DingPOS dari App Store terlebih dahulu."
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
    "question": "Bagaimana cara memindahkan data ke iPad baru?",
    "keywords": [
      "pindah data",
      "iPad baru",
      "pulihkan",
      "pemulihan",
      "migrasi",
      "transfer"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "iPad lama: buka Pengaturan → Cadangan Cloud dan jalankan cadangan manual. Pastikan waktu cadangan sudah diperbarui.",
          "iPad baru: pasang DingPOS dan selesaikan panduan pengaturan awal.",
          "iPad baru: buka Pengaturan → Cadangan Cloud, hubungkan akun cloud yang sama, lalu pulihkan."
        ]
      },
      {
        "type": "p",
        "text": "Mengetuk Pulihkan akan membuka pratinjau terlebih dahulu: jumlah produk, pesanan, dan pelanggan di iPad ini dan di snapshot cadangan ditampilkan berdampingan, beserta setiap pesanan yang akan dihapus oleh pemulihan. Tidak ada yang berubah di iPad ini sampai Anda mengonfirmasi. Snapshot cadangan yang dibuat oleh versi DingPOS yang lebih baru akan meminta Anda memperbarui aplikasi lebih dulu. Foto produk juga ikut dipulihkan."
      },
      {
        "type": "note",
        "text": "Pemulihan menggantikan seluruh data di iPad ini dengan isi cadangan — pesanan yang dibuat di iPad ini setelah cadangan tersebut akan hilang. Pastikan Anda terhubung ke akun cloud yang benar; jika salah memulihkan, gunakan Urungkan Pemulihan."
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
    "question": "Apakah data saya tetap ada jika aplikasi dihapus?",
    "keywords": [
      "hapus",
      "hapus aplikasi",
      "uninstall",
      "data hilang",
      "copot aplikasi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tidak. DingPOS menyimpan semuanya secara lokal di perangkat Anda — menghapus aplikasi akan menghapus permanen semua produk, pesanan, anggota, dan pengaturan, kecuali Anda sudah mengaktifkan cadangan cloud."
      },
      {
        "type": "note",
        "text": "Sebelum menghapus aplikasi, selalu jalankan cadangan manual dan pastikan berhasil. Setelah memasang ulang, pulihkan dari cloud."
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
    "question": "Aplikasi menampilkan “Data Toko Tidak Dapat Dibuka”, apa yang harus dilakukan?",
    "keywords": [
      "tidak dapat dibuka",
      "tidak bisa dibuka",
      "crash",
      "crash saat dibuka",
      "database",
      "data toko",
      "aplikasi error",
      "memperbarui data"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jangan hapus aplikasinya. Layar ini berarti DingPOS tidak dapat membaca data toko Anda, tetapi data tersebut masih ada di iPad ini — menghapus aplikasi akan ikut menghapus datanya."
      },
      {
        "type": "p",
        "text": "Ketuk Coba Lagi terlebih dahulu; jika berhasil, aplikasi terbuka seperti biasa. Jika terus terjadi, ketuk Hubungi Dukungan dan beri tahu kami, dan kami akan membantu memulihkan data Anda. Layar ini tidak pernah memindahkan atau menghapus file apa pun."
      },
      {
        "type": "p",
        "text": "Saat pertama kali dibuka setelah pembaruan, atau setelah memulihkan cadangan dari versi lama, aplikasi mungkin menampilkan “Memperbarui data Anda…” lebih dulu. Itu berarti data toko Anda sedang dipindahkan ke format yang lebih baru; makin banyak datanya, makin lama prosesnya, dan aplikasi akan terbuka sendiri setelah selesai. Aplikasi tidak macet."
      },
      {
        "type": "note",
        "text": "Penyebab paling umum adalah aplikasi tertutup di tengah proses pemulihan. Sebelum v3.0, hal ini membuat aplikasi crash setiap kali dibuka; sejak v3.0 aplikasi berhenti di layar ini."
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
    "question": "Apakah bisa memakai dua iPad sekaligus?",
    "keywords": [
      "dua iPad",
      "banyak perangkat",
      "multi perangkat",
      "sinkronisasi",
      "berbagi data",
      "kasir kedua"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat ini data tiap iPad berdiri sendiri — berbagi satu data secara real-time di dua perangkat belum didukung."
      },
      {
        "type": "p",
        "text": "Anda bisa menyalin data dari satu iPad ke iPad lain lewat cadangan cloud (cadangkan → pulihkan), yang cocok untuk berganti perangkat atau menyiapkan iPad kedua. Namun pesanan yang diproses terpisah di tiap perangkat tidak akan tergabung otomatis. Sinkronisasi multi-perangkat ada di rencana pengembangan kami."
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
    "question": "Saya salah memulihkan cadangan. Bisakah dibatalkan?",
    "keywords": [
      "urungkan pemulihan",
      "pulihkan",
      "snapshot salah",
      "catatan pemulihan",
      "data hilang",
      "kembalikan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Setiap pemulihan cloud menyimpan data yang digantikannya sebagai salinan sebelum pemulihan. Di Pengaturan → Cadangan Cloud, sebuah kartu menampilkan kapan pemulihan terakhir terjadi dan dari mana asalnya. Ketuk Urungkan Pemulihan, periksa pratinjau, lalu konfirmasi — data kembali seperti sebelum pemulihan dan aplikasi dimuat ulang."
      },
      {
        "type": "list",
        "items": [
          "Urungkan Pemulihan itu sendiri adalah pemulihan dan menyimpan salinan lain dari data yang digantikannya, jadi mengetuknya lagi akan membalik kembali.",
          "Hanya salinan terbaru yang disimpan; pemulihan berikutnya menggantikannya.",
          "Hanya data yang kembali: produk yang ditambahkan setelah snapshot cadangan akan menampilkan gambar yang hilang."
        ]
      },
      {
        "type": "p",
        "text": "Untuk melihat siapa yang memulihkan, kapan, dan dari snapshot cadangan mana, ketuk Lihat catatan pemulihan di layar yang sama: waktu, operator, sumber, jumlah produk / pesanan / pelanggan Sebelum dan Sesudah, serta setiap pesanan yang dihapus oleh tiap pemulihan. Catatan disimpan di iPad ini dan tidak pernah digantikan oleh pemulihan."
      },
      {
        "type": "note",
        "text": "Pratinjau pemulihan dan Urungkan Pemulihan tersedia di semua paket; melihat catatan pemulihan adalah fitur Pro. Catatan tetap ditulis tanpa Pro (hanya tanpa operator), sehingga jika Anda berlangganan Pro kemudian, semuanya akan terlihat."
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
    "question": "Bagaimana cara menambah staf dan berganti operator kasir?",
    "keywords": [
      "staf",
      "pegawai",
      "manajer",
      "akun",
      "pin",
      "operator",
      "ganti operator",
      "pergantian shift",
      "kasir",
      "tambah staf"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ketuk Staf di sidebar. Saat pertama kali, atur pemilik: nama dan PIN 4 digit. Menambah staf dan mengubah izin sama-sama memerlukan PIN ini, jadi ingat baik-baik — PIN tidak bisa direset."
      },
      {
        "type": "steps",
        "items": [
          "Di halaman Staf, ketuk Tambah staf, isi nama, pilih peran (Manajer atau Staf), lalu atur PIN 4 digit.",
          "Operator saat ini tampil di bagian bawah sidebar dan di kanan atas layar bayar. Saat pergantian shift, ketuk operator tersebut, pilih nama Anda, lalu masukkan PIN Anda.",
          "Sejak itu, setiap pesanan, pembayaran, serta perubahan stok atau poin mencatat siapa yang menanganinya. Informasi ini terlihat di daftar dan rincian pesanan; pesanan yang dibatalkan (void) juga mencatat siapa yang membatalkannya."
        ]
      },
      {
        "type": "p",
        "text": "Saat seseorang berhenti bekerja, gunakan Nonaktifkan staf ini: riwayatnya tetap utuh dan Anda bisa mengaktifkannya kembali nanti. Mengganti nama tidak mengubah pesanan lama — pesanan tersebut tetap memakai nama saat itu."
      },
      {
        "type": "note",
        "text": "Staf adalah fitur Pro (juga tersedia selama masa uji coba). Jika Pro berakhir, data staf dan penangan setiap pesanan tetap tersimpan, sedangkan pesanan baru dicatat atas nama pemilik; berlangganan Pro lagi akan mengembalikan semuanya."
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
    "question": "Lupa PIN pemilik, apa yang harus dilakukan?",
    "keywords": [
      "pin",
      "lupa pin",
      "kata sandi",
      "reset pin",
      "pemilik",
      "pulihkan",
      "terkunci"
    ],
    "content": [
      {
        "type": "p",
        "text": "PIN pemilik tidak bisa direset, dan tim dukungan kami juga tidak bisa membukanya. PIN disimpan bersama data toko Anda, jadi menghapus lalu memasang ulang aplikasi, kemudian memulihkan dari cloud, akan mengembalikan PIN yang sama."
      },
      {
        "type": "p",
        "text": "Saat membuat pemilik dan setiap kali PIN pemilik diubah, muncul peringatan “Ingat PIN ini. Jika lupa, PIN tidak bisa direset.” Simpan di tempat yang hanya bisa Anda jangkau."
      },
      {
        "type": "p",
        "text": "Tanpa PIN pemilik, semua hal yang memerlukannya tidak bisa diakses — menambah atau mengedit staf, mengubah izin peran, dan melihat log aktivitas. Staf tetap bisa melayani pembayaran dan pekerjaan harian dengan PIN masing-masing."
      },
      {
        "type": "note",
        "text": "Jika staf lupa PIN-nya, tidak masalah: pemilik bisa meresetnya di Staf."
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
    "question": "Bagaimana cara kerja izin staf dan persetujuan manajer?",
    "keywords": [
      "izin",
      "persetujuan",
      "manajer",
      "batas diskon",
      "staf",
      "harga pokok",
      "peran",
      "hak akses"
    ],
    "content": [
      {
        "type": "p",
        "text": "Setiap izin punya dua nilai: Diizinkan atau Perlu persetujuan — tidak ada yang dilarang mutlak. Saat staf menjalankan tindakan yang perlu persetujuan, rekan yang diizinkan memilih namanya dan memasukkan PIN untuk meloloskannya."
      },
      {
        "type": "list",
        "items": [
          "Tindakan (penyesuaian stok manual, penyesuaian poin manual, pengelolaan produk, menyelesaikan pembayaran dengan diskon di atas batas): satu persetujuan berlaku untuk satu tindakan itu saja.",
          "Tampilan (harga pokok & laba, Statistik, Laba Rugi & pengeluaran, Pengaturan, cadangan & pemulihan): persetujuan membuka akses sampai operator berganti atau aplikasi masuk ke latar belakang.",
          "Batas diskon berlaku untuk diskon manual dan diperiksa satu kali saat bayar; promo otomatis dan penukaran poin tidak dihitung."
        ]
      },
      {
        "type": "p",
        "text": "Bawaan pabrik: Manajer diizinkan melakukan semuanya kecuali cadangan & pemulihan serta Laba Rugi & pengeluaran, tanpa batas diskon; Staf perlu persetujuan untuk semuanya, dengan batas 10%. Pemilik selalu diizinkan dan tidak bisa diedit. Untuk mengubahnya, buka Staf → Izin peran, ketuk Edit, lalu simpan sekali — berlaku untuk semua orang seketika."
      },
      {
        "type": "note",
        "text": "Batalkan penjualan (Void), retur, penjualan tempo, dan pembelian sengaja tidak memiliki izin; semuanya hanya mencatat siapa yang menanganinya. Untuk meninjaunya nanti, gunakan log aktivitas."
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
    "question": "Bagaimana cara melihat siapa yang membatalkan pesanan, menyesuaikan stok, atau mengubah harga?",
    "keywords": [
      "log aktivitas",
      "audit",
      "siapa yang mengubah",
      "void",
      "batalkan penjualan",
      "ubah harga",
      "penyesuaian stok",
      "produk dihapus",
      "persetujuan",
      "log"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gunakan log aktivitas. Di halaman Staf, ketuk Log aktivitas di kanan atas dan masukkan PIN pemilik untuk melihat tindakan sensitif di toko, dari yang terbaru: pembatalan penjualan (void), retur, penyesuaian stok dan hitung ulang, penyesuaian poin manual, persetujuan, perubahan staf dan izin, perubahan PIN pemilik, pengaturan pajak, perubahan harga jual dan harga pokok produk, serta penghapusan produk. Transaksi kasir biasa tidak dicantumkan."
      },
      {
        "type": "list",
        "items": [
          "Setiap entri menunjukkan apa yang disentuh, siapa melakukan apa dan kapan, serta hasilnya — misalnya “M harga $390 → $350”. Alasan untuk pembatalan penjualan, retur, penyesuaian stok, atau penyesuaian poin tertera di baris ketiga entri.",
          "Saring berdasarkan staf (termasuk yang dinonaktifkan), jenis tindakan, dan Hari ini / Minggu Ini / Bulan Ini.",
          "Ketuk entri yang merujuk ke pesanan, produk, atau pelanggan untuk membuka rinciannya.",
          "Rincian pesanan, rincian produk, dan halaman setiap staf masing-masing memiliki daftar entri sendiri yang hanya menampilkan catatan tentangnya.",
          "Produk yang sudah dihapus tetap menampilkan nama dan harganya saat itu di log."
        ]
      },
      {
        "type": "note",
        "text": "Semua paket mencatat; hanya melihatnya yang merupakan fitur Pro, jadi catatan selama Pro berhenti akan muncul begitu Anda berlangganan lagi. Log ini ikut tersimpan dalam cadangan cloud Anda."
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
    "question": "Bagaimana cara kerja uji coba gratis DingPOS?",
    "keywords": [
      "uji coba gratis",
      "gratis",
      "30 hari",
      "coba gratis aplikasi kasir"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sejak pertama kali dipasang, Anda mendapat 30 hari semua fitur paket Pro, termasuk akun staf, izin, dan log aktivitas — tanpa perlu membuat akun."
      },
      {
        "type": "p",
        "text": "Jika Anda berlangganan paket apa pun selama masa uji coba, uji coba langsung berakhir dan paket yang Anda beli berlaku sejak saat itu. Setelah uji coba, fitur Pro seperti staf dan log aktivitas hanya tersedia dengan langganan Pro. Statistik tidak memerlukannya; semua paket sudah menyertakan seluruhnya."
      },
      {
        "type": "p",
        "text": "Dalam 7 hari terakhir dan pada hari terakhir, aplikasi mengingatkan Anda masing-masing satu kali tentang sisa harinya, bahwa proses bayar dijeda saat uji coba berakhir, dan bahwa data Anda tetap tersimpan."
      },
      {
        "type": "p",
        "text": "Semua yang Anda buat selama uji coba (produk, pesanan, member) tersimpan utuh. Data Anda tidak pernah dihapus, baik Anda berlangganan setelahnya maupun tidak."
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
    "question": "Apakah data saya hilang setelah uji coba berakhir?",
    "keywords": [
      "uji coba berakhir",
      "masa uji coba habis",
      "terkunci",
      "data hilang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tidak — data Anda tetap ada di perangkat selamanya. Saat uji coba berakhir, fitur kasir terkunci, tetapi Anda tetap bisa melihat pesanan, membuka laporan, dan mengelola produk."
      },
      {
        "type": "p",
        "text": "Berlangganan kapan saja dan fitur kasir langsung terbuka kembali, dengan semua data persis seperti terakhir Anda tinggalkan."
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
    "question": "Apa perbedaan paket Lite, Standard, dan Pro?",
    "keywords": [
      "paket",
      "lite",
      "standard",
      "pro",
      "perbedaan",
      "bandingkan paket",
      "upgrade",
      "downgrade",
      "harga"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ketiga paket mencakup fitur kasir lengkap, produk, pesanan (dengan tindakan Batalkan penjualan (Void), retur, dan tukar barang), laporan (seluruh Statistik dan Laba Rugi bulanan sejak v3.4, laporan pajak beserta ekspornya sejak v3.6), dan cadangan cloud. Bedanya ada pada alat untuk menjalankan toko:"
      },
      {
        "type": "list",
        "items": [
          "Lite: untuk satu orang yang menjaga lapak dan butuh kasir serta pengelolaan produk.",
          "Standard: menambah promo, preset diskon, poin loyalitas dan tingkat member, pelacakan stok, pembelian ke pemasok, penjualan tempo, pra-pesan, dan tarif biaya pembayaran.",
          "Pro: menambah akun staf dan izin, persetujuan manajer, log aktivitas, dan catatan pemulihan — untuk toko yang punya staf."
        ]
      },
      {
        "type": "p",
        "text": "Sudah memakai Standard? Upgrade ke Pro dari halaman langganan: siklus penagihan tetap sama, upgrade berlaku langsung, dan Apple menghitung selisih biayanya secara prorata. Pindah dari Pro kembali ke Standard berlaku saat perpanjangan. Harga ditampilkan di aplikasi, dan Anda bisa membandingkan paket di halaman Harga kami."
      },
      {
        "type": "note",
        "text": "Downgrade tidak pernah menghapus data. Fitur di luar paket Anda dijeda, datanya tetap ada, dan berlangganan lagi akan mengaktifkannya kembali."
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
    "question": "Bagaimana cara berlangganan, membatalkan langganan, atau memulihkan pembelian?",
    "keywords": [
      "berlangganan",
      "batalkan langganan",
      "pulihkan pembelian",
      "harga",
      "penagihan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Langganan diproses lewat pembelian dalam aplikasi App Store — paket dan harga ditampilkan di aplikasi. Pembayaran diproses oleh Apple; kami tidak pernah melihat data pembayaran Anda."
      },
      {
        "type": "list",
        "items": [
          "Batalkan: atur di Pengaturan perangkat → Akun Apple → Langganan. Batalkan paling lambat 24 jam sebelum periode berjalan berakhir agar tidak diperpanjang.",
          "Pulihkan: setelah berganti perangkat atau memasang ulang, ketuk \"Pulihkan Pembelian\" di halaman Langganan DingPOS.",
          "Ganti paket: pilih paket baru di halaman Langganan DingPOS. Upgrade (Standard ke Pro, bulanan ke tahunan) berlaku langsung, dengan Apple menghitung selisihnya secara prorata; downgrade berlaku saat perpanjangan."
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
    "question": "Cara mengatur diskon minimum belanja",
    "keywords": [
      "diskon minimum belanja",
      "batas belanja",
      "ambang belanja",
      "panduan",
      "cara mengatur",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buka Pengaturan → Promo → Baru, pilih jenis promo dengan batas minimum belanja, lalu:"
      },
      {
        "type": "steps",
        "items": [
          "Isi batas minimum belanja dan diskonnya (jumlah tetap atau persentase).",
          "Tentukan cakupan: produk tertentu, kategori tertentu, atau kosongkan agar berlaku untuk seluruh toko.",
          "Atur jadwal: tanggal mulai wajib diisi; kosongkan tanggal selesai untuk promo yang berjalan terus.",
          "Simpan — promo aktif sesuai jadwal dan berlaku otomatis saat pembayaran, tanpa kode."
        ]
      },
      {
        "type": "note",
        "text": "Batas minimum dihitung dari subtotal item yang masuk cakupan, bukan seluruh keranjang. Promo “belanja Rp100.000 untuk Minuman” hanya menghitung minuman, dan produk yang ditandai “Kecualikan dari promo” tidak pernah dihitung."
      },
      {
        "type": "p",
        "text": "Satu hal yang sering ditanyakan: jika promo berprioritas lebih tinggi berlaku lebih dulu, batas minimum diperiksa terhadap jumlah yang sudah terkena diskon — keranjang yang tampak melewati batas bisa saja kurang sedikit. Agar batas minimum dinilai lebih dulu, beri nomor Prioritas yang lebih kecil."
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
    "question": "Cara mengatur promo beli satu gratis satu dan diskon item ke-N",
    "keywords": [
      "beli satu gratis satu",
      "bogo",
      "beli 1 gratis 1",
      "item ke-3 gratis",
      "panduan",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buat promo jenis Beli X / Dapat Y: tentukan jumlah yang dibeli, jumlah yang didapat, dan persen diskonnya (100% = gratis). Atur cakupannya ke produk tertentu atau satu kategori penuh — produk berbeda dalam kategori yang sama dikelompokkan bersama."
      },
      {
        "type": "list",
        "items": [
          "Unit yang didiskon adalah yang termurah dalam kelompok, dengan nilai harga efektifnya saat ini — jika promo sebelumnya sudah mendiskonnya, jumlah BOGO dihitung dari harga setelah diskon, bukan harga katalog.",
          "Jika Anda ingin label “item ke-3 gratis” menampilkan harga katalog penuh, beri promo BOGO ini nomor Prioritas terkecil agar dihitung lebih dulu. Saat diskon seluruh keranjang berjalan lebih dulu, potongan yang tampil untuk item gratis lebih kecil dari harga katalog — ini sifat urutan perhitungan yang sudah kami uji berulang kali, bukan bug. Kedua urutan menghasilkan total yang hampir sama; yang berubah hanyalah letak diskon yang terlihat."
        ]
      },
      {
        "type": "p",
        "text": "Tips: taruh penawaran utama Anda di urutan prioritas pertama agar rincian diskon di struk sesuai dengan pesan promosi Anda."
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
    "question": "Cara mengatur pengali poin bonus",
    "keywords": [
      "pengali poin",
      "poin ganda",
      "double poin",
      "panduan",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buat promo jenis Pengali poin dan atur pengalinya (bilangan bulat 2 atau lebih). Anda juga bisa menambahkan batas minimum belanja (mis. belanja Rp50.000 → poin ganda) dan jadwal (mis. hanya hari Sabtu)."
      },
      {
        "type": "list",
        "items": [
          "Jika beberapa pengali memenuhi syarat sekaligus, hanya yang tertinggi yang berlaku — pengali tidak pernah dikalikan atau ditumpuk.",
          "Batas minimum belanja diperiksa setelah penukaran poin: jika penukaran poin membuat total turun di bawah batas, pengali tidak berlaku kali ini.",
          "Anggota harus dipilih saat pembayaran agar poin terkumpul — pesanan tanpa anggota tidak mendapat poin, sehingga tidak ada yang dikalikan."
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
    "question": "Cara mengatur promo tingkat anggota dan ulang tahun",
    "keywords": [
      "tingkat anggota",
      "promo ulang tahun",
      "vip",
      "harga member",
      "panduan",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Buat dulu tingkat di Pengaturan → Tingkat Anggota (mis. Gold), lalu arahkan promo ke tingkat itu. Untuk promo ulang tahun, atur sasarannya ke Bulan ulang tahun dan isi Batas per pelanggan."
      },
      {
        "type": "list",
        "items": [
          "Anggota harus dipilih saat pembayaran agar promo berlaku — kelayakan dinilai berdasarkan anggota yang sedang dipilih.",
          "Kelayakan ulang tahun membaca bulan ulang tahun anggota, jadi isi kolom ulang tahunnya; anggota tanpa tanggal ulang tahun tidak pernah dianggap pelanggan yang berulang tahun.",
          "Promo bulan ulang tahun memerlukan batas per pelanggan yang dihitung per tahun kalender: batas 1 berarti setiap pelanggan hanya bisa memakainya setahun sekali, dan batas itu diatur ulang tahun berikutnya. Promo tidak bisa disimpan tanpa batas ini.",
          "Kenaikan tingkat otomatis dinilai saat pembayaran selesai; jika penjualan dibatalkan melalui tindakan Batalkan penjualan (Void), kenaikan yang dipicunya dikembalikan secara otomatis."
        ]
      },
      {
        "type": "note",
        "text": "Sebelum v3.2, promo bulan ulang tahun menampilkan kesalahan dan tidak bisa disimpan meski batas per pelanggan sudah diisi. Jika ini terjadi pada Anda, perbarui DingPOS dari App Store."
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
    "question": "Cara mengatur hadiah, tambahan berbayar, dan paket harga",
    "keywords": [
      "hadiah",
      "tambahan berbayar",
      "paket harga",
      "beli a dapat b",
      "gratis hadiah",
      "panduan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tersedia tiga jenis promo gabungan: hadiah pembelian (Beli X / Dapat hadiah), tambahan berbayar (Beli X / Tambahan berbayar, tambah Rp X untuk mendapat Y), dan paket harga tetap (N item apa saja seharga Rp X). Hadiah dan tambahan berbayar menunggu konfirmasi kasir; paket harga berlaku otomatis."
      },
      {
        "type": "p",
        "text": "Hadiah dan tambahan berbayar tidak pernah mengubah keranjang dengan sendirinya. Saat syarat terpenuhi, banner saran muncul di layar kasir, dan keranjang berubah hanya setelah kasir mengetuk tombol hadiah atau tombol + di banner (Pilih hadiah atau Pilih tambahan) — ini disengaja, karena hadiah menyangkut stok fisik: seseorang perlu memastikan barangnya ada dan pelanggan memang mau."
      },
      {
        "type": "list",
        "items": [
          "Setelah ✕ di banner (Tolak), saran yang sama tidak muncul lagi untuk keranjang ini; keranjang baru atau yang sudah dikosongkan akan menawarkannya lagi.",
          "Jika keranjang tidak lagi memenuhi syarat (misalnya item pemicu hadiah dihapus), hadiah atau tambahan akan dihapus otomatis disertai pesan di bagian atas, dan tidak dihitung sebagai satu kali pemakaian (sejak v3.6).",
          "Sejak v3.4, tawaran yang masih tertunda tidak menghentikan pembayaran: baris kuning di bawah tombol bayar, seperti “1 tawaran tertunda tidak berlaku”, menunjukkan berapa yang dilewati (ketuk untuk melihat mana saja), dan pesanan tetap diproses tanpa tawaran itu. Agar pembayaran menunggu seperti sebelumnya, aktifkan Tangani tawaran sebelum bayar di Pengaturan → Preferensi Perangkat; pengaturan ini hanya berlaku untuk iPad ini.",
          "Baris hadiah dan tambahan tidak bisa didiskon lagi oleh promo uang lainnya, dan tidak dihitung untuk batas minimum promo lain."
        ]
      },
      {
        "type": "p",
        "text": "Paket harga (berlaku otomatis sejak v2.4): setiap kali keranjang bisa membentuk paket, DingPOS mengelompokkannya dan memasukkannya ke total — tanpa pemberitahuan, dan paket tidak bisa dipecah."
      },
      {
        "type": "list",
        "items": [
          "Paket hanya terbentuk jika membuat keranjang lebih murah. Di antara item berharga sama, yang belum didiskon dikelompokkan lebih dulu, dan item yang sudah didiskon tetap mempertahankan diskonnya.",
          "Item mana yang dikelompokkan bersama hanya bergantung pada isi keranjang, bukan urutan pemindaian.",
          "Setiap item anggota menampilkan bagiannya dari diskon paket, dan jumlah tiap baris sudah setelah diskon.",
          "Saat pembayaran, paket dikelompokkan ulang dengan harga terbaru; jika hasilnya berubah, Anda diminta mengonfirmasi total baru."
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
    "question": "Cara mengatur jadwal promo dan Happy Hour",
    "keywords": [
      "jadwal promo",
      "happy hour",
      "hari dalam seminggu",
      "lewat tengah malam",
      "panduan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Jadwal setiap promo punya tiga lapisan: rentang tanggal (mulai wajib, selesai opsional), jam harian (Happy Hour), dan hari yang dipilih. Ketiganya harus cocok agar promo berlaku."
      },
      {
        "type": "list",
        "items": [
          "Untuk jam yang melewati tengah malam (mis. 22:00–02:00), harinya dinilai dari hari saat jam itu dimulai: jika hanya Jumat yang dipilih, Sabtu pukul 01:30 masih dihitung sesi Jumat dan promo berlaku — tetapi Sabtu pukul 23:30 tidak.",
          "Tanggal selesai adalah batas mutlak — meski jam Happy Hour masih berjalan, promo berhenti begitu tanggal selesai lewat.",
          "Waktu dibaca dari jam perangkat iPad, jadi pastikan zona waktu dan jam perangkat sudah benar."
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
    "question": "Penjelasan prioritas, promo digabung, dan hentikan promo berikutnya",
    "keywords": [
      "prioritas promo",
      "promo digabung",
      "hentikan promo berikutnya",
      "promo bentrok",
      "panduan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat beberapa promo memenuhi syarat sekaligus, tiga pengaturan menentukan urutan dan interaksinya:"
      },
      {
        "type": "list",
        "items": [
          "Prioritas: nomor lebih kecil dihitung lebih dulu. Seret untuk mengurutkan ulang di daftar promo.",
          "Bisa digabung dengan promo lain (aktif secara bawaan): jika nonaktif, promo tingkat item hanya mengunci baris yang didiskonnya — item lain tetap bisa menerima promo tingkat item berikutnya; promo tingkat keranjang yang tidak bisa digabung memblokir semua promo tingkat keranjang berikutnya.",
          "Hentikan promo berikutnya saat promo ini berlaku: setelah promo ini berlaku, tidak ada lagi diskon uang yang dihitung — tetapi pengali poin dan saran hadiah tidak terpengaruh."
        ]
      },
      {
        "type": "note",
        "text": "Promo berikutnya dihitung dari jumlah yang sudah terkena diskon: diskon 10% ditambah 5% bukan diskon 15% — diskon kedua berlaku pada total setelah diskon pertama. DingPOS juga tidak pernah mencari kombinasi paling menguntungkan pelanggan; urutannya sepenuhnya ditentukan oleh prioritas yang Anda atur."
      },
      {
        "type": "p",
        "text": "Fakta menarik: jika sebuah diskon dibulatkan menjadi nol, penerapannya tidak dihitung — dan tidak memakai batas pemakaian."
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
    "question": "Apakah DingPOS akan terintegrasi dengan pembayaran non-tunai (EDC, QRIS)?",
    "keywords": [
      "pembayaran",
      "integrasi pembayaran",
      "mesin EDC",
      "QRIS",
      "payment gateway"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat ini DingPOS tidak menyentuh aliran uang. Metode pembayaran hanya berupa label pembukuan, sedangkan pembayaran sebenarnya tetap lewat mesin EDC atau aplikasi pembayaran yang sudah Anda pakai."
      },
      {
        "type": "p",
        "text": "Apakah kami akan mengintegrasikan pemrosesan pembayaran bergantung pada permintaan nyata pengguna. Jika Anda membutuhkannya, tulis kepada kami layanan yang ingin disambungkan (penyedia pembayaran dan mesin mana) beserta kebutuhan Anda. Kami menentukan prioritas pengembangan berdasarkan jumlah permintaan."
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
    "question": "Apakah DingPOS akan mendukung faktur elektronik atau cetak struk?",
    "keywords": [
      "faktur elektronik",
      "faktur pajak",
      "struk",
      "cetak struk",
      "printer struk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Belum. Faktur elektronik dan cetak struk mengharuskan kami membeli mesin faktur atau printer struk untuk pengujian dan pengembangan, dan biayanya cukup besar. Sebagai tim kecil, kami akan merencanakannya setelah jumlah pengguna bertambah dan pendapatan stabil."
      },
      {
        "type": "p",
        "text": "Jika Anda membutuhkannya, tulis kepada kami beserta model mesin yang Anda pakai. Kami menentukan prioritas pengembangan berdasarkan jumlah permintaan."
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
    "question": "Apakah DingPOS mendukung pemindai barcode fisik (scanner)?",
    "keywords": [
      "pemindai barcode",
      "scanner barcode",
      "alat scan barcode",
      "bluetooth",
      "usb",
      "perangkat keras"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pemindaian barcode lewat Kamera untuk menambahkan produk sudah didukung. Pemindai fisik (USB / Bluetooth) belum didukung secara resmi. Seperti fitur perangkat keras lainnya, kami perlu membeli perangkatnya untuk pengujian dan pengembangan, dan akan merencanakannya seiring bertambahnya pengguna."
      },
      {
        "type": "note",
        "text": "Kolom pencarian di layar kasir bisa mencocokkan barcode, jadi pemindai dalam mode keyboard secara teori dapat mengetik ke kolom tersebut dan memunculkan produk. Namun kami belum memverifikasinya pada perangkat sungguhan, sehingga belum didukung secara resmi. Jika Anda sudah mencoba pemindai yang berfungsi, beri tahu kami modelnya!"
      },
      {
        "type": "p",
        "text": "Jika Anda membutuhkannya, tulis kepada kami. Kami menentukan prioritas pengembangan berdasarkan jumlah permintaan."
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
    "question": "Apakah akan ada laporan pelunasan bulanan?",
    "keywords": [
      "laporan pelunasan bulanan",
      "tutup buku bulanan",
      "laporan bulanan",
      "rekonsiliasi",
      "rekap bulanan",
      "utang usaha",
      "piutang"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sejak v3.4, Laba Rugi menampilkan laba bersih tiap bulan setelah harga pokok produk, biaya, dan pengeluaran — lihat “Bagaimana cara melihat laba bersih toko saya setiap bulan?” Sejak v3.6, laporan pajak bisa mengekspor suatu periode (misalnya Bulan Ini) sebagai CSV, file Excel, atau Laporan PDF untuk akuntan Anda, lengkap dengan penjualan, pajak, jumlah yang diterima per metode pembayaran, dan piutang. Laba Rugi dan laporan lainnya belum bisa diekspor, tetapi semua yang Anda perlukan untuk rekonsiliasi sudah ada di aplikasi:"
      },
      {
        "type": "list",
        "items": [
          "Atur Statistik ke Bulan Ini untuk melihat pendapatan bulan itu, Kas Diterima, laba, dan rincian pembayaran.",
          "Pembelian dari pemasok dengan tempo bulanan terkumpul di Belum Lunas dalam Pembelian, dan satu bulan penuh bisa dilunasi sekaligus.",
          "Penjualan tempo ke pelanggan terkumpul di Pesanan → Piutang, dan satu bulan penuh bisa dilunasi sekaligus."
        ]
      },
      {
        "type": "p",
        "text": "Jika Anda membutuhkan laporan pelunasan bulanan yang bisa diekspor atau dicetak, di luar cakupan laporan pajak, tulis kepada kami beserta kolom yang Anda perlukan. Kami menentukan prioritas pengembangan berdasarkan jumlah permintaan."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
