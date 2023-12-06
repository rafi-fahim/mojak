import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col w-full h-screen text-center justify-center items-center font-bold text-white font-rubik text-5xl max-sm:text-xl bg-theme-2 p-4 gap-4">
      <h1>Loading ....</h1>
      <h2>
        Wait a bit. You are about to read the best possible poems from a web app
        🤯...
      </h2>
      <h3>Your waiting will worth it 😉...</h3>
      <iframe
        src="https://giphy.com/embed/3s39mJ7zXU94mfAq4W"
        width="480"
        height="270"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default loading;
