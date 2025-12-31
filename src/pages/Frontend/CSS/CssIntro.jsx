import React from "react";
import { IoInformationCircle, IoColorPaletteOutline, IoFlashOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

function CssIntro() {
  return (
    <div className="max-w-4xl animate-in fade-in duration-700">
      {/* Header Section */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-indigo-500 font-bold uppercase tracking-widest text-xs mb-3">
          <IoInformationCircle className="text-lg" />
          <span>Module 01</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">CSS Essentials</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          CSS (Cascading Style Sheets) is the design engine of the web. Beyond just colors, 
          it governs the visual logic, spatial relationships, and responsive behavior of every digital interface.
        </p>
      </header>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: <IoColorPaletteOutline />, title: "Visual Style", desc: "Control typography, colors, and effects." },
          { icon: <IoFlashOutline />, title: "Interactivity", desc: "Craft smooth transitions and animations." },
          { icon: <IoShieldCheckmarkOutline />, title: "Layout Control", desc: "Manage spacing with Flexbox and Grid." }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl text-indigo-500 mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Deep Dive Section */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          The Anatomy of a Rule
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          In CSS, we target elements using <strong>selectors</strong> and apply <strong>declarations</strong> 
          within a block. Every declaration is a key-value pair.
        </p>

        {/* Code Playground Look */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-[10px] text-slate-400 font-mono tracking-widest uppercase">styles.css</span>
          </div>
          <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
            <span className="text-pink-400">p</span> <span className="text-slate-400">{"{"}</span>
            <div className="pl-6">
              <span className="text-sky-300">color</span><span className="text-slate-400">:</span> <span className="text-amber-200">#6366f1</span><span className="text-slate-400">;</span>
              <br />
              <span className="text-sky-300">font-size</span><span className="text-slate-400">:</span> <span className="text-amber-200">1.2rem</span><span className="text-slate-400">;</span>
              <br />
              <span className="text-sky-300">line-height</span><span className="text-slate-400">:</span> <span className="text-amber-200">1.6</span><span className="text-slate-400">;</span>
              <br />
              <span className="text-sky-300">transition</span><span className="text-slate-400">:</span> <span className="text-amber-200">all 0.3s ease</span><span className="text-slate-400">;</span>
            </div>
            <span className="text-slate-400">{"}"}</span>
          </div>
        </div>
      </section>

      {/* Master Tip */}
      <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-6">
        <div className="text-5xl opacity-50 font-black italic select-none">PRO</div>
        <div>
          <h4 className="font-bold text-lg mb-1">Separation of Concerns</h4>
          <p className="text-indigo-100 text-sm leading-relaxed">
            Always keep your CSS external. This improves maintainability, enables browser caching, 
            and keeps your HTML semantic and clean.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CssIntro;