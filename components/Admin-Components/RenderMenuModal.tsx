"use client";
import { auth } from "@/app/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import AdminPoemCardMenu from "./AdminPoemCardMenu";

const RenderMenuModal = (params: { id: string }) => {
  const [user, setUser] = useState<object>();
  const [adminMenu, setAdminMenu] = useState<boolean>(false);
  const closeAdminMenu = () => setAdminMenu(false);
  const openAdminMenu = () => setAdminMenu(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });
  return (
    <>
      {user && <MenuSvg openMenu={openAdminMenu} key="ok" />}
      {adminMenu && (
        <AdminPoemCardMenu
          closeAdminMenu={closeAdminMenu}
          poemId={params.id}
          key={params.id}
        />
      )}
    </>
  );
};

export default RenderMenuModal;
const MenuSvg = ({ openMenu }: { openMenu: any }) => {
  return (
    <svg
      onClick={openMenu}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      className="hover:scale-125"
      width={"30px"}
      height={"30px"}
      viewBox="0 0 448 512"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};
