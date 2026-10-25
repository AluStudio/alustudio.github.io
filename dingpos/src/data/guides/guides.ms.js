// DingPOS guides — ms pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of en or zh-Hant: each language lists only the guides written
// for the markets that read it, and a language without a pack has no guides
// section. This pack is written natively in Malay, not generated through
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
//   market   — the market the facts hold for, a key of ui.markets ("MY")
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
  title: "Panduan Kedai Kecil",
  subtitle: "Cara mengira kutipan bayaran, kos dan untung, untuk pemilik kedai yang menjaga kedai sendiri.",
  meta_description: "Panduan untuk pemilik kedai kecil: cara caj kad dan bayaran QR dikira, berapa banyak untung yang terpotong, dengan formula, jadual kiraan dan sumber rujukan.",
  back: "Semua panduan",
  related_title: "Bacaan lanjut",
  sources_title: "Sumber rujukan",
  checked: "Kali terakhir disemak: {{date}}",
  cta_title: "Kira jualan di iPad, lihat anggaran caj setiap kaedah bayaran",
  cta_text: "DingPOS ialah aplikasi POS untuk kedai kecil di iPad. Percubaan percuma 30 hari, tiada yuran transaksi.",
  cta_button: "Muat turun di App Store",
  markets: { MY: "Malaysia" },
};

export const articles = [
  {
    slug: "payment-processing-fees-malaysia",
    market: "MY",
    checked: "2026-10-25",
    title: "Caj MDR kad kredit dan DuitNow QR untuk peniaga: berapa peratus, dan berapa untung yang terpotong?",
    summary: "Caj MDR kad kredit: CIMB 1.00%–1.10%, yang lain 1.2%–2.8% + caj tetap; DuitNow QR statik kerap percuma. Kad 1.10% memotong 2.8% untung barang RM50 (kos RM30).",
    content: [
      { type: "p", text: "Caj MDR kad kredit bergantung pada kontrak anda: senarai harga terminal kad CIMB ialah 1.00%–1.10% bagi kad kredit tempatan dan 0.40%–0.45% bagi kad debit, manakala penyedia seperti Fiuu, HitPay dan Stripe mengenakan 1.2% hingga 2.8% ditambah caj tetap RM0.40 hingga RM1 setiap transaksi. DuitNow QR statik pula masih tanpa caj bagi peniaga kecil di bank seperti CIMB dan RHB. Caj dikira atas jualan, tetapi yang sebenarnya terpotong ialah untung: barang berharga RM50 dengan kos RM30 yang dibayar dengan kad kredit pada 1.10% dikenakan caj RM0.55, iaitu 2.8% daripada untung RM20, dan pada kadar 2.8% + RM0.50 caj itu menjadi RM1.90, atau 9.5% daripada untung yang sama." },
      { type: "p", text: "Bahagian seterusnya menggunakan angka yang sama untuk mengira kos setiap kaedah bayaran, jumlahnya sebulan, sebab wang yang masuk ke akaun kurang daripada jualan di kaunter, dan sama ada caj boleh dikenakan kepada pelanggan." },

      { type: "h2", text: "Berapa caj bagi setiap kaedah bayaran?" },
      { type: "p", text: "Jadual ini disusun daripada senarai harga dan notis rasmi penyedia yang disemak pada Oktober 2026. Kadar sebenar bergantung pada kontrak, jumlah jualan dan jenis perniagaan anda; rujuk kontrak dan penyata penyelesaian anda sendiri." },
      {
        type: "table",
        head: ["Kaedah bayaran", "Caj kepada peniaga (MDR)", "Catatan"],
        rows: [
          ["Tunai", "0", "Tiada caj pemprosesan"],
          ["DuitNow QR statik (kod QR bercetak)", "0% bagi kebanyakan peniaga kecil", "CIMB: 0% bagi bayaran daripada akaun bank atau e-wallet; bagi kad kredit melalui QR 0.35%, tetapi 0% secara promosi \"sehingga notis selanjutnya\" untuk PKS yang layak. RHB: tiada MDR untuk tent card QR statik tanpa fungsi bayaran balik, selagi tidak memakai soundbox atau terminal. Pelanggan boleh mengimbasnya dengan aplikasi bank atau e-wallet"],
          ["DuitNow QR melalui soundbox atau terminal", "0.35%; RHB: 0.60% jika pelanggan bayar dengan kad kredit", "RHB mula mengenakan MDR ini pada 26 Oktober 2026 bagi QR melalui soundbox, terminal kad, atau tent card dengan fungsi bayaran balik melalui Reflex. CIMB mengenakan 0.35% bagi QR dinamik di terminal"],
          ["Kad debit (MyDebit, Visa atau Mastercard debit)", "CIMB: 0.40%–0.45%", "Fiuu: MyDebit 0.60%, kad debit Visa atau Mastercard 1.37% + RM0.40"],
          ["Kad kredit tempatan (Visa, Mastercard)", "Ikut kontrak; contoh yang diterbitkan: 1.00% hingga 2.8% + caj tetap", "CIMB: 1.00% (kad CIMB) atau 1.10% (kad bank lain). Fiuu: 1.70% + RM0.40. HitPay: 1.2% + RM1, termasuk Tap to Pay pada iPhone. Stripe Terminal: 2.8% + RM0.50"],
          ["Kad yang dikeluarkan di luar negara", "CIMB: 2.50%", "Fiuu: 3.54% + RM0.83 bagi transaksi dalam ringgit. HitPay: 3% + RM1, tambah 2% jika transaksi dalam mata wang asing"],
          ["Touch 'n Go eWallet (QR TNG sendiri)", "0% bagi kebanyakan kedai kecil", "MDR 0.5% hanya dikenakan kepada peniaga PKS dengan lima cawangan atau lebih, atau yang memakai terminal bayaran tanpa tunai. Melalui terminal CIMB: 0.80%; melalui Fiuu: 1.15%; melalui HitPay: 1.6%"],
          ["GrabPay, ShopeePay, Boost (melalui penyedia bayaran)", "Fiuu: 1.00%–1.40%", "Kadar kedai fizikal Fiuu: ShopeePay 1.00%, Boost 1.00%, GrabPay 1.40%. HitPay: ShopeePay dan GrabPay 2%"],
        ],
      },
      { type: "p", text: "Kadar terminal CIMB di atas ialah untuk pakej yang ditawarkan kepada perniagaan 3 hingga 5 cawangan atau lebih; pakej asas CIMB untuk 1 hingga 2 cawangan hanya menyediakan QR statik. Kedai kecil yang mahukan terminal kad mungkin mendapat kadar berbeza, jadi minta jadual MDR penuh sebelum menandatangani kontrak." },
      { type: "p", text: "Selain peratusan, ambil kira kos terminal. CIMB mengenakan RM50 sebulan bagi terminal kad, dan Fiuu mengenakan yuran pemasangan RM250, sewa RM540 setahun serta yuran penyelenggaraan RM99 setahun mulai tahun kedua. Pembaca kad Stripe berharga dari RM279, dan Stripe menambah RM0.45 bagi setiap kebenaran (authorisation) Tap to Pay. HitPay tidak mengenakan yuran persediaan atau yuran bulanan, dan Tap to Pay HitPay menggunakan iPhone tanpa pembaca kad, tetapi ia tidak berfungsi pada iPad." },
      { type: "p", text: "Kad debit lebih murah kerana Bank Negara Malaysia (BNM) mengehadkan interchange, iaitu bahagian MDR yang dibayar kepada bank pengeluar kad: 0.60% bagi kad kredit, dan 0.10% atau RM0.37 + 0.001% (yang mana lebih rendah) bagi kad debit jenama domestik seperti MyDebit. Bagi kad debit yang membawa logo MyDebit dan Visa atau Mastercard, peniaga berhak memilih rangkaian yang memproses transaksi itu, dan acquirer wajib menyediakan pilihan ini pada terminal; tanya acquirer anda cara menghalakannya ke rangkaian yang lebih murah." },
      { type: "note", text: "Apple Pay, Google Pay dan Samsung Pay ialah transaksi kad, jadi kadarnya ikut kontrak kad anda. Mulai 1 Julai 2026, BNM membenarkan interchange tambahan 0.10% bagi kad debit yang digunakan melalui dompet mudah alih ini, jadi MDR untuk transaksi tersebut mungkin lebih tinggi sedikit. Acquirer wajib memaklumkan MDR bagi setiap jenis transaksi kad." },
      { type: "p", text: "Bagaimana dengan cukai? BNM mengumumkan pada Oktober 2025 bahawa perkhidmatan pembayaran digital, termasuk MDR, mendapat pengecualian SST secara kekal, dan panduan Kastam menganggap bayaran dengan kad debit atau QR yang dikaitkan dengan akaun semasa atau simpanan sebagai perkhidmatan perbankan asas yang tidak dikenakan cukai perkhidmatan. Namun senarai harga bank seperti CIMB menyatakan bahawa kadarnya belum termasuk cukai dan cukai yang terpakai akan ditambah. Jadi semak penyata anda: jika ada cukai atas caj, gunakan kadar termasuk cukai semasa mengira kos." },

      { type: "h2", text: "Caj memotong untung, bukan sekadar jualan" },
      { type: "p", text: "Caj dikira atas jumlah yang dibayar pelanggan, jadi di atas kertas ia nampak kecil, sekitar 1% hingga 3%. Tetapi wang yang benar-benar anda peroleh ialah untung kasar, iaitu harga jual tolak kos barang, dan caj diambil daripada untung itu." },
      { type: "p", text: "Contohnya, barang berharga RM50 dengan kos RM30 memberi untung kasar RM20:" },
      {
        type: "table",
        caption: "Unit: RM. Kadar daripada senarai harga CIMB (kad bank lain), Fiuu (kedai fizikal) dan Stripe Terminal. \"Baki\" belum ditolak sewa, gaji dan kos lain, jadi ia bukan untung bersih.",
        head: ["", "Tunai / QR statik", "MyDebit 0.40%", "Kad kredit 1.10%", "Kad kredit 1.70% + RM0.40", "Kad kredit 2.8% + RM0.50"],
        rows: [
          ["Pelanggan bayar", "50.00", "50.00", "50.00", "50.00", "50.00"],
          ["Caj", "0", "0.20", "0.55", "1.25", "1.90"],
          ["Diterima kedai", "50.00", "49.80", "49.45", "48.75", "48.10"],
          ["Baki selepas kos barang dan caj", "20.00", "19.80", "19.45", "18.75", "18.10"],
          ["Caj sebagai peratus untung", "0%", "1%", "2.8%", "6.3%", "9.5%"],
        ],
      },
      { type: "p", text: "Peratus ini boleh dikira dengan satu formula: bahagian untung yang terpotong = kadar caj ÷ margin untung kasar. Dalam contoh di atas, margin untung kasar ialah 20 ÷ 50 = 40%, jadi kad kredit pada 1.10% ÷ 40% ≈ 2.8%. Semakin nipis margin, semakin besar bahagian yang diambil oleh kadar yang sama:" },
      {
        type: "table",
        caption: "Setiap petak ialah caj sebagai peratus untung kasar. Kadar peratusan sahaja, tanpa caj tetap setiap transaksi.",
        head: ["Margin untung kasar", "Kadar 0.40%", "Kadar 1.10%", "Kadar 1.70%", "Kadar 2.8%"],
        rows: [
          ["20%", "2%", "5.5%", "8.5%", "14%"],
          ["30%", "1.3%", "3.7%", "5.7%", "9.3%"],
          ["40%", "1%", "2.8%", "4.3%", "7%"],
          ["50%", "0.8%", "2.2%", "3.4%", "5.6%"],
          ["60%", "0.7%", "1.8%", "2.8%", "4.7%"],
        ],
      },
      { type: "p", text: "Bagi barang dengan margin 20%, kadar 1.70% bermakna RM8.50 daripada setiap RM100 untung pergi kepada caj; bagi barang dengan margin 60%, kadar yang sama hanya mengambil kira-kira RM2.80." },
      { type: "p", text: "Caj tetap setiap transaksi paling terasa pada jualan kecil. RM0.50 Stripe ialah 1% tambahan pada jualan RM50, tetapi 5% pada jualan RM10. Bagi secawan kopi RM10, caj HitPay 1.2% + RM1 ialah RM1.12, iaitu 11.2% daripada harga jualan." },

      { type: "h2", text: "Berapa caj sebulan? Kira ikut campuran bayaran" },
      { type: "p", text: "Caj sebulan tidak dikira dengan mendarab seluruh jualan dengan satu kadar. Setiap kaedah bayaran dikira berasingan dan kemudian dijumlahkan, dan bahagian tunai ialah 0. Andaikan sebuah kedai menerima RM30,000 sebulan tanpa tunai:" },
      {
        type: "table",
        caption: "Unit: RM. Kadar daripada senarai harga terminal CIMB bagi kad bank lain; MyDebit ialah 0.40% bagi semua kad. DuitNow QR statik diandaikan pada kadar promosi 0%.",
        head: ["Kaedah bayaran", "Jualan sebulan", "Kadar", "Caj"],
        rows: [
          ["DuitNow QR statik", "15,000", "0%", "0"],
          ["MyDebit", "5,000", "0.40%", "20.00"],
          ["Kad kredit tempatan", "8,000", "1.10%", "88.00"],
          ["Kad dari luar negara", "2,000", "2.50%", "50.00"],
          ["Jumlah", "30,000", "", "158.00"],
        ],
      },
      { type: "p", text: "Kedai ini membayar MDR kira-kira RM158 sebulan. Tambah RM50 sewa terminal, jumlahnya RM208 sebulan atau RM2,496 setahun. Itu bersamaan 1.39% daripada RM15,000 jualan kad, walaupun kadar kad kredit tempatan hanya 1.10%. Gantikan jumlah jualan dan kadar dengan angka kedai anda untuk mendapat kos bulanan anda sendiri." },

      { type: "h2", text: "Kenapa wang yang masuk kurang daripada jualan di kaunter?" },
      { type: "p", text: "Bank dan penyedia e-wallet biasanya membayar peniaga jumlah bersih, iaitu selepas MDR ditolak; sesetengah bank, seperti RHB bagi DuitNow QR, menolak jumlah MDR sehari secara berasingan daripada akaun anda pada hari berikutnya. Mesin daftar tunai atau aplikasi POS merekod jumlah yang dibayar pelanggan, jadi angka di kaunter dan angka di bank memang tidak sama. Perbezaannya ialah caj." },
      {
        type: "list",
        items: [
          "Rekod jualan pada jumlah penuh yang dibayar pelanggan, dan rekod MDR sebagai perbelanjaan yang berasingan. Dengan cara ini jualan tidak nampak menyusut apabila pelanggan beralih kepada kad, dan anda nampak berapa caj yang dibayar setiap bulan.",
          "Wang setiap kaedah masuk pada masa yang berbeza. Di CIMB, wang daripada terminal kad dikreditkan pada hari bekerja berikutnya, dan QR dinamik yang dibayar sebelum 8 malam juga masuk pada hari bekerja berikutnya (selepas 8 malam, dua hari bekerja). Touch 'n Go eWallet menyelesaikan bayaran serta-merta ke Akaun Perniagaannya; ke akaun bank, biasanya pada hari yang sama atau esoknya. Fiuu membayar transaksi kad setiap minggu pada hari Khamis, dan e-wallet domestik pada T+2. Semasa menutup akaun hujung bulan, sebahagian wang mungkin masih dalam perjalanan.",
          "Apabila memulangkan wang kepada pelanggan, MDR tidak semestinya dipulangkan. RHB menyatakan MDR bagi transaksi DuitNow QR tidak dipulangkan walaupun bayaran itu dipulangkan kepada pelanggan. Terma CIMB pula mewajibkan bayaran balik dibuat ke akaun atau kad asal, bukan secara tunai. Bagi penyedia lain, semak kontrak anda.",
        ],
      },

      { type: "h2", text: "Bolehkah peniaga mengenakan caj tambahan untuk bayaran kad?" },
      { type: "p", text: "Secara amnya tidak boleh. Di bawah Rangka Kerja Kad Pembayaran BNM, peraturan surcaj ditetapkan dan dikuatkuasakan oleh rangkaian kad; acquirer wajib mengambil tindakan ke atas peniaga yang melanggarnya, dan pemegang kad boleh membuat aduan. Peraturan Visa (Visa Core Rules, 18 April 2026) melarang peniaga menambah apa-apa jumlah di atas harga biasa kecuali undang-undang tempatan secara jelas membenarkannya (perkara 1.5.5.2), dan melarang jumlah belian minimum atau maksimum sebagai syarat menerima kad (perkara 1.5.5.1); Malaysia tidak termasuk dalam wilayah yang dikecualikan. Terma peniaga CIMB pula melarang surcaj, kenaikan harga dan jumlah belian minimum untuk bayaran kad atau e-wallet. Jadi notis \"caj 2% untuk kad kredit\" atau \"kad untuk belian RM20 ke atas sahaja\" kedua-duanya melanggar peraturan ini. Jika rangkaian kad atau acquirer memberi pengecualian, BNM mewajibkan peniaga memaparkannya di kaunter bersama saluran aduan." },
      { type: "p", text: "Begitu juga untuk e-wallet dan QR. Perjanjian peniaga Touch 'n Go eWallet (klausa 4.5) melarang sebarang kos tambahan, surcaj, yuran pemprosesan atau kenaikan harga ke atas pelanggan yang membayar dengan Touch 'n Go eWallet, dan RHB menyatakan peniaga tidak boleh memindahkan MDR DuitNow QR kepada pelanggan." },
      { type: "p", text: "Yang dibenarkan ialah memberi diskaun kepada pelanggan yang membayar tunai (terma CIMB menyebutnya secara jelas) dan menggalakkan pelanggan menggunakan kaedah yang lebih murah. Peniaga juga boleh memilih untuk tidak menerima kad kredit: Rangka Kerja Kad Pembayaran BNM hanya mewajibkan penerimaan kad debit sebagai minimum, dengan syarat ada notis yang jelas di kaunter tentang kad yang diterima atau tidak diterima." },
      { type: "p", text: "Cara yang lebih selamat ialah memasukkan caj ke dalam harga dari awal. Jika separuh jualan anda dibayar dengan kad dan kadar purata ialah 1.10%, menaikkan harga seluruh kedai sekitar 0.55% sudah cukup untuk menampung caj." },

      { type: "h2", text: "Patutkah anda terima kad kredit? Kira titik pulang modal" },
      { type: "p", text: "Kos menerima kad ialah caj, dan pulangannya ialah jualan daripada pelanggan yang tidak akan membeli jika kad tidak diterima. Titik pulang modal menggunakan formula yang sama: jualan tambahan yang diperlukan, sebagai peratus jualan kad = kadar caj ÷ margin untung kasar." },
      { type: "p", text: "Dengan margin 40% dan kadar 1.10%, setiap RM10,000 jualan kad dikenakan caj RM110. Jika sekurang-kurangnya RM275 (2.75%) daripadanya datang daripada pelanggan yang membeli hanya kerana kedai menerima kad, untung daripada jualan itu sudah menampung RM110 tersebut." },
      { type: "p", text: "Jangan lupa sewa terminal. Jika jualan kad hanya RM5,000 sebulan, MDR RM55 ditambah sewa RM50 menjadi RM105, iaitu kos sebenar 2.1% daripada jualan kad, dan titik pulang modal naik kepada 5.25%. Kedai yang jualan kadnya kecil boleh membandingkannya dengan Tap to Pay tanpa yuran bulanan, atau menerima DuitNow QR dan kad debit sahaja." },
      { type: "p", text: "Menurut BNM, setiap rakyat Malaysia secara purata membuat sekurang-kurangnya satu transaksi pembayaran digital sehari. Jika pelanggan anda kebanyakannya sudah membayar dengan QR, menerima kad kredit mungkin tidak membawa banyak jualan baharu. Tetapi jika kedai anda di kawasan pelancong, atau pelanggan kerap bertanya \"boleh bayar kad?\", anggarkan sama ada jualan tambahan itu melepasi titik pulang modal ini." },

      { type: "h2", text: "Bagaimana mengetahui kadar sebenar yang anda bayar?" },
      { type: "p", text: "Angka paling tepat ada pada penyata penyelesaian anda. Di CIMB, penyata akaun di portal e-Access menjadi invois bagi MDR; Touch 'n Go eWallet memaparkan jumlah MDR dalam laporan penyelesaian harian. Bahagikan jumlah caj sebulan dengan jualan bagi kaedah itu, dan anda mendapat kadar sebenar anda. Rekod setiap kaedah bayaran dalam lajur sendiri, dan pada hujung bulan anda akan nampak kaedah mana yang paling mahal." },
      { type: "p", text: "Jika anda sudah menggunakan iPad di kaunter, biar sistem POS yang mengiranya. Dalam [DingPOS](/), pergi ke Tetapan → Kaedah Pembayaran dan isikan Caj pemprosesan bagi setiap kaedah: peratusan, jumlah tetap bagi setiap transaksi, atau kedua-duanya. Kad Kaedah Pembayaran pada Statistik kemudian menunjukkan anggaran caj dan anggaran diterima bersih bagi setiap kaedah. Jika penyata anda menunjukkan cukai atas caj, masukkan kadar yang termasuk cukai. DingPOS tidak memproses pembayaran dan tidak membaca penyata penyedia anda, jadi angka itu ialah anggaran berdasarkan kadar yang anda masukkan; jumlah sebenar tetap seperti dalam penyata. Suis \"Peratusan caj dikembalikan semasa bayaran balik\" dihidupkan secara lalai; jika penyedia anda tidak memulangkan MDR, contohnya RHB bagi DuitNow QR, matikan suis itu supaya anggaran sepadan dengan penyata." },
      { type: "p", text: "Cara menetapkannya ada dalam [Bolehkah DingPOS menjejak caj bayaran kad dan mudah alih?](/support/payment-fees/). Ciri ini memerlukan pelan Standard atau lebih tinggi; bandingkan pelan di [Pelan & Harga](/pricing/) dan cuba percuma selama 30 hari. DingPOS tidak menghantar e-Invois ke MyInvois LHDN. Mulai 1 September 2026, perniagaan dengan jualan tahunan kurang daripada RM3 juta dikecualikan daripada e-Invois; jika jualan anda RM3 juta atau lebih, keluarkan e-Invois melalui sistem lain dan gunakan DingPOS di sampingnya untuk merekod kaedah bayaran serta menganggar caj dan untung." },
    ],
    sources: [
      { label: "CIMB: Merchant Solutions (MDR terminal kad dan DuitNow QR, sewa terminal RM50 sebulan, masa penyelesaian, kadar belum termasuk cukai)", url: "https://www.cimb.com.my/en/business/business-solutions/solutions/merchant-solutions.html" },
      { label: "CIMB: Lanjutan kadar promosi 0% MDR DuitNow QR statik sehingga notis selanjutnya (2026)", url: "https://www.cimb.com.my/en/business/important-notices/2026/extension-of-static-qr-promotional-rate-2026.html" },
      { label: "CIMB: Terma dan Syarat Perkhidmatan Peniaga, Versi 8, Januari 2026 (klausa 5.1 bayaran balik, 6.1 penyata akaun, 7.1 cukai, 14.1(e) larangan surcaj dan belian minimum)", url: "https://www.cimb.com.my/content/dam/cimb/business/documents/merchant-support/terms-and-conditions/tnc-merchant-service-jan-2026.pdf" },
      { label: "RHB: Soalan Lazim MDR DuitNow QR, 19 Oktober 2026 (0.35% dan 0.60% mulai 26 Oktober 2026, MDR tidak dipulangkan, tidak boleh dipindahkan kepada pelanggan)", url: "https://www.rhbgroup.com/-/media/Files/others/highlights/announcements/H20261019-1.pdf" },
      { label: "Bank Negara Malaysia: Bayaran DuitNow QR, peniaga mikro dan kecil terus menikmati transaksi tanpa kos (29 September 2023)", url: "https://www.bnm.gov.my/-/duitnow-qr-payments" },
      { label: "Touch 'n Go eWallet: Siapa yang dikenakan MDR (0.5%, peniaga PKS dengan lima cawangan atau lebih, atau dengan terminal tanpa tunai)", url: "https://merchantsupport.tngdigital.com.my/hc/en-us/articles/1500003556422-What-is-MDR-and-how-do-I-know-if-I-am-subjected-to-it" },
      { label: "Touch 'n Go eWallet: Peniaga tidak boleh memindahkan MDR kepada pelanggan (perjanjian peniaga, klausa 4.5)", url: "https://merchantsupport.tngdigital.com.my/hc/en-us/articles/360056635094-Can-a-merchant-transfer-the-MDR-cost-to-customers-using-Touch-n-Go-eWallet-to-make-payment" },
      { label: "Touch 'n Go eWallet: Jumlah MDR dalam laporan penyelesaian harian", url: "https://merchantsupport.tngdigital.com.my/hc/en-us/articles/360056635074-Where-can-merchants-check-on-the-total-MDR-charged-to-them" },
      { label: "Touch 'n Go eWallet: Penyelesaian ke akaun bank atau Akaun Perniagaan", url: "https://merchantsupport.tngdigital.com.my/hc/en-us/articles/47529166265113-Can-I-continue-to-use-my-bank-account-for-settlement-instead-of-using-the-Business-Account" },
      { label: "Fiuu: Lampiran harga Malaysia, Mac 2026 (MDR kad dan e-wallet kedai fizikal, sewa terminal, yuran penyelenggaraan, tempoh penyelesaian)", url: "https://booster.fiuu.com/assets/Appendix_20260318.pdf" },
      { label: "HitPay Malaysia: Harga (kad tempatan 1.2% + RM1, kad antarabangsa 3% + RM1, e-wallet di kedai)", url: "https://hitpayapp.com/my/pricing" },
      { label: "HitPay Malaysia: Tap to Pay pada iPhone (tiada yuran bulanan, tidak berfungsi pada iPad)", url: "https://hitpayapp.com/my/tap-to-pay-malaysia" },
      { label: "Stripe Malaysia: Harga (Terminal 2.8% + RM0.50 bagi kad tempatan, RM0.45 bagi setiap kebenaran Tap to Pay, pembaca kad dari RM279)", url: "https://stripe.com/en-my/pricing" },
      { label: "Bank Negara Malaysia: Rangka Kerja Kad Pembayaran, 19 Ogos 2022 (perenggan 1.3, 10.1–10.10 dan 11: surcaj, laluan rangkaian, penerimaan kad)", url: "https://www.bnm.gov.my/documents/20124/943361/PD_Payment_Cards_Framework.pdf" },
      { label: "Bank Negara Malaysia: Pelarasan siling interchange kad debit bagi dompet mudah alih, 28 Julai 2025 (siling interchange, berkuat kuasa 1 Julai 2026)", url: "https://www.bnm.gov.my/documents/20124/943361/20250728-PCF-PD-Adjustment-Debit-Card-Interchange-Fee-Ceiling.pdf" },
      { label: "Visa Core Rules and Visa Product and Service Rules, 18 April 2026 (perkara 1.5.5.1 jumlah minimum, 1.5.5.2 surcaj)", url: "https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf" },
      { label: "Bank Negara Malaysia: Ucaptama Penolong Gabenor di PayNet Engagement Forum 2025, 16 Oktober 2025 (pengecualian SST kekal termasuk MDR; satu transaksi digital sehari)", url: "https://www.bnm.gov.my/-/agne-pef2025" },
      { label: "Jabatan Kastam Diraja Malaysia: Guide on Financial Services, Versi 2, 24 Oktober 2025 (perenggan 52, perkhidmatan perbankan asas)", url: "https://pub-359af8e1f79c472292a7e44ec60f3027.r2.dev/Industry%20Guides/EN/Guide%20On%20Financial%20Service%20%20-%20%20Version%202.pdf" },
      { label: "LHDN: Garis masa pelaksanaan e-Invois (pengecualian bagi jualan tahunan kurang daripada RM3 juta)", url: "https://www.hasil.gov.my/e-invois/pelaksanaan-e-invois-di-malaysia/garis-masa-pelaksanaan-e-invois/" },
      { label: "LHDN: Kenyataan media 30 Ogos 2026, ambang pengecualian e-Invois dinaikkan kepada RM3 juta mulai 1 September 2026", url: "https://www.hasil.gov.my/wp-content/uploads/20260830-Kenyataan-Media-HASiL_AMBANG-PENGECUALIAN-E_INVOIS-DINAIKKAN.pdf" },
    ],
    related: [],
  },
];
