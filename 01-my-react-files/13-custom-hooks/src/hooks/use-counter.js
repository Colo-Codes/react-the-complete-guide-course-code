import { useState, useEffect } from "react";

// The name of the hook (function) has to start with 'use'. This is a React thing.
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]); // Remember to add any external variable to useEffect as its dependency

    return counter;
};

export default useCounter;