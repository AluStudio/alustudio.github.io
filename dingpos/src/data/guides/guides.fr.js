// DingPOS guides — fr pack. Guides are acquisition articles written for one
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
//   market   — the market the facts hold for, a key of ui.markets ("FR")
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
// France requires a secured, certified cash register for many shops
// (art. 286 du CGI) and DingPOS has no certificate or editor attestation, so
// no string here may present DingPOS as a register that replaces one.

export const ui = {
  nav: "Guides",
  title: "Guides pour petits commerces",
  subtitle: "Encaissements, coûts et marge : les calculs utiles, expliqués pour les commerçants qui tiennent eux-mêmes leur boutique.",
  meta_description: "Guides pour commerçants indépendants : ce que coûtent les paiements par carte et la part de marge qu’ils prennent, avec formules, exemples chiffrés et sources.",
  back: "Tous les guides",
  related_title: "À lire aussi",
  sources_title: "Sources",
  checked: "Dernière vérification : {{date}}",
  cta_title: "Estimez les frais de chaque moyen de paiement sur iPad",
  cta_text: "DingPOS est une application de caisse pour iPad, sans commission sur vos ventes, avec 30 jours d’essai gratuit. Ce n’est pas un logiciel de caisse certifié et elle ne remplace pas une caisse sécurisée : en France, elle s’adresse aux commerces qui ne sont pas soumis à cette obligation, comme ceux en franchise en base de TVA.",
  cta_button: "Télécharger sur l’App Store",
  markets: { FR: "France" },
};

export const articles = [
  {
    slug: "payment-processing-fees-france",
    market: "FR",
    checked: "2026-10-25",
    title: "Commission carte bancaire commerçant : combien ça coûte et quelle part de votre marge ?",
    summary: "Commission carte en banque : souvent 1 à 1,5 % pour un petit commerce ; 1,75 % chez SumUp et Zettle. Sur un article à 24 € TTC, 1,75 % prend 5,25 % de la marge.",
    content: [
      { type: "p", text: "Avec un contrat bancaire, un petit commerce paie souvent entre 1 % et 1,5 % de commission sur chaque paiement par carte, parfois davantage : le taux se négocie et figure dans votre contrat, sans grille publique. Sans passer par la banque, SumUp et Zettle affichent 1,75 % par transaction, Square à partir de 1,65 % et Stripe Terminal 1,4 % + 0,10 € pour les cartes européennes. La commission se calcule sur le montant TTC encaissé, mais elle sort de votre marge : sur un article vendu 24 € TTC (20 € HT) et acheté 12 € HT, 1,75 % de commission coûte 0,42 €, soit 5,25 % des 8 € de marge." },
      { type: "p", text: "Voici, avec les mêmes chiffres, ce que coûte chaque solution, ce que cela représente sur un mois, pourquoi les virements reçus sont inférieurs au total de la caisse, et pourquoi vous ne pouvez pas faire payer ces frais au client." },

      { type: "h2", text: "Combien coûte un paiement par carte pour un commerçant ?" },
      { type: "p", text: "Les tarifs ci-dessous ont été relevés en octobre 2026 sur les pages officielles des prestataires. Une banque fixe sa commission dans votre contrat d’acceptation carte : pour elle, on ne dispose que d’ordres de grandeur." },
      {
        type: "table",
        head: ["Moyen de paiement", "Commission", "À savoir"],
        rows: [
          ["Espèces", "0", "Aucun frais d’encaissement"],
          ["Carte via le TPE de votre banque (CB, Visa, Mastercard)", "Selon votre contrat ; en moyenne 0,5 % à 1,5 %, plutôt 1 % à 1,5 % pour un petit commerce", "Une question écrite à l’Assemblée nationale (2026) évoque même souvent 1,5 % à plus de 2 %, frais fixes compris. La commission d’interchange est plafonnée à 0,2 % (débit) et 0,3 % (crédit) pour les cartes de particuliers ; s’y ajoutent les frais de réseau et la marge de la banque, souvent la location du TPE"],
          ["SumUp, sans abonnement", "1,75 %", "Même taux pour tous les paiements en personne, cartes American Express et premium comprises"],
          ["SumUp Paiements Plus", "0,89 % pour les cartes françaises (débit et crédit), 1,75 % pour les cartes premium, étrangères ou American Express", "Abonnement de 19 € par mois ; selon SumUp, il fait baisser vos frais dès 2 600 € d’encaissements par mois"],
          ["Zettle (PayPal POS)", "1,75 %", "Même taux pour les cartes et portefeuilles mobiles courants, American Express compris"],
          ["Square", "À partir de 1,65 % (cartes UE et EEE)", "1,5 % de plus pour les cartes du Royaume-Uni ou hors EEE"],
          ["Stripe Terminal", "1,4 % + 0,10 € (cartes EEE)", "2,9 % + 0,10 € pour les cartes hors EEE ; 0,10 € de plus par autorisation avec Tap to Pay"],
        ],
      },
      { type: "p", text: "Apple Pay et Google Pay passent par le terminal comme une carte : Square les cite expressément au même tarif, et Zettle comme Stripe appliquent leur tarif carte aux portefeuilles mobiles courants. Ce n’est pas une commission en plus." },
      { type: "note", text: "La commission que votre banque prélève sur les paiements par carte est exonérée de TVA (article 261 C du CGI) : le taux du contrat est bien ce que vous payez, sans TVA à ajouter ni à récupérer. La location ou l’achat du TPE, en revanche, est soumis à la TVA. Avec un prestataire comme SumUp ou Stripe, vérifiez sur sa facture mensuelle si de la TVA s’ajoute." },

      { type: "h2", text: "La commission se paie sur votre marge, pas sur votre chiffre d’affaires" },
      { type: "p", text: "La commission est un pourcentage du montant payé par le client, TVA comprise. Ce que vous gagnez réellement, c’est la marge : le prix de vente HT moins le coût d’achat HT. C’est sur cette marge que la commission est prise." },
      { type: "p", text: "Prenons un article vendu 24 € TTC, soit 20 € HT avec une TVA à 20 %, acheté 12 € HT. La marge est de 8 € :" },
      {
        type: "table",
        caption: "En euros. Le taux bancaire de 1 % est une hypothèse. La « marge restante » est calculée avant loyer, salaires et autres charges : ce n’est pas un bénéfice.",
        head: ["", "Espèces", "SumUp Paiements Plus 0,89 %", "Banque 1 %", "SumUp ou Zettle 1,75 %", "Stripe Terminal 1,4 % + 0,10 €"],
        rows: [
          ["Le client paie", "24,00", "24,00", "24,00", "24,00", "24,00"],
          ["Commission", "0", "0,21", "0,24", "0,42", "0,44"],
          ["Vous recevez", "24,00", "23,79", "23,76", "23,58", "23,56"],
          ["TVA à reverser", "4,00", "4,00", "4,00", "4,00", "4,00"],
          ["Marge restante", "8,00", "7,79", "7,76", "7,58", "7,56"],
          ["Part de la marge prise par la commission", "0 %", "2,7 %", "3 %", "5,25 %", "5,5 %"],
        ],
      },
      { type: "p", text: "La règle générale tient en une formule : part de la marge prise par la commission = taux de commission × (prix TTC ÷ prix HT) ÷ taux de marque. Le taux de marque est la marge divisée par le prix de vente HT, à ne pas confondre avec le taux de marge, calculé sur le coût d’achat. Ici, le taux de marque est de 8 ÷ 20 = 40 % et le rapport TTC/HT vaut 1,2 : 1,75 % × 1,2 ÷ 40 % = 5,25 %. En franchise en base de TVA, prix TTC et prix HT sont identiques et le rapport vaut 1 ; à un taux de TVA réduit, remplacez 1,2 par 1 + votre taux." },
      {
        type: "table",
        caption: "Part de la marge prise par la commission, avec une TVA à 20 %, arrondie au dixième. En franchise en base de TVA, divisez par 1,2.",
        head: ["Taux de marque", "Commission 0,89 %", "Commission 1 %", "Commission 1,75 %"],
        rows: [
          ["20 %", "5,3 %", "6 %", "10,5 %"],
          ["30 %", "3,6 %", "4 %", "7 %"],
          ["40 %", "2,7 %", "3 %", "5,3 %"],
          ["50 %", "2,1 %", "2,4 %", "4,2 %"],
          ["60 %", "1,8 %", "2 %", "3,5 %"],
        ],
      },
      { type: "p", text: "À 20 % de taux de marque et avec une TVA à 20 %, une commission de 1,75 % prend plus d’un dixième de la marge ; à 60 % de taux de marque, elle n’en prend que 3,5 %. Les frais fixes pèsent surtout sur les petits paiements : les 0,10 € de Stripe représentent 0,4 % d’un paiement de 24 €, mais 2 % d’un café à 5 €." },

      { type: "h2", text: "Combien de frais par mois ? Calculez selon vos moyens de paiement" },
      { type: "p", text: "Les frais d’un mois ne se calculent pas en appliquant un seul taux à tout le chiffre d’affaires : chaque moyen de paiement a le sien, et les espèces ne coûtent rien. Prenons une boutique équipée de SumUp Paiements Plus, qui encaisse 11 500 € dans le mois :" },
      {
        type: "table",
        caption: "En euros, tarifs SumUp Paiements Plus d’octobre 2026.",
        head: ["Moyen de paiement", "Encaissé dans le mois", "Taux", "Frais"],
        rows: [
          ["Espèces", "3 000", "0", "0"],
          ["Cartes françaises (débit et crédit)", "7 000", "0,89 %", "62,30"],
          ["Cartes premium, étrangères ou American Express", "1 500", "1,75 %", "26,25"],
          ["Abonnement Paiements Plus", "", "19 € par mois", "19,00"],
          ["Total", "11 500", "", "107,55"],
        ],
      },
      { type: "p", text: "Cette boutique paie environ 107,55 € de frais par mois, soit 1 290,60 € par an. Sans abonnement, les mêmes 8 500 € de paiements par carte lui coûteraient 148,75 € par mois (1,75 %). Avec une banque, faites le même calcul avec les taux de votre contrat et ajoutez la location du TPE. Remplacez les montants par les vôtres pour obtenir le coût réel de votre boutique." },

      { type: "h2", text: "Pourquoi les virements reçus sont inférieurs au total de la caisse" },
      { type: "p", text: "Votre caisse enregistre ce que le client a payé. Ce qui arrive sur votre compte, c’est ce montant moins les commissions : selon le contrat, elles sont déduites de chaque versement ou prélevées à part, par exemple une fois par mois. L’écart entre la caisse et les virements, c’est la commission." },
      {
        type: "list",
        items: [
          "En comptabilité, enregistrez vos ventes pour leur montant complet et les commissions comme une charge à part, sans les déduire des ventes. Votre chiffre d’affaires ne baisse pas quand vos clients paient par carte, et le coût reste visible.",
          "L’argent n’arrive pas le jour même. SumUp verse dès 7 h le lendemain sur son Compte pro, week-ends et jours fériés compris, ou sous 1 à 2 jours ouvrés sur un autre compte bancaire ; Square vire le jour ouvrable suivant ; pour une banque, le délai figure dans le contrat. En fin de mois, une partie des encaissements est donc encore en route.",
          "Quand vous remboursez un client, la commission n’est pas toujours rendue : Square et Stripe ne restituent pas les frais du paiement d’origine. Pour une banque ou un autre prestataire, la règle figure dans le contrat ; posez la question avant de signer.",
        ],
      },

      { type: "h2", text: "Peut-on faire payer les frais de carte au client ?" },
      { type: "p", text: "Non. Le Code monétaire et financier (article L112-12) interdit au commerçant d’appliquer des frais pour l’utilisation d’un moyen de paiement donné. Un supplément « + 0,50 € par carte » ou un prix majoré quand le client paie par carte sont donc interdits." },
      { type: "p", text: "Vous pouvez en revanche proposer une réduction pour un moyen de paiement, par exemple un prix plus bas en espèces, à condition d’en informer le client avant le paiement (même article). Vous pouvez aussi refuser la carte, n’accepter que certaines cartes ou fixer un montant minimum, à condition de l’afficher dans le magasin." },
      { type: "p", text: "Le plus simple reste d’intégrer la commission dans vos prix : si la moitié de vos ventes est réglée par carte à 1,75 %, une hausse de prix d’environ 0,9 % suffit à la couvrir." },

      { type: "h2", text: "Accepter la carte, est-ce rentable ? Le calcul du point mort" },
      { type: "p", text: "Accepter la carte coûte la commission ; cela rapporte les ventes que vous auriez perdues sans elle. Le point mort se calcule avec la même formule : ventes supplémentaires nécessaires, en part de vos encaissements par carte = taux de commission × (prix TTC ÷ prix HT) ÷ taux de marque." },
      { type: "p", text: "Avec un taux de marque de 40 %, une TVA à 20 % et une commission de 1,75 %, chaque tranche de 1 000 € encaissés par carte coûte 17,50 €. Il suffit que 52,50 € de ces ventes (5,25 %) n’aient pas eu lieu sans la carte pour que la marge qu’elles rapportent paie la commission." },
      { type: "p", text: "Quand un client aurait de toute façon payé en espèces, la commission est un coût pur. Mais en 2024, d’après la Banque de France, les paiements par carte ont pour la première fois dépassé les espèces en nombre dans les commerces : 48 % des transactions, contre 43 % en espèces, selon les chiffres repris par franceinfo. Un client qui n’a pas de liquide ne revient pas forcément avec." },

      { type: "h2", text: "Comment connaître votre vrai taux de commission" },
      { type: "p", text: "Le chiffre le plus juste est sur vos relevés : divisez les commissions du mois par le montant encaissé par carte, et vous obtenez votre taux réel. Notez-le pour chaque moyen de paiement : en fin de mois, vous verrez lequel vous coûte le plus." },
      { type: "p", text: "Une fois par an, au premier trimestre, votre banque ou votre prestataire de paiement doit aussi vous envoyer un récapitulatif annuel des frais d’encaissement par carte (article L112-11 du Code monétaire et financier). Il détaille l’interchange, les frais de réseau, les frais d’acquisition et les autres frais comme la location du TPE. Divisez le total par vos encaissements carte de l’année : c’est votre taux tout compris, celui à comparer aux offres concurrentes." },

      { type: "h2", text: "Caisse certifiée ou non : ce que DingPOS peut faire pour vous" },
      { type: "p", text: "En France, un commerçant assujetti à la TVA qui vend à des particuliers et enregistre leurs règlements dans un logiciel doit utiliser un logiciel de caisse sécurisé (article 286 du CGI). La preuve est un certificat délivré par un organisme accrédité ou une attestation individuelle de l’éditeur, et elle est exigée pour chaque logiciel où ces règlements sont enregistrés, y compris un second logiciel utilisé à côté d’une caisse certifiée. [DingPOS](/) n’est pas un logiciel de caisse certifié et son éditeur, Alu Studio, ne délivre pas d’attestation individuelle. Si votre commerce est soumis à cette obligation, n’enregistrez donc pas vos ventes dans DingPOS, même en complément de votre caisse : appliquez plutôt les calculs de cet article aux chiffres de votre caisse et aux relevés de votre prestataire de paiement." },
      { type: "p", text: "L’obligation ne s’applique pas, notamment, aux commerces en franchise en base de TVA (en 2026, pour la vente de marchandises : chiffre d’affaires jusqu’à 85 000 € l’année précédente et 93 500 € dans l’année en cours ; pour les prestations de services : 37 500 € et 41 250 €), ni à ceux qui ne vendent qu’à des professionnels. En cas de doute sur votre situation, demandez à votre expert-comptable. Le jour où votre commerce devient redevable de la TVA, le logiciel où il enregistre ses ventes doit être certifié ou couvert par une attestation de son éditeur." },
      { type: "p", text: "Si votre commerce n’est pas concerné, DingPOS peut faire ce calcul pour vous sur iPad. Dans Réglages → Moyens de paiement, renseignez les frais de traitement de chaque moyen de paiement : un pourcentage, un montant fixe par transaction, ou les deux. Dans Stats, la carte Moyens de paiement affiche alors les frais estimés et le net estimé encaissé pour chaque moyen. DingPOS ne traite aucun paiement et ne lit pas les relevés de votre prestataire : ces montants sont estimés d’après les taux que vous saisissez, et le relevé fait foi. Ce net estimé est un montant encaissé, pas votre marge : le coût d’achat n’y est pas déduit. La marche à suivre est détaillée dans [Peut-on suivre les frais de paiement par carte et mobile dans DingPOS ?](/support/payment-fees/). Cette fonction nécessite la formule Standard ou supérieure (voir les [Tarifs](/pricing/)), et vous pouvez l’essayer gratuitement pendant 30 jours." },
    ],
    sources: [
      { label: "franceinfo (2 septembre 2025) : combien coûtent les paiements par carte aux commerçants (0,5 % à 1,5 % en moyenne, 1 % à 1,5 % pour les petits commerces, interchange plafonnée, 48 % des transactions par carte en 2024)", url: "https://www.franceinfo.fr/societe/bloquons-tout-mouvement-du-10-septembre/paiement-par-carte-combien-coutent-ils-aux-commercants_7468846.html" },
      { label: "SumUp : tarifs (1,75 % sans abonnement ; Paiements Plus 19 €/mois, 0,89 % cartes domestiques, 1,75 % premium, internationales et American Express ; versements)", url: "https://www.sumup.com/fr-fr/tarifs/" },
      { label: "Zettle (PayPal POS) : tarifs (1,75 % par transaction, American Express et portefeuilles mobiles compris)", url: "https://www.zettle.com/fr/tarifs" },
      { label: "Square : tarifs (à partir de 1,65 % cartes UE et EEE, +1,5 % hors EEE ; virement le jour ouvrable suivant)", url: "https://squareup.com/fr/fr/pricing" },
      { label: "Stripe : tarifs (Terminal 1,4 % + 0,10 € cartes EEE, 2,9 % + 0,10 € hors EEE, Tap to Pay +0,10 €)", url: "https://stripe.com/fr/pricing" },
      { label: "Square : gérer les remboursements (les frais de traitement ne sont pas remboursés)", url: "https://squareup.com/help/fr/fr/article/6116-process-refunds" },
      { label: "Stripe : remboursements (les frais du paiement d’origine ne sont pas restitués)", url: "https://docs.stripe.com/refunds" },
      { label: "BOFiP BOI-TVA-SECT-50-10-10 § 360 : commissions sur les paiements des commerçants exonérées de TVA (art. 261 C du CGI), location et vente des terminaux imposables", url: "https://bofip.impots.gouv.fr/bofip/1839-PGP.html" },
      { label: "Légifrance : article L112-12 du Code monétaire et financier (interdiction des frais pour un moyen de paiement, réduction annoncée avant le paiement)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430410" },
      { label: "Légifrance : article L112-11 du Code monétaire et financier (récapitulatif annuel des frais d’encaissement par carte)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430414/" },
      { label: "Assemblée nationale : question écrite n° 12975 et réponse du Gouvernement (28 avril 2026) sur le RAFEC", url: "https://questions.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE12975" },
      { label: "Service-Public.fr : paiement par carte bancaire (refus, montant minimum, affichage en magasin)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2424" },
      { label: "Banque de France (février 2025) : en 2024, les paiements par carte dépassent les espèces dans les commerces", url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/les-francais-continuent-dapprecier-les-especes-meme-si-leur-usage-se-reduit-au-profit-des-paiements" },
      { label: "Bpifrance Création : taux de marque (marge rapportée au prix de vente HT)", url: "https://bpifrance-creation.fr/taux-marque" },
      { label: "BOFiP BOI-TVA-DECLA-30-10-30 (25 mars 2026) : obligation d’utiliser un logiciel ou système de caisse sécurisé (§ 1 et 10 champ, § 25 exclusions, § 270 certificat ou attestation de l’éditeur rétablie depuis le 21 février 2026, § 280 un justificatif par logiciel)", url: "https://bofip.impots.gouv.fr/bofip/10691-PGP.html" },
      { label: "Entreprendre.Service-Public.fr : franchise en base de TVA (seuils 2026 : 85 000 € et 93 500 € pour les ventes de marchandises, 37 500 € et 41 250 € pour les prestations de services)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F21746" },
    ],
    related: [],
  },
];
