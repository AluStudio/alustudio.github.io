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
      { type: "p", text: "Mulai 1 Oktober 2026, QRIS bebas MDR untuk transaksi sampai Rp100.000 di semua kategori merchant, dan untuk usaha mikro tetap bebas sampai Rp500.000; di atas batas itu, usaha mikro kena 0,3% dan usaha kecil, menengah, dan besar kena 0,7%. Kartu debit GPN di mesin EDC kena 0,15% kalau kartu dan mesinnya dari bank yang sama, dan 1% kalau beda bank; kartu kredit Visa atau Mastercard ikut kontrak, misalnya 2% di BCA dan 1,8% di Mandiri. Potongan dihitung dari nilai transaksi, tetapi yang sebenarnya berkurang adalah laba kotor: barang seharga Rp150.000 dengan modal Rp90.000 yang dibayar dengan kartu kredit 2% terpotong Rp3.000, atau 5% dari laba Rp60.000." },
      { type: "p", text: "Di bawah ini angka yang sama dipakai untuk menghitung biaya tiap metode pembayaran, totalnya dalam sebulan, kenapa uang yang masuk ke rekening lebih kecil dari omzet di kasir, dan apakah potongan itu boleh dibebankan ke pembeli." },

      { type: "h2", text: "Berapa potongan untuk setiap metode pembayaran?" },
      { type: "p", text: "Tabel ini disusun dari ketentuan Bank Indonesia (BI) dan halaman tarif resmi bank yang diperiksa pada Oktober 2026. MDR QRIS dan kartu debit GPN ditetapkan BI; MDR kartu kredit ditetapkan bank. Tarif yang berlaku untuk toko Anda tercantum di Formulir Data Merchant atau kontrak dengan bank." },
      {
        type: "table",
        head: ["Metode pembayaran", "Potongan (MDR)", "Keterangan"],
        rows: [
          ["Tunai", "0", "Tidak ada biaya pemrosesan"],
          ["QRIS, usaha mikro (UMI)", "0% sampai Rp500.000, 0,3% di atasnya", "Satu kode QR menerima pembayaran dari m-banking dan dompet digital mana pun yang mendukung QRIS, misalnya GoPay atau DANA"],
          ["QRIS, usaha kecil, menengah, dan besar", "0% sampai Rp100.000, 0,7% di atasnya", "Batas Rp100.000 berlaku sejak 1 Oktober 2026; menurut pemberitahuan Maybank, sebelumnya semua nominal kena 0,7%"],
          ["Kartu debit GPN, bank sama (on us)", "0,15%", "Misalnya kartu debit BCA di EDC BCA"],
          ["Kartu debit GPN, beda bank (off us)", "1%", "Misalnya kartu debit bank lain di EDC BCA"],
          ["Kartu debit Maestro", "BCA: 2%", "Tarif di EDC BCA"],
          ["Kartu kredit Visa, Mastercard, JCB, UnionPay", "Ikut kontrak; BCA 2%, Mandiri 1,8%", "BCA Card di EDC BCA 1,5%; American Express di BCA 2,5% untuk retail dan F&B"],
          ["Kartu Kredit Indonesia (KKI)", "BCA: lewat QRIS ikut tarif QRIS; kartu fisik di EDC 1,1%", "Diluncurkan 17 Agustus 2026; untuk umum, tahap awalnya kartu digital yang dibayar lewat QRIS"],
          ["Kartu uang elektronik (Flazz, e-money Mandiri)", "0,5%", "Tarif reguler di EDC BCA (Flazz) dan Mandiri (kartu Mandiri)"],
        ],
      },
      { type: "p", text: "Kategori usaha mikro atau usaha kecil dicatat oleh penyedia QRIS Anda dan bisa berubah. GoPay, misalnya, otomatis memindahkan merchant dari kategori Mikro ke Kecil jika total transaksinya mencapai Rp300 juta dalam 12 bulan terakhir. Tanyakan kategori Anda ke penyedia QRIS, karena selisihnya besar: transaksi QRIS Rp150.000 gratis untuk usaha mikro, tetapi kena 0,7% untuk usaha kecil." },
      { type: "p", text: "Mesin EDC juga bisa punya biaya di luar MDR. Syarat dan ketentuan EDC BCA memberi BCA hak mengenakan Biaya Administrasi Pemeliharaan Terminal per bulan (besarnya diberitahukan bank), dan menetapkan pemakaian minimum Rp15 juta atau 100 transaksi per terminal per bulan; kalau tidak tercapai, BCA berhak menarik mesinnya." },
      { type: "note", text: "Menurut Ditjen Pajak, PPN dikenakan atas MDR, bukan atas nilai pembayaran yang diterima toko, dan ditanggung pedagang (PMK 69/PMK.03/2022). Dasar pengenaannya MDR itu sendiri, dan untuk jasa berlaku DPP nilai lain 11/12 dengan tarif 12% (PMK 131/2024), jadi tarif efektifnya 11%: kalau ditambahkan di atas MDR 2%, potongannya menjadi 2,22%. Penyedia tidak seragam menampilkannya. Halaman tarif BCA dan Mandiri tidak menyebut apakah MDR sudah termasuk PPN, dan halaman bantuan GoPay malah menulis transaksi QRIS tidak dikenakan PPN, baik kepada merchant maupun pembeli. Jadi lihat laporan settlement atau rincian MDR Anda: apakah ada baris PPN tersendiri? Toko dengan omzet sampai Rp4,8 miliar setahun tidak wajib menjadi PKP. PPN masukan dikreditkan dengan PPN keluaran (UU PPN Pasal 9 ayat 2), dan toko yang belum PKP tidak memungut PPN keluaran, jadi PPN atas MDR ikut menjadi biaya. Kalau MDR-nya 0%, PPN-nya juga Rp0." },

      { type: "h2", text: "Potongan memakan laba kotor, bukan omzet" },
      { type: "p", text: "Potongan dihitung dari jumlah yang dibayar pelanggan, jadi di atas kertas kelihatannya kecil, antara 0% dan 2%. Padahal yang benar-benar Anda dapat adalah laba kotor, yaitu harga jual dikurangi harga pokok, dan potongan diambil dari laba itu." },
      { type: "p", text: "Ambil contoh barang seharga Rp150.000 dengan harga pokok Rp90.000. Laba kotornya Rp60.000:" },
      {
        type: "table",
        caption: "Satuan: rupiah. Tarif kartu kredit dari halaman tarif Mandiri (1,8%) dan BCA (2%). Belum termasuk PPN atas MDR. \"Sisa\" belum dipotong sewa, gaji, dan biaya lain, jadi bukan laba bersih.",
        head: ["", "Tunai / QRIS usaha mikro", "QRIS usaha kecil 0,7%", "Debit beda bank 1%", "Kartu kredit 1,8%", "Kartu kredit 2%"],
        rows: [
          ["Pelanggan membayar", "150.000", "150.000", "150.000", "150.000", "150.000"],
          ["Potongan", "0", "1.050", "1.500", "2.700", "3.000"],
          ["Diterima toko", "150.000", "148.950", "148.500", "147.300", "147.000"],
          ["Sisa setelah harga pokok dan potongan", "60.000", "58.950", "58.500", "57.300", "57.000"],
          ["Potongan sebagai persen laba kotor", "0%", "1,75%", "2,5%", "4,5%", "5%"],
        ],
      },
      { type: "p", text: "Angka QRIS usaha kecil di atas sama dengan contoh simulasi BCA sendiri: transaksi Rp150.000 dikreditkan Rp148.950." },
      { type: "p", text: "Persentase di baris terakhir bisa dihitung dengan satu rumus: bagian laba yang terpotong = tarif potongan ÷ margin laba kotor. Dalam contoh di atas, margin laba kotornya 60.000 ÷ 150.000 = 40%, jadi kartu kredit 2% ÷ 40% = 5%. Makin tipis margin, makin besar bagian laba yang diambil oleh tarif yang sama:" },
      {
        type: "table",
        caption: "Setiap kotak adalah potongan sebagai persen laba kotor.",
        head: ["Margin laba kotor", "Tarif 0,7%", "Tarif 1%", "Tarif 2%"],
        rows: [
          ["20%", "3,5%", "5%", "10%"],
          ["30%", "2,3%", "3,3%", "6,7%"],
          ["40%", "1,8%", "2,5%", "5%"],
          ["50%", "1,4%", "2%", "4%"],
          ["60%", "1,2%", "1,7%", "3,3%"],
        ],
      },
      { type: "p", text: "Untuk barang bermargin 20%, kartu kredit 2% berarti Rp10 dari setiap Rp100 laba kotor hilang ke potongan; untuk barang bermargin 60%, tarif yang sama hanya mengambil sekitar Rp3,3." },

      { type: "h2", text: "Berapa potongan dalam sebulan? Hitung per metode" },
      { type: "p", text: "Potongan sebulan tidak dihitung dengan mengalikan seluruh omzet dengan satu tarif. Setiap metode dihitung sendiri lalu dijumlahkan, dan bagian tunai nol. Misalkan sebuah toko yang tercatat sebagai usaha mikro menerima Rp60 juta pembayaran nontunai dalam sebulan:" },
      {
        type: "table",
        caption: "Satuan: rupiah. Kartu kredit memakai tarif BCA 2%. Belum termasuk PPN atas MDR dan biaya pemeliharaan terminal.",
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
      { type: "p", text: "Toko ini membayar sekitar Rp219.500 sebulan, atau Rp2.634.000 setahun. QRIS menyumbang dua pertiga penjualan nontunai, tetapi hanya Rp12.000 dari potongannya; sisanya, sekitar 95%, datang dari kartu. Kalau toko yang sama tercatat sebagai usaha kecil dan separuh nilai QRIS-nya (Rp20 juta) berasal dari transaksi di atas Rp100.000, potongan QRIS-nya naik dari Rp12.000 menjadi Rp140.000. Ganti angka-angka di tabel dengan angka toko Anda untuk mendapatkan biaya bulanan Anda sendiri." },

      { type: "h2", text: "Kenapa uang yang masuk lebih kecil dari omzet di kasir?" },
      { type: "p", text: "Bank memotong MDR langsung dari dana hasil transaksi, lalu mengkreditkan sisanya ke rekening Anda. Kasir mencatat jumlah yang dibayar pelanggan, jadi angka di kasir dan di mutasi rekening memang tidak akan sama. Selisihnya adalah potongan." },
      {
        type: "list",
        items: [
          "Catat penjualan sebesar jumlah yang dibayar pelanggan, dan catat MDR sebagai biaya tersendiri. Dengan begitu omzet tidak tampak turun ketika pelanggan beralih ke kartu atau QRIS, dan Anda tahu berapa potongan yang dibayar setiap bulan.",
          "Waktu masuknya dana berbeda per metode. Di EDC BCA, toko wajib melakukan settlement minimal sekali sehari (kecuali QRIS statis, yang settlement-nya otomatis), dan dana efektif paling lambat hari kalender berikutnya. Kalau settlement tidak dilakukan dalam 3 hari kalender, BCA berhak melakukan settlement otomatis untuk transaksi kartu, dan kalau settlement melewati batas waktu, BCA tidak wajib mengkreditkan dananya. Di QRIS Danamon, transaksi dari rekening atau uang elektronik sampai pukul 14.00 WIB dikreditkan hari itu juga, di atas pukul 14.00 pada H+1, dan transaksi dengan sumber dana kartu kredit pada H+1. Saat tutup buku di akhir bulan, sebagian uang mungkin masih dalam perjalanan.",
          "Saat mengembalikan uang pelanggan, cek apakah MDR ikut kembali. Untuk refund QRIS, BCA mendebet rekening toko sebesar dana refund dikurangi MDR yang sudah dibebankan, jadi MDR-nya tidak hilang. Untuk refund kartu, kami tidak menemukan aturan publik soal MDR; tanyakan ke bank Anda. Syarat BCA juga melarang pengembalian transaksi kartu kredit secara tunai.",
        ],
      },

      { type: "h2", text: "Bolehkah potongan kartu atau QRIS dibebankan ke pembeli?" },
      { type: "p", text: "Tidak boleh. Pasal 52 Peraturan Bank Indonesia Nomor 23/6/PBI/2021 tentang Penyedia Jasa Pembayaran melarang pedagang mengenakan biaya tambahan (surcharge) kepada pembeli atas biaya yang dikenakan penyedia jasa pembayaran, dan mewajibkan penyedia itu memastikan pedagang patuh. Larangan ini berlaku untuk kartu kredit, kartu debit, QRIS, dan uang elektronik. Jadi \"tambah 2% kalau gesek kartu kredit\" atau \"biaya admin QRIS Rp1.000\" sama-sama melanggar." },
      { type: "p", text: "Sanksinya bukan teguran ringan. Pasal 51 PBI yang sama mewajibkan penyedia jasa pembayaran menghentikan kerja sama dengan pedagang yang melakukan tindakan merugikan, dan penjelasannya menyebut surcharge sebagai contoh; nama pedagang itu bisa masuk daftar hitam (merchant black list). BI juga meminta pembeli melaporkan pedagang yang menambahkan biaya QRIS." },
      { type: "p", text: "Kontrak bank bisa lebih ketat lagi. Syarat EDC dan QRIS BCA mewajibkan toko memberi harga dan pelayanan yang sama kepada semua pengguna kartu dan uang elektronik, dan melarang batas minimum transaksi, jadi \"bayar kartu minimal Rp50.000\" juga tidak boleh." },
      { type: "p", text: "Cara yang aman adalah memasukkan potongan ke dalam harga sejak awal, untuk semua pembeli. Kalau separuh omzet Anda dibayar nontunai dengan potongan rata-rata 1%, menaikkan harga seluruh toko sekitar 0,5% sudah cukup untuk menutupnya." },

      { type: "h2", text: "Perlukah menerima kartu kredit? Hitung titik impasnya" },
      { type: "p", text: "Biaya menerima kartu kredit adalah potongannya; hasilnya adalah penjualan dari pembeli yang tidak akan jadi membeli kalau kartu tidak diterima. Titik impasnya memakai rumus yang sama: penjualan tambahan yang dibutuhkan, sebagai persen penjualan kartu = tarif potongan ÷ margin laba kotor." },
      { type: "p", text: "Dengan margin 40% dan tarif 2%, setiap Rp10 juta penjualan kartu kredit terpotong Rp200.000. Kalau minimal Rp500.000 (5%) dari penjualan itu datang dari pembeli yang membeli hanya karena toko menerima kartu, laba dari penjualan tambahan itu sudah menutup potongan Rp200.000 tadi." },
      { type: "p", text: "Perhitungkan juga syarat mesinnya. Toko yang penjualan kartunya kecil bisa sulit memenuhi pemakaian minimum EDC, dan pembayaran tanpa kartu sudah sangat luas: menurut BI, sampai Juni 2026 QRIS dipakai 65,77 juta pengguna dan diterima 44,86 juta merchant. Di BCA, Kartu Kredit Indonesia yang dibayar lewat QRIS pun dikenai tarif QRIS, bukan tarif kartu kredit. Tetapi kalau pembeli Anda sering bertanya \"bisa gesek kartu?\", perkirakan apakah tambahan penjualannya melewati titik impas ini." },

      { type: "h2", text: "Bagaimana mengetahui tarif yang sebenarnya Anda bayar?" },
      { type: "p", text: "Angka paling tepat ada di laporan settlement atau mutasi rekening. Di GoPay Merchant, misalnya, buka Keuangan, pilih transaksi di \"Aktivitas terakhir\", dan lihat nominal MDR-nya. Bagi total potongan sebulan dengan penjualan metode itu, dan Anda mendapat tarif sebenarnya, termasuk PPN kalau ada. Catat setiap metode di kolom sendiri supaya di akhir bulan kelihatan metode mana yang paling mahal. Kalau ada selisih di EDC BCA, laporkan secara tertulis dalam 5 hari kalender sejak tanggal transaksi; setelah itu nilai settlement tidak bisa diklaim lagi." },
      { type: "p", text: "Kalau Anda sudah memakai iPad di kasir, biarkan aplikasi kasir yang menghitungnya. Di [DingPOS](/), buka Pengaturan → Metode Pembayaran dan isi Biaya pemrosesan untuk setiap metode: persentase, jumlah tetap per transaksi, atau keduanya. Kartu Metode Pembayaran di Statistik lalu menampilkan baris \"Biaya · Bersih\" di bawah tiap metode, serta perkiraan biaya dan perkiraan kas bersih diterima untuk seluruh periode. Kalau bank Anda menambahkan PPN di atas MDR, masukkan tarif yang sudah termasuk PPN, misalnya 2,22% untuk 2%. Tarif di DingPOS berlaku untuk semua nominal, jadi untuk QRIS yang gratis sampai batas tertentu, isi tarif rata-rata dari laporan bulan lalu. DingPOS tidak memproses pembayaran dan tidak membaca laporan bank atau penyedia pembayaran Anda, jadi angkanya adalah perkiraan dari tarif yang Anda masukkan; jumlah sebenarnya tetap yang ada di laporan." },
      { type: "p", text: "Kami tidak menemukan aturan nasional yang mewajibkan toko memakai mesin kasir fiskal bersertifikat; toko yang sudah PKP membuat faktur pajak lewat sistem Ditjen Pajak. Yang ada adalah aturan daerah: sebagian pemerintah daerah mewajibkan wajib pajak PBJT, seperti restoran dan kafe, memakai alat perekam transaksi (tapping box) dari Pemda. Peraturan Bupati Kudus Nomor 21 Tahun 2025, misalnya, mewajibkan semua wajib pajak PBJT selain tenaga listrik memakai alat itu, menginput setiap transaksi yang sebenarnya ke dalamnya, dan hanya memakai alat yang disediakan Pemda; pemasangannya bisa bertahap menurut prioritas. DingPOS bukan alat perekam transaksi Pemda, tidak terhubung ke Bapenda, dan tidak membuat faktur pajak, jadi tidak menggantikan alat itu. Kalau daerah Anda mewajibkannya, setiap transaksi tetap harus dicatat di alat Pemda; DingPOS bisa dipakai di sampingnya untuk mencatat metode pembayaran serta memperkirakan potongan dan laba." },
      { type: "p", text: "Cara mengaturnya ada di [Bisakah DingPOS mencatat biaya pembayaran kartu dan ponsel?](/support/payment-fees/). Fitur ini memerlukan paket Standard atau lebih tinggi; bandingkan paketnya di [Paket & Harga](/pricing/), dan coba gratis selama 30 hari." },
    ],
    sources: [
      { label: "Bank Indonesia: MDR QRIS bagi merchant, kategorisasi dan tarif yang berlaku mulai 1 Oktober 2026", url: "https://www.bi.go.id/id/publikasi/ruang-media/cerita-bi/Pages/mdr-qris.aspx" },
      { label: "Bank Indonesia: Siaran Pers No.28/159/DKom, 17 Agustus 2026 (Kartu Kredit Indonesia, perluasan MDR QRIS 0%, 65,77 juta pengguna dan 44,86 juta merchant QRIS)", url: "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2815926.aspx" },
      { label: "Bank Indonesia: Mengenal Kartu Kredit Indonesia (tahap awal lewat QRIS, kartu fisik menyusul)", url: "https://www.bi.go.id/id/publikasi/ruang-media/cerita-bi/Pages/mengenal-kartu-kredit-indonesia-dari-cara-daftar-hingga-cara-pakainya.aspx" },
      { label: "Maybank Indonesia: Pemberitahuan penyesuaian MDR QRIS, 23 September 2026 (UKE 0,7% untuk semua nominal sampai 30 September 2026)", url: "https://www.maybank.co.id/id/NewsAndAnnouncement/NewsAndAnnouncements/2026/09/23/03/15/Pemberitahuan-Penyesuaian-MDR-Merchant-QRIS-Maybank" },
      { label: "Bank Indonesia: Infrastruktur GPN, skema harga MDR kartu debit (on us 0,15%, off us 1%)", url: "https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/infrastruktur/default.aspx" },
      { label: "BCA: EDC BCA, biaya dan limit (MDR kartu debit, kartu kredit, KKI, dan Flazz; perubahan terakhir 1 Oktober 2026)", url: "https://www.bca.co.id/bisnis/produk/penerimaan-bisnis/EDC-BCA" },
      { label: "BCA: Ringkasan Informasi Produk EDC BCA dan QRIS Statis, berlaku 2 Oktober 2026 (simulasi Rp150.000, MDR KKI lewat QRIS mengikuti MDR QRIS)", url: "https://pustaka.bca.co.id/-/media/Files/Bisnis/Produk/Penerimaan-Bisnis/QRIS-bisnis/riplay-edc-dan-qris-bca-ind.pdf" },
      { label: "BCA: Syarat dan Ketentuan EDC dan QRIS Statis (harga sama, tanpa batas minimum, settlement, biaya pemeliharaan, pemakaian minimum terminal, refund QRIS, larangan surcharge)", url: "https://pustaka.bca.co.id/-/media/Files/Bisnis/Produk/Penerimaan-Bisnis/QRIS-bisnis/SnK-EDC-QRIS-Statis-ID.pdf" },
      { label: "Bank Mandiri: Mandiri EDC, risiko dan biaya (MDR kartu kredit 1,80%, prepaid 0,50%)", url: "https://www.bankmandiri.co.id/edc" },
      { label: "Danamon: FAQ QRIS (jadwal pengkreditan dana ke rekening settlement)", url: "https://www.danamon.co.id/-/media/ALL-CONTENT-EBANKING/QRIS/QR-Merchant/18-06-2025/FAQ-QRIS.pdf" },
      { label: "GoPay: Ketentuan biaya transaksi (MDR) QRIS dan cara mengeceknya (perpindahan otomatis dari Mikro ke Kecil pada Rp300 juta dalam 12 bulan; QRIS tidak dikenakan PPN)", url: "https://gopay.co.id/bantuan-merchant/pembayaran-qris/potongan-transaksi-qris-gopay" },
      { label: "Peraturan Bank Indonesia Nomor 23/6/PBI/2021 tentang Penyedia Jasa Pembayaran (Pasal 51 dan 52)", url: "https://www.bi.go.id/id/publikasi/peraturan/Documents/PBI_230621.pdf" },
      { label: "Kompas.com, 17 Oktober 2024: BI, pedagang tidak boleh mengenakan biaya tambahan untuk QRIS, laporkan", url: "https://money.kompas.com/read/2024/10/17/070000526/pedagang-kenakan-biaya-tambahan-untuk-transaksi-qris-bi--enggak-boleh-laporkan" },
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
