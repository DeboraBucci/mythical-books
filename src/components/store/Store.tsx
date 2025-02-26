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
import { Outlet, Route, Routes } from "react-router-dom";
import BookDetail from "./books/BookDetail";
import Cart from "./cart/Cart";
import CartIconLink from "./cart/CartIconLink";

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
      <Navbar
        links={storeLinks}
        title={true}
        att="/store"
        linkType="link"
        extraLinks={<CartIconLink />}
      >
        <SearchBooks filters={filters} order={order} />
      </Navbar>

      <Outlet />

      <Footer />
    </div>
  );
};

const StoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Store />}>
        <Route
          index
          element={
            <>
              <div className="store__content">
                <Categories filterHandler={() => {}} orderHandler={() => {}} />
                <div className="store__banner"></div>
                <Bookshelf />
                <Aside />
              </div>
            </>
          }
        />
        <Route path="book/:id" element={<BookDetail />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default StoreRoutes;
