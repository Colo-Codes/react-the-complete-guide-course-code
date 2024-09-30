import { createSlice, configureStore } from "@reduxjs/toolkit";

// Reducers using Redux Toolkit
const initialCounterState = { value: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByN(state, action) {
      state.value += action.payload;
    },
    toggleState(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { authenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// Actions
const counterActions = counterSlice.actions;
const authActions = authSlice.actions;

export { counterActions, authActions };
export default store;
