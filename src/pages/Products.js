import React from "react";

import "../assets/css/products.css";

import Layout from "../utils/Layout";
import Banner from "../utils/Banner";

import ProductGrid from "../components/Products/ProductGrid";
import CartToast from "../utils/CartToast";

const Products = () => {
  return (
    <Layout>
      <Banner>
        <h2>Our Products</h2>
        <p> Home / Products</p>
      </Banner>
      <div className="container">
        <ProductGrid />
      </div>
      <CartToast />
    </Layout>
  );
};

export default Products;
