import Image from "next/image";
import TradingViewWidget from "./components/TradingViewWidget";
import MainTradingView from "./components/MainTradingView";
import RangeSlider from "./components/RangeSlider";
import Performance from "./components/Performance";

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

        <div className="w-full flex md:flex-row flex-col gap-5 justify-start items-start">
          <div className="max-w-screen-[1440px]  w-full md:basis-[70%] flex flex-col  gap-5 justify-center items-start h-full  ">
            <MainTradingView />
            <div className="  w-full ">
              {" "}
              <Performance />
            </div>
          </div>

          {/* right side part */}
          <div className="basis-full bg-white md:basis-[30%] w-full h-full ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            reprehenderit, dicta repellat, sequi atque aperiam aliquam ratione
            eveniet animi totam enim natus quam architecto itaque unde similique
            illum! Temporibus, minus!
          </div>
        </div>
      </div>
    </div>
  );
}
