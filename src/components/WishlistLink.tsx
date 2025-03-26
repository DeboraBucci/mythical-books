import { Link } from "react-router-dom";
import styled from "styled-components";

const WishlistLink = () => {
  return (
    <RootComponent>
      <Link to="wishlist">
        <i className="fa-solid fa-bookmark" />
      </Link>
    </RootComponent>
  );
};

export default WishlistLink;

const RootComponent = styled.div`
  i {
    font-size: 2.4rem;
    color: #6666e6;
  }
`;
