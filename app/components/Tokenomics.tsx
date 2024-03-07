import React from "react";
import ChartCard from "./ChartCard";

type Props = {};

const Tokenomics = (props: Props) => {
  return (
    <div
      id="Tokenomics"
      className="bg-white !scroll-mt-14 w-full  gap-5 py-2 p-2 md:p-6 rounded-lg h-full relative flex flex-col"
    >
      <div className="w-full overflow-hidden h-full relative   pb-2 flex flex-col gap-6">
        <h1 className="font-semibold text-2xl">Tokenomics</h1>
        <div className="max-w-sm ] ">
          <ChartCard />
        </div>
        <p className="text-base font-medium leading-[26px] text-[#3E424A]">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
