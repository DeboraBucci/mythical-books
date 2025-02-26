import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import CustomLink from "../../UI/CustomLink";
import { CartContext } from "context/CartProvider";

const CartIconLink = () => {
  const [animate, setAnimate] = useState(false);
  const { books } = useContext(CartContext);

  useEffect(() => {
    setAnimate(true);

    setTimeout(() => setAnimate(false), 200);
  }, [books.length]);

  const number =
    books.length <= 99 ? (
      books.length
    ) : (
      <>
        99 <span>+</span>
      </>
    );

  return (
    <RootLi>
      <div className="item-count">
        <p className={animate ? "animate" : ""}>{number}</p>
      </div>
      <CustomLink att="/store/cart" linkType="link">
        <i className="fa-solid fa-cart-shopping" />
      </CustomLink>
    </RootLi>
  );
};

export default CartIconLink;

const RootLi = styled.li`
  position: relative;

  @keyframes jump {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-2px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  .animate {
    animation: jump 0.2s linear;
  }

  .item-count {
    position: absolute;
    top: -0.8rem;
    right: -0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;

    p {
      color: var(--color-black);
      font-weight: bold;
      font-size: 1.3rem;
    }
  }

  i {
    font-size: 2rem;
    color: var(--color-purple);
  }

  span {
    position: absolute;
    color: #ec9900;
    font-size: 1.6rem;
    top: -0.8rem;
    right: -0.9rem;
  }
`;
