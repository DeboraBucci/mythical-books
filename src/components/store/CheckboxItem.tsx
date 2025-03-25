import styled from "styled-components";

interface CheckboxItemProps {
  id: string;
  name: string;
  checked?: boolean;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  id,
  name,
  checked = false,
  setSelectedCategories,
}) => {
  const setCategoryBooksHandler = async () => {
    setSelectedCategories((prev: string[]) => {
      const alreadyChecked = prev.find((cId) => cId == id);

      if (alreadyChecked) {
        return prev.filter((cId) => cId != id);
      }

      return [...prev, id];
    });
  };

  return (
    <RootItem onClick={setCategoryBooksHandler}>
      <button>
        <div
          style={{
            borderColor: checked
              ? "var(--color-purple-200)"
              : "var(--color-grey-200)",
          }}
        >
          <i
            className="fa-solid fa-check"
            style={{
              color: checked ? "var(--color-purple-200)" : "transparent",
            }}
          />
        </div>
        <p>{name}</p>
      </button>
    </RootItem>
  );
};

export default CheckboxItem;

const RootItem = styled.li`
  margin: 2rem 0;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    color: var(--color-grey-200);
    text-transform: capitalize;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 4px;
    border: 1px solid var(--color-grey-200);
  }

  i {
    font-size: 1rem;
  }
`;
