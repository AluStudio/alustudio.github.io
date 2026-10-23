// Generated from en and the vi translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync vi`, then `npm run l10n -- apply vi`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Bắt đầu sử dụng",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Thanh toán",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Đơn hàng & Trả hàng",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Sản phẩm, kho hàng & nhập hàng",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Báo cáo",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Khuyến mãi & khách hàng thân thiết",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Sao lưu & dữ liệu",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Nhân viên & phân quyền",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Đăng ký và thanh toán gói",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Hướng dẫn thiết lập khuyến mãi",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Sắp ra mắt",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Cách thiết lập cửa hàng trong DingPOS như thế nào?",
    "keywords": [
      "thiết lập",
      "bắt đầu",
      "hướng dẫn ban đầu",
      "lần đầu",
      "trình hướng dẫn",
      "mở cửa hàng",
      "quốc gia",
      "tiền tệ"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lần đầu mở DingPOS, trình hướng dẫn thiết lập sẽ giúp bạn mở cửa hàng chỉ với hai bước, trong vài phút:"
      },
      {
        "type": "steps",
        "items": [
          "Chọn quốc gia hoặc khu vực của bạn. Đầu danh sách là khu vực của iPad này và các thị trường phổ biến nhất; bên dưới là toàn bộ 175 quốc gia và khu vực có DingPOS trên App Store, có thể tìm theo tên bằng ngôn ngữ của ứng dụng hoặc tiếng Anh. Lựa chọn của bạn sẽ tự điền tiền tệ, thuế suất và chế độ thuế.",
          "Ở bước Cửa hàng của bạn, nhập tên cửa hàng, có thể thêm logo, rồi kiểm tra tiền tệ, thuế suất và chế độ thuế (giá đã gồm thuế / giá chưa gồm thuế). Tiền tệ mặc định theo quốc gia của bạn; chạm vào đó để chọn trong 130 loại tiền tệ."
        ]
      },
      {
        "type": "p",
        "text": "Chạm Tiếp tục và bạn sẽ thấy “Ding! Cửa hàng của bạn đã sẵn sàng.” DingPOS cũng tạo sẵn hai phương thức thanh toán là Tiền mặt và Thẻ tín dụng. Sau đó hãy thêm sản phẩm trong Sản phẩm và bắt đầu bán hàng."
      },
      {
        "type": "note",
        "text": "Tiền tệ và chế độ thuế không thể đổi sau khi thiết lập; thuế suất vẫn có thể đổi sau trong Cài đặt. Tại Hoa Kỳ, Canada, Brazil và Micronesia, thuế suất tùy theo bang, tỉnh hoặc thành phố, nên ô thuế suất ban đầu để trống và bạn nhập mức thuế mình áp dụng (được phép nhập 0) để tiếp tục. Danh sách 175 quốc gia và lựa chọn tiền tệ có từ phiên bản v3.2; các phiên bản trước chỉ có 15 quốc gia."
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
    "question": "DingPOS có dùng được khi không có mạng internet không?",
    "keywords": [
      "ngoại tuyến",
      "offline",
      "internet",
      "wifi",
      "mạng",
      "không có mạng",
      "chợ"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có. DingPOS hoạt động ngoại tuyến — bán hàng, quản lý sản phẩm, tồn kho và báo cáo đều chạy ngay trên iPad của bạn, không cần mạng. Chợ đêm, gian hàng tạm thời và những nơi không có Wi-Fi đều dùng rất tốt."
      },
      {
        "type": "p",
        "text": "Chỉ có hai việc cần kết nối: sao lưu lên đám mây (tải lên iCloud / Google Drive / Dropbox của chính bạn) và xác minh trạng thái đăng ký."
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
    "question": "Tôi có cần tạo tài khoản để dùng DingPOS không?",
    "keywords": [
      "tài khoản",
      "đăng ký tài khoản",
      "đăng nhập",
      "tạo tài khoản",
      "quyền riêng tư"
    ],
    "content": [
      {
        "type": "p",
        "text": "Không. DingPOS không có hệ thống tài khoản — tải về là bán hàng được ngay. Sản phẩm, đơn hàng và dữ liệu khách hàng của bạn đều nằm trên iPad và không bao giờ được tải lên máy chủ của chúng tôi."
      },
      {
        "type": "p",
        "text": "Khi bật sao lưu lên đám mây, bạn đăng nhập vào tài khoản đám mây của chính mình (iCloud, Google Drive hoặc Dropbox). Bản sao lưu nằm trong tài khoản của bạn — chúng tôi không thể truy cập."
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
    "question": "DingPOS chạy trên thiết bị nào?",
    "keywords": [
      "thiết bị",
      "iphone",
      "mac",
      "ipad",
      "yêu cầu hệ thống",
      "phiên bản"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hiện tại DingPOS hỗ trợ iPad chạy iPadOS 17 trở lên, được thiết kế chủ yếu cho chiều ngang."
      },
      {
        "type": "p",
        "text": "iPhone và Mac chưa được hỗ trợ. Nếu bạn muốn chúng tôi hỗ trợ thiết bị khác, hãy viết thư và cho chúng tôi biết nhu cầu sử dụng của bạn."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Sau khi thiết lập, tôi có đổi được tiền tệ hoặc chế độ thuế không?",
    "keywords": [
      "tiền tệ",
      "chế độ thuế",
      "thay đổi",
      "bị khóa",
      "thuế suất"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bạn có thể đổi thuế suất bất cứ lúc nào trong Cài đặt — thuế suất mới chỉ áp dụng cho các đơn hàng sau đó."
      },
      {
        "type": "p",
        "text": "Tiền tệ và chế độ thuế (giá đã gồm thuế / giá chưa gồm thuế) bị khóa sau khi thiết lập xong. Toàn bộ đơn hàng trước đó đã được tính theo chúng, nên đổi giữa chừng sẽ làm sai lệch báo cáo của bạn. Hãy kiểm tra chúng ở bước Cửa hàng của bạn trong phần thiết lập: tiền tệ mặc định theo quốc gia của bạn và bạn có thể chạm vào đó để chọn loại khác."
      },
      {
        "type": "note",
        "text": "Nếu bạn vừa mở cửa hàng và chưa có dữ liệu quan trọng, bạn có thể xóa rồi cài lại ứng dụng để thiết lập lại từ đầu. Hãy chắc chắn không còn gì cần giữ trước khi xóa."
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
    "question": "Làm thế nào để đổi ngôn ngữ của ứng dụng?",
    "keywords": [
      "ngôn ngữ",
      "tiếng Anh",
      "tiếng Việt",
      "tiếng Trung",
      "tiếng Nhật",
      "tiếng Tây Ban Nha",
      "đa ngôn ngữ",
      "chuyển đổi",
      "đổi ngôn ngữ"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS hỗ trợ 32 ngôn ngữ, gồm tiếng Anh, tiếng Trung phồn thể và giản thể, tiếng Nhật, tiếng Hàn, tiếng Thái, tiếng Việt, tiếng Indonesia, tiếng Mã Lai, tiếng Tây Ban Nha (Mỹ Latinh), tiếng Bồ Đào Nha (Brazil), tiếng Pháp và tiếng Đức. Vào Cài đặt → Tùy chỉnh thiết bị và chạm vào Ngôn ngữ ứng dụng. Thao tác này mở trang của DingPOS trong ứng dụng Cài đặt của iPad, nơi bạn chọn ngôn ngữ ở mục Ngôn ngữ."
      },
      {
        "type": "p",
        "text": "iOS không cho phép ứng dụng mở thẳng danh sách ngôn ngữ, nên lần chạm cuối cùng diễn ra trong Cài đặt hệ thống. Ngôn ngữ chỉ áp dụng cho iPad này."
      },
      {
        "type": "note",
        "text": "Các ngôn ngữ ngoài tiếng Anh và tiếng Trung phồn thể có từ phiên bản v3.2. Nếu mục Ngôn ngữ chỉ liệt kê tiếng Anh và tiếng Trung, hãy cập nhật DingPOS từ App Store."
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
    "question": "Làm sao để phục vụ nhiều khách cùng lúc?",
    "keywords": [
      "giỏ hàng",
      "nhiều giỏ",
      "giữ đơn",
      "chuyển giỏ",
      "song song",
      "khách xếp hàng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Màn hình thu ngân hỗ trợ tối đa 10 giỏ hàng cùng lúc. Chạm \"+\" trên thanh giỏ hàng để thêm giỏ, chạm vào tab có số để chuyển giỏ."
      },
      {
        "type": "p",
        "text": "Mỗi giỏ hàng được tính riêng. Khi khách A còn đang chọn hàng, bạn có thể chuyển sang giỏ khác và thanh toán cho khách B trước. Giỏ hàng sẽ tự động được xóa ngay khi thanh toán xong."
      },
      {
        "type": "note",
        "text": "Giỏ hàng chỉ lưu trong bộ nhớ — các giỏ chưa thanh toán sẽ bị xóa khi bạn đóng hẳn ứng dụng."
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
    "question": "Cách áp dụng giảm giá khi bán hàng?",
    "keywords": [
      "giảm giá",
      "phần trăm",
      "số tiền cố định",
      "hạ giá",
      "bớt giá"
    ],
    "content": [
      {
        "type": "p",
        "text": "Giảm giá có hai cấp, mỗi cấp đều hỗ trợ số tiền cố định hoặc phần trăm:"
      },
      {
        "type": "list",
        "items": [
          "Giảm giá theo món: chạm vào món trong giỏ hàng → chọn \"Giảm giá\" → nhập số tiền hoặc phần trăm.",
          "Giảm giá giỏ hàng: chạm nút \"Giảm giá\" bên dưới giỏ hàng."
        ]
      },
      {
        "type": "p",
        "text": "Mỗi món và mỗi giỏ hàng chỉ có một mức giảm giá tại một thời điểm — áp dụng lại sẽ ghi đè mức trước, và chạm vào nhãn giảm giá để xóa. Giảm giá được áp dụng trước thuế, đúng thứ tự thông thường trong bán lẻ."
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
    "question": "Thuế được tính như thế nào?",
    "keywords": [
      "thuế",
      "VAT",
      "thuế bán hàng",
      "giá đã gồm thuế",
      "giá chưa gồm thuế",
      "hóa đơn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Thuế được tính tự động theo chế độ thuế bạn chọn khi thiết lập. Hóa đơn hiển thị số tiền thuế ở cả hai chế độ:"
      },
      {
        "type": "list",
        "items": [
          "Giá đã gồm thuế: giá niêm yết đã có thuế — tổng tiền không đổi và hóa đơn tách riêng phần thuế đã nằm trong giá (phổ biến ở Đài Loan, Nhật Bản, v.v.).",
          "Giá chưa gồm thuế: thuế được cộng thêm vào số tiền sau giảm giá khi thanh toán (phổ biến ở Mỹ, Canada, v.v.)."
        ]
      },
      {
        "type": "p",
        "text": "Thứ tự tính đầy đủ: giảm giá theo món → giảm giá giỏ hàng → thuế. Số tiền được làm tròn lên từ 0,5 theo số chữ số thập phân của loại tiền tệ (ví dụ 0 với TWD, 2 với USD)."
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
    "question": "DingPOS hỗ trợ những phương thức thanh toán nào?",
    "keywords": [
      "thanh toán",
      "tiền mặt",
      "thẻ tín dụng",
      "line pay",
      "tiền thối",
      "tùy chỉnh",
      "bán chịu",
      "phí"
    ],
    "content": [
      {
        "type": "p",
        "text": "Cửa hàng mới bắt đầu với hai phương thức thanh toán là Tiền mặt và Thẻ tín dụng, được đặt tên theo ngôn ngữ của ứng dụng khi thiết lập. Trong Cài đặt → Phương thức thanh toán, bạn có thể thêm bất kỳ phương thức nào khác (ví dụ Apple Pay, LINE Pay, ví điện tử trong nước), cũng như xóa hoặc sắp xếp lại."
      },
      {
        "type": "p",
        "text": "Phương thức thanh toán chỉ là nhãn ghi sổ — DingPOS không xử lý thanh toán thực tế. Hãy nhận tiền thẻ hoặc thanh toán di động bằng máy quẹt thẻ hoặc ứng dụng sẵn có của bạn, rồi chọn nhãn tương ứng trong DingPOS để ghi lại. Với tiền mặt, ứng dụng tự tính tiền thối."
      },
      {
        "type": "p",
        "text": "Nếu nhà cung cấp thẻ hoặc thanh toán di động thu phí, hãy đặt tỷ lệ phí cho phương thức đó và Thống kê sẽ ước tính phí cùng thực nhận của từng phương thức — xem “DingPOS có theo dõi được phí thẻ và phí thanh toán di động không?”"
      },
      {
        "type": "p",
        "text": "Với khách quen lấy hàng trước và trả tiền sau, hãy chọn Bán chịu: đơn được ghi nhận là khoản phải thu và được tất toán khi tiền về. Xem “Khách quen có thể mua chịu và trả sau không?”"
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
    "question": "DingPOS có theo dõi được phí thẻ và phí thanh toán di động không?",
    "keywords": [
      "phí xử lý thanh toán",
      "phí thẻ",
      "phí giao dịch",
      "tỷ lệ phí",
      "thực nhận",
      "phí cho người bán",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có. Trong Cài đặt → Phương thức thanh toán, chạm vào một phương thức (hoặc thêm phương thức mới) rồi điền Phí xử lý thanh toán: một tỷ lệ phần trăm, một số tiền cố định cho mỗi giao dịch, hoặc cả hai. Từ đó, mỗi khoản thanh toán thu qua phương thức này đều ghi lại một khoản phí ước tính theo tỷ lệ có hiệu lực tại thời điểm đó."
      },
      {
        "type": "p",
        "text": "Trong Thống kê, thẻ Phương thức thanh toán thêm một dòng “Phí · Thực nhận” dưới mỗi phương thức có phí, và phần cuối thẻ hiển thị phí ước tính và thực nhận ước tính của cả kỳ."
      },
      {
        "type": "list",
        "items": [
          "Nhập tỷ lệ mà nhà cung cấp thực sự khấu trừ, đã gồm thuế — với 3% cộng 5% thuế, hãy nhập 3,15%. Để trống cả hai ô nếu không có phí.",
          "Thay đổi tỷ lệ chỉ áp dụng cho các khoản thanh toán sau đó; phí đã ghi vẫn giữ nguyên.",
          "“Hoàn lại phí phần trăm khi hoàn tiền” được bật theo mặc định, dành cho nhà cung cấp hoàn lại phí khi bạn hoàn tiền; phí cố định không bao giờ được hoàn lại. Vô hiệu hóa, trả hàng, hủy đơn đặt trước và hủy tất toán đều đảo phí theo quy tắc này, và khách nhận lại cùng một số tiền trong mọi trường hợp.",
          "Các khoản thanh toán thu trước khi phương thức có tỷ lệ phí sẽ không có phí: Thống kê đánh dấu “(N chưa có tỷ lệ phí)” và hiển thị thực nhận là “—”."
        ]
      },
      {
        "type": "note",
        "text": "Phí chỉ là ước tính từ tỷ lệ bạn nhập; sao kê của nhà cung cấp mới là số tiền thực tế. Chỉnh tỷ lệ phí và xem phí trong Thống kê cần gói Standard trở lên. Ở gói Lite các ô này bị khóa, nhưng các khoản thanh toán vẫn ghi lại phí, nên phí sẽ hiện ra khi bạn nâng cấp."
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
    "question": "Làm sao tắt tiếng “Ding” sau khi thanh toán?",
    "keywords": [
      "âm thanh",
      "ding",
      "tắt tiếng",
      "im lặng",
      "âm thanh thanh toán"
    ],
    "content": [
      {
        "type": "p",
        "text": "Được. Vào Cài đặt → Tùy chỉnh thiết bị và tắt Âm thanh thanh toán. Từ lần bán tiếp theo, màn hình thành công sẽ im lặng, vẫn giữ rung phản hồi."
      },
      {
        "type": "p",
        "text": "Công tắc này chỉ áp dụng cho chiếc iPad này, và việc khôi phục bản sao lưu đám mây không làm thay đổi nó."
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
    "question": "Màn hình thu ngân có ẩn được sản phẩm hết hàng không?",
    "keywords": [
      "ẩn",
      "hết hàng",
      "bán hết",
      "tồn kho bằng 0",
      "thu ngân",
      "mất sản phẩm",
      "không tìm thấy sản phẩm"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có. Vào Cài đặt → Tùy chỉnh thiết bị và bật Ẩn sản phẩm hết hàng (mặc định tắt). Khi đó lưới sản phẩm, bộ lọc danh mục và tìm kiếm (theo tên và mã vạch) của thu ngân sẽ bỏ qua mọi sản phẩm có tồn kho từ 0 trở xuống. Công tắc có hiệu lực ngay, không cần mở lại ứng dụng."
      },
      {
        "type": "list",
        "items": [
          "Sản phẩm không theo dõi tồn kho luôn hiển thị. Sản phẩm có biến thể chỉ bị ẩn khi mọi biến thể đều hết hàng.",
          "Chỉ ảnh hưởng đến màn hình thu ngân của iPad này; danh sách Sản phẩm vẫn hiển thị mọi sản phẩm.",
          "Khi mọi sản phẩm đều bị ẩn, màn hình thu ngân hiển thị “Tất cả sản phẩm đã hết hàng” và chỉ nơi để tắt công tắc."
        ]
      },
      {
        "type": "note",
        "text": "Khi công tắc bật, iPad này không tìm thấy sản phẩm hết hàng, nên không thể bán vào tồn kho âm hay nhận đơn đặt trước cho chúng — hãy tắt công tắc khi cần. Nếu sản phẩm dường như biến mất khỏi màn hình thu ngân, thường là do công tắc này."
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
    "question": "Đổi giá sản phẩm thì giỏ hàng có cập nhật không?",
    "keywords": [
      "đổi giá",
      "cập nhật giá",
      "giỏ hàng",
      "tính lại"
    ],
    "content": [
      {
        "type": "p",
        "text": "Giỏ hàng hiển thị giá tại thời điểm món được thêm vào. Khi bạn chạm xác nhận thanh toán, DingPOS truy vấn lại giá mới nhất của từng món — nếu có thay đổi, ứng dụng sẽ báo giá cập nhật cho bạn trước khi tiếp tục."
      },
      {
        "type": "p",
        "text": "Khuyến mãi cũng được đánh giá lại từ đầu khi xác nhận. Nếu tổng tiền, thuế hoặc bất kỳ khoản giảm giá nào thay đổi, ứng dụng sẽ hiện bản tóm tắt thay đổi và bạn phải xác nhận lại — để số tiền bạn thấy chính là số tiền được ghi nhận."
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
    "question": "Giảm giá thủ công và khuyến mãi có dùng chung được không?",
    "keywords": [
      "giảm giá thủ công",
      "khuyến mãi",
      "kết hợp",
      "ghi đè"
    ],
    "content": [
      {
        "type": "p",
        "text": "Được. Quy tắc là “thủ công được ưu tiên, các lớp vẫn độc lập”:"
      },
      {
        "type": "list",
        "items": [
          "Giảm giá theo món thủ công: dòng đó không còn nhận khuyến mãi cấp món — giảm giá thủ công của bạn được coi là quyết định cuối cùng tại chỗ. Tuy vậy, số tiền của dòng vẫn được tính vào các mức chi tiêu tối thiểu.",
          "Giảm giá giỏ hàng thủ công: được áp dụng sau khi mọi khuyến mãi đã được tính, nên hai loại cùng tồn tại. Nếu bạn nhập quá số tiền còn lại, mức giảm sẽ tự động bị giới hạn kèm thông báo."
        ]
      },
      {
        "type": "p",
        "text": "Khi xóa giảm giá thủ công, dòng đó sẽ đủ điều kiện nhận khuyến mãi trở lại ở lần đánh giá tiếp theo."
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
    "question": "Bấm nhầm khi thanh toán thì vô hiệu hóa đơn hàng như thế nào?",
    "keywords": [
      "vô hiệu hóa đơn",
      "hủy đơn",
      "bấm nhầm",
      "nhập sai đơn",
      "sửa đơn hàng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vào Đơn hàng, tìm đơn cần xử lý, mở chi tiết đơn rồi chọn Vô hiệu hóa. Xác nhận là xong."
      },
      {
        "type": "p",
        "text": "Khi vô hiệu hóa, mọi thứ liên quan được đảo lại tự động: tồn kho đang theo dõi được cộng lại, điểm thành viên đã tích từ đơn bị thu hồi và điểm đã dùng được hoàn lại. Đơn đã vô hiệu hóa vẫn nằm trong danh sách với dấu hiệu rõ ràng và không được tính vào doanh thu trong báo cáo."
      },
      {
        "type": "note",
        "text": "Vô hiệu hóa nghĩa là “giao dịch bán này coi như chưa từng xảy ra” — dùng khi bạn lên đơn sai ngay tại quầy. Nếu khách mang hàng quay lại sau đó, hãy dùng Trả hàng: đơn gốc được giữ nguyên, bạn có thể chỉ trả một vài mặt hàng, và doanh thu bị trừ vào đúng ngày trả hàng."
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
    "question": "Khách trả hàng hoặc đổi hàng thì xử lý thế nào?",
    "keywords": [
      "trả hàng",
      "đổi hàng",
      "hoàn tiền",
      "trả một phần",
      "đổi size"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vào Đơn hàng, mở đơn gốc rồi chạm Trả hàng. Chọn số lượng của từng mặt hàng được trả lại. Nếu khách đổi hàng, chạm Thêm hàng đổi ngay trên cùng màn hình; phần chênh lệch được tất toán một lần — số dương nghĩa là khách trả thêm, số âm nghĩa là bạn hoàn tiền, bằng không thì hai bên không phải trả gì."
      },
      {
        "type": "list",
        "items": [
          "Đơn gốc không bao giờ bị sửa. Mỗi lần trả hàng tạo một chứng từ riêng, ghi ngày hôm nay, đánh số có tiền tố R, và doanh thu bị trừ vào đúng ngày trả hàng.",
          "Số tiền hoàn là số khách thực sự đã trả cho mặt hàng đó — giảm giá theo mặt hàng, giảm giá giỏ hàng và điểm đã dùng đều đã được phân bổ sẵn, nên không hoàn theo giá niêm yết. Thuế tính theo mức thuế suất của đơn gốc.",
          "Hàng đổi sang được tính theo giá hôm nay, không áp dụng khuyến mãi hay giảm giá.",
          "Tồn kho đang theo dõi được cộng lại tự động. Điểm đã tích từ đơn gốc bị thu hồi, điểm đã dùng được hoàn lại, và hàng đổi sang tự tích điểm riêng.",
          "Một đơn có thể trả hàng nhiều lần, nhưng không vượt quá số lượng đã bán ban đầu. Giới hạn lượt dùng khuyến mãi không được hoàn lại khi trả hàng."
        ]
      },
      {
        "type": "note",
        "text": "Trả hàng không giới hạn thời gian, nhưng bắt buộc phải có đơn gốc. Nếu lỡ nhập nhầm một lần trả hàng, hãy vô hiệu hóa lần trả đó và số lượng được trả sẽ trở lại."
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
    "question": "Nhận đơn đặt trước và thu tiền cọc như thế nào?",
    "keywords": [
      "đơn đặt trước",
      "đặt trước",
      "tiền cọc",
      "đặt cọc",
      "nhận hàng",
      "còn lại",
      "giữ hàng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ở màn hình thanh toán, chuyển phần đầu màn hình từ Bán hàng sang Đơn đặt trước, chọn ngày nhận hàng, nhập tiền cọc (từ 0 đến toàn bộ số tiền, có phím tắt 30% / 50% / toàn bộ) và chọn cách thanh toán tiền cọc. Hãy gắn khách hàng để liên hệ khi hàng về."
      },
      {
        "type": "list",
        "items": [
          "Tồn kho được trừ ngay khi tạo đơn đặt trước, nên số lượng có thể bán phản ánh ngay lập tức. Đây chỉ là tín hiệu, không phải giữ hàng: một đơn bán sau đó vẫn có thể lấy đơn vị cuối cùng. Mặt hàng hết hàng sẽ xuống âm và trở lại bình thường khi nhận đơn nhập hàng.",
          "Khi khách đến nhận, chạm Bàn giao trong chi tiết đơn để thu phần còn lại. Đơn lúc này trở thành đơn bán hoàn tất thông thường, và các lần trả hàng sau đó theo quy trình trả hàng bình thường.",
          "Nếu khách không đến, chạm Hủy đơn trong chi tiết đơn rồi chọn hoàn tiền cọc hoặc giữ tiền cọc. Tồn kho được cộng lại.",
          "Hóa đơn tiền cọc và hóa đơn nhận hàng cuối cùng dùng chung một số."
        ]
      },
      {
        "type": "p",
        "text": "Trong Thống kê, doanh thu của đơn đặt trước được ghi nhận đủ vào ngày nhận hàng, còn tiền cọc được tính vào Tiền đã thu ngay ngày khách trả — nên hai con số sẽ lệch nhau một thời gian. Xem “Doanh thu và Tiền đã thu khác nhau thế nào?”"
      },
      {
        "type": "note",
        "text": "Không thể sửa mặt hàng của đơn đặt trước; nếu khách đổi ý, hãy hủy đơn rồi tạo đơn đặt trước mới. Tạo đơn đặt trước cần gói Standard trở lên. Sau khi hạ gói, các đơn đặt trước hiện có vẫn có thể nhận hàng hoặc hủy."
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
    "question": "Khách quen có thể mua chịu, trả tiền sau không?",
    "keywords": [
      "bán chịu",
      "mua chịu",
      "ghi nợ",
      "công nợ",
      "tất toán",
      "trả sau"
    ],
    "content": [
      {
        "type": "p",
        "text": "Được. Chọn khách hàng ở màn hình thanh toán rồi chọn Bán chịu làm phương thức thanh toán. Khoản nợ cần có người đứng tên, nên không dùng được Bán chịu khi chưa gắn khách hàng."
      },
      {
        "type": "p",
        "text": "Để thu nợ, chuyển phần đầu của Đơn hàng sang Công nợ. Các khoản nợ được gom theo khách hàng; mở một khách để tất toán từng đơn, cả tháng hoặc toàn bộ — mỗi lần DingPOS sẽ hỏi tiền được trả bằng cách nào. Bạn cũng có thể tất toán một đơn ngay trong chi tiết đơn, và nếu lỡ tất toán nhầm thì dùng Hủy tất toán để lấy lại."
      },
      {
        "type": "list",
        "items": [
          "Doanh thu được tính vào ngày hàng ra khỏi cửa hàng; Tiền đã thu và điểm thành viên chờ đến ngày tất toán.",
          "Đơn chưa tất toán có huy hiệu màu hổ phách trong danh sách, và chi tiết khách hàng cho biết khách hiện đang nợ bao nhiêu.",
          "Không thể xóa khách hàng còn đơn chưa tất toán."
        ]
      },
      {
        "type": "note",
        "text": "Tạo đơn bán chịu cần gói Standard trở lên. Sau khi hạ gói, bạn không thể tạo đơn mới nhưng vẫn xem và tất toán được các khoản công nợ hiện có."
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
    "question": "Có thể thêm ghi chú cho đơn hàng, khách hàng hay đơn nhập hàng không?",
    "keywords": [
      "ghi chú",
      "ghi chú đơn hàng",
      "ghi chú khách hàng",
      "chú thích",
      "nhận xét"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có. Trang chi tiết của đơn hàng, khách hàng và đơn nhập hàng đều có một thẻ ghi chú — chạm vào để sửa, tối đa 500 ký tự. Bạn cũng có thể viết ghi chú ngay trong biểu mẫu khi tạo khách hàng hoặc đơn nhập hàng."
      },
      {
        "type": "p",
        "text": "Ghi chú không phụ thuộc vào trạng thái: đơn đã hoàn tất, đơn đã vô hiệu hóa và các lần trả hàng đều có thể thêm hoặc sửa ghi chú. Số tiền và mặt hàng của đơn được cố định lúc thanh toán; ghi chú nằm kèm bên cạnh chứng từ và không bao giờ thay đổi nội dung của nó."
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
    "question": "Cách tạo sản phẩm có biến thể (size, màu sắc)?",
    "keywords": [
      "biến thể",
      "size",
      "kích cỡ",
      "màu sắc",
      "tùy chọn",
      "thuộc tính sản phẩm"
    ],
    "content": [
      {
        "type": "p",
        "text": "Trong trang sửa sản phẩm, ở mục Tùy chọn biến thể, chạm Thêm tùy chọn để tạo một tùy chọn (ví dụ “Màu”), rồi dùng “+ Lựa chọn” để thêm từng lựa chọn của nó (ví dụ Đỏ, Xanh). Khi có từ hai tùy chọn trở lên (ví dụ Màu × Size), DingPOS tự tạo mọi tổ hợp cho bạn (Đỏ/S, Đỏ/M, Xanh/S…)."
      },
      {
        "type": "p",
        "text": "Khi sản phẩm đã có biến thể, trường Giá của sản phẩm sẽ thu gọn và mỗi tổ hợp có giá riêng trong mục Giá & tồn kho theo biến thể, cùng tồn kho riêng (từ v3.2; các phiên bản trước vẫn yêu cầu nhập giá sản phẩm). Màn hình thu ngân, danh sách sản phẩm và chi tiết sản phẩm hiển thị khoảng giá từ thấp nhất đến cao nhất, như “NT$350–NT$390”, hoặc một giá duy nhất khi mọi tổ hợp cùng giá; sắp xếp theo giá dùng giá thấp nhất của các tổ hợp. Khi thanh toán, chạm vào sản phẩm sẽ hiện bảng chọn biến thể trước khi thêm vào giỏ hàng."
      },
      {
        "type": "p",
        "text": "Bạn không cần nhập giá vốn cho từng tổ hợp: để trống ô Giá vốn nghĩa là Theo sản phẩm, tức dùng giá vốn của sản phẩm và thay đổi theo khi giá đó đổi. Nhập một con số sẽ thành Giá vốn riêng — kể cả 0. Dùng giá vốn sản phẩm cho tất cả sẽ xóa mọi giá vốn riêng cùng lúc."
      },
      {
        "type": "note",
        "text": "Tên tùy chọn và tên lựa chọn tối đa 20 ký tự và không được để trống: tên tùy chọn hoặc lựa chọn bị bỏ trống sẽ được viền đỏ khi bạn lưu, hãy điền vào hoặc xóa lựa chọn trống đó. Sản phẩm có biến thể không dùng được giá tự đặt."
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
    "question": "Có thể nhập giá sản phẩm ngay lúc thanh toán, như phí vận chuyển hay hàng thỏa thuận giá không?",
    "keywords": [
      "giá tự đặt",
      "giá tùy chỉnh",
      "nhập giá",
      "phí vận chuyển",
      "phí dịch vụ",
      "giá thỏa thuận",
      "giá thị trường"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có — hãy đặt nó là sản phẩm Giá tự đặt. Bật Giá tự đặt trong trang sửa sản phẩm và để trống giá; màn hình thu ngân và danh sách sản phẩm sẽ hiển thị “Giá tự đặt” ở chỗ lẽ ra là giá. Khi thanh toán, chạm vào sản phẩm sẽ hỏi giá trước; nhập giá rồi chạm Thêm vào giỏ hàng để thêm với giá đó."
      },
      {
        "type": "list",
        "items": [
          "0 là giá hợp lệ (ví dụ miễn phí vận chuyển); ô để trống thì không thể thêm. Hãy nhập giá theo cách chế độ thuế của cửa hàng định giá mọi thứ khác.",
          "Giỏ hàng chỉ có một dòng cho mỗi sản phẩm giá tự đặt: chạm lại vào sản phẩm sẽ mở dòng đó để bạn đổi giá.",
          "Bật Giá tự đặt cũng bật Loại khỏi khuyến mãi, nên khoản phí không bị giảm giá và không được tính vào ngưỡng chi tiêu. Hãy tắt lại nếu món hàng thỏa thuận giá cần tham gia khuyến mãi.",
          "Sau khi bán, dòng này được tính thuế, tích điểm và tính vào Thống kê như mọi dòng khác, và khi trả hàng sẽ hoàn lại đúng giá đã nhập.",
          "Sản phẩm có biến thể không dùng được giá tự đặt. Sản phẩm giá tự đặt không bao giờ được tặng kèm hay làm món mua thêm có phí, và không xuất hiện trong danh sách hàng đổi sang của một lần đổi hàng."
        ]
      },
      {
        "type": "note",
        "text": "Gói nào cũng có tính năng này, và việc nhập giá không bao giờ cần quản lý phê duyệt."
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
    "question": "Mã vạch hoạt động như thế nào? Quét mã vạch sản phẩm ra sao?",
    "keywords": [
      "mã vạch",
      "quét mã vạch",
      "máy quét",
      "trùng mã vạch",
      "camera"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mã vạch sản phẩm có thể nhập tay hoặc quét bằng camera. Mã vạch phải là duy nhất — nếu khi lưu mà mã trùng với sản phẩm khác, DingPOS sẽ cho bạn biết mã đó thuộc sản phẩm nào."
      },
      {
        "type": "p",
        "text": "Khi thanh toán, ô tìm kiếm khớp với cả tên sản phẩm lẫn phần đầu của mã vạch — chỉ cần gõ mã vạch là sản phẩm hiện ra ngay. Về kế hoạch hỗ trợ máy quét mã vạch chuyên dụng, xem “Sau này có hỗ trợ máy quét mã vạch vật lý không?”"
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
    "question": "Làm sao đổi thứ tự hiển thị sản phẩm?",
    "keywords": [
      "sắp xếp sản phẩm",
      "thứ tự sản phẩm",
      "đổi thứ tự",
      "kéo thả",
      "ghim lên đầu",
      "chuyển lên đầu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Trong Sản phẩm, chạm Sửa thứ tự rồi kéo các thẻ sản phẩm đến vị trí bạn muốn. Màn hình thu ngân và phần quản lý sản phẩm dùng chung một thứ tự này, nên chỉ cần sắp xếp một lần là cả hai cùng cập nhật."
      },
      {
        "type": "list",
        "items": [
          "Khi danh mục có nhiều sản phẩm, menu của mỗi thẻ có Chuyển lên đầu, Chuyển xuống cuối và Chuyển đến vị trí, và mỗi thẻ đều hiện vị trí hiện tại của nó.",
          "Hãy lọc theo một danh mục trước để chỉ sắp xếp lại trong danh mục đó — sản phẩm ở các danh mục khác giữ nguyên chỗ.",
          "Sản phẩm mới được đưa lên đầu; sửa thông tin sản phẩm không bao giờ làm đổi vị trí của nó."
        ]
      },
      {
        "type": "p",
        "text": "Muốn tạm thời sắp xếp theo tên, giá, hoặc thời gian tạo / cập nhật, hãy dùng menu Sắp xếp theo. Thứ tự tùy chỉnh của bạn vẫn được giữ, và chuyển lại về Thứ tự tùy chỉnh là có lại ngay."
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
    "question": "Làm sao theo dõi tồn kho?",
    "keywords": [
      "tồn kho",
      "quản lý kho",
      "theo dõi tồn kho",
      "kiểm kho",
      "sắp hết hàng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Theo dõi tồn kho được bật hoặc tắt riêng cho từng sản phẩm — hãy bật trong trang sửa sản phẩm và nhập số lượng hiện có. Mỗi biến thể của một sản phẩm theo dõi tồn kho riêng."
      },
      {
        "type": "p",
        "text": "Sau khi bật, đơn bán và đơn đặt trước sẽ tự trừ kho; vô hiệu hóa, trả hàng và hủy đơn đặt trước sẽ cộng lại; nhận đơn nhập hàng sẽ cộng thêm; và bạn có thể điều chỉnh thủ công bất cứ lúc nào. Mọi biến động đều được ghi đầy đủ vào sổ biến động. Hàng sắp hết được tô màu cảnh báo."
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
    "question": "Vì sao tồn kho bị âm?",
    "keywords": [
      "tồn kho âm",
      "kho âm",
      "hết hàng",
      "vẫn bán được",
      "điều chỉnh tồn kho"
    ],
    "content": [
      {
        "type": "p",
        "text": "Đây là chủ ý thiết kế: thanh toán không bao giờ bị chặn vì thiếu hàng trong kho. Quy tắc đầu tiên ở quầy bán là khách không phải chờ — con số sai trên sổ có thể sửa sau, nhưng một đơn bán bị gián đoạn thì mất luôn."
      },
      {
        "type": "p",
        "text": "Tồn kho âm thường do chưa ghi nhận lần nhập hàng, hoặc món đặt trước chưa về (đơn đặt trước trừ kho ngay khi tạo). Hãy ghi nhập hàng bằng cách nhận đơn nhập hàng, con số sẽ tự trở lại đúng; còn chênh lệch khi kiểm kho thì sửa bằng điều chỉnh thủ công, và điều chỉnh này được lưu trong sổ biến động."
      },
      {
        "type": "note",
        "text": "Nếu thu ngân không tìm thấy sản phẩm có tồn kho 0, hãy kiểm tra xem Ẩn sản phẩm hết hàng có đang bật trong Cài đặt → Tùy chỉnh thiết bị không: khi bật, iPad này không thể thêm sản phẩm hết hàng vào giỏ hàng."
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
    "question": "Cách ghi nhận nhập hàng và nhà cung cấp?",
    "keywords": [
      "đơn nhập hàng",
      "nhập hàng",
      "nhà cung cấp",
      "nhận hàng",
      "nhập kho",
      "công nợ phải trả"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mục Nhập hàng trên thanh bên quản lý nhà cung cấp và đơn nhập hàng. Mỗi nhà cung cấp lưu tên, người liên hệ, số điện thoại, địa chỉ và kỳ hạn thanh toán mặc định (trả ngay hoặc theo tháng)."
      },
      {
        "type": "steps",
        "items": [
          "Chạm Nhập hàng mới, chọn nhà cung cấp, rồi thêm sản phẩm, số lượng và giá vốn từng đơn vị (điền sẵn theo giá vốn hiện tại của sản phẩm). Bạn cũng có thể thêm phí vận chuyển. Nếu chưa có nhà cung cấp, chạm Thêm nhà cung cấp ở góc trên bên trái danh sách nhà cung cấp — nhà cung cấp mới sẽ quay thẳng về đơn nhập hàng.",
          "Bản nháp không ảnh hưởng đến tồn kho hay khoản phải trả — bạn có thể thoải mái sửa hoặc xóa.",
          "Khi hàng về, chạm Nhập kho: tồn kho đang theo dõi sẽ tăng lên, còn đơn nhập hàng được cấp số và bị khóa. Theo mặc định, việc nhận hàng cũng cập nhật giá vốn của từng sản phẩm theo giá vốn đơn vị này; hãy tắt Đồng bộ giá vốn sản phẩm trên đơn nhập hàng nếu muốn giữ nguyên giá vốn."
        ]
      },
      {
        "type": "p",
        "text": "Kỳ hạn thanh toán quyết định bước tiếp theo: đơn trả ngay được đánh dấu đã thanh toán, còn đơn theo tháng vẫn còn nợ trong Hóa đơn còn nợ, nơi bạn có thể tất toán theo từng nhà cung cấp — một đơn, trong tháng này, hoặc toàn bộ."
      },
      {
        "type": "note",
        "text": "Nhập hàng yêu cầu gói Standard trở lên. Nhà cung cấp còn đơn đã nhận chưa thanh toán thì không thể xóa."
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
    "question": "Doanh thu và Tiền đã thu khác nhau thế nào?",
    "keywords": [
      "doanh thu",
      "tiền đã thu",
      "tiền thu vào",
      "đối chiếu",
      "tiền cọc",
      "bán chịu",
      "mất cọc"
    ],
    "content": [
      {
        "type": "p",
        "text": "Doanh thu được tính vào ngày giao hàng; Tiền đã thu được tính vào ngày tiền về tay bạn. Với đơn thanh toán ngay tại quầy, hai việc diễn ra cùng ngày nên hai con số khớp nhau. Chúng lệch nhau khi:"
      },
      {
        "type": "list",
        "items": [
          "Bán chịu: hàng giao hôm nay và được tính vào doanh thu hôm nay; tiền được tính vào Tiền đã thu vào ngày tất toán.",
          "Đơn đặt trước: tiền cọc được tính vào Tiền đã thu ngay khi khách trả; doanh thu được ghi nhận toàn bộ vào ngày khách lấy hàng.",
          "Mất cọc: khi khách hủy đơn đặt trước và bạn giữ lại tiền cọc, khoản này đã nằm trong Tiền đã thu từ lúc khách trả. Thống kê hiển thị riêng khoản này là mất cọc, và nó không bao giờ được tính vào doanh thu.",
          "Vô hiệu hóa đơn trước đó: số tiền hoàn lại được tính vào Tiền đã thu vào ngày vô hiệu hóa, nên Tiền đã thu của ngày đó có thể âm, còn Đã vô hiệu hóa tính đơn theo ngày bán. Biểu tượng ⓘ trên các ô Tiền đã thu và Đã vô hiệu hóa cũng giải thích điều này."
        ]
      },
      {
        "type": "p",
        "text": "Để đối chiếu, hãy so Tiền đã thu với két tiền và máy quẹt thẻ; để biết thực tế bạn đã bán được bao nhiêu trong một khoảng thời gian, hãy xem Doanh thu. Trả hàng làm giảm doanh thu vào ngày trả hàng."
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
    "question": "Báo cáo xem được theo những khoảng thời gian nào?",
    "keywords": [
      "báo cáo",
      "khoảng thời gian",
      "tuần này",
      "tháng này",
      "năm nay",
      "tùy chỉnh",
      "ngày",
      "sản phẩm bán chạy"
    ],
    "content": [
      {
        "type": "p",
        "text": "Chọn Hôm nay, Hôm qua, Tuần này, Tháng này, Năm nay hoặc Toàn thời gian ở đầu màn hình Thống kê, hoặc dùng Tùy chỉnh để chọn ngày bắt đầu và ngày kết thúc. Tuần này tính theo ngày đầu tuần của thiết bị; Tháng này và Năm nay bắt đầu từ ngày 1 và từ ngày 1 tháng 1. Mỗi lựa chọn đều hiển thị các ngày mà nó bao gồm, và Toàn thời gian bắt đầu từ giao dịch đầu tiên của cửa hàng."
      },
      {
        "type": "p",
        "text": "Với một ngày, biểu đồ xu hướng chuyển thành biểu đồ cột theo giờ; các khoảng dài hơn dùng ngày, tuần, tháng hoặc năm cho mỗi cột tùy độ dài."
      },
      {
        "type": "p",
        "text": "Thẻ Xếp hạng sản phẩm liệt kê 5 sản phẩm đứng đầu. Chạm vào thẻ hoặc Xem tất cả để xem mọi sản phẩm đã bán trong khoảng thời gian đó, xếp theo số lượng sau khi trừ hàng trả."
      },
      {
        "type": "p",
        "text": "Với gói Pro, So sánh doanh số ở bên phải thanh khoảng thời gian cho phép so sánh khoảng thời gian đang xem với khoảng liền trước hoặc với cùng kỳ năm ngoái — xem “Báo cáo nâng cao của gói Pro hiển thị những gì?”"
      },
      {
        "type": "note",
        "text": "Các khoảng thời gian theo lịch này có từ phiên bản v2.4; các phiên bản cũ hơn dùng khoảng thời gian cuốn chiếu (Hôm nay / 7 ngày / 30 ngày / Toàn thời gian). Nếu bạn vẫn thấy các lựa chọn đó, hãy cập nhật DingPOS từ App Store."
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
    "question": "Báo cáo nâng cao của gói Pro hiển thị những gì?",
    "keywords": [
      "báo cáo nâng cao",
      "pro",
      "so sánh doanh số",
      "năm ngoái",
      "bản đồ nhiệt",
      "giờ đông khách",
      "hàng bán chậm",
      "giá trị tồn kho",
      "tỷ lệ mua lại",
      "điểm"
    ],
    "content": [
      {
        "type": "p",
        "text": "Báo cáo nâng cao không phải một màn hình riêng — chúng nằm ngay trong Thống kê và theo khoảng thời gian bạn chọn ở đầu màn hình:"
      },
      {
        "type": "list",
        "items": [
          "So sánh doanh số: ở bên phải thanh khoảng thời gian, so với cùng kỳ năm ngoái hoặc với khoảng liền trước (một ngày so với cùng ngày tuần trước, tuần này so với tuần trước, tháng này so với tháng trước, năm nay so với năm trước, khoảng tùy chỉnh so với số ngày tương ứng ngay trước đó). Ô Tiền đã thu hiển thị mức chênh lệch và tốc độ tăng trưởng, còn biểu đồ doanh thu thêm một đường nhạt hơn cho khoảng so sánh. Khi khoảng thời gian chưa kết thúc, khoảng so sánh được cắt ở đúng thời điểm tương ứng.",
          "Thứ × giờ: chuyển tiêu đề Doanh số theo thời gian sang Thứ × giờ để xem bản đồ nhiệt bảy ngày, 24 giờ — ô càng đậm thì bạn bán được càng nhiều. Bạn có thể chuyển giữa doanh thu và số đơn; khi bật so sánh, bạn thấy được giờ nào tăng và giờ nào giảm.",
          "Hàng bán chậm: chuyển tiêu đề của thẻ xếp hạng sang Hàng bán chậm để liệt kê sản phẩm từ bán ít nhất đến nhiều nhất, kèm tồn kho hiện tại và ngày bán gần nhất của từng sản phẩm. Sản phẩm chưa từng bán được đánh dấu Chưa từng bán. Mặc định chỉ hiển thị sản phẩm còn hàng.",
          "Tỷ lệ mua lại: dòng cuối của ô khách hàng là tỷ lệ thành viên đã mua trong khoảng thời gian đó và tổng cộng đã mua từ hai lần trở lên.",
          "Hiện tại: giá trị tồn kho (tồn kho hiện tại × giá vốn hiện tại), mọi biến động tồn kho trong khoảng thời gian đã chọn, và số điểm khách đang giữ nhưng chưa quy đổi, cùng mức giảm tối đa họ có thể dùng. Đây là số dư hiện tại; khoảng thời gian không làm chúng thay đổi."
        ]
      },
      {
        "type": "p",
        "text": "Khi chưa dùng Pro, mỗi vị trí trong năm vị trí này có một biểu tượng khóa nhỏ để mở phần giải thích về việc nâng cấp; mọi thứ khác trong Thống kê vẫn hoạt động như trước. Các báo cáo đọc dữ liệu mà cửa hàng của bạn vốn đã lưu, nên khi Pro kết thúc chỉ có báo cáo bị ẩn — không mất dữ liệu nào."
      },
      {
        "type": "note",
        "text": "Nhân viên xem được báo cáo nâng cao theo quyền Tổng quan; các số liệu giá trị tồn kho còn cần quyền Giá vốn và lợi nhuận."
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
    "question": "Báo cáo lợi nhuận thế nào nếu tôi không nhập giá vốn?",
    "keywords": [
      "giá vốn",
      "lợi nhuận",
      "biên lợi nhuận",
      "lợi nhuận gộp",
      "báo cáo",
      "chưa theo dõi lợi nhuận",
      "thiếu giá vốn",
      "tính được lợi nhuận"
    ],
    "content": [
      {
        "type": "p",
        "text": "Giá vốn là trường không bắt buộc. Sản phẩm không có giá vốn bị bỏ ra khỏi lợi nhuận, còn doanh thu của chúng vẫn được tính đầy đủ. Thẻ Tính được lợi nhuận trong Thống kê cho biết có bao nhiêu sản phẩm đã bán trong kỳ chưa có giá vốn; giá vốn bằng 0 vẫn được coi là có giá vốn nên các sản phẩm đó không nằm trong danh sách."
      },
      {
        "type": "p",
        "text": "Chạm vào thẻ hoặc Xem sản phẩm để mở Sản phẩm chưa có giá vốn, xếp theo doanh thu bị bỏ ra khỏi lợi nhuận. Chạm một dòng để mở sản phẩm, thêm giá vốn từ Sửa, và khi quay lại dòng đó sẽ được đánh dấu Đã thêm giá vốn. Sản phẩm có biến thể được coi là đã có giá vốn khi một biến thể hoặc chính sản phẩm có giá vốn."
      },
      {
        "type": "p",
        "text": "Lợi nhuận là doanh thu sau mọi khoản giảm giá (giảm giá theo sản phẩm và giỏ hàng, khuyến mãi, đổi điểm) và trước thuế, trừ giá vốn — vì vậy trường này ghi Giá vốn chưa thuế (không bắt buộc): hãy nhập số tiền bạn đã trả trước thuế. Biên lợi nhuận là lợi nhuận ÷ doanh thu trước thuế của các sản phẩm có giá vốn, nên sản phẩm chưa có giá vốn không kéo con số này xuống. Khi trả hàng, lợi nhuận mà các mặt hàng đó đã mang lại sẽ bị trừ lại vào ngày trả hàng."
      },
      {
        "type": "note",
        "text": "Giá vốn bạn thêm chỉ ảnh hưởng các đơn bán sau đó; các đơn đã bán không được tính lại. Cách tính này có từ v3.1: các phiên bản trước chỉ trừ giảm giá thủ công theo sản phẩm và tính cả thuế đã gồm trong giá vào lợi nhuận, nên sau khi cập nhật, các kỳ có giảm giá hoặc giá đã gồm thuế sẽ hiện lợi nhuận thấp hơn. Đó là điều chỉnh cho đúng, không phải mất dữ liệu."
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
    "question": "Cách tạo khuyến mãi trên DingPOS như thế nào?",
    "keywords": [
      "khuyến mãi",
      "ưu đãi",
      "mua 1 tặng 1",
      "giảm giá theo mức chi tiêu",
      "khung giờ vàng",
      "happy hour",
      "mã giảm giá",
      "coupon"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vào Cài đặt → Khuyến mãi. Các loại khuyến mãi được hỗ trợ gồm:"
      },
      {
        "type": "list",
        "items": [
          "Theo mức chi tiêu: chi tiêu X thì được giảm Y hoặc giảm Y%.",
          "Mua một tặng một và ưu đãi cho món thứ N.",
          "Nhân hệ số điểm thưởng.",
          "Ưu đãi chỉ dành cho một hạng thành viên hoặc cho tháng sinh nhật.",
          "Mua A tặng B, mua kèm có phụ thu và ưu đãi theo nhóm với giá cố định."
        ]
      },
      {
        "type": "p",
        "text": "Mỗi khuyến mãi có thể được đặt lịch (khung giờ vàng, các ngày cụ thể trong tuần, qua nửa đêm), giới hạn cho một số sản phẩm nhất định, và kiểm soát bằng độ ưu tiên, quy tắc cộng dồn và giới hạn lượt dùng. Khuyến mãi đủ điều kiện sẽ tự động áp dụng khi thanh toán — không cần mã giảm giá."
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
    "question": "Khuyến mãi không được áp dụng khi thanh toán, cần kiểm tra gì?",
    "keywords": [
      "khuyến mãi",
      "không hoạt động",
      "không áp dụng",
      "không được áp dụng",
      "khắc phục lỗi",
      "sửa lỗi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hãy kiểm tra lần lượt các nguyên nhân thường gặp nhất:"
      },
      {
        "type": "steps",
        "items": [
          "Lịch áp dụng: hôm nay có nằm trong thời gian khuyến mãi không? Khung giờ vàng có giới hạn ngày trong tuần hoặc giờ không?",
          "Phạm vi: các sản phẩm trong giỏ hàng có thuộc phạm vi sản phẩm hoặc danh mục của khuyến mãi không? Sản phẩm có đang bật Loại khỏi khuyến mãi không (sản phẩm giá tự đặt mặc định là có)? Đã đạt mức chi tiêu yêu cầu chưa?",
          "Đối tượng: khuyến mãi có giới hạn cho một hạng thành viên hoặc tháng sinh nhật không? Đã chọn thành viên đó khi thanh toán chưa?",
          "Giới hạn lượt dùng: đã chạm giới hạn tổng lượt dùng, hoặc giới hạn của khách hàng này chưa? Giới hạn mỗi khách của khuyến mãi tháng sinh nhật được tính theo năm dương lịch.",
          "Cộng dồn: có khuyến mãi độ ưu tiên cao hơn đang bật \"Dừng các khuyến mãi sau khi áp dụng khuyến mãi này\" và chặn khuyến mãi này không?"
        ]
      },
      {
        "type": "p",
        "text": "Nếu mọi thứ đều ổn mà khuyến mãi vẫn không áp dụng, hãy gửi email kèm ảnh chụp màn hình phần thiết lập của khuyến mãi, chúng tôi sẽ cùng bạn tìm nguyên nhân."
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
    "question": "Tích điểm khách hàng thân thiết hoạt động như thế nào?",
    "keywords": [
      "điểm",
      "tích điểm",
      "khách hàng thân thiết",
      "ưu đãi thành viên",
      "đổi điểm",
      "quà chào mừng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vào Cài đặt → Chương trình khách hàng thân thiết và thiết lập hai quy tắc: tích Y điểm cho mỗi X chi tiêu, và quy đổi N điểm để được giảm M (có thể đặt giới hạn quy đổi cho mỗi đơn hàng, không bắt buộc). Bạn cũng có thể tự động tặng điểm chào mừng cho thành viên mới."
      },
      {
        "type": "p",
        "text": "Chọn thành viên khi thanh toán để điểm được tự động tích lũy; khi muốn đổi điểm, hãy nhập số điểm cần dùng. Khi vô hiệu hóa một đơn hàng, số điểm đã tích từ đơn đó sẽ bị thu hồi và số điểm đã quy đổi sẽ được hoàn lại."
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
    "question": "Hạng thành viên dùng để làm gì?",
    "keywords": [
      "hạng thành viên",
      "vip",
      "vàng",
      "nâng hạng",
      "cấp độ thành viên"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hạng thành viên (ví dụ Thường, Bạc, Vàng) có hai công dụng: dùng làm đối tượng cho khuyến mãi (ví dụ giảm 10% chỉ dành cho hạng Vàng) và giúp bạn nhận biết hạng của khách ngay khi thanh toán."
      },
      {
        "type": "p",
        "text": "Hạng có thể tự động nâng theo quy tắc bạn đặt (ví dụ tổng chi tiêu tích lũy), hoặc được gán thủ công. Nếu đơn hàng bị vô hiệu hóa từng khiến khách được nâng hạng, hạng sẽ tự động được trả về như cũ."
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
    "question": "Làm thế nào để sao lưu dữ liệu cửa hàng?",
    "keywords": [
      "sao lưu",
      "backup",
      "icloud",
      "google drive",
      "dropbox",
      "đám mây",
      "bản chụp dữ liệu",
      "sao lưu dữ liệu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vào Cài đặt → Sao lưu đám mây, chọn một trong iCloud, Google Drive hoặc Dropbox rồi cấp quyền cho dịch vụ đó. Sau đó bạn có thể sao lưu thủ công bất cứ lúc nào. Với iCloud, chiếc iPad này phải đăng nhập iCloud, bật iCloud Drive và cho phép DingPOS sử dụng."
      },
      {
        "type": "p",
        "text": "Bản sao lưu được lưu vào tài khoản đám mây của chính bạn. Mỗi nơi lưu chỉ giữ bản mới nhất — một bản chụp dữ liệu và một tệp ảnh sản phẩm — và mỗi lần sao lưu sẽ ghi đè bản trước."
      },
      {
        "type": "note",
        "text": "Vì bản sao lưu mới thay thế bản cũ, nếu bạn nghi ngờ dữ liệu đã có vấn đề (ví dụ lỡ xóa nhầm hàng loạt sản phẩm), đừng sao lưu vội — hãy gửi email cho chúng tôi để cùng tìm cách xử lý tiếp theo."
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
    "question": "Sao lưu iCloud báo “Chưa kết nối” — phải làm sao?",
    "keywords": [
      "icloud",
      "chưa kết nối",
      "icloud drive",
      "sao lưu thất bại",
      "không kết nối được",
      "lỗi sao lưu icloud"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS chỉ hiển thị iCloud là đã kết nối khi thực sự dùng được. Khi báo Chưa kết nối, hãy kiểm tra ba điều trong ứng dụng Cài đặt của iPad:"
      },
      {
        "type": "steps",
        "items": [
          "Bạn đã đăng nhập Tài khoản Apple.",
          "iCloud Drive đã được bật.",
          "DingPOS được phép sử dụng iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Khi cả ba đã bật, hãy quay lại Sao lưu đám mây trong DingPOS và iCloud sẽ hiển thị Đã kết nối. Bản sao lưu được lưu trong thư mục riêng của DingPOS trên iCloud Drive."
      },
      {
        "type": "note",
        "text": "Ở các phiên bản trước v3.0, sao lưu iCloud không hoạt động và lần nào cũng thất bại với lỗi “Backup.SyncError error 0”. Hãy cập nhật DingPOS từ App Store trước."
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
    "question": "Làm sao chuyển dữ liệu sang iPad mới?",
    "keywords": [
      "chuyển dữ liệu",
      "iPad mới",
      "khôi phục",
      "chuyển sang iPad khác",
      "đổi iPad",
      "di chuyển dữ liệu"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "iPad cũ: vào Cài đặt → Sao lưu đám mây và sao lưu thủ công. Kiểm tra thời gian sao lưu đã được cập nhật.",
          "iPad mới: cài DingPOS và hoàn tất trình hướng dẫn thiết lập.",
          "iPad mới: vào Cài đặt → Sao lưu đám mây, kết nối cùng tài khoản đám mây rồi khôi phục."
        ]
      },
      {
        "type": "p",
        "text": "Khi chạm Khôi phục, trước tiên bạn sẽ thấy bản xem trước: số sản phẩm, đơn hàng và khách hàng của iPad này đặt cạnh bản chụp dữ liệu, cùng mọi đơn hàng sẽ bị xóa khi khôi phục. Không có gì trên iPad này thay đổi cho đến khi bạn xác nhận. Nếu bản chụp dữ liệu được tạo bởi phiên bản DingPOS mới hơn, bạn sẽ được yêu cầu cập nhật ứng dụng trước. Ảnh sản phẩm cũng được khôi phục."
      },
      {
        "type": "note",
        "text": "Khôi phục sẽ thay toàn bộ dữ liệu trên iPad này bằng bản sao lưu — các đơn hàng tạo trên iPad này sau thời điểm sao lưu đó sẽ mất. Hãy chắc chắn bạn đã kết nối đúng tài khoản đám mây; nếu lỡ khôi phục nhầm, hãy dùng Hoàn tác khôi phục."
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
    "question": "Xóa ứng dụng thì dữ liệu có còn không?",
    "keywords": [
      "xóa ứng dụng",
      "gỡ cài đặt",
      "mất dữ liệu",
      "gỡ ứng dụng",
      "cài lại"
    ],
    "content": [
      {
        "type": "p",
        "text": "Không. DingPOS lưu mọi thứ ngay trên thiết bị của bạn — xóa ứng dụng sẽ xóa vĩnh viễn toàn bộ sản phẩm, đơn hàng, khách hàng và cài đặt, trừ khi bạn đã bật sao lưu đám mây."
      },
      {
        "type": "note",
        "text": "Trước khi xóa ứng dụng, hãy luôn sao lưu thủ công và xác nhận đã sao lưu thành công. Sau khi cài lại, hãy khôi phục từ đám mây."
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
    "question": "Mở ứng dụng báo “Không thể mở dữ liệu cửa hàng của bạn” — phải làm sao?",
    "keywords": [
      "không thể mở",
      "không mở được",
      "ứng dụng bị crash",
      "tự thoát khi mở",
      "cơ sở dữ liệu",
      "dữ liệu cửa hàng",
      "lỗi khởi động"
    ],
    "content": [
      {
        "type": "p",
        "text": "Đừng xóa ứng dụng. Màn hình này nghĩa là DingPOS không đọc được dữ liệu cửa hàng của bạn, nhưng dữ liệu vẫn còn trên iPad này — xóa ứng dụng sẽ xóa luôn dữ liệu."
      },
      {
        "type": "p",
        "text": "Hãy chạm Thử lại trước; nếu được, ứng dụng sẽ mở như bình thường. Nếu lỗi cứ lặp lại, hãy chạm Liên hệ hỗ trợ và cho chúng tôi biết, chúng tôi sẽ giúp bạn lấy lại dữ liệu. Màn hình này không bao giờ di chuyển hay xóa bất kỳ tệp nào."
      },
      {
        "type": "note",
        "text": "Nguyên nhân phổ biến nhất là ứng dụng bị đóng giữa chừng khi đang khôi phục. Trước v3.0, điều này khiến ứng dụng crash mỗi lần mở; từ v3.0, ứng dụng sẽ dừng ở màn hình này."
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
    "question": "Có dùng hai iPad cùng lúc được không?",
    "keywords": [
      "hai iPad",
      "nhiều thiết bị",
      "đồng bộ",
      "chia sẻ dữ liệu",
      "quầy thứ hai",
      "dùng nhiều iPad"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hiện dữ liệu của mỗi iPad là độc lập — chưa hỗ trợ chia sẻ thời gian thực một bộ dữ liệu giữa hai thiết bị."
      },
      {
        "type": "p",
        "text": "Bạn có thể sao chép dữ liệu từ iPad này sang iPad khác qua sao lưu đám mây (sao lưu → khôi phục), rất phù hợp khi đổi thiết bị hoặc thiết lập sẵn cho iPad thứ hai. Tuy nhiên, các đơn hàng bán riêng trên từng thiết bị sẽ không tự động gộp lại. Đồng bộ nhiều thiết bị nằm trong kế hoạch phát triển của chúng tôi."
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
    "question": "Có nhập được sản phẩm và đơn hàng từ phần mềm bán hàng khác hoặc bảng tính không?",
    "keywords": [
      "nhập dữ liệu",
      "csv",
      "excel",
      "bảng tính",
      "chuyển từ phần mềm khác",
      "đổi phần mềm bán hàng",
      "nhập hàng loạt",
      "lịch sử bán hàng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có. Vào Cài đặt → Nhập dữ liệu, chọn nhập sản phẩm hay đơn hàng, rồi chọn tệp CSV (Excel và Google Sheets đều có thể lưu thành CSV)."
      },
      {
        "type": "steps",
        "items": [
          "Tệp được mở dưới dạng bảng. Các tên cột thông dụng bằng tiếng Anh và tiếng Trung (phồn thể hoặc giản thể) được ghép tự động; chạm vào tiêu đề cột bất kỳ để đổi cách ghép.",
          "Chạm vào ô bất kỳ để sửa giá trị ngay tại chỗ — không cần sửa tệp rồi làm lại từ đầu.",
          "Chạm Xác nhận để kiểm tra. Các dòng có vấn đề được đánh dấu đỏ kèm lý do; khi nhập đơn hàng, bạn có thể bỏ qua các đơn bị lỗi.",
          "Xử lý những mục cần bạn quyết định (tên sản phẩm trùng, một dòng khớp nhiều khách hàng), xem lại phần tóm tắt, rồi chạm Bắt đầu nhập."
        ]
      },
      {
        "type": "list",
        "items": [
          "Đơn hàng đã nhập được xếp theo ngày đặt hàng và tính lại theo tiền tệ và chế độ thuế của cửa hàng. Chúng không ảnh hưởng tồn kho và không tặng điểm chào mừng.",
          "Khách hàng được khớp với khách đã có theo số điện thoại hoặc email; ai chưa khớp sẽ được tạo mới.",
          "Đơn hàng đã nhập hiển thị nhãn “Đã nhập ngày” cùng số phiếu nguồn, và không thể vô hiệu hóa hay trả hàng.",
          "Các dòng bị lỗi có thể xuất thành tệp CSV kèm lý do — sửa rồi nhập lại. Các dòng trùng được tự động bỏ qua."
        ]
      },
      {
        "type": "note",
        "text": "Tính năng nhập dữ liệu đang ở bản beta. Mỗi tệp chứa tối đa 50.000 dòng hoặc 20 MB. Hãy sao lưu đám mây trước khi nhập; nếu có gì không nhập được hoặc kết quả có vẻ sai, hãy báo cho chúng tôi qua Báo cáo sự cố trên màn hình nhập dữ liệu."
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
    "question": "Tôi khôi phục nhầm bản sao lưu, có hoàn tác được không?",
    "keywords": [
      "hoàn tác khôi phục",
      "khôi phục nhầm",
      "khôi phục",
      "bản ghi khôi phục",
      "mất dữ liệu",
      "quay lại dữ liệu cũ"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có. Mỗi lần khôi phục từ đám mây đều giữ lại dữ liệu bị thay thế dưới dạng bản sao trước khi khôi phục. Trong Cài đặt → Sao lưu đám mây, một thẻ cho biết lần khôi phục gần nhất diễn ra khi nào và từ đâu. Chạm Hoàn tác khôi phục, xem bản xem trước rồi xác nhận — dữ liệu quay về như trước khi khôi phục và ứng dụng tải lại."
      },
      {
        "type": "list",
        "items": [
          "Hoàn tác khôi phục tự nó cũng là một lần khôi phục và giữ thêm một bản sao của dữ liệu bị thay thế, nên chạm lại lần nữa sẽ chuyển ngược trở lại.",
          "Chỉ giữ bản sao mới nhất; lần khôi phục kế tiếp sẽ thay thế nó.",
          "Chỉ dữ liệu được khôi phục: sản phẩm thêm sau bản chụp dữ liệu sẽ hiển thị thiếu ảnh."
        ]
      },
      {
        "type": "p",
        "text": "Để xem ai đã khôi phục, khi nào và từ bản chụp dữ liệu nào, chạm Xem bản ghi khôi phục trên cùng màn hình: mỗi lần khôi phục có thời gian, người thao tác, nguồn, số sản phẩm / đơn hàng / khách hàng trước và sau, cùng mọi đơn hàng đã bị xóa. Các bản ghi nằm trên iPad này và không bao giờ bị khôi phục thay thế."
      },
      {
        "type": "note",
        "text": "Bản xem trước khi khôi phục và Hoàn tác khôi phục dùng được ở mọi gói; xem bản ghi khôi phục là tính năng của gói Pro. Bản ghi vẫn được ghi cả khi không có Pro (chỉ thiếu người thao tác), nên khi đăng ký Pro sau này bạn sẽ thấy đầy đủ."
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
    "question": "Làm sao thêm nhân viên và đổi người thao tác tại quầy thu ngân?",
    "keywords": [
      "nhân viên",
      "quản lý",
      "tài khoản nhân viên",
      "mã PIN",
      "người thao tác",
      "đổi ca",
      "thu ngân",
      "thêm nhân viên"
    ],
    "content": [
      {
        "type": "p",
        "text": "Chạm vào Nhân viên ở thanh bên. Lần đầu, hãy thiết lập tài khoản chủ cửa hàng bằng cách nhập tên và mã PIN 4 chữ số. Thêm nhân viên và đổi quyền đều cần mã PIN này, nên hãy nhớ kỹ — mã không thể đặt lại."
      },
      {
        "type": "steps",
        "items": [
          "Trong trang Nhân viên, chạm Thêm nhân viên, nhập tên, chọn vai trò (Quản lý hoặc Nhân viên) và đặt mã PIN 4 chữ số.",
          "Người thao tác hiện tại hiển thị ở cuối thanh bên và góc trên bên phải màn hình thanh toán. Khi đổi ca, chạm vào đó, chọn tên của bạn và nhập mã PIN.",
          "Từ đó, mọi đơn hàng, khoản thanh toán và lần thay đổi tồn kho hoặc điểm đều ghi lại ai đã xử lý, xem được trong danh sách và chi tiết đơn hàng; đơn bị vô hiệu hóa cũng ghi lại ai đã vô hiệu hóa."
        ]
      },
      {
        "type": "p",
        "text": "Khi có người nghỉ việc, hãy dùng Vô hiệu hóa nhân viên này: lịch sử của họ vẫn được giữ nguyên và bạn có thể kích hoạt lại sau. Đổi tên không ảnh hưởng đến các đơn cũ — đơn cũ giữ tên tại thời điểm đó."
      },
      {
        "type": "note",
        "text": "Nhân viên là tính năng của gói Pro (cũng dùng được trong thời gian dùng thử). Nếu Pro kết thúc, dữ liệu nhân viên và người xử lý của mỗi đơn hàng vẫn được giữ, còn đơn mới sẽ ghi dưới tên chủ cửa hàng; đăng ký lại Pro sẽ khôi phục tất cả."
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
    "question": "Quên mã PIN chủ cửa hàng thì phải làm sao?",
    "keywords": [
      "mã PIN",
      "quên PIN",
      "quên mật khẩu",
      "đặt lại PIN",
      "chủ cửa hàng",
      "khôi phục PIN",
      "bị khóa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mã PIN chủ cửa hàng không thể đặt lại, và đội hỗ trợ của chúng tôi cũng không có cách nào mở khóa. Mã PIN được lưu cùng dữ liệu cửa hàng, nên xóa rồi cài lại ứng dụng, sau đó khôi phục từ đám mây sẽ lấy lại đúng mã PIN cũ."
      },
      {
        "type": "p",
        "text": "Khi tạo chủ cửa hàng và mỗi lần đổi mã PIN chủ cửa hàng đều hiện cảnh báo “Hãy nhớ mã PIN này. Nếu quên, mã không thể đặt lại.” Hãy cất giữ ở nơi chỉ mình bạn lấy được."
      },
      {
        "type": "p",
        "text": "Không có mã PIN chủ cửa hàng, mọi thao tác cần đến mã này sẽ không dùng được — thêm hoặc sửa nhân viên, đổi quyền theo vai trò và xem Nhật ký hoạt động. Nhân viên vẫn có thể tiếp tục bán hàng và làm việc hằng ngày bằng mã PIN của riêng họ."
      },
      {
        "type": "note",
        "text": "Nếu nhân viên quên mã PIN của mình thì không sao: chủ cửa hàng có thể đặt lại trong Nhân viên."
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
    "question": "Phân quyền nhân viên và phê duyệt của quản lý hoạt động thế nào?",
    "keywords": [
      "phân quyền",
      "quyền nhân viên",
      "phê duyệt",
      "quản lý",
      "mức giảm giá tối đa",
      "nhân viên",
      "giá vốn",
      "vai trò"
    ],
    "content": [
      {
        "type": "p",
        "text": "Mỗi quyền có hai giá trị: Được phép hoặc Cần phê duyệt — không có gì bị cấm hẳn. Khi nhân viên gặp thao tác cần phê duyệt, một đồng nghiệp được phép thực hiện thao tác đó sẽ chọn tên mình và nhập mã PIN để cho qua."
      },
      {
        "type": "list",
        "items": [
          "Thao tác (điều chỉnh tồn kho thủ công, quản lý sản phẩm, thanh toán vượt mức giảm giá tối đa): một lần phê duyệt chỉ áp dụng cho đúng thao tác đó.",
          "Màn hình xem (giá vốn & lợi nhuận, Thống kê, Cài đặt, sao lưu & khôi phục): phê duyệt mở khóa cho đến khi người thao tác thay đổi hoặc ứng dụng chuyển xuống nền.",
          "Mức giảm giá tối đa áp dụng cho giảm giá thủ công và chỉ được kiểm tra một lần khi thanh toán; khuyến mãi tự động và đổi điểm không tính vào mức này."
        ]
      },
      {
        "type": "p",
        "text": "Mặc định ban đầu: Quản lý được phép mọi thứ trừ sao lưu & khôi phục, không giới hạn mức giảm giá; Nhân viên cần phê duyệt cho mọi thứ, với mức giảm giá tối đa 10%. Chủ cửa hàng luôn được phép và không thể chỉnh sửa. Để thay đổi, vào Nhân viên → Quyền theo vai trò, chạm Sửa rồi lưu một lần — thay đổi áp dụng cho mọi người ngay lập tức."
      },
      {
        "type": "note",
        "text": "Vô hiệu hóa đơn, trả hàng, bán chịu và nhập hàng được cố ý không gán quyền; hệ thống chỉ ghi lại ai đã xử lý. Để xem lại sau này, hãy dùng Nhật ký hoạt động."
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
    "question": "Làm sao xem ai đã vô hiệu hóa đơn, điều chỉnh tồn kho hoặc đổi giá?",
    "keywords": [
      "nhật ký hoạt động",
      "kiểm tra",
      "ai đã thay đổi",
      "vô hiệu hóa đơn",
      "đổi giá",
      "điều chỉnh tồn kho",
      "sản phẩm đã xóa",
      "phê duyệt",
      "nhật ký"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hãy dùng Nhật ký hoạt động. Trong trang Nhân viên, chạm Nhật ký hoạt động ở góc trên bên phải và nhập mã PIN chủ cửa hàng để xem các thao tác nhạy cảm của cửa hàng, mới nhất ở trên: vô hiệu hóa đơn, trả hàng, điều chỉnh tồn kho thủ công, phê duyệt, thay đổi nhân viên và quyền, đổi mã PIN chủ cửa hàng, đổi giá bán và giá vốn sản phẩm, và xóa sản phẩm. Các lần thanh toán thông thường không được liệt kê."
      },
      {
        "type": "list",
        "items": [
          "Mỗi mục cho biết đối tượng bị tác động, ai làm gì và lúc nào, cùng kết quả — ví dụ “Giá M $390 → $350”.",
          "Lọc theo nhân viên (kể cả người đã bị vô hiệu hóa), loại thao tác và Hôm nay / Tuần này / Tháng này.",
          "Chạm vào mục có liên kết đến đơn hàng, sản phẩm hoặc khách hàng để mở chi tiết.",
          "Trang chi tiết đơn hàng, chi tiết sản phẩm và trang của từng nhân viên đều có mục riêng, chỉ liệt kê các bản ghi liên quan đến họ.",
          "Sản phẩm đã xóa vẫn hiển thị tên và giá tại thời điểm đó trong nhật ký."
        ]
      },
      {
        "type": "note",
        "text": "Mọi gói đều ghi nhật ký; chỉ việc xem là tính năng của gói Pro, nên các bản ghi trong lúc Pro hết hạn sẽ hiện ra khi bạn đăng ký lại. Nhật ký được sao lưu cùng bản sao lưu đám mây."
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
    "question": "Dùng thử miễn phí DingPOS hoạt động thế nào?",
    "keywords": [
      "dùng thử",
      "miễn phí",
      "30 ngày",
      "dùng thử miễn phí"
    ],
    "content": [
      {
        "type": "p",
        "text": "Bạn được dùng thử 30 ngày toàn bộ tính năng của gói Pro ngay từ lần cài đặt đầu tiên, gồm tài khoản nhân viên, phân quyền, nhật ký hoạt động và báo cáo nâng cao — không cần tạo tài khoản."
      },
      {
        "type": "p",
        "text": "Nếu đăng ký bất kỳ gói nào trong thời gian dùng thử, thời gian dùng thử sẽ kết thúc ngay và gói bạn đã mua được áp dụng từ lúc đó. Sau khi hết dùng thử, các tính năng Pro như nhân viên và báo cáo nâng cao chỉ còn dùng được khi bạn đăng ký gói Pro."
      },
      {
        "type": "p",
        "text": "Trong 7 ngày cuối và vào ngày cuối cùng, ứng dụng nhắc bạn mỗi điều một lần: còn bao nhiêu ngày, thanh toán sẽ tạm dừng khi hết dùng thử, và dữ liệu của bạn vẫn được giữ."
      },
      {
        "type": "p",
        "text": "Mọi thứ bạn tạo trong thời gian dùng thử (sản phẩm, đơn hàng, thành viên) đều được giữ nguyên vẹn. Dữ liệu của bạn không bao giờ bị xóa, dù sau đó bạn có đăng ký hay không."
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
    "question": "Hết dùng thử thì dữ liệu của tôi có mất không?",
    "keywords": [
      "hết hạn",
      "hết dùng thử",
      "bị khóa",
      "dữ liệu",
      "mất dữ liệu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Không — dữ liệu luôn nằm trên thiết bị của bạn. Khi hết dùng thử, chức năng thanh toán sẽ bị khóa, nhưng bạn vẫn xem được đơn hàng, xem báo cáo và quản lý sản phẩm."
      },
      {
        "type": "p",
        "text": "Chỉ cần đăng ký bất cứ lúc nào, chức năng thanh toán sẽ được mở khóa ngay và toàn bộ dữ liệu vẫn nguyên vẹn như trước."
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
    "question": "Gói Lite, Standard và Pro khác nhau thế nào?",
    "keywords": [
      "gói",
      "lite",
      "standard",
      "pro",
      "khác nhau",
      "so sánh",
      "nâng cấp",
      "hạ cấp",
      "bảng giá",
      "giá"
    ],
    "content": [
      {
        "type": "p",
        "text": "Cả ba gói đều có đầy đủ thanh toán, sản phẩm, đơn hàng (gồm vô hiệu hóa, trả hàng và đổi hàng), báo cáo và sao lưu đám mây. Điểm khác nhau nằm ở công cụ để vận hành cửa hàng:"
      },
      {
        "type": "list",
        "items": [
          "Lite: dành cho một người bán ở quầy hàng, chỉ cần thanh toán và sản phẩm.",
          "Standard: thêm khuyến mãi, điểm tích lũy và hạng thành viên, theo dõi tồn kho, nhập hàng, bán chịu, đơn đặt trước và ước tính phí thanh toán.",
          "Pro: thêm tài khoản nhân viên và phân quyền, phê duyệt của quản lý, nhật ký hoạt động, bản ghi khôi phục và báo cáo nâng cao — dành cho cửa hàng có nhân viên."
        ]
      },
      {
        "type": "p",
        "text": "Đang dùng Standard? Bạn có thể nâng cấp lên Pro ngay trong trang đăng ký: chu kỳ thanh toán giữ nguyên, việc nâng cấp có hiệu lực ngay và Apple sẽ tính phần chênh lệch theo tỷ lệ thời gian sử dụng. Chuyển từ Pro về Standard sẽ có hiệu lực khi gia hạn. Giá được hiển thị trong ứng dụng, và bạn có thể so sánh các gói tại trang Bảng giá của chúng tôi."
      },
      {
        "type": "note",
        "text": "Hạ cấp không bao giờ xóa dữ liệu. Các tính năng vượt quá gói của bạn sẽ tạm dừng, dữ liệu vẫn còn, và khi đăng ký lại các tính năng đó sẽ hoạt động trở lại."
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
    "question": "Làm sao để đăng ký, hủy gói hoặc khôi phục giao dịch mua?",
    "keywords": [
      "đăng ký",
      "hủy gói",
      "hủy đăng ký",
      "khôi phục giao dịch mua",
      "giá",
      "thanh toán"
    ],
    "content": [
      {
        "type": "p",
        "text": "Gói đăng ký được xử lý qua giao dịch mua trong ứng dụng của App Store — các gói và giá được hiển thị trong ứng dụng. Apple xử lý khoản thanh toán; chúng tôi không bao giờ thấy thông tin thanh toán của bạn."
      },
      {
        "type": "list",
        "items": [
          "Hủy gói: quản lý trong Cài đặt → Tài khoản Apple → Đăng ký trên thiết bị của bạn. Hãy hủy ít nhất 24 giờ trước khi kỳ hiện tại kết thúc để không bị gia hạn.",
          "Khôi phục: sau khi đổi thiết bị hoặc cài lại ứng dụng, hãy chạm \"Khôi phục giao dịch mua\" trong trang Đăng ký của DingPOS.",
          "Đổi gói: chọn gói mới trong trang Đăng ký của DingPOS. Nâng cấp (Standard lên Pro, hằng tháng sang hằng năm) có hiệu lực ngay, Apple tính phần chênh lệch theo tỷ lệ; hạ cấp có hiệu lực khi gia hạn."
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
    "question": "Cách cài khuyến mãi giảm giá khi mua đủ tiền",
    "keywords": [
      "giảm giá khi mua đủ tiền",
      "ngưỡng chi tiêu",
      "mua từ bao nhiêu được giảm",
      "hướng dẫn",
      "thiết lập khuyến mãi"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vào Cài đặt → Khuyến mãi → Khuyến mãi mới, chọn loại giảm giá theo ngưỡng chi tiêu, rồi:"
      },
      {
        "type": "steps",
        "items": [
          "Đặt số tiền ngưỡng và mức giảm (số tiền cố định hoặc phần trăm).",
          "Chọn phạm vi áp dụng: sản phẩm cụ thể, danh mục cụ thể, hoặc để trống để áp dụng cho toàn cửa hàng.",
          "Đặt lịch áp dụng: bắt buộc có ngày bắt đầu; để trống ngày kết thúc nếu khuyến mãi chạy liên tục.",
          "Lưu — khuyến mãi sẽ tự kích hoạt theo lịch và tự áp dụng khi thanh toán, không cần nhập mã."
        ]
      },
      {
        "type": "note",
        "text": "Ngưỡng được kiểm tra trên tạm tính của các món thuộc phạm vi áp dụng, không phải cả giỏ hàng. Khuyến mãi “mua 1.000.000₫ đồ uống” chỉ tính đồ uống vào ngưỡng, còn sản phẩm đã bật “Loại khỏi khuyến mãi” thì không bao giờ được tính."
      },
      {
        "type": "p",
        "text": "Một điểm khách hay hỏi: nếu có khuyến mãi ưu tiên cao hơn được áp dụng trước, ngưỡng sẽ được kiểm tra trên số tiền đã giảm — nên giỏ hàng trông như đã vượt ngưỡng vẫn có thể hụt một chút. Muốn ngưỡng được xét trước, hãy đặt Độ ưu tiên của nó là số nhỏ hơn."
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
    "question": "Cách cài khuyến mãi mua 1 tặng 1 và món thứ N được giảm",
    "keywords": [
      "mua 1 tặng 1",
      "mua X nhận Y",
      "món thứ 3 miễn phí",
      "bogo",
      "hướng dẫn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tạo khuyến mãi loại Mua X / Nhận Y: đặt số lượng mua, số lượng nhận và phần trăm giảm (100% = miễn phí). Áp dụng cho sản phẩm cụ thể hoặc cả danh mục — các sản phẩm khác nhau trong cùng danh mục được gom chung một nhóm."
      },
      {
        "type": "list",
        "items": [
          "Món được giảm là món rẻ nhất trong nhóm, tính theo giá hiệu lực hiện tại — nếu một khuyến mãi trước đó đã giảm món này, mức giảm của Mua X / Nhận Y được tính trên giá đã giảm, không phải giá niêm yết.",
          "Nếu bạn muốn nhãn “món thứ 3 miễn phí” hiển thị đủ giá niêm yết, hãy đặt Độ ưu tiên của khuyến mãi này là số nhỏ nhất để nó được tính trước. Khi giảm giá cả giỏ hàng chạy trước, khoản giảm hiển thị của món được tặng sẽ nhỏ hơn giá niêm yết — đây là đặc tính của thứ tự tính toán mà chúng tôi đã kiểm chứng kỹ, không phải lỗi. Hai thứ tự cho tổng tiền gần như nhau; chỉ khác ở chỗ khoản giảm hiện ra ở đâu."
        ]
      },
      {
        "type": "p",
        "text": "Mẹo: đặt ưu đãi chủ lực của bạn ở đầu thứ tự ưu tiên để phần chi tiết giảm giá trên hóa đơn khớp với thông điệp quảng cáo."
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
    "question": "Cách cài khuyến mãi nhân điểm thưởng",
    "keywords": [
      "nhân điểm",
      "nhân đôi điểm",
      "tích điểm gấp đôi",
      "hướng dẫn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tạo khuyến mãi loại Nhân điểm và đặt hệ số nhân (số nguyên từ 2 trở lên). Bạn có thể thêm ngưỡng chi tiêu (ví dụ: mua từ 500.000₫ được nhân đôi điểm) và lịch áp dụng (ví dụ: chỉ thứ Bảy)."
      },
      {
        "type": "list",
        "items": [
          "Khi có nhiều hệ số nhân cùng đủ điều kiện, chỉ hệ số cao nhất được áp dụng — chúng không bao giờ nhân chồng hay cộng dồn.",
          "Ngưỡng chi tiêu được kiểm tra sau khi đổi điểm: nếu việc đổi điểm kéo tổng tiền xuống dưới ngưỡng, hệ số nhân sẽ không kích hoạt lần này.",
          "Phải chọn thành viên khi thanh toán thì mới tích được điểm — đơn không có thành viên không nhận điểm, nên hệ số nhân không có gì để nhân."
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
    "question": "Cách cài ưu đãi theo hạng thành viên và sinh nhật",
    "keywords": [
      "hạng thành viên",
      "ưu đãi sinh nhật",
      "khách VIP",
      "khuyến mãi tháng sinh nhật",
      "hướng dẫn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Trước tiên hãy tạo các hạng trong Cài đặt → Hạng thành viên (ví dụ: Vàng), rồi nhắm khuyến mãi vào hạng đó. Với ưu đãi sinh nhật, đặt đối tượng là Tháng sinh nhật và điền Giới hạn mỗi khách hàng."
      },
      {
        "type": "list",
        "items": [
          "Phải chọn thành viên khi thanh toán thì ưu đãi mới được kích hoạt — điều kiện được xét theo thành viên đang được chọn.",
          "Ưu đãi sinh nhật dựa vào tháng sinh nhật của thành viên, nên hãy điền ngày sinh; thành viên chưa có ngày sinh sẽ không bao giờ được coi là khách sinh nhật.",
          "Khuyến mãi tháng sinh nhật cần có giới hạn mỗi khách hàng, tính theo năm dương lịch: giới hạn 1 nghĩa là mỗi khách dùng được một lần mỗi năm và sẽ đặt lại vào năm sau. Không có giới hạn này thì không thể lưu.",
          "Việc nâng hạng tự động được xét khi hoàn tất thanh toán; nếu đơn bị vô hiệu hóa, lần nâng hạng do đơn đó gây ra sẽ tự động được hoàn lại."
        ]
      },
      {
        "type": "note",
        "text": "Trước v3.2, khuyến mãi tháng sinh nhật hiện lỗi và không thể lưu dù đã điền giới hạn mỗi khách hàng. Nếu bạn gặp tình huống này, hãy cập nhật DingPOS từ App Store."
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
    "question": "Cách cài quà tặng, mua kèm giá ưu đãi và ưu đãi theo nhóm",
    "keywords": [
      "quà tặng kèm",
      "mua kèm giá ưu đãi",
      "ưu đãi theo nhóm",
      "mua A tặng B",
      "N món bất kỳ giá X",
      "hướng dẫn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Có ba loại ưu đãi kết hợp: tặng quà khi mua (mua A tặng B), mua kèm giá ưu đãi (thêm X₫ để nhận Y) và ưu đãi theo nhóm (N món bất kỳ giá X₫). Quà tặng và mua kèm chờ thu ngân xác nhận; ưu đãi theo nhóm được áp dụng tự động."
      },
      {
        "type": "p",
        "text": "Quà tặng và mua kèm không bao giờ tự thay đổi giỏ hàng. Khi đủ điều kiện, một biểu ngữ gợi ý hiện trên màn hình thu ngân, và giỏ hàng chỉ thay đổi khi thu ngân nhấn Chấp nhận — cố ý như vậy vì quà tặng liên quan đến hàng thật trong kho: cần có người xác nhận còn hàng và khách có muốn nhận."
      },
      {
        "type": "list",
        "items": [
          "Sau khi nhấn Từ chối, gợi ý đó sẽ không hiện lại cho giỏ hàng này; giỏ hàng mới hoặc giỏ đã xóa sẽ gợi ý lại.",
          "Nếu có gợi ý mới xuất hiện trước khi xác nhận thanh toán, bạn phải Chấp nhận hoặc Từ chối thì mới gửi được đơn.",
          "Dòng quà tặng và mua kèm không thể bị các khuyến mãi giảm tiền khác giảm thêm, và không được tính vào ngưỡng của các khuyến mãi khác."
        ]
      },
      {
        "type": "p",
        "text": "Ưu đãi theo nhóm (tự động áp dụng từ v2.4): bất cứ khi nào giỏ hàng có thể lập thành một nhóm, DingPOS sẽ gom nhóm và tính vào tổng tiền — không hỏi lại, và không thể tách nhóm."
      },
      {
        "type": "list",
        "items": [
          "Nhóm chỉ được lập khi giúp giỏ hàng rẻ hơn. Giữa các món cùng giá, món chưa giảm được gom trước, còn món đã được giảm vẫn giữ mức giảm của nó.",
          "Món nào được gom chung chỉ phụ thuộc vào những gì có trong giỏ hàng, không phụ thuộc thứ tự quét.",
          "Mỗi món trong nhóm hiển thị phần khoản giảm của nhóm mà nó được chia, và số tiền của mỗi dòng là số sau giảm.",
          "Khi thanh toán, các nhóm được gom lại theo giá mới nhất; nếu kết quả thay đổi, bạn sẽ được yêu cầu xác nhận tổng tiền mới."
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
    "question": "Cách cài lịch khuyến mãi và khung giờ vàng",
    "keywords": [
      "lịch khuyến mãi",
      "khung giờ vàng",
      "happy hour",
      "ngày trong tuần",
      "qua nửa đêm",
      "hướng dẫn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Lịch áp dụng của mỗi khuyến mãi có ba lớp: khoảng ngày (bắt buộc có ngày bắt đầu, ngày kết thúc tùy chọn), khung giờ hằng ngày (khung giờ vàng) và các ngày trong tuần được chọn. Cả ba phải khớp thì khuyến mãi mới kích hoạt."
      },
      {
        "type": "list",
        "items": [
          "Với khung giờ qua nửa đêm (ví dụ 22:00–02:00), ngày trong tuần được xác định theo ngày khung giờ bắt đầu: nếu chỉ chọn thứ Sáu, 01:30 sáng thứ Bảy vẫn tính là ca của thứ Sáu và khuyến mãi vẫn chạy — nhưng 23:30 tối thứ Bảy thì không.",
          "Ngày kết thúc là mốc cắt cứng — dù khung giờ vàng vẫn đang chạy, khuyến mãi dừng ngay khi qua ngày kết thúc.",
          "Thời gian được đọc từ đồng hồ của iPad, nên hãy chắc chắn múi giờ và giờ của thiết bị là chính xác."
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
    "question": "Độ ưu tiên, cộng dồn và dừng sau khi áp dụng: giải thích",
    "keywords": [
      "độ ưu tiên",
      "cộng dồn khuyến mãi",
      "dừng các khuyến mãi sau",
      "khuyến mãi xung đột",
      "hướng dẫn"
    ],
    "content": [
      {
        "type": "p",
        "text": "Khi nhiều khuyến mãi cùng đủ điều kiện, ba thiết lập quyết định thứ tự và cách chúng tác động lẫn nhau:"
      },
      {
        "type": "list",
        "items": [
          "Độ ưu tiên: số nhỏ hơn được tính trước. Kéo thả để sắp xếp lại trong danh sách khuyến mãi.",
          "Cộng dồn (mặc định bật): khi tắt, khuyến mãi theo món chỉ khóa những dòng nó đã giảm — các món khác vẫn có thể nhận khuyến mãi theo món chạy sau; khuyến mãi cấp giỏ hàng không cộng dồn sẽ chặn mọi khuyến mãi cấp giỏ hàng chạy sau.",
          "Dừng sau khi áp dụng: khi khuyến mãi này đã áp dụng, không tính thêm khoản giảm tiền nào nữa — nhưng nhân điểm và gợi ý quà tặng không bị ảnh hưởng."
        ]
      },
      {
        "type": "note",
        "text": "Các khuyến mãi chạy sau được tính trên số tiền đã giảm: giảm 10% rồi giảm 5% không phải là giảm 15% — khoản giảm thứ hai áp dụng trên tổng sau khi giảm lần đầu. DingPOS cũng không bao giờ tìm tổ hợp có lợi nhất cho khách; thứ tự hoàn toàn do độ ưu tiên bạn đặt quyết định."
      },
      {
        "type": "p",
        "text": "Thú vị: nếu một khoản giảm làm tròn về 0, lần áp dụng đó không được tính — và không trừ vào giới hạn lượt dùng."
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
    "question": "DingPOS có tích hợp thanh toán thẻ, ví điện tử không?",
    "keywords": [
      "thanh toán",
      "quẹt thẻ",
      "tích hợp thanh toán",
      "cổng thanh toán",
      "máy POS thẻ"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hiện tại DingPOS không can thiệp vào dòng tiền — các phương thức thanh toán chỉ là nhãn để ghi sổ, còn việc thu tiền thực tế vẫn qua máy quẹt thẻ hoặc ứng dụng thanh toán bạn đang dùng."
      },
      {
        "type": "p",
        "text": "Việc có tích hợp thanh toán hay không phụ thuộc vào nhu cầu thực tế của người dùng. Nếu bạn cần, hãy viết cho chúng tôi kèm dịch vụ bạn muốn kết nối (nhà cung cấp nào, máy nào) và trường hợp sử dụng — chúng tôi ưu tiên phát triển theo số lượng yêu cầu."
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
    "question": "DingPOS có hỗ trợ hóa đơn điện tử hoặc in hóa đơn không?",
    "keywords": [
      "hóa đơn điện tử",
      "hóa đơn",
      "in hóa đơn",
      "máy in hóa đơn",
      "máy in bill"
    ],
    "content": [
      {
        "type": "p",
        "text": "Chưa có. Hỗ trợ hóa đơn điện tử và in hóa đơn đòi hỏi phải mua thiết bị lập hóa đơn / máy in hóa đơn để thử nghiệm và phát triển — một khoản chi phí đáng kể. Là một đội ngũ nhỏ, chúng tôi sẽ lên kế hoạch khi lượng người dùng tăng và doanh thu ổn định."
      },
      {
        "type": "p",
        "text": "Nếu bạn cần tính năng này, hãy liên hệ với chúng tôi và cho biết model máy bạn đang dùng — chúng tôi ưu tiên phát triển dựa trên số lượng yêu cầu."
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
    "question": "DingPOS có hỗ trợ máy quét mã vạch không?",
    "keywords": [
      "máy quét mã vạch",
      "súng quét mã vạch",
      "bluetooth",
      "usb",
      "thiết bị phần cứng"
    ],
    "content": [
      {
        "type": "p",
        "text": "Quét mã vạch bằng camera để tạo sản phẩm đã được hỗ trợ. Máy quét vật lý (USB / Bluetooth) thì chưa được hỗ trợ chính thức — giống các tính năng phần cứng khác, cần mua thiết bị để thử nghiệm và phát triển, và sẽ được lên kế hoạch khi lượng người dùng tăng."
      },
      {
        "type": "note",
        "text": "Ô tìm kiếm khi thanh toán có so khớp mã vạch, nên về lý thuyết máy quét ở chế độ bàn phím có thể nhập mã vào đó để gọi sản phẩm ra — nhưng chúng tôi chưa kiểm chứng trên thiết bị thật nên chưa hỗ trợ chính thức. Nếu bạn đã thử và có máy quét dùng được, hãy cho chúng tôi biết model!"
      },
      {
        "type": "p",
        "text": "Nếu bạn cần tính năng này, hãy viết cho chúng tôi — chúng tôi ưu tiên phát triển theo số lượng yêu cầu."
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
    "question": "DingPOS có báo cáo đối soát cuối tháng không?",
    "keywords": [
      "đối soát cuối tháng",
      "chốt sổ",
      "báo cáo tháng",
      "công nợ phải trả",
      "công nợ phải thu",
      "đối chiếu"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hiện chưa có báo cáo đối soát cuối tháng riêng, nhưng mọi thứ bạn cần để đối chiếu đều đã có sẵn trong ứng dụng:"
      },
      {
        "type": "list",
        "items": [
          "Đặt Thống kê sang Tháng này để xem doanh thu, tiền đã thu, lợi nhuận và cơ cấu thanh toán của tháng.",
          "Hàng nhập từ nhà cung cấp theo kỳ hạn tháng được gom trong Hóa đơn còn nợ ở Nhập hàng, nơi bạn có thể tất toán cả tháng một lần.",
          "Hàng bán chịu cho khách được gom trong Đơn hàng → Công nợ, nơi bạn có thể tất toán cả tháng một lần."
        ]
      },
      {
        "type": "p",
        "text": "Nếu bạn cần báo cáo đối soát cuối tháng để xuất hoặc in, hãy viết cho chúng tôi kèm các trường dữ liệu bạn cần — chúng tôi ưu tiên phát triển theo số lượng yêu cầu."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
