import styled from "styled-components";
import ItemPrice from "./ItemPrice";
import triangle from "../../../assets/triangle.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "context/CartProvider";

const SummaryDetails = () => {
  const [total, setTotal] = useState(0);

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    setTotal(cartCtx.subTotal + (cartCtx.shipping.price ?? 0));
  }, [cartCtx]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const shippingName = e.target.value;
    let shippingPrice = 0;

    switch (shippingName) {
      case "standard":
        shippingPrice = 5;
        break;
      case "premium":
        shippingPrice = 10;
        break;
      default:
        shippingPrice = 5;
    }

    cartCtx.setShipping({
      name: shippingName,
      price: shippingPrice,
    });
  };

  return (
    <CheckoutInfoContainer>
      <SubTotalContainer>
        <p>{cartCtx.books.length} items</p>
        <p>$ {cartCtx.subTotal}</p>
      </SubTotalContainer>

      <DropdownContainer>
        <p>Shipping</p>
        <Dropdown>
          <select
            name="shipping"
            id="shipping"
            value={cartCtx.shipping.name}
            onChange={handleOptionChange}
          >
            <option value="standard">Standard Delivery — $5.00</option>
            <option value="premium">Premium Delivery — $10.00</option>
          </select>

          <img src={triangle} />
        </Dropdown>
      </DropdownContainer>

      <TotalCost>
        <p>TOTAL COST</p>

        <ItemPrice originalPrice={total} />
      </TotalCost>
    </CheckoutInfoContainer>
  );
};

export default SummaryDetails;

const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 0;
`;

const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.8rem;
    color: var(--color-grey-500);
  }

  p:last-child {
    font-weight: bold;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--color-grey-500);
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const Dropdown = styled.div`
  display: flex;
  position: relative;

  select {
    border: none;
    flex: 1;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 1.5rem;
    border-radius: 4px;
    color: var(--color-grey-400);
  }

  select:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(106, 63, 155, 0.2);
  }

  option {
    font-weight: bold;
  }

  img {
    position: absolute;
    width: 3.5rem;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const TotalCost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--color-grey-200);

  p {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-black);
  }
`;
