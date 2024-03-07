"use client";
import React, { useEffect, useState } from "react";
import TrendingCoinCard from "./TrendingCoinCard";
import Fetcher from "./Fetcher";
import { log } from "console";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = {};
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
    // Add more properties as needed
  };
}

const YouMayAlsoLike = (props: Props) => {
  const [res, setRes] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Fetcher(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setRes(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

//   console.log(res)
  if (!res) {
    // Display loading state
    return <div>Loading...</div>;
  }

  //   const percentageChangeIn24h = bitcoin.usd_24h_change || 0;

  return (
    <div className=" lg:p-14 h-full bg-white  rounded-lg  flex flex-col gap-5  w-full   relative ">
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-2xl font-semibold leading-[30px]">
          You May Also Like
        </h1>
        {res && (
          <div className="flex no-scrollbar snap-x overflow-y-hidden gap-3 border-[#D3E0E6] transition-all   overflow-x-auto ease-in-out duration-300 ">
            {res.coins.map((item: Coin, index: number) => {
              // Return TrendingCoinCard component with necessary props
              return <TrendingCoinCard key={index} coin={item} />;
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-2xl font-semibold leading-[30px]">
          Trending Coins
        </h1>
        {res && (
          <div className="flex no-scrollbar snap-x overflow-y-hidden gap-3 border-[#D3E0E6] transition-all   overflow-x-auto ease-in-out duration-300 ">
            {res.coins.map((item: Coin, index: number) => {
              // Return TrendingCoinCard component with necessary props
              return <TrendingCoinCard key={index} coin={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
