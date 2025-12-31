import React from "react";
import { MousePointer2, Box, Layers, Zap, Terminal, Info } from "lucide-react";

function Dom() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- HEADER --- */}
      <header className="mb-10 relative">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Layers className="w-4 h-4" />
          <span>Lesson 07: Controlling the UI</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          DOM <span className="text-amber-500">Manipulation</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
          The DOM (Document Object Model) is a map of your website. JavaScript uses this map to add, change, or remove things on the screen instantly.
        </p>
      </header>

      {/* --- SELECTORS & METHODS --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Selection Tools */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <MousePointer2 className="text-amber-500 w-5 h-5" /> Finding Elements
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-amber-600 uppercase mb-1 block">Pick One</span>
              <code className="text-xs text-slate-700 block mb-2 font-bold">{`document.querySelector('.btn')`}</code>
              <p className="text-xs text-slate-500 leading-relaxed">Finds the first item that matches a CSS class or ID.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-sky-600 uppercase mb-1 block">Pick Many</span>
              <code className="text-xs text-slate-700 block mb-2 font-bold">{`document.querySelectorAll('p')`}</code>
              <p className="text-xs text-slate-500 leading-relaxed">Finds every matching item and puts them in a list.</p>
            </div>
          </div>
        </div>

        {/* Action Tools */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Box className="text-sky-500 w-5 h-5" /> Changing Elements
          </h3>
          <div className="space-y-3">
            {[
              { cmd: ".innerText =", desc: "Changes the text inside an element." },
              { cmd: ".style.color =", desc: "Changes the look (CSS) of an element." },
              { cmd: ".classList.add()", desc: "Adds a pre-defined CSS class to an element." }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100/50">
                <code className="text-xs font-bold text-sky-700">{item.cmd}</code>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CODE EXAMPLE --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl mb-12">
        <div className="px-6 py-4 bg-slate-800 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">script.js</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          </div>
        </div>
        <div className="p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
          <div className="text-slate-500 italic mb-3">// 1. Find the button</div>
          <div><span className="text-pink-400">const</span> btn = document.<span className="text-emerald-400">querySelector</span>(<span className="text-amber-200">'#myBtn'</span>);</div>
          
          <div className="text-slate-500 italic mt-6 mb-3">// 2. Do something when it is clicked</div>
          <div>btn.<span className="text-emerald-400">addEventListener</span>(<span className="text-amber-200">'click'</span>, () ={">"} {"{"}</div>
          <div className="pl-6 border-l border-slate-700 ml-2 mt-1">
            document.body.style.backgroundColor = <span className="text-amber-200">'blue'</span>;
            <br />
            alert(<span className="text-amber-200">'Color Changed!'</span>);
          </div>
          <div>{"}"});</div>
        </div>
      </section>

      {/* --- PRO TIP --- */}
      <div className="p-6 md:p-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] text-white border border-slate-700">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="shrink-0 bg-amber-500 p-4 rounded-2xl shadow-lg shadow-amber-500/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Performance Tip</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              Changing the DOM too many times at once can make your website slow. Instead of updating the screen 100 times in a row, try to make all your changes in memory first and then update the screen <b>once</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dom;