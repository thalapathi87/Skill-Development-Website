import React from "react";
import { ShieldCheck, Lock, Users, Key, Code2, Info, Fingerprint } from "lucide-react";

export default function Security() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
           <ShieldCheck className="w-3 h-3 text-green-500" /> Security Layer
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Spring <span className="text-green-600">Security</span> Basics
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Security is the most important part of any app. Spring Security acts like a <strong>Safety Gate</strong> (using Filters) that checks every request before it reaches your data.
        </p>
      </section>

      {/* 2. AUTHENTICATION VS AUTHORIZATION (Responsive Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:border-green-200 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-50 rounded-2xl text-green-600 group-hover:scale-110 transition-transform">
                <Fingerprint className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Authentication</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            This answers: <strong>"Who are you?"</strong> It verifies your identity using a password, an OTP, or a fingerprint.
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Authorization</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            This answers: <strong>"What can you do?"</strong> It checks if you have permission to do something, like an Admin deleting a user.
          </p>
        </div>
      </div>

      {/* 3. SECURITY CONFIGURATION (Code block) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] md:text-xs uppercase tracking-widest text-center md:text-left">
            <Code2 className="w-4 h-4" /> Modern Security Setup
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden sm:block">
            <Lock className="text-white w-32 h-32" />
          </div>
          <pre className="font-mono text-xs md:text-sm leading-relaxed text-green-300 overflow-x-auto no-scrollbar">
            <code>
              <span className="text-orange-400">@Configuration</span>{"\n"}
              <span className="text-orange-400">@EnableWebSecurity</span>{"\n"}
              <span className="text-orange-400">public class</span> SecurityConfig {"{"} {"\n\n"}
              {"  "} <span className="text-orange-400">@Bean</span>{"\n"}
              {"  "} <span className="text-orange-400">public</span> SecurityFilterChain filterChain(HttpSecurity http) {"{"} {"\n"}
              {"    "} <span className="text-slate-500">// Define who can see what</span>{"\n"}
              {"    "} http.<span className="text-blue-400">authorizeHttpRequests</span>(auth -&gt; auth{"\n"}
              {"      "}.<span className="text-blue-400">requestMatchers</span>(<span className="text-amber-400">"/public/**"</span>).<span className="text-blue-400">permitAll</span>(){"\n"}
              {"      "}.<span className="text-blue-400">anyRequest</span>().<span className="text-blue-400">authenticated</span>());{"\n\n"}
              {"    "} <span className="text-orange-400">return</span> http.<span className="text-blue-400">build</span>();{"\n"}
              {"  "} {"}"} {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ARCHITECTURE INSIGHT */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden group">
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12 items-center text-center lg:text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-green-500/20">
                <Key className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <div className="space-y-4">
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-green-400">Master Level Concept</h5>
                <h4 className="text-2xl md:text-3xl font-bold">DelegatingFilterProxy</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  Spring Security doesn't work by magic. It uses a <strong>Chain of Filters</strong>. The <code>DelegatingFilterProxy</code> is the link that connects the standard web server to Spring's security logic. It passes every request through a list of checks before letting it reach your Controller.
                </p>
            </div>
        </div>
      </div>

      {/* 5. INTERVIEW PRO TIP */}
      <div className="p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col sm:flex-row items-start gap-4 md:gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-green-600 flex-shrink-0 mx-auto sm:mx-0">
            <Info className="w-8 h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-black text-slate-900 mb-2 uppercase tracking-tighter text-xs md:text-sm">Quick Interview Tip</h5>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              Never say you "encrypt" passwords in the database. Always say you <strong>"Hash"</strong> them using <code>BCrypt</code>. Hashing is a one-way street—even if someone steals the data, they can't turn the hash back into the real password.
            </p>
          </div>
      </div>

    </div>
  );
}