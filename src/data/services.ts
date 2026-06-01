export interface Service {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  heroBadge: string;
  intro: string;
  content: {
    section1: string;
    section2: string;
    section3: string;
  };
  benefits: string[];
  process: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}
export const services: Service[] = [
  // TONTE & ENTRETIEN
  {
  slug: "tonte-entretien",

  title: "Tonte et entretien de jardin",

  seoTitle:
    "Tonte et entretien de jardin en Gironde | Masis Paysagiste",

  seoDescription:
    "Entreprise spécialisée dans la tonte de pelouse et l'entretien de jardins à Bordeaux et dans toute la Gironde.",

  image: "/images/services/tonte.webp",

  heroBadge: "Entretien extérieur",

  intro:
    "Un jardin entretenu est un jardin qui valorise durablement votre propriété.",

  content: {
    section1: `Masis Paysagiste assure l'entretien complet des espaces verts pour les particuliers et professionnels partout en Gironde.`,

    section2: `Nos équipes interviennent pour la tonte de pelouse, le débroussaillage, le nettoyage des massifs et l'entretien général du jardin.`,

    section3: `Nous proposons des interventions ponctuelles ou des contrats d'entretien annuels adaptés à chaque terrain.`
  },

  benefits: [
    "Tonte de pelouse",
    "Débroussaillage",
    "Taille de haies",
    "Entretien saisonnier",
    "Contrat annuel",
    "Intervention rapide"
  ],

  process: [
    "Visite gratuite",
    "Analyse du terrain",
    "Devis détaillé",
    "Intervention",
    "Suivi"
  ],

  faq: [
    {
      question: "Intervenez-vous sur toute la Gironde ?",
      answer: "Oui, nous couvrons l'ensemble du département."
    },
    {
      question: "Proposez-vous des contrats annuels ?",
      answer: "Oui, nous proposons des contrats d'entretien sur mesure."
    }
  ]
},

  // CRÉATION DE JARDINS
  {
  slug: "creation-jardins",

  title: "Création de jardins",

  seoTitle:
    "Création de jardin en Gironde | Masis Paysagiste",

  seoDescription:
    "Création de jardins sur mesure à Bordeaux et dans toute la Gironde. Aménagement paysager professionnel.",

  image: "/images/services/creation-jardins.jpg",

  heroBadge: "Aménagement paysager",

  intro:
    "Transformez votre extérieur avec un jardin conçu sur mesure.",

  content: {
    section1: `Nous concevons des jardins uniques adaptés à votre terrain, vos envies et votre budget.`,

    section2: `Nos créations intègrent végétaux, massifs, gazon, allées et espaces de détente afin d'obtenir un résultat harmonieux.`,

    section3: `Chaque projet est étudié pour valoriser durablement votre patrimoine immobilier.`
  },

  benefits: [
    "Conception paysagère",
    "Massifs fleuris",
    "Plantations",
    "Gazon",
    "Aménagement complet",
    "Projet sur mesure"
  ],

  process: [
    "Étude du projet",
    "Plan d'aménagement",
    "Validation",
    "Travaux",
    "Livraison"
  ],

  faq: [
    {
      question: "Travaillez-vous avec des plans 3D ?",
      answer: "Selon les projets, nous pouvons proposer des visuels d'aménagement."
    },
    {
      question: "Réalisez-vous les plantations ?",
      answer: "Oui, nous prenons en charge l'intégralité du projet."
    }
  ]
},

  // ÉLAGAGE
  {
  slug: "elagage",

  title: "Élagage et taille d'arbres",

  seoTitle:
    "Élagage d'arbres en Gironde | Masis Paysagiste",

  seoDescription:
    "Travaux d'élagage professionnels à Bordeaux, Arcachon et partout en Gironde.",

  image: "/images/services/elagage.jpg",

  heroBadge: "Travaux arboricoles",

  intro:
    "Sécurisez vos arbres grâce à un élagage réalisé dans les règles de l'art.",

  content: {
    section1: `L'élagage permet de préserver la santé des arbres tout en limitant les risques pour les habitations et les personnes.`,

    section2: `Nos interventions concernent aussi bien la taille d'entretien que les travaux de sécurisation.`,

    section3: `Nous intervenons sur tous types d'arbres dans le respect des bonnes pratiques arboricoles.`
  },

  benefits: [
    "Élagage",
    "Taille sanitaire",
    "Abattage",
    "Sécurisation",
    "Entretien des arbres",
    "Gestion des déchets verts"
  ],

  process: [
    "Diagnostic",
    "Sécurisation",
    "Intervention",
    "Nettoyage",
    "Contrôle"
  ],

  faq: [
    {
      question: "Quand faut-il élaguer un arbre ?",
      answer: "La période dépend de l'espèce et de son état sanitaire."
    },
    {
      question: "Évacuez-vous les branches ?",
      answer: "Oui, nous assurons l'évacuation des déchets verts."
    }
  ]
},

  // TERRASSES & ALLÉES
  {
  slug: "terrasses-allees",

  title: "Terrasses et allées",

  seoTitle:
    "Terrasses et allées de jardin en Gironde | Masis Paysagiste",

  seoDescription:
    "Création de terrasses et allées extérieures sur mesure à Bordeaux et dans toute la Gironde.",

  image: "/images/services/terrasses.jpg",

  heroBadge: "Aménagement extérieur",

  intro:
    "Des extérieurs élégants et durables pour valoriser votre propriété.",

  content: {
    section1: `Nous réalisons des terrasses et allées adaptées à votre environnement et à votre style de vie.`,

    section2: `Bois, composite, gravier ou dallage, nous proposons des solutions personnalisées.`,

    section3: `Nos réalisations améliorent le confort de circulation et l'esthétique globale du jardin.`
  },

  benefits: [
    "Terrasse bois",
    "Terrasse composite",
    "Allées",
    "Chemins d'accès",
    "Dallage",
    "Aménagement sur mesure"
  ],

  process: [
    "Étude",
    "Choix matériaux",
    "Préparation",
    "Pose",
    "Finitions"
  ],

  faq: [
    {
      question: "Quel matériau choisir ?",
      answer: "Nous vous conseillons selon votre budget et l'usage souhaité."
    },
    {
      question: "Travaillez-vous le bois composite ?",
      answer: "Oui, nous réalisons des terrasses en bois naturel et composite."
    }
  ]
},

  // ARROSAGE AUTOMATIQUE
  {
  slug: "arrosage-automatique",

  title: "Arrosage automatique",

  seoTitle:
    "Installation d'arrosage automatique en Gironde | Masis Paysagiste",

  seoDescription:
    "Installation de systèmes d'arrosage automatique à Bordeaux et dans toute la Gironde.",

  image: "/images/services/arrosage.webp",

  heroBadge: "Solutions intelligentes",

  intro:
    "Optimisez l'arrosage de vos espaces verts tout en réduisant votre consommation d'eau.",

  content: {
    section1: `Nous concevons des systèmes d'arrosage adaptés aux besoins de votre jardin.`,

    section2: `L'automatisation permet d'assurer une irrigation homogène tout en économisant l'eau.`,

    section3: `Nos installations sont fiables, discrètes et faciles à utiliser.`
  },

  benefits: [
    "Arrosage enterré",
    "Programmation",
    "Économie d'eau",
    "Maintenance",
    "Gestion intelligente",
    "Installation complète"
  ],

  process: [
    "Étude",
    "Conception",
    "Installation",
    "Réglages",
    "Maintenance"
  ],

  faq: [
    {
      question: "Peut-on automatiser un système existant ?",
      answer: "Oui dans la majorité des cas."
    },
    {
      question: "L'arrosage automatique réduit-il la consommation ?",
      answer: "Oui grâce à une gestion optimisée des cycles."
    }
  ]
},

  // CLÔTURES & PORTAILS
  {
  slug: "clotures-portails",

  title: "Clôtures et portails",

  seoTitle:
    "Clôtures et portails en Gironde | Masis Paysagiste",

  seoDescription:
    "Installation de clôtures et portails à Bordeaux et dans toute la Gironde.",

  image: "/images/services/clotures.jpg",

  heroBadge: "Sécurisation extérieure",

  intro:
    "Sécurisez et valorisez votre propriété grâce à des solutions adaptées.",

  content: {
    section1: `Nous installons différents types de clôtures et portails pour les particuliers et professionnels.`,

    section2: `Nos solutions permettent de protéger votre terrain tout en améliorant son esthétique.`,

    section3: `Chaque installation est réalisée avec des matériaux durables et adaptés à votre environnement.`
  },

  benefits: [
    "Clôture rigide",
    "Clôture occultante",
    "Portail",
    "Portillon",
    "Sécurisation",
    "Installation durable"
  ],

  process: [
    "Visite",
    "Conseils",
    "Devis",
    "Installation",
    "Contrôle final"
  ],

  faq: [
    {
      question: "Quels types de clôtures installez-vous ?",
      answer: "Rigides, occultantes, grillagées et décoratives."
    },
    {
      question: "Intervenez-vous pour les portails ?",
      answer: "Oui, nous réalisons également la pose de portails et portillons."
    }
  ]
}
];