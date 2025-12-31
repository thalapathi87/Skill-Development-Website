import React from "react";
import { Box, Maximize, Layout, Info, Zap } from "lucide-react";

function BoxModel() {
  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-sky-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
          <Box className="w-4 h-4" />
          <span>Architecture Module 03</span>
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-500">Box Model</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium">
          In CSS, everything is a box. Understanding how space is calculated is the difference between a broken layout and a pixel-perfect design.
        </p>
      </header>

      {/* --- BOX MODEL VISUALIZER --- */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <Layout className="text-sky-500" /> Visual Anatomy
        </h2>

        

        <div className="relative group overflow-hidden bg-white border border-slate-100 p-8 md:p-16 rounded-[3rem] shadow-sm flex items-center justify-center">
          {/* Layered Box Visualization */}
          <div className="w-full max-w-md aspect-square relative flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-widest">
            
            {/* Margin Layer */}
            <div className="absolute inset-0 bg-orange-50 border-2 border-dashed border-orange-200 rounded-3xl flex items-start justify-center pt-2 text-orange-400">
              Margin
            </div>

            {/* Border Layer */}
            <div className="absolute inset-8 bg-yellow-50 border-[3px] border-yellow-400 rounded-2xl flex items-start justify-center pt-2 text-yellow-600">
              Border
            </div>

            {/* Padding Layer */}
            <div className="absolute inset-16 bg-emerald-50 border-2 border-dashed border-emerald-200 rounded-xl flex items-start justify-center pt-2 text-emerald-500">
              Padding
            </div>

            {/* Content Layer */}
            <div className="absolute inset-24 bg-sky-500 shadow-xl shadow-sky-200 rounded-lg flex items-center justify-center text-white text-xs text-center px-4">
              Content Area
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPLANATION GRID --- */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[
          { title: "Content", color: "text-sky-500", desc: "The actual space where text, images, or child elements reside." },
          { title: "Padding", color: "text-emerald-500", desc: "Transparent area inside the border. Clears space around the content." },
          { title: "Border", color: "text-yellow-600", desc: "The edge of the box. Can be styled with different widths, colors, and patterns." },
          { title: "Margin", color: "text-orange-500", desc: "Space outside the border. Used to push other elements away." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <h3 className={`text-xl font-black mb-3 ${item.color}`}>{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* --- THE MASTER SECRET: BOX SIZING --- */}
      <section className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl mb-16">
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white">
              <Maximize className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">Mastering Box-Sizing</h3>
              <p className="text-slate-400 text-sm">The most important CSS property for layouts.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-white/5">
                <h4 className="text-emerald-400 font-bold mb-2">Border-Box (The Pro Way)</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Width/Height include padding and borders. Calculation becomes easy: <br/>
                  <code className="text-white bg-slate-700 px-2 py-1 rounded mt-2 block w-fit">Total Width = Defined Width</code>
                </p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-white/5 opacity-50">
                <h4 className="text-rose-400 font-bold mb-2">Content-Box (Default)</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Padding and borders are added OUTSIDE the width. Often causes layout breaks.
                </p>
              </div>
            </div>

            {/* CODE PREVIEW */}
            <div className="bg-slate-950 rounded-2xl p-8 font-mono text-sm border border-white/5">
              <span className="text-slate-500 italic block mb-4">// Reset everything to Border-Box</span>
              <span className="text-pink-400">*</span> <span className="text-slate-400">{"{"}</span>
              <div className="pl-6">
                <span className="text-sky-300">box-sizing</span><span className="text-slate-400">:</span> <span className="text-amber-200">border-box</span><span className="text-slate-400">;</span>
                <br />
                <span className="text-sky-300">margin</span><span className="text-slate-400">:</span> <span className="text-amber-200">0</span><span className="text-slate-400">;</span>
                <br />
                <span className="text-sky-300">padding</span><span className="text-slate-400">:</span> <span className="text-amber-200">0</span><span className="text-slate-400">;</span>
              </div>
              <span className="text-slate-400">{"}"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-10 bg-gradient-to-br from-indigo-600 to-sky-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="shrink-0">
          <Zap className="w-12 h-12 fill-current text-white/90" />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Architect's Strategy</h4>
          <p className="text-indigo-50 leading-relaxed font-medium">
            Use <strong>Negative Margins</strong> sparingly and always prefer <strong>Padding</strong> for internal spacing to avoid overlapping issues. 
            Clean box model logic is the first step toward building complex components.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoxModel;