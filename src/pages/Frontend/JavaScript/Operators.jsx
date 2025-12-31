import React from "react";
import { Calculator, Zap, Divide, Hash, ArrowRightLeft, Info, CheckCircle2, AlertTriangle } from "lucide-react";

function Operators() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Calculator className="w-4 h-4" />
          <span>Lesson 04: Doing Math & Logic</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Logic & <span className="text-amber-500">Operations</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
          Operators are symbols that tell JavaScript to perform a task. Whether you are adding numbers or checking if a user is logged in, you will use operators.
        </p>
      </header>

      {/* --- COMPARISON SECTION --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <ArrowRightLeft className="text-amber-500 w-5 h-5" /> Comparing Values
          </h3>
          <div className="space-y-4">
            {/* Loose Equality */}
            <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-100">
              <div className="flex justify-between items-center mb-2">
                <code className="text-amber-700 font-bold text-base">== (Loose)</code>
                <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 uppercase">
                  <AlertTriangle className="w-3 h-3" /> Use Carefully
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Checks only the value. It tries to "guess" and convert types automatically.</p>
              <div className="bg-white p-2 rounded-lg text-[11px] font-mono text-slate-500 border border-amber-100">
                5 == "5" <span className="text-emerald-600 font-bold">// true</span>
              </div>
            </div>

            {/* Strict Equality */}
            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <div className="flex justify-between items-center mb-2">
                <code className="text-emerald-700 font-bold text-base">=== (Strict)</code>
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase">
                  <CheckCircle2 className="w-3 h-3" /> Best Practice
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Checks both the value AND the type. Most secure way to compare.</p>
              <div className="bg-white p-2 rounded-lg text-[11px] font-mono text-slate-500 border border-emerald-100">
                5 === "5" <span className="text-rose-600 font-bold">// false</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SHORTCUTS --- */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Zap className="text-sky-500 w-5 h-5" /> Logic Shortcuts
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-sky-600 font-bold text-xs block mb-1">Default Value (||)</span>
              <p className="text-xs text-slate-500 mb-3">If the first thing is missing, use the second thing.</p>
              <code className="text-[11px] bg-white p-2 block rounded-lg font-mono text-slate-700 border border-slate-100">
                const name = input || "Guest";
              </code>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-emerald-600 font-bold text-xs block mb-1">The "Safe" Check (??)</span>
              <p className="text-xs text-slate-500 mb-3">Only gives a default if the value is truly null or undefined.</p>
              <code className="text-[11px] bg-white p-2 block rounded-lg font-mono text-slate-700 border border-slate-100">
                const score = points ?? 0;
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* --- MATH OPERATORS --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl mb-12">
        <div className="px-6 py-4 bg-slate-800 border-b border-white/5">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Math-cheat-sheet.js</span>
        </div>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="text-pink-400 text-xs font-mono">// Remainder (%)</span>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 text-slate-300 font-mono text-sm">
              10 % 3 = <span className="text-amber-400 font-bold">1</span>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-pink-400 text-xs font-mono">// Power (**)</span>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 text-slate-300 font-mono text-sm">
              2 ** 3 = <span className="text-amber-400 font-bold">8</span>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-pink-400 text-xs font-mono">// Add One (++)</span>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 text-slate-300 font-mono text-sm">
              x = 5; x++; <span className="text-emerald-400 font-bold">6</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl border border-slate-700 relative overflow-hidden">
        <div className="shrink-0 bg-amber-500 p-4 rounded-2xl shadow-lg shadow-amber-500/20 relative z-10">
          <Hash className="w-8 h-8 text-white" />
        </div>
        <div className="relative z-10">
          <h4 className="text-lg font-bold mb-2">The "+" Confusion</h4>
          <p className="text-slate-400 leading-relaxed text-sm">
            Be careful! In JavaScript, the <code>+</code> symbol is used for both adding numbers and joining text. If you do <code>"5" + 2</code>, you get <b>"52"</b> (text). If you do <code>"5" - 2</code>, you get <b>3</b> (math). Always convert your text to numbers before doing math!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Operators;