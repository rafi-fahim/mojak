"use client"
import { auth } from "../Firebase/firebase";
import { useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import LoginForm from "@/components/Admin-Components/LoginForm";
import AdminPostForm from "@/components/Admin-Components/AdminPostForm";

const page = () => {
  const [checkLogin, setCheckLogin] = useState<boolean>(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      trueLoginState()
      // ...
    } else {
      falseLoginState()
    }
  });
  const trueLoginState = () => setCheckLogin(true)
  const falseLoginState = () => setCheckLogin(false)

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-theme-2">
      <h1 className="text-6xl uppercase pl-2 pr-2 text-center font-medium font-road-rage mb-4 bg-theme-4 border-2 border-theme-1 rounded-[2px] max-sm:w-5/6 w-1/4 ">
        Admin page
      </h1>
      {checkLogin ? <AdminPostForm /> : <LoginForm setLogin={trueLoginState} />}
    </div>
  );
};

export default page;
