"use client";
import React, { useEffect, useState } from "react";
import Fetcher from "./Fetcher";
 
import YouMayAlsoLikeSection from "./YouMayAlsoLikeSection";
interface ApiResponse {
  categories: any[]; // Define the type of categories if needed
  coins: Coin[];
  nfts: any[]; // Define the type of nfts if needed
}

export interface Coin {
  item: {
    coin_id: number;
    data: {
      price: string;
      price_btc: string;
      price_change_percentage_24h: any; // Define the correct type if available
      market_cap: string;
      market_cap_btc: string;
      // price_change_percentage_24h: any;
      sparkline: string;
      total_volume: string;
      total_volume_btc: string;
      // Add more properties as needed
    };
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

const YouMayAlsoLike = () => {
  const [res, setRes] = useState<ApiResponse | null>(null);

  //   console.log(res)
  //   const percentageChangeIn24h = bitcoin.usd_24h_change || 0;
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
 
  if (!res) {
    // Display loading state
    return <div className="">loading...</div>;
  }

  return (
    <div className=" lg:p-14 h-full bg-white  rounded-lg  flex flex-col gap-5  w-full   relative ">
       
      <YouMayAlsoLikeSection  title="You May sammed Also Like" response={res}/>
      <YouMayAlsoLikeSection  title="Trending Coins" response={res}/>
    
    </div>
  );
};

export default YouMayAlsoLike;
