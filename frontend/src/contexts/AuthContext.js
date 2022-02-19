import React, { createContext, useState } from 'react';

let TOKEN_KEY = '@survey/token';
let USER_DATA = '@survey/user_data';

export let AuthContext = createContext();

export let AuthProvider = (props) => {
    let [token, setToken] = useState(
        localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : null
    );
    let [userInfo, setUserInfo] = useState(
        localStorage.getItem(USER_DATA)
            ? JSON.parse(localStorage.getItem(USER_DATA))
            : null
    );

    let onLoginSuccess = (newToken, userInfo) => {
        localStorage.setItem(TOKEN_KEY, newToken);
        localStorage.setItem(USER_DATA, JSON.stringify(userInfo));
        let data = localStorage.getItem(USER_DATA);
        setToken(newToken);
        setUserInfo(JSON.parse(data));
    };

    let onLogoutSuccess = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_DATA);
        setUserInfo(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{ token, userInfo, onLoginSuccess, onLogoutSuccess }}
        >
            {' '}
            {props.children}{' '}
        </AuthContext.Provider>
    );
};
