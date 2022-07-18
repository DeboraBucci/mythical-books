import React, { useState } from "react";

import Navbar from "../navbar/Navbar";
import SearchBooks from "./SearchBooks";
import Bookshelf from "./Bookshelf";
import Categories from "./Categories";

import { storeLinks } from "../../data";

const Store = () => {
  const [books, setBooks] = useState([]);

  return (
    <div className="store">
      <Navbar links={storeLinks} title={true}>
        <SearchBooks setBooks={setBooks} />
      </Navbar>
      <Categories />
      <Bookshelf books={books} />
    </div>
  );
};

export default Store;
