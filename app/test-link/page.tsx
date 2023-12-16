import PoemCard from "@/components/PoemCard";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full gap-2  h-screen">
      <div className="w-[400px] h-[300px]">
        <PoemCard
          author="Santo"
          imageUrl="/android-chrome-192x192.png"
          profilePic="/public/images/fahim-logo.png"
          title="Mojak"
        />
      </div>
    </div>
  );
};

export default page;
