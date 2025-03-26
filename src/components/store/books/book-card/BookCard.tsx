import { Link } from "react-router-dom";
import Ratings from "../../../UI/Ratings";
import { BookCardInterface } from "types/books";
import { useContext } from "react";
import { CartContext } from "context/CartProvider";
import styled from "styled-components";
import BookCardAction from "./BookCardAction";
import BookCardHeading from "./BookCardHeading";
import Bookmark from "../../../UI/Bookmark";
import FallbackCover from "../../../../assets/cover-not-available.webp";

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

  return (
    <Card className={`book-card ${!stock && "out-of-stock"}`} key={title}>
      <div className="image-container">
        <Link to={`/store/book/${id}`}>
          <img src={image ? image : FallbackCover} alt="book" />
        </Link>
      </div>

      <BookCardHeading title={title} authors={authors} />

      <div className={`price ${!stock && "no-stock"} ${price <= 0 && "free"}`}>
        {stock && <span>{price <= 0 ? "Free ebook" : price + " USD"}</span>}
        {!stock && <span>Out of Stock</span>}
      </div>

      {ratingCount && averageRating && (
        <Ratings averageRating={averageRating} ratingCount={ratingCount} />
      )}

      <BookCardAction onAddHandler={onAddBookHandler} bookId={id} />

      <Bookmark id={id} />
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
`;
