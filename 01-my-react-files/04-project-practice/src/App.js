import { useState } from 'react';

import './App.css';
import UserList from './Components/UserList/UserList';
import UserNew from './Components/UserNew/UserNew';

function App() {

  const [listOfUsers, setListOfUsers] = useState('');

  const addNewUserHandler = newUserData => {
    if (!newUserData)
      return;

    setListOfUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(newUserData);
      console.log(updatedUsers);
      return updatedUsers;
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
      <UserNew addNewUser={addNewUserHandler} />
      {listOfUsers.length > 0 && <UserList listOfUsers={listOfUsers} onDeleteUser={deleteUserHandler} />}
    </div>
  );
}

export default App;
