import { createContext, useReducer } from "react";

type BookCartType = {
  id: number;
  title: string;
  authors: string[];
  quantity: number;
  unitPrice: number;
  totalSubPrice: number;
};

type CartContextType = {
  books: BookCartType[];
  addBook: (book: BookCartType) => void;
  removeBook: (id: string) => void;
};

export const CartContext = createContext<CartContextType>({
  books: [],
  addBook: () => {},
  removeBook: () => {},
});

const ReducerHandler = (state: any, action: any) => {
  if (action.type === "ADD_BOOK") {
    return [...state, action.payload];
  }

  if (action.type === "REMOVE_BOOK") {
    const books = state.filter(
      (book: BookCartType) => book.id === action.payload
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

  const addBook = (book: any) => {
    dispatch({ type: "ADD_BOOK", payload: book });
  };

  console.log(state);

  const value = {
    books: state.books,
    addBook: addBook,
    removeBook: () => {},
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
