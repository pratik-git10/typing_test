import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-neutral-500/30 rounded-b-md flex justify-between items-center px-6 md:px-10 py-3 shadow-sm shadow-stone-500 mx-8 ">
      <Link href="/">Typer</Link>
      <div className="">
        <Link
          href="https://github.com/pratik-git10/typing-clone"
          target="_blank"
          className="w-fit bg-neutral-400 p-1 rounded-md mx-2 text-black backdrop-blur-md shadow-sm shadow-black hover:bg-white transition ease-in-out font-medium hover:ring-1 ring-neutral-500  ">
          Github
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
