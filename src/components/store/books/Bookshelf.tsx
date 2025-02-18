import { useContext } from "react";
import BookCard from "./BookCard";
import { BooksContext } from "context/BooksProvider";

const Bookshelf = () => {
  const { books } = useContext(BooksContext);

  return (
    <div className="store__bookshelf">
      {books.length === 0 && <p>No books found.</p>}
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
    </div>
  );
};
export default Bookshelf;
