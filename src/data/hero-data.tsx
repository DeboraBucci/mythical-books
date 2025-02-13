import { Languages } from "types/general";

interface HeroText {
  firstPart: string;
  secondPart: string;
}

const hero: Record<Languages, HeroText> = {
  english: {
    firstPart: "Where your dreams come ",
    secondPart: "to life",
  },
  spanish: { firstPart: "Donde tus sueños vienen ", secondPart: "a la vida" },
};

export { hero };
