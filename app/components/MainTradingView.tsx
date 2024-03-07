"use client";
import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import Image from "next/image";
import bitcoins from "@/public/bitcon.svg";
import Fetcher from "./Fetcher";

type Props = {};

type BitcoinApiResponse = {
  bitcoin: {
    inr: number;
    inr_market_cap: number;
    inr_24h_vol: number;
    inr_24h_change: number;
    usd: number;
    usd_market_cap: number;
    usd_24h_vol: number;
    usd_24h_change: number;
  };
};

const MainTradingView = (props: Props) => {
  const [res, setRes] = useState<BitcoinApiResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Fetcher(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=2"
        );
        setRes(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (!res) {
    // Display loading state
    return <div>Loading...</div>;
  }

  const { bitcoin } = res;
  const percentageChangeIn24h = bitcoin.usd_24h_change || 0;

  const formattedChange =
    (percentageChangeIn24h >= 0 ? "+" : "") +
    percentageChangeIn24h.toFixed(2) +
    "%";
  const colorClass =
    percentageChangeIn24h < 0
      ? "bg-[#FEF0EE] text-red-500"
      : "bg-[#F1FBF7] text-green-500";

  return (
    <div className="w-full min-w-full flex bg-white p-3  md:p-5 rounded-xl gap-5 flex-col">
      <div className="text-2xl w-full leading-[28px] justify-start items-center font-semibold flex flex-row">
        <div className="w-full flex flex-row gap-2 items-center">
          <Image
            src={bitcoins}
            width={200}
            height={200}
            className="w-[32px] md:w-fit h-full object-contain"
            alt="logo"
          />
         <span className="font-semibold text-[21px] md:text-2xl leading-[28px] ">
           Bitcoin{" "}
          </span>
          <span className="font-[600] text-sm md:text-[16px] pt-1 text-[#5D667B]">
            BTC
          </span>
          <div className="px-2 md:px-4 ml-5 text-xs sm:text-sm md:text-base font-medium py-2 rounded-[8px] border-[1px] bg-[#768396] border-[#808A9D] text-white">
            {" "}
            Rank #1
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className={`flex flex-col gap-1   items-start justify-start `}>
          <div className="flex gap-5 items-center ">
            <span className="font-semibold text-[28px]  flex flex-col text-start items-start justify-start  gap-3 text-md">
              ${bitcoin.usd.toLocaleString()}
            </span>
            <div className="flex gap-2 items-center">
              <span className={`${colorClass} text-base px-2 py-1 rounded-lg`}>
                {formattedChange}
              </span>
              <span className="text-[#768396] text-sm font-medium">(24H)</span>
            </div>
          </div>
          <span className="font-medium text-base text-[#0B1426] ">
            ₹ {bitcoin.inr.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="h-[400px] lg:h-[688px] border-none">
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default MainTradingView;
