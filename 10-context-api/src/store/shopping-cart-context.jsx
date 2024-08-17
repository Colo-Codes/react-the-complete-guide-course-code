import { createContext } from "react";

// Context with default value. An actual value needs to be passed as prop when providing the context.
export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
});
