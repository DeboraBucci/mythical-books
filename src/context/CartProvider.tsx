import { createContext, useReducer } from "react";

const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

type BookCartType = {
  id: number;
  title: string;
  physicalFormat?: string;
  authors: string[];
  quantity: number;
  unitPrice: number;
  totalSubPrice: number;
  discountPercentage: number;
  image?: string;
};

type CartContextType = {
  books: BookCartType[];
  addBook: (book: BookCartType) => void;
  removeBook: (id: number) => void;
};

export const CartContext = createContext<CartContextType>({
  books: [],
  addBook: () => {},
  removeBook: () => {},
});

const ReducerHandler = (state: BookCartType[], action: any) => {
  if (action.type === ADD_BOOK) {
    const { book, quantity } = action.payload;

    const bookFound = state.find((b) => b.id === book.id);

    if (bookFound) {
      bookFound.quantity += quantity;

      return state;
    } else {
      return [...state, book];
    }
  }

  if (action.type === REMOVE_BOOK) {
    const books = state.filter(
      (book: BookCartType) => book.id !== action.payload
    );
    return books;
  }

  return state;
};

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerHandler, []);

  const addBook = (book: any, quantity?: number) => {
    dispatch({
      type: ADD_BOOK,
      payload: { book: book, quantity: quantity ?? 1 },
    });
  };

  const removeBook = (id: number) => {
    dispatch({ type: REMOVE_BOOK, payload: id });
  };

  const value = {
    books: state,
    addBook: addBook,
    removeBook: removeBook,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
