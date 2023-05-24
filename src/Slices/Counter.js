import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    test: 0,
  },
  reducers: {
    add: (state, action) => {
      state.test = state.test + action.payload;
    },
  },
});

export const { add } = counterSlice.actions;

export default counterSlice.reducer;
