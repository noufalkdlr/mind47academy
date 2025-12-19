"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, use } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {

    let lastScrollY = window.scrollY

    const handleScroll = () => {

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setShow(false);
        } else {
          setShow(true);
        }

        lastScrollY = currentScrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
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
