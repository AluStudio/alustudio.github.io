// DingPOS guides — pt-BR pack. Guides are acquisition articles written for one
// market (fees, laws and payment brands differ by country), so a pack is NOT
// a translation of en or zh-Hant: each language lists only the guides written
// for the markets that read it, and a language without a pack has no guides
// section. This pack is not touched by `npm run l10n`. Rules:
// docs/specs/seo-aeo.md §獲客文章. Checked by scripts/copy-spa-pages.js.
//
// ui — the section's strings (they live here, not in translation.json, which
//      every shipped language must carry in full):
//   nav, title, subtitle, meta_description, back, related_title,
//   sources_title, checked ("{{date}}" placeholder), cta_title, cta_text,
//   cta_button, markets { <market code>: label }
//
// Article: { slug, market, checked, title, summary, content, sources, related }
//   market   — the market the facts hold for, a key of ui.markets ("BR")
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
  nav: "Guias",
  title: "Guias para pequenas lojas",
  subtitle: "Taxas, custos e margem explicados com contas, para quem toca a própria loja.",
  meta_description: "Guias para quem tem uma pequena loja: quanto custam as taxas de cartão e Pix e quanto elas tiram da margem, com fórmulas, tabelas e fontes.",
  back: "Todos os guias",
  related_title: "Leia também",
  sources_title: "Fontes",
  checked: "Última verificação: {{date}}",
  cta_title: "Registre as vendas no iPad e veja a taxa estimada de cada forma de pagamento",
  cta_text: "O DingPOS é um app de PDV para iPad feito para pequenas lojas. Ele não emite NFC-e nem substitui o seu emissor de nota fiscal: use os dois juntos e acompanhe a taxa e o líquido estimados de cada forma de pagamento. Teste grátis de 30 dias, sem taxa por transação.",
  cta_button: "Baixar na App Store",
  markets: { BR: "Brasil" },
};

export const articles = [
  {
    slug: "payment-processing-fees-brazil",
    market: "BR",
    checked: "2026-10-25",
    title: "Taxa da maquininha: quanto custa no débito, no crédito e no Pix, e quanto tira da sua margem",
    summary: "Recebendo na hora ou em 1 dia útil, as tabelas públicas cobram de 0,75% a 2,39% no débito e de 2,69% a 4,99% no crédito à vista. Veja o peso na sua margem.",
    content: [
      { type: "p", text: "Nas tabelas públicas das maquininhas em outubro de 2026, quem recebe na hora ou em 1 dia útil paga de 0,75% a 2,39% no débito, de 2,69% a 4,99% no crédito à vista e de 8,99% a 22,59% no crédito parcelado em 12x sem juros; o Pix na maquininha sai de graça ou por 0,49%, e o PagBank avisa que pode cobrar até 1,89%. A taxa é cobrada sobre o valor da venda, mas quem paga é a margem: num produto de R$ 200,00 que custou R$ 120,00, o crédito à vista a 3,02% leva R$ 6,04, ou 7,6% dos R$ 80,00 de margem." },

      { type: "h2", text: "Quanto custa cada forma de pagamento?" },
      { type: "p", text: "A tabela reúne as taxas publicadas nos planos em que o dinheiro cai na hora (Mercado Pago, PagBank) ou em 1 dia útil (InfinitePay). Quase todas baixam conforme o faturamento do mês; confira a sua faixa no app da maquininha." },
      {
        type: "table",
        head: ["Forma de pagamento", "Taxa para o lojista", "Observações"],
        rows: [
          ["Dinheiro", "0", "Sem custo de recebimento"],
          ["Pix na maquininha ou no QR Code", "De 0% a 0,49%", "Grátis na InfinitePay, 0,49% no Mercado Pago; o PagBank avisa que pode cobrar até 1,89%"],
          ["Cartão de débito", "De 0,75% a 2,39%", "Mercado Pago de 1,14% a 1,69%; PagBank 1,44% (Super Max) ou 2,39% (Essencial); InfinitePay de 0,75% a 1,37%"],
          ["Crédito à vista", "De 2,69% a 4,99%", "Mercado Pago de 2,81% a 3,86%; PagBank 3,49% ou 4,99%; InfinitePay de 2,69% a 3,15%"],
          ["Crédito parcelado sem juros", "Sobe a cada parcela; em 12x, de 8,99% a 22,59%", "Quem paga o parcelamento é a loja"],
          ["Vale-refeição e vale-alimentação", "No máximo 3,6%", "Teto nos arranjos do PAT, sem outras tarifas por cima"],
          ["Contrato negociado (ex.: Stone)", "Depende do contrato", "Condições definidas pelo faturamento que você informa"],
        ],
      },
      { type: "note", text: "Desconfie da taxa promocional de entrada: os 0,58% do PagBank e os 0,74% do Mercado Pago valem só nos primeiros 30 dias ou até a loja vender R$ 5.000,00, o que vier primeiro. E o Pix que cai direto na conta da empresa no banco pode ter tarifa: veja a tabela do seu banco." },

      { type: "h2", text: "A taxa sai da margem, não do faturamento" },
      { type: "p", text: "O que sobra para a loja é a margem, o preço menos o custo da mercadoria, e é dela que a taxa sai. Pegue um produto vendido por R$ 200,00 que custou R$ 120,00: a margem é de R$ 80,00. As taxas são as do Mercado Pago Point para quem vende de R$ 10 mil a R$ 20 mil por mês:" },
      {
        type: "table",
        caption: "Valores em reais, outubro de 2026. “Sobra” é antes de aluguel, salários e outras despesas; não é lucro líquido.",
        head: ["", "Dinheiro", "Pix 0,49%", "Débito 1,22%", "Crédito à vista 3,02%", "Crédito 3x 8,19%"],
        rows: [
          ["Cliente paga", "200,00", "200,00", "200,00", "200,00", "200,00"],
          ["Taxa", "0", "0,98", "2,44", "6,04", "16,38"],
          ["Cai na conta", "200,00", "199,02", "197,56", "193,96", "183,62"],
          ["Sobra depois do custo e da taxa", "80,00", "79,02", "77,56", "73,96", "63,62"],
          ["Parte da margem que vai para a taxa", "0%", "1,2%", "3,1%", "7,6%", "20,5%"],
        ],
      },
      { type: "p", text: "A última linha sai de uma conta só: parte da margem que vai para a taxa = taxa ÷ margem percentual. Aqui a margem é 80 ÷ 200 = 40%, então o crédito à vista leva 3,02% ÷ 40% ≈ 7,6% da margem. Quanto menor a margem, maior o estrago:" },
      {
        type: "table",
        caption: "Cada célula mostra a parte da margem que vai para a taxa.",
        head: ["Margem", "Taxa 0,49%", "Taxa 1,22%", "Taxa 3,02%", "Taxa 8,19%"],
        rows: [
          ["20%", "2,5%", "6,1%", "15,1%", "41%"],
          ["30%", "1,6%", "4,1%", "10,1%", "27,3%"],
          ["40%", "1,2%", "3,1%", "7,6%", "20,5%"],
          ["50%", "1%", "2,4%", "6%", "16,4%"],
          ["60%", "0,8%", "2%", "5%", "13,7%"],
        ],
      },
      { type: "p", text: "No parcelado sem juros pesa mais: com margem de 40%, o 3x entrega um quinto da margem para a maquininha; em 12x, a mesma tabela cobra 11,73%, quase 30% da margem. Com margem perto de 20%, até o crédito à vista já leva 15% da margem." },

      { type: "h2", text: "Quanto a loja paga de taxa no mês?" },
      { type: "p", text: "Cada forma de pagamento tem a sua taxa, e o dinheiro em espécie não paga nada. Imagine uma loja que recebe R$ 20.000,00 por mês na maquininha:" },
      {
        type: "table",
        caption: "Valores em reais, com as mesmas taxas. Acima de R$ 20 mil, o Mercado Pago aplica a faixa seguinte, um pouco mais barata.",
        head: ["Forma de pagamento", "Vendas no mês", "Taxa", "Custo"],
        rows: [
          ["Pix", "8.000,00", "0,49%", "39,20"],
          ["Débito", "5.000,00", "1,22%", "61,00"],
          ["Crédito à vista", "5.000,00", "3,02%", "151,00"],
          ["Crédito em 3x", "2.000,00", "8,19%", "163,80"],
          ["Total", "20.000,00", "", "415,00"],
        ],
      },
      { type: "p", text: "São R$ 415,00 por mês, quase R$ 5 mil por ano, ou 2,08% do que passou pela maquininha. O parcelado é 10% das vendas e quase 40% do custo; troque pelos números da sua loja." },

      { type: "h2", text: "Por que cai menos dinheiro na conta do que o total do caixa?" },
      { type: "p", text: "A maquininha repassa o valor da venda já sem a taxa, e o caixa registra o que o cliente pagou: a diferença é a taxa. Na contabilidade, lance a venda pelo valor cheio e a taxa como despesa." },
      {
        type: "list",
        items: [
          "Prazo: o Pix cai na hora; o vale-refeição e o vale-alimentação do PAT, em até 15 dias corridos. Receber o crédito antes custa mais: no plano inicial da InfinitePay, o crédito à vista sai por 3,15% em 1 dia útil e por 5,49% na hora; no plano sem antecipação, a taxa é menor, mas o crédito à vista só cai a partir de 30 dias.",
          "Estorno: no Mercado Pago, a taxa da venda original geralmente não volta para o lojista. As outras empresas não publicam uma regra clara; pergunte antes de contratar.",
        ],
      },
      { type: "note", text: "No Simples Nacional, o imposto incide sobre o valor cheio da venda, não sobre o que caiu na conta, e o STF decidiu que o que as administradoras de cartão retêm entra na base do PIS e da Cofins. A taxa não gera crédito dos tributos pagos pelo Simples, e o crédito de IBS e CBS da reforma fica com o regime regular: para o MEI e quem recolhe tudo pelo Simples, é custo cheio." },

      { type: "h2", text: "Posso cobrar a taxa da maquininha do cliente?" },
      { type: "p", text: "A Lei 13.455/2017 permite preços diferentes conforme o meio ou o prazo de pagamento, e os descontos oferecidos devem ficar visíveis ao consumidor. Os Procons, porém, divergem: o de Goiás aceita preços diferentes à vista e no cartão, se divulgados antes da compra; o de Santa Catarina só aceita a diferença como desconto sobre o preço anunciado, nunca como acréscimo, e considera ilegal exigir valor mínimo no cartão." },
      { type: "p", text: "Como a orientação muda de estado para estado, o caminho mais seguro, aceito pelos dois, é anunciar o preço cheio e dar desconto visível no Pix e no dinheiro. Outro caminho permitido é o parcelado com juros, em que o cliente paga o acréscimo. E o mais simples é pôr a taxa no preço: na loja do exemplo, as taxas somam 2,08% do que passa pela maquininha; se quase tudo for cartão ou Pix, um reajuste de cerca de 2,1% paga a conta." },

      { type: "h2", text: "Vale a pena aceitar crédito ou oferecer parcelado?" },
      { type: "p", text: "O custo é a taxa; o ganho são as vendas que só acontecem porque a loja aceita aquela forma de pagamento. A conta que empata as duas coisas: parte das vendas nessa forma que precisa ser venda nova = taxa ÷ margem percentual." },
      { type: "p", text: "Com margem de 40% e crédito à vista a 3,02%, cada R$ 1.000,00 no crédito paga R$ 30,20 de taxa. Se pelo menos R$ 75,50 (7,55%) vierem de clientes que não comprariam sem cartão, a margem dessas vendas paga a taxa. No 3x a 8,19%, a taxa sobe para R$ 81,90, e a venda nova precisa chegar a R$ 204,75 (20,5%)." },
      { type: "p", text: "Se quem parcela pagaria à vista de qualquer jeito, a taxa é custo puro. Quantos deixariam de comprar sem o parcelado? Num produto caro, podem ser muitos; num barato, provavelmente poucos." },

      { type: "h2", text: "Como saber quanto a sua loja paga de verdade?" },
      { type: "p", text: "O número certo está no extrato da maquininha, que mostra a taxa descontada em cada venda. Some as taxas do mês e divida pelo valor vendido em cada forma de pagamento (Pix, débito, crédito à vista, cada número de parcelas). Esse é o seu custo real." },
      { type: "p", text: "Se você vende pelo iPad, o [DingPOS](/) estima essa conta com as suas taxas. Em Ajustes → Formas de pagamento, toque em uma forma e preencha Taxa de processamento: uma porcentagem, um valor fixo por transação ou os dois, com a taxa que a maquininha realmente desconta. Como a taxa muda com o número de parcelas, crie uma forma para cada modalidade, como Crédito à vista e Crédito 3x. “Percentual da taxa devolvido em reembolsos” vem ativado: desative se a maquininha não devolve a taxa no estorno, como em geral no Mercado Pago." },
      { type: "image", src: "guides/fees-br-settings.webp", width: 872, height: 764, alt: "DingPOS, Ajustes → Formas de pagamento: a seção Taxa de processamento de uma forma de pagamento, com o percentual preenchido.", caption: "Cada forma de pagamento recebe a taxa que a maquininha realmente desconta." },
      { type: "p", text: "Daí em diante, cada pagamento registra uma taxa estimada, e o cartão Formas de pagamento do Resumo mostra:" },
      {
        type: "list",
        items: [
          "Sob cada forma que tem taxa, uma linha “Taxa · Líquido”: a taxa e o líquido estimados daquela forma.",
          "No rodapé do cartão, as taxas estimadas e o líquido estimado a receber do período.",
          "Pagamentos recebidos antes de a forma ter uma alíquota aparecem como “N sem alíquota”, e o líquido fica “—”.",
        ],
      },
      { type: "image", src: "guides/fees-br-report.webp", phone: "guides/fees-br-report-1080w.webp", width: 1126, height: 1006, alt: "DingPOS, Resumo: o cartão Formas de pagamento, com a linha Taxa · Líquido sob cada forma e, no rodapé, as taxas estimadas e o líquido estimado a receber do período.", caption: "No Resumo, você vê quanto a taxa levou de cada forma de pagamento e quanto sobrou de líquido no período." },
      { type: "p", text: "São estimativas feitas com a taxa que você informou. O DingPOS não processa pagamentos nem lê o extrato da maquininha: o valor real é o do extrato. Ele também não emite NFC-e: continue emitindo as notas no seu emissor e use o DingPOS ao lado dele." },
      { type: "p", text: "O passo a passo está em [O DingPOS controla as taxas de cartão e de pagamento por celular?](/support/payment-fees/). O recurso faz parte do plano Standard ou superior; compare os planos em [Planos e preços](/pricing/) e experimente antes com o teste grátis de 30 dias." },
    ],
    sources: [
      { label: "Mercado Pago: maquininhas Point — tabela de taxas por faturamento mensal e taxas promocionais", url: "https://www.mercadopago.com.br/ferramentas-para-vender/maquininhas-point" },
      { label: "Mercado Pago: aceitar Pix (taxa de 0,49% na maquininha e no QR Code; dinheiro cai na hora)", url: "https://www.mercadopago.com.br/ferramentas-para-vender/aceitar-pix" },
      { label: "Mercado Pago Blog: como fazer estorno de venda na maquininha Point (a taxa da venda original geralmente não é reembolsada)", url: "https://www.mercadopago.com.br/blog/estorno-venda-maquininha-point" },
      { label: "PagBank: maquininhas — planos Super Max e Essencial, taxas promocionais e taxas normais", url: "https://pagbank.com.br/para-seu-negocio/maquininhas" },
      { label: "PagBank: o Pix cobra taxas? (venda com Pix pode ter taxa limitada a 1,89%)", url: "https://faq.pagbank.com.br/duvida/quanto-eu-pago-para-usar-o-pix/1160" },
      { label: "InfinitePay: taxas da maquininha por faturamento e por prazo de recebimento (na hora, 1 dia útil, sem antecipação)", url: "https://www.infinitepay.io/taxas" },
      { label: "Stone: contrato de vendas (condições personalizadas pelo faturamento)", url: "https://ajuda.stone.com.br/como-consultar-o-contrato-de-vendas-da-stone" },
      { label: "Banco Central: Resolução BCB nº 19/2020 (tarifas do Pix para pessoa natural, empresário individual e pessoa jurídica)", url: "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=19" },
      { label: "Planalto: Decreto nº 12.712/2025 (PAT — teto de 3,6% na taxa do vale-refeição e vale-alimentação, repasse em até 15 dias corridos)", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12712.htm" },
      { label: "Planalto: Lei nº 13.455/2017 (diferenciação de preço por prazo ou meio de pagamento; informação visível dos descontos na Lei 10.962/2004)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13455.htm" },
      { label: "Procon-SC: diferenciação de preço por meio de pagamento — só desconto, nunca acréscimo; valor mínimo no cartão é ilegal (out. 2026)", url: "https://www.procon.sc.gov.br/diferenciacao-de-preco-por-meio-de-pagamento-veja-o-que-pode-e-o-que-e-proibido/" },
      { label: "Procon Goiás: perguntas frequentes (preços diferentes à vista e no cartão, desde que divulgados antes)", url: "https://goias.gov.br/procon/faq/" },
      { label: "STF: Tema 1.024 da repercussão geral (valores retidos pelas administradoras de cartão entram na base do PIS e da Cofins)", url: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=5193219&numeroProcesso=1049811&numeroTema=1024" },
      { label: "Planalto: Lei Complementar nº 123/2006 (art. 3º, § 1º, receita bruta; art. 23, créditos)", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm" },
      { label: "Planalto: Lei Complementar nº 214/2025, texto compilado (art. 214, arranjos de pagamento; art. 218, crédito de IBS e CBS no regime regular)", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm" },
    ],
    related: [],
  },
];
