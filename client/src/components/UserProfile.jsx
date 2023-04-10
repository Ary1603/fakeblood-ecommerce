import React, { useState, useEffect, useContext } from 'react'
import { UserDataContext } from '../context/user';
function UserProfile() {
  const {userData, setUserData, setToken, userDataComplete, setUserDataComplete} = useContext(UserDataContext)
  useEffect(() => {
    
 
    console.log(JSON.stringify(userDataComplete))
  }, [])
  
  
  
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile