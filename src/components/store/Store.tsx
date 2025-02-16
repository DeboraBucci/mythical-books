import { useContext, useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import SearchBooks from "./search/SearchBooks";
import Bookshelf from "./books/Bookshelf";
import Categories from "./Categories";
import Footer from "../footer/Footer";

import Aside from "./aside/Aside";
import { storeLinks } from "data/links-data";
import { getBooks } from "api/book-api";
import { BooksContext } from "context/BooksProvider";

const Store = () => {
  const booksCtx = useContext(BooksContext);

  const [filters, setFilters] = useState("");
  const [order, setOrder] = useState("");

  const getBooksHandler = async () => {
    const books = await getBooks();
    booksCtx.setBooks(books);
  };

  useEffect(() => {
    if (booksCtx.searched.trim() === "") {
      getBooksHandler();
    }
  }, [booksCtx.searched]);

  const filterHandler = (value: string) => {
    if (value === "all") {
      setFilters("");
    } else {
      setFilters("&filter=" + value);
    }
  };

  const orderHandler = (value: string) => {
    if (value === "default") {
      setOrder("");
    } else {
      setOrder("&orderBy=" + value);
    }
  };

  return (
    <div className="store">
      <Navbar links={storeLinks} title={true}>
        <SearchBooks filters={filters} order={order} />
      </Navbar>

      <div className="store__content">
        <Categories filterHandler={filterHandler} orderHandler={orderHandler} />
        <div className="store__banner"></div>
        <Bookshelf />
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
