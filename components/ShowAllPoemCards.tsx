"use client";
import PoemCard from "./PoemCard";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/app/Firebase/firebase";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Loading from "./Loading";
import { onAuthStateChanged } from "firebase/auth";

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

const ShowAllPoemCards: React.FC = () => {
  const [poemData, setPoemData] = useState<PoemData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setPoemData(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate, max-age=0"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-auto w-full p-2 poem-show-grid">
          {error ? (
            <p>It seem's you have a bad network 😐</p>
          ) : poemData ? (
            poemData.map((item) => {
              return (
                <>
                  <motion.div
                    className="rounded-md lenear-animation p-2 transition-transform poem-card h-auto"
                    initial={{
                      translateX: "-100%",
                      opacity: 0,
                      animationTimingFunction: "easeIn",
                      backgroundBlendMode: "darken",
                    }}
                    whileInView={{
                      translateX: 0,
                      opacity: 1,
                      backgroundBlendMode: "normal",
                    }}
                    whileTap={{ scale: 1.4 }}
                    key={item.id}
                  >
                    <Link
                      href={`/all-poems/${item.id}`}
                      className="h-full w-full"
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
                  </motion.div>
                </>
              );
            })
          ) : (
            <h1 className="text-xl font-bold">
              Sorry Santo is too lazy to write poems 🙄
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export default ShowAllPoemCards;
