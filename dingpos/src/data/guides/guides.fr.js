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
      { type: "p", text: "Avec un contrat bancaire, un petit commerce paie souvent 1 % à 1,5 % de commission sur chaque paiement par carte, parfois davantage. SumUp sans abonnement et Zettle affichent 1,75 %. La commission se calcule sur le montant TTC, mais elle sort de votre marge : sur un article vendu 24 € TTC (20 € HT) et acheté 12 € HT, 1,75 % coûte 0,42 €, soit 5,25 % des 8 € de marge." },

      { type: "h2", text: "Combien coûte un paiement par carte pour un commerçant ?" },
      { type: "p", text: "Tarifs d’octobre 2026, relevés sur les sites des prestataires ; pour une banque, qui fixe le taux par contrat, des ordres de grandeur." },
      {
        type: "table",
        head: ["Moyen de paiement", "Commission", "À savoir"],
        rows: [
          ["Espèces", "0", "Aucun frais"],
          ["Carte via le TPE de votre banque", "Selon le contrat ; plutôt 1 % à 1,5 % pour un petit commerce", "1,5 % à plus de 2 % frais fixes compris, selon une question écrite à l’Assemblée nationale ; location du TPE souvent en plus"],
          ["SumUp, sans abonnement", "1,75 %", "American Express et cartes premium comprises"],
          ["SumUp Paiements Plus", "0,89 % (cartes françaises) ; 1,75 % (premium, étrangères, American Express)", "19 € par mois ; avantageux dès 2 600 € d’encaissements mensuels, selon SumUp"],
          ["Zettle (PayPal POS)", "1,75 %", "American Express et portefeuilles mobiles courants compris"],
          ["Stripe Terminal", "1,4 % + 0,10 € (cartes EEE)", "2,9 % + 0,10 € hors EEE"],
          ["Apple Pay, Google Pay", "Tarif carte chez Square, Zettle et Stripe", "Pas de commission en plus"],
        ],
      },
      { type: "note", text: "La commission bancaire est exonérée de TVA ; la location ou l’achat du TPE ne l’est pas. Chez SumUp ou Stripe, vérifiez sur la facture si de la TVA s’ajoute." },

      { type: "h2", text: "La commission se paie sur votre marge, pas sur votre chiffre d’affaires" },
      { type: "p", text: "Ce que vous gagnez, c’est la marge : prix de vente HT moins coût d’achat HT. Prenons un article vendu 24 € TTC (20 € HT, TVA à 20 %) et acheté 12 € HT, soit 8 € de marge :" },
      {
        type: "table",
        caption: "En euros. Le taux bancaire de 1 % est une hypothèse. Marge restante avant loyer, salaires et autres charges.",
        head: ["", "Espèces", "SumUp Paiements Plus 0,89 %", "Banque 1 %", "SumUp ou Zettle 1,75 %"],
        rows: [
          ["Le client paie", "24,00", "24,00", "24,00", "24,00"],
          ["Commission", "0", "0,21", "0,24", "0,42"],
          ["Vous recevez", "24,00", "23,79", "23,76", "23,58"],
          ["TVA à reverser", "4,00", "4,00", "4,00", "4,00"],
          ["Marge restante", "8,00", "7,79", "7,76", "7,58"],
          ["Part de la marge prise", "0 %", "2,7 %", "3 %", "5,25 %"],
        ],
      },
      { type: "p", text: "La formule : part de la marge prise = taux de commission × (prix TTC ÷ prix HT) ÷ taux de marque. Le taux de marque, c’est la marge divisée par le prix de vente HT (à ne pas confondre avec le taux de marge, calculé sur le coût d’achat). Ici : 1,75 % × 1,2 ÷ 40 % = 5,25 %. À un taux de TVA réduit, remplacez 1,2 par 1 + votre taux." },
      {
        type: "table",
        caption: "Part de la marge prise, avec une TVA à 20 %, arrondie au dixième. En franchise en base de TVA, divisez par 1,2.",
        head: ["Taux de marque", "Commission 1 %", "Commission 1,75 %"],
        rows: [
          ["20 %", "6 %", "10,5 %"],
          ["30 %", "4 %", "7 %"],
          ["40 %", "3 %", "5,3 %"],
          ["50 %", "2,4 %", "4,2 %"],
          ["60 %", "2 %", "3,5 %"],
        ],
      },

      { type: "h2", text: "Combien de frais par mois ?" },
      { type: "p", text: "Chaque moyen a son taux ; les espèces ne coûtent rien. Prenons une boutique équipée de SumUp Paiements Plus, qui encaisse 11 500 € dans le mois :" },
      {
        type: "table",
        caption: "En euros.",
        head: ["Moyen de paiement", "Encaissé", "Taux", "Frais"],
        rows: [
          ["Espèces", "3 000", "0", "0"],
          ["Cartes françaises", "7 000", "0,89 %", "62,30"],
          ["Cartes premium, étrangères ou American Express", "1 500", "1,75 %", "26,25"],
          ["Abonnement Paiements Plus", "", "19 € par mois", "19,00"],
          ["Total", "11 500", "", "107,55"],
        ],
      },
      { type: "p", text: "Soit 107,55 € par mois, contre 148,75 € sans abonnement pour les mêmes 8 500 € par carte. Avec une banque, prenez les taux de votre contrat et ajoutez la location du TPE." },

      { type: "h2", text: "Pourquoi les virements sont inférieurs au total de la caisse" },
      { type: "p", text: "La caisse enregistre ce que le client a payé ; votre compte reçoit ce montant moins les commissions, déduites de chaque versement ou prélevées à part selon le contrat." },
      {
        type: "list",
        items: [
          "Comptabilisez les ventes pour leur montant complet, et les commissions comme une charge à part.",
          "L’argent arrive au plus tôt le lendemain chez SumUp ou Square, selon le contrat pour une banque : en fin de mois, une partie est encore en route.",
          "Un remboursement ne rend pas toujours la commission : Square et Stripe gardent celle du paiement d’origine. Ailleurs, voyez le contrat.",
        ],
      },

      { type: "h2", text: "Peut-on faire payer les frais de carte au client ?" },
      { type: "p", text: "Non : la loi interdit tout supplément lié à un moyen de paiement, comme « + 0,50 € par carte » ou un prix majoré pour la carte. Une réduction, par exemple en espèces, est permise si elle est annoncée avant le paiement. Vous pouvez aussi refuser la carte ou fixer un montant minimum, à condition de l’afficher en magasin." },
      { type: "p", text: "Mieux vaut intégrer la commission dans vos prix : si la moitié de vos ventes passe par carte à 1,75 %, une hausse d’environ 0,9 % la couvre." },

      { type: "h2", text: "Accepter la carte, est-ce rentable ? Le point mort" },
      { type: "p", text: "Avec un taux de marque de 40 %, une TVA à 20 % et 1,75 % de commission, 1 000 € encaissés par carte coûtent 17,50 €. Il suffit que 52,50 € de ces ventes (5,25 %) n’aient pas eu lieu sans la carte pour que leur marge paie la commission." },
      { type: "p", text: "Pour un client qui aurait payé en espèces de toute façon, la commission est un coût pur. Mais en 2024, la carte a dépassé pour la première fois les espèces en nombre de paiements en magasin : 48 % contre 43 % (Banque de France, via franceinfo)." },

      { type: "h2", text: "Votre vrai taux de commission, et le suivi des frais dans DingPOS" },
      { type: "p", text: "Le chiffre le plus juste est sur vos relevés : commissions du mois ÷ montant encaissé par carte. Au premier trimestre, votre banque ou prestataire doit aussi vous envoyer un récapitulatif annuel des frais d’encaissement : son total divisé par vos encaissements carte de l’année donne votre taux tout compris, à comparer aux offres concurrentes." },
      { type: "p", text: "Si vous êtes assujetti à la TVA, que vous vendez à des particuliers et enregistrez leurs règlements dans un logiciel, ce logiciel doit être sécurisé : certifié ou couvert par une attestation individuelle de l’éditeur. Cela vaut pour chaque logiciel où ces règlements sont enregistrés, même à côté d’une caisse certifiée. [DingPOS](/) n’est pas certifié et son éditeur, Alu Studio, ne délivre pas d’attestation : n’y enregistrez donc pas vos ventes, et appliquez ces calculs aux chiffres de votre caisse et aux relevés de votre prestataire." },
      { type: "p", text: "Ne sont notamment pas concernés les commerces en franchise en base de TVA (en 2026 : ventes de marchandises jusqu’à 85 000 € l’année précédente et 93 500 € l’année en cours ; services : 37 500 € et 41 250 €) et ceux qui ne vendent qu’à des professionnels. En cas de doute, demandez à votre expert-comptable. Le jour où vous devenez redevable de la TVA, l’obligation s’applique." },
      { type: "p", text: "Si vous n’êtes pas concerné, DingPOS peut estimer ces frais sur iPad. Dans Réglages → Moyens de paiement, renseignez les Frais de traitement de chaque moyen : un pourcentage, un montant fixe par transaction, ou les deux. Saisissez le taux réellement prélevé, TVA comprise si votre prestataire en facture." },
      { type: "image", src: "guides/fees-fr-settings.webp", width: 872, height: 795, alt: "DingPOS, Réglages → Moyens de paiement : les champs Frais de traitement d’un moyen de paiement, avec un pourcentage renseigné", caption: "Les Frais de traitement se renseignent pour chaque moyen de paiement, en pourcentage, en montant fixe ou les deux." },
      {
        type: "list",
        items: [
          "Dans Stats, la carte Moyens de paiement ajoute une ligne « Frais · Net » sous chaque moyen qui a des frais : frais estimés et net estimé encaissé.",
          "En bas de la carte : frais estimés et net estimé encaissé de la période.",
          "Les paiements encaissés avant la saisie d’un taux sont signalés par « N sans taux », et le net s’affiche « — ».",
        ],
      },
      { type: "image", src: "guides/fees-fr-report.webp", phone: "guides/fees-fr-report-1080w.webp", width: 1126, height: 870, alt: "DingPOS, Stats : la carte Moyens de paiement, avec une ligne « Frais · Net » sous chaque moyen qui a des frais et, en bas, les frais estimés et le net estimé encaissé de la période", caption: "Dans Stats, chaque moyen de paiement affiche ses frais estimés et son net estimé encaissé, avec le total de la période en bas de la carte." },
      { type: "p", text: "Ce sont des estimations d’après vos taux : DingPOS ne traite aucun paiement et ne lit pas les relevés de votre prestataire, qui font foi. Le net estimé n’est pas votre marge. Voir [la marche à suivre](/support/payment-fees/). Cette fonction nécessite la formule Standard ou supérieure ([Tarifs](/pricing/)), avec 30 jours d’essai gratuit." },
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
