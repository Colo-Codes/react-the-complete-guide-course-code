import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  // Just running the setIsLoggedIn will cause a loop, because it will cause the page to re-render and get the value again and again.
  // This is why we use an Effect.
  // const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  // if (storedUserLoggedInInformation === '1') {
  //   setIsLoggedIn(true);
  // }

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
