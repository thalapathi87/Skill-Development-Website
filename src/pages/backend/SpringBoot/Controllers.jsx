import React from "react";
import { Globe, ArrowRightLeft, Send, ShieldAlert, Code2, Coffee } from "lucide-react";

const HTTP_VERBS = [
  { method: "GET", usage: "Get data", status: "200 OK", desc: "Used to see or read info from the server. It should never change your data." },
  { method: "POST", usage: "Save data", status: "201 Created", desc: "Sends new info to the server to create something new (like a new user)." },
  { method: "PUT", usage: "Update data", status: "200 OK", desc: "Used to change or fix existing info. If you call it many times, the result is the same." },
  { method: "DELETE", usage: "Remove data", status: "204 No Content", desc: "Deletes a specific piece of info from the database forever." }
];

export default function Controllers() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 px-4 md:px-0">
      
      {/* 1. HEADER SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Globe className="w-3 h-3" /> API Layer
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          REST <span className="text-indigo-600">Controllers</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          The Controller is the <strong>front door of your app</strong>. It takes requests from the user and sends back the right answer (JSON).
        </p>
      </section>

      {/* 2. VERBS GRID (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {HTTP_VERBS.map((verb) => (
          <div key={verb.method} className="p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
            <span className={`text-[10px] font-black px-3 py-1 rounded-full mb-4 inline-block ${
              verb.method === 'GET' ? 'bg-green-100 text-green-700' : 
              verb.method === 'POST' ? 'bg-blue-100 text-blue-700' : 
              'bg-orange-100 text-orange-700'
            }`}>
              {verb.method}
            </span>
            <h4 className="text-lg font-bold text-slate-900 mb-1">{verb.usage}</h4>
            <p className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest">Code: {verb.status}</p>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{verb.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. CODE EXAMPLE (Responsive) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] md:text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Production-Style Controller
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden sm:block">
            <Send className="text-white w-32 h-32" />
          </div>
          <pre className="font-mono text-xs md:text-sm leading-relaxed text-indigo-300 overflow-x-auto no-scrollbar">
            <code>
              <span className="text-orange-400">@RestController</span>{"\n"}
              <span className="text-orange-400">@RequestMapping</span>(<span className="text-amber-400">"/api/v1/users"</span>){"\n"}
              <span className="text-orange-400">public class</span> UserController {"{"} {"\n\n"}
              {"  "} <span className="text-slate-500">// Connect to Service (The Best Way)</span>{"\n"}
              {"  "} <span className="text-orange-400">private final</span> UserService userService;{"\n\n"}
              
              {"  "} <span className="text-orange-400">@GetMapping</span>(<span className="text-amber-400">"/{"{id}"}"</span>){"\n"}
              {"  "} <span className="text-orange-400">public</span> ResponseEntity&lt;User&gt; getUser(<span className="text-orange-400">@PathVariable</span> Long id) {"{"} {"\n"}
              {"    "} <span className="text-orange-400">return</span> ResponseEntity.<span className="text-indigo-400">ok</span>(userService.findById(id));{"\n"}
              {"  "} {"}"} {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ARCHITECTURE INSIGHT */}
      <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-indigo-500/20" />
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-xl shadow-indigo-500/20">
                <ArrowRightLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div className="space-y-4 text-center lg:text-left">
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-indigo-400">The Wrapper Secret</h5>
                <h4 className="text-2xl md:text-3xl font-bold">Why use ResponseEntity?</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  We don't just send back data; we wrap it in a <strong>ResponseEntity</strong>. This lets us choose the status (like 200 for OK or 404 for Not Found) and add special headers. It makes your API look professional for other developers.
                </p>
            </div>
        </div>
      </div>

      {/* 5. INTERVIEW PRO TIP */}
      <div className="p-6 md:p-8 bg-indigo-50 border border-indigo-100 rounded-[2rem] flex flex-col sm:flex-row items-start gap-4 md:gap-6">
          <div className="p-3 bg-white rounded-xl shadow-sm text-indigo-600 flex-shrink-0 mx-auto sm:mx-0">
            <ShieldAlert className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-black text-indigo-900 mb-2 uppercase tracking-tighter text-xs md:text-sm">Quick Pro Tip</h5>
            <p className="text-xs md:text-sm text-indigo-800 leading-relaxed font-medium">
              Keep your controllers <strong>"Thin."</strong> They should only guide the request to the right place. Don't put complex math or business rules here; put those in the <strong>Service Layer</strong>.
            </p>
          </div>
      </div>

    </div>
  );
}