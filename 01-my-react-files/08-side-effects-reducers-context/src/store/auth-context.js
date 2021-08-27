import React, { useState, useEffect } from 'react';

// NOTE: this will act as an object, not as a component
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
});

// NOTE: Including a component to handle the login/logout here instead on doing it in another component (App).
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // This function is executed after every component re-evaluation, if the dependencies defined in the second argument have changed, or will run just once, at start, if dependencies didn't change.
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider value={
        {
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }
    }>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;