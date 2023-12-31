"use client";
import CodingSvg from "@/public/svg/CodingSvg";
import DiscordSvg from "@/public/svg/DiscordSvg";
import FacebookSvg from "@/public/svg/FacebookSvg";
import InstaSvg from "@/public/svg/InstaSvg";
import { motion, spring } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ParamType {
  name: string;
  imgURL: string;
  work: string;
  bio: string;
  facebookLink: string;
  websiteLink: string;
  instaLink: string;
  contactEmail: string;
  title: string;
}

const AboutCard = (params: ParamType) => {
  return (
    <>
      <h1 className="flex items-center font-mukti justify-center p-2 bg-theme-4 rounded-sm border-t-theme-1 border-b-theme-2 border-r-theme-3 border-2 border-l-theme-4 font-medium text-xl">
        {params.title}
      </h1>
      <motion.div
        className="flex flex-col items-start justify-center p-2 h-auto gap-4 about-card-width rounded bg-theme-4"
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={spring}
      >
        <div className="flex gap-2 self-center items-center justify-center">
          <Image
            src={params.imgURL}
            alt="About person Photo"
            width={70}
            height={70}
            className="rounded-full border-4 border-theme-1"
          />
          <h1 className="text-3xl font-semibold">{params.name}</h1>
        </div>
        <p className="text-lg font-medium">Work: {params.work}</p>
        <p className="text-lg font-light">
          <span className="font-medium">Bio: </span>
          {params.bio}
        </p>
        <p>
          <span className="font-medium">Contact: </span>
          {params.contactEmail}
        </p>
        <div className="flex justify-center self-end items-center gap-4">
          <a target="_blank" href={params.facebookLink}>
            <FacebookSvg width="50px" height="50px" fill="#435585" />
          </a>
          <a target="_blank" href={params.instaLink}>
            <InstaSvg width="50px" height="50px" fill="#435585" />
          </a>
          <a target="_blank" href={params.websiteLink}>
            <CodingSvg bgFill="#F5E8C7" width="50px" height="50px" fill="#435585" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default AboutCard;
