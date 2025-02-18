import styled from "styled-components";

interface ItemPriceProps {
  originalPrice: number;
  discountPrice?: number;
}

const ItemPrice: React.FC<ItemPriceProps> = ({
  originalPrice,
  discountPrice,
}) => {
  const formatNumber = (num: number) => {
    return num.toFixed(2);
  };

  return (
    <ItemPriceDiv>
      {discountPrice && (
        <p className="original-price">${formatNumber(discountPrice)}</p>
      )}
      <p className="discount-price">
        $
        {discountPrice
          ? formatNumber(discountPrice)
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
    color: #5e5e5e;
  }

  .discount-price {
    margin-top: -0.5rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #a95fff;
  }
`;
