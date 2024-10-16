import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartShown: false,
  notification: {
    status: "",
    title: "",
    message: "",
  },
};

// Slice definition
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleShowCart(state) {
      state.isCartShown = !state.isCartShown;
    },
    setNotification(state, action) {
      state.notification = {
        ...action.payload,
      };
    },
  },
});

// Export actions (used to update the state in the store)
export const { toggleShowCart, setNotification } = uiSlice.actions;
// Export the reducer
export default uiSlice;
