import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CART_EMPTY } from "../../utils/Constants";
import CheckoutCartItem from "./CheckoutCartItem";
const CheckoutCart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const backToProducts = () => {
    navigate("/products");
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {!!cart && cart.length > 0
        ? cart.map((c) => <CheckoutCartItem key={c.id} cart={c} />)
        : CART_EMPTY}
      {cart.length === 0 && (
        <button onClick={backToProducts}>Back to Products</button>
      )}
      {cart && cart.length > 0 && (
        <div>
          <span>Total Amount</span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default CheckoutCart;
