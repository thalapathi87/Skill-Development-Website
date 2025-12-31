import React, { useState, useEffect, useMemo, useCallback, useRef, useTransition } from 'react';
import { 
  Zap, Clock, Lightbulb, Activity, 
  Database, ShieldCheck, RefreshCcw, 
  Cpu, Terminal, PlayCircle, CheckCircle2,
  Layers, Binary
} from 'lucide-react';

// --- MASTER PATTERN: Custom Hook with Cleanup Logic ---
const useStopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return { seconds, isActive, setIsActive, reset: () => setSeconds(0) };
};

const Hooks = () => {
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition(); // MASTER LEVEL: Concurrent Mode
  const { seconds, isActive, setIsActive, reset } = useStopwatch();
  
  // MASTER PATTERN: Persistent Singleton with useRef
  // This value survives re-renders but changing it doesn't trigger a new render.
  const renderCount = useRef(0);
  const heavyWorker = useRef(null); 

  useEffect(() => {
    renderCount.current += 1;
  });

  // MASTER PATTERN: Semantic Memoization
  // Prevents "Expensive" re-computations unless the 'search' identity changes.
  const expensiveCalculation = useMemo(() => {
    let i = 0;
    while (i < 1000000) i++; // Simulating heavy work
    return search.length * 12345;
  }, [search]);

  // MASTER PATTERN: Referential Identity Stability
  // Ensures this function maintains the same memory address across renders.
  const handleToggle = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive, setIsActive]);

  // Handle Search with Transition
  const handleSearch = (e) => {
    // Keep the input snappy, but mark the result calculation as lower priority
    startTransition(() => {
      setSearch(e.target.value);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-10">
      
      {/* 1. MASTER HEADER SECTION */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-b-8 border-sky-500">
        <div className="absolute -top-10 -right-10 opacity-5 md:opacity-10 hidden lg:block">
          <Cpu size={340} className="text-sky-400 animate-pulse" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Layers size={14} /> Hook Engine v18.3
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-tight">
            React <span className="text-sky-400">Master</span> Hooks
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
            Advanced orchestration of State, Side-effects, and Performance. Master the internal "Identity Stability" and "Concurrent Rendering" patterns.
          </p>
        </div>
      </section>

      {/* 2. MASTER CONSOLE: Custom Hook & Refs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Analytics & Timer Card */}
        <div className="lg:col-span-2 bg-white p-2 rounded-[2rem] border-2 border-slate-100 shadow-xl overflow-hidden">
          <div className="bg-emerald-950 rounded-[1.6rem] p-6 md:p-10 h-full relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Binary size={120} className="text-emerald-400" />
            </div>
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
                <Database size={16} /> Engine State
              </div>
              <div className="px-3 py-1 bg-emerald-400/10 rounded-md text-emerald-400 text-[10px] font-mono border border-emerald-400/20">
                LIFECYCLE_TICK: {renderCount.current}
              </div>
            </div>
            
            <div className="text-center space-y-6 relative z-10">
              <p className="text-emerald-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">Logic Abstraction (Custom Hook)</p>
              <h2 className="text-5xl md:text-8xl font-mono font-black text-white tracking-tighter tabular-nums">
                {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                {String(seconds % 60).padStart(2, '0')}
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <button 
                  onClick={handleToggle}
                  className={`px-8 py-4 rounded-2xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    isActive ? 'bg-rose-500 text-white shadow-rose-500/20' : 'bg-emerald-500 text-white shadow-emerald-500/20'
                  } shadow-lg`}
                >
                  <Zap size={18} />
                  {isActive ? 'HALT PROCESS' : 'EXECUTE ENGINE'}
                </button>
                <button 
                  onClick={reset}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl text-sm font-black transition-all"
                >
                  SYSTEM RESET
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Master Performance Monitoring */}
        <div className="space-y-6">
          <div className="p-6 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-4 text-sky-600 font-bold text-xs uppercase tracking-widest">
              <RefreshCcw size={18} className={isPending ? 'animate-spin' : ''} /> 
              {isPending ? 'Prioritizing Input...' : 'Memoization Optimized'}
            </div>
            <input 
              type="text" 
              placeholder="Test useMemo speed..."
              className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-4 text-xs md:text-sm font-mono focus:ring-2 focus:ring-sky-500 outline-none transition-all"
              onChange={handleSearch}
            />
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-sky-200 transition-colors">
              <p className="text-[9px] text-slate-400 uppercase font-bold mb-1">Computed Memory Address</p>
              <p className="text-xl font-mono font-bold text-slate-800 truncate">
                0x{expensiveCalculation.toString(16).toUpperCase()}
              </p>
            </div>
          </div>

          <div className="p-6 bg-indigo-900 rounded-[2rem] text-white shadow-lg border-b-4 border-indigo-700">
            <h4 className="text-[10px] font-bold text-indigo-300 uppercase mb-2 flex items-center gap-2 tracking-widest">
              <ShieldCheck size={14} /> The Rules of Hooks
            </h4>
            <p className="text-xs leading-relaxed opacity-80 font-medium italic">
              "Hooks must maintain the same call order on every render. Never wrap them in 'if' or 'for' blocks."
            </p>
          </div>
        </div>
      </div>

      {/* 3. MASTER HOOK REFERENCE TABLE */}
      <div className="bg-white border-2 border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-black text-slate-800 flex items-center gap-2 text-sm uppercase tracking-tighter">
            <Terminal size={18} className="text-sky-500" /> Advanced Logic Manifest
          </h3>
          <span className="text-[9px] font-bold text-slate-400">V.18.0 PATTERNS</span>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-slate-50 text-slate-400">
              <tr>
                <th className="px-8 py-4 font-bold uppercase tracking-widest text-[9px]">Advanced Hook</th>
                <th className="px-8 py-4 font-bold uppercase tracking-widest text-[9px]">Master Pattern Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
              <tr>
                <td className="px-8 py-6 font-mono text-sky-600 font-bold text-base">useTransition</td>
                <td className="px-8 py-6 text-slate-600 italic leading-relaxed">
                  Allows you to mark state updates as "non-urgent." React keeps the UI responsive by prioritizing typing over heavy calculations.
                </td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-8 py-6 font-mono text-indigo-600 font-bold text-base">useDeferredValue</td>
                <td className="px-8 py-6 text-slate-600 italic leading-relaxed">
                  Postpones updating a part of the UI that is slow to render. Ideal for large lists or complex data charts.
                </td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-mono text-emerald-600 font-bold text-base">useLayoutEffect</td>
                <td className="px-8 py-6 text-slate-600 italic leading-relaxed">
                  Runs <b>synchronously</b> after all DOM mutations. Essential for calculating heights or widths before the browser repaints.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hooks;