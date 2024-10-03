import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Store definition, with reducers included
const store = configureStore({
  reducer: cartSlice.reducer,
});

// Export store (to get the state from it)
export default store;
