import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true);
    }
    return (false);
  }

  // Validating input
  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = validateEmail(enteredEmail);
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  // Use the useEffect hook to check if all inputs are valid, and then set the form as valid
  // useEffect(() => {
  if (enteredNameIsValid && enteredEmailIsValid) { // And any other input check
    // setFormIsValid(true);
    formIsValid = true;
  }
  // else {
  //   // setFormIsValid(false);
  //   formIsValid = false;
  // }
  // }, [enteredNameIsValid]); // All input validation variables should be included in the dependencies array

  // Input elements are represented in JavaScript as objects with a 'value' property containing the input data

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    // Marking all inputs as 'touched' by the user
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    // Validating input
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // Clearing input
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);

    // We can also clear the input using refs but this way of doing it is using JavaScript to manipulate the DOM, which escapes React world and should be discouraged
    // nameInputRef.current.value = '';
  };

  const nameInputClasses = `form-control ${!nameInputIsInvalid ? '' : 'invalid'}`;
  const emailInputClasses = `form-control ${!emailInputIsInvalid ? '' : 'invalid'}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">The input field must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {emailInputIsInvalid && <p className="error-text">The email address should be valid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
