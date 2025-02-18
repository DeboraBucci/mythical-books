import styled from "styled-components";

interface QuantitySelectorProps {
  quantity: number;
  reduce: () => void;
  increment: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  reduce,
  increment,
}) => {
  return (
    <div className="quantity-selector__container">
      <QuantitySelectorDiv>
        <button className="minus-btn" onClick={reduce}>
          <i className="fa-solid fa-minus" />
        </button>

        <div className="number">
          <p>{quantity}</p>
        </div>

        <button className="plus-btn" onClick={increment}>
          <i className="fa-solid fa-plus" />
        </button>
      </QuantitySelectorDiv>
    </div>
  );
};

export default QuantitySelector;

const QuantitySelectorDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-grey-100);

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    color: #5e5e5e;
    background-color: transparent;
    font-size: 1.4rem;
    transition: all 0.4s;

    &:hover {
      background-color: var(--color-purple);

      i {
        color: white;
      }
    }
  }

  i {
    transition: all 0.4s;
  }

  .minus-btn {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: 1px solid var(--color-grey-100);
  }

  .plus-btn {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: 1px solid var(--color-grey-100);
  }

  .number {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.6rem;
      font-weight: bold;
      color: var(--color-purple);
    }
  }
`;
