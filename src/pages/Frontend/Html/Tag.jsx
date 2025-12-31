import React from 'react';
import { Tag, Zap, Box, Layers, MousePointer2, AlertCircle } from 'lucide-react';

function Tags() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* --- HEADER --- */}
      <header className="mb-12 relative border-b-4 border-indigo-500 pb-8">
        <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-xs mb-3">
          <Tag className="w-4 h-4" />
          <span>Lesson 02: Building Blocks</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Tags & <span className="text-indigo-600">Attributes</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-medium">
          Tags define "what" the content is, and Attributes provide "extra info" about those tags. Let's look at how professionals use them effectively.
        </p>
      </header>

      {/* 1. TAG CLASSIFICATION */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Box className="text-indigo-500 w-6 h-6" /> How Tags Behave
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Block Level */}
          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 shadow-sm transition-all hover:border-indigo-200">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-6 bg-indigo-500 rounded-full" />
              Block-Level Tags
            </h3>
            <p className="text-sm text-slate-600 mb-5">
              These take up the <b>full width</b> of the page and always start on a new line.
            </p>
            <div className="flex flex-wrap gap-2">
              {['<div>', '<section>', '<article>', '<header>', '<h1>', '<p>', '<ul>'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-[11px] font-bold text-indigo-600 font-mono shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Inline Level */}
          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 shadow-sm transition-all hover:border-emerald-200">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-6 bg-emerald-500 rounded-full" />
              Inline Tags
            </h3>
            <p className="text-sm text-slate-600 mb-5">
              These only take as much <b>width as needed</b> and stay on the same line.
            </p>
            <div className="flex flex-wrap gap-2">
              {['<span>', '<a>', '<strong>', '<img>', '<button>', '<input>'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-[11px] font-bold text-emerald-600 font-mono shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ATTRIBUTES TABLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Layers className="text-indigo-500 w-6 h-6" /> The Power of Attributes
        </h2>
        
        <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-xl">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-slate-900 text-white">
              <tr className="text-xs md:text-sm">
                <th className="p-5 font-bold">Type</th>
                <th className="p-5 font-bold">Examples</th>
                <th className="p-5 font-bold">Why use it?</th>
              </tr>
            </thead>
            <tbody className="text-[13px] md:text-sm">
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-5 font-bold text-slate-800">Global</td>
                <td className="p-5 font-mono text-indigo-600">id, class, title, hidden</td>
                <td className="p-5 text-slate-600">These work on almost every HTML tag.</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-5 font-bold text-slate-800">Events</td>
                <td className="p-5 font-mono text-emerald-600">onclick, onsubmit</td>
                <td className="p-5 text-slate-600">Used to trigger JavaScript actions.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 font-bold text-amber-600">Custom Data</td>
                <td className="p-5 font-mono text-indigo-600">data-user-id, data-type</td>
                <td className="p-5 text-slate-600">Stores extra info for your own app.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. CODE EXAMPLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 font-sans">
          <CodeIcon className="text-indigo-500 w-6 h-6" /> Real-World Example
        </h2>
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="px-6 py-4 bg-slate-800 border-b border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-mono text-slate-400 ml-2 uppercase tracking-widest">component.html</span>
          </div>
          <div className="p-8 font-mono text-xs md:text-sm leading-relaxed text-emerald-400 overflow-x-auto">
            <pre>
{`<article 
  id="post-101" 
  class="card" 
  data-category="coding"
>
  <header>
    <h2>Mastering Tags</h2>
    <img src="pic.jpg" alt="Post thumbnail" loading="lazy" />
  </header>
  
  <p>Learn more about <strong>Attributes</strong>.</p>
  
  <button type="button" onclick="alert('Hello!')">
    Read More
  </button>
</article>`}
            </pre>
          </div>
        </div>
      </section>

      {/* PRO TIPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-50 border-b-4 border-blue-500 rounded-3xl shadow-sm">
          <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <MousePointer2 className="w-4 h-4" /> Alt Text
          </h4>
          <p className="text-xs text-blue-800 leading-relaxed">Always add <code>alt</code> to images. It helps search engines and blind users understand your content.</p>
        </div>
        <div className="p-6 bg-purple-50 border-b-4 border-purple-500 rounded-3xl shadow-sm">
          <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Lazy Load
          </h4>
          <p className="text-xs text-purple-800 leading-relaxed">Use <code>loading="lazy"</code> on images to make your website load much faster on mobile.</p>
        </div>
        <div className="p-6 bg-orange-50 border-b-4 border-orange-500 rounded-3xl shadow-sm">
          <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> ID Names
          </h4>
          <p className="text-xs text-orange-800 leading-relaxed">An <code>id</code> must be unique. Never use the same ID name more than once on the same page.</p>
        </div>
      </div>
    </div>
  );
}

const CodeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

export default Tags;