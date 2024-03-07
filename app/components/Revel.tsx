'use client'
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { once } from "events";

interface Props {
  children: JSX.Element;
}

const Revel = ({ children }: Props) => {
const ref = useRef(null)
const isInView = useInView(ref,{once:true});
const mainControl = useAnimation();

useEffect(()=>{
    if(isInView){
        mainControl.start('visible')
    }
},[isInView])
  return (
    <div ref={ref} className="w-full h-full relative" style={{ position: "relative"  }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.3, delay: 0.25 }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Revel;
