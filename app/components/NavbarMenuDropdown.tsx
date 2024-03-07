 

import React, { Dispatch, SetStateAction } from "react";
 
import Link from "next/link";
interface NavbarMenuDropdownProps {
    isMenuClicked: boolean;
    setIsMenuClicked: Dispatch<SetStateAction<boolean>>;
  }
  
  const NavbarMenuDropdown: React.FC<NavbarMenuDropdownProps> = ({ isMenuClicked, setIsMenuClicked }) => {
    return (
    <div
      className={`fixed top-16 transition-all ease-in-out duration-200 delay-200 left-0 right-0 bottom-0 overflow-y-auto bg-white z-50 ${
        isMenuClicked
          ? "flex flex-col gap-6 p-5 font-primaryMedium text-lg transition-transform duration-500"
          : "hidden"
      } `}
      onClick={()=>setIsMenuClicked(prev=> false)}
      style={{
        transition: "ease-in-out",
        transitionDuration: "300",
        transform: isMenuClicked ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Link href={"#"} className="text-inherit border-b-[1px] border-gray-300 pb-1  decoration-inherit">
        <p className="font-semibold text-base leading-5 tracking-[-1%] text-[#0F1629]">
          Crypto Taxs
        </p>
      </Link>
      <Link href={"#"} className="text-inherit  border-b-[1px] border-gray-300 pb-1 decoration-inherit">
        <p className="font-semibold text-base leading-5 tracking-[-1%] text-[#0F1629]">
          Free tools
        </p>
      </Link>
      <Link href={"#"} className="text-inherit border-b-[1px] border-gray-300 pb-1  decoration-inherit">
        <p className="font-semibold text-base leading-5 tracking-[-1%] text-[#0F1629]">
          Resource Center
        </p>
      </Link>

      <Link href={"/"} className="md:hidden">
        <div className="w-full md:w-[13rem] button-hover h-[44px] xl:h-[52px] border animate-glow rounded-[4px] border-primary-brown flex justify-center items-center relative z-1 ">
          <button className="px-3 w-full flex gap-x-3 text-center justify-center items-center py-3 rounded-lg bg-gradient-to-r font-semibold text-base leading-[20px] tracking-[-1%] text-[#FFFFFF] from-[#2870EA] to-[#1B4AEF]">
            Get Started{" "}
           
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NavbarMenuDropdown;
