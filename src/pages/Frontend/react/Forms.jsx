import React, { useState, useCallback } from 'react';
import { 
  ClipboardEdit, Send, User, Mail, 
  MessageSquare, ShieldCheck, AlertCircle, 
  Loader2, CheckCircle, Terminal
} from 'lucide-react';

const Forms = () => {
  /* SIMPLE STATE: 
     We keep all input data in one 'formData' object.
     'status' tracks if we are typing, sending, or finished.
  */
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); 
  const [errors, setErrors] = useState({});

  // Basic rules to check if the user typed correctly
  const validate = (values) => {
    let tempErrors = {};
    if (!values.username) tempErrors.username = "Name is required";
    if (!values.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Format: example@mail.com";
    }
    if (values.message.length < 10) tempErrors.message = "Write at least 10 letters";
    return tempErrors;
  };

  // Updates our state whenever a user types
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Hide the error message once the user starts fixing it
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops the page from refreshing
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Simulate waiting for a server (2 seconds)
    setTimeout(() => {
      console.log("Data Sent:", formData);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    /* Added responsive padding for mobile devices */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-top-6 duration-700 pb-10">
      
      {/* 1. HEADER SECTION: Responsive text and padding */}
      <section className="relative p-6 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 rotate-12 hidden sm:block">
          <ShieldCheck size={150} className="text-orange-400" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter leading-tight">
            Managing <span className="text-orange-400">Inputs</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            In React, the "State" is the boss of your form. What you see on the screen always matches what is saved in your code's memory.
          </p>
        </div>
      </section>

      {/* 2. FORM & PREVIEW GRID: Stacks on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        
        {/* The Form Card */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm order-2 lg:order-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
              <ClipboardEdit className="text-orange-500" /> Contact Form
            </h2>
            <div className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${
              status === 'submitting' ? 'bg-blue-100 text-blue-600 animate-pulse' : 
              status === 'success' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
            }`}>
              {status}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            {[
              { id: 'username', label: 'Your Name', icon: User, type: 'text', placeholder: 'Enter name' },
              { id: 'email', label: 'Email Address', icon: Mail, type: 'email', placeholder: 'example@mail.com' }
            ].map((field) => (
              <div key={field.id} className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{field.label}</label>
                <div className="relative group">
                  <field.icon className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors[field.id] ? 'text-rose-400' : 'text-slate-400 group-focus-within:text-orange-500'}`} size={18} />
                  <input 
                    name={field.id}
                    type={field.type}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full pl-12 pr-4 py-3 bg-slate-50 border-2 rounded-2xl outline-none transition-all text-sm md:text-base ${
                      errors[field.id] ? 'border-rose-200 focus:border-rose-400' : 'border-slate-100 focus:border-orange-400 bg-white'
                    }`}
                  />
                </div>
                {errors[field.id] && <p className="text-[10px] text-rose-500 font-bold ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors[field.id]}</p>}
              </div>
            ))}

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="How can we help?"
                className={`w-full p-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all text-sm md:text-base ${
                  errors.message ? 'border-rose-200 focus:border-rose-400' : 'border-slate-100 focus:border-orange-400 bg-white'
                }`}
              />
              {errors.message && <p className="text-[10px] text-rose-500 font-bold ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
            </div>

            <button 
              disabled={status === 'submitting'}
              className={`w-full py-4 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg ${
                status === 'success' ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50'
              }`}
            >
              {status === 'submitting' ? <Loader2 className="animate-spin" /> : 
               status === 'success' ? <CheckCircle /> : <Send size={18} />}
              {status === 'submitting' ? 'SENDING...' : status === 'success' ? 'SENT SUCCESSFULLY' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        {/* State Preview: Stacks on mobile, fixed on desktop side */}
        <div className="space-y-6 order-1 lg:order-2">
          {/* Real-time State Log */}
          <div className="bg-slate-900 rounded-[2rem] p-6 border-b-8 border-orange-500 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 text-orange-400 font-mono text-[10px] mb-4 uppercase tracking-widest">
              <Terminal size={16} /> <span>Live_Data_Preview</span>
            </div>
            <pre className="text-xs md:text-sm text-sky-300 font-mono leading-relaxed overflow-x-auto no-scrollbar">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>

          {/* Educational Note */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border-2 border-slate-100">
            <h3 className="text-xs md:text-sm font-black text-slate-800 uppercase mb-4 tracking-tighter italic border-b pb-2">Why State?</h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
              By keeping the data in <b>useState</b>, we can easily check for errors while the user types. This makes your app feel fast and professional. 
              <br /><br />
              It also means you can easily clear the form or show a "Thank You" message just by changing one variable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;