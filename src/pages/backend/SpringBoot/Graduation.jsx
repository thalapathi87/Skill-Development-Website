import React from "react";
import { Award, Trophy, Star, Github, ExternalLink, Rocket, Heart, CheckCircle } from "lucide-react";

export default function Graduation() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20 px-4 sm:px-6">
      
      {/* 1. CELEBRATION HERO */}
      <section className="text-center space-y-6 pt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-[0.3em] animate-bounce">
           <Trophy className="w-4 h-4" /> Curriculum Completed
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter">
          Mastery <span className="text-green-600">Achieved.</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
          You have successfully navigated the architecture of Spring Boot. From Dependency Injection to JWT Security and Cloud Deployment.
        </p>
      </section>

      {/* 2. THE ULTIMATE PORTFOLIO PROJECT */}
      <section className="relative p-8 md:p-16 bg-slate-900 rounded-[3rem] text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h5 className="text-green-400 font-black uppercase tracking-widest text-xs">Recommended Project</h5>
                    <h2 className="text-3xl md:text-4xl font-bold">Multi-Vendor E-Commerce Engine</h2>
                </div>
                <p className="text-slate-400 leading-relaxed font-medium">
                    To prove your "Master Level" skills, build a system that handles complex logic. This project will require every module you've studied:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { t: "Authentication", d: "JWT with Role-based access" },
                        { t: "Database", d: "Complex JPA Relationships" },
                        { t: "Validation", d: "Strict DTO constraints" },
                        { t: "Error Handling", d: "Global Exception Advice" }
                    ].map(item => (
                        <div key={item.t} className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-bold">{item.t}</p>
                                <p className="text-[10px] text-slate-500">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold flex items-center gap-3">
                    <Github className="w-6 h-6" /> GitHub Checklist
                </h4>
                <ul className="space-y-4">
                    {[
                        "Clean Folder Structure (Controller/Service/Repo)",
                        "README with API Documentation (Swagger/OpenAPI)",
                        "Included Dockerfile for easy deployment",
                        "Unit Tests using JUnit 5 & Mockito"
                    ].map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" /> {step}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* 3. BEYOND THE BASICS (Next Steps) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: "Microservices", 
            desc: "Learn Spring Cloud, Eureka Discovery, and Gateway for distributed systems.", 
            color: "text-blue-500",
            bg: "bg-blue-50"
          },
          { 
            title: "Caching", 
            desc: "Integrate Redis to boost your API performance by 10x.", 
            color: "text-red-500",
            bg: "bg-red-50"
          },
          { 
            title: "Unit Testing", 
            desc: "Master JUnit and Mockito to ensure 100% code reliability.", 
            color: "text-orange-500",
            bg: "bg-orange-50"
          }
        ].map(card => (
          <div key={card.title} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all group">
            <h4 className={`text-lg font-black ${card.color} mb-3 uppercase tracking-tighter`}>{card.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">{card.desc}</p>
            <button className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:gap-4 transition-all uppercase tracking-widest">
                Explore Module <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* 4. FINAL MOTIVATION */}
      <div className="p-10 bg-green-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-green-100">
        <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-black">Keep Building, Master.</h3>
            <p className="opacity-90 font-medium">The best way to learn is to get your hands dirty with real code.</p>
        </div>
        <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-green-600 font-black rounded-2xl hover:bg-slate-50 transition-colors uppercase tracking-widest text-xs">
                Download PDF Cert
            </button>
            <button className="p-4 bg-green-700 rounded-2xl hover:bg-green-800 transition-colors">
                <Heart className="w-6 h-6 fill-current" />
            </button>
        </div>
      </div>

    </div>
  );
}