import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderFrom/OrderForm";

export default function Cart() {
   return (
     <div className="Cart">
       <h1>Cart</h1>
       <CartList />
       <OrderForm />
     </div>
   );
 }