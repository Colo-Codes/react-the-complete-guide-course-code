import { useState } from 'react';

const useInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  // Hooks (and custom hooks in general) should be generic, so we shouldn't set a particular validation technique here, but use it as argument of the hook.
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
