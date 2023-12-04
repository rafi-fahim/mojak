"use client";
import { motion, easeIn } from "framer-motion";
import Image from "next/image";

interface propsType {
  text: string;
  imgUrl: string;
  index: number;
  heading: string;
}

const OurGoalsCard = (props: propsType) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center lg:flex-row gap-4`}
      >
        {props.index % 2 === 1 && (
          <motion.div className="basis-1/4">
            <Image
              className="border-8 border-x-theme-1 border-y-theme-2 border-r-theme-3 border-b-theme-4 rounded-sm"
              src={props.imgUrl}
              alt=""
              width={300}
              height={300}
            />
          </motion.div>
        )}

        <motion.div
          initial={{
            opacity: 0,
            animationTimingFunction: "ease-in",
            animationDuration: ".2s",
          }}
          whileInView={{ opacity: 1 }}
          className={`basis-3/4 flex flex-col gap-3 p-2`}
        >
          <h1 className="bg-theme-4 w-52 text-center p-2 font-medium text-xl rounded-sm">
            {props.heading}
          </h1>
          <p className="first-letter:text-4xl">{props.text}</p>
        </motion.div>
        {props.index % 2 === 0 && (
          <motion.div className="basis-1/4">
            <Image
              className="border-8 border-x-theme-1 border-y-theme-2 border-r-theme-3 border-b-theme-4 rounded-sm"
              src={props.imgUrl}
              alt=""
              width={300}
              height={300}
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default OurGoalsCard;
