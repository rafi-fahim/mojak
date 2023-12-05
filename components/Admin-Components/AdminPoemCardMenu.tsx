"use client";
import { db, storage } from "@/app/Firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React, { useState } from "react";
import BackDrop from "../BackDrop";
import AdminConfirmModal from "./AdminConfirmModal";

const AdminPoemCardMenu = (params: { poemId: string; closeAdminMenu: any }) => {
  const [showDone, setShowDone] = useState<boolean>(false);
  const [deleteLoading , setDeleteLoding] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = () => setModal(false);
  const closeShowDone = () => setShowDone(false);
  const handleDeletePoem = async () => {
    setDeleteLoding(true)
    await deleteDoc(doc(db, "poems", `${params.poemId}`));
    await deleteObject(ref(storage, `/Background_Images/${params.poemId}.png`));
    await deleteObject(ref(storage, `/Profile_Pics/${params.poemId}.png`)).then(
      () => {
        setShowDone(true);
        setDeleteLoding(false)
      }
    );
  };

  return (
    <div className="absolutes left-4 flex- flex-col bg-white items-center justify-center top-4">
      <button
        className="w-full p-2 border hover:bg-theme-3"
        onClick={() => setModal(true)}
      >
        Delete Poem
      </button>
      <button
        className="w-full p-2 border hover:bg-theme-3"
        onClick={() => params.closeAdminMenu()}
      >Close Menu</button>
      {modal && (
        <BackDrop handleClose={closeModal}>
          <AdminConfirmModal
            handleDelete={handleDeletePoem}
            handleModalClose={closeModal}
          />
        </BackDrop>
      )}
      {deleteLoading && (
        <BackDrop>
          <div
            className="flex flex-col items-center p-4 text-xl text-center bg-theme-1 text-white justify-center"
          >
            <h1>Wait a while 🤗</h1>
            <p>Your Poem is beign Deleted......🗑</p>
          </div>
        </BackDrop>
      )}
      {showDone && <ShowDone closeComponent={closeShowDone} />}
    </div>
  );
};

export default AdminPoemCardMenu;

const ShowDone = (params: { closeComponent: any }) => {
  return (
    <BackDrop handleClose={params.closeComponent}>
      <div className="bg-theme-1 text-white p-4 flex flex-col items-center gap-4 text-center text-3xl">
        <h1>Deleted successfully...</h1>
        <button
          className="p-2 bg-theme-3 text-black hover:text-white hover:bg-theme-2 rounded-lg"
          onClick={params.closeComponent}
        >
          Close
        </button>
      </div>
    </BackDrop>
  );
};
