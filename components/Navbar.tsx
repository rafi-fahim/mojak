"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const closeMenu = () => setMenu(false);
  const openMenu = () => setMenu(true);
  return (
    <nav className="flex uppercase text-2xl font-bold font-cabin-sketch gap-4 p-2 h-16 bg-theme-1 items-center justify-between">
      {menu ? (
        <motion.div
          initial={{ scale: 0, translateX: -100, opacity: 0 }}
          animate={{ scale: 1, translateX: 0, opacity: 1 }}
          exit={{ scale: 0, translateX: "-100%", opacity: 0 }}
          className="flex z-50 flex-col items-center bg-theme-1 justify-center center-absolute fixed gap-4 text-center p-4 h-screen w-full"
          onClick={closeMenu}
        >
          <Link
            onClick={closeMenu}
            className="z-30 pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/"
          >
            Home 🏠
          </Link>
          <Link
            onClick={closeMenu}
            className="z-30 pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/about"
          >
            About 👱‍♂️
          </Link>
          <Link
            onClick={closeMenu}
            className="z-30 pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/contact"
          >
            Contact 📞
          </Link>
          <Link
            onClick={closeMenu}
            className="z-30 pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/all-poems"
          >
            Poems --&gt;
          </Link>
          <Link
          onClick={closeMenu}
            className="z-30 pt-1 pb-1 pr-2 pl-2 w-1/2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/admin"
          >
            Admin 🕵️‍♀️
          </Link>

          <motion.button
            whileTap={{ scale: 1.3 }}
            onClick={() => setMenu((prev) => !prev)}
            className="pt-1 pb-1 w-1/2 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          >
            🔰 Close Menu 🔰
          </motion.button>
        </motion.div>
      ) : (
        <>
          <motion.button
            whileTap={{ scale: 1.3 }}
            onClick={openMenu}
            className="pt-1 pb-1 pr-2 pl-2 z-40 sm:hidden block bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          >
            🔰 Menu 🔰
          </motion.button>
          <Link
            className="z-30 sm:hidden pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/all-poems"
          >
            Poems --&gt;
          </Link>
        </>
      )}
      <div className="flex max-sm:hidden items-center gap-4 justify-start p-1 h-full">
        <Link
          className="z-30 pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          href="/"
        >
          Home 🏠
        </Link>
        <Link
          className="z-30 pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          href="/about"
        >
          About 👱‍♂️
        </Link>
        <Link
          className="z-30 pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
          href="/contact"
        >
          Contact 📞
        </Link>
      <Link
        className="z-30 max-sm:hidden pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
        href="/admin"
      >
        Admin 🕵️‍♀️
      </Link>
      </div>

      <Link
        className="z-30 max-sm:hidden pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
        href="/all-poems"
      >
        Poems --&gt;
      </Link>
    </nav>
  );
};

export default Navbar;
