import React from "react";
import PoemCard from "./PoemCard";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "@/app/Firebase/firebase";
import Link from "next/link";
import Head from "next/head";

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
    <>
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate, max-age=0"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
      </Head>

      <div className="h-auto w-full p-2 poem-show-grid">
        {poemData ? (
          poemData.map((item) => {
            return (
              <>
                <Link
                  href={`/all-poems/${item.id}`}
                  className="rounded-md hover:scale-110 transition-transform poem-card h-auto"
                >
                  {/* Poemcard css in global css */}
                  <PoemCard
                    author={item.author}
                    imageUrl={item.bgPhotoLink}
                    profilePic={item.profilePhotoLink}
                    title={item.title}
                    key={item.id}
                  />
                </Link>
              </>
            );
          })
        ) : (
          <h1 className="text-xl font-bold">
            Sorry Santo is too lazy to write poems 🙄
          </h1>
        )}
      </div>
    </>
  );
};

export default ShowAllPoemCards;
