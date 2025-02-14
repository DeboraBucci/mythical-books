import React from "react";
import BookCard from "./BookCard";
import { BookInterface } from "types/books";

interface BookshelfProps {
  books: BookInterface[];
}

const Bookshelf: React.FC<BookshelfProps> = ({ books }) => {
  return (
    <div className="store__bookshelf">
      {books.map((book) => {
        return (
          <BookCard
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
