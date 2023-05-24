import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <section>
      <div>Logo</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Reach Us</Link>
      </nav>
    </section>
  );
};

export default TopHeader;
