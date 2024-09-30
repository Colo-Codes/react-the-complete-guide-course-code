import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store";

function App() {
  // Use useSelector to select which piece of data we want to extract from the store
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.authenticate());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Header authenticated={authenticated} logoutHandler={logoutHandler} />
      {!authenticated ? (
        <Auth submitHandler={(e) => submitHandler(e)} />
      ) : (
        <UserProfile />
      )}
      <Counter />
    </>
  );
}

export default App;
