import React from 'react';
import { Smartphone, Cpu, Rocket, Code, Brain, Globe, CheckCircle2 } from 'lucide-react';

function Html5() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:p-12 bg-white text-slate-900 shadow-2xl rounded-3xl md:rounded-[3rem] my-10 border-t-8 border-purple-600 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header Section */}
      <header className="mb-10 md:mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-4 h-4 text-purple-600" />
          <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">
            The Next Generation
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">HTML5</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
          Modern HTML is no longer just for text. It now works like an Operating System, allowing websites to access hardware, work offline, and run powerful apps.
        </p>
      </header>

      {/* Future Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        
        {/* 1. Apps (PWA) */}
        <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
            <Smartphone className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold mb-3">Installable Apps</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Progressive Web Apps (PWA) allow you to install websites directly to your home screen without using an App Store.
          </p>
        </div>

        {/* 2. Hardware Access */}
        <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
            <Cpu className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold mb-3">Hardware Control</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            New tools allow the browser to talk directly to your Bluetooth devices, USB hardware, and even your camera's focus.
          </p>
        </div>

        {/* 3. High Performance */}
        <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
            <Rocket className="w-6 h-6 text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold mb-3">Super Speed</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            WebAssembly allows complex software like 3D games and Video Editors to run inside the browser at lightning speed.
          </p>
        </div>
      </div>

      {/* Deep Dive: Web Components */}
      <section className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400">Reusable Components</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
              In the future, you won't need big frameworks to build parts of a site. HTML will let you create your own custom elements that work everywhere.
            </p>
            <div className="space-y-4">
              {['Custom UI Elements', 'Built-in Templates', 'Private Styling (Shadow DOM)'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span className="text-xs md:text-sm font-medium opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-5 md:p-8 rounded-2xl border border-slate-700 font-mono text-[10px] md:text-xs text-blue-300 shadow-inner overflow-x-auto">
            <div className="text-slate-500 mb-4 font-sans italic">// Defining a Custom Element</div>
            <pre className="leading-relaxed">
{`class MyButton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<button>Click Me</button>";
  }
}
// Use it in HTML as <my-button></my-button>
customElements.define('my-button', MyButton);`}
            </pre>
          </div>
        </div>
      </section>

      {/* Master Insight: AI */}
      <footer className="bg-blue-50 p-6 md:p-10 rounded-[2rem] border border-blue-100 shadow-sm">
        <h4 className="text-blue-900 font-bold text-lg md:text-xl mb-4 flex items-center gap-3">
          <Brain className="w-6 h-6 text-blue-600" /> AI & The Modern Web
        </h4>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed mb-8 max-w-4xl">
          Artificial Intelligence is coming to the browser. With the new <strong>WebGPU</strong> technology, your computer's graphics card can run AI models directly inside a website, making things faster and more private.
        </p>
        <div className="flex flex-wrap gap-2">
          {['#WebGPU', '#WebXR', '#OfflineFirst', '#FastWeb'].map(tag => (
            <span key={tag} className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Html5;