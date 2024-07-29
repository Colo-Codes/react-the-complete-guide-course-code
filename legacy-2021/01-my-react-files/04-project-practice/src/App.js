import { useState } from 'react';

import './App.css';
import Modal from './Components/UI/Modal';
import UserList from './Components/UserList/UserList';
import UserNew from './Components/UserNew/UserNew';

function App() {

  const [listOfUsers, setListOfUsers] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  // For lifting the state up
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

  // For lifting the state up
  const errorMessageHandler = error => {
    setErrorMessage(error);
  };

  const resetErrorMessageHandler = () => {
    setErrorMessage(null);
  }

  return (
    <div className="">
      <UserNew onAddNewUser={addNewUserHandler} onErrorMessage={errorMessageHandler} />
      {/* Conditionally rendering modules */}
      {listOfUsers.length > 0 && <UserList listOfUsers={listOfUsers} onDeleteUser={deleteUserHandler} />}
      {errorMessage && <Modal errorMessage={errorMessage} onResetErrorMessage={resetErrorMessageHandler} />}
    </div>
  );
}

export default App;
