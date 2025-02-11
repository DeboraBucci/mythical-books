import { useState, useContext } from "react";

import LanguageContext from "../../context/language-context";
import ThemeContext from "../../context/theme-context";

import CustomLink from "../UI/CustomLink";
import { Logo } from "../UI/Logo";
import { Languages } from "types/general";
import { LinkStructure } from "data/links-data";
import { languages } from "data/general-data";

interface NavbarProps {
  links: LinkStructure[];
  title: boolean;
  children?: React.ReactNode;
  logoSize?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  links,
  title,
  children,
  logoSize,
}) => {
  const [langDropdownOpened, setLangDropdownOpened] = useState(false);

  const themeCtx = useContext(ThemeContext);
  const languageCtx = useContext(LanguageContext);

  const toggleThemeHandler = () => themeCtx.toggleTheme();

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
    <header className={`navbar ${title ? "navbar__shrinked" : ""}`}>
      <Logo title={title} size={logoSize} />

      <nav>
        {children}

        <ul className="navbar__list">
          {links.map((link) => (
            <li className="navbar__link" key={link.title[languageCtx.language]}>
              <CustomLink att={link.att} linkType={link.type}>
                {link.title[languageCtx.language]}{" "}
                <i
                  className={`${link.icon} navbar__icon--${link.iconClass}`}
                ></i>
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar__btns">
        <button
          onClick={toggleThemeHandler}
          className="navbar__btn navbar__btn--theme"
        >
          <i className="fa-solid fa-circle-half-stroke"></i>
        </button>

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
      </div>
    </header>
  );
};

export default Navbar;
