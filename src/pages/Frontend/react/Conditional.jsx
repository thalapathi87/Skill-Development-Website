import React, { useState } from 'react';
import { 
  Eye, EyeOff, CheckCircle2, Lock, 
  AlertTriangle, ShieldCheck, Loader2, 
  Terminal, Code
} from 'lucide-react';

const Conditional = () => {
  /* MASTER STATE: 
     Instead of just a true/false boolean, we use a string-based state 
     to handle multiple UI possibilities (State Machine pattern).
  */
  const [authState, setAuthState] = useState('loggedOut'); // Options: loggedOut, loading, loggedIn

  /* STRATEGY PATTERN: 
     Using a function with a switch statement keeps the main JSX clean 
     and makes complex conditional rendering easier to manage.
  */
  const renderStatus = () => {
    switch (authState) {
      case 'loading':
        return (
          <div className="flex flex-col items-center py-10 animate-pulse">
            <Loader2 className="animate-spin text-sky-500 mb-4" size={48} />
            <p className="text-slate-500 font-medium">Authenticating Master Access...</p>
          </div>
        );
      case 'loggedIn':
        return (
          <div className="space-y-6 animate-in zoom-in duration-500">
            <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
              <ShieldCheck size={40} className="text-emerald-600" />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-black text-slate-800">System Decrypted</h2>
              <p className="text-slate-500 text-sm">Welcome back, Senior Architect.</p>
            </div>
            <button 
              onClick={() => setAuthState('loggedOut')}
              className="w-full py-3 bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 rounded-xl font-bold transition-all"
            >
              Terminate Session
            </button>
          </div>
        );
      default: // This handles the 'loggedOut' state
        return (
          <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
            <div className="mx-auto w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <Lock size={40} />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-black text-slate-800">Master Level Security</h2>
              <p className="text-slate-500 text-sm">Restricted access area. Secure login required.</p>
            </div>
            <button 
              onClick={() => {
                setAuthState('loading');
                // Simulate a network delay for 2 seconds
                setTimeout(() => setAuthState('loggedIn'), 2000);
              }}
              className="w-full py-4 bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-black shadow-xl hover:shadow-2xl active:scale-95 transition-all"
            >
              Initialize Handshake
            </button>
          </div>
        );
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      
      {/* 1. HERO HEADER: Explaining the philosophy of Conditional Logic */}
      <section className="relative p-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl text-white shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-black mb-4">Conditional <span className="text-amber-200">Logic</span></h1>
          <p className="text-amber-50 text-lg max-w-xl leading-relaxed opacity-90">
            In high-level React development, conditional rendering is not just about hiding UI. 
            It is a design pattern used to control the state transitions of your application.
          </p>
        </div>
        <Code className="absolute -bottom-4 -right-4 w-40 h-40 opacity-20 rotate-12" />
      </section>

      {/* 2. INTERACTIVE TERMINAL: The area where the actual rendering logic is displayed */}
      <div className="bg-white p-1 rounded-3xl border-2 border-slate-100 shadow-xl">
        <div className="bg-slate-50 p-8 rounded-[1.4rem] border border-slate-200">
          <div className="max-w-sm mx-auto">
            {renderStatus()}
          </div>
        </div>
      </div>

      {/* 3. SENIOR DEVELOPER PATTERNS: Educational tips on cleaner code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pattern A: Short Circuit Logic */}
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-4 text-sky-400">
            <Terminal size={20} />
            <h3 className="font-bold">Short Circuit (&&)</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            If you only need to show UI when a value exists, use the <code className="text-sky-300">&&</code> operator instead of a ternary. It keeps your JSX much cleaner.
          </p>
        </div>

        {/* Pattern B: Early Return Pattern */}
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <CheckCircle2 size={20} />
            <h3 className="font-bold">Early Return Pattern</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Instead of writing complex logic inside the main JSX, return early at the start of your function (e.g., <code className="text-emerald-300">return null</code>). This is a hallmark of clean code.
          </p>
        </div>
      </div>

      {/* 4. MASTER WARNING TABLE: Common pitfalls and mistakes to avoid */}
      <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-rose-50 p-4 border-b border-rose-100 flex items-center gap-3">
          <AlertTriangle className="text-rose-500" size={20} />
          <h4 className="font-bold text-rose-800 uppercase tracking-tighter">Master Danger Zone</h4>
        </div>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-slate-100">
            <tr className="bg-white">
              <td className="px-6 py-4 font-mono text-rose-600 font-bold">Avoid Nested Ternaries</td>
              <td className="px-6 py-4 text-slate-500 italic">
                Placing a ternary inside another ternary ruins readability. In such cases, use a Switch statement or an object map instead.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 font-mono text-rose-600 font-bold">The "0" Bug in JSX</td>
              <td className="px-6 py-4 text-slate-500 italic">
                When using <code>array.length && List</code>, if the length is 0, React will render "0" on the screen. Be careful with numeric values!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Conditional;