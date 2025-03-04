import ActionCard from "./ActionCard";
import styled from "styled-components";

interface BookDetailActionProps {
  bookId: number;
  onAddToCart: () => void;
}

const BookDetailAction: React.FC<BookDetailActionProps> = ({
  bookId,
  onAddToCart,
}) => {
  return (
    <RootComponent>
      <ActionCard bookId={bookId}>
        <button className="cart" onClick={onAddToCart}>
          Add to Cart
        </button>
      </ActionCard>

      <button className="wishlist">Add to Wishlist</button>
    </RootComponent>
  );
};

export default BookDetailAction;

const RootComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & .cart {
    background-color: var(--color-purple);
    color: var(--color-white);
  }

  & .cart,
  & .wishlist {
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 14px;
    transition: all 0.4s;
  }

  & .cart:hover,
  & .wishlist:hover {
    transform: translateY(-1px);
  }

  & .cart:hover {
    background-color: var(--color-dark-purple);
  }

  & .wishlist:hover {
    background-color: var(--color-grey-500);
    color: var(--color-white);
  }
`;
