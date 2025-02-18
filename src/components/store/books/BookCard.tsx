import { Link } from "react-router-dom";
import Ratings from "../../UI/Ratings";
import { BookCardInterface } from "types/books";
import { useContext } from "react";
import { CartContext } from "context/CartProvider";

const BookCard: React.FC<BookCardInterface> = ({
  title,
  authors,
  image,
  price,
  averageRating,
  ratingCount,
  id,
  stock,
  physicalFormat,
}) => {
  const cartCtx = useContext(CartContext);

  const authorsStr = authors
    .map((author, i) => {
      const secondLastIndex = authors.length - 2;
      return `${author.name}${
        secondLastIndex === i ? " and " : i < secondLastIndex ? ", " : ""
      }`;
    })
    .join("");

  const contentTitle = title.length > 20 ? title.slice(0, 17) + "..." : title;
  const contentAuthor =
    authorsStr.length > 30 ? authorsStr.slice(0, 27) + "..." : authorsStr;

  const isOutOfStock = typeof price !== "number";
  const isFree = price === 0;
  const liked = false; // Temporal
  const bookmarked = true; // Temporal

  const onAddBookHandler = () => {
    cartCtx.addBook({
      id: id,
      title: title,
      physicalFormat: physicalFormat,
      authors: authors.map((author) => author.name),
      quantity: 1,
      unitPrice: price,
      totalSubPrice: 0,
      discountPercentage: Math.floor(Math.random() * 30),
      image: image,
    });
  };

  const textHandler = (
    e: any,
    style: any,
    contentTitle: string,
    contentAuthors: string
  ) => {
    const parent = e.target.closest(".book-card");

    const title = parent.querySelector(".book-card__title");
    title.innerHTML = contentTitle;
    title.style.textDecoration = style;

    const authors = parent.querySelector(".book-card__author");
    authors.innerHTML = contentAuthors;
    authors.style.textDecoration = style;
  };

  const mouseEnterTextHandler = (e: any) =>
    textHandler(e, "underline", title, authorsStr);

  const mouseLeaveTextHandler = (e: any) =>
    textHandler(e, "none", contentTitle, contentAuthor);

  return (
    <div
      className={`book-card ${isOutOfStock && "book-card--out-of-stock"}`}
      key={title}
    >
      <Link to={`/store/book/${id}`}>
        <img src={image} alt="book" style={{ width: "150px" }} />
      </Link>
      <h4
        className="book-card__title"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentTitle}
      </h4>
      <p
        className="book-card__author"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentAuthor}
      </p>

      <div
        className={`book-card__price ${
          !isFree && isOutOfStock && "book-card__price--out-of-stock"
        } ${isFree && "book-card__price--free"}`}
      >
        <span>{isFree ? "Free ebook" : price}</span>
        <span>{!isOutOfStock && " USD"}</span>
      </div>

      {ratingCount && averageRating && (
        <Ratings averageRating={averageRating} ratingCount={ratingCount} />
      )}

      <div className="book-card__whishlist">
        <i className={`fa-${bookmarked ? "solid" : "regular"} fa-bookmark`}></i>
        {bookmarked ? <span>In whishlist</span> : <span>Add to whishlist</span>}
      </div>

      <div className="book-card__favorites">
        <i className={`fa-${liked ? "solid" : "regular"} fa-heart`}></i>
        {liked ? <span>In favorites</span> : <span>Add to favorites</span>}
      </div>

      <button onClick={onAddBookHandler}>
        <span>Add to basket</span>{" "}
        <i className="fa-solid fa-basket-shopping"></i>
      </button>
    </div>
  );
};

export default BookCard;
