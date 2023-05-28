import React from "react";
import "../../assets/css/Cart.css";
import Button from "../../utils/Button";
import { useDispatch } from "react-redux";
import { addTocart, deleteCart, removeCart } from "../../Slices/CartSlice";
import { Link } from "react-router-dom";

const CartList = ({ cart }) => {
  const dispatch = useDispatch();
  const deleteProductHandler = (id) => {
    dispatch(deleteCart(id));
  };

  const addProductHandler = (product) => {
    dispatch(addTocart(product));
  };
  const removeProductHandler = (product) => {
    dispatch(removeCart(product));
  };

  return (
    <div className="cartPoduct">
      <Link to={`/products/${cart.id}`}>
        {" "}
        <h2>Product: {cart.title}</h2>
      </Link>
      <div className="cart-content">
        <img src={cart.image} alt={cart.title} />
        <div className="cart-des">
          <h4>Category: {cart.category}</h4>

          <div>
            <span>{cart.price}</span>
            <span>x {cart.quantity}</span>
          </div>
          <div>
            <button onClick={removeProductHandler.bind(null, cart)}>−</button>
            <button onClick={addProductHandler.bind(null, cart)}>+</button>
          </div>
          <button
            onClick={() => {
              deleteProductHandler(cart.id);
            }}
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
