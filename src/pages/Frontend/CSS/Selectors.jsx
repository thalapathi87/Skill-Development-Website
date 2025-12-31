import React from "react";
// Lucide icons use pannuvom, ithu innum professional-ah irukkum
import { Target, Layers, Zap, Shield, BoxSelect, MousePointer2 } from "lucide-react";

function Selectors() {
  const selectorTypes = [
    { type: "Universal", syntax: "* { }", usage: "Global resets & box-sizing.", icon: <BoxSelect className="w-4 h-4" /> },
    { type: "Type/Element", syntax: "h1 { }", usage: "Base typography & tags.", icon: <Target className="w-4 h-4" /> },
    { type: "Class", syntax: ".btn { }", usage: "Components & reusable styles.", icon: <Layers className="w-4 h-4" /> },
    { type: "ID", syntax: "#nav { }", usage: "Single unique element.", icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="flex items-center gap-2 text-rose-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
          <Target className="w-4 h-4" />
          <span>Architecture Module 02</span>
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">Targeting</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium">
          Selectors are the bridge between your logic and your layout. Mastering them means writing 90% less code.
        </p>
      </header>

      {/* --- SELECTOR CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {selectorTypes.map((item, i) => (
          <div key={i} className="group p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
            <code className="text-[10px] block mb-3 text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded-md w-fit">
              {item.syntax}
            </code>
            <p className="text-xs text-slate-500 leading-relaxed">{item.usage}</p>
          </div>
        ))}
      </div>

      {/* --- SPECIFICITY MASTERCLASS --- */}
      <section className="grid lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-slate-800 mb-4 flex items-center gap-3">
              <Layers className="text-rose-500" /> Specificity
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Specificity decide pannum entha CSS rule element-la apply aagum nu. Ithu oru calculation maari:
            </p>
          </div>

          <div className="space-y-3">
            {[
              { label: "Inline Styles", score: "1000", color: "bg-orange-500" },
              { label: "ID Selectors", score: "100", color: "bg-rose-500" },
              { label: "Class / Pseudo", score: "10", color: "bg-sky-500" },
              { label: "Elements", score: "1", color: "bg-slate-400" }
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <span className="font-bold text-slate-700 text-sm">{s.label}</span>
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-20 rounded-full ${s.color} opacity-20`} />
                  <span className={`font-mono font-black ${s.color.replace('bg-', 'text-')}`}>{s.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CODE EDITOR --- */}
        <div className="lg:col-span-7 bg-slate-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent pointer-events-none" />
          <div className="px-8 py-6 flex justify-between items-center border-b border-white/5">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/40" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
             </div>
             <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">combinators.css</span>
          </div>
          <div className="p-10 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="mb-8">
              <span className="text-slate-500 italic block mb-2">// Child Combinator</span>
              <div className="flex gap-3">
                <span className="text-rose-400 font-bold">article</span>
                <span className="text-sky-400 font-bold">&gt;</span>
                <span className="text-rose-400 font-bold">p</span>
                <span className="text-slate-400">{"{"}</span>
              </div>
              <div className="pl-8 text-slate-300">margin-bottom: 2rem;</div>
              <span className="text-slate-400">{"}"}</span>
            </div>

            <div className="mb-8">
              <span className="text-slate-500 italic block mb-2">// Adjacent Sibling</span>
              <div className="flex gap-3">
                <span className="text-rose-400 font-bold">h2</span>
                <span className="text-sky-400 font-bold">+</span>
                <span className="text-rose-400 font-bold">p</span>
                <span className="text-slate-400">{"{"}</span>
              </div>
              <div className="pl-8 text-slate-300 font-semibold tracking-wide">font-weight: 700;</div>
              <span className="text-slate-400">{"}"}</span>
            </div>

            <div>
              <span className="text-slate-500 italic block mb-2">// Pseudo-Classes</span>
              <div className="flex gap-1 flex-wrap">
                <span className="text-rose-400 font-bold">button</span>
                <span className="text-amber-300 font-bold">:not</span>
                <span className="text-slate-400">(</span>
                <span className="text-amber-300 font-bold">:disabled</span>
                <span className="text-slate-400">)</span>
                <span className="text-amber-300 font-bold">:hover</span>
                <span className="text-slate-400">{"{"}</span>
              </div>
              <div className="pl-8 text-slate-300">transform: translateY(-2px);</div>
              <span className="text-slate-400">{"}"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MASTER NOTE --- */}
      <div className="p-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-[2.5rem]">
        <div className="bg-white p-10 rounded-[2.4rem] flex flex-col md:flex-row items-center gap-8">
           <div className="w-20 h-20 rounded-[1.5rem] bg-rose-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-200">
              <Zap className="w-10 h-10 fill-current" />
           </div>
           <div>
              <h4 className="text-2xl font-black text-slate-900 mb-2 italic">Pro Strategy</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Keep specificity low. Avoid IDs for styling; stick to <strong className="text-rose-500 underline decoration-rose-200 underline-offset-4">Classes</strong>. 
                Ithu unga code-ah override panna romba easy-ah vekkum and performance-ah upgrade pannum.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Selectors;