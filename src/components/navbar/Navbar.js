import React from "react";

import CustomLink from "../UI/CustomLink";
import { Logo } from "../UI/Logo";

const Navbar = ({ links, title, children }) => {
  return (
    <nav className="navbar">
      <Logo title={title} />

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
    </nav>
  );
};

export default Navbar;
