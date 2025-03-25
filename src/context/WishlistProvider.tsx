import { getBooksByIds } from "api/book-api";
import { createContext, useState } from "react";

interface WishlistContextInterface {
  wishlistBookIds: number[];
  addBookToWishlist: (id: number) => void;
  getWishlistBooks: () => Promise<any[]>;
}

export const WishlistContext = createContext<
  WishlistContextInterface | undefined
>(undefined);

interface WishlistkProviderProps {
  children: React.ReactNode;
}

const WishlistProvider: React.FC<WishlistkProviderProps> = ({ children }) => {
  const [wishlistBookIds, setWishlistBookIds] = useState<number[]>([]);

  const addBookToWishlist = (id: number) => {
    setWishlistBookIds((prevBooks) => {
      if (prevBooks.find((bId) => bId == id)) {
        return prevBooks.filter((bId) => bId != id);
      } else {
        return [id, ...prevBooks];
      }
    });
  };

  const getWishlistBooks = async () => {
    const books = await getBooksByIds(wishlistBookIds);

    return books;
  };

  const values = {
    wishlistBookIds: wishlistBookIds,
    addBookToWishlist: addBookToWishlist,
    getWishlistBooks: getWishlistBooks,
  };

  return (
    <WishlistContext.Provider value={values}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
