import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Make the store available to the entire app
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
