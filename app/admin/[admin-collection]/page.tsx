"use client";
import { auth, db } from "@/app/Firebase/firebase";
import Loading from "@/components/Loading";
import PoemCard from "@/components/PoemCard";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { motion, spring } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AdminPostForm from "@/components/Admin-Components/AdminPostForm";

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
  const res = await getDoc(doc(db, "poemCollection", `${id}`))
  return { ...res.data() }
}

const page = ({ params }: { params: { "admin-collection": string } }) => {
  const [poems, setPoems] = useState<poemDataType[]>();
  const [loading, setloading] = useState<boolean>(true);
  const [checkLogin, setCheckLogin] = useState<boolean>(false);
  const [collData, setCollData] = useState<any>({})
  const [user, setUser] = useState<object>();
  const [showAddPoem, setShowAddPoem] = useState<boolean>(false)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUser(user);
      trueLoginState();
    } else {
      falseLoginState();
    }
    setloading(false);
  });
  const trueLoginState = () => setCheckLogin(true);
  const falseLoginState = () => setCheckLogin(false);
  const closeForm = () => setShowAddPoem(false)
  useEffect(() => {
    async function fetchData() {
      const data = await getData(params["admin-collection"]);
      setPoems(data);
      const collData = await getCollection(params["admin-collection"])
      setCollData(collData)
    }
    fetchData();
  }, []);

  console.log(collData);
  

  return (
    <div>
      {loading ? (
        <Loading />
      ) : user ? (
        <>
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
                    href={`/all-collections/${params["admin-collection"]}/${item.id}`}
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
          })}
          <button
            className="bg-theme-2 rounded transition-all hover:bg-theme-4 hover:text-black text-white hover:rounded-2xl p-4"
            onClick={() => setShowAddPoem(prev => !prev)}
          >
            {showAddPoem ? "Close Form" : "+ Add Poem"}
          </button>
        </div>
        {showAddPoem && <AdminPostForm closeForm={closeForm} id={params["admin-collection"]}/>}
        </>
      ) : (
        <p>You are not an admin</p>
      )}
    </div>
  );
};

export default page;
