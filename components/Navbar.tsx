import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex uppercase text-2xl font-extrabold font-cabin-sketch gap-4 p-2 h-16 bg-theme-1 items-center justify-between">
      <div className="flex items-center gap-4 justify-start p-1 h-full">
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
        className="pt-1 pb-1 pr-2 pl-2 bg-theme-4 rounded-[2px] hover:border-4 hover:border-theme-2 hover:scale-110 transition-all"
        href="all-poems"
      >
        Poems --&gt;
      </Link>
    </nav>
  );
};

export default Navbar;
