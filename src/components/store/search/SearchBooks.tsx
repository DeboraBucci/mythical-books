import { useState } from "react";
import { Link } from "react-router-dom";
import fallbackImg from "../../../assets/fallback-book-image.webp";
import { getSearchedBooks } from "api/book-api";

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

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (searched !== "") {
      const books = await getSearchedBooks(searched);
      setBooks(books);
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
