import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  // We initialise things in te constructor
  constructor() {
    super();
    // In class-based components, the state is always an object, and its property name is always 'state'
    this.state = {
      showUsers: true,
      // otherState: 'otherValue',
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false // This is not valid
    // React merges the new state with the old one, overriding what we tell it to override and keeping the original states that weren't modified
    this.setState((curState) => { return { showUsers: !curState.showUsers } });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
