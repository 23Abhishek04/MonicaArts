"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../imagess/bgimage.jpg";

const page = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure images are only loaded on the client-side
      const loadedImages = Array.from(
        { length: 8 },
        (_, i) => `/image/Safe/img${i + 1}.jpg`
      );
      setImages(loadedImages);
    }
  }, []);

  return (
    <div className="w-full h-full ">
      <div className="relative inset-0 w-full h-[190px] md:h-[400px] -z-20">
        <Image
          src={bg}
          alt="Background"
          fill
          quality={100}
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#FFD700]">
          <span className="text-2xl font-bold md:text-5xl">Safety Posters</span>
          <span>
            <span className="text-base text-white md:text-3xl"> Home /</span>
            <span className="text-base font-bold md:text-3xl"> Products</span>
          </span>
        </div>
      </div>

      <div className="w-full md:h-[300px] flex items-center justify-center bg-gray-100">
        <div className="md:w-[1150px] md:h-[300px] flex flex-col  md:text-lg gap-3 justify-center w-full md:px-0 px-10">
          <h1 className="font-medium text-gray-500 ">
            Safety posters are powerful visual tools designed to communicate
            crucial safety information across workplaces, schools, public areas,
            and more. By raising awareness, they encourage safe behaviors and
            ensure adherence to safety regulations.
          </h1>
          <span>
            <a className="font-bold">🧼Handwashing Techniques: </a> Clear
            illustrations showing the correct steps for handwashing to help
            prevent the spread of germs.
          </span>
          <span>
            <a className="font-bold">🚪 Emergency Exit Routes: </a> Visual maps
            indicating evacuation routes and designated assembly points during
            emergencies.
          </span>
          <span>
            <a className="font-bold">🔒Lockout/Tagout Procedures: </a>{" "}
            Step-by-step instructions for safely de-energizing and securing
            machinery before maintenance or repair work.
          </span>
          <span>
            <a className="font-bold">🌡️Heat Stress Awareness: </a> Information on
            recognizing the signs of heat stress, along with preventative
            measures for working in high temperatures.
          </span>
        </div>
      </div>

      <div className="min-h-screen px-4 py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
