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
}) =>
  linkType === "anchor" ? (
    <a href={att}>{children}</a>
  ) : (
    <Link to={att}>{children}</Link>
  );

export default CustomLink;
