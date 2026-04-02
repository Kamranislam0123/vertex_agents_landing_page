"use client";

import { useEffect, useState, useCallback } from "react";
import ParticleCanvas from "./ParticleCanvas";
import ShieldLogo from "./ShieldLogo";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

function ScrambleText({ text, duration = 2000 }: { text: string; duration?: number }) {
  const [displayText, setDisplayText] = useState(text);
  
  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join("")
      );
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, duration / (text.length * 3));
    
    return () => clearInterval(interval);
  }, [text, duration]);

  useEffect(() => {
    return scramble();
  }, [scramble]);

  return <>{displayText}</>;
}

export default function HeroSection() {
  const [latency, setLatency] = useState(14);
  const [uptime, setUptime] = useState(99.98);

  useEffect(() => {
    const latInterval = setInterval(() => {
      setLatency(prev => Math.max(8, Math.min(22, prev + (Math.random() - 0.5) * 4)));
    }, 3000);
    
    const upInterval = setInterval(() => {
      setUptime(prev => Math.max(99.95, Math.min(99.99, prev + (Math.random() - 0.5) * 0.01)));
    }, 5000);

    return () => {
      clearInterval(latInterval);
      clearInterval(upInterval);
    };
  }, []);

  return (
    <section className="relative flex h-full min-h-0 w-full flex-col items-center justify-center my-8 px-6 py-6 text-center sm:px-8 lg:px-12">
      {/* Background Particles Canvas */}
      <ParticleCanvas />

      {/* Noise Overlay */}
      <div className="noise-overlay absolute inset-0 z-[-1]" />
      
      {/* HUD Scanline */}
      <div className="hud-line z-[5]" />

      {/* Corner Brackets (HUD) */}
      <div className="absolute top-4 left-4 hidden lg:block opacity-40 pointer-events-none text-left">
        <div className="font-tech text-[8px] text-brand-cyan mb-1">System.ready()</div>
        <div className="w-8 h-8 border-t border-l border-brand-cyan/30" />
      </div>
      <div className="absolute top-4 right-4 hidden lg:block opacity-40 pointer-events-none text-right">
        <div className="font-tech text-[8px] text-brand-purple mb-1">Node_01.secure</div>
        <div className="w-8 h-8 border-t border-r border-brand-purple/30 ml-auto" />
      </div>
      <div className="absolute bottom-4 left-4 hidden lg:block opacity-40 pointer-events-none text-left">
        <div className="w-8 h-8 border-b border-l border-brand-cyan/30 mb-1" />
        <div className="font-tech text-[8px] text-brand-cyan whitespace-nowrap">
          Latency: {latency.toFixed(1)}ms
        </div>
        <div className="font-tech text-white/40 text-[6px] mt-0.5">AX-700 / SENTINEL_CORE</div>
      </div>
      <div className="absolute bottom-4 right-4 hidden lg:block opacity-40 pointer-events-none text-right">
        <div className="w-8 h-8 border-b border-r border-brand-purple/30 mb-1 ml-auto" />
        <div className="font-tech text-[8px] text-brand-purple">
          Uptime: {uptime.toFixed(2)}%
        </div>
      </div>

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center max-w-5xl">
        {/* Status Badge */}
        <div className="mb-1 flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-1 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan"></span>
          </span>
          <span className="font-tech text-[10px] text-brand-cyan tracking-[0.2em]">Active Protection Enabled</span>
        </div>

        {/* Animated Shield Logo */}
        <ShieldLogo />

        {/* Headline with animated gradient text and scramble reveal */}
        <h1 className="text-xl font-extrabold tracking-tight p-2 sm:text-2xl lg:text-4xl">
          <span className="block text-white">Thee</span>
          <span className="animate-gradient-text block p-2 min-h-[1.1em]">
            <ScrambleText text="Sentinel Layer" />
          </span>
        </h1>

        {/* Subheadline with bracketed highlights */}
        <p className="mt-1 max-w-xl text-[10px] text-slate-400 sm:text-xs lg:text-sm leading-tight">
          Verifiable risk management for AI trading agents — <span className="font-mono text-brand-cyan text-glow">[fail-closed]</span>, <span className="text-white">non-custodial</span>, <span className="font-mono text-brand-purple text-glow">[on-chain]</span>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
          <a
            href="https://github.com/your-org/sentinel"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-brand-cyan/40 bg-brand-cyan/5 px-6 py-3 font-tech text-[9px] tracking-[0.2em] text-brand-cyan transition-all duration-300 hover:bg-brand-cyan hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] glitch-hover"
          >
            <span className="absolute top-0 left-0 h-1 w-1 border-t border-l border-brand-cyan" />
            <span className="absolute top-0 right-0 h-1 w-1 border-t border-r border-brand-cyan" />
            <span className="absolute bottom-0 left-0 h-1 w-1 border-b border-l border-brand-cyan" />
            <span className="absolute bottom-0 right-0 h-1 w-1 border-b border-r border-brand-cyan" />
            INITIATE_GITHUB
          </a>
          <a
            href="https://notion.so/your-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="glass group relative flex items-center justify-center rounded-sm px-6 py-3 font-tech text-[9px] tracking-[0.2em] text-white transition-all hover:bg-white/10 hover:border-white/40 glitch-hover"
          >
             <span className="absolute top-0 left-0 h-1 w-1 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="absolute bottom-0 right-0 h-1 w-1 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            RESOLVE_DOCS
          </a>
        </div>
      </div>

      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-brand-cyan/10 blur-[130px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none mix-blend-screen" />
    </section>
  );
}
