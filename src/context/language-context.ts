import { createContext } from "react";

interface LanguageContextStructure {
  language: string;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextStructure>({
  language: "",
  changeLanguage: () => {},
});

export default LanguageContext;
