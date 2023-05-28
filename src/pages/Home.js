import React from "react";
import "../assets/css/home.css";
import Layout from "../utils/Layout.js";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Products/>
    </Layout>
  );
};

export default Home;
