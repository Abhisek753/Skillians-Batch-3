import React, { createContext, useContext, useState } from 'react'

const AuthContext=createContext()

export default function AuthProvider ({children})  {
 const [user,setUser]=useState(null);
let name="Saurav Kumar"
 const Login=(username)=>{
    setUser({name:username})
 }

 const Logout=()=>{
      setUser(null)
 }
  return (
    <AuthContext.Provider value={{user,Login,Logout}}  >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext);

