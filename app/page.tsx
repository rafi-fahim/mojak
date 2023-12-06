import RenderOurGoals from "@/components/RenderOurGoals";
import RenderTHoughtCard from "@/components/RenderThoughtCard";
import React from "react";

const page: React.FC = () => {
  return (
    <>
      <section className="bg-theme-3 flex flex-col items-center justify-center aspect-video lg:w-full lg:h-screen relative">
        <video
          loop
          autoPlay
          muted
          className="z-10 absolute w-screen h-screen overflow-hidden"
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FVideos%2Fcover-page%20-begining.mp4?alt=media&token=737bc8b7-d1d5-45d0-8292-d58eda248446"
          />
        </video>
        <h1 className="z-30 letter-space font-bold text-7xl sm:first-letter:text-[200px] font-rubik sm:text-9xl uppercase stroke-text text-white">
          MOJAK
        </h1>
      </section>
      <section className="bg-theme-3 flex flex-col items-center justify-center aspect-video lg:w-full lg:h-screen relative">
        <h1 className="font-extrabold max-sm:p-0 max-sm:text-xs sm:text-lg text-white heading-font w-full absolute bottom-0 text-center p-2 font-kdam-pro z-20">
          A product of FSR Soft
        </h1>
        <video
          loop
          autoPlay
          muted
          className="z-10 absolute w-screen h-screen overflow-hidden"
        >
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FVideos%2Fcover-page-%20ending.mp4?alt=media&token=5b458d3a-aeff-4463-b84a-235916e41ff5"
          />
        </video>
      </section>
      {/*--------------------------------Thoughts section starts------------------ */}
      <section className="flex flex-col items-center justify-center relative p-4 gap-4 w-full h-auto">
        <RenderTHoughtCard />
      </section>
      {/* ---------------------------OUR GOALS SECTOIN ----------------------- */}
      <section className="w-full flex flex-col items-center justify-center p-2 sm:p-4 gap-6 h-auto">
        <h1 className="max-sm:text-xl text-2xl shadow shadow-theme-2 font-medium bg-theme-2 rounded-sm text-white p-2">
          Our Goals
        </h1>
        <RenderOurGoals />
      </section>
    </>
  );
};
export default page;
