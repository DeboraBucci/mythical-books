import styled from "styled-components";
import x from "../../../assets/x.png";

interface DeleteItemButtonProps {
  onDelete: () => void;
}

const DeleteItemButton: React.FC<DeleteItemButtonProps> = ({ onDelete }) => {
  return (
    <DeleteItemBtn>
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
