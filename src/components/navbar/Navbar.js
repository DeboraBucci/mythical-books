import React from "react";
import logo from "../../assets/logo.png";

import LinkComponent from "../UI/LinkComponent";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#hero">
          <img
            src={logo}
            alt="logo"
            style={{ width: "45px", height: "45px" }}
          />
        </a>
      </div>

      <ul className="navbar__list">
        {links.map((link) => (
          <li className="navbar__link" key={link.title}>
            <LinkComponent att={link.att} type={link.type}>
              {link.title}{" "}
              <i className={`${link.icon} navbar__icon--${link.iconClass}`}></i>
            </LinkComponent>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
