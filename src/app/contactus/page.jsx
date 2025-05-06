'use client';

import { useState } from "react";
import Image from "next/image";
import bg from "../imagess/bgimage.jpg";
import bgg from "../imagess/bgcontact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const position = [18.6329882978488, 73.83814076428382];

  return (
    <div className="w-full h-full ">
      <div className="relative inset-0 w-full h-[190px] md:h-[400px] -z-20">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-60"
        />
        <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>

        {/* Overlay Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#FFD700]">
          <span className="text-2xl font-semibold md:text-5xl">CONTACT US</span>
          <span>
            <span className="text-base text-white md:text-3xl"> Home /</span>
            <span className="text-base font-semibold md:text-3xl">
              {" "}
              Contact Us
            </span>
          </span>
        </div>
      </div>

      <div className="relative w-full h-full md:flex md:-z-20 ">
        <Image
          src={bgg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute w-full h-full bg-black opacity-80"></div>

        <div className="flex flex-col justify-center w-full h-full gap-10 px-10 py-6 my-10 text-white md:w-3/6 md:px-40 md:z-10 max-md:absolute">
          <h2 className="mb-6 text-2xl font-semibold text-center md:text-4xl">
            Contact Information
          </h2>
          <span className="flex items-center gap-4 ">
            <FontAwesomeIcon icon={faPhone} className="h-5" />
            <p className="flex flex-col ">
              <a className="text-white">Phone Number</a>
              <a className="text-gray-500 md:font-normal md:text-lg">
                +91 9822880200
              </a>
            </p>
          </span>
          <span className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="h-5" />
            <p className="flex flex-col ">
              <a className="text-white">E-Mail</a>
              <a className="text-gray-500 md:font-normal md:text-lg">
                MonicaArts.com
              </a>
            </p>
          </span>
          <span className="flex items-center gap-4 md:text-xl">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5" />
            <p className="flex flex-col ">
              <a className="text-white">Location</a>
              <a className="text-gray-500 md:font-normal md:text-lg">
                Indrayani Nagar Rd, S Block, MIDC, Bhosari, Pimpri-Chinchwad,
                Maharashtra 411026
              </a>
            </p>
          </span>
        </div>

        {/* form  */}
        <div className="w-full h-auto p-6 mx-auto my-10 rounded-lg md:w-3/6 md:z-10 ">
          <h2 className="mb-6 text-2xl font-semibold text-center text-white md:text-4xl">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

     <div className="h-[300px] w-full border p-5">
        <div className="flex flex-col w-full h-full ">
          {/* <div className="flex justify-center w-full h-full">
            <MapContainer
              center={position}
              zoom={15}
              className="w-full h-full rounded-lg shadow-lg"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>We are here!</Popup>
              </Marker>
            </MapContainer>
          </div> */}
        </div>
      </div>

      <div className="h-[150px] w-full md:h-[120px] flex items-center md:px-28 py-9 px-6">
        <span className="flex w-full h-full text-xl font-semibold md:text-2xl md:flex md:items-center md:justify-evenly">
          <a>Looking For best Industrial & Commercial Signages Solutions</a>
          <button className="text-white transition-colors duration-200 rounded-md md:w-44 md:h-14 bg-primary hover:bg-opacity-40 w-[180px] h-[30px] text-base mt-5 md:mt-0">
            Contact Us
          </button>
        </span>
      </div>
    </div>
  );
}