"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 font-sans ">
      <div className="flex justify-between bg-black px-4 lg:px-44 h-16 items-center py-10 ">
        {/* Logo */}

        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={20} />
        </Link>

        {/* Desktop menu */}

        <nav className="hidden lg:flex text-white">
          {" "}
          <ul className=" my-14 flex  gap-14 text-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/ffdg">Course</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}

        <button
          className=" lg:hidden text-white flex flex-col gap-1.5 justify-center items-center  w-8"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`bg-white w-8 h-0.5 transform transition duration-300 ${
              open ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`bg-white w-8 h-0.5 transform transition duration-300 ${
              open ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile Menu */}

      <nav
        className={`bg-black text-white flex justify-center transition-all duration-300 ease-in-out  overflow-hidden ${
          open ? "max-h-screen opacity-100" : " max-h-0 opacity-0"
        }`}
      >
        <ul className=" my-14 flex flex-col gap-14 text-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/ffdg">Course</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
