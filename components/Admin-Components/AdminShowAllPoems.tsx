"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/Firebase/firebase";


// Define an interface for your poem data
interface PoemData {
  author: string;
  bgPhotoLink: string;
  profilePhotoLink: string;
  title: string;
  id: string;
  // Add other fields if necessary
}

const getData = async (): Promise<PoemData[]> => {
  let data: PoemData[] = [];
  const querySnapshot = await getDocs(collection(db, "poems"));
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id } as PoemData);
  });
  return data;
};

const AdminShowAllPoems: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [poemData, setPoemData] = useState<PoemData[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setPoemData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
        <div className=""></div>
    </>
  )
}
export default AdminShowAllPoems