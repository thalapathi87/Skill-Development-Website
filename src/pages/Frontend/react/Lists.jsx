import React, { useState, useMemo } from 'react';
import { 
  ListChecks, AlertCircle, Trash2, Filter, 
  Database, Zap, Layers, Search, Code
} from 'lucide-react';

// --- MASTER PATTERN: Memoized List Item ---
// Using React.memo prevents unnecessary re-renders when other items in the list change.
// This is a crucial optimization for long lists.
const StackItem = React.memo(({ tech, onDelete }) => {
  console.log(`Master Log: Rendering ${tech.name}`);
  return (
    <div className="group flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-violet-500 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center font-black text-sm group-hover:bg-violet-600 group-hover:text-white transition-colors">
            {tech.id}
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="font-bold text-slate-800 tracking-tight">{tech.name}</h3>
          <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Mastery Level</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter
          ${tech.level === 'Advanced' ? 'bg-emerald-100 text-emerald-700' : 
            tech.level === 'Intermediate' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600'}`}>
          {tech.level}
        </span>
        <button 
          onClick={() => onDelete(tech.id)}
          className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
});

const Lists = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'React Architecture', level: 'Advanced' },
    { id: 2, name: 'Tailwind Mastery', level: 'Intermediate' },
    { id: 3, name: 'TypeScript Core', level: 'Advanced' },
    { id: 4, name: 'Framer Motion', level: 'Beginner' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  // MASTER PATTERN: Filtering logic memoization
  // We use useMemo to ensure filtering only happens when the list or search term actually changes.
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* 1. MASTER HEADER: The Reconciliation Engine */}
      <section className="relative p-10 bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Database size={150} className="text-violet-400 rotate-12" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold mb-4 uppercase tracking-widest">
            <Zap size={14} /> Reconciliation Engine
          </div>
          <h1 className="text-4xl font-black text-white mb-4 tracking-tighter">
            Efficient <span className="text-violet-400">List Handling</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Performance is critical when rendering large arrays. By understanding React's "Diffing Algorithm," 
            you can use unique keys and memoization patterns to keep your UI smooth.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & CONTROLS */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Search Stack Components..."
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-violet-500 outline-none shadow-sm transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <div className="p-3 bg-violet-50 text-violet-600 rounded-xl border border-violet-100">
            <Filter size={20} />
          </div>
          <div className="p-3 bg-slate-50 text-slate-600 rounded-xl border border-slate-200">
            <Layers size={20} />
          </div>
        </div>
      </div>

      

      {/* 3. DYNAMIC MASTER LIST */}
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((tech) => (
            /* Always use a unique ID for the key, never the array index. */
            <StackItem key={tech.id} tech={tech} onDelete={handleDelete} />
          ))
        ) : (
          <div className="py-20 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <Search className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-500 font-bold">No components found in current index</p>
          </div>
        )}
      </div>

      {/* 4. THE MASTER KEY LOGIC DEEP-DIVE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-slate-900 rounded-3xl border-b-8 border-violet-500">
          <div className="flex items-center gap-3 mb-4 text-violet-400 font-bold uppercase tracking-widest text-xs">
            <Code size={20} /> Diffing Strategy
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            React uses unique keys to identify which items in a list have changed, been added, or removed. 
            <b>Using the array index as a key</b> is a bug hazard because React might incorrectly map state when the list is sorted or filtered.
          </p>
          <div className="p-4 bg-slate-800 rounded-xl">
             <code className="text-xs text-violet-300 font-mono italic">// Anti-Pattern: key={'{index}'}</code>
             <code className="text-xs text-emerald-400 font-mono block mt-1">// Best-Practice: key={'{item.id}'}</code>
          </div>
        </div>

        <div className="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-3xl">
          <div className="flex items-center gap-3 mb-4 text-indigo-700 font-black uppercase tracking-tighter">
            <Database size={20} /> Windowing Concept
          </div>
          <p className="text-indigo-900/70 text-sm leading-relaxed">
            When handling massive datasets (10,000+ items), use the <b>Windowing (Virtualization)</b> pattern. 
            By only rendering the items currently visible on the screen, your application stays lightning-fast.
          </p>
          <button className="mt-4 text-xs font-black text-indigo-600 underline">Read about React-Window</button>
        </div>
      </div>
    </div>
  );
};

export default Lists;