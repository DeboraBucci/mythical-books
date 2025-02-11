import { useState } from "react";
import LanguageContext from "./language-context";
import { Languages } from "types/general";

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = (props) => {
  const [currLanguage, setCurrLanguage] = useState<Languages>("english");

  const changeLanguageHandler = (newLang: Languages) => {
    localStorage.setItem("language", newLang);
    setCurrLanguage(newLang);
  };

  const languageCtx = {
    language: currLanguage,
    changeLanguage: changeLanguageHandler,
  };

  return (
    <LanguageContext.Provider value={languageCtx}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
