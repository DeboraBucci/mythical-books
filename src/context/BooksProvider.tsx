import { createContext, useState } from "react";
import { BookInterface } from "types/books";

interface BooksContextStructure {
  books: BookInterface[];
  setBooks: (books: BookInterface[]) => void;
  searched: string;
  setSearched: (search: string) => void;
}

export const BooksContext = createContext<BooksContextStructure>({
  books: [],
  setBooks: (books) => {},
  searched: "",
  setSearched: () => {},
});

interface BooksProviderProps {
  children: React.ReactNode;
}

const BooksProvider: React.FC<BooksProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [searched, setSearched] = useState<string>("");

  const values = {
    books: books,
    setBooks: setBooks,
    searched: searched,
    setSearched: setSearched,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
