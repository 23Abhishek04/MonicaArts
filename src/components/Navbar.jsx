"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/LOGOpngg.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="fixed z-20 flex flex-col items-center justify-center w-full md:h-auto">
      <div className="w-full md:h-auto md:w-[1250px]">
        {/* Top Navbar */}
        <div className="hidden md:flex md:items-center md:w-full md:h-[50px] justify-center backdrop-blur-3xl rounded-b-3xl">
          <div className="flex items-center justify-between w-[1250px] h-[50px] px-9">
            <span className="flex items-center gap-4">
              <a className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="h-4" />
                +91 9822880200
              </a>
              <a className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="h-4" />
                MonicaArts.com
              </a>
            </span>

            <div className="flex gap-5 text-xl">
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-center w-full h-12 px-6 md:h-[80px] backdrop-blur-3xl md:px-0 rounded-b-3xl">
          <div className="flex items-center justify-between w-full h-12 md:h-[100px] md:w-[1250px] md:px-10">
            <Image src={logo} alt="logo" className="w-12 md:w-20" />

            <div className="items-center hidden w-full h-full text-lg font-bold text-white md:flex justify-evenly">
              <Link
                href="/"
                className="hover:text-[#D4AF37] transition-colors duration-200"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="hover:text-[#D4AF37] transition-colors duration-200"
              >
                ABOUT
              </Link>

              {/* Product Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                >
                  PRODUCTS <span >▼</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 w-48 mt-2 text-[#474747] bg-white bg-opacity-50 rounded-lg shadow-lg">
                   <Link
                      href="/products/RubberStamps"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Rubber Stamps
                    </Link>
                    <Link
                      href="/products/SignBoard"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Sign Boards
                    </Link>
                    <Link
                      href="/products/SafetyPosters"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Safety Posters
                    </Link>
                    <Link
                      href="/products/Fire&SafetySigns"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Fire & Safety Signs
                    </Link>
                    <Link
                      href="/products/MetalNamePlates"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Metal Name Plates
                    </Link>
                    <Link
                      href="/products/ModularSignages"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Modular Signages
                    </Link>
                    <Link
                      href="/products/ACPSignages"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      ACP Signages 
                    </Link>
                    <Link
                      href="/products/AcrylicSignages"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Acrylic Signages
                    </Link>
                    <Link
                      href="/products/GraniteNamePlates"
                      className="block px-4 py-2 hover:text-[#D4AF37]"
                    >
                      Granite Name Plates
                    </Link>
                   
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className="hover:text-[#D4AF37] transition-colors duration-200"
              >
                GALLERY
              </Link>
              <Link
                href="/client"
                className="hover:text-[#D4AF37] transition-colors duration-200"
              >
                CLIENT
              </Link>
              <Link
                href="/contactus"
                className="hover:text-[#D4AF37] transition-colors duration-200"
              >
                CONTACT US
              </Link>
            </div>

            <button className="hidden w-40 ml-8 font-bold text-white transition-colors duration-200 rounded-lg md:block h-14 bg-primary hover:bg-opacity-40">
              BROUCHER
            </button>

            {/* Mobile Menu Button */}
            <button
              className="block text-3xl text-white md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="fixed left-0 z-10 flex flex-col items-center w-full gap-4 p-4 text-lg font-bold text-black bg-white top-20 bg-opacity-90 backdrop-blur-md">
                <Link
                  href="/"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  ABOUT
                </Link>

                {/* Mobile Product Dropdown */}
                <div className="relative w-full text-center">
                  <button
                    onClick={toggleDropdown}
                    className="hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    PRODUCT <span >▼</span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute w-48 text-black transform -translate-x-1/2 bg-white rounded-lg shadow-lg left-1/2">
                      <Link
                        href="/products/RubberStamps"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Rubber Stamps

                      </Link>
                      <Link
                        href="/products/SignBoard"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Sign Boards

                      </Link>
                      <Link
                        href="/products/SafetyPosters"

                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Safety Posters

                      </Link>
                      <Link
                       href="/products/Fire&SafetySigns"


                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Fire & Safety Signs

                      </Link>
                      <Link
                        href="/products/MetalNamePlates"

                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Metal Name Plates

                      </Link>
                      <Link
                         href="/products/ModularSignages"

                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Modular Signages


                      </Link>
                      <Link
                        href="/products/ACPSignages"


                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        ACP Signages

                      </Link>
                      <Link
                        href="/products/AcrylicSignages"


                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Acrylic Signage

                      </Link>
                      <Link
                        href="/products/GraniteNamePlates"


                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        Granite Name Plates

                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/gallery"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  GALLERY
                </Link>
                <Link
                  href="/client"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  CLIENT
                </Link>
                <Link
                  href="/contactus"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  CONTACT US
                </Link>

                <div className="flex gap-4 mt-4 text-xl">
                  <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <FaFacebook />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.youtube.com" target="_blank">
                    <FaYoutube />
                  </a>
                </div>

                <button className="w-40 mt-4 font-bold text-white transition-colors duration-200 rounded-lg h-14 bg-primary hover:bg-opacity-40">
                  BROUCHER
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
