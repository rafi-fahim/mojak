"use client";
import { auth } from "../Firebase/firebase";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import LoginForm from "@/components/Admin-Components/LoginForm";
import AdminPostForm from "@/components/Admin-Components/AdminPostForm";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";

const page = () => {
  const [checkLogin, setCheckLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<object>();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUser(user);
      trueLoginState();
    } else {
      falseLoginState();
    }
    setLoading(false);
  });
  const trueLoginState = () => setCheckLogin(true);
  const falseLoginState = () => setCheckLogin(false);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-theme-2">
      <h1 className="text-4xl uppercase pl-2 pr-2 mt-4 text-center font-light mb-4 bg-theme-4 border-2 border-theme-1 rounded-[2px] max-sm:w-5/6 w-1/4 ">
        Admin page
      </h1>
      {loading ? (
        <Loading />
      ) : checkLogin ? (
        <>
          <div className="w-full flex items-end justify-end p-4">
            <motion.button
              whileTap={{ scale: 1.3, rotate: 360, translateY: "-100px" }}
              className="font-cabin-sketch p-2 text-xl font-bold hover:scale-110 hover:border-2 hover:border-theme-3 rounded-sm transition-transform bg-theme-4"
              onClick={() => signOut(auth)}
            >
              Sign out
            </motion.button>
          </div>
          <AdminPostForm />
        </>
      ) : (
        <LoginForm setLogin={trueLoginState} />
      )}
    </div>
  );
};

export default page;
