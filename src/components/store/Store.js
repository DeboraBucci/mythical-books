import React, { useState } from "react";

import Navbar from "../navbar/Navbar";
import SearchBooks from "./SearchBooks";
import Bookshelf from "./Bookshelf";
import Categories from "./Categories";

import { storeLinks } from "../../data";

const Store = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState("");

  const filterHandler = (value) => {
    console.log(value);
    if (value === "all") {
      setFilters("");
    } else {
      setFilters("&filter=" + value);
    }
  };

  return (
    <div className="store">
      <Navbar links={storeLinks} title={true}>
        <SearchBooks setBooks={setBooks} filters={filters} />
      </Navbar>
      <Categories filterHandler={filterHandler} />
      <Bookshelf books={books} />
    </div>
  );
};

export default Store;
