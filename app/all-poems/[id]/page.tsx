import { db } from "@/app/Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import AuthorInfoCard from "@/components/AuthorInfoCard";
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
  fontFamily: string;
}

const getPoemData = async (id: string) => {
  const poemData = await getDoc(doc(db, "poems", `${id}`));
  return poemData.data() as poemDataType;
};

// ... (other imports)

const page = async ({ params }: { params: { id: string } }) => {
  const poemData = await getPoemData(params.id);

  const poemDivBgImage = {
    backgroundImage: `linear-gradient(to bottom, #1a1a1a60 , #1a1a1a9a), url(${poemData.bgPhotoLink})`,
  };

  console.log(poemData);

  return (
    <>
      <Head>
        <meta
          name={`Name: ${poemData.author}`}
          content={`Author: ${poemData.author}`}
        />
      </Head>
      <div className="w-full h-auto font-noto-bengali flex justify-center flex-col gap-4 items-center p-2">
        <AuthorInfoCard
          authorName={poemData.author}
          photoURL={poemData.profilePhotoLink}
          bio={poemData.bio}
          work={poemData.work}
          key={params.id}
        />
        {/* ------Poem div Width Is in global.css file---------- */}
        <div
          style={poemDivBgImage}
          className={`h-auto rounded-sm ${poemData.fontFamily && `font-${poemData.fontFamily}`} border items-center justify-center p-2 border-blue-500 poem-div flex flex-col bg-no-repeat bg-center bg-cover`}
        >
          <h1 className="text-3xl uppercase font-bold stroke-text stroke-text text-white font-rubik">
            Poem: {poemData.title}
          </h1>
          <h2 className="text-3xl font-bold uppercase stroke-text stroke-text text-white font-rubik">
            Author: {poemData.author}
          </h2>
          {poemData.poemTextArr?.map((item) => {
            const lines = item["poem-text"].split("\n"); // Split text into an array of lines
            return (
              <p
                key={item.index}
                className={`${
                  item.index % 2 === 0 ? "self-start" : "self-end"
                } sm:text-4xl max-sm:text-base font-medium text-white p-4`}
              >
                {lines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}{" "}
                    {/* Add <br> for all lines except the last one */}
                  </React.Fragment>
                ))}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
