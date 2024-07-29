import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  // When we have conditional rendering, we can use componentWillUnmount() to check if the component will be unmounted
  componentWillUnmount() {
    console.log('User component will unmount!');
  }

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
