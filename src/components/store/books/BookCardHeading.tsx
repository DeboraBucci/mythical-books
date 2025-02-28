import styled from "styled-components";
import { Author } from "types/books";

type BookCardHeadingProps = {
  authors: Author[];
  title: string;
};

const BookCardHeading: React.FC<BookCardHeadingProps> = ({
  authors,
  title,
}) => {
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

  const textStylerHandler = (
    e: any,
    style: any,
    contentTitle: string,
    contentAuthors: string
  ) => {
    const parent = e.target.closest(".book-card");

    if (parent) {
      const title = parent.querySelector(".title");
      title.innerHTML = contentTitle;
      title.style.textDecoration = style;

      const authors = parent.querySelector(".author");
      authors.innerHTML = contentAuthors;
      authors.style.textDecoration = style;
    }
  };

  const mouseEnterTextHandler = (e: any) =>
    textStylerHandler(e, "underline", title, authorsStr);

  const mouseLeaveTextHandler = (e: any) =>
    textStylerHandler(e, "none", contentTitle, contentAuthor);

  return (
    <>
      <TitleEl
        className="title"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentTitle}
      </TitleEl>

      <AuthorEl
        className="author"
        onMouseEnter={mouseEnterTextHandler}
        onMouseLeave={mouseLeaveTextHandler}
      >
        {contentAuthor}
      </AuthorEl>
    </>
  );
};

export default BookCardHeading;

const TitleEl = styled.h4`
  color: var(--color-grey-800);
  font-size: 2.5rem;
  font-weight: 100;
`;

const AuthorEl = styled.p`
  color: var(--color-grey-500);
  font-size: 1.6rem;
  margin-top: -2rem;
  font-weight: 600;
`;
