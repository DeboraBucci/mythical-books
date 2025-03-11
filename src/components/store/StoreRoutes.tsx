import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Bookshelf from "./books/Bookshelf";
import Aside from "./aside/Aside";
import BookDetail from "./books/book-detail/BookDetail";
import Cart from "./cart/Cart";
import Store from "./Store";

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
