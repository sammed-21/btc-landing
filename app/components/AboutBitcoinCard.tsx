import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import rightarrow from "@/public/Arrow - Right.svg";
type Props = {
  className?: string;
  image?: string | StaticImageData;
  title?: string;
  button?: string;
};

const AboutBitcoinCard = (props: Props) => {
  return (
    <div
      className={twMerge(
        "w-full p-3 flex flex-row gap-7 rounded-lg bg-gradient-to-r from-[#79F1A4] h-full max-h-[151px] min-h-[151px] to-[#0E5CAD]",
        props.className
      )}
    >
        <Image
          width={500/2}
          height={600/2}
          src={props.image || ''}
          alt="Slider Thumb"
          className="w-fit  object-contain"
        />
      <div className="flex max-w-[195px] w-full flex-col gap-4 items-start justify-center">
        <h1 className="text-[#FFFFFF] text-[20px] font-bold">{props.title}</h1>
        <button
          type="button"
          className="py-1 w-fit flex font-semibold gap-2 rounded-lg px-2 bg-white text-sm leading-[28px] text-[#0F1629]"
        >
          {props.button}
          <Image
            width={20}
            height={20}
            src={rightarrow}
            alt="Slider Thumb"
            className="w-5 h-full object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default AboutBitcoinCard;
