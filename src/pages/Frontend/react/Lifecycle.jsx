import React, { useState, useEffect } from 'react';
import { 
  Clock, Play, RefreshCw, Trash2, 
  Info, Activity, Cpu, Layers, 
  Terminal, ShieldAlert, Timer, CheckCircle2
} from 'lucide-react';

// --- SIMPLE CONCEPT: Component Tracking ---
// This tool shows you exactly when a component is born and when it changes.
const LifecycleMonitor = ({ id }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    
    // BIRTH (Mount): Runs once when the component appears on screen.
    setLogs(prev => [...prev, `[${timestamp}] 🟢 BORN: Item #${id}`]);

    // CHANGE (Update): Runs whenever the 'id' number changes.
    if (id > 1) {
      setLogs(prev => [...prev, `[${timestamp}] 🔄 CHANGED: ID is now ${id}`]);
    }

    // GOODBYE (Cleanup): Runs just before the component disappears.
    // Use this to stop timers or cancel internet requests.
    return () => {
      console.log(`Cleaning up ID ${id}...`);
    };
  }, [id]);

  return (
    <div className="w-full bg-slate-900 rounded-2xl p-4 font-mono text-[10px] md:text-xs text-emerald-400 border border-slate-800 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between mb-2 border-b border-slate-800 pb-2">
        <span className="flex items-center gap-2 uppercase tracking-widest font-bold">
          <Terminal size={14}/> Event_Log
        </span>
        <span className="animate-pulse w-2 h-2 rounded-full bg-emerald-500"></span>
      </div>
      <div className="h-24 overflow-y-auto space-y-1 scrollbar-hide">
        {logs.map((log, i) => (
          <div key={i} className="animate-in slide-in-from-left duration-300">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

const Lifecycle = () => {
  const [instanceId, setInstanceId] = useState(0);
  const [isLive, setIsLive] = useState(false);

  return (
    /* Added responsive padding for mobile devices */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-top-8 duration-700 pb-10">
      
      {/* 1. HEADER SECTION: Responsive text and padding */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-10 hidden lg:block">
          <Layers size={180} className="text-sky-400 rotate-12" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] md:text-xs font-bold mb-4 uppercase tracking-widest">
            <Activity size={14} /> The Component Journey
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter leading-tight">
            Lifecycle <span className="text-sky-400">Mastery</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
            In React, components go through three stages: <strong>Birth, Change, and Death</strong>. Mastering these steps helps you manage data and memory perfectly.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE LAB: Stacks on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-slate-800 flex items-center gap-2 uppercase tracking-tighter text-sm md:text-base">
              <Cpu size={20} className="text-sky-500" /> Control Center
            </h3>
            {isLive && (
              <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[9px] font-bold rounded animate-pulse">
                LIVE_NOW
              </span>
            )}
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <button 
              onClick={() => {
                setIsLive(!isLive);
                if (!isLive) setInstanceId(1);
              }}
              className={`w-full py-4 rounded-2xl font-black text-xs md:text-sm transition-all active:scale-95 flex items-center justify-center gap-3 ${
                isLive ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-slate-900 text-white shadow-xl'
              }`}
            >
              {isLive ? <Trash2 size={18} /> : <Play size={18} />}
              {isLive ? 'DELETE COMPONENT' : 'START COMPONENT'}
            </button>

            {isLive && (
              <button 
                onClick={() => setInstanceId(prev => prev + 1)}
                className="w-full py-4 bg-sky-500 text-white rounded-2xl font-black text-xs md:text-sm hover:bg-sky-600 shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <RefreshCw size={18} /> UPDATE DATA (ID: {instanceId})
              </button>
            )}
          </div>

          {/* Visual Output */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200 min-h-[160px] flex items-center justify-center">
            {isLive ? (
              <div className="w-full space-y-4 animate-in zoom-in duration-300">
                <div className="p-5 md:p-6 bg-white shadow-md rounded-2xl border-2 border-emerald-400 text-center animate-bounce">
                  <span className="font-black text-emerald-600 text-sm md:text-base uppercase tracking-tight">
                    Component_Active_{instanceId}
                  </span>
                </div>
                <LifecycleMonitor id={instanceId} />
              </div>
            ) : (
              <p className="text-slate-400 text-xs md:text-sm font-medium italic text-center">Awaiting Start Command...</p>
            )}
          </div>
        </div>

        {/* 3. LOGIC CARDS - Side by side or stacked */}
        <div className="space-y-4 md:space-y-6">
          <div className="p-6 md:p-8 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">How it works</h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              We use <strong>useEffect</strong> to handle the lifecycle. 
              <br /><br />
              An empty list <code className="bg-slate-100 px-1 rounded text-sky-600 font-bold">[]</code> means "Run at Birth." Adding a variable means "Run when this changes."
            </p>
          </div>

          <div className="p-6 md:p-8 bg-indigo-900 rounded-[2rem] text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="text-indigo-300" />
              <h4 className="font-bold text-sm md:text-base uppercase tracking-tight">The Cleanup Step</h4>
            </div>
            <p className="text-xs md:text-sm text-indigo-100 leading-relaxed opacity-80 font-medium">
              When a component leaves the screen, it must clean up after itself. Use the "return" function inside useEffect to stop internet calls or timers. This keeps your app fast!
            </p>
          </div>
        </div>
      </div>

      {/* 4. COMPARISON TABLE: Responsive with horizontal scroll */}
      <div className="bg-white border-2 border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
        <div className="p-5 bg-slate-50 border-b border-slate-100">
          <h3 className="font-black text-slate-800 flex items-center gap-2 text-sm uppercase tracking-tighter italic">
            <Timer size={18} className="text-sky-500" /> Quick Phase Map
          </h3>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead className="bg-slate-50 text-slate-400">
              <tr>
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[9px]">Classic Phase</th>
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[9px]">Modern useEffect</th>
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[9px]">Simple Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
  <tr className="hover:bg-slate-50/50 transition-colors">
    <td className="px-6 py-5 font-mono text-rose-500 text-[10px] md:text-xs">
      componentDidMount
    </td>
    <td className="px-6 py-5 font-mono text-sky-600 font-bold text-[10px] md:text-xs">
      useEffect(() =&gt; {"{"}{"}"}, [])
    </td>
    <td className="px-6 py-5 text-slate-500 italic">
      Birth / First Load
    </td>
  </tr>

  <tr className="hover:bg-slate-50/50 transition-colors">
    <td className="px-6 py-5 font-mono text-rose-500 text-[10px] md:text-xs">
      componentDidUpdate
    </td>
    <td className="px-6 py-5 font-mono text-sky-600 font-bold text-[10px] md:text-xs">
      useEffect(() =&gt; {"{"}{"}"}, [data])
    </td>
    <td className="px-6 py-5 text-slate-500 italic">
      Change / Refresh
    </td>
  </tr>

  <tr className="hover:bg-slate-50/50 transition-colors">
    <td className="px-6 py-5 font-mono text-rose-500 text-[10px] md:text-xs">
      componentWillUnmount
    </td>
    <td className="px-6 py-5 font-mono text-sky-600 font-bold text-[10px] md:text-xs">
      return () =&gt; {"{"}{"}"}
    </td>
    <td className="px-6 py-5 text-slate-500 italic">
      Leave / Cleanup
    </td>
  </tr>
</tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Lifecycle;