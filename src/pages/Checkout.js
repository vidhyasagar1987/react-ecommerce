import React, { useState } from "react";
import Layout from "../utils/Layout";
import { CHECKOUT } from "../utils/Constants";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import CheckoutCart from "../components/Checkout/CheckoutCart";
import "../assets/css/Checkout.css";
import OrderDetails from "../components/Checkout/OrderDetails";

const Checkout = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <Layout>
      <div className="container">
        <h2>{CHECKOUT}</h2>
        <div className="checkout-container">
          {isSuccess ? (
            <OrderDetails />
          ) : (
            <>
              <CheckoutForm isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
              <CheckoutCart />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
