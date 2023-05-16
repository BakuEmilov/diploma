import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./CategoryList.css";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check screen size on initial render
    checkScreenSize();

    // Listen for screen size changes
    window.addEventListener("resize", checkScreenSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>{category.name}</NavLink>
      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList">
      {isMobile ? (
        <div className="BurgerMenu">
          <input type="checkbox" id="burger-toggle" />
          <label htmlFor="burger-toggle" className="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul>{output}</ul>
        </div>
      ) : (
        <ul>{output}</ul>
      )}
      <AddCategory />
    </div>
  );
}