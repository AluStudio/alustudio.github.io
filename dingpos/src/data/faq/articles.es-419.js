// Generated from en and the es-419 translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync es-419`, then `npm run l10n -- apply es-419`.

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
      "configurar tienda"
    ],
    "content": [
      {
        "type": "p",
        "text": "La primera vez que abres DingPOS, un asistente de configuración te guía para abrir tu tienda en unos 10 minutos:"
      },
      {
        "type": "steps",
        "items": [
          "Elige tu país: la moneda, el modo de impuesto y una tasa de impuesto predeterminada se completan automáticamente (en este paso aún puedes ajustar la tasa y el modo de impuesto).",
          "Escribe el nombre de tu tienda y, si quieres, sube el logotipo.",
          "Sigue la guía para crear de 3 a 5 productos (puedes omitirlo y agregarlos más adelante cuando quieras)."
        ]
      },
      {
        "type": "p",
        "text": "Al terminar escucharás un «Ding!»: tu tienda está lista y puedes empezar a cobrar ventas de inmediato."
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
        "text": "No. DingPOS no tiene cuentas: descárgalo y empieza a vender. Tus productos, pedidos y datos de clientes se quedan en tu iPad y nunca se suben a nuestros servidores."
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
        "text": "Por ahora DingPOS funciona en iPad con iPadOS 17 o posterior, y está pensado principalmente para usarse en horizontal."
      },
      {
        "type": "p",
        "text": "Todavía no es compatible con iPhone ni con Mac. Si quieres que admitamos otro dispositivo, escríbenos y cuéntanos cómo lo usarías."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "¿Puedo cambiar la moneda o el modo de impuesto después de la configuración?",
    "keywords": [
      "moneda",
      "modo de impuesto",
      "cambiar",
      "bloqueado",
      "tasa de impuesto",
      "impuesto incluido"
    ],
    "content": [
      {
        "type": "p",
        "text": "La tasa de impuesto se puede cambiar cuando quieras en Ajustes; la nueva tasa solo se aplica a los pedidos futuros."
      },
      {
        "type": "p",
        "text": "La moneda y el modo de impuesto (incluido / no incluido) se bloquean al terminar la configuración. Todos tus pedidos anteriores se calcularon con ellos, así que cambiarlos a medias dañaría tus reportes."
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
      "cambiar idioma",
      "lenguaje"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS está disponible en inglés y chino tradicional. Ve a Ajustes → Preferencias del dispositivo y toca Idioma de la app. Se abre la página de DingPOS en la app Ajustes del iPad, donde eliges el idioma en Idioma."
      },
      {
        "type": "p",
        "text": "iOS no permite que las apps abran directamente la lista de idiomas, así que el último toque se hace en los Ajustes del sistema. El idioma se aplica solo a este iPad."
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
        "text": "La pantalla de caja admite hasta 10 carritos al mismo tiempo. Toca «+» en la barra de carritos para agregar uno y toca una pestaña numerada para cambiar de carrito."
      },
      {
        "type": "p",
        "text": "Cada carrito se calcula por separado. Si el cliente A todavía está eligiendo, cambia a otro carrito y cobra primero al cliente B. El carrito se elimina solo cuando se completa su cobro."
      },
      {
        "type": "note",
        "text": "Los carritos solo viven en la memoria: los que no se han cobrado se borran al cerrar la app por completo."
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
      "recibo"
    ],
    "content": [
      {
        "type": "p",
        "text": "El impuesto se calcula automáticamente según el modo de impuesto que elegiste al configurar la app. El recibo muestra el monto del impuesto en ambos modos:"
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
        "text": "Orden completo del cálculo: descuentos en artículos → descuento en el carrito → impuesto. Los montos se redondean hacia arriba desde la mitad (0.5 sube) según los decimales de la moneda (por ejemplo, 0 para TWD y 2 para USD)."
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
    "question": "¿Qué métodos de pago acepta DingPOS?",
    "keywords": [
      "pago",
      "efectivo",
      "tarjeta de crédito",
      "line pay",
      "cambio",
      "personalizado",
      "a cuenta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Efectivo, Tarjeta de crédito y Line Pay vienen incluidos, y en Ajustes puedes agregar las etiquetas de pago personalizadas que quieras (por ejemplo, Apple Pay o billeteras locales)."
      },
      {
        "type": "p",
        "text": "Los métodos de pago son etiquetas de registro: DingPOS no procesa pagos reales. Cobra con tarjeta o pago móvil en tu terminal o app de siempre y luego elige la etiqueta correspondiente en DingPOS para registrarlo. En los pagos en efectivo, el cambio se calcula automáticamente."
      },
      {
        "type": "p",
        "text": "Si un cliente frecuente se lleva la mercancía ahora y paga después, elige A cuenta: la venta se registra como cuenta por cobrar y se liquida cuando llega el dinero. Consulta «¿Puedo vender a cuenta a clientes frecuentes y cobrar después?»"
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
      "multiple-carts"
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
        "text": "Ve a Pedidos, busca el pedido, abre su detalle y elige Anular. Confirma y listo."
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
      "cambiar talla"
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
          "El stock controlado se restituye automáticamente. Los puntos ganados con el pedido original se descuentan, los puntos canjeados se devuelven y los artículos de reemplazo generan sus propios puntos.",
          "Un pedido puede devolverse en varias rondas, pero nunca por más de la cantidad vendida originalmente. Los límites de uso de las promociones no se restituyen con una devolución."
        ]
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
        "text": "Al cobrar, cambia la parte superior de la pantalla de Venta a Preventa, elige la fecha de retiro, ingresa el anticipo (desde 0 hasta el monto total, con atajos de 30 %, 50 % y total) y elige cómo se paga el anticipo. Asocia un cliente para poder avisarle cuando llegue la mercancía."
      },
      {
        "type": "list",
        "items": [
          "El stock se descuenta al registrar la preventa, con lo que la mercancía queda reservada para el cliente. Los artículos agotados quedan en negativo y se recuperan cuando se recibe una orden de compra.",
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
    "question": "¿Puedo venderles a cuenta a mis clientes frecuentes para que paguen después?",
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
        "text": "Sí. Selecciona al cliente al cobrar y elige A cuenta como método de pago. Una deuda necesita un responsable, por eso A cuenta no está disponible sin un cliente."
      },
      {
        "type": "p",
        "text": "Para cobrar, cambia la parte superior de Pedidos a Cuentas por cobrar. Las deudas se agrupan por cliente; ábrelo para liquidar un solo pedido, un mes completo o todo; cada vez, DingPOS te pregunta cómo se pagó el dinero. Un pedido individual también se puede liquidar desde su detalle, y una liquidación registrada por error se puede deshacer con Revertir liquidación."
      },
      {
        "type": "list",
        "items": [
          "Los ingresos por ventas cuentan el día en que sale la mercancía; el dinero recibido y los puntos de lealtad esperan hasta el día en que se liquida.",
          "Los pedidos sin liquidar llevan una insignia ámbar en la lista, y el detalle del cliente muestra cuánto debe en ese momento.",
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
      "payment-methods",
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
      "observación"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Las páginas de detalle de pedidos, clientes y órdenes de compra tienen una tarjeta de notas: tócala para editar, hasta 500 caracteres. También puedes escribir una en el formulario al crear un cliente o una orden de compra."
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
      "especificaciones",
      "combinaciones"
    ],
    "content": [
      {
        "type": "p",
        "text": "En la pantalla de edición del producto, toca Agregar opción en Opciones de variante para añadir una opción (por ejemplo, «Color») y luego usa «+ Valor» para agregar cada una de sus alternativas (por ejemplo, Rojo, Azul). Con dos o más opciones (por ejemplo, Color × Talla), DingPOS genera todas las combinaciones por ti (Rojo/S, Rojo/M, Azul/S…)."
      },
      {
        "type": "p",
        "text": "Cada combinación tiene su propio precio y costo, y lleva su propio stock. Al cobrar, al tocar el producto aparece un selector de variante antes de agregarlo al carrito."
      },
      {
        "type": "note",
        "text": "Los nombres de opciones y valores están limitados a 20 caracteres."
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
        "text": "Una vez activado, las ventas y las preventas descuentan el stock automáticamente; las anulaciones, las devoluciones y las preventas canceladas lo regresan; recibir una orden de compra lo aumenta; y puedes ajustarlo a mano en cualquier momento. Cada movimiento queda registrado en un historial completo. El stock bajo se resalta con una alerta de color."
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
        "text": "Es a propósito: el cobro nunca se bloquea por falta de stock. La primera regla de una caja en vivo es que el cliente no espere: un número equivocado en el sistema se corrige después, pero una venta interrumpida se pierde para siempre."
      },
      {
        "type": "p",
        "text": "Un stock negativo suele significar que no se registró una reposición, o que un producto de preventa aún no llega (las preventas descuentan el stock al registrarse). Registra las reposiciones recibiendo una orden de compra y la cifra se recupera sola; corrige las diferencias de un conteo físico con un ajuste manual, que queda guardado en el historial de movimientos."
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
        "text": "Compras, en la barra lateral, administra proveedores y órdenes de compra. Un proveedor guarda nombre, persona de contacto, teléfono, dirección y una condición de pago predeterminada (pago inmediato o mensual)."
      },
      {
        "type": "steps",
        "items": [
          "Toca Nueva compra, elige el proveedor y agrega los productos, cantidades y costos unitarios (que se rellenan con el costo actual de cada producto). También puedes agregar un costo de envío. Si el proveedor aún no existe, toca Agregar proveedor en la parte superior izquierda de la lista de proveedores: el nuevo proveedor vuelve directo a la orden de compra.",
          "Un borrador nunca afecta el stock ni las cuentas por pagar: edítalo o elimínalo con libertad.",
          "Cuando llegue la mercancía, toca Recibir stock: el stock con control sube, y la orden de compra recibe su número y se bloquea. De forma predeterminada, al recibir también se actualiza el costo de cada producto con este costo unitario; desactiva Sincronizar costo del producto en la orden de compra para dejar los costos sin cambios."
        ]
      },
      {
        "type": "p",
        "text": "La condición de pago decide qué sigue: las órdenes de pago inmediato se marcan como pagadas, mientras que las mensuales quedan pendientes en Por pagar, donde puedes saldarlas por proveedor: una orden, el mes o todo."
      },
      {
        "type": "note",
        "text": "Compras requiere el plan Standard o superior. No se puede eliminar un proveedor con órdenes recibidas sin pagar."
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
    "question": "¿Cuál es la diferencia entre ingresos por ventas y dinero recibido?",
    "keywords": [
      "ingresos por ventas",
      "dinero recibido",
      "ingresos",
      "conciliar",
      "anticipo",
      "venta a cuenta"
    ],
    "content": [
      {
        "type": "p",
        "text": "Los ingresos por ventas cuentan el día en que se entregó la mercancía; el dinero recibido cuenta el día en que entró el dinero. En un pedido pagado en caja ambos ocurren el mismo día y las cifras coinciden. Se separan cuando:"
      },
      {
        "type": "list",
        "items": [
          "Venta a cuenta: la mercancía sale hoy y cuenta en los ingresos por ventas de hoy; el dinero cuenta en el dinero recibido el día en que se liquida.",
          "Preventa: el anticipo cuenta en el dinero recibido cuando se paga; los ingresos por ventas se reconocen completos en la fecha de retiro.",
          "Anticipo retenido: cuando un cliente cancela una preventa y te quedas con el anticipo, este ya se contó en el dinero recibido al pagarse. Reportes lo muestra por separado como anticipos retenidos y nunca cuenta como ingreso por ventas."
        ]
      },
      {
        "type": "p",
        "text": "Para conciliar, compara el dinero recibido con tu caja y tu terminal de tarjetas; para saber cuánto vendiste realmente en un periodo, mira los ingresos por ventas. Las devoluciones restan de los ingresos por ventas el día de la devolución."
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
    "question": "¿Qué periodos puedo ver en los reportes?",
    "keywords": [
      "reportes",
      "periodo",
      "esta semana",
      "este mes",
      "este año",
      "rango personalizado",
      "fecha",
      "productos más vendidos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Elige Hoy, Ayer, Esta semana, Este mes, Este año o Todo el tiempo en la parte superior de Reportes, o usa Personalizado para elegir una fecha de inicio y una de fin. Esta semana sigue el primer día de la semana del dispositivo; Este mes y Este año empiezan el día 1 y el 1 de enero. Cada opción muestra las fechas que abarca, y Todo el tiempo empieza desde la primera transacción de tu tienda."
      },
      {
        "type": "p",
        "text": "Para un solo día, el gráfico de tendencia se convierte en un gráfico de barras por hora; los periodos más largos usan días, semanas, meses o años por barra según su duración."
      },
      {
        "type": "p",
        "text": "La tarjeta Ranking de productos muestra los 5 primeros. Toca la tarjeta o Ver todo para listar todos los productos vendidos en el periodo, ordenados por cantidad después de devoluciones."
      },
      {
        "type": "p",
        "text": "En el plan Pro, Comparación de ventas, a la derecha de la barra de periodo, compara el periodo con el anterior o con el mismo periodo del año pasado; consulta «¿Qué muestran los reportes avanzados de Pro?»."
      },
      {
        "type": "note",
        "text": "Estos periodos de calendario llegaron en la v2.4; las versiones anteriores ofrecían rangos móviles (Hoy / 7 días / 30 días / Todo el tiempo). Si aún los ves, actualiza DingPOS desde el App Store."
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
    "question": "¿Qué muestran los reportes avanzados de Pro?",
    "keywords": [
      "reportes avanzados",
      "pro",
      "comparación de ventas",
      "año pasado",
      "mapa de calor",
      "horas de más venta",
      "productos de baja rotación",
      "valuación de inventario",
      "tasa de recompra",
      "puntos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Los reportes avanzados no son una pantalla aparte: están directamente en Reportes y siguen el periodo que elijas arriba:"
      },
      {
        "type": "list",
        "items": [
          "Comparación de ventas: a la derecha de la barra de periodo, compara con el mismo periodo del año pasado o con el periodo anterior (un solo día contra el mismo día de la semana pasada, esta semana contra la semana pasada, este mes contra el mes pasado, este año contra el año pasado, un rango personalizado contra la misma cantidad de días anteriores). El indicador de Dinero recibido muestra la diferencia y la tasa de crecimiento, y el gráfico de ingresos agrega una línea más clara para el periodo de comparación. Mientras un periodo sigue en curso, el periodo de comparación se corta en el mismo momento.",
          "Día × hora: cambia el encabezado Ventas en el tiempo a Día × hora para ver un mapa de calor de siete días y 24 horas: cuanto más oscura la celda, más vendiste. Alterna entre ingresos y pedidos; con una comparación activa, verás qué horas crecieron y cuáles bajaron.",
          "Productos de baja rotación: cambia el encabezado de la tarjeta de ranking a Productos de baja rotación para listar los productos de menos a más ventas, con el stock actual y la última fecha en que se vendió cada uno. Los productos que nunca se vendieron aparecen como Nunca vendido. De forma predeterminada solo se muestran los productos con stock.",
          "Tasa de recompra: la última línea del indicador de clientes es la proporción de miembros que compraron en el periodo y que han comprado dos o más veces en total.",
          "Ahora mismo: valuación de inventario (stock actual × costo actual), todos los movimientos de stock del periodo seleccionado y los puntos que los clientes tienen sin canjear, con el máximo que pueden descontar. Son saldos actuales; el periodo no los cambia."
        ]
      },
      {
        "type": "p",
        "text": "Sin Pro, cada uno de estos cinco puntos lleva un pequeño candado que abre una explicación de la mejora de plan; todo lo demás en Reportes funciona igual. Los reportes leen datos que tu tienda ya guarda, así que cuando termina Pro solo se ocultan los reportes: no se pierde ningún dato."
      },
      {
        "type": "note",
        "text": "El personal ve los reportes avanzados con el permiso de Panel; los montos de valuación de inventario además requieren el permiso de Costos y utilidad."
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
    "question": "¿Cómo se reporta la utilidad si no registré los costos?",
    "keywords": [
      "costo",
      "utilidad",
      "margen",
      "reportes",
      "utilidad sin registrar"
    ],
    "content": [
      {
        "type": "p",
        "text": "El costo es un campo opcional. Los productos sin costo aparecen como «utilidad sin registrar» en los reportes y se excluyen del cálculo de utilidad: los ingresos por ventas se cuentan completos, solo se omite la utilidad."
      },
      {
        "type": "p",
        "text": "Para obtener reportes de utilidad completos, agrega los costos en la página de edición del producto; los pedidos futuros quedarán incluidos. La utilidad se calcula sobre los ingresos por ventas después de descuentos."
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
          "Alcance: ¿los artículos del carrito están dentro del alcance de productos o categorías de la promoción? ¿Se alcanzó el monto mínimo de compra?",
          "Público: ¿la promoción está limitada a un nivel de membresía o al mes de cumpleaños? ¿Se seleccionó a ese miembro al cobrar?",
          "Límites de uso: ¿se alcanzó el tope total de usos o el tope de este cliente?",
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
        "text": "Ve a Ajustes → Programa de lealtad y define dos reglas: cuántos puntos se ganan (Y) por cada monto gastado (X), y cuánto descuento (M) se obtiene al canjear N puntos (con un tope de canje por pedido, opcional). También puedes dar puntos de bienvenida a los nuevos miembros de forma automática."
      },
      {
        "type": "p",
        "text": "Selecciona al miembro al cobrar y los puntos se acumulan solos; para canjearlos, ingresa los puntos que quieres usar. Al anular un pedido se descuentan los puntos que ganó y se devuelven los puntos que se canjearon."
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
        "text": "Primero toca Reintentar; si funciona, la app abre como siempre. Si sigue pasando, toca Contactar a Soporte y cuéntanos, y te ayudaremos a recuperar tus datos. Esta pantalla nunca mueve ni elimina archivos."
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
    "slug": "import-csv",
    "category": "backup",
    "since": "2.3",
    "question": "¿Puedo importar productos y ventas desde otro POS o una hoja de cálculo?",
    "keywords": [
      "importar",
      "csv",
      "excel",
      "hoja de cálculo",
      "migrar",
      "cambiar de POS",
      "carga masiva",
      "historial de ventas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sí. Ve a Ajustes → Importar datos, elige si vas a importar productos o ventas y selecciona un archivo CSV (Excel y Google Sheets pueden guardar en CSV)."
      },
      {
        "type": "steps",
        "items": [
          "El archivo se abre como tabla. Los nombres de columna comunes en inglés y chino se asocian automáticamente; toca el encabezado de cualquier columna para cambiar su asignación.",
          "Toca cualquier celda para corregir su valor ahí mismo; no necesitas editar el archivo y empezar de nuevo.",
          "Toca Confirmar para validar. Las filas con problemas se marcan en rojo con el motivo; en la importación de ventas se pueden omitir los pedidos con errores.",
          "Resuelve lo que requiera una decisión (nombres de producto duplicados, una fila que coincide con varios clientes), revisa el resumen y toca Iniciar importación."
        ]
      },
      {
        "type": "list",
        "items": [
          "Las ventas importadas se ubican según la fecha de la transacción y se recalculan con la moneda y el modo de impuestos de tu tienda. No afectan el inventario y no otorgan puntos de bienvenida.",
          "Los clientes se asocian con los existentes por teléfono o correo; los que no coincidan se crean.",
          "Los pedidos importados muestran la fecha de Importado el y el número de pedido de origen, y no se pueden anular ni devolver.",
          "Las filas con errores se pueden exportar como un CSV con los motivos anotados: corrígelas y vuelve a importar. Las filas duplicadas se omiten automáticamente."
        ]
      },
      {
        "type": "note",
        "text": "La importación de datos está en beta. Cada archivo puede tener hasta 50,000 filas o 20 MB. Haz un respaldo en la nube antes de importar; si algo no se importa o el resultado se ve mal, avísanos con Informar de un problema en la pantalla de importación."
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
          "Acciones (ajuste manual de stock, administración de productos, cobrar por encima del tope de descuento): una aprobación cubre esa sola acción.",
          "Vistas (costo y utilidad, Reportes, Ajustes, respaldo y restauración): una aprobación desbloquea hasta que cambie el operador o la app pase a segundo plano.",
          "El tope de descuento aplica a los descuentos manuales y se revisa una sola vez al cobrar; las promociones automáticas y el canje de puntos no cuentan para el tope."
        ]
      },
      {
        "type": "p",
        "text": "Valores de fábrica: los Gerentes tienen permitido todo excepto respaldo y restauración, sin tope de descuento; el Personal requiere aprobación para todo, con un tope de 10 %. El propietario siempre tiene permiso y no se puede editar. Para cambiarlo, ve a Personal → Permisos por rol, toca Editar y guarda una vez: se aplica a todos de inmediato."
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
      "auditoría",
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
        "text": "Usa el registro de actividad. En la página Personal, toca Registro de actividad en la esquina superior derecha e ingresa el PIN del propietario para ver las acciones sensibles de la tienda, de la más reciente a la más antigua: anulaciones, devoluciones, ajustes manuales de stock, aprobaciones, cambios de personal y de permisos, cambios del PIN del propietario, cambios de precio y costo de productos, y eliminación de productos. Los cobros normales no aparecen."
      },
      {
        "type": "list",
        "items": [
          "Cada registro muestra qué se tocó, quién hizo qué y cuándo, y el resultado, por ejemplo «M precio $390 → $350».",
          "Filtra por miembro del personal (incluidos los desactivados), tipo de acción y Hoy / Esta semana / Este mes.",
          "Toca un registro que apunte a un pedido, producto o cliente para abrir su detalle.",
          "El detalle del pedido, el detalle del producto y la página de cada miembro del personal tienen su propio acceso, que muestra solo los registros que les corresponden.",
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
        "text": "Tienes 30 días con todas las funciones del plan Pro desde la primera instalación, incluidas las cuentas del personal, los permisos, el registro de actividad y los reportes avanzados, sin necesidad de crear una cuenta."
      },
      {
        "type": "p",
        "text": "Si te suscribes a cualquier plan durante la prueba, esta termina de inmediato y el plan que compraste se aplica desde ese momento. Al terminar la prueba, las funciones Pro, como el personal y los reportes avanzados, solo siguen disponibles con una suscripción Pro."
      },
      {
        "type": "p",
        "text": "Todo lo que crees durante la prueba (productos, pedidos, miembros) se conserva completo. Tus datos nunca se eliminan, te suscribas o no después."
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
        "text": "No: tus datos se quedan en tu dispositivo para siempre. Cuando termina la prueba, el cobro se bloquea, pero aún puedes consultar pedidos, ver reportes y administrar productos."
      },
      {
        "type": "p",
        "text": "Suscríbete cuando quieras y el cobro se desbloquea al instante, con todos tus datos tal como los dejaste."
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
        "text": "Los tres planes incluyen cobro completo, productos, pedidos (con anulaciones, devoluciones y cambios), reportes y respaldo en la nube. Se diferencian en las herramientas para administrar la tienda:"
      },
      {
        "type": "list",
        "items": [
          "Lite: para una persona que atiende un puesto y necesita cobro y productos.",
          "Standard: suma promociones, puntos de lealtad y niveles de miembro, control de stock, compras, ventas a cuenta y preventas.",
          "Pro: suma cuentas y permisos del personal, aprobación de gerente, registro de actividad, registros de restauración y reportes avanzados, para tiendas con personal."
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
        "text": "Ve a Ajustes → Promociones → Agregar, elige el tipo de promoción por monto mínimo y sigue estos pasos:"
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
    "question": "Cómo configurar ofertas 2x1 y de “el tercero gratis”",
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
          "Cuando califican varios multiplicadores a la vez, solo se aplica el más alto: nunca se multiplican entre sí ni se acumulan.",
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
        "text": "Primero crea los niveles en Ajustes → Niveles de membresía (por ejemplo, Oro) y luego dirige la promoción a ese nivel. Para ofertas de cumpleaños, elige la condición “Mes de cumpleaños”."
      },
      {
        "type": "list",
        "items": [
          "Hay que seleccionar al miembro al cobrar para que la oferta se active: la elegibilidad se evalúa con el miembro seleccionado en ese momento.",
          "La elegibilidad por cumpleaños usa el mes de cumpleaños del miembro, así que completa ese campo; los miembros que no lo tienen nunca se consideran clientes de cumpleaños.",
          "Las subidas automáticas de nivel se evalúan al completar el cobro; si el pedido se anula, la subida que provocó se revierte automáticamente."
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
        "text": "Los regalos y complementos nunca modifican el carrito por sí solos. Cuando se cumplen las condiciones, aparece un aviso de sugerencia en la pantalla de caja y el carrito cambia solo cuando el cajero toca Aceptar. Es a propósito: los regalos implican stock físico, y alguien debe confirmar que hay existencias y que el cliente lo quiere."
      },
      {
        "type": "list",
        "items": [
          "Después de tocar Rechazar, la misma sugerencia no vuelve a aparecer en este carrito; con un carrito nuevo o vaciado se vuelve a ofrecer.",
          "Si aparece una sugerencia nueva antes de confirmar el cobro, hay que Aceptarla o Rechazarla antes de poder enviar el pedido.",
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
        "text": "Cuando califican varias promociones a la vez, tres opciones controlan el orden y cómo interactúan:"
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
        "text": "Todavía no hay un reporte de cierre mensual específico, pero en la app ya tienes todo lo necesario para conciliar:"
      },
      {
        "type": "list",
        "items": [
          "Elige Este mes en Reportes para ver los ingresos del mes, el dinero recibido, la utilidad y el desglose por método de pago.",
          "Las compras a proveedores con pago mensual se reúnen en Por pagar, dentro de Compras, donde puedes liquidar todo un mes de una vez.",
          "Las ventas a crédito a clientes se reúnen en Pedidos → Cuentas por cobrar, donde puedes liquidar todo un mes de una vez."
        ]
      },
      {
        "type": "p",
        "text": "Si necesitas un reporte de cierre mensual que puedas exportar o imprimir, escríbenos con los campos que necesitas: priorizamos el desarrollo según el número de solicitudes."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
