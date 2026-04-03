"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "EIP-712", color: "hover:shadow-blue-500/50 hover:border-blue-500" },
  { name: "Solidity 0.8.24", color: "hover:shadow-gray-400/50 hover:border-gray-400" },
  { name: "OpenZeppelin", color: "hover:shadow-blue-400/50 hover:border-blue-400" },
  { name: "Viem", color: "hover:shadow-yellow-400/50 hover:border-yellow-400" },
  { name: "TypeScript", color: "hover:shadow-blue-600/50 hover:border-blue-600" },
  { name: "Hardhat", color: "hover:shadow-yellow-300/50 hover:border-yellow-300" },
  { name: "Genkit", color: "hover:shadow-green-500/50 hover:border-green-500" },
  { name: "ERC-8004", color: "hover:shadow-purple-500/50 hover:border-purple-500" }
];

export default function TechStack() {
  return (
    <section className="w-full py-16 relative bg-black/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-medium text-gray-400 mb-8 tracking-wide uppercase text-sm">
          Built With
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={`px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium cursor-default transition-all duration-300 ${tech.color}`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
