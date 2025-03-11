import styled from "styled-components";

const Bookmark = () => {
  return (
    <RootContainer>
      <i className={`fa-${false ? "solid" : "regular"} fa-bookmark`} />
      {false ? <span>In whishlist</span> : <span>Add to whishlist</span>}
    </RootContainer>
  );
};

export default Bookmark;

const RootContainer = styled.button`
  background-color: transparent !important;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 2rem;

  display: flex;
  gap: 2rem;

  background-color: transparent;

  & i {
    color: #6666e6;
    font-size: 3rem;
  }

  & span {
    position: absolute;
    top: 3.5rem;
    left: 0;
    font-size: 1.2rem;
    background-color: var(--color-grey-800);
    color: var(--color-white);
    padding: 0.5rem;
    border-radius: 3px;
    min-width: 8rem;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover {
    span {
      opacity: 1;
    }
  }
`;
