import React from "react";
import { FileText, FilePlus, FileEdit, FileSearch, Trash2, Zap, Code2, AlertCircle, HardDrive } from "lucide-react";

const FILE_METHODS = [
  { method: "createNewFile()", desc: "Creates a new empty file. Returns false if file exists.", usage: "file.createNewFile();" },
  { method: "exists()", desc: "Checks whether the specific file or directory exists.", usage: "file.exists();" },
  { method: "getName()", desc: "Returns the name of the file or directory.", usage: "file.getName();" },
  { method: "length()", desc: "Returns the size of the file in bytes.", usage: "file.length();" },
  { method: "delete()", desc: "Permanently deletes the file from the system.", usage: "file.delete();" },
  { method: "canRead()", desc: "Checks if the application can read the file.", usage: "file.canRead();" },
];

export default function FileHandling() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Zap className="w-3 h-3" /> java.io Package
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          File <span className="text-orange-600">Handling</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Java uses <strong>Streams</strong> to interact with files. Whether it is reading configuration or saving user data, the File class provides the foundation for all I/O operations.
        </p>
      </section>

      {/* 2. CORE OPERATIONS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: "Create", icon: <FilePlus className="text-green-500" />, bg: "bg-green-50" },
          { title: "Read", icon: <FileSearch className="text-blue-500" />, bg: "bg-blue-50" },
          { title: "Write", icon: <FileEdit className="text-orange-500" />, bg: "bg-orange-50" },
          { title: "Delete", icon: <Trash2 className="text-red-500" />, bg: "bg-red-50" }
        ].map(item => (
          <div key={item.title} className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col items-center gap-3 group hover:shadow-xl hover:border-orange-200 transition-all duration-300">
            <div className={`p-4 ${item.bg} rounded-2xl group-hover:scale-110 transition-transform`}>
                {item.icon}
            </div>
            <span className="font-bold text-slate-700 text-sm md:text-base">{item.title}</span>
          </div>
        ))}
      </div>

      {/* 3. PRACTICAL CODE EXAMPLE */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] md:text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Implementation Guide
        </div>

        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden md:block">
            <HardDrive className="text-white w-32 h-32" />
          </div>
          <pre className="font-mono text-xs md:text-sm leading-relaxed text-blue-300 overflow-x-auto no-scrollbar">
            <code>
              <span className="text-orange-400">import</span> java.io.*; <span className="text-slate-500">// Required Package</span>{"\n\n"}
              <span className="text-slate-500">// Writing data to a file</span>{"\n"}
              FileWriter writer = <span className="text-orange-400">new</span> <span className="text-green-400">FileWriter</span>(<span className="text-amber-400">"notes.txt"</span>);{"\n"}
              writer.<span className="text-green-400">write</span>(<span className="text-amber-400">"Hello World!"</span>);{"\n"}
              writer.<span className="text-green-400">close</span>();{"\n\n"}
              <span className="text-slate-500">// Reading data from a file</span>{"\n"}
              File myFile = <span className="text-orange-400">new</span> <span className="text-green-400">File</span>(<span className="text-amber-400">"notes.txt"</span>);{"\n"}
              Scanner reader = <span className="text-orange-400">new</span> <span className="text-green-400">Scanner</span>(myFile);{"\n"}
              <span className="text-orange-400">while</span> (reader.<span className="text-green-400">hasNextLine</span>()) {"{"} {"\n"}
              {"  "}String content = reader.<span className="text-green-400">nextLine</span>();{"\n"}
              {"  "}System.out.<span className="text-green-400">println</span>(content);{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 4. FILE METHODS TABLE */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FileSearch className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Essential File Methods</h2>
        </div>
        
        <div className="overflow-x-auto rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Method</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Code Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {FILE_METHODS.map((m) => (
                <tr key={m.method} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-orange-600 font-mono text-xs whitespace-nowrap">{m.method}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium leading-relaxed">{m.desc}</td>
                  <td className="px-6 py-4">
                    <code className="text-[10px] font-mono text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg whitespace-nowrap">{m.usage}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. MASTER INSIGHT */}
      <div className="p-6 md:p-10 bg-amber-50 border border-amber-100 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row gap-6 items-start md:items-center shadow-sm">
         <div className="p-4 bg-white rounded-2xl shadow-sm text-amber-600 flex-shrink-0">
            <AlertCircle className="w-8 h-8" />
         </div>
         <div className="space-y-2">
            <h5 className="font-black text-amber-900 mb-1 uppercase tracking-widest text-[10px]">Exception Handling Requirement</h5>
            <p className="text-sm md:text-base text-amber-800 leading-relaxed font-medium">
                Always wrap your file operations in a <strong>try-catch</strong> block. Java enforces this because if a file is missing or locked, the program will throw an <strong>IOException</strong> and crash.
            </p>
         </div>
      </div>

    </div>
  );
}