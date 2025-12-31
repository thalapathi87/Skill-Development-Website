import React from 'react';
import { Box, Code2, Layers, Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';

const Components = () => {
  return (
    /* Added px-4 for mobile breathing room and max-width for desktop */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-10">
      
      {/* 1. MASTER HEADER SECTION - Responsive padding and text sizing */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
            Component <span className="text-sky-400">Mastery</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
            Think of components as <strong>reusable LEGO blocks</strong>. They are small pieces of code that handle their own look and logic. By putting them together, you build a full website.
          </p>
        </div>
        {/* Icon hidden on mobile to keep the header clean */}
        <Cpu className="absolute top-1/2 -right-10 -translate-y-1/2 text-slate-800 w-64 h-64 opacity-30 hidden lg:block" />
      </section>

      {/* 2. CONCEPT COMPARISON - Stacks on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        
        {/* Functional Component Card */}
        <div className="group p-6 md:p-8 border-2 border-slate-100 rounded-[1.5rem] bg-white hover:border-sky-500 transition-all duration-300 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-sky-100 rounded-xl text-sky-600">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">The Modern Way (Functions)</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed font-medium">
            This is how we build React today. We use simple JavaScript functions. They are easy to read and use <b>Hooks</b> to manage data.
          </p>
          {/* Code Preview - Horizontal scroll enabled for mobile */}
          <div className="bg-slate-900 rounded-xl p-4 font-mono text-[10px] md:text-xs overflow-x-auto no-scrollbar">
            <span className="text-pink-400">const</span> <span className="text-sky-300">Welcome</span> = () ={`>`} (
            <div className="pl-4 text-slate-300">
              {`<div>`} <br />
              <span className="pl-4">{`<h1>Hello World!</h1>`}</span> <br />
              {`</div>`}
            </div>
            );
          </div>
        </div>

        {/* Class Component Card (Marked as Legacy) */}
        <div className="group p-6 md:p-8 border-2 border-slate-100 rounded-[1.5rem] bg-slate-50/50 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4 text-slate-600">
            <Layers size={24} />
            <h3 className="text-xl font-bold tracking-tight">The Old Way (Classes)</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed font-medium">
            This was the standard years ago. They are harder to write and harder for the computer to understand. Avoid using these in new projects.
          </p>
          <div className="bg-slate-900/50 rounded-xl p-4 font-mono text-[10px] md:text-xs text-slate-500 overflow-x-auto no-scrollbar">
  <span className="text-pink-400">class</span>{" "}
  <span className="text-slate-400">OldApp</span>{" "}
  <span className="text-pink-400">extends</span>{" "}
  React.Component{" "}
  {"{"}
  <br />
  <span className="pl-4 text-slate-500">
    render() {"{"} ... {"}"}
  </span>
  <br />
  {"}"}
</div>

        </div>
      </div>

      {/* 3. MASTERY PRINCIPLES - Responsive grid and cards */}
      <section className="bg-indigo-50/50 p-6 md:p-10 rounded-[2rem] border border-indigo-100">
        <h2 className="text-2xl font-black text-slate-800 mb-6 text-center md:text-left tracking-tighter italic">BEST PRACTICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Principle 1 */}
          <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-2xl shadow-sm border border-transparent hover:border-indigo-200 transition-colors">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={28} />
            <div>
              <h4 className="font-bold text-slate-800 mb-1">One Task Only</h4>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                Each component should do just one thing. If a component gets too big, break it into smaller pieces.
              </p>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-2xl shadow-sm border border-transparent hover:border-indigo-200 transition-colors">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={28} />
            <div>
              <h4 className="font-bold text-slate-800">Atomic Design</h4>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                Build tiny components like Buttons and Inputs. Then use them to build bigger things like Forms and Sections.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. COMMON MISTAKE ALERT - Centered for mobile */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-rose-50 border-2 border-rose-100 rounded-[2rem] items-center sm:items-start text-center sm:text-left">
        <AlertTriangle className="text-rose-500 shrink-0" size={32} />
        <div>
          <h4 className="font-black text-rose-800 mb-2 uppercase tracking-tighter">Naming Rule</h4>
          <p className="text-xs md:text-sm text-rose-700 leading-relaxed font-bold">
            React components MUST start with a <strong>Capital letter</strong> (e.g., UserProfile). If you use a lowercase letter (e.g., userProfile), React will think it is just a normal HTML tag and it won't work!
          </p>
        </div>
      </div>

    </div>
  );
};

export default Components;