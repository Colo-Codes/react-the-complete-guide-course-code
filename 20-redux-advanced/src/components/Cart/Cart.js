import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItemsList = cartItems.map((cartItem) => {
    return <CartItem key={cartItem.id} item={cartItem} />;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsList}</ul>
    </Card>
  );
};

export default Cart;
