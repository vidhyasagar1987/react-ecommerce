import React from "react";
import Button from "../../utils/Button";
import {
  BANNER_CONTENT,
  BANNER_HEADING,
  SHOP_NOW,
} from "../../utils/Constants";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>{BANNER_CONTENT}</h2>
        <p>{BANNER_HEADING}</p>

        <Link to={"/products"}>    <button className="button">
        <span className="button-content">{SHOP_NOW} </span>
        </button></Link>
      </div>
    </section>
  );
};

export default Banner;
