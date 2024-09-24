import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// Reducer using Redux Toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByN(state, action) {
      state.counter += action.payload;
    },
    toggleState(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Store
const store = configureStore({
  // If we had multiple slices, we could select the "counter" slice like this:
  // reducer: { counter: counterSlice.reducer },
  reducer: counterSlice.reducer,
});

// Actions
const counterActions = counterSlice.actions;

export { counterActions };
export default store;
