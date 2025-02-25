import OrderSummary from "./OrderSummary";
import styled from "styled-components";
import CartItems from "./CartItems";
import { useContext } from "react";
import { CartContext } from "context/CartProvider";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <RootContainer>
      {cartCtx.books.length == 0 && (
        <EmptyCart>
          <p>There are no items in your cart. </p>
        </EmptyCart>
      )}

      <ItemsContainer>
        <Title>Shopping Cart</Title>

        {cartCtx.books.length != 0 && <CartItems />}
      </ItemsContainer>

      {cartCtx.books.length != 0 && <OrderSummary />}
    </RootContainer>
  );
};

export default Cart;

const Title = styled.h2`
  padding: 0 35rem 0 0;
  font-family: "Quintessential", cursive;
  font-size: 5rem;
  font-weight: 300;
`;

const RootContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 5rem 10rem;
  gap: 5rem;
`;

const EmptyCart = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-grey-400);
  font-size: 2rem;
`;
