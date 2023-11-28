"use client"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/Firebase/firebase";
import { useState } from "react";

interface Types {
  setLogin: any;
}

const LoginForm = ({setLogin} : Types) => {
  const [ loginCred, setLoginCred ] = useState({
    email: "",
    password: ""
  })

  const handleLogin = (e:any) => {
    e.preventDefault()
    const email = loginCred.email
    const password = loginCred.password
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      setLogin()
      alert("You are successfully logged in")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
  }
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center">
        <form onSubmit={(e) =>  handleLogin(e)} className="rounded flex flex-col w-1/3 aspect-square max-sm:w-11/12 items-center gap-4 justify-center border-theme-1 border-2 p-4 bg-white" >
            <h1 className="font-extrabold font-kdam-pro text-3xl">Enter your Credentials</h1>
            <input onChange={(e) => { setLoginCred(prev => { 
              return {
                ...prev,
                email: e.target.value,
              }
            })}} className="w-full bg-slate-200 p-2" type="text" placeholder="Your Email" required />
            <input onChange={(e) => { setLoginCred(prev => { 
              console.log(loginCred);
              
              return {
                ...prev,
                password: e.target.value,
              }
            })}} className="w-full bg-slate-200 p-2" type="text" placeholder="Your Password" required />
            <button type="submit" className="w-20 bg-theme-1 hover:border-2 hover:border-theme-3 p-2 text-white hover:scale-125 rounded  ">Log in</button>
        </form>
    </div>
  )
}

export default LoginForm