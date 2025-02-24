import Checkout from "./Checkout";
import styled from "styled-components";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <RootContainer style={{ minHeight: "100vh" }}>
      <ItemsContainer>
        <Title>Shopping Cart</Title>

        <CartItems />
      </ItemsContainer>
      <Checkout />
    </RootContainer>
  );
};

export default Cart;

const Title = styled.h2`
  padding: 0 20rem;
  font-family: "Quintessential", cursive;
  font-size: 5rem;
  font-weight: 300;
`;

const RootContainer = styled.div`
  display: flex;
`;

const ItemsContainer = styled.div`
  padding: 5rem 0 5rem 25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
