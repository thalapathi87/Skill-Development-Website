import React from "react";
import { Box, Layers, Database, Code2, CheckCircle2, Zap } from "lucide-react";

const PRIMITIVE_DATA = [
  { type: "byte", size: "1 byte", range: "-128 to 127", example: "byte a = 10;" },
  { type: "short", size: "2 bytes", range: "-32k to 32k", example: "short s = 100;" },
  { type: "int", size: "4 bytes", range: "-2B to 2B", example: "int i = 5000;" },
  { type: "long", size: "8 bytes", range: "Very Large", example: "long l = 15L;" },
  { type: "float", size: "4 bytes", range: "6-7 decimals", example: "float f = 5.99f;" },
  { type: "double", size: "8 bytes", range: "15 decimals", example: "double d = 19.99;" },
  { type: "boolean", size: "1 bit", range: "true/false", example: "boolean b = true;" },
  { type: "char", size: "2 bytes", range: "Single char", example: "char c = 'A';" },
];

export default function JavaBasics() {
  return (
    <div className="space-y-12 md:space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-10 px-4 md:px-0">
      
      {/* 1. HEADER SECTION */}
      <section className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 text-orange-600 font-bold text-xs md:text-sm tracking-widest uppercase">
           <Zap className="w-4 h-4" /> Data Management
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Java Data <span className="text-orange-600">Types</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Java is a <strong>statically-typed</strong> language. Every variable must be defined with a type, which helps the compiler manage memory efficiently.
        </p>
      </section>

      {/* 2. CORE ARCHITECTURE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:border-orange-200 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-50 rounded-2xl text-orange-600">
                <Box className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">Primitive Types</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">Simple values built into Java. They are not objects and represent raw data.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Lower-case names', 'Pre-defined', 'Fixed memory', 'Fast performance'].map((point) => (
              <li key={point} className="flex items-center gap-2 text-[10px] md:text-xs text-slate-700 font-bold bg-slate-50 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" /> {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">Non-Primitive</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">Reference types that refer to objects and can include powerful methods.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Capitalized names', 'User-defined', 'Dynamic size', 'Store references'].map((point) => (
              <li key={point} className="flex items-center gap-2 text-[10px] md:text-xs text-slate-700 font-bold bg-slate-50 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" /> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. DETAILED PRIMITIVE TABLE / MOBILE CARDS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <Database className="text-orange-500 w-5 h-5" />
                <h2 className="text-2xl font-black text-slate-900">Type Specification</h2>
            </div>
            <span className="self-start text-[10px] font-black text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">Memory Map</span>
        </div>

        {/* Desktop Table: Hidden on small mobile */}
        <div className="hidden md:block overflow-hidden border border-slate-100 rounded-[2rem] bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Data Type</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Size</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Range</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {PRIMITIVE_DATA.map((dt) => (
                <tr key={dt.type} className="hover:bg-orange-50/20 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-xs text-slate-900">{dt.type}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-600">{dt.size}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium italic">{dt.range}</td>
                  <td className="px-6 py-4"><code className="text-xs font-mono text-orange-600 font-bold">{dt.example}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List: Visible only on small screens */}
        <div className="md:hidden space-y-4">
          {PRIMITIVE_DATA.map((dt) => (
            <div key={dt.type} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono font-black text-orange-600">{dt.type}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{dt.size}</span>
              </div>
              <p className="text-xs text-slate-500 mb-3">{dt.range}</p>
              <div className="bg-slate-50 p-2 rounded-lg text-[10px] font-mono text-slate-700">{dt.example}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NON-PRIMITIVE CARDS */}
      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <Code2 className="text-blue-500 w-5 h-5" />
          <h2 className="text-2xl font-black text-slate-900">Reference Types</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: "String", desc: "For text handling. A pre-built Java class.", example: 'String name = "Dev";' },
            { title: "Array", desc: "Stores multiple values of the same type.", example: 'int[] data = {1, 2};' },
            { title: "Class", desc: "User-defined templates for objects.", example: "class Car { ... }" }
          ].map(item => (
            <div key={item.title} className="p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300">
              <h4 className="font-black text-slate-900 mb-2">{item.title}</h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">{item.desc}</p>
              <div className="bg-slate-900 rounded-xl p-3 font-mono text-[10px] text-blue-300 overflow-x-auto">
                {item.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STACK VS HEAP - MASTER INSIGHT */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden group">
        <div className="relative z-10 space-y-8">
            <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-orange-400">Stack vs Heap Memory</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-2">
                    <strong className="text-white block text-lg underline decoration-orange-500 decoration-2 underline-offset-8 mb-4">Stack (Primitives)</strong>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      Stored directly in the stack. Access is extremely fast because sizes are fixed and predictable.
                    </p>
                </div>
                <div className="space-y-2">
                    <strong className="text-white block text-lg underline decoration-blue-500 decoration-2 underline-offset-8 mb-4">Heap (Non-Primitives)</strong>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      The actual object lives in the Heap, while a "Pointer" (reference) stays in the Stack to find it.
                    </p>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}