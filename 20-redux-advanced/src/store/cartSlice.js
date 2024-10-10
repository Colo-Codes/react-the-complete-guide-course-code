import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

// Helper function to update totals
const updateProductTotal = (item) => {
  item.total = item.quantity * item.price;
};

// Slice definition
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        updateProductTotal(existingProduct);
      } else {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
          total: action.payload.price, // Initially, total is equal to price
        });
      }
    },
    removeItemFromCart(state, action) {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      // Failsafe in case there are not items on cart
      if (!existingProduct) return;

      // Remove item from cart if the quantity is zero
      if (existingProduct.quantity > 1) {
        // Decrease item count
        existingProduct.quantity -= 1;
        updateProductTotal(existingProduct);
      } else {
        // Remove the item from the cart
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },
  },
});

// Export actions (used to update the state in the store)
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
// Export the reducer
export default cartSlice;
