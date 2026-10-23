// Generated from en and the pt-BR translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync pt-BR`, then `npm run l10n -- apply pt-BR`.

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
      "moeda"
    ],
    "content": [
      {
        "type": "p",
        "text": "Na primeira vez que você abre o DingPOS, um assistente de configuração abre a sua loja em duas etapas e poucos minutos:"
      },
      {
        "type": "steps",
        "items": [
          "Escolha seu país ou região. No topo da lista aparecem a região deste iPad e os mercados mais comuns; abaixo estão os 175 países e regiões em que o DingPOS está na App Store, com busca pelo nome no idioma do app ou em inglês. Sua escolha preenche a moeda, a alíquota e o modo de imposto.",
          "Em Sua loja, digite o nome da loja, adicione um logotipo se quiser e confira a moeda, a alíquota e o modo de imposto (incluso / não incluso). A moeda começa com a do seu país; toque nela para escolher entre 130 moedas."
        ]
      },
      {
        "type": "p",
        "text": "Toque em Continuar e você verá “Ding! Sua loja está pronta.” O DingPOS também cria duas formas de pagamento, Dinheiro e Cartão de crédito. Depois, cadastre seus produtos em Produtos e comece a registrar vendas."
      },
      {
        "type": "note",
        "text": "A moeda e o modo de imposto não podem ser alterados depois da configuração; a alíquota ainda pode ser alterada depois em Ajustes. Nos Estados Unidos, no Canadá, no Brasil e na Micronésia, a alíquota depende do estado, da província ou da cidade; por isso o campo de alíquota começa vazio e você informa a alíquota que cobra (0 é permitido) para continuar. A lista de 175 países e a escolha de moeda chegaram na v3.2; as versões anteriores ofereciam 15 países."
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
        "text": "Não. O DingPOS não tem sistema de contas — baixe e comece a vender. Seus produtos, vendas e dados de clientes ficam no seu iPad e nunca são enviados aos nossos servidores."
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
        "text": "No momento, o DingPOS funciona em iPads com iPadOS 17 ou posterior, pensado principalmente para uso na horizontal."
      },
      {
        "type": "p",
        "text": "iPhone e Mac ainda não são compatíveis. Se você quiser que a gente ofereça suporte a outro aparelho, escreva para nós e conte como você pretende usar."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Dá para mudar a moeda ou o modo de imposto depois da configuração?",
    "keywords": [
      "moeda",
      "modo de imposto",
      "alterar",
      "bloqueado",
      "alíquota"
    ],
    "content": [
      {
        "type": "p",
        "text": "A alíquota pode ser alterada a qualquer momento em Ajustes — a nova alíquota vale apenas para as próximas vendas."
      },
      {
        "type": "p",
        "text": "A moeda e o modo de imposto (incluso / não incluso) ficam bloqueados depois que a configuração é concluída. Todas as suas vendas anteriores foram calculadas com eles, então trocá-los no meio do caminho bagunçaria seus relatórios. Confira os dois na etapa Sua loja da configuração: a moeda começa com a do seu país e você pode tocar nela para escolher outra."
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
        "text": "A tela do caixa aceita até 10 carrinhos ao mesmo tempo. Toque em \"+\" na barra de carrinhos para adicionar um e toque em uma aba numerada para alternar."
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
      "preço promocional"
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
      "imposto sobre vendas",
      "imposto incluso",
      "imposto não incluso",
      "recibo"
    ],
    "content": [
      {
        "type": "p",
        "text": "O imposto é calculado automaticamente de acordo com o modo de imposto escolhido na configuração. O recibo mostra o valor do imposto nos dois modos:"
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
        "text": "Ordem completa do cálculo: descontos em itens → desconto no carrinho → imposto. Os valores são arredondados para cima a partir de meio (0,5) nas casas decimais da moeda (por exemplo, 0 para TWD e 2 para USD)."
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
    "question": "Quais formas de pagamento o DingPOS aceita?",
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
        "text": "Uma loja nova começa com duas formas de pagamento, Dinheiro e Cartão de crédito, com os nomes no idioma do app na configuração. Em Ajustes → Formas de pagamento você pode adicionar qualquer outra forma (por exemplo, Apple Pay, Line Pay, uma carteira digital local), além de excluí-las ou reordená-las."
      },
      {
        "type": "p",
        "text": "As formas de pagamento são apenas etiquetas de controle: o DingPOS não processa pagamentos de verdade. Receba pagamentos por cartão ou celular na sua maquininha ou app de sempre e depois escolha a forma correspondente no DingPOS para registrar. Nos pagamentos em dinheiro, o troco é calculado automaticamente."
      },
      {
        "type": "p",
        "text": "Se a operadora do cartão ou do pagamento por celular cobra uma taxa, defina a alíquota da taxa na forma de pagamento e o Resumo estima as taxas e o líquido estimado a receber de cada forma — veja “O DingPOS controla as taxas de cartão e de pagamento por celular?”"
      },
      {
        "type": "p",
        "text": "Para o cliente fixo que leva a mercadoria agora e paga depois, escolha A prazo: a venda é registrada como conta a receber e quitada quando o dinheiro chegar. Veja “Clientes fixos podem comprar a prazo e pagar depois?”"
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
        "text": "Sim. Em Ajustes → Formas de pagamento, toque em uma forma (ou adicione uma nova) e preencha Taxa de processamento: uma porcentagem, um valor fixo por transação ou os dois. A partir daí, cada pagamento recebido por essa forma registra uma taxa estimada com a alíquota em vigor naquele momento."
      },
      {
        "type": "p",
        "text": "No Resumo, o cartão Formas de pagamento ganha uma linha “Taxa · Líquido” sob cada forma que tem taxa, e o rodapé do cartão mostra as taxas estimadas e o líquido estimado a receber do período inteiro."
      },
      {
        "type": "list",
        "items": [
          "Informe a alíquota que a operadora realmente desconta, com impostos incluídos — para 3% mais 5% de imposto, informe 3,15%. Deixe os dois campos vazios para nenhuma taxa.",
          "Mudar a alíquota vale apenas para os pagamentos seguintes; as taxas já registradas continuam como estavam.",
          "“Percentual da taxa devolvido em reembolsos” vem ativado por padrão, para operadoras que devolvem a taxa quando você faz um reembolso. Ele vale para devoluções e para sinais de encomendas reembolsados: com ele ativado, a porcentagem é devolvida; a taxa fixa nunca. Uma anulação ou um estorno da quitação ignora a chave e estorna a taxa inteira que registrou, taxa fixa incluída. Nos dois casos, o cliente recebe de volta o mesmo valor.",
          "Pagamentos recebidos antes de a forma ter uma alíquota ficam sem taxa: o Resumo os marca como “N sem alíquota” e mostra o líquido como “—”."
        ]
      },
      {
        "type": "note",
        "text": "As taxas são estimativas a partir da alíquota que você informa; o extrato da operadora mostra o valor real. Editar as alíquotas das taxas e ver as taxas no Resumo exigem o plano Standard ou superior. No Lite os campos ficam bloqueados, mas os pagamentos continuam registrando as taxas, que aparecem quando você faz o upgrade."
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
        "text": "Vá em Vendas, encontre a venda, abra os detalhes e escolha Anular. Confirme e pronto."
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
      "trocar tamanho"
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
          "O estoque controlado volta automaticamente. Os pontos ganhos na venda original são retirados, os pontos resgatados são devolvidos e os itens da troca geram seus próprios pontos.",
          "Uma venda pode ser devolvida em várias etapas, mas nunca além da quantidade vendida originalmente. Os limites de uso de promoção não são devolvidos pela devolução."
        ]
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
        "text": "Ao finalizar a venda, troque a parte de cima da tela de Venda para Encomenda, escolha a data de retirada, informe o sinal (de 0 até o valor total, com atalhos de 30% / 50% / total) e escolha como o sinal é pago. Associe um cliente para poder avisá-lo quando o produto chegar."
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
        "text": "Pode. Selecione o cliente ao finalizar a venda e escolha A prazo como forma de pagamento. Uma dívida precisa de alguém responsável por ela, por isso A prazo não está disponível sem um cliente."
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
      "payment-methods",
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
        "text": "Pode. As páginas de detalhes de vendas, clientes e pedidos de compra têm um cartão de observações: toque nele para editar, com até 500 caracteres. Você também pode escrever uma no formulário ao criar um cliente ou um pedido de compra."
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
        "text": "Quando um produto tem variantes, o campo Preço some e cada combinação ganha o próprio preço em Preço e estoque das variantes, com estoque próprio (desde a v3.2; as versões anteriores ainda pedem um preço do produto). O caixa, a lista de produtos e os detalhes do produto mostram uma faixa de preço do menor ao maior, como “R$ 35–R$ 39”, ou um preço só quando todas as combinações custam o mesmo; a ordenação por preço usa o menor preço entre as combinações. Na hora da venda, ao tocar no produto, aparece a escolha da variante antes de ele ir para o carrinho."
      },
      {
        "type": "p",
        "text": "Você não precisa informar o custo de cada combinação: o campo Custo vazio significa Segue o produto, ou seja, usa o custo do produto e muda junto com ele. Um número vira Custo próprio — inclusive 0. Usar o custo do produto em todas apaga todos os custos próprios de uma vez."
      },
      {
        "type": "note",
        "text": "Os nomes de opções e de valores podem ter até 20 caracteres e não podem ficar em branco: um nome de opção ou valor vazio fica destacado em vermelho ao salvar, então preencha ou exclua o valor vazio. Um produto com variantes não pode ter preço aberto."
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
      "preço de feira"
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
        "text": "Com o controle ativado, vendas e encomendas baixam o estoque automaticamente; anulações, devoluções e encomendas canceladas devolvem as unidades; o recebimento de um pedido de compra soma ao estoque; e você pode fazer ajustes manuais a qualquer momento. Toda movimentação fica registrada em um histórico completo. Estoque baixo aparece destacado com um alerta de cor."
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
        "text": "Estoque negativo geralmente significa que uma reposição não foi registrada ou que um item encomendado ainda não chegou (as encomendas baixam o estoque quando são feitas). Registre as reposições recebendo um pedido de compra e o número se recupera sozinho; corrija diferenças de contagem com um ajuste manual, que fica guardado no histórico de movimentações."
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
        "text": "Compras, na barra lateral, reúne os fornecedores e os pedidos de compra. O cadastro do fornecedor guarda nome, pessoa de contato, telefone, endereço e a condição de pagamento padrão (à vista ou mensal)."
      },
      {
        "type": "steps",
        "items": [
          "Toque em Nova compra, escolha o fornecedor e adicione os produtos, as quantidades e os custos unitários (já preenchidos com o custo atual de cada produto). Também dá para incluir o valor do frete. Se o fornecedor ainda não estiver cadastrado, toque em Adicionar fornecedor no canto superior esquerdo da lista de fornecedores — o novo fornecedor volta direto para o pedido de compra.",
          "Um rascunho nunca mexe no estoque nem nas contas a pagar — edite ou exclua à vontade.",
          "Quando a mercadoria chegar, toque em Receber estoque: o estoque controlado aumenta, e o pedido de compra recebe seu número e é bloqueado. Por padrão, o recebimento também atualiza o custo de cada produto para este custo unitário; desative Sincronizar custo do produto no pedido de compra para manter os custos como estão."
        ]
      },
      {
        "type": "p",
        "text": "A condição de pagamento define o que acontece em seguida: pedidos à vista são marcados como pagos, enquanto os mensais ficam em aberto em Contas a pagar, onde você pode quitá-los por fornecedor — um pedido, o mês ou tudo de uma vez."
      },
      {
        "type": "note",
        "text": "Compras exige o plano Standard ou superior. Um fornecedor com pedidos recebidos e não pagos não pode ser excluído."
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
    "question": "Qual é a diferença entre Receita e Valor recebido?",
    "keywords": [
      "receita",
      "valor recebido",
      "receita da loja",
      "conferir caixa",
      "sinal",
      "venda a prazo"
    ],
    "content": [
      {
        "type": "p",
        "text": "A Receita conta no dia em que a mercadoria foi entregue; o Valor recebido conta no dia em que o dinheiro entrou. Em uma venda paga no balcão, os dois acontecem no mesmo dia e os números são iguais. Eles se separam quando:"
      },
      {
        "type": "list",
        "items": [
          "Venda a prazo: a mercadoria sai hoje e entra na receita de hoje; o dinheiro entra no Valor recebido no dia em que for quitado.",
          "Encomenda: o sinal entra no Valor recebido quando é pago; a receita é reconhecida por inteiro na data da retirada.",
          "Perda do sinal: quando o cliente cancela uma encomenda e você fica com o sinal, esse valor já havia sido contado no Valor recebido quando foi pago. O Resumo o mostra à parte como perda do sinal, e ele nunca entra na receita.",
          "Anulação de uma venda anterior: o dinheiro devolvido entra no Valor recebido no dia da anulação, então o Valor recebido desse dia pode ficar negativo, enquanto Anuladas conta a venda na data em que ela foi feita. O ⓘ nos blocos Valor recebido e Anuladas explica a mesma coisa."
        ]
      },
      {
        "type": "p",
        "text": "Para conferir o caixa, compare o Valor recebido com o dinheiro da gaveta e com a maquininha de cartão; para saber quanto você realmente vendeu em um período, olhe a Receita. As devoluções reduzem a receita no dia da devolução."
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
    "question": "Quais períodos os relatórios podem mostrar?",
    "keywords": [
      "relatórios",
      "período",
      "esta semana",
      "este mês",
      "este ano",
      "período personalizado",
      "data",
      "produtos mais vendidos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Escolha Hoje, Ontem, Esta semana, Este mês, Este ano ou Todo o período no topo do Resumo, ou use Personalizado para definir uma data inicial e uma final. Esta semana segue o primeiro dia da semana configurado no aparelho; Este mês e Este ano começam no dia 1º e em 1º de janeiro. Cada opção mostra as datas que cobre, e Todo o período começa na primeira venda da sua loja."
      },
      {
        "type": "p",
        "text": "Para um único dia, o gráfico de tendência vira um gráfico de barras por hora; períodos mais longos usam dias, semanas, meses ou anos por barra, conforme a duração."
      },
      {
        "type": "p",
        "text": "O card Ranking de produtos lista os 5 primeiros. Toque no card ou em Ver tudo para listar todos os produtos vendidos no período, ordenados pela quantidade após as devoluções."
      },
      {
        "type": "p",
        "text": "No plano Pro, a Comparação de vendas, à direita da barra de período, compara o período com o anterior ou com o mesmo período do ano passado — veja “O que mostram os relatórios avançados do plano Pro?”"
      },
      {
        "type": "note",
        "text": "Esses períodos de calendário chegaram na versão 2.4; as versões anteriores ofereciam intervalos móveis (Hoje / 7 dias / 30 dias / Todo o período). Se você ainda os vê, atualize o DingPOS pela App Store."
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
    "question": "O que mostram os relatórios avançados do plano Pro?",
    "keywords": [
      "relatórios avançados",
      "pro",
      "comparação de vendas",
      "ano passado",
      "mapa de calor",
      "horários de pico",
      "produtos parados",
      "valor do estoque",
      "taxa de recompra",
      "pontos"
    ],
    "content": [
      {
        "type": "p",
        "text": "Os relatórios avançados não são uma tela separada — ficam no próprio Resumo e acompanham o período escolhido no topo:"
      },
      {
        "type": "list",
        "items": [
          "Comparação de vendas: à direita da barra de período, compare com o mesmo período do ano passado ou com o período anterior (um único dia com o mesmo dia da semana passada, esta semana com a semana passada, este mês com o mês passado, este ano com o ano passado, um período personalizado com o mesmo número de dias imediatamente antes). O card Valor recebido mostra a diferença e a taxa de crescimento, e o gráfico de receita ganha uma linha mais clara para o período de comparação. Enquanto um período ainda está em andamento, o período de comparação é cortado no mesmo momento.",
          "Dia da semana × hora: troque o cabeçalho Vendas ao longo do tempo para Dia da semana × hora e veja um mapa de calor de sete dias por 24 horas — quanto mais escura a célula, mais você vendeu. Alterne entre receita e vendas; com uma comparação ativa, veja em quais horários houve alta e em quais houve queda.",
          "Produtos parados: troque o cabeçalho do card de ranking para Produtos parados para listar os produtos do que menos vendeu ao que mais vendeu, com o estoque atual e a data da última venda de cada um. Produtos que nunca foram vendidos aparecem como Nunca vendido. Por padrão, só aparecem produtos com estoque.",
          "Taxa de recompra: a última linha do card de clientes é a parcela dos membros que compraram no período e já compraram duas ou mais vezes no total.",
          "Agora: valor do estoque (estoque atual × custo atual), todas as movimentações de estoque no período selecionado e os pontos que os clientes têm e ainda não resgataram, com o desconto máximo que eles permitem. Esses valores são da posição atual; o período não os altera."
        ]
      },
      {
        "type": "p",
        "text": "Sem o Pro, cada um desses cinco pontos exibe um pequeno cadeado que abre uma explicação sobre o upgrade; todo o resto do Resumo funciona como antes. Os relatórios leem dados que sua loja já guarda, então, quando o Pro termina, apenas os relatórios ficam ocultos — nenhum dado é perdido."
      },
      {
        "type": "note",
        "text": "A equipe vê os relatórios avançados com a permissão Painel; os valores do estoque também exigem a permissão Custo e lucro."
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
    "question": "Como o lucro aparece nos relatórios se eu não informei os custos?",
    "keywords": [
      "custo",
      "lucro",
      "margem",
      "margem bruta",
      "relatórios",
      "lucro não calculável",
      "produto sem custo",
      "lucro calculável"
    ],
    "content": [
      {
        "type": "p",
        "text": "O custo é um campo opcional. Produtos sem custo ficam fora do lucro, mas a receita deles continua sendo contada por inteiro. O cartão Lucro calculável no Resumo mostra quantos produtos vendidos no período não têm custo; um custo de 0 conta como custo, então esses produtos não aparecem na lista."
      },
      {
        "type": "p",
        "text": "Toque no cartão ou em Ver produtos para abrir Produtos sem custo, ordenados pela receita que ficou fora do lucro. Toque em uma linha para abrir o produto, informe o custo em Editar e, ao voltar, a linha aparece marcada como Custo adicionado. Um produto com variantes só aparece como Custo adicionado quando todas as variantes vendidas sem custo passam a ter um — o próprio custo da variante ou o do produto, que ela segue."
      },
      {
        "type": "p",
        "text": "O lucro é a receita depois de todos os descontos (de item e de carrinho, promoções e resgate de pontos) e antes do imposto, menos o custo — por isso o campo se chama Custo sem impostos (opcional): informe o que você pagou antes do imposto. A margem é o lucro ÷ a receita sem imposto dos produtos que têm custo, então os produtos sem custo não puxam a margem para baixo. Uma devolução desfaz, no dia da devolução, o lucro que esses itens tinham gerado."
      },
      {
        "type": "note",
        "text": "Um custo que você informa afeta apenas as vendas futuras; as vendas já feitas não são recalculadas. Este cálculo chegou na v3.1: as versões anteriores só descontavam os descontos manuais de item e contavam o imposto incluso como lucro, então, depois de atualizar, períodos com descontos ou imposto incluso mostram um lucro menor. É uma correção, não perda de dados."
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
        "text": "Vá em Ajustes → Fidelidade e defina duas regras: quantos pontos o cliente ganha a cada X gasto e quantos pontos (N) valem M de desconto no resgate, com um limite de resgate por venda opcional. Você também pode dar um bônus de boas-vindas em pontos aos novos membros automaticamente."
      },
      {
        "type": "p",
        "text": "Selecione o membro na finalização da venda e os pontos são acumulados automaticamente; para resgatar, informe os pontos a usar. Anular uma venda reverte os pontos que ela gerou e devolve os pontos que foram resgatados."
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
    "slug": "import-csv",
    "category": "backup",
    "since": "2.3",
    "question": "Dá para importar produtos e vendas de outro PDV ou de uma planilha?",
    "keywords": [
      "importar",
      "csv",
      "excel",
      "planilha",
      "migrar",
      "trocar de PDV",
      "em massa",
      "histórico de vendas"
    ],
    "content": [
      {
        "type": "p",
        "text": "Sim. Vá em Ajustes → Importar dados, escolha se quer importar produtos ou vendas e selecione um arquivo CSV (o Excel e o Planilhas Google salvam em CSV)."
      },
      {
        "type": "steps",
        "items": [
          "O arquivo abre como uma tabela. Nomes de coluna comuns em inglês e chinês (tradicional ou simplificado) são reconhecidos automaticamente; toque no cabeçalho de qualquer coluna para mudar o mapeamento.",
          "Toque em qualquer célula para corrigir o valor ali mesmo — sem precisar editar o arquivo e recomeçar.",
          "Toque em Confirmar para validar. As linhas com problemas ficam marcadas em vermelho com o motivo; na importação de vendas, é possível pular as vendas com erro.",
          "Resolva o que exigir uma decisão (nomes de produto repetidos, uma linha que corresponde a vários clientes), confira o resumo e toque em Iniciar importação."
        ]
      },
      {
        "type": "list",
        "items": [
          "As vendas importadas são posicionadas pela data da venda e recalculadas com a moeda e o modo de imposto da sua loja. Elas não afetam o estoque e não dão pontos de boas-vindas.",
          "Os clientes são associados aos existentes por telefone ou e-mail; quem não for encontrado é criado.",
          "As vendas importadas mostram a data em que foram importadas e o nº de origem, e não podem ser anuladas nem devolvidas.",
          "As linhas com erro podem ser exportadas em um CSV com os motivos anotados — corrija e importe de novo. Linhas duplicadas são ignoradas automaticamente."
        ]
      },
      {
        "type": "note",
        "text": "A importação de dados está em beta. Cada arquivo pode ter até 50.000 linhas ou 20 MB. Faça um backup na nuvem antes de importar; se algo não for importado ou o resultado parecer errado, avise-nos em Relatar um problema na tela de importação."
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
          "Ações (ajuste manual de estoque, gestão de produtos, finalizar venda acima do limite de desconto): uma aprovação vale para aquela única ação.",
          "Telas (custo e lucro, Resumo, Ajustes, backup e restauração): a aprovação libera o acesso até o operador mudar ou o app ir para segundo plano.",
          "O limite de desconto vale para descontos manuais e é verificado uma vez, ao finalizar a venda; promoções automáticas e resgate de pontos não contam para ele."
        ]
      },
      {
        "type": "p",
        "text": "Padrões de fábrica: Gerentes podem tudo, exceto backup e restauração, e não têm limite de desconto; Funcionários precisam de aprovação para tudo, com limite de 10%. O proprietário sempre tem permissão e não pode ser editado. Para mudar, vá em Equipe → Permissões das funções, toque em Editar e salve uma vez — vale para todos imediatamente."
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
    "question": "Como ver quem anulou um pedido, ajustou o estoque ou mudou um preço?",
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
        "text": "Use o registro de atividades. Na página Equipe, toque em Registro de atividades no canto superior direito e digite o PIN do proprietário para ver as ações sensíveis da loja, das mais recentes às mais antigas: anulações, devoluções, ajustes manuais de estoque, aprovações, mudanças na equipe e nas permissões, trocas do PIN do proprietário, mudanças de preço e custo de produtos e exclusões de produtos. Vendas comuns não aparecem."
      },
      {
        "type": "list",
        "items": [
          "Cada registro mostra o que foi afetado, quem fez o quê e quando, e o resultado — por exemplo “M preço R$ 390 → R$ 350”.",
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
        "text": "Você tem 30 dias com todos os recursos do plano Pro desde a primeira instalação, incluindo contas de funcionários, permissões, registro de atividades e relatórios avançados — sem precisar criar conta."
      },
      {
        "type": "p",
        "text": "Assinar qualquer plano durante o teste encerra o teste na hora, e o plano contratado passa a valer a partir daí. Depois do teste, recursos Pro como funcionários e relatórios avançados continuam disponíveis só com a assinatura Pro."
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
        "text": "Os três planos incluem finalização de venda completa, produtos, vendas (com anulações, devoluções e trocas), relatórios e backup na nuvem. A diferença está nas ferramentas para tocar a loja:"
      },
      {
        "type": "list",
        "items": [
          "Lite: para quem trabalha sozinho em uma barraca e precisa finalizar vendas e cadastrar produtos.",
          "Standard: acrescenta promoções, pontos de fidelidade e níveis de membros, controle de estoque, compras, vendas a prazo, encomendas e estimativa de taxas de pagamento.",
          "Pro: acrescenta contas de funcionários e permissões, aprovação do gerente, registro de atividades, registros de restauração e relatórios avançados — para lojas com equipe."
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
        "text": "Brindes e adicionais pagos nunca alteram o carrinho por conta própria. Quando as condições são atendidas, aparece um banner de sugestão na tela do caixa, e o carrinho só muda quando o caixa toca em Escolher — é de propósito, porque brindes envolvem estoque físico: alguém precisa confirmar que o item está disponível e que o cliente o quer."
      },
      {
        "type": "list",
        "items": [
          "Depois de tocar em Recusar, a mesma sugestão não volta a aparecer para este carrinho; um carrinho novo ou esvaziado exibe a sugestão de novo.",
          "Se uma nova sugestão aparecer antes da confirmação na finalização da venda, ela precisa ser aceita ou recusada antes que a venda possa ser enviada.",
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
        "text": "Ainda não existe um relatório de fechamento mensal próprio, mas tudo o que você precisa para conferir as contas já está no app:"
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
        "text": "Se você precisa de um relatório de fechamento mensal que possa exportar ou imprimir, escreva para nós dizendo quais campos quer ver. Priorizamos o desenvolvimento pelo número de solicitações."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
