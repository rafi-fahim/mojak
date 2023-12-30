"use client";
import { auth, db } from "@/app/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
    closeMenu?: any;
}

const UserOrAdminLink:React.FC<Props> = (props) => {
  const [user, setUser] = useState<object>();
  const [admin, setAdmin] = useState<boolean>(false);
  const checkUser = async (uid: string) => {
    const getUser = await getDoc(doc(db, "admin", `${uid}`));
    if (getUser.exists()) {
      setAdmin(true);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      checkUser(user.uid)
      setUser(user);
    } else {
    }
  });

  return (
    <>
    {
        user ? admin ? (
      <Link
        onClick={props?.closeMenu}
        className="z-30 pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
        href="/admin"
      >
        Admin 🕵️‍♀️
      </Link>
        ) : (
            <Link
            onClick={props?.closeMenu}
              className="z-30 pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
              href="/profile"
            >
              Profile 🕵️‍♀️
            </Link>
        ) : (
            <Link
            onClick={props?.closeMenu}
              className="z-30 pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
              href="/user-or-admin"
            >
              Sign-In 🕵️‍♀️
            </Link>
        )
    }
    </>
  );
};

export default UserOrAdminLink;
