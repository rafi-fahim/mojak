import { db } from "@/app/Firebase/firebase";
import AuthorInfoCard from "@/components/AuthorInfoCard";
import { doc, getDoc } from "firebase/firestore";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

interface PoemText {
  "poem-text": "string";
  index: number; 
}

interface poemDataType {
  author: string;
  bgPhotoLink: string;
  profilePhotoLink: string;
  timeStamp: Date;
  title: string;
  poemTextArr?: PoemText[];
  work: string;
  bio: string;
}

const getPoemData = async (id: string) => {
  const poemData = await getDoc(doc(db, "poems", `${id}`));
  return poemData.data() as poemDataType;
};

const page = async ({ params }: { params: { id: string } }) => {
  const poemData = await getPoemData(params.id);

  const poemDivBgImage = {
    backgroundImage:` linear-gradient(to bottom, #1a1a1a60 , #1a1a1a9a) , url(${poemData.bgPhotoLink})`,
  } 
  console.log(poemData);
  

  return (
    <>
      <Head>
        <meta
          name={`Name: ${poemData.author}`}
          content={`Author: ${poemData.author}`}
        />
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate, max-age=0"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
      </Head>
      <div className="w-full h-auto flex justify-center flex-col items-center">
        <AuthorInfoCard
          authorName={poemData.author}
          photoURL={poemData.profilePhotoLink}
          bio={poemData.bio}
          work={poemData.work}
          key={params.id}
        />
        {/* ------Poem div Width Is in global.css file---------- */}
        <div style={poemDivBgImage} className="h-auto poem-div flex flex-col bg-no-repeat bg-center bg-cover">
          {poemData.poemTextArr?.map(item => {
            return <p key={item.index} className={`${item.index % 2 === 0 ? "self-start" : "self-end"} sm:text-4xl max-sm:text-sm font-medium text-white p-4`}>{item["poem-text"]}</p>
          })}
        </div>
      </div>
    </>
  );
};

export default page;
