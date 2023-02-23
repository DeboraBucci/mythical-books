import { useState } from "react";
import LanguageContext from "./language-context";

const LanguageProvider = (props) => {
  const [currLanguage, setCurrLanguage] = useState("english");

  const changeLanguageHandler = (newLang) => {
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
