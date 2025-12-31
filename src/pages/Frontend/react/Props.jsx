import React from 'react';
import { 
  Share2, ShieldCheck, Box, 
  Layers, Zap, Info, UserCircle2, CheckCircle2
} from 'lucide-react';

// --- Simple Concept: Passing Info (Props) ---
// We pick out the info we need inside the ({ brackets }).
// If info is missing, we set a backup name like "New User".
const UserCard = ({ 
  name = "New User", 
  role = "Guest", 
  status = "offline", 
  children 
}) => {
  return (
    <div className="relative p-5 md:p-6 border-2 border-slate-100 rounded-[1.5rem] bg-white hover:border-sky-500 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-sky-50 rounded-xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
            <UserCircle2 size={24} />
          </div>
          <div>
            <h4 className="font-black text-slate-800 tracking-tight text-lg">{name}</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{role}</p>
          </div>
        </div>
        <span className={`w-3 h-3 rounded-full shrink-0 ${status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
      </div>
      
      {/* The 'children' prop lets us put any extra text or buttons inside the card */}
      <div className="mt-4 pt-4 border-t border-slate-50 text-xs md:text-sm text-slate-500 leading-relaxed italic">
        {children || "No extra info provided."}
      </div>
    </div>
  );
};

const Props = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-10">
      
      {/* 1. HEADER SECTION - Responsive text sizing */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-10 hidden lg:block">
          <Layers size={180} className="text-sky-400 rotate-12" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-[10px] font-black mb-4 uppercase tracking-widest">
            <Zap size={14} /> Passing Information
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter leading-tight">
            Component <span className="text-sky-400">Props</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
            Props (Properties) are like <strong>arguments for functions</strong>. They let you pass data from a Parent component down to a Child component to make them reusable.
          </p>
        </div>
      </section>

      {/* 2. LIVE DEMO GRID - Stacks on mobile */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 px-2">
          <Share2 className="text-sky-500" size={20} />
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter">Live Demo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <UserCard 
            name="Arun Kumar" 
            role="Architect" 
            status="active"
          >
            "I design the main structure of the application."
          </UserCard>

          <UserCard 
            name="Deepika" 
            role="Designer" 
            status="active"
          >
            "I make sure the website looks beautiful."
          </UserCard>

          {/* Testing backup values */}
          <UserCard /> 
        </div>
      </div>

      {/* 3. RULES SECTION - Responsive stacking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 md:p-10 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm">
          <h3 className="font-black text-slate-800 mb-6 flex items-center gap-2 text-xl italic uppercase">
            <CheckCircle2 className="text-emerald-500" /> Key Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-2">
              <h4 className="font-bold text-sky-600 text-sm md:text-base">1. Read-Only</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                Components should never change the info they receive. If you need to change data, use <strong>State</strong> instead.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sky-600 text-sm md:text-base">2. One-Way Flow</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                Data always moves <strong>Down</strong> (Parent to Child). This makes it very easy to find and fix bugs.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-indigo-900 rounded-[2rem] text-white shadow-xl flex flex-col justify-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Box className="text-indigo-300" />
            <h4 className="font-bold uppercase text-[10px] tracking-widest">Wrapper Power</h4>
          </div>
          <p className="text-sm leading-relaxed opacity-90 italic font-medium">
            "The 'children' prop lets you wrap a component around anything—text, images, or even other components!"
          </p>
        </div>
      </div>

      {/* 4. COMPARISON TABLE - Horizontal scroll for mobile */}
      <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-200">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead className="bg-slate-100 text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">
              <tr>
                <th className="px-6 py-5">Feature</th>
                <th className="px-6 py-5">Why use it?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-sky-600 text-xs md:text-sm">Default Props</td>
                <td className="px-6 py-4 text-xs md:text-sm italic">Sets backup data so the app doesn't crash if info is missing.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-sky-600 text-xs md:text-sm">Destructuring</td>
                <td className="px-6 py-4 text-xs md:text-sm italic">Makes your code clean by picking exactly what data you need.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Props;