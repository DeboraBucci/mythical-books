import axios from "axios";
import { BookInterface } from "types/books";
import { apiAddress } from "./constants";

const address = apiAddress + "/Books";

export const getBooks = async (searched?: string): Promise<BookInterface[]> => {
  const validSearch = searched && searched.trim() != "";

  try {
    const res = await axios.get(
      `${address}${validSearch ? "?search=" + searched : ""}`
    );
    return res.data;
  } catch (err) {
    return [];
  }
};

export const getBookById = async (
  id: string
): Promise<BookInterface | null> => {
  try {
    const { data } = await axios.get(`${address}/${id}`);

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

export const getCategories = async () => {
  try {
    const res = await axios.get(`${address}/categories`);
    return res.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
