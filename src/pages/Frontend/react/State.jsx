import React, { useState } from 'react';
import { MousePointer2, Info, RefreshCw, Zap } from 'lucide-react';

const State = () => {
  // We use useState to create a "memory" for this component.
  // 'count' is the value we remember.
  // 'setCount' is the only way to change that value.
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- HEADER --- */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sky-600 font-bold uppercase tracking-wider text-xs mb-3">
          <RefreshCw className="w-4 h-4 animate-spin-slow" />
          <span>React Hooks Module</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          React <span className="text-sky-500">State</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
          Think of <b>State</b> as a component's personal memory. When the memory changes, React automatically "re-renders" (refreshes) the screen to show the new data.
        </p>
      </header>

      {/* --- EXPLANATION GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Zap className="text-amber-500 w-5 h-5" /> How it works
          </h3>
          <ul className="space-y-4 text-sm text-slate-600">
            <li className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 font-bold text-[10px]">1</div>
              <p>You store data in a variable (the State).</p>
            </li>
            <li className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 font-bold text-[10px]">2</div>
              <p>You use a "Setter" function to change that data.</p>
            </li>
            <li className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 font-bold text-[10px]">3</div>
              <p>React sees the change and updates the UI instantly.</p>
            </li>
          </ul>
        </div>

        {/* --- LIVE DEMO --- */}
        <div className="bg-sky-50 p-6 md:p-8 rounded-[2rem] border border-sky-100 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6 text-sky-700 justify-center">
            <MousePointer2 size={18} />
            <h2 className="font-bold uppercase tracking-widest text-xs">Live Interaction</h2>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm text-center border border-sky-100">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Memory Value</p>
            <h3 className="text-5xl font-black text-sky-600 mb-8">{count}</h3>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => setCount(count - 1)}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-bold transition-all active:scale-95 text-sm"
              >
                Minus 1
              </button>
              <button 
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-sky-200 active:scale-95 text-sm"
              >
                Plus 1
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- IMPORTANT RULE --- */}
      <div className="p-6 md:p-8 bg-amber-50 border border-amber-100 rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shrink-0">
          <Info className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-amber-900 mb-1">The Golden Rule</h4>
          <p className="text-sm text-amber-800/80 leading-relaxed font-medium">
            Never change state directly like <code>count = 5</code>. React won't notice! 
            Always use the <b>Setter Function</b> (<code>setCount</code>) so React knows it's time to refresh the screen.
          </p>
        </div>
      </div>
      
      {/* --- CODE PREVIEW --- */}
      <div className="mt-12 bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl">
         <div className="font-mono text-xs md:text-sm leading-relaxed text-sky-300 overflow-x-auto">
            <div className="text-slate-500 italic mb-4">// How to use state in code</div>
            <div><span className="text-pink-400">const</span> [count, setCount] = <span className="text-emerald-400">useState</span>(<span className="text-amber-200">0</span>);</div>
            <br />
            <div className="text-slate-500 italic mt-2">// This triggers the UI refresh</div>
            <div><span className="text-emerald-400">setCount</span>(count + <span className="text-amber-200">1</span>);</div>
         </div>
      </div>
    </div>
  );
};

export default State;