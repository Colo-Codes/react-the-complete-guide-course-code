const redux = require("redux");

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// Store
const store = redux.legacy_createStore(counterReducer);

console.log(store.getState());
// -> { counter: 0 }

// Subscription
const counterSubscriber = () => {
  const newState = store.getState();

  console.log(newState);
};

store.subscribe(counterSubscriber);

// Dispatcher
store.dispatch({
  type: "increment",
});
// -> { counter: 1 }
store.dispatch({
  type: "decrement",
});
// -> { counter: 0 }
