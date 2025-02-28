import { CartContext } from "context/CartProvider";
import { useContext } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const CartItems = () => {
  const cartCtx = useContext(CartContext);

  return (
    <ItemList>
      {cartCtx.books.map(
        ({
          id,
          title,
          physicalFormat,
          authors,
          unitPrice,
          quantity,
          discountPercentage,
          image,
        }) => (
          <CartItem
            key={id}
            id={id}
            title={title}
            bookFormat={physicalFormat}
            authors={authors}
            originalPrice={unitPrice}
            units={quantity}
            discountPercentage={discountPercentage}
            cover={image}
          />
        )
      )}
    </ItemList>
  );
};

export default CartItems;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
