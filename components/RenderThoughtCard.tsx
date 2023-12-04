"use client";
import React, { useState } from "react";
import ThoughtCard from "@/components/ThoughtCard";
import { motion } from "framer-motion";

interface ThoughtsTypes {
  name: string;
  qoute: string;
  photoURl: string;
  bio: string;
  index: number;
}
const RenderTHoughtCard = () => {
  const [thoughtCardCount, setThoughtCardCount] = useState(0);
  const thoughts: ThoughtsTypes[] = [
    {
      name: "Akib Al Hasan",
      photoURl:
        "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Ffahim-logo.png?alt=media&token=a7eddd64-8aa6-4d96-95ae-b454039ae6b3",
      bio: "Student || CPSCS",
      qoute:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore animi vel expedita. Fuga ad similique officia ullam iure? Quasi dolorum mollitia earum illum ipsum. Fugiat rerum pariatur maxime nam doloribus?",
      index: 1,
    },
    {
      name: "Santo",
      photoURl:
        "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Ffahim-logo.png?alt=media&token=a7eddd64-8aa6-4d96-95ae-b454039ae6b3",
      bio: "Student & Graphics Designer || CPSCS",
      qoute:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore animi vel expedita. Fuga ad similique officia ullam iure? Quasi dolorum mollitia earum illum ipsum. Fugiat rerum pariatur maxime nam doloribus?",
      index: 2,
    },
    {
      name: "Fahim Shakil",
      photoURl:
        "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Ffahim-logo.png?alt=media&token=a7eddd64-8aa6-4d96-95ae-b454039ae6b3",
      bio: "Student & CEO || FSR SOFT",
      qoute:
        "Creating this website was a great challange for me. Because I tried my best to optimize it. It was created with the latest technologies. I never before made any website like this. So I tried to add every little & big feature I can. This was my friend's dream project. So I worked hard to make it real 🙂",
      index: 3,
    },
  ];

  function handleThoughtCardRight() {
    if (thoughtCardCount + 1 < thoughts.length) {
      setThoughtCardCount((prev) => prev + 1);
    } else {
      setThoughtCardCount(0);
    }
  }
  function handleThoughtCardLeft() {
    if (thoughtCardCount === 0) {
      setThoughtCardCount(thoughts.length - 1);
    } else {
      setThoughtCardCount((prev) => prev - 1);
    }
  }
  
  return (
    <>
      <h1 className="max-sm:text-xl text-2xl shadow shadow-theme-2 font-medium bg-theme-2 rounded-sm text-white p-2">
        Our Thoughts
      </h1>
      <div className="flex justify-center items-center gap-2">
        <motion.button
          whileTap={{ scale: 1.6 }}
          onClick={handleThoughtCardLeft}
          className="w-14 z-40 transition-all hover:animate-pulse hover:scale-105 hover:bg-theme-3 h-14 text-3xl rounded-sm shadow-sm p-1 shadow-slate-800"
        >
          👈
        </motion.button>
        <ThoughtCard
          imgURL={thoughts[thoughtCardCount].photoURl}
          name={thoughts[thoughtCardCount].name}
          qoute={thoughts[thoughtCardCount].qoute}
          bio={thoughts[thoughtCardCount].bio}
          key={thoughts[thoughtCardCount].index}
        />
        <motion.button
          whileTap={{ scale: 1.6 }}
          onClick={handleThoughtCardRight}
          className="w-14 z-40 transition-all hover:animate-pulse hover:scale-105 hover:bg-theme-3 h-14 rounded-sm text-3xl shadow-sm p-1 shadow-slate-800"
        >
          👉
        </motion.button>
      </div>
    </>
  );
};

export default RenderTHoughtCard;
