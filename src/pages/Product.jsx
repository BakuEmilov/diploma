import { useContext } from "react";
import { AppContext } from "../App";
import { useMatch } from "react-router";
import NotFound from "./NotFound";

export default function Product() {
  const { products } = useContext(AppContext);
  const { params } = useMatch("/products/:slug");

  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <img
        src={product.picture}
        alt={product.name}
        className="Product__image"
      />
      <span className="Product__price">${product.price}</span>
      <span className="Product__description">{product.description}</span>
    </div>
  );
}
