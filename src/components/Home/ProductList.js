import React from "react";

const ProductList = ({ product }) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={product.image} alt={product.title} className="mouse" />
      </div>

      <div className="contentBox">
        <h3>{product.title.slice(0, 5)}</h3>
        <h2 className="price">{product.price} €</h2>
        <button className="button">
          <span className="button-content"> Buy Now</span>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
