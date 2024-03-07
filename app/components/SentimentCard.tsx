import { StaticImageData } from 'next/image'
import React from 'react'
import Image from "next/image";
import { twMerge } from 'tailwind-merge';
import Sentiment1 from '@/public/sentiment1.svg';
type Props = {
    image?:string | StaticImageData;
    title?:string;
    className?:string;
    description?:string;
}

const SentimentCard = (props: Props) => {
  return (
    <div className={twMerge('p-3 min-w-[319px] md:min-w-[456px] snap-center overflow-hidden rounded-lg h-fit md:min-h-[204px] w-full flex gap-1  justify-start items-start',props.className)}>
           <Image
            width={100}
            height={100}
            src={props.image || Sentiment1}
            alt="Slider Thumb"
            className="w-fit max-w-[44px] h-full"
          />
<div className="flex flex-col gap-1 justify-center items-center">
    <h1 className='text-xs md:text-sm font-medium text-[#191C1F]'>
        
        {props.title}
        </h1>
    <span className="text-[#3E5765] text-[10px] md:text-sm font-normal">
        {props.description}
    </span>
</div>
    </div>
  )
}

export default SentimentCard