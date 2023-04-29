// Gallery images
import Gallery1 from "./assets/gallery/gallery-1.webp";
import Gallery2 from "./assets/gallery/gallery-2.webp";
import Gallery3 from "./assets/gallery/gallery-3.webp";
import Gallery4 from "./assets/gallery/gallery-4.webp";
import Gallery5 from "./assets/gallery/gallery-5.webp";
import Gallery6 from "./assets/gallery/gallery-6.webp";
import Gallery7 from "./assets/gallery/gallery-7.webp";
import Gallery8 from "./assets/gallery/gallery-8.webp";
import Gallery9 from "./assets/gallery/gallery-9.webp";
import Gallery10 from "./assets/gallery/gallery-10.webp";
import Gallery11 from "./assets/gallery/gallery-11.webp";
import Gallery12 from "./assets/gallery/gallery-12.webp";
import Gallery13 from "./assets/gallery/gallery-13.webp";
import Gallery14 from "./assets/gallery/gallery-14.webp";
import Gallery15 from "./assets/gallery/gallery-15.webp";
import Gallery16 from "./assets/gallery/gallery-16.webp";
import Gallery17 from "./assets/gallery/gallery-17.webp";

import stepOne from "./assets/step-one.webp";
import stepTwo from "./assets/step-one.webp";
import stepThree from "./assets/step-one.webp";
import stepFour from "./assets/step-one.webp";

import { Link } from "react-router-dom";

const homeLinks = [
  {
    title: {
      english: "Store",
      spanish: "Tienda",
    },
    att: "/store",
    icon: "fas fa-store",
    iconClass: "store",
    type: "link",
  },
  {
    title: {
      english: "How it Works",
      spanish: "Cómo Funciona",
    },
    att: "#works",
    icon: "fas fa-dice-d20",
    iconClass: "works",
    type: "anchor",
  },
  {
    title: {
      english: "Benefits",
      spanish: "Beneficios",
    },
    att: "#benefits",
    icon: "far fa-gem",
    iconClass: "benefits",
    type: "anchor",
  },
  {
    title: {
      english: "Gallery",
      spanish: "Galería",
    },
    att: "#gallery",
    icon: "far fa-image",
    iconClass: "gallery",
    type: "anchor",
  },
  {
    title: {
      english: "Subscriptions",
      spanish: "Subscripciones",
    },
    att: "#subscriptions",
    icon: "fas fa-dragon",
    iconClass: "subscriptions",
    type: "anchor",
  },
  {
    title: {
      english: "Log In",
      spanish: "Ingresar",
    },
    att: "/login",
    icon: "fas fa-feather",
    iconClass: "log",
    type: "link",
  },
];

const storeLinks = [
  {
    title: { english: "Home", spanish: "Casa" },
    att: "/store",
    icon: "fas fa-store",
    iconClass: "store",
    type: "link",
  },
  {
    title: { english: "Contact us", spanish: "Contáctanos" },
    att: "/contact",
    icon: "fa-solid fa-paper-plane",
    iconClass: "works",
    type: "link",
  },
  {
    title: { english: "Log In", spanish: "Ingresa" },
    att: "/login",
    icon: "fas fa-feather",
    iconClass: "log",
    type: "link",
  },
];

const opt = {
  background: {
    color: {
      value: "#0a0016",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#dfd3ff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.1, max: 5 },
    },
  },
  detectRetina: true,
};

const subscriptionCards = [
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
      freeBook: false,
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
      freeBook: false,
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
      freeBook: "Free book every 12 months",
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
      discounts:
        "35% OFF with your first monthly purchase, plus a 5% with your second one",
      chest: "Saphire Chest",
      freeBook: "Free book every 6 months",
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
      freeBook: "Free book each month",
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
      freeBook: "Free book each month",
    },
  },
];

export const languages = {
  spanish: ["inglés", "español"],
  english: ["english", "spanish"],
};

const galleryArr = [
  { img: Gallery1, alt: "" },
  { img: Gallery2, alt: "" },
  { img: Gallery3, alt: "" },
  { img: Gallery4, alt: "" },
  { img: Gallery5, alt: "" },
  { img: Gallery6, alt: "" },
  { img: Gallery7, alt: "" },
  { img: Gallery8, alt: "" },
  { img: Gallery9, alt: "" },
  { img: Gallery10, alt: "" },
  { img: Gallery11, alt: "" },
  { img: Gallery12, alt: "" },
  { img: Gallery13, alt: "" },
  { img: Gallery14, alt: "" },
  { img: Gallery15, alt: "" },
  { img: Gallery16, alt: "" },
  { img: Gallery17, alt: "" },
];

const howItWorksContent = {
  english: [
    {
      img: stepOne,
      title: "Join in",
      text: [
        <>
          To start off you need to be logged in into your account,{" "}
          <Link to="/register">
            (create it here if you don't have one already)
          </Link>
          , to make a subscription.
        </>,
      ],
    },
    {
      img: stepTwo,
      title: "Choose subscription",
      text: [
        <>
          We offer many <a href="#subscriptions">subscription plans</a>, each
          one of them has different price and <a href="#benefits">benefits</a>.
        </>,
        <>
          Once you decided on one, click on the 'upgrade' button at the bottom
          of the card to start the subscription process.
        </>,
      ],
    },
    {
      img: stepThree,
      title: "Fill the form",
      text: [
        <>
          Once you click on the 'upgrade' button, you'll be redirected to a form
          which needs to be filled with some of your personal data to carry
          through the payment.
        </>,
        <>
          Don't worry, we have secure connections that prevent any malicious
          user from stealing your data.
        </>,
      ],
    },
    {
      img: stepFour,
      title: "Enjoy",
      text: [
        <>
          At the moment of paying the subscription, your account will be
          activated in a matter of minutes, and from there on you will be able
          to enjoy all the benefits of your subscription plan. Yoo-hoo!
        </>,
        <>Enjoy the reading!</>,
      ],
    },
  ],

  spanish: [
    {
      img: stepOne,
      title: "Únete",
      text: [
        <>
          Para comenzar, debes haber ingresado en tu cuenta,{" "}
          <Link to="/register">
            (haz click aquí si todavía no tienes una creada)
          </Link>
          , para realizar una subscripción.
        </>,
      ],
    },
    {
      img: stepTwo,
      title: "Elige una Subscripción",
      text: [
        <>
          Ofrecemos muchas <a href="#subscriptions">subscripciones</a>, cada una
          cuenta con diferente precio y <a href="#benefits">beneficios</a>.
        </>,
        <>
          Una vez te decidas por una de ellas, haz click en el botón de
          "mejorar" al pie de la carta en la que estés interesado para comenzar
          el proceso de subscripción.
        </>,
      ],
    },
    {
      img: stepThree,
      title: "Completa el Formulario",
      text: [
        <>
          Una vez que hayas clickeado en el botón de "mejorar", serás redirigido
          a un formulario el cual requerirá de alguno de tus datos personales
          para poder realizar el pago con éxito.
        </>,
        <>
          No te preocupes, tenemos conexiones seguras que previenen a cualquier
          usuario maligno de robar tu información personal.
        </>,
      ],
    },
    {
      img: stepFour,
      title: "Disfruta!",
      text: [
        <>
          En el momento en el que realizas el pago de la subscripción, tu cuenta
          será activada en cosa de minutos, y de ahí en adelante, serás capaz de
          disfrutar de todos los beneficios de tu plan de subscripción. ¡Yupi!
        </>,
        <>¡Disfruta de tu lectura!</>,
      ],
    },
  ],
};

const hero = {
  english: {
    firstPart: "Where your dreams come ",
    secondPart: "to life",
  },
  spanish: { firstPart: "Donde tus sueños vienen ", secondPart: "a la vida" },
};

const titles = {
  english: {
    howItWorks: {
      main: "How it Works",
      subtitle: "As easy as killing a basilik...",
    },
    benefits: {
      main: "Benefits",
      subtitle: "What you'll get for the subscription",
    },
    gallery: {
      main: "Our Gallery",
    },
    subscriptions: {
      main: "Subscriptions",
      subtitle: "Take a peek into our subscriptions",
    },
  },
  spanish: {
    hero: {
      main: "Mythical Books",
      subtitle: "Donde tus sueños vienen a la vida",
    },
    howItWorks: {
      main: "Cómo Funciona",
      subtitle: "Tan fácil como matar a un basilisco...",
    },
    benefits: {
      main: "Beneficios",
      subtitle: "Lo que recibirás con tu subscripción",
    },
    gallery: {
      main: "Nuestra Gallería",
    },
    subscriptions: {
      main: "Subscripciones",
      subtitle: "Echa un vistazo a nuestras subscripciones",
    },
  },
};

const benefitsContent = {
  english: [
    {
      title: "Monthly Chests",
      icon: "fa-solid fa-toolbox",
      text: [
        <p>
          Get a hold of one of these wonderful hidden treasures and you will
          find something of sheer greatness.
        </p>,
        <p>
          These chests contain varied items, such as bookmarks, pens, mugs,
          notebooks, and sometimes even books! (the books are chosen depending
          on your wishlist, if there are no books there, then the chest won't
          have any).
        </p>,
        <p>
          <Link>Click here</Link> to see the list of all the items that may be
          inside each chest.
        </p>,
      ],
    },
    {
      title: "Mythical Coins & Boosts",
      icon: "fa-solid fa-toolbox",
      text: [
        <p>Mythical Coins are worth around 0.001 USD each.</p>,
        <p>
          When buying something from our store, or by susbcribing, you will get
          some of them as a reward.
        </p>,
        <code className="benefits__note">
          Note: You don't have to be subscribed to earn mythical coins, but you
          need a verified account.{" "}
          <Link to="register">Click here to create one</Link>.
        </code>,
        <p>
          You will also be able to get mythical coins' boost at random when
          receiving a chest or buying in our store (the chances and power of the
          boosters may increase depending on your current subscription).
        </p>,
        <p>
          <Link>Click here</Link> to learn more about our currency system.
        </p>,
      ],
    },
    {
      title: "Access to our Gallery",
      icon: "fa-regular fa-images",
      text: [
        <p>
          With the subscription, a whole new path is open ahead of you: The
          possibility of uploading great pictures of your adventures.
        </p>,
        <p>
          <Link>Click here</Link> to inform yourself of our community
          guidelines.
        </p>,
      ],
    },
    {
      title: "Free Delivery Worldwide",
      icon: "fa-solid fa-earth-americas",
      text: [
        <p>
          Self explanatory, you will get free delivery for every purchase you
          make with your subscription, with the exception of the peasant
          subscription, which doesn't have this added benefit.
        </p>,
      ],
    },
    {
      title: "Special Discounts",
      icon: "fa-solid fa-percent",
      text: [
        <p>
          Yes, it's as sweet as it sounds, special discounts for all our beloved
          subscribers.
        </p>,
        <p>
          The percentage of the discounts vary depending on your current
          subscription plan. For more information about this,{" "}
          <a href="#subscriptions">check the susbcription cards below</a>
        </p>,
      ],
    },
    {
      title: "Exclusive Subscriptor Support",
      icon: "fa-solid fa-headset",
      text: [
        <p>
          We take good care of our subscribers by handling a 24/7, 365 days of
          the year, fast and efficient customer support.
        </p>,
        <p>
          <Link>Click here</Link> to contact us.
        </p>,
      ],
    },
  ],
  spanish: [
    {
      title: "Cofres Mensuales",
      icon: "fa-solid fa-toolbox",
      text: [
        <p>
          Consigue uno de estos maravillosos tesoros escondidos y tendrás en tus
          manos objetos totalmente geniales.
        </p>,
        <p>
          Estos cofres pueden contener una gran variedad de objetos diferentes,
          como por ejemplo: marcadores de libros, plumas, tazas, cuadernillos, e
          incluso libros! (los libros que pueden encontrarse en tus cofres son
          aquellos en tu lista de deseados, si no tienes ninguno marcado como
          deseado, no se enviará ningún libro).
        </p>,
        <p>
          Haz <Link>click aquí</Link> para ver la lista completa de todos los
          items que pueden llegarse a encontrar dentro de cada cofre.
        </p>,
      ],
    },
    {
      title: "Monedas Míticas y Aumentadores",
      icon: "fa-solid fa-toolbox",
      text: [
        <p>Las Monedas Míticas valen alrededor de 0.001 USD</p>,
        <p>
          Cuando compras en la tienda o al subscribirte, consigues algunas de
          estas monedas como recompensa.
        </p>,
        <code className="benefits__note">
          Nota: No tienes que estar subscripto para ganar Monedas Míticas, pero
          sí necesitas una cuenta verificada para hacerlo.{" "}
          <Link to="register">Haz click aquí para crear una</Link>.
        </code>,
        <p>
          También, puedes conseguir aumentadores de monedas de forma aleatoria
          dentro de un cofre o comprando en la tienda (las chances y el poder de
          los aumentadores pueden aumentar dependiendo de tu subscripción
          actual).
        </p>,

        <p>
          Haz
          <Link>click aquí</Link> para aprender más sobre nuestro sistema de
          divisas.
        </p>,
      ],
    },
    {
      title: "Acceso a Nuestra Galería",
      icon: "fa-regular fa-images",
      text: [
        <p>
          Con tu subscripción, un nuevo camino se abre frente a ti: La
          posibilidad de subir geniales fotos de tus grandes aventuras.
        </p>,
        <p>
          Haz
          <Link>click aquí</Link> para aprender más de nuestros principios de
          comunidad.
        </p>,
      ],
    },
    {
      title: "Envío Gratuito en Todo el Mundo",
      icon: "fa-solid fa-earth-americas",
      text: [
        <p>
          Autoexplicativo, obtendrás envío gratuito con cada compra que hagas
          con tu subscripción, con la excepción de la de aldeano, la cual no
          cuenta con este beneficio.
        </p>,
      ],
    },
    {
      title: "Descuentos Especiales",
      icon: "fa-solid fa-percent",
      text: [
        <p>
          Sí, ¡es tan dulce como suena! Descuentos especiales para nuestros
          amados subscriptores.
        </p>,
        <p>
          El porcentaje de descuento varía dependiendo de tu subscripción
          actual. Para más información acerca de esto,{" "}
          <a href="#subscriptions">
            comprueba las cartas de subscripción aquí abajo
          </a>
          .
        </p>,
      ],
    },
    {
      title: "Atención Exclusiva a Subscriptores",
      icon: "fa-solid fa-headset",
      text: [
        <p>
          Cuidamos muy bien a nuestros subscriptores ofreciendo un serivicio de
          atención veloz y eficiente de 24/7, los 365 días del año.
        </p>,
        <p>
          Haz <Link>click aquí</Link> para contactarnos.
        </p>,
      ],
    },
  ],
};

export {
  homeLinks,
  storeLinks,
  opt,
  subscriptionCards,
  galleryArr,
  howItWorksContent,
  benefitsContent,
  titles,
  hero,
};
