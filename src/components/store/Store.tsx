import { useEffect, useState } from "react";

import Navbar from "../header/Header";
import SearchBooks from "./search/SearchBooks";
import Bookshelf from "./books/Bookshelf";
import Categories from "./Categories";
import Footer from "../footer/Footer";

import Aside from "./aside/Aside";
import { storeLinks } from "data/links-data";
import { getBooks } from "api/book-api";
import { BookInterface } from "types/books";

const Store = () => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [filters, setFilters] = useState("");
  const [order, setOrder] = useState("");

  const getBooksHandler = async () => {
    const books = await getBooks();
    setBooks(books);
  };

  useEffect(() => {
    getBooksHandler();
  }, []);

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
      <Navbar links={storeLinks} title={true} />
      <SearchBooks setBooks={setBooks} filters={filters} order={order} />
      <div className="store__content">
        <Categories filterHandler={filterHandler} orderHandler={orderHandler} />
        <div className="store__banner"></div>
        <Bookshelf books={books} />
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
