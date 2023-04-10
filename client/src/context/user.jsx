import { Children, createContext, useEffect, useState } from "react";


export const UserDataContext = createContext();

import React from 'react'



export const UserProvider = ({children}) => {



    const [userData, setUserData] = useState()
    const [userDataComplete, setUserDataComplete] = useState({})
    const [token, setToken] = useState()
    useEffect(() => {
      console.log('hola')
      setUserData(localStorage.getItem('name'))
      //setUserDataComplete(localStorage.getItem('user'))
      setToken(localStorage.getItem('token'))
    }, )
    

    console.log(userDataComplete)
    return(
        <UserDataContext.Provider value={{userData, 
        setUserData,
        token,
        setToken, 
        userDataComplete,
        setUserDataComplete
        }}> 
            {children}
        </UserDataContext.Provider>
    )
}