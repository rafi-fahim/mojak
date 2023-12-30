import { db } from "@/app/Firebase/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import AuthorInfoCard from "@/components/AuthorInfoCard";
import React from "react";
import RenderMenuModal from "@/components/Admin-Components/RenderMenuModal";
import RatingBox from "./RatingBox";
import ShowRatings from "./ShowRatings";

interface PoemText {
  "poem-text": "string";
  index: number;
}

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
}

interface reviewCount {
  username:string;
  profilePhotoUrl: string;
  ratingCount: number;
  comment: string;
  id: string;
}



const getPoemData = async (collRef: string,poemRef: string) => {
  const poemData = await getDoc(
    doc(db, "poemCollection", `${collRef}`, "allPoems", `${poemRef}`)
  );
  return poemData.data() as poemDataType;
};

const getPoemReview = async (collRef: string,poemRef: string) => {
  const datas: reviewCount[] = []
  const poemData = await getDocs(
    collection(db, "poemCollection", `${collRef}`, "allPoems", `${poemRef}`, "ratings")
  );
  poemData.forEach(item => {
    datas.push({ ...item.data(), id: item.id } as reviewCount)
  })
  return datas as reviewCount[];
};
// ... (other imports)

const PoemReadPage = async ({ params }: { params: string[]}) => {
  const poemData = await getPoemData(params[0], params[1]);
  const reviewData = await getPoemReview(params[0], params[1])

  const countReview = () => {
    let reviewCountDown:number = 0;
    reviewData.forEach(data => {
      reviewCountDown += data.ratingCount
    })
    return Math.floor((reviewData.length * 5) / reviewCountDown);
  }
  const reviewSum = countReview()
 
  const poemDivBgImage = {
    backgroundImage: `linear-gradient(to bottom, #1a1a1a60 , #1a1a1a9a), url(${poemData.bgPhotoLink})`,
  };

  return (
    <>
      <div className="w-full h-auto font-noto-bengali flex justify-center flex-col gap-4 items-center p-2">
        <RenderMenuModal id={params} />
        <AuthorInfoCard
          authorName={poemData.author}
          photoURL={poemData.profilePhotoLink}
          bio={poemData.bio}
          work={poemData.work}
          key={params[1]}
        />
        {/* ------Poem div Width Is in global.css file---------- */}
        <div
          style={poemDivBgImage}
          className={`h-auto rounded-sm ${
            poemData.fontFamily && `font-${poemData.fontFamily}`
          } border items-center justify-center p-2 border-blue-500 poem-div flex flex-col bg-no-repeat bg-center bg-cover`}
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
          <p className="font-light text-white self-end text-sm">
            {poemData.timeStamp}
          </p>
        </div>
        <RatingBox collId={params[0]} poemId={params[1]} />
        <ShowRatings collRef={params[0]} poemRef={params[1]} />
      </div>
    </>
  );
};

export default PoemReadPage;
