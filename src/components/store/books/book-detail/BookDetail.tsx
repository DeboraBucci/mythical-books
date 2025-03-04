import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookInterface } from "types/books";
import { getBookById } from "api/book-api";
import { CartContext } from "context/CartProvider";
import BookDetailHeading from "./BookDetailHeading";
import Bookmark from "../../../UI/Bookmark";
import BookDetailAction from "./BookDetailAction";
import { bookToCartBook } from "functions/book-mappers";

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
  }, [cartCtx]);

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
            <img src={book.image} alt={book.title} />
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

            <div className="book-details__features">
              <p>
                <span>
                  {" "}
                  <i className="fa-regular fa-file-lines"></i> № of Pages
                </span>
                <span>{book.pages}</span>
              </p>

              <p>
                <span>
                  <i className="fa-regular fa-newspaper"></i> Publisher
                </span>
                {book.publishers.map((publisher) => (
                  <span key={publisher.id}>{publisher.name}</span>
                ))}
              </p>

              <p>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> Published Date
                </span>
                <span>{book.publishedYear}</span>
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-barcode"></i> ISBN10
                </span>
                <span>{book.isbn10}</span>
              </p>

              <p>
                <span>
                  <i className="fa-solid fa-barcode"></i> ISBN13
                </span>
                <span>{book.isbn13}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookDetail;
