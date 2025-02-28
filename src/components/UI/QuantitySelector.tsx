import { CartContext } from "context/CartProvider";
import { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";

interface QuantitySelectorProps {
  bookId: number;
  quantity: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  bookId,
  quantity,
}) => {
  const cartCtx = useContext(CartContext);

  const [bookQuantity, setBookQuantity] = useState(quantity);

  const onChangeQuantityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = +e.target.value;
    if (!isNaN(newQuantity)) {
      setBookQuantity(newQuantity);
      cartCtx.updateBookQuantity(bookId, newQuantity);
    }
  };

  const onIncreaseQuantityHandler = () => {
    setBookQuantity((prev) => prev + 1);
    cartCtx.updateBookQuantity(bookId);
  };

  const onDecreaseQuantityHandler = () => {
    setBookQuantity((prev) => prev - 1);
    cartCtx.updateBookQuantity(bookId, -1);
  };

  return (
    <div className="quantity-selector__container">
      <QuantitySelectorDiv>
        <button className="minus-btn" onClick={onDecreaseQuantityHandler}>
          <i className="fa-solid fa-minus" />
        </button>

        <div className="number">
          <input value={bookQuantity} onChange={onChangeQuantityHandler} />
        </div>

        <button className="plus-btn" onClick={onIncreaseQuantityHandler}>
          <i className="fa-solid fa-plus" />
        </button>
      </QuantitySelectorDiv>
    </div>
  );
};

export default QuantitySelector;

const QuantitySelectorDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-grey-100);

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    color: #5e5e5e;
    background-color: transparent;
    font-size: 1.4rem;
    transition: all 0.4s;

    &:hover {
      background-color: var(--color-purple);

      i {
        color: white;
      }
    }
  }

  i {
    transition: all 0.4s;
  }

  .minus-btn {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: 1px solid var(--color-grey-100);
  }

  .plus-btn {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: 1px solid var(--color-grey-100);
  }

  .number {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      all: unset; // helps center text by deleting default styles
      width: 100%;
      text-align: center;
      border: none;
      font-size: 1.6rem;
      font-weight: bold;
      color: var(--color-purple);
    }
  }
`;
