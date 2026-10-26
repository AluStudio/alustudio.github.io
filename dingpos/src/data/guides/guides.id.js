// DingPOS guides — id pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of en or zh-Hant: each language lists only the guides written
// for the markets that read it, and a language without a pack has no guides
// section. This pack is written natively in Indonesian, not generated through
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
//   market   — the market the facts hold for, a key of ui.markets ("ID")
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
  nav: "Panduan",
  title: "Panduan Toko Kecil",
  subtitle: "Cara menghitung pembayaran, modal, dan laba, untuk pemilik yang menjaga tokonya sendiri.",
  meta_description: "Panduan untuk pemilik toko kecil: cara menghitung potongan kartu dan QRIS, berapa laba yang ikut terpotong, lengkap dengan rumus, contoh hitungan, dan sumber.",
  back: "Semua panduan",
  related_title: "Bacaan lainnya",
  sources_title: "Sumber",
  checked: "Terakhir diperiksa: {{date}}",
  cta_title: "Catat penjualan di iPad, lihat perkiraan biaya tiap metode pembayaran",
  cta_text: "DingPOS adalah aplikasi kasir iPad untuk toko kecil. Uji coba gratis 30 hari, tanpa biaya transaksi.",
  cta_button: "Unduh di App Store",
  markets: { ID: "Indonesia" },
};

export const articles = [
  {
    slug: "payment-processing-fees-indonesia",
    market: "ID",
    checked: "2026-10-25",
    title: "Biaya MDR QRIS dan EDC untuk pedagang: potongannya berapa persen, dan berapa laba yang terpotong?",
    summary: "QRIS: 0% sampai Rp500.000 untuk usaha mikro; debit GPN 0,15%–1%; Visa/Mastercard 1,8%–2%. Kartu 2% memotong 5% laba barang Rp150.000 bermodal Rp90.000.",
    content: [
      { type: "p", text: "Mulai 1 Oktober 2026, QRIS bebas MDR bagi semua merchant untuk transaksi sampai Rp100.000, dan bagi usaha mikro sampai Rp500.000; di atas batas itu, usaha mikro kena 0,3% dan usaha lain 0,7%. Debit GPN di mesin EDC kena 0,15% (bank sama) atau 1% (beda bank); kartu kredit ikut kontrak, misalnya 2% di BCA dan 1,8% di Mandiri. Yang berkurang adalah laba kotor: barang Rp150.000 bermodal Rp90.000 yang dibayar dengan kartu kredit 2% terpotong Rp3.000, atau 5% dari laba Rp60.000." },

      { type: "h2", text: "Berapa potongan untuk setiap metode pembayaran?" },
      { type: "p", text: "Tarif QRIS dan debit GPN ditetapkan Bank Indonesia (BI), tarif kartu kredit oleh bank (per Oktober 2026). Tarif toko Anda ada di kontrak atau Formulir Data Merchant." },
      {
        type: "table",
        head: ["Metode pembayaran", "Potongan (MDR)", "Keterangan"],
        rows: [
          ["Tunai", "0", "Tanpa biaya"],
          ["QRIS, usaha mikro", "0% sampai Rp500.000, 0,3% di atasnya", "Untuk m-banking dan dompet digital, misalnya GoPay atau DANA"],
          ["QRIS, usaha kecil, menengah, dan besar", "0% sampai Rp100.000, 0,7% di atasnya", "Batas Rp100.000 sejak 1 Oktober 2026"],
          ["Debit GPN, bank sama", "0,15%", "Misalnya debit BCA di EDC BCA"],
          ["Debit GPN, beda bank", "1%", "Debit bank lain di EDC BCA"],
          ["Kartu kredit", "Ikut kontrak; BCA 2%, Mandiri 1,8%", "Visa, Mastercard"],
          ["Uang elektronik (Flazz, e-money Mandiri)", "0,5%", "Tarif reguler di EDC BCA dan Mandiri"],
        ],
      },
      { type: "p", text: "Kategori mikro atau kecil dicatat penyedia QRIS dan bisa berubah: GoPay otomatis memindahkan merchant dari Mikro ke Kecil setelah transaksinya mencapai Rp300 juta dalam 12 bulan terakhir. Tanyakan kategori Anda ke penyedia QRIS." },
      { type: "note", text: "PPN dikenakan atas MDR, bukan atas nilai pembayaran, dan ditanggung pedagang (Ditjen Pajak). Tarif efektifnya 11% (12% dengan DPP nilai lain 11/12): kalau ditambahkan di atas MDR 2%, potongannya 2,22%. Penyedia tidak seragam (BCA dan Mandiri tidak menyebutnya, GoPay menulis QRIS tidak dikenakan PPN), jadi cek baris PPN di laporan settlement Anda. Toko beromzet sampai Rp4,8 miliar setahun tidak wajib menjadi PKP; selama belum PKP, PPN ini tidak bisa dikreditkan dan ikut menjadi biaya." },

      { type: "h2", text: "Potongan memakan laba kotor, bukan omzet" },
      { type: "p", text: "Potongan dihitung dari harga jual, tetapi diambil dari laba kotor (harga jual dikurangi harga pokok). Contohnya barang Rp150.000 dengan harga pokok Rp90.000, laba kotornya Rp60.000:" },
      {
        type: "table",
        caption: "Satuan: rupiah, belum termasuk PPN atas MDR. \"Sisa\" belum dipotong sewa, gaji, dan biaya lain.",
        head: ["", "Tunai / QRIS usaha mikro", "QRIS usaha kecil 0,7%", "Debit beda bank 1%", "Kartu kredit 2%"],
        rows: [
          ["Pelanggan membayar", "150.000", "150.000", "150.000", "150.000"],
          ["Potongan", "0", "1.050", "1.500", "3.000"],
          ["Diterima toko", "150.000", "148.950", "148.500", "147.000"],
          ["Sisa setelah harga pokok dan potongan", "60.000", "58.950", "58.500", "57.000"],
          ["Potongan sebagai persen laba kotor", "0%", "1,75%", "2,5%", "5%"],
        ],
      },
      { type: "p", text: "Rumusnya: bagian laba yang terpotong = tarif potongan ÷ margin laba kotor. Di contoh ini marginnya 60.000 ÷ 150.000 = 40%, jadi 2% ÷ 40% = 5%. Makin tipis margin, makin besar bagian yang terpotong:" },
      {
        type: "table",
        caption: "Isi tabel: potongan sebagai persen laba kotor.",
        head: ["Margin laba kotor", "Tarif 0,7%", "Tarif 1%", "Tarif 2%"],
        rows: [
          ["20%", "3,5%", "5%", "10%"],
          ["30%", "2,3%", "3,3%", "6,7%"],
          ["40%", "1,8%", "2,5%", "5%"],
          ["50%", "1,4%", "2%", "4%"],
          ["60%", "1,2%", "1,7%", "3,3%"],
        ],
      },

      { type: "h2", text: "Berapa potongan dalam sebulan? Hitung per metode" },
      { type: "p", text: "Hitung tiap metode sendiri lalu jumlahkan; tunai nol. Misalkan toko usaha mikro menerima Rp60 juta pembayaran nontunai sebulan:" },
      {
        type: "table",
        caption: "Satuan: rupiah. Kartu kredit memakai tarif BCA 2%. Belum termasuk PPN atas MDR dan biaya pemeliharaan terminal EDC.",
        head: ["Metode pembayaran", "Penjualan sebulan", "Tarif", "Potongan"],
        rows: [
          ["QRIS, transaksi sampai Rp500.000", "36.000.000", "0%", "0"],
          ["QRIS, transaksi di atas Rp500.000", "4.000.000", "0,3%", "12.000"],
          ["Debit GPN, bank sama", "5.000.000", "0,15%", "7.500"],
          ["Debit GPN, beda bank", "10.000.000", "1%", "100.000"],
          ["Kartu kredit", "5.000.000", "2%", "100.000"],
          ["Jumlah", "60.000.000", "", "219.500"],
        ],
      },
      { type: "p", text: "Toko ini membayar Rp219.500 sebulan, atau Rp2.634.000 setahun. QRIS adalah dua pertiga penjualan nontunai tetapi hanya Rp12.000 potongan; sekitar 95% datang dari kartu. Ganti angka di tabel dengan angka toko Anda." },

      { type: "h2", text: "Kenapa uang yang masuk lebih kecil dari omzet di kasir?" },
      { type: "p", text: "Bank mengkreditkan dana setelah dipotong MDR, sedangkan kasir mencatat jumlah yang dibayar pelanggan. Selisihnya adalah potongan." },
      {
        type: "list",
        items: [
          "Catat penjualan sebesar yang dibayar pelanggan dan MDR sebagai biaya tersendiri, supaya omzet tidak tampak turun saat pelanggan beralih ke kartu atau QRIS.",
          "Dana tidak selalu masuk hari itu: di EDC BCA, toko wajib settlement minimal sekali sehari (QRIS statis otomatis), dan dananya efektif paling lambat hari kalender berikutnya. Saat tutup buku, sebagian uang mungkin masih dalam perjalanan.",
          "Untuk refund QRIS, BCA mendebet rekening toko sebesar dana refund dikurangi MDR yang sudah dipotong, jadi MDR-nya tidak hilang. Untuk refund kartu, tanyakan ke bank Anda.",
        ],
      },

      { type: "h2", text: "Bolehkah potongan kartu atau QRIS dibebankan ke pembeli?" },
      { type: "p", text: "Tidak boleh. Peraturan Bank Indonesia melarang pedagang membebankan biaya dari penyedia jasa pembayaran kepada pembeli (surcharge), baik untuk kartu, QRIS, maupun uang elektronik. \"Tambah 2% kalau gesek kartu kredit\" dan \"biaya admin QRIS Rp1.000\" sama-sama melanggar. Penyedia wajib memutus kerja sama dengan pedagang yang merugikan, dengan surcharge sebagai contohnya, dan namanya bisa masuk daftar hitam merchant." },
      { type: "p", text: "Syarat EDC dan QRIS BCA juga melarang batas minimum transaksi, seperti \"bayar kartu minimal Rp50.000\". Yang aman: masukkan potongan ke harga untuk semua pembeli. Kalau separuh omzet dibayar nontunai dengan potongan rata-rata 1%, harga seluruh toko cukup dinaikkan sekitar 0,5%." },

      { type: "h2", text: "Perlukah menerima kartu kredit? Hitung titik impasnya" },
      { type: "p", text: "Biayanya potongan, hasilnya penjualan dari pembeli yang batal membeli tanpa kartu. Titik impasnya: penjualan tambahan yang dibutuhkan, sebagai persen penjualan kartu = tarif potongan ÷ margin laba kotor." },
      { type: "p", text: "Dengan margin 40% dan tarif 2%, setiap Rp10 juta penjualan kartu kredit terpotong Rp200.000. Kalau minimal Rp500.000 (5%) di antaranya datang dari pembeli yang membeli hanya karena toko menerima kartu, potongan itu sudah tertutup." },
      { type: "p", text: "Perhitungkan juga syarat mesinnya: BCA berhak memungut biaya pemeliharaan terminal per bulan dan menarik EDC yang tidak mencapai pemakaian minimum Rp15 juta atau 100 transaksi per terminal per bulan. QRIS pun sudah dipakai 65,77 juta pengguna (BI, sampai Juni 2026). Tetapi kalau pembeli sering bertanya \"bisa gesek kartu?\", hitung apakah tambahan penjualannya melewati titik impas ini." },

      { type: "h2", text: "Bagaimana mengetahui tarif yang sebenarnya Anda bayar?" },
      { type: "p", text: "Angka paling tepat ada di laporan settlement atau mutasi rekening (di GoPay Merchant: buka Keuangan, lalu pilih transaksinya). Bagi total potongan sebulan dengan penjualan metode itu: itulah tarif sebenarnya, termasuk PPN kalau ada." },
      { type: "p", text: "Kalau kasir Anda memakai iPad, [DingPOS](/) bisa menghitungnya. Di Pengaturan → Metode Pembayaran, ketuk sebuah metode dan isi Biaya pemrosesan: persentase, jumlah tetap per transaksi, atau keduanya. Masukkan tarif yang benar-benar dipotong, termasuk PPN kalau ditambahkan bank (2,22% untuk MDR 2%). Untuk QRIS yang gratis sampai batas tertentu, isi tarif rata-rata dari laporan bulan lalu, karena tarif di DingPOS berlaku untuk semua nominal." },
      { type: "image", src: "guides/fees-id-settings.webp", width: 872, height: 764, alt: "DingPOS Pengaturan → Metode Pembayaran: kolom Biaya pemrosesan sebuah metode pembayaran, dengan persentase sudah diisi", caption: "Isi Biaya pemrosesan dengan tarif yang benar-benar dipotong, termasuk PPN kalau ditambahkan." },
      { type: "p", text: "Sejak itu, kartu Metode Pembayaran di Statistik menampilkan:" },
      {
        type: "list",
        items: [
          "Di bawah tiap metode yang punya tarif ada baris \"Biaya · Bersih\": perkiraan biaya dan perkiraan kas bersih diterima lewat metode itu.",
          "Bagian bawah kartu menampilkan perkiraan biaya dan perkiraan kas bersih diterima untuk seluruh periode.",
          "Pembayaran yang diterima sebelum metode itu punya tarif tidak membawa biaya: Statistik menandainya \"(N tanpa tarif)\" dan kas bersihnya tampil sebagai \"—\".",
        ],
      },
      { type: "image", src: "guides/fees-id-report.webp", phone: "guides/fees-id-report-1080w.webp", width: 1126, height: 1070, alt: "Kartu Metode Pembayaran di Statistik DingPOS: baris “Biaya · Bersih” di bawah metode yang punya tarif, dan perkiraan biaya serta perkiraan kas bersih diterima untuk seluruh periode di bagian bawah kartu", caption: "Statistik memperkirakan biaya dan kas bersih diterima tiap metode dari tarif yang Anda isi." },
      { type: "p", text: "Angka ini perkiraan dari tarif yang Anda masukkan: DingPOS tidak memproses pembayaran dan tidak membaca laporan bank atau penyedia pembayaran, jadi jumlah sebenarnya tetap yang di laporan penyedia Anda. Cara mengaturnya: [Bisakah DingPOS mencatat biaya pembayaran kartu dan ponsel?](/support/payment-fees/). Fitur ini memerlukan paket Standard atau lebih tinggi; bandingkan di [Paket & Harga](/pricing/), dan coba gratis 30 hari." },
      { type: "p", text: "Kami tidak menemukan kewajiban nasional memakai mesin kasir fiskal bersertifikat, tetapi sebagian Pemda, misalnya Kabupaten Kudus, mewajibkan wajib pajak PBJT seperti restoran dan kafe menginput setiap transaksi ke alat perekam (tapping box) dari Pemda. DingPOS bukan alat itu dan tidak terhubung ke Bapenda; di daerah seperti itu, setiap transaksi tetap dicatat di alat Pemda." },
    ],
    sources: [
      { label: "Bank Indonesia: MDR QRIS bagi merchant, kategorisasi dan tarif yang berlaku mulai 1 Oktober 2026", url: "https://www.bi.go.id/id/publikasi/ruang-media/cerita-bi/Pages/mdr-qris.aspx" },
      { label: "Bank Indonesia: Siaran Pers No.28/159/DKom, 17 Agustus 2026 (perluasan MDR QRIS 0%, 65,77 juta pengguna QRIS)", url: "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2815926.aspx" },
      { label: "Bank Indonesia: Infrastruktur GPN, skema harga MDR kartu debit (on us 0,15%, off us 1%)", url: "https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/infrastruktur/default.aspx" },
      { label: "BCA: EDC BCA, biaya dan limit (MDR kartu debit, kartu kredit, dan Flazz; perubahan terakhir 1 Oktober 2026)", url: "https://www.bca.co.id/bisnis/produk/penerimaan-bisnis/EDC-BCA" },
      { label: "BCA: Syarat dan Ketentuan EDC dan QRIS Statis (tanpa batas minimum, settlement, biaya pemeliharaan, pemakaian minimum terminal, refund QRIS, larangan surcharge)", url: "https://pustaka.bca.co.id/-/media/Files/Bisnis/Produk/Penerimaan-Bisnis/QRIS-bisnis/SnK-EDC-QRIS-Statis-ID.pdf" },
      { label: "Bank Mandiri: Mandiri EDC, risiko dan biaya (MDR kartu kredit 1,80%, prepaid 0,50%)", url: "https://www.bankmandiri.co.id/edc" },
      { label: "GoPay: Ketentuan biaya transaksi (MDR) QRIS dan cara mengeceknya (perpindahan otomatis dari Mikro ke Kecil pada Rp300 juta dalam 12 bulan; QRIS tidak dikenakan PPN)", url: "https://gopay.co.id/bantuan-merchant/pembayaran-qris/potongan-transaksi-qris-gopay" },
      { label: "Peraturan Bank Indonesia Nomor 23/6/PBI/2021 tentang Penyedia Jasa Pembayaran (Pasal 51 dan 52: larangan surcharge, penghentian kerja sama, daftar hitam merchant)", url: "https://www.bi.go.id/id/publikasi/peraturan/Documents/PBI_230621.pdf" },
      { label: "Kompas.com, 24 Desember 2024: DJP, PPN dikenakan atas MDR dan ditanggung merchant (PMK 69/2022)", url: "https://money.kompas.com/read/2024/12/24/050900226/ditjen-pajak--ppn-qris-ditanggung-merchant-bukan-konsumen-" },
      { label: "DDTCNews: MDR 0%, PPN atas MDR Rp0; dasar pengenaan PPN jasa sistem pembayaran (PMK 69/2022 Pasal 9 ayat 3)", url: "https://news.ddtc.co.id/berita/nasional/1807874/mdr-nol-persen-bi-jamin-tidak-ada-ppn-atas-qris-usaha-mikro" },
      { label: "DDTCNews: DPP nilai lain 11/12 menurut PMK 131/2024 dan pengecualiannya", url: "https://news.ddtc.co.id/data-alat/pungutan-komoditas/1807948" },
      { label: "UU Nomor 42 Tahun 2009 tentang PPN (Pasal 9 ayat 2: pajak masukan dikreditkan dengan pajak keluaran)", url: "https://peraturan.bpk.go.id/Download/28116/UU%20Nomor%2042%20Tahun%202009.pdf" },
      { label: "DDTCNews: Batas pengusaha kecil PPN Rp4,8 miliar", url: "https://news.ddtc.co.id/berita/nasional/1810885/omzet-belum-tembus-rp48-miliar-bolehkah-pengusaha-kecil-pungut-ppn" },
      { label: "Peraturan Bupati Kudus Nomor 21 Tahun 2025 (Pasal 103–104: wajib pajak PBJT selain tenaga listrik memakai alat perekam transaksi dari Pemda dan menginput setiap transaksi)", url: "https://peraturan.bpk.go.id/Download/385276/2025pb3319021-BPPKAD_sign.pdf" },
      { label: "Bappenda Kota Cimahi: Pemasangan alat perekam transaksi elektronik PBJT makanan dan/atau minuman, 15 September 2026", url: "https://bappenda.cimahikota.go.id/detail/pemasangan-alat-perekam-transaksi-elektronik-pbjt-makanan-danatau-minuman" },
    ],
    related: [],
  },
];
