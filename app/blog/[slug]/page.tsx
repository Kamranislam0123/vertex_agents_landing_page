"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Shield, Clock } from "lucide-react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BLOG_POSTS } from "../../data/blog-posts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 text-center">
        <Shield className="w-16 h-16 text-brand-purple mb-6 animate-pulse" />
        <h1 className="text-2xl font-tech text-white mb-4">404: POST_NOT_FOUND</h1>
        <p className="text-slate-400 mb-8 max-w-md">The requested intel has been purged or moved to a higher clearance level.</p>
        <Link href="/" className="px-6 py-2 rounded-sm bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-tech text-xs hover:bg-brand-purple/20 transition-all">
          RETURN_TO_BASE
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-dark flex flex-col pt-24 pb-12">
      <Header />
      
      <article className="max-w-4xl mx-auto px-6 w-full">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/#blog" 
            className="inline-flex items-center gap-2 text-[10px] font-tech text-slate-500 hover:text-brand-purple transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3 h-3" />
            Back_to_Research
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 items-center mb-6 text-[10px] font-tech text-slate-500"
          >
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 uppercase tracking-tighter">
              <Calendar className="w-3 h-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 uppercase tracking-tighter">
              <User className="w-3 h-3" />
              {post.author}
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 uppercase tracking-tighter text-brand-purple">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 mb-12"
          >
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-sm bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] font-tech">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-brand max-w-none"
        >
          <div 
            className="text-slate-300 text-lg leading-relaxed flex flex-col gap-6 font-sans"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </motion.div>

        {/* Share Section (Futuristic) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-24 p-8 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h4 className="text-white font-tech text-xs tracking-widest uppercase mb-4">Share_Intel</h4>
            <div className="flex gap-4">
               {/* Just placeholders for share buttons */}
               <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all cursor-pointer">
                  <span className="text-white font-tech text-[10px]">X</span>
               </div>
               <button 
                 onClick={() => {
                   navigator.clipboard.writeText(window.location.href);
                   alert("LINK_COPIED_TO_CLIPBOARD");
                 }}
                 className="flex-1 rounded-lg bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center gap-3 hover:bg-brand-purple/20 transition-all text-brand-purple font-tech text-[10px] tracking-widest uppercase"
               >
                 COPY_INTEL_LINK
               </button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-purple/20 blur-[40px] rounded-full group-hover:bg-brand-purple/30 transition-all" />
        </motion.div>
      </article>

      <Footer />
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(124, 58, 237, 0.05) 1px, transparent 0)', backgroundSize: '60px 60px' }} />
      </div>
    </main>
  );
}
