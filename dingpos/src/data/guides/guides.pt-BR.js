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
      { type: "p", text: "Nas tabelas públicas das maquininhas em outubro de 2026, quem recebe na hora ou em 1 dia útil paga de 0,75% a 2,39% no débito, de 2,69% a 4,99% no crédito à vista e de 8,99% a 22,59% no crédito parcelado em 12x sem juros; o Pix na maquininha sai de graça em algumas empresas, por 0,49% em outras, e o PagBank avisa que pode cobrar até 1,89%. Quem aceita esperar 30 dias pelo crédito paga menos, e credenciadoras como a Stone definem as condições no contrato. A taxa é cobrada sobre o valor da venda, mas quem paga é a margem: num produto de R$ 200,00 que custou R$ 120,00, o crédito à vista a 3,02% leva R$ 6,04, ou 7,6% dos R$ 80,00 de margem." },
      { type: "p", text: "A seguir, com os mesmos números do começo ao fim: quanto custa cada forma de pagamento, quanto isso dá no mês, por que o dinheiro que cai na conta é menor que o total do caixa, se dá para repassar a taxa ao cliente e o que muda com imposto e nota fiscal." },

      { type: "h2", text: "Quanto custa cada forma de pagamento?" },
      { type: "p", text: "A tabela reúne o que as empresas publicam nos próprios sites em outubro de 2026, nos planos em que o dinheiro cai na hora (Mercado Pago, PagBank) ou em 1 dia útil (InfinitePay). Quase todas baixam a taxa conforme quanto você vende no mês e cobram mais caro para receber antes; confira a sua faixa no app da maquininha antes de comparar." },
      {
        type: "table",
        head: ["Forma de pagamento", "Taxa para o lojista", "Observações"],
        rows: [
          ["Dinheiro", "0", "Sem custo de recebimento"],
          ["Pix na maquininha ou no QR Code", "De 0% a 0,49% nas tabelas públicas", "Grátis na InfinitePay; 0,49% no Mercado Pago. O PagBank avisa que pode cobrar até 1,89%. Pix recebido na conta da empresa no banco pode ter tarifa: veja a nota abaixo"],
          ["Cartão de débito", "De 0,75% a 2,39%", "Mercado Pago de 1,14% a 1,69%, conforme o faturamento; PagBank 1,44% (plano Super Max) ou 2,39% (Essencial); InfinitePay de 0,75% a 1,37%, recebendo em 1 dia útil"],
          ["Crédito à vista", "De 2,69% a 4,99%", "Mercado Pago de 2,81% a 3,86%; PagBank 3,49% ou 4,99%; InfinitePay de 2,69% a 3,15%"],
          ["Crédito parcelado sem juros", "Sobe a cada parcela; em 12x, de 8,99% a 22,59%", "Quem paga o parcelamento é a loja. Mercado Pago de 11,42% a 20,39% em 12x; PagBank 13,78% ou 22,59%; InfinitePay de 8,99% a 12,40%"],
          ["Vale-refeição e vale-alimentação", "No máximo 3,6%", "Teto definido pelo Decreto 12.712/2025 para os arranjos do PAT, sem outras tarifas por cima"],
          ["Maquininha com contrato negociado (ex.: Stone)", "Depende do contrato", "A Stone personaliza as condições pelo faturamento informado na contratação; se ele mudar muito, pode reajustar a taxa e aplicar multa"],
        ],
      },
      { type: "p", text: "Pagamento por aproximação com Apple Pay, Google Pay ou relógio entra como débito ou crédito, com a taxa do cartão. Bandeiras como Elo, Amex e Hipercard podem custar mais: na InfinitePay, o débito Elo ou Amex sai por 1,88% na faixa em que Visa e Mastercard pagam 0,75%." },
      { type: "p", text: "Desconfie da taxa de entrada. O PagBank anuncia 0,58% no débito e no crédito, e o Mercado Pago, 0,74%, mas essas taxas promocionais valem só nos primeiros 30 dias ou até a loja vender R$ 5.000,00, o que vier primeiro. Depois disso vale a tabela normal, que é a que entra nas contas deste guia." },
      { type: "p", text: "Esperar pelo dinheiro do crédito também baixa a taxa. Na InfinitePay, para quem vende mais de R$ 20 mil por mês, o plano sem antecipação cobra de 1,62% a 2,22% no crédito à vista e de 2,25% a 2,75% no parcelado, mas o crédito à vista só cai a partir de 30 dias e o parcelado, no prazo de cada parcela." },
      { type: "note", text: "Pix na conta bancária da empresa: a Resolução BCB nº 19/2020 permite que o banco cobre tarifa de pessoa jurídica para enviar e receber Pix. MEI e empresário individual têm o tratamento de pessoa física, mas mesmo assim podem pagar tarifa ao receber um Pix de venda. O Banco Central não fixa valor; veja a tabela de tarifas do seu banco." },

      { type: "h2", text: "A taxa sai da margem, não do faturamento" },
      { type: "p", text: "Como a taxa é um percentual da venda, ela parece pequena: 1% aqui, 3% ali. Mas o que sobra para a loja é a margem, o preço menos o custo da mercadoria, e é dessa margem que a taxa sai." },
      { type: "p", text: "Pegue um produto vendido por R$ 200,00 que custou R$ 120,00. A margem é de R$ 80,00. As taxas abaixo são as da tabela do Mercado Pago Point, que anuncia o dinheiro na hora, para quem vende de R$ 10 mil a R$ 20 mil por mês:" },
      {
        type: "table",
        caption: "Valores em reais. Taxas da tabela pública do Mercado Pago Point (faixa de R$ 10 mil a R$ 20 mil por mês), consultada em outubro de 2026. “Sobra” é antes de aluguel, salários e outras despesas; não é lucro líquido.",
        head: ["", "Dinheiro", "Pix 0,49%", "Débito 1,22%", "Crédito à vista 3,02%", "Crédito 3x 8,19%"],
        rows: [
          ["Cliente paga", "200,00", "200,00", "200,00", "200,00", "200,00"],
          ["Taxa", "0", "0,98", "2,44", "6,04", "16,38"],
          ["Cai na conta", "200,00", "199,02", "197,56", "193,96", "183,62"],
          ["Sobra depois do custo e da taxa", "80,00", "79,02", "77,56", "73,96", "63,62"],
          ["Parte da margem que vai para a taxa", "0%", "1,2%", "3,1%", "7,6%", "20,5%"],
        ],
      },
      { type: "p", text: "Essa última linha sai de uma conta só: parte da margem que vai para a taxa = taxa ÷ margem percentual. No exemplo, a margem é de 80 ÷ 200 = 40%, então o crédito à vista leva 3,02% ÷ 40% ≈ 7,6% da margem. Quanto menor a margem, maior o estrago da mesma taxa:" },
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
      { type: "p", text: "O parcelado sem juros é onde a conta mais pesa. Em 3x, a loja com margem de 40% entrega um quinto da margem para a maquininha; em 12x, a mesma tabela cobra 11,73%, quase 30% da margem. Com margem perto de 20%, até o crédito à vista já leva 15% do que a loja ganha em cada venda." },

      { type: "h2", text: "Quanto a loja paga de taxa no mês?" },
      { type: "p", text: "A taxa do mês não é o faturamento inteiro vezes uma taxa só. Cada forma de pagamento tem a sua, e o dinheiro em espécie não paga nada. Imagine uma loja que recebe R$ 20.000,00 por mês na maquininha:" },
      {
        type: "table",
        caption: "Valores em reais, com as mesmas taxas do exemplo anterior. R$ 20 mil é o limite da faixa; um pouco acima disso, o Mercado Pago aplica a faixa seguinte, um pouco mais barata.",
        head: ["Forma de pagamento", "Vendas no mês", "Taxa", "Custo"],
        rows: [
          ["Pix", "8.000,00", "0,49%", "39,20"],
          ["Débito", "5.000,00", "1,22%", "61,00"],
          ["Crédito à vista", "5.000,00", "3,02%", "151,00"],
          ["Crédito em 3x", "2.000,00", "8,19%", "163,80"],
          ["Total", "20.000,00", "", "415,00"],
        ],
      },
      { type: "p", text: "São R$ 415,00 por mês, quase R$ 5 mil por ano, ou 2,08% do que passou pela maquininha. Repare que o parcelado responde por 10% das vendas e por quase 40% do custo. Troque os valores e as taxas pelos da sua loja para chegar ao seu número." },
      { type: "p", text: "No Mercado Pago, a faixa muda todo mês: no dia 1º, a taxa é recalculada com base no que você vendeu no mês anterior. Um mês fraco pode jogar a loja numa faixa mais cara no mês seguinte." },

      { type: "h2", text: "Por que cai menos dinheiro na conta do que o total do caixa?" },
      { type: "p", text: "A maquininha repassa o valor da venda já sem a taxa. O caixa registra o que o cliente pagou, então a diferença entre os dois é normal: é a taxa. Na contabilidade, lance a venda pelo valor cheio e a taxa como despesa, para que o faturamento não pareça menor quando o cliente troca o dinheiro pelo cartão." },
      {
        type: "list",
        items: [
          "Prazo: na InfinitePay, por exemplo, quem não antecipa recebe o débito em 1 dia útil, o crédito a partir de 30 dias e o parcelado no prazo de cada parcela. Receber antes tem preço: no plano inicial da mesma empresa, o crédito à vista custa 3,15% recebendo em 1 dia útil e 5,49% recebendo na hora. Na Stone, a taxa de antecipação acompanha a Selic.",
          "O Pix cai na hora, a qualquer dia e horário. Vale-refeição e vale-alimentação devem ser repassados em até 15 dias corridos, pela regra do Decreto 12.712/2025, que deu 90 dias, a partir de novembro de 2025, para as empresas se adaptarem ao prazo e ao teto de 3,6%.",
          "No fechamento do mês, separe o que já caiu do que ainda vai cair. As vendas no crédito das últimas semanas costumam estar a caminho.",
          "Estorno: o Mercado Pago explica que o estorno não gera nova taxa, mas a taxa da venda original geralmente não volta para o lojista. As outras empresas não publicam uma regra clara; pergunte antes de contratar e confira o extrato depois de cada estorno.",
        ],
      },

      { type: "h2", text: "Posso cobrar a taxa da maquininha do cliente?" },
      { type: "p", text: "A lei deixa cobrar preços diferentes conforme a forma de pagamento, mas os Procons não concordam sobre como fazer isso. A Lei 13.455/2017 autoriza a diferenciação de preço pelo prazo ou pelo meio de pagamento e anula a cláusula de bandeira ou maquininha que a proíba. A mesma lei incluiu na Lei 10.962/2004 a obrigação de informar, em local e formato visíveis ao consumidor, os descontos oferecidos por forma ou prazo de pagamento." },
      { type: "p", text: "O Procon de Goiás entende que a loja pode ter preços diferentes à vista e no cartão, desde que divulgados antes da compra. O Procon de Santa Catarina, numa orientação de outubro de 2026, diz o contrário: a diferença só vale como desconto sobre o preço anunciado, nunca como acréscimo; uma camiseta anunciada a R$ 50,00 custa R$ 50,00 no crédito, no débito e no Pix, e pode sair por R$ 45,00 à vista. O mesmo Procon considera ilegal exigir valor mínimo para pagar com cartão. Como a orientação muda de estado para estado, o caminho mais seguro, aceito tanto pelo Procon-SC quanto pelo Procon-GO, é anunciar o preço cheio e dar desconto visível no Pix e no dinheiro." },
      { type: "p", text: "Outro caminho permitido é o parcelado com juros, em que o cliente paga o acréscimo das parcelas. E a forma mais simples de cobrir a taxa é colocá-la no preço: na loja do exemplo, as taxas somam 2,08% do que passa pela maquininha; se quase todas as vendas forem por cartão ou Pix, um reajuste de cerca de 2,1% nos preços paga a conta." },

      { type: "h2", text: "A taxa da maquininha tem imposto? Dá para abater?" },
      { type: "p", text: "O imposto da loja incide sobre o valor cheio da venda, não sobre o que caiu na conta. No Simples Nacional, a receita bruta é o produto da venda, e só ficam de fora as vendas canceladas e os descontos incondicionais (Lei Complementar 123, art. 3º, § 1º). Para PIS e Cofins, o STF decidiu no Tema 1.024 que os valores retidos pelas administradoras de cartão entram na base de cálculo. A taxa é uma despesa da loja, não um desconto no faturamento." },
      { type: "p", text: "Também não há crédito a recuperar para o pequeno lojista. Empresas do Simples Nacional não aproveitam créditos dos tributos que recolhem pelo Simples (Lei Complementar 123, art. 23). Com a reforma tributária, a Lei Complementar 214/2025 coloca a taxa da maquininha no campo do IBS e da CBS (art. 214), mas o crédito desses tributos fica com a loja que está no regime regular (art. 218). Para o MEI e para quem recolhe tudo pelo Simples Nacional, a taxa continua sendo custo cheio." },

      { type: "h2", text: "Preciso emitir nota fiscal em cada venda?" },
      { type: "p", text: "Microempresa e empresa de pequeno porte do Simples Nacional são obrigadas a emitir documento fiscal nas vendas (Lei Complementar 123, art. 26). No varejo, isso costuma ser a NFC-e, seguindo as regras da Sefaz do seu estado. Em São Paulo, a emissão do CF-e-SAT está proibida desde 1º de janeiro de 2026, e a Sefaz-SP trata a mudança como a transição do SAT para a NFC-e." },
      { type: "p", text: "O MEI tem regra própria: emite nota quando vende para outra empresa (CNPJ) e está dispensado na venda ao consumidor final. O Decreto 13.140, de 21 de outubro de 2026, prevê que o MEI use a declaração anual (DASN-SIMEI) como documento fiscal nas vendas a pessoas físicas, mas a aplicação ainda depende de deliberação do Comitê Gestor do Simples Nacional (CGSN). Confirme com o seu contador como isso fica no seu caso." },

      { type: "h2", text: "Vale a pena aceitar crédito ou oferecer parcelado? Faça a conta do ponto de equilíbrio" },
      { type: "p", text: "O Pix já é o meio de pagamento que os brasileiros mais usam: 46,1% o apontaram como o mais frequente na pesquisa de 2024 do Banco Central, à frente do dinheiro em espécie. Com taxa de 0% a 0,49% na maioria das tabelas, aceitar Pix quase não pesa. A dúvida de verdade está no crédito e, principalmente, no parcelado sem juros." },
      { type: "p", text: "O custo é a taxa; o ganho são as vendas que só acontecem porque a loja aceita aquela forma de pagamento. A conta que empata as duas coisas é a mesma de antes: parte das vendas nessa forma de pagamento que precisa ser venda nova = taxa ÷ margem percentual." },
      { type: "p", text: "Com margem de 40% e crédito à vista a 3,02%, cada R$ 1.000,00 vendidos no crédito pagam R$ 30,20 de taxa. Se pelo menos R$ 75,50 desses R$ 1.000,00 (7,55%) forem de clientes que não comprariam sem cartão, a margem dessas vendas paga a taxa. No parcelado em 3x a 8,19%, a taxa sobe para R$ 81,90, e a venda nova precisa chegar a R$ 204,75 (20,5%) de cada R$ 1.000,00." },
      { type: "p", text: "Se o cliente que parcela pagaria à vista de qualquer jeito, a taxa é custo puro. A pergunta a fazer é quantos clientes deixariam de comprar sem o parcelado: num produto caro, podem ser muitos; num produto barato, provavelmente poucos. Quando a conta não fecha, o parcelado com juros passa o custo das parcelas para o cliente." },

      { type: "h2", text: "Como saber quanto a sua loja paga de verdade?" },
      { type: "p", text: "O número certo está no extrato da maquininha: o app de cada empresa mostra a taxa descontada em cada venda. Some as taxas do mês e divida pelo valor vendido em cada forma de pagamento (débito, crédito à vista, cada número de parcelas e Pix). Esse é o seu custo real, e a comparação mês a mês mostra se a faixa mudou." },
      { type: "p", text: "Se você já vende pelo iPad, o PDV pode fazer a conta. No [DingPOS](/), em Ajustes → Formas de pagamento, toque em uma forma de pagamento e preencha Taxa de processamento: uma porcentagem, um valor fixo por transação ou os dois. Como no Brasil a taxa muda com o número de parcelas, vale criar uma forma de pagamento para cada modalidade que você usa, como Crédito à vista e Crédito 3x. No Resumo, o cartão Formas de pagamento mostra a taxa e o líquido estimados de cada forma e do período inteiro. Se a sua maquininha não devolve a taxa no estorno, como acontece em geral no Mercado Pago, desative “Percentual da taxa devolvido em reembolsos” para a estimativa não ficar abaixo do real. O DingPOS não processa pagamentos nem lê o extrato da maquininha: os valores são estimativas feitas com a taxa que você informou, e o valor real é o do extrato. Ele também não emite NFC-e; continue emitindo as notas no seu emissor e use o DingPOS ao lado dele para registrar as formas de pagamento e estimar taxas e margem." },
      { type: "p", text: "O passo a passo está em [O DingPOS controla as taxas de cartão e de pagamento por celular?](/support/payment-fees/). O recurso faz parte do plano Standard ou superior; compare os planos em [Planos e preços](/pricing/) e experimente antes com o teste grátis de 30 dias." },
    ],
    sources: [
      { label: "Mercado Pago: maquininhas Point — tabela de taxas por faturamento mensal, taxas promocionais e recálculo mensal da faixa", url: "https://www.mercadopago.com.br/ferramentas-para-vender/maquininhas-point" },
      { label: "Mercado Pago: aceitar Pix (taxa de 0,49% na maquininha e no QR Code; dinheiro cai na hora)", url: "https://www.mercadopago.com.br/ferramentas-para-vender/aceitar-pix" },
      { label: "Mercado Pago Blog: como fazer estorno de venda na maquininha Point (a taxa da venda original geralmente não é reembolsada)", url: "https://www.mercadopago.com.br/blog/estorno-venda-maquininha-point" },
      { label: "PagBank: maquininhas — planos Super Max e Essencial, taxas promocionais e taxas normais", url: "https://pagbank.com.br/para-seu-negocio/maquininhas" },
      { label: "PagBank: o Pix cobra taxas? (venda com Pix pode ter taxa limitada a 1,89%)", url: "https://faq.pagbank.com.br/duvida/quanto-eu-pago-para-usar-o-pix/1160" },
      { label: "InfinitePay: taxas da maquininha por faturamento, por bandeira e por prazo de recebimento (na hora, 1 dia útil, sem antecipação)", url: "https://www.infinitepay.io/taxas" },
      { label: "Stone: contrato de vendas (condições personalizadas pelo faturamento; antecipação acompanha a Selic)", url: "https://ajuda.stone.com.br/como-consultar-o-contrato-de-vendas-da-stone" },
      { label: "Banco Central: Resolução BCB nº 19/2020 (tarifas do Pix para pessoa natural, empresário individual e pessoa jurídica)", url: "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=19" },
      { label: "Planalto: Decreto nº 12.712/2025 (PAT — teto de 3,6% na taxa do vale-refeição e vale-alimentação, repasse em até 15 dias corridos)", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12712.htm" },
      { label: "Planalto: Lei nº 13.455/2017 (diferenciação de preço por prazo ou meio de pagamento)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13455.htm" },
      { label: "Procon-SC: diferenciação de preço por meio de pagamento — só desconto, nunca acréscimo; valor mínimo no cartão é ilegal (out. 2026)", url: "https://www.procon.sc.gov.br/diferenciacao-de-preco-por-meio-de-pagamento-veja-o-que-pode-e-o-que-e-proibido/" },
      { label: "Procon Goiás: perguntas frequentes (preços diferentes à vista e no cartão, desde que divulgados antes)", url: "https://goias.gov.br/procon/faq/" },
      { label: "STF: Tema 1.024 da repercussão geral (valores retidos pelas administradoras de cartão entram na base do PIS e da Cofins)", url: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=5193219&numeroProcesso=1049811&numeroTema=1024" },
      { label: "Planalto: Lei Complementar nº 123/2006 (art. 3º, § 1º, receita bruta; art. 23, créditos; art. 26, documento fiscal e regra do MEI)", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm" },
      { label: "Planalto: Lei Complementar nº 214/2025, texto compilado (art. 214, arranjos de pagamento; art. 218, crédito de IBS e CBS no regime regular)", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm" },
      { label: "Sefaz-SP: Portaria SRE 79/2024 (emissão de CF-e-SAT proibida a partir de 1º/1/2026)", url: "https://legislacao.fazenda.sp.gov.br/Paginas/Portaria-SRE-79-de-2024.aspx" },
      { label: "Sefaz-SP: sobre o SAT (transição do SAT para a NFC-e; CF-e-SAT emitido a partir de 1º/1/2026 é rejeitado)", url: "https://portal.fazenda.sp.gov.br/servicos/sat/" },
      { label: "Planalto: Decreto nº 13.140/2026 (DASN-SIMEI como documento fiscal do MEI nas vendas ao consumidor final)", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/d13140.htm" },
      { label: "Ministério do Empreendedorismo: MEI poderá usar declaração anual no lugar da nota fiscal para pessoas físicas (23/10/2026)", url: "https://www.gov.br/memp/pt-br/assuntos/noticias/mei-podera-usar-declaracao-anual-no-lugar-da-nota-fiscal-para-pessoas-fisicas" },
      { label: "Banco Central: Relatório de Cidadania Financeira 2025 (Pix como meio de pagamento mais frequente para 46,1% em 2024)", url: "https://www.bcb.gov.br/content/cidadaniafinanceira/documentos_cidadania/RIF/Relatorio_de_Cidadania_Financeira_2025.pdf" },
    ],
    related: [],
  },
];
