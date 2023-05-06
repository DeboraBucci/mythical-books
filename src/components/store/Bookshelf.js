import React from "react";
import Card from "./Card";

const Bookshelf = ({ books }) => (
  <div className="store__bookshelf">
    {books.map((book) => {
      return (
        <Card
          title={book.title}
          image={book.image}
          authors={book.authors}
          key={book.id}
          id={book.id}
          rating={book.rating}
          ratingCount={book.ratingsCount}
          price={book.price}
          saleabilty={book.saleabilty}
        />
      );
    })}
  </div>
);

export default Bookshelf;
