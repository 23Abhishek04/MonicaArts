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
        { length: 12 },
        (_, i) => `/image/Fire/img${i + 1}.jpg`
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
          <span className="text-2xl font-bold md:text-5xl">Fire & Safety Signs</span>
          <span>
            <span className="text-base text-white md:text-3xl"> Home /</span>
            <span className="text-base font-bold md:text-3xl"> Products</span>
          </span>
        </div>
      </div>

      <div className="w-full md:h-[300px] flex items-center justify-center bg-gray-100">
        <div className="md:w-[1150px] md:h-[300px] flex flex-col  md:text-lg gap-3 justify-center w-full md:px-0 px-10">
          <h1 className="font-medium text-gray-500 ">
          Fire and safety signs are crucial tools that ensure the well-being of individuals by delivering clear and immediate guidance about hazards, emergency actions, and safety equipment. They play a key role in accident prevention and emergency response.
          </h1>
          <span>
            <a className="font-bold">⚠️  Prevent Accidents: </a> Warn individuals of potential hazards to reduce the risk of accidents and injuries.
          </span>
          <span>
            <a className="font-bold">🚨 Guide During Emergencies: </a> Offer clear instructions and directions that support safe, efficient evacuations during crises.
          </span>
          <span>
            <a className="font-bold">🧠Enhance Safety Awareness: </a>{" "}
            Frequent exposure to safety signs cultivates a safety-first mindset across teams and communities.
          </span>
          <span>
            <a className="font-bold">📜 Legal Compliance: </a> Ensure organizations meet required safety standards, helping to avoid penalties and legal complications.
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
