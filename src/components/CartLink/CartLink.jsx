import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";

export default function CartLink() {
 const { cart } = useContext(AppContext);

 //вычислить кол-во товаров
 const total = Object.values(cart).reduce(
    (acc, num) => acc + num, 0
 );

 return (
  <div className="CartLink">
    <NavLink to="/cart">
       Cart ({total})
    </NavLink>
  </div>
 )
}