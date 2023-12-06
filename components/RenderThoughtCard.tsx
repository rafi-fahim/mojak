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
      name: "Santo",
      photoURl:
      "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fsanto.png?alt=media&token=559bfd39-6c2e-4a32-95a3-0fe88abbcfca",
      bio: "Student & Graphics Designer || CPSCS",
      qoute:
      "আমি সব সময় চেয়েছিলাম কবিতা পড়া যেন সহজ হয়ে উঠে। বর্তমান যুগে তরুন প্রজন্ম সোশাল মিডিয়ায় শুধু ঘুরে বেড়ানোর পোষ্ট দেয়। কিন্তু তারা জানে না এমন সোশাল মিডিয়া তৈরি করা সম্ভম যেখানে তারা শুধু সৃজনশীল কাজ শেয়ার করতে পারবে। সেই বুদ্ধিকে কাজে রুপান্তর করার জন্যই আমার এরকম একটি অ্যাপ তৈরির ইচ্ছা ছিলো। তাই আমি আমার বন্ধু ফাহিম শাকিলের মাধ্যমে আমার এই সপ্নকে বাস্তবে রুপান্তর করি। ভবিষ্যতে কবিতা লেখা সবার জন্য উন্মুক্ত করা হবে। আপাতত হাতে ধরে কিছু ব্যাক্তি এখানে কবিতা লিখতে পারবেন। কিন্তু পড়তে পারবে সবাই।",
      index: 1,
    },
    {
      name: "Fahim Shakil",
      photoURl:
        "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Ffahim-logo.png?alt=media&token=a7eddd64-8aa6-4d96-95ae-b454039ae6b3",
      bio: "Student & CEO || FSR SOFT",
      qoute:
      "First of all this was a great Idea! An app only for sharing poems, supported with Bengali language. Thanks to my friend Nafiul Karim Santo for this great Idea. Second of all creating this website was a great challange for me. Because I tried my best to optimize it. It was created with the latest technologies. I never before made any website like this. So I tried to add every little & big feature I can. This was my friend's dream project. So I worked hard to make it real 🙂",
      index: 2,
    },
    {
      name: "Akib Al Hasan",
      photoURl:
        "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Profile_Pics%2F6cBMYcWzrMtMf8CSURJy.png?alt=media&token=f054922b-841e-4c95-98ca-5b009f55eb6f",
      bio: "Student || CPSCS",
      qoute:
        "আমার তো কিছুই করার নাই",
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
