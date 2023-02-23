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
    title: "Home",
    att: "/",
    icon: "fa-solid fa-house-chimney",
    iconClass: "store",
    type: "link",
  },
  {
    title: "Contact us",
    att: "/contact",
    icon: "fa-solid fa-paper-plane",
    iconClass: "works",
    type: "link",
  },
  {
    title: "Log In",
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
      "be part of the heartwarming folk who likes to drink bear and pass out singing songs",
    className: "peasant",
    price: [0.99, 9.99],
    benefits: {
      devilery: false,
      discounts: false,
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
      discounts: false,
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
      discounts: "Up to 10% OFF in the store",
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
      discounts: "Up to 25% OFF in the store",
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
      discounts: "Up to 35% OFF in the store",
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
      delivery: "Free and Fast Delivery",
      discounts: "Up to 50% OFF in the store",
      chest: "Diamond Chest",
      freeBook: "Free book each month",
    },
  },
  {
    name: "Ancient Dragon",
    icon: "fas fa-dragon",
    comment: "YOU... Impossible!!",
    className: "dragon",
    price: [29.99, 299.99],
    benefits: {
      delivery: "Free and Fast Delivery",
      discounts: "30% to 70% OFF in the store",
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

export { homeLinks, storeLinks, opt, subscriptionCards, galleryArr };
