import React from "react";
import PoemCard from "./PoemCard";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "@/app/Firebase/firebase";

// Define an interface for your poem data
interface PoemData {
  author: string;
  bgPhotoLink: string;
  profilePhotoLink: string;
  title: string;
  id: string;
  // Add other fields if necessary
}

const getData = async (): Promise<PoemData[]> => {
  let data: PoemData[] = [];
  const querySnapshot = await getDocs(collection(db, "poems"));
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id } as PoemData);
  });
  return data;
};

const ShowAllPoemCards: React.FC = async () => {
  const poemData = await getData();

  return (
    <div className="h-auto w-full poem-show-grid">
      {poemData ? poemData.map((item) => {
        return (
          <PoemCard
            author={item.author}
            imageUrl={item.bgPhotoLink}
            profilePic={item.profilePhotoLink}
            title={item.title}
            key={item.id}
          />
        );
      }) : (
        <h1 className="text-xl font-bold">Sorry Santo is too lazy to write poems 🙄</h1>
      )}
    </div>
  );
};

export default ShowAllPoemCards;