import React from "react";
import Button from "../../utils/Button";
import { BANNER_CONTENT, BANNER_HEADING, SHOP_NOW } from "../../utils/Constants";
const Banner = () => {
  return (
    <section className="banner">
      {/* <img src="path/to/your/banner-image.jpg" alt="Banner" /> */}
      <div className="banner-content">
        <h2>{BANNER_CONTENT}</h2>
        <p>{BANNER_HEADING}</p>

        <Button>{SHOP_NOW}</Button>
      </div>
    </section>
  );
};

export default Banner;
