import { Languages } from "types/general";

export interface Benefit {
  icon: string;

  content: Record<
    Languages,
    {
      title: string;
      text: string[];
    }
  >;
}
const benefitsListContent: Benefit[] = [
  {
    icon: "fa-solid fa-gift",

    content: {
      english: {
        title: "Monthly Chests",
        text: [
          "Get chests that will contain varied items, such as bookmarks, pens, mugs, notebooks, books, and more!",
        ],
      },

      spanish: {
        title: "Cofres Mensuales",
        text: [
          "Consigue cofres en los cuales puede encontrar marcadores de página, bolígrafos, tazas, cuadernos, libros y más!",
        ],
      },
    },
  },

  {
    icon: "fa-solid fa-coins",

    content: {
      english: {
        title: "Mythical Coins",
        text: [
          "When buying something from our store, or by susbcribing, you will get some of this coins as a reward",
        ],
      },

      spanish: {
        title: "Monedas Míticas",
        text: [
          "Cuando compres algo de nuestra tienda, o al subscribirte, obtendrás estas monedas como recompenza.",
        ],
      },
    },
  },

  {
    icon: "fa-regular fa-images",

    content: {
      english: {
        title: "Access to our Gallery",
        text: [
          "You can share pictures of your great adventures in our Gallery.",
        ],
      },

      spanish: {
        title: "Acceso a Nuestra Galería",
        text: [
          "Puedes compartir fotos de tus grandes aventuras en nuestra Galería.",
        ],
      },
    },
  },

  {
    icon: "fa-solid fa-earth-americas",

    content: {
      english: {
        title: "Better Delivery Service",
        text: ["You will get amazing benefits in your delivery fees."],
      },

      spanish: {
        title: "Envío Gratuito en Todo el Mundo",
        text: ["Obtendrás grandes beneficios en nuestros envíos."],
      },
    },
  },

  {
    icon: "fa-solid fa-percent",

    content: {
      english: {
        title: "Special Discounts",
        text: ["All our subscribers get special discounts each week!"],
      },

      spanish: {
        title: "Descuentos Especiales",
        text: [
          "Todos nuestros subscriptores obtienen descuentos especiales cada semana!",
        ],
      },
    },
  },

  {
    icon: "fa-solid fa-headset",

    content: {
      english: {
        title: "Exclusive Support Service",
        text: [
          "We offer our subscribers a fast and efficient customer support service.",
        ],
      },

      spanish: {
        title: "Atención al Cliente Exclusiva",
        text: [
          "Ofrecemos a nuestros subscriptores un servicio al cliente rápido y eficiente.",
        ],
      },
    },
  },
];

export { benefitsListContent };
