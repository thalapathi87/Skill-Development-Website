// components/Topics.jsx
import React from 'react';

export const Introduction = () => (
  <div className="animate-fadeIn">
    <h2 className="text-3xl font-bold text-slate-800 mb-6">Introduction to HTML</h2>
    <div className="prose prose-slate max-w-none">
      <p className="text-lg text-slate-600 leading-relaxed">
        HTML (HyperText Markup Language) is the backbone of the web. It defines the structure and 
        meaning of web content. Every website you visit is built using HTML.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h4 className="font-bold text-blue-800 mb-2">HyperText</h4>
          <p className="text-sm text-blue-600">Links that connect web pages to one another.</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
          <h4 className="font-bold text-purple-800 mb-2">Markup</h4>
          <p className="text-sm text-purple-600">Tags used to annotate text, images, and other content.</p>
        </div>
      </div>
    </div>
  </div>
);

export const HTMLBasics = () => (
  <div className="animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 mb-4">HTML Basics</h3>
    <div className="bg-slate-900 rounded-lg p-6 text-white font-mono text-sm">
      <p className="text-gray-500 mb-2">&lt;!DOCTYPE html&gt;</p>
      <p className="text-blue-400">&lt;html&gt;</p>
      <p className="text-blue-400 ml-4">&lt;head&gt; ... &lt;/head&gt;</p>
      <p className="text-blue-400 ml-4">&lt;body&gt;</p>
      <p className="text-white ml-8">&lt;h1&gt;Hello World&lt;/h1&gt;</p>
      <p className="text-blue-400 ml-4">&lt;/body&gt;</p>
      <p className="text-blue-400">&lt;/html&gt;</p>
    </div>
  </div>
);

export const TagsAttributes = () => (
  <div className="animate-fadeIn space-y-6">
    <h3 className="text-2xl font-bold text-slate-800">### 🔷 HTML TAGS – FUNCTIONAL CLASSIFICATION</h3>
    <div className="space-y-4">
      <div className="p-5 border-l-4 border-sky-500 bg-white shadow-sm rounded-r-lg">
        <h4 className="font-bold text-sky-900">1. STRUCTURAL CONTAINERS</h4>
        <p className="text-slate-600 text-sm mt-1">Used for layout grouping: <code className="bg-slate-100 px-2 py-1 rounded">div</code>, <code className="bg-slate-100 px-2 py-1 rounded">span</code></p>
      </div>
      <div className="p-5 border-l-4 border-emerald-500 bg-white shadow-sm rounded-r-lg">
        <h4 className="font-bold text-emerald-900">2. SEMANTIC ELEMENTS</h4>
        <p className="text-slate-600 text-sm mt-1">Describe content meaning: <code className="bg-slate-100 px-2 py-1 rounded">main</code>, <code className="bg-slate-100 px-2 py-1 rounded">section</code>, <code className="bg-slate-100 px-2 py-1 rounded">article</code></p>
      </div>
    </div>
  </div>
);

// Note: Mattha topics-kum ithu pola components create pannikalam.
