import React from "react";
import { Coffee, ShieldCheck, Smartphone, Zap, History, Globe } from "lucide-react";

const FEATURES = [
  { 
    title: 'Simple', 
    desc: 'Easy to learn. Syntax is based on C++, but complex features like pointers are removed.', 
    icon: <Coffee className="w-6 h-6 text-orange-600" /> 
  },
  { 
    title: 'Secure', 
    desc: 'Java is famous for security. No explicit pointers and runs inside a virtual machine (JVM).', 
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> 
  },
  { 
    title: 'Portable', 
    desc: 'WORA (Write Once, Run Anywhere). Your code runs on any device with a JVM.', 
    icon: <Smartphone className="w-6 h-6 text-green-600" /> 
  },
];

export default function JavaIntro() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3 h-3" /> Core Backend
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Java <span className="text-orange-600">Introduction</span>
        </h1>
        <p className="text-slate-500 leading-relaxed text-xl max-w-3xl">
          Java is a powerful, multi-platform, object-oriented programming language. Since 1995, it has been the backbone of millions of applications, from Android apps to large-scale enterprise servers.
        </p>
      </section>

      {/* 2. CORE FEATURES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((item) => (
          <div key={item.title} className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. HISTORY & UPDATES (THE TIMELINE) */}
      <section className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <History className="text-orange-500" />
            <h2 className="text-2xl font-bold">Evolution of Java</h2>
          </div>

          <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900"></div>
              <h4 className="font-bold text-orange-400">1995 - The Birth</h4>
              <p className="text-sm text-slate-400">Created by James Gosling at Sun Microsystems. Originally named "Oak".</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-900"></div>
              <h4 className="font-bold text-slate-200">2010 - Oracle Acquisition</h4>
              <p className="text-sm text-slate-400">Oracle Corporation acquired Sun Microsystems, taking over Java development.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-slate-900 shadow-[0_0_10px_#22c55e]"></div>
              <h4 className="font-bold text-green-400 font-mono tracking-tighter">Current - Java 21 LTS & Java 23</h4>
              <p className="text-sm text-slate-400">
                Java now follows a 6-month release cycle. 
                <span className="block mt-2 text-slate-300">
                  <strong className="text-white underline">Latest Features:</strong> Virtual Threads (Project Loom), Pattern Matching, and Sealed Classes for extreme performance.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY JAVA IN 2025? */}
      <section className="py-10 border-t border-slate-100">
        <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-500" /> Why learn Java today?
        </h2>
        <div className="prose prose-slate max-w-none">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
            {[
              "Enterprise standard for Banking & Finance.",
              "Huge community support (StackOverflow/GitHub).",
              "Foundation for Android App Development.",
              "High performance for Big Data (Hadoop/Spark)."
            ].map(point => (
              <li key={point} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}