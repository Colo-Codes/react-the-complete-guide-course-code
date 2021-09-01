import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  // Render method used by React
  render() {
    // 'this.props' points to the 'props' variable in the 'Component' class that 'User' class is extending
    return <li className={classes.user}>{this.props.name}</li>;
  }
};

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
