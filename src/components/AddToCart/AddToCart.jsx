import { useContext } from "react";
import { AppContext } from "../../App";
import "./AddToCart.css"

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart, // положить текущее содержимое корзинки
      [product.id]: qty, // добавить текущий товар
    });
  }

  return (
    <div className="AddToCart">
      {cart[product.id]}
      <button onClick={onAddToCartClick}>add</button>
    </div>
  );
}
