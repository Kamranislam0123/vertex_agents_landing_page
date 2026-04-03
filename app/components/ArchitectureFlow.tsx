"use client";

import { useState, useEffect, useRef } from "react";
import { Brain, Shield, Zap, X, ChevronRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const NODES = [
  {
    id: "intent",
    title: "Intent Layer",
    subtitle: "Cryptographic Intent",
    icon: Brain,
    caption: "Agent signs a TradeIntent — EIP-712, no private key handed over",
    language: "typescript",
    color: "from-cyan-500/20 to-cyan-500/5",
    accent: "text-cyan-400",
    code: `// agent_brain.ts
async function signIntent(intent: TradeIntent) {
  return await wallet.signTypedData({
    domain: EIP712_DOMAIN,
    types: INTENT_TYPES,
    primaryType: 'TradeIntent',
    message: intent
  });}`
  },
  {
    id: "sentinel",
    title: "Sentinel (RiskRouter)",
    subtitle: "On-Chain Guardrail",
    icon: Shield,
    caption: "On-chain guardrail validates signature, deadline, and volume circuit breaker",
    language: "solidity",
    badge: "Fail-Closed",
    color: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-400",
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
    subtitle: "Secure Output",
    icon: Zap,
    caption: "ExecutionProxy submits to exchange only on TradeAuthorized event",
    language: "typescript",
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400",
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
    if (activeNode) hljs.highlightAll();
  }, [activeNode]);

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
    <section className="w-full py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Architecture</span> Flow
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A secure, fail-closed pipeline that bridges AI intents with on-chain execution.
          </p>
        </div>

        {/* Standard Flow Diagram */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0 lg:px-12 relative">
          
          {NODES.map((node, i) => (
            <div key={node.id} className="flex flex-col md:flex-row items-center flex-1">
              {/* Node Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setActiveNode(node.id)}
                className={`relative z-10 flex flex-col w-full md:w-64 p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${node.color} backdrop-blur-xl cursor-pointer group transition-all duration-300 ${activeNode === node.id ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.1)]' : 'hover:border-white/20'}`}
              >
                {/* Node Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-black/40 border border-white/10 ${node.accent}`}>
                    <node.icon className="w-6 h-6" />
                  </div>
                  {node.badge && (
                    <span className="px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-wider">
                      {node.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{node.title}</h3>
                <p className="text-gray-400 text-xs mb-4">{node.subtitle}</p>
                
                <div className="flex items-center text-[10px] font-mono text-cyan-400/70 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span className="mr-1 mt-0.5">VIEW_CODE</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>

              {/* Connector (Dashed Line with moving point) */}
              {i < NODES.length - 1 && (
                <div className="flex-1 flex items-center justify-center py-4 md:py-0 w-8 md:w-auto h-12 md:h-auto">
                    {/* Horizontal Arrow (Desktop) */}
                    <div className="hidden md:flex flex-1 items-center px-4 relative">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 relative">
                             <motion.div 
                                animate={{ left: ["0%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 blur-[2px]"
                             />
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/30 -ml-2" />
                    </div>
                    {/* Vertical Arrow (Mobile) */}
                    <div className="md:hidden flex flex-col items-center">
                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowDown className="w-5 h-5 text-white/30" />
                        </motion.div>
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Improved Code Popup (moved outside of z-10 container to avoid stacking context issues) */}
      <AnimatePresence>
        {activeNode && activeData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              ref={popupRef}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0d1117] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(34,211,238,0.15)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl bg-black/40 border border-white/10 ${activeData.accent}`}>
                      <activeData.icon className="w-5 h-5" />
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{activeData.title}</h3>
                      <p className="text-gray-400 text-xs font-mono">{activeData.subtitle}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveNode(null)}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Body */}
              <div className="p-8">
                <div className="flex items-start gap-4 mb-8 bg-cyan-400/5 border border-cyan-400/20 p-4 rounded-xl">
                  <Shield className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                      {activeData.caption}
                  </p>
                </div>
                
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#010409] shadow-inner">
                  <pre className="m-0 p-6 overflow-x-auto text-[13px] md:text-sm leading-relaxed custom-scrollbar">
                    <code className={`language-${activeData.language}`}>
                      {activeData.code}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="px-8 pb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-[10px] font-mono text-gray-400 tracking-wider">PROTOCOL_VERIFIED</span>
                  </div>
                  <button 
                      onClick={() => setActiveNode(null)}
                      className="text-xs font-bold text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors"
                  >
                      Close Module
                  </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
