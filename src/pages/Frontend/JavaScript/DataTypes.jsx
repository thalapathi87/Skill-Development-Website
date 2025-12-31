import React from "react";
import { Database, Binary, Shapes, Layers, Zap, Info, ArrowRight } from "lucide-react";

function DataTypes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- HEADER --- */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Database className="w-4 h-4" />
          <span>Lesson 03: Basics of Data</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Understanding <span className="text-amber-500">Data Types</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          In JavaScript, data is stored in two ways. Knowing the difference helps you write better code and avoid simple mistakes.
        </p>
      </header>

      {/* --- PRIMITIVE VS REFERENCE CARDS --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Simple (Primitive) Types */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
              <Binary className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Simple Types</h3>
          </div>
          <p className="text-slate-600 text-sm mb-6">
            These store a <b>single value</b>. They are fast and stored in "Stack" memory.
          </p>
          <div className="flex flex-wrap gap-2">
            {["String", "Number", "Boolean", "Undefined", "Null"].map((type) => (
              <span key={type} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-semibold text-slate-600">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Complex (Reference) Types */}
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
              <Shapes className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Complex Types</h3>
          </div>
          <p className="text-slate-600 text-sm mb-6">
            These store <b>collections of data</b>. They use a "Reference" (address) to find the data.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Object", "Array", "Function"].map((type) => (
              <span key={type} className="px-3 py-1 bg-sky-50 rounded-full text-[11px] font-semibold text-sky-600 border border-sky-100">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW MEMORY WORKS (Visual Comparison) --- */}
      <section className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl mb-12">
        <div className="px-6 py-4 bg-slate-800 border-b border-white/5">
          <span className="text-xs font-mono text-slate-400">Example Comparison</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Example 1 */}
          <div className="p-8">
            <h4 className="text-amber-400 font-bold mb-3 text-sm">Copying a Simple Value</h4>
            <p className="text-slate-400 text-xs mb-5">Each variable gets its own separate copy.</p>
            <div className="bg-black/30 p-4 rounded-xl font-mono text-xs text-slate-300 leading-6">
              <div>let x = 10;</div>
              <div>let y = x; <span className="text-slate-500">// y is now a separate 10</span></div>
              <div>y = 20;</div>
              <div className="mt-2 text-emerald-400 font-bold">console.log(x); // still 10 ✅</div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="p-8">
            <h4 className="text-sky-400 font-bold mb-3 text-sm">Copying a Complex Type</h4>
            <p className="text-slate-400 text-xs mb-5">Both variables point to the same data.</p>
            <div className="bg-black/30 p-4 rounded-xl font-mono text-xs text-slate-300 leading-6">
              <div>let list1 = [1, 2];</div>
              <div>let list2 = list1; <span className="text-slate-500">// they share the same list</span></div>
              <div>list2.push(3);</div>
              <div className="mt-2 text-rose-400 font-bold">console.log(list1); // [1, 2, 3] ❌</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK TYPE CHECK --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {[
          { label: 'typeof "Hello"', res: '"string"' },
          { label: 'typeof 100', res: '"number"' },
          { label: 'typeof true', res: '"boolean"' },
          { label: 'typeof {}', res: '"object"' }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <code className="text-[10px] text-slate-400 block mb-1">{item.label}</code>
            <span className="font-bold text-slate-800 text-sm">{item.res}</span>
          </div>
        ))}
      </div>

      {/* --- TIP BOX --- */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="bg-white/20 p-3 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1 flex items-center gap-2">
              Developer Tip
            </h4>
            <p className="text-amber-50 text-sm leading-relaxed opacity-90">
              When copying Objects or Arrays, use the <b>Spread Operator (...)</b> like <code className="bg-black/10 px-1 rounded">[...oldArray]</code>. This creates a real copy so the original doesn't get changed by mistake!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTypes;