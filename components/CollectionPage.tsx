import React from 'react'
import ShowAllPoemCards from './ShowAllPoemCards';
import { db } from '@/app/Firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import CountReview from './CountReview';

interface CollDataType {
    title:string;
}

const getData = async (id: string) => {
    const res = await getDoc(doc(db, "poemCollection", `${id}`))
    return { ...res.data() as CollDataType}
  }

async function CollectionPage({params}: {params: string[]}) {

    const collData = await getData(params?.[0],)
    // console.log(params?.[0]);
    
    return (<div className="flex flex-col items-center p-2 justify-center gap-4 bg-gradient-to-br from-theme-2 via-theme-3 to-theme-4">
      <h1 className="bg-theme-1 text-white text-3xl font-medium font-cabin-sketch p-2 rounded ml-2 mr-2">Collection: {collData.title}</h1>
      {/* <CountReview /> */}
      <ShowAllPoemCards poemsRef={params[0]} />
    </div>);
  }

export default CollectionPage