"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_SEQUENCE = [
  "INITIALIZING SENTINEL_CORE v1.0.4...",
  "ESTABLISHING ON-CHAIN RELAYS...",
  "LOADING EIP-712 VALIDATION PROTOCOLS...",
  "ARMING CIRCUIT BREAKERS...",
  "SYSTEM_READY. WELCOME_TO_THE_SENTINEL_LAYER."
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Sequence the text
    const interval = setInterval(() => {
      setTextIndex(prev => {
        if (prev < BOOT_SEQUENCE.length - 1) return prev + 1;
        return prev;
      });
    }, 500);

    // End loading after sequence + delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-brand-dark overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 noise-overlay opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]"></div>
          <div className="hud-line"></div>

          <div className="w-full max-w-2xl px-6 flex flex-col items-center justify-center relative z-10">
            {/* Spinning/pulsing loader graphic */}
            <div className="relative w-40 h-40 mb-12 flex items-center justify-center">
              {/* Outer Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-cyan-400/20 rounded-full"
              >
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </motion.div>
              
              {/* Middle Dashed Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-4 border-[1px] border-dashed border-brand-purple/40 rounded-full"
              />
              
              {/* Inner Triangle/Hexagon abstract */}
              <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                viewBox="0 0 100 100" 
                className="absolute inset-8 w-24 h-24 text-cyan-400/40"
              >
                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="1" />
                <polygon points="50,20 80,75 20,75" fill="none" stroke="currentColor" strokeWidth="1" />
              </motion.svg>

              {/* Center Core */}
              <motion.div 
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-2 h-2 bg-white rounded-full shadow-[0_0_30px_5px_rgba(34,211,238,1)]"
              />
            </div>

            {/* Boot Sequence Text */}
            <div className="h-8 flex flex-col items-center overflow-hidden">
               <motion.span 
                 key={textIndex}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="font-tech tracking-[0.2em] text-cyan-400 text-[10px] md:text-xs text-center uppercase"
               >
                 {BOOT_SEQUENCE[textIndex]}
               </motion.span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-64 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
              {/* Actual Progress Indicator */}
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "circInOut" }}
                className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              />
            </div>
            
            {/* Coordinates / Data decorative */}
            <div className="absolute top-full mt-12 w-full flex justify-between font-tech text-[8px] text-gray-500 opacity-50 tracking-widest">
              <span>SYS_LATENCY: 12ms</span>
              <span>VERIFICATION: ACTIVE</span>
              <span>v1.0.4</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
