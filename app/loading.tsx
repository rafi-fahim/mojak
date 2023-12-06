import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col p-4 text-center h-screen w-full text-white justify-center items-center font-bold font-rubik text-4xl max-sm:text-xl bg-theme-2 gap-2">
      <h1>Loading ....</h1>
      <h2>
        Wait a bit. You are approching the best possible website for poems
      </h2>
      <h3>Your waiting will worth it</h3>
      <iframe
        src="https://giphy.com/embed/3s39mJ7zXU94mfAq4W"
        width="480"
        height="270"
        className="giphy-embed max-sm:h-auto max-sm:w-[300px]"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default loading;
