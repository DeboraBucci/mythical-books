const homeLinks = [
  {
    title: "Store",
    att: "/store",
    icon: "fas fa-store",
    iconClass: "store",
    type: "link",
  },
  {
    title: "How it Works",
    att: "#works",
    icon: "fas fa-dice-d20",
    iconClass: "works",
    type: "anchor",
  },
  {
    title: "Benefits",
    att: "#benefits",
    icon: "far fa-gem",
    iconClass: "benefits",
    type: "anchor",
  },
  {
    title: "Subscriptions",
    att: "#subscriptions",
    icon: "fas fa-dragon",
    iconClass: "subscriptions",
    type: "anchor",
  },
  {
    title: "Log In",
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

export { homeLinks, storeLinks, opt };
