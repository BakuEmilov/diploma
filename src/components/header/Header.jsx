import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/nike.png";
import Cart from "../../assets/cart.png";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>nike</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Delivery</li>
          </ul>
        </div>

          <input type="" className={css.search} placeholder='Search' />
          <img className={css.cart} src={Cart} alt="" />
      </div>
    </div>
  );
};

export default Header;
