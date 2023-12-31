import { db } from "@/app/Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Types {
  title: string;
  author: string;
  imageUrl: string; // Add a prop for the dynamic image URL
  profilePic: string;
  collRef: string;
  poemRef: string;
}

interface DataType {
  username: string;
  profilePhotoUrl: string;
  comment: string;
  ratingCount: number;
  userId: string;
  id: string;
}

const getReviews = async (collRef: string, poemRef: string) => {
  let data: DataType[] = [];
  const snapshot = await getDocs(
    collection(
      db,
      "poemCollection",
      `${collRef}`,
      "allPoems",
      `${poemRef}`,
      "ratings"
    )
  );
  snapshot.forEach((docs) => {
    data.push({ ...docs.data(), id: docs.id } as DataType);
  });
  return data as DataType[];
};

const PoemCard = async ({
  title,
  author,
  imageUrl,
  profilePic,
  collRef,
  poemRef,
}: Types) => {
  // Inline styles for the first div with a static gradient and dynamic background image
  const reviewData = await getReviews(collRef, poemRef);
  const countReview = () => {
    let reviewCountDown: number = 0;
    reviewData.forEach((data) => {
      reviewCountDown += data.ratingCount;
      console.log(reviewCountDown);
    });

    const avg = reviewCountDown;
    return Math.floor(avg / reviewData.length);
  };
  const reviewSum: number = countReview();

  const divStyles = {
    backgroundImage: `linear-gradient(to bottom, #181818c5, #1818188e), url('${imageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        style={divStyles}
        className="bg-no-repeat hover:cursor-pointer poem-card-style p-2 text-center hover:-translate-y-4 transition-transform relative overflow-hidden h-full w-full rounded text-white gap-2 flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl font-medium">{title}</h1>
        <div className="flex text-2xl justify-center gap-4 items-center">
          <p className="font-light">By</p>
          <p className="font-medium">{author}</p>
        </div>
        <Image
          className="rounded-full border-2 border-theme-2 h-[60px] w-[60px]"
          src={profilePic}
          height={60}
          width={60}
          alt="Profile Pic"
        />
        <div className="w-0 opacity-0 font-bold absolute center-absolute transition-all duration-300  -z-50 poem-card-show bg-[#ffffffb0] text-black text-xl text-center flex items-center justify-center">
          <h1>Click here to read it 🙂</h1>
        </div>
        <div className="absolute justify-center items-center flex gap-4 right-0 bottom-0 p-2">
          Rating :{Array(5)
            .fill("")
            .map((_, index) => {
              if (reviewSum > index) {
                return (
                  <AiFillStar
                    style={{
                      color: "orange",
                      height: "20px",
                      width: "20px",
                    }}
                  />
                );
              } else {
                return (
                  <AiOutlineStar
                    style={{
                      color: "orange",
                      height: "20px",
                      width: "20px",
                    }}
                  />
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default PoemCard;
