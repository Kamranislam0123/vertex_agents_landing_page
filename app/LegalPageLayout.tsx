import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./components/Header";
import Footer from "./components/Footer";

// This is a simple reusable layout for legal pages
export default function LegalPageLayout({ title, content }: { title: string, content: string }) {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 bg-black text-slate-300">
      <Header />
      <div className="max-w-4xl w-full px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">{title}</h1>
        <div className="prose prose-invert prose-slate max-w-none 
          prose-headings:text-white prose-h2:text-brand-purple prose-h3:text-brand-cyan 
          prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-white
          prose-a:text-brand-cyan hover:prose-a:underline">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </main>
  );
}
