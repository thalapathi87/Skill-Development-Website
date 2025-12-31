import React from "react";
import { FileText, FilePlus, FileEdit, FileSearch, Trash2, Zap, Code2, AlertCircle, Layers } from "lucide-react";

const FILE_METHODS = [
  { method: "createNewFile()", desc: "Pudhu empty file-ah create pannum. File irundha false tharum.", usage: "file.createNewFile();" },
  { method: "exists()", desc: "Oru specific file irukka illaya-nu check pannum.", usage: "file.exists();" },
  { method: "getName()", desc: "Andha file-oda name-ah mattum tharum.", usage: "file.getName();" },
  { method: "length()", desc: "File-oda size-ah bytes-la tharum.", usage: "file.length();" },
  { method: "delete()", desc: "Existing file-ah permanently delete pannum.", usage: "file.delete();" },
  { method: "canRead()", desc: "File-ah read panna permission irukkannu check pannum.", usage: "file.canRead();" },
];

export default function FileHandling() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest">
           <Layers className="w-3 h-3" /> Java I/O System
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
          File <span className="text-orange-600">Handling</span>
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-3xl font-medium">
          Java <code>java.io</code> package moolama files kooda interact pannalam. Java-la data ellamae <strong>Streams</strong>-ah dhaan process aagum. Stream-nu sonna adhu oru sequence of data.
        </p>
      </section>

      {/* 2. CORE CONCEPTS: BYTE vs CHARACTER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] group hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Byte Streams</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              8-bit bytes data-va handle panna udhavum. Image, Audio, and Video files-ku idhu dhaan best. <br/>
              <strong>Example:</strong> <code>FileInputStream</code>
            </p>
        </div>

        <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] group hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Character Streams</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              16-bit Unicode characters-ah handle pannum. Text files read/write panna idhai dhaan use pannanum. <br/>
              <strong>Example:</strong> <code>FileReader</code>
            </p>
        </div>
      </div>

      {/* 3. PRACTICAL CODE: READING & WRITING */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Stream Implementation
        </div>

        

        <div className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Code2 className="text-white w-40 h-40" />
          </div>
          <pre className="font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto no-scrollbar">
            <code>
              <span className="text-orange-400">import</span> java.io.*; {"\n"}
              <span className="text-orange-400">import</span> java.util.Scanner; {"\n\n"}
              
              <span className="text-slate-500">// File Reading with Exception Handling</span>{"\n"}
              <span className="text-orange-400">try</span> {"{"} {"\n"}
              {"  "}File myObj = <span className="text-orange-400">new</span> <span className="text-green-400">File</span>(<span className="text-amber-400">"filename.txt"</span>);{"\n"}
              {"  "}Scanner myReader = <span className="text-orange-400">new</span> <span className="text-green-400">Scanner</span>(myObj);{"\n"}
              {"  "}<span className="text-orange-400">while</span> (myReader.hasNextLine()) {"{"} {"\n"}
              {"    "}String data = myReader.nextLine();{"\n"}
              {"    "}System.out.println(data);{"\n"}
              {"  "} {"}"} {"\n"}
              {"  "}myReader.close();{"\n"}
              {"}"} <span className="text-orange-400">catch</span> (FileNotFoundException e) {"{"} {"\n"}
              {"  "}System.out.println(<span className="text-amber-400">"An error occurred."</span>);{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ESSENTIAL METHODS TABLE */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <FileSearch className="text-orange-600 w-6 h-6" />
          <h2 className="text-2xl font-black text-slate-900">File Class Methods</h2>
        </div>
        
        <div className="overflow-hidden border border-slate-100 rounded-[2rem] bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80">
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Method</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Code Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {FILE_METHODS.map((m) => (
                <tr key={m.method} className="hover:bg-orange-50/20 transition-colors">
                  <td className="px-6 py-4 font-bold text-orange-600 font-mono text-xs">{m.method}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{m.desc}</td>
                  <td className="px-6 py-4">
                    <code className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{m.usage}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. PRO TIP: RESOURCE MANAGEMENT */}
      <div className="p-8 bg-slate-900 rounded-[3rem] text-white flex gap-6 items-start shadow-xl">
         <div className="p-4 bg-orange-500 rounded-2xl text-white">
            <AlertCircle className="w-8 h-8" />
         </div>
         <div className="space-y-2">
            <h5 className="font-black text-[10px] uppercase tracking-widest text-orange-400 opacity-80">Pro Developer Insight</h5>
            <h4 className="text-xl font-bold">Try-with-Resources</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Java 7-ku apram, <code>try-with-resources</code> nu oru concept vandhuchu. Idhai use panna, namma manual-ah <code>file.close()</code> panna thevai illa. Try block mudiyumbodu automatic-ah resource close aagidum. Idhu memory leak-ah thadukkum.
            </p>
         </div>
      </div>

    </div>
  );
}