import { useContext, useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import SearchBooks from "./search/SearchBooks";
import Footer from "../footer/Footer";

import { storeLinks } from "data/links-data";
import { getBooks } from "api/book-api";
import { BooksContext } from "context/BooksProvider";
import { Outlet } from "react-router-dom";
import CartIconLink from "./cart/CartIconLink";
import WishlistLink from "../WishlistLink";

const Store = () => {
  const booksCtx = useContext(BooksContext);

  const [filters, setFilters] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    if (booksCtx.searched.trim() === "") {
      booksCtx.setBooksHandler();
    }
  }, [booksCtx.searched]); // check

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
        logoAtt="/store"
        logoLinkType="link"
        extraLinks={
          <>
            <CartIconLink />
            <WishlistLink />
          </>
        }
      >
        <SearchBooks filters={filters} order={order} />
      </Navbar>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Store;
