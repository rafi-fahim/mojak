"use client";
import { auth, db, storage } from "@/app/Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import BackDrop from "./BackDrop";

interface SignUpObj {
  username: string;
  email: string;
  password: string;
}

interface photo {
  profilePhoto?: File | null;
}

const SignUpForm: React.FC = () => {
  const [userData, setUserData] = useState<SignUpObj>({
    username: "",
    email: "",
    password: "",
  });
  const [profilePhoto, setProfilePhoto] = useState<File | null>();
  const [signUpState, setSignUpState] = useState<boolean>(false);

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const hanldeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfilePhoto(e.target.files?.[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignUpState(true);
    const userRes = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
    await setDoc(doc(db, "users", `${userRes.user.uid}`), {
      ...userData,
      password: "",
    });
    if (profilePhoto) {
      const photoSnapShot = await uploadBytes(
        ref(storage, `Profile_Photo/${userRes.user.uid}.png`),
        profilePhoto!
      );
      const downloadUrl = await getDownloadURL(photoSnapShot.ref);
      await updateProfile(auth.currentUser!, {
        displayName: userData.username,
        photoURL: downloadUrl,
      }).then(() => {
        setSignUpState(false);
        router.replace("/profile");
      });
    } else {
      await updateProfile(auth.currentUser!, {
        displayName: userData.username,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/fsr-story.appspot.com/o/Assets%2Fdummy_profile_page.jpg?alt=media&token=c234cf7f-207b-4315-a7b3-fd5f55b8cf19",
      }).then(() => {
        setSignUpState(false);
        router.replace("/profile");
      }).catch(err => {
        setSignUpState(false);
        alert(err);
      })
    }
  };
  const bg = {
    backgroundImage: `url(${profilePhoto})`,
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-theme-1 text-white p-4 h-auto login-form-width flex items-center justify-center flex-col gap-2 border-theme-3 border rounded-sm"
    >
      {signUpState && (
        <BackDrop>
          <div className="bg-theme-3 text-xl p-10">
            <h1>Signing up....</h1>
            <p>Please wait.....</p>
          </div>
        </BackDrop>
      )}
      <h1 className="font-bold text-2xl">Sign Up</h1>
      <label
        htmlFor="profilePhoto"
        className="uppercase text-center text-theme-4 p-2 bg-theme-3 w-full rounded-md font-extrabold"
      >
        Profile Photo
      </label>
      <input
        type="file"
        name="profilePhoto"
        id="profilePhoto"
        style={bg}
        className={`p-2 text-theme-4 hover:cursor-pointer bg-theme-2 h-[70px] rounded-full w-[70px] bg-cover bg-center bg-no-repeat`}
        onChange={hanldeFileChange}
      />
      <label
        htmlFor="username"
        className="uppercase text-center text-theme-4 p-2 bg-theme-3 w-full rounded-md font-extrabold"
      >
        username
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="p-2 text-theme-4 w-full bg-theme-2 rounded-md"
        required
        placeholder="Your Name"
        onChange={handleInputChange}
      />
      <label
        htmlFor="email"
        className="uppercase text-center text-theme-4 p-2 bg-theme-3 2 w-full rounded font-extrabold"
      >
        email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="p-2 text-theme-4 w-full bg-theme-2 rounded-md"
        required
        placeholder="Your E-mail"
        onChange={handleInputChange}
      />
      <label
        htmlFor="password"
        className="uppercase text-center text-theme-4 p-2 bg-theme-3 w-full rounded-md font-extrabold"
      >
        password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="p-2 text-theme-4 w-full bg-theme-2 rounded-md"
        required
        placeholder="Your Password"
        onChange={handleInputChange}
      />

      <div className="self-start">
        Already signed up?{" "}
        <Link href="/sign-in" className="text-red-500 font-bold hover:underline">
          Log in
        </Link>
      </div>
      <button
        type="submit"
        className="rounded-sm bg-theme-4 text-theme-1 transition-all font-bold text-2xl pl-4 pr-4 pt-1 pb-1 hover:rounded-3xl"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignUpForm;
