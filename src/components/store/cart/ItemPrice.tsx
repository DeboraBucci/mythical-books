import styled from "styled-components";

interface ItemPriceProps {
  originalPrice: number;
  discountPercentage?: number;
}

const ItemPrice: React.FC<ItemPriceProps> = ({
  originalPrice,
  discountPercentage,
}) => {
  const applyDiscount = (num: number) => {
    return num * ((100 - discountPercentage!) / 100);
  };

  const formatNumber = (num: number) => {
    return num.toFixed(2);
  };

  return (
    <ItemPriceDiv>
      {discountPercentage && (
        <p className="original-price">${formatNumber(originalPrice)}</p>
      )}
      <p className="discount-price">
        $
        {discountPercentage
          ? formatNumber(applyDiscount(originalPrice))
          : formatNumber(originalPrice)}
      </p>
    </ItemPriceDiv>
  );
};

export default ItemPrice;

const ItemPriceDiv = styled.div`
  text-align: end;

  .original-price {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: var(--color-grey-500);
  }

  .discount-price {
    margin-top: -0.5rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--color-purple);
  }
`;
