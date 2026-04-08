"use client";

import { motion } from "framer-motion";
import { Shield, ExternalLink, FileText, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100]  border-white/5 bg-black/40 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="group flex items-center gap-3">
           <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 group-hover:border-brand-cyan/50 transition-all duration-300">
              <Shield className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-lg bg-brand-cyan/10 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
           <div className="flex flex-col">
             <span className="font-tech text-xs tracking-[0.3em] text-white group-hover:text-brand-cyan transition-colors">SENTINEL</span>
             <span className="font-tech text-[8px] tracking-[0.1em] text-slate-500 group-hover:text-slate-300 transition-colors">BY_VERTEXAGENTS</span>
           </div>
         </a>

        {/* Global Connections (Right) */}
        <div className="flex items-center gap-4">
             {/* Status Dot */}
             <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/10 mr-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-tech text-cyan-400 lg:tracking-widest">SYSTEM_ACTIVE</span>
             </div>

             <a
              href="#blog"
              className="group flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-purple/5 border border-brand-purple/20 font-tech text-[9px] tracking-wider text-slate-300 transition-all hover:bg-brand-purple/10 hover:text-brand-purple hover:border-brand-purple/30"
            >
              <BookOpen className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              <span className="hidden sm:inline">SENTINEL_BLOG</span>
              <span className="sm:hidden">BLOG</span>
            </a>

            <a
              href="https://linktr.ee/vertexagents"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 font-tech text-[9px] tracking-wider text-slate-300 transition-all hover:bg-brand-cyan/10 hover:text-brand-cyan hover:border-brand-cyan/30"
            >
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              <span className="hidden sm:inline">EXPLORE_LINKS</span>
              <span className="sm:hidden">LINKS</span>
            </a>
            
            <a
              href="/Whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 font-tech text-[9px] tracking-wider text-slate-300 transition-all hover:bg-brand-cyan/10 hover:text-brand-cyan hover:border-brand-cyan/30"
            >
              <FileText className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              <span className="hidden sm:inline">WHITE_PAPER</span>
              <span className="sm:hidden">PDF</span>
            </a>
        </div>
      </div>
    </motion.header>
  );
}
