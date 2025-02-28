import QuantitySelector from "../../../components/UI/QuantitySelector";
import ItemPrice from "./ItemPrice";
import ItemDetailColumn from "./ItemDetailColumn";
import CartItemHeader from "./CartItemHeader";
import DeleteItemButton from "./DeleteItemButton";
import styled from "styled-components";

interface CartItemProps {
  id: number;
  title: string;
  authors: string[];
  bookFormat?: string;
  originalPrice: number;
  units?: number;
  discountPercentage?: number;
  cover?: string;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  authors,
  bookFormat,
  id,
  originalPrice,
  units = 1,
  discountPercentage,
  cover,
}) => {
  return (
    <CartItemDiv>
      <div className="cover">
        <img src={cover} />
      </div>

      <div className="content">
        <CartItemHeader title={title} authors={authors} />

        <div className="detail">
          {bookFormat && (
            <div className="book-format">
              <i className="fa-solid fa-book" />
              <p>{bookFormat}</p>
            </div>
          )}

          <div className="table">
            <ItemDetailColumn title="Quantity">
              <QuantitySelector quantity={units} bookId={id} />
            </ItemDetailColumn>

            <ItemDetailColumn title="Price">
              <ItemPrice
                originalPrice={originalPrice}
                discountPercentage={discountPercentage}
              />
            </ItemDetailColumn>

            <ItemDetailColumn title="Sub total">
              <ItemPrice
                originalPrice={units * originalPrice}
                discountPercentage={discountPercentage}
              />
            </ItemDetailColumn>
          </div>
        </div>

        <DeleteItemButton id={id} />
      </div>
    </CartItemDiv>
  );
};

export default CartItem;

const CartItemDiv = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-grey-100);
  width: 70rem;
  height: 14rem;

  .cover {
    display: flex;
    width: 10rem;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .book-format {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.8rem;

    p {
      color: var(--color-grey-400);
    }

    i {
      color: var(--color-purple);
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
  }

  .table {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .content {
    padding: 2rem 0;
    display: flex;
    gap: 4rem;
  }
`;
