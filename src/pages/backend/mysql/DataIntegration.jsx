import React from 'react';
import { 
  ExternalLink, FileOutput, Share2, Database, 
  Terminal, Code, Layers, Info, 
  AlertCircle, CloudUpload, HardDriveDownload, CheckCircle2 
} from 'lucide-react';

const DataIntegration = () => {
  return (
    /* Added responsive padding for mobile and max-width for desktop alignment */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-left-8 duration-700 pb-10">
      
      {/* 1. Header Section - Responsive Text Sizes */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-blue-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <Share2 size={180} className="text-blue-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <Database size={14} /> Module 12: Sharing Data
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter leading-tight">
            Data <span className="text-blue-400">Integration</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Your data shouldn't stay locked in the database. Learn how to <strong>move your info</strong> into Excel files or connect it to modern apps.
          </p>
        </div>
      </section>

      {/* 2. Integration Pillars - Stacks on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1: Exporting */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] md:rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <FileOutput size={28} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Moving Data Out</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6 font-medium">
            You can take your data out for reports using these formats:
          </p>
          <ul className="space-y-2 md:space-y-3">
             {[
               { t: 'CSV File', d: 'The best way to open data in Excel.' },
               { t: 'SQL Dump', d: 'A full backup to move to another server.' },
               { t: 'JSON', d: 'Best for web developers and mobile apps.' }
             ].map((item, i) => (
               <li key={i} className="flex items-start gap-2 text-[10px] md:text-xs text-slate-600 bg-blue-50/50 p-3 rounded-xl">
                 <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                 <div><span className="font-bold text-slate-800">{item.t}:</span> {item.d}</div>
               </li>
             ))}
          </ul>
        </div>

        {/* Card 2: System Integration */}
        <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] md:rounded-3xl hover:border-blue-500 transition-all shadow-sm group">
          <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
            <ExternalLink size={28} />
            <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">App Connections</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6 font-medium">
            Connect MySQL to your favorite coding languages easily:
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-3">
             {['Node.js', 'Python', 'Java', 'PHP'].map((lang, i) => (
               <div key={i} className="flex items-center justify-center md:justify-start gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[10px] md:text-xs font-bold text-slate-700">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {lang}
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* 3. CLI Section - Responsive Terminal */}
      <section className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200">
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter italic">
          <HardDriveDownload className="text-blue-600" /> Quick Backup Tool
        </h2>
        <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl relative overflow-hidden">
             <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full" />
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-amber-500 rounded-full" />
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full" />
                </div>
                <span className="text-[8px] md:text-[10px] font-mono text-blue-400/50 uppercase tracking-widest ml-4 font-bold italic">Command Line - mysqldump</span>
             </div>
             <div className="space-y-4 font-mono text-[10px] md:text-sm leading-relaxed overflow-x-auto whitespace-pre">
                <p className="text-slate-500 italic"># Copy a table into a backup file</p>
                <code className="text-blue-300 block bg-black/40 p-4 rounded-xl border border-slate-800">
                   mysqldump -u root -p my_db my_table {'>'} backup.sql
                </code>
             </div>
        </div>
      </section>

      {/* 4. Graduation Card - Responsive Celebration UI */}
      <div className="flex flex-col lg:flex-row gap-8 p-8 md:p-12 bg-blue-600 text-white rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden group">
        <div className="absolute -bottom-20 -right-20 opacity-10 transition-transform group-hover:scale-110 duration-1000 hidden lg:block">
           <CloudUpload size={400} />
        </div>
        <div className="shrink-0 bg-white/20 p-5 rounded-2xl md:rounded-3xl backdrop-blur-md self-center lg:self-start">
           <AlertCircle size={48} className="text-white" />
        </div>
        <div className="relative z-10 text-center lg:text-left space-y-6">
          <h4 className="font-black text-3xl md:text-5xl uppercase tracking-tighter">Course Complete!</h4>
          <p className="text-base md:text-xl opacity-90 leading-relaxed max-w-3xl font-medium">
            Great job! You have finished all 12 modules. You now know how to design, build, and connect professional databases.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
             <div className="px-4 py-2 bg-white text-blue-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg">
                Level: MySQL Master
             </div>
             <div className="px-4 py-2 bg-blue-700 text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-white/20">
                100% Modules Done
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataIntegration;