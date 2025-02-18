import styled from "styled-components";

interface ItemDetailColumnProps {
  children: React.ReactNode;
  title: string;
}

const ItemDetailColumn: React.FC<ItemDetailColumnProps> = ({
  children,
  title,
}) => {
  return (
    <ItemDetailColumnDiv>
      <p>{title}</p>
      {children}
    </ItemDetailColumnDiv>
  );
};

export default ItemDetailColumn;

const ItemDetailColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #848484;
  }
`;
