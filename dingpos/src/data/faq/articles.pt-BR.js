// Generated from en and the pt-BR translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- dingpos sync pt-BR`, then `npm run l10n -- dingpos apply pt-BR`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Primeiros passos",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Finalizar venda",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Vendas e devoluções",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Produtos, estoque e compras",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Relatórios",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Promoções e fidelidade",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Backup e dados",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Equipe e permissões",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Assinatura e cobrança",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Guias de configuração de promoções",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Em breve",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Como configurar minha loja no DingPOS?",
    "keywords": [
      "configuração inicial",
      "como começar",
      "primeiros passos",
      "assistente de configuração",
      "abrir loja",
      "configurar loja",
      "país",
      "moeda",
      "impostos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Na primeira vez que você abre o DingPOS, um assistente de configuração prepara sua loja em duas etapas e em poucos minutos:"
      },
      {
        "type": "steps",
        "items": [
          "Escolha seu país ou região. No topo da lista aparecem o país ou a região em que este iPad está e, depois, os mercados mais comuns; abaixo deles estão os 175 países e regiões em que o DingPOS está na App Store, com busca pelo nome no idioma do app ou em inglês. Sua escolha preenche a moeda, os impostos e o modo de imposto.",
          "Na etapa Sua loja, digite o nome da loja, adicione um logotipo se quiser e confira a moeda, os impostos e o modo de imposto (Imposto incluso / Imposto não incluso). A moeda vem predefinida com a do seu país; toque nela para escolher entre 130 moedas. A lista de impostos traz os impostos padrão do seu país: renomeie, altere a alíquota, exclua um ou toque em Adicionar imposto para criar outra linha. Uma loja na Colúmbia Britânica, por exemplo, muda a primeira linha para “GST 5” e acrescenta uma linha “PST 7”."
        ]
      },
      {
        "type": "p",
        "text": "Toque em Continuar e você verá “Ding! Sua loja está pronta.” O DingPOS também cria duas formas de pagamento, Dinheiro e Cartão de crédito. Depois, cadastre seus produtos em Produtos e comece a registrar vendas."
      },
      {
        "type": "note",
        "text": "A moeda não pode ser alterada depois da configuração; os impostos e o modo de imposto podem ser alterados depois em Ajustes → Dados da loja. Nos Estados Unidos, no Canadá, no Brasil e na Micronésia, a alíquota depende do estado, da província ou da cidade; por isso o campo de alíquota começa vazio e você informa a alíquota que cobra para continuar. A alíquota precisa ser maior que 0: a loja que não cobra imposto exclui a linha. Na Alemanha, na França, na Itália e em outros países europeus, a lista também inclui as alíquotas reduzidas comuns no comércio local, com o nome do imposto local, como “MwSt. 19%” e “MwSt. 7%” na Alemanha; as alíquotas reduzidas não são aplicadas por padrão a novos produtos, então ative-as em cada produto. A lista de 175 países e a escolha de moeda chegaram na v3.2; as versões anteriores ofereciam 15 países."
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
    "question": "O DingPOS funciona sem internet?",
    "keywords": [
      "offline",
      "sem internet",
      "wi-fi",
      "sem conexão",
      "rede",
      "feira"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. O DingPOS funciona offline — venda, cadastro de produtos, estoque e relatórios rodam direto no seu iPad, sem precisar de rede. Feiras noturnas, barracas temporárias e outros lugares sem Wi-Fi funcionam perfeitamente."
      },
      {
        "type": "p",
        "text": "Só duas coisas precisam de conexão: o backup na nuvem (envio para o seu próprio iCloud / Google Drive / Dropbox) e a verificação do status da assinatura."
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
    "question": "Preciso criar uma conta para usar o DingPOS?",
    "keywords": [
      "conta",
      "cadastro",
      "login",
      "criar conta",
      "privacidade"
    ],
    "content": [
      {
        "type": "p",
        "text": "Não. O DingPOS não tem sistema de contas — baixe e comece a vender. Seus produtos, vendas e dados de clientes ficam todos no seu iPad. Eles só chegam até nós se você enviar um relatório de suporte pelos Ajustes, que anexa uma cópia dos dados da sua loja para que possamos reproduzir o problema."
      },
      {
        "type": "p",
        "text": "Ao ativar o backup na nuvem, você entra na sua própria conta (iCloud, Google Drive ou Dropbox). Os backups ficam na sua conta — nós não temos acesso a eles."
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
    "question": "Quais aparelhos são compatíveis com o DingPOS?",
    "keywords": [
      "aparelho",
      "iphone",
      "mac",
      "ipad",
      "requisitos",
      "versão"
    ],
    "content": [
      {
        "type": "p",
        "text": "No momento, o DingPOS funciona em iPads com iPadOS 17.4 ou posterior, pensado principalmente para uso na horizontal."
      },
      {
        "type": "p",
        "text": "iPhone e Mac ainda não são compatíveis. Se você quiser que a gente ofereça suporte a outro aparelho, escreva para nós e conte como você pretende usar."
      },
      {
        "type": "note",
        "text": "Todo iPad que roda o iPadOS 17 pode atualizar para o 17.4, então nenhum modelo fica de fora. Um iPad que ainda esteja no iPadOS 17.0–17.3 precisa primeiro de uma atualização do sistema, em Ajustes → Geral → Atualização de Software, para poder instalar o DingPOS v3.5 ou posterior."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Dá para mudar a moeda, a alíquota ou o modo de imposto depois da configuração?",
    "keywords": [
      "moeda",
      "modo de imposto",
      "alterar",
      "bloqueado",
      "alíquota",
      "impostos",
      "incluso",
      "não incluso"
    ],
    "content": [
      {
        "type": "p",
        "text": "O imposto pode mudar; a moeda, não. Os impostos e o modo de imposto são alterados no cartão Imposto, em Ajustes → Dados da loja, e a mudança vale apenas para as próximas vendas: vendas anteriores, devoluções e relatórios mantêm os valores de imposto e o modo que registraram."
      },
      {
        "type": "list",
        "items": [
          "Impostos: adicione, renomeie, altere a alíquota ou exclua — veja “Como o imposto é calculado?”",
          "Modo de imposto (Imposto incluso / Imposto não incluso): toque no outro modo, e a confirmação mostra um exemplo com o seu primeiro imposto, como “um item de NT$100 com 5% de imposto: o cliente paga NT$105”. Os preços mantêm os mesmos números, e um carrinho aberto é recalculado no novo modo quando você volta ao caixa. O modo pode ser trocado desde a v3.5; as versões anteriores o bloqueiam na configuração.",
          "Depois da troca, uma devolução total ainda reembolsa a venda original como ela foi feita. Uma troca (com itens de troca) em uma venda feita no outro modo fica bloqueada: volte o modo ao original ou devolva os itens e registre-os de novo."
        ]
      },
      {
        "type": "p",
        "text": "A moeda fica bloqueada depois que a configuração é concluída. Todas as suas vendas anteriores foram registradas nela, então trocá-la no meio do caminho bagunçaria seus relatórios. Confira a moeda na etapa Sua loja da configuração: ela começa com a moeda do seu país e você pode tocar nela para escolher outra."
      },
      {
        "type": "note",
        "text": "Se você acabou de abrir a loja e ainda não tem dados importantes, pode excluir e reinstalar o app para refazer a configuração. Antes de excluir, confira se não há nada que você precise guardar."
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
    "question": "Como mudar o idioma do app?",
    "keywords": [
      "idioma",
      "inglês",
      "chinês",
      "japonês",
      "espanhol",
      "vários idiomas",
      "trocar idioma",
      "língua"
    ],
    "content": [
      {
        "type": "p",
        "text": "O DingPOS é compatível com 32 idiomas, entre eles inglês, chinês tradicional e simplificado, japonês, coreano, tailandês, vietnamita, indonésio, malaio, espanhol (América Latina), português (Brasil), francês e alemão. Vá em Ajustes → Preferências do aparelho e toque em Idioma do app. Isso abre a página do DingPOS no app Ajustes do iPad, onde você escolhe o idioma em Idioma."
      },
      {
        "type": "p",
        "text": "O iOS não permite que apps abram a lista de idiomas diretamente, então o último toque acontece nos Ajustes do sistema. O idioma vale apenas para este iPad."
      },
      {
        "type": "note",
        "text": "Os idiomas além de inglês e chinês tradicional chegaram na v3.2. Se a lista em Idioma mostrar apenas inglês e chinês, atualize o DingPOS pela App Store."
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
    "question": "Como atender vários clientes ao mesmo tempo?",
    "keywords": [
      "carrinhos",
      "vários clientes",
      "segurar venda",
      "alternar carrinho",
      "atendimento simultâneo",
      "fila"
    ],
    "content": [
      {
        "type": "p",
        "text": "A tela do caixa trabalha com dez carrinhos ao mesmo tempo. Toque em \"+\" na barra de carrinhos para adicionar um e toque em uma aba numerada para alternar."
      },
      {
        "type": "p",
        "text": "Cada carrinho é calculado de forma independente. Enquanto o cliente A ainda está escolhendo, mude para outro carrinho e finalize primeiro a venda do cliente B. O carrinho é removido automaticamente assim que a venda é finalizada."
      },
      {
        "type": "note",
        "text": "Os carrinhos ficam apenas na memória: os que não foram finalizados são apagados quando o app é fechado por completo."
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
    "question": "Como dar desconto em uma venda?",
    "keywords": [
      "desconto",
      "porcentagem",
      "valor fixo",
      "abatimento",
      "preço promocional",
      "desconto predefinido"
    ],
    "content": [
      {
        "type": "p",
        "text": "Os descontos funcionam em dois níveis, e cada um aceita um valor fixo ou uma porcentagem:"
      },
      {
        "type": "list",
        "items": [
          "Desconto em itens: toque em um item no carrinho → escolha \"Desconto\" → digite um valor ou uma porcentagem.",
          "Desconto no carrinho: toque no botão \"Desconto\" abaixo do carrinho."
        ]
      },
      {
        "type": "p",
        "text": "Cada item e cada carrinho podem ter um desconto por vez: aplicar de novo substitui o anterior, e tocar na etiqueta do desconto o remove. Os descontos são aplicados antes do imposto, a ordem padrão no varejo."
      },
      {
        "type": "p",
        "text": "Os descontos que você dá com frequência podem ser salvos: vá em Ajustes → Fidelidade e promoções → Descontos predefinidos e toque em Adicionar desconto predefinido, por exemplo “Preço de funcionário 20% off”. No caixa, tanto o desconto em itens quanto o desconto no carrinho têm um menu Predefinidos; ao escolher um, o tipo e o valor do desconto são preenchidos exatamente como se você os tivesse digitado, então ele continua contando para o limite de desconto do funcionário. Os descontos predefinidos chegaram na versão 3.6 e exigem o plano Standard ou superior."
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
    "question": "Como o imposto é calculado?",
    "keywords": [
      "imposto",
      "iva",
      "icms",
      "imposto sobre vendas",
      "imposto incluso",
      "imposto não incluso",
      "vários impostos",
      "gst",
      "pst",
      "pausar imposto",
      "recibo"
    ],
    "content": [
      {
        "type": "p",
        "text": "O imposto é calculado automaticamente a partir dos impostos e do modo de imposto definidos em Ajustes → Dados da loja. Há dois modos de imposto, e o recibo mostra o valor do imposto nos dois:"
      },
      {
        "type": "list",
        "items": [
          "Imposto incluso: os preços já contêm o imposto, o total não muda e o recibo detalha o imposto embutido (comum em Taiwan, no Japão etc.).",
          "Imposto não incluso: o imposto é somado ao valor depois do desconto na hora de finalizar a venda (comum nos EUA, no Canadá etc.)."
        ]
      },
      {
        "type": "p",
        "text": "Uma loja pode cobrar vários impostos, como GST de 5% mais PST de 7% na Colúmbia Britânica, ou o imposto de consumo de 10% do Japão junto com a alíquota reduzida de 8%:"
      },
      {
        "type": "list",
        "items": [
          "No cartão Imposto, toque em Adicionar imposto e informe um nome e uma alíquota. Ative Aplicar a novos produtos e os produtos que você cadastrar depois já virão com esse imposto. Se a loja já tem um imposto padrão, um imposto recém-adicionado começa com essa chave desativada; ative-a quando os dois devem ser cobrados.",
          "Cada produto escolhe os impostos que cobra em Impostos, no formulário do produto — um bentô pode cobrar só a alíquota reduzida de 8%. Com dois ou mais ativados, o formulário mostra a alíquota total do produto.",
          "Toque em um imposto para renomeá-lo, mudar a alíquota ou usar Aplicar a todos os produtos ou Remover de todos os produtos, que o incluem ou retiram de todos os produtos de uma vez. Ao excluir um imposto, o app avisa antes quantos produtos deixarão de cobrá-lo.",
          "Em uma loja com imposto não incluso, os totais do carrinho mostram uma linha por imposto, e o detalhe da venda lista uma linha por imposto, com a alíquota e o valor sobre o qual foi cobrado."
        ]
      },
      {
        "type": "p",
        "text": "Para deixar de cobrar imposto por um tempo, desative Cobrar imposto no topo do cartão Imposto: todas as vendas seguintes ficam sem imposto, inclusive os itens que já estão no carrinho. Cada produto mantém os próprios impostos, e ao reativar a chave tudo volta como estava."
      },
      {
        "type": "p",
        "text": "Ordem completa do cálculo: descontos e promoções nos itens → desconto no carrinho → resgate de pontos → imposto. Os valores são arredondados para cima a partir de meio (0,5) nas casas decimais da moeda (por exemplo, 0 para TWD e 2 para USD). O imposto é calculado uma vez por imposto em cada venda, e suas frações seguem o Arredondamento do imposto no cartão Imposto: Arredondar para cima a partir da metade, Arredondar para baixo ou Arredondar para cima. As lojas novas no Japão começam em Arredondar para baixo; as demais começam em Arredondar para cima a partir da metade."
      },
      {
        "type": "note",
        "text": "Os impostos com nome chegaram na versão 3.5. Ao atualizar, sua alíquota vira um imposto com nome (“GST 10%” na Austrália, por exemplo) e todos os produtos existentes passam a cobrá-lo; uma loja cuja alíquota era 0 fica sem imposto. As vendas e as devoluções anteriores mantêm as alíquotas e os valores com que foram registradas; os relatórios agora contam a receita antes do imposto, inclusive de períodos passados (veja “Qual é a diferença entre Receita e Valor recebido?”)."
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
    "question": "Quais formas de pagamento posso registrar no DingPOS?",
    "keywords": [
      "pagamento",
      "dinheiro",
      "cartão de crédito",
      "line pay",
      "troco",
      "forma de pagamento personalizada",
      "a prazo",
      "taxas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Uma loja nova começa com duas formas de pagamento, Dinheiro e Cartão de crédito, com os nomes no idioma do app na configuração. Em Ajustes → Formas de pagamento você pode adicionar qualquer outra forma (por exemplo, Apple Pay, LINE Pay, uma carteira digital local) e reordená-las. Toque em uma forma para renomeá-la, por exemplo de Cartão de crédito para “Cartão (Square)”; o Resumo conta as vendas feitas antes da mudança de nome com o novo nome (desde a versão 3.6). Excluir forma de pagamento fica no fim da tela de edição e pergunta antes de excluir; as vendas anteriores mantêm a forma com que foram pagas, e a última forma restante não pode ser excluída."
      },
      {
        "type": "p",
        "text": "As formas de pagamento são apenas etiquetas de controle: o DingPOS não processa pagamentos de verdade. Receba pagamentos por cartão ou celular na sua maquininha ou app de sempre e depois escolha a forma correspondente no DingPOS para registrar. Nos pagamentos em dinheiro, o troco é calculado automaticamente e, onde as moedas de menor valor deixaram de circular, o dinheiro também pode ser arredondado — veja “O pagamento em dinheiro pode ser arredondado para as moedas em circulação?”"
      },
      {
        "type": "p",
        "text": "Se a operadora do cartão ou do pagamento por celular cobra uma taxa, defina a alíquota da taxa na forma de pagamento e o Resumo estima as taxas e o líquido estimado a receber de cada forma — veja “O DingPOS controla as taxas de cartão e de pagamento por celular?”"
      },
      {
        "type": "p",
        "text": "Para o cliente fixo que leva a mercadoria agora e paga depois, escolha A prazo: a venda é registrada como conta a receber e quitada quando o dinheiro chegar. Veja “Posso vender a prazo para clientes habituais e receber depois?”"
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
    "question": "O DingPOS controla as taxas de cartão e de pagamento por celular?",
    "keywords": [
      "taxa de processamento",
      "taxa de cartão",
      "taxa por transação",
      "alíquota da taxa",
      "líquido a receber",
      "taxa da maquininha",
      "line pay"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. Em Ajustes → Formas de pagamento, toque em uma forma (ou adicione uma nova) e preencha Taxa de processamento: uma porcentagem, um valor fixo por transação ou os dois. As formas do tipo Dinheiro não têm taxa. A partir daí, cada pagamento recebido por essa forma registra uma taxa estimada com a alíquota em vigor naquele momento."
      },
      {
        "type": "p",
        "text": "No Resumo, o cartão Formas de pagamento ganha uma linha “Taxa · Líquido” sob cada forma que tem taxa, e o rodapé do cartão mostra as taxas estimadas e o líquido estimado a receber do período inteiro."
      },
      {
        "type": "list",
        "items": [
          "Informe a alíquota que a operadora realmente desconta. Se ela cobra imposto sobre a taxa, inclua-o: para 3% mais 5% de imposto, informe 3,15%. Deixe os dois campos vazios para nenhuma taxa.",
          "Mudar a alíquota vale apenas para os pagamentos seguintes; as taxas já registradas continuam como estavam.",
          "“Percentual da taxa devolvido em reembolsos” vem ativado para lojas em Taiwan e no Japão e desativado nas demais, porque operadoras como Stripe, Square e PayPal ficam com a taxa em um reembolso; ajuste-o conforme a sua operadora. Ele vale para devoluções e para sinais de encomendas reembolsados: com ele ativado, a porcentagem é devolvida; a taxa fixa nunca. Uma anulação ou um estorno da quitação ignora a chave e estorna a taxa inteira que registrou, taxa fixa incluída. Nos dois casos, o cliente recebe de volta o mesmo valor.",
          "Pagamentos recebidos antes de a forma ter uma alíquota ficam sem taxa: o Resumo os marca como “N sem alíquota” e mostra o líquido como “—”."
        ]
      },
      {
        "type": "note",
        "text": "As taxas são estimativas a partir da alíquota que você informa; o extrato da operadora mostra o valor real. Editar as alíquotas das taxas exige o plano Standard ou superior, e no Lite os campos ficam bloqueados. Desde a versão 3.4, todos os planos veem as taxas registradas no Resumo e na DRE, então uma alíquota definida durante o teste continua estimando no Lite; as versões anteriores mostravam as taxas só no Standard ou superior."
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
    "question": "O pagamento em dinheiro pode ser arredondado para as moedas em circulação?",
    "keywords": [
      "arredondamento do dinheiro",
      "arredondamento",
      "arredondar para cima",
      "arredondar para baixo",
      "moedas",
      "centavo",
      "0,05",
      "troco",
      "canadá",
      "austrália",
      "suíça"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. Canadá, Austrália, Nova Zelândia, Suíça, Dinamarca, Suécia, Noruega, Bélgica, Finlândia e Hungria deixaram de usar as moedas de menor valor, então o DingPOS arredonda o dinheiro para um valor que dá para entregar de fato: uma venda de C$12,99 paga em dinheiro é recebida como C$13,00, e o troco é calculado a partir de C$13,00. Cartão e outros pagamentos que não são em dinheiro continuam exatos."
      },
      {
        "type": "p",
        "text": "Uma loja nova configurada em um desses países, com a moeda do país, já vem com o arredondamento ativado. Qualquer outra loja pode ativá-lo no cartão Arredondamento do dinheiro, no fim de Ajustes → Formas de pagamento: escolha para quanto arredondar o dinheiro (Sem arredondamento, ou 0,05, 0,10, 0,50 ou 1,00 em uma moeda com centavos; 5, 10, 50 ou 100 em uma sem centavos, como TWD ou JPY) e, para um múltiplo que pode cair exatamente no meio, se esse valor sobe ou desce. Uma alteração vale apenas para pagamentos futuros."
      },
      {
        "type": "list",
        "items": [
          "Ao finalizar a venda, a tela mostra “Dinheiro recebido C$13,00”. Se o cliente pedir para pagar o valor exato, toque em Receber o valor exato, abaixo das formas de pagamento; isso vale só para aquela venda.",
          "O total da venda, o imposto, a receita, os pontos e o gasto do cliente não mudam; a diferença de arredondamento fica no pagamento, e a tela do recibo e o detalhe da venda a mostram abaixo do total, como “Arredondamento do dinheiro +C$0,01”.",
          "Reembolsos em dinheiro de devoluções, sinais em dinheiro e saldos na retirada de encomendas, complementos de trocas e vendas a prazo quitadas em dinheiro também são arredondados; ao quitar várias de uma vez, o lote é arredondado uma única vez.",
          "Anulações, sinais de encomendas reembolsados e quitações desfeitas devolvem exatamente o que foi registrado, sem arredondar de novo.",
          "O Valor recebido no Resumo mostra quanto dele foi arredondamento do dinheiro, e a DRE mensal ganha uma linha Arredondamento do dinheiro que entra no lucro líquido. O arredondamento nunca é receita."
        ]
      },
      {
        "type": "note",
        "text": "A Suíça sempre arredonda para baixo, seguindo suas regras de exibição de preços — CHF 12,98 é recebido como CHF 12,95, e não há escolha de meio. A Bélgica arredonda apenas totais acima de €0,05. O arredondamento do dinheiro está em todos os planos, e uma loja já existente recebe o dinheiro exatamente como antes até você ativá-lo."
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
    "question": "Como desativar o \"Ding\" ao finalizar a venda?",
    "keywords": [
      "som",
      "ding",
      "silenciar",
      "sem som",
      "som ao finalizar venda"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dá, sim. Vá em Ajustes → Preferências do aparelho e desative Som ao finalizar venda. A partir da próxima venda, a tela de sucesso fica em silêncio, mas a vibração continua."
      },
      {
        "type": "p",
        "text": "A opção vale somente para este iPad, e restaurar um backup na nuvem não a altera."
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
    "question": "Dá para ocultar produtos sem estoque na tela do caixa?",
    "keywords": [
      "ocultar",
      "sem estoque",
      "esgotado",
      "estoque zero",
      "caixa",
      "produto sumiu",
      "não acho o produto"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. Vá em Ajustes → Preferências do aparelho e ative Ocultar produtos sem estoque (desativado por padrão). A grade de produtos do caixa, o filtro de categorias e a busca (por nome e código de barras) passam a ignorar todo produto com estoque 0 ou abaixo. A opção vale na hora, sem precisar reabrir o app."
      },
      {
        "type": "list",
        "items": [
          "Produtos que não controlam estoque sempre aparecem. Um produto com variantes só é ocultado quando todas as variantes estão sem estoque.",
          "Afeta apenas o caixa deste iPad; a lista de Produtos continua mostrando todos os produtos.",
          "Quando todos os produtos estão ocultos, o caixa mostra “Todos os produtos estão sem estoque” e indica onde desativar a opção."
        ]
      },
      {
        "type": "note",
        "text": "Com a opção ativada, este iPad não encontra produtos sem estoque, então não consegue vender com estoque negativo nem registrar uma encomenda deles — desative quando precisar. Se os produtos parecem ter sumido do caixa, essa opção costuma ser o motivo."
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
    "question": "Se eu mudar o preço de um produto, o carrinho é atualizado?",
    "keywords": [
      "mudança de preço",
      "reajuste de preço",
      "carrinho",
      "recalcular"
    ],
    "content": [
      {
        "type": "p",
        "text": "O carrinho mostra o preço do momento em que o item foi adicionado. Quando você toca em confirmar a finalização da venda, o DingPOS consulta de novo o preço mais recente de cada item e, se algo mudou, avisa você com os preços atualizados antes de continuar."
      },
      {
        "type": "p",
        "text": "As promoções também são reavaliadas do zero na confirmação. Se o total, o imposto ou o valor de algum desconto mudar por causa disso, um resumo das mudanças é exibido e você precisa confirmar de novo, para que o valor que você vê seja exatamente o valor registrado."
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
    "question": "Dá para usar desconto manual junto com promoções?",
    "keywords": [
      "desconto manual",
      "promoção",
      "combinar",
      "substituir promoção"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. A regra é \"o manual vence, e as camadas continuam independentes\":"
      },
      {
        "type": "list",
        "items": [
          "Desconto manual no item: essa linha deixa de receber promoções de item, pois seu desconto manual é tratado como a decisão final na hora. Ainda assim, o valor da linha conta para as metas de gasto.",
          "Desconto manual no carrinho: é aplicado depois que todas as promoções foram calculadas, então os dois convivem. Se você digitar um valor maior que o total restante, ele é limitado automaticamente, com um aviso."
        ]
      },
      {
        "type": "p",
        "text": "Ao remover um desconto manual, a linha volta a ser elegível para promoções na próxima avaliação."
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
    "question": "Como adicionar ou trocar o cliente de uma venda?",
    "keywords": [
      "cliente",
      "membro",
      "vincular cliente",
      "trocar cliente",
      "novo cliente",
      "finalizar venda"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vincule o cliente no carrinho ou na tela Pagamento: a linha Cliente, abaixo do valor, abre a lista de clientes quando ninguém está vinculado e oferece Alterar cliente ou Remover cliente quando alguém está. O cliente escolhido no pagamento é o cliente do carrinho e continua nele se você cancelar o pagamento."
      },
      {
        "type": "list",
        "items": [
          "Trocar o cliente recalcula na hora os descontos de nível, as ofertas de aniversário e o resgate de pontos. O dinheiro ou o sinal que você já digitou é mantido e conferido com o novo total.",
          "Não achou? Toque em Novo cliente no canto superior direito da lista de clientes ou, quando nada corresponde à busca, no meio da lista. O que você buscou preenche o formulário — números vão para o telefone, o resto para o nome — e o novo cliente é vinculado à venda.",
          "Ao tocar em A prazo sem cliente vinculado, a lista de clientes abre, e A prazo fica selecionado assim que você escolhe alguém.",
          "Se o novo cliente fizer um desconto manual passar do limite de desconto do operador, um gerente precisa aprovar antes; se você cancelar a aprovação, o cliente continua como estava."
        ]
      },
      {
        "type": "note",
        "text": "Clientes fazem parte do plano Standard; no Lite a linha mostra “Clientes — plano Standard” e abre os detalhes do upgrade. A linha Cliente na tela Pagamento chegou na versão 3.4; as versões anteriores vinculam o cliente só no carrinho."
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
    "question": "Errei na hora de finalizar a venda: como anulo uma venda?",
    "keywords": [
      "anular venda",
      "cancelar venda",
      "erro na venda",
      "venda errada",
      "anulação"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vá em Vendas, encontre a venda, abra os detalhes e toque em Anular. A janela “Anular esta venda?” aceita um motivo opcional (até 100 caracteres); toque em Anular no canto superior direito e pronto. O motivo aparece nos detalhes da venda e no registro de atividades e não pode ser editado depois de enviado."
      },
      {
        "type": "p",
        "text": "A anulação desfaz automaticamente tudo o que está ligado à venda: o estoque controlado volta, os pontos de fidelidade ganhos na venda são retirados e os pontos resgatados são devolvidos. As vendas anuladas continuam na lista, com marcação bem visível, e ficam fora da receita dos relatórios."
      },
      {
        "type": "note",
        "text": "Anular significa “essa venda nunca aconteceu”: use quando a venda foi lançada errada na hora. Quando o cliente trouxer o produto de volta depois, use Devolução: a venda original é mantida, você pode devolver só alguns itens e a receita é reduzida no dia da devolução."
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
    "question": "Como fazer uma devolução ou troca?",
    "keywords": [
      "devolução",
      "troca",
      "reembolso",
      "devolução parcial",
      "trocar tamanho",
      "descartar produto devolvido",
      "motivo da devolução"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vá em Vendas, abra a venda original e toque em Devolução. Escolha quantas unidades de cada item voltam. Para uma troca, toque em Adicionar item da troca na mesma tela; a diferença é acertada de uma vez: valor positivo significa que o cliente paga, negativo significa que você devolve o dinheiro, e zero significa que ninguém paga nada."
      },
      {
        "type": "list",
        "items": [
          "A venda original nunca é alterada. A devolução cria um documento próprio, com a data de hoje e numeração com prefixo R, e a receita é reduzida no dia da devolução.",
          "O reembolso é o que o cliente realmente pagou por aquele item: descontos do item, descontos do carrinho e resgate de pontos já são rateados, então o valor não volta pelo preço de tabela. O imposto usa a alíquota com que a venda original foi cobrada.",
          "Os itens da troca são cobrados pelo preço de hoje, sem promoções nem descontos.",
          "Para um produto com estoque controlado, cada item devolvido pode voltar ao estoque (Repor, a opção padrão) ou ser descartado (Descartar, desde a v3.5). Repor devolve a quantidade ao estoque. Descartar mantém o estoque como estava e soma o custo que o item tinha quando foi vendido à Perda de estoque do mês no DRE. Reembolso, imposto e pontos são os mesmos nos dois casos.",
          "Os pontos ganhos na venda original são retirados, os pontos resgatados são devolvidos e os itens da troca geram seus próprios pontos.",
          "Quando a venda original é uma venda a prazo ainda não quitada, nenhum dinheiro troca de mãos: a devolução é abatida das contas a receber do cliente e, se o item da troca for mais caro, a diferença é somada ao que ele deve.",
          "Uma venda pode ser devolvida em várias etapas, mas nunca além da quantidade vendida originalmente; quando tudo volta, o imposto, os descontos e os pontos devolvidos somam exatamente os da venda original. Os limites de uso de promoção não são devolvidos pela devolução."
        ]
      },
      {
        "type": "p",
        "text": "O campo Motivo é opcional, com até 100 caracteres. Ele aparece nos detalhes da venda e no registro de atividades e não pode ser editado depois de enviado."
      },
      {
        "type": "note",
        "text": "Não há prazo para devoluções, mas a venda original é necessária. Se uma devolução foi lançada por engano, anule a devolução e a quantidade disponível para devolver volta."
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
    "question": "Como registrar uma encomenda com sinal?",
    "keywords": [
      "encomenda",
      "sinal",
      "retirada",
      "saldo",
      "reservar",
      "encomenda com sinal"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ao finalizar a venda, troque a parte de cima da tela de Venda para Encomenda, escolha a data de retirada, informe o sinal (de 0 até o valor total, com atalhos de 30% / 50% / total) e escolha como o sinal é pago. Associe um cliente para poder avisá-lo sobre a retirada."
      },
      {
        "type": "list",
        "items": [
          "O estoque é baixado quando a encomenda é feita, então a quantidade disponível para venda já reflete isso. É um aviso, não uma reserva: uma venda posterior ainda pode levar a última unidade. Itens sem estoque ficam negativos e se recuperam quando um pedido de compra é recebido.",
          "Quando o cliente vier retirar, toque em Entregar nos detalhes da venda para receber o saldo. A encomenda passa a ser uma venda concluída comum, e devoluções posteriores seguem o fluxo normal.",
          "Se o cliente não aparecer, toque em Cancelar encomenda nos detalhes e escolha devolver o sinal ou ficar com ele. O estoque volta.",
          "O recibo do sinal e o recibo final da retirada têm o mesmo número."
        ]
      },
      {
        "type": "p",
        "text": "No Resumo, a receita de uma encomenda é reconhecida por inteiro na data da retirada, enquanto o sinal entra em Valor recebido no dia em que é pago, então os dois números ficam diferentes por um tempo. Veja “Qual é a diferença entre receita e valor recebido?”"
      },
      {
        "type": "note",
        "text": "Os itens de uma encomenda não podem ser editados; se o cliente mudar de ideia, cancele e faça uma nova encomenda. Criar encomendas exige o plano Standard ou superior. Depois de um downgrade, as encomendas existentes ainda podem ser retiradas ou canceladas."
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
    "question": "Posso vender a prazo para clientes habituais e receber depois?",
    "keywords": [
      "venda a prazo",
      "a prazo",
      "contas a receber",
      "pagar depois",
      "quitação",
      "cliente fiel"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pode. Escolha A prazo como forma de pagamento e a venda é registrada como dívida do cliente. Uma dívida precisa de alguém responsável por ela; por isso, sem cliente vinculado, ao tocar em A prazo a lista de clientes abre primeiro (desde a versão 3.4; as versões anteriores pedem que você vincule um cliente no carrinho)."
      },
      {
        "type": "p",
        "text": "Para receber, mude a parte de cima de Vendas para Contas a receber. As dívidas ficam agrupadas por cliente; abra uma para quitar uma única venda, um mês inteiro ou tudo de uma vez, e a cada vez o DingPOS pergunta como o dinheiro foi pago. Uma venda também pode ser quitada nos detalhes dela, e uma quitação lançada por engano pode ser desfeita com Estornar quitação."
      },
      {
        "type": "list",
        "items": [
          "A receita conta no dia em que o produto sai; o valor recebido e os pontos de fidelidade esperam até o dia da quitação.",
          "As vendas não quitadas aparecem na lista com uma etiqueta âmbar, e os detalhes do cliente mostram quanto ele deve no momento.",
          "Uma devolução em uma venda ainda não quitada não reembolsa dinheiro: o valor é abatido das contas a receber desse cliente.",
          "Um cliente com vendas não quitadas não pode ser excluído."
        ]
      },
      {
        "type": "note",
        "text": "Criar vendas a prazo exige o plano Standard ou superior. Depois de um downgrade, você não pode iniciar novas, mas as contas a receber existentes ainda podem ser consultadas e quitadas."
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
    "question": "Posso adicionar observações a vendas, clientes ou pedidos de compra?",
    "keywords": [
      "observação",
      "observações",
      "anotação",
      "nota",
      "comentário"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pode. As páginas de detalhes de vendas, clientes e pedidos de compra têm, cada uma, observações: toque no cartão de observações para editar, com até 500 caracteres, ou na única linha “Adicionar observação” enquanto não houver nenhuma. Você também pode escrever uma no formulário ao criar um cliente ou um pedido de compra."
      },
      {
        "type": "p",
        "text": "As observações não dependem do status: vendas concluídas, vendas anuladas e devoluções podem receber anotações ou ser editadas. Os valores e os itens de uma venda ficam fixos no fechamento; a observação fica junto do documento e nunca altera o conteúdo dele."
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
    "question": "Como cadastrar produtos com variantes (tamanho, cor)?",
    "keywords": [
      "variantes",
      "tamanho",
      "cor",
      "opções",
      "grade de produtos",
      "especificação"
    ],
    "content": [
      {
        "type": "p",
        "text": "Na tela de edição do produto, toque em Adicionar opção em Opções de variante para criar uma opção (por exemplo, “Cor”) e use “+ Valor” para incluir cada escolha (por exemplo, Vermelho, Azul). Com duas ou mais opções (por exemplo, Cor × Tamanho), o DingPOS monta todas as combinações para você (Vermelho/P, Vermelho/M, Azul/P…)."
      },
      {
        "type": "p",
        "text": "Quando um produto tem variantes, cada combinação em Preço e estoque das variantes tem o próprio estoque, e o preço dela acompanha o Preço do produto: uma combinação sem preço próprio mostra o preço do produto em cinza e muda junto com ele, e um número que você digita é o preço próprio dessa combinação, exibido em preto. Por exemplo, defina o Preço de uma camiseta como 39 e altere só o G para 35: M e GG são vendidos por 39 e, quando o Preço passar a 42, M e GG acompanham e vão para 42, enquanto o G continua em 35. O ⓘ ao lado da coluna Preço traz Usar preço do produto, que faz todas as combinações voltarem a acompanhar o preço do produto. Os produtos criados antes da v3.6 mantêm cada preço de variante como preço próprio da combinação, e o Preço do produto é o menor deles. O caixa, a lista de produtos e os detalhes do produto mostram uma faixa de preço do menor ao maior, como “R$ 35–R$ 39”, ou um preço só quando todas as combinações custam o mesmo; a ordenação por preço usa o menor preço entre as combinações. Na hora da venda, ao tocar no produto, aparece a escolha da variante antes de ele ir para o carrinho."
      },
      {
        "type": "p",
        "text": "O custo funciona do mesmo jeito: um custo vazio mostra o custo do produto em cinza e muda junto com ele, e um número é o custo próprio da combinação, exibido em preto — inclusive 0. Usar custo do produto, no ⓘ ao lado da coluna Custo, apaga de uma vez o custo próprio de todas as combinações."
      },
      {
        "type": "note",
        "text": "Os nomes de opções e de valores podem ter até 20 caracteres, e os espaços no início e no fim são removidos ao salvar. Um valor em que você não digitou nada não é uma combinação e é ignorado ao salvar. O salvamento é interrompido, com o campo destacado em vermelho, quando um nome de opção está em branco, quando todos os valores de uma opção estão em branco ou quando você apaga um valor que o produto já tinha salvo; digite-o de volta ou exclua-o pelo botão de exclusão, que exibe apenas o ícone ×. Um produto com variantes não pode ter preço aberto."
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
    "question": "Dá para digitar o preço do produto na hora da venda, como frete ou item negociado?",
    "keywords": [
      "preço aberto",
      "preço personalizado",
      "digitar preço",
      "frete",
      "taxa de serviço",
      "preço negociado",
      "preço de feira",
      "taxa percentual"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dá, sim: cadastre-o como produto de preço aberto. Ative Preço aberto na tela de edição do produto e deixe o preço vazio; o caixa e a lista de produtos mostram “Preço aberto” no lugar do preço. Na hora da venda, ao tocar no produto, o app pede o preço primeiro; digite-o e toque em Adicionar ao carrinho para incluí-lo com esse preço."
      },
      {
        "type": "list",
        "items": [
          "0 é um preço válido (frete grátis, por exemplo); um campo vazio não pode ser adicionado. Digite o preço do mesmo jeito que o modo de imposto da sua loja usa nos demais produtos.",
          "O carrinho guarda uma linha por produto de preço aberto: tocar nele de novo abre essa linha para você mudar o preço.",
          "Desde a v3.3, Cobrar por alterna entre Valor e Porcentagem. Com 5%, a linha equivale a 5% do subtotal dos outros itens (depois dos descontos nos itens, antes das promoções, do desconto no carrinho e do resgate de pontos), arredondado para cima no meio (0,5 sobe) até as casas decimais da moeda, e acompanha o carrinho conforme itens são adicionados, removidos ou recebem desconto. A linha no carrinho aparece como “5% do carrinho”, e a venda registra o valor a que chegou.",
          "Uma linha de preço aberto não recebe desconto no item; para cobrar menos, altere o preço. Descontos no carrinho, resgate de pontos e promoções (a menos que ela esteja excluída delas) continuam valendo para ela.",
          "Ativar Preço aberto também ativa Excluir das promoções, para que uma taxa não receba desconto nem conte para valores mínimos de compra. Desative de novo se um item negociado deve participar das promoções.",
          "Depois de vendida, a linha tem imposto, gera pontos e entra no Resumo como qualquer outra, e uma devolução reembolsa o preço digitado.",
          "Um produto com variantes não pode ter preço aberto. Produtos de preço aberto nunca são oferecidos como brinde ou complemento pago e nunca aparecem na lista de itens da troca."
        ]
      },
      {
        "type": "note",
        "text": "Todos os planos têm esse recurso, e digitar o preço nunca exige a aprovação de um gerente."
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
    "question": "Como usar código de barras no cadastro e na venda?",
    "keywords": [
      "código de barras",
      "escanear",
      "leitor",
      "duplicado",
      "câmera"
    ],
    "content": [
      {
        "type": "p",
        "text": "O código de barras do produto pode ser digitado ou escaneado com a câmera. Cada código deve ser único: se ele já pertencer a outro produto ao salvar, o DingPOS mostra a qual produto ele pertence."
      },
      {
        "type": "p",
        "text": "Na hora da venda, o campo de busca encontra tanto nomes de produtos quanto o início de códigos de barras — digite um código para abrir o produto na hora. Para saber dos planos de suporte a leitores físicos de código de barras, veja “Os leitores de código de barras físicos serão compatíveis?”"
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
    "question": "Como mudar a ordem dos produtos na lista?",
    "keywords": [
      "ordenar",
      "ordem",
      "reordenar",
      "organizar",
      "arrastar",
      "fixar no topo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Em Produtos, toque em Editar ordem e arraste os cartões dos produtos para onde quiser. O caixa e o cadastro de produtos usam essa mesma ordem, então organizar uma vez atualiza os dois."
      },
      {
        "type": "list",
        "items": [
          "Com um catálogo grande, o menu de cada cartão oferece Mover para o início, Mover para o fim e Mover para a posição, e todo cartão mostra a posição atual.",
          "Filtre primeiro por uma categoria para reordenar só dentro dela — os produtos das outras categorias continuam onde estão.",
          "Produtos novos vão para o início; editar os dados de um produto nunca muda a posição dele."
        ]
      },
      {
        "type": "p",
        "text": "Para ordenar por um tempo por nome, preço ou data de criação/atualização, use o menu Ordenar por. Sua ordem manual é mantida, e ao voltar para Ordem manual ela reaparece."
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
    "question": "Como controlar o estoque dos produtos?",
    "keywords": [
      "estoque",
      "controle de estoque",
      "inventário",
      "contagem",
      "estoque baixo"
    ],
    "content": [
      {
        "type": "p",
        "text": "O controle de estoque é ativado produto a produto: ligue-o na tela de edição do produto e informe a quantidade atual. Cada variante de um produto controla o próprio estoque."
      },
      {
        "type": "p",
        "text": "Com o controle ativado, vendas e encomendas baixam o estoque automaticamente; anulações, devoluções e encomendas canceladas devolvem as unidades; e o recebimento de um pedido de compra soma ao estoque. Toda movimentação fica registrada em um histórico completo. Com 10 unidades ou menos, o estoque aparece marcado como baixo, em laranja, na lista de produtos, no caixa e nos detalhes do produto."
      },
      {
        "type": "p",
        "text": "Há duas formas de alterar o número manualmente:"
      },
      {
        "type": "list",
        "items": [
          "Recontagem: edite o número do estoque no formulário do produto para igualá-lo ao que você realmente contou. Ela nunca chega à DRE.",
          "Ajustar estoque (desde a v3.5): nos detalhes do produto, toque em Ajustar estoque, escolha Remover ou Adicionar, a quantidade e um motivo, como Vencido ou estragado, Danificado ou Amostras e brindes. O custo do que for removido entra na Perda de estoque do mês na DRE — veja “Como registrar produtos vencidos, danificados ou dados como amostra?”"
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
    "question": "Como registrar produtos vencidos, danificados ou dados como amostra?",
    "keywords": [
      "ajustar estoque",
      "perda de estoque",
      "baixa de estoque",
      "produto vencido",
      "produto danificado",
      "amostras",
      "brindes",
      "materiais da loja",
      "recontagem",
      "estoque estragado"
    ],
    "content": [
      {
        "type": "p",
        "text": "Use Ajustar estoque. Em um produto com estoque controlado, toque em Ajustar estoque nos detalhes do produto, escolha Remover ou Adicionar, defina a quantidade com + e − (começa em 1; toque no número para digitá-lo), escolha um motivo e, se quiser, acrescente uma observação (até 100 caracteres). A tela calcula o estoque depois da alteração, e a linha abaixo do motivo informa se ela chega à DRE."
      },
      {
        "type": "list",
        "items": [
          "Motivos para remover: Usado na produção, Vencido ou estragado, Danificado, Perdido ou roubado, Uso da equipe, Amostras e brindes, Materiais da loja e Outro. Motivos para adicionar: Feito na loja, Encontrado e Outro. Outro exige uma observação.",
          "Com exceção de Usado na produção, o que você remove entra, pelo custo do momento, na Perda de estoque do mês na DRE. Ela vem depois do lucro bruto e reduz o lucro líquido; o lucro bruto e a margem não mudam. Usado na produção apenas tira o estoque, porque o custo de um material já está no custo do produto feito com ele.",
          "Encontrado tira da Perda de estoque o mesmo valor. Feito na loja e Outro, do lado de adicionar, apenas acrescentam estoque e nunca chegam à DRE.",
          "Um ajuste vale no dia em que você o registra. Não dá para datá-lo para trás, editá-lo nem excluí-lo; para corrigir um erro, registre Encontrado ou um ajuste no sentido contrário.",
          "Um produto sem custo ainda pode ser ajustado, mas a DRE não consegue atribuir um valor a ele, e o mês indica quantos registros ficaram sem custo."
        ]
      },
      {
        "type": "p",
        "text": "Editar o número do estoque no formulário do produto é uma Recontagem: ele passa a ser igual ao que você realmente contou e nunca chega à DRE. A lista de movimentações de estoque em Resumo filtra Ajustes e Recontagens separadamente, e o registro de atividades mostra o motivo e a observação de cada ajuste."
      },
      {
        "type": "note",
        "text": "Ajustar estoque exige o plano Standard ou superior. No Pro, funcionários cuja função requer aprovação para Ajuste manual de estoque precisam do PIN de um gerente ao confirmar."
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
    "question": "Por que o estoque pode ficar negativo?",
    "keywords": [
      "estoque negativo",
      "estoque",
      "sem estoque",
      "bloquear venda",
      "ajustar estoque"
    ],
    "content": [
      {
        "type": "p",
        "text": "É proposital: a venda nunca é bloqueada por falta de estoque. A primeira regra de um caixa em funcionamento é o cliente nunca esperar — um número errado no papel dá para corrigir depois, mas uma venda interrompida está perdida de vez."
      },
      {
        "type": "p",
        "text": "Estoque negativo geralmente significa que uma reposição não foi registrada ou que um item encomendado ainda não chegou (as encomendas baixam o estoque quando são feitas). Registre as reposições recebendo um pedido de compra e o número se recupera sozinho. Corrija uma diferença de contagem editando o número do estoque no formulário do produto (uma recontagem); para mercadoria que estragou, venceu ou foi dada de brinde, registre o motivo com Ajustar estoque. As duas ações ficam guardadas no histórico de movimentações."
      },
      {
        "type": "note",
        "text": "Se o caixa não encontra um produto com estoque 0, veja se Ocultar produtos sem estoque está ativado em Ajustes → Preferências do aparelho: enquanto estiver, este iPad não consegue adicionar produtos sem estoque ao carrinho."
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
    "question": "Como registrar compras e fornecedores?",
    "keywords": [
      "pedido de compra",
      "compras",
      "fornecedor",
      "receber mercadoria",
      "reposição",
      "contas a pagar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Compras, na barra lateral, reúne os fornecedores e os pedidos de compra. O cadastro do fornecedor guarda nome, pessoa de contato, telefone, endereço e a condição de pagamento padrão (pagar no recebimento ou crédito mensal)."
      },
      {
        "type": "steps",
        "items": [
          "Toque em Nova compra, escolha o fornecedor e adicione os produtos, as quantidades e os custos unitários (já preenchidos com o custo atual de cada produto). Também dá para incluir o valor do frete. Para mercadorias que ainda não foram cadastradas como produtos, toque em Novo produto no seletor Adicionar produto; o novo produto entra direto no pedido de compra como um item. Se o fornecedor ainda não estiver cadastrado, toque em Adicionar fornecedor no canto superior esquerdo da lista de fornecedores — o novo fornecedor volta direto para o pedido de compra.",
          "Um rascunho nunca mexe no estoque nem nas contas a pagar — edite ou exclua à vontade.",
          "Quando a mercadoria chegar, toque em Receber estoque: o estoque controlado aumenta, e o pedido de compra recebe seu número e é bloqueado. Por padrão, o recebimento também atualiza o custo de cada produto para este custo unitário; desative Sincronizar custo do produto no pedido de compra para manter os custos como estão. Logo abaixo, Incluir frete no custo (ativado nos novos pedidos de compra) divide o valor do frete entre os itens de acordo com o valor de cada um, e o custo gravado em cada produto inclui a sua parte: farinha 10 × R$ 30, manteiga 1 × R$ 60 e R$ 25 de frete dão à farinha um custo de R$ 32 e à manteiga, R$ 64."
        ]
      },
      {
        "type": "p",
        "text": "A condição de pagamento define o que acontece em seguida: pedidos com pagamento no recebimento são marcados como pagos, enquanto os de crédito mensal ficam em aberto em Contas a pagar, onde você pode quitá-los por fornecedor — um pedido, o mês ou tudo de uma vez."
      },
      {
        "type": "p",
        "text": "Insumos que você não vende, como farinha ou embalagens, podem ser comprados do mesmo jeito: cadastre-os como produtos não vendáveis — veja “Posso cadastrar insumos, como farinha ou embalagens, como produtos?”"
      },
      {
        "type": "note",
        "text": "Compras exige o plano Standard ou superior. Um fornecedor com pedidos recebidos e não pagos não pode ser excluído."
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
    "question": "Posso cadastrar insumos, como farinha ou embalagens, como produtos?",
    "keywords": [
      "não vendável",
      "matéria-prima",
      "insumos",
      "ingredientes",
      "materiais",
      "embalagens",
      "suprimentos",
      "vender no caixa",
      "compras",
      "custo"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pode, sim. No formulário do produto, desative Vender no caixa, abaixo da foto (ele vem ativado por padrão), e o produto passa a ser não vendável: não precisa de preço, mantém custo, código de barras, estoque e variantes, e a lista de produtos mostra “Não vendável” no lugar do preço."
      },
      {
        "type": "list",
        "items": [
          "Um produto não vendável nunca aparece na grade do caixa, nas categorias, na busca nem na leitura de código de barras, e não pode ser brinde, adicional, alvo de uma promoção nem item da troca. Uma categoria que só tem produtos não vendáveis não aparece na barra de categorias do caixa.",
          "Quando a loja tem produtos não vendáveis, aparece um botão de filtro no canto superior direito de Produtos: escolha Todos os produtos, Vendáveis ou Não vendáveis, junto com a busca e as categorias.",
          "Pedidos de compra, recebimento, Sincronizar custo do produto e contas a pagar funcionam exatamente como nos outros produtos, então o custo de compra e o estoque de um material podem ser registrados em Compras.",
          "Vender outros produtos não baixa o estoque dele. Quando você usar uma parte, registre uma remoção com Ajustar estoque nos detalhes do produto: Usado na produção para o que entrou nos produtos, Materiais da loja para coisas como sacolas de papel ou produtos de limpeza.",
          "Você pode voltar atrás a qualquer momento, e o preço e os impostos continuam lá. As vendas e os relatórios já feitos não são afetados."
        ]
      },
      {
        "type": "p",
        "text": "Como o custo dele chega à DRE: as compras não entram lá diretamente. Para um produto feito com ele, coloque o custo nesse produto, e ele é descontado quando esse produto é vendido. Materiais que não entram no custo de nenhum produto são registrados como Materiais da loja quando usados, se o estoque deles for controlado, ou como uma despesa avulsa, se não for. Não registre o mesmo dinheiro das duas formas, ou ele será contado duas vezes."
      },
      {
        "type": "note",
        "text": "Produtos não vendáveis estão em todos os planos; compras, controle de estoque e Ajustar estoque exigem o plano Standard ou superior."
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
    "question": "Qual é a diferença entre Receita e Valor recebido?",
    "keywords": [
      "receita",
      "valor recebido",
      "resumo",
      "lucro bruto",
      "da receita ao lucro bruto",
      "conferir caixa",
      "sinal",
      "venda a prazo",
      "imposto"
    ],
    "content": [
      {
        "type": "p",
        "text": "A Receita conta no dia em que a mercadoria foi entregue, depois de todos os descontos e antes do imposto; o Valor recebido conta no dia em que o dinheiro entrou e é o dinheiro que você recebeu, imposto incluído. Em uma loja que cobra imposto, o Valor recebido fica acima da Receita pelo valor do imposto, até mesmo em vendas pagas no balcão. Os dois são os primeiros blocos da primeira fileira do Resumo, ao lado de Lucro bruto, Vendas e Ticket médio."
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Fileiras de blocos do Resumo com Receita e Valor recebido lado a lado na primeira fileira"
      },
      {
        "type": "h2",
        "text": "Quando Receita e Valor recebido diferem"
      },
      {
        "type": "p",
        "text": "Por exemplo, quando uma loja com preços com imposto incluso vende por NT$1,050 com 5% de imposto e o cliente paga no balcão, a Receita é NT$1,000 e o Valor recebido é NT$1,050. Além do imposto, os dois valores se separam nestas situações:"
      },
      {
        "type": "list",
        "items": [
          "Venda a prazo: a mercadoria sai hoje e entra na Receita de hoje; o dinheiro entra no Valor recebido no dia em que a venda for quitada.",
          "Encomenda: o sinal entra no Valor recebido quando é pago; a Receita é reconhecida por inteiro na data da retirada.",
          "Sinais retidos: quando o cliente cancela uma encomenda e você fica com o sinal, ele já havia sido contado no Valor recebido quando foi pago. O Resumo o mostra à parte como Sinais retidos, e ele nunca entra na Receita.",
          "Anulação de uma venda anterior: o dinheiro devolvido entra no Valor recebido no dia da anulação, então o Valor recebido desse dia pode ficar negativo. A venda anulada em si é contada na data em que foi feita e aparece no subtítulo do bloco Vendas.",
          "Arredondamento do dinheiro: o valor que o arredondamento do dinheiro acrescenta ou tira do total da venda entra no Valor recebido, nunca na Receita."
        ]
      },
      {
        "type": "p",
        "text": "Quando um dos dois valores não é zero, o subtítulo do bloco Valor recebido mostra o Arredondamento do dinheiro ou os Sinais retidos."
      },
      {
        "type": "h2",
        "text": "Imposto e detalhes dos blocos"
      },
      {
        "type": "p",
        "text": "O imposto que separa a Receita do Valor recebido aparece em Da receita ao lucro bruto, que abre no rodapé do bloco Lucro bruto. Ali você vê Receita (com impostos), Imposto e Receita (sem imposto). Lojas na Austrália, no Reino Unido, na Nova Zelândia e em Singapura veem ali o nome do imposto local, como Receita (com GST), GST e Receita (sem GST)."
      },
      {
        "type": "p",
        "text": "Para ver o imposto cobrado para a declaração, abra Relatório de impostos pelo bloco Imposto."
      },
      {
        "type": "p",
        "text": "O ícone ⓘ nos blocos Receita, Valor recebido e Vendas explica essas regras no app, inclusive as vendas anuladas listadas no subtítulo do bloco Vendas."
      },
      {
        "type": "h2",
        "text": "Como conferir o caixa e ler as vendas"
      },
      {
        "type": "p",
        "text": "Para conferir o caixa, compare o Valor recebido com o dinheiro da gaveta e com a maquininha de cartão. O card Formas de pagamento do Resumo mostra uma linha por forma, e as vendas feitas antes de você renomear uma forma são contadas sob o novo nome. Para saber quanto você vendeu em um período, olhe a Receita. As devoluções reduzem a Receita no dia da devolução."
      },
      {
        "type": "note",
        "text": "A Receita antes do imposto chegou na versão 3.5, e os períodos passados foram recalculados do mesmo jeito, então uma loja que cobra imposto vê uma Receita menor do que antes da atualização. É uma correção: as versões anteriores incluíam o imposto na Receita, e as lojas com preços sem imposto chegavam a contar como Receita o imposto de venda que cobravam."
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
    "question": "Quais períodos os relatórios podem mostrar?",
    "keywords": [
      "Resumo",
      "relatórios",
      "período",
      "Esta semana",
      "Este mês",
      "Este ano",
      "Personalizado",
      "período personalizado",
      "Ranking de produtos",
      "Comparar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Escolha Hoje, Ontem, Esta semana, Este mês, Este ano ou Todo o período na barra de período no topo do Resumo, ou toque em Personalizado para definir qualquer data inicial e final. Todos os cards da página seguem o período escolhido. Esta semana segue o primeiro dia da semana configurado no aparelho, Este mês começa no dia 1º, Este ano começa em 1º de janeiro, Todo o período começa na primeira venda da sua loja e cada opção mostra as datas que cobre."
      },
      {
        "type": "shot",
        "name": "report-periods",
        "alt": "Barra de período no topo do Resumo com Personalizado selecionado e o seletor de datas aberto para escolher Início e Fim"
      },
      {
        "type": "h2",
        "text": "Como escolher um período personalizado"
      },
      {
        "type": "p",
        "text": "Use Personalizado quando precisar de um intervalo fora dos períodos de calendário prontos, como um período de declaração de impostos de dois meses ou trimestral."
      },
      {
        "type": "steps",
        "items": [
          "Abra o Resumo e toque em Personalizado na barra de período.",
          "Escolha as datas inicial e final no seletor.",
          "Confirme as datas para atualizar o relatório."
        ]
      },
      {
        "type": "p",
        "text": "O bloco Imposto e o relatório de impostos também seguem o período escolhido, então definir um intervalo de declaração em Personalizado atualiza os dois; veja o artigo relacionado sobre o relatório de impostos. À direita da barra de período, toque em Comparar para ver o período escolhido ao lado do anterior ou do mesmo período do ano passado; veja o artigo relacionado sobre relatórios avançados."
      },
      {
        "type": "h2",
        "text": "Blocos e cards da página"
      },
      {
        "type": "p",
        "text": "Abaixo da barra de período, o Resumo exibe duas fileiras de blocos de números, seguidas de gráficos e cards de resumo em pares, com Agora no final."
      },
      {
        "type": "list",
        "items": [
          "Primeira fileira de blocos: Receita, Valor recebido, Lucro bruto, Vendas e Ticket médio.",
          "Segunda fileira de blocos: Total de descontos, Imposto, Lucro líquido, Produtos sem custo e Clientes atendidos.",
          "Primeiro par: o gráfico de tendência de vendas ao lado de Custo e lucro bruto.",
          "Segundo par: Ranking de produtos ao lado de Participação por categoria.",
          "Terceiro par: Formas de pagamento ao lado do card de promoções.",
          "Card final: Agora."
        ]
      },
      {
        "type": "p",
        "text": "Dois blocos da segunda fileira aparecem só em casos específicos. O bloco Imposto, adicionado na v3.6, aparece apenas para uma loja com impostos ou quando o período escolhido tem vendas feitas com imposto. O bloco Lucro líquido aparece apenas quando o período é Este mês ou cobre exatamente um mês inteiro."
      },
      {
        "type": "note",
        "text": "Se um período não tem vendas, o Resumo mostra apenas a barra de período, uma mensagem e Agora."
      },
      {
        "type": "h2",
        "text": "Como ler os gráficos e o Ranking de produtos"
      },
      {
        "type": "p",
        "text": "O menu no canto superior direito do gráfico de tendência de vendas alterna entre Receita, Vendas, Ticket médio e Clientes atendidos. O gráfico também oferece a alternância entre Tendência e Dia da semana × hora; veja o artigo relacionado sobre relatórios avançados para essa visão. Ao lado, o gráfico Custo e lucro bruto empilha, em uma única barra, o custo dos produtos e o lucro bruto de cada período. Um único dia é exibido por hora, enquanto períodos mais longos agrupam os dados por dias, semanas, meses ou anos, conforme a duração."
      },
      {
        "type": "p",
        "text": "Mantenha o dedo pressionado no gráfico de tendência de vendas, em Custo e lucro bruto ou em Formas de pagamento para mostrar um card de leitura de um intervalo. Com Comparar ativado, o card de leitura do gráfico de tendência de vendas mostra lado a lado o valor deste período e o do período de comparação. Arraste para a esquerda ou para a direita para percorrer os intervalos; deslize para cima ou para baixo no gráfico para rolar a página normalmente."
      },
      {
        "type": "p",
        "text": "O Ranking de produtos lista os 5 primeiros produtos do período escolhido. Toque no card ou em Ver tudo para listar todos os produtos vendidos nesse período, ordenados pela quantidade após as devoluções. Um produto com variantes aparece em uma linha por variante."
      },
      {
        "type": "note",
        "text": "Os períodos de calendário chegaram na versão 2.4; as versões anteriores ofereciam intervalos móveis (Hoje / 7 dias / 30 dias / Todo o período). Se você ainda vê essas opções, atualize o DingPOS pela App Store."
      }
    ],
    "related": [
      "advanced-reports",
      "revenue-vs-cash",
      "profit-not-tracked",
      "tax-report"
    ]
  },
  {
    "slug": "advanced-reports",
    "category": "reports",
    "since": "3.0",
    "question": "O que mostram os relatórios avançados?",
    "keywords": [
      "relatórios avançados",
      "Resumo",
      "Comparar",
      "Comparação de períodos",
      "Dia da semana × hora",
      "Produtos parados",
      "Variações",
      "Participação por categoria",
      "Valor do estoque",
      "taxa de recompra"
    ],
    "content": [
      {
        "type": "p",
        "text": "Os relatórios avançados não são uma tela separada: ficam no Resumo e acompanham o período que você escolhe no topo. Eles acrescentam comparações de períodos, um mapa de calor por dia da semana e hora, Produtos parados, Variações, a taxa de recompra de clientes, Participação por categoria e uma seção Agora para estoque e pontos. Todos os planos incluem todos eles, e eles continuam disponíveis depois que o teste termina."
      },
      {
        "type": "h2",
        "text": "Comparar"
      },
      {
        "type": "p",
        "text": "Comparar fica à direita da barra de período no Resumo e mede o período escolhido contra um período anterior."
      },
      {
        "type": "steps",
        "items": [
          "Abra o Resumo pela barra lateral.",
          "Escolha um período no topo.",
          "Toque em Comparar à direita da barra de período.",
          "Escolha uma opção de comparação no menu."
        ]
      },
      {
        "type": "p",
        "text": "As opções disponíveis dependem do período escolhido:"
      },
      {
        "type": "list",
        "items": [
          "Nenhuma desativa a comparação.",
          "Semana passada compara um único dia com o mesmo dia da semana passada, ou esta semana com a semana passada.",
          "Mês passado compara este mês com o mês passado.",
          "Ano passado compara este ano com o ano passado, ou compara o período escolhido com o mesmo período do ano passado.",
          "Anterior compara um período personalizado com o mesmo número de dias imediatamente antes dele."
        ]
      },
      {
        "type": "p",
        "text": "Quando uma comparação está ativa, o Resumo acrescenta a variação e o valor do período de comparação a todos os blocos, exceto Imposto, Lucro líquido e Produtos sem custo. Receita, Valor recebido, Lucro bruto, Vendas, Ticket médio, Total de descontos e Clientes atendidos mostram, cada um, uma linha de comparação como “▼ 3% em relação a mês passado”."
      },
      {
        "type": "shot",
        "name": "advanced-reports",
        "alt": "Resumo em Esta semana com Comparar definido como Semana passada, mostrando a barra de comparação e a primeira fileira de blocos, com a variação e o valor de comparação de cada bloco logo abaixo",
        "caption": "Toque em qualquer linha de comparação sob um bloco para abrir Comparação de períodos e ver os valores dos dois períodos."
      },
      {
        "type": "p",
        "text": "A variação de Total de descontos é sempre cinza, porque mais desconto não é bom nem ruim em si. Toque em qualquer linha de comparação para abrir Comparação de períodos, que lista os valores dos dois períodos. O gráfico de tendência ganha uma linha mais clara para o período de comparação. Enquanto um período ainda está em andamento, o período de comparação é cortado no mesmo momento."
      },
      {
        "type": "h2",
        "text": "Dia da semana × hora"
      },
      {
        "type": "p",
        "text": "Troque o cabeçalho do gráfico de tendência de Tendência para Dia da semana × hora e veja um mapa de calor de sete dias por 24 horas. Quanto mais escura a célula, mais você vendeu naquela hora. Você pode alternar o mapa de calor entre receita e vendas. Com uma comparação ativada em Comparar, o mapa de calor também mostra em quais horários houve alta e em quais houve queda."
      },
      {
        "type": "h2",
        "text": "Produtos parados"
      },
      {
        "type": "p",
        "text": "Troque o cabeçalho do card de ranking para Produtos parados para listar os produtos do menor para o maior número de vendas. Cada linha mostra o estoque atual do produto e a data da última venda. Produtos que nunca foram vendidos aparecem como Nunca vendido, e um produto com variantes ganha uma linha por variante. Por padrão, só aparecem produtos com estoque."
      },
      {
        "type": "h2",
        "text": "Variações"
      },
      {
        "type": "p",
        "text": "Troque o cabeçalho do card de ranking para Variações e veja os 3 produtos cuja receita mais subiu e os 3 que mais caíram em relação ao período de comparação. Cada linha mostra a receita dos dois períodos e a diferença, e cada variante é comparada com ela mesma."
      },
      {
        "type": "p",
        "text": "Escolha primeiro um período em Comparar. Com Comparar em Nenhuma, ou quando o período é Todo o período, o card pede que você escolha um período de comparação. Toque no card ou em Ver tudo para abrir a lista completa de Variação por produto, dividida em Em alta e Em queda."
      },
      {
        "type": "h2",
        "text": "Taxa de recompra"
      },
      {
        "type": "p",
        "text": "A última linha do bloco Clientes atendidos mostra a taxa de recompra como “Taxa de recompra … · … clientes voltaram”. É a parcela dos clientes cadastrados que compraram no período escolhido e já compraram duas ou mais vezes no total. Com uma comparação ativada em Comparar, uma linha abaixo mostra a variação em pontos percentuais e a taxa do período de comparação."
      },
      {
        "type": "h2",
        "text": "Participação por categoria"
      },
      {
        "type": "p",
        "text": "Participação por categoria lista a receita e a participação de cada categoria, da maior para a menor, pela categoria atual de cada produto. Produtos sem categoria ficam em Sem categoria, e as linhas somam exatamente a Receita."
      },
      {
        "type": "h2",
        "text": "Agora"
      },
      {
        "type": "p",
        "text": "Agora mostra três detalhes de estoque e pontos:"
      },
      {
        "type": "list",
        "items": [
          "Valor do estoque, calculado como estoque atual × custo atual.",
          "Todas as movimentações de estoque no período selecionado.",
          "Os pontos que os clientes têm e ainda não resgataram, com o desconto máximo que eles permitem."
        ]
      },
      {
        "type": "p",
        "text": "O valor do estoque e os pontos não resgatados são posições atuais, então mudar o período no topo não os altera."
      },
      {
        "type": "h2",
        "text": "Planos e permissões"
      },
      {
        "type": "p",
        "text": "Desde a v3.4, todos os relatórios avançados estão disponíveis em todos os planos, inclusive o Lite, e continuam disponíveis depois que o teste termina. Variações também foi adicionado na v3.4. As versões anteriores mostravam os relatórios avançados só no Pro, com um pequeno cadeado nos outros planos; se você ainda vê os cadeados, atualize o DingPOS pela App Store."
      },
      {
        "type": "p",
        "text": "O Lite não controla estoque nem pontos de fidelidade, mas Agora continua mostrando o valor do estoque e os pontos não resgatados que sua loja já tem (por exemplo, do período de teste), ou zero."
      },
      {
        "type": "note",
        "text": "A equipe vê os relatórios avançados com a permissão Resumo; os valores de estoque também exigem a permissão Custo e lucro."
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
    "question": "Como o lucro bruto aparece nos relatórios se eu não informei os custos?",
    "keywords": [
      "custo",
      "lucro bruto",
      "margem",
      "margem bruta",
      "relatórios",
      "custo faltando",
      "lucro não calculável",
      "Produtos sem custo",
      "Da receita ao lucro bruto"
    ],
    "content": [
      {
        "type": "p",
        "text": "O custo é um campo opcional, então produtos sem custo ficam fora do lucro bruto, enquanto a receita deles continua sendo contada por inteiro. O bloco Produtos sem custo no Resumo mostra quantos produtos vendidos ou devolvidos no período não têm custo, como “12 produtos”. Um custo de 0 conta como custo e não aparece na lista; quando todos os produtos têm custo, o bloco mostra “0 produtos · custos completos”."
      },
      {
        "type": "h2",
        "text": "Como encontrar produtos sem custo"
      },
      {
        "type": "p",
        "text": "No Resumo, toque no bloco Produtos sem custo ou em Ver produtos para abrir Produtos sem custo. A lista ordena os produtos da maior para a menor receita que ficou fora do lucro bruto."
      },
      {
        "type": "shot",
        "name": "profit-not-tracked",
        "alt": "Lista Produtos sem custo com os produtos ordenados pela receita que ficou fora do lucro bruto"
      },
      {
        "type": "steps",
        "items": [
          "Toque em uma linha de Produtos sem custo para abrir o produto.",
          "Toque em Editar e informe o custo em Custo (opcional).",
          "Volte a Produtos sem custo para ver a linha marcada como Custo adicionado."
        ]
      },
      {
        "type": "p",
        "text": "Um produto com variantes só aparece como Custo adicionado quando todas as variantes vendidas sem custo passam a ter um: o próprio custo da variante ou o do produto, que ela segue. Desde a v3.6, um pedido de compra também pode ratear o frete no custo do produto que ele grava, quando Incluir frete no custo está ativado."
      },
      {
        "type": "note",
        "text": "Um custo que você informa afeta apenas as vendas futuras. As vendas já feitas não são recalculadas."
      },
      {
        "type": "h2",
        "text": "Como informar custo e imposto"
      },
      {
        "type": "p",
        "text": "No formulário do produto, o campo de custo se chama Custo (opcional) em todas as lojas. Em uma loja com impostos, aparece um ⓘ ao lado de Custo (opcional) para mostrar como o imposto se aplica, conforme a Recuperação de impostos:"
      },
      {
        "type": "list",
        "items": [
          "Recuperação de impostos ativada: informe o custo sem o imposto que você pode recuperar. A nota do ⓘ diz: “Informe o custo sem o imposto creditável, que vai em imposto a recuperar. O imposto que você não pode recuperar faz parte do custo.”",
          "Recuperação de impostos desativada: informe o que você pagou, sem o imposto que você pode recuperar. A nota do ⓘ diz: “O imposto que você pode recuperar não entra no custo; o que você não pode recuperar entra. Se você registra imposto a recuperar, ative Recuperação de impostos em Dados da loja.”"
        ]
      },
      {
        "type": "p",
        "text": "Se a sua loja declara imposto a recuperar, ative Recuperação de impostos em Dados da loja."
      },
      {
        "type": "h2",
        "text": "Como ler o detalhamento do lucro bruto"
      },
      {
        "type": "p",
        "text": "O lucro bruto é a receita depois de todos os descontos (de item e de carrinho, promoções e resgate de pontos) e antes do imposto, menos o custo. A margem é o lucro bruto ÷ a receita dos produtos que têm custo, então os produtos sem custo não puxam a margem para baixo. Uma devolução desfaz, no dia da devolução, o lucro bruto que esses itens tinham gerado."
      },
      {
        "type": "p",
        "text": "Toque no bloco Lucro bruto no Resumo para abrir Da receita ao lucro bruto, que subtrai linha por linha:"
      },
      {
        "type": "list",
        "items": [
          "Receita (com impostos)",
          "Imposto",
          "Receita (sem imposto)",
          "Receita sem custo",
          "Custo dos produtos",
          "Lucro bruto e margem"
        ]
      },
      {
        "type": "p",
        "text": "As linhas somam exatamente o valor do bloco Lucro bruto. Lojas na Austrália, no Reino Unido, na Nova Zelândia e em Singapura veem o nome do imposto local nas linhas de imposto, como Receita (com GST)."
      },
      {
        "type": "note",
        "text": "Esse cálculo do lucro bruto chegou na v3.1. As versões anteriores só descontavam os descontos manuais de item e contavam o imposto incluso como lucro, então, depois de atualizar, períodos com descontos ou imposto incluso mostram um lucro bruto menor. É uma correção, não perda de dados."
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
    "question": "Como ver quanto minha loja realmente lucrou em cada mês?",
    "keywords": [
      "DRE",
      "demonstração de resultado",
      "lucro líquido",
      "lucro bruto",
      "lucro mensal",
      "despesas fixas",
      "lucro operacional",
      "resultado do mês"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abra a DRE, logo abaixo de Resumo na barra lateral, para ver o lucro líquido de cada mês e como ele é calculado. A lista vai do mais recente ao mais antigo, a partir do primeiro mês com atividade; o mês atual aparece como Em andamento, e o cabeçalho de cada ano soma o lucro líquido dos meses já encerrados. A primeira linha, Todas as despesas, abre todas as despesas, de qualquer mês."
      },
      {
        "type": "h2",
        "text": "Detalhamento mensal"
      },
      {
        "type": "steps",
        "items": [
          "Abra a DRE, logo abaixo de Resumo na barra lateral.",
          "Toque em um mês para ver como o lucro líquido dele é calculado."
        ]
      },
      {
        "type": "shot",
        "name": "profit-loss-month",
        "alt": "Página de um mês da DRE com o aviso Em andamento, o lucro líquido e o detalhamento completo, da receita às despesas"
      },
      {
        "type": "p",
        "text": "A página do mês lista todas as linhas, das vendas até o lucro líquido, em ordem. As linhas da receita ao lucro bruto têm os mesmos nomes e valores de Da receita ao lucro bruto, no Resumo."
      },
      {
        "type": "list",
        "items": [
          "Receita (com impostos), Imposto e Receita (sem imposto): a receita com imposto incluído, o valor do imposto e a receita depois de todos os descontos e antes do imposto, contada no dia em que o produto foi entregue. Lojas na Austrália, no Reino Unido, na Nova Zelândia e em Singapura veem o nome do imposto local.",
          "Receita sem custo: subtraída antes do custo dos produtos, mostrada apenas quando não é zero.",
          "Custo dos produtos: o custo do que foi vendido, a partir dos custos cadastrados nos seus produtos.",
          "Lucro bruto: mostrado com a margem.",
          "Receita sem custo: somada de volta depois do lucro bruto, quando não é zero.",
          "Perda de estoque: mostrada apenas quando o mês tem uma; o custo do que Ajustar estoque retirou por vencimento, dano, doação e motivos parecidos, mais as devoluções descartadas. Ela entra depois do lucro bruto. Veja “Como registrar produtos vencidos, danificados ou dados como amostra?” O mês também tem uma seção Perda de estoque que soma tudo por motivo.",
          "Taxas de processamento (est.): as taxas estimadas a partir das alíquotas das suas formas de pagamento.",
          "Sinais retidos: mostrados apenas quando não são zero; sinais que você reteve quando uma encomenda foi cancelada.",
          "Arredondamento do dinheiro: mostrado apenas quando não é zero; o que o arredondamento do dinheiro para as moedas em uso acrescentou ou tirou dos totais das vendas.",
          "Despesas fixas e Despesas avulsas: o que você registrou para aquele mês — veja “Como registrar aluguel, folha de pagamento e outras despesas?”",
          "Lucro líquido: calculado como receita (sem imposto) − custo dos produtos − perda de estoque − taxas de processamento + sinais retidos + arredondamento do dinheiro − despesas fixas − despesas avulsas."
        ]
      },
      {
        "type": "h2",
        "text": "Meses em andamento"
      },
      {
        "type": "p",
        "text": "Enquanto um mês ainda está em andamento, a DRE já deduz as despesas fixas do mês inteiro. Por exemplo, em 5/10, se a receita (sem imposto) até agora é 20.000, o custo dos produtos é 10.000 e as despesas fixas são 65.700, o lucro líquido é −55.700 e aparece marcado como Em andamento · as despesas do mês inteiro são deduzidas."
      },
      {
        "type": "p",
        "text": "Como as despesas do mês inteiro já estão contadas, o lucro líquido do mês atual nunca aparece em vermelho na lista de meses, na página do mês nem no bloco Lucro líquido do Resumo. Um mês encerrado que termina em prejuízo mostra o lucro líquido na cor de alerta."
      },
      {
        "type": "h2",
        "text": "Gráficos"
      },
      {
        "type": "p",
        "text": "Até três gráficos vêm depois do detalhamento: o lucro líquido mês a mês, a participação de cada despesa fixa e a tendência das despesas fixas. Os dois gráficos de tendência cobrem no máximo os 12 meses até o mês que você abriu e só aparecem quando há pelo menos dois meses para comparar, contados a partir do mês da primeira venda ou despesa. O gráfico de participação precisa de uma despesa fixa naquele mês; enquanto não houver, essa seção mostra Adicionar despesa fixa."
      },
      {
        "type": "h2",
        "text": "Alternar entre o Resumo e a DRE"
      },
      {
        "type": "p",
        "text": "O Resumo e a DRE levam um ao outro. Quando o período do Resumo é Este mês ou exatamente um mês inteiro, a segunda fileira de blocos ganha um bloco Lucro líquido, marcado com Em andamento · as despesas do mês inteiro são deduzidas enquanto o mês está em curso. Toque nesse bloco para ver o detalhamento daquele mês, do lucro bruto ao lucro líquido. Para qualquer outro período, toque em Ver DRE mensal na última linha de Da receita ao lucro bruto."
      },
      {
        "type": "p",
        "text": "No sentido contrário, Ver o relatório de outubro, abaixo do título de um mês na DRE, abre o Resumo naquele mês (período personalizado de 1/10 a 31/10); para o mês em andamento, abre Este mês."
      },
      {
        "type": "note",
        "text": "O lucro líquido é o lucro operacional antes do imposto de renda, calculado com o que o DingPOS registrou, e não uma declaração de impostos. Se houver produtos vendidos sem custo, o mês ainda mostra um lucro líquido, marcado com Não inclui o custo de N produtos; toque nele para ver quais."
      },
      {
        "type": "note",
        "text": "A DRE está em todos os planos. Com contas de funcionários, abri-la exige a permissão DRE e despesas, que Gerentes e Funcionários só têm com aprovação por padrão, porque ela mostra custos de produtos e folha de pagamento."
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
    "question": "Como registrar aluguel, folha de pagamento e outras despesas?",
    "keywords": [
      "despesas",
      "aluguel",
      "folha de pagamento",
      "água e luz",
      "despesas fixas",
      "despesas avulsas",
      "Todas as despesas",
      "diluição de despesa",
      "custos fixos",
      "DRE"
    ],
    "content": [
      {
        "type": "p",
        "text": "Na DRE, toque em Adicionar despesa e escolha Adicionar despesa fixa ou Adicionar despesa avulsa para registrar aluguel, folha de pagamento, contas de água e luz e outros custos de operação. Toda despesa conta no mês a que pertence, e não no mês em que você a pagou, e o lucro líquido de cada mês é atualizado. As despesas fixas se repetem todo mês, com alterações de valor opcionais, e as avulsas contam em um único mês ou são diluídas em vários meses."
      },
      {
        "type": "h2",
        "text": "Despesas fixas"
      },
      {
        "type": "p",
        "text": "Uma despesa fixa é um custo recorrente que você paga todo mês, como aluguel, contas de água e luz ou folha de pagamento."
      },
      {
        "type": "steps",
        "items": [
          "Abra a DRE.",
          "Toque em Adicionar despesa.",
          "Escolha Adicionar despesa fixa.",
          "Informe o nome, o valor mensal e o mês de início. Escolha um mês anterior para incluir meses passados.",
          "Toque em ✓ para salvar."
        ]
      },
      {
        "type": "shot",
        "name": "expense-form",
        "alt": "Formulário de despesa fixa com o nome, o valor mensal, o mês de início e as alterações de valor"
      },
      {
        "type": "p",
        "text": "Quando o valor mudar, abra a despesa e toque em Alterar valor. Escolha o mês em que a mudança começa e depois A partir deste mês, para uma mudança contínua, como um aumento de aluguel, ou Só este mês, para uma diferença de um único mês, como a conta de luz do mês. Todas as alterações ficam listadas no formulário, e você pode abrir qualquer uma para editar ou remover."
      },
      {
        "type": "p",
        "text": "Quando você deixar de pagar uma despesa fixa, defina o Último mês contado. Esse mês e os anteriores continuam contando na DRE, e os meses seguintes deixam de incluí-la."
      },
      {
        "type": "h2",
        "text": "Alterações programadas em Todas as despesas"
      },
      {
        "type": "p",
        "text": "Em Todas as despesas, cada linha de despesa fixa mostra o que está programado. A linha junta o mês de início com a próxima alteração de valor programada e o último mês contado. Por exemplo, uma linha pode mostrar Desde janeiro de 2026 · $420/mês a partir de dezembro de 2026 · Contada até março de 2027."
      },
      {
        "type": "p",
        "text": "O valor à direita continua sendo o valor mensal de hoje, não o da alteração futura. Uma alteração definida como Só este mês não aparece na linha."
      },
      {
        "type": "h2",
        "text": "Despesas avulsas"
      },
      {
        "type": "p",
        "text": "Uma despesa avulsa é um custo pago uma única vez, como uma reforma, equipamentos, um seguro pago adiantado ou uma conta isolada."
      },
      {
        "type": "steps",
        "items": [
          "Abra a DRE.",
          "Toque em Adicionar despesa.",
          "Escolha Adicionar despesa avulsa.",
          "Informe o valor e a data.",
          "Defina o Mês contado para um único mês ou ative Diluir em vários meses.",
          "Toque em ✓ para salvar."
        ]
      },
      {
        "type": "p",
        "text": "Sem diluir, você ainda pode escolher o Mês contado para que o custo conte no mês a que pertence. Por exemplo, uma conta de outubro que chega em novembro pode contar em outubro, com a data real mantida."
      },
      {
        "type": "p",
        "text": "Para uma reforma, equipamentos ou um seguro pago adiantado, ative Diluir em vários meses, escolha de 2 a 120 meses e selecione o Primeiro mês contado. O formulário mostra uma prévia de quanto conta em cada mês e quais meses ela cobre."
      },
      {
        "type": "p",
        "text": "Se uma diluição terminar antes, como quando uma apólice de seguro é cancelada, abra a despesa e use Encerrar diluição antes. O valor que sobrar conta no mês que você escolher."
      },
      {
        "type": "h2",
        "text": "Imposto a recuperar em despesas"
      },
      {
        "type": "p",
        "text": "Com a Recuperação de impostos ativada, você pode registrar o número da nota fiscal e o imposto creditável em uma despesa avulsa e registrar cada nota fiscal de uma despesa fixa em Notas fiscais, com Registrar nota fiscal. O valor contado na DRE continua sendo o que a loja assume, e o artigo relacionado sobre imposto a recuperar explica como o imposto creditável funciona."
      },
      {
        "type": "note",
        "text": "Informe o que realmente fica por conta da loja, sem incluir impostos que você possa recuperar. O estoque que você vai vender e os materiais com que você o fabrica passam por Compras, porque entram no custo dos produtos quando são vendidos. Materiais de consumo com estoque controlado são registrados com Ajustar estoque quando usados, com o motivo Materiais da loja, e não como despesa. Depósitos caução, o principal de empréstimos e retiradas do proprietário não são despesas. As alterações são salvas juntas quando você toca em ✓, e uma alteração que alcança um mês já encerrado antes avisa de quais meses o lucro líquido vai mudar."
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
    "question": "Como exportar o relatório de impostos para o meu contador?",
    "keywords": [
      "exportar relatório de impostos",
      "Relatório de impostos",
      "Exportar",
      "Planilha do Excel",
      "CSV",
      "Relatório em PDF",
      "Resumo de impostos",
      "Detalhes do imposto a recuperar",
      "contador"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abra o Relatório de impostos, toque em Exportar no canto superior direito e escolha CSV, Planilha do Excel (XLSX) ou Relatório em PDF. O arquivo abre em uma prévia em tela cheia, onde você toca no botão de compartilhar para salvá-lo ou enviá-lo ao seu contador. Todos os formatos trazem os mesmos valores mostrados na tela."
      },
      {
        "type": "h2",
        "text": "Como exportar"
      },
      {
        "type": "steps",
        "items": [
          "Abra o Resumo e escolha o período, como um período personalizado de 1/11 a 31/12 para uma declaração bimestral, ou um trimestre.",
          "Toque no bloco Imposto para abrir o Relatório de impostos. A exportação cobre exatamente esse período.",
          "Toque em Exportar no canto superior direito do Relatório de impostos. Um menu lista os formatos, com o último exportado neste iPad marcado.",
          "Escolha um formato, como Planilha do Excel (XLSX), para abrir uma prévia em tela cheia. Os arquivos CSV aparecem como tabela, e a planilha do Excel permite alternar entre as abas, por exemplo conferindo primeiro a aba Summary.",
          "Toque no botão de compartilhar no canto superior direito da prévia para salvar o arquivo ou enviá-lo ao seu contador. Ao fechar a prévia, você volta ao Relatório de impostos."
        ]
      },
      {
        "type": "shot",
        "name": "tax-export",
        "alt": "Relatório de impostos com o menu Exportar aberto, listando os formatos de arquivo"
      },
      {
        "type": "p",
        "text": "Se a exportação falhar, o app mostra Não foi possível exportar o arquivo e Tente exportar de novo. Nada é gravado; exporte outra vez."
      },
      {
        "type": "h2",
        "text": "Formatos de exportação"
      },
      {
        "type": "list",
        "items": [
          "Resumo de impostos (CSV): uma linha por linha do relatório (cada imposto e alíquota, alíquota zero e sem imposto), com vendas, devoluções e líquido, antes do imposto e imposto.",
          "Todos os documentos (CSV): uma linha por documento em cada imposto, com data e hora, número do recibo, tipo de documento (venda, devolução ou o lançamento de reversão de uma anulação), nome do cliente, valores e formas de pagamento. Uma anulação acrescenta uma linha de reversão na data da anulação.",
          "Resumo diário (CSV): o resumo por dia e, em seguida, uma segunda tabela com os pagamentos por dia e por forma.",
          "Detalhes do imposto a recuperar (CSV): aparece só quando o relatório tem um card de imposto a recuperar. Uma linha por linha de imposto a recuperar de cada pedido de compra e despesa, com fornecedor, ID fiscal do fornecedor e número da nota fiscal.",
          "Planilha do Excel (XLSX): as abas Summary, Documents e Daily, equivalentes aos três CSVs de vendas, mais Purchases quando o relatório mostra imposto a recuperar. Os valores são células numéricas, e cada coluna se ajusta ao conteúdo para que nada abra cortado.",
          "Relatório em PDF: um relatório em A4, no idioma do app, com nome da loja, período, modo de imposto, moeda e as seções do relatório. Lojas na Austrália, Nova Zelândia, Singapura e Reino Unido veem Campos da declaração primeiro; os cards de imposto a recuperar vêm em seguida, quando aparecem. Na prévia, assine ou anote com Marcação para compartilhar o arquivo marcado; exportar o mesmo período de novo grava uma cópia limpa."
        ]
      },
      {
        "type": "h2",
        "text": "Formatação para programas de contabilidade"
      },
      {
        "type": "p",
        "text": "Os arquivos CSV são UTF-8, separados por vírgula, com nomes de coluna fixos em inglês em qualquer idioma do app, para que programas de contabilidade consigam lê-los. Os valores usam as casas decimais da moeda e um sinal de menos, sem símbolo nem separador de milhar (como 80.97, -40.00 ou 1000 para uma loja em iene). As datas têm o formato 2026-11-03."
      },
      {
        "type": "p",
        "text": "Células de texto que começam com =, +, - ou @ (como um cliente chamado =1+1) recebem um ' no início, para que as planilhas mostrem texto em vez de executar uma fórmula. Os valores nunca recebem esse caractere."
      },
      {
        "type": "p",
        "text": "Os nomes dos arquivos trazem o período, como tax-report-summary_2026-11-01_2026-11-30.csv, tax-report_2026-11-01_2026-11-30.xlsx e tax-report_2026-11-01_2026-11-30.pdf, para que arquivos de períodos diferentes nunca se sobrescrevam."
      },
      {
        "type": "h2",
        "text": "Permissões e privacidade"
      },
      {
        "type": "p",
        "text": "Todos os planos podem exportar, inclusive o Lite. Funcionários precisam da permissão Resumo, a mesma do Relatório de impostos."
      },
      {
        "type": "p",
        "text": "Os arquivos com imposto a recuperar pedem antes as aprovações que os cards exigem: Custo e lucro para pedidos de compra e DRE e despesas para despesas. Isso vale para Detalhes do imposto a recuperar (CSV), além da Planilha do Excel (XLSX) e do Relatório em PDF quando os cards de imposto a recuperar aparecem. Cancelar não grava nada; os três CSVs de vendas nunca pedem aprovação."
      },
      {
        "type": "note",
        "text": "Todos os documentos (CSV) contém nomes de clientes, e os arquivos de imposto a recuperar contêm nomes de fornecedores e IDs fiscais. Compartilhe-os apenas com quem deve vê-los."
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
    "question": "Como registrar o imposto a recuperar (VAT ou GST das compras)?",
    "keywords": [
      "imposto a recuperar",
      "VAT",
      "GST",
      "Recuperação de impostos",
      "Imposto a recuperar em pedidos de compra",
      "Imposto a recuperar em despesas",
      "ID fiscal do fornecedor",
      "pedidos de compra",
      "relatório de impostos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ative Recuperação de impostos em Ajustes → Dados da loja para registrar o imposto creditável das notas fiscais de fornecedores em pedidos de compra e despesas. Os dois formulários ganham então uma seção Imposto a recuperar, onde você copia o imposto creditável de cada nota. O relatório de impostos o lista em dois cards, Imposto a recuperar em pedidos de compra e Imposto a recuperar em despesas."
      },
      {
        "type": "h2",
        "text": "Como ativar a Recuperação de impostos"
      },
      {
        "type": "steps",
        "items": [
          "Abra Ajustes → Dados da loja e encontre a seção Imposto.",
          "Em Cobrar imposto, ative Recuperação de impostos."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-toggle",
        "alt": "Seção Imposto de Dados da loja com Recuperação de impostos ativada e a dica logo abaixo"
      },
      {
        "type": "p",
        "text": "Recuperação de impostos só aparece quando a loja tem pelo menos um imposto e começa desativada em lojas novas e depois de atualizar. Ao mudar a chave, a alteração é salva na hora e registrada em Ajustes de imposto no Registro de atividades. Com ela ativada, informe preços de compra e custos de produtos sem o imposto creditável; o imposto que não pode ser recuperado continua no custo."
      },
      {
        "type": "note",
        "text": "Todos os planos têm a chave Recuperação de impostos, mas Compras exige o Standard ou superior. Desativá-la oculta os campos em novos registros; os registros existentes mantêm o imposto a recuperar e o valor a pagar, e os relatórios de impostos passados não mudam."
      },
      {
        "type": "h2",
        "text": "Pedidos de compra"
      },
      {
        "type": "steps",
        "items": [
          "Abra Compras e toque em Nova compra.",
          "Informe os preços unitários sem o imposto creditável e role além de Encargos até Imposto a recuperar.",
          "Confira a Data da nota fiscal, que por padrão é a data do pedido, e preencha, se quiser, o Número da nota fiscal e o ID fiscal do fornecedor.",
          "Escolha um imposto da loja em Alíquota ou toque em Outra alíquota… para digitar até 3 casas decimais, como 9,975%.",
          "Confira Sem imposto, que começa com o total do pedido sem imposto, e copie da nota o Imposto creditável.",
          "Toque em Adicionar alíquota para incluir outras alíquotas."
        ]
      },
      {
        "type": "shot",
        "name": "input-tax-po",
        "alt": "Pedido de compra mostrando a seção Imposto a recuperar com os campos da nota fiscal, uma linha de alíquota e os totais"
      },
      {
        "type": "p",
        "text": "O Imposto creditável começa em branco; o DingPOS nunca o calcula a partir da alíquota e aceita o arredondamento da nota. Por exemplo, farinha 10 × $300 mais $100 de frete, na nota AB-12345678 de 30 de junho de 2026, com uma linha de 5% com Sem imposto de $3,100 e Imposto creditável de $155, dá Total sem imposto de $3,100, Imposto a recuperar de $155 e Valor a pagar de $3,255, que aparece na lista, nos detalhes do pedido e em Contas a pagar. O ID fiscal de um fornecedor preenche os novos pedidos; os pedidos salvos mantêm o seu."
      },
      {
        "type": "p",
        "text": "Se a nota chegar atrasada, abra o pedido recebido e toque em Registrar imposto a recuperar no card Imposto a recuperar, ou em Editar para alterá-lo. Só o Valor a pagar muda; o estoque, o custo dos produtos e o status de pago ou a pagar continuam iguais. Pedidos anulados mantêm o Imposto a recuperar somente para leitura, e os pedidos salvos antes da atualização não são preenchidos retroativamente."
      },
      {
        "type": "h2",
        "text": "Despesas"
      },
      {
        "type": "p",
        "text": "Em DRE → Despesas avulsas, o formulário acrescenta Número da nota fiscal e linhas de imposto a recuperar abaixo do valor. Mantenha o valor sem o imposto creditável e copie apenas o imposto creditável. Em uma nota de papelaria de $1,100 com $100 creditáveis, informe $1,000 e uma linha de 10% com $1,000 e $100; Com imposto mostra $1,100 e a DRE conta $1,000. O imposto a recuperar entra por inteiro na data da despesa, sem seguir o Mês contado nem a diluição."
      },
      {
        "type": "p",
        "text": "Em DRE → Despesas fixas, abra uma despesa salva, como aluguel ou água e luz, e toque em Registrar nota fiscal, em Notas fiscais, conforme cada nota chegar, com a data da nota, o número da nota (opcional) e pelo menos uma linha de alíquota. Se o Aluguel é $30,000 por mês e as notas de julho e agosto trazem, cada uma, uma linha de 5% com $30,000 e $1,500, o relatório de julho a setembro tem $3,000 de imposto a recuperar, enquanto a DRE continua contando $30,000 em cada mês."
      },
      {
        "type": "p",
        "text": "Salvar uma alteração de imposto a recuperar em um mês passado mostra Salvar a alteração? e avisa que o relatório de impostos daquele mês muda, caso você já tenha declarado. Edições do mês atual e rascunhos são salvos sem perguntar."
      },
      {
        "type": "note",
        "text": "O DingPOS não calcula VAT de importação, reverse charge nem crédito parcial. Copie da nota o imposto creditável e coloque qualquer imposto que você não possa recuperar no valor Sem imposto."
      },
      {
        "type": "h2",
        "text": "Relatório de impostos"
      },
      {
        "type": "p",
        "text": "Dois cards vêm depois dos cards de vendas: Imposto a recuperar em pedidos de compra e Imposto a recuperar em despesas. Cada um lista uma linha por alíquota, uma linha Sem imposto a recuperar e os totais de Sem imposto, Imposto creditável e Com imposto. Os totais incluem compras sem imposto a recuperar, embora algumas declarações considerem apenas as linhas com imposto a recuperar."
      },
      {
        "type": "list",
        "items": [
          "Pedidos de compra contam na Data da nota fiscal, ou na data do pedido se ela estiver em branco.",
          "Pedidos de compra anulados contam como valor negativo na data da anulação.",
          "Despesas avulsas contam por inteiro na data da despesa.",
          "As notas fiscais de despesas fixas contam na data da nota."
        ]
      },
      {
        "type": "p",
        "text": "Imposto a recuperar em pedidos de compra exige a permissão Custo e lucro, e Imposto a recuperar em despesas exige DRE e despesas; funcionários sem a permissão veem Peça a um gerente para aprovar abaixo do título do card. O bloco Imposto continua mostrando apenas o imposto cobrado nas vendas, nunca descontado do imposto a recuperar, porque o método simplificado do Japão e a taxa fixa do Reino Unido funcionam de outro jeito. Lojas na Austrália, Nova Zelândia, Singapura e Reino Unido também veem esses valores em Campos da declaração."
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
    "question": "Onde encontro o relatório de impostos e como leio os números?",
    "keywords": [
      "relatório de impostos",
      "Relatório de impostos",
      "VAT",
      "GST",
      "imposto sobre vendas",
      "Resumo",
      "Imposto",
      "Vendas e impostos por alíquota",
      "Por forma de pagamento"
    ],
    "content": [
      {
        "type": "p",
        "text": "Abra o Resumo e toque no bloco Imposto para ver o Relatório de impostos, que lista vendas e impostos por alíquota no período mostrado no Resumo. Copie esses valores para uma declaração de VAT, GST ou imposto sobre vendas, ou envie-os a um contador. Mudanças posteriores nos impostos nunca alteram os valores já gravados nos documentos."
      },
      {
        "type": "h2",
        "text": "Como abrir o relatório de impostos"
      },
      {
        "type": "steps",
        "items": [
          "Abra o Resumo e escolha o período, como Este mês ou um período personalizado.",
          "Encontre o bloco Imposto na segunda fileira, depois de Total de descontos.",
          "Toque no bloco Imposto ou em Relatório de impostos ›."
        ]
      },
      {
        "type": "shot",
        "name": "dashboard-tiles",
        "alt": "Resumo em Este mês com o bloco Imposto e o rodapé Relatório de impostos ›"
      },
      {
        "type": "p",
        "text": "Esse bloco é a única entrada. O subtítulo dele nomeia os impostos cobrados no período, do maior valor para o menor: dois pelo nome e, com três ou mais, algo como 3 impostos, incl. PST 7%. O cabeçalho mostra o período do Resumo (Este mês · 1/11 – 30/11), sem seletor de período nem atalho para o mês passado, porque os períodos de declaração variam (em Taiwan, dois meses; na Austrália, um trimestre; no Japão, um ano)."
      },
      {
        "type": "p",
        "text": "Lojas sem imposto e sem vendas com imposto no período não veem o bloco Imposto; períodos sem documentos mostram o estado vazio do Resumo. Impostos excluídos mantêm o bloco nos períodos que têm vendas feitas com eles."
      },
      {
        "type": "note",
        "text": "Todos os planos, inclusive o Lite e o teste, têm o bloco, o relatório e todas as exportações. Funcionários precisam da permissão Resumo; as funções que exigem aprovação veem o aviso de aprovação até que um gerente aprove."
      },
      {
        "type": "h2",
        "text": "Como ler o relatório"
      },
      {
        "type": "p",
        "text": "Lojas na Austrália, Nova Zelândia, Singapura e Reino Unido veem primeiro os Campos da declaração."
      },
      {
        "type": "p",
        "text": "Vendas e impostos por alíquota lista uma linha por alíquota: a mais alta primeiro, depois a linha de alíquota zero (0%) e, por último, Sem imposto (produtos sem imposto). As colunas são Vendas, Devoluções e anulações e Líquido, cada uma com Antes do imposto e Imposto; as linhas de alíquota zero e Sem imposto não têm linha de imposto. Todo imposto da loja ganha uma linha, mesmo sem vendas. Renomear mantém uma só linha; mudar a alíquota adiciona uma."
      },
      {
        "type": "p",
        "text": "Totais mostra Vendas antes do imposto, Imposto e Vendas com imposto. Com dois ou mais impostos, uma nota avisa que uma venda pode ter mais de um imposto, então as vendas das linhas não podem ser somadas; Vendas antes do imposto conta cada venda uma só vez. Em um trimestre no Reino Unido, VAT 20% poderia mostrar Antes do imposto £1,000 e Imposto £200, alíquota zero 0% £300 e Sem imposto £50: Totais dá Vendas antes do imposto £1,350, Imposto £200 e Vendas com imposto £1,550."
      },
      {
        "type": "shot",
        "name": "tax-report",
        "alt": "Relatório de impostos com as linhas de Vendas e impostos por alíquota e os Totais logo abaixo"
      },
      {
        "type": "list",
        "items": [
          "Por forma de pagamento lista os pagamentos desses documentos até o fim do período, os valores não pagos como Contas a receber e o arredondamento do dinheiro em uma linha Inclui arredondamento do dinheiro … dentro da linha de dinheiro.",
          "Não contam como vendas aparece só para sinais retidos: lista Sinais retidos com um subtítulo para você confirmar a declaração com um contador, e não soma nem às vendas nem ao imposto.",
          "Lojas com Recuperação de impostos ativada, ou com imposto a recuperar registrado no período, também veem Imposto a recuperar em pedidos de compra e Imposto a recuperar em despesas."
        ]
      },
      {
        "type": "h2",
        "text": "Em que dia cada documento é contado"
      },
      {
        "type": "p",
        "text": "Toque em ⓘ ao lado de Vendas e impostos por alíquota:"
      },
      {
        "type": "list",
        "items": [
          "Uma anulação conta no período em que foi feita, com valor negativo, então um período já declarado nunca muda. Já o Resumo a tira do período da venda.",
          "Uma devolução conta na própria data. Em uma troca, os itens novos contam como vendas e os itens devolvidos como devoluções.",
          "Uma encomenda conta no dia da retirada; uma venda a prazo, no dia da venda."
        ]
      },
      {
        "type": "p",
        "text": "Uma venda de 30/10 anulada em 2/11 continua em Vendas de outubro e aparece como valor negativo em Devoluções e anulações de novembro. Quitar uma venda a prazo depois não a muda de lugar."
      },
      {
        "type": "h2",
        "text": "Imposto cobrado e totais do Resumo"
      },
      {
        "type": "p",
        "text": "O bloco Imposto é igual ao total de Imposto do Relatório de impostos. Ele só difere da linha Imposto de Da receita ao lucro bruto, no Resumo, em anulações entre períodos, porque o Resumo tira uma venda anulada do período original."
      },
      {
        "type": "note",
        "text": "O Relatório de impostos mostra o imposto cobrado nas vendas, nunca o imposto a pagar (imposto sobre vendas menos imposto a recuperar), porque nem todo país o calcula assim, como o método simplificado do Japão ou o Flat Rate Scheme do Reino Unido."
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
    "question": "Quais valores vão nos campos da declaração de BAS, GST ou VAT?",
    "keywords": [
      "Campos da declaração",
      "Relatório de impostos",
      "Resumo",
      "BAS",
      "Simpler BAS",
      "GST101A",
      "GST F5",
      "VAT Return",
      "Recuperação de impostos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Para lojas na Austrália, na Nova Zelândia, em Singapura ou no Reino Unido, o Relatório de impostos abre com Campos da declaração, que mostra cada campo e o valor do mesmo relatório. Ele cobre o BAS da Austrália · Simpler BAS, o GST101A da Nova Zelândia, o GST F5 de Singapura e o VAT Return do Reino Unido, em todos os planos."
      },
      {
        "type": "h2",
        "text": "Como abrir Campos da declaração"
      },
      {
        "type": "steps",
        "items": [
          "Abra o Resumo.",
          "Toque no bloco Imposto para abrir o Relatório de impostos."
        ]
      },
      {
        "type": "p",
        "text": "Campos da declaração é o primeiro card, acima de Vendas e impostos por alíquota, e o subtítulo dele nomeia a declaração. Todos os valores vêm do mesmo relatório, centavos incluídos, e nada é recalculado. O Relatório em PDF exportado abre com o mesmo card. Lojas configuradas antes de o app registrar o país são identificadas pela moeda (AUD, NZD, SGD ou GBP); as demais lojas não têm o card Campos da declaração."
      },
      {
        "type": "shot",
        "name": "return-boxes",
        "alt": "Card Campos da declaração no topo do Relatório de impostos mostrando os campos 1, 4, 6 e 7 do VAT Return do Reino Unido"
      },
      {
        "type": "h2",
        "text": "BAS da Austrália · Simpler BAS"
      },
      {
        "type": "list",
        "items": [
          "G1 Total sales: vendas com GST, incluindo vendas isentas de GST e sem imposto; responda Sim a “O valor mostrado em G1 inclui GST?”",
          "1A GST on sales: imposto sobre vendas",
          "1B GST on purchases: imposto a recuperar em pedidos de compra e despesas"
        ]
      },
      {
        "type": "p",
        "text": "A ATO pede valores em dólares inteiros: omita os centavos no BAS, sem nunca arredondar para cima."
      },
      {
        "type": "h2",
        "text": "GST101A da Nova Zelândia"
      },
      {
        "type": "list",
        "items": [
          "Campo 5 Total sales and income: vendas com GST, incluindo vendas com alíquota zero e sem contar as vendas sem imposto",
          "Campo 6 Zero-rated supplies: vendas com alíquota zero",
          "Campo 11 Total purchases and expenses: pedidos de compra e despesas com GST, com o GST incluído; ficam de fora as compras sem imposto a recuperar ou com alíquota zero"
        ]
      },
      {
        "type": "p",
        "text": "O myIR calcula o campo 8 e o campo 12 como 3/23, o que pode diferir em alguns centavos do imposto do relatório."
      },
      {
        "type": "h2",
        "text": "GST F5 de Singapura"
      },
      {
        "type": "list",
        "items": [
          "Campo 1 Total value of standard-rated supplies: vendas tributadas antes do imposto",
          "Campo 2 Total value of zero-rated supplies: vendas com alíquota zero; só exportações e serviços internacionais podem ter alíquota zero",
          "Campo 5 Total value of taxable purchases: pedidos de compra e despesas com GST ou alíquota zero, antes do imposto; ficam de fora as compras sem imposto a recuperar",
          "Campo 6 Output tax due: imposto sobre vendas",
          "Campo 7 Input tax and refunds claimed: imposto a recuperar em pedidos de compra e despesas"
        ]
      },
      {
        "type": "h2",
        "text": "VAT Return do Reino Unido"
      },
      {
        "type": "list",
        "items": [
          "Campo 1 VAT due on sales and other outputs: imposto sobre vendas",
          "Campo 4 VAT reclaimed on purchases and other inputs: imposto a recuperar em pedidos de compra e despesas",
          "Campo 6 Total value of sales and all other outputs excluding any VAT: vendas antes do imposto, incluindo vendas com alíquota zero, isentas e sem imposto",
          "Campo 7 Total value of purchases and all other inputs excluding any VAT: pedidos de compra e despesas antes do imposto, incluindo compras sem imposto a recuperar; subtraia os salários e os impostos sobre imóveis comerciais que você tiver registrado"
        ]
      },
      {
        "type": "p",
        "text": "Para a contabilidade padrão de VAT; no Flat Rate Scheme, o campo 1 e o campo 6 são calculados de outra forma. No Reino Unido, o VAT de um sinal é devido quando você o recebe; o DingPOS inclui a encomenda na declaração quando ela é retirada."
      },
      {
        "type": "p",
        "text": "Exemplo de um trimestre no Reino Unido: £1,000 de vendas com VAT 20% antes do imposto (imposto de £200), £300 com alíquota zero, £50 sem imposto, pedidos de compra de £400 mais £80 de VAT e despesas de £250 sem imposto a recuperar dão: campo 1 £200, campo 4 £80, campo 6 £1,350 e campo 7 £650."
      },
      {
        "type": "h2",
        "text": "Campos em branco e acesso da equipe"
      },
      {
        "type": "p",
        "text": "Os campos que a autoridade fiscal calcula e os valores devidos ficam de fora (campos 3 e 5 do Reino Unido; campo 3 de Singapura, vendas isentas). Na Nova Zelândia e em Singapura, as vendas sem imposto não estão em nenhum campo; consulte seu contador se elas deveriam ter tido imposto."
      },
      {
        "type": "p",
        "text": "Os campos de imposto a recuperar (1B da Austrália, 11 da Nova Zelândia, 5 e 7 de Singapura, 4 e 7 do Reino Unido) exigem Recuperação de impostos; sem ela, mostram — e Nenhum imposto a recuperar registrado, nunca 0. O campo 7 do Reino Unido precisa de Imposto a recuperar em pedidos de compra e de Imposto a recuperar em despesas; só com pedidos de compra, o campo 4 é preenchido e o campo 7 fica como —."
      },
      {
        "type": "p",
        "text": "Funcionários sem a permissão DRE e despesas ou Custo e lucro não veem os campos que somam os dois cards até que um gerente aprove em Peça a um gerente para aprovar."
      },
      {
        "type": "note",
        "text": "Calculado com base nas datas de venda e de nota fiscal; o DingPOS não registra datas de pagamento. Se você declara pelo regime de caixa ou de pagamentos, ajuste estes valores."
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
    "question": "Como criar uma promoção no DingPOS?",
    "keywords": [
      "promoção",
      "desconto",
      "leve 2 pague 1",
      "compre e leve",
      "valor mínimo",
      "happy hour",
      "cupom"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vá em Ajustes → Promoções. Os tipos disponíveis incluem:"
      },
      {
        "type": "list",
        "items": [
          "Valor mínimo de compra: gastou X, ganha Y de desconto ou Y%.",
          "Leve um, ganhe outro e ofertas no enésimo item.",
          "Multiplicadores de pontos bônus.",
          "Ofertas só para um nível de membro ou para o mês de aniversário.",
          "Compre A e leve B, adicionais pagos e kits promocionais de preço fixo."
        ]
      },
      {
        "type": "p",
        "text": "Cada promoção pode ser programada (janelas de Happy Hour, dias da semana específicos, atravessando a meia-noite), limitada a produtos específicos e controlada com prioridade, regras de acúmulo e limites de uso. As promoções que se aplicam à venda entram automaticamente na finalização — sem precisar de códigos de desconto."
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
    "question": "Minha promoção não está sendo aplicada: o que verificar?",
    "keywords": [
      "promoção",
      "não funciona",
      "não aplicou",
      "promoção não aparece",
      "solução de problemas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Verifique as causas mais comuns, nesta ordem:"
      },
      {
        "type": "steps",
        "items": [
          "Programação: hoje está dentro das datas ativas? Alguma janela de Happy Hour restringe o dia da semana ou o horário?",
          "Escopo: a promoção se aplica aos produtos ou categorias dos itens no carrinho? O produto está marcado como Excluir das promoções (os produtos de preço aberto vêm assim por padrão)? O valor mínimo de compra foi atingido?",
          "Público: a promoção é limitada a um nível de membro ou ao mês de aniversário? Esse membro foi selecionado na finalização da venda?",
          "Limites de uso: o limite total de usos, ou o limite deste cliente, já foi atingido? O limite por cliente de uma promoção do mês de aniversário conta por ano civil.",
          "Acúmulo: uma promoção de prioridade maior com \"parar as promoções seguintes\" está bloqueando esta?"
        ]
      },
      {
        "type": "p",
        "text": "Se tudo estiver certo e ela ainda não for aplicada, envie para nós um e-mail com uma captura de tela dos ajustes da promoção e vamos ajudar você a investigar."
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
    "question": "Como funcionam os pontos de fidelidade?",
    "keywords": [
      "pontos",
      "fidelidade",
      "programa de fidelidade",
      "resgatar pontos",
      "bônus de boas-vindas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vá em Ajustes → Programa de fidelidade e defina duas regras: quantos pontos o cliente ganha a cada X gasto e quantos pontos (N) valem M de desconto no resgate, com um limite de resgate por venda opcional. Você também pode dar um bônus de boas-vindas em pontos aos novos membros automaticamente. Em lojas novas, o programa começa desativado: ative Ativar programa de fidelidade e preencha uma regra. Com a chave ligada e nenhuma regra definida, aparece o aviso “Nenhuma regra de acúmulo ou resgate foi definida ainda, então as vendas não acumulam nem resgatam pontos.”"
      },
      {
        "type": "p",
        "text": "Vincule o membro à venda, no carrinho ou na tela Pagamento, e os pontos são acumulados automaticamente; para resgatar, informe os pontos a usar. A tela de sucesso mostra os pontos ganhos e o novo saldo, como “+22 pts · 122 pts no total”; numa venda a prazo ou numa encomenda ainda não paga por completo, os pontos só entram quando o dinheiro chega, e a tela indica “creditados na quitação” ou “creditados ao pagar na retirada”. Anular uma venda reverte os pontos que ela gerou e devolve os pontos que foram resgatados."
      },
      {
        "type": "p",
        "text": "Para adicionar ou tirar pontos manualmente (por exemplo, de uma compra que ficou sem registro), toque em Ajustar no cartão Pontos nos detalhes do cliente, escolha Adicionar ou Deduzir, informe os pontos e, se quiser, escreva um motivo (até 100 caracteres). Não é possível deduzir mais pontos do que o cliente tem. Todo ajuste fica no histórico de pontos, com o saldo antes e depois, o motivo e quem o fez."
      },
      {
        "type": "note",
        "text": "O ajuste manual de pontos chegou na v3.5. No Pro, os funcionários cuja função exige aprovação para Ajuste manual de pontos (a função Funcionário exige por padrão) precisam do PIN de um gerente ou do proprietário ao confirmar."
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
    "question": "Para que servem os níveis de membro?",
    "keywords": [
      "nível",
      "nível de membro",
      "vip",
      "ouro",
      "upgrade de nível",
      "categoria de cliente"
    ],
    "content": [
      {
        "type": "p",
        "text": "Os níveis de membro (por exemplo, Regular, Prata, Ouro) têm duas funções: podem ser usados para direcionar promoções (por exemplo, 10% de desconto só para o nível Ouro) e permitem reconhecer rapidamente o status do cliente durante a finalização da venda."
      },
      {
        "type": "p",
        "text": "Os níveis podem subir automaticamente com base em regras que você define (por exemplo, gasto acumulado) ou ser atribuídos manualmente. Se uma venda anulada tinha provocado uma subida de nível, o nível volta ao anterior automaticamente."
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
    "question": "Como fazer backup dos meus dados?",
    "keywords": [
      "backup",
      "icloud",
      "google drive",
      "dropbox",
      "nuvem",
      "cópia na nuvem",
      "backup na nuvem"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vá em Ajustes → Backup na nuvem, escolha iCloud, Google Drive ou Dropbox e autorize o acesso. Depois disso, você pode fazer um backup manual quando quiser. No caso do iCloud, este iPad precisa estar conectado ao iCloud, com o iCloud Drive ativado e o uso pelo DingPOS permitido."
      },
      {
        "type": "p",
        "text": "Os backups ficam na sua própria conta na nuvem. Cada serviço mantém apenas a cópia na nuvem mais recente — uma cópia na nuvem dos dados e um arquivo com as fotos dos produtos — e cada novo backup sobrescreve o anterior."
      },
      {
        "type": "note",
        "text": "Como um novo backup substitui o antigo, se você suspeita que algo já deu errado com seus dados (por exemplo, vários produtos foram excluídos por engano), não faça backup ainda — envie um e-mail para nós e vamos definir juntos o próximo passo."
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
    "question": "Backup do iCloud aparece como “Não conectado”: o que fazer?",
    "keywords": [
      "icloud",
      "não conectado",
      "icloud drive",
      "backup falhou",
      "não consigo conectar"
    ],
    "content": [
      {
        "type": "p",
        "text": "O DingPOS só mostra o iCloud como conectado quando consegue de fato usá-lo. Se aparecer Não conectado, confira três coisas no app Ajustes do iPad:"
      },
      {
        "type": "steps",
        "items": [
          "Você está conectado à sua Conta Apple.",
          "O iCloud Drive está ativado.",
          "O DingPOS tem permissão para usar o iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Com os três itens ativados, volte a Backup na nuvem no DingPOS e o iCloud aparecerá como conectado. Os backups ficam na pasta do próprio DingPOS no iCloud Drive."
      },
      {
        "type": "note",
        "text": "Nas versões anteriores à v3.0, o backup do iCloud não funcionava e falhava sempre com “Backup.SyncError error 0”. Primeiro, atualize o DingPOS pela App Store."
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
    "question": "Como passar meus dados para um iPad novo?",
    "keywords": [
      "transferir",
      "iPad novo",
      "restaurar",
      "migrar",
      "trocar de iPad",
      "passar dados"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "iPad antigo: vá em Ajustes → Backup na nuvem e faça um backup manual. Confirme que o horário do backup foi atualizado.",
          "iPad novo: instale o DingPOS e conclua o assistente de configuração.",
          "iPad novo: vá em Ajustes → Backup na nuvem, conecte a mesma conta na nuvem e restaure a cópia na nuvem."
        ]
      },
      {
        "type": "p",
        "text": "Ao tocar em Restaurar, primeiro abre uma prévia: as quantidades de produtos, vendas e clientes deste iPad e da cópia na nuvem lado a lado, além de todas as vendas que a restauração removeria. Nada neste iPad muda até você confirmar. Se a cópia na nuvem foi criada por uma versão mais nova do DingPOS, o app pede que você o atualize antes. As fotos dos produtos também são restauradas."
      },
      {
        "type": "note",
        "text": "A restauração substitui todos os dados deste iPad pelos do backup — as vendas criadas neste iPad depois desse backup serão perdidas. Confira se está conectado à conta certa na nuvem; se restaurar a errada, use Desfazer restauração."
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
    "question": "Se eu excluir o app, perco meus dados?",
    "keywords": [
      "excluir",
      "desinstalar",
      "perda de dados",
      "apagar app",
      "remover app"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. O DingPOS guarda tudo localmente no seu aparelho — excluir o app apaga de vez todos os produtos, vendas, clientes e ajustes, a menos que você tenha ativado o backup na nuvem."
      },
      {
        "type": "note",
        "text": "Antes de excluir o app, sempre faça um backup manual e confirme que deu certo. Depois de reinstalar, restaure a partir da nuvem."
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
    "question": "O app abre com “Não foi possível abrir os dados da loja”: o que fazer?",
    "keywords": [
      "não foi possível abrir",
      "não abre",
      "travando",
      "fecha ao abrir",
      "banco de dados",
      "dados da loja"
    ],
    "content": [
      {
        "type": "p",
        "text": "Não exclua o app. Esta tela significa que o DingPOS não conseguiu ler os dados da sua loja, mas eles continuam neste iPad — excluir o app apaga os dados junto com ele."
      },
      {
        "type": "p",
        "text": "Toque primeiro em Tentar novamente; se funcionar, o app abre normalmente. Se o problema continuar, toque em Falar com o suporte e conte para nós, que vamos ajudar você a recuperar seus dados. Esta tela nunca move nem exclui arquivos."
      },
      {
        "type": "p",
        "text": "A primeira abertura depois de uma atualização, ou depois de restaurar um backup de uma versão mais antiga, pode mostrar antes “Atualizando seus dados…”. São os dados da sua loja sendo convertidos para um formato mais novo, e quanto mais dados, mais demora; o app abre sozinho quando termina. Ele não travou."
      },
      {
        "type": "note",
        "text": "A causa mais comum é o app ter sido fechado no meio de uma restauração. Antes da v3.0, isso fazia o app travar a cada abertura; desde a v3.0, ele para nesta tela."
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
    "question": "Posso usar dois iPads ao mesmo tempo?",
    "keywords": [
      "dois iPads",
      "vários aparelhos",
      "sincronizar",
      "compartilhar",
      "segundo caixa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Os dados de cada iPad são independentes por enquanto — o compartilhamento em tempo real dos mesmos dados entre dois aparelhos ainda não é compatível."
      },
      {
        "type": "p",
        "text": "Você pode copiar os dados de um iPad para outro pelo backup na nuvem (backup → restauração), o que funciona bem para trocar de aparelho ou preparar um segundo iPad. Porém, as vendas registradas separadamente em cada aparelho não se unem automaticamente. A sincronização entre vários aparelhos está no nosso planejamento."
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
    "question": "Restaurei o backup errado. Dá para desfazer?",
    "keywords": [
      "desfazer restauração",
      "restaurar",
      "backup errado",
      "registros de restauração",
      "dados perdidos",
      "reverter"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. Toda restauração pela nuvem guarda os dados substituídos como uma cópia anterior à restauração. Em Ajustes → Backup na nuvem, um cartão mostra quando foi a última restauração e de onde ela veio. Toque em Desfazer restauração, confira a prévia e confirme — os dados voltam a ser como eram antes da restauração e o app é recarregado."
      },
      {
        "type": "list",
        "items": [
          "Desfazer restauração também é uma restauração e guarda outra cópia do que substitui, então tocar nela de novo volta ao estado anterior.",
          "Só a cópia mais recente é mantida; a próxima restauração a substitui.",
          "Só os dados voltam: produtos adicionados depois da cópia aparecem sem imagem."
        ]
      },
      {
        "type": "p",
        "text": "Para ver quem restaurou, quando e de qual cópia, toque em Ver registros de restauração na mesma tela: horário, operador, origem, quantidades de produtos / vendas / clientes antes e depois, e todas as vendas removidas em cada restauração. Os registros ficam neste iPad e nunca são substituídos por uma restauração."
      },
      {
        "type": "note",
        "text": "A prévia da restauração e Desfazer restauração funcionam em todos os planos; ver os registros de restauração é um recurso do Pro. Os registros também são gravados sem o Pro (só que sem operador), então, ao assinar o Pro depois, você os vê todos."
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
    "question": "Como adicionar funcionários e trocar quem está no caixa?",
    "keywords": [
      "equipe",
      "funcionário",
      "gerente",
      "cadastro de funcionário",
      "pin",
      "operador",
      "trocar operador",
      "troca de turno",
      "caixa"
    ],
    "content": [
      {
        "type": "p",
        "text": "Toque em Equipe na barra lateral. Na primeira vez, cadastre o proprietário: um nome e um PIN de 4 dígitos. Adicionar funcionários e alterar permissões exigem esse PIN, então anote-o — ele não pode ser redefinido."
      },
      {
        "type": "steps",
        "items": [
          "Na página Equipe, toque em Adicionar funcionário, digite um nome, escolha uma função (Gerente ou Funcionário) e defina um PIN de 4 dígitos.",
          "O operador atual aparece na parte de baixo da barra lateral e no canto superior direito da tela de Pagamento. Na troca de turno, toque nele, escolha seu nome e digite seu PIN.",
          "A partir daí, toda venda, pagamento e movimentação de estoque ou pontos registra quem cuidou dela, informação visível na lista e nos detalhes da venda; vendas anuladas também registram quem as anulou."
        ]
      },
      {
        "type": "p",
        "text": "Quando alguém sair, use Desativar este funcionário: o histórico dele fica intacto e você pode reativá-lo depois. Mudar o nome não altera as vendas antigas — elas mantêm o nome da época."
      },
      {
        "type": "note",
        "text": "Equipe é um recurso do plano Pro (também disponível durante o teste grátis). Se o Pro terminar, os dados da equipe e o responsável por cada venda são mantidos e as novas vendas passam a ser registradas no nome do proprietário; ao assinar o Pro de novo, tudo volta."
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
    "question": "Esqueci o PIN do proprietário. E agora?",
    "keywords": [
      "pin",
      "esqueci o pin",
      "senha",
      "redefinir",
      "proprietário",
      "recuperar",
      "bloqueado"
    ],
    "content": [
      {
        "type": "p",
        "text": "O PIN do proprietário não pode ser redefinido, e nossa equipe de suporte também não tem como desbloqueá-lo. O PIN fica guardado junto com os dados da sua loja; por isso, excluir e reinstalar o app e depois restaurar da nuvem traz o mesmo PIN de volta."
      },
      {
        "type": "p",
        "text": "Ao criar o proprietário e a cada troca do PIN dele, aparece o aviso “Lembre-se deste PIN. Se você esquecê-lo, ele não poderá ser redefinido.” Guarde-o em um lugar que só você alcance."
      },
      {
        "type": "p",
        "text": "Sem o PIN do proprietário, tudo o que depende dele fica inacessível — adicionar ou editar funcionários, alterar as permissões das funções e ver o registro de atividades. Os funcionários continuam vendendo e fazendo o trabalho do dia a dia com os próprios PINs."
      },
      {
        "type": "note",
        "text": "Se um funcionário esquecer o PIN, sem problema: o proprietário pode redefini-lo em Equipe."
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
    "question": "Como funcionam as permissões da equipe e as aprovações do gerente?",
    "keywords": [
      "permissões",
      "aprovação",
      "gerente",
      "limite de desconto",
      "funcionário",
      "custo",
      "função"
    ],
    "content": [
      {
        "type": "p",
        "text": "Uma permissão tem dois valores: Permitido ou Requer aprovação — nada é totalmente proibido. Quando um funcionário tenta uma ação que requer aprovação, um colega com permissão para ela escolhe seu nome e digita o PIN para liberar."
      },
      {
        "type": "list",
        "items": [
          "Ações (ajuste manual de estoque, ajuste manual de pontos, gestão de produtos, finalizar venda acima do limite de desconto): uma aprovação vale para aquela única ação.",
          "Telas (custo e lucro, Resumo, DRE e despesas, Ajustes, backup e restauração): a aprovação libera o acesso até o operador mudar ou o app ir para segundo plano.",
          "O limite de desconto vale para descontos manuais e é verificado uma vez, ao finalizar a venda; promoções automáticas e resgate de pontos não contam para ele."
        ]
      },
      {
        "type": "p",
        "text": "Padrões de fábrica: Gerentes podem tudo, exceto duas coisas — backup e restauração, e DRE e despesas — e não têm limite de desconto; Funcionários precisam de aprovação para tudo, com limite de 10%. O proprietário sempre tem permissão e não pode ser editado. Para mudar, vá em Equipe → Permissões das funções, toque em Editar e salve uma vez — vale para todos imediatamente."
      },
      {
        "type": "note",
        "text": "Anulações, devoluções, vendas a prazo e compras propositalmente não têm permissão; elas apenas registram quem cuidou delas. Para revisá-las depois, use o registro de atividades."
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
    "question": "Como ver quem anulou uma venda, ajustou o estoque ou mudou um preço?",
    "keywords": [
      "registro de atividades",
      "auditoria",
      "quem alterou",
      "anulação",
      "mudança de preço",
      "ajuste de estoque",
      "produto excluído",
      "aprovações",
      "histórico"
    ],
    "content": [
      {
        "type": "p",
        "text": "Use o registro de atividades. Na página Funcionários e permissões, toque em Registro de atividades no canto superior direito e digite o PIN do proprietário para ver as ações sensíveis da loja, das mais recentes às mais antigas: anulações, devoluções, ajustes e recontagens de estoque, ajustes manuais de pontos, aprovações, mudanças na equipe e nas permissões, trocas do PIN do proprietário, mudanças nos ajustes de imposto, mudanças de preço e custo de produtos e exclusões de produtos. Vendas comuns não aparecem."
      },
      {
        "type": "list",
        "items": [
          "Cada registro mostra o que foi afetado, quem fez o quê e quando, e o resultado — por exemplo “M preço R$ 390 → R$ 350”. O motivo informado em uma anulação, devolução, ajuste de estoque ou ajuste de pontos aparece na terceira linha do registro.",
          "Filtre por funcionário (inclusive os desativados), tipo de ação e Hoje / Esta semana / Este mês.",
          "Toque em um registro ligado a uma venda, produto ou cliente para abrir os detalhes correspondentes.",
          "Os detalhes da venda, os detalhes do produto e a página de cada funcionário têm uma entrada própria, que lista só os registros sobre eles.",
          "Produtos excluídos continuam mostrando no registro o nome e o preço da época."
        ]
      },
      {
        "type": "note",
        "text": "Todos os planos registram; só a visualização é um recurso do Pro, então os registros do período em que o Pro estava vencido aparecem quando você assinar de novo. O registro acompanha seus backups na nuvem."
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
    "question": "Como funciona o teste grátis do DingPOS?",
    "keywords": [
      "teste grátis",
      "grátis",
      "30 dias",
      "período de teste",
      "experimentar"
    ],
    "content": [
      {
        "type": "p",
        "text": "Você tem 30 dias com todos os recursos do plano Pro desde a primeira instalação, incluindo contas de funcionários, permissões e registro de atividades — sem precisar criar conta."
      },
      {
        "type": "p",
        "text": "Assinar qualquer plano durante o teste encerra o teste na hora, e o plano contratado passa a valer a partir daí. Depois do teste, recursos Pro como funcionários e registro de atividades continuam disponíveis só com a assinatura Pro. Os relatórios avançados não exigem assinatura; desde a versão 3.4, todos os planos os incluem."
      },
      {
        "type": "p",
        "text": "Nos últimos 7 dias e no último dia, o app avisa uma vez em cada um quantos dias faltam, que a finalização de vendas é pausada quando o teste termina e que seus dados são mantidos."
      },
      {
        "type": "p",
        "text": "Tudo o que você criar durante o teste (produtos, vendas, membros) fica guardado por completo. Seus dados nunca são apagados, independentemente de você assinar depois."
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
    "question": "Perco meus dados quando o teste grátis acaba?",
    "keywords": [
      "teste acabou",
      "fim do teste",
      "expirar",
      "bloqueado",
      "dados"
    ],
    "content": [
      {
        "type": "p",
        "text": "Não — seus dados ficam no seu aparelho para sempre. Quando o teste termina, a finalização de vendas é bloqueada, mas você ainda pode consultar vendas, ver relatórios e gerenciar produtos."
      },
      {
        "type": "p",
        "text": "Assine quando quiser e a finalização de vendas é liberada na hora, com todos os dados exatamente como você deixou."
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
    "question": "Qual a diferença entre os planos Lite, Standard e Pro?",
    "keywords": [
      "planos",
      "lite",
      "standard",
      "pro",
      "diferença",
      "comparar",
      "upgrade",
      "downgrade",
      "preços"
    ],
    "content": [
      {
        "type": "p",
        "text": "Os três planos incluem finalização de venda completa, produtos, vendas (com anulações, devoluções e trocas), relatórios (os avançados e a DRE mensal incluídos desde a versão 3.4, o relatório de impostos e a exportação dele desde a versão 3.6) e backup na nuvem. A diferença está nas ferramentas para tocar a loja:"
      },
      {
        "type": "list",
        "items": [
          "Lite: para quem trabalha sozinho em uma barraca e precisa finalizar vendas e cadastrar produtos.",
          "Standard: acrescenta promoções, descontos predefinidos, pontos de fidelidade e níveis de membros, controle de estoque, compras, vendas a prazo, encomendas e alíquotas das taxas de pagamento.",
          "Pro: acrescenta contas de funcionários e permissões, aprovação do gerente, registro de atividades e registros de restauração — para lojas com equipe."
        ]
      },
      {
        "type": "p",
        "text": "Já está no Standard? Faça o upgrade para o Pro na página de assinatura: a cobrança continua no mesmo ciclo, o upgrade vale imediatamente e a Apple cobra a diferença proporcional. A volta do Pro para o Standard vale na renovação. Os preços aparecem no app, e você pode comparar os planos na nossa página de Preços."
      },
      {
        "type": "note",
        "text": "Fazer downgrade nunca apaga dados. Os recursos fora do seu plano ficam pausados, os dados permanecem, e ao assinar de novo eles voltam."
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
    "question": "Como assinar, cancelar ou restaurar uma compra?",
    "keywords": [
      "assinar",
      "cancelar assinatura",
      "restaurar compra",
      "preço",
      "cobrança"
    ],
    "content": [
      {
        "type": "p",
        "text": "As assinaturas são feitas por compra dentro do app na App Store — os planos e preços aparecem no app. O pagamento é processado pela Apple; nós nunca vemos os dados do seu pagamento."
      },
      {
        "type": "list",
        "items": [
          "Cancelar: gerencie em Ajustes → Conta Apple → Assinaturas, no seu aparelho. Cancele pelo menos 24 horas antes do fim do período atual para evitar a renovação.",
          "Restaurar: ao trocar de aparelho ou reinstalar, toque em \"Restaurar compra\" na página Assinatura do DingPOS.",
          "Trocar de plano: escolha o novo plano na página Assinatura do DingPOS. Upgrades (de Standard para Pro, de mensal para anual) valem imediatamente, com a Apple cobrando a diferença proporcional; downgrades valem na renovação."
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
    "question": "Como configurar um desconto por valor mínimo de compra",
    "keywords": [
      "valor mínimo",
      "gaste e ganhe",
      "desconto por valor",
      "guia",
      "configuração",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vá em Ajustes → Promoções → Nova promoção, escolha o tipo de desconto por valor mínimo e siga estes passos:"
      },
      {
        "type": "steps",
        "items": [
          "Defina o valor mínimo e o desconto (valor fixo ou porcentagem).",
          "Escolha o alcance: produtos específicos, categorias específicas ou deixe em branco para valer na loja toda.",
          "Defina a programação: a data de início é obrigatória; deixe a data de fim em branco para uma promoção sem prazo.",
          "Toque em Salvar — a promoção é ativada no horário programado e aplicada automaticamente ao finalizar a venda, sem precisar de cupom."
        ]
      },
      {
        "type": "note",
        "text": "O valor mínimo é conferido sobre o subtotal dos itens incluídos na promoção, não sobre o carrinho inteiro. Uma promoção “gaste R$ 1.000 em Bebidas” só conta as bebidas, e produtos marcados como “excluir das promoções” nunca entram na conta."
      },
      {
        "type": "p",
        "text": "Um comportamento sobre o qual perguntam muito: se uma promoção de prioridade mais alta for aplicada antes, o valor mínimo é conferido sobre o valor que já recebeu desconto — um carrinho que parece passar do mínimo pode ficar um pouco abaixo. Para que o valor mínimo seja avaliado primeiro, dê a ela um número de prioridade menor."
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
    "question": "Como configurar promoção leve mais por menos (compre 1 leve 2, 3º item grátis)",
    "keywords": [
      "compre 1 leve 2",
      "leve mais pague menos",
      "3º item grátis",
      "compre x leve y",
      "guia",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Crie uma promoção do tipo Compre X / Leve Y: defina quantos itens comprar, quantos levar e a porcentagem de desconto (100% = grátis). Limite a promoção a produtos específicos ou a uma categoria inteira — produtos diferentes da mesma categoria formam um mesmo grupo."
      },
      {
        "type": "list",
        "items": [
          "O item com desconto é o mais barato do grupo, calculado pelo preço efetivo no momento — se uma promoção anterior já deu desconto nele, o valor da promoção Compre X / Leve Y parte do preço já descontado, não do preço de tabela.",
          "Se quiser que a etiqueta “3º item grátis” mostre o preço de tabela inteiro, dê a esta promoção o menor número de prioridade para que ela seja calculada primeiro. Quando um desconto no carrinho inteiro é executado antes, a dedução exibida do item grátis fica menor que o preço de tabela — é uma característica da ordem de cálculo, que verificamos exaustivamente, e não um erro. Nas duas ordens o total fica quase igual; o que muda é onde o desconto aparece."
        ]
      },
      {
        "type": "p",
        "text": "Dica: coloque a oferta principal em primeiro na prioridade, para que o detalhamento de descontos no recibo combine com a sua mensagem de marketing."
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
    "question": "Como configurar multiplicador de pontos (pontos em dobro)",
    "keywords": [
      "multiplicador de pontos",
      "pontos em dobro",
      "pontos extras",
      "guia",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Crie uma promoção do tipo Multiplicador de pontos e defina o multiplicador (um número inteiro igual ou maior que 2). Se quiser, acrescente um valor mínimo de compra (por exemplo, gaste R$ 500 → pontos em dobro) e uma programação (por exemplo, só aos sábados)."
      },
      {
        "type": "list",
        "items": [
          "Quando vários multiplicadores se qualificam ao mesmo tempo, vale apenas o maior — eles nunca se multiplicam nem se acumulam.",
          "O valor mínimo é conferido depois do resgate de pontos: se o resgate fizer o total cair abaixo do mínimo, o multiplicador não será ativado desta vez.",
          "É preciso selecionar um cliente na finalização da venda para acumular pontos — vendas sem cliente não rendem pontos, então o multiplicador não tem o que multiplicar."
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
    "question": "Como configurar ofertas por nível de cliente e de aniversário",
    "keywords": [
      "nível",
      "aniversário",
      "vip",
      "cliente fiel",
      "guia",
      "tutorial"
    ],
    "content": [
      {
        "type": "p",
        "text": "Primeiro crie os níveis em Ajustes → Níveis de membros (por exemplo, Ouro) e depois direcione a promoção para esse nível. Para ofertas de aniversário, defina o público como Mês de aniversário e preencha o Limite por cliente."
      },
      {
        "type": "list",
        "items": [
          "O cliente precisa estar selecionado na finalização da venda para a oferta valer — a elegibilidade é avaliada com base no cliente selecionado no momento.",
          "A oferta de aniversário usa o mês de aniversário do cliente, então preencha o campo de aniversário; clientes sem essa data nunca são tratados como aniversariantes.",
          "Uma promoção do mês de aniversário exige um limite por cliente, contado por ano civil: um limite de 1 significa que cada cliente pode usá-la uma vez por ano, e ele é renovado no ano seguinte. Sem esse limite, não é possível salvar.",
          "Os upgrades automáticos de nível são avaliados quando a venda é concluída; se a venda for anulada, o upgrade que ela acionou é revertido automaticamente."
        ]
      },
      {
        "type": "note",
        "text": "Antes da v3.2, uma promoção do mês de aniversário mostrava um erro e não podia ser salva, mesmo com o limite por cliente preenchido. Se isso acontecer com você, atualize o DingPOS pela App Store."
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
    "question": "Como configurar brindes, adicionais pagos e kits promocionais de preço fixo",
    "keywords": [
      "brinde",
      "adicional pago",
      "kit promocional",
      "compre a ganhe b",
      "guia"
    ],
    "content": [
      {
        "type": "p",
        "text": "Há três tipos de oferta composta: brinde na compra (compre A, ganhe B), adicional pago (acrescente R$ X e leve Y) e kit promocional de preço fixo (quaisquer N por R$ X). Brindes e adicionais pagos esperam a confirmação do caixa; os kits promocionais são aplicados automaticamente."
      },
      {
        "type": "p",
        "text": "Brindes e adicionais pagos nunca alteram o carrinho por conta própria. Quando as condições são atendidas, aparece um banner de sugestão na tela do caixa, e o carrinho só muda quando o caixa toca no botão de brinde ou no botão + do banner (Escolher brinde ou Escolher adicional) — é de propósito, porque brindes envolvem estoque físico: alguém precisa confirmar que o item está disponível e que o cliente o quer."
      },
      {
        "type": "list",
        "items": [
          "Depois de tocar no ✕ do banner (Recusar), a mesma sugestão não volta a aparecer para este carrinho; um carrinho novo ou esvaziado exibe a sugestão de novo.",
          "Se o carrinho deixar de atender às condições (por exemplo, o item que ativou o brinde foi removido), o brinde ou o adicional é removido automaticamente, com um aviso no topo, e isso não conta como um uso da promoção (desde a v3.6).",
          "Desde a versão 3.4, as ofertas ainda pendentes não impedem a finalização da venda: uma linha amarela sob o botão de pagamento, como “1 oferta pendente não será aplicada”, diz quantas ficaram de fora (toque nela para ver quais), e a venda segue sem elas. Para a finalização esperar como antes, ative Resolver ofertas antes de finalizar em Ajustes → Preferências do aparelho; vale só para este iPad.",
          "Os itens de brinde e de adicional não recebem desconto de outras promoções em dinheiro e não contam para o valor mínimo de outras promoções."
        ]
      },
      {
        "type": "p",
        "text": "Kits promocionais (aplicados automaticamente desde a v2.4): sempre que o carrinho puder formar um kit, o DingPOS o agrupa e o inclui no total — sem aviso, e os kits não podem ser desfeitos."
      },
      {
        "type": "list",
        "items": [
          "Um kit só é formado quando deixa o carrinho mais barato. Entre itens de mesmo preço, os sem desconto são agrupados primeiro, e os que já têm desconto mantêm o desconto.",
          "Quais itens formam um kit depende apenas do que está no carrinho, nunca da ordem em que foram lidos.",
          "Cada item do kit mostra sua parte do desconto do kit, e o valor de cada linha já é o valor depois dos descontos.",
          "Na finalização da venda, os kits são reagrupados com os preços mais recentes; se o resultado mudar, o app pede que você confirme o novo total."
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
    "question": "Como programar promoções por data, dia da semana e happy hour",
    "keywords": [
      "programação",
      "happy hour",
      "dia da semana",
      "meia-noite",
      "horário",
      "guia"
    ],
    "content": [
      {
        "type": "p",
        "text": "A programação de cada promoção tem três camadas: um período de datas (início obrigatório, fim opcional), um horário diário (happy hour) e os dias da semana selecionados. Os três precisam coincidir para a promoção ser ativada."
      },
      {
        "type": "list",
        "items": [
          "Em horários que passam da meia-noite (por exemplo, 22:00–02:00), o dia da semana é definido pelo dia em que o horário começa: com apenas sexta-feira selecionada, sábado à 01:30 ainda conta como a sessão de sexta e a promoção vale — mas sábado às 23:30 não.",
          "A data de fim é um corte definitivo — mesmo que o horário de happy hour ainda esteja em andamento, a promoção termina assim que a data de fim passa.",
          "O horário vem do relógio do iPad, então confira se o fuso horário e a hora do aparelho estão corretos."
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
    "question": "Como funcionam prioridade, acúmulo e parar as promoções seguintes",
    "keywords": [
      "prioridade",
      "cumulativa",
      "acúmulo de promoções",
      "parar as promoções seguintes",
      "conflito",
      "guia"
    ],
    "content": [
      {
        "type": "p",
        "text": "Quando várias promoções se qualificam ao mesmo tempo, três ajustes controlam a ordem e a interação entre elas:"
      },
      {
        "type": "list",
        "items": [
          "Prioridade: números menores são calculados primeiro. Arraste para reordenar na lista de promoções.",
          "Cumulativa com outras promoções (ativada por padrão): quando desativada, uma promoção em itens trava apenas as linhas em que deu desconto — os outros itens ainda podem receber promoções em itens posteriores; uma promoção no carrinho não cumulativa bloqueia todas as promoções no carrinho seguintes.",
          "Parar as promoções seguintes quando esta for aplicada: depois que esta promoção for aplicada, nenhum outro desconto em dinheiro é calculado — mas multiplicadores de pontos e sugestões de brinde não são afetados."
        ]
      },
      {
        "type": "note",
        "text": "As promoções seguintes são calculadas sobre o valor que já recebeu desconto: 10% de desconto mais 5% de desconto não é 15% de desconto — o segundo desconto incide sobre o total depois do primeiro. O DingPOS também nunca procura a melhor combinação para o cliente; a ordem é determinada inteiramente pelas suas prioridades."
      },
      {
        "type": "p",
        "text": "Curiosidade: se um desconto arredondar para zero, a aplicação não conta — e não consome o limite de usos."
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
    "question": "O DingPOS vai ter integração com maquininha ou processamento de pagamentos?",
    "keywords": [
      "pagamento",
      "maquininha",
      "integração com maquininha",
      "processamento de cartão",
      "gateway de pagamento"
    ],
    "content": [
      {
        "type": "p",
        "text": "Hoje o DingPOS não mexe no fluxo do dinheiro: as formas de pagamento são apenas rótulos de registro, e os pagamentos de verdade passam pela sua maquininha ou pelo seu app de pagamento atual."
      },
      {
        "type": "p",
        "text": "Integrar o processamento de pagamentos depende da demanda real dos usuários. Se você precisa disso, escreva para nós contando qual serviço gostaria de conectar (qual processadora, qual maquininha) e como você usaria. Priorizamos o desenvolvimento pelo número de pedidos."
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
    "question": "O DingPOS vai emitir nota fiscal eletrônica ou imprimir recibo?",
    "keywords": [
      "nota fiscal eletrônica",
      "NFC-e",
      "emissão de nota fiscal",
      "recibo",
      "impressora de recibo",
      "impressora térmica"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ainda não. A emissão de nota fiscal eletrônica e a impressão de recibo exigem comprar equipamentos de emissão e impressoras de recibo para testar e desenvolver, o que tem um custo alto. Como somos uma equipe pequena, vamos planejar isso quando a base de usuários crescer e a receita estiver estável."
      },
      {
        "type": "p",
        "text": "Se você precisa disso, escreva para nós informando o modelo do equipamento que usa. Priorizamos o desenvolvimento pelo número de pedidos."
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
    "question": "Posso usar leitor de código de barras físico no DingPOS?",
    "keywords": [
      "leitor de código de barras",
      "leitor a laser",
      "pistola de código de barras",
      "bluetooth",
      "usb",
      "hardware"
    ],
    "content": [
      {
        "type": "p",
        "text": "A leitura de código de barras pela câmera para cadastrar produtos já é compatível. Leitores físicos (USB / Bluetooth) ainda não têm suporte oficial: como outros recursos de hardware, eles exigem a compra de aparelhos para testar e desenvolver, e entrarão no planejamento conforme a base de usuários crescer."
      },
      {
        "type": "note",
        "text": "O campo de busca do checkout reconhece códigos de barras, então um leitor em modo teclado poderia, em teoria, digitar nele e trazer os produtos. Mas não testamos isso em equipamento real, por isso não é oficialmente compatível. Se você já testou um leitor que funciona, conte para nós o modelo!"
      },
      {
        "type": "p",
        "text": "Se você precisa disso, escreva para nós. Priorizamos o desenvolvimento pelo número de pedidos."
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
    "question": "O DingPOS vai ter relatório de fechamento mensal?",
    "keywords": [
      "fechamento mensal",
      "conciliação",
      "fechamento do mês",
      "relatório mensal",
      "contas a pagar",
      "contas a receber"
    ],
    "content": [
      {
        "type": "p",
        "text": "Desde a versão 3.4, a DRE mostra o lucro líquido de cada mês depois do custo dos produtos, das taxas e das despesas — veja “Como ver quanto minha loja realmente lucrou em cada mês?” Desde a versão 3.6, o relatório de impostos exporta um período (Este mês, por exemplo) em CSV, em planilha do Excel ou em Relatório em PDF para o seu contador, com vendas, impostos, o valor recebido em cada forma de pagamento e as contas a receber. A DRE e os demais relatórios ainda não podem ser exportados, mas tudo o que você precisa para conferir as contas já está no app:"
      },
      {
        "type": "list",
        "items": [
          "Em Resumo, escolha Este mês para ver a receita do mês, o valor recebido, o lucro e a divisão por forma de pagamento.",
          "As compras de fornecedores a prazo mensal ficam reunidas em Contas a pagar, dentro de Compras, onde dá para quitar um mês inteiro de uma vez.",
          "As vendas a prazo para clientes ficam reunidas em Vendas → Contas a receber, onde dá para quitar um mês inteiro de uma vez."
        ]
      },
      {
        "type": "p",
        "text": "Se você precisa de um relatório de fechamento mensal que possa exportar ou imprimir, além do que o relatório de impostos já cobre, escreva para nós dizendo quais campos quer ver. Priorizamos o desenvolvimento pelo número de solicitações."
      }
    ],
    "related": [
      "profit-loss",
      "purchase-orders",
      "on-account"
    ]
  }
];
