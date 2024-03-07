
"use client";
import React, { useEffect, useState } from "react";
import Fetcher from "./Fetcher";
import Image, { StaticImageData } from "next/image";
import Polygon from "@/public/Polygon 2.svg";
import Polygon1 from "@/public/Polygon1.svg";
interface ApiResponse {
  coins: Coin[];
}

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

const TrendingCoinRightComponent: React.FC = () => {
  const [res, setRes] = useState<ApiResponse | null>(null);

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
  

  return (
    <div className="w-full max-lg:p-4 lg:p-6 max-lg:pb-4 h-full relative">
      <h2 className="text-[24px] mb-6 font-semibold leading-[28px] text-[#0F1629]">Trending Coins (24h)</h2>
      {res && res.coins && res.coins.length > 0 && (
        <ul>
          {res.coins.slice(0, 3).map((coin, index) => (
            <>
              <li key={index} className="flex py-2 justify-between w-full items-center">
                <div className="flex flex-wrap">
                  <Image
                    src={coin?.item.small || ""}
                    width={200 / 2}
                    height={200 / 2}
                    className="w-[26px] mr-2 rounded-full h-full object-contain"
                    alt="logo"
                  />

                  <h1 className="text-base leading-12 font-medium">
                    {" "}
                    {coin.item.name}
                  </h1>
                  <p className="text-base leading-12 font-medium">
                    {" "}
                    ({coin.item.symbol})
                  </p>
                </div>
                <p
                  className={`w-fit flex justify-center items-center ${
                    coin.item.data.price_change_percentage_24h.usd < 0
                      ? "bg-[#FEF0EE] text-red-500"
                      : "bg-[#F1FBF7] text-green-500"
                  }`}
                >
                  {coin.item.data.price_change_percentage_24h.usd < 0 ? (
                    <Image
                      src={Polygon1 || ""}
                      width={10}
                      height={10}
                      className="w-fit rotate-180 rounded-full h-full object-contain"
                      alt="red arrow"
                    />
                  ) : (
                    <Image
                      src={Polygon || ""}
                      width={10}
                      height={10}
                      className="w-fit rounded-full h-full object-contain"
                      alt="logo"
                    />
                  )}
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </p>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrendingCoinRightComponent;
