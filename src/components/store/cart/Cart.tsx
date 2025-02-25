import OrderSummary from "./OrderSummary";
import styled from "styled-components";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <RootContainer style={{ minHeight: "100vh" }}>
      <ItemsContainer>
        <Title>Shopping Cart</Title>

        <CartItems />
      </ItemsContainer>
      <OrderSummary />
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
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 5rem 10rem;
  gap: 5rem;
`;
