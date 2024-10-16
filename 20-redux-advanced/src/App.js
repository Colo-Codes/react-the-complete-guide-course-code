import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { setNotification } from "./store/uiSlice";

let isInitial = true;

function App() {
  // Access to the state
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        "https://react-course-backend-21ec7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );

      if (!response.ok) {
        throw new Error();
      }

      // Simulating a slower connection
      setTimeout(() => {
        dispatch(
          setNotification({
            status: "success",
            title: "🎉 Database updated!",
            message: "Cart successfully stored in the database",
          }),
        );
      }, 1000);
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(
      setNotification({
        status: "updating",
        title: "Updating database... ",
        message: "🔄 Sending cart data to the database",
      }),
    );

    sendCartData()
      .catch((_error) => {
        dispatch(
          setNotification({
            status: "error",
            title: "🔴 Connection error!",
            message: "The cart could not be stored in the database",
          }),
        );
      })
      .then(
        setTimeout(() => {
          dispatch(
            setNotification({
              status: "",
              title: "",
              message: "",
            }),
          );
        }, 3000),
      );
  }, [cart, dispatch]);

  return (
    <>
      {notification.status && <Notification {...notification} />}
      <Layout>
        {isCartShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
