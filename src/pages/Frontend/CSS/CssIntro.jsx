import React from "react";
import { IoInformationCircle, IoColorPaletteOutline, IoFlashOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

function CssIntro() {
  return (
    /* Added responsive padding for small screens and max-width for desktop */
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-700">
      
      {/* 1. Header Section - Responsive Text Sizing */}
      <header className="mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3">
          <IoInformationCircle className="text-base md:text-lg" />
          <span>Module 01</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">CSS Essentials</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
          CSS (Cascading Style Sheets) is the design engine of the web. Beyond just colors, 
          it governs the visual logic, spatial relationships, and responsive behavior of every digital interface.
        </p>
      </header>

      {/* 2. Feature Grid - Stacks on mobile, 3-cols on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
        {[
          { icon: <IoColorPaletteOutline />, title: "Visual Style", desc: "Control typography, colors, and effects." },
          { icon: <IoFlashOutline />, title: "Interactivity", desc: "Craft smooth transitions and animations." },
          { icon: <IoShieldCheckmarkOutline />, title: "Layout Control", desc: "Manage spacing with Flexbox and Grid." }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-3xl text-indigo-500 mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. Deep Dive Section - Adjusted padding for mobile */}
      <section className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-slate-100 shadow-sm mb-12">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
          The Anatomy of a Rule
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
          In CSS, we target elements using <strong>selectors</strong> and apply <strong>declarations</strong> 
          within a block. Every declaration is a key-value pair.
        </p>

        {/* Code Playground - Sideways scroll enabled for narrow screens */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="ml-2 text-[9px] md:text-[10px] text-slate-400 font-mono tracking-widest uppercase">styles.css</span>
          </div>
          <div className="p-5 md:p-6 font-mono text-[11px] sm:text-xs md:text-base leading-relaxed overflow-x-auto whitespace-pre no-scrollbar">
            <span className="text-pink-400">p</span> <span className="text-slate-400">{"{"}</span>
            <div className="pl-4 md:pl-6">
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

      {/* 4. Master Tip - Responsive Flex (Col on mobile, Row on desktop) */}
      <div className="p-6 md:p-8 bg-indigo-600 rounded-[1.5rem] md:rounded-[2.5rem] text-white flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-center md:text-left">
        <div className="text-4xl md:text-5xl opacity-30 font-black italic select-none">PRO</div>
        <div>
          <h4 className="font-bold text-base md:text-lg mb-1 uppercase tracking-tight">Separation of Concerns</h4>
          <p className="text-indigo-100 text-[11px] md:text-sm leading-relaxed">
            Always keep your CSS external. This improves maintainability, enables browser caching, 
            and keeps your HTML semantic and clean.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CssIntro;