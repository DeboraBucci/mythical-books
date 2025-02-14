import { Link } from "react-router-dom";

interface CustomLinkProps {
  linkType?: string;
  att: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  linkType = "anchor",
  att,
  children,
}) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return linkType === "anchor" ? (
    <a href={att} onClick={(e) => handleScroll(e, att)}>
      {children}
    </a>
  ) : (
    <Link to={att}>{children}</Link>
  );
};

export default CustomLink;
