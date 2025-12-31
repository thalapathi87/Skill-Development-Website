import React from "react";
import { Quote, Layers, Zap, Code2, Database, Info } from "lucide-react";

const STRING_METHODS = [
  { method: "length()", desc: "Returns the total number of characters in the string.", example: '"Java".length() // 4' },
  { method: "charAt(index)", desc: "Returns the character at the specified index.", example: '"Java".charAt(0) // J' },
  { method: "substring(start, end)", desc: "Cuts out a specific part of the string.", example: '"Hello".substring(0,2) // He' },
  { method: "toUpperCase()", desc: "Converts the entire string to capital letters.", example: '"java".toUpperCase() // JAVA' },
  { method: "equals(str)", desc: "Compares the actual content of two strings.", example: '"A".equals("A") // true' },
  { method: "trim()", desc: "Removes extra spaces from both ends of the string.", example: '"  Hi  ".trim() // "Hi"' },
];

export default function StringTopic() {
  return (
    <div className="space-y-12 md:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 md:px-0">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest">
           <Quote className="w-3 h-3" /> Java String Pool
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          String <span className="text-orange-600">Handling</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0 font-medium">
          In Java, a String is an <strong>Object</strong>, not a primitive type. The most important thing to remember is that Strings are <strong>Immutable</strong> (cannot be changed).
        </p>
      </section>

      {/* 2. CORE CONCEPTS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] group hover:shadow-xl transition-all duration-500">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Immutability</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Once a String is created, it cannot be modified. If you try to change it, Java creates a completely new String object instead of modifying the original one.
            </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] group hover:shadow-xl transition-all duration-500">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">String Constant Pool</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              To save memory, Java uses a special area called **SCP**. If two strings have the same value, they point to the same memory address in this pool.
            </p>
        </div>
      </div>

      {/* 3. MEMORY ALLOCATION VISUALS */}
      <section className="bg-[#0f172a] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10 hidden lg:block">
            <Layers className="w-40 h-40" />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-4">
                <h4 className="text-orange-400 font-bold text-xs md:text-sm tracking-widest uppercase">Method 1: Literal</h4>
                <code className="block bg-slate-800 p-4 rounded-xl text-blue-300 font-mono text-xs italic overflow-x-auto">
                    String s1 = "Java"; 
                </code>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                  This creates an object inside the **String Constant Pool (SCP)**. It is highly memory efficient.
                </p>
            </div>
            <div className="space-y-4">
                <h4 className="text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase">Method 2: New Keyword</h4>
                <code className="block bg-slate-800 p-4 rounded-xl text-blue-300 font-mono text-xs italic overflow-x-auto">
                    String s2 = new String("Java");
                </code>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                  This forces Java to create a new object in the **Heap memory**, bypassing the pool benefits.
                </p>
            </div>
        </div>
      </section>

      {/* 4. STRING METHODS - RESPONSIVE TABLE */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Code2 className="text-orange-600 w-6 h-6" />
          <h2 className="text-2xl font-black text-slate-900">Common String Methods</h2>
        </div>

        {/* Scrollable table container */}
        <div className="overflow-x-auto border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50/80">
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Method</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {STRING_METHODS.map((m) => (
                <tr key={m.method} className="hover:bg-orange-50/20 transition-colors">
                  <td className="px-6 py-4">
                    <code className="text-orange-600 font-bold text-xs bg-orange-50 px-2 py-1 rounded-md whitespace-nowrap">{m.method}</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{m.desc}</td>
                  <td className="px-6 py-4">
                    <code className="text-[10px] font-mono text-slate-400 whitespace-nowrap">{m.example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. INTERVIEW TIP BOX */}
      <div className="p-6 md:p-10 bg-orange-600 rounded-[2rem] md:rounded-[2.5rem] text-white flex flex-col sm:flex-row gap-6 items-start shadow-xl shadow-orange-100">
         <div className="flex-shrink-0 p-4 bg-white/20 rounded-2xl">
            <Info className="w-6 h-6 md:w-8 md:h-8 text-white" />
         </div>
         <div className="space-y-3">
            <h5 className="font-black text-[10px] uppercase tracking-widest opacity-80">Senior Interview Question</h5>
            <h4 className="text-xl font-bold">Why is String Immutable?</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm text-orange-50 font-medium">
               <p><strong>1. Security:</strong> Parameters like DB URLs or passwords cannot be changed maliciously.</p>
               <p><strong>2. Caching:</strong> Sharing literals in SCP saves massive amounts of memory.</p>
               <p><strong>3. Thread Safety:</strong> Multiple threads can share the same string without synchronization risks.</p>
            </div>
         </div>
      </div>

    </div>
  );
}