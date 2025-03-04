import styled from "styled-components";

const Bookmark = () => {
  return (
    <RootContainer>
      <button>
        <i className="fa-regular fa-bookmark" />
      </button>
    </RootContainer>
  );
};

export default Bookmark;

const RootContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  display: flex;
  gap: 2rem;

  & button {
    background-color: transparent;
    color: royalblue;
  }

  & i {
    font-size: 3rem;
  }
`;
