import React from "react";

const Categories = ({ filterHandler, orderHandler }) => {
  const onChangeFilterHandler = (e) => filterHandler(e.target.value);
  const onChangeOrderHandler = (e) => orderHandler(e.target.value);

  return (
    <div className="store__sidebar store-sidebar">
      <ul className="store-sidebar__filters">
        <h3>Filters</h3>

        <select onChange={onChangeOrderHandler}>
          <option defaultValue value="">
            Sort by...
          </option>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>

        <select onChange={onChangeFilterHandler}>
          <option defaultValue value="all">
            Filter by...
          </option>
          <option value="ebooks">Ebooks</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="free-ebooks">Free Ebooks</option>
        </select>
      </ul>

      <h3>Categories</h3>
    </div>
  );
};

export default Categories;
