import React from 'react';
import { 
  Key, ShieldCheck, Database, 
  Binary, GitCommit, AlertCircle, 
  CheckCircle2, Info, ArrowRight,
  Layers 
} from 'lucide-react';

const Normalization = () => {
  return (
    /* Added responsive horizontal padding and max-width for desktop */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-in fade-in slide-in-from-right-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive Text Sizes */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute -top-10 -right-10 opacity-5 md:opacity-10 hidden sm:block">
          <Binary size={240} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Database size={14} /> Module 02: Database Architecture
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Normalization <span className="text-blue-400">& Keys</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Normalization is a technique to organize data. It stops us from repeating the same info and keeps our database fast and clean.
          </p>
        </div>
      </section>

      {/* 2. Normal Forms - Stacks on Mobile, 3 columns on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { form: "1NF", title: "Step 1: Atoms", desc: "Every cell must have only one piece of data. No lists or groups inside a single cell." },
          { form: "2NF", title: "Step 2: Dependency", desc: "Remove data that doesn't belong. Every column must relate directly to the Primary Key." },
          { form: "3NF", title: "Step 3: Relationships", desc: "No middle-man data. Columns should only rely on the Primary Key, not on other columns." }
        ].map((nf, i) => (
          <div key={i} className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
            <span className="text-3xl font-black text-blue-100 group-hover:text-blue-500 transition-colors mb-4 block italic">{nf.form}</span>
            <h3 className="font-bold text-slate-800 mb-2 tracking-tight">{nf.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{nf.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. SQL Keys Section - Responsive Grid */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-inner">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-8 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter italic">
          <Key className="text-blue-600" /> Key Types 
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex gap-4 p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-300 transition-colors">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg h-fit"><ShieldCheck size={20}/></div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">Primary Key</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed mt-1">A unique ID (like a Roll Number) that identifies each row.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-300 transition-colors">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg h-fit"><GitCommit size={20}/></div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">Foreign Key</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed mt-1">A link used to connect one table to another table.</p>
              </div>
            </div>
          </div>
          
          {/* Code block with horizontal scroll for mobile */}
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-x-auto">
            <div className="text-blue-400 font-mono text-[10px] md:text-xs space-y-4 min-w-[250px]">
              <p className="text-slate-500 italic">-- Simple Table Connection</p>
              <p><span className="text-pink-400 font-bold underline">CREATE TABLE</span> Orders (</p>
              <p className="pl-4">ID <span className="text-sky-300">INT</span> <span className="text-amber-400 font-bold">PRIMARY KEY</span>,</p>
              <p className="pl-4">UserID <span className="text-sky-300">INT</span>,</p>
              <p className="pl-4"><span className="text-amber-400 font-bold">FOREIGN KEY</span> (UserID) <span className="text-pink-400">REFERENCES</span> Users(ID)</p>
              <p>);</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Constraints Table - Scrollable on Mobile */}
      <div className="bg-white border-2 border-slate-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="p-6 md:p-8 bg-slate-900 text-white flex items-center justify-between border-b border-blue-500/30">
          <h3 className="font-black flex items-center gap-3 uppercase tracking-tighter text-xs md:text-sm italic">
            <AlertCircle className="text-blue-400" size={22} /> Simple Rules
          </h3>
          <span className="hidden sm:inline text-[10px] font-mono text-blue-400/50 font-bold tracking-widest">MODULE 02</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-slate-50 text-slate-400 text-left border-b border-slate-100">
              <tr>
                <th className="px-6 md:px-8 py-4 font-black uppercase tracking-widest text-[10px]">Rule Name</th>
                <th className="px-6 md:px-8 py-4 font-black uppercase tracking-widest text-[10px]">What it does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {[
                  { name: "NOT NULL", usage: "Stops a column from being empty." },
                  { name: "UNIQUE", usage: "Stops two rows from having the same value." },
                  { name: "CHECK", usage: "Makes sure data follows a rule (Example: Age > 18)." }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 md:px-8 py-4 font-mono text-blue-600 font-black italic text-xs">
                      {row.name}
                    </td>
                    <td className="px-6 md:px-8 py-4 text-slate-500 font-medium text-xs">
                      {row.usage}
                    </td>
                  </tr>
                ))}
             </tbody>
          </table>
        </div>
      </div>

      {/* Final Architect Tip - Stacks icon on Mobile */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-blue-50 border border-blue-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm items-center sm:items-start text-center sm:text-left">
        <Info className="shrink-0 text-blue-500" size={36} />
        <div>
          <h4 className="font-black text-lg md:text-xl uppercase tracking-tighter italic text-blue-900">Pro Developer Tip</h4>
          <p className="text-xs md:text-sm text-slate-700 opacity-90 leading-relaxed mt-2 font-medium">
            3rd Normal Form (3NF) is the "sweet spot" for most apps. It makes your data clean without making the database too slow. Start with 3NF for almost every project!
          </p>
          <div className="mt-5">
             <button className="inline-flex items-center gap-2 text-[10px] font-black text-blue-600 hover:text-blue-800 transition-all uppercase tracking-[0.2em] group underline decoration-blue-200 underline-offset-8">
               See 1NF Table Example <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform"/>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Normalization;