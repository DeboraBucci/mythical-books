import axios from "axios";
import { BookInterface } from "types/books";

const apiAddress = "https://localhost:7036/api";

export const getBooks = async (): Promise<BookInterface[]> => {
  try {
    const res = await axios.get(`${apiAddress}/Books`);
    return res.data;
  } catch (err) {
    return [];
  }
};

export const getSearchedBooks = async (
  searched: string
): Promise<BookInterface[]> => {
  try {
    const res = await axios.get(`${apiAddress}/Books/search/${searched}`);
    return res.data;
  } catch (err) {
    return [];
  }
};

export const getBookById = async (
  id: string
): Promise<BookInterface | null> => {
  try {
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
  } catch (err) {
    return null;
  }
};
