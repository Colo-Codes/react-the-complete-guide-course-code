import { useState } from "react";

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

    return {
        value: enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
    };
};

export default useInput;