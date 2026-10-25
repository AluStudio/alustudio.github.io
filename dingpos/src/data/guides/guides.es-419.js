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
      { type: "p", text: "La tarifa estándar de Clip es 3.6% + IVA por cobro con tarjeta (4.18% ya con IVA); quien abre cuenta hoy entra a Socio Clip con 2.99% + $1 + IVA y la conserva mientras venda al menos $10,000 al mes. Mercado Pago Point cobra 3.5% + IVA y BBVA anuncia 2.50% + IVA en su terminal. CoDi no cobra comisión. La comisión se calcula sobre la venta, pero sale de tu margen: un producto de $250 que te cuesta $150 te deja $100, y con Point a 3.5% + IVA te descuentan $10.15, el 10% de ese margen." },
      { type: "p", text: "Abajo usamos ese mismo producto para calcular cuánto cuesta cada forma de cobro, cuánto pagas al mes, por qué te depositan menos de lo que marca tu caja y si puedes pasarle la comisión al cliente." },

      { type: "h2", text: "¿Cuánto cobra cada forma de pago?" },
      { type: "p", text: "Esta tabla resume lo que Clip, Mercado Pago, BBVA y el Banco de México publicaban en octubre de 2026. Las comisiones de las terminales cambian con promociones, niveles y contratos; la tuya está en tu app o en tu contrato." },
      {
        type: "table",
        head: ["Forma de pago", "Comisión para el negocio", "Notas"],
        rows: [
          ["Efectivo", "0", "Sin comisión"],
          ["Clip (terminal)", "Estándar: 3.6% + IVA (4.18%). Socio Clip: desde 2.99% + $1 + IVA", "Las cuentas nuevas entran a Socio Clip en el nivel Bronce; las anteriores lo activan desde la app. El nivel se calcula el día 1 con las ventas del mes anterior: Bronce desde $10,000 (2.99% + $1), Plata desde $30,000 (2.79% + $1), Oro desde $100,000 (2.59% + $1) y Diamante desde $700,000 (2.49%), todas más IVA. Si pasas dos meses seguidos por debajo de $10,000, vuelves a la tarifa estándar. En Socio Clip, American Express, tarjetas internacionales y vales pagan 3.50%. Sin renta mensual"],
          ["Mercado Pago Point", "3.5% + IVA (4.06%)", "Cobro de contado, débito o crédito. Sin renta mensual. En octubre de 2026 la misma página mostró en algunas visitas una tasa que baja a 3.20% + IVA desde $10,000 y a 2.99% + IVA arriba de $100,000 cobrados en el mes; revisa en tu app cuál te aplica"],
          ["Terminal de banco", "Según contrato. BBVA anuncia 2.50% + IVA (2.90%)", "BBVA: sin facturación mínima, la primera terminal sin costo y cada adicional a $150 al mes; pide una cuenta de cheques BBVA a nombre del negocio"],
          ["CoDi (QR desde la app de tu banco)", "0", "Banxico y Condusef: las operaciones con CoDi no generan comisión y el dinero se refleja de inmediato"],
          ["Transferencia (SPEI) o DiMo", "Depende de tu banco", "Revisa en tu banco si cobra por recibir transferencias"],
        ],
      },
      { type: "p", text: "Cuando el cliente paga acercando el celular (Apple Pay, Google Pay), la venta pasa por tu terminal como un pago con tarjeta y lleva la comisión de tu contrato. Clip, por ejemplo, acepta Apple Pay en su terminal y publica una sola comisión por transacción." },
      { type: "p", text: "El Banco de México publica cada mes las tasas que cobran bancos y agregadores por giro. En julio de 2026, los agregadores (como Clip y Mercado Pago) cobraban en promedio 2.58% en débito y 2.89% en crédito, y la tasa más frecuente era 3.50%. En el giro de misceláneas, el promedio de bancos y agregadores era 1.45% en débito y 2.44% en crédito. En la tabla de misceláneas con débito, Clip aparece con un promedio de 3.60%, igual que su tarifa sin IVA, lo que indica que esas tasas no incluyen el IVA: súmalo para compararlas con lo que te descuentan. Son promedios, no una cotización para tu negocio." },
      { type: "note", text: "Cobrar a meses sin intereses cuesta mucho más. En Point, a la tasa base se suma 4.69% a 3 meses, 7.69% a 6 meses y 12.89% a 12 meses, y al total se le aplica IVA. Una venta de $1,000 a 3 meses te cuesta $95.00 de comisión, en vez de $40.60 de contado." },
      { type: "p", text: "Las comisiones de las terminales se anuncian más IVA de 16%: “3.5% + IVA” significa que te descuentan 4.06%. Si tu negocio está inscrito en el RFC, tus ventas causan IVA (a 16% o a 0%) y la comisión viene en un CFDI con el IVA desglosado, por lo general puedes acreditar ese IVA contra el que cobras (artículo 5 de la Ley del IVA), y tu costo real es la tasa sin IVA. Si no lo acreditas, porque no estás inscrito, no tienes el CFDI o tus ventas están exentas, el IVA de la comisión es un costo más. En los ejemplos usamos la tasa con IVA, porque es la que se descuenta de tu depósito." },

      { type: "h2", text: "La comisión sale de tu margen, no de tus ventas" },
      { type: "p", text: "La comisión se cobra sobre el monto de la venta, por eso parece poca cosa: 3% o 4%. Pero lo que de verdad ganas es el margen, lo que queda después de restar al precio lo que te costó el producto, y la comisión sale de ahí." },
      { type: "p", text: "Sigamos con el producto de $250 que te cuesta $150. El margen es de $100:" },
      {
        type: "table",
        caption: "Cifras en pesos, con IVA incluido en la comisión. Clip Bronce es el primer nivel de Socio Clip. “Te queda” es antes de renta, sueldos y otros gastos; no es utilidad.",
        head: ["", "Efectivo o CoDi", "BBVA 2.90%", "Clip Bronce 2.99% + $1", "Point 4.06%", "Clip 4.18%"],
        rows: [
          ["Paga el cliente", "250.00", "250.00", "250.00", "250.00", "250.00"],
          ["Comisión", "0", "7.25", "9.83", "10.15", "10.44"],
          ["Te depositan", "250.00", "242.75", "240.17", "239.85", "239.56"],
          ["Te queda después del costo y la comisión", "100.00", "92.75", "90.17", "89.85", "89.56"],
          ["Parte del margen que se lleva la comisión", "0%", "7.3%", "9.8%", "10.2%", "10.4%"],
        ],
      },
      { type: "p", text: "La proporción sale con una sola fórmula: parte del margen que se lleva la comisión = tasa de comisión ÷ margen. En el ejemplo, el margen es $100 ÷ $250 = 40%, y Point a 4.06% ÷ 40% = 10.2%. Entre más bajo es tu margen, más pesa la misma comisión:" },
      {
        type: "table",
        caption: "Cada celda es la parte del margen que se lleva la comisión. Las columnas son tasas con IVA: BBVA (2.50% + IVA), Clip Bronce sin el $1 fijo (2.99% + IVA), Point (3.5% + IVA) y Clip estándar (3.6% + IVA).",
        head: ["Margen", "2.90%", "3.47%", "4.06%", "4.18%"],
        rows: [
          ["20%", "14.5%", "17.3%", "20.3%", "20.9%"],
          ["30%", "9.7%", "11.6%", "13.5%", "13.9%"],
          ["40%", "7.3%", "8.7%", "10.2%", "10.4%"],
          ["50%", "5.8%", "6.9%", "8.1%", "8.4%"],
          ["60%", "4.8%", "5.8%", "6.8%", "7.0%"],
        ],
      },
      { type: "p", text: "Una tiendita que gana 20% en refrescos y botanas y cobra con Clip a la tarifa estándar le entrega casi $21 de cada $100 de margen a la comisión. Una tienda de regalos o ropa con 60% de margen entrega $7 con la misma tarifa." },
      { type: "p", text: "El cargo fijo por transacción pesa más en los tickets chicos. El $1 de Clip Bronce, con IVA $1.16, equivale a 0.46% más en una venta de $250, pero a 2.3% más en una de $50." },

      { type: "h2", text: "¿Cuánto pagas al mes? Haz la cuenta por forma de pago" },
      { type: "p", text: "La comisión del mes no se calcula multiplicando todas tus ventas por una sola tasa. Se calcula por separado para cada forma de cobro y luego se suma; el efectivo cuenta como cero. Supongamos que en un mes cobras $60,000 sin efectivo:" },
      {
        type: "table",
        caption: "Cifras en pesos. Supone que tu banco no cobra por recibir transferencias. Con menos de $10,000 al mes durante dos meses seguidos, la cuenta de Clip ya volvió a la tarifa estándar. CoDi no aparece porque no tiene comisión.",
        head: ["Forma de pago", "Cobrado en el mes", "Tasa con IVA", "Comisión"],
        rows: [
          ["Tarjeta con Mercado Pago Point", "40,000", "4.06% (3.5% + IVA)", "1,624.00"],
          ["Tarjeta con Clip", "5,000", "4.18% (3.6% + IVA)", "208.80"],
          ["Transferencia", "15,000", "0", "0"],
          ["Total", "60,000", "", "1,832.80"],
        ],
      },
      { type: "p", text: "Este negocio paga unos $1,833 de comisión al mes, casi $22,000 al año. Cambia los montos y las tasas por los tuyos y sabrás cuánto pagas tú." },

      { type: "h2", text: "¿Por qué te depositan menos de lo que marca tu caja?" },
      { type: "p", text: "Clip, Mercado Pago y el banco te depositan lo cobrado ya sin la comisión y su IVA. Tu caja registra lo que pagó el cliente, así que la diferencia entre los dos es normal: es la comisión." },
      {
        type: "list",
        items: [
          "Registra la venta por el total que pagó el cliente y la comisión como un gasto aparte. Así tus ventas no bajan cuando un cliente paga con tarjeta, y la comisión queda a la vista. En México no se exige una caja registradora ni un punto de venta certificado: lo que pide el SAT es el CFDI (la factura electrónica) timbrado por un PAC, y las ventas al público en general en las que nadie pide factura se pueden amparar con un CFDI global diario, semanal o mensual.",
          "El dinero no llega en el mismo momento con todos. Clip deposita en 24 horas, o de inmediato si tienes Cuenta Digital Clip; BBVA abona las ventas en 24 horas hábiles; en Mercado Pago, el plazo depende de la tarjeta y de tu cuenta (el débito suele liberarse antes que el crédito) y lo ves en la app; con CoDi el dinero llega al instante. Al cerrar el mes, toma en cuenta los depósitos que todavía vienen en camino.",
          "Si devuelves una venta, la comisión depende del proveedor. Clip no cobra comisión si cancelas la venta el mismo día, antes de las 22:00 h de la Ciudad de México; para reembolsos posteriores no publica si devuelve la comisión. Mercado Pago indica que, al devolver un pago, no te cobra la comisión de ese cobro. Con un banco, revisa tu contrato.",
        ],
      },

      { type: "h2", text: "¿Puedo cobrarle la comisión al cliente que paga con tarjeta?" },
      { type: "p", text: "No. Profeco sostiene, en un comunicado de julio de 2025, que cobrar una comisión por pagar con tarjeta viola el artículo 7 Bis de la Ley Federal de Protección al Consumidor, que obliga a que el precio que muestras ya incluya “impuestos, comisiones, intereses, seguros y cualquier otro costo”. Las multas que cita (artículo 127) van de $733.04 a $2,345,728.71." },
      { type: "p", text: "Tu contrato también lo impide. Los términos de Clip dicen que el negocio no podrá “exigir límites mínimos de pago para la aceptación de una tarjeta” ni “aplicar precios superiores ni comisiones adicionales por el uso de una tarjeta”. Y según Profeco, los contratos de afiliación de los bancos, registrados ante Condusef, ponen el traslado de la comisión al tarjetahabiente como causa de rescisión, es decir, de que te quiten la terminal. Si cobras con Mercado Pago u otro proveedor, busca la cláusula equivalente en su contrato." },
      { type: "p", text: "Condusef publicó en 2023 una nota para consumidores donde dice que ninguna ley lo prohíbe de forma expresa y que algunos contratos sí lo impiden; aun así, llama a la comisión un costo que el negocio “por obligación debe pagar” y le indica al cliente quejarse con el banco o con Profeco. Por ley o por contrato, un letrero de “con tarjeta, 4% extra” te expone a una multa y a quedarte sin terminal, y uno de “mínimo $100 con tarjeta” va contra los términos de Clip." },
      { type: "p", text: "Sobre dar un descuento por pagar en efectivo no encontramos un criterio publicado de Profeco ni una regla clara en los contratos; no lo des por permitido sin preguntarle a tu proveedor. Lo más seguro es meter la comisión en tus precios. Si la mitad de tus ventas se cobra con tarjeta a 4.06%, subir tus precios alrededor de 2% cubre la comisión." },
      { type: "note", text: "Banxico y la CNBV sometieron a consulta pública, hasta el 24 de septiembre de 2026, un proyecto para reducir poco a poco las cuotas de intercambio, la parte de la comisión que se queda el banco que emitió la tarjeta. Al momento de esta revisión seguía siendo un proyecto; si se aprueba, las comisiones podrían bajar, pero cada proveedor decide cuánto de esa baja te pasa." },

      { type: "h2", text: "¿Me conviene aceptar tarjeta? Calcula tu punto de equilibrio" },
      { type: "p", text: "Aceptar una forma de pago cuesta la comisión y te da las ventas de los clientes que sin ella no comprarían. El punto de equilibrio sale con la misma fórmula: ventas extra que necesitas, como parte de lo que cobras con esa forma de pago = tasa de comisión ÷ margen." },
      { type: "p", text: "Con 40% de margen y Point a 4.06%, cada $10,000 cobrados con tarjeta pagan $406 de comisión. Basta con que $1,015 de esos $10,000 (10.2%) sean ventas que solo se hicieron porque aceptas tarjeta: su margen de $406 paga la comisión completa." },
      { type: "p", text: "Si tus clientes de todos modos pagarían en efectivo y solo cambian a tarjeta por comodidad, la comisión es puro costo. Si atiendes turistas, clientes que no traen efectivo o ventas de ticket alto, las ventas extra suelen pasar ese porcentaje." },

      { type: "h2", text: "¿Cómo sabes cuánto te cobran de verdad?" },
      { type: "p", text: "El dato más exacto está en el detalle de tus depósitos o en el estado de cuenta mensual: divide la comisión del mes, con su IVA, entre el monto cobrado y tendrás tu tasa real. Lleva una columna por cada forma de cobro y al final del mes verás cuál te sale más cara." },
      { type: "p", text: "Si ya cobras con un iPad, el punto de venta puede hacer la cuenta por ti. En [DingPOS](/), en Ajustes → Métodos de pago, toca cada método y completa Comisión por procesamiento: un porcentaje, un monto fijo por transacción o ambos. Escribe la tasa con IVA para que el neto coincida con tu depósito: 4.06% para Point a 3.5% + IVA, o 3.47% más $1.16 para Clip Bronce. En Reportes, la tarjeta Métodos de pago muestra la comisión y el neto estimados de cada método. DingPOS no procesa pagos ni lee los estados de cuenta de Clip, Mercado Pago o tu banco: las cifras son estimaciones con la tasa que escribiste, y el monto real está en tu estado de cuenta. Tampoco emite CFDI ni se conecta con el SAT o con un PAC, así que no sustituye tu sistema de facturación: si facturas, sigue haciéndolo donde lo haces hoy y usa DingPOS en paralelo para registrar cada venta con su método de pago." },
      { type: "p", text: "Los pasos están en [¿DingPOS puede registrar las comisiones de pagos con tarjeta y pagos móviles?](/support/payment-fees/). Es una función del plan Standard o superior; compara los planes en [Planes y precios](/pricing/) y pruébalo gratis 30 días." },
    ],
    sources: [
      { label: "Clip: Socio Clip (ingreso de cuentas nuevas en Bronce, niveles por ventas del mes anterior y regreso a la tarifa estándar de 3.6%)", url: "https://www.clip.mx/socio-clip" },
      { label: "Clip: terminales punto de venta (3.6% + IVA por transacción, sin renta mensual, acepta Apple Pay)", url: "https://www.clip.mx/terminal-punto-de-venta" },
      { label: "Clip: calculadora de comisiones (depósito en 24 horas o inmediato con Cuenta Digital Clip)", url: "https://www.clip.mx/como-funciona-clip/calculadora-clip" },
      { label: "Clip: cómo cancelar una transacción (sin comisión si se cancela el mismo día antes de las 22:00 h)", url: "https://ayuda.clip.mx/s/article/como-cancelar-una-transaccion" },
      { label: "Mercado Pago: terminales Point (3.5% + IVA de contado, tasas de meses sin intereses y cómo se suma el IVA)", url: "https://www.mercadopago.com.mx/herramientas-para-vender/lectores-point" },
      { label: "Mercado Pago: cómo recibir el dinero de las ventas con Point (plazos de liberación)", url: "https://www.mercadopago.com.mx/blog/recibir-dinero-ventas-point-cuenta" },
      { label: "Mercado Libre para vendedores: devoluciones con Mercado Pago (no se cobra la comisión del pago devuelto)", url: "https://vendedores.mercadolibre.com.mx/aprender/nota/como-realizar-devoluciones-de-dinero-con-mercado-pago" },
      { label: "BBVA México: Terminal Punto de Venta (tasa de 2.50%, costos sin IVA, abono en 24 horas hábiles)", url: "https://www.bbva.mx/empresas/productos/medios-de-cobro/terminal-punto-de-venta-tpv.html" },
      { label: "Banco de México: tasas de descuento por giro, tarjetas de débito (julio de 2026)", url: "https://www.banxico.org.mx/servicios/tasas-de-descuento-para-tarjetas-de-debito-por-gir/tasas-descuento-por-giro-debi.html" },
      { label: "Banco de México: tasas de descuento por giro, tarjetas de crédito (julio de 2026)", url: "https://www.banxico.org.mx/servicios/tasas-de-descuento-para-tarjetas-de-credito-por-gi/tasas-descuento-por-giro-cred.html" },
      { label: "Banco de México: tasas de descuento de agregadores, débito, por institución (julio de 2026)", url: "https://www.banxico.org.mx/servicios/tasas-de-descuento-para-tarjetas-de-debito-por-gir/%7B26C0F4CD-F244-5486-EFD5-E0B212ACF2D3%7D.pdf" },
      { label: "Banco de México: tasas de descuento del giro miscelánea, débito, por institución (julio de 2026)", url: "https://www.banxico.org.mx/servicios/tasas-de-descuento-para-tarjetas-de-debito-por-gir/%7BCE998D24-7B96-F2C4-AF17-C29673DC35D2%7D.pdf" },
      { label: "Banco de México: CoDi, Cobro Digital (sin comisiones, disposición inmediata)", url: "https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco-me.html" },
      { label: "Condusef: seis cosas que debes saber sobre el CoDi (sin comisión por cobrar)", url: "https://www.gob.mx/condusef/articulos/seis-cosas-que-debes-saber-sobre-el-codi" },
      { label: "Profeco: el cobro de comisión por pago con tarjeta viola el artículo 7 Bis de la LFPC", url: "https://www.gob.mx/profeco/prensa/profeco-reitera-que-el-cobro-de-comision-por-pago-con-tarjeta-es-una-violacion-a-la-ley" },
      { label: "Condusef: ¿pagas con tarjeta y te cobran comisión?", url: "https://www.gob.mx/condusef/articulos/pagas-con-tarjeta-y-te-cobran-comision" },
      { label: "CNBV: consulta pública del proyecto de disposiciones para redes de medios de disposición (cuotas de intercambio)", url: "https://www.gob.mx/cnbv/prensa/consulta-publica-del-proyecto-de-disposiciones-de-caracter-general-aplicables-a-redes-de-medios-de-disposicion" },
      { label: "SAT: Ley del IVA, artículo 5 (requisitos para acreditar el IVA)", url: "https://wwwmat.sat.gob.mx/articulo/46936/articulo-5" },
      { label: "DOF (28 de diciembre de 2025): Resolución Miscelánea Fiscal para 2026, regla 2.7.1.21 (CFDI diario, semanal o mensual por operaciones con el público en general)", url: "https://dof.gob.mx/2025/SHCP/SHCP_281225_01.pdf" },
      { label: "Fiscal Solutions: México (modelo CFDI en línea, sin hardware fiscal ni POS certificado obligatorio)", url: "https://www.fiscal-requirements.com/countries/32-mexico" },
      { label: "Clip: términos y condiciones (prohibido exigir montos mínimos o cobrar comisiones adicionales por pagar con tarjeta)", url: "https://www.clip.mx/terminos" },
    ],
    related: [],
  },
];
