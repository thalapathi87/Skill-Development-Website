import React from 'react';
import {
  Eye, Zap, Layers, RefreshCcw,
  Terminal, Database,
  AlertCircle, TableProperties,
  Share2, CheckCircle2
} from "lucide-react";


const ViewsCTEs = () => {
  return (
    /* Added px-4 for mobile breathing room and max-w-7xl for desktop alignment */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive Text and Padding */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <Layers size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 09: Advanced Tools
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Views, Indexes <span className="text-blue-400">& CTEs</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Learn how to create <strong>Shortcuts</strong> for your queries and <strong>Fast Search</strong> folders for your data. These tools make your database professional and quick.
          </p>
        </div>
      </section>

      {/* 2. Core Concepts Grid - Stacks on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          { 
            title: "SQL Views", 
            icon: <Eye />, 
            desc: 'A "Saved Shortcut" for a query. It looks like a table but doesnt take up space.' 
          },
          { 
            title: "SQL Indexes", 
            icon: <Zap />, 
            desc: "Like a Book Index. It helps the database find info instantly without reading every row." 
          },
          { 
            title: "SQL CTEs", 
            icon: <Share2 />, 
            desc: "Temporary results that make your code look clean and easy to read for others." 
          }
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-blue-500 transition-all shadow-sm group"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
              {item.icon}
            </div>
      
            <h3 className="text-lg font-black text-slate-800 mb-2">
              {item.title}
            </h3>
      
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 3. CTE Mastery Section - Responsive Grid */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-8 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter italic">
          <TableProperties className="text-blue-600" /> Temporary Tables (CTE)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed font-medium text-center md:text-left">
              CTEs (using the <b>WITH</b> word) let you create a list of data that exists only while you run your query. It's great for breaking big tasks into small steps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
               {[
                 'Makes code easy to read.',
                 'Better than hidden subqueries.',
                 'Used for family tree logic.'
               ].map((text, idx) => (
                 <div key={idx} className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold bg-white p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 size={14} className="text-blue-500 shrink-0" /> {text}
                 </div>
               ))}
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-x-auto whitespace-pre">
             <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-blue-400" size={16} />
                <span className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest font-bold">CTE Example</span>
             </div>
             <code className="text-blue-300 font-mono text-[10px] md:text-xs leading-relaxed block">
                <span className="text-pink-400 font-bold underline italic">WITH</span> TopStaff <span className="text-pink-400 font-bold italic">AS</span> (<br />
                &nbsp;&nbsp;<span className="text-sky-400 font-bold">SELECT</span> * <span className="text-sky-400">FROM</span> staff<br />
                &nbsp;&nbsp;<span className="text-sky-400 font-bold">WHERE</span> pay {'>'} 5000<br />
                )<br />
                <span className="text-pink-400 font-bold underline italic">SELECT</span> * <span className="text-pink-400 font-bold italic">FROM</span> TopStaff;
             </code>
          </div>
        </div>
      </section>

      {/* 4. Indexing & Views Commands - Responsive 1 to 2 column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-2xl md:rounded-3xl shadow-sm hover:border-blue-500 transition-all">
          <h4 className="font-black text-slate-800 uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2 tracking-widest">
            <RefreshCcw size={16} className="text-blue-500" /> Managing Views
          </h4>
          <div className="space-y-2 font-mono text-[10px] md:text-[11px] text-blue-700 bg-blue-50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-blue-100 overflow-x-auto">
             <p className="whitespace-nowrap"><span className="text-pink-600 font-bold">CREATE VIEW</span> my_view <span className="text-pink-600">AS</span> ...</p>
             <hr className="border-blue-100 my-2" />
             <p className="whitespace-nowrap"><span className="text-pink-600 font-bold">DROP VIEW</span> my_view;</p>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-2xl md:rounded-3xl shadow-sm hover:border-blue-500 transition-all">
          <h4 className="font-black text-slate-800 uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2 tracking-widest">
            <Zap size={16} className="text-blue-500" /> Using Indexes
          </h4>
          <div className="space-y-2 font-mono text-[10px] md:text-[11px] text-blue-700 bg-blue-50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-blue-100 overflow-x-auto">
             <p className="whitespace-nowrap"><span className="text-pink-600 font-bold">CREATE INDEX</span> fast_search <span className="text-pink-600">ON</span> users;</p>
             <hr className="border-blue-100 my-2" />
             <p className="whitespace-nowrap"><span className="text-pink-600 font-bold">DROP INDEX</span> fast_search <span className="text-pink-600">ON</span> users;</p>
          </div>
        </div>
      </div>

      {/* Expert Note - Responsive Alert UI */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-[2rem] md:rounded-[2.5rem] border-l-8 border-blue-500 shadow-xl items-center sm:items-start text-center sm:text-left">
        <AlertCircle className="shrink-0 text-blue-400" size={32} />
        <div>
          <h4 className="font-black text-lg uppercase tracking-tighter italic">Speed Trade-off</h4>
          <p className="text-xs md:text-sm opacity-80 leading-relaxed mt-2 font-medium">
            Indexes make <b>SELECT</b> queries super fast. But they make <b>INSERT</b> and <b>UPDATE</b> slightly slower because the database has more work to do. Only add indexes to columns you search for very often!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewsCTEs;