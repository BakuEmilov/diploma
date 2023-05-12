import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartList.css";

export default function CartList() {
  //получить список товаров и корзинку
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }
  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  //
  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={"/product/" + product.slug}>{product.name}</Link>
        {cart[product.id]}
        <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)}
        />
        <span>{cart[product.id] * product.price} $</span>
        <button onClick={() => onItemRemove(product)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-folder-minus"
            viewBox="0 0 16 16"
            
          >
            <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
            <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}
