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
      <img src={x} />
    </DeleteItemBtn>
  );
};

export default DeleteItemButton;

const DeleteItemBtn = styled.button`
  background-color: transparent;
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;

  img {
    font-size: 2.4rem;
  }
`;
