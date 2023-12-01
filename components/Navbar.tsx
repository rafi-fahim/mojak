"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import React,{ useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(true);

  return (
    <nav className="flex uppercase text-2xl font-extrabold font-cabin-sketch gap-4 p-2 h-16 bg-theme-1 items-center justify-between">
      {menu ? (
        <motion.button 
        whileTap={{ scale: 1.3 }}
        onClick={() => setMenu(prev => !prev)} className="pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all">
          🔰 Menu 🔰
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0, translateX: -100, opacity:0 }}
          animate={{ scale: 1, translateX: 0, opacity:1 }}
          exit={{ scale: 0, translateX: -100, opacity:0 }}
          className="flex flex-col items-center bg-theme-1 justify-center center-absolute fixed gap-4 text-center p-4 h-screen w-full"
          >
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/"
          >
            Home 🏠
          </Link>
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/about"
          >
            About 👱‍♂️
          </Link>
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/contact"
          >
            Contact 📞
          </Link>
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="all-poems"
          >
            Poems --&gt;
          </Link>
          <motion.button whileTap={{ scale: 1.3 }} onClick={() => setMenu(prev => !prev)} className="pt-1 pb-1 w-1/2 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all">
          🔰 Close Menu 🔰
        </motion.button>
        </motion.div>
      )}
      <div className="flex max-sm:hidden items-center gap-4 justify-start p-1 h-full">
        <Link
          className="pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          href="/"
        >
          Home 🏠
        </Link>
        <Link
          className="pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          href="/about"
        >
          About 👱‍♂️
        </Link>
        <Link
          className="pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          href="/contact"
        >
          Contact 📞
        </Link>
      </div>
      <Link
        className="max-sm:hidden pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
        href="all-poems"
      >
        Poems --&gt;
      </Link>

    </nav>
  );
};

export default Navbar;
