import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image?: string | StaticImageData;
  name?: string;
  designation?: string;
  description?: string;
};

const TeamsCard = (props: Props) => {
  return (
    <div className="w-full p-3  rounded-lg bg-[#E8F4FD] min-h-[177px] flex gap-4 lg:gap-5 flex-col items-center justify-center md:flex-row">
      <div className="w-fit lg:p-4 h-full flex flex-col gap-3   justify-center items-center">
        <Image
          width={800 / 2}
          height={600 / 2}
          src={props.image || ""}
          alt="Slider Thumb"
          className="min-w-[100px] w-full h-full rounded-lg object-contain"
        />
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[15px] text-center leading-[19px] font-semibold">
            {props.name}
          </h1>
          <p className="text-xs text-center text-[#788F9B] font-medium">
            {props.designation}
          </p>
        </div>
      </div>
      <div className="w-full h-full text-sm font-normal leading-[25px] relative">
        {props.description}
      </div>
    </div>
  );
};

export default TeamsCard;
