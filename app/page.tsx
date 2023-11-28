export default function Home() {

  return (
    <div className="bg-cover bg-top bg-[url('https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Profile_Pics%2Fhome-bg.png?alt=media&token=a87bb5a6-86dc-48f3-b4bc-a057237b1495')] flex flex-col items-center justify-center bg-no-repeat w-full h-[90vh] relative">
      <h1 className="font-extrabold heading-font text-8xl text-blue-400 font-kdam-pro z-10">MOJAK</h1>
      <svg
      className="rotate-angle absolute"
        width="300px"
        height="300px"
        viewBox="0 0 384 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M174.5 383.5L170.5 156.5L0 0L384 56.5L174.5 383.5Z"
          fill="#BD0C21"
        />
      </svg>
    </div>
  );
}
