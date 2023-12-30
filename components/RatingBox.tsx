"use client";
import { auth, db } from "@/app/Firebase/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import BackDrop from "./BackDrop";
import { useRouter } from "next/navigation";

interface CommentBox {
  comment: string;
  reviewCount: number;
}

interface DataType {
  username: string;
  profilePhotoUrl: string;
  comment: string;
  ratingCount: number;
  userId: string;
  id: string;
}

const getReviews = async (collRef: string, poemRef: string, userId: string) => {
  let data: DataType[] = [];
  const q = query(
    collection(
      db,
      "poemCollection",
      `${collRef}`,
      "allPoems",
      `${poemRef}`,
      "ratings"
    ),
    where("userId", "==", userId)
  );
  const snapshot = await getDocs(q);
  snapshot.forEach((docs) => {
    data.push({ ...docs.data(), id: docs.id } as DataType);
  });
  return data as DataType[];
};

const RatingBox = ({ collId, poemId }: { collId: string; poemId: string }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [checkUserLoading, setUserLoading] = useState<boolean>(true);
  const [notReviewed, setNotReviewed] = useState<boolean>(false);
  const router = useRouter()

  const checkReview = async (user: User) => {
    const review = await getReviews(collId, poemId, user.uid);
    if (review.length === 0) {
      setNotReviewed(false);
    } else if (review.length > 0) {
      setNotReviewed(true);
    }
    setUserLoading(false);
  };

  const [comment, setComment] = useState<CommentBox>({
    comment: "",
    reviewCount: 0,
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      checkReview(user);
    }
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(
      collection(
        db,
        "poemCollection",
        `${collId}`,
        "allPoems",
        `${poemId}`,
        "ratings"
      ),
      {
        username: user?.displayName,
        profilePhotoUrl: user?.photoURL,
        userId: user?.uid,
        comment: comment.comment,
      }
    ).then((res) => {
      console.log(comment);
      setNotReviewed(true);
      setLoading(false);
      router.replace(`/all-collections/${collId}/${poemId}`)
    });
  };

  return (
    <>
      {notReviewed === false && (
        <>
          <h1 className="text-5xl text-center max-sm:text-2xl font-bold">
            Your authentic review ⭐
          </h1>
          <form
            className="p-4 bg-theme-4 rounded-sm border border-theme-1 flex items-center gap-4 justify-center flex-col"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 items-center justify-start">
              <Image
                src={user?.photoURL!}
                alt="Profile Photo"
                height={50}
                width={50}
                className="rounded-full"
              />
              <h1 className="text-2xl font-medium">
                Name: {user?.displayName}
              </h1>
            </div>

            <textarea
              id="comment"
              required
              className="border border-theme-1 p-2 rounded-sm w-[300px]"
              placeholder="Your truthful review ⭐"
              name="title"
              onChange={(e) => {
                setComment((prev) => {
                  return {
                    ...prev,
                    comment: e.target.value,
                  };
                });
              }}
            />
            <button
              type="submit"
              className="pr-4 pl-4 pt-2 pb-2 hover:rounded-3xl hover:bg-theme-4 hover:text-black transition-all border-2 hover:border-theme-1 bg-theme-1 text-white text-xl font-medium "
            >
              Submit
            </button>
          </form>
          {loading && (
            <BackDrop>
              <div className="flex items-center justify-center p-6 bg-theme-1 ">
                <h1 className="text-2xl font-light text-white">
                  Wait.... Submitting your review....
                </h1>
              </div>
            </BackDrop>
          )}
        </>
      )}
    </>
  );
};

export default RatingBox;
