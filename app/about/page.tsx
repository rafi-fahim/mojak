import RenderAboutCards from "@/components/RenderAboutCards";
import Image from "next/image";
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
      <RenderAboutCards />
    </div>
  );
};

export default page;
