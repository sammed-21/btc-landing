// components/SubNav.tsx
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const SubNav = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        const element = document.getElementById(tab);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="border-b-2 border-[#D3E0E6] transition-all relative overflow-x-auto ease-in-out duration-300 ">
            <div className="max-w-7xl mx-auto pr-2 ">
                <div className="flex items-center justify-start h-12">
                    <div className="flex text-[#3E424A]  space-x-2">
                        {['Overview', 'Fundamentals', 'News Insights', 'Sentiments', 'Team', 'Technicals', 'Tokenomics'].map(tab => (
                            <Link
                                key={tab}
                                className={`transition-all ease-in-out duration-300 hover:text-[#0141CF] px-3 py-2  text-sm font-medium focus:outline-none ${activeTab === tab ? 'border-b-2 text-[#0141CF] border-[#0141CF]' : ''}`}
                                href={'#'+tab}
                                onClick={()=> handleTabClick(tab)}
                            >
                                {tab}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SubNav;
