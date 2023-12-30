'use client'
import { db } from "@/app/Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import  { FC, useEffect, useState } from "react";
import CollectionCard from "../CollectionCard"; 
import Link from "next/link";

interface CollectionDataType {
  title: string;
  ratingSum: number;
  bgPhotoUrl: string;
  id: string;
}

const getPoemCollection = async () => {
  let data: CollectionDataType[] = [];
  const res = await getDocs(collection(db, "poemCollection"));
  res.forEach((docu) => {
    data.push({ ...docu.data(), id: docu.id } as CollectionDataType);
  });
  return data;
};

const RenderAdminCollection:FC = () => {
    const [collectionData, setCollectionData] = useState<CollectionDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getPoemCollection();
          setCollectionData(data);
          setLoading(false);
          setError(false);
        } catch (error) {
          setError(true);
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
    <div className="flex flex-col items-center justify-center p-4 w-full h-auto">
      <div className="poem-show-grid w-full h-full">
        {collectionData.map(item => {
          return <CollectionCard picUrl={item.bgPhotoUrl} title={item.title} ratingSum={item.ratingSum} id={item.id} key={item.id} />
        })}
      <Link href="/admin/create-collection" className="p-4 hover:bg-theme-3 hover:rounded-lg transition-all bg-theme-4 rounded font-medium text-xl">+ Create Collection</Link>
      </div>
    </div>
      );
};

export default RenderAdminCollection;
