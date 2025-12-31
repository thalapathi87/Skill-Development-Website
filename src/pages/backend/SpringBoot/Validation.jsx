import React from "react";
import { ShieldCheck, AlertTriangle, CheckCircle2, Code2, Info, Lock } from "lucide-react";

const VALIDATION_RULES = [
  { rule: "@NotNull", desc: "Ensures the field is not null.", example: "@NotNull(message = \"ID is required\")" },
  { rule: "@NotBlank", desc: "Ensures string is not null and length > 0.", example: "@NotBlank(message = \"Name is mandatory\")" },
  { rule: "@Size", desc: "Checks if the size is within boundaries.", example: "@Size(min = 8, max = 20)" },
  { rule: "@Email", desc: "Verifies if the string is a valid email format.", example: "@Email(message = \"Invalid Email\")" },
  { rule: "@Min / @Max", desc: "Validates numeric ranges.", example: "@Min(18) int age;" },
];

export default function Validation() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-10 md:pb-20 px-4 sm:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="space-y-4 text-center md:text-left pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em]">
           <ShieldCheck className="w-3 h-3" /> Data Integrity Layer
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Bean <span className="text-emerald-600">Validation</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
          Validation is the process of ensuring that the data sent by the client meets your application's requirements before processing it.
        </p>
      </section>

      {/* 2. THE VALIDATION FLOW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-emerald-200 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">JSR-303 / JSR-380</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Spring Boot uses <strong>Hibernate Validator</strong> (the standard implementation of Bean Validation) to provide a declarative way to validate DTOs using annotations.
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-amber-200 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-amber-50 rounded-2xl text-amber-600 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Error Handling</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            When validation fails, Spring throws a <strong>MethodArgumentNotValidException</strong>. At a master level, we catch this globally to return a clean error response.
          </p>
        </div>
      </div>

      {/* 3. MASTER CODE: DTO VALIDATION */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-400 px-2 font-bold text-xs uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Production DTO Validation
        </div>
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
          <pre className="font-mono text-xs md:text-sm leading-relaxed text-emerald-300 overflow-x-auto no-scrollbar">
            <code>
              <span className="text-slate-500">// 1. Define Validation in DTO</span>{"\n"}
              <span className="text-orange-400">public class</span> UserRegistrationDTO {"{"} {"\n"}
              {"  "} <span className="text-orange-400">@NotBlank</span>(message = <span className="text-amber-400">"Username cannot be empty"</span>){"\n"}
              {"  "} <span className="text-orange-400">private</span> String username;{"\n\n"}
              {"  "} <span className="text-orange-400">@Email</span>{"\n"}
              {"  "} <span className="text-orange-400">private</span> String email;{"\n"}
              {"}"} {"\n\n"}
              <span className="text-slate-500">// 2. Trigger in Controller using @Valid</span>{"\n"}
              <span className="text-orange-400">@PostMapping</span>{"\n"}
              <span className="text-orange-400">public</span> ResponseEntity&lt;String&gt; register(<span className="text-orange-400">@Valid @RequestBody</span> UserDTO dto) {"{"} {"\n"}
              {"  "} <span className="text-orange-400">return</span> ResponseEntity.ok(<span className="text-amber-400">"User is valid!"</span>);{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* 4. ESSENTIAL ANNOTATIONS TABLE (Mobile Responsive) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-600 w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Core Constraints</h2>
        </div>
        
        <div className="overflow-x-auto border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Annotation</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Logic</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {VALIDATION_RULES.map((v) => (
                <tr key={v.rule} className="hover:bg-emerald-50/20 transition-colors group">
                  <td className="px-6 py-4 font-bold text-emerald-600 font-mono text-xs">{v.rule}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{v.desc}</td>
                  <td className="px-6 py-4">
                    <code className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-md whitespace-nowrap">{v.example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. MASTER ARCHITECTURE TIP */}
      <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-emerald-600 rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-xl shadow-emerald-500/20">
                <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-emerald-400">Master Level Strategy</h5>
                <h4 className="text-2xl md:text-3xl font-bold">Custom Validations</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  Standard annotations are not always enough. For complex business rules (e.g., checking if a username is already taken in the DB), master developers create <strong>Custom Constraint Validators</strong>. This keeps your validation logic clean, reusable, and separate from your controller.
                </p>
            </div>
        </div>
      </div>

      {/* 6. INTERVIEW PRO TIP */}
      <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[2.5rem] flex items-start gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-emerald-600 flex-shrink-0">
            <Info className="w-8 h-8" />
          </div>
          <div>
            <h5 className="font-black text-emerald-900 mb-2 uppercase tracking-tighter">Interview Insight</h5>
            <p className="text-sm text-emerald-800 leading-relaxed font-medium">
                If an interviewer asks: "What happens if you forget <code className="text-emerald-700">@Valid</code> in the controller?" The answer is: <strong>Nothing.</strong> Spring will ignore all validation annotations in the DTO, and bad data will enter your system. Always ensure <code className="text-emerald-700">@Valid</code> or <code className="text-emerald-700">@Validated</code> is present.
            </p>
          </div>
      </div>

    </div>
  );
}