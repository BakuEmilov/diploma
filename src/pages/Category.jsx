import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import ProductList from "../components/ProductList/ProductList";
import NotFound from "./NotFound";

export default function Category() {
  const { params } = useMatch("/categories/:slug");
  // получить список категории из App
  const { categories } = useContext(AppContext);

  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <ProductList category={category} />
    </div>
  );
}
