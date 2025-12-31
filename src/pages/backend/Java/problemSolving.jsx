import React from "react";
import { Lightbulb, Code2, Target, Brain, CheckCircle2, ChevronRight, Zap } from "lucide-react";

const PROBLEM_CATEGORIES = [
  { 
    title: "Basic Logic", 
    subtitle: "Math & Numbers",
    problems: ["Factorial of a number", "Fibonacci Series", "Prime Number Check", "Palindrome Check", "Armstrong Number"],
    icon: <Brain className="text-orange-600" />
  },
  { 
    title: "Array Challenges", 
    subtitle: "List Operations",
    problems: ["Find Largest/Smallest", "Reverse an Array", "Remove Duplicates", "Second Largest", "Merge Sorted Arrays"],
    icon: <Target className="text-blue-600" />
  },
  { 
    title: "String Algorithms", 
    subtitle: "Text Processing",
    problems: ["String Reversal", "Anagram Check", "Count Vowels", "Non-repeated Char", "Check Substring"],
    icon: <Code2 className="text-green-600" />
  }
];

export default function ProblemSolving() {
  return (
    /* Main container with responsive padding and max-width */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20">
      
      {/* 1. HERO SECTION - Scaled text for mobile screens */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest">
           <Zap className="w-3 h-3" /> Logic Building
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Problem <span className="text-orange-600 text-shadow-orange">Solving</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Knowing Java syntax is not enough; you need <strong>Logic Building</strong> to become a senior developer. We have split the top 100+ interview problems into easy categories for you to practice.
        </p>
      </section>

      {/* 2. LOGIC VISUALIZATION STEP-BY-STEP */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Understand', 'Plan', 'Write', 'Check'].map((step, i) => (
          <div key={step} className="p-4 bg-white border border-slate-100 rounded-2xl text-center shadow-sm">
             <span className="block text-[10px] font-black text-orange-400 uppercase mb-1">Step 0{i+1}</span>
             <h5 className="font-bold text-slate-800 text-sm md:text-base">{step}</h5>
          </div>
        ))}
      </section>

      {/* 3. PROBLEM CATEGORIES GRID - Stacks on mobile, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {PROBLEM_CATEGORIES.map((cat) => (
          <div key={cat.title} className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  {cat.icon}
              </div>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{cat.subtitle}</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">{cat.title}</h3>
            <ul className="space-y-3">
                {cat.problems.map(prob => (
                    <li key={prob} className="flex items-center gap-2 text-xs text-slate-500 font-bold group hover:text-orange-600 cursor-default">
                        <ChevronRight className="w-3 h-3 text-orange-400 group-hover:translate-x-1 transition-transform shrink-0" /> {prob}
                    </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 4. MASTER CODE EXAMPLE - Sideways scroll for code on mobile */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] uppercase tracking-widest">
            <Lightbulb className="w-4 h-4" /> Optimized Solution
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden sm:block">
            <Target className="text-white w-40 h-40" />
          </div>
          <h4 className="text-orange-400 font-bold mb-4 text-sm md:text-base italic">Problem: Is it a Prime Number?</h4>
          <pre className="font-mono text-[11px] md:text-sm leading-relaxed text-blue-300 overflow-x-auto whitespace-pre no-scrollbar">
            <code>
              {`public boolean isPrime(int n) {
  // Check up to Square Root (Fastest way)
  if (n <= 1) return false;
  
  for (int i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false; // Found a factor
  }
  
  return true; // No factors found, it is Prime
}`}
            </code>
          </pre>
        </div>
      </section>

      {/* 5. THE ROADMAP - Responsive column to row logic */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white flex flex-col lg:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
         <div className="p-5 bg-orange-600 rounded-3xl shadow-lg shrink-0">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
         </div>
         <div className="space-y-4 text-center lg:text-left">
            <h5 className="font-black text-[10px] uppercase tracking-widest text-orange-400">Master Plan</h5>
            <h4 className="text-2xl md:text-3xl font-bold tracking-tight">How to solve 100+ Problems?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] md:text-sm text-slate-400 font-medium">
                <p className="flex items-center justify-center lg:justify-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Basic Math logic (1-20)</p>
                <p className="flex items-center justify-center lg:justify-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Array Challenges (21-50)</p>
                <p className="flex items-center justify-center lg:justify-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> String Algorithms (51-80)</p>
                <p className="flex items-center justify-center lg:justify-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Advanced Structures (81-100+)</p>
            </div>
         </div>
      </div>

    </div>
  );
}