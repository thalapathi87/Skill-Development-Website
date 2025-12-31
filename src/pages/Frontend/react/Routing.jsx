import React from 'react';
import { Map, ArrowRight, ExternalLink, Globe } from 'lucide-react';

const Routing = () => {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      {/* 1. INTRODUCTION: Explaining why we need a Router in React */}
      <section>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">React Routing</h1>
        <p className="text-slate-600 leading-relaxed">
          React does not include built-in routing. We use the <b>React Router</b> library 
          to switch components based on the URL. This enables fast, seamless transitions 
          without ever reloading the browser page.
        </p>
      </section>

      {/* Concept Architecture Diagram */}
      

      {/* 2. CORE COMPONENTS: The building blocks of React Router */}
      <div className="grid grid-cols-1 gap-4">
        {[
          { 
            title: 'BrowserRouter', 
            desc: 'Wraps your entire application to keep the UI in sync with the URL.',
            code: '<BrowserRouter> ... </BrowserRouter>' 
          },
          { 
            title: 'Routes & Route', 
            desc: 'Defines the mapping between a specific URL path and a React component.',
            code: '<Route path="/about" element={<About />} />' 
          },
          { 
            title: 'Link', 
            desc: 'Works like an anchor tag (<a>), but navigates without refreshing the page.',
            code: '<Link to="/home">Home</Link>' 
          }
        ].map((item, index) => (
          <div key={index} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="bg-sky-100 p-3 h-fit rounded-lg text-sky-600">
              <Globe size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 mb-3">{item.desc}</p>
              <code className="block bg-slate-900 text-sky-300 p-2 rounded text-xs font-mono">
                {item.code}
              </code>
            </div>
          </div>
        ))}
      </div>

      {/* 3. NAVIGATION FLOW: Visualizing Client-Side Routing */}
      <div className="bg-slate-900 p-6 rounded-xl text-white">
        <div className="flex items-center gap-2 mb-6 text-sky-400 font-bold italic">
          <Map size={20} />
          <h2>Client-Side Navigation Flow</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between border-t border-slate-700 pt-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-700 rounded-lg mb-2 mx-auto flex items-center justify-center">URL</div>
            <p className="text-xs text-slate-400">/dashboard</p>
          </div>
          
          <ArrowRight className="text-slate-600 hidden md:block" />
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500/20 border border-sky-500 rounded-lg mb-2 mx-auto flex items-center justify-center text-sky-400 font-bold">MATCH</div>
            <p className="text-xs text-slate-400">Router Logic</p>
          </div>

          <ArrowRight className="text-slate-600 hidden md:block" />

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-lg mb-2 mx-auto flex items-center justify-center text-emerald-400 font-bold">VIEW</div>
            <p className="text-xs text-slate-400">Dashboard UI</p>
          </div>
        </div>
      </div>

      {/* 4. MASTER TIP: Dynamic Routing */}
      <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-lg flex items-start gap-3">
        <ExternalLink size={18} className="text-indigo-500 mt-1" />
        <div>
          <p className="text-sm text-indigo-700">
            <strong>Pro Tip:</strong> You can also use dynamic paths. For example, using <code>/user/:id</code> allows you to extract unique IDs from the URL using the <code>useParams</code> hook to fetch specific user data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Routing;