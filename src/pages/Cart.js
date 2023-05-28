import React from "react";
import Layout from "../utils/Layout";
import { useSelector } from "react-redux";
import { CART_EMPTY } from "../utils/Constants";
import CartList from "../components/Cart/CartList";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const backToProducts = () => {
    navigate("/products");
  };
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <Layout>
      <div className="container">
        <h2>Cart:</h2>
        {!!cart && cart.length > 0
          ? cart.map((c) => <CartList key={c.id} cart={c} />)
          : CART_EMPTY}
        {cart.length === 0 && (
          <button onClick={backToProducts}>Back to Products</button>
        )}
        <div>
          <span>Total Amount</span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
        {cart?.length > 0 && (
          <div>
            <button onClick={backToProducts}>Cancel</button>
            <button onClick={checkout}>Order</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
