import { createContext, useReducer, useState } from "react";
import { BookCartType } from "types/books";

const ADD_BOOK = "ADD_BOOK";
const UPDATE_BOOK_QUANTITY = "UPDATE_BOOK_QUANTITY";
const REMOVE_BOOK = "REMOVE_BOOK";

type Shipping = {
  name?: string;
  price?: number;
};

type CartContextType = {
  books: BookCartType[];
  subTotal: number;
  shipping: Shipping;
  setShipping: (shipping: Shipping) => void;
  addBook: (book: BookCartType, quantity?: number) => void;
  removeBook: (id: number) => void;
  updateBookQuantity: (id: number, quantity?: number) => void;
};

export const CartContext = createContext<CartContextType>({
  books: [],
  subTotal: 0,
  shipping: { name: "", price: 0 },
  setShipping: (shipping) => {},
  addBook: () => {},
  removeBook: () => {},
  updateBookQuantity: () => {},
});

const ReducerHandler = (state: BookCartType[], action: any) => {
  const stateCopy = state.map((book) => ({ ...book })); // WON'T MUTATE THE STATE
  const bookFound = stateCopy.find((b) => b.id == action.payload.id);

  if (action.type === ADD_BOOK) {
    if (bookFound && bookFound.quantity) {
      bookFound.quantity += 1;
      bookFound.totalSubPrice = bookFound.unitPrice * bookFound.quantity;

      return stateCopy;
    }

    return [
      ...stateCopy,
      {
        ...action.payload,
        quantity: 1,
        totalSubPrice: action.payload.unitPrice,
      },
    ];
  }

  if (action.type === UPDATE_BOOK_QUANTITY) {
    const { quantity } = action.payload;

    if (bookFound && quantity >= -1) {
      if (quantity == -1 || quantity == 1) {
        bookFound.quantity += quantity;
      } else {
        bookFound.quantity = quantity;
      }

      if (bookFound.quantity)
        bookFound.totalSubPrice = bookFound.unitPrice * bookFound.quantity;

      return [...stateCopy.filter((b) => b.quantity != 0)];
    }
  }

  if (action.type === REMOVE_BOOK) {
    const books = state.filter(
      (book: BookCartType) => book.id !== action.payload
    );
    return books;
  }

  return stateCopy;
};

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerHandler, []);
  const [shipping, setShipping] = useState({});

  const setSubtotalHandler = () => {
    return state
      .map((b) => {
        if (b.totalSubPrice) return b.totalSubPrice;
        return 0;
      })
      .reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      );
  };

  const addBook = (book: BookCartType) => {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  };

  const updateBookQuantity = (id: number, quantity?: number) => {
    dispatch({
      type: UPDATE_BOOK_QUANTITY,
      payload: { id, quantity: quantity ?? 1 },
    });
  };

  const removeBook = (id: number) => {
    dispatch({ type: REMOVE_BOOK, payload: id });
  };

  const value = {
    books: state,
    subTotal: +setSubtotalHandler().toFixed(2),
    shipping: shipping,
    setShipping: setShipping,
    addBook: addBook,
    removeBook: removeBook,
    updateBookQuantity: updateBookQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
