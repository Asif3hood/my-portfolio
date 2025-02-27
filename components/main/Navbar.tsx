import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <>
      <ToastContainer
        className="!fixed !z-[10000]"
        position="top-right"
        autoClose={3000}
      />

      <div className="w-full h-[65px] fixed top-0 shadow shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[9999] px-5 md:px-20">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          {/* Logo */}
          <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={90}
              height={90}
              className="w-auto cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              AsifStack Dev
            </span>
          </a>

          {/* Navigation Links */}
          <div className="max-w-[500px] w-full h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex flex-wrap items-center justify-center w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-x-6">
              <a href="#about-me" className="cursor-pointer">
                About
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
              <a href="#contact" className="cursor-pointer">
                Contact
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-5 hidden md:flex">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
