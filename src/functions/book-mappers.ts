import { BookInterface, BookCartType } from "../types/books";

export const bookToCartBook = (book: BookInterface): BookCartType => {
  return {
    id: book.id,
    title: book.title,
    physicalFormat: book.physicalFormat,
    authors: book.authors.map((author) => author.name),
    unitPrice: book.price,
    image: book.image,
  };
};
