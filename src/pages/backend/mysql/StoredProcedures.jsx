import React from 'react';
import { 
  Terminal, Code, Play, Settings, 
  Database, GitFork, Repeat, Info, 
  AlertCircle, ChevronRight, Save, CheckCircle2 
} from 'lucide-react';

const StoredProcedures = () => {
  return (
    /* Added responsive padding and max-width for clear desktop viewing */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive Text Sizes */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-sky-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <Settings size={180} className="text-sky-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 11: Automation
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Stored <span className="text-sky-400 text-shadow-sky">Procedures</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            A Stored Procedure is like <strong>saving a list of instructions</strong>. Instead of writing the same query every day, you save it as a program and "call" it whenever you need.
          </p>
        </div>
      </section>

      {/* 2. Parameters Grid - Stacks on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          { title: "IN Part", icon: <ChevronRight />, desc: "Used to send info inside the procedure." },
          { title: "OUT Part", icon: <Play />, desc: "Used to get the answer back out." },
          { title: "INOUT Part", icon: <Repeat />, desc: "A single part that does both jobs." }
        ].map((item, i) => (
          <div key={i} className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-sky-500 transition-all shadow-sm group">
            <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl w-fit mb-4 group-hover:bg-sky-500 group-hover:text-white transition-all">
              {item.icon}
            </div>
            <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. Logic Section - Responsive Layout */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-8 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter italic">
          <GitFork className="text-sky-600" /> Programming in SQL
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-600 text-sm md:text-base font-bold mb-4 text-center md:text-left">You can add "Smart Rules" inside your procedures:</p>
            <div className="space-y-3">
              {[
                { label: 'IF...ELSE', d: 'Choose what to do based on a rule.' },
                { label: 'CASE', d: 'Handle many different rules at once.' },
                { label: 'LOOP', d: 'Repeat a task until it is finished.' }
              ].map((logic, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                   <CheckCircle2 size={18} className="text-sky-500 shrink-0" />
                   <div className="flex flex-col sm:flex-row sm:gap-2">
                     <span className="text-[10px] md:text-xs font-black text-slate-700">{logic.label}:</span>
                     <span className="text-[10px] md:text-xs text-slate-500 font-medium">{logic.d}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-x-auto whitespace-pre">
             <div className="flex items-center gap-2 mb-4">
                <Code className="text-sky-400" size={16} />
                <span className="text-[10px] font-mono text-sky-400/50 uppercase tracking-widest font-bold">Procedure Code</span>
             </div>
             <code className="text-sky-300 font-mono text-[10px] md:text-xs leading-relaxed block">
                <span className="text-pink-400 font-bold italic">DELIMITER</span> //<br />
                <span className="text-sky-400 font-bold">CREATE PROCEDURE</span> <span className="text-white text-shadow-sky">GetStaff</span>(IN id <span className="text-amber-400">INT</span>)<br />
                <span className="text-pink-400 font-bold">BEGIN</span><br />
                &nbsp;&nbsp;<span className="text-sky-400 font-bold">SELECT</span> * <span className="text-sky-400">FROM</span> staff <span className="text-sky-400">WHERE</span> emp_id = id;<br />
                <span className="text-pink-400 font-bold">END</span> //<br />
                <span className="text-pink-400 font-bold italic">DELIMITER</span> ;
             </code>
          </div>
        </div>
      </section>

      {/* 4. Practical Grid - 1 to 2 column responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm hover:border-sky-500 transition-all">
          <h4 className="font-black text-slate-800 uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2 tracking-widest">
            <Save size={16} className="text-sky-500" /> Start & Run
          </h4>
          <div className="space-y-2 font-mono text-[10px] md:text-[11px] text-sky-700 bg-sky-50 p-4 md:p-5 rounded-2xl border border-sky-100 overflow-x-auto">
             <p className="whitespace-nowrap"><b>Step 1:</b> CREATE PROCEDURE name() ...</p>
             <hr className="border-sky-100 my-2" />
             <p className="whitespace-nowrap"><b>Step 2:</b> CALL name();</p>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-slate-900 text-white rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-center border-l-8 border-sky-500 shadow-xl">
           <h4 className="font-black text-sky-400 uppercase text-[9px] md:text-[10px] mb-3 tracking-widest text-center md:text-left">Big Benefit</h4>
           <p className="text-[11px] md:text-sm italic opacity-80 border-l-2 border-sky-800 pl-4 font-medium leading-relaxed">
             "Procedures are ready-to-run. This makes them much faster than writing and sending queries from your app every time."
           </p>
        </div>
      </div>

      {/* 5. Security Alert - Responsive UI */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-sky-50 text-sky-900 rounded-[2rem] md:rounded-[3rem] border border-sky-200 shadow-sm items-center sm:items-start text-center sm:text-left">
        <AlertCircle className="shrink-0 text-sky-600" size={32} />
        <div>
          <h4 className="font-black text-lg md:text-xl uppercase tracking-tighter italic">Safety First</h4>
          <p className="text-xs md:text-sm opacity-80 leading-relaxed mt-2 font-medium">
            Procedures keep your data safe. Instead of letting anyone touch the tables, you give them permission to only "CALL" the procedure. This stops bad code (SQL Injection) from breaking your app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoredProcedures;