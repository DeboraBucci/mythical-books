import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stars from "../UI/Stars";
import Navbar from "../header/Header";
import SearchBooks from "./SearchBooks";
import { storeLinks } from "data/links-data";

const BookDetail = () => {
  const [book, setBook] = useState({
    title: "",
    categories: [],
    image: "",
    description: "",
    authors: [],
    ratingCount: 0,
    averageRating: 0,
    pages: 0,
    publishers: [],
    publishedDate: 0,
    price: 0,
    currency: "USD",
    isbN10: "",
    isbN13: "",
  });

  const query = useParams();
  const link = `https://localhost:7036/api/Books/${query.id}`;

  const getBook = useCallback(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const bookData = {
          title: data.title,
          categories: data.categories,
          image: data.image,
          description: data.description,
          authors: data.authors,
          ratingCount: data.ratings,
          averageRating: data.rating,
          pages: data.pages,
          publishers: data.publishers,
          publishedDate: data.publishedYear,
          price: data.price,
          currency: "USD",
          isbN10: data.isbN10,
          isbN13: data.isbN13,
        };

        console.log(data.authors[0]);
        setBook(bookData);
      })
      .catch((err) => console.log(err));
  }, [link]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  return (
    <div className="book-details">
      <Navbar links={storeLinks} title={true} />
      <SearchBooks />

      {book.title && (
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
                {book.authors?.map((author: any, i) => {
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
              {book.categories.map((category: any) => (
                <span className="book-details__category" key={category.id}>
                  {category.name}
                </span>
              ))}
            </div>
            <Stars starsNum={book.averageRating} />

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

            <div
              className="book-details__description"
              dangerouslySetInnerHTML={{ __html: book.description }}
            ></div>

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
                {book.publishers.map((publisher: any) => (
                  <span key={publisher.id}>{publisher.name}</span>
                ))}
              </p>

              <p>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> Published Date
                </span>
                <span>{book.publishedDate}</span>
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-barcode"></i> ISBN10
                </span>
                <span>{book.isbN10}</span>
              </p>

              <p>
                <span>
                  <i className="fa-solid fa-barcode"></i> ISBN13
                </span>
                <span>{book.isbN13}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookDetail;
