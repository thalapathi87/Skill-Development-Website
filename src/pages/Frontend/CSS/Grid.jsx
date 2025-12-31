import React from "react";
import { Grid3X3, LayoutDashboard, Combine, SplitSquareVertical, Zap } from "lucide-react";

function Grid() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Grid3X3 className="w-4 h-4" />
          <span>Architecture Module 05</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">CSS Grid</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
          CSS Grid is the most powerful layout tool in web design. It allows you to build complex 2D layouts (using both rows and columns) with very little code.
        </p>
      </header>

      {/* --- GRID VISUALIZER --- */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <LayoutDashboard className="text-emerald-500 w-6 h-6" /> Layout Concept
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium">
            Think of a Grid like a table. You decide how many columns and rows you want, and then you place your content exactly where it belongs.
          </p>
          
          <div className="relative w-full aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-4">
            {/* Visual Grid Simulation */}
            <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-emerald-500/20 border-2 border-emerald-500 rounded-xl flex items-center justify-center text-emerald-700 font-bold text-xs md:text-sm">
                  Item {item}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg">
              2D Layout: Rows + Columns
            </div>
          </div>
        </div>

        {/* --- GRID PROPERTIES --- */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <Combine className="text-emerald-500 w-6 h-6" /> Basic Controls
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { prop: "display: grid;", desc: "Turns the container into a grid." },
              { prop: "grid-template-columns:", desc: "Sets the number and width of columns." },
              { prop: "grid-template-rows:", desc: "Sets the height of each row." },
              { prop: "gap:", desc: "Adds equal space between every item." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-hover hover:border-emerald-200">
                <code className="font-bold text-emerald-700 text-sm block mb-1 font-mono">{item.prop}</code>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CODE MASTERCLASS --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
        <div className="px-8 py-5 bg-slate-800/50 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SplitSquareVertical className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">modern-layout.css</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          </div>
        </div>
        <div className="p-8 md:p-10 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
          <div className="mb-8">
            <span className="text-slate-500 italic block mb-3">// Creating 3 Equal Columns easily</span>
            <span className="text-pink-400">.gallery</span> <span className="text-slate-400">{"{"}</span>
            <div className="pl-6 border-l border-slate-800 ml-2 mt-2">
              <span className="text-sky-300">display</span>: <span className="text-amber-200">grid</span>;
              <br />
              <span className="text-sky-300">grid-template-columns</span>: <span className="text-amber-200">repeat(3, 1fr)</span>; 
              <br />
              <span className="text-sky-300">gap</span>: <span className="text-amber-200">20px</span>;
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>

          <div>
            <span className="text-slate-500 italic block mb-3">// Classic Layout: Sidebar (200px) + Main Content</span>
            <span className="text-pink-400">.dashboard</span> <span className="text-slate-400">{"{"}</span>
            <div className="pl-6 border-l border-slate-800 ml-2 mt-2">
              <span className="text-sky-300">display</span>: <span className="text-amber-200">grid</span>;
              <br />
              <span className="text-sky-300">grid-template-columns</span>: <span className="text-amber-200">200px 1fr</span>;
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-1 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-[2.5rem] shadow-xl shadow-emerald-500/10">
        <div className="bg-white p-8 rounded-[2.4rem] flex flex-col md:flex-row items-center gap-8">
           <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-200">
              <Zap className="w-6 h-6 fill-current" />
           </div>
           <div>
             <h4 className="text-lg font-bold text-slate-900 mb-1">When to use Grid?</h4>
             <p className="text-slate-600 text-sm leading-relaxed">
               Use <b>CSS Grid</b> for your overall page layout (Header, Sidebar, Main Content, Footer). For smaller things like aligning icons and text in a button, <b>Flexbox</b> is usually the better choice!
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;