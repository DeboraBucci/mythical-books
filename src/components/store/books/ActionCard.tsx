import QuantitySelector from "../../UI/QuantitySelector";
import { CartContext } from "context/CartProvider";
import { useContext } from "react";

interface ActionCardProps {
  children: React.ReactNode;
  quantitySelectorStyles?: object;
  bookId: number;
}

const ActionCard: React.FC<ActionCardProps> = ({
  children,
  bookId,
  quantitySelectorStyles,
}) => {
  const cartCtx = useContext(CartContext);
  const { quantity } = cartCtx.books.find((b) => b.id == bookId) ?? {};

  return (
    <>
      {(!quantity || quantity == 0) && children}

      {quantity && quantity != 0 && (
        <div style={quantitySelectorStyles}>
          <QuantitySelector bookId={bookId} quantity={quantity ?? 0} />
        </div>
      )}
    </>
  );
};

export default ActionCard;
