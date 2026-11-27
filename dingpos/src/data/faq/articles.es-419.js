// Generated from en and the es-419 translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync es-419`, then `npm run l10n -- dingpos apply es-419`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Primeros pasos",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Cobro",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Pedidos y devoluciones",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Productos, inventario y compras",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Reportes",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Promociones y lealtad",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Respaldo y datos",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Personal y permisos",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Suscripción y facturación",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Guías de configuración de promociones",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Próximamente",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "¿Cómo configuro mi tienda en DingPOS?",
    "keywords": [
      "configuración inicial",
      "empezar",
      "primeros pasos",
      "asistente de configuración",
      "abrir tienda",
      "configurar tienda",
      "país",
      "moneda",
      "impuestos"
    ],
    "content": [
      {
        "type": "p",
        "text": "La primera vez que abres DingPOS, un asistente de configuración abre tu tienda en dos pasos y unos pocos minutos:"
      },
      {
        "type": "steps",
        "items": [
          "Elige tu país o región. En la parte superior de la lista aparecen el país o la región donde está este iPad y los mercados más comunes; debajo están los 175 países y regiones donde DingPOS está en el App Store, con búsqueda por nombre en el idioma de la app o en inglés. Tu elección completa la moneda, los impuestos y el modo de impuesto.",
          "En Tu tienda, escribe el nombre de la tienda, agrega un logotipo si quieres y revisa la moneda, los impuestos y el modo de impuesto (incluido / no incluido). La moneda predeterminada es la de tu país; tócala para elegir entre 130 monedas. La lista de impuestos muestra los impuestos predeterminados de tu país: cámbiales el nombre, modifica una tasa, elimina uno o toca Agregar impuesto para añadir otra fila. Una tienda en Columbia Británica, por ejemplo, cambia la primera fila a «GST 5» y agrega una fila «PST 7»."
        ]
      },
      {
        "type": "p",
        "text": "Toca Continuar y verás «Ding! Tu tienda está lista». DingPOS también crea dos métodos de pago, Efectivo y Tarjeta de crédito. Después agrega tus productos en Productos y empieza a cobrar ventas."
      },
      {
        "type": "note",
        "text": "La moneda no se puede cambiar después de la configuración; los impuestos y el modo de impuesto sí se pueden cambiar más adelante en Ajustes → Datos de la tienda. En Estados Unidos, Canadá, Brasil y Micronesia la tasa depende del estado, la provincia o la ciudad, así que el campo de la tasa empieza vacío y, para continuar, escribes la tasa que cobras. La tasa debe ser mayor que 0: si una tienda no cobra impuesto, elimina la fila. En Alemania, Francia, Italia y otros países europeos, la lista también incluye las tasas reducidas comunes en el comercio local, con el nombre local del impuesto, como «MwSt. 19 %» y «MwSt. 7 %» en Alemania; las tasas reducidas no se aplican de forma predeterminada a los productos nuevos, así que actívalas producto por producto. La lista de 175 países y la elección de moneda llegaron en la v3.2; las versiones anteriores ofrecían 15 países."
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
    "question": "¿DingPOS funciona sin internet?",
    "keywords": [
      "sin conexión",
      "sin internet",
      "offline",
      "wifi",
      "red",
      "mercado",
      "punto de venta sin internet"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. DingPOS funciona sin conexión: el cobro, los productos, el inventario y los reportes se ejecutan en tu iPad, sin necesidad de red. Mercados nocturnos, puestos pop-up y otros lugares sin Wi-Fi funcionan sin problema."
      },
      {
        "type": "p",
        "text": "Solo dos cosas necesitan conexión: el respaldo en la nube (se sube a tu propio iCloud, Google Drive o Dropbox) y la verificación del estado de la suscripción."
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
    "question": "¿Necesito crear una cuenta para usar DingPOS?",
    "keywords": [
      "cuenta",
      "registrarse",
      "iniciar sesión",
      "crear cuenta",
      "privacidad"
    ],
    "content": [
      {
        "type": "p",
        "text": "No. DingPOS no tiene cuentas: descárgalo y empieza a vender. Tus productos, pedidos y datos de clientes se quedan en tu iPad. Solo llegan a nosotros si envías un informe de soporte desde Ajustes, que adjunta una copia de los datos de tu tienda para que podamos reproducir el problema."
      },
      {
        "type": "p",
        "text": "Si activas el respaldo en la nube, inicias sesión en tu propia cuenta (iCloud, Google Drive o Dropbox). Los respaldos quedan en tu cuenta y nosotros no podemos acceder a ellos."
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
    "question": "¿En qué dispositivos funciona DingPOS?",
    "keywords": [
      "dispositivo",
      "iphone",
      "mac",
      "ipad",
      "requisitos",
      "versión",
      "compatibilidad"
    ],
    "content": [
      {
        "type": "p",
        "text": "Por ahora DingPOS funciona en iPad con iPadOS 17.4 o posterior, y está pensado principalmente para usarse en horizontal."
      },
      {
        "type": "p",
        "text": "Todavía no es compatible con iPhone ni con Mac. Si quieres que admitamos otro dispositivo, escríbenos y cuéntanos cómo lo usarías."
      },
      {
        "type": "note",
        "text": "Todos los iPad que funcionan con iPadOS 17 pueden actualizarse a la 17.4, así que ningún modelo queda fuera. Un iPad que sigue en iPadOS 17.0–17.3 necesita primero una actualización del sistema, en Ajustes → General → Actualización de software, antes de poder instalar DingPOS v3.5 o posterior."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "¿Puedo cambiar la moneda, la tasa de impuesto o el modo de impuesto después de la configuración?",
    "keywords": [
      "moneda",
      "modo de impuesto",
      "cambiar",
      "bloqueado",
      "tasa de impuesto",
      "impuestos",
      "incluido",
      "no incluido"
    ],
    "content": [
      {
        "type": "p",
        "text": "El impuesto se puede cambiar; la moneda, no. Los impuestos y el modo de impuesto se cambian en la sección Impuesto de Ajustes → Datos de la tienda, y el cambio se aplica solo a las ventas posteriores: los pedidos anteriores, las devoluciones y los reportes conservan los montos de impuesto y el modo con que se registraron."
      },
      {
        "type": "list",
        "items": [
          "Impuestos: agrega uno, cámbiale el nombre, modifica su tasa o elimínalo; consulta «¿Cómo se calcula el impuesto?».",
          "Modo de impuesto (incluido / no incluido): toca el otro modo y la confirmación muestra un ejemplo con tu primer impuesto, como «un artículo de NT$100 con 5 % de impuesto: el cliente paga NT$105». Los precios conservan sus números, y un carrito abierto se recalcula con el nuevo modo cuando vuelves a la caja. El modo se puede cambiar desde la v3.5; las versiones anteriores lo bloquean en la configuración.",
          "Después de un cambio de modo, una devolución completa sigue reembolsando el pedido original tal como quedó. Un cambio (con artículos de reemplazo) sobre un pedido vendido con el otro modo se bloquea: vuelve a cambiar el modo, o devuelve los artículos y cóbralos de nuevo."
        ]
      },
      {
        "type": "p",
        "text": "La moneda se bloquea al terminar la configuración. Todos tus pedidos anteriores se registraron en ella, así que cambiarla después dañaría tus reportes. Revísala en el paso Tu tienda de la configuración: la moneda predeterminada es la de tu país y puedes tocarla para elegir otra."
      },
      {
        "type": "note",
        "text": "Si acabas de abrir tu tienda y aún no tienes datos importantes, puedes eliminar la app y volver a instalarla para repetir la configuración. Antes de eliminarla, asegúrate de que no haya nada que quieras conservar."
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
    "question": "¿Cómo cambio el idioma de la app?",
    "keywords": [
      "idioma",
      "inglés",
      "chino",
      "japonés",
      "español",
      "varios idiomas",
      "cambiar idioma",
      "lenguaje"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS está disponible en 32 idiomas, entre ellos inglés, chino tradicional y simplificado, japonés, coreano, tailandés, vietnamita, indonesio, malayo, español (Latinoamérica), portugués (Brasil), francés y alemán. Ve a Ajustes → Preferencias del dispositivo y toca Idioma de la app. Se abre la página de DingPOS en la app Ajustes del iPad, donde eliges el idioma en Idioma."
      },
      {
        "type": "p",
        "text": "iOS no permite que las apps abran directamente la lista de idiomas, así que el último toque se hace en los Ajustes del sistema. El idioma se aplica solo a este iPad."
      },
      {
        "type": "note",
        "text": "Los idiomas distintos del inglés y el chino tradicional llegaron en la v3.2. Si Idioma solo muestra inglés y chino, actualiza DingPOS desde el App Store."
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
    "question": "¿Cómo atiendo a varios clientes a la vez?",
    "keywords": [
      "carritos",
      "varios clientes",
      "en espera",
      "cambiar de carrito",
      "atender en paralelo",
      "fila"
    ],
    "content": [
      {
        "type": "p",
        "text": "La pantalla de caja maneja diez carritos al mismo tiempo. Toca «+» en la barra de carritos para agregar uno y toca una pestaña numerada para cambiar de carrito."
      },
      {
        "type": "p",
        "text": "Cada carrito se calcula por separado. Si el cliente A todavía está eligiendo, cambia a otro carrito y cobra primero al cliente B. El carrito se elimina solo cuando se completa su cobro."
      },
      {
        "type": "note",
        "text": "Los carritos se guardan solo en la memoria: los que no se hayan cobrado se borran al cerrar la app por completo."
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
    "question": "¿Cómo aplico descuentos?",
    "keywords": [
      "descuento",
      "porcentaje",
      "monto fijo",
      "rebaja",
      "precio con descuento"
    ],
    "content": [
      {
        "type": "p",
        "text": "Los descuentos funcionan en dos niveles, y cada uno admite un monto fijo o un porcentaje:"
      },
      {
        "type": "list",
        "items": [
          "Descuento en artículos: toca un artículo en el carrito → elige «Descuento» → ingresa un monto o un porcentaje.",
          "Descuento en el carrito: toca el botón «Descuento» debajo del carrito."
        ]
      },
      {
        "type": "p",
        "text": "Cada artículo y cada carrito pueden tener un solo descuento a la vez: si aplicas otro, reemplaza al anterior, y si tocas la insignia del descuento, se quita. Los descuentos se aplican antes del impuesto, el orden habitual en el comercio."
      },
      {
        "type": "p",
        "text": "Los descuentos que das seguido se pueden guardar: ve a Ajustes → Lealtad y promociones → Descuentos predefinidos y toca Agregar descuento predefinido, por ejemplo «Precio para el personal: 20 % de descuento». En la caja, tanto el descuento en artículos como el descuento en el carrito tienen un menú Predefinidos; al elegir uno, se completan el tipo y el valor del descuento exactamente como si los hubieras escrito, así que sigue contando para el tope de descuento del miembro del personal. Los descuentos predefinidos llegaron en la v3.6 y requieren el plan Standard o superior."
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
    "question": "¿Cómo se calcula el impuesto?",
    "keywords": [
      "impuesto",
      "IVA",
      "impuesto a las ventas",
      "incluido",
      "no incluido",
      "varios impuestos",
      "GST",
      "PST",
      "pausar impuesto",
      "recibo"
    ],
    "content": [
      {
        "type": "p",
        "text": "El impuesto se calcula automáticamente según los impuestos y el modo de impuesto que configuraste en Ajustes → Datos de la tienda. Hay dos modos de impuesto, y el recibo muestra el monto del impuesto en ambos:"
      },
      {
        "type": "list",
        "items": [
          "Incluido: los precios ya contienen el impuesto, el total no cambia y el recibo desglosa el impuesto incluido (común en Taiwán, Japón, etc.).",
          "No incluido: el impuesto se suma al monto con descuento al cobrar (común en Estados Unidos, Canadá, etc.)."
        ]
      },
      {
        "type": "p",
        "text": "Una tienda puede cobrar varios impuestos, como GST 5 % más PST 7 % en Columbia Británica, o el impuesto al consumo de 10 % de Japón junto con la tasa reducida de 8 %:"
      },
      {
        "type": "list",
        "items": [
          "En la sección Impuesto, toca Agregar impuesto e ingresa un nombre y una tasa. Activa Aplicar a productos nuevos y los productos que agregues después llevarán este impuesto por defecto. Si la tienda ya tiene un impuesto predeterminado, el que agregues empieza con ese interruptor desactivado; actívalo cuando se deban cobrar ambos.",
          "Cada producto elige los impuestos que cobra en Impuestos, dentro del formulario del producto: un bento podría cobrar solo la tasa reducida de 8 %. Con dos o más activados, el formulario muestra la tasa combinada del producto.",
          "Toca un impuesto para cambiarle el nombre o la tasa, o usa Aplicar a todos los productos o Quitar de todos los productos para agregarlo o quitarlo de todos los productos a la vez. Antes de eliminar un impuesto, la app te avisa a cuántos productos dejará de aplicarse.",
          "En una tienda con impuesto no incluido, los totales del carrito muestran una fila por impuesto, y el detalle del pedido lista una fila por impuesto con su tasa y el monto sobre el que se cobró."
        ]
      },
      {
        "type": "p",
        "text": "Para dejar de cobrar impuesto por un tiempo, desactiva Cobrar impuesto en la parte superior de la sección Impuesto: todas las ventas siguientes quedan sin impuesto, incluidos los artículos que ya estén en un carrito. Cada producto conserva sus impuestos, y al volver a activar el interruptor se restablecen tal como estaban."
      },
      {
        "type": "p",
        "text": "Orden completo del cálculo: descuentos y promociones en artículos → descuento en el carrito → canje de puntos → impuesto. Los montos se redondean hacia arriba desde la mitad (0.5 sube) según los decimales de la moneda (por ejemplo, 0 para TWD y 2 para USD). El impuesto se calcula una sola vez por cada impuesto en cada pedido, y sus decimales siguen la opción Redondeo del impuesto de la sección Impuesto: Redondear al más cercano, Redondear hacia abajo o Redondear hacia arriba. Las tiendas nuevas en Japón empiezan con Redondear hacia abajo; las demás empiezan con Redondear al más cercano."
      },
      {
        "type": "note",
        "text": "Los impuestos con nombre llegaron en la v3.5. Al actualizar, tu tasa de impuesto pasa a ser un impuesto con nombre (por ejemplo, «GST 10 %» en Australia) y todos los productos existentes lo llevan; una tienda cuya tasa era 0 no queda con impuesto. Los pedidos y las devoluciones anteriores conservan las tasas y los montos de impuesto con los que se registraron; los reportes ahora cuentan los ingresos antes de impuesto, también los de periodos pasados (consulta «¿Cuál es la diferencia entre ingresos por ventas y dinero recibido?»)."
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
    "question": "¿Qué métodos de pago puedo registrar en DingPOS?",
    "keywords": [
      "pago",
      "efectivo",
      "tarjeta de crédito",
      "line pay",
      "cambio",
      "personalizado",
      "a cuenta",
      "comisiones"
    ],
    "content": [
      {
        "type": "p",
        "text": "Una tienda nueva empieza con dos métodos de pago, Efectivo y Tarjeta de crédito, con el nombre en el idioma de la app al configurarla. En Ajustes → Métodos de pago puedes agregar cualquier otro método (por ejemplo, Apple Pay, LINE Pay o una billetera local) y reordenarlos. Toca un método para cambiarle el nombre, por ejemplo de Tarjeta de crédito a «Tarjeta (Square)»; Reportes cuenta las ventas hechas antes del cambio con el nombre nuevo (desde la v3.6). Eliminar método de pago está al final de la hoja de edición y pide confirmación antes de eliminar; los pedidos anteriores conservan el método con el que se pagaron, y el último método que queda no se puede eliminar."
      },
      {
        "type": "p",
        "text": "Los métodos de pago son etiquetas de registro: DingPOS no procesa pagos reales. Cobra con tarjeta o pago móvil en tu terminal o app de siempre y luego elige la etiqueta correspondiente en DingPOS para registrarlo. En los pagos en efectivo, el cambio se calcula automáticamente y, donde ya no se usan las monedas más pequeñas, el efectivo también se puede redondear. Consulta «¿Puedo redondear los pagos en efectivo a las monedas que se usan?»"
      },
      {
        "type": "p",
        "text": "Si tu proveedor de pagos con tarjeta o móvil cobra una comisión, asigna una tasa de comisión al método y Reportes estima las comisiones y el neto recibido de cada método. Consulta «¿DingPOS puede registrar las comisiones de pagos con tarjeta y pagos móviles?»"
      },
      {
        "type": "p",
        "text": "Si un cliente frecuente se lleva la mercancía ahora y paga después, elige A cuenta: la venta se registra como cuenta por cobrar y se liquida cuando llega el dinero. Consulta «¿Pueden mis clientes frecuentes comprar a cuenta y pagar después?»"
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
    "question": "¿DingPOS puede registrar las comisiones de pagos con tarjeta y pagos móviles?",
    "keywords": [
      "comisión por procesamiento",
      "comisión de tarjeta",
      "comisión por transacción",
      "tasa de comisión",
      "neto recibido",
      "comisión del procesador de pagos",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. En Ajustes → Métodos de pago, toca un método de pago (o agrega uno nuevo) y completa Comisión por procesamiento: un porcentaje, un monto fijo por transacción o ambos. Los métodos de tipo efectivo no tienen comisión. A partir de ahí, cada pago cobrado con ese método registra una comisión estimada con la tasa vigente en ese momento."
      },
      {
        "type": "p",
        "text": "En Reportes, la tarjeta Métodos de pago agrega la línea «Comisión · Neto» debajo de cada método que tiene comisión, y al pie de la tarjeta se muestran las comisiones estimadas y el neto estimado recibido de todo el periodo."
      },
      {
        "type": "list",
        "items": [
          "Escribe la tasa que tu proveedor descuenta realmente. Si se cobra impuesto sobre la comisión, inclúyelo: para 3 % más 5 % de impuesto, escribe 3.15 %. Deja ambos campos vacíos si no hay comisión.",
          "Un cambio de tasa solo se aplica a los pagos posteriores; las comisiones ya registradas se quedan como estaban.",
          "«Porcentaje devuelto en reembolsos» viene activado en las tiendas de Taiwán y Japón y desactivado en las demás, porque proveedores como Stripe, Square y PayPal se quedan con su comisión cuando haces un reembolso; configúralo según tu proveedor. Rige las devoluciones y los anticipos de preventa reembolsados: con la opción activada, el porcentaje se devuelve; la parte fija nunca. Una anulación o una reversión de liquidación ignora el interruptor y revierte toda la comisión que registró, parte fija incluida. En ambos casos, el cliente recibe de vuelta el mismo monto.",
          "Los pagos cobrados antes de que el método tuviera una tasa no llevan comisión: Reportes los marca como «N sin tasa» y muestra el neto como «—»."
        ]
      },
      {
        "type": "note",
        "text": "Las comisiones son estimaciones basadas en la tasa que escribes; el estado de cuenta de tu proveedor muestra el monto real. Editar las tasas de comisión requiere el plan Standard o superior, y en Lite los campos están bloqueados. Desde la v3.4, todos los planes ven las comisiones registradas en Reportes y en Resultados, así que una tasa definida durante la prueba sigue estimando comisiones en Lite; las versiones anteriores mostraban las comisiones solo a partir de Standard."
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
    "question": "¿Puedo redondear los pagos en efectivo a las monedas que se usan?",
    "keywords": [
      "redondeo de efectivo",
      "redondeo",
      "redondear hacia arriba",
      "redondear hacia abajo",
      "monedas",
      "centavos",
      "0.05",
      "cambio",
      "Canadá",
      "Australia",
      "Suiza"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Canadá, Australia, Nueva Zelanda, Suiza, Dinamarca, Suecia, Noruega, Bélgica, Finlandia y Hungría ya no usan sus monedas más pequeñas, así que DingPOS redondea el efectivo a un monto que sí se pueda entregar: un pedido de C$12.99 pagado en efectivo se cobra como C$13.00, y el cambio se calcula a partir de C$13.00. Los pagos con tarjeta y otros pagos sin efectivo se mantienen exactos."
      },
      {
        "type": "p",
        "text": "Una tienda nueva configurada en uno de estos países, con la moneda de ese país, lo recibe ya activado. Cualquier otra tienda puede activarlo en la sección Redondeo de efectivo, al final de Ajustes → Métodos de pago: elige a qué monto redondear el efectivo (Sin redondeo, o bien 0.05, 0.10, 0.50 o 1.00 en una moneda con centavos; 5, 10, 50 o 100 en una sin centavos, como TWD o JPY) y, en un incremento que puede quedar justo a la mitad, si esa mitad se redondea hacia arriba o hacia abajo. Un cambio se aplica solo a los pagos posteriores."
      },
      {
        "type": "list",
        "items": [
          "Al cobrar aparece «Efectivo cobrado C$13.00». Si el cliente pide pagar el monto exacto, toca Cobrar el monto exacto debajo de los métodos de pago; se aplica solo a esa venta.",
          "El total del pedido, el impuesto, los ingresos, los puntos y el gasto del cliente no cambian; la diferencia de redondeo queda en el pago, y la pantalla del recibo y el detalle del pedido la muestran debajo del total, como «Redondeo de efectivo +C$0.01».",
          "También se redondean los reembolsos en efectivo por devoluciones, los anticipos y saldos cobrados al retirar las preventas, las diferencias a cobrar en los cambios y los saldos a cuenta liquidados en efectivo; si se liquidan varios a la vez, el lote se redondea una sola vez.",
          "Las anulaciones, los anticipos reembolsados de preventas y las liquidaciones revertidas devuelven exactamente lo que se registró, sin redondear de nuevo.",
          "Dinero recibido en Reportes indica qué parte fue redondeo de efectivo, y los Resultados mensuales incluyen una fila Redondeo de efectivo que cuenta para la utilidad neta. El redondeo nunca es un ingreso por ventas."
        ]
      },
      {
        "type": "note",
        "text": "Suiza siempre redondea hacia abajo, conforme a sus reglas de exhibición de precios: CHF 12.98 se cobra como CHF 12.95, y no hay opción para la mitad. Bélgica redondea solo los totales superiores a €0.05. El redondeo de efectivo está en todos los planes, y una tienda existente cobra el efectivo exactamente como antes hasta que lo actives."
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
    "question": "¿Puedo desactivar el «Ding» después del cobro?",
    "keywords": [
      "sonido",
      "ding",
      "silenciar",
      "silencio",
      "sonido de cobro"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Ve a Ajustes → Preferencias del dispositivo y desactiva Sonido de cobro. Desde la siguiente venta, la pantalla de éxito queda en silencio, pero se conserva la vibración háptica."
      },
      {
        "type": "p",
        "text": "El interruptor aplica solo a este iPad, y restaurar un respaldo en la nube no lo modifica."
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
    "question": "¿Puedo ocultar los productos agotados en la pantalla de caja?",
    "keywords": [
      "ocultar",
      "agotado",
      "sin stock",
      "stock cero",
      "caja",
      "falta un producto",
      "no encuentro un producto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Ve a Ajustes → Preferencias del dispositivo y activa Ocultar productos agotados (viene desactivado). Entonces la cuadrícula de productos de la caja, el filtro de categorías y la búsqueda (por nombre y código de barras) omiten todo producto cuyo stock sea 0 o menos. El cambio se aplica al instante, sin necesidad de reabrir la app."
      },
      {
        "type": "list",
        "items": [
          "Los productos que no controlan stock siempre se muestran. Un producto con variantes se oculta solo cuando todas sus variantes están agotadas.",
          "Solo afecta a la caja de este iPad; la lista de Productos sigue mostrando todos los productos.",
          "Cuando todos los productos están ocultos, la caja muestra «Todos los productos están agotados» e indica dónde desactivar el interruptor."
        ]
      },
      {
        "type": "note",
        "text": "Mientras el interruptor está activado, este iPad no encuentra los productos agotados, así que no puede vender con stock negativo ni tomar una preventa de ellos; desactívalo cuando lo necesites. Si te parece que los productos desaparecieron de la caja, casi siempre es por este interruptor."
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
    "question": "Si cambio el precio de un producto, ¿se actualiza el carrito?",
    "keywords": [
      "cambio de precio",
      "actualizar precio",
      "carrito",
      "recalcular"
    ],
    "content": [
      {
        "type": "p",
        "text": "El carrito muestra el precio del momento en que se agregó el artículo. Al tocar para confirmar el cobro, DingPOS consulta de nuevo el precio más reciente de cada artículo; si algo cambió, te avisa con los precios actualizados antes de continuar."
      },
      {
        "type": "p",
        "text": "Las promociones también se vuelven a evaluar desde cero al confirmar. Si el total, el impuesto o algún descuento cambia por eso, se muestra un resumen de cambios y debes confirmar otra vez, de modo que el monto que ves es exactamente el que se registra."
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
    "question": "¿Puedo combinar descuentos manuales con promociones?",
    "keywords": [
      "descuento manual",
      "promoción",
      "combinar",
      "prevalece"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. La regla es «lo manual prevalece, cada nivel es independiente»:"
      },
      {
        "type": "list",
        "items": [
          "Descuento manual en un artículo: esa línea deja de recibir promociones por artículo, porque tu descuento manual se toma como la decisión final en el momento. Aun así, el monto de la línea cuenta para los umbrales de gasto.",
          "Descuento manual en el carrito: se aplica después de calcular todas las promociones, así que conviven. Si ingresas más que el total restante, se limita automáticamente y se muestra un aviso."
        ]
      },
      {
        "type": "p",
        "text": "Al quitar un descuento manual, la línea vuelve a ser elegible para promociones en la siguiente evaluación."
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
    "question": "¿Cómo agrego o cambio el cliente de una venta?",
    "keywords": [
      "cliente",
      "miembro",
      "asociar cliente",
      "cambiar cliente",
      "nuevo cliente",
      "cobro"
    ],
    "content": [
      {
        "type": "p",
        "text": "Asocia al cliente en el carrito o en la pantalla de cobro: la fila Cliente, debajo del monto, abre la lista de clientes cuando no hay nadie asociado, y ofrece Cambiar cliente o Quitar cliente cuando sí lo hay. El cliente que eliges al cobrar es el cliente del carrito, y se queda en el carrito si cancelas el cobro."
      },
      {
        "type": "list",
        "items": [
          "Al cambiar de cliente se recalculan de inmediato los descuentos por nivel, las ofertas de cumpleaños y el canje de puntos. El efectivo o el anticipo que ya ingresaste se conserva y se verifica contra el nuevo total.",
          "¿No lo encuentras? Toca Nuevo cliente en la parte superior derecha de la lista de clientes, o en el centro cuando nadie coincide con tu búsqueda. Lo que buscaste llena el formulario (los dígitos van al teléfono; cualquier otra cosa, al nombre) y el cliente nuevo se asocia a la venta.",
          "Si tocas A cuenta sin un cliente asociado, se abre la lista de clientes, y A cuenta queda seleccionado en cuanto eliges a alguien.",
          "Si el nuevo cliente hace que un descuento manual supere el tope de descuento del operador, primero lo aprueba un gerente; si cancelas la aprobación, el cliente queda como estaba."
        ]
      },
      {
        "type": "note",
        "text": "Clientes es una función del plan Standard; en Lite la fila dice «Clientes — plan Standard» y abre los detalles para mejorar de plan. La fila Cliente del cobro llegó en la v3.4; las versiones anteriores asocian al cliente solo desde el carrito."
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
    "question": "Me equivoqué al cobrar: ¿cómo anulo un pedido?",
    "keywords": [
      "anular pedido",
      "anular venta",
      "cancelar venta",
      "error al cobrar",
      "pedido equivocado"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ve a Pedidos, busca el pedido, abre su detalle y toca Anular. La hoja «¿Anular este pedido?» pide un motivo opcional (hasta 100 caracteres); toca Anular en su esquina superior derecha y listo. El motivo aparece en el detalle del pedido y en el registro de actividad, y no se puede editar una vez enviado."
      },
      {
        "type": "p",
        "text": "Al anular, todo lo relacionado se revierte automáticamente: el stock controlado se restituye, los puntos ganados con el pedido se descuentan y los puntos canjeados se devuelven. Los pedidos anulados siguen en la lista con una marca clara y no se cuentan en los ingresos por ventas de los reportes."
      },
      {
        "type": "note",
        "text": "Anular significa «esta venta nunca ocurrió»: úsalo para un pedido mal cobrado en el momento. Si un cliente devuelve la mercancía más tarde, usa Devolución: el pedido original se conserva, puedes devolver solo algunos artículos y los ingresos por ventas se reducen el día de la devolución."
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
    "question": "¿Cómo hago una devolución o un cambio de producto?",
    "keywords": [
      "devolución",
      "cambio",
      "reembolso",
      "devolución parcial",
      "cambiar talla",
      "desechar",
      "motivo de devolución"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ve a Pedidos, abre el pedido original y toca Devolución. Elige cuántas unidades de cada artículo regresan. Para un cambio, toca Agregar reemplazo en la misma pantalla; el monto neto se liquida de una vez: si es positivo, el cliente paga; si es negativo, tú reembolsas; y si es cero, no se mueve dinero."
      },
      {
        "type": "list",
        "items": [
          "El pedido original nunca se modifica. La devolución crea su propio documento con fecha de hoy y numeración con prefijo R, y los ingresos por ventas se reducen el día de la devolución.",
          "El reembolso es lo que el cliente realmente pagó por ese artículo: los descuentos del artículo, los descuentos del carrito y el canje de puntos ya están prorrateados, así que no se reembolsa al precio de lista. El impuesto usa la tasa con la que se cobró el pedido original.",
          "Los artículos de reemplazo se cobran al precio de hoy, sin promociones ni descuentos.",
          "En un producto con stock controlado, cada línea devuelta puede volver al stock (Reponer, la opción predeterminada) o desecharse (Desechar, desde la v3.5). Reponer suma el stock de nuevo. Desechar deja el stock como estaba y suma el costo que tenía el artículo al venderse a la pérdida de stock de ese mes en Resultados. El reembolso, el impuesto y los puntos son los mismos en ambos casos.",
          "Los puntos ganados con el pedido original se descuentan, los puntos canjeados se devuelven y los artículos de reemplazo generan sus propios puntos.",
          "Cuando el pedido original es una venta a cuenta sin liquidar, no se mueve dinero: la devolución se descuenta de las cuentas por cobrar del cliente, y un reemplazo más caro le suma la diferencia.",
          "Un pedido puede devolverse en varias rondas, pero nunca por más de la cantidad vendida originalmente; cuando todo ha regresado, el impuesto, los descuentos y los puntos devueltos suman exactamente lo del pedido original. Los límites de uso de las promociones no se restituyen con una devolución."
        ]
      },
      {
        "type": "p",
        "text": "El campo Motivo es opcional, de hasta 100 caracteres. Aparece en el detalle del pedido y en el registro de actividad, y no se puede editar una vez enviado."
      },
      {
        "type": "note",
        "text": "Las devoluciones no tienen límite de tiempo, pero se necesita el pedido original. Si registraste una devolución por error, anula la devolución y la cantidad devolvible se recupera."
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
    "question": "¿Cómo tomo una preventa con anticipo?",
    "keywords": [
      "preventa",
      "anticipo",
      "apartar",
      "retiro",
      "saldo",
      "reservar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Al cobrar, cambia la parte superior de la pantalla de Venta a Preventa, elige la fecha de retiro, ingresa el anticipo (desde 0 hasta el monto total, con atajos de 30 %, 50 % y total) y elige cómo se paga el anticipo. Asocia un cliente para poder avisarle sobre el retiro."
      },
      {
        "type": "list",
        "items": [
          "El stock se descuenta al registrar la preventa, así que la cantidad vendible lo refleja de inmediato. Es una señal, no una reserva: una venta posterior aún puede llevarse la última unidad. Los artículos agotados quedan en negativo y se recuperan cuando se recibe una orden de compra.",
          "Cuando el cliente venga por su pedido, toca Entregar en el detalle del pedido para cobrar el saldo. El pedido pasa a ser una venta completada normal, y las devoluciones posteriores siguen el flujo habitual.",
          "Si el cliente nunca llega, toca Cancelar pedido en el detalle del pedido y elige devolver o retener el anticipo. El stock se repone.",
          "El recibo del anticipo y el recibo final del retiro llevan el mismo número."
        ]
      },
      {
        "type": "p",
        "text": "En Reportes, los ingresos por ventas de una preventa se reconocen completos en la fecha de retiro, mientras que el anticipo cuenta como dinero recibido el día en que se paga; por eso las dos cifras difieren durante un tiempo. Consulta «¿Cuál es la diferencia entre ingresos por ventas y dinero recibido?»"
      },
      {
        "type": "note",
        "text": "Los artículos de una preventa no se pueden editar; si el cliente cambia de opinión, cancela y registra una nueva preventa. Crear preventas requiere el plan Standard o superior. Después de bajar de plan, las preventas existentes aún se pueden retirar o cancelar."
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
    "question": "¿Pueden mis clientes frecuentes comprar a cuenta y pagar después?",
    "keywords": [
      "venta a cuenta",
      "fiado",
      "crédito",
      "cuentas por cobrar",
      "liquidar",
      "pagar después"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Elige A cuenta como método de pago y la venta se registra como deuda del cliente. Una deuda necesita un responsable, así que, si no hay un cliente asociado, al tocar A cuenta se abre primero la lista de clientes (desde la v3.4; las versiones anteriores piden asociar un cliente en el carrito)."
      },
      {
        "type": "p",
        "text": "Para cobrar, cambia la parte superior de Pedidos a Cuentas por cobrar. Las deudas se agrupan por cliente; ábrelo para liquidar un solo pedido, un mes completo o todo; cada vez, DingPOS te pregunta cómo se pagó el dinero. Un pedido individual también se puede liquidar desde su detalle, y una liquidación registrada por error se puede deshacer con Revertir liquidación."
      },
      {
        "type": "list",
        "items": [
          "Los ingresos por ventas cuentan el día en que sale la mercancía; el dinero recibido y los puntos esperan hasta el día en que se liquida.",
          "Los pedidos sin liquidar llevan una insignia ámbar en la lista, y el detalle del cliente muestra cuánto debe en ese momento.",
          "Una devolución sobre un pedido que aún no se liquida no reembolsa dinero: el monto se descuenta de las cuentas por cobrar de ese cliente.",
          "Un cliente con pedidos sin liquidar no se puede eliminar."
        ]
      },
      {
        "type": "note",
        "text": "Crear ventas a cuenta requiere el plan Standard o superior. Después de bajar de plan no puedes iniciar nuevas, pero las cuentas por cobrar existentes se pueden consultar y liquidar."
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
    "question": "¿Puedo agregar notas a pedidos, clientes u órdenes de compra?",
    "keywords": [
      "nota",
      "notas",
      "apuntes",
      "comentario",
      "nota para pedido"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Las páginas de detalle de pedidos, clientes y órdenes de compra tienen notas: toca la tarjeta de notas para editar, hasta 500 caracteres, o la línea única «Agregar una nota» mientras no haya ninguna. También puedes escribir una en el formulario al crear un cliente o una orden de compra."
      },
      {
        "type": "p",
        "text": "Las notas no dependen del estado: se pueden agregar o editar en pedidos completados, pedidos anulados y devoluciones. Los montos y artículos de un pedido quedan fijos al cobrar; la nota va junto al documento y nunca cambia su contenido."
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
    "question": "¿Cómo creo productos con variantes (talla, color)?",
    "keywords": [
      "variantes",
      "talla",
      "color",
      "opciones",
      "especificaciones"
    ],
    "content": [
      {
        "type": "p",
        "text": "En la pantalla de edición del producto, toca Agregar opción en Opciones de variante para añadir una opción (por ejemplo, «Color») y luego usa «+ Valor» para agregar cada una de sus alternativas (por ejemplo, Rojo, Azul). Con dos o más opciones (por ejemplo, Color × Talla), DingPOS genera todas las combinaciones por ti (Rojo/S, Rojo/M, Azul/S…)."
      },
      {
        "type": "p",
        "text": "Cuando un producto tiene variantes, cada combinación en Precio y stock por variante lleva su propio stock, y su precio sigue al Precio del producto: una combinación sin precio propio muestra el precio del producto en gris y cambia cuando este cambia, y un número que escribes es el precio propio de esa combinación, que se muestra en negro. Por ejemplo, fija el Precio de una camiseta en 390 y cambia solo la L a 350: la M y la XL se venden a 390, y cuando el Precio pase después a 420, la M y la XL siguen a 420 mientras la L se queda en 350. El ⓘ junto a la columna Precio contiene Usar precio del producto, que hace que todas las combinaciones vuelvan a seguir el precio del producto. Los productos creados antes de la v3.6 conservan cada precio de variante como el precio propio de esa combinación, y el Precio del producto es el más bajo de ellos. La caja, la lista de productos y el detalle del producto muestran un rango del precio más bajo al más alto, como «NT$350–NT$390», o un solo precio cuando todas las combinaciones cuestan lo mismo; al ordenar por precio se usa el precio más bajo de las combinaciones. Al cobrar, al tocar el producto aparece un selector de variante antes de agregarlo al carrito."
      },
      {
        "type": "p",
        "text": "El costo funciona igual: un costo vacío muestra el costo del producto en gris y cambia cuando este cambia, y un número es el costo propio de la combinación, que se muestra en negro, incluido el 0. Usar costo del producto, en el ⓘ junto a la columna Costo, borra de una vez el costo propio de todas las combinaciones."
      },
      {
        "type": "note",
        "text": "Los nombres de opciones y valores están limitados a 20 caracteres, y los espacios al principio y al final se recortan al guardar. Un valor en el que no escribiste nada no es una combinación y se omite al guardar. El guardado se detiene, con el campo marcado con contorno rojo, cuando un nombre de opción está en blanco, cuando todos los valores de una opción están en blanco o cuando borras un valor que el producto ya tenía guardado; vuelve a escribirlo o quítalo con su ×. Un producto con variantes no puede usar precio abierto."
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
    "question": "¿Puedo escribir el precio de un producto al cobrar, como un costo de envío o un artículo negociado?",
    "keywords": [
      "precio abierto",
      "precio personalizado",
      "escribir precio",
      "costo de envío",
      "cargo por servicio",
      "precio negociado",
      "precio de mercado",
      "cargo por porcentaje"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí: conviértelo en un producto de precio abierto. Activa Precio abierto en la pantalla de edición del producto y deja el precio vacío; la caja y la lista de productos muestran «Precio abierto» donde iría el precio. Al cobrar, al tocar el producto primero se pide el precio; escríbelo y toca Agregar al carrito para agregarlo con ese precio."
      },
      {
        "type": "list",
        "items": [
          "0 es un precio válido (envío gratis, por ejemplo); un campo vacío no se puede agregar. Escribe el precio como tu tienda lo hace con todo lo demás, según su modo de impuesto.",
          "Un carrito tiene una sola línea por producto de precio abierto: al tocarlo de nuevo se abre esa línea para que cambies el precio.",
          "Desde la v3.3, Cobrar por alterna entre Monto y Porcentaje. Con 5 %, la línea equivale al 5 % del subtotal de los demás artículos (después de los descuentos por artículo, antes de las promociones, el descuento del carrito y el canje de puntos), redondeado a los decimales de la moneda con la mitad hacia arriba, y acompaña al carrito cuando se agregan, quitan o descuentan artículos. La línea del carrito dice «5 % del carrito», y el pedido registra el monto al que llegó.",
          "Una línea de precio abierto no admite descuento por artículo; para cobrar menos, cambia su precio. Los descuentos del carrito, el canje de puntos y las promociones (salvo que la excluyas de ellas) sí se le aplican.",
          "Al activar Precio abierto también se activa Excluir de promociones, para que un cargo no reciba descuento ni cuente para los montos mínimos de compra. Desactívalo de nuevo si un artículo negociado debe participar en promociones.",
          "Una vez vendida, la línea lleva impuesto, genera puntos y cuenta en Reportes como cualquier otra, y una devolución reembolsa el precio que se escribió.",
          "Un producto con variantes no puede usar precio abierto. Los productos de precio abierto nunca se ofrecen como regalos ni como complementos de pago, y nunca aparecen en la lista de reemplazo de un cambio."
        ]
      },
      {
        "type": "note",
        "text": "Está en todos los planes, y escribir el precio nunca necesita la aprobación de un gerente."
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
    "question": "¿Cómo funcionan los códigos de barras?",
    "keywords": [
      "código de barras",
      "escanear",
      "escáner",
      "duplicado",
      "cámara"
    ],
    "content": [
      {
        "type": "p",
        "text": "Los códigos de barras de los productos se pueden escribir a mano o escanear con la cámara. Deben ser únicos: si al guardar un código ya pertenece a otro producto, DingPOS te muestra a cuál."
      },
      {
        "type": "p",
        "text": "Al cobrar, el campo de búsqueda encuentra tanto nombres de productos como el inicio de los códigos de barras: escribe un código y el producto aparece al instante. Si te interesan los escáneres de código de barras físicos, consulta «¿Habrá compatibilidad con escáneres de códigos de barras físicos?»."
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
    "question": "¿Cómo cambio el orden en que aparecen los productos?",
    "keywords": [
      "ordenar",
      "orden",
      "reordenar",
      "acomodar",
      "arrastrar",
      "fijar al principio"
    ],
    "content": [
      {
        "type": "p",
        "text": "En Productos, toca Editar orden y arrastra las tarjetas de producto a donde quieras. La caja y la administración de productos comparten este mismo orden, así que al acomodarlo una vez se actualizan ambas."
      },
      {
        "type": "list",
        "items": [
          "Con un catálogo grande, el menú de cada tarjeta ofrece Mover al principio, Mover al final y Mover a la posición, y cada tarjeta muestra su posición actual.",
          "Filtra primero por una categoría para reordenar solo dentro de ella: los productos de otras categorías se quedan donde están.",
          "Los productos nuevos van al principio; editar los datos de un producto nunca cambia su posición."
        ]
      },
      {
        "type": "p",
        "text": "Para ordenar por un rato según nombre, precio o fecha de creación o actualización, usa el menú Ordenar por. Tu orden personalizado se conserva, y al volver a Orden manual se recupera."
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
    "question": "¿Cómo llevo el control de inventario?",
    "keywords": [
      "inventario",
      "stock",
      "control de inventario",
      "conteo",
      "stock bajo",
      "existencias"
    ],
    "content": [
      {
        "type": "p",
        "text": "El control de inventario se activa producto por producto: enciéndelo en la pantalla de edición del producto e ingresa la cantidad actual. Cada variante de un producto lleva su propio stock."
      },
      {
        "type": "p",
        "text": "Una vez activado, las ventas y las preventas descuentan el stock automáticamente; las anulaciones, las devoluciones y las preventas canceladas lo regresan; y recibir una orden de compra lo aumenta. Cada movimiento queda registrado en un historial completo. Con 10 o menos, el stock se marca como bajo en naranja en la lista de productos, en la caja y en el detalle del producto."
      },
      {
        "type": "p",
        "text": "Hay dos formas de cambiar la cifra a mano:"
      },
      {
        "type": "list",
        "items": [
          "Reconteo: edita el número de stock en el formulario del producto para que coincida con lo que realmente contaste. Nunca llega a Resultados.",
          "Ajustar stock (desde la v3.5): en el detalle del producto, toca Ajustar stock, elige Quitar o Agregar, la cantidad y un motivo, como Vencido/descompuesto, Dañado o Muestras y regalos. El costo de lo que quitas cuenta en la pérdida de stock de ese mes en Resultados; consulta «¿Cómo registro el stock que venció, se dañó o salió como muestra?»"
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
    "question": "¿Cómo registro el stock que venció, se dañó o salió como muestra?",
    "keywords": [
      "ajustar stock",
      "pérdida de stock",
      "vencido",
      "dañado",
      "muestras",
      "insumos de la tienda",
      "reconteo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Usa Ajustar stock. En un producto con control de stock, toca Ajustar stock en el detalle del producto, elige Quitar o Agregar, fija la cantidad con + y − (empieza en 1; toca el número para escribirlo), elige un motivo y, si quieres, agrega una nota (hasta 100 caracteres). La hoja calcula el stock que quedará después del cambio, y la línea debajo del motivo indica si llega a Resultados."
      },
      {
        "type": "list",
        "items": [
          "Motivos para quitar: Usado en producción, Vencido/descompuesto, Dañado, Perdido o robado, Uso del personal, Muestras y regalos, Insumos de la tienda y Otro. Motivos para agregar: Producción propia, Encontrado y Otro. Otro requiere una nota.",
          "Salvo Usado en producción, lo que quitas cuenta, a su costo en ese momento, en la pérdida de stock de ese mes en Resultados. Va después de la utilidad bruta y reduce la utilidad neta; la utilidad bruta y el margen no cambian. Usado en producción solo descuenta el stock, porque el costo de un material ya está en el costo del producto elaborado con él.",
          "Encontrado resta ese mismo monto de la pérdida de stock. Producción propia y Otro en el lado de Agregar solo suman stock y nunca llegan a Resultados.",
          "Un ajuste cuenta en el día en que lo registras. No se puede poner con fecha anterior, editar ni eliminar; para corregir un error, registra Encontrado o un ajuste en sentido contrario.",
          "Un producto sin costo sí se puede ajustar, pero Resultados no puede ponerle un monto, y el mes indica cuántos registros no tenían costo."
        ]
      },
      {
        "type": "p",
        "text": "Editar el número de stock en el formulario del producto es un Reconteo: coincide con lo que realmente contaste y nunca llega a Resultados. La lista de movimientos de stock en Reportes filtra por separado los ajustes de stock y los reconteos, y el Registro de actividad muestra el motivo y la nota de cada ajuste."
      },
      {
        "type": "note",
        "text": "Ajustar stock requiere el plan Standard o superior. En Pro, al personal cuyo rol requiere aprobación para Ajuste manual de stock se le pide el PIN de un gerente al confirmar."
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
    "question": "¿Por qué el stock puede quedar en negativo?",
    "keywords": [
      "negativo",
      "stock negativo",
      "agotado",
      "bloquear venta",
      "ajustar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Es a propósito: el cobro nunca se bloquea por falta de stock. La primera regla de una caja en funcionamiento es que el cliente no espere: un número equivocado en papel se puede corregir después, pero una venta interrumpida se pierde para siempre."
      },
      {
        "type": "p",
        "text": "Un stock negativo suele significar que no se registró una reposición, o que un producto de preventa aún no llega (las preventas descuentan el stock al registrarse). Registra las reposiciones recibiendo una orden de compra y la cifra se recupera sola. Corrige la diferencia de un conteo físico editando el número de stock en el formulario del producto (un reconteo); para la mercancía que se dañó, venció o se regaló, registra el motivo con Ajustar stock. Ambos quedan guardados en el historial de movimientos."
      },
      {
        "type": "note",
        "text": "Si en la caja no encuentras un producto con stock 0, revisa si Ocultar productos agotados está activado en Ajustes → Preferencias del dispositivo: mientras lo esté, este iPad no puede agregar productos agotados a un carrito."
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
    "question": "¿Cómo registro mis compras y proveedores?",
    "keywords": [
      "orden de compra",
      "compras",
      "proveedor",
      "recibir mercancía",
      "reposición",
      "cuentas por pagar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Compras, en la barra lateral, administra proveedores y órdenes de compra. Un proveedor guarda nombre, persona de contacto, teléfono, dirección y una condición de pago predeterminada: Pago al recibir o Crédito mensual."
      },
      {
        "type": "steps",
        "items": [
          "Toca Nueva compra, elige el proveedor y agrega los productos, cantidades y costos unitarios (que se rellenan con el costo actual de cada producto). También puedes agregar un costo de envío. Para mercancía que aún no está configurada como producto, toca Nuevo producto en el selector Agregar producto: el nuevo producto entra directo en la orden de compra como una línea. Si el proveedor aún no existe, toca Agregar proveedor en la parte superior izquierda de la lista de proveedores: el nuevo proveedor vuelve directo a la orden de compra.",
          "Un borrador nunca afecta el stock ni las cuentas por pagar: edítalo o elimínalo con libertad.",
          "Cuando llegue la mercancía, toca Recibir stock: el stock con control sube, y la orden de compra recibe su número y se bloquea. De forma predeterminada, al recibir también se actualiza el costo de cada producto con este costo unitario; desactiva Sincronizar costo del producto en la orden de compra para dejar los costos sin cambios. Debajo, Incluir envío en el costo (activado en las órdenes de compra nuevas) reparte el costo de envío entre las líneas según su monto, de modo que el costo que se registra en cada producto incluye su parte: con harina 10 × $30, mantequilla 1 × $60 y $25 de envío, la harina queda con un costo de $32 y la mantequilla de $64."
        ]
      },
      {
        "type": "p",
        "text": "La condición de pago decide qué sigue: las órdenes con Pago al recibir se marcan como pagadas, mientras que las de Crédito mensual quedan pendientes en Por pagar, donde puedes saldarlas por proveedor: una orden, el mes o todo."
      },
      {
        "type": "p",
        "text": "Los materiales que no vendes, como harina o empaques, se pueden comprar de la misma forma: configúralos como productos que no se venden; consulta «¿Puedo agregar materiales como harina o empaques como productos?»"
      },
      {
        "type": "note",
        "text": "Compras requiere el plan Standard o superior. No se puede eliminar un proveedor con órdenes recibidas sin pagar."
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
    "question": "¿Puedo agregar materiales como harina o empaques como productos?",
    "keywords": [
      "no se vende",
      "producto que no se vende",
      "materiales",
      "insumos",
      "empaques",
      "suministros",
      "vender en la caja",
      "compras",
      "costo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. En el formulario del producto, desactiva Vender en la caja debajo de la foto (viene activado de forma predeterminada) y el producto deja de venderse: no necesita precio, conserva su costo, código de barras, stock y variantes, y la lista de productos muestra «No se vende» donde iría el precio."
      },
      {
        "type": "list",
        "items": [
          "Un producto que no se vende nunca aparece en la cuadrícula de la caja, en las categorías, en la búsqueda ni al escanear códigos de barras, y no puede ser un regalo, un complemento, el objetivo de una promoción ni un artículo de reemplazo en un cambio. Una categoría que solo tiene productos que no se venden no aparece en la barra de categorías de la caja.",
          "Cuando la tienda tiene productos que no se venden, aparece un botón de filtro en la parte superior derecha de Productos: elige Todos los productos, Se vende o No se vende, y funciona junto con la búsqueda y las categorías.",
          "Las órdenes de compra, la recepción, Sincronizar costo del producto y Por pagar funcionan igual que con los demás productos, así que el costo de compra y el stock de un material se pueden registrar desde Compras.",
          "Vender otros productos no le descuenta stock. Cuando uses una parte, registra una reducción con Ajustar stock en el detalle del producto: Usado en producción para lo que entró en los productos, Insumos de la tienda para cosas como bolsas de papel o productos de limpieza.",
          "Puedes volver a activarlo en cualquier momento, y su precio e impuestos siguen ahí. Los pedidos y reportes ya hechos no se ven afectados."
        ]
      },
      {
        "type": "p",
        "text": "Cómo llega su costo a Resultados: las compras no cuentan ahí directamente. Para un producto elaborado con él, incluye el costo en ese producto y se descuenta cuando ese producto se vende. Los insumos que no están en el costo de ningún producto se registran como Insumos de la tienda al usarlos si se lleva el control de su stock, o como un gasto puntual si no. No registres el mismo dinero de las dos formas, o se contará dos veces."
      },
      {
        "type": "note",
        "text": "Los productos que no se venden están en todos los planes; las compras, el control de stock y Ajustar stock requieren el plan Standard o superior."
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
    "question": "¿Cuál es la diferencia entre ingresos por ventas y dinero recibido?",
    "keywords": [
      "ingresos por ventas",
      "dinero recibido",
      "reportes",
      "utilidad bruta",
      "de los ingresos por ventas a la utilidad bruta",
      "conciliar",
      "anticipo",
      "venta a cuenta",
      "impuesto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Los ingresos por ventas cuentan el día en que se entregó la mercancía, después de todos los descuentos y antes de impuestos; el dinero recibido cuenta el día en que entró el dinero y es lo que cobraste, con impuestos incluidos. En una tienda que cobra impuesto, el dinero recibido es mayor que los ingresos por ventas por el monto del impuesto, incluso en pedidos pagados en el mostrador. Ambos aparecen como los dos primeros mosaicos de la primera fila de Reportes, junto con Utilidad bruta, Pedidos y Pedido promedio."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Filas de mosaicos de Reportes con Ingresos por ventas y Dinero recibido lado a lado en la primera fila"
      },
      {
        "type": "h2",
        "text": "Cuando los ingresos por ventas y el dinero recibido difieren"
      },
      {
        "type": "p",
        "text": "Por ejemplo, si una tienda con precios con impuesto incluido vende NT$1,050 con 5% de impuesto y el cliente paga en el mostrador, los ingresos por ventas son NT$1,000 y el dinero recibido es NT$1,050. Además del impuesto, las dos cifras se separan en estos casos:"
      },
      {
        "type": "list",
        "items": [
          "Venta a cuenta: la mercancía sale hoy y cuenta en los ingresos por ventas de hoy; el dinero cuenta en el dinero recibido el día en que se liquida el pedido.",
          "Preventa: el anticipo cuenta en el dinero recibido cuando se paga; los ingresos por ventas se reconocen completos en la fecha de retiro.",
          "Anticipos retenidos: cuando un cliente cancela una preventa y te quedas con el anticipo, este ya se contó en el dinero recibido al pagarse. Reportes lo muestra por separado como Anticipos retenidos y nunca cuenta como ingresos por ventas.",
          "Anulación de un pedido anterior: el dinero reembolsado cuenta en el dinero recibido el día de la anulación, por lo que el dinero recibido de ese día puede ser negativo. El pedido anulado se cuenta en su fecha de venta y aparece en el subtítulo del mosaico Pedidos.",
          "Redondeo de efectivo: cualquier monto que el redondeo de efectivo cobre de más o de menos respecto al total del pedido cuenta en el dinero recibido y nunca en los ingresos por ventas."
        ]
      },
      {
        "type": "p",
        "text": "Cuando alguno de los dos montos es distinto de cero, el subtítulo del mosaico Dinero recibido muestra el Redondeo de efectivo o los Anticipos retenidos."
      },
      {
        "type": "h2",
        "text": "Impuesto y detalles de los mosaicos"
      },
      {
        "type": "p",
        "text": "El impuesto que separa los ingresos por ventas del dinero recibido aparece en De los ingresos por ventas a la utilidad bruta, que se abre desde el pie del mosaico Utilidad bruta. Muestra Ingresos por ventas (con impuesto), Impuesto e Ingresos por ventas (sin impuesto). Las tiendas de Australia, el Reino Unido, Nueva Zelanda y Singapur ven ahí el nombre local del impuesto, como Ingresos por ventas (con GST), GST e Ingresos por ventas (sin GST)."
      },
      {
        "type": "p",
        "text": "Para ver el impuesto cobrado y declararlo, abre Reporte de impuestos desde el mosaico Impuesto."
      },
      {
        "type": "p",
        "text": "El ⓘ de los mosaicos Ingresos por ventas, Dinero recibido y Pedidos explica estas reglas en la app, incluidos los pedidos anulados que aparecen en el subtítulo del mosaico Pedidos."
      },
      {
        "type": "h2",
        "text": "Conciliar y leer las ventas"
      },
      {
        "type": "p",
        "text": "Para conciliar, compara el dinero recibido con tu caja y tu terminal de tarjetas. La tarjeta Métodos de pago de Reportes muestra una fila por método, y las ventas hechas antes de que renombres un método se cuentan con el nombre nuevo. Para saber cuánto vendiste en un periodo, mira los ingresos por ventas. Las devoluciones restan de los ingresos por ventas el día de la devolución."
      },
      {
        "type": "note",
        "text": "Los ingresos por ventas sin impuesto llegaron en la v3.5 y los periodos anteriores se recalcularon de la misma forma, así que una tienda que cobra impuesto ve ingresos por ventas menores que antes de la actualización. Es una corrección: las versiones anteriores incluían el impuesto en los ingresos por ventas, y las tiendas con precios sin impuesto incluso contaban como ingresos el impuesto que cobraban."
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
    "question": "¿Qué periodos puedo ver en los reportes?",
    "keywords": [
      "reportes",
      "estadísticas de ventas",
      "periodo",
      "esta semana",
      "este mes",
      "rango personalizado",
      "ranking de productos",
      "productos de baja rotación",
      "día × hora",
      "valuación de inventario"
    ],
    "content": [
      {
        "type": "p",
        "text": "Elige Hoy, Ayer, Esta semana, Este mes, Este año o Todo el tiempo en la barra de periodo de la parte superior de Reportes, o toca Personalizado para elegir cualquier fecha de inicio y de fin. Todas las tarjetas de la página siguen el periodo que elijas. Esta semana sigue el primer día de la semana del dispositivo, Este mes empieza el día 1, Este año empieza el 1 de enero, Todo el tiempo empieza desde la primera transacción de tu tienda, y cada opción muestra las fechas que abarca."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Barra de periodo en la parte superior de Reportes con Personalizado seleccionado y su ventana abierta para elegir las fechas de Inicio y Fin"
      },
      {
        "type": "h2",
        "text": "Elegir un rango personalizado"
      },
      {
        "type": "p",
        "text": "Usa Personalizado cuando necesites un rango distinto de los periodos de calendario predefinidos, como un periodo de declaración de impuestos de dos meses o trimestral."
      },
      {
        "type": "steps",
        "items": [
          "Abre Reportes y toca Personalizado en la barra de periodo.",
          "Elige las fechas de inicio y de fin en la ventana.",
          "Confirma las fechas para actualizar el reporte."
        ]
      },
      {
        "type": "p",
        "text": "El mosaico Impuesto y el reporte de impuestos también siguen el periodo elegido, así que al fijar un rango de declaración con Personalizado se actualizan ambos; consulta el artículo relacionado sobre el reporte de impuestos. A la derecha de la barra de periodo, toca Comparar para ver el periodo elegido junto al anterior o al mismo periodo del año pasado; consulta el artículo relacionado sobre cómo comparar periodos."
      },
      {
        "type": "h2",
        "text": "Mosaicos y tarjetas de la página"
      },
      {
        "type": "p",
        "text": "Debajo de la barra de periodo, Reportes muestra dos filas de mosaicos con cifras, seguidas de gráficos y tarjetas de resumen en pares, con Ahora mismo al final."
      },
      {
        "type": "list",
        "items": [
          "Primera fila de mosaicos: Ingresos por ventas, Dinero recibido, Utilidad bruta, Pedidos y Pedido promedio.",
          "Segunda fila de mosaicos: Descuentos totales, Impuesto, Utilidad neta, Productos sin costo y Clientes atendidos.",
          "Primer par: el gráfico de tendencia de ventas junto a Costo y utilidad bruta.",
          "Segundo par: Ranking de productos junto a Participación por categoría.",
          "Tercer par: Métodos de pago junto a la tarjeta de promociones.",
          "Tarjeta final: Ahora mismo."
        ]
      },
      {
        "type": "p",
        "text": "Dos mosaicos de la segunda fila aparecen solo en casos específicos. Impuesto, agregado en la v3.6, aparece solo en una tienda con impuestos o cuando el periodo elegido tiene ventas hechas con un impuesto. Utilidad neta aparece solo cuando el periodo es Este mes o abarca exactamente un mes completo."
      },
      {
        "type": "note",
        "text": "Si un periodo no tiene pedidos, Reportes muestra solo la barra de periodo, un mensaje y Ahora mismo."
      },
      {
        "type": "h2",
        "text": "Leer los gráficos y el Ranking de productos"
      },
      {
        "type": "p",
        "text": "El menú de la esquina superior derecha del gráfico de tendencia de ventas lo cambia entre Ingresos por ventas, Pedidos, Pedido promedio y Clientes atendidos. Junto a él, el gráfico Costo y utilidad bruta apila en una barra el costo de los productos y la utilidad bruta de cada periodo. Un solo día se grafica por hora; los periodos más largos agrupan los datos por días, semanas, meses o años según su duración."
      },
      {
        "type": "p",
        "text": "Mantén presionado el gráfico de tendencia de ventas, Costo y utilidad bruta o Métodos de pago para ver una tarjeta con la lectura de un intervalo. Con Comparar activado, la tarjeta del gráfico de tendencia de ventas muestra la cifra de este periodo y la del periodo de comparación una junto a la otra. Arrastra a la izquierda o a la derecha para avanzar por los intervalos; si deslizas hacia arriba o hacia abajo sobre el gráfico, la página se desplaza como siempre."
      },
      {
        "type": "p",
        "text": "Cambia el encabezado del gráfico de tendencia de Tendencia a Día × hora para ver un mapa de calor de siete días y 24 horas. Cuanto más oscura es una celda, más vendiste en esa hora, y puedes alternar el mapa de calor entre ingresos por ventas y pedidos."
      },
      {
        "type": "p",
        "text": "Ranking de productos muestra los 5 productos principales del periodo elegido. Toca la tarjeta o Ver todo para listar todos los productos vendidos en ese periodo, ordenados por cantidad después de devoluciones. Un producto con variantes aparece con una línea por variante."
      },
      {
        "type": "p",
        "text": "Cambia el encabezado de la tarjeta de ranking a Productos de baja rotación para listar los productos de menos a más ventas. Cada fila muestra el stock actual del producto y la última fecha en que se vendió. Los productos que nunca se vendieron aparecen como Nunca vendido, y de forma predeterminada solo se muestran los productos con stock. El encabezado Variaciones lista los productos cuyos ingresos por ventas más subieron o bajaron frente a un periodo de comparación; consulta el artículo relacionado sobre cómo comparar periodos."
      },
      {
        "type": "h2",
        "text": "Participación por categoría, tasa de recompra y Ahora mismo"
      },
      {
        "type": "p",
        "text": "Participación por categoría lista los ingresos por ventas de cada categoría y su participación, de mayor a menor, según la categoría actual de cada producto. Los productos sin categoría van en Sin categoría, y las filas suman exactamente los ingresos por ventas."
      },
      {
        "type": "p",
        "text": "La última línea del mosaico Clientes atendidos muestra la tasa de recompra como «Tasa de recompra … · … miembros volvieron a comprar». Es la proporción de miembros que compraron en el periodo elegido y que han comprado dos o más veces en total."
      },
      {
        "type": "p",
        "text": "Ahora mismo muestra tres datos de inventario y puntos:"
      },
      {
        "type": "list",
        "items": [
          "Valuación de inventario, calculada como stock actual × costo actual.",
          "Todos los movimientos de stock del periodo seleccionado.",
          "Los puntos que los clientes tienen sin canjear, junto con el máximo que pueden descontar."
        ]
      },
      {
        "type": "p",
        "text": "La valuación de inventario y los puntos sin canjear son saldos actuales, así que cambiar el periodo en la parte superior no los modifica."
      },
      {
        "type": "note",
        "text": "El personal ve Reportes con el permiso de Reportes; los montos de Valuación de inventario además requieren el permiso de Costos y utilidad."
      },
      {
        "type": "note",
        "text": "Los periodos de calendario llegaron en la v2.4; las versiones anteriores ofrecían rangos móviles (Hoy / 7 días / 30 días / Todo el tiempo). Si aún ves esas opciones, actualiza DingPOS desde el App Store."
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
    "question": "¿Cómo comparo las ventas con la semana pasada, el mes pasado o el año pasado?",
    "keywords": [
      "comparar",
      "comparación de periodos",
      "semana pasada",
      "mes pasado",
      "año pasado",
      "mismo periodo del año pasado",
      "variaciones",
      "reportes",
      "crecimiento de ventas",
      "tasa de recompra"
    ],
    "content": [
      {
        "type": "p",
        "text": "Toca Comparar, a la derecha de la barra de periodo de Reportes, y elige un periodo anterior, como Semana pasada o Año pasado. Cada mosaico muestra entonces cuánto subió o bajó su cifra, por ejemplo «▼ 3% vs. Mes pasado», con la cifra del periodo de comparación debajo."
      },
      {
        "type": "h2",
        "text": "Activar una comparación"
      },
      {
        "type": "steps",
        "items": [
          "Abre Reportes desde la barra lateral.",
          "Elige un periodo en la parte superior.",
          "Toca Comparar, a la derecha de la barra de periodo.",
          "Elige una opción de comparación en el menú."
        ]
      },
      {
        "type": "p",
        "text": "Las opciones disponibles dependen del periodo que elijas:"
      },
      {
        "type": "list",
        "items": [
          "Ninguno desactiva la comparación.",
          "Semana pasada compara un solo día con el mismo día de la semana pasada, o esta semana con la semana pasada.",
          "Mes pasado compara este mes con el mes pasado.",
          "Año pasado compara este año con el año pasado, o el periodo elegido con el mismo periodo del año pasado.",
          "Anterior compara un rango personalizado con la misma cantidad de días inmediatamente anteriores."
        ]
      },
      {
        "type": "p",
        "text": "Con una comparación activa, Reportes agrega el cambio y la cifra del periodo de comparación a todos los mosaicos, excepto Impuesto, Utilidad neta y Productos sin costo. Ingresos por ventas, Dinero recibido, Utilidad bruta, Pedidos, Pedido promedio, Descuentos totales y Clientes atendidos muestran cada uno una línea de comparación, como «▼ 3% vs. Mes pasado»."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Reportes en Esta semana con Comparar en Semana pasada, con la barra de comparación y la primera fila de mosaicos, cada uno con su cambio y la cifra de comparación debajo",
        "caption": "Toca cualquier línea de comparación debajo de un mosaico para abrir Comparación de periodos y ver las cifras de ambos periodos."
      },
      {
        "type": "p",
        "text": "El cambio en Descuentos totales siempre es gris, porque un descuento mayor no es bueno ni malo por sí mismo. Toca cualquier línea de comparación para abrir Comparación de periodos, que lista las cifras de ambos periodos. El gráfico de tendencia agrega una línea más clara para el periodo de comparación. Mientras un periodo sigue en curso, el periodo de comparación se corta en el mismo momento."
      },
      {
        "type": "h2",
        "text": "Variaciones"
      },
      {
        "type": "p",
        "text": "Cambia el encabezado de la tarjeta de ranking a Variaciones para ver los 3 productos cuyos ingresos por ventas más subieron y los 3 que más bajaron respecto al periodo de comparación. Cada fila muestra los ingresos por ventas de ambos periodos y la diferencia, y cada variante se compara consigo misma."
      },
      {
        "type": "p",
        "text": "Primero elige un periodo en Comparar. Con Comparar en Ninguno, o con el periodo Todo el tiempo, la tarjeta te pide elegir un periodo de comparación. Toca la tarjeta o Ver todo para abrir la lista completa de Variación de productos, dividida en En alza y En baja."
      },
      {
        "type": "h2",
        "text": "Mapa de calor y tasa de recompra"
      },
      {
        "type": "p",
        "text": "Con una comparación activada, el mapa de calor Día × hora del gráfico de tendencia también muestra qué horas crecieron y cuáles bajaron, y la tasa de recompra del mosaico Clientes atendidos agrega una línea con el cambio en puntos porcentuales y la tasa del periodo de comparación."
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
    "question": "¿Cómo se reporta la utilidad bruta si no registré los costos?",
    "keywords": [
      "costo",
      "utilidad bruta",
      "margen",
      "margen bruto",
      "reportes",
      "sin registrar",
      "costo faltante",
      "productos sin costo",
      "de los ingresos por ventas a la utilidad bruta"
    ],
    "content": [
      {
        "type": "p",
        "text": "El costo es un campo opcional, así que los productos sin costo se dejan fuera de la utilidad bruta, pero sus ingresos por ventas se cuentan completos. El mosaico Productos sin costo de Reportes muestra cuántos productos vendidos o devueltos en el periodo no tienen costo, como «12 productos». Un costo de 0 cuenta como costo y no aparece en la lista; cuando todos los productos tienen costo, el mosaico dice «0 productos · costos completos»."
      },
      {
        "type": "h2",
        "text": "Encontrar los productos sin costo"
      },
      {
        "type": "p",
        "text": "En Reportes, toca el mosaico Productos sin costo o Ver productos para abrir Productos sin costo. La hoja lista los productos ordenados de mayor a menor por los ingresos por ventas que quedan fuera de la utilidad bruta."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Hoja Productos sin costo con los productos ordenados por los ingresos por ventas que quedan fuera de la utilidad bruta"
      },
      {
        "type": "steps",
        "items": [
          "Toca una fila de Productos sin costo para abrir el producto.",
          "Toca Editar e ingresa el costo en Costo (opcional).",
          "Regresa a Productos sin costo para ver la fila marcada como Costo agregado."
        ]
      },
      {
        "type": "p",
        "text": "Un producto con variantes se marca como Costo agregado solo cuando cada variante vendida sin costo ya tiene uno: el suyo o el del producto, que se aplica a las variantes que no tengan costo propio. Desde la v3.6, una orden de compra también puede repartir su envío en el costo del producto que registra cuando Incluir envío en el costo está activado."
      },
      {
        "type": "note",
        "text": "Un costo que agregas afecta solo a las ventas posteriores. Las ventas ya hechas no se recalculan."
      },
      {
        "type": "h2",
        "text": "Ingresar el costo y el impuesto"
      },
      {
        "type": "p",
        "text": "En el formulario del producto, el campo de costo dice Costo (opcional) en todas las tiendas. En una tienda con impuestos, junto a Costo (opcional) aparece un ⓘ que explica cómo se aplica el impuesto según Acreditar impuesto de facturas:"
      },
      {
        "type": "list",
        "items": [
          "Acreditar impuesto de facturas está activado: ingresa el costo antes del impuesto que puedas acreditar. La nota del ⓘ dice: «Ingresa el costo sin el impuesto que puedes acreditar, que va en el impuesto acreditable. El impuesto que no puedes acreditar forma parte del costo.»",
          "Acreditar impuesto de facturas está desactivado: ingresa lo que pagaste, menos el impuesto que puedas acreditar. La nota del ⓘ dice: «El impuesto que puedes acreditar no forma parte del costo; el que no puedes acreditar sí. Si acreditas impuesto de facturas, activa Acreditar impuesto de facturas en Datos de la tienda.»"
        ]
      },
      {
        "type": "p",
        "text": "Si tu tienda declara el impuesto acreditable, activa Acreditar impuesto de facturas en Datos de la tienda."
      },
      {
        "type": "h2",
        "text": "Leer el desglose de la utilidad bruta"
      },
      {
        "type": "p",
        "text": "La utilidad bruta son los ingresos por ventas después de todos los descuentos (descuentos de artículo y de carrito, promociones, canje de puntos) y antes de impuestos, menos el costo. El margen es la utilidad bruta ÷ los ingresos por ventas de los productos con costo, así que los productos sin costo no lo reducen. Una devolución quita, el día de la devolución, la utilidad bruta que esos artículos habían aportado."
      },
      {
        "type": "p",
        "text": "Toca el mosaico Utilidad bruta de Reportes para abrir De los ingresos por ventas a la utilidad bruta, que resta fila por fila:"
      },
      {
        "type": "list",
        "items": [
          "Ingresos por ventas (con impuesto)",
          "Impuesto",
          "Ingresos por ventas (sin impuesto)",
          "Ingresos sin costo",
          "Costo de productos",
          "Utilidad bruta y margen"
        ]
      },
      {
        "type": "p",
        "text": "Las filas suman exactamente el mosaico Utilidad bruta. Las tiendas de Australia, el Reino Unido, Nueva Zelanda y Singapur ven el nombre local del impuesto en las filas de impuesto, como Ingresos por ventas (con GST)."
      },
      {
        "type": "note",
        "text": "Este cálculo de la utilidad bruta llegó en la v3.1. Las versiones anteriores solo descontaban los descuentos manuales por artículo y contaban el impuesto incluido como utilidad, así que después de actualizar, los periodos con descuentos o con impuesto incluido muestran una utilidad bruta menor. Es una corrección, no una pérdida de datos."
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
    "question": "¿Cómo veo cuánto gané realmente cada mes?",
    "keywords": [
      "estado de resultados",
      "pérdidas y ganancias",
      "resultados",
      "utilidad neta",
      "utilidad mensual",
      "gastos fijos",
      "utilidad operativa",
      "p&l"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abre Resultados, debajo de Reportes en la barra lateral, para ver la utilidad neta de cada mes y cómo se calcula. La lista va del mes más reciente al más antiguo, empezando por tu primer mes con actividad; el mes actual lleva la marca En curso y el encabezado de cada año suma la utilidad neta de sus meses terminados. Su primera fila, Todos los gastos, abre todos los gastos sin importar el mes."
      },
      {
        "type": "h2",
        "text": "Desglose mensual"
      },
      {
        "type": "steps",
        "items": [
          "Abre Resultados, debajo de Reportes en la barra lateral.",
          "Toca un mes para ver cómo se calcula su utilidad neta."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Página de un mes de Resultados con el aviso En curso, la utilidad neta y el desglose completo desde los ingresos por ventas hasta los gastos"
      },
      {
        "type": "p",
        "text": "La página del mes lista en orden todas las líneas, desde las ventas hasta la utilidad neta. Las filas desde los ingresos por ventas hasta la utilidad bruta llevan los mismos nombres y cifras que De los ingresos por ventas a la utilidad bruta en Reportes."
      },
      {
        "type": "list",
        "items": [
          "Ingresos por ventas (con impuesto), Impuesto e Ingresos por ventas (sin impuesto): los ingresos por ventas con impuesto incluido, el monto del impuesto y los ingresos por ventas después de todos los descuentos y antes de impuestos, contados el día en que se entregó la mercancía. Las tiendas de Australia, el Reino Unido, Nueva Zelanda y Singapur ven el nombre local del impuesto.",
          "Ingresos sin costo: se resta antes del costo de productos y aparece solo cuando es distinto de cero.",
          "Costo de productos: el costo de lo que se vendió, según los costos de tus productos.",
          "Utilidad bruta: se muestra con su margen.",
          "Ingresos sin costo: se suma de nuevo después de la utilidad bruta cuando es distinto de cero.",
          "Pérdida de stock: aparece solo cuando el mes tiene una; es el costo de lo que Ajustar stock retiró por vencimiento, daño, regalo y similares, más las devoluciones desechadas. Va después de la utilidad bruta. Consulta «¿Cómo registro el stock que venció, se dañó o salió como muestra?». El mes también tiene una sección Pérdida de stock que la suma por motivo.",
          "Comisiones por procesamiento (est.): las comisiones estimadas con las tasas de tus métodos de pago.",
          "Anticipos retenidos: aparece solo cuando es distinto de cero; los anticipos que conservaste cuando se canceló una preventa.",
          "Redondeo de efectivo: aparece solo cuando es distinto de cero; lo que el redondeo del efectivo a las monedas en uso sumó o restó a los totales de los pedidos.",
          "Gastos fijos y Gastos puntuales: lo que registraste para ese mes; consulta «¿Cómo registro la renta, la nómina y otros gastos?».",
          "Utilidad neta: se calcula como ingresos por ventas (sin impuesto) − costo de productos − pérdida de stock − comisiones por procesamiento + anticipos retenidos + redondeo de efectivo − gastos fijos − gastos puntuales."
        ]
      },
      {
        "type": "h2",
        "text": "Meses en curso"
      },
      {
        "type": "p",
        "text": "Mientras un mes sigue en curso, Resultados ya descuenta los gastos fijos del mes completo. Por ejemplo, el 5 de octubre, si los ingresos por ventas (sin impuesto) llevan 20,000, el costo de productos es 10,000 y los gastos fijos son 65,700, la utilidad neta es −55,700 y aparece marcada como En curso · se descuentan los gastos del mes completo."
      },
      {
        "type": "p",
        "text": "Como los gastos del mes completo ya están contados, la utilidad neta de este mes nunca se muestra en rojo en la lista de meses, en la página del mes ni en el mosaico Utilidad neta de Reportes. Un mes terminado que cierra con pérdida muestra su utilidad neta en el color de advertencia."
      },
      {
        "type": "h2",
        "text": "Gráficos"
      },
      {
        "type": "p",
        "text": "Después del desglose puedes ver hasta tres gráficos: la utilidad neta mes a mes, la proporción de cada gasto fijo y la tendencia de los gastos fijos. Los dos gráficos de tendencia abarcan como máximo los 12 meses hasta el mes que abriste, y solo aparecen cuando hay al menos dos meses para comparar, contados desde el mes de tu primera venta o gasto. El gráfico de proporción necesita un gasto fijo en ese mes; mientras no haya uno, esa sección muestra Agregar gasto fijo."
      },
      {
        "type": "h2",
        "text": "Pasar de Reportes a Resultados"
      },
      {
        "type": "p",
        "text": "Reportes y Resultados se enlazan entre sí. Cuando el periodo de Reportes es Este mes o exactamente un mes completo, la segunda fila de mosaicos agrega un mosaico Utilidad neta marcado En curso · se descuentan los gastos del mes completo mientras el mes sigue en curso. Toca ese mosaico para ver el desglose de ese mes, de la utilidad bruta a la utilidad neta. Para cualquier otro periodo, toca Ver estado de resultados mensual en la última línea de De los ingresos por ventas a la utilidad bruta."
      },
      {
        "type": "p",
        "text": "En sentido contrario, Ver el reporte de octubre, debajo del título de un mes en Resultados, abre Reportes en ese mes (rango personalizado del 1 al 31 de octubre); para el mes en curso, abre Este mes."
      },
      {
        "type": "note",
        "text": "La utilidad neta es la utilidad operativa antes del impuesto sobre la renta, calculada con lo que DingPOS ha registrado; no es una declaración de impuestos. Si se vendieron productos sin costo, el mes igual muestra una utilidad neta, marcada No incluye el costo de N productos, y puedes tocarla para ver cuáles."
      },
      {
        "type": "note",
        "text": "Resultados está disponible en todos los planes. Con cuentas de personal, abrirlo requiere el permiso Resultados y gastos, que por defecto los Gerentes y el Personal necesitan que alguien apruebe, porque muestra los costos de los productos y la nómina."
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
    "question": "¿Cómo registro la renta, la nómina y otros gastos?",
    "keywords": [
      "gastos",
      "renta",
      "nómina",
      "servicios básicos",
      "gastos fijos",
      "gastos puntuales",
      "todos los gastos",
      "distribuir un gasto",
      "gastos operativos",
      "resultados"
    ],
    "content": [
      {
        "type": "p",
        "text": "En Resultados, toca Agregar gasto y elige Agregar gasto fijo o Agregar gasto puntual para registrar la renta, la nómina, los servicios básicos y otros costos de operación. Un gasto se cuenta en el mes al que corresponde, no en el mes en que lo pagaste, y la utilidad neta de cada mes se ajusta a eso. Los gastos fijos se repiten cada mes, con cambios de monto opcionales; los gastos puntuales se cuentan en un solo mes o se distribuyen en varios."
      },
      {
        "type": "h2",
        "text": "Gastos fijos"
      },
      {
        "type": "p",
        "text": "Un gasto fijo es un costo recurrente que pagas cada mes, como la renta, los servicios básicos o la nómina."
      },
      {
        "type": "steps",
        "items": [
          "Abre Resultados.",
          "Toca Agregar gasto.",
          "Elige Agregar gasto fijo.",
          "Escribe el nombre, el monto mensual y el mes en que inicia. Elige un mes anterior para registrar gastos pasados.",
          "Toca ✓ para guardar."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Formulario de gasto fijo con el nombre, el monto mensual, el mes de inicio y los cambios de monto"
      },
      {
        "type": "p",
        "text": "Cuando el monto cambia, abre el gasto y toca Cambiar monto. Elige el mes en que empieza el cambio y luego Desde este mes para un cambio continuo, como un aumento de renta, o Solo este mes para una diferencia de un solo mes, como la cuenta de luz de este mes. Cada cambio aparece en una lista en el formulario, y puedes abrir cualquiera para editarlo o eliminarlo."
      },
      {
        "type": "p",
        "text": "Cuando dejes de pagar un gasto fijo, indica el Último mes contado. Ese mes y los anteriores se siguen contando en Resultados, mientras que los meses posteriores ya no lo incluyen."
      },
      {
        "type": "h2",
        "text": "Cambios programados en Todos los gastos"
      },
      {
        "type": "p",
        "text": "En Todos los gastos, cada fila de gasto fijo muestra lo que está programado hacia adelante. La fila junta su mes de inicio con el siguiente cambio de monto programado y el último mes contado. Por ejemplo, una fila puede decir Desde enero de 2026 · $420/mes desde diciembre de 2026 · Último mes contado: marzo de 2027."
      },
      {
        "type": "p",
        "text": "El monto de la derecha sigue siendo el monto mensual de hoy, no el próximo. Un cambio con Solo este mes no aparece en la fila."
      },
      {
        "type": "h2",
        "text": "Gastos puntuales"
      },
      {
        "type": "p",
        "text": "Un gasto puntual es un costo que se paga una sola vez, como una remodelación, equipo, un seguro pagado por adelantado o una sola cuenta."
      },
      {
        "type": "steps",
        "items": [
          "Abre Resultados.",
          "Toca Agregar gasto.",
          "Elige Agregar gasto puntual.",
          "Ingresa el monto y la fecha.",
          "Indica el Mes contado para un solo mes, o activa Distribuir en varios meses.",
          "Toca ✓ para guardar."
        ]
      },
      {
        "type": "p",
        "text": "Sin distribuir, igual puedes elegir el Mes contado para que el costo se cuente en el mes al que corresponde. Por ejemplo, una cuenta de octubre que llega en noviembre puede contarse en octubre y se conserva su fecha real."
      },
      {
        "type": "p",
        "text": "Para una remodelación, equipo o un seguro pagado por adelantado, activa Distribuir en varios meses, elige de 2 a 120 meses y selecciona el primer mes contado. El formulario muestra cuánto se cuenta cada mes y qué meses abarca."
      },
      {
        "type": "p",
        "text": "Si una distribución termina antes, como cuando se cancela una póliza de seguro, abre el gasto y usa Terminar distribución antes. Lo que quede se cuenta en el mes que elijas."
      },
      {
        "type": "h2",
        "text": "Impuesto acreditable en los gastos"
      },
      {
        "type": "p",
        "text": "Cuando Acreditar impuesto de facturas está activado, puedes registrar un número de factura y el impuesto a acreditar en un gasto puntual, y registrar cada factura de un gasto fijo en Facturas con Registrar una factura. El monto que se cuenta en Resultados sigue siendo lo que la tienda asume; el artículo relacionado sobre el impuesto acreditable explica cómo funciona el impuesto a acreditar."
      },
      {
        "type": "note",
        "text": "Ingresa lo que la tienda asume, sin incluir los impuestos que puedas recuperar. El stock que vas a vender y los materiales con los que lo produces van por Compras, porque se cuentan en el costo del producto cuando se vende. Los insumos con stock controlado se registran con Ajustar stock al usarlos, con el motivo Insumos de la tienda, no como gasto. Los depósitos en garantía, el capital del préstamo y el dinero que retira el propietario tampoco son gastos. Los cambios se guardan juntos al tocar ✓, y si un cambio afecta un mes ya terminado, primero te indica qué meses tendrán un cambio en la utilidad neta."
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
    "question": "¿Cómo exporto el reporte de impuestos para mi contador?",
    "keywords": [
      "exportar reporte de impuestos",
      "reporte de impuestos",
      "exportar",
      "libro de Excel",
      "CSV",
      "reporte en PDF",
      "resumen de impuestos",
      "líneas de impuesto acreditable",
      "contador"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abre Reporte de impuestos, toca Exportar en la esquina superior derecha y elige CSV, Libro de Excel (XLSX) o Reporte en PDF. El archivo se abre en una vista previa de pantalla completa, donde puedes tocar el botón de compartir para guardarlo o enviarlo a tu contador. Todos los formatos contienen las mismas cifras que se ven en pantalla."
      },
      {
        "type": "h2",
        "text": "Cómo exportar"
      },
      {
        "type": "steps",
        "items": [
          "Abre Reportes y elige el periodo, por ejemplo un rango personalizado del 1 de noviembre al 31 de diciembre para un periodo de declaración de dos meses, o un rango trimestral.",
          "Toca el mosaico Impuesto para abrir Reporte de impuestos. La exportación cubre exactamente ese periodo.",
          "Toca Exportar en la esquina superior derecha de Reporte de impuestos. Un menú lista los formatos, con el último que se exportó en este iPad marcado.",
          "Elige un formato, como Libro de Excel (XLSX), para abrir una vista previa de pantalla completa. Los archivos CSV se muestran como una tabla, y el libro de Excel te permite cambiar entre hojas, por ejemplo para revisar primero Summary.",
          "Toca el botón de compartir en la esquina superior derecha de la vista previa para guardar el archivo o enviarlo a tu contador. Al cerrar la vista previa regresas a Reporte de impuestos."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Reporte de impuestos con el menú Exportar abierto, con la lista de formatos de archivo"
      },
      {
        "type": "p",
        "text": "Si una exportación falla, la app muestra «No se pudo exportar el archivo» e «Intenta exportar de nuevo». No se guarda nada; vuelve a exportar."
      },
      {
        "type": "h2",
        "text": "Formatos de exportación"
      },
      {
        "type": "list",
        "items": [
          "Resumen de impuestos (CSV): una línea por cada fila del reporte (cada impuesto y tasa, tasa cero y sin impuesto), con ventas, devoluciones y neto, antes de impuestos e impuesto.",
          "Todos los documentos (CSV): una línea por documento bajo cada impuesto, con fecha y hora, número de recibo, tipo de documento (venta, devolución o la reversión de una anulación), nombre del cliente, montos y métodos de pago. Una anulación agrega una línea de reversión en la fecha de la anulación.",
          "Resumen diario (CSV): el resumen por día, y después una segunda tabla de pagos por día y método.",
          "Líneas de impuesto acreditable (CSV): aparece solo cuando el reporte tiene una tarjeta de impuesto acreditable. Una línea por cada línea de impuesto acreditable de cada orden de compra y gasto, con proveedor, ID fiscal del proveedor y número de factura.",
          "Libro de Excel (XLSX): las hojas Summary, Documents y Daily (con esos nombres fijos en inglés) equivalen a los tres CSV de ventas, más Purchases cuando el reporte muestra impuesto acreditable. Los montos son celdas numéricas, y cada columna se ajusta a su contenido para que nada se abra cortado.",
          "Reporte en PDF: un reporte en A4 en el idioma de la app, con el nombre de la tienda, el periodo, el modo de impuesto, la moneda y las secciones del reporte. Las tiendas de Australia, Nueva Zelanda, Singapur y el Reino Unido reciben primero Casillas de la declaración; las tarjetas de impuesto acreditable siguen cuando se muestran. En la vista previa, firma o anota con Marcado para compartir el archivo marcado; si exportas el mismo periodo otra vez, se genera una copia limpia."
        ]
      },
      {
        "type": "h2",
        "text": "Formato para software de contabilidad"
      },
      {
        "type": "p",
        "text": "Los archivos CSV están en UTF-8 y separados por comas, con nombres de columna fijos en inglés en cualquier idioma de la app para que el software de contabilidad pueda leerlos. Los montos usan los decimales de la moneda y un signo menos, sin símbolo ni separador de miles (como 80.97, -40.00 o 1000 en una tienda que usa yenes). Las fechas tienen el formato 2026-11-03."
      },
      {
        "type": "p",
        "text": "Las celdas de texto que empiezan con =, +, - o @ (como un cliente llamado =1+1) llevan un ' al inicio para que las hojas de cálculo muestren texto en lugar de ejecutar una fórmula. Los montos nunca lo llevan."
      },
      {
        "type": "p",
        "text": "Los nombres de archivo incluyen el periodo, como tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx y tax-report_2026-11-01_2026-11-30.pdf, para que los archivos de distintos periodos nunca se sobrescriban entre sí."
      },
      {
        "type": "h2",
        "text": "Permisos y privacidad"
      },
      {
        "type": "p",
        "text": "Todos los planes pueden exportar, incluido Lite. El personal necesita el permiso de Reportes, igual que para Reporte de impuestos."
      },
      {
        "type": "p",
        "text": "Los archivos con impuesto acreditable piden primero las aprobaciones que necesitan sus tarjetas: Costos y utilidad para las órdenes de compra y Resultados y gastos para los gastos. Esto abarca Líneas de impuesto acreditable (CSV), además de Libro de Excel (XLSX) y Reporte en PDF cuando aparecen tarjetas de impuesto acreditable. Si cancelas, no se guarda nada; los tres CSV de ventas nunca lo piden."
      },
      {
        "type": "note",
        "text": "Todos los documentos (CSV) contiene nombres de clientes, y los archivos de impuesto acreditable contienen nombres de proveedores e IDs fiscales. Compártelos solo con quienes deban verlos."
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
    "question": "¿Cómo registro el impuesto acreditable (IVA o GST de mis compras)?",
    "keywords": [
      "impuesto acreditable",
      "IVA acreditable",
      "IVA de compras",
      "VAT",
      "GST",
      "acreditar impuesto de facturas",
      "ID fiscal del proveedor",
      "órdenes de compra",
      "reporte de impuestos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Activa Acreditar impuesto de facturas en Ajustes → Datos de la tienda para registrar el impuesto a acreditar de las facturas de proveedores en órdenes de compra y gastos. Ambos formularios tendrán una sección de impuesto acreditable donde copias de cada factura el impuesto a acreditar. El reporte de impuestos lo lista en dos tarjetas, Impuesto acreditable en órdenes de compra e Impuesto acreditable en gastos."
      },
      {
        "type": "h2",
        "text": "Activar Acreditar impuesto de facturas"
      },
      {
        "type": "steps",
        "items": [
          "Abre Ajustes → Datos de la tienda y busca la tarjeta de impuestos.",
          "En Cobrar impuesto, activa Acreditar impuesto de facturas."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Tarjeta de impuestos de Datos de la tienda con Acreditar impuesto de facturas activado y su aviso debajo"
      },
      {
        "type": "p",
        "text": "Acreditar impuesto de facturas aparece solo cuando la tienda tiene al menos un impuesto, y empieza desactivado en las tiendas nuevas y después de actualizar. Al cambiarlo se guarda de inmediato y queda registrado en Ajustes de impuestos del Registro de actividad. Con él activado, ingresa los precios de compra y los costos de los productos antes del impuesto a acreditar; el impuesto que no se puede acreditar se queda en el costo."
      },
      {
        "type": "note",
        "text": "Todos los planes tienen el interruptor Acreditar impuesto de facturas, mientras que Compras requiere Standard o superior. Al desactivarlo, los campos se ocultan en los registros nuevos; los registros existentes conservan su impuesto acreditable y su monto a pagar, y los reportes de impuestos anteriores no cambian."
      },
      {
        "type": "h2",
        "text": "Órdenes de compra"
      },
      {
        "type": "steps",
        "items": [
          "Abre Compras y toca Nueva compra.",
          "Ingresa los precios unitarios antes del impuesto a acreditar y desplázate, pasando los costos adicionales, hasta Impuesto acreditable.",
          "Revisa la Fecha de factura, que por defecto es la fecha de la orden, y agrega, si quieres, el Número de factura y el ID fiscal del proveedor.",
          "Elige un impuesto de la tienda en Tasa, o elige Otra tasa… para escribir hasta 3 decimales, como 9.975%.",
          "Revisa Antes de impuestos, que empieza con el total de la orden antes de impuestos, y copia de la factura el Impuesto a acreditar.",
          "Toca Agregar una tasa para tasas adicionales."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Orden de compra con la sección Impuesto acreditable, con los campos de la factura, una línea de tasa y los totales"
      },
      {
        "type": "p",
        "text": "El Impuesto a acreditar empieza en blanco; DingPOS nunca lo calcula a partir de la tasa y acepta el redondeo de la factura. Por ejemplo, harina 10 × $300 más $100 de envío en la factura AB-12345678 con fecha del 30 de junio de 2026, con una línea de 5% de Antes de impuestos $3,100 e Impuesto a acreditar $155, da Total antes de impuestos $3,100, Impuesto acreditable $155 y Monto a pagar $3,255, que aparece en la lista, en el detalle de la orden y en Por pagar. El ID fiscal de un proveedor llena las órdenes nuevas; las órdenes guardadas conservan el suyo."
      },
      {
        "type": "p",
        "text": "Si una factura llega tarde, abre la orden recibida y toca Registrar impuesto acreditable en la tarjeta Impuesto acreditable, o Editar para cambiarlo. Solo cambia el Monto a pagar; el stock, el costo del producto y el estado de pagada o por pagar no cambian. Las órdenes anuladas conservan Impuesto acreditable en solo lectura, y las órdenes guardadas antes de la actualización no se completan con datos anteriores."
      },
      {
        "type": "h2",
        "text": "Gastos"
      },
      {
        "type": "p",
        "text": "En Resultados → Gastos puntuales, el formulario agrega Número de factura y líneas de impuesto acreditable debajo del monto. Deja el monto antes del impuesto a acreditar y copia solo el impuesto a acreditar. En una factura de papelería de $1,100 con $100 a acreditar, ingresa $1,000 y una línea de 10% de $1,000 y $100; Con impuesto muestra $1,100 y Resultados cuenta $1,000. Su impuesto acreditable se cuenta completo en la fecha del gasto, sin seguir nunca el Mes contado ni una distribución."
      },
      {
        "type": "p",
        "text": "En Resultados → Gastos fijos, abre un gasto guardado, como la renta o los servicios básicos, y toca Registrar una factura en Facturas cuando llegue cada factura, con la fecha de la factura, el número de factura opcional y al menos una línea de tasa. Si la renta es de $30,000 al mes y las facturas de julio y agosto llevan cada una una línea de 5% de $30,000 y $1,500, el reporte de julio a septiembre contiene $3,000 de impuesto acreditable, mientras que Resultados sigue contando $30,000 cada mes."
      },
      {
        "type": "p",
        "text": "Al guardar un cambio de impuesto acreditable en un mes anterior, la app pregunta ¿Guardar el cambio? y avisa que el reporte de impuestos de ese mes cambia si ya presentaste la declaración. Las ediciones del mes actual y los borradores se guardan sin preguntar."
      },
      {
        "type": "note",
        "text": "DingPOS no calcula el IVA de importación, la inversión del sujeto pasivo (reverse charge) ni el crédito parcial. Copia de la factura el impuesto a acreditar, y pon cualquier impuesto que no puedas acreditar en el monto antes de impuestos."
      },
      {
        "type": "h2",
        "text": "Reporte de impuestos"
      },
      {
        "type": "p",
        "text": "Dos tarjetas van después de las tarjetas de ventas: Impuesto acreditable en órdenes de compra e Impuesto acreditable en gastos. Cada una lista una fila por tasa, una fila Sin impuesto acreditable y los totales de Antes de impuestos, Impuesto a acreditar y Con impuesto. Los totales incluyen las compras sin impuesto acreditable, aunque algunas declaraciones toman solo las filas con impuesto acreditable."
      },
      {
        "type": "list",
        "items": [
          "Las órdenes de compra se cuentan en la Fecha de factura, o en la fecha de la orden si está en blanco.",
          "Las órdenes de compra anuladas se cuentan como monto negativo en la fecha de la anulación.",
          "Los gastos puntuales se cuentan completos en la fecha del gasto.",
          "Las facturas de gastos fijos se cuentan en la fecha de la factura."
        ]
      },
      {
        "type": "p",
        "text": "Impuesto acreditable en órdenes de compra requiere el permiso Costos y utilidad, e Impuesto acreditable en gastos requiere Resultados y gastos; el personal sin un permiso ve Pedir aprobación a un gerente debajo del título de la tarjeta. El mosaico Impuesto sigue mostrando solo el impuesto cobrado en ventas, nunca restando el impuesto acreditable, porque el método simplificado de Japón y la tarifa plana del Reino Unido funcionan de otra forma. Las tiendas de Australia, Nueva Zelanda, Singapur y el Reino Unido también ven estos montos en Casillas de la declaración."
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
    "question": "¿Dónde está el reporte de impuestos y cómo se lee?",
    "keywords": [
      "reporte de impuestos",
      "IVA",
      "VAT",
      "GST",
      "impuesto sobre las ventas",
      "reportes",
      "impuesto",
      "ventas e impuesto por tasa",
      "por método de pago"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abre Reportes y toca el mosaico Impuesto para ver Reporte de impuestos, que lista las ventas y el impuesto por tasa del periodo que muestra Reportes. Copia estas cifras en una declaración de VAT, GST o impuesto sobre las ventas, o envíalas a un contador. Los cambios posteriores en los impuestos nunca alteran las cifras guardadas de los documentos."
      },
      {
        "type": "h2",
        "text": "Abrir el reporte de impuestos"
      },
      {
        "type": "steps",
        "items": [
          "Abre Reportes y elige el periodo, por ejemplo Este mes o un rango personalizado.",
          "Busca el mosaico Impuesto en la segunda fila, después de Descuentos totales.",
          "Toca el mosaico Impuesto o Reporte de impuestos ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Reportes en Este mes con el mosaico Impuesto y su pie Reporte de impuestos ›"
      },
      {
        "type": "p",
        "text": "Este mosaico es la única entrada. Su subtítulo nombra los impuestos cobrados en el periodo, del monto mayor al menor: dos por su nombre; tres o más como, por ejemplo, 3 impuestos (incluye PST 7%). El encabezado muestra el periodo de Reportes (Este mes · 1 nov – 30 nov) sin selector de periodo ni acceso directo al mes pasado, porque los periodos de declaración varían (en Taiwán son dos meses, en Australia un trimestre, en Japón un año)."
      },
      {
        "type": "p",
        "text": "Las tiendas sin impuestos y sin ventas con impuesto en el periodo no ven el mosaico Impuesto; los periodos sin documentos muestran el estado vacío de Reportes. Los impuestos eliminados conservan el mosaico en los periodos que tienen ventas con ellos."
      },
      {
        "type": "note",
        "text": "Todos los planes, incluido Lite y la prueba, tienen el mosaico, el reporte y todas las exportaciones. El personal necesita el permiso de Reportes; los roles que necesitan aprobación ven el aviso de aprobación hasta que un gerente apruebe."
      },
      {
        "type": "h2",
        "text": "Leer el reporte"
      },
      {
        "type": "p",
        "text": "Las tiendas de Australia, Nueva Zelanda, Singapur y el Reino Unido ven primero Casillas de la declaración."
      },
      {
        "type": "p",
        "text": "Ventas e impuesto por tasa lista una fila por tasa: primero la más alta, luego la de tasa cero 0% y al final Sin impuesto (productos sin impuesto). Las columnas son Ventas, Devoluciones y anulaciones y Neto, cada una con Antes de impuestos e Impuesto; las filas de tasa cero y Sin impuesto no tienen línea de impuesto. Cada impuesto de la tienda tiene una fila aunque no tenga ventas. Si renombras un impuesto, sigue una sola fila; si cambias una tasa, se agrega una."
      },
      {
        "type": "p",
        "text": "Totales muestra Ventas antes de impuestos, Impuesto y Ventas con impuesto. Con dos o más impuestos, una nota indica que una venta puede tener varios impuestos, así que las ventas de cada fila no se pueden sumar; Ventas antes de impuestos cuenta cada venta una sola vez. En un trimestre del Reino Unido, VAT 20% podría mostrar Antes de impuestos £1,000 e Impuesto £200, Tasa cero 0% £300 y Sin impuesto £50: Totales da Ventas antes de impuestos £1,350, Impuesto £200 y Ventas con impuesto £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Reporte de impuestos con las filas de Ventas e impuesto por tasa y Totales debajo"
      },
      {
        "type": "list",
        "items": [
          "Por método de pago lista los pagos de estos documentos hasta el cierre del periodo, los montos sin pagar como Cuentas por cobrar y el redondeo de efectivo en una línea Incluye redondeo de efectivo … dentro de la fila de efectivo.",
          "No se cuentan como ventas aparece solo para los anticipos retenidos, y lista Anticipos retenidos con un subtítulo para consultar con un contador cómo declararlos; no se suman ni a las ventas ni al impuesto.",
          "Las tiendas con Acreditar impuesto de facturas activado, o con impuesto acreditable registrado en el periodo, también ven Impuesto acreditable en órdenes de compra e Impuesto acreditable en gastos."
        ]
      },
      {
        "type": "h2",
        "text": "En qué día se cuenta cada documento"
      },
      {
        "type": "p",
        "text": "Toca el ⓘ junto a Ventas e impuesto por tasa:"
      },
      {
        "type": "list",
        "items": [
          "Una anulación se cuenta en el periodo en que se anuló, como monto negativo, así que un periodo ya declarado nunca cambia. En cambio, Reportes la quita del periodo de la venta.",
          "Una devolución se cuenta en su propia fecha. En un cambio, los artículos nuevos cuentan como ventas y los devueltos como devoluciones.",
          "Una preventa se cuenta el día del retiro; una venta a cuenta, el día de la venta."
        ]
      },
      {
        "type": "p",
        "text": "Una venta del 30 de octubre anulada el 2 de noviembre sigue en las Ventas de octubre y aparece como monto negativo en Devoluciones y anulaciones de noviembre. Liquidar una venta a cuenta más tarde no la mueve."
      },
      {
        "type": "h2",
        "text": "Impuesto cobrado y totales de Reportes"
      },
      {
        "type": "p",
        "text": "El mosaico Impuesto es igual al total de Impuesto de Reporte de impuestos. Difiere de la fila Impuesto de De los ingresos por ventas a la utilidad bruta, en Reportes, solo en anulaciones de periodos distintos, porque Reportes quita una venta anulada de su periodo original."
      },
      {
        "type": "note",
        "text": "Reporte de impuestos muestra el impuesto cobrado en ventas, nunca el impuesto por pagar (impuesto de salida menos impuesto acreditable), porque no todos los países lo calculan así, como el método simplificado de Japón o el Flat Rate Scheme del Reino Unido."
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
    "question": "¿Qué cifras van en las casillas de mi declaración de BAS, GST o VAT?",
    "keywords": [
      "casillas de la declaración",
      "reporte de impuestos",
      "reportes",
      "BAS",
      "BAS simplificado",
      "GST101A",
      "GST F5",
      "declaración de VAT",
      "acreditar impuesto de facturas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Para las tiendas de Australia, Nueva Zelanda, Singapur o el Reino Unido, Reporte de impuestos abre con Casillas de la declaración, que muestra cada casilla y el monto del mismo reporte. Cubre Australia BAS · BAS simplificado, Nueva Zelanda GST101A, Singapur GST F5 y Declaración de VAT del Reino Unido en todos los planes."
      },
      {
        "type": "h2",
        "text": "Abrir Casillas de la declaración"
      },
      {
        "type": "steps",
        "items": [
          "Abre Reportes.",
          "Toca el mosaico Impuesto para abrir Reporte de impuestos."
        ]
      },
      {
        "type": "p",
        "text": "Casillas de la declaración es la primera tarjeta, arriba de Ventas e impuesto por tasa, y su subtítulo nombra la declaración. Todos los montos salen del mismo reporte, centavos incluidos, y no se recalcula nada. El Reporte en PDF exportado abre con la misma tarjeta. Las tiendas configuradas antes de que la app registrara el país cuentan según la moneda (AUD, NZD, SGD o GBP); las demás tiendas no tienen la tarjeta Casillas de la declaración."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Tarjeta Casillas de la declaración en la parte superior de Reporte de impuestos, con las casillas 1, 4, 6 y 7 de la declaración de VAT del Reino Unido"
      },
      {
        "type": "h2",
        "text": "Australia BAS · BAS simplificado"
      },
      {
        "type": "list",
        "items": [
          "G1 «Total sales» (ventas totales): Ventas con GST, libres de GST y sin impuesto incluidas; responde Sí a «¿El monto de G1 incluye GST?»",
          "1A «GST on sales» (GST sobre las ventas): Impuesto sobre las ventas",
          "1B «GST on purchases» (GST sobre las compras): Impuesto a acreditar en órdenes de compra y gastos"
        ]
      },
      {
        "type": "p",
        "text": "La ATO pide dólares enteros: en el BAS omite los centavos, nunca redondees hacia arriba."
      },
      {
        "type": "h2",
        "text": "Nueva Zelanda GST101A"
      },
      {
        "type": "list",
        "items": [
          "Casilla 5 «Total sales and income» (ventas e ingresos totales): Ventas con GST, incluidas las de tasa cero; las ventas sin impuesto no se incluyen",
          "Casilla 6 «Zero-rated supplies» (suministros de tasa cero): Ventas de tasa cero",
          "Casilla 11 «Total purchases and expenses» (compras y gastos totales): Órdenes de compra y gastos con GST, GST incluido; no se incluyen las compras sin impuesto acreditable ni las de tasa cero"
        ]
      },
      {
        "type": "p",
        "text": "myIR calcula la casilla 8 y la casilla 12 como 3/23, lo que puede diferir unos centavos del impuesto del reporte."
      },
      {
        "type": "h2",
        "text": "Singapur GST F5"
      },
      {
        "type": "list",
        "items": [
          "Casilla 1 «Total value of standard-rated supplies» (valor total de suministros con tasa estándar): Ventas con impuesto, antes de impuestos",
          "Casilla 2 «Total value of zero-rated supplies» (valor total de suministros de tasa cero): Ventas de tasa cero; solo las exportaciones y los servicios internacionales pueden tener tasa cero",
          "Casilla 5 «Total value of taxable purchases» (valor total de compras gravables): Órdenes de compra y gastos con GST o de tasa cero, antes de impuestos; no se incluyen las compras sin impuesto acreditable",
          "Casilla 6 «Output tax due» (impuesto de salida por pagar): Impuesto sobre las ventas",
          "Casilla 7 «Input tax and refunds claimed» (impuesto acreditable y reembolsos solicitados): Impuesto a acreditar en órdenes de compra y gastos"
        ]
      },
      {
        "type": "h2",
        "text": "Declaración de VAT del Reino Unido"
      },
      {
        "type": "list",
        "items": [
          "Casilla 1 «VAT due on sales and other outputs» (VAT por pagar sobre ventas y otras salidas): Impuesto sobre las ventas",
          "Casilla 4 «VAT reclaimed on purchases and other inputs» (VAT recuperado en compras y otras entradas): Impuesto a acreditar en órdenes de compra y gastos",
          "Casilla 6 «Total value of sales and all other outputs excluding any VAT» (valor total de ventas y demás salidas sin VAT): Ventas antes de impuestos; incluye las de tasa cero, las exentas y las sin impuesto",
          "Casilla 7 «Total value of purchases and all other inputs excluding any VAT» (valor total de compras y demás entradas sin VAT): Órdenes de compra y gastos antes de impuestos, incluidas las compras sin impuesto acreditable; resta los sueldos y el impuesto sobre propiedades comerciales (business rates) que hayas registrado"
        ]
      },
      {
        "type": "p",
        "text": "Para la contabilidad estándar de VAT. En el Flat Rate Scheme (régimen de tarifa plana), la casilla 1 y la casilla 6 se calculan de otra forma. En el Reino Unido, el VAT de un anticipo se debe al recibirlo; DingPOS declara una preventa cuando se retira."
      },
      {
        "type": "p",
        "text": "Ejemplo de un trimestre en el Reino Unido: £1,000 de ventas con VAT 20% antes de impuestos (impuesto £200), £300 de tasa cero, £50 sin impuesto, órdenes de compra de £400 más £80 de VAT y gastos de £250 sin impuesto acreditable dan casilla 1 £200, casilla 4 £80, casilla 6 £1,350 y casilla 7 £650."
      },
      {
        "type": "h2",
        "text": "Casillas en blanco y acceso del personal"
      },
      {
        "type": "p",
        "text": "Se omiten las casillas que calcula la oficina de impuestos y los montos adeudados (casillas 3 y 5 del Reino Unido; casilla 3 de Singapur, suministros exentos). En Nueva Zelanda y Singapur, las ventas sin impuesto no están en ninguna casilla; consulta con tu contador si debían llevar impuesto."
      },
      {
        "type": "p",
        "text": "Las casillas de impuesto acreditable (1B de AU, 11 de NZ, 5 y 7 de SG, 4 y 7 de UK) requieren Acreditar impuesto de facturas; de lo contrario muestran — y Sin impuesto acreditable registrado, nunca 0. La casilla 7 del Reino Unido necesita tanto Impuesto acreditable en órdenes de compra como Impuesto acreditable en gastos; solo con órdenes de compra se llena la casilla 4 y la casilla 7 queda en —."
      },
      {
        "type": "p",
        "text": "El personal sin el permiso Resultados y gastos o Costos y utilidad no ve las casillas que suman ambas tarjetas hasta que un gerente apruebe mediante Pedir aprobación a un gerente."
      },
      {
        "type": "note",
        "text": "Calculado con las fechas de venta y de factura; DingPOS no registra las fechas de pago. Si declaras con base en efectivo o en pagos, ajusta estas cifras."
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
    "question": "¿Cómo crear una promoción para mi tienda?",
    "keywords": [
      "promoción",
      "oferta",
      "2x1",
      "descuento por monto mínimo",
      "happy hour",
      "cupón"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ve a Ajustes → Promociones. Los tipos disponibles son:"
      },
      {
        "type": "list",
        "items": [
          "Monto mínimo de compra: gasta X y obtén Y de descuento o Y% de descuento.",
          "Ofertas 2x1 y de la enésima unidad.",
          "Multiplicadores de puntos extra.",
          "Ofertas solo para un nivel de membresía o para el mes de cumpleaños.",
          "Compra A y recibe B, complementos de pago y paquetes a precio fijo."
        ]
      },
      {
        "type": "p",
        "text": "Cada promoción se puede programar (horarios de Happy Hour, días específicos de la semana, pasando la medianoche), limitar a productos específicos y controlar con prioridad, reglas de acumulación y límites de uso. Las promociones que correspondan se aplican automáticamente al cobrar, sin necesidad de códigos de descuento."
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
    "question": "Mi promoción no se aplica: ¿qué debo revisar?",
    "keywords": [
      "promoción",
      "no funciona",
      "no se aplica",
      "solución de problemas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Revisa las causas más comunes, en este orden:"
      },
      {
        "type": "steps",
        "items": [
          "Horario: ¿hoy está dentro de las fechas activas? ¿Una ventana de Happy Hour limita el día de la semana o la hora?",
          "Alcance: ¿los artículos del carrito están dentro del alcance de productos o categorías de la promoción? ¿El producto tiene activado Excluir de promociones (los productos de precio abierto lo tienen de forma predeterminada)? ¿Se alcanzó el monto mínimo de compra?",
          "Público: ¿la promoción está limitada a un nivel de membresía o al mes de cumpleaños? ¿Se seleccionó a ese miembro al cobrar?",
          "Límites de uso: ¿se alcanzó el tope total de usos o el tope de este cliente? El límite por cliente de una promoción del mes de cumpleaños se cuenta por año calendario.",
          "Acumulación: ¿una promoción de mayor prioridad con la opción «Detener las promociones siguientes cuando se aplique esta» la está bloqueando?"
        ]
      },
      {
        "type": "p",
        "text": "Si todo está en orden y aun así no se aplica, envíanos por correo una captura de pantalla de los ajustes de la promoción y te ayudaremos a revisarlo."
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
    "question": "¿Cómo funcionan los puntos de lealtad?",
    "keywords": [
      "puntos",
      "lealtad",
      "recompensas",
      "canjear puntos",
      "puntos de bienvenida"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ve a Ajustes → Programa de lealtad y define dos reglas: cuántos puntos se ganan (Y) por cada monto gastado (X), y cuánto descuento (M) se obtiene al canjear N puntos (con un tope de canje por pedido, opcional). También puedes dar puntos de bienvenida a los nuevos miembros de forma automática. Las tiendas nuevas empiezan con los puntos desactivados: activa Activar programa de lealtad y completa una regla. Si el interruptor está activado y no hay ninguna regla, aparece el aviso «Aún no hay una regla para ganar o canjear puntos, así que las ventas no ganarán ni canjearán puntos.»"
      },
      {
        "type": "p",
        "text": "Asocia al miembro a la venta, en el carrito o en la pantalla de cobro, y los puntos se acumulan solos; para canjearlos, ingresa los puntos que quieres usar. La pantalla de éxito muestra los puntos ganados y el nuevo saldo, por ejemplo «+22 pts · 122 pts en total»; en una venta a cuenta o en una preventa que aún no se paga por completo, los puntos se suman solo cuando entra el dinero, y aparece «se suman al liquidar» o «se suman al pagar en el retiro». Al anular un pedido se descuentan los puntos que ganó y se devuelven los puntos que se canjearon."
      },
      {
        "type": "p",
        "text": "Para agregar o quitar puntos a mano (por ejemplo, por una compra que no se registró), toca Ajustar en la tarjeta Puntos del detalle del cliente, elige Agregar o Restar, ingresa los puntos y, si quieres, escribe un motivo (hasta 100 caracteres). No puedes restar más puntos de los que tiene el cliente. Cada ajuste queda en el historial de puntos con el saldo antes y después, el motivo y quién lo hizo."
      },
      {
        "type": "note",
        "text": "El ajuste manual de puntos llegó en la versión 3.5. En Pro, al confirmar, se pide el PIN de un gerente o del propietario a los miembros del personal cuyo rol requiere aprobación para el Ajuste manual de puntos; por defecto, ese rol es Personal."
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
    "question": "¿Para qué sirven los niveles de membresía?",
    "keywords": [
      "nivel",
      "vip",
      "oro",
      "ascenso",
      "nivel de membresía"
    ],
    "content": [
      {
        "type": "p",
        "text": "Los niveles de membresía (por ejemplo, Regular, Plata y Oro) sirven para dos cosas: puedes dirigir promociones a ellos (por ejemplo, 10% de descuento solo para Oro) y te permiten reconocer el estatus de un cliente de un vistazo al cobrar."
      },
      {
        "type": "p",
        "text": "Los niveles pueden ascender automáticamente según las reglas que definas (por ejemplo, el gasto acumulado) o asignarse a mano. Si un pedido anulado había provocado un ascenso, el nivel se revierte automáticamente."
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
    "question": "¿Cómo hago un respaldo de mis datos?",
    "keywords": [
      "respaldo",
      "icloud",
      "google drive",
      "dropbox",
      "nube",
      "copia en la nube",
      "hacer respaldo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ve a Ajustes → Respaldo en la nube, elige iCloud, Google Drive o Dropbox y autorízalo. Después podrás hacer un respaldo manual cuando quieras. Para iCloud, este iPad debe tener la sesión iniciada en iCloud con iCloud Drive activado y DingPOS debe tener permiso para usarlo."
      },
      {
        "type": "p",
        "text": "Los respaldos se guardan en tu propia cuenta en la nube. Cada nube conserva solo el más reciente —una copia de los datos y un archivo con las fotos de los productos— y cada respaldo sobrescribe el anterior."
      },
      {
        "type": "note",
        "text": "Como un respaldo nuevo reemplaza al anterior, si sospechas que tus datos ya tienen un problema (por ejemplo, se borraron varios productos por error), no hagas el respaldo todavía: escríbenos por correo y buscaremos juntos el siguiente paso."
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
    "question": "El respaldo de iCloud dice «No conectado»: ¿qué hago?",
    "keywords": [
      "icloud",
      "no conectado",
      "icloud drive",
      "falló el respaldo",
      "no se conecta"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS muestra iCloud como conectado solo cuando realmente puede usarlo. Si dice No conectado, revisa tres cosas en la app Ajustes del iPad:"
      },
      {
        "type": "steps",
        "items": [
          "Iniciaste sesión con tu cuenta de Apple.",
          "iCloud Drive está activado.",
          "DingPOS tiene permiso para usar iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Cuando las tres estén activadas, vuelve a Respaldo en la nube en DingPOS y iCloud aparecerá como conectado. Los respaldos se guardan en la carpeta propia de DingPOS en iCloud Drive."
      },
      {
        "type": "note",
        "text": "En las versiones anteriores a la v3.0, el respaldo de iCloud no funcionaba y fallaba siempre con «Backup.SyncError error 0». Primero actualiza DingPOS desde el App Store."
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
    "question": "¿Cómo paso mis datos a un iPad nuevo?",
    "keywords": [
      "pasar datos",
      "iPad nuevo",
      "restaurar",
      "migrar",
      "cambiar de iPad",
      "transferir"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "iPad anterior: ve a Ajustes → Respaldo en la nube y haz un respaldo manual. Confirma que la hora del respaldo se actualizó.",
          "iPad nuevo: instala DingPOS y completa el asistente de configuración.",
          "iPad nuevo: ve a Ajustes → Respaldo en la nube, conecta la misma cuenta en la nube y restaura."
        ]
      },
      {
        "type": "p",
        "text": "Al tocar Restaurar se abre primero una vista previa: la cantidad de productos, pedidos y clientes de este iPad y de la copia en la nube, lado a lado, además de todos los pedidos que la restauración eliminaría. Nada cambia en este iPad hasta que confirmes. Si la copia la hizo una versión más reciente de DingPOS, te pedirá actualizar la app primero. Las fotos de los productos también se restauran."
      },
      {
        "type": "note",
        "text": "Una restauración reemplaza todos los datos de este iPad con el respaldo: los pedidos creados en este iPad después de ese respaldo se perderán. Asegúrate de estar conectado a la cuenta en la nube correcta; si restauras la equivocada, usa Deshacer restauración."
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
    "question": "¿Se conservan mis datos si elimino la app?",
    "keywords": [
      "eliminar",
      "desinstalar",
      "pérdida de datos",
      "borrar la app"
    ],
    "content": [
      {
        "type": "p",
        "text": "No. DingPOS guarda todo localmente en tu dispositivo: al eliminar la app se borran de forma permanente todos los productos, pedidos, miembros y ajustes, a menos que hayas activado el respaldo en la nube."
      },
      {
        "type": "note",
        "text": "Antes de eliminar la app, haz siempre un respaldo manual y confirma que se completó. Después de reinstalarla, restaura desde la nube."
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
    "question": "La app abre con «No se pudieron abrir los datos de tu tienda»: ¿qué hago?",
    "keywords": [
      "no se pudieron abrir",
      "no abre",
      "se cierra",
      "falla al abrir",
      "base de datos",
      "datos de la tienda"
    ],
    "content": [
      {
        "type": "p",
        "text": "No elimines la app. Esta pantalla significa que DingPOS no pudo leer los datos de tu tienda, pero los datos siguen en este iPad: si eliminas la app, se eliminan junto con ella."
      },
      {
        "type": "p",
        "text": "Primero toca Reintentar; si funciona, la app se abre como siempre. Si sigue pasando, toca Contactar a Soporte y cuéntanos, y te ayudaremos a recuperar tus datos. Esta pantalla nunca mueve ni elimina archivos."
      },
      {
        "type": "p",
        "text": "Es posible que, la primera vez que abras la app después de una actualización o de restaurar un respaldo de una versión anterior, aparezca primero «Actualizando tus datos…». Esto significa que los datos de tu tienda se están convirtiendo a un formato más reciente; el proceso tarda más cuanto más datos tengas. La app se abre sola al terminar. No se ha congelado."
      },
      {
        "type": "note",
        "text": "La causa más común es que la app se cerró en medio de una restauración. Antes de la v3.0, esto hacía que la app fallara en cada apertura; desde la v3.0 se detiene en esta pantalla."
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
    "question": "¿Puedo usar dos iPad al mismo tiempo?",
    "keywords": [
      "dos iPad",
      "varios dispositivos",
      "sincronizar",
      "compartir datos",
      "segunda caja"
    ],
    "content": [
      {
        "type": "p",
        "text": "Por ahora, los datos de cada iPad son independientes: todavía no se puede compartir en tiempo real un mismo conjunto de datos entre dos dispositivos."
      },
      {
        "type": "p",
        "text": "Puedes copiar los datos de un iPad a otro con el respaldo en la nube (respaldar → restaurar), lo cual sirve bien para cambiar de dispositivo o para preparar un segundo iPad. Eso sí, los pedidos cobrados por separado en cada dispositivo no se combinan automáticamente. La sincronización entre varios dispositivos está en nuestro plan de desarrollo."
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
    "question": "Restauré el respaldo equivocado: ¿puedo deshacerlo?",
    "keywords": [
      "deshacer restauración",
      "restaurar",
      "copia equivocada",
      "registros de restauración",
      "datos perdidos",
      "revertir"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Cada restauración desde la nube conserva los datos que reemplazó como copia previa a la restauración. En Ajustes → Respaldo en la nube, una tarjeta indica cuándo se hizo la última restauración y de dónde vino. Toca Deshacer restauración, revisa la vista previa y confirma: los datos vuelven a como estaban antes de la restauración y la app se recarga."
      },
      {
        "type": "list",
        "items": [
          "Deshacer restauración es en sí una restauración y conserva otra copia de lo que reemplaza, así que al tocarla otra vez vuelves al punto anterior.",
          "Solo se conserva la copia más reciente; la siguiente restauración la reemplaza.",
          "Solo regresan los datos: los productos agregados después de la copia en la nube aparecen con la imagen faltante."
        ]
      },
      {
        "type": "p",
        "text": "Para ver quién restauró, cuándo y desde qué copia, toca Ver registros de restauración en la misma pantalla: la hora de cada restauración, el operador, el origen, la cantidad de productos, pedidos y clientes antes y después, y todos los pedidos que eliminó. Los registros se guardan en este iPad y ninguna restauración los reemplaza."
      },
      {
        "type": "note",
        "text": "La vista previa de la restauración y Deshacer restauración funcionan en todos los planes; ver los registros de restauración es una función Pro. Los registros también se escriben sin Pro (solo que sin operador), así que si te suscribes a Pro más adelante verás todos."
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
    "question": "¿Cómo agrego personal y cambio quién está en la caja?",
    "keywords": [
      "personal",
      "empleado",
      "gerente",
      "cuenta",
      "PIN",
      "operador",
      "cambiar de usuario",
      "turno",
      "cajero",
      "agregar empleados"
    ],
    "content": [
      {
        "type": "p",
        "text": "Toca Personal en la barra lateral. La primera vez, configura al propietario: un nombre y un PIN de 4 dígitos. Para agregar personal y cambiar permisos se pide este PIN, así que anótalo bien: no se puede restablecer."
      },
      {
        "type": "steps",
        "items": [
          "En la página Personal, toca Agregar personal, escribe un nombre, elige un rol (Gerente o Personal) y define un PIN de 4 dígitos.",
          "El operador actual aparece en la parte inferior de la barra lateral y en la esquina superior derecha del cobro. En el cambio de turno, tócalo, elige tu nombre e ingresa tu PIN.",
          "A partir de ahí, cada pedido, pago y movimiento de stock o de puntos registra quién lo atendió, y se ve en la lista y en el detalle del pedido; los pedidos anulados también registran quién los anuló."
        ]
      },
      {
        "type": "p",
        "text": "Cuando alguien se va, usa Desactivar a este miembro del personal: su historial se conserva y puedes reactivarlo después. Cambiar un nombre no modifica los pedidos anteriores, que conservan el nombre de ese momento."
      },
      {
        "type": "note",
        "text": "Personal es una función Pro (también disponible durante la prueba). Si Pro termina, los datos del personal y quién atendió cada pedido se conservan, y los pedidos nuevos se registran a nombre del propietario; al volver a suscribirte a Pro, todo regresa."
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
    "question": "¿Qué pasa si olvido el PIN del propietario?",
    "keywords": [
      "PIN",
      "olvidé el PIN",
      "contraseña",
      "restablecer",
      "propietario",
      "recuperar",
      "bloqueado"
    ],
    "content": [
      {
        "type": "p",
        "text": "El PIN del propietario no se puede restablecer, y nuestro equipo de soporte tampoco puede desbloquearlo. El PIN se guarda junto con los datos de tu tienda, así que si eliminas y reinstalas la app y luego restauras desde la nube, regresa el mismo PIN."
      },
      {
        "type": "p",
        "text": "Al crear al propietario y en cada cambio de su PIN aparece la advertencia «Recuerda este PIN. Si lo olvidas, no se puede restablecer». Guárdalo en un lugar al que solo tú tengas acceso."
      },
      {
        "type": "p",
        "text": "Sin el PIN del propietario, todo lo que lo requiere queda fuera de alcance: agregar o editar personal, cambiar los permisos por rol y ver el registro de actividad. El personal puede seguir cobrando y haciendo el trabajo diario con su propio PIN."
      },
      {
        "type": "note",
        "text": "Si un miembro del personal olvida su PIN, no hay problema: el propietario puede restablecerlo en Personal."
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
    "question": "¿Cómo funcionan los permisos del personal y las aprobaciones del gerente?",
    "keywords": [
      "permisos",
      "aprobación",
      "gerente",
      "tope de descuento",
      "personal",
      "costo",
      "rol"
    ],
    "content": [
      {
        "type": "p",
        "text": "Un permiso tiene dos valores: Permitido o Requiere aprobación; nada está prohibido de forma absoluta. Cuando el personal llega a una acción que requiere aprobación, un compañero con permiso para hacerla elige su nombre e ingresa su PIN para dejarla pasar."
      },
      {
        "type": "list",
        "items": [
          "Acciones (ajuste manual de stock, ajuste manual de puntos, administración de productos, aplicar un descuento que supere el tope de descuento): una aprobación cubre esa sola acción.",
          "Vistas (costo y utilidad, Reportes, Resultados y gastos, Ajustes, respaldo y restauración): una aprobación desbloquea hasta que cambie el operador o la app pase a segundo plano.",
          "El tope de descuento aplica a los descuentos manuales y se revisa una sola vez al cobrar; las promociones automáticas y el canje de puntos no cuentan para el tope."
        ]
      },
      {
        "type": "p",
        "text": "Valores de fábrica: los Gerentes tienen permitido todo excepto respaldo y restauración, y Resultados y gastos, sin tope de descuento; el Personal requiere aprobación para todo, con un tope de 10 %. El propietario siempre tiene permiso y no se puede editar. Para cambiarlo, ve a Personal → Permisos por rol, toca Editar y guarda una vez: se aplica a todos de inmediato."
      },
      {
        "type": "note",
        "text": "Las anulaciones, devoluciones, ventas a cuenta y compras no tienen permiso a propósito; solo registran quién las atendió. Para revisarlas después, usa el registro de actividad."
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
    "question": "¿Cómo veo quién anuló un pedido, ajustó el stock o cambió un precio?",
    "keywords": [
      "registro de actividad",
      "registro de cambios",
      "quién cambió",
      "anulación",
      "cambio de precio",
      "ajuste de stock",
      "producto eliminado",
      "aprobaciones",
      "bitácora"
    ],
    "content": [
      {
        "type": "p",
        "text": "Usa el registro de actividad. En la página Personal, toca Registro de actividad en la esquina superior derecha e ingresa el PIN del propietario para ver las acciones sensibles de la tienda, de la más reciente a la más antigua: anulaciones, devoluciones, ajustes de stock y reconteos, ajustes manuales de puntos, aprobaciones, cambios de personal y de permisos, cambios del PIN del propietario, ajustes de impuestos, cambios de precio y costo de productos, y eliminación de productos. Los cobros normales no aparecen."
      },
      {
        "type": "list",
        "items": [
          "Cada registro muestra qué se tocó, quién hizo qué y cuándo, y el resultado, por ejemplo «M precio $390 → $350». El motivo indicado en una anulación, una devolución, un ajuste de stock o un ajuste de puntos aparece en la tercera línea del registro.",
          "Filtra por miembro del personal (incluidos los desactivados), tipo de acción y Hoy / Esta semana / Este mes.",
          "Toca un registro que apunte a un pedido, producto o cliente para abrir su detalle.",
          "El detalle del pedido, el detalle del producto y la página de cada miembro del personal tienen su propia lista de registros, que muestra solo los que les corresponden.",
          "Los productos eliminados siguen mostrando en el registro su nombre y precio de ese momento."
        ]
      },
      {
        "type": "note",
        "text": "Todos los planes registran; solo ver el registro es una función Pro, así que los registros de cuando Pro estuvo vencido aparecen al volver a suscribirte. El registro viaja con tus respaldos en la nube."
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
    "question": "¿Cómo funciona la prueba gratuita de DingPOS?",
    "keywords": [
      "prueba gratuita",
      "gratis",
      "30 días",
      "prueba",
      "periodo de prueba"
    ],
    "content": [
      {
        "type": "p",
        "text": "Tienes 30 días con todas las funciones del plan Pro desde la primera instalación, incluidas las cuentas del personal, los permisos y el registro de actividad, sin necesidad de crear una cuenta."
      },
      {
        "type": "p",
        "text": "Si te suscribes a cualquier plan durante la prueba, esta termina de inmediato y el plan que compraste se aplica desde ese momento. Al terminar la prueba, las funciones Pro, como el personal y el registro de actividad, solo siguen disponibles con una suscripción Pro. Reportes no necesita una; todos los planes lo incluyen completo."
      },
      {
        "type": "p",
        "text": "Durante los últimos 7 días y el último día, la app te recuerda una vez en cada uno cuántos días quedan, que la función de cobro se pausa cuando termina la prueba y que tus datos se conservan."
      },
      {
        "type": "p",
        "text": "Todo lo que crees durante la prueba (productos, pedidos, miembros) se conserva por completo. Tus datos nunca se eliminan, te suscribas o no después."
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
    "question": "¿Se pierden mis datos cuando termina la prueba gratuita?",
    "keywords": [
      "vence la prueba",
      "fin de la prueba",
      "bloqueado",
      "datos",
      "se pierden mis datos"
    ],
    "content": [
      {
        "type": "p",
        "text": "No: tus datos se quedan en tu dispositivo para siempre. Cuando termina la prueba, se bloquea la opción de cobrar, pero aún puedes consultar pedidos, ver reportes y administrar productos."
      },
      {
        "type": "p",
        "text": "Suscríbete cuando quieras y la opción de cobrar se desbloquea al instante, con todos tus datos tal como los dejaste."
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
    "question": "¿Qué diferencia hay entre los planes Lite, Standard y Pro?",
    "keywords": [
      "planes",
      "lite",
      "standard",
      "pro",
      "diferencia",
      "comparar",
      "mejorar plan",
      "bajar de plan",
      "precios"
    ],
    "content": [
      {
        "type": "p",
        "text": "Los tres planes incluyen todas las funciones de cobro, productos, pedidos (con anulaciones, devoluciones y cambios), reportes (todo Reportes y los Resultados mensuales desde la v3.4, y el reporte de impuestos y su exportación desde la v3.6) y respaldo en la nube. Se diferencian en las herramientas para administrar la tienda:"
      },
      {
        "type": "list",
        "items": [
          "Lite: para una persona que atiende un puesto y necesita cobro y productos.",
          "Standard: suma promociones, descuentos predefinidos, puntos de lealtad y niveles de miembro, control de stock, compras, ventas a cuenta, preventas y tasas de comisión de pago.",
          "Pro: suma cuentas y permisos del personal, aprobación de gerente, registro de actividad y registros de restauración, para tiendas con personal."
        ]
      },
      {
        "type": "p",
        "text": "¿Ya tienes Standard? Mejora a Pro desde la página de suscripción: la facturación sigue el mismo ciclo, el cambio se aplica de inmediato y Apple prorratea la diferencia. Pasar de Pro a Standard se aplica en la renovación. Los precios se muestran en la app y puedes comparar los planes en nuestra página de Precios."
      },
      {
        "type": "note",
        "text": "Bajar de plan nunca elimina datos. Las funciones que exceden tu plan se pausan, los datos se quedan y, al volver a suscribirte, las funciones regresan."
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
    "question": "¿Cómo me suscribo, cancelo mi suscripción o restauro una compra?",
    "keywords": [
      "suscribirse",
      "cancelar suscripción",
      "restaurar compra",
      "precio",
      "facturación"
    ],
    "content": [
      {
        "type": "p",
        "text": "Las suscripciones se gestionan mediante compras dentro de la app en el App Store; los planes y precios se muestran en la app. Apple procesa el pago y nosotros nunca vemos tus datos de pago."
      },
      {
        "type": "list",
        "items": [
          "Cancelar: adminístrala en Ajustes → Cuenta de Apple → Suscripciones de tu dispositivo. Cancela al menos 24 horas antes de que termine el periodo actual para evitar la renovación.",
          "Restaurar: después de cambiar de dispositivo o reinstalar, toca «Restaurar compra» en la página de Suscripción de DingPOS.",
          "Cambiar de plan: elige el nuevo plan en la página de Suscripción de DingPOS. Las mejoras (de Standard a Pro, de mensual a anual) se aplican de inmediato y Apple prorratea la diferencia; las reducciones se aplican en la renovación."
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
    "question": "Cómo configurar un descuento por monto mínimo de compra",
    "keywords": [
      "monto mínimo",
      "descuento por compra mínima",
      "gasta y ahorra",
      "guía de configuración",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ve a Ajustes → Promociones, toca Agregar, elige el tipo de promoción por monto mínimo y sigue estos pasos:"
      },
      {
        "type": "steps",
        "items": [
          "Define el monto mínimo y el descuento (monto fijo o porcentaje).",
          "Elige a qué se aplica: productos específicos, categorías específicas o déjalo en blanco para toda la tienda.",
          "Define el horario: la fecha de inicio es obligatoria; deja la fecha de fin en blanco si la promoción no tiene fin.",
          "Toca Guardar: la promoción se activa según el horario y se aplica sola al cobrar, sin códigos."
        ]
      },
      {
        "type": "note",
        "text": "El monto mínimo se compara con el subtotal de los artículos incluidos en la promoción, no con todo el carrito. Una promoción de “gasta $1000 en Bebidas” solo cuenta las bebidas para llegar al mínimo, y los productos marcados como “excluir de promociones” nunca cuentan."
      },
      {
        "type": "p",
        "text": "Una duda frecuente: si antes se aplica una promoción de mayor prioridad, el monto mínimo se revisa sobre el monto ya descontado, así que un carrito que parece superar el mínimo puede quedarse un poco corto. Para que el mínimo se evalúe primero, asígnale un número de prioridad menor."
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
    "question": "Cómo configurar ofertas 2x1 y de descuento en el artículo N, como “el tercero gratis”",
    "keywords": [
      "2x1",
      "compra uno y llévate otro",
      "el tercero gratis",
      "guía de configuración",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Crea una promoción del tipo Compra X / Recibe Y: define cuántos artículos se compran, cuántos se reciben y el porcentaje de descuento (100% = gratis). Aplícala a productos específicos o a una categoría completa; los productos distintos de una misma categoría se agrupan."
      },
      {
        "type": "list",
        "items": [
          "El artículo con descuento es el más barato del grupo, valuado a su precio efectivo actual: si una promoción anterior ya lo descontó, el descuento 2x1 se calcula sobre el precio ya descontado, no sobre el precio de lista.",
          "Si quieres que la etiqueta de “3.º gratis” muestre el precio de lista completo, asigna a esta promoción el número de prioridad más bajo para que se calcule primero. Cuando un descuento del carrito se ejecuta antes, la deducción que se muestra en el artículo gratis es menor que el precio de lista; es una propiedad del orden de cálculo que hemos verificado a fondo, no un error. Con ambos órdenes el total queda casi igual; lo que cambia es dónde se ve el descuento."
        ]
      },
      {
        "type": "p",
        "text": "Consejo: pon tu oferta principal primero en la prioridad, para que el desglose de descuentos del recibo coincida con tu mensaje de marketing."
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
    "question": "Cómo configurar multiplicadores de puntos extra",
    "keywords": [
      "multiplicador de puntos",
      "puntos dobles",
      "guía de configuración",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Crea una promoción del tipo Multiplicador de puntos y define el multiplicador (un número entero, 2 o más). Si quieres, agrega un monto mínimo de compra (por ejemplo, gasta $500 → puntos dobles) y un horario (por ejemplo, solo los sábados)."
      },
      {
        "type": "list",
        "items": [
          "Cuando se cumplen las condiciones de varios multiplicadores a la vez, solo se aplica el más alto: nunca se multiplican entre sí ni se acumulan.",
          "El monto mínimo se revisa después de canjear puntos: si al canjear puntos el total baja del mínimo, el multiplicador no se activa esa vez.",
          "Para acumular puntos hay que seleccionar un miembro al cobrar: los pedidos sin miembro no ganan puntos, así que el multiplicador no tiene nada que multiplicar."
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
    "question": "Cómo configurar ofertas por nivel de membresía y por cumpleaños",
    "keywords": [
      "nivel de membresía",
      "cumpleaños",
      "vip",
      "guía de configuración",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Primero crea los niveles en Ajustes → Niveles de membresía (por ejemplo, Oro) y luego dirige la promoción a ese nivel. Para ofertas de cumpleaños, define el público como Mes de cumpleaños y completa Límite por cliente."
      },
      {
        "type": "list",
        "items": [
          "Hay que seleccionar al miembro al cobrar para que la oferta se active: la elegibilidad se evalúa con el miembro seleccionado en ese momento.",
          "La elegibilidad por cumpleaños usa el mes de cumpleaños del miembro, así que completa ese campo; los miembros que no lo tienen nunca se consideran clientes de cumpleaños.",
          "Una promoción del mes de cumpleaños necesita un límite por cliente, que se cuenta por año calendario: un límite de 1 significa que cada cliente puede usarla una vez al año, y se reinicia al año siguiente. Sin él no se puede guardar.",
          "Las subidas automáticas de nivel se evalúan al completar el cobro; si el pedido se anula, la subida que provocó se revierte automáticamente."
        ]
      },
      {
        "type": "note",
        "text": "Antes de la v3.2, una promoción del mes de cumpleaños mostraba un error y no se podía guardar ni siquiera con el límite por cliente completo. Si te pasa, actualiza DingPOS desde el App Store."
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
    "question": "Cómo configurar regalos, complementos con precio especial y paquetes a precio fijo",
    "keywords": [
      "regalo",
      "complemento",
      "paquete",
      "compra A y recibe B",
      "guía de configuración"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hay tres tipos de ofertas combinadas: regalo por compra (compra A y recibe B), complemento con precio especial (agrega $X y recibe Y) y paquete a precio fijo (cualquier N por $X). Los regalos y complementos esperan la confirmación del cajero; los paquetes se aplican automáticamente."
      },
      {
        "type": "p",
        "text": "Los regalos y complementos nunca modifican el carrito por sí solos. Cuando se cumplen las condiciones, aparece un aviso de sugerencia en la pantalla Caja y el carrito cambia solo cuando el cajero toca el botón de regalo o el botón + del aviso (Elegir regalo o Elegir complemento). Es a propósito: los regalos implican stock físico, y alguien debe confirmar que hay existencias y que el cliente lo quiere."
      },
      {
        "type": "list",
        "items": [
          "Después de tocar la ✕ del aviso (Rechazar), la misma sugerencia no vuelve a aparecer en este carrito; con un carrito nuevo o vaciado se vuelve a ofrecer.",
          "Si el carrito deja de cumplir las condiciones (por ejemplo, se quita el artículo que activó un regalo), el regalo o complemento se quita automáticamente con un mensaje en la parte superior, y no cuenta como un uso (desde la v3.6).",
          "Desde la v3.4, las ofertas que siguen pendientes no impiden cobrar: una línea amarilla debajo del botón de pago, como «1 oferta pendiente no se aplicará», indica cuántas quedan fuera (tócala para ver cuáles), y el pedido se registra sin ellas. Para que el cobro espere como antes, activa Resolver ofertas antes de cobrar en Ajustes → Preferencias del dispositivo; se aplica solo a este iPad.",
          "Los artículos de regalo y de complemento no pueden recibir más descuentos de otras promociones de descuento, y no cuentan para los mínimos de otras promociones."
        ]
      },
      {
        "type": "p",
        "text": "Paquetes a precio fijo (se aplican automáticamente desde la v2.4): siempre que el carrito pueda formar un paquete, DingPOS lo agrupa y lo incluye en el total, sin avisos, y los paquetes no se pueden dividir."
      },
      {
        "type": "list",
        "items": [
          "Un paquete se forma solo si abarata el carrito. Entre artículos del mismo precio, se agrupan primero los que no tienen descuento, y los que ya tienen descuento lo conservan.",
          "Qué artículos se agrupan depende únicamente de lo que hay en el carrito, nunca del orden en que se escanearon.",
          "Cada artículo del paquete muestra su parte del descuento, y el monto de cada línea es después de descuentos.",
          "Al cobrar, los paquetes se vuelven a agrupar con los precios más recientes; si el resultado cambia, se te pide confirmar el nuevo total."
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
    "question": "Cómo configurar horarios y Happy Hour en una promoción",
    "keywords": [
      "horario",
      "happy hour",
      "días de la semana",
      "medianoche",
      "guía de configuración"
    ],
    "content": [
      {
        "type": "p",
        "text": "El horario de cada promoción tiene tres capas: un rango de fechas (inicio obligatorio, fin opcional), un horario diario (Happy Hour) y los días de la semana elegidos. Las tres deben coincidir para que la promoción se active."
      },
      {
        "type": "list",
        "items": [
          "En horarios que cruzan la medianoche (por ejemplo, 22:00–02:00), el día de la semana se determina por el día en que empieza el horario: si solo eliges viernes, el sábado a la 01:30 todavía cuenta como la sesión del viernes y se activa, pero el sábado a las 23:30 no.",
          "La fecha de fin es un corte estricto: aunque el horario de Happy Hour siga en curso, la promoción se detiene en cuanto pasa la fecha de fin.",
          "La hora se toma del reloj del iPad, así que verifica que la zona horaria y la hora del dispositivo sean correctas."
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
    "question": "Cómo funcionan la prioridad, la acumulación y “detener las siguientes” en las promociones",
    "keywords": [
      "prioridad",
      "acumulable",
      "detener las siguientes",
      "promociones en conflicto",
      "guía de configuración"
    ],
    "content": [
      {
        "type": "p",
        "text": "Cuando varias promociones cumplen las condiciones a la vez, tres opciones controlan el orden y cómo interactúan:"
      },
      {
        "type": "list",
        "items": [
          "Prioridad: los números más bajos se calculan primero. Arrastra para reordenar en la lista de promociones.",
          "Acumulable (activado de forma predeterminada): si lo desactivas, una promoción de artículos bloquea solo las líneas que descontó, y los demás artículos aún pueden recibir promociones de artículos posteriores; una promoción del carrito no acumulable bloquea todas las promociones del carrito posteriores.",
          "Detener las promociones siguientes al aplicarse: una vez que se aplica esta promoción, ya no se calculan más descuentos, pero los multiplicadores de puntos y las sugerencias de regalo no se ven afectados."
        ]
      },
      {
        "type": "note",
        "text": "Las promociones posteriores se calculan sobre el monto ya descontado: 10% de descuento más 5% de descuento no es 15%, porque el segundo descuento se aplica al total que queda después del primero. Además, DingPOS nunca busca la combinación más conveniente para el cliente; el orden lo determinan por completo tus prioridades."
      },
      {
        "type": "p",
        "text": "Dato curioso: si un descuento se redondea a cero, esa aplicación no cuenta y tampoco consume un límite de usos."
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
    "question": "¿DingPOS va a integrar el procesamiento de pagos con tarjeta?",
    "keywords": [
      "pagos",
      "cobro con tarjeta",
      "integración de pagos",
      "terminal de pago",
      "pasarela de pago"
    ],
    "content": [
      {
        "type": "p",
        "text": "Por ahora DingPOS no interviene en el flujo del dinero: los métodos de pago son etiquetas para llevar tu contabilidad, y los cobros se hacen en tu terminal o app de pagos de siempre."
      },
      {
        "type": "p",
        "text": "Integrar el procesamiento de pagos depende de la demanda real de los usuarios. Si lo necesitas, escríbenos con el servicio que te gustaría conectar (qué procesador, qué terminal) y cómo lo usarías: priorizamos el desarrollo según el número de solicitudes."
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
    "question": "¿Habrá facturación electrónica o impresión de tickets en DingPOS?",
    "keywords": [
      "factura electrónica",
      "facturación electrónica",
      "comprobante fiscal",
      "ticket",
      "impresora de tickets",
      "impresora térmica"
    ],
    "content": [
      {
        "type": "p",
        "text": "Todavía no. La facturación electrónica y la impresión de tickets requieren comprar equipos de facturación e impresoras de tickets para probar y desarrollar, lo que tiene un costo importante. Como somos un equipo pequeño, lo planearemos cuando crezca la base de usuarios y los ingresos sean estables."
      },
      {
        "type": "p",
        "text": "Si lo necesitas, escríbenos con el modelo de equipo que usas: priorizamos el desarrollo según el número de solicitudes."
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
    "question": "¿DingPOS funciona con lectores de código de barras físicos?",
    "keywords": [
      "lector de código de barras",
      "escáner de códigos de barras",
      "pistola lectora",
      "bluetooth",
      "usb",
      "hardware"
    ],
    "content": [
      {
        "type": "p",
        "text": "El escaneo de códigos de barras con la cámara para dar de alta productos ya está disponible. Los lectores físicos (USB / Bluetooth) todavía no tienen soporte oficial: como otras funciones de hardware, requieren comprar equipos para probar y desarrollar, y los planearemos conforme crezca la base de usuarios."
      },
      {
        "type": "note",
        "text": "El campo de búsqueda de la pantalla de cobro reconoce códigos de barras, así que en teoría un lector en modo teclado podría escribir en él y mostrar los productos. Pero no lo hemos verificado con equipos reales, por lo que no es una función con soporte oficial. Si probaste un lector que funciona, ¡cuéntanos el modelo!"
      },
      {
        "type": "p",
        "text": "Si lo necesitas, escríbenos: priorizamos el desarrollo según el número de solicitudes."
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
    "question": "¿Hay un reporte de cierre mensual en DingPOS?",
    "keywords": [
      "cierre mensual",
      "conciliación",
      "cierre de mes",
      "reporte mensual",
      "cuentas por pagar",
      "cuentas por cobrar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Desde la v3.4, Resultados muestra la utilidad neta de cada mes después del costo de productos, las comisiones y los gastos; consulta «¿Cómo veo cuánto gané realmente cada mes?». Desde la v3.6, el reporte de impuestos exporta un periodo (por ejemplo, Este mes) como CSV, libro de Excel o reporte en PDF para tu contador, con las ventas, los impuestos, el monto recibido por cada método de pago y las cuentas por cobrar. Resultados y los demás reportes todavía no se pueden exportar, pero en la app ya tienes todo lo necesario para conciliar:"
      },
      {
        "type": "list",
        "items": [
          "Elige Este mes en Reportes para ver los ingresos por ventas del mes, el dinero recibido, la utilidad y el desglose por método de pago.",
          "Las compras a proveedores con pago mensual se reúnen en Por pagar, dentro de Compras, donde puedes liquidar todo un mes de una vez.",
          "Las ventas a cuenta a clientes se reúnen en Pedidos → Cuentas por cobrar, donde puedes liquidar todo un mes de una vez."
        ]
      },
      {
        "type": "p",
        "text": "Si necesitas un reporte de cierre mensual que puedas exportar o imprimir, más allá de lo que cubre el reporte de impuestos, escríbenos con los campos que necesitas: priorizamos el desarrollo según el número de solicitudes."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
