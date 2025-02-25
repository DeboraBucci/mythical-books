import logo from "../../assets/logo.png";
import CustomLink from "./CustomLink";

interface LogoProps {
  title: boolean;
  size?: string;
  att: string;
  linkType?: string;
}

export const Logo: React.FC<LogoProps> = ({ title, size, att, linkType }) => (
  <div className="logo">
    <div
      className="logo__container"
      style={{
        width: `${size === "big" ? 70 : 50}px`,
        height: `${size === "big" ? 70 : 50}px`,
      }}
    >
      <CustomLink att={att} linkType={linkType}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: `${size === "big" ? 65 : 45}px`,
            height: `${size === "big" ? 65 : 45}px`,
          }}
        />
      </CustomLink>
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
