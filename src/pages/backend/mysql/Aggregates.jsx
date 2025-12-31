import React from 'react';
import { 
  Sigma, Group, BarChart3, PieChart, 
  Terminal, Code, Database, Layers, 
  Filter, AlertCircle, TrendingUp, CheckCircle2
} from 'lucide-react';

const Aggregates = () => {
  return (
    /* Main container with horizontal padding for mobile and max-width for desktop */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive Text Sizes */}
      <section className="relative p-6 md:p-10 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <Sigma size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 06: Data Summary
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Data <span className="text-blue-400">Summarization</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Aggregation means turning thousands of lines into one clear number. It is the best way to create reports and understand your business.
          </p>
        </div>
      </section>

      {/* 2. Summary Tools Grid - Stacks nicely on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {[
          { icon: <TrendingUp size={20}/>, name: 'COUNT()', desc: 'Total Lines' },
          { icon: <Sigma size={20}/>, name: 'SUM()', desc: 'Total Amount' },
          { icon: <BarChart3 size={20}/>, name: 'AVG()', desc: 'Average' },
          { icon: <PieChart size={20}/>, name: 'MIN()', desc: 'Lowest' },
          { icon: <PieChart size={20}/>, name: 'MAX()', desc: 'Highest' }
        ].map((fn, i) => (
          <div key={i} className="p-4 md:p-6 bg-white border-2 border-slate-100 rounded-2xl text-center hover:border-blue-500 transition-all shadow-sm group">
            <div className="mx-auto w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
              {fn.icon}
            </div>
            <h4 className="font-black text-slate-800 text-[11px] md:text-sm">{fn.name}</h4>
            <p className="text-[9px] md:text-[10px] text-slate-400 uppercase mt-1 tracking-tighter font-bold">{fn.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. Grouping Section - Responsive Layout */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-inner">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
          <div className="p-3 bg-slate-900 rounded-xl md:rounded-2xl text-blue-400 shadow-xl">
            <Group size={24} />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-slate-800 tracking-tighter uppercase italic text-center md:text-left">
            Mastering <span className="text-blue-600">Groups</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                <Layers size={18} className="text-blue-500" /> GROUP BY (Categories)
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                Splits data into groups like "Department" or "Year" so you can summarize them separately.
              </p>
            </div>

            <div className="p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                <Filter size={18} className="text-blue-500" /> HAVING (Filter Groups)
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                Used to filter the groups <b>after</b> they are summarized. (Example: Only show departments with total sales over $50k).
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-x-auto whitespace-pre">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <div className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest font-bold">Report Query</div>
             </div>
             <code className="text-blue-300 font-mono text-[10px] md:text-xs leading-relaxed block">
                <span className="text-pink-400 font-bold underline italic">SELECT</span> dept, <span className="text-sky-300 font-bold italic">SUM</span>(pay) <br />
                <span className="text-pink-400 font-bold underline italic">FROM</span> staff <br />
                <span className="text-pink-400 font-bold underline italic">GROUP BY</span> dept <br />
                <span className="text-pink-400 font-bold underline italic">HAVING</span> <span className="text-sky-300 font-bold italic">SUM</span>(pay) {'>'} 50000;
             </code>
          </div>
        </div>
      </section>

      {/* 4. Distinction Tips - Stacks on Mobile */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-blue-50 border border-blue-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm items-center sm:items-start text-center sm:text-left">
        <AlertCircle className="shrink-0 text-blue-600" size={32} />
        <div className="space-y-3">
          <h4 className="font-black text-blue-900 uppercase tracking-tighter italic text-sm md:text-base">Key Differences</h4>
          <div className="space-y-2 text-[11px] md:text-xs text-blue-800 leading-relaxed font-medium">
            <div className="flex gap-2 justify-center sm:justify-start">
              <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
              <span><b>WHERE</b> filters lines <b>before</b> they are grouped.</span>
            </div>
            <div className="flex gap-2 justify-center sm:justify-start">
              <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
              <span><b>HAVING</b> filters the groups <b>after</b> they are summarized.</span>
            </div>
            <p className="text-red-600 font-bold uppercase mt-2 text-[9px] md:text-[10px]">
              ! Note: You cannot use SUM or AVG inside a WHERE clause.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aggregates;