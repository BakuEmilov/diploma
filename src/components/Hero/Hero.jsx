import React from "react";
import css from "./Hero.module.css";
import Arrow from "../../assets/arrow.png";
import Cart2 from "../../assets/cart-2.png";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className={css.container}>
      {/*left side*/}
      <div className={css.h_sides}>
        <span>skin protection cream</span>

        <div className={css.text2}></div>
      </div>
    </div>
  );
};
export default Hero;
