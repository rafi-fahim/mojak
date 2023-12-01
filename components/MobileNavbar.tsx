"use state";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  return (
    <div className="hidden max-sm:flex items-center gap-4 justify-start p-1 h-full">
      {menu ? (
        <button
          onClick={() => setMenu((prev) => !prev)}
          className="pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
        >
          🔰 Menu 🔰
        </button>
      ) : (
        <div className="flex bg-theme-4 flex-col items-center justify-center fixed h-screen w-full">
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-full bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/"
          >
            Home 🏠
          </Link>
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-full bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/about"
          >
            About 👱‍♂️
          </Link>
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-full bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="/contact"
          >
            Contact 📞
          </Link>
          <Link
            className="pt-1 pb-1 pr-2 pl-2 w-full bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
            href="all-poems"
          >
            Poems --&gt;
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
