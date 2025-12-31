import React from "react";
import { ShieldAlert, LifeBuoy, AlertCircle, Code2, Info, Activity } from "lucide-react";

export default function ExceptionHandling() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <ShieldAlert className="w-3 h-3" /> API Resilience
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Global <span className="text-red-600">Exception</span> Handling
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Learn how to build a <strong>Centralized Error Handling</strong> system using @ControllerAdvice to provide clean, meaningful responses to your API consumers.
        </p>
      </section>

      {/* 2. CORE ARCHITECTURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-red-200 transition-all group">
          <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LifeBuoy className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">@ControllerAdvice</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              This annotation makes a class a "Global Interceptor" for exceptions. It listens for errors across <strong>all</strong> controllers, allowing you to manage logic in one single place.
            </p>
        </div>

        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all group">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Custom Error Schema</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Master developers define a custom <code>ErrorResponse</code> class with fields like <code>timestamp</code>, <code>status</code>, and <code>message</code> to keep error formats consistent.
            </p>
        </div>
      </div>

      {/* 3. MASTER CODE: GLOBAL EXCEPTION HANDLER */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Professional Error Handling Logic
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <pre className="font-mono text-xs md:text-sm leading-relaxed text-red-300 overflow-x-auto no-scrollbar">
            <code>
              <span className="text-orange-400">@RestControllerAdvice</span>{"\n"}
              <span className="text-orange-400">public class</span> GlobalExceptionHandler {"{"} {"\n\n"}
              
              {"  "} <span className="text-slate-500">// Catch specific business exceptions</span>{"\n"}
              {"  "} <span className="text-orange-400">@ExceptionHandler</span>(UserNotFoundException.<span className="text-orange-400">class</span>){"\n"}
              {"  "} <span className="text-orange-400">public</span> ResponseEntity&lt;ErrorObj&gt; handleNotFound(Exception ex) {"{"} {"\n"}
              {"    "} ErrorObj err = <span className="text-orange-400">new</span> ErrorObj(HttpStatus.NOT_FOUND, ex.getMessage());{"\n"}
              {"    "} <span className="text-orange-400">return</span> <span className="text-orange-400">new</span> ResponseEntity&lt;&gt;(err, HttpStatus.NOT_FOUND);{"\n"}
              {"  "} {"}"} {"\n\n"}

              {"  "} <span className="text-slate-500">// Catch all other unexpected errors</span>{"\n"}
              {"  "} <span className="text-orange-400">@ExceptionHandler</span>(Exception.<span className="text-orange-400">class</span>){"\n"}
              {"  "} <span className="text-orange-400">public</span> ResponseEntity&lt;ErrorObj&gt; handleGeneral(Exception ex) {"{"} {"\n"}
              {"    "} ErrorObj err = <span className="text-orange-400">new</span> ErrorObj(HttpStatus.INTERNAL_SERVER_ERROR, <span className="text-amber-400">"Server Error"</span>);{"\n"}
              {"    "} <span className="text-orange-400">return</span> <span className="text-orange-400">new</span> ResponseEntity&lt;&gt;(err, HttpStatus.INTERNAL_SERVER_ERROR);{"\n"}
              {"  "} {"}"} {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ARCHITECTURE INSIGHT: CHECKED VS UNCHECKED */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-[100px] -mr-20 -mb-20"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h5 className="font-black uppercase tracking-[0.3em] text-xs text-red-400">Clean Code Concept</h5>
                <h4 className="text-3xl font-bold leading-tight">Runtime Exceptions</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  In modern Spring development, we prefer throwing <strong>Unchecked Exceptions</strong> (RuntimeException) for business failures (e.g., <code>InsufficientFundsException</code>). This avoids "Throws" pollution in your service interfaces and allows your <code>@ControllerAdvice</code> to catch them cleanly.
                </p>
            </div>
            <div className="flex-shrink-0 bg-white/5 border border-white/10 p-6 rounded-[2rem]">
                <h6 className="text-xs font-black uppercase text-slate-500 mb-4">Recommended Response Structure</h6>
                <ul className="space-y-3">
                    {['status: 404', 'message: "User ID 5 not found"', 'timestamp: "2023-10-25..."', 'path: "/api/v1/users/5"'].map((line) => (
                        <li key={line} className="font-mono text-[10px] md:text-xs text-red-200">
                             <span className="text-slate-600">"</span>{line}<span className="text-slate-600">"</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* 5. INTERVIEW PRO TIP */}
      <div className="p-8 bg-red-50 border border-red-100 rounded-[2.5rem] flex items-start gap-6 shadow-sm">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-red-600 flex-shrink-0">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div>
            <h5 className="font-black text-red-900 mb-2 uppercase tracking-tighter">Architecture Insight</h5>
            <p className="text-sm text-red-800 leading-relaxed font-medium">
                When asked: "Why not use a try-catch in every controller method?" Answer: <strong>Don't Repeat Yourself (DRY)</strong>. Global handling makes your controllers 100% cleaner, easier to read, and ensures that every error follows the same security protocol (preventing data leaks in stack traces).
            </p>
          </div>
      </div>

    </div>
  );
}