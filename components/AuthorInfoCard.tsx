import Image from "next/image";
import React from "react";

interface paramsType {
  authorName: string;
  photoURL: string;
  work: string;
  bio: string;
}

const AuthorInfoCard = (params: paramsType) => {
  return (
    <div className="flex h-[140px] mt-4 mb-4 bg-theme-4 author-card items-center rounded-lg">
      <Image
        src={params.photoURL}
        className="h-[140px] w-[140px] aspect-square rounded-l-lg"
        width={200}
        height={200}
        alt="Author Photo"
      />
      <div className="w-4 h-full bg-theme-1"></div>
      <div className="flex flex-col font-kdam-pro w-[400px] items-start gap-2 justify-center p-2">
        <h1 className="font-semibold text-xl text-theme-1">{params.authorName}</h1>
        <p className="text-sm font-thin">{params.work}</p>
        <p className="text-xs font-extralight">{params.bio}</p>
      </div>
    </div>
  );
};

export default AuthorInfoCard;
