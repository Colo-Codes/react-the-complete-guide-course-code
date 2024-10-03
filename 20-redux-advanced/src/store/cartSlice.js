import { createSlice } from "@reduxjs/toolkit";

// Slice definition
const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartShown: false },
  reducers: {
    toggleShowCart(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

// Export actions (used to update the state in the store)
export const { toggleShowCart } = cartSlice.actions;
// Export the reducer
export default cartSlice;
