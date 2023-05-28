import React from "react";
import Layout from "../utils/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../Slices/CartSlice";

const ProductDetail = () => {
  let { id } = useParams();

  const { products } = useSelector((state) => state.products);

  const product = products && products?.find((p) => p.id === parseFloat(id));

  const dispatch = useDispatch();

  const addToCartHandler = (p) => {
    dispatch(addTocart({ ...p, quantity: parseInt(1) }));
  };

  return (
    <Layout>
      <div className="container">
        <h2> {product.title}</h2>
        <p>{product.description}</p>
        <h3>Category: {product.category}</h3>
        <h2>Price : {product.price}</h2>
        <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
      </div>
    </Layout>
  );
};

export default ProductDetail;
