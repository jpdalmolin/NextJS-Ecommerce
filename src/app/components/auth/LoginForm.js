"use client";

import React, { useState } from "react";

import Boton from "../ui/Boton"
import { useAuthContext } from "@/src/app/components/context/AuthContext"
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { logIn,registerUser} = useAuthContext();
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(values.email, values.password);
      router.push("/admin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-blue/80 rounded-xl shadow-[0_4px_10px_#111827] backdrop-blur-[5px] p-6">
        <form onSubmit={handleLogin} className="m-y-2 space-y-6">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
            />
          </div>
          <div className="flex justify-between">
            <Boton type="submit">Iniciar sesión</Boton>
            <Boton onClick={()=>registerUser(values)}>Registrarse</Boton>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;