import styled from "styled-components";
import { Author } from "types/books";

interface BookDetailHeadingProps {
  title: string;
  averageRating?: number;
  ratingCount?: number;
  authors: Author[];
}

const BookDetailHeading: React.FC<BookDetailHeadingProps> = ({
  title,
  averageRating,
  ratingCount,
  authors,
}) => {
  return (
    <RootComponent>
      <div className="title-container">
        <h3>{title}</h3>

        {ratingCount && (
          <p className="rating">
            <i className="fa-regular fa-star"></i>
            <span>{averageRating}</span> <span>({ratingCount})</span>
          </p>
        )}
      </div>

      {authors.length > 0 && (
        <p className="authors">
          <i className="fa-solid fa-feather-pointed" /> by{" "}
          {authors?.map((author, i) => {
            return (
              <span key={author.id}>
                {author.name}
                {authors.length > i + 1 && ","}
              </span>
            );
          })}
        </p>
      )}
    </RootComponent>
  );
};

export default BookDetailHeading;

const RootComponent = styled.div`
  h3 {
    font-weight: 100;
    font-size: 3rem;
  }

  & .title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    font-size: 1.6rem;
    color: #4b4b4b;

    & i {
      color: goldenrod;
    }

    & span:last-child {
      cursor: pointer;
      color: royalblue;
    }
  }

  & .authors {
    font-weight: 300;
    font-size: 1.6rem;
    color: #4b4b4b;

    & i {
      color: var(--color-purple);
    }
  }
`;
