"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import NavbarMenuDropdown from "./NavbarMenuDropdown";
type Props = {};

const Navbar = (props: Props) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="bg-white sticky top-0 h-[64px] z-[999] flex justify-between px-[20px] md:px-[56px] lg:px-[72px] md:h-[80px] w-full border-b-[2px] border-[#DEDFE2]">
        <Image
          src={logo}
          width={200}
          height={200}
          className="w-fit h-full object-contain"
          alt="logo"
        />

        <div className="md:flex hidden flex-row items-center gap-4 xl:flex font-General-Sans leading-none">
          <Link href="/about" className="font-semibold text-base leading-5 tracking-[-1%] text-[#0F1629]"> Crypto Taxs </Link>
          <Link href="/student" className="font-semibold text-base leading-5 tracking-[-1%] text-[#0F1629]"> Free tools </Link>
          <Link href="/student" className="font-semibold text-base leading-5 tracking-[-1%] text-[#0F1629]"> Resource Center </Link>
          <button className="px-3 py-2 rounded-lg bg-gradient-to-r font-semibold text-base leading-[20px] tracking-[-1%] text-[#FFFFFF] from-[#2870EA] to-[#1B4AEF]">
            Get Started
          </button>

          <div className="z-30  flex relative font-General-Sans  items-center gap-2 xl:flex"></div>
        </div>
        <button
          className="z-30 absolute right-3 top-5 h-5 w-5 text-gray-700  [&>*]:h-0.5 [&>*]:rounded-full [&>*]:bg-gray-700 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out"
          onClick={handleMenuClick}
        >
          <div
            className={`w-5 ${
              isMenuClicked ? "translate-y-0.5 rotate-45" : "translate-y-2"
            } `}
          ></div>
          <div
            className={`${
              isMenuClicked ? "w-0 opacity-0" : "w-5 opacity-100"
            } `}
          ></div>
          <div
            className={`w-5 ${
              isMenuClicked ? "-translate-y-0.5 -rotate-45" : "-translate-y-2"
            } `}
          ></div>
        </button>
      </div>
      <div className="w-full h-fit transition-all ease-in-out duration-200 delay-200  relative">
        <NavbarMenuDropdown setIsMenuClicked={setIsMenuClicked} isMenuClicked={isMenuClicked} />
      </div>
    </>
  );
};

export default Navbar;
