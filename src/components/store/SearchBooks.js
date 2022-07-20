import React, { useState } from "react";
import fallbackImg from "../../assets/fallback-book-image.webp";

const SearchBooks = ({ setBooks, filters, order }) => {
  const [searched, setSearched] = useState("");

  const apiKey = "AIzaSyCfyJD3oJmISN4N-ANvOFW81JCl5LZE_Gk";
  const link = `https://www.googleapis.com/books/v1/volumes?q=${searched}${filters}${order}&key=${apiKey}`;

  const submitHandler = (e) => {
    e.preventDefault();

    if (searched !== "") {
      fetch(link)
        .then((res) => res.json())
        .then((data) => {
          const booksArr = [];
          data.items.map((item) => {
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

          setBooks(booksArr);
        });
    } else {
      setBooks([]);
    }
  };

  const searchChangeHandler = (e) => setSearched(e.target.value.trim());

  return (
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
  );
};

export default SearchBooks;
