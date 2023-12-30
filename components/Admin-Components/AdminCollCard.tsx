"use client";
import Link from "next/link";
import React, { FC } from "react";

interface PropType {
  title: string;
  rating: number;
  picUrl: string;
  id: string;
}

const CollectionCard: FC<PropType> = (props) => {
  const divStyles = {
    backgroundImage: `linear-gradient(to bottom, #181818c5, #1818188e), url('${props.picUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link className="relative h-auto w-auto" href={`/admin/${props.id}`}>
      <button className="absolute top-4 left-4 p-4 bg-theme-4 rounded transition-all hover:bg-theme-1 hover:text-white font-medium">
        MENU
      </button>
      <div
        style={divStyles}
        className="p-4 bg-no-repeat flex flex-col items-center justify-center gap-4"
      >
        <h1>Title: {props.title}</h1>
        <p>Rating: ⭐⭐⭐⭐⭐</p>
      </div>
    </Link>
  );
};

export default CollectionCard;
