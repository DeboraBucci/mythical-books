import { getBooks } from "api/book-api";
import { createContext, useEffect, useState } from "react";
import { BookInterface } from "types/books";

interface BooksContextStructure {
  books: BookInterface[];
  searched: string;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setSearched: (search: string) => void;
  setBooksHandler: () => void;
  setPage: (page: number) => void;
}

export const BooksContext = createContext<BooksContextStructure>({
  books: [],
  searched: "",
  selectedCategories: [],
  setSelectedCategories: () => {},
  setSearched: () => {},
  setBooksHandler: () => {},
  setPage: () => {},
});

interface BooksProviderProps {
  children: React.ReactNode;
}

const BooksProvider: React.FC<BooksProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [searched, setSearched] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const setBooksHandler = async () => {
    const books = await getBooks(selectedCategories, page, searched);
    setBooks(books);
  };

  useEffect(() => {
    setBooksHandler();
  }, [page, selectedCategories, searched]);

  const values = {
    books: books,
    searched: searched,
    setSearched: setSearched,
    selectedCategories: selectedCategories,
    setSelectedCategories: setSelectedCategories,
    setBooksHandler: setBooksHandler,
    setPage: setPage,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
