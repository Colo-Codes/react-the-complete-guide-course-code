import { useState } from 'react';

import './App.css';
import UserList from './Components/UserList/UserList';
import UserNew from './Components/UserNew/UserNew';

function App() {

  const [listOfUsers, setListOfUsers] = useState('');

  // Lifting the state up
  const addNewUserHandler = newUserData => {
    if (!newUserData)
      return;

    setListOfUsers(prevUsers => {
      return [newUserData, ...prevUsers];
    });
  };

  const deleteUserHandler = userId => {
    setListOfUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };

  return (
    <div className="">
      <UserNew onAddNewUser={addNewUserHandler} />
      {listOfUsers.length > 0 && <UserList listOfUsers={listOfUsers} onDeleteUser={deleteUserHandler} />}
    </div>
  );
}

export default App;
