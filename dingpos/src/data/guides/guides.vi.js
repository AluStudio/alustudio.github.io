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
      { type: "p", text: "Theo biểu phí công khai của VietinBank, TPBank và VNPAY, cửa hàng quẹt thẻ (cà thẻ) qua máy POS mất khoảng 0,5%–1,1% với thẻ ATM nội địa, 1,3%–2,2% với Visa, Mastercard phát hành trong nước và 2,5%–3,85% với thẻ nước ngoài. Khách chuyển khoản qua mã VietQR hay quét mã QR bán hàng MoMo thì cửa hàng thường không mất phí. Phí tính trên doanh thu nhưng thứ bị ăn mất là tiền lãi: món hàng bán 200.000 đ, giá nhập 120.000 đ, khách cà Visa ở mức phí 2,2% thì cửa hàng mất 4.400 đ, bằng 5,5% khoản lãi 80.000 đ." },
      { type: "p", text: "Dưới đây dùng cùng một bộ số để tính cho bạn: mỗi cách nhận tiền tốn bao nhiêu, một tháng cộng lại là bao nhiêu, vì sao tiền về tài khoản ít hơn doanh thu trên máy, và có được thu thêm phí của khách hay không." },

      { type: "h2", text: "Mỗi cách nhận tiền, cửa hàng mất bao nhiêu phí?" },
      { type: "p", text: "Bảng dưới tổng hợp từ trang công bố của ngân hàng và ví điện tử, kiểm tra tháng 10/2026. Phí quẹt thẻ không có một mức chung: mức thực tế tùy ngân hàng, ngành hàng (mã MCC) và hợp đồng của bạn, nên hãy lấy hợp đồng và sao kê của chính cửa hàng làm chuẩn." },
      {
        type: "table",
        head: ["Cách nhận tiền", "Phí cửa hàng trả", "Ghi chú"],
        rows: [
          ["Tiền mặt", "0", "Không có phí thanh toán"],
          ["Chuyển khoản qua mã VietQR (Napas 247)", "Thường 0 đồng (chưa tính phí duy trì tài khoản hay SMS của ngân hàng)", "Tạo mã QR nhận tiền vào tài khoản ngân hàng là miễn phí, kể cả tài khoản hộ kinh doanh. Một số ngân hàng thu phí với gói QR cửa hàng có thêm tính năng quản lý, tùy ngân hàng"],
          ["Mã QR bán hàng MoMo", "0 đồng khi nhận tiền", "MoMo ghi miễn phí tạo mã và sử dụng; rút từ ví về ngân hàng miễn phí trong hạn mức 100 triệu đồng/tháng"],
          ["VNPAY-QR", "Khoảng 0,88%–1,1% (nguồn nội địa)", "Mức tham khảo của VNPAY; khách trả bằng thẻ quốc tế qua QR có thể đến 2,2%. Miễn phí đăng ký, lắp đặt và duy trì"],
          ["Thẻ ATM nội địa (Napas) qua máy POS", "Khoảng 0,5%–1,1%", "VNPAY SmartPOS 0,55%–0,88%; TPBank mPOS 0,6%–0,8% (đã gồm VAT), SoftPOS 0,5%–0,7%; VietinBank 1,00% chưa gồm VAT"],
          ["Visa, Mastercard phát hành trong nước", "Khoảng 1,3%–2,2%", "VietinBank 1,2% cho nhóm ngành ưu đãi (siêu thị, cửa hàng tiện lợi, thức ăn nhanh…) và 2,0% cho nhóm thường, chưa gồm VAT; TPBank mPOS 1,4%–2,2% đã gồm VAT, SoftPOS 1,3%–2,1%; VNPAY khoảng 1,8%"],
          ["Thẻ phát hành ở nước ngoài", "Khoảng 2,5%–3,85%", "VNPAY khoảng 2,5%; TPBank 2,7%–2,8%; VietinBank 3,5% chưa gồm VAT, tức 3,85% sau VAT"],
          ["ZaloPay", "Theo thỏa thuận", "ZaloPay không công bố phí cho đơn vị chấp nhận thanh toán; phí ghi trong hợp đồng riêng"],
        ],
      },
      { type: "p", text: "Ngoài phần trăm, máy POS thường kèm tiền thiết bị. VNPAY SmartPOS đang có chương trình miễn phí thuê 3 tháng đầu, sau đó khoảng 145.000–245.000 đ/máy/tháng, hoặc mua đứt 2.350.000–2.950.000 đ; TPBank thu phí quản lý 33.000 đ/thiết bị/tháng và giữ cọc 3.000.000 đ cho máy mPOS. VNPAY PhonePOS biến điện thoại Android có NFC thành máy chấp nhận thẻ, không tốn tiền thiết bị." },
      { type: "note", text: "Phí quẹt thẻ của ngân hàng chịu thuế GTGT: VietinBank niêm yết mức phí chưa gồm VAT, còn TPBank niêm yết mức đã gồm VAT, nên khi so sánh hãy quy về cùng một kiểu. Hoạt động tài chính, ngân hàng nằm ngoài diện giảm thuế GTGT còn 8% (Nghị quyết 204/2025/QH15, áp dụng đến hết 31/12/2026), nên thuế suất vẫn là 10% (biểu phí POS của VPBank cũng ghi phí thuê máy “đã bao gồm VAT 10%”). Ví dụ phí 1% chưa VAT thì thực tế là 1,1%. Hộ kinh doanh không được khấu trừ phần VAT này, vì hộ có doanh thu trên 1 tỷ đồng/năm nộp thuế GTGT theo tỷ lệ % trên doanh thu, còn hộ từ 1 tỷ đồng trở xuống không phải nộp thuế GTGT. Với hộ kinh doanh, VAT trên phí là chi phí thật, nên khi ước tính hãy dùng mức đã gồm VAT." },

      { type: "h2", text: "Phí ăn vào tiền lãi, không chỉ vào doanh thu" },
      { type: "p", text: "Phí tính theo số tiền khách trả, nên nhìn qua chỉ có 1–2%. Nhưng thứ cửa hàng thật sự kiếm được là tiền lãi gộp, tức giá bán trừ giá nhập, và phí được lấy ra từ chính khoản lãi đó." },
      { type: "p", text: "Lấy ví dụ một món hàng bán 200.000 đ, giá nhập 120.000 đ, tiền lãi gộp mỗi món là 80.000 đ:" },
      {
        type: "table",
        caption: "Đơn vị: đồng. Phí thẻ lấy theo biểu phí POS của VietinBank (nhóm ngành thường) đã cộng 10% VAT; VNPAY-QR là mức tham khảo VNPAY công bố. “Còn lại” chưa trừ tiền mặt bằng, lương và chi phí khác, nên không phải lãi ròng.",
        head: ["", "Tiền mặt / VietQR / MoMo", "VNPAY-QR 0,88%", "Thẻ nội địa 1,1%", "Visa, Mastercard 2,2%", "Thẻ nước ngoài 3,85%"],
        rows: [
          ["Khách trả", "200.000", "200.000", "200.000", "200.000", "200.000"],
          ["Phí", "0", "1.760", "2.200", "4.400", "7.700"],
          ["Cửa hàng thực nhận", "200.000", "198.240", "197.800", "195.600", "192.300"],
          ["Còn lại sau giá nhập và phí", "80.000", "78.240", "77.800", "75.600", "72.300"],
          ["Phí chiếm bao nhiêu tiền lãi", "0%", "2,2%", "2,8%", "5,5%", "9,6%"],
        ],
      },
      { type: "p", text: "Tỷ lệ này tính được bằng một công thức: phần tiền lãi bị phí ăn mất = mức phí ÷ tỷ lệ lãi gộp. Ví dụ trên có tỷ lệ lãi gộp 80.000 ÷ 200.000 = 40%, nên Visa 2,2% ÷ 40% = 5,5%. Lãi càng mỏng, cùng một mức phí càng ăn nhiều:" },
      {
        type: "table",
        caption: "Số trong bảng là phần trăm tiền lãi gộp mất vào phí.",
        head: ["Tỷ lệ lãi gộp", "Phí 0,88%", "Phí 1,1%", "Phí 2,2%", "Phí 3,85%"],
        rows: [
          ["20%", "4,4%", "5,5%", "11%", "19,3%"],
          ["30%", "2,9%", "3,7%", "7,3%", "12,8%"],
          ["40%", "2,2%", "2,8%", "5,5%", "9,6%"],
          ["50%", "1,8%", "2,2%", "4,4%", "7,7%"],
          ["60%", "1,5%", "1,8%", "3,7%", "6,4%"],
        ],
      },
      { type: "p", text: "Với hàng chỉ lãi 20%, khách cà Visa 2,2% thì cứ 100 đồng tiền lãi mất 11 đồng, còn khách quẹt thẻ nước ngoài thì mất gần một phần năm. Hàng lãi từ 50% trở lên thì ảnh hưởng nhẹ hơn nhiều." },

      { type: "h2", text: "Một tháng mất bao nhiêu? Tính theo cơ cấu thanh toán" },
      { type: "p", text: "Phí cả tháng không phải lấy tổng doanh thu nhân một mức phí, mà tính riêng từng cách nhận tiền rồi cộng lại; phần tiền mặt và chuyển khoản là 0. Giả sử một tháng cửa hàng nhận 100 triệu đồng không dùng tiền mặt:" },
      {
        type: "table",
        caption: "Đơn vị: đồng. Phí thẻ theo biểu phí VietinBank đã cộng 10% VAT (nhóm ngành thường); VNPAY-QR theo mức tham khảo; chưa tính tiền thuê máy.",
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
      { type: "p", text: "Cửa hàng này trả khoảng 577.500 đ phí mỗi tháng, tức khoảng 6.930.000 đ một năm, chưa kể tiền thuê máy. Thay doanh số và mức phí của từng dòng bằng số của bạn là ra con số của cửa hàng mình. Để ý rằng gần hai phần ba số tiền đi qua kênh miễn phí, nhưng gần một nửa tiền phí lại đến từ 12 triệu đồng quẹt Visa, Mastercard." },

      { type: "h2", text: "Vì sao tiền về tài khoản ít hơn doanh thu trên máy?" },
      { type: "p", text: "Ngân hàng và ví điện tử chuyển cho cửa hàng số tiền đã trừ phí. Máy bán hàng ghi số tiền khách trả, nên hai bên lệch nhau là chuyện bình thường; phần chênh chính là phí." },
      {
        type: "list",
        items: [
          "Ghi doanh thu theo số tiền khách trả, ghi phí thành một khoản chi phí riêng. Như vậy doanh thu không bị hụt khi khách chuyển sang quẹt thẻ, và tháng nào trả bao nhiêu phí cũng thấy rõ.",
          "Tiền mỗi kênh về vào lúc khác nhau: chuyển khoản VietQR vào tài khoản trong vài giây, kể cả ban đêm; MoMo trả doanh thu vào ví ngay khi khách quét mã, rồi bạn rút về ngân hàng; với VNPAY-QR, bạn rút về tài khoản và tiền về trong ngày hoặc ngày làm việc kế tiếp, không tính thứ Bảy, Chủ nhật và ngày lễ; tiền quẹt thẻ thường về sau một ngày, ví dụ điều khoản POS của Shinhan Bank thanh toán vào ngày T+1 cho giao dịch tổng kết trong ngày T. Đối soát cuối tháng nhớ tính cả khoản đang trên đường về.",
          "Khi bạn hoàn tiền cho khách đã quẹt thẻ, ngân hàng trích lại số tiền đó từ tài khoản của cửa hàng. Phí đã thu có được hoàn lại hay không thì biểu phí và điều khoản công khai mà chúng tôi xem (VietinBank, TPBank, Shinhan Bank) đều không ghi; hãy hỏi rõ ngân hàng trước khi ký.",
        ],
      },

      { type: "h2", text: "Có được thu thêm phí quẹt thẻ của khách không?" },
      { type: "p", text: "Không. Theo Điều 21 Thông tư 15/2024/TT-NHNN, đơn vị chấp nhận thanh toán phải niêm yết công khai việc không phân biệt giá và không thu thêm tiền, phụ phí khi khách trả bằng phương tiện không dùng tiền mặt so với trả tiền mặt; khoản đã thu trái quy định phải hoàn lại cho khách. Quy định này áp dụng cho mọi phương tiện không dùng tiền mặt, không riêng thẻ. Hợp đồng với ngân hàng còn buộc cửa hàng cam kết không phân biệt giá giữa các phương tiện không dùng tiền mặt với nhau (Điều 20), và điều khoản POS của Shinhan Bank ghi lại đúng nghĩa vụ niêm yết này." },
      { type: "p", text: "Vì quy định cấm cả phân biệt giá chứ không chỉ cấm thu thêm, bảng “giá tiền mặt” thấp hơn “giá cà thẻ” cũng trái quy định, chứ không riêng tấm biển “quẹt thẻ cộng 2%”." },
      { type: "p", text: "Cách làm an toàn là tính phí vào giá bán ngay từ đầu: nếu một phần tư doanh thu đến từ thẻ với mức phí bình quân 2%, nâng giá cả cửa hàng khoảng 0,5% là bù đủ tiền phí." },

      { type: "h2", text: "Có nên nhận quẹt thẻ? Tính điểm hòa vốn" },
      { type: "p", text: "Cái giá của việc nhận thẻ là tiền phí, cái được là những khách “không quẹt thẻ được thì thôi không mua”. Điểm hòa vốn dùng lại cùng công thức: doanh số cần có thêm nhờ nhận thẻ (tính theo phần trăm doanh số quẹt thẻ) = mức phí ÷ tỷ lệ lãi gộp." },
      { type: "p", text: "Lãi gộp 40%, Visa, Mastercard 2,2%: cứ 10 triệu đồng quẹt thẻ mất 220.000 đ phí. Chỉ cần trong đó có 550.000 đ (5,5%) là doanh số có được nhờ cửa hàng nhận thẻ, tiền lãi từ phần đó đã đủ trả 220.000 đ phí." },
      { type: "p", text: "Đừng quên tiền thuê máy. Quẹt thẻ 20 triệu đồng một tháng ở mức 2,2% mất 440.000 đ, cộng tiền thuê máy giả sử 200.000 đ là 640.000 đ, tức chi phí thực khoảng 3,2% doanh số thẻ; điểm hòa vốn khi đó tăng lên 8%. Cửa hàng ít khách quẹt thẻ có thể cân nhắc giải pháp dùng điện thoại làm máy chấp nhận thẻ như VNPAY PhonePOS để bỏ được khoản thiết bị." },
      { type: "p", text: "Nếu khách của bạn phần lớn đã quen chuyển khoản QR, nhận thêm thẻ có thể không kéo thêm bao nhiêu khách mới. Còn nếu cửa hàng ở khu du lịch, hay khách thường hỏi “quẹt thẻ được không”, hãy ước tính thử xem doanh số có thêm có vượt điểm hòa vốn này không. Với thẻ nước ngoài 3,85% và lãi gộp 40%, điểm hòa vốn là 9,6%." },

      { type: "h2", text: "Cửa hàng có phải dùng máy tính tiền kết nối với cơ quan thuế không?" },
      { type: "p", text: "Từ 1/7/2026, Nghị định 254/2026/NĐ-CP quy định hộ kinh doanh, cá nhân kinh doanh có doanh thu trên 1 tỷ đồng/năm phải dùng hóa đơn điện tử có mã của cơ quan thuế hoặc hóa đơn điện tử khởi tạo từ máy tính tiền có kết nối dữ liệu với cơ quan thuế. Cửa hàng bán lẻ, quán ăn uống, nhà hàng bán trực tiếp cho người tiêu dùng thuộc nhóm dùng hóa đơn từ máy tính tiền; nếu đã đăng ký hóa đơn điện tử có mã thì không bắt buộc đăng ký thêm loại này. Hộ không thuộc diện bắt buộc vẫn được đăng ký dùng tự nguyện." },
      { type: "p", text: "Mốc 1 tỷ đồng cũng là ngưỡng thuế: từ năm 2026, hộ kinh doanh có doanh thu từ 1 tỷ đồng/năm trở xuống không phải nộp thuế GTGT và thuế TNCN (Nghị định 141/2026/NĐ-CP). Nếu chưa chắc cửa hàng mình thuộc diện nào, hãy hỏi cơ quan thuế quản lý trực tiếp." },

      { type: "h2", text: "Làm sao biết mỗi cách nhận tiền thực sự mất bao nhiêu?" },
      { type: "p", text: "Con số chính xác nhất nằm trên sao kê hằng tháng của ngân hàng, VNPAY hay MoMo: lấy tổng phí trong tháng, gồm cả VAT, chia cho doanh số của kênh đó là ra mức phí thực tế của bạn. Ghi thẻ nội địa, Visa, Mastercard trong nước và thẻ nước ngoài thành từng cột riêng vì mức phí khác nhau; cuối tháng sẽ thấy ngay kênh nào đắt nhất." },
      { type: "p", text: "Nếu bạn đã bán hàng trên iPad, có thể để ứng dụng tính giúp. Trong [DingPOS](/), vào Cài đặt → Phương thức thanh toán, chạm vào từng phương thức rồi điền Phí xử lý thanh toán: một tỷ lệ phần trăm, một số tiền cố định cho mỗi giao dịch, hoặc cả hai. Hãy nhập mức đã gồm VAT, ví dụ phí 1% chưa VAT thì nhập 1,1%. Từ đó, thẻ Phương thức thanh toán trong Thống kê hiện phí ước tính và thực nhận ước tính của từng phương thức. DingPOS không xử lý thanh toán và không đọc sao kê của ngân hàng hay ví điện tử, nên đây là số ước tính theo tỷ lệ bạn nhập; số thực tế vẫn theo sao kê. DingPOS cũng không phải máy tính tiền khởi tạo hóa đơn điện tử và không kết nối dữ liệu với cơ quan thuế: nếu cửa hàng thuộc diện phải dùng hóa đơn điện tử, hãy dùng DingPOS song song với giải pháp hóa đơn đã đăng ký để ghi phương thức thanh toán, ước tính phí và tiền lãi." },
      { type: "p", text: "Cách thiết lập xem tại [DingPOS có theo dõi được phí thẻ và phí thanh toán di động không?](/support/payment-fees/). Đây là tính năng của gói Standard trở lên; so sánh các gói tại [Gói và bảng giá](/pricing/), và bạn có thể dùng thử miễn phí 30 ngày." },
    ],
    sources: [
      { label: "VietinBank: Biểu phí dịch vụ chấp nhận thanh toán thẻ (POS, chưa gồm VAT, hiệu lực từ 22/04/2026)", url: "https://www.vietinbank.vn/ca-nhan/cong-cu-tien-ich/bieu-phi-va-bieu-mau/dich-vu-chap-nhan-thanh-toan-the-40-html" },
      { label: "TPBank: Biểu phí dịch vụ chấp nhận thanh toán qua thiết bị mPOS/SoftPOS (đã gồm VAT, phí quản lý, đặt cọc thiết bị)", url: "https://tpb.vn/wps/wcm/connect/7874d652-208d-4c4f-99ab-133c3df77ba4/Phu_luc_13_phi_va_cac_hinh_thuc_thu_phi_dich_vu_thanh_toan_the_final_v1.pdf?MOD=AJPERES" },
      { label: "VPBank: Biểu phí dịch vụ chấp nhận thanh toán thẻ POS, hiệu lực 01/09/2023 (phí thuê máy đã gồm VAT 10%)", url: "https://www.vpbank.com.vn/-/media/vpbank-latest/tai-lieu-bieu-mau/bieu-phi/sme/bieu-phi-dich-vu-thanh-toan-the--pos.pdf" },
      { label: "VNPAY: Thanh toán qua VNPAY có mất phí không? (biểu phí tham khảo 2026 của VNPAY-QR, SmartPOS, PhonePOS)", url: "https://vnpay.vn/vnpay-co-mat-phi-khong-0n1c8gu53a8" },
      { label: "VNPAY: Hướng dẫn đăng ký VNPAY-QR cho cửa hàng (phí 0,88% nội địa, 2,2% quốc tế, thời gian đối soát)", url: "https://vnpay.vn/dang-ky-vnpay-qr-cho-cua-hang-00izi3uzy80zq" },
      { label: "VNPAY: SmartPOS cho hộ kinh doanh (phí thẻ nội địa, thẻ quốc tế, tiền thuê thiết bị)", url: "https://vnpay.vn/smartpos-ho-kinh-doanh-06bg5f47fcx4" },
      { label: "MoMo: Giải pháp thanh toán cho doanh nghiệp vừa và nhỏ (QR bán hàng miễn phí, rút miễn phí 100 triệu/tháng)", url: "https://www.momo.vn/blog/giai-phap-thanh-toan-cho-doanh-nghiep-vua-va-nho-c103dt1780" },
      { label: "MoMo: Đối tác nhận doanh thu về MoMo ngay lập tức (từ 01/04/2023)", url: "https://www.momo.vn/tin-tuc/thong-bao/momo-doanh-nghiep-cap-nhat-thoi-gian-thanh-toan-3981" },
      { label: "ZaloPay: Biểu phí dịch vụ trung gian thanh toán (phí đơn vị chấp nhận thanh toán theo thỏa thuận riêng)", url: "https://zalopay.vn/quy-dinh/bieu-phi-su-dung-dich-vu-trung-gian-thanh-toan-zalopay" },
      { label: "Techcombank: Làm mã QR ngân hàng có mất phí không?", url: "https://techcombank.com/thong-tin/blog/lam-ma-qr-ngan-hang-co-mat-phi-khong" },
      { label: "NAPAS: Chuyển nhanh Napas247 bằng mã VietQR (1–3 giây, 24/7)", url: "https://napas.com.vn/them-7-ngan-hang-tham-gia-chuyen-tien-nhanh-napas247-bang-ma-vietqr-182769.htm" },
      { label: "Thông tư 15/2024/TT-NHNN, bản hợp nhất (Điều 20 khoản 3, Điều 21 khoản 1: không phân biệt giá, không thu phụ phí)", url: "https://static3.luatvietnam.vn/genfile/contentmix/2024/06/28/noi-dung-mix-thong-tu-so-15-2024-tt-nhnn-145805.pdf" },
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
