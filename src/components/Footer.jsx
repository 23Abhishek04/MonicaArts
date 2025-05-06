"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import logo from "./assets/LOGOpng.png";
import logoo from "./assets/weblogo.png";
import footerbg from "./assets/footerbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const Footer = () => {
  const position = [18.6329882978488, 73.83814076428382];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="relative w-full h-auto text-gray-500 ">
      <div className="absolute inset-0 -z-10">
        <Image
          src={footerbg}
          alt="Background"
          fill
          className="object-cover opacity-80"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <div className="relative z-20 flex flex-col w-full h-auto px-5 pt-10 pb-10 md:flex-row md:pr-10 justify-evenly">
        <div className="flex items-center justify-center w-auto pb-10 md:pb-32">
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>
        <nav className="w-full md:w-[300px] flex flex-col gap-4 p-5">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Our Products
          </h2>
          <a className="text-base font-medium md:text-lg">Sign Board</a>
          <a className="text-base font-medium md:text-lg">Metal Name Plates</a>
          <a className="text-base font-medium md:text-lg">ACP Signages</a>
          <a className="text-base font-medium md:text-lg">Name Boards</a>
          <a className="text-base font-medium md:text-lg">Vinyl Paintings</a>
          <a className="text-base font-medium md:text-lg">Totem Paintings</a>
        </nav>
        <address className="w-full md:w-[300px] p-5 gap-4 flex flex-col not-italic">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Contact Info
          </h2>
          <p className="flex items-center gap-5 text-base font-medium md:text-lg">
            <FontAwesomeIcon icon={faPhone} className="h-5" />
            <a href="tel:+919822880200" className="hover:text-gray-300">
              +91 9822880200
            </a>
          </p>
          <p className="flex items-center gap-5 text-base font-medium md:text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="h-5" />
            <a href="mailto:mail.com" className="hover:text-gray-300">
              MonicaArts.com
            </a>
          </p>
          <p className="flex items-start gap-5 text-base font-medium md:text-lg">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 h-7" />
            Indrayani Nagar Rd, S Block, MIDC, Bhosari, Pimpri-Chinchwad,
            Maharashtra 411026
          </p>
        </address>
        <div className="w-full md:w-[300px] flex flex-col p-5 ">
          <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
            Location
          </h2>
          {/* <div className="flex justify-center w-full md:w-[300px]">
            {isClient && (
              <MapContainer center={position} zoom={15} className="w-full rounded-lg shadow-lg h-60">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                  <Popup>We are here!</Popup>
                </Marker>
              </MapContainer>
            )}
          </div> */}
        </div>
      </div>
      
      <div className="flex items-center justify-center md:w-full">


        <div className="bottom-0 z-20 flex flex-col items-center justify-center w-full py-3 font-semibold border-t-2 bg-opacity-80 md:w-[1400px]">
          <p>© 2024 Balaji Art's. All Rights Reserved.</p>
          <p>Designed & Developed By:</p>
          <Image
            src={logoo}
            alt="logo"
            width={150}
            height={100}
            className="mt-2"
          />
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
