import { legacy_createStore } from "redux";

const initialState = { counter: 0, showCounter: true };
// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "INCREMENT_BY_N":
      return {
        counter: state.counter + action.payload.n,
        showCounter: state.showCounter,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "TOGGLE_STATE":
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(counterReducer);

export default store;
