import { useState, useContext } from "react";

import LanguageContext from "../../context/language-context";
import ThemeContext from "../../context/theme-context";

import CustomLink from "../UI/CustomLink";
import { Logo } from "../UI/Logo";
import { Languages } from "types/general";
import { LinkStructure } from "data/links-data";
import { languages } from "data/general-data";
import ChangeThemeButton from "./ChangeThemeButton";
import ChangeLanguageButton from "./ChangeLanguageButton";

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
  const languageCtx = useContext(LanguageContext);

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
        <ChangeThemeButton />
        <ChangeLanguageButton />
      </div>
    </header>
  );
};

export default Navbar;
