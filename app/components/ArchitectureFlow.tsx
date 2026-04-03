"use client";

import { useState, useEffect, useRef } from "react";
import { Brain, Shield, Zap, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const NODES = [
  {
    id: "intent",
    title: "Intent Layer",
    icon: Brain,
    caption: "Agent signs a TradeIntent — EIP-712, no private key handed over",
    language: "typescript",
    code: `// agent_brain.ts
async function signIntent(intent: TradeIntent) {
  return await wallet.signTypedData({
    domain: EIP712_DOMAIN,
    types: INTENT_TYPES,
    primaryType: 'TradeIntent',
    message: intent
  });
}`
  },
  {
    id: "sentinel",
    title: "Sentinel (RiskRouter)",
    icon: Shield,
    caption: "On-chain guardrail validates signature, deadline, and volume circuit breaker",
    language: "solidity",
    badge: "Fail-Closed",
    code: `// RiskRouter.sol
function authorizeTrade(
    TradeIntent calldata intent, 
    bytes calldata signature
) external {
    require(block.timestamp <= intent.deadline, "Expired");
    require(
        volume[intent.agentId] + intent.volume <= MAX_VOLUME, 
        "Circuit breaker tripped"
    );
    require(verifySignature(intent, signature), "Invalid signature");
    
    emit TradeAuthorized(intent.id);
}`
  },
  {
    id: "execution",
    title: "Execution Layer",
    icon: Zap,
    caption: "ExecutionProxy submits to exchange only on TradeAuthorized event",
    language: "typescript",
    code: `// proxy.ts
contract.on('TradeAuthorized', async (intentId) => {
  const intent = await fetchIntent(intentId);
  await executeOnExchange(intent);
});`
  }
];

export default function ArchitectureFlow() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    hljs.highlightAll();
  }, [activeNode]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setActiveNode(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeData = NODES.find(n => n.id === activeNode);

  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Architecture</span> Flow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Click on each node to reveal the cryptographic proofs and smart contracts powering the Sentinel Layer.
          </p>
        </div>

        {/* Desktop grid layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-10">
          
          {/* Connecting Line (Mobile vertical, Desktop horizontal) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-purple-500/50 to-cyan-500/20 hidden md:block -translate-y-1/2 z-0" />
          <div className="absolute top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-cyan-500/20 via-purple-500/50 to-cyan-500/20 block md:hidden -translate-x-1/2 z-0" />

          {/* Flow Nodes */}
          {NODES.map((node, i) => (
            <motion.div
              key={node.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveNode(node.id)}
              className="relative z-10 flex flex-col items-center cursor-pointer group"
            >
              <div className={`w-24 h-24 rounded-full flex items-center justify-center border-2 border-white/10 bg-black/60 backdrop-blur-xl shadow-lg transition-all duration-300 ${activeNode === node.id ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]' : 'group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'}`}>
                <node.icon className={`w-10 h-10 ${activeNode === node.id ? 'text-cyan-400' : 'text-gray-300'}`} />
              </div>
              
              <div className="mt-6 text-center max-w-[200px] bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-2">{node.title}</h3>
                {node.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-2">
                    <Shield className="w-3 h-3" />
                    {node.badge}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Popup */}
        <AnimatePresence>
          {activeNode && activeData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <div 
                ref={popupRef}
                className="relative w-full max-w-2xl bg-[#0d1117] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <activeData.icon className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">{activeData.title}</h3>
                  </div>
                  <button 
                    onClick={() => setActiveNode(null)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-sm md:text-base border-l-2 border-purple-500 pl-4">{activeData.caption}</p>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#161b22]">
                    <pre className="m-0 p-4 overflow-x-auto text-sm leading-relaxed">
                      <code className={`language-${activeData.language}`}>
                        {activeData.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
