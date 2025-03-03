import QuantitySelector from "../../../UI/QuantitySelector";
import { CartContext } from "context/CartProvider";
import { useContext } from "react";
import styled from "styled-components";

type BookCardActionProps = {
  onAddHandler: () => void;
  bookId: number;
};

const BookCardAction: React.FC<BookCardActionProps> = ({
  onAddHandler,
  bookId,
}) => {
  const cartCtx = useContext(CartContext);
  const { quantity } = cartCtx.books.find((b) => b.id == bookId) ?? {};

  return (
    <RootContainer>
      {(!quantity || quantity == 0) && (
        <Button onClick={onAddHandler}>
          <span>Add to basket</span>
          <i className="fa-solid fa-basket-shopping"></i>
        </Button>
      )}

      {quantity && quantity != 0 && (
        <div className="quantity-container">
          <QuantitySelector bookId={bookId} quantity={quantity ?? 0} />
        </div>
      )}
    </RootContainer>
  );
};

export default BookCardAction;

const RootContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;

  & .quantity-container {
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: var(--color-white);
  background-color: var(--color-dark-purple);
  border: 1px solid var(--color-dark-purple);

  width: 100%;
  padding: 1rem;
  font-weight: 700;

  transition: all 0.2s ease-out;

  &:hover {
    background-color: transparent;
    color: var(--color-dark-purple);

    i {
      animation: var(--up-and-down-animation) 0.6s ease infinite;
    }
  }
`;
