import React from "react";

const Categories = ({ filterHandler }) => {
  const onChangeFilterHandler = (e) => filterHandler(e.target.value);

  return (
    <div className="store__sidebar store-sidebar">
      <ul className="store-sidebar__filters">
        <h3>Filters</h3>
        <select onChange={onChangeFilterHandler}>
          <option defaultValue value="all">
            All
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
