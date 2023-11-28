"use client";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import PoemSectionInput from "./PoemSectionInput";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { storage, poemRef, db } from "@/app/Firebase/firebase";
import { addDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";

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
  const [photo, setPhoto] = useState<PhotoDataType>({
    profilePhoto: null,
    backgroundPhoto: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPoemData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    fileType: "profile" | "background"
  ) => {
    const file = e.target.files?.[0] || null;
    setPhoto((prevData) => ({
      ...prevData,
      [`${fileType}Photo`]: file ? URL.createObjectURL(file) : "",
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const profilephoto = photo.profilePhoto;
    const bgPhoto = photo.backgroundPhoto;

    await addDoc(poemRef, { ...poemData, timeStamp: serverTimestamp() }).then(
      (docData) => {
        console.log("Document written: " + docData.id);
        if (profilephoto) {
          uploadBytes(
            ref(storage, `/Profile_Pics/${docData.id}.png`),
            profilephoto
          )
            .then((snapshot) => {
              console.log("Successful");
              getDownloadURL(snapshot.ref).then((item) => {
                setPoemData((prev) => {
                  return {
                    ...prev,
                    profilePhotoLink: `${item}`,
                  };
                });
              });
            })
            .catch((error) => {
              console.error(error);
            });
        }
        if (bgPhoto) {
          uploadBytes(
            ref(storage, `/Background_Images/${docData.id}.png`),
            bgPhoto
          )
            .then((snapshot) => {
              console.log("successfull");
              getDownloadURL(snapshot.ref).then((item) => {
                setPoemData((prev) => {
                  return {
                    ...prev,
                    bgPhotoLink: `${item}`,
                  };
                });
                updateDoc(doc(db, "poems", `${docData.id}`), {
                  bgPhotoLink: poemData.bgPhotoLink,
                  profilePhotoLink: poemData.profilePhotoLink,
                })
                  .then(() => {
                    console.log("Final is sucecssfull");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    );

    // Add additional logic to handle other form data submission
  };

  const handleAddComponent = () => {
    setComponentCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-theme-3 w-full flex flex-col items-center justify-center gap-2"
      >
        <div className="flex items-center justify-center w-full gap-2 p-2">
          <input
            type="text"
            required
            className="p-2 rounded-sm w-auto"
            placeholder="Poem Title"
            name="title"
            onChange={handleInputChange}
          />
          <input
            type="text"
            required
            className="p-2 rounded-sm w-auto"
            placeholder="Author"
            name="author"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-center w-full gap-2 p-2">
          <div className="flex flex-col gap-2 p-2 justify-center items-center">
            <label
              className="bg-theme-1 hover:border-2 hover:border-slate-700 hover:scale-110 transition-all hover:cursor-pointer rounded p-2 text-white font-medium"
              htmlFor="profile"
            >
              Profile Pic
            </label>
            <input
              type="file"
              required
              id="profile"
              className="p-2 rounded-sm bg-white active:bg-theme-1"
              onChange={(e) => handleFileChange(e, "profile")}
            />
          </div>
          <div className="flex flex-col gap-2 p-2 justify-center items-center">
            <label
              className="bg-theme-1 hover:border-2 hover:border-slate-700 hover:scale-110 transition-all hover:cursor-pointer rounded p-2 text-white font-medium"
              htmlFor="background"
            >
              Background pic
            </label>
            <input
              type="file"
              required
              id="background"
              className="p-2 rounded-sm bg-white active:bg-theme-1"
              onChange={(e) => handleFileChange(e, "background")}
            />
          </div>
        </div>
        {[...Array(componentCount)].map((_, index) => (
          <PoemSectionInput
            dataHandle={handleInputChange}
            key={index}
            name={`poem-text-${index + 1}`}
          />
        ))}
        <div className="flex gap-6 mb-4">
          <button
            onClick={handleAddComponent}
            className="p-2 bg-theme-1 transition-all text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4"
            type="button"
          >
            Add Section
          </button>
          <button
            type="submit"
            className="p-2 bg-theme-1 transition-all text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminPostForm;
