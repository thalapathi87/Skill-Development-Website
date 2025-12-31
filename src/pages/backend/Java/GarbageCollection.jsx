import React from "react";
import { Trash2, Recycle, Zap, Database, AlertCircle, Info, Activity, CheckCircle2 } from "lucide-react";

export default function GarbageCollection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-bold uppercase tracking-wider">
           <Recycle className="w-4 h-4" /> Automatic Memory Cleaning
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Garbage <span className="text-orange-600">Collection</span>
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl font-medium">
          Garbage Collection (GC) is an automatic process that finds objects no longer in use and deletes them. This frees up space and prevents your app from crashing due to <b>Memory Leaks</b>.
        </p>
      </section>

      {/* 2. HOW IT WORKS: THE HEAP STRUCTURE */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Database className="text-orange-600 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">How Memory is Organized</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[2rem] shadow-sm transition-hover hover:shadow-md">
            <h4 className="font-bold text-emerald-900 mb-3 text-lg">Young Generation</h4>
            <p className="text-sm text-emerald-700 leading-relaxed">
              Where <b>new objects</b> are born. Most objects die here quickly. A "Minor GC" cleans this area.
            </p>
          </div>
          <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2rem] shadow-sm transition-hover hover:shadow-md">
            <h4 className="font-bold text-blue-900 mb-3 text-lg">Old Generation</h4>
            <p className="text-sm text-blue-700 leading-relaxed">
              Where <b>long-lived</b> objects go. Objects that survive the Young Gen are moved here. "Major GC" cleans this.
            </p>
          </div>
          <div className="p-8 bg-purple-50 border border-purple-100 rounded-[2rem] shadow-sm transition-hover hover:shadow-md">
            <h4 className="font-bold text-purple-900 mb-3 text-lg">Metaspace</h4>
            <p className="text-sm text-purple-700 leading-relaxed">
              Stores <b>Class data</b> and static variables. It is separate from the main object storage.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WAYS TO MAKE AN OBJECT ELIGIBLE FOR GC */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Activity className="text-orange-600 w-6 h-6" /> Marking Items for Deletion
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl">
          An object is ready for Garbage Collection when it can no longer be reached by the program. You can do this in two ways:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900 rounded-[2.5rem] shadow-xl">
                <p className="text-slate-500 mb-4 font-mono text-xs italic">// 1. Set the variable to nothing</p>
                <code className="text-blue-300 font-mono text-sm leading-relaxed block">
                  Student s = <span className="text-pink-400">new</span> Student();{"\n"}
                  s = <span className="text-orange-400">null</span>;
                </code>
            </div>
            <div className="p-8 bg-slate-900 rounded-[2.5rem] shadow-xl">
                <p className="text-slate-500 mb-4 font-mono text-xs italic">// 2. Point it to something else</p>
                <code className="text-blue-300 font-mono text-sm leading-relaxed block">
                  Student s1 = <span className="text-pink-400">new</span> Student();{"\n"}
                  Student s2 = <span className="text-pink-400">new</span> Student();{"\n"}
                  s1 = s2; <span className="text-slate-600">// s1 is now ready for GC</span>
                </code>
            </div>
        </div>
      </section>

      {/* 4. THE System.gc() MYTH */}
      <div className="p-8 md:p-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-10 -right-10 opacity-10">
            <Trash2 className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0 p-5 bg-white/20 rounded-3xl backdrop-blur-md">
                <Zap className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-3">
                <h5 className="font-bold text-orange-200 uppercase tracking-widest text-xs">Expert Insight</h5>
                <h4 className="text-2xl md:text-3xl font-black">Can you force GC?</h4>
                <p className="text-sm md:text-base text-orange-50 leading-relaxed font-medium">
                  Using <code>System.gc()</code> is just a <b>Suggestion</b> to the computer. You are asking nicely, but the JVM decides when it actually wants to run the cleaning process. You cannot force it!
                </p>
            </div>
          </div>
      </div>

      {/* 5. FINALIZE METHOD */}
      <section className="p-8 md:p-10 bg-white border border-slate-200 rounded-[2.5rem] flex flex-col md:flex-row gap-6 items-start shadow-sm">
         <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 shrink-0">
            <AlertCircle className="w-8 h-8" />
         </div>
         <div className="space-y-2">
            <h5 className="font-bold text-slate-900 text-lg">The finalize() Method</h5>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Just before an object is deleted, the JVM calls <code>finalize()</code> to perform last-minute cleanup. 
                <span className="block mt-2 text-rose-500 font-bold italic">Note: This is now "Deprecated" (outdated). Modern Java uses Try-with-resources instead.</span>
            </p>
         </div>
      </section>

    </div>
  );
}