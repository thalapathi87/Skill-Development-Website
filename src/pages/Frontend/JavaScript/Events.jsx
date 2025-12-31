import React from "react";
import { MousePointerClick, Zap, MoveUp, ShieldAlert, Terminal, Info } from "lucide-react";

function Events() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- HEADER --- */}
      <header className="mb-10 relative">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <MousePointerClick className="w-4 h-4" />
          <span>Lesson 08: Handling Interactions</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Event <span className="text-amber-500">Basics</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
          Events are actions that happen on your webpage—like a user clicking a button, typing in a box, or the page finishing its load.
        </p>
      </header>

      {/* --- EVENT TYPES GRID --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Common Events */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Zap className="text-amber-500 w-5 h-5" /> Popular Events
          </h3>
          <div className="space-y-3">
            {[
              { type: "click", desc: "Triggers when an element is clicked." },
              { type: "submit", desc: "Triggers when a form is sent." },
              { type: "keyup", desc: "Triggers when you release a keyboard key." },
              { type: "DOMContentLoaded", desc: "Triggers when the HTML is fully ready." }
            ].map((ev, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-2">
                <code className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded w-fit">{ev.type}</code>
                <span className="text-xs text-slate-500">{ev.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bubbling Explanation */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <MoveUp className="text-sky-500 w-5 h-5" /> Event Bubbling
          </h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            When you click a button inside a box, the click "bubbles up" to the box and then to the whole page. To stop this travel, use:
          </p>
          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100">
            <code className="text-[11px] block text-slate-600 font-mono bg-white p-3 rounded-xl shadow-sm">
              event.stopPropagation();
            </code>
            <p className="text-[10px] text-sky-600 mt-3 font-medium italic text-center">
              "Stop the event from telling my parents!"
            </p>
          </div>
        </div>
      </section>

      {/* --- CODE EXAMPLE: DELEGATION --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl mb-12">
        <div className="px-6 py-4 bg-slate-800 border-b border-white/5 flex items-center gap-3">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">smart-events.js</span>
        </div>
        <div className="p-8 font-mono text-xs md:text-sm leading-relaxed text-slate-300 overflow-x-auto">
          <div className="text-slate-500 italic mb-4">// Smart way: One listener on the parent handles all children</div>
          <div><span className="text-pink-400">const</span> list = document.<span className="text-emerald-400">querySelector</span>(<span className="text-amber-200">'.menu'</span>);</div>
          <br />
          <div>list.<span className="text-emerald-400">addEventListener</span>(<span className="text-amber-200">'click'</span>, (e) ={">"} {"{"}</div>
          <div className="pl-6 border-l border-slate-700 ml-2">
            <span className="text-pink-400">if</span> (e.target.tagName === <span className="text-amber-200">'LI'</span>) {"{"}
            <div className="pl-6 text-emerald-400">console.log('You clicked an item!');</div>
            {"}"}
          </div>
          <div>{"}"});</div>
        </div>
      </section>

      {/* --- PREVENT DEFAULT --- */}
      <div className="p-6 md:p-8 bg-amber-50 border border-amber-200 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-amber-100">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-amber-900 mb-1">Stop Default Actions</h4>
          <p className="text-amber-800 text-sm opacity-90">
            Some elements (like forms and links) refresh the page by default. Use <code className="bg-amber-200/50 px-1 rounded font-bold">e.preventDefault()</code> to keep the user on the same page.
          </p>
        </div>
      </div>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl border border-slate-800">
        <div className="shrink-0 bg-amber-500 p-4 rounded-2xl">
          <Info className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Pro Tip: Clean Up</h4>
          <p className="text-slate-400 leading-relaxed text-sm">
            Always remove your Event Listeners when you don't need them anymore. If you keep adding them without removing, your app will use too much memory and become slow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;