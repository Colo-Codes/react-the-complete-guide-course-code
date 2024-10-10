import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  // Access to the state
  const isCartShown = useSelector((state) => state.ui.isCartShown);

  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
