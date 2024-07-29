import { useReducer } from "react";
// import { useState } from 'react';

const initialInputState = {
  value: '',
  isTouched: false
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }

  return initialInputState;
};

const useInput = validateValue => {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);


  // Hooks (and custom hooks in general) should be generic, so we shouldn't set a particular validation technique here, but use it as argument of the hook.
  // const valueIsValid = validateValue(enteredValue);
  const valueIsValid = validateValue(inputState.value);
  // const hasError = !valueIsValid && isTouched;
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = event => {
    // setEnteredValue(event.target.value);
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = event => {
    // setIsTouched(true);
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    // setEnteredValue('');
    // setIsTouched(false);
    dispatch({ type: 'RESET' });

  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
