import LanguageContext from "context/language-context";
import { languages } from "data/general-data";
import { useContext, useState } from "react";
import { Languages } from "types/general";

const ChangeLanguageButton = () => {
  const [langDropdownOpened, setLangDropdownOpened] = useState(false);

  const languageCtx = useContext(LanguageContext);

  const changeLanguagesHandler = () => {
    setLangDropdownOpened((prev) => !prev);
  };

  const changeLanguageHandler = (e: React.MouseEvent<HTMLElement>) => {
    let selectedLanguage = (e.target as HTMLElement).innerText.toLowerCase();

    if (selectedLanguage === "inglés") selectedLanguage = "english";
    if (selectedLanguage === "español") selectedLanguage = "spanish";

    changeLanguagesHandler();
    languageCtx.changeLanguage(selectedLanguage as Languages);
  };

  return (
    <div className="navbar__language-dropdown">
      <button
        className="navbar__btn navbar__btn--language"
        onClick={changeLanguagesHandler}
      >
        <i className="fa-solid fa-language"></i>
      </button>

      <div
        className={`navbar__language-opts ${
          langDropdownOpened ? "navbar__language-opts--opened" : ""
        }`}
      >
        {languages[languageCtx.language].map((language) => (
          <p
            key={language}
            className="navbar__language-opt"
            onClick={changeLanguageHandler}
          >
            {language}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChangeLanguageButton;
