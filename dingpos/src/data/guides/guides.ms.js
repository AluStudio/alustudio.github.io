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
      { type: "p", text: "Caj MDR kad kredit bergantung pada kontrak anda: senarai harga terminal kad CIMB ialah 1.00%–1.10% bagi kad kredit tempatan dan 0.40%–0.45% bagi kad debit, manakala Fiuu, HitPay dan Stripe mengenakan 1.2% hingga 2.8% ditambah caj tetap RM0.40 hingga RM1 setiap transaksi. DuitNow QR statik pula masih tanpa caj bagi kebanyakan peniaga kecil di bank seperti CIMB dan RHB. Yang sebenarnya terpotong ialah untung: barang RM50 dengan kos RM30 yang dibayar dengan kad kredit 1.10% dikenakan caj RM0.55, iaitu 2.8% daripada untung RM20; pada 2.8% + RM0.50, caj RM1.90 mengambil 9.5% untung itu." },

      { type: "h2", text: "Berapa caj bagi setiap kaedah bayaran?" },
      { type: "p", text: "Disemak daripada senarai harga dan notis rasmi penyedia pada Oktober 2026; kadar anda ikut kontrak. Kadar CIMB belum termasuk cukai: jika penyata menunjukkan cukai atas caj, kira dengan kadar termasuk cukai." },
      {
        type: "table",
        head: ["Kaedah bayaran", "Caj kepada peniaga (MDR)", "Catatan"],
        rows: [
          ["Tunai", "0", "Tiada caj pemprosesan"],
          ["DuitNow QR statik (kod QR bercetak)", "0% bagi kebanyakan peniaga kecil", "CIMB: 0% dari akaun bank atau e-wallet; kad kredit melalui QR 0.35%, kini 0% secara promosi bagi PKS layak. RHB: 0% jika tiada soundbox, terminal atau fungsi bayaran balik"],
          ["DuitNow QR melalui soundbox atau terminal", "0.35%; RHB: 0.60% jika pelanggan bayar dengan kad kredit", "CIMB: QR dinamik di terminal. RHB: mulai 26 Oktober 2026"],
          ["Kad debit (MyDebit, Visa, Mastercard)", "CIMB: 0.40%–0.45%", "Siling interchange BNM lebih rendah bagi kad debit"],
          ["Kad kredit tempatan (Visa, Mastercard)", "Ikut kontrak; contoh: 1.00% hingga 2.8% + caj tetap", "CIMB 1.00% (kad CIMB) atau 1.10% (kad bank lain); Fiuu 1.70% + RM0.40; HitPay 1.2% + RM1; Stripe Terminal 2.8% + RM0.50"],
          ["Kad dari luar negara", "CIMB: 2.50%", "HitPay: 3% + RM1"],
          ["Touch 'n Go eWallet (QR TNG sendiri)", "0% bagi kebanyakan kedai kecil", "0.5% hanya bagi PKS dengan lima cawangan atau lebih, atau yang memakai terminal tanpa tunai"],
          ["GrabPay, ShopeePay, Boost", "Fiuu: 1.00%–1.40%", "Kadar kedai fizikal Fiuu"],
          ["Apple Pay, Google Pay, Samsung Pay", "Ikut kontrak kad anda", "Transaksi kad; bagi kad debit, MDR mungkin lebih tinggi sedikit mulai 1 Julai 2026"],
        ],
      },
      { type: "note", text: "Kadar terminal CIMB ialah untuk pakej 3 hingga 5 cawangan atau lebih; pakej asas (1 hingga 2 cawangan) hanya QR statik, jadi kedai kecil mungkin mendapat kadar lain. Minta jadual MDR penuh sebelum menandatangani kontrak." },
      { type: "p", text: "Ambil kira juga kos terminal: CIMB mengenakan RM50 sebulan, dan Fiuu RM250 untuk pemasangan, RM540 setahun untuk sewa serta RM99 setahun untuk penyelenggaraan mulai tahun kedua. Tap to Pay HitPay tiada yuran bulanan dan menggunakan iPhone tanpa pembaca kad, tetapi tidak berfungsi pada iPad." },

      { type: "h2", text: "Caj memotong untung, bukan sekadar jualan" },
      { type: "p", text: "Caj 1% hingga 3% atas jualan nampak kecil, tetapi ia diambil daripada untung kasar, iaitu harga jual tolak kos barang. Contohnya, barang RM50 dengan kos RM30 memberi untung kasar RM20:" },
      {
        type: "table",
        caption: "Unit: RM. \"Baki\" belum ditolak sewa, gaji dan kos lain, jadi ia bukan untung bersih.",
        head: ["", "Tunai / QR statik", "MyDebit 0.40%", "Kad kredit 1.10%", "Kad kredit 1.70% + RM0.40", "Kad kredit 2.8% + RM0.50"],
        rows: [
          ["Pelanggan bayar", "50.00", "50.00", "50.00", "50.00", "50.00"],
          ["Caj", "0", "0.20", "0.55", "1.25", "1.90"],
          ["Diterima kedai", "50.00", "49.80", "49.45", "48.75", "48.10"],
          ["Baki selepas kos barang dan caj", "20.00", "19.80", "19.45", "18.75", "18.10"],
          ["Caj sebagai peratus untung", "0%", "1%", "2.8%", "6.3%", "9.5%"],
        ],
      },
      { type: "p", text: "Formulanya: bahagian untung yang terpotong = kadar caj ÷ margin untung kasar. Dalam contoh di atas, margin ialah 20 ÷ 50 = 40%, jadi 1.10% ÷ 40% ≈ 2.8%. Semakin nipis margin, semakin besar bahagian yang terpotong:" },
      {
        type: "table",
        caption: "Caj sebagai peratus untung kasar, bagi kadar peratusan sahaja (tanpa caj tetap).",
        head: ["Margin untung kasar", "Kadar 0.40%", "Kadar 1.10%", "Kadar 1.70%", "Kadar 2.8%"],
        rows: [
          ["20%", "2%", "5.5%", "8.5%", "14%"],
          ["30%", "1.3%", "3.7%", "5.7%", "9.3%"],
          ["40%", "1%", "2.8%", "4.3%", "7%"],
          ["50%", "0.8%", "2.2%", "3.4%", "5.6%"],
          ["60%", "0.7%", "1.8%", "2.8%", "4.7%"],
        ],
      },

      { type: "h2", text: "Berapa caj sebulan? Kira ikut campuran bayaran" },
      { type: "p", text: "Kira setiap kaedah bayaran berasingan, kemudian jumlahkan; tunai ialah 0. Andaikan sebuah kedai menerima RM30,000 sebulan tanpa tunai:" },
      {
        type: "table",
        caption: "Unit: RM. Kadar terminal CIMB bagi kad bank lain; MyDebit 0.40% bagi semua kad; DuitNow QR statik diandaikan 0% (promosi).",
        head: ["Kaedah bayaran", "Jualan sebulan", "Kadar", "Caj"],
        rows: [
          ["DuitNow QR statik", "15,000", "0%", "0"],
          ["MyDebit", "5,000", "0.40%", "20.00"],
          ["Kad kredit tempatan", "8,000", "1.10%", "88.00"],
          ["Kad dari luar negara", "2,000", "2.50%", "50.00"],
          ["Jumlah", "30,000", "", "158.00"],
        ],
      },
      { type: "p", text: "MDR kedai ini kira-kira RM158 sebulan. Dengan sewa terminal RM50, jumlahnya RM208 sebulan (1.39% daripada RM15,000 jualan kad), atau RM2,496 setahun. Gantikan dengan angka kedai anda." },

      { type: "h2", text: "Kenapa wang yang masuk kurang daripada jualan di kaunter?" },
      { type: "p", text: "Bank dan penyedia e-wallet biasanya membayar jumlah bersih, iaitu selepas MDR ditolak; RHB pula menolak MDR DuitNow QR sehari daripada akaun anda pada hari berikutnya. POS merekod jumlah yang dibayar pelanggan; perbezaannya ialah caj." },
      {
        type: "list",
        items: [
          "Rekod jualan pada jumlah penuh, dan MDR sebagai perbelanjaan berasingan.",
          "Wang setiap kaedah masuk pada hari berbeza: CIMB membayar transaksi kad pada hari bekerja berikutnya, Fiuu setiap Khamis. Pada hujung bulan, sebahagian wang mungkin masih dalam perjalanan.",
          "MDR tidak semestinya dipulangkan apabila anda membuat bayaran balik: RHB tidak memulangkan MDR DuitNow QR. Bagi penyedia lain, semak kontrak anda.",
        ],
      },

      { type: "h2", text: "Bolehkah peniaga mengenakan caj tambahan untuk bayaran kad?" },
      { type: "p", text: "Secara amnya tidak boleh. Di bawah rangka kerja BNM, peraturan surcaj ditetapkan oleh rangkaian kad, dan acquirer wajib bertindak ke atas peniaga yang melanggarnya. Visa melarang surcaj kecuali undang-undang tempatan membenarkannya (Malaysia tidak dikecualikan), serta jumlah belian minimum atau maksimum. Terma CIMB dan Touch 'n Go eWallet juga melarang caj tambahan, dan RHB tidak membenarkan MDR DuitNow QR dipindahkan kepada pelanggan. Jadi notis \"caj 2% untuk kad kredit\" atau \"kad untuk belian RM20 ke atas sahaja\" melanggar peraturan." },
      { type: "p", text: "Yang dibenarkan ialah diskaun bagi bayaran tunai (terma CIMB menyebutnya secara jelas). Anda juga boleh memilih untuk tidak menerima kad kredit, kerana BNM hanya mewajibkan penerimaan kad debit, asalkan notis di kaunter jelas menyatakan kad yang diterima." },
      { type: "p", text: "Cara yang lebih selamat ialah memasukkan caj ke dalam harga dari awal. Jika separuh jualan dibayar dengan kad pada kadar purata 1.10%, menaikkan harga seluruh kedai sekitar 0.55% sudah cukup untuk menampung caj." },

      { type: "h2", text: "Patutkah anda terima kad kredit? Kira titik pulang modal" },
      { type: "p", text: "Kosnya ialah caj; pulangannya ialah jualan daripada pelanggan yang tidak akan membeli tanpa kad. Formulanya sama: jualan tambahan yang diperlukan, sebagai peratus jualan kad = kadar caj ÷ margin untung kasar. Dengan margin 40% dan kadar 1.10%, setiap RM10,000 jualan kad dikenakan caj RM110; jika sekurang-kurangnya RM275 (2.75%) daripadanya datang daripada pelanggan yang membeli kerana kad diterima, untung daripada jualan itu sudah menampung caj." },
      { type: "p", text: "Sewa terminal mengubah kiraan: pada RM5,000 jualan kad sebulan, MDR RM55 ditambah sewa RM50 ialah RM105 (2.1% jualan kad), dan titik pulang modal naik kepada 5.25%. Jika jualan kad kecil, bandingkan dengan Tap to Pay tanpa yuran bulanan, atau terima DuitNow QR dan kad debit sahaja." },

      { type: "h2", text: "Bagaimana mengetahui kadar sebenar yang anda bayar?" },
      { type: "p", text: "Angka paling tepat ada pada penyata penyelesaian: penyata akaun di portal e-Access CIMB, atau laporan penyelesaian harian Touch 'n Go eWallet. Bahagikan caj sebulan dengan jualan bagi kaedah itu: itulah kadar sebenar anda." },
      { type: "p", text: "Jika anda sudah menggunakan iPad di kaunter, [DingPOS](/) boleh menganggar caj ini untuk anda. Dalam Tetapan → Kaedah Pembayaran, ketik satu kaedah dan isikan Caj pemprosesan: peratusan, jumlah tetap bagi setiap transaksi, atau kedua-duanya. Masukkan kadar yang sebenarnya ditolak, termasuk cukai jika ada, contohnya 1.10% bagi kad kredit. Jika penyedia tidak memulangkan MDR semasa bayaran balik, seperti RHB bagi DuitNow QR, matikan suis \"Peratusan caj dikembalikan semasa bayaran balik\"." },
      { type: "image", src: "guides/fees-my-settings.webp", width: 872, height: 764, alt: "DingPOS Tetapan → Kaedah Pembayaran: medan Caj pemprosesan bagi satu kaedah pembayaran, dengan peratusan diisi", caption: "Isikan Caj pemprosesan dengan kadar yang sebenarnya ditolak oleh penyedia anda." },
      { type: "p", text: "Setiap bayaran melalui kaedah itu kemudian merekodkan anggaran caj, dan kad Kaedah Pembayaran pada Statistik memaparkan:" },
      {
        type: "list",
        items: [
          "Setiap kaedah yang mempunyai kadar caj mendapat baris “Caj · Bersih” di bawahnya, iaitu anggaran caj dan anggaran diterima bersih bagi kaedah itu.",
          "Bahagian bawah kad menunjukkan anggaran caj dan anggaran diterima bersih untuk keseluruhan tempoh.",
          "Bayaran yang diterima sebelum kadar ditetapkan tidak membawa caj: Statistik menandakannya “N tiada kadar” dan menunjukkan jumlah bersih sebagai “—”.",
        ],
      },
      { type: "image", src: "guides/fees-my-report.webp", phone: "guides/fees-my-report-1080w.webp", width: 1126, height: 970, alt: "Kad Kaedah Pembayaran pada Statistik DingPOS: baris “Caj · Bersih” di bawah setiap kaedah yang mempunyai kadar caj, dan anggaran caj serta anggaran diterima bersih bagi tempoh itu di bahagian bawah kad", caption: "Statistik menganggar caj dan jumlah diterima bersih bagi setiap kaedah, berdasarkan kadar anda." },
      { type: "p", text: "Angka ini ialah anggaran berdasarkan kadar anda sendiri: DingPOS tidak memproses pembayaran dan tidak membaca penyata penyedia, jadi jumlah sebenar ialah jumlah dalam penyata. Cara menetapkannya: [Bolehkah DingPOS menjejak caj bayaran kad dan mudah alih?](/support/payment-fees/). Ciri ini memerlukan pelan Standard atau lebih tinggi; bandingkan di [Pelan & Harga](/pricing/) dan cuba percuma 30 hari." },
      { type: "note", text: "DingPOS tidak menghantar e-Invois ke MyInvois LHDN. Mulai 1 September 2026, perniagaan dengan jualan tahunan kurang daripada RM3 juta dikecualikan daripada e-Invois; jika jualan anda RM3 juta atau lebih, keluarkan e-Invois melalui sistem lain." },
    ],
    sources: [
      { label: "CIMB: Merchant Solutions (MDR terminal kad dan DuitNow QR, pakej mengikut bilangan cawangan, sewa terminal RM50 sebulan, masa penyelesaian, kadar belum termasuk cukai)", url: "https://www.cimb.com.my/en/business/business-solutions/solutions/merchant-solutions.html" },
      { label: "CIMB: Lanjutan kadar promosi 0% MDR DuitNow QR statik sehingga notis selanjutnya (2026)", url: "https://www.cimb.com.my/en/business/important-notices/2026/extension-of-static-qr-promotional-rate-2026.html" },
      { label: "CIMB: Terma dan Syarat Perkhidmatan Peniaga, Versi 8, Januari 2026 (klausa 6.1 penyata akaun, 14.1(e) larangan surcaj dan belian minimum, diskaun tunai)", url: "https://www.cimb.com.my/content/dam/cimb/business/documents/merchant-support/terms-and-conditions/tnc-merchant-service-jan-2026.pdf" },
      { label: "RHB: Soalan Lazim MDR DuitNow QR, 19 Oktober 2026 (0.35% dan 0.60% mulai 26 Oktober 2026, MDR tidak dipulangkan, tidak boleh dipindahkan kepada pelanggan)", url: "https://www.rhbgroup.com/-/media/Files/others/highlights/announcements/H20261019-1.pdf" },
      { label: "Bank Negara Malaysia: Bayaran DuitNow QR, peniaga mikro dan kecil terus menikmati transaksi tanpa kos (29 September 2023)", url: "https://www.bnm.gov.my/-/duitnow-qr-payments" },
      { label: "Touch 'n Go eWallet: Siapa yang dikenakan MDR (0.5%, peniaga PKS dengan lima cawangan atau lebih, atau dengan terminal tanpa tunai)", url: "https://merchantsupport.tngdigital.com.my/hc/en-us/articles/1500003556422-What-is-MDR-and-how-do-I-know-if-I-am-subjected-to-it" },
      { label: "Touch 'n Go eWallet: Peniaga tidak boleh memindahkan MDR kepada pelanggan (perjanjian peniaga, klausa 4.5)", url: "https://merchantsupport.tngdigital.com.my/hc/en-us/articles/360056635094-Can-a-merchant-transfer-the-MDR-cost-to-customers-using-Touch-n-Go-eWallet-to-make-payment" },
      { label: "Touch 'n Go eWallet: Jumlah MDR dalam laporan penyelesaian harian", url: "https://merchantsupport.tngdigital.com.my/hc/en-us/articles/360056635074-Where-can-merchants-check-on-the-total-MDR-charged-to-them" },
      { label: "Fiuu: Lampiran harga Malaysia, Mac 2026 (MDR kad dan e-wallet kedai fizikal, yuran pemasangan, sewa terminal, tempoh penyelesaian)", url: "https://booster.fiuu.com/assets/Appendix_20260318.pdf" },
      { label: "HitPay Malaysia: Harga (kad tempatan 1.2% + RM1, kad antarabangsa 3% + RM1)", url: "https://hitpayapp.com/my/pricing" },
      { label: "HitPay Malaysia: Tap to Pay pada iPhone (tiada yuran bulanan, tidak berfungsi pada iPad)", url: "https://hitpayapp.com/my/tap-to-pay-malaysia" },
      { label: "Stripe Malaysia: Harga (Terminal 2.8% + RM0.50 bagi kad tempatan)", url: "https://stripe.com/en-my/pricing" },
      { label: "Bank Negara Malaysia: Rangka Kerja Kad Pembayaran, 19 Ogos 2022 (perenggan 1.3, 10.1–10.10 dan 11: surcaj, laluan rangkaian, penerimaan kad)", url: "https://www.bnm.gov.my/documents/20124/943361/PD_Payment_Cards_Framework.pdf" },
      { label: "Bank Negara Malaysia: Pelarasan siling interchange kad debit bagi dompet mudah alih, 28 Julai 2025 (siling interchange, berkuat kuasa 1 Julai 2026)", url: "https://www.bnm.gov.my/documents/20124/943361/20250728-PCF-PD-Adjustment-Debit-Card-Interchange-Fee-Ceiling.pdf" },
      { label: "Visa Core Rules and Visa Product and Service Rules, 18 April 2026 (perkara 1.5.5.1 jumlah minimum, 1.5.5.2 surcaj)", url: "https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf" },
      { label: "LHDN: Kenyataan media 30 Ogos 2026, ambang pengecualian e-Invois dinaikkan kepada RM3 juta mulai 1 September 2026", url: "https://www.hasil.gov.my/wp-content/uploads/20260830-Kenyataan-Media-HASiL_AMBANG-PENGECUALIAN-E_INVOIS-DINAIKKAN.pdf" },
    ],
    related: [],
  },
];
