import { useState } from 'react';

import './App.css';
import UserList from './Components/UserList/UserList';
import UserNew from './Components/UserNew/UserNew';

function App() {

  const [userData, setUserData] = useState('');

  const addNewUserHandler = newUserData => {
    console.log(newUserData);
    setUserData(newUserData);
  }

  return (
    <div className="">
      <UserNew addNewUser={addNewUserHandler} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
