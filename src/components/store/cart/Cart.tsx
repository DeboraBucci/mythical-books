import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "context/CartProvider";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div>
        <h2>Shopping Cart</h2>

        <ul>
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
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Cart;
