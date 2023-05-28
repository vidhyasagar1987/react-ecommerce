import React from "react";

const CheckoutCartItem = ({ cart }) => {
  return (
    <div className="cartPoduct">
      <h2>Product: {cart.title}</h2>
      <div className="cart-content">
        <img src={cart.image} alt={cart.title} />
        <div className="cart-des">
          <h4>Category: {cart.category}</h4>

          <div>
            <span>{cart.price}</span>
            <span>x {cart.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
