import { Languages } from "types/general";

export interface LinkStructure {
  title: Record<Languages, string>;
  att: string;
  icon: string;
  iconClass: string;
  type: string;
}

const homeLinks: LinkStructure[] = [
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

const storeLinks: LinkStructure[] = [
  {
    title: { english: "Home", spanish: "Casa" },
    att: "/",
    icon: "fas fa-home",
    iconClass: "home",
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
  {
    title: { english: "", spanish: "" },
    att: "/cart",
    icon: "fa-solid fa-cart-shopping",
    iconClass: "cart",
    type: "link",
  },
];

export { homeLinks, storeLinks };
