import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/ProductsSlice";
import userReducer from "../Slices/UserSlice";

export const store = configureStore({ reducer: { products: productReducer, users: userReducer } });

export default store;
