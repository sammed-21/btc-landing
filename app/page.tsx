import Image from "next/image";
import TradingViewWidget from "./components/TradingViewWidget";
import MainTradingView from "./components/MainTradingView";
import RangeSlider from "./components/RangeSlider";
import Performance from "./components/Performance";
import SubNav from "./components/SubNav";
import Sentiment from "./components/Sentiment";
import AboutBitcoin from "./components/AboutBitcoin";

export default function Home() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="w-full   h-full relative">
      <div className="w-full h-full flex flex-col justify-start items-start gap-5">
        <div className="flex mt-5 gap-8 md:gap-10">
          <div className="w-full">
            <span className="font-normal text-sm text-[#3E5765]">
              Cryptocurrencies
            </span>{" "}
            {`>>`} <span className="font-medium text-sm ">Bitcoin</span>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-5 justify-start items-start">
          <div className="w-full lg:w-[70%] flex flex-col gap-5 justify-center items-start h-full">
            <MainTradingView />
            <div className="w-full flex flex-col gap-5">
              <SubNav />
              <Performance />
              <Sentiment />
              <AboutBitcoin/>
            </div>
          </div>

          {/* right side part */}
          <div className="bg-white w-full lg:w-[30%] h-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatibus inventore soluta fugit corrupti dolor, asperiores
            itaque officiis blanditiis exercitationem quidem nobis corporis
            laudantium tenetur praesentium, quis quod eum consequatur?
          </div>
        </div>

        {/* right side part */}
      </div>
    </div>
  );
}
