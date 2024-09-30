import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  // Use useSelector to select which piece of data we want to extract from the store
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => dispatch(counterActions.toggleState());
  const handleIncrement = () => dispatch(counterActions.increment());
  const handleIncrementByN = () => dispatch(counterActions.incrementByN(10));
  // The above code will return:
  // { type: some_unique_id, payload: 10 }
  const handleDecrement = () => dispatch(counterActions.decrement());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementByN}>Increment by n = 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
