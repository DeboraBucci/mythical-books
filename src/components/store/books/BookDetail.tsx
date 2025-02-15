import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import SearchBooks from "../search/SearchBooks";
import { storeLinks } from "data/links-data";
import { BookInterface } from "types/books";
import { getBookById } from "api/book-api";

const BookDetail = () => {
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

  return (
    <div className="book-details">
      <Navbar links={storeLinks} title={true} />
      <SearchBooks />

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
            <div>
              <div className="book-details__title">
                <h3>{book.title}</h3>
                <p className="book-details__rating">
                  <i className="fa-regular fa-star"></i>
                  <span>{book.averageRating}</span>{" "}
                  <span>({book.ratingCount})</span>
                </p>
              </div>
              <p className="book-details__authors">
                <i className="fa-solid fa-feather-pointed"></i> by{" "}
                {book.authors?.map((author, i) => {
                  return (
                    <span key={author.id}>
                      {author.name}
                      {book.authors.length > i + 1 && ","}
                    </span>
                  );
                })}
              </p>
            </div>

            <div className="book-details__status">
              <div className="book-details__status--like">
                <i className="fa-regular fa-heart"></i>
              </div>

              <div className="book-details__status--bookmark">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>

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

            <div className="book-details__cta">
              <button className="book-details__cta--add">Add to Basket</button>
              <button>Add to Wishlist</button>
            </div>

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
