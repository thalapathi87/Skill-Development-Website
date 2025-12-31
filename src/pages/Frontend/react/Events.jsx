import React, { useState, useCallback } from 'react';
import { 
  MousePointer2, Keyboard, Zap, Activity, 
  Target, Command, ShieldAlert, Terminal, 
  ArrowRight, CheckCircle2
} from 'lucide-react';

const Events = () => {
  const [log, setLog] = useState({ type: 'System Idle', detail: 'Waiting for you...' });
  const [inputValue, setInputValue] = useState('');

  // Simple Pattern: This updates our "Monitor" screen whenever something happens
  const dispatchEvent = useCallback((type, detail) => {
    setLog({ type, detail });
  }, []);

  return (
    /* Added px-4 for mobile breathing room and max-width for desktop */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 pb-10">
      
      {/* 1. HEADER SECTION: Responsive text sizing */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <Zap size={120} className="text-sky-400 rotate-12" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] md:text-xs font-bold mb-4 uppercase tracking-widest">
            <Activity size={14} /> Handle User Actions
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter leading-tight">
            Event <span className="text-sky-400">Mastery</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            React uses <strong>Synthetic Events</strong>. Think of them as a "translator" that makes sure clicks and typing work exactly the same on all browsers (Chrome, Safari, etc.).
          </p>
        </div>
      </section>

      {/* 2. MONITOR & INTERACTION GRID - Stacks on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Event Monitor Screen */}
        <div className="lg:col-span-2 bg-white p-2 rounded-[2rem] border-2 border-slate-100 shadow-xl order-2 lg:order-1">
          <div className="bg-slate-900 rounded-[1.6rem] p-6 h-full min-h-[220px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Terminal className="text-emerald-400" size={24} />
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="mt-8 font-mono">
              <p className="text-emerald-400/50 text-[10px] mb-1 uppercase tracking-widest">Live Feedback</p>
              <h2 className="text-xl md:text-2xl text-white font-bold mb-2 tracking-tight">{log.type}</h2>
              <p className="text-slate-400 text-xs md:text-sm italic"> {log.detail}</p>
            </div>
          </div>
        </div>

        {/* Interaction Zone Handlers */}
        <div className="space-y-4 order-1 lg:order-2">
          {/* Mouse Hover Event */}
          <div 
            onMouseEnter={() => dispatchEvent('Mouse Entered', 'You are hovering over the card!')}
            className="p-6 bg-indigo-600 rounded-2xl text-white hover:bg-indigo-500 transition-all cursor-crosshair group shadow-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <Target size={20} className="group-hover:scale-125 transition-transform" />
              <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Mouse Sensor</span>
            </div>
            <p className="text-sm font-bold">Hover here to test</p>
          </div>

          {/* Typing Keyboard Event */}
          <div className="p-5 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-slate-800 font-bold text-xs uppercase tracking-widest">
              <Command size={16} /> Keyboard Test
            </div>
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                dispatchEvent('Typing...', `Current text: ${e.target.value}`);
              }}
              onKeyDown={(e) => e.key === 'Enter' && dispatchEvent('Success', 'You pressed the Enter key!')}
              placeholder="Type something & press Enter..."
              className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono text-xs md:text-sm"
            />
          </div>
        </div>
      </div>

      {/* 3. CORE LOGIC CARDS - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Stop Propagation Concept */}
        <div className="p-6 bg-rose-50 border-l-8 border-rose-500 rounded-2xl shadow-sm group">
          <h3 className="font-black text-rose-900 mb-2 flex items-center gap-2 uppercase tracking-tighter text-sm md:text-base">
            Stopping Bubbles
          </h3>
          <p className="text-rose-800 text-xs md:text-sm leading-relaxed mb-4 font-medium">
            Sometimes a click inside a small box also triggers a click on the big box behind it. We use <strong>e.stopPropagation()</strong> to tell the browser: "Only trigger the small box, don't bubble up!"
          </p>
          <button 
            onClick={() => dispatchEvent('Test Run', 'Stop Propagation test active')}
            className="flex items-center gap-2 text-xs font-black text-rose-600 hover:underline underline-offset-4"
          >
            RUN TEST CASE <ArrowRight size={14} />
          </button>
        </div>

        {/* Prevent Default Concept */}
        <div className="p-6 bg-emerald-50 border-l-8 border-emerald-500 rounded-2xl shadow-sm">
          <h3 className="font-black text-emerald-900 mb-2 flex items-center gap-2 uppercase tracking-tighter text-sm md:text-base">
             Prevent Default
          </h3>
          <p className="text-emerald-800 text-xs md:text-sm leading-relaxed font-medium mb-4">
            Browsers have "default" behaviors, like refreshing the page when you submit a form. Use <strong>e.preventDefault()</strong> to stop that so your React code can handle the action instead.
          </p>
          <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-bold">
            <CheckCircle2 size={14} /> RECOMMENDED FOR FORMS
          </div>
        </div>
      </div>

      {/* 4. PERFORMANCE WARNING - Responsive UI */}
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-amber-900 text-amber-100 rounded-[2rem] md:rounded-[2.5rem] shadow-xl items-center sm:items-start text-center sm:text-left">
        <ShieldAlert className="shrink-0 text-amber-400" size={32} />
        <div>
          <h4 className="font-black text-lg md:text-xl uppercase tracking-tighter">Cleaning Up</h4>
          <p className="text-xs md:text-sm opacity-80 leading-relaxed mt-2 font-medium">
            If you add a scroll listener to the whole window, don't forget to <strong>remove it</strong> when you leave the page. This prevents "Memory Leaks" which make your app slow and buggy.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Events;