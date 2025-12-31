import React from "react";
import { Zap, ShieldCheck, Box, Rocket, Coffee, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    title: "Auto-Configuration",
    desc: "Spring Boot automatically sets up your app based on the libraries you use. You don't have to write code for basic settings.",
    icon: <Zap className="text-orange-600" />
  },
  {
    title: "Standalone App",
    desc: "Your app comes with a built-in server (like Tomcat). You don't need to install any extra software to run your code.",
    icon: <Box className="text-blue-600" />
  },
  {
    title: "Starter POMs",
    desc: "It provides simple 'Starters' that group all the tools you need for a task (like Web or Database) into one single package.",
    icon: <ShieldCheck className="text-green-600" />
  }
];

export default function Intro() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-10 px-4 md:px-0">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest">
           <Rocket className="w-3 h-3" /> Framework Evolution
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
          Spring Boot <span className="text-green-600">Basics</span>
        </h1>
        <p className="text-slate-500 text-base md:text-xl leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Spring Boot makes it easy to create Java applications. It takes away the hard work of configuration so you can focus on writing your actual business logic. It is built for <strong>Production-ready</strong> apps.
        </p>
      </section>

      {/* 2. CORE BENEFITS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 3. WHY SPRING BOOT SECTION */}
      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-[2.5rem] md:rounded-[3rem] blur opacity-10"></div>
        <div className="relative p-6 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Why Use Spring Boot?</h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                In the old days, developers had to write long XML files just to start a project. Spring Boot follows the <strong>"Convention over Configuration"</strong> rule. It assumes the best settings for you so you can start coding instantly.
              </p>
              <ul className="space-y-3">
                {["No XML settings needed", "Built-in Servers (Tomcat/Jetty)", "Health checks for your app", "Easy tool management"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 p-4 md:p-6 rounded-2xl border border-white/10 font-mono text-[10px] md:text-xs text-green-400 overflow-x-auto">
                <p className="text-slate-500 mb-2">// Simplest Spring Boot Start</p>
                <p><span className="text-orange-400">@SpringBootApplication</span></p>
                <p><span className="text-orange-400">public class</span> Application {"{"}</p>
                <p className="pl-4">  <span className="text-orange-400">public static void</span> main(String[] args) {"{"}</p>
                <p className="pl-8">    SpringApplication.<span className="text-blue-400">run</span>(Application.class, args);</p>
                <p className="pl-4">  {"}"}</p>
                <p>{"}"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MASTER TIP */}
      <div className="p-6 md:p-8 bg-green-50 border border-green-100 rounded-[2rem] flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
            <Coffee className="text-green-600 w-8 h-8" />
         </div>
         <div className="space-y-1">
            <h5 className="font-black text-green-900 uppercase tracking-widest text-[10px] md:text-xs">Interview Tip</h5>
            <p className="text-sm text-green-800 leading-relaxed font-medium">
                "What is inside @SpringBootApplication?" It is a 3-in-1 annotation: 
                <strong> @Configuration</strong>, <strong>@EnableAutoConfiguration</strong>, and <strong>@ComponentScan</strong>.
            </p>
         </div>
      </div>

    </div>
  );
}