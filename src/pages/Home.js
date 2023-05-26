import React from "react";
import "../assets/css/home.css";

import Layout from "../utils/Layout.js";

const Home = () => {
  return (
    <Layout>
      <section className="banner">
        {/* <img src="path/to/your/banner-image.jpg" alt="Banner" /> */}
        <div className="banner-content">
          <h2>Discover our New Collection</h2>
          <p>Shop now and get up to 50% off</p>
          <button>Shop Now</button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
