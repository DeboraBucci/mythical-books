import { useContext, useEffect } from "react";
import BookCard from "./book-card/BookCard";
import { BooksContext } from "context/BooksProvider";
import Pagination from "../pagination/Pagination";
import styled from "styled-components";

const Bookshelf = () => {
  const { books } = useContext(BooksContext);

  useEffect(() => {}, []);

  return (
    <RootComponent className="store__bookshelf">
      {books.length === 0 && <p>No books found.</p>}

      {books?.length > 0 && (
        <ul>
          {books.map((book) => {
            return (
              <BookCard
                physicalFormat={book.physicalFormat}
                title={book.title}
                image={book.image}
                authors={book.authors}
                key={book.id}
                id={book.id}
                stock={book.stock}
                averageRating={book.averageRating}
                ratingCount={book.ratingCount}
                price={book.price}
              />
            );
          })}
        </ul>
      )}
      <Pagination />
    </RootComponent>
  );
};
export default Bookshelf;

const RootComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 7rem 4rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }
`;
