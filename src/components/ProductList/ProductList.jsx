import "./ProductList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const { product } = useContext(AppContext);

  const output = product.map(product  => (
    <div>
      <img src={product.picture} alt={product.name} width="200"/>
      <NavLink to={"/product/" + product.slug}>{product.name}</NavLink>
      <span>{product.price} $</span>
    </div>
  ));

  return <div className="ProductList">{output}</div>;
}
