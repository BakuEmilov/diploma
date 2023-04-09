import React from "react";
import css from './Hero.module.css';
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
      <div className={css.blueCircle}></div>
     </div>
    </div>
   </div>
  )
}
export default Hero;