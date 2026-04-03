"use client";

import { KeyRound, Search, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const PROBLEMS = [
  {
    id: 1,
    title: "Key Delegation Risk",
    icon: KeyRound,
    description: "Current agents require full private key access. One breach = total fund loss. The keys are a massive single point of failure.",
    color: "from-red-500/20 to-orange-500/5",
    iconColor: "text-red-400"
  },
  {
    id: 2,
    title: "Unverifiable Intents",
    icon: Search,
    description: "No cryptographic proof that an agent acted within its mandate. It's black-box execution where intent vs outcome mismatches are common.",
    color: "from-purple-500/20 to-blue-500/5",
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    title: "No Circuit Breakers",
    icon: ShieldAlert,
    description: "Nothing prevents a hallucinating agent from exceeding volume limits, trading past its deadline, or draining liquidity in seconds.",
    color: "from-orange-500/20 to-yellow-500/5",
    iconColor: "text-orange-400"
  }
];

export default function ProblemSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-black/40">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Problem With <br className="md:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Autonomous Traders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="h-full flex flex-col p-8 rounded-3xl border border-white/5 bg-black/40 backdrop-blur-sm relative z-10 transition-all duration-300 group-hover:border-white/10 group-hover:shadow-xl group-hover:shadow-black/50">
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${item.color} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
