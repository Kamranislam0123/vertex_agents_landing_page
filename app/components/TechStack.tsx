"use client";

import { motion } from "framer-motion";

const EthereumIcon = (props: any) => (
  <svg viewBox="0 0 320 512" fill="currentColor" {...props}>
    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
  </svg>
);

const SolidityIcon = (props: any) => (
  <svg viewBox="0 0 256 317" fill="currentColor" {...props}>
    <path d="M127.35 0l126.83 73.19v146.43l-126.83-73.22V0z"/>
    <path d="M127.35 170.83l126.83 73.2v-146.44l-126.83-73.2v146.44z" fillOpacity="0.5"/>
    <path d="M0 219.78l126.83 73.19v-146.44L0 73.34v146.44z" fillOpacity="0.8"/>
  </svg>
);

const OpenZeppelinIcon = (props: any) => (
  <svg viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M228.3 128A100.3 100.3 0 01128 228.3V128H27.7A100.3 100.3 0 01128 27.7v100.3h100.3z"/>
    <path d="M27.7 128A100.3 100.3 0 00128 228.3V256a128 128 0 01-128-128h27.7z" fillOpacity="0.5"/>
    <path d="M128 27.7A100.3 100.3 0 01228.3 128H256A128 128 0 00128 0v27.7z" fillOpacity="0.8"/>
  </svg>
);

const ViemIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 8l7 10 7-10"/>
  </svg>
);

const TSIcon = (props: any) => (
  <svg viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M256 0H0v256h256V0z" fill="#0000" />
    <path d="M115.3 211.5c-4.4 3-10.6 5.6-18.3 5.6-21.7 0-33.8-13.4-33.8-37.4v-47H46.4v-16.7h16.8v-29.3h18.2v29.3h27v16.7h-27v45.1c0 14.8 6.4 20.8 17.5 20.8 4.4 0 8.6-1.1 11.2-2.7v15.6zm102.5-6.2c-10 6.9-23.3 11-38 11-20.7 0-34.9-6.3-43-16.8l13-12.7c6.3 8.3 17 13.3 29.5 13.3 13.8 0 20.7-6 20.7-14.3 0-21.6-60.5-9.7-60.5-44.5 0-14.6 11.6-26.6 34.6-26.6 12.3 0 24 3.7 32.8 9.5l-10.1 14.2c-7-4.8-16.6-8.3-25.3-8.3-10 0-14.9 4.7-14.9 11.6 0 20.6 60.5 8.7 60.5 44.1 0 15.6-11.2 26.3-36.3 26.3z" />
  </svg>
);

const HardhatIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 21h14"/>
    <path d="M6 21V9a6 6 0 0 1 12 0v12"/>
    <path d="M6 13h12"/>
    <path d="M4 17h16"/>
  </svg>
);

const GenkitIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const TECH_STACK = [
  { name: "EIP-712", color: "hover:shadow-cyan-500/50 hover:border-cyan-500 hover:text-cyan-400", icon: <EthereumIcon className="w-4 h-4" /> },
  { name: "Solidity 0.8.24", color: "hover:shadow-gray-400/50 hover:border-gray-400 hover:text-gray-200", icon: <SolidityIcon className="w-4 h-4" /> },
  { name: "OpenZeppelin", color: "hover:shadow-blue-400/50 hover:border-blue-400 hover:text-blue-400", icon: <OpenZeppelinIcon className="w-4 h-4" /> },
  { name: "Viem", color: "hover:shadow-yellow-400/50 hover:border-yellow-400 hover:text-yellow-400", icon: <ViemIcon className="w-4 h-4" /> },
  { name: "TypeScript", color: "hover:shadow-blue-600/50 hover:border-blue-600 hover:text-blue-500", icon: <TSIcon className="w-4 h-4" /> },
  { name: "Hardhat", color: "hover:shadow-yellow-300/50 hover:border-yellow-300 hover:text-yellow-300", icon: <HardhatIcon className="w-4 h-4" /> },
  { name: "Genkit", color: "hover:shadow-green-500/50 hover:border-green-500 hover:text-green-400", icon: <GenkitIcon className="w-4 h-4" /> },
  { name: "ERC-8004", color: "hover:shadow-purple-500/50 hover:border-purple-500 hover:text-purple-400", icon: <EthereumIcon className="w-4 h-4" /> }
];

export default function TechStack() {
  return (
    <section className="w-full py-16 relative bg-black/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-tech text-cyan-400 mb-8 tracking-widest uppercase text-sm">
          Partner with
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-tech text-xs tracking-wider cursor-default transition-all duration-300 group ${tech.color}`}
            >
              <div className="text-gray-500 group-hover:text-inherit transition-colors flex items-center">
                {tech.icon}
              </div>
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
