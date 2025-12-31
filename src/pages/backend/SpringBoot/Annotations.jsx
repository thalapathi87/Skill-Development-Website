import React from "react";
import { Code2, Cpu, CheckCircle2, Info, Terminal } from "lucide-react";

const ANNOTATIONS = [
  {
    name: "@SpringBootApplication",
    usage: "The starting point.",
    desc: "This is the most important annotation. It tells Spring Boot to start the app, look for your code, and set up everything automatically so you don't have to.",
    code: "@SpringBootApplication\npublic class MyMainApp { ... }"
  },
  {
    name: "@Component",
    usage: "Creating a Java Object.",
    desc: "This tells Spring that a class is special. Spring will create an object (a 'Bean') of this class and keep it ready to use whenever you need it.",
    code: "@Component\npublic class PaymentProcessor { ... }"
  },
  {
    name: "@Autowired",
    usage: "Connecting Objects.",
    desc: "This is like a 'connector.' It tells Spring to find the right object and plug it into your class so you can use its features without creating it manually.",
    code: "@Autowired\nprivate UserService userService;"
  }
];

export default function Annotations() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 px-4 md:px-0">
      
      {/* HEADER */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Cpu className="w-3 h-3" /> Architecture Core
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Mastering <span className="text-green-600">Annotations</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Annotations are like 'Sticky Notes' for Java. They tell Spring Boot exactly what to do with your code so you don't have to write thousands of lines of settings.
        </p>
      </section>

      {/* DETAILED LIST */}
      <div className="space-y-6 md:space-y-8">
        {ANNOTATIONS.map((anno) => (
          <div key={anno.name} className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 font-mono tracking-tighter underline decoration-green-500 decoration-4 underline-offset-8">
                    {anno.name}
                </h3>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{anno.usage}</span>
            </div>
            
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-medium">
                {anno.desc}
            </p>

            <div className="bg-[#0f172a] rounded-2xl p-4 md:p-5 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-white text-[10px] font-black hidden sm:block">JAVA SOURCE</div>
                <pre className="font-mono text-xs md:text-sm text-green-400 overflow-x-auto whitespace-nowrap lg:whitespace-pre-wrap">
                    <code>{anno.code}</code>
                </pre>
            </div>
          </div>
        ))}
      </div>

      {/* MASTER ARCHITECTURE INSIGHT */}
      <section className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-all group-hover:bg-green-500/20" />
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="space-y-4">
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-green-400">The Bean Factory</h5>
                <h4 className="text-2xl md:text-3xl font-bold">How does Spring find your code?</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  When the app starts, Spring 'scans' your folders. It looks for classes with annotations. It then creates objects and stores them in a big 'Box' called the <strong>IOC Container</strong>. Whenever you need an object, Spring takes it out of the box and gives it to you.
                </p>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-3 md:gap-4">
                {['@Service', '@Repository', '@Controller', '@Configuration'].map(t => (
                    <div key={t} className="px-4 py-3 md:px-6 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold flex items-center gap-2 hover:bg-green-600 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-green-500" /> {t}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* INTERVIEW PRO TIP */}
      <div className="p-6 md:p-8 bg-green-50 border border-green-100 rounded-[2rem] flex flex-col sm:flex-row items-start gap-4 md:gap-6">
          <div className="p-3 bg-white rounded-xl shadow-sm text-green-600 flex-shrink-0 mx-auto sm:mx-0">
            <Info className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-black text-green-900 mb-2 uppercase tracking-tighter text-xs md:text-sm">Quick Interview Tip</h5>
            <p className="text-xs md:text-sm text-green-800 leading-relaxed font-medium">
                If someone asks: "What is @Service?" Just say it is the same as @Component, but we use it for <strong>Business Logic</strong>. This makes your code easier to read and organize.
            </p>
          </div>
      </div>

    </div>
  );
}