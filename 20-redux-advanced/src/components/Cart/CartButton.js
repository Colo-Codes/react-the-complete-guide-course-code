import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../../store/uiSlice";
import { useMemo } from "react";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  // const cartItemsCount = cartItems.reduce(quantityReducer, 0);

  const cartItemsCount = useMemo(
    () => cartItems.reduce((acc, { quantity }) => acc + quantity, 0),
    [cartItems],
  );

  const clickHandler = () => dispatch(toggleShowCart());

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default CartButton;
