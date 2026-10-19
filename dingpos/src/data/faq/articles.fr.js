// Generated from en and the fr translations by scripts/l10n.mjs. Do not edit: translate through `npm run l10n -- sync fr`, then `npm run l10n -- apply fr`.

export const categories = [
  {
    "key": "getting-started",
    "icon": "bi-rocket-takeoff",
    "label": "Premiers pas",
    "group": "faq"
  },
  {
    "key": "checkout",
    "icon": "bi-basket3",
    "label": "Encaissement",
    "group": "faq"
  },
  {
    "key": "orders",
    "icon": "bi-receipt",
    "label": "Commandes et retours",
    "group": "faq"
  },
  {
    "key": "products",
    "icon": "bi-box-seam",
    "label": "Produits, inventaire et achats",
    "group": "faq"
  },
  {
    "key": "reports",
    "icon": "bi-bar-chart-line",
    "label": "Rapports",
    "group": "faq"
  },
  {
    "key": "promotion",
    "icon": "bi-tags",
    "label": "Promotions et fidélité",
    "group": "faq"
  },
  {
    "key": "backup",
    "icon": "bi-cloud-check",
    "label": "Sauvegarde et données",
    "group": "faq"
  },
  {
    "key": "staff",
    "icon": "bi-people",
    "label": "Personnel et permissions",
    "group": "faq"
  },
  {
    "key": "subscription",
    "icon": "bi-credit-card",
    "label": "Abonnement et facturation",
    "group": "faq"
  },
  {
    "key": "promotion-guide",
    "icon": "bi-mortarboard",
    "label": "Guides de configuration des promotions",
    "group": "guide"
  },
  {
    "key": "roadmap",
    "icon": "bi-signpost-split",
    "label": "Bientôt disponible",
    "group": "roadmap",
    "standalone": true
  }
];

export const articles = [
  {
    "slug": "how-to-set-up",
    "category": "getting-started",
    "question": "Comment configurer ma boutique dans DingPOS ?",
    "keywords": [
      "configuration",
      "démarrer",
      "premier lancement",
      "assistant de configuration",
      "ouvrir ma boutique",
      "prise en main"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dès la première ouverture de DingPOS, un assistant de configuration vous guide pour ouvrir votre boutique en une dizaine de minutes :"
      },
      {
        "type": "steps",
        "items": [
          "Choisissez votre pays : la devise, le mode de taxe et un taux de taxe par défaut sont renseignés automatiquement (le taux et le mode de taxe restent modifiables à cette étape).",
          "Saisissez le nom de votre boutique et, si vous le souhaitez, ajoutez son logo.",
          "Suivez le guide pour créer 3 à 5 produits (étape facultative : vous pourrez en ajouter plus tard)."
        ]
      },
      {
        "type": "p",
        "text": "Une fois terminé, vous entendez un « Ding! » : votre boutique est prête et vous pouvez encaisser vos premières ventes tout de suite."
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
    "question": "Une caisse sur iPad sans internet : DingPOS fonctionne-t-il hors ligne ?",
    "keywords": [
      "hors ligne",
      "sans internet",
      "wifi",
      "réseau",
      "sans connexion",
      "marché"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oui. DingPOS est conçu pour fonctionner sans connexion : l’encaissement, la gestion des produits, le stock et les rapports s’exécutent en local sur votre iPad, sans réseau. Marchés nocturnes, boutiques éphémères et autres lieux sans Wi-Fi ne posent aucun problème."
      },
      {
        "type": "p",
        "text": "Seules deux choses demandent une connexion : la sauvegarde dans le cloud (envoi vers votre propre iCloud, Google Drive ou Dropbox) et la vérification de l’état de l’abonnement."
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
    "question": "Faut-il créer un compte pour utiliser DingPOS ?",
    "keywords": [
      "compte",
      "inscription",
      "connexion",
      "créer un compte",
      "confidentialité"
    ],
    "content": [
      {
        "type": "p",
        "text": "Non. DingPOS n’a pas de système de comptes : téléchargez l’app et commencez à vendre. Vos produits, commandes et données clients restent sur votre iPad et ne sont jamais envoyés sur nos serveurs."
      },
      {
        "type": "p",
        "text": "Lorsque vous activez la sauvegarde dans le cloud, vous vous connectez à votre propre compte (iCloud, Google Drive ou Dropbox). Les sauvegardes sont stockées dans votre compte : nous n’y avons pas accès."
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
    "question": "Sur quels appareils DingPOS est-il compatible ?",
    "keywords": [
      "appareil",
      "iphone",
      "mac",
      "ipad",
      "compatibilité",
      "version"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS est actuellement compatible avec les iPad sous iPadOS 17 ou version ultérieure, conçus principalement pour une utilisation en mode paysage."
      },
      {
        "type": "p",
        "text": "L’iPhone et le Mac ne sont pas encore pris en charge. Si vous souhaitez que nous prenions en charge un autre appareil, écrivez-nous en décrivant votre usage."
      }
    ],
    "related": [
      "multi-device"
    ]
  },
  {
    "slug": "change-currency",
    "category": "getting-started",
    "question": "Peut-on changer la devise ou le mode de taxe après la configuration ?",
    "keywords": [
      "devise",
      "mode de taxe",
      "modifier",
      "verrouillé",
      "taux de taxe"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le taux de taxe peut être modifié à tout moment dans Réglages ; le nouveau taux ne s’applique qu’aux commandes à venir."
      },
      {
        "type": "p",
        "text": "La devise et le mode de taxe (TTC / HT) sont verrouillés une fois la configuration terminée. Toutes vos commandes passées ont été calculées avec eux : les changer en cours de route fausserait vos rapports."
      },
      {
        "type": "note",
        "text": "Si vous venez d’ouvrir votre boutique et n’avez pas encore de données importantes, vous pouvez supprimer l’app puis la réinstaller pour refaire la configuration. Vérifiez bien qu’il n’y a rien à conserver avant de la supprimer."
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
    "question": "Comment changer la langue de l’app DingPOS ?",
    "keywords": [
      "langue",
      "anglais",
      "chinois",
      "changer de langue",
      "région"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS est disponible en anglais et en chinois traditionnel. Allez dans Réglages → Préférences de l’appareil, puis touchez Langue de l’app. La page de DingPOS s’ouvre dans l’app Réglages de l’iPad, où vous choisissez la langue sous Langue."
      },
      {
        "type": "p",
        "text": "iOS ne permet pas aux apps d’ouvrir directement la liste des langues : la dernière étape se fait donc dans les réglages du système. La langue s’applique uniquement à cet iPad."
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
    "question": "Comment encaisser plusieurs clients en même temps ?",
    "keywords": [
      "paniers",
      "plusieurs clients",
      "mettre en attente",
      "changer de panier",
      "encaissement simultané",
      "file d’attente"
    ],
    "content": [
      {
        "type": "p",
        "text": "L’écran de caisse accepte jusqu’à 10 paniers en même temps. Touchez « + » dans la barre des paniers pour en ajouter un, puis touchez un onglet numéroté pour passer de l’un à l’autre."
      },
      {
        "type": "p",
        "text": "Chaque panier est calculé indépendamment. Pendant que le client A hésite encore, passez à un autre panier et encaissez d’abord le client B. Un panier disparaît automatiquement une fois son encaissement terminé."
      },
      {
        "type": "note",
        "text": "Les paniers ne sont conservés qu’en mémoire : ceux qui n’ont pas été encaissés sont effacés lorsque l’app est complètement fermée."
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
    "question": "Comment appliquer une remise sur une vente ?",
    "keywords": [
      "remise",
      "pourcentage",
      "montant fixe",
      "réduction",
      "rabais"
    ],
    "content": [
      {
        "type": "p",
        "text": "Les remises s’appliquent à deux niveaux, chacun en montant fixe ou en pourcentage :"
      },
      {
        "type": "list",
        "items": [
          "Remise sur article : touchez un article dans le panier → choisissez « Remise » → saisissez un montant ou un pourcentage.",
          "Remise sur le panier : touchez le bouton « Remise » sous le panier."
        ]
      },
      {
        "type": "p",
        "text": "Chaque article et chaque panier ne peut porter qu’une remise à la fois : en appliquer une nouvelle remplace la précédente, et toucher le badge de la remise la supprime. Les remises sont appliquées avant la taxe, selon l’ordre habituel du commerce de détail."
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
    "question": "Comment la taxe est-elle calculée ?",
    "keywords": [
      "taxe",
      "TVA",
      "TTC",
      "HT",
      "prix toutes taxes comprises",
      "ticket de caisse"
    ],
    "content": [
      {
        "type": "p",
        "text": "La taxe est calculée automatiquement selon le mode de taxe choisi lors de la configuration. Le ticket indique le montant de la taxe dans les deux modes :"
      },
      {
        "type": "list",
        "items": [
          "TTC : les prix incluent déjà la taxe — le total ne change pas et le ticket détaille la taxe comprise (courant à Taïwan, au Japon, etc.).",
          "HT : la taxe s’ajoute au montant après remise lors de l’encaissement (courant aux États-Unis, au Canada, etc.)."
        ]
      },
      {
        "type": "p",
        "text": "Ordre complet du calcul : remises sur article → remise sur le panier → taxe. Les montants sont arrondis à l’unité supérieure à partir de la moitié, selon les décimales de la devise (p. ex. 0 pour le TWD, 2 pour l’USD)."
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
    "question": "Quels moyens de paiement DingPOS prend-il en charge ?",
    "keywords": [
      "moyens de paiement",
      "espèces",
      "carte bancaire",
      "Line Pay",
      "monnaie",
      "libellé personnalisé",
      "en compte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Espèces, Carte bancaire et Line Pay sont intégrés, et vous pouvez ajouter tous les libellés de paiement personnalisés que vous voulez dans Réglages (p. ex. Apple Pay, portefeuilles locaux)."
      },
      {
        "type": "p",
        "text": "Les moyens de paiement sont de simples libellés de suivi : DingPOS ne traite aucun paiement réel. Encaissez les paiements par carte ou mobile avec votre terminal ou votre app habituels, puis choisissez le libellé correspondant dans DingPOS pour l’enregistrer. Les paiements en espèces calculent la monnaie automatiquement."
      },
      {
        "type": "p",
        "text": "Pour un habitué qui repart avec ses articles et paie plus tard, choisissez En compte : la vente est enregistrée comme une créance et réglée à l’arrivée de l’argent. Voir « Mes clients habituels peuvent-ils acheter en compte et payer plus tard ? »"
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
    "question": "Peut-on désactiver le « Ding » après l’encaissement ?",
    "keywords": [
      "son",
      "ding",
      "couper le son",
      "silencieux",
      "son d’encaissement"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oui. Allez dans Réglages → Préférences de l’appareil et désactivez Son d’encaissement. Dès la vente suivante, l’écran de confirmation reste silencieux, avec toujours le retour haptique."
      },
      {
        "type": "p",
        "text": "Ce réglage s’applique à cet iPad uniquement, et la restauration d’une sauvegarde dans le cloud ne le modifie pas."
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
    "question": "Si je modifie le prix d’un produit, le panier est-il mis à jour ?",
    "keywords": [
      "changement de prix",
      "modifier le prix",
      "panier",
      "recalcul"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le panier affiche le prix au moment où l’article a été ajouté. Lorsque vous touchez Encaisser pour confirmer, DingPOS relit le prix actuel de chaque article — si un prix a changé, une alerte vous indique les nouveaux prix avant de poursuivre."
      },
      {
        "type": "p",
        "text": "Les promotions sont elles aussi réévaluées entièrement à la confirmation. Si le total, la taxe ou le montant d’une remise change en conséquence, un récapitulatif des modifications s’affiche et vous devez confirmer de nouveau — le montant que vous voyez est ainsi exactement celui qui est enregistré."
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
    "question": "Peut-on cumuler remises manuelles et promotions ?",
    "keywords": [
      "remise manuelle",
      "promotion",
      "cumuler",
      "remplacer",
      "priorité"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oui. La règle est « le manuel l’emporte, chaque niveau reste indépendant » :"
      },
      {
        "type": "list",
        "items": [
          "Remise manuelle sur article : cette ligne ne reçoit plus de promotions au niveau de l’article — votre remise manuelle est considérée comme la décision finale prise sur place. Le montant de la ligne compte toutefois pour les seuils de dépense.",
          "Remise manuelle sur le panier : appliquée après le calcul de toutes les promotions, les deux coexistent. Si vous saisissez plus que le total restant, elle est plafonnée automatiquement avec un avertissement."
        ]
      },
      {
        "type": "p",
        "text": "Supprimer une remise manuelle rend à la ligne son éligibilité aux promotions dès la prochaine évaluation."
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
    "question": "Erreur à l’encaissement : comment invalider une commande ?",
    "keywords": [
      "invalider",
      "annuler une vente",
      "erreur de caisse",
      "mauvaise commande",
      "invalidation"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ouvrez Commandes, trouvez la commande, affichez son détail, puis choisissez Invalider. Confirmez, et c’est fait."
      },
      {
        "type": "p",
        "text": "L’invalidation annule automatiquement tout ce qui s’y rattache : le stock suivi est rétabli, les points de fidélité gagnés sur la commande sont repris et les points utilisés sont recrédités. Les commandes invalidées restent dans la liste, clairement signalées, et sont exclues du chiffre d’affaires des rapports."
      },
      {
        "type": "note",
        "text": "Une invalidation signifie « cette vente n’a jamais eu lieu » : utilisez-la pour une commande mal saisie sur le moment. Lorsqu’un client rapporte des articles plus tard, utilisez plutôt Retour : la commande d’origine est conservée, vous pouvez ne retourner qu’une partie des articles, et le chiffre d’affaires est réduit le jour du retour."
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
    "question": "Comment gérer un retour ou un échange en caisse ?",
    "keywords": [
      "retour",
      "échange",
      "remboursement",
      "retour partiel",
      "changer de taille"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ouvrez Commandes, affichez la commande d’origine, puis touchez Retour. Choisissez la quantité retournée pour chaque article. Pour un échange, touchez Ajouter un article de remplacement sur le même écran ; le solde net est réglé en une fois : positif, le client paie ; négatif, vous le remboursez ; nul, aucun argent ne change de mains."
      },
      {
        "type": "list",
        "items": [
          "La commande d’origine n’est jamais modifiée. Un retour crée son propre document daté du jour, numéroté avec le préfixe R, et le chiffre d’affaires est réduit le jour du retour.",
          "Le remboursement correspond à ce que le client a réellement payé pour l’article : remises sur article, remises sur le panier et utilisation de points sont déjà réparties, il n’est donc pas remboursé au prix catalogue. La taxe suit le taux appliqué à la commande d’origine.",
          "Les articles de remplacement sont facturés au prix du jour, sans promotion ni remise.",
          "Le stock suivi est rétabli automatiquement. Les points gagnés sur la commande d’origine sont repris, les points utilisés sont recrédités, et les articles de remplacement rapportent leurs propres points.",
          "Une commande peut être retournée en plusieurs fois, mais jamais au-delà de la quantité vendue à l’origine. Un retour ne restitue pas les limites d’utilisation des promotions."
        ]
      },
      {
        "type": "note",
        "text": "Les retours n’ont pas de limite de durée, mais la commande d’origine est indispensable. Si un retour a été saisi par erreur, invalidez-le : la quantité retournable est rétablie."
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
    "question": "Comment prendre une précommande avec acompte ?",
    "keywords": [
      "précommande",
      "acompte",
      "retrait",
      "solde",
      "réserver",
      "commande avec acompte"
    ],
    "content": [
      {
        "type": "p",
        "text": "À l’encaissement, faites passer le haut de l’écran de Vente à Précommande, choisissez la date de retrait, saisissez l’acompte (de 0 au montant total, avec les raccourcis 30 % / 50 % / total) et indiquez comment il est payé. Associez un client pour pouvoir le joindre à l’arrivée des articles."
      },
      {
        "type": "list",
        "items": [
          "Le stock est déduit dès l’enregistrement de la précommande, ce qui réserve les articles pour le client. Les articles en rupture passent en négatif et se rétablissent à la réception d’un bon de commande.",
          "Quand le client vient retirer sa commande, touchez Remettre dans le détail de la commande pour encaisser le solde. La commande devient alors une vente terminée ordinaire, et les retours ultérieurs suivent le parcours de retour habituel.",
          "Si le client ne vient jamais, touchez Annuler la commande dans le détail de la commande, puis choisissez de rembourser ou de conserver l’acompte. Le stock est remis.",
          "Le reçu d’acompte et le reçu final de retrait portent le même numéro."
        ]
      },
      {
        "type": "p",
        "text": "Dans Stats, le chiffre d’affaires d’une précommande est comptabilisé en totalité à la date de retrait, alors que l’acompte compte dans les encaissements le jour où il est payé : les deux chiffres diffèrent donc un temps. Voir « Quelle est la différence entre chiffre d’affaires et encaissements ? »"
      },
      {
        "type": "note",
        "text": "Les articles d’une précommande ne sont pas modifiables ; si le client change d’avis, annulez et créez une nouvelle précommande. La création de précommandes nécessite la formule Standard ou supérieure. Après un passage à une formule inférieure, les précommandes existantes peuvent encore être retirées ou annulées."
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
    "question": "Mes habitués peuvent-ils acheter en compte et payer plus tard ?",
    "keywords": [
      "vente en compte",
      "en compte",
      "payer plus tard",
      "crédit client",
      "ardoise",
      "créances",
      "règlement"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oui. Sélectionnez le client à l’encaissement et choisissez En compte comme mode de paiement. Une dette doit avoir un titulaire : En compte n’est donc pas disponible sans client."
      },
      {
        "type": "p",
        "text": "Pour encaisser, faites passer le haut de Commandes sur Créances. Les dettes sont regroupées par client ; ouvrez-en une pour régler une seule commande, un mois entier ou la totalité, DingPOS demandant à chaque fois comment l’argent a été payé. Une commande seule peut aussi être réglée depuis son détail, et un règlement saisi par erreur peut être annulé avec Annuler le règlement."
      },
      {
        "type": "list",
        "items": [
          "Le chiffre d’affaires est comptabilisé le jour où les articles sortent ; les encaissements et les points de fidélité attendent le jour du règlement.",
          "Les commandes non réglées portent un badge ambre dans la liste, et le détail du client indique combien il doit actuellement.",
          "Un client ayant des commandes non réglées ne peut pas être supprimé."
        ]
      },
      {
        "type": "note",
        "text": "La création de ventes en compte nécessite la formule Standard ou supérieure. Après un passage à une formule inférieure, vous ne pouvez plus en démarrer de nouvelles, mais les créances existantes restent consultables et réglables."
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
    "question": "Peut-on ajouter des notes aux commandes, aux clients ou aux bons de commande ?",
    "keywords": [
      "note",
      "notes",
      "mémo",
      "commentaire",
      "remarque"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oui. Les pages de détail d’une commande, d’un client et d’un bon de commande ont chacune une carte de notes : touchez-la pour modifier, jusqu’à 500 caractères. Vous pouvez aussi en écrire une dans le formulaire lors de la création d’un client ou d’un bon de commande."
      },
      {
        "type": "p",
        "text": "Les notes ne dépendent pas du statut : les commandes terminées, les commandes invalidées et les retours peuvent tous être annotés ou modifiés. Les montants et les articles d’une commande sont figés à l’encaissement ; la note accompagne le document sans jamais en changer le contenu."
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
    "question": "Comment créer des produits avec des variantes (taille, couleur) ?",
    "keywords": [
      "variantes",
      "taille",
      "couleur",
      "options",
      "déclinaisons",
      "caractéristiques"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dans la fiche du produit, touchez Ajouter une option sous Options de variantes pour créer une option (par ex. « Couleur »), puis « + Valeur » pour ajouter chacun de ses choix (par ex. Rouge, Bleu). Avec deux options ou plus (par ex. Couleur × Taille), DingPOS génère pour vous toutes les combinaisons (Rouge/S, Rouge/M, Bleu/S…)."
      },
      {
        "type": "p",
        "text": "Chaque combinaison a son propre prix et son propre coût, et suit son propre stock. À l’encaissement, toucher le produit affiche un sélecteur de variante avant l’ajout au panier."
      },
      {
        "type": "note",
        "text": "Les noms d’options et de valeurs sont limités à 20 caractères."
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
    "question": "Comment fonctionnent les codes-barres ?",
    "keywords": [
      "code-barres",
      "scanner",
      "scanneur",
      "doublon",
      "caméra",
      "lecteur de codes-barres"
    ],
    "content": [
      {
        "type": "p",
        "text": "Les codes-barres des produits peuvent être saisis à la main ou scannés avec la caméra. Un code-barres doit être unique : s’il est déjà utilisé par un autre produit lors de l’enregistrement, DingPOS vous indique de quel produit il s’agit."
      },
      {
        "type": "p",
        "text": "À l’encaissement, le champ de recherche trouve aussi bien les noms de produits que le début des codes-barres : saisissez un code-barres pour afficher le produit aussitôt. Pour les projets de lecteurs de codes-barres physiques, consultez « Les lecteurs de codes-barres physiques seront-ils pris en charge ? »"
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
    "question": "Comment changer l’ordre d’affichage des produits ?",
    "keywords": [
      "trier",
      "ordre",
      "réorganiser",
      "classer",
      "glisser",
      "épingler en premier"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dans Produits, touchez Modifier l’ordre manuel et faites glisser les fiches produits à l’endroit voulu. La caisse et la gestion des produits partagent cet unique ordre : le régler une fois met à jour les deux."
      },
      {
        "type": "list",
        "items": [
          "Avec un grand catalogue, le menu de chaque fiche propose Placer au début, Placer à la fin et Déplacer à la position, et chaque fiche affiche sa position actuelle.",
          "Filtrez d’abord par catégorie pour réorganiser uniquement cette catégorie : les produits des autres catégories restent à leur place.",
          "Les nouveaux produits passent au début ; modifier les détails d’un produit ne change jamais sa position."
        ]
      },
      {
        "type": "p",
        "text": "Pour trier un moment par nom, par prix ou par date de création ou de mise à jour, utilisez le menu Trier par. Votre ordre manuel est conservé : il suffit de revenir à Ordre manuel pour le retrouver."
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
    "question": "Comment suivre mon stock et mon inventaire ?",
    "keywords": [
      "inventaire",
      "stock",
      "suivi de stock",
      "comptage",
      "stock faible"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le suivi du stock s’active produit par produit : activez-le dans la fiche du produit et saisissez la quantité actuelle. Chaque variante d’un produit suit son propre stock."
      },
      {
        "type": "p",
        "text": "Une fois activé, les ventes et les précommandes déduisent le stock automatiquement ; les invalidations, les retours et les précommandes annulées le remettent ; la réception d’un bon de commande l’augmente ; et vous pouvez l’ajuster à la main à tout moment. Chaque mouvement est consigné dans un historique complet. Un stock faible est signalé par un avertissement en couleur."
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
    "question": "Pourquoi mon stock peut-il devenir négatif ?",
    "keywords": [
      "négatif",
      "stock",
      "rupture de stock",
      "blocage",
      "ajustement"
    ],
    "content": [
      {
        "type": "p",
        "text": "C’est voulu : l’encaissement n’est jamais bloqué par un stock insuffisant. La première règle d’une caisse en plein service, c’est que le client n’attend jamais : un chiffre erroné sur le papier se corrige plus tard, alors qu’une vente interrompue est perdue pour de bon."
      },
      {
        "type": "p",
        "text": "Un stock négatif signifie généralement qu’un réapprovisionnement n’a pas été enregistré, ou qu’un article précommandé n’est pas encore arrivé (les précommandes déduisent le stock dès leur création). Enregistrez les réapprovisionnements en réceptionnant un bon de commande et le chiffre se rétablit tout seul ; corrigez les écarts d’inventaire par un ajustement manuel, conservé dans l’historique des mouvements."
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
    "question": "Comment enregistrer mes achats et mes fournisseurs ?",
    "keywords": [
      "bon de commande",
      "achats",
      "fournisseur",
      "réception",
      "réapprovisionnement",
      "factures à payer"
    ],
    "content": [
      {
        "type": "p",
        "text": "Achats, dans la barre latérale, sert à gérer les fournisseurs et les bons de commande. Une fiche fournisseur contient un nom, un interlocuteur, un téléphone, une adresse et des conditions de paiement par défaut (paiement à la réception ou crédit mensuel)."
      },
      {
        "type": "steps",
        "items": [
          "Touchez Nouvel achat, choisissez le fournisseur, puis ajoutez les produits, les quantités et les coûts unitaires (préremplis avec le coût actuel de chaque produit). Des frais de livraison peuvent aussi être ajoutés. Si le fournisseur n’existe pas encore, touchez Ajouter un fournisseur en haut à gauche de la liste des fournisseurs : le nouveau fournisseur revient directement dans le bon de commande.",
          "Un brouillon n’affecte jamais le stock ni les sommes dues : modifiez-le ou supprimez-le librement.",
          "À l’arrivée de la marchandise, touchez Réceptionner le stock : le stock suivi augmente, et le bon de commande reçoit son numéro et se verrouille. Par défaut, la réception met aussi à jour le coût de chaque produit avec ce coût unitaire ; désactivez Synchroniser le coût des produits sur le bon de commande pour conserver les coûts inchangés."
        ]
      },
      {
        "type": "p",
        "text": "Les conditions de paiement déterminent la suite : les commandes à paiement à la réception sont marquées comme payées, tandis que les commandes à crédit mensuel restent non payées dans Factures impayées, où vous pouvez les régler par fournisseur : une commande, le mois en cours, ou tout."
      },
      {
        "type": "note",
        "text": "Les achats nécessitent la formule Standard ou supérieure. Un fournisseur ayant des commandes réceptionnées non payées ne peut pas être supprimé."
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
    "question": "Quelle différence entre chiffre d’affaires et encaissements ?",
    "keywords": [
      "chiffre d’affaires",
      "encaissements",
      "revenus",
      "rapprochement",
      "rapprocher la caisse",
      "acompte",
      "vente en compte"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le chiffre d’affaires est compté le jour où la marchandise est remise ; les encaissements sont comptés le jour où l’argent arrive. Pour une commande payée au comptoir, les deux tombent le même jour et les chiffres sont identiques. Ils se séparent dans les cas suivants :"
      },
      {
        "type": "list",
        "items": [
          "Vente en compte : la marchandise part aujourd’hui et compte dans le chiffre d’affaires du jour ; l’argent compte dans les encaissements le jour du règlement.",
          "Précommande : l’acompte compte dans les encaissements au moment où il est versé ; le chiffre d’affaires est comptabilisé en totalité à la date de retrait.",
          "Acompte conservé : lorsqu’un client annule une précommande et que vous gardez l’acompte, celui-ci était déjà compté dans les encaissements au moment du versement. Stats l’affiche à part, sous « Acomptes conservés », et il ne compte jamais dans le chiffre d’affaires."
        ]
      },
      {
        "type": "p",
        "text": "Pour rapprocher vos comptes, comparez les encaissements avec le tiroir-caisse et votre terminal de carte ; pour savoir combien vous avez réellement vendu sur une période, lisez le chiffre d’affaires. Les retours réduisent le chiffre d’affaires le jour du retour."
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
    "question": "Sur quelles périodes puis-je consulter mes rapports de ventes ?",
    "keywords": [
      "rapports",
      "période",
      "cette semaine",
      "ce mois-ci",
      "cette année",
      "période personnalisée",
      "dates",
      "top produits"
    ],
    "content": [
      {
        "type": "p",
        "text": "Choisissez Aujourd’hui, Hier, Cette semaine, Ce mois-ci, Cette année ou Toute la période en haut de Stats, ou utilisez Personnalisée pour définir une date de début et une date de fin. Cette semaine suit le premier jour de la semaine réglé sur l’appareil ; Ce mois-ci et Cette année commencent le 1er du mois et le 1er janvier. Chaque option affiche les dates qu’elle couvre, et Toute la période démarre à la première transaction de votre magasin."
      },
      {
        "type": "p",
        "text": "Pour une seule journée, le graphique d’évolution devient un histogramme par heure ; les périodes plus longues utilisent des jours, des semaines, des mois ou des années par barre selon leur durée."
      },
      {
        "type": "p",
        "text": "La carte Top produits affiche les 5 premiers. Touchez la carte ou Voir tout pour lister tous les produits vendus sur la période, classés par quantité après retours."
      },
      {
        "type": "p",
        "text": "Avec la formule Pro, Comparaison des ventes, à droite de la barre de période, compare la période avec la précédente ou avec la même période de l’an dernier — voir « Que montrent les rapports avancés Pro ? »"
      },
      {
        "type": "note",
        "text": "Ces périodes calendaires sont arrivées avec la v2.4 ; les versions antérieures proposaient des plages glissantes (Aujourd’hui / 7 jours / 30 jours / Toute la période). Si vous les voyez encore, mettez à jour DingPOS depuis l’App Store."
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
    "question": "Que montrent les rapports avancés Pro ?",
    "keywords": [
      "rapports avancés",
      "pro",
      "comparaison des ventes",
      "année dernière",
      "carte thermique",
      "heures de pointe",
      "produits à faible rotation",
      "valeur du stock",
      "taux de réachat",
      "points"
    ],
    "content": [
      {
        "type": "p",
        "text": "Les rapports avancés ne sont pas un écran séparé : ils se trouvent directement dans Stats et suivent la période choisie en haut :"
      },
      {
        "type": "list",
        "items": [
          "Comparaison des ventes : à droite de la barre de période, comparez avec la même période de l’an dernier ou avec la période précédente (une journée avec le même jour de la semaine dernière, cette semaine avec la semaine dernière, ce mois-ci avec le mois dernier, cette année avec l’an dernier, une période personnalisée avec le même nombre de jours qui la précèdent). La tuile Encaissements affiche l’écart et le taux de croissance, et le graphique du chiffre d’affaires ajoute une ligne plus claire pour la période de comparaison. Tant qu’une période n’est pas terminée, la période de comparaison est coupée au même moment.",
          "Jour × heure : faites passer l’en-tête Ventes dans le temps sur Jour × heure pour obtenir une carte thermique de sept jours sur 24 heures — plus une case est foncée, plus vous avez vendu. Basculez entre chiffre d’affaires et commandes ; avec une comparaison activée, repérez les heures en hausse et celles en baisse.",
          "Produits à faible rotation : faites passer l’en-tête de la carte de classement sur Produits à faible rotation pour lister les produits du moins vendu au plus vendu, avec le stock actuel et la date de la dernière vente de chacun. Les produits jamais vendus sont marqués Jamais vendu. Par défaut, seuls les produits en stock sont affichés.",
          "Taux de réachat : la dernière ligne de la tuile clients indique la part des membres ayant acheté sur la période et ayant acheté au moins deux fois au total.",
          "Situation actuelle : la valeur du stock (stock actuel × coût actuel), tous les mouvements de stock de la période sélectionnée, et les points que les clients détiennent sans les avoir utilisés, avec le montant maximal qu’ils permettent de déduire. Ce sont des soldes à l’instant T ; la période ne les modifie pas."
        ]
      },
      {
        "type": "p",
        "text": "Sans Pro, chacun de ces cinq emplacements porte un petit cadenas qui ouvre une explication de la mise à niveau ; tout le reste de Stats fonctionne comme avant. Les rapports lisent des données que votre magasin conserve déjà : quand Pro prend fin, seuls les rapports sont masqués — aucune donnée n’est perdue."
      },
      {
        "type": "note",
        "text": "Le personnel voit les rapports avancés avec la permission Tableau de bord ; les montants de la valeur du stock nécessitent aussi la permission Coûts et marges."
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
    "question": "Comment la marge est-elle calculée si je n’ai pas saisi les coûts ?",
    "keywords": [
      "coût",
      "marge",
      "marge brute",
      "bénéfice",
      "rapports",
      "marge non suivie"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le coût est un champ facultatif. Les produits sans coût sont marqués « marge non suivie » dans les rapports et exclus du calcul de la marge — le chiffre d’affaires est toujours compté en totalité, seule la marge est ignorée."
      },
      {
        "type": "p",
        "text": "Pour obtenir des rapports de marge complets, ajoutez les coûts sur la page de modification du produit ; les prochaines commandes seront prises en compte. La marge est calculée sur le chiffre d’affaires après remises."
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
    "question": "Comment créer une promotion ?",
    "keywords": [
      "promotion",
      "offre promotionnelle",
      "1 acheté 1 offert",
      "seuil de dépense",
      "happy hour",
      "code promo",
      "bon de réduction"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ouvrez Réglages → Promotions. Types de promotions pris en charge :"
      },
      {
        "type": "list",
        "items": [
          "Seuil de dépense : pour X dépensés, Y de remise ou Y % de remise.",
          "Offres « 1 acheté, 1 offert » et offres sur le énième article.",
          "Multiplicateurs de points bonus.",
          "Offres réservées à un niveau de membre ou au mois d’anniversaire.",
          "Achetez A, obtenez B ; extras payants et lots à prix fixe."
        ]
      },
      {
        "type": "p",
        "text": "Chaque promotion peut être planifiée (plages de happy hour, jours de la semaine précis, au-delà de minuit), limitée à certains produits et réglée avec la priorité, les règles de cumul et des limites d’utilisation. Les promotions éligibles s’appliquent automatiquement à l’encaissement, sans aucun code de réduction."
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
    "question": "Ma promotion ne s’applique pas : que vérifier ?",
    "keywords": [
      "promotion",
      "ne fonctionne pas",
      "non appliquée",
      "promotion qui ne s’applique pas",
      "dépannage"
    ],
    "content": [
      {
        "type": "p",
        "text": "Vérifiez les causes les plus fréquentes, dans cet ordre :"
      },
      {
        "type": "steps",
        "items": [
          "Planification : la date du jour est-elle comprise dans la période active ? Une plage de happy hour limite-t-elle le jour de la semaine ou l’heure ?",
          "Périmètre : les articles du panier relèvent-ils des produits ou des catégories visés par la promotion ? Le seuil de dépense est-il atteint ?",
          "Public : la promotion est-elle limitée à un niveau de membre ou au mois d’anniversaire ? Ce membre a-t-il bien été sélectionné à l’encaissement ?",
          "Limites d’utilisation : la limite totale, ou celle de ce client, est-elle atteinte ?",
          "Cumul : une promotion de priorité supérieure avec « Arrêter les promotions suivantes après celle-ci » la bloque-t-elle ?"
        ]
      },
      {
        "type": "p",
        "text": "Si tout est en ordre et que la promotion ne s’applique toujours pas, envoyez-nous par e-mail une capture d’écran des réglages de la promotion et nous vous aiderons à trouver la cause."
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
    "question": "Comment fonctionnent les points de fidélité ?",
    "keywords": [
      "points",
      "fidélité",
      "programme de fidélité",
      "récompenses",
      "utiliser des points",
      "points de bienvenue"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ouvrez Réglages → Programme de fidélité et définissez deux règles : gagner Y points pour X dépensés, et utiliser N points pour M de remise (avec, en option, un plafond d’utilisation par commande). Vous pouvez aussi offrir automatiquement des points de bienvenue aux nouveaux membres."
      },
      {
        "type": "p",
        "text": "Sélectionnez le membre à l’encaissement et les points s’accumulent automatiquement ; pour les utiliser, saisissez le nombre de points à déduire. L’invalidation d’une commande reprend les points qu’elle a fait gagner et restitue les points utilisés."
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
    "question": "À quoi servent les niveaux de membre ?",
    "keywords": [
      "niveau",
      "vip",
      "gold",
      "montée de niveau",
      "niveau de fidélité",
      "statut client"
    ],
    "content": [
      {
        "type": "p",
        "text": "Les niveaux de membre (par ex. Standard, Argent, Or) ont deux usages : les promotions peuvent les cibler (par ex. 10 % de remise réservés au niveau Or), et ils vous permettent de repérer d’un coup d’œil le statut d’un client à l’encaissement."
      },
      {
        "type": "p",
        "text": "Les niveaux peuvent évoluer automatiquement selon les règles que vous définissez (par ex. le cumul des dépenses) ou être attribués manuellement. Si une commande invalidée avait déclenché un changement de niveau, le niveau est automatiquement rétabli."
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
    "question": "Comment sauvegarder mes données ?",
    "keywords": [
      "sauvegarde",
      "sauvegarde cloud",
      "icloud",
      "google drive",
      "dropbox",
      "cloud",
      "instantané",
      "sauvegarder mes données"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ouvrez Réglages → Sauvegarde cloud, choisissez iCloud, Google Drive ou Dropbox, puis autorisez l’accès. Vous pouvez ensuite lancer une sauvegarde manuelle à tout moment. Pour iCloud, cet iPad doit être connecté à iCloud avec iCloud Drive activé, et DingPOS doit être autorisé à l’utiliser."
      },
      {
        "type": "p",
        "text": "Les sauvegardes sont enregistrées dans votre propre compte cloud. Chaque cloud ne conserve que la dernière : un instantané des données et un fichier de photos de produits, et chaque sauvegarde écrase la précédente."
      },
      {
        "type": "note",
        "text": "Comme une nouvelle sauvegarde remplace l’ancienne, si vous pensez que vos données sont déjà faussées (par exemple, un lot de produits supprimé par erreur), ne sauvegardez pas tout de suite : écrivez-nous et nous déterminerons ensemble la suite."
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
    "question": "La sauvegarde iCloud indique « Non connecté » : que faire ?",
    "keywords": [
      "icloud",
      "non connecté",
      "icloud drive",
      "échec de la sauvegarde",
      "connexion impossible"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS n’affiche iCloud comme connecté que s’il peut réellement l’utiliser. Si l’état est Non connecté, vérifiez trois points dans l’app Réglages de l’iPad :"
      },
      {
        "type": "steps",
        "items": [
          "Vous êtes connecté à votre compte Apple.",
          "iCloud Drive est activé.",
          "DingPOS est autorisé à utiliser iCloud Drive."
        ]
      },
      {
        "type": "p",
        "text": "Une fois les trois points activés, revenez à Sauvegarde cloud dans DingPOS : iCloud apparaît comme connecté. Les sauvegardes sont stockées dans le dossier propre à DingPOS dans iCloud Drive."
      },
      {
        "type": "note",
        "text": "Dans les versions antérieures à la v3.0, la sauvegarde iCloud ne fonctionnait pas et échouait systématiquement avec « Backup.SyncError error 0 ». Commencez par mettre à jour DingPOS depuis l’App Store."
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
    "question": "Comment transférer mes données vers un nouvel iPad ?",
    "keywords": [
      "transfert",
      "nouvel ipad",
      "restaurer",
      "migrer",
      "changer d’ipad",
      "déplacer"
    ],
    "content": [
      {
        "type": "steps",
        "items": [
          "Ancien iPad : ouvrez Réglages → Sauvegarde cloud et lancez une sauvegarde manuelle. Vérifiez que l’heure de la sauvegarde a été mise à jour.",
          "Nouvel iPad : installez DingPOS et terminez l’assistant de configuration.",
          "Nouvel iPad : ouvrez Réglages → Sauvegarde cloud, connectez le même compte cloud, puis restaurez."
        ]
      },
      {
        "type": "p",
        "text": "Appuyer sur Restaurer ouvre d’abord un aperçu : le nombre de produits, de commandes et de clients de cet iPad et de l’instantané côte à côte, ainsi que chaque commande que la restauration supprimerait. Rien ne change sur cet iPad avant votre confirmation. Si l’instantané a été créé par une version plus récente de DingPOS, l’app vous demande d’abord de la mettre à jour. Les photos de produits sont également restaurées."
      },
      {
        "type": "note",
        "text": "Une restauration remplace toutes les données de cet iPad par celles de la sauvegarde : les commandes créées sur cet iPad après cette sauvegarde seront perdues. Vérifiez que vous êtes connecté au bon compte cloud ; si vous restaurez le mauvais, utilisez Annuler la restauration."
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
    "question": "Mes données sont-elles conservées si je supprime l’app ?",
    "keywords": [
      "supprimer",
      "désinstaller",
      "perte de données",
      "supprimer l’app"
    ],
    "content": [
      {
        "type": "p",
        "text": "Non. DingPOS stocke tout en local sur votre appareil : supprimer l’app efface définitivement tous les produits, commandes, membres et réglages, sauf si vous avez activé la sauvegarde cloud."
      },
      {
        "type": "note",
        "text": "Avant de supprimer l’app, lancez toujours une sauvegarde manuelle et vérifiez qu’elle a réussi. Après la réinstallation, restaurez depuis le cloud."
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
    "question": "L’app affiche « Impossible d’ouvrir les données de votre boutique » : que faire ?",
    "keywords": [
      "impossible d’ouvrir",
      "ne s’ouvre pas",
      "plantage",
      "plante au lancement",
      "base de données",
      "données de la boutique"
    ],
    "content": [
      {
        "type": "p",
        "text": "Ne supprimez pas l’app. Cet écran signifie que DingPOS n’a pas pu lire les données de votre boutique, mais elles sont toujours sur cet iPad : supprimer l’app les supprimerait avec elle."
      },
      {
        "type": "p",
        "text": "Appuyez d’abord sur Réessayer ; si cela fonctionne, l’app s’ouvre normalement. Si le problème persiste, appuyez sur Contacter l’assistance et expliquez-nous la situation : nous vous aiderons à récupérer vos données. Cet écran ne déplace ni ne supprime jamais aucun fichier."
      },
      {
        "type": "note",
        "text": "La cause la plus fréquente est la fermeture de l’app en plein milieu d’une restauration. Avant la v3.0, l’app plantait alors à chaque lancement ; depuis la v3.0, elle s’arrête sur cet écran."
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
    "question": "Puis-je utiliser deux iPad ensemble ?",
    "keywords": [
      "deux ipad",
      "multi-appareils",
      "synchronisation",
      "partager",
      "deuxième caisse"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pour l’instant, les données de chaque iPad sont indépendantes : le partage en temps réel d’un même jeu de données entre deux appareils n’est pas encore pris en charge."
      },
      {
        "type": "p",
        "text": "Vous pouvez copier les données d’un iPad vers un autre grâce à la sauvegarde cloud (sauvegarde puis restauration), ce qui convient bien pour changer d’appareil ou préparer un deuxième iPad. En revanche, les commandes encaissées séparément sur chaque appareil ne sont pas fusionnées automatiquement. La synchronisation multi-appareils figure sur notre feuille de route."
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
    "question": "Puis-je importer mes produits et mes ventes depuis une autre caisse ou un tableur ?",
    "keywords": [
      "importer",
      "import",
      "csv",
      "excel",
      "tableur",
      "migration",
      "changer de caisse",
      "import en masse",
      "historique des ventes"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oui. Ouvrez Réglages → Import de données, choisissez d’importer des produits ou des ventes, puis sélectionnez un fichier CSV (Excel et Google Sheets peuvent tous deux enregistrer au format CSV)."
      },
      {
        "type": "steps",
        "items": [
          "Le fichier s’ouvre sous forme de tableau. Les noms de colonnes courants en anglais et en chinois sont reconnus automatiquement ; appuyez sur l’en-tête d’une colonne pour modifier sa correspondance.",
          "Appuyez sur une cellule pour corriger sa valeur sur place, sans devoir modifier le fichier et tout recommencer.",
          "Appuyez sur Confirmer pour lancer la vérification. Les lignes problématiques sont signalées en rouge avec le motif ; pour les ventes, vous pouvez ignorer les commandes en erreur.",
          "Réglez ce qui demande une décision (noms de produits en double, ligne correspondant à plusieurs clients), vérifiez le récapitulatif, puis appuyez sur Lancer l’importation."
        ]
      },
      {
        "type": "list",
        "items": [
          "Les ventes importées sont classées selon leur date de transaction et recalculées avec la devise et le mode de taxe de votre boutique. Elles n’affectent pas le stock et n’accordent pas de points de bienvenue.",
          "Les clients sont associés aux clients existants par téléphone ou e-mail ; ceux qui ne correspondent à personne sont créés.",
          "Les commandes importées affichent une date Importée le et le numéro de commande d’origine, et ne peuvent être ni invalidées ni retournées.",
          "Les lignes en erreur peuvent être exportées dans un CSV annoté des motifs : corrigez-les et importez à nouveau. Les lignes en double sont ignorées automatiquement."
        ]
      },
      {
        "type": "note",
        "text": "L’import de données est en version bêta. Chaque fichier peut contenir jusqu’à 50 000 lignes ou 20 Mo. Faites une sauvegarde cloud avant d’importer ; si un élément ne s’importe pas ou si le résultat semble faux, signalez-le-nous avec Signaler un problème sur l’écran d’import."
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
    "question": "J’ai restauré la mauvaise sauvegarde : puis-je annuler ?",
    "keywords": [
      "annuler la restauration",
      "restauration",
      "mauvais instantané",
      "journal des restaurations",
      "données perdues",
      "revenir en arrière"
    ],
    "content": [
      {
        "type": "p",
        "text": "Oui. Chaque restauration cloud conserve les données qu’elle a remplacées sous forme de copie avant restauration. Dans Réglages → Sauvegarde cloud, une carte indique quand la dernière restauration a eu lieu et d’où elle provenait. Appuyez sur Annuler la restauration, vérifiez l’aperçu et confirmez : les données reviennent à leur état d’avant la restauration et l’app se recharge."
      },
      {
        "type": "list",
        "items": [
          "Annuler la restauration est elle-même une restauration et conserve une autre copie de ce qu’elle remplace ; vous pouvez donc appuyer à nouveau dessus pour revenir en arrière.",
          "Seule la dernière copie est conservée ; la restauration suivante la remplace.",
          "Seules les données reviennent : les produits ajoutés après l’instantané affichent une image manquante."
        ]
      },
      {
        "type": "p",
        "text": "Pour voir qui a restauré, quand et depuis quel instantané, appuyez sur Consulter le journal des restaurations sur le même écran : vous y trouverez l’heure de chaque restauration, l’opérateur, la source, le nombre de produits, de commandes et de clients avant et après, ainsi que chaque commande supprimée. Le journal est conservé sur cet iPad et n’est jamais remplacé par une restauration."
      },
      {
        "type": "note",
        "text": "L’aperçu de restauration et Annuler la restauration sont disponibles avec toutes les formules ; la consultation du journal des restaurations est une fonction Pro. Les entrées sont aussi enregistrées sans Pro (simplement sans opérateur) : si vous passez à Pro plus tard, vous les verrez toutes."
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
    "question": "Comment ajouter du personnel et changer de personne à la caisse ?",
    "keywords": [
      "personnel",
      "employé",
      "responsable",
      "compte",
      "code PIN",
      "opérateur",
      "changer d’opérateur",
      "changement d’équipe",
      "caissier",
      "ajouter un employé"
    ],
    "content": [
      {
        "type": "p",
        "text": "Touchez Personnel dans la barre latérale. La première fois, configurez le propriétaire : un nom et un code PIN à 4 chiffres. Ajouter du personnel et modifier les permissions demandent tous deux ce code PIN ; retenez-le bien, il ne peut pas être réinitialisé."
      },
      {
        "type": "steps",
        "items": [
          "Sur la page Personnel, touchez Ajouter du personnel, saisissez un nom, choisissez un rôle (Responsable ou Personnel) et définissez un code PIN à 4 chiffres.",
          "L’opérateur en cours s’affiche en bas de la barre latérale et en haut à droite de l’encaissement. Au changement d’équipe, touchez-le, choisissez votre nom et saisissez votre code PIN.",
          "Dès lors, chaque commande, paiement et mouvement de stock ou de points enregistre la personne qui l’a effectué, visible dans la liste et le détail des commandes ; les commandes invalidées enregistrent aussi qui les a invalidées."
        ]
      },
      {
        "type": "p",
        "text": "Quand quelqu’un quitte votre commerce, utilisez Désactiver ce membre du personnel : son historique reste intact et vous pouvez le réactiver plus tard. Renommer une personne ne modifie pas les anciennes commandes, qui gardent le nom d’alors."
      },
      {
        "type": "note",
        "text": "Personnel est une fonction Pro (également disponible pendant l’essai). Si Pro prend fin, les données du personnel et la personne associée à chaque commande sont conservées, et les nouvelles commandes sont enregistrées au nom du propriétaire ; en vous réabonnant à Pro, tout est rétabli."
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
    "question": "Que faire si j’ai oublié le code PIN du propriétaire ?",
    "keywords": [
      "code PIN",
      "oublié",
      "mot de passe",
      "réinitialiser",
      "propriétaire",
      "récupérer",
      "accès bloqué"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le code PIN du propriétaire ne peut pas être réinitialisé, et notre équipe d’assistance n’a aucun moyen de le débloquer. Le code PIN est enregistré avec les données de votre boutique : supprimer puis réinstaller l’application, et restaurer depuis le cloud, rétablit donc le même code PIN."
      },
      {
        "type": "p",
        "text": "La création du propriétaire et chaque changement de son code PIN affichent l’avertissement « Retenez ce code PIN. Si vous l’oubliez, il ne pourra pas être réinitialisé. » Conservez-le à un endroit que vous seul pouvez consulter."
      },
      {
        "type": "p",
        "text": "Sans le code PIN du propriétaire, tout ce qui l’exige reste inaccessible : ajouter ou modifier du personnel, changer les permissions des rôles et consulter le journal d’activité. Le personnel peut continuer à encaisser et à travailler au quotidien avec son propre code PIN."
      },
      {
        "type": "note",
        "text": "Si un membre du personnel oublie son code PIN, ce n’est pas grave : le propriétaire peut le réinitialiser dans Personnel."
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
    "question": "Comment fonctionnent les permissions du personnel et les approbations d’un responsable ?",
    "keywords": [
      "permissions",
      "approbation",
      "responsable",
      "plafond de remise",
      "personnel",
      "coût",
      "rôle"
    ],
    "content": [
      {
        "type": "p",
        "text": "Une permission a deux valeurs : Autorisé ou Approbation requise ; rien n’est purement interdit. Quand un membre du personnel tente une action qui demande une approbation, un collègue autorisé à l’effectuer choisit son nom et saisit son code PIN pour la valider."
      },
      {
        "type": "list",
        "items": [
          "Actions (ajustement manuel du stock, gestion des produits, encaissement au-delà du plafond de remise) : une approbation couvre cette seule action.",
          "Consultations (coût et marge, Stats, Réglages, sauvegarde et restauration) : une approbation déverrouille l’accès jusqu’au changement d’opérateur ou jusqu’à ce que l’app passe en arrière-plan.",
          "Le plafond de remise s’applique aux remises manuelles et est vérifié une seule fois à l’encaissement ; les promotions automatiques et l’utilisation de points n’y comptent pas."
        ]
      },
      {
        "type": "p",
        "text": "Valeurs par défaut : les Responsables sont autorisés à tout sauf à la sauvegarde et à la restauration, sans plafond de remise ; le Personnel a besoin d’une approbation pour tout, avec un plafond de 10 %. Le propriétaire est toujours autorisé et ne peut pas être modifié. Pour changer cela, allez dans Personnel → Permissions des rôles, touchez Modifier et enregistrez une fois : le changement s’applique immédiatement à tout le monde."
      },
      {
        "type": "note",
        "text": "Les invalidations, les retours, les ventes en compte et les achats n’ont volontairement aucune permission ; ils enregistrent seulement qui les a effectués. Pour les consulter ensuite, utilisez le journal d’activité."
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
    "question": "Comment savoir qui a invalidé une commande, ajusté le stock ou modifié un prix ?",
    "keywords": [
      "journal d’activité",
      "audit",
      "qui a modifié",
      "invalidation",
      "changement de prix",
      "ajustement de stock",
      "produit supprimé",
      "approbations",
      "journal"
    ],
    "content": [
      {
        "type": "p",
        "text": "Utilisez le journal d’activité. Sur la page Personnel, touchez Journal d’activité en haut à droite et saisissez le code PIN du propriétaire pour voir les actions sensibles de la boutique, les plus récentes en premier : invalidations, retours, ajustements manuels du stock, approbations, modifications du personnel et des permissions, changements du code PIN du propriétaire, changements de prix et de coût des produits, et suppressions de produits. Les encaissements ordinaires n’y figurent pas."
      },
      {
        "type": "list",
        "items": [
          "Chaque entrée indique ce qui a été touché, qui a fait quoi et quand, ainsi que le résultat, par exemple « M prix 390 $ → 350 $ ».",
          "Filtrez par membre du personnel (y compris les personnes désactivées), par type d’action et par Aujourd’hui / Cette semaine / Ce mois-ci.",
          "Touchez une entrée qui renvoie à une commande, un produit ou un client pour ouvrir son détail.",
          "Le détail d’une commande, d’un produit et la page de chaque membre du personnel ont leur propre entrée, qui ne liste que les enregistrements les concernant.",
          "Les produits supprimés gardent leur nom et leur prix d’alors dans le journal."
        ]
      },
      {
        "type": "note",
        "text": "Toutes les formules enregistrent ; seule la consultation est une fonction Pro, donc les enregistrements faits pendant que Pro était interrompu apparaissent dès que vous vous réabonnez. Le journal est inclus dans vos sauvegardes dans le cloud."
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
    "question": "Comment fonctionne l'essai gratuit de DingPOS ?",
    "keywords": [
      "essai gratuit",
      "gratuit",
      "30 jours",
      "période d'essai"
    ],
    "content": [
      {
        "type": "p",
        "text": "Dès la première installation, vous profitez pendant 30 jours de toutes les fonctions de la formule Pro, dont les comptes du personnel, les permissions, le journal d'activité et les rapports avancés, sans créer de compte."
      },
      {
        "type": "p",
        "text": "Si vous souscrivez à une formule pendant l'essai, celui-ci prend fin immédiatement et la formule achetée s'applique dès lors. Après l'essai, les fonctions Pro comme le personnel et les rapports avancés ne restent disponibles qu'avec un abonnement Pro."
      },
      {
        "type": "p",
        "text": "Tout ce que vous créez pendant l'essai (produits, commandes, membres) est conservé intégralement. Vos données ne sont jamais supprimées, que vous vous abonniez ensuite ou non."
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
    "question": "Perd-on ses données à la fin de l'essai gratuit ?",
    "keywords": [
      "expiration",
      "fin de l'essai",
      "encaissement verrouillé",
      "données"
    ],
    "content": [
      {
        "type": "p",
        "text": "Non, vos données restent à jamais sur votre appareil. À la fin de l'essai, l'encaissement est verrouillé, mais vous pouvez toujours consulter les commandes, afficher les rapports et gérer les produits."
      },
      {
        "type": "p",
        "text": "Abonnez-vous quand vous voulez : l'encaissement se déverrouille aussitôt, avec toutes vos données exactement comme vous les avez laissées."
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
    "question": "Quelle différence entre les formules Lite, Standard et Pro ?",
    "keywords": [
      "formules",
      "lite",
      "standard",
      "pro",
      "différence",
      "comparer",
      "mettre à niveau",
      "rétrograder",
      "tarifs"
    ],
    "content": [
      {
        "type": "p",
        "text": "Les trois formules comprennent l'encaissement complet, les produits, les commandes (avec invalidations, retours et échanges), les rapports et la sauvegarde dans le cloud. Elles se distinguent par les outils pour gérer votre boutique :"
      },
      {
        "type": "list",
        "items": [
          "Lite : pour une personne qui tient seule un stand et a besoin de l'encaissement et des produits.",
          "Standard : ajoute les promotions, les points de fidélité et les niveaux, le suivi du stock, les achats, les ventes en compte et les précommandes.",
          "Pro : ajoute les comptes du personnel et les permissions, l'approbation, le journal d'activité, le journal des restaurations et les rapports avancés, pour les boutiques avec du personnel."
        ]
      },
      {
        "type": "p",
        "text": "Vous avez déjà la formule Standard ? Passez à Pro depuis la page Abonnement : la facturation garde le même cycle, le changement prend effet immédiatement et Apple calcule le prorata de la différence. Le retour de Pro à Standard prend effet au renouvellement. Les prix s'affichent dans l'application, et vous pouvez comparer les formules sur notre page Tarifs."
      },
      {
        "type": "note",
        "text": "Passer à une formule inférieure ne supprime jamais de données. Les fonctions au-delà de votre formule sont suspendues, les données restent, et un nouvel abonnement les réactive."
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
    "question": "Comment s'abonner, résilier ou restaurer un achat ?",
    "keywords": [
      "s'abonner",
      "résilier",
      "annuler l'abonnement",
      "restaurer les achats",
      "prix",
      "facturation"
    ],
    "content": [
      {
        "type": "p",
        "text": "Les abonnements passent par l'achat intégré de l'App Store : les formules et les prix s'affichent dans l'application. Le paiement est traité par Apple ; nous ne voyons jamais vos données de paiement."
      },
      {
        "type": "list",
        "items": [
          "Résilier : gérez-le dans Réglages → Compte Apple → Abonnements de votre appareil. Résiliez au moins 24 heures avant la fin de la période en cours pour éviter le renouvellement.",
          "Restaurer : après un changement d'appareil ou une réinstallation, touchez « Restaurer les achats » sur la page Abonnement de DingPOS.",
          "Changer de formule : choisissez la nouvelle formule sur la page Abonnement de DingPOS. Les passages à une formule supérieure (de Standard à Pro, de mensuel à annuel) prennent effet immédiatement, Apple calculant le prorata de la différence ; les passages à une formule inférieure prennent effet au renouvellement."
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
    "question": "Comment configurer une remise au seuil de dépenses ?",
    "keywords": [
      "seuil",
      "seuil de dépenses",
      "remise dès X d’achat",
      "guide de configuration",
      "configuration"
    ],
    "content": [
      {
        "type": "p",
        "text": "Allez dans Réglages → Promotions → Nouvelle promotion, choisissez le type à seuil de dépenses, puis :"
      },
      {
        "type": "steps",
        "items": [
          "Définissez le montant du seuil et la remise (montant fixe ou pourcentage).",
          "Choisissez le périmètre : produits précis, catégories précises, ou laissez vide pour toute la boutique.",
          "Définissez la planification : la date de début est obligatoire ; laissez la date de fin vide pour une promotion sans limite de durée.",
          "Enregistrez — la promotion s’active à la date prévue et s’applique automatiquement à l’encaissement, sans code."
        ]
      },
      {
        "type": "note",
        "text": "Le seuil est vérifié sur le sous-total des articles concernés, pas sur tout le panier. Une promotion « 1 000 $ d’achats en Boissons » ne compte que les boissons pour atteindre le seuil, et les produits marqués « exclure des promotions » ne comptent jamais."
      },
      {
        "type": "p",
        "text": "Un comportement revient souvent dans vos questions : si une promotion de priorité supérieure s’applique en premier, le seuil est vérifié sur le montant déjà remisé — un panier qui semble dépasser le seuil peut donc passer juste en dessous. Pour que le seuil soit évalué en premier, donnez-lui un numéro de priorité plus petit."
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
    "question": "Comment configurer une offre « 1 acheté, 1 offert » ou « le 3e offert » ?",
    "keywords": [
      "1 acheté 1 offert",
      "2 achetés 1 offert",
      "le 3e article offert",
      "X acheté Y offert",
      "guide de configuration"
    ],
    "content": [
      {
        "type": "p",
        "text": "Créez une promotion de type « X acheté / Y offert » : indiquez combien d’articles acheter, combien obtenir et le pourcentage de remise (100 % = gratuit). Limitez-la à des produits précis ou à une catégorie entière — des produits différents d’une même catégorie sont regroupés ensemble."
      },
      {
        "type": "list",
        "items": [
          "L’article remisé est le moins cher du groupe, valorisé à son prix effectif actuel — si une promotion précédente l’a déjà remisé, la remise « offert » se calcule sur le prix remisé, et non sur le prix catalogue.",
          "Pour que le badge « 3e article offert » affiche le prix catalogue complet, donnez à cette offre le plus petit numéro de priorité afin qu’elle soit calculée en premier. Quand une remise sur tout le panier passe d’abord, la déduction affichée pour l’article offert est inférieure au prix catalogue — c’est une propriété de l’ordre de calcul, que nous avons largement vérifiée, et non un bug. Les deux ordres aboutissent à un total presque identique ; seul change l’endroit où la remise apparaît."
        ]
      },
      {
        "type": "p",
        "text": "Astuce : placez votre offre phare en tête des priorités pour que le détail des remises sur le reçu corresponde à votre message commercial."
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
    "question": "Comment configurer un multiplicateur de points bonus ?",
    "keywords": [
      "multiplicateur de points",
      "points doublés",
      "double points",
      "guide de configuration"
    ],
    "content": [
      {
        "type": "p",
        "text": "Créez une promotion de type multiplicateur de points et définissez le multiplicateur (un entier supérieur ou égal à 2). Vous pouvez ajouter un seuil de dépenses (par ex. 500 $ d’achats → points doublés) et une planification (par ex. le samedi uniquement)."
      },
      {
        "type": "list",
        "items": [
          "Quand plusieurs multiplicateurs sont applicables en même temps, seul le plus élevé s’applique — ils ne se multiplient ni ne se cumulent jamais.",
          "Le seuil de dépenses est vérifié après l’utilisation des points : si l’utilisation de points fait passer le total sous le seuil, le multiplicateur ne se déclenche pas cette fois-ci.",
          "Un membre doit être sélectionné à l’encaissement pour que les points soient acquis — les commandes sans membre ne rapportent aucun point, le multiplicateur n’a donc rien à multiplier."
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
    "question": "Comment configurer des offres par niveau de membre ou pour les anniversaires ?",
    "keywords": [
      "niveau de membre",
      "anniversaire",
      "offre anniversaire",
      "VIP",
      "guide de configuration"
    ],
    "content": [
      {
        "type": "p",
        "text": "Créez d’abord les niveaux dans Réglages → Niveaux de membre (par ex. Or), puis ciblez la promotion sur ce niveau. Pour une offre anniversaire, réglez la condition sur « Mois d’anniversaire »."
      },
      {
        "type": "list",
        "items": [
          "Le membre doit être sélectionné à l’encaissement pour que l’offre se déclenche — l’éligibilité est évaluée d’après le membre actuellement sélectionné.",
          "L’éligibilité anniversaire s’appuie sur le mois d’anniversaire du membre : renseignez donc le champ Anniversaire ; un membre sans date d’anniversaire n’est jamais considéré comme un client en période d’anniversaire.",
          "Les changements de niveau automatiques sont évalués à la fin de l’encaissement ; si la commande est invalidée, un changement de niveau qu’elle avait déclenché est annulé automatiquement."
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
    "question": "Comment configurer un cadeau, un extra payant ou un lot à prix fixe ?",
    "keywords": [
      "cadeau",
      "cadeau offert",
      "extra payant",
      "lot à prix fixe",
      "X acheté cadeau offert"
    ],
    "content": [
      {
        "type": "p",
        "text": "Trois types d’offres composées sont disponibles : cadeau avec achat (A acheté, B offert), extra payant (ajoutez X $ pour obtenir Y) et lot à prix fixe (N articles au choix pour X $). Les cadeaux et les extras payants attendent la confirmation du caissier ; les lots à prix fixe s’appliquent automatiquement."
      },
      {
        "type": "p",
        "text": "Les cadeaux et les extras payants ne modifient jamais le panier d’eux-mêmes. Lorsque les conditions sont remplies, un bandeau de suggestion apparaît sur l’écran de la caisse, et le panier ne change que lorsque le caissier touche Accepter — c’est voulu, car les cadeaux concernent du stock physique : quelqu’un doit vérifier qu’il est disponible et que le client en veut."
      },
      {
        "type": "list",
        "items": [
          "Après Refuser, la même suggestion ne réapparaît plus pour ce panier ; un nouveau panier, ou un panier vidé, la propose de nouveau.",
          "Si une nouvelle suggestion apparaît avant la confirmation de l’encaissement, il faut l’accepter ou la refuser avant de pouvoir valider la commande.",
          "Les lignes de cadeau et d’extra ne peuvent plus recevoir d’autres remises, et ne comptent pas dans les seuils des autres promotions."
        ]
      },
      {
        "type": "p",
        "text": "Lots à prix fixe (appliqués automatiquement depuis la v2.4) : dès que le panier permet de former un lot, DingPOS le regroupe et l’inclut dans le total — sans confirmation, et les lots ne peuvent pas être scindés."
      },
      {
        "type": "list",
        "items": [
          "Un lot n’est formé que s’il rend le panier moins cher. À prix égal, les articles non remisés sont regroupés en premier, et les articles déjà remisés conservent leur remise.",
          "Les articles regroupés ne dépendent que du contenu du panier, jamais de l’ordre dans lequel ils ont été scannés.",
          "Chaque article du lot affiche sa part de la remise du lot, et le montant de chaque ligne est calculé après remises.",
          "À l’encaissement, les lots sont regroupés de nouveau avec les prix les plus récents ; si le résultat change, on vous demande de confirmer le nouveau total."
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
    "question": "Comment programmer une promotion et configurer une Happy Hour ?",
    "keywords": [
      "planification",
      "Happy Hour",
      "jours de la semaine",
      "minuit",
      "guide de configuration"
    ],
    "content": [
      {
        "type": "p",
        "text": "La planification de chaque promotion comporte trois niveaux : une plage de dates (début obligatoire, fin facultative), une plage horaire quotidienne (Happy Hour) et des jours de la semaine. Les trois doivent correspondre pour que la promotion se déclenche."
      },
      {
        "type": "list",
        "items": [
          "Pour les plages qui passent minuit (par ex. 22:00–02:00), le jour est déterminé par celui où la plage commence : si seul le vendredi est sélectionné, samedi à 01:30 compte encore dans la session du vendredi et la promotion se déclenche — mais pas samedi à 23:30.",
          "La date de fin est une coupure stricte — même si une plage de Happy Hour est encore en cours, la promotion s’arrête dès que la date de fin est passée.",
          "L’heure est lue sur l’horloge de l’iPad : vérifiez que le fuseau horaire et l’heure de l’appareil sont corrects."
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
    "question": "Priorité, cumul et « arrêter après » : comment ça marche ?",
    "keywords": [
      "priorité",
      "cumul",
      "cumulable",
      "arrêter les promotions suivantes",
      "conflit entre promotions"
    ],
    "content": [
      {
        "type": "p",
        "text": "Quand plusieurs promotions s’appliquent en même temps, trois réglages déterminent l’ordre et leur interaction :"
      },
      {
        "type": "list",
        "items": [
          "Priorité : les numéros les plus petits sont calculés en premier. Faites glisser pour réorganiser dans la liste des promotions.",
          "Cumulable avec d’autres promotions (activé par défaut) : lorsqu’il est désactivé, une promotion sur article ne verrouille que les lignes qu’elle a remisées — les autres articles peuvent encore recevoir des promotions sur article ultérieures ; une promotion sur le panier non cumulable bloque toutes les promotions sur le panier suivantes.",
          "Arrêter les promotions suivantes après celle-ci : une fois cette promotion appliquée, plus aucune remise monétaire n’est calculée — mais les multiplicateurs de points et les suggestions de cadeau ne sont pas touchés."
        ]
      },
      {
        "type": "note",
        "text": "Les promotions suivantes se calculent sur le montant déjà remisé : 10 % de remise plus 5 % de remise ne font pas 15 % — la seconde remise s’applique au total obtenu après la première. DingPOS ne cherche jamais non plus la combinaison la plus avantageuse pour le client ; l’ordre est entièrement déterminé par vos priorités."
      },
      {
        "type": "p",
        "text": "À savoir : si une remise est arrondie à zéro, l’application n’est pas comptée — et ne consomme pas de limite d’utilisation."
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
    "question": "L'encaissement par carte bancaire sera-t-il intégré à DingPOS ?",
    "keywords": [
      "paiement",
      "encaissement par carte",
      "terminal de paiement",
      "intégration",
      "carte bancaire"
    ],
    "content": [
      {
        "type": "p",
        "text": "DingPOS n'intervient pas pour l'instant dans le flux d'argent : les modes de paiement ne sont que des libellés comptables, et les paiements réels passent par votre terminal ou votre application de paiement habituels."
      },
      {
        "type": "p",
        "text": "L'intégration d'un service de paiement dépendra de la demande réelle des utilisateurs. Si elle vous serait utile, écrivez-nous en précisant le service à connecter (quel prestataire, quel terminal) et votre cas d'usage : nous donnons la priorité aux développements selon le nombre de demandes."
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
    "question": "DingPOS permettra-t-il la facturation électronique ou l'impression de tickets de caisse ?",
    "keywords": [
      "facture électronique",
      "facture",
      "ticket de caisse",
      "imprimante",
      "imprimante de tickets"
    ],
    "content": [
      {
        "type": "p",
        "text": "Pas encore. La facturation électronique et l'impression de tickets demandent d'acheter des machines à factures et des imprimantes de tickets pour les tester et développer, ce qui représente un coût important. Notre équipe étant petite, nous le prévoirons lorsque le nombre d'utilisateurs aura grandi et que nos revenus seront stables."
      },
      {
        "type": "p",
        "text": "Si vous en avez besoin, écrivez-nous en indiquant le modèle de machine que vous utilisez : nous donnons la priorité aux développements selon le nombre de demandes."
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
    "question": "Peut-on utiliser une douchette code-barres avec DingPOS ?",
    "keywords": [
      "douchette code-barres",
      "lecteur de codes-barres",
      "scanner",
      "bluetooth",
      "usb",
      "matériel"
    ],
    "content": [
      {
        "type": "p",
        "text": "Le scan de codes-barres avec l'appareil photo est déjà disponible pour créer vos produits. Les lecteurs physiques (USB / Bluetooth) ne sont pas encore officiellement pris en charge : comme les autres fonctions matérielles, ils nécessitent d'acheter des appareils pour les tester et les développer, et seront prévus à mesure que le nombre d'utilisateurs grandira."
      },
      {
        "type": "note",
        "text": "Le champ de recherche de l'encaissement reconnaît les codes-barres : une douchette en mode clavier pourrait donc, en théorie, y saisir le code et afficher le produit. Nous ne l'avons toutefois pas vérifié sur du matériel réel, ce n'est donc pas officiellement pris en charge. Si vous avez testé une douchette qui fonctionne, indiquez-nous son modèle !"
      },
      {
        "type": "p",
        "text": "Si vous en avez besoin, écrivez-nous : nous donnons la priorité aux développements selon le nombre de demandes."
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
    "question": "Existe-t-il un bilan mensuel de règlement dans DingPOS ?",
    "keywords": [
      "règlement mensuel",
      "rapprochement",
      "clôture mensuelle",
      "bilan mensuel",
      "dettes fournisseurs",
      "créances clients"
    ],
    "content": [
      {
        "type": "p",
        "text": "Il n'existe pas encore de rapport de règlement mensuel dédié, mais tout ce qu'il faut pour faire votre rapprochement se trouve déjà dans l'application :"
      },
      {
        "type": "list",
        "items": [
          "Dans Stats, choisissez Ce mois-ci pour voir le chiffre d'affaires du mois, les sommes encaissées, le bénéfice et la répartition par mode de paiement.",
          "Les achats auprès de fournisseurs avec paiement mensuel sont regroupés dans Factures impayées, sous Achats, où vous pouvez régler un mois entier d'un coup.",
          "Les ventes en compte aux clients sont regroupées dans Commandes → Créances, où vous pouvez régler un mois entier d'un coup."
        ]
      },
      {
        "type": "p",
        "text": "Si vous avez besoin d'un bilan de règlement mensuel à exporter ou à imprimer, écrivez-nous en indiquant les champs souhaités : nous donnons la priorité aux développements selon le nombre de demandes."
      }
    ],
    "related": [
      "revenue-vs-cash",
      "purchase-orders",
      "on-account"
    ]
  }
];
