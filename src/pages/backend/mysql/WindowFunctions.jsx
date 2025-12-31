import React from 'react';
import { 
  BarChart, ListOrdered, TrendingUp, Zap, 
  Terminal, Code, Database, Info, 
  AlertCircle, TableProperties, Target, CheckCircle2 
} from 'lucide-react';

const WindowFunctions = () => {
  return (
    /* Added responsive padding for mobile and max-width for desktop */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive Text Sizes */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <TrendingUp size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 10: Advanced Reports
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Analytical <span className="text-blue-400">(Window)</span> Functions
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Standard math functions group rows together. Window Functions are different—they do math while keeping <strong>every row separate</strong>.
          </p>
        </div>
      </section>

      {/* 2. Core Concepts: OVER & PARTITION BY - Stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <Target size={24} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">OVER() Rule</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
            This tells SQL: "Don't group the rows. Just look at this specific set of data to do the math."
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <TableProperties size={24} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">PARTITION BY</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
            This divides your data into "mini-boxes" or groups. Unlike GROUP BY, it keeps all your original lines visible.
          </p>
        </div>
      </div>

      {/* 3. Ranking Functions - Responsive Grid */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-8 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter italic">
          <ListOrdered className="text-blue-600" /> Ranking Rows
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-3 md:space-y-4">
            {[
              { name: 'ROW_NUMBER()', desc: 'Gives 1, 2, 3... to every row.' },
              { name: 'RANK()', desc: 'Skips numbers if there is a tie.' },
              { name: 'DENSE_RANK()', desc: 'No skipping numbers, even with ties.' }
            ].map((rank, i) => (
              <div key={i} className="p-4 bg-white rounded-xl md:rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm hover:border-blue-300 transition-colors">
                 <span className="font-mono font-bold text-blue-600 text-[10px] md:text-sm">{rank.name}</span>
                 <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">{rank.desc}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-x-auto whitespace-pre">
             <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-blue-400" size={16} />
                <span className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest font-bold">Ranking Code</span>
             </div>
             <code className="text-blue-300 font-mono text-[10px] md:text-xs leading-relaxed block">
                <span className="text-pink-400 font-bold underline italic">SELECT</span> name, dept, salary, <br />
                <span className="text-sky-300 font-bold">RANK</span>() <span className="text-pink-400 font-bold italic">OVER</span> (<br />
                &nbsp;&nbsp;<span className="text-pink-400 font-bold italic">PARTITION BY</span> dept <br />
                &nbsp;&nbsp;<span className="text-pink-400 font-bold italic">ORDER BY</span> salary <span className="text-pink-400 font-bold italic">DESC</span><br />
                ) <span className="text-pink-400 font-bold italic">AS</span> rnk <br />
                <span className="text-pink-400 font-bold">FROM</span> staff;
             </code>
          </div>
        </div>
      </section>

      {/*  */}

      {/* 4. Value Functions: LEAD & LAG - Simple Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-500 transition-all">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Zap size={20}/></div>
             <h4 className="font-black text-slate-800 uppercase text-[10px] md:text-xs tracking-widest">Peeking at Rows</h4>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium leading-relaxed">
            <span className="font-bold text-slate-800 underline decoration-blue-300">LEAD():</span> Look at the <strong>next</strong> row. <br />
            <span className="font-bold text-slate-800 underline decoration-blue-300">LAG():</span> Look at the <strong>previous</strong> row.
          </p>
          <div className="flex items-start gap-2 text-[10px] md:text-[11px] text-blue-700 font-bold bg-blue-50 p-3 rounded-xl italic border border-blue-100">
            <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
            <span>"Use these to compare this month's sales to last month's."</span>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-xl flex flex-col justify-center border-l-8 border-blue-500">
            <h4 className="font-black text-blue-400 uppercase text-[9px] md:text-[10px] mb-3 tracking-widest text-center md:text-left">Running Totals</h4>
            <div className="overflow-x-auto">
              <code className="text-[10px] md:text-xs font-mono text-blue-100 bg-black/30 p-4 rounded-xl leading-relaxed border border-slate-800 block whitespace-nowrap">
                <span className="text-pink-400">SUM</span>(amt) <span className="text-pink-400">OVER</span>(<span className="text-pink-400">ORDER BY</span> date)
              </code>
            </div>
            <p className="text-[9px] md:text-[10px] text-slate-500 mt-4 italic font-medium text-center md:text-left">This adds up values as you go down the rows.</p>
        </div>
      </div>

      {/* 5. Expert Note - Responsive Alert UI */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-blue-50 text-blue-900 rounded-[2rem] md:rounded-[3rem] border border-blue-200 shadow-sm items-center sm:items-start text-center sm:text-left">
        <AlertCircle className="shrink-0 text-blue-600" size={32} />
        <div>
          <h4 className="font-black text-lg uppercase tracking-tighter italic">Performance Tip</h4>
          <p className="text-xs md:text-sm opacity-80 leading-relaxed mt-2 font-medium">
            Window functions are very powerful, but they can be slow on huge tables. Only use <b>PARTITION BY</b> when you really need to group your math!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindowFunctions;