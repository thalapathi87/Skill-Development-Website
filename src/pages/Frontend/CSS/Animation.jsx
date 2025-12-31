import React from "react";
import { Sparkles, Zap, Play, Timer, Repeat, MoveUpRight } from "lucide-react";

function Animation() {
  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-fuchsia-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Architecture Module 06</span>
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Motion <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">Design</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium">
          Animations aren't just eye candy; they guide user attention, provide feedback, and create a "living" digital experience.
        </p>
      </header>

      {/* --- TRANSITION VS ANIMATION GRID --- */}
      <section className="mb-16 grid md:grid-cols-2 gap-8">
        {/* Transition Card */}
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-fuchsia-50 rounded-2xl flex items-center justify-center text-fuchsia-600 group-hover:rotate-12 transition-transform">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-800">Transitions</h3>
          </div>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            State changes (like Hover or Click) nadukkum pothu smooth-ah irukka use aagum. "Point A to Point B" movements-ku ithu best.
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl font-mono text-[11px] text-fuchsia-600">
            transition: all 0.3s ease-in-out;
          </div>
        </div>

        {/* Animation Card */}
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 group-hover:animate-pulse">
              <Repeat className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-800">Keyframes</h3>
          </div>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Complex and continuous movements-ku use aagum. Multi-step animations-ah `keyframes` moolama control pannalaam.
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl font-mono text-[11px] text-pink-600">
            animation: pulse 2s infinite;
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE PREVIEW --- */}
      <section className="mb-16 bg-slate-900 rounded-[3rem] p-12 shadow-2xl overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Play className="w-40 h-40 text-white rotate-12" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-sm">
            <h2 className="text-3xl font-black text-white mb-4">Live Sandbox</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Intha elements-oda motion-ah check pannunga. Master level-la namma eppovume <strong>GPU-accelerated</strong> properties (Transform, Opacity) thaan use pannuvom.
            </p>
            <button className="px-8 py-4 bg-fuchsia-600 text-white rounded-2xl font-bold hover:bg-fuchsia-500 hover:-translate-y-1 transition-all shadow-xl shadow-fuchsia-900/20 flex items-center gap-2">
              Hover Me <MoveUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="w-24 h-24 bg-gradient-to-tr from-fuchsia-500 to-pink-500 rounded-3xl animate-bounce shadow-lg shadow-fuchsia-500/20" />
             <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl animate-pulse delay-700" />
             <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl animate-spin [animation-duration:3s]" />
             <div className="w-24 h-24 border-2 border-dashed border-fuchsia-500/50 rounded-3xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-ping" />
             </div>
          </div>
        </div>
      </section>

      {/* --- MASTER CODE: KEYFRAMES --- */}
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <Play className="text-fuchsia-500" /> Keyframe Logic
        </h2>
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 font-mono text-sm shadow-xl">
          <div className="mb-8">
            <span className="text-purple-400">@keyframes</span> <span className="text-sky-300">float</span> <span className="text-slate-400">{"{"}</span>
            <div className="pl-8">
              <span className="text-amber-200">0%</span> <span className="text-slate-400">{"{"}</span> <span className="text-sky-300">transform</span>: <span className="text-amber-100">translateY(0)</span>; <span className="text-slate-400">{"}"}</span>
              <br/>
              <span className="text-amber-200">50%</span> <span className="text-slate-400">{"{"}</span> <span className="text-sky-300">transform</span>: <span className="text-amber-100">translateY(-20px)</span>; <span className="text-slate-400">{"}"}</span>
              <br/>
              <span className="text-amber-200">100%</span> <span className="text-slate-400">{"{"}</span> <span className="text-sky-300">transform</span>: <span className="text-amber-100">translateY(0)</span>; <span className="text-slate-400">{"}"}</span>
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <span className="text-pink-400">.master-animation</span> <span className="text-slate-400">{"{"}</span>
            <div className="pl-8">
              <span className="text-sky-300">animation</span>: <span className="text-amber-200">float 3s ease-in-out infinite</span>;
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
        <div className="shrink-0 relative">
          <div className="absolute inset-0 bg-fuchsia-500 blur-2xl opacity-20 animate-pulse" />
          <Zap className="w-12 h-12 text-fuchsia-500 fill-current relative" />
        </div>
        <div className="relative">
          <h4 className="text-xl font-black mb-2 italic">Performance Pro-Tip</h4>
          <p className="text-slate-400 leading-relaxed font-medium">
            Always animate properties like <strong>transform</strong> (scale, translate, rotate) and <strong>opacity</strong>. Never animate <strong>margin, width, or height</strong> as they trigger browser "reflow" which causes lag. 
            Keep it smooth at 60fps!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Animation;