
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title?: string;
  percentage: string;
  className?: string;
};

const RangePercentage = (props: Props) => {
  const { percentage, className } = props;

  return (
    <div className="flex justify-center items-center overflow-hidden max-w-[553px] w-full gap-2 md:gap-5 h-full relative">
      <div className="flex flex-col items-center justify-start w-fit">
        <span className="font-normal mb-3 text-sm whitespace-nowrap">
          {props.title || "Today's Low"}
        </span>
      </div>
      <div className="w-full h-full relative">
        <dl>
          <dd className="flex min-w-min items-center mb-3">
            <div className="w-full flex items-center gap-3 relative rounded me-2">
              <div
                className={twMerge('px-1 w-fit bg-red-300 h-2 rounded', className)}
                style={{ width: `${percentage}%` }} // Set width based on percentage
              ></div>
              <span className="text-base leading-[22px] font-medium text-[#7C7E8C]">
                {percentage}%
              </span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default RangePercentage;
