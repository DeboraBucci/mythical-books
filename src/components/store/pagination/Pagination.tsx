import { BooksContext } from "context/BooksProvider";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const MAX_SCOPE = 5;

const Pagination = () => {
  const booksCtx = useContext(BooksContext);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [selected, setSelected] = useState(1);
  const [indexes, setIndexes] = useState([0, MAX_SCOPE]);

  useEffect(() => {
    if (selected > 1 && selected < 5) {
      booksCtx.setPage(selected);
    }
  }, [selected]);

  const onNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelected = +e.currentTarget.value.trim();

    if (newSelected < 1 || newSelected > arr.length) {
      return;
    }

    setSelected(newSelected);

    if (newSelected >= 1 && newSelected <= MAX_SCOPE) {
      setIndexes([0, MAX_SCOPE]);
    } else if (newSelected > arr.length - MAX_SCOPE) {
      setIndexes([arr.length - MAX_SCOPE, arr.length]);
    } else {
      setIndexes([newSelected - MAX_SCOPE, newSelected]);
    }
  };

  const decrementSelectedHandler = () => {
    const newSelected = selected - 1;

    if (selected > 0) setSelected((prev) => prev - 1);

    // Se decrementa los indices hasta [0, MAX_SCOPE]
    if (indexes[0] >= 0) {
      setIndexes((prev) => [prev[0] - 1, prev[1] - 1]);
    }
  };

  const incrementSelectedHandler = () => {
    const newSelected = selected + 1;

    if (selected < arr.length) setSelected((prev) => prev + 1);

    if (
      newSelected > MAX_SCOPE &&
      newSelected <= arr.length &&
      newSelected > indexes[1]
    ) {
      setIndexes((prev) => [prev[0] + 1, prev[1] + 1]);
    }
  };

  return (
    <RootContainer>
      <div className="main-container">
        <Arrow disabled={selected == 1} onClick={decrementSelectedHandler}>
          <i className="fa-solid fa-chevron-left" />
        </Arrow>

        {selected >= MAX_SCOPE && (
          <div>
            <p>...</p>
          </div>
        )}

        <ul>
          {arr.slice(indexes[0], indexes[1]).map((num) => (
            <li
              key={num}
              onClick={() => setSelected(num)}
              className={`${selected == num ? "selected" : ""}`}
            >
              <p className="number">{num}</p>
            </li>
          ))}
        </ul>

        {selected < arr.length && (
          <div>
            <p>...</p>
          </div>
        )}

        <Arrow
          disabled={selected == arr.length}
          onClick={incrementSelectedHandler}
        >
          <i className="fa-solid fa-chevron-right" />
        </Arrow>
      </div>

      <InputContainer>
        <input
          type="number"
          min="1"
          max="5"
          value={selected}
          onChange={onNumberChangeHandler}
        />
        <p>of {booksCtx.totalPages} pages</p>
      </InputContainer>
    </RootContainer>
  );
};

export default Pagination;

const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 5rem 0;

  .main-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem;
    border-radius: 2.4rem; // check: 1.2rem
    background-color: var(--color-grey-50);
  }

  ul {
    gap: 0 !important;
  }

  li,
  p {
    color: var(--color-grey-400);
    font-size: 1.6rem;
    font-weight: 500;
  }

  li {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.2rem;
    border: 1px solid var(--color-grey-100);
  }

  li:not(:last-child) {
    border-right-color: transparent;
  }

  .number {
    position: relative;
    z-index: 10;
  }

  .selected {
    border-color: transparent;
    transition: all 0.2s;

    p {
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--color-white);
    }
  }

  li:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 50%;
    height: 50%;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    transition: all 0.2s;
  }

  .selected:before {
    width: 110%;
    height: 110%;
    background-color: var(--color-purple);
  }
`;

const Arrow = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  color: var(--color-white);
  background-color: var(--color-purple);

  i {
    font-size: 1.2rem;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 5rem;
    height: 3rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    text-align: center;
    background-color: var(--color-grey-500);
    color: var(--color-white);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  intput[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`;
