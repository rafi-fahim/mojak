import React from "react";
import ShowAllPoemCards from "@/components/ShowAllPoemCards";
import Head from "next/head";
import Image from "next/image";

const page = () => {

  return (
    <>
      <Head>
        <meta
          name={`Mojak|| All_poems_Section`}
          content={`All of the poems of mojak are here. Mainly written By Nafiul Karim Shanto`}
        />
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate, max-age=0"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-theme-2 via-theme-3 to-theme-4">
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fmojak%20about%20us.png?alt=media&token=14a0e3c0-f62d-4ea7-9d9f-8142dfce6613"
          width={1000}
          height={200}
          alt="All poems cover photo"
          className="w-full h-auto"
        />
        <h1 className="bg-theme-1 text-white text-3xl font-medium font-cabin-sketch p-2 rounded ml-2 mr-2">Here are the legendary poems</h1>
        <ShowAllPoemCards />
      </div>
    </>
  );
};

export default page;
