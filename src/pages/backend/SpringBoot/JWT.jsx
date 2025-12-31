import React from "react";
import { ShieldCheck, Cpu, Key, Database, Code2, Info, Lock, Share2,Settings } from "lucide-react";

export default function JWTAuth() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <ShieldCheck className="w-3 h-3" /> Stateless Security
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          JWT <span className="text-purple-600">Authentication</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          JSON Web Tokens are an open standard used to share security information between a client and a server. They are <strong>self-contained</strong> and <strong>digitally signed</strong>.
        </p>
      </section>

      {/* 2. THE JWT STRUCTURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Header", desc: "Contains the algorithm (HS256) and the token type (JWT).", icon: <Settings className="text-pink-500" /> },
          { title: "Payload", desc: "Contains 'Claims' like userId, username, and expiration time.", icon: <Database className="text-purple-500" /> },
          { title: "Signature", desc: "Verified using a 'Secret Key' to ensure the token hasn't been tampered with.", icon: <Lock className="text-indigo-500" /> }
        ].map(part => (
          <div key={part.title} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
            <div className="mb-4">{part.icon}</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">{part.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{part.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. MASTER CODE: JWT FILTER LOGIC */}
      <section className="space-y-6 text-left">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> The Security Filter
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <pre className="font-mono text-xs md:text-sm leading-relaxed text-purple-300 overflow-x-auto no-scrollbar">
            <code>
              <span className="text-slate-500">// Custom filter to intercept every request</span>{"\n"}
              <span className="text-orange-400">public class</span> JwtFilter <span className="text-orange-400">extends</span> OncePerRequestFilter {"{"} {"\n\n"}
              {"  "} <span className="text-orange-400">@Override</span>{"\n"}
              {"  "} <span className="text-orange-400">protected void</span> doFilterInternal(HttpServletRequest req, ...) {"{"} {"\n"}
              {"    "} <span className="text-orange-400">String</span> token = req.getHeader(<span className="text-amber-400">"Authorization"</span>);{"\n\n"}
              {"    "} <span className="text-orange-400">if</span> (token != <span className="text-orange-400">null</span> && token.startsWith(<span className="text-amber-400">"Bearer "</span>)) {"{"} {"\n"}
              {"      "} <span className="text-slate-500">// 1. Validate Token Signature</span>{"\n"}
              {"      "} <span className="text-slate-500">// 2. Extract Username from Claims</span>{"\n"}
              {"      "} <span className="text-slate-500">// 3. Set Authentication in Spring SecurityContext</span>{"\n"}
              {"    "} {"}"} {"\n"}
              {"    "} filterChain.doFilter(req, res);{"\n"}
              {"  "} {"}"} {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ARCHITECTURE INSIGHT: STATELESS VS STATEFUL */}
      
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden group">
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-24 h-24 bg-purple-600 rounded-[2.5rem] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-purple-500/20">
                <Share2 className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
                <h5 className="font-black uppercase tracking-[0.3em] text-xs text-purple-400">Architecture Strategy</h5>
                <h4 className="text-3xl font-bold">Why JWT for Microservices?</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  In a <strong>Stateless</strong> architecture, the server doesn't store session data in memory. This is critical for scaling. If you have 10 instances of your app, any instance can handle the request because the identity is in the token, not on the server's hard drive.
                </p>
            </div>
        </div>
      </div>

      {/* 5. INTERVIEW PRO TIP */}
      <div className="p-8 bg-purple-50 border border-purple-100 rounded-[2.5rem] flex items-start gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-purple-600 flex-shrink-0">
            <Info className="w-8 h-8" />
          </div>
          <div>
            <h5 className="font-black text-purple-900 mb-2 uppercase tracking-tighter">Master Security Tip</h5>
            <p className="text-sm text-purple-800 leading-relaxed font-medium">
                When asked: "Is JWT safe to store passwords?" The answer is a loud <strong>NO</strong>. JWT payloads are only <code>Base64</code> encoded, not encrypted. Anyone can decode them. Never put sensitive data like passwords or credit card numbers in the JWT payload.
            </p>
          </div>
      </div>

    </div>
  );
}