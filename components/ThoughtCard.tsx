import Image from "next/image";
import React from "react";

interface paramType {
  name: string;
  qoute: string;
  imgURL: string;
  bio: string
}

const ThoughtCard = (props: paramType) => {
  return (
    <div className="grid font-mukti grid-rows-[2fr,1fr] thought-card-width h-auto bg-theme-4 border-theme-2 rounded-sm shadow shadow-theme-1 p-3 justify-items-center place-items-center gap-2">
      <blockquote className="col-span-3 font-medium">
        <p>"{props.qoute}"</p>
      </blockquote>
      <div className="col-start-1 justify-center col-span-3 max-sm:flex-col items-center flex gap-2">
        <Image
          className="rounded-full border w-[60px] h-[60px] border-theme-1"
          width={200}
          height={200}
          src={props.imgURL}
          alt={`${props.name}'s photo`}
        />
        <h1 className="text-lg font-medium">{props.name}</h1>
        <p className=" text-slate-800 text-sm">{props.bio}</p>
      </div>
    </div>
  );
};

export default ThoughtCard;
