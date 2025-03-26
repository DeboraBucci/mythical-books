import { WishlistContext } from "context/WishlistProvider";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BookCard from "../books/book-card/BookCard";

const WishlistBooks = () => {
  const [wishlistBooks, setWishlistBooks] = useState<any[]>([]);

  const wishlistCtx = useContext(WishlistContext);

  const setBooksHandler = async () => {
    const books = await wishlistCtx?.getWishlistBooks();

    if (books) setWishlistBooks(books);
  };

  useEffect(() => {
    setBooksHandler();
  }, [wishlistCtx?.wishlistBookIds]);

  return (
    <RootContainer>
      <ul>
        {wishlistBooks.map((b) => (
          <BookCard
            title={b.title}
            authors={b.authors}
            image={b.image}
            price={b.price}
            averageRating={b.averageRating}
            ratingCount={b.ratingCount}
            id={b.id}
            stock={b.stock}
            physicalFormat={b.physicalFormat}
          />
        ))}
      </ul>
    </RootContainer>
  );
};

export default WishlistBooks;

const RootContainer = styled.div`
  height: 100vh;
  widows: 100vw;
  padding: 4rem 12rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  ul {
    display: flex;
    gap: 10rem;
  }
`;
