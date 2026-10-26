// DingPOS guides — vi pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of en or zh-Hant: each language lists only the guides written
// for the markets that read it, and a language without a pack has no guides
// section. This pack is written natively in Vietnamese, not generated through
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
//   market   — the market the facts hold for, a key of ui.markets ("VN")
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
  nav: "Cẩm nang",
  title: "Cẩm nang cho cửa hàng nhỏ",
  subtitle: "Cách tính chuyện thu tiền, chi phí và tiền lãi, viết cho chủ cửa hàng tự đứng quầy.",
  meta_description: "Cẩm nang cho chủ cửa hàng nhỏ: phí quẹt thẻ, phí nhận tiền qua QR tính thế nào và ăn mất bao nhiêu tiền lãi, kèm công thức, bảng tính và nguồn tham khảo.",
  back: "Tất cả bài viết",
  related_title: "Đọc thêm",
  sources_title: "Nguồn tham khảo",
  checked: "Kiểm tra lần cuối: {{date}}",
  cta_title: "Ghi đơn trên iPad, xem phí ước tính của từng phương thức thanh toán",
  cta_text: "DingPOS ghi lại đơn hàng và cách khách trả tiền trên iPad, rồi ước tính phí và thực nhận cho bạn. Dùng thử miễn phí 30 ngày, không thu phí trên giao dịch.",
  cta_button: "Tải về trên App Store",
  markets: { VN: "Việt Nam" },
};

export const articles = [
  {
    slug: "payment-processing-fees-vietnam",
    market: "VN",
    checked: "2026-10-25",
    title: "Phí quẹt thẻ máy POS bao nhiêu phần trăm? So với QR, MoMo và tính xem mất bao nhiêu tiền lãi",
    summary: "Quẹt thẻ nội địa mất khoảng 0,5–1,1%, Visa/Mastercard 1,3–2,2%; chuyển khoản VietQR, QR MoMo thường 0 đồng. Bán 200.000 đ lãi 80.000 đ, phí 2,2% ăn 5,5% lãi.",
    content: [
      { type: "p", text: "Theo biểu phí công khai của VietinBank, TPBank và VNPAY, quẹt thẻ (cà thẻ) qua máy POS mất khoảng 0,5%–1,1% với thẻ ATM nội địa, 1,3%–2,2% với Visa, Mastercard phát hành trong nước và 2,5%–3,85% với thẻ nước ngoài. Chuyển khoản VietQR hay QR bán hàng MoMo thường không mất phí. Phí tính trên doanh thu nhưng ăn vào tiền lãi: món hàng bán 200.000 đ, giá nhập 120.000 đ, khách cà Visa 2,2% thì cửa hàng mất 4.400 đ, bằng 5,5% khoản lãi 80.000 đ." },

      { type: "h2", text: "Mỗi cách nhận tiền, cửa hàng mất bao nhiêu phí?" },
      {
        type: "table",
        caption: "Theo trang công bố của ngân hàng và ví điện tử, kiểm tra tháng 10/2026. Mức thực tế tùy ngành hàng và hợp đồng; sao kê của cửa hàng mới là chuẩn.",
        head: ["Cách nhận tiền", "Phí cửa hàng trả", "Ghi chú"],
        rows: [
          ["Tiền mặt", "0", "Không có phí thanh toán"],
          ["Chuyển khoản VietQR", "Thường 0 đồng", "Chưa tính phí duy trì tài khoản, phí SMS"],
          ["QR bán hàng MoMo", "0 đồng khi nhận tiền", "Rút về ngân hàng miễn phí đến 100 triệu đồng/tháng"],
          ["VNPAY-QR", "Khoảng 0,88%–1,1%", "Mức tham khảo của VNPAY; thẻ quốc tế qua QR có thể đến 2,2%"],
          ["Thẻ ATM nội địa qua máy POS", "Khoảng 0,5%–1,1%", "VietinBank 1,00% chưa gồm VAT, tức 1,1%"],
          ["Visa, Mastercard phát hành trong nước", "Khoảng 1,3%–2,2%", "VietinBank ngành thường 2,0% chưa gồm VAT, tức 2,2%; siêu thị, tiện lợi 1,2% chưa gồm VAT"],
          ["Thẻ nước ngoài", "Khoảng 2,5%–3,85%", "VietinBank 3,5% chưa gồm VAT, tức 3,85%"],
        ],
      },
      { type: "note", text: "Phí quẹt thẻ của ngân hàng chịu VAT 10% (không thuộc diện giảm còn 8%). VietinBank niêm yết mức chưa gồm VAT, TPBank mức đã gồm VAT. Hộ kinh doanh không được khấu trừ VAT này, nên hãy tính theo mức đã gồm VAT." },

      { type: "h2", text: "Phí ăn vào tiền lãi, không chỉ vào doanh thu" },
      { type: "p", text: "Cửa hàng thật sự kiếm được tiền lãi gộp (giá bán trừ giá nhập), và phí lấy ra từ chính khoản lãi đó. Ví dụ món hàng bán 200.000 đ, giá nhập 120.000 đ, lãi gộp 80.000 đ:" },
      {
        type: "table",
        caption: "Đơn vị: đồng. Phí thẻ theo VietinBank (ngành thường) đã cộng VAT. “Còn lại” chưa trừ mặt bằng, lương, nên không phải lãi ròng.",
        head: ["", "Tiền mặt / VietQR / MoMo", "VNPAY-QR 0,88%", "Thẻ nội địa 1,1%", "Visa, Mastercard 2,2%", "Thẻ nước ngoài 3,85%"],
        rows: [
          ["Khách trả", "200.000", "200.000", "200.000", "200.000", "200.000"],
          ["Phí", "0", "1.760", "2.200", "4.400", "7.700"],
          ["Cửa hàng thực nhận", "200.000", "198.240", "197.800", "195.600", "192.300"],
          ["Còn lại sau giá nhập, phí", "80.000", "78.240", "77.800", "75.600", "72.300"],
          ["Phần lãi mất vào phí", "0%", "2,2%", "2,8%", "5,5%", "9,6%"],
        ],
      },
      { type: "p", text: "Công thức: phần lãi mất vào phí = mức phí ÷ tỷ lệ lãi gộp. Ở đây lãi gộp là 80.000 ÷ 200.000 = 40%, nên 2,2% ÷ 40% = 5,5%. Lãi càng mỏng, cùng mức phí càng ăn nhiều:" },
      {
        type: "table",
        caption: "Số trong bảng là phần trăm tiền lãi gộp mất vào phí.",
        head: ["Tỷ lệ lãi gộp", "Phí 1,1%", "Phí 2,2%", "Phí 3,85%"],
        rows: [
          ["20%", "5,5%", "11%", "19,3%"],
          ["30%", "3,7%", "7,3%", "12,8%"],
          ["40%", "2,8%", "5,5%", "9,6%"],
          ["50%", "2,2%", "4,4%", "7,7%"],
          ["60%", "1,8%", "3,7%", "6,4%"],
        ],
      },

      { type: "h2", text: "Một tháng mất bao nhiêu? Tính theo cơ cấu thanh toán" },
      { type: "p", text: "Phí cả tháng tính riêng từng cách nhận tiền rồi cộng lại. Ví dụ một tháng nhận 100 triệu đồng không dùng tiền mặt:" },
      {
        type: "table",
        caption: "Đơn vị: đồng. Mức phí như các bảng trên; chưa tính tiền thuê máy.",
        head: ["Cách nhận tiền", "Doanh số trong tháng", "Mức phí", "Phí"],
        rows: [
          ["Chuyển khoản VietQR", "50.000.000", "0", "0"],
          ["QR bán hàng MoMo", "15.000.000", "0", "0"],
          ["VNPAY-QR", "10.000.000", "0,88%", "88.000"],
          ["Thẻ ATM nội địa", "10.000.000", "1,1%", "110.000"],
          ["Visa, Mastercard trong nước", "12.000.000", "2,2%", "264.000"],
          ["Thẻ nước ngoài", "3.000.000", "3,85%", "115.500"],
          ["Tổng", "100.000.000", "", "577.500"],
        ],
      },
      { type: "p", text: "Cửa hàng này trả khoảng 577.500 đ/tháng, 6.930.000 đ/năm. Gần hai phần ba số tiền đi qua kênh miễn phí, nhưng gần một nửa tiền phí đến từ 12 triệu đồng quẹt Visa, Mastercard. Thay số của bạn vào từng dòng là ra phí của cửa hàng mình." },

      { type: "h2", text: "Vì sao tiền về tài khoản ít hơn doanh thu trên máy?" },
      { type: "p", text: "Ngân hàng và ví chuyển về số tiền đã trừ phí, còn máy bán hàng ghi số khách trả; phần chênh là phí." },
      {
        type: "list",
        items: [
          "Ghi doanh thu theo số khách trả, ghi phí thành khoản chi phí riêng: doanh thu không hụt khi khách chuyển sang quẹt thẻ, và phí mỗi tháng thấy rõ.",
          "VietQR về tài khoản trong vài giây; MoMo vào ví ngay; VNPAY-QR về trong ngày hoặc ngày làm việc kế tiếp sau khi bạn rút; tiền quẹt thẻ thường về sau một ngày (Shinhan Bank: T+1). Khi đối soát, nhớ tính cả khoản đang trên đường về.",
          "Hoàn tiền cho khách quẹt thẻ thì ngân hàng trích lại từ tài khoản cửa hàng. Phí đã thu có được hoàn không thì biểu phí, điều khoản của VietinBank, TPBank, Shinhan đều không ghi; hãy hỏi trước khi ký.",
        ],
      },

      { type: "h2", text: "Có được thu thêm phí quẹt thẻ của khách không?" },
      { type: "p", text: "Không. Ngân hàng Nhà nước quy định cửa hàng phải niêm yết việc không phân biệt giá, không thu phụ phí khi khách trả bằng thẻ, QR hay phương tiện không dùng tiền mặt khác; khoản thu sai phải hoàn lại cho khách. Vì vậy, niêm yết “giá tiền mặt” rẻ hơn “giá cà thẻ” cũng trái quy định." },
      { type: "p", text: "Cách an toàn là tính phí vào giá bán: nếu một phần tư doanh thu đến từ thẻ với mức phí bình quân 2%, nâng giá cả cửa hàng khoảng 0,5% là bù đủ." },

      { type: "h2", text: "Có nên nhận quẹt thẻ? Tính điểm hòa vốn" },
      { type: "p", text: "Nhận thẻ tốn phí, đổi lại có thêm khách “không quẹt thẻ được thì thôi không mua”. Doanh số cần có thêm (theo phần trăm doanh số thẻ) = mức phí ÷ tỷ lệ lãi gộp. Lãi gộp 40%, Visa 2,2%: 10 triệu đồng quẹt thẻ mất 220.000 đ phí; chỉ cần 550.000 đ (5,5%) trong đó là doanh số nhờ nhận thẻ mới có, lãi từ phần này đã đủ trả phí." },
      { type: "p", text: "Nhớ cộng tiền máy (thuê VNPAY SmartPOS khoảng 145.000–245.000 đ/máy/tháng): quẹt thẻ 20 triệu đồng một tháng ở mức 2,2% mất 440.000 đ, cộng tiền thuê giả sử 200.000 đ là 640.000 đ, khoảng 3,2% doanh số thẻ, nên điểm hòa vốn lên 8%." },

      { type: "h2", text: "Có phải dùng máy tính tiền kết nối cơ quan thuế không?" },
      { type: "p", text: "Từ 1/7/2026, hộ và cá nhân kinh doanh có doanh thu trên 1 tỷ đồng/năm phải dùng hóa đơn điện tử có mã của cơ quan thuế hoặc hóa đơn khởi tạo từ máy tính tiền kết nối với cơ quan thuế. Cửa hàng bán lẻ, quán ăn, nhà hàng bán trực tiếp cho người tiêu dùng thuộc nhóm dùng máy tính tiền, trừ khi đã đăng ký hóa đơn có mã. Chưa chắc thì hỏi cơ quan thuế quản lý trực tiếp." },
      { type: "p", text: "DingPOS không khởi tạo hóa đơn điện tử và không kết nối với cơ quan thuế. Cửa hàng thuộc diện bắt buộc đừng ghi đơn bán hàng vào DingPOS; hãy áp các công thức trên vào số liệu của giải pháp hóa đơn đã đăng ký và sao kê." },

      { type: "h2", text: "Làm sao biết mỗi cách nhận tiền thực sự mất bao nhiêu?" },
      { type: "p", text: "Con số chính xác nhất nằm trên sao kê hằng tháng: tổng phí trong tháng, gồm cả VAT, chia cho doanh số của kênh đó là mức phí thực tế. Tính riêng từng loại thẻ để thấy kênh nào đắt nhất." },
      { type: "p", text: "Cửa hàng không thuộc diện bắt buộc và bán hàng trên iPad có thể để [DingPOS](/) ước tính giúp. Vào Cài đặt → Phương thức thanh toán, chạm vào một phương thức rồi điền Phí xử lý thanh toán: tỷ lệ phần trăm, số tiền cố định mỗi giao dịch, hoặc cả hai. Nhập tỷ lệ thực sự bị khấu trừ, đã gồm VAT: phí 1% chưa VAT thì nhập 1,1%." },
      { type: "image", src: "guides/fees-vn-settings.webp", width: 872, height: 764, alt: "DingPOS, Cài đặt → Phương thức thanh toán: các ô Phí xử lý thanh toán của một phương thức thanh toán, đã điền tỷ lệ phần trăm", caption: "Điền Phí xử lý thanh toán cho từng phương thức theo mức thực sự bị khấu trừ, đã gồm VAT." },
      { type: "p", text: "Từ đó, thẻ Phương thức thanh toán trong Thống kê hiển thị:" },
      {
        type: "list",
        items: [
          "Dưới mỗi phương thức có tỷ lệ phí, một dòng “Phí · Thực nhận”: phí ước tính và thực nhận ước tính của phương thức đó.",
          "Ở cuối thẻ, phí ước tính và thực nhận ước tính của cả kỳ.",
          "Khoản thu trước khi đặt tỷ lệ phí không được tính phí: Thống kê ghi “(N chưa có tỷ lệ phí)” và thực nhận hiển thị “—”.",
        ],
      },
      { type: "image", src: "guides/fees-vn-report.webp", phone: "guides/fees-vn-report-1080w.webp", width: 1126, height: 1134, alt: "DingPOS, Thống kê: thẻ Phương thức thanh toán, dưới mỗi phương thức có tỷ lệ phí là dòng “Phí · Thực nhận”, cuối thẻ là phí ước tính và thực nhận ước tính của cả kỳ", caption: "Thống kê ước tính phí và thực nhận của từng phương thức theo tỷ lệ bạn nhập, kèm tổng của cả kỳ ở cuối thẻ." },
      { type: "p", text: "Đây là số ước tính theo tỷ lệ bạn nhập: DingPOS không xử lý thanh toán và không đọc sao kê, nên số thực tế vẫn theo sao kê. Xem [cách thiết lập](/support/payment-fees/). Tính năng có từ gói Standard trở lên ([Gói và bảng giá](/pricing/)), dùng thử miễn phí 30 ngày." },
    ],
    sources: [
      { label: "VietinBank: Biểu phí dịch vụ chấp nhận thanh toán thẻ (POS, chưa gồm VAT, hiệu lực từ 22/04/2026)", url: "https://www.vietinbank.vn/ca-nhan/cong-cu-tien-ich/bieu-phi-va-bieu-mau/dich-vu-chap-nhan-thanh-toan-the-40-html" },
      { label: "TPBank: Biểu phí dịch vụ chấp nhận thanh toán qua thiết bị mPOS/SoftPOS (đã gồm VAT)", url: "https://tpb.vn/wps/wcm/connect/7874d652-208d-4c4f-99ab-133c3df77ba4/Phu_luc_13_phi_va_cac_hinh_thuc_thu_phi_dich_vu_thanh_toan_the_final_v1.pdf?MOD=AJPERES" },
      { label: "VPBank: Biểu phí dịch vụ chấp nhận thanh toán thẻ POS, hiệu lực 01/09/2023 (phí thuê máy đã gồm VAT 10%)", url: "https://www.vpbank.com.vn/-/media/vpbank-latest/tai-lieu-bieu-mau/bieu-phi/sme/bieu-phi-dich-vu-thanh-toan-the--pos.pdf" },
      { label: "VNPAY: Thanh toán qua VNPAY có mất phí không? (biểu phí tham khảo 2026 của VNPAY-QR, SmartPOS, PhonePOS)", url: "https://vnpay.vn/vnpay-co-mat-phi-khong-0n1c8gu53a8" },
      { label: "VNPAY: Hướng dẫn đăng ký VNPAY-QR cho cửa hàng (phí 0,88% nội địa, 2,2% quốc tế, thời gian đối soát)", url: "https://vnpay.vn/dang-ky-vnpay-qr-cho-cua-hang-00izi3uzy80zq" },
      { label: "VNPAY: SmartPOS cho hộ kinh doanh (phí thẻ nội địa, thẻ quốc tế, tiền thuê thiết bị)", url: "https://vnpay.vn/smartpos-ho-kinh-doanh-06bg5f47fcx4" },
      { label: "MoMo: Giải pháp thanh toán cho doanh nghiệp vừa và nhỏ (QR bán hàng miễn phí, rút miễn phí 100 triệu/tháng)", url: "https://www.momo.vn/blog/giai-phap-thanh-toan-cho-doanh-nghiep-vua-va-nho-c103dt1780" },
      { label: "MoMo: Đối tác nhận doanh thu về MoMo ngay lập tức (từ 01/04/2023)", url: "https://www.momo.vn/tin-tuc/thong-bao/momo-doanh-nghiep-cap-nhat-thoi-gian-thanh-toan-3981" },
      { label: "Techcombank: Làm mã QR ngân hàng có mất phí không?", url: "https://techcombank.com/thong-tin/blog/lam-ma-qr-ngan-hang-co-mat-phi-khong" },
      { label: "NAPAS: Chuyển nhanh Napas247 bằng mã VietQR (1–3 giây, 24/7)", url: "https://napas.com.vn/them-7-ngan-hang-tham-gia-chuyen-tien-nhanh-napas247-bang-ma-vietqr-182769.htm" },
      { label: "Thông tư 15/2024/TT-NHNN, bản hợp nhất (Điều 21 khoản 1: không phân biệt giá, không thu phụ phí)", url: "https://static3.luatvietnam.vn/genfile/contentmix/2024/06/28/noi-dung-mix-thong-tu-so-15-2024-tt-nhnn-145805.pdf" },
      { label: "Shinhan Bank: Điều khoản và điều kiện thanh toán thẻ qua POS (thanh toán T+1, hoàn trả, niêm yết không thu phụ phí)", url: "https://shinhan.com.vn/public/uploads/SOHO/POS/POS%20-%20TnC%20-%20Card%20Payment%20%28VN%20%26%20EN%29.pdf" },
      { label: "Toàn văn Nghị quyết 204/2025/QH15 về giảm thuế GTGT (loại trừ hoạt động tài chính, ngân hàng)", url: "https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-so-204-2025-qh15-ve-giam-thue-gia-tri-gia-tang-119250628082120511.htm" },
      { label: "Nghị định 141/2026/NĐ-CP: nâng ngưỡng doanh thu không chịu thuế của hộ kinh doanh lên 1 tỷ đồng/năm", url: "https://vanban.chinhphu.vn/?classid=0&docid=217960&pageid=27160" },
      { label: "Bộ Tài chính, hỏi đáp chính sách: hộ kinh doanh doanh thu trên 1 tỷ đồng tính thuế GTGT theo tỷ lệ % trên doanh thu (Nghị định 68/2026/NĐ-CP)", url: "https://nif.mof.gov.vn/hoidapcstc/home/cthoidap/162069" },
      { label: "Công báo: Nghị định 254/2026/NĐ-CP về hóa đơn điện tử, chứng từ điện tử (ban hành 30/06/2026, hiệu lực 01/07/2026)", url: "https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-254-2026-nd-cp-469957/66826.htm" },
      { label: "Báo Chính phủ: Quy định đối tượng sử dụng hóa đơn điện tử (Nghị định 254/2026/NĐ-CP)", url: "https://baochinhphu.vn/quy-dinh-doi-tuong-su-dung-hoa-don-dien-tu-10226070308163723.htm" },
      { label: "Những điểm mới của Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC về hóa đơn điện tử", url: "https://xaydungchinhsach.chinhphu.vn/nhung-diem-moi-cua-nghi-dinh-254-2026-nd-cp-va-thong-tu-91-2026-tt-btc-ve-hoa-don-dien-tu-chung-tu-dien-tu-119260717143502375.htm" },
    ],
    related: [],
  },
];
