import React from "react";
import { Repeat, Zap, ListFilter, Play, LayoutList, Info, RotateCcw } from "lucide-react";

function Loops() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Repeat className="w-4 h-4" />
          <span>Lesson 06: Repeating Tasks</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Cycles & <span className="text-amber-500">Loops</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
          Loops allow you to run the same code over and over again. This is perfect for handling lists of data like user names or product prices.
        </p>
      </header>

      {/* --- CLASSIC LOOPS VS MODERN --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Traditional Loops */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Play className="text-amber-500 w-5 h-5" /> Manual Loops
          </h3>
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-amber-600 font-bold block mb-2">// The "For" Loop</span>
              <p className="text-[11px] text-slate-500 mb-3 font-sans">Good when you know exactly how many times to repeat.</p>
              <code className="text-slate-700 block whitespace-pre bg-white p-3 rounded-lg border border-slate-100">
                {`for (let i = 0; i < 5; i++) {\n  console.log("Hello!");\n}`}
              </code>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-sky-600 font-bold block mb-2">// The "While" Loop</span>
              <p className="text-[11px] text-slate-500 mb-3 font-sans">Runs as long as a certain condition is true.</p>
              <code className="text-slate-700 block whitespace-pre bg-white p-3 rounded-lg border border-slate-100">
                {`while (isPowerOn) {\n  // Keep running...\n}`}
              </code>
            </div>
          </div>
        </div>

        {/* Functional Iterators */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <ListFilter className="text-emerald-500 w-5 h-5" /> Modern Smart Loops
          </h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            In modern JavaScript, we use these special tools to handle arrays. They are cleaner and less likely to cause bugs.
          </p>
          <div className="space-y-3">
            {[
              { name: "map()", desc: "Changes every item in your list." },
              { name: "filter()", desc: "Keeps only the items you want." },
              { name: "reduce()", desc: "Squashes the whole list into one result." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100/50 gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/50 px-2 py-1 rounded w-fit">{item.name}</span>
                <span className="text-xs text-slate-500 font-medium">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MASTER CODE: DATA PIPELINE --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl mb-12">
        <div className="px-6 py-4 bg-slate-800 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutList className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">data-cleanup.js</span>
          </div>
          <RotateCcw className="w-3 h-3 text-slate-500" />
        </div>
        <div className="p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
          <div className="text-slate-500 italic mb-4">// Chaining: Connect multiple actions like a factory line</div>
          <div><span className="text-pink-400">const</span> results = items</div>
          <div className="pl-6 border-l border-slate-700 ml-2 mt-2 space-y-1">
            <div><span className="text-slate-400">.</span><span className="text-emerald-400">filter</span>(i ={">"} i.price {"<"} <span className="text-amber-200">100</span>) <span className="text-slate-500">// 1. Find cheap items</span></div>
            <div><span className="text-slate-400">.</span><span className="text-emerald-400">map</span>(i ={">"} i.name); <span className="text-slate-500">// 2. Just get the names</span></div>
          </div>
        </div>
      </section>

      {/* --- PRO TIP --- */}
      <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl border border-slate-800">
        <div className="shrink-0 bg-amber-500 p-4 rounded-2xl shadow-lg shadow-amber-500/20">
          <Zap className="w-6 h-6 text-white fill-current" />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2 italic">Why avoid manual loops?</h4>
          <p className="text-slate-400 leading-relaxed text-sm">
            Manual loops are easy to break. If you forget to increment your counter (<code>i++</code>), you can crash the user's browser with an "Infinite Loop." Smart loops like <b>map</b> and <b>filter</b> handle the counting for you automatically!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loops;