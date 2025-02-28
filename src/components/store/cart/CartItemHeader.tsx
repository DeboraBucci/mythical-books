import styled from "styled-components";

interface CartItemHeaderProps {
  title: string;
  authors: string[];
}

const CartItemHeader: React.FC<CartItemHeaderProps> = ({ title, authors }) => {
  const formatAuthors = () => {
    let authorsStr = "";

    authors.forEach((author, i) => {
      authorsStr += author;
      if (i < authors?.length - 1) authorsStr += ", ";
    });

    return authorsStr;
  };

  return (
    <CartItemHeaderDiv>
      <h3>{title}</h3>
      {authors?.length !== 0 && <p>by {formatAuthors()}</p>}
    </CartItemHeaderDiv>
  );
};

export default CartItemHeader;

const CartItemHeaderDiv = styled.div`
  width: 20rem;

  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-family: "Quintessential", cursive;
    font-size: 2.4rem;
    color: var(--color-grey-800);
  }

  p {
    font-size: 1.6rem;
    color: var(--color-grey-400);
  }
`;
