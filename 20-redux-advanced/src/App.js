import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  // Access to the state
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    fetch(
      "https://react-course-backend-21ec7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      },
    );
  }, [cart]);

  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
