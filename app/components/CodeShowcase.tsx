"use client";

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: "riskrouter",
    title: "RiskRouter.sol",
    language: "solidity",
    code: `// src/contracts/RiskRouter.sol
function authorizeTrade(TradeIntent calldata intent, bytes calldata signature) external {
    // 1. Verify deadline
    require(block.timestamp <= intent.deadline, "RiskRouter: Intent expired");
    
    // 2. Verify circuit breakers
    uint256 currentVolume = agentVolume[intent.agentId];
    require(currentVolume + intent.volume <= maxVolumePerInterval, "RiskRouter: Volume limit exceeded");
    
    // 3. Update state to prevent replay
    agentVolume[intent.agentId] += intent.volume;
    executedIntents[intent.id] = true;
    
    // 4. Verify signature (EIP-712)
    address signer = _verifyIntentSignature(intent, signature);
    require(signer == agentOwners[intent.agentId], "RiskRouter: Invalid signature");
    
    emit TradeAuthorized(intent.id, intent.agentId, intent.pair, intent.volume);
}`
  },
  {
    id: "agent_brain",
    title: "agent_brain.ts",
    language: "typescript",
    code: `// src/logic/agent_brain.ts
export async function signIntent(
  wallet: Wallet,
  intent: TradeIntent
): Promise<string> {
  const domain = {
    name: 'SentinelRiskRouter',
    version: '1',
    chainId: await wallet.getChainId(),
    verifyingContract: RISK_ROUTER_ADDRESS
  };

  const types = {
    TradeIntent: [
      { name: 'id', type: 'bytes32' },
      { name: 'agentId', type: 'bytes32' },
      { name: 'pair', type: 'address' },
      { name: 'volume', type: 'uint256' },
      { name: 'maxPrice', type: 'uint256' },
      { name: 'deadline', type: 'uint256' }
    ]
  };

  return await wallet.signTypedData(domain, types, intent);
}`
  },
  {
    id: "types",
    title: "TradeIntent Type",
    language: "typescript",
    code: `// src/logic/types.ts
export interface TradeIntent {
  id: string;             // Unique identifier for the intent
  agentId: string;        // ID of the AI agent
  pair: string;           // Token pair address
  volume: bigint;         // Amount to trade
  maxPrice: bigint;       // Max acceptable price (slippage protection)
  deadline: bigint;       // UNIX expiration timestamp
}

export interface Authorization {
  intent: TradeIntent;
  signature: string;      // EIP-712 signature over the intent
}`
  }
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [copied, setCopied] = useState(false);

  const activeData = TABS.find(t => t.id === activeTab)!;

  useEffect(() => {
    hljs.highlightAll();
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-tech tracking-[0.1em] text-white mb-6 uppercase leading-tight">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">Showcase</span>
          </h2>
          <p className="font-mono text-xs md:text-sm tracking-wider text-gray-400">Clean interfaces. Bulletproof validation.</p>
        </div>

        <div className="bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-white/10 bg-white/5 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 text-[11px] font-tech tracking-widest uppercase transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? "text-cyan-400" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" 
                  />
                )}
              </button>
            ))}
            
            <div className="ml-auto flex items-center pr-4">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-cyan-400 font-tech uppercase text-[10px] tracking-widest transition-colors border border-white/5"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "COPIED" : "COPY_CODE"}
              </button>
            </div>
          </div>

          {/* Code View */}
          <div className="p-4 md:p-6 bg-[#090b0e] min-h-[300px] max-h-[400px] overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <pre className="m-0 text-sm md:text-base leading-relaxed">
                  <code className={`language-${activeData.language}`}>
                    {activeData.code}
                  </code>
                </pre>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
{/* 
      <style jsx global>{\`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2); 
        }
      \`}</style> */}
    </section>
  );
}
