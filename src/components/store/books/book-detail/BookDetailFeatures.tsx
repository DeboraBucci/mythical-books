import React from "react";
import styled from "styled-components";
import { Publisher } from "types/books";

interface BookDetailFeaturesProps {
  publishers: Publisher[];
  pages?: number;
  publishedYear?: number;
  isbn10?: string;
  isbn13?: string;
}

const BookDetailFeatures: React.FC<BookDetailFeaturesProps> = ({
  publishers,
  pages,
  publishedYear,
  isbn10,
  isbn13,
}) => {
  return (
    <RootComponent>
      <p>
        <span>
          {" "}
          <i className="fa-regular fa-file-lines" /> № of Pages
        </span>
        <span>{pages}</span>
      </p>

      <p>
        <span>
          <i className="fa-regular fa-newspaper" /> Publisher
        </span>
        {publishers.map((publisher) => (
          <span key={publisher.id}>{publisher.name}</span>
        ))}
      </p>

      <p>
        <span>
          <i className="fa-solid fa-calendar-days" /> Published Date
        </span>
        <span>{publishedYear}</span>
      </p>
      <p>
        <span>
          <i className="fa-solid fa-barcode" /> ISBN10
        </span>
        <span>{isbn10}</span>
      </p>

      <p>
        <span>
          <i className="fa-solid fa-barcode" /> ISBN13
        </span>
        <span>{isbn13}</span>
      </p>
    </RootComponent>
  );
};

export default BookDetailFeatures;

const RootComponent = styled.div`
  display: flex;
  gap: 1rem;

  & p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    color: #4b4b4b;

    border-top: 3px solid var(--color-purple);
    border-right: 2px solid var(--color-purple);
    border-radius: 7px;
    box-shadow: 1px 1px 5px var(--color-grey-50);
  }

  & span:last-child {
    font-weight: 400;
  }
`;
