import useInput from '../hooks/use-input';

const BasicForm = props => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(value => value.trim() !== '');

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';

  const submitHandler = (event) => {
    event.preventDefault();

    // Form validation
    if (!firstNameIsValid) {
      alert('Form is invalid');
      return;
    }

    firstNameReset();

  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName} />
          {firstNameHasError && <p className='error-text'>Enter a valid, not empty first name</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
