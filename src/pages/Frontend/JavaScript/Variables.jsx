import React from "react";
import { Variable, Lock, Unlock, Zap, AlertCircle, Info, ChevronRight } from "lucide-react";

function Variables() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Variable className="w-4 h-4" />
          <span>Lesson 02: Storing Data</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Memory <span className="text-amber-500">Containers</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
          Variables are like boxes where you store information. In modern JavaScript, how you label your "box" changes how the computer handles that data.
        </p>
      </header>

      {/* --- COMPARISON SECTION --- */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <Info className="text-amber-500 w-5 h-5" /> var vs let vs const
        </h2>
        
        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Feature</th>
                <th className="px-6 py-4 text-xs font-bold text-amber-600 font-mono italic">var</th>
                <th className="px-6 py-4 text-xs font-bold text-sky-600 font-mono italic">let</th>
                <th className="px-6 py-4 text-xs font-bold text-emerald-600 font-mono italic">const</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-700 text-sm">Where it works</td>
                <td className="px-6 py-4 text-slate-500 text-xs text-nowrap">Old way (Whole function)</td>
                <td className="px-6 py-4 text-slate-500 text-xs text-nowrap font-semibold">New way (Inside {})</td>
                <td className="px-6 py-4 text-slate-500 text-xs text-nowrap font-semibold">New way (Inside {})</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-700 text-sm">Can I change it?</td>
                <td className="px-6 py-4 text-emerald-600 font-bold text-xs uppercase">Yes</td>
                <td className="px-6 py-4 text-emerald-600 font-bold text-xs uppercase">Yes</td>
                <td className="px-6 py-4 text-rose-500 font-bold text-xs uppercase">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] text-slate-400 italic px-2">* Note: Table scrollable on mobile</p>
      </section>

      {/* --- SCOPE & SAFETY --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Block Scope */}
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
            <Unlock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Safety with Brackets</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Variables created with <code>let</code> and <code>const</code> only live inside the <strong>curly braces {}</strong> where they were born. They won't leak out and mess up other code.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-[11px] text-slate-600 border border-slate-100">
            {`if(true) { \n  let name = "Alex"; \n} \n// 'name' is gone here!`}
          </div>
        </div>

        {/* Access Rules */}
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Define Before Use</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            JavaScript is strict now. You cannot use a <code>let</code> or <code>const</code> variable before you write its line of code. If you try, the app will crash with an error.
          </p>
          <div className="bg-slate-900 p-4 rounded-xl font-mono text-[11px] text-amber-400 border border-slate-800">
            {`console.log(age); // ❌ CRASH \nlet age = 25;`}
          </div>
        </div>
      </div>

      {/* --- BEST PRACTICE CODE --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl mb-12">
        <div className="px-6 py-4 bg-slate-800/50 border-b border-white/5 flex items-center gap-3">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">variable-strategy.js</span>
        </div>
        <div className="p-8 font-mono text-xs md:text-sm leading-relaxed text-slate-300 overflow-x-auto">
          <div className="text-slate-500 italic mb-4">// Use 'const' for things that stay the same</div>
          <div><span className="text-pink-400">const</span> <span className="text-sky-300">USER_ID</span> = <span className="text-amber-200">"9901"</span>;</div>
          
          <div className="text-slate-500 italic mt-6 mb-4">// Use 'let' for things that change (like scores)</div>
          <div><span className="text-pink-400">let</span> <span className="text-sky-300">points</span> = <span className="text-amber-200">0</span>;</div>
          <div>points = points + <span className="text-amber-200">10</span>; <span className="text-emerald-500 italic">// Allowed ✅</span></div>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl border border-slate-800">
        <div className="shrink-0 bg-amber-500 p-4 rounded-2xl shadow-lg shadow-amber-500/20">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">The Pro Strategy</h4>
          <p className="text-slate-400 leading-relaxed text-sm">
            Always start with <strong>const</strong>. If you later find out you need to update that value, change it to <strong>let</strong>. Never use <strong>var</strong> anymore—it's like using an old map that leads to bugs!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Variables;