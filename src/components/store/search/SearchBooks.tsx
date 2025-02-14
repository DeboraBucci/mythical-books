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

  const apiKey = "AIzaSyCfyJD3oJmISN4N-ANvOFW81JCl5LZE_Gk";
  const link = `https://www.googleapis.com/books/v1/volumes?q=${searched}${filters}${order}&key=${apiKey}`;

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (searched !== "") {
      fetch(link)
        .then((res) => res.json())
        .then((data) => {
          const booksArr: any[] = [];
          data.items.map((item: any) => {
            console.log(item);
            return booksArr.push({
              title: item?.volumeInfo?.title,
              authors: item?.volumeInfo?.authors || [],
              image: item?.volumeInfo?.imageLinks?.thumbnail || fallbackImg,
              maturity: item?.volumeInfo?.maturityRating,
              id: item?.id,
              rating: item?.volumeInfo?.averageRating,
              ratingsCount: item?.volumeInfo?.ratingsCount,
              price: item?.saleInfo?.retailPrice?.amount || "Not for sale",
              saleabilty: item?.saleInfo?.saleability,
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
