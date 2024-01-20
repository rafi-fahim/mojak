"use client";
import { db } from "@/app/Firebase/firebase";
import Loading from "@/components/Loading";
import PoemCard from "@/components/PoemCard";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { motion, spring } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface poemDataType {
  author: string;
  bgPhotoLink: string;
  profilePhotoLink: string;
  timeStamp: string;
  title: string;
  poemTextArr?: PoemText[];
  work: string;
  bio: string;
  fontFamily: string;
  id: string;
}
interface PoemText {
  "poem-text": "string";
  index: number;
}

const getData = async (id: string): Promise<poemDataType[]> => {
  let data: any[] = [];
  const res = await getDocs(
    collection(db, "poemCollection", `${id}`, "allPoems")
  );
  res.forEach((docu) => {
    data.push({ ...docu.data(), id: docu.id } as poemDataType);
  });
  return data as poemDataType[];
};

const getCollection = async (id: string) => {
  const res = await getDoc(doc(db, "poemCollection", `${id}`));
  return { ...res.data() };
};

const ShowCollectionPage = ({ collId }: { collId: string }) => {
  const [poems, setPoems] = useState<poemDataType[]>();
  const [loading, setloading] = useState<boolean>(true);
  const [collData, setCollData] = useState<any>({});

  async function fetchData() {
    const data = await getData(collId);
    setPoems(data);
    const collData = await getCollection(collId);
    setCollData(collData);
  }

  useEffect(() => {
    fetchData();
    setloading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full h-auto flex items-center justify-center flex-col gap-4">
            <h1 className="rounded-sm p-4 bg-theme-2 mt-2 text-white text-3xl font-cabin-sketch">
              {collData.title}
            </h1>
            <div className="h-auto min-h-screen w-full poem-show-grid">
              {poems?.map((item) => {
                return (
                  <>
                    <motion.div
                      className="rounded lenear-animation p-2 transition-transform poem-card h-auto"
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
                      transition={spring}
                      whileTap={{ scale: 1.4 }}
                      key={item.id}
                    >
                      <Link
                        href={`/all-collections/${collId}/${item.id}`}
                        className="h-full w-full"
                      >
                        {/* Poemcard css in global css */}
                        <PoemCard
                          author={item.author}
                          imageUrl={item.bgPhotoLink}
                          profilePic={item.profilePhotoLink}
                          title={item.title}
                          collRef={collId}
                          poemRef={item.id}
                          key={item.id}
                        />
                      </Link>
                    </motion.div>
                  </>
                );
              })}
              <Link
                href={`/admin/${collId}/create-poem`}
                className="bg-theme-2 rounded transition-all hover:bg-theme-4 hover:text-black text-white hover:rounded-2xl p-4"
              >
                Add Poem +
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowCollectionPage;
