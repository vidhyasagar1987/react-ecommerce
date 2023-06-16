import React from "react";
import Layout from "../utils/Layout";
import { useDispatch, useSelector } from "react-redux";
import { CART_EMPTY } from "../utils/Constants";
import CartList from "../components/Cart/CartList";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../Slices/CartSlice";
import Banner from "../utils/Banner";
import ButtonStyle from "../utils/ButtonStyle";

const Cart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const backToProducts = () => {
    navigate("/products");
  };
  const checkout = () => {
    navigate("/checkout");
  };

  const dispatch = useDispatch();

  return (
    <Layout>
      <Banner>
        {" "}
        <h2>Your Cart</h2>
        <p>
          {" "}
          <Link to="/">Home </Link>/ Cart
        </p>
      </Banner>
      <div className="container">
        <div className="cartContainer">
          {!!cart && cart.length > 0
            ? cart.map((c) => <CartList key={c.id} cart={c} />)
            : <h3>{CART_EMPTY}</h3>}
          {cart.length === 0 && (
            <ButtonStyle onClick={backToProducts}>Back to Products</ButtonStyle>
          )}
          {cart?.length > 0 && (
            <>
              {" "}
              <div>
                <span>Total Amount</span>
                <span>{totalAmount.toFixed(2)}</span>
              </div>
              <div>
                <button onClick={backToProducts}>Cancel</button>
                <button onClick={checkout}>Order</button>
              </div>
              <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
