"use client"

import { auth, db, provider } from "@/src/app/data/config"
import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
      logged: false,
      emaiL: null,
      uid: null
  })

const registerUser = async (values) => {
        const userCredential=await createUserWithEmailAndPassword(auth, values.email, values.password)
        console.log(userCredential)
        const user=userCredential.user
        setUser({
          logged:true,
          email:user.email,
          user:user.uid
        })
}

const loginUser = async (values) => {
await signInWithEmailAndPassword(auth, values.email, values.password)
    
}

const logout = async () => {
await signOut(auth)
}


  
      
    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
           
        }}>
            {children}
        </AuthContext.Provider>
    )
}