import React from "react";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";

import CustomLink from "../UI/CustomLink";
import { Logo } from "../UI/Logo";

const Navbar = ({ links, title, children, logoSize }) => {
  const themeCtx = useContext(ThemeContext);
  const toggleThemeHandler = () => themeCtx.toggleTheme();

  return (
    <nav className={`navbar ${title ? "navbar__shrinked" : ""}`}>
      <Logo title={title} size={logoSize} />

      {children}

      <ul className="navbar__list">
        {links.map((link) => (
          <li className="navbar__link" key={link.title}>
            <CustomLink att={link.att} type={link.type}>
              {link.title}{" "}
              <i className={`${link.icon} navbar__icon--${link.iconClass}`}></i>
            </CustomLink>
          </li>
        ))}
      </ul>

      <div className="navbar__btns">
        <button
          onClick={toggleThemeHandler}
          className="navbar__btn navbar__btn--theme"
        >
          <i className="fa-solid fa-circle-half-stroke"></i>
        </button>
        <button className="navbar__btn navbar__btn--language">
          <i className="fa-solid fa-language"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
