"use client";
import { useState } from "react";
// import React, { useState } from "react";
// import { twMerge } from "tailwind-merge";

// type Props = {
//   title?: string;
//   percentage?: string;
//   className?: string;
// };

// const RangePercentage = (props: Props) => {
//   const [price, setPrice] = useState<number>(0);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPrice(Number(event.target.value));
//   };
//   return (
//     <div className="container flex justify-start items-center overflow-hidden w-full gap-2 md:gap-5  h-full   relative">
//       <div className="flex flex-col basis-[15%] space-y-2 w-fit">
//         <span className="font-normal text-sm  whitespace-nowrap ">
//           {props.title || "Today's Low"}
//         </span>
//       </div>
//       <div className="max-w-[553px] w-full">
//         <input
//           type="range"
//           id="priceRange"
//           min={0}
//           max={props.percentage}
//           step={1}
//           value={price}
//           onChange={handleChange}
//           className={twMerge('w-full h-1 rounded-lg                appearance-none',props.className)}
//         />
//       </div>
//     </div>
//   );
// };

// export default RangePercentage;import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title?: string;
  percentage: string;
  className?: string;
};

const RangePercentage = (props: Props) => {
  const [price, setPrice] = useState<any>(props.percentage);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };
  
 

  return (
    <div className="container flex justify-start items-center overflow-hidden w-full gap-2 md:gap-5 h-full relative">
      <div className="flex flex-col basis-[15%] space-y-2 w-fit">
        <span className="font-normal text-sm  whitespace-nowrap ">
          {props.title || "Today's Low"}
          
        </span>
      </div>
      <div className=" w-full relative">
        <input
          type="range"
          id="priceRange"
          min={0}
          max={props.percentage ? parseFloat(props.percentage) : 100} // Update max value to use percentage prop
          step={1}
          value={price}
          onChange={handleChange}
          className={twMerge(
            `w-[${price}] h-2 rounded-lg appearance-none absolute top-0 left-0`,
            props.className
          )}
          style={{ maxWidth: `${price}` }} // Limit the width of the range input
        />
      </div>
      <div className="flex flex-row basis-[15%] space-y-2 w-fit">
        <span className="font-normal text-sm  whitespace-nowrap ">
          {props.percentage || "Today's Low"}

        </span>
      </div>
    </div>
  );
};

export default RangePercentage;
