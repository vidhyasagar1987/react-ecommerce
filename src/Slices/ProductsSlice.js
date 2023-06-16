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
    productsCategory: [],
    filterProducts: []
  },
  reducers: {
    productFilter:(state, action) => {
      const { minPrice, maxPrice, category } = action.payload;

      if (minPrice && maxPrice) {
        // Filter by price range
        state.filterProducts = state.products.filter(
          (product) =>
            product.price >= minPrice &&
            product.price <= maxPrice &&
            (!category || product.category === category) // Include category filter if selected
        );
      } else if (category) {
        // Filter by category only
        state.filterProducts = state.products.filter(
          (product) => product.category === category
        );
      } else {
        // No filters selected, display all products
        state.filterProducts = state.products;
      }

     
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsLoading = true;
        state.error = action.payload;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload;
        state.productsCategory = action.payload
        state.filterProducts =  action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
        state.productsLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {productFilter} = productSlice.actions;

export default productSlice.reducer;
