import React from "react";
import { Zap, Activity, Repeat, Cpu, Code2, AlertCircle, PlayCircle, CheckCircle2 } from "lucide-react";

const THREAD_METHODS = [
  { method: "start()", desc: "Starts a new thread and calls the run() method.", usage: "t1.start();" },
  { method: "sleep(ms)", desc: "Pauses the thread for a specific amount of time.", usage: "Thread.sleep(1000);" },
  { method: "join()", desc: "Waits for a thread to finish before starting others.", usage: "t1.join();" },
  { method: "setPriority()", desc: "Sets how important a thread is (1 to 10).", usage: "t1.setPriority(10);" },
  { method: "isAlive()", desc: "Checks if the thread is still running.", usage: "t1.isAlive();" },
];

export default function Multithreading() {
  return (
    /* Main container: px-4 on mobile prevents content from touching edges */
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 md:px-0">
      
      {/* 1. HERO SECTION - Scaled text for mobile */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest">
           <Zap className="w-3 h-3" /> Concurrent Programming
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Multi<span className="text-orange-600 text-shadow-orange">threading</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Multithreading means doing <strong>many tasks at the same time</strong>. It helps your computer work faster by using the full power of the CPU. In Java, each task is called a "Thread."
        </p>
      </section>

      {/* 2. THREAD LIFE CYCLE - Horizontal scroll for mobile steps */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 justify-center md:justify-start">
            <Activity className="text-orange-500 w-5 h-5" />
            <h2 className="text-xl md:text-2xl font-black text-slate-900">How a Thread Travels</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {['New', 'Runnable', 'Running', 'Blocked', 'Dead'].map((state, i) => (
            <div key={state} className="p-4 bg-white border border-slate-100 rounded-2xl text-center shadow-sm hover:border-orange-200 transition-colors">
              <span className="text-[10px] font-black text-slate-400 block mb-1 uppercase">Step {i+1}</span>
              <span className="text-xs md:text-sm font-bold text-slate-700">{state}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CREATING THREADS - Stacks on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-6 md:p-8 bg-blue-50/50 border border-blue-100 rounded-[2rem] group hover:bg-white transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-600 rounded-xl text-white">
                <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">1. Extend Thread Class</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium">This is a simple way to create a thread, but it doesn't allow you to inherit from other classes.</p>
          <div className="bg-slate-900 p-4 rounded-xl overflow-x-auto">
            <code className="text-blue-300 text-[10px] md:text-[11px] font-mono leading-tight whitespace-pre">
              {`class MyThread extends Thread {
  public void run() { 
    // code here
  }
}`}
            </code>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-green-50/50 border border-green-100 rounded-[2rem] group hover:bg-white transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-600 rounded-xl text-white">
                <Repeat className="w-5 h-5" />
            </div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">2. Runnable Interface</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium">The best way! It is flexible and follows professional coding standards.</p>
          <div className="bg-slate-900 p-4 rounded-xl overflow-x-auto">
            <code className="text-green-300 text-[10px] md:text-[11px] font-mono leading-tight whitespace-pre">
              {`class MyTask implements Runnable {
  public void run() {
    // code here
  }
}`}
            </code>
          </div>
        </div>
      </div>

      {/* 4. CODE EXAMPLE - Horizontal scroll prevents layout break on phones */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] uppercase tracking-widest">
            <PlayCircle className="w-4 h-4" /> Real-World Example
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden sm:block">
            <Cpu className="text-white w-40 h-40" />
          </div>
          <pre className="font-mono text-[10px] md:text-sm leading-relaxed text-blue-300 overflow-x-auto whitespace-pre no-scrollbar">
            <code>
              {`class Task extends Thread {
  public void run() {
    for(int i=1; i<=3; i++) {
      System.out.println(getName() + " is working...");
      try { Thread.sleep(500); } catch(Exception e) { }
    }
  }
}

public class Main {
  public static void main(String[] args) {
    Task t1 = new Task(); 
    Task t2 = new Task();
    t1.start(); // Starts Task 1
    t2.start(); // Starts Task 2
  }
}`}
            </code>
          </pre>
        </div>
      </section>

      {/* 5. METHODS TABLE - Horizontal scroll for mobile table */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="text-orange-600 w-6 h-6" /> Common Thread Tools
        </h2>
        <div className="overflow-x-auto border border-slate-100 rounded-[2rem] bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-slate-50/80">
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tool</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Code</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {THREAD_METHODS.map((m) => (
                <tr key={m.method} className="hover:bg-orange-50/20 transition-colors">
                  <td className="px-6 py-4 font-bold text-orange-600 font-mono text-xs">{m.method}</td>
                  <td className="px-6 py-4 text-xs md:text-sm text-slate-600 font-medium">{m.desc}</td>
                  <td className="px-6 py-4">
                    <code className="text-[9px] md:text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-md whitespace-nowrap">{m.usage}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. INTERVIEW TIP - Stacks vertically on mobile */}
      <div className="p-6 md:p-8 bg-slate-900 rounded-[2rem] md:rounded-[3rem] text-white flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
          <div className="p-4 bg-orange-500 rounded-2xl text-white shrink-0">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h5 className="font-black text-[10px] uppercase tracking-widest text-orange-400">Important Interview Concept</h5>
            <h4 className="text-xl font-bold">What is Synchronization?</h4>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                When many threads try to use the same data, they might get confused. We use the <strong>`synchronized`</strong> word to make sure only <strong>one thread</strong> can use the data at a time. This keeps your information safe and correct.
            </p>
          </div>
      </div>

    </div>
  );
}