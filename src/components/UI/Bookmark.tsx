import { WishlistContext } from "context/WishlistProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

interface BookmarkProps {
  id: number;
}

const Bookmark: React.FC<BookmarkProps> = ({ id }) => {
  const wishlistCtx = useContext(WishlistContext);

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(!!wishlistCtx?.wishlistBookIds.find((bId) => bId == id));
  }, [wishlistCtx?.wishlistBookIds]);

  const onBookmarkHandler = () => {
    wishlistCtx?.addBookToWishlist(id);
  };

  return (
    <RootContainer onClick={onBookmarkHandler}>
      <i className={`fa-${isBookmarked ? "solid" : "regular"} fa-bookmark`} />
      {isBookmarked ? (
        <span>Remove from wishlist</span>
      ) : (
        <span>Add to wishlist</span>
      )}
    </RootContainer>
  );
};

export default Bookmark;

const RootContainer = styled.button`
  cursor: pointer !important;
  pointer-events: auto !important;
  background-color: transparent !important;
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
