import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fallbackImg from "../../../assets/fallback-book-image.webp";
import { BooksContext } from "context/BooksProvider";

interface SearchBooksProps {
  filters?: any;
  order?: any;
}

const SearchBooks: React.FC<SearchBooksProps> = ({ filters, order }) => {
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");

  const booksCtx = useContext(BooksContext);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    booksCtx.setSearched(searched);
    navigate("/store");
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
