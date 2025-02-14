import { useState } from "react";
import { Link } from "react-router-dom";
import fallbackImg from "../../../assets/fallback-book-image.webp";

interface SearchBooksProps {
  setBooks?: any;
  filters?: any;
  order?: any;
}

const SearchBooks: React.FC<SearchBooksProps> = ({
  setBooks,
  filters,
  order,
}) => {
  const [searched, setSearched] = useState("");

  const link = `https://localhost:7036/api/Books/search/${searched}`;

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (searched !== "") {
      fetch(link)
        .then((res) => res.json())
        .then((data) => {
          const booksArr: any[] = [];
          data.map((book: any) => {
            return booksArr.push({
              id: book.id,
              stock: book.stock,
              language: book.language,
              title: book.title,
              categories: book.categories,
              image: book.image,
              description: book.description,
              authors: book.authors,
              ratingCount: book.ratingCount,
              averageRating: book.averageRating,
              pages: book.pages,
              publishers: book.publishers,
              publishedYear: book.publishedYear,
              price: book.price,
              currency: "USD",
              isbn10: book.isbN10,
              isbn13: book.isbN13,
            });
          });

          if (setBooks) setBooks(booksArr);
        });
    } else {
      if (setBooks) setBooks([]);
    }
  };

  const searchChangeHandler = (e: any) => setSearched(e.target.value.trim());

  return (
    <div className="search-container">
      <form className="store__search" onSubmit={submitHandler}>
        <label htmlFor="search">Search</label>
        <input
          name="search"
          id="search"
          placeholder="Search books by title / author / publisher ..."
          onChange={searchChangeHandler}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <Link className="search-container__advanced-search" to="/advanced-search">
        Advanced Search
      </Link>
    </div>
  );
};

export default SearchBooks;
