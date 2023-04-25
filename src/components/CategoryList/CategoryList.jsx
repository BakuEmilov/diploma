import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext } from "react";
import "./CategoryList.css"

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>{output}</ul>
    </div>
  );
}