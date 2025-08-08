import { getBooksAndPages } from "api/book-api";
import { createContext, useEffect, useState } from "react";
import { BookInterface } from "types/books";

interface BooksContextStructure {
  books: BookInterface[];
  searched: string;
  selectedCategories: number[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<number[]>>;
  setSearched: (search: string) => void;
  setBooksHandler: () => void;
  setPage: (page: number) => void;
  totalPages: number;
}

export const BooksContext = createContext<BooksContextStructure>({
  books: [],
  searched: "",
  selectedCategories: [],
  setSelectedCategories: () => {},
  setSearched: () => {},
  setBooksHandler: () => {},
  setPage: () => {},
  totalPages: 1,
});

interface BooksProviderProps {
  children: React.ReactNode;
}

const BooksProvider: React.FC<BooksProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [searched, setSearched] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const setBooksHandler = async () => {
    const res = await getBooksAndPages(selectedCategories, page, searched);

    if (res?.totalPages) setTotalPages(res.totalPages);
    if (res?.books) setBooks(res.books);
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
    totalPages: totalPages,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
