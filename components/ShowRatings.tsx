"use client";
import { auth, db } from "@/app/Firebase/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import BackDrop from "./BackDrop";
import { useRouter } from "next/navigation";

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

const ShowRatings = ({
  collRef,
  poemRef,
}: {
  collRef: string;
  poemRef: string;
}) => {
  const [data, setData] = useState<DataType[]>();
  const [user, setUser] = useState<User>()
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false)
  const router = useRouter()

  onAuthStateChanged(auth, user => {
    if (user) {
      setUser(user)
    }
  })

    useEffect(() => {
    async function fetchData() {
      const docs = await getReviews(collRef, poemRef);
      setData(docs);
    }
    fetchData();
  }, []);

  const handleDelete = async (id:string) => {
    try {
      setDeleteLoading(true)
      await deleteDoc(doc(db, "poemCollection", `${collRef}`, "allPoems", `${poemRef}`, "ratings", `${id}`))
        .then(() => {
          setDeleteLoading(false)
          // revalidatePath(`/all-collections/[...collection]`, "page")
          router.back()
        })
    } catch {
      console.log("Error deleting it")
    }
  } 

  return (
    <>
      {data ? (
        <h1 className="text-4xl text-center max-sm:text-xl font-bold">
          Review ⭐ by Legit Human 🤵 not Robots 🤖
        </h1>
      ) : (
        <h1 className="text-4xl text-center max-sm:text-xl font-bold">
          No reviews ⭐
        </h1>
      )}
      {data && (
        <>
          <div className="w-full h-auto flex items-center justify-center gap-4 flex-col ">
            {data?.map((item) => {
              return (
                <div className="flex h-auto flex-col border-2 p-2 bg-theme-4 border-theme-1 w-full rounded-sm gap-4 justify-center items-start">
                  <div className="flex h-auto items-center justify-between w-full gap-4">
                    <div className="w-full flex h-auto gap-2 items-center justify-start">
                    <Image
                      src={item.profilePhotoUrl}
                      className="rounded-full"
                      alt={`${item.username}'s Photo`}
                      height={50}
                      width={50}
                    />
                    <h1 className="font-bold text-2xl">{item.username}</h1>
                    </div>
                    {
                      user?.uid === item.userId &&    
                      <button onClick={() => handleDelete(item.id)} className="pr-4 pl-4 pt-2 pb-2 justify-self-end rounded-md bg-red-900 text-white hover:bg-red-600 transition-all">
                        Delete
                      </button>
                    }
                  </div>
                  <p className="w-full flex flex-wrap font-rubik">Thought: {item.comment}</p>
                  {/* <p>Rating: {item.ratingCount}</p> */}
                </div>
              );
            })}
          </div>
        </>
      )}
      {
        deleteLoading && 
          <BackDrop>
            <div className="p-8 flex text-center justify-center items-center">
              Deleting....
            </div>
          </BackDrop>
      }
    </>
  );
};

export default ShowRatings;
