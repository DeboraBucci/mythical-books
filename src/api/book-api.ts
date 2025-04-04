import axios from "axios";
import { BookInterface } from "types/books";
import { apiAddress } from "./constants";

const address = apiAddress + "/Books";

export const getBooks = async (
  categories: string[],
  page: number = 1,
  searched?: string
): Promise<BookInterface[]> => {
  try {
    const res = await axios.get(address, {
      params: {
        categories,
        ...(searched?.trim() && { search: searched.trim() }),
        page,
      },
    });

    return res.data.data;
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

export const getBooksByIds = async (ids: number[]) => {
  try {
    const res = await axios.get(`${address}/books-ids`, {
      params: { ids },
      paramsSerializer: { indexes: null },
    });

    return res.data;
  } catch (err) {
    console.error(err);
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
