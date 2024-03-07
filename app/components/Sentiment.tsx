"use client";
 
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dot from "@/public/dot.svg";
import SentimentCardSection from "./SentimentCardSection";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import RangePercentage from "./RangePercentage";

const Sentiment = () => {
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
    if (scrollContainerRef.current) {
      handleScroll();
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 500;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 500;
    }
  };

  return (
    <div id="Sentiments" className="bg-white scroll-mt-32 w-full  gap-5 py-2 p-2 md:p-6 rounded-lg h-full relative flex flex-col">
      <div className="w-full h-full relative flex flex-col gap-3">
        <h1 className="font-semibold text-2xl">Sentiment</h1>
        <div className="w-full flex flex-col gap-5 h-full relative">
          <h1 className="text-[#44475B] flex gap-3 items-center text-lg leading-5">
            Key Events{" "}
            <Image
              width={20}
              height={20}
              src={dot}
              alt="Slider Thumb"
              className="w-fit h-full"
            />
          </h1>

          <div className="w-full relative h-fit ">
            <div
              className="no-scrollbar  scroll-mx-5 cursor-grab snap-x snap-mandatory flex-row gap-8 overflow-x-auto scroll-smooth pb-4 active:cursor-grabbing scroll-pr-[calc(80vw-454px)] pr-[calc(80vw-484px)] flex relative"
              ref={scrollContainerRef}
            >
              <SentimentCardSection />
            </div>
          </div>
          <button
            onClick={scrollLeft}
            disabled={!isLeftScrollable}
            className={`absolute top-3 start-0 z-30 hidden lg:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none scroll-button ${
              isLeftScrollable ? "active" : "hidden"
            }`}
          >
            <div
              className={`p-3 rounded-full bg-white transition-all ${
                isRightScrollable ? "" : "text-gray-300"
              }`}
            >
              <AiOutlineLeft />
            </div>
          </button>
          <button
            onClick={scrollRight}
            disabled={!isRightScrollable}
            className={`absolute top-3 end-0 z-30 hidden lg:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none scroll-button ${
              isRightScrollable ? "active" : ""
            }`}
          >
            <div
              className={`p-3 rounded-full bg-white transition-all ${
                isRightScrollable ? "" : "hidden"
              }`}
            >
              <AiOutlineRight />
            </div>
          </button>
        </div>
        <div className="bg-white flex flex-col gap-5 w-full h-full relative">
          <h1 className="text-[#44475B] flex gap-3 items-center text-lg leading-5">
            Analyst Estimates
            <Image
              width={20}
              height={20}
              src={dot}
              alt="Slider Thumb"
              className="w-fit h-full"
            />
          </h1>

          <div className="flex flex-row gap-5 w-full h-ful justify-start items-center">
            <div className="max-w-[116px] w-full bg-[#EBF9F4] min-h-[120px]  lg:min-h-[120px] flex items-center justify-center max-h-[120px] h-full rounded-full">
              <h1 className="text-[36px] text-[#0FBA83] text- font-medium flex items-center justify-center">
                76{" "}
                <span
                  className="text-base text-[#0FBA83] font-medium"
                >
                  %
                </span>
              </h1>
            </div>
            <div className="w-full  justify-start items-start flex h-fit flex-col ">

            <RangePercentage title="Buy" className="bg-[#00B386]" percentage="76" />
            <RangePercentage title="Hold" className="bg-[#C7C8CE]" percentage="3" />
            <RangePercentage title="Sell" className="bg-[#F7324C]" percentage="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
