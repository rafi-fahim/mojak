"use client";
import { auth, db, storage } from "@/app/Firebase/firebase";
import BackDrop from "@/components/BackDrop";
import Loading from "@/components/Loading";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface CollData {
  title: string;
  ratingSum: number;
  bgPhotoUrl: string;
}

const page = () => {
  const [checkLogin, setCheckLogin] = useState<boolean>(false);
  const [collData, setCollData] = useState<CollData>({
    title: "",
    bgPhotoUrl: "",
    ratingSum: 0,
  });
  const [photo, setPhoto] = useState<File | null>();
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<object>();

  const router = useRouter();

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

  const trueLoginState = () => setCheckLogin(true);
  const falseLoginState = () => setCheckLogin(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCollData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPhoto(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUploadLoading(true);
    const docAdd = await addDoc(collection(db, "poemCollection"), collData);
    const photoSnap = await uploadBytes(
      ref(storage, `Collection_Image/${docAdd.id}.png`),
      photo!
    );
    await updateDoc(doc(db, "poemCollection", `${docAdd.id}`), {
      id: docAdd.id
    })
    const photLink = await getDownloadURL(photoSnap.ref);
    await updateDoc(doc(db, "poemCollection", `${docAdd.id}`), {
      bgPhotoUrl: photLink,
    }).then(() => {
      setUploadLoading(false);
      router.replace(`/admin/${docAdd.id}`);
    });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {loading ? (
        <Loading />
      ) : checkLogin ? (
        <form
          className="flex flex-col items-center p-4 justify-center gap-4 w-full h-full"
          onSubmit={handleSubmit}
        >
          <h1 className="bg-theme-1 text-white font-medium text-xl p-4">
            Make a Collection
          </h1>
          <label
            className="w-[300px] bg-theme-1 hover:border-2 hover:border-slate-700 hover:scale-110 transition-all hover:cursor-pointer rounded p-2 text-white font-medium"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            required
            className="border border-theme-1 p-2 rounded-sm w-[300px]"
            placeholder="Poem Title"
            name="title"
            onChange={handleInputChange}
          />
          <label
            className="w-[300px] bg-theme-1 hover:border-2 hover:border-slate-700 hover:scale-110 transition-all hover:cursor-pointer rounded p-2 text-white font-medium"
            htmlFor="profile"
          >
            Profile Pic
          </label>
          <input
            type="file"
            required
            id="profile"
            className="p-2 w-[300px] rounded-sm bg-white border border-theme-1"
            onChange={(e) => handleFileChange(e)}
          />
          <button
            type="submit"
            className="p-2 bg-theme-1 w-[300px] transition-all text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4"
          >
            Submit
          </button>
        </form>
      ) : (
        <p>Be an Admin First</p>
      )}
      {uploadLoading && (
        <BackDrop>
          <div className="p-4 bg-theme-4 text-3xl font-medium flex items-center justify-center">
            <h1>Wait.. Creating a Collection</h1>
          </div>
        </BackDrop>
      )}
    </div>
  );
};

export default page;
