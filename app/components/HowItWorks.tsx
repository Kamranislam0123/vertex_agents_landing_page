"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Construct Intent",
    description: "Agent constructs a TradeIntent (agentId, pair, volume, maxPrice, deadline)."
  },
  {
    num: "02",
    title: "Sign Intent (EIP-712)",
    description: "Agent signs the intent via EIP-712 — completely off-chain. No private key delegation is ever required."
  },
  {
    num: "03",
    title: "On-Chain Validation",
    description: "RiskRouter.authorizeTrade() verifies: ✓ Valid signature, ✓ Registered agent, ✓ Deadline not expired, ✓ Volume under circuit breaker limit."
  },
  {
    num: "04",
    title: "Fail-Closed Execution",
    description: "On TradeAuthorized event → ExecutionProxy submits to exchange. On TradeRejected → request is dropped unconditionally."
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Works</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute top-10 bottom-10 left-[27px] md:left-12 w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent" />

          <div className="space-y-12 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-6 md:gap-8"
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 w-14 h-14 md:w-24 md:h-24 rounded-2xl bg-black/50 border border-cyan-500/30 backdrop-blur-md flex items-center justify-center relative shadow-[0_0_20px_rgba(34,211,238,0.15)] mt-1 md:mt-0">
                  <span className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center pt-2 md:pt-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
