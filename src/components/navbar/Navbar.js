import React from "react";
import logo from "../../assets/logo.png";

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
            <a href={link.href}>
              {link.title}{" "}
              <i className={`${link.icon} navbar__icon--${link.iconClass}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
