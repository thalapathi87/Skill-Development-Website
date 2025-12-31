import React from "react";
import { MoveRight, LayoutPanelTop, Zap, Crosshair, ArrowRightLeft } from "lucide-react";

function Flexbox() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-violet-600 font-bold uppercase tracking-wider text-xs mb-3">
          <LayoutPanelTop className="w-4 h-4" />
          <span>Design Module 04</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">Box Layout</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
          Flexbox is a layout tool that helps you arrange items in a row or a column. It makes it easy to align items and distribute extra space, even if you don't know the exact size of your content.
        </p>
      </header>

      {/* --- FLEX AXIS VISUALIZER --- */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <ArrowRightLeft className="text-violet-500" /> The Two Directions
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-violet-50 rounded-2xl border-l-4 border-violet-500">
              <h4 className="font-black text-violet-700 text-sm uppercase mb-1">Main Axis</h4>
              <p className="text-xs text-slate-600">This is the primary direction. By default, it goes from left to right (row).</p>
            </div>
            <div className="p-5 bg-fuchsia-50 rounded-2xl border-l-4 border-fuchsia-500">
              <h4 className="font-black text-fuchsia-700 text-sm uppercase mb-1">Cross Axis</h4>
              <p className="text-xs text-slate-600">This is the opposite direction. If your items are in a row, this axis goes top to bottom.</p>
            </div>
          </div>
        </div>

        {/* --- VISUAL PREVIEW --- */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-center min-h-[300px]">
          <div className="flex justify-between items-center mb-6 px-2">
            <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase italic">// flex-container preview</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 bg-slate-800/50 p-6 md:p-10 rounded-3xl border border-white/5">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-violet-500 rounded-2xl shadow-lg shadow-violet-500/20 flex items-center justify-center text-white font-bold">1</div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-fuchsia-500 rounded-2xl shadow-lg shadow-fuchsia-500/20 flex items-center justify-center text-white font-bold">2</div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center text-white font-bold">3</div>
          </div>
        </div>
      </section>

      {/* --- MASTER PROPERTIES --- */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <Crosshair className="text-violet-500" /> Alignment Basics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Justify Content", 
              syntax: "justify-content", 
              desc: "Moves items along the Main Axis (horizontal by default).",
              options: ["flex-start", "center", "space-between"]
            },
            { 
              title: "Align Items", 
              syntax: "align-items", 
              desc: "Moves items along the Cross Axis (vertical by default).",
              options: ["stretch", "center", "flex-end"]
            },
            { 
              title: "Flex Wrap", 
              syntax: "flex-wrap", 
              desc: "Decides if items should jump to a new line when they run out of space.",
              options: ["nowrap", "wrap", "wrap-reverse"]
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm transition-all">
              <h3 className="font-bold text-slate-800 mb-1 text-lg">{item.title}</h3>
              <code className="text-[10px] text-violet-600 font-bold block mb-3 font-mono">{item.syntax}</code>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.options.map(opt => (
                  <span key={opt} className="text-[9px] bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-500 font-mono">{opt}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CODE SECTION --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
        <div className="px-8 py-5 bg-slate-800/50 border-b border-white/5 flex items-center gap-3">
          <MoveRight className="w-4 h-4 text-violet-400" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">center-anything.css</span>
        </div>
        <div className="p-8 md:p-10 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
          <span className="text-pink-400">.container</span> <span className="text-slate-400">{"{"}</span>
          <div className="pl-6 border-l border-slate-800 ml-2 mt-2">
            <span className="text-sky-300">display</span>: <span className="text-amber-200">flex</span>;
            <br />
            <span className="text-sky-300">justify-content</span>: <span className="text-amber-200">center</span>; <span className="text-slate-500 italic ml-2">// Centers horizontally</span>
            <br />
            <span className="text-sky-300">align-items</span>: <span className="text-amber-200">center</span>; <span className="text-slate-500 italic ml-2">// Centers vertically</span>
            <br />
            <span className="text-sky-300">gap</span>: <span className="text-amber-200">20px</span>; <span className="text-slate-500 italic ml-2">// Easy spacing</span>
          </div>
          <span className="text-slate-400">{"}"}</span>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-[2.5rem] shadow-xl shadow-violet-500/10">
        <div className="bg-white p-6 md:p-8 rounded-[2.4rem] flex flex-col md:flex-row items-center gap-6 md:gap-8">
           <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center text-white shrink-0">
              <Zap className="w-6 h-6 fill-current" />
           </div>
           <div>
             <h4 className="text-lg font-bold text-slate-900 mb-1">Layout Strategy</h4>
             <p className="text-slate-600 text-sm leading-relaxed">
               Always try to use the <code className="bg-slate-100 px-1 rounded">gap</code> property for spacing—it is much easier than managing margins on every child. Use Flexbox for small sections or aligning items in a line, but use <strong>CSS Grid</strong> for building complex website structures.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Flexbox;