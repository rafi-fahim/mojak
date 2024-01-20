"use client";

import { auth, db } from "@/app/Firebase/firebase";
import AdminPostForm from "@/components/Admin-Components/AdminPostForm";
import CreateCollectionPage from "@/components/Admin-Components/CreateCollectionPage";
import ShowCollectionPage from "@/components/Admin-Components/ShowCollectionPage";
import Loading from "@/components/Loading";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";

const page = ({ params }: { params: { "admin-collection": string[] } }) => {
  const [checkLogin, setCheckLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<object>();

  const trueLoginState = () => setCheckLogin(true);
  const falseLoginState = () => setCheckLogin(false);

  const checkUser = async (uid: string) => {
    const getUser = await getDoc(doc(db, "admin", `${uid}`));
    if (getUser.exists()) {
      trueLoginState();
    } else {
      falseLoginState();
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUser(user);
      checkUser(user.uid);
    }
    setLoading(false);
  });
  if (loading) {
    <Loading />;
  } else if (checkLogin) {
    if (
      params["admin-collection"].length === 1 &&
      params["admin-collection"][0] !== "create-collection"
    ) {
      return (
        <>
          <ShowCollectionPage collId={params["admin-collection"][0]} />
        </>
      );
    } else if (
      params["admin-collection"].length === 2 &&
      params["admin-collection"][1] === "create-poem"
    ) {
      return <AdminPostForm id={params["admin-collection"][0]} />;
    } else if (params["admin-collection"][0] === "create-collection") {
      return <CreateCollectionPage />;
    }
  } else {
    return (
      <div className="h-screen w-full flex justify-center items-center text-center font-medium text-3xl">
        <h1>Be an Admin First</h1>
      </div>
    );
  }
};

export default page;
