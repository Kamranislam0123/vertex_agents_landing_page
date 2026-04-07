"use client";

import { motion } from "framer-motion";
import { FileText, Presentation, ArrowRight, ExternalLink } from "lucide-react";

export default function ResourcesSection() {
  const resources = [
    {
      title: "Technical Whitepaper",
      description: "A deep dive into the Vertex Sentinel protocol architecture, fail-closed security mechanisms, and EIP-712 intent verification.",
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
      link: "/Whitepaper.pdf",
      type: "PDF",
      color: "emerald"
    },
    {
      title: "Interactive Pitch Deck",
      description: "Our vision for the future of AI agent security, hackathon goals, and the Kraken CLI / ERC-8004 integration roadmap.",
      icon: <Presentation className="w-6 h-6 text-amber-400" />,
      link: "/pitch-deck.html",
      type: "Presentation",
      color: "amber"
    }
  ];

  return (
    <section id="resources" className="w-full py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-tech text-3xl md:text-4xl text-white mb-4 tracking-tighter">
            PROTOCOL <span className="text-brand-cyan">RESOURCES</span>
          </h2>
          <p className="text-slate-400 font-tech text-sm max-w-2xl mx-auto">
            EXPLORE THE CORE DOCUMENTATION AND VISION BEHIND THE SENTINEL LAYER.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative block p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    {resource.icon}
                  </div>
                  <span className="font-tech text-[10px] tracking-widest text-slate-500 uppercase px-3 py-1 rounded-full border border-white/5">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-xl font-tech text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {resource.description}
                </p>

                <div className="flex items-center gap-2 text-brand-cyan font-tech text-xs tracking-widest group-hover:gap-4 transition-all">
                  VIEW_DOCUMENT <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Decorative corner icon */}
              <ExternalLink className="absolute top-6 right-6 w-4 h-4 text-white/10 group-hover:text-brand-cyan/40 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Background glow elements */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-brand-cyan/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/5 blur-[140px] rounded-full -z-10" />
      </div>
    </section>
  );
}
