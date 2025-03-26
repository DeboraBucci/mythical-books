import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Bookshelf from "./books/Bookshelf";
import Aside from "./aside/Aside";
import BookDetail from "./books/book-detail/BookDetail";
import Cart from "./cart/Cart";
import Store from "./Store";
import Error404 from "../../components/errors/Error404";
import WishlistBooks from "./wishlist/WishlistBooks";

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
        <Route path="wishlist" element={<WishlistBooks />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default StoreRoutes;
