"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* Hero section start */}

      <div className="bg-black h-dvh px-4 lg:px-44 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col-reverse justify-end lg:flex-row lg:items-center lg:pt-36 lg:justify-between  pt-26  text-white ">
          <div className="pt-8  flex flex-col gap-3  lg:w-[50%]">
            <h1 className="text-[40px] lg:text-6xl   font-heading text-amber-500  leading-tight ">
              Shaping Minds. Building Futures.
            </h1>
            <p className="w-76 lg:w-[80%] font-sans font-normal  ">
              Empowering students with knowledge, confidence, and skills to
              succeed in academics and beyond.
            </p>
            <div>
              <button className=" border border-bg-white font-sans mt-4 font-medium  px-6 py-3 rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:bg-neutral-200 hover:text-black hover:translate-y-1 ">
                Start Your Journey
              </button>
            </div>
          </div>
          <div className="bg-amber-300 relative overflow-hidden w-full h-48 lg:w-[45%] lg:h-118  rounded-xl group">
            <Image
              src="/images/hero-image-1.jpeg"
              alt="home-image"
              width={900}
              height={200}
              className="transition-all scale-120 lg:scale-200 translate-y-4 lg:translate-y-36 lg:-translate-x-14 duration-500 ease-in-out group-hover:grayscale group-hover:scale-130 lg:group-hover:scale-210"
            />
          </div>
        </div>
      </div>
      {/* Hero section end */}
      <div className="px-4 lg:px-44 h-screen">
        about
      </div>
    </main>
  );
}
