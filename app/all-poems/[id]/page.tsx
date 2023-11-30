import { db } from "@/app/Firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import React from "react"

interface poemDataType {
    author:string;
    bgPhotoLink:string;
    "poem-text-1"?: string;
    profilePhotoLink:string;
    timeStamp: Date;
    title:string;
    poemTextArr?: string;
}

const getPoemData = async (id: string) => {
    const poemData = await getDoc(doc(db, 'poems' , `${id}`));
    return poemData.data() as poemDataType;
}

const page = async ({params}: {params: {id :string }}) => {
    const poemData = await getPoemData(params.id)
  return (
    <div className="w-full h-screen  ">
        <h1>{poemData.author}</h1>
        {/* <p>{poemData["poem-text-1"]}</p> */}
    </div>
  )
}

export default page