import axios from "axios";
import { BookInterface } from "types/books";

const apiAddress = "https://localhost:7036/api";

export const getBooks = async (): Promise<BookInterface[]> => {
  const res = await axios.get(`${apiAddress}/Books`);
  return res.data;
};

export const getSearchedBooks = async (
  searched: string
): Promise<BookInterface[]> => {
  const res = await axios.get(`${apiAddress}/Books/search/${searched}`);
  return res.data;
};

export const getBookById = async (id: string) => {
  const { data } = await axios.get(`${apiAddress}/Books/${id}`);

  const bookData: BookInterface = {
    id: data.id,
    stock: data.stock,
    language: data.language,
    title: data.title,
    categories: data.categories,
    image: data.image,
    description: data.description,
    authors: data.authors,
    ratingCount: data.ratingCount,
    averageRating: data.averageRating,
    pages: data.pages,
    publishers: data.publishers,
    publishedYear: data.publishedYear,
    price: data.price,
    currency: "USD",
    isbn10: data.isbN10,
    isbn13: data.isbN13,
  };

  return bookData;
};
