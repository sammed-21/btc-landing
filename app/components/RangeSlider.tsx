// components/RangeSlider.tsx
"use client"; // components/RangeSlider.tsx// components/RangeSlider.tsx

import React, { useState } from "react";
import uparrow from "@/public/uparrowslider.svg";
import Image from "next/image";
interface RangeSlider {
  low?: string;
  high?: string;
  minPrice?: number;
  maxPrice?: number;
  currentPrice?: number;
}
const RangeSlider: React.FC<RangeSlider> = ({
  low,
  high,
  currentPrice,
  minPrice,
  maxPrice,
}) => {
  const [price, setPrice] = useState<number>(currentPrice || 47900);
  const minPrices = minPrice || 46903;
  const maxPrices = maxPrice || 49343;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  return (
    <div className="container flex justify-between items-center overflow-hidden gap-2 md:gap-5 max-w-screen-xl w-full h-full min-h-[89px]  relative">
      <div className="flex flex-col basis-[15%] space-y-2 w-fit">
        <span className="font-normal text-sm  whitespace-nowrap ">
          {low || "Today's Low"}
        </span>
        <span className="font-medium text-[15px] md:text-base text-[#44475B]">
          {minPrices}
        </span>
      </div>
      <div className="md:max-w-[300px] basis-[40%] min-[570px]:basis-[70%] lg:max-w-[582px] min-w-max relative w-full  h-full">
        <input
          type="range"
          id="priceRange"
          min={minPrice}
          max={maxPrice}
          step={1}
          value={price}
          onChange={handleChange}
          className="w-full h-1 range-bg
        
        
                 rounded-lg
                  appearance-none"
        />
        <div
          className="absolute h-10 z-50 w-fit gap-2 top-5 flex-col items-center justify-center flex  "
          style={{
            left: `calc(${
              (price - minPrices) / (maxPrices - minPrices)
            } * (100% - 20px) + 10px)`,
          }}
        >
          <Image
            width={20}
            height={20}
            src={uparrow}
            alt="Slider Thumb"
            className="w-fit h-full"
          />

          <span className="text-md   text-gray-600 ">${price}</span>
        </div>
      </div>
      <div className="flex text-right basis-[15%] flex-col space-y-2 w-fit">
        <span className="font-normal text-sm whitespace-nowrap ">
          {high || "Today's High"}
        </span>
        <span className="font-medium text-[15px] md:text-base text-[#44475B]">
          {maxPrices}
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
