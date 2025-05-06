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
        { length: 10 },
        (_, i) => `/image/Metal/img${i + 1}.jpg`
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
          <span className="text-2xl font-bold md:text-5xl">Metal Name Plates</span>
          <span>
            <span className="text-base text-white md:text-3xl"> Home /</span>
            <span className="text-base font-bold md:text-3xl"> Products</span>
          </span>
        </div>
      </div>

      <div className="w-full md:h-[300px] flex items-center justify-center bg-gray-100">
        <div className="md:w-[1150px] md:h-[300px] flex flex-col  md:text-lg gap-3 justify-center w-full md:px-0 px-10">
          <h1 className="font-medium text-gray-500 ">
          Metal name plates are a reliable solution for identification, labeling, and branding across a variety of environments—from offices and factories to public spaces. Their sleek design and lasting strength make them a preferred choice for both functional and aesthetic purposes.
          </h1>
          <span>
            <a className="font-bold">🛡️ Durability: </a> Engineered to resist wear, corrosion, and harsh environmental conditions for long-term use.
          </span>
          <span>
            <a className="font-bold"> 🔧 Versatility: </a> Ideal for diverse applications—indoors or outdoors, personal or industrial.
          </span>
          <span>
            <a className="font-bold">🏢 Professional Appearance: </a>{" "}
            Adds a clean, polished look that elevates the professionalism of any space.
          </span>
          <span>
            <a className="font-bold">🎨 Customizability: </a> Available in a variety of materials, finishes, shapes, and production techniques to suit specific branding or labeling needs.
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
