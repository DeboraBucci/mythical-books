import { createContext, useState } from "react";
import { BookInterface } from "types/books";

interface BooksContextStructure {
  books: BookInterface[];
  setBooks: (books: BookInterface[]) => void;
}

export const BooksContext = createContext<BooksContextStructure>({
  books: [],
  setBooks: (books) => {},
});

interface BooksProviderProps {
  children: React.ReactNode;
}

const BooksProvider: React.FC<BooksProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<BookInterface[]>([]);

  const values = {
    books: books,
    setBooks: setBooks,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
