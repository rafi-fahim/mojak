"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/Firebase/firebase";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BackDrop from "../BackDrop";

interface Types {
  setLogin?: any;
  redirect?: any;
}

const LoginForm = ({ setLogin, redirect }: Types) => {
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const [faliedLoginStatus, setFailedLoginStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const email = loginCred.email;
    const password = loginCred.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLogin();
        if (setLogin) {
          setLoading(false);
        } else if (redirect) {
          redirect.replace("/profile")
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false)
        setFailedLoginStatus(true);
        setTimeout(() => {
          setFailedLoginStatus(false);
        }, 4000);
        console.log(errorMessage);
      });
  };
  return (
    <div className="w-full h-auto text-center flex flex-col p-4 justify-center items-center">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="rounded flex flex-col login-form-width w-auto items-center gap-4 justify-center border-theme-1 border-2 p-4 bg-white"
      >
        <h1 className="font-medium text-3xl">Login to continue</h1>
        <h1 className="font-medium text-3xl">Enter your Credentials</h1>
        <input
          onChange={(e) => {
            setLoginCred((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            });
          }}
          className="w-full border border-theme-1 rounded-sm bg-slate-200 p-2"
          type="text"
          placeholder="Your Email"
          required
        />
        <input
          onChange={(e) => {
            setLoginCred((prev) => {
              console.log(loginCred);

              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
          className="w-full border border-theme-1 rounded-sm bg-slate-200 p-2"
          type="password"
          placeholder="Your Password"
          required
        />
        <motion.button
          whileTap={{ scale: 1.2 }}
          type="submit"
          className="w-20 h-[45px] transition-all duration-500 bg-theme-1 hover:border-2 hover:border-theme-3 p-2 text-white hover:scale-125 rounded  "
        >
          Log in
        </motion.button>
        {faliedLoginStatus && (
          <p className="font-medium text-red-600">
            Wrong E-mail & Passowrd.. Try Again.... 😵
          </p>
        )}
        {loading && (
          <BackDrop>
            <div className="p-6 bg-theme-1 text-white text-3xl font-medium flex flex-col items-center justify-center">
              <h1>Wait...</h1>
              <h2>You are beign logged in.....</h2>
            </div>
          </BackDrop>
        )}
        <h2 className="self-start">
          Wanna be an <span className="font-medium text-theme-1">Admin</span>
        </h2>
        <h2 className="self-start">Contact: fsrafisocial18@gmail.com</h2>
      </form>
    </div>
  );
};

export default LoginForm;
