'use client';
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-screen h-screen">
          <div className="relative inset-0 w-full h-[190px] md:h-[400px] -z-20">
            <Image
              src="/imagess/bgimage.jpg"
              alt="Background"
              fill
              quality={100}
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>
    
            {/* Overlay Layer */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#FFD700]">
              <span className="text-2xl font-bold md:text-5xl">Granite Name Plates</span>
              <span>
                <span className="text-base text-white md:text-3xl"> Home /</span>
                <span className="text-base font-bold md:text-3xl"> Products</span>
              </span>
            </div>
          </div>
        </div>
  )
}

export default page
