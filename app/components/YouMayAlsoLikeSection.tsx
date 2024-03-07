"use client";
import React, { useEffect, useRef, useState } from "react";
import TrendingCoinCard from "./TrendingCoinCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import leftArrowButton from "@/public/leftarrowbutton.svg";
import rightArrowButton from "@/public/rightarrowbutton.svg";
type Props = {
  response: coins;
  title?:string;
};

interface coins {
  coins: Coin[];
}

export interface Coin {
  item: {
    coin_id: number;
    data: any;
    id: string;
    large: string;
    market_cap_rank: number;
    name: string;
    price_btc: number;
    score: number;
    slug: string;
    small: string;
    symbol: string;
    thumb: string;
     
  };
}

const YouMayAlsoLikeSection = ({title, response }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftScrollable, setIsLeftScrollable] = useState(false);
  const [isRightScrollable, setIsRightScrollable] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setIsLeftScrollable(container.scrollLeft > 0);
      setIsRightScrollable(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    handleScroll()
  }, [response]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 520; // Adjust the scroll amount as needed
      handleScroll();
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 520; // Adjust the scroll amount as needed
      handleScroll();
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col relative gap-5 w-full">
        <h1 className="text-lg md:text-2xl font-semibold leading--[26px] lg:leading-[30px]">
        {title}
        </h1>
        <div
          ref={scrollContainerRef}
          className="flex scroll-smooth no-scrollbar snap-x overflow-y-hidden gap-3 border-[#D3E0E6] transition-all overflow-x-auto ease-in-out duration-300"
        >
          {response &&
            response.coins.map((item: Coin, index: number) => (
              <TrendingCoinCard key={index} coin={item} />
            ))}
        </div>
        <button
          onClick={scrollLeft}
          disabled={!isLeftScrollable}
          className={`absolute  top-4 lg:left-[-30px]  left-0  z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none scroll-button ${
            isLeftScrollable ? "active" : "hidden"
          }`}
        >
          <Image
            src={leftArrowButton}
            width={40}
            height={40}
            alt="leftarrow"
            className={`w-[34px]  transition-all ${
              isLeftScrollable ? "" : "text-gray-300"
            }`}
          />
        </button>
        <button
          onClick={scrollRight}
          disabled={!isRightScrollable}
          className={`absolute top-4 shadow-sm lg:right-[-30px] right-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none scroll-button ${
            isRightScrollable ? "active" : "hidden"
          }`}
        >
          <Image
            src={rightArrowButton}
            width={40}
            height={40}
            alt="leftarrow"
            className={`w-[34px]  transition-all ${
              isLeftScrollable ? "" : "text-gray-300"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default YouMayAlsoLikeSection;
