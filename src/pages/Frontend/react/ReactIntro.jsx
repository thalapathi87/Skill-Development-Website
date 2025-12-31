import React from 'react';
import { 
  Sparkles, Zap, Smartphone, Globe, 
  Shield, Cpu, Box, Rocket, Terminal 
} from 'lucide-react';

const ReactIntro = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-700">
      
      {/* 1. MASTER HERO: The UI Engine Concept */}
      <section className="relative overflow-hidden py-16 px-8 bg-slate-900 rounded-[3rem] text-white shadow-2xl border-b-8 border-sky-500">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Rocket size={14} /> Industrial Grade UI Library
            </div>
            <h1 className="text-5xl font-black mb-6 leading-tight tracking-tighter">
              Mastering the <br />
              <span className="text-sky-400 font-mono">React Engine</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              React is more than just a library; it is a <b>Declarative Ecosystem</b>. 
              Created by Facebook in 2013, it was designed to handle complex state changes efficiently in modern web applications.
            </p>
          </div>
          <div className="hidden md:block md:w-1/3">
            {/* Visual representation of the React Core */}
            <div className="relative w-48 h-48 mx-auto animate-spin-slow">
               <Box className="absolute top-0 left-0 text-sky-500 opacity-20" size={192} />
               <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-400" size={80} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS: Explaining the core strengths of React */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Zap className="text-amber-400" />,
            title: "Reconciliation",
            desc: "Uses Virtual DOM logic and a 'Diffing Algorithm' to guarantee the minimum number of browser updates for maximum performance."
          },
          {
            icon: <Smartphone className="text-sky-400" />,
            title: "Component Atomicity",
            desc: "Build applications using standalone, reusable atoms that encapsulate both logic and UI into a single unit."
          },
          {
            icon: <Globe className="text-emerald-400" />,
            title: "Universal Bridge",
            desc: "Use the same philosophy to build for the Web (React), Mobile (React Native), and even Desktop environments."
          }
        ].map((pillar, i) => (
          <div key={i} className="group p-8 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-sky-500 hover:shadow-xl transition-all duration-500">
            <div className="mb-4 p-3 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
              {pillar.icon}
            </div>
            <h3 className="font-black text-slate-800 text-xl mb-3 tracking-tight">{pillar.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>

      

      {/* 3. DEEP-DIVE: Declarative vs Imperative Logic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-200">
          <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
            <Terminal size={24} className="text-slate-400" /> Declarative Nature
          </h2>
          <div className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed italic border-l-4 border-sky-500 pl-4">
              "With React, we simply describe what the UI should look like (What to do), and React handles the actual rendering process (How to do it)."
            </p>
            <div className="bg-white p-4 rounded-xl border border-slate-200 font-mono text-xs">
              <span className="text-emerald-600 font-bold">// The Declarative React Way</span><br />
              {`return isLoggedIn ? <Dashboard /> : <Login />`}
            </div>
          </div>
        </div>

        <div className="bg-indigo-900 p-8 rounded-3xl text-white flex flex-col justify-center shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-sky-400" />
              <h2 className="text-xl font-black uppercase tracking-widest">Architectural Flow</h2>
            </div>
            <p className="text-indigo-200 leading-relaxed mb-6">
              React follows a <span className="text-white font-bold italic">One-Way Data Flow</span> pattern. 
              As state changes are triggered, component trees re-render and synchronize the updated UI automatically.
            </p>
            <div className="flex gap-2 text-white">
              <span className="px-3 py-1 bg-white/10 rounded-md text-[10px] font-bold">PROPS ➔ DOWN</span>
              <span className="px-3 py-1 bg-white/10 rounded-md text-[10px] font-bold">STATE ➔ LOCAL</span>
              <span className="px-3 py-1 bg-white/10 rounded-md text-[10px] font-bold">V-DOM ➔ DIFF</span>
            </div>
        </div>
      </div>

      

      {/* 4. ECOSYSTEM AWARENESS TABLE */}
      <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-5 bg-slate-50 border-b border-slate-200">
          <h3 className="font-black text-slate-800 uppercase tracking-tighter text-sm">React Ecosystem Landscape</h3>
        </div>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-6 py-4 font-bold text-slate-700">UI Management</td>
              <td className="px-6 py-4 text-slate-500">React DOM, React Native, React Three Fiber</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-bold text-slate-700">Meta Frameworks</td>
              <td className="px-6 py-4 text-sky-600 font-bold italic">Next.js (SSR/SSG Mastery)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-bold text-slate-700">Philosophy</td>
              <td className="px-6 py-4 text-slate-500 italic">"Learn Once, Write Anywhere"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReactIntro;