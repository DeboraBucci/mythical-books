export interface Author {
  id: number;
  name: string;
  fuller_name?: string;
  bio?: string;
  birth_date: Date;
  death_date?: Date;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface BookInterface {
  id: number;
  ratingCount?: number;
  averageRating?: number;
  pages?: number;
  stock: number;
  publishedYear?: number;
  weight?: number;
  price: number;
  title: string;
  description?: string;
  isbn10?: string;
  isbn13?: string;
  image?: string;
  language: string;
  physicalFormat?: string;
  authors: Author[];
  publishers: Publisher[];
  categories: Category[];
  currency?: string;
}

export interface BookCardInterface {
  id: number;
  ratingCount?: number;
  averageRating?: number;
  stock: number;
  price: number;
  title: string;
  image?: string;
  authors: Author[];
  currency?: string;
  physicalFormat?: string;
}

export type BookCartType = {
  id: number;
  title: string;
  physicalFormat?: string;
  authors: string[];
  quantity?: number;
  unitPrice: number;
  totalSubPrice?: number;
  discountPercentage?: number;
  image?: string;
};
