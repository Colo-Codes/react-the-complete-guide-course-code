import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('(CHILD) Button re-evaluation');

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// The Button props (onClick) will change on every re-render of the parent, because the 'clickHandler' function is being re-created (with 'const') every time the App component is re-evaluated, and as it is a non primitive value, the new function is different to the old one.
export default React.memo(Button);
