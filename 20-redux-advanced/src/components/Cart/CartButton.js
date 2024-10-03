import { useDispatch } from "react-redux";
import { toggleShowCart } from "../../store/cartSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const clickHandler = () => dispatch(toggleShowCart());

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
