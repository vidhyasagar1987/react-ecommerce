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
      const { id } = action.payload;

      const currIndex = state.cart.findIndex((c) => c.id === id);
      const currItem = state.cart[currIndex];
      let updatedCart;

      if (currItem) {
        const uI = { ...currItem, quantity: currItem.quantity + 1 };
        updatedCart = [...state.cart];
        updatedCart[currIndex] = uI;
        state.cart = updatedCart;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeCart: (state, action) => {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cart[existingCartItemIndex];

      state.totalAmount = state.totalAmount - existingItem.price;
      let updatedCart;
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((c) => c.id !== action.payload.id);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedCart = [...state.cart];
        updatedCart[existingCartItemIndex] = updatedItem;
        state.cart = updatedCart;
      }
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((c) => c.id !== action.payload);
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.totalAmount = 0;
    },
  },
});

export const { addTocart, deleteCart, removeCart , clearCart} = CartSlice.actions;

export default CartSlice.reducer;
