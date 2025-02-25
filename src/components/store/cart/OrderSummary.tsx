import styled from "styled-components";
import SummaryDetails from "./SummaryDetails";

const Checkout = () => {
  return (
    <RootContainer>
      <InnerContainer>
        <Title>Order Summary</Title>

        <SummaryDetails />

        <CheckoutBtn>Checkout</CheckoutBtn>
      </InnerContainer>
    </RootContainer>
  );
};

export default Checkout;

const RootContainer = styled.div`
  background-color: var(--color-grey-50);
  padding: 10rem 5rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100%;
  min-height: 40rem;
  max-width: 30rem;
`;

const Title = styled.h3`
  font-size: 2.6rem;
  font-weight: 700;
  padding-bottom: 1rem;
  color: var(--color-grey-500);
  border-bottom: 1px solid var(--color-grey-200);
`;

const CheckoutBtn = styled.button`
  text-transform: uppercase;
  font-size: 1.8rem;
  color: var(--color-white);
  background-color: var(--color-purple-600);
  border-radius: 12px;
  padding: 1.5rem;
`;
