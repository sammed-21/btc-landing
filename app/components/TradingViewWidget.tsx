// TradingViewWidget.tsx
'use client'
import Link from 'next/link';
import React, { useEffect, useRef, memo, useState } from 'react';

function TradingViewWidget() {
    const container = useRef<HTMLDivElement>(null);
     
    useEffect(() => {
      if (container.current ) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "autosize": true,
            "symbol": "BITSTAMP:BTCUSD",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "2",
            "locale": "en",
            
            "enable_publishing": true,
            "gridColor": "rgba(255, 229, 153, 0.06)",
            "hide_top_toolbar": true,
            "range": "ALL",
            "allow_symbol_change": true,
            "save_image": false,
            "calendar": true,
            "support_host": "https://www.tradingview.com"
          }`;
        container.current.appendChild(script);
       return()=>{
        script.remove();
       }
      }
    }, []); // Empty dependency array to run the effect only once

  return (
    <div className="w-full h-full relative">

    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      {/* <div className="tradingview-widget-copyright"><Link href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></Link></div> */}
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
