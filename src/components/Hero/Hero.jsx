import React from "react";
import css from './Hero.module.css';
import Arrow from "../../assets/arrow.png";
import Cart2 from "../../assets/cart-2.png";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return(
   <div className={css.container}>


    {/*left side*/}
    <div className={css.h_sides}>
      <span>#1 clothing brand</span>
      
     <div className={css.text2}>
      <span>Quality clothes for you</span>
      <span>by Nike</span>
     </div>


     {/*middle side hero image*/}
     <div className={css.wrapper}>
      <div className={css.blueCircle}>
        <img src={HeroImg} alt="" width={500} />
        <div className="block">
          <img className={css.cart2} src={Cart2} alt="" />
          <div className={css.singup}>
            <span>sign up</span>
              <img className={css.arrow} src={Arrow} alt="" />
          </div>
        </div>
      </div>
     </div>
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.7m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.cunstomers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>

    </div>
   </div>
  )
}
export default Hero;