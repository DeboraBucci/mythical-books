import logo from "../../assets/logo.png";

export const Logo = ({ title }) => (
  <div className="logo">
    <div className="logo__img">
      <a href="#hero">
        <img src={logo} alt="logo" style={{ width: "45px", height: "45px" }} />
      </a>
    </div>

    {title && (
      <>
        <h2>Mythical Books</h2>
        <div className="logo__panel logo__panel--1"></div>
        <div className="logo__panel logo__panel--2"></div>
        <div className="logo__panel logo__panel--3"></div>
        <div className="logo__panel logo__panel--4"></div>
        <div className="logo__panel logo__panel--5"></div>
      </>
    )}
  </div>
);
