'use client'
import { db } from "@/app/Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import  { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";

 interface CollData {
    title: string;
    ratingSum: number;
    bgPhotoUrl: string;
    id: string;
  }


const getPoemCollection = async () => {
  let data: CollData[] = [];
  const res = await getDocs(collection(db, "poemCollection"));
  res.forEach((docu) => {
    data.push({ ...docu.data(), id: docu.id } as CollData);
  });
  return data as CollData[]
};

const RenderCollections = () => {
    const [collectionData, setCollectionData] = useState<CollData[]>([]);
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
    <div className="poem-show-grid w-full h-auto">
      {collectionData.map(item => {
        return <CollectionCard picUrl={item.bgPhotoUrl} admin={false} title={item.title} ratingSum={item.ratingSum} id={item.id} key={item.id} />
      })}
    </div>
      );
};

export default RenderCollections;
