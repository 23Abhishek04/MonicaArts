import React from "react";
import Image from "next/image";
import bg from "./assets/textbg.webp";

const Baner = () => {
  return (
    <div className="relative h-[180px] md:h-[120px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        quality={100}
        priority
        className="object-cover opacity-60"
      />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-6 text-center text-white md:flex-row md:justify-evenly md:px-28 md:text-left backdrop-blur-sm ">
        <span className="max-w-xl text-lg font-semibold leading-snug text-black md:text-2xl">
          Looking For Best Industrial & Commercial Signages Solutions
        </span>
        <button className="mt-4 md:mt-0 bg-primary hover:bg-opacity-40 text-white text-base md:text-lg rounded-md w-[180px] h-[40px] md:w-44 md:h-14 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Baner;

