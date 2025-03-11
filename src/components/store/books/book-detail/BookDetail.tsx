import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookInterface } from "types/books";
import { getBookById } from "api/book-api";
import { CartContext } from "context/CartProvider";
import BookDetailHeading from "./BookDetailHeading";
import Bookmark from "../../../UI/Bookmark";
import BookDetailAction from "./BookDetailAction";
import { bookToCartBook } from "functions/book-mappers";
import BookDetailFeatures from "./BookDetailFeatures";
import FallbackCover from "../../../../assets/cover-not-available.webp";

const BookDetail = () => {
  const cartCtx = useContext(CartContext);

  const [book, setBook] = useState<BookInterface | null>(null);

  const query = useParams();

  const getBookHandler = async () => {
    if (query.id) {
      const book = await getBookById(query.id);
      setBook(book);
    }
  };

  useEffect(() => {
    getBookHandler();
  }, []);

  const onAddToCartHandler = () => {
    if (book) cartCtx.addBook(bookToCartBook(book));
  };

  return (
    <div className="book-details">
      {book === null && (
        <div>
          <p>There is no book with that id.</p>
        </div>
      )}
      {book !== null && (
        <div className="book-details__container">
          <div className="book-details__img">
            <img
              src={book.image ? book.image : FallbackCover}
              alt={book.title}
            />
          </div>

          <div className="book-details__content">
            <BookDetailHeading
              title={book.title}
              averageRating={book.averageRating}
              ratingCount={book.ratingCount}
              authors={book.authors}
            />

            <Bookmark />

            <div className="book-details__categories">
              {book.categories.map((category) => (
                <span className="book-details__category" key={category.id}>
                  {category.name}
                </span>
              ))}
            </div>

            <p className="book-details__price">
              <span>Price: </span>
              <span className="book-details__price--colored">
                {book.price} {book.currency}
              </span>
            </p>

            <BookDetailAction
              bookId={book.id}
              onAddToCart={onAddToCartHandler}
            />

            <div className="book-details__description">
              <p>{book.description}</p>
            </div>

            <BookDetailFeatures
              publishers={book.publishers}
              pages={book.pages}
              publishedYear={book.publishedYear}
              isbn10={book.isbn10}
              isbn13={book.isbn13}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default BookDetail;
