import React from "react";
import { ArrowRightLeft, ShieldCheck, Database, Layers, Code2, AlertCircle } from "lucide-react";

const BINDING_TYPES = [
  { 
    name: "@RequestBody", 
    type: "JSON Payload", 
    desc: "Converts the incoming JSON into a Java Object using Jackson. Used for POST and PUT requests." 
  },
  { 
    name: "@PathVariable", 
    type: "URL Segment", 
    desc: "Extracts values directly from the URL path. Example: /users/{id}. Best for identifying specific resources." 
  },
  { 
    name: "@RequestParam", 
    type: "Query String", 
    desc: "Extracts values from the query string. Example: /users?page=1. Best for filtering and sorting." 
  }
];

export default function RequestResponse() {
  return (
    <div className="space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10">
      
      {/* 1. HEADER */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Layers className="w-3 h-3" /> Data Transfer Layer
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          DTOs & <span className="text-rose-600">Data Binding</span>
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-3xl font-medium">
          Mastering the flow of data. Learn how to transform incoming requests into <strong>Data Transfer Objects</strong> to keep your API secure and efficient.
        </p>
      </section>

      {/* 2. DTO PATTERN VISUAL */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
        <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">The DTO Pattern</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                A <strong>DTO (Data Transfer Object)</strong> is a simple class that carries only the data needed by the client. It prevents <strong>Mass Assignment Vulnerabilities</strong> by hiding sensitive fields like passwords or internal IDs.
            </p>
            <ul className="space-y-4">
                {[
                    { t: "Decoupling", d: "Change DB schema without breaking the API." },
                    { t: "Security", d: "Hide sensitive fields from the JSON response." },
                    { t: "Performance", d: "Send only the data the client actually needs." }
                ].map(item => (
                    <li key={item.t} className="flex gap-4">
                        <div className="mt-1"><ShieldCheck className="w-5 h-5 text-rose-500" /></div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">{item.t}</p>
                            <p className="text-xs text-slate-500">{item.d}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">UserRequestDTO.java</span>
            </div>
            <pre className="font-mono text-xs md:text-sm text-rose-300 leading-relaxed">
                <code>
                    <span className="text-orange-400">public class</span> UserDTO {"{"} {"\n"}
                    {"  "} <span className="text-orange-400">private</span> String email;{"\n"}
                    {"  "} <span className="text-orange-400">private</span> String fullName;{"\n"}
                    {"  "} <span className="text-slate-500">// No password field here!</span>{"\n"}
                    {"}"}
                </code>
            </pre>
        </div>
      </section>

      {/* 3. BINDING TYPES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BINDING_TYPES.map((type) => (
          <div key={type.name} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowRightLeft className="text-rose-600 w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-1">{type.name}</h3>
            <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-4">{type.type}</p>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">{type.desc}</p>
          </div>
        ))}
      </div>

      {/* 4. MASTER CODE: MAPPING DTO TO ENTITY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Professional Mapping Logic
        </div>
        <div className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <pre className="font-mono text-xs md:text-sm leading-relaxed text-blue-300 overflow-x-auto">
            <code>
              <span className="text-slate-500">// Converting DTO to Entity in Service Layer</span>{"\n"}
              <span className="text-orange-400">public</span> User <span className="text-rose-400">registerUser</span>(UserDTO dto) {"{"} {"\n"}
              {"  "} User entity = <span className="text-orange-400">new</span> User();{"\n"}
              {"  "} entity.<span className="text-rose-400">setEmail</span>(dto.getEmail());{"\n"}
              {"  "} entity.<span className="text-rose-400">setName</span>(dto.getFullName());{"\n"}
              {"  "} <span className="text-orange-400">return</span> userRepository.<span className="text-rose-400">save</span>(entity);{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 5. MASTER TIP: MODELMAPPER */}
      <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-rose-600 rounded-[2.5rem] flex items-center justify-center flex-shrink-0">
                <Database className="w-10 h-10 text-white" />
            </div>
            <div>
                <h5 className="font-black uppercase tracking-[0.3em] text-xs text-rose-400 mb-2">Efficiency Tool</h5>
                <h4 className="text-2xl font-bold mb-4">Don't Map Manually!</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                    In large projects, writing <code className="text-rose-300">set()</code> and <code className="text-rose-300">get()</code> for 50 fields is boring and prone to errors. Master-level developers use libraries like <strong>MapStruct</strong> or <strong>ModelMapper</strong>. They automatically copy data from DTOs to Entities using naming conventions.
                </p>
            </div>
         </div>
      </div>

      {/* 6. INTERVIEW PRO TIP */}
      <div className="p-8 bg-rose-50 border border-rose-100 rounded-[2.5rem] flex items-start gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-rose-600 flex-shrink-0">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div>
            <h5 className="font-black text-rose-900 mb-2 uppercase tracking-tighter">Architecture Insight</h5>
            <p className="text-sm text-rose-800 leading-relaxed font-medium">
                When asked about <strong>Validation</strong>, remember: Always validate at the <strong>DTO level</strong> using annotations like <code className="text-rose-600">@Valid</code>. This ensures that "bad data" is stopped at the door before it ever reaches your Service or Database layer.
            </p>
          </div>
      </div>

    </div>
  );
}