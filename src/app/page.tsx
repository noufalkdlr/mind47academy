"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-black h-dvh px-4 lg:px-44 ">
        <div className="flex flex-col-reverse justify-end lg:flex-row lg:items-center lg:pt-36 lg:justify-between  pt-26  text-white ">
          <div className="pt-8  flex flex-col gap-4">
            <h1 className="text-5xl  lg:w-96 ">Shaping Minds. Building Futures.</h1>
            <p className="w-72">
              Empowering students with knowledge, confidence, and skills to
              succeed in academics and beyond.
            </p>
            <button className="bg-white font-medium text-black w-46 px-6 py-3 rounded-full">
              Start Your Journey
            </button>
          </div>
          <div className="bg-amber-300 relative overflow-hidden w-full h-48 lg:w-[50%] lg:h-118  rounded-xl group">
            <Image
              src="/images/hero-image-1.jpeg"
              alt="home-image"
              width={900}
              height={200}
              className="transition-transform scale-120 lg:scale-200 translate-y-4 lg:translate-y-48 lg:-translate-x-14 duration-500 ease-in-out group-hover:scale-130 lg:group-hover:scale-220"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
