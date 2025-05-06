"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/imag/img1.jpg",
  "/imag/img2.jpg",
  "/imag/img3.jpg",
  "/imag/img4.jpg",
  "/imag/img5.jpg",
  "/imag/img6.jpg",
  "/imag/img7.jpg",
  "/imag/img8.jpg",
  "/imag/img9.jpg",
  "/imag/img10.jpg",
];

const Products = () => {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px]">
        {/* Background Swiper */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-xl"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 w-full h-[300px] md:h-[400px] overflow-hidden md:px-60 md:py-10 px-5 py-7 backdrop-blur-3xl">
          <div className="relative flex items-center w-full h-auto mb-4 backdrop-blur-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl text-[#292929]">
              Our Products :
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-full">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-xl"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Products;
