import React from "react";
import { Code2, Zap, Globe, Cpu, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

function JsIntro() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- HEADER --- */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
          <Code2 className="w-4 h-4" />
          <span>Step 01: The Big Picture</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">JavaScript?</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium">
          JavaScript is the "brain" of the web. While HTML builds the structure and CSS adds the style, JavaScript makes things **move and react** when a user interacts with the page.
        </p>
      </header>

      {/* --- FEATURES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { 
            icon: <Zap className="text-amber-500 w-5 h-5" />, 
            title: "Live Action", 
            desc: "Update text, colors, or images instantly without reloading the whole page." 
          },
          { 
            icon: <Globe className="text-sky-500 w-5 h-5" />, 
            title: "Everywhere", 
            desc: "It is the only language that works in every web browser like Chrome, Safari, and Edge." 
          },
          { 
            icon: <Cpu className="text-emerald-500 w-5 h-5" />, 
            title: "Smart Working", 
            desc: "It can talk to servers and download data in the background while you keep browsing." 
          }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm transition-all hover:border-amber-200">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* --- ARCHITECTURE SECTION --- */}
      <section className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
        <div className="p-8 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
            How it Works
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed text-base">
                Browsers use a special engine (like a car engine) to read your JavaScript code and turn it into actions very quickly.
              </p>
              <ul className="space-y-4">
                {[
                  "Runs one task at a time to stay organized",
                  "Cleans up old memory automatically",
                  "Follows a 'Loop' to check for user clicks"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/50 rounded-2xl p-6 md:p-8 font-mono text-xs md:text-sm border border-white/10 shadow-inner">
              <div className="flex gap-1.5 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <span className="text-slate-500 italic block mb-4">// Simple Example</span>
              <div className="space-y-2">
                <div><span className="text-pink-400">const</span> <span className="text-sky-300">greeting</span> = <span className="text-amber-200">"Welcome!"</span>;</div>
                <div><span className="text-sky-300">console</span>.<span className="text-emerald-400">log</span>(greeting);</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARCHITECT'S NOTE --- */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0 backdrop-blur-md shadow-lg">
          <Sparkles className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">A Quick Tip</h4>
          <p className="text-white/90 leading-relaxed text-sm font-medium">
            Don't worry about memorizing everything yet. Focus on understanding how JavaScript interacts with the page. Once you master the basics of "Actions" and "Events," you can build almost anything!
          </p>
        </div>
      </div>
    </div>
  );
}

export default JsIntro;