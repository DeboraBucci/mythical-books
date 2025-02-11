import { useState } from "react";
import LanguageContext from "./language-context";

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = (props) => {
  const [currLanguage, setCurrLanguage] = useState("english");

  const changeLanguageHandler = (newLang: string) => {
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
