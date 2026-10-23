// Generated from zh-Hant by scripts/gen-zh-hans.mjs. Do not edit: change the zh-Hant source or the script, then run `npm run zh-hans`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "快速上手",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "收银结账",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "订单与退换货",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "商品、库存与进货",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "报表",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "促销与会员",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "备份与数据",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "员工与权限",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "订阅与费用",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "促销设置教学",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "未来功能",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "如何开始使用 DingPOS 开店？",
    "keywords": [
      "开店",
      "教学",
      "新手",
      "设置",
      "入门",
      "第一次",
      "国家",
      "币种",
      "onboarding"
    ],
    "content": [
      {
        "type": "p",
        "text": "第一次打开 DingPOS 会进入开店向导，只有两步，几分钟就能完成："
      },
      {
        "type": "steps",
        "items": [
          "选择国家或地区：列表最上方是这台 iPad 所在的地区与常用市场，下方是 App Store 上架的全部 175 个国家或地区，也可以用 App 语言或英文名称搜索。选好后会自动带入币种、税率与税制。",
          "在“你的店铺”填店名，可以加上商店 logo，并确认币种、税率与税制（内含税／外加税）。币种默认是所选国家的货币，点一下可以从 130 种货币中改选。"
        ]
      },
      {
        "type": "p",
        "text": "按下继续就会看到“叮！你的店铺准备好了。”，App 也会建好“现金”“信用卡”两种付款方式。接着到“商品”创建商品，就可以开始结账收钱。"
      },
      {
        "type": "note",
        "text": "币种与税制开店后就无法更改，税率之后还能在“设置”修改。美国、加拿大、巴西与密克罗尼西亚的税率依州、省或城市而定，税率栏会留空，要填入你收的税率（可以是 0）才能继续。175 个国家与改选币种是 v3.2 起的设计，更早的版本只能从 15 个国家中选。"
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
    "question": "没有网络可以使用吗？",
    "keywords": [
      "离线",
      "网络",
      "断网",
      "wifi",
      "夜市",
      "市集",
      "offline"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。DingPOS 是离线优先设计——结账、商品管理、库存、报表全部在 iPad 本地运作，完全不需要网络。夜市、快闪市集这类没有 WiFi 的场景都能正常收银。"
      },
      {
        "type": "p",
        "text": "只有两件事需要网络：云端备份（上传到你自己的 iCloud／Google Drive／Dropbox），以及订阅状态的验证。"
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
    "question": "需要注册账号吗？",
    "keywords": [
      "账号",
      "注册",
      "登录",
      "隐私",
      "免账号",
      "account"
    ],
    "content": [
      {
        "type": "p",
        "text": "不需要。DingPOS 没有账号系统——下载打开就能用。你的商品、订单与会员数据全部保存在你的 iPad 上，不会上传到我们的服务器。"
      },
      {
        "type": "p",
        "text": "启用云端备份时，登录的是你自己的云端账号（iCloud、Google Drive 或 Dropbox），备份文件存在你的账号里，我们无法访问。"
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
    "question": "支持哪些设备？",
    "keywords": [
      "设备",
      "iphone",
      "mac",
      "ipad",
      "系统要求",
      "版本"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS 目前支持 iPadOS 17 以上的 iPad，以横屏使用为主要设计。"
      },
      {
        "type": "p",
        "text": "iPhone 与 Mac 目前不支持。如果你希望我们支持其他设备，欢迎写信告诉我们你的使用场景。"
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "开店后可以更改币种或税制吗？",
    "keywords": [
      "币种",
      "货币",
      "税制",
      "税率",
      "更改",
      "修改",
      "锁定"
    ],
    "content": [
      {
        "type": "p",
        "text": "税率随时可以在“设置”中修改，新税率只会套用到之后的订单。"
      },
      {
        "type": "p",
        "text": "币种与税制（内含税／外加税）在开店设置完成后即锁定，无法更改——因为所有历史订单的金额都是以它们计算的，中途变更会让报表失真。所以开店时请在“你的店铺”这一步确认：币种默认是所选国家的货币，点一下可以改选其他货币。"
      },
      {
        "type": "note",
        "text": "如果刚开店、还没有重要数据，可以删除并重新安装 App，重新跑一次开店流程。删除前请确认不需要保留任何数据。"
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
    "question": "怎么切换 App 的语言？",
    "keywords": [
      "语言",
      "英文",
      "中文",
      "简体中文",
      "日文",
      "多语言",
      "切换",
      "language"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS 支持 32 种语言，包括繁体中文、简体中文、英文、日文、韩文、泰文、越南文、印尼文、马来文、西班牙文（拉丁美洲）、葡萄牙文（巴西）、法文与德文等。到“设置 → 本机偏好设置”点“App 语言”，会打开 iPad“设置”里 DingPOS 的页面，在“语言”选择想用的语言即可。"
      },
      {
        "type": "p",
        "text": "iOS 不允许 App 直接打开语言列表，所以要在系统设置里再点一次。语言只套用在这台 iPad。"
      },
      {
        "type": "note",
        "text": "繁体中文与英文以外的语言是 v3.2 起加入的。如果“语言”列表里只有中文和英文，请到 App Store 更新 DingPOS。"
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
    "question": "如何同时服务多位客人？",
    "keywords": [
      "购物车",
      "多车",
      "挂单",
      "切换",
      "同时",
      "多位客人"
    ],
    "content": [
      {
        "type": "p",
        "text": "收银画面支持最多 10 个购物车同时进行。点购物车栏上的“+”添加，点编号标签即可切换。"
      },
      {
        "type": "p",
        "text": "每个购物车独立计算。客人 A 还在挑选时，切到另一车就能先帮客人 B 结账；结账完成后该购物车会自动移除。"
      },
      {
        "type": "note",
        "text": "购物车只存在内存中，App 完全关闭后，尚未结账的购物车会清空。"
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
    "question": "怎么套用折扣？",
    "keywords": [
      "折扣",
      "打折",
      "优惠",
      "折让",
      "百分比",
      "折价"
    ],
    "content": [
      {
        "type": "p",
        "text": "折扣分两层，都支持固定金额或百分比："
      },
      {
        "type": "list",
        "items": [
          "单品折扣：点购物车中的商品 → 选“折扣”→ 输入金额或百分比。",
          "整单折扣：点购物车下方的“折扣”按钮。"
        ]
      },
      {
        "type": "p",
        "text": "每个商品与整单各只能有一个折扣，重复套用会覆盖前一个；点折扣标签即可移除。计算顺序是先折扣、后计税，这是零售的通用顺序。"
      },
      {
        "type": "note",
        "text": "台币与港币的店家使用中文界面时，百分比折扣以“折”输入与显示（港币店家是 v3.2 起）：输入 7 代表 7折，也就是少付 30%；大于 10 的数字会当成十倍简写，例如 75 是 7.5折。其他币种与语言维持百分比。"
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
    "question": "税金怎么计算？",
    "keywords": [
      "税",
      "税金",
      "营业税",
      "内含税",
      "外加税",
      "发票",
      "tax"
    ],
    "content": [
      {
        "type": "p",
        "text": "依开店时选择的税制自动计算，两种模式收据上都会显示税额："
      },
      {
        "type": "list",
        "items": [
          "内含税：商品价格已包含税金，总额不变，收据上拆列出内含的税额（台湾、日本等常用）。",
          "外加税：结账时在折扣后金额上外加税金（美国、加拿大等常用）。"
        ]
      },
      {
        "type": "p",
        "text": "完整计算顺序：单品折扣 → 整单折扣 → 税金。金额依币种的小数位数四舍五入（例如新台币取整数、美元取两位）。"
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
    "question": "支持哪些付款方式？",
    "keywords": [
      "付款",
      "支付",
      "现金",
      "刷卡",
      "信用卡",
      "line pay",
      "找零",
      "挂账",
      "手续费"
    ],
    "content": [
      {
        "type": "p",
        "text": "新开的店默认有“现金”与“信用卡”两种付款方式，名称跟着开店当下的 App 语言。你可以在“设置 → 付款方式”添加任意付款方式（例如 LINE Pay、街口支付、Apple Pay），也可以删除或重新排序。"
      },
      {
        "type": "p",
        "text": "付款方式是记账用的标签——DingPOS 不经手实际收付款。刷卡或移动支付请用你原有的刷卡机或收款 App 完成，在 DingPOS 选对应标签记录即可。现金付款会自动计算找零。"
      },
      {
        "type": "p",
        "text": "刷卡或移动支付会被扣手续费的话，可以替付款方式填手续费率，报表会估算每种方式的手续费与净收，详见“可以记录刷卡或移动支付的手续费吗？”。"
      },
      {
        "type": "p",
        "text": "熟客想先把东西带走、之后再付，可以选“挂账”：这笔会记成未收账款，等收到钱再结清。详见“熟客可以先挂账、之后再付吗？”。"
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
    "question": "可以记录刷卡或移动支付的手续费吗？",
    "keywords": [
      "手续费",
      "刷卡手续费",
      "费率",
      "净收",
      "line pay",
      "移动支付",
      "支付服务商",
      "fee"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。到“设置 → 付款方式”点一个付款方式（添加时也可以），在“手续费”填百分比、每笔固定金额，或两者都填。之后每笔用这个方式收的款，都会依当下的费率估算手续费。"
      },
      {
        "type": "p",
        "text": "报表的付款方式卡会在有手续费的方式底下多一行“手续费｜净收”，卡片底部是整段期间的预估手续费与预估净收。"
      },
      {
        "type": "list",
        "items": [
          "百分比请填实际被扣、含税的费率：例如 3% 加 5% 税，填 3.15%。两栏都留空就不估算手续费。",
          "改费率只影响之后的收款，之前记下的手续费不变。",
          "“退款时退还百分比手续费”默认打开，适合退款时支付服务商会退回手续费的情况；每笔固定金额一律不退。作废、退货、取消预购与还原结清会依这个规则冲回手续费，客人拿回的金额不受影响。",
          "设置费率之前的收款没有手续费记录，报表会标出“缺 N 笔费率”，净收显示“—”。"
        ]
      },
      {
        "type": "note",
        "text": "手续费是依费率算出的估计值，实际金额以支付服务商的账单为准。编辑费率与在报表查看手续费是 Standard 以上方案的功能；Lite 的字段会上锁，但收款照样记下手续费，升级后就看得到。"
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
    "question": "可以关掉结账完成的“叮”一声吗？",
    "keywords": [
      "音效",
      "叮",
      "声音",
      "静音",
      "关掉",
      "结账",
      "sound"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。到“设置 → 本机偏好设置”关掉“结账完成音效”，下一笔结账就不会再发出叮声，但仍然会有震动反馈。"
      },
      {
        "type": "p",
        "text": "这个开关只套用在这台 iPad，从云端备份还原也不会改变它。"
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
    "question": "收银台可以不显示没有库存的商品吗？",
    "keywords": [
      "隐藏",
      "无库存",
      "缺货",
      "售完",
      "库存 0",
      "收银台",
      "商品不见",
      "找不到商品"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。到“设置 → 本机偏好设置”打开“隐藏无库存商品”（默认关闭），收银台的商品格、分类筛选与搜索（名称、条码）就不再列出库存 0 或负数的商品。开关一切换就生效，不用重开 App。"
      },
      {
        "type": "list",
        "items": [
          "没有追踪库存的商品永远照常显示；有规格的商品要所有规格都没有库存才会隐藏。",
          "只影响这台 iPad 的收银台，“商品”管理列表照样列出全部商品。",
          "所有商品都被隐藏时，收银台会显示“所有商品都没有库存”，并说明到哪里关闭。"
        ]
      },
      {
        "type": "note",
        "text": "开关打开时，这台 iPad 搜索不到无库存商品，所以也不能卖负库存或开预购，需要时请先关闭。收银台上的商品“不见了”，通常就是这个开关打开了。"
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
    "question": "商品改价后，购物车里的价格会跟着变吗？",
    "keywords": [
      "改价",
      "价格变动",
      "调价",
      "购物车",
      "重新计算"
    ],
    "content": [
      {
        "type": "p",
        "text": "购物车显示的是商品加入当下的价格。按下结账确认时，系统会重新查一次所有商品的最新价格——若有变动，会先弹出提示让你确认新价格后才继续。"
      },
      {
        "type": "p",
        "text": "促销也会在确认当下从头重新计算一次；若总额、税额或任何折扣金额因此改变，画面会显示变动摘要并要求再确认，确保你看到的金额就是实际入账的金额。"
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
    "question": "手动折扣和促销可以同时用吗？",
    "keywords": [
      "手动折扣",
      "促销",
      "并存",
      "同时",
      "覆盖",
      "优先"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以，规则是“手动优先、各管各的”："
      },
      {
        "type": "list",
        "items": [
          "单品手动折扣：该行商品不再套用单品类促销——手动折扣视为你现场的最终决定；但这行的金额仍计入满额门槛的计算。",
          "整单手动折扣：在所有促销算完之后才扣，两者可以并存。若输入的折扣超过剩余金额，系统会自动以剩余金额为上限并提示你。"
        ]
      },
      {
        "type": "p",
        "text": "移除手动折扣后，该行商品下次计算时会重新恢复促销资格。"
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
    "question": "结账打错了，如何作废订单？",
    "keywords": [
      "作废",
      "取消",
      "打错",
      "订单",
      "void"
    ],
    "content": [
      {
        "type": "p",
        "text": "到“订单”找到该笔订单，进入详情后选择“作废”，确认即完成。"
      },
      {
        "type": "p",
        "text": "作废会自动回补所有联动数据：有追踪库存的商品数量会加回、会员该笔获得的积分会收回、已抵扣的积分会退还。作废的订单仍保留在列表中并明确标示，不列入报表营收。"
      },
      {
        "type": "note",
        "text": "作废代表“这笔交易没有发生过”，适合当场打错的单。客人事后拿商品回来，请改用“退货”：原单会保留，可以只退其中几件，营收在退货当天扣回。"
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
    "question": "客人要退货或换货怎么办？",
    "keywords": [
      "退货",
      "换货",
      "退款",
      "部分退货",
      "换尺寸",
      "退一件",
      "return",
      "exchange"
    ],
    "content": [
      {
        "type": "p",
        "text": "到“订单”打开原本那张订单，点“退货”，逐项选要退几件。要换货的话，在同一个画面“加入换入商品”，最后一次结算净额：正数向客人收钱、负数退钱给客人，刚好抵销就不用收付。"
      },
      {
        "type": "list",
        "items": [
          "原订单不会被修改。退货会产生一张当天日期、单号以 R 开头的退货单，营收在退货当天扣回。",
          "退款金额是该商品在原单上实际付的钱：当初的单品折扣、整单折扣与积分抵扣都已按比例扣掉，不是用原价退。税也照原单当时的税率计算。",
          "换入商品以今天的售价计算，不套用促销与折扣。",
          "有追踪库存的商品会自动加回库存；原单发出的积分会收回、抵扣掉的积分会退还，换入商品另外发积分。",
          "同一张单可以分次退，但累计不会超过原单卖出的数量。促销的使用次数不会因为退货而归还。"
        ]
      },
      {
        "type": "note",
        "text": "退货没有期限，但一定要有原单。退货单按错了可以作废，可退数量会恢复。"
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
    "question": "如何接受预购、先收订金？",
    "keywords": [
      "预购",
      "订金",
      "预订",
      "取货",
      "尾款",
      "订货",
      "pre-order",
      "deposit"
    ],
    "content": [
      {
        "type": "p",
        "text": "结账时，画面最上方从“一般销售”切到“预购”，选好取货日、输入订金（0 到全额都可以，有 30%、50%、全额快选），再选订金用什么方式收。建议指定顾客，到货时才联系得到人。"
      },
      {
        "type": "list",
        "items": [
          "下单当下就扣库存，可售数量会立刻反映这笔预购；这只是数字上的提示，不会把货锁住，之后的一般销售仍然可以卖掉最后一件。缺货的商品会变成负库存，进货入库后自动回正。",
          "客人来拿货时，在订单详情点“取货结清”收齐尾款，这张单就成为一般的已完成订单；之后要退货，走一般的退货流程。",
          "客人不来拿，点“取消订单”，选择退还或没收订金，库存会加回去。",
          "订金收执和取货时的收据是同一个单号。"
        ]
      },
      {
        "type": "p",
        "text": "报表上，预购的营收在取货那天才确认全额，订金则在收到的那天计入“实收”，所以两个数字会暂时不一样，详见“报表的‘营收’和‘实收’有什么不同？”。"
      },
      {
        "type": "note",
        "text": "预购单不能直接修改商品，客人改主意时请取消后重新下一张。创建预购是 Standard 以上方案的功能；降级后，既有预购仍可取货结清或取消。"
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
    "question": "熟客可以先挂账、之后再付吗？",
    "keywords": [
      "挂账",
      "赊账",
      "欠款",
      "未收账款",
      "结清",
      "月结",
      "on account",
      "credit"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。结账时先选好顾客，付款方式选“挂账”——一笔欠款一定要有人认领，所以没有指定顾客时不能挂账。"
      },
      {
        "type": "p",
        "text": "要收钱时，到“订单”上方切到“未收账款”：依顾客分组，点进去可以结清单张、整个月份或全部，每次都会问这笔钱用什么方式收。单张订单也能在订单详情直接结清；收错了可以“还原结清”。"
      },
      {
        "type": "list",
        "items": [
          "营收算在货交出去的那天，实收和积分则等到结清那天才发生。",
          "未结清的订单在列表上有琥珀色标签，顾客详情也看得到他目前欠多少。",
          "还有未结清订单的顾客不能删除。"
        ]
      },
      {
        "type": "note",
        "text": "创建挂账是 Standard 以上方案的功能。降级后不能再添加挂账，但既有的未收账款仍可查看与结清。"
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
    "question": "可以在订单、顾客或进货单上写备注吗？",
    "keywords": [
      "备注",
      "备注",
      "注记",
      "笔记",
      "留言",
      "note"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。订单、顾客与进货单的详情页都有一张备注卡，点一下就能编辑，最多 500 字；添加顾客或进货单时也能在表单里直接写。"
      },
      {
        "type": "p",
        "text": "备注不受单据状态限制：已结账、已作废的订单或退货单都能补写、修改。订单的金额与明细在结账当下就固定了，备注是写在旁边的注记，不会改动单据内容。"
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
    "question": "如何创建多规格商品？",
    "keywords": [
      "规格",
      "多规格",
      "选项",
      "尺寸",
      "颜色",
      "变体",
      "variant"
    ],
    "content": [
      {
        "type": "p",
        "text": "在商品编辑页的“商品规格”添加规格（例如“颜色”），再用“+ 选项”加入它的每个选择（例如红色、蓝色）。有两个以上的规格时（例如颜色 × 尺寸），系统会展开所有组合（红／S、红／M、蓝／S……）。"
      },
      {
        "type": "p",
        "text": "加上规格后，商品的“售价”栏会收起来，改在“规格价格与库存”替每个组合各自定价，库存也各自计算（v3.2 起；更早的版本仍要填商品售价）。收银台、商品列表与商品详情会显示“NT$350–NT$390”这种最低到最高的价格区间，所有组合同价时只显示一个价格；依价格排序时以最低的组合价格为准。收银时点击该商品，会先弹出规格选择再加入购物车。"
      },
      {
        "type": "p",
        "text": "成本不必逐一填写：组合的“成本”栏留空就是“跟随商品”，用的是商品成本，改商品成本时会一起变；填了数字就是“个别设置”，填 0 也算。按“全部改用商品成本”可以一次清掉所有个别设置。"
      },
      {
        "type": "note",
        "text": "规格与选项名称上限 20 字，而且不能留白：规格名称或任何一个选项是空的，保存时会标红框，请填上或删掉空白的选项。有规格的商品不能设成现场定价。"
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
    "question": "运费、清洁费或议价商品，可以结账时才输入价格吗？",
    "keywords": [
      "现场定价",
      "自订价格",
      "输入价格",
      "运费",
      "清洁费",
      "议价",
      "时价",
      "open price"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以，把商品设成“现场定价”。在商品编辑页打开“现场定价”，售价就不用填，收银台与商品列表的价格位置会显示“现场定价”。收银时点这个商品，会先弹出价格输入，填好按“加入购物车”，就以这个价格加入。"
      },
      {
        "type": "list",
        "items": [
          "可以输入 0（例如免运）；字段空白时不能加入。价格依店里的税制输入，跟一般售价一样。",
          "同一张单只会有一行：再点一次这个商品，会打开那一行让你改价格。",
          "打开“现场定价”时会一并勾选“排除于优惠之外”，让运费这类费用不被打折、也不计入满额门槛；议价商品想参加促销，可以再手动关掉。",
          "成交后和一般商品一样计税、累积积分、计入报表，退货时退回当初输入的价格。",
          "有规格的商品不能现场定价；现场定价商品也不会出现在赠品、加价购的选项，以及换货的换入列表。"
        ]
      },
      {
        "type": "note",
        "text": "所有方案都能用，店员输入价格也不需要主管审批。"
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
    "question": "如何使用条码？",
    "keywords": [
      "条码",
      "扫描",
      "扫码",
      "barcode",
      "重复",
      "扫描枪"
    ],
    "content": [
      {
        "type": "p",
        "text": "商品条码可以手动输入，也可以用相机直接扫描带入。条码不可重复——保存时若与其他商品冲突，会提示你冲突的商品名称。"
      },
      {
        "type": "p",
        "text": "收银时，搜索栏会同时比对商品名称与条码开头，输入条码即可快速调出商品。实体扫描枪的支持规划请见“会支持实体扫描枪吗？”。"
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
    "question": "如何调整商品的排列顺序？",
    "keywords": [
      "排序",
      "顺序",
      "排列",
      "拖动",
      "置顶",
      "商品顺序",
      "sort"
    ],
    "content": [
      {
        "type": "p",
        "text": "在“商品”点“编辑排序”，直接拖动商品卡片到想要的位置。收银台和商品管理用的是同一份顺序，排一次两边都会跟着变。"
      },
      {
        "type": "list",
        "items": [
          "商品很多时，每张卡片的菜单可以“移至最前”“移至最后”或“移至指定位置”，卡片上也标着它目前排第几。",
          "先筛选分类再排，只会调整这个分类内的先后，其他分类的商品位置不变。",
          "添加的商品会排在最前面；修改商品数据不会改变它的位置。"
        ]
      },
      {
        "type": "p",
        "text": "想暂时改用名称、价格、创建或更新时间排序，用“排序方式”菜单切换即可。你自订的顺序会保留，切回“自订顺序”就回来。"
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
    "question": "如何追踪库存？",
    "keywords": [
      "库存",
      "追踪",
      "进货",
      "盘点",
      "数量",
      "低库存"
    ],
    "content": [
      {
        "type": "p",
        "text": "库存追踪是每项商品独立的开关——在商品编辑页打开并输入目前数量即可。多规格商品的每个规格各自计算库存。"
      },
      {
        "type": "p",
        "text": "打开后，销售与预购自动扣库存，作废、退货与取消预购自动加回，进货单入库自动增加，也可以随时手动调整。每一笔变动都记录在变动账本中，一笔不漏。库存过低时会以颜色警示。"
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
    "question": "为什么库存可以是负数？",
    "keywords": [
      "负库存",
      "负数",
      "库存不足",
      "挡单",
      "调整"
    ],
    "content": [
      {
        "type": "p",
        "text": "这是刻意的设计：库存不足时，结账不会被挡下。现场收银的第一原则是不能让客人等——账面数字错了可以事后修正，交易被中断的损失却补不回来。"
      },
      {
        "type": "p",
        "text": "出现负库存通常代表有进货没登记，或是预购的商品还没到货（预购下单就会先扣库存）。进货请用进货单入库，数字会自动补回；盘点发现的差异再用“手动调整”修正，调整记录会留在变动账本中。"
      },
      {
        "type": "note",
        "text": "如果收银台搜索不到库存 0 的商品，请检查“设置 → 本机偏好设置”的“隐藏无库存商品”是否打开：打开时这台 iPad 不能把无库存商品加入购物车。"
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
    "question": "如何记录进货和供应商？",
    "keywords": [
      "进货",
      "进货单",
      "供应商",
      "入库",
      "采购",
      "补货",
      "未付账款",
      "purchase order",
      "supplier"
    ],
    "content": [
      {
        "type": "p",
        "text": "侧栏的“进货”管理供应商与进货单。供应商记录名称、联系人、电话、地址与默认付款方式（现结或月结）。"
      },
      {
        "type": "steps",
        "items": [
          "点“添加进货单”，选供应商，加入这批货的商品、数量与单价（预填商品目前的成本），也可以填运费。还没建过这家供应商的话，在选择供应商的列表左上角点“添加供应商”，建好会直接带回进货单。",
          "草稿阶段不会动到库存或账款，可以随时修改或删除。",
          "货到了按“确认入库”：有追踪库存的商品数量自动增加，进货单取得单号并锁定。入库时默认会把商品成本更新为这次的单价，不想更新可以在进货单上关掉“同步商品成本”。"
        ]
      },
      {
        "type": "p",
        "text": "付款方式决定入库后的状态：现结直接标为已付款；月结则记为未付款，集中在“未付账款”，可以依供应商结清单张、本月或全部。"
      },
      {
        "type": "note",
        "text": "进货是 Standard 以上方案的功能。名下还有未付款进货单的供应商不能删除。"
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
    "question": "报表的“营收”和“实收”有什么不同？",
    "keywords": [
      "营收",
      "实收",
      "收入",
      "对账",
      "订金",
      "挂账",
      "不一样",
      "revenue"
    ],
    "content": [
      {
        "type": "p",
        "text": "营收算的是货在哪一天交给客人，实收算的是钱在哪一天进到店里。当场结账的订单两者在同一天发生，数字相同；以下情况会让它们分开："
      },
      {
        "type": "list",
        "items": [
          "挂账：货今天出门，计入今天的营收；钱等到结清那天才计入实收。",
          "预购：订金在收到的那天计入实收；营收要等到取货那天才确认全额。",
          "没收订金：客人取消预购、订金不退时，那笔订金在收到的那天已经算进实收，报表另外标出“没收订金”，不计入营收。",
          "作废先前的订单：退回的钱计入作废当天的实收，所以当天的实收可能是负数；报表的“作废”则依成交日期计入。“实收”与“作废”卡片右上角的 ⓘ 有同样的说明。"
        ]
      },
      {
        "type": "p",
        "text": "对账时，用“实收”对照抽屉里的现金与刷卡记录；想知道这段期间实际卖出多少，看“营收”。退货会在退货当天从营收扣回。"
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
    "question": "报表可以看哪些期间？",
    "keywords": [
      "报表",
      "期间",
      "本周",
      "本月",
      "今年",
      "自选区间",
      "日期",
      "热销排行",
      "统计"
    ],
    "content": [
      {
        "type": "p",
        "text": "报表上方可以选今日、昨日、本周、本月、今年、全部时间，或用“自选区间”挑开始与结束日。本周依设备设置的每周起始日计算，本月与今年从 1 号、1 月 1 日算起，选项旁会显示实际涵盖的日期。“全部时间”从店里第一笔交易算起。"
      },
      {
        "type": "p",
        "text": "只选一天时，趋势图是每小时的柱状图；多天的期间依长度以日、周、月或年为一格。"
      },
      {
        "type": "p",
        "text": "热销排行卡只列前 5 名，点卡片或“查看全部”可以看该期间每一项有销售的商品，依扣掉退货后的数量排序。"
      },
      {
        "type": "p",
        "text": "Pro 方案在期间栏右侧多了“销售比较”，可以拿这段期间跟上一段或去年同期比，详见“高级报表（Pro）可以看什么？”。"
      },
      {
        "type": "note",
        "text": "这些日历期间是 v2.4 起的设计；更早的版本是“今日／7 天／30 天／全部时间”这类往回推的天数。如果你看到的还是旧选项，请到 App Store 更新 DingPOS。"
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
    "question": "高级报表（Pro）可以看什么？",
    "keywords": [
      "高级报表",
      "pro",
      "销售比较",
      "去年同期",
      "热力图",
      "时段",
      "滞销",
      "库存估值",
      "回购率",
      "积分"
    ],
    "content": [
      {
        "type": "p",
        "text": "高级报表不是另一个画面，而是直接长在“报表”页上，跟着上方选的期间一起切换："
      },
      {
        "type": "list",
        "items": [
          "销售比较：期间栏右侧选“去年同期”或跟上一段期间比（单日比上周同一天、本周比上周、本月比上个月、今年比去年、自选区间比前面同样天数）。实收那一格列出差额与增长率，营收走势图多一条较淡的比较线。期间还没结束时，比较期间也切在同一个时刻。",
          "星期 × 时段：销售走势的标头切到“星期 × 时段”，看一周七天、每小时的热力图，颜色越深卖得越多，可以切营收或订单数；开了销售比较时还能看哪些时段变多、哪些变少。",
          "滞销品：商品排行卡的标头切到“滞销品”，由卖最少的排到最多，旁边是目前库存与最后一次卖出的日期，从没卖过的标“从未售出”。默认只看有库存的商品。",
          "回购率：服务顾客那一格的最后一行，是这段期间有消费的会员中，累计消费两次以上的比例。",
          "目前状况：库存估值（目前库存 × 目前成本）、所选期间的每一笔库存变动，以及顾客手上还没兑换的积分与最多能抵扣的金额。这一区是目前的余额，不随期间切换。"
        ]
      },
      {
        "type": "p",
        "text": "没有 Pro 时，这五个位置各带一个小锁，点了会看到升级说明；报表原本的内容照常可以看。高级报表读的是店里本来就有的数据，所以 Pro 到期只会把报表收起来，数据不会少。"
      },
      {
        "type": "note",
        "text": "员工看高级报表沿用“报表”权限；库存估值的金额另外需要“看成本与毛利”权限。"
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
    "question": "没填商品成本，报表的利润怎么算？",
    "keywords": [
      "成本",
      "毛利",
      "毛利率",
      "利润",
      "报表",
      "未追踪",
      "缺成本",
      "利润追踪"
    ],
    "content": [
      {
        "type": "p",
        "text": "成本是选填字段。没填成本的商品不计入利润，营收照常计入。报表的“利润追踪”卡会写出这段期间有几项售出的商品没有成本；成本填 0 的商品算有成本，不会被列进去。"
      },
      {
        "type": "p",
        "text": "点卡片或“查看商品”，会打开“缺成本的商品”列表，依未计入利润的金额由高到低排列。点一行直接打开该商品，从“编辑”补上成本，回到列表那一行会标示“已补成本”。有规格的商品，只要规格或商品本身任一有成本就算已补。"
      },
      {
        "type": "p",
        "text": "利润＝扣掉所有折扣（单品与整单折扣、促销、积分抵扣）、再扣掉税之后的营收，减去成本，所以成本栏是“成本（未税，选填）”，请填未税的进价。毛利率＝利润 ÷ 有成本商品的未税营收，缺成本的商品不会把毛利率拉低。退货会在退货当天扣回那几件商品原本贡献的利润。"
      },
      {
        "type": "note",
        "text": "补上的成本只影响之后的销售，已经卖出的订单不会重新计算。这套算法是 v3.1 起的设计：更早的版本只扣单品手动折扣，内含税也被算进利润，所以更新后有折扣或内含税的期间，利润会比以前低。这是修正，不是数据遗失。"
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
    "question": "如何创建促销活动？",
    "keywords": [
      "促销",
      "活动",
      "满额",
      "买一送一",
      "优惠",
      "折扣码",
      "happy hour"
    ],
    "content": [
      {
        "type": "p",
        "text": "到“设置 → 优惠活动”创建。支持的类型包括："
      },
      {
        "type": "list",
        "items": [
          "满额折扣：满 X 元折 Y 元或 Y%。",
          "买一送一、第 N 件优惠。",
          "积分加倍回馈。",
          "指定会员等级或寿星专属优惠。",
          "买 A 送 B、加价购、组合价等组合优惠。"
        ]
      },
      {
        "type": "p",
        "text": "每档促销可设置档期（支持 Happy Hour 时段、指定星期、跨午夜）、适用商品范围、优先级与叠加规则、使用次数上限。符合条件时结账自动套用，客人不需要输入折扣码。"
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
    "question": "促销没有自动套用怎么办？",
    "keywords": [
      "促销",
      "没套用",
      "没生效",
      "没触发",
      "检查",
      "排查"
    ],
    "content": [
      {
        "type": "p",
        "text": "依序检查最常见的几个原因："
      },
      {
        "type": "steps",
        "items": [
          "档期与时段：是否在有效日期内？Happy Hour 是否限定了星期或时段？",
          "适用范围：购物车中的商品是否在促销指定的商品或分类内？商品是否被设为“排除于优惠之外”（现场定价商品默认会勾选）？门槛金额是否已达到？",
          "对象限定：促销是否限定会员等级或寿星？结账时是否已选择该会员？",
          "次数上限：总使用次数、或该客户的使用次数是否已用完？生日当月促销的每人上限按日历年计算。",
          "叠加规则：是否被优先级较高、且设置“套用后停止”的另一档促销挡下？"
        ]
      },
      {
        "type": "p",
        "text": "若确认条件都符合仍未套用，写信给我们并附上促销设置的截屏，我们会协助排查。"
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
    "question": "会员积分怎么设置与抵扣？",
    "keywords": [
      "积分",
      "集点",
      "回馈",
      "抵扣",
      "会员",
      "迎新"
    ],
    "content": [
      {
        "type": "p",
        "text": "到“设置 → 会员积分”设置两条规则：消费满 X 元回馈 Y 积分（赚积分），以及 N 积分抵扣 M 元（用积分，可设置单笔抵扣上限）。也可以设置新会员自动获得的迎新积分。"
      },
      {
        "type": "p",
        "text": "结账时选择会员，积分自动累积；要抵扣时输入使用的积分即可。订单作废会自动收回该笔获得的积分、退还已抵扣的积分。"
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
    "question": "会员等级有什么用？",
    "keywords": [
      "会员等级",
      "等级",
      "vip",
      "升级",
      "金卡",
      "tier"
    ],
    "content": [
      {
        "type": "p",
        "text": "会员等级（例如一般、银卡、金卡）有两个主要用途：作为促销的指定对象（例如金卡专属 9 折），以及让你在结账时一眼识别客人身份。"
      },
      {
        "type": "p",
        "text": "等级可以设置自动升级规则（例如累积消费达标自动升级），也可以手动指定。订单作废时，若该笔消费曾触发升级，等级也会自动回退。"
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
    "question": "如何备份数据？",
    "keywords": [
      "备份",
      "icloud",
      "google drive",
      "dropbox",
      "云端",
      "快照"
    ],
    "content": [
      {
        "type": "p",
        "text": "到“设置 → 云端备份”，从 iCloud、Google Drive、Dropbox 中选一个并完成授权，之后随时可以手动触发备份。用 iCloud 的话，这台 iPad 要登录 iCloud、打开 iCloud 云盘，并允许 DingPOS 使用。"
      },
      {
        "type": "p",
        "text": "备份存进你自己的云端账号。每个云端只保留最新的一份：数据快照与商品照片各一个文件，每次备份都会覆盖上一份。"
      },
      {
        "type": "note",
        "text": "因为新的备份会盖掉旧的，如果你怀疑数据已经出错（例如误删了大量商品），先不要按备份，写信给我们一起看怎么处理。"
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
    "question": "iCloud 备份显示“未连接”怎么办？",
    "keywords": [
      "icloud",
      "未连接",
      "连不上",
      "icloud 云盘",
      "icloud drive",
      "备份失败"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS 只有在 iCloud 真的能用时，才会显示为已连接。显示“未连接”时，请到 iPad 的“设置”确认三件事："
      },
      {
        "type": "steps",
        "items": [
          "已经登录 Apple 账户。",
          "iCloud 云盘（iCloud Drive）已打开。",
          "iCloud 云盘允许 DingPOS 使用。"
        ]
      },
      {
        "type": "p",
        "text": "都开好之后回到 DingPOS 的“云端备份”，iCloud 就会显示为已连接。备份会存在 iCloud 云盘里 DingPOS 自己的文件夹。"
      },
      {
        "type": "note",
        "text": "v3.0 以前的版本 iCloud 备份无法使用，每次都会出现“Backup.SyncError 错误 0”。请先到 App Store 更新 DingPOS。"
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
    "question": "换新 iPad 怎么转移数据？",
    "keywords": [
      "换机",
      "转移",
      "新 ipad",
      "还原",
      "搬家",
      "restore"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "旧 iPad：到“设置 → 云端备份”手动执行一次备份，确认备份时间已更新。",
          "新 iPad：安装 DingPOS 并完成开店流程。",
          "新 iPad：到“设置 → 云端备份”连接同一个云端账号，选择还原。"
        ]
      },
      {
        "type": "p",
        "text": "按“还原”会先开一张预览：并排这台 iPad 与快照的商品、订单、顾客笔数，并逐笔列出还原后会消失的订单。按下确认之前，本机数据完全不动。快照如果是较新版本的 DingPOS 创建的，会请你先更新 App。商品照片会一并还原。"
      },
      {
        "type": "note",
        "text": "还原会用备份完整取代这台 iPad 上的数据：这台 iPad 在备份之后才创建的订单会消失。请确认连到的是正确的云端账号；还原错了，可以“回到还原前”。"
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
    "question": "删除 App 后数据还在吗？",
    "keywords": [
      "删除",
      "移除",
      "卸载",
      "数据遗失",
      "消失"
    ],
    "content": [
      {
        "type": "p",
        "text": "不在。DingPOS 的数据全部保存在设备本地，删除 App 会一并永久删除所有商品、订单、会员与设置——除非你已启用云端备份。"
      },
      {
        "type": "note",
        "text": "删除 App 前，请务必先手动执行一次备份并确认成功。重新安装后即可从云端还原。"
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
    "question": "App 打开时显示“无法打开店家数据”怎么办？",
    "keywords": [
      "无法打开",
      "打不开",
      "闪退",
      "崩溃",
      "数据库",
      "开不了",
      "店家数据",
      "crash"
    ],
    "content": [
      {
        "type": "p",
        "text": "请不要删除 App。这个画面代表 App 读不到店里的数据，但数据仍然保存在这台 iPad 上；删除 App 会连同数据一起删掉。"
      },
      {
        "type": "p",
        "text": "先按“重试”，成功就会照常进入 App。如果还是一样，按“联系客服”告诉我们，我们会协助找回数据。这个画面本身不会搬动或删除任何文件。"
      },
      {
        "type": "note",
        "text": "最常见的原因是还原到一半时 App 被关掉。v3.0 以前的版本遇到这种情况会一开就闪退；更新到 v3.0 之后，会改停在这个说明画面。"
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
    "question": "可以两台 iPad 一起用吗？",
    "keywords": [
      "两台",
      "多设备",
      "同步",
      "共用",
      "第二台",
      "分店"
    ],
    "content": [
      {
        "type": "p",
        "text": "目前每台 iPad 的数据各自独立，尚不支持两台设备实时共用同一份数据。"
      },
      {
        "type": "p",
        "text": "你可以通过云端备份把数据从一台拷贝到另一台（备份 → 还原），适合换机或创建第二台的初始数据；但两台各自结账的订单不会自动合并。多设备同步在我们的规划中。"
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
    "question": "可以从其他 POS 或 Excel 导入商品与销售记录吗？",
    "keywords": [
      "导入",
      "csv",
      "excel",
      "电子表格",
      "转移",
      "换系统",
      "批量",
      "历史销售",
      "import"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。到“设置 → 数据导入”，选择要导入商品还是销售，再挑一个 CSV 文件（Excel 或 Google 电子表格都能另存成 CSV）。"
      },
      {
        "type": "steps",
        "items": [
          "文件会以表格呈现。常见的中英文字段名称（繁体、简体都可以）会自动对应，对不上的字段点一下就能改。",
          "表格里的值可以直接点来修改，不用回去改文件。",
          "按“确认”开始检查，有问题的行会标红并说明原因；销售导入可以选择跳过有错的订单。",
          "处理完需要你决定的项目（例如同名商品、匹配到多位顾客），看过摘要再按“开始导入”。"
        ]
      },
      {
        "type": "list",
        "items": [
          "导入的销售依订单日期排入，照店里设置的币种与税制重新计算，不会动到库存，也不发迎新积分。",
          "顾客以电话或 email 对应既有顾客，匹配不到就创建新的。",
          "导入的订单会标示“导入于”与来源单号，不能作废或退货。",
          "有错的行可以导出成标好原因的 CSV，修好再导入一次；重复的数据会自动跳过。"
        ]
      },
      {
        "type": "note",
        "text": "数据导入目前是 Beta 功能，单个文件上限 50,000 行或 20 MB。导入前建议先做一次云端备份；遇到导入不了或结果不对，请从导入画面的“问题反馈”告诉我们。"
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
    "question": "还原错了怎么办？可以回到还原前吗？",
    "keywords": [
      "还原",
      "回到还原前",
      "恢复",
      "挑错快照",
      "还原记录",
      "数据不见",
      "undo"
    ],
    "content": [
      {
        "type": "p",
        "text": "可以。每次从云端还原，被取代的本机数据都会留成一份“还原前副本”。到“设置 → 云端备份”，卡片上写着上次还原的时间与来源，按“回到还原前”，看过预览、确认后，数据就切回还原前的样子，App 会重新加载。"
      },
      {
        "type": "list",
        "items": [
          "回到还原前本身也算一次还原，会把被取代的数据再留一份，所以反悔了再按一次就切回来。",
          "副本只留最近一份，下一次还原会取代它。",
          "只恢复数据：快照之后才添加的商品，图片会显示为缺图。"
        ]
      },
      {
        "type": "p",
        "text": "想查谁在什么时候、从哪份快照还原过，在同一页点“查看还原记录”：每一次还原的时间、操作者、来源、前后的商品／订单／顾客笔数，以及被移除的每一笔订单。记录存在这台 iPad 上，不会跟着还原被换掉。"
      },
      {
        "type": "note",
        "text": "还原预览与回到还原前是所有方案都能用的功能；查看还原记录是 Pro 功能。没有 Pro 时记录照样会写（只是不记操作者），之后订阅 Pro 就看得到。"
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
    "question": "如何创建员工账号、切换操作者？",
    "keywords": [
      "员工",
      "店员",
      "店长",
      "账号",
      "pin",
      "操作者",
      "换人",
      "经手人",
      "交班"
    ],
    "content": [
      {
        "type": "p",
        "text": "点侧栏的“员工”。第一次进去要先创建店主：输入姓名与 4 位数 PIN。之后添加员工、修改权限都需要这组 PIN，请记住它——忘记无法重置。"
      },
      {
        "type": "steps",
        "items": [
          "在“员工”点“添加员工”，填姓名、选角色（店长或店员），设一组 4 位数 PIN。",
          "侧栏底部和结账画面右上角会显示目前操作者。换班时点一下，选自己的名字、输入自己的 PIN 就换人。",
          "之后每张订单、每笔款项、库存与积分变动都记下经手人，订单列表与明细看得到；作废的单另外记作废者。"
        ]
      },
      {
        "type": "p",
        "text": "员工离职时用“停用此员工”，历史记录完整保留，需要时可以重新启用。改名不影响旧单，旧单显示的是当时的姓名。"
      },
      {
        "type": "note",
        "text": "员工是 Pro 方案的功能（试用期间也能用）。失去 Pro 后，员工数据与每张单的经手人都会保留，新的单记为店主；重新订阅 Pro 就恢复。"
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
    "question": "忘记店主 PIN 怎么办？",
    "keywords": [
      "pin",
      "忘记",
      "密码",
      "重置",
      "店主",
      "找回",
      "解锁"
    ],
    "content": [
      {
        "type": "p",
        "text": "店主 PIN 无法重置，我们的客服也没有办法帮你解开。PIN 和店里的数据存在一起，所以删掉 App 重新安装、再从云端还原，也会带回同一组 PIN。"
      },
      {
        "type": "p",
        "text": "创建店主和每次更改店主 PIN 时，画面都会提醒“请记住这组 PIN。忘记将无法重置。”建议把它记在只有你拿得到的地方。"
      },
      {
        "type": "p",
        "text": "忘记店主 PIN 之后，需要店主 PIN 的操作就无法进行，例如添加或修改员工、修改角色权限、查看操作记录。员工仍然可以用自己的 PIN 继续结账与处理日常工作。"
      },
      {
        "type": "note",
        "text": "员工忘记自己的 PIN 没关系：店主可以在“员工”帮他重置。"
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
    "question": "员工权限与主管审批怎么运作？",
    "keywords": [
      "权限",
      "审批",
      "主管",
      "折扣上限",
      "店员",
      "店长",
      "成本",
      "角色"
    ],
    "content": [
      {
        "type": "p",
        "text": "权限只有两种状态：允许、需审批——没有硬性禁止。店员碰到需审批的操作时，画面会请一位对这项是“允许”的在职同事选自己的名字、输入 PIN 放行。"
      },
      {
        "type": "list",
        "items": [
          "操作类（库存手动调整、商品管理、超过折扣上限的结账）：审批一次只放行这一次。",
          "查看类（看成本与毛利、报表、设置、备份与还原）：审批后解锁到切换操作者或 App 进背景为止。",
          "折扣上限看的是手动折扣，结账时检查一次；促销自动套用的折扣与积分抵扣不算在内。"
        ]
      },
      {
        "type": "p",
        "text": "出厂设置：店长除了“备份与还原”之外都是允许、折扣不限；店员每一项都需审批、折扣上限 10%。店主一律允许，不能修改。要调整的话，到“员工 → 角色权限”按“编辑”，改完一次保存，所有人立即套用。"
      },
      {
        "type": "note",
        "text": "作废、退货、挂账、进货刻意不设权限，只记录经手人；事后想查，用“操作记录”。"
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
    "question": "怎么查是谁作废了单、调了库存或改了价格？",
    "keywords": [
      "操作记录",
      "审计",
      "谁改的",
      "作废",
      "改价",
      "调库存",
      "删除商品",
      "审批记录",
      "log"
    ],
    "content": [
      {
        "type": "p",
        "text": "用“操作记录”。在“员工”页右上角点“操作记录”，输入店主 PIN 后，由新到旧列出店里的敏感操作：作废、退货、手动调库存、主管审批、员工与权限变更、店主 PIN 变更、商品改价（售价与成本）与商品删除。一般结账不列入。"
      },
      {
        "type": "list",
        "items": [
          "每一笔写出对象、谁在几点几分做了什么、以及结果，例如“M 售价 $390 → $350”。",
          "可以依员工（含已停用的）、操作类型与今日／本周／本月筛选。",
          "点一笔指向订单、商品或顾客的记录，会直接打开它的明细。",
          "订单明细、商品详情与员工资料也各有入口，只列跟它有关的记录。",
          "删掉的商品在记录里仍看得到名称与当时的售价。"
        ]
      },
      {
        "type": "note",
        "text": "所有方案都照样记录，查看才是 Pro 功能，所以 Pro 到期期间的记录，重新订阅后都看得到。记录会随云端备份一起走。"
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
    "question": "免费试用怎么运作？",
    "keywords": [
      "试用",
      "免费",
      "30 天",
      "trial"
    ],
    "content": [
      {
        "type": "p",
        "text": "首次安装起 30 天内可使用 Pro 方案的全部功能，包括员工账号、权限、操作记录与高级报表，不需要注册账号。"
      },
      {
        "type": "p",
        "text": "试用期间订阅任一方案，试用会立即结束，从那一刻起改用你订阅的方案。试用结束后，员工与高级报表等 Pro 功能只在订阅 Pro 时开放。"
      },
      {
        "type": "p",
        "text": "试用剩 7 天以内与最后 1 天，App 会各弹出一次提醒，告诉你还剩几天、到期后结账会暂停、数据都会保留。"
      },
      {
        "type": "p",
        "text": "试用期间创建的所有数据（商品、订单、会员）都会完整保留——不论之后是否订阅，数据都不会被删除。"
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
    "question": "试用到期后数据会消失吗？",
    "keywords": [
      "到期",
      "过期",
      "数据",
      "锁定",
      "结账锁"
    ],
    "content": [
      {
        "type": "p",
        "text": "不会，数据永远保留在你的设备上。试用到期后，“结账”功能会锁定，但你仍然可以浏览订单、查看报表与管理商品。"
      },
      {
        "type": "p",
        "text": "任何时候订阅，都能立即恢复结账功能，所有数据原封不动。"
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
    "question": "Lite、Standard、Pro 方案有什么区别？",
    "keywords": [
      "方案",
      "lite",
      "standard",
      "pro",
      "差别",
      "比较",
      "升级",
      "降级",
      "价格"
    ],
    "content": [
      {
        "type": "p",
        "text": "三个方案都有完整的结账、商品、订单（含作废与退换货）、报表与云端备份，差别在经营工具："
      },
      {
        "type": "list",
        "items": [
          "Lite：适合一个人看摊，只需要结账与商品管理。",
          "Standard：再加上促销、会员积分与等级、库存追踪、进货、挂账、预购与付款手续费估算。",
          "Pro：再加上员工与权限、主管审批、操作记录、还原记录与高级报表，适合有员工的店。"
        ]
      },
      {
        "type": "p",
        "text": "已经订阅 Standard，可以在订阅页直接升级到 Pro：付款周期与目前相同，升级立即生效，差额由 Apple 按比例计算。从 Pro 改回 Standard，则在续订日生效。价格以 App 内显示为准，也可以到官网的“价格”页比较。"
      },
      {
        "type": "note",
        "text": "降级不会删除任何数据。超出方案的功能会停用，数据保留，重新订阅就恢复。"
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
    "question": "如何订阅、取消或恢复购买？",
    "keywords": [
      "订阅",
      "取消",
      "退订",
      "恢复购买",
      "价格",
      "付费"
    ],
    "content": [
      {
        "type": "p",
        "text": "订阅通过 App Store 应用程序内购买完成，方案与价格以 App 内显示为准。付款由 Apple 处理，我们不会接触你的付款数据。"
      },
      {
        "type": "list",
        "items": [
          "取消订阅：在设备的“设置 → Apple 账户 → 订阅”管理，于当期结束至少 24 小时前取消即不会续扣。",
          "恢复购买：换机或重新安装后，在 DingPOS 的订阅页面点“恢复购买”即可。",
          "更换方案：在 DingPOS 的订阅页面选新方案。升级（例如 Standard 改 Pro、月缴改年缴）立即生效，差额由 Apple 按比例计算；降级到续订日才生效。"
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
    "question": "满额折扣设置教学",
    "keywords": [
      "满额",
      "门槛",
      "满千折百",
      "教学",
      "设置"
    ],
    "content": [
      {
        "type": "p",
        "text": "到“设置 → 优惠活动 → 添加”，选择满额折扣类型，依序完成："
      },
      {
        "type": "steps",
        "items": [
          "设置门槛金额，以及折扣内容（定额或百分比）。",
          "选择适用范围：指定商品、指定分类，或不选（代表全店适用）。",
          "设置档期：开始日期必填，结束日期留空代表长期有效。",
          "保存后依档期自动生效，结账时符合条件即自动套用，客人不需输入任何代码。"
        ]
      },
      {
        "type": "note",
        "text": "门槛比对的是“符合适用范围的商品小计”，不是整车总额。指定“饮料”分类的满千折百，只有饮料金额计入门槛；被设为“排除促销”的商品也一律不计入。"
      },
      {
        "type": "p",
        "text": "另一个常被问到的行为：若有优先级更前面的促销先扣过，门槛是以“扣过之后”的金额判定——购物车表面过千，实际可能差一点没达标。想让满额判定先跑，把它的优先级数字调小即可。"
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
    "question": "买一送一与第 N 件优惠设置教学",
    "keywords": [
      "买一送一",
      "bogo",
      "第二件",
      "凑组",
      "教学"
    ],
    "content": [
      {
        "type": "p",
        "text": "添加促销时选择买 N 送 N 类型，设置“买几件”“送几件”与折扣比例（100% 即免费）。适用范围可指定商品或整个分类——同分类内不同商品也能互相凑组。"
      },
      {
        "type": "list",
        "items": [
          "抵扣的是同组中“目前最便宜”的那件，而且以当下有效单价计算——若前面已有其他促销先打折，抵扣金额是打折后的价格，不是原价。",
          "想让“第 3 件免费”的抵扣标示是完整原价，把这档促销的优先级调到最小（最先计算）。整单折扣先跑的话，赠送那件显示的抵扣金额会小于原价——这是我们反复验证过的计算顺序特性，不是错误；两种顺序的最终总额几乎相同，差别在客人看到的“折在哪里”。"
        ]
      },
      {
        "type": "p",
        "text": "建议：把主打的优惠排在最前面，让收据上的折扣分布符合你营销的说法。"
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
    "question": "积分加倍活动设置教学",
    "keywords": [
      "积分加倍",
      "双倍",
      "积分",
      "教学",
      "设置"
    ],
    "content": [
      {
        "type": "p",
        "text": "添加促销选“积分加倍”，设置倍数（2 以上的整数），可搭配消费门槛（例如消费满 500 元积分双倍）与档期（例如每周六）。"
      },
      {
        "type": "list",
        "items": [
          "多档积分加倍同时符合时，只取最高的那个倍数——不会相乘、也不会叠加。",
          "门槛金额是以“积分抵扣之后”的金额判定：客人用积分抵扣后若低于门槛，这次就不会加倍。",
          "结账时必须选择会员才会累积积分；没选会员的订单不产生积分，加倍自然也不会生效。"
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
    "question": "会员等级与寿星优惠设置教学",
    "keywords": [
      "会员等级",
      "寿星",
      "生日",
      "vip",
      "教学"
    ],
    "content": [
      {
        "type": "p",
        "text": "先在“设置 → 会员分级”创建等级（例如金卡），再于促销的适用对象选择该等级；寿星优惠则是把对象设为“生日当月”，并填“每人使用上限”。"
      },
      {
        "type": "list",
        "items": [
          "结账时要先选定该会员，优惠才会触发——判定依据是当下选择的会员数据。",
          "寿星判定看会员数据里的生日月份，记得帮会员补上生日字段，没填生日的会员不会被视为寿星。",
          "生日当月促销一定要设每人使用上限，次数按日历年计算：上限 1 就是每位顾客每年用一次，隔年重新计算。没填上限时无法保存。",
          "等级自动升级规则在结账完成时判定；若订单作废，因该笔消费触发的升级也会自动回退。"
        ]
      },
      {
        "type": "note",
        "text": "v3.2 以前，生日当月促销填了每人使用上限仍会弹出错误、无法保存。如果你遇到这个情况，请到 App Store 更新 DingPOS。"
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
    "question": "赠品、加购与组合价设置教学",
    "keywords": [
      "赠品",
      "加购",
      "加价购",
      "组合价",
      "买a送b",
      "教学"
    ],
    "content": [
      {
        "type": "p",
        "text": "添加促销时可选三种组合型优惠：满额／满件送赠品（买 A 送 B）、加价购（加 X 元换购 Y）、组合价（任选 N 件 $X）。赠品与加价购需要店员确认，组合价则自动套用。"
      },
      {
        "type": "p",
        "text": "赠品与加价购不会自动改动购物车。条件符合时，收银画面会出现建议横幅，店员按“接受”才会加入——这是刻意设计，因为赠品牵涉实体库存，需要店员确认现场有货、客人要拿。"
      },
      {
        "type": "list",
        "items": [
          "按“拒绝”后，同一车不会再跳同一档建议；换一车或清空后会重新提示。",
          "结账确认前若条件变动冒出新的建议，需要先“接受”或“拒绝”完才能送出订单。",
          "赠品与加购商品加入购物车后，不会再被其他金钱折扣打折，也不计入其他促销的门槛。"
        ]
      },
      {
        "type": "p",
        "text": "组合价（v2.4 起自动套用）：购物车凑得成组合时，系统直接组起来并算进应付总额，不跳提示、也不能拆开。"
      },
      {
        "type": "list",
        "items": [
          "只有组起来比不组更便宜才会组；价格相同时，先组没有其他折扣的商品，已打折的商品保留原本的折扣。",
          "哪几件被组在一起只看购物车内容，跟刷进来的顺序无关。",
          "每件成员商品底下会写出它分到的折扣，商品行的金额是扣完优惠后的金额。",
          "结账时会用最新的价格再组一次，结果不同时会请你确认新的应付金额。"
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
    "question": "档期与 Happy Hour 设置教学",
    "keywords": [
      "档期",
      "happy hour",
      "时段",
      "星期",
      "跨午夜",
      "教学"
    ],
    "content": [
      {
        "type": "p",
        "text": "每档促销的档期有三层条件：日期范围（开始必填、结束可留空）、每日时段（Happy Hour）、指定星期。三者都符合才会触发。"
      },
      {
        "type": "list",
        "items": [
          "跨午夜时段（例如 22:00–02:00）的星期以“开始那天”为准：只勾周五时，周六凌晨 01:30 仍属于周五场、会触发；但周六晚上 23:30 不会。",
          "结束日期是硬切点——即使 Happy Hour 时段还没跑完，过了结束日期就立即停止。",
          "时间以 iPad 的设备时间为准，请确认设备的时区与时间正确。"
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
    "question": "优先级、叠加与停止规则教学",
    "keywords": [
      "优先级",
      "叠加",
      "停止",
      "冲突",
      "顺序",
      "教学"
    ],
    "content": [
      {
        "type": "p",
        "text": "当多档促销同时符合，套用顺序与交互由三个设置控制："
      },
      {
        "type": "list",
        "items": [
          "优先级：数字小的先计算。在促销列表拖动排序即可调整。",
          "可叠加（默认打开）：关闭时，单品类促销只锁住“被它折过的那几行”，其他商品仍可套用后续单品促销；整单类促销关闭叠加，则会挡掉后面所有整单类促销。",
          "套用后停止：这档套用后，后面的金钱折扣全部不再计算——但积分加倍与赠品建议不受影响。"
        ]
      },
      {
        "type": "note",
        "text": "后算的促销以“已被前面扣过”的金额为基础：9 折加 95 折不等于 85 折——第二档算的是打过 9 折后的金额。系统也不会自动尝试对客人最有利的组合，顺序完全由你的优先级决定。"
      },
      {
        "type": "p",
        "text": "冷知识：折扣金额经四舍五入后若为 0，该次套用不成立，也不会消耗使用次数上限。"
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
    "question": "会对接支付（在线收款）吗？",
    "keywords": [
      "支付接口",
      "刷卡",
      "支付",
      "对接",
      "收款"
    ],
    "content": [
      {
        "type": "p",
        "text": "目前 DingPOS 不经手收付款——付款方式是记账用的标签，实际收款通过你原有的刷卡机或支付 App 完成。"
      },
      {
        "type": "p",
        "text": "是否对接支付，会依实际用户需求决定。如果你有需求，欢迎来信告诉我们你想对接的服务（哪家支付、哪种刷卡机）与使用场景，我们会依照需求人数决定开发顺序。"
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
    "question": "会支持电子发票或收据打印吗？",
    "keywords": [
      "电子发票",
      "发票",
      "收据",
      "打印",
      "出单机"
    ],
    "content": [
      {
        "type": "p",
        "text": "目前还不支持。电子发票与收据打印需要采购发票机／出单机等硬件回来测试与开发，成本较高——我们是小团队，会在用户成长、有稳定收入后排入规划。"
      },
      {
        "type": "p",
        "text": "如果你有需求，欢迎来信告诉我们你需要支持的机型，我们会依照需求人数决定开发顺序。"
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
    "question": "会支持实体扫描枪吗？",
    "keywords": [
      "扫描枪",
      "扫码枪",
      "蓝牙",
      "usb",
      "硬件"
    ],
    "content": [
      {
        "type": "p",
        "text": "创建商品时用相机扫描条码已经支持；实体扫描枪（USB／蓝牙）尚未正式支持——需要采购硬件回来测试与开发，成本较高，会在用户成长后排入规划。"
      },
      {
        "type": "note",
        "text": "收银搜索栏支持条码比对，理论上以键盘模式输入的扫描枪可以打进搜索栏调出商品，但我们尚未实机验证，不列为正式支持。若你已有扫描枪实测可用，欢迎写信告诉我们型号。"
      },
      {
        "type": "p",
        "text": "如果你有需求，欢迎来信，我们会依照需求人数决定开发顺序。"
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
    "question": "会有月结报表吗？",
    "keywords": [
      "月结",
      "结算",
      "对账",
      "月报",
      "未付账款",
      "未收账款"
    ],
    "content": [
      {
        "type": "p",
        "text": "目前没有独立的月结报表，但对账需要的数据都已经在 App 里："
      },
      {
        "type": "list",
        "items": [
          "报表选“本月”，看当月的营收、实收、毛利与付款方式分布。",
          "供应商月结的进货，集中在进货的“未付账款”，可以整月结清。",
          "顾客的挂账，集中在“订单 → 未收账款”，可以整月结清。"
        ]
      },
      {
        "type": "p",
        "text": "如果你需要一份可以导出或打印的月结报表，欢迎来信告诉我们需要哪些字段，我们会依照需求人数决定开发顺序。"
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
