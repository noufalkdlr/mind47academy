"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="px-4 pt-26 bg-black text-white h-dvh">
        <div className="bg-amber-300 relative overflow-hidden w- h-48 rounded-xl group">
          <Image
            src="/images/hero-image-1.jpeg"
            alt="home-image"
            width={900} height={200}
            className="transition-transform scale-120 translate-y-4 duration-500 ease-in-out group-hover:scale-130"
          />
        </div>
        <div>
          <h1>A Complete mind solution</h1>
        </div>
      </div>
    </div>
  );
}
