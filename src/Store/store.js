import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/ProductsSlice";
import userReducer from "../Slices/UserSlice";
import cartReducer from "../Slices/CartSlice";

export const store = configureStore({
  reducer: { products: productReducer, users: userReducer, cart: cartReducer },
});

export default store;
