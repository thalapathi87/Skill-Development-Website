import React from 'react';
import { 
  Terminal, Database, Edit3, Trash2, 
  Save, ShieldCheck, ChevronRight, 
  Zap, Code, Info, AlertCircle, CheckCircle2 
} from 'lucide-react';

const CoreCommands = () => {
  return (
    /* Main container with horizontal padding for mobile and max-width for desktop */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive text and padding */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 hidden sm:block">
          <Terminal size={180} className="text-blue-400 rotate-12" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 03: SQL Basics
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
            SQL Command <span className="text-blue-400">Groups</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            SQL commands are grouped by what they do. Some build the structure, some handle the data, and others manage safety and permissions.
          </p>
        </div>
      </section>

      {/* 2. Main Groups Grid - 1 col on mobile, 2 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* DDL Section */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 font-black tracking-tighter shadow-inner text-xs md:text-sm">DDL</div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">The Builders</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium leading-relaxed">Commands used to create and design the <b>structure</b> (tables/folders) of the database.</p>
          <div className="flex flex-wrap gap-2">
            {['CREATE', 'ALTER', 'DROP', 'TRUNCATE'].map(cmd => (
              <span key={cmd} className="px-2 py-1 bg-slate-900 text-blue-400 font-mono text-[9px] md:text-[10px] rounded-lg border border-slate-800 font-black italic">{cmd}</span>
            ))}
          </div>
        </div>

        {/* DML Section */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-sky-50 rounded-2xl text-sky-600 font-black tracking-tighter shadow-inner text-xs md:text-sm">DML</div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">The Workers</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium leading-relaxed">Commands used to handle the actual <b>data</b> (adding, editing, or deleting info) inside the tables.</p>
          <div className="flex flex-wrap gap-2">
            {['INSERT', 'SELECT', 'UPDATE', 'DELETE'].map(cmd => (
              <span key={cmd} className="px-2 py-1 bg-slate-900 text-sky-400 font-mono text-[9px] md:text-[10px] rounded-lg border border-slate-800 font-black italic">{cmd}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Deep Dive: TCL & DCL - Stacks on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-inner">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 italic">
            <Save className="text-blue-500" /> Save Control (TCL)
          </h2>
          <p className="text-xs md:text-sm text-slate-600 font-medium mb-4">Used to save your work or undo mistakes.</p>
          <div className="space-y-2">
            {[
              { name: 'COMMIT', desc: 'Save forever' },
              { name: 'ROLLBACK', desc: 'Undo mistakes' },
              { name: 'SAVEPOINT', desc: 'Mark a spot to undo' }
            ].map((item, i) => (
              <div key={i} className="p-3 md:p-4 bg-white rounded-xl border border-slate-100 flex items-center justify-between hover:border-blue-300 transition-colors shadow-sm">
                <span className="font-mono font-black text-blue-600 italic tracking-wider text-xs md:text-sm">{item.name}</span>
                <span className="text-[9px] md:text-[10px] text-slate-400 uppercase font-black tracking-tighter">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-inner">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 italic">
            <ShieldCheck className="text-blue-600" /> Security (DCL)
          </h2>
          <p className="text-xs md:text-sm text-slate-600 font-medium mb-4">Used to decide who can see the data.</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-3 md:p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between shadow-xl border-l-4 border-blue-500">
              <span className="font-mono font-black text-blue-400 tracking-widest italic text-xs md:text-sm">GRANT</span>
              <span className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold">Give Access</span>
            </div>
            <div className="p-3 md:p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between shadow-xl border-l-4 border-blue-500">
              <span className="font-mono font-black text-blue-400 tracking-widest italic text-xs md:text-sm">REVOKE</span>
              <span className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold">Take Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Lab Area - Code block with horizontal scroll */}
      <section className="bg-slate-900 rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 overflow-hidden shadow-2xl border border-slate-800">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <Code className="text-blue-400" size={32} />
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Query <span className="text-blue-400">Lab</span></h2>
        </div>
        
        <div className="bg-slate-800/30 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-700/50 font-mono text-[10px] md:text-sm leading-relaxed md:leading-8 overflow-x-auto whitespace-pre">
          <code>
            <span className="text-slate-500">/* 1. Build Table */</span>{"\n"}
            <span className="text-pink-400 font-bold underline">CREATE TABLE</span> users (id <span className="text-sky-300">INT</span>, name <span className="text-sky-300">TEXT</span>);{"\n\n"}
            <span className="text-slate-500">/* 2. Add and Edit Data */</span>{"\n"}
            <span className="text-pink-400 font-bold underline">INSERT INTO</span> users <span className="text-pink-400 font-bold italic">VALUES</span> (1, <span className="text-amber-300">'User'</span>);{"\n"}
            <span className="text-pink-400 font-bold underline">UPDATE</span> users <span className="text-pink-400 font-bold italic">SET</span> name = <span className="text-amber-300">'Admin'</span> <span className="text-pink-400">WHERE</span> id = 1;
          </code>
        </div>
      </section>

      {/* 5. Mobile Friendly Alert Tip */}
      <div className="flex flex-col sm:flex-row gap-4 p-6 md:p-10 bg-blue-50 border border-blue-100 rounded-[2rem] md:rounded-[3rem] shadow-sm">
        <AlertCircle className="text-blue-600 shrink-0 mx-auto sm:mx-0" size={32} />
        <div className="text-center sm:text-left">
          <h4 className="font-black text-blue-900 uppercase tracking-tighter italic text-sm md:text-base">Job Interview Tip: Clear vs Delete</h4>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed mt-2 font-medium">
            <b>DELETE</b> removes data slowly row-by-row and you can undo it. 
            <b>TRUNCATE</b> is like a "quick clear" that wipes the whole table instantly. It is faster, but you cannot undo it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreCommands;