// Generated from en and the id translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync id`, then `npm run l10n -- apply id`.

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
      "wizard",
      "buka toko",
      "aplikasi kasir"
    ],
    "content": [
      {
        "type": "p",
        "text": "Saat pertama kali membuka DingPOS, panduan pengaturan akan menuntun Anda membuka toko dalam sekitar 10 menit:"
      },
      {
        "type": "steps",
        "items": [
          "Pilih negara Anda — mata uang, mode pajak, dan tarif pajak default terisi otomatis (tarif pajak dan mode pajak masih bisa diubah pada tahap ini).",
          "Masukkan nama toko, dan unggah logo toko jika mau.",
          "Ikuti panduan untuk membuat 3–5 produk (boleh dilewati — Anda bisa menambahkannya kapan saja nanti)."
        ]
      },
      {
        "type": "p",
        "text": "Setelah selesai, Anda akan mendengar bunyi \"Ding!\" — toko Anda siap dan Anda bisa langsung mulai mencatat penjualan."
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
        "text": "Tidak. DingPOS tidak memakai sistem akun — unduh saja dan langsung berjualan. Produk, pesanan, dan data pelanggan Anda tetap ada di iPad Anda dan tidak pernah diunggah ke server kami."
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
        "text": "Saat ini DingPOS mendukung iPad dengan iPadOS 17 atau lebih baru, dan dirancang terutama untuk orientasi lanskap."
      },
      {
        "type": "p",
        "text": "iPhone dan Mac belum didukung. Jika Anda ingin kami mendukung perangkat lain, tulis kepada kami dan ceritakan kebutuhan Anda."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Bisakah mata uang atau mode pajak diubah setelah pengaturan awal?",
    "keywords": [
      "mata uang",
      "mode pajak",
      "ubah",
      "terkunci",
      "tarif pajak"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tarif pajak bisa diubah kapan saja di Pengaturan — tarif baru hanya berlaku untuk pesanan berikutnya."
      },
      {
        "type": "p",
        "text": "Mata uang dan mode pajak (termasuk pajak / belum termasuk pajak) terkunci setelah pengaturan awal selesai. Semua pesanan lama Anda dihitung dengan keduanya, jadi mengubahnya di tengah jalan akan merusak laporan Anda."
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
      "mandarin",
      "ganti bahasa",
      "wilayah"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS mendukung bahasa Inggris dan Tionghoa Tradisional. Buka Pengaturan → Preferensi Perangkat lalu ketuk Bahasa App. Halaman DingPOS di aplikasi Pengaturan iPad akan terbuka, lalu pilih bahasa di bagian Bahasa."
      },
      {
        "type": "p",
        "text": "iOS tidak mengizinkan aplikasi membuka daftar bahasa secara langsung, jadi ketukan terakhir dilakukan di Pengaturan sistem. Bahasa ini hanya berlaku untuk iPad ini."
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
        "text": "Layar kasir mendukung hingga 10 keranjang sekaligus. Ketuk \"+\" di bilah keranjang untuk menambah keranjang, lalu ketuk tab bernomor untuk berpindah."
      },
      {
        "type": "p",
        "text": "Setiap keranjang dihitung sendiri-sendiri. Saat pelanggan A masih memilih-milih, pindah ke keranjang lain dan layani pelanggan B lebih dulu. Slot keranjang otomatis hilang setelah pembayarannya selesai."
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
      "struk"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pajak dihitung otomatis sesuai mode pajak yang dipilih saat pengaturan awal. Struk menampilkan jumlah pajak di kedua mode:"
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
        "text": "Urutan perhitungan lengkap: diskon item → diskon keranjang → pajak. Jumlah dibulatkan ke atas pada angka setengah sesuai jumlah desimal mata uang (misalnya 0 untuk TWD, 2 untuk USD)."
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
    "question": "Metode pembayaran apa saja yang didukung?",
    "keywords": [
      "pembayaran",
      "tunai",
      "kartu kredit",
      "line pay",
      "kembalian",
      "metode pembayaran kustom",
      "penjualan tempo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tunai, Kartu Kredit, dan Line Pay sudah tersedia, dan Anda bisa menambahkan label pembayaran kustom di Pengaturan (misalnya Apple Pay, dompet digital lokal)."
      },
      {
        "type": "p",
        "text": "Metode pembayaran hanyalah label pembukuan — DingPOS tidak memproses pembayaran sungguhan. Terima pembayaran kartu atau ponsel dengan terminal atau aplikasi yang sudah Anda pakai, lalu pilih label yang sesuai di DingPOS untuk mencatatnya. Pembayaran tunai menghitung kembalian secara otomatis."
      },
      {
        "type": "p",
        "text": "Untuk pelanggan tetap yang membawa barang sekarang dan membayar nanti, pilih Penjualan tempo: penjualan dicatat sebagai piutang dan dilunasi saat uangnya diterima. Lihat “Bisakah pelanggan tetap membeli dengan tempo dan membayar nanti?”"
      }
    ],
    "related": [
      "on-account",
      "roadmap-payment-integration",
      "multiple-carts"
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
      "multiple-carts"
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
        "text": "Buka Pesanan, cari pesanannya, buka halaman rinciannya, lalu pilih Batalkan penjualan. Konfirmasi, selesai."
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
      "tukar ukuran"
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
          "Stok yang dilacak dikembalikan otomatis. Poin yang didapat dari pesanan asli ditarik kembali, poin yang ditukarkan dikembalikan, dan barang pengganti mendapat poinnya sendiri.",
          "Satu pesanan bisa diretur dalam beberapa kali, tetapi tidak boleh melebihi jumlah yang dijual semula. Batas pemakaian promo tidak dikembalikan oleh retur."
        ]
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
        "text": "Saat bayar, ganti bagian atas layar dari Penjualan ke Pra-pesan, pilih tanggal pengambilan, masukkan uang muka (dari 0 sampai jumlah penuh, dengan pintasan 30% / 50% / lunas), dan pilih cara uang muka dibayar. Tambahkan pelanggan agar Anda bisa menghubunginya saat barang tiba."
      },
      {
        "type": "list",
        "items": [
          "Stok dikurangi saat pra-pesan dibuat, sehingga barang tersimpan untuk pelanggan. Barang yang stoknya habis menjadi minus dan pulih begitu pesanan pembelian diterima.",
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
        "text": "Bisa. Pilih pelanggan saat bayar lalu pilih Penjualan tempo sebagai metode pembayaran. Setiap penjualan tempo harus terkait dengan pelanggan, jadi opsi Penjualan tempo tidak tersedia tanpa memilih pelanggan."
      },
      {
        "type": "p",
        "text": "Untuk menagih, ganti bagian atas Pesanan ke Piutang. Piutang dikelompokkan per pelanggan; buka salah satunya untuk melunasi satu pesanan, satu bulan penuh, atau semuanya — setiap kali DingPOS menanyakan bagaimana uangnya dibayar. Satu pesanan juga bisa dilunasi dari halaman rinciannya, dan pelunasan yang salah dimasukkan bisa ditarik kembali dengan Batalkan pelunasan."
      },
      {
        "type": "list",
        "items": [
          "Pendapatan dihitung pada hari barang keluar; Kas Diterima dan poin loyalitas menunggu sampai hari pelunasan.",
          "Pesanan yang belum lunas diberi lencana kuning di daftar, dan rincian pelanggan menunjukkan berapa yang masih terutang.",
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
      "payment-methods",
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
        "text": "Bisa. Halaman rincian pesanan, pelanggan, dan pesanan pembelian masing-masing punya kartu catatan — ketuk untuk mengedit, maksimal 500 karakter. Anda juga bisa menulisnya di formulir saat membuat pelanggan atau pesanan pembelian."
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
        "text": "Setiap kombinasi punya harga dan harga pokok sendiri, serta melacak stoknya sendiri. Saat pembayaran di kasir, mengetuk produk akan menampilkan pemilih varian sebelum produk dimasukkan ke keranjang."
      },
      {
        "type": "note",
        "text": "Nama opsi dan nama pilihan dibatasi maksimal 20 karakter."
      }
    ],
    "related": [
      "barcode-scanning",
      "inventory-tracking"
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
        "text": "Setelah aktif, penjualan dan pra-pesan otomatis mengurangi stok; pembatalan penjualan (void), retur, dan pra-pesan yang dibatalkan mengembalikannya; penerimaan pesanan pembelian menambahkannya; dan Anda bisa menyesuaikannya secara manual kapan saja. Setiap perubahan tercatat dalam riwayat lengkap. Stok menipis ditandai dengan peringatan warna."
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
        "text": "Stok minus biasanya berarti penambahan stok belum dicatat, atau barang pra-pesan belum tiba (pra-pesan mengurangi stok saat dibuat). Catat penambahan stok dengan menerima pesanan pembelian dan angkanya pulih sendiri; perbaiki selisih stok opname dengan penyesuaian manual, yang tersimpan di riwayat pergerakan stok."
      }
    ],
    "related": [
      "inventory-tracking",
      "purchase-orders",
      "pre-orders"
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
        "text": "Pembelian di sidebar mengelola pemasok dan pesanan pembelian. Data pemasok menyimpan nama, kontak, telepon, alamat, dan termin pembayaran bawaan (bayar langsung atau bulanan)."
      },
      {
        "type": "steps",
        "items": [
          "Ketuk Pembelian Baru, pilih pemasok, lalu tambahkan produk, jumlah, dan harga pokok satuan (terisi otomatis dengan harga pokok produk saat ini). Ongkos kirim juga bisa ditambahkan. Jika pemasok belum terdaftar, ketuk Tambah Pemasok di kiri atas daftar pemasok — pemasok baru langsung kembali ke pesanan pembelian.",
          "Draf tidak pernah memengaruhi stok maupun utang — edit atau hapus sesuka Anda.",
          "Saat barang tiba, ketuk Terima stok: stok yang dilacak bertambah, dan pesanan pembelian mendapat nomor lalu terkunci. Secara default, penerimaan juga memperbarui harga pokok tiap produk menjadi harga pokok satuan ini; matikan Sinkronkan harga pokok produk di pesanan pembelian agar harga pokok tidak berubah."
        ]
      },
      {
        "type": "p",
        "text": "Termin pembayaran menentukan langkah berikutnya: pesanan bayar langsung ditandai lunas, sedangkan pesanan bulanan tetap belum lunas di Belum Lunas, tempat Anda bisa melunasinya per pemasok — satu pesanan, bulan ini, atau semuanya."
      },
      {
        "type": "note",
        "text": "Pembelian memerlukan paket Standard atau yang lebih tinggi. Pemasok yang masih memiliki pesanan diterima yang belum lunas tidak bisa dihapus."
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
    "question": "Apa bedanya Pendapatan dan Kas Diterima?",
    "keywords": [
      "pendapatan",
      "kas diterima",
      "uang masuk",
      "rekonsiliasi kas",
      "uang muka",
      "penjualan tempo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pendapatan dihitung pada hari barang diserahkan, sedangkan Kas Diterima dihitung pada hari uangnya masuk. Untuk pesanan yang dibayar di kasir, keduanya terjadi di hari yang sama sehingga angkanya sama. Keduanya berbeda saat:"
      },
      {
        "type": "list",
        "items": [
          "Penjualan tempo: barang keluar hari ini dan masuk ke pendapatan hari ini; uangnya masuk ke Kas Diterima pada hari pelunasan.",
          "Pra-pesan: uang muka masuk ke Kas Diterima saat dibayar; pendapatan diakui penuh pada tanggal pengambilan.",
          "Uang muka hangus: jika pelanggan membatalkan pra-pesan dan Anda menyimpan uang mukanya, uang itu sudah masuk ke Kas Diterima saat dibayar. Statistik menampilkannya terpisah sebagai uang muka hangus, dan tidak pernah dihitung sebagai pendapatan."
        ]
      },
      {
        "type": "p",
        "text": "Untuk rekonsiliasi, cocokkan Kas Diterima dengan isi laci kasir dan mesin kartu Anda; untuk melihat berapa yang benar-benar terjual dalam suatu periode, lihat Pendapatan. Retur mengurangi pendapatan pada hari retur dilakukan."
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
    "question": "Laporan bisa menampilkan periode waktu apa saja?",
    "keywords": [
      "laporan",
      "periode laporan",
      "minggu ini",
      "bulan ini",
      "tahun ini",
      "rentang kustom",
      "tanggal",
      "produk terlaris"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pilih Hari ini, Kemarin, Minggu Ini, Bulan Ini, Tahun Ini, atau Semua Waktu di bagian atas Statistik, atau gunakan Kustom untuk memilih tanggal mulai dan tanggal akhir. Minggu Ini mengikuti hari pertama dalam seminggu di perangkat; Bulan Ini dan Tahun Ini dimulai pada tanggal 1 dan 1 Januari. Setiap pilihan menampilkan tanggal yang dicakupnya, dan Semua Waktu dimulai dari transaksi pertama toko Anda."
      },
      {
        "type": "p",
        "text": "Untuk satu hari, grafik tren berubah menjadi grafik batang per jam; periode yang lebih panjang memakai hari, minggu, bulan, atau tahun per batang sesuai panjangnya."
      },
      {
        "type": "p",
        "text": "Kartu Peringkat Produk menampilkan 5 teratas. Ketuk kartu atau Lihat Semua untuk menampilkan semua produk yang terjual dalam periode itu, diurutkan menurut jumlah setelah retur."
      },
      {
        "type": "p",
        "text": "Di paket Pro, Perbandingan penjualan di sisi kanan bilah periode membandingkan periode itu dengan periode sebelumnya atau dengan periode yang sama tahun lalu — lihat “Apa saja yang ditampilkan laporan lanjutan Pro?”"
      },
      {
        "type": "note",
        "text": "Periode kalender ini hadir di v2.4; versi sebelumnya menawarkan rentang bergulir (Hari ini / 7 Hari / 30 Hari / Semua Waktu). Jika Anda masih melihatnya, perbarui DingPOS dari App Store."
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
    "question": "Apa saja yang ditampilkan laporan lanjutan Pro?",
    "keywords": [
      "laporan lanjutan",
      "pro",
      "perbandingan penjualan",
      "tahun lalu",
      "peta panas",
      "jam ramai",
      "produk kurang laku",
      "nilai persediaan",
      "tingkat pembelian ulang",
      "poin"
    ],
    "content": [
      {
        "type": "p",
        "text": "Laporan lanjutan bukan layar terpisah — laporan ini langsung ada di Statistik dan mengikuti periode yang Anda pilih di bagian atas:"
      },
      {
        "type": "list",
        "items": [
          "Perbandingan penjualan: di sisi kanan bilah periode, bandingkan dengan periode yang sama tahun lalu atau dengan periode sebelumnya (satu hari dengan hari yang sama minggu lalu, minggu ini dengan minggu lalu, bulan ini dengan bulan lalu, tahun ini dengan tahun lalu, rentang kustom dengan jumlah hari yang sama sebelumnya). Kartu Kas Diterima menampilkan selisih dan tingkat pertumbuhan, dan grafik pendapatan menambahkan garis yang lebih terang untuk periode pembanding. Selama suatu periode masih berjalan, periode pembanding dipotong pada saat yang sama.",
          "Hari × jam: ubah header Penjualan seiring waktu ke Hari × jam untuk melihat peta panas tujuh hari × 24 jam — semakin gelap sebuah sel, semakin banyak yang Anda jual. Beralihlah antara pendapatan dan pesanan; dengan perbandingan aktif, lihat jam mana yang naik dan mana yang turun.",
          "Produk Kurang Laku: ubah header kartu peringkat ke Produk Kurang Laku untuk menampilkan produk dari penjualan paling sedikit hingga paling banyak, lengkap dengan stok saat ini dan tanggal terakhir masing-masing terjual. Produk yang belum pernah terjual ditandai Belum pernah terjual. Secara default hanya produk yang ada stoknya yang ditampilkan.",
          "Tingkat pembelian ulang: baris terakhir pada kartu pelanggan adalah persentase anggota yang membeli dalam periode itu dan sudah membeli dua kali atau lebih secara total.",
          "Saat ini: nilai persediaan (stok saat ini × harga pokok saat ini), semua pergerakan stok dalam periode yang dipilih, serta poin yang dimiliki pelanggan tetapi belum ditukar, beserta potongan maksimum yang bisa didapat. Ini adalah saldo saat ini; periode tidak mengubahnya."
        ]
      },
      {
        "type": "p",
        "text": "Tanpa Pro, masing-masing dari lima bagian ini menampilkan ikon gembok kecil yang membuka penjelasan tentang upgrade; semua bagian Statistik lainnya berfungsi seperti biasa. Laporan ini membaca data yang sudah tersimpan di toko Anda, jadi saat Pro berakhir hanya laporannya yang disembunyikan — tidak ada data yang hilang."
      },
      {
        "type": "note",
        "text": "Staf melihat laporan lanjutan melalui izin Dasbor; jumlah nilai persediaan juga memerlukan izin Harga pokok & laba."
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
    "question": "Bagaimana laba dilaporkan jika saya tidak mengisi harga pokok?",
    "keywords": [
      "harga pokok",
      "laba",
      "margin",
      "laporan",
      "tidak dilacak"
    ],
    "content": [
      {
        "type": "p",
        "text": "Harga pokok adalah kolom opsional. Produk tanpa harga pokok ditandai “laba tidak dilacak” di laporan dan tidak diikutkan dalam perhitungan laba — pendapatan tetap dihitung penuh, hanya laba yang tidak dihitung."
      },
      {
        "type": "p",
        "text": "Untuk mendapatkan laporan laba yang lengkap, isi harga pokok di halaman edit produk; pesanan berikutnya akan ikut dihitung. Laba dihitung dari pendapatan setelah diskon."
      }
    ],
    "related": [
      "report-periods",
      "purchase-orders"
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
          "Cakupan: apakah barang di keranjang termasuk dalam cakupan produk atau kategori promo? Apakah minimal belanja sudah tercapai?",
          "Sasaran: apakah promo dibatasi untuk tingkat anggota atau bulan ulang tahun tertentu? Apakah anggota tersebut sudah dipilih saat pembayaran?",
          "Batas pemakaian: apakah batas total pemakaian, atau batas untuk pelanggan ini, sudah tercapai?",
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
        "text": "Buka Pengaturan → Program Loyalitas dan tetapkan dua aturan: dapat Y poin untuk setiap belanja X, dan tukar N poin untuk potongan M (dengan batas penukaran per pesanan yang bersifat opsional). Anda juga bisa memberi bonus selamat datang otomatis kepada anggota baru."
      },
      {
        "type": "p",
        "text": "Pilih anggota saat pembayaran, lalu poin bertambah otomatis; untuk menukar, masukkan jumlah poin yang dipakai. Jika penjualan yang keliru dibatalkan lewat Batalkan penjualan (Void), poin yang diperoleh dari pesanan tersebut ditarik kembali dan poin yang sudah ditukar dikembalikan."
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
      "aplikasi error"
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
    "slug": "import-csv",
    "category": "backup",
    "since": "2.3",
    "question": "Bisakah mengimpor produk dan penjualan dari aplikasi kasir lain atau spreadsheet?",
    "keywords": [
      "impor",
      "impor data",
      "csv",
      "excel",
      "spreadsheet",
      "pindah aplikasi kasir",
      "migrasi",
      "impor massal",
      "riwayat penjualan"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bisa. Buka Pengaturan → Impor Data, pilih mengimpor produk atau penjualan, lalu pilih file CSV (Excel dan Google Sheets sama-sama bisa menyimpan sebagai CSV)."
      },
      {
        "type": "steps",
        "items": [
          "File terbuka sebagai tabel. Nama kolom umum dalam bahasa Inggris dan Mandarin dicocokkan otomatis; ketuk judul kolom mana pun untuk mengubah pemetaannya.",
          "Ketuk sel mana pun untuk memperbaiki nilainya langsung di tempat — tidak perlu mengedit file lalu mengulang dari awal.",
          "Ketuk Konfirmasi untuk memvalidasi. Baris yang bermasalah ditandai merah beserta alasannya; impor penjualan bisa melewati pesanan yang berisi kesalahan.",
          "Selesaikan hal yang perlu keputusan (nama produk ganda, satu baris yang cocok dengan beberapa pelanggan), periksa ringkasan, lalu ketuk Mulai impor."
        ]
      },
      {
        "type": "list",
        "items": [
          "Penjualan yang diimpor ditempatkan berdasarkan tanggal transaksi dan dihitung ulang dengan mata uang dan mode pajak toko Anda. Penjualan ini tidak memengaruhi stok dan tidak memberi bonus selamat datang.",
          "Pelanggan dicocokkan dengan pelanggan yang sudah ada lewat nomor telepon atau email; yang tidak cocok akan dibuat baru.",
          "Pesanan yang diimpor menampilkan tanggal Diimpor pada dan nomor pesanan asal, serta tidak bisa dibatalkan (void) atau diretur.",
          "Baris yang berisi kesalahan bisa diekspor sebagai CSV yang dilengkapi alasannya — perbaiki lalu impor lagi. Baris ganda dilewati otomatis."
        ]
      },
      {
        "type": "note",
        "text": "Impor data masih dalam versi beta. Setiap file dapat berisi hingga 50.000 baris atau 20 MB. Jalankan cadangan cloud sebelum mengimpor; jika ada yang tidak bisa diimpor atau hasilnya tampak keliru, beri tahu kami lewat Laporkan masalah di layar impor."
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
          "Tindakan (penyesuaian stok manual, pengelolaan produk, menyelesaikan pembayaran dengan diskon di atas batas): satu persetujuan berlaku untuk satu tindakan itu saja.",
          "Tampilan (biaya & laba, Statistik, Pengaturan, cadangan & pemulihan): persetujuan membuka akses sampai operator berganti atau aplikasi masuk ke latar belakang.",
          "Batas diskon berlaku untuk diskon manual dan diperiksa satu kali saat bayar; promo otomatis dan penukaran poin tidak dihitung."
        ]
      },
      {
        "type": "p",
        "text": "Bawaan pabrik: Manajer diizinkan melakukan semuanya kecuali cadangan & pemulihan, tanpa batas diskon; Staf perlu persetujuan untuk semuanya, dengan batas 10%. Pemilik selalu diizinkan dan tidak bisa diedit. Untuk mengubahnya, buka Staf → Izin peran, ketuk Edit, lalu simpan sekali — berlaku untuk semua orang seketika."
      },
      {
        "type": "note",
        "text": "Pembatalan penjualan (void), retur, penjualan tempo, dan pembelian sengaja tidak memiliki izin; semuanya hanya mencatat siapa yang menanganinya. Untuk meninjaunya nanti, gunakan log aktivitas."
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
        "text": "Gunakan log aktivitas. Di halaman Staf, ketuk Log aktivitas di kanan atas dan masukkan PIN pemilik untuk melihat tindakan sensitif di toko, dari yang terbaru: pembatalan penjualan (void), retur, penyesuaian stok manual, persetujuan, perubahan staf dan izin, perubahan PIN pemilik, perubahan harga jual dan harga pokok produk, serta penghapusan produk. Transaksi kasir biasa tidak dicantumkan."
      },
      {
        "type": "list",
        "items": [
          "Setiap entri menunjukkan apa yang disentuh, siapa melakukan apa dan kapan, serta hasilnya — misalnya “M harga $390 → $350”.",
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
        "text": "Sejak pertama kali dipasang, Anda mendapat 30 hari semua fitur paket Pro, termasuk akun staf, izin, log aktivitas, dan laporan lanjutan — tanpa perlu membuat akun."
      },
      {
        "type": "p",
        "text": "Jika Anda berlangganan paket apa pun selama masa uji coba, uji coba langsung berakhir dan paket yang Anda beli berlaku sejak saat itu. Setelah uji coba, fitur Pro seperti staf dan laporan lanjutan hanya tersedia dengan langganan Pro."
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
        "text": "Ketiga paket mencakup fitur kasir lengkap, produk, pesanan (dengan pembatalan penjualan (void), retur, dan tukar barang), laporan, dan cadangan cloud. Bedanya ada pada alat untuk menjalankan toko:"
      },
      {
        "type": "list",
        "items": [
          "Lite: untuk satu orang yang menjaga lapak dan butuh kasir serta pengelolaan produk.",
          "Standard: menambah promo, poin loyalitas dan tingkat member, pelacakan stok, pembelian ke pemasok, penjualan tempo, dan pra-pesan.",
          "Pro: menambah akun staf dan izin, persetujuan manajer, log aktivitas, catatan pemulihan, dan laporan lanjutan — untuk toko yang punya staf."
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
        "text": "Buat dulu tingkat di Pengaturan → Tingkat Anggota (mis. Gold), lalu arahkan promo ke tingkat itu. Untuk promo ulang tahun, atur syaratnya ke “Bulan ulang tahun”."
      },
      {
        "type": "list",
        "items": [
          "Anggota harus dipilih saat pembayaran agar promo berlaku — kelayakan dinilai berdasarkan anggota yang sedang dipilih.",
          "Kelayakan ulang tahun membaca bulan ulang tahun anggota, jadi isi kolom ulang tahunnya; anggota tanpa tanggal ulang tahun tidak pernah dianggap pelanggan yang berulang tahun.",
          "Kenaikan tingkat otomatis dinilai saat pembayaran selesai; jika penjualan dibatalkan melalui tindakan Batalkan penjualan (Void), kenaikan yang dipicunya dikembalikan secara otomatis."
        ]
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
        "text": "Hadiah dan tambahan berbayar tidak pernah mengubah keranjang dengan sendirinya. Saat syarat terpenuhi, banner saran muncul di layar kasir, dan keranjang berubah hanya setelah kasir mengetuk Pilih (Pilih hadiah atau Pilih tambahan) — ini disengaja, karena hadiah menyangkut stok fisik: seseorang perlu memastikan barangnya ada dan pelanggan memang mau."
      },
      {
        "type": "list",
        "items": [
          "Setelah Tolak, saran yang sama tidak muncul lagi untuk keranjang ini; keranjang baru atau yang sudah dikosongkan akan menawarkannya lagi.",
          "Jika saran baru muncul sebelum konfirmasi pembayaran, saran itu harus dipilih atau ditolak sebelum pesanan bisa dikirim.",
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
        "text": "Belum ada laporan pelunasan bulanan khusus, tetapi semua yang Anda perlukan untuk rekonsiliasi sudah ada di aplikasi:"
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
        "text": "Jika Anda membutuhkan laporan pelunasan bulanan yang bisa diekspor atau dicetak, tulis kepada kami beserta kolom yang Anda perlukan. Kami menentukan prioritas pengembangan berdasarkan jumlah permintaan."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
