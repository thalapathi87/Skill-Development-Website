import React from "react";
import { List, LayoutGrid, Zap, Code2, Database, AlertCircle, CheckCircle2 } from "lucide-react";

const ARRAY_METHODS = [
  { method: "length", desc: "Counts how many items are in the array.", example: "arr.length // 4" },
  { method: "sort()", desc: "Arranges items from smallest to largest.", example: "Arrays.sort(arr);" },
  { method: "binarySearch()", desc: "Finds the position of an item quickly.", example: "Arrays.binarySearch(arr, 10);" },
  { method: "copyOf()", desc: "Creates a new copy with a specific size.", example: "Arrays.copyOf(arr, 5);" },
  { method: "fill()", desc: "Sets every item to the same value.", example: "Arrays.fill(arr, 0);" },
  { method: "toString()", desc: "Changes the array into readable text.", example: "Arrays.toString(arr);" },
];

export default function Arrays() {
  return (
    /* Added responsive padding (px-4 on mobile) and max-width for desktop */
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 md:px-0">
      
      {/* 1. HERO SECTION - Scaled text for mobile */}
      <section className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest">
           <List className="w-3 h-3" /> Indexed Collections
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Arrays in <span className="text-orange-600">Java</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          An Array is like a row of boxes. You use it to store many items of the <strong>same type</strong> together. Every box has a number (index) starting from 0.
        </p>
      </section>

      {/* 2. KEY CHARACTERISTICS - Grid stacks on mobile, 3 cols on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          { title: "Fixed Size", desc: "Once you create it, you cannot change the number of boxes.", icon: <Database className="text-orange-600" /> },
          { title: "Same Type", desc: "You can only store one kind of data (like only integers).", icon: <Zap className="text-blue-600" /> },
          { title: "Numbered", desc: "You find items using their box number, starting from 0.", icon: <LayoutGrid className="text-green-600" /> }
        ].map(item => (
          <div key={item.title} className="p-6 md:p-8 bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                {item.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. SYNTAX SECTION - Code box scrolls sideways on small phones */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Code Examples
        </div>
        <div className="bg-[#0f172a] rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 hidden md:block">
            <LayoutGrid className="text-white w-32 h-32" />
          </div>
          {/* overflow-x-auto prevents the code from breaking the mobile screen width */}
          <pre className="font-mono text-[10px] md:text-sm leading-relaxed text-blue-300 overflow-x-auto whitespace-pre">
            <code>
              <span className="text-slate-500">// 1. Creating an array</span>{"\n"}
              <span className="text-orange-400">int</span>[] numbers = {"{"}<span className="text-amber-400">10, 20, 30, 40</span>{"}"};{"\n\n"}
              <span className="text-slate-500">// 2. Getting an item (Box 0)</span>{"\n"}
              System.out.<span className="text-green-400">println</span>(numbers[<span className="text-amber-400">0</span>]); <span className="text-slate-500">// Output: 10</span>{"\n\n"}
              <span className="text-slate-500">// 3. Changing an item</span>{"\n"}
              numbers[<span className="text-amber-400">1</span>] = <span className="text-amber-400">50</span>; <span className="text-slate-500">// Box 1 is now 50</span>
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ARRAY METHODS TABLE - Added horizontal scroll wrapper */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-orange-600 w-6 h-6" />
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Useful Tools</h2>
        </div>
        
        {/* Wrapper to allow sideways swiping on mobile tables */}
        <div className="overflow-x-auto border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-slate-50/80">
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tool Name</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">What it does</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Code</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {ARRAY_METHODS.map((m) => (
                <tr key={m.method} className="hover:bg-orange-50/20 transition-colors">
                  <td className="px-6 py-4 font-bold text-orange-600 font-mono text-xs">{m.method}</td>
                  <td className="px-6 py-4 text-xs md:text-sm text-slate-600 font-medium">{m.desc}</td>
                  <td className="px-6 py-4">
                    <code className="text-[9px] md:text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-md whitespace-nowrap">{m.example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. DANGER ZONE - Responsive column to row logic */}
      <div className="p-6 md:p-8 bg-red-50 border border-red-100 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start text-center sm:text-left">
          <div className="p-3 md:p-4 bg-white rounded-2xl shadow-sm">
            <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
          </div>
          <div>
            <h5 className="font-black text-red-900 mb-1 uppercase tracking-tighter text-xs md:text-sm">Common Mistake</h5>
            <p className="text-xs md:text-sm text-red-700 leading-relaxed font-medium">
                Trying to access a box that doesn't exist (like Box 4 in a 4-box row) will crash your program. Always remember: indexes go from <strong>0 to length minus 1</strong>.
            </p>
          </div>
      </div>

    </div>
  );
}