import Image, { StaticImageData } from "next/image";
import React from "react";
import { Coin } from "./YouMayAlsoLike";

type Props = {
  CoinImage?: string | StaticImageData;
  CoinName?: string;
  CoinChanges?: any;
  Price?: any;
  GraphImage?: string | StaticImageData;
  coin?: Coin;
};

const TrendingCoinCard = (props: Props) => {
  const { coin } = props;

  let percentageChangeIn24h = coin?.item.data.price_change_percentage_24h.usd;

  const formattedChange =
    (percentageChangeIn24h >= 0 ? "+" : "") +
    percentageChangeIn24h.toFixed(2) +
    "%";
  const colorClass =
    percentageChangeIn24h < 0
      ? "bg-[#FEF0EE] text-red-500"
      : "bg-[#F1FBF7] text-green-500";

  return (
    <div className="p-4 bg-white border-[2px] border-[#E3E3E3] rounded-lg max-h-[160px] min-w-[262px]  h-full w-full">
      <div className="w-full h-full flex flex-col justify-center gap-3 items-start">
       <div className="flex flex-col">
        <div className="flex flex-row gap-1 mb-2 justify-start w-fit h-full items-center">
          <Image
            src={coin?.item.small || ""}
            width={200 / 2}
            height={200 / 2}
            className="w-[26px] rounded-full h-full object-contain"
            alt="logo"
          />
          <h1 className="text-base text-[#202020]">{coin?.item.symbol}</h1>

          <div className="flex gap-2 items-center">
            <span className={`${colorClass} text-xs px-2 py-1 rounded-lg`}>
              {formattedChange}
            </span>
          </div>
        </div>

        <div className="text-sm line-clamp-1 font-medium leading-[24px] text-[#171717]">{coin?.item.data.price.toLocaleString()}</div>
        </div>
        <div className="w-full items-center justify-center flex ">

        <Image
          src={coin?.item.data.sparkline || ""}
          width={200}
          height={200}
          className="w-fit h-full flex justify-center   object-contain"
          alt="logo"
          />
          </div>
      </div>
    </div>
  );
};

export default TrendingCoinCard;
