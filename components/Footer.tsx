import DiscordSvg from "@/public/svg/DiscordSvg";
import FacebookSvg from "@/public/svg/FacebookSvg";
import InstaSvg from "@/public/svg/InstaSvg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white footer-grid gap-2 bg-slate-900 w-full h-80">
      {/* Grid in global css file class="footer-grid" */}{" "}
      <div className="h-full w-full flex flex-col justify-start p-2 gap-2 items-start">
        {/* LOGO SVG START */}
        <Image src="https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2FMOJAK.png?alt=media&token=4256d45a-93a0-46f6-8c45-aadc4345f469" alt="" height={70} width={70} className="rounded-full border-slate-400" />
        {/* LOGO SVG END */}
        <h1 className="uppercase text-5xl max-sm:text-2xl font-bold text-yellow-50">
          Mojak
        </h1>
        <p className="max-sm:text-xs text-base">E-mail: fsrsoft@gmail.com</p>
        <p className="max-sm:text-xs text-base">
          To learn more :{" "}
          <Link
            className="text-red-500 z-30 hover:underline font-medium"
            href="/about"
          >
            Click Here
          </Link>
        </p>
        <div className="flex gap-3 justify-start transition-transform items-start">
          <a
            target="_blank"
            className="h-50px w-50px hover:scale-125 duration-300"
            href="https://web.facebook.com/profile.php?id=100089204100325"
          >
            {<FacebookSvg height="50px" width="50px" fill="#fff" />}
          </a>
          <a
            target="_blank"
            className="h-50px w-50px hover:scale-125 duration-300"
            href="https://discord.gg/Nzq67EKTAS"
          >
            {<DiscordSvg width="50px" height="50px" fill="#fff" key={"Bruh"} />}
          </a>
          <a
            target="_blank"
            className="h-50px w-50px hover:scale-125 duration-300"
            href="https://www.instagram.com/nafiul.santo/"
          >
            {<InstaSvg width="50px" height="50px" fill="#fff" />}
          </a>
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-start p-2 gap-2 items-end">
        <Image
          className="rounded-full w-[70px] h-[70px]"
          alt="FSR SOFT LOGO"
          width={100}
          height={100}
          src="https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Ffahim-logo.png?alt=media&token=a7eddd64-8aa6-4d96-95ae-b454039ae6b3"
        />
        <h1 className="text-3xl max-sm:text-xl font-medium">Deveoped By</h1>
        <h1 className="text-4xl max-sm:text-2xl font-bold text-green-600">
          FSR SOFT
        </h1>
        <p className="max-sm:text-xs text-base">
          E-mail: fsrafisocilal18@gmail.com
        </p>
        <p className="max-sm:text-xs text-base">
          To Learn More:{" "}
          <a
            target="_blank"
            className="text-red-600 z-30 font-medium"
            href="https://fsrportfolio.netlify.app"
          >
            Click Here
          </a>
        </p>
      </div>
      <div className="w-full flex items-center col-span-2 justify-center p-2">
        Copyright ©2023
        <span className="text-green-400 font-medium ml-1">Mojak</span>
      </div>
    </div>
  );
};
export default Footer;
