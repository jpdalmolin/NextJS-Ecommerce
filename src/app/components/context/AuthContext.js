// context/AuthContext.jsx
"use client";

import {
  authFirebase,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "@/src/app/data/config";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
      console.log("User: ", user);
    });

    return () => unsubscribe();
  }, []);

  const registerUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
}

  const logIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Verificar si el usuario está autenticado
      const user = auth.currentUser;
      if (user) {
        // Redirigir a /admin si el usuario está autenticado
        window.location.href = "/admin";
      } else {
        console.log("Error de autenticación");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    setUser(null);
    return await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, loading, registerUser, logIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};