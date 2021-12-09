import React, { useState } from "react";
import classes from "./Slider.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handlerClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  console.log(`translateX(${slideIndex}*-50vw)`);
  return (
    <div>
      <div className={classes.container}>
        <div
          className={`${classes.arrow} ${classes.left}`}
          onClick={() => handlerClick("left")}
        >
          <MdArrowBackIos className={classes.icon} />
        </div>
        <div
          className={classes.wrapper}
          style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        >
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img
                className={classes.banner}
                src="/images/banner.jpg"
                alt="banner"
              />
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img
                className={classes.banner}
                src="/images/banner.jpg"
                alt="banner"
              />
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img
                className={classes.banner}
                src="/images/banner.jpg"
                alt="banner"
              />
            </div>
          </div>
        </div>
        <div
          className={`${classes.arrow} ${classes.right}`}
          onClick={() => handlerClick("right")}
        >
          <MdArrowForwardIos className={classes.icon} />
        </div>
        <div className={classes.threeDots}>
          <div className={classes.threeDotWrapper}>
            <GoPrimitiveDot
              className={
                slideIndex == 0
                  ? `${classes.dotOne} ${classes.dotColor}`
                  : classes.dotOne
              }
              onClick={() => setSlideIndex(0)}
            />
            <GoPrimitiveDot
              className={
                slideIndex == 1
                  ? `${classes.dotOne} ${classes.dotColor}`
                  : classes.dotOne
              }
              onClick={() => setSlideIndex(1)}
            />
            <GoPrimitiveDot
              className={
                slideIndex == 2
                  ? `${classes.dotOne} ${classes.dotColor}`
                  : classes.dotOne
              }
              onClick={() => setSlideIndex(2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
