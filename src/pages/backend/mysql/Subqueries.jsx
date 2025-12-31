import React from 'react';
import { 
  GitCommit, Layers, Target, Boxes, 
  Terminal, Code, Database, Info, 
  AlertCircle, ArrowDownRight, Zap,
  Filter, CheckCircle2 
} from 'lucide-react';

const Subqueries = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-10">
      
      {/* 1. Header Section - Deep Blue Gradient */}
      <section className="relative p-6 md:p-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 hidden sm:block">
          <Layers size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 08: Nested Logic
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Subqueries <span className="text-blue-400">Mastery</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            A Subquery is just <strong>a query inside another query</strong>. Think of it like a puzzle where you solve the inner part first to get the answer for the outer part.
          </p>
        </div>
      </section>

      {/* 2. Placement Grid - Blue Borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          { 
            title: "In SELECT", 
            icon: <Target />, 
            desc: "Use it to find a single value for every row you show." 
          },
          { 
            title: "In WHERE", 
            icon: <Filter />, 
            desc: "Use it to filter your data based on a hidden list or value." 
          },
          { 
            title: "In FROM", 
            icon: <Boxes />, 
            desc: "Treat your query result like a temporary 'mini table'." 
          }
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 md:p-8 bg-white border-2 border-blue-50 rounded-[2rem] hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {item.icon}
            </div>
            <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. Logic Section - Light Blue Background */}
      <section className="bg-blue-50/50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-blue-100">
        <h2 className="text-xl md:text-2xl font-black text-blue-900 mb-8 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter italic">
          <Zap className="text-blue-600" /> Comparison Tools
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { op: "IN", detail: "Matches any in a list" },
              { op: "EXISTS", detail: "Checks if info is there" },
              { op: "ANY", detail: "Matches some values" },
              { op: "ALL", detail: "Matches every value" }
            ].map((op, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-2xl border border-blue-100 shadow-sm hover:border-blue-400 transition-colors"
              >
                <span className="font-mono font-black text-blue-600 text-xs md:text-sm italic">
                  {op.op}
                </span>
                <p className="text-[9px] md:text-[10px] text-slate-400 uppercase mt-1 tracking-tighter font-bold">
                  {op.detail}
                </p>
              </div>
            ))}
          </div>
          
          {/* Code Block - Deep Slate/Blue */}
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-blue-500/30 overflow-x-auto whitespace-pre">
             <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-blue-400" size={16} />
                <span className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest font-bold">Nesting Code</span>
             </div>
             <code className="text-blue-300 font-mono text-[10px] md:text-xs leading-relaxed block">
                <span className="text-pink-400 font-bold underline italic">SELECT</span> name <span className="text-pink-400 font-bold">FROM</span> staff <br />
                <span className="text-pink-400 font-bold underline italic">WHERE</span> salary {'>'} ( <br />
                &nbsp;&nbsp;<span className="text-sky-400 font-bold italic">SELECT</span> <span className="text-amber-300 font-bold">AVG</span>(salary) <br />
                &nbsp;&nbsp;<span className="text-sky-400 font-bold italic">FROM</span> staff <br />
                );
             </code>
          </div>
        </div>
      </section>

      {/* 4. Advanced Concept - Blue Alert Card */}
      <div className="p-6 md:p-8 bg-blue-600 rounded-[2rem] md:rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <ArrowDownRight size={160} />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
            <ArrowDownRight size={24} className="text-white" />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-lg md:text-xl font-black tracking-tight uppercase">Correlated Queries</h3>
            <div className="flex gap-3 text-xs md:text-sm text-blue-50 leading-relaxed italic font-medium justify-center sm:justify-start">
              <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
              <span>"A normal subquery runs once. A correlated subquery runs over and over for every single row!"</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Performance Tip - Slate Blue Border */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-[2rem] border-l-8 border-blue-500 shadow-xl items-center sm:items-start text-center sm:text-left">
        <AlertCircle className="shrink-0 text-blue-400" size={32} />
        <div>
          <h4 className="font-black text-lg text-blue-400 uppercase tracking-tighter italic">Performance Tip</h4>
          <p className="text-xs md:text-sm opacity-80 leading-relaxed mt-2 font-medium">
            Subqueries are great, but they can be slow on big tables. If your report takes too long, try using <b>JOINS</b> instead. Joins are usually much faster for the database to process!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subqueries;