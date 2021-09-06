import useInput from '../hooks/use-input';

const validateTextInput = value => value.trim() !== '';
const validateEmailInput = value => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
};

const BasicForm = props => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(validateTextInput); // Check for valid input
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(validateTextInput); // Check for valid input
  const {
    value: emailAddr,
    isValid: emailAddrIsValid,
    hasError: emailAddrHasError,
    valueChangeHandler: emailAddrChangeHandler,
    inputBlurHandler: emailAddrBlurHandler,
    reset: emailAddrReset
  } = useInput(validateEmailInput); // Check for valid input

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailAddrClasses = emailAddrHasError ? 'form-control invalid' : 'form-control';

  let isFormValid = false;
  (!firstNameIsValid || !lastNameIsValid || !emailAddrIsValid)
    ? isFormValid = false
    : isFormValid = true;

  const submitHandler = (event) => {
    event.preventDefault();

    // Form validation (extra validation)
    if (!isFormValid) {
      alert('ERROR: Form is invalid');
      return;
    }

    console.log('Form submitted!', firstName, lastName, emailAddr);

    firstNameReset();
    lastNameReset();
    emailAddrReset();
  };



  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName} />
          {firstNameHasError && <p className='error-text'>Enter a valid, not empty first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastName} />
          {lastNameHasError && <p className='error-text'>Enter a valid, not empty last name</p>}
        </div>
      </div>
      <div className={emailAddrClasses}>
        <label htmlFor='email-addr'>E-Mail Address</label>
        <input type='email' id='email-addr' onChange={emailAddrChangeHandler} onBlur={emailAddrBlurHandler} value={emailAddr} />
        {emailAddrHasError && <p className='error-text'>Enter a valid, not empty email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form >
  );
};

export default BasicForm;
