import React from "react";

type Props = {
  heading?: string;
  values?: any;
  values2?:string;
  percentage?:number | any;
};

const PeformanceItem = (props: Props) => {
    
    let percentage = Number(props.percentage) < 0 ?'text-red-500':"text-red-500"
  return (
    <div className=" flex border-b-[1px] border-[#D3E0E6] md:col-span-1 col-span-2 justify-between w-full h-12  px-2 ">
      <div className="w-fit basis-1/2 h-full text-sm font-medium text-[#768395] items-center flex justify-start text-left ">{props.heading}</div>
      <div className="h-full basis-1/2    flex flex-col font-medium text-[13px] text-right justify-center items-end  w-fit ">
        <div className="flex space-x-1 text-right gap-1">
      
     
         <span className="font-medium text-[13px] text-right">{props.values}</span>
         <span className={`${percentage}`}>{props.percentage}</span>

        </div>
         <span className="text-[11px] font-normal text-right text-[#111827]">{props.values2}</span>
        </div>
    
   
    </div>
  );
};

export default PeformanceItem;
