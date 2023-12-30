'use client'
import { db } from '@/app/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import React, { FC } from 'react'

interface PropType {
  title: string;
  ratingSum: number;
  picUrl: string;
  id: string;
}

const CollectionCard:FC<PropType> = (props) => {

  const divStyles = {
    backgroundImage: `linear-gradient(to bottom, #181818c5, #1818188e), url('${props.picUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link className='text-white hover:rounded-3xl hover:scale-110 transition-all duration-500 text-left' href={`/all-collections/${props.id}`}>
    <div style={divStyles} className='p-4 h-[270px] bg-no-repeat hover:-translate-y-2 transition-all w-[400px] flex flex-col items-start justify-between gap-4'>
      <h1 className="text-5xl">Title: {props.title}</h1>
      {/* <p className="self-right">Rating: ⭐⭐⭐⭐⭐</p> */}
    </div>    
    </Link>
    )
}

export default CollectionCard