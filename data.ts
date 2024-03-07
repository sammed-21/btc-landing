import Sentiment1 from '@/public/sentiment1.svg';
import Sentiment2 from '@/public/sentiment2.svg';
import { StaticImageData } from 'next/image';

export interface SentimentCardData {
  image: StaticImageData | string;
  title: string;
  className:string;
  description: string;
}

const sentimentData: SentimentCardData[] = [
  {
    image: Sentiment1,
    className:"bg-[#E8F4FD] w-full h-full items-start",
    title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
  },
  {
    image: Sentiment2,
    className:"bg-[#EBF9F4]  w-full h-full items-start",
    title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
  },
  {
    image: Sentiment1,
    className:"bg-[#E8F4FD]  w-full h-full items-start",
    title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
  }
];

export default sentimentData;
