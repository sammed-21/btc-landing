import React from 'react'
import SentimentCard from './SentimentCard'

import Sentiment1 from '@/public/sentiment1.svg';
import Sentiment2 from '@/public/sentiment2.svg';

const SentimentCardSection = () => {
  return (
    <>
        <SentimentCard className="bg-[#E8F4FD] w-full h-full items-start" image={Sentiment1} title='Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.' description='Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'/>
        <SentimentCard className="bg-[#EBF9F4]  w-full h-full items-start" image={Sentiment2} title='Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.' description='Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'/>
        <SentimentCard className="bg-[#E8F4FD]  w-full h-full items-start" image={Sentiment1} title='Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.' description='Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'/>
        </>
  )
}

export default SentimentCardSection