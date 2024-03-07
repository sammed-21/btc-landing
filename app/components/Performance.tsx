
'use client'
import React, { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";
import Image from "next/image";
import PeformanceItem from "./PeformanceItem";
import dot from "@/public/dot.svg";
import Fetcher from "./Fetcher";

type Props = {};
type BitcoinApiResponse = {
  bitcoin: {
    
    usd: number;
    usd_market_cap: number;
    usd_24h_vol: number;
    usd_24h_change: number;
  };
};
const URL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=2`
const Performance = (props: Props) => {
  const [res, setRes] = useState<BitcoinApiResponse | null>(null);

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await Fetcher(URL);
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
  
  return (
    <div id="Fundamentals" className="bg-white scroll-mt-10 w-full gap-5 py-2 p-2 md:p-6 rounded-lg h-full relative flex flex-col">
      <div className="w-full h-full relative flex flex-col gap-3 ">
        <h1 id="Fundamentals" className="font-semibold text-2xl">
          Performance
        </h1>

        <div className="flex w-full h-full flex-col gap-2 relative justify-center items-start">
          <RangeSlider  currentPrice={16930}/>
          <RangeSlider low="52W Low" minPrice={16930.22} maxPrice={49743.83} high="52W High"  />
        </div>
      </div>
      <div className="w-full h-full relative flex flex-col gap-8">
        <h1 className="text-[#44475B] flex gap-3 items-center text-lg leading-5">
          Fundamentals{" "}
          <Image
            width={20}
            height={20}
            src={dot}
            alt="Slider Thumb"
            className="w-fit h-full"
          />
        </h1>
        <div className="w-full flex flex-col sm:gap-5 lg::gap-10 relative md:flex-row ">
          <div className="w-full h-full relative flex flex-col">

          <PeformanceItem heading="Bitcoin Price" values={'$' + bitcoin.usd.toLocaleString()}/>
          <PeformanceItem heading="24h Low / 24h High" values={`$16382.07 / $16874.12`}/>
          <PeformanceItem heading="7d Low / 7d High"  values={`$16,382.07 / $16,874.12`}/>
          <PeformanceItem heading="Trading Volume" values={bitcoin.usd_24h_vol.toLocaleString()}/>
          <PeformanceItem heading="Market Cap Rank" values={`#1`}/>
        </div>
          <div className="w-full h-full relative flex flex-col">

          <PeformanceItem heading="Market Cap" values={ '$' + bitcoin.usd_market_cap.toLocaleString()}/>
          <PeformanceItem heading="Market Cap Dominance" values={`38.343%`}/>
          <PeformanceItem heading="Volume / Market Cap" values={bitcoin.usd_24h_change.toLocaleString()}/>
          <PeformanceItem heading="All-Time High" values={'$'+bitcoin.usd_24h_change.toLocaleString()} values2={'Nov 10, 2021 (about 1 year)'} percentage={75.6+'%'}/>
          <PeformanceItem heading="All-Time Low" values={'$'+bitcoin.usd_24h_change.toLocaleString()} values2={'Jul 06, 2013 (over 9 years)'} percentage={-24729.1+'%'}/>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Performance;

 