import styled from "styled-components";
import x from "../../../assets/x.png";
import { useContext } from "react";
import { CartContext } from "context/CartProvider";

interface DeleteItemButtonProps {
  id: number;
}

const DeleteItemButton: React.FC<DeleteItemButtonProps> = ({ id }) => {
  const cartCtx = useContext(CartContext);

  const handleItemDelete = () => {
    cartCtx.removeBook(id);
  };

  return (
    <DeleteItemBtn onClick={handleItemDelete}>
      <div>
        <img src={x} />
      </div>
    </DeleteItemBtn>
  );
};

export default DeleteItemButton;

const DeleteItemBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;

  :hover {
    animation: var(--pulsate-animation) 0.8s linear infinite;

    img {
      animation: var(--rotate-animation) 5s linear infinite;
    }
  }
`;
