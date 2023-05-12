import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/deleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((products) => (
      <div key={products.id} className="Product">
        <NavLink to={`/products/${products.slug}`}>
          <img src={products.picture} alt={products.name} />
        </NavLink>
        <NavLink to={"/products/" + products.slug}>{products.name}</NavLink>
        <span>${products.price}</span>
        <AddToCart product={products} />
        <DeleteProduct product={products} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}

      <AddProduct category={category} />
    </div>
  );
}
