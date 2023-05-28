import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Slices/CartSlice";

const CheckoutForm = ({ setIsSuccess, isSuccess }) => {
  const defaultState = {
    name: "",
    email: "",
    address: "",
    pincode: "",
    phone: "",
  };

  const dispatch = useDispatch();

  const [cusData, setCusData] = useState(defaultState);

  const { name, email, address, pincode, phone } = cusData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCusData({ ...cusData, [name]: value });
  };

  const { cart } = useSelector((state) => state.cart);

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      cart,
      ...cusData,
      id: Math.floor(Math.random() * 100),
    };
    console.log(data);
    setIsSuccess(!isSuccess);
    setCusData(defaultState);
    dispatch(clearCart());
  };

  const navigate = useNavigate();
  const backToProducts = () => {
    navigate("/cart");
    setCusData(defaultState);
  };

  return (
    <div className="checkoutForm">
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            required
            value={address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode</label>
          <input
            type="number"
            name="pincode"
            required
            value={pincode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            required
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={backToProducts} type="button">
            Cancel
          </button>
          <button>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
