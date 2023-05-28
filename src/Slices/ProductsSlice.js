import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);

    return response;
  } catch (error) {
    throw error.message;
  }
});

export const productSlice = createSlice({
  name: "test",
  initialState: {
    products: [],
    productsLoading: true,
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsLoading = true;
        state.error = action.payload;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
        state.productsLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
