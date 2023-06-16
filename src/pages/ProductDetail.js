import React from "react";
import Layout from "../utils/Layout";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../Slices/CartSlice";
import Banner from "../utils/Banner";
import { toast } from "react-toastify";
import CartToast from "../utils/CartToast";
import ButtonStyle from "../utils/ButtonStyle";
const ProductDetail = () => {
  let { id } = useParams();

  const { products } = useSelector((state) => state.products);

  const product = products && products?.find((p) => p.id === parseFloat(id));

  const dispatch = useDispatch();

  const addToCartHandler = (p) => {
    dispatch(addTocart({ ...p, quantity: parseInt(1) }));
    toast("Cart Added Successfully");
  };

  return (
    <Layout>
      <Banner>
        <h2>{product.title}</h2>
        <p>
          <Link to="/">Home </Link>/ <Link to="/products">Products </Link> / {product.title}
        </p>
      </Banner>
      <div className="container">
        <div className="productDetail">
          <div className="productDetailLt">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="productDetailRt">
            {/* <h2> {product.title}</h2> */}
            <p>{product.description}</p>
            <h3>Category: {product.category}</h3>
            <h2>Price : {product.price}</h2>

            <ButtonStyle onClick={() => addToCartHandler(product)}>
              {" "}
              Add to Cart
            </ButtonStyle>
          </div>
        </div>
      </div>
      <CartToast />
    </Layout>
  );
};

export default ProductDetail;
