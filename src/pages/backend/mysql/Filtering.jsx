import React from 'react';
import { 
  Filter, Search, ArrowDownAz, ListFilter, 
  Terminal, ShieldCheck, ChevronRight, 
  Database, Info, AlertCircle, CheckCircle2 
} from 'lucide-react';

const Filtering = () => {
  return (
    /* Added px-4 for mobile breathing room and max-width for desktop alignment */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive Text Sizes */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <Search size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 04: Data Filtering
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Filtering <span className="text-blue-400">& Conditions</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            SQL helps you find exactly what you need. Use the <strong>WHERE</strong> clause to pick specific rows and hide the rest.
          </p>
        </div>
      </section>

      {/* 2. Core Operators Grid - Stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Logic Operators */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <Filter size={24} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Logic Tools</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium">Use these words to combine rules and filter your data.</p>
          <div className="grid grid-cols-2 gap-3">
            {['WHERE', 'AND', 'OR', 'NOT'].map(op => (
              <span key={op} className="px-2 py-2 bg-slate-900 text-blue-400 font-mono text-center text-[10px] md:text-[11px] rounded-xl tracking-widest font-black border border-slate-800 group-hover:border-blue-500/50 transition-colors italic">{op}</span>
            ))}
          </div>
        </div>

        {/* Search Patterns */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <ListFilter size={24} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Search Styles</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium">Use these to find ranges of numbers or specific word patterns.</p>
          <div className="grid grid-cols-2 gap-3">
            {['LIKE', 'BETWEEN', 'IN', 'IS NULL'].map(op => (
              <span key={op} className="px-2 py-2 bg-slate-900 text-blue-400 font-mono text-center text-[10px] md:text-[11px] rounded-xl tracking-widest font-black border border-slate-800 group-hover:border-blue-500/50 transition-colors italic">{op}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Sorting Section - Responsive Layout */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter italic">
          <ArrowDownAz className="text-blue-600" /> Organizing Data
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-300 transition-colors">
              <h4 className="font-black text-blue-700 uppercase text-[10px] md:text-xs mb-2 flex items-center gap-2">
                <CheckCircle2 size={14}/> ORDER BY (Sorting)
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">Sort data from A to Z (ASC) or Z to A (DESC).</p>
            </div>
            <div className="p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-300 transition-colors">
              <h4 className="font-black text-blue-700 uppercase text-[10px] md:text-xs mb-2 flex items-center gap-2">
                <CheckCircle2 size={14}/> LIMIT (Counting)
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">Only show a certain number of rows (like the first 10 items).</p>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-x-auto">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <div className="text-[10px] font-mono text-blue-400/50 uppercase font-bold tracking-widest">Live Example</div>
             </div>
             <code className="text-blue-300 font-mono text-[10px] md:text-xs leading-relaxed block whitespace-pre">
                <span className="text-pink-400 font-bold underline italic">SELECT</span> * <span className="text-pink-400 font-bold underline italic">FROM</span> products <br />
                <span className="text-pink-400 font-bold underline italic">WHERE</span> price <span className="text-pink-400 font-bold italic">BETWEEN</span> 10 <span className="text-pink-400 font-bold italic">AND</span> 50 <br />
                <span className="text-pink-400 font-bold underline italic">ORDER BY</span> price <span className="text-pink-400 font-bold italic">DESC</span> <br />
                <span className="text-pink-400 font-bold underline italic">LIMIT</span> 5;
             </code>
          </div>
        </div>
      </section>

      {/* 4. Pattern Matching - Responsive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-6 md:p-8 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-xl">
          <h4 className="font-black text-blue-400 uppercase text-[10px] md:text-xs mb-6 tracking-widest flex items-center gap-2">
            <Terminal size={16}/> Word Search Tips (%)
          </h4>
          <ul className="space-y-3 text-[11px] md:text-xs text-blue-100/70">
            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                <ChevronRight className="text-blue-500 shrink-0 mt-0.5" size={14}/>
                <span><code className="text-blue-300 font-bold">'A%'</code> - Starts with A</span>
            </li>
            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                <ChevronRight className="text-blue-500 shrink-0 mt-0.5" size={14}/>
                <span><code className="text-blue-300 font-bold">'%A'</code> - Ends with A</span>
            </li>
            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                <ChevronRight className="text-blue-500 shrink-0 mt-0.5" size={14}/>
                <span><code className="text-blue-300 font-bold">'%A%'</code> - A is anywhere</span>
            </li>
          </ul>
        </div>

        <div className="p-6 md:p-8 bg-blue-50 border border-blue-100 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-center shadow-sm text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3 text-blue-700 font-black">
            <AlertCircle size={24} />
            <h4 className="uppercase text-[10px] md:text-xs tracking-tighter italic">Speed Tip</h4>
          </div>
          <p className="text-[11px] md:text-xs text-slate-700 leading-relaxed font-medium">
            Searching for specific IDs is fast. <br /><br />
            <span className="text-red-500 font-bold">Avoid this:</span> <b>LIKE '%value'</b>. <br />It makes the database look through every single row, which makes it very slow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filtering;