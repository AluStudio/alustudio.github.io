// DingPOS guides — es-419 pack. Guides are acquisition articles written for
// one market (fees, laws and payment brands differ by country), so a pack is
// NOT a translation of en or zh-Hant: each language lists only the guides
// written for the markets that read it, and a language without a pack has no
// guides section. This pack is written natively in Spanish, not generated
// through `npm run l10n`. Rules: docs/specs/seo-aeo.md §獲客文章. Checked by
// scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("MX")
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
  nav: "Guías",
  title: "Guías para pequeños negocios",
  subtitle: "Cobros, costos y márgenes, explicados para quien atiende su propio negocio.",
  meta_description: "Guías para dueños de pequeños negocios: cuánto cuesta de verdad cobrar con tarjeta y cuánto margen se lleva la comisión, con fórmulas, ejemplos y fuentes.",
  back: "Todas las guías",
  related_title: "Guías relacionadas",
  sources_title: "Fuentes",
  checked: "Última revisión: {{date}}",
  cta_title: "Registra tus ventas en el iPad y ve la comisión estimada de cada método de pago",
  cta_text: "DingPOS es un punto de venta para iPad pensado para negocios pequeños. Sin comisiones por transacción y con prueba gratuita de 30 días.",
  cta_button: "Descargar en el App Store",
  markets: { MX: "México" },
};

export const articles = [
  {
    slug: "payment-processing-fees-mexico",
    market: "MX",
    checked: "2026-10-25",
    title: "Comisión por cobrar con tarjeta en México: cuánto cobran Clip, Mercado Pago y los bancos, y cuánto margen te quita",
    summary: "Clip: 3.6% + IVA, o 2.99% + $1 + IVA en Socio Clip; Mercado Pago Point: 3.5% + IVA; BBVA: 2.5% + IVA. Con 40% de margen, una comisión de 4.06% se lleva el 10%.",
    content: [
      { type: "p", text: "La tarifa estándar de Clip es 3.6% + IVA por cobro con tarjeta (4.18% con IVA); las cuentas nuevas entran a Socio Clip con 2.99% + $1 + IVA mientras vendan $10,000 al mes o más. Mercado Pago Point cobra 3.5% + IVA, BBVA anuncia 2.50% + IVA y CoDi no cobra comisión. La comisión sale de tu margen: en un producto de $250 que te cuesta $150, Point te descuenta $10.15, el 10% de los $100 que ganas." },

      { type: "h2", text: "¿Cuánto cobra cada forma de pago?" },
      { type: "p", text: "Tarifas de octubre de 2026; cambian con promociones y contratos, y la tuya está en tu app." },
      {
        type: "table",
        head: ["Forma de pago", "Comisión", "Notas"],
        rows: [
          ["Efectivo", "0", "Sin comisión"],
          ["Clip (terminal)", "Estándar: 3.6% + IVA (4.18%). Socio Clip: desde 2.99% + $1 + IVA", "Socio Clip baja la tasa con tus ventas del mes anterior; con dos meses seguidos bajo $10,000 vuelves a la estándar. Amex, tarjetas internacionales y vales: 3.50%"],
          ["Mercado Pago Point", "3.5% + IVA (4.06%)", "La página a veces mostró tasas más bajas por volumen; revisa la tuya en la app"],
          ["Terminal de banco", "Según contrato. BBVA anuncia 2.50% + IVA (2.90%)", "Sin facturación mínima"],
          ["CoDi (QR de tu banco)", "0", "Sin comisión; el dinero llega de inmediato"],
          ["Transferencia (SPEI) o DiMo", "Depende de tu banco", "Pregunta si te cobra por recibir"],
          ["Apple Pay, Google Pay", "La de tu terminal", "Pasan como pago con tarjeta"],
        ],
      },
      { type: "p", text: "“3.5% + IVA” quiere decir que te descuentan 4.06%: a la comisión se le suma el 16% de IVA. Si estás dado de alta en el RFC, tus ventas no están exentas y recibes el CFDI de la comisión con el IVA desglosado, por lo general puedes acreditar ese IVA; si no puedes, es un costo más. Los ejemplos usan la tasa con IVA, la que sale de tu depósito." },
      { type: "note", text: "Cobrar a meses sin intereses cuesta mucho más: en Point, a la tasa base se suma 4.69% a 3 meses, más IVA, y una venta de $1,000 paga $95.00 de comisión en vez de $40.60 de contado." },

      { type: "h2", text: "La comisión sale de tu margen, no de tus ventas" },
      { type: "p", text: "Con el producto de $250 que te cuesta $150, el margen es de $100:" },
      {
        type: "table",
        caption: "Cifras en pesos, comisión con IVA. “Te queda” es antes de renta, sueldos y otros gastos.",
        head: ["", "Efectivo o CoDi", "BBVA 2.90%", "Clip Bronce 2.99% + $1", "Point 4.06%", "Clip 4.18%"],
        rows: [
          ["Paga el cliente", "250.00", "250.00", "250.00", "250.00", "250.00"],
          ["Comisión", "0", "7.25", "9.83", "10.15", "10.44"],
          ["Te depositan", "250.00", "242.75", "240.17", "239.85", "239.56"],
          ["Te queda tras costo y comisión", "100.00", "92.75", "90.17", "89.85", "89.56"],
          ["Comisión como parte del margen", "0%", "7.3%", "9.8%", "10.2%", "10.4%"],
        ],
      },
      { type: "p", text: "La fórmula: parte del margen que se lleva la comisión = tasa de comisión ÷ margen. Aquí el margen es $100 ÷ $250 = 40%, y con Point, 4.06% ÷ 40% = 10.2%. Entre más bajo es tu margen, más pesa la misma comisión:" },
      {
        type: "table",
        caption: "Parte del margen que se lleva la comisión. Tasas con IVA; Clip Bronce es 2.99% + IVA, sin el $1 fijo.",
        head: ["Margen", "BBVA 2.90%", "Clip Bronce 3.47%", "Point 4.06%", "Clip 4.18%"],
        rows: [
          ["20%", "14.5%", "17.3%", "20.3%", "20.9%"],
          ["30%", "9.7%", "11.6%", "13.5%", "13.9%"],
          ["40%", "7.3%", "8.7%", "10.2%", "10.4%"],
          ["50%", "5.8%", "6.9%", "8.1%", "8.4%"],
          ["60%", "4.8%", "5.8%", "6.8%", "7.0%"],
        ],
      },
      { type: "p", text: "Una tiendita de refrescos y botanas con 20% de margen que cobra con Clip estándar le entrega casi $21 de cada $100 de margen a la comisión. El cargo fijo pesa más en tickets chicos: el $1 de Clip Bronce ($1.16 con IVA) suma 0.46% en una venta de $250 y 2.3% en una de $50." },

      { type: "h2", text: "¿Cuánto pagas al mes? Haz la cuenta por forma de pago" },
      { type: "p", text: "Calcula cada forma de cobro por separado y suma; el efectivo cuenta como cero. Supongamos que en un mes cobras $60,000 sin efectivo:" },
      {
        type: "table",
        caption: "Cifras en pesos. Supone que tu banco no cobra las transferencias. Con menos de $10,000 al mes dos meses seguidos, Clip ya volvió a la tarifa estándar.",
        head: ["Forma de pago", "Cobrado en el mes", "Tasa con IVA", "Comisión"],
        rows: [
          ["Mercado Pago Point", "40,000", "4.06% (3.5% + IVA)", "1,624.00"],
          ["Clip", "5,000", "4.18% (3.6% + IVA)", "208.80"],
          ["Transferencia", "15,000", "0", "0"],
          ["Total", "60,000", "", "1,832.80"],
        ],
      },
      { type: "p", text: "Son unos $1,833 al mes, casi $22,000 al año. Pon tus propios montos y tasas." },

      { type: "h2", text: "¿Por qué te depositan menos de lo que marca tu caja?" },
      { type: "p", text: "Te depositan lo cobrado menos la comisión y su IVA, y tu caja registra lo que pagó el cliente: la diferencia es la comisión." },
      {
        type: "list",
        items: [
          "Registra la venta por el total que pagó el cliente y la comisión como gasto aparte.",
          "Clip deposita en 24 horas (al instante con Cuenta Digital Clip), BBVA en 24 horas hábiles, Mercado Pago según la tarjeta y tu cuenta, CoDi al instante. Al cerrar el mes, toma en cuenta lo que viene en camino.",
          "Si cancelas una venta de Clip el mismo día antes de las 22:00 h (Ciudad de México), no pagas comisión; para reembolsos posteriores, Clip no publica si la devuelve. Mercado Pago indica que no cobra la comisión de un pago devuelto. Con un banco, revisa tu contrato.",
        ],
      },

      { type: "h2", text: "¿Puedo cobrarle la comisión al cliente que paga con tarjeta?" },
      { type: "p", text: "No. Profeco sostiene (julio de 2025) que cobrar extra por pagar con tarjeta viola la Ley Federal de Protección al Consumidor, porque el precio que muestras debe incluir las comisiones y “cualquier otro costo”. Las multas que cita van de $733.04 a $2,345,728.71." },
      { type: "p", text: "Tu contrato también lo impide: los términos de Clip prohíben “comisiones adicionales por el uso de una tarjeta” y “exigir límites mínimos de pago”, así que tampoco vale un “mínimo $100 con tarjeta”. Según Profeco, los contratos de los bancos permiten quitarte la terminal si le pasas la comisión al cliente. Con Mercado Pago, busca la cláusula en su contrato." },
      { type: "note", text: "Condusef escribió en 2023 que ninguna ley prohíbe expresamente ese cobro, aunque algunos contratos sí, y llama a la comisión un costo que el negocio “por obligación debe pagar”." },
      { type: "p", text: "Sobre un descuento por pagar en efectivo no encontramos un criterio de Profeco; pregúntale a tu proveedor antes de ofrecerlo. Lo más seguro es meter la comisión en tus precios: si la mitad de tus ventas va con tarjeta a 4.06%, subir tus precios alrededor de 2% la cubre." },

      { type: "h2", text: "¿Me conviene aceptar tarjeta? Calcula tu punto de equilibrio" },
      { type: "p", text: "Aceptar tarjeta cuesta la comisión y te trae clientes que sin ella no comprarían. La misma fórmula da el punto de equilibrio: ventas extra necesarias, como parte de lo cobrado con tarjeta = tasa ÷ margen. Con 40% de margen y Point a 4.06%, cada $10,000 cobrados con tarjeta pagan $406 de comisión; basta con que $1,015 (10.2%) sean ventas que solo hiciste porque aceptas tarjeta." },
      { type: "p", text: "Si tus clientes pagarían en efectivo de todos modos, la comisión es puro costo; con turistas, clientes sin efectivo o tickets altos, las ventas extra suelen pasar ese porcentaje." },

      { type: "h2", text: "¿Cómo sabes cuánto te cobran de verdad?" },
      { type: "p", text: "El dato exacto está en tu estado de cuenta: divide la comisión del mes, con su IVA, entre lo cobrado y tendrás tu tasa real. Hazlo por forma de cobro y verás cuál te sale más cara." },
      { type: "p", text: "Si cobras con un iPad, [DingPOS](/) puede estimar esa cuenta con tus tasas. En Ajustes → Métodos de pago, toca cada método y completa Comisión por procesamiento: un porcentaje, un monto fijo por transacción o ambos. Escribe la tasa con IVA: 4.06% para Point, o 3.47% más $1.16 para Clip Bronce." },
      { type: "p", text: "En Reportes, la tarjeta Métodos de pago muestra entonces:" },
      {
        type: "list",
        items: [
          "Debajo de cada método con tasa, la línea «Comisión · Neto», con la comisión y el neto estimados.",
          "Al pie de la tarjeta, las comisiones estimadas y el neto estimado recibido de todo el periodo.",
          "Si cobraste con un método antes de ponerle tasa, su línea marca «N sin tasa» y el neto aparece como «—».",
        ],
      },
      { type: "p", text: "Son estimaciones con la tasa que escribiste: DingPOS no procesa pagos ni lee los estados de cuenta de Clip, Mercado Pago o tu banco, y el monto real es el que ahí aparece. Tampoco emite CFDI ni se conecta con el SAT, así que no sustituye tu sistema de facturación." },
      { type: "p", text: "Los pasos están en [¿DingPOS puede registrar las comisiones de pagos con tarjeta y pagos móviles?](/support/payment-fees/). Es una función del plan Standard o superior; compara los planes en [Planes y precios](/pricing/) y pruébalo gratis 30 días." },
    ],
    sources: [
      { label: "Clip: Socio Clip (ingreso de cuentas nuevas en Bronce, niveles por ventas del mes anterior y regreso a la tarifa estándar de 3.6%)", url: "https://www.clip.mx/socio-clip" },
      { label: "Clip: terminales punto de venta (3.6% + IVA por transacción, sin renta mensual, acepta Apple Pay)", url: "https://www.clip.mx/terminal-punto-de-venta" },
      { label: "Clip: calculadora de comisiones (depósito en 24 horas o inmediato con Cuenta Digital Clip)", url: "https://www.clip.mx/como-funciona-clip/calculadora-clip" },
      { label: "Clip: cómo cancelar una transacción (sin comisión si se cancela el mismo día antes de las 22:00 h)", url: "https://ayuda.clip.mx/s/article/como-cancelar-una-transaccion" },
      { label: "Clip: términos y condiciones (prohibido exigir montos mínimos o cobrar comisiones adicionales por pagar con tarjeta)", url: "https://www.clip.mx/terminos" },
      { label: "Mercado Pago: terminales Point (3.5% + IVA de contado, tasas de meses sin intereses y cómo se suma el IVA)", url: "https://www.mercadopago.com.mx/herramientas-para-vender/lectores-point" },
      { label: "Mercado Pago: cómo recibir el dinero de las ventas con Point (plazos de liberación)", url: "https://www.mercadopago.com.mx/blog/recibir-dinero-ventas-point-cuenta" },
      { label: "Mercado Libre para vendedores: devoluciones con Mercado Pago (no se cobra la comisión del pago devuelto)", url: "https://vendedores.mercadolibre.com.mx/aprender/nota/como-realizar-devoluciones-de-dinero-con-mercado-pago" },
      { label: "BBVA México: Terminal Punto de Venta (tasa de 2.50%, costos sin IVA, abono en 24 horas hábiles)", url: "https://www.bbva.mx/empresas/productos/medios-de-cobro/terminal-punto-de-venta-tpv.html" },
      { label: "Banco de México: CoDi, Cobro Digital (sin comisiones, disposición inmediata)", url: "https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco-me.html" },
      { label: "SAT: Ley del IVA, artículo 5 (requisitos para acreditar el IVA)", url: "https://wwwmat.sat.gob.mx/articulo/46936/articulo-5" },
      { label: "Profeco: el cobro de comisión por pago con tarjeta viola el artículo 7 Bis de la LFPC (multas del artículo 127)", url: "https://www.gob.mx/profeco/prensa/profeco-reitera-que-el-cobro-de-comision-por-pago-con-tarjeta-es-una-violacion-a-la-ley" },
      { label: "Condusef: ¿pagas con tarjeta y te cobran comisión?", url: "https://www.gob.mx/condusef/articulos/pagas-con-tarjeta-y-te-cobran-comision" },
    ],
    related: [],
  },
];
