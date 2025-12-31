import React from "react";
import { Cpu, Zap, Repeat, MousePointer2, GitMerge, Info, ArrowRight } from "lucide-react";

function Functions() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- HEADER --- */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Cpu className="w-4 h-4" />
          <span>Lesson 05: Building Logic</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Functional <span className="text-amber-500">Mastery</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          Functions are like recipes. You write them once, and you can "cook" (run) them whenever you need to perform a specific task.
        </p>
      </header>

      {/* --- FUNCTION TYPES GRID --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Hoisting Logic */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Repeat className="text-amber-500 w-5 h-5" /> Defining Functions
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-amber-600 uppercase mb-1 block">Classic Way</span>
              <code className="text-xs text-slate-700 block mb-2 font-bold">{`function greet() { ... }`}</code>
              <p className="text-xs text-slate-500">You can use this function even if you write it at the very bottom of your file.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-sky-600 uppercase mb-1 block">Variable Way</span>
              <code className="text-xs text-slate-700 block mb-2 font-bold">{`const greet = function() { ... }`}</code>
              <p className="text-xs text-slate-500">This must be created before you try to use it.</p>
            </div>
          </div>
        </div>

        {/* Arrow Functions */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Zap className="text-sky-500 w-5 h-5" /> Arrow Functions
          </h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            The modern, shorter way to write logic. They are very popular in React because they are clean and easy to read.
          </p>
          <div className="bg-slate-900 p-5 rounded-2xl font-mono text-[11px] text-amber-300 shadow-inner">
            <span className="text-slate-500 italic">// Shorter syntax</span>
            <br />
            {`const add = (a, b) => a + b;`}
            <br /><br />
            <span className="text-slate-500 italic">// With multiple steps</span>
            <br />
            {`const sub = (a, b) => {`}
            <br />
            <span className="pl-4">{`return a - b;`}</span>
            <br />
            {`};`}
          </div>
        </div>
      </section>

      {/* --- ADVANCED CONCEPTS --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl mb-12">
        <div className="px-6 py-4 bg-slate-800 border-b border-white/5 flex items-center gap-3">
          <GitMerge className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">logic-patterns.js</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Callbacks */}
          <div className="p-8">
            <h4 className="text-emerald-400 font-bold mb-3 text-sm flex items-center gap-2">
              <MousePointer2 className="w-4 h-4" /> Callbacks
            </h4>
            <p className="text-slate-400 text-xs mb-5">Passing a function inside another function so it can be used later.</p>
            <div className="font-mono text-[11px] text-slate-300 bg-black/30 p-4 rounded-xl">
              {`button.onClick(() => {`}
              <div className="pl-4 text-emerald-400">{`console.log("Clicked!");`}</div>
              {`});`}
            </div>
          </div>

          {/* Closures */}
          <div className="p-8">
            <h4 className="text-sky-400 font-bold mb-3 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4" /> Memory (Closures)
            </h4>
            <p className="text-slate-400 text-xs mb-5">A function that "remembers" variables even after they should be gone.</p>
            <div className="font-mono text-[11px] text-slate-300 bg-black/30 p-4 rounded-xl">
              {`function box() {`}
              <div className="pl-4">{`let secret = "lock";`}</div>
              <div className="pl-4 text-sky-400">{`return () => secret;`}</div>
              {`}`}
            </div>
          </div>
        </div>
      </section>

      {/* --- TIPS --- */}
      <div className="p-6 md:p-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2.5rem] text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="shrink-0 bg-white/20 p-4 rounded-2xl">
            <Info className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Keep it Pure</h4>
            <p className="text-amber-50 text-sm leading-relaxed opacity-90">
              Try to write functions that only care about their <b>inputs</b> and give a predictable <b>output</b>. This prevents hidden bugs and makes your code much easier to test!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functions;