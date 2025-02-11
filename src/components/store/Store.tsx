import { useState } from "react";

import Navbar from "../header/Header";
import SearchBooks from "./SearchBooks";
import Bookshelf from "./Bookshelf";
import Categories from "./Categories";
import Footer from "../footer/Footer";

import { storeLinks } from "../../data";
import Aside from "./aside/Aside";

const Store = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState("");
  const [order, setOrder] = useState("");

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
