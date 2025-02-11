import { Link } from "react-router-dom";
import Ratings from "../UI/Ratings";

interface CardProps {
  title: string;
  authors: string[];
  image: any;
  price: number;
  rating: number;
  ratingCount: number;
  saleabilty: string;
  id: any;
}

const Card: React.FC<CardProps> = ({
  title,
  authors,
  image,
  price,
  rating,
  ratingCount,
  saleabilty,
  id,
}) => {
  const authorsStr = authors
    .map((author, i) => {
      const secondLastIndex = authors.length - 2;
      return `${author}${
        secondLastIndex === i ? " and " : i < secondLastIndex ? ", " : ""
      }`;
    })
    .join("");

  const contentTitle = title.length > 20 ? title.slice(0, 17) + "..." : title;
  const contentAuthor =
    authorsStr.length > 30 ? authorsStr.slice(0, 27) + "..." : authorsStr;

  const isOutOfStock = typeof price !== "number";
  const isFree = saleabilty === "FREE";
  const liked = false; // Temporal
  const bookmarked = true; // Temporal

  const textHandler = (
    e: any,
    style: any,
    contentTitle: string,
    contentAuthors: string
  ) => {
    const parent = e.target.closest(".card");

    const title = parent.querySelector(".card__title");
    title.innerHTML = contentTitle;
    title.style.textDecoration = style;

    const authors = parent.querySelector(".card__author");
    authors.innerHTML = contentAuthors;
    authors.style.textDecoration = style;
  };

  const mouseEnterTextHandler = (e: any) =>
    textHandler(e, "underline", title, authorsStr);

  const mouseLeaveTextHandler = (e: any) =>
    textHandler(e, "none", contentTitle, contentAuthor);

  return (
    <div className={`card ${isOutOfStock && "card--out-of-stock"}`} key={title}>
      <Link to={`/store/book/${id}`}>
        <img src={image} alt="book" style={{ width: "150px" }} />
      </Link>
      <h4
        className="card__title"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentTitle}
      </h4>
      <p
        className="card__author"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentAuthor}
      </p>

      <div
        className={`card__price ${
          !isFree && isOutOfStock && "card__price--out-of-stock"
        } ${isFree && "card__price--free"}`}
      >
        <span>{isFree ? "Free ebook" : price}</span>
        <span>{!isOutOfStock && " ARS"}</span>
      </div>

      <Ratings rating={rating} ratingCount={ratingCount} />

      <div className="card__whishlist">
        <i className={`fa-${bookmarked ? "solid" : "regular"} fa-bookmark`}></i>
        {bookmarked ? <span>In whishlist</span> : <span>Add to whishlist</span>}
      </div>

      <div className="card__favorites">
        <i className={`fa-${liked ? "solid" : "regular"} fa-heart`}></i>
        {liked ? <span>In favorites</span> : <span>Add to favorites</span>}
      </div>

      <button>
        Add to basket <i className="fa-solid fa-basket-shopping"></i>
      </button>
    </div>
  );
};

export default Card;
