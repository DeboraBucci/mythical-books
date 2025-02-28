import { Link } from "react-router-dom";
import Ratings from "../../UI/Ratings";
import { BookCardInterface } from "types/books";
import { useContext } from "react";
import { CartContext } from "context/CartProvider";
import QuantitySelector from "../../../components/UI/QuantitySelector";
import styled from "styled-components";

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
  const book = cartCtx.books.find((b) => b.id == id);

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

  const onAddBookHandler = () => {
    cartCtx.addBook({
      id: id,
      title: title,
      physicalFormat: physicalFormat,
      authors: authors.map((author) => author.name),
      unitPrice: price,
      discountPercentage: Math.floor(Math.random() * 30),
      image: image,
    });
  };

  const textStylerHandler = (
    e: any,
    style: any,
    contentTitle: string,
    contentAuthors: string
  ) => {
    const parent = e.target.closest(".book-card");

    if (parent) {
      const title = parent.querySelector(".book-card__title");
      title.innerHTML = contentTitle;
      title.style.textDecoration = style;

      const authors = parent.querySelector(".book-card__author");
      authors.innerHTML = contentAuthors;
      authors.style.textDecoration = style;
    }
  };

  const mouseEnterTextHandler = (e: any) =>
    textStylerHandler(e, "underline", title, authorsStr);

  const mouseLeaveTextHandler = (e: any) =>
    textStylerHandler(e, "none", contentTitle, contentAuthor);

  return (
    <Card className={`${!stock && "out-of-stock"}`} key={title}>
      <div className="image-container">
        <Link to={`/store/book/${id}`}>
          <img src={image} alt="book" />
        </Link>
      </div>

      <h4
        className="title"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentTitle}
      </h4>

      <p
        className="author"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentAuthor}
      </p>

      <div className={`price ${!stock && "no-stock"} ${price <= 0 && "free"}`}>
        {stock && <span>{price <= 0 ? "Free ebook" : price + " USD"}</span>}
        {!stock && <span>Out of Stock</span>}
      </div>

      {ratingCount && averageRating && (
        <Ratings averageRating={averageRating} ratingCount={ratingCount} />
      )}

      <div className="whishlist">
        <i className={`fa-${false ? "solid" : "regular"} fa-bookmark`}></i>
        {false ? <span>In whishlist</span> : <span>Add to whishlist</span>}
      </div>

      <div className="cta_container">
        {(book?.quantity == 0 || !book?.quantity) && (
          <Button onClick={onAddBookHandler}>
            <span>Add to basket</span>{" "}
            <i className="fa-solid fa-basket-shopping"></i>
          </Button>
        )}

        {book?.quantity && book?.quantity != 0 && (
          <div className="quantity-container">
            <QuantitySelector bookId={id} quantity={book?.quantity ?? 0} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default BookCard;

const Card = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  text-align: center;

  width: 30rem;
  min-height: 45rem;
  padding-top: 2rem;

  color: var(--color-white);
  background-color: rgba(106, 63, 155, 0.02);
  border: 1px solid rgba(106, 63, 155, 0.2);
  border-radius: 4px;

  &.out-of-stock {
    background-color: rgb(238, 238, 238);

    & button {
      cursor: not-allowed;
      pointer-events: none;
      background-color: var(--color-grey-800);
    }
  }

  & .image-container {
    height: 20rem;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      height: 20rem;
    }
  }

  & .title {
    color: var(--color-grey-800);
    font-size: 2.5rem;
    font-weight: 100;
  }

  & .author {
    color: var(--color-grey-500);
    font-size: 1.6rem;
    margin-top: -2rem;
    font-weight: 600;
  }

  & .price {
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    background-color: #458545;

    &.no-stock {
      background-color: #dc143c;
    }

    &.free {
      background-color: #1381ff;
    }
  }

  & .whishlist {
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    color: #6666e6;

    & span {
      position: absolute;
      top: 3.5rem;
      left: 0;
      font-size: 1.2rem;
      background-color: var(--color-grey-800);
      color: var(--color-white);
      padding: 0.5rem;
      border-radius: 3px;
      min-width: 8rem;
      opacity: 0;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }

  & .cta_container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
  }

  & .quantity_container {
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: var(--color-white);
  background-color: var(--color-dark-purple);
  border: 1px solid var(--color-dark-purple);

  width: 100%;
  padding: 1rem;
  font-weight: 700;

  transition: all 0.2s ease-out;

  &:hover {
    background-color: transparent;
    color: var(--color-dark-purple);

    i {
      animation: var(--up-and-down-animation) 0.6s ease infinite;
    }
  }
`;
