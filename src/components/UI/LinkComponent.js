import { Link } from "react-router-dom";

const LinkComponent = ({ linkType = "anchor", att, children }) =>
  linkType === "anchor" ? (
    <a href={att}>{children}</a>
  ) : (
    <Link to={att}>{children}</Link>
  );

export default LinkComponent;
