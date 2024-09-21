import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const UseLoginContext = createContext()

const UserLoginContext = ({children}) => {
    const [userLogin, setUserLogin] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const loginAccess = (data) => {
        setUserLogin(data)
        setIsLogin(true)
    }

    const logOut = () => {
        setUserLogin(null)
        setIsLogin(false)
        Navigate('/login',{
            replace:true
        })
    }

    return (
        <UseLoginContext.Provider value={{userLogin, isLogin, loginAccess, logOut}}>
            {children}
        </UseLoginContext.Provider>
    )
}

export default UserLoginContext