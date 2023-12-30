"use client";
import { User, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import Link from "next/link";

const page = () => {
  const [user, setUser] = useState<User>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  return (
    <div className="w-full min-h-screen gap-4 p-4 flex flex-col items-center justify-center rounded-sm bg-theme-4">
        <h1 className="text-3xl font-bold">Welcome back {user?.displayName}</h1>
      <Image
        src={user?.photoURL!}
        alt="Profile Pic"
        height={100}
        width={100}
        className="rounded-full border border-theme-1"
      />
      <Link
        className="h-36 w-36 bg-theme-3 hover:bg-theme-1 font-medium text-2xl text-white transition-all duration-1000 flex text-center items-center justify-center p-4 rounded-sm hover:rounded-full"
        href={"/profile/favourites"}
      >
        Your Favourites
      </Link>
    </div>
  );
};

export default page;
