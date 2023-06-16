import React from "react";
import {
  BANNER_CONTENT,
  BANNER_HEADING,
  SHOP_NOW,
} from "../../utils/Constants";
import { Link } from "react-router-dom";
import ButtonStyle from "../../utils/ButtonStyle";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>{BANNER_CONTENT}</h2>
        <p>{BANNER_HEADING}</p>

        <Link to={"/products"}>
          <ButtonStyle>{SHOP_NOW} </ButtonStyle>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
