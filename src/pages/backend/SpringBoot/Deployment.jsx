import React from "react";
import { Rocket, Package, Container, Terminal, Code2, Info, Cloud, CheckCircle2 } from "lucide-react";

export default function Deployment() {
  return (
    /* added px-4 for mobile breathing room and max-width for desktop */
    <div className="max-w-7xl mx-auto space-y-10 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <Rocket className="w-3 h-3" /> Production Ready
        </div>
        {/* Adjusted text sizes: 3xl for mobile, 6xl for desktop */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Build & <span className="text-sky-600">Deployment</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Moving your code from your laptop to the real world. Learn how to package your app into a <strong>Container</strong> so it can run anywhere reliably.
        </p>
      </section>

      {/*  */}

      {/* 2. THE DEPLOYMENT STRATEGY - Grid 1 col on mobile, 2 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-sky-200 transition-all group">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="p-3 bg-sky-50 rounded-2xl text-sky-600 group-hover:scale-110 transition-transform">
                <Package className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">Fat JAR</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
            Spring Boot puts your code and the web server (Tomcat) into one single <code>.jar</code> file. You can run this file on any computer that has Java installed.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-indigo-200 transition-all group">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform">
                <Container className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">Dockerization</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
            This is like putting your app in a standardized shipping container. It ensures your app runs exactly the same way in "Dev," "Test," and "Production."
          </p>
        </div>
      </div>

      {/* 3. MASTER CODE: DOCKERFILE */}
      <section className="space-y-4 md:space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-[10px] md:text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Production Dockerfile
        </div>
        
        {/*  */}

        <div className="bg-[#0f172a] rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden md:block">
            <Terminal className="text-white w-32 h-32" />
          </div>
          {/* Added 'no-scrollbar' and 'whitespace-pre' for better mobile code reading */}
          <pre className="font-mono text-[10px] md:text-sm leading-relaxed text-sky-300 overflow-x-auto whitespace-pre">
            <code>
              <span className="text-slate-500"># Use a lightweight Java 21 image</span>{"\n"}
              <span className="text-orange-400">FROM</span> eclipse-temurin:21-jdk-alpine{"\n\n"}
              <span className="text-slate-500"># Create a folder for the app</span>{"\n"}
              <span className="text-orange-400">WORKDIR</span> /app{"\n\n"}
              <span className="text-slate-500"># Copy your JAR file</span>{"\n"}
              <span className="text-orange-400">COPY</span> target/*.jar app.jar{"\n\n"}
              <span className="text-slate-500"># Start the app</span>{"\n"}
              <span className="text-orange-400">ENTRYPOINT</span> ["java", "-jar", "app.jar"]
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ARCHITECTURE INSIGHT: EXTERNALIZED CONFIG */}
      <div className="p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[4rem] text-white relative overflow-hidden group">
        {/* lg:flex-row stacks on mobile, side-by-side on large screens */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-sky-600 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-sky-500/20">
                <Cloud className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>
            <div className="space-y-4 text-center lg:text-left">
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-sky-400">Master Level Concept</h5>
                <h4 className="text-xl md:text-3xl font-bold">Externalized Settings</h4>
                <p className="text-slate-400 text-xs md:text-base leading-relaxed font-medium">
                  Never save passwords inside your code. Use <strong>Environment Variables</strong>. Spring Boot can change settings without you needing to rebuild the app.
                </p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-sky-300">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> Security
                  </div>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-sky-300">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> Scalability
                  </div>
                </div>
            </div>
        </div>
      </div>

      {/* 5. INTERVIEW PRO TIP - Stacks icons on mobile */}
      <div className="p-6 md:p-8 bg-sky-50 border border-sky-100 rounded-[2rem] flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
          <div className="p-3 bg-white rounded-2xl shadow-sm text-sky-600 flex-shrink-0">
            <Info className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-black text-slate-900 mb-2 uppercase tracking-tighter text-[10px] md:text-sm">Interview Pro Tip</h5>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                When asked about "Profiles": You use <code>application-dev.properties</code> for testing and <code>application-prod.properties</code> for live. Switch them using the <code>spring.profiles.active</code> setting.
            </p>
          </div>
      </div>

    </div>
  );
}