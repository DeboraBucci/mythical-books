import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stars from "../UI/Stars";
import Navbar from "../header/Header";
import SearchBooks from "./SearchBooks";
import { storeLinks } from "data/links-data";

const BookDetail = () => {
  const [book, setBook] = useState({
    title: "",
    image: undefined,
    authors: [""],
    averageRating: 0,
    ratingCount: 0,
    categories: [""],
    price: 0,
    currency: "",
    description: "",
    pages: 0,
    publisher: "",
    publishedDate: undefined,
    industryIdentifiers: [
      {
        type: "",
        identifier: "",
      },
    ],
  });

  const apiKey = "AIzaSyCfyJD3oJmISN4N-ANvOFW81JCl5LZE_Gk";
  const query = useParams();
  const link = `https://www.googleapis.com/books/v1/volumes/${query.id}?key=${apiKey}`;

  const getBook = useCallback(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.volumeInfo.imageLinks);

        const bookData = {
          title: data.volumeInfo.title,
          categories: data.volumeInfo.categories,
          image: data.volumeInfo.imageLinks?.small,
          description: data.volumeInfo.description,
          authors: data.volumeInfo.authors,
          ratingCount: data.volumeInfo.ratingsCount,
          averageRating: data.volumeInfo.averageRating,
          pages: data.volumeInfo.pageCount,
          publisher: data.volumeInfo.publisher,
          publishedDate: data.volumeInfo.publishedDate,
          price: data.saleInfo.listPrice.amount,
          currency: data.saleInfo.listPrice.currencyCode,
          industryIdentifiers: data.volumeInfo.industryIdentifiers,
          canonicalVolumeLInk: data.volumeInfo.canonicalVolumeLink,
        };

        console.log(bookData);
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
                {book.authors.map((author, i) => (
                  <span key={author}>
                    {author}
                    {book.authors.length > i + 1 && ","}
                  </span>
                ))}
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
                <span className="book-details__category" key={category}>
                  {category}
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
                <span>{book.publisher}</span>
              </p>

              <p>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> Published Date
                </span>
                <span>{book.publishedDate}</span>
              </p>

              {book.industryIdentifiers.map(({ type, identifier }) => (
                <p>
                  <span>
                    <i className="fa-solid fa-barcode"></i>{" "}
                    {type.split("_").join(" ")}{" "}
                  </span>
                  <span>{identifier}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookDetail;
