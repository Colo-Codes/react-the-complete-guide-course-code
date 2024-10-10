import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartShown: false,
};

// Slice definition
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleShowCart(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

// Export actions (used to update the state in the store)
export const { toggleShowCart } = uiSlice.actions;
// Export the reducer
export default uiSlice;
