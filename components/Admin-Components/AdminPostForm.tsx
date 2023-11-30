"use client";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import PoemSectionInput from "./PoemSectionInput";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { storage, poemRef, db } from "@/app/Firebase/firebase";
import {
  addDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

interface PoemDataType {
  title: string;
  author: string;
  profilePhotoLink: string;
  bgPhotoLink: string;
  timeStamp: Date | null;
}

interface PhotoDataType {
  profilePhoto: File | null; // Change Blob to File for file input
  backgroundPhoto: File | null; // Change Blob to File for file input
}

const AdminPostForm: React.FC = () => {
  const [componentCount, setComponentCount] = useState<number>(1);
  const [poemData, setPoemData] = useState<PoemDataType>({
    title: "",
    author: "",
    profilePhotoLink: "",
    bgPhotoLink: "",
    timeStamp: null,
  });
  const [poemTextData , setPoemTextData] = useState<object[]>([])
  const [photo, setPhoto] = useState<PhotoDataType>({
    profilePhoto: null,
    backgroundPhoto: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPoemData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    fileType: "profile" | "background"
  ) => {
    const file = e.target.files?.[0];
    setPhoto((prevData) => ({
      ...prevData,
      [`${fileType}Photo`]: file,
    }));
  };
  const handleStoryText = ({name, value, index}: {
    name: string;
    value:string;
    index:number;
  }) => {
    setPoemTextData([...poemTextData, {
      [name]: value,
      index: index,
    }])
  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();    
    try {
      const docData = await addDoc(poemRef, {
        ...poemData,
        timeStamp: serverTimestamp(),
        poemTextArr: JSON.stringify(poemTextData)
      });

      const [profileSnapshot, backgroundSnapshot] = await Promise.all([
        uploadBytes(ref(storage, `Profile_Pics/${docData.id}.png`), photo.profilePhoto!),
        uploadBytes(ref(storage, `Background_Images/${docData.id}.png`), photo.backgroundPhoto! ),
      ]);

      const profilePhotoLink = await getDownloadURL(profileSnapshot.ref);
      const bgPhotoLink = await getDownloadURL(backgroundSnapshot.ref);

      setPoemData((prev) => ({
        ...prev,
        profilePhotoLink,
        bgPhotoLink,
      }));

      await updateDoc(doc(db, "poems", `${docData.id}`), {
        bgPhotoLink,
        profilePhotoLink,
      });

      console.log("Document written and updated successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddComponent = () => {
    setComponentCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="bg-theme-4 p-4 w-full h-auto">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="w-full h-full flex flex-col items-center justify-center gap-4"
        >
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
            className="p-2 rounded-sm w-[300px]"
            placeholder="Poem Title"
            name="title"
            onChange={handleInputChange}
          />
          <label
            className="w-[300px] bg-theme-1 hover:border-2 hover:border-slate-700 hover:scale-110 transition-all hover:cursor-pointer rounded p-2 text-white font-medium"
            htmlFor="author"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            required
            className="p-2 rounded-sm w-[300px]"
            placeholder="Author"
            name="author"
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
            className="p-2 w-[300px] rounded-sm bg-white active:bg-theme-1"
            onChange={(e) => handleFileChange(e, "profile")}
          />
          <label
            className="w-[300px] bg-theme-1 hover:border-2 hover:border-slate-700 hover:scale-110 transition-all hover:cursor-pointer rounded p-2 text-white font-medium"
            htmlFor="background"
          >
            Background pic
          </label>
          <input
            type="file"
            required
            id="background"
            className="p-2 w-[300px] rounded-sm bg-white active:bg-theme-1"
            onChange={(e) => handleFileChange(e, "background")}
          />
          {[...Array(componentCount)].map((_, index) => (
            <PoemSectionInput
              dataHandle={handleStoryText}
              key={index}
              index={index}
              name={`poem-text-${index + 1}`}
            />
          ))}
          <div className="flex gap-6 mb-4">
            <button
              onClick={handleAddComponent}
              className="p-2 bg-theme-1 w-[300px] transition-all text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4"
              type="button"
            >
              Add Section
            </button>
            <button
              type="submit"
              className="p-2 bg-theme-1 w-[300px] transition-all text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminPostForm;
