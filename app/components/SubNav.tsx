// // components/SubNav.tsx
// 'use client'
// import Link from 'next/link';
// import React, { useState } from 'react';

// const SubNav = () => {
//     const [activeTab, setActiveTab] = useState('Overview');

//     const handleTabClick = (tab: string) => {
//         setActiveTab(tab);
//         const element = document.getElementById(tab);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <nav className="border-b-2  flex no-scrollbar snap-x overflow-y-hidden gap-3 border-[#D3E0E6] transition-all relative overflow-x-auto ease-in-out duration-300 ">
//             <div className="max-w-7xl mx-auto pr-2 ">
//                 <div className="flex items-center justify-start h-12">
//                     <div className="flex text-[#3E424A]  space-x-2">
//                         {['Overview', 'Fundamentals', 'News Insights', 'Sentiments', 'Team', 'Technicals', 'Tokenomics'].map(tab => (
//                             <Link
//                                 key={tab}
//                                 className={`transition-all ease-in-out whitespace-nowrap duration-300 hover:text-[#0141CF] px-3 py-2  text-sm font-medium focus:outline-none ${activeTab === tab ? 'border-b-2 w-fit text-[#0141CF] border-[#0141CF]' : ''}`}
//                                 href={'#'+tab}
//                                 onClick={()=> handleTabClick(tab)}
//                             >
//                                 {tab}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default SubNav;

// tabs.tsx
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const handleTabClick = (tabId:string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="mb-4 border-b border-gray-300 ">
      <ul className="flex  whitespace-nowrap no-scrollbar snap-x overflow-y-hidden gap-3 border-[#D3E0E6] transition-all relative overflow-x-auto ease-in-out duration-300 -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
        <Link href={'#'} className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'overview' ? 'border-blue-500' : 'border-transparent'}`}
            id="overview-tab"
            type="button"
            role="tab"
            aria-controls="overview"
            aria-selected={activeTab === 'overview'}
            onClick={() => handleTabClick('overview')}
          >
            Overview
          </button>
        </Link>
        <Link href={"#Fundamentals"} className="me-2" role="Fundamentals">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg  ${activeTab === 'fundamentals' ? 'border-blue-500' : 'border-transparent'}`}
            id="undamentals"
            type="button"
            role="tab"
            aria-controls="fundamentals"
            aria-selected={activeTab === 'fundamentals'}
            onClick={() => handleTabClick('fundamentals')}
          >
            Fundamentals
          </button>
        </Link>
        <Link href={"#News Insights"} className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg  ${activeTab === 'news' ? 'border-blue-500' : 'border-transparent'}`}
            id="news-tab"
            type="button"
            role="tab"
            aria-controls="news"
            aria-selected={activeTab === 'news'}
            onClick={() => handleTabClick('news')}
          >
            News Insights
          </button>
        </Link>
        <Link href={"#Sentiments"} className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg  ${activeTab === 'sentiments' ? 'border-blue-500' : 'border-transparent'}`}
            id="sentiments-tab"
            type="button"
            role="tab"
            aria-controls="sentiments"
            aria-selected={activeTab === 'sentiments'}
            onClick={() => handleTabClick('sentiments')}
          >
            Sentiments
          </button>
        </Link>
        <Link href={"#Team"} className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg  ${activeTab === 'team' ? 'border-blue-500' : 'border-transparent'}`}
            id="team-tab"
            type="button"
            role="tab"
            aria-controls="team"
            aria-selected={activeTab === 'team'}
            onClick={() => handleTabClick('team')}
          >
            Team
          </button>
        </Link>
        <Link href={"#"} role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg  ${activeTab === 'technicals' ? 'border-blue-500' : 'border-transparent'}`}
            id="technicals-tab"
            type="button"
            role="tab"
            aria-controls="technicals"
            aria-selected={activeTab === 'technicals'}
            onClick={() => handleTabClick('technicals')}
          >
            Technicals
          </button>
        </Link>
        <Link className='max-md:hidden' href={"#Tokenomics"} role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg  ${activeTab === 'tokenomics' ? 'border-blue-500' : 'border-transparent'}`}
            id="tokenomics-tab"
            type="button"
            role="tab"
            aria-controls="tokenomics"
            aria-selected={activeTab === 'tokenomics'}
            onClick={() => handleTabClick('tokenomics')}
          >
            Tokenomics
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Tabs;
