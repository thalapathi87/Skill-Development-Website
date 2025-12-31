import React from 'react';
import { 
  Calculator, Type, Calendar, Split, 
  Terminal, Code, Zap, Database, 
  Info, Sparkles, ChevronRight, CheckCircle2 
} from 'lucide-react';

const SqlFunctions = () => {
  return (
    /* Added responsive padding and centered alignment for large screens */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive text sizes */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 hidden sm:block">
          <Calculator size={180} className="text-blue-400 rotate-12" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 05: SQL Tools
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
            SQL <span className="text-blue-400 text-shadow-blue">Functions</span> Lab
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Functions are like mini-machines that change your data. Learn how to clean text, do math, and handle dates easily.
          </p>
        </div>
      </section>

      {/* 2. Function Categories Grid - 1 col on mobile, 3 on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* String Functions */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <Type size={24} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Text Tools</h3>
          </div>
          <ul className="space-y-2 mb-6 text-[10px] md:text-xs text-slate-500 font-mono font-bold">
            <li className="flex items-center gap-2"><ChevronRight size={12}/> CONCAT() - Join Text</li>
            <li className="flex items-center gap-2"><ChevronRight size={12}/> UPPER() - Capitalize</li>
            <li className="flex items-center gap-2"><ChevronRight size={12}/> TRIM() - Remove Spaces</li>
          </ul>
          <span className="text-[10px] bg-blue-50 px-2 py-1 rounded uppercase font-black text-blue-500 tracking-widest border border-blue-100">Clean Words</span>
        </div>

        {/* Numeric Functions */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <Calculator size={24} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Math Tools</h3>
          </div>
          <ul className="space-y-2 mb-6 text-[10px] md:text-xs text-slate-500 font-mono font-bold">
            <li className="flex items-center gap-2"><ChevronRight size={12}/> ROUND() - Round Numbers</li>
            <li className="flex items-center gap-2"><ChevronRight size={12}/> ABS() - Absolute Value</li>
            <li className="flex items-center gap-2"><ChevronRight size={12}/> MOD() - Remainder</li>
          </ul>
          <span className="text-[10px] bg-blue-50 px-2 py-1 rounded uppercase font-black text-blue-500 tracking-widest border border-blue-100">Simple Math</span>
        </div>

        {/* Date Functions */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <Calendar size={24} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Time Tools</h3>
          </div>
          <ul className="space-y-2 mb-6 text-[10px] md:text-xs text-slate-500 font-mono font-bold">
            <li className="flex items-center gap-2"><ChevronRight size={12}/> NOW() - Current Time</li>
            <li className="flex items-center gap-2"><ChevronRight size={12}/> DATEDIFF() - Days Between</li>
            <li className="flex items-center gap-2"><ChevronRight size={12}/> YEAR() - Extract Year</li>
          </ul>
          <span className="text-[10px] bg-blue-50 px-2 py-1 rounded uppercase font-black text-blue-500 tracking-widest border border-blue-100">Calender Info</span>
        </div>
      </div>

      {/* 3. Conditional Logic - Modern Responsive UI */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-inner">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
          <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg">
            <Split size={24} />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-slate-800 tracking-tighter uppercase italic">Decision <span className="text-blue-600">Making</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium text-center md:text-left">
              To add logic like <b>"If this happens, do that"</b> to your data, we use <b>CASE WHEN</b>. It is like an IF statement for your reports.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
                  <h4 className="font-bold text-blue-700 text-xs md:text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 size={14}/> Simple IF
                  </h4>
                  <p className="text-[10px] md:text-[11px] text-slate-500 font-bold">Check for yes or no.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
                  <h4 className="font-bold text-blue-700 text-xs md:text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 size={14}/> Multi-Condition
                  </h4>
                  <p className="text-[10px] md:text-[11px] text-slate-500 font-bold">Check for many rules.</p>
                </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-x-auto">
             <div className="flex items-center gap-2 mb-4">
                <Code className="text-blue-400" size={16} />
                <span className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest font-bold">Query Lab</span>
             </div>
             <code className="text-blue-300 font-mono text-[10px] md:text-xs leading-relaxed block whitespace-pre">
                <span className="text-pink-400 font-bold">SELECT</span> name, price,<br />
                <span className="text-pink-400 font-bold italic">CASE</span> <br />
                &nbsp;&nbsp;<span className="text-pink-400 font-bold italic">WHEN</span> price {'>'} 500 <span className="text-pink-400">THEN</span> <span className="text-amber-300">'High'</span><br />
                &nbsp;&nbsp;<span className="text-pink-400 font-bold italic">ELSE</span> <span className="text-amber-300">'Low'</span><br />
                <span className="text-pink-400 font-bold italic">END AS</span> Status<br />
                <span className="text-pink-400 font-bold">FROM</span> items;
             </code>
          </div>
        </div>
      </section>

      {/* 4. Speed Tip - Alert UI */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-blue-50 text-blue-900 rounded-[2rem] md:rounded-[3rem] border border-blue-200 shadow-sm items-center sm:items-start text-center sm:text-left">
        <Sparkles className="shrink-0 text-blue-500" size={32} />
        <div>
          <h4 className="font-black text-lg md:text-xl uppercase tracking-tighter italic">Pro Tip: Speed Matters</h4>
          <p className="text-xs md:text-sm opacity-80 leading-relaxed mt-2 font-medium">
            Avoid putting functions directly inside your <b>WHERE</b> clause. For example, <code>UPPER(name) = 'ADMIN'</code> makes the database work much harder and run slower. Clean your data before you compare it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SqlFunctions;