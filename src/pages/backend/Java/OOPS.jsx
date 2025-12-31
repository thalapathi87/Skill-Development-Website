import React from "react";
import { Box, Share2, Layers, ShieldCheck, Zap, Coffee, CheckCircle2 } from "lucide-react";

const OOPS_DATA = [
  {
    title: "Encapsulation",
    subtitle: "Data Security",
    icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    desc: "Putting your data and code into one single unit (a class). It acts like a protective shield that stops others from changing your data directly.",
    code: "// Private variables + Public getters\nprivate String pin;\npublic String getPin() { return pin; }"
  },
  {
    title: "Inheritance",
    subtitle: "Code Reuse",
    icon: <Share2 className="w-6 h-6 text-blue-600" />,
    desc: "Allowing one class to take features from another class. It's like a child getting traits from a parent, so you don't have to write the same code twice.",
    code: "class Animal { }\nclass Dog extends Animal { } // Dog gets Animal features"
  },
  {
    title: "Polymorphism",
    subtitle: "Many Versions",
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    desc: "The ability for one action to work in different ways. For example, a 'speak' action might produce a 'bark' for a dog but a 'meow' for a cat.",
    code: "void sound() { ... } // Parent version\n@Override void sound() { ... } // Child version"
  },
  {
    title: "Abstraction",
    subtitle: "Focus on Essentials",
    icon: <Box className="w-6 h-6 text-green-600" />,
    desc: "Showing only the important parts to the user while hiding the complicated background work. It's like using a TV remote without knowing how the internal circuits work.",
    code: "abstract class Remote { \n  abstract void pressPower(); \n}"
  }
];

export default function OOPS() {
  return (
    /* Main container: px-4 on mobile prevents content from touching edges */
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 md:px-0">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest">
           <Zap className="w-3 h-3" /> Object-Oriented Programming
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          The 4 Pillars of <span className="text-orange-600 text-shadow-orange">OOPs</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          OOPs is a style of coding based on <strong>Classes</strong> (the design) and <strong>Objects</strong> (the real item). It makes your code organized, safe, and easy to grow.
        </p>
      </section>

      {/* 2. CORE CONCEPTS GRID - Stacks on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {OOPS_DATA.map((item) => (
          <div key={item.title} className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:scale-110 transition-all border border-transparent group-hover:border-slate-100">
                    {item.icon}
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.subtitle}</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">{item.title}</h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6 md:mb-8 font-medium">
                {item.desc}
            </p>

            <div className="bg-[#0f172a] rounded-2xl p-4 md:p-5 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 p-2 opacity-10 font-black text-white text-[10px] hidden sm:block">JAVA</div>
                <pre className="font-mono text-[10px] md:text-xs text-blue-300 overflow-x-auto whitespace-pre no-scrollbar">
                    <code>{item.code}</code>
                </pre>
            </div>
          </div>
        ))}
      </div>

      {/* 3. DEEP DIVE: CLASS VS OBJECT - Responsive stacks on mobile */}
      <section className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">
            <div className="space-y-4">
                <h4 className="text-orange-400 font-black uppercase tracking-widest text-[10px]">The Blueprint</h4>
                <h2 className="text-2xl md:text-3xl font-bold">What is a Class?</h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                    Think of a class as a template or a drawing. For example, a "Car" class defines that every car must have a brand and a color, but it isn't a real car yet.
                </p>
            </div>
            <div className="space-y-4">
                <h4 className="text-blue-400 font-black uppercase tracking-widest text-[10px]">The Reality</h4>
                <h2 className="text-2xl md:text-3xl font-bold">What is an Object?</h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                    An object is the real item built from the class. Your "Red Tesla" is an object. This is when the computer actually uses memory to store the car's info.
                </p>
            </div>
        </div>
      </section>

      {/* 4. MASTER INSIGHT - Responsive layout for tip box */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 p-6 md:p-8 bg-orange-50 border border-orange-100 rounded-[2rem] md:rounded-[2.5rem]">
          <div className="p-4 bg-white rounded-2xl shadow-sm shrink-0">
            <Coffee className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-black text-slate-900 mb-1 uppercase tracking-tighter text-xs md:text-sm">Interview Tip</h5>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                Focus on how <strong>Inheritance</strong> stops you from repeating code and how <strong>Abstraction</strong> makes big projects easier by hiding the complicated parts.
            </p>
          </div>
      </div>

    </div>
  );
}