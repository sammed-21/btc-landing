import React from "react";
import AboutBitcoinCard from "./AboutBitcoinCard";
import bitcoin1 from "@/public/bitcoin1.svg";
import bitcoin2 from "@/public/bitcoin2.svg";
type Props = {};

const AboutHoldingBitcoin = (props: Props) => {
  return (
    <div
      id="Sentiments"
      className="bg-white w-full overflow-hidden gap-5  h-full relative flex flex-col"
    >
      <h1 className="font-semibold text-2xl">Already Holding Bitcoin?</h1>
      <div className="flex w-full justify-center flex-col xl:flex-row gap-4 ">
        <AboutBitcoinCard
          image={bitcoin1}
          title="Calculate your Profit"
          button="Check Now"
        />
        <AboutBitcoinCard
          className="bg-gradient-to-r from-[#FF9865]  to-[#EF3031]"
          image={bitcoin2}
          title="Calculate your tax liability"
          button="Check Now"
        />
      </div>
      <hr className="h-0.5 md:flex hidden bg-[#C9CFDD]" />
      <p className="text-base hidden md:flex font-medium leading-[26px] text-[#3E42A]">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default AboutHoldingBitcoin;
