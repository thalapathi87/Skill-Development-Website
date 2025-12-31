import React from 'react';
import { 
  GitMerge, Table, Layers, Network, 
  Terminal, Code, Database, Info, 
  AlertCircle, ArrowRightLeft, Link,
  ShieldCheck, CheckCircle2 
} from 'lucide-react';

const Joins = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700 pb-10">
      
      {/* 1. Header Section - Blue Gradient Theme */}
      <section className="relative p-10 bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-10 rotate-45">
          <GitMerge size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 07: Combining Tables
          </div>
          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">
            SQL <span className="text-blue-400">Joins</span> Mastery
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-medium">
            Joins are used to combine data from different tables using 'Relationships'. They are the foundation for business intelligence and complex reporting.
          </p>
        </div>
      </section>

      {/* 2. Core Join Types Visualization - Simple English Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: 'INNER JOIN', color: 'bg-blue-400', desc: 'Returns records that have matching values in both tables.' },
          { name: 'LEFT JOIN', color: 'bg-blue-500', desc: 'Returns all records from the left table and matched ones from the right.' },
          { name: 'RIGHT JOIN', color: 'bg-blue-600', desc: 'Returns all records from the right table and matched ones from the left.' },
          { name: 'FULL JOIN', color: 'bg-blue-700', desc: 'Returns all records when there is a match in either table.' }
        ].map((join, i) => (
          <div key={i} className="p-6 bg-white border-2 border-slate-100 rounded-3xl hover:shadow-lg transition-all text-center group border-b-4 hover:border-b-blue-500">
            <div className={`mx-auto w-12 h-12 ${join.color} rounded-full opacity-20 mb-4 flex items-center justify-center group-hover:opacity-100 transition-opacity shadow-inner`}>
              <Link size={20} className="text-white" />
            </div>
            <h4 className="font-black text-slate-800 text-sm mb-2 uppercase tracking-tight">{join.name}</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{join.desc}</p>
          </div>
        ))}
      </div>

      

      {/* 3. Join Logic & Clauses - Modern Blue UI */}
      <section className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 uppercase tracking-tighter">
          <Layers className="text-blue-600" /> Join Architecture
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-500" /> ON vs USING
              </h4>
              <div className="space-y-2 text-sm text-slate-500 leading-relaxed font-medium">
                <div className="flex gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>The <span className="font-bold text-slate-800">ON</span> clause can link any column between tables.</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>The <span className="font-bold text-slate-800">USING</span> clause is used when column names are identical in both tables.</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Network size={18} className="text-blue-500" /> Self & Cross Joins
              </h4>
              <div className="space-y-2 text-sm text-slate-500 leading-relaxed font-medium">
                <div className="flex gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>A <span className="font-bold text-slate-800">SELF JOIN</span> links a table to itself.</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>A <span className="font-bold text-slate-800">CROSS JOIN</span> creates a Cartesian product (m * n rows).</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 relative">
             <div className="absolute top-4 right-6 text-[10px] font-mono text-blue-500/50 uppercase tracking-[0.2em] font-bold">Query_Lab</div>
             <code className="text-blue-300 font-mono text-xs leading-8 block">
                <span className="text-pink-400 font-bold underline">SELECT</span> o.OrderID, c.CustomerName <br />
                <span className="text-pink-400 font-bold underline">FROM</span> Orders <span className="text-sky-400 font-bold italic">AS</span> o <br />
                <span className="text-sky-400 font-bold">INNER JOIN</span> Customers <span className="text-sky-400 font-bold italic">AS</span> c <br />
                <span className="text-pink-400 font-bold underline">ON</span> o.CustomerID = c.CustomerID;
             </code>
          </div>
        </div>
      </section>

      {/* 4. Expert Note: Performance Insight - Blue Alert UI */}
      <div className="flex gap-4 p-8 bg-blue-50 text-blue-900 rounded-[2.5rem] border border-blue-200 shadow-sm">
        <AlertCircle className="shrink-0 text-blue-600" size={32} />
        <div>
          <h4 className="font-black text-lg uppercase tracking-tighter italic">Optimization Secret</h4>
          <p className="text-sm opacity-90 leading-relaxed mt-2 font-medium">
            When joining many tables, using **Table Aliases** (like 'o' or 'c') improves query readability. Ensure that join columns have **Indexes** to significantly increase query speed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Joins;