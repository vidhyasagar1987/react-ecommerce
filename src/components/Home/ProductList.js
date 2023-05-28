import React from "react";

const ProductList = ({ product }) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={product.image} alt={product.title} className="mouse" />
      </div>

      <div className="contentBox">
        <h3>{product.title}</h3>
        <h2 className="price">{product.price} €</h2>
        <a href="#" className="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductList;
