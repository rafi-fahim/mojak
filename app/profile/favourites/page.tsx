"use client";
import { auth, db } from "@/app/Firebase/firebase";
import CollectionCard from "@/components/CollectionCard";
import { User, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import React, { useState } from "react";

interface FetchUser {
  email: string;
  username: string;
  favorites: string[];
}

interface CollCardType {
  title: string;
  ratingSum: number;
  picUrl: string;
  bgPhotoUrl: string;
  id: string;
}

const fetchUser = async (uid: string) => {
  const res = await getDoc(doc(db, "users", `${uid}`));
  return res.data() as FetchUser;
};

const fetchFavourites = async (uid: string, setState: any) => {
  const { favorites } = await fetchUser(uid);
  let favourites: CollCardType[] = [];

  if (favorites) {
    for (const id of favorites) {
      try {
        const res = await getDoc(doc(db, "poemCollection", `${id}`));
        const data = res.data();
        if (
          data &&
          "title" in data &&
          "ratingSum" in data &&
          "picUrl" in data
        ) {
          const collCard: CollCardType = {
            title: data.title,
            ratingSum: data.ratingSum,
            picUrl: data.picUrl,
            id: data.id,
            bgPhotoUrl: data.bgPhotoUrl,
            // Add other properties as needed
          };
          favourites.push(collCard);
        } else {
          console.error(`Incomplete data for poem with ID ${id}`);
        }
      } catch (error) {
        console.error(`Error fetching poem with ID ${id}:`, error);
      }
    }
  }

  setState(favourites);
};

const page = () => {
  const [user, setUser] = useState<User>();
  const [favouriteColl, setFavouriteColl] = useState<CollCardType[]>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      fetchFavourites(user.uid, setFavouriteColl);
    }
  });

  if (user) {
    return (
      <>
        <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-start bg-theme-4">
          <h1 className="font-bold text-3xl justify-start text-center bg-theme-4 p-4 rounded-sm">
            ⭐ ...Your Favoutites...⭐
          </h1>
          <div className="poem-show-grid w-full h-full">
              {favouriteColl ? (
                favouriteColl.map((item) => {
                  return (
                    <CollectionCard
                      picUrl={item.bgPhotoUrl}
                      title={item.title}
                      ratingSum={item.ratingSum}
                      id={item.id}
                      key={item.id}
                    />
                  );
                })
              ) : (
                <>
                  <p className="text-3xl font-bold text-center">
                    You don't have any Favourite Poems
                  </p>
                  <p className="text-3xl font-bold text-center">Like seriously?</p>
                </>
              )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full text-center min-h-screen flex items-center justify-center text-4xl font-bold">
          <h1>Login First then come here</h1>
        </div>
      </>
    );
  }
};

export default page;
