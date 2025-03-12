import { getCategories, getCategoryBooks } from "api/book-api";
import { BooksContext } from "context/BooksProvider";
import { useContext, useEffect, useState } from "react";

interface CategoriesProps {
  filterHandler: any;
  orderHandler: any;
}

const Categories: React.FC<CategoriesProps> = ({
  filterHandler,
  orderHandler,
}) => {
  const booksCtx = useContext(BooksContext);

  const [categories, setCategories] = useState<any[]>([]);

  const setCategoriesHandler = async () => {
    const categories = await getCategories();

    if (categories) setCategories(categories);
  };

  useEffect(() => {
    setCategoriesHandler();
  }, []);

  const getCategoryBooksHandler = async (id: string) => {
    const categoryBooks = await getCategoryBooks(id);
    booksCtx.setBooks(categoryBooks);
  };

  const onChangeFilterHandler = (e: any) => filterHandler(e.target.value);
  const onChangeOrderHandler = (e: any) => orderHandler(e.target.value);

  return (
    <div className="store__sidebar store-sidebar">
      <ul className="store-sidebar__filters">
        <h3>Filters</h3>

        <select onChange={onChangeOrderHandler}>
          <option value="">Sort by...</option>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>

        <select onChange={onChangeFilterHandler}>
          <option value="all">Filter by...</option>
          <option value="ebooks">Ebooks</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="free-ebooks">Free Ebooks</option>
        </select>
      </ul>

      <h3>Categories</h3>
      <ul>
        {categories.map((c) => (
          <li key={c.id} onClick={getCategoryBooksHandler.bind(this, c.id)}>
            <button>{c.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
