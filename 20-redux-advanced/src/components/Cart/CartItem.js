import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/cartSlice";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatcher = useDispatch();

  const handlePlusClick = () => {
    dispatcher(addItemToCart({ id }));
  };

  const handleMinusClick = () => {
    dispatcher(removeItemFromCart({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleMinusClick}>-</button>
          <button onClick={handlePlusClick}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
