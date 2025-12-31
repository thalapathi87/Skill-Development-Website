import React from "react";
import { GitMerge, Layers, Zap, Code2, Info, Share2, AlertTriangle } from "lucide-react";

const RELATIONSHIP_TYPES = [
  { 
    title: "One-To-Many", 
    desc: "The most common. One Department can have many Employees.", 
    icon: <Share2 className="text-blue-600" /> 
  },
  { 
    title: "Many-To-Many", 
    desc: "Students and Courses. Requires a 'Join Table' to connect them.", 
    icon: <GitMerge className="text-purple-600" /> 
  },
  { 
    title: "One-To-One", 
    desc: "A User has exactly one Profile. Shared primary keys or foreign keys.", 
    icon: <Zap className="text-orange-600" /> 
  }
];

export default function Relationships() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <GitMerge className="w-3 h-3" /> Data Modeling
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Entity <span className="text-blue-600">Relationships</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Relationships define how different tables interact. Mastering <strong>Mapping</strong> and <strong>Ownership</strong> is crucial for preventing duplicate data and memory leaks.
        </p>
      </section>

      {/* 2. RELATIONSHIP TYPES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {RELATIONSHIP_TYPES.map((item) => (
          <div key={item.title} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 3. MASTER CODE: BI-DIRECTIONAL ONE-TO-MANY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Professional Mapping (Parent & Child)
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Parent Side */}
            <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-10 shadow-xl overflow-hidden">
                <div className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-widest">Department.java (Parent)</div>
                <pre className="font-mono text-xs text-blue-300 leading-relaxed overflow-x-auto no-scrollbar">
                    <code>
                        <span className="text-orange-400">@OneToMany</span>(mappedBy = <span className="text-amber-400">"dept"</span>, cascade = CascadeType.ALL){"\n"}
                        <span className="text-orange-400">private</span> List&lt;Employee&gt; employees;{"\n\n"}
                        <span className="text-slate-500">// Master Tip: mappedBy makes this the non-owning side</span>
                    </code>
                </pre>
            </div>
            {/* Child Side */}
            <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-10 shadow-xl overflow-hidden">
                <div className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-widest">Employee.java (Child)</div>
                <pre className="font-mono text-xs text-orange-300 leading-relaxed overflow-x-auto no-scrollbar">
                    <code>
                        <span className="text-orange-400">@ManyToOne</span>(fetch = FetchType.LAZY){"\n"}
                        <span className="text-orange-400">@JoinColumn</span>(name = <span className="text-amber-400">"dept_id"</span>){"\n"}
                        <span className="text-orange-400">private</span> Department dept;{"\n\n"}
                        <span className="text-slate-500">// FetchType.LAZY prevents loading the whole Dept object</span>
                    </code>
                </pre>
            </div>
        </div>
      </section>

      {/* 4. MASTER ARCHITECTURE: FETCH VS CASCADE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
            <h5 className="text-orange-400 font-black text-[10px] uppercase tracking-widest mb-4">Performance: FetchType</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
               <strong>LAZY:</strong> Loads data only when you call the getter. (Best for Performance).<br/><br/>
               <strong>EAGER:</strong> Loads everything immediately. (Can cause N+1 query problems).
            </p>
         </div>
         <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
            <h5 className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">Sync: CascadeType</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
               <strong>PERSIST:</strong> Saving Parent saves Child.<br/><br/>
               <strong>REMOVE:</strong> Deleting Parent deletes Child (Cascade Delete).
            </p>
         </div>
      </div>

      {/* 5. INTERVIEW PRO TIP: OWNING SIDE */}
      <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2.5rem] flex items-start gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600 flex-shrink-0">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h5 className="font-black text-blue-900 mb-2 uppercase tracking-tighter">Senior Interview Insight</h5>
            <p className="text-sm text-blue-800 leading-relaxed font-medium">
                If asked: "Who is the owner of a relationship?" Always remember: The <strong>Owning Side</strong> is the entity that contains the Foreign Key (the <code>@JoinColumn</code>). The other side must use <code>mappedBy</code> to avoid creating a duplicate join table.
            </p>
          </div>
      </div>

    </div>
  );
}