import React from "react";
import ShowAllPoemCards from "@/components/ShowAllPoemCards";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name={`Mojak All poem Section`}
          content={`All of the poems of mojak are here. Mainly written By Nafiul Karim Shanto`}
        />
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate, max-age=0"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
      </Head>
      <ShowAllPoemCards />
    </>
  );
};

export default page;
