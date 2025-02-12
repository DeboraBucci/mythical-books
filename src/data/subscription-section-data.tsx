import { Languages } from "types/general";

const subscriptionCardsEnglish = [
  {
    name: "Peasant",
    icon: "fas fa-beer",
    comment:
      "be part of the heartwarming folk who likes to drink beer and pass out singing songs",
    className: "peasant",
    price: [0.99, 9.99],
    benefits: {
      devilery: false,
      discounts: "5% OFF with your first monthly purchase",
      chest: false,
    },
  },
  {
    name: "Blacksmith",
    icon: "fas fa-gavel",
    comment:
      "be the one who uses his craftmanship to build items of great value",
    className: "blacksmith",
    price: [2.99, 29.99],
    benefits: {
      delivery: "Free delivery starting from $50",
      discounts: "8% OFF with your first monthly purchase",
      chest: false,
    },
  },
  {
    name: "Knight",
    icon: "fas fa-chess-knight",
    comment:
      "ride ferociously into battle, without a hinch of doubt in your heart, and you may raise victorious!",
    className: "knight",
    price: [4.99, 47.99],
    benefits: {
      delivery: "Free delivery starting from $30",
      discounts: "15% OFF with your first monthly purchase",
      chest: "Iron Chest",
    },
  },
  {
    name: "Paladin",
    icon: "fas fa-cross",
    comment:
      "be the sword and shield of the kingdom, swear to protect the truth, be the elite",
    price: [9.99, 89.99],
    className: "paladin",
    benefits: {
      delivery: "Free Delivery",
      discounts: "25% OFF with your first monthly purchase",
      chest: "Old Silver Chest",
    },
  },
  {
    name: "Wizard",
    icon: "fas fa-hat-wizard",
    comment: "so much power... do you feel it? It's growing deep inside of you",
    className: "wizard",
    price: [14.99, 149.99],
    benefits: {
      delivery: "Free Delivery",
      discounts: "35% OFF with your first monthly purchase",
      chest: "Saphire Chest",
    },
  },
  {
    name: "King or Queen",
    icon: "fas fa-crown",
    comment: "of royal blood, be a leader who knows the hearts of his people",
    className: "king",
    price: [19.99, 189.99],
    benefits: {
      delivery: "Premium Delivery",
      discounts:
        "50% OFF with your first monthly purchase, plus a 10% with your second one",
      chest: "Diamond Chest",
    },
  },
  {
    name: "Ancient Dragon",
    icon: "fas fa-dragon",
    comment: "YOU... Impossible!!",
    className: "dragon",
    price: [49.99, 499.99],
    benefits: {
      delivery: "Mythical Delivery",
      discounts:
        "70% OFF with your first monthly purchase, plus a 50% with your second one",
      chest: "Dragonscale chest",
    },
  },
];

const subscriptionCardsSpanish = [
  {
    name: "Campesino/a",
    icon: "fas fa-beer",
    comment:
      "sé parte de la calurosa comunidad de gente, quienes disfrutan de beber cerveza y desmayarse cantando canciones",
    className: "peasant",
    price: [0.99, 9.99],
    benefits: {
      devilery: false,
      discounts: "5% de descuento en tu primer compra mensual",
      chest: false,
    },
  },
  {
    name: "Herrero/a",
    icon: "fas fa-gavel",
    comment:
      "sé aquel quien usa sus habilidades para construir instrumentos de gran valor",
    className: "blacksmith",
    price: [2.99, 29.99],
    benefits: {
      delivery: "Envío gratis a partir de los $50",
      discounts: "8% OFF with your first monthly purchase",
      chest: false,
    },
  },
  {
    name: "Caballero/a",
    icon: "fas fa-chess-knight",
    comment:
      "cabalga ferozmente hacia la batalla, sin ninguna duda en tu corazón, y podrás salir victorioso!",
    className: "knight",
    price: [4.99, 47.99],
    benefits: {
      delivery: "Free delivery starting from $30",
      discounts: "15% de descuento en tu primer compra mensual",
      chest: "Iron Chest",
    },
  },
  {
    name: "Paladín",
    icon: "fas fa-cross",
    comment:
      "sé la espada y escudo del reino, jura proteger la verdad, sé la élite",
    price: [9.99, 89.99],
    className: "paladin",
    benefits: {
      delivery: "Envío Gratis",
      discounts: "25% de descuento en tu primer compra mensual",
      chest: "Old Silver Chest",
    },
  },
  {
    name: "Hechicero/a",
    icon: "fas fa-hat-wizard",
    comment: "tanto poder... lo sientes? Está creciendo dentro tuyo",
    className: "wizard",
    price: [14.99, 149.99],
    benefits: {
      delivery: "Envío Gratis",
      discounts: "35% de descuento en tu primer compra mensual",
      chest: "Saphire Chest",
    },
  },
  {
    name: "Rey o Reina",
    icon: "fas fa-crown",
    comment: "de sangre real, sé un líder que conoce los corazones de su gente",
    className: "king",
    price: [19.99, 189.99],
    benefits: {
      delivery: "Envío Premium",
      discounts:
        "50% de descuento en tu primer compra mensual, más un 10% en la segunda",
      chest: "Diamond Chest",
    },
  },
  {
    name: "Dragón Ancestral",
    icon: "fas fa-dragon",
    comment: "TÚ... Imposible!!",
    className: "dragon",
    price: [49.99, 499.99],
    benefits: {
      delivery: "Envío Mítico",
      discounts:
        "70% de descuento en tu primer compra mensual, más un 50% en la segunda",
      chest: "Dragonscale chest",
    },
  },
];

export const GetSubscriptionCardsInformation = (lang: Languages) => {
  if (lang === "english") {
    return subscriptionCardsEnglish;
  } else {
    return subscriptionCardsSpanish;
  }
};
