import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import "./CategoryList.css";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>

      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}