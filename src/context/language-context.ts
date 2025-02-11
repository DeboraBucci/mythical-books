import { createContext } from "react";
import { Languages } from "types/general";

interface LanguageContextStructure {
  language: Languages;
  changeLanguage: (lang: Languages) => void;
}

const LanguageContext = createContext<LanguageContextStructure>({
  language: "english",
  changeLanguage: () => {},
});

export default LanguageContext;
