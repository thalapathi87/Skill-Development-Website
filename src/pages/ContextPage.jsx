import React, { useState } from 'react';
import { 
  Mail, Phone, Send, 
  MessageSquare, Star, Github, 
  Linkedin, Twitter, CheckCircle2, Loader2
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setStatus("sending");
    
    const submitData = new FormData();
    submitData.append("access_key", "4023c834-dfb7-4856-8ddf-94406a79f28a");
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("subject", formData.subject);
    submitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Have questions about your learning journey? Our team is here to help you master new skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            {[
              { icon: <Mail />, title: "Email Us", detail: "thalapathiofficial8@gmail.com", sub: "24/7 online support" },
              { icon: <Phone />, title: "Call Us", detail: "+91 6369207378", sub: "Mon-Sat, 9am - 6pm" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-blue-600 font-bold text-sm">{item.detail}</p>
                <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
              </div>
            ))}

            {/* Social Connect */}
            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h4 className="font-bold mb-4 italic text-blue-400">Social Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com/thalapathi87" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-colors"><Github size={20}/></a>
                <a href="https://www.linkedin.com/in/thalapathi-m" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-colors"><Linkedin size={20}/></a>
                <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-colors"><Twitter size={20}/></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageSquare size={120} className="text-blue-600" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                    <input 
                      name="name" 
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                    <input 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                  <select 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium appearance-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  disabled={status === "sending"}
                  onClick={handleSubmit}
                  className={`w-full font-black py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm ${
                    status === "success" ? "bg-green-500 shadow-green-100" : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                  } text-white disabled:opacity-50`}
                >
                  {status === "sending" && <Loader2 className="animate-spin" size={18} />}
                  {status === "success" && <><CheckCircle2 size={20}/> Message Sent!</>}
                  {status === "error" && "Error! Try Again"}
                  {status === "idle" && <><Send size={18}/> Send Message</>}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Student Feedback Section */}
        <section className="bg-blue-600 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl mb-20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10"><Star size={100} /></div>
          </div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic">Student Feedback</h2>
            <p className="text-blue-100 font-medium">Hear what our master students say about their experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { name: "Siva kumar", role: "Full Stack Dev", text: "The SQL module was amazing! The way complex joins were explained made it so simple.", rating: 5 },
              { name: "Catherine", role: "Data Analyst", text: "Best technical dashboard I've used. Very clean UI and great simple English content.", rating: 5 },
              { name: "Sanjay", role: "Student", text: "The interview Q&A section helped me crack my first backend developer job!", rating: 4 }
            ].map((rev, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} size={16} fill={starI < rev.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-blue-50 text-sm italic mb-6 leading-relaxed">"{rev.text}"</p>
                <div>
                  <h4 className="font-black text-white tracking-tight">{rev.name}</h4>
                  <p className="text-blue-200 text-xs uppercase font-bold tracking-widest">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Master Level Footer */}
        <footer className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 opacity-5">
            <Star size={200} className="text-blue-400" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black mb-4 text-blue-400 italic">LearnHub</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Empowering learners worldwide with cutting-edge technical education and hands-on experience.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/thalapathi87" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all hover:scale-110">
                  <Github size={18}/>
                </a>
                <a href="https://www.linkedin.com/in/thalapathi-m" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all hover:scale-110">
                  <Linkedin size={18}/>
                </a>
                <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all hover:scale-110">
                  <Twitter size={18}/>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest text-blue-400 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Courses', 'Blog', 'Careers', 'Contact'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest text-blue-400 mb-4">Resources</h4>
              <ul className="space-y-3">
                {['Documentation', 'Tutorials', 'API Reference', 'Community', 'Support'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest text-blue-400 mb-4">Stay Updated</h4>
              <p className="text-slate-400 text-sm mb-4">
                Get the latest courses and updates directly to your inbox.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-slate-500"
                />
                <button className="p-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
                  <Send size={18}/>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm text-center md:text-left">
                © 2025 LearnHub. All rights reserved. Built with ❤️ by Thalapathi
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;