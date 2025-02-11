import { Languages } from "types/general";

const languages = {
  spanish: ["inglés", "español"],
  english: ["english", "spanish"],
};

export interface Heading {
  title: string;
  subtitle?: string;
}

interface LanguageContent {
  [key: string]: Heading;
}

const titles: Record<Languages, LanguageContent> = {
  english: {
    howItWorks: {
      title: "How it Works",
      subtitle: "As easy as killing a basilik...",
    },
    benefits: {
      title: "Benefits",
      subtitle: "What you'll get for the subscription",
    },
    gallery: {
      title: "Our Gallery",
    },
    subscriptions: {
      title: "Subscriptions",
      subtitle: "Take a peek into our subscriptions",
    },
  },
  spanish: {
    hero: {
      title: "Mythical Books",
      subtitle: "Donde tus sueños vienen a la vida",
    },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Tan fácil como matar a un basilisco...",
    },
    benefits: {
      title: "Beneficios",
      subtitle: "Lo que recibirás con tu subscripción",
    },
    gallery: {
      title: "Nuestra Gallería",
    },
    subscriptions: {
      title: "Subscripciones",
      subtitle: "Echa un vistazo a nuestras subscripciones",
    },
  },
};

export { titles, languages };
