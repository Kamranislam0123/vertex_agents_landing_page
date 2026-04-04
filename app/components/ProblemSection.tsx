"use client";

import { KeyRound, Search, ShieldAlert, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const PROBLEMS = [
  {
    id: "ERR_01",
    title: "KEY DELEGATION RISK",
    icon: KeyRound,
    description: "Current agents require full private key access. One breach = total fund loss. The keys are a massive single point of failure.",
    borders: "border-white/5 hover:border-red-500/50",
    bgHover: "group-hover:bg-red-500/[0.02]",
    glow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    iconColor: "text-red-500 group-hover:text-red-400 transform group-hover:rotate-12",
    badge: "bg-red-500/10 text-red-500 border-red-500/20 group-hover:border-red-500/50 group-hover:bg-red-500/20"
  },
  {
    id: "ERR_02",
    title: "UNVERIFIABLE INTENTS",
    icon: Search,
    description: "No cryptographic proof that an agent acted within its mandate. Black-box execution with frequent intent-outcome mismatches.",
    borders: "border-white/5 hover:border-purple-500/50",
    bgHover: "group-hover:bg-purple-500/[0.02]",
    glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    iconColor: "text-purple-500 group-hover:text-purple-400 transform group-hover:scale-110",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20"
  },
  {
    id: "ERR_03",
    title: "NO CIRCUIT BREAKERS",
    icon: ShieldAlert,
    description: "Nothing prevents a hallucinating agent from exceeding volume limits, trading past its deadline, or draining liquidity rapidly.",
    borders: "border-white/5 hover:border-orange-500/50",
    bgHover: "group-hover:bg-orange-500/[0.02]",
    glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    iconColor: "text-orange-500 group-hover:text-orange-400 transform group-hover:-rotate-12",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20 group-hover:border-orange-500/50 group-hover:bg-orange-500/20"
  }
];

export default function ProblemSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-brand-dark border-t border-white/5" id="problem">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Moving scanner line across section */}
      <div className="absolute left-0 right-0 h-[1px] bg-red-500/20 animate-[scan_6s_linear_infinite] shadow-[0_0_15px_rgba(239,68,68,0.5)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col items-center border-b border-white/10 pb-12 relative w-full max-w-2xl mx-auto">
          {/* Target Box Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/30" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500/30" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500/30" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/30" />

          <div className="absolute -bottom-1.5 w-3 h-3 bg-red-500 rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
          
          <div className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-sm bg-red-500/10 border border-red-500/30">
            <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="font-tech text-[10px] tracking-[0.2em] text-red-500 uppercase">System Warning</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-tech tracking-[0.1em] text-white text-center uppercase leading-tight">
            The Problem With <br className="hidden md:block"/>
            <span className="text-red-500 text-glow glitch-hover inline-block mt-2">Autonomous Traders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative flex flex-col p-8 rounded-sm bg-black/60 border ${item.borders} ${item.bgHover} ${item.glow} backdrop-blur-md transition-all duration-500 cursor-default`}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-current transition-colors opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-current transition-colors opacity-0 group-hover:opacity-100" />

              <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors">
                <div className={`px-2 py-1 rounded-sm border ${item.badge} font-tech text-[10px] tracking-widest transition-all duration-300`}>
                  {item.id}
                </div>
                <item.icon className={`w-6 h-6 ${item.iconColor} transition-all duration-500`} />
              </div>
              
              <h3 className="text-sm md:text-base font-tech tracking-wider text-white mb-4 group-hover:text-white/90 transition-colors">
                {item.title}
              </h3>
              
              <p className="font-mono text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
              
              {/* Animated HUD line inside the card */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full transition-all duration-1000 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
