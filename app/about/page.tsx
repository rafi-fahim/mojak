import RenderAboutCards from "@/components/RenderAboutCards";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-auto w-full justify-center items-center font-rubik bg-theme-2 gap-4">
       <Image
        src="https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2FABOUT%20US.png?alt=media&token=741f32fc-75bd-4bb2-8e11-452b01086b4e"
        width={1000}
        height={200}
        alt="All poems cover photo"
        className="w-full self-start h-auto"
      />
      {/*
      <div className="flex flex-col items-center gap-4 justify-center text-center p-4">
        <h1>Fahim Shakil is too lazy to make a About page... 😪 </h1>
        <iframe
          src="https://giphy.com/embed/muCo9BLS7vjErTON27"
          width="380"
          height="380"
          className="giphy-embed max-sm:w-[300px] max-sm:h-[300px]"
          allowFullScreen
        ></iframe>
        <p>Go and read poems. You don't need to know about us right now 😐:</p>
        <Link
          className="pt-1 pb-1 pr-2 pl-2 text-center text-black font-cabin-sketch font-bold w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-1 hover:scale-110 transition-all"
          href="/all-poems"
        >
          Poems --&gt;
        </Link> */}
      {/* </div> */}
      <RenderAboutCards />
    </div>
  );
};

export default page;
