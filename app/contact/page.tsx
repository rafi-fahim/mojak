import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full text-white justify-center items-center font-bold font-rubik text-4xl max-sm:text-xl bg-theme-2 p-4 gap-4">
      <h1>Fahim Shakil is too lazy to make a contact page... 😪 </h1>
      <iframe
        src="https://giphy.com/embed/muCo9BLS7vjErTON27"
        width="380"
        height="380"
        frameBorder="0"
        className="giphy-embed max-sm:h-[300px] max-sm:w-[300px]"
        allowFullScreen
      ></iframe>
      <p>Go and read poems. You don't need to contact us right now 😐:</p>
      <Link
        className="pt-1 pb-1 pr-2 pl-2 text-center text-black font-cabin-sketch font-bold w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-1 hover:scale-110 transition-all"
        href="/all-poems"
      >
        Poems --&gt;
      </Link>
    </div>
  );
};

export default page;
