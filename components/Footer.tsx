import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white footer-grid gap-2 bg-slate-900 w-full h-80">
      {/* Grid in global css file class="footer-grid" */}{" "}
      <div className="h-full w-full flex flex-col justify-start p-2 gap-2 items-start">
        {/* LOGO SVG START */}
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* LOGO SVG END */}
        <h1 className="uppercase text-5xl max-sm:text-2xl font-bold text-yellow-50">
          MOjak
        </h1>
        <p className="max-sm:text-xs text-base">E-mail: fsrsoft@gmail.com</p>
        <p className="max-sm:text-xs text-base">
          To learn more :{" "}
          <Link
            className="text-red-500 hover:underline font-medium"
            href="/about"
          >
            Click Here
          </Link>
        </p>
        <div className="flex gap-3 justify-start transition-transform items-start">
          <a
            target="_blank"
            className="h-50px w-50px hover:scale-125 duration-300"
            href="https://www.facebook.com/"
          >
            {<Facebook />}
          </a>
          <a
            target="_blank"
            className="h-50px w-50px hover:scale-125 duration-300"
            href="https://www.discord.app/"
          >
            {<Discord width="50px" height="50px" fill="#fff" key={"Bruh"} />}
          </a>
          <a
            target="_blank"
            className="h-50px w-50px hover:scale-125 duration-300"
            href="https://www.instagram.com/"
          >
            {<Insta />}
          </a>
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-start p-2 gap-2 items-end">
        <Discord width="100px" height="100px" fill="#fff" key={"Bruh"} />
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
            className="text-red-600 font-medium"
            href="https://fsrportfolio.netlify.app"
          >
            Click Here
          </a>
        </p>
      </div>
      <div className="w-full flex items-center col-span-2 justify-center p-2">
        Copyright ©2023{" "}
        <span className="text-green-400 font-medium"> Mojak</span>
      </div>
    </div>
  );
};

function Facebook() {
  return (
    <>
      <svg
        fill="#fff"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
      </svg>
    </>
  );
}
function Insta() {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z"
        fill="#fff"
      />
    </svg>
  );
}

function Discord({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
        fill={fill}
      />
    </svg>
  );
}

export default Footer;
