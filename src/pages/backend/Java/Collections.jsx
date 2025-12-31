import React from "react";
import { Layers, ListChecks, Hash, GitBranch, Zap, Code2, CheckCircle2, Info } from "lucide-react";

const COLLECTION_MAP = [
  { 
    interface: "List", 
    impl: "ArrayList, LinkedList", 
    feature: "Ordered collection that allows duplicate elements. Best for indexed access.", 
    icon: <ListChecks className="text-orange-600" /> 
  },
  { 
    interface: "Set", 
    impl: "HashSet, TreeSet", 
    feature: "Unordered collection that strictly forbids duplicates. Best for unique data.", 
    icon: <Zap className="text-blue-600" /> 
  },
  { 
    interface: "Map", 
    impl: "HashMap, TreeMap", 
    feature: "Stores data in Key-Value pairs. Keys must be unique, values can repeat.", 
    icon: <Hash className="text-green-600" /> 
  }
];

export default function Collections() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. MASTER HERO SECTION */}
      <section className="space-y-6 text-center md:text-left pt-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-orange-700 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
           <Layers className="w-3 h-3 md:w-4 md:h-4" /> Professional Java Series
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
          Collections <span className="text-orange-600">Framework</span>
        </h1>
        <p className="text-slate-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0 font-medium">
          The Java Collections Framework (JCF) is a unified architecture for representing and manipulating groups of objects. Unlike fixed-size arrays, collections grow and shrink <strong>dynamically</strong>.
        </p>
      </section>

      {/* 2. ARCHITECTURE OVERVIEW */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3">
                    <GitBranch className="text-orange-500 w-8 h-8" /> Core Interfaces
                </h2>
                <p className="text-slate-400 text-sm md:text-base">Three pillars of the Java Utility library.</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTION_MAP.map((item) => (
            <div key={item.interface} className="flex flex-col p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{item.interface}</h3>
              <p className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-6 px-3 py-1 bg-orange-50 rounded-full w-fit">
                {item.impl}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-auto">
                {item.feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PERFORMANCE COMPARISON (ArrayList vs LinkedList) */}
      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <Code2 className="text-orange-400 w-10 h-10" /> List Implementation Details
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-8 bg-orange-500"></span>
                        <h4 className="text-orange-400 font-black uppercase tracking-widest text-sm">ArrayList</h4>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        Built on top of a <strong>Dynamic Array</strong>. It is extremely fast for accessing data by index but requires shifting elements during insertions or deletions.
                    </p>
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                        <code className="text-blue-300 text-xs md:text-sm font-mono block overflow-x-auto whitespace-nowrap">
                            List&lt;User&gt; users = new ArrayList&lt;&gt;();
                        </code>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-8 bg-blue-500"></span>
                        <h4 className="text-blue-400 font-black uppercase tracking-widest text-sm">LinkedList</h4>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        Built as a <strong>Doubly Linked List</strong>. It excels at frequent insertions and deletions because it only needs to update pointers, not shift data.
                    </p>
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                        <code className="text-blue-300 text-xs md:text-sm font-mono block overflow-x-auto whitespace-nowrap">
                            List&lt;User&gt; users = new LinkedList&lt;&gt;();
                        </code>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. MASTER METHODS TABLE */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-50 rounded-2xl">
            <CheckCircle2 className="text-green-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Essential Operations</h2>
        </div>
        
        <div className="overflow-x-auto rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/80">
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Method Signature</th>
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Functional Utility</th>
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Syntax Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { m: "add(E element)", u: "Appends the specified object to the end of the collection.", e: "list.add(\"Java\");" },
                { m: "remove(int index)", u: "Deletes the element at the specific index and shifts others.", e: "list.remove(0);" },
                { m: "size()", u: "Returns the total count of elements currently in the collection.", e: "int n = list.size();" },
                { m: "contains(Object o)", u: "Returns true if the collection contains the specified element.", e: "list.contains(\"Java\");" },
                { m: "isEmpty()", u: "Checks if the collection has zero elements.", e: "if(list.isEmpty()) { ... }" },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6 font-bold text-orange-600 font-mono text-sm whitespace-nowrap">{item.m}</td>
                  <td className="px-8 py-6 text-sm text-slate-500 font-medium leading-relaxed">{item.u}</td>
                  <td className="px-8 py-6">
                    <code className="text-[11px] font-mono text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg whitespace-nowrap">
                        {item.e}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. INTERVIEW ARCHITECTURE INSIGHT */}
      <div className="p-8 md:p-12 bg-white border-2 border-slate-100 rounded-[3rem] relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 text-slate-50 group-hover:text-orange-50 transition-colors">
            <Info className="w-32 h-32" />
         </div>
         <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-20 h-20 bg-orange-600 rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-xl shadow-orange-200">
                <Hash className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
                <h5 className="font-black uppercase tracking-[0.3em] text-xs text-orange-600">The Hashing Mechanism</h5>
                <h4 className="text-2xl font-bold text-slate-900">How HashMap Works Internally</h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-4xl">
                    In interviews, remember that **HashMap** uses the `hashCode()` and `equals()` methods to store data in "Buckets." If two keys result in the same hash, a <strong>Collision</strong> occurs. Java handles this by converting the bucket from a Linked List to a <strong>Balanced Tree</strong> once it reaches a certain threshold (8 elements) to maintain high performance.
                </p>
            </div>
         </div>
      </div>

    </div>
  );
}