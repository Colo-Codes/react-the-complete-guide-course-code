import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // Use useSelector to select which piece of data we want to extract from the store
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => dispatch({ type: "TOGGLE_STATE" });
  const handleIncrement = () => dispatch({ type: "INCREMENT" });
  const handleIncrementByN = () =>
    dispatch({
      type: "INCREMENT_BY_N",
      payload: {
        n: 10,
      },
    });
  const handleDecrement = () => dispatch({ type: "DECREMENT" });

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
