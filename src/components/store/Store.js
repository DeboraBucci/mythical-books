import React, { useState } from "react";

import Navbar from "../navbar/Navbar";
import SearchBooks from "./SearchBooks";
import Bookshelf from "./Bookshelf";
import Categories from "./Categories";

import { storeLinks } from "../../data";

const Store = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState("");
  const [order, setOrder] = useState("");

  const filterHandler = (value) => {
    if (value === "all") {
      setFilters("");
    } else {
      setFilters("&filter=" + value);
    }
  };

  const orderHandler = (value) => {
    if (value === "default") {
      setOrder("");
    } else {
      setOrder("&orderBy=" + value);
    }
  };

  return (
    <div className="store">
      <Navbar links={storeLinks} title={true}>
        <SearchBooks setBooks={setBooks} filters={filters} order={order} />
      </Navbar>
      <Categories filterHandler={filterHandler} orderHandler={orderHandler} />
      <Bookshelf books={books} />
    </div>
  );
};

export default Store;
