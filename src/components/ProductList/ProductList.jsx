import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((products) => (
      <div key={products.id} className="Product">
        <img src={products.picture} alt={products.name} />
        <NavLink to={"/products/" + products.slug}>{products.name}</NavLink>
        <span>{products.price} $</span>
      </div>
    ));

  return <div className="ProductList">{output}</div>;
}
