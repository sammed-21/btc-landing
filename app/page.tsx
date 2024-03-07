import Image from "next/image";
import TradingViewWidget from "./components/TradingViewWidget";
import MainTradingView from "./components/MainTradingView";
import RangeSlider from "./components/RangeSlider";
import Performance from "./components/Performance";
import SubNav from "./components/SubNav";
import Sentiment from "./components/Sentiment";
import AboutBitcoin from "./components/AboutBitcoin";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import rightarrow from "@/public/Arrow - Right.svg";

import YouMayAlsoLike from "./components/YouMayAlsoLike";
import TrendingCoinCard from "./components/TrendingCoinCard";
import Rightmainimage from "@/public/rightmainimage.svg";
import TrendingCoinRightComponent from "./components/TrendingCoinRightComponent";
import Revel from "./components/Revel";

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
    <div className="w-full scroll-mt-20  h-full relative">
      <div className="w-full h-full flex flex-col justify-start items-start gap-5">
        <div className="flex mt-5 gap-8 md:gap-10">
          <div className="w-full">
            <span className="font-normal text-sm text-[#3E5765]">
              Cryptocurrencies
            </span>{" "}
            {`>>`} <span className="font-medium text-sm ">Bitcoin</span>
          </div>
        </div>

        <div className="w-full scroll-m-20 flex flex-col lg:flex-row gap-5 justify-start items-start">
          <div className="w-full mb-[56px] lg:w-[70%] flex flex-col gap-5 justify-center items-start h-full">
            <Revel>
              <MainTradingView />
            </Revel>
            <div className="w-full flex flex-col gap-5">
              <Revel>
                <SubNav />
              </Revel>
              <Revel>
                <Performance />
              </Revel>
              <Revel>
                <Sentiment />
              </Revel>
              <Revel>
                <AboutBitcoin />
              </Revel>
              <div className="w-full h-full hidden md:block">
                <Tokenomics />
              </div>
              <Team />
            </div>
          </div>

          {/* right side part */}
          <div className="flex flex-col gap-5 w-full lg:w-[30%] h-full">
            <Revel>
              <div className="bg-[#0052FE] flex  px-4 flex-col items-center justify-center  w-full h-fit rounded-lg ">
                <div className="lg:max-w-[327px] max-lg:p-3 flex flex-col gap-5 justify-center items-center my-4 lg:my-6 w-full h-full relative">
                  <h1 className="font-semibold max-lg:order-2 text-2xl lg:max-w-[268px] leading-10 text-center text-[#FFFFFF]">
                    Get Started with KoinX for FREE
                  </h1>
                  <p className="font-medium max-lg:max-w-xl text-sm max-lg:order-3 leading-[24px] text-center text-[#F2F2F2] ">
                    With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax
                    reports.
                  </p>
                  <Image
                    width={100}
                    height={100}
                    src={Rightmainimage}
                    alt="Slider Thumb"
                    className="w-fit max-lg:order-1 object-cover h-full"
                  />
                  <div className="w-full h-full relative max-lg:order-4 flex items-center justify-center ">
                    <button
                      type="button"
                      className="py-2 max-w-[237px] w-full text-center items-center justify-center flex font-semibold gap-2 rounded-lg px-3 bg-white text-sm leading-[28px] text-[#0F1629]"
                    >
                      Get Started for FREE
                      <Image
                        width={20}
                        height={20}
                        src={rightarrow}
                        alt="Slider Thumb"
                        className="w-5  h-full object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Revel>
            {/* top 3 trending coin */}
            <Revel>
              <div className="w-full hidden lg:flex rounded-lg mb-4  h-full bg-[#FFFFFF] relaitve  flex-col items-center justify-center ">
                <TrendingCoinRightComponent />
              </div>
            </Revel>
          </div>
        </div>

        {/* right side part */}
      </div>
    </div>
  );
}
