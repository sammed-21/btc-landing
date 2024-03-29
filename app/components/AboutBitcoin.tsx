import React from "react";
import AboutHoldingBitcoin from "./AboutHoldingBitcoin";

type Props = {};

const AboutBitcoin = (props: Props) => {
  return (
    <div
      id="News Insights"
      className="bg-white scroll-mt-16 w-full gap-5 py-2 p-2 md:p-6 rounded-lg h-full relative flex flex-col"
    >
      <div className="w-full h-full relative   pb-2 flex flex-col gap-6">
        <h1 className="font-semibold text-2xl">About Bitcoin</h1>
        <div className="flex gap-2 flex-col">
          <>
            <h1 className="font-bold leading-[26px] text-[18px] text-[#0B1426]">
              What is Bitcoin?
            </h1>
            <p className="text-base text-[#3E424A] font-medium leading-[26px]">
              Bitcoin’s price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </>
          <>
            <h1 className="font-bold leading-[26px] text-[18px] text-[#0B1426]">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-base text-[#3E424A] font-medium leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
              <br />
              <br />
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
              <br />
              <br />
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </>
          <hr className="h-0.5 bg-[#C9CFDD]" />
        </div>
      </div>
      <AboutHoldingBitcoin />
    </div>
  );
};

export default AboutBitcoin;
