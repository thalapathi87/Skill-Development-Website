import React from "react";
import { Smartphone, Tablet, Monitor, Zap, MoveRight, Expand, CheckCircle2 } from "lucide-react";

function Responsive() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Expand className="w-4 h-4" />
          <span>Architecture Module 07</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Adaptive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Interfaces</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
          Responsive design means your website looks great on every screen. Instead of making different websites for mobile and desktop, we use one code that "flows" to fit the screen size.
        </p>
      </header>

      {/* --- DEVICE BREAKPOINT VISUALIZER --- */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <Smartphone className="text-amber-500 w-6 h-6" /> Common Screen Sizes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Smartphone />, label: "Mobile", size: "640px", desc: "Start here. Design for small screens first." },
            { icon: <Tablet />, label: "Tablet", size: "768px", desc: "Add more columns and larger buttons." },
            { icon: <Monitor />, label: "Desktop", size: "1024px", desc: "Full-width content and complex sidebars." }
          ].map((device, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:border-amber-200 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {device.icon}
              </div>
              <h3 className="font-bold text-slate-800 mb-1 text-lg">{device.label}</h3>
              <p className="text-[10px] font-mono text-amber-600 font-bold mb-3 uppercase tracking-widest">Starts at: {device.size}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{device.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MASTER CODE: MEDIA QUERIES --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 relative">
        <div className="px-8 py-5 bg-slate-800/50 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MoveRight className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">responsive-strategy.css</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
        </div>

        <div className="p-8 md:p-10 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
          <div className="mb-10">
            <span className="text-slate-500 italic block mb-3">// 1. Mobile First: Standard look for phones</span>
            <span className="text-pink-400">.container</span> <span className="text-slate-400">{"{"}</span>
            <div className="pl-6 border-l border-slate-800 ml-2 mt-2">
              <span className="text-sky-300">display</span>: <span className="text-amber-200">block</span>; <span className="text-slate-500 italic ml-2">// Stack items vertically</span>
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>

          <div>
            <span className="text-slate-500 italic block mb-3">// 2. Upgrade for Tablets and Desktops</span>
            <span className="text-purple-400">@media</span> <span className="text-slate-400">(</span><span className="text-sky-300">min-width</span>: <span className="text-amber-200">768px</span><span className="text-slate-400">) {"{"}</span>
            <div className="pl-6 border-l border-slate-700 ml-2 mt-2">
              <span className="text-pink-400">.container</span> <span className="text-slate-400">{"{"}</span>
              <div className="pl-6 border-l border-slate-700 ml-2 mt-2">
                 <span className="text-sky-300">display</span>: <span className="text-amber-200">grid</span>;
                 <br/>
                 <span className="text-sky-300">grid-template-columns</span>: <span className="text-amber-200">1fr 1fr</span>; <span className="text-slate-500 italic ml-2">// Switch to side-by-side</span>
              </div>
              <span className="text-slate-400">{"}"}</span>
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl border border-slate-800">
        <div className="shrink-0 bg-amber-500 p-5 rounded-2xl shadow-lg shadow-amber-500/20">
          <Zap className="w-8 h-8 text-white fill-current" />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
            The "Mobile-First" Rule
          </h4>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Always write your basic CSS for mobile phones first. Then, use <b>Media Queries</b> to "unlock" extra styles for bigger screens. This makes your website load faster on phones and keeps your code much easier to manage!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Responsive;