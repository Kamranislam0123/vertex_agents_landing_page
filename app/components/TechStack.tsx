"use client";

import { motion } from "framer-motion";

// Kraken logo
const KrakenLogo = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 12c-.83 0-1.5-.67-1.5-1.5S7.17 14 8 14s1.5.67 1.5 1.5S8.83 17 8 17zm8 0c-.83 0-1.5-.67-1.5-1.5S15.17 14 16 14s1.5.67 1.5 1.5S16.83 17 16 17zm-4-3c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z"/>
  </svg>
);

// Surge / ERC-8004 logo
const SurgeLogo = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

// Lablab.ai logo
const LablabLogo = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>
  </svg>
);

// Ethereum logo
const EthereumLogo = (props: any) => (
  <svg viewBox="0 0 320 512" fill="currentColor" {...props}>
    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
  </svg>
);

// Google (Genkit) logo
const GoogleLogo = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

// OpenServ logo
const OpenServLogo = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <path d="M2 12h20"/>
  </svg>
);

const PARTNERS = [
  { name: "Kraken", color: "hover:shadow-purple-500/50 hover:border-purple-500 hover:text-purple-400", icon: <KrakenLogo className="w-5 h-5" /> },
  { name: "Surge", color: "hover:shadow-cyan-400/50 hover:border-cyan-400 hover:text-cyan-400", icon: <SurgeLogo className="w-5 h-5" /> },
  { name: "lablab.ai", color: "hover:shadow-green-400/50 hover:border-green-400 hover:text-green-400", icon: <LablabLogo className="w-5 h-5" /> },
  { name: "Ethereum", color: "hover:shadow-blue-400/50 hover:border-blue-400 hover:text-blue-400", icon: <EthereumLogo className="w-5 h-5" /> },
  { name: "Google Genkit", color: "hover:shadow-yellow-400/50 hover:border-yellow-400 hover:text-yellow-400", icon: <GoogleLogo className="w-5 h-5" /> },
  { name: "OpenServ", color: "hover:shadow-emerald-400/50 hover:border-emerald-400 hover:text-emerald-400", icon: <OpenServLogo className="w-5 h-5" /> },
];

export default function TechStack() {
  return (
    <section className="w-full py-16 relative bg-black/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-tech text-cyan-400 mb-8 tracking-widest uppercase text-sm">
          Partner with
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-tech text-xs tracking-wider cursor-default transition-all duration-300 group ${partner.color}`}
            >
              <div className="text-gray-500 group-hover:text-inherit transition-colors flex items-center">
                {partner.icon}
              </div>
              {partner.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
