export default function Home() {
  return (
    <>
      <section className="bg-theme-3 flex flex-col items-center justify-center aspect-video lg:w-full lg:h-screen relative">
      {/* <h1 className="font-extrabold heading-font w-full  text-center p-2 text-8xl max-sm:text-3xl text-blue-400 font-kdam-pro z-20">
        Welcome to
        </h1>

        <h1 className="font-extrabold heading-font w-full  text-center p-2 text-8xl max-sm:text-3xl text-blue-400 font-kdam-pro z-20">
          MOJAK
        </h1> */}
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
    </>
  );
}

//  <svg
//   className="rotate-angle absolute"
//     width="300px"
//     height="300px"
//     viewBox="0 0 384 384"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M174.5 383.5L170.5 156.5L0 0L384 56.5L174.5 383.5Z"
//       fill="#BD0C21"
//     />
//   </svg>
