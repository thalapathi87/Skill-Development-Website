import React from 'react';
import { Database, Server, Cpu, Layers, Terminal, Info, CheckCircle2 } from 'lucide-react';

const SqlIntro = () => {
  return (
    /* Added px-4 for mobile breathing room and max-w-7xl for desktop alignment */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-top-6 duration-700 pb-10">
      
      {/* 1. Hero Section - Responsive Padding & Font Sizes */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <Database size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <Server size={14} /> Module 01: Foundations
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter leading-tight">
            Introduction to <span className="text-blue-400 text-shadow-blue">MySQL</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            SQL is the language we use to talk to data. Learn how to store, change, and find information in a digital database easily.
          </p>
        </div>
      </section>

      {/* 2. Core Concepts Grid - Stacks on mobile (grid-cols-1) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* SQL Definition */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm hover:border-blue-500 transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
              <Terminal size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">What is SQL?</h3>
          </div>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
            SQL is a special language used to talk to databases. It is like a set of instructions that tells the database exactly what info you want to see.
          </p>
        </div>

        {/* DBMS vs RDBMS */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm hover:border-blue-500 transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
              <Layers size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Tables & Rows</h3>
          </div>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
            Instead of messy files, MySQL uses tables. These tables have rows and columns, just like a spreadsheet, making data easy to find.
          </p>
        </div>
      </div>

      {/* 3. Syntax Basics - Stacks content and code on mobile */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-inner">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 uppercase tracking-tighter italic">
          <Cpu size={24} className="text-blue-500" /> Writing SQL Queries
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              Writing SQL is easy if you follow these simple rules:
            </p>
            <ul className="space-y-3">
              {[
                'Commands (LIKE SELECT) can be in any case',
                'Always end your query with a semicolon (;)',
                'Give your tables simple, clear names'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-700 font-bold">
                  <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl border border-slate-800 order-1 lg:order-2">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-amber-500"></div>
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-emerald-500"></div>
             </div>
             <code className="text-blue-300 font-mono text-[10px] md:text-xs leading-relaxed block overflow-x-auto whitespace-pre">
                <span className="text-pink-400 font-bold">SELECT</span> * <span className="text-pink-400 font-bold">FROM</span> users;<br />
                <span className="text-slate-500 italic">-- Fetches all users</span>
             </code>
          </div>
        </div>
      </section>

      {/* 4. Installation Guide - Stack layout for mobile */}
      <div className="flex flex-col sm:flex-row gap-4 p-6 md:p-10 bg-blue-50 border border-blue-100 rounded-[2rem] md:rounded-[3rem] shadow-sm">
        <Info className="shrink-0 text-blue-500 mx-auto sm:mx-0" size={32} />
        <div className="text-center sm:text-left">
          <h4 className="font-black text-lg uppercase tracking-tighter italic">Get Started</h4>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed mt-2 font-medium">
            Download the official MySQL installer from their website. Install both the <strong>Server</strong> and the <strong>Workbench</strong> app to start writing queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SqlIntro;