import { useContext, useEffect, useState } from "react";
import { getCategories } from "api/book-api";
import { BooksContext } from "context/BooksProvider";

import CheckboxItem from "./CheckboxItem";

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

  useEffect(() => {
    setCategoriesHandler();
  }, []);

  const setCategoriesHandler = async () => {
    const categories = await getCategories();
    if (categories) setCategories(categories);
  };

  const onChangeFilterHandler = (e: any) => filterHandler(e.target.value);
  const onChangeOrderHandler = (e: any) => orderHandler(e.target.value);

  const onAddCategoryHandler = (catId: number) => {
    booksCtx.setSelectedCategories((prev: number[]) => {
      const alreadyChecked = prev.find((cId) => cId == catId);

      if (alreadyChecked) {
        return prev.filter((cId) => cId != catId);
      }

      return [...prev, catId];
    });
  };

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
          <CheckboxItem
            key={c.id}
            id={c.id}
            name={c.name}
            checked={
              !!booksCtx.selectedCategories.find((catId) => catId == c.id)
            }
            onAddCategoryHandler={onAddCategoryHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
