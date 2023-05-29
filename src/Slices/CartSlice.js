import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    totalAmount: 0,
  },
  reducers: {
    addTocart: (state, action) => {
      state.totalAmount = state.totalAmount + action.payload.price;
      const existingItemIndex = state.cart.findIndex(
        (c) => c.id === parseInt(action.payload.id)
      );
      const existingItem = state.cart.find(
        (c) => c.id === parseInt(action.payload.id)
      );
      let updatedCart;
      if (existingItem) {
        let updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = updatedItem;
        state.cart = updatedCart;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (c) => c.id === parseInt(action.payload.id)
      );
      const existingItem = state.cart.find(
        (c) => c.id === parseInt(action.payload.id)
      );
      let updatedCart;
      state.totalAmount = state.totalAmount - action.payload.price;
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter(
          (c) => c.id !== parseInt(action.payload.id)
        );
      } else {
        let updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = updatedItem;
        state.cart = updatedCart;
      }
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter(
        (c) => c.id !== action.payload

      );
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.totalAmount = 0;
    },
  },
});

export const { addTocart, deleteCart, removeCart, clearCart } =
  CartSlice.actions;

export default CartSlice.reducer;
