"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "../data/blog-posts";

export default function BlogSection() {
  return (
    <section id="blog" className="relative w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 mb-4"
        >
          <BookOpen className="w-3 h-3 text-brand-purple" />
          <span className="font-tech text-[10px] text-brand-purple tracking-widest uppercase">Research_&_Insights</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Latest from the <span className="text-brand-purple">Sentinel Blog</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl text-lg mb-8"
        >
          Deep dives into AI safety, cryptographic standards, and the future of verifiable autonomous agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left"
        >
          {[
            { title: "AI Agent Security", desc: "Hardening autonomous trading systems against hallucinations and prompt injection." },
            { title: "DeFi Guardrails", desc: "Implementing programmable risk management via on-chain smart contracts." },
            { title: "ERC-8004 Standard", desc: "Universal identity protocols for verifiable AI intent across Ethereum networks." },
            { title: "Kraken MCP Integration", desc: "Secure multi-agent orchestration using the Model Context Protocol." }
          ].map((topic, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-bold text-brand-purple text-sm mb-1">{topic.title}</h4>
              <p className="text-slate-500 text-[10px] leading-tight">{topic.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <Link 
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-brand-purple/30 transition-all duration-300"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6 text-[10px] font-tech text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-sm bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[9px] font-tech">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-1 text-[10px] font-tech text-brand-purple group-hover:gap-2 transition-all">
                    READ_MORE <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Accent Blur */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-purple/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </Link>
        ))}
      </div>
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(124, 58, 237, 0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
    </section>
  );
}
